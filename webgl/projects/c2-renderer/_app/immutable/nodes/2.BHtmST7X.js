var Bu=Object.defineProperty;var Du=(a,e,t)=>e in a?Bu(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var S=(a,e,t)=>Du(a,typeof e!="symbol"?e+"":e,t);import{n as ge,O as tt,s as Re,P as Ge,Q as He,f as G,i as y,v as b,k as M,l as E,e as F,d as L,c as El,R as Ta,u as Il,g as Pl,a as Bl,o as qe,b as U,j as V,S as ne,T as le,U as ds,A as Qe,V as gt,t as ue,p as Ne,h as ce,m as Oe,r as Dl,x as Ke,W as tn,X as rn,Y as Ra,Z as Nl,_ as Nu,$ as Pe,a0 as Te,a1 as ht,z as zu,a2 as Ki,a3 as Ma,a4 as Fu,w as bs}from"../chunks/scheduler.Bqgv5V0H.js";import{S as Me,i as Ae,t as X,a as Y,b as J,d as Q,m as ee,e as te,g as di,c as pi,f as ft}from"../chunks/index.COvQ7k1b.js";import{w as Vt}from"../chunks/index.CTTVak-F.js";const zl=typeof window<"u";let Aa=zl?()=>window.performance.now():()=>Date.now(),Fl=zl?a=>requestAnimationFrame(a):ge;const _r=new Set;function Ll(a){_r.forEach(e=>{e.c(a)||(_r.delete(e),e.f())}),_r.size!==0&&Fl(Ll)}function Lu(a){let e;return _r.size===0&&Fl(Ll),{promise:new Promise(t=>{_r.add(e={c:a,f:t})}),abort(){_r.delete(e)}}}function Zt(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="163",Qs=0,ku=1,Ou=2,Ca=1,Ea=100,Ia=204,Pa=205,Ba=3,Uu=0,Da="attached",Vu="detached",Ol=300,is=1e3,Wi=1001,Vn=1002,rs=1003,$u=1004,Gu=1005,Bi=1006,Hu=1007,sn=1008,qu=1009,ju=1014,Yi=1015,xs=1016,Wu=1020,Ul=1023,hn=1026,Na=1027,Xu=1028,ss=2300,Mr=2301,fn=2302,za=2400,Fa=2401,La=2402,Yu=2500,Zu=0,Vl=1,$n=2,Ku=0,$l="",Mt="srgb",Ct="srgb-linear",Ju="display-p3",Gl="display-p3-linear",Gn="linear",ka="srgb",Oa="rec709",Ua="p3",rr=7680,Va=519,Qu=515,Hn=35044,Xi=2e3,qn=2001;class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,n=r.length;s<n;s++)r[s].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $a=1234567;const Zr=Math.PI/180,ns=180/Math.PI;function Ot(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ot[a&255]+ot[a>>8&255]+ot[a>>16&255]+ot[a>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[i&255]+ot[i>>8&255]+ot[i>>16&255]+ot[i>>24&255]).toLowerCase()}function it(a,e,t){return Math.max(e,Math.min(t,a))}function ea(a,e){return(a%e+e)%e}function ec(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function tc(a,e,t){return a!==e?(t-a)/(e-a):0}function Kr(a,e,t){return(1-t)*a+t*e}function ic(a,e,t,i){return Kr(a,e,1-Math.exp(-t*i))}function rc(a,e=1){return e-Math.abs(ea(a,e*2)-e)}function sc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function nc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ac(a,e){return a+Math.floor(Math.random()*(e-a+1))}function oc(a,e){return a+Math.random()*(e-a)}function lc(a){return a*(.5-Math.random())}function uc(a){a!==void 0&&($a=a);let e=$a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cc(a){return a*Zr}function hc(a){return a*ns}function fc(a){return(a&a-1)===0&&a!==0}function dc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function pc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function mc(a,e,t,i,r){const s=Math.cos,n=Math.sin,l=s(t/2),o=n(t/2),u=s((e+i)/2),c=n((e+i)/2),h=s((e-i)/2),f=n((e-i)/2),d=s((i-e)/2),p=n((i-e)/2);switch(r){case"XYX":a.set(l*c,o*h,o*f,l*u);break;case"YZY":a.set(o*f,l*c,o*h,l*u);break;case"ZXZ":a.set(o*h,o*f,l*c,l*u);break;case"XZX":a.set(l*c,o*p,o*d,l*u);break;case"YXY":a.set(o*d,l*c,o*p,l*u);break;case"ZYZ":a.set(o*p,o*d,l*c,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Le(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const gc={DEG2RAD:Zr,RAD2DEG:ns,generateUUID:Ot,clamp:it,euclideanModulo:ea,mapLinear:ec,inverseLerp:tc,lerp:Kr,damp:ic,pingpong:rc,smoothstep:sc,smootherstep:nc,randInt:ac,randFloat:oc,randFloatSpread:lc,seededRandom:uc,degToRad:cc,radToDeg:hc,isPowerOfTwo:fc,ceilPowerOfTwo:dc,floorPowerOfTwo:pc,setQuaternionFromProperEuler:mc,normalize:Le,denormalize:kt};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,n=this.y-e.y;return this.x=s*i-n*r+e.x,this.y=s*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e,t,i,r,s,n,l,o,u){gi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,l,o,u)}set(e,t,i,r,s,n,l,o,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=l,c[3]=t,c[4]=s,c[5]=o,c[6]=i,c[7]=n,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],l=i[3],o=i[6],u=i[1],c=i[4],h=i[7],f=i[2],d=i[5],p=i[8],g=r[0],v=r[3],m=r[6],x=r[1],T=r[4],_=r[7],B=r[2],A=r[5],C=r[8];return s[0]=n*g+l*x+o*B,s[3]=n*v+l*T+o*A,s[6]=n*m+l*_+o*C,s[1]=u*g+c*x+h*B,s[4]=u*v+c*T+h*A,s[7]=u*m+c*_+h*C,s[2]=f*g+d*x+p*B,s[5]=f*v+d*T+p*A,s[8]=f*m+d*_+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],l=e[5],o=e[6],u=e[7],c=e[8];return t*n*c-t*l*u-i*s*c+i*l*o+r*s*u-r*n*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=c*n-l*u,f=l*o-c*s,d=u*s-n*o,p=t*h+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=h*g,e[1]=(r*u-c*i)*g,e[2]=(l*i-r*n)*g,e[3]=f*g,e[4]=(c*t-r*o)*g,e[5]=(r*s-l*t)*g,e[6]=d*g,e[7]=(i*o-u*t)*g,e[8]=(n*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,n,l){const o=Math.cos(s),u=Math.sin(s);return this.set(i*o,i*u,-i*(o*n+u*l)+n+e,-r*u,r*o,-r*(-u*n+o*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(dn.makeScale(e,t)),this}rotate(e){return this.premultiply(dn.makeRotation(-e)),this}translate(e,t){return this.premultiply(dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dn=new gi;function vc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function jn(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const Ga={};function Hl(a){a in Ga||(Ga[a]=!0,console.warn(a))}const Ha=new gi().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qa=new gi().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[Ct]:{transfer:Gn,primaries:Oa,toReference:a=>a,fromReference:a=>a},[Mt]:{transfer:ka,primaries:Oa,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Gl]:{transfer:Gn,primaries:Ua,toReference:a=>a.applyMatrix3(qa),fromReference:a=>a.applyMatrix3(Ha)},[Ju]:{transfer:ka,primaries:Ua,toReference:a=>a.convertSRGBToLinear().applyMatrix3(qa),fromReference:a=>a.applyMatrix3(Ha).convertLinearToSRGB()}},yc=new Set([Ct,Gl]),Rt={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!yc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=ws[e].toReference,r=ws[t].fromReference;return r(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return ws[a].primaries},getTransfer:function(a){return a===$l?Gn:ws[a].transfer}};function Sr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function pn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let sr;class bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=jn("canvas")),sr.width=e.width,sr.height=e.height;const i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let n=0;n<s.length;n++)s[n]=Sr(s[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xc=0;class wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=Ot(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let n=0,l=r.length;n<l;n++)r[n].isDataTexture?s.push(mn(r[n].image)):s.push(mn(r[n]))}else s=mn(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?bc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class Bt extends nn{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Wi,r=Wi,s=Bi,n=sn,l=Ul,o=qu,u=Bt.DEFAULT_ANISOTROPY,c=$l){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ot(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=n,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=o,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Vn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Vn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ol;Bt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*s,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*s,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*s,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=e.elements,u=o[0],c=o[4],h=o[8],f=o[1],d=o[5],p=o[9],g=o[2],v=o[6],m=o[10];if(Math.abs(c-f)<.01&&Math.abs(h-g)<.01&&Math.abs(p-v)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+g)<.1&&Math.abs(p+v)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,_=(d+1)/2,B=(m+1)/2,A=(c+f)/4,C=(h+g)/4,w=(p+v)/4;return T>_&&T>B?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=C/i):_>B?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=w/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=C/s,r=w/s),this.set(i,r,s,t),this}let x=Math.sqrt((v-p)*(v-p)+(h-g)*(h-g)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(v-p)/x,this.y=(h-g)/x,this.z=(f-c)/x,this.w=Math.acos((u+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,n,l){let o=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[n+0],d=s[n+1],p=s[n+2],g=s[n+3];if(l===0){e[t+0]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(l===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(h!==g||o!==f||u!==d||c!==p){let v=1-l;const m=o*f+u*d+c*p+h*g,x=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const B=Math.sqrt(T),A=Math.atan2(B,m*x);v=Math.sin(v*A)/B,l=Math.sin(l*A)/B}const _=l*x;if(o=o*v+f*_,u=u*v+d*_,c=c*v+p*_,h=h*v+g*_,v===1-l){const B=1/Math.sqrt(o*o+u*u+c*c+h*h);o*=B,u*=B,c*=B,h*=B}}e[t]=o,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,n){const l=i[r],o=i[r+1],u=i[r+2],c=i[r+3],h=s[n],f=s[n+1],d=s[n+2],p=s[n+3];return e[t]=l*p+c*h+o*d-u*f,e[t+1]=o*p+c*f+u*h-l*d,e[t+2]=u*p+c*d+l*f-o*h,e[t+3]=c*p-l*h-o*f-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,n=e._order,l=Math.cos,o=Math.sin,u=l(i/2),c=l(r/2),h=l(s/2),f=o(i/2),d=o(r/2),p=o(s/2);switch(n){case"XYZ":this._x=f*c*h+u*d*p,this._y=u*d*h-f*c*p,this._z=u*c*p+f*d*h,this._w=u*c*h-f*d*p;break;case"YXZ":this._x=f*c*h+u*d*p,this._y=u*d*h-f*c*p,this._z=u*c*p-f*d*h,this._w=u*c*h+f*d*p;break;case"ZXY":this._x=f*c*h-u*d*p,this._y=u*d*h+f*c*p,this._z=u*c*p+f*d*h,this._w=u*c*h-f*d*p;break;case"ZYX":this._x=f*c*h-u*d*p,this._y=u*d*h+f*c*p,this._z=u*c*p-f*d*h,this._w=u*c*h+f*d*p;break;case"YZX":this._x=f*c*h+u*d*p,this._y=u*d*h+f*c*p,this._z=u*c*p-f*d*h,this._w=u*c*h-f*d*p;break;case"XZY":this._x=f*c*h-u*d*p,this._y=u*d*h-f*c*p,this._z=u*c*p+f*d*h,this._w=u*c*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],n=t[1],l=t[5],o=t[9],u=t[2],c=t[6],h=t[10],f=i+l+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-o)*d,this._y=(s-u)*d,this._z=(n-r)*d}else if(i>l&&i>h){const d=2*Math.sqrt(1+i-l-h);this._w=(c-o)/d,this._x=.25*d,this._y=(r+n)/d,this._z=(s+u)/d}else if(l>h){const d=2*Math.sqrt(1+l-i-h);this._w=(s-u)/d,this._x=(r+n)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-i-l);this._w=(n-r)/d,this._x=(s+u)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,n=e._w,l=t._x,o=t._y,u=t._z,c=t._w;return this._x=i*c+n*l+r*u-s*o,this._y=r*c+n*o+s*l-i*u,this._z=s*c+n*u+i*o-r*l,this._w=n*c-i*l-r*o-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,n=this._w;let l=n*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=n,this._x=i,this._y=r,this._z=s,this;const o=1-l*l;if(o<=Number.EPSILON){const d=1-t;return this._w=d*n+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(o),c=Math.atan2(u,l),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=n*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,n=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*n,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*n,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,n=e.y,l=e.z,o=e.w,u=2*(n*r-l*i),c=2*(l*t-s*r),h=2*(s*i-n*t);return this.x=t+o*u+n*h-l*c,this.y=i+o*c+l*u-s*h,this.z=r+o*h+s*c-n*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,n=t.x,l=t.y,o=t.z;return this.x=r*o-s*l,this.y=s*n-i*o,this.z=i*l-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gn.copy(this).projectOnVector(e),this.sub(gn)}reflect(e){return this.sub(gn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gn=new I,ja=new ki;class vi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let n=0,l=s.count;n<l;n++)e.isMesh===!0?e.getVertexPosition(n,zt):zt.fromBufferAttribute(s,n),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const r=e.children;for(let s=0,n=r.length;s<n;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Ss.subVectors(this.max,Or),nr.subVectors(e.a,Or),ar.subVectors(e.b,Or),or.subVectors(e.c,Or),_i.subVectors(ar,nr),Si.subVectors(or,ar),Ui.subVectors(nr,or);let t=[0,-_i.z,_i.y,0,-Si.z,Si.y,0,-Ui.z,Ui.y,_i.z,0,-_i.x,Si.z,0,-Si.x,Ui.z,0,-Ui.x,-_i.y,_i.x,0,-Si.y,Si.x,0,-Ui.y,Ui.x,0];return!vn(t,nr,ar,or,Ss)||(t=[1,0,0,0,1,0,0,0,1],!vn(t,nr,ar,or,Ss))?!1:(Ts.crossVectors(_i,Si),t=[Ts.x,Ts.y,Ts.z],vn(t,nr,ar,or,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],zt=new I,_s=new vi,nr=new I,ar=new I,or=new I,_i=new I,Si=new I,Ui=new I,Or=new I,Ss=new I,Ts=new I,Vi=new I;function vn(a,e,t,i,r){for(let s=0,n=a.length-3;s<=n;s+=3){Vi.fromArray(a,s);const l=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),o=e.dot(Vi),u=t.dot(Vi),c=i.dot(Vi);if(Math.max(-Math.max(o,u,c),Math.min(o,u,c))>l)return!1}return!0}const Sc=new vi,Ur=new I,yn=new I;class Qt{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,n=e.length;s<n;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(yn)),this.expandByPoint(Ur.copy(e.center).sub(yn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new I,bn=new I,Rs=new I,Ti=new I,xn=new I,Ms=new I,wn=new I;class an{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bn.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(bn);const s=e.distanceTo(t)*.5,n=-this.direction.dot(Rs),l=Ti.dot(this.direction),o=-Ti.dot(Rs),u=Ti.lengthSq(),c=Math.abs(1-n*n);let h,f,d,p;if(c>0)if(h=n*o-l,f=n*l-o,p=s*c,h>=0)if(f>=-p)if(f<=p){const g=1/c;h*=g,f*=g,d=h*(h+n*f+2*l)+f*(n*h+f+2*o)+u}else f=s,h=Math.max(0,-(n*f+l)),d=-h*h+f*(f+2*o)+u;else f=-s,h=Math.max(0,-(n*f+l)),d=-h*h+f*(f+2*o)+u;else f<=-p?(h=Math.max(0,-(-n*s+l)),f=h>0?-s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+u):f<=p?(h=0,f=Math.min(Math.max(-s,-o),s),d=f*(f+2*o)+u):(h=Math.max(0,-(n*s+l)),f=h>0?s:Math.min(Math.max(-s,-o),s),d=-h*h+f*(f+2*o)+u);else f=n>0?-s:s,h=Math.max(0,-(n*f+l)),d=-h*h+f*(f+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bn).addScaledVector(Rs,f),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const n=Math.sqrt(s-r),l=i-n,o=i+n;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,n,l,o;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,n=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,n=(e.min.y-f.y)*c),i>n||s>r||((s>i||isNaN(i))&&(i=s),(n<r||isNaN(r))&&(r=n),h>=0?(l=(e.min.z-f.z)*h,o=(e.max.z-f.z)*h):(l=(e.max.z-f.z)*h,o=(e.min.z-f.z)*h),i>o||l>r)||((l>i||i!==i)&&(i=l),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){xn.subVectors(t,e),Ms.subVectors(i,e),wn.crossVectors(xn,Ms);let n=this.direction.dot(wn),l;if(n>0){if(r)return null;l=1}else if(n<0)l=-1,n=-n;else return null;Ti.subVectors(this.origin,e);const o=l*this.direction.dot(Ms.crossVectors(Ti,Ms));if(o<0)return null;const u=l*this.direction.dot(xn.cross(Ti));if(u<0||o+u>n)return null;const c=-l*Ti.dot(wn);return c<0?null:this.at(c/n,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v)}set(e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=n,m[9]=l,m[13]=o,m[2]=u,m[6]=c,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=g,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),n=1/lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,n=Math.cos(i),l=Math.sin(i),o=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=n*c,d=n*h,p=l*c,g=l*h;t[0]=o*c,t[4]=-o*h,t[8]=u,t[1]=d+p*u,t[5]=f-g*u,t[9]=-l*o,t[2]=g-f*u,t[6]=p+d*u,t[10]=n*o}else if(e.order==="YXZ"){const f=o*c,d=o*h,p=u*c,g=u*h;t[0]=f+g*l,t[4]=p*l-d,t[8]=n*u,t[1]=n*h,t[5]=n*c,t[9]=-l,t[2]=d*l-p,t[6]=g+f*l,t[10]=n*o}else if(e.order==="ZXY"){const f=o*c,d=o*h,p=u*c,g=u*h;t[0]=f-g*l,t[4]=-n*h,t[8]=p+d*l,t[1]=d+p*l,t[5]=n*c,t[9]=g-f*l,t[2]=-n*u,t[6]=l,t[10]=n*o}else if(e.order==="ZYX"){const f=n*c,d=n*h,p=l*c,g=l*h;t[0]=o*c,t[4]=p*u-d,t[8]=f*u+g,t[1]=o*h,t[5]=g*u+f,t[9]=d*u-p,t[2]=-u,t[6]=l*o,t[10]=n*o}else if(e.order==="YZX"){const f=n*o,d=n*u,p=l*o,g=l*u;t[0]=o*c,t[4]=g-f*h,t[8]=p*h+d,t[1]=h,t[5]=n*c,t[9]=-l*c,t[2]=-u*c,t[6]=d*h+p,t[10]=f-g*h}else if(e.order==="XZY"){const f=n*o,d=n*u,p=l*o,g=l*u;t[0]=o*c,t[4]=-h,t[8]=u*c,t[1]=f*h+g,t[5]=n*c,t[9]=d*h-p,t[2]=p*h-d,t[6]=l*c,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tc,e,Rc)}lookAt(e,t,i){const r=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Ri.crossVectors(i,St),Ri.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Ri.crossVectors(i,St)),Ri.normalize(),As.crossVectors(St,Ri),r[0]=Ri.x,r[4]=As.x,r[8]=St.x,r[1]=Ri.y,r[5]=As.y,r[9]=St.y,r[2]=Ri.z,r[6]=As.z,r[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,n=i[0],l=i[4],o=i[8],u=i[12],c=i[1],h=i[5],f=i[9],d=i[13],p=i[2],g=i[6],v=i[10],m=i[14],x=i[3],T=i[7],_=i[11],B=i[15],A=r[0],C=r[4],w=r[8],O=r[12],N=r[1],P=r[5],k=r[9],R=r[13],z=r[2],j=r[6],$=r[10],re=r[14],se=r[3],D=r[7],W=r[11],de=r[15];return s[0]=n*A+l*N+o*z+u*se,s[4]=n*C+l*P+o*j+u*D,s[8]=n*w+l*k+o*$+u*W,s[12]=n*O+l*R+o*re+u*de,s[1]=c*A+h*N+f*z+d*se,s[5]=c*C+h*P+f*j+d*D,s[9]=c*w+h*k+f*$+d*W,s[13]=c*O+h*R+f*re+d*de,s[2]=p*A+g*N+v*z+m*se,s[6]=p*C+g*P+v*j+m*D,s[10]=p*w+g*k+v*$+m*W,s[14]=p*O+g*R+v*re+m*de,s[3]=x*A+T*N+_*z+B*se,s[7]=x*C+T*P+_*j+B*D,s[11]=x*w+T*k+_*$+B*W,s[15]=x*O+T*R+_*re+B*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],n=e[1],l=e[5],o=e[9],u=e[13],c=e[2],h=e[6],f=e[10],d=e[14],p=e[3],g=e[7],v=e[11],m=e[15];return p*(+s*o*h-r*u*h-s*l*f+i*u*f+r*l*d-i*o*d)+g*(+t*o*d-t*u*f+s*n*f-r*n*d+r*u*c-s*o*c)+v*(+t*u*h-t*l*d-s*n*h+i*n*d+s*l*c-i*u*c)+m*(-r*l*c-t*o*h+t*l*f+r*n*h-i*n*f+i*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],n=e[4],l=e[5],o=e[6],u=e[7],c=e[8],h=e[9],f=e[10],d=e[11],p=e[12],g=e[13],v=e[14],m=e[15],x=h*v*u-g*f*u+g*o*d-l*v*d-h*o*m+l*f*m,T=p*f*u-c*v*u-p*o*d+n*v*d+c*o*m-n*f*m,_=c*g*u-p*h*u+p*l*d-n*g*d-c*l*m+n*h*m,B=p*h*o-c*g*o-p*l*f+n*g*f+c*l*v-n*h*v,A=t*x+i*T+r*_+s*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(g*f*s-h*v*s-g*r*d+i*v*d+h*r*m-i*f*m)*C,e[2]=(l*v*s-g*o*s+g*r*u-i*v*u-l*r*m+i*o*m)*C,e[3]=(h*o*s-l*f*s-h*r*u+i*f*u+l*r*d-i*o*d)*C,e[4]=T*C,e[5]=(c*v*s-p*f*s+p*r*d-t*v*d-c*r*m+t*f*m)*C,e[6]=(p*o*s-n*v*s-p*r*u+t*v*u+n*r*m-t*o*m)*C,e[7]=(n*f*s-c*o*s+c*r*u-t*f*u-n*r*d+t*o*d)*C,e[8]=_*C,e[9]=(p*h*s-c*g*s-p*i*d+t*g*d+c*i*m-t*h*m)*C,e[10]=(n*g*s-p*l*s+p*i*u-t*g*u-n*i*m+t*l*m)*C,e[11]=(c*l*s-n*h*s-c*i*u+t*h*u+n*i*d-t*l*d)*C,e[12]=B*C,e[13]=(c*g*r-p*h*r+p*i*f-t*g*f-c*i*v+t*h*v)*C,e[14]=(p*l*r-n*g*r-p*i*o+t*g*o+n*i*v-t*l*v)*C,e[15]=(n*h*r-c*l*r+c*i*o-t*h*o-n*i*f+t*l*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,n=e.x,l=e.y,o=e.z,u=s*n,c=s*l;return this.set(u*n+i,u*l-r*o,u*o+r*l,0,u*l+r*o,c*l+i,c*o-r*n,0,u*o-r*l,c*o+r*n,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,n){return this.set(1,i,s,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,n=t._y,l=t._z,o=t._w,u=s+s,c=n+n,h=l+l,f=s*u,d=s*c,p=s*h,g=n*c,v=n*h,m=l*h,x=o*u,T=o*c,_=o*h,B=i.x,A=i.y,C=i.z;return r[0]=(1-(g+m))*B,r[1]=(d+_)*B,r[2]=(p-T)*B,r[3]=0,r[4]=(d-_)*A,r[5]=(1-(f+m))*A,r[6]=(v+x)*A,r[7]=0,r[8]=(p+T)*C,r[9]=(v-x)*C,r[10]=(1-(f+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const n=lr.set(r[4],r[5],r[6]).length(),l=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const u=1/s,c=1/n,h=1/l;return Ft.elements[0]*=u,Ft.elements[1]*=u,Ft.elements[2]*=u,Ft.elements[4]*=c,Ft.elements[5]*=c,Ft.elements[6]*=c,Ft.elements[8]*=h,Ft.elements[9]*=h,Ft.elements[10]*=h,t.setFromRotationMatrix(Ft),i.x=s,i.y=n,i.z=l,this}makePerspective(e,t,i,r,s,n,l=Xi){const o=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,p;if(l===Xi)d=-(n+s)/(n-s),p=-2*n*s/(n-s);else if(l===qn)d=-n/(n-s),p=-n*s/(n-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=u,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,n,l=Xi){const o=this.elements,u=1/(t-e),c=1/(i-r),h=1/(n-s),f=(t+e)*u,d=(i+r)*c;let p,g;if(l===Xi)p=(n+s)*h,g=-2*h;else if(l===qn)p=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*u,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=g,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const lr=new I,Ft=new Se,Tc=new I(0,0,0),Rc=new I(1,1,1),Ri=new I,As=new I,St=new I,Wa=new Se,Xa=new ki;class Ir{constructor(e=0,t=0,i=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],n=r[4],l=r[8],o=r[1],u=r[5],c=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-n,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-n,u)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-n,u));break;case"YZX":this._z=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-it(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ac=0;const Ya=new I,ur=new ki,ai=new Se,Cs=new I,Vr=new I,Cc=new I,Ec=new ki,Za=new I(1,0,0),Ka=new I(0,1,0),Ja=new I(0,0,1),Qa={type:"added"},Ic={type:"removed"},cr={type:"childadded",child:null},_n={type:"childremoved",child:null};class Ye extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Ot(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new I,t=new Ir,i=new ki,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new gi}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Vr,Cs,this.up):ai.lookAt(Cs,Vr,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(ai),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic),_n.child=e,this.dispatchEvent(_n),_n.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,n=r.length;s<n;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Cc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Ec,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,n=r.length;s<n;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let u=0,c=o.length;u<c;u++){const h=o[u];s(e.shapes,h)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,u=this.material.length;o<u;o++)l.push(s(e.materials,this.material[o]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];r.animations.push(s(e.animations,o))}}if(t){const l=n(e.geometries),o=n(e.materials),u=n(e.textures),c=n(e.images),h=n(e.shapes),f=n(e.skeletons),d=n(e.animations),p=n(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=r,i;function n(l){const o=[];for(const u in l){const c=l[u];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new I,oi=new I,Sn=new I,li=new I,hr=new I,fr=new I,eo=new I,Tn=new I,Rn=new I,Mn=new I;let Es=class br{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Lt.subVectors(e,t),r.cross(Lt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Lt.subVectors(r,t),oi.subVectors(i,t),Sn.subVectors(e,t);const n=Lt.dot(Lt),l=Lt.dot(oi),o=Lt.dot(Sn),u=oi.dot(oi),c=oi.dot(Sn),h=n*u-l*l;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(u*o-l*c)*f,p=(n*c-l*o)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,r,s,n,l,o){return this.getBarycoord(e,t,i,r,li)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,li.x),o.addScaledVector(n,li.y),o.addScaledVector(l,li.z),o)}static isFrontFacing(e,t,i,r){return Lt.subVectors(i,t),oi.subVectors(e,t),Lt.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Lt.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return br.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return br.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return br.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return br.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return br.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let n,l;hr.subVectors(r,i),fr.subVectors(s,i),Tn.subVectors(e,i);const o=hr.dot(Tn),u=fr.dot(Tn);if(o<=0&&u<=0)return t.copy(i);Rn.subVectors(e,r);const c=hr.dot(Rn),h=fr.dot(Rn);if(c>=0&&h<=c)return t.copy(r);const f=o*h-c*u;if(f<=0&&o>=0&&c<=0)return n=o/(o-c),t.copy(i).addScaledVector(hr,n);Mn.subVectors(e,s);const d=hr.dot(Mn),p=fr.dot(Mn);if(p>=0&&d<=p)return t.copy(s);const g=d*u-o*p;if(g<=0&&u>=0&&p<=0)return l=u/(u-p),t.copy(i).addScaledVector(fr,l);const v=c*p-d*h;if(v<=0&&h-c>=0&&d-p>=0)return eo.subVectors(s,r),l=(h-c)/(h-c+(d-p)),t.copy(r).addScaledVector(eo,l);const m=1/(v+g+f);return n=g*m,l=f*m,t.copy(i).addScaledVector(hr,n).addScaledVector(fr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function An(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Rt.workingColorSpace){if(e=ea(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,n=2*i-s;this.r=An(n,s,e+1/3),this.g=An(n,s,e),this.b=An(n,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const n=r[1],l=r[2];switch(n){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],n=s.length;if(n===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=ql[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Rt.fromWorkingColorSpace(lt.copy(this),e),Math.round(it(lt.r*255,0,255))*65536+Math.round(it(lt.g*255,0,255))*256+Math.round(it(lt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(lt.copy(this),t);const i=lt.r,r=lt.g,s=lt.b,n=Math.max(i,r,s),l=Math.min(i,r,s);let o,u;const c=(l+n)/2;if(l===n)o=0,u=0;else{const h=n-l;switch(u=c<=.5?h/(n+l):h/(2-n-l),n){case i:o=(r-s)/h+(r<s?6:0);break;case r:o=(s-i)/h+2;break;case s:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=u,e.l=c,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=Mt){Rt.fromWorkingColorSpace(lt.copy(this),e);const t=lt.r,i=lt.g,r=lt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Is);const i=Kr(Mi.h,Is.h,t),r=Kr(Mi.s,Is.s,t),s=Kr(Mi.l,Is.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lt=new be;be.NAMES=ql;let Pc=0,Zi=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Ot(),this.name="",this.type="Material",this.blending=Ca,this.side=Qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Pa,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ca&&(i.blending=this.blending),this.side!==Qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ia&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==Ea&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const n=[];for(const l in s){const o=s[l];delete o.metadata,n.push(o)}return n}if(t){const s=r(e.textures),n=r(e.images);s.length>0&&(i.textures=s),n.length>0&&(i.images=n)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class xr extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ci=Bc();function Bc(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),r=new Uint32Array(512);for(let o=0;o<256;++o){const u=o-127;u<-27?(i[o]=0,i[o|256]=32768,r[o]=24,r[o|256]=24):u<-14?(i[o]=1024>>-u-14,i[o|256]=1024>>-u-14|32768,r[o]=-u-1,r[o|256]=-u-1):u<=15?(i[o]=u+15<<10,i[o|256]=u+15<<10|32768,r[o]=13,r[o|256]=13):u<128?(i[o]=31744,i[o|256]=64512,r[o]=24,r[o|256]=24):(i[o]=31744,i[o|256]=64512,r[o]=13,r[o|256]=13)}const s=new Uint32Array(2048),n=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let u=o<<13,c=0;for(;!(u&8388608);)u<<=1,c-=8388608;u&=-8388609,c+=947912704,s[o]=u|c}for(let o=1024;o<2048;++o)s[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)n[o]=o<<23;n[31]=1199570944,n[32]=2147483648;for(let o=33;o<63;++o)n[o]=2147483648+(o-32<<23);n[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:n,offsetTable:l}}function Dc(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=it(a,-65504,65504),ci.floatView[0]=a;const e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function Nc(a){const e=a>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(a&1023)]+ci.exponentTable[e],ci.floatView[0]}const Ps={toHalfFloat:Dc,fromHalfFloat:Nc},Ze=new I,Bs=new oe;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Le(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Le(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Le(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Le(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Le(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array),r=Le(r,this.array),s=Le(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hn&&(e.usage=this.usage),e}}class zc extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fc extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lc=0;const Et=new Se,Cn=new Ye,dr=new I,Tt=new vi,$r=new vi,et=new I;class ei extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Ot(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vc(e)?Fc:zc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gi().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,i){return Et.makeTranslation(e,t,i),this.applyMatrix4(Et),this}scale(e,t,i){return Et.makeScale(e,t,i),this.applyMatrix4(Et),this}lookAt(e){return Cn.lookAt(e),Cn.updateMatrix(),this.applyMatrix4(Cn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,n=t.length;s<n;s++){const l=t[s];$r.setFromBufferAttribute(l),this.morphTargetsRelative?(et.addVectors(Tt.min,$r.min),Tt.expandByPoint(et),et.addVectors(Tt.max,$r.max),Tt.expandByPoint(et)):(Tt.expandByPoint($r.min),Tt.expandByPoint($r.max))}Tt.getCenter(i);let r=0;for(let s=0,n=e.count;s<n;s++)et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(et));if(t)for(let s=0,n=t.length;s<n;s++){const l=t[s],o=this.morphTargetsRelative;for(let u=0,c=l.count;u<c;u++)et.fromBufferAttribute(l,u),o&&(dr.fromBufferAttribute(e,u),et.add(dr)),r=Math.max(r,i.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*i.count),4));const n=this.getAttribute("tangent"),l=[],o=[];for(let w=0;w<i.count;w++)l[w]=new I,o[w]=new I;const u=new I,c=new I,h=new I,f=new oe,d=new oe,p=new oe,g=new I,v=new I;function m(w,O,N){u.fromBufferAttribute(i,w),c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,N),f.fromBufferAttribute(s,w),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,N),c.sub(u),h.sub(u),d.sub(f),p.sub(f);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(P),v.copy(h).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(P),l[w].add(g),l[O].add(g),l[N].add(g),o[w].add(v),o[O].add(v),o[N].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,O=x.length;w<O;++w){const N=x[w],P=N.start,k=N.count;for(let R=P,z=P+k;R<z;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const T=new I,_=new I,B=new I,A=new I;function C(w){B.fromBufferAttribute(r,w),A.copy(B);const O=l[w];T.copy(O),T.sub(B.multiplyScalar(B.dot(O))).normalize(),_.crossVectors(A,O);const P=_.dot(o[w])<0?-1:1;n.setXYZW(w,T.x,T.y,T.z,P)}for(let w=0,O=x.length;w<O;++w){const N=x[w],P=N.start,k=N.count;for(let R=P,z=P+k;R<z;R+=3)C(e.getX(R+0)),C(e.getX(R+1)),C(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,n=new I,l=new I,o=new I,u=new I,c=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),c.subVectors(n,s),h.subVectors(r,s),c.cross(h),l.fromBufferAttribute(i,p),o.fromBufferAttribute(i,g),u.fromBufferAttribute(i,v),l.add(c),o.add(c),u.add(c),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),n.fromBufferAttribute(t,f+2),c.subVectors(n,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(l,o){const u=l.array,c=l.itemSize,h=l.normalized,f=new u.constructor(o.length*c);let d=0,p=0;for(let g=0,v=o.length;g<v;g++){l.isInterleavedBufferAttribute?d=o[g]*l.data.stride+l.offset:d=o[g]*c;for(let m=0;m<c;m++)f[p++]=u[d++]}return new Dt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const l in r){const o=r[l],u=e(o,i);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const o=[],u=s[l];for(let c=0,h=u.length;c<h;c++){const f=u[c],d=e(f,i);o.push(d)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let l=0,o=n.length;l<o;l++){const u=n[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const u in o)o[u]!==void 0&&(e[u]=o[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const u=i[o];e.data.attributes[o]=u.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const u=this.morphAttributes[o],c=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];c.push(d.toJSON(e.data))}c.length>0&&(r[o]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,d=h.length;f<d;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let u=0,c=n.length;u<c;u++){const h=n[u];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new Se,$i=new an,Ds=new Qt,io=new I,pr=new I,mr=new I,gr=new I,En=new I,Ns=new I,zs=new oe,Fs=new oe,Ls=new oe,ro=new I,so=new I,no=new I,ks=new I,Os=new I;class mi extends Ye{constructor(e=new ei,t=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Ns.set(0,0,0);for(let o=0,u=s.length;o<u;o++){const c=l[o],h=s[o];c!==0&&(En.fromBufferAttribute(h,e),n?Ns.addScaledVector(En,c):Ns.addScaledVector(En.sub(t),c))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Ds.containsPoint($i.origin)===!1&&($i.intersectSphere(Ds,io)===null||$i.origin.distanceToSquared(io)>(e.far-e.near)**2))&&(to.copy(s).invert(),$i.copy(e.ray).applyMatrix4(to),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,n=this.material,l=s.index,o=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(n))for(let p=0,g=f.length;p<g;p++){const v=f[p],m=n[v.materialIndex],x=Math.max(v.start,d.start),T=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let _=x,B=T;_<B;_+=3){const A=l.getX(_),C=l.getX(_+1),w=l.getX(_+2);r=Us(this,m,e,i,u,c,h,A,C,w),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const x=l.getX(v),T=l.getX(v+1),_=l.getX(v+2);r=Us(this,n,e,i,u,c,h,x,T,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=f.length;p<g;p++){const v=f[p],m=n[v.materialIndex],x=Math.max(v.start,d.start),T=Math.min(o.count,Math.min(v.start+v.count,d.start+d.count));for(let _=x,B=T;_<B;_+=3){const A=_,C=_+1,w=_+2;r=Us(this,m,e,i,u,c,h,A,C,w),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let v=p,m=g;v<m;v+=3){const x=v,T=v+1,_=v+2;r=Us(this,n,e,i,u,c,h,x,T,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function kc(a,e,t,i,r,s,n,l){let o;if(e.side===ku?o=i.intersectTriangle(n,s,r,!0,l):o=i.intersectTriangle(r,s,n,e.side===Qs,l),o===null)return null;Os.copy(l),Os.applyMatrix4(a.matrixWorld);const u=t.ray.origin.distanceTo(Os);return u<t.near||u>t.far?null:{distance:u,point:Os.clone(),object:a}}function Us(a,e,t,i,r,s,n,l,o,u){a.getVertexPosition(l,pr),a.getVertexPosition(o,mr),a.getVertexPosition(u,gr);const c=kc(a,e,t,i,pr,mr,gr,ks);if(c){r&&(zs.fromBufferAttribute(r,l),Fs.fromBufferAttribute(r,o),Ls.fromBufferAttribute(r,u),c.uv=Es.getInterpolation(ks,pr,mr,gr,zs,Fs,Ls,new oe)),s&&(zs.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,o),Ls.fromBufferAttribute(s,u),c.uv1=Es.getInterpolation(ks,pr,mr,gr,zs,Fs,Ls,new oe)),n&&(ro.fromBufferAttribute(n,l),so.fromBufferAttribute(n,o),no.fromBufferAttribute(n,u),c.normal=Es.getInterpolation(ks,pr,mr,gr,ro,so,no,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:l,b:o,c:u,normal:new I,materialIndex:0};Es.getNormal(pr,mr,gr,h.normal),c.face=h}return c}class en extends ei{constructor(e=1,t=1,i=1,r=1,s=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:n};const l=this;r=Math.floor(r),s=Math.floor(s),n=Math.floor(n);const o=[],u=[],c=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,i,t,e,n,s,0),p("z","y","x",1,-1,i,t,-e,n,s,1),p("x","z","y",1,1,e,i,t,r,n,2),p("x","z","y",1,-1,e,i,-t,r,n,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2));function p(g,v,m,x,T,_,B,A,C,w,O){const N=_/C,P=B/w,k=_/2,R=B/2,z=A/2,j=C+1,$=w+1;let re=0,se=0;const D=new I;for(let W=0;W<$;W++){const de=W*P-R;for(let ae=0;ae<j;ae++){const pe=ae*N-k;D[g]=pe*x,D[v]=de*T,D[m]=z,u.push(D.x,D.y,D.z),D[g]=0,D[v]=0,D[m]=A>0?1:-1,c.push(D.x,D.y,D.z),h.push(ae/C),h.push(1-W/w),re+=1}}for(let W=0;W<w;W++)for(let de=0;de<C;de++){const ae=f+de+j*W,pe=f+de+j*(W+1),Z=f+(de+1)+j*(W+1),Ee=f+(de+1)+j*W;o.push(ae,pe,Ee),o.push(pe,Z,Ee),se+=6}l.addGroup(d,se,O),d+=se,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}let jl=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ai=new I,ao=new oe,oo=new oe;class ta extends jl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,i,r,s,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const o=n.fullWidth,u=n.fullHeight;s+=n.offsetX*r/o,t-=n.offsetY*i/u,r*=n.width/o,i*=n.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const In=new I,Oc=new I,Uc=new gi;let vr=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=In.subVectors(i,t).cross(Oc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(In),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uc.getNormalMatrix(e),r=this.coplanarPoint(In).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Gi=new Qt,Vs=new I;class Vc{constructor(e=new vr,t=new vr,i=new vr,r=new vr,s=new vr,n=new vr){this.planes=[e,t,i,r,s,n]}set(e,t,i,r,s,n){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,r=e.elements,s=r[0],n=r[1],l=r[2],o=r[3],u=r[4],c=r[5],h=r[6],f=r[7],d=r[8],p=r[9],g=r[10],v=r[11],m=r[12],x=r[13],T=r[14],_=r[15];if(i[0].setComponents(o-s,f-u,v-d,_-m).normalize(),i[1].setComponents(o+s,f+u,v+d,_+m).normalize(),i[2].setComponents(o+n,f+c,v+p,_+x).normalize(),i[3].setComponents(o-n,f-c,v-p,_-x).normalize(),i[4].setComponents(o-l,f-h,v-g,_-T).normalize(),t===Xi)i[5].setComponents(o+l,f+h,v+g,_+T).normalize();else if(t===qn)i[5].setComponents(l,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pt extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,n=t/2,l=Math.floor(i),o=Math.floor(r),u=l+1,c=o+1,h=e/l,f=t/o,d=[],p=[],g=[],v=[];for(let m=0;m<c;m++){const x=m*f-n;for(let T=0;T<u;T++){const _=T*h-s;p.push(_,-x,0),g.push(0,0,1),v.push(T/l),v.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<l;x++){const T=x+u*m,_=x+u*(m+1),B=x+1+u*(m+1),A=x+1+u*m;d.push(T,_,A),d.push(_,B,A)}this.setIndex(d),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wl extends jl{constructor(e=-1,t=1,i=1,r=-1,s=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,n=i+e,l=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,n=s+u*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,n,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $c extends Bt{constructor(e,t,i,r,s,n,l,o,u,c){if(c=c!==void 0?c:hn,c!==hn&&c!==Na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hn&&(i=ju),i===void 0&&c===Na&&(i=Wu),super(null,r,s,n,l,o,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:rs,this.minFilter=o!==void 0?o:rs,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gc=new $c(1,1);Gc.compareFunction=Qu;class Pn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hn,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pt=new I;class ia{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=kt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Le(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Le(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Le(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Le(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Le(t,this.array),i=Le(i,this.array),r=Le(r,this.array),s=Le(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lo=new I,uo=new At,co=new At,qc=new I,ho=new Se,$s=new I,Bn=new Qt,fo=new Se,Dn=new an;class jc extends mi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Da,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$s),this.boundingBox.expandByPoint($s)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$s),this.boundingSphere.expandByPoint($s)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bn.copy(this.boundingSphere),Bn.applyMatrix4(r),e.ray.intersectsSphere(Bn)!==!1&&(fo.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(fo),!(this.boundingBox!==null&&Dn.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Da?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;uo.fromBufferAttribute(r.attributes.skinIndex,e),co.fromBufferAttribute(r.attributes.skinWeight,e),lo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const n=co.getComponent(s);if(n!==0){const l=uo.getComponent(s);ho.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),t.addScaledVector(qc.copy(lo).applyMatrix4(ho),n)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xl extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ra extends Bt{constructor(e=null,t=1,i=1,r,s,n,l,o,u=rs,c=rs,h,f){super(null,n,l,o,u,c,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=new Se,Wc=new Se;class sa{constructor(e=[],t=[]){this.uuid=Ot(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Se;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,n=e.length;s<n;s++){const l=e[s]?e[s].matrixWorld:Wc;po.multiplyMatrices(l,t[s]),po.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new sa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ra(t,e,e,Ul,Yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let n=t[s];n===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),n=new Xl),this.bones.push(n),this.boneInverses.push(new Se().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const n=t[r];e.bones.push(n.uuid);const l=i[r];e.boneInverses.push(l.toArray())}return e}}class Wn extends Dt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new Se,mo=new Se,Gs=[],go=new vi,Xc=new Se,Gr=new mi,Hr=new Qt;class Yc extends mi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xc)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),go.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(go)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,yr),Hr.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,n=e*s+1;for(let l=0;l<i.length;l++)i[l]=r[n+l]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yr),mo.multiplyMatrices(i,yr),Gr.matrixWorld=mo,Gr.raycast(e,Gs);for(let n=0,l=Gs.length;n<l;n++){const o=Gs[n];o.instanceId=s,o.object=this,t.push(o)}Gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(r*this.count),r,this.count,Xu,Yi));const s=this.morphTexture.source.data.data;let n=0;for(let u=0;u<i.length;u++)n+=i[u];const l=this.geometry.morphTargetsRelative?1:1-n,o=r*e;s[o]=l,s.set(i,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yl extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new I,yo=new I,bo=new Se,Nn=new an,Hs=new Qt;class na extends Ye{constructor(e=new ei,t=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)vo.fromBufferAttribute(t,r-1),yo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vo.distanceTo(yo);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;bo.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(bo);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=new I,c=new I,h=new I,f=new I,d=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const m=Math.max(0,n.start),x=Math.min(p.count,n.start+n.count);for(let T=m,_=x-1;T<_;T+=d){const B=p.getX(T),A=p.getX(T+1);if(u.fromBufferAttribute(v,B),c.fromBufferAttribute(v,A),Nn.distanceSqToSegment(u,c,f,h)>o)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,n.start),x=Math.min(v.count,n.start+n.count);for(let T=m,_=x-1;T<_;T+=d){if(u.fromBufferAttribute(v,T),c.fromBufferAttribute(v,T+1),Nn.distanceSqToSegment(u,c,f,h)>o)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const xo=new I,wo=new I;class Zc extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xo.fromBufferAttribute(t,r),wo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xo.distanceTo(wo);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kc extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zl extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _o=new Se,Xn=new an,qs=new Qt,js=new I;class Jc extends Ye{constructor(e=new ei,t=new Zl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;_o.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(_o);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,n.start),d=Math.min(u.count,n.start+n.count);for(let p=f,g=d;p<g;p++){const v=u.getX(p);js.fromBufferAttribute(h,v),So(js,v,o,r,e,t,this)}}else{const f=Math.max(0,n.start),d=Math.min(h.count,n.start+n.count);for(let p=f,g=d;p<g;p++)js.fromBufferAttribute(h,p),So(js,p,o,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function So(a,e,t,i,r,s,n){const l=Xn.distanceSqToPoint(a);if(l<t){const o=new I;Xn.closestPointToPoint(a,o),o.applyMatrix4(i);const u=r.ray.origin.distanceTo(o);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,object:n})}}class aa extends ei{constructor(e=1,t=1,i=1,r=32,s=1,n=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:n,thetaStart:l,thetaLength:o};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],d=[];let p=0;const g=[],v=i/2;let m=0;x(),n===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(d,2));function x(){const _=new I,B=new I;let A=0;const C=(t-e)/i;for(let w=0;w<=s;w++){const O=[],N=w/s,P=N*(t-e)+e;for(let k=0;k<=r;k++){const R=k/r,z=R*o+l,j=Math.sin(z),$=Math.cos(z);B.x=P*j,B.y=-N*i+v,B.z=P*$,h.push(B.x,B.y,B.z),_.set(j,C,$).normalize(),f.push(_.x,_.y,_.z),d.push(R,1-N),O.push(p++)}g.push(O)}for(let w=0;w<r;w++)for(let O=0;O<s;O++){const N=g[O][w],P=g[O+1][w],k=g[O+1][w+1],R=g[O][w+1];c.push(N,P,R),c.push(P,k,R),A+=6}u.addGroup(m,A,0),m+=A}function T(_){const B=p,A=new oe,C=new I;let w=0;const O=_===!0?e:t,N=_===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,v*N,0),f.push(0,N,0),d.push(.5,.5),p++;const P=p;for(let k=0;k<=r;k++){const z=k/r*o+l,j=Math.cos(z),$=Math.sin(z);C.x=O*$,C.y=v*N,C.z=O*j,h.push(C.x,C.y,C.z),f.push(0,N,0),A.x=j*.5+.5,A.y=$*.5*N+.5,d.push(A.x,A.y),p++}for(let k=0;k<r;k++){const R=B+k,z=P+k;_===!0?c.push(z,z+1,R):c.push(z+1,z,R),w+=3}u.addGroup(m,w,_===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class on extends ei{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,n=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:n,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(n+l,Math.PI);let u=0;const c=[],h=new I,f=new I,d=[],p=[],g=[],v=[];for(let m=0;m<=i;m++){const x=[],T=m/i;let _=0;m===0&&n===0?_=.5/t:m===i&&o===Math.PI&&(_=-.5/t);for(let B=0;B<=t;B++){const A=B/t;h.x=-e*Math.cos(r+A*s)*Math.sin(n+T*l),h.y=e*Math.cos(n+T*l),h.z=e*Math.sin(r+A*s)*Math.sin(n+T*l),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),v.push(A+_,1-T),x.push(u++)}c.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const T=c[m][x+1],_=c[m][x],B=c[m+1][x],A=c[m+1][x+1];(m!==0||n>0)&&d.push(T,_,A),(m!==i-1||o<Math.PI)&&d.push(_,B,A)}this.setIndex(d),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oa extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yi extends oa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ws(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Qc(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function eh(a){function e(r,s){return a[r]-a[s]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function To(a,e,t){const i=a.length,r=new a.constructor(i);for(let s=0,n=0;n!==i;++s){const l=t[s]*e;for(let o=0;o!==e;++o)r[n++]=a[l+o]}return r}function Kl(a,e,t,i){let r=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[r++];if(s===void 0)return;let n=s[i];if(n!==void 0)if(Array.isArray(n))do n=s[i],n!==void 0&&(e.push(s.time),t.push.apply(t,n)),s=a[r++];while(s!==void 0);else if(n.toArray!==void 0)do n=s[i],n!==void 0&&(e.push(s.time),n.toArray(t,t.length)),s=a[r++];while(s!==void 0);else do n=s[i],n!==void 0&&(e.push(s.time),t.push(n)),s=a[r++];while(s!==void 0)}class ps{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<s)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(i=2,s=l);for(let o=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=s,s=t[--i-1],e>=s)break e}n=i,i=0;break t}break i}for(;i<n;){const l=i+n>>>1;e<t[l]?n=l:i=l+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let n=0;n!==r;++n)t[n]=i[s+n];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class th extends ps{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:za,endingEnd:za}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,n=e+1,l=r[s],o=r[n];if(l===void 0)switch(this.getSettings_().endingStart){case Fa:s=e,l=2*t-i;break;case La:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Fa:n=e,o=2*i-t;break;case La:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(o-i),this._offsetPrev=s*c,this._offsetNext=n*c}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),g=p*p,v=g*p,m=-f*v+2*f*g-f*p,x=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*p+1,T=(-1-d)*v+(1.5+d)*g+.5*p,_=d*v-d*g;for(let B=0;B!==l;++B)s[B]=m*n[c+B]+x*n[u+B]+T*n[o+B]+_*n[h+B];return s}}class ih extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,l=this.valueSize,o=e*l,u=o-l,c=(i-t)/(r-t),h=1-c;for(let f=0;f!==l;++f)s[f]=n[u+f]*h+n[o+f]*c;return s}}class rh extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case fn:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return fn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,n=r-1;for(;s!==r&&i[s]<e;)++s;for(;n!==-1&&i[n]>t;)--n;if(++n,s!==0||n!==r){s>=n&&(n=Math.max(n,1),s=n-1);const l=this.getValueSize();this.times=i.slice(s,n),this.values=this.values.slice(s*l,n*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let l=0;l!==s;l++){const o=i[l];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,o),e=!1;break}if(n!==null&&n>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,o,n),e=!1;break}n=o}if(r!==void 0&&Qc(r))for(let l=0,o=r.length;l!==o;++l){const u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fn,s=e.length-1;let n=1;for(let l=1;l<s;++l){let o=!1;const u=e[l],c=e[l+1];if(u!==c&&(l!==1||u!==e[0]))if(r)o=!0;else{const h=l*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){const g=t[h+p];if(g!==t[f+p]||g!==t[d+p]){o=!0;break}}}if(o){if(l!==n){e[n]=e[l];const h=l*i,f=n*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++n}}if(s>0){e[n]=e[s];for(let l=s*i,o=n*i,u=0;u!==i;++u)t[o+u]=t[l+u];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Mr;class Pr extends ti{}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ss;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jl extends ti{}Jl.prototype.ValueTypeName="color";class Ar extends ti{}Ar.prototype.ValueTypeName="number";class sh extends ps{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,l=this.valueSize,o=(i-t)/(r-t);let u=e*l;for(let c=u+l;u!==c;u+=4)ki.slerpFlat(s,0,n,u-l,n,u,o);return s}}class Ji extends ti{InterpolantFactoryMethodLinear(e){return new sh(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=Mr;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends ti{}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ss;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends ti{}Cr.prototype.ValueTypeName="vector";class nh{constructor(e="",t=-1,i=[],r=Yu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Ot(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,l=i.length;n!==l;++n)t.push(oh(i[n]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,n=i.length;s!==n;++s)t.push(ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,n=[];for(let l=0;l<s;l++){let o=[],u=[];o.push((l+s-1)%s,l,(l+1)%s),u.push(0,1,0);const c=eh(o);o=To(o,1,c),u=To(u,1,c),!r&&o[0]===0&&(o.push(s),u.push(u[0])),n.push(new Ar(".morphTargetInfluences["+t[l].name+"]",o,u).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,o=e.length;l<o;l++){const u=e[l],c=u.name.match(s);if(c&&c.length>1){const h=c[1];let f=r[h];f||(r[h]=f=[]),f.push(u)}}const n=[];for(const l in r)n.push(this.CreateFromMorphTargetSequence(l,r[l],t,i));return n}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,p,g){if(d.length!==0){const v=[],m=[];Kl(d,v,m,p),v.length!==0&&g.push(new h(f,v,m))}},r=[],s=e.name||"default",n=e.fps||30,l=e.blendMode;let o=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const f=u[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let g=0;g<f[p].morphTargets.length;g++)d[f[p].morphTargets[g]]=-1;for(const g in d){const v=[],m=[];for(let x=0;x!==f[p].morphTargets.length;++x){const T=f[p];v.push(T.time),m.push(T.morphTarget===g?1:0)}r.push(new Ar(".morphTargetInfluence["+g+"]",v,m))}o=d.length*n}else{const d=".bones["+t[h].name+"]";i(Cr,d+".position",f,"pos",r),i(Ji,d+".quaternion",f,"rot",r),i(Cr,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,o,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ah(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return Jl;case"quaternion":return Ji;case"bool":case"boolean":return Pr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function oh(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ah(a.type);if(a.times===void 0){const t=[],i=[];Kl(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ii={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class lh{constructor(e,t,i){const r=this;let s=!1,n=0,l=0,o;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,s===!1&&r.onStart!==void 0&&r.onStart(c,n,l),s=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,l),n===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const d=u[h],p=u[h+1];if(d.global&&(d.lastIndex=0),d.test(c))return p}return null}}}const uh=new lh;class er{constructor(e){this.manager=e!==void 0?e:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class ch extends Error{constructor(e,t){super(e),this.response=t}}class la extends er{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ii.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:r});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:r});const n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,o=this.responseType;fetch(n).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ui[e],h=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let g=0;const v=new ReadableStream({start(m){x();function x(){h.read().then(({done:T,value:_})=>{if(T)m.close();else{g+=_.byteLength;const B=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let A=0,C=c.length;A<C;A++){const w=c[A];w.onProgress&&w.onProgress(B)}m.enqueue(_),x()}})}}});return new Response(v)}else throw new ch(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(o){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,l));case"json":return u.json();default:if(l===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(l),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return u.arrayBuffer().then(p=>d.decode(p))}}}).then(u=>{Ii.add(e,u);const c=ui[e];delete ui[e];for(let h=0,f=c.length;h<f;h++){const d=c[h];d.onLoad&&d.onLoad(u)}}).catch(u=>{const c=ui[e];if(c===void 0)throw this.manager.itemError(e),u;delete ui[e];for(let h=0,f=c.length;h<f;h++){const d=c[h];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hh extends er{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=Ii.get(e);if(n!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n;const l=jn("img");function o(){c(),Ii.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){l.removeEventListener("load",o,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class fh extends er{constructor(e){super(e)}load(e,t,i,r){const s=this,n=new ra,l=new la(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(e,function(o){let u;try{u=s.parse(o)}catch(c){if(r!==void 0)r(c);else{console.error(c);return}}u.image!==void 0?n.image=u.image:u.data!==void 0&&(n.image.width=u.width,n.image.height=u.height,n.image.data=u.data),n.wrapS=u.wrapS!==void 0?u.wrapS:Wi,n.wrapT=u.wrapT!==void 0?u.wrapT:Wi,n.magFilter=u.magFilter!==void 0?u.magFilter:Bi,n.minFilter=u.minFilter!==void 0?u.minFilter:Bi,n.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(n.colorSpace=u.colorSpace),u.flipY!==void 0&&(n.flipY=u.flipY),u.format!==void 0&&(n.format=u.format),u.type!==void 0&&(n.type=u.type),u.mipmaps!==void 0&&(n.mipmaps=u.mipmaps,n.minFilter=sn),u.mipmapCount===1&&(n.minFilter=Bi),u.generateMipmaps!==void 0&&(n.generateMipmaps=u.generateMipmaps),n.needsUpdate=!0,t&&t(n,u)},i,r),n}}class ji extends er{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,n=new hh(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ua extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zn=new Se,Ro=new I,Mo=new I;class ca{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),Mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mo),t.updateMatrixWorld(),zn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dh extends ca{constructor(){super(new ta(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ph extends ua{constructor(e,t,i=0,r=Math.PI/3,s=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=r,this.penumbra=s,this.decay=n,this.map=null,this.shadow=new dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ao=new Se,qr=new I,Fn=new I;class mh extends ca{constructor(){super(new ta(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(qr),Fn.copy(i.position),Fn.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fn),i.updateMatrixWorld(),r.makeTranslation(-qr.x,-qr.y,-qr.z),Ao.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao)}}class gh extends ua{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vh extends ca{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yh extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bh extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,n=Ii.get(e);if(n!==void 0){if(s.manager.itemStart(e),n.then){n.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(n),s.manager.itemEnd(e)},0),n}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const o=fetch(e,l).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ii.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Ii.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ii.add(e,o),s.manager.itemStart(e)}}const ha="\\[\\]\\.:\\/",xh=new RegExp("["+ha+"]","g"),fa="[^"+ha+"]",wh="[^"+ha.replace("\\.","")+"]",_h=/((?:WC+[\/:])*)/.source.replace("WC",fa),Sh=/(WCOD+)?/.source.replace("WCOD",wh),Th=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fa),Rh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fa),Mh=new RegExp("^"+_h+Sh+Th+Rh+"$"),Ah=["material","materials","bones","map"];class Ch{constructor(e,t,i){const r=i||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ke{constructor(e,t,i){this.path=t,this.parsedPath=i||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,i):new ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xh,"")}static parseTrackName(e){const t=Mh.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Ah.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let n=0;n<s.length;n++){const l=s[n];if(l.name===t||l.uuid===t)return l;const o=i(l.children);if(o)return o}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const n=e[r];if(n===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=s}else n.fromArray!==void 0&&n.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(o=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=Ch;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);class xt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.min=e,this.max=t}expand(e){e instanceof I?(e.x<this.min.x&&this.min.setX(e.x),e.y<this.min.y&&this.min.setY(e.y),e.z<this.min.z&&this.min.setZ(e.z),e.x>this.max.x&&this.max.setX(e.x),e.y>this.max.y&&this.max.setY(e.y),e.z>this.max.z&&this.max.setZ(e.z)):e instanceof xt&&(e.min.x<this.min.x&&this.min.setX(e.min.x),e.min.y<this.min.y&&this.min.setY(e.min.y),e.min.z<this.min.z&&this.min.setZ(e.min.z),e.max.x>this.max.x&&this.max.setX(e.max.x),e.max.y>this.max.y&&this.max.setY(e.max.y),e.max.z>this.max.z&&this.max.setZ(e.max.z))}intersectRay(e,t){let i=new I(1,1,1).divide(t),r=(this.min.x-e.x)*i.x,s=(this.max.x-e.x)*i.x,n=(this.min.y-e.y)*i.y,l=(this.max.y-e.y)*i.y,o=(this.min.z-e.z)*i.z,u=(this.max.z-e.z)*i.z;var c=Math.max(Math.max(Math.min(r,s),Math.min(n,l)),Math.min(o,u));let h=Math.min(Math.min(Math.max(r,s),Math.max(n,l)),Math.max(o,u));return h<0?{t:h,hit:!1}:c>h?{t:h,hit:!1}:(c<0&&(c=0),{t:c,hit:!0})}static shaderStruct(){return`
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
    `}}function Yt(a,e){return new oe(a,e)}function mt(a,e,t){return new I(a,e,t)}function jr(a,e){return a*(e<0?-1:1)}function Co(a,e,t){return(1-a)*e+a*t}function Eh(a,e){let t=e.clone().sub(new oe(a.min.x,a.min.y));return a.max.x>a.min.x&&(t.x/=a.max.x-a.min.x),a.max.y>a.min.y&&(t.y/=a.max.y-a.min.y),t}function as(a,e,t){return a<e?e:a>t?t:a}class hi{constructor(e,t,i){S(this,"func",[]);S(this,"absFunc",[]);S(this,"cdf",[]);S(this,"min",-1);S(this,"max",-1);S(this,"funcInt",-1);if(e instanceof ArrayBuffer){this.fromBufferData(e);return}if(t===void 0||i===void 0)throw new Error("PC1D constructor must provide min and max values");let r=[],s=[],n=0;for(let o=0;o<e.length;o++)r.push(0),s.push(0);for(let o=0;o<e.length;o++)r[o]=Math.abs(e[o]);s[0]=0;let l=e.length;for(let o=1;o<l+1;o++)s[o]=s[o-1]+e[o-1]*(i-t)/l;if(n=s[l],n==0)for(let o=1;o<l+1;o++)s[o]=o/l;else for(let o=1;o<l+1;o++)s[o]/=n;this.func=e,this.min=t,this.max=i,this.absFunc=r,this.cdf=s,this.funcInt=n}fromBufferData(e){let i=e.byteLength/4,r=Math.floor((i-3)/3),s=new Float32Array(e,0,i);this.min=s[0],this.max=s[1],this.funcInt=s[2],this.func=Array.from(s.slice(3,3+r)),this.absFunc=Array.from(s.slice(3+r,3+r*2)),this.cdf=Array.from(s.slice(3+r*2,3+r*3+1))}getBufferData(){const e=12+(this.func.length*3+1)*4,t=new ArrayBuffer(e);let i=e/4,r=this.func.length,s=new Float32Array(t,0,i);s[0]=this.min,s[1]=this.max,s[2]=this.funcInt;for(let n=0;n<this.func.length;n++)s[3+n]=this.func[n];for(let n=0;n<this.absFunc.length;n++)s[3+r+n]=this.absFunc[n];for(let n=0;n<this.cdf.length;n++)s[3+r*2+n]=this.cdf[n];return t}findCDFIndex(e,t){let i=0,r=e.length;for(var s=-2,n=-1;n!=s;){s=Math.floor((i+r)/2),n=s;let l=e[s];t>l&&(i=s,s=Math.floor((i+r)/2)),t<l&&(r=s,s=Math.floor((i+r)/2))}return n}samplePC1D(e){let{cdf:t,absFunc:i,funcInt:r,func:s,min:n,max:l}=this,o=this.findCDFIndex(t,e),u=e-t[o];t[o+1]-t[o]>0&&(u/=t[o+1]-t[o]);let c=o,h=r>0?i[o]/r:0,f=Co((o+u)/s.length,n,l),d=s[o];return{offset:c,pdf:h,remappedOffset:f,sampledValue:d}}invertPC1D(e){let{cdf:t,func:i,min:r,max:s}=this;if(e<r||e>s)return;let n=(e-r)/(s-r)*i.length,l=Math.min(Math.max(Math.floor(n),0),i.length-1),o=n-l;return Co(o,t[l],t[l+1])}static shaderStruct(){return`
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
    `}}class jt{constructor(e,t,i,r){S(this,"pConditionalV",[]);S(this,"pMarginal",new hi([1],0,1));S(this,"domain",new xt);S(this,"sizeX",0);S(this,"sizeY",0);if(e instanceof ArrayBuffer){this.fromArrayBuffer(e);return}if(t===void 0||i===void 0||r===void 0)throw new Error("PC2D constructor requires size and domain");let s=e.flat(1);this.sizeX=t,this.sizeY=i;let n=[],l;for(let u=0;u<i;u++)n.push(new hi(s.slice(u*t,u*t+t),r.min.x,r.max.x));let o=[];for(let u=0;u<i;++u)o.push(n[u].funcInt);l=new hi(o,r.min.y,r.max.y),this.pConditionalV=n,this.pMarginal=l,this.domain=r}samplePC2D(e){let t=new oe(-1,-1),i=this.pMarginal.samplePC1D(e.y);t.y=i.offset;let r=this.pConditionalV[t.y].samplePC1D(e.x);return t.x=r.offset,{pdf:i.pdf*r.pdf,offset:t,floatOffset:new oe(r.remappedOffset,i.remappedOffset)}}pdfPC2D(e,t){let{pConditionalV:i,pMarginal:r}=this,s=Eh(t,e),n=as(Math.floor(s.x*i[0].func.length),0,i[0].func.length-1),l=as(Math.floor(s.y*r.func.length),0,r.func.length-1);return i[l].func[n]/r.funcInt}fromArrayBuffer(e){const t=e,i=new Float32Array(t),r=new Int32Array(t);this.domain=new xt(new I(i[0],i[1],i[2]),new I(i[4],i[5],i[6])),this.sizeX=r[8],this.sizeY=r[9];let n=(3+this.sizeX*3+1)*4;for(let l=0;l<this.sizeY;l++)this.pConditionalV.push(new hi(e.slice(40+l*n,40+(l+1)*n)));this.pMarginal=new hi(e.slice(40+n*this.sizeY,40+n*(this.sizeY+1)))}getArrayData(){let e=3+this.sizeX*3+1,t=e*(this.sizeY+1),r=t*4+2*4;const s=new ArrayBuffer(r),n={data:new Float32Array(s,0,t+2)};this.pConditionalV.forEach((o,u)=>{let c=o.getBufferData();n.data.set(new Float32Array(c),e*u)});let l=this.pMarginal.getBufferData();return n.data.set(new Float32Array(l),e*this.pConditionalV.length),n.data.set([0,0],t),s}getBufferData(){let e=48;const t=new ArrayBuffer(e),i={domainmin:new Float32Array(t,0,3),domainmax:new Float32Array(t,16,3),size:new Int32Array(t,32,2)};return i.domainmin.set([this.domain.min.x,this.domain.min.y,0]),i.domainmax.set([this.domain.max.x,this.domain.max.y,0]),i.size.set([this.sizeX,this.sizeY]),t}static shaderStruct(){return`
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
    `}}function Ql(a){return .2126*a.x+.7152*a.y+.0722*a.z}class Ih extends fh{constructor(e){super(e),this.type=xs}parse(e){const n=function(w,O){switch(w){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(O||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(O||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(O||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(O||""))}},c=`
`,h=function(w,O,N){O=O||1024;let k=w.pos,R=-1,z=0,j="",$=String.fromCharCode.apply(null,new Uint16Array(w.subarray(k,k+128)));for(;0>(R=$.indexOf(c))&&z<O&&k<w.byteLength;)j+=$,z+=$.length,k+=128,$+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(k,k+128)));return-1<R?(w.pos+=z+R+1,j+$.slice(0,R)):!1},f=function(w){const O=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,R=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let j,$;for((w.pos>=w.byteLength||!(j=h(w)))&&n(1,"no header found"),($=j.match(O))||n(3,"bad initial token"),z.valid|=1,z.programtype=$[1],z.string+=j+`
`;j=h(w),j!==!1;){if(z.string+=j+`
`,j.charAt(0)==="#"){z.comments+=j+`
`;continue}if(($=j.match(N))&&(z.gamma=parseFloat($[1])),($=j.match(P))&&(z.exposure=parseFloat($[1])),($=j.match(k))&&(z.valid|=2,z.format=$[1]),($=j.match(R))&&(z.valid|=4,z.height=parseInt($[1],10),z.width=parseInt($[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||n(3,"missing format specifier"),z.valid&4||n(3,"missing image size specifier"),z},d=function(w,O,N){const P=O;if(P<8||P>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);P!==(w[2]<<8|w[3])&&n(3,"wrong scanline width");const k=new Uint8Array(4*O*N);k.length||n(4,"unable to allocate buffer space");let R=0,z=0;const j=4*P,$=new Uint8Array(4),re=new Uint8Array(j);let se=N;for(;se>0&&z<w.byteLength;){z+4>w.byteLength&&n(1),$[0]=w[z++],$[1]=w[z++],$[2]=w[z++],$[3]=w[z++],($[0]!=2||$[1]!=2||($[2]<<8|$[3])!=P)&&n(3,"bad rgbe scanline format");let D=0,W;for(;D<j&&z<w.byteLength;){W=w[z++];const ae=W>128;if(ae&&(W-=128),(W===0||D+W>j)&&n(3,"bad scanline data"),ae){const pe=w[z++];for(let Z=0;Z<W;Z++)re[D++]=pe}else re.set(w.subarray(z,z+W),D),D+=W,z+=W}const de=P;for(let ae=0;ae<de;ae++){let pe=0;k[R]=re[ae+pe],pe+=P,k[R+1]=re[ae+pe],pe+=P,k[R+2]=re[ae+pe],pe+=P,k[R+3]=re[ae+pe],R+=4}se--}return k},p=function(w,O,N,P){const k=w[O+3],R=Math.pow(2,k-128)/255;N[P+0]=w[O+0]*R,N[P+1]=w[O+1]*R,N[P+2]=w[O+2]*R,N[P+3]=1},g=function(w,O,N,P){const k=w[O+3],R=Math.pow(2,k-128)/255;N[P+0]=Ps.toHalfFloat(Math.min(w[O+0]*R,65504)),N[P+1]=Ps.toHalfFloat(Math.min(w[O+1]*R,65504)),N[P+2]=Ps.toHalfFloat(Math.min(w[O+2]*R,65504)),N[P+3]=Ps.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const m=f(v),x=m.width,T=m.height,_=d(v.subarray(v.pos),x,T);let B,A,C;switch(this.type){case Yi:C=_.length/4;const w=new Float32Array(C*4);for(let N=0;N<C;N++)p(_,N*4,w,N*4);B=w,A=Yi;break;case xs:C=_.length/4;const O=new Uint16Array(C*4);for(let N=0;N<C;N++)g(_,N*4,O,N*4);B=O,A=xs;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:T,data:B,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(n,l){switch(n.type){case Yi:case xs:n.colorSpace=Ct,n.minFilter=Bi,n.magFilter=Bi,n.generateMipmaps=!1,n.flipY=!0;break}t&&t(n,l)}return super.load(e,s,i,r)}}let Qi=class{constructor(){S(this,"INFO_BUFFER_BYTE_LENGTH",112);S(this,"SERIALIZATION_VERSION",1);S(this,"size",new oe(0,0));S(this,"luminanceAverage",0);S(this,"scale",1);S(this,"rotX",0);S(this,"rotY",0);S(this,"data",new Float32Array);S(this,"distribution",new jt([[0]],1,1,new xt));S(this,"compensatedDistribution",new jt([[0]],1,1,new xt));S(this,"lightSourcePickProb",0)}async fromEquirect(e,t=400){let i=await new Ih().setDataType(Yi).loadAsync(e),r=i.source.data.data,s=new oe(i.source.data.width,i.source.data.height),n=[],l=[],o=[],u=t;for(let c=0;c<u;c++)for(let h=0;h<u;h++){let f=1/(u*2),d=h/u+f,p=c/u+f,g=this.equalAreaSquareToSphere(new oe(d,p));g.normalize();let v=new oe(Math.atan2(g.z,g.x),Math.asin(g.y));v.multiply(new oe(1/(Math.PI*2),1/Math.PI)),v.addScalar(.5),v.y=1-v.y;let m=Math.floor(v.x*s.x)+Math.floor(v.y*s.y)*s.x,x=r[m*4+0],T=r[m*4+1],_=r[m*4+2];n.push(x,T,_,1);let B=Ql(new I(x,T,_));this.luminanceAverage+=B,h===0&&l.push([]),l[c].push(B)}this.luminanceAverage/=u*u;for(let c=0;c<u;c++)for(let h=0;h<u;h++)h===0&&o.push([]),o[c].push(Math.max(l[c][h]-this.luminanceAverage,0));return this.distribution=new jt(l,u,u,new xt(new I(0,0,0),new I(1,1,0))),this.compensatedDistribution=new jt(o,u,u,new xt(new I(0,0,0),new I(1,1,0))),this.data=new Float32Array(n),this.size=new oe(u,u),i.dispose(),this}fromArrayBuffer(e){if(new Uint32Array(e,0,1)[0]!=this.SERIALIZATION_VERSION)throw new Error("envmap buffer is from an older version, re-run the envmap transform");this.size.x=new Uint32Array(e,1*4,2)[0],this.size.y=new Uint32Array(e,1*4,2)[1];let i=new Float32Array(e,3*4,4);this.luminanceAverage=i[0],this.scale=i[1],this.rotX=i[2],this.rotY=i[3];const r=this.size.x*this.size.y*4*4;this.data=new Float32Array(e,7*4,r/4);let s=(e.byteLength-(7*4+r))/2;return this.distribution=new jt(e.slice(7*4+r,7*4+r+s)),this.compensatedDistribution=new jt(e.slice(7*4+r+s,7*4+r+s+s)),this}setLightSourcePickProb(e){this.lightSourcePickProb=e}getArrayBuffer(){let e=this.distribution.getBufferData(),t=this.compensatedDistribution.getBufferData(),i=1*4,r=2*4,s=1*4,n=3*4,l=i+r+s+n+this.data.byteLength+e.byteLength+t.byteLength,o=new ArrayBuffer(l),u={version:new Uint32Array(o,0,1),size:new Uint32Array(o,1*4,2),luminanceAverage:new Float32Array(o,3*4,1),scale:new Float32Array(o,4*4,1),rotX:new Float32Array(o,5*4,1),rotY:new Float32Array(o,6*4,1),data:new Float32Array(o,7*4,this.data.length),distributionBuffer:new Uint8Array(o,7*4+this.data.byteLength,e.byteLength),compensatedDistributionBuffer:new Uint8Array(o,7*4+this.data.byteLength+e.byteLength,t.byteLength)};return u.version.set([this.SERIALIZATION_VERSION]),u.size.set([this.size.x,this.size.y]),u.luminanceAverage.set([this.luminanceAverage]),u.scale.set([this.scale]),u.rotX.set([this.rotX]),u.rotY.set([this.rotY]),u.data.set(this.data),u.distributionBuffer.set(new Uint8Array(e)),u.compensatedDistributionBuffer.set(new Uint8Array(t)),o}equalAreaSquareToSphere(e){let t=2*e.x-1,i=2*e.y-1,r=Math.abs(t),s=Math.abs(i),n=1-(r+s),o=1-Math.abs(n),u=(o==0?1:(s-r)/o+1)*Math.PI/4,c=jr(1-o*o,n),h=jr(Math.cos(u),t),f=jr(Math.sin(u),i),d=new I(h*o*Math.sqrt(2-o*o),f*o*Math.sqrt(2-o*o),c);return new I(d.x,d.z,d.y)}equalAreaSphereToSquare(e){let t=Math.abs(e.x),i=Math.abs(e.y),r=Math.abs(e.z),s=Math.sqrt(1-r),n=Math.max(t,i);var l=Math.min(t,i);n==0?l=0:l=l/n;var o=Math.atan(l)*2/Math.PI;t<i&&(o=1-o);var u=o*s,c=s-u;if(e.z<0){var h=u;u=c,c=h,c=1-c,u=1-u}return c=jr(c,e.x),u=jr(u,e.y),new oe(.5*(c+1),.5*(u+1))}createEnvmapInfoBuffer(e){const t=e.createBuffer({label:"envmap info",size:this.INFO_BUFFER_BYTE_LENGTH,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.updateEnvmapInfoBuffer(e,t),t}updateEnvmapInfoBuffer(e,t){const i=new ArrayBuffer(this.INFO_BUFFER_BYTE_LENGTH),r={size:new Int32Array(i,0,2),scale:new Float32Array(i,8,1),lightSourcePickProb:new Float32Array(i,12,1),transform:new Float32Array(i,16,12),invTransform:new Float32Array(i,64,12)};let s=new Se().makeRotationAxis(new I(0,1,0),this.rotX);s.multiply(new Se().makeRotationAxis(new I(1,0,0),this.rotY));let n=s.clone().invert();r.size.set([this.size.x,this.size.y]),r.scale.set([this.scale]),r.lightSourcePickProb.set([this.lightSourcePickProb]),r.transform.set(s.elements.slice(0,12)),r.invTransform.set(n.elements.slice(0,12)),e.queue.writeBuffer(t,0,i)}getTexture(e){if(this.size.x===0){const i=e.createTexture({size:[1,1],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:i},new Float32Array([1,1,1,1]),{bytesPerRow:1*16},{width:1,height:1}),{texture:i}}const t=e.createTexture({size:[this.size.x,this.size.y],format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return e.queue.writeTexture({texture:t},this.data,{bytesPerRow:this.size.x*16},{width:this.size.x,height:this.size.y}),{texture:t}}static shaderStruct(){return`
      struct EnvmapInfo {
        size: vec2i,
        scale: f32,
        lightSourcePickProb: f32,
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
    `}};const _e={DIFFUSE:0,EMISSIVE:1,TORRANCE_SPARROW:2,DIELECTRIC:3,EON_DIFFUSE:4};class Dr{constructor({flipTextureY:e}){S(this,"offsetCount");S(this,"textures",{});S(this,"texturesLocation",{});S(this,"flipTextureY",!1);S(this,"type");this.type=-1,this.offsetCount=0,this.flipTextureY=e}getFloatsArray(){return[this.type]}static shaderStruct(){return`
      struct EvaluatedMaterial {
        // "type" is a reserved word in wgsl, had to use "materialType" instead
        materialType: u32,

        baseColor: vec3f,
        absorptionCoefficient: vec3f,
        emissiveIntensity: f32, 
        
        ax: f32,
        ay: f32,
        roughness: f32, 
        anisotropy: f32,
        eta: f32,

        bumpStrength: f32,

        uvRepeat: vec2f,
        mapUvRepeat: vec2f,

        mapLocation: vec2i,
        bumpMapLocation: vec2i,
        roughnessMapLocation: vec2i,
      } 

      struct BrdfDirectionSample {
        brdf: vec3f,
        pdf: f32, 
        mis: f32,
        dir: vec3f,
      }
      
      struct LightDirectionSample {
        brdf: vec3f,
        pdf: f32, 
        mis: f32,
        dir: vec3f,
        ls: LightSample,
      }

      struct GeometryContext {
        barycentrics: vec2f,
        isBackFacing: bool,
        ray: Ray,
        interpolatedAttributes: InterpolatedAttributes,
        normals: SurfaceNormals,
        bumpOffset: f32,
      }
      
      fn evaluateLobePdf(
        material: EvaluatedMaterial, 
        wo: vec3f,
        wi: vec3f,
        geometryContext: GeometryContext
      ) -> f32 {
        let materialType = material.materialType;
      
        if (materialType == ${_e.DIFFUSE}) {
          return evaluatePdfDiffuseLobe(wo, wi, material, geometryContext.normals);
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          return evaluatePdfEmissiveLobe();
        }
      
        if (materialType == ${_e.TORRANCE_SPARROW}) {
          return evaluatePdfTSLobe(wo, wi, material);
        }
      
        if (materialType == ${_e.DIELECTRIC}) {
          return evaluatePdfDielectricLobe(wo, wi, material);
        }
      
        return 0.0;
      }

      fn evaluateBrdf(
        material: EvaluatedMaterial, 
        wo: vec3f,
        wi: vec3f,
        geometryContext: GeometryContext
      ) -> vec3f {
        let materialType = material.materialType;
      
        if (materialType == ${_e.DIFFUSE}) {
          return evaluateDiffuseBrdf(wo, wi, material);
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          return evaluateEmissiveBrdf();
        }
      
        if (materialType == ${_e.TORRANCE_SPARROW}) {
          return evaluateTSBrdf(wo, wi, material);
        }
      
        if (materialType == ${_e.DIELECTRIC}) {
          return evaluateDielectricBrdf(wo, wi, material);
        }
      
        return vec3f(0);
      }

      fn sampleBrdf(
        material: EvaluatedMaterial, 
        geometryContext: GeometryContext
      ) -> BrdfDirectionSample {
        let materialType = material.materialType;
      
        if (materialType == ${_e.DIFFUSE}) {
          return sampleDiffuseBrdf(material, geometryContext);
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          return sampleEmissiveBrdf(material, geometryContext);
        }
      
        if (materialType == ${_e.TORRANCE_SPARROW}) {
          return sampleTSBrdf(material, geometryContext);
        }
      
        if (materialType == ${_e.DIELECTRIC}) {
          return sampleDielectricBrdf(material, geometryContext);
        }
      
        return BrdfDirectionSample(vec3f(0), 0, 0, vec3f(0));
      }

      fn sampleLight(
        material: EvaluatedMaterial, 
        geometryContext: GeometryContext
      ) -> LightDirectionSample {
        let materialType = material.materialType;
      
        if (materialType == ${_e.DIFFUSE}) {
          return sampleDiffuseLight(material, geometryContext);
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          return sampleEmissiveLight(material, geometryContext);
        }
      
        if (materialType == ${_e.TORRANCE_SPARROW}) {
          return sampleTSLight(material, geometryContext);
        }
      
        if (materialType == ${_e.DIELECTRIC}) {
          return sampleDielectricLight(material, geometryContext);
        }
      
        return LightDirectionSample(vec3f(0), 0, 0, vec3f(0), LightSample());
      }

      fn evaluateMaterialAtSurfacePoint(
        materialOffset: u32,
        interpolatedAttributes: InterpolatedAttributes
      ) -> EvaluatedMaterial {
        let materialType = u32(materialsBuffer[materialOffset]);
      
        if (materialType == ${_e.DIFFUSE}) {
          return getDiffuseMaterial(interpolatedAttributes, materialOffset);
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          return getEmissiveMaterial(materialOffset);
        }
      
        if (materialType == ${_e.TORRANCE_SPARROW}) {
          return getTSMaterial(interpolatedAttributes, materialOffset);
        }
      
        if (materialType == ${_e.DIELECTRIC}) {
          return getDielectricMaterial(interpolatedAttributes, materialOffset);
        }
      
        // undefined material, magenta color
        var errorMat = EvaluatedMaterial();
        errorMat.baseColor = vec3f(1.0, 0.0, 1.0);
        errorMat.materialType = ${_e.EMISSIVE};
        errorMat.emissiveIntensity = 1.0;
        errorMat.mapLocation = vec2i(-1, -1);
        errorMat.bumpMapLocation = vec2i(-1, -1);
        errorMat.roughnessMapLocation = vec2i(-1, -1);
        return errorMat;
      }

      fn getEmissive(material: EvaluatedMaterial, isBackFacing: bool) -> vec3f {
        let materialType = material.materialType;
        if (materialType == ${_e.EMISSIVE} && !isBackFacing) {
          return material.baseColor * material.emissiveIntensity;
        }
        return vec3f(0);
      }

      fn getNormalsAtPoint(
        material: EvaluatedMaterial,
        ray: Ray,
        interpolatedAttributes: InterpolatedAttributes,
        triangle: Triangle,
        bumpOffset: ptr<function, f32>,
        isBackfacing: ptr<function, bool>,
      ) -> SurfaceNormals {
        *isBackfacing = false;
        let materialType = material.materialType;

        let geometricNormal = triangle.geometricNormal;
        var vertexNormal = interpolatedAttributes.normal;
        // the normal flip is calculated using the geometric normal to avoid
        // black edges on meshes displaying strong smooth-shading via vertex normals
        if (dot(geometricNormal, ray.direction) > 0) {
          *isBackfacing = true;
        
          if (materialType != ${_e.DIELECTRIC}) {
            vertexNormal = -vertexNormal;
          }
        }
        var normals = SurfaceNormals(geometricNormal, vertexNormal, vertexNormal);
      
        if (
          materialType == ${_e.DIFFUSE} ||
          materialType == ${_e.TORRANCE_SPARROW} || 
          // remember that dielectric materials won't flip vertexNormal
          materialType == ${_e.DIELECTRIC}
        ) {
          let bumpMapLocation = material.bumpMapLocation;
          let bumpStrength = material.bumpStrength;
          let uvRepeat = material.uvRepeat;
        
          if (bumpMapLocation.x > -1) {
            let surfAttrWithFlippedNormal = InterpolatedAttributes(vertexNormal, interpolatedAttributes.uv, interpolatedAttributes.tangent);
            normals.shading = getShadingNormal(
              bumpMapLocation, bumpStrength, uvRepeat, surfAttrWithFlippedNormal, 
              ray, triangle, bumpOffset
            );
          }
        }
      
        if (materialType == ${_e.EMISSIVE}) {
          *isBackfacing = false;
        
          var N = geometricNormal;
          if (dot(N, ray.direction) > 0) {
            *isBackfacing = true;
            N = -N;
          }
        
          normals.geometric = N;
          normals.vertex    = N;
          normals.shading   = N;
        }
      
        return normals;
      }

      fn evaluateMaterialAndGeometryContext(
        ires: BVHIntersectionResult,
        ray: Ray,
        evaluatedMaterial: ptr<function, EvaluatedMaterial>,
        geometryContext: ptr<function, GeometryContext>,
        // some times it's useful to skip the calculation of 
        // shading normals since it might require a texture fetch 
        skipNormalCalculations: bool
      ) {
        let triangle = ires.triangle;
        let interpolatedAttributes = getInterpolatedAttributes(triangle, ires.barycentrics);
        let material = evaluateMaterialAtSurfacePoint(triangle.materialOffset, interpolatedAttributes);
      
        var bumpOffset = 0.0;
        var isBackFacing = false;
        var normals = SurfaceNormals();
        if (!skipNormalCalculations) {
          normals = getNormalsAtPoint(
            material, ray, interpolatedAttributes, triangle, &bumpOffset, &isBackFacing,
          );
        }
      
        *evaluatedMaterial = material;
        *geometryContext = GeometryContext(
          ires.barycentrics,
          isBackFacing,
          ray,
          interpolatedAttributes,
          normals,
          bumpOffset
        );
      }

      fn cosTerm(norm: vec3f, dir: vec3f, materialType: u32) -> f32 {
        if (materialType == ${_e.DIELECTRIC}) {
          return abs(dot(norm, dir));
        }
        return max(dot(norm, dir), 0.0);
      }
    `}}class zi extends Dr{constructor({color:t,intensity:i=1,flipTextureY:r=!1}){super({flipTextureY:r});S(this,"color");S(this,"intensity");this.type=_e.EMISSIVE,this.color=t,this.intensity=i,this.offsetCount=5}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.intensity]}static shaderEmissiveLobe(){return`
fn getEmissiveMaterial(offset: u32) -> EvaluatedMaterial {
  var data = EvaluatedMaterial();
  
  // material type
  data.materialType = u32(materialsBuffer[offset]);

  // color
  data.baseColor.x = materialsBuffer[offset + 1];
  data.baseColor.y = materialsBuffer[offset + 2];
  data.baseColor.z = materialsBuffer[offset + 3];

  // intensity
  data.emissiveIntensity = materialsBuffer[offset + 4];

  data.roughnessMapLocation = vec2i(-1, -1);
  data.bumpMapLocation = vec2i(-1, -1);
  data.mapLocation = vec2i(-1, -1);

  return data;
}


fn evaluatePdfEmissiveLobe() -> f32 {
  return 1 / (2 * PI);
}

fn evaluateEmissiveBrdf() -> vec3f {
  return vec3f(1 / PI);
}

fn sampleEmissiveBrdf(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> BrdfDirectionSample {
  let surfaceNormals = geometryContext.normals;

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
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);

  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, surfaceNormals.shading);
  // from tangent space to world space
  let newDirection = normalize(TBN * nd.xzy);
  let brdfSamplePdf = evaluatePdfEmissiveLobe();
  let brdf = evaluateEmissiveBrdf();
  const misWeight = 1.0;

  return BrdfDirectionSample(
    brdf,
    brdfSamplePdf,
    misWeight,
    newDirection,
  );
}

fn sampleEmissiveLight(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> LightDirectionSample {
  let ray = geometryContext.ray;
  let interpolatedAttributes = geometryContext.interpolatedAttributes;
  let surfaceNormals = geometryContext.normals;
  
  // necessary to use the same number of rands between this function and sampleDiffuseLight
  let rands = vec4f(getRand2D(), getRand2D());
  
  return LightDirectionSample(
    vec3f(0.0),
    1,
    0,
    vec3f(0.0),
    LightSample(),
  );
}
    `}}function Ph(a){var n,l;let e=a.attributes.position.array,t=((n=a.attributes.uv)==null?void 0:n.array)||[];if(!t)return;let i=(l=a.index)==null?void 0:l.array;if(!i)return;let r=[];for(let o=0;o<i.length;o+=3){let u=i[o+0],c=i[o+1],h=i[o+2],f=mt(e[u*3+0],e[u*3+1],e[u*3+2]),d=mt(e[c*3+0],e[c*3+1],e[c*3+2]),p=mt(e[h*3+0],e[h*3+1],e[h*3+2]),g=Yt(t[u*2+0],t[u*2+1]),v=Yt(t[c*2+0],t[c*2+1]),m=Yt(t[h*2+0],t[h*2+1]),x=eu(f,d,p,g,v,m);r[u]||(r[u]=[]),r[c]||(r[c]=[]),r[h]||(r[h]=[]),r[u].push(x),r[c].push(x),r[h].push(x)}let s=[];for(let o=0;o<r.length;o++){let u=r[o]||[],c=mt(0,0,0);for(let h=0;h<u.length;h++)c.add(u[h]);if(c.divideScalar(u.length),c.x==0&&c.y==0&&c.z==0){let h=0;for(let f=0;f<u.length;f++){let d=u[f];(d.x!=0||d.y!=0||d.z!=0)&&(h=f)}c.copy(u[h])}s.push(c.x,c.y,c.z)}a.setAttribute("tangent",new Dt(new Float32Array(s),3))}function eu(a,e,t,i,r,s){var n=!1;let l=mt(0,0,0);if(i.x>-1){let o=e.clone().sub(a),u=t.clone().sub(a),c=r.clone().sub(i),h=s.clone().sub(i),f=c.x*h.y-h.x*c.y,d=1/f;f==0&&(n=!0),l=mt(d*(h.y*o.x-c.y*u.x),d*(h.y*o.y-c.y*u.y),d*(h.y*o.z-c.y*u.z)).normalize()}return(i.x<-.9||n)&&(l=e.clone().sub(a).normalize()),l}class Fi{constructor(e,t,i,r,s,n,l,o,u,c,h,f,d,p){S(this,"idxRef",-1);S(this,"norm0");S(this,"norm1");S(this,"norm2");S(this,"geometricNormal");S(this,"uv0",new oe(-1,-1));S(this,"uv1",new oe(-1,-1));S(this,"uv2",new oe(-1,-1));S(this,"tang0",new I(-1,-1));S(this,"tang1",new I(-1,-1));S(this,"tang2",new I(-1,-1));S(this,"lightSourcePickProb",0);this.v0=e,this.v1=t,this.v2=i,this.materialIndex=r;let g=t.clone().sub(e),v=i.clone().sub(e);this.geometricNormal=g.cross(v).normalize(),p!=null&&p<0&&this.geometricNormal.negate(),s&&n&&l?(this.norm0=s,this.norm1=n,this.norm2=l):(this.norm0=this.geometricNormal,this.norm1=this.geometricNormal,this.norm2=this.geometricNormal),o&&(this.uv0=o),u&&(this.uv1=u),c&&(this.uv2=c),h&&(this.tang0=h),f&&(this.tang1=f),d&&(this.tang2=d),h||this.computeTangents()}computeTangents(){let e=this,t=eu(e.v0,e.v1,e.v2,e.uv0,e.uv1,e.uv2);this.tang0=t,this.tang1=t,this.tang2=t}setIdxRef(e){this.idxRef=e}getAABB(){let e=new xt;return e.expand(this.v0),e.expand(this.v1),e.expand(this.v2),e}getArea(){let e=this.v1.clone().sub(this.v0),t=this.v2.clone().sub(this.v0);return e.cross(t).length()*.5}getCentroid(){return this.v0.clone().add(this.v1).add(this.v2).divideScalar(3)}getLuminance(e){if(!(e instanceof zi))throw new Error("can't get luminance of non-emissive material");return Ql(new I(e.color.r,e.color.g,e.color.b))*e.intensity*this.getArea()}setLightSourcePickProb(e){this.lightSourcePickProb=e}intersectRay(e,t){let i=this.v0,r=this.v1,s=this.v2,n=r.clone().sub(i),l=s.clone().sub(i),o=t.clone().cross(l),u=n.dot(o);if(Math.abs(u)<1e-6)return{hit:!1,t:0,hitPoint:new I(0,0,0)};let c=1/u,h=e.clone().sub(i),f=h.dot(o)*c;if(f<0||f>1)return{hit:!1,t:0,hitPoint:new I(0,0,0)};let d=h.clone().cross(n),p=t.dot(d)*c;if(p<0||f+p>1)return{hit:!1,t:0,hitPoint:new I(0,0,0)};let g=l.dot(d)*c;if(g<0)return{hit:!1,t:0,hitPoint:new I(0,0,0)};let v=e.clone().add(t.clone().multiplyScalar(g));return{hit:!0,t:g,hitPoint:v}}static getBufferData(e,t){const r=e.length,s=new ArrayBuffer(192*r);return e.forEach((n,l)=>{const o=l*192,u={v0:new Float32Array(s,o+0,3),v1:new Float32Array(s,o+16,3),v2:new Float32Array(s,o+32,3),uv0:new Float32Array(s,o+48,2),uv1:new Float32Array(s,o+56,2),uv2:new Float32Array(s,o+64,2),tang0:new Float32Array(s,o+80,3),tang1:new Float32Array(s,o+96,3),tang2:new Float32Array(s,o+112,3),area:new Float32Array(s,o+124,1),norm0:new Float32Array(s,o+128,3),norm1:new Float32Array(s,o+144,3),norm2:new Float32Array(s,o+160,3),lightSourcePickProb:new Float32Array(s,o+172,1),geometricNormal:new Float32Array(s,o+176,3),materialOffset:new Uint32Array(s,o+188,1)};u.v0.set([n.v0.x,n.v0.y,n.v0.z]),u.v1.set([n.v1.x,n.v1.y,n.v1.z]),u.v2.set([n.v2.x,n.v2.y,n.v2.z]),u.uv0.set([n.uv0.x,n.uv0.y]),u.uv1.set([n.uv1.x,n.uv1.y]),u.uv2.set([n.uv2.x,n.uv2.y]),u.area.set([n.getArea()]),u.lightSourcePickProb.set([n.lightSourcePickProb]),u.norm0.set([n.norm0.x,n.norm0.y,n.norm0.z]),u.norm1.set([n.norm1.x,n.norm1.y,n.norm1.z]),u.norm2.set([n.norm2.x,n.norm2.y,n.norm2.z]),u.tang0.set([n.tang0.x,n.tang0.y,n.tang0.z]),u.tang1.set([n.tang1.x,n.tang1.y,n.tang1.z]),u.tang2.set([n.tang2.x,n.tang2.y,n.tang2.z]),u.geometricNormal.set([n.geometricNormal.x,n.geometricNormal.y,n.geometricNormal.z]),u.materialOffset.set([t[n.materialIndex]])}),{trianglesBufferData:s,trianglesBufferDataByteSize:r*192}}static shaderStruct(){return`
      struct IntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        barycentrics: vec2f,
      }

      struct InterpolatedAttributes {
        normal: vec3f,
        uv: vec2f,
        tangent: vec3f,
      }

      struct SurfaceNormals {
        geometric: vec3f,
        vertex: vec3f,
        shading: vec3f,
      }

      struct TriangleSampleResult {
        point: vec3f,
        barycentrics: vec2f,
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
        lightSourcePickProb: f32,
        geometricNormal: vec3f,
        materialOffset: u32,
      }
    `}static shaderIntersectionFn(){return`
      fn sampleTrianglePoint(triangle: Triangle, st: vec2f) -> TriangleSampleResult {
        let s = st.x;
        let t = st.y;
        
        let v0v1 = (triangle.v1 - triangle.v0);
        let v0v2 = (triangle.v2 - triangle.v0);

        let in_triangle = s + t <= 1;
        if (in_triangle) {
          return TriangleSampleResult(v0v1 * s + v0v2 * t + triangle.v0, vec2f(s, t));
        }

        return TriangleSampleResult(
          v0v1 * (1.0 - s) + v0v2 * (1.0 - t) + triangle.v0,
          vec2f((1.0 - s), (1.0 - t))
        );
      }

      fn getInterpolatedAttributes(triangle: Triangle, barycentrics: vec2f) -> InterpolatedAttributes {
        let u = barycentrics.x;
        let v = barycentrics.y;
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

        return InterpolatedAttributes(hitNormal, hitUV, hitTangent);
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
        const noIntersection = IntersectionResult(false, 0, vec3f(0), vec2f(0));
      
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
        let barycentrics = vec2f(u, v);

        return IntersectionResult(
          true, t, hitPoint, barycentrics
        );
      }
    `}}class Er{constructor(){S(this,"listenersMap");this.listenersMap={}}fireEvent(e,t){const i=this.listenersMap[e];i&&i.forEach(r=>{r(t)})}addEventListener(e,t){this.listenersMap[e]||(this.listenersMap[e]=[]),this.listenersMap[e].push(t)}removeEventListener(e,t){if(!this.listenersMap[e])return;const i=this.listenersMap[e],r=i.indexOf(t);r>-1&&i.splice(r,1)}}var Yn=(a=>(a[a.BRDF_ONLY=0]="BRDF_ONLY",a[a.NEXT_EVENT_ESTIMATION=1]="NEXT_EVENT_ESTIMATION",a))(Yn||{}),Wt=(a=>(a[a.UNIFORM=0]="UNIFORM",a[a.HALTON=1]="HALTON",a[a.BLUE_NOISE=2]="BLUE_NOISE",a[a.CUSTOM_R2=3]="CUSTOM_R2",a))(Wt||{}),Di=(a=>(a[a.UNIFORM=0]="UNIFORM",a[a.HALTON_2_THEN_UNIFORM=1]="HALTON_2_THEN_UNIFORM",a[a.BLUE_NOISE=2]="BLUE_NOISE",a))(Di||{}),wr=(a=>(a[a.NONE=0]="NONE",a[a.RANDOM_OFFSET=1]="RANDOM_OFFSET",a[a.RANDOM_ARRAY_OFFSET=2]="RANDOM_ARRAY_OFFSET",a[a.BLUE_NOISE_MASK=3]="BLUE_NOISE_MASK",a))(wr||{});class ln{constructor(){S(this,"options");S(this,"prevOptions");S(this,"e");S(this,"bufferSize",0);this.options=tt(ye),this.prevOptions=this.options,this.e=new Er,ye.subscribe(e=>{this.options=e,this.prevOptions=ye.getOldValue(),this.e.fireEvent("config-update",this.options)})}setStoreProperty(e){ye.set({...this.options,...e})}getOptionsBuffer(){return new ArrayBuffer}shaderPart(){return""}}class Bh extends ln{constructor(){super(...arguments);S(this,"bufferSize",16)}getOptionsBuffer(){return new Uint32Array([this.options.SimplePathTrace.MIS_TYPE,this.options.SimplePathTrace.SAMPLER_DECORRELATION,this.options.SimplePathTrace.USE_POWER_HEURISTIC,this.options.BOUNCES_COUNT]).buffer}shaderPart(){return`

    const DECORRELATION_NONE: u32 = 0;
    const DECORRELATION_RAND_OFFSET: u32 = 1;
    const DECORRELATION_RAND_ARRAY_OFFSET: u32 = 2;
    const DECORRELATION_BLUE_NOISE_MASK: u32 = 3;

    const BRDF_ONLY: u32 = 0;
    const NEXT_EVENT_ESTIMATION: u32 = 1;
    
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
    `}}class Dh extends ln{constructor(){super(...arguments);S(this,"bufferSize",32)}getOptionsBuffer(){const t=new ArrayBuffer(32),i={USE_POWER_HEURISTIC:new Uint32Array(t,0,1),BOUNCES_COUNT:new Int32Array(t,4,1),RESTIR_INITIAL_CANDIDATES:new Int32Array(t,8,1),RESTIR_SR_CANDIDATES:new Int32Array(t,12,1),RESTIR_TEMP_CANDIDATES:new Int32Array(t,16,1),USE_TEMPORAL_RESAMPLE:new Uint32Array(t,20,1),MAX_CONFIDENCE:new Float32Array(t,24,1),SR_CIRCLE_RADIUS:new Float32Array(t,28,1)};return i.USE_POWER_HEURISTIC.set([this.options.ReSTIR.USE_POWER_HEURISTIC]),i.BOUNCES_COUNT.set([this.options.BOUNCES_COUNT]),i.RESTIR_INITIAL_CANDIDATES.set([this.options.ReSTIR.RESTIR_INITIAL_CANDIDATES]),i.RESTIR_SR_CANDIDATES.set([this.options.ReSTIR.RESTIR_SR_CANDIDATES]),i.RESTIR_TEMP_CANDIDATES.set([this.options.ReSTIR.RESTIR_TEMP_CANDIDATES]),i.USE_TEMPORAL_RESAMPLE.set([this.options.ReSTIR.USE_TEMPORAL_RESAMPLE?1:0]),i.MAX_CONFIDENCE.set([this.options.ReSTIR.MAX_CONFIDENCE]),i.SR_CIRCLE_RADIUS.set([this.options.ReSTIR.SR_CIRCLE_RADIUS]),t}shaderPart(){return`

    struct Config {
      USE_POWER_HEURISTIC: u32,
      BOUNCES_COUNT: i32,
      RESTIR_INITIAL_CANDIDATES: i32,
      RESTIR_SR_CANDIDATES: i32,
      RESTIR_TEMP_CANDIDATES: i32,
      USE_TEMPORAL_RESAMPLE: u32,
      MAX_CONFIDENCE: f32,
      SR_CIRCLE_RADIUS: f32,
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
    `}}function Nh(a){return new URLSearchParams(window.location.search).get(a)}const tu=Vt({nodesCount:0}),Yr=Vt("compute"),da=Vt(""),Ni=Vt(""),iu=Vt({}),$e=function(){let e=Vt({limit:200,count:0,ms:0,tileSize:"",clickTarget:"(0, 0)",integrator:{ReSTIR:null}});return{subscribe:e.subscribe,set:e.set,update:e.update,get count(){return tt(e).count},get limit(){return tt(e).limit},setTileSize(t){e.update(i=>(i.tileSize=t,i))},setPerformance:t=>{e.update(i=>(i.ms=t,i))},setLimit:t=>{e.update(i=>(i.limit=t,i))},setReSTIRState:t=>{e.update(i=>(i.integrator.ReSTIR=t,i))},increment:()=>e.update(t=>(t.count++,t)),reset:()=>e.update(t=>(t.count=0,t))}}();let ru="C2 features";const Eo=Nh("scene")||"";Eo&&(ru=Eo);const os=Vt(ru),Fe=Vt({exposure:1,aperture:0,focusDistance:1,fov:Math.PI*.25,tiltShift:new oe(0,0),catsEyeBokehEnabled:!1,catsEyeBokehMult:0,catsEyeBokehPow:0}),Pi=Vt({movementSpeed:1,rotationSpeed:1,position:new I(0,0,0),target:new I(0,0,0)}),ye=zh({forceMaxTileSize:!1,BOUNCES_COUNT:10,ENVMAP_SCALE:1,ENVMAP_ROTX:0,ENVMAP_ROTY:0,ENVMAP_USE_COMPENSATED_DISTRIBUTION:!1,integrator:"Simple-path-trace",SimplePathTrace:{MIS_TYPE:1,SAMPLER_TYPE:3,SAMPLER_DECORRELATION:3,USE_POWER_HEURISTIC:1},ReSTIR:{SAMPLER_TYPE:Di.UNIFORM,USE_POWER_HEURISTIC:1,RESTIR_INITIAL_CANDIDATES:1,RESTIR_SR_CANDIDATES:6,RESTIR_SR_PASS_COUNT:3,RESTIR_TEMP_CANDIDATES:2,SR_CIRCLE_RADIUS:10,MAX_CONFIDENCE:10,USE_TEMPORAL_RESAMPLE:!1,GBH_VARIANT:"Pairwise MIS"},shaderConfig:{HAS_ENVMAP:!1}});function zh(a){const{subscribe:e,set:t,update:i}=Vt(a);let r=[a,a];return{subscribe:e,set:s=>{r[0]=r[1],r[1]=JSON.parse(JSON.stringify(s)),t(s)},update:s=>{i(n=>(r[0]=r[1],r[1]=JSON.parse(JSON.stringify(n)),s(n)))},getOldValue:()=>r[0]}}const Ys=2;class ls{constructor(e){S(this,"root");S(this,"bvhFlatArray");S(this,"cdfToTriangleIndex",[]);this.scene=e;let t=e.triangles;if(t.length>2147483648)throw new Error("Exceeded max primitives count, the webGPU primitives array holds i32 indexes");t.forEach((r,s)=>{r.setIdxRef(s)}),this.bvhFlatArray=[],this.root=new Ln(t,0);let i=[];for(this.root.isLeaf()||i.push(this.root),this.bvhFlatArray.push(this.root);i.length>0;){let r=i.pop();if(!r)break;let s=r.getSplittingAxis(),n=[],l=[];for(let c=0;c<r.primitives.length;c++){let h=r.primitives[c];h.getCentroid()[s.axis]<s.center?n.push(h):l.push(h)}if(n.length===0||l.length===0){n=[],l=[];let c=Math.floor(r.primitives.length/2);for(let h=0;h<r.primitives.length;h++)h<c?n.push(r.primitives[h]):l.push(r.primitives[h])}let o=new Ln(n,this.bvhFlatArray.length);this.bvhFlatArray.push(o);let u=new Ln(l,this.bvhFlatArray.length);this.bvhFlatArray.push(u),r.setLeft(o),r.setRight(u),o.isLeaf()||i.push(o),u.isLeaf()||i.push(u),r.isLeaf()||r.releasePrimitivesArrayMemory()}if(tu.set({nodesCount:this.bvhFlatArray.length}),this.bvhFlatArray.length>2147483648)throw new Error(`
        Exceeded max bvh nodes count, the webGPU left/right props holds i32 indexes,
        also, maximum stack-intersection-depth is set to 32 when intersecting the bvh
      `)}intersectRay(e,t){let i=this.root;if(!i.nodeAABB.intersectRay(e,t).hit)return{hit:!1,t:0,hitPoint:new I(0,0,0),triangle:null};var s={hit:!1,t:1/0,hitPoint:new I(0,0,0)},n,l=Array(128);l[0]=i;for(var o=0;o!==-1;){let p=l[o];if(o-=1,p.leaf){let g=p.primitives;for(var u=0;u<g.length;u++){let v=g[u],m=v.intersectRay(e,t);m.hit&&m.t<s.t&&(s=m,n=v)}}if(!p.leaf){let g=p.left.nodeAABB.intersectRay(e,t),v=p.right.nodeAABB.intersectRay(e,t);var c,h,f,d;g.t<v.t?(c=p.left,h=p.right,f=g,d=v):(c=p.right,h=p.left,f=v,d=g),d.hit&&d.t<s.t&&(o+=1,l[o]=h),f.hit&&f.t<s.t&&(o+=1,l[o]=c)}}return{hit:s.hit,t:s.t,hitPoint:s.hitPoint,triangle:n||null}}getBufferData(){const t=64*this.bvhFlatArray.length,i=new ArrayBuffer(t);let r=this.scene.triangles,s=this.scene.materials;this.bvhFlatArray.forEach((l,o)=>{const u=l.nodeAABB.max,c=l.nodeAABB.min,h=l.isLeaf();let f=-1,d=-1,p=Array(Ys).fill(-1);!h&&l.left&&l.right&&(f=l.left.flatArrayIndex,d=l.right.flatArrayIndex),h&&l.primitives.forEach((m,x)=>{p[x]=m.idxRef});const g=o*64,v={aabb:{min:new Float32Array(i,0+g,3),max:new Float32Array(i,16+g,3)},left:new Int32Array(i,32+g,1),right:new Int32Array(i,36+g,1),leaf:new Uint32Array(i,40+g,1),primitives:new Int32Array(i,44+g,2)};v.aabb.min.set([c.x,c.y,c.z]),v.aabb.max.set([u.x,u.y,u.z]),v.left.set([f]),v.right.set([d]),v.leaf.set([h?1:0]),v.primitives.set(p)});const n=[];for(let l=0;l<s.length;l++)if(l===0)n.push(0);else{let o=n[l-1],u=s[l-1];n.push(o+u.offsetCount)}return{...Fi.getBufferData(r,n),BVHBufferData:i,BVHBufferDataByteSize:t}}computeLightPickProbabilities(){let e=0;this.cdfToTriangleIndex=[];let t=this.scene.triangles,i=this.scene.materials;if(t.forEach(r=>{let s=i[r.materialIndex];s instanceof zi&&(this.cdfToTriangleIndex.push([e,r.getLuminance(s),r.idxRef]),e+=r.getLuminance(s))}),this.scene.envmap){let r=this.root.nodeAABB.max.clone().sub(this.root.nodeAABB.min).length(),s=4*Math.PI*r*r*this.scene.envmap.scale*this.scene.envmap.luminanceAverage;this.cdfToTriangleIndex.push([e,s,-2]),e+=s}this.cdfToTriangleIndex.forEach(r=>{r[0]/=e,r[1]/=e;let s=r[1],n=r[2];n>=0?t[n].setLightSourcePickProb(s):n===-2&&this.scene.envmap&&this.scene.envmap.setLightSourcePickProb(s)})}getLightsCDFBufferData(){const e=12*this.cdfToTriangleIndex.length,t=new ArrayBuffer(e);return this.cdfToTriangleIndex.forEach((i,r)=>{let s=12*r;new Float32Array(t,s+0,1).set([i[0]]),new Float32Array(t,s+4,1).set([i[1]]),new Uint32Array(t,s+8,1).set([i[2]])}),{LightsCDFBufferData:t,LightsCDFBufferDataByteSize:e}}static shaderStruct(){return`
      // https://webgpufundamentals.org/webgpu/lessons/resources/wgsl-offset-computer.html
      struct BVHNode {
        aabb: AABB,
        left: i32, // can be -1
        right: i32, 
        leaf: u32, // bool is apparently non-host something
        // i32 is necessary since we're using -1 for null
        primitives: array<i32, ${Ys}>, 
      }

      struct BVHIntersectionResult {
        hit: bool,
        t: f32,
        hitPoint: vec3f,
        triangle: Triangle,
        triangleIndex: i32,
        barycentrics: vec2f,
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
        hitPoint: vec3f,
        triangleIndex: i32,
        barycentrics: vec2f,
        geometricNormal: vec3f,
      }
    `}static shaderIntersect(){return`
      fn getLightSample(
        rayOrigin: vec3f, rands: vec4f
      ) -> LightSample {
        let cdfEntry = getLightCDFEntry(rands.z);

        if (cdfEntry.triangleIndex > -1) {
          let triangle = triangles[cdfEntry.triangleIndex];
          let sampleResult = sampleTrianglePoint(triangle, vec2f(rands.x, rands.y));
          let samplePoint = sampleResult.point;

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

          if (backSideHit) {
            return LightSample(false, false, 0, vec3f(0), vec3f(0), vec3f(0.0), -1, vec2f(0), vec3f(0));
          }
          
          let iray = Ray(rayOrigin + sampleDirection * 0.001, sampleDirection);
          let ires = bvhIntersect(iray);
          if (!ires.hit || cdfEntry.triangleIndex != ires.triangleIndex) {
            return LightSample(false, false, 0, vec3f(0), vec3f(0), vec3f(0.0), -1, vec2f(0), vec3f(0));
          }

          var material = EvaluatedMaterial();
          var geometryContext = GeometryContext();
          evaluateMaterialAndGeometryContext(ires, iray, &material, &geometryContext, true);

          let emissive = material.baseColor * material.emissiveIntensity;
          let radiance = emissive;

          return LightSample(
            false, backSideHit, lightSamplePdf, sampleDirection, radiance, 
            samplePoint, cdfEntry.triangleIndex, sampleResult.barycentrics,
            lN
          );
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
            return LightSample(false, false, 0, vec3f(0), vec3f(0), vec3f(0.0), -1, vec2f(0), vec3f(0));
          }
          let radiance = getEnvmapRadiance(sampleDirection);

          return LightSample(true, false, lightSamplePdf, sampleDirection, radiance, vec3f(0.0), -1, uv, vec3f(0));
        }

        return LightSample(false, false, 0, vec3f(0), vec3f(0), vec3f(0.0), -1, vec2f(0), vec3f(0));
      }

      fn getLightPDF(ray: Ray) -> f32 {
        let ires = bvhIntersect(Ray(ray.origin + ray.direction * 0.001, ray.direction));

        if (ires.hit) {
          // if we don't hit a primitive, bvhIntersect will set ires.triangle to the first triangle
          // of the scene. Keep in mind that ires.hit will be false
          let materialType = materialsBuffer[ires.triangle.materialOffset];
          var lightSamplePdf = 0.0;
          if (materialType == ${_e.EMISSIVE}) {
            let lD = ray.direction;
            let r2 = squaredLength(ires.hitPoint - ray.origin);
            var lN = ires.triangle.geometricNormal;
            var lNolD = dot(lN, -lD);
            if (lNolD < 0) {
              lN = -lN;
              lNolD = -lNolD;
            }
            lightSamplePdf = r2 / (lNolD * ires.triangle.area);
            // probability of picking this triangle from the getLightCDFEntry(...)
            lightSamplePdf *= ires.triangle.lightSourcePickProb;

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
          // probability of picking the envmap from the getLightCDFEntry(...)
          pdf *= envmapInfo.lightSourcePickProb;

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
            false, 0, vec3f(0), triangles[0], 0, vec2f(0)
          );
        }

        // from: https://github.com/gpuweb/gpuweb/issues/3431#issuecomment-1453667278
        let highestFloat = 0x1.fffffep+127f;
        var closestIntersection = IntersectionResult(
          false, highestFloat, vec3f(0), vec2f(0)
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
            for (var i = 0; i < ${Ys}; i++) {
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
          triangles[closestPrimitiveIndex],
          closestPrimitiveIndex,
          closestIntersection.barycentrics
        );
      } 
    `}}class Ln{constructor(e,t){S(this,"nodeAABB");S(this,"leaf",!1);S(this,"left",null);S(this,"right",null);this.primitives=e,this.flatArrayIndex=t,this.nodeAABB=new xt;for(let i=0;i<e.length;i++)this.nodeAABB.expand(e[i].getAABB());e.length<=Ys&&(this.leaf=!0)}setLeft(e){this.left=e}setRight(e){this.right=e}isLeaf(){return this.leaf}releasePrimitivesArrayMemory(){this.primitives=[]}getSplittingAxis(){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,n=-1/0;for(let c=0;c<this.primitives.length;c++){let f=this.primitives[c].getCentroid();f.x<e&&(e=f.x),f.y<t&&(t=f.y),f.z<i&&(i=f.z),f.x>r&&(r=f.x),f.y>s&&(s=f.y),f.z>n&&(n=f.z)}let l=r-e,o=s-t,u=n-i;return l>o&&l>u?{axis:"x",center:(r+e)*.5}:o>l&&o>u?{axis:"y",center:(s+t)*.5}:{axis:"z",center:(n+i)*.5}}}function ct(a){let e=new ArrayBuffer(4),t=new Int32Array(e,0,1);return t[0]=a,new Float32Array(e,0,1)[0]}const Qr=class Qr extends Dr{constructor({color:t,map:i,bumpMap:r,bumpStrength:s=1,uvRepeat:n=new oe(1,1),mapUvRepeat:l=new oe(1,1),flipTextureY:o=!1,roughness:u=0}){super({flipTextureY:o});S(this,"color");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");S(this,"roughness");this.type=_e.DIFFUSE,this.color=t,this.bumpStrength=s,this.uvRepeat=n,this.mapUvRepeat=l,this.offsetCount=14,this.roughness=u,this.texturesLocation.map=new oe(-1,-1),this.texturesLocation.bumpMap=new oe(-1,-1),i&&(this.textures.map=i),r&&(this.textures.bumpMap=r)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.roughness,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,ct(this.texturesLocation.map.x),ct(this.texturesLocation.map.y),ct(this.texturesLocation.bumpMap.x),ct(this.texturesLocation.bumpMap.y)]}static shaderDiffuseLobe(){return Qr.EONDiffuse}};S(Qr,"simpleLambertianDiffuse",`
fn getDiffuseMaterial(interpolatedAttributes: InterpolatedAttributes, offset: u32) -> EvaluatedMaterial {
  var data = EvaluatedMaterial();
  
  // material type
  data.materialType = u32(materialsBuffer[offset]);

  // color
  data.baseColor.x = materialsBuffer[offset + 1];
  data.baseColor.y = materialsBuffer[offset + 2];
  data.baseColor.z = materialsBuffer[offset + 3];

  data.roughness = materialsBuffer[offset + 4];
  
  // bumpStrength
  data.bumpStrength = materialsBuffer[offset + 5];

  // uv repeat x,y
  data.uvRepeat.x = materialsBuffer[offset + 6];
  data.uvRepeat.y = materialsBuffer[offset + 7];

  // map-uv repeat x,y
  data.mapUvRepeat.x = materialsBuffer[offset + 8];
  data.mapUvRepeat.y = materialsBuffer[offset + 9];
  
  // mapLocation    requires bitcast<i32>(...);
  data.mapLocation.x = bitcast<i32>(materialsBuffer[offset + 10]);
  data.mapLocation.y = bitcast<i32>(materialsBuffer[offset + 11]);
  
  // bumpMapLocation    requires bitcast<i32>(...);
  data.bumpMapLocation.x = bitcast<i32>(materialsBuffer[offset + 12]);
  data.bumpMapLocation.y = bitcast<i32>(materialsBuffer[offset + 13]);

  data.roughnessMapLocation = vec2i(-1, -1);

  if (data.mapLocation.x > -1) {
    let texelColor = getTexelFromTextureArrays(
      data.mapLocation, interpolatedAttributes.uv, data.mapUvRepeat
    ).xyz;

    data.baseColor *= texelColor;
  }

  return data;
}

fn evaluatePdfDiffuseLobe(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
  surfaceNormals: SurfaceNormals,
) -> f32 {
  // assuming wi is in local-space
  let cosTheta = wi.z;
  let brdfSamplePdf = cosTheta / PI;
  return brdfSamplePdf;
}

fn evaluateDiffuseBrdf(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> vec3f {
  var color = material.baseColor;
  let brdf = color / PI;
  return brdf;
}

fn sampleDiffuseBrdf(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> BrdfDirectionSample {
  let ray = geometryContext.ray;
  let surfaceNormals = geometryContext.normals;

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
  let rands = vec4f(getRand2D(), getRand2D());
  let rand_1 = rands.x;
  // if rand_2 is 0, both cosTheta and the pdf will be zero
  let rand_2 = max(rands.y, 0.000001);
  let phi = 2.0 * PI * rand_1;
  let theta = acos(sqrt(rand_2));
  let cosTheta = cos(theta);
  let sinTheta = sin(theta);
  // local space new ray direction. Z points up to follow pbrt's convention
  let newDir = vec3f(cos(phi) * sinTheta, sin(phi) * sinTheta, cosTheta);
  var tangent = vec3f(0.0);
  var bitangent = vec3f(0.0);
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);

  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, surfaceNormals.shading);

  // from tangent space to world space
  let newDirection = normalize(TBN * newDir);

  let brdf = evaluateDiffuseBrdf(vec3f(), vec3f(), material);
  var brdfSamplePdf = evaluatePdfDiffuseLobe(vec3f(), newDir, material, surfaceNormals);

  let lightSamplePdf = getLightPDF(Ray(ray.origin, newDirection));
  let misWeight = getMisWeight(brdfSamplePdf, lightSamplePdf);

  return BrdfDirectionSample(
    brdf,
    brdfSamplePdf,
    misWeight,
    newDirection,
  );
}

fn sampleDiffuseLight(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> LightDirectionSample {
  let ray = geometryContext.ray;
  let interpolatedAttributes = geometryContext.interpolatedAttributes;
  let surfaceNormals = geometryContext.normals;

  let rands = vec4f(getRand2D(), getRand2D());
  let lightSample = getLightSample(ray.origin, rands);
  let pdf = lightSample.pdf;
  let backSideHit = lightSample.backSideHit;

  let newDirection = lightSample.direction;

  // if the sampled ray sits below the hemisphere, brdfSamplePdf is zero,
  // since diffuse materials never sample a direction under the hemisphere.
  // However at this point, it doesn't even make sense to evaluate the 
  // rest of this function since we would be wasting a sample, thus we'll return
  // misWeight = 0 instead.
  if (
    dot(newDirection, surfaceNormals.shading) < 0.0 ||
    lightSample.pdf == 0.0
  ) {
    return LightDirectionSample(
      vec3f(0.0),
      1,
      0,
      vec3f(0.0),
      lightSample,
    );
  }

  let brdf = evaluateDiffuseBrdf(vec3f(), vec3f(), material);
  let simplifiedLocalSpaceDirection = vec3f(0.0, 0.0, dot(newDirection, surfaceNormals.shading));
  let brdfSamplePdf = evaluatePdfDiffuseLobe(vec3f(), simplifiedLocalSpaceDirection, material, surfaceNormals);
  let mis = getMisWeight(lightSample.pdf, brdfSamplePdf);

  return LightDirectionSample(
    brdf,
    pdf,
    mis,
    lightSample.direction,
    lightSample
  );
}
    `),S(Qr,"EONDiffuse",`
fn getDiffuseMaterial(interpolatedAttributes: InterpolatedAttributes, offset: u32) -> EvaluatedMaterial {
  var data = EvaluatedMaterial();
  
  // material type
  data.materialType = u32(materialsBuffer[offset]);

  // color
  data.baseColor.x = materialsBuffer[offset + 1];
  data.baseColor.y = materialsBuffer[offset + 2];
  data.baseColor.z = materialsBuffer[offset + 3];

  data.roughness = materialsBuffer[offset + 4];
  
  // bumpStrength
  data.bumpStrength = materialsBuffer[offset + 5];

  // uv repeat x,y
  data.uvRepeat.x = materialsBuffer[offset + 6];
  data.uvRepeat.y = materialsBuffer[offset + 7];

  // map-uv repeat x,y
  data.mapUvRepeat.x = materialsBuffer[offset + 8];
  data.mapUvRepeat.y = materialsBuffer[offset + 9];
  
  // mapLocation    requires bitcast<i32>(...);
  data.mapLocation.x = bitcast<i32>(materialsBuffer[offset + 10]);
  data.mapLocation.y = bitcast<i32>(materialsBuffer[offset + 11]);
  
  // bumpMapLocation    requires bitcast<i32>(...);
  data.bumpMapLocation.x = bitcast<i32>(materialsBuffer[offset + 12]);
  data.bumpMapLocation.y = bitcast<i32>(materialsBuffer[offset + 13]);

  data.roughnessMapLocation = vec2i(-1, -1);

  if (data.mapLocation.x > -1) {
    let texelColor = getTexelFromTextureArrays(
      data.mapLocation, interpolatedAttributes.uv, data.mapUvRepeat
    ).xyz;

    data.baseColor *= texelColor;
  }

  return data;
}

const constant1_FON: f32 = 0.5 - 2.0 / (3.0 * PI);
const constant2_FON: f32 = 2.0 / 3.0 - 28.0 / (15.0 * PI);

fn E_FON_exact(mu: f32, r: f32) -> f32 {
  let AF = 1.0 / (1.0 + constant1_FON * r); // FON A coeff.
  let BF = r * AF; // FON B coeff.
  let Si = sqrt(1.0 - (mu * mu));
  let G = Si * (acos(mu) - Si * mu) + 
    (2.0 / 3.0) * ((Si / mu) * (1.0 - (Si * Si * Si)) - Si);
  return AF + (BF/PI) * G;
}

fn E_FON_approx(mu: f32, r: f32) -> f32 {
  let mucomp = 1.0 - mu;
  let mucomp2 = mucomp * mucomp;
  let Gcoeffs = mat2x2f(0.0571085289, -0.332181442, 0.491881867, 0.0714429953);
  let GoverPi = dot(Gcoeffs * vec2f(mucomp, mucomp2), vec2f(1.0, mucomp2));
  return (1.0 + r * GoverPi) / (1.0 + constant1_FON * r);
}

// Evaluates EON BRDF value, given inputs:
//      rho = single-scattering albedo parameter
//        r = roughness in [0, 1]
// wi_local = direction of incident ray (directed away from vertex)
// wo_local = direction of outgoing ray (directed away from vertex)
//    exact = flag to select exact or fast approx. version
//
// Note that this implementation assumes throughout that the directions are
// specified in a local space where the z-direction aligns with the surface normal.
fn f_EON(rho: vec3f, r: f32, wi_local: vec3f, wo_local: vec3f, exact: bool) -> vec3f {
  let mu_i = wi_local.z; // input angle cos
  let mu_o = wo_local.z; // output angle cos
  let s = dot(wi_local, wo_local) - mu_i * mu_o; // QON s term
  
  // let sovertF = s > 0.0 ? s / max(mu_i, mu_o) : s; // FON s/t
  var sovertF = 0.0;
  if (s > 0.0) {
    sovertF = s / max(mu_i, mu_o);
  } else {
    sovertF = s;
  }
  
  let AF = 1.0 / (1.0 + constant1_FON * r); // FON A coeff.
  let f_ss = (rho / PI) * AF * (1.0 + r * sovertF); // single-scatter
  // float EFo = exact ? E_FON_exact(mu_o, r): // FON wo albedo (exact)
  // E_FON_approx(mu_o, r); // FON wo albedo (approx)
  var EFo = 0.0;
  if (exact) {
    EFo = E_FON_exact(mu_o, r);
  } else {
    EFo = E_FON_approx(mu_o, r);
  }
  
  // float EFi = exact ? E_FON_exact(mu_i, r): // FON wi albedo (exact)
    // E_FON_approx(mu_i, r); // FON wi albedo (approx)
  var EFi = 0.0;
  if (exact) {
    EFi = E_FON_exact(mu_i, r);
  } else {
    EFi = E_FON_approx(mu_i, r);
  }
  let avgEF = AF * (1.0 + constant2_FON * r); // avg. albedo
  let rho_ms = (rho * rho) * avgEF / (vec3f(1.0) - rho * (1.0 - avgEF));
  const eps = 1.0e-7;
  let f_ms = (rho_ms/PI) * max(eps, 1.0 - EFo) // multi-scatter lobe
    * max(eps, 1.0 - EFi)
    / max(eps, 1.0 - avgEF);
  return f_ss + f_ms;
}

fn orthonormal_basis_ltc(w: vec3f) -> mat3x3f {
  let lenSqr = dot(w.xy, w.xy);
  // let X = lenSqr > 0.0f ? vec3(w.x, w.y, 0.0f) * inversesqrt(lenSqr) : vec3(1, 0, 0);
  var X = vec3f(0.0);
  if (lenSqr > 0.0) {
    let inverseSquareRoot = 1.0 / sqrt(lenSqr);
    X = vec3f(w.x, w.y, 0.0) * inverseSquareRoot;
  } else {
    X = vec3f(1.0, 0.0, 0.0);
  }
  let Y = vec3f(-X.y, X.x, 0.0); // cross(Z, X)
  return mat3x3f(X, Y, vec3(0, 0, 1));
}

fn ltc_coeffs(
  mu: f32, r: f32,
  a: ptr<function, f32>, b: ptr<function, f32>, c: ptr<function, f32>, d: ptr<function, f32>
) {
  *a = 1.0 + r*(0.303392 + (-0.518982 + 0.111709*mu)*mu + (-0.276266 + 0.335918*mu)*r);
  *b = r*(-1.16407 + 1.15859*mu + (0.150815 - 0.150105*mu)*r)/(mu*mu*mu - 1.43545);
  *c = 1.0 + (0.20013 + (-0.506373 + 0.261777*mu)*mu)*r;
  *d = ((0.540852 + (-1.01625 + 0.475392*mu)*mu)*r)/(-1.0743 + mu*(0.0725628 + mu));
}

fn cltc_sample(wo_local: vec3f, r: f32, u1: f32, u2: f32) -> vec4f {
  var a: f32; var b: f32; var c: f32; var d: f32; 
  ltc_coeffs(wo_local.z, r, &a, &b, &c, &d); // coeffs of LTC M
  let R = sqrt(u1); 
  let phi = 2.0 * PI * u2; // CLTC sampling
  var x = R * cos(phi); 
  let y = R * sin(phi); // CLTC sampling
  let vz = 1.0 / sqrt(d*d + 1.0); // CLTC sampling factors
  let s = 0.5 * (1.0 + vz); // CLTC sampling factors
  x = -mix(sqrt(1.0 - y*y), x, s); // CLTC sampling
  let wh = vec3f(x, y, sqrt(max(1.0 - (x*x + y*y), 0.0))); // ωH sample via CLTC
  let pdf_wh = wh.z / (PI * s); // PDF of ωH sample
  var wi = vec3f(a*wh.x + b*wh.z, c*wh.y, d*wh.x + wh.z); // M ωH (unnormalized)
  let len = length(wi); // ∥M ωH∥ = 1/∥M−1 ωH∥
  let detM = c*(a - b*d); // |M|
  let pdf_wi = pdf_wh * len*len*len / detM; // ωi sample PDF
  let fromLTC = orthonormal_basis_ltc(wo_local); // ωi -> local space
  wi = normalize(fromLTC * wi); // ωi -> local space
  return vec4f(wi, pdf_wi);
}

fn cltc_pdf(wo_local: vec3f, wi_local: vec3f, r: f32) -> f32 {
  let toLTC = transpose(orthonormal_basis_ltc(wo_local)); // ωi -> LTC space
  let wi = toLTC * wi_local; // ωi -> LTC space
  var a: f32; var b: f32; var c: f32; var d: f32; 
  ltc_coeffs(wo_local.z, r, &a, &b, &c, &d); // coeffs of LTC M
  let detM = c*(a - b*d); // |M|
  let wh = vec3f(c*(wi.x - b*wi.z), (a - b*d)*wi.y, -c*(d*wi.x - a*wi.z)); // adj(M) ωi
  let lenSqr = dot(wh, wh);
  let vz = 1.0 / sqrt(d*d + 1.0); // CLTC sampling factors
  let s = 0.5 * (1.0 + vz); // CLTC sampling factors
  let pdf = detM*detM/(lenSqr*lenSqr) * max(wh.z, 0.0) / (PI * s); // wi sample PDF
  return pdf;
}

fn uniform_lobe_sample(u1: f32, u2: f32) -> vec3f {
  let sinTheta = sqrt(1.0 - u1*u1);
  let phi = 2.0 * PI * u2;
  return vec3f(sinTheta * cos(phi), sinTheta * sin(phi), u1);
}

fn sample_EON(wo_local: vec3f, r: f32, u1: f32, u2: f32) -> vec4f {
  let mu = wo_local.z;
  let P_u = pow(r, 0.1) * (0.162925 + mu*(-0.372058 + (0.538233 - 0.290822*mu)*mu));
  let P_c = 1.0 - P_u; // probability of CLTC sample
  var wi = vec4f(0.0); 
  var pdf_c = 0.0;
  if (u1 <= P_u) {
    let _u1 = u1 / P_u;
    wi = vec4f(uniform_lobe_sample(_u1, u2), 0.0); // sample wi from uniform lobe
    pdf_c = cltc_pdf(wo_local, wi.xyz, r); } // evaluate CLTC PDF at wi
  else {
    let _u1 = (u1 - P_u) / P_c;
    wi = cltc_sample(wo_local, r, _u1, u2); // sample wi from CLTC lobe
    pdf_c = wi.w; 
  }
 
  const pdf_u = 1.0 / (2.0 * PI);
  wi.w = P_u*pdf_u + P_c*pdf_c; // MIS PDF of wi
  
  return wi;
}

fn pdf_EON(wo_local: vec3f, wi_local: vec3f, r: f32) -> f32 {
  let mu = wo_local.z;
  let P_u = pow(r, 0.1) * (0.162925 + mu*(-0.372058 + (0.538233 - 0.290822*mu)*mu));
  let P_c = 1.0 - P_u;
  let pdf_c = cltc_pdf(wo_local, wi_local, r);
  const pdf_u = 1.0 / (2.0 * PI);
  return P_u*pdf_u + P_c*pdf_c;
}


fn evaluatePdfDiffuseLobe(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
  surfaceNormals: SurfaceNormals,
) -> f32 {
  // assuming wi is in local-space
  return pdf_EON(wo, wi, material.roughness);
}

fn evaluateDiffuseBrdf(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> vec3f {
  // we're assuming wo and wi are in local-space 
  let brdf = f_EON(material.baseColor, material.roughness, wi, wo, true);
  return brdf;
}

fn sampleDiffuseBrdf(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> BrdfDirectionSample {
  let ray = geometryContext.ray;
  let surfaceNormals = geometryContext.normals;

  let rands = vec4f(getRand2D(), getRand2D());

  var tangent = vec3f(0.0);
  var bitangent = vec3f(0.0);
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);
  
  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, surfaceNormals.shading);
  // to transform vectors from world space to tangent space, we multiply by
  // the inverse of the TBN
  let TBNinverse = transpose(TBN);
  let wo = TBNinverse * -ray.direction;
  
  // CLTC sampling
  let sample = sample_EON(wo, material.roughness, rands.x, rands.y);
  
  var wi = sample.xyz;
  let brdfSamplePdf = sample.w;

  let brdf = f_EON(material.baseColor, material.roughness, wi, wo, true);
  let newDirection = normalize(TBN * wi);

  let lightSamplePdf = getLightPDF(Ray(ray.origin, newDirection));
  let misWeight = getMisWeight(brdfSamplePdf, lightSamplePdf);

  return BrdfDirectionSample(
    brdf,
    brdfSamplePdf,
    misWeight,
    newDirection,
  );
}

fn sampleDiffuseLight(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> LightDirectionSample {
  let ray = geometryContext.ray;
  let surfaceNormals = geometryContext.normals;

  let rands = vec4f(getRand2D(), getRand2D());

  let lightSample = getLightSample(ray.origin, rands);
  let pdf = lightSample.pdf;
  let backSideHit = lightSample.backSideHit;

  var wo = -ray.direction;
  var wi = lightSample.direction;

  // from world-space to tangent-space
  transformToLocalSpace(&wo, &wi, geometryContext);

  let brdf = f_EON(material.baseColor, material.roughness, wi, wo, true);

  // cosine-weighted pdf
  // let cosTheta = dot(lightSample.direction, N);
  // var brdfSamplePdf = cosTheta / PI;
  
  // CLTC pdf
  var brdfSamplePdf = pdf_EON(wo, wi, material.roughness);

  // if the sampled ray sits below the hemisphere, brdfSamplePdf is zero,
  // since diffuse materials never sample a direction under the hemisphere.
  // However at this point, it doesn't even make sense to evaluate the 
  // rest of this function since we would be wasting a sample, thus we'll return
  // misWeight = 0 instead.
  if (
    brdfSamplePdf == 0.0 ||
    lightSample.pdf == 0.0
  ) {
    return LightDirectionSample(
      vec3f(0.0),
      1,
      0,
      vec3f(0.0),
      lightSample,
    );
  }

  let mis = getMisWeight(lightSample.pdf, brdfSamplePdf);

  return LightDirectionSample(
    brdf,
    pdf,
    mis,
    lightSample.direction,
    lightSample
  );
}
    `);let rt=Qr;const es=class es extends Dr{constructor({color:t,roughness:i,anisotropy:r,map:s,roughnessMap:n,bumpMap:l,bumpStrength:o=1,uvRepeat:u=new oe(1,1),mapUvRepeat:c=new oe(1,1),flipTextureY:h=!1}){super({flipTextureY:h});S(this,"color");S(this,"roughness");S(this,"anisotropy");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");let f=es.MIN_INPUT_ROUGHNESS;this.type=_e.TORRANCE_SPARROW,this.color=t,this.roughness=i*(1-f)+f,this.anisotropy=as(r,.01,.99),this.bumpStrength=o,this.uvRepeat=u,this.mapUvRepeat=c,this.offsetCount=17,this.texturesLocation.map=new oe(-1,-1),this.texturesLocation.roughnessMap=new oe(-1,-1),this.texturesLocation.bumpMap=new oe(-1,-1),s&&(this.textures.map=s),n&&(this.textures.roughnessMap=n),l&&(this.textures.bumpMap=l)}getFloatsArray(){return[this.type,this.color.r,this.color.g,this.color.b,this.roughness,this.anisotropy,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,ct(this.texturesLocation.map.x),ct(this.texturesLocation.map.y),ct(this.texturesLocation.roughnessMap.x),ct(this.texturesLocation.roughnessMap.y),ct(this.texturesLocation.bumpMap.x),ct(this.texturesLocation.bumpMap.y)]}static shaderBRDF(){return`
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

    // https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf
    fn multiScatterCompensationTorranceSparrow(F0: vec3f, wo: vec3f, roughness: f32) -> vec3f {
      let ESSwo = getLUTvalue(
        vec3f(roughness, saturate(wo.z /* dot(wo, norm) */), 0),
        LUT_MultiScatterTorranceSparrow, 
      ).x;
  
      let multiScatteringCoefficient = (1.0 + F0 * (1.0 - ESSwo) / ESSwo);
      return multiScatteringCoefficient;
    }
  `}static shaderTorranceSparrowLobe(){return`
fn getTSMaterial(
  interpolatedAttributes: InterpolatedAttributes, offset: u32
) -> EvaluatedMaterial {
  var data = EvaluatedMaterial();
  
  // material type
  data.materialType = u32(materialsBuffer[offset + 0]);

  // color 
  data.baseColor.x = materialsBuffer[offset + 1]; 
  data.baseColor.y = materialsBuffer[offset + 2]; 
  data.baseColor.z = materialsBuffer[offset + 3]; 

  // bump strength
  data.bumpStrength = materialsBuffer[offset + 6]; 

  // uvRepeat, used for bumpMapping
  data.uvRepeat.x = materialsBuffer[offset + 7];
  data.uvRepeat.y = materialsBuffer[offset + 8];

  // bumpMapLocation, used for bumpMapping
  data.bumpMapLocation.x = bitcast<i32>(materialsBuffer[offset + 15]);
  data.bumpMapLocation.y = bitcast<i32>(materialsBuffer[offset + 16]);

  // roughness, anisotropy
  data.roughness = materialsBuffer[offset + 4]; 
  data.anisotropy = materialsBuffer[offset + 5]; 

  data.uvRepeat = vec2f(
    materialsBuffer[offset + 7],
    materialsBuffer[offset + 8],
  );
  data.mapUvRepeat = vec2f(
    materialsBuffer[offset + 9],
    materialsBuffer[offset + 10],
  );

  data.mapLocation = vec2i(
    bitcast<i32>(materialsBuffer[offset + 11]),
    bitcast<i32>(materialsBuffer[offset + 12]),
  );
  data.roughnessMapLocation = vec2i(
    bitcast<i32>(materialsBuffer[offset + 13]),
    bitcast<i32>(materialsBuffer[offset + 14]),
  );
  data.bumpMapLocation = vec2i(
    bitcast<i32>(materialsBuffer[offset + 15]),
    bitcast<i32>(materialsBuffer[offset + 16]),
  );

  if (data.mapLocation.x > -1) {
    let texelColor = getTexelFromTextureArrays(
      data.mapLocation, interpolatedAttributes.uv, data.mapUvRepeat
    ).xyz;

    // color
    data.baseColor *= texelColor;
  }
  if (data.roughnessMapLocation.x > -1) {
    let roughnessTexel = getTexelFromTextureArrays(
      data.roughnessMapLocation, interpolatedAttributes.uv, data.uvRepeat
    ).xy;

    // roughness
    data.roughness *= roughnessTexel.x;
    data.roughness = max(data.roughness, ${es.MIN_INPUT_ROUGHNESS});
  }

  let axay = anisotropyRemap(data.roughness, data.anisotropy);
  data.ax = axay.x;
  data.ay = axay.y;

  return data;
}

fn evaluatePdfTSLobe(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> f32 {
  let ax = material.ax;
  let ay = material.ay;

  // we're assuming wo and wi are in local-space 
  var brdfSamplePdf = TS_PDF(wo, wi, ax, ay);

  return brdfSamplePdf;
}

fn evaluateTSBrdf(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> vec3f {
  let color = material.baseColor;
  let ax = material.ax;
  let ay = material.ay;
  let roughness = material.roughness;

  // we're assuming wo and wi are in local-space 
  var brdf = TS_f(wo, wi, ax, ay, color);
  brdf *= multiScatterCompensationTorranceSparrow(color, wo, roughness);
  
  return brdf;
}

fn sampleTSBrdf(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> BrdfDirectionSample {
  let ray = geometryContext.ray;
  let surfaceNormals = geometryContext.normals;

  let rands = vec4f(getRand2D(), getRand2D());

  var tangent = vec3f(0.0);
  var bitangent = vec3f(0.0);
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);
  
  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, surfaceNormals.shading);
  // to transform vectors from world space to tangent space, we multiply by
  // the inverse of the TBN
  let TBNinverse = transpose(TBN);
  let wo = TBNinverse * -ray.direction;
  var wi = vec3f(0.0);

  let color = material.baseColor;
  let ax = material.ax;
  let ay = material.ay;
  let roughness = material.roughness;

  var brdfSamplePdf = 0.0;
  var brdf = vec3f(0.0);
  TS_Sample_f(wo, rands.xy, ax, ay, color, &wi, &brdfSamplePdf, &brdf);
  brdf *= multiScatterCompensationTorranceSparrow(color, wo, roughness);
  
  let lightSamplePdf = getLightPDF(Ray(ray.origin, normalize(TBN * wi)));
  let misWeight = getMisWeight(brdfSamplePdf, lightSamplePdf);
  let newDirection = normalize(TBN * wi);

  return BrdfDirectionSample(
    brdf,
    brdfSamplePdf,
    misWeight,
    newDirection,
  );
}

fn sampleTSLight(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> LightDirectionSample {
  let ray = geometryContext.ray;
  let rands = vec4f(getRand2D(), getRand2D());

  let lightSample = getLightSample(ray.origin, rands);
  let pdf = lightSample.pdf;
  let backSideHit = lightSample.backSideHit;

  var wo = -ray.direction;
  var wi = lightSample.direction;

  // from world-space to tangent-space
  transformToLocalSpace(&wo, &wi, geometryContext);

  let color = material.baseColor;
  let ax = material.ax;
  let ay = material.ay;
  let roughness = material.roughness;

  var brdfSamplePdf = TS_PDF(wo, wi, ax, ay);
  var brdf = TS_f(wo, wi, ax, ay, color);
  brdf *= multiScatterCompensationTorranceSparrow(color, wo, roughness);

  if (
    brdfSamplePdf == 0.0 || 
    lightSample.pdf == 0.0
  ) {
    return LightDirectionSample(
      vec3f(0.0),
      1,
      0,
      vec3f(0.0),
      lightSample,
    );
  }

  let mis = getMisWeight(lightSample.pdf, brdfSamplePdf);

  return LightDirectionSample(
    brdf,
    pdf,
    mis,
    lightSample.direction,
    lightSample
  );
}
    `}};S(es,"MIN_INPUT_ROUGHNESS",.0707);let wt=es;class us{constructor(e){S(this,"canvasSize",new oe(0,0));S(this,"tile",{x:0,y:0,w:0,h:0});S(this,"tileIncrementCount",0);S(this,"forceMaxTileSize",!1);S(this,"requestedRestart",!0);S(this,"performanceHistoryCount",15);S(this,"performanceHistory",[]);S(this,"e",new Er);this.performanceRequirements=e,new ln().e.addEventListener("config-update",i=>{this.forceMaxTileSize=i.forceMaxTileSize}),e&&(this.performanceHistoryCount=e.performanceHistoryCount)}saveComputationPerformance(e){this.performanceHistory.push(e),this.performanceHistory.length>this.performanceHistoryCount&&this.performanceHistory.splice(0,1)}getAveragePerformance(){return this.performanceHistory.length>0?this.performanceHistory.reduce((e,t)=>e+t,0)/this.performanceHistory.length:0}setCanvasSize(e){this.canvasSize=e,this.resetTile()}isTilePerformanceMeasureable(){return this.tile.x+this.tile.w-8<=this.canvasSize.x&&this.tile.y+this.tile.h-8<=this.canvasSize.y}canTileSizeBeIncreased(){return this.tile.w<this.canvasSize.x||this.tile.h<this.canvasSize.y}canTileSizeBeDecreased(){return this.tile.w>16||this.tile.h>16}decreaseTileSize(){this.forceMaxTileSize||(this.tileIncrementCount%2===1?(this.tile.w/=2,this.tile.w=Math.ceil(this.tile.w/8)*8):(this.tile.h/=2,this.tile.h=Math.ceil(this.tile.h/8)*8),this.tile.w<16&&(this.tile.w=16),this.tile.h<16&&(this.tile.h=16),this.tileIncrementCount-=1,$e.setTileSize(`${this.tile.w} x ${this.tile.h}`))}increaseTileSize(){this.tileIncrementCount%2===0?this.tile.w*=2:this.tile.h*=2,this.tile.w>this.canvasSize.x&&(this.tile.w=Math.ceil(this.canvasSize.x/8)*8),this.tile.h>this.canvasSize.y&&(this.tile.h=Math.ceil(this.canvasSize.y/8)*8),this.tileIncrementCount+=1,$e.setTileSize(`${this.tile.w} x ${this.tile.h}`)}resetTile(e){this.tileIncrementCount=0;let t=16,i=16;e&&(t=e.x,i=e.y),this.forceMaxTileSize&&(t=this.canvasSize.x,i=this.canvasSize.y),$e.setTileSize(`${t} x ${i}`),this.tile={x:0,y:0,w:t,h:i},this.requestedRestart=!0,this.performanceHistory=[]}performanceBasedUpdates(){let{performanceRequirements:e}=this;if(!e)return;let{avgPerfToDecrease:t,avgPerfToIncrease:i,changeTileSizeOnNewLineOnly:r}=e,s=this.getAveragePerformance();s!==0&&(r&&!this.isNewLine()||(s<i&&this.canTileSizeBeIncreased()&&this.canTileSizeBeIncreased()&&(this.increaseTileSize(),this.e.fireEvent("on-tile-size-increased",{})),s>t&&this.canTileSizeBeDecreased()&&this.canTileSizeBeDecreased()&&(this.decreaseTileSize(),this.e.fireEvent("on-tile-size-decreased",{}))))}getNextTile(){return this.requestedRestart?(this.requestedRestart=!1,this.tile.x=0,this.tile.y=0,this.e.fireEvent("on-tile-start",{}),this.performanceBasedUpdates(),this.isLastTileBeforeRestart()&&(this.requestedRestart=!0),this.tile):(this.tile.x+=this.tile.w,this.tile.x>=this.canvasSize.x&&(this.tile.x=0,this.tile.y+=this.tile.h),this.performanceBasedUpdates(),this.isLastTileBeforeRestart()&&(this.requestedRestart=!0),this.tile)}isNewLine(){return this.tile.x==0}isTileStarting(){if(this.tile.x==0&&this.tile.y==0)return!0}isLastTileBeforeRestart(){let e=this.tile.w,t=this.tile.h,i=this.tile.x,r=this.tile.y;return i+e>=this.canvasSize.x&&r+t>=this.canvasSize.y}getCurrentTile(){return this.tile}getWorkGroupCount(){return new oe(this.tile.w/8,this.tile.h/8)}static shaderPart(){return`
      struct Tile {
        x: u32,
        y: u32,
        w: u32,
        h: u32,
      }
    `}}const su=`

const PI = 3.14159265359;

fn squaredLength(v: vec3f) -> f32 {
  return dot(v, v);
}

fn getLuminance(emission: vec3f) -> f32 {
  return 0.2126 * emission.x + 0.7152 * emission.y + 0.0722 * emission.z;
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
  geometryContext: GeometryContext,
  tangent: ptr<function, vec3f>, bitangent: ptr<function, vec3f>
) {
  let vertexTangent = geometryContext.interpolatedAttributes.tangent;
  let geometricNormal = geometryContext.normals.geometric;
  let shadingNormal = geometryContext.normals.shading;

  *tangent = vertexTangent;
  *bitangent = normalize(cross(*tangent, geometricNormal));

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


fn transformToLocalSpace(
  wo: ptr<function, vec3f>, 
  wi: ptr<function, vec3f>, 
  geometryContext: GeometryContext
) {
  var tangent = vec3f(0.0);
  var bitangent = vec3f(0.0);
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);
  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, geometryContext.normals.shading);
  // to transform vectors from world space to tangent space, we multiply by
  // the inverse of the TBN
  let TBNinverse = transpose(TBN);
  *wo = TBNinverse * *wo;
  *wi = TBNinverse * *wi;
}
`,nu=`
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
`,au=`

// MurmurHash3 32-bit mix function
fn murmurHash3(key: u32, seed: u32) -> u32 {
  var k = key;
  k *= 0xcc9e2d51u;
  k = (k << 15u) | (k >> (32u - 15u));
  k *= 0x1b873593u;
  var h = seed;
  h ^= k;
  h = (h << 13u) | (h >> (32u - 13u));
  h = h * 5u + 0xe6546b64u;
  h ^= h >> 16u;
  return h;
}

// Combine pixel coordinates and a CPU seed into a single hash
fn hashPixelAndSeed(tid: vec2<u32>, cpuSeed: u32) -> u32 {
  // Pack the coordinates into one 32-bit key.
  // Assumes tid.x and tid.y are less than 65536.
  let key = (tid.x << 16u) | (tid.y & 0xffffu);
  return murmurHash3(key, cpuSeed);
}

// Combine the base seed with the counter using a robust hash.
fn hashCounter(baseSeed: u32, count: u32) -> u32 {
  // Here we use a mixing constant (the golden ratio approximation) to help decorrelate the counter.
  let combined = baseSeed ^ (count * 0x9e3779b9u);
  return murmurHash3(combined, 0);
}

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
  // let seed=seed_per_thread(seedIdx);
  let seed=seedIdx;
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
`,ts=class ts extends Dr{constructor({absorption:t,roughness:i,anisotropy:r,eta:s,absorptionMap:n,roughnessMap:l,bumpMap:o,bumpStrength:u=1,uvRepeat:c=new oe(1,1),mapUvRepeat:h=new oe(1,1),flipTextureY:f=!1}){super({flipTextureY:f});S(this,"absorption");S(this,"roughness");S(this,"anisotropy");S(this,"eta");S(this,"bumpStrength");S(this,"uvRepeat");S(this,"mapUvRepeat");let d=ts.MIN_INPUT_ROUGHNESS;this.type=_e.DIELECTRIC,this.absorption=t,this.roughness=i*(1-d)+d,this.anisotropy=as(r,.01,.99),this.eta=s,(s<1||s>3)&&(this.eta=as(s,1,3),console.error("eta value can't be smaller than 1 or greater than 3, values for this material have been clamped")),this.bumpStrength=u,this.uvRepeat=c,this.mapUvRepeat=h,this.offsetCount=18,this.texturesLocation.absorptionMap=new oe(-1,-1),this.texturesLocation.roughnessMap=new oe(-1,-1),this.texturesLocation.bumpMap=new oe(-1,-1),n&&(this.textures.absorptionMap=n),l&&(this.textures.roughnessMap=l),o&&(this.textures.bumpMap=o)}getFloatsArray(){return[this.type,this.absorption.r,this.absorption.g,this.absorption.b,this.roughness,this.anisotropy,this.eta,this.bumpStrength,this.uvRepeat.x,this.uvRepeat.y,this.mapUvRepeat.x,this.mapUvRepeat.y,ct(this.texturesLocation.absorptionMap.x),ct(this.texturesLocation.absorptionMap.y),ct(this.texturesLocation.roughnessMap.x),ct(this.texturesLocation.roughnessMap.y),ct(this.texturesLocation.bumpMap.x),ct(this.texturesLocation.bumpMap.y)]}static shaderBRDF(){return`
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

      fn Dielectric_PDF(wo: vec3f, wi: vec3f, eta: f32, ax: f32, ay: f32) -> f32 {
        if (eta == 1 || (ax < 0.0005 && ay < 0.0005)) {
          return 0;
        }

        // Evaluate sampling PDF of rough dielectric BSDF
        let cosTheta_o = CosTheta(wo);  
        let cosTheta_i = CosTheta(wi);
        let reflect: bool = cosTheta_i * cosTheta_o > 0;
        var etap = 1.0;
        if (!reflect) {
          if (cosTheta_o > 0) {
            etap = eta;
          } else {
            etap = (1.0 / eta);
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

        let R = FrDielectric(dot(wo, wm), eta);
        let T = 1.0 - R;
        let pr = R;
        let pt = T;

        var pdf = 1.0;
        if (reflect) {
          pdf = TR_DistributionPDF(wo, wm, ax, ay) / (4.0 * AbsDot(wo, wm)) * pr / (pr + pt);
        } else {
          let denom = Sqr(dot(wi, wm) + dot(wo, wm) / etap);
          let dwm_dwi = AbsDot(wi, wm) / denom;
          pdf = TR_DistributionPDF(wo, wm, ax, ay) * dwm_dwi * pt / (pr + pt);
        }

        return pdf;
      }

      // this function samples the new wi direction, and returns the brdf and pdf
      fn Dielectric_Sample_f(
        wo:  vec3f,
        eta: f32,
        ax: f32,
        ay: f32,
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

        if (eta == 1.0 || (ax < 0.0005 && ay < 0.0005)) {
          // sample perfect specular BRDF

          let R = FrDielectric(CosTheta(wo), eta);
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
            let valid: bool = Refract(wo, vec3f(0, 0, 1), eta, &etap, wi);

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

          let wm = TS_Sample_wm(wo, u, ax, ay);
          let R = FrDielectric(dot(wo, wm), eta);
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
            *pdf = TR_DistributionPDF(wo, wm, ax, ay) / 
                      (4 * AbsDot(wo, wm)) * pr / (pr + pt);

            *f = vec3f(
              TR_D(wm, ax, ay) * 
              TR_G(wo, *wi, ax, ay) * R /
              (4 * CosTheta(*wi) * CosTheta(wo))
            );
          } else {
            var etap = 0.0;
            let tir = !Refract(wo, wm, eta, &etap, wi);
            if (SameHemisphere(wo, *wi) || (*wi).z == 0 || tir) {
              *f = vec3f(0.0);
              *pdf = 1.0;
              return;
            }

            let denom = Sqr(dot(*wi, wm) + dot(wo, wm) / etap);
            let dwm_dwi = AbsDot(*wi, wm) / denom;
            *pdf = TR_DistributionPDF(wo, wm, ax, ay) * dwm_dwi * pt / (pr + pt);

            *f = vec3f(T * TR_D(wm, ax, ay) *
              TR_G(wo, *wi, ax, ay) *
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

      fn Dielectric_f(wo: vec3f, wi: vec3f, eta: f32, ax: f32, ay: f32) -> vec3f {
        if (eta == 1.0 || (ax < 0.0005 && ay < 0.0005)) {
          // TODO: use correct dirac-delta values for perfect specular BRDF
          return vec3f(1.0);
        } else {

          let cosTheta_o = CosTheta(wo);
          let cosTheta_i = CosTheta(wi);
          let reflect: bool = cosTheta_i * cosTheta_o > 0;
          var etap = 1.0;
          if (!reflect) {
            if (cosTheta_o > 0) {
              etap = eta;
            } else {
              etap = (1.0 / eta);
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

          let F = FrDielectric(dot(wo, wm), eta);
          if (reflect) {
            let fr = vec3f(
              TR_D(wm, ax, ay) * 
              TR_G(wo, wi, ax, ay) * F /
              abs(4.0 * cosTheta_i * cosTheta_o)
            );

            if (isFloatNaN(fr.x) || isFloatNaN(fr.y) || isFloatNaN(fr.z)) {
              return vec3f(0);
            }

            return fr;
          } else {
            let denom = Sqr(dot(wi, wm) + dot(wo, wm) / etap) * cosTheta_i * cosTheta_o;
            var ft = vec3f(
              TR_D(wm, ax, ay) * (1.0 - F) * 
              TR_G(wo, wi, ax, ay) *
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

      fn dielectricMultiScatteringFactor(wo: vec3f, roughness: f32, eta: f32) -> f32 {
        var msComp = 1.0;
        let woLutIndex = min(abs(wo.z), 0.9999);
        let roughLutIndex = min(roughness, 0.9999);
        let etaLutIndex = min(((eta - 1.0) / 2.0), 0.9999);
        if (wo.z > 0.0) {
          let uvt = vec3f(roughLutIndex, woLutIndex, etaLutIndex);
          msComp = getLUTvalue(uvt, LUT_MultiScatterDielectricEo).x;
        } else {
          let uvt = vec3f(roughLutIndex, woLutIndex, etaLutIndex);
          msComp = getLUTvalue(uvt, LUT_MultiScatterDielectricEoInverse).x;
        }

        return msComp;
      }
    `}static shaderDielectricLobe(){return`
fn getDielectricMaterial(
  interpolatedAttributes: InterpolatedAttributes, offset: u32
) -> EvaluatedMaterial {
  var data = EvaluatedMaterial();
  
  // material type
  data.materialType = u32(materialsBuffer[offset + 0]);

  data.baseColor = vec3f(1.0);

  // absorption 
  data.absorptionCoefficient.x = materialsBuffer[offset + 1]; 
  data.absorptionCoefficient.y = materialsBuffer[offset + 2]; 
  data.absorptionCoefficient.z = materialsBuffer[offset + 3]; 

  data.emissiveIntensity = 0.0;

  // roughness, anisotropy
  data.roughness = materialsBuffer[offset + 4]; 
  data.anisotropy = materialsBuffer[offset + 5]; 

  // eta
  data.eta = materialsBuffer[offset + 6]; 

  // bump strength
  data.bumpStrength = materialsBuffer[offset + 7]; 

  data.uvRepeat = vec2f(
    materialsBuffer[offset + 8],
    materialsBuffer[offset + 9],
  );
  data.mapUvRepeat = vec2f(
    materialsBuffer[offset + 10],
    materialsBuffer[offset + 11],
  );

  data.mapLocation = vec2i(-1, -1);
  data.roughnessMapLocation = vec2i(
    bitcast<i32>(materialsBuffer[offset + 14]),
    bitcast<i32>(materialsBuffer[offset + 15]),
  );
  data.bumpMapLocation = vec2i(
    bitcast<i32>(materialsBuffer[offset + 16]),
    bitcast<i32>(materialsBuffer[offset + 17]),
  );

  if (data.roughnessMapLocation.x > -1) {
    let roughnessTexel = getTexelFromTextureArrays(
      data.roughnessMapLocation, interpolatedAttributes.uv, data.uvRepeat
    ).xy;

    // roughness
    data.roughness *= roughnessTexel.x;
    data.roughness = max(data.roughness, ${ts.MIN_INPUT_ROUGHNESS});
  }

  let axay = anisotropyRemap(data.roughness, data.anisotropy);
  data.ax = axay.x;
  data.ay = axay.y;

  return data;
}

fn evaluatePdfDielectricLobe(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> f32 {
  let ax = material.ax;
  let ay = material.ay;
  let eta = material.eta;

  // we're assuming wo and wi are in local-space 
  var brdfSamplePdf = Dielectric_PDF(wo, wi, eta, ax, ay);
  return brdfSamplePdf;
}

fn evaluateDielectricBrdf(
  wo: vec3f,
  wi: vec3f,
  material: EvaluatedMaterial, 
) -> vec3f {
  let ax = material.ax;
  let ay = material.ay;
  let eta = material.eta;
  let roughness = material.roughness;

  // we're assuming wo and wi are in local-space 
  var brdf = Dielectric_f(wo, wi, eta, ax, ay);
  brdf /= dielectricMultiScatteringFactor(wo, roughness, eta);
  
  return brdf;
}

fn sampleDielectricBrdf(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> BrdfDirectionSample {
  let ray = geometryContext.ray;
  let surfaceNormals = geometryContext.normals;

  let rands = vec4f(getRand2D(), getRand2D());

  var tangent = vec3f(0.0);
  var bitangent = vec3f(0.0);
  getTangentFromTriangle(geometryContext, &tangent, &bitangent);
  
  // https://learnopengl.com/Advanced-Lighting/Normal-Mapping
  let TBN = mat3x3f(tangent, bitangent, surfaceNormals.shading);
  // to transform vectors from world space to tangent space, we multiply by
  // the inverse of the TBN
  let TBNinverse = transpose(TBN);
  let wo = TBNinverse * -ray.direction;
  var wi = vec3f(0.0);

  let ax = material.ax;
  let ay = material.ay;
  let eta = material.eta;
  let roughness = material.roughness;

  var brdfSamplePdf = 0.0;
  var brdf = vec3f(0.0);
  Dielectric_Sample_f(wo, eta, ax, ay, rands, &wi, &brdfSamplePdf, &brdf);
  let msCompensation = dielectricMultiScatteringFactor(wo, roughness, eta);
  brdf /= msCompensation;
  
  let lightSamplePdf = getLightPDF(Ray(ray.origin, normalize(TBN * wi)));
  let misWeight = getMisWeight(brdfSamplePdf, lightSamplePdf);
  let newDirection = normalize(TBN * wi);

  return BrdfDirectionSample(
    brdf,
    brdfSamplePdf,
    misWeight,
    newDirection,
  );
}

fn sampleDielectricLight(
  material: EvaluatedMaterial, 
  geometryContext: GeometryContext
) -> LightDirectionSample {
  let ray = geometryContext.ray;
  let rands = vec4f(getRand2D(), getRand2D());

  let lightSample = getLightSample(ray.origin, rands);
  let pdf = lightSample.pdf;

  var wo = -ray.direction;
  var wi = lightSample.direction;

  // from world-space to tangent-space
  transformToLocalSpace(&wo, &wi, geometryContext);

  let ax = material.ax;
  let ay = material.ay;
  let eta = material.eta;
  let roughness = material.roughness;

  var brdfSamplePdf = Dielectric_PDF(wo, wi, eta, ax, ay);

  var brdf = Dielectric_f(wo, wi, eta, ax, ay);
  brdf /= dielectricMultiScatteringFactor(wo, roughness, eta);

  if (
    brdfSamplePdf == 0.0 || 
    lightSample.pdf == 0.0
  ) {
    return LightDirectionSample(
      vec3f(0.0),
      1,
      0,
      vec3f(0.0),
      lightSample,
    );
  }

  let mis = getMisWeight(lightSample.pdf, brdfSamplePdf);

  return LightDirectionSample(
    brdf,
    pdf,
    mis,
    lightSample.direction,
    lightSample
  );
}
    `}};S(ts,"MIN_INPUT_ROUGHNESS",.0707);let Kt=ts;class pa{constructor(e,t){S(this,"normal");S(this,"distance");this.normal=e,this.distance=t}intersectRay(e,t){let i=this.normal.dot(t);if(Math.abs(i)<=1e-4)return{hit:!1,t:-1,hitPoint:new I(0,0,0)};let r=-(this.normal.dot(e)+this.distance)/this.normal.dot(t);return r<=1e-4?{hit:!1,t:-1,hitPoint:new I(0,0,0)}:{hit:!0,t:r,hitPoint:e.clone().add(e.clone().multiplyScalar(r))}}static shaderMethods(){return`
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
    `}}class cs{constructor(){S(this,"e");S(this,"position");S(this,"rotationMatrix");S(this,"viewMatrix");S(this,"projectionMatrix");S(this,"canvasSize");S(this,"cameraUniformBuffer");S(this,"cameraPositionUniformBuffer");S(this,"exposureUniformBuffer");S(this,"cameraMatrixUniformBuffer");S(this,"projectionMatrixUniformBuffer");S(this,"device");S(this,"requestedBuffersUpdate",!1);S(this,"canvasContainerEl");this.e=new Er,this.position=new I(0,0,-20),this.rotationMatrix=new Se().identity(),this.viewMatrix=new Se().identity(),this.projectionMatrix=new Se().identity(),this.device=he.device,this.cameraUniformBuffer=this.device.createBuffer({label:"camera uniform",size:96,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.exposureUniformBuffer=this.device.createBuffer({label:"exposure uniform",size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraMatrixUniformBuffer=this.device.createBuffer({label:"camera matrix uniform",size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.projectionMatrixUniformBuffer=this.device.createBuffer({label:"projection matrix uniform",size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.cameraPositionUniformBuffer=this.device.createBuffer({label:"camera position uniform",size:3*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.fov=Math.PI*.25,this.aperture=.1,this.focusDistance=10,this.exposure=1,this.canvasSize=Yt(-1,-1),this.tiltShift=Yt(0,0),Fe.subscribe(e=>{this.requestedBuffersUpdate=!0,this.e.fireEvent("change")}),this.e.addEventListener("change",()=>{this.requestedBuffersUpdate=!0})}setCanvasContainer(e){this.canvasContainerEl=e}onCanvasResize(e){this.canvasSize=e,this.requestedBuffersUpdate=!0}get rotationSpeed(){return tt(Pi).rotationSpeed}set rotationSpeed(e){Pi.update(t=>(t.rotationSpeed=e,t))}get movementSpeed(){return tt(Pi).movementSpeed}set movementSpeed(e){Pi.update(t=>(t.movementSpeed=e,t))}get exposure(){return tt(Fe).exposure}set exposure(e){Fe.update(t=>(t.exposure=e,t))}get fov(){return tt(Fe).fov}set fov(e){Fe.update(t=>(t.fov=e,t))}get aperture(){return tt(Fe).aperture}set aperture(e){Fe.update(t=>(t.aperture=e,t))}get focusDistance(){return tt(Fe).focusDistance}set focusDistance(e){Fe.update(t=>(t.focusDistance=e,t))}get tiltShift(){return tt(Fe).tiltShift}set tiltShift(e){Fe.update(t=>(t.tiltShift=e,t))}get catsEyeBokehEnabled(){return tt(Fe).catsEyeBokehEnabled}set catsEyeBokehEnabled(e){Fe.update(t=>(t.catsEyeBokehEnabled=e,t))}get catsEyeBokehMult(){return tt(Fe).catsEyeBokehMult}set catsEyeBokehMult(e){Fe.update(t=>(t.catsEyeBokehMult=e,t))}get catsEyeBokehPow(){return tt(Fe).catsEyeBokehPow}set catsEyeBokehPow(e){Fe.update(t=>(t.catsEyeBokehPow=e,t))}dispose(){this.e=new Er}renderLoopUpdate(){this.requestedBuffersUpdate&&(this.updateCameraBuffer(),this.updateCameraMatricesBuffers(),this.updateExposureUniformBuffer(),this.requestedBuffersUpdate=!1)}updateExposureUniformBuffer(){this.device.queue.writeBuffer(this.exposureUniformBuffer,0,new Float32Array([this.exposure]))}updateCameraMatricesBuffers(){this.viewMatrix.identity(),this.viewMatrix.multiplyMatrices(this.viewMatrix,this.rotationMatrix.clone().invert()),this.viewMatrix.multiplyMatrices(this.viewMatrix,new Se().makeTranslation(this.position).invert()),this.device.queue.writeBuffer(this.cameraMatrixUniformBuffer,0,new Float32Array(this.viewMatrix.elements));let e=this.canvasSize.x/this.canvasSize.y,t=.1,i=1e4,r=Math.tan(this.fov*.5)*t,s=-r,n=r*e,l=-r*e,o=t,u=i,c=r,h=n,f=s,d=l;this.device.queue.writeBuffer(this.projectionMatrixUniformBuffer,0,new Float32Array([2*o/(h-d),0,0,0,0,2*o/(c-f),0,0,(h+d)/(h-d),(c+f)/(c-f),-(u+o)/(u-o),-1,0,0,-(2*u*o)/(u-o),0])),this.device.queue.writeBuffer(this.cameraPositionUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z]))}updateCameraBuffer(){this.device.queue.writeBuffer(this.cameraUniformBuffer,0,new Float32Array([this.position.x,this.position.y,this.position.z,this.fov,this.rotationMatrix.elements[0],this.rotationMatrix.elements[1],this.rotationMatrix.elements[2],0,this.rotationMatrix.elements[4],this.rotationMatrix.elements[5],this.rotationMatrix.elements[6],0,this.rotationMatrix.elements[8],this.rotationMatrix.elements[9],this.rotationMatrix.elements[10],0,this.aperture,this.focusDistance,this.tiltShift.x,this.tiltShift.y,this.catsEyeBokehEnabled?1:0,this.catsEyeBokehMult,this.catsEyeBokehPow,0]))}getFocusDistanceFromIntersectionPoint(e){let t=e.clone().sub(this.position).applyMatrix4(this.rotationMatrix.clone().invert()),i=t.clone().normalize(),s=new pa(new I(this.tiltShift.x,this.tiltShift.y,-1),1).intersectRay(new I(0,0,0),i),n=t.length(),l=s.t;return n/l}screenPointToRay(e,t){let i=new oe(e.x/t.x*2-1,e.y/t.y*2-1),r=t.x/t.y,s=Math.tan(this.fov*.5);var n=new I(s*i.x*r,s*i.y,1).normalize();return n=n.applyMatrix4(this.rotationMatrix),{ro:this.position.clone(),rd:n}}static shaderMethods(){return`
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
    `}}const ou=`
  fn getMisWeight(pdf0: f32, pdf1: f32) -> f32 {
    var misWeight = pdf0 / (pdf0 + pdf1);
    
    if (config.USE_POWER_HEURISTIC == 1) {
      let b1 = pdf0;
      let b2 = pdf1;
      misWeight = (b1 * b1) / (b1 * b1 + b2 * b2);
    }
  
    return misWeight;
  }
`,lu=`
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
`,uu=`
  fn getShadingNormal(
    mapLocation: vec2i, strength: f32, uvRepeat: vec2f, interpolatedAttributes: InterpolatedAttributes, ray: Ray, 
    triangle: Triangle, rayOffset: ptr<function, f32>
  ) -> vec3f {
    let uv = interpolatedAttributes.uv; 
    let vertexNormal = interpolatedAttributes.normal;
    let vertexTangent = interpolatedAttributes.tangent;
    
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
    getTangentFromTriangle(
      // temp geo context
      GeometryContext(
        vec2f(0.0), false, ray, interpolatedAttributes, 
        SurfaceNormals(triangle.geometricNormal, vertexNormal, vertexNormal),
        0.0
      ), 
      &tangent, 
      &bitangent
    );
    
    // negated bitangent to switch handedness
    // I think bump / normal maps are authored with a right-handed system in mind
    // where z points towards "us"
    let tbn = mat3x3f(tangent, -bitangent, vertexNormal);
    let framedNormal = normalize( tbn * sn );
    
    // for now we're disabling real ray offsets calculations since they cause issues
    // when applying textures to large planes, I'm instead only applying a small epsilon
    // *rayOffset = t0;
    *rayOffset = 0.000001;
    return framedNormal;
  }
`,Fh=`
var<private> bnRandomsOffsetsArray = array<f32, 8>(0,0,0,0,0,0,0,0);
var<private> bnRandomsOffsetsArrayIndex: u32 = 0;

fn getBlueNoiseDecorrelationOffset() -> f32 {
  let offset = bnRandomsOffsetsArray[bnRandomsOffsetsArrayIndex];
  bnRandomsOffsetsArrayIndex = mod1u(bnRandomsOffsetsArrayIndex + 1, 8);
  
  return offset;
}

fn initializeBlueNoiseDecorrelationOffsets(tid: vec3u) {
  bnRandomsOffsetsArray = array<f32, 8>(0,0,0,0,0,0,0,0);
  bnRandomsOffsetsArrayIndex = 0;

  let tx1 = mod1u(tid.x, 256);
  let ty1 = mod1u(tid.y, 256);
  let blueNoise1 = textureLoad(blueNoise256, vec2u(tx1, ty1), 0);
  let tx2 = mod1u(tid.x + 128, 256);
  let ty2 = mod1u(tid.y + 128, 256);
  let blueNoise2 = textureLoad(blueNoise256, vec2u(tx2, ty2), 0);

  bnRandomsOffsetsArray[0] = blueNoise1.x;
  bnRandomsOffsetsArray[1] = blueNoise1.y;
  bnRandomsOffsetsArray[2] = blueNoise1.z;
  bnRandomsOffsetsArray[3] = blueNoise1.w;
  bnRandomsOffsetsArray[4] = blueNoise2.x;
  bnRandomsOffsetsArray[5] = blueNoise2.y;
  bnRandomsOffsetsArray[6] = blueNoise2.z;
  bnRandomsOffsetsArray[7] = blueNoise2.w;
}
`,Lh=`
const RANDOMS_VEC4F_ARRAY_COUNT = 50;
const RANDOMS_SAMPLES_COUNT = RANDOMS_VEC4F_ARRAY_COUNT * 4;
var<private> randomsArrayIndex: u32 = 0;
var<private> randomsOffset: f32 = 0;

${Fh}

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
      offset = getBlueNoiseDecorrelationOffset();
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
  randomsArrayIndex = 0;
  randomsOffset = 0;

  // I think that if I also use sampleIndex below I'd thwart the halton sequence,
  // since successive samples will have random offsets compared to where they should
  // have been had I simply used the sequence itself
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
    initializeBlueNoiseDecorrelationOffsets(tid);
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
`,kh=`
fn shade(
  ires: BVHIntersectionResult, 
  ray: ptr<function, Ray>,
  rad: ptr<function, vec3f>,
  throughput: ptr<function, vec3f>, 
  lastBrdfMis: ptr<function, f32>, 
) {
  let triangle = triangles[ires.triangleIndex];

  var material = EvaluatedMaterial();
  var geometryContext = GeometryContext();
  evaluateMaterialAndGeometryContext(ires, *ray, &material, &geometryContext, false);
  let materialType = material.materialType;

  let normals = geometryContext.normals;

  // TODO:
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // needs to be the exact origin, such that getLightSample/getLightPDF can apply a proper offset 
  (*ray).origin = ires.hitPoint;
  // in practice however, only for Dielectrics we need the exact origin, 
  // for TorranceSparrow/Diffuse we can apply the bump offset if necessary
  if (materialType != ${_e.DIELECTRIC}) {
    if (geometryContext.bumpOffset > 0.0) {
      (*ray).origin += normals.vertex * geometryContext.bumpOffset;
    }
  }
  geometryContext.ray = *ray;

  var emissive = getEmissive(material, geometryContext.isBackFacing);
  *rad += emissive * *lastBrdfMis * *throughput;

  // absorption check for dielectrics
  if (materialType == ${_e.DIELECTRIC}) {
    var isInsideMedium = dot(normals.shading, (*ray).direction) > 0;
        
    // beer-lambert absorption 
    if (isInsideMedium) {
      let absorption = vec3f(
        exp(-material.absorptionCoefficient.x * ires.t), 
        exp(-material.absorptionCoefficient.y * ires.t), 
        exp(-material.absorptionCoefficient.z * ires.t), 
      );

      *throughput *= absorption;
    }
  }

  let brdfSample = sampleBrdf(material, geometryContext);
  var lightSample = LightDirectionSample(vec3f(0), 0, 0, vec3f(0), LightSample());
  // the reason why we're guarding NEE with this if statement is explained in the segment/integrators/mis-explanation.png
  if (debugInfo.bounce < config.BOUNCES_COUNT - 1) {
    lightSample = sampleLight(material, geometryContext);

    let lightRadiance = lightSample.ls.radiance;
    let lightSampleSuccessful = dot(lightRadiance, lightRadiance) > 0.0;
      
    if (lightSampleSuccessful) {
      *rad += lightRadiance * lightSample.mis * *throughput *
        lightSample.brdf / lightSample.pdf * cosTerm(normals.shading, lightSample.dir, materialType);
    }
  }

  // now you have to actually change ray.direction to reflect the new direction
  (*ray).origin += brdfSample.dir * 0.001;
  (*ray).direction = brdfSample.dir;

  *lastBrdfMis = brdfSample.mis;
  var t = brdfSample.brdf * (/* mis weight */ 1.0 / brdfSample.pdf);
  t *= cosTerm(normals.shading, brdfSample.dir, materialType);

  *throughput *= t;
}
`;function Oh(a,e){return`
// keep in mind that configManager.shaderPart() might return different shader code if the
// internal shader configs have changed
${e.shaderPart()}
// at the moment these have to be imported with this specific order
${au}
${su}
${nu}
${ou}
${lu}
${uu}
${Lh}
${a.getShaderPart()}
${kh}
${us.shaderPart()}
${zi.shaderEmissiveLobe()}
${rt.shaderDiffuseLobe()}
${wt.shaderBRDF()}
${wt.shaderTorranceSparrowLobe()}
${Kt.shaderBRDF()}
${Kt.shaderDielectricLobe()}
${Dr.shaderStruct()}
${cs.shaderStruct()}
${cs.shaderMethods()}
${Fi.shaderStruct()}
${Fi.shaderIntersectionFn()}
${xt.shaderStruct()}
${xt.shaderIntersect()}
${ls.shaderStruct()}
${ls.shaderIntersect()}
${hi.shaderStruct()}
${hi.shaderMethods()}
${jt.shaderStruct()}
${jt.shaderMethods()}
${Qi.shaderStruct()}
${Qi.shaderMethods()}
${pa.shaderMethods()}

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
@group(3) @binding(1) var<storage> materialsBuffer: array<f32>;
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
  if (debugInfo.isSelectedPixel) {
    debugBuffer[debugInfo.debugLogIndex] = value;
    debugInfo.debugLogIndex++;
  }
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
  var lastBrdfMis = 1.0;
  for (var i = 0; i < config.BOUNCES_COUNT; i++) {
    if (rayContribution == 0.0) { break; }

    debugInfo.bounce = i;

    let ires = bvhIntersect(ray);

    if (ires.hit) {
      shade(ires, &ray, &rad, &reflectance, &lastBrdfMis);
    } else if (shaderConfig.HAS_ENVMAP) {
      // we bounced off into the envmap
      let envmapRad = getEnvmapRadiance(ray.direction);
      rad += lastBrdfMis * reflectance * envmapRad;
      break;
    }

    if (reflectance.x == 0.0 && reflectance.y == 0.0 && reflectance.z == 0.0) {
      break;
    }
  }

  if (debugInfo.isSelectedPixel) {
    radianceOutput[idx] += vec3f(100, 0, 100);
  } else {
    radianceOutput[idx] += rad * rayContribution;
  }

  samplesCount[idx] += 1;
}
`}const Uh=`
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
`;function Xt(a,e){return cu(a,GPUShaderStage.COMPUTE,e)}function Vh(a,e){return cu(a,GPUShaderStage.FRAGMENT,e)}function cu(a,e,t){return a.createBindGroupLayout({entries:t.map((i,r)=>{if(i=="storage"||i=="uniform"||i=="read-only-storage")return{binding:r,visibility:e,buffer:{type:i}};if(i=="texture")return{binding:r,visibility:e,texture:{}};if(i=="2d-array")return{binding:r,visibility:e,texture:{viewDimension:"2d-array"}};if(i=="3d")return{binding:r,visibility:e,texture:{viewDimension:"3d"}};throw new Error("Unexpected bind-group-layout value type")})})}class hu{constructor(e){S(this,"device");S(this,"pipeline");S(this,"bindGroup0",null);S(this,"canvasSizeUniformBuffer");S(this,"canvasSize",null);this.device=e;const t=e.createShaderModule({label:"reset module",code:Uh}),i=e.createPipelineLayout({bindGroupLayouts:[Xt(e,["storage","storage","uniform"])]});this.pipeline=e.createComputePipeline({label:"reset pipeline",layout:i,compute:{module:t,entryPoint:"resetCanvas"}}),this.canvasSizeUniformBuffer=e.createBuffer({label:"canvas size uniform",size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}dispose(){this.canvasSizeUniformBuffer.destroy()}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"reset bindgroup",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}reset(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined bind groups or canvasSize");const e=Yt(Math.ceil(this.canvasSize.x/8),Math.ceil(this.canvasSize.y/8)),t=this.device.createCommandEncoder({label:"reset encoder"}),i=t.beginComputePass({label:"reset pass"});i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.dispatchWorkgroups(e.x,e.y),i.end();const r=t.finish();this.device.queue.submit([r])}}class fu{constructor(e){S(this,"querySet");S(this,"resolveBuffer");S(this,"resultBuffer");S(this,"average",[]);this.querySet=e.createQuerySet({type:"timestamp",count:2}),this.resolveBuffer=e.createBuffer({label:"resolve - pass performance",size:this.querySet.count*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=e.createBuffer({label:"result - pass performance",size:this.resolveBuffer.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}updateComputePassDescriptor(e){e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}}resolve(e){e.resolveQuerySet(this.querySet,0,this.querySet.count,this.resolveBuffer,0),this.resultBuffer.mapState==="unmapped"&&e.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.resultBuffer.size)}getDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());e(Number(i[1]-i[0])/1e6),this.resultBuffer.unmap()}):t()})}reset(){this.average=[]}getAverageDeltaInMilliseconds(){return new Promise((e,t)=>{this.resultBuffer.mapState==="unmapped"?this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const i=new BigInt64Array(this.resultBuffer.getMappedRange());this.average.push(Number(i[1]-i[0])/1e6),this.average.length>30&&this.average.splice(0,1),e(this.average.reduce((r,s)=>r+s/this.average.length)),this.resultBuffer.unmap()}):t()})}}let $h=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223];class du{constructor(){S(this,"s",0)}reset(){this.s=0}get2DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3);return this.s++,new oe(e,t)}get3DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5);return this.s++,new I(e,t,i)}get4DSample(){let e=this.getSample(this.s,2),t=this.getSample(this.s,3),i=this.getSample(this.s,5),r=this.getSample(this.s,7);return this.s++,new At(e,t,i,r)}getSamples(e){if(e>200)throw new Error("adjust the getSamples function to take in more than 200 samples");let t=[];for(let i=0;i<e;i++)t.push(this.getSample(this.s,$h[i]));return this.s++,t}getSample(e,t){for(var i=0,r=1/t,s=e;s>0;)i=i+r*(s%t),s=Math.floor(s/t),r=r/t;return i}}var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Gh(a){if(a.__esModule)return a;var e=a.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(a).forEach(function(i){var r=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return a[i]}})}),t}var ma={exports:{}};ma.exports;(function(a){(function(e,t,i){function r(o){var u=this,c=l();u.next=function(){var h=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=h-(u.c=h|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(o),u.s0<0&&(u.s0+=1),u.s1-=c(o),u.s1<0&&(u.s1+=1),u.s2-=c(o),u.s2<0&&(u.s2+=1),c=null}function s(o,u){return u.c=o.c,u.s0=o.s0,u.s1=o.s1,u.s2=o.s2,u}function n(o,u){var c=new r(o),h=u&&u.state,f=c.next;return f.int32=function(){return c.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,h&&(typeof h=="object"&&s(h,c),f.state=function(){return s(c,{})}),f}function l(){var o=4022871197,u=function(c){c=String(c);for(var h=0;h<c.length;h++){o+=c.charCodeAt(h);var f=.02519603282416938*o;o=f>>>0,f-=o,f*=o,o=f>>>0,f-=o,o+=f*4294967296}return(o>>>0)*23283064365386963e-26};return u}t&&t.exports?t.exports=n:this.alea=n})(Oi,a)})(ma);var Hh=ma.exports,ga={exports:{}};ga.exports;(function(a){(function(e,t,i){function r(l){var o=this,u="";o.x=0,o.y=0,o.z=0,o.w=0,o.next=function(){var h=o.x^o.x<<11;return o.x=o.y,o.y=o.z,o.z=o.w,o.w^=o.w>>>19^h^h>>>8},l===(l|0)?o.x=l:u+=l;for(var c=0;c<u.length+64;c++)o.x^=u.charCodeAt(c)|0,o.next()}function s(l,o){return o.x=l.x,o.y=l.y,o.z=l.z,o.w=l.w,o}function n(l,o){var u=new r(l),c=o&&o.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&s(c,u),h.state=function(){return s(u,{})}),h}t&&t.exports?t.exports=n:this.xor128=n})(Oi,a)})(ga);var qh=ga.exports,va={exports:{}};va.exports;(function(a){(function(e,t,i){function r(l){var o=this,u="";o.next=function(){var h=o.x^o.x>>>2;return o.x=o.y,o.y=o.z,o.z=o.w,o.w=o.v,(o.d=o.d+362437|0)+(o.v=o.v^o.v<<4^(h^h<<1))|0},o.x=0,o.y=0,o.z=0,o.w=0,o.v=0,l===(l|0)?o.x=l:u+=l;for(var c=0;c<u.length+64;c++)o.x^=u.charCodeAt(c)|0,c==u.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function s(l,o){return o.x=l.x,o.y=l.y,o.z=l.z,o.w=l.w,o.v=l.v,o.d=l.d,o}function n(l,o){var u=new r(l),c=o&&o.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&s(c,u),h.state=function(){return s(u,{})}),h}t&&t.exports?t.exports=n:this.xorwow=n})(Oi,a)})(va);var jh=va.exports,ya={exports:{}};ya.exports;(function(a){(function(e,t,i){function r(l){var o=this;o.next=function(){var c=o.x,h=o.i,f,d;return f=c[h],f^=f>>>7,d=f^f<<24,f=c[h+1&7],d^=f^f>>>10,f=c[h+3&7],d^=f^f>>>3,f=c[h+4&7],d^=f^f<<7,f=c[h+7&7],f=f^f<<13,d^=f^f<<9,c[h]=d,o.i=h+1&7,d};function u(c,h){var f,d=[];if(h===(h|0))d[0]=h;else for(h=""+h,f=0;f<h.length;++f)d[f&7]=d[f&7]<<15^h.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],c.x=d,c.i=0,f=256;f>0;--f)c.next()}u(o,l)}function s(l,o){return o.x=l.x.slice(),o.i=l.i,o}function n(l,o){l==null&&(l=+new Date);var u=new r(l),c=o&&o.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(c.x&&s(c,u),h.state=function(){return s(u,{})}),h}t&&t.exports?t.exports=n:this.xorshift7=n})(Oi,a)})(ya);var Wh=ya.exports,ba={exports:{}};ba.exports;(function(a){(function(e,t,i){function r(l){var o=this;o.next=function(){var c=o.w,h=o.X,f=o.i,d,p;return o.w=c=c+1640531527|0,p=h[f+34&127],d=h[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,p=h[f]=p^d,o.i=f,p+(c^c>>>16)|0};function u(c,h){var f,d,p,g,v,m=[],x=128;for(h===(h|0)?(d=h,h=null):(h=h+"\0",d=0,x=Math.max(x,h.length)),p=0,g=-32;g<x;++g)h&&(d^=h.charCodeAt((g+32)%h.length)),g===0&&(v=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,g>=0&&(v=v+1640531527|0,f=m[g&127]^=d+v,p=f==0?p+1:0);for(p>=128&&(m[(h&&h.length||0)&127]=-1),p=127,g=4*128;g>0;--g)d=m[p+34&127],f=m[p=p+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,m[p]=d^f;c.w=v,c.X=m,c.i=p}u(o,l)}function s(l,o){return o.i=l.i,o.w=l.w,o.X=l.X.slice(),o}function n(l,o){l==null&&(l=+new Date);var u=new r(l),c=o&&o.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(c.X&&s(c,u),h.state=function(){return s(u,{})}),h}t&&t.exports?t.exports=n:this.xor4096=n})(Oi,a)})(ba);var Xh=ba.exports,xa={exports:{}};xa.exports;(function(a){(function(e,t,i){function r(l){var o=this,u="";o.next=function(){var h=o.b,f=o.c,d=o.d,p=o.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,o.b=h=h<<20^h>>>12^f,o.c=f=f-d|0,o.d=d<<16^f>>>16^p,o.a=p-h|0},o.a=0,o.b=0,o.c=-1640531527,o.d=1367130551,l===Math.floor(l)?(o.a=l/4294967296|0,o.b=l|0):u+=l;for(var c=0;c<u.length+20;c++)o.b^=u.charCodeAt(c)|0,o.next()}function s(l,o){return o.a=l.a,o.b=l.b,o.c=l.c,o.d=l.d,o}function n(l,o){var u=new r(l),c=o&&o.state,h=function(){return(u.next()>>>0)/4294967296};return h.double=function(){do var f=u.next()>>>11,d=(u.next()>>>0)/4294967296,p=(f+d)/(1<<21);while(p===0);return p},h.int32=u.next,h.quick=h,c&&(typeof c=="object"&&s(c,u),h.state=function(){return s(u,{})}),h}t&&t.exports?t.exports=n:this.tychei=n})(Oi,a)})(xa);var Yh=xa.exports,mu={exports:{}};const Zh={},Kh=Object.freeze(Object.defineProperty({__proto__:null,default:Zh},Symbol.toStringTag,{value:"Module"})),Jh=Gh(Kh);(function(a){(function(e,t,i){var r=256,s=6,n=52,l="random",o=i.pow(r,s),u=i.pow(2,n),c=u*2,h=r-1,f;function d(_,B,A){var C=[];B=B==!0?{entropy:!0}:B||{};var w=m(v(B.entropy?[_,T(t)]:_??x(),3),C),O=new p(C),N=function(){for(var P=O.g(s),k=o,R=0;P<u;)P=(P+R)*r,k*=r,R=O.g(1);for(;P>=c;)P/=2,k/=2,R>>>=1;return(P+R)/k};return N.int32=function(){return O.g(4)|0},N.quick=function(){return O.g(4)/4294967296},N.double=N,m(T(O.S),t),(B.pass||A||function(P,k,R,z){return z&&(z.S&&g(z,O),P.state=function(){return g(O,{})}),R?(i[l]=P,k):P})(N,w,"global"in B?B.global:this==i,B.state)}function p(_){var B,A=_.length,C=this,w=0,O=C.i=C.j=0,N=C.S=[];for(A||(_=[A++]);w<r;)N[w]=w++;for(w=0;w<r;w++)N[w]=N[O=h&O+_[w%A]+(B=N[w])],N[O]=B;(C.g=function(P){for(var k,R=0,z=C.i,j=C.j,$=C.S;P--;)k=$[z=h&z+1],R=R*r+$[h&($[z]=$[j=h&j+k])+($[j]=k)];return C.i=z,C.j=j,R})(r)}function g(_,B){return B.i=_.i,B.j=_.j,B.S=_.S.slice(),B}function v(_,B){var A=[],C=typeof _,w;if(B&&C=="object")for(w in _)try{A.push(v(_[w],B-1))}catch{}return A.length?A:C=="string"?_:_+"\0"}function m(_,B){for(var A=_+"",C,w=0;w<A.length;)B[h&w]=h&(C^=B[h&w]*19)+A.charCodeAt(w++);return T(B)}function x(){try{var _;return f&&(_=f.randomBytes)?_=_(r):(_=new Uint8Array(r),(e.crypto||e.msCrypto).getRandomValues(_)),T(_)}catch{var B=e.navigator,A=B&&B.plugins;return[+new Date,e,A,e.screen,T(t)]}}function T(_){return String.fromCharCode.apply(0,_)}if(m(i.random(),t),a.exports){a.exports=d;try{f=Jh}catch{}}else i["seed"+l]=d})(typeof self<"u"?self:Oi,[],Math)})(mu);var Qh=mu.exports,ef=Hh,tf=qh,rf=jh,sf=Wh,nf=Xh,af=Yh,tr=Qh;tr.alea=ef;tr.xor128=tf;tr.xorwow=rf;tr.xorshift7=sf;tr.xor4096=nf;tr.tychei=af;var of=tr;const lf=pu(of);function uf(a,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,hf(i.key),i)}}function wa(a,e,t){return e&&uf(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function gu(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,Zn(a,e)}function Zn(a,e){return Zn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Zn(a,e)}function cf(a,e){if(typeof a!="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function hf(a){var e=cf(a,"string");return typeof e=="symbol"?e:String(e)}var un=function(){function a(){}var e=a.prototype;return e._seed=function(i,r){if(i===(i||0))return i;for(var s=""+i,n=0,l=0;l<s.length;++l)n^=s.charCodeAt(l)|0;return n},a}(),Io=function(a){gu(e,a);function e(i,r){var s;return s=a.call(this)||this,s._rng=void 0,s.seed(i,r),s}var t=e.prototype;return t.next=function(){return this._rng()},t.seed=function(r,s){this._rng=r},t.clone=function(r,s){return new e(this._rng,s)},wa(e,[{key:"name",get:function(){return"function"}}]),e}(un),Po=function(){var a=[].slice.call(arguments),e=a,t=e[0],i=t===void 0?"default":t;switch(typeof i){case"object":if(i instanceof un)return i;break;case"function":return new Io(i);case"number":case"string":default:return new Io(lf.apply(void 0,a))}throw new Error('invalid RNG "'+i+'"')},ff=function(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){return a.next()*(t-e)+e}};function Ut(a){return new df(a)}var df=function(e){var t=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(t.n))return t;throw new Error("Expected number to be an integer, got "+t.n)},this.isPositive=function(){if(t.n>0)return t;throw new Error("Expected number to be positive, got "+t.n)},this.lessThan=function(i){if(t.n<i)return t;throw new Error("Expected number to be less than "+i+", got "+t.n)},this.greaterThanOrEqual=function(i){if(t.n>=i)return t;throw new Error("Expected number to be greater than or equal to "+i+", got "+t.n)},this.greaterThan=function(i){if(t.n>i)return t;throw new Error("Expected number to be greater than "+i+", got "+t.n)},this.n=e},pf=function(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),t===void 0&&(t=e===void 0?1:e,e=0),Ut(e).isInt(),Ut(t).isInt(),function(){return Math.floor(a.next()*(t-e+1)+e)}},mf=function(a){return function(){return a.next()>=.5}},gf=function(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),function(){var i,r,s;do i=a.next()*2-1,r=a.next()*2-1,s=i*i+r*r;while(!s||s>1);return e+t*r*Math.sqrt(-2*Math.log(s)/s)}},vf=function(a,e,t){e===void 0&&(e=0),t===void 0&&(t=1);var i=a.normal(e,t);return function(){return Math.exp(i())}},yf=function(a,e){return e===void 0&&(e=.5),Ut(e).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(a.next()+e)}},bf=function(a,e,t){return e===void 0&&(e=1),t===void 0&&(t=.5),Ut(e).isInt().isPositive(),Ut(t).greaterThanOrEqual(0).lessThan(1),function(){for(var i=0,r=0;i++<e;)a.next()<t&&r++;return r}},xf=function(a,e){e===void 0&&(e=.5),Ut(e).greaterThan(0).lessThan(1);var t=1/Math.log(1-e);return function(){return Math.floor(1+Math.log(a.next())*t)}},wf=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],_f=function(e){return wf[e]},Sf=.9189385332046727,Tf=function(a,e){if(e===void 0&&(e=1),Ut(e).isPositive(),e<10){var t=Math.exp(-e);return function(){for(var o=t,u=0,c=a.next();c>o;)c=c-o,o=e*o/++u;return u}}else{var i=Math.sqrt(e),r=.931+2.53*i,s=-.059+.02483*r,n=1.1239+1.1328/(r-3.4),l=.9277-3.6224/(r-2);return function(){for(;;){var o=void 0,u=a.next();if(u<=.86*l)return o=u/l-.43,Math.floor((2*s/(.5-Math.abs(o))+r)*o+e+.445);u>=l?o=a.next()-.5:(o=u/l-.93,o=(o<0?-.5:.5)-o,u=a.next()*l);var c=.5-Math.abs(o);if(!(c<.013&&u>c)){var h=Math.floor((2*s/c+r)*o+e+.445);if(u=u*n/(s/(c*c)+r),h>=10){var f=(h+.5)*Math.log(e/h)-e-Sf+h-(.08333333333333333-(.002777777777777778-1/(1260*h*h))/(h*h))/h;if(Math.log(u*i)<=f)return h}else if(h>=0){var d,p=(d=_f(h))!=null?d:0;if(Math.log(u)<=h*Math.log(e)-e-p)return h}}}}}},Rf=function(a,e){return e===void 0&&(e=1),Ut(e).isPositive(),function(){return-Math.log(1-a.next())/e}},Mf=function(a,e){return e===void 0&&(e=1),Ut(e).isInt().greaterThanOrEqual(0),function(){for(var t=0,i=0;i<e;++i)t+=a.next();return t}},Af=function(a,e){e===void 0&&(e=1),Ut(e).isInt().isPositive();var t=a.irwinHall(e);return function(){return t()/e}},Cf=function(a,e){e===void 0&&(e=1),Ut(e).greaterThanOrEqual(0);var t=1/e;return function(){return 1/Math.pow(1-a.next(),t)}},Ef=function(a){gu(e,a);function e(){return a.apply(this,arguments)||this}var t=e.prototype;return t.next=function(){return Math.random()},t.seed=function(r,s){},t.clone=function(){return new e},wa(e,[{key:"name",get:function(){return"default"}}]),e}(un),If=function(){function a(t){var i=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return i._rng.next()},this.float=function(r,s){return i.uniform(r,s)()},this.int=function(r,s){return i.uniformInt(r,s)()},this.integer=function(r,s){return i.uniformInt(r,s)()},this.bool=function(){return i.uniformBoolean()()},this.boolean=function(){return i.uniformBoolean()()},this.uniform=function(r,s){return i._memoize("uniform",ff,r,s)},this.uniformInt=function(r,s){return i._memoize("uniformInt",pf,r,s)},this.uniformBoolean=function(){return i._memoize("uniformBoolean",mf)},this.normal=function(r,s){return gf(i,r,s)},this.logNormal=function(r,s){return vf(i,r,s)},this.bernoulli=function(r){return yf(i,r)},this.binomial=function(r,s){return bf(i,r,s)},this.geometric=function(r){return xf(i,r)},this.poisson=function(r){return Tf(i,r)},this.exponential=function(r){return Rf(i,r)},this.irwinHall=function(r){return Mf(i,r)},this.bates=function(r){return Af(i,r)},this.pareto=function(r){return Cf(i,r)},t&&t instanceof un?this.use(t):this.use(new Ef),this._cache={}}var e=a.prototype;return e.clone=function(){var i=[].slice.call(arguments);return i.length?new a(Po.apply(void 0,i)):new a(this.rng.clone())},e.use=function(){this._rng=Po.apply(void 0,[].slice.call(arguments))},e.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},e.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},e.choice=function(i){if(!Array.isArray(i))throw new Error("Random.choice expected input to be an array, got "+typeof i);var r=i==null?void 0:i.length;if(r>0){var s=this.uniformInt(0,r-1)();return i[s]}else return},e._memoize=function(i,r){var s=[].slice.call(arguments,2),n=""+s.join(";"),l=this._cache[i];return(l===void 0||l.key!==n)&&(l={key:n,distribution:r.apply(void 0,[this].concat(s))},this._cache[i]=l),l.distribution},wa(a,[{key:"rng",get:function(){return this._rng}}]),a}(),st=new If;class Zs{constructor(e="seed-string"){S(this,"seedString");this.seedString=e,this.reset()}reset(){st.use(this.seedString)}getSamples(e){let t=[];for(let i=0;i<e;i++)t.push(st.float());return t}}function Pf(a,e,t,i){let r=Math.abs(t-a),s=Math.abs(i-e);return r>.5&&(r=1-r),s>.5&&(s=1-s),r*r+s*s}class vu{constructor(e="seed-string"){S(this,"seedString");S(this,"points");this.seedString=e,this.points=[],this.reset()}randomPoint(){return[st.float(),st.float()]}addSample(e){if(this.points[e]||(this.points[e]=[]),this.points[e].length==0){this.points[e].push(this.randomPoint());return}let t=[],i=this.points[e].length;for(let n=0;n<i;n++)t.push(this.randomPoint());let r=0,s=-1;t.forEach((n,l)=>{let o=1/0;this.points[e].forEach((u,c)=>{let h=Pf(n[0],n[1],u[0],u[1]);h<o&&(o=h)}),o>r&&(r=o,s=l)}),this.points[e].push(t[s])}resetArrays(){this.points=[]}reset(){st.use(this.seedString),this.resetArrays()}getSamples(e,t=200){if(e%2!==0)throw new Error("Blue noise requires an even number of samples");this.points[0]&&this.points[0].length>t&&this.resetArrays();let i=[];for(let r=0;r<e/2;r++){this.addSample(r);let s=this.points[r][this.points[0].length-1][0],n=this.points[r][this.points[0].length-1][1];i.push(s,n)}return i}}class Hi{constructor(e,t="seed-string"){S(this,"seedString");S(this,"as");S(this,"numberOfDimensions");S(this,"phi");S(this,"iteration",0);this.seedString=t,this.reset(),this.numberOfDimensions=e,this.phi=this.calculatePhi(this.numberOfDimensions),this.as=this.calculateAs(this.phi,this.numberOfDimensions)}calculatePhi(e,t=50){let i=2;for(let r=0;r<t;r++)i=Math.pow(1+i,1/(e+1));return i}calculateAs(e,t){let i=[];for(let r=0;r<t;r++)i.push(1/Math.pow(e,r+1));return i}getSample(e,t){return(.5+this.as[e]*t)%1}reset(){st.use(this.seedString),this.iteration=0}getSamples(e){let t=[];for(let i=0;i<e;i++)if(i<this.numberOfDimensions){let r=this.getSample(i,this.iteration);t.push(r)}else t.push(st.float());return this.iteration++,t}}class Bf{constructor(e="seed-string"){S(this,"seedString");S(this,"r2_2",new Hi(2));S(this,"r2_4",new Hi(4));S(this,"r2_6",new Hi(6));S(this,"r2_8",new Hi(8));S(this,"r2_10",new Hi(10));S(this,"r2_12",new Hi(12));S(this,"r2_14",new Hi(14));this.seedString=e,this.reset()}reset(){st.use(this.seedString),this.r2_2.reset(),this.r2_4.reset(),this.r2_6.reset(),this.r2_8.reset(),this.r2_10.reset(),this.r2_12.reset(),this.r2_14.reset()}transformPair(e,t,i){let r=i*(Math.PI/2),s=.25*i,n=e*Math.cos(r)-t*Math.sin(r),l=e*Math.sin(r)+t*Math.cos(r);return n+=s,l+=s,[n%1,l%1]}transformSamples(e,t){let i=[];for(let r=0;r<e.length/2;r++){let s=e[r*2+0],n=e[r*2+1];i.push(...this.transformPair(s,n,t))}return i}getSamples(e){let t=[];if(t.push(...this.r2_2.getSamples(2)),t.push(...this.r2_4.getSamples(4)),t.push(...this.r2_6.getSamples(6)),t.push(...this.r2_8.getSamples(8)),t.push(...this.r2_10.getSamples(10)),t.push(...this.r2_12.getSamples(12)),t.push(...this.r2_14.getSamples(14)),t.length>e)t=t.slice(0,e);else{let i=e-t.length;for(let r=0;r<i;r++)t.push(st.float())}return t}}class Df{constructor(){S(this,"passPerformance");S(this,"device");S(this,"pipeline",null);S(this,"bindGroupLayouts");S(this,"layout");S(this,"configManager",new Bh);S(this,"bindGroup0",null);S(this,"bindGroup1",null);S(this,"bindGroup2",null);S(this,"bindGroup3",null);S(this,"canvasSize",null);S(this,"canvasSizeUniformBuffer");S(this,"randomsUniformBuffer");S(this,"RANDOMS_BUFFER_COUNT",200);S(this,"configUniformBuffer");S(this,"tileUniformBuffer");S(this,"debugBufferSize");S(this,"debugBuffer");S(this,"debugPixelTargetBuffer");S(this,"debugReadBuffer");S(this,"resetSegment");S(this,"requestShaderCompilation",!1);S(this,"sceneDataManager");S(this,"haltonSampler",new du);S(this,"uniformSampler",new Zs);S(this,"blueNoiseSampler",new vu);S(this,"customR2Sampler",new Bf);S(this,"tileSequence",new us({avgPerfToIncrease:25,avgPerfToDecrease:100,changeTileSizeOnNewLineOnly:!1,performanceHistoryCount:2}));S(this,"onUpdateCamera",()=>{this.resetSamplesAndTile()});S(this,"updateConfig",()=>{this.resetSamplesAndTile(),this.device.queue.writeBuffer(this.configUniformBuffer,0,this.configManager.getOptionsBuffer())});S(this,"updateScene",()=>{if(!this.sceneDataManager)return;this.resetSamplesAndTile(),this.requestShaderCompilation=!0;let e=this.sceneDataManager.camera;e.e.addEventListener("change",this.onUpdateCamera),this.onUpdateCamera(),this.bindGroup1=this.device.createBindGroup({label:"compute bindgroup - camera struct",layout:this.bindGroupLayouts[1],entries:[{binding:0,resource:{buffer:e.cameraUniformBuffer}},{binding:1,resource:{buffer:this.randomsUniformBuffer}},{binding:2,resource:{buffer:this.configUniformBuffer}},{binding:3,resource:{buffer:this.tileUniformBuffer}}]});let{trianglesBuffer:t,materialsBuffer:i,bvhBuffer:r,lightsCDFBuffer:s,envmapPC2DArrayBuffer:n,envmapPC2DBuffer:l,envmapTexture:o,envmapInfoBuffer:u,textureArraySegment:c}=this.sceneDataManager;this.bindGroup3=this.device.createBindGroup({label:"compute bindgroup - scene data",layout:this.bindGroupLayouts[3],entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:r}},{binding:3,resource:{buffer:s}},{binding:4,resource:{buffer:n}},{binding:5,resource:{buffer:l}},{binding:6,resource:o.createView()},{binding:7,resource:{buffer:u}},{binding:8,resource:c.textures128.createView({dimension:"2d-array"})},{binding:9,resource:c.textures512.createView({dimension:"2d-array"})},{binding:10,resource:c.textures1024.createView({dimension:"2d-array"})},{binding:11,resource:he.common.lutManager.getTexture().createView({dimension:"3d"})},{binding:12,resource:he.common.blueNoiseTexture.createView()}]})});S(this,"onTileSizeChanged",()=>{this.updateRandomsBuffer()});S(this,"onTileStart",()=>{this.updateRandomsBuffer(),$e.increment()});let e=he.device;this.device=e,this.resetSegment=new hu(e),this.passPerformance=new fu(e),this.bindGroupLayouts=[Xt(e,["storage","storage","uniform"]),Xt(e,["uniform","uniform","uniform","uniform"]),Xt(e,["storage","uniform"]),Xt(e,["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform","texture","uniform","2d-array","2d-array","2d-array","3d","texture"])],this.layout=e.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts}),this.canvasSizeUniformBuffer=e.createBuffer({label:"canvas size uniform cs",size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.randomsUniformBuffer=e.createBuffer({label:"randoms uniform cs",size:this.RANDOMS_BUFFER_COUNT*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.configUniformBuffer=e.createBuffer({label:"config uniform cs",size:this.configManager.bufferSize,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.tileUniformBuffer=e.createBuffer({label:"tile uniform cs",size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugBufferSize=100,this.debugBuffer=this.device.createBuffer({label:"debug cs",size:4*this.debugBufferSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.debugPixelTargetBuffer=this.device.createBuffer({label:"debug pixel target cs",size:4*2,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugReadBuffer=this.device.createBuffer({label:"debug red cs",size:4*this.debugBufferSize,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.setDebugPixelTarget(0,0),this.configManager.e.addEventListener("config-update",this.updateConfig),this.updateConfig(),this.requestShaderCompilation=!0,this.tileSequence.e.addEventListener("on-tile-start",this.onTileStart),this.tileSequence.e.addEventListener("on-tile-size-increased",this.onTileSizeChanged),this.tileSequence.e.addEventListener("on-tile-size-decreased",this.onTileSizeChanged)}setDebugPixelTarget(e,t){this.device.queue.writeBuffer(this.debugPixelTargetBuffer,0,new Uint32Array([e,t])),this.device.queue.writeBuffer(this.debugBuffer,0,new Float32Array(Array.from({length:this.debugBufferSize},(i,r)=>0))),this.bindGroup2=this.device.createBindGroup({label:"compute bindgroup - debug buffer",layout:this.bindGroupLayouts[2],entries:[{binding:0,resource:{buffer:this.debugBuffer}},{binding:1,resource:{buffer:this.debugPixelTargetBuffer}}]})}async logDebugResult(){await this.debugReadBuffer.mapAsync(GPUMapMode.READ);const e=new Float32Array(this.debugReadBuffer.getMappedRange());console.log(e),this.debugReadBuffer.unmap()}updateTile(e){this.device.queue.writeBuffer(this.tileUniformBuffer,0,new Uint32Array([e.x,e.y,e.w,e.h]))}setSceneDataManager(e){this.sceneDataManager=e,this.sceneDataManager.e.addEventListener("on-scene-update",this.updateScene)}resize(e,t,i){this.resetSegment.resize(e,t,i),this.tileSequence.setCanvasSize(e),this.resetSamplesAndTile(),this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({label:"compute bindgroup",layout:this.bindGroupLayouts[0],entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]})}resetSamplesAndTile(){this.tileSequence.resetTile(),$e.reset()}updateRandomsBuffer(){if(this.configManager.options.SimplePathTrace.SAMPLER_TYPE==Wt.HALTON){let e=new Float32Array(this.haltonSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(this.configManager.options.SimplePathTrace.SAMPLER_TYPE==Wt.UNIFORM){let e=new Float32Array(this.uniformSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(this.configManager.options.SimplePathTrace.SAMPLER_TYPE==Wt.BLUE_NOISE){let e=new Float32Array(this.blueNoiseSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}if(this.configManager.options.SimplePathTrace.SAMPLER_TYPE==Wt.CUSTOM_R2){let e=new Float32Array(this.customR2Sampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.randomsUniformBuffer,0,e)}}async createPipeline(){Ni.set("compiling shaders");const e=this.device.createShaderModule({label:"compute module",code:Oh(he.common.lutManager,this.configManager)});this.pipeline=await this.device.createComputePipelineAsync({label:"compute pipeline",layout:this.layout,compute:{module:e,entryPoint:"compute"}}),Ni.set("")}saveTilePerformance(e,t){e.isTilePerformanceMeasureable()&&(e.saveComputationPerformance(t),$e.setPerformance(t))}async compute(){if(this.requestShaderCompilation&&(await this.createPipeline(),this.requestShaderCompilation=!1),!this.pipeline||!this.bindGroup0||!this.bindGroup1||!this.bindGroup2||!this.bindGroup3||!this.canvasSize)throw new Error("undefined bind groups / pipeline / canvasSize");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");$e.count===0&&(this.tileSequence.resetTile(),this.resetSegment.reset(),this.haltonSampler.reset(),this.blueNoiseSampler.reset(),this.uniformSampler.reset());let e=this.tileSequence.getNextTile();this.updateTile(e);const t=this.tileSequence.getWorkGroupCount(),i=this.device.createCommandEncoder({label:"compute encoder"}),r={label:"compute pass"};this.passPerformance.updateComputePassDescriptor(r);const s=i.beginComputePass(r);s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup0),s.setBindGroup(1,this.bindGroup1),s.setBindGroup(2,this.bindGroup2),s.setBindGroup(3,this.bindGroup3),s.dispatchWorkgroups(t.x,t.y),s.end(),this.tileSequence.isTilePerformanceMeasureable()&&this.passPerformance.resolve(i),i.copyBufferToBuffer(this.debugBuffer,0,this.debugReadBuffer,0,this.debugBuffer.size);let n=performance.now();const l=i.finish();this.device.queue.submit([l]),await this.device.queue.onSubmittedWorkDone();let o=performance.now();this.saveTilePerformance(this.tileSequence,o-n)}dispose(){var e,t;this.resetSegment.dispose(),this.canvasSizeUniformBuffer.destroy(),this.randomsUniformBuffer.destroy(),this.configUniformBuffer.destroy(),this.tileUniformBuffer.destroy(),this.debugBuffer.destroy(),this.debugPixelTargetBuffer.destroy(),this.debugReadBuffer.destroy(),this.configManager.e.removeEventListener("config-update",this.updateConfig),(e=this.sceneDataManager)==null||e.camera.e.removeEventListener("change",this.onUpdateCamera),(t=this.sceneDataManager)==null||t.e.removeEventListener("on-scene-update",this.updateScene),this.tileSequence.e.removeEventListener("on-tile-start",this.onTileStart),this.tileSequence.e.removeEventListener("on-tile-size-increased",this.onTileSizeChanged),this.tileSequence.e.removeEventListener("on-tile-size-decreased",this.onTileSizeChanged)}}const Nf=`
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
`;class zf{constructor(e,t){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"bindGroup0",null);S(this,"canvasSize");S(this,"canvasSizeUniformBuffer");S(this,"scene");S(this,"camera");this.canvasSize=null,this.context=e;let i=he.device;this.device=i;const r=i.createShaderModule({label:"render shader",code:Nf}),s=i.createPipelineLayout({bindGroupLayouts:[Vh(i,["read-only-storage","read-only-storage","uniform","uniform"])]});this.pipeline=i.createRenderPipeline({label:"render pipeline",layout:s,vertex:{module:r,entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:t}]}}),this.canvasSizeUniformBuffer=i.createBuffer({label:"canvas size uniform",size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}updateScene(e){this.scene=e,this.camera=e.camera}resize(e,t,i){this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y])),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:t,size:t.size}},{binding:1,resource:{buffer:i,size:i.size}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}},{binding:3,resource:{buffer:this.camera.exposureUniformBuffer}}]})}render(){if(!this.bindGroup0||!this.canvasSize)throw new Error("undefined render bind group");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");const e={label:"our basic canvas renderPass",colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},t=this.device.createCommandEncoder({label:"render encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.draw(6),i.end();const r=t.finish();this.device.queue.submit([r])}}function Ff(a,e){window.addEventListener("keypress",t=>{t.key==a&&e()})}function yt(a,e,t){var h,f;let i=[];Ph(a),a=a.toNonIndexed(),t&&a.applyMatrix4(t);let r=t==null?void 0:t.determinant(),s=a.attributes.position.array,n=a.attributes.normal.array,l=((h=a.attributes.uv)==null?void 0:h.array)||[],o=((f=a.attributes.tangent)==null?void 0:f.array)||[],u=l.length>0,c=o.length>0;for(let d=0;d<a.attributes.position.count;d+=3){let p=n[d*3+0],g=n[d*3+1],v=n[d*3+2],m=mt(s[d*3+0],s[d*3+1],s[d*3+2]),x=Yt(l[d*2+0],l[d*2+1]),T=mt(s[(d+1)*3+0],s[(d+1)*3+1],s[(d+1)*3+2]),_=n[(d+1)*3+0],B=n[(d+1)*3+1],A=n[(d+1)*3+2],C=Yt(l[(d+1)*2+0],l[(d+1)*2+1]),w=mt(s[(d+2)*3+0],s[(d+2)*3+1],s[(d+2)*3+2]),O=n[(d+2)*3+0],N=n[(d+2)*3+1],P=n[(d+2)*3+2],k=Yt(l[(d+2)*2+0],l[(d+2)*2+1]),R=mt(o[d*3+0],o[d*3+1],o[d*3+2]),z=mt(o[(d+1)*3+0],o[(d+1)*3+1],o[(d+1)*3+2]),j=mt(o[(d+2)*3+0],o[(d+2)*3+1],o[(d+2)*3+2]);i.push(new Fi(m,T,w,e,mt(p,g,v),mt(_,B,A),mt(O,N,P),u?x:void 0,u?C:void 0,u?k:void 0,c?R:void 0,c?z:void 0,c?j:void 0,r))}return i}function Tr(a,e,t=!1){let i=[];return t&&(a.updateMatrix(),a.updateMatrixWorld(!0),a instanceof mi)?(i=[...i,...yt(a.geometry,e,a.matrixWorld)],i):(a.traverse(r=>{if(r.updateMatrix(),r.updateMatrixWorld(!0),r instanceof mi){let s=r,n=s.geometry;i=[...i,...yt(n,e,s.matrixWorld)]}}),i)}class ms extends cs{constructor(){super();S(this,"target");S(this,"keys",{});S(this,"disposed");S(this,"rotationChange",!1);S(this,"movementChange",!1);S(this,"isPointerDown",!1);S(this,"pointerDownCoords",new oe(-1,-1));S(this,"theta");S(this,"phi");this.target=new I(0,0,0),this.theta=Math.PI*.5,this.phi=0,this.disposed=!1,window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("keyup",this.handleKeyUp.bind(this)),this.loop()}setCanvasContainer(t){super.setCanvasContainer(t),t.addEventListener("pointerdown",this.handlePointerDown.bind(this)),t.addEventListener("pointerup",this.handlePointerUp.bind(this)),t.addEventListener("pointermove",this.handlePointerMove.bind(this))}dispose(){super.dispose(),window.removeEventListener("keydown",this.handleKeyDown.bind(this)),window.removeEventListener("keyup",this.handleKeyUp.bind(this)),this.canvasContainerEl.removeEventListener("pointerdown",this.handlePointerDown.bind(this)),this.canvasContainerEl.removeEventListener("pointerup",this.handlePointerUp.bind(this)),this.canvasContainerEl.removeEventListener("pointermove",this.handlePointerMove.bind(this)),this.disposed=!0}loop(){this.theta<.001&&(this.theta=.001),this.theta>Math.PI-.001&&(this.theta=Math.PI-.001);let i=!1;if(this.keys.shift&&(i=!0),this.rotationChange){const o=new I(0,1,0);o.applyAxisAngle(new I(-1,0,0),this.theta),o.applyAxisAngle(new I(0,1,0),this.phi);const u=this.position.clone().sub(this.target).length(),c=this.target.clone().add(o.clone().multiplyScalar(u));this.position.copy(c)}let{basisX:r,basisY:s,basisZ:n}=this.getBasis(),l=i?.1:1;if(this.keys.w){let o=n.clone().multiplyScalar(this.movementSpeed*l);this.target.add(o),this.position.add(o),this.movementChange=!0}if(this.keys.s){let o=n.clone().multiplyScalar(-this.movementSpeed*l);this.target.add(o),this.position.add(o),this.movementChange=!0}if(this.keys.d){let o=r.clone().multiplyScalar(this.movementSpeed*.7*l);this.target.add(o),this.position.add(o),this.movementChange=!0}if(this.keys.a){let o=r.clone().multiplyScalar(-this.movementSpeed*.7*l);this.target.add(o),this.position.add(o),this.movementChange=!0}if(this.keys.q){let o=s.clone().multiplyScalar(this.movementSpeed*.3*l);this.target.add(o),this.position.add(o),this.movementChange=!0}if(this.keys.e){let o=s.clone().multiplyScalar(-this.movementSpeed*.3*l);this.target.add(o),this.position.add(o),this.movementChange=!0}(this.rotationChange||this.movementChange)&&(this.calculateMatrix(),this.e.fireEvent("change"),this.rotationChange=!1,this.movementChange=!1),this.disposed||requestAnimationFrame(this.loop.bind(this))}handlePointerDown(t){this.canvasContainerEl&&(this.isPointerDown=!0,this.pointerDownCoords=new oe(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight))}handlePointerUp(t){this.isPointerDown=!1}handlePointerMove(t){if(!this.isPointerDown)return;let i=new oe(t.clientX/this.canvasContainerEl.clientHeight,t.clientY/this.canvasContainerEl.clientHeight),r=i.clone().sub(this.pointerDownCoords);if(r.x==0&&r.y==0)return;let s=1;this.keys.shift&&(s=.1),this.theta+=-r.y*this.rotationSpeed*5*s,this.phi+=r.x*this.rotationSpeed*5*s,this.rotationChange=!0,this.pointerDownCoords=i}handleKeyDown(t){this.keys[t.key.toLowerCase()]=!0}handleKeyUp(t){this.keys[t.key.toLowerCase()]=!1}set(t,i){this.position=t,this.target=i;let r=this.position.clone().sub(this.target).normalize();this.theta=Math.acos(r.y),this.phi=-Math.atan2(r.z,r.x)-Math.PI*.5,this.calculateMatrix(),this.e.fireEvent("change")}getBasis(){const t=this.target.clone().sub(this.position).normalize(),i=new I(0,1,0),r=t,s=i.clone().cross(r).normalize(),n=r.clone().cross(s).normalize();return{basisX:s,basisY:n,basisZ:r}}calculateMatrix(){let{basisX:t,basisY:i,basisZ:r}=this.getBasis();this.rotationMatrix=new Se().makeBasis(t,i,r)}}function Bo(a,e){if(e===Zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===$n||e===Vl){let t=a.getIndex();if(t===null){const n=[],l=a.getAttribute("position");if(l!==void 0){for(let o=0;o<l.count;o++)n.push(o);a.setIndex(n),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,r=[];if(e===$n)for(let n=1;n<=i;n++)r.push(t.getX(0)),r.push(t.getX(n)),r.push(t.getX(n+1));else for(let n=0;n<i;n++)n%2===0?(r.push(t.getX(n)),r.push(t.getX(n+1)),r.push(t.getX(n+2))):(r.push(t.getX(n+2)),r.push(t.getX(n+1)),r.push(t.getX(n)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class _a extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)})}load(e,t,i,r){const s=this;let n;if(this.resourcePath!=="")n=this.resourcePath;else if(this.path!==""){const u=Jr.extractUrlBase(e);n=Jr.resolveURL(u,this.path)}else n=Jr.extractUrlBase(e);this.manager.itemStart(e);const l=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},o=new la(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{s.parse(u,n,function(c){t(c),s.manager.itemEnd(e)},l)}catch(c){l(c)}},i,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const n={},l={},o=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===yu){try{n[Ce.KHR_BINARY_GLTF]=new td(e)}catch(h){r&&r(h);return}s=JSON.parse(n[Ce.KHR_BINARY_GLTF].content)}else s=JSON.parse(o.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new pd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[h.name]=h,n[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],f=s.extensionsRequired||[];switch(h){case Ce.KHR_MATERIALS_UNLIT:n[h]=new Of;break;case Ce.KHR_DRACO_MESH_COMPRESSION:n[h]=new id(s,this.dracoLoader);break;case Ce.KHR_TEXTURE_TRANSFORM:n[h]=new rd;break;case Ce.KHR_MESH_QUANTIZATION:n[h]=new sd;break;default:f.indexOf(h)>=0&&l[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(n),u.setPlugins(l),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Lf(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kf{constructor(e){this.parser=e,this.name=Ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new be(16777215);o.color!==void 0&&c.setRGB(o.color[0],o.color[1],o.color[2],Ct);const h=o.range!==void 0?o.range:0;switch(o.type){case"directional":u=new yh(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new gh(c),u.distance=h;break;case"spot":u=new ph(c),u.distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,u.angle=o.spot.outerConeAngle,u.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return u.position.set(0,0,0),u.decay=2,Ei(u,o),o.intensity!==void 0&&(u.intensity=o.intensity),u.name=t.createUniqueName(o.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(o){return i._getNodeRef(t.cache,l,o)})}}class Of{constructor(){this.name=Ce.KHR_MATERIALS_UNLIT}getMaterialType(){return xr}extendParams(e,t,i){const r=[];e.color=new be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const n=s.baseColorFactor;e.color.setRGB(n[0],n[1],n[2],Ct),e.opacity=n[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(r)}}class Uf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Vf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const l=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(l,l)}return Promise.all(s)}}class $f{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class Gf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;const n=r.extensions[this.name];if(n.sheenColorFactor!==void 0){const l=n.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Ct)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class Hf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class qf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const l=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(l[0],l[1],l[2],Ct),Promise.all(s)}}class jf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Wf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",n.specularTexture));const l=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(l[0],l[1],l[2],Ct),n.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}}class Xf{constructor(e){this.parser=e,this.name=Ce.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class Yf{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],n=r.extensions[this.name];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Zf{constructor(e){this.parser=e,this.name=Ce.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],n=t.options.ktx2Loader;if(!n){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,n)}}class Kf{constructor(e){this.parser=e,this.name=Ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const n=s.extensions[t],l=r.images[n.source];let o=i.textureLoader;if(l.uri){const u=i.options.manager.getHandler(l.uri);u!==null&&(o=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Jf{constructor(e){this.parser=e,this.name=Ce.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const n=s.extensions[t],l=r.images[n.source];let o=i.textureLoader;if(l.uri){const u=i.options.manager.getHandler(l.uri);u!==null&&(o=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,n.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qf{constructor(e){this.name=Ce.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),n=this.parser.options.meshoptDecoder;if(!n||!n.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const o=r.byteOffset||0,u=r.byteLength||0,c=r.count,h=r.byteStride,f=new Uint8Array(l,o,u);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(c,h,f,r.mode,r.filter).then(function(d){return d.buffer}):n.ready.then(function(){const d=new ArrayBuffer(c*h);return n.decodeGltfBuffer(new Uint8Array(d),c,h,f,r.mode,r.filter),d})})}else return null}}class ed{constructor(e){this.name=Ce.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==It.TRIANGLES&&u.mode!==It.TRIANGLE_STRIP&&u.mode!==It.TRIANGLE_FAN&&u.mode!==void 0)return null;const n=i.extensions[this.name].attributes,l=[],o={};for(const u in n)l.push(this.parser.getDependency("accessor",n[u]).then(c=>(o[u]=c,o[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{const c=u.pop(),h=c.isGroup?c.children:[c],f=u[0].count,d=[];for(const p of h){const g=new Se,v=new I,m=new ki,x=new I(1,1,1),T=new Yc(p.geometry,p.material,f);for(let _=0;_<f;_++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,_),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,_),o.SCALE&&x.fromBufferAttribute(o.SCALE,_),T.setMatrixAt(_,g.compose(v,m,x));for(const _ in o)if(_==="_COLOR_0"){const B=o[_];T.instanceColor=new Wn(B.array,B.itemSize,B.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,o[_]);Ye.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),d.push(T)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const yu="glTF",Wr=12,Do={JSON:1313821514,BIN:5130562};class td{constructor(e){this.name=Ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Wr,s=new DataView(e,Wr);let n=0;for(;n<r;){const l=s.getUint32(n,!0);n+=4;const o=s.getUint32(n,!0);if(n+=4,o===Do.JSON){const u=new Uint8Array(e,Wr+n,l);this.content=i.decode(u)}else if(o===Do.BIN){const u=Wr+n;this.body=e.slice(u,u+l)}n+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class id{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ce.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,l={},o={},u={};for(const c in n){const h=Kn[c]||c.toLowerCase();l[h]=n[c]}for(const c in e.attributes){const h=Kn[c]||c.toLowerCase();if(n[c]!==void 0){const f=i.accessors[e.attributes[c]],d=Rr[f.componentType];u[h]=d.name,o[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(h,f){r.decodeDracoFile(c,function(d){for(const p in d.attributes){const g=d.attributes[p],v=o[p];v!==void 0&&(g.normalized=v)}h(d)},l,u,Ct,f)})})}}class rd{constructor(){this.name=Ce.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sd{constructor(){this.name=Ce.KHR_MESH_QUANTIZATION}}class bu extends ps{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let n=0;n!==r;n++)t[n]=i[s+n];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,n=this.sampleValues,l=this.valueSize,o=l*2,u=l*3,c=r-t,h=(i-t)/c,f=h*h,d=f*h,p=e*u,g=p-u,v=-2*d+3*f,m=d-f,x=1-v,T=m-f+h;for(let _=0;_!==l;_++){const B=n[g+_+l],A=n[g+_+o]*c,C=n[p+_+l],w=n[p+_]*c;s[_]=x*B+T*A+v*C+m*w}return s}}const nd=new ki;class ad extends bu{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return nd.fromArray(s).normalize().toArray(s),s}}const It={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},No={9728:rs,9729:Bi,9984:$u,9985:Hu,9986:Gu,9987:sn},zo={33071:Wi,33648:Vn,10497:is},kn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kn={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},od={CUBICSPLINE:void 0,LINEAR:Mr,STEP:ss},On={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ld(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new oa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qs})),a.DefaultMaterial}function qi(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ei(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ud(a,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const h=e[u];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(a);const n=[],l=[],o=[];for(let u=0,c=e.length;u<c;u++){const h=e[u];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;n.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;l.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;o.push(f)}}return Promise.all([Promise.all(n),Promise.all(l),Promise.all(o)]).then(function(u){const c=u[0],h=u[1],f=u[2];return i&&(a.morphAttributes.position=c),r&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function cd(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hd(a){let e;const t=a.extensions&&a.extensions[Ce.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Un(t.attributes):e=a.indices+":"+Un(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,r=a.targets.length;i<r;i++)e+=":"+Un(a.targets[i]);return e}function Un(a){let e="";const t=Object.keys(a).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Jn(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fd(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dd=new Se;class pd{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new ji(this.options.manager):this.textureLoader=new bh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new la(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(n){return n._markDefs&&n._markDefs()}),Promise.all(this._invokeAll(function(n){return n.beforeRoot&&n.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(n){const l={scene:n[0][r.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:r.asset,parser:i,userData:{}};return qi(s,l,r),Ei(l,r),Promise.all(i._invokeAll(function(o){return o.afterRoot&&o.afterRoot(l)})).then(function(){for(const o of l.scenes)o.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const n=t[r].joints;for(let l=0,o=n.length;l<o;l++)e[n[l]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const n=e[r];n.mesh!==void 0&&(this._addNodeRef(this.meshCache,n.mesh),n.skin!==void 0&&(i[n.mesh].isSkinnedMesh=!0)),n.camera!==void 0&&this._addNodeRef(this.cameraCache,n.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(n,l)=>{const o=this.associations.get(n);o!=null&&this.associations.set(l,o);for(const[u,c]of n.children.entries())s(c,l.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ce.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,n){i.load(Jr.resolveURL(t.uri,r.path),s,void 0,function(){n(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const n=kn[r.type],l=Rr[r.componentType],o=r.normalized===!0,u=new l(r.count*n);return Promise.resolve(new Dt(u,n,o))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(n){const l=n[0],o=kn[r.type],u=Rr[r.componentType],c=u.BYTES_PER_ELEMENT,h=c*o,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0;let g,v;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let T=t.cache.get(x);T||(g=new u(l,m*d,r.count*d/c),T=new Hc(g,d/c),t.cache.add(x,T)),v=new ia(T,o,f%d/c,p)}else l===null?g=new u(r.count*o):g=new u(l,f,r.count*o),v=new Dt(g,o,p);if(r.sparse!==void 0){const m=kn.SCALAR,x=Rr[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,B=new x(n[1],T,r.sparse.count*m),A=new u(n[2],_,r.sparse.count*o);l!==null&&(v=new Dt(v.array.slice(),v.itemSize,v.normalized));for(let C=0,w=B.length;C<w;C++){const O=B[C];if(v.setX(O,A[C*o]),o>=2&&v.setY(O,A[C*o+1]),o>=3&&v.setZ(O,A[C*o+2]),o>=4&&v.setW(O,A[C*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,n=t.images[s];let l=this.textureLoader;if(n.uri){const o=i.manager.getHandler(n.uri);o!==null&&(l=o)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,i){const r=this,s=this.json,n=s.textures[e],l=s.images[t],o=(l.uri||l.bufferView)+":"+n.sampler;if(this.textureCache[o])return this.textureCache[o];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=n.name||l.name||"",c.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(c.name=l.uri);const f=(s.samplers||{})[n.sampler]||{};return c.magFilter=No[f.magFilter]||Bi,c.minFilter=No[f.minFilter]||sn,c.wrapS=zo[f.wrapS]||is,c.wrapT=zo[f.wrapT]||is,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const n=r.images[e],l=self.URL||self.webkitURL;let o=n.uri||"",u=!1;if(n.bufferView!==void 0)o=i.getDependency("bufferView",n.bufferView).then(function(h){u=!0;const f=new Blob([h],{type:n.mimeType});return o=l.createObjectURL(f),o});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(o).then(function(h){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(g){const v=new Bt(g);v.needsUpdate=!0,f(v)}),t.load(Jr.resolveURL(h,s.path),p,void 0,d)})}).then(function(h){return u===!0&&l.revokeObjectURL(o),h.userData.mimeType=n.mimeType||fd(n.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(n){if(!n)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(n=n.clone(),n.channel=i.texCoord),s.extensions[Ce.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[Ce.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const o=s.associations.get(n);n=s.extensions[Ce.KHR_TEXTURE_TRANSFORM].extendTexture(n,l),s.associations.set(n,o)}}return r!==void 0&&(n.colorSpace=r),e[t]=n,n})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,n=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+i.uuid;let o=this.cache.get(l);o||(o=new Zl,Zi.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,o.sizeAttenuation=!1,this.cache.add(l,o)),i=o}else if(e.isLine){const l="LineBasicMaterial:"+i.uuid;let o=this.cache.get(l);o||(o=new Yl,Zi.prototype.copy.call(o,i),o.color.copy(i.color),o.map=i.map,this.cache.add(l,o)),i=o}if(r||s||n){let l="ClonedMaterial:"+i.uuid+":";r&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),n&&(l+="flat-shading:");let o=this.cache.get(l);o||(o=i.clone(),s&&(o.vertexColors=!0),n&&(o.flatShading=!0),r&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(l,o),this.associations.set(o,this.associations.get(i))),i=o}e.material=i}getMaterialType(){return oa}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let n;const l={},o=s.extensions||{},u=[];if(o[Ce.KHR_MATERIALS_UNLIT]){const h=r[Ce.KHR_MATERIALS_UNLIT];n=h.getMaterialType(),u.push(h.extendParams(l,s,t))}else{const h=s.pbrMetallicRoughness||{};if(l.color=new be(1,1,1),l.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Ct),l.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",h.baseColorTexture,Mt)),l.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,l.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",h.metallicRoughnessTexture))),n=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Ou);const c=s.alphaMode||On.OPAQUE;if(c===On.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,c===On.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&n!==xr&&(u.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new oe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;l.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&n!==xr&&(u.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&n!==xr){const h=s.emissiveFactor;l.emissive=new be().setRGB(h[0],h[1],h[2],Ct)}return s.emissiveTexture!==void 0&&n!==xr&&u.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(u).then(function(){const h=new n(l);return s.name&&(h.name=s.name),Ei(h,s),t.associations.set(h,{materials:e}),s.extensions&&qi(r,h,s),h})}createUniqueName(e){const t=ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(l){return i[Ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(o){return Fo(o,l,t)})}const n=[];for(let l=0,o=e.length;l<o;l++){const u=e[l],c=hd(u),h=r[c];if(h)n.push(h.promise);else{let f;u.extensions&&u.extensions[Ce.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=Fo(new ei,u,t),r[c]={primitive:u,promise:f},n.push(f)}}return Promise.all(n)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],n=s.primitives,l=[];for(let o=0,u=n.length;o<u;o++){const c=n[o].material===void 0?ld(this.cache):this.getDependency("material",n[o].material);l.push(c)}return l.push(t.loadGeometries(n)),Promise.all(l).then(function(o){const u=o.slice(0,o.length-1),c=o[o.length-1],h=[];for(let d=0,p=c.length;d<p;d++){const g=c[d],v=n[d];let m;const x=u[d];if(v.mode===It.TRIANGLES||v.mode===It.TRIANGLE_STRIP||v.mode===It.TRIANGLE_FAN||v.mode===void 0)m=s.isSkinnedMesh===!0?new jc(g,x):new mi(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),v.mode===It.TRIANGLE_STRIP?m.geometry=Bo(m.geometry,Vl):v.mode===It.TRIANGLE_FAN&&(m.geometry=Bo(m.geometry,$n));else if(v.mode===It.LINES)m=new Zc(g,x);else if(v.mode===It.LINE_STRIP)m=new na(g,x);else if(v.mode===It.LINE_LOOP)m=new Kc(g,x);else if(v.mode===It.POINTS)m=new Jc(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(m.geometry.morphAttributes).length>0&&cd(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ei(m,s),v.extensions&&qi(r,m,v),t.assignFinalMaterial(m),h.push(m)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&qi(r,h[0],s),h[0];const f=new Pn;s.extensions&&qi(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ta(gc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Wl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ei(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),n=r,l=[],o=[];for(let u=0,c=n.length;u<c;u++){const h=n[u];if(h){l.push(h);const f=new Se;s!==null&&f.fromArray(s.array,u*16),o.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new sa(l,o)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,n=[],l=[],o=[],u=[],c=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],p=r.samplers[d.sampler],g=d.target,v=g.node,m=r.parameters!==void 0?r.parameters[p.input]:p.input,x=r.parameters!==void 0?r.parameters[p.output]:p.output;g.node!==void 0&&(n.push(this.getDependency("node",v)),l.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",x)),u.push(p),c.push(g))}return Promise.all([Promise.all(n),Promise.all(l),Promise.all(o),Promise.all(u),Promise.all(c)]).then(function(h){const f=h[0],d=h[1],p=h[2],g=h[3],v=h[4],m=[];for(let x=0,T=f.length;x<T;x++){const _=f[x],B=d[x],A=p[x],C=g[x],w=v[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const O=i._createAnimationTracks(_,B,A,C,w);if(O)for(let N=0;N<O.length;N++)m.push(O[N])}return new nh(s,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const n=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&n.traverse(function(l){if(l.isMesh)for(let o=0,u=r.weights.length;o<u;o++)l.morphTargetInfluences[o]=r.weights[o]}),n})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),n=[],l=r.children||[];for(let u=0,c=l.length;u<c;u++)n.push(i.getDependency("node",l[u]));const o=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(n),o]).then(function(u){const c=u[0],h=u[1],f=u[2];f!==null&&c.traverse(function(d){d.isSkinnedMesh&&d.bind(f,dd)});for(let d=0,p=h.length;d<p;d++)c.add(h[d]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],n=s.name?r.createUniqueName(s.name):"",l=[],o=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return o&&l.push(o),s.camera!==void 0&&l.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let c;if(s.isBone===!0?c=new Xl:u.length>1?c=new Pn:u.length===1?c=u[0]:c=new Ye,c!==u[0])for(let h=0,f=u.length;h<f;h++)c.add(u[h]);if(s.name&&(c.userData.name=s.name,c.name=n),Ei(c,s),s.extensions&&qi(i,c,s),s.matrix!==void 0){const h=new Se;h.fromArray(s.matrix),c.applyMatrix4(h)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Pn;i.name&&(s.name=r.createUniqueName(i.name)),Ei(s,i),i.extensions&&qi(t,s,i);const n=i.nodes||[],l=[];for(let o=0,u=n.length;o<u;o++)l.push(r.getDependency("node",n[o]));return Promise.all(l).then(function(o){for(let c=0,h=o.length;c<h;c++)s.add(o[c]);const u=c=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Zi||f instanceof Bt)&&h.set(f,d);return c.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const n=[],l=e.name?e.name:e.uuid,o=[];Ci[s.path]===Ci.weights?e.traverse(function(f){f.morphTargetInfluences&&o.push(f.name?f.name:f.uuid)}):o.push(l);let u;switch(Ci[s.path]){case Ci.weights:u=Ar;break;case Ci.rotation:u=Ji;break;case Ci.position:case Ci.scale:u=Cr;break;default:switch(i.itemSize){case 1:u=Ar;break;case 2:case 3:default:u=Cr;break}break}const c=r.interpolation!==void 0?od[r.interpolation]:Mr,h=this._getArrayFromAccessor(i);for(let f=0,d=o.length;f<d;f++){const p=new u(o[f]+"."+Ci[s.path],t.array,h,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),n.push(p)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Jn(t.constructor),r=new Float32Array(t.length);for(let s=0,n=t.length;s<n;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Ji?ad:bu;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function md(a,e,t){const i=e.attributes,r=new vi;if(i.POSITION!==void 0){const l=t.json.accessors[i.POSITION],o=l.min,u=l.max;if(o!==void 0&&u!==void 0){if(r.set(new I(o[0],o[1],o[2]),new I(u[0],u[1],u[2])),l.normalized){const c=Jn(Rr[l.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new I,o=new I;for(let u=0,c=s.length;u<c;u++){const h=s[u];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(o.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),o.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),o.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const g=Jn(Rr[f.componentType]);o.multiplyScalar(g)}l.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}a.boundingBox=r;const n=new Qt;r.getCenter(n.center),n.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=n}function Fo(a,e,t){const i=e.attributes,r=[];function s(n,l){return t.getDependency("accessor",n).then(function(o){a.setAttribute(l,o)})}for(const n in i){const l=Kn[n]||n.toLowerCase();l in a.attributes||r.push(s(i[n],l))}if(e.indices!==void 0&&!a.index){const n=t.getDependency("accessor",e.indices).then(function(l){a.setIndex(l)});r.push(n)}return Rt.workingColorSpace!==Ct&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Ei(a,e),md(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ud(a,e.targets,t):a})}function xu(a){a&&(a.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>Lo(t)):Lo(e.material)))}),a.scene.parent&&a.scene.parent.remove(a.scene))}function Lo(a){a.dispose();for(const e of Object.keys(a)){const t=a[e];t&&typeof t=="object"&&t.isTexture&&t.dispose()}}async function gd(){let a=[],e=[],t=new mi(new Pt(100,100));t.position.set(0,0,0),t.rotation.x=-Math.PI*.5;let i=await new ji().loadAsync(he.assetsPath+"textures/misc/grey-cartago/diff.png"),r=await new ji().loadAsync(he.assetsPath+"textures/misc/grey-cartago/disp.png"),s=await new ji().loadAsync(he.assetsPath+"textures/misc/grey-cartago/rough.png"),n=i.source.data,l=r.source.data,o=s.source.data;e.push(new wt({color:new be(.5,.5,.5),roughness:.2,anisotropy:0,map:n,roughnessMap:o,bumpMap:l,bumpStrength:4.35,uvRepeat:new oe(20,20),mapUvRepeat:new oe(20,20)})),a=[...a,...Tr(t,e.length-1)];let u=new mi(new Pt(35,15));u.position.set(20,7.25,-7.5),u.rotation.y=Math.PI*.7;let c=await new ji().loadAsync(he.assetsPath+"textures/misc/graff.png"),h=await new ji().loadAsync(he.assetsPath+"textures/misc/graff-2.png"),f=await new ji().loadAsync(he.assetsPath+"textures/misc/bump-test.png");e.push(new rt({color:new be(.9,.9,.9),map:h.source.data,bumpMap:f.source.data,bumpStrength:5,mapUvRepeat:new oe(1.3,1.3),uvRepeat:new oe(2.25,1.5)})),a=[...a,...Tr(u,e.length-1)];let d=await new _a().loadAsync(he.assetsPath+"models/horse-statue-uv.glb"),p=d.scene.children[0];p.scale.set(-2.15,2.15,2.15),p.position.set(-.5,0,-1.5),p.rotation.z=-1.4,e.push(new Kt({absorption:new be(.25,.58,.99).multiplyScalar(4.5),roughness:.03,anisotropy:0,eta:1.6})),a=[...a,...Tr(p,e.length-1)];let g=new on(2,75,75);g.translate(2,2,1),e.push(new wt({color:new be(1,1,1),map:c.source.data,roughness:.2,anisotropy:1})),a=[...a,...yt(g,e.length-1,new Se().identity())];const v=new ms;v.set(new I(-12.3,5.4,5.3),new I(-2.8,2.6,1.3)),v.movementSpeed=.15,v.aperture=.17,v.fov=.53,v.focusDistance=13.246386264701139,v.exposure=1.85;let m=new Qi;await m.fromEquirect(he.assetsPath+"envmaps/lebombo_1k.hdr"),m.scale=1,m.rotX=5.5,m.rotY=1.7;function x(){i.dispose(),r.dispose(),s.dispose(),c.dispose(),h.dispose(),f.dispose(),xu(d)}return{triangles:a,materials:e,camera:v,envmap:m,dispose:x}}async function vd(){let a=[],e=[new rt({color:new be(.95,.95,.95)}),new rt({color:new be(1,.05,.05)}),new wt({color:new be(.95,.95,.95),roughness:0,anisotropy:0}),new zi({color:new be(1,1,1),intensity:20}),new rt({color:new be(.05,1,.05)}),new Kt({absorption:new be(.095,.195,.295),roughness:.05,anisotropy:0,eta:1.5})];for(let l=0;l<5;l++){let o=8,u=new Pt(o,o);u.translate(0,0,-o*.5);let c=0;l==0&&(u.rotateY(Math.PI),u.rotateX(0)),l==1&&(u.rotateY(Math.PI),u.rotateX(Math.PI*.5)),l==2&&(u.rotateY(Math.PI),u.rotateX(-Math.PI*.5)),l==3&&(u.rotateY(Math.PI*.5),c=4),l==4&&(u.rotateY(-Math.PI*.5),c=1),a=[...a,...yt(u,c)]}const t=1;let i=new Pt(t,t);i.rotateX(Math.PI*.5),i.translate(0,3.9,0),a=[...a,...yt(i,3)];let r=new mi(new on(1,25,25));r.scale.set(2,2,2),r.position.set(0,0,1),a=[...a,...Tr(r,0)];const s=new ms;s.set(new I(0,2,-10),new I(0,0,0)),s.movementSpeed=.15,s.aperture=0,s.fov=.69,s.focusDistance=9.53,s.exposure=1.85;function n(){}return{triangles:a,materials:e,camera:s,dispose:n}}const wu=Math.sqrt(3),yd=.5*(wu-1),Xr=(3-wu)/6,ko=a=>Math.floor(a)|0,Oo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function bd(a=Math.random){const e=xd(a),t=new Float64Array(e).map(r=>Oo[r%12*2]),i=new Float64Array(e).map(r=>Oo[r%12*2+1]);return function(s,n){let l=0,o=0,u=0;const c=(s+n)*yd,h=ko(s+c),f=ko(n+c),d=(h+f)*Xr,p=h-d,g=f-d,v=s-p,m=n-g;let x,T;v>m?(x=1,T=0):(x=0,T=1);const _=v-x+Xr,B=m-T+Xr,A=v-1+2*Xr,C=m-1+2*Xr,w=h&255,O=f&255;let N=.5-v*v-m*m;if(N>=0){const R=w+e[O],z=t[R],j=i[R];N*=N,l=N*N*(z*v+j*m)}let P=.5-_*_-B*B;if(P>=0){const R=w+x+e[O+T],z=t[R],j=i[R];P*=P,o=P*P*(z*_+j*B)}let k=.5-A*A-C*C;if(k>=0){const R=w+1+e[O+1],z=t[R],j=i[R];k*=k,u=k*k*(z*A+j*C)}return 70*(l+o+u)}}function xd(a){const t=new Uint8Array(512);for(let i=0;i<512/2;i++)t[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(a()*(256-i)),s=t[i];t[i]=t[r],t[r]=s}for(let i=256;i<512;i++)t[i]=t[i-256];return t}var _u={exports:{}};(function(a,e){(function(t,i){a.exports=i()})(Oi,function(){return t.importState=function(r){var s=new t;return s.importState(r),s},t;function t(){return function(r){var s=0,n=0,l=0,o=1;r.length==0&&(r=[+new Date]);var u=i();s=u(" "),n=u(" "),l=u(" ");for(var c=0;c<r.length;c++)s-=u(r[c]),s<0&&(s+=1),n-=u(r[c]),n<0&&(n+=1),l-=u(r[c]),l<0&&(l+=1);u=null;var h=function(){var f=2091639*s+o*23283064365386963e-26;return s=n,n=l,l=f-(o=f|0)};return h.next=h,h.uint32=function(){return h()*4294967296},h.fract53=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=r,h.exportState=function(){return[s,n,l,o]},h.importState=function(f){s=+f[0]||0,n=+f[1]||0,l=+f[2]||0,o=+f[3]||0},h}(Array.prototype.slice.call(arguments))}function i(){var r=4022871197,s=function(n){n=n.toString();for(var l=0;l<n.length;l++){r+=n.charCodeAt(l);var o=.02519603282416938*r;r=o>>>0,o-=r,o*=r,r=o>>>0,o-=r,r+=o*4294967296}return(r>>>0)*23283064365386963e-26};return s.version="Mash 0.9",s}})})(_u);var wd=_u.exports;const _d=pu(wd),Sd=_d("seed"),Uo=bd(Sd);st.use("test-string");st.float;async function Td(){let a=[],e=[new rt({color:new be(.95,.95,.95)}),new rt({color:new be(1,.05,.05)}),new wt({color:new be(.95,.95,.95),roughness:.25,anisotropy:0}),new zi({color:new be(1,.7,.5),intensity:20}),new rt({color:new be(.05,1,.05)}),new Kt({absorption:new be(.35,.68,.99).multiplyScalar(1.85),roughness:.85,anisotropy:0,eta:1.6}),new wt({color:new be(.5,.5,.5),roughness:.45,anisotropy:0})],t=-2,i=100,r=6;a.push(new Fi(new I(-1,-3,-1).multiply(new I(i,1,i)).add(new I(0,t,0)),new I(-1,-3,1).multiply(new I(i,1,i)).add(new I(0,t,0)),new I(1,-3,1).multiply(new I(i,1,i)).add(new I(0,t,0)),r)),a.push(new Fi(new I(1,-3,1).multiply(new I(i,1,i)).add(new I(0,t,0)),new I(-1,-3,-1).multiply(new I(i,1,i)).add(new I(0,t,0)),new I(1,-3,-1).multiply(new I(i,1,i)).add(new I(0,t,0)),r));for(let c=-15;c<=20;c++)for(let h=-5;h<=50;h++){if((h>0&&h%3===0?1:0)<99999){let m=(Uo(c*.025,h*.2+3.468195)*.5+.5)*.7+.3;e.push(new rt({color:new be(m,m,m)}))}else{let m=Math.pow(Math.random(),2)*.9+.1,x=.001;e.push(new wt({color:new be(m,m,m),roughness:x,anisotropy:0}))}let d=.4,p=h%2===0?0:d,g=Uo(c*.03+3,h*.03+.35)*8+8,v=new aa(d,d,g,6,1,!1,0);v.translate(d*1.9*c+p-2,-3+g/2+t,d*1.65*h),a=[...a,...yt(v,e.length-1)]}let s=await new _a().loadAsync(he.assetsPath+"models/horse-statue.glb"),n=s.scene.children[0];n.scale.set(-2.7,2.7,2.7),n.position.set(.3,-1.25+t,1.5),n.rotation.z=.4,a=[...a,...Tr(n,5)];let l=new Qi;await l.fromEquirect(he.assetsPath+"envmaps/large_corridor_1k.hdr",300),l.scale=.9,l.rotX=5.2,l.rotY=.5;const o=new ms;o.set(new I(0,4,-10),new I(0,0,0)),o.movementSpeed=.15,o.fov=.69,o.aperture=.25,o.focusDistance=11.185065325218906,o.exposure=1.85;function u(){xu(s)}return{triangles:a,materials:e,envmap:l,camera:o,dispose:u}}st.use("test-string");st.float;async function Rd(){let a=.55,e=[],t=[new rt({color:new be(.95,.95,.95).multiplyScalar(a),roughness:1}),new rt({color:new be(1,.05,.05).multiplyScalar(a),roughness:1}),new wt({color:new be(.75,.75,.75),roughness:.25,anisotropy:0}),new zi({color:new be(1,1,1),intensity:2e3}),new rt({color:new be(.05,1,.05).multiplyScalar(a),roughness:1}),new rt({color:new be(.15,.15,.15),roughness:1}),new Kt({absorption:new be(.35,.68,.99).multiplyScalar(.5),roughness:.05,anisotropy:0,eta:1.6})];for(let p=0;p<5;p++){let g=8,v=new Pt(g,g);v.translate(0,0,-g*.5);let m=0;p==0&&(v.rotateY(Math.PI),v.rotateX(0)),p==1&&(v.rotateY(Math.PI),v.rotateX(Math.PI*.5)),p==2&&(v.rotateY(Math.PI),v.rotateX(-Math.PI*.5)),p==3&&(v.rotateY(Math.PI*.5),m=4),p==4&&(v.rotateY(-Math.PI*.5),m=1),e=[...e,...yt(v,m)]}let r=(await new _a().loadAsync(he.assetsPath+"models/stanford-xyz-dragon-low-res.glb")).scene.children[0];r.scale.set(.0425,.0425,.0425),r.position.set(-.2,0,1),r.rotation.z=-.5,t.push(new rt({color:new be(.975,.975,.975),roughness:1})),e=[...e,...Tr(r,t.length-1)];let s=4;for(let p=0;p<s;p++){let g=8,m=-4+8/(s+1)*(p+1),x=new Pt(g,g);x.rotateY(Math.PI*.5),x.translate(m,0,0)}for(let p=0;p<s;p++){let g=8,m=-4+8/(s+1)*(p+1),x=new Pt(g,g);x.rotateX(Math.PI*.5),x.translate(0,m,0)}for(let p=-30;p<=30;p++)for(let g=-30;g<=30;g++){let v=new I(p,g).multiplyScalar(.125);const m=new be,x=(p*.0675+g*.015+.5)%1;m.setHSL(x,1,.5),m.convertSRGBToLinear().convertSRGBToLinear().convertSRGBToLinear();let B=137,A=new zi({color:m,intensity:B});t.push(A);let C=t.length-1,w=.065,O=new Pt(w,w);O.rotateX(Math.PI*.5),O.translate(v.x,3,v.y),e.push(...yt(O,C))}let n=2.5,l=3.925,o=new Pt(l,8);o.rotateX(Math.PI*.5),o.translate(-l*.5-(4-l),n,0),e=[...e,...yt(o,0)],o.translate(0,.001,0),e=[...e,...yt(o,0)];let u=new Pt(l,8);u.rotateX(Math.PI*.5),u.translate(l*.5+(4-l),n,0),e=[...e,...yt(u,0)],u.translate(0,.001,0),e=[...e,...yt(u,0)];let c=new en(6,.175,6);c.translate(.2,-1.8,1.9),t.push(new wt({color:new be(.65,.65,.65),roughness:.25,anisotropy:0})),e=[...e,...yt(c,t.length-1)];let h=new en(1.3,3,1.3);h.translate(.1,-3.3,1.35),e=[...e,...yt(h,0)];const f=new ms;f.set(new I(0,2,-10),new I(0,0,0)),f.movementSpeed=.15,f.aperture=0,f.fov=.69,f.focusDistance=9.53,f.exposure=1.85;function d(){}return{triangles:e,materials:t,camera:f,dispose:d}}st.use("test-string");st.float;st.use("test-string");st.float;const Md={"C2 features":gd,"ReSTIR stress test":Rd,"Cornell sphere":vd,"Envmap + multiscatter dielectric":Td};async function Ad(a){return Md[a]()}const Cd=`
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
`;class Ed{constructor(e,t){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"bindGroup0");S(this,"vertexBuffer");S(this,"renderModeBuffer");S(this,"depthStencilAttachment",null);S(this,"scene");S(this,"sceneUpdateRequired",!1);S(this,"vertexCount",0);S(this,"renderMode","normal");this.context=e;let i=he.device;this.device=i;const r=i.createShaderModule({label:"preview segment shader",code:Cd});this.pipeline=i.createRenderPipeline({label:"preview segment pipeline",layout:"auto",vertex:{module:r,buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}]}],entryPoint:"vs"},fragment:{module:r,entryPoint:"fs",targets:[{format:t}]},depthStencil:{format:"depth24plus-stencil8",depthWriteEnabled:!0,depthCompare:"less-equal"},primitive:{cullMode:"none"}}),this.renderModeBuffer=i.createBuffer({label:"render mode",size:1*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}createDepthBufferResources(e){let i={size:{width:e.x,height:e.y,depthOrArrayLayers:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.RENDER_ATTACHMENT},s=this.device.createTexture(i).createView();this.depthStencilAttachment={view:s,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store",stencilLoadOp:"clear",stencilStoreOp:"discard"}}resize(e){this.createDepthBufferResources(e)}updateScene(e){this.scene=e,this.sceneUpdateRequired=!0,this.bindGroup0=this.device.createBindGroup({label:"preview bindgroup - camera matrices",layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.scene.camera.cameraMatrixUniformBuffer}},{binding:1,resource:{buffer:this.scene.camera.projectionMatrixUniformBuffer}},{binding:2,resource:{buffer:this.scene.camera.cameraPositionUniformBuffer}},{binding:3,resource:{buffer:this.renderModeBuffer}}]})}processScene(){this.vertexCount=this.scene.triangles.length*3;let e=new Float32Array(this.vertexCount*6);for(let t=0;t<this.scene.triangles.length;t++){let i=this.scene.triangles[t],r=[i.v0,i.v1,i.v2];for(let s=0;s<3;s++)e[(t*3+s)*6+0]=r[s].x,e[(t*3+s)*6+1]=r[s].y,e[(t*3+s)*6+2]=r[s].z,e[(t*3+s)*6+3]=i["norm"+s].x,e[(t*3+s)*6+4]=i["norm"+s].y,e[(t*3+s)*6+5]=i["norm"+s].z}this.vertexBuffer=this.device.createBuffer({label:"preview segment vertex",size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,e),this.sceneUpdateRequired=!1}setMode(e){e!=this.renderMode&&(this.renderMode=e,this.device.queue.writeBuffer(this.renderModeBuffer,0,new Float32Array([this.renderMode=="normal"?0:1])))}render(){if(this.sceneUpdateRequired&&this.processScene(),!this.depthStencilAttachment)throw new Error("missing depth stencil attachment");let e={label:"preview segment renderPass",colorAttachments:[{clearValue:[.3,.3,.3,1],loadOp:"clear",storeOp:"store",view:this.context.getCurrentTexture().createView()}],depthStencilAttachment:this.depthStencilAttachment};const t=this.device.createCommandEncoder({label:"preview segment encoder"}),i=t.beginRenderPass(e);i.setPipeline(this.pipeline),i.setBindGroup(0,this.bindGroup0),i.setVertexBuffer(0,this.vertexBuffer),i.draw(this.vertexCount),i.end();const r=t.finish();this.device.queue.submit([r])}}function Vo(){return new Promise(a=>{setTimeout(a,10)})}async function Id(a){var t;let e="Your browser does not support WebGPU or one of the required features.";try{const i=await((t=navigator.gpu)==null?void 0:t.requestAdapter());if(!i)throw e="WebGPU not available: No adapter found.",new Error(e);iu.set({"Max Texture Dimension 1D":i.limits.maxTextureDimension1D,"Max Texture Dimension 2D":i.limits.maxTextureDimension2D,"Max Texture Dimension 3D":i.limits.maxTextureDimension3D,"Max Texture Array Layers":i.limits.maxTextureArrayLayers,"Max Bind Groups":i.limits.maxBindGroups,"Max Dynamic Uniform Buffers Per Pipeline Layout":i.limits.maxDynamicUniformBuffersPerPipelineLayout,"Max Dynamic Storage Buffers Per Pipeline Layout":i.limits.maxDynamicStorageBuffersPerPipelineLayout,"Max Sampled Textures Per Shader Stage":i.limits.maxSampledTexturesPerShaderStage,"Max Samplers Per Shader Stage":i.limits.maxSamplersPerShaderStage,"Max Storage Buffers Per Shader Stage":i.limits.maxStorageBuffersPerShaderStage,"Max Storage Textures Per Shader Stage":i.limits.maxStorageTexturesPerShaderStage,"Max Uniform Buffers Per Shader Stage":i.limits.maxUniformBuffersPerShaderStage,"Max Uniform Buffer Binding Size (MB)":i.limits.maxUniformBufferBindingSize/(1024*1024),"Max Storage Buffer Binding Size (MB)":i.limits.maxStorageBufferBindingSize/(1024*1024),"Max Vertex Buffers":i.limits.maxVertexBuffers,"Max Vertex Attributes":i.limits.maxVertexAttributes,"Max Vertex Buffer Array Stride":i.limits.maxVertexBufferArrayStride,"Max Compute Workgroup Storage Size":i.limits.maxComputeWorkgroupStorageSize,"Max Compute Invocations Per Workgroup":i.limits.maxComputeInvocationsPerWorkgroup,"Max Compute Workgroup Size X":i.limits.maxComputeWorkgroupSizeX,"Max Compute Workgroup Size Y":i.limits.maxComputeWorkgroupSizeY,"Max Compute Workgroup Size Z":i.limits.maxComputeWorkgroupSizeZ,"Max Compute Workgroups Per Dimension":i.limits.maxComputeWorkgroupsPerDimension,"Max Buffer Size (MB)":i.limits.maxBufferSize/(1024*1024)});const r=i.features.has("timestamp-query"),s={maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize},n=await i.requestDevice({requiredLimits:s,requiredFeatures:[...r?["timestamp-query"]:[],"float32-filterable"]}),l=a.getContext("webgpu");if(!n)throw e="Failed to get WebGPU device. The requested limits or features might not be supported, or the GPU is unavailable.",new Error(e);if(!l)throw e="Failed to get WebGPU context from canvas.",new Error(e);return{device:n,context:l,adapter:i}}catch(i){let r=e;throw i instanceof Error?r=i.message:typeof i=="string"&&(r=i),console.error("WebGPU Initialization Error:",r,i),da.set(r),new Error(r)}}const Su=`
// this struct will be saved in the reservoir
struct PathInfo {
  F: vec3f,
  // this will be used to make sure the path-shift selects the correct first bounce
  // remember that after the first SR reuse, we may end up using a seed that is different
  // from the seed that generated the first bounce hit. And the pixel-shift always have to land
  // on the original first bounce hit to be useable in the Generalized Balance Heuristic
  firstVertexSeed: u32,
  seed: u32,
  bounceCount: u32,
  /* 
    bit 0: path-end sampled by Light boolean
    bit 1: path-end sampled by BRDF boolean
    bit 2: path ends by escape boolean
    bit 3: path reconnects / doesn't reconnect boolean
    in theory, the remaining bits could contain the bounce count
    bit 16 onward: reconnection lobes x, y
  */
  flags: u32,
  reconnectionBounce: u32,
  jacobian: vec2f, 
  // these are the barycentric coordinates of the triangle, not the uvs.
  // to define a point within a triangle, we can't use texture uvs (they could be scaled/repeated)
  reconnectionBarycentrics: vec2f,  
  reconnectionRadiance: vec3f,
  radianceDirection: vec3f,
  reconnectionTriangleIndex: i32,
}

struct Reservoir {
  Y: PathInfo,
  Gbuffer: vec4f, // normal.xyz, depth at first bounce. depth = -1 if no intersection was found
  Wy: f32,  // probability chain
  c: f32,
  wSum: f32,
  isNull: f32,
  rad: vec3f,
  packedDomain: u32,
}

// this struct does not have to be saved in the reservoir,
// hence why we're creating a separate struct
struct PathSampleInfo {
  // some of these might be unnecessary now that I'm always reconnecting at xkm1
  wasPrevVertexRough: bool,
  prevVertexPosition: vec3f,
  prevVertexBrdf: vec3f,
  brdfPdfPrevVertex: f32,
  lobePdfPrevVertex: f32,
  reconnectionVertexIndex: i32, // -1 signals no reconnection
  postfixThroughput: vec3f,
  prevLobeIndex: i32,
}

struct RandomReplayResult {
  valid: u32,
  pHat: vec3f,
  shouldTerminate: bool,
  jacobian: vec2f,
}

struct PathFlags {
  lightSampled: bool,
  brdfSampled: bool,
  endsInEnvmap: bool,
  reconnects: bool,
  reconnectionLobes: vec2u,
}
`,Pd=`
@group(0) @binding(0) var<storage> reservoirBuffer1: array<Reservoir>;
@group(0) @binding(1) var<storage, read_write> reservoirBuffer2: array<Reservoir>;
@group(0) @binding(2) var<storage, read_write> samplesCount: array<u32>;
@group(0) @binding(3) var<storage, read_write> radianceInput: array<vec3f>;
@group(0) @binding(4) var<uniform> canvasSize: vec2u;

${Su}

@compute @workgroup_size(8, 8) fn compute(
  @builtin(global_invocation_id) gid: vec3<u32>,
  @builtin(local_invocation_id) lid: vec3<u32>,
) {
  let tid = vec3u(gid.x, gid.y, 0);
  if (tid.x >= canvasSize.x || tid.y >= canvasSize.y) { return; }

  let idx = tid.y * canvasSize.x + tid.x;

  let reservoir = reservoirBuffer1[idx];
  // copy the content to the other reservoir buffer, so they stay in sync for the next iteration of
  // RestirPTShader, which will always use only the first reservoir buffer
  reservoirBuffer2[idx] = reservoir;

  radianceInput[idx] += reservoir.rad;
  samplesCount[idx] += 1;
}
`;class Bd{constructor(){S(this,"device");S(this,"pipeline");S(this,"bindGroup0",null);let e=he.device;this.device=e;const t=e.createShaderModule({label:"reservoir to radiance shader",code:Pd}),i=e.createPipelineLayout({bindGroupLayouts:[Xt(e,["read-only-storage","storage","storage","storage","uniform"])]});this.pipeline=e.createComputePipeline({label:"reservoir to radiance pipeline",layout:i,compute:{module:t,entryPoint:"compute"}})}setBuffers(e,t,i,r,s){this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e,size:e.size}},{binding:1,resource:{buffer:t,size:t.size}},{binding:2,resource:{buffer:r,size:r.size}},{binding:3,resource:{buffer:i,size:i.size}},{binding:4,resource:{buffer:s}}]})}addPass(e,t){if(!this.bindGroup0)throw new Error("undefined render bind group");const i=new oe(Math.ceil(t.x/8),Math.ceil(t.y/8)),r={label:"reservoir to radiance pass"},s=e.beginComputePass(r);s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup0),s.dispatchWorkgroups(i.x,i.y),s.end()}}let Dd=`
fn neePathConstruction(
  lightDirectionSample: LightDirectionSample,
  brdfDirectionSample: BrdfDirectionSample,
  ires: BVHIntersectionResult, 
  reservoir: ptr<function, Reservoir>,
  throughput: ptr<function, vec3f>, 
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  lastBrdfMis: ptr<function, f32>, 
  lobeIndex: u32,
  isRough: bool,
  materialType: u32,
  N: vec3f,
  tid: vec3u,
) {
  let lightPointSample = lightDirectionSample.ls;
  let lightSampleRadiance = lightPointSample.radiance;

  // if we haven't found a reconnection vertex, 
  // try to create and save a NEE path, if it's not possible
  // create a pure random-replay path
  if ((*psi).reconnectionVertexIndex == -1) {
    var mi = lightDirectionSample.mis;
    let pHat = lightSampleRadiance * (1.0 / lightDirectionSample.pdf) * *throughput * 
               lightDirectionSample.brdf * cosTerm(N, lightDirectionSample.dir, materialType);
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;

    let w_vec = lightPointSample.hitPoint - ires.hitPoint;

    // since we're creating the reconnection vertex here, we also have to check the distance condition
    var isTooShort = isSegmentTooShortForReconnection(w_vec);
    let isEnvmap = lightPointSample.isEnvmap;
    if (isEnvmap) {
      isTooShort = false;
    }

    let isConnectible = !isTooShort && isRough; 

    if (isConnectible) {
      let w_km1 = normalize(w_vec);
      let probability_of_sampling_lobe = 1.0;
      let p = lightDirectionSample.pdf * probability_of_sampling_lobe;
      var jacobian = vec2f(p, abs(dot(w_km1, lightPointSample.geometricNormal)) / dot(w_vec, w_vec));
  
      if (isEnvmap) {
        jacobian.y = 1.0;  // explanation on envmapJacobian.md
      }

      var pathFlags = PathFlags();
      pathFlags.lightSampled = true;
      pathFlags.brdfSampled = false;
      pathFlags.endsInEnvmap = isEnvmap;
      pathFlags.reconnects = true;
      pathFlags.reconnectionLobes = vec2u(lobeIndex, u32(${_e.EMISSIVE}));

      let pathInfo = PathInfo(
        pHat * mi,
        pi.seed,
        pi.seed,
        u32(debugInfo.bounce + 1),
        // set flags to "path ends by NEE" and "reconnects"
        packPathFlags(pathFlags), 
        u32(debugInfo.bounce + 1),        // reconnects at xk, which is the light vertex
        jacobian,
        lightPointSample.barycentrics, 
        lightPointSample.radiance, 
        lightDirectionSample.dir,  // used in rrPathConstruction when hitting envmaps
        lightPointSample.triangleIndex, 
      );
    
      // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
      updateReservoir(reservoir, pathInfo, wi);
    } else {
      var pathFlags = PathFlags();
      pathFlags.lightSampled = true;
      pathFlags.brdfSampled = false;
      pathFlags.endsInEnvmap = isEnvmap;
      pathFlags.reconnects = false;
      pathFlags.reconnectionLobes = vec2u(0, 0);

      // non reconnectible path, we'll do pure Random-replay
      let pathInfo = PathInfo(
        pHat * mi,
        pi.seed,
        pi.seed,
        u32(debugInfo.bounce + 1),
        // set flags to "path ends by NEE" and "doesn't reconnect"
        packPathFlags(pathFlags), 
        0,        
        vec2f(1.0),
        vec2f(0), 
        vec3f(0), 
        vec3f(0),
        -1, 
      );
    
      // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
      updateReservoir(reservoir, pathInfo, wi);
    }
  }

  // if this vertex is a reconnection vertex, use the light-sample path as a candidate. 
  // Also, prepare the jacobian for the possible brdf-path candidates that might arrive 
  // at the next bounce
  if (psi.reconnectionVertexIndex == debugInfo.bounce) {
    var mi = lightDirectionSample.mis;
    let pHat = lightSampleRadiance * (1.0 / lightDirectionSample.pdf) * *throughput * 
               lightDirectionSample.brdf * cosTerm(N, lightDirectionSample.dir, materialType);
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;

    let isEnvmap = lightPointSample.isEnvmap;

    let w_vec = psi.prevVertexPosition - ires.hitPoint;
    let w_km1 = normalize(w_vec);
    let probability_of_sampling_lobe = 1.0;
    let p = (lightDirectionSample.pdf * probability_of_sampling_lobe) * 
            ((*psi).lobePdfPrevVertex * (*psi).brdfPdfPrevVertex);
    let jacobian = vec2f(p, abs(dot(w_km1, ires.triangle.geometricNormal)) / dot(w_vec, w_vec));
  
    // the reason why we're saving a copy is explained in shaders/integrators/doc2.md
    var piCopy = *pi;
    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce + 1);
    // v v v v v v v saved in another function v v v v v v v 
    // pi.reconnectionBounce = u32(debugInfo.bounce); // reconnects at xk, xk+1 is the light vertex
    // pi.reconnectionTriangleIndex = ires.triangleIndex; 
    // pi.reconnectionBarycentrics = ires.barycentrics; 
    
    var pathFlags = unpackPathFlags(piCopy.flags); // we need to unpack since reconnectionLobes are already stored inside piCopy.flags
    pathFlags.lightSampled = true;
    pathFlags.brdfSampled = false;
    pathFlags.endsInEnvmap = isEnvmap;
    pathFlags.reconnects = true;
    piCopy.flags = packPathFlags(pathFlags); // set flags to "path ends by NEE" and "reconnects"

    piCopy.reconnectionRadiance = lightPointSample.radiance; 
    piCopy.radianceDirection = lightDirectionSample.dir;
    piCopy.jacobian = jacobian;
    
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }

  // if we have already found a reconnection vertex previously
  if (
    (*psi).reconnectionVertexIndex != -1 && 
    (*psi).reconnectionVertexIndex < debugInfo.bounce
  ) {
    let isEnvmap = lightPointSample.isEnvmap;
    var mi = lightDirectionSample.mis;
    let lsThroughput = (lightDirectionSample.brdf / lightDirectionSample.pdf) *
      cosTerm(N, lightDirectionSample.dir, materialType);
    let pHat = lightSampleRadiance * lsThroughput * *throughput;
    
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;

    var piCopy = *pi;
    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce + 1);
    // for this type of path ending, we have to multiply the reconnectionRadiance by mi
    piCopy.reconnectionRadiance = lightSampleRadiance * psi.postfixThroughput * lsThroughput * mi;

    var pathFlags = unpackPathFlags(piCopy.flags); // we need to unpack since reconnectionLobes are already stored inside piCopy.flags
    pathFlags.endsInEnvmap = isEnvmap;
    piCopy.flags = packPathFlags(pathFlags); // set flags to "path ends by NEE" and "reconnects"
      
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }
}

fn emissiveSurfacePathConstruction(
  brdfDirectionSample: BrdfDirectionSample,
  ires: BVHIntersectionResult, 
  reservoir: ptr<function, Reservoir>,
  throughput: ptr<function, vec3f>, 
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  lastBrdfMis: ptr<function, f32>, 
  lobeIndex: u32,
  N: vec3f,
  emissive: vec3f,
  tid: vec3u,
) {
  // directly hitting light source at bounce 0
  if (debugInfo.bounce == 0) {
    let mi = *lastBrdfMis; // will be 1 in this case
    let pHat = emissive * *throughput; // throughput will be 1 in this case
    let wi = mi * length(pHat);

    var pathFlags = PathFlags();
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = false;
    pathFlags.reconnects = false;
    pathFlags.reconnectionLobes = vec2u(0, 0);

    let pathInfo = PathInfo(
      pHat * mi,
      pi.seed,
      pi.seed,
      u32(debugInfo.bounce),
      packPathFlags(pathFlags), // set flags to "path ends by NEE" and "doesn't reconnect"
      0,        
      vec2f(1.0),
      vec2f(0.0), 
      vec3f(0.0), 
      vec3f(0),
      -1, 
    );
    
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, pathInfo, wi);
  }

  // if we haven't found a reconnection vertex, (which also means this vertex couldn't  
  // be used as a reconnection vertex) then save a pure RR path   
  if ((*psi).reconnectionVertexIndex == -1) {
    let mi = *lastBrdfMis; // will be 1 in this case
    let pHat = emissive * *throughput; // throughput will be 1 in this case
    let wi = mi * length(pHat);

    var pathFlags = PathFlags();
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = false;
    pathFlags.reconnects = false;
    pathFlags.reconnectionLobes = vec2u(0, 0);

    // non reconnectible path, we'll do pure Random-replay
    let pathInfo = PathInfo(
      pHat * mi,
      pi.seed,
      pi.seed,
      u32(debugInfo.bounce),
      // set flags to "path ends by BRDF" and "doesn't reconnect"
      packPathFlags(pathFlags), 
      0,        
      vec2f(1.0),
      vec2f(0), 
      vec3f(0), 
      vec3f(0),
      -1, 
    );
  
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, pathInfo, wi);
  }

  // if this vertex is a reconnection vertex, and we haven't found another one sooner,
  // use this path as a candidate, and save reconnection information
  // for potential future candidates
  if (psi.reconnectionVertexIndex == debugInfo.bounce) {
    let mi = *lastBrdfMis;
    let pHat = emissive * *throughput;
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;

    // ******************* TODO ******************
    // ******************* TODO ******************
    // I think this direction is wrong? but the fact that we're doing
    // the abs in the jacobian hides it?
    // ******************* TODO ******************
    // ******************* TODO ******************
    let w_vec = ires.hitPoint - psi.prevVertexPosition;
    let w_km1 = normalize(w_vec);
    let p = psi.brdfPdfPrevVertex * psi.lobePdfPrevVertex;
    var jacobian = vec2f(
      p, 
      abs(dot(w_km1, ires.triangle.geometricNormal)) / dot(w_vec, w_vec)
    );

    // the reason why we're saving a copy is explained in shaders/integrators/doc2.md
    var piCopy = *pi;
    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce);
    // v v v v v v v saved in another function v v v v v v v 
    // pi.reconnectionBounce = u32(debugInfo.bounce); // reconnects at xk, xk+1 is the light vertex
    // pi.reconnectionTriangleIndex = ires.triangleIndex; 
    // pi.reconnectionBarycentrics = ires.barycentrics;
    // these last elements will be updated by Emissive for the brdf
    // path
    var pathFlags = unpackPathFlags(piCopy.flags); // we need to unpack since reconnectionLobes are already stored inside piCopy.flags
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = false;
    pathFlags.reconnects = true;
    piCopy.flags = packPathFlags(pathFlags); // set flags to "path ends by BRDF" and "reconnects"

    piCopy.reconnectionRadiance = emissive; 
    piCopy.jacobian = jacobian;

    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }

  // if the previous vertex is the reconnection vertex
  if (
    (*psi).reconnectionVertexIndex != -1 &&
    (*psi).reconnectionVertexIndex == (debugInfo.bounce-1)
  ) {
    var mi = *lastBrdfMis;
    let pHat = emissive * *throughput;

    var piCopy = *pi;
    // the jacobian has already been calculated in the previous vertex, we don't need to add to it here.
    // the previous bounce handled the rest
    
    var pathFlags = unpackPathFlags(piCopy.flags); // we need to unpack since reconnectionLobes are already stored inside piCopy.flags
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = false;
    pathFlags.reconnects = true;
    piCopy.flags = packPathFlags(pathFlags);

    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce);
    piCopy.reconnectionRadiance = emissive;
    
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;
      
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }

  // if we have already found a reconnection vertex, at least 2 bounces away from this light source
  if (
    (*psi).reconnectionVertexIndex != -1 && 
    (*psi).reconnectionVertexIndex < (debugInfo.bounce - 1) 
  ) {
    var mi = *lastBrdfMis;
    let pHat = emissive * *throughput;
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;
      
    var piCopy = *pi;
    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce);
    // for this type of path ending, we have to multiply the reconnectionRadiance by mi
    piCopy.reconnectionRadiance = psi.postfixThroughput * emissive * mi;

    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }
}

fn envmapPathConstruction(
  reservoir: ptr<function, Reservoir>,
  throughput: ptr<function, vec3f>, 
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  lastBrdfMis: ptr<function, f32>, 
  emissive: vec3f,
) {
  // if we haven't found a reconnection vertex, (we'll also assume we can't use the escaped path  
  // as a reconnection vertex) then save a pure RR path   
  if ((*psi).reconnectionVertexIndex == -1) {
    let mi = *lastBrdfMis; // will be 1 in this case
    let pHat = emissive * *throughput; // throughput will be 1 in this case
    let wi = mi * length(pHat);

    var pathFlags = PathFlags();
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = true;
    pathFlags.reconnects = false;
    pathFlags.reconnectionLobes = vec2u(0, 0);

    // non reconnectible path, we'll do pure Random-replay
    let pathInfo = PathInfo(
      pHat * mi,
      pi.seed,
      pi.seed,
      u32(debugInfo.bounce),
      // set flags to "path ends by BRDF" and "doesn't reconnect"
      packPathFlags(pathFlags), 
      0,        
      vec2f(1.0),
      vec2f(0), 
      vec3f(0), 
      vec3f(0),
      -1, 
    );
  
    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, pathInfo, wi);
  }

  // if the previous vertex is the reconnection vertex
  if (
    (*psi).reconnectionVertexIndex != -1 &&
    (*psi).reconnectionVertexIndex == (debugInfo.bounce-1)
  ) {
    var mi = *lastBrdfMis;
    let pHat = emissive * *throughput;

    var piCopy = *pi;

    var pathFlags = unpackPathFlags(piCopy.flags); // we need to unpack since reconnectionLobes are already stored inside piCopy.flags
    pathFlags.endsInEnvmap = true;   
    piCopy.flags = packPathFlags(pathFlags);

    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce);
    piCopy.reconnectionRadiance = emissive;
    // the jacobian has already been calculated in the previous vertex, we don't need to add to it here.
    // the previous bounce handled the rest

    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;

    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  }

  // if we have already found a reconnection vertex, at least 2 bounces away from this light source
  if (
    (*psi).reconnectionVertexIndex != -1 && 
    (*psi).reconnectionVertexIndex < (debugInfo.bounce - 1) 
  ) {
    var mi = *lastBrdfMis;
    let pHat = emissive * *throughput;
    let Wxi = 1.0;
    let wi = mi * length(pHat) * Wxi;
      
    var piCopy = *pi;
    piCopy.F = pHat * mi;
    piCopy.bounceCount = u32(debugInfo.bounce);
    // for this type of path ending, we have to multiply the reconnectionRadiance by mi
    piCopy.reconnectionRadiance = psi.postfixThroughput * emissive * mi;

    // updateReservoir uses a different set of random numbers, exclusive for ReSTIR
    updateReservoir(reservoir, piCopy, wi);
  } 
}

fn setReconnectionVertex(
  brdfDirectionSample: BrdfDirectionSample,
  ires: BVHIntersectionResult, 
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  lobeIndex: u32,
  isRough: bool,
  tid: vec3u,
) {
  let isTooShort = isSegmentTooShortForReconnection(psi.prevVertexPosition - ires.hitPoint);
  let isConnectible = psi.wasPrevVertexRough && isRough && !isTooShort;
  
  // if this is a reconnection vertex, we'll have to prepare
  // the jacobian such that successive bounces can use it 
  // while saving new pathinfos in the reservoir
  if (psi.reconnectionVertexIndex == -1 && isConnectible) {
    let w_vec = psi.prevVertexPosition - ires.hitPoint;
    let w_km1 = normalize(w_vec);

    pi.reconnectionBounce = u32(debugInfo.bounce); // reconnects at xk, xk+1 is the light vertex
    pi.reconnectionTriangleIndex = ires.triangleIndex; 
    pi.reconnectionBarycentrics = ires.barycentrics;
    pi.jacobian = vec2f(
      (brdfDirectionSample.pdf * 1.0) * 
      ((*psi).lobePdfPrevVertex * (*psi).brdfPdfPrevVertex), 
      abs(dot(w_km1, ires.triangle.geometricNormal)) / dot(w_vec, w_vec)
    );
    pi.reconnectionRadiance = vec3f(0);
    pi.radianceDirection = brdfDirectionSample.dir;

    var pathFlags = PathFlags();
    pathFlags.lightSampled = false;
    pathFlags.brdfSampled = true;
    pathFlags.endsInEnvmap = false;
    pathFlags.reconnects = true;
    pathFlags.reconnectionLobes = vec2u(u32(psi.prevLobeIndex), lobeIndex);
    pi.flags = packPathFlags(pathFlags);

    psi.reconnectionVertexIndex = debugInfo.bounce;
  }
}
`,Nd=`
fn generalizedBalanceHeuristicPairwiseMIS_Canonical(
  X: PathInfo, 
  Y: PathInfo, 
  Xconfidence: f32, 
  idx: i32, 
  candidates: array<Reservoir, MAX_SR_CANDIDATES_COUNT>,
  randomReplaysFromCanonicalToCandidate: array<RandomReplayResult, MAX_SR_CANDIDATES_COUNT>
) -> f32 {
  var M = config.RESTIR_SR_CANDIDATES;
  if (temporalResample) {
    M = config.RESTIR_TEMP_CANDIDATES;
  }

  var cTot = 0.0;
  for (var i = 0; i < M; i++) {
    let XjCandidate = candidates[i];
    let candidateDomain = unpackDomain(XjCandidate.packedDomain);
    if (candidateDomain.x < 0) { continue; }
    cTot += XjCandidate.c;
  }
  let cC = candidates[0].c;
  var mC = cC / cTot;

  let canonicalFirstVertexSeed = candidates[0].Y.firstVertexSeed;
  
  // I realized that the two lines below are equivalent, even when using 3+ spatial-resampling taps
  // let pHatC = randomReplay(Y, canonicalFirstVertexSeed, vec3u(candidates[0].domain)).pHat; // <- from ReSTIR Guide
  let pHatC = X.F;

  var numerator = cC * length(pHatC);

  for (var i = 0; i < M; i++) {
    if (i == 0) { continue; } // skip canonical

    let XjCandidate = candidates[i];
    let candidateDomain = unpackDomain(XjCandidate.packedDomain);
    
    if (candidateDomain.x < 0) { continue; }

    var denominator = numerator;

    // shift Y into Xj's pixel
    // let randomReplayResult = randomReplay(Y, XjCandidate.Y.firstVertexSeed, vec3u(XjCandidate.domain));
    let randomReplayResult = randomReplaysFromCanonicalToCandidate[i];
    if (randomReplayResult.valid > 0) {
      // shift Y -> Xj and evaluate jacobian
      var Xj = Y; // copy path info
      Xj.F = randomReplayResult.pHat;
      Xj.jacobian = randomReplayResult.jacobian;

      // since we're doing y->xj,  the xj terms appear on top of the fraction
      let J = (Xj.jacobian.x / Y.jacobian.x) * abs(Xj.jacobian.y / Y.jacobian.y);

      denominator += (cTot - cC) * length(Xj.F) * J;
    }
    
    mC += (XjCandidate.c / cTot) * (numerator / denominator);
  }

  return mC;
}

fn generalizedBalanceHeuristicPairwiseMIS_NonCanonical(
  X: PathInfo, Y: PathInfo, Xconfidence: f32, idx: i32, candidates: array<Reservoir, MAX_SR_CANDIDATES_COUNT>
) -> f32 {
  var M = config.RESTIR_SR_CANDIDATES;
  if (temporalResample) {
    M = config.RESTIR_TEMP_CANDIDATES;
  }

  var cTot = 0.0;
  for (var i = 0; i < M; i++) {
    let XjCandidate = candidates[i];
    let candidateDomain = unpackDomain(XjCandidate.packedDomain);

    if (candidateDomain.x < 0) { continue; }
    cTot += XjCandidate.c;
  }
  
  let cC = candidates[0].c;
  let J = (Y.jacobian.x / X.jacobian.x) * abs(Y.jacobian.y / X.jacobian.y);
  var numerator = (cTot - cC) * length(X.F) / J;

  let canonicalFirstVertexSeed = candidates[0].Y.firstVertexSeed;
  
  // I realized that the two lines below are equivalent, even when using 3+ spatial-resampling taps
  // let pHatC = randomReplay(Y, canonicalFirstVertexSeed, vec3u(candidates[0].domain)).pHat; <- from ReSTIR Guide
  let pHatC = Y.F;
  
  var denominator = numerator + cC * length(pHatC);

  return (Xconfidence / cTot) * (numerator / denominator); 
}

fn Resample(
  candidates: array<Reservoir, MAX_SR_CANDIDATES_COUNT>, 
  domain: vec2u
) -> Reservoir {
  // ******* important: first candidate is the current pixel's reservoir ***********
  // ******* I should probably update this function to reflect that ***********

  var r = Reservoir(
    // it's important that we set the domain here, read
    // the note inside generalizedBalanceHeuristic to understand why.
    // In this case, it's important because for next spatial iterations
    // when we return the reservoir, we have to set it as a valid pixel, by
    // assigning something other that -1,-1 to the domain value
    PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
    candidates[0].Gbuffer, 0.0, 0.0, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(domain))
  );

  var M : i32 = config.RESTIR_SR_CANDIDATES;
  if (temporalResample) {
    M = config.RESTIR_TEMP_CANDIDATES;
  }

  let canonicalFirstVertexSeed = candidates[0].Y.firstVertexSeed;

  // This is a horribly convoluted way of creating the random replays,
  // I know, it hurts my eyes too. But it's the only way I've found to reduce
  // compilation time by 65% --- the problem seems to be having the "randomReplay"
  // function mentioned more than once inside the shader. If I do, on my GPU it ends up
  // inlining the content of the function multiple times and thus exploding 
  // in complexity and compilation times.
  // Instead, here we're calculating in advance all the random replays that will be used
  // by the PairWise GBH, and then we'll reference these results as needed later in the function
  var randomReplaysFromCandidateToCanonical = array<RandomReplayResult, MAX_SR_CANDIDATES_COUNT>();
  var randomReplaysFromCanonicalToCandidate = array<RandomReplayResult, MAX_SR_CANDIDATES_COUNT>();
  for (var i: i32 = 0; i < M * 2; i++) {
    var skip = false;
    var path = PathInfo();
    var firstVertexSeed: u32 = 0;
    var targetDomain = vec2u(0);
    var randomReplayResult = RandomReplayResult(0, vec3f(0), true, vec2f(0.0));

    if (i < M) {
      let Xi = candidates[i];

      // no need to random replay the canonical path into the canonical pixel,
      // we can just copy the values and pretend we made a RR.
      // for debugging purposes, it can be useful to comment out this if-block
      if (i == 0) {
        skip = true;
        randomReplayResult.valid = 1;
        randomReplayResult.pHat = Xi.Y.F;
        randomReplayResult.jacobian = Xi.Y.jacobian;
      }

      if (Xi.isNull > 0) {
        skip = true;
      }

      path = Xi.Y;
      firstVertexSeed = canonicalFirstVertexSeed;
      targetDomain = domain;
    }
    
    if (i >= M) {
      let j = i-M;
      if (j == 0) { skip = true; } // skip canonical
      let XjCandidate = candidates[j];
      let candidateDomain = unpackDomain(XjCandidate.packedDomain);

      if (candidateDomain.x < 0) { skip = true; }
    
      path = candidates[0].Y;
      firstVertexSeed = XjCandidate.Y.firstVertexSeed;
  
      targetDomain = vec2u(candidateDomain);
    }

    if (!skip) {
      randomReplayResult = randomReplay(path, firstVertexSeed, targetDomain);
    } 
    
    if (i < M) {
      randomReplaysFromCandidateToCanonical[i] = randomReplayResult;
    } else {
      randomReplaysFromCanonicalToCandidate[i-M] = randomReplayResult;
    }
  }

  for (var i: i32 = 0; i < M; i++) {
    /*
      since the very first candidate is this pixel's reservoir,
      I can probably avoid the random replay
      and optimize that part away
    */
    let Xi = candidates[i];
    if (Xi.isNull > 0) {
      // we weren't able to generate a path for this candidate, thus skip it

      // we still need to update the confidence though
      r.c += Xi.c;
      continue;
    }

    // let randomReplayResult = randomReplay(Xi.Y, canonicalFirstVertexSeed, domain);
    let randomReplayResult = randomReplaysFromCandidateToCanonical[i];
    // remember that the random-replay will end up creating a new path-info
    // that computed internally a different jacobian compared to the jacobian
    // that is saved in the original path Xi.Y. This is the real difference between
    // Y and X when it's presented in section 5 of the ReSTIR guide
    let X = Xi.Y;
    var Y = Xi.Y;
    Y.F = randomReplayResult.pHat;
    Y.jacobian = randomReplayResult.jacobian;

    let confidence = Xi.c;

    let jacobian = (Y.jacobian.x / X.jacobian.x) * abs(Y.jacobian.y / X.jacobian.y);
    let Wxi = Xi.Wy * jacobian;
    var wi = 0.0;

    if (randomReplayResult.valid > 0) {
      var mi = 0.0;
      if (i == 0) {
        mi = generalizedBalanceHeuristicPairwiseMIS_Canonical(X, Y, confidence, i, candidates, randomReplaysFromCanonicalToCandidate);
      } else {
        mi = generalizedBalanceHeuristicPairwiseMIS_NonCanonical(X, Y, confidence, i, candidates);
      }
      wi = mi * length(Y.F) * Wxi;
    }

    if (wi > 0.0) {
      let updated = updateReservoirWithConfidence(&r, Y, wi, confidence);
    } else {
      // we still need to update the confidence even after we fail
      r.c += Xi.c;
    }
  }

  if (r.isNull <= 0.0) {
    r.Wy = 1 / length(r.Y.F) * r.wSum;
    // we want to make sure that new samples don't alter
    // the first vertex seed, explanation in firstVertexSeed.md
    r.Y.firstVertexSeed = canonicalFirstVertexSeed;
  }

  r.c = clamp(r.c, 1.0, config.MAX_CONFIDENCE);

  return r;
}
`,zd=`
fn Resample(
  candidates: array<Reservoir, MAX_SR_CANDIDATES_COUNT>, 
  domain: vec2u
) -> Reservoir {
  // ******* important: first candidate is the current pixel's reservoir ***********
  // ******* I should probably update this function to reflect that ***********

  var r = Reservoir(
    // it's important that we set the domain here, read
    // the note inside generalizedBalanceHeuristic to understand why.
    // In this case, it's important because for next spatial iterations
    // when we return the reservoir, we have to set it as a valid pixel, by
    // assigning something other that -1,-1 to the domain value
    PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
    candidates[0].Gbuffer, 0.0, 0.0, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(domain))
  );

  var M : i32 = config.RESTIR_SR_CANDIDATES;
  if (temporalResample) {
    M = config.RESTIR_TEMP_CANDIDATES;
  }

  let canonicalFirstVertexSeed = candidates[0].Y.firstVertexSeed;

  var activeCandidates = 0.0;
  for (var i: i32 = 0; i < M; i++) {
    if (candidates[i].isNull <= 0) {
      activeCandidates += 1.0;
    }
  }
  let mi = 1.0 / activeCandidates;

  for (var i: i32 = 0; i < M; i++) {
    /*
      since the very first candidate is this pixel's reservoir,
      I can probably avoid the random replay
      and optimize that part away
    */
    let Xi = candidates[i];
    if (Xi.isNull > 0) {
      // we weren't able to generate a path for this candidate, thus skip it

      // we still need to update the confidence though
      r.c += Xi.c;
      continue;
    }

    let randomReplayResult = randomReplay(Xi.Y, canonicalFirstVertexSeed, domain);
    // remember that the random-replay will end up creating a new path-info
    // that computed internally a different jacobian compared to the jacobian
    // that is saved in the original path Xi.Y. This is the real difference between
    // Y and X when it's presented in section 5 of the ReSTIR guide
    let X = Xi.Y;
    var Y = Xi.Y;
    Y.F = randomReplayResult.pHat;
    Y.jacobian = randomReplayResult.jacobian;

    let confidence = Xi.c;

    let jacobian = (Y.jacobian.x / X.jacobian.x) * abs(Y.jacobian.y / X.jacobian.y);
    let Wxi = Xi.Wy * jacobian;
    var wi = 0.0;

    if (randomReplayResult.valid > 0) {
      wi = mi * length(Y.F) * Wxi;
    }

    if (wi > 0.0) {
      let updated = updateReservoirWithConfidence(&r, Y, wi, confidence);
    } else {
      // we still need to update the confidence even after we fail
      r.c += Xi.c;
    }
  }

  if (r.isNull <= 0.0) {
    r.Wy = 1 / length(r.Y.F) * r.wSum;
    // we want to make sure that new samples don't alter
    // the first vertex seed, explanation in firstVertexSeed.md
    r.Y.firstVertexSeed = canonicalFirstVertexSeed;
  }

  r.c = clamp(r.c, 1.0, config.MAX_CONFIDENCE);

  return r;
}
`;function Fd(a){return`
fn randomReplay(pi: PathInfo, firstVertexSeed: u32, tid: vec2u) -> RandomReplayResult {
  let idx = tid.y * canvasSize.x + tid.x;

  // explained in segment/integrators/firstVertexSeed.md
  initializeRandoms(firstVertexSeed);
  var rayContribution: f32;
  var ray = getCameraRay(vec3u(tid, 0), idx, &rayContribution);

  // then we'll use the path-info seed number, and also have to remember to
  // skip the camera randoms
  // read segments/integrators/doc1.png to understand why this is necessary
  initializeRandoms(pi.seed);
  getRand2D(); getRand2D();
  if (camera.catsEyeBokehEnabled > 0) {
    // *********** ERROR ************
    // *********** ERROR ************
    // *********** ERROR ************
    // This wasn't implemented since the catseyedbokeh routine asks for
    // rand 2ds in a for loop and then uses those rands to decide where to
    // continue the for loop or not
    return RandomReplayResult(0, vec3f(0), true, vec2f(0.0));
  }

  var lastBrdfMis = 1.0;
  var throughput = vec3f(1.0);
  var rad = vec3f(0.0);
  var unusedReservoir = Reservoir();
  var pathSampleInfo = PathSampleInfo(false, vec3f(0.0), vec3f(0.0), 0, 0, -1, vec3f(1.0), -1);
  var pathInfoCopy = pi;
  for (var i = 0; i < config.BOUNCES_COUNT; i++) {
    if (rayContribution == 0.0) { break; }
    
    debugInfo.bounce = i;

    let ires = bvhIntersect(ray);

    if (ires.hit) {
      let rrStepResult = shade(
        ires, &ray, &unusedReservoir, &throughput, &pathInfoCopy, &pathSampleInfo, &lastBrdfMis, true, vec3u(tid, 0), i
      );

      if (rrStepResult.shouldTerminate) {
        return rrStepResult;
      }
    } else if (shaderConfig.HAS_ENVMAP) {
      // we bounced off into the envmap
      let envmapRad = getEnvmapRadiance(ray.direction);
      let rrStepResult = rrEnvmapPathConstruction( 
        &pathInfoCopy, &lastBrdfMis, &throughput, envmapRad,
      );

      if (rrStepResult.shouldTerminate) {
        return rrStepResult;
      }
    }
    // ..... missing stuff .....
  }

  return RandomReplayResult(0, vec3f(0), true, vec2f(0.0));
}


${a.options.ReSTIR.GBH_VARIANT=="Pairwise MIS"?Nd:""}
${a.options.ReSTIR.GBH_VARIANT=="1/M Biased"?zd:""}
`}const Ld=`
fn isSegmentTooShortForReconnection(segment: vec3f) -> bool {
  // return length(segment) < 0.05;
  return length(segment) < 0.15;
  // return length(segment) < 0.5;
  // return length(segment) < 0.85;
  // return length(segment) < 2.5;
  // return false;
  // return true;
}

fn pathReconnects(pi: PathInfo) -> bool {
  return ((pi.flags >> 3) & 1u) == 1;
}

fn pathReconnectsAtLightVertex(pi: PathInfo) -> bool {
  return pathReconnects(pi) && pi.bounceCount == pi.reconnectionBounce;
}

fn pathReconnectsFarFromLightVertex(pi: PathInfo) -> bool {
  return pathReconnects(pi) && pi.bounceCount >= (pi.reconnectionBounce+2);
}

fn pathReconnectsOneVertextBeforeLight(pi: PathInfo) -> bool {
  return pathReconnects(pi) && pi.bounceCount == (pi.reconnectionBounce+1);
}

fn packPathFlags(flags: PathFlags) -> u32 {
  var pathFlags: u32 = 0u; // Use 0u for clarity
  pathFlags |= (u32(flags.lightSampled) << 0u); // u32(bool) is 0u or 1u, so & 1u is not strictly needed
  pathFlags |= (u32(flags.brdfSampled) << 1u);
  pathFlags |= (u32(flags.endsInEnvmap) << 2u);
  pathFlags |= (u32(flags.reconnects) << 3u);  // remember to update pathReconnects(...) if you move this one around
  // Bits 4-15 are currently unused
  // 0xFFu is 255 in decimal, or 0b11111111
  pathFlags |= ((flags.reconnectionLobes.x & 0xFFu) << 16u);
  pathFlags |= ((flags.reconnectionLobes.y & 0xFFu) << 24u);
  return pathFlags;
}

fn unpackPathFlags(packed: u32) -> PathFlags {
  var flags: PathFlags;
  flags.lightSampled = bool((packed >> 0u) & 1u); // bool(u32) converts 0u to false, non-0u to true
  flags.brdfSampled = bool((packed >> 1u) & 1u);
  flags.endsInEnvmap = bool((packed >> 2u) & 1u);
  flags.reconnects = bool((packed >> 3u) & 1u);
  flags.reconnectionLobes.x = (packed >> 16u) & 0xFFu;
  flags.reconnectionLobes.y = (packed >> 24u) & 0xFFu;
  return flags;
}

fn packDomain(domain: vec2i) -> u32 {
  let x_packed: u32 = u32(domain.x) & 0xFFFFu;
  let y_packed: u32 = (u32(domain.y) & 0xFFFFu) << 16u;
  return x_packed | y_packed;
}

fn unpackDomain(packedDomain: u32) -> vec2i {
  var domain: vec2i;
  let x_unsigned16: u32 = packedDomain & 0xFFFFu;
  domain.x = (i32(x_unsigned16 << 16u)) >> 16; 
  let y_unsigned16: u32 = (packedDomain >> 16u) & 0xFFFFu;
  domain.y = (i32(y_unsigned16 << 16u)) >> 16;
  return domain;
}

fn updateReservoir(reservoir: ptr<function, Reservoir>, Y: PathInfo, wi: f32) -> bool {
  (*reservoir).wSum = (*reservoir).wSum + wi;
  let prob = wi / (*reservoir).wSum;

  if (getRand2D_2().x < prob) {
    (*reservoir).Y = Y;
    (*reservoir).isNull = -1.0;
    return true;
  }

  return false;
} 

fn updateReservoirWithConfidence(
  reservoir: ptr<function, Reservoir>, Xi: PathInfo, wi: f32, ci: f32
) -> bool {
  (*reservoir).wSum = (*reservoir).wSum + wi;
  (*reservoir).c = (*reservoir).c + ci;
  let prob = wi / (*reservoir).wSum;

  if (getRand2D_2().x < prob) {
    (*reservoir).Y = Xi;
    (*reservoir).isNull = -1.0;
    return true;
  }
  
  return false;
} 
`,kd=`
const RANDOMS_VEC4F_ARRAY_COUNT = 50;
const RANDOMS_SAMPLES_COUNT = RANDOMS_VEC4F_ARRAY_COUNT * 4;
var<private> randomsOffset: f32 = 0;
var<private> randomsSeed: u32 = 0;
var<private> randomsCount: u32 = 0;

// we're forcing every routine of the renderer to request a 2D
// random sample, such that we can make sure that those samples are
// well distributed in those 2 dimensions, this makes it simpler
// to create the blue noise sampler, which will group the randoms
// array in groups of 2, with points well distributed in each of those 2 dimensions  
fn getRand2D() -> vec2f {
  // let hr = randomsCount / 2;
  // let rmod = mod1u(randomsCount, 2);
  // let rands = rand4(randomsSeed + hr * 199087573);
  // randomsCount++;

  // if (rmod == 0) {
  //   return rands.xy;
  // }
  // return rands.zw;

  // let rands = rand4(randomsSeed + randomsCount * 1099087573);
  // randomsCount++;
  // return rands.xy;

  randomsSeed = hashCounter(randomsSeed, randomsCount);
  let rands = rand4(randomsSeed);
  randomsCount++;
  return rands.xy;
}

fn initializeRandoms(seed: u32) {
  // re-setting the variables, in ReSTIR PT we'll call initializeRandoms() more than once
  randomsSeed = seed;
  randomsCount = 0;
  randomsOffset = 0;

  // you can't do blue noise decorrelation since you only have access to a seed when initializing 
  // randoms, and blue noise decorrelation requires you to "overlay" blue noise offsets from
  // the pixels on the blue noise image texture. if the pixel adjacent to this one doesn't take
  // the blue noise offsets that are adjacent on the image texture, decorrelation obviously wont work
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

var<private> randomsArrayIndex2: u32 = 0;
var<private> randomsOffset2: f32 = 0.0;

fn initializeRandoms2(tid: vec3u) {
  randomsArrayIndex2 = 0;
  randomsOffset2 = 0.0;
  let pseudoRands = rand4(tid.x * 7189357 + tid.y * 5839261);

  randomsOffset2 = pseudoRands.x;
  randomsArrayIndex2 = u32(pseudoRands.y * 0.5 * f32(RANDOMS_VEC4F_ARRAY_COUNT-1)) * 2;
}

fn getRand2D_2() -> vec2f {
  var rands = vec2f(0.0);

  for (var i = 0; i < 2; i++) {
    let currentSample = uniformRandom[randomsArrayIndex2 / 4];
    let modulo = mod1u(randomsArrayIndex2, 4);
    let sample = selectRandomArraySampleComponent(currentSample, modulo);

    randomsArrayIndex2++;
    if (randomsArrayIndex2 >= RANDOMS_VEC4F_ARRAY_COUNT) {
      randomsArrayIndex2 = 0;
    }

    var offset = randomsOffset2;
    let value = min(fract(sample + offset), 0.99999999);

    if (i == 0) {
      rands.x = value;
    } else {
      rands.y = value;
    }
  }

  return rands;
};
`;let Od=`
fn rrEnvmapPathConstruction(
  pi: ptr<function, PathInfo>,
  lastBrdfMis: ptr<function, f32>, 
  throughput: ptr<function, vec3f>, 
  emissive: vec3f,
) -> RandomReplayResult {
  let unpackedFlags = unpackPathFlags((*pi).flags);
  let pathDoesNotReconnect = !unpackedFlags.reconnects;
  let pathIsBrdfSampled = unpackedFlags.brdfSampled;
  let pathEndsInEnvmap = unpackedFlags.endsInEnvmap;

  if (
    pathDoesNotReconnect &&
    pathIsBrdfSampled && 
    pathEndsInEnvmap && 
    u32(debugInfo.bounce) == pi.bounceCount
  ) {
    let mi = *lastBrdfMis; // will be 1 in this case
    let pHat = emissive * *throughput; // throughput will be 1 in this case

    var rrStepResult = RandomReplayResult(0, vec3f(0.0), false, vec2f(0.0));
    rrStepResult.valid = 1;
    rrStepResult.shouldTerminate = true;
    rrStepResult.jacobian = vec2f(1.0);
    rrStepResult.pHat = pHat * mi;

    return rrStepResult;
  } else {
    const failedShiftResult = RandomReplayResult(0, vec3f(0.0), true, vec2f(0.0));
    return failedShiftResult;
  }
}

fn rrPathConstruction(
  lightDirectionSample: LightDirectionSample,
  geometryContext: GeometryContext,
  material: EvaluatedMaterial,
  ires: BVHIntersectionResult, 
  throughput: ptr<function, vec3f>, 
  isRough: bool,
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  emissive: vec3f,
  lastBrdfMis: ptr<function, f32>, 
  lobeIndex: u32,
) -> RandomReplayResult {
  let ray = geometryContext.ray;
  let interpolatedAttributes = geometryContext.interpolatedAttributes;
  let normals = geometryContext.normals;
  let isBackFacing = geometryContext.isBackFacing;

  var rrStepResult = RandomReplayResult(0, vec3f(0.0), false, vec2f(0.0));
  const failedShiftResult = RandomReplayResult(0, vec3f(0.0), true, vec2f(0.0));

  let w_vec = psi.prevVertexPosition - ires.hitPoint;
  let isTooShort = isSegmentTooShortForReconnection(w_vec);
  var isCurrentVertexConnectible = psi.wasPrevVertexRough && isRough && !isTooShort;

  let unpackedFlags = unpackPathFlags((*pi).flags);
  let pathReconnects = unpackedFlags.reconnects;
  let pathDoesNotReconnect = !pathReconnects;
  let pathIsBrdfSampled = unpackedFlags.brdfSampled;
  let pathIsLightSampled = unpackedFlags.lightSampled;
  let pathReconnectionLobes = unpackedFlags.reconnectionLobes;
  let pathEndsInEnvmap = unpackedFlags.endsInEnvmap;
  
  // invertibility check
  if (isCurrentVertexConnectible && pathReconnects && u32(debugInfo.bounce) < pi.reconnectionBounce) {
    return failedShiftResult;
  }

  // invertibility check
  if (!isCurrentVertexConnectible && pathReconnects && u32(debugInfo.bounce) == pi.reconnectionBounce) {
    return failedShiftResult;
  }

  // invertibility check
  if (isCurrentVertexConnectible && pathDoesNotReconnect) {
    return failedShiftResult;
  }

  // pure random replay path
  if (pathDoesNotReconnect) {
    if (pathIsBrdfSampled && u32(debugInfo.bounce) == pi.bounceCount) {
      let mi = *lastBrdfMis; // will be 1 in this case
      let pHat = emissive * *throughput; // throughput will be 1 in this case

      rrStepResult.valid = 1;
      rrStepResult.shouldTerminate = true;
      rrStepResult.jacobian = vec2f(1.0);
      rrStepResult.pHat = pHat * mi;
      return rrStepResult;
    }
    if (pathIsLightSampled && u32(debugInfo.bounce + 1) == pi.bounceCount) {
      // let lightDirectionSample = sampleLight(material, ray, interpolatedAttributes, normals);
      let lightSampleRadiance = lightDirectionSample.ls.radiance;
      let lightSampleSuccessful = dot(lightSampleRadiance, lightSampleRadiance) > 0.0;
      
      if (lightSampleSuccessful) {
        var mi = lightDirectionSample.mis;
        let pHat = lightSampleRadiance * (1.0 / lightDirectionSample.pdf) * *throughput * 
                   lightDirectionSample.brdf * cosTerm(normals.shading, lightDirectionSample.dir, material.materialType);
    
        rrStepResult.valid = 1;
        rrStepResult.shouldTerminate = true;
        rrStepResult.jacobian = vec2f(1.0);
        rrStepResult.pHat = pHat * mi;
        return rrStepResult;
      }
    }
  }

  // directly hitting light source at bounce 0, no need to check if emissive > 0.0
  if (
    pi.bounceCount == 0 && debugInfo.bounce == 0 && !isBackFacing
  ) {
    let mi = *lastBrdfMis; // will be 1 in this case
    let pHat = emissive * *throughput; // throughput will be 1 in this case
    let wi = mi * length(pHat);

    rrStepResult.valid = 1;
    rrStepResult.shouldTerminate = true;
    rrStepResult.jacobian = vec2f(1.0);
    rrStepResult.pHat = pHat * mi;
    return rrStepResult;
  }

  // next vertex is the reconnection vertex, which is also a light source
  if (
    pathReconnectsAtLightVertex(*pi) && 
    pi.reconnectionBounce == u32(debugInfo.bounce+1)
  ) {
    let wasEnvmap = pathEndsInEnvmap;

    var w_vec = vec3f(0.0);
    var w_km1 = vec3f(0.0);
    var lsGeometricNormal = vec3f(0.0);
    var isTooShort = false;

    if (!wasEnvmap) {
      let triangle = triangles[pi.reconnectionTriangleIndex];
      let nextVertexPosition = sampleTrianglePoint(triangle, pi.reconnectionBarycentrics).point;
  
      // at the start of the function, we were trying to test if the current vertex was a reconnection
      // vertex, with the chance of it breaking invertibility. Now, we're considering the NEXT vertex
      // as the potential reconnection vertex, so we need to re-test for connectibility here. We'll
      // assume that the next vertex is rough enough and that it has the correct reconnection lobe,
      // because we know that Xk = Yk
      w_vec = nextVertexPosition - ires.hitPoint;
      w_km1 = normalize(w_vec);
      lsGeometricNormal = triangle.geometricNormal;
      isTooShort = isSegmentTooShortForReconnection(w_vec);
    } else {
      w_km1 = (*pi).radianceDirection;
      lsGeometricNormal = -w_km1;
      isTooShort = false;
    }

    // next vertex lobe will necessarily be identical since we're reconnecting to the same
    // xk, however for the previous vertex, xk-1, which is this vertex, we have to make this check
    let hasDifferentLobes = lobeIndex != pathReconnectionLobes.x;
    let isConnectible = isRough && !isTooShort && !hasDifferentLobes;

    if (!isConnectible) {
      return failedShiftResult;
    }

    let dir = w_km1;
    let visibilityRay = Ray(ires.hitPoint + dir * 0.0001, dir);

    // We're doing a bvh traversal here that is probably unnecessary.
    // However, fixing it would require us to return the ires struct from
    // getLightPdf and the runtime cost of copying those ires values every time,
    // for every integrator using getLightPdf, 
    // is not worth the added benefit of simplifying this call here.
    // The alternative would be to have a different version of the bvh.ts shader 
    // for ReSTIR PT where instead of using getLightPdf we would use getLightPdfAndIRes
    // even that however seems too much effort for relatively little gain
    let visibilityRes = bvhIntersect(visibilityRay);
    
    if (!wasEnvmap) {
      // in this case, we have to check wether the light source is backfacing, since it's the next vertex
      let backFacing = dot(-dir, visibilityRes.triangle.geometricNormal) < 0;
      if (!visibilityRes.hit || pi.reconnectionTriangleIndex != visibilityRes.triangleIndex || backFacing) {
        // shift failed, should terminate
        return failedShiftResult;
      }
    } else {
      if (visibilityRes.hit) {
        // shift failed, we should have hit an envmap instead
        return failedShiftResult;
      }
    }
    
    // reconnection is successful
    let probability_of_sampling_lobe = 1.0;

    var wo = -ray.direction;
    var wi = w_km1;
    transformToLocalSpace(&wo, &wi, geometryContext);

    let brdf = evaluateBrdf(
      material, wo, wi, geometryContext
    );
    let brdfPdf = evaluateLobePdf(
      material, wo, wi, geometryContext
    );
    let lightPdf = getLightPDF(Ray(ires.hitPoint + w_km1 * 0.0001, w_km1));

    var p = 1.0;
    var mi = 0.0; 
    if (pathIsBrdfSampled) {
      p *= brdfPdf * probability_of_sampling_lobe;
      mi = getMisWeight(brdfPdf, lightPdf);
      // emitters have no mi. This however should be fixed. Also notice how here we're looking for
      // reconnection lobe x, whereas in the next case we'll be checking lobe y 
      if (pathReconnectionLobes.x == u32(${_e.EMISSIVE})) {  
        mi = 1.0;
      }
    }
    if (pathIsLightSampled) {
      p *= lightPdf * probability_of_sampling_lobe;
      mi = getMisWeight(lightPdf, brdfPdf);
    }

    if (p <= 0.0) {
      // shift failed, should terminate
      return failedShiftResult;
    }

    var jacobian = vec2f(
      p, 
      abs(dot(w_km1, lsGeometricNormal)) / dot(w_vec, w_vec)
    );

    if (wasEnvmap) {
      jacobian.y = 1.0;  // explanation on envmapJacobian.md
    }

    let pHat = pi.reconnectionRadiance * (1.0 / p) * *throughput * 
               brdf * cosTerm(normals.shading, w_km1, material.materialType);

    rrStepResult.valid = 1;
    rrStepResult.shouldTerminate = true;
    rrStepResult.jacobian = jacobian;
    rrStepResult.pHat = pHat * mi;
    return rrStepResult;
  }

  // next vertex is the reconnection vertex and the path ends on the vertex after that
  let case2 = pathReconnectsOneVertextBeforeLight(*pi) && pi.reconnectionBounce == u32(debugInfo.bounce+1);
  // next vertex is the reconnection vertex and the path ends far from light source
  let case3 = pathReconnectsFarFromLightVertex(*pi) && pi.reconnectionBounce == u32(debugInfo.bounce+1);

  if (case2 || case3) {
    let triangle = triangles[pi.reconnectionTriangleIndex];
    let nextVertexPosition = sampleTrianglePoint(triangle, pi.reconnectionBarycentrics).point;
    
    // at the start of the function, we were trying to test if the current vertex was a reconnection
    // vertex, with the chance of it breaking invertibility. Now, we're considering the NEXT vertex
    // as the potential reconnection vertex, so we need to re-test for connectibility here. We'll
    // assume that the next vertex is rough enough and that it has the correct reconnection lobe,
    // because we know that Xk = Yk
    let w_vec = nextVertexPosition - ires.hitPoint;
    let isTooShort = isSegmentTooShortForReconnection(w_vec);
    // next vertex lobe will necessarily be identical since we're reconnecting to the same
    // xk, however for the previous vertex, xk-1, which is this vertex, we have to make this check
    let hasDifferentLobes = lobeIndex != pathReconnectionLobes.x;
    let isConnectible = isRough && !isTooShort && !hasDifferentLobes;
    
    if (!isConnectible) {
      // shift failed, should terminate
      return failedShiftResult;
    }

    let dir = normalize(nextVertexPosition - ires.hitPoint);
    var visibilityRay = Ray(ires.hitPoint + dir * 0.0001, dir);
   
    // we can't use the lightPdf call here to also do the intersection since
    // the lightPdf checks the intersection between xk and xk+1, but the reconnection
    // direction is between xk-1 and xk
    let visibilityRes = bvhIntersect(visibilityRay);

    // in this case, we DON'T have to check wether the next vertex is backfacing, since it's NOT the light source
    // let backFacing = dot(-dir, visibilityRes.triangle.geometricNormal) < 0;
    if (!visibilityRes.hit || pi.reconnectionTriangleIndex != visibilityRes.triangleIndex) {
      // shift failed, should terminate
      return failedShiftResult;
    }

    // reconnection is successful
    let w_km1 = normalize(w_vec);
    let probability_of_sampling_lobe = 1.0;
    
    var wo = -ray.direction;
    var wi = w_km1;
    transformToLocalSpace(&wo, &wi, geometryContext);

    let brdf = evaluateBrdf(
      material, wo, wi, geometryContext
    );
    let brdfPdf = evaluateLobePdf(
      material, wo, wi, geometryContext
    );
    var p = probability_of_sampling_lobe * brdfPdf;

    // pick surface information of vertex Xk
    var materialXk = EvaluatedMaterial();
    var geometryContextXk = GeometryContext();
    evaluateMaterialAndGeometryContext(visibilityRes, visibilityRay, &materialXk, &geometryContextXk, false);
    let normalsXk = geometryContextXk.normals;

    var woXk = -w_km1;
    var wiXk = pi.radianceDirection;
    transformToLocalSpace(&woXk, &wiXk, geometryContextXk);

    let brdfXk = evaluateBrdf(
      materialXk, woXk, wiXk, geometryContextXk
    );
    let brdfPdfXk = evaluateLobePdf(
      materialXk, woXk, wiXk, geometryContextXk
    );

    var mi = 0.0;
    if (case2) {
      let lightPdfXk = getLightPDF(Ray(visibilityRes.hitPoint + pi.radianceDirection * 0.0001, pi.radianceDirection));
  
      if (pathIsBrdfSampled) {
        p *= brdfPdfXk * probability_of_sampling_lobe;
        mi = getMisWeight(brdfPdfXk, lightPdfXk);
  
        // emitters have no mi. This however should be fixed
        if (pathReconnectionLobes.y == u32(${_e.EMISSIVE})) {  
          mi = 1.0;
        }
      }
      if (pathIsLightSampled) {
        p *= lightPdfXk * probability_of_sampling_lobe;
        mi = getMisWeight(lightPdfXk, brdfPdfXk);
      }
    } else if (case3) {
      mi = 1.0; // no mis weights since this part of the path is brdf-only
      p *= brdfPdfXk * probability_of_sampling_lobe;
    }

    if (p <= 0.0) {
      // shift failed, should terminate
      return failedShiftResult;
    }

    // absorption check for dielectrics
    if (materialXk.materialType == ${_e.DIELECTRIC}) {
      var isInsideMedium = dot(normalsXk.shading, w_km1) > 0;
      if (isInsideMedium) {
        let t = length(w_vec);
        let absorption = vec3f(
          exp(-materialXk.absorptionCoefficient.x * t), 
          exp(-materialXk.absorptionCoefficient.y * t), 
          exp(-materialXk.absorptionCoefficient.z * t), 
        );
        *throughput *= absorption;
      }
    }

    var jacobian = vec2f(
      p, 
      abs(dot(w_km1, triangle.geometricNormal)) / dot(w_vec, w_vec)
    );
  
    let pHat = pi.reconnectionRadiance * (1.0 / p) * *throughput * 
               brdf * brdfXk * cosTerm(normals.shading, w_km1, material.materialType) * 
               cosTerm(normalsXk.shading, pi.radianceDirection, materialXk.materialType);

    rrStepResult.valid = 1;
    rrStepResult.shouldTerminate = true;
    rrStepResult.jacobian = jacobian;
    rrStepResult.pHat = pHat * mi;
    return rrStepResult;
  }

  return rrStepResult;
}
`;const Ud=`
fn shade(
  ires: BVHIntersectionResult, 
  ray: ptr<function, Ray>,
  reservoir: ptr<function, Reservoir>,
  throughput: ptr<function, vec3f>, 
  pi: ptr<function, PathInfo>,
  psi: ptr<function, PathSampleInfo>,
  lastBrdfMis: ptr<function, f32>, 
  isRandomReplay: bool,
  tid: vec3u,
  i: i32
) -> RandomReplayResult {
  let triangle = triangles[ires.triangleIndex];

  var material = EvaluatedMaterial();
  var geometryContext = GeometryContext();
  evaluateMaterialAndGeometryContext(ires, *ray, &material, &geometryContext, false);

  let materialType = material.materialType;
  var isRough = false;
  var lobeIndex = i32(materialType);
  
  if (materialType == ${_e.DIFFUSE}) {
    isRough = true;
  }
  if (materialType == ${_e.EMISSIVE}) {
    isRough = true;
  }  
  if (
    materialType == ${_e.TORRANCE_SPARROW} ||
    materialType == ${_e.DIELECTRIC} 
  ) {
    let ax = material.ax;
    let ay = material.ay;
    isRough = min(ax, ay) > 0.15;
  }

  let normals = geometryContext.normals;
  let gBufferDepth = length((*ray).origin - ires.hitPoint);

  // TODO:
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // v v v v v  this whole thing stinks and I don't understand it anymore, refactor it v v v v v
  // needs to be the exact origin, such that getLightSample/getLightPDF can apply a proper offset 
  (*ray).origin = ires.hitPoint;
  // in practice however, only for Dielectrics we need the exact origin, 
  // for TorranceSparrow/Diffuse we can apply the bump offset if necessary
  if (materialType != ${_e.DIELECTRIC}) {
    if (geometryContext.bumpOffset > 0.0) {
      (*ray).origin += normals.vertex * geometryContext.bumpOffset;
    }
  }
  geometryContext.ray = *ray;


  var emissive = getEmissive(material, geometryContext.isBackFacing);

  // absorption check for dielectrics
  if (materialType == ${_e.DIELECTRIC}) {
    var isInsideMedium = dot(normals.shading, (*ray).direction) > 0;
        
    // beer-lambert absorption 
    if (isInsideMedium) {
      let absorption = vec3f(
        exp(-material.absorptionCoefficient.x * ires.t), 
        exp(-material.absorptionCoefficient.y * ires.t), 
        exp(-material.absorptionCoefficient.z * ires.t), 
      );

      *throughput *= absorption;
      // already found reconnection vertex previously
      if ((*psi).reconnectionVertexIndex != -1 && (*psi).reconnectionVertexIndex < debugInfo.bounce) {
        // brdf-ray post fix throughput
        psi.postfixThroughput *= absorption;
      }
    }
  }

  let unpackedFlags = unpackPathFlags((*pi).flags);
  let pathDoesNotReconnect = !unpackedFlags.reconnects;
  let pathIsLightSampled = unpackedFlags.lightSampled;

  // !!!! careful !!!!
  // !!!! careful !!!!
  // With the existing architecture, sampleLight should *always* use the same number of rands for every material, 
  // otherwise we can't properly replay the path. 
  // This restriction doesn't apply to sampleBrdf since we're never skipping those randoms.
  // A longer and clearer explanation is in: segment/integrators/randoms.md

  let brdfSample = sampleBrdf(material, geometryContext);
  var lightSample = LightDirectionSample(vec3f(0), 0, 0, vec3f(0), LightSample());
  let pathIsPureRRThatEndsWithLightSampleNow = pathDoesNotReconnect && pathIsLightSampled && u32(debugInfo.bounce + 1) == pi.bounceCount;
  if (
    !isRandomReplay || 
    (isRandomReplay && pathIsPureRRThatEndsWithLightSampleNow)
  ) {
    // the reason why we're guarding NEE with this if statement is explained in the segment/integrators/mis-explanation.png
    if (debugInfo.bounce < config.BOUNCES_COUNT - 1) {
      lightSample = sampleLight(material, geometryContext);
    }
  } else if (isRandomReplay && !pathIsPureRRThatEndsWithLightSampleNow) {
    // skip sampleLight(...) randoms
    // unless this path is a pure random replay path that is supposed to end with a light sample
    // exactly at this bounce. in that case we'll create the light sample above and we don't have to
    // skip randoms
    if (debugInfo.bounce < config.BOUNCES_COUNT - 1) {
      let rands = vec4f(getRand2D(), getRand2D());
    }
  }

  if (!isRandomReplay) {
    if (debugInfo.bounce == 0) {
      (*reservoir).Gbuffer = vec4f(normals.shading, gBufferDepth);
    }

    setReconnectionVertex(brdfSample, ires, pi, psi, u32(lobeIndex), isRough, tid);

    if (debugInfo.bounce < config.BOUNCES_COUNT - 1) {
      let lightSampleRadiance = lightSample.ls.radiance;
      let lightSampleSuccessful = dot(lightSampleRadiance, lightSampleRadiance) > 0.0;
      
      if (lightSampleSuccessful) {
        neePathConstruction( 
          lightSample, brdfSample, ires, reservoir, throughput, 
          pi, psi, lastBrdfMis, u32(lobeIndex), isRough, materialType, normals.shading, tid
        );
      }
    }

    // if there's emission
    if (dot(emissive, emissive) > 0.0) {
      emissiveSurfacePathConstruction( 
        brdfSample, ires, reservoir, throughput, 
        pi, psi, lastBrdfMis, u32(lobeIndex), normals.shading, emissive, tid
      );
    }
  }

  if (isRandomReplay) {
    let rrResult = rrPathConstruction(
      lightSample,
      geometryContext,
      material,
      ires, 
      throughput, 
      isRough,
      pi,
      psi,
      emissive,
      lastBrdfMis,
      u32(lobeIndex),
    );
    if (rrResult.shouldTerminate || rrResult.valid > 0) {
      return rrResult;
    }
  }

  // now you have to actually change ray.direction to reflect the new direction
  (*ray).origin += brdfSample.dir * 0.001;
  (*ray).direction = brdfSample.dir;

  *lastBrdfMis = brdfSample.mis;
  var t = brdfSample.brdf * (/* mis weight */ 1.0 / brdfSample.pdf);
  t *= cosTerm(normals.shading, brdfSample.dir, materialType);

  *throughput *= t;

  // already found reconnection vertex previously
  if (
    (*psi).reconnectionVertexIndex != -1 && 
    (*psi).reconnectionVertexIndex < debugInfo.bounce
  ) {
    // brdf-ray post fix throughput
    psi.postfixThroughput *= t;
  }
  
  psi.wasPrevVertexRough = isRough;
  psi.prevLobeIndex      = lobeIndex;
  psi.prevVertexPosition = ires.hitPoint;
  psi.prevVertexBrdf     = brdfSample.brdf;
  psi.brdfPdfPrevVertex  = brdfSample.pdf;
  psi.lobePdfPrevVertex  = 1.0;

  return RandomReplayResult(0, vec3f(0.0), false, vec2f(0.0));
}
`;function Vd(a,e){return`
// keep in mind that configManager.shaderPart() might return different shader code if the
// internal shader configs have changed
${e.shaderPart()}
// at the moment these have to be imported with this specific order
${au}
${su}
${nu}
${ou}
${lu}
${uu}
${kd}
${a.getShaderPart()}
${us.shaderPart()}
${Dr.shaderStruct()}
${zi.shaderEmissiveLobe()}
${rt.shaderDiffuseLobe()}
${wt.shaderBRDF()}
${wt.shaderTorranceSparrowLobe()}
${Kt.shaderBRDF()}
${Kt.shaderDielectricLobe()}
${cs.shaderStruct()}
${cs.shaderMethods()}
${Fi.shaderStruct()}
${Fi.shaderIntersectionFn()}
${xt.shaderStruct()}
${xt.shaderIntersect()}
${ls.shaderStruct()}
${ls.shaderIntersect()}
${hi.shaderStruct()}
${hi.shaderMethods()}
${jt.shaderStruct()}
${jt.shaderMethods()}
${Qi.shaderStruct()}
${Qi.shaderMethods()}
${pa.shaderMethods()}
${Su}
${Ld}
${Dd}
${Od}
${Ud}
${Fd(e)}

struct DebugInfo {
  tid: vec3u,
  isSelectedPixel: bool,
  bounce: i32,
  debugLogIndex: u32,
} 
// https://www.w3.org/TR/WGSL/#address-spaces-private
var<private> debugInfo = DebugInfo(vec3u(0,0,0), false, 0, 0);
fn debugLog(value: f32) {
  if (debugInfo.isSelectedPixel) {
    debugBuffer[debugInfo.debugLogIndex] = value;
    debugInfo.debugLogIndex++;
  }
}
`}function $d(a,e){return`

${Vd(a,e)}

@group(0) @binding(0) var<storage, read_write> restirPassInput: array<Reservoir>;
@group(0) @binding(1) var<storage, read_write> restirPassOutput: array<Reservoir>;
@group(0) @binding(2) var<uniform> canvasSize: vec2u;

// on a separate bind group since camera changes more often than data/canvasSize
@group(1) @binding(0) var<uniform> camera: Camera;
// seems like maximum bindgroup count is 4 so I need to add the camera sample here 
// unfortunately and I can't create a separate bindgroup for it
@group(1) @binding(1) var<uniform> randomSeed: f32;
@group(1) @binding(2) var<uniform> uniformRandom: array<vec4f, RANDOMS_VEC4F_ARRAY_COUNT>;
@group(1) @binding(3) var<uniform> config: Config;
struct PassInfo {
  finalPass: u32,
  icPassIdx: u32, // pass index for initial candidates
  passIdx: u32,   // 0 == ic pass, 1+ sr passes
  sampleIdx: u32,
}
@group(1) @binding(4) var<uniform> passInfo: PassInfo;
@group(1) @binding(5) var<uniform> tile: Tile;

@group(2) @binding(0) var<storage, read_write> debugBuffer: array<f32>;
@group(2) @binding(1) var<uniform> debugPixelTarget: vec2<u32>;

@group(3) @binding(0) var<storage> triangles: array<Triangle>;
@group(3) @binding(1) var<storage> materialsBuffer: array<f32>;
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

// ***** Things to remember:  (https://webgpureport.org/)
// maxStorageBuffersPerShaderStage = 8
// maxUniformBuffersPerShaderStage = 12 (maxUniformBuffersPerShaderStage)
// maxBindingsPerBindGroup = 1000
// maxSampledTexturesPerShaderStage = 16
// maxTextureDimension3D = 2048

const MAX_SR_CANDIDATES_COUNT = 6;
var<private> temporalResample = false;

fn initialCandidatesReservoir(tid: vec3u, domain: vec2u, idx: u32) -> Reservoir {
  var reservoir = Reservoir(
                        // seed will be set inside the loop
    PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
    vec4f(0,0,0,-1), 0.0, 0.0, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(domain))
  );

  initializeRandoms2(tid);

  let ic = passInfo.icPassIdx;

  // if Path info will be accepted, it will also take this seed and save it in the reservoir
  let seed = hashPixelAndSeed(tid.xy, u32(randomSeed * f32(1099087573)));
  let firstVertexSeed = seed;

  initializeRandoms(seed);
  
  var rayContribution: f32;
  var ray = getCameraRay(tid, idx, &rayContribution);

  var pathSampleInfo = PathSampleInfo(
    false, vec3f(0.0), vec3f(0.0), 0, 0, -1, vec3f(1.0), -1
  );
  var pi = PathInfo(vec3f(0.0), firstVertexSeed, seed, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), 0);
  var throughput = vec3f(1.0);
  var rad = vec3f(0.0);
  var lastBrdfMis = 1.0;
  for (var i = 0; i < config.BOUNCES_COUNT; i++) {
    if (rayContribution == 0.0) { break; }

    debugInfo.bounce = i;

    let ires = bvhIntersect(ray);
    
    if (ires.hit) {
      shade(
        ires, &ray, &reservoir, &throughput, &pi, &pathSampleInfo, 
        &lastBrdfMis, false, tid, i
      );
    } else if (shaderConfig.HAS_ENVMAP) {
      // we bounced off into the envmap
      let envmapRad = getEnvmapRadiance(ray.direction);
      envmapPathConstruction(
        &reservoir, &throughput, &pi, &pathSampleInfo, &lastBrdfMis, envmapRad,
      );
      break;
    }

    if (throughput.x == 0.0 && throughput.y == 0.0 && throughput.z == 0.0) {
      break;
    }
  }

  // if (reservoir.isNull <= 0.0) {
  //   reservoir.Wy = (1 / length(reservoir.Y.F)) * reservoir.wSum;
  // }

  return reservoir;
}

fn combineReservoirs(newCandidate: Reservoir, idx: u32) -> Reservoir {
  let isFirstICPass = passInfo.icPassIdx == 0;
  let isLastICPass = passInfo.icPassIdx == u32(config.RESTIR_INITIAL_CANDIDATES - 1);

  var ncr = newCandidate;
  ncr.wSum /= f32(config.RESTIR_INITIAL_CANDIDATES);

  var reservoir = restirPassOutput[idx];
  if (isFirstICPass) {
    reservoir = ncr;
  } else {
    updateReservoir(&reservoir, ncr.Y, ncr.wSum);
  }

  if (isLastICPass) {
    reservoir.c = 1.0;
    if (reservoir.isNull <= 0.0) {
      reservoir.Wy = (1 / length(reservoir.Y.F)) * reservoir.wSum;
    }
  }

  return reservoir;
}

fn getSpatialResampleCandidates(tid: vec3u, idx: u32) -> array<Reservoir, MAX_SR_CANDIDATES_COUNT> {
  initializeRandoms2(tid);

  var rad = vec3f(0.0);
  var reservoir: Reservoir;

  // ******* important: first candidate is current pixel's reservoir ***********
  var candidates = array<Reservoir, MAX_SR_CANDIDATES_COUNT>();
  var normal0 = vec3f(0.0);
  var depth0 = 0.0;
  var currConfidence = 0.0;
  for (var i = 0; i < config.RESTIR_SR_CANDIDATES; i++) {
    if (i == 0) {
      candidates[0] = restirPassInput[idx];
      currConfidence = candidates[0].c;
      normal0 = candidates[i].Gbuffer.xyz;
      depth0 = candidates[i].Gbuffer.w;
    } else {
      // uniform circle sampling
      // TODO: the paper recommends using a low discrepancy sequence here
      let circleRadiusInPixels = config.SR_CIRCLE_RADIUS;   // the paper recommends 10.0
      let rands = getRand2D_2();
      let r = circleRadiusInPixels * sqrt(rands.x);
      let theta = rands.y * 2.0 * PI;

      let offx = i32(r * cos(theta));
      let offy = i32(r * sin(theta));

      let ntid = vec3i(i32(tid.x) + offx, i32(tid.y) + offy, 0);
      if (ntid.x >= 0 && ntid.y >= 0 && ntid.x < i32(canvasSize.x) && ntid.y < i32(canvasSize.y)) {
        let nidx = ntid.y * i32(canvasSize.x) + ntid.x;
        candidates[i] = restirPassInput[nidx];

        // GBuffer test
        let normal1 = candidates[i].Gbuffer.xyz;
        let depth1 = candidates[i].Gbuffer.w;

        if (dot(normal1, normal0) < 0.9) {
          candidates[i] = Reservoir(
            PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
            vec4f(0,0,0,-1), 0.0, currConfidence, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(-1, -1))
          );
        }
      } else {
        candidates[i] = Reservoir(
          PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
          vec4f(0,0,0,-1), 0.0, currConfidence, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(-1, -1))
        );
      }
    }
  }

  return candidates;
}

@compute @workgroup_size(8, 8) fn compute(
  @builtin(global_invocation_id) gid: vec3<u32>,
  @builtin(local_invocation_id) lid: vec3<u32>,
) {
  // let tid = vec3u(gid.x, gid.y, 0);
  let tid = vec3u(tile.x + gid.x, tile.y + gid.y, 0);
  if (tid.x >= canvasSize.x || tid.y >= canvasSize.y) { return; }

  let idx = tid.y * canvasSize.x + tid.x;

  debugInfo.tid = tid;
  debugInfo.isSelectedPixel = false;
  if (debugPixelTarget.x == tid.x && debugPixelTarget.y == tid.y) {
    debugInfo.isSelectedPixel = true;
  }

  temporalResample = (passInfo.passIdx == 0 && config.USE_TEMPORAL_RESAMPLE > 0);

  let domain = vec2u(tid.xy);

  let emptyReservoir = Reservoir(
    PathInfo(vec3f(0.0), 0, 0, 0, 0, 0, vec2f(0), vec2f(0), vec3f(0), vec3f(0), -1),
    vec4f(0,0,0,-1), 0.0, 0.0, 0.0, 1.0, vec3f(0.0), packDomain(vec2i(domain))
  );

  var prevReservoir = restirPassInput[idx];
  if (passInfo.sampleIdx == 0) {
    prevReservoir = emptyReservoir;
  }
  var outputReservoir = emptyReservoir;
  var icReservoir = emptyReservoir;

  if (passInfo.passIdx == 0) {
    icReservoir = initialCandidatesReservoir(tid, domain, idx);
    outputReservoir = combineReservoirs(icReservoir, idx);
  }

  var candidates = array<Reservoir, MAX_SR_CANDIDATES_COUNT>();

  let isLastICPass = passInfo.icPassIdx == u32(config.RESTIR_INITIAL_CANDIDATES - 1);
  let isTemporalPass = (passInfo.passIdx == 0) && 
                       (config.USE_TEMPORAL_RESAMPLE > 0) && 
                       (passInfo.icPassIdx == u32(config.RESTIR_INITIAL_CANDIDATES - 1)); 
  let isSpatialPass = (passInfo.passIdx > 0);

  if (isTemporalPass) {
    candidates[0] = outputReservoir;
    candidates[1] = prevReservoir;
    // there has to be a better way to do this v v v
    candidates[2] = emptyReservoir;
    candidates[3] = emptyReservoir;
    candidates[4] = emptyReservoir;
    candidates[5] = emptyReservoir;
  }
  if (isSpatialPass) {
    candidates = getSpatialResampleCandidates(tid, idx);
  }

  if (isTemporalPass || isSpatialPass) {
    outputReservoir = Resample(candidates, domain);
  }

  if (!isSpatialPass) {
    // the reason why we're using both restirPassInput
    // and restirPassOutput is due to having to save
    // two different types of state:
    // the temporally accumulated reservoir,
    // and the initial-candidates reservoir that is 
    // created over multiple render calls
    if (isLastICPass) {
      restirPassInput[idx] = outputReservoir;
    } else {
      restirPassOutput[idx] = outputReservoir;
    }
  } else {
    var rad = vec3f(0.0);

    // simplified version to debug SR 
    // var outputReservoir = restirPassInput[idx];
    // if you enable ^ also comment the spatial-resample part
    if (outputReservoir.isNull < 0.0) {
      // theoretically we shouldn't re-use Y.F but for now we'll do it
      rad = outputReservoir.Y.F * outputReservoir.Wy;
    }

    restirPassOutput[idx] = outputReservoir;
  
    if (passInfo.finalPass == 1) {
      if (debugInfo.isSelectedPixel) {
        restirPassOutput[idx].rad += vec3f(1, 0, 0);
      } else {
        restirPassOutput[idx].rad += rad;
      }
    }
  }



 
  // // test for compute only
  // if (!isSpatialPass) {
  //   // the reason why we're using both restirPassInput
  //   // and restirPassOutput is due to having to save
  //   // two different types of state:
  //   // the temporally accumulated reservoir,
  //   // and the initial-candidates reservoir that is 
  //   // created over multiple render calls
  //   if (isLastICPass) {
  //     restirPassInput[idx] = outputReservoir;
  //   } else {
  //     restirPassOutput[idx] = outputReservoir;
  //   }
  // } else {
  //   restirPassOutput[idx] = restirPassInput[idx];
    
  //   if (passInfo.finalPass == 1) {
  //     var rad = vec3f(0.0);
  //     if (restirPassInput[idx].isNull < 0.0) {
  //       rad = restirPassInput[idx].Y.F * restirPassInput[idx].Wy;
  //     }
    
  //     if (debugInfo.isSelectedPixel) {
  //       restirPassOutput[idx].rad += vec3f(1, 0, 0);
  //     } else {
  //       restirPassOutput[idx].rad += rad;
  //     }
  //   }
  // }
}
`}class Tu{constructor(){S(this,"passPerformance");S(this,"device");S(this,"pipeline",null);S(this,"bindGroupLayouts");S(this,"layout");S(this,"configManager",new Dh);S(this,"reservoirToRadSegment",new Bd);S(this,"bindGroup0",[]);S(this,"bindGroup1",null);S(this,"bindGroup2",null);S(this,"bindGroup3",null);S(this,"SPATIAL_REUSE_PASSES",3);S(this,"canvasSize",null);S(this,"canvasSizeUniformBuffer");S(this,"passInfoUniformBuffer");S(this,"sequenceUniformBuffer");S(this,"restirRandomsUniformBuffer");S(this,"tileUniformBuffer");S(this,"RANDOMS_BUFFER_COUNT",200);S(this,"RESERVOIR_SIZE",128);S(this,"restirPassInputMBcount",0);S(this,"configUniformBuffer");S(this,"debugBufferSize");S(this,"debugBuffer");S(this,"debugPixelTargetBuffer");S(this,"debugReadBuffer");S(this,"restirPassBuffer1");S(this,"restirPassBuffer2");S(this,"workBuffer");S(this,"samplesCountBuffer");S(this,"resetSegment");S(this,"requestedReset",!1);S(this,"requestShaderCompilation",!1);S(this,"sceneDataManager");S(this,"haltonSampler",new du);S(this,"uniformSampler",new Zs);S(this,"srUniformSampler",new Zs("seed-string-7"));S(this,"uniformSampler2",new Zs("seed-string-8"));S(this,"blueNoiseSampler",new vu);S(this,"computeTile",new us({avgPerfToDecrease:80,avgPerfToIncrease:120,changeTileSizeOnNewLineOnly:!0,performanceHistoryCount:3}));S(this,"spatialResampleTile",new us({avgPerfToDecrease:80,avgPerfToIncrease:120,changeTileSizeOnNewLineOnly:!0,performanceHistoryCount:3}));S(this,"renderState",{state:"compute-start",srIndex:-1,icIndex:0});S(this,"onUpdateCamera",()=>{this.requestReset()});S(this,"updateConfig",()=>{this.requestReset(),this.device.queue.writeBuffer(this.configUniformBuffer,0,this.configManager.getOptionsBuffer()),this.SPATIAL_REUSE_PASSES!=this.configManager.options.ReSTIR.RESTIR_SR_PASS_COUNT&&(this.SPATIAL_REUSE_PASSES=this.configManager.options.ReSTIR.RESTIR_SR_PASS_COUNT,this.updateBindGroup0()),this.configManager.options.ReSTIR.GBH_VARIANT!=this.configManager.prevOptions.ReSTIR.GBH_VARIANT&&(this.requestShaderCompilation=!0)});S(this,"updateScene",()=>{if(!this.sceneDataManager)return;this.requestReset(),this.requestShaderCompilation=!0,this.sceneDataManager.camera.e.addEventListener("change",this.onUpdateCamera),this.onUpdateCamera();let{trianglesBuffer:t,materialsBuffer:i,bvhBuffer:r,lightsCDFBuffer:s,envmapPC2DArrayBuffer:n,envmapPC2DBuffer:l,envmapTexture:o,envmapInfoBuffer:u,textureArraySegment:c}=this.sceneDataManager;this.bindGroup3=this.device.createBindGroup({label:"compute bindgroup - scene data",layout:this.bindGroupLayouts[3],entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:{buffer:i}},{binding:2,resource:{buffer:r}},{binding:3,resource:{buffer:s}},{binding:4,resource:{buffer:n}},{binding:5,resource:{buffer:l}},{binding:6,resource:o.createView()},{binding:7,resource:{buffer:u}},{binding:8,resource:c.textures128.createView({dimension:"2d-array"})},{binding:9,resource:c.textures512.createView({dimension:"2d-array"})},{binding:10,resource:c.textures1024.createView({dimension:"2d-array"})},{binding:11,resource:he.common.lutManager.getTexture().createView({dimension:"3d"})},{binding:12,resource:he.common.blueNoiseTexture.createView()}]}),this.createBindGroup1()});let e=he.device;this.device=e,this.resetSegment=new hu(e),this.passPerformance=new fu(e),this.bindGroupLayouts=[Xt(e,["storage","storage","uniform"]),Xt(e,["uniform","uniform","uniform","uniform","uniform","uniform"]),Xt(e,["storage","uniform"]),Xt(e,["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform","texture","uniform","2d-array","2d-array","2d-array","3d","texture"])],this.layout=e.createPipelineLayout({label:"ReSTIR pipeline layout",bindGroupLayouts:this.bindGroupLayouts}),this.canvasSizeUniformBuffer=e.createBuffer({label:"canvas size uniform restirPT",size:2*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.tileUniformBuffer=e.createBuffer({label:"tile uniform restirPT",size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sequenceUniformBuffer=e.createBuffer({label:"sequence uniform restirPT",size:this.RANDOMS_BUFFER_COUNT*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.restirRandomsUniformBuffer=e.createBuffer({label:"restir randoms uniform restirPT",size:this.RANDOMS_BUFFER_COUNT*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.passInfoUniformBuffer=e.createBuffer({label:"pass info uniform restirPT",size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.configUniformBuffer=e.createBuffer({label:"config uniform restirPT",size:this.configManager.bufferSize,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugBufferSize=100,this.debugBuffer=this.device.createBuffer({label:"debug restirPT",size:4*this.debugBufferSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.debugPixelTargetBuffer=this.device.createBuffer({label:"debug pixel target restirPT",size:4*2,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.debugReadBuffer=this.device.createBuffer({label:"debug read restirPT",size:4*this.debugBufferSize,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.setDebugPixelTarget(0,0),this.configManager.e.addEventListener("config-update",this.updateConfig),this.updateConfig(),this.requestShaderCompilation=!0}setDebugPixelTarget(e,t){this.device.queue.writeBuffer(this.debugPixelTargetBuffer,0,new Uint32Array([e,t])),this.device.queue.writeBuffer(this.debugBuffer,0,new Float32Array(Array.from({length:this.debugBufferSize},(i,r)=>0))),this.bindGroup2=this.device.createBindGroup({label:"compute bindgroup - debug buffer",layout:this.bindGroupLayouts[2],entries:[{binding:0,resource:{buffer:this.debugBuffer}},{binding:1,resource:{buffer:this.debugPixelTargetBuffer}}]})}async logDebugResult(){await this.debugReadBuffer.mapAsync(GPUMapMode.READ),new Float32Array(this.debugReadBuffer.getMappedRange()),this.debugReadBuffer.unmap()}setSceneDataManager(e){this.sceneDataManager=e,this.sceneDataManager.e.addEventListener("on-scene-update",this.updateScene)}updatePassInfoBuffer(){const e=this.renderState.srIndex==this.SPATIAL_REUSE_PASSES-1;let t=this.renderState.srIndex+1;(this.renderState.state=="compute"||this.renderState.state=="compute-start")&&(t=0),this.device.queue.writeBuffer(this.passInfoUniformBuffer,0,new Uint32Array([e?1:0,this.renderState.icIndex,t,$e.count]))}createBindGroup1(){this.sceneDataManager&&(this.bindGroup1=this.device.createBindGroup({label:"compute bindgroup - camera struct",layout:this.bindGroupLayouts[1],entries:[{binding:0,resource:{buffer:this.sceneDataManager.camera.cameraUniformBuffer}},{binding:1,resource:{buffer:this.sequenceUniformBuffer}},{binding:2,resource:{buffer:this.restirRandomsUniformBuffer}},{binding:3,resource:{buffer:this.configUniformBuffer}},{binding:4,resource:{buffer:this.passInfoUniformBuffer}},{binding:5,resource:{buffer:this.tileUniformBuffer}}]}))}resetRestirPassData(){const e=this.canvasSize.x*this.canvasSize.y*this.RESERVOIR_SIZE,t=new Uint8Array(e);this.device.queue.writeBuffer(this.restirPassBuffer1,0,t),this.device.queue.writeBuffer(this.restirPassBuffer2,0,t)}resize(e,t,i){this.workBuffer=t,this.samplesCountBuffer=i,this.resetSegment.resize(e,t,i),this.computeTile.setCanvasSize(e),this.spatialResampleTile.setCanvasSize(e),this.canvasSize=e,this.device.queue.writeBuffer(this.canvasSizeUniformBuffer,0,new Uint32Array([e.x,e.y]));const r=e.x*e.y*this.RESERVOIR_SIZE;this.restirPassInputMBcount=r/(1024*1024),r>he.adapter.limits.maxStorageBufferBindingSize&&da.set("Error: ReSTIR buffer size exceeds maximum storage buffer byte allocation for your GPU - Lower the resolution of your canvas"),this.restirPassBuffer1&&this.restirPassBuffer1.destroy(),this.restirPassBuffer2&&this.restirPassBuffer2.destroy(),this.restirPassBuffer1=this.device.createBuffer({label:"restir pass data 1",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.restirPassBuffer2=this.device.createBuffer({label:"restir pass data 2",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.updateBindGroup0(),this.requestReset()}updateBindGroup0(){if(this.restirPassBuffer1){this.bindGroup0=[],this.bindGroup0.push(this.device.createBindGroup({label:"compute bindgroup",layout:this.bindGroupLayouts[0],entries:[{binding:0,resource:{buffer:this.restirPassBuffer1}},{binding:1,resource:{buffer:this.restirPassBuffer2}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]}));for(let e=0;e<this.SPATIAL_REUSE_PASSES;e++)this.bindGroup0.push(this.device.createBindGroup({label:"spatial reuse bindgroup 0",layout:this.bindGroupLayouts[0],entries:[{binding:0,resource:{buffer:e%2==0?this.restirPassBuffer1:this.restirPassBuffer2}},{binding:1,resource:{buffer:e%2==0?this.restirPassBuffer2:this.restirPassBuffer1}},{binding:2,resource:{buffer:this.canvasSizeUniformBuffer}}]}))}}requestReset(){this.requestedReset=!0,$e.reset()}resetSamplesAndTile(){this.requestedReset=!1,this.computeTile.resetTile(new oe(64,64)),this.spatialResampleTile.resetTile(new oe(64,64)),this.renderState={state:"compute-start",srIndex:0,icIndex:0},this.updatePassInfoBuffer(),this.resetRestirPassData(),this.resetSegment.reset(),this.haltonSampler.reset(),this.blueNoiseSampler.reset(),this.uniformSampler.reset(),this.srUniformSampler.reset()}updateReSTIRRandoms(){if(this.renderState.state=="sr"||this.renderState.state=="sr-start"){let e=this.configManager.options.ReSTIR.SAMPLER_TYPE;if(e==Di.UNIFORM){let t=new Float32Array(this.uniformSampler2.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.restirRandomsUniformBuffer,0,t)}if(e==Di.BLUE_NOISE){let t=new Float32Array(this.blueNoiseSampler.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.restirRandomsUniformBuffer,0,t)}if(e==Di.HALTON_2_THEN_UNIFORM){let t=this.haltonSampler.getSamples(2),i=this.uniformSampler2.getSamples(this.RANDOMS_BUFFER_COUNT-2);this.device.queue.writeBuffer(this.restirRandomsUniformBuffer,0,new Float32Array([...t,...i]))}}else{let e=new Float32Array(this.uniformSampler2.getSamples(this.RANDOMS_BUFFER_COUNT));this.device.queue.writeBuffer(this.restirRandomsUniformBuffer,0,e)}}updateRandomSeed(){this.device.queue.writeBuffer(this.sequenceUniformBuffer,0,new Float32Array(this.uniformSampler.getSamples(1))),this.updateReSTIRRandoms()}async createPipeline(){Ni.set("compiling shaders");const e=this.device.createShaderModule({label:"ReSTIR PT module",code:$d(he.common.lutManager,this.configManager)});this.pipeline=await this.device.createComputePipelineAsync({label:"ReSTIR PT pipeline",layout:this.layout,compute:{module:e,entryPoint:"compute"}}),Ni.set("")}saveTilePerformance(e,t){e.isTilePerformanceMeasureable()&&(e.saveComputationPerformance(t),$e.setPerformance(t))}updateTile(e){this.device.queue.writeBuffer(this.tileUniformBuffer,0,new Uint32Array([e.x,e.y,e.w,e.h]))}async compute(){if(this.requestedReset&&this.resetSamplesAndTile(),this.requestShaderCompilation&&(await this.createPipeline(),this.requestShaderCompilation=!1),!this.pipeline||!this.bindGroup0||!this.bindGroup1||!this.bindGroup2||!this.bindGroup3||!this.canvasSize)throw new Error("undefined bind groups / pipeline / canvasSize");if(this.canvasSize.x===0||this.canvasSize.y===0)throw new Error("canvas size dimensions is 0");if($e.setReSTIRState({state:this.renderState.state,srPassIndex:this.renderState.srIndex,initialCandidateIndex:this.renderState.icIndex,bufferSizeMB:this.restirPassInputMBcount}),this.renderState.state=="compute-start"&&(this.renderState.icIndex=0,this.renderState.srIndex=0,this.renderState.state="compute",this.updateRandomSeed(),this.updateReSTIRRandoms(),this.updatePassInfoBuffer()),this.renderState.state=="compute"){let e=this.computeTile.getNextTile();this.updateTile(e);const t=this.computeTile.getWorkGroupCount(),i=this.device.createCommandEncoder({label:"ReSTIR encoder"}),r={label:"initial pass"};this.passPerformance.updateComputePassDescriptor(r);const s=i.beginComputePass(r);s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup0[0]),s.setBindGroup(1,this.bindGroup1),s.setBindGroup(2,this.bindGroup2),s.setBindGroup(3,this.bindGroup3),s.dispatchWorkgroups(t.x,t.y),s.end(),this.passPerformance.resolve(i),i.copyBufferToBuffer(this.debugBuffer,0,this.debugReadBuffer,0,this.debugBuffer.size);let n=performance.now();const l=i.finish();this.device.queue.submit([l]),await this.device.queue.onSubmittedWorkDone();let o=performance.now();this.saveTilePerformance(this.computeTile,o-n),this.computeTile.isLastTileBeforeRestart()&&(this.renderState.icIndex==this.configManager.options.ReSTIR.RESTIR_INITIAL_CANDIDATES-1?(this.renderState.state="sr",this.renderState.srIndex=0,this.renderState.icIndex=0,this.updateRandomSeed(),this.updateReSTIRRandoms(),this.updatePassInfoBuffer()):(this.renderState.icIndex++,this.updateRandomSeed(),this.updateReSTIRRandoms(),this.updatePassInfoBuffer()));return}if(this.renderState.state=="sr"){let e=this.renderState.srIndex==this.SPATIAL_REUSE_PASSES-1,t=this.spatialResampleTile.getNextTile(),i=this.spatialResampleTile.isLastTileBeforeRestart();this.updateTile(t);const r=this.spatialResampleTile.getWorkGroupCount(),s=this.device.createCommandEncoder({label:"ReSTIR encoder"}),n={label:`spatial-reuse pass i: ${this.renderState.srIndex}`};this.passPerformance.updateComputePassDescriptor(n);const l=s.beginComputePass(n);l.setPipeline(this.pipeline),l.setBindGroup(0,this.bindGroup0[this.renderState.srIndex+1]),l.setBindGroup(1,this.bindGroup1),l.setBindGroup(2,this.bindGroup2),l.setBindGroup(3,this.bindGroup3),l.dispatchWorkgroups(r.x,r.y),l.end(),this.passPerformance.resolve(s),i&&e&&(this.reservoirToRadSegment.setBuffers(this.SPATIAL_REUSE_PASSES%2==0?this.restirPassBuffer1:this.restirPassBuffer2,this.SPATIAL_REUSE_PASSES%2==0?this.restirPassBuffer2:this.restirPassBuffer1,this.workBuffer,this.samplesCountBuffer,this.canvasSizeUniformBuffer),this.reservoirToRadSegment.addPass(s,this.canvasSize)),s.copyBufferToBuffer(this.debugBuffer,0,this.debugReadBuffer,0,this.debugBuffer.size);let o=performance.now();const u=s.finish();this.device.queue.submit([u]),await this.device.queue.onSubmittedWorkDone();let c=performance.now();this.saveTilePerformance(this.spatialResampleTile,c-o),i&&(e?(this.renderState.state="compute-start",$e.increment()):(this.renderState.srIndex++,this.updateReSTIRRandoms(),this.updatePassInfoBuffer()));return}}dispose(){var e,t;this.resetSegment.dispose(),this.canvasSizeUniformBuffer.destroy(),this.passInfoUniformBuffer.destroy(),this.sequenceUniformBuffer.destroy(),this.restirRandomsUniformBuffer.destroy(),this.configUniformBuffer.destroy(),this.tileUniformBuffer.destroy(),this.debugBuffer.destroy(),this.debugPixelTargetBuffer.destroy(),this.debugReadBuffer.destroy(),this.restirPassBuffer1.destroy(),this.restirPassBuffer2.destroy(),this.configManager.e.removeEventListener("config-update",this.updateConfig),(e=this.sceneDataManager)==null||e.camera.e.removeEventListener("change",this.onUpdateCamera),(t=this.sceneDataManager)==null||t.e.removeEventListener("on-scene-update",this.updateScene)}}async function Gd(a){try{const e=await fetch(a);if(!e.ok)throw new Error("Network response was not ok.");return await e.arrayBuffer()}catch(e){console.error("There was a problem fetching the file:",e)}}var Ks=(a=>(a[a.MultiScatterTorranceSparrow=0]="MultiScatterTorranceSparrow",a[a.MultiScatterDielectricEo=1]="MultiScatterDielectricEo",a[a.MultiScatterDielectricEoInverse=2]="MultiScatterDielectricEoInverse",a[a.MultiScatterDielectricEavg=3]="MultiScatterDielectricEavg",a[a.MultiScatterDielectricEavgInverse=4]="MultiScatterDielectricEavgInverse",a))(Ks||{});let Hd=`
  const LUT_MultiScatterTorranceSparrow = 0;
  const LUT_MultiScatterDielectricEo = 1;
  const LUT_MultiScatterDielectricEoInverse = 2;
  const LUT_MultiScatterDielectricEavg = 3;
  const LUT_MultiScatterDielectricEavgInverse = 4;
`;class qd{constructor(e){S(this,"cache",{});S(this,"offsetsShaderPart","");S(this,"zOffsetPointer",0);S(this,"lut32data",[]);S(this,"device");this.device=e}async load(e,t){if(!this.cache[e]){let h=await Gd(e);if(!h)throw new Error("Couldn't load buffer: "+e);this.cache[e]=h}let i=this.cache[e],r=4*4,s=new Uint32Array(i,0,4),n=s[0],l=s[1],o=s[2],u=s[3],c=new Float32Array(i,r,l*o*u*n);return t==0&&(this.offsetsShaderPart+=`
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
      `),this.zOffsetPointer+=u,this.storeLUTdata(l,o,u,n,c),{arrayData:c}}storeLUTdata(e,t,i,r,s){if(e!=32)throw new Error("size of LUT is not 32 - implementation of 64x64x64 LUTs is not completed yet");for(let n=0;n<i;n++)for(let l=0;l<32;l++)for(let o=0;o<32;o++){if(l>=t){this.lut32data.push(0,0,0,0);continue}else if(o>=e){this.lut32data.push(0,0,0,0);continue}for(let u=0;u<4;u++){if(u>=r){this.lut32data.push(0);continue}this.lut32data.push(s[n*32*32*r+l*32*r+o*r+u])}}}getTexture(){let e=Math.max(this.lut32data.length/4096,1);const t=this.device.createTexture({label:"lut 32 texture 3D",size:[32,32,e],dimension:"3d",format:"rgba32float",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});return this.lut32data.length>0&&this.device.queue.writeTexture({texture:t},new Float32Array(this.lut32data),{bytesPerRow:32*4*4,rowsPerImage:32},{width:32,height:32,depthOrArrayLayers:e}),t}getShaderPart(){return`
      ${Hd}

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
    `}}async function jd(a){const t=await(await fetch(a)).blob();return await createImageBitmap(t,{colorSpaceConversion:"none"})}async function Wd(a,e){const t=await jd(e),i=a.createTexture({label:e,format:"rgba8unorm",size:[t.width,t.height],usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return a.queue.copyExternalImageToTexture({source:t,flipY:!0},{texture:i},{width:t.width,height:t.height}),i}async function Xd(){let a=new qd(he.device);await a.load("luts/torranceSparrowMultiScatter.LUT",Ks.MultiScatterTorranceSparrow),await a.load("luts/multiScatterDielectricEo.LUT",Ks.MultiScatterDielectricEo),await a.load("luts/multiScatterDielectricEoInverse.LUT",Ks.MultiScatterDielectricEoInverse);let e=await Wd(he.device,"blue-noise-textures/256_256/HDR_RGBA_0.png");he.common.lutManager=a,he.common.blueNoiseTexture=e}let $o={};function Yd(a){return $o[a]?!1:($o[a]=!0,!0)}const Zd=`
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
`;class Kd{constructor(){S(this,"device");S(this,"context");S(this,"pipeline");S(this,"renderSampler");S(this,"bindGroup0",null);S(this,"sampler");S(this,"textures128");S(this,"textures512");S(this,"textures1024");this.context=he.context;let e=he.device;this.device=e;const t=this.device.createShaderModule({label:"render texture shader",code:Zd});this.pipeline=e.createRenderPipeline({label:"mip level generator pipeline",layout:"auto",vertex:{module:t},fragment:{module:t,targets:[{format:"rgba8unorm"}]}}),this.renderSampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.sampler=this.device.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear"}),this.textures128=this.device.createTexture({label:"dummy texture array segment 128 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures512=this.device.createTexture({label:"dummy texture array segment 512 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING}),this.textures1024=this.device.createTexture({label:"dummy texture array segment 1024 texture",size:[1,1,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING})}dispose(){this.textures128.destroy(),this.textures512.destroy(),this.textures1024.destroy()}update(e){let t=0,i=[],r=0,s=[],n=0,l=[];for(let u=0;u<e.length;u++){let c=e[u];for(let h in c.textures){let f=c.textures[h],d=Math.max(f.width,f.height);d<=128?(c.texturesLocation[h]=new oe(0,t),t++,i.push({image:f,flipY:c.flipTextureY})):d<=512?(c.texturesLocation[h]=new oe(1,r),r++,s.push({image:f,flipY:c.flipTextureY})):(c.texturesLocation[h]=new oe(2,n),n++,l.push({image:f,flipY:c.flipTextureY}))}}t>0&&(this.textures128&&this.textures128.destroy(),this.textures128=this.device.createTexture({label:"texture array segment 128 texture",size:[128,128,t],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),r>0&&(this.textures512&&this.textures512.destroy(),this.textures512=this.device.createTexture({label:"texture array segment 512 texture",size:[512,512,r],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),n>0&&(this.textures1024&&this.textures1024.destroy(),this.textures1024=this.device.createTexture({label:"texture array segment 1024 texture",size:[1024,1024,n],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}));const o=async(u,c,h)=>{const f=document.createElement("canvas");f.width=h.image.width,f.height=h.image.height,f.getContext("2d").drawImage(h.image,0,0);const p=await createImageBitmap(f),g=this.device.createTexture({size:[h.image.width,h.image.height],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});this.device.queue.copyExternalImageToTexture({source:p,flipY:h.flipY},{texture:g},{width:h.image.width,height:h.image.height}),this.bindGroup0=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.renderSampler},{binding:1,resource:g.createView()}]});let v=this.textures128;u=="512"&&(v=this.textures512),u=="1024"&&(v=this.textures1024),this.render(v,c),g.destroy()};i.forEach((u,c)=>{o("128",c,u)}),s.forEach((u,c)=>{o("512",c,u)}),l.forEach((u,c)=>{o("1024",c,u)})}render(e,t){if(!this.bindGroup0)throw new Error("undefined render bind group");const i={label:"our basic canvas renderPass",colorAttachments:[{view:e.createView({dimension:"2d-array",baseArrayLayer:t,arrayLayerCount:1}),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}]},r=this.device.createCommandEncoder({label:"render encoder"}),s=r.beginRenderPass(i);s.setPipeline(this.pipeline),s.setBindGroup(0,this.bindGroup0),s.draw(6),s.end();const n=r.finish();this.device.queue.submit([n])}}class Jd{constructor(e){S(this,"textureArraySegment",new Kd);S(this,"trianglesBuffer");S(this,"materialsBuffer");S(this,"bvhBuffer");S(this,"lightsCDFBuffer");S(this,"envmapPC2DBuffer");S(this,"envmapPC2DArrayBuffer");S(this,"envmapInfoBuffer");S(this,"e",new Er);S(this,"scene");S(this,"camera");S(this,"envmapTexture");S(this,"bvh");S(this,"configManager",new ln);this.device=e,this.configManager.e.addEventListener("config-update",()=>{this.updateConfig()})}async update(e){this.dispose(),this.scene=e,this.camera=e.camera,this.camera.e.addEventListener("change",this.onUpdateCamera.bind(this)),this.textureArraySegment.update(e.materials);const t=new ls(e);this.bvh=t,this.bvh.computeLightPickProbabilities();let{trianglesBufferData:i,trianglesBufferDataByteSize:r,BVHBufferData:s,BVHBufferDataByteSize:n}=t.getBufferData(),{LightsCDFBufferData:l,LightsCDFBufferDataByteSize:o}=t.getLightsCDFBufferData(),u=[];e.materials.forEach(p=>{p.getFloatsArray().forEach(v=>u.push(v))});let c=new Float32Array(u),h=e.envmap||new Qi;this.configManager.setStoreProperty({ENVMAP_SCALE:h.scale,ENVMAP_ROTX:h.rotX,ENVMAP_ROTY:h.rotY,shaderConfig:{...this.configManager.options.shaderConfig,HAS_ENVMAP:!!e.envmap}});let f=this.configManager.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?h.compensatedDistribution.getBufferData():h.distribution.getBufferData(),d=this.configManager.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?h.compensatedDistribution.getArrayData():h.distribution.getArrayData();this.envmapTexture=h.getTexture(this.device).texture,this.trianglesBuffer=this.device.createBuffer({label:"scene triangles",size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.materialsBuffer=this.device.createBuffer({label:"scene materials",size:c.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.bvhBuffer=this.device.createBuffer({label:"scene bvh",size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.lightsCDFBuffer=this.device.createBuffer({label:"scene light CDF",size:o,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.envmapPC2DBuffer=this.device.createBuffer({label:"scene envmap PC2D",size:f.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.envmapPC2DArrayBuffer=this.device.createBuffer({label:"scene envmap array",size:d.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.envmapInfoBuffer=h.createEnvmapInfoBuffer(this.device),this.device.queue.writeBuffer(this.trianglesBuffer,0,i),this.device.queue.writeBuffer(this.materialsBuffer,0,c),this.device.queue.writeBuffer(this.bvhBuffer,0,s),this.device.queue.writeBuffer(this.lightsCDFBuffer,0,l),this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,f),this.device.queue.writeBuffer(this.envmapPC2DArrayBuffer,0,d),this.e.fireEvent("on-scene-update")}updateConfig(){var i;let e=(i=this.scene)==null?void 0:i.envmap,t=!1;if(e&&this.configManager.options.ENVMAP_SCALE!=e.scale){e.scale=this.configManager.options.ENVMAP_SCALE,this.bvh.computeLightPickProbabilities();let{trianglesBufferData:r,trianglesBufferDataByteSize:s,BVHBufferData:n,BVHBufferDataByteSize:l}=this.bvh.getBufferData(),{LightsCDFBufferData:o,LightsCDFBufferDataByteSize:u}=this.bvh.getLightsCDFBufferData();this.device.queue.writeBuffer(this.lightsCDFBuffer,0,o),this.device.queue.writeBuffer(this.trianglesBuffer,0,r),this.device.queue.writeBuffer(this.bvhBuffer,0,n),t=!0}if(e&&(this.configManager.options.ENVMAP_ROTX!=e.rotX||this.configManager.options.ENVMAP_ROTY!=e.rotY)&&(e.rotX=this.configManager.options.ENVMAP_ROTX,e.rotY=this.configManager.options.ENVMAP_ROTY,t=!0),e&&t&&e.updateEnvmapInfoBuffer(this.device,this.envmapInfoBuffer),e&&this.configManager.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION!=this.configManager.prevOptions.ENVMAP_USE_COMPENSATED_DISTRIBUTION){let r=this.configManager.options.ENVMAP_USE_COMPENSATED_DISTRIBUTION?e.compensatedDistribution.getBufferData():e.distribution.getBufferData();this.device.queue.writeBuffer(this.envmapPC2DBuffer,0,r)}}onUpdateCamera(){Pi.update(e=>(e.position=this.camera.position.clone(),this.camera instanceof ms&&(e.target=this.camera.target.clone()),e))}getFocusDistanceFromScreenPoint(e,t){if(!this.bvh)return-1;let i=this.camera.screenPointToRay(e,t),r=this.bvh.intersectRay(i.ro,i.rd);return r.hit?this.camera.getFocusDistanceFromIntersectionPoint(r.hitPoint):-1}dispose(){var e,t,i,r,s,n,l,o,u;(e=this.trianglesBuffer)==null||e.destroy(),(t=this.materialsBuffer)==null||t.destroy(),(i=this.bvhBuffer)==null||i.destroy(),(r=this.lightsCDFBuffer)==null||r.destroy(),(s=this.envmapPC2DBuffer)==null||s.destroy(),(n=this.envmapPC2DArrayBuffer)==null||n.destroy(),(l=this.envmapInfoBuffer)==null||l.destroy(),(o=this.envmapTexture)==null||o.destroy(),(u=this.camera)==null||u.dispose(),this.bvh=void 0}}let bt,hs,Li,qt,fs,Ht=new oe(-1,-1);const he={device:null,adapter:null,context:null,format:null,canvas:null,common:{lutManager:null,blueNoiseTexture:null},buffers:{radianceBuffer:null,samplesCountBuffer:null},animationFrameHandle:null,assetsPath:"https://domenicobrz.github.io/scene-assets/",e:new Er,version:"1.0.0"};async function Qd(a){const{device:e,context:t,adapter:i}=await Id(a),r=navigator.gpu.getPreferredCanvasFormat();return t.configure({device:e,format:r}),he.device=e,he.adapter=i,he.context=t,he.format=r,he.canvas=a,await Xd(),hs=new zf(t,r),Li=new Ed(t,r),fs=new Jd(he.device),await Cu(tt(os)),new ResizeObserver(async n=>{Yd("first-canvas-resize")?await Eu(tt(ye).integrator):Ru(a,e,qt,bt,hs,Li)}).observe(a),Ff("l",()=>bt.logDebugResult()),sp(),rp(),{getFocusDistanceFromScreenPoint:n=>fs.getFocusDistanceFromScreenPoint(n,Ht),restart:()=>bt instanceof Tu?bt.requestReset():bt.resetSamplesAndTile()}}function Ru(a,e,t,i,r,s){Ht=Yt(a.width,a.height),t.camera.onCanvasResize(Ht),he.buffers.radianceBuffer&&he.buffers.radianceBuffer.destroy(),he.buffers.samplesCountBuffer&&he.buffers.samplesCountBuffer.destroy();const n=new Float32Array(Ht.x*Ht.y*4);he.buffers.radianceBuffer=e.createBuffer({label:"radiance",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(he.buffers.radianceBuffer,0,n),he.buffers.samplesCountBuffer=e.createBuffer({label:"samples count",size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(he.buffers.samplesCountBuffer,0,new Uint32Array(Ht.x*Ht.y)),i.resize(Ht,he.buffers.radianceBuffer,he.buffers.samplesCountBuffer),r.resize(Ht,he.buffers.radianceBuffer,he.buffers.samplesCountBuffer),s.resize(Ht)}let Go="";async function Mu(){qt.camera.renderLoopUpdate();let a=tt(Yr);Go=="compute"&&a!="compute"&&bt.resetSamplesAndTile(),a=="compute"?await ip():a=="preview"?ep():a=="realtime"&&tp(),Go=a,he.animationFrameHandle=requestAnimationFrame(Mu),he.e.fireEvent("on-after-render")}function ep(){Li.setMode("normal"),Li.render()}function tp(){Li.setMode("camera-light"),Li.render()}async function ip(){$e.count>=$e.limit||(await bt.compute(),hs.render())}function Au(){return new Promise((a,e)=>{function t(){he.e.removeEventListener("on-after-render",t),a(null)}he.e.addEventListener("on-after-render",t)})}function rp(){ye.subscribe(a=>{let e=ye.getOldValue().integrator,t=a.integrator;t!=e&&Eu(t)})}function sp(){let a=tt(os);os.subscribe(e=>{e!=a&&(Cu(e),a=e)})}async function Cu(a){Ni.set("creating scene"),await Vo(),qt&&(qt.dispose(),await Au()),qt=await Ad(a),qt.camera.setCanvasContainer(he.canvas.parentElement),Ni.set("processing bvh and materials"),await Vo(),fs.update(qt),hs.updateScene(qt),Li.updateScene(qt),Ni.set("")}async function Eu(a){bt&&(await Au(),bt.dispose()),he.animationFrameHandle&&cancelAnimationFrame(he.animationFrameHandle),a=="ReSTIR"&&(bt=new Tu),a=="Simple-path-trace"&&(bt=new Df),bt.setSceneDataManager(fs),fs.e.fireEvent("on-scene-update"),Ru(he.canvas,he.device,qt,bt,hs,Li),bt.setDebugPixelTarget(368,313),Mu()}function np(a){let e,t;return{c(){e=Ge("svg"),t=Ge("path"),this.h()},l(i){e=He(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var r=G(e);t=He(r,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0}),G(t).forEach(y),r.forEach(y),this.h()},h(){b(t,"fill-rule","evenodd"),b(t,"clip-rule","evenodd"),b(t,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),b(t,"transform","scale(64)"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 1024 1024"),b(e,"fill","none"),b(e,"class","svelte-1cmb9l6")},m(i,r){M(i,e,r),E(e,t)},p:ge,i:ge,o:ge,d(i){i&&y(e)}}}class ap extends Me{constructor(e){super(),Ae(this,e,null,np,Re,{})}}function op(a){let e,t;return{c(){e=Ge("svg"),t=Ge("path"),this.h()},l(i){e=He(i,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var r=G(e);t=He(r,"path",{opacity:!0,d:!0}),G(t).forEach(y),r.forEach(y),this.h()},h(){b(t,"opacity","1.00"),b(t,"d"," M 519.58 71.87 C 547.39 70.05 575.34 71.56 602.98 74.87 C 684.61 84.97 763.33 117.32 828.56 167.41 C 887.93 212.71 936.25 272.38 968.11 339.93 C 1010.50 429.19 1023.22 532.02 1004.36 628.96 C 988.09 714.73 946.85 795.48 887.30 859.27 C 835.86 914.65 770.88 957.42 699.51 982.39 C 603.65 1016.28 496.76 1017.63 400.05 986.29 C 341.49 967.45 286.76 936.86 240.01 896.89 C 180.20 846.03 133.40 779.93 105.63 706.48 C 73.48 622.27 66.61 528.74 85.74 440.71 C 101.73 365.93 136.69 295.37 186.16 237.10 C 224.39 191.97 271.17 154.09 323.36 126.26 C 383.69 93.97 451.24 75.16 519.58 71.87 M 518.62 161.85 C 494.01 163.45 469.56 167.47 445.73 173.82 C 377.19 191.91 314.32 230.21 266.21 282.21 C 223.03 328.46 191.72 385.72 176.41 447.13 C 163.28 499.56 161.50 554.77 171.06 607.96 C 178.40 648.94 192.65 688.68 213.03 724.99 C 250.87 792.45 309.69 848.00 379.39 881.58 C 438.01 910.02 504.10 922.47 569.06 918.17 C 623.79 914.69 677.74 899.15 725.81 872.72 C 799.60 832.31 859.46 766.81 892.51 689.39 C 915.95 634.98 925.97 574.99 922.23 515.91 C 918.02 445.38 893.43 376.20 851.96 318.98 C 804.96 253.62 736.91 203.43 660.09 179.05 C 614.58 164.43 566.29 158.70 518.62 161.85 Z"),b(e,"viewBox","0 0 1088 1076"),b(e,"version","1.1"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(i,r){M(i,e,r),E(e,t)},p:ge,i:ge,o:ge,d(i){i&&y(e)}}}class lp extends Me{constructor(e){super(),Ae(this,e,null,op,Re,{})}}function up(a){let e,t,i;return{c(){e=Ge("svg"),t=Ge("path"),i=Ge("path"),this.h()},l(r){e=He(r,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var s=G(e);t=He(s,"path",{opacity:!0,d:!0}),G(t).forEach(y),i=He(s,"path",{opacity:!0,d:!0}),G(i).forEach(y),s.forEach(y),this.h()},h(){b(t,"opacity","1.00"),b(t,"d"," M 519.61 71.86 C 539.35 70.48 559.17 71.06 578.89 72.49 C 661.58 78.37 742.51 106.99 810.57 154.31 C 866.97 193.28 914.63 244.77 949.17 303.98 C 981.00 358.45 1001.63 419.43 1009.26 482.06 C 1020.62 572.36 1005.01 665.92 964.52 747.49 C 929.33 818.86 875.58 880.92 810.05 926.05 C 737.74 976.18 650.96 1005.22 563.02 1008.38 C 539.30 1009.75 515.50 1008.37 491.90 1005.97 C 436.49 999.87 382.21 983.70 332.48 958.49 C 269.64 926.74 214.16 880.55 171.43 824.59 C 121.11 759.07 88.69 679.95 78.74 597.93 C 70.25 530.28 76.83 460.80 97.74 395.90 C 121.71 321.45 164.79 253.31 221.64 199.62 C 269.66 154.03 327.46 118.76 390.04 97.07 C 431.73 82.58 475.52 73.99 519.61 71.86 M 518.58 161.86 C 439.25 166.79 361.85 197.81 301.10 249.06 C 243.99 296.74 201.03 361.37 180.29 432.90 C 153.97 522.31 161.80 621.42 202.71 705.26 C 236.45 774.86 292.05 833.57 359.56 871.27 C 422.00 906.35 494.64 922.58 566.08 918.35 C 618.62 915.41 670.55 901.40 717.32 877.24 C 794.99 837.28 858.20 769.77 892.51 689.40 C 915.95 635.00 925.97 575.01 922.23 515.93 C 918.02 445.38 893.43 376.19 851.95 318.96 C 804.96 253.63 736.95 203.46 660.17 179.07 C 614.63 164.43 566.30 158.69 518.58 161.86 Z"),b(i,"opacity","1.00"),b(i,"d"," M 416.47 271.62 C 421.37 271.44 426.28 271.24 431.18 271.67 C 432.74 272.32 434.42 272.51 436.10 272.73 C 437.36 273.23 438.63 273.70 439.91 274.21 C 441.55 274.79 443.16 275.48 444.72 276.28 C 446.22 277.19 447.75 278.03 449.32 278.82 L 449.44 279.63 L 450.55 279.46 L 450.68 280.17 C 455.41 283.53 459.23 288.07 462.26 292.98 C 462.92 294.28 463.59 295.58 464.27 296.88 C 464.92 298.54 465.57 300.19 466.22 301.86 C 467.18 305.14 467.60 308.53 468.19 311.89 C 468.59 317.39 467.67 322.88 466.28 328.19 C 465.63 329.84 465.00 331.50 464.36 333.16 C 464.11 333.65 463.59 334.65 463.34 335.14 C 463.08 335.64 462.57 336.63 462.31 337.13 C 460.71 339.86 458.81 342.39 456.74 344.79 C 456.44 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.02 347.44 453.77 347.74 C 452.13 349.09 450.48 350.45 448.80 351.76 C 448.04 352.16 447.29 352.57 446.55 352.98 C 446.49 354.20 445.95 355.13 444.93 355.78 C 420.59 374.48 398.40 396.03 379.26 420.03 C 372.88 429.29 364.58 437.72 353.90 441.81 C 352.63 442.25 351.36 442.68 350.10 443.13 C 348.77 443.46 347.46 443.83 346.16 444.23 C 340.43 444.93 334.62 444.94 328.89 444.21 C 327.57 443.82 326.25 443.45 324.93 443.12 C 323.25 442.51 321.57 441.91 319.90 441.33 C 302.68 434.08 291.73 415.41 292.84 396.91 C 293.74 386.39 297.87 375.94 305.44 368.43 C 329.49 337.13 358.01 309.36 389.11 285.10 C 394.84 281.27 400.48 277.23 406.94 274.68 C 410.05 273.63 413.14 272.37 416.47 272.25 L 416.47 271.62 Z"),b(e,"viewBox","0 0 1088 1076"),b(e,"version","1.1"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(r,s){M(r,e,s),E(e,t),E(e,i)},p:ge,i:ge,o:ge,d(r){r&&y(e)}}}class cp extends Me{constructor(e){super(),Ae(this,e,null,up,Re,{})}}function hp(a){let e,t,i;return{c(){e=Ge("svg"),t=Ge("path"),i=Ge("path"),this.h()},l(r){e=He(r,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var s=G(e);t=He(s,"path",{opacity:!0,d:!0}),G(t).forEach(y),i=He(s,"path",{opacity:!0,d:!0}),G(i).forEach(y),s.forEach(y),this.h()},h(){b(t,"opacity","1.00"),b(t,"d"," M 519.63 71.86 C 548.84 69.99 578.19 71.67 607.19 75.41 C 687.31 86.09 764.44 118.18 828.55 167.40 C 885.92 211.19 932.99 268.38 964.84 333.15 C 989.47 383.16 1005.06 437.63 1010.48 493.12 C 1020.73 593.18 997.74 696.46 945.52 782.50 C 915.42 831.39 876.98 875.34 831.54 910.52 C 800.42 934.52 766.30 954.57 730.37 970.48 C 688.95 988.58 644.77 1000.17 599.91 1005.49 C 483.84 1020.19 362.84 988.44 268.50 919.35 C 206.22 874.16 155.34 813.42 121.84 744.14 C 94.91 688.60 79.18 627.65 75.91 566.03 C 75.29 552.37 74.52 538.68 75.42 525.01 C 76.69 483.90 83.37 442.94 95.36 403.57 C 117.13 331.56 156.77 265.08 209.55 211.49 C 258.82 161.22 319.55 122.23 385.84 98.55 C 428.80 83.16 474.05 74.05 519.63 71.86 M 384.80 195.86 C 316.73 227.31 258.60 279.61 219.68 343.65 C 189.75 392.72 171.49 448.79 166.52 506.04 C 162.09 556.15 167.47 607.17 182.74 655.13 C 194.57 692.52 212.38 727.99 235.21 759.87 C 278.80 820.83 340.52 868.95 410.90 894.99 C 392.02 863.11 373.80 830.84 355.14 798.83 C 351.38 791.94 346.94 785.40 343.74 778.21 C 341.02 771.10 340.85 763.36 341.78 755.89 C 344.39 742.27 354.19 730.29 367.12 725.20 C 378.29 720.85 391.37 721.47 401.90 727.28 C 409.03 731.05 415.00 737.02 418.78 744.16 C 451.98 801.63 485.17 859.10 518.37 916.57 C 518.86 918.15 520.55 918.35 521.97 918.38 C 552.41 920.02 583.09 918.33 613.07 912.69 C 578.45 852.72 543.70 792.82 509.22 732.77 C 505.31 723.85 504.02 713.60 506.98 704.20 C 510.26 691.76 519.95 681.40 531.88 676.76 C 542.50 672.78 554.71 673.38 564.94 678.28 C 566.33 679.10 567.74 679.95 569.18 680.74 C 570.76 681.82 572.27 683.01 573.76 684.24 C 575.23 685.41 576.58 686.74 577.74 688.24 C 582.80 694.28 586.06 701.54 590.16 708.22 C 624.76 768.22 659.54 828.12 694.02 888.18 C 720.85 876.65 746.50 862.10 769.68 844.33 C 763.02 833.89 757.21 822.94 750.91 812.29 C 719.50 757.97 688.15 703.61 656.74 649.29 C 653.75 643.90 650.26 638.75 648.10 632.94 C 645.19 624.25 645.24 614.83 648.10 606.15 C 652.95 591.96 665.87 580.97 680.73 578.74 C 685.18 578.24 689.67 578.32 694.12 578.78 C 700.81 580.30 707.45 582.81 712.80 587.21 C 716.77 590.30 720.04 594.24 722.66 598.53 C 758.94 661.33 795.22 724.14 831.49 786.95 C 851.84 763.48 869.08 737.38 883.17 709.71 C 873.74 692.33 863.43 675.40 853.67 658.19 C 824.17 607.11 794.66 556.04 765.17 504.96 C 758.34 493.47 757.75 478.53 763.59 466.52 C 767.90 457.36 775.73 449.97 785.07 446.09 C 787.32 445.15 789.67 444.48 792.02 443.83 C 797.69 443.02 803.45 443.09 809.13 443.74 C 810.70 444.25 812.30 444.68 813.91 445.12 C 815.58 445.75 817.22 446.48 818.85 447.25 C 819.89 447.74 820.94 448.23 822.00 448.73 C 824.13 450.26 826.27 451.81 828.29 453.49 C 835.00 459.27 838.52 467.60 843.03 475.01 C 866.58 515.75 890.11 556.51 913.66 597.25 C 915.01 599.71 916.65 602.05 917.55 604.74 C 922.02 578.09 923.79 550.98 922.65 523.98 C 919.84 450.93 895.20 378.86 852.39 319.58 C 808.66 258.59 746.71 210.65 676.24 184.63 C 582.71 149.68 475.32 153.63 384.80 195.86 Z"),b(i,"opacity","1.00"),b(i,"d"," M 416.48 271.62 C 421.50 271.38 426.53 271.37 431.55 271.57 L 431.63 272.24 C 433.11 272.37 434.59 272.52 436.07 272.70 C 437.35 273.24 438.65 273.74 439.96 274.23 C 441.60 274.78 443.17 275.51 444.74 276.25 C 445.91 276.85 446.96 277.64 447.98 278.50 C 448.31 278.49 448.98 278.48 449.31 278.47 L 449.43 279.61 L 450.27 279.52 C 454.86 283.41 459.18 287.71 462.25 292.94 C 463.74 295.83 465.10 298.79 466.18 301.87 C 466.98 304.59 467.55 307.36 467.86 310.18 C 468.46 313.37 468.49 316.67 467.87 319.86 C 467.63 321.58 467.41 323.31 467.15 325.03 C 466.81 326.07 466.51 327.11 466.23 328.17 C 465.65 329.81 465.07 331.46 464.39 333.06 C 464.14 333.57 463.64 334.60 463.39 335.11 C 461.58 338.60 459.34 341.83 456.75 344.79 C 456.45 345.03 455.83 345.50 455.52 345.74 L 455.52 346.51 L 454.76 346.54 C 454.51 346.84 454.01 347.45 453.76 347.75 C 452.09 349.09 450.46 350.48 448.77 351.80 C 448.01 352.19 447.26 352.58 446.51 352.97 C 446.50 354.24 445.95 355.20 444.85 355.84 C 420.32 374.71 397.93 396.45 378.73 420.73 C 371.82 430.90 362.12 439.64 350.12 443.15 C 343.26 445.27 335.94 444.96 328.89 444.22 C 325.82 443.37 322.78 442.46 319.82 441.30 C 302.65 434.03 291.72 415.38 292.85 396.90 C 293.73 386.62 297.66 376.39 304.96 368.95 C 327.94 339.24 354.69 312.44 384.12 289.09 C 386.73 287.07 389.10 284.65 392.15 283.27 C 393.71 282.07 395.28 280.89 396.91 279.79 C 400.14 277.90 403.48 276.20 406.91 274.69 C 410.03 273.64 413.13 272.37 416.47 272.25 L 416.48 271.62 Z"),b(e,"viewBox","0 0 1088 1076"),b(e,"version","1.1"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(r,s){M(r,e,s),E(e,t),E(e,i)},p:ge,i:ge,o:ge,d(r){r&&y(e)}}}class fp extends Me{constructor(e){super(),Ae(this,e,null,hp,Re,{})}}function dp(a){let e,t;return{c(){e=F("hr"),this.h()},l(i){e=L(i,"HR",{style:!0,class:!0}),this.h()},h(){b(e,"style",t=`margin: ${a[0]}px 0 ${a[1]}px 0;`),b(e,"class","svelte-9cf4tr")},m(i,r){M(i,e,r)},p(i,[r]){r&3&&t!==(t=`margin: ${i[0]}px 0 ${i[1]}px 0;`)&&b(e,"style",t)},i:ge,o:ge,d(i){i&&y(e)}}}function pp(a,e,t){let{topSpace:i=5}=e,{bottomSpace:r=15}=e;return a.$$set=s=>{"topSpace"in s&&t(0,i=s.topSpace),"bottomSpace"in s&&t(1,r=s.bottomSpace)},[i,r]}class Jt extends Me{constructor(e){super(),Ae(this,e,pp,dp,Re,{topSpace:0,bottomSpace:1})}}function mp(a){let e,t,i;const r=a[2].default,s=El(r,a,a[1],null);return{c(){e=F("div"),s&&s.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var l=G(e);s&&s.l(l),l.forEach(y),this.h()},h(){b(e,"class",t=Ta(`vertical-toolbar-container ${a[0]}`)+" svelte-1yh4hsn")},m(n,l){M(n,e,l),s&&s.m(e,null),i=!0},p(n,[l]){s&&s.p&&(!i||l&2)&&Il(s,r,n,n[1],i?Bl(r,n[1],l,null):Pl(n[1]),null),(!i||l&1&&t!==(t=Ta(`vertical-toolbar-container ${n[0]}`)+" svelte-1yh4hsn"))&&b(e,"class",t)},i(n){i||(X(s,n),i=!0)},o(n){Y(s,n),i=!1},d(n){n&&y(e),s&&s.d(n)}}}function gp(a,e,t){let{$$slots:i={},$$scope:r}=e,{side:s}=e;return a.$$set=n=>{"side"in n&&t(0,s=n.side),"$$scope"in n&&t(1,r=n.$$scope)},[s,r,i]}class Iu extends Me{constructor(e){super(),Ae(this,e,gp,mp,Re,{side:0})}}function Ho(a,e,t){const i=a.slice();return i[5]=e[t],i[7]=t,i}function vp(a){let e;return{c(){e=F("div"),this.h()},l(t){e=L(t,"DIV",{class:!0}),G(e).forEach(y),this.h()},h(){b(e,"class","dot svelte-nfhthn")},m(t,i){M(t,e,i)},d(t){t&&y(e)}}}function qo(a){let e=a[5]+"",t,i,r,s=a[7]!=2&&vp();return{c(){t=ue(e),i=U(),s&&s.c(),r=Ne()},l(n){t=ce(n,e),i=V(n),s&&s.l(n),r=Ne()},m(n,l){M(n,t,l),M(n,i,l),s&&s.m(n,l),M(n,r,l)},p:ge,d(n){n&&(y(t),y(i),y(r)),s&&s.d(n)}}}function yp(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v,m,x,T,_,B;t=new lp({}),s=new cp({}),o=new fp({}),c=new Jt({}),p=new ap({});let A=Zt(a[1]),C=[];for(let w=0;w<A.length;w+=1)C[w]=qo(Ho(a,A,w));return{c(){e=F("button"),J(t.$$.fragment),i=U(),r=F("button"),J(s.$$.fragment),n=U(),l=F("button"),J(o.$$.fragment),u=U(),J(c.$$.fragment),h=U(),f=F("a"),d=F("button"),J(p.$$.fragment),g=U(),v=F("div"),m=U(),x=F("p");for(let w=0;w<C.length;w+=1)C[w].c();this.h()},l(w){e=L(w,"BUTTON",{});var O=G(e);Q(t.$$.fragment,O),O.forEach(y),i=V(w),r=L(w,"BUTTON",{});var N=G(r);Q(s.$$.fragment,N),N.forEach(y),n=V(w),l=L(w,"BUTTON",{});var P=G(l);Q(o.$$.fragment,P),P.forEach(y),u=V(w),Q(c.$$.fragment,w),h=V(w),f=L(w,"A",{href:!0,target:!0});var k=G(f);d=L(k,"BUTTON",{class:!0});var R=G(d);Q(p.$$.fragment,R),R.forEach(y),k.forEach(y),g=V(w),v=L(w,"DIV",{class:!0}),G(v).forEach(y),m=V(w),x=L(w,"P",{class:!0});var z=G(x);for(let j=0;j<C.length;j+=1)C[j].l(z);z.forEach(y),this.h()},h(){ne(e,"active",a[0]=="preview"),ne(r,"active",a[0]=="realtime"),ne(l,"active",a[0]=="compute"),b(d,"class","active"),b(f,"href","https://github.com/Domenicobrz/C2-Renderer"),b(f,"target","_blank"),b(v,"class","flex-spacer svelte-nfhthn"),b(x,"class","version-number svelte-nfhthn")},m(w,O){M(w,e,O),ee(t,e,null),M(w,i,O),M(w,r,O),ee(s,r,null),M(w,n,O),M(w,l,O),ee(o,l,null),M(w,u,O),ee(c,w,O),M(w,h,O),M(w,f,O),E(f,d),ee(p,d,null),M(w,g,O),M(w,v,O),M(w,m,O),M(w,x,O);for(let N=0;N<C.length;N+=1)C[N]&&C[N].m(x,null);T=!0,_||(B=[le(e,"click",a[2]),le(r,"click",a[3]),le(l,"click",a[4])],_=!0)},p(w,O){if((!T||O&1)&&ne(e,"active",w[0]=="preview"),(!T||O&1)&&ne(r,"active",w[0]=="realtime"),(!T||O&1)&&ne(l,"active",w[0]=="compute"),O&2){A=Zt(w[1]);let N;for(N=0;N<A.length;N+=1){const P=Ho(w,A,N);C[N]?C[N].p(P,O):(C[N]=qo(P),C[N].c(),C[N].m(x,null))}for(;N<C.length;N+=1)C[N].d(1);C.length=A.length}},i(w){T||(X(t.$$.fragment,w),X(s.$$.fragment,w),X(o.$$.fragment,w),X(c.$$.fragment,w),X(p.$$.fragment,w),T=!0)},o(w){Y(t.$$.fragment,w),Y(s.$$.fragment,w),Y(o.$$.fragment,w),Y(c.$$.fragment,w),Y(p.$$.fragment,w),T=!1},d(w){w&&(y(e),y(i),y(r),y(n),y(l),y(u),y(h),y(f),y(g),y(v),y(m),y(x)),te(t),te(s),te(o),te(c,w),te(p),ds(C,w),_=!1,Qe(B)}}}function bp(a){let e,t;return e=new Iu({props:{side:"left",$$slots:{default:[yp]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},p(i,[r]){const s={};r&257&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function xp(a,e,t){let i;qe(a,Yr,o=>t(0,i=o));let r=he.version.split(".");return[i,r,()=>gt(Yr,i="preview",i),()=>gt(Yr,i="realtime",i),()=>gt(Yr,i="compute",i)]}class wp extends Me{constructor(e){super(),Ae(this,e,xp,bp,Re,{})}}function _p(a){let e,t;return{c(){e=Ge("svg"),t=Ge("path"),this.h()},l(i){e=He(i,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,xmlns:!0,class:!0});var r=G(e);t=He(r,"path",{d:!0}),G(t).forEach(y),r.forEach(y),this.h()},h(){b(t,"d","M10.25 0h3.5a.75.75 0 0 1 0 1.5h-1v1.278a9.954 9.954 0 0 1 5.636 2.276L19.72 3.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.315 1.316A9.959 9.959 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.959 9.959 0 0 1 2.535-6.654L3.22 4.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l1.335 1.334a9.958 9.958 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5ZM12 21.25a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 12 21.25Zm4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.75.75 0 0 1 1.061 0Z"),b(e,"stroke","currentColor"),b(e,"fill","currentColor"),b(e,"stroke-width","0"),b(e,"viewBox","0 0 24 24"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(i,r){M(i,e,r),E(e,t)},p:ge,i:ge,o:ge,d(i){i&&y(e)}}}class Sp extends Me{constructor(e){super(),Ae(this,e,null,_p,Re,{})}}function Tp(a){let e,t,i,r=a[0]?"-":"+",s,n,l,o,u,c,h,f,d;const p=a[9].default,g=El(p,a,a[8],null);return{c(){e=F("div"),t=F("header"),i=F("button"),s=ue(r),n=U(),l=F("p"),o=ue(a[1]),u=U(),c=F("div"),g&&g.c(),this.h()},l(v){e=L(v,"DIV",{class:!0});var m=G(e);t=L(m,"HEADER",{class:!0});var x=G(t);i=L(x,"BUTTON",{class:!0});var T=G(i);s=ce(T,r),T.forEach(y),n=V(x),l=L(x,"P",{class:!0});var _=G(l);o=ce(_,a[1]),_.forEach(y),x.forEach(y),u=V(m),c=L(m,"DIV",{class:!0});var B=G(c);g&&g.l(B),B.forEach(y),m.forEach(y),this.h()},h(){b(i,"class","svelte-m2zujd"),b(l,"class","svelte-m2zujd"),b(t,"class","svelte-m2zujd"),ne(t,"expanded",a[0]),b(c,"class","folder-slot-container svelte-m2zujd"),ne(c,"expanded",a[0]),ne(c,"disabled",a[2]),b(e,"class","container svelte-m2zujd"),ne(e,"withBorder",a[4]),ne(e,"roundBox",a[3]),ne(e,"childOfAnotherFolder",a[5]),ne(e,"disabled",a[2])},m(v,m){M(v,e,m),E(e,t),E(t,i),E(i,s),E(t,n),E(t,l),E(l,o),E(e,u),E(e,c),g&&g.m(c,null),a[10](e),h=!0,f||(d=[le(i,"click",a[7]),le(l,"click",a[7])],f=!0)},p(v,[m]){(!h||m&1)&&r!==(r=v[0]?"-":"+")&&Oe(s,r),(!h||m&2)&&Oe(o,v[1]),(!h||m&1)&&ne(t,"expanded",v[0]),g&&g.p&&(!h||m&256)&&Il(g,p,v,v[8],h?Bl(p,v[8],m,null):Pl(v[8]),null),(!h||m&1)&&ne(c,"expanded",v[0]),(!h||m&4)&&ne(c,"disabled",v[2]),(!h||m&16)&&ne(e,"withBorder",v[4]),(!h||m&8)&&ne(e,"roundBox",v[3]),(!h||m&32)&&ne(e,"childOfAnotherFolder",v[5]),(!h||m&4)&&ne(e,"disabled",v[2])},i(v){h||(X(g,v),h=!0)},o(v){Y(g,v),h=!1},d(v){v&&y(e),g&&g.d(v),a[10](null),f=!1,Qe(d)}}}function Rp(a,e,t){let{$$slots:i={},$$scope:r}=e,{name:s}=e,{disabled:n=!1}=e,{expanded:l=!0}=e,{roundBox:o=!1}=e,{withBorder:u=!1}=e,c=!1,h;Dl(()=>{if(h){const p=h.parentElement;p&&p.classList.contains("folder-slot-container")&&t(5,c=!0)}});function f(){t(0,l=!l)}function d(p){Ke[p?"unshift":"push"](()=>{h=p,t(6,h)})}return a.$$set=p=>{"name"in p&&t(1,s=p.name),"disabled"in p&&t(2,n=p.disabled),"expanded"in p&&t(0,l=p.expanded),"roundBox"in p&&t(3,o=p.roundBox),"withBorder"in p&&t(4,u=p.withBorder),"$$scope"in p&&t(8,r=p.$$scope)},[l,s,n,o,u,c,h,f,r,i,d]}class ut extends Me{constructor(e){super(),Ae(this,e,Rp,Tp,Re,{name:1,disabled:2,expanded:0,roundBox:3,withBorder:4})}}function Mp(a){let e,t,i;return{c(){e=Ge("svg"),t=Ge("path"),i=Ge("path"),this.h()},l(r){e=He(r,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,xmlns:!0,class:!0});var s=G(e);t=He(s,"path",{d:!0}),G(t).forEach(y),i=He(s,"path",{d:!0}),G(i).forEach(y),s.forEach(y),this.h()},h(){b(t,"d","M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-1.5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"),b(i,"d","M12 1c.266 0 .532.009.797.028.763.055 1.345.617 1.512 1.304l.352 1.45c.019.078.09.171.225.221.247.089.49.19.728.302.13.061.246.044.315.002l1.275-.776c.603-.368 1.411-.353 1.99.147.402.349.78.726 1.128 1.129.501.578.515 1.386.147 1.99l-.776 1.274c-.042.069-.058.185.002.315.112.238.213.481.303.728.048.135.142.205.22.225l1.45.352c.687.167 1.249.749 1.303 1.512.038.531.038 1.063 0 1.594-.054.763-.616 1.345-1.303 1.512l-1.45.352c-.078.019-.171.09-.221.225-.089.248-.19.491-.302.728-.061.13-.044.246-.002.315l.776 1.275c.368.603.353 1.411-.147 1.99-.349.402-.726.78-1.129 1.128-.578.501-1.386.515-1.99.147l-1.274-.776c-.069-.042-.185-.058-.314.002a8.606 8.606 0 0 1-.729.303c-.135.048-.205.142-.225.22l-.352 1.45c-.167.687-.749 1.249-1.512 1.303-.531.038-1.063.038-1.594 0-.763-.054-1.345-.616-1.512-1.303l-.352-1.45c-.019-.078-.09-.171-.225-.221a8.138 8.138 0 0 1-.728-.302c-.13-.061-.246-.044-.315-.002l-1.275.776c-.603.368-1.411.353-1.99-.147-.402-.349-.78-.726-1.128-1.129-.501-.578-.515-1.386-.147-1.99l.776-1.274c.042-.069.058-.185-.002-.314a8.606 8.606 0 0 1-.303-.729c-.048-.135-.142-.205-.22-.225l-1.45-.352c-.687-.167-1.249-.749-1.304-1.512a11.158 11.158 0 0 1 0-1.594c.055-.763.617-1.345 1.304-1.512l1.45-.352c.078-.019.171-.09.221-.225.089-.248.19-.491.302-.728.061-.13.044-.246.002-.315l-.776-1.275c-.368-.603-.353-1.411.147-1.99.349-.402.726-.78 1.129-1.128.578-.501 1.386-.515 1.99-.147l1.274.776c.069.042.185.058.315-.002.238-.112.481-.213.728-.303.135-.048.205-.142.225-.22l.352-1.45c.167-.687.749-1.249 1.512-1.304C11.466 1.01 11.732 1 12 1Zm-.69 1.525c-.055.004-.135.05-.161.161l-.353 1.45a1.832 1.832 0 0 1-1.172 1.277 7.147 7.147 0 0 0-.6.249 1.833 1.833 0 0 1-1.734-.074l-1.274-.776c-.098-.06-.186-.036-.228 0a9.774 9.774 0 0 0-.976.976c-.036.042-.06.131 0 .228l.776 1.274c.314.529.342 1.18.074 1.734a7.147 7.147 0 0 0-.249.6 1.831 1.831 0 0 1-1.278 1.173l-1.45.351c-.11.027-.156.107-.16.162a9.63 9.63 0 0 0 0 1.38c.004.055.05.135.161.161l1.45.353a1.832 1.832 0 0 1 1.277 1.172c.074.204.157.404.249.6.268.553.24 1.204-.074 1.733l-.776 1.275c-.06.098-.036.186 0 .228.301.348.628.675.976.976.042.036.131.06.228 0l1.274-.776a1.83 1.83 0 0 1 1.734-.075c.196.093.396.176.6.25a1.831 1.831 0 0 1 1.173 1.278l.351 1.45c.027.11.107.156.162.16a9.63 9.63 0 0 0 1.38 0c.055-.004.135-.05.161-.161l.353-1.45a1.834 1.834 0 0 1 1.172-1.278 6.82 6.82 0 0 0 .6-.248 1.831 1.831 0 0 1 1.733.074l1.275.776c.098.06.186.036.228 0 .348-.301.675-.628.976-.976.036-.042.06-.131 0-.228l-.776-1.275a1.834 1.834 0 0 1-.075-1.733c.093-.196.176-.396.25-.6a1.831 1.831 0 0 1 1.278-1.173l1.45-.351c.11-.027.156-.107.16-.162a9.63 9.63 0 0 0 0-1.38c-.004-.055-.05-.135-.161-.161l-1.45-.353c-.626-.152-1.08-.625-1.278-1.172a6.576 6.576 0 0 0-.248-.6 1.833 1.833 0 0 1 .074-1.734l.776-1.274c.06-.098.036-.186 0-.228a9.774 9.774 0 0 0-.976-.976c-.042-.036-.131-.06-.228 0l-1.275.776a1.831 1.831 0 0 1-1.733.074 6.88 6.88 0 0 0-.6-.249 1.835 1.835 0 0 1-1.173-1.278l-.351-1.45c-.027-.11-.107-.156-.162-.16a9.63 9.63 0 0 0-1.38 0Z"),b(e,"stroke","currentColor"),b(e,"fill","currentColor"),b(e,"stroke-width","0"),b(e,"viewBox","0 0 24 24"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(r,s){M(r,e,s),E(e,t),E(e,i)},p:ge,i:ge,o:ge,d(r){r&&y(e)}}}class Ap extends Me{constructor(e){super(),Ae(this,e,null,Mp,Re,{})}}function Cp(a){let e,t;return{c(){e=Ge("svg"),t=Ge("path"),this.h()},l(i){e=He(i,"svg",{stroke:!0,fill:!0,"stroke-width":!0,viewBox:!0,height:!0,width:!0,xmlns:!0,class:!0});var r=G(e);t=He(r,"path",{d:!0}),G(t).forEach(y),r.forEach(y),this.h()},h(){b(t,"d","M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"),b(e,"stroke","currentColor"),b(e,"fill","currentColor"),b(e,"stroke-width","0"),b(e,"viewBox","0 0 256 256"),b(e,"height","200px"),b(e,"width","200px"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(i,r){M(i,e,r),E(e,t)},p:ge,i:ge,o:ge,d(i){i&&y(e)}}}class Ep extends Me{constructor(e){super(),Ae(this,e,null,Cp,Re,{})}}function jo(a,e,t){const i=a.slice();return i[1]=e[t],i}function Wo(a){let e,t=a[1][0]+"",i,r,s,n=a[1][1]+"",l;return{c(){e=F("p"),i=ue(t),r=ue(": "),s=F("span"),l=ue(n),this.h()},l(o){e=L(o,"P",{class:!0});var u=G(e);i=ce(u,t),r=ce(u,": "),s=L(u,"SPAN",{class:!0});var c=G(s);l=ce(c,n),c.forEach(y),u.forEach(y),this.h()},h(){b(s,"class","svelte-1rt8j70"),b(e,"class","svelte-1rt8j70")},m(o,u){M(o,e,u),E(e,i),E(e,r),E(e,s),E(s,l)},p(o,u){u&1&&t!==(t=o[1][0]+"")&&Oe(i,t),u&1&&n!==(n=o[1][1]+"")&&Oe(l,n)},d(o){o&&y(e)}}}function Ip(a){let e,t=Zt(Object.entries(a[0])),i=[];for(let r=0;r<t.length;r+=1)i[r]=Wo(jo(a,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Ne()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=Ne()},m(r,s){for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(r,s);M(r,e,s)},p(r,[s]){if(s&1){t=Zt(Object.entries(r[0]));let n;for(n=0;n<t.length;n+=1){const l=jo(r,t,n);i[n]?i[n].p(l,s):(i[n]=Wo(l),i[n].c(),i[n].m(e.parentNode,e))}for(;n<i.length;n+=1)i[n].d(1);i.length=t.length}},i:ge,o:ge,d(r){r&&y(e),ds(i,r)}}}function Pp(a,e,t){let i;return qe(a,iu,r=>t(0,i=r)),[i]}class Bp extends Me{constructor(e){super(),Ae(this,e,Pp,Ip,Re,{})}}function Dp(a){let e,t,i;return{c(){e=Ge("svg"),t=Ge("path"),i=Ge("path"),this.h()},l(r){e=He(r,"svg",{viewBox:!0,version:!0,xmlns:!0,class:!0});var s=G(e);t=He(s,"path",{opacity:!0,d:!0}),G(t).forEach(y),i=He(s,"path",{opacity:!0,d:!0}),G(i).forEach(y),s.forEach(y),this.h()},h(){b(t,"opacity","1.00"),b(t,"d"," M 297.14 52.31 C 301.41 49.73 306.67 49.46 311.49 50.27 C 320.15 52.01 326.80 60.19 327.17 68.95 C 327.20 83.34 327.13 97.74 327.20 112.14 C 370.91 116.61 413.04 135.79 444.72 166.30 C 479.14 198.72 501.12 243.78 505.84 290.80 C 519.90 290.87 533.97 290.83 548.03 290.82 C 555.17 290.76 562.21 294.83 565.66 301.09 C 568.29 305.51 568.58 310.95 567.64 315.90 C 565.66 324.73 556.97 331.34 547.98 331.18 C 533.94 331.16 519.90 331.15 505.87 331.19 C 502.30 365.24 490.06 398.42 470.15 426.32 C 447.77 457.94 416.12 482.97 379.99 497.02 C 363.08 503.74 345.24 507.87 327.18 509.86 C 327.15 524.25 327.19 538.65 327.17 553.04 C 326.85 563.36 317.54 572.61 307.08 572.14 C 296.54 572.70 287.16 563.40 286.83 553.03 C 286.82 538.64 286.85 524.24 286.82 509.85 C 252.54 506.30 219.18 493.88 191.14 473.79 C 150.23 444.77 120.82 399.89 111.18 350.62 C 109.61 344.24 109.16 337.67 108.14 331.19 C 94.10 331.15 80.06 331.16 66.01 331.18 C 58.84 331.26 51.76 327.16 48.31 320.85 C 45.69 316.43 45.43 311.01 46.37 306.07 C 48.28 297.60 56.34 291.18 64.95 290.84 C 79.34 290.81 93.74 290.86 108.14 290.81 C 112.90 243.83 134.81 198.72 169.28 166.36 C 200.92 135.78 243.10 116.61 286.82 112.14 C 286.84 98.07 286.84 84.01 286.82 69.95 C 286.78 62.81 290.84 55.74 297.14 52.31 M 262.65 157.79 C 228.01 167.72 197.13 189.95 176.47 219.45 C 161.50 240.51 152.18 265.29 148.63 290.83 C 162.08 290.79 175.54 290.86 188.99 290.82 C 197.56 290.65 205.94 296.55 208.40 304.83 C 210.38 310.30 209.41 316.52 206.48 321.47 C 202.86 327.45 195.96 331.30 188.96 331.18 C 175.53 331.15 162.10 331.17 148.66 331.17 C 151.52 351.66 157.95 371.70 168.30 389.66 C 183.76 416.92 207.44 439.43 235.44 453.52 C 251.50 461.73 269.01 466.78 286.82 469.35 C 286.85 455.58 286.81 441.80 286.83 428.03 C 287.05 418.21 295.29 409.47 305.08 408.65 C 315.82 407.39 326.22 416.12 327.11 426.84 C 327.31 441.02 327.01 455.21 327.26 469.39 C 338.93 467.46 350.58 465.04 361.68 460.83 C 397.65 447.77 428.45 421.22 446.82 387.67 C 456.55 370.25 462.50 350.93 465.36 331.24 C 451.57 331.08 437.77 331.21 423.98 331.17 C 415.77 330.88 407.97 325.11 405.61 317.19 C 403.61 311.71 404.59 305.48 407.52 300.53 C 411.14 294.55 418.02 290.70 425.01 290.82 C 438.45 290.85 451.89 290.83 465.33 290.83 C 463.35 277.53 460.22 264.35 455.13 251.88 C 443.43 222.59 422.82 196.96 396.74 179.22 C 376.11 164.94 351.99 156.08 327.19 152.65 C 327.14 166.46 327.19 180.26 327.16 194.06 C 326.91 204.53 317.46 213.65 306.97 213.44 C 296.48 213.61 287.08 204.50 286.84 194.03 C 286.78 180.23 286.90 166.43 286.78 152.63 C 278.67 154.04 270.54 155.39 262.65 157.79 Z"),b(i,"opacity","1.00"),b(i,"d"," M 299.63 282.90 C 314.95 278.35 332.50 289.12 335.37 304.84 C 339.17 319.91 328.39 336.59 313.12 339.38 C 297.99 343.17 281.24 332.27 278.59 316.90 C 275.06 302.33 285.07 286.30 299.63 282.90 Z"),b(e,"viewBox","0 0 620 614"),b(e,"version","1.1"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(r,s){M(r,e,s),E(e,t),E(e,i)},p:ge,i:ge,o:ge,d(r){r&&y(e)}}}class Np extends Me{constructor(e){super(),Ae(this,e,null,Dp,Re,{})}}function zp(a){let e,t;return{c(){e=F("div"),this.h()},l(i){e=L(i,"DIV",{class:!0,style:!0}),G(e).forEach(y),this.h()},h(){b(e,"class","container"),b(e,"style",t=`margin: ${a[0]}px ${a[1]}px;`)},m(i,r){M(i,e,r)},p(i,[r]){r&3&&t!==(t=`margin: ${i[0]}px ${i[1]}px;`)&&b(e,"style",t)},i:ge,o:ge,d(i){i&&y(e)}}}function Fp(a,e,t){let{vertical:i=0}=e,{horizontal:r=0}=e;return a.$$set=s=>{"vertical"in s&&t(0,i=s.vertical),"horizontal"in s&&t(1,r=s.horizontal)},[i,r]}class Be extends Me{constructor(e){super(),Ae(this,e,Fp,zp,Re,{vertical:0,horizontal:1})}}function Xo(a){return Object.prototype.toString.call(a)==="[object Date]"}function Qn(a,e,t,i){if(typeof t=="number"||Xo(t)){const r=i-t,s=(t-e)/(a.dt||1/60),n=a.opts.stiffness*r,l=a.opts.damping*s,o=(n-l)*a.inv_mass,u=(s+o)*a.dt;return Math.abs(u)<a.opts.precision&&Math.abs(r)<a.opts.precision?i:(a.settled=!1,Xo(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((r,s)=>Qn(a,e[s],t[s],i[s]));if(typeof t=="object"){const r={};for(const s in t)r[s]=Qn(a,e[s],t[s],i[s]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function Lp(a,e={}){const t=Vt(a),{stiffness:i=.15,damping:r=.8,precision:s=.01}=e;let n,l,o,u=a,c=a,h=1,f=0,d=!1;function p(v,m={}){c=v;const x=o={};return a==null||m.hard||g.stiffness>=1&&g.damping>=1?(d=!0,n=Aa(),u=v,t.set(a=c),Promise.resolve()):(m.soft&&(f=1/((m.soft===!0?.5:+m.soft)*60),h=0),l||(n=Aa(),d=!1,l=Lu(T=>{if(d)return d=!1,l=null,!1;h=Math.min(h+f,1);const _={inv_mass:h,opts:g,settled:!0,dt:(T-n)*60/1e3},B=Qn(_,u,a,c);return n=T,u=a,t.set(a=B),_.settled&&(l=null),!_.settled})),new Promise(T=>{l.promise.then(()=>{x===o&&T()})}))}const g={set:p,update:(v,m)=>p(v(c,a),m),subscribe:t.subscribe,stiffness:i,damping:r,precision:s};return g}function Yo(a,e,t){const i=a.slice();return i[37]=e[t],i[39]=t,i}function Zo(a){let e,t,i,r,s=(a[6]==="label"||a[7]==="label")&&Ko(a);return{c(){e=F("span"),s&&s.c(),this.h()},l(n){e=L(n,"SPAN",{class:!0,style:!0});var l=G(e);s&&s.l(l),l.forEach(y),this.h()},h(){b(e,"class","pip first"),b(e,"style",t=a[14]+": 0%;"),ne(e,"selected",a[18](a[0])),ne(e,"in-range",a[17](a[0]))},m(n,l){M(n,e,l),s&&s.m(e,null),i||(r=[le(e,"pointerdown",a[30]),le(e,"pointerup",a[31])],i=!0)},p(n,l){n[6]==="label"||n[7]==="label"?s?s.p(n,l):(s=Ko(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),l[0]&16384&&t!==(t=n[14]+": 0%;")&&b(e,"style",t),l[0]&262145&&ne(e,"selected",n[18](n[0])),l[0]&131073&&ne(e,"in-range",n[17](n[0]))},d(n){n&&y(e),s&&s.d(),i=!1,Qe(r)}}}function Ko(a){let e,t,i,r=a[12](a[16](a[0]),0,0)+"",s,n=a[10]&&Jo(a),l=a[11]&&Qo(a);return{c(){e=F("span"),n&&n.c(),t=Ne(),i=new tn(!1),s=Ne(),l&&l.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0});var u=G(e);n&&n.l(u),t=Ne(),i=rn(u,!1),s=Ne(),l&&l.l(u),u.forEach(y),this.h()},h(){i.a=s,b(e,"class","pipVal")},m(o,u){M(o,e,u),n&&n.m(e,null),E(e,t),i.m(r,e),E(e,s),l&&l.m(e,null)},p(o,u){o[10]?n?n.p(o,u):(n=Jo(o),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u[0]&69633&&r!==(r=o[12](o[16](o[0]),0,0)+"")&&i.p(r),o[11]?l?l.p(o,u):(l=Qo(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&y(e),n&&n.d(),l&&l.d()}}}function Jo(a){let e,t;return{c(){e=F("span"),t=ue(a[10]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[10]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-prefix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&1024&&Oe(t,i[10])},d(i){i&&y(e)}}}function Qo(a){let e,t;return{c(){e=F("span"),t=ue(a[11]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[11]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-suffix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&2048&&Oe(t,i[11])},d(i){i&&y(e)}}}function el(a){let e,t=Zt(Array(a[20]+1)),i=[];for(let r=0;r<t.length;r+=1)i[r]=nl(Yo(a,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Ne()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=Ne()},m(r,s){for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(r,s);M(r,e,s)},p(r,s){if(s[0]&8314435){t=Zt(Array(r[20]+1));let n;for(n=0;n<t.length;n+=1){const l=Yo(r,t,n);i[n]?i[n].p(l,s):(i[n]=nl(l),i[n].c(),i[n].m(e.parentNode,e))}for(;n<i.length;n+=1)i[n].d(1);i.length=t.length}},d(r){r&&y(e),ds(i,r)}}}function tl(a){let e,t,i,r,s,n=(a[6]==="label"||a[9]==="label")&&il(a);function l(...o){return a[33](a[39],...o)}return{c(){e=F("span"),n&&n.c(),t=U(),this.h()},l(o){e=L(o,"SPAN",{class:!0,style:!0});var u=G(e);n&&n.l(u),t=V(u),u.forEach(y),this.h()},h(){b(e,"class","pip"),b(e,"style",i=a[14]+": "+a[15](a[19](a[39]))+"%;"),ne(e,"selected",a[18](a[19](a[39]))),ne(e,"in-range",a[17](a[19](a[39])))},m(o,u){M(o,e,u),n&&n.m(e,null),E(e,t),r||(s=[le(e,"pointerdown",a[32]),le(e,"pointerup",l)],r=!0)},p(o,u){a=o,a[6]==="label"||a[9]==="label"?n?n.p(a,u):(n=il(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u[0]&573440&&i!==(i=a[14]+": "+a[15](a[19](a[39]))+"%;")&&b(e,"style",i),u[0]&786432&&ne(e,"selected",a[18](a[19](a[39]))),u[0]&655360&&ne(e,"in-range",a[17](a[19](a[39])))},d(o){o&&y(e),n&&n.d(),r=!1,Qe(s)}}}function il(a){let e,t,i,r=a[12](a[19](a[39]),a[39],a[15](a[19](a[39])))+"",s,n=a[10]&&rl(a),l=a[11]&&sl(a);return{c(){e=F("span"),n&&n.c(),t=Ne(),i=new tn(!1),s=Ne(),l&&l.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0});var u=G(e);n&&n.l(u),t=Ne(),i=rn(u,!1),s=Ne(),l&&l.l(u),u.forEach(y),this.h()},h(){i.a=s,b(e,"class","pipVal")},m(o,u){M(o,e,u),n&&n.m(e,null),E(e,t),i.m(r,e),E(e,s),l&&l.m(e,null)},p(o,u){o[10]?n?n.p(o,u):(n=rl(o),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u[0]&561152&&r!==(r=o[12](o[19](o[39]),o[39],o[15](o[19](o[39])))+"")&&i.p(r),o[11]?l?l.p(o,u):(l=sl(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&y(e),n&&n.d(),l&&l.d()}}}function rl(a){let e,t;return{c(){e=F("span"),t=ue(a[10]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[10]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-prefix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&1024&&Oe(t,i[10])},d(i){i&&y(e)}}}function sl(a){let e,t;return{c(){e=F("span"),t=ue(a[11]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[11]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-suffix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&2048&&Oe(t,i[11])},d(i){i&&y(e)}}}function nl(a){let e=a[19](a[39])!==a[0]&&a[19](a[39])!==a[1],t,i=e&&tl(a);return{c(){i&&i.c(),t=Ne()},l(r){i&&i.l(r),t=Ne()},m(r,s){i&&i.m(r,s),M(r,t,s)},p(r,s){s[0]&524291&&(e=r[19](r[39])!==r[0]&&r[19](r[39])!==r[1]),e?i?i.p(r,s):(i=tl(r),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(r){r&&y(t),i&&i.d(r)}}}function al(a){let e,t,i,r,s=(a[6]==="label"||a[8]==="label")&&ol(a);return{c(){e=F("span"),s&&s.c(),this.h()},l(n){e=L(n,"SPAN",{class:!0,style:!0});var l=G(e);s&&s.l(l),l.forEach(y),this.h()},h(){b(e,"class","pip last"),b(e,"style",t=a[14]+": 100%;"),ne(e,"selected",a[18](a[1])),ne(e,"in-range",a[17](a[1]))},m(n,l){M(n,e,l),s&&s.m(e,null),i||(r=[le(e,"pointerdown",a[34]),le(e,"pointerup",a[35])],i=!0)},p(n,l){n[6]==="label"||n[8]==="label"?s?s.p(n,l):(s=ol(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),l[0]&16384&&t!==(t=n[14]+": 100%;")&&b(e,"style",t),l[0]&262146&&ne(e,"selected",n[18](n[1])),l[0]&131074&&ne(e,"in-range",n[17](n[1]))},d(n){n&&y(e),s&&s.d(),i=!1,Qe(r)}}}function ol(a){let e,t,i,r=a[12](a[16](a[1]),a[20],100)+"",s,n=a[10]&&ll(a),l=a[11]&&ul(a);return{c(){e=F("span"),n&&n.c(),t=Ne(),i=new tn(!1),s=Ne(),l&&l.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0});var u=G(e);n&&n.l(u),t=Ne(),i=rn(u,!1),s=Ne(),l&&l.l(u),u.forEach(y),this.h()},h(){i.a=s,b(e,"class","pipVal")},m(o,u){M(o,e,u),n&&n.m(e,null),E(e,t),i.m(r,e),E(e,s),l&&l.m(e,null)},p(o,u){o[10]?n?n.p(o,u):(n=ll(o),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u[0]&1118210&&r!==(r=o[12](o[16](o[1]),o[20],100)+"")&&i.p(r),o[11]?l?l.p(o,u):(l=ul(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&y(e),n&&n.d(),l&&l.d()}}}function ll(a){let e,t;return{c(){e=F("span"),t=ue(a[10]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[10]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-prefix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&1024&&Oe(t,i[10])},d(i){i&&y(e)}}}function ul(a){let e,t;return{c(){e=F("span"),t=ue(a[11]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[11]),r.forEach(y),this.h()},h(){b(e,"class","pipVal-suffix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&2048&&Oe(t,i[11])},d(i){i&&y(e)}}}function kp(a){let e,t,i,r=(a[6]&&a[7]!==!1||a[7])&&Zo(a),s=(a[6]&&a[9]!==!1||a[9])&&el(a),n=(a[6]&&a[8]!==!1||a[8])&&al(a);return{c(){e=F("div"),r&&r.c(),t=U(),s&&s.c(),i=U(),n&&n.c(),this.h()},l(l){e=L(l,"DIV",{class:!0});var o=G(e);r&&r.l(o),t=V(o),s&&s.l(o),i=V(o),n&&n.l(o),o.forEach(y),this.h()},h(){b(e,"class","rangePips"),ne(e,"disabled",a[5]),ne(e,"hoverable",a[4]),ne(e,"vertical",a[2]),ne(e,"reversed",a[3]),ne(e,"focus",a[13])},m(l,o){M(l,e,o),r&&r.m(e,null),E(e,t),s&&s.m(e,null),E(e,i),n&&n.m(e,null)},p(l,o){l[6]&&l[7]!==!1||l[7]?r?r.p(l,o):(r=Zo(l),r.c(),r.m(e,t)):r&&(r.d(1),r=null),l[6]&&l[9]!==!1||l[9]?s?s.p(l,o):(s=el(l),s.c(),s.m(e,i)):s&&(s.d(1),s=null),l[6]&&l[8]!==!1||l[8]?n?n.p(l,o):(n=al(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o[0]&32&&ne(e,"disabled",l[5]),o[0]&16&&ne(e,"hoverable",l[4]),o[0]&4&&ne(e,"vertical",l[2]),o[0]&8&&ne(e,"reversed",l[3]),o[0]&8192&&ne(e,"focus",l[13])},i:ge,o:ge,d(l){l&&y(e),r&&r.d(),s&&s.d(),n&&n.d()}}}function Op(a,e,t){let i,r,s,n,l,{range:o=!1}=e,{min:u=0}=e,{max:c=100}=e,{step:h=1}=e,{values:f=[(c+u)/2]}=e,{vertical:d=!1}=e,{reversed:p=!1}=e,{hoverable:g=!0}=e,{disabled:v=!1}=e,{pipstep:m=void 0}=e,{all:x=!0}=e,{first:T=void 0}=e,{last:_=void 0}=e,{rest:B=void 0}=e,{prefix:A=""}=e,{suffix:C=""}=e,{formatter:w=(Z,Ee,Ie)=>Z}=e,{focus:O=void 0}=e,{orientationStart:N=void 0}=e,{percentOf:P=void 0}=e,{moveHandle:k=void 0}=e,{fixFloat:R=void 0}=e,{normalisedClient:z=void 0}=e,j;function $(Z){Z=z(Z),j={x:Z.clientX,y:Z.clientY}}function re(Z,Ee){if(Ee=z(Ee),!v){const Ie=Math.sqrt(Math.pow(j.x-Ee.clientX,2)+Math.pow(j.y-Ee.clientY,2));j&&Ie<=5&&k(void 0,Z)}}const se=Z=>{$(Z)},D=Z=>{re(u,Z)},W=Z=>{$(Z)},de=(Z,Ee)=>{re(s(Z),Ee)},ae=Z=>{$(Z)},pe=Z=>{re(c,Z)};return a.$$set=Z=>{"range"in Z&&t(23,o=Z.range),"min"in Z&&t(0,u=Z.min),"max"in Z&&t(1,c=Z.max),"step"in Z&&t(24,h=Z.step),"values"in Z&&t(25,f=Z.values),"vertical"in Z&&t(2,d=Z.vertical),"reversed"in Z&&t(3,p=Z.reversed),"hoverable"in Z&&t(4,g=Z.hoverable),"disabled"in Z&&t(5,v=Z.disabled),"pipstep"in Z&&t(26,m=Z.pipstep),"all"in Z&&t(6,x=Z.all),"first"in Z&&t(7,T=Z.first),"last"in Z&&t(8,_=Z.last),"rest"in Z&&t(9,B=Z.rest),"prefix"in Z&&t(10,A=Z.prefix),"suffix"in Z&&t(11,C=Z.suffix),"formatter"in Z&&t(12,w=Z.formatter),"focus"in Z&&t(13,O=Z.focus),"orientationStart"in Z&&t(14,N=Z.orientationStart),"percentOf"in Z&&t(15,P=Z.percentOf),"moveHandle"in Z&&t(27,k=Z.moveHandle),"fixFloat"in Z&&t(16,R=Z.fixFloat),"normalisedClient"in Z&&t(28,z=Z.normalisedClient)},a.$$.update=()=>{a.$$.dirty[0]&83886087&&t(29,i=m||((c-u)/h>=(d?50:100)?(c-u)/(d?10:20):1)),a.$$.dirty[0]&553648131&&t(20,r=parseInt((c-u)/(h*i),10)),a.$$.dirty[0]&553713665&&t(19,s=function(Z){return R(u+Z*h*i)}),a.$$.dirty[0]&33619968&&t(18,n=function(Z){return f.some(Ee=>R(Ee)===R(Z))}),a.$$.dirty[0]&41943040&&t(17,l=function(Z){if(o==="min")return f[0]>Z;if(o==="max")return f[0]<Z;if(o)return f[0]<Z&&f[1]>Z})},[u,c,d,p,g,v,x,T,_,B,A,C,w,O,N,P,R,l,n,s,r,$,re,o,h,f,m,k,z,i,se,D,W,de,ae,pe]}class Up extends Me{constructor(e){super(),Ae(this,e,Op,kp,Re,{range:23,min:0,max:1,step:24,values:25,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:26,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:27,fixFloat:16,normalisedClient:28},null,[-1,-1])}}function cl(a,e,t){const i=a.slice();return i[65]=e[t],i[67]=t,i}function hl(a){let e,t,i,r=a[21](a[65],a[67],a[24](a[65]))+"",s,n=a[18]&&fl(a),l=a[19]&&dl(a);return{c(){e=F("span"),n&&n.c(),t=Ne(),i=new tn(!1),s=Ne(),l&&l.c(),this.h()},l(o){e=L(o,"SPAN",{class:!0});var u=G(e);n&&n.l(u),t=Ne(),i=rn(u,!1),s=Ne(),l&&l.l(u),u.forEach(y),this.h()},h(){i.a=s,b(e,"class","rangeFloat")},m(o,u){M(o,e,u),n&&n.m(e,null),E(e,t),i.m(r,e),E(e,s),l&&l.m(e,null)},p(o,u){o[18]?n?n.p(o,u):(n=fl(o),n.c(),n.m(e,t)):n&&(n.d(1),n=null),u[0]&18874369&&r!==(r=o[21](o[65],o[67],o[24](o[65]))+"")&&i.p(r),o[19]?l?l.p(o,u):(l=dl(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&y(e),n&&n.d(),l&&l.d()}}}function fl(a){let e,t;return{c(){e=F("span"),t=ue(a[18]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[18]),r.forEach(y),this.h()},h(){b(e,"class","rangeFloat-prefix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&262144&&Oe(t,i[18])},d(i){i&&y(e)}}}function dl(a){let e,t;return{c(){e=F("span"),t=ue(a[19]),this.h()},l(i){e=L(i,"SPAN",{class:!0});var r=G(e);t=ce(r,a[19]),r.forEach(y),this.h()},h(){b(e,"class","rangeFloat-suffix")},m(i,r){M(i,e,r),E(e,t)},p(i,r){r[0]&524288&&Oe(t,i[19])},d(i){i&&y(e)}}}function pl(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p=a[7]&&hl(a);return{c(){e=F("span"),t=F("span"),i=U(),p&&p.c(),this.h()},l(g){e=L(g,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-label":!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var v=G(e);t=L(v,"SPAN",{class:!0}),G(t).forEach(y),i=V(v),p&&p.l(v),v.forEach(y),this.h()},h(){b(t,"class","rangeNub"),b(e,"role","slider"),b(e,"class","rangeHandle"),b(e,"data-handle",a[67]),b(e,"style",r=a[29]+": "+a[30][a[67]]+"%; z-index: "+(a[27]===a[67]?3:2)+";"),b(e,"aria-label",s=a[22][a[67]]),b(e,"aria-valuemin",n=a[2]===!0&&a[67]===1?a[0][0]:a[3]),b(e,"aria-valuemax",l=a[2]===!0&&a[67]===0?a[0][1]:a[4]),b(e,"aria-valuenow",o=a[65]),b(e,"aria-valuetext",u=""+(a[18]+yl(a[21](a[65],a[67],a[24](a[65])))+a[19])),b(e,"aria-orientation",c=a[6]?"vertical":"horizontal"),b(e,"aria-disabled",a[10]),b(e,"disabled",a[10]),b(e,"tabindex",h=a[10]?-1:0),ne(e,"active",a[25]&&a[27]===a[67]),ne(e,"press",a[26]&&a[27]===a[67])},m(g,v){M(g,e,v),E(e,t),E(e,i),p&&p.m(e,null),f||(d=[le(e,"blur",a[35]),le(e,"focus",a[36]),le(e,"keydown",a[37])],f=!0)},p(g,v){g[7]?p?p.p(g,v):(p=hl(g),p.c(),p.m(e,null)):p&&(p.d(1),p=null),v[0]&1744830464&&r!==(r=g[29]+": "+g[30][g[67]]+"%; z-index: "+(g[27]===g[67]?3:2)+";")&&b(e,"style",r),v[0]&4194304&&s!==(s=g[22][g[67]])&&b(e,"aria-label",s),v[0]&13&&n!==(n=g[2]===!0&&g[67]===1?g[0][0]:g[3])&&b(e,"aria-valuemin",n),v[0]&21&&l!==(l=g[2]===!0&&g[67]===0?g[0][1]:g[4])&&b(e,"aria-valuemax",l),v[0]&1&&o!==(o=g[65])&&b(e,"aria-valuenow",o),v[0]&19660801&&u!==(u=""+(g[18]+yl(g[21](g[65],g[67],g[24](g[65])))+g[19]))&&b(e,"aria-valuetext",u),v[0]&64&&c!==(c=g[6]?"vertical":"horizontal")&&b(e,"aria-orientation",c),v[0]&1024&&b(e,"aria-disabled",g[10]),v[0]&1024&&b(e,"disabled",g[10]),v[0]&1024&&h!==(h=g[10]?-1:0)&&b(e,"tabindex",h),v[0]&167772160&&ne(e,"active",g[25]&&g[27]===g[67]),v[0]&201326592&&ne(e,"press",g[26]&&g[27]===g[67])},d(g){g&&y(e),p&&p.d(),f=!1,Qe(d)}}}function ml(a){let e,t;return{c(){e=F("span"),this.h()},l(i){e=L(i,"SPAN",{class:!0,style:!0}),G(e).forEach(y),this.h()},h(){b(e,"class","rangeBar"),b(e,"style",t=a[29]+": "+a[33](a[30])+"%; "+a[28]+": "+a[34](a[30])+"%;")},m(i,r){M(i,e,r)},p(i,r){r[0]&1879048192&&t!==(t=i[29]+": "+i[33](i[30])+"%; "+i[28]+": "+i[34](i[30])+"%;")&&b(e,"style",t)},d(i){i&&y(e)}}}function gl(a){let e,t;return e=new Up({props:{values:a[0],min:a[3],max:a[4],step:a[5],range:a[2],vertical:a[6],reversed:a[8],orientationStart:a[29],hoverable:a[9],disabled:a[10],all:a[13],first:a[14],last:a[15],rest:a[16],pipstep:a[12],prefix:a[18],suffix:a[19],formatter:a[20],focus:a[25],percentOf:a[24],moveHandle:a[32],fixFloat:a[31],normalisedClient:Js}}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},p(i,r){const s={};r[0]&1&&(s.values=i[0]),r[0]&8&&(s.min=i[3]),r[0]&16&&(s.max=i[4]),r[0]&32&&(s.step=i[5]),r[0]&4&&(s.range=i[2]),r[0]&64&&(s.vertical=i[6]),r[0]&256&&(s.reversed=i[8]),r[0]&536870912&&(s.orientationStart=i[29]),r[0]&512&&(s.hoverable=i[9]),r[0]&1024&&(s.disabled=i[10]),r[0]&8192&&(s.all=i[13]),r[0]&16384&&(s.first=i[14]),r[0]&32768&&(s.last=i[15]),r[0]&65536&&(s.rest=i[16]),r[0]&4096&&(s.pipstep=i[12]),r[0]&262144&&(s.prefix=i[18]),r[0]&524288&&(s.suffix=i[19]),r[0]&1048576&&(s.formatter=i[20]),r[0]&33554432&&(s.focus=i[25]),r[0]&16777216&&(s.percentOf=i[24]),e.$set(s)},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Vp(a){let e,t,i,r,s,n,l=Zt(a[0]),o=[];for(let h=0;h<l.length;h+=1)o[h]=pl(cl(a,l,h));let u=a[2]&&ml(a),c=a[11]&&gl(a);return{c(){e=F("div");for(let h=0;h<o.length;h+=1)o[h].c();t=U(),u&&u.c(),i=U(),c&&c.c(),this.h()},l(h){e=L(h,"DIV",{id:!0,role:!0,class:!0});var f=G(e);for(let d=0;d<o.length;d+=1)o[d].l(f);t=V(f),u&&u.l(f),i=V(f),c&&c.l(f),f.forEach(y),this.h()},h(){b(e,"id",a[17]),b(e,"role","none"),b(e,"class","rangeSlider"),ne(e,"range",a[2]),ne(e,"disabled",a[10]),ne(e,"hoverable",a[9]),ne(e,"vertical",a[6]),ne(e,"reversed",a[8]),ne(e,"focus",a[25]),ne(e,"min",a[2]==="min"),ne(e,"max",a[2]==="max"),ne(e,"pips",a[11]),ne(e,"pip-labels",a[13]==="label"||a[14]==="label"||a[15]==="label"||a[16]==="label")},m(h,f){M(h,e,f);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(e,null);E(e,t),u&&u.m(e,null),E(e,i),c&&c.m(e,null),a[51](e),r=!0,s||(n=[le(window,"mousedown",a[40]),le(window,"touchstart",a[40]),le(window,"mousemove",a[41]),le(window,"touchmove",a[41]),le(window,"mouseup",a[42]),le(window,"touchend",a[43]),le(window,"keydown",a[44]),le(e,"mousedown",a[38]),le(e,"mouseup",a[39]),le(e,"touchstart",Ra(a[38])),le(e,"touchend",Ra(a[39]))],s=!0)},p(h,f){if(f[0]&1869350109|f[1]&112){l=Zt(h[0]);let d;for(d=0;d<l.length;d+=1){const p=cl(h,l,d);o[d]?o[d].p(p,f):(o[d]=pl(p),o[d].c(),o[d].m(e,t))}for(;d<o.length;d+=1)o[d].d(1);o.length=l.length}h[2]?u?u.p(h,f):(u=ml(h),u.c(),u.m(e,i)):u&&(u.d(1),u=null),h[11]?c?(c.p(h,f),f[0]&2048&&X(c,1)):(c=gl(h),c.c(),X(c,1),c.m(e,null)):c&&(di(),Y(c,1,1,()=>{c=null}),pi()),(!r||f[0]&131072)&&b(e,"id",h[17]),(!r||f[0]&4)&&ne(e,"range",h[2]),(!r||f[0]&1024)&&ne(e,"disabled",h[10]),(!r||f[0]&512)&&ne(e,"hoverable",h[9]),(!r||f[0]&64)&&ne(e,"vertical",h[6]),(!r||f[0]&256)&&ne(e,"reversed",h[8]),(!r||f[0]&33554432)&&ne(e,"focus",h[25]),(!r||f[0]&4)&&ne(e,"min",h[2]==="min"),(!r||f[0]&4)&&ne(e,"max",h[2]==="max"),(!r||f[0]&2048)&&ne(e,"pips",h[11]),(!r||f[0]&122880)&&ne(e,"pip-labels",h[13]==="label"||h[14]==="label"||h[15]==="label"||h[16]==="label")},i(h){r||(X(c),r=!0)},o(h){Y(c),r=!1},d(h){h&&y(e),ds(o,h),u&&u.d(),c&&c.d(),a[51](null),s=!1,Qe(n)}}}function vl(a){if(!a)return-1;for(var e=0;a=a.previousElementSibling;)e++;return e}function Js(a){return a.type.includes("touch")?a.touches[0]||a.changedTouches[0]:a}function yl(a){return`${a}`.replace(/<[^>]*>/g,"")}function $p(a,e,t){let i,r,s,n,l,o,u=ge,c=()=>(u(),u=Nu(ze,q=>t(30,o=q)),ze);a.$$.on_destroy.push(()=>u());let{slider:h=void 0}=e,{range:f=!1}=e,{pushy:d=!1}=e,{min:p=0}=e,{max:g=100}=e,{step:v=1}=e,{values:m=[(g+p)/2]}=e,{vertical:x=!1}=e,{float:T=!1}=e,{reversed:_=!1}=e,{hoverable:B=!0}=e,{disabled:A=!1}=e,{pips:C=!1}=e,{pipstep:w=void 0}=e,{all:O=void 0}=e,{first:N=void 0}=e,{last:P=void 0}=e,{rest:k=void 0}=e,{id:R=void 0}=e,{prefix:z=""}=e,{suffix:j=""}=e,{formatter:$=(q,fe,xe)=>q}=e,{handleFormatter:re=$}=e,{ariaLabels:se=[]}=e,{precision:D=2}=e,{springValues:W={stiffness:.15,damping:.4}}=e;const de=Nl();let ae=0,pe=!1,Z=!1,Ee=!1,Ie=!1,Ue=m.length-1,De,je,ze;const We=q=>parseFloat((+q).toFixed(D));function K(q){const fe=h.querySelectorAll(".handle"),xe=Array.prototype.includes.call(fe,q),H=Array.prototype.some.call(fe,me=>me.contains(q));return xe||H}function we(q){return f==="min"||f==="max"?q.slice(0,1):f?q.slice(0,2):q}function nt(){return h.getBoundingClientRect()}function ie(q){const fe=nt();let xe=0,H=0,me=0;x?(xe=q.clientY-fe.top,H=xe/fe.height*100,H=_?H:100-H):(xe=q.clientX-fe.left,H=xe/fe.width*100,H=_?100-H:H),me=(g-p)/100*H+p;let Gt;return f===!0&&m[0]===m[1]?me>m[1]?1:0:(Gt=m.indexOf([...m].sort((bi,dt)=>Math.abs(me-bi)-Math.abs(me-dt))[0]),Gt)}function ve(q){const fe=nt();let xe=0,H=0,me=0;x?(xe=q.clientY-fe.top,H=xe/fe.height*100,H=_?H:100-H):(xe=q.clientX-fe.left,H=xe/fe.width*100,H=_?100-H:H),me=(g-p)/100*H+p,Ve(Ue,me)}function Ve(q,fe){return fe=s(fe),typeof q>"u"&&(q=Ue),f&&(q===0&&fe>m[1]?d?t(0,m[1]=fe,m):fe=m[1]:q===1&&fe<m[0]&&(d?t(0,m[0]=fe,m):fe=m[0])),m[q]!==fe&&t(0,m[q]=fe,m),je!==fe&&(ys(),je=fe),fe}function at(q){return f==="min"?0:q[0]}function _t(q){return f==="max"?0:f==="min"?100-q[0]:100-q[1]}function Je(q){Ie&&(t(25,pe=!1),Z=!1,t(26,Ee=!1))}function Nr(q){A||(t(27,Ue=vl(q.target)),t(25,pe=!0))}function ii(q){if(!A){const fe=vl(q.target);let xe=q.ctrlKey||q.metaKey||q.shiftKey?v*10:v,H=!1;switch(q.key){case"PageDown":xe*=10;case"ArrowRight":case"ArrowUp":Ve(fe,m[fe]+xe),H=!0;break;case"PageUp":xe*=10;case"ArrowLeft":case"ArrowDown":Ve(fe,m[fe]-xe),H=!0;break;case"Home":Ve(fe,p),H=!0;break;case"End":Ve(fe,g),H=!0;break}H&&(q.preventDefault(),q.stopPropagation())}}function zr(q){if(!A){const fe=q.target,xe=Js(q);t(25,pe=!0),Z=!0,t(26,Ee=!0),t(27,Ue=ie(xe)),De=je=s(m[Ue]),gs(),q.type==="touchstart"&&!fe.matches(".pipVal")&&ve(xe)}}function Nt(q){q.type==="touchend"&&vs(),t(26,Ee=!1)}function Fr(q){Ie=!1,pe&&q.target!==h&&!h.contains(q.target)&&t(25,pe=!1)}function ir(q){A||Z&&ve(Js(q))}function $t(q){if(!A){const fe=q.target;Z&&((fe===h||h.contains(fe))&&(t(25,pe=!0),!K(fe)&&!fe.matches(".pipVal")&&ve(Js(q))),vs())}Z=!1,t(26,Ee=!1)}function ri(q){Z=!1,t(26,Ee=!1)}function Lr(q){A||(q.target===h||h.contains(q.target))&&(Ie=!0)}function gs(){!A&&de("start",{activeHandle:Ue,value:De,values:m.map(q=>s(q))})}function vs(){!A&&de("stop",{activeHandle:Ue,startValue:De,value:m[Ue],values:m.map(q=>s(q))})}function ys(){!A&&de("change",{activeHandle:Ue,startValue:De,previousValue:typeof je>"u"?De:je,value:m[Ue],values:m.map(q=>s(q))})}function Xe(q){Ke[q?"unshift":"push"](()=>{h=q,t(1,h)})}return a.$$set=q=>{"slider"in q&&t(1,h=q.slider),"range"in q&&t(2,f=q.range),"pushy"in q&&t(45,d=q.pushy),"min"in q&&t(3,p=q.min),"max"in q&&t(4,g=q.max),"step"in q&&t(5,v=q.step),"values"in q&&t(0,m=q.values),"vertical"in q&&t(6,x=q.vertical),"float"in q&&t(7,T=q.float),"reversed"in q&&t(8,_=q.reversed),"hoverable"in q&&t(9,B=q.hoverable),"disabled"in q&&t(10,A=q.disabled),"pips"in q&&t(11,C=q.pips),"pipstep"in q&&t(12,w=q.pipstep),"all"in q&&t(13,O=q.all),"first"in q&&t(14,N=q.first),"last"in q&&t(15,P=q.last),"rest"in q&&t(16,k=q.rest),"id"in q&&t(17,R=q.id),"prefix"in q&&t(18,z=q.prefix),"suffix"in q&&t(19,j=q.suffix),"formatter"in q&&t(20,$=q.formatter),"handleFormatter"in q&&t(21,re=q.handleFormatter),"ariaLabels"in q&&t(22,se=q.ariaLabels),"precision"in q&&t(46,D=q.precision),"springValues"in q&&t(47,W=q.springValues)},a.$$.update=()=>{if(a.$$.dirty[0]&24&&t(50,r=function(q){return q<=p?p:q>=g?g:q}),a.$$.dirty[0]&56|a.$$.dirty[1]&524288&&t(49,s=function(q){if(q<=p)return We(p);if(q>=g)return We(g);q=We(q);let fe=(q-p)%v,xe=q-fe;return Math.abs(fe)*2>=v&&(xe+=fe>0?v:-v),xe=r(xe),We(xe)}),a.$$.dirty[0]&24&&t(24,i=function(q){let fe=(q-p)/(g-p)*100;return isNaN(fe)||fe<=0?0:fe>=100?100:We(fe)}),a.$$.dirty[0]&29360153|a.$$.dirty[1]&458752){Array.isArray(m)||(t(0,m=[(g+p)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)"));const q=we(m.map(fe=>s(fe)));(m.length!==q.length||!m.every((fe,xe)=>We(fe)===q[xe]))&&t(0,m=q),ae!==m.length?c(t(23,ze=Lp(m.map(fe=>i(fe)),W))):ze.set(m.map(fe=>i(fe))),t(48,ae=m.length),m.length>1&&!Array.isArray(se)&&console.warn("'ariaLabels' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")}a.$$.dirty[0]&320&&t(29,n=x?_?"top":"bottom":_?"right":"left"),a.$$.dirty[0]&320&&t(28,l=x?_?"bottom":"top":_?"left":"right")},[m,h,f,p,g,v,x,T,_,B,A,C,w,O,N,P,k,R,z,j,$,re,se,ze,i,pe,Ee,Ue,l,n,o,We,Ve,at,_t,Je,Nr,ii,zr,Nt,Fr,ir,$t,ri,Lr,d,D,W,ae,s,r,Xe]}class fi extends Me{constructor(e){super(),Ae(this,e,$p,Vp,Re,{slider:1,range:2,pushy:45,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,ariaLabels:22,precision:46,springValues:47},null,[-1,-1,-1])}}function Gp(a){let e,t,i,r,s,n,l,o;return{c(){e=F("div"),t=F("p"),i=ue(a[1]),r=U(),s=F("div"),n=F("div"),this.h()},l(u){e=L(u,"DIV",{class:!0});var c=G(e);t=L(c,"P",{class:!0});var h=G(t);i=ce(h,a[1]),h.forEach(y),r=V(c),s=L(c,"DIV",{class:!0});var f=G(s);n=L(f,"DIV",{class:!0}),G(n).forEach(y),f.forEach(y),c.forEach(y),this.h()},h(){b(t,"class","svelte-da9a43"),b(n,"class","thumb svelte-da9a43"),ne(n,"checked",a[0]),b(s,"class","toggle-container svelte-da9a43"),ne(s,"checked",a[0]),b(e,"class","container svelte-da9a43")},m(u,c){M(u,e,c),E(e,t),E(t,i),E(e,r),E(e,s),E(s,n),l||(o=le(s,"click",a[2]),l=!0)},p(u,[c]){c&2&&Oe(i,u[1]),c&1&&ne(n,"checked",u[0]),c&1&&ne(s,"checked",u[0])},i:ge,o:ge,d(u){u&&y(e),l=!1,o()}}}function Hp(a,e,t){const i=Nl();let{checked:r=!1}=e,{label:s=""}=e;function n(){t(0,r=!r),i("change",{value:r})}return a.$$set=l=>{"checked"in l&&t(0,r=l.checked),"label"in l&&t(1,s=l.label)},[r,s,n]}class cn extends Me{constructor(e){super(),Ae(this,e,Hp,Gp,Re,{checked:0,label:1})}}function bl(a){let e,t,i,r="Non-zero aperture in ReSTIR-PT will result in bias",s;return e=new Be({props:{vertical:7}}),{c(){J(e.$$.fragment),t=U(),i=F("p"),i.textContent=r,this.h()},l(n){Q(e.$$.fragment,n),t=V(n),i=L(n,"P",{class:!0,"data-svelte-h":!0}),Pe(i)!=="svelte-1y3etcf"&&(i.textContent=r),this.h()},h(){b(i,"class","warning svelte-2r8mmv")},m(n,l){ee(e,n,l),M(n,t,l),M(n,i,l),s=!0},i(n){s||(X(e.$$.fragment,n),s=!0)},o(n){Y(e.$$.fragment,n),s=!1},d(n){n&&(y(t),y(i)),te(e,n)}}}function xl(a){let e,t,i,r="Cat's eye bokeh is unavailable with ReSTIR-PT",s;return e=new Be({props:{vertical:7}}),{c(){J(e.$$.fragment),t=U(),i=F("p"),i.textContent=r,this.h()},l(n){Q(e.$$.fragment,n),t=V(n),i=L(n,"P",{class:!0,"data-svelte-h":!0}),Pe(i)!=="svelte-i51xt"&&(i.textContent=r),this.h()},h(){b(i,"class","warning svelte-2r8mmv")},m(n,l){ee(e,n,l),M(n,t,l),M(n,i,l),s=!0},i(n){s||(X(e.$$.fragment,n),s=!0)},o(n){Y(e.$$.fragment,n),s=!1},d(n){n&&(y(t),y(i)),te(e,n)}}}function qp(a){let e,t,i,r=Xs(a[6].position)+"",s,n,l,o,u,c,h,f=Xs(a[6].target)+"",d,p,g,v,m,x,T,_='Use <span class="kbtn svelte-2r8mmv">w</span><span class="kbtn svelte-2r8mmv">a</span><span class="kbtn svelte-2r8mmv">s</span><span class="kbtn svelte-2r8mmv">d</span><span class="kbtn svelte-2r8mmv">q</span><span class="kbtn svelte-2r8mmv">e</span>to move',B,A,C,w,O="Click & drag to rotate",N,P,k,R,z='Hold <span class="kbtn fit-to-size svelte-2r8mmv">shift</span>for precise movements',j,$,re,se,D,W,de,ae,pe,Z,Ee,Ie,Ue,De,je,ze,We;return l=new Be({props:{vertical:3}}),g=new Be({props:{vertical:10}}),m=new Jt({}),A=new Be({props:{vertical:10}}),P=new Be({props:{vertical:10}}),$=new Be({props:{vertical:15}}),se=new Jt({}),Z=new Be({props:{vertical:5}}),{c(){e=F("p"),t=ue("Position: "),i=F("span"),s=ue(r),n=U(),J(l.$$.fragment),o=U(),u=F("p"),c=ue("Target: "),h=F("span"),d=ue(f),p=U(),J(g.$$.fragment),v=U(),J(m.$$.fragment),x=U(),T=F("p"),T.innerHTML=_,B=U(),J(A.$$.fragment),C=U(),w=F("p"),w.textContent=O,N=U(),J(P.$$.fragment),k=U(),R=F("p"),R.innerHTML=z,j=U(),J($.$$.fragment),re=U(),J(se.$$.fragment),D=U(),W=F("span"),de=ue("Movement speed: "),ae=F("input"),pe=U(),J(Z.$$.fragment),Ee=U(),Ie=F("span"),Ue=ue("Rotation speed: "),De=F("input"),this.h()},l(K){e=L(K,"P",{class:!0});var we=G(e);t=ce(we,"Position: "),i=L(we,"SPAN",{class:!0});var nt=G(i);s=ce(nt,r),nt.forEach(y),we.forEach(y),n=V(K),Q(l.$$.fragment,K),o=V(K),u=L(K,"P",{class:!0});var ie=G(u);c=ce(ie,"Target: "),h=L(ie,"SPAN",{class:!0});var ve=G(h);d=ce(ve,f),ve.forEach(y),ie.forEach(y),p=V(K),Q(g.$$.fragment,K),v=V(K),Q(m.$$.fragment,K),x=V(K),T=L(K,"P",{class:!0,"data-svelte-h":!0}),Pe(T)!=="svelte-o5lf2a"&&(T.innerHTML=_),B=V(K),Q(A.$$.fragment,K),C=V(K),w=L(K,"P",{class:!0,"data-svelte-h":!0}),Pe(w)!=="svelte-uv6qyc"&&(w.textContent=O),N=V(K),Q(P.$$.fragment,K),k=V(K),R=L(K,"P",{class:!0,"data-svelte-h":!0}),Pe(R)!=="svelte-syzokh"&&(R.innerHTML=z),j=V(K),Q($.$$.fragment,K),re=V(K),Q(se.$$.fragment,K),D=V(K),W=L(K,"SPAN",{class:!0});var Ve=G(W);de=ce(Ve,"Movement speed: "),ae=L(Ve,"INPUT",{class:!0,type:!0}),Ve.forEach(y),pe=V(K),Q(Z.$$.fragment,K),Ee=V(K),Ie=L(K,"SPAN",{class:!0});var at=G(Ie);Ue=ce(at,"Rotation speed: "),De=L(at,"INPUT",{class:!0,type:!0}),at.forEach(y),this.h()},h(){b(i,"class","svelte-2r8mmv"),b(e,"class","darken-span svelte-2r8mmv"),b(h,"class","svelte-2r8mmv"),b(u,"class","darken-span svelte-2r8mmv"),b(T,"class","svelte-2r8mmv"),b(w,"class","svelte-2r8mmv"),b(R,"class","svelte-2r8mmv"),b(ae,"class","samples-limit-input svelte-2r8mmv"),b(ae,"type","text"),b(W,"class","svelte-2r8mmv"),b(De,"class","samples-limit-input svelte-2r8mmv"),b(De,"type","text"),b(Ie,"class","svelte-2r8mmv")},m(K,we){M(K,e,we),E(e,t),E(e,i),E(i,s),M(K,n,we),ee(l,K,we),M(K,o,we),M(K,u,we),E(u,c),E(u,h),E(h,d),M(K,p,we),ee(g,K,we),M(K,v,we),ee(m,K,we),M(K,x,we),M(K,T,we),M(K,B,we),ee(A,K,we),M(K,C,we),M(K,w,we),M(K,N,we),ee(P,K,we),M(K,k,we),M(K,R,we),M(K,j,we),ee($,K,we),M(K,re,we),ee(se,K,we),M(K,D,we),M(K,W,we),E(W,de),E(W,ae),Te(ae,a[6].movementSpeed),M(K,pe,we),ee(Z,K,we),M(K,Ee,we),M(K,Ie,we),E(Ie,Ue),E(Ie,De),Te(De,a[6].rotationSpeed),je=!0,ze||(We=[le(ae,"input",a[23]),le(De,"input",a[24])],ze=!0)},p(K,we){(!je||we&64)&&r!==(r=Xs(K[6].position)+"")&&Oe(s,r),(!je||we&64)&&f!==(f=Xs(K[6].target)+"")&&Oe(d,f),we&64&&ae.value!==K[6].movementSpeed&&Te(ae,K[6].movementSpeed),we&64&&De.value!==K[6].rotationSpeed&&Te(De,K[6].rotationSpeed)},i(K){je||(X(l.$$.fragment,K),X(g.$$.fragment,K),X(m.$$.fragment,K),X(A.$$.fragment,K),X(P.$$.fragment,K),X($.$$.fragment,K),X(se.$$.fragment,K),X(Z.$$.fragment,K),je=!0)},o(K){Y(l.$$.fragment,K),Y(g.$$.fragment,K),Y(m.$$.fragment,K),Y(A.$$.fragment,K),Y(P.$$.fragment,K),Y($.$$.fragment,K),Y(se.$$.fragment,K),Y(Z.$$.fragment,K),je=!1},d(K){K&&(y(e),y(n),y(o),y(u),y(p),y(v),y(x),y(T),y(B),y(C),y(w),y(N),y(k),y(R),y(j),y(re),y(D),y(W),y(pe),y(Ee),y(Ie)),te(l,K),te(g,K),te(m,K),te(A,K),te(P,K),te($,K),te(se,K),te(Z,K),ze=!1,Qe(We)}}}function jp(a){let e,t,i,r,s,n,l,o,u="Fov:",c,h,f,d,p,g,v,m,x,T,_,B,A,C,w,O="Focus distance:",N,P,k,R,z,j,$,re,se,D,W,de,ae,pe,Z,Ee,Ie,Ue,De,je,ze,We,K,we,nt,ie,ve,Ve,at="Cat&#39;s eye bokeh<br/>(mult, pow)",_t,Je,Nr,ii,zr,Nt,Fr,ir,$t,ri,Lr,gs;s=new Be({props:{vertical:5}});function vs(H){a[15](H)}let ys={min:.001,max:Math.PI*.5,float:!0,step:Pu,springValues:{stiffness:1,damping:1}};a[3]!==void 0&&(ys.values=a[3]),h=new fi({props:ys}),Ke.push(()=>ft(h,"values",vs)),h.$on("change",a[8]),p=new Be({props:{vertical:5}});let Xe=a[4]&&a[5].aperture>0&&bl();B=new Be({props:{vertical:5}}),P=new Be({props:{horizontal:5}}),j=new Be({props:{horizontal:5}}),se=new Np({}),W=new Be({props:{vertical:15}}),De=new Be({props:{vertical:15}});function q(H){a[20](H)}let fe={label:"Cat's eye bokeh:"};a[5].catsEyeBokehEnabled!==void 0&&(fe.checked=a[5].catsEyeBokehEnabled),We=new cn({props:fe}),Ke.push(()=>ft(We,"checked",q)),nt=new Be({props:{vertical:10}}),ii=new Be({props:{horizontal:4}});let xe=a[4]&&xl();return $t=new ut({props:{name:"Camera movement",roundBox:!0,expanded:!1,$$slots:{default:[qp]},$$scope:{ctx:a}}}),{c(){e=F("span"),t=ue("Exposure: "),i=F("input"),r=U(),J(s.$$.fragment),n=U(),l=F("div"),o=F("span"),o.textContent=u,c=U(),J(h.$$.fragment),d=U(),J(p.$$.fragment),g=U(),v=F("span"),m=ue("Aperture: "),x=F("input"),T=U(),Xe&&Xe.c(),_=U(),J(B.$$.fragment),A=U(),C=F("div"),w=F("span"),w.textContent=O,N=U(),J(P.$$.fragment),k=U(),R=F("input"),z=U(),J(j.$$.fragment),$=U(),re=F("button"),J(se.$$.fragment),D=U(),J(W.$$.fragment),de=U(),ae=F("span"),pe=ue("Tilt Shift (x,y): "),Z=F("input"),Ee=U(),Ie=F("input"),Ue=U(),J(De.$$.fragment),je=U(),ze=F("div"),J(We.$$.fragment),we=U(),J(nt.$$.fragment),ie=U(),ve=F("div"),Ve=F("span"),Ve.innerHTML=at,_t=U(),Je=F("input"),Nr=U(),J(ii.$$.fragment),zr=U(),Nt=F("input"),Fr=U(),xe&&xe.c(),ir=U(),J($t.$$.fragment),this.h()},l(H){e=L(H,"SPAN",{class:!0});var me=G(e);t=ce(me,"Exposure: "),i=L(me,"INPUT",{class:!0,type:!0}),me.forEach(y),r=V(H),Q(s.$$.fragment,H),n=V(H),l=L(H,"DIV",{class:!0});var Gt=G(l);o=L(Gt,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(o)!=="svelte-1sn2dj9"&&(o.textContent=u),c=V(Gt),Q(h.$$.fragment,Gt),Gt.forEach(y),d=V(H),Q(p.$$.fragment,H),g=V(H),v=L(H,"SPAN",{class:!0});var bi=G(v);m=ce(bi,"Aperture: "),x=L(bi,"INPUT",{class:!0,type:!0}),bi.forEach(y),T=V(H),Xe&&Xe.l(H),_=V(H),Q(B.$$.fragment,H),A=V(H),C=L(H,"DIV",{class:!0});var dt=G(C);w=L(dt,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(w)!=="svelte-1unc4gb"&&(w.textContent=O),N=V(dt),Q(P.$$.fragment,dt),k=V(dt),R=L(dt,"INPUT",{class:!0,type:!0}),z=V(dt),Q(j.$$.fragment,dt),$=V(dt),re=L(dt,"BUTTON",{class:!0});var Sa=G(re);Q(se.$$.fragment,Sa),Sa.forEach(y),dt.forEach(y),D=V(H),Q(W.$$.fragment,H),de=V(H),ae=L(H,"SPAN",{class:!0});var kr=G(ae);pe=ce(kr,"Tilt Shift (x,y): "),Z=L(kr,"INPUT",{class:!0,type:!0}),Ee=V(kr),Ie=L(kr,"INPUT",{class:!0,type:!0}),kr.forEach(y),Ue=V(H),Q(De.$$.fragment,H),je=V(H),ze=L(H,"DIV",{class:!0});var xi=G(ze);Q(We.$$.fragment,xi),we=V(xi),Q(nt.$$.fragment,xi),ie=V(xi),ve=L(xi,"DIV",{class:!0});var wi=G(ve);Ve=L(wi,"SPAN",{class:!0,"data-svelte-h":!0}),Pe(Ve)!=="svelte-195bkco"&&(Ve.innerHTML=at),_t=V(wi),Je=L(wi,"INPUT",{class:!0,type:!0}),Nr=V(wi),Q(ii.$$.fragment,wi),zr=V(wi),Nt=L(wi,"INPUT",{class:!0,type:!0}),wi.forEach(y),Fr=V(xi),xe&&xe.l(xi),xi.forEach(y),ir=V(H),Q($t.$$.fragment,H),this.h()},h(){b(i,"class","samples-limit-input svelte-2r8mmv"),b(i,"type","text"),b(e,"class","svelte-2r8mmv"),b(o,"class","svelte-2r8mmv"),b(l,"class","flex-row svelte-2r8mmv"),b(x,"class","samples-limit-input svelte-2r8mmv"),b(x,"type","text"),b(v,"class","svelte-2r8mmv"),b(w,"class","svelte-2r8mmv"),b(R,"class","samples-limit-input svelte-2r8mmv"),b(R,"type","text"),b(re,"class","click-set-fd svelte-2r8mmv"),ne(re,"active",a[0]),b(C,"class","fd-flex-row svelte-2r8mmv"),b(Z,"class","samples-limit-input svelte-2r8mmv"),b(Z,"type","text"),b(Ie,"class","samples-limit-input svelte-2r8mmv"),b(Ie,"type","text"),b(ae,"class","svelte-2r8mmv"),b(Ve,"class","svelte-2r8mmv"),b(Je,"class","samples-limit-input svelte-2r8mmv"),b(Je,"type","text"),b(Nt,"class","samples-limit-input svelte-2r8mmv"),b(Nt,"type","text"),b(ve,"class","flex-row ce-options svelte-2r8mmv"),ne(ve,"disabled",!a[5].catsEyeBokehEnabled&&!a[4]),b(ze,"class","svelte-2r8mmv"),ne(ze,"locked",a[4])},m(H,me){M(H,e,me),E(e,t),E(e,i),Te(i,a[5].exposure),M(H,r,me),ee(s,H,me),M(H,n,me),M(H,l,me),E(l,o),E(l,c),ee(h,l,null),M(H,d,me),ee(p,H,me),M(H,g,me),M(H,v,me),E(v,m),E(v,x),Te(x,a[5].aperture),M(H,T,me),Xe&&Xe.m(H,me),M(H,_,me),ee(B,H,me),M(H,A,me),M(H,C,me),E(C,w),E(C,N),ee(P,C,null),E(C,k),E(C,R),Te(R,a[5].focusDistance),E(C,z),ee(j,C,null),E(C,$),E(C,re),ee(se,re,null),M(H,D,me),ee(W,H,me),M(H,de,me),M(H,ae,me),E(ae,pe),E(ae,Z),Te(Z,a[1]),E(ae,Ee),E(ae,Ie),Te(Ie,a[2]),M(H,Ue,me),ee(De,H,me),M(H,je,me),M(H,ze,me),ee(We,ze,null),E(ze,we),ee(nt,ze,null),E(ze,ie),E(ze,ve),E(ve,Ve),E(ve,_t),E(ve,Je),Te(Je,a[5].catsEyeBokehMult),E(ve,Nr),ee(ii,ve,null),E(ve,zr),E(ve,Nt),Te(Nt,a[5].catsEyeBokehPow),E(ze,Fr),xe&&xe.m(ze,null),M(H,ir,me),ee($t,H,me),ri=!0,Lr||(gs=[le(i,"input",a[14]),le(x,"input",a[16]),le(R,"input",a[17]),le(re,"click",a[7]),le(Z,"input",a[18]),le(Z,"keyup",a[9]),le(Ie,"input",a[19]),le(Ie,"keyup",a[10]),le(Je,"input",a[21]),le(Nt,"input",a[22])],Lr=!0)},p(H,[me]){me&32&&i.value!==H[5].exposure&&Te(i,H[5].exposure);const Gt={};!f&&me&8&&(f=!0,Gt.values=H[3],ht(()=>f=!1)),h.$set(Gt),me&32&&x.value!==H[5].aperture&&Te(x,H[5].aperture),H[4]&&H[5].aperture>0?Xe?me&48&&X(Xe,1):(Xe=bl(),Xe.c(),X(Xe,1),Xe.m(_.parentNode,_)):Xe&&(di(),Y(Xe,1,1,()=>{Xe=null}),pi()),me&32&&R.value!==H[5].focusDistance&&Te(R,H[5].focusDistance),(!ri||me&1)&&ne(re,"active",H[0]),me&2&&Z.value!==H[1]&&Te(Z,H[1]),me&4&&Ie.value!==H[2]&&Te(Ie,H[2]);const bi={};!K&&me&32&&(K=!0,bi.checked=H[5].catsEyeBokehEnabled,ht(()=>K=!1)),We.$set(bi),me&32&&Je.value!==H[5].catsEyeBokehMult&&Te(Je,H[5].catsEyeBokehMult),me&32&&Nt.value!==H[5].catsEyeBokehPow&&Te(Nt,H[5].catsEyeBokehPow),(!ri||me&48)&&ne(ve,"disabled",!H[5].catsEyeBokehEnabled&&!H[4]),H[4]?xe?me&16&&X(xe,1):(xe=xl(),xe.c(),X(xe,1),xe.m(ze,null)):xe&&(di(),Y(xe,1,1,()=>{xe=null}),pi()),(!ri||me&16)&&ne(ze,"locked",H[4]);const dt={};me&67108928&&(dt.$$scope={dirty:me,ctx:H}),$t.$set(dt)},i(H){ri||(X(s.$$.fragment,H),X(h.$$.fragment,H),X(p.$$.fragment,H),X(Xe),X(B.$$.fragment,H),X(P.$$.fragment,H),X(j.$$.fragment,H),X(se.$$.fragment,H),X(W.$$.fragment,H),X(De.$$.fragment,H),X(We.$$.fragment,H),X(nt.$$.fragment,H),X(ii.$$.fragment,H),X(xe),X($t.$$.fragment,H),ri=!0)},o(H){Y(s.$$.fragment,H),Y(h.$$.fragment,H),Y(p.$$.fragment,H),Y(Xe),Y(B.$$.fragment,H),Y(P.$$.fragment,H),Y(j.$$.fragment,H),Y(se.$$.fragment,H),Y(W.$$.fragment,H),Y(De.$$.fragment,H),Y(We.$$.fragment,H),Y(nt.$$.fragment,H),Y(ii.$$.fragment,H),Y(xe),Y($t.$$.fragment,H),ri=!1},d(H){H&&(y(e),y(r),y(n),y(l),y(d),y(g),y(v),y(T),y(_),y(A),y(C),y(D),y(de),y(ae),y(Ue),y(je),y(ze),y(ir)),te(s,H),te(h),te(p,H),Xe&&Xe.d(H),te(B,H),te(P),te(j),te(se),te(W,H),te(De,H),te(We),te(nt),te(ii),xe&&xe.d(),te($t,H),Lr=!1,Qe(gs)}}}let Pu=.01;function Xs(a){return`(${a.x.toFixed(1)}, ${a.y.toFixed(1)}, ${a.z.toFixed(1)})`}function Wp(a,e,t){let i,r,s,n;qe(a,Fe,R=>t(5,r=R)),qe(a,ye,R=>t(13,s=R)),qe(a,Pi,R=>t(6,n=R));let{canvasRef:l}=e,{renderer:o}=e,u=!1;function c(){t(0,u=!0)}function h(R){if(u){let z=R.offsetX,j=l.clientHeight-R.offsetY,$=o.getFocusDistanceFromScreenPoint(new oe(z,j));$>-1&&gt(Fe,r.focusDistance=$,r),t(0,u=!1)}}let f="0",d="0",p=[0];Fe.subscribe(R=>{p[0]!==R.fov&&t(3,p=[R.fov-R.fov%Pu]),parseFloat(f)!==R.tiltShift.x&&t(1,f=R.tiltShift.x.toString()),parseFloat(d)!==R.tiltShift.y&&t(2,d=R.tiltShift.y.toString())});function g(R){gt(Fe,r.fov=parseFloat(R.detail.value),r)}function v(R){let z=parseFloat(R.target.value);isNaN(z)||gt(Fe,r.tiltShift=new oe(z,parseFloat(d)),r)}function m(R){let z=parseFloat(R.target.value);isNaN(z)||gt(Fe,r.tiltShift=new oe(parseFloat(f),z),r)}function x(){r.exposure=this.value,Fe.set(r)}function T(R){p=R,t(3,p)}function _(){r.aperture=this.value,Fe.set(r)}function B(){r.focusDistance=this.value,Fe.set(r)}function A(){f=this.value,t(1,f)}function C(){d=this.value,t(2,d)}function w(R){a.$$.not_equal(r.catsEyeBokehEnabled,R)&&(r.catsEyeBokehEnabled=R,Fe.set(r))}function O(){r.catsEyeBokehMult=this.value,Fe.set(r)}function N(){r.catsEyeBokehPow=this.value,Fe.set(r)}function P(){n.movementSpeed=this.value,Pi.set(n)}function k(){n.rotationSpeed=this.value,Pi.set(n)}return a.$$set=R=>{"canvasRef"in R&&t(11,l=R.canvasRef),"renderer"in R&&t(12,o=R.renderer)},a.$$.update=()=>{a.$$.dirty&8192&&t(4,i=s.integrator=="ReSTIR"),a.$$.dirty&2048&&l&&l.addEventListener("click",h)},[u,f,d,p,i,r,n,c,g,v,m,l,o,s,x,T,_,B,A,C,w,O,N,P,k]}class Xp extends Me{constructor(e){super(),Ae(this,e,Wp,jp,Re,{canvasRef:11,renderer:12})}}function Yp(a){let e,t,i="width:",r,s,n,l,o,u,c="height:",h,f,d,p,g,v,m,x,T;function _(N){a[9](N)}let B={min:1,max:a[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};a[0]!==void 0&&(B.values=a[0]),s=new fi({props:B}),Ke.push(()=>ft(s,"values",_));function A(N){a[10](N)}let C={min:1,max:a[3],pips:!0,float:!0,pipstep:100,springValues:{stiffness:1,damping:1}};a[1]!==void 0&&(C.values=a[1]),f=new fi({props:C}),Ke.push(()=>ft(f,"values",A)),g=new Be({props:{vertical:10}});function w(N){a[11](N)}let O={label:"Full screen:"};return a[2]!==void 0&&(O.checked=a[2]),m=new cn({props:O}),Ke.push(()=>ft(m,"checked",w)),m.$on("change",a[4]),{c(){e=F("div"),t=F("label"),t.textContent=i,r=U(),J(s.$$.fragment),l=U(),o=F("div"),u=F("label"),u.textContent=c,h=U(),J(f.$$.fragment),p=U(),J(g.$$.fragment),v=U(),J(m.$$.fragment),this.h()},l(N){e=L(N,"DIV",{class:!0});var P=G(e);t=L(P,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-dhiveu"&&(t.textContent=i),r=V(P),Q(s.$$.fragment,P),P.forEach(y),l=V(N),o=L(N,"DIV",{class:!0});var k=G(o);u=L(k,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-qeszdj"&&(u.textContent=c),h=V(k),Q(f.$$.fragment,k),k.forEach(y),p=V(N),Q(g.$$.fragment,N),v=V(N),Q(m.$$.fragment,N),this.h()},h(){b(t,"class","svelte-ysouhs"),b(e,"class","flex-row svelte-ysouhs"),b(u,"class","svelte-ysouhs"),b(o,"class","flex-row svelte-ysouhs")},m(N,P){M(N,e,P),E(e,t),E(e,r),ee(s,e,null),M(N,l,P),M(N,o,P),E(o,u),E(o,h),ee(f,o,null),M(N,p,P),ee(g,N,P),M(N,v,P),ee(m,N,P),T=!0},p(N,[P]){const k={};P&8&&(k.max=N[3]),!n&&P&1&&(n=!0,k.values=N[0],ht(()=>n=!1)),s.$set(k);const R={};P&8&&(R.max=N[3]),!d&&P&2&&(d=!0,R.values=N[1],ht(()=>d=!1)),f.$set(R);const z={};!x&&P&4&&(x=!0,z.checked=N[2],ht(()=>x=!1)),m.$set(z)},i(N){T||(X(s.$$.fragment,N),X(f.$$.fragment,N),X(g.$$.fragment,N),X(m.$$.fragment,N),T=!0)},o(N){Y(s.$$.fragment,N),Y(f.$$.fragment,N),Y(g.$$.fragment,N),Y(m.$$.fragment,N),T=!1},d(N){N&&(y(e),y(l),y(o),y(p),y(v)),te(s),te(f),te(g,N),te(m,N)}}}function Zp(a,e,t){let{canvasContainerEl:i}=e,{width:r=1}=e,{height:s=1}=e,n=[1],l=[1],o=0,u=!1,c=!1;function h(){t(3,o=Math.floor(Math.max(innerHeight,innerWidth)*1))}function f(){const m=i.getBoundingClientRect();t(0,n=[m.width-30]),t(1,l=[m.height-30])}function d(){u&&f()}function p(m){n=m,t(0,n),t(7,i),t(8,c),t(2,u)}function g(m){l=m,t(1,l),t(7,i),t(8,c),t(2,u)}function v(m){u=m,t(2,u)}return a.$$set=m=>{"canvasContainerEl"in m&&t(7,i=m.canvasContainerEl),"width"in m&&t(5,r=m.width),"height"in m&&t(6,s=m.height)},a.$$.update=()=>{a.$$.dirty&388&&i&&(h(),c||(zu().then(()=>{t(0,n=[800]),t(1,l=[600])}),t(8,c=!0)),new ResizeObserver(x=>{h(),u&&f()}).observe(i)),a.$$.dirty&3&&(t(5,r=n[0]),t(6,s=l[0]))},[n,l,u,o,d,r,s,i,c,p,g,v]}class Kp extends Me{constructor(e){super(),Ae(this,e,Zp,Yp,Re,{canvasContainerEl:7,width:5,height:6})}}function Jp(a){let e,t,i;return{c(){e=F("input"),this.h()},l(r){e=L(r,"INPUT",{type:!0,class:!0}),this.h()},h(){b(e,"type","checkbox"),b(e,"class","svelte-1ucetel")},m(r,s){M(r,e,s),e.checked=a[0],t||(i=le(e,"change",a[1]),t=!0)},p(r,[s]){s&1&&(e.checked=r[0])},i:ge,o:ge,d(r){r&&y(e),t=!1,i()}}}function Qp(a,e,t){let{checked:i}=e;function r(){i=this.checked,t(0,i)}return a.$$set=s=>{"checked"in s&&t(0,i=s.checked)},[i,r]}class em extends Me{constructor(e){super(),Ae(this,e,Qp,Jp,Re,{checked:0})}}function tm(a){let e,t,i,r,s,n,l,o="Rotation X:",u,c,h,f,d,p,g,v="Rotation Y:",m,x,T,_,B,A,C,w="Use compensated distribution: ",O,N,P,k,R,z,j,$;c=new fi({props:{min:0,max:Math.PI*2,float:!0,values:[a[0].ENVMAP_ROTX],step:.1,springValues:{stiffness:1,damping:1}}}),c.$on("change",a[2]),f=new Be({props:{vertical:5}}),x=new fi({props:{min:0,max:Math.PI*2,float:!0,values:[a[0].ENVMAP_ROTY],step:.1,springValues:{stiffness:1,damping:1}}}),x.$on("change",a[3]),_=new Be({props:{vertical:12}});function re(D){a[4](D)}let se={};return a[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION!==void 0&&(se.checked=a[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION),N=new em({props:se}),Ke.push(()=>ft(N,"checked",re)),R=new Be({props:{vertical:8}}),{c(){e=F("span"),t=ue("Scale: "),i=F("input"),s=U(),n=F("div"),l=F("label"),l.textContent=o,u=U(),J(c.$$.fragment),h=U(),J(f.$$.fragment),d=U(),p=F("div"),g=F("label"),g.textContent=v,m=U(),J(x.$$.fragment),T=U(),J(_.$$.fragment),B=U(),A=F("div"),C=F("p"),C.textContent=w,O=U(),J(N.$$.fragment),k=U(),J(R.$$.fragment),this.h()},l(D){e=L(D,"SPAN",{class:!0});var W=G(e);t=ce(W,"Scale: "),i=L(W,"INPUT",{class:!0,type:!0}),W.forEach(y),s=V(D),n=L(D,"DIV",{class:!0});var de=G(n);l=L(de,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(l)!=="svelte-14q8bng"&&(l.textContent=o),u=V(de),Q(c.$$.fragment,de),de.forEach(y),h=V(D),Q(f.$$.fragment,D),d=V(D),p=L(D,"DIV",{class:!0});var ae=G(p);g=L(ae,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(g)!=="svelte-lmzy5l"&&(g.textContent=v),m=V(ae),Q(x.$$.fragment,ae),ae.forEach(y),T=V(D),Q(_.$$.fragment,D),B=V(D),A=L(D,"DIV",{class:!0});var pe=G(A);C=L(pe,"P",{class:!0,"data-svelte-h":!0}),Pe(C)!=="svelte-36qtj4"&&(C.textContent=w),O=V(pe),Q(N.$$.fragment,pe),pe.forEach(y),k=V(D),Q(R.$$.fragment,D),this.h()},h(){b(i,"class","envmap-scale-input svelte-925zij"),b(i,"type","text"),i.value=r=a[0].ENVMAP_SCALE,b(e,"class","svelte-925zij"),b(l,"class","large no-margin svelte-925zij"),b(n,"class","flex-row svelte-925zij"),b(g,"class","large no-margin svelte-925zij"),b(p,"class","flex-row svelte-925zij"),b(C,"class","svelte-925zij"),b(A,"class","flex-row svelte-925zij")},m(D,W){M(D,e,W),E(e,t),E(e,i),M(D,s,W),M(D,n,W),E(n,l),E(n,u),ee(c,n,null),M(D,h,W),ee(f,D,W),M(D,d,W),M(D,p,W),E(p,g),E(p,m),ee(x,p,null),M(D,T,W),ee(_,D,W),M(D,B,W),M(D,A,W),E(A,C),E(A,O),ee(N,A,null),M(D,k,W),ee(R,D,W),z=!0,j||($=le(i,"change",a[1]),j=!0)},p(D,[W]){(!z||W&1&&r!==(r=D[0].ENVMAP_SCALE)&&i.value!==r)&&(i.value=r);const de={};W&1&&(de.values=[D[0].ENVMAP_ROTX]),c.$set(de);const ae={};W&1&&(ae.values=[D[0].ENVMAP_ROTY]),x.$set(ae);const pe={};!P&&W&1&&(P=!0,pe.checked=D[0].ENVMAP_USE_COMPENSATED_DISTRIBUTION,ht(()=>P=!1)),N.$set(pe)},i(D){z||(X(c.$$.fragment,D),X(f.$$.fragment,D),X(x.$$.fragment,D),X(_.$$.fragment,D),X(N.$$.fragment,D),X(R.$$.fragment,D),z=!0)},o(D){Y(c.$$.fragment,D),Y(f.$$.fragment,D),Y(x.$$.fragment,D),Y(_.$$.fragment,D),Y(N.$$.fragment,D),Y(R.$$.fragment,D),z=!1},d(D){D&&(y(e),y(s),y(n),y(h),y(d),y(p),y(T),y(B),y(A),y(k)),te(c),te(f,D),te(x),te(_,D),te(N),te(R,D),j=!1,$()}}}function im(a,e,t){let i;qe(a,ye,o=>t(0,i=o));function r(o){const u=parseFloat(o.target.value);isNaN(u)||gt(ye,i.ENVMAP_SCALE=u,i)}function s(o){const u=o.detail.value;isNaN(u)||gt(ye,i.ENVMAP_ROTX=u,i)}function n(o){const u=o.detail.value;isNaN(u)||gt(ye,i.ENVMAP_ROTY=u,i)}function l(o){a.$$.not_equal(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION,o)&&(i.ENVMAP_USE_COMPENSATED_DISTRIBUTION=o,ye.set(i))}return[i,r,s,n,l]}class rm extends Me{constructor(e){super(),Ae(this,e,im,tm,Re,{})}}function wl(a){var k,R,z,j;let e,t,i,r,s,n=(((k=a[1].integrator.ReSTIR)==null?void 0:k.state)??"")+"",l,o,u,c,h,f=(((R=a[1].integrator.ReSTIR)==null?void 0:R.initialCandidateIndex)??"")+"",d,p,g,v,m,x=(((z=a[1].integrator.ReSTIR)==null?void 0:z.srPassIndex)??"")+"",T,_,B,A,C,w=(((j=a[1].integrator.ReSTIR)==null?void 0:j.bufferSizeMB.toFixed(0))??"")+"",O,N,P;return e=new Jt({}),{c(){J(e.$$.fragment),t=U(),i=F("p"),r=ue("ReSTIR PT State: "),s=F("span"),l=ue(n),o=U(),u=F("p"),c=ue("Initial Candidate index: "),h=F("span"),d=ue(f),p=U(),g=F("p"),v=ue("Spatial Re-sample index: "),m=F("span"),T=ue(x),_=U(),B=F("p"),A=ue("ReSTIR Buffer size (MB): "),C=F("span"),O=ue(w),N=ue(" (x2)"),this.h()},l($){Q(e.$$.fragment,$),t=V($),i=L($,"P",{class:!0});var re=G(i);r=ce(re,"ReSTIR PT State: "),s=L(re,"SPAN",{class:!0});var se=G(s);l=ce(se,n),se.forEach(y),re.forEach(y),o=V($),u=L($,"P",{class:!0});var D=G(u);c=ce(D,"Initial Candidate index: "),h=L(D,"SPAN",{class:!0});var W=G(h);d=ce(W,f),W.forEach(y),D.forEach(y),p=V($),g=L($,"P",{class:!0});var de=G(g);v=ce(de,"Spatial Re-sample index: "),m=L(de,"SPAN",{class:!0});var ae=G(m);T=ce(ae,x),ae.forEach(y),de.forEach(y),_=V($),B=L($,"P",{class:!0});var pe=G(B);A=ce(pe,"ReSTIR Buffer size (MB): "),C=L(pe,"SPAN",{class:!0});var Z=G(C);O=ce(Z,w),N=ce(Z," (x2)"),Z.forEach(y),pe.forEach(y),this.h()},h(){b(s,"class","svelte-denqo1"),b(i,"class","svelte-denqo1"),b(h,"class","svelte-denqo1"),b(u,"class","svelte-denqo1"),b(m,"class","svelte-denqo1"),b(g,"class","svelte-denqo1"),b(C,"class","svelte-denqo1"),b(B,"class","svelte-denqo1")},m($,re){ee(e,$,re),M($,t,re),M($,i,re),E(i,r),E(i,s),E(s,l),M($,o,re),M($,u,re),E(u,c),E(u,h),E(h,d),M($,p,re),M($,g,re),E(g,v),E(g,m),E(m,T),M($,_,re),M($,B,re),E(B,A),E(B,C),E(C,O),E(C,N),P=!0},p($,re){var se,D,W,de;(!P||re&2)&&n!==(n=(((se=$[1].integrator.ReSTIR)==null?void 0:se.state)??"")+"")&&Oe(l,n),(!P||re&2)&&f!==(f=(((D=$[1].integrator.ReSTIR)==null?void 0:D.initialCandidateIndex)??"")+"")&&Oe(d,f),(!P||re&2)&&x!==(x=(((W=$[1].integrator.ReSTIR)==null?void 0:W.srPassIndex)??"")+"")&&Oe(T,x),(!P||re&2)&&w!==(w=(((de=$[1].integrator.ReSTIR)==null?void 0:de.bufferSizeMB.toFixed(0))??"")+"")&&Oe(O,w)},i($){P||(X(e.$$.fragment,$),P=!0)},o($){Y(e.$$.fragment,$),P=!1},d($){$&&(y(t),y(i),y(o),y(u),y(p),y(g),y(_),y(B)),te(e,$)}}}function sm(a){let e,t,i,r=a[0].nodesCount+"",s,n,l,o,u,c=a[1].count+"",h,f,d,p,g,v=a[1].tileSize+"",m,x,T,_,B,A=(a[1].count==a[1].limit?0:a[1].ms.toFixed(0))+"",C,w,O,N,P,k,R=a[1].clickTarget+"",z,j,$,re,se=a[2].integrator=="ReSTIR"&&wl(a);return{c(){e=F("p"),t=ue("Bvh nodes count: "),i=F("span"),s=ue(r),n=U(),l=F("p"),o=ue("Sample: "),u=F("span"),h=ue(c),f=U(),d=F("p"),p=ue("Tile: "),g=F("span"),m=ue(v),x=U(),T=F("p"),_=ue("Performance: "),B=F("span"),C=ue(A),w=ue(" ms"),O=U(),N=F("p"),P=ue("Click target: "),k=F("span"),z=ue(R),j=U(),se&&se.c(),$=Ne(),this.h()},l(D){e=L(D,"P",{class:!0});var W=G(e);t=ce(W,"Bvh nodes count: "),i=L(W,"SPAN",{class:!0});var de=G(i);s=ce(de,r),de.forEach(y),W.forEach(y),n=V(D),l=L(D,"P",{class:!0});var ae=G(l);o=ce(ae,"Sample: "),u=L(ae,"SPAN",{class:!0});var pe=G(u);h=ce(pe,c),pe.forEach(y),ae.forEach(y),f=V(D),d=L(D,"P",{class:!0});var Z=G(d);p=ce(Z,"Tile: "),g=L(Z,"SPAN",{class:!0});var Ee=G(g);m=ce(Ee,v),Ee.forEach(y),Z.forEach(y),x=V(D),T=L(D,"P",{class:!0});var Ie=G(T);_=ce(Ie,"Performance: "),B=L(Ie,"SPAN",{class:!0});var Ue=G(B);C=ce(Ue,A),w=ce(Ue," ms"),Ue.forEach(y),Ie.forEach(y),O=V(D),N=L(D,"P",{class:!0});var De=G(N);P=ce(De,"Click target: "),k=L(De,"SPAN",{class:!0});var je=G(k);z=ce(je,R),je.forEach(y),De.forEach(y),j=V(D),se&&se.l(D),$=Ne(),this.h()},h(){b(i,"class","svelte-denqo1"),b(e,"class","svelte-denqo1"),b(u,"class","svelte-denqo1"),b(l,"class","svelte-denqo1"),b(g,"class","svelte-denqo1"),b(d,"class","svelte-denqo1"),b(B,"class","svelte-denqo1"),b(T,"class","svelte-denqo1"),b(k,"class","user-selectable svelte-denqo1"),b(N,"class","svelte-denqo1")},m(D,W){M(D,e,W),E(e,t),E(e,i),E(i,s),M(D,n,W),M(D,l,W),E(l,o),E(l,u),E(u,h),M(D,f,W),M(D,d,W),E(d,p),E(d,g),E(g,m),M(D,x,W),M(D,T,W),E(T,_),E(T,B),E(B,C),E(B,w),M(D,O,W),M(D,N,W),E(N,P),E(N,k),E(k,z),M(D,j,W),se&&se.m(D,W),M(D,$,W),re=!0},p(D,[W]){(!re||W&1)&&r!==(r=D[0].nodesCount+"")&&Oe(s,r),(!re||W&2)&&c!==(c=D[1].count+"")&&Oe(h,c),(!re||W&2)&&v!==(v=D[1].tileSize+"")&&Oe(m,v),(!re||W&2)&&A!==(A=(D[1].count==D[1].limit?0:D[1].ms.toFixed(0))+"")&&Oe(C,A),(!re||W&2)&&R!==(R=D[1].clickTarget+"")&&Oe(z,R),D[2].integrator=="ReSTIR"?se?(se.p(D,W),W&4&&X(se,1)):(se=wl(D),se.c(),X(se,1),se.m($.parentNode,$)):se&&(di(),Y(se,1,1,()=>{se=null}),pi())},i(D){re||(X(se),re=!0)},o(D){Y(se),re=!1},d(D){D&&(y(e),y(n),y(l),y(f),y(d),y(x),y(T),y(O),y(N),y(j),y($)),se&&se.d(D)}}}function nm(a,e,t){let i,r,s;return qe(a,tu,n=>t(0,i=n)),qe(a,$e,n=>t(1,r=n)),qe(a,ye,n=>t(2,s=n)),[i,r,s]}class am extends Me{constructor(e){super(),Ae(this,e,nm,sm,Re,{})}}function om(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v,m,x,T,_="Max confidence:",B,A,C,w,O,N,P="Spatial-reuse candidates:",k,R,z,j,$,re,se,D,W="Spatial-reuse passes:",de,ae,pe,Z,Ee,Ie;s=new Be({props:{vertical:12}}),h=new Be({props:{vertical:14}});function Ue(ie){a[6](ie)}let De={label:"Use temporal resample:"};a[3].ReSTIR.USE_TEMPORAL_RESAMPLE!==void 0&&(De.checked=a[3].ReSTIR.USE_TEMPORAL_RESAMPLE),d=new cn({props:De}),Ke.push(()=>ft(d,"checked",Ue)),v=new Be({props:{vertical:5}});function je(ie){a[7](ie)}let ze={min:1,max:20,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};a[0]!==void 0&&(ze.values=a[0]),A=new fi({props:ze}),Ke.push(()=>ft(A,"values",je));function We(ie){a[8](ie)}let K={min:1,max:6,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};a[1]!==void 0&&(K.values=a[1]),R=new fi({props:K}),Ke.push(()=>ft(R,"values",We)),$=new Be({props:{vertical:5}});function we(ie){a[9](ie)}let nt={min:1,max:6,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};return a[2]!==void 0&&(nt.values=a[2]),ae=new fi({props:nt}),Ke.push(()=>ft(ae,"values",we)),{c(){e=F("span"),t=ue("Initial Candidates: "),i=F("input"),r=U(),J(s.$$.fragment),n=U(),l=F("span"),o=ue("Spatial-reuse radius: "),u=F("input"),c=U(),J(h.$$.fragment),f=U(),J(d.$$.fragment),g=U(),J(v.$$.fragment),m=U(),x=F("div"),T=F("label"),T.textContent=_,B=U(),J(A.$$.fragment),w=U(),O=F("div"),N=F("label"),N.textContent=P,k=U(),J(R.$$.fragment),j=U(),J($.$$.fragment),re=U(),se=F("div"),D=F("label"),D.textContent=W,de=U(),J(ae.$$.fragment),this.h()},l(ie){e=L(ie,"SPAN",{class:!0});var ve=G(e);t=ce(ve,"Initial Candidates: "),i=L(ve,"INPUT",{class:!0,type:!0}),ve.forEach(y),r=V(ie),Q(s.$$.fragment,ie),n=V(ie),l=L(ie,"SPAN",{class:!0});var Ve=G(l);o=ce(Ve,"Spatial-reuse radius: "),u=L(Ve,"INPUT",{class:!0,type:!0}),Ve.forEach(y),c=V(ie),Q(h.$$.fragment,ie),f=V(ie),Q(d.$$.fragment,ie),g=V(ie),Q(v.$$.fragment,ie),m=V(ie),x=L(ie,"DIV",{class:!0});var at=G(x);T=L(at,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(T)!=="svelte-cajpb8"&&(T.textContent=_),B=V(at),Q(A.$$.fragment,at),at.forEach(y),w=V(ie),O=L(ie,"DIV",{class:!0});var _t=G(O);N=L(_t,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(N)!=="svelte-k0juw5"&&(N.textContent=P),k=V(_t),Q(R.$$.fragment,_t),_t.forEach(y),j=V(ie),Q($.$$.fragment,ie),re=V(ie),se=L(ie,"DIV",{class:!0});var Je=G(se);D=L(Je,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(D)!=="svelte-ruewog"&&(D.textContent=W),de=V(Je),Q(ae.$$.fragment,Je),Je.forEach(y),this.h()},h(){b(i,"class","initial-candidates svelte-15n9co0"),b(i,"type","text"),b(e,"class","svelte-15n9co0"),b(u,"class","initial-candidates svelte-15n9co0"),b(u,"type","text"),b(l,"class","svelte-15n9co0"),b(T,"class","svelte-15n9co0"),b(x,"class","flex-row svelte-15n9co0"),b(N,"class","svelte-15n9co0"),b(O,"class","flex-row svelte-15n9co0"),b(D,"class","svelte-15n9co0"),b(se,"class","flex-row svelte-15n9co0")},m(ie,ve){M(ie,e,ve),E(e,t),E(e,i),Te(i,a[3].ReSTIR.RESTIR_INITIAL_CANDIDATES),M(ie,r,ve),ee(s,ie,ve),M(ie,n,ve),M(ie,l,ve),E(l,o),E(l,u),Te(u,a[3].ReSTIR.SR_CIRCLE_RADIUS),M(ie,c,ve),ee(h,ie,ve),M(ie,f,ve),ee(d,ie,ve),M(ie,g,ve),ee(v,ie,ve),M(ie,m,ve),M(ie,x,ve),E(x,T),E(x,B),ee(A,x,null),M(ie,w,ve),M(ie,O,ve),E(O,N),E(O,k),ee(R,O,null),M(ie,j,ve),ee($,ie,ve),M(ie,re,ve),M(ie,se,ve),E(se,D),E(se,de),ee(ae,se,null),Z=!0,Ee||(Ie=[le(i,"input",a[4]),le(u,"input",a[5])],Ee=!0)},p(ie,[ve]){ve&8&&i.value!==ie[3].ReSTIR.RESTIR_INITIAL_CANDIDATES&&Te(i,ie[3].ReSTIR.RESTIR_INITIAL_CANDIDATES),ve&8&&u.value!==ie[3].ReSTIR.SR_CIRCLE_RADIUS&&Te(u,ie[3].ReSTIR.SR_CIRCLE_RADIUS);const Ve={};!p&&ve&8&&(p=!0,Ve.checked=ie[3].ReSTIR.USE_TEMPORAL_RESAMPLE,ht(()=>p=!1)),d.$set(Ve);const at={};!C&&ve&1&&(C=!0,at.values=ie[0],ht(()=>C=!1)),A.$set(at);const _t={};!z&&ve&2&&(z=!0,_t.values=ie[1],ht(()=>z=!1)),R.$set(_t);const Je={};!pe&&ve&4&&(pe=!0,Je.values=ie[2],ht(()=>pe=!1)),ae.$set(Je)},i(ie){Z||(X(s.$$.fragment,ie),X(h.$$.fragment,ie),X(d.$$.fragment,ie),X(v.$$.fragment,ie),X(A.$$.fragment,ie),X(R.$$.fragment,ie),X($.$$.fragment,ie),X(ae.$$.fragment,ie),Z=!0)},o(ie){Y(s.$$.fragment,ie),Y(h.$$.fragment,ie),Y(d.$$.fragment,ie),Y(v.$$.fragment,ie),Y(A.$$.fragment,ie),Y(R.$$.fragment,ie),Y($.$$.fragment,ie),Y(ae.$$.fragment,ie),Z=!1},d(ie){ie&&(y(e),y(r),y(n),y(l),y(c),y(f),y(g),y(m),y(x),y(w),y(O),y(j),y(re),y(se)),te(s,ie),te(h,ie),te(d,ie),te(v,ie),te(A),te(R),te($,ie),te(ae),Ee=!1,Qe(Ie)}}}function lm(a,e,t){let i;qe(a,ye,d=>t(3,i=d));let r=[i.ReSTIR.MAX_CONFIDENCE],s=[i.ReSTIR.RESTIR_SR_CANDIDATES],n=[i.ReSTIR.RESTIR_SR_PASS_COUNT];function l(){i.ReSTIR.RESTIR_INITIAL_CANDIDATES=this.value,ye.set(i)}function o(){i.ReSTIR.SR_CIRCLE_RADIUS=this.value,ye.set(i)}function u(d){a.$$.not_equal(i.ReSTIR.USE_TEMPORAL_RESAMPLE,d)&&(i.ReSTIR.USE_TEMPORAL_RESAMPLE=d,ye.set(i))}function c(d){r=d,t(0,r)}function h(d){s=d,t(1,s)}function f(d){n=d,t(2,n)}return a.$$.update=()=>{a.$$.dirty&15&&(gt(ye,i.ReSTIR.RESTIR_SR_CANDIDATES=s[0],i),gt(ye,i.ReSTIR.RESTIR_SR_PASS_COUNT=n[0],i),gt(ye,i.ReSTIR.MAX_CONFIDENCE=r[0],i),ye.set(i))},[r,s,n,i,l,o,u,c,h,f]}class um extends Me{constructor(e){super(),Ae(this,e,lm,om,Re,{})}}function cm(a){let e,t,i,r;return{c(){e=Ge("svg"),t=Ge("path"),i=Ge("path"),r=Ge("path"),this.h()},l(s){e=He(s,"svg",{stroke:!0,fill:!0,viewBox:!0,version:!0,xmlns:!0,class:!0});var n=G(e);t=He(n,"path",{opacity:!0,d:!0}),G(t).forEach(y),i=He(n,"path",{opacity:!0,d:!0}),G(i).forEach(y),r=He(n,"path",{opacity:!0,d:!0}),G(r).forEach(y),n.forEach(y),this.h()},h(){b(t,"opacity","1.00"),b(t,"d"," M 103.43 21.79 C 111.83 18.99 121.69 23.23 125.64 31.09 C 149.89 75.28 174.08 119.50 198.31 163.70 C 200.46 167.45 202.75 171.48 202.55 175.96 C 202.87 183.80 197.92 191.61 190.63 194.54 C 186.36 196.45 181.57 196.01 177.02 196.02 C 131.67 196.01 86.33 196.02 40.98 196.01 C 36.42 196.03 31.63 196.44 27.36 194.53 C 19.76 191.43 14.71 183.06 15.51 174.89 C 15.68 170.56 17.98 166.75 20.08 163.08 C 44.15 119.11 68.24 75.15 92.34 31.19 C 94.56 26.69 98.73 23.40 103.43 21.79 M 106.97 37.54 C 82.17 83.53 56.73 129.19 31.81 175.12 C 30.94 176.65 32.20 178.20 32.64 179.64 C 83.56 179.80 134.49 179.86 185.41 179.61 C 186.15 177.91 187.13 175.92 185.82 174.21 C 160.96 128.99 136.24 83.69 111.39 38.47 C 110.59 36.64 108.47 37.54 106.97 37.54 Z"),b(i,"opacity","1.00"),b(i,"d"," M 100.83 75.80 C 103.89 72.40 109.01 72.86 113.08 73.72 C 116.16 75.41 118.75 78.35 119.29 81.91 C 119.69 84.94 119.14 87.98 118.79 90.99 C 117.60 106.66 115.97 122.30 114.57 137.96 C 114.27 140.68 114.61 143.66 113.13 146.10 C 111.99 147.27 110.41 147.85 109.01 148.63 C 106.95 147.61 104.34 146.48 104.15 143.82 C 101.84 124.56 99.60 105.27 97.49 85.98 C 96.96 82.28 97.90 78.30 100.83 75.80 Z"),b(r,"opacity","1.00"),b(r,"d"," M 104.43 154.62 C 108.84 151.82 115.08 153.88 117.32 158.50 C 120.74 164.13 115.48 172.30 108.95 171.69 C 104.12 172.07 99.98 167.63 99.67 163.01 C 99.53 159.61 101.51 156.30 104.43 154.62 Z"),b(e,"stroke",a[1]),b(e,"fill",a[0]),b(e,"viewBox","0 0 218 218"),b(e,"version","1.1"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"class","svelte-1cmb9l6")},m(s,n){M(s,e,n),E(e,t),E(e,i),E(e,r)},p(s,[n]){n&2&&b(e,"stroke",s[1]),n&1&&b(e,"fill",s[0])},i:ge,o:ge,d(s){s&&y(e)}}}function hm(a,e,t){let{fill:i="currentColor"}=e,{stroke:r="currentColor"}=e;return a.$$set=s=>{"fill"in s&&t(0,i=s.fill),"stroke"in s&&t(1,r=s.stroke)},[i,r]}class fm extends Me{constructor(e){super(),Ae(this,e,hm,cm,Re,{fill:0,stroke:1})}}function _l(a){let e,t,i,r,s,n;return e=new Jt({props:{topSpace:10,bottomSpace:10}}),r=new fm({}),{c(){J(e.$$.fragment),t=U(),i=F("h6"),J(r.$$.fragment),s=ue(`Using random-array-offset with the Halton sampler results in poor sampling\r
    performance`),this.h()},l(l){Q(e.$$.fragment,l),t=V(l),i=L(l,"H6",{class:!0});var o=G(i);Q(r.$$.fragment,o),s=ce(o,`Using random-array-offset with the Halton sampler results in poor sampling\r
    performance`),o.forEach(y),this.h()},h(){b(i,"class","warning svelte-19ogekg")},m(l,o){ee(e,l,o),M(l,t,o),M(l,i,o),ee(r,i,null),E(i,s),n=!0},i(l){n||(X(e.$$.fragment,l),X(r.$$.fragment,l),n=!0)},o(l){Y(e.$$.fragment,l),Y(r.$$.fragment,l),n=!1},d(l){l&&(y(t),y(i)),te(e,l),te(r)}}}function dm(a){let e,t,i,r,s="None",n,l,o,u,c,h="Add random value",f,d,p,g,v,m="Add random value and random array offset",x,T,_,B,A,C="Blue noise mask",w,O,N,P,k,R,z=a[1]&&_l();return P=Ki(a[3][0]),{c(){e=F("label"),t=F("input"),i=U(),r=F("p"),r.textContent=s,n=U(),l=F("label"),o=F("input"),u=U(),c=F("p"),c.textContent=h,f=U(),d=F("label"),p=F("input"),g=U(),v=F("p"),v.textContent=m,x=U(),T=F("label"),_=F("input"),B=U(),A=F("p"),A.textContent=C,w=U(),z&&z.c(),O=Ne(),this.h()},l(j){e=L(j,"LABEL",{class:!0});var $=G(e);t=L($,"INPUT",{type:!0,name:!0,class:!0}),i=V($),r=L($,"P",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-8wc9ky"&&(r.textContent=s),$.forEach(y),n=V(j),l=L(j,"LABEL",{class:!0});var re=G(l);o=L(re,"INPUT",{type:!0,name:!0,class:!0}),u=V(re),c=L(re,"P",{class:!0,"data-svelte-h":!0}),Pe(c)!=="svelte-1mmj9zd"&&(c.textContent=h),re.forEach(y),f=V(j),d=L(j,"LABEL",{class:!0});var se=G(d);p=L(se,"INPUT",{type:!0,name:!0,class:!0}),g=V(se),v=L(se,"P",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-18qo9w9"&&(v.textContent=m),se.forEach(y),x=V(j),T=L(j,"LABEL",{class:!0});var D=G(T);_=L(D,"INPUT",{type:!0,name:!0,class:!0}),B=V(D),A=L(D,"P",{class:!0,"data-svelte-h":!0}),Pe(A)!=="svelte-1ypjb5y"&&(A.textContent=C),D.forEach(y),w=V(j),z&&z.l(j),O=Ne(),this.h()},h(){b(t,"type","radio"),b(t,"name","correlation-fix-type"),t.__value=wr.NONE,Te(t,t.__value),b(t,"class","svelte-19ogekg"),b(r,"class","svelte-19ogekg"),b(e,"class","svelte-19ogekg"),b(o,"type","radio"),b(o,"name","correlation-fix-type"),o.__value=wr.RANDOM_OFFSET,Te(o,o.__value),b(o,"class","svelte-19ogekg"),b(c,"class","svelte-19ogekg"),b(l,"class","svelte-19ogekg"),b(p,"type","radio"),b(p,"name","correlation-fix-type"),p.__value=wr.RANDOM_ARRAY_OFFSET,Te(p,p.__value),b(p,"class","svelte-19ogekg"),b(v,"class","svelte-19ogekg"),b(d,"class","svelte-19ogekg"),b(_,"type","radio"),b(_,"name","correlation-fix-type"),_.__value=wr.BLUE_NOISE_MASK,Te(_,_.__value),b(_,"class","svelte-19ogekg"),b(A,"class","svelte-19ogekg"),b(T,"class","svelte-19ogekg"),P.p(t,o,p,_)},m(j,$){M(j,e,$),E(e,t),t.checked=t.__value===a[0].SimplePathTrace.SAMPLER_DECORRELATION,E(e,i),E(e,r),M(j,n,$),M(j,l,$),E(l,o),o.checked=o.__value===a[0].SimplePathTrace.SAMPLER_DECORRELATION,E(l,u),E(l,c),M(j,f,$),M(j,d,$),E(d,p),p.checked=p.__value===a[0].SimplePathTrace.SAMPLER_DECORRELATION,E(d,g),E(d,v),M(j,x,$),M(j,T,$),E(T,_),_.checked=_.__value===a[0].SimplePathTrace.SAMPLER_DECORRELATION,E(T,B),E(T,A),M(j,w,$),z&&z.m(j,$),M(j,O,$),N=!0,k||(R=[le(t,"change",a[2]),le(o,"change",a[4]),le(p,"change",a[5]),le(_,"change",a[6])],k=!0)},p(j,[$]){$&1&&(t.checked=t.__value===j[0].SimplePathTrace.SAMPLER_DECORRELATION),$&1&&(o.checked=o.__value===j[0].SimplePathTrace.SAMPLER_DECORRELATION),$&1&&(p.checked=p.__value===j[0].SimplePathTrace.SAMPLER_DECORRELATION),$&1&&(_.checked=_.__value===j[0].SimplePathTrace.SAMPLER_DECORRELATION),j[1]?z?$&2&&X(z,1):(z=_l(),z.c(),X(z,1),z.m(O.parentNode,O)):z&&(di(),Y(z,1,1,()=>{z=null}),pi())},i(j){N||(X(z),N=!0)},o(j){Y(z),N=!1},d(j){j&&(y(e),y(n),y(l),y(f),y(d),y(x),y(T),y(w),y(O)),z&&z.d(j),P.r(),k=!1,Qe(R)}}}function pm(a,e,t){let i,r;qe(a,ye,c=>t(0,r=c));const s=[[]];function n(){r.SimplePathTrace.SAMPLER_DECORRELATION=this.__value,ye.set(r)}function l(){r.SimplePathTrace.SAMPLER_DECORRELATION=this.__value,ye.set(r)}function o(){r.SimplePathTrace.SAMPLER_DECORRELATION=this.__value,ye.set(r)}function u(){r.SimplePathTrace.SAMPLER_DECORRELATION=this.__value,ye.set(r)}return a.$$.update=()=>{a.$$.dirty&1&&t(1,i=r.SimplePathTrace.SAMPLER_DECORRELATION==wr.RANDOM_ARRAY_OFFSET&&r.SimplePathTrace.SAMPLER_TYPE==Wt.HALTON)},[r,i,n,s,l,o,u]}class mm extends Me{constructor(e){super(),Ae(this,e,pm,dm,Re,{})}}function gm(a){let e,t="Mis Type:",i,r,s,n,l,o,u,c,h,f,d,p,g,v,m,x,T="Method:",_,B,A,C,w,O,N,P,k,R,z,j,$,re,se;return r=new Jt({}),B=new Jt({}),j=Ki(a[2][0]),$=Ki(a[2][1]),{c(){e=F("p"),e.textContent=t,i=U(),J(r.$$.fragment),s=U(),n=F("label"),l=F("input"),o=ue(`\r
  Brdf only`),u=U(),c=F("label"),h=F("input"),f=ue(`\r
  Next Event Estimation`),d=U(),p=F("br"),g=U(),v=F("br"),m=U(),x=F("p"),x.textContent=T,_=U(),J(B.$$.fragment),A=U(),C=F("label"),w=F("input"),O=ue(`\r
  Balanced Heuristic`),N=U(),P=F("label"),k=F("input"),R=ue(`\r
  Power Heuristic`),this.h()},l(D){e=L(D,"P",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-v6hg55"&&(e.textContent=t),i=V(D),Q(r.$$.fragment,D),s=V(D),n=L(D,"LABEL",{class:!0});var W=G(n);l=L(W,"INPUT",{type:!0,name:!0,class:!0}),o=ce(W,`\r
  Brdf only`),W.forEach(y),u=V(D),c=L(D,"LABEL",{class:!0});var de=G(c);h=L(de,"INPUT",{type:!0,name:!0,class:!0}),f=ce(de,`\r
  Next Event Estimation`),de.forEach(y),d=V(D),p=L(D,"BR",{}),g=V(D),v=L(D,"BR",{}),m=V(D),x=L(D,"P",{class:!0,"data-svelte-h":!0}),Pe(x)!=="svelte-jbj2k9"&&(x.textContent=T),_=V(D),Q(B.$$.fragment,D),A=V(D),C=L(D,"LABEL",{class:!0});var ae=G(C);w=L(ae,"INPUT",{type:!0,name:!0,class:!0}),O=ce(ae,`\r
  Balanced Heuristic`),ae.forEach(y),N=V(D),P=L(D,"LABEL",{class:!0});var pe=G(P);k=L(pe,"INPUT",{type:!0,name:!0,class:!0}),R=ce(pe,`\r
  Power Heuristic`),pe.forEach(y),this.h()},h(){b(e,"class","svelte-12cpmoe"),b(l,"type","radio"),b(l,"name","mis-type"),l.__value=Yn.BRDF_ONLY,Te(l,l.__value),b(l,"class","svelte-12cpmoe"),b(n,"class","svelte-12cpmoe"),b(h,"type","radio"),b(h,"name","mis-type"),h.__value=Yn.NEXT_EVENT_ESTIMATION,Te(h,h.__value),b(h,"class","svelte-12cpmoe"),b(c,"class","svelte-12cpmoe"),b(x,"class","svelte-12cpmoe"),b(w,"type","radio"),b(w,"name","mis-heuristic"),w.__value=0,Te(w,w.__value),b(w,"class","svelte-12cpmoe"),b(C,"class","svelte-12cpmoe"),b(k,"type","radio"),b(k,"name","mis-heuristic"),k.__value=1,Te(k,k.__value),b(k,"class","svelte-12cpmoe"),b(P,"class","svelte-12cpmoe"),j.p(w,k),$.p(l,h)},m(D,W){M(D,e,W),M(D,i,W),ee(r,D,W),M(D,s,W),M(D,n,W),E(n,l),l.checked=l.__value===a[0].SimplePathTrace.MIS_TYPE,E(n,o),M(D,u,W),M(D,c,W),E(c,h),h.checked=h.__value===a[0].SimplePathTrace.MIS_TYPE,E(c,f),M(D,d,W),M(D,p,W),M(D,g,W),M(D,v,W),M(D,m,W),M(D,x,W),M(D,_,W),ee(B,D,W),M(D,A,W),M(D,C,W),E(C,w),w.checked=w.__value===a[0].SimplePathTrace.USE_POWER_HEURISTIC,E(C,O),M(D,N,W),M(D,P,W),E(P,k),k.checked=k.__value===a[0].SimplePathTrace.USE_POWER_HEURISTIC,E(P,R),z=!0,re||(se=[le(l,"change",a[1]),le(h,"change",a[3]),le(w,"change",a[4]),le(k,"change",a[5])],re=!0)},p(D,[W]){W&1&&(l.checked=l.__value===D[0].SimplePathTrace.MIS_TYPE),W&1&&(h.checked=h.__value===D[0].SimplePathTrace.MIS_TYPE),W&1&&(w.checked=w.__value===D[0].SimplePathTrace.USE_POWER_HEURISTIC),W&1&&(k.checked=k.__value===D[0].SimplePathTrace.USE_POWER_HEURISTIC)},i(D){z||(X(r.$$.fragment,D),X(B.$$.fragment,D),z=!0)},o(D){Y(r.$$.fragment,D),Y(B.$$.fragment,D),z=!1},d(D){D&&(y(e),y(i),y(s),y(n),y(u),y(c),y(d),y(p),y(g),y(v),y(m),y(x),y(_),y(A),y(C),y(N),y(P)),te(r,D),te(B,D),j.r(),$.r(),re=!1,Qe(se)}}}function vm(a,e,t){let i;qe(a,ye,u=>t(0,i=u));const r=[[],[]];function s(){i.SimplePathTrace.MIS_TYPE=this.__value,ye.set(i)}function n(){i.SimplePathTrace.MIS_TYPE=this.__value,ye.set(i)}function l(){i.SimplePathTrace.USE_POWER_HEURISTIC=this.__value,ye.set(i)}function o(){i.SimplePathTrace.USE_POWER_HEURISTIC=this.__value,ye.set(i)}return[i,s,r,n,l,o]}class ym extends Me{constructor(e){super(),Ae(this,e,vm,gm,Re,{})}}function bm(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v,m,x;return v=Ki(a[2][0]),{c(){e=F("label"),t=F("input"),i=ue(`\r
  Uniform random`),r=U(),s=F("label"),n=F("input"),l=ue(`\r
  Halton sequence`),o=U(),u=F("label"),c=F("input"),h=ue(`\r
  Blue Noise`),f=U(),d=F("label"),p=F("input"),g=ue(`\r
  Sequenced R2`),this.h()},l(T){e=L(T,"LABEL",{class:!0});var _=G(e);t=L(_,"INPUT",{type:!0,name:!0,class:!0}),i=ce(_,`\r
  Uniform random`),_.forEach(y),r=V(T),s=L(T,"LABEL",{class:!0});var B=G(s);n=L(B,"INPUT",{type:!0,name:!0,class:!0}),l=ce(B,`\r
  Halton sequence`),B.forEach(y),o=V(T),u=L(T,"LABEL",{class:!0});var A=G(u);c=L(A,"INPUT",{type:!0,name:!0,class:!0}),h=ce(A,`\r
  Blue Noise`),A.forEach(y),f=V(T),d=L(T,"LABEL",{class:!0});var C=G(d);p=L(C,"INPUT",{type:!0,name:!0,class:!0}),g=ce(C,`\r
  Sequenced R2`),C.forEach(y),this.h()},h(){b(t,"type","radio"),b(t,"name","sampler-type"),t.__value=Wt.UNIFORM,Te(t,t.__value),b(t,"class","svelte-12cpmoe"),b(e,"class","svelte-12cpmoe"),b(n,"type","radio"),b(n,"name","sampler-type"),n.__value=Wt.HALTON,Te(n,n.__value),b(n,"class","svelte-12cpmoe"),b(s,"class","svelte-12cpmoe"),b(c,"type","radio"),b(c,"name","sampler-type"),c.__value=Wt.BLUE_NOISE,Te(c,c.__value),b(c,"class","svelte-12cpmoe"),b(u,"class","svelte-12cpmoe"),b(p,"type","radio"),b(p,"name","sampler-type"),p.__value=Wt.CUSTOM_R2,Te(p,p.__value),b(p,"class","svelte-12cpmoe"),b(d,"class","svelte-12cpmoe"),v.p(t,n,c,p)},m(T,_){M(T,e,_),E(e,t),t.checked=t.__value===a[0].SimplePathTrace.SAMPLER_TYPE,E(e,i),M(T,r,_),M(T,s,_),E(s,n),n.checked=n.__value===a[0].SimplePathTrace.SAMPLER_TYPE,E(s,l),M(T,o,_),M(T,u,_),E(u,c),c.checked=c.__value===a[0].SimplePathTrace.SAMPLER_TYPE,E(u,h),M(T,f,_),M(T,d,_),E(d,p),p.checked=p.__value===a[0].SimplePathTrace.SAMPLER_TYPE,E(d,g),m||(x=[le(t,"change",a[1]),le(n,"change",a[3]),le(c,"change",a[4]),le(p,"change",a[5])],m=!0)},p(T,[_]){_&1&&(t.checked=t.__value===T[0].SimplePathTrace.SAMPLER_TYPE),_&1&&(n.checked=n.__value===T[0].SimplePathTrace.SAMPLER_TYPE),_&1&&(c.checked=c.__value===T[0].SimplePathTrace.SAMPLER_TYPE),_&1&&(p.checked=p.__value===T[0].SimplePathTrace.SAMPLER_TYPE)},i:ge,o:ge,d(T){T&&(y(e),y(r),y(s),y(o),y(u),y(f),y(d)),v.r(),m=!1,Qe(x)}}}function xm(a,e,t){let i;qe(a,ye,u=>t(0,i=u));const r=[[]];function s(){i.SimplePathTrace.SAMPLER_TYPE=this.__value,ye.set(i)}function n(){i.SimplePathTrace.SAMPLER_TYPE=this.__value,ye.set(i)}function l(){i.SimplePathTrace.SAMPLER_TYPE=this.__value,ye.set(i)}function o(){i.SimplePathTrace.SAMPLER_TYPE=this.__value,ye.set(i)}return[i,s,r,n,l,o]}let wm=class extends Me{constructor(e){super(),Ae(this,e,xm,bm,Re,{})}};function _m(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p;return f=Ki(a[2][0]),{c(){e=F("label"),t=F("input"),i=ue(`\r
  Uniform random`),r=U(),s=F("label"),n=F("input"),l=ue(`\r
  2 Halton, then uniform`),o=U(),u=F("label"),c=F("input"),h=ue(`\r
  Blue Noise`),this.h()},l(g){e=L(g,"LABEL",{class:!0});var v=G(e);t=L(v,"INPUT",{type:!0,name:!0,class:!0}),i=ce(v,`\r
  Uniform random`),v.forEach(y),r=V(g),s=L(g,"LABEL",{class:!0});var m=G(s);n=L(m,"INPUT",{type:!0,name:!0,class:!0}),l=ce(m,`\r
  2 Halton, then uniform`),m.forEach(y),o=V(g),u=L(g,"LABEL",{class:!0});var x=G(u);c=L(x,"INPUT",{type:!0,name:!0,class:!0}),h=ce(x,`\r
  Blue Noise`),x.forEach(y),this.h()},h(){b(t,"type","radio"),b(t,"name","ReSTIR-sampler-type"),t.__value=Di.UNIFORM,Te(t,t.__value),b(t,"class","svelte-12cpmoe"),b(e,"class","svelte-12cpmoe"),b(n,"type","radio"),b(n,"name","ReSTIR-sampler-type"),n.__value=Di.HALTON_2_THEN_UNIFORM,Te(n,n.__value),b(n,"class","svelte-12cpmoe"),b(s,"class","svelte-12cpmoe"),b(c,"type","radio"),b(c,"name","ReSTIR-sampler-type"),c.__value=Di.BLUE_NOISE,Te(c,c.__value),b(c,"class","svelte-12cpmoe"),b(u,"class","svelte-12cpmoe"),f.p(t,n,c)},m(g,v){M(g,e,v),E(e,t),t.checked=t.__value===a[0].ReSTIR.SAMPLER_TYPE,E(e,i),M(g,r,v),M(g,s,v),E(s,n),n.checked=n.__value===a[0].ReSTIR.SAMPLER_TYPE,E(s,l),M(g,o,v),M(g,u,v),E(u,c),c.checked=c.__value===a[0].ReSTIR.SAMPLER_TYPE,E(u,h),d||(p=[le(t,"change",a[1]),le(n,"change",a[3]),le(c,"change",a[4])],d=!0)},p(g,[v]){v&1&&(t.checked=t.__value===g[0].ReSTIR.SAMPLER_TYPE),v&1&&(n.checked=n.__value===g[0].ReSTIR.SAMPLER_TYPE),v&1&&(c.checked=c.__value===g[0].ReSTIR.SAMPLER_TYPE)},i:ge,o:ge,d(g){g&&(y(e),y(r),y(s),y(o),y(u)),f.r(),d=!1,Qe(p)}}}function Sm(a,e,t){let i;qe(a,ye,o=>t(0,i=o));const r=[[]];function s(){i.ReSTIR.SAMPLER_TYPE=this.__value,ye.set(i)}function n(){i.ReSTIR.SAMPLER_TYPE=this.__value,ye.set(i)}function l(){i.ReSTIR.SAMPLER_TYPE=this.__value,ye.set(i)}return[i,s,r,n,l]}class Tm extends Me{constructor(e){super(),Ae(this,e,Sm,_m,Re,{})}}function Rm(a){let e,t="(Requires shader recompilation)",i,r,s,n,l,o,u,c,h,f,d,p,g,v;return r=new Be({props:{vertical:10}}),p=Ki(a[2][0]),{c(){e=F("p"),e.textContent=t,i=U(),J(r.$$.fragment),s=U(),n=F("label"),l=F("input"),o=ue(`\r
  Pairwise MIS`),u=U(),c=F("label"),h=F("input"),f=ue(`\r
  1/M Biased`),this.h()},l(m){e=L(m,"P",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-e8mzcc"&&(e.textContent=t),i=V(m),Q(r.$$.fragment,m),s=V(m),n=L(m,"LABEL",{class:!0});var x=G(n);l=L(x,"INPUT",{type:!0,name:!0,class:!0}),o=ce(x,`\r
  Pairwise MIS`),x.forEach(y),u=V(m),c=L(m,"LABEL",{class:!0});var T=G(c);h=L(T,"INPUT",{type:!0,name:!0,class:!0}),f=ce(T,`\r
  1/M Biased`),T.forEach(y),this.h()},h(){b(e,"class","svelte-12cpmoe"),b(l,"type","radio"),b(l,"name","sampler-type"),l.__value=Mm,Te(l,l.__value),b(l,"class","svelte-12cpmoe"),b(n,"class","svelte-12cpmoe"),b(h,"type","radio"),b(h,"name","sampler-type"),h.__value=Am,Te(h,h.__value),b(h,"class","svelte-12cpmoe"),b(c,"class","svelte-12cpmoe"),p.p(l,h)},m(m,x){M(m,e,x),M(m,i,x),ee(r,m,x),M(m,s,x),M(m,n,x),E(n,l),l.checked=l.__value===a[0].ReSTIR.GBH_VARIANT,E(n,o),M(m,u,x),M(m,c,x),E(c,h),h.checked=h.__value===a[0].ReSTIR.GBH_VARIANT,E(c,f),d=!0,g||(v=[le(l,"change",a[1]),le(h,"change",a[3])],g=!0)},p(m,[x]){x&1&&(l.checked=l.__value===m[0].ReSTIR.GBH_VARIANT),x&1&&(h.checked=h.__value===m[0].ReSTIR.GBH_VARIANT)},i(m){d||(X(r.$$.fragment,m),d=!0)},o(m){Y(r.$$.fragment,m),d=!1},d(m){m&&(y(e),y(i),y(s),y(n),y(u),y(c)),te(r,m),p.r(),g=!1,Qe(v)}}}let Mm="Pairwise MIS",Am="1/M Biased";function Cm(a,e,t){let i;qe(a,ye,l=>t(0,i=l));const r=[[]];function s(){i.ReSTIR.GBH_VARIANT=this.__value,ye.set(i)}function n(){i.ReSTIR.GBH_VARIANT=this.__value,ye.set(i)}return[i,s,r,n]}class Em extends Me{constructor(e){super(),Ae(this,e,Cm,Rm,Re,{})}}function Sl(a){let e,t,i,r,s,n;return e=new ut({props:{name:"Sampler",roundBox:!0,withBorder:!0,$$slots:{default:[Im]},$$scope:{ctx:a}}}),i=new ut({props:{name:"Pixel decorrelation",roundBox:!0,withBorder:!0,$$slots:{default:[Pm]},$$scope:{ctx:a}}}),s=new ut({props:{name:"Mis Options",roundBox:!0,withBorder:!0,$$slots:{default:[Bm]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment),t=U(),J(i.$$.fragment),r=U(),J(s.$$.fragment)},l(l){Q(e.$$.fragment,l),t=V(l),Q(i.$$.fragment,l),r=V(l),Q(s.$$.fragment,l)},m(l,o){ee(e,l,o),M(l,t,o),ee(i,l,o),M(l,r,o),ee(s,l,o),n=!0},i(l){n||(X(e.$$.fragment,l),X(i.$$.fragment,l),X(s.$$.fragment,l),n=!0)},o(l){Y(e.$$.fragment,l),Y(i.$$.fragment,l),Y(s.$$.fragment,l),n=!1},d(l){l&&(y(t),y(r)),te(e,l),te(i,l),te(s,l)}}}function Im(a){let e,t;return e=new wm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Pm(a){let e,t;return e=new mm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Bm(a){let e,t;return e=new ym({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Tl(a){let e,t,i,r,s,n;return e=new ut({props:{name:"ReSTIR PT Params",$$slots:{default:[Dm]},$$scope:{ctx:a}}}),i=new ut({props:{name:"Spatial-reuse sampler",$$slots:{default:[Nm]},$$scope:{ctx:a}}}),s=new ut({props:{name:"Generalized Balance Heuristic",$$slots:{default:[zm]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment),t=U(),J(i.$$.fragment),r=U(),J(s.$$.fragment)},l(l){Q(e.$$.fragment,l),t=V(l),Q(i.$$.fragment,l),r=V(l),Q(s.$$.fragment,l)},m(l,o){ee(e,l,o),M(l,t,o),ee(i,l,o),M(l,r,o),ee(s,l,o),n=!0},i(l){n||(X(e.$$.fragment,l),X(i.$$.fragment,l),X(s.$$.fragment,l),n=!0)},o(l){Y(e.$$.fragment,l),Y(i.$$.fragment,l),Y(s.$$.fragment,l),n=!1},d(l){l&&(y(t),y(r)),te(e,l),te(i,l),te(s,l)}}}function Dm(a){let e,t;return e=new um({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Nm(a){let e,t;return e=new Tm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function zm(a){let e,t;return e=new Em({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Fm(a){let e,t="Integrator Type:",i,r,s,n,l,o,u,c,h,f,d,p,g,v,m="Integrator Options:",x,T,_,B,A,C,w,O,N;r=new Jt({}),p=new Be({props:{vertical:30}}),T=new Jt({});let P=a[0].integrator=="Simple-path-trace"&&Sl(a),k=a[0].integrator=="ReSTIR"&&Tl(a);return w=Ki(a[2][0]),{c(){e=F("p"),e.textContent=t,i=U(),J(r.$$.fragment),s=U(),n=F("label"),l=F("input"),o=ue(`\r
  Simple path trace`),u=U(),c=F("label"),h=F("input"),f=ue(`\r
  ReSTIR PT`),d=U(),J(p.$$.fragment),g=U(),v=F("p"),v.textContent=m,x=U(),J(T.$$.fragment),_=U(),P&&P.c(),B=U(),k&&k.c(),A=Ne(),this.h()},l(R){e=L(R,"P",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-1hez83p"&&(e.textContent=t),i=V(R),Q(r.$$.fragment,R),s=V(R),n=L(R,"LABEL",{class:!0});var z=G(n);l=L(z,"INPUT",{type:!0,name:!0,class:!0}),o=ce(z,`\r
  Simple path trace`),z.forEach(y),u=V(R),c=L(R,"LABEL",{class:!0});var j=G(c);h=L(j,"INPUT",{type:!0,name:!0,class:!0}),f=ce(j,`\r
  ReSTIR PT`),j.forEach(y),d=V(R),Q(p.$$.fragment,R),g=V(R),v=L(R,"P",{class:!0,"data-svelte-h":!0}),Pe(v)!=="svelte-2xav2n"&&(v.textContent=m),x=V(R),Q(T.$$.fragment,R),_=V(R),P&&P.l(R),B=V(R),k&&k.l(R),A=Ne(),this.h()},h(){b(e,"class","svelte-12cpmoe"),b(l,"type","radio"),b(l,"name","integrator"),l.__value="Simple-path-trace",Te(l,l.__value),b(l,"class","svelte-12cpmoe"),b(n,"class","svelte-12cpmoe"),b(h,"type","radio"),b(h,"name","integrator"),h.__value="ReSTIR",Te(h,h.__value),b(h,"class","svelte-12cpmoe"),b(c,"class","svelte-12cpmoe"),b(v,"class","svelte-12cpmoe"),w.p(l,h)},m(R,z){M(R,e,z),M(R,i,z),ee(r,R,z),M(R,s,z),M(R,n,z),E(n,l),l.checked=l.__value===a[0].integrator,E(n,o),M(R,u,z),M(R,c,z),E(c,h),h.checked=h.__value===a[0].integrator,E(c,f),M(R,d,z),ee(p,R,z),M(R,g,z),M(R,v,z),M(R,x,z),ee(T,R,z),M(R,_,z),P&&P.m(R,z),M(R,B,z),k&&k.m(R,z),M(R,A,z),C=!0,O||(N=[le(l,"change",a[1]),le(h,"change",a[3])],O=!0)},p(R,[z]){z&1&&(l.checked=l.__value===R[0].integrator),z&1&&(h.checked=h.__value===R[0].integrator),R[0].integrator=="Simple-path-trace"?P?z&1&&X(P,1):(P=Sl(R),P.c(),X(P,1),P.m(B.parentNode,B)):P&&(di(),Y(P,1,1,()=>{P=null}),pi()),R[0].integrator=="ReSTIR"?k?z&1&&X(k,1):(k=Tl(R),k.c(),X(k,1),k.m(A.parentNode,A)):k&&(di(),Y(k,1,1,()=>{k=null}),pi())},i(R){C||(X(r.$$.fragment,R),X(p.$$.fragment,R),X(T.$$.fragment,R),X(P),X(k),C=!0)},o(R){Y(r.$$.fragment,R),Y(p.$$.fragment,R),Y(T.$$.fragment,R),Y(P),Y(k),C=!1},d(R){R&&(y(e),y(i),y(s),y(n),y(u),y(c),y(d),y(g),y(v),y(x),y(_),y(B),y(A)),te(r,R),te(p,R),te(T,R),P&&P.d(R),k&&k.d(R),w.r(),O=!1,Qe(N)}}}function Lm(a,e,t){let i;qe(a,ye,l=>t(0,i=l));const r=[[]];function s(){i.integrator=this.__value,ye.set(i)}function n(){i.integrator=this.__value,ye.set(i)}return[i,s,r,n]}class km extends Me{constructor(e){super(),Ae(this,e,Lm,Fm,Re,{})}}function Om(a){let e,t="restart",i,r,s="stop",n,l;return{c(){e=F("button"),e.textContent=t,i=U(),r=F("button"),r.textContent=s,this.h()},l(o){e=L(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-5dldn0"&&(e.textContent=t),i=V(o),r=L(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(r)!=="svelte-1gwj45s"&&(r.textContent=s),this.h()},h(){b(e,"class","svelte-abnc1m"),b(r,"class","svelte-abnc1m")},m(o,u){M(o,e,u),M(o,i,u),M(o,r,u),n||(l=[le(e,"click",a[0]),le(r,"click",a[1])],n=!0)},p:ge,i:ge,o:ge,d(o){o&&(y(e),y(i),y(r)),n=!1,Qe(l)}}}function Um(a,e,t){let i;qe(a,$e,l=>t(3,i=l));let{renderer:r}=e;function s(){r.restart()}function n(){$e.setLimit(i.count)}return a.$$set=l=>{"renderer"in l&&t(2,r=l.renderer)},[s,n,r]}class Vm extends Me{constructor(e){super(),Ae(this,e,Um,Om,Re,{renderer:2})}}function $m(a){let e,t,i="Light bounces:",r,s,n,l,o,u,c,h,f;function d(m){a[2](m)}let p={min:1,max:20,pips:!0,float:!0,pipstep:1,springValues:{stiffness:1,damping:1}};a[0]!==void 0&&(p.values=a[0]),s=new fi({props:p}),Ke.push(()=>ft(s,"values",d)),o=new Be({props:{vertical:10}});function g(m){a[3](m)}let v={label:"Force max tile size:"};return a[1].forceMaxTileSize!==void 0&&(v.checked=a[1].forceMaxTileSize),c=new cn({props:v}),Ke.push(()=>ft(c,"checked",g)),{c(){e=F("div"),t=F("label"),t.textContent=i,r=U(),J(s.$$.fragment),l=U(),J(o.$$.fragment),u=U(),J(c.$$.fragment),this.h()},l(m){e=L(m,"DIV",{class:!0});var x=G(e);t=L(x,"LABEL",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-1ugqakj"&&(t.textContent=i),r=V(x),Q(s.$$.fragment,x),x.forEach(y),l=V(m),Q(o.$$.fragment,m),u=V(m),Q(c.$$.fragment,m),this.h()},h(){b(t,"class","svelte-1ys9cqv"),b(e,"class","flex-row svelte-1ys9cqv")},m(m,x){M(m,e,x),E(e,t),E(e,r),ee(s,e,null),M(m,l,x),ee(o,m,x),M(m,u,x),ee(c,m,x),f=!0},p(m,[x]){const T={};!n&&x&1&&(n=!0,T.values=m[0],ht(()=>n=!1)),s.$set(T);const _={};!h&&x&2&&(h=!0,_.checked=m[1].forceMaxTileSize,ht(()=>h=!1)),c.$set(_)},i(m){f||(X(s.$$.fragment,m),X(o.$$.fragment,m),X(c.$$.fragment,m),f=!0)},o(m){Y(s.$$.fragment,m),Y(o.$$.fragment,m),Y(c.$$.fragment,m),f=!1},d(m){m&&(y(e),y(l),y(u)),te(s),te(o,m),te(c,m)}}}function Gm(a,e,t){let i;qe(a,ye,l=>t(1,i=l));let r=[i.BOUNCES_COUNT];function s(l){r=l,t(0,r)}function n(l){a.$$.not_equal(i.forceMaxTileSize,l)&&(i.forceMaxTileSize=l,ye.set(i))}return a.$$.update=()=>{a.$$.dirty&1&&gt(ye,i.BOUNCES_COUNT=r[0],i)},[r,i,s,n]}class Hm extends Me{constructor(e){super(),Ae(this,e,Gm,$m,Re,{})}}function qm(a){let e,t,i,r,s,n,l="+",o,u,c="∞",h,f,d="1",p,g;return{c(){e=F("span"),t=ue("Sample Limit: "),i=F("input"),s=U(),n=F("button"),n.textContent=l,o=U(),u=F("button"),u.textContent=c,h=U(),f=F("button"),f.textContent=d,this.h()},l(v){e=L(v,"SPAN",{});var m=G(e);t=ce(m,"Sample Limit: "),i=L(m,"INPUT",{class:!0,type:!0}),m.forEach(y),s=V(v),n=L(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(n)!=="svelte-okw43g"&&(n.textContent=l),o=V(v),u=L(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(u)!=="svelte-11gvuxs"&&(u.textContent=c),h=V(v),f=L(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Pe(f)!=="svelte-14bsa7c"&&(f.textContent=d),this.h()},h(){b(i,"class","samples-limit-input svelte-o9rhx8"),b(i,"type","text"),i.value=r=a[0].limit,b(n,"class","sample-limit-btn svelte-o9rhx8"),b(u,"class","sample-limit-btn svelte-o9rhx8"),b(f,"class","sample-limit-btn svelte-o9rhx8")},m(v,m){M(v,e,m),E(e,t),E(e,i),M(v,s,m),M(v,n,m),M(v,o,m),M(v,u,m),M(v,h,m),M(v,f,m),p||(g=[le(i,"change",a[1]),le(n,"click",a[2]),le(u,"click",a[3]),le(f,"click",a[4])],p=!0)},p(v,[m]){m&1&&r!==(r=v[0].limit)&&i.value!==r&&(i.value=r)},i:ge,o:ge,d(v){v&&(y(e),y(s),y(n),y(o),y(u),y(h),y(f)),p=!1,Qe(g)}}}function jm(a,e,t){let i;qe(a,$e,o=>t(0,i=o));function r(o){const u=parseInt(o.target.value);isNaN(u)||$e.setLimit(u)}function s(){$e.setLimit(i.limit+1)}function n(){$e.setLimit(999999)}function l(){$e.setLimit(1),$e.reset()}return[i,r,s,n,l]}class Wm extends Me{constructor(e){super(),Ae(this,e,jm,qm,Re,{})}}function Xm(a){let e,t,i,r,s,n,l,o;return{c(){e=F("div"),t=F("p"),i=ue(a[0]),r=U(),s=F("img"),this.h()},l(u){e=L(u,"DIV",{class:!0});var c=G(e);t=L(c,"P",{class:!0});var h=G(t);i=ce(h,a[0]),h.forEach(y),r=V(c),s=L(c,"IMG",{src:!0,class:!0}),c.forEach(y),this.h()},h(){b(t,"class","svelte-5f3xw4"),Ma(s.src,n=a[1])||b(s,"src",n),b(s,"class","svelte-5f3xw4"),b(e,"class","container svelte-5f3xw4"),ne(e,"selected",a[2])},m(u,c){M(u,e,c),E(e,t),E(t,i),E(e,r),E(e,s),l||(o=le(s,"click",a[3]),l=!0)},p(u,[c]){c&1&&Oe(i,u[0]),c&2&&!Ma(s.src,n=u[1])&&b(s,"src",n),c&4&&ne(e,"selected",u[2])},i:ge,o:ge,d(u){u&&y(e),l=!1,o()}}}function Ym(a,e,t){let{name:i}=e,{thumbnailUrl:r}=e,{selected:s}=e;function n(l){Fu.call(this,a,l)}return a.$$set=l=>{"name"in l&&t(0,i=l.name),"thumbnailUrl"in l&&t(1,r=l.thumbnailUrl),"selected"in l&&t(2,s=l.selected)},[i,r,s,n]}class Zm extends Me{constructor(e){super(),Ae(this,e,Ym,Xm,Re,{name:0,thumbnailUrl:1,selected:2})}}function Rl(a,e,t){const i=a.slice();return i[4]=e[t],i}function Ml(a){let e,t;function i(){return a[3](a[4])}return e=new Zm({props:{name:a[4].name,thumbnailUrl:a[4].thumbnail,selected:a[0]==a[4].name}}),e.$on("click",i),{c(){J(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,s){ee(e,r,s),t=!0},p(r,s){a=r;const n={};s&1&&(n.selected=a[0]==a[4].name),e.$set(n)},i(r){t||(X(e.$$.fragment,r),t=!0)},o(r){Y(e.$$.fragment,r),t=!1},d(r){te(e,r)}}}function Km(a){let e,t,i="Scene selector",r,s,n,l,o,u;s=new Jt({}),l=new Be({props:{vertical:35}});let c=Zt(a[1]),h=[];for(let d=0;d<c.length;d+=1)h[d]=Ml(Rl(a,c,d));const f=d=>Y(h[d],1,1,()=>{h[d]=null});return{c(){e=F("div"),t=F("header"),t.textContent=i,r=U(),J(s.$$.fragment),n=U(),J(l.$$.fragment),o=U();for(let d=0;d<h.length;d+=1)h[d].c();this.h()},l(d){e=L(d,"DIV",{class:!0});var p=G(e);t=L(p,"HEADER",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-elgrw1"&&(t.textContent=i),r=V(p),Q(s.$$.fragment,p),n=V(p),Q(l.$$.fragment,p),o=V(p);for(let g=0;g<h.length;g+=1)h[g].l(p);p.forEach(y),this.h()},h(){b(t,"class","svelte-mybjw1"),b(e,"class","container svelte-mybjw1")},m(d,p){M(d,e,p),E(e,t),E(e,r),ee(s,e,null),E(e,n),ee(l,e,null),E(e,o);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(e,null);u=!0},p(d,[p]){if(p&7){c=Zt(d[1]);let g;for(g=0;g<c.length;g+=1){const v=Rl(d,c,g);h[g]?(h[g].p(v,p),X(h[g],1)):(h[g]=Ml(v),h[g].c(),X(h[g],1),h[g].m(e,null))}for(di(),g=c.length;g<h.length;g+=1)f(g);pi()}},i(d){if(!u){X(s.$$.fragment,d),X(l.$$.fragment,d);for(let p=0;p<c.length;p+=1)X(h[p]);u=!0}},o(d){Y(s.$$.fragment,d),Y(l.$$.fragment,d),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)Y(h[p]);u=!1},d(d){d&&y(e),te(s),te(l),ds(h,d)}}}function Jm(a,e,t){let i;qe(a,os,l=>t(0,i=l));const r=[{name:"C2 features",thumbnail:he.assetsPath+"thumbnails/c2-renderer.jpg"},{name:"ReSTIR stress test",thumbnail:he.assetsPath+"thumbnails/restir-stress-test.jpg"},{name:"Cornell sphere",thumbnail:he.assetsPath+"thumbnails/cornell-sphere.png"},{name:"Envmap + multiscatter dielectric",thumbnail:he.assetsPath+"thumbnails/envmap-dielectric.png"}];function s(l){os.set(l)}return[i,r,s,l=>s(l.name)]}class Qm extends Me{constructor(e){super(),Ae(this,e,Jm,Km,Re,{})}}function e0(a){let e,t,i,r,s,n,l,o,u,c,h,f;return e=new Be({props:{vertical:2}}),r=new Ap({}),n=new Be({props:{vertical:2}}),u=new Ep({}),{c(){J(e.$$.fragment),t=U(),i=F("button"),J(r.$$.fragment),s=U(),J(n.$$.fragment),l=U(),o=F("button"),J(u.$$.fragment),this.h()},l(d){Q(e.$$.fragment,d),t=V(d),i=L(d,"BUTTON",{});var p=G(i);Q(r.$$.fragment,p),p.forEach(y),s=V(d),Q(n.$$.fragment,d),l=V(d),o=L(d,"BUTTON",{});var g=G(o);Q(u.$$.fragment,g),g.forEach(y),this.h()},h(){ne(i,"active",a[5]==="settings"),ne(o,"active",a[5]==="scene")},m(d,p){ee(e,d,p),M(d,t,p),M(d,i,p),ee(r,i,null),M(d,s,p),ee(n,d,p),M(d,l,p),M(d,o,p),ee(u,o,null),c=!0,h||(f=[le(i,"click",a[7]),le(o,"click",a[8])],h=!0)},p(d,p){(!c||p&32)&&ne(i,"active",d[5]==="settings"),(!c||p&32)&&ne(o,"active",d[5]==="scene")},i(d){c||(X(e.$$.fragment,d),X(r.$$.fragment,d),X(n.$$.fragment,d),X(u.$$.fragment,d),c=!0)},o(d){Y(e.$$.fragment,d),Y(r.$$.fragment,d),Y(n.$$.fragment,d),Y(u.$$.fragment,d),c=!1},d(d){d&&(y(t),y(i),y(s),y(l),y(o)),te(e,d),te(r),te(n,d),te(u),h=!1,Qe(f)}}}function t0(a){let e,t,i,r;function s(o){a[9](o)}function n(o){a[10](o)}let l={canvasContainerEl:a[2]};return a[0]!==void 0&&(l.width=a[0]),a[1]!==void 0&&(l.height=a[1]),e=new Kp({props:l}),Ke.push(()=>ft(e,"width",s)),Ke.push(()=>ft(e,"height",n)),{c(){J(e.$$.fragment)},l(o){Q(e.$$.fragment,o)},m(o,u){ee(e,o,u),r=!0},p(o,u){const c={};u&4&&(c.canvasContainerEl=o[2]),!t&&u&1&&(t=!0,c.width=o[0],ht(()=>t=!1)),!i&&u&2&&(i=!0,c.height=o[1],ht(()=>i=!1)),e.$set(c)},i(o){r||(X(e.$$.fragment,o),r=!0)},o(o){Y(e.$$.fragment,o),r=!1},d(o){te(e,o)}}}function i0(a){let e,t;return e=new am({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function r0(a){let e,t;return e=new Wm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function s0(a){let e,t;return e=new Vm({props:{renderer:a[4]}}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},p(i,r){const s={};r&16&&(s.renderer=i[4]),e.$set(s)},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function n0(a){let e,t;return e=new Xp({props:{canvasRef:a[3],renderer:a[4]}}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},p(i,r){const s={};r&8&&(s.canvasRef=i[3]),r&16&&(s.renderer=i[4]),e.$set(s)},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function a0(a){let e,t;return e=new rm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function o0(a){let e,t;return e=new km({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function l0(a){let e,t;return e=new Hm({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function u0(a){let e,t;return e=new Bp({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function c0(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v,m,x,T,_,B,A,C,w,O,N;return t=new Iu({props:{side:"right",$$slots:{default:[e0]},$$scope:{ctx:a}}}),n=new ut({props:{name:"Canvas",$$slots:{default:[t0]},$$scope:{ctx:a}}}),o=new ut({props:{name:"Info",$$slots:{default:[i0]},$$scope:{ctx:a}}}),c=new ut({props:{name:"Sampling",roundBox:!0,$$slots:{default:[r0]},$$scope:{ctx:a}}}),f=new ut({props:{name:"Operate",roundBox:!0,$$slots:{default:[s0]},$$scope:{ctx:a}}}),p=new ut({props:{name:"Camera",$$slots:{default:[n0]},$$scope:{ctx:a}}}),v=new ut({props:{name:"Envmap",disabled:!a[6].shaderConfig.HAS_ENVMAP,$$slots:{default:[a0]},$$scope:{ctx:a}}}),x=new ut({props:{name:"Integrator",$$slots:{default:[o0]},$$scope:{ctx:a}}}),_=new ut({props:{name:"Performance",expanded:!1,$$slots:{default:[l0]},$$scope:{ctx:a}}}),A=new ut({props:{name:"Adapter Info",expanded:!1,$$slots:{default:[u0]},$$scope:{ctx:a}}}),O=new Qm({}),{c(){e=F("div"),J(t.$$.fragment),i=U(),r=F("div"),s=F("div"),J(n.$$.fragment),l=U(),J(o.$$.fragment),u=U(),J(c.$$.fragment),h=U(),J(f.$$.fragment),d=U(),J(p.$$.fragment),g=U(),J(v.$$.fragment),m=U(),J(x.$$.fragment),T=U(),J(_.$$.fragment),B=U(),J(A.$$.fragment),C=U(),w=F("div"),J(O.$$.fragment),this.h()},l(P){e=L(P,"DIV",{class:!0});var k=G(e);Q(t.$$.fragment,k),i=V(k),r=L(k,"DIV",{class:!0});var R=G(r);s=L(R,"DIV",{});var z=G(s);Q(n.$$.fragment,z),l=V(z),Q(o.$$.fragment,z),u=V(z),Q(c.$$.fragment,z),h=V(z),Q(f.$$.fragment,z),d=V(z),Q(p.$$.fragment,z),g=V(z),Q(v.$$.fragment,z),m=V(z),Q(x.$$.fragment,z),T=V(z),Q(_.$$.fragment,z),B=V(z),Q(A.$$.fragment,z),z.forEach(y),C=V(R),w=L(R,"DIV",{});var j=G(w);Q(O.$$.fragment,j),j.forEach(y),R.forEach(y),k.forEach(y),this.h()},h(){bs(s,"display",a[5]=="settings"?"block":"none"),bs(w,"display",a[5]=="scene"?"block":"none"),b(r,"class","menu-settings svelte-7qhyyh"),b(e,"class","container svelte-7qhyyh")},m(P,k){M(P,e,k),ee(t,e,null),E(e,i),E(e,r),E(r,s),ee(n,s,null),E(s,l),ee(o,s,null),E(s,u),ee(c,s,null),E(s,h),ee(f,s,null),E(s,d),ee(p,s,null),E(s,g),ee(v,s,null),E(s,m),ee(x,s,null),E(s,T),ee(_,s,null),E(s,B),ee(A,s,null),E(r,C),E(r,w),ee(O,w,null),N=!0},p(P,[k]){const R={};k&2080&&(R.$$scope={dirty:k,ctx:P}),t.$set(R);const z={};k&2055&&(z.$$scope={dirty:k,ctx:P}),n.$set(z);const j={};k&2048&&(j.$$scope={dirty:k,ctx:P}),o.$set(j);const $={};k&2048&&($.$$scope={dirty:k,ctx:P}),c.$set($);const re={};k&2064&&(re.$$scope={dirty:k,ctx:P}),f.$set(re);const se={};k&2072&&(se.$$scope={dirty:k,ctx:P}),p.$set(se);const D={};k&64&&(D.disabled=!P[6].shaderConfig.HAS_ENVMAP),k&2048&&(D.$$scope={dirty:k,ctx:P}),v.$set(D);const W={};k&2048&&(W.$$scope={dirty:k,ctx:P}),x.$set(W);const de={};k&2048&&(de.$$scope={dirty:k,ctx:P}),_.$set(de);const ae={};k&2048&&(ae.$$scope={dirty:k,ctx:P}),A.$set(ae),k&32&&bs(s,"display",P[5]=="settings"?"block":"none"),k&32&&bs(w,"display",P[5]=="scene"?"block":"none")},i(P){N||(X(t.$$.fragment,P),X(n.$$.fragment,P),X(o.$$.fragment,P),X(c.$$.fragment,P),X(f.$$.fragment,P),X(p.$$.fragment,P),X(v.$$.fragment,P),X(x.$$.fragment,P),X(_.$$.fragment,P),X(A.$$.fragment,P),X(O.$$.fragment,P),N=!0)},o(P){Y(t.$$.fragment,P),Y(n.$$.fragment,P),Y(o.$$.fragment,P),Y(c.$$.fragment,P),Y(f.$$.fragment,P),Y(p.$$.fragment,P),Y(v.$$.fragment,P),Y(x.$$.fragment,P),Y(_.$$.fragment,P),Y(A.$$.fragment,P),Y(O.$$.fragment,P),N=!1},d(P){P&&y(e),te(t),te(n),te(o),te(c),te(f),te(p),te(v),te(x),te(_),te(A),te(O)}}}function h0(a,e,t){let i;qe(a,ye,p=>t(6,i=p));let{canvasContainerEl:r}=e,{canvasWidth:s}=e,{canvasHeight:n}=e,{canvasRef:l}=e,{renderer:o}=e,u="settings";const c=()=>t(5,u="settings"),h=()=>t(5,u="scene");function f(p){s=p,t(0,s)}function d(p){n=p,t(1,n)}return a.$$set=p=>{"canvasContainerEl"in p&&t(2,r=p.canvasContainerEl),"canvasWidth"in p&&t(0,s=p.canvasWidth),"canvasHeight"in p&&t(1,n=p.canvasHeight),"canvasRef"in p&&t(3,l=p.canvasRef),"renderer"in p&&t(4,o=p.renderer)},[s,n,r,l,o,u,i,c,h,f,d]}class f0 extends Me{constructor(e){super(),Ae(this,e,h0,c0,Re,{canvasContainerEl:2,canvasWidth:0,canvasHeight:1,canvasRef:3,renderer:4})}}function Al(a){let e,t,i,r,s,n;return r=new Sp({}),{c(){e=F("div"),t=F("p"),i=F("span"),J(r.$$.fragment),s=ue(a[5]),this.h()},l(l){e=L(l,"DIV",{class:!0});var o=G(e);t=L(o,"P",{});var u=G(t);i=L(u,"SPAN",{class:!0});var c=G(i);Q(r.$$.fragment,c),c.forEach(y),s=ce(u,a[5]),u.forEach(y),o.forEach(y),this.h()},h(){b(i,"class","csm-icon-container svelte-uh2ipm"),b(e,"class","csm-dialog svelte-uh2ipm")},m(l,o){M(l,e,o),E(e,t),E(t,i),ee(r,i,null),E(t,s),n=!0},p(l,o){(!n||o&32)&&Oe(s,l[5])},i(l){n||(X(r.$$.fragment,l),n=!0)},o(l){Y(r.$$.fragment,l),n=!1},d(l){l&&y(e),te(r)}}}function Cl(a){let e,t,i;return{c(){e=F("div"),t=F("p"),i=ue(a[6]),this.h()},l(r){e=L(r,"DIV",{class:!0});var s=G(e);t=L(s,"P",{class:!0});var n=G(t);i=ce(n,a[6]),n.forEach(y),s.forEach(y),this.h()},h(){b(t,"class","csm csm-error svelte-uh2ipm"),b(e,"class","csm-dialog svelte-uh2ipm")},m(r,s){M(r,e,s),E(e,t),E(t,i)},p(r,s){s&64&&Oe(i,r[6])},d(r){r&&y(e)}}}function d0(a){let e,t,i,r,s,n,l,o,u,c,h,f,d,p,g,v;t=new wp({});let m=a[5]&&Al(a),x=a[6]&&Cl(a);function T(A){a[10](A)}function _(A){a[11](A)}let B={renderer:a[4],canvasContainerEl:a[3],canvasRef:a[0]};return a[1]!==void 0&&(B.canvasWidth=a[1]),a[2]!==void 0&&(B.canvasHeight=a[2]),h=new f0({props:B}),Ke.push(()=>ft(h,"canvasWidth",T)),Ke.push(()=>ft(h,"canvasHeight",_)),{c(){e=F("main"),J(t.$$.fragment),i=U(),r=F("div"),s=F("canvas"),o=U(),m&&m.c(),u=U(),x&&x.c(),c=U(),J(h.$$.fragment),this.h()},l(A){e=L(A,"MAIN",{class:!0});var C=G(e);Q(t.$$.fragment,C),i=V(C),r=L(C,"DIV",{class:!0});var w=G(r);s=L(w,"CANVAS",{width:!0,height:!0,class:!0}),G(s).forEach(y),o=V(w),m&&m.l(w),u=V(w),x&&x.l(w),w.forEach(y),c=V(C),Q(h.$$.fragment,C),C.forEach(y),this.h()},h(){b(s,"width",n=a[1]||1),b(s,"height",l=a[2]||1),b(s,"class","svelte-uh2ipm"),b(r,"class","canvas-container svelte-uh2ipm"),b(e,"class","svelte-uh2ipm")},m(A,C){M(A,e,C),ee(t,e,null),E(e,i),E(e,r),E(r,s),a[8](s),E(r,o),m&&m.m(r,null),E(r,u),x&&x.m(r,null),a[9](r),E(e,c),ee(h,e,null),p=!0,g||(v=le(s,"click",a[7]),g=!0)},p(A,[C]){(!p||C&2&&n!==(n=A[1]||1))&&b(s,"width",n),(!p||C&4&&l!==(l=A[2]||1))&&b(s,"height",l),A[5]?m?(m.p(A,C),C&32&&X(m,1)):(m=Al(A),m.c(),X(m,1),m.m(r,u)):m&&(di(),Y(m,1,1,()=>{m=null}),pi()),A[6]?x?x.p(A,C):(x=Cl(A),x.c(),x.m(r,null)):x&&(x.d(1),x=null);const w={};C&16&&(w.renderer=A[4]),C&8&&(w.canvasContainerEl=A[3]),C&1&&(w.canvasRef=A[0]),!f&&C&2&&(f=!0,w.canvasWidth=A[1],ht(()=>f=!1)),!d&&C&4&&(d=!0,w.canvasHeight=A[2],ht(()=>d=!1)),h.$set(w)},i(A){p||(X(t.$$.fragment,A),X(m),X(h.$$.fragment,A),p=!0)},o(A){Y(t.$$.fragment,A),Y(m),Y(h.$$.fragment,A),p=!1},d(A){A&&y(e),te(t),a[8](null),m&&m.d(),x&&x.d(),a[9](null),te(h),g=!1,v()}}}function p0(a,e,t){let i,r,s;qe(a,$e,v=>t(12,i=v)),qe(a,Ni,v=>t(5,r=v)),qe(a,da,v=>t(6,s=v));let n,l,o,u,c;Dl(async()=>{try{t(4,c=await Qd(n))}catch(v){console.error(v)}});function h(v){gt($e,i.clickTarget=`(${v.offsetX}, ${o-v.offsetY})`,i)}function f(v){Ke[v?"unshift":"push"](()=>{n=v,t(0,n)})}function d(v){Ke[v?"unshift":"push"](()=>{u=v,t(3,u)})}function p(v){l=v,t(1,l)}function g(v){o=v,t(2,o)}return[n,l,o,u,c,r,s,h,f,d,p,g]}class m0 extends Me{constructor(e){super(),Ae(this,e,p0,d0,Re,{})}}function g0(a){let e,t;return e=new m0({}),{c(){J(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,r){ee(e,i,r),t=!0},p:ge,i(i){t||(X(e.$$.fragment,i),t=!0)},o(i){Y(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}class M0 extends Me{constructor(e){super(),Ae(this,e,null,g0,Re,{})}}export{M0 as component};
