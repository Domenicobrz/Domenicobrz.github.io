var Fl=Object.defineProperty;var Ol=(o,e,t)=>e in o?Fl(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var S=(o,e,t)=>Ol(o,typeof e!="symbol"?e+"":e,t);import{n as ye,O as st,s as Ae,c as kl,e as L,t as de,b as H,d as F,f as j,h as pe,i as b,j as W,v,P as J,k as N,l as R,Q as oe,m as Ge,u as Ul,g as Vl,a as Gl,A as rt,r as Xo,x as nt,R as qe,S as He,o as Ke,T as jt,p as Le,U as Nn,V as Dn,W as Ko,X as ra,Y as Zo,Z as ql,_ as ze,$ as zt,a0 as be,z as Hl,a1 as Rn}from"../chunks/scheduler.Z4xmWXJw.js";import{S as Ee,i as Ce,t as K,a as Z,b as te,d as ie,m as se,e as ne,g as Lr,c as Fr,f as Nt}from"../chunks/index.CqKVUUkW.js";import{w as Qt}from"../chunks/index.CWq_QTW7.js";const Jo=typeof window<"u";let aa=Jo?()=>window.performance.now():()=>Date.now(),Qo=Jo?o=>requestAnimationFrame(o):ye;const ss=new Set;function el(o){ss.forEach(e=>{e.c(o)||(ss.delete(e),e.f())}),ss.size!==0&&Qo(el)}function Wl(o){let e;return ss.size===0&&Qo(el),{promise:new Promise(t=>{ss.add(e={c:o,f:t})}),abort(){ss.delete(e)}}}function Bn(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="163",Pn=0,$l=1,jl=2,oa=1,la=100,ha=204,ua=205,ca=3,Yl=0,fa="attached",Xl="detached",il=300,Os=1e3,Bi=1001,xr=1002,ks=1003,Kl=1004,Zl=1005,yi=1006,Jl=1007,Ln=1008,Ql=1009,eh=1014,Ii=1015,Ys=1016,th=1020,sl=1023,Gn=1026,da=1027,ih=1028,Us=2300,as=2301,qn=2302,pa=2400,ma=2401,ga=2402,sh=2500,nh=0,nl=1,br=2,rh=0,rl="",ft="srgb",mt="srgb-linear",ah="display-p3",al="display-p3-linear",wr="linear",ya="srgb",va="rec709",xa="p3",Oi=7680,ba=519,oh=515,_r=35044,Pi=2e3,Sr=2001;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,r=s.length;n<r;n++)s[n].call(this,e);e.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const Is=Math.PI/180,Vs=180/Math.PI;function Ct(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[o&255]+je[o>>8&255]+je[o>>16&255]+je[o>>24&255]+"-"+je[e&255]+je[e>>8&255]+"-"+je[e>>16&15|64]+je[e>>24&255]+"-"+je[t&63|128]+je[t>>8&255]+"-"+je[t>>16&255]+je[t>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function $e(o,e,t){return Math.max(e,Math.min(t,o))}function Or(o,e){return(o%e+e)%e}function lh(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function hh(o,e,t){return o!==e?(t-o)/(e-o):0}function zs(o,e,t){return(1-t)*o+t*e}function uh(o,e,t,i){return zs(o,e,1-Math.exp(-t*i))}function ch(o,e=1){return e-Math.abs(Or(o,e*2)-e)}function fh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function dh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function ph(o,e){return o+Math.floor(Math.random()*(e-o+1))}function mh(o,e){return o+Math.random()*(e-o)}function gh(o){return o*(.5-Math.random())}function yh(o){o!==void 0&&(wa=o);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vh(o){return o*Is}function xh(o){return o*Vs}function bh(o){return(o&o-1)===0&&o!==0}function wh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function _h(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Sh(o,e,t,i,s){const n=Math.cos,r=Math.sin,l=n(t/2),a=r(t/2),h=n((e+i)/2),c=r((e+i)/2),u=n((e-i)/2),f=r((e-i)/2),d=n((i-e)/2),p=r((i-e)/2);switch(s){case"XYX":o.set(l*c,a*u,a*f,l*h);break;case"YZY":o.set(a*f,l*c,a*u,l*h);break;case"ZXZ":o.set(a*u,a*f,l*c,l*h);break;case"XZX":o.set(l*c,a*p,a*d,l*h);break;case"YXY":o.set(a*d,l*c,a*p,l*h);break;case"ZYZ":o.set(a*p,a*d,l*c,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Et(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Se(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Th={DEG2RAD:Is,RAD2DEG:Vs,generateUUID:Ct,clamp:$e,euclideanModulo:Or,mapLinear:lh,inverseLerp:hh,lerp:zs,damp:uh,pingpong:ch,smoothstep:fh,smootherstep:dh,randInt:ph,randFloat:mh,randFloatSpread:gh,seededRandom:yh,degToRad:vh,radToDeg:xh,isPowerOfTwo:bh,ceilPowerOfTwo:wh,floorPowerOfTwo:_h,setQuaternionFromProperEuler:Sh,normalize:Se,denormalize:Et};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,r=this.y-e.y;return this.x=n*i-r*s+e.x,this.y=n*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ei{constructor(e,t,i,s,n,r,l,a,h){ei.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,l,a,h)}set(e,t,i,s,n,r,l,a,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=l,c[3]=t,c[4]=n,c[5]=a,c[6]=i,c[7]=r,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],l=i[3],a=i[6],h=i[1],c=i[4],u=i[7],f=i[2],d=i[5],p=i[8],m=s[0],y=s[3],g=s[6],_=s[1],w=s[4],x=s[7],C=s[2],E=s[5],A=s[8];return n[0]=r*m+l*_+a*C,n[3]=r*y+l*w+a*E,n[6]=r*g+l*x+a*A,n[1]=h*m+c*_+u*C,n[4]=h*y+c*w+u*E,n[7]=h*g+c*x+u*A,n[2]=f*m+d*_+p*C,n[5]=f*y+d*w+p*E,n[8]=f*g+d*x+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],l=e[5],a=e[6],h=e[7],c=e[8];return t*r*c-t*l*h-i*n*c+i*l*a+s*n*h-s*r*a}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],l=e[5],a=e[6],h=e[7],c=e[8],u=c*r-l*h,f=l*a-c*n,d=h*n-r*a,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=u*m,e[1]=(s*h-c*i)*m,e[2]=(l*i-s*r)*m,e[3]=f*m,e[4]=(c*t-s*a)*m,e[5]=(s*n-l*t)*m,e[6]=d*m,e[7]=(i*a-h*t)*m,e[8]=(r*t-i*n)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,r,l){const a=Math.cos(n),h=Math.sin(n);return this.set(i*a,i*h,-i*(a*r+h*l)+r+e,-s*h,s*a,-s*(-h*r+a*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Hn.makeScale(e,t)),this}rotate(e){return this.premultiply(Hn.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hn=new ei;function Mh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Tr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const _a={};function ol(o){o in _a||(_a[o]=!0,console.warn(o))}const Sa=new ei().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ta=new ei().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[mt]:{transfer:wr,primaries:va,toReference:o=>o,fromReference:o=>o},[ft]:{transfer:ya,primaries:va,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[al]:{transfer:wr,primaries:xa,toReference:o=>o.applyMatrix3(Ta),fromReference:o=>o.applyMatrix3(Sa)},[ah]:{transfer:ya,primaries:xa,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Ta),fromReference:o=>o.applyMatrix3(Sa).convertLinearToSRGB()}},Ah=new Set([mt,al]),ut={enabled:!0,_workingColorSpace:mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Ah.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const i=Xs[e].toReference,s=Xs[t].fromReference;return s(i(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Xs[o].primaries},getTransfer:function(o){return o===rl?wr:Xs[o].transfer}};function ns(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ki;class Eh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Tr("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let r=0;r<n.length;r++)n[r]=ns(n[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Ct(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let r=0,l=s.length;r<l;r++)s[r].isDataTexture?n.push($n(s[r].image)):n.push($n(s[r]))}else n=$n(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function $n(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Eh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class vt extends Fn{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,i=Bi,s=Bi,n=yi,r=Ln,l=sl,a=Ql,h=vt.DEFAULT_ANISOTROPY,c=rl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ct(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=r,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ei,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=il;vt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*n,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*n,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*n,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const a=e.elements,h=a[0],c=a[4],u=a[8],f=a[1],d=a[5],p=a[9],m=a[2],y=a[6],g=a[10];if(Math.abs(c-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-y)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+y)<.1&&Math.abs(h+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,x=(d+1)/2,C=(g+1)/2,E=(c+f)/4,A=(u+m)/4,T=(p+y)/4;return w>x&&w>C?w<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(w),s=E/i,n=A/i):x>C?x<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(x),i=E/s,n=T/s):C<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(C),i=A/n,s=T/n),this.set(i,s,n,t),this}let _=Math.sqrt((y-p)*(y-p)+(u-m)*(u-m)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(y-p)/_,this.y=(u-m)/_,this.z=(f-c)/_,this.w=Math.acos((h+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,r,l){let a=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const f=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3];if(l===0){e[t+0]=a,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(l===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(u!==m||a!==f||h!==d||c!==p){let y=1-l;const g=a*f+h*d+c*p+u*m,_=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const C=Math.sqrt(w),E=Math.atan2(C,g*_);y=Math.sin(y*E)/C,l=Math.sin(l*E)/C}const x=l*_;if(a=a*y+f*x,h=h*y+d*x,c=c*y+p*x,u=u*y+m*x,y===1-l){const C=1/Math.sqrt(a*a+h*h+c*c+u*u);a*=C,h*=C,c*=C,u*=C}}e[t]=a,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,n,r){const l=i[s],a=i[s+1],h=i[s+2],c=i[s+3],u=n[r],f=n[r+1],d=n[r+2],p=n[r+3];return e[t]=l*p+c*u+a*d-h*f,e[t+1]=a*p+c*f+h*u-l*d,e[t+2]=h*p+c*d+l*f-a*u,e[t+3]=c*p-l*u-a*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,r=e._order,l=Math.cos,a=Math.sin,h=l(i/2),c=l(s/2),u=l(n/2),f=a(i/2),d=a(s/2),p=a(n/2);switch(r){case"XYZ":this._x=f*c*u+h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u-f*d*p;break;case"YXZ":this._x=f*c*u+h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u+f*d*p;break;case"ZXY":this._x=f*c*u-h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u-f*d*p;break;case"ZYX":this._x=f*c*u-h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u+f*d*p;break;case"YZX":this._x=f*c*u+h*d*p,this._y=h*d*u+f*c*p,this._z=h*c*p-f*d*u,this._w=h*c*u-f*d*p;break;case"XZY":this._x=f*c*u-h*d*p,this._y=h*d*u-f*c*p,this._z=h*c*p+f*d*u,this._w=h*c*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],r=t[1],l=t[5],a=t[9],h=t[2],c=t[6],u=t[10],f=i+l+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-a)*d,this._y=(n-h)*d,this._z=(r-s)*d}else if(i>l&&i>u){const d=2*Math.sqrt(1+i-l-u);this._w=(c-a)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(n+h)/d}else if(l>u){const d=2*Math.sqrt(1+l-i-u);this._w=(n-h)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(a+c)/d}else{const d=2*Math.sqrt(1+u-i-l);this._w=(r-s)/d,this._x=(n+h)/d,this._y=(a+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,r=e._w,l=t._x,a=t._y,h=t._z,c=t._w;return this._x=i*c+r*l+s*h-n*a,this._y=s*c+r*a+n*l-i*h,this._z=n*c+r*h+i*a-s*l,this._w=r*c-i*l-s*a-n*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,r=this._w;let l=r*e._w+i*e._x+s*e._y+n*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=r,this._x=i,this._y=s,this._z=n,this;const a=1-l*l;if(a<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*n+t*this._z,this.normalize(),this}const h=Math.sqrt(a),c=Math.atan2(h,l),u=Math.sin((1-t)*c)/h,f=Math.sin(t*c)/h;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=n*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,i=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ma.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ma.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,r=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*r,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*r,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,r=e.y,l=e.z,a=e.w,h=2*(r*s-l*i),c=2*(l*t-n*s),u=2*(n*i-r*t);return this.x=t+a*h+r*u-l*c,this.y=i+a*c+l*h-n*u,this.z=s+a*u+n*c-r*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,r=t.x,l=t.y,a=t.z;return this.x=s*a-n*l,this.y=n*r-i*a,this.z=i*l-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jn.copy(this).projectOnVector(e),this.sub(jn)}reflect(e){return this.sub(jn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jn=new M,Ma=new xi;class ti{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let r=0,l=n.count;r<l;r++)e.isMesh===!0?e.getVertexPosition(r,_t):_t.fromBufferAttribute(n,r),_t.applyMatrix4(e.matrixWorld),this.expandByPoint(_t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const s=e.children;for(let n=0,r=s.length;n<r;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_t),_t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Zs.subVectors(this.max,vs),Ui.subVectors(e.a,vs),Vi.subVectors(e.b,vs),Gi.subVectors(e.c,vs),ni.subVectors(Vi,Ui),ri.subVectors(Gi,Vi),_i.subVectors(Ui,Gi);let t=[0,-ni.z,ni.y,0,-ri.z,ri.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ri.z,0,-ri.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ri.y,ri.x,0,-_i.y,_i.x,0];return!Yn(t,Ui,Vi,Gi,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,Ui,Vi,Gi,Zs))?!1:(Js.crossVectors(ni,ri),t=[Js.x,Js.y,Js.z],Yn(t,Ui,Vi,Gi,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ut[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ut[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ut[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ut[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ut[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ut[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ut[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ut[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ut),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ut=[new M,new M,new M,new M,new M,new M,new M,new M],_t=new M,Ks=new ti,Ui=new M,Vi=new M,Gi=new M,ni=new M,ri=new M,_i=new M,vs=new M,Zs=new M,Js=new M,Si=new M;function Yn(o,e,t,i,s){for(let n=0,r=o.length-3;n<=r;n+=3){Si.fromArray(o,n);const l=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),a=e.dot(Si),h=t.dot(Si),c=i.dot(Si);if(Math.max(-Math.max(a,h,c),Math.min(a,h,c))>l)return!1}return!0}const Ph=new ti,xs=new M,Xn=new M;class Lt{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ph.setFromPoints(e).getCenter(i);let s=0;for(let n=0,r=e.length;n<r;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Xn)),this.expandByPoint(xs.copy(e.center).sub(Xn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vt=new M,Kn=new M,Qs=new M,ai=new M,Zn=new M,en=new M,Jn=new M;class On{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vt.copy(this.origin).addScaledVector(this.direction,t),Vt.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kn.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Kn);const n=e.distanceTo(t)*.5,r=-this.direction.dot(Qs),l=ai.dot(this.direction),a=-ai.dot(Qs),h=ai.lengthSq(),c=Math.abs(1-r*r);let u,f,d,p;if(c>0)if(u=r*a-l,f=r*l-a,p=n*c,u>=0)if(f>=-p)if(f<=p){const m=1/c;u*=m,f*=m,d=u*(u+r*f+2*l)+f*(r*u+f+2*a)+h}else f=n,u=Math.max(0,-(r*f+l)),d=-u*u+f*(f+2*a)+h;else f=-n,u=Math.max(0,-(r*f+l)),d=-u*u+f*(f+2*a)+h;else f<=-p?(u=Math.max(0,-(-r*n+l)),f=u>0?-n:Math.min(Math.max(-n,-a),n),d=-u*u+f*(f+2*a)+h):f<=p?(u=0,f=Math.min(Math.max(-n,-a),n),d=f*(f+2*a)+h):(u=Math.max(0,-(r*n+l)),f=u>0?n:Math.min(Math.max(-n,-a),n),d=-u*u+f*(f+2*a)+h);else f=r>0?-n:n,u=Math.max(0,-(r*f+l)),d=-u*u+f*(f+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Kn).addScaledVector(Qs,f),d}intersectSphere(e,t){Vt.subVectors(e.center,this.origin);const i=Vt.dot(this.direction),s=Vt.dot(Vt)-i*i,n=e.radius*e.radius;if(s>n)return null;const r=Math.sqrt(n-s),l=i-r,a=i+r;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,r,l,a;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),c>=0?(n=(e.min.y-f.y)*c,r=(e.max.y-f.y)*c):(n=(e.max.y-f.y)*c,r=(e.min.y-f.y)*c),i>r||n>s||((n>i||isNaN(i))&&(i=n),(r<s||isNaN(s))&&(s=r),u>=0?(l=(e.min.z-f.z)*u,a=(e.max.z-f.z)*u):(l=(e.max.z-f.z)*u,a=(e.min.z-f.z)*u),i>a||l>s)||((l>i||i!==i)&&(i=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vt)!==null}intersectTriangle(e,t,i,s,n){Zn.subVectors(t,e),en.subVectors(i,e),Jn.crossVectors(Zn,en);let r=this.direction.dot(Jn),l;if(r>0){if(s)return null;l=1}else if(r<0)l=-1,r=-r;else return null;ai.subVectors(this.origin,e);const a=l*this.direction.dot(en.crossVectors(ai,en));if(a<0)return null;const h=l*this.direction.dot(Zn.cross(ai));if(h<0||a+h>r)return null;const c=-l*ai.dot(Jn);return c<0?null:this.at(c/r,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y)}set(e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=n,g[5]=r,g[9]=l,g[13]=a,g[2]=h,g[6]=c,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=m,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),n=1/qi.setFromMatrixColumn(e,1).length(),r=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,r=Math.cos(i),l=Math.sin(i),a=Math.cos(s),h=Math.sin(s),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const f=r*c,d=r*u,p=l*c,m=l*u;t[0]=a*c,t[4]=-a*u,t[8]=h,t[1]=d+p*h,t[5]=f-m*h,t[9]=-l*a,t[2]=m-f*h,t[6]=p+d*h,t[10]=r*a}else if(e.order==="YXZ"){const f=a*c,d=a*u,p=h*c,m=h*u;t[0]=f+m*l,t[4]=p*l-d,t[8]=r*h,t[1]=r*u,t[5]=r*c,t[9]=-l,t[2]=d*l-p,t[6]=m+f*l,t[10]=r*a}else if(e.order==="ZXY"){const f=a*c,d=a*u,p=h*c,m=h*u;t[0]=f-m*l,t[4]=-r*u,t[8]=p+d*l,t[1]=d+p*l,t[5]=r*c,t[9]=m-f*l,t[2]=-r*h,t[6]=l,t[10]=r*a}else if(e.order==="ZYX"){const f=r*c,d=r*u,p=l*c,m=l*u;t[0]=a*c,t[4]=p*h-d,t[8]=f*h+m,t[1]=a*u,t[5]=m*h+f,t[9]=d*h-p,t[2]=-h,t[6]=l*a,t[10]=r*a}else if(e.order==="YZX"){const f=r*a,d=r*h,p=l*a,m=l*h;t[0]=a*c,t[4]=m-f*u,t[8]=p*u+d,t[1]=u,t[5]=r*c,t[9]=-l*c,t[2]=-h*c,t[6]=d*u+p,t[10]=f-m*u}else if(e.order==="XZY"){const f=r*a,d=r*h,p=l*a,m=l*h;t[0]=a*c,t[4]=-u,t[8]=h*c,t[1]=f*u+m,t[5]=r*c,t[9]=d*u-p,t[2]=p*u-d,t[6]=l*c,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,zh)}lookAt(e,t,i){const s=this.elements;return lt.subVectors(e,t),lt.lengthSq()===0&&(lt.z=1),lt.normalize(),oi.crossVectors(i,lt),oi.lengthSq()===0&&(Math.abs(i.z)===1?lt.x+=1e-4:lt.z+=1e-4,lt.normalize(),oi.crossVectors(i,lt)),oi.normalize(),tn.crossVectors(lt,oi),s[0]=oi.x,s[4]=tn.x,s[8]=lt.x,s[1]=oi.y,s[5]=tn.y,s[9]=lt.y,s[2]=oi.z,s[6]=tn.z,s[10]=lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,r=i[0],l=i[4],a=i[8],h=i[12],c=i[1],u=i[5],f=i[9],d=i[13],p=i[2],m=i[6],y=i[10],g=i[14],_=i[3],w=i[7],x=i[11],C=i[15],E=s[0],A=s[4],T=s[8],V=s[12],B=s[1],z=s[5],O=s[9],G=s[13],P=s[2],I=s[6],k=s[10],ae=s[14],ue=s[3],X=s[7],ee=s[11],ce=s[15];return n[0]=r*E+l*B+a*P+h*ue,n[4]=r*A+l*z+a*I+h*X,n[8]=r*T+l*O+a*k+h*ee,n[12]=r*V+l*G+a*ae+h*ce,n[1]=c*E+u*B+f*P+d*ue,n[5]=c*A+u*z+f*I+d*X,n[9]=c*T+u*O+f*k+d*ee,n[13]=c*V+u*G+f*ae+d*ce,n[2]=p*E+m*B+y*P+g*ue,n[6]=p*A+m*z+y*I+g*X,n[10]=p*T+m*O+y*k+g*ee,n[14]=p*V+m*G+y*ae+g*ce,n[3]=_*E+w*B+x*P+C*ue,n[7]=_*A+w*z+x*I+C*X,n[11]=_*T+w*O+x*k+C*ee,n[15]=_*V+w*G+x*ae+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],r=e[1],l=e[5],a=e[9],h=e[13],c=e[2],u=e[6],f=e[10],d=e[14],p=e[3],m=e[7],y=e[11],g=e[15];return p*(+n*a*u-s*h*u-n*l*f+i*h*f+s*l*d-i*a*d)+m*(+t*a*d-t*h*f+n*r*f-s*r*d+s*h*c-n*a*c)+y*(+t*h*u-t*l*d-n*r*u+i*r*d+n*l*c-i*h*c)+g*(-s*l*c-t*a*u+t*l*f+s*r*u-i*r*f+i*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],r=e[4],l=e[5],a=e[6],h=e[7],c=e[8],u=e[9],f=e[10],d=e[11],p=e[12],m=e[13],y=e[14],g=e[15],_=u*y*h-m*f*h+m*a*d-l*y*d-u*a*g+l*f*g,w=p*f*h-c*y*h-p*a*d+r*y*d+c*a*g-r*f*g,x=c*m*h-p*u*h+p*l*d-r*m*d-c*l*g+r*u*g,C=p*u*a-c*m*a-p*l*f+r*m*f+c*l*y-r*u*y,E=t*_+i*w+s*x+n*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(m*f*n-u*y*n-m*s*d+i*y*d+u*s*g-i*f*g)*A,e[2]=(l*y*n-m*a*n+m*s*h-i*y*h-l*s*g+i*a*g)*A,e[3]=(u*a*n-l*f*n-u*s*h+i*f*h+l*s*d-i*a*d)*A,e[4]=w*A,e[5]=(c*y*n-p*f*n+p*s*d-t*y*d-c*s*g+t*f*g)*A,e[6]=(p*a*n-r*y*n-p*s*h+t*y*h+r*s*g-t*a*g)*A,e[7]=(r*f*n-c*a*n+c*s*h-t*f*h-r*s*d+t*a*d)*A,e[8]=x*A,e[9]=(p*u*n-c*m*n-p*i*d+t*m*d+c*i*g-t*u*g)*A,e[10]=(r*m*n-p*l*n+p*i*h-t*m*h-r*i*g+t*l*g)*A,e[11]=(c*l*n-r*u*n-c*i*h+t*u*h+r*i*d-t*l*d)*A,e[12]=C*A,e[13]=(c*m*s-p*u*s+p*i*f-t*m*f-c*i*y+t*u*y)*A,e[14]=(p*l*s-r*m*s-p*i*a+t*m*a+r*i*y-t*l*y)*A,e[15]=(r*u*s-c*l*s+c*i*a-t*u*a-r*i*f+t*l*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,r=e.x,l=e.y,a=e.z,h=n*r,c=n*l;return this.set(h*r+i,h*l-s*a,h*a+s*l,0,h*l+s*a,c*l+i,c*a-s*r,0,h*a-s*l,c*a+s*r,n*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,r){return this.set(1,i,n,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,r=t._y,l=t._z,a=t._w,h=n+n,c=r+r,u=l+l,f=n*h,d=n*c,p=n*u,m=r*c,y=r*u,g=l*u,_=a*h,w=a*c,x=a*u,C=i.x,E=i.y,A=i.z;return s[0]=(1-(m+g))*C,s[1]=(d+x)*C,s[2]=(p-w)*C,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+g))*E,s[6]=(y+_)*E,s[7]=0,s[8]=(p+w)*A,s[9]=(y-_)*A,s[10]=(1-(f+m))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=qi.set(s[0],s[1],s[2]).length();const r=qi.set(s[4],s[5],s[6]).length(),l=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],St.copy(this);const h=1/n,c=1/r,u=1/l;return St.elements[0]*=h,St.elements[1]*=h,St.elements[2]*=h,St.elements[4]*=c,St.elements[5]*=c,St.elements[6]*=c,St.elements[8]*=u,St.elements[9]*=u,St.elements[10]*=u,t.setFromRotationMatrix(St),i.x=n,i.y=r,i.z=l,this}makePerspective(e,t,i,s,n,r,l=Pi){const a=this.elements,h=2*n/(t-e),c=2*n/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,p;if(l===Pi)d=-(r+n)/(r-n),p=-2*r*n/(r-n);else if(l===Sr)d=-r/(r-n),p=-r*n/(r-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,n,r,l=Pi){const a=this.elements,h=1/(t-e),c=1/(i-s),u=1/(r-n),f=(t+e)*h,d=(i+s)*c;let p,m;if(l===Pi)p=(r+n)*u,m=-2*u;else if(l===Sr)p=n*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=m,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new M,St=new me,Ih=new M(0,0,0),zh=new M(1,1,1),oi=new M,tn=new M,lt=new M,Aa=new me,Ea=new xi;class cs{constructor(e=0,t=0,i=0,s=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],r=s[4],l=s[8],a=s[1],h=s[5],c=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,n)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(a,n));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(a,n)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,n)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ea.setFromEuler(this),this.setFromQuaternion(Ea,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dh=0;const Ca=new M,Hi=new xi,Gt=new me,sn=new M,bs=new M,Lh=new M,Fh=new xi,Ra=new M(1,0,0),Ba=new M(0,1,0),Pa=new M(0,0,1),Ia={type:"added"},Oh={type:"removed"},Wi={type:"childadded",child:null},Qn={type:"childremoved",child:null};class ke extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ct(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const e=new M,t=new cs,i=new xi,s=new M(1,1,1);function n(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ei}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sn.copy(e):sn.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(bs,sn,this.up):Gt.lookAt(sn,bs,this.up),this.quaternion.setFromRotationMatrix(Gt),s&&(Gt.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Gt),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ia),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ia),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,r=s.length;n<r;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let n=0,r=s.length;n<r;n++){const l=s[n];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let h=0,c=a.length;h<c;h++){const u=a[h];n(e.shapes,u)}else n(e.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,h=this.material.length;a<h;a++)l.push(n(e.materials,this.material[a]));s.material=l}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];s.animations.push(n(e.animations,a))}}if(t){const l=r(e.geometries),a=r(e.materials),h=r(e.textures),c=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),p=r(e.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(l){const a=[];for(const h in l){const c=l[h];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new M(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tt=new M,qt=new M,er=new M,Ht=new M,$i=new M,ji=new M,za=new M,tr=new M,ir=new M,sr=new M;let nn=class es{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tt.subVectors(e,t),s.cross(Tt);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){Tt.subVectors(s,t),qt.subVectors(i,t),er.subVectors(e,t);const r=Tt.dot(Tt),l=Tt.dot(qt),a=Tt.dot(er),h=qt.dot(qt),c=qt.dot(er),u=r*h-l*l;if(u===0)return n.set(0,0,0),null;const f=1/u,d=(h*a-l*c)*f,p=(r*c-l*a)*f;return n.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ht)===null?!1:Ht.x>=0&&Ht.y>=0&&Ht.x+Ht.y<=1}static getInterpolation(e,t,i,s,n,r,l,a){return this.getBarycoord(e,t,i,s,Ht)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(n,Ht.x),a.addScaledVector(r,Ht.y),a.addScaledVector(l,Ht.z),a)}static isFrontFacing(e,t,i,s){return Tt.subVectors(i,t),qt.subVectors(e,t),Tt.cross(qt).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Tt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return es.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return es.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return es.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return es.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return es.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let r,l;$i.subVectors(s,i),ji.subVectors(n,i),tr.subVectors(e,i);const a=$i.dot(tr),h=ji.dot(tr);if(a<=0&&h<=0)return t.copy(i);ir.subVectors(e,s);const c=$i.dot(ir),u=ji.dot(ir);if(c>=0&&u<=c)return t.copy(s);const f=a*u-c*h;if(f<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(i).addScaledVector($i,r);sr.subVectors(e,n);const d=$i.dot(sr),p=ji.dot(sr);if(p>=0&&d<=p)return t.copy(n);const m=d*h-a*p;if(m<=0&&h>=0&&p<=0)return l=h/(h-p),t.copy(i).addScaledVector(ji,l);const y=c*p-d*u;if(y<=0&&u-c>=0&&d-p>=0)return za.subVectors(n,s),l=(u-c)/(u-c+(d-p)),t.copy(s).addScaledVector(za,l);const g=1/(y+m+f);return r=m*g,l=f*g,t.copy(i).addScaledVector($i,r).addScaledVector(ji,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},rn={h:0,s:0,l:0};function nr(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Or(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,r=2*i-n;this.r=nr(r,n,e+1/3),this.g=nr(r,n,e),this.b=nr(r,n,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const r=s[1],l=s[2];switch(r){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],r=n.length;if(r===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const i=ll[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return ut.fromWorkingColorSpace(Ye.copy(this),e),Math.round($e(Ye.r*255,0,255))*65536+Math.round($e(Ye.g*255,0,255))*256+Math.round($e(Ye.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Ye.copy(this),t);const i=Ye.r,s=Ye.g,n=Ye.b,r=Math.max(i,s,n),l=Math.min(i,s,n);let a,h;const c=(l+r)/2;if(l===r)a=0,h=0;else{const u=r-l;switch(h=c<=.5?u/(r+l):u/(2-r-l),r){case i:a=(s-n)/u+(s<n?6:0);break;case s:a=(n-i)/u+2;break;case n:a=(i-s)/u+4;break}a/=6}return e.h=a,e.s=h,e.l=c,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Ye.copy(this),t),e.r=Ye.r,e.g=Ye.g,e.b=Ye.b,e}getStyle(e=ft){ut.fromWorkingColorSpace(Ye.copy(this),e);const t=Ye.r,i=Ye.g,s=Ye.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(rn);const i=zs(li.h,rn.h,t),s=zs(li.s,rn.s,t),n=zs(li.l,rn.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Ne;Ne.NAMES=ll;let kh=0,zi=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ct(),this.name="",this.type="Material",this.blending=oa,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ha&&(i.blendSrc=this.blendSrc),this.blendDst!==ua&&(i.blendDst=this.blendDst),this.blendEquation!==la&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const r=[];for(const l in n){const a=n[l];delete a.metadata,r.push(a)}return r}if(t){const n=s(e.textures),r=s(e.images);n.length>0&&(i.textures=n),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class ts extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=Uh();function Uh(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),i=new Uint32Array(512),s=new Uint32Array(512);for(let a=0;a<256;++a){const h=a-127;h<-27?(i[a]=0,i[a|256]=32768,s[a]=24,s[a|256]=24):h<-14?(i[a]=1024>>-h-14,i[a|256]=1024>>-h-14|32768,s[a]=-h-1,s[a|256]=-h-1):h<=15?(i[a]=h+15<<10,i[a|256]=h+15<<10|32768,s[a]=13,s[a|256]=13):h<128?(i[a]=31744,i[a|256]=64512,s[a]=24,s[a|256]=24):(i[a]=31744,i[a|256]=64512,s[a]=13,s[a|256]=13)}const n=new Uint32Array(2048),r=new Uint32Array(64),l=new Uint32Array(64);for(let a=1;a<1024;++a){let h=a<<13,c=0;for(;!(h&8388608);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,n[a]=h|c}for(let a=1024;a<2048;++a)n[a]=939524096+(a-1024<<13);for(let a=1;a<31;++a)r[a]=a<<23;r[31]=1199570944,r[32]=2147483648;for(let a=33;a<63;++a)r[a]=2147483648+(a-32<<23);r[63]=3347054592;for(let a=1;a<64;++a)a!==32&&(l[a]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:n,exponentTable:r,offsetTable:l}}function Vh(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=$e(o,-65504,65504),$t.floatView[0]=o;const e=$t.uint32View[0],t=e>>23&511;return $t.baseTable[t]+((e&8388607)>>$t.shiftTable[t])}function Gh(o){const e=o>>10;return $t.uint32View[0]=$t.mantissaTable[$t.offsetTable[e]+(o&1023)]+$t.exponentTable[e],$t.floatView[0]}const an={toHalfFloat:Vh,fromHalfFloat:Gh},Ue=new M,on=new Q;class xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_r,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ol("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXY(t,on.x,on.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ue.fromBufferAttribute(this,t),Ue.applyMatrix3(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ue.fromBufferAttribute(this,t),Ue.applyMatrix4(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ue.fromBufferAttribute(this,t),Ue.applyNormalMatrix(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ue.fromBufferAttribute(this,t),Ue.transformDirection(e),this.setXYZ(t,Ue.x,Ue.y,Ue.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Et(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Se(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Et(t,this.array)),t}setX(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Et(t,this.array)),t}setY(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Et(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Et(t,this.array)),t}setW(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array),s=Se(s,this.array),n=Se(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_r&&(e.usage=this.usage),e}}class qh extends xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hh extends xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wh=0;const gt=new me,rr=new ke,Yi=new M,ht=new ti,ws=new ti,We=new M;class bi extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ct(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Hh:qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ei().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gt.makeRotationFromQuaternion(e),this.applyMatrix4(gt),this}rotateX(e){return gt.makeRotationX(e),this.applyMatrix4(gt),this}rotateY(e){return gt.makeRotationY(e),this.applyMatrix4(gt),this}rotateZ(e){return gt.makeRotationZ(e),this.applyMatrix4(gt),this}translate(e,t,i){return gt.makeTranslation(e,t,i),this.applyMatrix4(gt),this}scale(e,t,i){return gt.makeScale(e,t,i),this.applyMatrix4(gt),this}lookAt(e){return rr.lookAt(e),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];ht.setFromBufferAttribute(n),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,ht.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,ht.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(ht.min),this.boundingBox.expandByPoint(ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const i=this.boundingSphere.center;if(ht.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const l=t[n];ws.setFromBufferAttribute(l),this.morphTargetsRelative?(We.addVectors(ht.min,ws.min),ht.expandByPoint(We),We.addVectors(ht.max,ws.max),ht.expandByPoint(We)):(ht.expandByPoint(ws.min),ht.expandByPoint(ws.max))}ht.getCenter(i);let s=0;for(let n=0,r=e.count;n<r;n++)We.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(We));if(t)for(let n=0,r=t.length;n<r;n++){const l=t[n],a=this.morphTargetsRelative;for(let h=0,c=l.count;h<c;h++)We.fromBufferAttribute(l,h),a&&(Yi.fromBufferAttribute(e,h),We.add(Yi)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),l=[],a=[];for(let T=0;T<i.count;T++)l[T]=new M,a[T]=new M;const h=new M,c=new M,u=new M,f=new Q,d=new Q,p=new Q,m=new M,y=new M;function g(T,V,B){h.fromBufferAttribute(i,T),c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,B),f.fromBufferAttribute(n,T),d.fromBufferAttribute(n,V),p.fromBufferAttribute(n,B),c.sub(h),u.sub(h),d.sub(f),p.sub(f);const z=1/(d.x*p.y-p.x*d.y);isFinite(z)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(z),y.copy(u).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(z),l[T].add(m),l[V].add(m),l[B].add(m),a[T].add(y),a[V].add(y),a[B].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,V=_.length;T<V;++T){const B=_[T],z=B.start,O=B.count;for(let G=z,P=z+O;G<P;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new M,x=new M,C=new M,E=new M;function A(T){C.fromBufferAttribute(s,T),E.copy(C);const V=l[T];w.copy(V),w.sub(C.multiplyScalar(C.dot(V))).normalize(),x.crossVectors(E,V);const z=x.dot(a[T])<0?-1:1;r.setXYZW(T,w.x,w.y,w.z,z)}for(let T=0,V=_.length;T<V;++T){const B=_[T],z=B.start,O=B.count;for(let G=z,P=z+O;G<P;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new M,n=new M,r=new M,l=new M,a=new M,h=new M,c=new M,u=new M;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),m=e.getX(f+1),y=e.getX(f+2);s.fromBufferAttribute(t,p),n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),l.fromBufferAttribute(i,p),a.fromBufferAttribute(i,m),h.fromBufferAttribute(i,y),l.add(c),a.add(c),h.add(c),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),n.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),c.subVectors(r,n),u.subVectors(s,n),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)We.fromBufferAttribute(e,t),We.normalize(),e.setXYZ(t,We.x,We.y,We.z)}toNonIndexed(){function e(l,a){const h=l.array,c=l.itemSize,u=l.normalized,f=new h.constructor(a.length*c);let d=0,p=0;for(let m=0,y=a.length;m<y;m++){l.isInterleavedBufferAttribute?d=a[m]*l.data.stride+l.offset:d=a[m]*c;for(let g=0;g<c;g++)f[p++]=h[d++]}return new xt(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,s=this.attributes;for(const l in s){const a=s[l],h=e(a,i);t.setAttribute(l,h)}const n=this.morphAttributes;for(const l in n){const a=[],h=n[l];for(let c=0,u=h.length;c<u;c++){const f=h[c],d=e(f,i);a.push(d)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,a=r.length;l<a;l++){const h=r[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(e[h]=a[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const h=i[a];e.data.attributes[a]=h.toJSON(e.data)}const s={};let n=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],c=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];c.push(d.toJSON(e.data))}c.length>0&&(s[a]=c,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const n=e.morphAttributes;for(const h in n){const c=[],u=n[h];for(let f=0,d=u.length;f<d;f++)c.push(u[f].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let h=0,c=r.length;h<c;h++){const u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new me,Ti=new On,ln=new Lt,Da=new M,Xi=new M,Ki=new M,Zi=new M,ar=new M,hn=new M,un=new Q,cn=new Q,fn=new Q,La=new M,Fa=new M,Oa=new M,dn=new M,pn=new M;class vi extends ke{constructor(e=new bi,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const l=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(n&&l){hn.set(0,0,0);for(let a=0,h=n.length;a<h;a++){const c=l[a],u=n[a];c!==0&&(ar.fromBufferAttribute(u,e),r?hn.addScaledVector(ar,c):hn.addScaledVector(ar.sub(t),c))}t.add(hn)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ln.copy(i.boundingSphere),ln.applyMatrix4(n),Ti.copy(e.ray).recast(e.near),!(ln.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(ln,Da)===null||Ti.origin.distanceToSquared(Da)>(e.far-e.near)**2))&&(Na.copy(n).invert(),Ti.copy(e.ray).applyMatrix4(Na),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s;const n=this.geometry,r=this.material,l=n.index,a=n.attributes.position,h=n.attributes.uv,c=n.attributes.uv1,u=n.attributes.normal,f=n.groups,d=n.drawRange;if(l!==null)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const y=f[p],g=r[y.materialIndex],_=Math.max(y.start,d.start),w=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let x=_,C=w;x<C;x+=3){const E=l.getX(x),A=l.getX(x+1),T=l.getX(x+2);s=mn(this,g,e,i,h,c,u,E,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let y=p,g=m;y<g;y+=3){const _=l.getX(y),w=l.getX(y+1),x=l.getX(y+2);s=mn(this,r,e,i,h,c,u,_,w,x),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,m=f.length;p<m;p++){const y=f[p],g=r[y.materialIndex],_=Math.max(y.start,d.start),w=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let x=_,C=w;x<C;x+=3){const E=x,A=x+1,T=x+2;s=mn(this,g,e,i,h,c,u,E,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=p,g=m;y<g;y+=3){const _=y,w=y+1,x=y+2;s=mn(this,r,e,i,h,c,u,_,w,x),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function $h(o,e,t,i,s,n,r,l){let a;if(e.side===$l?a=i.intersectTriangle(r,n,s,!0,l):a=i.intersectTriangle(s,n,r,e.side===Pn,l),a===null)return null;pn.copy(l),pn.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(pn);return h<t.near||h>t.far?null:{distance:h,point:pn.clone(),object:o}}function mn(o,e,t,i,s,n,r,l,a,h){o.getVertexPosition(l,Xi),o.getVertexPosition(a,Ki),o.getVertexPosition(h,Zi);const c=$h(o,e,t,i,Xi,Ki,Zi,dn);if(c){s&&(un.fromBufferAttribute(s,l),cn.fromBufferAttribute(s,a),fn.fromBufferAttribute(s,h),c.uv=nn.getInterpolation(dn,Xi,Ki,Zi,un,cn,fn,new Q)),n&&(un.fromBufferAttribute(n,l),cn.fromBufferAttribute(n,a),fn.fromBufferAttribute(n,h),c.uv1=nn.getInterpolation(dn,Xi,Ki,Zi,un,cn,fn,new Q)),r&&(La.fromBufferAttribute(r,l),Fa.fromBufferAttribute(r,a),Oa.fromBufferAttribute(r,h),c.normal=nn.getInterpolation(dn,Xi,Ki,Zi,La,Fa,Oa,new M),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:l,b:a,c:h,normal:new M,materialIndex:0};nn.getNormal(Xi,Ki,Zi,u.normal),c.face=u}return c}let hl=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const hi=new M,ka=new Q,Ua=new Q;class kr extends hl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,ka,Ua),t.subVectors(Ua,ka)}setViewOffset(e,t,i,s,n,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,h=r.fullHeight;n+=r.offsetX*s/a,t-=r.offsetY*i/h,s*=r.width/a,i*=r.height/h}const l=this.filmOffset;l!==0&&(n+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=new M,jh=new M,Yh=new ei;let Ji=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=or.subVectors(i,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(or),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yh.getNormalMatrix(e),s=this.coplanarPoint(or).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Mi=new Lt,gn=new M;class Xh{constructor(e=new Ji,t=new Ji,i=new Ji,s=new Ji,n=new Ji,r=new Ji){this.planes=[e,t,i,s,n,r]}set(e,t,i,s,n,r){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(n),l[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,s=e.elements,n=s[0],r=s[1],l=s[2],a=s[3],h=s[4],c=s[5],u=s[6],f=s[7],d=s[8],p=s[9],m=s[10],y=s[11],g=s[12],_=s[13],w=s[14],x=s[15];if(i[0].setComponents(a-n,f-h,y-d,x-g).normalize(),i[1].setComponents(a+n,f+h,y+d,x+g).normalize(),i[2].setComponents(a+r,f+c,y+p,x+_).normalize(),i[3].setComponents(a-r,f-c,y-p,x-_).normalize(),i[4].setComponents(a-l,f-u,y-m,x-w).normalize(),t===Pi)i[5].setComponents(a+l,f+u,y+m,x+w).normalize();else if(t===Sr)i[5].setComponents(l,u,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(gn.x=s.normal.x>0?e.max.x:e.min.x,gn.y=s.normal.y>0?e.max.y:e.min.y,gn.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class In extends bi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,r=t/2,l=Math.floor(i),a=Math.floor(s),h=l+1,c=a+1,u=e/l,f=t/a,d=[],p=[],m=[],y=[];for(let g=0;g<c;g++){const _=g*f-r;for(let w=0;w<h;w++){const x=w*u-n;p.push(x,-_,0),m.push(0,0,1),y.push(w/l),y.push(1-g/a)}}for(let g=0;g<a;g++)for(let _=0;_<l;_++){const w=_+h*g,x=_+h*(g+1),C=_+1+h*(g+1),E=_+1+h*g;d.push(w,x,E),d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}class ul extends hl{constructor(e=-1,t=1,i=1,s=-1,n=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,r=i+e,l=s+t,a=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,r=n+h*this.view.width,l-=c*this.view.offsetY,a=l-c*this.view.height}this.projectionMatrix.makeOrthographic(n,r,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kh extends vt{constructor(e,t,i,s,n,r,l,a,h,c){if(c=c!==void 0?c:Gn,c!==Gn&&c!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Gn&&(i=eh),i===void 0&&c===da&&(i=th),super(null,s,n,r,l,a,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:ks,this.minFilter=a!==void 0?a:ks,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new Kh(1,1);Zh.compareFunction=oh;class lr extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Jh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_r,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ol("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const et=new M;class Ur{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Et(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Se(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Se(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Se(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Se(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Et(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Et(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Et(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Et(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Se(t,this.array),i=Se(i,this.array),s=Se(s,this.array),n=Se(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Va=new M,Ga=new dt,qa=new dt,Qh=new M,Ha=new me,yn=new M,hr=new Lt,Wa=new me,ur=new On;class eu extends vi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fa,this.bindMatrix=new me,this.bindMatrixInverse=new me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yn),this.boundingBox.expandByPoint(yn)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,yn),this.boundingSphere.expandByPoint(yn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(s),e.ray.intersectsSphere(hr)!==!1&&(Wa.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Wa),!(this.boundingBox!==null&&ur.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Ga.fromBufferAttribute(s.attributes.skinIndex,e),qa.fromBufferAttribute(s.attributes.skinWeight,e),Va.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const r=qa.getComponent(n);if(r!==0){const l=Ga.getComponent(n);Ha.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),t.addScaledVector(Qh.copy(Va).applyMatrix4(Ha),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cl extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vr extends vt{constructor(e=null,t=1,i=1,s,n,r,l,a,h=ks,c=ks,u,f){super(null,r,l,a,h,c,s,n,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new me,tu=new me;class Gr{constructor(e=[],t=[]){this.uuid=Ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new me;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,r=e.length;n<r;n++){const l=e[n]?e[n].matrixWorld:tu;$a.multiplyMatrices(l,t[n]),$a.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Gr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Vr(t,e,e,sl,Ii);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const n=e.bones[i];let r=t[n];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),r=new cl),this.bones.push(r),this.boneInverses.push(new me().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,n=t.length;s<n;s++){const r=t[s];e.bones.push(r.uuid);const l=i[s];e.boneInverses.push(l.toArray())}return e}}class Mr extends xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new me,ja=new me,vn=[],Ya=new ti,iu=new me,_s=new vi,Ss=new Lt;class su extends vi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,iu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Ya.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Ya)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Ss.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,r=e*n+1;for(let l=0;l<i.length;l++)i[l]=s[r+l]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),e.ray.intersectsSphere(Ss)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,Qi),ja.multiplyMatrices(i,Qi),_s.matrixWorld=ja,_s.raycast(e,vn);for(let r=0,l=vn.length;r<l;r++){const a=vn[r];a.instanceId=n,a.object=this,t.push(a)}vn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,ih,Ii));const n=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const l=this.geometry.morphTargetsRelative?1:1-r,a=s*e;n[a]=l,n.set(i,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fl extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xa=new M,Ka=new M,Za=new me,cr=new On,xn=new Lt;class qr extends ke{constructor(e=new bi,t=new fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Xa.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(Ka);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xn.copy(i.boundingSphere),xn.applyMatrix4(s),xn.radius+=n,e.ray.intersectsSphere(xn)===!1)return;Za.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Za);const l=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=new M,c=new M,u=new M,f=new M,d=this.isLineSegments?2:1,p=i.index,y=i.attributes.position;if(p!==null){const g=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let w=g,x=_-1;w<x;w+=d){const C=p.getX(w),E=p.getX(w+1);if(h.fromBufferAttribute(y,C),c.fromBufferAttribute(y,E),cr.distanceSqToSegment(h,c,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,r.start),_=Math.min(y.count,r.start+r.count);for(let w=g,x=_-1;w<x;w+=d){if(h.fromBufferAttribute(y,w),c.fromBufferAttribute(y,w+1),cr.distanceSqToSegment(h,c,f,u)>a)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const l=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}}const Ja=new M,Qa=new M;class nu extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)Ja.fromBufferAttribute(t,s),Qa.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ja.distanceTo(Qa);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ru extends qr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dl extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eo=new me,Ar=new On,bn=new Lt,wn=new M;class au extends ke{constructor(e=new bi,t=new dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bn.copy(i.boundingSphere),bn.applyMatrix4(s),bn.radius+=n,e.ray.intersectsSphere(bn)===!1)return;eo.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(eo);const l=n/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let p=f,m=d;p<m;p++){const y=h.getX(p);wn.fromBufferAttribute(u,y),to(wn,y,a,s,e,t,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let p=f,m=d;p<m;p++)wn.fromBufferAttribute(u,p),to(wn,p,a,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=s.length;n<r;n++){const l=s[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=n}}}}}function to(o,e,t,i,s,n,r){const l=Ar.distanceSqToPoint(o);if(l<t){const a=new M;Ar.closestPointToPoint(o,a),a.applyMatrix4(i);const h=s.ray.origin.distanceTo(a);if(h<s.near||h>s.far)return;n.push({distance:h,distanceToRay:Math.sqrt(l),point:a,index:e,face:null,object:r})}}class Hr extends bi{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,r=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:r,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(r+l,Math.PI);let h=0;const c=[],u=new M,f=new M,d=[],p=[],m=[],y=[];for(let g=0;g<=i;g++){const _=[],w=g/i;let x=0;g===0&&r===0?x=.5/t:g===i&&a===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const E=C/t;u.x=-e*Math.cos(s+E*n)*Math.sin(r+w*l),u.y=e*Math.cos(r+w*l),u.z=e*Math.sin(s+E*n)*Math.sin(r+w*l),p.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),y.push(E+x,1-w),_.push(h++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const w=c[g][_+1],x=c[g][_],C=c[g+1][_],E=c[g+1][_+1];(g!==0||r>0)&&d.push(w,x,E),(g!==i-1||a<Math.PI)&&d.push(x,C,E)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wr extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends Wr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function _n(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function ou(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function lu(o){function e(s,n){return o[s]-o[n]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function io(o,e,t){const i=o.length,s=new o.constructor(i);for(let n=0,r=0;r!==i;++n){const l=t[n]*e;for(let a=0;a!==e;++a)s[r++]=o[l+a]}return s}function pl(o,e,t,i){let s=1,n=o[0];for(;n!==void 0&&n[i]===void 0;)n=o[s++];if(n===void 0)return;let r=n[i];if(r!==void 0)if(Array.isArray(r))do r=n[i],r!==void 0&&(e.push(n.time),t.push.apply(t,r)),n=o[s++];while(n!==void 0);else if(r.toArray!==void 0)do r=n[i],r!==void 0&&(e.push(n.time),r.toArray(t,t.length)),n=o[s++];while(n!==void 0);else do r=n[i],r!==void 0&&(e.push(n.time),t.push(r)),n=o[s++];while(n!==void 0)}class Hs{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],n=t[i-1];i:{e:{let r;t:{s:if(!(e<s)){for(let l=i+2;;){if(s===void 0){if(e<n)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(n=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=n)){const l=t[1];e<l&&(i=2,n=l);for(let a=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(s=n,n=t[--i-1],e>=n)break e}r=i,i=0;break t}break i}for(;i<r;){const l=i+r>>>1;e<t[l]?r=l:i=l+1}if(s=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s;for(let r=0;r!==s;++r)t[r]=i[n+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hu extends Hs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pa,endingEnd:pa}}intervalChanged_(e,t,i){const s=this.parameterPositions;let n=e-2,r=e+1,l=s[n],a=s[r];if(l===void 0)switch(this.getSettings_().endingStart){case ma:n=e,l=2*t-i;break;case ga:n=s.length-2,l=t+s[n]-s[n+1];break;default:n=e,l=i}if(a===void 0)switch(this.getSettings_().endingEnd){case ma:r=e,a=2*i-t;break;case ga:r=1,a=i+s[1]-s[0];break;default:r=e-1,a=t}const h=(i-t)*.5,c=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(a-i),this._offsetPrev=n*c,this._offsetNext=r*c}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,l=this.valueSize,a=e*l,h=a-l,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),m=p*p,y=m*p,g=-f*y+2*f*m-f*p,_=(1+f)*y+(-1.5-2*f)*m+(-.5+f)*p+1,w=(-1-d)*y+(1.5+d)*m+.5*p,x=d*y-d*m;for(let C=0;C!==l;++C)n[C]=g*r[c+C]+_*r[h+C]+w*r[a+C]+x*r[u+C];return n}}class uu extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,l=this.valueSize,a=e*l,h=a-l,c=(i-t)/(s-t),u=1-c;for(let f=0;f!==l;++f)n[f]=r[h+f]*u+r[a+f]*c;return n}}class cu extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ft{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_n(t,this.TimeBufferType),this.values=_n(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_n(e.times,Array),values:_n(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case as:t=this.InterpolantFactoryMethodLinear;break;case qn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return qn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let n=0,r=s-1;for(;n!==s&&i[n]<e;)++n;for(;r!==-1&&i[r]>t;)--r;if(++r,n!==0||r!==s){n>=r&&(r=Math.max(r,1),n=r-1);const l=this.getValueSize();this.times=i.slice(n,r),this.values=this.values.slice(n*l,r*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let l=0;l!==n;l++){const a=i[l];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,a,r),e=!1;break}r=a}if(s!==void 0&&ou(s))for(let l=0,a=s.length;l!==a;++l){const h=s[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qn,n=e.length-1;let r=1;for(let l=1;l<n;++l){let a=!1;const h=e[l],c=e[l+1];if(h!==c&&(l!==1||h!==e[0]))if(s)a=!0;else{const u=l*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){const m=t[u+p];if(m!==t[f+p]||m!==t[d+p]){a=!0;break}}}if(a){if(l!==r){e[r]=e[l];const u=l*i,f=r*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++r}}if(n>0){e[r]=e[n];for(let l=n*i,a=r*i,h=0;h!==i;++h)t[a+h]=t[l+h];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=as;class fs extends Ft{}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Us;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ml extends Ft{}ml.prototype.ValueTypeName="color";class os extends Ft{}os.prototype.ValueTypeName="number";class fu extends Hs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,l=this.valueSize,a=(i-t)/(s-t);let h=e*l;for(let c=h+l;h!==c;h+=4)xi.slerpFlat(n,0,r,h-l,r,h,a);return n}}class Ni extends Ft{InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}}Ni.prototype.ValueTypeName="quaternion";Ni.prototype.DefaultInterpolation=as;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Ft{}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Us;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends Ft{}ls.prototype.ValueTypeName="vector";class du{constructor(e="",t=-1,i=[],s=sh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ct(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let r=0,l=i.length;r!==l;++r)t.push(mu(i[r]).scale(s));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,r=i.length;n!==r;++n)t.push(Ft.toJSON(i[n]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const n=t.length,r=[];for(let l=0;l<n;l++){let a=[],h=[];a.push((l+n-1)%n,l,(l+1)%n),h.push(0,1,0);const c=lu(a);a=io(a,1,c),h=io(h,1,c),!s&&a[0]===0&&(a.push(n),h.push(h[0])),r.push(new os(".morphTargetInfluences["+t[l].name+"]",a,h).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},n=/^([\w-]*?)([\d]+)$/;for(let l=0,a=e.length;l<a;l++){const h=e[l],c=h.name.match(n);if(c&&c.length>1){const u=c[1];let f=s[u];f||(s[u]=f=[]),f.push(h)}}const r=[];for(const l in s)r.push(this.CreateFromMorphTargetSequence(l,s[l],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,p,m){if(d.length!==0){const y=[],g=[];pl(d,y,g,p),y.length!==0&&m.push(new u(f,y,g))}},s=[],n=e.name||"default",r=e.fps||30,l=e.blendMode;let a=e.length||-1;const h=e.hierarchy||[];for(let u=0;u<h.length;u++){const f=h[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let m=0;m<f[p].morphTargets.length;m++)d[f[p].morphTargets[m]]=-1;for(const m in d){const y=[],g=[];for(let _=0;_!==f[p].morphTargets.length;++_){const w=f[p];y.push(w.time),g.push(w.morphTarget===m?1:0)}s.push(new os(".morphTargetInfluence["+m+"]",y,g))}a=d.length*r}else{const d=".bones["+t[u].name+"]";i(ls,d+".position",f,"pos",s),i(Ni,d+".quaternion",f,"rot",s),i(ls,d+".scale",f,"scl",s)}}return s.length===0?null:new this(n,a,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pu(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return ml;case"quaternion":return Ni;case"bool":case"boolean":return fs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function mu(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pu(o.type);if(o.times===void 0){const t=[],i=[];pl(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const pi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gu{constructor(e,t,i){const s=this;let n=!1,r=0,l=0,a;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,n===!1&&s.onStart!==void 0&&s.onStart(c,r,l),n=!0},this.itemEnd=function(c){r++,s.onProgress!==void 0&&s.onProgress(c,r,l),r===l&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){const d=h[u],p=h[u+1];if(d.global&&(d.lastIndex=0),d.test(c))return p}return null}}}const yu=new gu;class Di{constructor(e){this.manager=e!==void 0?e:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Di.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wt={};class vu extends Error{constructor(e,t){super(e),this.response=t}}class $r extends Di{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=pi.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Wt[e]!==void 0){Wt[e].push({onLoad:t,onProgress:i,onError:s});return}Wt[e]=[],Wt[e].push({onLoad:t,onProgress:i,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,a=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=Wt[e],u=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let m=0;const y=new ReadableStream({start(g){_();function _(){u.read().then(({done:w,value:x})=>{if(w)g.close();else{m+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:d});for(let E=0,A=c.length;E<A;E++){const T=c[E];T.onProgress&&T.onProgress(C)}g.enqueue(x),_()}})}}});return new Response(y)}else throw new vu(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(a){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,l));case"json":return h.json();default:if(l===void 0)return h.text();{const u=/charset="?([^;"\s]*)"?/i.exec(l),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return h.arrayBuffer().then(p=>d.decode(p))}}}).then(h=>{pi.add(e,h);const c=Wt[e];delete Wt[e];for(let u=0,f=c.length;u<f;u++){const d=c[u];d.onLoad&&d.onLoad(h)}}).catch(h=>{const c=Wt[e];if(c===void 0)throw this.manager.itemError(e),h;delete Wt[e];for(let u=0,f=c.length;u<f;u++){const d=c[u];d.onError&&d.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xu extends Di{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,r=pi.get(e);if(r!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(r),n.manager.itemEnd(e)},0),r;const l=Tr("img");function a(){c(),pi.add(e,this),t&&t(this),n.manager.itemEnd(e)}function h(u){c(),s&&s(u),n.manager.itemError(e),n.manager.itemEnd(e)}function c(){l.removeEventListener("load",a,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",a,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),n.manager.itemStart(e),l.src=e,l}}class bu extends Di{constructor(e){super(e)}load(e,t,i,s){const n=this,r=new Vr,l=new $r(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(n.withCredentials),l.load(e,function(a){let h;try{h=n.parse(a)}catch(c){if(s!==void 0)s(c);else{console.error(c);return}}h.image!==void 0?r.image=h.image:h.data!==void 0&&(r.image.width=h.width,r.image.height=h.height,r.image.data=h.data),r.wrapS=h.wrapS!==void 0?h.wrapS:Bi,r.wrapT=h.wrapT!==void 0?h.wrapT:Bi,r.magFilter=h.magFilter!==void 0?h.magFilter:yi,r.minFilter=h.minFilter!==void 0?h.minFilter:yi,r.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(r.colorSpace=h.colorSpace),h.flipY!==void 0&&(r.flipY=h.flipY),h.format!==void 0&&(r.format=h.format),h.type!==void 0&&(r.type=h.type),h.mipmaps!==void 0&&(r.mipmaps=h.mipmaps,r.minFilter=Ln),h.mipmapCount===1&&(r.minFilter=yi),h.generateMipmaps!==void 0&&(r.generateMipmaps=h.generateMipmaps),r.needsUpdate=!0,t&&t(r,h)},i,s),r}}class Ci extends Di{constructor(e){super(e)}load(e,t,i,s){const n=new vt,r=new xu(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(l){n.image=l,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class jr extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fr=new me,so=new M,no=new M;class Yr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;so.setFromMatrixPosition(e.matrixWorld),t.position.copy(so),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),fr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wu extends Yr{constructor(){super(new kr(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _u extends jr{constructor(e,t,i=0,s=Math.PI/3,n=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=i,this.angle=s,this.penumbra=n,this.decay=r,this.map=null,this.shadow=new wu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ro=new me,Ts=new M,dr=new M;class Su extends Yr{constructor(){super(new kr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ts),dr.copy(i.position),dr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dr),i.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),ro.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro)}}class Tu extends jr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mu extends Yr{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Au extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Mu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ns{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Eu extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,r=pi.get(e);if(r!==void 0){if(n.manager.itemStart(e),r.then){r.then(h=>{t&&t(h),n.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(r),n.manager.itemEnd(e)},0),r}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const a=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(h){return pi.add(e,h),t&&t(h),n.manager.itemEnd(e),h}).catch(function(h){s&&s(h),pi.remove(e),n.manager.itemError(e),n.manager.itemEnd(e)});pi.add(e,a),n.manager.itemStart(e)}}const Xr="\\[\\]\\.:\\/",Cu=new RegExp("["+Xr+"]","g"),Kr="[^"+Xr+"]",Ru="[^"+Xr.replace("\\.","")+"]",Bu=/((?:WC+[\/:])*)/.source.replace("WC",Kr),Pu=/(WCOD+)?/.source.replace("WCOD",Ru),Iu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kr),zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kr),Nu=new RegExp("^"+Bu+Pu+Iu+zu+"$"),Du=["material","materials","bones","map"];class Lu{constructor(e,t,i){const s=i||Te.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=i.length;s!==n;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Te{constructor(e,t,i){this.path=t,this.parsedPath=i||Te.parseTrackName(t),this.node=Te.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Te.Composite(e,t,i):new Te(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cu,"")}static parseTrackName(e){const t=Nu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const n=i.nodeName.substring(s+1);Du.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let r=0;r<n.length;r++){const l=n[r];if(l.name===t||l.uuid===t)return l;const a=i(l.children);if(a)return a}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let n=t.propertyIndex;if(e||(e=Te.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const r=e[s];if(r===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=n}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=Lu;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);class pt{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.min=e,this.max=t}expand(e){e instanceof M?(e.x<this.min.x&&this.min.setX(e.x),e.y<this.min.y&&this.min.setY(e.y),e.z<this.min.z&&this.min.setZ(e.z),e.x>this.max.x&&this.max.setX(e.x),e.y>this.max.y&&this.max.setY(e.y),e.z>this.max.z&&this.max.setZ(e.z)):e instanceof pt&&(e.min.x<this.min.x&&this.min.setX(e.min.x),e.min.y<this.min.y&&this.min.setY(e.min.y),e.min.z<this.min.z&&this.min.setZ(e.min.z),e.max.x>this.max.x&&this.max.setX(e.max.x),e.max.y>this.max.y&&this.max.setY(e.max.y),e.max.z>this.max.z&&this.max.setZ(e.max.z))}intersectRay(e,t){let i=new M(1,1,1).divide(t),s=(this.min.x-e.x)*i.x,n=(this.max.x-e.x)*i.x,r=(this.min.y-e.y)*i.y,l=(this.max.y-e.y)*i.y,a=(this.min.z-e.z)*i.z,h=(this.max.z-e.z)*i.z;var c=Math.max(Math.max(Math.min(s,n),Math.min(r,l)),Math.min(a,h));let u=Math.min(Math.min(Math.max(s,n),Math.max(r,l)),Math.max(a,h));return u<0?{t:u,hit:!1}:c>u?{t:u,hit:!1}:(c<0&&(c=0),{t:c,hit:!0})}static shaderStruct(){return`
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
    `}}function Dt(o,e){return new Q(o,e)}function tt(o,e,t){return new M(o,e,t)}function Ms(o,e){return o*(e<0?-1:1)}function ao(o,e,t){return(1-o)*e+o*t}function Fu(o,e){let t=e.clone().sub(new Q(o.min.x,o.min.y));return o.max.x>o.min.x&&(t.x/=o.max.x-o.min.x),o.max.y>o.min.y&&(t.y/=o.max.y-o.min.y),t}function Gs(o,e,t){return o<e?e:o>t?t:o}class Ri{constructor(e,t,i){S(this,"func",[]);S(this,"absFunc",[]);S(this,"cdf",[]);S(this,"min",-1);S(this,"max",-1);S(this,"funcInt",-1);if(e instanceof ArrayBuffer){this.fromBufferData(e);return}if(t===void 0||i===void 0)throw new Error("PC1D constructor must provide min and max values");let s=[],n=[],r=0;for(let a=0;a<e.length;a++)s.push(0),n.push(0);for(let a=0;a<e.length;a++)s[a]=Math.abs(e[a]);n[0]=0;let l=e.length;for(let a=1;a<l+1;a++)n[a]=n[a-1]+e[a-1]*(i-t)/l;if(r=n[l],r==0)for(let a=1;a<l+1;a++)n[a]=a/l;else for(let a=1;a<l+1;a++)n[a]/=r;this.func=e,this.min=t,this.max=i,this.absFunc=s,this.cdf=n,this.funcInt=r}fromBufferData(e){let i=e.byteLength/4,s=Math.floor((i-3)/3),n=new Float32Array(e,0,i);this.min=n[0],this.max=n[1],this.funcInt=n[2],this.func=Array.from(n.slice(3,3+s)),this.absFunc=Array.from(n.slice(3+s,3+s*2)),this.cdf=Array.from(n.slice(3+s*2,3+s*3+1))}getBufferData(){const e=12+(this.func.length*3+1)*4,t=new ArrayBuffer(e);let i=e/4,s=this.func.length,n=new Float32Array(t,0,i);n[0]=this.min,n[1]=this.max,n[2]=this.funcInt;for(let r=0;r<this.func.length;r++)n[3+r]=this.func[r];for(let r=0;r<this.absFunc.length;r++)n[3+s+r]=this.absFunc[r];for(let r=0;r<this.cdf.length;r++)n[3+s*2+r]=this.cdf[r];return t}findCDFIndex(e,t){let i=0,s=e.length;for(var n=-2,r=-1;r!=n;){n=Math.floor((i+s)/2),r=n;let l=e[n];t>l&&(i=n,n=Math.floor((i+s)/2)),t<l&&(s=n,n=Math.floor((i+s)/2))}return r}samplePC1D(e){let{cdf:t,absFunc:i,funcInt:s,func:n,min:r,max:l}=this,a=this.findCDFIndex(t,e),h=e-t[a];t[a+1]-t[a]>0&&(h/=t[a+1]-t[a]);let c=a,u=s>0?i[a]/s:0,f=ao((a+h)/n.length,r,l),d=n[a];return{offset:c,pdf:u,remappedOffset:f,sampledValue:d}}invertPC1D(e){let{cdf:t,func:i,min:s,max:n}=this;if(e<s||e>n)return;let r=(e-s)/(n-s)*i.length,l=Math.min(Math.max(Math.floor(r),0),i.length-1),a=r-l;return ao(a,t[l],t[l+1])}static shaderStruct(){return`
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
      fn PC1D_FindCDFIndex(offset: i32, sz: i32, u: f32) -> i32 {
        var size = sz - 2; 
        var first = offset + 1;

        while (size > 0) {
          let half = size >> 1; 
      	  let middle = first + half;
          let predResult = envmapPC2Darray[middle] <= u;

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
        offset: i32, size: i32, u: f32
      ) -> PC1DSample {
        // this function is unfortunately somewhat complicated given that "data"
        // contains an entire structure with multiple arrays, the CPU version 
        // that is much easier to read is contained inside PiecewiseConstant1D.ts

        let min = envmapPC2Darray[offset + 0];
        let max = envmapPC2Darray[offset + 1];
        let funcInt = envmapPC2Darray[offset + 2];

        let func_data_idx = offset + 3;
        let absFunc_data_idx = offset + 3 + size;
        let cdf_data_idx = offset + 3 + size * 2;

        let cdf_o = PC1D_FindCDFIndex(cdf_data_idx, size, u);
        let relative_o = cdf_o - cdf_data_idx;

        // // e.g. u == 0.7 and cdf[o] == 0.68
        var du = u - envmapPC2Darray[cdf_o];
        if (envmapPC2Darray[cdf_o + 1] - envmapPC2Darray[cdf_o] > 0) {
          // after that du will be in range [0...1]
          du /= envmapPC2Darray[cdf_o + 1] - envmapPC2Darray[cdf_o];
        }

        let funcValueAtO = envmapPC2Darray[func_data_idx + relative_o];
        let absFuncValueAtO = envmapPC2Darray[absFunc_data_idx + relative_o];
    
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
    `}}class fi{constructor(e,t,i,s){S(this,"pConditionalV",[]);S(this,"pMarginal",new Ri([1],0,1));S(this,"domain",new pt);S(this,"sizeX",0);S(this,"sizeY",0);if(e instanceof ArrayBuffer){this.fromArrayBuffer(e);return}if(t===void 0||i===void 0||s===void 0)throw new Error("PC2D constructor requires size and domain");let n=e.flat(1);this.sizeX=t,this.sizeY=i;let r=[],l;for(let h=0;h<i;h++)r.push(new Ri(n.slice(h*t,h*t+t),s.min.x,s.max.x));let a=[];for(let h=0;h<i;++h)a.push(r[h].funcInt);l=new Ri(a,s.min.y,s.max.y),this.pConditionalV=r,this.pMarginal=l,this.domain=s}samplePC2D(e){let t=new Q(-1,-1),i=this.pMarginal.samplePC1D(e.y);t.y=i.offset;let s=this.pConditionalV[t.y].samplePC1D(e.x);return t.x=s.offset,{pdf:i.pdf*s.pdf,offset:t,floatOffset:new Q(s.remappedOffset,i.remappedOffset)}}pdfPC2D(e,t){let{pConditionalV:i,pMarginal:s}=this,n=Fu(t,e),r=Gs(Math.floor(n.x*i[0].func.length),0,i[0].func.length-1),l=Gs(Math.floor(n.y*s.func.length),0,s.func.length-1);return i[l].func[r]/s.funcInt}fromArrayBuffer(e){const t=e,i=new Float32Array(t),s=new Int32Array(t);this.domain=new pt(new M(i[0],i[1],i[2]),new M(i[4],i[5],i[6])),this.sizeX=s[8],this.sizeY=s[9];let r=(3+this.sizeX*3+1)*4;for(let l=0;l<this.sizeY;l++)this.pConditionalV.push(new Ri(e.slice(40+l*r,40+(l+1)*r)));this.pMarginal=new Ri(e.slice(40+r*this.sizeY,40+r*(this.sizeY+1)))}getArrayData(){let e=3+this.sizeX*3+1,t=e*(this.sizeY+1),s=t*4+2*4;const n=new ArrayBuffer(s),r={data:new Float32Array(n,0,t+2)};this.pConditionalV.forEach((a,h)=>{let c=a.getBufferData();r.data.set(new Float32Array(c),e*h)});let l=this.pMarginal.getBufferData();return r.data.set(new Float32Array(l),e*this.pConditionalV.length),r.data.set([0,0],t),n}getBufferData(){let e=48;const t=new ArrayBuffer(e),i={domainmin:new Float32Array(t,0,3),domainmax:new Float32Array(t,16,3),size:new Int32Array(t,32,2)};return i.domainmin.set([this.domain.min.x,this.domain.min.y,0]),i.domainmax.set([this.domain.max.x,this.domain.max.y,0]),i.size.set([this.sizeX,this.sizeY]),t}static shaderStruct(){return`
      struct PC2D {
        // I tried using:
        // domain: AABB, but it wasn't working on macos
        domainmin: vec3f,
        domainmax: vec3f,
        size: vec2i,
      }

      struct PC2DSample {
        offset: vec2i,
        pdf: f32,
        floatOffset: vec2f,
      }
    `}static shaderMethods(){return`
      fn samplePC2D(
        size: vec2i, domain: AABB, uv: vec2f
      ) -> PC2DSample {
        // 3 struct elements, min max & funcInt, then size.x * 3 for the arrays, but remember, 
        // cdf has an additional element, so we add +1
        // and then we multiply by size.y
        let pMarginalDataOffset = (3 + size.x * 3 + 1) * size.y;
        let pMarginalSize = size.y;

        var offset = vec2i(-1, -1);
        let pMarginalSample = samplePC1D(pMarginalDataOffset, pMarginalSize, uv.y);
        offset.y = pMarginalSample.offset;
        
        let pConditionalVDataOffset = (3 + size.x * 3 + 1) * offset.y;
        let pConditionalSize = size.x;
        let pConditionalVSample = samplePC1D(pConditionalVDataOffset, pConditionalSize, uv.x);
        offset.x = pConditionalVSample.offset;
      
        return PC2DSample(
          offset,
          pMarginalSample.pdf * pConditionalVSample.pdf,
          vec2f(pConditionalVSample.remappedOffset, pMarginalSample.remappedOffset)
        );
      }

      fn getPC2Dpdf(size: vec2i, floatOffset: vec2f, domain: AABB) -> f32 {
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
        let pMarginalFuncInt = envmapPC2Darray[pMarginalDataOffset + 2];

        let pConditionalVDataOffset = (3 + size.x * 3 + 1) * iv;
        let pConditionalV_func_iu_value = envmapPC2Darray[
          pConditionalVDataOffset + 3 + iu
        ];
        
        return pConditionalV_func_iu_value / pMarginalFuncInt;
      }
    `}}function gl(o){return .2126*o.x+.7152*o.y+.0722*o.z}class Ou extends bu{constructor(e){super(e),this.type=Ys}parse(e){const r=function(T,V){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(V||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(V||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(V||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(V||""))}},c=`
`,u=function(T,V,B){V=V||1024;let O=T.pos,G=-1,P=0,I="",k=String.fromCharCode.apply(null,new Uint16Array(T.subarray(O,O+128)));for(;0>(G=k.indexOf(c))&&P<V&&O<T.byteLength;)I+=k,P+=k.length,O+=128,k+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(O,O+128)));return-1<G?(T.pos+=P+G+1,I+k.slice(0,G)):!1},f=function(T){const V=/^#\?(\S+)/,B=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,G=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,k;for((T.pos>=T.byteLength||!(I=u(T)))&&r(1,"no header found"),(k=I.match(V))||r(3,"bad initial token"),P.valid|=1,P.programtype=k[1],P.string+=I+`
`;I=u(T),I!==!1;){if(P.string+=I+`
`,I.charAt(0)==="#"){P.comments+=I+`
`;continue}if((k=I.match(B))&&(P.gamma=parseFloat(k[1])),(k=I.match(z))&&(P.exposure=parseFloat(k[1])),(k=I.match(O))&&(P.valid|=2,P.format=k[1]),(k=I.match(G))&&(P.valid|=4,P.height=parseInt(k[1],10),P.width=parseInt(k[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||r(3,"missing format specifier"),P.valid&4||r(3,"missing image size specifier"),P},d=function(T,V,B){const z=V;if(z<8||z>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);z!==(T[2]<<8|T[3])&&r(3,"wrong scanline width");const O=new Uint8Array(4*V*B);O.length||r(4,"unable to allocate buffer space");let G=0,P=0;const I=4*z,k=new Uint8Array(4),ae=new Uint8Array(I);let ue=B;for(;ue>0&&P<T.byteLength;){P+4>T.byteLength&&r(1),k[0]=T[P++],k[1]=T[P++],k[2]=T[P++],k[3]=T[P++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=z)&&r(3,"bad rgbe scanline format");let X=0,ee;for(;X<I&&P<T.byteLength;){ee=T[P++];const le=ee>128;if(le&&(ee-=128),(ee===0||X+ee>I)&&r(3,"bad scanline data"),le){const $=T[P++];for(let U=0;U<ee;U++)ae[X++]=$}else ae.set(T.subarray(P,P+ee),X),X+=ee,P+=ee}const ce=z;for(let le=0;le<ce;le++){let $=0;O[G]=ae[le+$],$+=z,O[G+1]=ae[le+$],$+=z,O[G+2]=ae[le+$],$+=z,O[G+3]=ae[le+$],G+=4}ue--}return O},p=function(T,V,B,z){const O=T[V+3],G=Math.pow(2,O-128)/255;B[z+0]=T[V+0]*G,B[z+1]=T[V+1]*G,B[z+2]=T[V+2]*G,B[z+3]=1},m=function(T,V,B,z){const O=T[V+3],G=Math.pow(2,O-128)/255;B[z+0]=an.toHalfFloat(Math.min(T[V+0]*G,65504)),B[z+1]=an.toHalfFloat(Math.min(T[V+1]*G,65504)),B[z+2]=an.toHalfFloat(Math.min(T[V+2]*G,65504)),B[z+3]=an.toHalfFloat(1)},y=new Uint8Array(e);y.pos=0;const g=f(y),_=g.width,w=g.height,x=d(y.subarray(y.pos),_,w);let C,E,A;switch(this.type){case Ii:A=x.length/4;const T=new Float32Array(A*4);for(let B=0;B<A;B++)p(x,B*4,T,B*4);C=T,E=Ii;break;case Ys:A=x.length/4;const V=new Uint16Array(A*4);for(let B=0;B<A;B++)m(x,B*4,V,B*4);C=V,E=Ys;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:w,data:C,header:g.string,gamma:g.gamma,exposure:g.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,i,s){function n(r,l){switch(r.type){case Ii:case Ys:r.colorSpace=mt,r.minFilter=yi,r.magFilter=yi,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,l)}return super.load(e,n,i,s)}}let zn=class{constructor(){S(this,"INFO_BUFFER_BYTE_LENGTH",112);S(this,"SERIALIZATION_VERSION",1);S(this,"size",new Q(0,0));S(this,"luminanceAverage",0);S(this,"scale",1);S(this,"rotX",0);S(this,"rotY",0);S(this,"data",new Float32Array);S(this,"distribution",new fi([[0]],1,1,new pt));S(this,"compensatedDistribution",new fi([[0]],1,1,new pt))}async fromEquirect(e,t=400){let i=await new Ou().setDataType(Ii).loadAsync(e),s=i.source.data.data,n=new Q(i.source.data.width,i.source.data.height),r=[],l=[],a=[],h=t;for(let c=0;c<h;c++)for(let u=0;u<h;u++){let f=1/(h*2),d=u/h+f,p=c/h+f,m=this.equalAreaSquareToSphere(new Q(d,p));m.normalize();let y=new Q(Math.atan2(m.z,m.x),Math.asin(m.y));y.multiply(new Q(1/(Math.PI*2),1/Math.PI)),y.addScalar(.5),y.y=1-y.y;let g=Math.floor(y.x*n.x)+Math.floor(y.y*n.y)*n.x,_=s[g*4+0],w=s[g*4+1],x=s[g*4+2];r.push(_,w,x,1);let C=gl(new M(_,w,x));this.luminanceAverage+=C,u===0&&l.push([]),l[c].push(C)}this.luminanceAverage/=h*h;for(let c=0;c<h;c++)for(let u=0;u<h;u++)u===0&&a.push([]),a[c].push(Math.max(l[c][u]-this.luminanceAverage,0));return this.distribution=new fi(l,h,h,new pt(new M(0,0,0),new M(1,1,0))),this.compensatedDistribution=new fi(a,h,h,new pt(new M(0,0,0),new M(1,1,0))),this.data=new Float32Array(r),this.size=new Q(h,h),this}fromArrayBuffer(e){if(new Uint32Array(e,0,1)[0]!=this.SERIALIZATION_VERSION)throw new Error("envmap buffer is from an older version, re-run the envmap transform");this.size.x=new Uint32Array(e,1*4,2)[0],this.size.y=new Uint32Array(e,1*4,2)[1];let i=new Float32Array(e,3*4,4);this.luminanceAverage=i[0],this.scale=i[1],this.rotX=i[2],this.rotY=i[3];const s=this.size.x*this.size.y*4*4;this.data=new Float32Array(e,7*4,s/4);let n=(e.byteLength-(7*4+s))/2;return this.distribution=new fi(e.slice(7*4+s,7*4+s+n)),this.compensatedDistribution=new fi(e.slice(7*4+s+n,7*4+s+n+n)),this}getArrayBuffer(){let e=this.distribution.getBufferData(),t=this.compensatedDistribution.getBufferData(),i=1*4,s=2*4,n=1*4,r=3*4,l=i+s+n+r+this.data.byteLength+e.byteLength+t.byteLength,a=new ArrayBuffer(l),h={version:new Uint32Array(a,0,1),size:new Uint32Array(a,1*4,2),luminanceAverage:new Float32Array(a,3*4,1),scale:new Float32Array(a,4*4,1),rotX:new Float32Array(a,5*4,1),rotY:new Float32Array(a,6*4,1),data:new Float32Array(a,7*4,this.data.length),distributionBuffer:new Uint8Array(a,7*4+this.data.byteLength,e.byteLength),compensatedDistributionBuffer:new Uint8Array(a,7*4+this.data.byteLength+e.byteLength,t.byteLength)};return h.version.set([this.SERIALIZATION_VERSION]),h.size.set([this.size.x,this.size.y]),h.luminanceAverage.set([this.luminanceAverage]),h.scale.set([this.scale]),h.rotX.set([this.rotX]),h.rotY.set([this.rotY]),h.data.set(this.data),h.distributionBuffer.set(new Uint8Array(e)),h.compensatedDistributionBuffer.set(new Uint8Array(t)),a}equalAreaSquareToSphere(e){let t=2*e.x-1,i=2*e.y-1,s=Math.abs(t),n=Math.abs(i),r=1-(s+n),a=1-Math.abs(r),h=(a==0?1:(n-s)/a+1)*Math.PI/4,c=Ms(1-a*a,r),u=Ms(Math.cos(h),t),f=Ms(Math.sin(h),i),d=new M(u*a*Math.sqrt(2-a*a),f*a*Math.sqrt(2-a*a),c);return new M(d.x,d.z,d.y)}equalAreaSphereToSquare(e){let t=Math.abs(e.x),i=Math.abs(e.y),s=Math.abs(e.z),n=Math.sqrt(1-s),r=Math.max(t,i);var l=Math.min(t,i);r==0?l=0:l=l/r;var a=Math.atan(l)*2/Math.PI;t<i&&(a=1-a);var h=a*n,c=n-h;if(e.z<0){var u=h;h=c,c=u,c=1-c,h=1-h}return c=Ms(c,e.x),h=Ms(h,e.y),new Q(.5*(c+1),.5*(h+1))}createEnvmapInfoBuffer(e){const t=e.createBuffer({size:this.INFO_BUFFER_BYTE_LENGTH,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.updateEnvmapInfoBuffer(e,t),t}updateEnvmapInfoBuffer(e,t){const i=new ArrayBuffer(this.INFO_BUFFER_BYTE_LENGTH),s={size:new Int32Array(i,0,2),scale:new Float32Array(i,8,1),transform:new Float32Array(i,16,12),invTransform:new Float32Array(i,64,12)};let n=new me().makeRotationAxis(new M(0,1,0),this.rotX);n.multiply(new me().makeRotationAxis(new M(1,0,0),this.rotY));let r=n.clone().invert();s.size.set([this.size.x,this.size.y]),s.scale.set([this.scale]),s.transform.set(n.elements.slice(0,12)),s.invTransform.set(r.elements.slice(0,12)),e.queue.writeBuffer(t,0,i)}getTexture(e){if(this.size.x===0){const i=e.createTexture({size:[1,1],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:i},new Float32Array([1,1,1,1]),{bytesPerRow:1*16},{width:1,height:1}),{texture:i}}const t=e.createTexture({size:[this.size.x,this.size.y],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:t},this.data,{bytesPerRow:this.size.x*16},{width:this.size.x,height:this.size.y}),{texture:t}}static shaderStruct(){return`
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
    `}};const Yt={DIFFUSE:0,EMISSIVE:1,TORRANCE_SPARROW:2,DIELECTRIC:3};class Ws{constructor({flipTextureY:e}){S(this,"offsetCount");S(this,"textures",{});S(this,"texturesLocation",{});S(this,"flipTextureY",!1);S(this,"type");this.type=-1,this.offsetCount=0,this.flipTextureY=e}getFloatsArray(){return[this.type]}static shaderStruct(){return""}static shaderCreateStruct(){return""}static shaderShade(){return`
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

        if (materialType == ${Yt.DIFFUSE}) {
          shadeDiffuse(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Yt.EMISSIVE}) {
          shadeEmissive(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Yt.TORRANCE_SPARROW}) {
          shadeTorranceSparrow(ires, ray, reflectance, rad, tid, i);
        }

        if (materialType == ${Yt.DIELECTRIC}) {
          shadeDielectric(ires, ray, reflectance, rad, tid, i);
        }
      }
    `}}class Ds extends Ws{constructor({color:t,intensity:i=1,flipTextureY:s=!1}){super({flipTextureY:s});S(this,"color");S(this,"intensity");this.type=Yt.EMISSIVE,this.color=t,this.intensity=i,this.offsetCount=5}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.intensity]}static shaderStruct(){return`
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
    
        let rands = vec4f(getRand2D(), getRand2D());
    
        let r0 = 2.0 * PI * rands.x;
        let r1 = acos(rands.y);
        let nd = normalize(vec3f(
          sin(r0) * sin(r1),
          cos(r1),
          cos(r0) * sin(r1),
        ));

    
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires, ires.triangle, N, &tangent, &bitangent);
      
        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // from tangent space to world space
        (*ray).direction = normalize(TBN * nd.xzy);

        *reflectance *= albedo * max(dot(N, (*ray).direction), 0.0) * (1 / PI) * (2 * PI);
      } 
    `}}function ku(o){var r,l;let e=o.attributes.position.array,t=((r=o.attributes.uv)==null?void 0:r.array)||[];if(!t)return;let i=(l=o.index)==null?void 0:l.array;if(!i)return;let s=[];for(let a=0;a<i.length;a+=3){let h=i[a+0],c=i[a+1],u=i[a+2],f=tt(e[h*3+0],e[h*3+1],e[h*3+2]),d=tt(e[c*3+0],e[c*3+1],e[c*3+2]),p=tt(e[u*3+0],e[u*3+1],e[u*3+2]),m=Dt(t[h*2+0],t[h*2+1]),y=Dt(t[c*2+0],t[c*2+1]),g=Dt(t[u*2+0],t[u*2+1]),_=yl(f,d,p,m,y,g);s[h]||(s[h]=[]),s[c]||(s[c]=[]),s[u]||(s[u]=[]),s[h].push(_),s[c].push(_),s[u].push(_)}let n=[];for(let a=0;a<s.length;a++){let h=s[a]||[],c=tt(0,0,0);for(let u=0;u<h.length;u++)c.add(h[u]);if(c.divideScalar(h.length),c.x==0&&c.y==0&&c.z==0){let u=0;for(let f=0;f<h.length;f++){let d=h[f];(d.x!=0||d.y!=0||d.z!=0)&&(u=f)}c.copy(h[u])}n.push(c.x,c.y,c.z)}o.setAttribute("tangent",new xt(new Float32Array(n),3))}function yl(o,e,t,i,s,n){var r=!1;let l=tt(0,0,0);if(i.x>-1){let a=e.clone().sub(o),h=t.clone().sub(o),c=s.clone().sub(i),u=n.clone().sub(i),f=c.x*u.y-u.x*c.y,d=1/f;f==0&&(r=!0),l=tt(d*(u.y*a.x-c.y*h.x),d*(u.y*a.y-c.y*h.y),d*(u.y*a.z-c.y*h.z)).normalize()}return(i.x<-.9||r)&&(l=e.clone().sub(o).normalize()),l}class qs{constructor(e,t,i,s,n,r,l,a,h,c,u,f,d){S(this,"idxRef",-1);S(this,"norm0");S(this,"norm1");S(this,"norm2");S(this,"geometricNormal");S(this,"uv0",new Q(-1,-1));S(this,"uv1",new Q(-1,-1));S(this,"uv2",new Q(-1,-1));S(this,"tang0",new M(-1,-1));S(this,"tang1",new M(-1,-1));S(this,"tang2",new M(-1,-1));this.v0=e,this.v1=t,this.v2=i,this.materialIndex=s;let p=t.clone().sub(e),m=i.clone().sub(e);this.geometricNormal=p.cross(m).normalize(),n&&r&&l?(this.norm0=n,this.norm1=r,this.norm2=l):(this.norm0=this.geometricNormal,this.norm1=this.geometricNormal,this.norm2=this.geometricNormal),a&&(this.uv0=a),h&&(this.uv1=h),c&&(this.uv2=c),u&&(this.tang0=u),f&&(this.tang1=f),d&&(this.tang2=d),u||this.computeTangents()}computeTangents(){let e=this,t=yl(e.v0,e.v1,e.v2,e.uv0,e.uv1,e.uv2);this.tang0=t,this.tang1=t,this.tang2=t}setIdxRef(e){this.idxRef=e}getAABB(){let e=new pt;return e.expand(this.v0),e.expand(this.v1),e.expand(this.v2),e}getArea(){let e=this.v1.clone().sub(this.v0),t=this.v2.clone().sub(this.v0);return e.cross(t).length()*.5}getCentroid(){return this.v0.clone().add(this.v1).add(this.v2).divideScalar(3)}getLuminance(e){if(!(e instanceof Ds))throw new Error("can't get luminance of non-emissive material");return gl(new M(e.color.r,e.color.g,e.color.b))*e.intensity*this.getArea()}intersectRay(e,t){let i=this.v0,s=this.v1,n=this.v2,r=s.clone().sub(i),l=n.clone().sub(i),a=t.clone().cross(l),h=r.dot(a);if(Math.abs(h)<1e-6)return{hit:!1,t:0,hitPoint:new M(0,0,0)};let c=1/h,u=e.clone().sub(i),f=u.dot(a)*c;if(f<0||f>1)return{hit:!1,t:0,hitPoint:new M(0,0,0)};let d=u.clone().cross(r),p=t.dot(d)*c;if(p<0||f+p>1)return{hit:!1,t:0,hitPoint:new M(0,0,0)};let m=l.dot(d)*c;if(m<0)return{hit:!1,t:0,hitPoint:new M(0,0,0)};let y=e.clone().add(t.clone().multiplyScalar(m));return{hit:!0,t:m,hitPoint:y}}static getBufferData(e,t){const s=e.length,n=new ArrayBuffer(192*s);return e.forEach((r,l)=>{const a=l*192,h={v0:new Float32Array(n,a+0,3),v1:new Float32Array(n,a+16,3),v2:new Float32Array(n,a+32,3),uv0:new Float32Array(n,a+48,2),uv1:new Float32Array(n,a+56,2),uv2:new Float32Array(n,a+64,2),tang0:new Float32Array(n,a+80,3),tang1:new Float32Array(n,a+96,3),tang2:new Float32Array(n,a+112,3),area:new Float32Array(n,a+124,1),norm0:new Float32Array(n,a+128,3),norm1:new Float32Array(n,a+144,3),norm2:new Float32Array(n,a+160,3),geometricNormal:new Float32Array(n,a+176,3),materialOffset:new Uint32Array(n,a+188,1)};h.v0.set([r.v0.x,r.v0.y,r.v0.z]),h.v1.set([r.v1.x,r.v1.y,r.v1.z]),h.v2.set([r.v2.x,r.v2.y,r.v2.z]),h.uv0.set([r.uv0.x,r.uv0.y]),h.uv1.set([r.uv1.x,r.uv1.y]),h.uv2.set([r.uv2.x,r.uv2.y]),h.area.set([r.getArea()]),h.norm0.set([r.norm0.x,r.norm0.y,r.norm0.z]),h.norm1.set([r.norm1.x,r.norm1.y,r.norm1.z]),h.norm2.set([r.norm2.x,r.norm2.y,r.norm2.z]),h.tang0.set([r.tang0.x,r.tang0.y,r.tang0.z]),h.tang1.set([r.tang1.x,r.tang1.y,r.tang1.z]),h.tang2.set([r.tang2.x,r.tang2.y,r.tang2.z]),h.geometricNormal.set([r.geometricNormal.x,r.geometricNormal.y,r.geometricNormal.z]),h.materialOffset.set([t[r.materialIndex]])}),{trianglesBufferData:n,trianglesBufferDataByteSize:s*192}}static shaderStruct(){return`
      struct IntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        uv: vec2f,
        normal: vec3f,
        tangent: vec3f,
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
        tang0: vec3f,
        tang1: vec3f,
        tang2: vec3f,
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
        const noIntersection = IntersectionResult(false, 0, vec3f(0), vec2f(0), vec3f(0), vec3(0));
      
        if (CULLING) {
          if (det < 0.000001) {
            return noIntersection;
          }
        } else {
          if (abs(det) < 0.000001) {
            return noIntersection;
          }
        }
      
        let invDet = 1.0 / det;
        let tvec = ray.origin - v0;
        let u = dot(tvec, pvec) * invDet;
      
        if (u < 0 || u > 1) {
          return noIntersection;
        }
      
        let qvec = cross(tvec, v0v1);
        let v = dot(ray.direction, qvec) * invDet;
      
        if (v < 0 || u + v > 1) {
          return noIntersection;
        }
      
        let t = dot(v0v2, qvec) * invDet;

        if (t < 0) {
          return noIntersection;
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

        let tang0 = triangle.tang0;
        let tang1 = triangle.tang1;
        let tang2 = triangle.tang2;
        let hitTangent = normalize(tang0 * w + tang1 * u + tang2 * v);

        return IntersectionResult(true, t, hitPoint, hitUV, hitNormal, hitTangent);
      }
    `}}const vl=Qt({nodesCount:0}),Cs=Qt("compute"),Er=Qt(""),Rs=Qt(""),Oe=function(){let e=Qt({limit:8,count:0,ms:0,tileSize:"",clickTarget:"(0, 0)"});return{subscribe:e.subscribe,set:e.set,update:e.update,get count(){return st(e).count},get limit(){return st(e).limit},setTileSize(t){e.update(i=>(i.tileSize=t,i))},setPerformance:t=>{e.update(i=>(i.ms=t,i))},setLimit:t=>{e.update(i=>(i.limit=t,i))},increment:()=>e.update(t=>(t.count++,t)),reset:()=>e.update(t=>(t.count=0,t))}}(),_e=Qt({exposure:1,aperture:0,focusDistance:1,fov:Math.PI*.25,tiltShift:new Q(0,0),catsEyeBokehEnabled:!1,catsEyeBokehMult:0,catsEyeBokehPow:0}),mi=Qt({movementSpeed:1,rotationSpeed:1,position:new M(0,0,0),target:new M(0,0,0)}),Re=Uu({forceMaxTileSize:!1,BOUNCES_COUNT:10,MIS_TYPE:2,SAMPLER_TYPE:3,SAMPLER_DECORRELATION:3,USE_POWER_HEURISTIC:1,ENVMAP_SCALE:1,ENVMAP_ROTX:0,ENVMAP_ROTY:0,ENVMAP_USE_COMPENSATED_DISTRIBUTION:!1,shaderConfig:{HAS_ENVMAP:!1}});function Uu(o){const{subscribe:e,set:t,update:i}=Qt(o);let s=[o,o];return{subscribe:e,set:n=>{s[0]=s[1],s[1]=JSON.parse(JSON.stringify(n)),t(n)},update:n=>{i(r=>(s[0]=s[1],s[1]=JSON.parse(JSON.stringify(r)),n(r)))},getOldValue:()=>s[0]}}const Tn=2;class Cr{constructor(e){S(this,"root");S(this,"bvhFlatArray");this.scene=e;let t=e.triangles;if(t.length>2147483648)throw new Error("Exceeded max primitives count, the webGPU primitives array holds i32 indexes");t.forEach((s,n)=>{s.setIdxRef(n)}),this.bvhFlatArray=[],this.root=new pr(t,0);let i=[];for(this.root.isLeaf()||i.push(this.root),this.bvhFlatArray.push(this.root);i.length>0;){let s=i.pop();if(!s)break;let n=s.getSplittingAxis(),r=[],l=[];for(let c=0;c<s.primitives.length;c++){let u=s.primitives[c];u.getCentroid()[n.axis]<n.center?r.push(u):l.push(u)}if(r.length===0||l.length===0){r=[],l=[];let c=Math.floor(s.primitives.length/2);for(let u=0;u<s.primitives.length;u++)u<c?r.push(s.primitives[u]):l.push(s.primitives[u])}let a=new pr(r,this.bvhFlatArray.length);this.bvhFlatArray.push(a);let h=new pr(l,this.bvhFlatArray.length);this.bvhFlatArray.push(h),s.setLeft(a),s.setRight(h),a.isLeaf()||i.push(a),h.isLeaf()||i.push(h),s.isLeaf()||s.releasePrimitivesArrayMemory()}if(vl.set({nodesCount:this.bvhFlatArray.length}),this.bvhFlatArray.length>2147483648)throw new Error(`
        Exceeded max bvh nodes count, the webGPU left/right props holds i32 indexes,
        also, maximum stack-intersection-depth is set to 32 when intersecting the bvh
      `)}intersectRay(e,t){let i=this.root;if(!i.nodeAABB.intersectRay(e,t).hit)return{hit:!1,t:0,hitPoint:new M(0,0,0),triangle:null};var n={hit:!1,t:1/0,hitPoint:new M(0,0,0)},r,l=Array(128);l[0]=i;for(var a=0;a!==-1;){let p=l[a];if(a-=1,p.leaf){let m=p.primitives;for(var h=0;h<m.length;h++){let y=m[h],g=y.intersectRay(e,t);g.hit&&g.t<n.t&&(n=g,r=y)}}if(!p.leaf){let m=p.left.nodeAABB.intersectRay(e,t),y=p.right.nodeAABB.intersectRay(e,t);var c,u,f,d;m.t<y.t?(c=p.left,u=p.right,f=m,d=y):(c=p.right,u=p.left,f=y,d=m),d.hit&&d.t<n.t&&(a+=1,l[a]=u),f.hit&&f.t<n.t&&(a+=1,l[a]=c)}}return{hit:n.hit,t:n.t,hitPoint:n.hitPoint,triangle:r||null}}getBufferData(){const t=64*this.bvhFlatArray.length,i=new ArrayBuffer(t);let s=this.scene.triangles,n=this.scene.materials;this.bvhFlatArray.forEach((l,a)=>{const h=l.nodeAABB.max,c=l.nodeAABB.min,u=l.isLeaf();let f=-1,d=-1,p=Array(Tn).fill(-1);!u&&l.left&&l.right&&(f=l.left.flatArrayIndex,d=l.right.flatArrayIndex),u&&l.primitives.forEach((g,_)=>{p[_]=g.idxRef});const m=a*64,y={aabb:{min:new Float32Array(i,0+m,3),max:new Float32Array(i,16+m,3)},left:new Int32Array(i,32+m,1),right:new Int32Array(i,36+m,1),leaf:new Uint32Array(i,40+m,1),primitives:new Int32Array(i,44+m,2)};y.aabb.min.set([c.x,c.y,c.z]),y.aabb.max.set([h.x,h.y,h.z]),y.left.set([f]),y.right.set([d]),y.leaf.set([u?1:0]),y.primitives.set(p)});const r=[];for(let l=0;l<n.length;l++)if(l===0)r.push(0);else{let a=r[l-1],h=n[l-1];r.push(a+h.offsetCount)}return{...qs.getBufferData(s,r),BVHBufferData:i,BVHBufferDataByteSize:t}}getLightsCDFBufferData(){let e=0,t=[],i=this.scene.triangles,s=this.scene.materials;if(i.forEach(l=>{let a=s[l.materialIndex];a instanceof Ds&&(t.push([e,l.getLuminance(a),l.idxRef]),e+=l.getLuminance(a))}),this.scene.envmap){let l=this.root.nodeAABB.max.clone().sub(this.root.nodeAABB.min).length(),a=4*Math.PI*l*l*this.scene.envmap.scale*this.scene.envmap.luminanceAverage;t.push([e,a,-2]),e+=a}t.forEach(l=>{l[0]/=e,l[1]/=e});const n=12*t.length,r=new ArrayBuffer(n);return t.forEach((l,a)=>{let h=12*a;new Float32Array(r,h+0,1).set([l[0]]),new Float32Array(r,h+4,1).set([l[1]]),new Uint32Array(r,h+8,1).set([l[2]])}),{LightsCDFBufferData:r,LightsCDFBufferDataByteSize:n}}static shaderStruct(){return`
      // https://webgpufundamentals.org/webgpu/lessons/resources/wgsl-offset-computer.html
      struct BVHNode {
        aabb: AABB,
        left: i32, // can be -1
        right: i32, 
        leaf: u32, // bool is apparently non-host something
        // i32 is necessary since we're using -1 for null
        primitives: array<i32, ${Tn}>, 
      }

      struct BVHIntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        uv: vec2f,
        normal: vec3f,
        tangent: vec3f,
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
            envmapPC2D.size, 
            AABB(envmapPC2D.domainmin, envmapPC2D.domainmax), 
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
          if (materialType == ${Yt.EMISSIVE}) {
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
            envmapPC2D.size, 
            uv, 
            AABB(envmapPC2D.domainmin, envmapPC2D.domainmax),
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
          return BVHIntersectionResult(
            false, 0, vec3f(0), vec2f(0), vec3f(0), vec3f(0), triangles[0], 0
          );
        }

        // from: https://github.com/gpuweb/gpuweb/issues/3431#issuecomment-1453667278
        let highestFloat = 0x1.fffffep+127f;
        var closestIntersection = IntersectionResult(
          false, highestFloat, vec3f(0), vec2f(0), vec3f(0), vec3f(0)
        );
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
            for (var i = 0; i < ${Tn}; i++) {
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
          closestIntersection.tangent,
          triangles[closestPrimitiveIndex],
          closestPrimitiveIndex
        );
      } 
    `}}class pr{constructor(e,t){S(this,"nodeAABB");S(this,"leaf",!1);S(this,"left",null);S(this,"right",null);this.primitives=e,this.flatArrayIndex=t,this.nodeAABB=new pt;for(let i=0;i<e.length;i++)this.nodeAABB.expand(e[i].getAABB());e.length<=Tn&&(this.leaf=!0)}setLeft(e){this.left=e}setRight(e){this.right=e}isLeaf(){return this.leaf}releasePrimitivesArrayMemory(){this.primitives=[]}getSplittingAxis(){let e=1/0,t=1/0,i=1/0,s=-1/0,n=-1/0,r=-1/0;for(let c=0;c<this.primitives.length;c++){let f=this.primitives[c].getCentroid();f.x<e&&(e=f.x),f.y<t&&(t=f.y),f.z<i&&(i=f.z),f.x>s&&(s=f.x),f.y>n&&(n=f.y),f.z>r&&(r=f.z)}let l=s-e,a=n-t,h=r-i;return l>a&&l>h?{axis:"x",center:(s+e)*.5}:a>l&&a>h?{axis:"y",center:(n+t)*.5}:{axis:"z",center:(r+i)*.5}}}class Rr{constructor(){S(this,"listenersMap");this.listenersMap={}}fireEvent(e,t){const i=this.listenersMap[e];i&&i.forEach(s=>{s(t)})}addEventListener(e,t){this.listenersMap[e]||(this.listenersMap[e]=[]),this.listenersMap[e].push(t)}removeEventListener(e,t){if(!this.listenersMap[e])return;const i=this.listenersMap[e],s=i.indexOf(t);s>-1&&i.splice(s,1)}}var Mn=(o=>(o[o.BRDF_ONLY=0]="BRDF_ONLY",o[o.ONE_SAMPLE_MODEL=1]="ONE_SAMPLE_MODEL",o[o.NEXT_EVENT_ESTIMATION=2]="NEXT_EVENT_ESTIMATION",o))(Mn||{}),It=(o=>(o[o.UNIFORM=0]="UNIFORM",o[o.HALTON=1]="HALTON",o[o.BLUE_NOISE=2]="BLUE_NOISE",o[o.CUSTOM_R2=3]="CUSTOM_R2",o))(It||{}),is=(o=>(o[o.NONE=0]="NONE",o[o.RANDOM_OFFSET=1]="RANDOM_OFFSET",o[o.RANDOM_ARRAY_OFFSET=2]="RANDOM_ARRAY_OFFSET",o[o.BLUE_NOISE_MASK=3]="BLUE_NOISE_MASK",o))(is||{});class Vu{constructor(){S(this,"options");S(this,"prevOptions");S(this,"e");S(this,"bufferSize",16);this.options=st(Re),this.prevOptions=this.options,this.e=new Rr,Re.subscribe(e=>{this.options=e,this.prevOptions=Re.getOldValue(),this.e.fireEvent("config-update",this.options)})}setStoreProperty(e){Re.set({...this.options,...e})}getOptionsBuffer(){return new Uint32Array([this.options.MIS_TYPE,this.options.SAMPLER_DECORRELATION,this.options.USE_POWER_HEURISTIC,this.options.BOUNCES_COUNT])}shaderPart(){return`

    const DECORRELATION_NONE: u32 = 0;
    const DECORRELATION_RAND_OFFSET: u32 = 1;
    const DECORRELATION_RAND_ARRAY_OFFSET: u32 = 2;
    const DECORRELATION_BLUE_NOISE_MASK: u32 = 3;

    const BRDF_ONLY: u32 = 0;
    const ONE_SAMPLE_MODEL: u32 = 1;
    const NEXT_EVENT_ESTIMATION: u32 = 2;
    
    struct Config {
      MIS_TYPE: u32,
      SAMPLER_DECORRELATION: u32,
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
    `}}const Be=new Vu;function Xe(o){let e=new ArrayBuffer(4),t=new Int32Array(e,0,1);return t[0]=o,new Float32Array(e,0,1)[0]}class An extends Ws{constructor({color:t,map:i,bumpMap:s,bumpStrength:n=1,uvRepeat:r=new Q(1,1),mapUvRepeat:l=new Q(1,1),flipTextureY:a=!1}){super({flipTextureY:a});S(this,"color");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");this.type=Yt.DIFFUSE,this.color=t,this.bumpStrength=n,this.uvRepeat=r,this.mapUvRepeat=l,this.offsetCount=13,this.texturesLocation.map=new Q(-1,-1),this.texturesLocation.bumpMap=new Q(-1,-1),i&&(this.textures.map=i),s&&(this.textures.bumpMap=s)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Xe(this.texturesLocation.map.x),Xe(this.texturesLocation.map.y),Xe(this.texturesLocation.bumpMap.x),Xe(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
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
        ires: BVHIntersectionResult
      ) {
        // uniform hemisphere sampling:
        // let rand_1 = rands.x;
        // let rand_2 = rands.y;
        // let phi = 2.0 * PI * rand_1;
        // let root = sqrt(1 - rand_2 * rand_2);
        // // local space new ray direction
        // let newDir = vec3f(cos(phi) * root, rand_2, sin(phi) * root);
        // var brdfSamplePdf = 1 / (2 * PI);

        // *********************************************************************
        // if you switch to another brdf pdf, remember to also update the light sample brdf's pdf
        // *********************************************************************
        // cosine-weighted hemisphere sampling:
        let rand_1 = rands.x;
        // if rand_2 is 0, both cosTheta and the pdf will be zero
        let rand_2 = max(rands.y, 0.000001);
        let phi = 2.0 * PI * rand_1;
        let theta = acos(sqrt(rand_2));
        let cosTheta = cos(theta);
        let sinTheta = sin(theta);
        // local space new ray direction
        let newDir = vec3f(cos(phi) * sinTheta, cosTheta, sin(phi) * sinTheta);
        var brdfSamplePdf = cosTheta / PI;

        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires, ires.triangle, N, &tangent, &bitangent);
      
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

        let cosTheta = dot(lightSample.direction, N);
        var brdfSamplePdf = cosTheta / PI;
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
            ires, &bumpOffset
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
        let rands1 = vec4f(getRand2D(), getRand2D());
        let rands2 = vec4f(getRand2D(), getRand2D());

        var brdf = 1 / PI;

        if (config.MIS_TYPE == BRDF_ONLY) {
          var pdf: f32; var w: f32;
          shadeDiffuseSampleBRDF(rands1, N, ray, &pdf, &w, ires);
          (*ray).origin += (*ray).direction * 0.001;
          *reflectance *= brdf * (1 / pdf) * color * max(dot(N, (*ray).direction), 0.0);
        }

        if (config.MIS_TYPE == ONE_SAMPLE_MODEL) {
          var pdf: f32; var misWeight: f32; var ls: vec3f;
          let isBrdfSample = rands1.w < 0.5;
          if (isBrdfSample) {
            shadeDiffuseSampleBRDF(rands1, N, ray, &pdf, &misWeight, ires);
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

          shadeDiffuseSampleBRDF(rands1, N, &rayBrdf, &brdfSamplePdf, &brdfMisWeight, ires);
          shadeDiffuseSampleLight(rands2, N, &rayLight, &lightSamplePdf, &lightMisWeight, &lightSampleRadiance);

          (*ray).origin += rayBrdf.direction * 0.001;
          (*ray).direction = rayBrdf.direction;

          // light contribution
          *rad += color * brdf * lightSampleRadiance * (lightMisWeight / lightSamplePdf) * (*reflectance) * max(dot(N, rayLight.direction), 0.0);
          *reflectance *= color * brdf * (brdfMisWeight / brdfSamplePdf) * max(dot(N, rayBrdf.direction), 0.0);    
        }
      }
    `}}const Ls=class Ls extends Ws{constructor({color:t,roughness:i,anisotropy:s,map:n,roughnessMap:r,bumpMap:l,bumpStrength:a=1,uvRepeat:h=new Q(1,1),mapUvRepeat:c=new Q(1,1),flipTextureY:u=!1}){super({flipTextureY:u});S(this,"color");S(this,"roughness");S(this,"anisotropy");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");let f=Ls.MIN_INPUT_ROUGHNESS;this.type=Yt.TORRANCE_SPARROW,this.color=t,this.roughness=i*(1-f)+f,this.anisotropy=Gs(s,.01,.99),this.bumpStrength=a,this.uvRepeat=h,this.mapUvRepeat=c,this.offsetCount=17,this.texturesLocation.map=new Q(-1,-1),this.texturesLocation.roughnessMap=new Q(-1,-1),this.texturesLocation.bumpMap=new Q(-1,-1),n&&(this.textures.map=n),r&&(this.textures.roughnessMap=r),l&&(this.textures.bumpMap=l)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.roughness,this.anisotropy,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Xe(this.texturesLocation.map.x),Xe(this.texturesLocation.map.y),Xe(this.texturesLocation.roughnessMap.x),Xe(this.texturesLocation.roughnessMap.y),Xe(this.texturesLocation.bumpMap.x),Xe(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
      struct TORRANCE_SPARROW {
        color: vec3f,
        ax: f32,
        ay: f32,
        roughness: f32,
        anisotropy: f32,
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
        ts.ax = 0; // we'll map this value in the shader
        ts.ay = 0; // we'll map this value in the shader
        ts.roughness = materialsData[offset + 4];
        ts.anisotropy = materialsData[offset + 5];
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
    `}static shaderBRDF(){return`
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
      if (!SameHemisphere(wo, wi) || CosTheta(wo) == 0) {
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

      if (!SameHemisphere(wo, *wi) || CosTheta(wo) == 0) {
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
  `}static shaderShadeTorranceSparrow(){return`
      // https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf
      fn multiScatterCompensationTorranceSparrow(F0: vec3f, wo: vec3f, roughness: f32) -> vec3f {
        let ESSwo = getLUTvalue(
          vec3f(roughness, saturate(wo.z /* dot(wo, norm) */), 0),
          LUT_MultiScatterTorranceSparrow, 
        ).x;

        let multiScatteringCoefficient = (1.0 + F0 * (1.0 - ESSwo) / ESSwo);
        return multiScatteringCoefficient;
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
        *brdf *= multiScatterCompensationTorranceSparrow(material.color, wo, material.roughness);
        
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
        *brdf *= multiScatterCompensationTorranceSparrow(material.color, wo, material.roughness);

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
          material.roughness *= roughness.x;
          material.roughness = max(material.roughness, ${Ls.MIN_INPUT_ROUGHNESS});
        }

        let axay = anisotropyRemap(material.roughness, material.anisotropy);
        material.ax = axay.x;
        material.ay = axay.y;

        var vertexNormal = ires.normal;
        if (dot(ires.triangle.geometricNormal, (*ray).direction) > 0) {
          vertexNormal = -vertexNormal;
        }
        var N = vertexNormal;
        var bumpOffset: f32 = 0.0;
        if (material.bumpMapLocation.x > -1) {
          N = getShadingNormal(
            material.bumpMapLocation, material.bumpStrength, material.uvRepeat, N, *ray, 
            ires, &bumpOffset
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
        let rands1 = vec4f(getRand2D(), getRand2D());
        let rands2 = vec4f(getRand2D(), getRand2D());

        // we need to calculate a TBN matrix
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires, ires.triangle, N, &tangent, &bitangent);

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
    `}};S(Ls,"MIN_INPUT_ROUGHNESS",.0707);let Xt=Ls;class xl{constructor(){S(this,"canvasSize",new Q(0,0));S(this,"tile",{x:0,y:0,w:0,h:0});S(this,"tileIncrementCount",0);S(this,"forceMaxTileSize",!1);Be.e.addEventListener("config-update",e=>{this.forceMaxTileSize=e.forceMaxTileSize})}setCanvasSize(e){this.canvasSize=e,this.resetTile()}isTilePerformanceMeasureable(){return this.tile.x+this.tile.w-8<=this.canvasSize.x&&this.tile.y+this.tile.h-8<=this.canvasSize.y}canTileSizeBeIncreased(){return this.tile.w<this.canvasSize.x||this.tile.h<this.canvasSize.y}canTileSizeBeDecreased(){return this.tile.w>16||this.tile.h>16}decreaseTileSize(){this.forceMaxTileSize||(this.tileIncrementCount%2===1?(this.tile.w/=2,this.tile.w=Math.ceil(this.tile.w/8)*8):(this.tile.h/=2,this.tile.h=Math.ceil(this.tile.h/8)*8),this.tile.w<16&&(this.tile.w=16),this.tile.h<16&&(this.tile.h=16),this.tileIncrementCount-=1,Oe.setTileSize(`${this.tile.w} x ${this.tile.h}`))}increaseTileSize(){this.tileIncrementCount%2===0?this.tile.w*=2:this.tile.h*=2,this.tile.w>this.canvasSize.x&&(this.tile.w=Math.ceil(this.canvasSize.x/8)*8),this.tile.h>this.canvasSize.y&&(this.tile.h=Math.ceil(this.canvasSize.y/8)*8),this.tile.x-=this.tile.w,this.tileIncrementCount+=1,Oe.setTileSize(`${this.tile.w} x ${this.tile.h}`)}resetTile(){this.tileIncrementCount=0;let e=16,t=16;this.forceMaxTileSize&&(e=this.canvasSize.x,t=this.canvasSize.y),Oe.setTileSize(`${e} x ${t}`),this.tile={x:this.canvasSize.x,y:this.canvasSize.y,w:e,h:t}}getNextTile(e){return this.tile.x+=this.tile.w,this.tile.x>=this.canvasSize.x&&(this.tile.x=0,this.tile.y+=this.tile.h),this.tile.y>=this.canvasSize.y&&(this.tile.x=0,this.tile.y=0,e()),this.tile}getCurrentTile(){return this.tile}getWorkGroupCount(){return new Q(this.tile.w/8,this.tile.h/8)}static shaderPart(){return`
      struct Tile {
        x: u32,
        y: u32,
        w: u32,
        h: u32,
      }
    `}}const bl=`

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
  ires: BVHIntersectionResult, triangle: Triangle, shadingNormal: vec3f, 
  tangent: ptr<function, vec3f>, bitangent: ptr<function, vec3f>
) {
  *tangent = ires.tangent;
  *bitangent = normalize(cross(*tangent, triangle.geometricNormal));

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

// from openPBR:
// https://academysoftwarefoundation.github.io/OpenPBR/#model/microfacetmodel
fn anisotropyRemap(roughness: f32, anisotropy: f32) -> vec2f {
  let at = (roughness * roughness) * sqrt(2.0 / (1.0 + (1.0 - anisotropy) * (1.0 - anisotropy)));
  let ab = (1.0 - anisotropy) * at;
  return vec2f(at, ab);
} 

fn mod1u(x: u32, y: u32) -> u32 {
  return x - y * (x / y);
}
fn mod1f(x: f32, y: f32) -> f32 {
  return x - y * floor(x / y);
}
fn mod3f(a: vec3f, b: vec3f) -> vec3f {
  return vec3f(
    a.x - b.x * floor(a.x / b.x),
    a.y - b.y * floor(a.y / b.y),
    a.z - b.z * floor(a.z / b.z),
  );
}
`,wl=`
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
  return v > 999999999999999999.0;
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
`,_l=`
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
`,Fs=class Fs extends Ws{constructor({absorption:t,roughness:i,anisotropy:s,eta:n,absorptionMap:r,roughnessMap:l,bumpMap:a,bumpStrength:h=1,uvRepeat:c=new Q(1,1),mapUvRepeat:u=new Q(1,1),flipTextureY:f=!1}){super({flipTextureY:f});S(this,"absorption");S(this,"roughness");S(this,"anisotropy");S(this,"eta");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");let d=Fs.MIN_INPUT_ROUGHNESS;this.type=Yt.DIELECTRIC,this.absorption=t,this.roughness=i*(1-d)+d,this.anisotropy=Gs(s,.01,.99),this.eta=n,(n<1||n>3)&&(this.eta=Gs(n,1,3),console.error("eta value can't be smaller than 1 or greater than 3, values for this material have been clamped")),this.bumpStrength=h,this.uvRepeat=c,this.mapUvRepeat=u,this.offsetCount=18,this.texturesLocation.absorptionMap=new Q(-1,-1),this.texturesLocation.roughnessMap=new Q(-1,-1),this.texturesLocation.bumpMap=new Q(-1,-1),r&&(this.textures.absorptionMap=r),l&&(this.textures.roughnessMap=l),a&&(this.textures.bumpMap=a)}getFloatsArray(){return[this.type,this.absorption.r,this.absorption.g,this.absorption.b,this.roughness,this.anisotropy,this.eta,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,Xe(this.texturesLocation.absorptionMap.x),Xe(this.texturesLocation.absorptionMap.y),Xe(this.texturesLocation.roughnessMap.x),Xe(this.texturesLocation.roughnessMap.y),Xe(this.texturesLocation.bumpMap.x),Xe(this.texturesLocation.bumpMap.y)]}static shaderStruct(){return`
      struct DIELECTRIC {
        absorption: vec3f,
        ax: f32,
        ay: f32,
        roughness: f32,
        anisotropy: f32,
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
        d.ax = 0; // we'll map this value in the shader
        d.ay = 0; // we'll map this value in the shader
        d.roughness = materialsData[offset + 4];
        d.anisotropy = materialsData[offset + 5];
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
    `}static shaderBRDF(){return`
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
        if (CosTheta(wo) == 0.0) {
          *wi = vec3f(0, 0, 1);
          *f = vec3f(0.0);
          *pdf = 1.0;
          return;
        }

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
    `}static shaderShadeDielectric(){return`
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

      fn dielectricMultiScatteringFactor(wo: vec3f, material: DIELECTRIC) -> f32 {
        var msComp = 1.0;
        let woLutIndex = min(abs(wo.z), 0.9999);
        let roughLutIndex = min(material.roughness, 0.9999);
        let etaLutIndex = min(((material.eta - 1.0) / 2.0), 0.9999);
        if (wo.z > 0.0) {
          let uvt = vec3f(roughLutIndex, woLutIndex, etaLutIndex);
          msComp = getLUTvalue(uvt, LUT_MultiScatterDielectricEo).x;
        } else {
          let uvt = vec3f(roughLutIndex, woLutIndex, etaLutIndex);
          msComp = getLUTvalue(uvt, LUT_MultiScatterDielectricEoInverse).x;
        }

        return msComp;
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
          material.roughness *= roughness.x;
          material.roughness = max(material.roughness, ${Fs.MIN_INPUT_ROUGHNESS});
        }

        let axay = anisotropyRemap(material.roughness, material.anisotropy);
        material.ax = axay.x;
        material.ay = axay.y;

        var vertexNormal = ires.normal;
        var N = vertexNormal;
        var bumpOffset: f32 = 0.0;
        if (material.bumpMapLocation.x > -1) {
          N = getShadingNormal(
            material.bumpMapLocation, material.bumpStrength, material.uvRepeat, N, *ray, 
            ires, &bumpOffset
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
        let rands1 = vec4f(getRand2D(), getRand2D());
        let rands2 = vec4f(getRand2D(), getRand2D());
        
        // we need to calculate a TBN matrix
        var tangent = vec3f(0.0);
        var bitangent = vec3f(0.0);
        getTangentFromTriangle(ires, ires.triangle, N, &tangent, &bitangent);
       

        // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
        let TBN = mat3x3f(tangent, bitangent, N);
        // to transform vectors from world space to tangent space, we multiply by
        // the inverse of the TBN
        let TBNinverse = transpose(TBN);

        var wi = vec3f(0,0,0); 
        let wo = normalize(TBNinverse * -(*ray).direction);

        let msCompensation = dielectricMultiScatteringFactor(wo, material);

        if (config.MIS_TYPE == BRDF_ONLY) {
          var pdf: f32; var w: f32; var brdf: vec3f;
          shadeDielectricSampleBRDF(
            rands1, material, wo, &wi, ray, TBN, &brdf, &pdf, &w
          );

          (*ray).direction = normalize(TBN * wi);
          (*ray).origin = ires.hitPoint + (*ray).direction * 0.001;
          *reflectance *= (brdf / msCompensation) / pdf * abs(dot(N, (*ray).direction));
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
          *reflectance *= (brdf / msCompensation) * (misWeight / pdf) * abs(dot(N, (*ray).direction));
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
          *rad += *reflectance * lightRadiance * (lightSampleBrdf / msCompensation) * 
            (lightMisWeight / lightSamplePdf) * abs(dot(N, lightSampleWi));
          
          *reflectance *= (brdfSampleBrdf / msCompensation) * (brdfMisWeight / brdfSamplePdf) * 
            abs(dot(N, (*ray).direction));
        }
      } 
    `}};S(Fs,"MIN_INPUT_ROUGHNESS",.0707);let Kt=Fs;class Sl{constructor(e,t){S(this,"normal");S(this,"distance");this.normal=e,this.distance=t}intersectRay(e,t){let i=this.normal.dot(t);if(Math.abs(i)<=1e-4)return{hit:!1,t:-1,hitPoint:new M(0,0,0)};let s=-(this.normal.dot(e)+this.distance)/this.normal.dot(t);return s<=1e-4?{hit:!1,t:-1,hitPoint:new M(0,0,0)}:{hit:!0,t:s,hitPoint:e.clone().add(e.clone().multiplyScalar(s))}}static shaderMethods(){return`
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
    `}}class Br{constructor(){S(this,"e");S(this,"position");S(this,"rotationMatrix");S(this,"viewMatrix");S(this,"projectionMatrix");S(this,"canvasSize");S(this,"cameraUniformBuffer");S(this,"cameraPositionUniformBuffer");S(this,"exposureUniformBuffer");S(this,"cameraMatrixUniformBuffer");S(this,"projectionMatrixUniformBuffer");S(this,"device");S(this,"requestedBuffersUpdate",!1);S(this,"canvasContainerEl");this.e=new Rr,this.position=new M(0,0,-20),this.rotationMatrix=new me().identity(),this.viewMatrix=new me().identity(),this.projectionMatrix=new me().identity(),this.device=Jt.device,this.cameraUniformBuffer=this.device.createBuffer({size:96,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.exposureUniformBuffer=this.device.createBuffer({size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraMatrixUniformBuffer=this.device.createBuffer({size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.projectionMatrixUniformBuffer=this.device.createBuffer({size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraPositionUniformBuffer=this.device.createBuffer({size:3*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.fov=Math.PI*.25,this.aperture=.1,this.focusDistance=10,this.exposure=1,this.canvasSize=Dt(-1,-1),this.tiltShift=Dt(0,0),_e.subscribe(e=>{this.requestedBuffersUpdate=!0,this.e.fireEvent("change")}),this.e.addEventListener("change",()=>{this.requestedBuffersUpdate=!0})}setCanvasContainer(e){this.canvasContainerEl=e}onCanvasResize(e){this.canvasSize=e,this.requestedBuffersUpdate=!0}get rotationSpeed(){return st(mi).rotationSpeed}set rotationSpeed(e){mi.update(t=>(t.rotationSpeed=e,t))}get movementSpeed(){return st(mi).movementSpeed}set movementSpeed(e){mi.update(t=>(t.movementSpeed=e,t))}get exposure(){return st(_e).exposure}set exposure(e){_e.update(t=>(t.exposure=e,t))}get fov(){return st(_e).fov}set fov(e){_e.update(t=>(t.fov=e,t))}get aperture(){return st(_e).aperture}set aperture(e){_e.update(t=>(t.aperture=e,t))}get focusDistance(){return st(_e).focusDistance}set focusDistance(e){_e.update(t=>(t.focusDistance=e,t))}get tiltShift(){return st(_e).tiltShift}set tiltShift(e){_e.update(t=>(t.tiltShift=e,t))}get catsEyeBokehEnabled(){return st(_e).catsEyeBokehEnabled}set catsEyeBokehEnabled(e){_e.update(t=>(t.catsEyeBokehEnabled=e,t))}get catsEyeBokehMult(){return st(_e).catsEyeBokehMult}set catsEyeBokehMult(e){_e.update(t=>(t.catsEyeBokehMult=e,t))}get catsEyeBokehPow(){return st(_e).catsEyeBokehPow}set catsEyeBokehPow(e){_e.update(t=>(t.catsEyeBokehPow=e,t))}dispose(){this.e=new Rr}renderLoopUpdate(){this.requestedBuffersUpdate&&(this.updateCameraBuffer(),this.updateCameraMatricesBuffers(),this.updateExposureUniformBuffer(),this.requestedBuffersUpdate=!1)}updateExposureUniformBuffer(){this.device.queue.writeBuffer(this.exposureUniformBuffer,0,new Float32Array([this.exposure]))}updateCameraMatricesBuffers(){this.viewMatrix.identity(),this.viewMatrix.multiplyMatrices(this.viewMatrix,this.rotationMatrix.clone().invert()),this.viewMatrix.multiplyMatrices(this.viewMatrix,new me().makeTranslation(this.position).invert()),this.device.queue.writeBuffer(this.cameraMatrixUniformBuffer,0,new Float32Array(this.viewMatrix.elements));let e=this.canvasSize.x/this.canvasSize.y,t=.1,i=1e4,s=Math.tan(this.fov*.5)*t,n=-s,r=s*e,l=-s*e,a=t,h=i,c=s,u=r,f=n,d=l;this.device.queue.writeBuffer(this.projectionMatrixUniformBuffer,0,new Float32Array([2*a/(u-d),0,0,0,0,2*a/(c-f),0,0,(u+d)/(u-d),(c+f)/(c-f),-(h+a)/(h-a),-1,0,0,-(2*h*a)/(h-a),0])),this.device.queue.writeBuffer(this.cameraPositionUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z]))}updateCameraBuffer(){this.device.queue.writeBuffer(this.cameraUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z,this.fov,this.rotationMatrix.elements[0],this.rotationMatrix.elements[1],this.rotationMatrix.elements[2],0,this.rotationMatrix.elements[4],this.rotationMatrix.elements[5],this.rotationMatrix.elements[6],0,this.rotationMatrix.elements[8],this.rotationMatrix.elements[9],this.rotationMatrix.elements[10],0,this.aperture,this.focusDistance,this.tiltShift.x,this.tiltShift.y,this.catsEyeBokehEnabled?1:0,this.catsEyeBokehMult,this.catsEyeBokehPow,0]))}getFocusDistanceFromIntersectionPoint(e){let t=e.clone().sub(this.position).applyMatrix4(this.rotationMatrix.clone().invert()),i=t.clone().normalize(),n=new Sl(new M(this.tiltShift.x,this.tiltShift.y,-1),1).intersectRay(new M(0,0,0),i),r=t.length(),l=n.t;return r/l}screenPointToRay(e,t){let i=new Q(e.x/t.x*2-1,e.y/t.y*2-1),s=t.x/t.y,n=Math.tan(this.fov*.5);var r=new M(n*i.x*s,n*i.y,1).normalize();return r=r.applyMatrix4(this.rotationMatrix),{ro:this.position.clone(),rd:r}}static shaderMethods(){return`
      fn getCameraRay(tid: vec3u, idx: u32, contribution: ptr<function, f32>) -> Ray {
        // if you change the inner workings of ray direction creation,
        // also remember to update screenPointToRay(...)

        *contribution = 1.0;

        // from [0...1] to [-1...+1]
        let rands = getRand2D();
        let nuv = vec2f(
          (f32(tid.x) + rands.x) / f32(canvasSize.x) * 2 - 1,
          (f32(tid.y) + rands.y) / f32(canvasSize.y) * 2 - 1,
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

        let r1 = getRand2D();
        let dofRands = r1;
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
            let rands = getRand2D();
            let r0 = rands.x;
            let r1 = rands.y;

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
    `}}const Gu=`
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
`,qu=`
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
`,Hu=`
  fn getShadingNormal(
    mapLocation: vec2i, strength: f32, uvRepeat: vec2f, normal: vec3f, ray: Ray, 
    ires: BVHIntersectionResult, rayOffset: ptr<function, f32>
  ) -> vec3f {
    let hitP = ires.hitPoint;
    let uv = ires.uv; 
    let triangle = ires.triangle;
    
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
    getTangentFromTriangle(ires, triangle, normal, &tangent, &bitangent);
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
`,Wu=`
const RANDOMS_VEC4F_ARRAY_COUNT = 50;
var<private> randomsArrayIndex: u32 = 0;
var<private> randomsOffset: f32 = 0;
var<private> randomsOffsetsArray = array<f32, 8>(0,0,0,0,0,0,0,0);
var<private> randomsOffsetsArrayIndex: u32 = 0;

// we're forcing every routine of the renderer to request a 2D
// random sample, such that we can make sure that those samples are
// well distributed in those 2 dimensions, this makes it simpler
// to create the blue noise sampler, which will group the randoms
// array in groups of 2, with points well distributed in each of those 2 dimensions  
fn getRand2D() -> vec2f {
  var rands = vec2f(0.0);

  for (var i = 0; i < 2; i++) {
    let currentSample = haltonSamples[randomsArrayIndex / 4];
    let modulo = mod1u(randomsArrayIndex, 4);
    let sample = selectRandomArraySampleComponent(currentSample, modulo);
  
    randomsArrayIndex++;
    if (randomsArrayIndex >= RANDOMS_VEC4F_ARRAY_COUNT) {
      randomsArrayIndex = 0;
    }

    var offset = 0.0;

    if (
      config.SAMPLER_DECORRELATION == DECORRELATION_BLUE_NOISE_MASK
    ) {
      offset = randomsOffsetsArray[randomsOffsetsArrayIndex];
      randomsOffsetsArrayIndex = mod1u(randomsOffsetsArrayIndex + 1, 8);
    } else {
      offset = randomsOffset;
    }

    let value = min(fract(sample + offset), 0.99999999);

    if (i == 0) {
      rands.x = value;
    } else {
      rands.y = value;
    }
  }

  return rands;
}

fn initializeRandoms(tid: vec3u, sampleIndex: u32) {
  // I think that if I also use sampleIndex below I'd thwart the halton sequence,
  // since successive samples will have random offsets compared to where they should
  // have been had I simply used the sequence
  // let pseudoRands = rand4(tid.x * 987657 + tid.y * 346799 + sampleIndex * 427693);
  let pseudoRands = rand4(tid.x * 987657 + tid.y * 346799);

  if (
    config.SAMPLER_DECORRELATION == DECORRELATION_RAND_OFFSET || 
    config.SAMPLER_DECORRELATION == DECORRELATION_RAND_ARRAY_OFFSET
  ) {
    randomsOffset = pseudoRands.x;
  }
  
  if (
    config.SAMPLER_DECORRELATION == DECORRELATION_RAND_ARRAY_OFFSET
  ) {
    // we're multiplying by 2 the offset to respect the 2D distribution we're forcing
    // with getRand2D();
    randomsArrayIndex = u32(pseudoRands.y * 0.5 * f32(RANDOMS_VEC4F_ARRAY_COUNT-1)) * 2;
  }

  if (
    config.SAMPLER_DECORRELATION == DECORRELATION_BLUE_NOISE_MASK
  ) {
    let tx1 = mod1u(tid.x, 256);
    let ty1 = mod1u(tid.y, 256);
    let blueNoise1 = textureLoad(blueNoise256, vec2u(tx1, ty1), 0);
    let tx2 = mod1u(tid.x + 128, 256);
    let ty2 = mod1u(tid.y + 128, 256);
    let blueNoise2 = textureLoad(blueNoise256, vec2u(tx2, ty2), 0);
  
    randomsOffsetsArray[0] = blueNoise1.x;
    randomsOffsetsArray[1] = blueNoise1.y;
    randomsOffsetsArray[2] = blueNoise1.z;
    randomsOffsetsArray[3] = blueNoise1.w;
    randomsOffsetsArray[4] = blueNoise2.x;
    randomsOffsetsArray[5] = blueNoise2.y;
    randomsOffsetsArray[6] = blueNoise2.z;
    randomsOffsetsArray[7] = blueNoise2.w;
  }
}

fn selectRandomArraySampleComponent(sample: vec4f, index: u32) -> f32 {
  switch index {
    case 0: { return sample.x; }
    case 1: { return sample.y; }
    case 2: { return sample.z; }
    case 3: { return sample.w; }
    default: { return 0.0; } 
  }
}
`;function $u(o){return`
// keep in mind that configManager.shaderPart() might return different shader code if the
// internal shader configs have changed
${Be.shaderPart()}
// at the moment these have to be imported with this specific order
${_l}
${bl}
${wl}
${Gu}
${qu}
${Hu}
${Wu}
${o.getShaderPart()}
${xl.shaderPart()}
${Ds.shaderStruct()}
${Ds.shaderCreateStruct()}
${Ds.shaderShadeEmissive()}
${An.shaderStruct()}
${An.shaderCreateStruct()}
${An.shaderShadeDiffuse()}
${Xt.shaderStruct()}
${Xt.shaderCreateStruct()}
${Xt.shaderBRDF()}
${Xt.shaderShadeTorranceSparrow()}
${Kt.shaderStruct()}
${Kt.shaderCreateStruct()}
${Kt.shaderBRDF()}
${Kt.shaderShadeDielectric()}
${Ws.shaderShade()}
${Br.shaderStruct()}
${Br.shaderMethods()}
${qs.shaderStruct()}
${qs.shaderIntersectionFn()}
${pt.shaderStruct()}
${pt.shaderIntersect()}
${Cr.shaderStruct()}
${Cr.shaderIntersect()}
${Ri.shaderStruct()}
${Ri.shaderMethods()}
${fi.shaderStruct()}
${fi.shaderMethods()}
${zn.shaderStruct()}
${zn.shaderMethods()}
${Sl.shaderMethods()}

@group(0) @binding(0) var<storage, read_write> radianceOutput: array<vec3f>;
@group(0) @binding(1) var<storage, read_write> samplesCount: array<u32>;
@group(0) @binding(2) var<uniform> canvasSize: vec2u;

// on a separate bind group since camera changes more often than data/canvasSize
@group(1) @binding(0) var<uniform> camera: Camera;
// seems like maximum bindgroup count is 4 so I need to add the camera sample here 
// unfortunately and I can't create a separate bindgroup for it
@group(1) @binding(1) var<uniform> haltonSamples: array<vec4f, RANDOMS_VEC4F_ARRAY_COUNT>;
@group(1) @binding(2) var<uniform> config: Config;
@group(1) @binding(3) var<uniform> tile: Tile;

@group(2) @binding(0) var<storage, read_write> debugBuffer: array<f32>;
@group(2) @binding(1) var<uniform> debugPixelTarget: vec2<u32>;

@group(3) @binding(0) var<storage> triangles: array<Triangle>;
@group(3) @binding(1) var<storage> materialsData: array<f32>;
@group(3) @binding(2) var<storage> bvhData: array<BVHNode>;
@group(3) @binding(3) var<storage> lightsCDFData: array<LightCDFEntry>;
// envmapPC2Darray will contain:
// pConditionalV: PC1D[];
// pMarginal: PC1D;
// - - - - - - - -  
// PC1D will be held in memory with this layout:
// min, max, funcInt, func[], absFunc[], cdf[]
@group(3) @binding(4) var<storage> envmapPC2Darray: array<f32>;
@group(3) @binding(5) var<uniform> envmapPC2D: PC2D;
@group(3) @binding(6) var envmapTexture: texture_2d<f32>;
@group(3) @binding(7) var<uniform> envmapInfo: EnvmapInfo;
@group(3) @binding(8) var textures128: texture_2d_array<f32>;
@group(3) @binding(9) var textures512: texture_2d_array<f32>;
@group(3) @binding(10) var textures1024: texture_2d_array<f32>;
// learn opengl uses 128x128 on their own implementation for DGF
// adobe photoshop can export and use LUTs of 32 and 64
// I decided to use up to two slots: lut32 and lut64
// for LUTs that are single-layer and higher than 64, we can use the texture_2d_arrays above
@group(3) @binding(11) var lut32: texture_3d<f32>;
@group(3) @binding(12) var blueNoise256: texture_2d<f32>;

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

@compute @workgroup_size(8, 8) fn compute(
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

  initializeRandoms(tid, debugInfo.sample);

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
`}const ju=`
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
`;function Bs(o,e){return Tl(o,GPUShaderStage.COMPUTE,e)}function Yu(o,e){return Tl(o,GPUShaderStage.FRAGMENT,e)}function Tl(o,e,t){return o.createBindGroupLayout({entries:t.map((i,s)=>{if(i=="storage"||i=="uniform"||i=="read-only-storage")return{binding:s,visibility:e,buffer:{type:i}};if(i=="texture")return{binding:s,visibility:e,texture:{}};if(i=="2d-array")return{binding:s,visibility:e,texture:{viewDimension:"2d-array"}};if(i=="3d")return{binding:s,visibility:e,texture:{viewDimension:"3d"}};throw new Error("Unexpected bind-group-layout value type")})})}class Xu{constructor(e){S(this,"device");S(this,"pipeline");S(this,"bindGroup0",null);S(this,"canvasSizeUniformBuffer");S(this,"canvasSize",null);this.device=e;const t=e.createShaderModule({label:"reset module",code:ju}),i=e.createPipelineLayout({bindGroupLayouts:[Bs(e,["storage","storage","uniform"])]});this.pipeline=e.createComputePipeline({label:"reset pipeline",layout:i,compute:{module:t,entryPoint:"resetCanvas"}}),this.canvasSizeUniformBuffer=e.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"reset bindgroup",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}reset(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined bind groups or canvasSize");const e=Dt(Math.ceil(this.canvasSize.x/8),Math.ceil(this.canvasSize.y/8)),t=this.device.createCommandEncoder({label:"reset encoder"}),i=t.beginComputePass({label:"reset pass"});i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.dispatchWorkgroups(e.x,e.y),i.end();const s=t.finish();this.device.queue.submit([s])}}class Ku{constructor(e){S(this,"querySet");S(this,"resolveBuffer");S(this,"resultBuffer");S(this,"average",[]);this.querySet=e.createQuerySet({type:"timestamp",count:2}),this.resolveBuffer=e.createBuffer({size:this.querySet.count*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=e.createBuffer({size:this.resolveBuffer.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}updateComputePassDescriptor(e){e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}resolve(e){e.resolveQuerySet(this.querySet,0,this.querySet.count,this.resolveBuffer,0),this.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.resultBuffer.size)}getDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());e(Number(i[1]-i[0])/1e6),this.resultBuffer.unmap()}):t()})}reset(){this.average=[]}getAverageDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());this.average.push(Number(i[1]-i[0])/1e6),this.average.length>30&&this.average.splice(0,1),e(this.average.reduce((s,n)=>s+n/this.average.length)),this.resultBuffer.unmap()}):t()})}}const Zu=`
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
`;class Ju{constructor(){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"renderSampler");S(this,"bindGroup0",null);S(this,"sampler");S(this,"textures128");S(this,"textures512");S(this,"textures1024");this.context=Jt.context;let e=Jt.device;this.device=e;const t=this.device.createShaderModule({label:"render texture shader",code:Zu});this.pipeline=e.createRenderPipeline({label:"mip level generator pipeline",layout:"auto",vertex:{module:t},fragment:{module:t,targets:[{format:"rgba8unorm"}]}}),this.renderSampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.sampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.textures128=this.device.createTexture({label:"dummy texture array segment 128 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures512=this.device.createTexture({label:"dummy texture array segment 512 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures1024=this.device.createTexture({label:"dummy texture array segment 1024 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})}update(e){let t=0,i=[],s=0,n=[],r=0,l=[];for(let h=0;h<e.length;h++){let c=e[h];for(let u in c.textures){let f=c.textures[u],d=Math.max(f.width,f.height);d<=128?(c.texturesLocation[u]=new Q(0,t),t++,i.push({image:f,flipY:c.flipTextureY})):d<=512?(c.texturesLocation[u]=new Q(1,s),s++,n.push({image:f,flipY:c.flipTextureY})):(c.texturesLocation[u]=new Q(2,r),r++,l.push({image:f,flipY:c.flipTextureY}))}}t>0&&(this.textures128=this.device.createTexture({label:"texture array segment 128 texture",size:[128,128,t],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),s>0&&(this.textures512=this.device.createTexture({label:"texture array segment 512 texture",size:[512,512,s],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),r>0&&(this.textures1024=this.device.createTexture({label:"texture array segment 1024 texture",size:[1024,1024,r],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}));const a=async(h,c,u)=>{const f=document.createElement("canvas");f.width=u.image.width,f.height=u.image.height,f.getContext("2d").drawImage(u.image,0,0);const p=await createImageBitmap(f),m=this.device.createTexture({size:[u.image.width,u.image.height],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});this.device.queue.copyExternalImageToTexture({source:p,flipY:u.flipY},{texture:m},{width:u.image.width,height:u.image.height}),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.renderSampler},{binding:1,resource:m.createView()}]});let y=this.textures128;h=="512"&&(y=this.textures512),h=="1024"&&(y=this.textures1024),this.render(y,c)};i.forEach((h,c)=>{a("128",c,h)}),n.forEach((h,c)=>{a("512",c,h)}),l.forEach((h,c)=>{a("1024",c,h)})}render(e,t){if(!this.bindGroup0)throw new Error("undefined render bind group");const i={label:"our basic canvas renderPass",colorAttachments:[{view:e.createView({dimension:"2d-array",baseArrayLayer:t,arrayLayerCount:1}),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},s=this.device.createCommandEncoder({label:"render encoder"}),n=s.beginRenderPass(i);n.setPipeline(this.pipeline),n.setBindGroup(0,this.bindGroup0),n.draw(6),n.end();const r=s.finish();this.device.queue.submit([r])}}class Ml extends Br{constructor(){super();S(this,"target");S(this,"keys",{});S(this,"disposed");S(this,"rotationChange",!1);S(this,"movementChange",!1);S(this,"isPointerDown",!1);S(this,"pointerDownCoords",new Q(-1,-1));S(this,"theta");S(this,"phi");this.target=new M(0,0,0),this.theta=Math.PI*.5,this.phi=0,this.disposed=!1,window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("keyup",this.handleKeyUp.bind(this)),this.loop()}setCanvasContainer(t){super.setCanvasContainer(t),t.addEventListener("pointerdown",this.handlePointerDown.bind(this)),t.addEventListener("pointerup",this.handlePointerUp.bind(this)),t.addEventListener("pointermove",this.handlePointerMove.bind(this))}dispose(){super.dispose(),window.removeEventListener("keydown",this.handleKeyDown.bind(this)),window.removeEventListener("keyup",this.handleKeyUp.bind(this)),this.canvasContainerEl.removeEventListener("pointerdown",this.handlePointerDown.bind(this)),this.canvasContainerEl.removeEventListener("pointerup",this.handlePointerUp.bind(this)),this.canvasContainerEl.removeEventListener("pointermove",this.handlePointerMove.bind(this)),this.disposed=!0}loop(){this.theta<.001&&(this.theta=.001),this.theta>Math.PI-.001&&(this.theta=Math.PI-.001);let i=!1;if(this.keys.shift&&(i=!0),this.rotationChange){const a=new M(0,1,0);a.applyAxisAngle(new M(-1,0,0),this.theta),a.applyAxisAngle(new M(0,1,0),this.phi);const h=this.position.clone().sub(this.target).length(),c=this.target.clone().add(a.clone().multiplyScalar(h));this.position.copy(c)}let{basisX:s,basisY:n,basisZ:r}=this.getBasis(),l=i?.1:1;if(this.keys.w){let a=r.clone().multiplyScalar(this.movementSpeed*l);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.s){let a=r.clone().multiplyScalar(-this.movementSpeed*l);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.d){let a=s.clone().multiplyScalar(this.movementSpeed*.7*l);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.a){let a=s.clone().multiplyScalar(-this.movementSpeed*.7*l);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.q){let a=n.clone().multiplyScalar(this.movementSpeed*.3*l);this.target.add(a),this.position.add(a),this.movementChange=!0}if(this.keys.e){let a=n.clone().multiplyScalar(-this.movementSpeed*.3*l);this.target.add(a),this.position.add(a),this.movementChange=!0}(this.rotationChange||this.movementChange)&&(this.calculateMatrix(),this.e.fireEvent("change"),this.rotationChange=!1,this.movementChange=!1),this.disposed||requestAnimationFrame(this.loop.bind(this))}handlePointerDown(t){this.canvasContainerEl&&(this.isPointerDown=!0,this.pointerDownCoords=new Q(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight))}handlePointerUp(t){this.isPointerDown=!1}handlePointerMove(t){if(!this.isPointerDown)return;let i=new Q(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight),s=i.clone().sub(this.pointerDownCoords);if(s.x==0&&s.y==0)return;let n=1;this.keys.shift&&(n=.1),this.theta+=-s.y*this.rotationSpeed*5*n,this.phi+=s.x*this.rotationSpeed*5*n,this.rotationChange=!0,this.pointerDownCoords=i}handleKeyDown(t){this.keys[t.key.toLowerCase()]=!0}handleKeyUp(t){this.keys[t.key.toLowerCase()]=!1}set(t,i){this.position=t,this.target=i;let s=this.position.clone().sub(this.target).normalize();this.theta=Math.acos(s.y),this.phi=-Math.atan2(s.z,s.x)-Math.PI*.5,this.calculateMatrix(),this.e.fireEvent("change")}getBasis(){const t=this.target.clone().sub(this.position).normalize(),i=new M(0,1,0),s=t,n=i.clone().cross(s).normalize(),r=s.clone().cross(n).normalize();return{basisX:n,basisY:r,basisZ:s}}calculateMatrix(){let{basisX:t,basisY:i,basisZ:s}=this.getBasis();this.rotationMatrix=new me().makeBasis(t,i,s)}}async function Qu(o){try{const e=await fetch(o);if(!e.ok)throw new Error("Network response was not ok.");return await e.arrayBuffer()}catch(e){console.error("There was a problem fetching the file:",e)}}var En=(o=>(o[o.MultiScatterTorranceSparrow=0]="MultiScatterTorranceSparrow",o[o.MultiScatterDielectricEo=1]="MultiScatterDielectricEo",o[o.MultiScatterDielectricEoInverse=2]="MultiScatterDielectricEoInverse",o[o.MultiScatterDielectricEavg=3]="MultiScatterDielectricEavg",o[o.MultiScatterDielectricEavgInverse=4]="MultiScatterDielectricEavgInverse",o))(En||{});let ec=`
  const LUT_MultiScatterTorranceSparrow = 0;
  const LUT_MultiScatterDielectricEo = 1;
  const LUT_MultiScatterDielectricEoInverse = 2;
  const LUT_MultiScatterDielectricEavg = 3;
  const LUT_MultiScatterDielectricEavgInverse = 4;
`;class tc{constructor(e){S(this,"cache",{});S(this,"offsetsShaderPart","");S(this,"zOffsetPointer",0);S(this,"lut32data",[]);S(this,"device");this.device=e}async load(e,t){if(!this.cache[e]){let u=await Qu(e);if(!u)throw new Error("Couldn't load buffer: "+e);this.cache[e]=u}let i=this.cache[e],s=4*4,n=new Uint32Array(i,0,4),r=n[0],l=n[1],a=n[2],h=n[3],c=new Float32Array(i,s,l*a*h*r);return t==0&&(this.offsetsShaderPart+=`
        if (lutType == LUT_MultiScatterTorranceSparrow) {
          zOffset = ${this.zOffsetPointer};
          useBilinearInterpolation = true;
        }
      `),t==1&&(this.offsetsShaderPart+=`
        if (lutType == LUT_MultiScatterDielectricEo) {
          zOffset = ${this.zOffsetPointer};
          useBilinearInterpolation = true;
        }
      `),t==2&&(this.offsetsShaderPart+=`
        if (lutType == LUT_MultiScatterDielectricEoInverse) {
          zOffset = ${this.zOffsetPointer};
          useBilinearInterpolation = true;
        }
      `),t==3&&(this.offsetsShaderPart+=`
        if (lutType == LUT_MultiScatterDielectricEavg) {
          zOffset = ${this.zOffsetPointer};
          useBilinearInterpolation = true;
        }
      `),t==4&&(this.offsetsShaderPart+=`
        if (lutType == LUT_MultiScatterDielectricEavgInverse) {
          zOffset = ${this.zOffsetPointer};
          useBilinearInterpolation = true;
        }
      `),this.zOffsetPointer+=h,this.storeLUTdata(l,a,h,r,c),{arrayData:c}}storeLUTdata(e,t,i,s,n){if(e!=32)throw new Error("size of LUT is not 32 - implementation of 64x64x64 LUTs is not completed yet");for(let r=0;r<i;r++)for(let l=0;l<32;l++)for(let a=0;a<32;a++){if(l>=t){this.lut32data.push(0,0,0,0);continue}else if(a>=e){this.lut32data.push(0,0,0,0);continue}for(let h=0;h<4;h++){if(h>=s){this.lut32data.push(0);continue}this.lut32data.push(n[r*32*32*s+l*32*s+a*s+h])}}}getTexture(){let e=Math.max(this.lut32data.length/4096,1);const t=this.device.createTexture({label:"lut 32 texture 3D",size:[32,32,e],dimension:"3d",format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return this.lut32data.length>0&&this.device.queue.writeTexture({texture:t},new Float32Array(this.lut32data),{bytesPerRow:32*4*4,rowsPerImage:32},{width:32,height:32,depthOrArrayLayers:e}),t}getShaderPart(){return`
      ${ec}

      fn interpolateLUTbilinear(uv: vec3f, zOffset: i32) -> vec4f {
        let clampedUv = clamp(uv, vec3f(0.0), vec3f(0.99999));

        let oneOver32  = 0.03125;  // <-- single texel size on a 32x32 LUT
        var duv = mod3f(clampedUv, vec3f(oneOver32)) / oneOver32;
        let yo: i32 = select(-1, 1, duv.y >= 0.5);
        let xo: i32 = select(-1, 1, duv.x >= 0.5);

        let discreteUv0 = vec3i(
          i32(clampedUv.x * 32),
          i32(clampedUv.y * 32),
          i32(clampedUv.z * 32) + zOffset,
        );
        let isDXOver32OrUnder0 = (discreteUv0.x + xo >= 32) || (discreteUv0.x + xo < 0);
        let isDYOver32OrUnder0 = (discreteUv0.y + yo >= 32) || (discreteUv0.y + yo < 0);

        let discreteUvPlusX = vec3i(
          select(discreteUv0.x + xo, discreteUv0.x, isDXOver32OrUnder0),
          discreteUv0.y,
          discreteUv0.z,
        );
        let discreteUvPlusY = vec3i(
          discreteUv0.x,
          select(discreteUv0.y + yo, discreteUv0.y, isDYOver32OrUnder0),
          discreteUv0.z,
        );
        let discreteUvPlusXY = vec3i(
          select(discreteUv0.x + xo, discreteUv0.x, isDXOver32OrUnder0),
          select(discreteUv0.y + yo, discreteUv0.y, isDYOver32OrUnder0),
          discreteUv0.z,
        );
        
        let v = textureLoad(lut32, discreteUv0, 0);
        let vx = textureLoad(lut32, discreteUvPlusX, 0);
        let vy = textureLoad(lut32, discreteUvPlusY, 0);
        let vxy = textureLoad(lut32, discreteUvPlusXY, 0);

        let tx = select(0.5 - duv.x, duv.x - 0.5, duv.x >= 0.5);
        let ty = select(0.5 - duv.y, duv.y - 0.5, duv.y >= 0.5);

        let v0 = mix(v, vx, tx);
        let v1 = mix(vy, vxy, tx);
        let interpolatedValue = mix(v0, v1, ty);

        return interpolatedValue;
      }

      fn getLUTvalue(uv: vec3f, lutType: u32) -> vec4f {
        var useTrilinearInterpolation = false;
        var useBilinearInterpolation = false;
        var useLinearInterpolation = false;
        var value = vec4f(0);

        var zOffset: i32 = 0;
        ${this.offsetsShaderPart}

        if (useTrilinearInterpolation) {
          // for 3d luts
          // not implemented, throw error?
        } else if (useBilinearInterpolation) {
          // for single-layer luts
          value = interpolateLUTbilinear(uv, zOffset);
        } else if (useLinearInterpolation) {
          // for single-line luts
          // not implemented, throw error?
        }

        return value;
      }
    `}}let ic=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223];class sc{constructor(){S(this,"s",0)}reset(){this.s=0}get2DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3);return this.s++,new Q(e,t)}get3DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5);return this.s++,new M(e,t,i)}get4DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5),s=this.getSample(this.s,7);return this.s++,new dt(e,t,i,s)}getSamples(e){if(e>200)throw new Error("adjust the getSamples function to take in more than 200 samples");let t=[];for(let i=0;i<e;i++)t.push(this.getSample(this.s,ic[i]));return this.s++,t}getSample(e,t){for(var i=0,s=1/t,n=e;n>0;)i=i+s*(n%t),n=Math.floor(n/t),s=s/t;return i}}var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Al(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function nc(o){if(o.__esModule)return o;var e=o.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(o).forEach(function(i){var s=Object.getOwnPropertyDescriptor(o,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return o[i]}})}),t}var Zr={exports:{}};Zr.exports;(function(o){(function(e,t,i){function s(a){var h=this,c=l();h.next=function(){var u=2091639*h.s0+h.c*23283064365386963e-26;return h.s0=h.s1,h.s1=h.s2,h.s2=u-(h.c=u|0)},h.c=1,h.s0=c(" "),h.s1=c(" "),h.s2=c(" "),h.s0-=c(a),h.s0<0&&(h.s0+=1),h.s1-=c(a),h.s1<0&&(h.s1+=1),h.s2-=c(a),h.s2<0&&(h.s2+=1),c=null}function n(a,h){return h.c=a.c,h.s0=a.s0,h.s1=a.s1,h.s2=a.s2,h}function r(a,h){var c=new s(a),u=h&&h.state,f=c.next;return f.int32=function(){return c.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,u&&(typeof u=="object"&&n(u,c),f.state=function(){return n(c,{})}),f}function l(){var a=4022871197,h=function(c){c=String(c);for(var u=0;u<c.length;u++){a+=c.charCodeAt(u);var f=.02519603282416938*a;a=f>>>0,f-=a,f*=a,a=f>>>0,f-=a,a+=f*4294967296}return(a>>>0)*23283064365386963e-26};return h}t&&t.exports?t.exports=r:this.alea=r})(wi,o)})(Zr);var rc=Zr.exports,Jr={exports:{}};Jr.exports;(function(o){(function(e,t,i){function s(l){var a=this,h="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var u=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^u^u>>>8},l===(l|0)?a.x=l:h+=l;for(var c=0;c<h.length+64;c++)a.x^=h.charCodeAt(c)|0,a.next()}function n(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a}function r(l,a){var h=new s(l),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xor128=r})(wi,o)})(Jr);var ac=Jr.exports,Qr={exports:{}};Qr.exports;(function(o){(function(e,t,i){function s(l){var a=this,h="";a.next=function(){var u=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(u^u<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,l===(l|0)?a.x=l:h+=l;for(var c=0;c<h.length+64;c++)a.x^=h.charCodeAt(c)|0,c==h.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(l,a){return a.x=l.x,a.y=l.y,a.z=l.z,a.w=l.w,a.v=l.v,a.d=l.d,a}function r(l,a){var h=new s(l),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xorwow=r})(wi,o)})(Qr);var oc=Qr.exports,ea={exports:{}};ea.exports;(function(o){(function(e,t,i){function s(l){var a=this;a.next=function(){var c=a.x,u=a.i,f,d;return f=c[u],f^=f>>>7,d=f^f<<24,f=c[u+1&7],d^=f^f>>>10,f=c[u+3&7],d^=f^f>>>3,f=c[u+4&7],d^=f^f<<7,f=c[u+7&7],f=f^f<<13,d^=f^f<<9,c[u]=d,a.i=u+1&7,d};function h(c,u){var f,d=[];if(u===(u|0))d[0]=u;else for(u=""+u,f=0;f<u.length;++f)d[f&7]=d[f&7]<<15^u.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],c.x=d,c.i=0,f=256;f>0;--f)c.next()}h(a,l)}function n(l,a){return a.x=l.x.slice(),a.i=l.i,a}function r(l,a){l==null&&(l=+new Date);var h=new s(l),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(c.x&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xorshift7=r})(wi,o)})(ea);var lc=ea.exports,ta={exports:{}};ta.exports;(function(o){(function(e,t,i){function s(l){var a=this;a.next=function(){var c=a.w,u=a.X,f=a.i,d,p;return a.w=c=c+1640531527|0,p=u[f+34&127],d=u[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=u[f]=p^d,a.i=f,p+(c^c>>>16)|0};function h(c,u){var f,d,p,m,y,g=[],_=128;for(u===(u|0)?(d=u,u=null):(u=u+"\0",d=0,_=Math.max(_,u.length)),p=0,m=-32;m<_;++m)u&&(d^=u.charCodeAt((m+32)%u.length)),m===0&&(y=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,m>=0&&(y=y+1640531527|0,f=g[m&127]^=d+y,p=f==0?p+1:0);for(p>=128&&(g[(u&&u.length||0)&127]=-1),p=127,m=4*128;m>0;--m)d=g[p+34&127],f=g[p=p+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,g[p]=d^f;c.w=y,c.X=g,c.i=p}h(a,l)}function n(l,a){return a.i=l.i,a.w=l.w,a.X=l.X.slice(),a}function r(l,a){l==null&&(l=+new Date);var h=new s(l),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(c.X&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.xor4096=r})(wi,o)})(ta);var hc=ta.exports,ia={exports:{}};ia.exports;(function(o){(function(e,t,i){function s(l){var a=this,h="";a.next=function(){var u=a.b,f=a.c,d=a.d,p=a.a;return u=u<<25^u>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-u|0,a.b=u=u<<20^u>>>12^f,a.c=f=f-d|0,a.d=d<<16^f>>>16^p,a.a=p-u|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,l===Math.floor(l)?(a.a=l/4294967296|0,a.b=l|0):h+=l;for(var c=0;c<h.length+20;c++)a.b^=h.charCodeAt(c)|0,a.next()}function n(l,a){return a.a=l.a,a.b=l.b,a.c=l.c,a.d=l.d,a}function r(l,a){var h=new s(l),c=a&&a.state,u=function(){return(h.next()>>>0)/4294967296};return u.double=function(){do var f=h.next()>>>11,d=(h.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},u.int32=h.next,u.quick=u,c&&(typeof c=="object"&&n(c,h),u.state=function(){return n(h,{})}),u}t&&t.exports?t.exports=r:this.tychei=r})(wi,o)})(ia);var uc=ia.exports,El={exports:{}};const cc={},fc=Object.freeze(Object.defineProperty({__proto__:null,default:cc},Symbol.toStringTag,{value:"Module"})),dc=nc(fc);(function(o){(function(e,t,i){var s=256,n=6,r=52,l="random",a=i.pow(s,n),h=i.pow(2,r),c=h*2,u=s-1,f;function d(x,C,E){var A=[];C=C==!0?{entropy:!0}:C||{};var T=g(y(C.entropy?[x,w(t)]:x??_(),3),A),V=new p(A),B=function(){for(var z=V.g(n),O=a,G=0;z<h;)z=(z+G)*s,O*=s,G=V.g(1);for(;z>=c;)z/=2,O/=2,G>>>=1;return(z+G)/O};return B.int32=function(){return V.g(4)|0},B.quick=function(){return V.g(4)/4294967296},B.double=B,g(w(V.S),t),(C.pass||E||function(z,O,G,P){return P&&(P.S&&m(P,V),z.state=function(){return m(V,{})}),G?(i[l]=z,O):z})(B,T,"global"in C?C.global:this==i,C.state)}function p(x){var C,E=x.length,A=this,T=0,V=A.i=A.j=0,B=A.S=[];for(E||(x=[E++]);T<s;)B[T]=T++;for(T=0;T<s;T++)B[T]=B[V=u&V+x[T%E]+(C=B[T])],B[V]=C;(A.g=function(z){for(var O,G=0,P=A.i,I=A.j,k=A.S;z--;)O=k[P=u&P+1],G=G*s+k[u&(k[P]=k[I=u&I+O])+(k[I]=O)];return A.i=P,A.j=I,G})(s)}function m(x,C){return C.i=x.i,C.j=x.j,C.S=x.S.slice(),C}function y(x,C){var E=[],A=typeof x,T;if(C&&A=="object")for(T in x)try{E.push(y(x[T],C-1))}catch{}return E.length?E:A=="string"?x:x+"\0"}function g(x,C){for(var E=x+"",A,T=0;T<E.length;)C[u&T]=u&(A^=C[u&T]*19)+E.charCodeAt(T++);return w(C)}function _(){try{var x;return f&&(x=f.randomBytes)?x=x(s):(x=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(x)),w(x)}catch{var C=e.navigator,E=C&&C.plugins;return[+new Date,e,E,e.screen,w(t)]}}function w(x){return String.fromCharCode.apply(0,x)}if(g(i.random(),t),o.exports){o.exports=d;try{f=dc}catch{}}else i["seed"+l]=d})(typeof self<"u"?self:wi,[],Math)})(El);var pc=El.exports,mc=rc,gc=ac,yc=oc,vc=lc,xc=hc,bc=uc,Li=pc;Li.alea=mc;Li.xor128=gc;Li.xorwow=yc;Li.xorshift7=vc;Li.xor4096=xc;Li.tychei=bc;var wc=Li;const _c=Al(wc);function Sc(o,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,Mc(i.key),i)}}function sa(o,e,t){return e&&Sc(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Cl(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,Pr(o,e)}function Pr(o,e){return Pr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Pr(o,e)}function Tc(o,e){if(typeof o!="object"||o===null)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}function Mc(o){var e=Tc(o,"string");return typeof e=="symbol"?e:String(e)}var kn=function(){function o(){}var e=o.prototype;return e._seed=function(i,s){if(i===(i||0))return i;for(var n=""+i,r=0,l=0;l<n.length;++l)r^=n.charCodeAt(l)|0;return r},o}(),oo=function(o){Cl(e,o);function e(i,s){var n;return n=o.call(this)||this,n._rng=void 0,n.seed(i,s),n}var t=e.prototype;return t.next=function(){return this._rng()},t.seed=function(s,n){this._rng=s},t.clone=function(s,n){return new e(this._rng,n)},sa(e,[{key:"name",get:function(){return"function"}}]),e}(kn),lo=function(){var o=[].slice.call(arguments),e=o,t=e[0],i=t===void 0?"default":t;switch(typeof i){case"object":if(i instanceof kn)return i;break;case"function":return new oo(i);case"number":case"string":default:return new oo(_c.apply(void 0,o))}throw new Error('invalid RNG "'+i+'"')},Ac=function(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){return o.next()*(t-e)+e}};function Bt(o){return new Ec(o)}var Ec=function(e){var t=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(t.n))return t;throw new Error("Expected number to be an integer, got "+t.n)},this.isPositive=function(){if(t.n>0)return t;throw new Error("Expected number to be positive, got "+t.n)},this.lessThan=function(i){if(t.n<i)return t;throw new Error("Expected number to be less than "+i+", got "+t.n)},this.greaterThanOrEqual=function(i){if(t.n>=i)return t;throw new Error("Expected number to be greater than or equal to "+i+", got "+t.n)},this.greaterThan=function(i){if(t.n>i)return t;throw new Error("Expected number to be greater than "+i+", got "+t.n)},this.n=e},Cc=function(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),t===void 0&&(t=e===void 0?1:e,e=0),Bt(e).isInt(),Bt(t).isInt(),function(){return Math.floor(o.next()*(t-e+1)+e)}},Rc=function(o){return function(){return o.next()>=.5}},Bc=function(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){var i,s,n;do i=o.next()*2-1,s=o.next()*2-1,n=i*i+s*s;while(!n||n>1);return e+t*s*Math.sqrt(-2*Math.log(n)/n)}},Pc=function(o,e,t){e===void 0&&(e=0),t===void 0&&(t=1);var i=o.normal(e,t);return function(){return Math.exp(i())}},Ic=function(o,e){return e===void 0&&(e=.5),Bt(e).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(o.next()+e)}},zc=function(o,e,t){return e===void 0&&(e=1),t===void 0&&(t=.5),Bt(e).isInt().isPositive(),Bt(t).greaterThanOrEqual(0).lessThan(1),function(){for(var i=0,s=0;i++<e;)o.next()<t&&s++;return s}},Nc=function(o,e){e===void 0&&(e=.5),Bt(e).greaterThan(0).lessThan(1);var t=1/Math.log(1-e);return function(){return Math.floor(1+Math.log(o.next())*t)}},Dc=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],Lc=function(e){return Dc[e]},Fc=.9189385332046727,Oc=function(o,e){if(e===void 0&&(e=1),Bt(e).isPositive(),e<10){var t=Math.exp(-e);return function(){for(var a=t,h=0,c=o.next();c>a;)c=c-a,a=e*a/++h;return h}}else{var i=Math.sqrt(e),s=.931+2.53*i,n=-.059+.02483*s,r=1.1239+1.1328/(s-3.4),l=.9277-3.6224/(s-2);return function(){for(;;){var a=void 0,h=o.next();if(h<=.86*l)return a=h/l-.43,Math.floor((2*n/(.5-Math.abs(a))+s)*a+e+.445);h>=l?a=o.next()-.5:(a=h/l-.93,a=(a<0?-.5:.5)-a,h=o.next()*l);var c=.5-Math.abs(a);if(!(c<.013&&h>c)){var u=Math.floor((2*n/c+s)*a+e+.445);if(h=h*r/(n/(c*c)+s),u>=10){var f=(u+.5)*Math.log(e/u)-e-Fc+u-(.08333333333333333-(.002777777777777778-1/(1260*u*u))/(u*u))/u;if(Math.log(h*i)<=f)return u}else if(u>=0){var d,p=(d=Lc(u))!=null?d:0;if(Math.log(h)<=u*Math.log(e)-e-p)return u}}}}}},kc=function(o,e){return e===void 0&&(e=1),Bt(e).isPositive(),function(){return-Math.log(1-o.next())/e}},Uc=function(o,e){return e===void 0&&(e=1),Bt(e).isInt().greaterThanOrEqual(0),function(){for(var t=0,i=0;i<e;++i)t+=o.next();return t}},Vc=function(o,e){e===void 0&&(e=1),Bt(e).isInt().isPositive();var t=o.irwinHall(e);return function(){return t()/e}},Gc=function(o,e){e===void 0&&(e=1),Bt(e).greaterThanOrEqual(0);var t=1/e;return function(){return 1/Math.pow(1-o.next(),t)}},qc=function(o){Cl(e,o);function e(){return o.apply(this,arguments)||this}var t=e.prototype;return t.next=function(){return Math.random()},t.seed=function(s,n){},t.clone=function(){return new e},sa(e,[{key:"name",get:function(){return"default"}}]),e}(kn),Hc=function(){function o(t){var i=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return i._rng.next()},this.float=function(s,n){return i.uniform(s,n)()},this.int=function(s,n){return i.uniformInt(s,n)()},this.integer=function(s,n){return i.uniformInt(s,n)()},this.bool=function(){return i.uniformBoolean()()},this.boolean=function(){return i.uniformBoolean()()},this.uniform=function(s,n){return i._memoize("uniform",Ac,s,n)},this.uniformInt=function(s,n){return i._memoize("uniformInt",Cc,s,n)},this.uniformBoolean=function(){return i._memoize("uniformBoolean",Rc)},this.normal=function(s,n){return Bc(i,s,n)},this.logNormal=function(s,n){return Pc(i,s,n)},this.bernoulli=function(s){return Ic(i,s)},this.binomial=function(s,n){return zc(i,s,n)},this.geometric=function(s){return Nc(i,s)},this.poisson=function(s){return Oc(i,s)},this.exponential=function(s){return kc(i,s)},this.irwinHall=function(s){return Uc(i,s)},this.bates=function(s){return Vc(i,s)},this.pareto=function(s){return Gc(i,s)},t&&t instanceof kn?this.use(t):this.use(new qc),this._cache={}}var e=o.prototype;return e.clone=function(){var i=[].slice.call(arguments);return i.length?new o(lo.apply(void 0,i)):new o(this.rng.clone())},e.use=function(){this._rng=lo.apply(void 0,[].slice.call(arguments))},e.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},e.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},e.choice=function(i){if(!Array.isArray(i))throw new Error("Random.choice expected input to be an array, got "+typeof i);var s=i==null?void 0:i.length;if(s>0){var n=this.uniformInt(0,s-1)();return i[n]}else return},e._memoize=function(i,s){var n=[].slice.call(arguments,2),r=""+n.join(";"),l=this._cache[i];return(l===void 0||l.key!==r)&&(l={key:r,distribution:s.apply(void 0,[this].concat(n))},this._cache[i]=l),l.distribution},sa(o,[{key:"rng",get:function(){return this._rng}}]),o}(),Rt=new Hc;class Wc{constructor(e="seed-string"){S(this,"seedString");this.seedString=e,this.reset()}reset(){Rt.use(this.seedString)}getSamples(e){let t=[];for(let i=0;i<e;i++)t.push(Rt.float());return t}}function $c(o,e,t,i){let s=Math.abs(t-o),n=Math.abs(i-e);return s>.5&&(s=1-s),n>.5&&(n=1-n),s*s+n*n}class jc{constructor(e="seed-string"){S(this,"seedString");S(this,"points");this.seedString=e,this.points=[],this.reset()}randomPoint(){return[Rt.float(),Rt.float()]}addSample(e){if(this.points[e]||(this.points[e]=[]),this.points[e].length==0){this.points[e].push(this.randomPoint());return}let t=[],i=this.points[e].length;for(let r=0;r<i;r++)t.push(this.randomPoint());let s=0,n=-1;t.forEach((r,l)=>{let a=1/0;this.points[e].forEach((h,c)=>{let u=$c(r[0],r[1],h[0],h[1]);u<a&&(a=u)}),a>s&&(s=a,n=l)}),this.points[e].push(t[n])}resetArrays(){this.points=[]}reset(){Rt.use(this.seedString),this.resetArrays()}getSamples(e,t=200){if(e%2!==0)throw new Error("Blue noise requires an even number of samples");this.points[0]&&this.points[0].length>t&&this.resetArrays();let i=[];for(let s=0;s<e/2;s++){this.addSample(s);let n=this.points[s][this.points[0].length-1][0],r=this.points[s][this.points[0].length-1][1];i.push(n,r)}return i}}let ho={};function Yc(o){return ho[o]?!1:(ho[o]=!0,!0)}async function Xc(o){const t=await(await fetch(o)).blob();return await createImageBitmap(t,{colorSpaceConversion:"none"})}async function Kc(o,e){const t=await Xc(e),i=o.createTexture({label:e,format:"rgba8unorm",size:[t.width,t.height],usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return o.queue.copyExternalImageToTexture({source:t,flipY:!0},{texture:i},{width:t.width,height:t.height}),i}class Ai{constructor(e,t="seed-string"){S(this,"seedString");S(this,"as");S(this,"numberOfDimensions");S(this,"phi");S(this,"iteration",0);this.seedString=t,this.reset(),this.numberOfDimensions=e,this.phi=this.calculatePhi(this.numberOfDimensions),this.as=this.calculateAs(this.phi,this.numberOfDimensions)}calculatePhi(e,t=50){let i=2;for(let s=0;s<t;s++)i=Math.pow(1+i,1/(e+1));return i}calculateAs(e,t){let i=[];for(let s=0;s<t;s++)i.push(1/Math.pow(e,s+1));return i}getSample(e,t){return(.5+this.as[e]*t)%1}reset(){Rt.use(this.seedString),this.iteration=0}getSamples(e){let t=[];for(let i=0;i<e;i++)if(i<this.numberOfDimensions){let s=this.getSample(i,this.iteration);t.push(s)}else t.push(Rt.float());return this.iteration++,t}}class Zc{constructor(e="seed-string"){S(this,"seedString");S(this,"r2_2",new Ai(2));S(this,"r2_4",new Ai(4));S(this,"r2_6",new Ai(6));S(this,"r2_8",new Ai(8));S(this,"r2_10",new Ai(10));S(this,"r2_12",new Ai(12));S(this,"r2_14",new Ai(14));this.seedString=e,this.reset()}reset(){Rt.use(this.seedString),this.r2_2.reset(),this.r2_4.reset(),this.r2_6.reset(),this.r2_8.reset(),this.r2_10.reset(),this.r2_12.reset(),this.r2_14.reset()}transformPair(e,t,i){let s=i*(Math.PI/2),n=.25*i,r=e*Math.cos(s)-t*Math.sin(s),l=e*Math.sin(s)+t*Math.cos(s);return r+=n,l+=n,[r%1,l%1]}transformSamples(e,t){let i=[];for(let s=0;s<e.length/2;s++){let n=e[s*2+0],r=e[s*2+1];i.push(...this.transformPair(n,r,t))}return i}getSamples(e){let t=[];if(t.push(...this.r2_2.getSamples(2)),t.push(...this.r2_4.getSamples(4)),t.push(...this.r2_6.getSamples(6)),t.push(...this.r2_8.getSamples(8)),t.push(...this.r2_10.getSamples(10)),t.push(...this.r2_12.getSamples(12)),t.push(...this.r2_14.getSamples(14)),t.length>e)t=t.slice(0,e);else{let i=e-t.length;for(let s=0;s<i;s++)t.push(Rt.float())}return t}}class Jc{constructor(e){S(this,"passPerformance");S(this,"device");S(this,"pipeline",null);S(this,"bindGroupLayouts");S(this,"layout");S(this,"configManager",Be);S(this,"textureArraySegment",new Ju);S(this,"bindGroup0",null);S(this,"bindGroup1",null);S(this,"bindGroup2",null);S(this,"bindGroup3",null);S(this,"canvasSize",null);S(this,"canvasSizeUniformBuffer");S(this,"randomsUniformBuffer");S(this,"RANDOMS_BUFFER_COUNT",200);S(this,"configUniformBuffer");S(this,"tileUniformBuffer");S(this,"debugBufferSize");S(this,"debugBuffer");S(this,"debugPixelTargetBuffer");S(this,"debugReadBuffer");S(this,"trianglesBuffer");S(this,"materialsBuffer");S(this,"bvhBuffer");S(this,"lightsCDFBuffer");S(this,"envmapPC2DBuffer");S(this,"envmapInfoBuffer");S(this,"lutManager");S(this,"resetSegment");S(this,"tileSequence");S(this,"requestShaderCompilation",!1);S(this,"scene");S(this,"camera");S(this,"bvh");S(this,"haltonSampler",new sc);S(this,"uniformSampler",new Wc);S(this,"blueNoiseSampler",new jc);S(this,"customR2Sampler",new Zc);S(this,"blueNoiseTexture");let t=Jt.device;this.device=t,this.tileSequence=e,this.resetSegment=new Xu(t),this.passPerformance=new Ku(t),this.lutManager=new tc(t),this.bindGroupLayouts=[Bs(t,["storage","storage","uniform"]),Bs(t,["uniform","uniform","uniform","uniform"]),Bs(t,["storage","uniform"]),Bs(t,["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform","texture","uniform","2d-array","2d-array","2d-array","3d","texture"])],this.layout=t.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts}),this.canvasSizeUniformBuffer=t.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.randomsUniformBuffer=t.createBuffer({size:this.RANDOMS_BUFFER_COUNT*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.configUniformBuffer=t.createBuffer({size:Be.bufferSize,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.tileUniformBuffer=t.createBuffer({size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugBufferSize=100,this.debugBuffer=this.device.createBuffer({size:4*this.debugBufferSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.debugPixelTargetBuffer=this.device.createBuffer({size:4*2,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugReadBuffer=this.device.createBuffer({size:4*this.debugBufferSize,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.setDebugPixelTarget(0,0),Be.e.addEventListener("config-update",()=>{this.updateConfig()}),this.requestShaderCompilation=!0}setDebugPixelTarget(e,t){this.device.queue.writeBuffer(this.debugPixelTargetBuffer,0,new Uint32Array([e,t])),this.device.queue.writeBuffer(this.debugBuffer,0,new Float32Array(Array.from({length:this.debugBufferSize},(i,s)=>0))),this.bindGroup2=this.device.createBindGroup({label:"compute bindgroup - debug buffer",layout:this.bindGroupLayouts[2],entries:[{binding:0,resource:{buffer:this.debugBuffer}},{binding:1,resource:{buffer:this.debugPixelTargetBuffer}}]})}async logDebugResult(){await this.debugReadBuffer.mapAsync(GPUMapMode.READ);const e=new Float32Array(this.debugReadBuffer.getMappedRange());console.log(e),this.debugReadBuffer.unmap()}onUpdateCamera(){this.camera&&(this.resetSamplesAndTile(),mi.update(e=>(e.position=this.camera.position.clone(),this.camera instanceof Ml&&(e.target=this.camera.target.clone()),e)))}updateConfig(){var i;this.resetSamplesAndTile(),this.device.queue.writeBuffer(this.configUniformBuffer,0,this.configManager.getOptionsBuffer());let e=(i=this.scene)==null?void 0:i.envmap,t=!1;if(e&&Be.options.ENVMAP_SCALE!=e.scale){e.scale=Be.options.ENVMAP_SCALE;let{LightsCDFBufferData:s,LightsCDFBufferDataByteSize:n}=this.bvh.getLightsCDFBufferData();this.device.queue.writeBuffer(this.lightsCDFBuffer,0,s),t=!0}if(e&&(Be.options.ENVMAP_ROTX!=e.rotX||Be.options.ENVMAP_ROTY!=e.rotY)&&(e.rotX=Be.options.ENVMAP_ROTX,e.rotY=Be.options.ENVMAP_ROTY,t=!0),e&&t&&e.updateEnvmapInfoBuffer(this.device,this.envmapInfoBuffer),e&&Be.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION!=Be.prevOptions.ENVMAP_USE_COMPENSATED_DISTRIBUTION){let s=Be.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?e.compensatedDistribution.getBufferData():e.distribution.getBufferData();this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,s)}}updateTile(e){this.device.queue.writeBuffer(this.tileUniformBuffer,0,new Uint32Array([e.x,e.y,e.w,e.h]))}getFocusDistanceFromScreenPoint(e){if(!this.canvasSize||!this.bvh)return-1;let t=this.camera.screenPointToRay(e,this.canvasSize),i=this.bvh.intersectRay(t.ro,t.rd);return i.hit?this.camera.getFocusDistanceFromIntersectionPoint(i.hitPoint):-1}async updateScene(e){this.resetSamplesAndTile(),this.requestShaderCompilation=!0,this.scene=e,this.textureArraySegment.update(e.materials),Yc("initialize-luts-and-blue-noise-texture")&&(await this.lutManager.load("luts/torranceSparrowMultiScatter.LUT",En.MultiScatterTorranceSparrow),await this.lutManager.load("luts/multiScatterDielectricEo.LUT",En.MultiScatterDielectricEo),await this.lutManager.load("luts/multiScatterDielectricEoInverse.LUT",En.MultiScatterDielectricEoInverse),this.blueNoiseTexture=await Kc(this.device,"blue-noise-textures/256_256/HDR_RGBA_0.png")),this.camera&&this.camera.dispose(),this.camera=e.camera,this.camera.e.addEventListener("change",this.onUpdateCamera.bind(this)),this.onUpdateCamera(),this.bindGroup1=this.device.createBindGroup({label:"compute bindgroup - camera struct",layout:this.bindGroupLayouts[1],entries:[{binding:0,resource:{buffer:this.camera.cameraUniformBuffer}},{binding:1,resource:{buffer:this.randomsUniformBuffer}},{binding:2,resource:{buffer:this.configUniformBuffer}},{binding:3,resource:{buffer:this.tileUniformBuffer}}]});const t=new Cr(e);this.bvh=t;let{trianglesBufferData:i,trianglesBufferDataByteSize:s,BVHBufferData:n,BVHBufferDataByteSize:r}=t.getBufferData(),{LightsCDFBufferData:l,LightsCDFBufferDataByteSize:a}=t.getLightsCDFBufferData(),h=[];e.materials.forEach(y=>{y.getFloatsArray().forEach(_=>h.push(_))});let c=new Float32Array(h),u=e.envmap||new zn;Be.setStoreProperty({ENVMAP_SCALE:u.scale,ENVMAP_ROTX:u.rotX,ENVMAP_ROTY:u.rotY,shaderConfig:{...Be.options.shaderConfig,HAS_ENVMAP:!!e.envmap}});let f=Be.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?u.compensatedDistribution.getBufferData():u.distribution.getBufferData(),d=Be.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?u.compensatedDistribution.getArrayData():u.distribution.getArrayData(),{texture:p}=u.getTexture(this.device);this.trianglesBuffer=this.device.createBuffer({size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.materialsBuffer=this.device.createBuffer({size:c.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.bvhBuffer=this.device.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lightsCDFBuffer=this.device.createBuffer({size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.envmapPC2DBuffer=this.device.createBuffer({size:f.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let m=this.device.createBuffer({size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.envmapInfoBuffer=u.createEnvmapInfoBuffer(this.device),this.device.queue.writeBuffer(this.trianglesBuffer,0,i),this.device.queue.writeBuffer(this.materialsBuffer,0,c),this.device.queue.writeBuffer(this.bvhBuffer,0,n),this.device.queue.writeBuffer(this.lightsCDFBuffer,0,l),this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,f),this.device.queue.writeBuffer(m,0,d),this.bindGroup3=this.device.createBindGroup({label:"compute bindgroup - scene data",layout:this.bindGroupLayouts[3],entries:[{binding:0,resource:{buffer:this.trianglesBuffer}},{binding:1,resource:{buffer:this.materialsBuffer}},{binding:2,resource:{buffer:this.bvhBuffer}},{binding:3,resource:{buffer:this.lightsCDFBuffer}},{binding:4,resource:{buffer:m}},{binding:5,resource:{buffer:this.envmapPC2DBuffer}},{binding:6,resource:p.createView()},{binding:7,resource:{buffer:this.envmapInfoBuffer}},{binding:8,resource:this.textureArraySegment.textures128.createView({dimension:"2d-array"})},{binding:9,resource:this.textureArraySegment.textures512.createView({dimension:"2d-array"})},{binding:10,resource:this.textureArraySegment.textures1024.createView({dimension:"2d-array"})},{binding:11,resource:this.lutManager.getTexture().createView({dimension:"3d"})},{binding:12,resource:this.blueNoiseTexture.createView()}]})}resize(e,t,i){this.resetSegment.resize(e,t,i),this.tileSequence.setCanvasSize(e),this.resetSamplesAndTile(),this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"compute bindgroup",layout:this.bindGroupLayouts[0],entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}resetSamplesAndTile(){this.tileSequence.resetTile(),Oe.reset()}increaseTileSize(){this.tileSequence.canTileSizeBeIncreased()&&(this.tileSequence.increaseTileSize(),this.updateRandomsBuffer())}decreaseTileSize(){this.tileSequence.canTileSizeBeDecreased()&&(this.tileSequence.decreaseTileSize(),this.updateRandomsBuffer())}updateRandomsBuffer(){if(Be.options.SAMPLER_TYPE==It.HALTON){let e=new Float32Array(this.haltonSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(Be.options.SAMPLER_TYPE==It.UNIFORM){let e=new Float32Array(this.uniformSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(Be.options.SAMPLER_TYPE==It.BLUE_NOISE){let e=new Float32Array(this.blueNoiseSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(Be.options.SAMPLER_TYPE==It.CUSTOM_R2){let e=new Float32Array(this.customR2Sampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}}createPipeline(){const e=this.device.createShaderModule({label:"compute module",code:$u(this.lutManager)});this.pipeline=this.device.createComputePipeline({label:"compute pipeline",layout:this.layout,compute:{module:e,entryPoint:"compute"}})}compute(){if(this.requestShaderCompilation&&(this.createPipeline(),this.requestShaderCompilation=!1),!this.pipeline||!this.bindGroup0||!this.bindGroup1||!this.bindGroup2||!this.bindGroup3||!this.canvasSize)throw new Error("undefined bind groups / pipeline / canvasSize");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");Oe.count===0&&(this.tileSequence.resetTile(),this.resetSegment.reset(),this.haltonSampler.reset(),this.blueNoiseSampler.reset(),this.uniformSampler.reset());let e=this.tileSequence.getNextTile(()=>{this.updateRandomsBuffer(),Oe.increment()});this.updateTile(e);const t=this.tileSequence.getWorkGroupCount(),i=this.device.createCommandEncoder({label:"compute encoder"}),s={label:"compute pass"};this.passPerformance.updateComputePassDescriptor(s);const n=i.beginComputePass(s);n.setPipeline(this.pipeline),n.setBindGroup(0,this.bindGroup0),n.setBindGroup(1,this.bindGroup1),n.setBindGroup(2,this.bindGroup2),n.setBindGroup(3,this.bindGroup3),n.dispatchWorkgroups(t.x,t.y),n.end(),this.tileSequence.isTilePerformanceMeasureable()&&this.passPerformance.resolve(i),i.copyBufferToBuffer(this.debugBuffer,0,this.debugReadBuffer,0,this.debugBuffer.size);const r=i.finish();this.device.queue.submit([r])}}const Qc=`
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
`;class ef{constructor(e,t){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"bindGroup0",null);S(this,"canvasSize");S(this,"canvasSizeUniformBuffer");S(this,"scene");S(this,"camera");this.canvasSize=null,this.context=e;let i=Jt.device;this.device=i;const s=i.createShaderModule({label:"render shader",code:Qc}),n=i.createPipelineLayout({bindGroupLayouts:[Yu(i,["read-only-storage","read-only-storage","uniform","uniform"])]});this.pipeline=i.createRenderPipeline({label:"render pipeline",layout:n,vertex:{module:s,entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:t}]}}),this.canvasSizeUniformBuffer=i.createBuffer({size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}updateScene(e){this.scene=e,this.camera=e.camera}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t,size:t.size}},{binding:1,resource:{buffer:i,size:i.size}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}},{binding:3,resource:{buffer:this.camera.exposureUniformBuffer}}]})}render(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined render bind group");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");const e={label:"our basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},t=this.device.createCommandEncoder({label:"render encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.draw(6),i.end();const s=t.finish();this.device.queue.submit([s])}}function tf(o,e){window.addEventListener("keypress",t=>{t.key==o&&e()})}function Ir(o,e,t){var c,u;let i=[];ku(o),o=o.toNonIndexed(),t&&o.applyMatrix4(t);let s=o.attributes.position.array,n=o.attributes.normal.array,r=((c=o.attributes.uv)==null?void 0:c.array)||[],l=((u=o.attributes.tangent)==null?void 0:u.array)||[],a=r.length>0,h=l.length>0;for(let f=0;f<o.attributes.position.count;f+=3){let d=n[f*3+0],p=n[f*3+1],m=n[f*3+2],y=tt(s[f*3+0],s[f*3+1],s[f*3+2]),g=Dt(r[f*2+0],r[f*2+1]),_=tt(s[(f+1)*3+0],s[(f+1)*3+1],s[(f+1)*3+2]),w=n[(f+1)*3+0],x=n[(f+1)*3+1],C=n[(f+1)*3+2],E=Dt(r[(f+1)*2+0],r[(f+1)*2+1]),A=tt(s[(f+2)*3+0],s[(f+2)*3+1],s[(f+2)*3+2]),T=n[(f+2)*3+0],V=n[(f+2)*3+1],B=n[(f+2)*3+2],z=Dt(r[(f+2)*2+0],r[(f+2)*2+1]),O=tt(l[f*3+0],l[f*3+1],l[f*3+2]),G=tt(l[(f+1)*3+0],l[(f+1)*3+1],l[(f+1)*3+2]),P=tt(l[(f+2)*3+0],l[(f+2)*3+1],l[(f+2)*3+2]);i.push(new qs(y,_,A,e,tt(d,p,m),tt(w,x,C),tt(T,V,B),a?g:void 0,a?E:void 0,a?z:void 0,h?O:void 0,h?G:void 0,h?P:void 0))}return i}function mr(o,e,t=!1){let i=[];return t&&(o.updateMatrix(),o.updateMatrixWorld(!0),o instanceof vi)?(i=[...i,...Ir(o.geometry,e,o.matrixWorld)],i):(o.traverse(s=>{if(s.updateMatrix(),s.updateMatrixWorld(!0),s instanceof vi){let n=s,r=n.geometry;i=[...i,...Ir(r,e,n.matrixWorld)]}}),i)}function uo(o,e){if(e===nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===br||e===nl){let t=o.getIndex();if(t===null){const r=[],l=o.getAttribute("position");if(l!==void 0){for(let a=0;a<l.count;a++)r.push(a);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===br)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=o.clone();return n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class sf extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new wf(t)})}load(e,t,i,s){const n=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const h=Ns.extractUrlBase(e);r=Ns.resolveURL(h,this.path)}else r=Ns.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){s?s(h):console.error(h),n.manager.itemError(e),n.manager.itemEnd(e)},a=new $r(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(h){try{n.parse(h,r,function(c){t(c),n.manager.itemEnd(e)},l)}catch(c){l(c)}},i,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let n;const r={},l={},a=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===Rl){try{r[xe.KHR_BINARY_GLTF]=new _f(e)}catch(u){s&&s(u);return}n=JSON.parse(r[xe.KHR_BINARY_GLTF].content)}else n=JSON.parse(a.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Df(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[u.name]=u,r[u.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){const u=n.extensionsUsed[c],f=n.extensionsRequired||[];switch(u){case xe.KHR_MATERIALS_UNLIT:r[u]=new af;break;case xe.KHR_DRACO_MESH_COMPRESSION:r[u]=new Sf(n,this.dracoLoader);break;case xe.KHR_TEXTURE_TRANSFORM:r[u]=new Tf;break;case xe.KHR_MESH_QUANTIZATION:r[u]=new Mf;break;default:f.indexOf(u)>=0&&l[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(r),h.setPlugins(l),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,n){i.parse(e,t,s,n)})}}function nf(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rf{constructor(e){this.parser=e,this.name=xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let h;const c=new Ne(16777215);a.color!==void 0&&c.setRGB(a.color[0],a.color[1],a.color[2],mt);const u=a.range!==void 0?a.range:0;switch(a.type){case"directional":h=new Au(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Tu(c),h.distance=u;break;case"spot":h=new _u(c),h.distance=u,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,h.angle=a.spot.outerConeAngle,h.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return h.position.set(0,0,0),h.decay=2,di(h,a),a.intensity!==void 0&&(h.intensity=a.intensity),h.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],l=(n.extensions&&n.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(a){return i._getNodeRef(t.cache,l,a)})}}class af{constructor(){this.name=xe.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,t,i){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const r=n.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],mt),e.opacity=r[3]}n.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",n.baseColorTexture,ft))}return Promise.all(s)}}class of{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class lf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const l=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(l,l)}return Promise.all(n)}}class hf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}}class uf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const l=r.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],mt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,ft)),r.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}}class cf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}}class ff{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const l=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(l[0],l[1],l[2],mt),Promise.all(n)}}class df{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=s.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class pf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const l=r.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(l[0],l[1],l[2],mt),r.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,ft)),Promise.all(n)}}class mf{constructor(e){this.parser=e,this.name=xe.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(i.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}}class gf{constructor(e){this.parser=e,this.name=xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(i.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}}class yf{constructor(e){this.parser=e,this.name=xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const n=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,r)}}class vf{constructor(e){this.parser=e,this.name=xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],l=s.images[r.source];let a=i.textureLoader;if(l.uri){const h=i.options.manager.getHandler(l.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,r.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xf{constructor(e){this.parser=e,this.name=xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],l=s.images[r.source];let a=i.textureLoader;if(l.uri){const h=i.options.manager.getHandler(l.uri);h!==null&&(a=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,r.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bf{constructor(e){this.name=xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(l){const a=s.byteOffset||0,h=s.byteLength||0,c=s.count,u=s.byteStride,f=new Uint8Array(l,a,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(c,u,f,s.mode,s.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(c*u);return r.decodeGltfBuffer(new Uint8Array(d),c,u,f,s.mode,s.filter),d})})}else return null}}class wf{constructor(e){this.name=xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==yt.TRIANGLES&&h.mode!==yt.TRIANGLE_STRIP&&h.mode!==yt.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=i.extensions[this.name].attributes,l=[],a={};for(const h in r)l.push(this.parser.getDependency("accessor",r[h]).then(c=>(a[h]=c,a[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const c=h.pop(),u=c.isGroup?c.children:[c],f=h[0].count,d=[];for(const p of u){const m=new me,y=new M,g=new xi,_=new M(1,1,1),w=new su(p.geometry,p.material,f);for(let x=0;x<f;x++)a.TRANSLATION&&y.fromBufferAttribute(a.TRANSLATION,x),a.ROTATION&&g.fromBufferAttribute(a.ROTATION,x),a.SCALE&&_.fromBufferAttribute(a.SCALE,x),w.setMatrixAt(x,m.compose(y,g,_));for(const x in a)if(x==="_COLOR_0"){const C=a[x];w.instanceColor=new Mr(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,a[x]);ke.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const Rl="glTF",As=12,co={JSON:1313821514,BIN:5130562};class _f{constructor(e){this.name=xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-As,n=new DataView(e,As);let r=0;for(;r<s;){const l=n.getUint32(r,!0);r+=4;const a=n.getUint32(r,!0);if(r+=4,a===co.JSON){const h=new Uint8Array(e,As+r,l);this.content=i.decode(h)}else if(a===co.BIN){const h=As+r;this.body=e.slice(h,h+l)}r+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sf{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,l={},a={},h={};for(const c in r){const u=zr[c]||c.toLowerCase();l[u]=r[c]}for(const c in e.attributes){const u=zr[c]||c.toLowerCase();if(r[c]!==void 0){const f=i.accessors[e.attributes[c]],d=rs[f.componentType];h[u]=d.name,a[u]=f.normalized===!0}}return t.getDependency("bufferView",n).then(function(c){return new Promise(function(u,f){s.decodeDracoFile(c,function(d){for(const p in d.attributes){const m=d.attributes[p],y=a[p];y!==void 0&&(m.normalized=y)}u(d)},l,h,mt,f)})})}}class Tf{constructor(){this.name=xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Mf{constructor(){this.name=xe.KHR_MESH_QUANTIZATION}}class Bl extends Hs{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let r=0;r!==s;r++)t[r]=i[n+r];return t}interpolate_(e,t,i,s){const n=this.resultBuffer,r=this.sampleValues,l=this.valueSize,a=l*2,h=l*3,c=s-t,u=(i-t)/c,f=u*u,d=f*u,p=e*h,m=p-h,y=-2*d+3*f,g=d-f,_=1-y,w=g-f+u;for(let x=0;x!==l;x++){const C=r[m+x+l],E=r[m+x+a]*c,A=r[p+x+l],T=r[p+x]*c;n[x]=_*C+w*E+y*A+g*T}return n}}const Af=new xi;class Ef extends Bl{interpolate_(e,t,i,s){const n=super.interpolate_(e,t,i,s);return Af.fromArray(n).normalize().toArray(n),n}}const yt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fo={9728:ks,9729:yi,9984:Kl,9985:Jl,9986:Zl,9987:Ln},po={33071:Bi,33648:xr,10497:Os},gr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cf={CUBICSPLINE:void 0,LINEAR:as,STEP:Us},yr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rf(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Wr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),o.DefaultMaterial}function Ei(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function di(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bf(o,e,t){let i=!1,s=!1,n=!1;for(let h=0,c=e.length;h<c;h++){const u=e[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(n=!0),i&&s&&n)break}if(!i&&!s&&!n)return Promise.resolve(o);const r=[],l=[],a=[];for(let h=0,c=e.length;h<c;h++){const u=e[h];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;l.push(f)}if(n){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;a.push(f)}}return Promise.all([Promise.all(r),Promise.all(l),Promise.all(a)]).then(function(h){const c=h[0],u=h[1],f=h[2];return i&&(o.morphAttributes.position=c),s&&(o.morphAttributes.normal=u),n&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function Pf(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function If(o){let e;const t=o.extensions&&o.extensions[xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vr(t.attributes):e=o.indices+":"+vr(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+vr(o.targets[i]);return e}function vr(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Nr(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zf(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Nf=new me;class Df{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,n=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&n<98?this.textureLoader=new Ci(this.options.manager):this.textureLoader=new Eu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const l={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:i,userData:{}};return Ei(n,l,s),di(l,s),Promise.all(i._invokeAll(function(a){return a.afterRoot&&a.afterRoot(l)})).then(function(){for(const a of l.scenes)a.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){const r=t[s].joints;for(let l=0,a=r.length;l<a;l++)e[r[l]].isBone=!0}for(let s=0,n=e.length;s<n;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),n=(r,l)=>{const a=this.associations.get(r);a!=null&&this.associations.set(l,a);for(const[h,c]of r.children.entries())n(c,l.children[h])};return n(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const n=e(t[s]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(n,r){i.load(Ns.resolveURL(t.uri,s.path),n,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=gr[s.type],l=rs[s.componentType],a=s.normalized===!0,h=new l(s.count*r);return Promise.resolve(new xt(h,r,a))}const n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(r){const l=r[0],a=gr[s.type],h=rs[s.componentType],c=h.BYTES_PER_ELEMENT,u=c*a,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let m,y;if(d&&d!==u){const g=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let w=t.cache.get(_);w||(m=new h(l,g*d,s.count*d/c),w=new Jh(m,d/c),t.cache.add(_,w)),y=new Ur(w,a,f%d/c,p)}else l===null?m=new h(s.count*a):m=new h(l,f,s.count*a),y=new xt(m,a,p);if(s.sparse!==void 0){const g=gr.SCALAR,_=rs[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,C=new _(r[1],w,s.sparse.count*g),E=new h(r[2],x,s.sparse.count*a);l!==null&&(y=new xt(y.array.slice(),y.itemSize,y.normalized));for(let A=0,T=C.length;A<T;A++){const V=C[A];if(y.setX(V,E[A*a]),a>=2&&y.setY(V,E[A*a+1]),a>=3&&y.setZ(V,E[A*a+2]),a>=4&&y.setW(V,E[A*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,r=t.images[n];let l=this.textureLoader;if(r.uri){const a=i.manager.getHandler(r.uri);a!==null&&(l=a)}return this.loadTextureImage(e,n,l)}loadTextureImage(e,t,i){const s=this,n=this.json,r=n.textures[e],l=n.images[t],a=(l.uri||l.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const h=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=r.name||l.name||"",c.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(c.name=l.uri);const f=(n.samplers||{})[r.sampler]||{};return c.magFilter=fo[f.magFilter]||yi,c.minFilter=fo[f.minFilter]||Ln,c.wrapS=po[f.wrapS]||Os,c.wrapT=po[f.wrapT]||Os,s.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=h,h}loadImageSource(e,t){const i=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],l=self.URL||self.webkitURL;let a=r.uri||"",h=!1;if(r.bufferView!==void 0)a=i.getDependency("bufferView",r.bufferView).then(function(u){h=!0;const f=new Blob([u],{type:r.mimeType});return a=l.createObjectURL(f),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(a).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(m){const y=new vt(m);y.needsUpdate=!0,f(y)}),t.load(Ns.resolveURL(u,n.path),p,void 0,d)})}).then(function(u){return h===!0&&l.revokeObjectURL(a),u.userData.mimeType=r.mimeType||zf(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),u});return this.sourceCache[e]=c,c}assignTexture(e,t,i,s){const n=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),n.extensions[xe.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[xe.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const a=n.associations.get(r);r=n.extensions[xe.KHR_TEXTURE_TRANSFORM].extendTexture(r,l),n.associations.set(r,a)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+i.uuid;let a=this.cache.get(l);a||(a=new dl,zi.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,a.sizeAttenuation=!1,this.cache.add(l,a)),i=a}else if(e.isLine){const l="LineBasicMaterial:"+i.uuid;let a=this.cache.get(l);a||(a=new fl,zi.prototype.copy.call(a,i),a.color.copy(i.color),a.map=i.map,this.cache.add(l,a)),i=a}if(s||n||r){let l="ClonedMaterial:"+i.uuid+":";s&&(l+="derivative-tangents:"),n&&(l+="vertex-colors:"),r&&(l+="flat-shading:");let a=this.cache.get(l);a||(a=i.clone(),n&&(a.vertexColors=!0),r&&(a.flatShading=!0),s&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(l,a),this.associations.set(a,this.associations.get(i))),i=a}e.material=i}getMaterialType(){return Wr}loadMaterial(e){const t=this,i=this.json,s=this.extensions,n=i.materials[e];let r;const l={},a=n.extensions||{},h=[];if(a[xe.KHR_MATERIALS_UNLIT]){const u=s[xe.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),h.push(u.extendParams(l,n,t))}else{const u=n.pbrMetallicRoughness||{};if(l.color=new Ne(1,1,1),l.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],mt),l.opacity=f[3]}u.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",u.baseColorTexture,ft)),l.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,l.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",u.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}n.doubleSided===!0&&(l.side=jl);const c=n.alphaMode||yr.OPAQUE;if(c===yr.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,c===yr.MASK&&(l.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&r!==ts&&(h.push(t.assignTexture(l,"normalMap",n.normalTexture)),l.normalScale=new Q(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;l.normalScale.set(u,u)}if(n.occlusionTexture!==void 0&&r!==ts&&(h.push(t.assignTexture(l,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&r!==ts){const u=n.emissiveFactor;l.emissive=new Ne().setRGB(u[0],u[1],u[2],mt)}return n.emissiveTexture!==void 0&&r!==ts&&h.push(t.assignTexture(l,"emissiveMap",n.emissiveTexture,ft)),Promise.all(h).then(function(){const u=new r(l);return n.name&&(u.name=n.name),di(u,n),t.associations.set(u,{materials:e}),n.extensions&&Ei(s,u,n),u})}createUniqueName(e){const t=Te.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function n(l){return i[xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(a){return mo(a,l,t)})}const r=[];for(let l=0,a=e.length;l<a;l++){const h=e[l],c=If(h),u=s[c];if(u)r.push(u.promise);else{let f;h.extensions&&h.extensions[xe.KHR_DRACO_MESH_COMPRESSION]?f=n(h):f=mo(new bi,h,t),s[c]={primitive:h,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,s=this.extensions,n=i.meshes[e],r=n.primitives,l=[];for(let a=0,h=r.length;a<h;a++){const c=r[a].material===void 0?Rf(this.cache):this.getDependency("material",r[a].material);l.push(c)}return l.push(t.loadGeometries(r)),Promise.all(l).then(function(a){const h=a.slice(0,a.length-1),c=a[a.length-1],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d],y=r[d];let g;const _=h[d];if(y.mode===yt.TRIANGLES||y.mode===yt.TRIANGLE_STRIP||y.mode===yt.TRIANGLE_FAN||y.mode===void 0)g=n.isSkinnedMesh===!0?new eu(m,_):new vi(m,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),y.mode===yt.TRIANGLE_STRIP?g.geometry=uo(g.geometry,nl):y.mode===yt.TRIANGLE_FAN&&(g.geometry=uo(g.geometry,br));else if(y.mode===yt.LINES)g=new nu(m,_);else if(y.mode===yt.LINE_STRIP)g=new qr(m,_);else if(y.mode===yt.LINE_LOOP)g=new ru(m,_);else if(y.mode===yt.POINTS)g=new au(m,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(g.geometry.morphAttributes).length>0&&Pf(g,n),g.name=t.createUniqueName(n.name||"mesh_"+e),di(g,n),y.extensions&&Ei(s,g,y),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return n.extensions&&Ei(s,u[0],n),u[0];const f=new lr;n.extensions&&Ei(s,f,n),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kr(Th.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ul(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),di(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,n=t.joints.length;s<n;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const n=s.pop(),r=s,l=[],a=[];for(let h=0,c=r.length;h<c;h++){const u=r[h];if(u){l.push(u);const f=new me;n!==null&&f.fromArray(n.array,h*16),a.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Gr(l,a)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,r=[],l=[],a=[],h=[],c=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],p=s.samplers[d.sampler],m=d.target,y=m.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;m.node!==void 0&&(r.push(this.getDependency("node",y)),l.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",_)),h.push(p),c.push(m))}return Promise.all([Promise.all(r),Promise.all(l),Promise.all(a),Promise.all(h),Promise.all(c)]).then(function(u){const f=u[0],d=u[1],p=u[2],m=u[3],y=u[4],g=[];for(let _=0,w=f.length;_<w;_++){const x=f[_],C=d[_],E=p[_],A=m[_],T=y[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const V=i._createAnimationTracks(x,C,E,A,T);if(V)for(let B=0;B<V.length;B++)g.push(V[B])}return new du(n,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(n){const r=i._getNodeRef(i.meshCache,s.mesh,n);return s.weights!==void 0&&r.traverse(function(l){if(l.isMesh)for(let a=0,h=s.weights.length;a<h;a++)l.morphTargetInfluences[a]=s.weights[a]}),r})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],n=i._loadNodeShallow(e),r=[],l=s.children||[];for(let h=0,c=l.length;h<c;h++)r.push(i.getDependency("node",l[h]));const a=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([n,Promise.all(r),a]).then(function(h){const c=h[0],u=h[1],f=h[2];f!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Nf)});for(let d=0,p=u.length;d<p;d++)c.add(u[d]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],r=n.name?s.createUniqueName(n.name):"",l=[],a=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return a&&l.push(a),n.camera!==void 0&&l.push(s.getDependency("camera",n.camera).then(function(h){return s._getNodeRef(s.cameraCache,n.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let c;if(n.isBone===!0?c=new cl:h.length>1?c=new lr:h.length===1?c=h[0]:c=new ke,c!==h[0])for(let u=0,f=h.length;u<f;u++)c.add(h[u]);if(n.name&&(c.userData.name=n.name,c.name=r),di(c,n),n.extensions&&Ei(i,c,n),n.matrix!==void 0){const u=new me;u.fromArray(n.matrix),c.applyMatrix4(u)}else n.translation!==void 0&&c.position.fromArray(n.translation),n.rotation!==void 0&&c.quaternion.fromArray(n.rotation),n.scale!==void 0&&c.scale.fromArray(n.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,n=new lr;i.name&&(n.name=s.createUniqueName(i.name)),di(n,i),i.extensions&&Ei(t,n,i);const r=i.nodes||[],l=[];for(let a=0,h=r.length;a<h;a++)l.push(s.getDependency("node",r[a]));return Promise.all(l).then(function(a){for(let c=0,u=a.length;c<u;c++)n.add(a[c]);const h=c=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof zi||f instanceof vt)&&u.set(f,d);return c.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=h(n),n})}_createAnimationTracks(e,t,i,s,n){const r=[],l=e.name?e.name:e.uuid,a=[];ui[n.path]===ui.weights?e.traverse(function(f){f.morphTargetInfluences&&a.push(f.name?f.name:f.uuid)}):a.push(l);let h;switch(ui[n.path]){case ui.weights:h=os;break;case ui.rotation:h=Ni;break;case ui.position:case ui.scale:h=ls;break;default:switch(i.itemSize){case 1:h=os;break;case 2:case 3:default:h=ls;break}break}const c=s.interpolation!==void 0?Cf[s.interpolation]:as,u=this._getArrayFromAccessor(i);for(let f=0,d=a.length;f<d;f++){const p=new h(a[f]+"."+ui[n.path],t.array,u,c);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Nr(t.constructor),s=new Float32Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=t[n]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ni?Ef:Bl;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Lf(o,e,t){const i=e.attributes,s=new ti;if(i.POSITION!==void 0){const l=t.json.accessors[i.POSITION],a=l.min,h=l.max;if(a!==void 0&&h!==void 0){if(s.set(new M(a[0],a[1],a[2]),new M(h[0],h[1],h[2])),l.normalized){const c=Nr(rs[l.componentType]);s.min.multiplyScalar(c),s.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const l=new M,a=new M;for(let h=0,c=n.length;h<c;h++){const u=n[h];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(a.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),a.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),a.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const m=Nr(rs[f.componentType]);a.multiplyScalar(m)}l.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}o.boundingBox=s;const r=new Lt;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=r}function mo(o,e,t){const i=e.attributes,s=[];function n(r,l){return t.getDependency("accessor",r).then(function(a){o.setAttribute(l,a)})}for(const r in i){const l=zr[r]||r.toLowerCase();l in o.attributes||s.push(n(i[r],l))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(l){o.setIndex(l)});s.push(r)}return ut.workingColorSpace!==mt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),di(o,e),Lf(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Bf(o,e.targets,t):o})}async function Ff(){let o=[],e=[],t=new vi(new In(100,100));t.position.set(0,0,0),t.rotation.x=-Math.PI*.5;let i=(await new Ci().loadAsync("scene-assets/textures/grey-cartago/diff.png")).source.data,s=(await new Ci().loadAsync("scene-assets/textures/grey-cartago/disp.png")).source.data,n=(await new Ci().loadAsync("scene-assets/textures/grey-cartago/rough.png")).source.data;e.push(new Xt({color:new Ne(.5,.5,.5),roughness:.2,anisotropy:0,map:i,roughnessMap:n,bumpMap:s,bumpStrength:4.35,uvRepeat:new Q(20,20),mapUvRepeat:new Q(20,20)})),o=[...o,...mr(t,e.length-1)];let r=new vi(new In(35,15));r.position.set(20,7.25,-7.5),r.rotation.y=Math.PI*.7;let l=(await new Ci().loadAsync("scene-assets/textures/graff.png")).source.data,a=(await new Ci().loadAsync("scene-assets/textures/graff-2.png")).source.data,h=(await new Ci().loadAsync("scene-assets/textures/bump-test.png")).source.data;e.push(new An({color:new Ne(.9,.9,.9),map:a,bumpMap:h,bumpStrength:5,mapUvRepeat:new Q(1.3,1.3),uvRepeat:new Q(2.25,1.5)})),o=[...o,...mr(r,e.length-1)];let u=(await new sf().loadAsync("scene-assets/models/horse-statue-uv.glb")).scene.children[0];u.scale.set(-2.15,2.15,2.15),u.position.set(-.5,0,-1.5),u.rotation.z=-1.4,e.push(new Kt({absorption:new Ne(.25,.58,.99).multiplyScalar(4.5),roughness:.03,anisotropy:0,eta:1.6})),o=[...o,...mr(u,e.length-1)];let f=new Hr(2,75,75);f.translate(2,2,1),e.push(new Xt({color:new Ne(1,1,1),map:l,roughness:.2,anisotropy:1})),o=[...o,...Ir(f,e.length-1,new me().identity())];const d=new Ml;d.set(new M(-12.3,5.4,5.3),new M(-2.8,2.6,1.3)),d.movementSpeed=.15,d.aperture=.17,d.fov=.53,d.focusDistance=13.246386264701139,d.exposure=1.85;let p=new zn;return await p.fromEquirect("scene-assets/envmaps/lebombo_1k.hdr"),p.scale=1,p.rotX=5.5,p.rotY=1.7,{triangles:o,materials:e,camera:d,envmap:p}}const Pl=Math.sqrt(3),Of=.5*(Pl-1),Es=(3-Pl)/6,go=o=>Math.floor(o)|0,yo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function kf(o=Math.random){const e=Uf(o),t=new Float64Array(e).map(s=>yo[s%12*2]),i=new Float64Array(e).map(s=>yo[s%12*2+1]);return function(n,r){let l=0,a=0,h=0;const c=(n+r)*Of,u=go(n+c),f=go(r+c),d=(u+f)*Es,p=u-d,m=f-d,y=n-p,g=r-m;let _,w;y>g?(_=1,w=0):(_=0,w=1);const x=y-_+Es,C=g-w+Es,E=y-1+2*Es,A=g-1+2*Es,T=u&255,V=f&255;let B=.5-y*y-g*g;if(B>=0){const G=T+e[V],P=t[G],I=i[G];B*=B,l=B*B*(P*y+I*g)}let z=.5-x*x-C*C;if(z>=0){const G=T+_+e[V+w],P=t[G],I=i[G];z*=z,a=z*z*(P*x+I*C)}let O=.5-E*E-A*A;if(O>=0){const G=T+1+e[V+1],P=t[G],I=i[G];O*=O,h=O*O*(P*E+I*A)}return 70*(l+a+h)}}function Uf(o){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const s=i+~~(o()*(256-i)),n=t[i];t[i]=t[s],t[s]=n}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var Il={exports:{}};(function(o,e){(function(t,i){o.exports=i()})(wi,function(){return t.importState=function(s){var n=new t;return n.importState(s),n},t;function t(){return function(s){var n=0,r=0,l=0,a=1;s.length==0&&(s=[+new Date]);var h=i();n=h(" "),r=h(" "),l=h(" ");for(var c=0;c<s.length;c++)n-=h(s[c]),n<0&&(n+=1),r-=h(s[c]),r<0&&(r+=1),l-=h(s[c]),l<0&&(l+=1);h=null;var u=function(){var f=2091639*n+a*23283064365386963e-26;return n=r,r=l,l=f-(a=f|0)};return u.next=u,u.uint32=function(){return u()*4294967296},u.fract53=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.version="Alea 0.9",u.args=s,u.exportState=function(){return[n,r,l,a]},u.importState=function(f){n=+f[0]||0,r=+f[1]||0,l=+f[2]||0,a=+f[3]||0},u}(Array.prototype.slice.call(arguments))}function i(){var s=4022871197,n=function(r){r=r.toString();for(var l=0;l<r.length;l++){s+=r.charCodeAt(l);var a=.02519603282416938*s;s=a>>>0,a-=s,a*=s,s=a>>>0,a-=s,s+=a*4294967296}return(s>>>0)*23283064365386963e-26};return n.version="Mash 0.9",n}})})(Il);var Vf=Il.exports;const Gf=Al(Vf),qf=Gf("seed");kf(qf);Rt.use("test-string");Rt.float;async function Hf(){return Ff()}const Wf=`
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
`;class $f{constructor(e,t){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"bindGroup0");S(this,"vertexBuffer");S(this,"renderModeBuffer");S(this,"depthStencilAttachment",null);S(this,"scene");S(this,"sceneUpdateRequired",!1);S(this,"vertexCount",0);S(this,"renderMode","normal");this.context=e;let i=Jt.device;this.device=i;const s=i.createShaderModule({label:"preview segment shader",code:Wf});this.pipeline=i.createRenderPipeline({label:"preview segment pipeline",layout:"auto",vertex:{module:s,buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}],entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:t}]},depthStencil:{format:"depth24plus-stencil8",depthWriteEnabled:!0,depthCompare:"less-equal"},primitive:{cullMode:"none"}}),this.renderModeBuffer=i.createBuffer({size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}createDepthBufferResources(e){let i={size:{width:e.x,height:e.y,depthOrArrayLayers:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT},n=this.device.createTexture(i).createView();this.depthStencilAttachment={view:n,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store",stencilLoadOp:"clear",stencilStoreOp:"discard"}}resize(e){this.createDepthBufferResources(e)}updateScene(e){this.scene=e,this.sceneUpdateRequired=!0,this.bindGroup0=this.device.createBindGroup({label:"preview bindgroup - camera matrices",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.scene.camera.cameraMatrixUniformBuffer}},{binding:1,resource:{buffer:this.scene.camera.projectionMatrixUniformBuffer}},{binding:2,resource:{buffer:this.scene.camera.cameraPositionUniformBuffer}},{binding:3,resource:{buffer:this.renderModeBuffer}}]})}processScene(){this.vertexCount=this.scene.triangles.length*3;let e=new Float32Array(this.vertexCount*6);for(let t=0;t<this.scene.triangles.length;t++){let i=this.scene.triangles[t],s=[i.v0,i.v1,i.v2];for(let n=0;n<3;n++)e[(t*3+n)*6+0]=s[n].x,e[(t*3+n)*6+1]=s[n].y,e[(t*3+n)*6+2]=s[n].z,e[(t*3+n)*6+3]=i["norm"+n].x,e[(t*3+n)*6+4]=i["norm"+n].y,e[(t*3+n)*6+5]=i["norm"+n].z}this.vertexBuffer=this.device.createBuffer({label:"preview segment vertex buffer",size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,e),this.sceneUpdateRequired=!1}setMode(e){e!=this.renderMode&&(this.renderMode=e,this.device.queue.writeBuffer(this.renderModeBuffer,0,new Float32Array([this.renderMode=="normal"?0:1])))}render(){if(this.sceneUpdateRequired&&this.processScene(),!this.depthStencilAttachment)throw new Error("missing depth stencil attachment");let e={label:"preview segment renderPass",colorAttachments:[{clearValue:[.3,.3,.3,1],loadOp:"clear",storeOp:"store",view:this.context.getCurrentTexture().createView()}],depthStencilAttachment:this.depthStencilAttachment};const t=this.device.createCommandEncoder({label:"preview segment encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.setVertexBuffer(0,this.vertexBuffer),i.draw(this.vertexCount),i.end();const s=t.finish();this.device.queue.submit([s])}}function vo(){return new Promise(o=>{setTimeout(o,10)})}async function jf(o){var t;let e="Your browser does not support WebGPU or one of the required features";try{const i=await((t=navigator.gpu)==null?void 0:t.requestAdapter()),s=i==null?void 0:i.features.has("timestamp-query"),n=await(i==null?void 0:i.requestDevice({requiredFeatures:[...s?["timestamp-query"]:[],"float32-filterable"]})),r=o.getContext("webgpu");if(!n||!r)throw Er.set(e),new Error(e);return{device:n,context:r}}catch{throw Er.set(e),new Error(e)}}`${_l}${bl}${wl}${pt.shaderStruct()}${qs.shaderStruct()}${Xt.shaderBRDF()}${Kt.shaderStruct()}${Kt.shaderBRDF()}`;let ct,Ps,gi,ci,Mt=new Q(-1,-1);const Jt={device:null,context:null,format:null};async function Yf(o){const{device:e,context:t}=await jf(o),i=navigator.gpu.getPreferredCanvasFormat();t.configure({device:e,format:i}),Jt.device=e,Jt.context=t,Jt.format=i;const s=new xl;return ct=new Jc(s),Rs.set("creating scene"),ci=await Hf(),ci.camera.setCanvasContainer(o.parentElement),Rs.set("processing bvh and materials"),await vo(),await ct.updateScene(ci),ct.setDebugPixelTarget(400,300),Ps=new ef(t,i),Ps.updateScene(ci),gi=new $f(t,i),gi.updateScene(ci),new ResizeObserver(r=>{xo(o,e,ci,ct,Ps,gi)}).observe(o),xo(o,e,ci,ct,Ps,gi),tf("l",()=>ct.logDebugResult()),Rs.set("compiling shaders"),await vo(),zl(),Rs.set(""),{getFocusDistanceFromScreenPoint:ct.getFocusDistanceFromScreenPoint.bind(ct)}}function xo(o,e,t,i,s,n){if(Mt.x==o.width&&Mt.y==o.height)return;Mt=Dt(o.width,o.height),t.camera.onCanvasResize(Mt);const r=new Float32Array(Mt.x*Mt.y*4),l=e.createBuffer({label:"work buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(l,0,r);const a=e.createBuffer({label:"work buffer",size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});e.queue.writeBuffer(a,0,new Uint32Array(Mt.x*Mt.y)),i.resize(Mt,l,a),s.resize(Mt,l,a),n.resize(Mt)}let bo="";async function zl(){requestAnimationFrame(zl),ci.camera.renderLoopUpdate();let o=st(Cs);bo=="compute"&&o!="compute"&&ct.resetSamplesAndTile(),o=="compute"?Zf():o=="preview"?Xf():o=="realtime"&&Kf(),bo=o}function Xf(){gi.setMode("normal"),gi.render()}function Kf(){gi.setMode("camera-light"),gi.render()}function Zf(){Oe.count>=Oe.limit||(ct.compute(),ct.passPerformance.getDeltaInMilliseconds().then(o=>{o<25?ct.increaseTileSize():o>100&&ct.decreaseTileSize(),Oe.setPerformance(o)}).catch(()=>{}),Ps.render())}function Jf(o){let e,t,i,s=o[0]?"-":"+",n,r,l,a,h,c,u,f,d;const p=o[8].default,m=kl(p,o,o[7],null);return{c(){e=L("div"),t=L("header"),i=L("button"),n=de(s),r=H(),l=L("p"),a=de(o[1]),h=H(),c=L("div"),m&&m.c(),this.h()},l(y){e=F(y,"DIV",{class:!0});var g=j(e);t=F(g,"HEADER",{class:!0});var _=j(t);i=F(_,"BUTTON",{class:!0});var w=j(i);n=pe(w,s),w.forEach(b),r=W(_),l=F(_,"P",{class:!0});var x=j(l);a=pe(x,o[1]),x.forEach(b),_.forEach(b),h=W(g),c=F(g,"DIV",{class:!0});var C=j(c);m&&m.l(C),C.forEach(b),g.forEach(b),this.h()},h(){v(i,"class","svelte-16862rw"),v(l,"class","svelte-16862rw"),v(t,"class","svelte-16862rw"),J(t,"expanded",o[0]),v(c,"class","folder-slot-container svelte-16862rw"),J(c,"expanded",o[0]),J(c,"disabled",o[2]),v(e,"class","container svelte-16862rw"),J(e,"roundBox",o[3]),J(e,"childOfAnotherFolder",o[4]),J(e,"disabled",o[2])},m(y,g){N(y,e,g),R(e,t),R(t,i),R(i,n),R(t,r),R(t,l),R(l,a),R(e,h),R(e,c),m&&m.m(c,null),o[9](e),u=!0,f||(d=[oe(i,"click",o[6]),oe(l,"click",o[6])],f=!0)},p(y,[g]){(!u||g&1)&&s!==(s=y[0]?"-":"+")&&Ge(n,s),(!u||g&2)&&Ge(a,y[1]),(!u||g&1)&&J(t,"expanded",y[0]),m&&m.p&&(!u||g&128)&&Ul(m,p,y,y[7],u?Gl(p,y[7],g,null):Vl(y[7]),null),(!u||g&1)&&J(c,"expanded",y[0]),(!u||g&4)&&J(c,"disabled",y[2]),(!u||g&8)&&J(e,"roundBox",y[3]),(!u||g&16)&&J(e,"childOfAnotherFolder",y[4]),(!u||g&4)&&J(e,"disabled",y[2])},i(y){u||(K(m,y),u=!0)},o(y){Z(m,y),u=!1},d(y){y&&b(e),m&&m.d(y),o[9](null),f=!1,rt(d)}}}function Qf(o,e,t){let{$$slots:i={},$$scope:s}=e,{name:n}=e,{disabled:r=!1}=e,{expanded:l=!0}=e,{roundBox:a=!1}=e,h=!1,c;Xo(()=>{if(c){const d=c.parentElement;d&&d.classList.contains("folder-slot-container")&&t(4,h=!0)}});function u(){t(0,l=!l)}function f(d){nt[d?"unshift":"push"](()=>{c=d,t(5,c)})}return o.$$set=d=>{"name"in d&&t(1,n=d.name),"disabled"in d&&t(2,r=d.disabled),"expanded"in d&&t(0,l=d.expanded),"roundBox"in d&&t(3,a=d.roundBox),"$$scope"in d&&t(7,s=d.$$scope)},[l,n,r,a,h,c,u,s,i,f]}class At extends Ee{constructor(e){super(),Ce(this,e,Qf,Jf,Ae,{name:1,disabled:2,expanded:0,roundBox:3})}}function ed(o){let e,t;return{c(){e=qe("svg"),t=qe("path"),this.h()},l(i){e=He(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var s=j(e);t=He(s,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),j(t).forEach(b),s.forEach(b),this.h()},h(){v(t,"fill-rule","evenodd"),v(t,"clip-rule","evenodd"),v(t,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),v(t,"transform","scale(64)"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"viewBox","0 0 1024 1024"),v(e,"fill","none"),v(e,"class","svelte-1cmb9l6")},m(i,s){N(i,e,s),R(e,t)},p:ye,i:ye,o:ye,d(i){i&&b(e)}}}class td extends Ee{constructor(e){super(),Ce(this,e,null,ed,Ae,{})}}function id(o){let e,t;return{c(){e=qe("svg"),t=qe("path"),this.h()},l(i){e=He(i,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var s=j(e);t=He(s,"path",{opacity:!0,d:!0}),j(t).forEach(b),s.forEach(b),this.h()},h(){v(t,"opacity","1.00"),v(t,"d"," M 519.58 71.87 C 547.39 70.05 575.34 71.56 602.98 74.87 C 684.61 84.97 763.33 117.32 828.56 167.41 C 887.93 212.71 936.25 272.38 968.11 339.93 C 1010.50 429.19 1023.22 532.02 1004.36 628.96 C 988.09 714.73 946.85 795.48 887.30 859.27 C 835.86 914.65 770.88 957.42 699.51 982.39 C 603.65 1016.28 496.76 1017.63 400.05 986.29 C 341.49 967.45 286.76 936.86 240.01 896.89 C 180.20 846.03 133.40 779.93 105.63 706.48 C 73.48 622.27 66.61 528.74 85.74 440.71 C 101.73 365.93 136.69 295.37 186.16 237.10 C 224.39 191.97 271.17 154.09 323.36 126.26 C 383.69 93.97 451.24 75.16 519.58 71.87 M 518.62 161.85 C 494.01 163.45 469.56 167.47 445.73 173.82 C 377.19 191.91 314.32 230.21 266.21 282.21 C 223.03 328.46 191.72 385.72 176.41 447.13 C 163.28 499.56 161.50 554.77 171.06 607.96 C 178.40 648.94 192.65 688.68 213.03 724.99 C 250.87 792.45 309.69 848.00 379.39 881.58 C 438.01 910.02 504.10 922.47 569.06 918.17 C 623.79 914.69 677.74 899.15 725.81 872.72 C 799.60 832.31 859.46 766.81 892.51 689.39 C 915.95 634.98 925.97 574.99 922.23 515.91 C 918.02 445.38 893.43 376.20 851.96 318.98 C 804.96 253.62 736.91 203.43 660.09 179.05 C 614.58 164.43 566.29 158.70 518.62 161.85 Z"),v(e,"viewBox","0 0 1088 1076"),v(e,"version","1.1"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(i,s){N(i,e,s),R(e,t)},p:ye,i:ye,o:ye,d(i){i&&b(e)}}}class sd extends Ee{constructor(e){super(),Ce(this,e,null,id,Ae,{})}}function nd(o){let e,t,i;return{c(){e=qe("svg"),t=qe("path"),i=qe("path"),this.h()},l(s){e=He(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=j(e);t=He(n,"path",{opacity:!0,d:!0}),j(t).forEach(b),i=He(n,"path",{opacity:!0,d:!0}),j(i).forEach(b),n.forEach(b),this.h()},h(){v(t,"opacity","1.00"),v(t,"d"," M 519.61 71.86 C 539.35 70.48 559.17 71.06 578.89 72.49 C 661.58 78.37 742.51 106.99 810.57 154.31 C 866.97 193.28 914.63 244.77 949.17 303.98 C 981.00 358.45 1001.63 419.43 1009.26 482.06 C 1020.62 572.36 1005.01 665.92 964.52 747.49 C 929.33 818.86 875.58 880.92 810.05 926.05 C 737.74 976.18 650.96 1005.22 563.02 1008.38 C 539.30 1009.75 515.50 1008.37 491.90 1005.97 C 436.49 999.87 382.21 983.70 332.48 958.49 C 269.64 926.74 214.16 880.55 171.43 824.59 C 121.11 759.07 88.69 679.95 78.74 597.93 C 70.25 530.28 76.83 460.80 97.74 395.90 C 121.71 321.45 164.79 253.31 221.64 199.62 C 269.66 154.03 327.46 118.76 390.04 97.07 C 431.73 82.58 475.52 73.99 519.61 71.86 M 518.58 161.86 C 439.25 166.79 361.85 197.81 301.10 249.06 C 243.99 296.74 201.03 361.37 180.29 432.90 C 153.97 522.31 161.80 621.42 202.71 705.26 C 236.45 774.86 292.05 833.57 359.56 871.27 C 422.00 906.35 494.64 922.58 566.08 918.35 C 618.62 915.41 670.55 901.40 717.32 877.24 C 794.99 837.28 858.20 769.77 892.51 689.40 C 915.95 635.00 925.97 575.01 922.23 515.93 C 918.02 445.38 893.43 376.19 851.95 318.96 C 804.96 253.63 736.95 203.46 660.17 179.07 C 614.63 164.43 566.30 158.69 518.58 161.86 Z"),v(i,"opacity","1.00"),v(i,"d"," M 416.47 271.62 C 421.37 271.44 426.28 271.24 431.18 271.67 C 432.74 272.32 434.42 272.51 436.10 272.73 C 437.36 273.23 438.63 273.70 439.91 274.21 C 441.55 274.79 443.16 275.48 444.72 276.28 C 446.22 277.19 447.75 278.03 449.32 278.82 L 449.44 279.63 L 450.55 279.46 L 450.68 280.17 C 455.41 283.53 459.23 288.07 462.26 292.98 C 462.92 294.28 463.59 295.58 464.27 296.88 C 464.92 298.54 465.57 300.19 466.22 301.86 C 467.18 305.14 467.60 308.53 468.19 311.89 C 468.59 317.39 467.67 322.88 466.28 328.19 C 465.63 329.84 465.00 331.50 464.36 333.16 C 464.11 333.65 463.59 334.65 463.34 335.14 C 463.08 335.64 462.57 336.63 462.31 337.13 C 460.71 339.86 458.81 342.39 456.74 344.79 C 456.44 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.02 347.44 453.77 347.74 C 452.13 349.09 450.48 350.45 448.80 351.76 C 448.04 352.16 447.29 352.57 446.55 352.98 C 446.49 354.20 445.95 355.13 444.93 355.78 C 420.59 374.48 398.40 396.03 379.26 420.03 C 372.88 429.29 364.58 437.72 353.90 441.81 C 352.63 442.25 351.36 442.68 350.10 443.13 C 348.77 443.46 347.46 443.83 346.16 444.23 C 340.43 444.93 334.62 444.94 328.89 444.21 C 327.57 443.82 326.25 443.45 324.93 443.12 C 323.25 442.51 321.57 441.91 319.90 441.33 C 302.68 434.08 291.73 415.41 292.84 396.91 C 293.74 386.39 297.87 375.94 305.44 368.43 C 329.49 337.13 358.01 309.36 389.11 285.10 C 394.84 281.27 400.48 277.23 406.94 274.68 C 410.05 273.63 413.14 272.37 416.47 272.25 L 416.47 271.62 Z"),v(e,"viewBox","0 0 1088 1076"),v(e,"version","1.1"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(s,n){N(s,e,n),R(e,t),R(e,i)},p:ye,i:ye,o:ye,d(s){s&&b(e)}}}class rd extends Ee{constructor(e){super(),Ce(this,e,null,nd,Ae,{})}}function ad(o){let e,t,i;return{c(){e=qe("svg"),t=qe("path"),i=qe("path"),this.h()},l(s){e=He(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=j(e);t=He(n,"path",{opacity:!0,d:!0}),j(t).forEach(b),i=He(n,"path",{opacity:!0,d:!0}),j(i).forEach(b),n.forEach(b),this.h()},h(){v(t,"opacity","1.00"),v(t,"d"," M 519.63 71.86 C 548.84 69.99 578.19 71.67 607.19 75.41 C 687.31 86.09 764.44 118.18 828.55 167.40 C 885.92 211.19 932.99 268.38 964.84 333.15 C 989.47 383.16 1005.06 437.63 1010.48 493.12 C 1020.73 593.18 997.74 696.46 945.52 782.50 C 915.42 831.39 876.98 875.34 831.54 910.52 C 800.42 934.52 766.30 954.57 730.37 970.48 C 688.95 988.58 644.77 1000.17 599.91 1005.49 C 483.84 1020.19 362.84 988.44 268.50 919.35 C 206.22 874.16 155.34 813.42 121.84 744.14 C 94.91 688.60 79.18 627.65 75.91 566.03 C 75.29 552.37 74.52 538.68 75.42 525.01 C 76.69 483.90 83.37 442.94 95.36 403.57 C 117.13 331.56 156.77 265.08 209.55 211.49 C 258.82 161.22 319.55 122.23 385.84 98.55 C 428.80 83.16 474.05 74.05 519.63 71.86 M 384.80 195.86 C 316.73 227.31 258.60 279.61 219.68 343.65 C 189.75 392.72 171.49 448.79 166.52 506.04 C 162.09 556.15 167.47 607.17 182.74 655.13 C 194.57 692.52 212.38 727.99 235.21 759.87 C 278.80 820.83 340.52 868.95 410.90 894.99 C 392.02 863.11 373.80 830.84 355.14 798.83 C 351.38 791.94 346.94 785.40 343.74 778.21 C 341.02 771.10 340.85 763.36 341.78 755.89 C 344.39 742.27 354.19 730.29 367.12 725.20 C 378.29 720.85 391.37 721.47 401.90 727.28 C 409.03 731.05 415.00 737.02 418.78 744.16 C 451.98 801.63 485.17 859.10 518.37 916.57 C 518.86 918.15 520.55 918.35 521.97 918.38 C 552.41 920.02 583.09 918.33 613.07 912.69 C 578.45 852.72 543.70 792.82 509.22 732.77 C 505.31 723.85 504.02 713.60 506.98 704.20 C 510.26 691.76 519.95 681.40 531.88 676.76 C 542.50 672.78 554.71 673.38 564.94 678.28 C 566.33 679.10 567.74 679.95 569.18 680.74 C 570.76 681.82 572.27 683.01 573.76 684.24 C 575.23 685.41 576.58 686.74 577.74 688.24 C 582.80 694.28 586.06 701.54 590.16 708.22 C 624.76 768.22 659.54 828.12 694.02 888.18 C 720.85 876.65 746.50 862.10 769.68 844.33 C 763.02 833.89 757.21 822.94 750.91 812.29 C 719.50 757.97 688.15 703.61 656.74 649.29 C 653.75 643.90 650.26 638.75 648.10 632.94 C 645.19 624.25 645.24 614.83 648.10 606.15 C 652.95 591.96 665.87 580.97 680.73 578.74 C 685.18 578.24 689.67 578.32 694.12 578.78 C 700.81 580.30 707.45 582.81 712.80 587.21 C 716.77 590.30 720.04 594.24 722.66 598.53 C 758.94 661.33 795.22 724.14 831.49 786.95 C 851.84 763.48 869.08 737.38 883.17 709.71 C 873.74 692.33 863.43 675.40 853.67 658.19 C 824.17 607.11 794.66 556.04 765.17 504.96 C 758.34 493.47 757.75 478.53 763.59 466.52 C 767.90 457.36 775.73 449.97 785.07 446.09 C 787.32 445.15 789.67 444.48 792.02 443.83 C 797.69 443.02 803.45 443.09 809.13 443.74 C 810.70 444.25 812.30 444.68 813.91 445.12 C 815.58 445.75 817.22 446.48 818.85 447.25 C 819.89 447.74 820.94 448.23 822.00 448.73 C 824.13 450.26 826.27 451.81 828.29 453.49 C 835.00 459.27 838.52 467.60 843.03 475.01 C 866.58 515.75 890.11 556.51 913.66 597.25 C 915.01 599.71 916.65 602.05 917.55 604.74 C 922.02 578.09 923.79 550.98 922.65 523.98 C 919.84 450.93 895.20 378.86 852.39 319.58 C 808.66 258.59 746.71 210.65 676.24 184.63 C 582.71 149.68 475.32 153.63 384.80 195.86 Z"),v(i,"opacity","1.00"),v(i,"d"," M 416.48 271.62 C 421.50 271.38 426.53 271.37 431.55 271.57 L 431.63 272.24 C 433.11 272.37 434.59 272.52 436.07 272.70 C 437.35 273.24 438.65 273.74 439.96 274.23 C 441.60 274.78 443.17 275.51 444.74 276.25 C 445.91 276.85 446.96 277.64 447.98 278.50 C 448.31 278.49 448.98 278.48 449.31 278.47 L 449.43 279.61 L 450.27 279.52 C 454.86 283.41 459.18 287.71 462.25 292.94 C 463.74 295.83 465.10 298.79 466.18 301.87 C 466.98 304.59 467.55 307.36 467.86 310.18 C 468.46 313.37 468.49 316.67 467.87 319.86 C 467.63 321.58 467.41 323.31 467.15 325.03 C 466.81 326.07 466.51 327.11 466.23 328.17 C 465.65 329.81 465.07 331.46 464.39 333.06 C 464.14 333.57 463.64 334.60 463.39 335.11 C 461.58 338.60 459.34 341.83 456.75 344.79 C 456.45 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.01 347.45 453.76 347.75 C 452.09 349.09 450.46 350.48 448.77 351.80 C 448.01 352.19 447.26 352.58 446.51 352.97 C 446.50 354.24 445.95 355.20 444.85 355.84 C 420.32 374.71 397.93 396.45 378.73 420.73 C 371.82 430.90 362.12 439.64 350.12 443.15 C 343.26 445.27 335.94 444.96 328.89 444.22 C 325.82 443.37 322.78 442.46 319.82 441.30 C 302.65 434.03 291.72 415.38 292.85 396.90 C 293.73 386.62 297.66 376.39 304.96 368.95 C 327.94 339.24 354.69 312.44 384.12 289.09 C 386.73 287.07 389.10 284.65 392.15 283.27 C 393.71 282.07 395.28 280.89 396.91 279.79 C 400.14 277.90 403.48 276.20 406.91 274.69 C 410.03 273.64 413.13 272.37 416.47 272.25 L 416.48 271.62 Z"),v(e,"viewBox","0 0 1088 1076"),v(e,"version","1.1"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(s,n){N(s,e,n),R(e,t),R(e,i)},p:ye,i:ye,o:ye,d(s){s&&b(e)}}}class od extends Ee{constructor(e){super(),Ce(this,e,null,ad,Ae,{})}}function ld(o){let e,t;return{c(){e=L("hr"),this.h()},l(i){e=F(i,"HR",{style:!0,class:!0}),this.h()},h(){v(e,"style",t=`margin: ${o[0]}px 0 ${o[1]}px 0;`),v(e,"class","svelte-9cf4tr")},m(i,s){N(i,e,s)},p(i,[s]){s&3&&t!==(t=`margin: ${i[0]}px 0 ${i[1]}px 0;`)&&v(e,"style",t)},i:ye,o:ye,d(i){i&&b(e)}}}function hd(o,e,t){let{topSpace:i=5}=e,{bottomSpace:s=15}=e;return o.$$set=n=>{"topSpace"in n&&t(0,i=n.topSpace),"bottomSpace"in n&&t(1,s=n.bottomSpace)},[i,s]}class hs extends Ee{constructor(e){super(),Ce(this,e,hd,ld,Ae,{topSpace:0,bottomSpace:1})}}function ud(o){let e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y,g,_;return i=new sd({}),r=new rd({}),h=new od({}),u=new hs({}),m=new td({}),{c(){e=L("div"),t=L("button"),te(i.$$.fragment),s=H(),n=L("button"),te(r.$$.fragment),l=H(),a=L("button"),te(h.$$.fragment),c=H(),te(u.$$.fragment),f=H(),d=L("a"),p=L("button"),te(m.$$.fragment),this.h()},l(w){e=F(w,"DIV",{class:!0});var x=j(e);t=F(x,"BUTTON",{class:!0});var C=j(t);ie(i.$$.fragment,C),C.forEach(b),s=W(x),n=F(x,"BUTTON",{class:!0});var E=j(n);ie(r.$$.fragment,E),E.forEach(b),l=W(x),a=F(x,"BUTTON",{class:!0});var A=j(a);ie(h.$$.fragment,A),A.forEach(b),c=W(x),ie(u.$$.fragment,x),f=W(x),d=F(x,"A",{href:!0,target:!0});var T=j(d);p=F(T,"BUTTON",{class:!0});var V=j(p);ie(m.$$.fragment,V),V.forEach(b),T.forEach(b),x.forEach(b),this.h()},h(){v(t,"class","svelte-1qm3uw7"),J(t,"active",o[0]=="preview"),v(n,"class","svelte-1qm3uw7"),J(n,"active",o[0]=="realtime"),v(a,"class","svelte-1qm3uw7"),J(a,"active",o[0]=="compute"),v(p,"class","active svelte-1qm3uw7"),v(d,"href","https://github.com/Domenicobrz/C2-Renderer"),v(d,"target","_blank"),v(e,"class","left-sidebar svelte-1qm3uw7")},m(w,x){N(w,e,x),R(e,t),se(i,t,null),R(e,s),R(e,n),se(r,n,null),R(e,l),R(e,a),se(h,a,null),R(e,c),se(u,e,null),R(e,f),R(e,d),R(d,p),se(m,p,null),y=!0,g||(_=[oe(t,"click",o[1]),oe(n,"click",o[2]),oe(a,"click",o[3])],g=!0)},p(w,[x]){(!y||x&1)&&J(t,"active",w[0]=="preview"),(!y||x&1)&&J(n,"active",w[0]=="realtime"),(!y||x&1)&&J(a,"active",w[0]=="compute")},i(w){y||(K(i.$$.fragment,w),K(r.$$.fragment,w),K(h.$$.fragment,w),K(u.$$.fragment,w),K(m.$$.fragment,w),y=!0)},o(w){Z(i.$$.fragment,w),Z(r.$$.fragment,w),Z(h.$$.fragment,w),Z(u.$$.fragment,w),Z(m.$$.fragment,w),y=!1},d(w){w&&b(e),ne(i),ne(r),ne(h),ne(u),ne(m),g=!1,rt(_)}}}function cd(o,e,t){let i;return Ke(o,Cs,l=>t(0,i=l)),[i,()=>jt(Cs,i="preview",i),()=>jt(Cs,i="realtime",i),()=>jt(Cs,i="compute",i)]}class fd extends Ee{constructor(e){super(),Ce(this,e,cd,ud,Ae,{})}}function wo(o){return Object.prototype.toString.call(o)==="[object Date]"}function Dr(o,e,t,i){if(typeof t=="number"||wo(t)){const s=i-t,n=(t-e)/(o.dt||1/60),r=o.opts.stiffness*s,l=o.opts.damping*n,a=(r-l)*o.inv_mass,h=(n+a)*o.dt;return Math.abs(h)<o.opts.precision&&Math.abs(s)<o.opts.precision?i:(o.settled=!1,wo(t)?new Date(t.getTime()+h):t+h)}else{if(Array.isArray(t))return t.map((s,n)=>Dr(o,e[n],t[n],i[n]));if(typeof t=="object"){const s={};for(const n in t)s[n]=Dr(o,e[n],t[n],i[n]);return s}else throw new Error(`Cannot spring ${typeof t} values`)}}function dd(o,e={}){const t=Qt(o),{stiffness:i=.15,damping:s=.8,precision:n=.01}=e;let r,l,a,h=o,c=o,u=1,f=0,d=!1;function p(y,g={}){c=y;const _=a={};return o==null||g.hard||m.stiffness>=1&&m.damping>=1?(d=!0,r=aa(),h=y,t.set(o=c),Promise.resolve()):(g.soft&&(f=1/((g.soft===!0?.5:+g.soft)*60),u=0),l||(r=aa(),d=!1,l=Wl(w=>{if(d)return d=!1,l=null,!1;u=Math.min(u+f,1);const x={inv_mass:u,opts:m,settled:!0,dt:(w-r)*60/1e3},C=Dr(x,h,o,c);return r=w,h=o,t.set(o=C),x.settled&&(l=null),!x.settled})),new Promise(w=>{l.promise.then(()=>{_===a&&w()})}))}const m={set:p,update:(y,g)=>p(y(c,o),g),subscribe:t.subscribe,stiffness:i,damping:s,precision:n};return m}function _o(o,e,t){const i=o.slice();return i[37]=e[t],i[39]=t,i}function So(o){let e,t,i,s,n=(o[6]==="label"||o[7]==="label")&&To(o);return{c(){e=L("span"),n&&n.c(),this.h()},l(r){e=F(r,"SPAN",{class:!0,style:!0});var l=j(e);n&&n.l(l),l.forEach(b),this.h()},h(){v(e,"class","pip first"),v(e,"style",t=o[14]+": 0%;"),J(e,"selected",o[18](o[0])),J(e,"in-range",o[17](o[0]))},m(r,l){N(r,e,l),n&&n.m(e,null),i||(s=[oe(e,"pointerdown",o[30]),oe(e,"pointerup",o[31])],i=!0)},p(r,l){r[6]==="label"||r[7]==="label"?n?n.p(r,l):(n=To(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null),l[0]&16384&&t!==(t=r[14]+": 0%;")&&v(e,"style",t),l[0]&262145&&J(e,"selected",r[18](r[0])),l[0]&131073&&J(e,"in-range",r[17](r[0]))},d(r){r&&b(e),n&&n.d(),i=!1,rt(s)}}}function To(o){let e,t,i,s=o[12](o[16](o[0]),0,0)+"",n,r=o[10]&&Mo(o),l=o[11]&&Ao(o);return{c(){e=L("span"),r&&r.c(),t=Le(),i=new Nn(!1),n=Le(),l&&l.c(),this.h()},l(a){e=F(a,"SPAN",{class:!0});var h=j(e);r&&r.l(h),t=Le(),i=Dn(h,!1),n=Le(),l&&l.l(h),h.forEach(b),this.h()},h(){i.a=n,v(e,"class","pipVal")},m(a,h){N(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),l&&l.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=Mo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&69633&&s!==(s=a[12](a[16](a[0]),0,0)+"")&&i.p(s),a[11]?l?l.p(a,h):(l=Ao(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&b(e),r&&r.d(),l&&l.d()}}}function Mo(o){let e,t;return{c(){e=L("span"),t=de(o[10]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[10]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-prefix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Ge(t,i[10])},d(i){i&&b(e)}}}function Ao(o){let e,t;return{c(){e=L("span"),t=de(o[11]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[11]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-suffix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Ge(t,i[11])},d(i){i&&b(e)}}}function Eo(o){let e,t=Bn(Array(o[20]+1)),i=[];for(let s=0;s<t.length;s+=1)i[s]=Io(_o(o,t,s));return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=Le()},l(s){for(let n=0;n<i.length;n+=1)i[n].l(s);e=Le()},m(s,n){for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(s,n);N(s,e,n)},p(s,n){if(n[0]&8314435){t=Bn(Array(s[20]+1));let r;for(r=0;r<t.length;r+=1){const l=_o(s,t,r);i[r]?i[r].p(l,n):(i[r]=Io(l),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=t.length}},d(s){s&&b(e),Ko(i,s)}}}function Co(o){let e,t,i,s,n,r=(o[6]==="label"||o[9]==="label")&&Ro(o);function l(...a){return o[33](o[39],...a)}return{c(){e=L("span"),r&&r.c(),t=H(),this.h()},l(a){e=F(a,"SPAN",{class:!0,style:!0});var h=j(e);r&&r.l(h),t=W(h),h.forEach(b),this.h()},h(){v(e,"class","pip"),v(e,"style",i=o[14]+": "+o[15](o[19](o[39]))+"%;"),J(e,"selected",o[18](o[19](o[39]))),J(e,"in-range",o[17](o[19](o[39])))},m(a,h){N(a,e,h),r&&r.m(e,null),R(e,t),s||(n=[oe(e,"pointerdown",o[32]),oe(e,"pointerup",l)],s=!0)},p(a,h){o=a,o[6]==="label"||o[9]==="label"?r?r.p(o,h):(r=Ro(o),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&573440&&i!==(i=o[14]+": "+o[15](o[19](o[39]))+"%;")&&v(e,"style",i),h[0]&786432&&J(e,"selected",o[18](o[19](o[39]))),h[0]&655360&&J(e,"in-range",o[17](o[19](o[39])))},d(a){a&&b(e),r&&r.d(),s=!1,rt(n)}}}function Ro(o){let e,t,i,s=o[12](o[19](o[39]),o[39],o[15](o[19](o[39])))+"",n,r=o[10]&&Bo(o),l=o[11]&&Po(o);return{c(){e=L("span"),r&&r.c(),t=Le(),i=new Nn(!1),n=Le(),l&&l.c(),this.h()},l(a){e=F(a,"SPAN",{class:!0});var h=j(e);r&&r.l(h),t=Le(),i=Dn(h,!1),n=Le(),l&&l.l(h),h.forEach(b),this.h()},h(){i.a=n,v(e,"class","pipVal")},m(a,h){N(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),l&&l.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=Bo(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&561152&&s!==(s=a[12](a[19](a[39]),a[39],a[15](a[19](a[39])))+"")&&i.p(s),a[11]?l?l.p(a,h):(l=Po(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&b(e),r&&r.d(),l&&l.d()}}}function Bo(o){let e,t;return{c(){e=L("span"),t=de(o[10]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[10]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-prefix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Ge(t,i[10])},d(i){i&&b(e)}}}function Po(o){let e,t;return{c(){e=L("span"),t=de(o[11]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[11]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-suffix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Ge(t,i[11])},d(i){i&&b(e)}}}function Io(o){let e=o[19](o[39])!==o[0]&&o[19](o[39])!==o[1],t,i=e&&Co(o);return{c(){i&&i.c(),t=Le()},l(s){i&&i.l(s),t=Le()},m(s,n){i&&i.m(s,n),N(s,t,n)},p(s,n){n[0]&524291&&(e=s[19](s[39])!==s[0]&&s[19](s[39])!==s[1]),e?i?i.p(s,n):(i=Co(s),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(s){s&&b(t),i&&i.d(s)}}}function zo(o){let e,t,i,s,n=(o[6]==="label"||o[8]==="label")&&No(o);return{c(){e=L("span"),n&&n.c(),this.h()},l(r){e=F(r,"SPAN",{class:!0,style:!0});var l=j(e);n&&n.l(l),l.forEach(b),this.h()},h(){v(e,"class","pip last"),v(e,"style",t=o[14]+": 100%;"),J(e,"selected",o[18](o[1])),J(e,"in-range",o[17](o[1]))},m(r,l){N(r,e,l),n&&n.m(e,null),i||(s=[oe(e,"pointerdown",o[34]),oe(e,"pointerup",o[35])],i=!0)},p(r,l){r[6]==="label"||r[8]==="label"?n?n.p(r,l):(n=No(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null),l[0]&16384&&t!==(t=r[14]+": 100%;")&&v(e,"style",t),l[0]&262146&&J(e,"selected",r[18](r[1])),l[0]&131074&&J(e,"in-range",r[17](r[1]))},d(r){r&&b(e),n&&n.d(),i=!1,rt(s)}}}function No(o){let e,t,i,s=o[12](o[16](o[1]),o[20],100)+"",n,r=o[10]&&Do(o),l=o[11]&&Lo(o);return{c(){e=L("span"),r&&r.c(),t=Le(),i=new Nn(!1),n=Le(),l&&l.c(),this.h()},l(a){e=F(a,"SPAN",{class:!0});var h=j(e);r&&r.l(h),t=Le(),i=Dn(h,!1),n=Le(),l&&l.l(h),h.forEach(b),this.h()},h(){i.a=n,v(e,"class","pipVal")},m(a,h){N(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),l&&l.m(e,null)},p(a,h){a[10]?r?r.p(a,h):(r=Do(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&1118210&&s!==(s=a[12](a[16](a[1]),a[20],100)+"")&&i.p(s),a[11]?l?l.p(a,h):(l=Lo(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&b(e),r&&r.d(),l&&l.d()}}}function Do(o){let e,t;return{c(){e=L("span"),t=de(o[10]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[10]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-prefix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&1024&&Ge(t,i[10])},d(i){i&&b(e)}}}function Lo(o){let e,t;return{c(){e=L("span"),t=de(o[11]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[11]),s.forEach(b),this.h()},h(){v(e,"class","pipVal-suffix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&2048&&Ge(t,i[11])},d(i){i&&b(e)}}}function pd(o){let e,t,i,s=(o[6]&&o[7]!==!1||o[7])&&So(o),n=(o[6]&&o[9]!==!1||o[9])&&Eo(o),r=(o[6]&&o[8]!==!1||o[8])&&zo(o);return{c(){e=L("div"),s&&s.c(),t=H(),n&&n.c(),i=H(),r&&r.c(),this.h()},l(l){e=F(l,"DIV",{class:!0});var a=j(e);s&&s.l(a),t=W(a),n&&n.l(a),i=W(a),r&&r.l(a),a.forEach(b),this.h()},h(){v(e,"class","rangePips"),J(e,"disabled",o[5]),J(e,"hoverable",o[4]),J(e,"vertical",o[2]),J(e,"reversed",o[3]),J(e,"focus",o[13])},m(l,a){N(l,e,a),s&&s.m(e,null),R(e,t),n&&n.m(e,null),R(e,i),r&&r.m(e,null)},p(l,a){l[6]&&l[7]!==!1||l[7]?s?s.p(l,a):(s=So(l),s.c(),s.m(e,t)):s&&(s.d(1),s=null),l[6]&&l[9]!==!1||l[9]?n?n.p(l,a):(n=Eo(l),n.c(),n.m(e,i)):n&&(n.d(1),n=null),l[6]&&l[8]!==!1||l[8]?r?r.p(l,a):(r=zo(l),r.c(),r.m(e,null)):r&&(r.d(1),r=null),a[0]&32&&J(e,"disabled",l[5]),a[0]&16&&J(e,"hoverable",l[4]),a[0]&4&&J(e,"vertical",l[2]),a[0]&8&&J(e,"reversed",l[3]),a[0]&8192&&J(e,"focus",l[13])},i:ye,o:ye,d(l){l&&b(e),s&&s.d(),n&&n.d(),r&&r.d()}}}function md(o,e,t){let i,s,n,r,l,{range:a=!1}=e,{min:h=0}=e,{max:c=100}=e,{step:u=1}=e,{values:f=[(c+h)/2]}=e,{vertical:d=!1}=e,{reversed:p=!1}=e,{hoverable:m=!0}=e,{disabled:y=!1}=e,{pipstep:g=void 0}=e,{all:_=!0}=e,{first:w=void 0}=e,{last:x=void 0}=e,{rest:C=void 0}=e,{prefix:E=""}=e,{suffix:A=""}=e,{formatter:T=(U,ve,Pe)=>U}=e,{focus:V=void 0}=e,{orientationStart:B=void 0}=e,{percentOf:z=void 0}=e,{moveHandle:O=void 0}=e,{fixFloat:G=void 0}=e,{normalisedClient:P=void 0}=e,I;function k(U){U=P(U),I={x:U.clientX,y:U.clientY}}function ae(U,ve){if(ve=P(ve),!y){const Pe=Math.sqrt(Math.pow(I.x-ve.clientX,2)+Math.pow(I.y-ve.clientY,2));I&&Pe<=5&&O(void 0,U)}}const ue=U=>{k(U)},X=U=>{ae(h,U)},ee=U=>{k(U)},ce=(U,ve)=>{ae(n(U),ve)},le=U=>{k(U)},$=U=>{ae(c,U)};return o.$$set=U=>{"range"in U&&t(23,a=U.range),"min"in U&&t(0,h=U.min),"max"in U&&t(1,c=U.max),"step"in U&&t(24,u=U.step),"values"in U&&t(25,f=U.values),"vertical"in U&&t(2,d=U.vertical),"reversed"in U&&t(3,p=U.reversed),"hoverable"in U&&t(4,m=U.hoverable),"disabled"in U&&t(5,y=U.disabled),"pipstep"in U&&t(26,g=U.pipstep),"all"in U&&t(6,_=U.all),"first"in U&&t(7,w=U.first),"last"in U&&t(8,x=U.last),"rest"in U&&t(9,C=U.rest),"prefix"in U&&t(10,E=U.prefix),"suffix"in U&&t(11,A=U.suffix),"formatter"in U&&t(12,T=U.formatter),"focus"in U&&t(13,V=U.focus),"orientationStart"in U&&t(14,B=U.orientationStart),"percentOf"in U&&t(15,z=U.percentOf),"moveHandle"in U&&t(27,O=U.moveHandle),"fixFloat"in U&&t(16,G=U.fixFloat),"normalisedClient"in U&&t(28,P=U.normalisedClient)},o.$$.update=()=>{o.$$.dirty[0]&83886087&&t(29,i=g||((c-h)/u>=(d?50:100)?(c-h)/(d?10:20):1)),o.$$.dirty[0]&553648131&&t(20,s=parseInt((c-h)/(u*i),10)),o.$$.dirty[0]&553713665&&t(19,n=function(U){return G(h+U*u*i)}),o.$$.dirty[0]&33619968&&t(18,r=function(U){return f.some(ve=>G(ve)===G(U))}),o.$$.dirty[0]&41943040&&t(17,l=function(U){if(a==="min")return f[0]>U;if(a==="max")return f[0]<U;if(a)return f[0]<U&&f[1]>U})},[h,c,d,p,m,y,_,w,x,C,E,A,T,V,B,z,G,l,r,n,s,k,ae,a,u,f,g,O,P,i,ue,X,ee,ce,le,$]}class gd extends Ee{constructor(e){super(),Ce(this,e,md,pd,Ae,{range:23,min:0,max:1,step:24,values:25,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:26,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:27,fixFloat:16,normalisedClient:28},null,[-1,-1])}}function Fo(o,e,t){const i=o.slice();return i[65]=e[t],i[67]=t,i}function Oo(o){let e,t,i,s=o[21](o[65],o[67],o[24](o[65]))+"",n,r=o[18]&&ko(o),l=o[19]&&Uo(o);return{c(){e=L("span"),r&&r.c(),t=Le(),i=new Nn(!1),n=Le(),l&&l.c(),this.h()},l(a){e=F(a,"SPAN",{class:!0});var h=j(e);r&&r.l(h),t=Le(),i=Dn(h,!1),n=Le(),l&&l.l(h),h.forEach(b),this.h()},h(){i.a=n,v(e,"class","rangeFloat")},m(a,h){N(a,e,h),r&&r.m(e,null),R(e,t),i.m(s,e),R(e,n),l&&l.m(e,null)},p(a,h){a[18]?r?r.p(a,h):(r=ko(a),r.c(),r.m(e,t)):r&&(r.d(1),r=null),h[0]&18874369&&s!==(s=a[21](a[65],a[67],a[24](a[65]))+"")&&i.p(s),a[19]?l?l.p(a,h):(l=Uo(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&b(e),r&&r.d(),l&&l.d()}}}function ko(o){let e,t;return{c(){e=L("span"),t=de(o[18]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[18]),s.forEach(b),this.h()},h(){v(e,"class","rangeFloat-prefix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&262144&&Ge(t,i[18])},d(i){i&&b(e)}}}function Uo(o){let e,t;return{c(){e=L("span"),t=de(o[19]),this.h()},l(i){e=F(i,"SPAN",{class:!0});var s=j(e);t=pe(s,o[19]),s.forEach(b),this.h()},h(){v(e,"class","rangeFloat-suffix")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s[0]&524288&&Ge(t,i[19])},d(i){i&&b(e)}}}function Vo(o){let e,t,i,s,n,r,l,a,h,c,u,f,d,p=o[7]&&Oo(o);return{c(){e=L("span"),t=L("span"),i=H(),p&&p.c(),this.h()},l(m){e=F(m,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-label":!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var y=j(e);t=F(y,"SPAN",{class:!0}),j(t).forEach(b),i=W(y),p&&p.l(y),y.forEach(b),this.h()},h(){v(t,"class","rangeNub"),v(e,"role","slider"),v(e,"class","rangeHandle"),v(e,"data-handle",o[67]),v(e,"style",s=o[29]+": "+o[30][o[67]]+"%; z-index: "+(o[27]===o[67]?3:2)+";"),v(e,"aria-label",n=o[22][o[67]]),v(e,"aria-valuemin",r=o[2]===!0&&o[67]===1?o[0][0]:o[3]),v(e,"aria-valuemax",l=o[2]===!0&&o[67]===0?o[0][1]:o[4]),v(e,"aria-valuenow",a=o[65]),v(e,"aria-valuetext",h=""+(o[18]+Wo(o[21](o[65],o[67],o[24](o[65])))+o[19])),v(e,"aria-orientation",c=o[6]?"vertical":"horizontal"),v(e,"aria-disabled",o[10]),v(e,"disabled",o[10]),v(e,"tabindex",u=o[10]?-1:0),J(e,"active",o[25]&&o[27]===o[67]),J(e,"press",o[26]&&o[27]===o[67])},m(m,y){N(m,e,y),R(e,t),R(e,i),p&&p.m(e,null),f||(d=[oe(e,"blur",o[35]),oe(e,"focus",o[36]),oe(e,"keydown",o[37])],f=!0)},p(m,y){m[7]?p?p.p(m,y):(p=Oo(m),p.c(),p.m(e,null)):p&&(p.d(1),p=null),y[0]&1744830464&&s!==(s=m[29]+": "+m[30][m[67]]+"%; z-index: "+(m[27]===m[67]?3:2)+";")&&v(e,"style",s),y[0]&4194304&&n!==(n=m[22][m[67]])&&v(e,"aria-label",n),y[0]&13&&r!==(r=m[2]===!0&&m[67]===1?m[0][0]:m[3])&&v(e,"aria-valuemin",r),y[0]&21&&l!==(l=m[2]===!0&&m[67]===0?m[0][1]:m[4])&&v(e,"aria-valuemax",l),y[0]&1&&a!==(a=m[65])&&v(e,"aria-valuenow",a),y[0]&19660801&&h!==(h=""+(m[18]+Wo(m[21](m[65],m[67],m[24](m[65])))+m[19]))&&v(e,"aria-valuetext",h),y[0]&64&&c!==(c=m[6]?"vertical":"horizontal")&&v(e,"aria-orientation",c),y[0]&1024&&v(e,"aria-disabled",m[10]),y[0]&1024&&v(e,"disabled",m[10]),y[0]&1024&&u!==(u=m[10]?-1:0)&&v(e,"tabindex",u),y[0]&167772160&&J(e,"active",m[25]&&m[27]===m[67]),y[0]&201326592&&J(e,"press",m[26]&&m[27]===m[67])},d(m){m&&b(e),p&&p.d(),f=!1,rt(d)}}}function Go(o){let e,t;return{c(){e=L("span"),this.h()},l(i){e=F(i,"SPAN",{class:!0,style:!0}),j(e).forEach(b),this.h()},h(){v(e,"class","rangeBar"),v(e,"style",t=o[29]+": "+o[33](o[30])+"%; "+o[28]+": "+o[34](o[30])+"%;")},m(i,s){N(i,e,s)},p(i,s){s[0]&1879048192&&t!==(t=i[29]+": "+i[33](i[30])+"%; "+i[28]+": "+i[34](i[30])+"%;")&&v(e,"style",t)},d(i){i&&b(e)}}}function qo(o){let e,t;return e=new gd({props:{values:o[0],min:o[3],max:o[4],step:o[5],range:o[2],vertical:o[6],reversed:o[8],orientationStart:o[29],hoverable:o[9],disabled:o[10],all:o[13],first:o[14],last:o[15],rest:o[16],pipstep:o[12],prefix:o[18],suffix:o[19],formatter:o[20],focus:o[25],percentOf:o[24],moveHandle:o[32],fixFloat:o[31],normalisedClient:Cn}}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},p(i,s){const n={};s[0]&1&&(n.values=i[0]),s[0]&8&&(n.min=i[3]),s[0]&16&&(n.max=i[4]),s[0]&32&&(n.step=i[5]),s[0]&4&&(n.range=i[2]),s[0]&64&&(n.vertical=i[6]),s[0]&256&&(n.reversed=i[8]),s[0]&536870912&&(n.orientationStart=i[29]),s[0]&512&&(n.hoverable=i[9]),s[0]&1024&&(n.disabled=i[10]),s[0]&8192&&(n.all=i[13]),s[0]&16384&&(n.first=i[14]),s[0]&32768&&(n.last=i[15]),s[0]&65536&&(n.rest=i[16]),s[0]&4096&&(n.pipstep=i[12]),s[0]&262144&&(n.prefix=i[18]),s[0]&524288&&(n.suffix=i[19]),s[0]&1048576&&(n.formatter=i[20]),s[0]&33554432&&(n.focus=i[25]),s[0]&16777216&&(n.percentOf=i[24]),e.$set(n)},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function yd(o){let e,t,i,s,n,r,l=Bn(o[0]),a=[];for(let u=0;u<l.length;u+=1)a[u]=Vo(Fo(o,l,u));let h=o[2]&&Go(o),c=o[11]&&qo(o);return{c(){e=L("div");for(let u=0;u<a.length;u+=1)a[u].c();t=H(),h&&h.c(),i=H(),c&&c.c(),this.h()},l(u){e=F(u,"DIV",{id:!0,role:!0,class:!0});var f=j(e);for(let d=0;d<a.length;d+=1)a[d].l(f);t=W(f),h&&h.l(f),i=W(f),c&&c.l(f),f.forEach(b),this.h()},h(){v(e,"id",o[17]),v(e,"role","none"),v(e,"class","rangeSlider"),J(e,"range",o[2]),J(e,"disabled",o[10]),J(e,"hoverable",o[9]),J(e,"vertical",o[6]),J(e,"reversed",o[8]),J(e,"focus",o[25]),J(e,"min",o[2]==="min"),J(e,"max",o[2]==="max"),J(e,"pips",o[11]),J(e,"pip-labels",o[13]==="label"||o[14]==="label"||o[15]==="label"||o[16]==="label")},m(u,f){N(u,e,f);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);R(e,t),h&&h.m(e,null),R(e,i),c&&c.m(e,null),o[51](e),s=!0,n||(r=[oe(window,"mousedown",o[40]),oe(window,"touchstart",o[40]),oe(window,"mousemove",o[41]),oe(window,"touchmove",o[41]),oe(window,"mouseup",o[42]),oe(window,"touchend",o[43]),oe(window,"keydown",o[44]),oe(e,"mousedown",o[38]),oe(e,"mouseup",o[39]),oe(e,"touchstart",ra(o[38])),oe(e,"touchend",ra(o[39]))],n=!0)},p(u,f){if(f[0]&1869350109|f[1]&112){l=Bn(u[0]);let d;for(d=0;d<l.length;d+=1){const p=Fo(u,l,d);a[d]?a[d].p(p,f):(a[d]=Vo(p),a[d].c(),a[d].m(e,t))}for(;d<a.length;d+=1)a[d].d(1);a.length=l.length}u[2]?h?h.p(u,f):(h=Go(u),h.c(),h.m(e,i)):h&&(h.d(1),h=null),u[11]?c?(c.p(u,f),f[0]&2048&&K(c,1)):(c=qo(u),c.c(),K(c,1),c.m(e,null)):c&&(Lr(),Z(c,1,1,()=>{c=null}),Fr()),(!s||f[0]&131072)&&v(e,"id",u[17]),(!s||f[0]&4)&&J(e,"range",u[2]),(!s||f[0]&1024)&&J(e,"disabled",u[10]),(!s||f[0]&512)&&J(e,"hoverable",u[9]),(!s||f[0]&64)&&J(e,"vertical",u[6]),(!s||f[0]&256)&&J(e,"reversed",u[8]),(!s||f[0]&33554432)&&J(e,"focus",u[25]),(!s||f[0]&4)&&J(e,"min",u[2]==="min"),(!s||f[0]&4)&&J(e,"max",u[2]==="max"),(!s||f[0]&2048)&&J(e,"pips",u[11]),(!s||f[0]&122880)&&J(e,"pip-labels",u[13]==="label"||u[14]==="label"||u[15]==="label"||u[16]==="label")},i(u){s||(K(c),s=!0)},o(u){Z(c),s=!1},d(u){u&&b(e),Ko(a,u),h&&h.d(),c&&c.d(),o[51](null),n=!1,rt(r)}}}function Ho(o){if(!o)return-1;for(var e=0;o=o.previousElementSibling;)e++;return e}function Cn(o){return o.type.includes("touch")?o.touches[0]||o.changedTouches[0]:o}function Wo(o){return`${o}`.replace(/<[^>]*>/g,"")}function vd(o,e,t){let i,s,n,r,l,a,h=ye,c=()=>(h(),h=ql(at,D=>t(30,a=D)),at);o.$$.on_destroy.push(()=>h());let{slider:u=void 0}=e,{range:f=!1}=e,{pushy:d=!1}=e,{min:p=0}=e,{max:m=100}=e,{step:y=1}=e,{values:g=[(m+p)/2]}=e,{vertical:_=!1}=e,{float:w=!1}=e,{reversed:x=!1}=e,{hoverable:C=!0}=e,{disabled:E=!1}=e,{pips:A=!1}=e,{pipstep:T=void 0}=e,{all:V=void 0}=e,{first:B=void 0}=e,{last:z=void 0}=e,{rest:O=void 0}=e,{id:G=void 0}=e,{prefix:P=""}=e,{suffix:I=""}=e,{formatter:k=(D,re,ge)=>D}=e,{handleFormatter:ae=k}=e,{ariaLabels:ue=[]}=e,{precision:X=2}=e,{springValues:ee={stiffness:.15,damping:.4}}=e;const ce=Zo();let le=0,$=!1,U=!1,ve=!1,Pe=!1,Me=g.length-1,Ie,De,at;const Ze=D=>parseFloat((+D).toFixed(X));function Y(D){const re=u.querySelectorAll(".handle"),ge=Array.prototype.includes.call(re,D),we=Array.prototype.some.call(re,Qe=>Qe.contains(D));return ge||we}function fe(D){return f==="min"||f==="max"?D.slice(0,1):f?D.slice(0,2):D}function Fe(){return u.getBoundingClientRect()}function ot(D){const re=Fe();let ge=0,we=0,Qe=0;_?(ge=D.clientY-re.top,we=ge/re.height*100,we=x?we:100-we):(ge=D.clientX-re.left,we=ge/re.width*100,we=x?100-we:we),Qe=(m-p)/100*we+p;let wt;return f===!0&&g[0]===g[1]?Qe>g[1]?1:0:(wt=g.indexOf([...g].sort((Dl,Ll)=>Math.abs(Qe-Dl)-Math.abs(Qe-Ll))[0]),wt)}function Ot(D){const re=Fe();let ge=0,we=0,Qe=0;_?(ge=D.clientY-re.top,we=ge/re.height*100,we=x?we:100-we):(ge=D.clientX-re.left,we=ge/re.width*100,we=x?100-we:we),Qe=(m-p)/100*we+p,it(Me,Qe)}function it(D,re){return re=n(re),typeof D>"u"&&(D=Me),f&&(D===0&&re>g[1]?d?t(0,g[1]=re,g):re=g[1]:D===1&&re<g[0]&&(d?t(0,g[0]=re,g):re=g[0])),g[D]!==re&&t(0,g[D]=re,g),De!==re&&(q(),De=re),re}function Je(D){return f==="min"?0:D[0]}function ps(D){return f==="max"?0:f==="min"?100-D[0]:100-D[1]}function kt(D){Pe&&(t(25,$=!1),U=!1,t(26,ve=!1))}function ms(D){E||(t(27,Me=Ho(D.target)),t(25,$=!0))}function bt(D){if(!E){const re=Ho(D.target);let ge=D.ctrlKey||D.metaKey||D.shiftKey?y*10:y,we=!1;switch(D.key){case"PageDown":ge*=10;case"ArrowRight":case"ArrowUp":it(re,g[re]+ge),we=!0;break;case"PageUp":ge*=10;case"ArrowLeft":case"ArrowDown":it(re,g[re]-ge),we=!0;break;case"Home":it(re,p),we=!0;break;case"End":it(re,m),we=!0;break}we&&(D.preventDefault(),D.stopPropagation())}}function Fi(D){if(!E){const re=D.target,ge=Cn(D);t(25,$=!0),U=!0,t(26,ve=!0),t(27,Me=ot(ge)),Ie=De=n(g[Me]),Vn(),D.type==="touchstart"&&!re.matches(".pipVal")&&Ot(ge)}}function Pt(D){D.type==="touchend"&&ys(),t(26,ve=!1)}function si(D){Pe=!1,$&&D.target!==u&&!u.contains(D.target)&&t(25,$=!1)}function gs(D){E||U&&Ot(Cn(D))}function $s(D){if(!E){const re=D.target;U&&((re===u||u.contains(re))&&(t(25,$=!0),!Y(re)&&!re.matches(".pipVal")&&Ot(Cn(D))),ys())}U=!1,t(26,ve=!1)}function Un(D){U=!1,t(26,ve=!1)}function js(D){E||(D.target===u||u.contains(D.target))&&(Pe=!0)}function Vn(){!E&&ce("start",{activeHandle:Me,value:Ie,values:g.map(D=>n(D))})}function ys(){!E&&ce("stop",{activeHandle:Me,startValue:Ie,value:g[Me],values:g.map(D=>n(D))})}function q(){!E&&ce("change",{activeHandle:Me,startValue:Ie,previousValue:typeof De>"u"?Ie:De,value:g[Me],values:g.map(D=>n(D))})}function he(D){nt[D?"unshift":"push"](()=>{u=D,t(1,u)})}return o.$$set=D=>{"slider"in D&&t(1,u=D.slider),"range"in D&&t(2,f=D.range),"pushy"in D&&t(45,d=D.pushy),"min"in D&&t(3,p=D.min),"max"in D&&t(4,m=D.max),"step"in D&&t(5,y=D.step),"values"in D&&t(0,g=D.values),"vertical"in D&&t(6,_=D.vertical),"float"in D&&t(7,w=D.float),"reversed"in D&&t(8,x=D.reversed),"hoverable"in D&&t(9,C=D.hoverable),"disabled"in D&&t(10,E=D.disabled),"pips"in D&&t(11,A=D.pips),"pipstep"in D&&t(12,T=D.pipstep),"all"in D&&t(13,V=D.all),"first"in D&&t(14,B=D.first),"last"in D&&t(15,z=D.last),"rest"in D&&t(16,O=D.rest),"id"in D&&t(17,G=D.id),"prefix"in D&&t(18,P=D.prefix),"suffix"in D&&t(19,I=D.suffix),"formatter"in D&&t(20,k=D.formatter),"handleFormatter"in D&&t(21,ae=D.handleFormatter),"ariaLabels"in D&&t(22,ue=D.ariaLabels),"precision"in D&&t(46,X=D.precision),"springValues"in D&&t(47,ee=D.springValues)},o.$$.update=()=>{if(o.$$.dirty[0]&24&&t(50,s=function(D){return D<=p?p:D>=m?m:D}),o.$$.dirty[0]&56|o.$$.dirty[1]&524288&&t(49,n=function(D){if(D<=p)return Ze(p);if(D>=m)return Ze(m);D=Ze(D);let re=(D-p)%y,ge=D-re;return Math.abs(re)*2>=y&&(ge+=re>0?y:-y),ge=s(ge),Ze(ge)}),o.$$.dirty[0]&24&&t(24,i=function(D){let re=(D-p)/(m-p)*100;return isNaN(re)||re<=0?0:re>=100?100:Ze(re)}),o.$$.dirty[0]&29360153|o.$$.dirty[1]&458752){Array.isArray(g)||(t(0,g=[(m+p)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)"));const D=fe(g.map(re=>n(re)));(g.length!==D.length||!g.every((re,ge)=>Ze(re)===D[ge]))&&t(0,g=D),le!==g.length?c(t(23,at=dd(g.map(re=>i(re)),ee))):at.set(g.map(re=>i(re))),t(48,le=g.length),g.length>1&&!Array.isArray(ue)&&console.warn("'ariaLabels' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")}o.$$.dirty[0]&320&&t(29,r=_?x?"top":"bottom":x?"right":"left"),o.$$.dirty[0]&320&&t(28,l=_?x?"bottom":"top":x?"left":"right")},[g,u,f,p,m,y,_,w,x,C,E,A,T,V,B,z,O,G,P,I,k,ae,ue,at,i,$,ve,Me,l,r,a,Ze,it,Je,ps,kt,ms,bt,Fi,Pt,si,gs,$s,Un,js,d,X,ee,le,n,s,he]}class us extends Ee{constructor(e){super(),Ce(this,e,vd,yd,Ae,{slider:1,range:2,pushy:45,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,ariaLabels:22,precision:46,springValues:47},null,[-1,-1,-1])}}function xd(o){let e,t;return{c(){e=L("div"),this.h()},l(i){e=F(i,"DIV",{class:!0,style:!0}),j(e).forEach(b),this.h()},h(){v(e,"class","container"),v(e,"style",t=`margin: ${o[0]}px ${o[1]}px;`)},m(i,s){N(i,e,s)},p(i,[s]){s&3&&t!==(t=`margin: ${i[0]}px ${i[1]}px;`)&&v(e,"style",t)},i:ye,o:ye,d(i){i&&b(e)}}}function bd(o,e,t){let{vertical:i=0}=e,{horizontal:s=0}=e;return o.$$set=n=>{"vertical"in n&&t(0,i=n.vertical),"horizontal"in n&&t(1,s=n.horizontal)},[i,s]}class Ve extends Ee{constructor(e){super(),Ce(this,e,bd,xd,Ae,{vertical:0,horizontal:1})}}function wd(o){let e,t,i;return{c(){e=L("input"),this.h()},l(s){e=F(s,"INPUT",{type:!0,class:!0}),this.h()},h(){v(e,"type","checkbox"),v(e,"class","svelte-1ucetel")},m(s,n){N(s,e,n),e.checked=o[0],t||(i=oe(e,"change",o[1]),t=!0)},p(s,[n]){n&1&&(e.checked=s[0])},i:ye,o:ye,d(s){s&&b(e),t=!1,i()}}}function _d(o,e,t){let{checked:i}=e;function s(){i=this.checked,t(0,i)}return o.$$set=n=>{"checked"in n&&t(0,i=n.checked)},[i,s]}class Sd extends Ee{constructor(e){super(),Ce(this,e,_d,wd,Ae,{checked:0})}}function Td(o){let e,t,i,s,n,r,l,a="Rotation X:",h,c,u,f,d,p,m,y="Rotation Y:",g,_,w,x,C,E,A,T="Use compensated distribution: ",V,B,z,O,G,P,I,k;c=new us({props:{min:0,max:Math.PI*2,float:!0,values:[o[0].ENVMAP_ROTX],step:.1,springValues:{stiffness:1,damping:1}}}),c.$on("change",o[2]),f=new Ve({props:{vertical:5}}),_=new us({props:{min:0,max:Math.PI*2,float:!0,values:[o[0].ENVMAP_ROTY],step:.1,springValues:{stiffness:1,damping:1}}}),_.$on("change",o[3]),x=new Ve({props:{vertical:12}});function ae(X){o[4](X)}let ue={};return o[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION!==void 0&&(ue.checked=o[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION),B=new Sd({props:ue}),nt.push(()=>Nt(B,"checked",ae)),G=new Ve({props:{vertical:8}}),{c(){e=L("span"),t=de("Scale: "),i=L("input"),n=H(),r=L("div"),l=L("label"),l.textContent=a,h=H(),te(c.$$.fragment),u=H(),te(f.$$.fragment),d=H(),p=L("div"),m=L("label"),m.textContent=y,g=H(),te(_.$$.fragment),w=H(),te(x.$$.fragment),C=H(),E=L("div"),A=L("p"),A.textContent=T,V=H(),te(B.$$.fragment),O=H(),te(G.$$.fragment),this.h()},l(X){e=F(X,"SPAN",{class:!0});var ee=j(e);t=pe(ee,"Scale: "),i=F(ee,"INPUT",{class:!0,type:!0}),ee.forEach(b),n=W(X),r=F(X,"DIV",{class:!0});var ce=j(r);l=F(ce,"LABEL",{class:!0,"data-svelte-h":!0}),ze(l)!=="svelte-14q8bng"&&(l.textContent=a),h=W(ce),ie(c.$$.fragment,ce),ce.forEach(b),u=W(X),ie(f.$$.fragment,X),d=W(X),p=F(X,"DIV",{class:!0});var le=j(p);m=F(le,"LABEL",{class:!0,"data-svelte-h":!0}),ze(m)!=="svelte-lmzy5l"&&(m.textContent=y),g=W(le),ie(_.$$.fragment,le),le.forEach(b),w=W(X),ie(x.$$.fragment,X),C=W(X),E=F(X,"DIV",{class:!0});var $=j(E);A=F($,"P",{class:!0,"data-svelte-h":!0}),ze(A)!=="svelte-36qtj4"&&(A.textContent=T),V=W($),ie(B.$$.fragment,$),$.forEach(b),O=W(X),ie(G.$$.fragment,X),this.h()},h(){v(i,"class","envmap-scale-input svelte-925zij"),v(i,"type","text"),i.value=s=o[0].ENVMAP_SCALE,v(e,"class","svelte-925zij"),v(l,"class","large no-margin svelte-925zij"),v(r,"class","flex-row svelte-925zij"),v(m,"class","large no-margin svelte-925zij"),v(p,"class","flex-row svelte-925zij"),v(A,"class","svelte-925zij"),v(E,"class","flex-row svelte-925zij")},m(X,ee){N(X,e,ee),R(e,t),R(e,i),N(X,n,ee),N(X,r,ee),R(r,l),R(r,h),se(c,r,null),N(X,u,ee),se(f,X,ee),N(X,d,ee),N(X,p,ee),R(p,m),R(p,g),se(_,p,null),N(X,w,ee),se(x,X,ee),N(X,C,ee),N(X,E,ee),R(E,A),R(E,V),se(B,E,null),N(X,O,ee),se(G,X,ee),P=!0,I||(k=oe(i,"change",o[1]),I=!0)},p(X,[ee]){(!P||ee&1&&s!==(s=X[0].ENVMAP_SCALE)&&i.value!==s)&&(i.value=s);const ce={};ee&1&&(ce.values=[X[0].ENVMAP_ROTX]),c.$set(ce);const le={};ee&1&&(le.values=[X[0].ENVMAP_ROTY]),_.$set(le);const $={};!z&&ee&1&&(z=!0,$.checked=X[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION,zt(()=>z=!1)),B.$set($)},i(X){P||(K(c.$$.fragment,X),K(f.$$.fragment,X),K(_.$$.fragment,X),K(x.$$.fragment,X),K(B.$$.fragment,X),K(G.$$.fragment,X),P=!0)},o(X){Z(c.$$.fragment,X),Z(f.$$.fragment,X),Z(_.$$.fragment,X),Z(x.$$.fragment,X),Z(B.$$.fragment,X),Z(G.$$.fragment,X),P=!1},d(X){X&&(b(e),b(n),b(r),b(u),b(d),b(p),b(w),b(C),b(E),b(O)),ne(c),ne(f,X),ne(_),ne(x,X),ne(B),ne(G,X),I=!1,k()}}}function Md(o,e,t){let i;Ke(o,Re,a=>t(0,i=a));function s(a){const h=parseFloat(a.target.value);isNaN(h)||Be.setStoreProperty({ENVMAP_SCALE:h})}function n(a){const h=a.detail.value;isNaN(h)||Be.setStoreProperty({ENVMAP_ROTX:h})}function r(a){const h=a.detail.value;isNaN(h)||Be.setStoreProperty({ENVMAP_ROTY:h})}function l(a){o.$$.not_equal(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION,a)&&(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION=a,Re.set(i))}return[i,s,n,r,l]}class Ad extends Ee{constructor(e){super(),Ce(this,e,Md,Td,Ae,{})}}function Ed(o){let e,t,i;return{c(){e=qe("svg"),t=qe("path"),i=qe("path"),this.h()},l(s){e=He(s,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var n=j(e);t=He(n,"path",{opacity:!0,d:!0}),j(t).forEach(b),i=He(n,"path",{opacity:!0,d:!0}),j(i).forEach(b),n.forEach(b),this.h()},h(){v(t,"opacity","1.00"),v(t,"d"," M 297.14 52.31 C 301.41 49.73 306.67 49.46 311.49 50.27 C 320.15 52.01 326.80 60.19 327.17 68.95 C 327.20 83.34 327.13 97.74 327.20 112.14 C 370.91 116.61 413.04 135.79 444.72 166.30 C 479.14 198.72 501.12 243.78 505.84 290.80 C 519.90 290.87 533.97 290.83 548.03 290.82 C 555.17 290.76 562.21 294.83 565.66 301.09 C 568.29 305.51 568.58 310.95 567.64 315.90 C 565.66 324.73 556.97 331.34 547.98 331.18 C 533.94 331.16 519.90 331.15 505.87 331.19 C 502.30 365.24 490.06 398.42 470.15 426.32 C 447.77 457.94 416.12 482.97 379.99 497.02 C 363.08 503.74 345.24 507.87 327.18 509.86 C 327.15 524.25 327.19 538.65 327.17 553.04 C 326.85 563.36 317.54 572.61 307.08 572.14 C 296.54 572.70 287.16 563.40 286.83 553.03 C 286.82 538.64 286.85 524.24 286.82 509.85 C 252.54 506.30 219.18 493.88 191.14 473.79 C 150.23 444.77 120.82 399.89 111.18 350.62 C 109.61 344.24 109.16 337.67 108.14 331.19 C 94.10 331.15 80.06 331.16 66.01 331.18 C 58.84 331.26 51.76 327.16 48.31 320.85 C 45.69 316.43 45.43 311.01 46.37 306.07 C 48.28 297.60 56.34 291.18 64.95 290.84 C 79.34 290.81 93.74 290.86 108.14 290.81 C 112.90 243.83 134.81 198.72 169.28 166.36 C 200.92 135.78 243.10 116.61 286.82 112.14 C 286.84 98.07 286.84 84.01 286.82 69.95 C 286.78 62.81 290.84 55.74 297.14 52.31 M 262.65 157.79 C 228.01 167.72 197.13 189.95 176.47 219.45 C 161.50 240.51 152.18 265.29 148.63 290.83 C 162.08 290.79 175.54 290.86 188.99 290.82 C 197.56 290.65 205.94 296.55 208.40 304.83 C 210.38 310.30 209.41 316.52 206.48 321.47 C 202.86 327.45 195.96 331.30 188.96 331.18 C 175.53 331.15 162.10 331.17 148.66 331.17 C 151.52 351.66 157.95 371.70 168.30 389.66 C 183.76 416.92 207.44 439.43 235.44 453.52 C 251.50 461.73 269.01 466.78 286.82 469.35 C 286.85 455.58 286.81 441.80 286.83 428.03 C 287.05 418.21 295.29 409.47 305.08 408.65 C 315.82 407.39 326.22 416.12 327.11 426.84 C 327.31 441.02 327.01 455.21 327.26 469.39 C 338.93 467.46 350.58 465.04 361.68 460.83 C 397.65 447.77 428.45 421.22 446.82 387.67 C 456.55 370.25 462.50 350.93 465.36 331.24 C 451.57 331.08 437.77 331.21 423.98 331.17 C 415.77 330.88 407.97 325.11 405.61 317.19 C 403.61 311.71 404.59 305.48 407.52 300.53 C 411.14 294.55 418.02 290.70 425.01 290.82 C 438.45 290.85 451.89 290.83 465.33 290.83 C 463.35 277.53 460.22 264.35 455.13 251.88 C 443.43 222.59 422.82 196.96 396.74 179.22 C 376.11 164.94 351.99 156.08 327.19 152.65 C 327.14 166.46 327.19 180.26 327.16 194.06 C 326.91 204.53 317.46 213.65 306.97 213.44 C 296.48 213.61 287.08 204.50 286.84 194.03 C 286.78 180.23 286.90 166.43 286.78 152.63 C 278.67 154.04 270.54 155.39 262.65 157.79 Z"),v(i,"opacity","1.00"),v(i,"d"," M 299.63 282.90 C 314.95 278.35 332.50 289.12 335.37 304.84 C 339.17 319.91 328.39 336.59 313.12 339.38 C 297.99 343.17 281.24 332.27 278.59 316.90 C 275.06 302.33 285.07 286.30 299.63 282.90 Z"),v(e,"viewBox","0 0 620 614"),v(e,"version","1.1"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(s,n){N(s,e,n),R(e,t),R(e,i)},p:ye,i:ye,o:ye,d(s){s&&b(e)}}}class Cd extends Ee{constructor(e){super(),Ce(this,e,null,Ed,Ae,{})}}function Rd(o){let e,t,i,s,n,r,l,a;return{c(){e=L("div"),t=L("p"),i=de(o[1]),s=H(),n=L("div"),r=L("div"),this.h()},l(h){e=F(h,"DIV",{class:!0});var c=j(e);t=F(c,"P",{class:!0});var u=j(t);i=pe(u,o[1]),u.forEach(b),s=W(c),n=F(c,"DIV",{class:!0});var f=j(n);r=F(f,"DIV",{class:!0}),j(r).forEach(b),f.forEach(b),c.forEach(b),this.h()},h(){v(t,"class","svelte-da9a43"),v(r,"class","thumb svelte-da9a43"),J(r,"checked",o[0]),v(n,"class","toggle-container svelte-da9a43"),J(n,"checked",o[0]),v(e,"class","container svelte-da9a43")},m(h,c){N(h,e,c),R(e,t),R(t,i),R(e,s),R(e,n),R(n,r),l||(a=oe(n,"click",o[2]),l=!0)},p(h,[c]){c&2&&Ge(i,h[1]),c&1&&J(r,"checked",h[0]),c&1&&J(n,"checked",h[0])},i:ye,o:ye,d(h){h&&b(e),l=!1,a()}}}function Bd(o,e,t){const i=Zo();let{checked:s=!1}=e,{label:n=""}=e;function r(){t(0,s=!s),i("change",{value:s})}return o.$$set=l=>{"checked"in l&&t(0,s=l.checked),"label"in l&&t(1,n=l.label)},[s,n,r]}class na extends Ee{constructor(e){super(),Ce(this,e,Bd,Rd,Ae,{checked:0,label:1})}}function Pd(o){let e,t,i,s=Sn(o[5].position)+"",n,r,l,a,h,c,u,f=Sn(o[5].target)+"",d,p,m,y,g,_,w,x='Use <span class="kbtn svelte-1yl7uky">w</span><span class="kbtn svelte-1yl7uky">a</span><span class="kbtn svelte-1yl7uky">s</span><span class="kbtn svelte-1yl7uky">d</span><span class="kbtn svelte-1yl7uky">q</span><span class="kbtn svelte-1yl7uky">e</span>to move',C,E,A,T,V="Click & drag to rotate",B,z,O,G,P='Hold <span class="kbtn fit-to-size svelte-1yl7uky">shift</span>for precise movements',I,k,ae,ue,X,ee,ce,le,$,U,ve,Pe,Me,Ie,De,at,Ze;return l=new Ve({props:{vertical:3}}),m=new Ve({props:{vertical:10}}),g=new hs({}),E=new Ve({props:{vertical:10}}),z=new Ve({props:{vertical:10}}),k=new Ve({props:{vertical:15}}),ue=new hs({}),U=new Ve({props:{vertical:5}}),{c(){e=L("p"),t=de("Position: "),i=L("span"),n=de(s),r=H(),te(l.$$.fragment),a=H(),h=L("p"),c=de("Target: "),u=L("span"),d=de(f),p=H(),te(m.$$.fragment),y=H(),te(g.$$.fragment),_=H(),w=L("p"),w.innerHTML=x,C=H(),te(E.$$.fragment),A=H(),T=L("p"),T.textContent=V,B=H(),te(z.$$.fragment),O=H(),G=L("p"),G.innerHTML=P,I=H(),te(k.$$.fragment),ae=H(),te(ue.$$.fragment),X=H(),ee=L("span"),ce=de("Movement speed: "),le=L("input"),$=H(),te(U.$$.fragment),ve=H(),Pe=L("span"),Me=de("Rotation speed: "),Ie=L("input"),this.h()},l(Y){e=F(Y,"P",{class:!0});var fe=j(e);t=pe(fe,"Position: "),i=F(fe,"SPAN",{class:!0});var Fe=j(i);n=pe(Fe,s),Fe.forEach(b),fe.forEach(b),r=W(Y),ie(l.$$.fragment,Y),a=W(Y),h=F(Y,"P",{class:!0});var ot=j(h);c=pe(ot,"Target: "),u=F(ot,"SPAN",{class:!0});var Ot=j(u);d=pe(Ot,f),Ot.forEach(b),ot.forEach(b),p=W(Y),ie(m.$$.fragment,Y),y=W(Y),ie(g.$$.fragment,Y),_=W(Y),w=F(Y,"P",{class:!0,"data-svelte-h":!0}),ze(w)!=="svelte-o5lf2a"&&(w.innerHTML=x),C=W(Y),ie(E.$$.fragment,Y),A=W(Y),T=F(Y,"P",{class:!0,"data-svelte-h":!0}),ze(T)!=="svelte-uv6qyc"&&(T.textContent=V),B=W(Y),ie(z.$$.fragment,Y),O=W(Y),G=F(Y,"P",{class:!0,"data-svelte-h":!0}),ze(G)!=="svelte-syzokh"&&(G.innerHTML=P),I=W(Y),ie(k.$$.fragment,Y),ae=W(Y),ie(ue.$$.fragment,Y),X=W(Y),ee=F(Y,"SPAN",{class:!0});var it=j(ee);ce=pe(it,"Movement speed: "),le=F(it,"INPUT",{class:!0,type:!0}),it.forEach(b),$=W(Y),ie(U.$$.fragment,Y),ve=W(Y),Pe=F(Y,"SPAN",{class:!0});var Je=j(Pe);Me=pe(Je,"Rotation speed: "),Ie=F(Je,"INPUT",{class:!0,type:!0}),Je.forEach(b),this.h()},h(){v(i,"class","svelte-1yl7uky"),v(e,"class","darken-span svelte-1yl7uky"),v(u,"class","svelte-1yl7uky"),v(h,"class","darken-span svelte-1yl7uky"),v(w,"class","svelte-1yl7uky"),v(T,"class","svelte-1yl7uky"),v(G,"class","svelte-1yl7uky"),v(le,"class","samples-limit-input svelte-1yl7uky"),v(le,"type","text"),v(ee,"class","svelte-1yl7uky"),v(Ie,"class","samples-limit-input svelte-1yl7uky"),v(Ie,"type","text"),v(Pe,"class","svelte-1yl7uky")},m(Y,fe){N(Y,e,fe),R(e,t),R(e,i),R(i,n),N(Y,r,fe),se(l,Y,fe),N(Y,a,fe),N(Y,h,fe),R(h,c),R(h,u),R(u,d),N(Y,p,fe),se(m,Y,fe),N(Y,y,fe),se(g,Y,fe),N(Y,_,fe),N(Y,w,fe),N(Y,C,fe),se(E,Y,fe),N(Y,A,fe),N(Y,T,fe),N(Y,B,fe),se(z,Y,fe),N(Y,O,fe),N(Y,G,fe),N(Y,I,fe),se(k,Y,fe),N(Y,ae,fe),se(ue,Y,fe),N(Y,X,fe),N(Y,ee,fe),R(ee,ce),R(ee,le),be(le,o[5].movementSpeed),N(Y,$,fe),se(U,Y,fe),N(Y,ve,fe),N(Y,Pe,fe),R(Pe,Me),R(Pe,Ie),be(Ie,o[5].rotationSpeed),De=!0,at||(Ze=[oe(le,"input",o[21]),oe(Ie,"input",o[22])],at=!0)},p(Y,fe){(!De||fe&32)&&s!==(s=Sn(Y[5].position)+"")&&Ge(n,s),(!De||fe&32)&&f!==(f=Sn(Y[5].target)+"")&&Ge(d,f),fe&32&&le.value!==Y[5].movementSpeed&&be(le,Y[5].movementSpeed),fe&32&&Ie.value!==Y[5].rotationSpeed&&be(Ie,Y[5].rotationSpeed)},i(Y){De||(K(l.$$.fragment,Y),K(m.$$.fragment,Y),K(g.$$.fragment,Y),K(E.$$.fragment,Y),K(z.$$.fragment,Y),K(k.$$.fragment,Y),K(ue.$$.fragment,Y),K(U.$$.fragment,Y),De=!0)},o(Y){Z(l.$$.fragment,Y),Z(m.$$.fragment,Y),Z(g.$$.fragment,Y),Z(E.$$.fragment,Y),Z(z.$$.fragment,Y),Z(k.$$.fragment,Y),Z(ue.$$.fragment,Y),Z(U.$$.fragment,Y),De=!1},d(Y){Y&&(b(e),b(r),b(a),b(h),b(p),b(y),b(_),b(w),b(C),b(A),b(T),b(B),b(O),b(G),b(I),b(ae),b(X),b(ee),b($),b(ve),b(Pe)),ne(l,Y),ne(m,Y),ne(g,Y),ne(E,Y),ne(z,Y),ne(k,Y),ne(ue,Y),ne(U,Y),at=!1,rt(Ze)}}}function Id(o){let e,t,i,s,n,r,l,a,h="Fov:",c,u,f,d,p,m,y,g,_,w,x,C,E,A,T="Focus distance:",V,B,z,O,G,P,I,k,ae,ue,X,ee,ce,le,$,U,ve,Pe,Me,Ie,De,at,Ze,Y,fe,Fe,ot,Ot="Cat&#39;s eye bokeh<br/>(mult, pow)",it,Je,ps,kt,ms,bt,Fi,Pt,si,gs,$s;n=new Ve({props:{vertical:5}});function Un(q){o[13](q)}let js={min:.001,max:Math.PI*.5,float:!0,step:Nl,springValues:{stiffness:1,damping:1}};o[3]!==void 0&&(js.values=o[3]),u=new us({props:js}),nt.push(()=>Nt(u,"values",Un)),u.$on("change",o[7]),p=new Ve({props:{vertical:5}}),x=new Ve({props:{vertical:5}}),B=new Ve({props:{horizontal:5}}),P=new Ve({props:{horizontal:5}}),ae=new Cd({}),X=new Ve({props:{vertical:15}}),Me=new Ve({props:{vertical:15}});function Vn(q){o[18](q)}let ys={label:"Cat's eye bokeh:"};return o[4].catsEyeBokehEnabled!==void 0&&(ys.checked=o[4].catsEyeBokehEnabled),De=new na({props:ys}),nt.push(()=>Nt(De,"checked",Vn)),Y=new Ve({props:{vertical:10}}),kt=new Ve({props:{horizontal:4}}),Pt=new At({props:{name:"Camera movement",roundBox:!0,expanded:!1,$$slots:{default:[Pd]},$$scope:{ctx:o}}}),{c(){e=L("span"),t=de("Exposure: "),i=L("input"),s=H(),te(n.$$.fragment),r=H(),l=L("div"),a=L("span"),a.textContent=h,c=H(),te(u.$$.fragment),d=H(),te(p.$$.fragment),m=H(),y=L("span"),g=de("Aperture: "),_=L("input"),w=H(),te(x.$$.fragment),C=H(),E=L("div"),A=L("span"),A.textContent=T,V=H(),te(B.$$.fragment),z=H(),O=L("input"),G=H(),te(P.$$.fragment),I=H(),k=L("button"),te(ae.$$.fragment),ue=H(),te(X.$$.fragment),ee=H(),ce=L("span"),le=de("Tilt Shift (x,y): "),$=L("input"),U=H(),ve=L("input"),Pe=H(),te(Me.$$.fragment),Ie=H(),te(De.$$.fragment),Ze=H(),te(Y.$$.fragment),fe=H(),Fe=L("div"),ot=L("span"),ot.innerHTML=Ot,it=H(),Je=L("input"),ps=H(),te(kt.$$.fragment),ms=H(),bt=L("input"),Fi=H(),te(Pt.$$.fragment),this.h()},l(q){e=F(q,"SPAN",{class:!0});var he=j(e);t=pe(he,"Exposure: "),i=F(he,"INPUT",{class:!0,type:!0}),he.forEach(b),s=W(q),ie(n.$$.fragment,q),r=W(q),l=F(q,"DIV",{class:!0});var D=j(l);a=F(D,"SPAN",{class:!0,"data-svelte-h":!0}),ze(a)!=="svelte-1sn2dj9"&&(a.textContent=h),c=W(D),ie(u.$$.fragment,D),D.forEach(b),d=W(q),ie(p.$$.fragment,q),m=W(q),y=F(q,"SPAN",{class:!0});var re=j(y);g=pe(re,"Aperture: "),_=F(re,"INPUT",{class:!0,type:!0}),re.forEach(b),w=W(q),ie(x.$$.fragment,q),C=W(q),E=F(q,"DIV",{class:!0});var ge=j(E);A=F(ge,"SPAN",{class:!0,"data-svelte-h":!0}),ze(A)!=="svelte-1unc4gb"&&(A.textContent=T),V=W(ge),ie(B.$$.fragment,ge),z=W(ge),O=F(ge,"INPUT",{class:!0,type:!0}),G=W(ge),ie(P.$$.fragment,ge),I=W(ge),k=F(ge,"BUTTON",{class:!0});var we=j(k);ie(ae.$$.fragment,we),we.forEach(b),ge.forEach(b),ue=W(q),ie(X.$$.fragment,q),ee=W(q),ce=F(q,"SPAN",{class:!0});var Qe=j(ce);le=pe(Qe,"Tilt Shift (x,y): "),$=F(Qe,"INPUT",{class:!0,type:!0}),U=W(Qe),ve=F(Qe,"INPUT",{class:!0,type:!0}),Qe.forEach(b),Pe=W(q),ie(Me.$$.fragment,q),Ie=W(q),ie(De.$$.fragment,q),Ze=W(q),ie(Y.$$.fragment,q),fe=W(q),Fe=F(q,"DIV",{class:!0});var wt=j(Fe);ot=F(wt,"SPAN",{class:!0,"data-svelte-h":!0}),ze(ot)!=="svelte-195bkco"&&(ot.innerHTML=Ot),it=W(wt),Je=F(wt,"INPUT",{class:!0,type:!0}),ps=W(wt),ie(kt.$$.fragment,wt),ms=W(wt),bt=F(wt,"INPUT",{class:!0,type:!0}),wt.forEach(b),Fi=W(q),ie(Pt.$$.fragment,q),this.h()},h(){v(i,"class","samples-limit-input svelte-1yl7uky"),v(i,"type","text"),v(e,"class","svelte-1yl7uky"),v(a,"class","svelte-1yl7uky"),v(l,"class","flex-row svelte-1yl7uky"),v(_,"class","samples-limit-input svelte-1yl7uky"),v(_,"type","text"),v(y,"class","svelte-1yl7uky"),v(A,"class","svelte-1yl7uky"),v(O,"class","samples-limit-input svelte-1yl7uky"),v(O,"type","text"),v(k,"class","click-set-fd svelte-1yl7uky"),J(k,"active",o[0]),v(E,"class","fd-flex-row svelte-1yl7uky"),v($,"class","samples-limit-input svelte-1yl7uky"),v($,"type","text"),v(ve,"class","samples-limit-input svelte-1yl7uky"),v(ve,"type","text"),v(ce,"class","svelte-1yl7uky"),v(ot,"class","svelte-1yl7uky"),v(Je,"class","samples-limit-input svelte-1yl7uky"),v(Je,"type","text"),v(bt,"class","samples-limit-input svelte-1yl7uky"),v(bt,"type","text"),v(Fe,"class","flex-row ce-options svelte-1yl7uky"),J(Fe,"disabled",!o[4].catsEyeBokehEnabled)},m(q,he){N(q,e,he),R(e,t),R(e,i),be(i,o[4].exposure),N(q,s,he),se(n,q,he),N(q,r,he),N(q,l,he),R(l,a),R(l,c),se(u,l,null),N(q,d,he),se(p,q,he),N(q,m,he),N(q,y,he),R(y,g),R(y,_),be(_,o[4].aperture),N(q,w,he),se(x,q,he),N(q,C,he),N(q,E,he),R(E,A),R(E,V),se(B,E,null),R(E,z),R(E,O),be(O,o[4].focusDistance),R(E,G),se(P,E,null),R(E,I),R(E,k),se(ae,k,null),N(q,ue,he),se(X,q,he),N(q,ee,he),N(q,ce,he),R(ce,le),R(ce,$),be($,o[1]),R(ce,U),R(ce,ve),be(ve,o[2]),N(q,Pe,he),se(Me,q,he),N(q,Ie,he),se(De,q,he),N(q,Ze,he),se(Y,q,he),N(q,fe,he),N(q,Fe,he),R(Fe,ot),R(Fe,it),R(Fe,Je),be(Je,o[4].catsEyeBokehMult),R(Fe,ps),se(kt,Fe,null),R(Fe,ms),R(Fe,bt),be(bt,o[4].catsEyeBokehPow),N(q,Fi,he),se(Pt,q,he),si=!0,gs||($s=[oe(i,"input",o[12]),oe(_,"input",o[14]),oe(O,"input",o[15]),oe(k,"click",o[6]),oe($,"input",o[16]),oe($,"keyup",o[8]),oe(ve,"input",o[17]),oe(ve,"keyup",o[9]),oe(Je,"input",o[19]),oe(bt,"input",o[20])],gs=!0)},p(q,[he]){he&16&&i.value!==q[4].exposure&&be(i,q[4].exposure);const D={};!f&&he&8&&(f=!0,D.values=q[3],zt(()=>f=!1)),u.$set(D),he&16&&_.value!==q[4].aperture&&be(_,q[4].aperture),he&16&&O.value!==q[4].focusDistance&&be(O,q[4].focusDistance),(!si||he&1)&&J(k,"active",q[0]),he&2&&$.value!==q[1]&&be($,q[1]),he&4&&ve.value!==q[2]&&be(ve,q[2]);const re={};!at&&he&16&&(at=!0,re.checked=q[4].catsEyeBokehEnabled,zt(()=>at=!1)),De.$set(re),he&16&&Je.value!==q[4].catsEyeBokehMult&&be(Je,q[4].catsEyeBokehMult),he&16&&bt.value!==q[4].catsEyeBokehPow&&be(bt,q[4].catsEyeBokehPow),(!si||he&16)&&J(Fe,"disabled",!q[4].catsEyeBokehEnabled);const ge={};he&16777248&&(ge.$$scope={dirty:he,ctx:q}),Pt.$set(ge)},i(q){si||(K(n.$$.fragment,q),K(u.$$.fragment,q),K(p.$$.fragment,q),K(x.$$.fragment,q),K(B.$$.fragment,q),K(P.$$.fragment,q),K(ae.$$.fragment,q),K(X.$$.fragment,q),K(Me.$$.fragment,q),K(De.$$.fragment,q),K(Y.$$.fragment,q),K(kt.$$.fragment,q),K(Pt.$$.fragment,q),si=!0)},o(q){Z(n.$$.fragment,q),Z(u.$$.fragment,q),Z(p.$$.fragment,q),Z(x.$$.fragment,q),Z(B.$$.fragment,q),Z(P.$$.fragment,q),Z(ae.$$.fragment,q),Z(X.$$.fragment,q),Z(Me.$$.fragment,q),Z(De.$$.fragment,q),Z(Y.$$.fragment,q),Z(kt.$$.fragment,q),Z(Pt.$$.fragment,q),si=!1},d(q){q&&(b(e),b(s),b(r),b(l),b(d),b(m),b(y),b(w),b(C),b(E),b(ue),b(ee),b(ce),b(Pe),b(Ie),b(Ze),b(fe),b(Fe),b(Fi)),ne(n,q),ne(u),ne(p,q),ne(x,q),ne(B),ne(P),ne(ae),ne(X,q),ne(Me,q),ne(De,q),ne(Y,q),ne(kt),ne(Pt,q),gs=!1,rt($s)}}}let Nl=.01;function Sn(o){return`(${o.x.toFixed(1)}, ${o.y.toFixed(1)}, ${o.z.toFixed(1)})`}function zd(o,e,t){let i,s;Ke(o,_e,z=>t(4,i=z)),Ke(o,mi,z=>t(5,s=z));let{canvasRef:n}=e,{renderer:r}=e,l=!1;function a(){t(0,l=!0)}function h(z){if(l){let O=z.offsetX,G=n.clientHeight-z.offsetY,P=r.getFocusDistanceFromScreenPoint(new Q(O,G));P>-1&&jt(_e,i.focusDistance=P,i),t(0,l=!1)}}let c="0",u="0",f=[0];_e.subscribe(z=>{f[0]!==z.fov&&t(3,f=[z.fov-z.fov%Nl]),parseFloat(c)!==z.tiltShift.x&&t(1,c=z.tiltShift.x.toString()),parseFloat(u)!==z.tiltShift.y&&t(2,u=z.tiltShift.y.toString())});function d(z){jt(_e,i.fov=parseFloat(z.detail.value),i)}function p(z){let O=parseFloat(z.target.value);isNaN(O)||jt(_e,i.tiltShift=new Q(O,parseFloat(u)),i)}function m(z){let O=parseFloat(z.target.value);isNaN(O)||jt(_e,i.tiltShift=new Q(parseFloat(c),O),i)}function y(){i.exposure=this.value,_e.set(i)}function g(z){f=z,t(3,f)}function _(){i.aperture=this.value,_e.set(i)}function w(){i.focusDistance=this.value,_e.set(i)}function x(){c=this.value,t(1,c)}function C(){u=this.value,t(2,u)}function E(z){o.$$.not_equal(i.catsEyeBokehEnabled,z)&&(i.catsEyeBokehEnabled=z,_e.set(i))}function A(){i.catsEyeBokehMult=this.value,_e.set(i)}function T(){i.catsEyeBokehPow=this.value,_e.set(i)}function V(){s.movementSpeed=this.value,mi.set(s)}function B(){s.rotationSpeed=this.value,mi.set(s)}return o.$$set=z=>{"canvasRef"in z&&t(10,n=z.canvasRef),"renderer"in z&&t(11,r=z.renderer)},o.$$.update=()=>{o.$$.dirty&1024&&n&&n.addEventListener("click",h)},[l,c,u,f,i,s,a,d,p,m,n,r,y,g,_,w,x,C,E,A,T,V,B]}class Nd extends Ee{constructor(e){super(),Ce(this,e,zd,Id,Ae,{canvasRef:10,renderer:11})}}function Dd(o){let e,t,i="width:",s,n,r,l,a,h,c="height:",u,f,d,p,m,y,g,_,w;function x(B){o[9](B)}let C={min:1,max:o[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};o[0]!==void 0&&(C.values=o[0]),n=new us({props:C}),nt.push(()=>Nt(n,"values",x));function E(B){o[10](B)}let A={min:1,max:o[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};o[1]!==void 0&&(A.values=o[1]),f=new us({props:A}),nt.push(()=>Nt(f,"values",E)),m=new Ve({props:{vertical:10}});function T(B){o[11](B)}let V={label:"Full screen:"};return o[2]!==void 0&&(V.checked=o[2]),g=new na({props:V}),nt.push(()=>Nt(g,"checked",T)),g.$on("change",o[4]),{c(){e=L("div"),t=L("label"),t.textContent=i,s=H(),te(n.$$.fragment),l=H(),a=L("div"),h=L("label"),h.textContent=c,u=H(),te(f.$$.fragment),p=H(),te(m.$$.fragment),y=H(),te(g.$$.fragment),this.h()},l(B){e=F(B,"DIV",{class:!0});var z=j(e);t=F(z,"LABEL",{class:!0,"data-svelte-h":!0}),ze(t)!=="svelte-dhiveu"&&(t.textContent=i),s=W(z),ie(n.$$.fragment,z),z.forEach(b),l=W(B),a=F(B,"DIV",{class:!0});var O=j(a);h=F(O,"LABEL",{class:!0,"data-svelte-h":!0}),ze(h)!=="svelte-qeszdj"&&(h.textContent=c),u=W(O),ie(f.$$.fragment,O),O.forEach(b),p=W(B),ie(m.$$.fragment,B),y=W(B),ie(g.$$.fragment,B),this.h()},h(){v(t,"class","svelte-ysouhs"),v(e,"class","flex-row svelte-ysouhs"),v(h,"class","svelte-ysouhs"),v(a,"class","flex-row svelte-ysouhs")},m(B,z){N(B,e,z),R(e,t),R(e,s),se(n,e,null),N(B,l,z),N(B,a,z),R(a,h),R(a,u),se(f,a,null),N(B,p,z),se(m,B,z),N(B,y,z),se(g,B,z),w=!0},p(B,[z]){const O={};z&8&&(O.max=B[3]),!r&&z&1&&(r=!0,O.values=B[0],zt(()=>r=!1)),n.$set(O);const G={};z&8&&(G.max=B[3]),!d&&z&2&&(d=!0,G.values=B[1],zt(()=>d=!1)),f.$set(G);const P={};!_&&z&4&&(_=!0,P.checked=B[2],zt(()=>_=!1)),g.$set(P)},i(B){w||(K(n.$$.fragment,B),K(f.$$.fragment,B),K(m.$$.fragment,B),K(g.$$.fragment,B),w=!0)},o(B){Z(n.$$.fragment,B),Z(f.$$.fragment,B),Z(m.$$.fragment,B),Z(g.$$.fragment,B),w=!1},d(B){B&&(b(e),b(l),b(a),b(p),b(y)),ne(n),ne(f),ne(m,B),ne(g,B)}}}function Ld(o,e,t){let{canvasContainerEl:i}=e,{width:s=1}=e,{height:n=1}=e,r=[1],l=[1],a=0,h=!1,c=!1;function u(){t(3,a=Math.floor(Math.max(innerHeight,innerWidth)*1))}function f(){const g=i.getBoundingClientRect();t(0,r=[g.width-30]),t(1,l=[g.height-30])}function d(){h&&f()}function p(g){r=g,t(0,r),t(7,i),t(8,c),t(2,h)}function m(g){l=g,t(1,l),t(7,i),t(8,c),t(2,h)}function y(g){h=g,t(2,h)}return o.$$set=g=>{"canvasContainerEl"in g&&t(7,i=g.canvasContainerEl),"width"in g&&t(5,s=g.width),"height"in g&&t(6,n=g.height)},o.$$.update=()=>{o.$$.dirty&388&&i&&(u(),c||(Hl().then(()=>{t(0,r=[800]),t(1,l=[600])}),t(8,c=!0)),new ResizeObserver(_=>{u(),h&&f()}).observe(i)),o.$$.dirty&3&&(t(5,s=r[0]),t(6,n=l[0]))},[r,l,h,a,d,s,n,i,c,p,m,y]}class Fd extends Ee{constructor(e){super(),Ce(this,e,Ld,Dd,Ae,{canvasContainerEl:7,width:5,height:6})}}function Od(o){let e,t,i,s;return{c(){e=qe("svg"),t=qe("path"),i=qe("path"),s=qe("path"),this.h()},l(n){e=He(n,"svg",{stroke:!0,fill:!0,viewBox:!0,version:!0,xmlns:!0,class:!0});var r=j(e);t=He(r,"path",{opacity:!0,d:!0}),j(t).forEach(b),i=He(r,"path",{opacity:!0,d:!0}),j(i).forEach(b),s=He(r,"path",{opacity:!0,d:!0}),j(s).forEach(b),r.forEach(b),this.h()},h(){v(t,"opacity","1.00"),v(t,"d"," M 103.43 21.79 C 111.83 18.99 121.69 23.23 125.64 31.09 C 149.89 75.28 174.08 119.50 198.31 163.70 C 200.46 167.45 202.75 171.48 202.55 175.96 C 202.87 183.80 197.92 191.61 190.63 194.54 C 186.36 196.45 181.57 196.01 177.02 196.02 C 131.67 196.01 86.33 196.02 40.98 196.01 C 36.42 196.03 31.63 196.44 27.36 194.53 C 19.76 191.43 14.71 183.06 15.51 174.89 C 15.68 170.56 17.98 166.75 20.08 163.08 C 44.15 119.11 68.24 75.15 92.34 31.19 C 94.56 26.69 98.73 23.40 103.43 21.79 M 106.97 37.54 C 82.17 83.53 56.73 129.19 31.81 175.12 C 30.94 176.65 32.20 178.20 32.64 179.64 C 83.56 179.80 134.49 179.86 185.41 179.61 C 186.15 177.91 187.13 175.92 185.82 174.21 C 160.96 128.99 136.24 83.69 111.39 38.47 C 110.59 36.64 108.47 37.54 106.97 37.54 Z"),v(i,"opacity","1.00"),v(i,"d"," M 100.83 75.80 C 103.89 72.40 109.01 72.86 113.08 73.72 C 116.16 75.41 118.75 78.35 119.29 81.91 C 119.69 84.94 119.14 87.98 118.79 90.99 C 117.60 106.66 115.97 122.30 114.57 137.96 C 114.27 140.68 114.61 143.66 113.13 146.10 C 111.99 147.27 110.41 147.85 109.01 148.63 C 106.95 147.61 104.34 146.48 104.15 143.82 C 101.84 124.56 99.60 105.27 97.49 85.98 C 96.96 82.28 97.90 78.30 100.83 75.80 Z"),v(s,"opacity","1.00"),v(s,"d"," M 104.43 154.62 C 108.84 151.82 115.08 153.88 117.32 158.50 C 120.74 164.13 115.48 172.30 108.95 171.69 C 104.12 172.07 99.98 167.63 99.67 163.01 C 99.53 159.61 101.51 156.30 104.43 154.62 Z"),v(e,"stroke",o[1]),v(e,"fill",o[0]),v(e,"viewBox","0 0 218 218"),v(e,"version","1.1"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(n,r){N(n,e,r),R(e,t),R(e,i),R(e,s)},p(n,[r]){r&2&&v(e,"stroke",n[1]),r&1&&v(e,"fill",n[0])},i:ye,o:ye,d(n){n&&b(e)}}}function kd(o,e,t){let{fill:i="currentColor"}=e,{stroke:s="currentColor"}=e;return o.$$set=n=>{"fill"in n&&t(0,i=n.fill),"stroke"in n&&t(1,s=n.stroke)},[i,s]}class Ud extends Ee{constructor(e){super(),Ce(this,e,kd,Od,Ae,{fill:0,stroke:1})}}function $o(o){let e,t,i,s,n,r;return e=new hs({props:{topSpace:10,bottomSpace:10}}),s=new Ud({}),{c(){te(e.$$.fragment),t=H(),i=L("h6"),te(s.$$.fragment),n=de(`Using random-array-offset with the Halton sampler results in poor sampling\r
    performance`),this.h()},l(l){ie(e.$$.fragment,l),t=W(l),i=F(l,"H6",{class:!0});var a=j(i);ie(s.$$.fragment,a),n=pe(a,`Using random-array-offset with the Halton sampler results in poor sampling\r
    performance`),a.forEach(b),this.h()},h(){v(i,"class","warning svelte-19ogekg")},m(l,a){se(e,l,a),N(l,t,a),N(l,i,a),se(s,i,null),R(i,n),r=!0},i(l){r||(K(e.$$.fragment,l),K(s.$$.fragment,l),r=!0)},o(l){Z(e.$$.fragment,l),Z(s.$$.fragment,l),r=!1},d(l){l&&(b(t),b(i)),ne(e,l),ne(s)}}}function Vd(o){let e,t,i,s,n="None",r,l,a,h,c,u="Add random value",f,d,p,m,y,g="Add random value and random array offset",_,w,x,C,E,A="Blue noise mask",T,V,B,z,O,G,P=o[1]&&$o();return z=Rn(o[3][0]),{c(){e=L("label"),t=L("input"),i=H(),s=L("p"),s.textContent=n,r=H(),l=L("label"),a=L("input"),h=H(),c=L("p"),c.textContent=u,f=H(),d=L("label"),p=L("input"),m=H(),y=L("p"),y.textContent=g,_=H(),w=L("label"),x=L("input"),C=H(),E=L("p"),E.textContent=A,T=H(),P&&P.c(),V=Le(),this.h()},l(I){e=F(I,"LABEL",{class:!0});var k=j(e);t=F(k,"INPUT",{type:!0,name:!0,class:!0}),i=W(k),s=F(k,"P",{class:!0,"data-svelte-h":!0}),ze(s)!=="svelte-8wc9ky"&&(s.textContent=n),k.forEach(b),r=W(I),l=F(I,"LABEL",{class:!0});var ae=j(l);a=F(ae,"INPUT",{type:!0,name:!0,class:!0}),h=W(ae),c=F(ae,"P",{class:!0,"data-svelte-h":!0}),ze(c)!=="svelte-1mmj9zd"&&(c.textContent=u),ae.forEach(b),f=W(I),d=F(I,"LABEL",{class:!0});var ue=j(d);p=F(ue,"INPUT",{type:!0,name:!0,class:!0}),m=W(ue),y=F(ue,"P",{class:!0,"data-svelte-h":!0}),ze(y)!=="svelte-18qo9w9"&&(y.textContent=g),ue.forEach(b),_=W(I),w=F(I,"LABEL",{class:!0});var X=j(w);x=F(X,"INPUT",{type:!0,name:!0,class:!0}),C=W(X),E=F(X,"P",{class:!0,"data-svelte-h":!0}),ze(E)!=="svelte-1ypjb5y"&&(E.textContent=A),X.forEach(b),T=W(I),P&&P.l(I),V=Le(),this.h()},h(){v(t,"type","radio"),v(t,"name","correlation-fix-type"),t.__value=is.NONE,be(t,t.__value),v(t,"class","svelte-19ogekg"),v(s,"class","svelte-19ogekg"),v(e,"class","svelte-19ogekg"),v(a,"type","radio"),v(a,"name","correlation-fix-type"),a.__value=is.RANDOM_OFFSET,be(a,a.__value),v(a,"class","svelte-19ogekg"),v(c,"class","svelte-19ogekg"),v(l,"class","svelte-19ogekg"),v(p,"type","radio"),v(p,"name","correlation-fix-type"),p.__value=is.RANDOM_ARRAY_OFFSET,be(p,p.__value),v(p,"class","svelte-19ogekg"),v(y,"class","svelte-19ogekg"),v(d,"class","svelte-19ogekg"),v(x,"type","radio"),v(x,"name","correlation-fix-type"),x.__value=is.BLUE_NOISE_MASK,be(x,x.__value),v(x,"class","svelte-19ogekg"),v(E,"class","svelte-19ogekg"),v(w,"class","svelte-19ogekg"),z.p(t,a,p,x)},m(I,k){N(I,e,k),R(e,t),t.checked=t.__value===o[0].SAMPLER_DECORRELATION,R(e,i),R(e,s),N(I,r,k),N(I,l,k),R(l,a),a.checked=a.__value===o[0].SAMPLER_DECORRELATION,R(l,h),R(l,c),N(I,f,k),N(I,d,k),R(d,p),p.checked=p.__value===o[0].SAMPLER_DECORRELATION,R(d,m),R(d,y),N(I,_,k),N(I,w,k),R(w,x),x.checked=x.__value===o[0].SAMPLER_DECORRELATION,R(w,C),R(w,E),N(I,T,k),P&&P.m(I,k),N(I,V,k),B=!0,O||(G=[oe(t,"change",o[2]),oe(a,"change",o[4]),oe(p,"change",o[5]),oe(x,"change",o[6])],O=!0)},p(I,[k]){k&1&&(t.checked=t.__value===I[0].SAMPLER_DECORRELATION),k&1&&(a.checked=a.__value===I[0].SAMPLER_DECORRELATION),k&1&&(p.checked=p.__value===I[0].SAMPLER_DECORRELATION),k&1&&(x.checked=x.__value===I[0].SAMPLER_DECORRELATION),I[1]?P?k&2&&K(P,1):(P=$o(),P.c(),K(P,1),P.m(V.parentNode,V)):P&&(Lr(),Z(P,1,1,()=>{P=null}),Fr())},i(I){B||(K(P),B=!0)},o(I){Z(P),B=!1},d(I){I&&(b(e),b(r),b(l),b(f),b(d),b(_),b(w),b(T),b(V)),P&&P.d(I),z.r(),O=!1,rt(G)}}}function Gd(o,e,t){let i,s;Ke(o,Re,c=>t(0,s=c));const n=[[]];function r(){s.SAMPLER_DECORRELATION=this.__value,Re.set(s)}function l(){s.SAMPLER_DECORRELATION=this.__value,Re.set(s)}function a(){s.SAMPLER_DECORRELATION=this.__value,Re.set(s)}function h(){s.SAMPLER_DECORRELATION=this.__value,Re.set(s)}return o.$$.update=()=>{o.$$.dirty&1&&t(1,i=s.SAMPLER_DECORRELATION==is.RANDOM_ARRAY_OFFSET&&s.SAMPLER_TYPE==It.HALTON)},[s,i,r,n,l,a,h]}class qd extends Ee{constructor(e){super(),Ce(this,e,Gd,Vd,Ae,{})}}function Hd(o){let e,t="Mis Type:",i,s,n,r,l,a,h,c,u,f,d,p,m,y,g,_,w,x,C,E,A="Method:",T,V,B,z,O,G,P,I,k,ae,ue,X,ee,ce,le;return s=new hs({}),V=new hs({}),X=Rn(o[2][0]),ee=Rn(o[2][1]),{c(){e=L("p"),e.textContent=t,i=H(),te(s.$$.fragment),n=H(),r=L("label"),l=L("input"),a=de(`\r
  Brdf only`),h=H(),c=L("label"),u=L("input"),f=de(`\r
  One Sample Model`),d=H(),p=L("label"),m=L("input"),y=de(`\r
  Next Event Estimation`),g=H(),_=L("br"),w=H(),x=L("br"),C=H(),E=L("p"),E.textContent=A,T=H(),te(V.$$.fragment),B=H(),z=L("label"),O=L("input"),G=de(`\r
  Balanced Heuristic`),P=H(),I=L("label"),k=L("input"),ae=de(`\r
  Power Heuristic`),this.h()},l($){e=F($,"P",{class:!0,"data-svelte-h":!0}),ze(e)!=="svelte-v6hg55"&&(e.textContent=t),i=W($),ie(s.$$.fragment,$),n=W($),r=F($,"LABEL",{class:!0});var U=j(r);l=F(U,"INPUT",{type:!0,name:!0,class:!0}),a=pe(U,`\r
  Brdf only`),U.forEach(b),h=W($),c=F($,"LABEL",{class:!0});var ve=j(c);u=F(ve,"INPUT",{type:!0,name:!0,class:!0}),f=pe(ve,`\r
  One Sample Model`),ve.forEach(b),d=W($),p=F($,"LABEL",{class:!0});var Pe=j(p);m=F(Pe,"INPUT",{type:!0,name:!0,class:!0}),y=pe(Pe,`\r
  Next Event Estimation`),Pe.forEach(b),g=W($),_=F($,"BR",{}),w=W($),x=F($,"BR",{}),C=W($),E=F($,"P",{class:!0,"data-svelte-h":!0}),ze(E)!=="svelte-jbj2k9"&&(E.textContent=A),T=W($),ie(V.$$.fragment,$),B=W($),z=F($,"LABEL",{class:!0});var Me=j(z);O=F(Me,"INPUT",{type:!0,name:!0,class:!0}),G=pe(Me,`\r
  Balanced Heuristic`),Me.forEach(b),P=W($),I=F($,"LABEL",{class:!0});var Ie=j(I);k=F(Ie,"INPUT",{type:!0,name:!0,class:!0}),ae=pe(Ie,`\r
  Power Heuristic`),Ie.forEach(b),this.h()},h(){v(e,"class","svelte-12cpmoe"),v(l,"type","radio"),v(l,"name","mis-type"),l.__value=Mn.BRDF_ONLY,be(l,l.__value),v(l,"class","svelte-12cpmoe"),v(r,"class","svelte-12cpmoe"),v(u,"type","radio"),v(u,"name","mis-type"),u.__value=Mn.ONE_SAMPLE_MODEL,be(u,u.__value),v(u,"class","svelte-12cpmoe"),v(c,"class","svelte-12cpmoe"),v(m,"type","radio"),v(m,"name","mis-type"),m.__value=Mn.NEXT_EVENT_ESTIMATION,be(m,m.__value),v(m,"class","svelte-12cpmoe"),v(p,"class","svelte-12cpmoe"),v(E,"class","svelte-12cpmoe"),v(O,"type","radio"),v(O,"name","mis-heuristic"),O.__value=0,be(O,O.__value),v(O,"class","svelte-12cpmoe"),v(z,"class","svelte-12cpmoe"),v(k,"type","radio"),v(k,"name","mis-heuristic"),k.__value=1,be(k,k.__value),v(k,"class","svelte-12cpmoe"),v(I,"class","svelte-12cpmoe"),X.p(O,k),ee.p(l,u,m)},m($,U){N($,e,U),N($,i,U),se(s,$,U),N($,n,U),N($,r,U),R(r,l),l.checked=l.__value===o[0].MIS_TYPE,R(r,a),N($,h,U),N($,c,U),R(c,u),u.checked=u.__value===o[0].MIS_TYPE,R(c,f),N($,d,U),N($,p,U),R(p,m),m.checked=m.__value===o[0].MIS_TYPE,R(p,y),N($,g,U),N($,_,U),N($,w,U),N($,x,U),N($,C,U),N($,E,U),N($,T,U),se(V,$,U),N($,B,U),N($,z,U),R(z,O),O.checked=O.__value===o[0].USE_POWER_HEURISTIC,R(z,G),N($,P,U),N($,I,U),R(I,k),k.checked=k.__value===o[0].USE_POWER_HEURISTIC,R(I,ae),ue=!0,ce||(le=[oe(l,"change",o[1]),oe(u,"change",o[3]),oe(m,"change",o[4]),oe(O,"change",o[5]),oe(k,"change",o[6])],ce=!0)},p($,[U]){U&1&&(l.checked=l.__value===$[0].MIS_TYPE),U&1&&(u.checked=u.__value===$[0].MIS_TYPE),U&1&&(m.checked=m.__value===$[0].MIS_TYPE),U&1&&(O.checked=O.__value===$[0].USE_POWER_HEURISTIC),U&1&&(k.checked=k.__value===$[0].USE_POWER_HEURISTIC)},i($){ue||(K(s.$$.fragment,$),K(V.$$.fragment,$),ue=!0)},o($){Z(s.$$.fragment,$),Z(V.$$.fragment,$),ue=!1},d($){$&&(b(e),b(i),b(n),b(r),b(h),b(c),b(d),b(p),b(g),b(_),b(w),b(x),b(C),b(E),b(T),b(B),b(z),b(P),b(I)),ne(s,$),ne(V,$),X.r(),ee.r(),ce=!1,rt(le)}}}function Wd(o,e,t){let i;Ke(o,Re,c=>t(0,i=c));const s=[[],[]];function n(){i.MIS_TYPE=this.__value,Re.set(i)}function r(){i.MIS_TYPE=this.__value,Re.set(i)}function l(){i.MIS_TYPE=this.__value,Re.set(i)}function a(){i.USE_POWER_HEURISTIC=this.__value,Re.set(i)}function h(){i.USE_POWER_HEURISTIC=this.__value,Re.set(i)}return[i,n,s,r,l,a,h]}class $d extends Ee{constructor(e){super(),Ce(this,e,Wd,Hd,Ae,{})}}function jd(o){let e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y,g,_;return y=Rn(o[2][0]),{c(){e=L("label"),t=L("input"),i=de(`\r
  Uniform random`),s=H(),n=L("label"),r=L("input"),l=de(`\r
  Halton sequence`),a=H(),h=L("label"),c=L("input"),u=de(`\r
  Blue Noise`),f=H(),d=L("label"),p=L("input"),m=de(`\r
  Sequenced R2`),this.h()},l(w){e=F(w,"LABEL",{class:!0});var x=j(e);t=F(x,"INPUT",{type:!0,name:!0,class:!0}),i=pe(x,`\r
  Uniform random`),x.forEach(b),s=W(w),n=F(w,"LABEL",{class:!0});var C=j(n);r=F(C,"INPUT",{type:!0,name:!0,class:!0}),l=pe(C,`\r
  Halton sequence`),C.forEach(b),a=W(w),h=F(w,"LABEL",{class:!0});var E=j(h);c=F(E,"INPUT",{type:!0,name:!0,class:!0}),u=pe(E,`\r
  Blue Noise`),E.forEach(b),f=W(w),d=F(w,"LABEL",{class:!0});var A=j(d);p=F(A,"INPUT",{type:!0,name:!0,class:!0}),m=pe(A,`\r
  Sequenced R2`),A.forEach(b),this.h()},h(){v(t,"type","radio"),v(t,"name","sampler-type"),t.__value=It.UNIFORM,be(t,t.__value),v(t,"class","svelte-12cpmoe"),v(e,"class","svelte-12cpmoe"),v(r,"type","radio"),v(r,"name","sampler-type"),r.__value=It.HALTON,be(r,r.__value),v(r,"class","svelte-12cpmoe"),v(n,"class","svelte-12cpmoe"),v(c,"type","radio"),v(c,"name","sampler-type"),c.__value=It.BLUE_NOISE,be(c,c.__value),v(c,"class","svelte-12cpmoe"),v(h,"class","svelte-12cpmoe"),v(p,"type","radio"),v(p,"name","sampler-type"),p.__value=It.CUSTOM_R2,be(p,p.__value),v(p,"class","svelte-12cpmoe"),v(d,"class","svelte-12cpmoe"),y.p(t,r,c,p)},m(w,x){N(w,e,x),R(e,t),t.checked=t.__value===o[0].SAMPLER_TYPE,R(e,i),N(w,s,x),N(w,n,x),R(n,r),r.checked=r.__value===o[0].SAMPLER_TYPE,R(n,l),N(w,a,x),N(w,h,x),R(h,c),c.checked=c.__value===o[0].SAMPLER_TYPE,R(h,u),N(w,f,x),N(w,d,x),R(d,p),p.checked=p.__value===o[0].SAMPLER_TYPE,R(d,m),g||(_=[oe(t,"change",o[1]),oe(r,"change",o[3]),oe(c,"change",o[4]),oe(p,"change",o[5])],g=!0)},p(w,[x]){x&1&&(t.checked=t.__value===w[0].SAMPLER_TYPE),x&1&&(r.checked=r.__value===w[0].SAMPLER_TYPE),x&1&&(c.checked=c.__value===w[0].SAMPLER_TYPE),x&1&&(p.checked=p.__value===w[0].SAMPLER_TYPE)},i:ye,o:ye,d(w){w&&(b(e),b(s),b(n),b(a),b(h),b(f),b(d)),y.r(),g=!1,rt(_)}}}function Yd(o,e,t){let i;Ke(o,Re,h=>t(0,i=h));const s=[[]];function n(){i.SAMPLER_TYPE=this.__value,Re.set(i)}function r(){i.SAMPLER_TYPE=this.__value,Re.set(i)}function l(){i.SAMPLER_TYPE=this.__value,Re.set(i)}function a(){i.SAMPLER_TYPE=this.__value,Re.set(i)}return[i,n,s,r,l,a]}class Xd extends Ee{constructor(e){super(),Ce(this,e,Yd,jd,Ae,{})}}function Kd(o){let e,t;return e=new Xd({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function Zd(o){let e,t;return e=new qd({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function Jd(o){let e,t;return e=new $d({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function Qd(o){let e,t,i,s,n,r,l="+",a,h,c="∞",u,f,d="1",p,m,y,g,_,w,x,C,E;return m=new At({props:{name:"Sampler",roundBox:!0,$$slots:{default:[Kd]},$$scope:{ctx:o}}}),g=new At({props:{name:"Pixel decorrelation",roundBox:!0,$$slots:{default:[Zd]},$$scope:{ctx:o}}}),w=new At({props:{name:"Mis Options",roundBox:!0,$$slots:{default:[Jd]},$$scope:{ctx:o}}}),{c(){e=L("span"),t=de("Sample Limit: "),i=L("input"),n=H(),r=L("button"),r.textContent=l,a=H(),h=L("button"),h.textContent=c,u=H(),f=L("button"),f.textContent=d,p=H(),te(m.$$.fragment),y=H(),te(g.$$.fragment),_=H(),te(w.$$.fragment),this.h()},l(A){e=F(A,"SPAN",{});var T=j(e);t=pe(T,"Sample Limit: "),i=F(T,"INPUT",{class:!0,type:!0}),T.forEach(b),n=W(A),r=F(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(r)!=="svelte-okw43g"&&(r.textContent=l),a=W(A),h=F(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(h)!=="svelte-11gvuxs"&&(h.textContent=c),u=W(A),f=F(A,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(f)!=="svelte-14bsa7c"&&(f.textContent=d),p=W(A),ie(m.$$.fragment,A),y=W(A),ie(g.$$.fragment,A),_=W(A),ie(w.$$.fragment,A),this.h()},h(){v(i,"class","samples-limit-input svelte-o9rhx8"),v(i,"type","text"),i.value=s=o[0].limit,v(r,"class","sample-limit-btn svelte-o9rhx8"),v(h,"class","sample-limit-btn svelte-o9rhx8"),v(f,"class","sample-limit-btn svelte-o9rhx8")},m(A,T){N(A,e,T),R(e,t),R(e,i),N(A,n,T),N(A,r,T),N(A,a,T),N(A,h,T),N(A,u,T),N(A,f,T),N(A,p,T),se(m,A,T),N(A,y,T),se(g,A,T),N(A,_,T),se(w,A,T),x=!0,C||(E=[oe(i,"change",o[1]),oe(r,"click",o[2]),oe(h,"click",o[3]),oe(f,"click",o[4])],C=!0)},p(A,[T]){(!x||T&1&&s!==(s=A[0].limit)&&i.value!==s)&&(i.value=s);const V={};T&32&&(V.$$scope={dirty:T,ctx:A}),m.$set(V);const B={};T&32&&(B.$$scope={dirty:T,ctx:A}),g.$set(B);const z={};T&32&&(z.$$scope={dirty:T,ctx:A}),w.$set(z)},i(A){x||(K(m.$$.fragment,A),K(g.$$.fragment,A),K(w.$$.fragment,A),x=!0)},o(A){Z(m.$$.fragment,A),Z(g.$$.fragment,A),Z(w.$$.fragment,A),x=!1},d(A){A&&(b(e),b(n),b(r),b(a),b(h),b(u),b(f),b(p),b(y),b(_)),ne(m,A),ne(g,A),ne(w,A),C=!1,rt(E)}}}function ep(o,e,t){let i;Ke(o,Oe,a=>t(0,i=a));function s(a){const h=parseInt(a.target.value);isNaN(h)||Oe.setLimit(h)}function n(){Oe.setLimit(i.limit+1)}function r(){Oe.setLimit(999999)}function l(){Oe.setLimit(1),Oe.reset()}return[i,s,n,r,l]}class tp extends Ee{constructor(e){super(),Ce(this,e,ep,Qd,Ae,{})}}function ip(o){let e,t,i,s=o[0].nodesCount+"",n,r,l,a,h,c=o[1].count+"",u,f,d,p,m,y=o[1].tileSize+"",g,_,w,x,C,E=(o[1].count==o[1].limit?0:o[1].ms.toFixed(0))+"",A,T,V,B,z,O,G=o[1].clickTarget+"",P;return{c(){e=L("p"),t=de("Bvh nodes count: "),i=L("span"),n=de(s),r=H(),l=L("p"),a=de("Sample: "),h=L("span"),u=de(c),f=H(),d=L("p"),p=de("Tile: "),m=L("span"),g=de(y),_=H(),w=L("p"),x=de("Performance: "),C=L("span"),A=de(E),T=de(" ms"),V=H(),B=L("p"),z=de("Click target: "),O=L("span"),P=de(G),this.h()},l(I){e=F(I,"P",{class:!0});var k=j(e);t=pe(k,"Bvh nodes count: "),i=F(k,"SPAN",{class:!0});var ae=j(i);n=pe(ae,s),ae.forEach(b),k.forEach(b),r=W(I),l=F(I,"P",{class:!0});var ue=j(l);a=pe(ue,"Sample: "),h=F(ue,"SPAN",{class:!0});var X=j(h);u=pe(X,c),X.forEach(b),ue.forEach(b),f=W(I),d=F(I,"P",{class:!0});var ee=j(d);p=pe(ee,"Tile: "),m=F(ee,"SPAN",{class:!0});var ce=j(m);g=pe(ce,y),ce.forEach(b),ee.forEach(b),_=W(I),w=F(I,"P",{class:!0});var le=j(w);x=pe(le,"Performance: "),C=F(le,"SPAN",{class:!0});var $=j(C);A=pe($,E),T=pe($," ms"),$.forEach(b),le.forEach(b),V=W(I),B=F(I,"P",{class:!0});var U=j(B);z=pe(U,"Click target: "),O=F(U,"SPAN",{class:!0});var ve=j(O);P=pe(ve,G),ve.forEach(b),U.forEach(b),this.h()},h(){v(i,"class","svelte-denqo1"),v(e,"class","svelte-denqo1"),v(h,"class","svelte-denqo1"),v(l,"class","svelte-denqo1"),v(m,"class","svelte-denqo1"),v(d,"class","svelte-denqo1"),v(C,"class","svelte-denqo1"),v(w,"class","svelte-denqo1"),v(O,"class","user-selectable svelte-denqo1"),v(B,"class","svelte-denqo1")},m(I,k){N(I,e,k),R(e,t),R(e,i),R(i,n),N(I,r,k),N(I,l,k),R(l,a),R(l,h),R(h,u),N(I,f,k),N(I,d,k),R(d,p),R(d,m),R(m,g),N(I,_,k),N(I,w,k),R(w,x),R(w,C),R(C,A),R(C,T),N(I,V,k),N(I,B,k),R(B,z),R(B,O),R(O,P)},p(I,[k]){k&1&&s!==(s=I[0].nodesCount+"")&&Ge(n,s),k&2&&c!==(c=I[1].count+"")&&Ge(u,c),k&2&&y!==(y=I[1].tileSize+"")&&Ge(g,y),k&2&&E!==(E=(I[1].count==I[1].limit?0:I[1].ms.toFixed(0))+"")&&Ge(A,E),k&2&&G!==(G=I[1].clickTarget+"")&&Ge(P,G)},i:ye,o:ye,d(I){I&&(b(e),b(r),b(l),b(f),b(d),b(_),b(w),b(V),b(B))}}}function sp(o,e,t){let i,s;return Ke(o,vl,n=>t(0,i=n)),Ke(o,Oe,n=>t(1,s=n)),[i,s]}class np extends Ee{constructor(e){super(),Ce(this,e,sp,ip,Ae,{})}}function rp(o){let e,t="restart",i,s,n="stop",r,l;return{c(){e=L("button"),e.textContent=t,i=H(),s=L("button"),s.textContent=n,this.h()},l(a){e=F(a,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(e)!=="svelte-5dldn0"&&(e.textContent=t),i=W(a),s=F(a,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(s)!=="svelte-1gwj45s"&&(s.textContent=n),this.h()},h(){v(e,"class","svelte-abnc1m"),v(s,"class","svelte-abnc1m")},m(a,h){N(a,e,h),N(a,i,h),N(a,s,h),r||(l=[oe(e,"click",o[0]),oe(s,"click",o[1])],r=!0)},p:ye,i:ye,o:ye,d(a){a&&(b(e),b(i),b(s)),r=!1,rt(l)}}}function ap(o,e,t){let i;Ke(o,Oe,r=>t(2,i=r));function s(){Oe.reset()}function n(){Oe.setLimit(i.count)}return[s,n]}class op extends Ee{constructor(e){super(),Ce(this,e,ap,rp,Ae,{})}}function lp(o){let e,t,i="Light bounces:",s,n,r,l,a,h,c,u,f;function d(g){o[2](g)}let p={min:1,max:20,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};o[0]!==void 0&&(p.values=o[0]),n=new us({props:p}),nt.push(()=>Nt(n,"values",d)),a=new Ve({props:{vertical:10}});function m(g){o[3](g)}let y={label:"Force max tile size:"};return o[1].forceMaxTileSize!==void 0&&(y.checked=o[1].forceMaxTileSize),c=new na({props:y}),nt.push(()=>Nt(c,"checked",m)),{c(){e=L("div"),t=L("label"),t.textContent=i,s=H(),te(n.$$.fragment),l=H(),te(a.$$.fragment),h=H(),te(c.$$.fragment),this.h()},l(g){e=F(g,"DIV",{class:!0});var _=j(e);t=F(_,"LABEL",{class:!0,"data-svelte-h":!0}),ze(t)!=="svelte-1ugqakj"&&(t.textContent=i),s=W(_),ie(n.$$.fragment,_),_.forEach(b),l=W(g),ie(a.$$.fragment,g),h=W(g),ie(c.$$.fragment,g),this.h()},h(){v(t,"class","svelte-1ys9cqv"),v(e,"class","flex-row svelte-1ys9cqv")},m(g,_){N(g,e,_),R(e,t),R(e,s),se(n,e,null),N(g,l,_),se(a,g,_),N(g,h,_),se(c,g,_),f=!0},p(g,[_]){const w={};!r&&_&1&&(r=!0,w.values=g[0],zt(()=>r=!1)),n.$set(w);const x={};!u&&_&2&&(u=!0,x.checked=g[1].forceMaxTileSize,zt(()=>u=!1)),c.$set(x)},i(g){f||(K(n.$$.fragment,g),K(a.$$.fragment,g),K(c.$$.fragment,g),f=!0)},o(g){Z(n.$$.fragment,g),Z(a.$$.fragment,g),Z(c.$$.fragment,g),f=!1},d(g){g&&(b(e),b(l),b(h)),ne(n),ne(a,g),ne(c,g)}}}function hp(o,e,t){let i;Ke(o,Re,l=>t(1,i=l));let s=[i.BOUNCES_COUNT];function n(l){s=l,t(0,s)}function r(l){o.$$.not_equal(i.forceMaxTileSize,l)&&(i.forceMaxTileSize=l,Re.set(i))}return o.$$.update=()=>{o.$$.dirty&1&&jt(Re,i.BOUNCES_COUNT=s[0],i)},[s,i,n,r]}class up extends Ee{constructor(e){super(),Ce(this,e,hp,lp,Ae,{})}}function cp(o){let e,t;return{c(){e=qe("svg"),t=qe("path"),this.h()},l(i){e=He(i,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,xmlns:!0,class:!0});var s=j(e);t=He(s,"path",{d:!0}),j(t).forEach(b),s.forEach(b),this.h()},h(){v(t,"d","M10.25 0h3.5a.75.75 0 0 1 0 1.5h-1v1.278a9.954 9.954 0 0 1 5.636 2.276L19.72 3.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.315 1.316A9.959 9.959 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.959 9.959 0 0 1 2.535-6.654L3.22 4.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.335 1.334a9.958 9.958 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5ZM12 21.25a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 12 21.25Zm4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.75.75 0 0 1 1.061 0Z"),v(e,"stroke","currentColor"),v(e,"fill","currentColor"),v(e,"stroke-width","0"),v(e,"viewBox","0 0 24 24"),v(e,"xmlns","http://www.w3.org/2000/svg"),v(e,"class","svelte-1cmb9l6")},m(i,s){N(i,e,s),R(e,t)},p:ye,i:ye,o:ye,d(i){i&&b(e)}}}class fp extends Ee{constructor(e){super(),Ce(this,e,null,cp,Ae,{})}}function jo(o){let e,t,i,s,n;return i=new fp({}),{c(){e=L("p"),t=L("span"),te(i.$$.fragment),s=de(o[5]),this.h()},l(r){e=F(r,"P",{class:!0});var l=j(e);t=F(l,"SPAN",{class:!0});var a=j(t);ie(i.$$.fragment,a),a.forEach(b),s=pe(l,o[5]),l.forEach(b),this.h()},h(){v(t,"class","csm-icon-container svelte-idb75x"),v(e,"class","csm svelte-idb75x")},m(r,l){N(r,e,l),R(e,t),se(i,t,null),R(e,s),n=!0},p(r,l){(!n||l&32)&&Ge(s,r[5])},i(r){n||(K(i.$$.fragment,r),n=!0)},o(r){Z(i.$$.fragment,r),n=!1},d(r){r&&b(e),ne(i)}}}function Yo(o){let e,t;return{c(){e=L("p"),t=de(o[6]),this.h()},l(i){e=F(i,"P",{class:!0});var s=j(e);t=pe(s,o[6]),s.forEach(b),this.h()},h(){v(e,"class","csm csm-error svelte-idb75x")},m(i,s){N(i,e,s),R(e,t)},p(i,s){s&64&&Ge(t,i[6])},d(i){i&&b(e)}}}function dp(o){let e,t,i,s;function n(a){o[11](a)}function r(a){o[12](a)}let l={canvasContainerEl:o[3]};return o[1]!==void 0&&(l.width=o[1]),o[2]!==void 0&&(l.height=o[2]),e=new Fd({props:l}),nt.push(()=>Nt(e,"width",n)),nt.push(()=>Nt(e,"height",r)),{c(){te(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,h){se(e,a,h),s=!0},p(a,h){const c={};h&8&&(c.canvasContainerEl=a[3]),!t&&h&2&&(t=!0,c.width=a[1],zt(()=>t=!1)),!i&&h&4&&(i=!0,c.height=a[2],zt(()=>i=!1)),e.$set(c)},i(a){s||(K(e.$$.fragment,a),s=!0)},o(a){Z(e.$$.fragment,a),s=!1},d(a){ne(e,a)}}}function pp(o){let e,t;return e=new np({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function mp(o){let e,t;return e=new Nd({props:{canvasRef:o[0],renderer:o[4]}}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},p(i,s){const n={};s&1&&(n.canvasRef=i[0]),s&16&&(n.renderer=i[4]),e.$set(n)},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function gp(o){let e,t;return e=new Ad({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function yp(o){let e,t;return e=new tp({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function vp(o){let e,t;return e=new up({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function xp(o){let e,t;return e=new op({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}function bp(o){let e,t,i,s,n,r,l,a,h,c,u,f,d,p,m,y,g,_,w,x,C,E,A,T,V,B,z;t=new fd({});let O=o[5]&&jo(o),G=o[6]&&Yo(o);return f=new At({props:{name:"Canvas",$$slots:{default:[dp]},$$scope:{ctx:o}}}),p=new At({props:{name:"Info",$$slots:{default:[pp]},$$scope:{ctx:o}}}),y=new At({props:{name:"Camera",$$slots:{default:[mp]},$$scope:{ctx:o}}}),_=new At({props:{name:"Envmap",disabled:!o[7].shaderConfig.HAS_ENVMAP,$$slots:{default:[gp]},$$scope:{ctx:o}}}),x=new At({props:{name:"Sampling",roundBox:!0,$$slots:{default:[yp]},$$scope:{ctx:o}}}),E=new At({props:{name:"Performance",expanded:!1,$$slots:{default:[vp]},$$scope:{ctx:o}}}),T=new At({props:{name:"Operate",roundBox:!0,$$slots:{default:[xp]},$$scope:{ctx:o}}}),{c(){e=L("main"),te(t.$$.fragment),i=H(),s=L("div"),n=L("canvas"),a=H(),O&&O.c(),h=H(),G&&G.c(),c=H(),u=L("div"),te(f.$$.fragment),d=H(),te(p.$$.fragment),m=H(),te(y.$$.fragment),g=H(),te(_.$$.fragment),w=H(),te(x.$$.fragment),C=H(),te(E.$$.fragment),A=H(),te(T.$$.fragment),this.h()},l(P){e=F(P,"MAIN",{class:!0});var I=j(e);ie(t.$$.fragment,I),i=W(I),s=F(I,"DIV",{class:!0});var k=j(s);n=F(k,"CANVAS",{width:!0,height:!0,class:!0}),j(n).forEach(b),a=W(k),O&&O.l(k),h=W(k),G&&G.l(k),k.forEach(b),c=W(I),u=F(I,"DIV",{class:!0});var ae=j(u);ie(f.$$.fragment,ae),d=W(ae),ie(p.$$.fragment,ae),m=W(ae),ie(y.$$.fragment,ae),g=W(ae),ie(_.$$.fragment,ae),w=W(ae),ie(x.$$.fragment,ae),C=W(ae),ie(E.$$.fragment,ae),A=W(ae),ie(T.$$.fragment,ae),ae.forEach(b),I.forEach(b),this.h()},h(){v(n,"width",r=o[1]||1),v(n,"height",l=o[2]||1),v(n,"class","svelte-idb75x"),v(s,"class","canvas-container svelte-idb75x"),v(u,"class","sidebar svelte-idb75x"),v(e,"class","svelte-idb75x")},m(P,I){N(P,e,I),se(t,e,null),R(e,i),R(e,s),R(s,n),o[9](n),R(s,a),O&&O.m(s,null),R(s,h),G&&G.m(s,null),o[10](s),R(e,c),R(e,u),se(f,u,null),R(u,d),se(p,u,null),R(u,m),se(y,u,null),R(u,g),se(_,u,null),R(u,w),se(x,u,null),R(u,C),se(E,u,null),R(u,A),se(T,u,null),V=!0,B||(z=oe(n,"click",o[8]),B=!0)},p(P,[I]){(!V||I&2&&r!==(r=P[1]||1))&&v(n,"width",r),(!V||I&4&&l!==(l=P[2]||1))&&v(n,"height",l),P[5]?O?(O.p(P,I),I&32&&K(O,1)):(O=jo(P),O.c(),K(O,1),O.m(s,h)):O&&(Lr(),Z(O,1,1,()=>{O=null}),Fr()),P[6]?G?G.p(P,I):(G=Yo(P),G.c(),G.m(s,null)):G&&(G.d(1),G=null);const k={};I&16398&&(k.$$scope={dirty:I,ctx:P}),f.$set(k);const ae={};I&16384&&(ae.$$scope={dirty:I,ctx:P}),p.$set(ae);const ue={};I&16401&&(ue.$$scope={dirty:I,ctx:P}),y.$set(ue);const X={};I&128&&(X.disabled=!P[7].shaderConfig.HAS_ENVMAP),I&16384&&(X.$$scope={dirty:I,ctx:P}),_.$set(X);const ee={};I&16384&&(ee.$$scope={dirty:I,ctx:P}),x.$set(ee);const ce={};I&16384&&(ce.$$scope={dirty:I,ctx:P}),E.$set(ce);const le={};I&16384&&(le.$$scope={dirty:I,ctx:P}),T.$set(le)},i(P){V||(K(t.$$.fragment,P),K(O),K(f.$$.fragment,P),K(p.$$.fragment,P),K(y.$$.fragment,P),K(_.$$.fragment,P),K(x.$$.fragment,P),K(E.$$.fragment,P),K(T.$$.fragment,P),V=!0)},o(P){Z(t.$$.fragment,P),Z(O),Z(f.$$.fragment,P),Z(p.$$.fragment,P),Z(y.$$.fragment,P),Z(_.$$.fragment,P),Z(x.$$.fragment,P),Z(E.$$.fragment,P),Z(T.$$.fragment,P),V=!1},d(P){P&&b(e),ne(t),o[9](null),O&&O.d(),G&&G.d(),o[10](null),ne(f),ne(p),ne(y),ne(_),ne(x),ne(E),ne(T),B=!1,z()}}}function wp(o,e,t){let i,s,n,r;Ke(o,Oe,g=>t(13,i=g)),Ke(o,Rs,g=>t(5,s=g)),Ke(o,Er,g=>t(6,n=g)),Ke(o,Re,g=>t(7,r=g));let l,a,h,c,u;Xo(async()=>{try{t(4,u=await Yf(l))}catch(g){console.error(g)}});function f(g){jt(Oe,i.clickTarget=`(${g.offsetX}, ${h-g.offsetY})`,i)}function d(g){nt[g?"unshift":"push"](()=>{l=g,t(0,l)})}function p(g){nt[g?"unshift":"push"](()=>{c=g,t(3,c)})}function m(g){a=g,t(1,a)}function y(g){h=g,t(2,h)}return[l,a,h,c,u,s,n,r,f,d,p,m,y]}class _p extends Ee{constructor(e){super(),Ce(this,e,wp,bp,Ae,{})}}function Sp(o){let e,t;return e=new _p({}),{c(){te(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,s){se(e,i,s),t=!0},p:ye,i(i){t||(K(e.$$.fragment,i),t=!0)},o(i){Z(e.$$.fragment,i),t=!1},d(i){ne(e,i)}}}class Ip extends Ee{constructor(e){super(),Ce(this,e,null,Sp,Ae,{})}}export{Ip as component};
