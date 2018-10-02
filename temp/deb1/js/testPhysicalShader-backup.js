var shaderTestString = `

// #extension GL_EXT_shader_texture_lod : enable
// precision highp float;
// precision highp int;
// #define SHADER_NAME MeshPhysicalMaterial
// #define PHYSICAL 
// #define GAMMA_FACTOR 2
// #define USE_MAP
// #define USE_ENVMAP
// #define ENVMAP_TYPE_CUBE
// #define ENVMAP_MODE_REFLECTION
// #define ENVMAP_BLENDING_MULTIPLY
// #define DOUBLE_SIDED
// #define TEXTURE_LOD_EXT
// uniform mat4 viewMatrix;
// uniform vec3 cameraPosition;
// #define TONE_MAPPING
// #ifndef saturate
//     #define saturate(a) clamp( a, 0.0, 1.0 )
// #endif
// uniform float toneMappingExposure;
// uniform float toneMappingWhitePoint;
// vec3 LinearToneMapping( vec3 color ) {
//     return toneMappingExposure * color;
// }
// vec3 ReinhardToneMapping( vec3 color ) {
//     color *= toneMappingExposure;
//     return saturate( color / ( vec3( 1.0 ) + color ) );
// }
// #define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
// vec3 Uncharted2ToneMapping( vec3 color ) {
//     color *= toneMappingExposure;
//     return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
// }
// vec3 OptimizedCineonToneMapping( vec3 color ) {
//     color *= toneMappingExposure;
//     color = max( vec3( 0.0 ), color - 0.004 );
//     return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
// }
// vec3 toneMapping( vec3 color ) {
//     return LinearToneMapping( color );
// }
// vec4 LinearToLinear( in vec4 value ) {
//     return value;
// }
// vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
//     return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );
// }
// vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
//     return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );
// }
// vec4 sRGBToLinear( in vec4 value ) {
//     return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );
// }
// vec4 LinearTosRGB( in vec4 value ) {
//     return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );
// }
// vec4 RGBEToLinear( in vec4 value ) {
//     return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
// }
// vec4 LinearToRGBE( in vec4 value ) {
//     float maxComponent = max( max( value.r, value.g ), value.b );
//     float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
//     return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
// }
// vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
//     return vec4( value.xyz * value.w * maxRange, 1.0 );
// }
// vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
//     float maxRGB = max( value.x, max( value.g, value.b ) );
//     float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
//     M = ceil( M * 255.0 ) / 255.0;
//     return vec4( value.rgb / ( M * maxRange ), M );
// }
// vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
//     return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
// }
// vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
//     float maxRGB = max( value.x, max( value.g, value.b ) );
//     float D = max( maxRange / maxRGB, 1.0 );
//     D = min( floor( D ) / 255.0, 1.0 );
//     return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
// }
// const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
// vec4 LinearToLogLuv( in vec4 value ) {
//     vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;
//     Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));
//     vec4 vResult;
//     vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
//     float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
//     vResult.w = fract(Le);
//     vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;
//     return vResult;
// }
// const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
// vec4 LogLuvToLinear( in vec4 value ) {
//     float Le = value.z * 255.0 + value.w;
//     vec3 Xp_Y_XYZp;
//     Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);
//     Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
//     Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
//     vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;
//     return vec4( max(vRGB, 0.0), 1.0 );
// }
// vec4 mapTexelToLinear( vec4 value ) {
//     return LinearToLinear( value );
// }
// vec4 envMapTexelToLinear( vec4 value ) {
//     return LinearToLinear( value );
// }
// vec4 emissiveMapTexelToLinear( vec4 value ) {
//     return LinearToLinear( value );
// }
// vec4 linearToOutputTexel( vec4 value ) {
//     return LinearToGamma( value, float( GAMMA_FACTOR ) );
// }
#define PHYSICAL
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifndef STANDARD
    uniform float clearCoat;
    uniform float clearCoatRoughness;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
    varying vec3 vNormal;
#endif
#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#define saturate(a) clamp( a, 0.0, 1.0 )
#define whiteCompliment(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) {
    return x*x;
}
float pow3( const in float x ) {
    return x*x*x;
}
float pow4( const in float x ) {
    float x2 = x*x;
    return x2*x2;
}
float average( const in vec3 color ) {
    return dot( color, vec3( 0.3333 ) );
}
highp float rand( const in vec2 uv ) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot( uv.xy, vec2( a, b ) ), sn = mod( dt, PI );
    return fract(sin(sn) * c);
}
struct IncidentLight {
    vec3 color;
    vec3 direction;
    bool visible;
};
struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};
struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
    float distance = dot( planeNormal, point - pointOnPlane );
    return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
    return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
    return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
    mat3 tmp;
    tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
    tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
    tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
    return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}
vec3 packNormalToRGB( const in vec3 normal ) {
    return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
    return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;
const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8;
    return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
    return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
    return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
    return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
    return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
#if defined( DITHERING )
    vec3 dithering( vec3 color ) {
        float grid_position = rand( gl_FragCoord.xy );
        vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
        dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
        return color + dither_shift_RGB;
    }
#endif

#ifdef USE_COLOR
    varying vec3 vColor;
#endif

#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )
    varying vec2 vUv;
#endif
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
#endif
#ifdef USE_MAP
    uniform sampler2D map;
#endif

#ifdef USE_ALPHAMAP
    uniform sampler2D alphaMap;
#endif

#ifdef USE_AOMAP
    uniform sampler2D aoMap;
    uniform float aoMapIntensity;
#endif
#ifdef USE_LIGHTMAP
    uniform sampler2D lightMap;
    uniform float lightMapIntensity;
#endif
#ifdef USE_EMISSIVEMAP
    uniform sampler2D emissiveMap;
#endif

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
    if( decayExponent > 0.0 ) {
        #if defined ( PHYSICALLY_CORRECT_LIGHTS )
            float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
            float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
            return distanceFalloff * maxDistanceCutoffFactor;
        #else
            return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
        #endif
    }
    return 1.0;
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
    float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
    return ( 1.0 - specularColor ) * fresnel + specularColor;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
    float a2 = pow2( alpha );
    float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
    float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
    return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
    float a2 = pow2( alpha );
    float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
    float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
    return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
    float a2 = pow2( alpha );
    float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
    return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
    float alpha = pow2( roughness );
    vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
    float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
    float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
    float dotNH = saturate( dot( geometry.normal, halfDir ) );
    float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
    vec3 F = F_Schlick( specularColor, dotLH );
    float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
    return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
    const float LUT_SIZE = 64.0;
    const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
    const float LUT_BIAS = 0.5 / LUT_SIZE;
    float dotNV = saturate( dot( N, V ) );
    vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
    uv = uv * LUT_SCALE + LUT_BIAS;
    return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
    float l = length( f );
    return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
    float x = dot( v1, v2 );
    float y = abs( x );
    float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
    float b = 3.4175940 + ( 4.1616724 + y ) * y;
    float v = a / b;
    float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
    return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
    vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
    vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
    vec3 lightNormal = cross( v1, v2 );
    if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
    vec3 T1, T2;
    T1 = normalize( V - N * dot( V, N ) );
    T2 = - cross( N, T1 );
    mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
    vec3 coords[ 4 ];
    coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
    coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
    coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
    coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
    coords[ 0 ] = normalize( coords[ 0 ] );
    coords[ 1 ] = normalize( coords[ 1 ] );
    coords[ 2 ] = normalize( coords[ 2 ] );
    coords[ 3 ] = normalize( coords[ 3 ] );
    vec3 vectorFormFactor = vec3( 0.0 );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
    vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
    float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
    return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {
    float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
    const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
    const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
    vec4 r = roughness * c0 + c1;
    float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
    vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;
    return specularColor * AB.x + AB.y;
}
float G_BlinnPhong_Implicit( ) {
    return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
    return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
    vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
    float dotNH = saturate( dot( geometry.normal, halfDir ) );
    float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
    vec3 F = F_Schlick( specularColor, dotLH );
    float G = G_BlinnPhong_Implicit( );
    float D = D_BlinnPhong( shininess, dotNH );
    return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
    return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
    return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#ifdef ENVMAP_TYPE_CUBE_UV
    #define cubeUV_textureSize (1024.0)
    int getFaceFromDirection(vec3 direction) {
        vec3 absDirection = abs(direction);
        int face = -1;
        if( absDirection.x > absDirection.z ) {
            if(absDirection.x > absDirection.y )
            face = direction.x > 0.0 ? 0 : 3;
            else
            face = direction.y > 0.0 ? 1 : 4;
        }
        else {
            if(absDirection.z > absDirection.y )
            face = direction.z > 0.0 ? 2 : 5;
            else
            face = direction.y > 0.0 ? 1 : 4;
        }
        return face;
    }
    #define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)
    #define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))
    vec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {
        float scale = exp2(cubeUV_maxLods1 - roughnessLevel);
        float dxRoughness = dFdx(roughness);
        float dyRoughness = dFdy(roughness);
        vec3 dx = dFdx( vec * scale * dxRoughness );
        vec3 dy = dFdy( vec * scale * dyRoughness );
        float d = max( dot( dx, dx ), dot( dy, dy ) );
        d = clamp(d, 1.0, cubeUV_rangeClamp);
        float mipLevel = 0.5 * log2(d);
        return vec2(floor(mipLevel), fract(mipLevel));
    }
    #define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)
    #define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)
    vec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {
        mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;
        float a = 16.0 * cubeUV_rcpTextureSize;
        vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );
        vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;
        float powScale = exp2_packed.x * exp2_packed.y;
        float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;
        float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;
        bool bRes = mipLevel == 0.0;
        scale = bRes && (scale < a) ? a : scale;
        vec3 r;
        vec2 offset;
        int face = getFaceFromDirection(direction);
        float rcpPowScale = 1.0 / powScale;
        if( face == 0) {
            r = vec3(direction.x, -direction.z, direction.y);
            offset = vec2(0.0+mipOffset, 0.75 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
        }
        else if( face == 1) {
            r = vec3(direction.y, direction.x, direction.z);
            offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
        }
        else if( face == 2) {
            r = vec3(direction.z, direction.x, direction.y);
            offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;
        }
        else if( face == 3) {
            r = vec3(direction.x, direction.z, direction.y);
            offset = vec2(0.0+mipOffset, 0.5 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
        }
        else if( face == 4) {
            r = vec3(direction.y, direction.x, -direction.z);
            offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
        }
        else {
            r = vec3(direction.z, -direction.x, direction.y);
            offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);
            offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;
        }
        r = normalize(r);
        float texelOffset = 0.5 * cubeUV_rcpTextureSize;
        vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;
        vec2 base = offset + vec2( texelOffset );
        return base + s * ( scale - 2.0 * texelOffset );
    }
    #define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)
    vec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {
        float roughnessVal = roughness* cubeUV_maxLods3;
        float r1 = floor(roughnessVal);
        float r2 = r1 + 1.0;
        float t = fract(roughnessVal);
        vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);
        float s = mipInfo.y;
        float level0 = mipInfo.x;
        float level1 = level0 + 1.0;
        level1 = level1 > 5.0 ? 5.0 : level1;
        level0 += min( floor( s + 0.5 ), 5.0 );
        vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);
        vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));
        vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);
        vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));
        vec4 result = mix(color10, color20, t);
        return vec4(result.rgb, 1.0);
    }
#endif

#if defined( USE_ENVMAP ) || defined( PHYSICAL )
    uniform float reflectivity;
    uniform float envMapIntensity;
#endif
#ifdef USE_ENVMAP
    #if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )
        varying vec3 vWorldPosition;
    #endif
    #ifdef ENVMAP_TYPE_CUBE
        uniform samplerCube envMap;
    #else
        uniform sampler2D envMap;
    #endif
    uniform float flipEnvMap;
    uniform int maxMipLevel;
    #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )
        uniform float refractionRatio;
    #else
        varying vec3 vReflect;
    #endif
#endif

#if defined( USE_ENVMAP ) && defined( PHYSICAL )
    vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
        vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
        #ifdef ENVMAP_TYPE_CUBE
            vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
            #ifdef TEXTURE_LOD_EXT
                vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
            #else
                vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
            #endif
            envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
        #elif defined( ENVMAP_TYPE_CUBE_UV )
            vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
            vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );
        #else
            vec4 envMapColor = vec4( 0.0 );
        #endif

        return PI * envMapColor.rgb * envMapIntensity;
    }
    float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {
        float maxMIPLevelScalar = float( maxMIPLevel );
        float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );
        return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
    }
    vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {
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
            #endif
            envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
            #elif defined( ENVMAP_TYPE_SPHERE )
            vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
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

#ifdef USE_FOG
    uniform vec3 fogColor;
    varying vec3 vFogPosition;
    #ifdef FOG_EXP2
        uniform float fogDensity;
    #else
        uniform float fogNear;
        uniform float fogFar;
    #endif
#endif

uniform vec3 ambientLightColor;
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
    vec3 irradiance = ambientLightColor;
    #ifndef PHYSICALLY_CORRECT_LIGHTS
        irradiance *= PI;
    #endif
    return irradiance;
}
#if 0 > 0
    struct DirectionalLight {
        vec3 direction;
        vec3 color;
        int shadow;
        float shadowBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform DirectionalLight directionalLights[ 0 ];
    void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
        directLight.color = directionalLight.color;
        directLight.direction = directionalLight.direction;
        directLight.visible = true;
    }
#endif
#if 0 > 0
    struct PointLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
        int shadow;
        float shadowBias;
        float shadowRadius;
        vec2 shadowMapSize;
        float shadowCameraNear;
        float shadowCameraFar;
    };
    uniform PointLight pointLights[ 0 ];
    void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
        vec3 lVector = pointLight.position - geometry.position;
        directLight.direction = normalize( lVector );
        float lightDistance = length( lVector );
        directLight.color = pointLight.color;
        directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
        directLight.visible = ( directLight.color ! = vec3( 0.0 ) );
    }
#endif
#if 0 > 0
    struct SpotLight {
        vec3 position;
        vec3 direction;
        vec3 color;
        float distance;
        float decay;
        float coneCos;
        float penumbraCos;
        int shadow;
        float shadowBias;
        float shadowRadius;
        vec2 shadowMapSize;
    };
    uniform SpotLight spotLights[ 0 ];
    void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
        vec3 lVector = spotLight.position - geometry.position;
        directLight.direction = normalize( lVector );
        float lightDistance = length( lVector );
        float angleCos = dot( directLight.direction, spotLight.direction );
        if ( angleCos > spotLight.coneCos ) {
            float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
            directLight.color = spotLight.color;
            directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
            directLight.visible = true;
        }
        else {
            directLight.color = vec3( 0.0 );
            directLight.visible = false;
        }
    
    }
#endif
#if 0 > 0
    struct RectAreaLight {
        vec3 color;
        vec3 position;
        vec3 halfWidth;
        vec3 halfHeight;
    };
    uniform sampler2D ltc_1;
    uniform sampler2D ltc_2;
    uniform RectAreaLight rectAreaLights[ 0 ];
#endif
#if 0 > 0
    struct HemisphereLight {
        vec3 direction;
        vec3 skyColor;
        vec3 groundColor;
    };
    uniform HemisphereLight hemisphereLights[ 0 ];
    vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
        float dotNL = dot( geometry.normal, hemiLight.direction );
        float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
        vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
        #ifndef PHYSICALLY_CORRECT_LIGHTS
            irradiance *= PI;
        #endif
        return irradiance;
    }
#endif

struct PhysicalMaterial {
    vec3	diffuseColor;
    float	specularRoughness;
    vec3	specularColor;
    #ifndef STANDARD
        float clearCoat;
        float clearCoatRoughness;
    #endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {
    return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if 0 > 0
    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
        vec3 normal = geometry.normal;
        vec3 viewDir = geometry.viewDir;
        vec3 position = geometry.position;
        vec3 lightPos = rectAreaLight.position;
        vec3 halfWidth = rectAreaLight.halfWidth;
        vec3 halfHeight = rectAreaLight.halfHeight;
        vec3 lightColor = rectAreaLight.color;
        float roughness = material.specularRoughness;
        vec3 rectCoords[ 4 ];
        rectCoords[ 0 ] = lightPos - halfWidth - halfHeight;
        rectCoords[ 1 ] = lightPos + halfWidth - halfHeight;
        rectCoords[ 2 ] = lightPos + halfWidth + halfHeight;
        rectCoords[ 3 ] = lightPos - halfWidth + halfHeight;
        vec2 uv = LTC_Uv( normal, viewDir, roughness );
        vec4 t1 = texture2D( ltc_1, uv );
        vec4 t2 = texture2D( ltc_2, uv );
        mat3 mInv = mat3(
        vec3( t1.x, 0, t1.y ), vec3(    0, 1, 0 ), vec3( t1.z, 0, t1.w )
        );
        vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
        reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
        reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
    }
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
    vec3 irradiance = dotNL * directLight.color;
    #ifndef PHYSICALLY_CORRECT_LIGHTS
        irradiance *= PI;
    #endif
    #ifndef STANDARD
        float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
    #else
        float clearCoatDHR = 0.0;
    #endif
    reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );
    reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
    #ifndef STANDARD
        reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
    #endif
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    #ifndef STANDARD
        float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
        float dotNL = dotNV;
        float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );
    #else
        float clearCoatDHR = 0.0;
    #endif
    reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );
    #ifndef STANDARD
        reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );
    #endif
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
    return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
#ifdef USE_SHADOWMAP
    #if 0 > 0
        uniform sampler2D directionalShadowMap[ 0 ];
        varying vec4 vDirectionalShadowCoord[ 0 ];
    #endif
    #if 0 > 0
        uniform sampler2D spotShadowMap[ 0 ];
        varying vec4 vSpotShadowCoord[ 0 ];
    #endif
    #if 0 > 0
        uniform sampler2D pointShadowMap[ 0 ];
        varying vec4 vPointShadowCoord[ 0 ];
    #endif
    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
    }
    float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
        const vec2 offset = vec2( 0.0, 1.0 );
        vec2 texelSize = vec2( 1.0 ) / size;
        vec2 centroidUV = floor( uv * size + 0.5 ) / size;
        float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
        float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
        float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
        float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
        vec2 f = fract( uv * size + 0.5 );
        float a = mix( lb, lt, f.y );
        float b = mix( rb, rt, f.y );
        float c = mix( a, b, f.x );
        return c;
    }
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
        float shadow = 1.0;
        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;
        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );
        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
        bool frustumTest = all( frustumTestVec );
        if ( frustumTest ) {
            #if defined( SHADOWMAP_TYPE_PCF )
                vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
                float dx0 = - texelSize.x * shadowRadius;
                float dy0 = - texelSize.y * shadowRadius;
                float dx1 = + texelSize.x * shadowRadius;
                float dy1 = + texelSize.y * shadowRadius;
                shadow = (
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
                ) * ( 1.0 / 9.0 );
                #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
                vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
                float dx0 = - texelSize.x * shadowRadius;
                float dy0 = - texelSize.y * shadowRadius;
                float dx1 = + texelSize.x * shadowRadius;
                float dy1 = + texelSize.y * shadowRadius;
                shadow = (
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
                texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
                ) * ( 1.0 / 9.0 );
            #else
                shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
            #endif
        }
        return shadow;
    }
    vec2 cubeToUV( vec3 v, float texelSizeY ) {
        vec3 absV = abs( v );
        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
        vec2 planar = v.xy;
        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;
        if ( absV.z >= almostOne ) {
            if ( v.z > 0.0 )
            planar.x = 4.0 - v.x;
        }
        else if ( absV.x >= almostOne ) {
            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;
        }
        else if ( absV.y >= almostOne ) {
            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;
        }
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
    }
    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
        vec3 lightToPosition = shadowCoord.xyz;
        float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
        dp += shadowBias;
        vec3 bd3D = normalize( lightToPosition );
        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )
            vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
            return (
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
            texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
            ) * ( 1.0 / 9.0 );
        #else
            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
        #endif
    }
#endif

#ifdef USE_BUMPMAP
    uniform sampler2D bumpMap;
    uniform float bumpScale;
    vec2 dHdxy_fwd() {
        vec2 dSTdx = dFdx( vUv );
        vec2 dSTdy = dFdy( vUv );
        float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
        float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
        float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
        return vec2( dBx, dBy );
    }
    vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
        vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
        vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
        vec3 vN = surf_norm;
        vec3 R1 = cross( vSigmaY, vN );
        vec3 R2 = cross( vN, vSigmaX );
        float fDet = dot( vSigmaX, R1 );
        fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
        vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
        return normalize( abs( fDet ) * surf_norm - vGrad );
    }
#endif

#ifdef USE_NORMALMAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
    #ifdef OBJECTSPACE_NORMALMAP
        uniform mat3 normalMatrix;
    #else
        vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {
            vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
            vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
            vec2 st0 = dFdx( vUv.st );
            vec2 st1 = dFdy( vUv.st );
            float scale = sign( st1.t * st0.s - st0.t * st1.s );
            vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
            vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
            vec3 N = normalize( surf_norm );
            mat3 tsn = mat3( S, T, N );
            vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            mapN.xy *= normalScale;
            mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
            return normalize( tsn * mapN );
        }
    #endif
#endif

#ifdef USE_ROUGHNESSMAP
    uniform sampler2D roughnessMap;
#endif
#ifdef USE_METALNESSMAP
    uniform sampler2D metalnessMap;
#endif
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
    uniform float logDepthBufFC;
    varying float vFragDepth;
#endif

#if 0 > 0
    #if ! defined( PHYSICAL ) && ! defined( PHONG )
        varying vec3 vViewPosition;
    #endif
    uniform vec4 clippingPlanes[ 0 ];
#endif

void main() {
    #if 0 > 0
        vec4 plane;
        #if 0 < 0
            bool clipped = true;
            if ( clipped ) discard;
        #endif
    #endif
    
    vec4 diffuseColor = vec4( diffuse, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;
    #if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
        gl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;
    #endif
    #ifdef USE_MAP
        vec4 texelColor = texture2D( map, vUv );
        texelColor = mapTexelToLinear( texelColor );
        diffuseColor *= texelColor;
    #endif
    
    #ifdef USE_COLOR
        diffuseColor.rgb *= vColor;
    #endif
    #ifdef USE_ALPHAMAP
        diffuseColor.a *= texture2D( alphaMap, vUv ).g;
    #endif
    
    #ifdef ALPHATEST
        if ( diffuseColor.a < ALPHATEST ) discard;
    #endif
    
    float roughnessFactor = roughness;
    #ifdef USE_ROUGHNESSMAP
        vec4 texelRoughness = texture2D( roughnessMap, vUv );
        roughnessFactor *= texelRoughness.g;
    #endif
    
    float metalnessFactor = metalness;
    #ifdef USE_METALNESSMAP
        vec4 texelMetalness = texture2D( metalnessMap, vUv );
        metalnessFactor *= texelMetalness.b;
    #endif
    
    #ifdef FLAT_SHADED
        vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
        vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
        vec3 normal = normalize( cross( fdx, fdy ) );
    #else
        vec3 normal = normalize( vNormal );
        #ifdef DOUBLE_SIDED
            normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
        #endif
    #endif
    
    #ifdef USE_NORMALMAP
        #ifdef OBJECTSPACE_NORMALMAP
            normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
            #ifdef FLIP_SIDED
                normal = - normal;
            #endif
            #ifdef DOUBLE_SIDED
                normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
            #endif
            normal = normalize( normalMatrix * normal );
        #else
            normal = perturbNormal2Arb( -vViewPosition, normal );
        #endif
        #elif defined( USE_BUMPMAP )
        normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
    #endif
    
    #ifdef USE_EMISSIVEMAP
        vec4 emissiveColor = texture2D( emissiveMap, vUv );
        emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
        totalEmissiveRadiance *= emissiveColor.rgb;
    #endif
    
    PhysicalMaterial material;
    material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
    material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );
    #ifdef STANDARD
        material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
    #else
        material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
        material.clearCoat = saturate( clearCoat );
        material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );
    #endif
    
    
    GeometricContext geometry;
    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize( vViewPosition );
    IncidentLight directLight;
    #if ( 0 > 0 ) && defined( RE_Direct )
        PointLight pointLight;
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct )
        SpotLight spotLight;
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct )
        DirectionalLight directionalLight;
    #endif
    #if ( 0 > 0 ) && defined( RE_Direct_RectArea )
        RectAreaLight rectAreaLight;
    #endif
    #if defined( RE_IndirectDiffuse )
        vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
        #if ( 0 > 0 )
            
        #endif
    #endif
    #if defined( RE_IndirectSpecular )
        vec3 radiance = vec3( 0.0 );
        vec3 clearCoatRadiance = vec3( 0.0 );
    #endif
    
    #if defined( RE_IndirectDiffuse )
        #ifdef USE_LIGHTMAP
            vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;
            #ifndef PHYSICALLY_CORRECT_LIGHTS
                lightMapIrradiance *= PI;
            #endif
            irradiance += lightMapIrradiance;
        #endif
        #if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )
            irradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
        #endif
    #endif
    #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        radiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );
        #ifndef STANDARD
            clearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );
        #endif
    #endif
    
    #if defined( RE_IndirectDiffuse )
        RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
    #endif
    #if defined( RE_IndirectSpecular )
        RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );
    #endif
    
    #ifdef USE_AOMAP
        float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
        reflectedLight.indirectDiffuse *= ambientOcclusion;
        #if defined( USE_ENVMAP ) && defined( PHYSICAL )
            float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
            reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
        #endif
    #endif
    
    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #if defined( TONE_MAPPING )
        gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
    #endif
    
    gl_FragColor = linearToOutputTexel( gl_FragColor );
    #ifdef USE_FOG
        float fogDepth = length( vFogPosition );
        #ifdef FOG_EXP2
            float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );
        #else
            float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
    #endif
    
    #ifdef PREMULTIPLIED_ALPHA
        gl_FragColor.rgb *= gl_FragColor.a;
    #endif
    
    #if defined( DITHERING )
        gl_FragColor.rgb = dithering( gl_FragColor.rgb );
    #endif
}`;