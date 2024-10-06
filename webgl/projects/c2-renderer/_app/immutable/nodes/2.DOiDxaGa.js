var Ml=Object.defineProperty;var Tl=(l,e,t)=>e in l?Ml(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var M=(l,e,t)=>Tl(l,typeof e!="symbol"?e+"":e,t);import{n as ve,O as tt,s as Ee,c as Al,e as V,t as me,b as j,d as G,f as $,h as ge,i as x,j as Y,v as w,P as K,k as F,l as R,Q as oe,m as Oe,u as El,g as Cl,a as Bl,A as yt,r as ko,x as st,R as Je,S as Qe,o as it,T as qt,p as Ue,U as Tn,V as An,W as Oo,X as Xr,Y as Uo,Z as Pl,_ as Ve,$ as Bt,a0 as Pe,z as Rl,a1 as $r}from"../chunks/scheduler.Z4xmWXJw.js";import{S as Ce,i as Be,t as Q,a as ee,b as ie,d as se,m as ne,e as re,g as Vo,c as Go,f as Pt}from"../chunks/index.CqKVUUkW.js";import{w as Yt}from"../chunks/index.CWq_QTW7.js";const qo=typeof window<"u";let Kr=qo?()=>window.performance.now():()=>Date.now(),Ho=qo?l=>requestAnimationFrame(l):ve;const Zi=new Set;function Wo(l){Zi.forEach(e=>{e.c(l)||(Zi.delete(e),e.f())}),Zi.size!==0&&Ho(Wo)}function zl(l){let e;return Zi.size===0&&Ho(Wo),{promise:new Promise(t=>{Zi.add(e={c:l,f:t})}),abort(){Zi.delete(e)}}}function bn(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="163",wn=0,Il=1,Nl=2,Zr=1,Jr=100,Qr=204,ea=205,ta=3,Dl=0,ia="attached",Fl="detached",Yo=300,Ps=1e3,Si=1001,ur=1002,Rs=1003,Ll=1004,kl=1005,ci=1006,Ol=1007,En=1008,Ul=1009,Vl=1014,Ti=1015,Os=1016,Gl=1020,Xo=1023,In=1026,sa=1027,ql=1028,zs=2300,es=2301,Nn=2302,na=2400,ra=2401,aa=2402,Hl=2500,Wl=0,$o=1,cr=2,jl=0,Ko="",ut="srgb",ft="srgb-linear",Yl="display-p3",Zo="display-p3-linear",fr="linear",oa="srgb",la="rec709",ha="p3",zi=7680,ua=519,Xl=515,dr=35044,Mi=2e3,pr=2001;class Cn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,e);e.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ca=1234567;const Ms=Math.PI/180,Is=180/Math.PI;function Tt(){const l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[l&255]+He[l>>8&255]+He[l>>16&255]+He[l>>24&255]+"-"+He[e&255]+He[e>>8&255]+"-"+He[e>>16&15|64]+He[e>>24&255]+"-"+He[t&63|128]+He[t>>8&255]+"-"+He[t>>16&255]+He[t>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function qe(l,e,t){return Math.max(e,Math.min(t,l))}function Er(l,e){return(l%e+e)%e}function $l(l,e,t,i,s){return i+(l-e)*(s-i)/(t-e)}function Kl(l,e,t){return l!==e?(t-l)/(e-l):0}function Ts(l,e,t){return(1-t)*l+t*e}function Zl(l,e,t,i){return Ts(l,e,1-Math.exp(-t*i))}function Jl(l,e=1){return e-Math.abs(Er(l,e*2)-e)}function Ql(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*(3-2*l))}function eh(l,e,t){return l<=e?0:l>=t?1:(l=(l-e)/(t-e),l*l*l*(l*(l*6-15)+10))}function th(l,e){return l+Math.floor(Math.random()*(e-l+1))}function ih(l,e){return l+Math.random()*(e-l)}function sh(l){return l*(.5-Math.random())}function nh(l){l!==void 0&&(ca=l);let e=ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rh(l){return l*Ms}function ah(l){return l*Is}function oh(l){return(l&l-1)===0&&l!==0}function lh(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function hh(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function uh(l,e,t,i,s){const n=Math.cos,r=Math.sin,o=n(t/2),a=r(t/2),h=n((e+i)/2),c=r((e+i)/2),u=n((e-i)/2),f=r((e-i)/2),d=n((i-e)/2),p=r((i-e)/2);switch(s){case"XYX":l.set(o*c,a*u,a*f,o*h);break;case"YZY":l.set(a*f,o*c,a*u,o*h);break;case"ZXZ":l.set(a*u,a*f,o*c,o*h);break;case"XZX":l.set(o*c,a*p,a*d,o*h);break;case"YXY":l.set(a*d,o*c,a*p,o*h);break;case"ZYZ":l.set(a*p,a*d,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mt(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function _e(l,e){switch(e.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const ch={DEG2RAD:Ms,RAD2DEG:Is,generateUUID:Tt,clamp:qe,euclideanModulo:Er,mapLinear:$l,inverseLerp:Kl,lerp:Ts,damp:Zl,pingpong:Jl,smoothstep:Ql,smootherstep:eh,randInt:th,randFloat:ih,randFloatSpread:sh,seededRandom:nh,degToRad:rh,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:lh,floorPowerOfTwo:hh,setQuaternionFromProperEuler:uh,normalize:_e,denormalize:Mt};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,r=this.y-e.y;return this.x=n*i-r*s+e.x,this.y=n*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(e,t,i,s,n,r,o,a,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,o,a,h)}set(e,t,i,s,n,r,o,a,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],o=i[3],a=i[6],h=i[1],c=i[4],u=i[7],f=i[2],d=i[5],p=i[8],g=s[0],y=s[3],m=s[6],_=s[1],b=s[4],v=s[7],T=s[2],A=s[5],I=s[8];return n[0]=r*g+o*_+a*T,n[3]=r*y+o*b+a*A,n[6]=r*m+o*v+a*I,n[1]=h*g+c*_+u*T,n[4]=h*y+c*b+u*A,n[7]=h*m+c*v+u*I,n[2]=f*g+d*_+p*T,n[5]=f*y+d*b+p*A,n[8]=f*m+d*v+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8];return t*r*c-t*o*h-i*n*c+i*o*a+s*n*h-s*r*a}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8],u=c*r-o*h,f=o*a-c*n,d=h*n-r*a,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=u*g,e[1]=(s*h-c*i)*g,e[2]=(o*i-s*r)*g,e[3]=f*g,e[4]=(c*t-s*a)*g,e[5]=(s*n-o*t)*g,e[6]=d*g,e[7]=(i*a-h*t)*g,e[8]=(r*t-i*n)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,r,o){const a=Math.cos(n),h=Math.sin(n);return this.set(i*a,i*h,-i*(a*r+h*o)+r+e,-s*h,s*a,-s*(-h*r+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dn.makeScale(e,t)),this}rotate(e){return this.premultiply(Dn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dn=new Xt;function fh(l){for(let e=l.length-1;e>=0;--e)if(l[e]>=65535)return!0;return!1}function mr(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}const fa={};function Jo(l){l in fa||(fa[l]=!0,console.warn(l))}const da=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[ft]:{transfer:fr,primaries:la,toReference:l=>l,fromReference:l=>l},[ut]:{transfer:oa,primaries:la,toReference:l=>l.convertSRGBToLinear(),fromReference:l=>l.convertLinearToSRGB()},[Zo]:{transfer:fr,primaries:ha,toReference:l=>l.applyMatrix3(pa),fromReference:l=>l.applyMatrix3(da)},[Yl]:{transfer:oa,primaries:ha,toReference:l=>l.convertSRGBToLinear().applyMatrix3(pa),fromReference:l=>l.applyMatrix3(da).convertLinearToSRGB()}},dh=new Set([ft,Zo]),lt={enabled:!0,_workingColorSpace:ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(l){if(!dh.has(l))throw new Error(`Unsupported working color space, "${l}".`);this._workingColorSpace=l},convert:function(l,e,t){if(this.enabled===!1||e===t||!e||!t)return l;const i=Us[e].toReference,s=Us[t].fromReference;return s(i(l))},fromWorkingColorSpace:function(l,e){return this.convert(l,this._workingColorSpace,e)},toWorkingColorSpace:function(l,e){return this.convert(l,e,this._workingColorSpace)},getPrimaries:function(l){return Us[l].primaries},getTransfer:function(l){return l===Ko?fr:Us[l].transfer}};function Ji(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Fn(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Ii;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=mr("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=Ji(n[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ji(t[i]/255)*255):t[i]=Ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mh=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Tt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?n.push(Ln(s[r].image)):n.push(Ln(s[r]))}else n=Ln(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function Ln(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?ph.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class gt extends Cn{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,i=Si,s=Si,n=ci,r=En,o=Xo,a=Ul,h=gt.DEFAULT_ANISOTROPY,c=Ko){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Tt(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gt.DEFAULT_IMAGE=null;gt.DEFAULT_MAPPING=Yo;gt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const a=e.elements,h=a[0],c=a[4],u=a[8],f=a[1],d=a[5],p=a[9],g=a[2],y=a[6],m=a[10];if(Math.abs(c-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-y)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+y)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,v=(d+1)/2,T=(m+1)/2,A=(c+f)/4,I=(u+g)/4,E=(p+y)/4;return b>v&&b>T?b<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(b),s=A/i,n=I/i):v>T?v<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(v),i=A/s,n=E/s):T<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(T),i=I/n,s=E/n),this.set(i,s,n,t),this}let _=Math.sqrt((y-p)*(y-p)+(u-g)*(u-g)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(y-p)/_,this.y=(u-g)/_,this.z=(f-c)/_,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,r,o){let a=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const f=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3];if(o===0){e[t+0]=a,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u!==g||a!==f||h!==d||c!==p){let y=1-o;const m=a*f+h*d+c*p+u*g,_=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const T=Math.sqrt(b),A=Math.atan2(T,m*_);y=Math.sin(y*A)/T,o=Math.sin(o*A)/T}const v=o*_;if(a=a*y+f*v,h=h*y+d*v,c=c*y+p*v,u=u*y+g*v,y===1-o){const T=1/Math.sqrt(a*a+h*h+c*c+u*u);a*=T,h*=T,c*=T,u*=T}}e[t]=a,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,n,r){const o=i[s],a=i[s+1],h=i[s+2],c=i[s+3],u=n[r],f=n[r+1],d=n[r+2],p=n[r+3];return e[t]=o*p+c*u+a*d-h*f,e[t+1]=a*p+c*f+h*u-o*d,e[t+2]=h*p+c*d+o*f-a*u,e[t+3]=c*p-o*u-a*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,r=e._order,o=Math.cos,a=Math.sin,h=o(i/2),c=o(s/2),u=o(n/2),f=a(i/2),d=a(s/2),p=a(n/2);switch(r){case"XYZ":this._x=f*c*u+h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u-f*d*p;break;case"YXZ":this._x=f*c*u+h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u+f*d*p;break;case"ZXY":this._x=f*c*u-h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u-f*d*p;break;case"ZYX":this._x=f*c*u-h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u+f*d*p;break;case"YZX":this._x=f*c*u+h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u-f*d*p;break;case"XZY":this._x=f*c*u-h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],r=t[1],o=t[5],a=t[9],h=t[2],c=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-a)*d,this._y=(n-h)*d,this._z=(r-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(c-a)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(n+h)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(n-h)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(a+c)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(r-s)/d,this._x=(n+h)/d,this._y=(a+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,r=e._w,o=t._x,a=t._y,h=t._z,c=t._w;return this._x=i*c+r*o+s*h-n*a,this._y=s*c+r*a+n*o-i*h,this._z=n*c+r*h+i*a-s*o,this._w=r*c-i*o-s*a-n*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,r=this._w;let o=r*e._w+i*e._x+s*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=s,this._z=n,this;const a=1-o*o;if(a<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*n+t*this._z,this.normalize(),this}const h=Math.sqrt(a),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,f=Math.sin(t*c)/h;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=n*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,i=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,r=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,r=e.y,o=e.z,a=e.w,h=2*(r*s-o*i),c=2*(o*t-n*s),u=2*(n*i-r*t);return this.x=t+a*h+r*u-o*c,this.y=i+a*c+o*h-n*u,this.z=s+a*u+n*c-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,r=t.x,o=t.y,a=t.z;return this.x=s*a-n*o,this.y=n*r-i*a,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kn.copy(this).projectOnVector(e),this.sub(kn)}reflect(e){return this.sub(kn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kn=new S,ma=new di;class $t{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=n.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bt):bt.fromBufferAttribute(n,r),bt.applyMatrix4(e.matrixWorld),this.expandByPoint(bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bt),bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Gs.subVectors(this.max,cs),Ni.subVectors(e.a,cs),Di.subVectors(e.b,cs),Fi.subVectors(e.c,cs),Jt.subVectors(Di,Ni),Qt.subVectors(Fi,Di),gi.subVectors(Ni,Fi);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-gi.z,gi.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,gi.z,0,-gi.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-gi.y,gi.x,0];return!On(t,Ni,Di,Fi,Gs)||(t=[1,0,0,0,1,0,0,0,1],!On(t,Ni,Di,Fi,Gs))?!1:(qs.crossVectors(Jt,Qt),t=[qs.x,qs.y,qs.z],On(t,Ni,Di,Fi,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dt=[new S,new S,new S,new S,new S,new S,new S,new S],bt=new S,Vs=new $t,Ni=new S,Di=new S,Fi=new S,Jt=new S,Qt=new S,gi=new S,cs=new S,Gs=new S,qs=new S,yi=new S;function On(l,e,t,i,s){for(let n=0,r=l.length-3;n<=r;n+=3){yi.fromArray(l,n);const o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),a=e.dot(yi),h=t.dot(yi),c=i.dot(yi);if(Math.max(-Math.max(a,h,c),Math.min(a,h,c))>o)return!1}return!0}const vh=new $t,fs=new S,Un=new S;class Rt{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vh.setFromPoints(e).getCenter(i);let s=0;for(let n=0,r=e.length;n<r;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Un.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(Un)),this.expandByPoint(fs.copy(e.center).sub(Un))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new S,Vn=new S,Hs=new S,ei=new S,Gn=new S,Ws=new S,qn=new S;class Bn{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.origin).addScaledVector(this.direction,t),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vn.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Vn);const n=e.distanceTo(t)*.5,r=-this.direction.dot(Hs),o=ei.dot(this.direction),a=-ei.dot(Hs),h=ei.lengthSq(),c=Math.abs(1-r*r);let u,f,d,p;if(c>0)if(u=r*a-o,f=r*o-a,p=n*c,u>=0)if(f>=-p)if(f<=p){const g=1/c;u*=g,f*=g,d=u*(u+r*f+2*o)+f*(r*u+f+2*a)+h}else f=n,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*a)+h;else f=-n,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*a)+h;else f<=-p?(u=Math.max(0,-(-r*n+o)),f=u>0?-n:Math.min(Math.max(-n,-a),n),d=-u*u+f*(f+2*a)+h):f<=p?(u=0,f=Math.min(Math.max(-n,-a),n),d=f*(f+2*a)+h):(u=Math.max(0,-(r*n+o)),f=u>0?n:Math.min(Math.max(-n,-a),n),d=-u*u+f*(f+2*a)+h);else f=r>0?-n:n,u=Math.max(0,-(r*f+o)),d=-u*u+f*(f+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vn).addScaledVector(Hs,f),d}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const i=Ft.dot(this.direction),s=Ft.dot(Ft)-i*i,n=e.radius*e.radius;if(s>n)return null;const r=Math.sqrt(n-s),o=i-r,a=i+r;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,r,o,a;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),c>=0?(n=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(n=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u),i>a||o>s)||((o>i||i!==i)&&(i=o),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,i,s,n){Gn.subVectors(t,e),Ws.subVectors(i,e),qn.crossVectors(Gn,Ws);let r=this.direction.dot(qn),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ei.subVectors(this.origin,e);const a=o*this.direction.dot(Ws.crossVectors(ei,Ws));if(a<0)return null;const h=o*this.direction.dot(Gn.cross(ei));if(h<0||a+h>r)return null;const c=-o*ei.dot(qn);return c<0?null:this.at(c/r,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(e,t,i,s,n,r,o,a,h,c,u,f,d,p,g,y){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,o,a,h,c,u,f,d,p,g,y)}set(e,t,i,s,n,r,o,a,h,c,u,f,d,p,g,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=n,m[5]=r,m[9]=o,m[13]=a,m[2]=h,m[6]=c,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),n=1/Li.setFromMatrixColumn(e,1).length(),r=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,r=Math.cos(i),o=Math.sin(i),a=Math.cos(s),h=Math.sin(s),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const f=r*c,d=r*u,p=o*c,g=o*u;t[0]=a*c,t[4]=-a*u,t[8]=h,t[1]=d+p*h,t[5]=f-g*h,t[9]=-o*a,t[2]=g-f*h,t[6]=p+d*h,t[10]=r*a}else if(e.order==="YXZ"){const f=a*c,d=a*u,p=h*c,g=h*u;t[0]=f+g*o,t[4]=p*o-d,t[8]=r*h,t[1]=r*u,t[5]=r*c,t[9]=-o,t[2]=d*o-p,t[6]=g+f*o,t[10]=r*a}else if(e.order==="ZXY"){const f=a*c,d=a*u,p=h*c,g=h*u;t[0]=f-g*o,t[4]=-r*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=r*c,t[9]=g-f*o,t[2]=-r*h,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const f=r*c,d=r*u,p=o*c,g=o*u;t[0]=a*c,t[4]=p*h-d,t[8]=f*h+g,t[1]=a*u,t[5]=g*h+f,t[9]=d*h-p,t[2]=-h,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const f=r*a,d=r*h,p=o*a,g=o*h;t[0]=a*c,t[4]=g-f*u,t[8]=p*u+d,t[1]=u,t[5]=r*c,t[9]=-o*c,t[2]=-h*c,t[6]=d*u+p,t[10]=f-g*u}else if(e.order==="XZY"){const f=r*a,d=r*h,p=o*a,g=o*h;t[0]=a*c,t[4]=-u,t[8]=h*c,t[1]=f*u+g,t[5]=r*c,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*c,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xh,e,bh)}lookAt(e,t,i){const s=this.elements;return at.subVectors(e,t),at.lengthSq()===0&&(at.z=1),at.normalize(),ti.crossVectors(i,at),ti.lengthSq()===0&&(Math.abs(i.z)===1?at.x+=1e-4:at.z+=1e-4,at.normalize(),ti.crossVectors(i,at)),ti.normalize(),js.crossVectors(at,ti),s[0]=ti.x,s[4]=js.x,s[8]=at.x,s[1]=ti.y,s[5]=js.y,s[9]=at.y,s[2]=ti.z,s[6]=js.z,s[10]=at.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],o=i[4],a=i[8],h=i[12],c=i[1],u=i[5],f=i[9],d=i[13],p=i[2],g=i[6],y=i[10],m=i[14],_=i[3],b=i[7],v=i[11],T=i[15],A=s[0],I=s[4],E=s[8],U=s[12],C=s[1],B=s[5],N=s[9],k=s[13],z=s[2],L=s[6],q=s[10],ae=s[14],de=s[3],X=s[7],J=s[11],ue=s[15];return n[0]=r*A+o*C+a*z+h*de,n[4]=r*I+o*B+a*L+h*X,n[8]=r*E+o*N+a*q+h*J,n[12]=r*U+o*k+a*ae+h*ue,n[1]=c*A+u*C+f*z+d*de,n[5]=c*I+u*B+f*L+d*X,n[9]=c*E+u*N+f*q+d*J,n[13]=c*U+u*k+f*ae+d*ue,n[2]=p*A+g*C+y*z+m*de,n[6]=p*I+g*B+y*L+m*X,n[10]=p*E+g*N+y*q+m*J,n[14]=p*U+g*k+y*ae+m*ue,n[3]=_*A+b*C+v*z+T*de,n[7]=_*I+b*B+v*L+T*X,n[11]=_*E+b*N+v*q+T*J,n[15]=_*U+b*k+v*ae+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],r=e[1],o=e[5],a=e[9],h=e[13],c=e[2],u=e[6],f=e[10],d=e[14],p=e[3],g=e[7],y=e[11],m=e[15];return p*(+n*a*u-s*h*u-n*o*f+i*h*f+s*o*d-i*a*d)+g*(+t*a*d-t*h*f+n*r*f-s*r*d+s*h*c-n*a*c)+y*(+t*h*u-t*o*d-n*r*u+i*r*d+n*o*c-i*h*c)+m*(-s*o*c-t*a*u+t*o*f+s*r*u-i*r*f+i*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],o=e[5],a=e[6],h=e[7],c=e[8],u=e[9],f=e[10],d=e[11],p=e[12],g=e[13],y=e[14],m=e[15],_=u*y*h-g*f*h+g*a*d-o*y*d-u*a*m+o*f*m,b=p*f*h-c*y*h-p*a*d+r*y*d+c*a*m-r*f*m,v=c*g*h-p*u*h+p*o*d-r*g*d-c*o*m+r*u*m,T=p*u*a-c*g*a-p*o*f+r*g*f+c*o*y-r*u*y,A=t*_+i*b+s*v+n*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=_*I,e[1]=(g*f*n-u*y*n-g*s*d+i*y*d+u*s*m-i*f*m)*I,e[2]=(o*y*n-g*a*n+g*s*h-i*y*h-o*s*m+i*a*m)*I,e[3]=(u*a*n-o*f*n-u*s*h+i*f*h+o*s*d-i*a*d)*I,e[4]=b*I,e[5]=(c*y*n-p*f*n+p*s*d-t*y*d-c*s*m+t*f*m)*I,e[6]=(p*a*n-r*y*n-p*s*h+t*y*h+r*s*m-t*a*m)*I,e[7]=(r*f*n-c*a*n+c*s*h-t*f*h-r*s*d+t*a*d)*I,e[8]=v*I,e[9]=(p*u*n-c*g*n-p*i*d+t*g*d+c*i*m-t*u*m)*I,e[10]=(r*g*n-p*o*n+p*i*h-t*g*h-r*i*m+t*o*m)*I,e[11]=(c*o*n-r*u*n-c*i*h+t*u*h+r*i*d-t*o*d)*I,e[12]=T*I,e[13]=(c*g*s-p*u*s+p*i*f-t*g*f-c*i*y+t*u*y)*I,e[14]=(p*o*s-r*g*s-p*i*a+t*g*a+r*i*y-t*o*y)*I,e[15]=(r*u*s-c*o*s+c*i*a-t*u*a-r*i*f+t*o*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,r=e.x,o=e.y,a=e.z,h=n*r,c=n*o;return this.set(h*r+i,h*o-s*a,h*a+s*o,0,h*o+s*a,c*o+i,c*a-s*r,0,h*a-s*o,c*a+s*r,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,r){return this.set(1,i,n,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,r=t._y,o=t._z,a=t._w,h=n+n,c=r+r,u=o+o,f=n*h,d=n*c,p=n*u,g=r*c,y=r*u,m=o*u,_=a*h,b=a*c,v=a*u,T=i.x,A=i.y,I=i.z;return s[0]=(1-(g+m))*T,s[1]=(d+v)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+m))*A,s[6]=(y+_)*A,s[7]=0,s[8]=(p+b)*I,s[9]=(y-_)*I,s[10]=(1-(f+g))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=Li.set(s[0],s[1],s[2]).length();const r=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],wt.copy(this);const h=1/n,c=1/r,u=1/o;return wt.elements[0]*=h,wt.elements[1]*=h,wt.elements[2]*=h,wt.elements[4]*=c,wt.elements[5]*=c,wt.elements[6]*=c,wt.elements[8]*=u,wt.elements[9]*=u,wt.elements[10]*=u,t.setFromRotationMatrix(wt),i.x=n,i.y=r,i.z=o,this}makePerspective(e,t,i,s,n,r,o=Mi){const a=this.elements,h=2*n/(t-e),c=2*n/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,p;if(o===Mi)d=-(r+n)/(r-n),p=-2*r*n/(r-n);else if(o===pr)d=-r/(r-n),p=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,n,r,o=Mi){const a=this.elements,h=1/(t-e),c=1/(i-s),u=1/(r-n),f=(t+e)*h,d=(i+s)*c;let p,g;if(o===Mi)p=(r+n)*u,g=-2*u;else if(o===pr)p=n*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=g,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new S,wt=new fe,xh=new S(0,0,0),bh=new S(1,1,1),ti=new S,js=new S,at=new S,ga=new fe,ya=new di;class ns{constructor(e=0,t=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],r=s[4],o=s[8],a=s[1],h=s[5],c=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(a,n));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(a,n)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const va=new S,ki=new di,Lt=new fe,Ys=new S,ds=new S,Sh=new S,Mh=new di,xa=new S(1,0,0),ba=new S(0,1,0),wa=new S(0,0,1),_a={type:"added"},Th={type:"removed"},Oi={type:"childadded",child:null},Hn={type:"childremoved",child:null};class De extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Tt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const e=new S,t=new ns,i=new di,s=new S(1,1,1);function n(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Xt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ys.copy(e):Ys.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lt.lookAt(ds,Ys,this.up):Lt.lookAt(Ys,ds,this.up),this.quaternion.setFromRotationMatrix(Lt),s&&(Lt.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Lt),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_a),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Th),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_a),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Sh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let n=0,r=s.length;n<r;n++){const o=s[n];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let h=0,c=a.length;h<c;h++){const u=a[h];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,h=this.material.length;a<h;a++)o.push(n(e.materials,this.material[a]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];s.animations.push(n(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),h=r(e.textures),c=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),p=r(e.nodes);o.length>0&&(i.geometries=o),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(o){const a=[];for(const h in o){const c=o[h];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new S(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _t=new S,kt=new S,Wn=new S,Ot=new S,Ui=new S,Vi=new S,Sa=new S,jn=new S,Yn=new S,Xn=new S;let Xs=class $i{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_t.subVectors(e,t),s.cross(_t);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){_t.subVectors(s,t),kt.subVectors(i,t),Wn.subVectors(e,t);const r=_t.dot(_t),o=_t.dot(kt),a=_t.dot(Wn),h=kt.dot(kt),c=kt.dot(Wn),u=r*h-o*o;if(u===0)return n.set(0,0,0),null;const f=1/u,d=(h*a-o*c)*f,p=(r*c-o*a)*f;return n.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ot)===null?!1:Ot.x>=0&&Ot.y>=0&&Ot.x+Ot.y<=1}static getInterpolation(e,t,i,s,n,r,o,a){return this.getBarycoord(e,t,i,s,Ot)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(n,Ot.x),a.addScaledVector(r,Ot.y),a.addScaledVector(o,Ot.z),a)}static isFrontFacing(e,t,i,s){return _t.subVectors(i,t),kt.subVectors(e,t),_t.cross(kt).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _t.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),_t.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return $i.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let r,o;Ui.subVectors(s,i),Vi.subVectors(n,i),jn.subVectors(e,i);const a=Ui.dot(jn),h=Vi.dot(jn);if(a<=0&&h<=0)return t.copy(i);Yn.subVectors(e,s);const c=Ui.dot(Yn),u=Vi.dot(Yn);if(c>=0&&u<=c)return t.copy(s);const f=a*u-c*h;if(f<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(i).addScaledVector(Ui,r);Xn.subVectors(e,n);const d=Ui.dot(Xn),p=Vi.dot(Xn);if(p>=0&&d<=p)return t.copy(n);const g=d*h-a*p;if(g<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(i).addScaledVector(Vi,o);const y=c*p-d*u;if(y<=0&&u-c>=0&&d-p>=0)return Sa.subVectors(n,s),o=(u-c)/(u-c+(d-p)),t.copy(s).addScaledVector(Sa,o);const m=1/(y+g+f);return r=g*m,o=f*m,t.copy(i).addScaledVector(Ui,r).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},$s={h:0,s:0,l:0};function $n(l,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?l+(e-l)*6*t:t<1/2?e:t<2/3?l+(e-l)*6*(2/3-t):l}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Er(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,r=2*i-n;this.r=$n(r,n,e+1/3),this.g=$n(r,n,e),this.b=$n(r,n,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=ut){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=Qo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return lt.fromWorkingColorSpace(We.copy(this),e),Math.round(qe(We.r*255,0,255))*65536+Math.round(qe(We.g*255,0,255))*256+Math.round(qe(We.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(We.copy(this),t);const i=We.r,s=We.g,n=We.b,r=Math.max(i,s,n),o=Math.min(i,s,n);let a,h;const c=(o+r)/2;if(o===r)a=0,h=0;else{const u=r-o;switch(h=c<=.5?u/(r+o):u/(2-r-o),r){case i:a=(s-n)/u+(s<n?6:0);break;case s:a=(n-i)/u+2;break;case n:a=(i-s)/u+4;break}a/=6}return e.h=a,e.s=h,e.l=c,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(We.copy(this),t),e.r=We.r,e.g=We.g,e.b=We.b,e}getStyle(e=ut){lt.fromWorkingColorSpace(We.copy(this),e);const t=We.r,i=We.g,s=We.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL($s);const i=Ts(ii.h,$s.h,t),s=Ts(ii.s,$s.s,t),n=Ts(ii.l,$s.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Re;Re.NAMES=Qo;let Ah=0,Ai=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Tt(),this.name="",this.type="Material",this.blending=Zr,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ea,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const o in n){const a=n[o];delete a.metadata,r.push(a)}return r}if(t){const n=s(e.textures),r=s(e.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Ki extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=Eh();function Eh(){const l=new ArrayBuffer(4),e=new Float32Array(l),t=new Uint32Array(l),i=new Uint32Array(512),s=new Uint32Array(512);for(let a=0;a<256;++a){const h=a-127;h<-27?(i[a]=0,i[a|256]=32768,s[a]=24,s[a|256]=24):h<-14?(i[a]=1024>>-h-14,i[a|256]=1024>>-h-14|32768,s[a]=-h-1,s[a|256]=-h-1):h<=15?(i[a]=h+15<<10,i[a|256]=h+15<<10|32768,s[a]=13,s[a|256]=13):h<128?(i[a]=31744,i[a|256]=64512,s[a]=24,s[a|256]=24):(i[a]=31744,i[a|256]=64512,s[a]=13,s[a|256]=13)}const n=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let a=1;a<1024;++a){let h=a<<13,c=0;for(;!(h&8388608);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[a]=h|c}for(let a=1024;a<2048;++a)n[a]=939524096+(a-1024<<13);for(let a=1;a<31;++a)r[a]=a<<23;r[31]=1199570944,r[32]=2147483648;for(let a=33;a<63;++a)r[a]=2147483648+(a-32<<23);r[63]=3347054592;for(let a=1;a<64;++a)a!==32&&(o[a]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:n,exponentTable:r,offsetTable:o}}function Ch(l){Math.abs(l)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),l=qe(l,-65504,65504),Gt.floatView[0]=l;const e=Gt.uint32View[0],t=e>>23&511;return Gt.baseTable[t]+((e&8388607)>>Gt.shiftTable[t])}function Bh(l){const e=l>>10;return Gt.uint32View[0]=Gt.mantissaTable[Gt.offsetTable[e]+(l&1023)]+Gt.exponentTable[e],Gt.floatView[0]}const Ks={toHalfFloat:Ch,fromHalfFloat:Bh},Fe=new S,Zs=new Z;class At{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix3(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Fe.fromBufferAttribute(this,t),Fe.applyMatrix4(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fe.fromBufferAttribute(this,t),Fe.applyNormalMatrix(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fe.fromBufferAttribute(this,t),Fe.transformDirection(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mt(t,this.array)),t}setX(e,t){return this.normalized&&(t=_e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mt(t,this.array)),t}setY(e,t){return this.normalized&&(t=_e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mt(t,this.array)),t}setW(e,t){return this.normalized&&(t=_e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array),s=_e(s,this.array),n=_e(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dr&&(e.usage=this.usage),e}}class Ph extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rh extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zh=0;const dt=new fe,Kn=new De,Gi=new S,ot=new $t,ps=new $t,Ge=new S;class pi extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Tt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?Rh:Ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Xt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dt.makeRotationFromQuaternion(e),this.applyMatrix4(dt),this}rotateX(e){return dt.makeRotationX(e),this.applyMatrix4(dt),this}rotateY(e){return dt.makeRotationY(e),this.applyMatrix4(dt),this}rotateZ(e){return dt.makeRotationZ(e),this.applyMatrix4(dt),this}translate(e,t,i){return dt.makeTranslation(e,t,i),this.applyMatrix4(dt),this}scale(e,t,i){return dt.makeScale(e,t,i),this.applyMatrix4(dt),this}lookAt(e){return Kn.lookAt(e),Kn.updateMatrix(),this.applyMatrix4(Kn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];ot.setFromBufferAttribute(n),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,ot.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,ot.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(ot.min),this.boundingBox.expandByPoint(ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const i=this.boundingSphere.center;if(ot.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(ot.min,ps.min),ot.expandByPoint(Ge),Ge.addVectors(ot.max,ps.max),ot.expandByPoint(Ge)):(ot.expandByPoint(ps.min),ot.expandByPoint(ps.max))}ot.getCenter(i);let s=0;for(let n=0,r=e.count;n<r;n++)Ge.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Ge));if(t)for(let n=0,r=t.length;n<r;n++){const o=t[n],a=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ge.fromBufferAttribute(o,h),a&&(Gi.fromBufferAttribute(e,h),Ge.add(Gi)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],a=[];for(let E=0;E<i.count;E++)o[E]=new S,a[E]=new S;const h=new S,c=new S,u=new S,f=new Z,d=new Z,p=new Z,g=new S,y=new S;function m(E,U,C){h.fromBufferAttribute(i,E),c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,C),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,C),c.sub(h),u.sub(h),d.sub(f),p.sub(f);const B=1/(d.x*p.y-p.x*d.y);isFinite(B)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(B),y.copy(u).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(B),o[E].add(g),o[U].add(g),o[C].add(g),a[E].add(y),a[U].add(y),a[C].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let E=0,U=_.length;E<U;++E){const C=_[E],B=C.start,N=C.count;for(let k=B,z=B+N;k<z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new S,v=new S,T=new S,A=new S;function I(E){T.fromBufferAttribute(s,E),A.copy(T);const U=o[E];b.copy(U),b.sub(T.multiplyScalar(T.dot(U))).normalize(),v.crossVectors(A,U);const B=v.dot(a[E])<0?-1:1;r.setXYZW(E,b.x,b.y,b.z,B)}for(let E=0,U=_.length;E<U;++E){const C=_[E],B=C.start,N=C.count;for(let k=B,z=B+N;k<z;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new S,n=new S,r=new S,o=new S,a=new S,h=new S,c=new S,u=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),g=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,p),n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),o.fromBufferAttribute(i,p),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,y),o.add(c),a.add(c),h.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ge.fromBufferAttribute(e,t),Ge.normalize(),e.setXYZ(t,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function e(o,a){const h=o.array,c=o.itemSize,u=o.normalized,f=new h.constructor(a.length*c);let d=0,p=0;for(let g=0,y=a.length;g<y;g++){o.isInterleavedBufferAttribute?d=a[g]*o.data.stride+o.offset:d=a[g]*c;for(let m=0;m<c;m++)f[p++]=h[d++]}return new At(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,s=this.attributes;for(const o in s){const a=s[o],h=e(a,i);t.setAttribute(o,h)}const n=this.morphAttributes;for(const o in n){const a=[],h=n[o];for(let c=0,u=h.length;c<u;c++){const f=h[c],d=e(f,i);a.push(d)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const h=r[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(e[h]=a[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const h=i[a];e.data.attributes[a]=h.toJSON(e.data)}const s={};let n=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],c=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];c.push(d.toJSON(e.data))}c.length>0&&(s[a]=c,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const n=e.morphAttributes;for(const h in n){const c=[],u=n[h];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,c=r.length;h<c;h++){const u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new fe,vi=new Bn,Js=new Rt,Ta=new S,qi=new S,Hi=new S,Wi=new S,Zn=new S,Qs=new S,en=new Z,tn=new Z,sn=new Z,Aa=new S,Ea=new S,Ca=new S,nn=new S,rn=new S;class fi extends De{constructor(e=new pi,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){Qs.set(0,0,0);for(let a=0,h=n.length;a<h;a++){const c=o[a],u=n[a];c!==0&&(Zn.fromBufferAttribute(u,e),r?Qs.addScaledVector(Zn,c):Qs.addScaledVector(Zn.sub(t),c))}t.add(Qs)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(n),vi.copy(e.ray).recast(e.near),!(Js.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Js,Ta)===null||vi.origin.distanceToSquared(Ta)>(e.far-e.near)**2))&&(Ma.copy(n).invert(),vi.copy(e.ray).applyMatrix4(Ma),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let s;const n=this.geometry,r=this.material,o=n.index,a=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const y=f[p],m=r[y.materialIndex],_=Math.max(y.start,d.start),b=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let v=_,T=b;v<T;v+=3){const A=o.getX(v),I=o.getX(v+1),E=o.getX(v+2);s=an(this,m,e,i,h,c,u,A,I,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let y=p,m=g;y<m;y+=3){const _=o.getX(y),b=o.getX(y+1),v=o.getX(y+2);s=an(this,r,e,i,h,c,u,_,b,v),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const y=f[p],m=r[y.materialIndex],_=Math.max(y.start,d.start),b=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let v=_,T=b;v<T;v+=3){const A=v,I=v+1,E=v+2;s=an(this,m,e,i,h,c,u,A,I,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let y=p,m=g;y<m;y+=3){const _=y,b=y+1,v=y+2;s=an(this,r,e,i,h,c,u,_,b,v),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function Ih(l,e,t,i,s,n,r,o){let a;if(e.side===Il?a=i.intersectTriangle(r,n,s,!0,o):a=i.intersectTriangle(s,n,r,e.side===wn,o),a===null)return null;rn.copy(o),rn.applyMatrix4(l.matrixWorld);const h=t.ray.origin.distanceTo(rn);return h<t.near||h>t.far?null:{distance:h,point:rn.clone(),object:l}}function an(l,e,t,i,s,n,r,o,a,h){l.getVertexPosition(o,qi),l.getVertexPosition(a,Hi),l.getVertexPosition(h,Wi);const c=Ih(l,e,t,i,qi,Hi,Wi,nn);if(c){s&&(en.fromBufferAttribute(s,o),tn.fromBufferAttribute(s,a),sn.fromBufferAttribute(s,h),c.uv=Xs.getInterpolation(nn,qi,Hi,Wi,en,tn,sn,new Z)),n&&(en.fromBufferAttribute(n,o),tn.fromBufferAttribute(n,a),sn.fromBufferAttribute(n,h),c.uv1=Xs.getInterpolation(nn,qi,Hi,Wi,en,tn,sn,new Z)),r&&(Aa.fromBufferAttribute(r,o),Ea.fromBufferAttribute(r,a),Ca.fromBufferAttribute(r,h),c.normal=Xs.getInterpolation(nn,qi,Hi,Wi,Aa,Ea,Ca,new S),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:a,c:h,normal:new S,materialIndex:0};Xs.getNormal(qi,Hi,Wi,u.normal),c.face=u}return c}let el=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const si=new S,Ba=new Z,Pa=new Z;class Cr extends el{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Ba,Pa),t.subVectors(Pa,Ba)}setViewOffset(e,t,i,s,n,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,h=r.fullHeight;n+=r.offsetX*s/a,t-=r.offsetY*i/h,s*=r.width/a,i*=r.height/h}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jn=new S,Nh=new S,Dh=new Xt;let ji=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Jn.subVectors(i,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jn),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dh.getNormalMatrix(e),s=this.coplanarPoint(Jn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const xi=new Rt,on=new S;class Fh{constructor(e=new ji,t=new ji,i=new ji,s=new ji,n=new ji,r=new ji){this.planes=[e,t,i,s,n,r]}set(e,t,i,s,n,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){const i=this.planes,s=e.elements,n=s[0],r=s[1],o=s[2],a=s[3],h=s[4],c=s[5],u=s[6],f=s[7],d=s[8],p=s[9],g=s[10],y=s[11],m=s[12],_=s[13],b=s[14],v=s[15];if(i[0].setComponents(a-n,f-h,y-d,v-m).normalize(),i[1].setComponents(a+n,f+h,y+d,v+m).normalize(),i[2].setComponents(a+r,f+c,y+p,v+_).normalize(),i[3].setComponents(a-r,f-c,y-p,v-_).normalize(),i[4].setComponents(a-o,f-u,y-g,v-b).normalize(),t===Mi)i[5].setComponents(a+o,f+u,y+g,v+b).normalize();else if(t===pr)i[5].setComponents(o,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(on.x=s.normal.x>0?e.max.x:e.min.x,on.y=s.normal.y>0?e.max.y:e.min.y,on.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(on)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _n extends pi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,r=t/2,o=Math.floor(i),a=Math.floor(s),h=o+1,c=a+1,u=e/o,f=t/a,d=[],p=[],g=[],y=[];for(let m=0;m<c;m++){const _=m*f-r;for(let b=0;b<h;b++){const v=b*u-n;p.push(v,-_,0),g.push(0,0,1),y.push(b/o),y.push(1-m/a)}}for(let m=0;m<a;m++)for(let _=0;_<o;_++){const b=_+h*m,v=_+h*(m+1),T=_+1+h*(m+1),A=_+1+h*m;d.push(b,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}class tl extends el{constructor(e=-1,t=1,i=1,s=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,r=i+e,o=s+t,a=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,r=n+h*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(n,r,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lh extends gt{constructor(e,t,i,s,n,r,o,a,h,c){if(c=c!==void 0?c:In,c!==In&&c!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===In&&(i=Vl),i===void 0&&c===sa&&(i=Gl),super(null,s,n,r,o,a,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rs,this.minFilter=a!==void 0?a:Rs,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kh=new Lh(1,1);kh.compareFunction=Xl;class Qn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new S;class Br{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_e(t,this.array),i=_e(i,this.array),s=_e(s,this.array),n=_e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ra=new S,za=new ct,Ia=new ct,Uh=new S,Na=new fe,ln=new S,er=new Rt,Da=new fe,tr=new Bn;class Vh extends fi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ia,this.bindMatrix=new fe,this.bindMatrixInverse=new fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ln),this.boundingBox.expandByPoint(ln)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ln),this.boundingSphere.expandByPoint(ln)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(s),e.ray.intersectsSphere(er)!==!1&&(Da.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Da),!(this.boundingBox!==null&&tr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ia?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;za.fromBufferAttribute(s.attributes.skinIndex,e),Ia.fromBufferAttribute(s.attributes.skinWeight,e),Ra.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const r=Ia.getComponent(n);if(r!==0){const o=za.getComponent(n);Na.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Uh.copy(Ra).applyMatrix4(Na),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class il extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pr extends gt{constructor(e=null,t=1,i=1,s,n,r,o,a,h=Rs,c=Rs,u,f){super(null,r,o,a,h,c,s,n,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fa=new fe,Gh=new fe;class Rr{constructor(e=[],t=[]){this.uuid=Tt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,r=e.length;n<r;n++){const o=e[n]?e[n].matrixWorld:Gh;Fa.multiplyMatrices(o,t[n]),Fa.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Rr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Pr(t,e,e,Xo,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const n=e.bones[i];let r=t[n];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),r=new il),this.bones.push(r),this.boneInverses.push(new fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,n=t.length;s<n;s++){const r=t[s];e.bones.push(r.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class gr extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new fe,La=new fe,hn=[],ka=new $t,qh=new fe,ms=new fi,gs=new Rt;class Hh extends fi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),ka.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(ka)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yi),gs.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,r=e*n+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(i),e.ray.intersectsSphere(gs)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,Yi),La.multiplyMatrices(i,Yi),ms.matrixWorld=La,ms.raycast(e,hn);for(let r=0,o=hn.length;r<o;r++){const a=hn[r];a.instanceId=n,a.object=this,t.push(a)}hn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(s*this.count),s,this.count,ql,Ti));const n=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const o=this.geometry.morphTargetsRelative?1:1-r,a=s*e;n[a]=o,n.set(i,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sl extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new S,Ua=new S,Va=new fe,ir=new Bn,un=new Rt;class zr extends De{constructor(e=new pi,t=new sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Oa.fromBufferAttribute(t,s-1),Ua.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Oa.distanceTo(Ua);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(s),un.radius+=n,e.ray.intersectsSphere(un)===!1)return;Va.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Va);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,h=new S,c=new S,u=new S,f=new S,d=this.isLineSegments?2:1,p=i.index,y=i.attributes.position;if(p!==null){const m=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let b=m,v=_-1;b<v;b+=d){const T=p.getX(b),A=p.getX(b+1);if(h.fromBufferAttribute(y,T),c.fromBufferAttribute(y,A),ir.distanceSqToSegment(h,c,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),_=Math.min(y.count,r.start+r.count);for(let b=m,v=_-1;b<v;b+=d){if(h.fromBufferAttribute(y,b),c.fromBufferAttribute(y,b+1),ir.distanceSqToSegment(h,c,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const Ga=new S,qa=new S;class Wh extends zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)Ga.fromBufferAttribute(t,s),qa.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ga.distanceTo(qa);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nl extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new fe,yr=new Bn,cn=new Rt,fn=new S;class Yh extends De{constructor(e=new pi,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cn.copy(i.boundingSphere),cn.applyMatrix4(s),cn.radius+=n,e.ray.intersectsSphere(cn)===!1)return;Ha.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Ha);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let p=f,g=d;p<g;p++){const y=h.getX(p);fn.fromBufferAttribute(u,y),Wa(fn,y,a,s,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let p=f,g=d;p<g;p++)fn.fromBufferAttribute(u,p),Wa(fn,p,a,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const o=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Wa(l,e,t,i,s,n,r){const o=yr.distanceSqToPoint(l);if(o<t){const a=new S;yr.closestPointToPoint(l,a),a.applyMatrix4(i);const h=s.ray.origin.distanceTo(a);if(h<s.near||h>s.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class Ir extends pi{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(r+o,Math.PI);let h=0;const c=[],u=new S,f=new S,d=[],p=[],g=[],y=[];for(let m=0;m<=i;m++){const _=[],b=m/i;let v=0;m===0&&r===0?v=.5/t:m===i&&a===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const A=T/t;u.x=-e*Math.cos(s+A*n)*Math.sin(r+b*o),u.y=e*Math.cos(r+b*o),u.z=e*Math.sin(s+A*n)*Math.sin(r+b*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),y.push(A+v,1-b),_.push(h++)}c.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){const b=c[m][_+1],v=c[m][_],T=c[m+1][_],A=c[m+1][_+1];(m!==0||r>0)&&d.push(b,v,A),(m!==i-1||a<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nr extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kt extends Nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function dn(l,e,t){return!l||!t&&l.constructor===e?l:typeof e.BYTES_PER_ELEMENT=="number"?new e(l):Array.prototype.slice.call(l)}function Xh(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function $h(l){function e(s,n){return l[s]-l[n]}const t=l.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function ja(l,e,t){const i=l.length,s=new l.constructor(i);for(let n=0,r=0;r!==i;++n){const o=t[n]*e;for(let a=0;a!==e;++a)s[r++]=l[o+a]}return s}function rl(l,e,t,i){let s=1,n=l[0];for(;n!==void 0&&n[i]===void 0;)n=l[s++];if(n===void 0)return;let r=n[i];if(r!==void 0)if(Array.isArray(r))do r=n[i],r!==void 0&&(e.push(n.time),t.push.apply(t,r)),n=l[s++];while(n!==void 0);else if(r.toArray!==void 0)do r=n[i],r!==void 0&&(e.push(n.time),r.toArray(t,t.length)),n=l[s++];while(n!==void 0);else do r=n[i],r!==void 0&&(e.push(n.time),t.push(r)),n=l[s++];while(n!==void 0)}class Ds{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],n=t[i-1];i:{e:{let r;t:{s:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<n)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(s=n,n=t[--i-1],e>=n)break e}r=i,i=0;break t}break i}for(;i<r;){const o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s;for(let r=0;r!==s;++r)t[r]=i[n+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Kh extends Ds{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:na,endingEnd:na}}intervalChanged_(e,t,i){const s=this.parameterPositions;let n=e-2,r=e+1,o=s[n],a=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case ra:n=e,o=2*t-i;break;case aa:n=s.length-2,o=t+s[n]-s[n+1];break;default:n=e,o=i}if(a===void 0)switch(this.getSettings_().endingEnd){case ra:r=e,a=2*i-t;break;case aa:r=1,a=i+s[1]-s[0];break;default:r=e-1,a=t}const h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(a-i),this._offsetPrev=n*c,this._offsetNext=r*c}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,h=a-o,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),g=p*p,y=g*p,m=-f*y+2*f*g-f*p,_=(1+f)*y+(-1.5-2*f)*g+(-.5+f)*p+1,b=(-1-d)*y+(1.5+d)*g+.5*p,v=d*y-d*g;for(let T=0;T!==o;++T)n[T]=m*r[c+T]+_*r[h+T]+b*r[a+T]+v*r[u+T];return n}}class Zh extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,h=a-o,c=(i-t)/(s-t),u=1-c;for(let f=0;f!==o;++f)n[f]=r[h+f]*u+r[a+f]*c;return n}}class Jh extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zt{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dn(t,this.TimeBufferType),this.values=dn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dn(e.times,Array),values:dn(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case Nn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return Nn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let n=0,r=s-1;for(;n!==s&&i[n]<e;)++n;for(;r!==-1&&i[r]>t;)--r;if(++r,n!==0||r!==s){n>=r&&(r=Math.max(r,1),n=r-1);const o=this.getValueSize();this.times=i.slice(n,r),this.values=this.values.slice(n*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==n;o++){const a=i[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(s!==void 0&&Xh(s))for(let o=0,a=s.length;o!==a;++o){const h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Nn,n=e.length-1;let r=1;for(let o=1;o<n;++o){let a=!1;const h=e[o],c=e[o+1];if(h!==c&&(o!==1||h!==e[0]))if(s)a=!0;else{const u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){const g=t[u+p];if(g!==t[f+p]||g!==t[d+p]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const u=o*i,f=r*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++r}}if(n>0){e[r]=e[n];for(let o=n*i,a=r*i,h=0;h!==i;++h)t[a+h]=t[o+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=es;class rs extends zt{}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=zs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends zt{}al.prototype.ValueTypeName="color";class ts extends zt{}ts.prototype.ValueTypeName="number";class Qh extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(i-t)/(s-t);let h=e*o;for(let c=h+o;h!==c;h+=4)di.slerpFlat(n,0,r,h-o,r,h,a);return n}}class Ci extends zt{InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=es;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends zt{}as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=zs;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends zt{}is.prototype.ValueTypeName="vector";class eu{constructor(e="",t=-1,i=[],s=Hl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Tt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let r=0,o=i.length;r!==o;++r)t.push(iu(i[r]).scale(s));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,r=i.length;n!==r;++n)t.push(zt.toJSON(i[n]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const n=t.length,r=[];for(let o=0;o<n;o++){let a=[],h=[];a.push((o+n-1)%n,o,(o+1)%n),h.push(0,1,0);const c=$h(a);a=ja(a,1,c),h=ja(h,1,c),!s&&a[0]===0&&(a.push(n),h.push(h[0])),r.push(new ts(".morphTargetInfluences["+t[o].name+"]",a,h).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const h=e[o],c=h.name.match(n);if(c&&c.length>1){const u=c[1];let f=s[u];f||(s[u]=f=[]),f.push(h)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,p,g){if(d.length!==0){const y=[],m=[];rl(d,y,m,p),y.length!==0&&g.push(new u(f,y,m))}},s=[],n=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const h=e.hierarchy||[];for(let u=0;u<h.length;u++){const f=h[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let g=0;g<f[p].morphTargets.length;g++)d[f[p].morphTargets[g]]=-1;for(const g in d){const y=[],m=[];for(let _=0;_!==f[p].morphTargets.length;++_){const b=f[p];y.push(b.time),m.push(b.morphTarget===g?1:0)}s.push(new ts(".morphTargetInfluence["+g+"]",y,m))}a=d.length*r}else{const d=".bones["+t[u].name+"]";i(is,d+".position",f,"pos",s),i(Ci,d+".quaternion",f,"rot",s),i(is,d+".scale",f,"scl",s)}}return s.length===0?null:new this(n,a,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tu(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return is;case"color":return al;case"quaternion":return Ci;case"bool":case"boolean":return rs;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function iu(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tu(l.type);if(l.times===void 0){const t=[],i=[];rl(l.keys,t,i,"value"),l.times=t,l.values=i}return e.parse!==void 0?e.parse(l):new e(l.name,l.times,l.values,l.interpolation)}const li={enabled:!1,files:{},add:function(l,e){this.enabled!==!1&&(this.files[l]=e)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class su{constructor(e,t,i){const s=this;let n=!1,r=0,o=0,a;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,n===!1&&s.onStart!==void 0&&s.onStart(c,r,o),n=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,o),r===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){const d=h[u],p=h[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return p}return null}}}const nu=new su;class Bi{constructor(e){this.manager=e!==void 0?e:nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ut={};class ru extends Error{constructor(e,t){super(e),this.response=t}}class Dr extends Bi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=li.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Ut[e]!==void 0){Ut[e].push({onLoad:t,onProgress:i,onError:s});return}Ut[e]=[],Ut[e].push({onLoad:t,onProgress:i,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=Ut[e],u=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let g=0;const y=new ReadableStream({start(m){_();function _(){u.read().then(({done:b,value:v})=>{if(b)m.close();else{g+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let A=0,I=c.length;A<I;A++){const E=c[A];E.onProgress&&E.onProgress(T)}m.enqueue(v),_()}})}}});return new Response(y)}else throw new ru(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(a){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return h.arrayBuffer().then(p=>d.decode(p))}}}).then(h=>{li.add(e,h);const c=Ut[e];delete Ut[e];for(let u=0,f=c.length;u<f;u++){const d=c[u];d.onLoad&&d.onLoad(h)}}).catch(h=>{const c=Ut[e];if(c===void 0)throw this.manager.itemError(e),h;delete Ut[e];for(let u=0,f=c.length;u<f;u++){const d=c[u];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class au extends Bi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,r=li.get(e);if(r!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(r),n.manager.itemEnd(e)},0),r;const o=mr("img");function a(){c(),li.add(e,this),t&&t(this),n.manager.itemEnd(e)}function h(u){c(),s&&s(u),n.manager.itemError(e),n.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class ou extends Bi{constructor(e){super(e)}load(e,t,i,s){const n=this,r=new Pr,o=new Dr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(n.withCredentials),o.load(e,function(a){let h;try{h=n.parse(a)}catch(c){if(s!==void 0)s(c);else{console.error(c);return}}h.image!==void 0?r.image=h.image:h.data!==void 0&&(r.image.width=h.width,r.image.height=h.height,r.image.data=h.data),r.wrapS=h.wrapS!==void 0?h.wrapS:Si,r.wrapT=h.wrapT!==void 0?h.wrapT:Si,r.magFilter=h.magFilter!==void 0?h.magFilter:ci,r.minFilter=h.minFilter!==void 0?h.minFilter:ci,r.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(r.colorSpace=h.colorSpace),h.flipY!==void 0&&(r.flipY=h.flipY),h.format!==void 0&&(r.format=h.format),h.type!==void 0&&(r.type=h.type),h.mipmaps!==void 0&&(r.mipmaps=h.mipmaps,r.minFilter=En),h.mipmapCount===1&&(r.minFilter=ci),h.generateMipmaps!==void 0&&(r.generateMipmaps=h.generateMipmaps),r.needsUpdate=!0,t&&t(r,h)},i,s),r}}class wi extends Bi{constructor(e){super(e)}load(e,t,i,s){const n=new gt,r=new au(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class Fr extends De{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sr=new fe,Ya=new S,Xa=new S;class Lr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fh,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lu extends Lr{constructor(){super(new Cr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hu extends Fr{constructor(e,t,i=0,s=Math.PI/3,n=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=i,this.angle=s,this.penumbra=n,this.decay=r,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $a=new fe,ys=new S,nr=new S;class uu extends Lr{constructor(){super(new Cr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(ys),nr.copy(i.position),nr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nr),i.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),$a.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class cu extends Fr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fu extends Lr{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class du extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new fu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class As{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pu extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,r=li.get(e);if(r!==void 0){if(n.manager.itemStart(e),r.then){r.then(h=>{t&&t(h),n.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(r),n.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const a=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(h){return li.add(e,h),t&&t(h),n.manager.itemEnd(e),h}).catch(function(h){s&&s(h),li.remove(e),n.manager.itemError(e),n.manager.itemEnd(e)});li.add(e,a),n.manager.itemStart(e)}}const kr="\\[\\]\\.:\\/",mu=new RegExp("["+kr+"]","g"),Or="[^"+kr+"]",gu="[^"+kr.replace("\\.","")+"]",yu=/((?:WC+[\/:])*)/.source.replace("WC",Or),vu=/(WCOD+)?/.source.replace("WCOD",gu),xu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Or),bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Or),wu=new RegExp("^"+yu+vu+xu+bu+"$"),_u=["material","materials","bones","map"];class Su{constructor(e,t,i){const s=i||Se.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=i.length;s!==n;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Se{constructor(e,t,i){this.path=t,this.parsedPath=i||Se.parseTrackName(t),this.node=Se.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Se.Composite(e,t,i):new Se(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mu,"")}static parseTrackName(e){const t=wu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const n=i.nodeName.substring(s+1);_u.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let r=0;r<n.length;r++){const o=n[r];if(o.name===t||o.uuid===t)return o;const a=i(o.children);if(a)return a}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let n=t.propertyIndex;if(e||(e=Se.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const r=e[s];if(r===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=n}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Se.Composite=Su;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);class mt{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}expand(e){e instanceof S?(e.x<this.min.x&&this.min.setX(e.x),e.y<this.min.y&&this.min.setY(e.y),e.z<this.min.z&&this.min.setZ(e.z),e.x>this.max.x&&this.max.setX(e.x),e.y>this.max.y&&this.max.setY(e.y),e.z>this.max.z&&this.max.setZ(e.z)):e instanceof mt&&(e.min.x<this.min.x&&this.min.setX(e.min.x),e.min.y<this.min.y&&this.min.setY(e.min.y),e.min.z<this.min.z&&this.min.setZ(e.min.z),e.max.x>this.max.x&&this.max.setX(e.max.x),e.max.y>this.max.y&&this.max.setY(e.max.y),e.max.z>this.max.z&&this.max.setZ(e.max.z))}intersectRay(e,t){let i=new S(1,1,1).divide(t),s=(this.min.x-e.x)*i.x,n=(this.max.x-e.x)*i.x,r=(this.min.y-e.y)*i.y,o=(this.max.y-e.y)*i.y,a=(this.min.z-e.z)*i.z,h=(this.max.z-e.z)*i.z;var c=Math.max(Math.max(Math.min(s,n),Math.min(r,o)),Math.min(a,h));let u=Math.min(Math.min(Math.max(s,n),Math.max(r,o)),Math.max(a,h));return u<0?{t:u,hit:!1}:c>u?{t:u,hit:!1}:(c<0&&(c=0),{t:c,hit:!0})}static shaderStruct(){return`
      struct AABB {
        min: vec3f,
        max: vec3f,
      }

      struct AABBIntersectionResult {
        t: f32,
        hit: bool,
      }
    `}static shaderIntersect(){return`
      fn aabbIntersect(ro: vec3f, rd: vec3f, aabb: AABB) -> AABBIntersectionResult {
        let dirfrac = vec3f(1,1,1) / rd;

        // this.min is the corner of AABB with minimal coordinates - left bottom, this.max is maximal corner
        // r.org is origin of ray
        let t1 = (aabb.min.x - ro.x) * dirfrac.x;
        let t2 = (aabb.max.x - ro.x) * dirfrac.x;
        let t3 = (aabb.min.y - ro.y) * dirfrac.y;
        let t4 = (aabb.max.y - ro.y) * dirfrac.y;
        let t5 = (aabb.min.z - ro.z) * dirfrac.z;
        let t6 = (aabb.max.z - ro.z) * dirfrac.z;


        var tmin = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
        let tmax = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));

        // if tmax < 0, ray (line) is intersecting AABB, but the whole AABB is behind us
        if (tmax < 0) {
          return AABBIntersectionResult(tmax, false);
        }

        // if tmin > tmax, ray doesn't intersect AABB
        if (tmin > tmax) {
          return AABBIntersectionResult(tmax, false);
        }

        // necessary to avoid issue 1. on docs/images
        if (tmin < 0) { 
          tmin = 0;
        }

        return AABBIntersectionResult(tmin, true);
      }
    `}}function Ei(l,e){return new Z(l,e)}function Xi(l,e,t){return new S(l,e,t)}function vs(l,e){return l*(e<0?-1:1)}function Ka(l,e,t){return(1-l)*e+l*t}function Mu(l,e){let t=e.clone().sub(new Z(l.min.x,l.min.y));return l.max.x>l.min.x&&(t.x/=l.max.x-l.min.x),l.max.y>l.min.y&&(t.y/=l.max.y-l.min.y),t}function Za(l,e,t){return l<e?e:l>t?t:l}class _i{constructor(e,t,i){M(this,"func",[]);M(this,"absFunc",[]);M(this,"cdf",[]);M(this,"min",-1);M(this,"max",-1);M(this,"funcInt",-1);if(e instanceof ArrayBuffer){this.fromBufferData(e);return}if(t===void 0||i===void 0)throw new Error("PC1D constructor must provide min and max values");let s=[],n=[],r=0;for(let a=0;a<e.length;a++)s.push(0),n.push(0);for(let a=0;a<e.length;a++)s[a]=Math.abs(e[a]);n[0]=0;let o=e.length;for(let a=1;a<o+1;a++)n[a]=n[a-1]+e[a-1]*(i-t)/o;if(r=n[o],r==0)for(let a=1;a<o+1;a++)n[a]=a/o;else for(let a=1;a<o+1;a++)n[a]/=r;this.func=e,this.min=t,this.max=i,this.absFunc=s,this.cdf=n,this.funcInt=r}fromBufferData(e){let i=e.byteLength/4,s=Math.floor((i-3)/3),n=new Float32Array(e,0,i);this.min=n[0],this.max=n[1],this.funcInt=n[2],this.func=Array.from(n.slice(3,3+s)),this.absFunc=Array.from(n.slice(3+s,3+s*2)),this.cdf=Array.from(n.slice(3+s*2,3+s*3+1))}getBufferData(){const e=12+(this.func.length*3+1)*4,t=new ArrayBuffer(e);let i=e/4,s=this.func.length,n=new Float32Array(t,0,i);n[0]=this.min,n[1]=this.max,n[2]=this.funcInt;for(let r=0;r<this.func.length;r++)n[3+r]=this.func[r];for(let r=0;r<this.absFunc.length;r++)n[3+s+r]=this.absFunc[r];for(let r=0;r<this.cdf.length;r++)n[3+s*2+r]=this.cdf[r];return t}findCDFIndex(e,t){let i=0,s=e.length;for(var n=-2,r=-1;r!=n;){n=Math.floor((i+s)/2),r=n;let o=e[n];t>o&&(i=n,n=Math.floor((i+s)/2)),t<o&&(s=n,n=Math.floor((i+s)/2))}return r}samplePC1D(e){let{cdf:t,absFunc:i,funcInt:s,func:n,min:r,max:o}=this,a=this.findCDFIndex(t,e),h=e-t[a];t[a+1]-t[a]>0&&(h/=t[a+1]-t[a]);let c=a,u=s>0?i[a]/s:0,f=Ka((a+h)/n.length,r,o),d=n[a];return{offset:c,pdf:u,remappedOffset:f,sampledValue:d}}invertPC1D(e){let{cdf:t,func:i,min:s,max:n}=this;if(e<s||e>n)return;let r=(e-s)/(n-s)*i.length,o=Math.min(Math.max(Math.floor(r),0),i.length-1),a=r-o;return Ka(a,t[o],t[o+1])}static shaderStruct(){return`
      struct PC1DSample {
        offset: i32,
        pdf: f32,
        remappedOffset: f32,
        sampledValue: f32,
      }
    `}static shaderMethods(){return`

      // we have to be careful with the find function, the cdf could be of this type:
      // [0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.6, 1.0]
      // in this case with u = 0.1, I can't sample any of the 0.1s in the middle of the array,
      // since they would all have probability 0 of being taken, thus:
      //   "the function must return the offset into the array of function values of the 
      //   largest index where the CDF was less than or equal to u. 
      //   (In other words, cdf[offset] <= u < cdf[offset+1])"
      // using the array above as example, if u = 0.09, then the offset is: idx=0, 
      // if u = 0.1, then idx=6, (notice we skipped all the ones in the middle)
      // if u = 0.11, then we still have idx=6
      // ******** another important point ********
      // I think the algo could fail if u=1.0, I had to clamp my rands to 0.9999999
      // I'm not entirely sure wheter that's a problem or not, it would be worth testing
      fn PC1D_FindCDFIndex(data: ptr<storage, array<f32>>, offset: i32, sz: i32, u: f32) -> i32 {
        var size = sz - 2; 
        var first = offset + 1;

        while (size > 0) {
          let half = size >> 1; 
      	  let middle = first + half;
          let predResult = data[middle] <= u;

          if (predResult) {
            first = middle + 1;
            size = size - (half + 1);
          } else {
            first = first;
            size = half;
          }
        }

        // clamp between 0 and size - 2 (note that we need to add offset to both)
        return clamp(first - 1, offset + 0, offset + sz - 2);
      }

      fn samplePC1D(
        data: ptr<storage, array<f32>>, offset: i32, size: i32, u: f32
      ) -> PC1DSample {
        // this function is unfortunately somewhat complicated given that "data"
        // contains an entire structure with multiple arrays, the CPU version 
        // that is much easier to read is contained inside PiecewiseConstant1D.ts

        let min = data[offset + 0];
        let max = data[offset + 1];
        let funcInt = data[offset + 2];

        let func_data_idx = offset + 3;
        let absFunc_data_idx = offset + 3 + size;
        let cdf_data_idx = offset + 3 + size * 2;

        let cdf_o = PC1D_FindCDFIndex(data, cdf_data_idx, size, u);
        let relative_o = cdf_o - cdf_data_idx;

        // // e.g. u == 0.7 and cdf[o] == 0.68
        var du = u - data[cdf_o];
        if (data[cdf_o + 1] - data[cdf_o] > 0) {
          // after that du will be in range [0...1]
          du /= data[cdf_o + 1] - data[cdf_o];
        }

        let funcValueAtO = data[func_data_idx + relative_o];
        let absFuncValueAtO = data[absFunc_data_idx + relative_o];
    
        let offs = relative_o;
        var pdf: f32 = 0;
        if (funcInt > 0) {
          pdf = absFuncValueAtO / funcInt; 
        } else {
          pdf = 0;
        }
        let remappedOffset = Lerp((f32(relative_o) + du) / f32(size), min, max);
        let sampledValue = funcValueAtO;
    
        return PC1DSample(offs, pdf, remappedOffset, sampledValue);
      }    
    `}}class ai{constructor(e,t,i,s){M(this,"pConditionalV",[]);M(this,"pMarginal",new _i([1],0,1));M(this,"domain",new mt);M(this,"sizeX",0);M(this,"sizeY",0);if(e instanceof ArrayBuffer){this.fromArrayBuffer(e);return}if(t===void 0||i===void 0||s===void 0)throw new Error("PC2D constructor requires size and domain");let n=e.flat(1);this.sizeX=t,this.sizeY=i;let r=[],o;for(let h=0;h<i;h++)r.push(new _i(n.slice(h*t,h*t+t),s.min.x,s.max.x));let a=[];for(let h=0;h<i;++h)a.push(r[h].funcInt);o=new _i(a,s.min.y,s.max.y),this.pConditionalV=r,this.pMarginal=o,this.domain=s}samplePC2D(e){let t=new Z(-1,-1),i=this.pMarginal.samplePC1D(e.y);t.y=i.offset;let s=this.pConditionalV[t.y].samplePC1D(e.x);return t.x=s.offset,{pdf:i.pdf*s.pdf,offset:t,floatOffset:new Z(s.remappedOffset,i.remappedOffset)}}pdfPC2D(e,t){let{pConditionalV:i,pMarginal:s}=this,n=Mu(t,e),r=Za(Math.floor(n.x*i[0].func.length),0,i[0].func.length-1),o=Za(Math.floor(n.y*s.func.length),0,s.func.length-1);return i[o].func[r]/s.funcInt}fromArrayBuffer(e){const t=e,i=new Float32Array(t),s=new Int32Array(t);this.domain=new mt(new S(i[0],i[1],i[2]),new S(i[4],i[5],i[6])),this.sizeX=s[8],this.sizeY=s[9];let r=(3+this.sizeX*3+1)*4;for(let o=0;o<this.sizeY;o++)this.pConditionalV.push(new _i(e.slice(40+o*r,40+(o+1)*r)));this.pMarginal=new _i(e.slice(40+r*this.sizeY,40+r*(this.sizeY+1)))}getBufferData(){let e=3+this.sizeX*3+1,t=e*(this.sizeY+1),s=40+t*4+2*4;const n=new ArrayBuffer(s),r={domain:{min:new Float32Array(n,0,3),max:new Float32Array(n,16,3)},size:new Int32Array(n,32,2),data:new Float32Array(n,40,t+2)};r.domain.min.set([this.domain.min.x,this.domain.min.y,0]),r.domain.max.set([this.domain.max.x,this.domain.max.y,0]),r.size.set([this.sizeX,this.sizeY]),this.pConditionalV.forEach((a,h)=>{let c=a.getBufferData();r.data.set(new Float32Array(c),e*h)});let o=this.pMarginal.getBufferData();return r.data.set(new Float32Array(o),e*this.pConditionalV.length),r.data.set([0,0],t),n}static shaderStruct(){return`
      struct PC2D {
        domain: AABB,
        size: vec2i,
        // data will contain:
        // pConditionalV: PC1D[];
        // pMarginal: PC1D;
        // - - - - - - - -  
        // PC1D will be held in memory with this layout:
        // min, max, funcInt, func[], absFunc[], cdf[]
        data: array<f32>,
      }

      struct PC2DSample {
        offset: vec2i,
        pdf: f32,
        floatOffset: vec2f,
      }
    `}static shaderMethods(){return`
      fn samplePC2D(
        data: ptr<storage, array<f32>>, size: vec2i, domain: AABB, uv: vec2f
      ) -> PC2DSample {
        // 3 struct elements, min max & funcInt, then size.x * 3 for the arrays, but remember, 
        // cdf has an additional element, so we add +1
        // and then we multiply by size.y
        let pMarginalDataOffset = (3 + size.x * 3 + 1) * size.y;
        let pMarginalSize = size.y;

        var offset = vec2i(-1, -1);
        let pMarginalSample = samplePC1D(data, pMarginalDataOffset, pMarginalSize, uv.y);
        offset.y = pMarginalSample.offset;
        
        let pConditionalVDataOffset = (3 + size.x * 3 + 1) * offset.y;
        let pConditionalSize = size.x;
        let pConditionalVSample = samplePC1D(data, pConditionalVDataOffset, pConditionalSize, uv.x);
        offset.x = pConditionalVSample.offset;

        return PC2DSample(
          offset,
          pMarginalSample.pdf * pConditionalVSample.pdf,
          vec2f(pConditionalVSample.remappedOffset, pMarginalSample.remappedOffset)
        );
      }

      fn getPC2Dpdf(data: ptr<storage, array<f32>>, size: vec2i, floatOffset: vec2f, domain: AABB) -> f32 {
        let p = boundsOffset2D(domain, floatOffset);

        let iu: i32 = clamp(
          i32(p.x * f32(size.x)),
          0,
          size.x - 1
        );
        let iv: i32 = clamp(
          i32(p.y * f32(size.y)),
          0,
          size.y - 1
        );

        let pMarginalDataOffset = (3 + size.x * 3 + 1) * size.y;
        let pMarginalFuncInt = data[pMarginalDataOffset + 2];

        let pConditionalVDataOffset = (3 + size.x * 3 + 1) * iv;
        let pConditionalV_func_iu_value = data[
          pConditionalVDataOffset + 3 + iu
        ];
        
        return pConditionalV_func_iu_value / pMarginalFuncInt;
      }
    `}}function ol(l){return .2126*l.x+.7152*l.y+.0722*l.z}class Tu extends ou{constructor(e){super(e),this.type=Os}parse(e){const r=function(E,U){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(U||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(U||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(U||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(U||""))}},c=`
`,u=function(E,U,C){U=U||1024;let N=E.pos,k=-1,z=0,L="",q=String.fromCharCode.apply(null,new Uint16Array(E.subarray(N,N+128)));for(;0>(k=q.indexOf(c))&&z<U&&N<E.byteLength;)L+=q,z+=q.length,N+=128,q+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(N,N+128)));return-1<k?(E.pos+=z+k+1,L+q.slice(0,k)):!1},f=function(E){const U=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,q;for((E.pos>=E.byteLength||!(L=u(E)))&&r(1,"no header found"),(q=L.match(U))||r(3,"bad initial token"),z.valid|=1,z.programtype=q[1],z.string+=L+`
`;L=u(E),L!==!1;){if(z.string+=L+`
`,L.charAt(0)==="#"){z.comments+=L+`
`;continue}if((q=L.match(C))&&(z.gamma=parseFloat(q[1])),(q=L.match(B))&&(z.exposure=parseFloat(q[1])),(q=L.match(N))&&(z.valid|=2,z.format=q[1]),(q=L.match(k))&&(z.valid|=4,z.height=parseInt(q[1],10),z.width=parseInt(q[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||r(3,"missing format specifier"),z.valid&4||r(3,"missing image size specifier"),z},d=function(E,U,C){const B=U;if(B<8||B>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);B!==(E[2]<<8|E[3])&&r(3,"wrong scanline width");const N=new Uint8Array(4*U*C);N.length||r(4,"unable to allocate buffer space");let k=0,z=0;const L=4*B,q=new Uint8Array(4),ae=new Uint8Array(L);let de=C;for(;de>0&&z<E.byteLength;){z+4>E.byteLength&&r(1),q[0]=E[z++],q[1]=E[z++],q[2]=E[z++],q[3]=E[z++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=B)&&r(3,"bad rgbe scanline format");let X=0,J;for(;X<L&&z<E.byteLength;){J=E[z++];const le=J>128;if(le&&(J-=128),(J===0||X+J>L)&&r(3,"bad scanline data"),le){const H=E[z++];for(let D=0;D<J;D++)ae[X++]=H}else ae.set(E.subarray(z,z+J),X),X+=J,z+=J}const ue=B;for(let le=0;le<ue;le++){let H=0;N[k]=ae[le+H],H+=B,N[k+1]=ae[le+H],H+=B,N[k+2]=ae[le+H],H+=B,N[k+3]=ae[le+H],k+=4}de--}return N},p=function(E,U,C,B){const N=E[U+3],k=Math.pow(2,N-128)/255;C[B+0]=E[U+0]*k,C[B+1]=E[U+1]*k,C[B+2]=E[U+2]*k,C[B+3]=1},g=function(E,U,C,B){const N=E[U+3],k=Math.pow(2,N-128)/255;C[B+0]=Ks.toHalfFloat(Math.min(E[U+0]*k,65504)),C[B+1]=Ks.toHalfFloat(Math.min(E[U+1]*k,65504)),C[B+2]=Ks.toHalfFloat(Math.min(E[U+2]*k,65504)),C[B+3]=Ks.toHalfFloat(1)},y=new Uint8Array(e);y.pos=0;const m=f(y),_=m.width,b=m.height,v=d(y.subarray(y.pos),_,b);let T,A,I;switch(this.type){case Ti:I=v.length/4;const E=new Float32Array(I*4);for(let C=0;C<I;C++)p(v,C*4,E,C*4);T=E,A=Ti;break;case Os:I=v.length/4;const U=new Uint16Array(I*4);for(let C=0;C<I;C++)g(v,C*4,U,C*4);T=U,A=Os;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:b,data:T,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,i,s){function n(r,o){switch(r.type){case Ti:case Os:r.colorSpace=ft,r.minFilter=ci,r.magFilter=ci,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,o)}return super.load(e,n,i,s)}}let Sn=class{constructor(){M(this,"INFO_BUFFER_BYTE_LENGTH",112);M(this,"SERIALIZATION_VERSION",1);M(this,"size",new Z(0,0));M(this,"luminanceAverage",0);M(this,"scale",1);M(this,"rotX",0);M(this,"rotY",0);M(this,"data",new Float32Array);M(this,"distribution",new ai([[0]],1,1,new mt));M(this,"compensatedDistribution",new ai([[0]],1,1,new mt))}async fromEquirect(e,t=400){let i=await new Tu().setDataType(Ti).loadAsync(e),s=i.source.data.data,n=new Z(i.source.data.width,i.source.data.height),r=[],o=[],a=[],h=t;for(let c=0;c<h;c++)for(let u=0;u<h;u++){let f=1/(h*2),d=u/h+f,p=c/h+f,g=this.equalAreaSquareToSphere(new Z(d,p));g.normalize();let y=new Z(Math.atan2(g.z,g.x),Math.asin(g.y));y.multiply(new Z(1/(Math.PI*2),1/Math.PI)),y.addScalar(.5),y.y=1-y.y;let m=Math.floor(y.x*n.x)+Math.floor(y.y*n.y)*n.x,_=s[m*4+0],b=s[m*4+1],v=s[m*4+2];r.push(_,b,v,1);let T=ol(new S(_,b,v));this.luminanceAverage+=T,u===0&&o.push([]),o[c].push(T)}this.luminanceAverage/=h*h;for(let c=0;c<h;c++)for(let u=0;u<h;u++)u===0&&a.push([]),a[c].push(Math.max(o[c][u]-this.luminanceAverage,0));return this.distribution=new ai(o,h,h,new mt(new S(0,0,0),new S(1,1,0))),this.compensatedDistribution=new ai(a,h,h,new mt(new S(0,0,0),new S(1,1,0))),this.data=new Float32Array(r),this.size=new Z(h,h),this}fromArrayBuffer(e){if(new Uint32Array(e,0,1)[0]!=this.SERIALIZATION_VERSION)throw new Error("envmap buffer is from an older version, re-run the envmap transform");this.size.x=new Uint32Array(e,1*4,2)[0],this.size.y=new Uint32Array(e,1*4,2)[1];let i=new Float32Array(e,3*4,4);this.luminanceAverage=i[0],this.scale=i[1],this.rotX=i[2],this.rotY=i[3];const s=this.size.x*this.size.y*4*4;this.data=new Float32Array(e,7*4,s/4);let n=(e.byteLength-(7*4+s))/2;return this.distribution=new ai(e.slice(7*4+s,7*4+s+n)),this.compensatedDistribution=new ai(e.slice(7*4+s+n,7*4+s+n+n)),this}getArrayBuffer(){let e=this.distribution.getBufferData(),t=this.compensatedDistribution.getBufferData(),i=1*4,s=2*4,n=1*4,r=3*4,o=i+s+n+r+this.data.byteLength+e.byteLength+t.byteLength,a=new ArrayBuffer(o),h={version:new Uint32Array(a,0,1),size:new Uint32Array(a,1*4,2),luminanceAverage:new Float32Array(a,3*4,1),scale:new Float32Array(a,4*4,1),rotX:new Float32Array(a,5*4,1),rotY:new Float32Array(a,6*4,1),data:new Float32Array(a,7*4,this.data.length),distributionBuffer:new Uint8Array(a,7*4+this.data.byteLength,e.byteLength),compensatedDistributionBuffer:new Uint8Array(a,7*4+this.data.byteLength+e.byteLength,t.byteLength)};return h.version.set([this.SERIALIZATION_VERSION]),h.size.set([this.size.x,this.size.y]),h.luminanceAverage.set([this.luminanceAverage]),h.scale.set([this.scale]),h.rotX.set([this.rotX]),h.rotY.set([this.rotY]),h.data.set(this.data),h.distributionBuffer.set(new Uint8Array(e)),h.compensatedDistributionBuffer.set(new Uint8Array(t)),a}equalAreaSquareToSphere(e){let t=2*e.x-1,i=2*e.y-1,s=Math.abs(t),n=Math.abs(i),r=1-(s+n),a=1-Math.abs(r),h=(a==0?1:(n-s)/a+1)*Math.PI/4,c=vs(1-a*a,r),u=vs(Math.cos(h),t),f=vs(Math.sin(h),i),d=new S(u*a*Math.sqrt(2-a*a),f*a*Math.sqrt(2-a*a),c);return new S(d.x,d.z,d.y)}equalAreaSphereToSquare(e){let t=Math.abs(e.x),i=Math.abs(e.y),s=Math.abs(e.z),n=Math.sqrt(1-s),r=Math.max(t,i);var o=Math.min(t,i);r==0?o=0:o=o/r;var a=Math.atan(o)*2/Math.PI;t<i&&(a=1-a);var h=a*n,c=n-h;if(e.z<0){var u=h;h=c,c=u,c=1-c,h=1-h}return c=vs(c,e.x),h=vs(h,e.y),new Z(.5*(c+1),.5*(h+1))}createEnvmapInfoBuffer(e){const t=e.createBuffer({size:this.INFO_BUFFER_BYTE_LENGTH,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.updateEnvmapInfoBuffer(e,t),t}updateEnvmapInfoBuffer(e,t){const i=new ArrayBuffer(this.INFO_BUFFER_BYTE_LENGTH),s={size:new Int32Array(i,0,2),scale:new Float32Array(i,8,1),transform:new Float32Array(i,16,12),invTransform:new Float32Array(i,64,12)};let n=new fe().makeRotationAxis(new S(0,1,0),this.rotX);n.multiply(new fe().makeRotationAxis(new S(1,0,0),this.rotY));let r=n.clone().invert();s.size.set([this.size.x,this.size.y]),s.scale.set([this.scale]),s.transform.set(n.elements.slice(0,12)),s.invTransform.set(r.elements.slice(0,12)),e.queue.writeBuffer(t,0,i)}getTexture(e){if(this.size.x===0){const i=e.createTexture({size:[1,1],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:i},new Float32Array([1,1,1,1]),{bytesPerRow:1*16},{width:1,height:1}),{texture:i}}const t=e.createTexture({size:[this.size.x,this.size.y],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:t},this.data,{bytesPerRow:this.size.x*16},{width:this.size.x,height:this.size.y}),{texture:t}}static shaderStruct(){return`
      struct EnvmapInfo {
        size: vec2i,
        scale: f32,
        transform: mat3x3f,
        invTransform: mat3x3f,
      }
    `}static shaderMethods(){return`
      fn envEqualAreaSquareToSphere(p: vec2f) -> vec3f {
        let u = 2 * p.x - 1;
        let v = 2 * p.y - 1;
        let up = abs(u);
        let vp = abs(v);
        let signedDistance = 1 - (up + vp);
        let d = abs(signedDistance);
        let r = 1 - d;

        // let phi = ((r == 0 ? 1 : (vp - up) / r + 1) * PI) / 4;
        var phi: f32 = 0;
        if (r == 0) {
          phi = 1;
        } else {
          phi = (vp - up) / r + 1.0;
        }
        phi = (phi * PI) / 4;
        
        let z = copysign(1 - r * r, signedDistance);
        let cosPhi = copysign(cos(phi), u);
        let sinPhi = copysign(sin(phi), v);

        let pbrtDir = vec3f(cosPhi * r * sqrt(2 - r * r), sinPhi * r * sqrt(2 - r * r), z);
        let myDir = pbrtDir.xzy; 
    
        return myDir;
      }

      // dir needs to be normalized 
      fn envEqualAreaSphereToSquare(dir: vec3f) -> vec2f {
        // swapping z with y since pbrt uses z as y
        // we're doing the same thing at the end of the
        // envEqualAreaSquareToSphere function 
        let d = vec3f(dir.x, dir.z, dir.y);
        
        let x = abs(d.x);
        let y = abs(d.y);
        let z = abs(d.z);

        // Compute the radius r
        let r = SafeSqrt(1.0 - z);  // r = sqrt(1-|z|)

        // Compute the argument to atan (detect a=0 to avoid div-by-zero)
        let a = max(x, y);
        var b = min(x, y);
        if (a == 0) {
          b = 0;
        } else {
          b = b / a;
        }

        // Polynomial approximation of atan(x)*2/pi, x=b
        // Coefficients for 6th degree minimax approximation of atan(x)*2/pi,
        // x=[0,1].
        // const t1 = 0.406758566246788489601959989e-5;
        // const t2 = 0.636226545274016134946890922156;
        // const t3 = 0.61572017898280213493197203466e-2;
        // const t4 = -0.247333733281268944196501420480;
        // const t5 = 0.881770664775316294736387951347e-1;
        // const t6 = 0.419038818029165735901852432784e-1;
        // const t7 = -0.251390972343483509333252996350e-1;
        // let phi = EvaluatePolynomial(b, t1, t2, t3, t4, t5, t6, t7);
        var phi = atan(b) * 2 / PI;

        // Extend phi if the input is in the range 45-90 degrees (u<v)
        if (x < y) {
          phi = 1 - phi;
        }

        // Find (u,v) based on (r,phi)
        var v = phi * r;
        var u = r - v;

        if (d.z < 0) {
          // southern hemisphere -> mirror u,v
          var temp = v;
          v = u;
          u = temp;
          
          u = 1 - u;
          v = 1 - v;
        }

        // Move (u,v) to the correct quadrant based on the signs of (x,y)
        u = copysign(u, d.x);
        v = copysign(v, d.y);

        // Transform (u,v) from [-1,1] to [0,1]
        return vec2f(0.5 * (u + 1), 0.5 * (v + 1));
      }

      // there's another version of this function that takes 
      // uvs in the range [0...1]
      // https://github.com/mmp/pbrt-v4/blob/39e01e61f8de07b99859df04b271a02a53d9aeb2/src/pbrt/util/math.cpp#L363
      fn wrapEqualAreaSquare_discreteInputs(pp: vec2i, resolution: vec2i) -> vec2i {
        var p = pp;

        if (p.x < 0) {
          p.x = -p.x;                     // mirror across u = 0
          p.y = resolution.y - 1 - p.y;   // mirror across v = 0.5
        } else if (p.x >= resolution.x) {
          p.x = 2 * resolution.x - 1 - p.x;  // mirror across u = 1
          p.y = resolution.y - 1 - p.y;      // mirror across v = 0.5
        }

        if (p.y < 0) {
          p.x = resolution.x - 1 - p.x;   // mirror across u = 0.5
          p.y = -p.y;                     // mirror across v = 0;
        } else if (p.y >= resolution.y) {
          p.x = resolution.x - 1 - p.x;      // mirror across u = 0.5
          p.y = 2 * resolution.y - 1 - p.y;  // mirror across v = 1
        }

        // Bleh: things don't go as expected for 1x1 images.
        if (resolution.x == 1) {
          p.x = 0;
        }
        if (resolution.y == 1) {
          p.y = 0;
        }

        return p;
      }

      fn bilerpEnvmapTexels(p: vec2f, resolution: vec2i) -> vec4f {
        let x = p.x * f32(resolution.x) - 0.5; 
        let y = p.y * f32(resolution.y) - 0.5;

        let xi = i32(floor(x)); 
        let yi = i32(floor(y));

        let dx = x - f32(xi);
        let dy = y - f32(yi);

        let v0_discrete_uv = wrapEqualAreaSquare_discreteInputs(vec2i(xi, yi), resolution);
        let v1_discrete_uv = wrapEqualAreaSquare_discreteInputs(vec2i(xi+1, yi), resolution);
        let v2_discrete_uv = wrapEqualAreaSquare_discreteInputs(vec2i(xi, yi+1), resolution);
        let v3_discrete_uv = wrapEqualAreaSquare_discreteInputs(vec2i(xi+1, yi+1), resolution);

        let v0 = textureLoad(envmapTexture, v0_discrete_uv, 0);
        let v1 = textureLoad(envmapTexture, v1_discrete_uv, 0);
        let v2 = textureLoad(envmapTexture, v2_discrete_uv, 0);
        let v3 = textureLoad(envmapTexture, v3_discrete_uv, 0);

        return ((1 - dx) * (1 - dy) * v0 + dx * (1 - dy) * v1 +
                (1 - dx) *      dy  * v2 + dx *      dy  * v3);
      }

      fn getEnvmapRadiance(dir: vec3f) -> vec3f {
        let tdir = envmapInfo.transform * dir; 
        let uv = envEqualAreaSphereToSquare(tdir);

        let radiance = bilerpEnvmapTexels(uv, envmapInfo.size);

        // let radiance = textureLoad(
        //   envmapTexture, 
        //   vec2u(u32(uv.x * f32(envmapInfo.size.x)), u32(uv.y * f32(envmapInfo.size.y))), 
        //   0
        // );

        return radiance.xyz * envmapInfo.scale;
      }
    `}};const Ht={DIFFUSE:0,EMISSIVE:1,TORRANCE_SPARROW:2,DIELECTRIC:3};class Fs{constructor({flipTextureY:e}){M(this,"offsetCount");M(this,"textures",{});M(this,"texturesLocation",{});M(this,"flipTextureY",!1);M(this,"type");this.type=-1,this.offsetCount=0,this.flipTextureY=e}getFloatsArray(){return[this.type]}static shaderStruct(){return""}static shaderCreateStruct(){return""}static shaderShade(){return`
      fn shade(
        ires: BVHIntersectionResult, 
        ray: ptr<function, Ray>,
        reflectance: ptr<function, vec3f>, 
        rad: ptr<function, vec3f>,
        tid: vec3u,
        i: i32) 
      {
        let materialOffset = ires.triangle.materialOffset;
        let materialType = materialsData[materialOffset];

        if (materialType == ${Ht.DIFFUSE}) {
          shadeDiffuse(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Ht.EMISSIVE}) {
          shadeEmissive(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Ht.TORRANCE_SPARROW}) {
          shadeTorranceSparrow(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Ht.DIELECTRIC}) {
          shadeDielectric(ires, ray, reflectance, rad, tid, i);
        }
      }
    `}}class Es extends Fs{constructor({color:t,intensity:i=1,flipTextureY:s=!1}){super({flipTextureY:s});M(this,"color");M(this,"intensity");this.type=Ht.EMISSIVE,this.color=t,this.intensity=i,this.offsetCount=5}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.intensity]}static shaderStruct(){return`
      struct Emissive {
        color: vec3f,
        intensity: f32,
      }
    `}static shaderCreateStruct(){return`
      fn createEmissive(offset: u32) -> Emissive {
        var emissive: Emissive;
        emissive.color = vec3f(
          materialsData[offset + 1],
          materialsData[offset + 2],
          materialsData[offset + 3],
        );
        emissive.intensity = materialsData[offset + 4];

        return emissive;
      } 
    `}static shaderShadeEmissive(){return`
      fn shadeEmissive(
        ires: BVHIntersectionResult, 
        ray: ptr<function, Ray>,
        reflectance: ptr<function, vec3f>, 
        rad: ptr<function, vec3f>,
        tid: vec3u,
        i: i32
      ) {
        /*
          **************************
          ***** important note *****
          **************************

          If you ever decide to apply MIS / NEE on emissive surfaces,
          remember to invalidate light source samples that selected the same light source 
          that is being shaded
        */

        let hitPoint = ires.hitPoint;
        let material: Emissive = createEmissive(ires.triangle.materialOffset);

        let albedo = vec3f(1,1,1);
        let emissive = material.color * material.intensity;

        var N = ires.triangle.geometricNormal;
        if (dot(N, (*ray).direction) > 0) {
          N = -N;
        } else {
          *rad += emissive * *reflectance;
        }
    
        (*ray).origin = ires.hitPoint - (*ray).direction * 0.001;
    
        let rands = rand4(
          tid.y * canvasSize.x + tid.x +
          u32(cameraSamples.a.x * 928373289 + cameraSamples.a.y * 877973289) +
          u32(i * 17325799),
        );
    
        let r0 = 2.0 * PI * rands.x;
        let r1 = acos(rands.y);
        let nd = normalize(vec3f(
          sin(r0) * sin(r1),
          cos(r1),
          cos(r0) * sin(r1),
        ));

    
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires.triangle, N, &tangent, &bitangent);
      
        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // from tangent space to world space
        (*ray).direction = normalize(TBN * nd.xzy);

        *reflectance *= albedo * max(dot(N, (*ray).direction), 0.0) * (1 / PI) * (2 * PI);
      } 
    `}}class Mn{constructor(e,t,i,s,n,r,o,a,h,c){M(this,"idxRef",-1);M(this,"norm0");M(this,"norm1");M(this,"norm2");M(this,"geometricNormal");M(this,"uv0",new Z(-1,-1));M(this,"uv1",new Z(-1,-1));M(this,"uv2",new Z(-1,-1));this.v0=e,this.v1=t,this.v2=i,this.materialIndex=s;let u=t.clone().sub(e),f=i.clone().sub(e);this.geometricNormal=u.cross(f).normalize(),n&&r&&o?(this.norm0=n,this.norm1=r,this.norm2=o):(this.norm0=this.geometricNormal,this.norm1=this.geometricNormal,this.norm2=this.geometricNormal),a&&(this.uv0=a),h&&(this.uv1=h),c&&(this.uv2=c)}setIdxRef(e){this.idxRef=e}getAABB(){let e=new mt;return e.expand(this.v0),e.expand(this.v1),e.expand(this.v2),e}getArea(){let e=this.v1.clone().sub(this.v0),t=this.v2.clone().sub(this.v0);return e.cross(t).length()*.5}getCentroid(){return this.v0.clone().add(this.v1).add(this.v2).divideScalar(3)}getLuminance(e){if(!(e instanceof Es))throw new Error("can't get luminance of non-emissive material");return ol(new S(e.color.r,e.color.g,e.color.b))*e.intensity*this.getArea()}intersectRay(e,t){let i=this.v0,s=this.v1,n=this.v2,r=s.clone().sub(i),o=n.clone().sub(i),a=t.clone().cross(o),h=r.dot(a);if(Math.abs(h)<1e-6)return{hit:!1,t:0,hitPoint:new S(0,0,0)};let c=1/h,u=e.clone().sub(i),f=u.dot(a)*c;if(f<0||f>1)return{hit:!1,t:0,hitPoint:new S(0,0,0)};let d=u.clone().cross(r),p=t.dot(d)*c;if(p<0||f+p>1)return{hit:!1,t:0,hitPoint:new S(0,0,0)};let g=o.dot(d)*c;if(g<0)return{hit:!1,t:0,hitPoint:new S(0,0,0)};let y=e.clone().add(t.clone().multiplyScalar(g));return{hit:!0,t:g,hitPoint:y}}static getBufferData(e,t){const s=e.length,n=new ArrayBuffer(144*s);return e.forEach((r,o)=>{const a=o*144,h={v0:new Float32Array(n,a+0,3),v1:new Float32Array(n,a+16,3),v2:new Float32Array(n,a+32,3),uv0:new Float32Array(n,a+48,2),uv1:new Float32Array(n,a+56,2),uv2:new Float32Array(n,a+64,2),area:new Float32Array(n,a+72,1),norm0:new Float32Array(n,a+80,3),norm1:new Float32Array(n,a+96,3),norm2:new Float32Array(n,a+112,3),geometricNormal:new Float32Array(n,a+128,3),materialOffset:new Uint32Array(n,a+140,1)};h.v0.set([r.v0.x,r.v0.y,r.v0.z]),h.v1.set([r.v1.x,r.v1.y,r.v1.z]),h.v2.set([r.v2.x,r.v2.y,r.v2.z]),h.uv0.set([r.uv0.x,r.uv0.y]),h.uv1.set([r.uv1.x,r.uv1.y]),h.uv2.set([r.uv2.x,r.uv2.y]),h.area.set([r.getArea()]),h.norm0.set([r.norm0.x,r.norm0.y,r.norm0.z]),h.norm1.set([r.norm1.x,r.norm1.y,r.norm1.z]),h.norm2.set([r.norm2.x,r.norm2.y,r.norm2.z]),h.geometricNormal.set([r.geometricNormal.x,r.geometricNormal.y,r.geometricNormal.z]),h.materialOffset.set([t[r.materialIndex]])}),{trianglesBufferData:n,trianglesBufferDataByteSize:s*144}}static shaderStruct(){return`
      struct IntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        uv: vec2f,
        normal: vec3f
      }

      // this layout saves some bytes because of padding
      // https://webgpufundamentals.org/webgpu/lessons/resources/wgsl-offset-computer.html#x=5d000001005701000000000000003d888b0237284d3025f2381bcb288abe3eafc62d6ca0d8042fc1971a88f51b3ff18869efcbe1877af43e5e4fd034ee05413b60296cdbdb3f53c78732caefece359691688a4e1b5274b5eed2696616a5993f7f3cbfb658410256f1f8a8688c290394a0e04baa72430c844d7c42eb7972f194a3ff475706727d9dd7cd6d29ccf80e1d4cef6b4719471ff7b8e5b5a3bf063d4d410af49db02464f4b6279c4d5112a9668ee9f175584fe719e3c5e79a4b3f53369df6c0ea12038c4d6a435d3224ce7bd7be81501de7e9834f18ece64a6432e13fe554bc6
      struct Triangle {
        v0: vec3f,
        v1: vec3f,
        v2: vec3f,
        uv0: vec2f,
        uv1: vec2f,
        uv2: vec2f,
        area: f32,
        norm0: vec3f,
        norm1: vec3f,
        norm2: vec3f,
        geometricNormal: vec3f,
        materialOffset: u32,
      }
    `}static shaderIntersectionFn(){return`
      fn sampleTrianglePoint(triangle: Triangle, s: f32, t: f32) -> vec3f {
        let v0v1 = (triangle.v1 - triangle.v0);
        let v0v2 = (triangle.v2 - triangle.v0);
        let in_triangle = s + t <= 1;

        if (in_triangle) {
          return v0v1 * s + v0v2 * t + triangle.v0;
        }

        return v0v1 * (1.0 - s) + v0v2 * (1.0 - t) + triangle.v0;
      }

      // https://github.com/johnnovak/raytriangle-test
      // Simple, direct implementation of the Möller–Trumbore intersection algorithm.
      fn intersectTriangle(triangle: Triangle, ray: Ray) -> IntersectionResult {
        let v0 = triangle.v0;
        let v1 = triangle.v1;
        let v2 = triangle.v2;
      
        let v0v1 = v1 - v0;
        let v0v2 = v2 - v0;
        let pvec = cross(ray.direction, v0v2);

        let det = dot(v0v1, pvec);
      
        const CULLING = false;
      
        if (CULLING) {
          if (det < 0.000001) {
            return IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0));
          }
        } else {
          if (abs(det) < 0.000001) {
            return IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0));
          }
        }
      
        let invDet = 1.0 / det;
        let tvec = ray.origin - v0;
        let u = dot(tvec, pvec) * invDet;
      
        if (u < 0 || u > 1) {
          return IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0));
        }
      
        let qvec = cross(tvec, v0v1);
        let v = dot(ray.direction, qvec) * invDet;
      
        if (v < 0 || u + v > 1) {
          return IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0));
        }
      
        let t = dot(v0v2, qvec) * invDet;

        if (t < 0) {
          return IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0));
        }

        let hitPoint = ray.origin + t * ray.direction;
        
        let w = 1.0 - u - v;
        let uv0 = triangle.uv0;
        let uv1 = triangle.uv1;
        let uv2 = triangle.uv2;
        let hitUV = uv0 * w + uv1 * u + uv2 * v;
        
        let norm0 = triangle.norm0;
        let norm1 = triangle.norm1;
        let norm2 = triangle.norm2;
        let hitNormal = normalize(norm0 * w + norm1 * u + norm2 * v);

        return IntersectionResult(true, t, hitPoint, hitUV, hitNormal);
      }
    `}}const ll=Yt({nodesCount:0}),ws=Yt("compute"),vr=Yt(""),_s=Yt(""),Ne=function(){let e=Yt({limit:8,count:0,ms:0,tileSize:"",clickTarget:"(0, 0)"});return{subscribe:e.subscribe,set:e.set,update:e.update,get count(){return tt(e).count},get limit(){return tt(e).limit},setTileSize(t){e.update(i=>(i.tileSize=t,i))},setPerformance:t=>{e.update(i=>(i.ms=t,i))},setLimit:t=>{e.update(i=>(i.limit=t,i))},increment:()=>e.update(t=>(t.count++,t)),reset:()=>e.update(t=>(t.count=0,t))}}(),we=Yt({exposure:1,aperture:0,focusDistance:1,fov:Math.PI*.25,tiltShift:new Z(0,0),catsEyeBokehEnabled:!1,catsEyeBokehMult:0,catsEyeBokehPow:0}),hi=Yt({movementSpeed:1,rotationSpeed:1,position:new S(0,0,0),target:new S(0,0,0)}),je=Au({forceMaxTileSize:!1,BOUNCES_COUNT:10,MIS_TYPE:2,USE_POWER_HEURISTIC:1,ENVMAP_SCALE:1,ENVMAP_ROTX:0,ENVMAP_ROTY:0,ENVMAP_USE_COMPENSATED_DISTRIBUTION:!1,shaderConfig:{HAS_ENVMAP:!1}});function Au(l){const{subscribe:e,set:t,update:i}=Yt(l);let s=[l,l];return{subscribe:e,set:n=>{s[0]=s[1],s[1]=JSON.parse(JSON.stringify(n)),t(n)},update:n=>{i(r=>(s[0]=s[1],s[1]=JSON.parse(JSON.stringify(r)),n(r)))},getOldValue:()=>s[0]}}const mn=2;class xr{constructor(e){M(this,"root");M(this,"bvhFlatArray");this.scene=e;let t=e.triangles;if(t.length>2147483648)throw new Error("Exceeded max primitives count, the webGPU primitives array holds i32 indexes");t.forEach((s,n)=>{s.setIdxRef(n)}),this.bvhFlatArray=[],this.root=new rr(t,0);let i=[];for(this.root.isLeaf()||i.push(this.root),this.bvhFlatArray.push(this.root);i.length>0;){let s=i.pop();if(!s)break;let n=s.getSplittingAxis(),r=[],o=[];for(let c=0;c<s.primitives.length;c++){let u=s.primitives[c];u.getCentroid()[n.axis]<n.center?r.push(u):o.push(u)}if(r.length===0||o.length===0){r=[],o=[];let c=Math.floor(s.primitives.length/2);for(let u=0;u<s.primitives.length;u++)u<c?r.push(s.primitives[u]):o.push(s.primitives[u])}let a=new rr(r,this.bvhFlatArray.length);this.bvhFlatArray.push(a);let h=new rr(o,this.bvhFlatArray.length);this.bvhFlatArray.push(h),s.setLeft(a),s.setRight(h),a.isLeaf()||i.push(a),h.isLeaf()||i.push(h),s.isLeaf()||s.releasePrimitivesArrayMemory()}if(ll.set({nodesCount:this.bvhFlatArray.length}),this.bvhFlatArray.length>2147483648)throw new Error(`
        Exceeded max bvh nodes count, the webGPU left/right props holds i32 indexes,
        also, maximum stack-intersection-depth is set to 32 when intersecting the bvh
      `)}intersectRay(e,t){let i=this.root;if(!i.nodeAABB.intersectRay(e,t).hit)return{hit:!1,t:0,hitPoint:new S(0,0,0),triangle:null};var n={hit:!1,t:1/0,hitPoint:new S(0,0,0)},r,o=Array(128);o[0]=i;for(var a=0;a!==-1;){let p=o[a];if(a-=1,p.leaf){let g=p.primitives;for(var h=0;h<g.length;h++){let y=g[h],m=y.intersectRay(e,t);m.hit&&m.t<n.t&&(n=m,r=y)}}if(!p.leaf){let g=p.left.nodeAABB.intersectRay(e,t),y=p.right.nodeAABB.intersectRay(e,t);var c,u,f,d;g.t<y.t?(c=p.left,u=p.right,f=g,d=y):(c=p.right,u=p.left,f=y,d=g),d.hit&&d.t<n.t&&(a+=1,o[a]=u),f.hit&&f.t<n.t&&(a+=1,o[a]=c)}}return{hit:n.hit,t:n.t,hitPoint:n.hitPoint,triangle:r||null}}getBufferData(){const t=64*this.bvhFlatArray.length,i=new ArrayBuffer(t);let s=this.scene.triangles,n=this.scene.materials;this.bvhFlatArray.forEach((o,a)=>{const h=o.nodeAABB.max,c=o.nodeAABB.min,u=o.isLeaf();let f=-1,d=-1,p=Array(mn).fill(-1);!u&&o.left&&o.right&&(f=o.left.flatArrayIndex,d=o.right.flatArrayIndex),u&&o.primitives.forEach((m,_)=>{p[_]=m.idxRef});const g=a*64,y={aabb:{min:new Float32Array(i,0+g,3),max:new Float32Array(i,16+g,3)},left:new Int32Array(i,32+g,1),right:new Int32Array(i,36+g,1),leaf:new Uint32Array(i,40+g,1),primitives:new Int32Array(i,44+g,2)};y.aabb.min.set([c.x,c.y,c.z]),y.aabb.max.set([h.x,h.y,h.z]),y.left.set([f]),y.right.set([d]),y.leaf.set([u?1:0]),y.primitives.set(p)});const r=[];for(let o=0;o<n.length;o++)if(o===0)r.push(0);else{let a=r[o-1],h=n[o-1];r.push(a+h.offsetCount)}return{...Mn.getBufferData(s,r),BVHBufferData:i,BVHBufferDataByteSize:t}}getLightsCDFBufferData(){let e=0,t=[],i=this.scene.triangles,s=this.scene.materials;if(i.forEach(o=>{let a=s[o.materialIndex];a instanceof Es&&(t.push([e,o.getLuminance(a),o.idxRef]),e+=o.getLuminance(a))}),this.scene.envmap){let o=this.root.nodeAABB.max.clone().sub(this.root.nodeAABB.min).length(),a=4*Math.PI*o*o*this.scene.envmap.scale*this.scene.envmap.luminanceAverage;t.push([e,a,-2]),e+=a}t.forEach(o=>{o[0]/=e,o[1]/=e});const n=12*t.length,r=new ArrayBuffer(n);return t.forEach((o,a)=>{let h=12*a;new Float32Array(r,h+0,1).set([o[0]]),new Float32Array(r,h+4,1).set([o[1]]),new Uint32Array(r,h+8,1).set([o[2]])}),{LightsCDFBufferData:r,LightsCDFBufferDataByteSize:n}}static shaderStruct(){return`
      // https://webgpufundamentals.org/webgpu/lessons/resources/wgsl-offset-computer.html
      struct BVHNode {
        aabb: AABB,
        left: i32, // can be -1
        right: i32, 
        leaf: u32, // bool is apparently non-host something
        // i32 is necessary since we're using -1 for null
        primitives: array<i32, ${mn}>, 
      }

      struct BVHIntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        uv: vec2f,
        normal: vec3f,
        triangle: Triangle,
        triangleIndex: i32,
      }

      struct LightCDFEntry {
        cdf: f32,
        pdf: f32,
        // -2 indicates an envmap (we'll reserve -1 for null or something similiar)
        triangleIndex: i32,
      }

      struct LightSample {
        isEnvmap: bool,
        backSideHit: bool,
        pdf: f32,
        direction: vec3f,
        radiance: vec3f,
      }
    `}static shaderIntersect(){return`
      fn getLightSample(
        rayOrigin: vec3f, rands: vec4f
      ) -> LightSample {
        let cdfEntry = getLightCDFEntry(rands.z);

        if (cdfEntry.triangleIndex > -1) {
          let triangle = triangles[cdfEntry.triangleIndex];
          let samplePoint = sampleTrianglePoint(triangle, rands.x, rands.y);

          let samplePointT = length(samplePoint - rayOrigin);
          let lD = normalize(samplePoint - rayOrigin);
          let sampleDirection = lD;
  
          let r2 = squaredLength(samplePoint - rayOrigin);
          var lN = triangle.geometricNormal;
          var lNolD = dot(lN, -lD);
          var backSideHit = false;
          if (lNolD < 0) {
            lN = -lN;
            lNolD = -lNolD;
            backSideHit = true;
          }
          if (lNolD == 0) {
            // in this case the ray is perpendicular to the normal,
            // we'll consider it a backSideHit such that the misWeight will be
            // set to 0
            backSideHit = true;
          }
          var lightSamplePdf = r2 / (lNolD * triangle.area);
          lightSamplePdf *= cdfEntry.pdf;

          let ires = bvhIntersect(Ray(rayOrigin + sampleDirection * 0.001, sampleDirection));
          if (!ires.hit || cdfEntry.triangleIndex != ires.triangleIndex || backSideHit) {
            return LightSample(false, false, 0, vec3f(0), vec3f(0));
          }
          let material: Emissive = createEmissive(ires.triangle.materialOffset);
          let emissive = material.color * material.intensity;
          let radiance = emissive;

          return LightSample(false, backSideHit, lightSamplePdf, sampleDirection, radiance);
        }

        if (cdfEntry.triangleIndex == -2) {
          // envmap sampling
          let sample = samplePC2D(
            &envmapPC2D.data, 
            envmapPC2D.size, 
            envmapPC2D.domain, 
            rands.xy,
          );

          let uv = sample.floatOffset;
          let pc2d_pdf = sample.pdf;
          var sampleDirection = envEqualAreaSquareToSphere(uv);
          sampleDirection = envmapInfo.invTransform * sampleDirection;
          // change of variable, from square image to sphere pdf
          var lightSamplePdf = pc2d_pdf / (4 * PI);
          lightSamplePdf *= cdfEntry.pdf;

          let ires = bvhIntersect(Ray(rayOrigin + sampleDirection * 0.001, sampleDirection));
          if (ires.hit) {
            return LightSample(false, false, 0, vec3f(0), vec3f(0));
          }
          let radiance = getEnvmapRadiance(sampleDirection);

          return LightSample(true, false, lightSamplePdf, sampleDirection, radiance);
        }

        return LightSample(false, false, 0, vec3f(0), vec3f(0));
      }

      fn getLightPDF(ray: Ray) -> f32 {
        let ires = bvhIntersect(Ray(ray.origin + ray.direction * 0.001, ray.direction));

        if (ires.hit) {
          // if we don't hit a primitive, bvhIntersect will set ires.triangle to the first triangle
          // of the scene. Keep in mind that ires.hit will be false
          let materialType = materialsData[ires.triangle.materialOffset];
          var lightSamplePdf = 0.0;
          if (materialType == ${Ht.EMISSIVE}) {
            let lD = ray.direction;
            let r2 = squaredLength(ires.hitPoint - ray.origin);
            var lN = ires.triangle.geometricNormal;
            var lNolD = dot(lN, -lD);
            if (lNolD < 0) {
              lN = -lN;
              lNolD = -lNolD;
            }
            lightSamplePdf = r2 / (lNolD * ires.triangle.area);
            return lightSamplePdf;
          } 
        } else if (shaderConfig.HAS_ENVMAP) {
          // envmap pdf retrieval
          let dir = envmapInfo.transform * ray.direction;
          let uv = envEqualAreaSphereToSquare(dir);
          var pdf = getPC2Dpdf( 
            &envmapPC2D.data, 
            envmapPC2D.size, 
            uv, 
            envmapPC2D.domain,
          );

          return pdf / (4 * PI);
        }
        
        return 0;
      }

      fn getLightCDFEntry(r: f32) -> LightCDFEntry {
        var si: i32 = 0;
        var ei: i32 = i32(arrayLength(&lightsCDFData));
        
        var mid: i32 = -2;
        var fidx: i32 = -1;
        
        while (fidx != mid) {
          mid = (si + ei) / 2;
          fidx = mid;

          let cdf = lightsCDFData[mid].cdf;

          if (r > cdf) {
            si = mid;
            mid = (si + ei) / 2;
          }
          if (r < cdf) {
            ei = mid;
            mid = (si + ei) / 2;
          }
        }

        return lightsCDFData[fidx];
      }

      fn bvhIntersect(ray: Ray) -> BVHIntersectionResult {
        let rootNode = bvhData[0];

        if (!aabbIntersect(ray.origin, ray.direction, rootNode.aabb).hit) {
          return BVHIntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0), triangles[0], 0);
        }

        // from: https://github.com/gpuweb/gpuweb/issues/3431#issuecomment-1453667278
        let highestFloat = 0x1.fffffep+127f;
        var closestIntersection = IntersectionResult(false, highestFloat, vec3f(0), vec2f(0), vec3f(0));
        var closestPrimitiveIndex = -1;

        var stack = array<i32, 64>();
        // set the first element to the root index of the bvhData array
        stack[0] = 0;
        var stackPointer = 0;

        while (stackPointer > -1) {
          let nodeIndex = stack[stackPointer];
          stackPointer -= 1;

          let node = bvhData[nodeIndex];

          if (node.leaf == 1) {
            // try to hit all its primitives
            let primitivesIndexes = node.primitives;
            for (var i = 0; i < ${mn}; i++) {
              let primitiveIndex = primitivesIndexes[i];
              let isValidIndex = primitiveIndex > -1;
              if (!isValidIndex) { continue; };

              let primitive = triangles[primitiveIndex];
              let ires = intersectTriangle(primitive, ray);
              if (ires.hit && ires.t < closestIntersection.t) {
                closestIntersection = ires;
                closestPrimitiveIndex = primitiveIndex;
              }
            }
          }

          if (node.leaf == 0) {
            let leftIres = aabbIntersect(ray.origin, ray.direction, bvhData[node.left].aabb);
            let rightIres = aabbIntersect(ray.origin, ray.direction, bvhData[node.right].aabb);

            var closestNodeIndex: i32;
            var otherNodeIndex: i32;
            var closestNodeIntersection: AABBIntersectionResult;
            var otherNodeIntersection: AABBIntersectionResult;

            if (leftIres.t < rightIres.t) {
              closestNodeIndex = node.left;
              otherNodeIndex = node.right;
              closestNodeIntersection = leftIres;
              otherNodeIntersection = rightIres;
            } else {
              closestNodeIndex = node.right;
              otherNodeIndex = node.left;
              closestNodeIntersection = rightIres;
              otherNodeIntersection = leftIres;
            }

            // we want to evaluate other node *after* evaluating the closest node, thus 
            // we're placing it sooner inside the stack            
            if (otherNodeIntersection.hit && otherNodeIntersection.t < closestIntersection.t) {
              stackPointer += 1;
              stack[stackPointer] = otherNodeIndex;
            }

            if (
              closestNodeIntersection.hit &&
              closestNodeIntersection.t < closestIntersection.t
            ) {
              stackPointer += 1;
              stack[stackPointer] = closestNodeIndex;
            }
          }
        }

        return BVHIntersectionResult(
          closestIntersection.hit, 
          closestIntersection.t, 
          closestIntersection.hitPoint, 
          closestIntersection.uv,
          closestIntersection.normal,
          triangles[closestPrimitiveIndex],
          closestPrimitiveIndex
        );
      } 
    `}}class rr{constructor(e,t){M(this,"nodeAABB");M(this,"leaf",!1);M(this,"left",null);M(this,"right",null);this.primitives=e,this.flatArrayIndex=t,this.nodeAABB=new mt;for(let i=0;i<e.length;i++)this.nodeAABB.expand(e[i].getAABB());e.length<=mn&&(this.leaf=!0)}setLeft(e){this.left=e}setRight(e){this.right=e}isLeaf(){return this.leaf}releasePrimitivesArrayMemory(){this.primitives=[]}getSplittingAxis(){let e=1/0,t=1/0,i=1/0,s=-1/0,n=-1/0,r=-1/0;for(let c=0;c<this.primitives.length;c++){let f=this.primitives[c].getCentroid();f.x<e&&(e=f.x),f.y<t&&(t=f.y),f.z<i&&(i=f.z),f.x>s&&(s=f.x),f.y>n&&(n=f.y),f.z>r&&(r=f.z)}let o=s-e,a=n-t,h=r-i;return o>a&&o>h?{axis:"x",center:(s+e)*.5}:a>o&&a>h?{axis:"y",center:(n+t)*.5}:{axis:"z",center:(r+i)*.5}}}class br{constructor(){M(this,"listenersMap");this.listenersMap={}}fireEvent(e,t){const i=this.listenersMap[e];i&&i.forEach(s=>{s(t)})}addEventListener(e,t){this.listenersMap[e]||(this.listenersMap[e]=[]),this.listenersMap[e].push(t)}removeEventListener(e,t){if(!this.listenersMap[e])return;const i=this.listenersMap[e],s=i.indexOf(t);s>-1&&i.splice(s,1)}}var gn=(l=>(l[l.BRDF_ONLY=0]="BRDF_ONLY",l[l.ONE_SAMPLE_MODEL=1]="ONE_SAMPLE_MODEL",l[l.NEXT_EVENT_ESTIMATION=2]="NEXT_EVENT_ESTIMATION",l))(gn||{});class Eu{constructor(){M(this,"options");M(this,"prevOptions");M(this,"e");M(this,"bufferSize",12);this.options=tt(je),this.prevOptions=this.options,this.e=new br,je.subscribe(e=>{this.options=e,this.prevOptions=je.getOldValue(),this.e.fireEvent("config-update",this.options)})}setStoreProperty(e){je.set({...this.options,...e})}getOptionsBuffer(){return new Uint32Array([this.options.MIS_TYPE,this.options.USE_POWER_HEURISTIC,this.options.BOUNCES_COUNT])}shaderPart(){return`

    const BRDF_ONLY: u32 = 0;
    const ONE_SAMPLE_MODEL: u32 = 1;
    const NEXT_EVENT_ESTIMATION: u32 = 2;
    
    struct Config {
      MIS_TYPE: u32,
      USE_POWER_HEURISTIC: u32,
      BOUNCES_COUNT: i32,
    }

    struct ShaderConfig {
      HAS_ENVMAP: bool,
    }
    // this object, or the shaderConfig object inside the singleton instance of ConfigManager,
    // can be used to customize / change all the shader-parts returned by the rest of the 
    // classes of C2
    const shaderConfig = ShaderConfig(
      ${this.options.shaderConfig.HAS_ENVMAP},
    );
    `}}const Le=new Eu;function Ye(l){let e=new ArrayBuffer(4),t=new Int32Array(e,0,1);return t[0]=l,new Float32Array(e,0,1)[0]}class yn extends Fs{constructor({color:t,map:i,bumpMap:s,bumpStrength:n=1,uvRepeat:r=new Z(1,1),mapUvRepeat:o=new Z(1,1),flipTextureY:a=!1}){super({flipTextureY:a});M(this,"color");M(this,"bumpStrength");M(this,"uvRepeat");M(this,"mapUvRepeat");this.type=Ht.DIFFUSE,this.color=t,this.bumpStrength=n,this.uvRepeat=r,this.mapUvRepeat=o,this.offsetCount=13,this.texturesLocation.map=new Z(-1,-1),this.texturesLocation.bumpMap=new Z(-1,-1),i&&(this.textures.map=i),s&&(this.textures.bumpMap=s)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Ye(this.texturesLocation.map.x),Ye(this.texturesLocation.map.y),Ye(this.texturesLocation.bumpMap.x),Ye(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
      struct Diffuse {
        color: vec3f,
        bumpStrength: f32,
        uvRepeat: vec2f,
        mapUvRepeat: vec2f,
        mapLocation: vec2i,
        bumpMapLocation: vec2i,
      }
    `}static shaderCreateStruct(){return`
      fn createDiffuse(offset: u32) -> Diffuse {
        var diffuse: Diffuse;
        diffuse.color = vec3f(
          materialsData[offset + 1],
          materialsData[offset + 2],
          materialsData[offset + 3],
        );
        diffuse.bumpStrength = materialsData[offset + 4];
        diffuse.uvRepeat.x = materialsData[offset + 5];
        diffuse.uvRepeat.y = materialsData[offset + 6];
        diffuse.mapUvRepeat.x = materialsData[offset + 7];
        diffuse.mapUvRepeat.y = materialsData[offset + 8];
        diffuse.mapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 9]),
          bitcast<i32>(materialsData[offset + 10]),
        );
        diffuse.bumpMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 11]),
          bitcast<i32>(materialsData[offset + 12]),
        );
        return diffuse;
      } 
    `}static shaderShadeDiffuse(){return`
      fn shadeDiffuseSampleBRDF(
        rands: vec4f, 
        N: vec3f, 
        ray: ptr<function, Ray>, 
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
        triangle: Triangle
      ) {
        // why am I using uniform sampling? cosine weighted is better.
        // if you switch to another brdf pdf, remember to also update the light sample brdf's pdf
        // if you switch to another brdf pdf, remember to also update the light sample brdf's pdf
        // if you switch to another brdf pdf, remember to also update the light sample brdf's pdf
        let rand_1 = rands.x;
        let rand_2 = rands.y;
        let phi = 2.0 * PI * rand_1;
        let root = sqrt(1 - rand_2 * rand_2);
        // local space new ray direction
        let newDir = vec3f(cos(phi) * root, rand_2, sin(phi) * root);

        var brdfSamplePdf = 1 / (2 * PI);

        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(triangle, N, &tangent, &bitangent);
      
        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // from tangent space to world space
        (*ray).direction = normalize(TBN * newDir.xzy);


        *pdf = brdfSamplePdf;
        let lightSamplePdf = getLightPDF(*ray);
        *misWeight = getMisWeight(brdfSamplePdf, lightSamplePdf);
      }

      fn shadeDiffuseSampleLight(
        rands: vec4f, 
        N: vec3f,
        ray: ptr<function, Ray>, 
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
        lightSampleRadiance: ptr<function, vec3f>,
      ) {
        let lightSample = getLightSample(ray.origin, rands);
        *pdf = lightSample.pdf;
        let backSideHit = lightSample.backSideHit;

        (*ray).direction = lightSample.direction;

        var brdfSamplePdf = 1 / (2 * PI);
        // if the sampled ray sits below the hemisphere, brdfSamplePdf is zero,
        // since diffuse materials never sample a direction under the hemisphere.
        // However at this point, it doesn't even make sense to evaluate the 
        // rest of this function since we would be wasting a sample, thus we'll return
        // misWeight = 0 instead.
        if (
          dot((*ray).direction, N) < 0.0 ||
          lightSample.pdf == 0.0
        ) {
          brdfSamplePdf = 0;
          *misWeight = 0; *pdf = 1; 
          *lightSampleRadiance = vec3f(0.0);
          return;
        }

        *lightSampleRadiance = lightSample.radiance;
        *misWeight = getMisWeight(lightSample.pdf, brdfSamplePdf);
      }

      fn shadeDiffuse(
        ires: BVHIntersectionResult, 
        ray: ptr<function, Ray>,
        reflectance: ptr<function, vec3f>, 
        rad: ptr<function, vec3f>,
        tid: vec3u,
        i: i32
      ) {
        let hitPoint = ires.hitPoint;
        let material: Diffuse = createDiffuse(ires.triangle.materialOffset);

        var color = material.color;
        if (material.mapLocation.x > -1) {
          color *= getTexelFromTextureArrays(material.mapLocation, ires.uv, material.mapUvRepeat).xyz;
        }

        var vertexNormal = ires.normal;
        // the normal flip is calculated using the geometric normal to avoid
        // black edges on meshes displaying strong smooth-shading via vertex normals
        if (dot(ires.triangle.geometricNormal, (*ray).direction) > 0) {
          vertexNormal = -vertexNormal;
        }
        var N = vertexNormal;
        var bumpOffset: f32 = 0.0;
        if (material.bumpMapLocation.x > -1) {
          N = getShadingNormal(
            material.bumpMapLocation, material.bumpStrength, material.uvRepeat, N, *ray, 
            ires.hitPoint, ires.uv, ires.triangle, &bumpOffset
          );
        }

        // needs to be the exact origin, such that getLightSample/getLightPDF can apply a proper offset 
        (*ray).origin = ires.hitPoint;
        // in practice however, only for Dielectrics we need the exact origin, 
        // for Diffuse we can apply the bump offset if necessary
        if (bumpOffset > 0.0) {
          (*ray).origin += vertexNormal * bumpOffset;
        }
    
        // rands1.w is used for ONE_SAMPLE_MODEL
        // rands1.xy is used for brdf samples
        // rands2.xyz is used for light samples (getLightSample(...) uses .xyz)
        let rands1 = rand4(
          tid.y * canvasSize.x + tid.x +
          u32(cameraSamples.a.x * 928373289 + cameraSamples.a.y * 877973289) +
          u32(i * 17325799),
        );
        let rands2 = rand4(
          tid.y * canvasSize.x + tid.x + 148789 +
          u32(cameraSamples.a.z * 597834279 + cameraSamples.a.w * 34219873) +
          u32(i * 86210973),
        );

        var brdf = 1 / PI;

        if (config.MIS_TYPE == BRDF_ONLY) {
          var pdf: f32; var w: f32;
          shadeDiffuseSampleBRDF(rands1, N, ray, &pdf, &w, ires.triangle);
          (*ray).origin += (*ray).direction * 0.001;
          *reflectance *= brdf * (1 / pdf) * color * max(dot(N, (*ray).direction), 0.0);
        }

        if (config.MIS_TYPE == ONE_SAMPLE_MODEL) {
          var pdf: f32; var misWeight: f32; var ls: vec3f;
          let isBrdfSample = rands1.w < 0.5;
          if (isBrdfSample) {
            shadeDiffuseSampleBRDF(rands1, N, ray, &pdf, &misWeight, ires.triangle);
          } else {
            shadeDiffuseSampleLight(rands2, N, ray, &pdf, &misWeight, &ls);          
          }
          (*ray).origin += (*ray).direction * 0.001;
          *reflectance *= brdf * (misWeight / pdf) * color * max(dot(N, (*ray).direction), 0.0);
        }

        if (config.MIS_TYPE == NEXT_EVENT_ESTIMATION) {
          var brdfSamplePdf: f32; var brdfMisWeight: f32; 
          var lightSamplePdf: f32; var lightMisWeight: f32; var lightSampleRadiance: vec3f;
          var rayBrdf = Ray((*ray).origin, (*ray).direction);
          var rayLight = Ray((*ray).origin, (*ray).direction);

          shadeDiffuseSampleBRDF(rands1, N, &rayBrdf, &brdfSamplePdf, &brdfMisWeight, ires.triangle);
          shadeDiffuseSampleLight(rands2, N, &rayLight, &lightSamplePdf, &lightMisWeight, &lightSampleRadiance);

          (*ray).origin += rayBrdf.direction * 0.001;
          (*ray).direction = rayBrdf.direction;

          // light contribution
          *rad += color * brdf * lightSampleRadiance * (lightMisWeight / lightSamplePdf) * (*reflectance) * max(dot(N, rayLight.direction), 0.0);
          *reflectance *= color * brdf * (brdfMisWeight / brdfSamplePdf) * max(dot(N, rayBrdf.direction), 0.0);
        }
      }
    `}}class Cs extends Fs{constructor({color:t,ax:i,ay:s,map:n,roughnessMap:r,bumpMap:o,bumpStrength:a=1,uvRepeat:h=new Z(1,1),mapUvRepeat:c=new Z(1,1),flipTextureY:u=!1}){super({flipTextureY:u});M(this,"color");M(this,"ax");M(this,"ay");M(this,"bumpStrength");M(this,"uvRepeat");M(this,"mapUvRepeat");this.type=Ht.TORRANCE_SPARROW,this.color=t,this.ax=i,this.ay=s,this.bumpStrength=a,this.uvRepeat=h,this.mapUvRepeat=c,this.offsetCount=17,this.texturesLocation.map=new Z(-1,-1),this.texturesLocation.roughnessMap=new Z(-1,-1),this.texturesLocation.bumpMap=new Z(-1,-1),n&&(this.textures.map=n),r&&(this.textures.roughnessMap=r),o&&(this.textures.bumpMap=o)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.ax,this.ay,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Ye(this.texturesLocation.map.x),Ye(this.texturesLocation.map.y),Ye(this.texturesLocation.roughnessMap.x),Ye(this.texturesLocation.roughnessMap.y),Ye(this.texturesLocation.bumpMap.x),Ye(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
      struct TORRANCE_SPARROW {
        color: vec3f,
        ax: f32,
        ay: f32,
        bumpStrength: f32,
        uvRepeat: vec2f,
        mapUvRepeat: vec2f,
        mapLocation: vec2i,
        roughnessMapLocation: vec2i,
        bumpMapLocation: vec2i,
      }
    `}static shaderCreateStruct(){return`
      fn createTorranceSparrow(offset: u32) -> TORRANCE_SPARROW {
        var ts: TORRANCE_SPARROW;
        ts.color = vec3f(
          materialsData[offset + 1],
          materialsData[offset + 2],
          materialsData[offset + 3],
        );
        ts.ax = materialsData[offset + 4];
        ts.ay = materialsData[offset + 5];
        ts.bumpStrength = materialsData[offset + 6];
        ts.uvRepeat.x = materialsData[offset + 7];
        ts.uvRepeat.y = materialsData[offset + 8];
        ts.mapUvRepeat.x = materialsData[offset + 9];
        ts.mapUvRepeat.y = materialsData[offset + 10];
        ts.mapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 11]),
          bitcast<i32>(materialsData[offset + 12]),
        );
        ts.roughnessMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 13]),
          bitcast<i32>(materialsData[offset + 14]),
        );
        ts.bumpMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 15]),
          bitcast<i32>(materialsData[offset + 16]),
        );
        return ts;
      } 
    `}static shaderShadeTorranceSparrow(){return`
      // throwbridge reitz distribution
      fn TR_D(wm: vec3f, alpha_x: f32, alpha_y: f32) -> f32 {
        let tan2Theta = Tan2Theta(wm);
        if (IsInf(tan2Theta)) {
          return 0;
        }

        let cos4Theta = Sqr(Cos2Theta(wm));
        let e = tan2Theta * (Sqr(CosPhi(wm) / alpha_x) +
                               Sqr(SinPhi(wm) / alpha_y));
        return 1 / (PI * alpha_x * alpha_y * cos4Theta * Sqr(1 + e));
      }
      fn TR_Lambda(w: vec3f, alpha_x: f32, alpha_y: f32) -> f32 {
        let tan2Theta = Tan2Theta(w);
        if (IsInf(tan2Theta)) {
          return 0;
        }
        let alpha2 = Sqr(CosPhi(w) * alpha_x) + Sqr(SinPhi(w) * alpha_y);
        return (sqrt(1 + alpha2 * tan2Theta) - 1) / 2;
      }
      fn TR_G1(w: vec3f, alpha_x: f32, alpha_y: f32) -> f32 { 
        return 1 / (1 + TR_Lambda(w, alpha_x, alpha_y)); 
      }
      fn TR_G(wo: vec3f, wi: vec3f, alpha_x: f32, alpha_y: f32) -> f32 {
        return 1 / (1 + TR_Lambda(wo, alpha_x, alpha_y) + TR_Lambda(wi, alpha_x, alpha_y));
      }
      // overloading will be supported in the future, so for now it's D2...
      // https://github.com/gpuweb/gpuweb/issues/4507#issuecomment-1989674670
      fn TR_D2(w: vec3f, wm: vec3f, alpha_x: f32, alpha_y: f32) -> f32 {
        return TR_G1(w, alpha_x, alpha_y) / AbsCosTheta(w) * TR_D(wm, alpha_x, alpha_y) * AbsDot(w, wm);
      }
      fn TR_DistributionPDF(w: vec3f, wm: vec3f, alpha_x: f32, alpha_y: f32) -> f32 { 
        return TR_D2(w, wm, alpha_x, alpha_y); 
      }
      fn TS_Sample_wm(w: vec3f, u: vec2f, alpha_x: f32, alpha_y: f32) -> vec3f {
        var wh = normalize(vec3f(alpha_x * w.x, alpha_y * w.y, w.z));
        if (wh.z < 0) {
          wh = -wh;
        }
        var T1 = vec3f(0,0,0);
        if (wh.z < 0.99999f) {
          T1 = normalize(cross(vec3f(0, 0, 1), wh));
        } else {
          T1 = vec3f(1, 0, 0);
        }
        let T2 = cross(wh, T1);
        var p: vec2f = SampleUniformDiskPolar(u);
        let h = sqrt(1 - Sqr(p.x));
        p.y = Lerp((1 + wh.z) / 2, h, p.y);
        let pz = sqrt(max(0, 1 - LengthSquaredV2(vec2f(p))));
        let nh = p.x * T1 + p.y * T2 + pz * wh;
        return normalize(vec3f(alpha_x * nh.x, alpha_y * nh.y, max(1e-6, nh.z)));
      }
      fn TS_PDF(wo: vec3f, wi: vec3f, alpha_x: f32, alpha_y: f32) -> f32 {
        if (!SameHemisphere(wo, wi)) {
          return 0;
        }
        var wm = wo + wi;
        if (LengthSquared(wm) == 0) {
          return 0;
        }
        wm = FaceForward(normalize(wm), vec3f(0, 0, 1)); 
        return TR_DistributionPDF(wo, wm, alpha_x, alpha_y) / (4 * AbsDot(wo, wm));
      }
      // this function samples the new wi direction, and returns the brdf and pdf
      fn TS_Sample_f(
        wo:  vec3f, u: vec2f, alpha_x: f32, alpha_y: f32, 
        color: vec3f,
        wi:  ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        f:   ptr<function, vec3f>,
      ) {
        let wm = TS_Sample_wm(wo, u, alpha_x, alpha_y);
        // reflect from wgsl needs the wo vector to point "inside" the surface
        // whereas the implementation in pbrt v4 has wo pointing to the camera 
        *wi = reflect(-wo, wm);

        if (!SameHemisphere(wo, *wi)) {
          *f = vec3f(0.0);
          *pdf = 1.0;
          return;
        }

        *pdf = TS_PDF(wo, *wi, alpha_x, alpha_y);
      
        let cosTheta_o = AbsCosTheta(wo);
        let cosTheta_i = AbsCosTheta(*wi);

        let F = SchlickFresnel(color, dot(*wi, wm));

        *f = TR_D(wm, alpha_x, alpha_y) * F * TR_G(wo, *wi, alpha_x, alpha_y) /
                            (4 * cosTheta_i * cosTheta_o);

        /*
        TODO:
          Incident and outgoing directions at glancing angles need to be handled explicitly to avoid the generation of NaN values:

          <<Compute cosines and  for conductor BRDF>>= 
            Float cosTheta_o = AbsCosTheta(wo), cosTheta_i = AbsCosTheta(wi);
            if (cosTheta_i == 0 || cosTheta_o == 0) return {};
            Vector3f wm = wi + wo;
            if (LengthSquared(wm) == 0) return {};
            wm = Normalize(wm);
        */

        if (*pdf <= 0.0) {
          *f = vec3f(0.0);
          *pdf = 1.0;
        }

        // brdf values might be NaN, without this check on a cornell box scene with diffuse walls
        // and a glossy sphere at the center, after around 1500 samples with ax & ay set to 0.25
        // I'll start seeing black / broken pixels
        if(isFloatNaN((*f).x) || isFloatNaN((*f).y) || isFloatNaN((*f).z)) {
          *f = vec3f(0.0);
          *pdf = 1.0;
        }
      }

      fn TS_f(wo: vec3f, wi: vec3f, alpha_x: f32, alpha_y: f32, color: vec3f) -> vec3f {
        if (!SameHemisphere(wo, wi)) {
          return vec3f(0);
        }

        let cosTheta_o = AbsCosTheta(wo);
        let cosTheta_i = AbsCosTheta(wi);
        if (cosTheta_i == 0 || cosTheta_o == 0) {
          return vec3f(0);
        }
        var wm = wi + wo;
        if (LengthSquared(wm) == 0) {
          return vec3f(0);
        }
        wm = normalize(wm);

        let F = SchlickFresnel(color, dot(wi, wm));

        var f = TR_D(wm, alpha_x, alpha_y) * F * TR_G(wo, wi, alpha_x, alpha_y) /
          (4 * cosTheta_i * cosTheta_o);

        if (isFloatNaN(f.x) || isFloatNaN(f.y) || isFloatNaN(f.z)) {
          return vec3f(0);
        }
        
        return f;
      }


      fn shadeTorranceSparrowSampleBRDF(
        rands: vec4f, 
        material: TORRANCE_SPARROW,
        wo: vec3f,
        wi: ptr<function, vec3f>,
        worldSpaceRay: ptr<function, Ray>, 
        TBN: mat3x3f,
        brdf: ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
      ) {
        TS_Sample_f(wo, rands.xy, material.ax, material.ay, material.color, wi, pdf, brdf);
        
        let lightSamplePdf = getLightPDF(Ray((*worldSpaceRay).origin, normalize(TBN * *wi)));
        *misWeight = getMisWeight(*pdf, lightSamplePdf);
      }

      fn shadeTorranceSparrowSampleLight(
        rands: vec4f, 
        material: TORRANCE_SPARROW,
        wo: vec3f,
        wi: ptr<function, vec3f>,
        worldSpaceRay: ptr<function, Ray>, 
        TBN: mat3x3f,
        TBNinverse: mat3x3f,
        brdf: ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
        lightSampleRadiance: ptr<function, vec3f>,
      ) {
        let lightSample = getLightSample(worldSpaceRay.origin, rands);
        *pdf = lightSample.pdf;
        let backSideHit = lightSample.backSideHit;

        // from world-space to tangent-space
        *wi = TBNinverse * lightSample.direction;
        
        var brdfSamplePdf = TS_PDF(wo, *wi, material.ax, material.ay);
        *brdf = TS_f(wo, *wi, material.ax, material.ay, material.color);
        if (
          brdfSamplePdf == 0.0 || 
          lightSample.pdf == 0.0
        ) {
          *misWeight = 0; *pdf = 1; 
          *lightSampleRadiance = vec3f(0.0);
          // this will avoid NaNs when we try to normalize wi
          *wi = vec3f(-1);
          return;
        }

        *lightSampleRadiance = lightSample.radiance;
        *misWeight = getMisWeight(lightSample.pdf, brdfSamplePdf);
      }


      fn shadeTorranceSparrow(
        ires: BVHIntersectionResult, 
        ray: ptr<function, Ray>,
        reflectance: ptr<function, vec3f>, 
        rad: ptr<function, vec3f>,
        tid: vec3u,
        i: i32
      ) {
        let hitPoint = ires.hitPoint;
        var material: TORRANCE_SPARROW = createTorranceSparrow(ires.triangle.materialOffset);

        if (material.mapLocation.x > -1) {
          material.color *= getTexelFromTextureArrays(
            material.mapLocation, ires.uv, material.mapUvRepeat
          ).xyz;
        }
        if (material.roughnessMapLocation.x > -1) {
          let roughness = getTexelFromTextureArrays(
            material.roughnessMapLocation, ires.uv, material.uvRepeat
          ).xy;
          material.ax *= max(roughness.x, 0.0001);
          material.ay *= max(roughness.y, 0.0001);
        }

        var vertexNormal = ires.normal;
        if (dot(ires.triangle.geometricNormal, (*ray).direction) > 0) {
          vertexNormal = -vertexNormal;
        }
        var N = vertexNormal;
        var bumpOffset: f32 = 0.0;
        if (material.bumpMapLocation.x > -1) {
          N = getShadingNormal(
            material.bumpMapLocation, material.bumpStrength, material.uvRepeat, N, *ray, 
            ires.hitPoint, ires.uv, ires.triangle, &bumpOffset
          );
        }

        // needs to be the exact origin, such that getLightSample/getLightPDF can apply a proper offset 
        (*ray).origin = ires.hitPoint;
        // in practice however, only for Dielectrics we need the exact origin, 
        // for TorranceSparrow we can apply the bump offset if necessary
        if (bumpOffset > 0.0) {
          (*ray).origin += vertexNormal * bumpOffset;
        }

        // rands1.w is used for ONE_SAMPLE_MODEL
        // rands1.xy is used for brdf samples
        // rands2.xyz is used for light samples (getLightSample(...) uses .xyz)
        let rands1 = rand4(
          tid.y * canvasSize.x + tid.x +
          u32(cameraSamples.a.x * 928373289 + cameraSamples.a.y * 877973289) +
          u32(i * 17325799),
        );
        let rands2 = rand4(
          tid.y * canvasSize.x + tid.x + 148789 +
          u32(cameraSamples.a.z * 597834279 + cameraSamples.a.w * 34219873) +
          u32(i * 86210973),
        );

        // we need to calculate a TBN matrix
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires.triangle, N, &tangent, &bitangent);

        // normal could be flipped at some point, should we also flip TB?
        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // to transform vectors from world space to tangent space, we multiply by
        // the inverse of the TBN
        let TBNinverse = transpose(TBN);

        var wi = vec3f(0,0,0); 
        let wo = TBNinverse * -(*ray).direction;


        if (config.MIS_TYPE == BRDF_ONLY) {
          var pdf: f32; var w: f32; var brdf: vec3f;
          shadeTorranceSparrowSampleBRDF(
            rands1, material, wo, &wi, ray, TBN, &brdf, &pdf, &w
          );
          (*ray).direction = normalize(TBN * wi);
          (*ray).origin += (*ray).direction * 0.001;
          *reflectance *= brdf * (1 / pdf) * max(dot(N, (*ray).direction), 0.0);
        }

        if (config.MIS_TYPE == ONE_SAMPLE_MODEL) {
          var pdf: f32; var misWeight: f32; var brdf: vec3f; var ls: vec3f;
          if (rands1.w < 0.5) {
            shadeTorranceSparrowSampleBRDF(
              rands1, material, wo, &wi, ray, TBN, &brdf, &pdf, &misWeight
            );
          } else {
            shadeTorranceSparrowSampleLight(
              rands2, material, wo, &wi, ray, TBN, TBNinverse, 
              &brdf, &pdf, &misWeight, &ls
            );
          }
          (*ray).direction = normalize(TBN * wi);
          (*ray).origin += (*ray).direction * 0.001;
          *reflectance *= brdf * (misWeight / pdf) * max(dot(N, (*ray).direction), 0.0);
        }

        if (config.MIS_TYPE == NEXT_EVENT_ESTIMATION) {
          var brdfSamplePdf: f32; var brdfMisWeight: f32; 
          var brdfSampleBrdf: vec3f; 

          var lightSamplePdf: f32; var lightMisWeight: f32; 
          var lightRadiance: vec3f; var lightSampleBrdf: vec3f;
          var lightSampleWi: vec3f;

          shadeTorranceSparrowSampleBRDF(
            rands1, material, wo, &wi, ray, TBN, &brdfSampleBrdf, &brdfSamplePdf, &brdfMisWeight
          );
          shadeTorranceSparrowSampleLight(
            rands2, material, wo, &lightSampleWi, ray, TBN, TBNinverse, 
            &lightSampleBrdf, &lightSamplePdf, &lightMisWeight, &lightRadiance
          );

          (*ray).direction = normalize(TBN * wi);
          (*ray).origin += (*ray).direction * 0.001;
          // from tangent space to world space
          lightSampleWi = normalize(TBN * lightSampleWi);
          // light contribution, we have to multiply by *reflectance to account for reduced reflectance
          // caused by previous light-bounces. You did miss this term when first implementing MIS here
          *rad += *reflectance * lightRadiance * lightSampleBrdf * (lightMisWeight / lightSamplePdf) * max(dot(N, lightSampleWi), 0.0);
          *reflectance *= brdfSampleBrdf * (brdfMisWeight / brdfSamplePdf) * max(dot(N, (*ray).direction), 0.0);
        }
      } 
    `}}class hl{constructor(){M(this,"canvasSize",new Z(0,0));M(this,"tile",{x:0,y:0,w:0,h:0});M(this,"tileIncrementCount",0);M(this,"forceMaxTileSize",!1);Le.e.addEventListener("config-update",e=>{this.forceMaxTileSize=e.forceMaxTileSize})}setCanvasSize(e){this.canvasSize=e,this.resetTile()}isTilePerformanceMeasureable(){return this.tile.x+this.tile.w-8<=this.canvasSize.x&&this.tile.y+this.tile.h-8<=this.canvasSize.y}canTileSizeBeIncreased(){return this.tile.w<this.canvasSize.x||this.tile.h<this.canvasSize.y}canTileSizeBeDecreased(){return this.tile.w>16||this.tile.h>16}decreaseTileSize(){this.forceMaxTileSize||(this.tileIncrementCount%2===1?(this.tile.w/=2,this.tile.w=Math.ceil(this.tile.w/8)*8):(this.tile.h/=2,this.tile.h=Math.ceil(this.tile.h/8)*8),this.tile.w<16&&(this.tile.w=16),this.tile.h<16&&(this.tile.h=16),this.tileIncrementCount-=1,Ne.setTileSize(`${this.tile.w} x ${this.tile.h}`))}increaseTileSize(){this.tileIncrementCount%2===0?this.tile.w*=2:this.tile.h*=2,this.tile.w>this.canvasSize.x&&(this.tile.w=Math.ceil(this.canvasSize.x/8)*8),this.tile.h>this.canvasSize.y&&(this.tile.h=Math.ceil(this.canvasSize.y/8)*8),this.tile.x-=this.tile.w,this.tileIncrementCount+=1,Ne.setTileSize(`${this.tile.w} x ${this.tile.h}`)}resetTile(){this.tileIncrementCount=0;let e=16,t=16;this.forceMaxTileSize&&(e=this.canvasSize.x,t=this.canvasSize.y),Ne.setTileSize(`${e} x ${t}`),this.tile={x:this.canvasSize.x,y:this.canvasSize.y,w:e,h:t}}getNextTile(e){return this.tile.x+=this.tile.w,this.tile.x>=this.canvasSize.x&&(this.tile.x=0,this.tile.y+=this.tile.h),this.tile.y>=this.canvasSize.y&&(this.tile.x=0,this.tile.y=0,e()),this.tile}getCurrentTile(){return this.tile}getWorkGroupCount(){return new Z(this.tile.w/8,this.tile.h/8)}static shaderPart(){return`
      struct Tile {
        x: u32,
        y: u32,
        w: u32,
        h: u32,
      }
    `}}const Cu=`

const PI = 3.14159265359;

fn squaredLength(v: vec3f) -> f32 {
  return dot(v, v);
}

// this function did not really work, it caused issues at the abs(x) > abs(y) boundaries
// when trying to create a TBN matrix to use for diffuse directions
// the issue was visible in a cornell-sphere scene with only 3 bounces.
// strangely up to 2 bounces the result was okay, but at the third bounce 
// problems where visible if the third (index = 2) bounce hit the sphere
// fn getCoordinateSystem(N: vec3f, Nt: ptr<function, vec3f>, Nb: ptr<function, vec3f>) {
//   if (abs(N.x) > abs(N.y)) {
//     *Nt = normalize(vec3f(N.z, 0, -N.x) / sqrt(N.x * N.x + N.z * N.z));
//   }  else {
//     *Nt = normalize(vec3f(0, -N.z, N.y) / sqrt(N.y * N.y + N.z * N.z));
//   }
  
//   // I'm setting - cross to convert it to a left-handed coordinate system
//   // to be consistent with the rest of the app
//   *Nb = normalize(-cross(N, *Nt));
// }

fn sphericalToCartesian(theta: f32, phi: f32) -> vec3f {
  return vec3f(
    cos(phi) * sin(theta),
    cos(theta),
    sin(phi) * sin(theta),
  );
}

/* 
  !!NOTE!! this is different from:
  var Nt = vec3f(0,0,0);
  var Nb = vec3f(0,0,0);
  getCoordinateSystem(N, &Nt, &Nb);
  
  ray.direction = normalize(Nt * nd.x + N * nd.y + Nb * nd.z);

  because what we're doing in the last line is ***rotating*** a vector into where it would 
  go in another coordinate system.

  here instead we're not *rotating* the vector, but expressing it with another coordinate system
*/
fn expressInAnotherCoordinateSystem(
  direction: vec3f, basisX: vec3f, basisY: vec3f, basisZ: vec3f
) -> vec3f {
  // "how much of x"
  let hmox = dot(direction, basisX);
  let hmoy = dot(direction, basisY);
  let hmoz = dot(direction, basisZ);
  
  return vec3f(hmox, hmoy, hmoz); 
}

// a NaN is never equal to any other floating point number,
// even another NaN.
// https://www.w3.org/TR/WGSL/#indeterminate-values
fn isFloatNaN(value: f32) -> bool {
  return !(value == value);
}

// https://learnopengl.com/Advanced-Lighting/Normal-Mapping
fn getTangentFromTriangle(
  triangle: Triangle, shadingNormal: vec3f, tangent: ptr<function, vec3f>, bitangent: ptr<function, vec3f>
) {

  let t = triangle;
  var malconstructedUvs = false;

  // check if uvs exist, if they do let's use uv-based tangents
  if (t.uv0.x > -1) {
    let edge1 = t.v1 - t.v0;
    let edge2 = t.v2 - t.v0;
    let deltaUV1 = t.uv1 - t.uv0;
    let deltaUV2 = t.uv2 - t.uv0;  
  
    let div = (deltaUV1.x * deltaUV2.y - deltaUV2.x * deltaUV1.y);
    let f = 1.0 / div;
    if (div == 0.0) {
      malconstructedUvs = true;
    }

    *tangent = normalize(vec3f(
      f * (deltaUV2.y * edge1.x - deltaUV1.y * edge2.x),
      f * (deltaUV2.y * edge1.y - deltaUV1.y * edge2.y),
      f * (deltaUV2.y * edge1.z - deltaUV1.y * edge2.z)
    ));
  
    // for some reason, specifying the bitangent this way causes issues
    // *bitangent = normalize(vec3f(
    //   f * (-deltaUV2.x * edge1.x + deltaUV1.x * edge2.x),
    //   f * (-deltaUV2.x * edge1.y + deltaUV1.x * edge2.y),
    //   f * (-deltaUV2.x * edge1.z + deltaUV1.x * edge2.z)
    // ));
  
    *bitangent = normalize(cross(*tangent, t.geometricNormal));
  } 
  
  if (t.uv0.x < -0.9 || malconstructedUvs) {
    // otherwise default to auto geometry-based tangents
    *tangent = normalize(t.v1 - t.v0);
    *bitangent = normalize(cross(*tangent, t.geometricNormal));
  }

  // the tangents above are calculated with the geometric normal (picked from ires.triangle)
  // and have to be adjusted to use the vertex/shading normal
  *tangent = normalize(cross(shadingNormal, *bitangent));
  *bitangent = normalize(cross(*tangent, shadingNormal));
}

fn copysign(mag: f32, sign: f32) -> f32 {
  var s: f32 = 0;
  if (sign < 0) {
    s = -1;
  } else {
    s = 1;
  }

  return mag * s;
}
`,Bu=`
fn SameHemisphere(w: vec3f, wp: vec3f) -> bool {
  return w.z * wp.z > 0;
}
fn AbsDot(v1: vec3f, v2: vec3f) -> f32 { 
  return abs(dot(v1, v2)); 
}
fn FaceForward(n: vec3f, v: vec3f) -> vec3f {
  if (dot(n, v) < 0) { 
    return -n;
  } else {
    return n;
  }
}
fn LengthSquared(v: vec3f) -> f32 { 
  return Sqr(v.x) + Sqr(v.y) + Sqr(v.z); 
}
fn LengthSquaredV2(v: vec2f) -> f32 { 
  return Sqr(v.x) + Sqr(v.y); 
}
fn SampleUniformDiskPolar(u: vec2f) -> vec2f {
  let r = sqrt(u.x);
  let theta = 2 * PI * u.y;
  return vec2f(r * cos(theta), r * sin(theta));
}
fn Lerp(x: f32, a: f32, b: f32) -> f32 {
  return (1 - x) * a + x * b;
}
fn CosTheta(w: vec3f) -> f32 { 
  return w.z; 
}
fn AbsCosTheta(w: vec3f) -> f32 { 
  return abs(w.z); 
}
fn Sqr(v: f32) -> f32 {
  return v * v;
}
fn SafeSqrt(v: f32) -> f32 {
  return sqrt(max(v, 0.0));
}
fn Cos2Theta(w: vec3f) -> f32 { 
  return Sqr(w.z); 
}
fn Sin2Theta(w: vec3f) -> f32 { 
  return max(0, 1 - Cos2Theta(w)); 
}
fn SinTheta(w: vec3f) -> f32 { 
  return sqrt(Sin2Theta(w)); 
}
fn Tan2Theta(w: vec3f) -> f32 { 
  return Sin2Theta(w) / Cos2Theta(w); 
}
fn CosPhi(w: vec3f) -> f32 {
  let sinTheta = SinTheta(w);
  if (sinTheta == 0) {
    return 1;
  } else {
    return clamp(w.x / sinTheta, -1, 1);
  }
}
fn SinPhi(w: vec3f) -> f32 {
  let sinTheta = SinTheta(w);
  if (sinTheta == 0) {
    return 0;
  } else {
    return clamp(w.y / sinTheta, -1, 1);
  }
}
fn IsInf(v: f32) -> bool {
  return v > 999999999999999.0;
}
fn SchlickFresnel(r0: vec3f, radians: f32) -> vec3f {
  // -- The common Schlick Fresnel approximation
  let exponential = pow(1.0 - radians, 5.0);
  return r0 + (1.0f - r0) * exponential;
}
fn Reflect(wo: vec3f, n: vec3f) -> vec3f {
  return -wo + 2.0 * dot(wo, n) * n;
}
fn Refract(
  wi: vec3f, _n: vec3f, _eta: f32, etap: ptr<function, f32>, wt: ptr<function, vec3f>
) -> bool {
  var n = _n;
  var eta = _eta;
  var cosTheta_i = dot(n, wi);

  if (cosTheta_i < 0) {
    eta = 1 / eta;
    cosTheta_i = -cosTheta_i;
    n = -n;
  }

  let sin2Theta_i = max(0, 1 - Sqr(cosTheta_i));
  let sin2Theta_t = sin2Theta_i / Sqr(eta);
  if (sin2Theta_t >= 1) {
    return false;
  }

  let cosTheta_t = sqrt(1 - sin2Theta_t);

  *wt = -wi / eta + (cosTheta_i / eta - cosTheta_t) * n;
  *etap = eta;

  return true;
}

fn boundsOffset2D(domain: AABB, p: vec2f) -> vec2f {
  var o = p - vec2f(domain.min.x, domain.min.y);

  if (domain.max.x > domain.min.x) { 
    o.x /= domain.max.x - domain.min.x;
  }

  if (domain.max.y > domain.min.y) { 
    o.y /= domain.max.y - domain.min.y; 
  }

  return o;
}
`,Pu=`
fn seed_per_thread(id: u32) -> u32 {
  return u32(id * 1099087573);
}

fn TauStep(z: u32, s1: u32, s2: u32, s3: u32, M: u32) -> u32 {
  let b: u32 =(((z << s1) ^ z) >> s2);
  let t = (((z & M) << s3) ^ b);
  return t;
}

fn rand4(seedIdx: u32) -> vec4f {
  //STEP 1
  let seed=seed_per_thread(seedIdx);
  var z1=TauStep(seed,13,19,12,429496729);
  var z2=TauStep(seed,2,25,4,4294967288);
  var z3=TauStep(seed,3,11,17,429496280);
  var z4=(1664525*seed+1013904223);
  let r0=(z1^z2^z3^z4);

  //STEP 2
  z1=TauStep(r0,13,19,12,429496729);
  z2=TauStep(r0,2,25,4,4294967288);
  z3=TauStep(r0,3,11,17,429496280);
  z4=(1664525*r0+1013904223);
  let r1=(z1^z2^z3^z4);

  //STEP 3
  z1=TauStep(r1,13,19,12,429496729);
  z2=TauStep(r1,2,25,4,4294967288);
  z3=TauStep(r1,3,11,17,429496280);
  z4=(1664525*r1+1013904223);
  let r2=(z1^z2^z3^z4);

  //STEP 4
  z1=TauStep(r2,13,19,12,429496729);
  z2=TauStep(r2,2,25,4,4294967288);
  z3=TauStep(r2,3,11,17,429496280);
  z4=(1664525*r2+1013904223);
  let r3=(z1^z2^z3^z4);

  // u1, u2, u3 and u4 varies between 0 and 1.0
  var u1 = f32(r0) * f32(2.3283064365387e-10);
  var u2 = f32(r1) * f32(2.3283064365387e-10);
  var u3 = f32(r2) * f32(2.3283064365387e-10);
  var u4 = f32(r3) * f32(2.3283064365387e-10);

  // they have to be clamped, we can't assume that they go up to 1.0
  // apparently the original algo will have them go up to 1.0
  // if they do go up to 1.0, some algorithms like PC1D_FindCDFIndex could fail
  u1 = clamp(u1, 0.0, 0.9999999);
  u2 = clamp(u2, 0.0, 0.9999999);
  u3 = clamp(u3, 0.0, 0.9999999);
  u4 = clamp(u4, 0.0, 0.9999999);

  return vec4f(u1, u2, u3, u4);
}
`;class vn extends Fs{constructor({absorption:t,ax:i,ay:s,eta:n,absorptionMap:r,roughnessMap:o,bumpMap:a,bumpStrength:h=1,uvRepeat:c=new Z(1,1),mapUvRepeat:u=new Z(1,1),flipTextureY:f=!1}){super({flipTextureY:f});M(this,"absorption");M(this,"ax");M(this,"ay");M(this,"eta");M(this,"bumpStrength");M(this,"uvRepeat");M(this,"mapUvRepeat");this.type=Ht.DIELECTRIC,this.absorption=t,this.ax=i,this.ay=s,this.eta=n,this.bumpStrength=h,this.uvRepeat=c,this.mapUvRepeat=u,this.offsetCount=18,this.texturesLocation.absorptionMap=new Z(-1,-1),this.texturesLocation.roughnessMap=new Z(-1,-1),this.texturesLocation.bumpMap=new Z(-1,-1),r&&(this.textures.absorptionMap=r),o&&(this.textures.roughnessMap=o),a&&(this.textures.bumpMap=a)}getFloatsArray(){return[this.type,this.absorption.r,this.absorption.g,this.absorption.b,this.ax,this.ay,this.eta,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Ye(this.texturesLocation.absorptionMap.x),Ye(this.texturesLocation.absorptionMap.y),Ye(this.texturesLocation.roughnessMap.x),Ye(this.texturesLocation.roughnessMap.y),Ye(this.texturesLocation.bumpMap.x),Ye(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
      struct DIELECTRIC {
        absorption: vec3f,
        ax: f32,
        ay: f32,
        eta: f32,
        bumpStrength: f32,
        uvRepeat: vec2f,
        mapUvRepeat: vec2f,
        absorptionMapLocation: vec2i,
        roughnessMapLocation: vec2i,
        bumpMapLocation: vec2i,
      }
    `}static shaderCreateStruct(){return`
      fn createDielectric(offset: u32) -> DIELECTRIC {
        var d: DIELECTRIC;
        d.absorption = vec3f(
          materialsData[offset + 1],
          materialsData[offset + 2],
          materialsData[offset + 3],
        );
        d.ax = materialsData[offset + 4];
        d.ay = materialsData[offset + 5];
        d.eta = materialsData[offset + 6];
        d.bumpStrength = materialsData[offset + 7];
        d.uvRepeat.x = materialsData[offset + 8];
        d.uvRepeat.y = materialsData[offset + 9];
        d.mapUvRepeat.x = materialsData[offset + 10];
        d.mapUvRepeat.y = materialsData[offset + 11];
        d.absorptionMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 12]),
          bitcast<i32>(materialsData[offset + 13]),
        );
        d.roughnessMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 14]),
          bitcast<i32>(materialsData[offset + 15]),
        );
        d.bumpMapLocation = vec2i(
          bitcast<i32>(materialsData[offset + 16]),
          bitcast<i32>(materialsData[offset + 17]),
        );
        return d;
      } 
    `}static shaderShadeDielectric(){return`
      // assuming throwbridge reitz distribution methods are already defined ...
      // assuming throwbridge reitz distribution methods are already defined ...
      // assuming throwbridge reitz distribution methods are already defined ...
      fn FrDielectric(_cosTheta_i: f32, _eta: f32) -> f32 {
        var cosTheta_i = _cosTheta_i;
        var eta = _eta;
        
        cosTheta_i = clamp(cosTheta_i, -1, 1);
        if (cosTheta_i < 0) {
          eta = 1 / eta;
          cosTheta_i = -cosTheta_i;
        }
    
        let sin2Theta_i = 1 - Sqr(cosTheta_i);
        let sin2Theta_t = sin2Theta_i / Sqr(eta);
        if (sin2Theta_t >= 1) {
          return 1.0;
        }
        let cosTheta_t = sqrt(1 - sin2Theta_t);
    
        let r_parl = (eta * cosTheta_i - cosTheta_t) / (eta * cosTheta_i + cosTheta_t);
        let r_perp = (cosTheta_i - eta * cosTheta_t) / (cosTheta_i + eta * cosTheta_t);

        return (Sqr(r_parl) + Sqr(r_perp)) / 2;
      }

      fn Dielectric_PDF(wo: vec3f, wi: vec3f, material: DIELECTRIC) -> f32 {
        if (material.eta == 1 || (material.ax < 0.0005 && material.ay < 0.0005)) {
          return 0;
        }

        // Evaluate sampling PDF of rough dielectric BSDF
        let cosTheta_o = CosTheta(wo);
        let cosTheta_i = CosTheta(wi);
        let reflect: bool = cosTheta_i * cosTheta_o > 0;
        var etap = 1.0;
        if (!reflect) {
          if (cosTheta_o > 0) {
            etap = material.eta;
          } else {
            etap = (1.0 / material.eta);
          }
        }
        var wm = wi * etap + wo;
        if (cosTheta_i == 0 || cosTheta_o == 0 || LengthSquared(wm) == 0) {
          return 0;
        }
        wm = FaceForward(normalize(wm), vec3f(0, 0, 1));

        if (dot(wm, wi) * cosTheta_i < 0 || dot(wm, wo) * cosTheta_o < 0) {
          return 0;
        }

        let R = FrDielectric(dot(wo, wm), material.eta);
        let T = 1.0 - R;
        let pr = R;
        let pt = T;

        var pdf = 1.0;
        if (reflect) {
          pdf = TR_DistributionPDF(wo, wm, material.ax, material.ay) / (4.0 * AbsDot(wo, wm)) * pr / (pr + pt);
        } else {
          let denom = Sqr(dot(wi, wm) + dot(wo, wm) / etap);
          let dwm_dwi = AbsDot(wi, wm) / denom;
          pdf = TR_DistributionPDF(wo, wm, material.ax, material.ay) * dwm_dwi * pt / (pr + pt);
        }

        return pdf;
      }

      // this function samples the new wi direction, and returns the brdf and pdf
      fn Dielectric_Sample_f(
        wo:  vec3f,
        material: DIELECTRIC,
        rands: vec4f,
        wi:  ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        f:   ptr<function, vec3f>,
      ) {
        if (material.eta == 1.0 || (material.ax < 0.0005 && material.ay < 0.0005)) {
          // sample perfect specular BRDF

          let R = FrDielectric(CosTheta(wo), material.eta);
          let T = 1.0 - R;
          let pr = R;
          let pt = T;
          if (pr == 0 && pt == 0) {
            *f = vec3f(0.0);
            *pdf = 1.0;
            return;
          }

          let uc = rands.x;

          if (uc < pr / (pr + pt)) {
            *wi = vec3f(-wo.x, -wo.y, wo.z);
            *f = vec3f(R / AbsCosTheta(*wi));
            *pdf = pr / (pr + pt);
            return;
          } else {
            var etap = 0.0;
            let valid: bool = Refract(wo, vec3f(0, 0, 1), material.eta, &etap, wi);

            if (!valid) {
              *f = vec3f(0.0);
              *pdf = 1.0;
              return;
            }

            *f = vec3f(T / AbsCosTheta(*wi));
            // if (mode == TransportMode::Radiance) // it is ::Radiance in our implementation...
              *f /= Sqr(etap);
            // }

            *pdf = pt / (pr + pt);
          }
        } else {

          // sample rough dielectric BSDF

          let uc = rands.x;
          let u  = rands.yz;

          let wm = TS_Sample_wm(wo, u, material.ax, material.ay);
          let R = FrDielectric(dot(wo, wm), material.eta);
          let T = 1.0 - R;
          let pr = R;
          let pt = T;

          if (uc < pr / (pr + pt)) {
            *wi = Reflect(wo, wm);
            if (!SameHemisphere(wo, *wi)) {
              *f = vec3f(0.0);
              *pdf = 1.0;
              return;
            }
              
            *pdf = TR_DistributionPDF(wo, wm, material.ax, material.ay) / 
                      (4 * AbsDot(wo, wm)) * pr / (pr + pt);

            *f = vec3f(
              TR_D(wm, material.ax, material.ay) * 
              TR_G(wo, *wi, material.ax, material.ay) * R /
              (4 * CosTheta(*wi) * CosTheta(wo))
            );
          } else {
            var etap = 0.0;
            let tir = !Refract(wo, wm, material.eta, &etap, wi);
            if (SameHemisphere(wo, *wi) || (*wi).z == 0 || tir) {
              *f = vec3f(0.0);
              *pdf = 1.0;
              return;
            }

            let denom = Sqr(dot(*wi, wm) + dot(wo, wm) / etap);
            let dwm_dwi = AbsDot(*wi, wm) / denom;
            *pdf = TR_DistributionPDF(wo, wm, material.ax, material.ay) * dwm_dwi * pt / (pr + pt);

            *f = vec3f(T * TR_D(wm, material.ax, material.ay) *
              TR_G(wo, *wi, material.ax, material.ay) *
              abs(dot(*wi, wm) * dot(wo, wm) /
              (CosTheta(*wi) * CosTheta(wo) * denom))
            );

            // if (mode == TransportMode::Radiance) {
              *f /= Sqr(etap);
            //}
          }
        }

        if (*pdf <= 0.0) {
          *f = vec3f(0.0);
          *pdf = 1.0;
        }

        if(isFloatNaN((*f).x) || isFloatNaN((*f).y) || isFloatNaN((*f).z)) {
          *f = vec3f(0.0);
          *pdf = 1.0;
        }
      }

      fn Dielectric_f(wo: vec3f, wi: vec3f, material: DIELECTRIC) -> vec3f {
        if (material.eta == 1.0 || (material.ax < 0.0005 && material.ay < 0.0005)) {
          // TODO: use correct dirac-delta values for perfect specular BRDF
          return vec3f(1.0);
        } else {

          let cosTheta_o = CosTheta(wo);
          let cosTheta_i = CosTheta(wi);
          let reflect: bool = cosTheta_i * cosTheta_o > 0;
          var etap = 1.0;
          if (!reflect) {
            if (cosTheta_o > 0) {
              etap = material.eta;
            } else {
              etap = (1.0 / material.eta);
            }
          }
          var wm = wi * etap + wo;
          if (cosTheta_i == 0 || cosTheta_o == 0 || LengthSquared(wm) == 0) {
            return vec3f(0.0);
          }
          wm = FaceForward(normalize(wm), vec3f(0, 0, 1));

          if (dot(wm, wi) * cosTheta_i < 0 || dot(wm, wo) * cosTheta_o < 0) {
            return vec3f(0.0);
          }

          let F = FrDielectric(dot(wo, wm), material.eta);
          if (reflect) {
            let fr = vec3f(
              TR_D(wm, material.ax, material.ay) * 
              TR_G(wo, wi, material.ax, material.ay) * F /
              abs(4.0 * cosTheta_i * cosTheta_o)
            );

            if (isFloatNaN(fr.x) || isFloatNaN(fr.y) || isFloatNaN(fr.z)) {
              return vec3f(0);
            }

            return fr;
          } else {
            let denom = Sqr(dot(wi, wm) + dot(wo, wm) / etap) * cosTheta_i * cosTheta_o;
            var ft = vec3f(
              TR_D(wm, material.ax, material.ay) * (1.0 - F) * 
              TR_G(wo, wi, material.ax, material.ay) *
              abs(dot(wi, wm) * dot(wo, wm) / denom)
            );

            //  if (mode == TransportMode::Radiance) {
              ft /= Sqr(etap);
            // }

            if (isFloatNaN(ft.x) || isFloatNaN(ft.y) || isFloatNaN(ft.z)) {
              return vec3f(0);
            }
            
            return vec3f(ft);
          }
        }
      }


      fn shadeDielectricSampleBRDF(
        rands: vec4f, 
        material: DIELECTRIC,
        wo: vec3f,
        wi: ptr<function, vec3f>,
        worldSpaceRay: ptr<function, Ray>, 
        TBN: mat3x3f,
        brdf: ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
      ) {
        Dielectric_Sample_f(wo, material, rands, wi, pdf, brdf);
        
        let newDir = normalize(TBN * *wi);
        let lightSamplePdf = getLightPDF(Ray((*worldSpaceRay).origin, newDir));
        *misWeight = getMisWeight(*pdf, lightSamplePdf);
      }

      fn shadeDielectricSampleLight(
        rands: vec4f, 
        material: DIELECTRIC,
        wo: vec3f,
        wi: ptr<function, vec3f>,
        worldSpaceRay: ptr<function, Ray>, 
        TBN: mat3x3f,
        TBNinverse: mat3x3f,
        brdf: ptr<function, vec3f>,
        pdf: ptr<function, f32>,
        misWeight: ptr<function, f32>,
        lightSampleRadiance: ptr<function, vec3f>,
      ) {
        let lightSample = getLightSample(worldSpaceRay.origin, rands);
        *pdf = lightSample.pdf;
        let backSideHit = lightSample.backSideHit;

        // from world-space to tangent-space
        *wi = TBNinverse * lightSample.direction;

        var brdfSamplePdf = Dielectric_PDF(wo, *wi, material);
        *brdf = Dielectric_f(wo, *wi, material);

        if (
          brdfSamplePdf == 0.0 ||
          lightSample.pdf == 0.0
        ) {
          *misWeight = 0; *pdf = 1; *brdf = vec3f(0.0);
          *lightSampleRadiance = vec3f(0.0);
          // this will avoid NaNs when we try to normalize wi
          *wi = vec3f(-1);
          return;
        }

        *lightSampleRadiance = lightSample.radiance;
        *misWeight = getMisWeight(lightSample.pdf, brdfSamplePdf);
      }


      fn shadeDielectric(
        ires: BVHIntersectionResult, 
        ray: ptr<function, Ray>,
        reflectance: ptr<function, vec3f>, 
        rad: ptr<function, vec3f>,
        tid: vec3u,
        i: i32
      ) {
        let hitPoint = ires.hitPoint;
        var material: DIELECTRIC = createDielectric(ires.triangle.materialOffset);

        var absorption = material.absorption;
        // using a texture here is non-sensical from a PBR perspective,
        // however it can be desireable from an artistic point of view
        if (material.absorptionMapLocation.x > -1) {
          absorption *= getTexelFromTextureArrays(
            material.absorptionMapLocation, ires.uv, material.mapUvRepeat
          ).xyz;
        }

        if (material.roughnessMapLocation.x > -1) {
          let roughness = getTexelFromTextureArrays(
            material.roughnessMapLocation, ires.uv, material.uvRepeat
          ).xy;
          material.ax *= max(roughness.x, 0.0001);
          material.ay *= max(roughness.y, 0.0001);
        }

        var vertexNormal = ires.normal;
        var N = vertexNormal;
        var bumpOffset: f32 = 0.0;
        if (material.bumpMapLocation.x > -1) {
          N = getShadingNormal(
            material.bumpMapLocation, material.bumpStrength, material.uvRepeat, N, *ray, 
            ires.hitPoint, ires.uv, ires.triangle, &bumpOffset
          );
        }

        var isInsideMedium = dot(N, (*ray).direction) > 0;
        
        // beer-lambert absorption 
        if (isInsideMedium) {
          *reflectance *= vec3f(
            exp(-absorption.x * ires.t), 
            exp(-absorption.y * ires.t), 
            exp(-absorption.z * ires.t), 
          );
        }
        
        // needs to be the exact origin, such that getLightSample/getLightPDF can apply a proper offset 
        (*ray).origin = ires.hitPoint;

        // rands1.w is used for ONE_SAMPLE_MODEL
        // rands1.xyz is used for brdf samples
        // rands2.xyz is used for light samples (getLightSample(...) uses .xyz)
        let rands1 = rand4(
          tid.y * canvasSize.x + tid.x +
          u32(cameraSamples.a.x * 928373289 + cameraSamples.a.y * 877973289) +
          u32(i * 17325799),
        );
        let rands2 = rand4(
          tid.y * canvasSize.x + tid.x + 148789 +
          u32(cameraSamples.a.z * 597834279 + cameraSamples.a.w * 34219873) +
          u32(i * 86210973),
        );

        // we need to calculate a TBN matrix
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires.triangle, N, &tangent, &bitangent);
       

        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // to transform vectors from world space to tangent space, we multiply by
        // the inverse of the TBN
        let TBNinverse = transpose(TBN);

        var wi = vec3f(0,0,0); 
        let wo = normalize(TBNinverse * -(*ray).direction);

        if (config.MIS_TYPE == BRDF_ONLY) {
          var pdf: f32; var w: f32; var brdf: vec3f;
          shadeDielectricSampleBRDF(
            rands1, material, wo, &wi, ray, TBN, &brdf, &pdf, &w
          );
          (*ray).direction = normalize(TBN * wi);
          (*ray).origin = ires.hitPoint + (*ray).direction * 0.001;
          *reflectance *= (brdf / pdf) * abs(dot(N, (*ray).direction));
        }

        if (config.MIS_TYPE == ONE_SAMPLE_MODEL) {
          var pdf: f32; var misWeight: f32; var brdf: vec3f; var ls: vec3f;
          var isBrdfSample = rands1.w < 0.5;
          if (isBrdfSample) {
            shadeDielectricSampleBRDF(
              rands1, material, wo, &wi, ray, TBN, &brdf, &pdf, &misWeight
            );
          } else {
            shadeDielectricSampleLight(
              rands2, material, wo, &wi, ray, TBN, TBNinverse, 
              &brdf, &pdf, &misWeight, &ls
            );
          }

          (*ray).direction = normalize(TBN * wi);
          (*ray).origin = ires.hitPoint + (*ray).direction * 0.001;
          *reflectance *= brdf * (misWeight / pdf) * abs(dot(N, (*ray).direction));
        }

        if (config.MIS_TYPE == NEXT_EVENT_ESTIMATION) {
          var brdfSamplePdf: f32; var brdfMisWeight: f32; 
          var brdfSampleBrdf: vec3f; 

          var lightSamplePdf: f32; var lightMisWeight: f32; 
          var lightRadiance: vec3f; var lightSampleBrdf: vec3f;
          var lightSampleWi: vec3f;

          shadeDielectricSampleBRDF(
            rands1, material, wo, &wi, ray, TBN, &brdfSampleBrdf, &brdfSamplePdf, &brdfMisWeight
          );
          shadeDielectricSampleLight(
            rands2, material, wo, &lightSampleWi, ray, TBN, TBNinverse, 
            &lightSampleBrdf, &lightSamplePdf, &lightMisWeight, &lightRadiance
          );

          (*ray).direction = normalize(TBN * wi);
          (*ray).origin = ires.hitPoint + (*ray).direction * 0.001;
          // from tangent space to world space
          lightSampleWi = normalize(TBN * lightSampleWi);
          // *****************
          // The reason why we can use NEE without issues here is that if the light sample ray 
          // ends up inside the medium, the bvh intersection routine will find the other side of 
          // the object instead of a light source, thus setting misWeight to zero.
          // We're also making sure the light-sample ray is correctly being positioned inside or outside 
          // the medium before using the ray
          // *****************
          *rad += *reflectance * lightRadiance * lightSampleBrdf * (lightMisWeight / lightSamplePdf) * abs(dot(N, lightSampleWi));
          *reflectance *= brdfSampleBrdf * (brdfMisWeight / brdfSamplePdf) * abs(dot(N, (*ray).direction));
        }
      } 
    `}}class Ru{constructor(){M(this,"s",0)}reset(){this.s=0}get2DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3);return this.s++,new Z(e,t)}get3DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5);return this.s++,new S(e,t,i)}get4DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5),s=this.getSample(this.s,7);return this.s++,new ct(e,t,i,s)}getSamples(e){if(e>8)throw new Error("adjust the getSamples function to take in more than 8 samples");let t=[],i=[2,3,5,7,11,13,17,19];for(let s=0;s<e;s++)t.push(this.getSample(this.s,i[s]));return this.s++,t}getSample(e,t){for(var i=0,s=1/t,n=e;n>0;)i=i+s*(n%t),n=Math.floor(n/t),s=s/t;return i}}class ul{constructor(e,t){M(this,"normal");M(this,"distance");this.normal=e,this.distance=t}intersectRay(e,t){let i=this.normal.dot(t);if(Math.abs(i)<=1e-4)return{hit:!1,t:-1,hitPoint:new S(0,0,0)};let s=-(this.normal.dot(e)+this.distance)/this.normal.dot(t);return s<=1e-4?{hit:!1,t:-1,hitPoint:new S(0,0,0)}:{hit:!0,t:s,hitPoint:e.clone().add(e.clone().multiplyScalar(s))}}static shaderMethods(){return`
      fn intersectPlane(
        ray: Ray, n: vec3f, d: f32, hitPoint: ptr<function, vec3f>
      ) -> bool {
        let denom = dot(n, ray.direction);
      
        // Prevent divide by zero:
        if (abs(denom) <= 1e-4f) {
          *hitPoint = vec3f(0.0);
          return false;
        }
      
        // If you want to ensure the ray reflects off only
        // the "top" half of the plane, use this instead:
        //
        // if (-denom <= 1e-4f)
        //     return std::nullopt;
      
        let t = -(dot(n, ray.origin) + d) / dot(n, ray.direction);
      
        // Use pointy end of the ray.
        // It is technically correct to compare t < 0,
        // but that may be undesirable in a raytracer.
        if (t <= 1e-4) {
          *hitPoint = vec3f(0.0);
          return false;
        }
      
        *hitPoint = ray.origin + t * ray.direction;
        return true;
      };
    `}}class wr{constructor(){M(this,"e");M(this,"position");M(this,"rotationMatrix");M(this,"viewMatrix");M(this,"projectionMatrix");M(this,"canvasSize");M(this,"cameraSampleUniformBuffer");M(this,"cameraUniformBuffer");M(this,"cameraPositionUniformBuffer");M(this,"exposureUniformBuffer");M(this,"cameraMatrixUniformBuffer");M(this,"projectionMatrixUniformBuffer");M(this,"haltonSampler",new Ru);M(this,"device");M(this,"requestedBuffersUpdate",!1);M(this,"canvasContainerEl");this.e=new br,this.position=new S(0,0,-20),this.rotationMatrix=new fe().identity(),this.viewMatrix=new fe().identity(),this.projectionMatrix=new fe().identity(),this.device=jt.device,this.cameraSampleUniformBuffer=this.device.createBuffer({size:8*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraUniformBuffer=this.device.createBuffer({size:96,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.exposureUniformBuffer=this.device.createBuffer({size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraMatrixUniformBuffer=this.device.createBuffer({size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.projectionMatrixUniformBuffer=this.device.createBuffer({size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraPositionUniformBuffer=this.device.createBuffer({size:3*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.fov=Math.PI*.25,this.aperture=.1,this.focusDistance=10,this.exposure=1,this.canvasSize=Ei(-1,-1),this.tiltShift=Ei(0,0),we.subscribe(e=>{this.requestedBuffersUpdate=!0,this.e.fireEvent("change")}),this.e.addEventListener("change",()=>{this.requestedBuffersUpdate=!0})}setCanvasContainer(e){this.canvasContainerEl=e}onCanvasResize(e){this.canvasSize=e,this.requestedBuffersUpdate=!0}get rotationSpeed(){return tt(hi).rotationSpeed}set rotationSpeed(e){hi.update(t=>(t.rotationSpeed=e,t))}get movementSpeed(){return tt(hi).movementSpeed}set movementSpeed(e){hi.update(t=>(t.movementSpeed=e,t))}get exposure(){return tt(we).exposure}set exposure(e){we.update(t=>(t.exposure=e,t))}get fov(){return tt(we).fov}set fov(e){we.update(t=>(t.fov=e,t))}get aperture(){return tt(we).aperture}set aperture(e){we.update(t=>(t.aperture=e,t))}get focusDistance(){return tt(we).focusDistance}set focusDistance(e){we.update(t=>(t.focusDistance=e,t))}get tiltShift(){return tt(we).tiltShift}set tiltShift(e){we.update(t=>(t.tiltShift=e,t))}get catsEyeBokehEnabled(){return tt(we).catsEyeBokehEnabled}set catsEyeBokehEnabled(e){we.update(t=>(t.catsEyeBokehEnabled=e,t))}get catsEyeBokehMult(){return tt(we).catsEyeBokehMult}set catsEyeBokehMult(e){we.update(t=>(t.catsEyeBokehMult=e,t))}get catsEyeBokehPow(){return tt(we).catsEyeBokehPow}set catsEyeBokehPow(e){we.update(t=>(t.catsEyeBokehPow=e,t))}dispose(){this.cameraSampleUniformBuffer=null,this.e=new br}resetSampler(){this.haltonSampler.reset()}renderLoopUpdate(){this.requestedBuffersUpdate&&(this.updateCameraBuffer(),this.updateCameraMatricesBuffers(),this.updateExposureUniformBuffer(),this.requestedBuffersUpdate=!1)}updateExposureUniformBuffer(){this.device.queue.writeBuffer(this.exposureUniformBuffer,0,new Float32Array([this.exposure]))}updateCameraMatricesBuffers(){this.viewMatrix.identity(),this.viewMatrix.multiplyMatrices(this.viewMatrix,this.rotationMatrix.clone().invert()),this.viewMatrix.multiplyMatrices(this.viewMatrix,new fe().makeTranslation(this.position).invert()),this.device.queue.writeBuffer(this.cameraMatrixUniformBuffer,0,new Float32Array(this.viewMatrix.elements));let e=this.canvasSize.x/this.canvasSize.y,t=.1,i=1e4,s=Math.tan(this.fov*.5)*t,n=-s,r=s*e,o=-s*e,a=t,h=i,c=s,u=r,f=n,d=o;this.device.queue.writeBuffer(this.projectionMatrixUniformBuffer,0,new Float32Array([2*a/(u-d),0,0,0,0,2*a/(c-f),0,0,(u+d)/(u-d),(c+f)/(c-f),-(h+a)/(h-a),-1,0,0,-(2*h*a)/(h-a),0])),this.device.queue.writeBuffer(this.cameraPositionUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z]))}updateCameraBuffer(){this.device.queue.writeBuffer(this.cameraUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z,this.fov,this.rotationMatrix.elements[0],this.rotationMatrix.elements[1],this.rotationMatrix.elements[2],0,this.rotationMatrix.elements[4],this.rotationMatrix.elements[5],this.rotationMatrix.elements[6],0,this.rotationMatrix.elements[8],this.rotationMatrix.elements[9],this.rotationMatrix.elements[10],0,this.aperture,this.focusDistance,this.tiltShift.x,this.tiltShift.y,this.catsEyeBokehEnabled?1:0,this.catsEyeBokehMult,this.catsEyeBokehPow,0]))}updateCameraSample(){let e=this.haltonSampler.getSamples(8);this.device.queue.writeBuffer(this.cameraSampleUniformBuffer,0,new Float32Array(e))}getFocusDistanceFromIntersectionPoint(e){let t=e.clone().sub(this.position).applyMatrix4(this.rotationMatrix.clone().invert()),i=t.clone().normalize(),n=new ul(new S(this.tiltShift.x,this.tiltShift.y,-1),1).intersectRay(new S(0,0,0),i),r=t.length(),o=n.t;return r/o}screenPointToRay(e,t){let i=new Z(e.x/t.x*2-1,e.y/t.y*2-1),s=t.x/t.y,n=Math.tan(this.fov*.5);var r=new S(n*i.x*s,n*i.y,1).normalize();return r=r.applyMatrix4(this.rotationMatrix),{ro:this.position.clone(),rd:r}}static shaderMethods(){return`
      fn getCameraRay(tid: vec3u, idx: u32, contribution: ptr<function, f32>) -> Ray {
        // if you change the inner workings of ray direction creation,
        // also remember to update screenPointToRay(...)

        *contribution = 1.0;

        // from [0...1] to [-1...+1]
        let nuv = vec2f(
          (f32(tid.x) + cameraSamples.a.x) / f32(canvasSize.x) * 2 - 1,
          (f32(tid.y) + cameraSamples.a.y) / f32(canvasSize.y) * 2 - 1,
        );
      
        let aspectRatio = f32(canvasSize.x) / f32(canvasSize.y);
        let fovTangent = tan(camera.fov * 0.5);
        var rd = normalize(vec3f(
          fovTangent * nuv.x * aspectRatio, 
          fovTangent * nuv.y, 
          1.0
        ));
      
        // aperture calculations
        let aperture = camera.aperture;

        // ***** old method, no tilt shift
        // let focalDistance = camera.focusDistance * (1.0 / rd.z);
        // let focalPoint = rd * focalDistance;
        // ***** new method, with tilt shift 
        var focalPoint = vec3f(0);
        let planeDir = normalize(vec3f(camera.tiltShift.x, camera.tiltShift.y, -1));
        let intersected = intersectPlane(
          Ray(vec3f(0), rd), planeDir, camera.focusDistance * -planeDir.z, &focalPoint
        );

        let r1 = rand4(tid.x * 31472 + tid.y * 71893);
        let dofRands = vec2f(
          fract(r1.x + cameraSamples.a.z),
          fract(r1.y + cameraSamples.a.w),
        );
        var offsetRadius = aperture * sqrt(dofRands.x);
        let offsetTheta = dofRands.y * 2.0 * PI;
        var originOffset = vec3f(offsetRadius * cos(offsetTheta), offsetRadius * sin(offsetTheta), 0.0);
        
        if (camera.catsEyeBokehEnabled > 0) {
          // cat-eyed bokeh
          var oo = (originOffset / aperture).xy;
          let screenDir = -normalize(rd.xy);
          let screenDirNorm = vec2f(-screenDir.y, screenDir.x);
          // vector projection 
          // https://math.stackexchange.com/questions/4646578/finding-the-projection-of-a-vector-onto-another-vector
          let projectionDistance = abs(dot(oo, screenDir) / dot(screenDir, screenDir));
          let effectMult = camera.catsEyeBokehMult;
          let effectPow = camera.catsEyeBokehPow;
          let screenRayLength = length(rd.xy);
          let A = effectMult * screenRayLength * pow(1.0 + screenRayLength, effectPow);
          let newAperture = mix(aperture, 0.0, projectionDistance * A);    

          let xt = 1.0 / (A + 1.0);
          let apertureAtEdge = mix(1.0, 0.0, xt * A); 

          *contribution = 0.0;
          for(var i = 0; i < 10; i++) {
            let rds = rand4(tid.x * 31472 + tid.y * 71893 + u32(i) * 19537);
            let r0 = fract(rds.x + cameraSamples.b.x);
            let r1 = fract(rds.y + cameraSamples.b.y);

            var oo = screenDir * (r0 * 2 - 1) * apertureAtEdge;
            oo = oo + screenDirNorm * (r1 * 2 - 1);    
          
            let offsetRadius = length(oo);
            if (offsetRadius > 1.0) {
              continue;
            }
          
            let projectionDistance = abs(dot(oo, screenDir) / dot(screenDir, screenDir));
            let t = projectionDistance * A;
            let newAperture = mix(1.0, 0.0, t);

            if (offsetRadius > newAperture) {
              continue;
            }

            originOffset = vec3f(oo * aperture, 0.0);
            // the contribution adjustment is not necessary now that we're drawing 
            // these 10 samples according to the apertureAtEdge distribution,
            // since it's extremely likely that we'll find a valid sample
            *contribution = 1.0;
            break;
          }
        }


        rd = normalize(camera.rotMatrix * normalize(focalPoint - originOffset));
        originOffset = camera.rotMatrix * originOffset;
        let ro = camera.position + originOffset;

        return Ray(ro, rd);
      }
    `}static shaderStruct(){return`
      struct Camera {
        position: vec3f,
        fov: f32,
        rotMatrix: mat3x3f,
        aperture: f32,
        focusDistance: f32,
        tiltShift: vec2f,
        catsEyeBokehEnabled: u32,
        catsEyeBokehMult: f32,
        catsEyeBokehPow: f32
      }
      struct Ray {
        origin: vec3f,
        direction: vec3f,
      }
      // can't use an array of f32 since I'd have to switch to a storage buffer
      // (error: runtime-sized arrays can only be used in the <storage> address space) 
      struct CameraSamples {
        a: vec4f,
        b: vec4f,
      } 
    `}}const zu=`
  fn getMisWeight(pdf0: f32, pdf1: f32) -> f32 {
    var misWeight = 0.0;
  
    if (config.MIS_TYPE == ONE_SAMPLE_MODEL || config.MIS_TYPE == NEXT_EVENT_ESTIMATION) {
      if (config.MIS_TYPE == ONE_SAMPLE_MODEL) {
        misWeight = pdf0 / ((pdf0 + pdf1) * 0.5);
        if (config.USE_POWER_HEURISTIC == 1) {
          let b1 = pdf0;
          let b2 = pdf1;
          misWeight = (b1 * b1) / ((b1 * b1 + b2 * b2) * 0.5);
        }
      }
    
      if (config.MIS_TYPE == NEXT_EVENT_ESTIMATION) {
        misWeight = pdf0 / (pdf0 + pdf1);
        if (config.USE_POWER_HEURISTIC == 1) {
          let b1 = pdf0;
          let b2 = pdf1;
          misWeight = (b1 * b1) / (b1 * b1 + b2 * b2);
        }
      }
    }
  
    return misWeight;
  }
`,Iu=`
fn getTexelFromTextureArrays(location: vec2i, uv: vec2f, uvRepeat: vec2f) -> vec4f {
  let repeatedUvs = fract(uv * uvRepeat);
  
  let resolution = location.x;
  var texel: vec4f;
  if (resolution == 0) {
    let indices = vec2u(
      u32(repeatedUvs.x * 128.0),
      u32(repeatedUvs.y * 128.0),
    );
    texel = textureLoad(textures128, indices, location.y, 0);
  }
  if (resolution == 1) {
    let indices = vec2u(
      u32(repeatedUvs.x * 512.0),
      u32(repeatedUvs.y * 512.0),
    );
    texel = textureLoad(textures512, indices, location.y, 0);
  }
  if (resolution == 2) {
    let indices = vec2u(
      u32(repeatedUvs.x * 1024),
      u32(repeatedUvs.y * 1024),
    );
    texel = textureLoad(textures1024, indices, location.y, 0);
  }
  return texel;
}
`,Nu=`
  fn getShadingNormal(
    mapLocation: vec2i, strength: f32, uvRepeat: vec2f, normal: vec3f, ray: Ray, 
    hitP: vec3f, uv: vec2f, triangle: Triangle, rayOffset: ptr<function, f32>
  ) -> vec3f {
    var uv1: vec2f;
    var uv2: vec2f;
    var textureSize = 0.0;

    let resolution = mapLocation.x;
    if (resolution == 0) {
      uv1 = uv + vec2f(1.0 / 128.0, 0.0) / uvRepeat;
      uv2 = uv + vec2f(0.0, 1.0 / 128.0) / uvRepeat;
      textureSize = 128.0;
    }
    if (resolution == 1) {
      uv1 = uv + vec2f(1.0 / 512.0, 0.0) / uvRepeat;
      uv2 = uv + vec2f(0.0, 1.0 / 512.0) / uvRepeat;
      textureSize = 512.0;
    }
    if (resolution == 2) {
      uv1 = uv + vec2f(1.0 / 1024.0, 0.0) / uvRepeat;
      uv2 = uv + vec2f(0.0, 1.0 / 1024.0) / uvRepeat;
      textureSize = 1024.0;
    }

    /* 
    the length of the texel in world space is useful to calculate a ray-offset
    to displace the ray along the normal
    the equation to calculate the length of the texel in world space is:
     
         Area(triangle) 
    ------------------------ = side^2
    Area(uv) * textureSize^2
    
    to lessen floating point precision errors I'm instead computing:

            sqrt(At)
    ----------------------- = side
    sqrt(Auv) * textureSize 
    */
    
    let tuv1uv0 = vec3f(triangle.uv1.x - triangle.uv0.x, triangle.uv1.y - triangle.uv0.y, 0) * vec3f(uvRepeat, 0.0);
    let tuv2uv0 = vec3f(triangle.uv2.x - triangle.uv0.x, triangle.uv2.y - triangle.uv0.y, 0) * vec3f(uvRepeat, 0.0);
    let triangleUvArea = length(cross(tuv1uv0, tuv2uv0)) * 0.5;

    let texelSideLength = sqrt(triangle.area) / (sqrt(triangleUvArea) * textureSize); 

    let t0 = getTexelFromTextureArrays(mapLocation,  uv, uvRepeat).x * texelSideLength * strength;
    let t1 = getTexelFromTextureArrays(mapLocation, uv1, uvRepeat).x * texelSideLength * strength;
    let t2 = getTexelFromTextureArrays(mapLocation, uv2, uvRepeat).x * texelSideLength * strength;

    // https://developer.download.nvidia.com/CgTutorial/cg_tutorial_chapter08.html
    let tx = vec3f(texelSideLength, 0.0, t1 - t0);
    let ty = vec3f(0.0, texelSideLength, t2 - t0);
    let sn = normalize(cross(tx, ty));

    // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
    var tangent = vec3f(0.0);
    var bitangent = vec3f(0.0);
    getTangentFromTriangle(triangle, normal, &tangent, &bitangent);
    // negated bitangent to switch handedness
    // I think bump / normal maps are authored with a right-handed system in mind
    // where z points towards "us"
    let tbn = mat3x3f(tangent, -bitangent, normal);
    let framedNormal = normalize( tbn * sn );
    
    // for now we're disabling real ray offsets calculations since they cause issues
    // when applying textures to large planes, I'm instead only applying a small epsilon
    // *rayOffset = t0;
    *rayOffset = 0.000001;
    return framedNormal;
  }
`;function Du(){return`
// keep in mind that configManager.shaderPart() might return different shader code if the
// internal shader configs have changed
${Le.shaderPart()}
// at the moment these have to be imported with this specific order
${Pu}
${Cu}
${Bu}
${zu}
${Iu}
${Nu}
${hl.shaderPart()}
${Es.shaderStruct()}
${Es.shaderCreateStruct()}
${Es.shaderShadeEmissive()}
${yn.shaderStruct()}
${yn.shaderCreateStruct()}
${yn.shaderShadeDiffuse()}
${Cs.shaderStruct()}
${Cs.shaderCreateStruct()}
${Cs.shaderShadeTorranceSparrow()}
${vn.shaderStruct()}
${vn.shaderCreateStruct()}
${vn.shaderShadeDielectric()}
${Fs.shaderShade()}
${wr.shaderStruct()}
${wr.shaderMethods()}
${Mn.shaderStruct()}
${Mn.shaderIntersectionFn()}
${mt.shaderStruct()}
${mt.shaderIntersect()}
${xr.shaderStruct()}
${xr.shaderIntersect()}
${_i.shaderStruct()}
${_i.shaderMethods()}
${ai.shaderStruct()}
${ai.shaderMethods()}
${Sn.shaderStruct()}
${Sn.shaderMethods()}
${ul.shaderMethods()}

@group(0) @binding(0) var<storage, read_write> radianceOutput: array<vec3f>;
@group(0) @binding(1) var<storage, read_write> samplesCount: array<u32>;
@group(0) @binding(2) var<uniform> canvasSize: vec2u;

// on a separate bind group since camera changes more often than data/canvasSize
@group(1) @binding(0) var<uniform> camera: Camera;
// seems like maximum bindgroup count is 4 so I need to add the camera sample here 
// unfortunately and I can't create a separate bindgroup for it
@group(1) @binding(1) var<uniform> cameraSamples: CameraSamples;
@group(1) @binding(2) var<uniform> config: Config;
@group(1) @binding(3) var<uniform> tile: Tile;

@group(2) @binding(0) var<storage, read_write> debugBuffer: array<f32>;
@group(2) @binding(1) var<uniform> debugPixelTarget: vec2<u32>;

@group(3) @binding(0) var<storage> triangles: array<Triangle>;
@group(3) @binding(1) var<storage> materialsData: array<f32>;
@group(3) @binding(2) var<storage> bvhData: array<BVHNode>;
@group(3) @binding(3) var<storage> lightsCDFData: array<LightCDFEntry>;
@group(3) @binding(4) var<storage> envmapPC2D: PC2D;
@group(3) @binding(5) var envmapTexture: texture_2d<f32>;
@group(3) @binding(6) var<uniform> envmapInfo: EnvmapInfo;
@group(3) @binding(7) var textures128: texture_2d_array<f32>;
@group(3) @binding(8) var textures512: texture_2d_array<f32>;
@group(3) @binding(9) var textures1024: texture_2d_array<f32>;

struct DebugInfo {
  tid: vec3u,
  isSelectedPixel: bool,
  bounce: i32,
  sample: u32,
  debugLogIndex: u32,
} 
// https://www.w3.org/TR/WGSL/#address-spaces-private
var<private> debugInfo = DebugInfo(vec3u(0,0,0), false, 0, 0, 0);
fn debugLog(value: f32) {
  debugBuffer[debugInfo.debugLogIndex] = value;
  debugInfo.debugLogIndex++;
}

// ***** Things to remember:  (https://webgpureport.org/)
// maxStorageBuffersPerShaderStage = 8
// maxUniformBuffersPerShaderStage = 12 (maxUniformBuffersPerShaderStage)
// maxBindingsPerBindGroup = 1000
// maxSampledTexturesPerShaderStage = 16
// maxTextureDimension3D = 2048

@compute @workgroup_size(8, 8) fn computeSomething(
  @builtin(global_invocation_id) gid: vec3<u32>,
  @builtin(local_invocation_id) lid: vec3<u32>,
) {
  let tid = vec3u(tile.x + gid.x, tile.y + gid.y, 0);
  if (tid.x >= canvasSize.x || tid.y >= canvasSize.y) { return; }

  let idx = tid.y * canvasSize.x + tid.x;

  debugInfo.tid = tid;
  debugInfo.isSelectedPixel = false;
  if (debugPixelTarget.x == tid.x && debugPixelTarget.y == tid.y) {
    debugInfo.isSelectedPixel = true;
  }
  debugInfo.sample = samplesCount[idx];

  var rayContribution: f32;
  var ray = getCameraRay(tid, idx, &rayContribution);

  var reflectance = vec3f(1.0);
  var rad = vec3f(0.0);
  for (var i = 0; i < config.BOUNCES_COUNT; i++) {
    if (rayContribution == 0.0) { break; }

    debugInfo.bounce = i;

    let ires = bvhIntersect(ray);

    if (ires.hit) {
      shade(ires, &ray, &reflectance, &rad, tid, i);
    } else if (shaderConfig.HAS_ENVMAP) {
      // we bounced off into the envmap
      let envmapRad = getEnvmapRadiance(ray.direction);
      rad += reflectance * envmapRad;
      break;
    }

    if (reflectance.x == 0.0 && reflectance.y == 0.0 && reflectance.z == 0.0) {
      break;
    }
  }

  if (debugInfo.isSelectedPixel) {
    // debugLog(999);
    radianceOutput[idx] += vec3f(100, 0, 100);
  } else {
    radianceOutput[idx] += rad * rayContribution;
  }

  samplesCount[idx] += 1;
}
`}function Bs(l,e){return l.createBindGroupLayout({entries:e.map(({visibility:t,type:i},s)=>({binding:s,visibility:t,buffer:{type:i}}))})}const Fu=`
@group(0) @binding(0) var<storage, read_write> radianceOutput: array<vec3f>;
@group(0) @binding(1) var<storage, read_write> samplesCount: array<u32>;
@group(0) @binding(2) var<uniform> canvasSize: vec2u;

@compute @workgroup_size(8, 8) fn resetCanvas(
  @builtin(global_invocation_id) gid: vec3<u32>,
  @builtin(local_invocation_id) lid: vec3<u32>,
) {
  if (gid.x >= canvasSize.x || gid.y >= canvasSize.y) { return; }

  let idx = gid.y * canvasSize.x + gid.x;
  radianceOutput[idx] = vec3f(0,0,0);
  samplesCount[idx] = 0;
}
`;class Lu{constructor(e){M(this,"device");M(this,"pipeline");M(this,"bindGroup0",null);M(this,"canvasSizeUniformBuffer");M(this,"canvasSize",null);this.device=e;const t=e.createShaderModule({label:"reset module",code:Fu}),i=e.createPipelineLayout({bindGroupLayouts:[Bs(e,[{visibility:GPUShaderStage.COMPUTE,type:"storage"},{visibility:GPUShaderStage.COMPUTE,type:"storage"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"}])]});this.pipeline=e.createComputePipeline({label:"reset pipeline",layout:i,compute:{module:t,entryPoint:"resetCanvas"}}),this.canvasSizeUniformBuffer=e.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"reset bindgroup",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}reset(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined bind groups or canvasSize");const e=Ei(Math.ceil(this.canvasSize.x/8),Math.ceil(this.canvasSize.y/8)),t=this.device.createCommandEncoder({label:"reset encoder"}),i=t.beginComputePass({label:"reset pass"});i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.dispatchWorkgroups(e.x,e.y),i.end();const s=t.finish();this.device.queue.submit([s])}}class ku{constructor(e){M(this,"querySet");M(this,"resolveBuffer");M(this,"resultBuffer");M(this,"average",[]);this.querySet=e.createQuerySet({type:"timestamp",count:2}),this.resolveBuffer=e.createBuffer({size:this.querySet.count*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=e.createBuffer({size:this.resolveBuffer.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}updateComputePassDescriptor(e){e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}resolve(e){e.resolveQuerySet(this.querySet,0,this.querySet.count,this.resolveBuffer,0),this.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.resultBuffer.size)}getDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());e(Number(i[1]-i[0])/1e6),this.resultBuffer.unmap()}):t()})}reset(){this.average=[]}getAverageDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());this.average.push(Number(i[1]-i[0])/1e6),this.average.length>30&&this.average.splice(0,1),e(this.average.reduce((s,n)=>s+n/this.average.length)),this.resultBuffer.unmap()}):t()})}}const Ou=`
struct VSOutput {
  @builtin(position) position: vec4f,
  @location(0) texcoord: vec2f,
};

@group(0) @binding(0) var tSampler: sampler;
@group(0) @binding(1) var texture: texture_2d<f32>;

@vertex fn vs(
  @builtin(vertex_index) vertexIndex : u32
) -> VSOutput {
  let pos = array(
    vec2f(0.0,  0.0),  // center
    vec2f(1.0,  0.0),  // right, center
    vec2f(0.0,  1.0),  // center, top

    // 2st triangle
    vec2f(0.0,  1.0),  // center, top
    vec2f(1.0,  0.0),  // right, center
    vec2f(1.0,  1.0),  // right, top
  );

  var vsOutput: VSOutput;
  let xy = pos[vertexIndex];

  vsOutput.position = vec4f(xy * 2 - 1, 0.0, 1.0);
  vsOutput.texcoord = xy;
  
  return vsOutput;
}

@fragment fn fs(fsInput: VSOutput) -> @location(0) vec4f {
  return textureSample(texture, tSampler, fsInput.texcoord);
}
`;class Uu{constructor(){M(this,"device");M(this,"context");M(this,"pipeline");M(this,"renderSampler");M(this,"bindGroup0",null);M(this,"sampler");M(this,"textures128");M(this,"textures512");M(this,"textures1024");this.context=jt.context;let e=jt.device;this.device=e;const t=this.device.createShaderModule({label:"render texture shader",code:Ou});this.pipeline=e.createRenderPipeline({label:"mip level generator pipeline",layout:"auto",vertex:{module:t},fragment:{module:t,targets:[{format:"rgba8unorm"}]}}),this.renderSampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.sampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.textures128=this.device.createTexture({label:"dummy texture array segment 128 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures512=this.device.createTexture({label:"dummy texture array segment 512 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures1024=this.device.createTexture({label:"dummy texture array segment 1024 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})}update(e){let t=0,i=[],s=0,n=[],r=0,o=[];for(let h=0;h<e.length;h++){let c=e[h];for(let u in c.textures){let f=c.textures[u],d=Math.max(f.width,f.height);d<=128?(c.texturesLocation[u]=new Z(0,t),t++,i.push({image:f,flipY:c.flipTextureY})):d<=512?(c.texturesLocation[u]=new Z(1,s),s++,n.push({image:f,flipY:c.flipTextureY})):(c.texturesLocation[u]=new Z(2,r),r++,o.push({image:f,flipY:c.flipTextureY}))}}t>0&&(this.textures128=this.device.createTexture({label:"texture array segment 128 texture",size:[128,128,t],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),s>0&&(this.textures512=this.device.createTexture({label:"texture array segment 512 texture",size:[512,512,s],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),r>0&&(this.textures1024=this.device.createTexture({label:"texture array segment 1024 texture",size:[1024,1024,r],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}));const a=(h,c,u)=>{const f=this.device.createTexture({size:[u.image.width,u.image.height],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});this.device.queue.copyExternalImageToTexture({source:u.image,flipY:u.flipY},{texture:f},{width:u.image.width,height:u.image.height}),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.renderSampler},{binding:1,resource:f.createView()}]});let d=this.textures128;h=="512"&&(d=this.textures512),h=="1024"&&(d=this.textures1024),this.render(d,c)};i.forEach((h,c)=>{a("128",c,h)}),n.forEach((h,c)=>{a("512",c,h)}),o.forEach((h,c)=>{a("1024",c,h)})}render(e,t){if(!this.bindGroup0)throw new Error("undefined render bind group");const i={label:"our basic canvas renderPass",colorAttachments:[{view:e.createView({dimension:"2d-array",baseArrayLayer:t,arrayLayerCount:1}),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},s=this.device.createCommandEncoder({label:"render encoder"}),n=s.beginRenderPass(i);n.setPipeline(this.pipeline),n.setBindGroup(0,this.bindGroup0),n.draw(6),n.end();const r=s.finish();this.device.queue.submit([r])}}class cl extends wr{constructor(){super();M(this,"target");M(this,"keys",{});M(this,"disposed");M(this,"rotationChange",!1);M(this,"movementChange",!1);M(this,"isPointerDown",!1);M(this,"pointerDownCoords",new Z(-1,-1));M(this,"theta");M(this,"phi");this.target=new S(0,0,0),this.theta=Math.PI*.5,this.phi=0,this.disposed=!1,window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("keyup",this.handleKeyUp.bind(this)),this.loop()}setCanvasContainer(t){super.setCanvasContainer(t),t.addEventListener("pointerdown",this.handlePointerDown.bind(this)),t.addEventListener("pointerup",this.handlePointerUp.bind(this)),t.addEventListener("pointermove",this.handlePointerMove.bind(this))}dispose(){super.dispose(),window.removeEventListener("keydown",this.handleKeyDown.bind(this)),window.removeEventListener("keyup",this.handleKeyUp.bind(this)),this.canvasContainerEl.removeEventListener("pointerdown",this.handlePointerDown.bind(this)),this.canvasContainerEl.removeEventListener("pointerup",this.handlePointerUp.bind(this)),this.canvasContainerEl.removeEventListener("pointermove",this.handlePointerMove.bind(this)),this.disposed=!0}loop(){this.theta<.001&&(this.theta=.001),this.theta>Math.PI-.001&&(this.theta=Math.PI-.001);let i=!1;if(this.keys.shift&&(i=!0),this.rotationChange){const a=new S(0,1,0);a.applyAxisAngle(new S(-1,0,0),this.theta),a.applyAxisAngle(new S(0,1,0),this.phi);const h=this.position.clone().sub(this.target).length(),c=this.target.clone().add(a.clone().multiplyScalar(h));this.position.copy(c)}let{basisX:s,basisY:n,basisZ:r}=this.getBasis(),o=i?.1:1;if(this.keys.w){let a=r.clone().multiplyScalar(this.movementSpeed*o);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.s){let a=r.clone().multiplyScalar(-this.movementSpeed*o);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.d){let a=s.clone().multiplyScalar(this.movementSpeed*.7*o);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.a){let a=s.clone().multiplyScalar(-this.movementSpeed*.7*o);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.q){let a=n.clone().multiplyScalar(this.movementSpeed*.3*o);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.e){let a=n.clone().multiplyScalar(-this.movementSpeed*.3*o);this.target.add(a),this.position.add(a),this.movementChange=!0}(this.rotationChange||this.movementChange)&&(this.calculateMatrix(),this.e.fireEvent("change"),this.rotationChange=!1,this.movementChange=!1),this.disposed||requestAnimationFrame(this.loop.bind(this))}handlePointerDown(t){this.canvasContainerEl&&(this.isPointerDown=!0,this.pointerDownCoords=new Z(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight))}handlePointerUp(t){this.isPointerDown=!1}handlePointerMove(t){if(!this.isPointerDown)return;let i=new Z(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight),s=i.clone().sub(this.pointerDownCoords);if(s.x==0&&s.y==0)return;let n=1;this.keys.shift&&(n=.1),this.theta+=-s.y*this.rotationSpeed*5*n,this.phi+=s.x*this.rotationSpeed*5*n,this.rotationChange=!0,this.pointerDownCoords=i}handleKeyDown(t){this.keys[t.key.toLowerCase()]=!0}handleKeyUp(t){this.keys[t.key.toLowerCase()]=!1}set(t,i){this.position=t,this.target=i;let s=this.position.clone().sub(this.target).normalize();this.theta=Math.acos(s.y),this.phi=-Math.atan2(s.z,s.x)-Math.PI*.5,this.calculateMatrix(),this.e.fireEvent("change")}getBasis(){const t=this.target.clone().sub(this.position).normalize(),i=new S(0,1,0),s=t,n=i.clone().cross(s).normalize(),r=s.clone().cross(n).normalize();return{basisX:n,basisY:r,basisZ:s}}calculateMatrix(){let{basisX:t,basisY:i,basisZ:s}=this.getBasis();this.rotationMatrix=new fe().makeBasis(t,i,s)}}class Vu{constructor(e){M(this,"passPerformance");M(this,"device");M(this,"pipeline",null);M(this,"bindGroupLayouts");M(this,"layout");M(this,"configManager",Le);M(this,"textureArraySegment",new Uu);M(this,"bindGroup0",null);M(this,"bindGroup1",null);M(this,"bindGroup2",null);M(this,"bindGroup3",null);M(this,"canvasSize",null);M(this,"canvasSizeUniformBuffer");M(this,"configUniformBuffer");M(this,"tileUniformBuffer");M(this,"debugBufferSize");M(this,"debugBuffer");M(this,"debugPixelTargetBuffer");M(this,"debugReadBuffer");M(this,"trianglesBuffer");M(this,"materialsBuffer");M(this,"bvhBuffer");M(this,"lightsCDFBuffer");M(this,"envmapPC2DBuffer");M(this,"envmapInfoBuffer");M(this,"resetSegment");M(this,"tileSequence");M(this,"requestShaderCompilation",!1);M(this,"scene");M(this,"camera");M(this,"bvh");let t=jt.device;this.device=t,this.tileSequence=e,this.resetSegment=new Lu(t),this.passPerformance=new ku(t),this.bindGroupLayouts=[Bs(t,[{visibility:GPUShaderStage.COMPUTE,type:"storage"},{visibility:GPUShaderStage.COMPUTE,type:"storage"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"}]),Bs(t,[{visibility:GPUShaderStage.COMPUTE,type:"uniform"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"}]),Bs(t,[{visibility:GPUShaderStage.COMPUTE,type:"storage"},{visibility:GPUShaderStage.COMPUTE,type:"uniform"}]),t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,texture:{}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:7,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array"}},{binding:8,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array"}},{binding:9,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array"}}]})],this.layout=t.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts}),this.canvasSizeUniformBuffer=t.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.configUniformBuffer=t.createBuffer({size:Le.bufferSize,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.tileUniformBuffer=t.createBuffer({size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugBufferSize=100,this.debugBuffer=this.device.createBuffer({size:4*this.debugBufferSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.debugPixelTargetBuffer=this.device.createBuffer({size:4*2,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugReadBuffer=this.device.createBuffer({size:4*this.debugBufferSize,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.setDebugPixelTarget(0,0),Le.e.addEventListener("config-update",()=>{this.updateConfig()}),this.requestShaderCompilation=!0}setDebugPixelTarget(e,t){this.device.queue.writeBuffer(this.debugPixelTargetBuffer,0,new Uint32Array([e,t])),this.device.queue.writeBuffer(this.debugBuffer,0,new Float32Array(Array.from({length:this.debugBufferSize},(i,s)=>0))),this.bindGroup2=this.device.createBindGroup({label:"compute bindgroup - debug buffer",layout:this.bindGroupLayouts[2],entries:[{binding:0,resource:{buffer:this.debugBuffer}},{binding:1,resource:{buffer:this.debugPixelTargetBuffer}}]})}async logDebugResult(){await this.debugReadBuffer.mapAsync(GPUMapMode.READ);const e=new Float32Array(this.debugReadBuffer.getMappedRange());console.log(e),this.debugReadBuffer.unmap()}onUpdateCamera(){this.camera&&(this.resetSamplesAndTile(),hi.update(e=>(e.position=this.camera.position.clone(),this.camera instanceof cl&&(e.target=this.camera.target.clone()),e)))}updateConfig(){var i;this.resetSamplesAndTile(),this.device.queue.writeBuffer(this.configUniformBuffer,0,this.configManager.getOptionsBuffer());let e=(i=this.scene)==null?void 0:i.envmap,t=!1;if(e&&Le.options.ENVMAP_SCALE!=e.scale){e.scale=Le.options.ENVMAP_SCALE;let{LightsCDFBufferData:s,LightsCDFBufferDataByteSize:n}=this.bvh.getLightsCDFBufferData();this.device.queue.writeBuffer(this.lightsCDFBuffer,0,s),t=!0}if(e&&(Le.options.ENVMAP_ROTX!=e.rotX||Le.options.ENVMAP_ROTY!=e.rotY)&&(e.rotX=Le.options.ENVMAP_ROTX,e.rotY=Le.options.ENVMAP_ROTY,t=!0),e&&t&&e.updateEnvmapInfoBuffer(this.device,this.envmapInfoBuffer),e&&Le.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION!=Le.prevOptions.ENVMAP_USE_COMPENSATED_DISTRIBUTION){let s=Le.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?e.compensatedDistribution.getBufferData():e.distribution.getBufferData();this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,s)}}updateTile(e){this.device.queue.writeBuffer(this.tileUniformBuffer,0,new Uint32Array([e.x,e.y,e.w,e.h]))}getFocusDistanceFromScreenPoint(e){if(!this.canvasSize||!this.bvh)return-1;let t=this.camera.screenPointToRay(e,this.canvasSize),i=this.bvh.intersectRay(t.ro,t.rd);return i.hit?this.camera.getFocusDistanceFromIntersectionPoint(i.hitPoint):-1}updateScene(e){this.resetSamplesAndTile(),this.requestShaderCompilation=!0,this.scene=e,this.textureArraySegment.update(e.materials),this.camera&&this.camera.dispose(),this.camera=e.camera,this.camera.e.addEventListener("change",this.onUpdateCamera.bind(this)),this.onUpdateCamera(),this.bindGroup1=this.device.createBindGroup({label:"compute bindgroup - camera struct",layout:this.bindGroupLayouts[1],entries:[{binding:0,resource:{buffer:this.camera.cameraUniformBuffer}},{binding:1,resource:{buffer:this.camera.cameraSampleUniformBuffer}},{binding:2,resource:{buffer:this.configUniformBuffer}},{binding:3,resource:{buffer:this.tileUniformBuffer}}]});const t=new xr(e);this.bvh=t;let{trianglesBufferData:i,trianglesBufferDataByteSize:s,BVHBufferData:n,BVHBufferDataByteSize:r}=t.getBufferData(),{LightsCDFBufferData:o,LightsCDFBufferDataByteSize:a}=t.getLightsCDFBufferData(),h=new Float32Array(e.materials.map(d=>d.getFloatsArray()).flat()),c=e.envmap||new Sn;Le.setStoreProperty({ENVMAP_SCALE:c.scale,ENVMAP_ROTX:c.rotX,ENVMAP_ROTY:c.rotY,shaderConfig:{...Le.options.shaderConfig,HAS_ENVMAP:!!e.envmap}});let u=Le.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?c.compensatedDistribution.getBufferData():c.distribution.getBufferData(),{texture:f}=c.getTexture(this.device);this.trianglesBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.materialsBuffer=this.device.createBuffer({size:h.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.bvhBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lightsCDFBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.envmapPC2DBuffer=this.device.createBuffer({size:u.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.envmapInfoBuffer=c.createEnvmapInfoBuffer(this.device),this.device.queue.writeBuffer(this.trianglesBuffer,0,i),this.device.queue.writeBuffer(this.materialsBuffer,0,h),this.device.queue.writeBuffer(this.bvhBuffer,0,n),this.device.queue.writeBuffer(this.lightsCDFBuffer,0,o),this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,u),this.bindGroup3=this.device.createBindGroup({label:"compute bindgroup - scene data",layout:this.bindGroupLayouts[3],entries:[{binding:0,resource:{buffer:this.trianglesBuffer}},{binding:1,resource:{buffer:this.materialsBuffer}},{binding:2,resource:{buffer:this.bvhBuffer}},{binding:3,resource:{buffer:this.lightsCDFBuffer}},{binding:4,resource:{buffer:this.envmapPC2DBuffer}},{binding:5,resource:f.createView()},{binding:6,resource:{buffer:this.envmapInfoBuffer}},{binding:7,resource:this.textureArraySegment.textures128.createView({dimension:"2d-array"})},{binding:8,resource:this.textureArraySegment.textures512.createView({dimension:"2d-array"})},{binding:9,resource:this.textureArraySegment.textures1024.createView({dimension:"2d-array"})}]})}resize(e,t,i){this.resetSegment.resize(e,t,i),this.tileSequence.setCanvasSize(e),this.resetSamplesAndTile(),this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"compute bindgroup",layout:this.bindGroupLayouts[0],entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}resetSamplesAndTile(){this.tileSequence.resetTile(),Ne.reset()}increaseTileSize(){this.tileSequence.canTileSizeBeIncreased()&&(this.tileSequence.increaseTileSize(),this.camera.updateCameraSample())}decreaseTileSize(){this.tileSequence.canTileSizeBeDecreased()&&(this.tileSequence.decreaseTileSize(),this.camera.updateCameraSample())}createPipeline(){const e=this.device.createShaderModule({label:"compute module",code:Du()});this.pipeline=this.device.createComputePipeline({label:"compute pipeline",layout:this.layout,compute:{module:e,entryPoint:"computeSomething"}})}compute(){if(this.requestShaderCompilation&&(this.createPipeline(),this.requestShaderCompilation=!1),!this.pipeline||!this.bindGroup0||!this.bindGroup1||!this.bindGroup2||!this.bindGroup3||!this.canvasSize)throw new Error("undefined bind groups / pipeline / canvasSize");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");Ne.count===0&&(this.tileSequence.resetTile(),this.resetSegment.reset(),this.camera.resetSampler());let e=this.tileSequence.getNextTile(()=>{this.camera.updateCameraSample(),Ne.increment()});this.updateTile(e);const t=this.tileSequence.getWorkGroupCount(),i=this.device.createCommandEncoder({label:"compute encoder"}),s={label:"compute pass"};this.passPerformance.updateComputePassDescriptor(s);const n=i.beginComputePass(s);n.setPipeline(this.pipeline),n.setBindGroup(0,this.bindGroup0),n.setBindGroup(1,this.bindGroup1),n.setBindGroup(2,this.bindGroup2),n.setBindGroup(3,this.bindGroup3),n.dispatchWorkgroups(t.x,t.y),n.end(),this.tileSequence.isTilePerformanceMeasureable()&&this.passPerformance.resolve(i),i.copyBufferToBuffer(this.debugBuffer,0,this.debugReadBuffer,0,this.debugBuffer.size);const r=i.finish();this.device.queue.submit([r])}}const Gu=`
struct VSOutput {
  @builtin(position) position: vec4f,
  @location(0) texcoord: vec2f,
};

@group(0) @binding(0) var<storage> radianceInput: array<vec3f>;
@group(0) @binding(1) var<storage> samplesCount: array<u32>;
@group(0) @binding(2) var<uniform> canvasSize: vec2u;
@group(0) @binding(3) var<uniform> toneMappingExposure: f32;

@vertex fn vs(
  @builtin(vertex_index) vertexIndex : u32
) -> VSOutput {
  let pos = array(
    vec2f(0.0,  0.0),  // center
    vec2f(1.0,  0.0),  // right, center
    vec2f(0.0,  1.0),  // center, top

    // 2st triangle
    vec2f(0.0,  1.0),  // center, top
    vec2f(1.0,  0.0),  // right, center
    vec2f(1.0,  1.0),  // right, top
  );

  var vsOutput: VSOutput;
  let xy = pos[vertexIndex];

  vsOutput.position = vec4f(xy * 2 - 1, 0.0, 1.0);
  vsOutput.texcoord = xy;
  
  return vsOutput;
}

fn RRTAndODTFit( v: vec3f ) -> vec3f {
  let a: vec3f = v * ( v + 0.0245786 ) - 0.000090537;
  let b: vec3f = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}

fn ACESFilmicToneMapping( _color: vec3f ) -> vec3f {
  const ACESInputMat: mat3x3f = mat3x3f(
    vec3f( 0.59719, 0.07600, 0.02840 ), vec3f( 0.35458, 0.90834, 0.13383 ), vec3f( 0.04823, 0.01566, 0.83777 )
  );
  const ACESOutputMat: mat3x3f = mat3x3f(
    vec3f(  1.60475, -0.10208, -0.00327 ), vec3f( -0.53108, 1.10813, -0.07276 ), vec3f( -0.07367, -0.00605, 1.07602 )
  );
  var color = _color;
  color *= toneMappingExposure / 0.6;
  color = ACESInputMat * color;
  color = RRTAndODTFit( color );
  color = ACESOutputMat * color;
  return clamp( color, vec3f(0.0), vec3f(1.0) );
}

fn lessThanEqual(val1: vec3f, val2: vec3f) -> vec3f {
  var res = vec3f(0.0);
  if (val1.x <= val2.x) { res.x = 1.0; }
  if (val1.y <= val2.y) { res.y = 1.0; }
  if (val1.z <= val2.z) { res.z = 1.0; }
  return res;
}

fn LinearTosRGB( value: vec4f ) -> vec4f {
  return vec4f( mix( pow( value.rgb, vec3f( 0.41666 ) ) * 1.055 - vec3f( 0.055 ), value.rgb * 12.92, vec3f( lessThanEqual( value.rgb, vec3f( 0.0031308 ) ) ) ), value.a );
}

@fragment fn fs(fsInput: VSOutput) -> @location(0) vec4f {
  let x = u32(floor(fsInput.texcoord.x * f32(canvasSize.x)));
  let y = u32(floor(fsInput.texcoord.y * f32(canvasSize.y)));
  let idx: u32 = y * canvasSize.x + x;

  let radiance = radianceInput[idx] / f32(samplesCount[idx]);
  let tonemapped = ACESFilmicToneMapping(radiance);
  let gammaCorrected = LinearTosRGB(vec4f(tonemapped, 1.0));

  return gammaCorrected;  


  // Tile filling rate test

  // var col = vec4f(1, 0, 0, 1);
  // if (samplesCount[idx] % 3 == 1) { col = vec4f(0, 1, 0, 1); }
  // if (samplesCount[idx] % 3 == 2) { col = vec4f(0, 0, 1, 1); }

  // col = vec4f(
  //   f32(samplesCount[idx]) / 50.0, 
  //   f32(samplesCount[idx]) / 50.0,
  //   f32(samplesCount[idx]) / 50.0,
  //   1);

  // return col;
}
`;class qu{constructor(e,t){M(this,"device");M(this,"context");M(this,"pipeline");M(this,"bindGroup0",null);M(this,"canvasSize");M(this,"canvasSizeUniformBuffer");M(this,"scene");M(this,"camera");this.canvasSize=null,this.context=e;let i=jt.device;this.device=i;const s=i.createShaderModule({label:"render shader",code:Gu}),n=i.createPipelineLayout({bindGroupLayouts:[Bs(i,[{visibility:GPUShaderStage.FRAGMENT,type:"read-only-storage"},{visibility:GPUShaderStage.FRAGMENT,type:"read-only-storage"},{visibility:GPUShaderStage.FRAGMENT,type:"uniform"},{visibility:GPUShaderStage.FRAGMENT,type:"uniform"}])]});this.pipeline=i.createRenderPipeline({label:"render pipeline",layout:n,vertex:{module:s,entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:t}]}}),this.canvasSizeUniformBuffer=i.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}updateScene(e){this.scene=e,this.camera=e.camera}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t,size:t.size}},{binding:1,resource:{buffer:i,size:i.size}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}},{binding:3,resource:{buffer:this.camera.exposureUniformBuffer}}]})}render(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined render bind group");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");const e={label:"our basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},t=this.device.createCommandEncoder({label:"render encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.draw(6),i.end();const s=t.finish();this.device.queue.submit([s])}}function Hu(l,e){window.addEventListener("keypress",t=>{t.key==l&&e()})}function _r(l,e,t){var a;let i=[];l=l.toNonIndexed(),t&&l.applyMatrix4(t);let s=l.attributes.position.array,n=l.attributes.normal.array,r=((a=l.attributes.uv)==null?void 0:a.array)||[],o=r.length>0;for(let h=0;h<l.attributes.position.count;h+=3){let c=s[h*3+0],u=s[h*3+1],f=s[h*3+2],d=n[h*3+0],p=n[h*3+1],g=n[h*3+2],y=Ei(r[h*2+0],r[h*2+1]),m=s[(h+1)*3+0],_=s[(h+1)*3+1],b=s[(h+1)*3+2],v=n[(h+1)*3+0],T=n[(h+1)*3+1],A=n[(h+1)*3+2],I=Ei(r[(h+1)*2+0],r[(h+1)*2+1]),E=s[(h+2)*3+0],U=s[(h+2)*3+1],C=s[(h+2)*3+2],B=n[(h+2)*3+0],N=n[(h+2)*3+1],k=n[(h+2)*3+2],z=Ei(r[(h+2)*2+0],r[(h+2)*2+1]);i.push(new Mn(Xi(c,u,f),Xi(m,_,b),Xi(E,U,C),e,Xi(d,p,g),Xi(v,T,A),Xi(B,N,k),o?y:void 0,o?I:void 0,o?z:void 0))}return i}function ar(l,e,t=!1){let i=[];return t&&(l.updateMatrix(),l.updateMatrixWorld(!0),l instanceof fi)?(i=[...i,..._r(l.geometry,e,l.matrixWorld)],i):(l.traverse(s=>{if(s.updateMatrix(),s.updateMatrixWorld(!0),s instanceof fi){let n=s,r=n.geometry;i=[...i,..._r(r,e,n.matrixWorld)]}}),i)}function Ja(l,e){if(e===Wl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),l;if(e===cr||e===$o){let t=l.getIndex();if(t===null){const r=[],o=l.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);l.setIndex(r),t=l.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const i=t.count-2,s=[];if(e===cr)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=l.clone();return n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),l}class Wu extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ku(t)}),this.register(function(t){return new rc(t)}),this.register(function(t){return new ac(t)}),this.register(function(t){return new oc(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new tc(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ic(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new nc(t)}),this.register(function(t){return new sc(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new hc(t)})}load(e,t,i,s){const n=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const h=As.extractUrlBase(e);r=As.resolveURL(h,this.path)}else r=As.extractUrlBase(e);this.manager.itemStart(e);const o=function(h){s?s(h):console.error(h),n.manager.itemError(e),n.manager.itemEnd(e)},a=new Dr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(h){try{n.parse(h,r,function(c){t(c),n.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let n;const r={},o={},a=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===fl){try{r[xe.KHR_BINARY_GLTF]=new uc(e)}catch(u){s&&s(u);return}n=JSON.parse(r[xe.KHR_BINARY_GLTF].content)}else n=JSON.parse(a.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Sc(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){const u=n.extensionsUsed[c],f=n.extensionsRequired||[];switch(u){case xe.KHR_MATERIALS_UNLIT:r[u]=new Xu;break;case xe.KHR_DRACO_MESH_COMPRESSION:r[u]=new cc(n,this.dracoLoader);break;case xe.KHR_TEXTURE_TRANSFORM:r[u]=new fc;break;case xe.KHR_MESH_QUANTIZATION:r[u]=new dc;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(r),h.setPlugins(o),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,n){i.parse(e,t,s,n)})}}function ju(){let l={};return{get:function(e){return l[e]},add:function(e,t){l[e]=t},remove:function(e){delete l[e]},removeAll:function(){l={}}}}const xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Yu{constructor(e){this.parser=e,this.name=xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let h;const c=new Re(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],ft);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":h=new du(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new cu(c),h.distance=u;break;case"spot":h=new hu(c),h.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,h.angle=a.spot.outerConeAngle,h.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return h.position.set(0,0,0),h.decay=2,oi(h,a),a.intensity!==void 0&&(h.intensity=a.intensity),h.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return i._getNodeRef(t.cache,o,a)})}}class Xu{constructor(){this.name=xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ki}extendParams(e,t,i){const s=[];e.color=new Re(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const r=n.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],ft),e.opacity=r[3]}n.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",n.baseColorTexture,ut))}return Promise.all(s)}}class $u{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class Ku{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(o,o)}return Promise.all(n)}}class Zu{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}}class Ju{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],ft)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ut)),r.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}}class Qu{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}}class ec{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],ft),Promise.all(n)}}class tc{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class ic{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],ft),r.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,ut)),Promise.all(n)}}class sc{constructor(e){this.parser=e,this.name=xe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(i.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}}class nc{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Kt}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(i.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}}class rc{constructor(e){this.parser=e,this.name=xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const n=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,r)}}class ac{constructor(e){this.parser=e,this.name=xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],o=s.images[r.source];let a=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,r.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oc{constructor(e){this.parser=e,this.name=xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],o=s.images[r.source];let a=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,r.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lc{constructor(e){this.name=xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){const a=s.byteOffset||0,h=s.byteLength||0,c=s.count,u=s.byteStride,f=new Uint8Array(o,a,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,u,f,s.mode,s.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(c*u);return r.decodeGltfBuffer(new Uint8Array(d),c,u,f,s.mode,s.filter),d})})}else return null}}class hc{constructor(e){this.name=xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==pt.TRIANGLES&&h.mode!==pt.TRIANGLE_STRIP&&h.mode!==pt.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=i.extensions[this.name].attributes,o=[],a={};for(const h in r)o.push(this.parser.getDependency("accessor",r[h]).then(c=>(a[h]=c,a[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const c=h.pop(),u=c.isGroup?c.children:[c],f=h[0].count,d=[];for(const p of u){const g=new fe,y=new S,m=new di,_=new S(1,1,1),b=new Hh(p.geometry,p.material,f);for(let v=0;v<f;v++)a.TRANSLATION&&y.fromBufferAttribute(a.TRANSLATION,v),a.ROTATION&&m.fromBufferAttribute(a.ROTATION,v),a.SCALE&&_.fromBufferAttribute(a.SCALE,v),b.setMatrixAt(v,g.compose(y,m,_));for(const v in a)if(v==="_COLOR_0"){const T=a[v];b.instanceColor=new gr(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,a[v]);De.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),d.push(b)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const fl="glTF",xs=12,Qa={JSON:1313821514,BIN:5130562};class uc{constructor(e){this.name=xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xs,n=new DataView(e,xs);let r=0;for(;r<s;){const o=n.getUint32(r,!0);r+=4;const a=n.getUint32(r,!0);if(r+=4,a===Qa.JSON){const h=new Uint8Array(e,xs+r,o);this.content=i.decode(h)}else if(a===Qa.BIN){const h=xs+r;this.body=e.slice(h,h+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cc{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},h={};for(const c in r){const u=Sr[c]||c.toLowerCase();o[u]=r[c]}for(const c in e.attributes){const u=Sr[c]||c.toLowerCase();if(r[c]!==void 0){const f=i.accessors[e.attributes[c]],d=Qi[f.componentType];h[u]=d.name,a[u]=f.normalized===!0}}return t.getDependency("bufferView",n).then(function(c){return new Promise(function(u,f){s.decodeDracoFile(c,function(d){for(const p in d.attributes){const g=d.attributes[p],y=a[p];y!==void 0&&(g.normalized=y)}u(d)},o,h,ft,f)})})}}class fc{constructor(){this.name=xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dc{constructor(){this.name=xe.KHR_MESH_QUANTIZATION}}class dl extends Ds{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let r=0;r!==s;r++)t[r]=i[n+r];return t}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,h=o*3,c=s-t,u=(i-t)/c,f=u*u,d=f*u,p=e*h,g=p-h,y=-2*d+3*f,m=d-f,_=1-y,b=m-f+u;for(let v=0;v!==o;v++){const T=r[g+v+o],A=r[g+v+a]*c,I=r[p+v+o],E=r[p+v]*c;n[v]=_*T+b*A+y*I+m*E}return n}}const pc=new di;class mc extends dl{interpolate_(e,t,i,s){const n=super.interpolate_(e,t,i,s);return pc.fromArray(n).normalize().toArray(n),n}}const pt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eo={9728:Rs,9729:ci,9984:Ll,9985:Ol,9986:kl,9987:En},to={33071:Si,33648:ur,10497:Ps},or={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gc={CUBICSPLINE:void 0,LINEAR:es,STEP:zs},lr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yc(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new Nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn})),l.DefaultMaterial}function bi(l,e,t){for(const i in t.extensions)l[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function oi(l,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(l.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vc(l,e,t){let i=!1,s=!1,n=!1;for(let h=0,c=e.length;h<c;h++){const u=e[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(n=!0),i&&s&&n)break}if(!i&&!s&&!n)return Promise.resolve(l);const r=[],o=[],a=[];for(let h=0,c=e.length;h<c;h++){const u=e[h];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):l.attributes.position;r.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):l.attributes.normal;o.push(f)}if(n){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):l.attributes.color;a.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(h){const c=h[0],u=h[1],f=h[2];return i&&(l.morphAttributes.position=c),s&&(l.morphAttributes.normal=u),n&&(l.morphAttributes.color=f),l.morphTargetsRelative=!0,l})}function xc(l,e){if(l.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)l.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(l.morphTargetInfluences.length===t.length){l.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)l.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bc(l){let e;const t=l.extensions&&l.extensions[xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hr(t.attributes):e=l.indices+":"+hr(l.attributes)+":"+l.mode,l.targets!==void 0)for(let i=0,s=l.targets.length;i<s;i++)e+=":"+hr(l.targets[i]);return e}function hr(l){let e="";const t=Object.keys(l).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+l[t[i]]+";";return e}function Mr(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wc(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _c=new fe;class Sc{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ju,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,n=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&n<98?this.textureLoader=new wi(this.options.manager):this.textureLoader=new pu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:i,userData:{}};return bi(n,o,s),oi(o,s),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(const a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){const r=t[s].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let s=0,n=e.length;s<n;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),n=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[h,c]of r.children.entries())n(c,o.children[h])};return n(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const n=e(t[s]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(n,r){i.load(As.resolveURL(t.uri,s.path),n,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=or[s.type],o=Qi[s.componentType],a=s.normalized===!0,h=new o(s.count*r);return Promise.resolve(new At(h,r,a))}const n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(r){const o=r[0],a=or[s.type],h=Qi[s.componentType],c=h.BYTES_PER_ELEMENT,u=c*a,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let g,y;if(d&&d!==u){const m=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=t.cache.get(_);b||(g=new h(o,m*d,s.count*d/c),b=new Oh(g,d/c),t.cache.add(_,b)),y=new Br(b,a,f%d/c,p)}else o===null?g=new h(s.count*a):g=new h(o,f,s.count*a),y=new At(g,a,p);if(s.sparse!==void 0){const m=or.SCALAR,_=Qi[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new _(r[1],b,s.sparse.count*m),A=new h(r[2],v,s.sparse.count*a);o!==null&&(y=new At(y.array.slice(),y.itemSize,y.normalized));for(let I=0,E=T.length;I<E;I++){const U=T[I];if(y.setX(U,A[I*a]),a>=2&&y.setY(U,A[I*a+1]),a>=3&&y.setZ(U,A[I*a+2]),a>=4&&y.setW(U,A[I*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,r=t.images[n];let o=this.textureLoader;if(r.uri){const a=i.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,n,o)}loadTextureImage(e,t,i){const s=this,n=this.json,r=n.textures[e],o=n.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const h=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=r.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const f=(n.samplers||{})[r.sampler]||{};return c.magFilter=eo[f.magFilter]||ci,c.minFilter=eo[f.minFilter]||En,c.wrapS=to[f.wrapS]||Ps,c.wrapT=to[f.wrapT]||Ps,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=h,h}loadImageSource(e,t){const i=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",h=!1;if(r.bufferView!==void 0)a=i.getDependency("bufferView",r.bufferView).then(function(u){h=!0;const f=new Blob([u],{type:r.mimeType});return a=o.createObjectURL(f),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(a).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(g){const y=new gt(g);y.needsUpdate=!0,f(y)}),t.load(As.resolveURL(u,n.path),p,void 0,d)})}).then(function(u){return h===!0&&o.revokeObjectURL(a),u.userData.mimeType=r.mimeType||wc(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=c,c}assignTexture(e,t,i,s){const n=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),n.extensions[xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=n.associations.get(r);r=n.extensions[xe.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),n.associations.set(r,a)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let a=this.cache.get(o);a||(a=new nl,Ai.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(o,a)),i=a}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let a=this.cache.get(o);a||(a=new sl,Ai.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(o,a)),i=a}if(s||n||r){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=i.clone(),n&&(a.vertexColors=!0),r&&(a.flatShading=!0),s&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(i))),i=a}e.material=i}getMaterialType(){return Nr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,n=i.materials[e];let r;const o={},a=n.extensions||{},h=[];if(a[xe.KHR_MATERIALS_UNLIT]){const u=s[xe.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),h.push(u.extendParams(o,n,t))}else{const u=n.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ft),o.opacity=f[3]}u.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",u.baseColorTexture,ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=Nl);const c=n.alphaMode||lr.OPAQUE;if(c===lr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===lr.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&r!==Ki&&(h.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new Z(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;o.normalScale.set(u,u)}if(n.occlusionTexture!==void 0&&r!==Ki&&(h.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&r!==Ki){const u=n.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],ft)}return n.emissiveTexture!==void 0&&r!==Ki&&h.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture,ut)),Promise.all(h).then(function(){const u=new r(o);return n.name&&(u.name=n.name),oi(u,n),t.associations.set(u,{materials:e}),n.extensions&&bi(s,u,n),u})}createUniqueName(e){const t=Se.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function n(o){return i[xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return io(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const h=e[o],c=bc(h),u=s[c];if(u)r.push(u.promise);else{let f;h.extensions&&h.extensions[xe.KHR_DRACO_MESH_COMPRESSION]?f=n(h):f=io(new pi,h,t),s[c]={primitive:h,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,s=this.extensions,n=i.meshes[e],r=n.primitives,o=[];for(let a=0,h=r.length;a<h;a++){const c=r[a].material===void 0?yc(this.cache):this.getDependency("material",r[a].material);o.push(c)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const h=a.slice(0,a.length-1),c=a[a.length-1],u=[];for(let d=0,p=c.length;d<p;d++){const g=c[d],y=r[d];let m;const _=h[d];if(y.mode===pt.TRIANGLES||y.mode===pt.TRIANGLE_STRIP||y.mode===pt.TRIANGLE_FAN||y.mode===void 0)m=n.isSkinnedMesh===!0?new Vh(g,_):new fi(g,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),y.mode===pt.TRIANGLE_STRIP?m.geometry=Ja(m.geometry,$o):y.mode===pt.TRIANGLE_FAN&&(m.geometry=Ja(m.geometry,cr));else if(y.mode===pt.LINES)m=new Wh(g,_);else if(y.mode===pt.LINE_STRIP)m=new zr(g,_);else if(y.mode===pt.LINE_LOOP)m=new jh(g,_);else if(y.mode===pt.POINTS)m=new Yh(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(m.geometry.morphAttributes).length>0&&xc(m,n),m.name=t.createUniqueName(n.name||"mesh_"+e),oi(m,n),y.extensions&&bi(s,m,y),t.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return n.extensions&&bi(s,u[0],n),u[0];const f=new Qn;n.extensions&&bi(s,f,n),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Cr(ch.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new tl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,n=t.joints.length;s<n;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const n=s.pop(),r=s,o=[],a=[];for(let h=0,c=r.length;h<c;h++){const u=r[h];if(u){o.push(u);const f=new fe;n!==null&&f.fromArray(n.array,h*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Rr(o,a)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,r=[],o=[],a=[],h=[],c=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],p=s.samplers[d.sampler],g=d.target,y=g.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",_)),h.push(p),c.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(h),Promise.all(c)]).then(function(u){const f=u[0],d=u[1],p=u[2],g=u[3],y=u[4],m=[];for(let _=0,b=f.length;_<b;_++){const v=f[_],T=d[_],A=p[_],I=g[_],E=y[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const U=i._createAnimationTracks(v,T,A,I,E);if(U)for(let C=0;C<U.length;C++)m.push(U[C])}return new eu(n,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(n){const r=i._getNodeRef(i.meshCache,s.mesh,n);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let a=0,h=s.weights.length;a<h;a++)o.morphTargetInfluences[a]=s.weights[a]}),r})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],n=i._loadNodeShallow(e),r=[],o=s.children||[];for(let h=0,c=o.length;h<c;h++)r.push(i.getDependency("node",o[h]));const a=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([n,Promise.all(r),a]).then(function(h){const c=h[0],u=h[1],f=h[2];f!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(f,_c)});for(let d=0,p=u.length;d<p;d++)c.add(u[d]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],r=n.name?s.createUniqueName(n.name):"",o=[],a=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return a&&o.push(a),n.camera!==void 0&&o.push(s.getDependency("camera",n.camera).then(function(h){return s._getNodeRef(s.cameraCache,n.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let c;if(n.isBone===!0?c=new il:h.length>1?c=new Qn:h.length===1?c=h[0]:c=new De,c!==h[0])for(let u=0,f=h.length;u<f;u++)c.add(h[u]);if(n.name&&(c.userData.name=n.name,c.name=r),oi(c,n),n.extensions&&bi(i,c,n),n.matrix!==void 0){const u=new fe;u.fromArray(n.matrix),c.applyMatrix4(u)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,n=new Qn;i.name&&(n.name=s.createUniqueName(i.name)),oi(n,i),i.extensions&&bi(t,n,i);const r=i.nodes||[],o=[];for(let a=0,h=r.length;a<h;a++)o.push(s.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let c=0,u=a.length;c<u;c++)n.add(a[c]);const h=c=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof Ai||f instanceof gt)&&u.set(f,d);return c.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=h(n),n})}_createAnimationTracks(e,t,i,s,n){const r=[],o=e.name?e.name:e.uuid,a=[];ni[n.path]===ni.weights?e.traverse(function(f){f.morphTargetInfluences&&a.push(f.name?f.name:f.uuid)}):a.push(o);let h;switch(ni[n.path]){case ni.weights:h=ts;break;case ni.rotation:h=Ci;break;case ni.position:case ni.scale:h=is;break;default:switch(i.itemSize){case 1:h=ts;break;case 2:case 3:default:h=is;break}break}const c=s.interpolation!==void 0?gc[s.interpolation]:es,u=this._getArrayFromAccessor(i);for(let f=0,d=a.length;f<d;f++){const p=new h(a[f]+"."+ni[n.path],t.array,u,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Mr(t.constructor),s=new Float32Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=t[n]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ci?mc:dl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mc(l,e,t){const i=e.attributes,s=new $t;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],a=o.min,h=o.max;if(a!==void 0&&h!==void 0){if(s.set(new S(a[0],a[1],a[2]),new S(h[0],h[1],h[2])),o.normalized){const c=Mr(Qi[o.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new S,a=new S;for(let h=0,c=n.length;h<c;h++){const u=n[h];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const g=Mr(Qi[f.componentType]);a.multiplyScalar(g)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}l.boundingBox=s;const r=new Rt;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,l.boundingSphere=r}function io(l,e,t){const i=e.attributes,s=[];function n(r,o){return t.getDependency("accessor",r).then(function(a){l.setAttribute(o,a)})}for(const r in i){const o=Sr[r]||r.toLowerCase();o in l.attributes||s.push(n(i[r],o))}if(e.indices!==void 0&&!l.index){const r=t.getDependency("accessor",e.indices).then(function(o){l.setIndex(o)});s.push(r)}return lt.workingColorSpace!==ft&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),oi(l,e),Mc(l,e,t),Promise.all(s).then(function(){return e.targets!==void 0?vc(l,e.targets,t):l})}async function Tc(){let l=[],e=[],t=new fi(new _n(100,100));t.position.set(0,0,0),t.rotation.x=-Math.PI*.5;let i=(await new wi().loadAsync("scene-assets/textures/grey-cartago/diff.png")).source.data,s=(await new wi().loadAsync("scene-assets/textures/grey-cartago/disp.png")).source.data,n=(await new wi().loadAsync("scene-assets/textures/grey-cartago/rough.png")).source.data;e.push(new Cs({color:new Re(.5,.5,.5),ax:.151,ay:.151,map:i,roughnessMap:n,bumpMap:s,bumpStrength:4.35,uvRepeat:new Z(20,20),mapUvRepeat:new Z(20,20)})),l=[...l,...ar(t,e.length-1)];let r=new fi(new _n(35,15));r.position.set(20,7.25,-7.5),r.rotation.y=Math.PI*.7;let o=(await new wi().loadAsync("scene-assets/textures/graff.png")).source.data,a=(await new wi().loadAsync("scene-assets/textures/graff-2.png")).source.data,h=(await new wi().loadAsync("scene-assets/textures/bump-test.png")).source.data;e.push(new yn({color:new Re(.9,.9,.9),map:a,bumpMap:h,bumpStrength:5,mapUvRepeat:new Z(1.3,1.3),uvRepeat:new Z(2.25,1.5)})),l=[...l,...ar(r,e.length-1)];let u=(await new Wu().loadAsync("scene-assets/models/horse-statue-uv.glb")).scene.children[0];u.scale.set(-2.15,2.15,2.15),u.position.set(-.5,0,-1.5),u.rotation.z=-1.4,e.push(new vn({absorption:new Re(.25,.58,.99).multiplyScalar(4.5),ax:.01,ay:.01,eta:1.6})),l=[...l,...ar(u,e.length-1)];let f=new Ir(2,75,75);f.translate(2,2,1),e.push(new Cs({color:new Re(1,1,1),map:o,ax:.1,ay:.01})),l=[...l,..._r(f,e.length-1,new fe().identity())];const d=new cl;d.set(new S(-12.3,5.4,5.3),new S(-2.8,2.6,1.3)),d.movementSpeed=.15,d.aperture=.17,d.fov=.53,d.focusDistance=13.246386264701139,d.exposure=1.85;let p=new Sn;return await p.fromEquirect("scene-assets/envmaps/lebombo_1k.hdr"),p.scale=1,p.rotX=5.5,p.rotY=1.7,{triangles:l,materials:e,camera:d,envmap:p}}var mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pl(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function Ac(l){if(l.__esModule)return l;var e=l.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(l).forEach(function(i){var s=Object.getOwnPropertyDescriptor(l,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return l[i]}})}),t}var Ur={exports:{}};Ur.exports;(function(l){(function(e,t,i){function s(a){var h=this,c=o();h.next=function(){var u=2091639*h.s0+h.c*23283064365386963e-26;return h.s0=h.s1,h.s1=h.s2,h.s2=u-(h.c=u|0)},h.c=1,h.s0=c(" "),h.s1=c(" "),h.s2=c(" "),h.s0-=c(a),h.s0<0&&(h.s0+=1),h.s1-=c(a),h.s1<0&&(h.s1+=1),h.s2-=c(a),h.s2<0&&(h.s2+=1),c=null}function n(a,h){return h.c=a.c,h.s0=a.s0,h.s1=a.s1,h.s2=a.s2,h}function r(a,h){var c=new s(a),u=h&&h.state,f=c.next;return f.int32=function(){return c.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,u&&(typeof u=="object"&&n(u,c),f.state=function(){return n(c,{})}),f}function o(){var a=4022871197,h=function(c){c=String(c);for(var u=0;u<c.length;u++){a+=c.charCodeAt(u);var f=.02519603282416938*a;a=f>>>0,f-=a,f*=a,a=f>>>0,f-=a,a+=f*4294967296}return(a>>>0)*23283064365386963e-26};return h}t&&t.exports?t.exports=r:this.alea=r})(mi,l)})(Ur);var Ec=Ur.exports,Vr={exports:{}};Vr.exports;(function(l){(function(e,t,i){function s(o){var a=this,h="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var u=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^u^u>>>8},o===(o|0)?a.x=o:h+=o;for(var c=0;c<h.length+64;c++)a.x^=h.charCodeAt(c)|0,a.next()}function n(o,a){return a.x=o.x,a.y=o.y,a.z=o.z,a.w=o.w,a}function r(o,a){var h=new s(o),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xor128=r})(mi,l)})(Vr);var Cc=Vr.exports,Gr={exports:{}};Gr.exports;(function(l){(function(e,t,i){function s(o){var a=this,h="";a.next=function(){var u=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(u^u<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,o===(o|0)?a.x=o:h+=o;for(var c=0;c<h.length+64;c++)a.x^=h.charCodeAt(c)|0,c==h.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(o,a){return a.x=o.x,a.y=o.y,a.z=o.z,a.w=o.w,a.v=o.v,a.d=o.d,a}function r(o,a){var h=new s(o),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xorwow=r})(mi,l)})(Gr);var Bc=Gr.exports,qr={exports:{}};qr.exports;(function(l){(function(e,t,i){function s(o){var a=this;a.next=function(){var c=a.x,u=a.i,f,d;return f=c[u],f^=f>>>7,d=f^f<<24,f=c[u+1&7],d^=f^f>>>10,f=c[u+3&7],d^=f^f>>>3,f=c[u+4&7],d^=f^f<<7,f=c[u+7&7],f=f^f<<13,d^=f^f<<9,c[u]=d,a.i=u+1&7,d};function h(c,u){var f,d=[];if(u===(u|0))d[0]=u;else for(u=""+u,f=0;f<u.length;++f)d[f&7]=d[f&7]<<15^u.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],c.x=d,c.i=0,f=256;f>0;--f)c.next()}h(a,o)}function n(o,a){return a.x=o.x.slice(),a.i=o.i,a}function r(o,a){o==null&&(o=+new Date);var h=new s(o),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(c.x&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xorshift7=r})(mi,l)})(qr);var Pc=qr.exports,Hr={exports:{}};Hr.exports;(function(l){(function(e,t,i){function s(o){var a=this;a.next=function(){var c=a.w,u=a.X,f=a.i,d,p;return a.w=c=c+1640531527|0,p=u[f+34&127],d=u[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=u[f]=p^d,a.i=f,p+(c^c>>>16)|0};function h(c,u){var f,d,p,g,y,m=[],_=128;for(u===(u|0)?(d=u,u=null):(u=u+"\0",d=0,_=Math.max(_,u.length)),p=0,g=-32;g<_;++g)u&&(d^=u.charCodeAt((g+32)%u.length)),g===0&&(y=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,g>=0&&(y=y+1640531527|0,f=m[g&127]^=d+y,p=f==0?p+1:0);for(p>=128&&(m[(u&&u.length||0)&127]=-1),p=127,g=4*128;g>0;--g)d=m[p+34&127],f=m[p=p+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,m[p]=d^f;c.w=y,c.X=m,c.i=p}h(a,o)}function n(o,a){return a.i=o.i,a.w=o.w,a.X=o.X.slice(),a}function r(o,a){o==null&&(o=+new Date);var h=new s(o),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(c.X&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xor4096=r})(mi,l)})(Hr);var Rc=Hr.exports,Wr={exports:{}};Wr.exports;(function(l){(function(e,t,i){function s(o){var a=this,h="";a.next=function(){var u=a.b,f=a.c,d=a.d,p=a.a;return u=u<<25^u>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-u|0,a.b=u=u<<20^u>>>12^f,a.c=f=f-d|0,a.d=d<<16^f>>>16^p,a.a=p-u|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,o===Math.floor(o)?(a.a=o/4294967296|0,a.b=o|0):h+=o;for(var c=0;c<h.length+20;c++)a.b^=h.charCodeAt(c)|0,a.next()}function n(o,a){return a.a=o.a,a.b=o.b,a.c=o.c,a.d=o.d,a}function r(o,a){var h=new s(o),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.tychei=r})(mi,l)})(Wr);var zc=Wr.exports,ml={exports:{}};const Ic={},Nc=Object.freeze(Object.defineProperty({__proto__:null,default:Ic},Symbol.toStringTag,{value:"Module"})),Dc=Ac(Nc);(function(l){(function(e,t,i){var s=256,n=6,r=52,o="random",a=i.pow(s,n),h=i.pow(2,r),c=h*2,u=s-1,f;function d(v,T,A){var I=[];T=T==!0?{entropy:!0}:T||{};var E=m(y(T.entropy?[v,b(t)]:v??_(),3),I),U=new p(I),C=function(){for(var B=U.g(n),N=a,k=0;B<h;)B=(B+k)*s,N*=s,k=U.g(1);for(;B>=c;)B/=2,N/=2,k>>>=1;return(B+k)/N};return C.int32=function(){return U.g(4)|0},C.quick=function(){return U.g(4)/4294967296},C.double=C,m(b(U.S),t),(T.pass||A||function(B,N,k,z){return z&&(z.S&&g(z,U),B.state=function(){return g(U,{})}),k?(i[o]=B,N):B})(C,E,"global"in T?T.global:this==i,T.state)}function p(v){var T,A=v.length,I=this,E=0,U=I.i=I.j=0,C=I.S=[];for(A||(v=[A++]);E<s;)C[E]=E++;for(E=0;E<s;E++)C[E]=C[U=u&U+v[E%A]+(T=C[E])],C[U]=T;(I.g=function(B){for(var N,k=0,z=I.i,L=I.j,q=I.S;B--;)N=q[z=u&z+1],k=k*s+q[u&(q[z]=q[L=u&L+N])+(q[L]=N)];return I.i=z,I.j=L,k})(s)}function g(v,T){return T.i=v.i,T.j=v.j,T.S=v.S.slice(),T}function y(v,T){var A=[],I=typeof v,E;if(T&&I=="object")for(E in v)try{A.push(y(v[E],T-1))}catch{}return A.length?A:I=="string"?v:v+"\0"}function m(v,T){for(var A=v+"",I,E=0;E<A.length;)T[u&E]=u&(I^=T[u&E]*19)+A.charCodeAt(E++);return b(T)}function _(){try{var v;return f&&(v=f.randomBytes)?v=v(s):(v=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(v)),b(v)}catch{var T=e.navigator,A=T&&T.plugins;return[+new Date,e,A,e.screen,b(t)]}}function b(v){return String.fromCharCode.apply(0,v)}if(m(i.random(),t),l.exports){l.exports=d;try{f=Dc}catch{}}else i["seed"+o]=d})(typeof self<"u"?self:mi,[],Math)})(ml);var Fc=ml.exports,Lc=Ec,kc=Cc,Oc=Bc,Uc=Pc,Vc=Rc,Gc=zc,Pi=Fc;Pi.alea=Lc;Pi.xor128=kc;Pi.xorwow=Oc;Pi.xorshift7=Uc;Pi.xor4096=Vc;Pi.tychei=Gc;var qc=Pi;const Hc=pl(qc);function Wc(l,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,Yc(i.key),i)}}function jr(l,e,t){return e&&Wc(l.prototype,e),Object.defineProperty(l,"prototype",{writable:!1}),l}function gl(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,Tr(l,e)}function Tr(l,e){return Tr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Tr(l,e)}function jc(l,e){if(typeof l!="object"||l===null)return l;var t=l[Symbol.toPrimitive];if(t!==void 0){var i=t.call(l,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(l)}function Yc(l){var e=jc(l,"string");return typeof e=="symbol"?e:String(e)}var Pn=function(){function l(){}var e=l.prototype;return e._seed=function(i,s){if(i===(i||0))return i;for(var n=""+i,r=0,o=0;o<n.length;++o)r^=n.charCodeAt(o)|0;return r},l}(),so=function(l){gl(e,l);function e(i,s){var n;return n=l.call(this)||this,n._rng=void 0,n.seed(i,s),n}var t=e.prototype;return t.next=function(){return this._rng()},t.seed=function(s,n){this._rng=s},t.clone=function(s,n){return new e(this._rng,n)},jr(e,[{key:"name",get:function(){return"function"}}]),e}(Pn),no=function(){var l=[].slice.call(arguments),e=l,t=e[0],i=t===void 0?"default":t;switch(typeof i){case"object":if(i instanceof Pn)return i;break;case"function":return new so(i);case"number":case"string":default:return new so(Hc.apply(void 0,l))}throw new Error('invalid RNG "'+i+'"')},Xc=function(l,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){return l.next()*(t-e)+e}};function Et(l){return new $c(l)}var $c=function(e){var t=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(t.n))return t;throw new Error("Expected number to be an integer, got "+t.n)},this.isPositive=function(){if(t.n>0)return t;throw new Error("Expected number to be positive, got "+t.n)},this.lessThan=function(i){if(t.n<i)return t;throw new Error("Expected number to be less than "+i+", got "+t.n)},this.greaterThanOrEqual=function(i){if(t.n>=i)return t;throw new Error("Expected number to be greater than or equal to "+i+", got "+t.n)},this.greaterThan=function(i){if(t.n>i)return t;throw new Error("Expected number to be greater than "+i+", got "+t.n)},this.n=e},Kc=function(l,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),t===void 0&&(t=e===void 0?1:e,e=0),Et(e).isInt(),Et(t).isInt(),function(){return Math.floor(l.next()*(t-e+1)+e)}},Zc=function(l){return function(){return l.next()>=.5}},Jc=function(l,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){var i,s,n;do i=l.next()*2-1,s=l.next()*2-1,n=i*i+s*s;while(!n||n>1);return e+t*s*Math.sqrt(-2*Math.log(n)/n)}},Qc=function(l,e,t){e===void 0&&(e=0),t===void 0&&(t=1);var i=l.normal(e,t);return function(){return Math.exp(i())}},ef=function(l,e){return e===void 0&&(e=.5),Et(e).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(l.next()+e)}},tf=function(l,e,t){return e===void 0&&(e=1),t===void 0&&(t=.5),Et(e).isInt().isPositive(),Et(t).greaterThanOrEqual(0).lessThan(1),function(){for(var i=0,s=0;i++<e;)l.next()<t&&s++;return s}},sf=function(l,e){e===void 0&&(e=.5),Et(e).greaterThan(0).lessThan(1);var t=1/Math.log(1-e);return function(){return Math.floor(1+Math.log(l.next())*t)}},nf=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],rf=function(e){return nf[e]},af=.9189385332046727,of=function(l,e){if(e===void 0&&(e=1),Et(e).isPositive(),e<10){var t=Math.exp(-e);return function(){for(var a=t,h=0,c=l.next();c>a;)c=c-a,a=e*a/++h;return h}}else{var i=Math.sqrt(e),s=.931+2.53*i,n=-.059+.02483*s,r=1.1239+1.1328/(s-3.4),o=.9277-3.6224/(s-2);return function(){for(;;){var a=void 0,h=l.next();if(h<=.86*o)return a=h/o-.43,Math.floor((2*n/(.5-Math.abs(a))+s)*a+e+.445);h>=o?a=l.next()-.5:(a=h/o-.93,a=(a<0?-.5:.5)-a,h=l.next()*o);var c=.5-Math.abs(a);if(!(c<.013&&h>c)){var u=Math.floor((2*n/c+s)*a+e+.445);if(h=h*r/(n/(c*c)+s),u>=10){var f=(u+.5)*Math.log(e/u)-e-af+u-(.08333333333333333-(.002777777777777778-1/(1260*u*u))/(u*u))/u;if(Math.log(h*i)<=f)return u}else if(u>=0){var d,p=(d=rf(u))!=null?d:0;if(Math.log(h)<=u*Math.log(e)-e-p)return u}}}}}},lf=function(l,e){return e===void 0&&(e=1),Et(e).isPositive(),function(){return-Math.log(1-l.next())/e}},hf=function(l,e){return e===void 0&&(e=1),Et(e).isInt().greaterThanOrEqual(0),function(){for(var t=0,i=0;i<e;++i)t+=l.next();return t}},uf=function(l,e){e===void 0&&(e=1),Et(e).isInt().isPositive();var t=l.irwinHall(e);return function(){return t()/e}},cf=function(l,e){e===void 0&&(e=1),Et(e).greaterThanOrEqual(0);var t=1/e;return function(){return 1/Math.pow(1-l.next(),t)}},ff=function(l){gl(e,l);function e(){return l.apply(this,arguments)||this}var t=e.prototype;return t.next=function(){return Math.random()},t.seed=function(s,n){},t.clone=function(){return new e},jr(e,[{key:"name",get:function(){return"default"}}]),e}(Pn),df=function(){function l(t){var i=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return i._rng.next()},this.float=function(s,n){return i.uniform(s,n)()},this.int=function(s,n){return i.uniformInt(s,n)()},this.integer=function(s,n){return i.uniformInt(s,n)()},this.bool=function(){return i.uniformBoolean()()},this.boolean=function(){return i.uniformBoolean()()},this.uniform=function(s,n){return i._memoize("uniform",Xc,s,n)},this.uniformInt=function(s,n){return i._memoize("uniformInt",Kc,s,n)},this.uniformBoolean=function(){return i._memoize("uniformBoolean",Zc)},this.normal=function(s,n){return Jc(i,s,n)},this.logNormal=function(s,n){return Qc(i,s,n)},this.bernoulli=function(s){return ef(i,s)},this.binomial=function(s,n){return tf(i,s,n)},this.geometric=function(s){return sf(i,s)},this.poisson=function(s){return of(i,s)},this.exponential=function(s){return lf(i,s)},this.irwinHall=function(s){return hf(i,s)},this.bates=function(s){return uf(i,s)},this.pareto=function(s){return cf(i,s)},t&&t instanceof Pn?this.use(t):this.use(new ff),this._cache={}}var e=l.prototype;return e.clone=function(){var i=[].slice.call(arguments);return i.length?new l(no.apply(void 0,i)):new l(this.rng.clone())},e.use=function(){this._rng=no.apply(void 0,[].slice.call(arguments))},e.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},e.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},e.choice=function(i){if(!Array.isArray(i))throw new Error("Random.choice expected input to be an array, got "+typeof i);var s=i==null?void 0:i.length;if(s>0){var n=this.uniformInt(0,s-1)();return i[n]}else return},e._memoize=function(i,s){var n=[].slice.call(arguments,2),r=""+n.join(";"),o=this._cache[i];return(o===void 0||o.key!==r)&&(o={key:r,distribution:s.apply(void 0,[this].concat(n))},this._cache[i]=o),o.distribution},jr(l,[{key:"rng",get:function(){return this._rng}}]),l}(),yl=new df;const vl=Math.sqrt(3),pf=.5*(vl-1),bs=(3-vl)/6,ro=l=>Math.floor(l)|0,ao=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function mf(l=Math.random){const e=gf(l),t=new Float64Array(e).map(s=>ao[s%12*2]),i=new Float64Array(e).map(s=>ao[s%12*2+1]);return function(n,r){let o=0,a=0,h=0;const c=(n+r)*pf,u=ro(n+c),f=ro(r+c),d=(u+f)*bs,p=u-d,g=f-d,y=n-p,m=r-g;let _,b;y>m?(_=1,b=0):(_=0,b=1);const v=y-_+bs,T=m-b+bs,A=y-1+2*bs,I=m-1+2*bs,E=u&255,U=f&255;let C=.5-y*y-m*m;if(C>=0){const k=E+e[U],z=t[k],L=i[k];C*=C,o=C*C*(z*y+L*m)}let B=.5-v*v-T*T;if(B>=0){const k=E+_+e[U+b],z=t[k],L=i[k];B*=B,a=B*B*(z*v+L*T)}let N=.5-A*A-I*I;if(N>=0){const k=E+1+e[U+1],z=t[k],L=i[k];N*=N,h=N*N*(z*A+L*I)}return 70*(o+a+h)}}function gf(l){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const s=i+~~(l()*(256-i)),n=t[i];t[i]=t[s],t[s]=n}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var xl={exports:{}};(function(l,e){(function(t,i){l.exports=i()})(mi,function(){return t.importState=function(s){var n=new t;return n.importState(s),n},t;function t(){return function(s){var n=0,r=0,o=0,a=1;s.length==0&&(s=[+new Date]);var h=i();n=h(" "),r=h(" "),o=h(" ");for(var c=0;c<s.length;c++)n-=h(s[c]),n<0&&(n+=1),r-=h(s[c]),r<0&&(r+=1),o-=h(s[c]),o<0&&(o+=1);h=null;var u=function(){var f=2091639*n+a*23283064365386963e-26;return n=r,r=o,o=f-(a=f|0)};return u.next=u,u.uint32=function(){return u()*4294967296},u.fract53=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.version="Alea 0.9",u.args=s,u.exportState=function(){return[n,r,o,a]},u.importState=function(f){n=+f[0]||0,r=+f[1]||0,o=+f[2]||0,a=+f[3]||0},u}(Array.prototype.slice.call(arguments))}function i(){var s=4022871197,n=function(r){r=r.toString();for(var o=0;o<r.length;o++){s+=r.charCodeAt(o);var a=.02519603282416938*s;s=a>>>0,a-=s,a*=s,s=a>>>0,a-=s,s+=a*4294967296}return(s>>>0)*23283064365386963e-26};return n.version="Mash 0.9",n}})})(xl);var yf=xl.exports;const vf=pl(yf),xf=vf("seed");mf(xf);yl.use("test-string");yl.float;async function bf(){return Tc()}const wf=`
@group(0) @binding(0) var<uniform> viewMatrix: mat4x4f;
@group(0) @binding(1) var<uniform> projectionMatrix: mat4x4f;
@group(0) @binding(2) var<uniform> cameraPos: vec3f;
@group(0) @binding(3) var<uniform> renderMode: f32;

struct VSOutput {
  @builtin(position) position: vec4f,
  @location(0) fragPos: vec3f,
  @location(1) fragNorm: vec3f,
  @location(2) viewSpaceNorm: vec3f,
  @location(3) cameraPos: vec3f,
};

struct Vertex {
  @location(0) position: vec3f,
  @location(1) normal: vec3f,
};

@vertex fn vs(
  vert: Vertex,
  @builtin(vertex_index) vertexIndex : u32
) -> VSOutput {
  
  var vsOutput: VSOutput;
  let transformed = viewMatrix * vec4f(vert.position, 1.0);
  // I would love to build a proper left-handed projection matrix, and I tried,
  // without success. At one point we should try again and get rid of "* vec4f(1,1,-1,1)"
  vsOutput.position = projectionMatrix * (transformed * vec4f(1,1,-1,1));
  vsOutput.fragPos = vert.position;
  vsOutput.fragNorm = vert.normal;
  vsOutput.viewSpaceNorm = mat3x3f(
    viewMatrix[0].xyz,
    viewMatrix[1].xyz,
    viewMatrix[2].xyz 
  ) * vert.normal;
  vsOutput.cameraPos = cameraPos;
  
  return vsOutput;
}

@fragment fn fs(fsInput: VSOutput) -> @location(0) vec4f {
  var normal = normalize(fsInput.fragNorm);
  let fragPos = fsInput.fragPos;
  let cameraPos = fsInput.cameraPos;

  let viewDir = normalize(fragPos - cameraPos);
  let wo = -viewDir;

  var coloredVSNormal = normalize(fsInput.viewSpaceNorm) * vec3f(1,1,-1) * 0.5 + 0.5;
  if (dot(wo, normal) < 0.0) {
    coloredVSNormal *= 0.0;
  }

  let colorFromCameraLight = vec3f(max(dot(wo, normal), 0.0));

  if (renderMode < 0.5) {
    return vec4f(coloredVSNormal, 1.0);
  } else {
    return vec4f(colorFromCameraLight, 1.0);
  }
}
`;class _f{constructor(e,t){M(this,"device");M(this,"context");M(this,"pipeline");M(this,"bindGroup0");M(this,"vertexBuffer");M(this,"renderModeBuffer");M(this,"depthStencilAttachment",null);M(this,"scene");M(this,"sceneUpdateRequired",!1);M(this,"vertexCount",0);M(this,"renderMode","normal");this.context=e;let i=jt.device;this.device=i;const s=i.createShaderModule({label:"preview segment shader",code:wf});this.pipeline=i.createRenderPipeline({label:"preview segment pipeline",layout:"auto",vertex:{module:s,buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}],entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:t}]},depthStencil:{format:"depth24plus-stencil8",depthWriteEnabled:!0,depthCompare:"less-equal"},primitive:{cullMode:"none"}}),this.renderModeBuffer=i.createBuffer({size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}createDepthBufferResources(e){let i={size:{width:e.x,height:e.y,depthOrArrayLayers:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT},n=this.device.createTexture(i).createView();this.depthStencilAttachment={view:n,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store",stencilLoadOp:"clear",stencilStoreOp:"discard"}}resize(e){this.createDepthBufferResources(e)}updateScene(e){this.scene=e,this.sceneUpdateRequired=!0,this.bindGroup0=this.device.createBindGroup({label:"preview bindgroup - camera matrices",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.scene.camera.cameraMatrixUniformBuffer}},{binding:1,resource:{buffer:this.scene.camera.projectionMatrixUniformBuffer}},{binding:2,resource:{buffer:this.scene.camera.cameraPositionUniformBuffer}},{binding:3,resource:{buffer:this.renderModeBuffer}}]})}processScene(){this.vertexCount=this.scene.triangles.length*3;let e=new Float32Array(this.vertexCount*6);for(let t=0;t<this.scene.triangles.length;t++){let i=this.scene.triangles[t],s=[i.v0,i.v1,i.v2];for(let n=0;n<3;n++)e[(t*3+n)*6+0]=s[n].x,e[(t*3+n)*6+1]=s[n].y,e[(t*3+n)*6+2]=s[n].z,e[(t*3+n)*6+3]=i["norm"+n].x,e[(t*3+n)*6+4]=i["norm"+n].y,e[(t*3+n)*6+5]=i["norm"+n].z}this.vertexBuffer=this.device.createBuffer({label:"preview segment vertex buffer",size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,e),this.sceneUpdateRequired=!1}setMode(e){e!=this.renderMode&&(this.renderMode=e,this.device.queue.writeBuffer(this.renderModeBuffer,0,new Float32Array([this.renderMode=="normal"?0:1])))}render(){if(this.sceneUpdateRequired&&this.processScene(),!this.depthStencilAttachment)throw new Error("missing depth stencil attachment");let e={label:"preview segment renderPass",colorAttachments:[{clearValue:[.3,.3,.3,1],loadOp:"clear",storeOp:"store",view:this.context.getCurrentTexture().createView()}],depthStencilAttachment:this.depthStencilAttachment};const t=this.device.createCommandEncoder({label:"preview segment encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.setVertexBuffer(0,this.vertexBuffer),i.draw(this.vertexCount),i.end();const s=t.finish();this.device.queue.submit([s])}}function oo(){return new Promise(l=>{setTimeout(l,5)})}async function Sf(l){var t;let e="Your browser does not support WebGPU or one of the required features";try{const i=await((t=navigator.gpu)==null?void 0:t.requestAdapter()),s=i==null?void 0:i.features.has("timestamp-query"),n=await(i==null?void 0:i.requestDevice({requiredFeatures:[...s?["timestamp-query"]:[],"float32-filterable"]})),r=l.getContext("webgpu");if(!n||!r)throw vr.set(e),new Error(e);return{device:n,context:r}}catch{throw vr.set(e),new Error(e)}}let ht,Ss,ui,ri,St=new Z(-1,-1);const jt={device:null,context:null,format:null};async function Mf(l){const{device:e,context:t}=await Sf(l),i=navigator.gpu.getPreferredCanvasFormat();t.configure({device:e,format:i}),jt.device=e,jt.context=t,jt.format=i;const s=new hl;return ht=new Vu(s),_s.set("creating scene"),ri=await bf(),ri.camera.setCanvasContainer(l.parentElement),_s.set("processing bvh and materials"),await oo(),ht.updateScene(ri),ht.setDebugPixelTarget(141,346),Ss=new qu(t,i),Ss.updateScene(ri),ui=new _f(t,i),ui.updateScene(ri),new ResizeObserver(r=>{lo(l,e,ri,ht,Ss,ui)}).observe(l),lo(l,e,ri,ht,Ss,ui),Hu("l",()=>ht.logDebugResult()),_s.set("compiling shaders"),await oo(),bl(),_s.set(""),{getFocusDistanceFromScreenPoint:ht.getFocusDistanceFromScreenPoint.bind(ht)}}function lo(l,e,t,i,s,n){if(St.x==l.width&&St.y==l.height)return;St=Ei(l.width,l.height),t.camera.onCanvasResize(St);const r=new Float32Array(St.x*St.y*4),o=e.createBuffer({label:"work buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(o,0,r);const a=e.createBuffer({label:"work buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(a,0,new Uint32Array(St.x*St.y)),i.resize(St,o,a),s.resize(St,o,a),n.resize(St)}let ho="";async function bl(){requestAnimationFrame(bl),ri.camera.renderLoopUpdate();let l=tt(ws);ho=="compute"&&l!="compute"&&ht.resetSamplesAndTile(),l=="compute"?Ef():l=="preview"?Tf():l=="realtime"&&Af(),ho=l}function Tf(){ui.setMode("normal"),ui.render()}function Af(){ui.setMode("camera-light"),ui.render()}function Ef(){Ne.count>=Ne.limit||(ht.compute(),ht.passPerformance.getDeltaInMilliseconds().then(l=>{l<25?ht.increaseTileSize():l>100&&ht.decreaseTileSize(),Ne.setPerformance(l)}).catch(()=>{}),Ss.render())}function Cf(l){let e,t,i,s=l[0]?"-":"+",n,r,o,a,h,c,u,f,d;const p=l[8].default,g=Al(p,l,l[7],null);return{c(){e=V("div"),t=V("header"),i=V("button"),n=me(s),r=j(),o=V("p"),a=me(l[1]),h=j(),c=V("div"),g&&g.c(),this.h()},l(y){e=G(y,"DIV",{class:!0});var m=$(e);t=G(m,"HEADER",{class:!0});var _=$(t);i=G(_,"BUTTON",{class:!0});var b=$(i);n=ge(b,s),b.forEach(x),r=Y(_),o=G(_,"P",{class:!0});var v=$(o);a=ge(v,l[1]),v.forEach(x),_.forEach(x),h=Y(m),c=G(m,"DIV",{class:!0});var T=$(c);g&&g.l(T),T.forEach(x),m.forEach(x),this.h()},h(){w(i,"class","svelte-16862rw"),w(o,"class","svelte-16862rw"),w(t,"class","svelte-16862rw"),K(t,"expanded",l[0]),w(c,"class","folder-slot-container svelte-16862rw"),K(c,"expanded",l[0]),K(c,"disabled",l[2]),w(e,"class","container svelte-16862rw"),K(e,"roundBox",l[3]),K(e,"childOfAnotherFolder",l[4]),K(e,"disabled",l[2])},m(y,m){F(y,e,m),R(e,t),R(t,i),R(i,n),R(t,r),R(t,o),R(o,a),R(e,h),R(e,c),g&&g.m(c,null),l[9](e),u=!0,f||(d=[oe(i,"click",l[6]),oe(o,"click",l[6])],f=!0)},p(y,[m]){(!u||m&1)&&s!==(s=y[0]?"-":"+")&&Oe(n,s),(!u||m&2)&&Oe(a,y[1]),(!u||m&1)&&K(t,"expanded",y[0]),g&&g.p&&(!u||m&128)&&El(g,p,y,y[7],u?Bl(p,y[7],m,null):Cl(y[7]),null),(!u||m&1)&&K(c,"expanded",y[0]),(!u||m&4)&&K(c,"disabled",y[2]),(!u||m&8)&&K(e,"roundBox",y[3]),(!u||m&16)&&K(e,"childOfAnotherFolder",y[4]),(!u||m&4)&&K(e,"disabled",y[2])},i(y){u||(Q(g,y),u=!0)},o(y){ee(g,y),u=!1},d(y){y&&x(e),g&&g.d(y),l[9](null),f=!1,yt(d)}}}function Bf(l,e,t){let{$$slots:i={},$$scope:s}=e,{name:n}=e,{disabled:r=!1}=e,{expanded:o=!0}=e,{roundBox:a=!1}=e,h=!1,c;ko(()=>{if(c){const d=c.parentElement;d&&d.classList.contains("folder-slot-container")&&t(4,h=!0)}});function u(){t(0,o=!o)}function f(d){st[d?"unshift":"push"](()=>{c=d,t(5,c)})}return l.$$set=d=>{"name"in d&&t(1,n=d.name),"disabled"in d&&t(2,r=d.disabled),"expanded"in d&&t(0,o=d.expanded),"roundBox"in d&&t(3,a=d.roundBox),"$$scope"in d&&t(7,s=d.$$scope)},[o,n,r,a,h,c,u,s,i,f]}class Vt extends Ce{constructor(e){super(),Be(this,e,Bf,Cf,Ee,{name:1,disabled:2,expanded:0,roundBox:3})}}function Pf(l){let e,t;return{c(){e=Je("svg"),t=Je("path"),this.h()},l(i){e=Qe(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var s=$(e);t=Qe(s,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),$(t).forEach(x),s.forEach(x),this.h()},h(){w(t,"fill-rule","evenodd"),w(t,"clip-rule","evenodd"),w(t,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),w(t,"transform","scale(64)"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"viewBox","0 0 1024 1024"),w(e,"fill","none"),w(e,"class","svelte-1cmb9l6")},m(i,s){F(i,e,s),R(e,t)},p:ve,i:ve,o:ve,d(i){i&&x(e)}}}class Rf extends Ce{constructor(e){super(),Be(this,e,null,Pf,Ee,{})}}function zf(l){let e,t;return{c(){e=Je("svg"),t=Je("path"),this.h()},l(i){e=Qe(i,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var s=$(e);t=Qe(s,"path",{opacity:!0,d:!0}),$(t).forEach(x),s.forEach(x),this.h()},h(){w(t,"opacity","1.00"),w(t,"d"," M 519.58 71.87 C 547.39 70.05 575.34 71.56 602.98 74.87 C 684.61 84.97 763.33 117.32 828.56 167.41 C 887.93 212.71 936.25 272.38 968.11 339.93 C 1010.50 429.19 1023.22 532.02 1004.36 628.96 C 988.09 714.73 946.85 795.48 887.30 859.27 C 835.86 914.65 770.88 957.42 699.51 982.39 C 603.65 1016.28 496.76 1017.63 400.05 986.29 C 341.49 967.45 286.76 936.86 240.01 896.89 C 180.20 846.03 133.40 779.93 105.63 706.48 C 73.48 622.27 66.61 528.74 85.74 440.71 C 101.73 365.93 136.69 295.37 186.16 237.10 C 224.39 191.97 271.17 154.09 323.36 126.26 C 383.69 93.97 451.24 75.16 519.58 71.87 M 518.62 161.85 C 494.01 163.45 469.56 167.47 445.73 173.82 C 377.19 191.91 314.32 230.21 266.21 282.21 C 223.03 328.46 191.72 385.72 176.41 447.13 C 163.28 499.56 161.50 554.77 171.06 607.96 C 178.40 648.94 192.65 688.68 213.03 724.99 C 250.87 792.45 309.69 848.00 379.39 881.58 C 438.01 910.02 504.10 922.47 569.06 918.17 C 623.79 914.69 677.74 899.15 725.81 872.72 C 799.60 832.31 859.46 766.81 892.51 689.39 C 915.95 634.98 925.97 574.99 922.23 515.91 C 918.02 445.38 893.43 376.20 851.96 318.98 C 804.96 253.62 736.91 203.43 660.09 179.05 C 614.58 164.43 566.29 158.70 518.62 161.85 Z"),w(e,"viewBox","0 0 1088 1076"),w(e,"version","1.1"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"class","svelte-1cmb9l6")},m(i,s){F(i,e,s),R(e,t)},p:ve,i:ve,o:ve,d(i){i&&x(e)}}}class If extends Ce{constructor(e){super(),Be(this,e,null,zf,Ee,{})}}function Nf(l){let e,t,i;return{c(){e=Je("svg"),t=Je("path"),i=Je("path"),this.h()},l(s){e=Qe(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=$(e);t=Qe(n,"path",{opacity:!0,d:!0}),$(t).forEach(x),i=Qe(n,"path",{opacity:!0,d:!0}),$(i).forEach(x),n.forEach(x),this.h()},h(){w(t,"opacity","1.00"),w(t,"d"," M 519.61 71.86 C 539.35 70.48 559.17 71.06 578.89 72.49 C 661.58 78.37 742.51 106.99 810.57 154.31 C 866.97 193.28 914.63 244.77 949.17 303.98 C 981.00 358.45 1001.63 419.43 1009.26 482.06 C 1020.62 572.36 1005.01 665.92 964.52 747.49 C 929.33 818.86 875.58 880.92 810.05 926.05 C 737.74 976.18 650.96 1005.22 563.02 1008.38 C 539.30 1009.75 515.50 1008.37 491.90 1005.97 C 436.49 999.87 382.21 983.70 332.48 958.49 C 269.64 926.74 214.16 880.55 171.43 824.59 C 121.11 759.07 88.69 679.95 78.74 597.93 C 70.25 530.28 76.83 460.80 97.74 395.90 C 121.71 321.45 164.79 253.31 221.64 199.62 C 269.66 154.03 327.46 118.76 390.04 97.07 C 431.73 82.58 475.52 73.99 519.61 71.86 M 518.58 161.86 C 439.25 166.79 361.85 197.81 301.10 249.06 C 243.99 296.74 201.03 361.37 180.29 432.90 C 153.97 522.31 161.80 621.42 202.71 705.26 C 236.45 774.86 292.05 833.57 359.56 871.27 C 422.00 906.35 494.64 922.58 566.08 918.35 C 618.62 915.41 670.55 901.40 717.32 877.24 C 794.99 837.28 858.20 769.77 892.51 689.40 C 915.95 635.00 925.97 575.01 922.23 515.93 C 918.02 445.38 893.43 376.19 851.95 318.96 C 804.96 253.63 736.95 203.46 660.17 179.07 C 614.63 164.43 566.30 158.69 518.58 161.86 Z"),w(i,"opacity","1.00"),w(i,"d"," M 416.47 271.62 C 421.37 271.44 426.28 271.24 431.18 271.67 C 432.74 272.32 434.42 272.51 436.10 272.73 C 437.36 273.23 438.63 273.70 439.91 274.21 C 441.55 274.79 443.16 275.48 444.72 276.28 C 446.22 277.19 447.75 278.03 449.32 278.82 L 449.44 279.63 L 450.55 279.46 L 450.68 280.17 C 455.41 283.53 459.23 288.07 462.26 292.98 C 462.92 294.28 463.59 295.58 464.27 296.88 C 464.92 298.54 465.57 300.19 466.22 301.86 C 467.18 305.14 467.60 308.53 468.19 311.89 C 468.59 317.39 467.67 322.88 466.28 328.19 C 465.63 329.84 465.00 331.50 464.36 333.16 C 464.11 333.65 463.59 334.65 463.34 335.14 C 463.08 335.64 462.57 336.63 462.31 337.13 C 460.71 339.86 458.81 342.39 456.74 344.79 C 456.44 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.02 347.44 453.77 347.74 C 452.13 349.09 450.48 350.45 448.80 351.76 C 448.04 352.16 447.29 352.57 446.55 352.98 C 446.49 354.20 445.95 355.13 444.93 355.78 C 420.59 374.48 398.40 396.03 379.26 420.03 C 372.88 429.29 364.58 437.72 353.90 441.81 C 352.63 442.25 351.36 442.68 350.10 443.13 C 348.77 443.46 347.46 443.83 346.16 444.23 C 340.43 444.93 334.62 444.94 328.89 444.21 C 327.57 443.82 326.25 443.45 324.93 443.12 C 323.25 442.51 321.57 441.91 319.90 441.33 C 302.68 434.08 291.73 415.41 292.84 396.91 C 293.74 386.39 297.87 375.94 305.44 368.43 C 329.49 337.13 358.01 309.36 389.11 285.10 C 394.84 281.27 400.48 277.23 406.94 274.68 C 410.05 273.63 413.14 272.37 416.47 272.25 L 416.47 271.62 Z"),w(e,"viewBox","0 0 1088 1076"),w(e,"version","1.1"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"class","svelte-1cmb9l6")},m(s,n){F(s,e,n),R(e,t),R(e,i)},p:ve,i:ve,o:ve,d(s){s&&x(e)}}}class Df extends Ce{constructor(e){super(),Be(this,e,null,Nf,Ee,{})}}function Ff(l){let e,t,i;return{c(){e=Je("svg"),t=Je("path"),i=Je("path"),this.h()},l(s){e=Qe(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=$(e);t=Qe(n,"path",{opacity:!0,d:!0}),$(t).forEach(x),i=Qe(n,"path",{opacity:!0,d:!0}),$(i).forEach(x),n.forEach(x),this.h()},h(){w(t,"opacity","1.00"),w(t,"d"," M 519.63 71.86 C 548.84 69.99 578.19 71.67 607.19 75.41 C 687.31 86.09 764.44 118.18 828.55 167.40 C 885.92 211.19 932.99 268.38 964.84 333.15 C 989.47 383.16 1005.06 437.63 1010.48 493.12 C 1020.73 593.18 997.74 696.46 945.52 782.50 C 915.42 831.39 876.98 875.34 831.54 910.52 C 800.42 934.52 766.30 954.57 730.37 970.48 C 688.95 988.58 644.77 1000.17 599.91 1005.49 C 483.84 1020.19 362.84 988.44 268.50 919.35 C 206.22 874.16 155.34 813.42 121.84 744.14 C 94.91 688.60 79.18 627.65 75.91 566.03 C 75.29 552.37 74.52 538.68 75.42 525.01 C 76.69 483.90 83.37 442.94 95.36 403.57 C 117.13 331.56 156.77 265.08 209.55 211.49 C 258.82 161.22 319.55 122.23 385.84 98.55 C 428.80 83.16 474.05 74.05 519.63 71.86 M 384.80 195.86 C 316.73 227.31 258.60 279.61 219.68 343.65 C 189.75 392.72 171.49 448.79 166.52 506.04 C 162.09 556.15 167.47 607.17 182.74 655.13 C 194.57 692.52 212.38 727.99 235.21 759.87 C 278.80 820.83 340.52 868.95 410.90 894.99 C 392.02 863.11 373.80 830.84 355.14 798.83 C 351.38 791.94 346.94 785.40 343.74 778.21 C 341.02 771.10 340.85 763.36 341.78 755.89 C 344.39 742.27 354.19 730.29 367.12 725.20 C 378.29 720.85 391.37 721.47 401.90 727.28 C 409.03 731.05 415.00 737.02 418.78 744.16 C 451.98 801.63 485.17 859.10 518.37 916.57 C 518.86 918.15 520.55 918.35 521.97 918.38 C 552.41 920.02 583.09 918.33 613.07 912.69 C 578.45 852.72 543.70 792.82 509.22 732.77 C 505.31 723.85 504.02 713.60 506.98 704.20 C 510.26 691.76 519.95 681.40 531.88 676.76 C 542.50 672.78 554.71 673.38 564.94 678.28 C 566.33 679.10 567.74 679.95 569.18 680.74 C 570.76 681.82 572.27 683.01 573.76 684.24 C 575.23 685.41 576.58 686.74 577.74 688.24 C 582.80 694.28 586.06 701.54 590.16 708.22 C 624.76 768.22 659.54 828.12 694.02 888.18 C 720.85 876.65 746.50 862.10 769.68 844.33 C 763.02 833.89 757.21 822.94 750.91 812.29 C 719.50 757.97 688.15 703.61 656.74 649.29 C 653.75 643.90 650.26 638.75 648.10 632.94 C 645.19 624.25 645.24 614.83 648.10 606.15 C 652.95 591.96 665.87 580.97 680.73 578.74 C 685.18 578.24 689.67 578.32 694.12 578.78 C 700.81 580.30 707.45 582.81 712.80 587.21 C 716.77 590.30 720.04 594.24 722.66 598.53 C 758.94 661.33 795.22 724.14 831.49 786.95 C 851.84 763.48 869.08 737.38 883.17 709.71 C 873.74 692.33 863.43 675.40 853.67 658.19 C 824.17 607.11 794.66 556.04 765.17 504.96 C 758.34 493.47 757.75 478.53 763.59 466.52 C 767.90 457.36 775.73 449.97 785.07 446.09 C 787.32 445.15 789.67 444.48 792.02 443.83 C 797.69 443.02 803.45 443.09 809.13 443.74 C 810.70 444.25 812.30 444.68 813.91 445.12 C 815.58 445.75 817.22 446.48 818.85 447.25 C 819.89 447.74 820.94 448.23 822.00 448.73 C 824.13 450.26 826.27 451.81 828.29 453.49 C 835.00 459.27 838.52 467.60 843.03 475.01 C 866.58 515.75 890.11 556.51 913.66 597.25 C 915.01 599.71 916.65 602.05 917.55 604.74 C 922.02 578.09 923.79 550.98 922.65 523.98 C 919.84 450.93 895.20 378.86 852.39 319.58 C 808.66 258.59 746.71 210.65 676.24 184.63 C 582.71 149.68 475.32 153.63 384.80 195.86 Z"),w(i,"opacity","1.00"),w(i,"d"," M 416.48 271.62 C 421.50 271.38 426.53 271.37 431.55 271.57 L 431.63 272.24 C 433.11 272.37 434.59 272.52 436.07 272.70 C 437.35 273.24 438.65 273.74 439.96 274.23 C 441.60 274.78 443.17 275.51 444.74 276.25 C 445.91 276.85 446.96 277.64 447.98 278.50 C 448.31 278.49 448.98 278.48 449.31 278.47 L 449.43 279.61 L 450.27 279.52 C 454.86 283.41 459.18 287.71 462.25 292.94 C 463.74 295.83 465.10 298.79 466.18 301.87 C 466.98 304.59 467.55 307.36 467.86 310.18 C 468.46 313.37 468.49 316.67 467.87 319.86 C 467.63 321.58 467.41 323.31 467.15 325.03 C 466.81 326.07 466.51 327.11 466.23 328.17 C 465.65 329.81 465.07 331.46 464.39 333.06 C 464.14 333.57 463.64 334.60 463.39 335.11 C 461.58 338.60 459.34 341.83 456.75 344.79 C 456.45 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.01 347.45 453.76 347.75 C 452.09 349.09 450.46 350.48 448.77 351.80 C 448.01 352.19 447.26 352.58 446.51 352.97 C 446.50 354.24 445.95 355.20 444.85 355.84 C 420.32 374.71 397.93 396.45 378.73 420.73 C 371.82 430.90 362.12 439.64 350.12 443.15 C 343.26 445.27 335.94 444.96 328.89 444.22 C 325.82 443.37 322.78 442.46 319.82 441.30 C 302.65 434.03 291.72 415.38 292.85 396.90 C 293.73 386.62 297.66 376.39 304.96 368.95 C 327.94 339.24 354.69 312.44 384.12 289.09 C 386.73 287.07 389.10 284.65 392.15 283.27 C 393.71 282.07 395.28 280.89 396.91 279.79 C 400.14 277.90 403.48 276.20 406.91 274.69 C 410.03 273.64 413.13 272.37 416.47 272.25 L 416.48 271.62 Z"),w(e,"viewBox","0 0 1088 1076"),w(e,"version","1.1"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"class","svelte-1cmb9l6")},m(s,n){F(s,e,n),R(e,t),R(e,i)},p:ve,i:ve,o:ve,d(s){s&&x(e)}}}class Lf extends Ce{constructor(e){super(),Be(this,e,null,Ff,Ee,{})}}function kf(l){let e;return{c(){e=V("hr"),this.h()},l(t){e=G(t,"HR",{class:!0}),this.h()},h(){w(e,"class","svelte-1845cc1")},m(t,i){F(t,e,i)},p:ve,i:ve,o:ve,d(t){t&&x(e)}}}class Ns extends Ce{constructor(e){super(),Be(this,e,null,kf,Ee,{})}}function Of(l){let e,t,i,s,n,r,o,a,h,c,u,f,d,p,g,y,m,_;return i=new If({}),r=new Df({}),h=new Lf({}),u=new Ns({}),g=new Rf({}),{c(){e=V("div"),t=V("button"),ie(i.$$.fragment),s=j(),n=V("button"),ie(r.$$.fragment),o=j(),a=V("button"),ie(h.$$.fragment),c=j(),ie(u.$$.fragment),f=j(),d=V("a"),p=V("button"),ie(g.$$.fragment),this.h()},l(b){e=G(b,"DIV",{class:!0});var v=$(e);t=G(v,"BUTTON",{class:!0});var T=$(t);se(i.$$.fragment,T),T.forEach(x),s=Y(v),n=G(v,"BUTTON",{class:!0});var A=$(n);se(r.$$.fragment,A),A.forEach(x),o=Y(v),a=G(v,"BUTTON",{class:!0});var I=$(a);se(h.$$.fragment,I),I.forEach(x),c=Y(v),se(u.$$.fragment,v),f=Y(v),d=G(v,"A",{href:!0,target:!0});var E=$(d);p=G(E,"BUTTON",{class:!0});var U=$(p);se(g.$$.fragment,U),U.forEach(x),E.forEach(x),v.forEach(x),this.h()},h(){w(t,"class","svelte-1qm3uw7"),K(t,"active",l[0]=="preview"),w(n,"class","svelte-1qm3uw7"),K(n,"active",l[0]=="realtime"),w(a,"class","svelte-1qm3uw7"),K(a,"active",l[0]=="compute"),w(p,"class","active svelte-1qm3uw7"),w(d,"href","https://github.com/Domenicobrz/C2-Renderer"),w(d,"target","_blank"),w(e,"class","left-sidebar svelte-1qm3uw7")},m(b,v){F(b,e,v),R(e,t),ne(i,t,null),R(e,s),R(e,n),ne(r,n,null),R(e,o),R(e,a),ne(h,a,null),R(e,c),ne(u,e,null),R(e,f),R(e,d),R(d,p),ne(g,p,null),y=!0,m||(_=[oe(t,"click",l[1]),oe(n,"click",l[2]),oe(a,"click",l[3])],m=!0)},p(b,[v]){(!y||v&1)&&K(t,"active",b[0]=="preview"),(!y||v&1)&&K(n,"active",b[0]=="realtime"),(!y||v&1)&&K(a,"active",b[0]=="compute")},i(b){y||(Q(i.$$.fragment,b),Q(r.$$.fragment,b),Q(h.$$.fragment,b),Q(u.$$.fragment,b),Q(g.$$.fragment,b),y=!0)},o(b){ee(i.$$.fragment,b),ee(r.$$.fragment,b),ee(h.$$.fragment,b),ee(u.$$.fragment,b),ee(g.$$.fragment,b),y=!1},d(b){b&&x(e),re(i),re(r),re(h),re(u),re(g),m=!1,yt(_)}}}function Uf(l,e,t){let i;return it(l,ws,o=>t(0,i=o)),[i,()=>qt(ws,i="preview",i),()=>qt(ws,i="realtime",i),()=>qt(ws,i="compute",i)]}class Vf extends Ce{constructor(e){super(),Be(this,e,Uf,Of,Ee,{})}}function uo(l){return Object.prototype.toString.call(l)==="[object Date]"}function Ar(l,e,t,i){if(typeof t=="number"||uo(t)){const s=i-t,n=(t-e)/(l.dt||1/60),r=l.opts.stiffness*s,o=l.opts.damping*n,a=(r-o)*l.inv_mass,h=(n+a)*l.dt;return Math.abs(h)<l.opts.precision&&Math.abs(s)<l.opts.precision?i:(l.settled=!1,uo(t)?new Date(t.getTime()+h):t+h)}else{if(Array.isArray(t))return t.map((s,n)=>Ar(l,e[n],t[n],i[n]));if(typeof t=="object"){const s={};for(const n in t)s[n]=Ar(l,e[n],t[n],i[n]);return s}else throw new Error(`Cannot spring ${typeof t} values`)}}function Gf(l,e={}){const t=Yt(l),{stiffness:i=.15,damping:s=.8,precision:n=.01}=e;let r,o,a,h=l,c=l,u=1,f=0,d=!1;function p(y,m={}){c=y;const _=a={};return l==null||m.hard||g.stiffness>=1&&g.damping>=1?(d=!0,r=Kr(),h=y,t.set(l=c),Promise.resolve()):(m.soft&&(f=1/((m.soft===!0?.5:+m.soft)*60),u=0),o||(r=Kr(),d=!1,o=zl(b=>{if(d)return d=!1,o=null,!1;u=Math.min(u+f,1);const v={inv_mass:u,opts:g,settled:!0,dt:(b-r)*60/1e3},T=Ar(v,h,l,c);return r=b,h=l,t.set(l=T),v.settled&&(o=null),!v.settled})),new Promise(b=>{o.promise.then(()=>{_===a&&b()})}))}const g={set:p,update:(y,m)=>p(y(c,l),m),subscribe:t.subscribe,stiffness:i,damping:s,precision:n};return g}function co(l,e,t){const i=l.slice();return i[37]=e[t],i[39]=t,i}function fo(l){let e,t,i,s,n=(l[6]==="label"||l[7]==="label")&&po(l);return{c(){e=V("span"),n&&n.c(),this.h()},l(r){e=G(r,"SPAN",{class:!0,style:!0});var o=$(e);n&&n.l(o),o.forEach(x),this.h()},h(){w(e,"class","pip first"),w(e,"style",t=l[14]+": 0%;"),K(e,"selected",l[18](l[0])),K(e,"in-range",l[17](l[0]))},m(r,o){F(r,e,o),n&&n.m(e,null),i||(s=[oe(e,"pointerdown",l[30]),oe(e,"pointerup",l[31])],i=!0)},p(r,o){r[6]==="label"||r[7]==="label"?n?n.p(r,o):(n=po(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o[0]&16384&&t!==(t=r[14]+": 0%;")&&w(e,"style",t),o[0]&262145&&K(e,"selected",r[18](r[0])),o[0]&131073&&K(e,"in-range",r[17](r[0]))},d(r){r&&x(e),n&&n.d(),i=!1,yt(s)}}}function po(l){let e,t,i,s=l[12](l[16](l[0]),0,0)+"",n,r=l[10]&&mo(l),o=l[11]&&go(l);return{c(){e=V("span"),r&&r.c(),t=Ue(),i=new Tn(!1),n=Ue(),o&&o.c(),this.h()},l(a){e=G(a,"SPAN",{class:!0});var h=$(e);r&&r.l(h),t=Ue(),i=An(h,!1),n=Ue(),o&&o.l(h),h.forEach(x),this.h()},h(){i.a=n,w(e,"class","pipVal")},m(a,h){F(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),o&&o.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=mo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&69633&&s!==(s=a[12](a[16](a[0]),0,0)+"")&&i.p(s),a[11]?o?o.p(a,h):(o=go(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(a){a&&x(e),r&&r.d(),o&&o.d()}}}function mo(l){let e,t;return{c(){e=V("span"),t=me(l[10]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[10]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-prefix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Oe(t,i[10])},d(i){i&&x(e)}}}function go(l){let e,t;return{c(){e=V("span"),t=me(l[11]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[11]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-suffix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Oe(t,i[11])},d(i){i&&x(e)}}}function yo(l){let e,t=bn(Array(l[20]+1)),i=[];for(let s=0;s<t.length;s+=1)i[s]=_o(co(l,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Ue()},l(s){for(let n=0;n<i.length;n+=1)i[n].l(s);e=Ue()},m(s,n){for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(s,n);F(s,e,n)},p(s,n){if(n[0]&8314435){t=bn(Array(s[20]+1));let r;for(r=0;r<t.length;r+=1){const o=co(s,t,r);i[r]?i[r].p(o,n):(i[r]=_o(o),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=t.length}},d(s){s&&x(e),Oo(i,s)}}}function vo(l){let e,t,i,s,n,r=(l[6]==="label"||l[9]==="label")&&xo(l);function o(...a){return l[33](l[39],...a)}return{c(){e=V("span"),r&&r.c(),t=j(),this.h()},l(a){e=G(a,"SPAN",{class:!0,style:!0});var h=$(e);r&&r.l(h),t=Y(h),h.forEach(x),this.h()},h(){w(e,"class","pip"),w(e,"style",i=l[14]+": "+l[15](l[19](l[39]))+"%;"),K(e,"selected",l[18](l[19](l[39]))),K(e,"in-range",l[17](l[19](l[39])))},m(a,h){F(a,e,h),r&&r.m(e,null),R(e,t),s||(n=[oe(e,"pointerdown",l[32]),oe(e,"pointerup",o)],s=!0)},p(a,h){l=a,l[6]==="label"||l[9]==="label"?r?r.p(l,h):(r=xo(l),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&573440&&i!==(i=l[14]+": "+l[15](l[19](l[39]))+"%;")&&w(e,"style",i),h[0]&786432&&K(e,"selected",l[18](l[19](l[39]))),h[0]&655360&&K(e,"in-range",l[17](l[19](l[39])))},d(a){a&&x(e),r&&r.d(),s=!1,yt(n)}}}function xo(l){let e,t,i,s=l[12](l[19](l[39]),l[39],l[15](l[19](l[39])))+"",n,r=l[10]&&bo(l),o=l[11]&&wo(l);return{c(){e=V("span"),r&&r.c(),t=Ue(),i=new Tn(!1),n=Ue(),o&&o.c(),this.h()},l(a){e=G(a,"SPAN",{class:!0});var h=$(e);r&&r.l(h),t=Ue(),i=An(h,!1),n=Ue(),o&&o.l(h),h.forEach(x),this.h()},h(){i.a=n,w(e,"class","pipVal")},m(a,h){F(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),o&&o.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=bo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&561152&&s!==(s=a[12](a[19](a[39]),a[39],a[15](a[19](a[39])))+"")&&i.p(s),a[11]?o?o.p(a,h):(o=wo(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(a){a&&x(e),r&&r.d(),o&&o.d()}}}function bo(l){let e,t;return{c(){e=V("span"),t=me(l[10]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[10]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-prefix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Oe(t,i[10])},d(i){i&&x(e)}}}function wo(l){let e,t;return{c(){e=V("span"),t=me(l[11]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[11]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-suffix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Oe(t,i[11])},d(i){i&&x(e)}}}function _o(l){let e=l[19](l[39])!==l[0]&&l[19](l[39])!==l[1],t,i=e&&vo(l);return{c(){i&&i.c(),t=Ue()},l(s){i&&i.l(s),t=Ue()},m(s,n){i&&i.m(s,n),F(s,t,n)},p(s,n){n[0]&524291&&(e=s[19](s[39])!==s[0]&&s[19](s[39])!==s[1]),e?i?i.p(s,n):(i=vo(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(s){s&&x(t),i&&i.d(s)}}}function So(l){let e,t,i,s,n=(l[6]==="label"||l[8]==="label")&&Mo(l);return{c(){e=V("span"),n&&n.c(),this.h()},l(r){e=G(r,"SPAN",{class:!0,style:!0});var o=$(e);n&&n.l(o),o.forEach(x),this.h()},h(){w(e,"class","pip last"),w(e,"style",t=l[14]+": 100%;"),K(e,"selected",l[18](l[1])),K(e,"in-range",l[17](l[1]))},m(r,o){F(r,e,o),n&&n.m(e,null),i||(s=[oe(e,"pointerdown",l[34]),oe(e,"pointerup",l[35])],i=!0)},p(r,o){r[6]==="label"||r[8]==="label"?n?n.p(r,o):(n=Mo(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o[0]&16384&&t!==(t=r[14]+": 100%;")&&w(e,"style",t),o[0]&262146&&K(e,"selected",r[18](r[1])),o[0]&131074&&K(e,"in-range",r[17](r[1]))},d(r){r&&x(e),n&&n.d(),i=!1,yt(s)}}}function Mo(l){let e,t,i,s=l[12](l[16](l[1]),l[20],100)+"",n,r=l[10]&&To(l),o=l[11]&&Ao(l);return{c(){e=V("span"),r&&r.c(),t=Ue(),i=new Tn(!1),n=Ue(),o&&o.c(),this.h()},l(a){e=G(a,"SPAN",{class:!0});var h=$(e);r&&r.l(h),t=Ue(),i=An(h,!1),n=Ue(),o&&o.l(h),h.forEach(x),this.h()},h(){i.a=n,w(e,"class","pipVal")},m(a,h){F(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),o&&o.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=To(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&1118210&&s!==(s=a[12](a[16](a[1]),a[20],100)+"")&&i.p(s),a[11]?o?o.p(a,h):(o=Ao(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(a){a&&x(e),r&&r.d(),o&&o.d()}}}function To(l){let e,t;return{c(){e=V("span"),t=me(l[10]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[10]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-prefix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Oe(t,i[10])},d(i){i&&x(e)}}}function Ao(l){let e,t;return{c(){e=V("span"),t=me(l[11]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[11]),s.forEach(x),this.h()},h(){w(e,"class","pipVal-suffix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Oe(t,i[11])},d(i){i&&x(e)}}}function qf(l){let e,t,i,s=(l[6]&&l[7]!==!1||l[7])&&fo(l),n=(l[6]&&l[9]!==!1||l[9])&&yo(l),r=(l[6]&&l[8]!==!1||l[8])&&So(l);return{c(){e=V("div"),s&&s.c(),t=j(),n&&n.c(),i=j(),r&&r.c(),this.h()},l(o){e=G(o,"DIV",{class:!0});var a=$(e);s&&s.l(a),t=Y(a),n&&n.l(a),i=Y(a),r&&r.l(a),a.forEach(x),this.h()},h(){w(e,"class","rangePips"),K(e,"disabled",l[5]),K(e,"hoverable",l[4]),K(e,"vertical",l[2]),K(e,"reversed",l[3]),K(e,"focus",l[13])},m(o,a){F(o,e,a),s&&s.m(e,null),R(e,t),n&&n.m(e,null),R(e,i),r&&r.m(e,null)},p(o,a){o[6]&&o[7]!==!1||o[7]?s?s.p(o,a):(s=fo(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),o[6]&&o[9]!==!1||o[9]?n?n.p(o,a):(n=yo(o),n.c(),n.m(e,i)):n&&(n.d(1),n=null),o[6]&&o[8]!==!1||o[8]?r?r.p(o,a):(r=So(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null),a[0]&32&&K(e,"disabled",o[5]),a[0]&16&&K(e,"hoverable",o[4]),a[0]&4&&K(e,"vertical",o[2]),a[0]&8&&K(e,"reversed",o[3]),a[0]&8192&&K(e,"focus",o[13])},i:ve,o:ve,d(o){o&&x(e),s&&s.d(),n&&n.d(),r&&r.d()}}}function Hf(l,e,t){let i,s,n,r,o,{range:a=!1}=e,{min:h=0}=e,{max:c=100}=e,{step:u=1}=e,{values:f=[(c+h)/2]}=e,{vertical:d=!1}=e,{reversed:p=!1}=e,{hoverable:g=!0}=e,{disabled:y=!1}=e,{pipstep:m=void 0}=e,{all:_=!0}=e,{first:b=void 0}=e,{last:v=void 0}=e,{rest:T=void 0}=e,{prefix:A=""}=e,{suffix:I=""}=e,{formatter:E=(D,ye,Te)=>D}=e,{focus:U=void 0}=e,{orientationStart:C=void 0}=e,{percentOf:B=void 0}=e,{moveHandle:N=void 0}=e,{fixFloat:k=void 0}=e,{normalisedClient:z=void 0}=e,L;function q(D){D=z(D),L={x:D.clientX,y:D.clientY}}function ae(D,ye){if(ye=z(ye),!y){const Te=Math.sqrt(Math.pow(L.x-ye.clientX,2)+Math.pow(L.y-ye.clientY,2));L&&Te<=5&&N(void 0,D)}}const de=D=>{q(D)},X=D=>{ae(h,D)},J=D=>{q(D)},ue=(D,ye)=>{ae(n(D),ye)},le=D=>{q(D)},H=D=>{ae(c,D)};return l.$$set=D=>{"range"in D&&t(23,a=D.range),"min"in D&&t(0,h=D.min),"max"in D&&t(1,c=D.max),"step"in D&&t(24,u=D.step),"values"in D&&t(25,f=D.values),"vertical"in D&&t(2,d=D.vertical),"reversed"in D&&t(3,p=D.reversed),"hoverable"in D&&t(4,g=D.hoverable),"disabled"in D&&t(5,y=D.disabled),"pipstep"in D&&t(26,m=D.pipstep),"all"in D&&t(6,_=D.all),"first"in D&&t(7,b=D.first),"last"in D&&t(8,v=D.last),"rest"in D&&t(9,T=D.rest),"prefix"in D&&t(10,A=D.prefix),"suffix"in D&&t(11,I=D.suffix),"formatter"in D&&t(12,E=D.formatter),"focus"in D&&t(13,U=D.focus),"orientationStart"in D&&t(14,C=D.orientationStart),"percentOf"in D&&t(15,B=D.percentOf),"moveHandle"in D&&t(27,N=D.moveHandle),"fixFloat"in D&&t(16,k=D.fixFloat),"normalisedClient"in D&&t(28,z=D.normalisedClient)},l.$$.update=()=>{l.$$.dirty[0]&83886087&&t(29,i=m||((c-h)/u>=(d?50:100)?(c-h)/(d?10:20):1)),l.$$.dirty[0]&553648131&&t(20,s=parseInt((c-h)/(u*i),10)),l.$$.dirty[0]&553713665&&t(19,n=function(D){return k(h+D*u*i)}),l.$$.dirty[0]&33619968&&t(18,r=function(D){return f.some(ye=>k(ye)===k(D))}),l.$$.dirty[0]&41943040&&t(17,o=function(D){if(a==="min")return f[0]>D;if(a==="max")return f[0]<D;if(a)return f[0]<D&&f[1]>D})},[h,c,d,p,g,y,_,b,v,T,A,I,E,U,C,B,k,o,r,n,s,q,ae,a,u,f,m,N,z,i,de,X,J,ue,le,H]}class Wf extends Ce{constructor(e){super(),Be(this,e,Hf,qf,Ee,{range:23,min:0,max:1,step:24,values:25,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:26,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:27,fixFloat:16,normalisedClient:28},null,[-1,-1])}}function Eo(l,e,t){const i=l.slice();return i[65]=e[t],i[67]=t,i}function Co(l){let e,t,i,s=l[21](l[65],l[67],l[24](l[65]))+"",n,r=l[18]&&Bo(l),o=l[19]&&Po(l);return{c(){e=V("span"),r&&r.c(),t=Ue(),i=new Tn(!1),n=Ue(),o&&o.c(),this.h()},l(a){e=G(a,"SPAN",{class:!0});var h=$(e);r&&r.l(h),t=Ue(),i=An(h,!1),n=Ue(),o&&o.l(h),h.forEach(x),this.h()},h(){i.a=n,w(e,"class","rangeFloat")},m(a,h){F(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),o&&o.m(e,null)},p(a,h){a[18]?r?r.p(a,h):(r=Bo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&18874369&&s!==(s=a[21](a[65],a[67],a[24](a[65]))+"")&&i.p(s),a[19]?o?o.p(a,h):(o=Po(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(a){a&&x(e),r&&r.d(),o&&o.d()}}}function Bo(l){let e,t;return{c(){e=V("span"),t=me(l[18]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[18]),s.forEach(x),this.h()},h(){w(e,"class","rangeFloat-prefix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&262144&&Oe(t,i[18])},d(i){i&&x(e)}}}function Po(l){let e,t;return{c(){e=V("span"),t=me(l[19]),this.h()},l(i){e=G(i,"SPAN",{class:!0});var s=$(e);t=ge(s,l[19]),s.forEach(x),this.h()},h(){w(e,"class","rangeFloat-suffix")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s[0]&524288&&Oe(t,i[19])},d(i){i&&x(e)}}}function Ro(l){let e,t,i,s,n,r,o,a,h,c,u,f,d,p=l[7]&&Co(l);return{c(){e=V("span"),t=V("span"),i=j(),p&&p.c(),this.h()},l(g){e=G(g,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-label":!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var y=$(e);t=G(y,"SPAN",{class:!0}),$(t).forEach(x),i=Y(y),p&&p.l(y),y.forEach(x),this.h()},h(){w(t,"class","rangeNub"),w(e,"role","slider"),w(e,"class","rangeHandle"),w(e,"data-handle",l[67]),w(e,"style",s=l[29]+": "+l[30][l[67]]+"%; z-index: "+(l[27]===l[67]?3:2)+";"),w(e,"aria-label",n=l[22][l[67]]),w(e,"aria-valuemin",r=l[2]===!0&&l[67]===1?l[0][0]:l[3]),w(e,"aria-valuemax",o=l[2]===!0&&l[67]===0?l[0][1]:l[4]),w(e,"aria-valuenow",a=l[65]),w(e,"aria-valuetext",h=""+(l[18]+Do(l[21](l[65],l[67],l[24](l[65])))+l[19])),w(e,"aria-orientation",c=l[6]?"vertical":"horizontal"),w(e,"aria-disabled",l[10]),w(e,"disabled",l[10]),w(e,"tabindex",u=l[10]?-1:0),K(e,"active",l[25]&&l[27]===l[67]),K(e,"press",l[26]&&l[27]===l[67])},m(g,y){F(g,e,y),R(e,t),R(e,i),p&&p.m(e,null),f||(d=[oe(e,"blur",l[35]),oe(e,"focus",l[36]),oe(e,"keydown",l[37])],f=!0)},p(g,y){g[7]?p?p.p(g,y):(p=Co(g),p.c(),p.m(e,null)):p&&(p.d(1),p=null),y[0]&1744830464&&s!==(s=g[29]+": "+g[30][g[67]]+"%; z-index: "+(g[27]===g[67]?3:2)+";")&&w(e,"style",s),y[0]&4194304&&n!==(n=g[22][g[67]])&&w(e,"aria-label",n),y[0]&13&&r!==(r=g[2]===!0&&g[67]===1?g[0][0]:g[3])&&w(e,"aria-valuemin",r),y[0]&21&&o!==(o=g[2]===!0&&g[67]===0?g[0][1]:g[4])&&w(e,"aria-valuemax",o),y[0]&1&&a!==(a=g[65])&&w(e,"aria-valuenow",a),y[0]&19660801&&h!==(h=""+(g[18]+Do(g[21](g[65],g[67],g[24](g[65])))+g[19]))&&w(e,"aria-valuetext",h),y[0]&64&&c!==(c=g[6]?"vertical":"horizontal")&&w(e,"aria-orientation",c),y[0]&1024&&w(e,"aria-disabled",g[10]),y[0]&1024&&w(e,"disabled",g[10]),y[0]&1024&&u!==(u=g[10]?-1:0)&&w(e,"tabindex",u),y[0]&167772160&&K(e,"active",g[25]&&g[27]===g[67]),y[0]&201326592&&K(e,"press",g[26]&&g[27]===g[67])},d(g){g&&x(e),p&&p.d(),f=!1,yt(d)}}}function zo(l){let e,t;return{c(){e=V("span"),this.h()},l(i){e=G(i,"SPAN",{class:!0,style:!0}),$(e).forEach(x),this.h()},h(){w(e,"class","rangeBar"),w(e,"style",t=l[29]+": "+l[33](l[30])+"%; "+l[28]+": "+l[34](l[30])+"%;")},m(i,s){F(i,e,s)},p(i,s){s[0]&1879048192&&t!==(t=i[29]+": "+i[33](i[30])+"%; "+i[28]+": "+i[34](i[30])+"%;")&&w(e,"style",t)},d(i){i&&x(e)}}}function Io(l){let e,t;return e=new Wf({props:{values:l[0],min:l[3],max:l[4],step:l[5],range:l[2],vertical:l[6],reversed:l[8],orientationStart:l[29],hoverable:l[9],disabled:l[10],all:l[13],first:l[14],last:l[15],rest:l[16],pipstep:l[12],prefix:l[18],suffix:l[19],formatter:l[20],focus:l[25],percentOf:l[24],moveHandle:l[32],fixFloat:l[31],normalisedClient:xn}}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.values=i[0]),s[0]&8&&(n.min=i[3]),s[0]&16&&(n.max=i[4]),s[0]&32&&(n.step=i[5]),s[0]&4&&(n.range=i[2]),s[0]&64&&(n.vertical=i[6]),s[0]&256&&(n.reversed=i[8]),s[0]&536870912&&(n.orientationStart=i[29]),s[0]&512&&(n.hoverable=i[9]),s[0]&1024&&(n.disabled=i[10]),s[0]&8192&&(n.all=i[13]),s[0]&16384&&(n.first=i[14]),s[0]&32768&&(n.last=i[15]),s[0]&65536&&(n.rest=i[16]),s[0]&4096&&(n.pipstep=i[12]),s[0]&262144&&(n.prefix=i[18]),s[0]&524288&&(n.suffix=i[19]),s[0]&1048576&&(n.formatter=i[20]),s[0]&33554432&&(n.focus=i[25]),s[0]&16777216&&(n.percentOf=i[24]),e.$set(n)},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function jf(l){let e,t,i,s,n,r,o=bn(l[0]),a=[];for(let u=0;u<o.length;u+=1)a[u]=Ro(Eo(l,o,u));let h=l[2]&&zo(l),c=l[11]&&Io(l);return{c(){e=V("div");for(let u=0;u<a.length;u+=1)a[u].c();t=j(),h&&h.c(),i=j(),c&&c.c(),this.h()},l(u){e=G(u,"DIV",{id:!0,role:!0,class:!0});var f=$(e);for(let d=0;d<a.length;d+=1)a[d].l(f);t=Y(f),h&&h.l(f),i=Y(f),c&&c.l(f),f.forEach(x),this.h()},h(){w(e,"id",l[17]),w(e,"role","none"),w(e,"class","rangeSlider"),K(e,"range",l[2]),K(e,"disabled",l[10]),K(e,"hoverable",l[9]),K(e,"vertical",l[6]),K(e,"reversed",l[8]),K(e,"focus",l[25]),K(e,"min",l[2]==="min"),K(e,"max",l[2]==="max"),K(e,"pips",l[11]),K(e,"pip-labels",l[13]==="label"||l[14]==="label"||l[15]==="label"||l[16]==="label")},m(u,f){F(u,e,f);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);R(e,t),h&&h.m(e,null),R(e,i),c&&c.m(e,null),l[51](e),s=!0,n||(r=[oe(window,"mousedown",l[40]),oe(window,"touchstart",l[40]),oe(window,"mousemove",l[41]),oe(window,"touchmove",l[41]),oe(window,"mouseup",l[42]),oe(window,"touchend",l[43]),oe(window,"keydown",l[44]),oe(e,"mousedown",l[38]),oe(e,"mouseup",l[39]),oe(e,"touchstart",Xr(l[38])),oe(e,"touchend",Xr(l[39]))],n=!0)},p(u,f){if(f[0]&1869350109|f[1]&112){o=bn(u[0]);let d;for(d=0;d<o.length;d+=1){const p=Eo(u,o,d);a[d]?a[d].p(p,f):(a[d]=Ro(p),a[d].c(),a[d].m(e,t))}for(;d<a.length;d+=1)a[d].d(1);a.length=o.length}u[2]?h?h.p(u,f):(h=zo(u),h.c(),h.m(e,i)):h&&(h.d(1),h=null),u[11]?c?(c.p(u,f),f[0]&2048&&Q(c,1)):(c=Io(u),c.c(),Q(c,1),c.m(e,null)):c&&(Vo(),ee(c,1,1,()=>{c=null}),Go()),(!s||f[0]&131072)&&w(e,"id",u[17]),(!s||f[0]&4)&&K(e,"range",u[2]),(!s||f[0]&1024)&&K(e,"disabled",u[10]),(!s||f[0]&512)&&K(e,"hoverable",u[9]),(!s||f[0]&64)&&K(e,"vertical",u[6]),(!s||f[0]&256)&&K(e,"reversed",u[8]),(!s||f[0]&33554432)&&K(e,"focus",u[25]),(!s||f[0]&4)&&K(e,"min",u[2]==="min"),(!s||f[0]&4)&&K(e,"max",u[2]==="max"),(!s||f[0]&2048)&&K(e,"pips",u[11]),(!s||f[0]&122880)&&K(e,"pip-labels",u[13]==="label"||u[14]==="label"||u[15]==="label"||u[16]==="label")},i(u){s||(Q(c),s=!0)},o(u){ee(c),s=!1},d(u){u&&x(e),Oo(a,u),h&&h.d(),c&&c.d(),l[51](null),n=!1,yt(r)}}}function No(l){if(!l)return-1;for(var e=0;l=l.previousElementSibling;)e++;return e}function xn(l){return l.type.includes("touch")?l.touches[0]||l.changedTouches[0]:l}function Do(l){return`${l}`.replace(/<[^>]*>/g,"")}function Yf(l,e,t){let i,s,n,r,o,a,h=ve,c=()=>(h(),h=Pl(nt,P=>t(30,a=P)),nt);l.$$.on_destroy.push(()=>h());let{slider:u=void 0}=e,{range:f=!1}=e,{pushy:d=!1}=e,{min:p=0}=e,{max:g=100}=e,{step:y=1}=e,{values:m=[(g+p)/2]}=e,{vertical:_=!1}=e,{float:b=!1}=e,{reversed:v=!1}=e,{hoverable:T=!0}=e,{disabled:A=!1}=e,{pips:I=!1}=e,{pipstep:E=void 0}=e,{all:U=void 0}=e,{first:C=void 0}=e,{last:B=void 0}=e,{rest:N=void 0}=e,{id:k=void 0}=e,{prefix:z=""}=e,{suffix:L=""}=e,{formatter:q=(P,te,pe)=>P}=e,{handleFormatter:ae=q}=e,{ariaLabels:de=[]}=e,{precision:X=2}=e,{springValues:J={stiffness:.15,damping:.4}}=e;const ue=Uo();let le=0,H=!1,D=!1,ye=!1,Te=!1,Me=m.length-1,Ae,ze,nt;const Xe=P=>parseFloat((+P).toFixed(X));function W(P){const te=u.querySelectorAll(".handle"),pe=Array.prototype.includes.call(te,P),be=Array.prototype.some.call(te,Ke=>Ke.contains(P));return pe||be}function ce(P){return f==="min"||f==="max"?P.slice(0,1):f?P.slice(0,2):P}function Ie(){return u.getBoundingClientRect()}function rt(P){const te=Ie();let pe=0,be=0,Ke=0;_?(pe=P.clientY-te.top,be=pe/te.height*100,be=v?be:100-be):(pe=P.clientX-te.left,be=pe/te.width*100,be=v?100-be:be),Ke=(g-p)/100*be+p;let xt;return f===!0&&m[0]===m[1]?Ke>m[1]?1:0:(xt=m.indexOf([...m].sort((_l,Sl)=>Math.abs(Ke-_l)-Math.abs(Ke-Sl))[0]),xt)}function It(P){const te=Ie();let pe=0,be=0,Ke=0;_?(pe=P.clientY-te.top,be=pe/te.height*100,be=v?be:100-be):(pe=P.clientX-te.left,be=pe/te.width*100,be=v?100-be:be),Ke=(g-p)/100*be+p,et(Me,Ke)}function et(P,te){return te=n(te),typeof P>"u"&&(P=Me),f&&(P===0&&te>m[1]?d?t(0,m[1]=te,m):te=m[1]:P===1&&te<m[0]&&(d?t(0,m[0]=te,m):te=m[0])),m[P]!==te&&t(0,m[P]=te,m),ze!==te&&(O(),ze=te),te}function $e(P){return f==="min"?0:P[0]}function os(P){return f==="max"?0:f==="min"?100-P[0]:100-P[1]}function Nt(P){Te&&(t(25,H=!1),D=!1,t(26,ye=!1))}function ls(P){A||(t(27,Me=No(P.target)),t(25,H=!0))}function vt(P){if(!A){const te=No(P.target);let pe=P.ctrlKey||P.metaKey||P.shiftKey?y*10:y,be=!1;switch(P.key){case"PageDown":pe*=10;case"ArrowRight":case"ArrowUp":et(te,m[te]+pe),be=!0;break;case"PageUp":pe*=10;case"ArrowLeft":case"ArrowDown":et(te,m[te]-pe),be=!0;break;case"Home":et(te,p),be=!0;break;case"End":et(te,g),be=!0;break}be&&(P.preventDefault(),P.stopPropagation())}}function Ri(P){if(!A){const te=P.target,pe=xn(P);t(25,H=!0),D=!0,t(26,ye=!0),t(27,Me=rt(pe)),Ae=ze=n(m[Me]),zn(),P.type==="touchstart"&&!te.matches(".pipVal")&&It(pe)}}function Ct(P){P.type==="touchend"&&us(),t(26,ye=!1)}function Zt(P){Te=!1,H&&P.target!==u&&!u.contains(P.target)&&t(25,H=!1)}function hs(P){A||D&&It(xn(P))}function Ls(P){if(!A){const te=P.target;D&&((te===u||u.contains(te))&&(t(25,H=!0),!W(te)&&!te.matches(".pipVal")&&It(xn(P))),us())}D=!1,t(26,ye=!1)}function Rn(P){D=!1,t(26,ye=!1)}function ks(P){A||(P.target===u||u.contains(P.target))&&(Te=!0)}function zn(){!A&&ue("start",{activeHandle:Me,value:Ae,values:m.map(P=>n(P))})}function us(){!A&&ue("stop",{activeHandle:Me,startValue:Ae,value:m[Me],values:m.map(P=>n(P))})}function O(){!A&&ue("change",{activeHandle:Me,startValue:Ae,previousValue:typeof ze>"u"?Ae:ze,value:m[Me],values:m.map(P=>n(P))})}function he(P){st[P?"unshift":"push"](()=>{u=P,t(1,u)})}return l.$$set=P=>{"slider"in P&&t(1,u=P.slider),"range"in P&&t(2,f=P.range),"pushy"in P&&t(45,d=P.pushy),"min"in P&&t(3,p=P.min),"max"in P&&t(4,g=P.max),"step"in P&&t(5,y=P.step),"values"in P&&t(0,m=P.values),"vertical"in P&&t(6,_=P.vertical),"float"in P&&t(7,b=P.float),"reversed"in P&&t(8,v=P.reversed),"hoverable"in P&&t(9,T=P.hoverable),"disabled"in P&&t(10,A=P.disabled),"pips"in P&&t(11,I=P.pips),"pipstep"in P&&t(12,E=P.pipstep),"all"in P&&t(13,U=P.all),"first"in P&&t(14,C=P.first),"last"in P&&t(15,B=P.last),"rest"in P&&t(16,N=P.rest),"id"in P&&t(17,k=P.id),"prefix"in P&&t(18,z=P.prefix),"suffix"in P&&t(19,L=P.suffix),"formatter"in P&&t(20,q=P.formatter),"handleFormatter"in P&&t(21,ae=P.handleFormatter),"ariaLabels"in P&&t(22,de=P.ariaLabels),"precision"in P&&t(46,X=P.precision),"springValues"in P&&t(47,J=P.springValues)},l.$$.update=()=>{if(l.$$.dirty[0]&24&&t(50,s=function(P){return P<=p?p:P>=g?g:P}),l.$$.dirty[0]&56|l.$$.dirty[1]&524288&&t(49,n=function(P){if(P<=p)return Xe(p);if(P>=g)return Xe(g);P=Xe(P);let te=(P-p)%y,pe=P-te;return Math.abs(te)*2>=y&&(pe+=te>0?y:-y),pe=s(pe),Xe(pe)}),l.$$.dirty[0]&24&&t(24,i=function(P){let te=(P-p)/(g-p)*100;return isNaN(te)||te<=0?0:te>=100?100:Xe(te)}),l.$$.dirty[0]&29360153|l.$$.dirty[1]&458752){Array.isArray(m)||(t(0,m=[(g+p)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)"));const P=ce(m.map(te=>n(te)));(m.length!==P.length||!m.every((te,pe)=>Xe(te)===P[pe]))&&t(0,m=P),le!==m.length?c(t(23,nt=Gf(m.map(te=>i(te)),J))):nt.set(m.map(te=>i(te))),t(48,le=m.length),m.length>1&&!Array.isArray(de)&&console.warn("'ariaLabels' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")}l.$$.dirty[0]&320&&t(29,r=_?v?"top":"bottom":v?"right":"left"),l.$$.dirty[0]&320&&t(28,o=_?v?"bottom":"top":v?"left":"right")},[m,u,f,p,g,y,_,b,v,T,A,I,E,U,C,B,N,k,z,L,q,ae,de,nt,i,H,ye,Me,o,r,a,Xe,et,$e,os,Nt,ls,vt,Ri,Ct,Zt,hs,Ls,Rn,ks,d,X,J,le,n,s,he]}class ss extends Ce{constructor(e){super(),Be(this,e,Yf,jf,Ee,{slider:1,range:2,pushy:45,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,ariaLabels:22,precision:46,springValues:47},null,[-1,-1,-1])}}function Xf(l){let e,t;return{c(){e=V("div"),this.h()},l(i){e=G(i,"DIV",{class:!0,style:!0}),$(e).forEach(x),this.h()},h(){w(e,"class","container"),w(e,"style",t=`margin: ${l[0]}px ${l[1]}px;`)},m(i,s){F(i,e,s)},p(i,[s]){s&3&&t!==(t=`margin: ${i[0]}px ${i[1]}px;`)&&w(e,"style",t)},i:ve,o:ve,d(i){i&&x(e)}}}function $f(l,e,t){let{vertical:i=0}=e,{horizontal:s=0}=e;return l.$$set=n=>{"vertical"in n&&t(0,i=n.vertical),"horizontal"in n&&t(1,s=n.horizontal)},[i,s]}class ke extends Ce{constructor(e){super(),Be(this,e,$f,Xf,Ee,{vertical:0,horizontal:1})}}function Kf(l){let e,t,i;return{c(){e=V("input"),this.h()},l(s){e=G(s,"INPUT",{type:!0,class:!0}),this.h()},h(){w(e,"type","checkbox"),w(e,"class","svelte-1ucetel")},m(s,n){F(s,e,n),e.checked=l[0],t||(i=oe(e,"change",l[1]),t=!0)},p(s,[n]){n&1&&(e.checked=s[0])},i:ve,o:ve,d(s){s&&x(e),t=!1,i()}}}function Zf(l,e,t){let{checked:i}=e;function s(){i=this.checked,t(0,i)}return l.$$set=n=>{"checked"in n&&t(0,i=n.checked)},[i,s]}class Jf extends Ce{constructor(e){super(),Be(this,e,Zf,Kf,Ee,{checked:0})}}function Qf(l){let e,t,i,s,n,r,o,a="Rotation X:",h,c,u,f,d,p,g,y="Rotation Y:",m,_,b,v,T,A,I,E="Use compensated distribution: ",U,C,B,N,k,z,L,q;c=new ss({props:{min:0,max:Math.PI*2,float:!0,values:[l[0].ENVMAP_ROTX],step:.1,springValues:{stiffness:1,damping:1}}}),c.$on("change",l[2]),f=new ke({props:{vertical:5}}),_=new ss({props:{min:0,max:Math.PI*2,float:!0,values:[l[0].ENVMAP_ROTY],step:.1,springValues:{stiffness:1,damping:1}}}),_.$on("change",l[3]),v=new ke({props:{vertical:12}});function ae(X){l[4](X)}let de={};return l[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION!==void 0&&(de.checked=l[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION),C=new Jf({props:de}),st.push(()=>Pt(C,"checked",ae)),k=new ke({props:{vertical:8}}),{c(){e=V("span"),t=me("Scale: "),i=V("input"),n=j(),r=V("div"),o=V("label"),o.textContent=a,h=j(),ie(c.$$.fragment),u=j(),ie(f.$$.fragment),d=j(),p=V("div"),g=V("label"),g.textContent=y,m=j(),ie(_.$$.fragment),b=j(),ie(v.$$.fragment),T=j(),A=V("div"),I=V("p"),I.textContent=E,U=j(),ie(C.$$.fragment),N=j(),ie(k.$$.fragment),this.h()},l(X){e=G(X,"SPAN",{class:!0});var J=$(e);t=ge(J,"Scale: "),i=G(J,"INPUT",{class:!0,type:!0}),J.forEach(x),n=Y(X),r=G(X,"DIV",{class:!0});var ue=$(r);o=G(ue,"LABEL",{class:!0,"data-svelte-h":!0}),Ve(o)!=="svelte-14q8bng"&&(o.textContent=a),h=Y(ue),se(c.$$.fragment,ue),ue.forEach(x),u=Y(X),se(f.$$.fragment,X),d=Y(X),p=G(X,"DIV",{class:!0});var le=$(p);g=G(le,"LABEL",{class:!0,"data-svelte-h":!0}),Ve(g)!=="svelte-lmzy5l"&&(g.textContent=y),m=Y(le),se(_.$$.fragment,le),le.forEach(x),b=Y(X),se(v.$$.fragment,X),T=Y(X),A=G(X,"DIV",{class:!0});var H=$(A);I=G(H,"P",{class:!0,"data-svelte-h":!0}),Ve(I)!=="svelte-36qtj4"&&(I.textContent=E),U=Y(H),se(C.$$.fragment,H),H.forEach(x),N=Y(X),se(k.$$.fragment,X),this.h()},h(){w(i,"class","envmap-scale-input svelte-925zij"),w(i,"type","text"),i.value=s=l[0].ENVMAP_SCALE,w(e,"class","svelte-925zij"),w(o,"class","large no-margin svelte-925zij"),w(r,"class","flex-row svelte-925zij"),w(g,"class","large no-margin svelte-925zij"),w(p,"class","flex-row svelte-925zij"),w(I,"class","svelte-925zij"),w(A,"class","flex-row svelte-925zij")},m(X,J){F(X,e,J),R(e,t),R(e,i),F(X,n,J),F(X,r,J),R(r,o),R(r,h),ne(c,r,null),F(X,u,J),ne(f,X,J),F(X,d,J),F(X,p,J),R(p,g),R(p,m),ne(_,p,null),F(X,b,J),ne(v,X,J),F(X,T,J),F(X,A,J),R(A,I),R(A,U),ne(C,A,null),F(X,N,J),ne(k,X,J),z=!0,L||(q=oe(i,"change",l[1]),L=!0)},p(X,[J]){(!z||J&1&&s!==(s=X[0].ENVMAP_SCALE)&&i.value!==s)&&(i.value=s);const ue={};J&1&&(ue.values=[X[0].ENVMAP_ROTX]),c.$set(ue);const le={};J&1&&(le.values=[X[0].ENVMAP_ROTY]),_.$set(le);const H={};!B&&J&1&&(B=!0,H.checked=X[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION,Bt(()=>B=!1)),C.$set(H)},i(X){z||(Q(c.$$.fragment,X),Q(f.$$.fragment,X),Q(_.$$.fragment,X),Q(v.$$.fragment,X),Q(C.$$.fragment,X),Q(k.$$.fragment,X),z=!0)},o(X){ee(c.$$.fragment,X),ee(f.$$.fragment,X),ee(_.$$.fragment,X),ee(v.$$.fragment,X),ee(C.$$.fragment,X),ee(k.$$.fragment,X),z=!1},d(X){X&&(x(e),x(n),x(r),x(u),x(d),x(p),x(b),x(T),x(A),x(N)),re(c),re(f,X),re(_),re(v,X),re(C),re(k,X),L=!1,q()}}}function ed(l,e,t){let i;it(l,je,a=>t(0,i=a));function s(a){const h=parseFloat(a.target.value);isNaN(h)||Le.setStoreProperty({ENVMAP_SCALE:h})}function n(a){const h=a.detail.value;isNaN(h)||Le.setStoreProperty({ENVMAP_ROTX:h})}function r(a){const h=a.detail.value;isNaN(h)||Le.setStoreProperty({ENVMAP_ROTY:h})}function o(a){l.$$.not_equal(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION,a)&&(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION=a,je.set(i))}return[i,s,n,r,o]}class td extends Ce{constructor(e){super(),Be(this,e,ed,Qf,Ee,{})}}function id(l){let e,t,i;return{c(){e=Je("svg"),t=Je("path"),i=Je("path"),this.h()},l(s){e=Qe(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=$(e);t=Qe(n,"path",{opacity:!0,d:!0}),$(t).forEach(x),i=Qe(n,"path",{opacity:!0,d:!0}),$(i).forEach(x),n.forEach(x),this.h()},h(){w(t,"opacity","1.00"),w(t,"d"," M 297.14 52.31 C 301.41 49.73 306.67 49.46 311.49 50.27 C 320.15 52.01 326.80 60.19 327.17 68.95 C 327.20 83.34 327.13 97.74 327.20 112.14 C 370.91 116.61 413.04 135.79 444.72 166.30 C 479.14 198.72 501.12 243.78 505.84 290.80 C 519.90 290.87 533.97 290.83 548.03 290.82 C 555.17 290.76 562.21 294.83 565.66 301.09 C 568.29 305.51 568.58 310.95 567.64 315.90 C 565.66 324.73 556.97 331.34 547.98 331.18 C 533.94 331.16 519.90 331.15 505.87 331.19 C 502.30 365.24 490.06 398.42 470.15 426.32 C 447.77 457.94 416.12 482.97 379.99 497.02 C 363.08 503.74 345.24 507.87 327.18 509.86 C 327.15 524.25 327.19 538.65 327.17 553.04 C 326.85 563.36 317.54 572.61 307.08 572.14 C 296.54 572.70 287.16 563.40 286.83 553.03 C 286.82 538.64 286.85 524.24 286.82 509.85 C 252.54 506.30 219.18 493.88 191.14 473.79 C 150.23 444.77 120.82 399.89 111.18 350.62 C 109.61 344.24 109.16 337.67 108.14 331.19 C 94.10 331.15 80.06 331.16 66.01 331.18 C 58.84 331.26 51.76 327.16 48.31 320.85 C 45.69 316.43 45.43 311.01 46.37 306.07 C 48.28 297.60 56.34 291.18 64.95 290.84 C 79.34 290.81 93.74 290.86 108.14 290.81 C 112.90 243.83 134.81 198.72 169.28 166.36 C 200.92 135.78 243.10 116.61 286.82 112.14 C 286.84 98.07 286.84 84.01 286.82 69.95 C 286.78 62.81 290.84 55.74 297.14 52.31 M 262.65 157.79 C 228.01 167.72 197.13 189.95 176.47 219.45 C 161.50 240.51 152.18 265.29 148.63 290.83 C 162.08 290.79 175.54 290.86 188.99 290.82 C 197.56 290.65 205.94 296.55 208.40 304.83 C 210.38 310.30 209.41 316.52 206.48 321.47 C 202.86 327.45 195.96 331.30 188.96 331.18 C 175.53 331.15 162.10 331.17 148.66 331.17 C 151.52 351.66 157.95 371.70 168.30 389.66 C 183.76 416.92 207.44 439.43 235.44 453.52 C 251.50 461.73 269.01 466.78 286.82 469.35 C 286.85 455.58 286.81 441.80 286.83 428.03 C 287.05 418.21 295.29 409.47 305.08 408.65 C 315.82 407.39 326.22 416.12 327.11 426.84 C 327.31 441.02 327.01 455.21 327.26 469.39 C 338.93 467.46 350.58 465.04 361.68 460.83 C 397.65 447.77 428.45 421.22 446.82 387.67 C 456.55 370.25 462.50 350.93 465.36 331.24 C 451.57 331.08 437.77 331.21 423.98 331.17 C 415.77 330.88 407.97 325.11 405.61 317.19 C 403.61 311.71 404.59 305.48 407.52 300.53 C 411.14 294.55 418.02 290.70 425.01 290.82 C 438.45 290.85 451.89 290.83 465.33 290.83 C 463.35 277.53 460.22 264.35 455.13 251.88 C 443.43 222.59 422.82 196.96 396.74 179.22 C 376.11 164.94 351.99 156.08 327.19 152.65 C 327.14 166.46 327.19 180.26 327.16 194.06 C 326.91 204.53 317.46 213.65 306.97 213.44 C 296.48 213.61 287.08 204.50 286.84 194.03 C 286.78 180.23 286.90 166.43 286.78 152.63 C 278.67 154.04 270.54 155.39 262.65 157.79 Z"),w(i,"opacity","1.00"),w(i,"d"," M 299.63 282.90 C 314.95 278.35 332.50 289.12 335.37 304.84 C 339.17 319.91 328.39 336.59 313.12 339.38 C 297.99 343.17 281.24 332.27 278.59 316.90 C 275.06 302.33 285.07 286.30 299.63 282.90 Z"),w(e,"viewBox","0 0 620 614"),w(e,"version","1.1"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"class","svelte-1cmb9l6")},m(s,n){F(s,e,n),R(e,t),R(e,i)},p:ve,i:ve,o:ve,d(s){s&&x(e)}}}class sd extends Ce{constructor(e){super(),Be(this,e,null,id,Ee,{})}}function nd(l){let e,t,i,s,n,r,o,a;return{c(){e=V("div"),t=V("p"),i=me(l[1]),s=j(),n=V("div"),r=V("div"),this.h()},l(h){e=G(h,"DIV",{class:!0});var c=$(e);t=G(c,"P",{class:!0});var u=$(t);i=ge(u,l[1]),u.forEach(x),s=Y(c),n=G(c,"DIV",{class:!0});var f=$(n);r=G(f,"DIV",{class:!0}),$(r).forEach(x),f.forEach(x),c.forEach(x),this.h()},h(){w(t,"class","svelte-da9a43"),w(r,"class","thumb svelte-da9a43"),K(r,"checked",l[0]),w(n,"class","toggle-container svelte-da9a43"),K(n,"checked",l[0]),w(e,"class","container svelte-da9a43")},m(h,c){F(h,e,c),R(e,t),R(t,i),R(e,s),R(e,n),R(n,r),o||(a=oe(n,"click",l[2]),o=!0)},p(h,[c]){c&2&&Oe(i,h[1]),c&1&&K(r,"checked",h[0]),c&1&&K(n,"checked",h[0])},i:ve,o:ve,d(h){h&&x(e),o=!1,a()}}}function rd(l,e,t){const i=Uo();let{checked:s=!1}=e,{label:n=""}=e;function r(){t(0,s=!s),i("change",{value:s})}return l.$$set=o=>{"checked"in o&&t(0,s=o.checked),"label"in o&&t(1,n=o.label)},[s,n,r]}class Yr extends Ce{constructor(e){super(),Be(this,e,rd,nd,Ee,{checked:0,label:1})}}function ad(l){let e,t,i,s=pn(l[5].position)+"",n,r,o,a,h,c,u,f=pn(l[5].target)+"",d,p,g,y,m,_,b,v='Use <span class="kbtn svelte-1yl7uky">w</span><span class="kbtn svelte-1yl7uky">a</span><span class="kbtn svelte-1yl7uky">s</span><span class="kbtn svelte-1yl7uky">d</span><span class="kbtn svelte-1yl7uky">q</span><span class="kbtn svelte-1yl7uky">e</span>to move',T,A,I,E,U="Click & drag to rotate",C,B,N,k,z='Hold <span class="kbtn fit-to-size svelte-1yl7uky">shift</span>for precise movements',L,q,ae,de,X,J,ue,le,H,D,ye,Te,Me,Ae,ze,nt,Xe;return o=new ke({props:{vertical:3}}),g=new ke({props:{vertical:10}}),m=new Ns({}),A=new ke({props:{vertical:10}}),B=new ke({props:{vertical:10}}),q=new ke({props:{vertical:15}}),de=new Ns({}),D=new ke({props:{vertical:5}}),{c(){e=V("p"),t=me("Position: "),i=V("span"),n=me(s),r=j(),ie(o.$$.fragment),a=j(),h=V("p"),c=me("Target: "),u=V("span"),d=me(f),p=j(),ie(g.$$.fragment),y=j(),ie(m.$$.fragment),_=j(),b=V("p"),b.innerHTML=v,T=j(),ie(A.$$.fragment),I=j(),E=V("p"),E.textContent=U,C=j(),ie(B.$$.fragment),N=j(),k=V("p"),k.innerHTML=z,L=j(),ie(q.$$.fragment),ae=j(),ie(de.$$.fragment),X=j(),J=V("span"),ue=me("Movement speed: "),le=V("input"),H=j(),ie(D.$$.fragment),ye=j(),Te=V("span"),Me=me("Rotation speed: "),Ae=V("input"),this.h()},l(W){e=G(W,"P",{class:!0});var ce=$(e);t=ge(ce,"Position: "),i=G(ce,"SPAN",{class:!0});var Ie=$(i);n=ge(Ie,s),Ie.forEach(x),ce.forEach(x),r=Y(W),se(o.$$.fragment,W),a=Y(W),h=G(W,"P",{class:!0});var rt=$(h);c=ge(rt,"Target: "),u=G(rt,"SPAN",{class:!0});var It=$(u);d=ge(It,f),It.forEach(x),rt.forEach(x),p=Y(W),se(g.$$.fragment,W),y=Y(W),se(m.$$.fragment,W),_=Y(W),b=G(W,"P",{class:!0,"data-svelte-h":!0}),Ve(b)!=="svelte-o5lf2a"&&(b.innerHTML=v),T=Y(W),se(A.$$.fragment,W),I=Y(W),E=G(W,"P",{class:!0,"data-svelte-h":!0}),Ve(E)!=="svelte-uv6qyc"&&(E.textContent=U),C=Y(W),se(B.$$.fragment,W),N=Y(W),k=G(W,"P",{class:!0,"data-svelte-h":!0}),Ve(k)!=="svelte-syzokh"&&(k.innerHTML=z),L=Y(W),se(q.$$.fragment,W),ae=Y(W),se(de.$$.fragment,W),X=Y(W),J=G(W,"SPAN",{class:!0});var et=$(J);ue=ge(et,"Movement speed: "),le=G(et,"INPUT",{class:!0,type:!0}),et.forEach(x),H=Y(W),se(D.$$.fragment,W),ye=Y(W),Te=G(W,"SPAN",{class:!0});var $e=$(Te);Me=ge($e,"Rotation speed: "),Ae=G($e,"INPUT",{class:!0,type:!0}),$e.forEach(x),this.h()},h(){w(i,"class","svelte-1yl7uky"),w(e,"class","darken-span svelte-1yl7uky"),w(u,"class","svelte-1yl7uky"),w(h,"class","darken-span svelte-1yl7uky"),w(b,"class","svelte-1yl7uky"),w(E,"class","svelte-1yl7uky"),w(k,"class","svelte-1yl7uky"),w(le,"class","samples-limit-input svelte-1yl7uky"),w(le,"type","text"),w(J,"class","svelte-1yl7uky"),w(Ae,"class","samples-limit-input svelte-1yl7uky"),w(Ae,"type","text"),w(Te,"class","svelte-1yl7uky")},m(W,ce){F(W,e,ce),R(e,t),R(e,i),R(i,n),F(W,r,ce),ne(o,W,ce),F(W,a,ce),F(W,h,ce),R(h,c),R(h,u),R(u,d),F(W,p,ce),ne(g,W,ce),F(W,y,ce),ne(m,W,ce),F(W,_,ce),F(W,b,ce),F(W,T,ce),ne(A,W,ce),F(W,I,ce),F(W,E,ce),F(W,C,ce),ne(B,W,ce),F(W,N,ce),F(W,k,ce),F(W,L,ce),ne(q,W,ce),F(W,ae,ce),ne(de,W,ce),F(W,X,ce),F(W,J,ce),R(J,ue),R(J,le),Pe(le,l[5].movementSpeed),F(W,H,ce),ne(D,W,ce),F(W,ye,ce),F(W,Te,ce),R(Te,Me),R(Te,Ae),Pe(Ae,l[5].rotationSpeed),ze=!0,nt||(Xe=[oe(le,"input",l[21]),oe(Ae,"input",l[22])],nt=!0)},p(W,ce){(!ze||ce&32)&&s!==(s=pn(W[5].position)+"")&&Oe(n,s),(!ze||ce&32)&&f!==(f=pn(W[5].target)+"")&&Oe(d,f),ce&32&&le.value!==W[5].movementSpeed&&Pe(le,W[5].movementSpeed),ce&32&&Ae.value!==W[5].rotationSpeed&&Pe(Ae,W[5].rotationSpeed)},i(W){ze||(Q(o.$$.fragment,W),Q(g.$$.fragment,W),Q(m.$$.fragment,W),Q(A.$$.fragment,W),Q(B.$$.fragment,W),Q(q.$$.fragment,W),Q(de.$$.fragment,W),Q(D.$$.fragment,W),ze=!0)},o(W){ee(o.$$.fragment,W),ee(g.$$.fragment,W),ee(m.$$.fragment,W),ee(A.$$.fragment,W),ee(B.$$.fragment,W),ee(q.$$.fragment,W),ee(de.$$.fragment,W),ee(D.$$.fragment,W),ze=!1},d(W){W&&(x(e),x(r),x(a),x(h),x(p),x(y),x(_),x(b),x(T),x(I),x(E),x(C),x(N),x(k),x(L),x(ae),x(X),x(J),x(H),x(ye),x(Te)),re(o,W),re(g,W),re(m,W),re(A,W),re(B,W),re(q,W),re(de,W),re(D,W),nt=!1,yt(Xe)}}}function od(l){let e,t,i,s,n,r,o,a,h="Fov:",c,u,f,d,p,g,y,m,_,b,v,T,A,I,E="Focus distance:",U,C,B,N,k,z,L,q,ae,de,X,J,ue,le,H,D,ye,Te,Me,Ae,ze,nt,Xe,W,ce,Ie,rt,It="Cat&#39;s eye bokeh<br/>(mult, pow)",et,$e,os,Nt,ls,vt,Ri,Ct,Zt,hs,Ls;n=new ke({props:{vertical:5}});function Rn(O){l[13](O)}let ks={min:.001,max:Math.PI*.5,float:!0,step:wl,springValues:{stiffness:1,damping:1}};l[3]!==void 0&&(ks.values=l[3]),u=new ss({props:ks}),st.push(()=>Pt(u,"values",Rn)),u.$on("change",l[7]),p=new ke({props:{vertical:5}}),v=new ke({props:{vertical:5}}),C=new ke({props:{horizontal:5}}),z=new ke({props:{horizontal:5}}),ae=new sd({}),X=new ke({props:{vertical:15}}),Me=new ke({props:{vertical:15}});function zn(O){l[18](O)}let us={label:"Cat's eye bokeh:"};return l[4].catsEyeBokehEnabled!==void 0&&(us.checked=l[4].catsEyeBokehEnabled),ze=new Yr({props:us}),st.push(()=>Pt(ze,"checked",zn)),W=new ke({props:{vertical:10}}),Nt=new ke({props:{horizontal:4}}),Ct=new Vt({props:{name:"Camera movement",roundBox:!0,expanded:!1,$$slots:{default:[ad]},$$scope:{ctx:l}}}),{c(){e=V("span"),t=me("Exposure: "),i=V("input"),s=j(),ie(n.$$.fragment),r=j(),o=V("div"),a=V("span"),a.textContent=h,c=j(),ie(u.$$.fragment),d=j(),ie(p.$$.fragment),g=j(),y=V("span"),m=me("Aperture: "),_=V("input"),b=j(),ie(v.$$.fragment),T=j(),A=V("div"),I=V("span"),I.textContent=E,U=j(),ie(C.$$.fragment),B=j(),N=V("input"),k=j(),ie(z.$$.fragment),L=j(),q=V("button"),ie(ae.$$.fragment),de=j(),ie(X.$$.fragment),J=j(),ue=V("span"),le=me("Tilt Shift (x,y): "),H=V("input"),D=j(),ye=V("input"),Te=j(),ie(Me.$$.fragment),Ae=j(),ie(ze.$$.fragment),Xe=j(),ie(W.$$.fragment),ce=j(),Ie=V("div"),rt=V("span"),rt.innerHTML=It,et=j(),$e=V("input"),os=j(),ie(Nt.$$.fragment),ls=j(),vt=V("input"),Ri=j(),ie(Ct.$$.fragment),this.h()},l(O){e=G(O,"SPAN",{class:!0});var he=$(e);t=ge(he,"Exposure: "),i=G(he,"INPUT",{class:!0,type:!0}),he.forEach(x),s=Y(O),se(n.$$.fragment,O),r=Y(O),o=G(O,"DIV",{class:!0});var P=$(o);a=G(P,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(a)!=="svelte-1sn2dj9"&&(a.textContent=h),c=Y(P),se(u.$$.fragment,P),P.forEach(x),d=Y(O),se(p.$$.fragment,O),g=Y(O),y=G(O,"SPAN",{class:!0});var te=$(y);m=ge(te,"Aperture: "),_=G(te,"INPUT",{class:!0,type:!0}),te.forEach(x),b=Y(O),se(v.$$.fragment,O),T=Y(O),A=G(O,"DIV",{class:!0});var pe=$(A);I=G(pe,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(I)!=="svelte-1unc4gb"&&(I.textContent=E),U=Y(pe),se(C.$$.fragment,pe),B=Y(pe),N=G(pe,"INPUT",{class:!0,type:!0}),k=Y(pe),se(z.$$.fragment,pe),L=Y(pe),q=G(pe,"BUTTON",{class:!0});var be=$(q);se(ae.$$.fragment,be),be.forEach(x),pe.forEach(x),de=Y(O),se(X.$$.fragment,O),J=Y(O),ue=G(O,"SPAN",{class:!0});var Ke=$(ue);le=ge(Ke,"Tilt Shift (x,y): "),H=G(Ke,"INPUT",{class:!0,type:!0}),D=Y(Ke),ye=G(Ke,"INPUT",{class:!0,type:!0}),Ke.forEach(x),Te=Y(O),se(Me.$$.fragment,O),Ae=Y(O),se(ze.$$.fragment,O),Xe=Y(O),se(W.$$.fragment,O),ce=Y(O),Ie=G(O,"DIV",{class:!0});var xt=$(Ie);rt=G(xt,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(rt)!=="svelte-195bkco"&&(rt.innerHTML=It),et=Y(xt),$e=G(xt,"INPUT",{class:!0,type:!0}),os=Y(xt),se(Nt.$$.fragment,xt),ls=Y(xt),vt=G(xt,"INPUT",{class:!0,type:!0}),xt.forEach(x),Ri=Y(O),se(Ct.$$.fragment,O),this.h()},h(){w(i,"class","samples-limit-input svelte-1yl7uky"),w(i,"type","text"),w(e,"class","svelte-1yl7uky"),w(a,"class","svelte-1yl7uky"),w(o,"class","flex-row svelte-1yl7uky"),w(_,"class","samples-limit-input svelte-1yl7uky"),w(_,"type","text"),w(y,"class","svelte-1yl7uky"),w(I,"class","svelte-1yl7uky"),w(N,"class","samples-limit-input svelte-1yl7uky"),w(N,"type","text"),w(q,"class","click-set-fd svelte-1yl7uky"),K(q,"active",l[0]),w(A,"class","fd-flex-row svelte-1yl7uky"),w(H,"class","samples-limit-input svelte-1yl7uky"),w(H,"type","text"),w(ye,"class","samples-limit-input svelte-1yl7uky"),w(ye,"type","text"),w(ue,"class","svelte-1yl7uky"),w(rt,"class","svelte-1yl7uky"),w($e,"class","samples-limit-input svelte-1yl7uky"),w($e,"type","text"),w(vt,"class","samples-limit-input svelte-1yl7uky"),w(vt,"type","text"),w(Ie,"class","flex-row ce-options svelte-1yl7uky"),K(Ie,"disabled",!l[4].catsEyeBokehEnabled)},m(O,he){F(O,e,he),R(e,t),R(e,i),Pe(i,l[4].exposure),F(O,s,he),ne(n,O,he),F(O,r,he),F(O,o,he),R(o,a),R(o,c),ne(u,o,null),F(O,d,he),ne(p,O,he),F(O,g,he),F(O,y,he),R(y,m),R(y,_),Pe(_,l[4].aperture),F(O,b,he),ne(v,O,he),F(O,T,he),F(O,A,he),R(A,I),R(A,U),ne(C,A,null),R(A,B),R(A,N),Pe(N,l[4].focusDistance),R(A,k),ne(z,A,null),R(A,L),R(A,q),ne(ae,q,null),F(O,de,he),ne(X,O,he),F(O,J,he),F(O,ue,he),R(ue,le),R(ue,H),Pe(H,l[1]),R(ue,D),R(ue,ye),Pe(ye,l[2]),F(O,Te,he),ne(Me,O,he),F(O,Ae,he),ne(ze,O,he),F(O,Xe,he),ne(W,O,he),F(O,ce,he),F(O,Ie,he),R(Ie,rt),R(Ie,et),R(Ie,$e),Pe($e,l[4].catsEyeBokehMult),R(Ie,os),ne(Nt,Ie,null),R(Ie,ls),R(Ie,vt),Pe(vt,l[4].catsEyeBokehPow),F(O,Ri,he),ne(Ct,O,he),Zt=!0,hs||(Ls=[oe(i,"input",l[12]),oe(_,"input",l[14]),oe(N,"input",l[15]),oe(q,"click",l[6]),oe(H,"input",l[16]),oe(H,"keyup",l[8]),oe(ye,"input",l[17]),oe(ye,"keyup",l[9]),oe($e,"input",l[19]),oe(vt,"input",l[20])],hs=!0)},p(O,[he]){he&16&&i.value!==O[4].exposure&&Pe(i,O[4].exposure);const P={};!f&&he&8&&(f=!0,P.values=O[3],Bt(()=>f=!1)),u.$set(P),he&16&&_.value!==O[4].aperture&&Pe(_,O[4].aperture),he&16&&N.value!==O[4].focusDistance&&Pe(N,O[4].focusDistance),(!Zt||he&1)&&K(q,"active",O[0]),he&2&&H.value!==O[1]&&Pe(H,O[1]),he&4&&ye.value!==O[2]&&Pe(ye,O[2]);const te={};!nt&&he&16&&(nt=!0,te.checked=O[4].catsEyeBokehEnabled,Bt(()=>nt=!1)),ze.$set(te),he&16&&$e.value!==O[4].catsEyeBokehMult&&Pe($e,O[4].catsEyeBokehMult),he&16&&vt.value!==O[4].catsEyeBokehPow&&Pe(vt,O[4].catsEyeBokehPow),(!Zt||he&16)&&K(Ie,"disabled",!O[4].catsEyeBokehEnabled);const pe={};he&16777248&&(pe.$$scope={dirty:he,ctx:O}),Ct.$set(pe)},i(O){Zt||(Q(n.$$.fragment,O),Q(u.$$.fragment,O),Q(p.$$.fragment,O),Q(v.$$.fragment,O),Q(C.$$.fragment,O),Q(z.$$.fragment,O),Q(ae.$$.fragment,O),Q(X.$$.fragment,O),Q(Me.$$.fragment,O),Q(ze.$$.fragment,O),Q(W.$$.fragment,O),Q(Nt.$$.fragment,O),Q(Ct.$$.fragment,O),Zt=!0)},o(O){ee(n.$$.fragment,O),ee(u.$$.fragment,O),ee(p.$$.fragment,O),ee(v.$$.fragment,O),ee(C.$$.fragment,O),ee(z.$$.fragment,O),ee(ae.$$.fragment,O),ee(X.$$.fragment,O),ee(Me.$$.fragment,O),ee(ze.$$.fragment,O),ee(W.$$.fragment,O),ee(Nt.$$.fragment,O),ee(Ct.$$.fragment,O),Zt=!1},d(O){O&&(x(e),x(s),x(r),x(o),x(d),x(g),x(y),x(b),x(T),x(A),x(de),x(J),x(ue),x(Te),x(Ae),x(Xe),x(ce),x(Ie),x(Ri)),re(n,O),re(u),re(p,O),re(v,O),re(C),re(z),re(ae),re(X,O),re(Me,O),re(ze,O),re(W,O),re(Nt),re(Ct,O),hs=!1,yt(Ls)}}}let wl=.01;function pn(l){return`(${l.x.toFixed(1)}, ${l.y.toFixed(1)}, ${l.z.toFixed(1)})`}function ld(l,e,t){let i,s;it(l,we,B=>t(4,i=B)),it(l,hi,B=>t(5,s=B));let{canvasRef:n}=e,{renderer:r}=e,o=!1;function a(){t(0,o=!0)}function h(B){if(o){let N=B.offsetX,k=n.clientHeight-B.offsetY,z=r.getFocusDistanceFromScreenPoint(new Z(N,k));z>-1&&qt(we,i.focusDistance=z,i),t(0,o=!1)}}let c="0",u="0",f=[0];we.subscribe(B=>{f[0]!==B.fov&&t(3,f=[B.fov-B.fov%wl]),parseFloat(c)!==B.tiltShift.x&&t(1,c=B.tiltShift.x.toString()),parseFloat(u)!==B.tiltShift.y&&t(2,u=B.tiltShift.y.toString())});function d(B){qt(we,i.fov=parseFloat(B.detail.value),i)}function p(B){let N=parseFloat(B.target.value);isNaN(N)||qt(we,i.tiltShift=new Z(N,parseFloat(u)),i)}function g(B){let N=parseFloat(B.target.value);isNaN(N)||qt(we,i.tiltShift=new Z(parseFloat(c),N),i)}function y(){i.exposure=this.value,we.set(i)}function m(B){f=B,t(3,f)}function _(){i.aperture=this.value,we.set(i)}function b(){i.focusDistance=this.value,we.set(i)}function v(){c=this.value,t(1,c)}function T(){u=this.value,t(2,u)}function A(B){l.$$.not_equal(i.catsEyeBokehEnabled,B)&&(i.catsEyeBokehEnabled=B,we.set(i))}function I(){i.catsEyeBokehMult=this.value,we.set(i)}function E(){i.catsEyeBokehPow=this.value,we.set(i)}function U(){s.movementSpeed=this.value,hi.set(s)}function C(){s.rotationSpeed=this.value,hi.set(s)}return l.$$set=B=>{"canvasRef"in B&&t(10,n=B.canvasRef),"renderer"in B&&t(11,r=B.renderer)},l.$$.update=()=>{l.$$.dirty&1024&&n&&n.addEventListener("click",h)},[o,c,u,f,i,s,a,d,p,g,n,r,y,m,_,b,v,T,A,I,E,U,C]}class hd extends Ce{constructor(e){super(),Be(this,e,ld,od,Ee,{canvasRef:10,renderer:11})}}function ud(l){let e,t,i="width:",s,n,r,o,a,h,c="height:",u,f,d,p,g,y,m,_,b;function v(C){l[9](C)}let T={min:1,max:l[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};l[0]!==void 0&&(T.values=l[0]),n=new ss({props:T}),st.push(()=>Pt(n,"values",v));function A(C){l[10](C)}let I={min:1,max:l[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};l[1]!==void 0&&(I.values=l[1]),f=new ss({props:I}),st.push(()=>Pt(f,"values",A)),g=new ke({props:{vertical:10}});function E(C){l[11](C)}let U={label:"Full screen:"};return l[2]!==void 0&&(U.checked=l[2]),m=new Yr({props:U}),st.push(()=>Pt(m,"checked",E)),m.$on("change",l[4]),{c(){e=V("div"),t=V("label"),t.textContent=i,s=j(),ie(n.$$.fragment),o=j(),a=V("div"),h=V("label"),h.textContent=c,u=j(),ie(f.$$.fragment),p=j(),ie(g.$$.fragment),y=j(),ie(m.$$.fragment),this.h()},l(C){e=G(C,"DIV",{class:!0});var B=$(e);t=G(B,"LABEL",{class:!0,"data-svelte-h":!0}),Ve(t)!=="svelte-dhiveu"&&(t.textContent=i),s=Y(B),se(n.$$.fragment,B),B.forEach(x),o=Y(C),a=G(C,"DIV",{class:!0});var N=$(a);h=G(N,"LABEL",{class:!0,"data-svelte-h":!0}),Ve(h)!=="svelte-qeszdj"&&(h.textContent=c),u=Y(N),se(f.$$.fragment,N),N.forEach(x),p=Y(C),se(g.$$.fragment,C),y=Y(C),se(m.$$.fragment,C),this.h()},h(){w(t,"class","svelte-ysouhs"),w(e,"class","flex-row svelte-ysouhs"),w(h,"class","svelte-ysouhs"),w(a,"class","flex-row svelte-ysouhs")},m(C,B){F(C,e,B),R(e,t),R(e,s),ne(n,e,null),F(C,o,B),F(C,a,B),R(a,h),R(a,u),ne(f,a,null),F(C,p,B),ne(g,C,B),F(C,y,B),ne(m,C,B),b=!0},p(C,[B]){const N={};B&8&&(N.max=C[3]),!r&&B&1&&(r=!0,N.values=C[0],Bt(()=>r=!1)),n.$set(N);const k={};B&8&&(k.max=C[3]),!d&&B&2&&(d=!0,k.values=C[1],Bt(()=>d=!1)),f.$set(k);const z={};!_&&B&4&&(_=!0,z.checked=C[2],Bt(()=>_=!1)),m.$set(z)},i(C){b||(Q(n.$$.fragment,C),Q(f.$$.fragment,C),Q(g.$$.fragment,C),Q(m.$$.fragment,C),b=!0)},o(C){ee(n.$$.fragment,C),ee(f.$$.fragment,C),ee(g.$$.fragment,C),ee(m.$$.fragment,C),b=!1},d(C){C&&(x(e),x(o),x(a),x(p),x(y)),re(n),re(f),re(g,C),re(m,C)}}}function cd(l,e,t){let{canvasContainerEl:i}=e,{width:s=1}=e,{height:n=1}=e,r=[1],o=[1],a=0,h=!1,c=!1;function u(){t(3,a=Math.floor(Math.max(innerHeight,innerWidth)*1))}function f(){const m=i.getBoundingClientRect();t(0,r=[m.width-30]),t(1,o=[m.height-30])}function d(){h&&f()}function p(m){r=m,t(0,r),t(7,i),t(8,c),t(2,h)}function g(m){o=m,t(1,o),t(7,i),t(8,c),t(2,h)}function y(m){h=m,t(2,h)}return l.$$set=m=>{"canvasContainerEl"in m&&t(7,i=m.canvasContainerEl),"width"in m&&t(5,s=m.width),"height"in m&&t(6,n=m.height)},l.$$.update=()=>{l.$$.dirty&388&&i&&(u(),c||(Rl().then(()=>{t(0,r=[800]),t(1,o=[600])}),t(8,c=!0)),new ResizeObserver(_=>{u(),h&&f()}).observe(i)),l.$$.dirty&3&&(t(5,s=r[0]),t(6,n=o[0]))},[r,o,h,a,d,s,n,i,c,p,g,y]}class fd extends Ce{constructor(e){super(),Be(this,e,cd,ud,Ee,{canvasContainerEl:7,width:5,height:6})}}function dd(l){let e,t="Mis Type:",i,s,n,r,o,a,h,c,u,f,d,p,g,y,m,_,b,v,T,A,I="Method:",E,U,C,B,N,k,z,L,q,ae,de,X,J,ue,le;return s=new Ns({}),U=new Ns({}),X=$r(l[2][0]),J=$r(l[2][1]),{c(){e=V("p"),e.textContent=t,i=j(),ie(s.$$.fragment),n=j(),r=V("label"),o=V("input"),a=me(`\r
  Brdf only`),h=j(),c=V("label"),u=V("input"),f=me(`\r
  One Sample Model`),d=j(),p=V("label"),g=V("input"),y=me(`\r
  Next Event Estimation`),m=j(),_=V("br"),b=j(),v=V("br"),T=j(),A=V("p"),A.textContent=I,E=j(),ie(U.$$.fragment),C=j(),B=V("label"),N=V("input"),k=me(`\r
  Balanced Heuristic`),z=j(),L=V("label"),q=V("input"),ae=me(`\r
  Power Heuristic`),this.h()},l(H){e=G(H,"P",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-v6hg55"&&(e.textContent=t),i=Y(H),se(s.$$.fragment,H),n=Y(H),r=G(H,"LABEL",{class:!0});var D=$(r);o=G(D,"INPUT",{type:!0,name:!0,class:!0}),a=ge(D,`\r
  Brdf only`),D.forEach(x),h=Y(H),c=G(H,"LABEL",{class:!0});var ye=$(c);u=G(ye,"INPUT",{type:!0,name:!0,class:!0}),f=ge(ye,`\r
  One Sample Model`),ye.forEach(x),d=Y(H),p=G(H,"LABEL",{class:!0});var Te=$(p);g=G(Te,"INPUT",{type:!0,name:!0,class:!0}),y=ge(Te,`\r
  Next Event Estimation`),Te.forEach(x),m=Y(H),_=G(H,"BR",{}),b=Y(H),v=G(H,"BR",{}),T=Y(H),A=G(H,"P",{class:!0,"data-svelte-h":!0}),Ve(A)!=="svelte-jbj2k9"&&(A.textContent=I),E=Y(H),se(U.$$.fragment,H),C=Y(H),B=G(H,"LABEL",{class:!0});var Me=$(B);N=G(Me,"INPUT",{type:!0,name:!0,class:!0}),k=ge(Me,`\r
  Balanced Heuristic`),Me.forEach(x),z=Y(H),L=G(H,"LABEL",{class:!0});var Ae=$(L);q=G(Ae,"INPUT",{type:!0,name:!0,class:!0}),ae=ge(Ae,`\r
  Power Heuristic`),Ae.forEach(x),this.h()},h(){w(e,"class","svelte-12cpmoe"),w(o,"type","radio"),w(o,"name","mis-type"),o.__value=gn.BRDF_ONLY,Pe(o,o.__value),w(o,"class","svelte-12cpmoe"),w(r,"class","svelte-12cpmoe"),w(u,"type","radio"),w(u,"name","mis-type"),u.__value=gn.ONE_SAMPLE_MODEL,Pe(u,u.__value),w(u,"class","svelte-12cpmoe"),w(c,"class","svelte-12cpmoe"),w(g,"type","radio"),w(g,"name","mis-type"),g.__value=gn.NEXT_EVENT_ESTIMATION,Pe(g,g.__value),w(g,"class","svelte-12cpmoe"),w(p,"class","svelte-12cpmoe"),w(A,"class","svelte-12cpmoe"),w(N,"type","radio"),w(N,"name","mis-heuristic"),N.__value=0,Pe(N,N.__value),w(N,"class","svelte-12cpmoe"),w(B,"class","svelte-12cpmoe"),w(q,"type","radio"),w(q,"name","mis-heuristic"),q.__value=1,Pe(q,q.__value),w(q,"class","svelte-12cpmoe"),w(L,"class","svelte-12cpmoe"),X.p(N,q),J.p(o,u,g)},m(H,D){F(H,e,D),F(H,i,D),ne(s,H,D),F(H,n,D),F(H,r,D),R(r,o),o.checked=o.__value===l[0].MIS_TYPE,R(r,a),F(H,h,D),F(H,c,D),R(c,u),u.checked=u.__value===l[0].MIS_TYPE,R(c,f),F(H,d,D),F(H,p,D),R(p,g),g.checked=g.__value===l[0].MIS_TYPE,R(p,y),F(H,m,D),F(H,_,D),F(H,b,D),F(H,v,D),F(H,T,D),F(H,A,D),F(H,E,D),ne(U,H,D),F(H,C,D),F(H,B,D),R(B,N),N.checked=N.__value===l[0].USE_POWER_HEURISTIC,R(B,k),F(H,z,D),F(H,L,D),R(L,q),q.checked=q.__value===l[0].USE_POWER_HEURISTIC,R(L,ae),de=!0,ue||(le=[oe(o,"change",l[1]),oe(u,"change",l[3]),oe(g,"change",l[4]),oe(N,"change",l[5]),oe(q,"change",l[6])],ue=!0)},p(H,[D]){D&1&&(o.checked=o.__value===H[0].MIS_TYPE),D&1&&(u.checked=u.__value===H[0].MIS_TYPE),D&1&&(g.checked=g.__value===H[0].MIS_TYPE),D&1&&(N.checked=N.__value===H[0].USE_POWER_HEURISTIC),D&1&&(q.checked=q.__value===H[0].USE_POWER_HEURISTIC)},i(H){de||(Q(s.$$.fragment,H),Q(U.$$.fragment,H),de=!0)},o(H){ee(s.$$.fragment,H),ee(U.$$.fragment,H),de=!1},d(H){H&&(x(e),x(i),x(n),x(r),x(h),x(c),x(d),x(p),x(m),x(_),x(b),x(v),x(T),x(A),x(E),x(C),x(B),x(z),x(L)),re(s,H),re(U,H),X.r(),J.r(),ue=!1,yt(le)}}}function pd(l,e,t){let i;it(l,je,c=>t(0,i=c));const s=[[],[]];function n(){i.MIS_TYPE=this.__value,je.set(i)}function r(){i.MIS_TYPE=this.__value,je.set(i)}function o(){i.MIS_TYPE=this.__value,je.set(i)}function a(){i.USE_POWER_HEURISTIC=this.__value,je.set(i)}function h(){i.USE_POWER_HEURISTIC=this.__value,je.set(i)}return[i,n,s,r,o,a,h]}class md extends Ce{constructor(e){super(),Be(this,e,pd,dd,Ee,{})}}function gd(l){let e,t;return e=new md({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function yd(l){let e,t,i,s,n,r,o="+",a,h,c="∞",u,f,d="1",p,g,y,m,_;return g=new Vt({props:{name:"Mis Options",roundBox:!0,$$slots:{default:[gd]},$$scope:{ctx:l}}}),{c(){e=V("span"),t=me("Sample Limit: "),i=V("input"),n=j(),r=V("button"),r.textContent=o,a=j(),h=V("button"),h.textContent=c,u=j(),f=V("button"),f.textContent=d,p=j(),ie(g.$$.fragment),this.h()},l(b){e=G(b,"SPAN",{});var v=$(e);t=ge(v,"Sample Limit: "),i=G(v,"INPUT",{class:!0,type:!0}),v.forEach(x),n=Y(b),r=G(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ve(r)!=="svelte-okw43g"&&(r.textContent=o),a=Y(b),h=G(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ve(h)!=="svelte-11gvuxs"&&(h.textContent=c),u=Y(b),f=G(b,"BUTTON",{class:!0,"data-svelte-h":!0}),Ve(f)!=="svelte-14bsa7c"&&(f.textContent=d),p=Y(b),se(g.$$.fragment,b),this.h()},h(){w(i,"class","samples-limit-input svelte-o9rhx8"),w(i,"type","text"),i.value=s=l[0].limit,w(r,"class","sample-limit-btn svelte-o9rhx8"),w(h,"class","sample-limit-btn svelte-o9rhx8"),w(f,"class","sample-limit-btn svelte-o9rhx8")},m(b,v){F(b,e,v),R(e,t),R(e,i),F(b,n,v),F(b,r,v),F(b,a,v),F(b,h,v),F(b,u,v),F(b,f,v),F(b,p,v),ne(g,b,v),y=!0,m||(_=[oe(i,"change",l[1]),oe(r,"click",l[2]),oe(h,"click",l[3]),oe(f,"click",l[4])],m=!0)},p(b,[v]){(!y||v&1&&s!==(s=b[0].limit)&&i.value!==s)&&(i.value=s);const T={};v&32&&(T.$$scope={dirty:v,ctx:b}),g.$set(T)},i(b){y||(Q(g.$$.fragment,b),y=!0)},o(b){ee(g.$$.fragment,b),y=!1},d(b){b&&(x(e),x(n),x(r),x(a),x(h),x(u),x(f),x(p)),re(g,b),m=!1,yt(_)}}}function vd(l,e,t){let i;it(l,Ne,a=>t(0,i=a));function s(a){const h=parseInt(a.target.value);isNaN(h)||Ne.setLimit(h)}function n(){Ne.setLimit(i.limit+1)}function r(){Ne.setLimit(999999)}function o(){Ne.setLimit(1),Ne.reset()}return[i,s,n,r,o]}class xd extends Ce{constructor(e){super(),Be(this,e,vd,yd,Ee,{})}}function bd(l){let e,t,i,s=l[0].nodesCount+"",n,r,o,a,h,c=l[1].count+"",u,f,d,p,g,y=l[1].tileSize+"",m,_,b,v,T,A=(l[1].count==l[1].limit?0:l[1].ms.toFixed(0))+"",I,E,U,C,B,N,k=l[1].clickTarget+"",z;return{c(){e=V("p"),t=me("Bvh nodes count: "),i=V("span"),n=me(s),r=j(),o=V("p"),a=me("Sample: "),h=V("span"),u=me(c),f=j(),d=V("p"),p=me("Tile: "),g=V("span"),m=me(y),_=j(),b=V("p"),v=me("Performance: "),T=V("span"),I=me(A),E=me(" ms"),U=j(),C=V("p"),B=me("Click target: "),N=V("span"),z=me(k),this.h()},l(L){e=G(L,"P",{class:!0});var q=$(e);t=ge(q,"Bvh nodes count: "),i=G(q,"SPAN",{class:!0});var ae=$(i);n=ge(ae,s),ae.forEach(x),q.forEach(x),r=Y(L),o=G(L,"P",{class:!0});var de=$(o);a=ge(de,"Sample: "),h=G(de,"SPAN",{class:!0});var X=$(h);u=ge(X,c),X.forEach(x),de.forEach(x),f=Y(L),d=G(L,"P",{class:!0});var J=$(d);p=ge(J,"Tile: "),g=G(J,"SPAN",{class:!0});var ue=$(g);m=ge(ue,y),ue.forEach(x),J.forEach(x),_=Y(L),b=G(L,"P",{class:!0});var le=$(b);v=ge(le,"Performance: "),T=G(le,"SPAN",{class:!0});var H=$(T);I=ge(H,A),E=ge(H," ms"),H.forEach(x),le.forEach(x),U=Y(L),C=G(L,"P",{class:!0});var D=$(C);B=ge(D,"Click target: "),N=G(D,"SPAN",{class:!0});var ye=$(N);z=ge(ye,k),ye.forEach(x),D.forEach(x),this.h()},h(){w(i,"class","svelte-denqo1"),w(e,"class","svelte-denqo1"),w(h,"class","svelte-denqo1"),w(o,"class","svelte-denqo1"),w(g,"class","svelte-denqo1"),w(d,"class","svelte-denqo1"),w(T,"class","svelte-denqo1"),w(b,"class","svelte-denqo1"),w(N,"class","user-selectable svelte-denqo1"),w(C,"class","svelte-denqo1")},m(L,q){F(L,e,q),R(e,t),R(e,i),R(i,n),F(L,r,q),F(L,o,q),R(o,a),R(o,h),R(h,u),F(L,f,q),F(L,d,q),R(d,p),R(d,g),R(g,m),F(L,_,q),F(L,b,q),R(b,v),R(b,T),R(T,I),R(T,E),F(L,U,q),F(L,C,q),R(C,B),R(C,N),R(N,z)},p(L,[q]){q&1&&s!==(s=L[0].nodesCount+"")&&Oe(n,s),q&2&&c!==(c=L[1].count+"")&&Oe(u,c),q&2&&y!==(y=L[1].tileSize+"")&&Oe(m,y),q&2&&A!==(A=(L[1].count==L[1].limit?0:L[1].ms.toFixed(0))+"")&&Oe(I,A),q&2&&k!==(k=L[1].clickTarget+"")&&Oe(z,k)},i:ve,o:ve,d(L){L&&(x(e),x(r),x(o),x(f),x(d),x(_),x(b),x(U),x(C))}}}function wd(l,e,t){let i,s;return it(l,ll,n=>t(0,i=n)),it(l,Ne,n=>t(1,s=n)),[i,s]}class _d extends Ce{constructor(e){super(),Be(this,e,wd,bd,Ee,{})}}function Sd(l){let e,t="restart",i,s,n="stop",r,o;return{c(){e=V("button"),e.textContent=t,i=j(),s=V("button"),s.textContent=n,this.h()},l(a){e=G(a,"BUTTON",{class:!0,"data-svelte-h":!0}),Ve(e)!=="svelte-5dldn0"&&(e.textContent=t),i=Y(a),s=G(a,"BUTTON",{class:!0,"data-svelte-h":!0}),Ve(s)!=="svelte-1gwj45s"&&(s.textContent=n),this.h()},h(){w(e,"class","svelte-abnc1m"),w(s,"class","svelte-abnc1m")},m(a,h){F(a,e,h),F(a,i,h),F(a,s,h),r||(o=[oe(e,"click",l[0]),oe(s,"click",l[1])],r=!0)},p:ve,i:ve,o:ve,d(a){a&&(x(e),x(i),x(s)),r=!1,yt(o)}}}function Md(l,e,t){let i;it(l,Ne,r=>t(2,i=r));function s(){Ne.reset()}function n(){Ne.setLimit(i.count)}return[s,n]}class Td extends Ce{constructor(e){super(),Be(this,e,Md,Sd,Ee,{})}}function Ad(l){let e,t,i="Light bounces:",s,n,r,o,a,h,c,u,f;function d(m){l[2](m)}let p={min:1,max:20,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};l[0]!==void 0&&(p.values=l[0]),n=new ss({props:p}),st.push(()=>Pt(n,"values",d)),a=new ke({props:{vertical:10}});function g(m){l[3](m)}let y={label:"Force max tile size:"};return l[1].forceMaxTileSize!==void 0&&(y.checked=l[1].forceMaxTileSize),c=new Yr({props:y}),st.push(()=>Pt(c,"checked",g)),{c(){e=V("div"),t=V("label"),t.textContent=i,s=j(),ie(n.$$.fragment),o=j(),ie(a.$$.fragment),h=j(),ie(c.$$.fragment),this.h()},l(m){e=G(m,"DIV",{class:!0});var _=$(e);t=G(_,"LABEL",{class:!0,"data-svelte-h":!0}),Ve(t)!=="svelte-1ugqakj"&&(t.textContent=i),s=Y(_),se(n.$$.fragment,_),_.forEach(x),o=Y(m),se(a.$$.fragment,m),h=Y(m),se(c.$$.fragment,m),this.h()},h(){w(t,"class","svelte-1ys9cqv"),w(e,"class","flex-row svelte-1ys9cqv")},m(m,_){F(m,e,_),R(e,t),R(e,s),ne(n,e,null),F(m,o,_),ne(a,m,_),F(m,h,_),ne(c,m,_),f=!0},p(m,[_]){const b={};!r&&_&1&&(r=!0,b.values=m[0],Bt(()=>r=!1)),n.$set(b);const v={};!u&&_&2&&(u=!0,v.checked=m[1].forceMaxTileSize,Bt(()=>u=!1)),c.$set(v)},i(m){f||(Q(n.$$.fragment,m),Q(a.$$.fragment,m),Q(c.$$.fragment,m),f=!0)},o(m){ee(n.$$.fragment,m),ee(a.$$.fragment,m),ee(c.$$.fragment,m),f=!1},d(m){m&&(x(e),x(o),x(h)),re(n),re(a,m),re(c,m)}}}function Ed(l,e,t){let i;it(l,je,o=>t(1,i=o));let s=[i.BOUNCES_COUNT];function n(o){s=o,t(0,s)}function r(o){l.$$.not_equal(i.forceMaxTileSize,o)&&(i.forceMaxTileSize=o,je.set(i))}return l.$$.update=()=>{l.$$.dirty&1&&qt(je,i.BOUNCES_COUNT=s[0],i)},[s,i,n,r]}class Cd extends Ce{constructor(e){super(),Be(this,e,Ed,Ad,Ee,{})}}function Bd(l){let e,t;return{c(){e=Je("svg"),t=Je("path"),this.h()},l(i){e=Qe(i,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,xmlns:!0,class:!0});var s=$(e);t=Qe(s,"path",{d:!0}),$(t).forEach(x),s.forEach(x),this.h()},h(){w(t,"d","M10.25 0h3.5a.75.75 0 0 1 0 1.5h-1v1.278a9.954 9.954 0 0 1 5.636 2.276L19.72 3.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.315 1.316A9.959 9.959 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.959 9.959 0 0 1 2.535-6.654L3.22 4.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.335 1.334a9.958 9.958 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5ZM12 21.25a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 12 21.25Zm4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.75.75 0 0 1 1.061 0Z"),w(e,"stroke","currentColor"),w(e,"fill","currentColor"),w(e,"stroke-width","0"),w(e,"viewBox","0 0 24 24"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"class","svelte-1cmb9l6")},m(i,s){F(i,e,s),R(e,t)},p:ve,i:ve,o:ve,d(i){i&&x(e)}}}class Pd extends Ce{constructor(e){super(),Be(this,e,null,Bd,Ee,{})}}function Fo(l){let e,t,i,s,n;return i=new Pd({}),{c(){e=V("p"),t=V("span"),ie(i.$$.fragment),s=me(l[5]),this.h()},l(r){e=G(r,"P",{class:!0});var o=$(e);t=G(o,"SPAN",{class:!0});var a=$(t);se(i.$$.fragment,a),a.forEach(x),s=ge(o,l[5]),o.forEach(x),this.h()},h(){w(t,"class","csm-icon-container svelte-idb75x"),w(e,"class","csm svelte-idb75x")},m(r,o){F(r,e,o),R(e,t),ne(i,t,null),R(e,s),n=!0},p(r,o){(!n||o&32)&&Oe(s,r[5])},i(r){n||(Q(i.$$.fragment,r),n=!0)},o(r){ee(i.$$.fragment,r),n=!1},d(r){r&&x(e),re(i)}}}function Lo(l){let e,t;return{c(){e=V("p"),t=me(l[6]),this.h()},l(i){e=G(i,"P",{class:!0});var s=$(e);t=ge(s,l[6]),s.forEach(x),this.h()},h(){w(e,"class","csm csm-error svelte-idb75x")},m(i,s){F(i,e,s),R(e,t)},p(i,s){s&64&&Oe(t,i[6])},d(i){i&&x(e)}}}function Rd(l){let e,t,i,s;function n(a){l[11](a)}function r(a){l[12](a)}let o={canvasContainerEl:l[3]};return l[1]!==void 0&&(o.width=l[1]),l[2]!==void 0&&(o.height=l[2]),e=new fd({props:o}),st.push(()=>Pt(e,"width",n)),st.push(()=>Pt(e,"height",r)),{c(){ie(e.$$.fragment)},l(a){se(e.$$.fragment,a)},m(a,h){ne(e,a,h),s=!0},p(a,h){const c={};h&8&&(c.canvasContainerEl=a[3]),!t&&h&2&&(t=!0,c.width=a[1],Bt(()=>t=!1)),!i&&h&4&&(i=!0,c.height=a[2],Bt(()=>i=!1)),e.$set(c)},i(a){s||(Q(e.$$.fragment,a),s=!0)},o(a){ee(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function zd(l){let e,t;return e=new _d({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Id(l){let e,t;return e=new hd({props:{canvasRef:l[0],renderer:l[4]}}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},p(i,s){const n={};s&1&&(n.canvasRef=i[0]),s&16&&(n.renderer=i[4]),e.$set(n)},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Nd(l){let e,t;return e=new td({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Dd(l){let e,t;return e=new xd({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Fd(l){let e,t;return e=new Cd({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Ld(l){let e,t;return e=new Td({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function kd(l){let e,t,i,s,n,r,o,a,h,c,u,f,d,p,g,y,m,_,b,v,T,A,I,E,U,C,B;t=new Vf({});let N=l[5]&&Fo(l),k=l[6]&&Lo(l);return f=new Vt({props:{name:"Canvas",$$slots:{default:[Rd]},$$scope:{ctx:l}}}),p=new Vt({props:{name:"Info",$$slots:{default:[zd]},$$scope:{ctx:l}}}),y=new Vt({props:{name:"Camera",$$slots:{default:[Id]},$$scope:{ctx:l}}}),_=new Vt({props:{name:"Envmap",disabled:!l[7].shaderConfig.HAS_ENVMAP,$$slots:{default:[Nd]},$$scope:{ctx:l}}}),v=new Vt({props:{name:"Sampling",roundBox:!0,$$slots:{default:[Dd]},$$scope:{ctx:l}}}),A=new Vt({props:{name:"Performance",expanded:!1,$$slots:{default:[Fd]},$$scope:{ctx:l}}}),E=new Vt({props:{name:"Operate",roundBox:!0,$$slots:{default:[Ld]},$$scope:{ctx:l}}}),{c(){e=V("main"),ie(t.$$.fragment),i=j(),s=V("div"),n=V("canvas"),a=j(),N&&N.c(),h=j(),k&&k.c(),c=j(),u=V("div"),ie(f.$$.fragment),d=j(),ie(p.$$.fragment),g=j(),ie(y.$$.fragment),m=j(),ie(_.$$.fragment),b=j(),ie(v.$$.fragment),T=j(),ie(A.$$.fragment),I=j(),ie(E.$$.fragment),this.h()},l(z){e=G(z,"MAIN",{class:!0});var L=$(e);se(t.$$.fragment,L),i=Y(L),s=G(L,"DIV",{class:!0});var q=$(s);n=G(q,"CANVAS",{width:!0,height:!0,class:!0}),$(n).forEach(x),a=Y(q),N&&N.l(q),h=Y(q),k&&k.l(q),q.forEach(x),c=Y(L),u=G(L,"DIV",{class:!0});var ae=$(u);se(f.$$.fragment,ae),d=Y(ae),se(p.$$.fragment,ae),g=Y(ae),se(y.$$.fragment,ae),m=Y(ae),se(_.$$.fragment,ae),b=Y(ae),se(v.$$.fragment,ae),T=Y(ae),se(A.$$.fragment,ae),I=Y(ae),se(E.$$.fragment,ae),ae.forEach(x),L.forEach(x),this.h()},h(){w(n,"width",r=l[1]||1),w(n,"height",o=l[2]||1),w(n,"class","svelte-idb75x"),w(s,"class","canvas-container svelte-idb75x"),w(u,"class","sidebar svelte-idb75x"),w(e,"class","svelte-idb75x")},m(z,L){F(z,e,L),ne(t,e,null),R(e,i),R(e,s),R(s,n),l[9](n),R(s,a),N&&N.m(s,null),R(s,h),k&&k.m(s,null),l[10](s),R(e,c),R(e,u),ne(f,u,null),R(u,d),ne(p,u,null),R(u,g),ne(y,u,null),R(u,m),ne(_,u,null),R(u,b),ne(v,u,null),R(u,T),ne(A,u,null),R(u,I),ne(E,u,null),U=!0,C||(B=oe(n,"click",l[8]),C=!0)},p(z,[L]){(!U||L&2&&r!==(r=z[1]||1))&&w(n,"width",r),(!U||L&4&&o!==(o=z[2]||1))&&w(n,"height",o),z[5]?N?(N.p(z,L),L&32&&Q(N,1)):(N=Fo(z),N.c(),Q(N,1),N.m(s,h)):N&&(Vo(),ee(N,1,1,()=>{N=null}),Go()),z[6]?k?k.p(z,L):(k=Lo(z),k.c(),k.m(s,null)):k&&(k.d(1),k=null);const q={};L&16398&&(q.$$scope={dirty:L,ctx:z}),f.$set(q);const ae={};L&16384&&(ae.$$scope={dirty:L,ctx:z}),p.$set(ae);const de={};L&16401&&(de.$$scope={dirty:L,ctx:z}),y.$set(de);const X={};L&128&&(X.disabled=!z[7].shaderConfig.HAS_ENVMAP),L&16384&&(X.$$scope={dirty:L,ctx:z}),_.$set(X);const J={};L&16384&&(J.$$scope={dirty:L,ctx:z}),v.$set(J);const ue={};L&16384&&(ue.$$scope={dirty:L,ctx:z}),A.$set(ue);const le={};L&16384&&(le.$$scope={dirty:L,ctx:z}),E.$set(le)},i(z){U||(Q(t.$$.fragment,z),Q(N),Q(f.$$.fragment,z),Q(p.$$.fragment,z),Q(y.$$.fragment,z),Q(_.$$.fragment,z),Q(v.$$.fragment,z),Q(A.$$.fragment,z),Q(E.$$.fragment,z),U=!0)},o(z){ee(t.$$.fragment,z),ee(N),ee(f.$$.fragment,z),ee(p.$$.fragment,z),ee(y.$$.fragment,z),ee(_.$$.fragment,z),ee(v.$$.fragment,z),ee(A.$$.fragment,z),ee(E.$$.fragment,z),U=!1},d(z){z&&x(e),re(t),l[9](null),N&&N.d(),k&&k.d(),l[10](null),re(f),re(p),re(y),re(_),re(v),re(A),re(E),C=!1,B()}}}function Od(l,e,t){let i,s,n,r;it(l,Ne,m=>t(13,i=m)),it(l,_s,m=>t(5,s=m)),it(l,vr,m=>t(6,n=m)),it(l,je,m=>t(7,r=m));let o,a,h,c,u;ko(async()=>{try{t(4,u=await Mf(o))}catch(m){console.error(m)}});function f(m){qt(Ne,i.clickTarget=`(${m.offsetX}, ${h-m.offsetY})`,i)}function d(m){st[m?"unshift":"push"](()=>{o=m,t(0,o)})}function p(m){st[m?"unshift":"push"](()=>{c=m,t(3,c)})}function g(m){a=m,t(1,a)}function y(m){h=m,t(2,h)}return[o,a,h,c,u,s,n,r,f,d,p,g,y]}class Ud extends Ce{constructor(e){super(),Be(this,e,Od,kd,Ee,{})}}function Vd(l){let e,t;return e=new Ud({}),{c(){ie(e.$$.fragment)},l(i){se(e.$$.fragment,i)},m(i,s){ne(e,i,s),t=!0},p:ve,i(i){t||(Q(e.$$.fragment,i),t=!0)},o(i){ee(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}class Kd extends Ce{constructor(e){super(),Be(this,e,null,Vd,Ee,{})}}export{Kd as component};
