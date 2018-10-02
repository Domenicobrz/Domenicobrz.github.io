let envPhysical = `


varying vec3 vNormal2;


// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {

		//float envMapWidth = pow( 2.0, maxMIPLevelScalar );
		//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		float maxMIPLevelScalar = float( maxMIPLevel );
		float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}




#if defined( USE_ENVMAP ) && defined( PHYSICAL )

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

        // vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );
        // reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
        // vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
        // vec4 envMapColor = textureCube( envMap, queryReflectVec, 15.0 );
        // envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
        // return envMapColor.rgb * envMapIntensity;




        
		// // // // // // vec3 worldNormal = reflect( -geometry.viewDir, geometry.normal );
        // // // // // // worldNormal = inverseTransformDirection( vNormal, viewMatrix );
        // // // // // // // vec3 worldNormal = geometry.normal;
        // // // // // // // worldNormal = (viewMatrix * vec4(worldNormal.xyz, 0.0)).xyz;
		// // // // // // vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
        // vec4 envMapColor = textureCube( envMap, normalize(vNormal), 15.0); //float( maxMIPLevel ) );
		// envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		// // return PI * envMapColor.rgb * envMapIntensity;
		// return vNormal;





		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
        vec4 envMapColor = textureCube( envMap, queryVec, 5.0); //float( maxMIPLevel ) );
		envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		return PI * envMapColor.rgb * envMapIntensity;

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );

		#else

			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

            #endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
                envMapColor = vec4(10.0, 0.0,0.0, 1.0);

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_SPHERE )

			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`;