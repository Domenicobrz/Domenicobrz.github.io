let finalPass = `
#if defined( DITHERING )

  gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif



vec3 fnormal = vec3(0.0);
// fnormal.x = clamp(vNormal.x, 0.0, 1.0);
// fnormal.y = clamp(vNormal.y, 0.0, 1.0);
// fnormal.z = clamp(vNormal.z, 0.0, 1.0);

fnormal = reflect(geometry.viewDir, geometry.normal);
// fnormal = normalize(vNormal);



vec4 envMapColor = textureCube( envMap, geometry.normal, 2.0); 
gl_FragColor.rgb = envMapColor.rgb;


if(abs(fnormal.x) > 1.0) gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);
if(abs(fnormal.y) > 1.0) gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);
if(abs(fnormal.z) > 1.0) gl_FragColor.rgb = vec3(1.0, 0.0, 0.0);
`;