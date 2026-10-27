(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="160",Yo=0,Rs=1,Ko=2,oo=1,$o=2,tn=3,sn=0,be=1,se=2,gn=0,si=1,Cs=2,Ps=3,Ls=4,Zo=5,wn=100,Jo=101,Qo=102,Ds=103,Us=104,tl=200,el=201,nl=202,il=203,Qa=204,ts=205,al=206,sl=207,rl=208,ol=209,ll=210,cl=211,ul=212,hl=213,dl=214,fl=0,pl=1,ml=2,ia=3,gl=4,_l=5,vl=6,xl=7,lo=0,Ml=1,Sl=2,an=0,yl=1,El=2,Tl=3,bl=4,Al=5,wl=6,co=300,oi=301,li=302,es=303,ns=304,ca=306,dn=1e3,He=1001,is=1002,Te=1003,Is=1004,xa=1005,Re=1006,Rl=1007,yi=1008,_n=1009,Cl=1010,Pl=1011,ds=1012,uo=1013,fn=1014,pn=1015,Ei=1016,ho=1017,fo=1018,Pn=1020,Ll=1021,Ve=1023,Dl=1024,Ul=1025,Ln=1026,ci=1027,Il=1028,po=1029,Nl=1030,mo=1031,go=1033,Ma=33776,Sa=33777,ya=33778,Ea=33779,Ns=35840,Fs=35841,ks=35842,Os=35843,_o=36196,Bs=37492,zs=37496,Gs=37808,Hs=37809,Vs=37810,Ws=37811,Xs=37812,js=37813,qs=37814,Ys=37815,Ks=37816,$s=37817,Zs=37818,Js=37819,Qs=37820,tr=37821,Ta=36492,er=36494,nr=36495,Fl=36283,ir=36284,ar=36285,sr=36286,vo=3e3,Dn=3001,kl=3200,Ol=3201,xo=0,Bl=1,Oe="",re="srgb",rn="srgb-linear",fs="display-p3",ua="display-p3-linear",aa="linear",$t="srgb",sa="rec709",ra="p3",Fn=7680,rr=519,zl=512,Gl=513,Hl=514,Mo=515,Vl=516,Wl=517,Xl=518,jl=519,as=35044,or="300 es",ss=1035,nn=2e3,oa=2001;class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(e);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,rs=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function ql(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function lr(i){return(i&i-1)===0&&i!==0}function os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*a+t.x,this.y=s*a+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,a,s,o,r,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,s,o,r,l,c)}set(t,e,n,a,s,o,r,l,c){const u=this.elements;return u[0]=t,u[1]=a,u[2]=r,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=a[0],p=a[3],h=a[6],y=a[1],x=a[4],b=a[7],P=a[2],A=a[5],w=a[8];return s[0]=o*_+r*y+l*P,s[3]=o*p+r*x+l*A,s[6]=o*h+r*b+l*w,s[1]=c*_+u*y+d*P,s[4]=c*p+u*x+d*A,s[7]=c*h+u*b+d*w,s[2]=f*_+m*y+g*P,s[5]=f*p+m*x+g*A,s[8]=f*h+m*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*r*c-n*s*u+n*r*l+a*s*c-a*o*l}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],u=t[8],d=u*o-r*c,f=r*l-u*s,m=c*s-o*l,g=e*d+n*f+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(a*c-u*n)*_,t[2]=(r*n-a*o)*_,t[3]=f*_,t[4]=(u*e-a*l)*_,t[5]=(a*s-r*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+t,-a*c,a*l,-a*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ot;function So(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yl(){const i=Ti("canvas");return i.style.display="block",i}const cr={};function Si(i){i in cr||(cr[i]=!0,console.warn(i))}const ur=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hr=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[rn]:{transfer:aa,primaries:sa,toReference:i=>i,fromReference:i=>i},[re]:{transfer:$t,primaries:sa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ua]:{transfer:aa,primaries:ra,toReference:i=>i.applyMatrix3(hr),fromReference:i=>i.applyMatrix3(ur)},[fs]:{transfer:$t,primaries:ra,toReference:i=>i.convertSRGBToLinear().applyMatrix3(hr),fromReference:i=>i.applyMatrix3(ur).convertLinearToSRGB()}},Kl=new Set([rn,ua]),Xt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Pi[t].toReference,a=Pi[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Pi[i].primaries},getTransfer:function(i){return i===Oe?aa:Pi[i].transfer}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let kn;class yo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=Ti("canvas")),kn.width=t.width,kn.height=t.height;const n=kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ti("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $l=0;class Eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=vn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(Ca(a[o].image)):s.push(Ca(a[o]))}else s=Ca(a);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zl=0;class Ae extends hi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=He,a=He,s=Re,o=yi,r=Ve,l=_n,c=Ae.DEFAULT_ANISOTROPY,u=Oe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=vn(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Dn?re:Oe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==co)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===re?Dn:vo}set encoding(t){Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Dn?re:Oe}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=co;Ae.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,a=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*a+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*a+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*a+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*a+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(m+1)/2,P=(h+1)/2,A=(u+f)/4,w=(d+_)/4,B=(g+p)/4;return x>b&&x>P?x<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(x),a=A/n,s=w/n):b>P?b<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),n=A/a,s=B/a):P<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(P),n=w/s,a=B/s),this.set(n,a,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jl extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?re:Oe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ae(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class To extends Ae{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Te,this.minFilter=Te,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends Ae{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Te,this.minFilter=Te,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,s,o,r){let l=n[a+0],c=n[a+1],u=n[a+2],d=n[a+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(r===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-r;const h=l*f+c*m+u*g+d*_,y=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,h*y);p=Math.sin(p*A)/P,r=Math.sin(r*A)/P}const b=r*y;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,d=d*p+_*b,p===1-r){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,a,s,o){const r=n[a],l=n[a+1],c=n[a+2],u=n[a+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+u*d+l*m-c*f,t[e+1]=l*g+u*f+c*d-r*m,t[e+2]=c*g+u*m+r*f-l*d,t[e+3]=u*g-r*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,s=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(a/2),d=r(s/2),f=l(n/2),m=l(a/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],s=e[8],o=e[1],r=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+r+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-a)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(u-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(s+c)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-a)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,s=t._z,o=t._w,r=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*r+a*c-s*l,this._y=a*u+o*l+s*r-n*c,this._z=s*u+o*c+n*l-a*r,this._w=o*u-n*r-a*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+a*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*a+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,r),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=a*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(s),n*Math.cos(s),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*a,this.y=s[1]*e+s[4]*n+s[7]*a,this.z=s[2]*e+s[5]*n+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*a+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*a+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*a+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,s=t.x,o=t.y,r=t.z,l=t.w,c=2*(o*a-r*n),u=2*(r*e-s*a),d=2*(s*n-o*e);return this.x=e+l*c+o*d-r*u,this.y=n+l*u+r*c-s*d,this.z=a+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a,this.y=s[1]*e+s[5]*n+s[9]*a,this.z=s[2]*e+s[6]*n+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,s=t.z,o=e.x,r=e.y,l=e.z;return this.x=a*l-s*r,this.y=s*o-n*l,this.z=n*r-a*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new L,dr=new bi;class Ai{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Be):Be.fromBufferAttribute(s,o),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Li.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Li.copy(n.boundingBox)),Li.applyMatrix4(t.matrixWorld),this.union(Li)}const a=t.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pi),Di.subVectors(this.max,pi),On.subVectors(t.a,pi),Bn.subVectors(t.b,pi),zn.subVectors(t.c,pi),on.subVectors(Bn,On),ln.subVectors(zn,Bn),Sn.subVectors(On,zn);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,on.z,0,-on.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!La(e,On,Bn,zn,Di)||(e=[1,0,0,0,1,0,0,0,1],!La(e,On,Bn,zn,Di))?!1:(Ui.crossVectors(on,ln),e=[Ui.x,Ui.y,Ui.z],La(e,On,Bn,zn,Di))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new L,new L,new L,new L,new L,new L,new L,new L],Be=new L,Li=new Ai,On=new L,Bn=new L,zn=new L,on=new L,ln=new L,Sn=new L,pi=new L,Di=new L,Ui=new L,yn=new L;function La(i,t,e,n,a){for(let s=0,o=i.length-3;s<=o;s+=3){yn.fromArray(i,s);const r=a.x*Math.abs(yn.x)+a.y*Math.abs(yn.y)+a.z*Math.abs(yn.z),l=t.dot(yn),c=e.dot(yn),u=n.dot(yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const tc=new Ai,mi=new L,Da=new L;class ha{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tc.setFromPoints(t).getCenter(n);let a=0;for(let s=0,o=t.length;s<o;s++)a=Math.max(a,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mi.subVectors(t,this.center);const e=mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(mi,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mi.copy(t.center).add(Da)),this.expandByPoint(mi.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new L,Ua=new L,Ii=new L,cn=new L,Ia=new L,Ni=new L,Na=new L;class ps{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Ua.copy(t).add(e).multiplyScalar(.5),Ii.copy(e).sub(t).normalize(),cn.copy(this.origin).sub(Ua);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ii),r=cn.dot(this.direction),l=-cn.dot(Ii),c=cn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-r,f=o*r-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*r)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+r)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+r)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Ua).addScaledVector(Ii,f),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),a=$e.dot($e)-n*n,s=t.radius*t.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,s,o,r,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>a||((s>n||isNaN(n))&&(n=s),(o<a||isNaN(a))&&(a=o),d>=0?(r=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(r=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,a,s){Ia.subVectors(e,t),Ni.subVectors(n,t),Na.crossVectors(Ia,Ni);let o=this.direction.dot(Na),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;cn.subVectors(this.origin,t);const l=r*this.direction.dot(Ni.crossVectors(cn,Ni));if(l<0)return null;const c=r*this.direction.dot(Ia.cross(cn));if(c<0||l+c>o)return null;const u=-r*cn.dot(Na);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,a,s,o,r,l,c,u,d,f,m,g,_,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,s,o,r,l,c,u,d,f,m,g,_,p)}set(t,e,n,a,s,o,r,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=a,h[1]=s,h[5]=o,h[9]=r,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/Gn.setFromMatrixColumn(t,0).length(),s=1/Gn.setFromMatrixColumn(t,1).length(),o=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*u,m=o*d,g=r*u,_=r*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-r*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f+_*r,e[4]=g*r-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-r,e[2]=m*r-g,e[6]=_+f*r,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;e[0]=f-_*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*u,e[9]=_-f*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*d,g=r*u,_=r*d;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=r*l,_=r*c;e[0]=l*u,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-r*u,e[2]=-c*u,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,m=o*c,g=r*l,_=r*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ec,t,nc)}lookAt(t,e,n){const a=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),un.crossVectors(n,De),un.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),un.crossVectors(n,De)),un.normalize(),Fi.crossVectors(De,un),a[0]=un.x,a[4]=Fi.x,a[8]=De.x,a[1]=un.y,a[5]=Fi.y,a[9]=De.y,a[2]=un.z,a[6]=Fi.z,a[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],y=n[3],x=n[7],b=n[11],P=n[15],A=a[0],w=a[4],B=a[8],M=a[12],T=a[1],z=a[5],G=a[9],Q=a[13],C=a[2],k=a[6],V=a[10],j=a[14],W=a[3],X=a[7],q=a[11],tt=a[15];return s[0]=o*A+r*T+l*C+c*W,s[4]=o*w+r*z+l*k+c*X,s[8]=o*B+r*G+l*V+c*q,s[12]=o*M+r*Q+l*j+c*tt,s[1]=u*A+d*T+f*C+m*W,s[5]=u*w+d*z+f*k+m*X,s[9]=u*B+d*G+f*V+m*q,s[13]=u*M+d*Q+f*j+m*tt,s[2]=g*A+_*T+p*C+h*W,s[6]=g*w+_*z+p*k+h*X,s[10]=g*B+_*G+p*V+h*q,s[14]=g*M+_*Q+p*j+h*tt,s[3]=y*A+x*T+b*C+P*W,s[7]=y*w+x*z+b*k+P*X,s[11]=y*B+x*G+b*V+P*q,s[15]=y*M+x*Q+b*j+P*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],s=t[12],o=t[1],r=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+s*l*d-a*c*d-s*r*f+n*c*f+a*r*m-n*l*m)+_*(+e*l*m-e*c*f+s*o*f-a*o*m+a*c*u-s*l*u)+p*(+e*c*d-e*r*m-s*o*d+n*o*m+s*r*u-n*c*u)+h*(-a*r*u-e*l*d+e*r*f+a*o*d-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],y=d*p*c-_*f*c+_*l*m-r*p*m-d*l*h+r*f*h,x=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,b=u*_*c-g*d*c+g*r*m-o*_*m-u*r*h+o*d*h,P=g*d*l-u*_*l-g*r*f+o*_*f+u*r*p-o*d*p,A=e*y+n*x+a*b+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(_*f*s-d*p*s-_*a*m+n*p*m+d*a*h-n*f*h)*w,t[2]=(r*p*s-_*l*s+_*a*c-n*p*c-r*a*h+n*l*h)*w,t[3]=(d*l*s-r*f*s-d*a*c+n*f*c+r*a*m-n*l*m)*w,t[4]=x*w,t[5]=(u*p*s-g*f*s+g*a*m-e*p*m-u*a*h+e*f*h)*w,t[6]=(g*l*s-o*p*s-g*a*c+e*p*c+o*a*h-e*l*h)*w,t[7]=(o*f*s-u*l*s+u*a*c-e*f*c-o*a*m+e*l*m)*w,t[8]=b*w,t[9]=(g*d*s-u*_*s-g*n*m+e*_*m+u*n*h-e*d*h)*w,t[10]=(o*_*s-g*r*s+g*n*c-e*_*c-o*n*h+e*r*h)*w,t[11]=(u*r*s-o*d*s-u*n*c+e*d*c+o*n*m-e*r*m)*w,t[12]=P*w,t[13]=(u*_*a-g*d*a+g*n*f-e*_*f-u*n*p+e*d*p)*w,t[14]=(g*r*a-o*_*a-g*n*l+e*_*l+o*n*p-e*r*p)*w,t[15]=(o*d*a-u*r*a+u*n*l-e*d*l-o*n*f+e*r*f)*w,this}scale(t){const e=this.elements,n=t.x,a=t.y,s=t.z;return e[0]*=n,e[4]*=a,e[8]*=s,e[1]*=n,e[5]*=a,e[9]*=s,e[2]*=n,e[6]*=a,e[10]*=s,e[3]*=n,e[7]*=a,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),s=1-n,o=t.x,r=t.y,l=t.z,c=s*o,u=s*r;return this.set(c*o+n,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+n,u*l-a*o,0,c*l-a*r,u*l+a*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,s,o){return this.set(1,n,s,0,t,1,o,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,s=e._x,o=e._y,r=e._z,l=e._w,c=s+s,u=o+o,d=r+r,f=s*c,m=s*u,g=s*d,_=o*u,p=o*d,h=r*d,y=l*c,x=l*u,b=l*d,P=n.x,A=n.y,w=n.z;return a[0]=(1-(_+h))*P,a[1]=(m+b)*P,a[2]=(g-x)*P,a[3]=0,a[4]=(m-b)*A,a[5]=(1-(f+h))*A,a[6]=(p+y)*A,a[7]=0,a[8]=(g+x)*w,a[9]=(p-y)*w,a[10]=(1-(f+_))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let s=Gn.set(a[0],a[1],a[2]).length();const o=Gn.set(a[4],a[5],a[6]).length(),r=Gn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],ze.copy(this);const c=1/s,u=1/o,d=1/r;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=u,ze.elements[5]*=u,ze.elements[6]*=u,ze.elements[8]*=d,ze.elements[9]*=d,ze.elements[10]*=d,e.setFromRotationMatrix(ze),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,a,s,o,r=nn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-a),d=(e+t)/(e-t),f=(n+a)/(n-a);let m,g;if(r===nn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(r===oa)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,a,s,o,r=nn){const l=this.elements,c=1/(e-t),u=1/(n-a),d=1/(o-s),f=(e+t)*c,m=(n+a)*u;let g,_;if(r===nn)g=(o+s)*d,_=-2*d;else if(r===oa)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gn=new L,ze=new ne,ec=new L(0,0,0),nc=new L(1,1,1),un=new L,Fi=new L,De=new L,fr=new ne,pr=new bi;class da{constructor(t=0,e=0,n=0,a=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],u=a[9],d=a[2],f=a[6],m=a[10];switch(e){case"XYZ":this._y=Math.asin(Ce(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pr.setFromEuler(this),this.setFromQuaternion(pr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class ms{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ic=0;const mr=new L,Hn=new bi,Ze=new ne,ki=new L,gi=new L,ac=new L,sc=new bi,gr=new L(1,0,0),_r=new L(0,1,0),vr=new L(0,0,1),rc={type:"added"},oc={type:"removed"};class le extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new L,e=new da,n=new bi,a=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ot}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(t,e){return Hn.setFromAxisAngle(t,e),this.quaternion.premultiply(Hn),this}rotateX(t){return this.rotateOnAxis(gr,t)}rotateY(t){return this.rotateOnAxis(_r,t)}rotateZ(t){return this.rotateOnAxis(vr,t)}translateOnAxis(t,e){return mr.copy(t).applyQuaternion(this.quaternion),this.position.add(mr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gr,t)}translateY(t){return this.translateOnAxis(_r,t)}translateZ(t){return this.translateOnAxis(vr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ki.copy(t):ki.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(gi,ki,this.up):Ze.lookAt(ki,gi,this.up),this.quaternion.setFromRotationMatrix(Ze),a&&(Ze.extractRotation(a.matrixWorld),Hn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Hn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,sc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++){const r=a[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));a.material=r}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function o(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}le.DEFAULT_UP=new L(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new L,Je=new L,Fa=new L,Qe=new L,Vn=new L,Wn=new L,xr=new L,ka=new L,Oa=new L,Ba=new L;let Oi=!1;class Fe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),Ge.subVectors(t,e),a.cross(Ge);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,e,n,a,s){Ge.subVectors(a,e),Je.subVectors(n,e),Fa.subVectors(t,e);const o=Ge.dot(Ge),r=Ge.dot(Je),l=Ge.dot(Fa),c=Je.dot(Je),u=Je.dot(Fa),d=o*c-r*r;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-r*u)*f,g=(o*u-r*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,Qe)===null?!1:Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getUV(t,e,n,a,s,o,r,l){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),this.getInterpolation(t,e,n,a,s,o,r,l)}static getInterpolation(t,e,n,a,s,o,r,l){return this.getBarycoord(t,e,n,a,Qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qe.x),l.addScaledVector(o,Qe.y),l.addScaledVector(r,Qe.z),l)}static isFrontFacing(t,e,n,a){return Ge.subVectors(n,e),Je.subVectors(t,e),Ge.cross(Je).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Ge.cross(Je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,s){return Oi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Oi=!0),Fe.getInterpolation(t,this.a,this.b,this.c,e,n,a,s)}getInterpolation(t,e,n,a,s){return Fe.getInterpolation(t,this.a,this.b,this.c,e,n,a,s)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,s=this.c;let o,r;Vn.subVectors(a,n),Wn.subVectors(s,n),ka.subVectors(t,n);const l=Vn.dot(ka),c=Wn.dot(ka);if(l<=0&&c<=0)return e.copy(n);Oa.subVectors(t,a);const u=Vn.dot(Oa),d=Wn.dot(Oa);if(u>=0&&d<=u)return e.copy(a);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Vn,o);Ba.subVectors(t,s);const m=Vn.dot(Ba),g=Wn.dot(Ba);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Wn,r);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return xr.subVectors(s,a),r=(d-u)/(d-u+(m-g)),e.copy(a).addScaledVector(xr,r);const h=1/(p+_+f);return o=_*h,r=f*h,e.copy(n).addScaledVector(Vn,o).addScaledVector(Wn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=Xt.workingColorSpace){if(t=ql(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=za(o,s,t+1/3),this.g=za(o,s,t),this.b=za(o,s,t-1/3)}return Xt.toWorkingColorSpace(this,a),this}setStyle(t,e=re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=re){const n=bo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=re){return Xt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Ce(_e.r*255,0,255))*65536+Math.round(Ce(_e.g*255,0,255))*256+Math.round(Ce(_e.b*255,0,255))}getHexString(t=re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,a=_e.g,s=_e.b,o=Math.max(n,a,s),r=Math.min(n,a,s);let l,c;const u=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=u<=.5?d/(o+r):d/(2-o-r),o){case n:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-n)/d+2;break;case s:l=(n-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=re){Xt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,a=_e.b;return t!==re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(hn),this.setHSL(hn.h+t,hn.s+e,hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hn),t.getHSL(Bi);const n=Aa(hn.h,Bi.h,e),a=Aa(hn.s,Bi.s,e),s=Aa(hn.l,Bi.l,e);return this.setHSL(n,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*a,this.g=s[1]*e+s[4]*n+s[7]*a,this.b=s[2]*e+s[5]*n+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new zt;zt.NAMES=bo;let lc=0;class Nn extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=si,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=ts,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ts&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(e){const s=a(t.textures),o=a(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class je extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new L,zi=new Tt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=as,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zi.fromBufferAttribute(this,e),zi.applyMatrix3(t),this.setXY(e,zi.x,zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),a=jt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),a=jt(a,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==as&&(t.usage=this.usage),t}}class Ao extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wo extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cc=0;const Ne=new ne,Ga=new le,Xn=new L,Ue=new Ai,_i=new Ai,fe=new L;class Pe extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(So(t)?wo:Ao)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(Ue.min,_i.min),Ue.expandByPoint(fe),fe.addVectors(Ue.max,_i.max),Ue.expandByPoint(fe)):(Ue.expandByPoint(_i.min),Ue.expandByPoint(_i.max))}Ue.getCenter(n);let a=0;for(let s=0,o=t.count;s<o;s++)fe.fromBufferAttribute(t,s),a=Math.max(a,n.distanceToSquared(fe));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)fe.fromBufferAttribute(r,c),l&&(Xn.fromBufferAttribute(t,c),fe.add(Xn)),a=Math.max(a,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,s=e.normal.array,o=e.uv.array,r=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<r;T++)c[T]=new L,u[T]=new L;const d=new L,f=new L,m=new L,g=new Tt,_=new Tt,p=new Tt,h=new L,y=new L;function x(T,z,G){d.fromArray(a,T*3),f.fromArray(a,z*3),m.fromArray(a,G*3),g.fromArray(o,T*2),_.fromArray(o,z*2),p.fromArray(o,G*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[T].add(h),c[z].add(h),c[G].add(h),u[T].add(y),u[z].add(y),u[G].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,z=b.length;T<z;++T){const G=b[T],Q=G.start,C=G.count;for(let k=Q,V=Q+C;k<V;k+=3)x(n[k+0],n[k+1],n[k+2])}const P=new L,A=new L,w=new L,B=new L;function M(T){w.fromArray(s,T*3),B.copy(w);const z=c[T];P.copy(z),P.sub(w.multiplyScalar(w.dot(z))).normalize(),A.crossVectors(B,z);const Q=A.dot(u[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=Q}for(let T=0,z=b.length;T<z;++T){const G=b[T],Q=G.start,C=G.count;for(let k=Q,V=Q+C;k<V;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const a=new L,s=new L,o=new L,r=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);a.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)a.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),d.subVectors(a,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(r,l){const c=r.array,u=r.itemSize,d=r.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){r.isInterleavedBufferAttribute?m=l[_]*r.data.stride+r.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new We(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=t(l,n);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(a[l]=u,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mr=new ne,En=new ps,Gi=new ha,Sr=new L,jn=new L,qn=new L,Yn=new L,Ha=new L,Hi=new L,Vi=new Tt,Wi=new Tt,Xi=new Tt,yr=new L,Er=new L,Tr=new L,ji=new L,qi=new L;class Ht extends le{constructor(t=new Pe,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const r=this.morphTargetInfluences;if(s&&r){Hi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=r[l],d=s[l];u!==0&&(Ha.fromBufferAttribute(d,t),o?Hi.addScaledVector(Ha,u):Hi.addScaledVector(Ha.sub(e),u))}e.add(Hi)}return e}raycast(t,e){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(s),En.copy(t.ray).recast(t.near),!(Gi.containsPoint(En.origin)===!1&&(En.intersectSphere(Gi,Sr)===null||En.origin.distanceToSquared(Sr)>(t.far-t.near)**2))&&(Mr.copy(s).invert(),En.copy(t.ray).applyMatrix4(Mr),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,P=x;b<P;b+=3){const A=r.getX(b),w=r.getX(b+1),B=r.getX(b+2);a=Yi(this,h,t,n,c,u,d,A,w,B),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(r.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const y=r.getX(p),x=r.getX(p+1),b=r.getX(p+2);a=Yi(this,o,t,n,c,u,d,y,x,b),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,P=x;b<P;b+=3){const A=b,w=b+1,B=b+2;a=Yi(this,h,t,n,c,u,d,A,w,B),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const y=p,x=p+1,b=p+2;a=Yi(this,o,t,n,c,u,d,y,x,b),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}}}function uc(i,t,e,n,a,s,o,r){let l;if(t.side===be?l=n.intersectTriangle(o,s,a,!0,r):l=n.intersectTriangle(a,s,o,t.side===sn,r),l===null)return null;qi.copy(r),qi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qi);return c<e.near||c>e.far?null:{distance:c,point:qi.clone(),object:i}}function Yi(i,t,e,n,a,s,o,r,l,c){i.getVertexPosition(r,jn),i.getVertexPosition(l,qn),i.getVertexPosition(c,Yn);const u=uc(i,t,e,n,jn,qn,Yn,ji);if(u){a&&(Vi.fromBufferAttribute(a,r),Wi.fromBufferAttribute(a,l),Xi.fromBufferAttribute(a,c),u.uv=Fe.getInterpolation(ji,jn,qn,Yn,Vi,Wi,Xi,new Tt)),s&&(Vi.fromBufferAttribute(s,r),Wi.fromBufferAttribute(s,l),Xi.fromBufferAttribute(s,c),u.uv1=Fe.getInterpolation(ji,jn,qn,Yn,Vi,Wi,Xi,new Tt),u.uv2=u.uv1),o&&(yr.fromBufferAttribute(o,r),Er.fromBufferAttribute(o,l),Tr.fromBufferAttribute(o,c),u.normal=Fe.getInterpolation(ji,jn,qn,Yn,yr,Er,Tr,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new L,materialIndex:0};Fe.getNormal(jn,qn,Yn,d.normal),u.face=d}return u}class wi extends Pe{constructor(t=1,e=1,n=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,a,o,2),g("x","z","y",1,-1,t,n,-e,a,o,3),g("x","y","z",1,-1,t,e,n,a,s,4),g("x","y","z",-1,-1,t,e,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function g(_,p,h,y,x,b,P,A,w,B,M){const T=b/w,z=P/B,G=b/2,Q=P/2,C=A/2,k=w+1,V=B+1;let j=0,W=0;const X=new L;for(let q=0;q<V;q++){const tt=q*z-Q;for(let et=0;et<k;et++){const H=et*T-G;X[_]=H*y,X[p]=tt*x,X[h]=C,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[h]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(et/w),d.push(1-q/B),j+=1}}for(let q=0;q<B;q++)for(let tt=0;tt<w;tt++){const et=f+tt+k*q,H=f+tt+k*(q+1),Y=f+(tt+1)+k*(q+1),ot=f+(tt+1)+k*q;l.push(et,H,ot),l.push(H,Y,ot),W+=6}r.addGroup(m,W,M),m+=W,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const a in n)t[a]=n[a]}return t}function hc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ro(i){return i.getRenderTarget()===null?i.outputColorSpace:Xt.workingColorSpace}const dc={clone:ui,merge:Ee};var fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fc,this.fragmentShader=pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?e.uniforms[a]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[a]={type:"m4",value:o.toArray()}:e.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends Co{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,e-=o.offsetY*n/c,a*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,$n=1;class mc extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ke(Kn,$n,t,e);a.layers=this.layers,this.add(a);const s=new ke(Kn,$n,t,e);s.layers=this.layers,this.add(s);const o=new ke(Kn,$n,t,e);o.layers=this.layers,this.add(o);const r=new ke(Kn,$n,t,e);r.layers=this.layers,this.add(r);const l=new ke(Kn,$n,t,e);l.layers=this.layers,this.add(l);const c=new ke(Kn,$n,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,s,o,r,l]=e;for(const c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,s),t.setRenderTarget(n,1,a),t.render(e,o),t.setRenderTarget(n,2,a),t.render(e,r),t.setRenderTarget(n,3,a),t.render(e,l),t.setRenderTarget(n,4,a),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,a),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Po extends Ae{constructor(t,e,n,a,s,o,r,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,a,s,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Dn?re:Oe),this.texture=new Po(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new wi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:gn});s.uniforms.tEquirect.value=e;const o=new Ht(a,s),r=e.minFilter;return e.minFilter===yi&&(e.minFilter=Re),new mc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,a){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,a);t.setRenderTarget(s)}}const Va=new L,_c=new L,vc=new Ot;class bn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=Va.subVectors(n,e).cross(_c.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vc.getNormalMatrix(t),a=this.coplanarPoint(Va).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new ha,Ki=new L;class gs{constructor(t=new bn,e=new bn,n=new bn,a=new bn,s=new bn,o=new bn){this.planes=[t,e,n,a,s,o]}set(t,e,n,a,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,a=t.elements,s=a[0],o=a[1],r=a[2],l=a[3],c=a[4],u=a[5],d=a[6],f=a[7],m=a[8],g=a[9],_=a[10],p=a[11],h=a[12],y=a[13],x=a[14],b=a[15];if(n[0].setComponents(l-s,f-c,p-m,b-h).normalize(),n[1].setComponents(l+s,f+c,p+m,b+h).normalize(),n[2].setComponents(l+o,f+u,p+g,b+y).normalize(),n[3].setComponents(l-o,f-u,p-g,b-y).normalize(),n[4].setComponents(l-r,f-d,p-_,b-x).normalize(),e===nn)n[5].setComponents(l+r,f+d,p+_,b+x).normalize();else if(e===oa)n[5].setComponents(r,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(Ki.x=a.normal.x>0?t.max.x:t.min.x,Ki.y=a.normal.y>0?t.max.y:t.min.y,Ki.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lo(){let i=null,t=!1,e=null,n=null;function a(s,o){e(s,o),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function xc(i,t){const e=t.isWebGL2,n=new WeakMap;function a(c,u){const d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,d){const f=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const h=g[_];e?i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):i.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,a(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:o,remove:r,update:l}}class we extends Pe{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const s=t/2,o=e/2,r=Math.floor(n),l=Math.floor(a),c=r+1,u=l+1,d=t/r,f=e/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const y=h*f-o;for(let x=0;x<c;x++){const b=x*d-s;g.push(b,-y,0),_.push(0,0,1),p.push(x/r),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<r;y++){const x=y+c*h,b=y+c*(h+1),P=y+1+c*(h+1),A=y+1+c*h;m.push(x,b,A),m.push(b,P,A)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ec=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ic=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$c="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
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
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
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
#endif`,nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ih=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ph=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ah=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Oh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Mc,alphahash_pars_fragment:Sc,alphamap_fragment:yc,alphamap_pars_fragment:Ec,alphatest_fragment:Tc,alphatest_pars_fragment:bc,aomap_fragment:Ac,aomap_pars_fragment:wc,batching_pars_vertex:Rc,batching_vertex:Cc,begin_vertex:Pc,beginnormal_vertex:Lc,bsdfs:Dc,iridescence_fragment:Uc,bumpmap_pars_fragment:Ic,clipping_planes_fragment:Nc,clipping_planes_pars_fragment:Fc,clipping_planes_pars_vertex:kc,clipping_planes_vertex:Oc,color_fragment:Bc,color_pars_fragment:zc,color_pars_vertex:Gc,color_vertex:Hc,common:Vc,cube_uv_reflection_fragment:Wc,defaultnormal_vertex:Xc,displacementmap_pars_vertex:jc,displacementmap_vertex:qc,emissivemap_fragment:Yc,emissivemap_pars_fragment:Kc,colorspace_fragment:$c,colorspace_pars_fragment:Zc,envmap_fragment:Jc,envmap_common_pars_fragment:Qc,envmap_pars_fragment:tu,envmap_pars_vertex:eu,envmap_physical_pars_fragment:fu,envmap_vertex:nu,fog_vertex:iu,fog_pars_vertex:au,fog_fragment:su,fog_pars_fragment:ru,gradientmap_pars_fragment:ou,lightmap_fragment:lu,lightmap_pars_fragment:cu,lights_lambert_fragment:uu,lights_lambert_pars_fragment:hu,lights_pars_begin:du,lights_toon_fragment:pu,lights_toon_pars_fragment:mu,lights_phong_fragment:gu,lights_phong_pars_fragment:_u,lights_physical_fragment:vu,lights_physical_pars_fragment:xu,lights_fragment_begin:Mu,lights_fragment_maps:Su,lights_fragment_end:yu,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:Tu,logdepthbuf_pars_vertex:bu,logdepthbuf_vertex:Au,map_fragment:wu,map_pars_fragment:Ru,map_particle_fragment:Cu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Uu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Nu,morphtarget_vertex:Fu,normal_fragment_begin:ku,normal_fragment_maps:Ou,normal_pars_fragment:Bu,normal_pars_vertex:zu,normal_vertex:Gu,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Xu,iridescence_pars_fragment:ju,opaque_fragment:qu,packing:Yu,premultiplied_alpha_fragment:Ku,project_vertex:$u,dithering_fragment:Zu,dithering_pars_fragment:Ju,roughnessmap_fragment:Qu,roughnessmap_pars_fragment:th,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:nh,shadowmap_vertex:ih,shadowmask_pars_fragment:ah,skinbase_vertex:sh,skinning_pars_vertex:rh,skinning_vertex:oh,skinnormal_vertex:lh,specularmap_fragment:ch,specularmap_pars_fragment:uh,tonemapping_fragment:hh,tonemapping_pars_fragment:dh,transmission_fragment:fh,transmission_pars_fragment:ph,uv_pars_fragment:mh,uv_pars_vertex:gh,uv_vertex:_h,worldpos_vertex:vh,background_vert:xh,background_frag:Mh,backgroundCube_vert:Sh,backgroundCube_frag:yh,cube_vert:Eh,cube_frag:Th,depth_vert:bh,depth_frag:Ah,distanceRGBA_vert:wh,distanceRGBA_frag:Rh,equirect_vert:Ch,equirect_frag:Ph,linedashed_vert:Lh,linedashed_frag:Dh,meshbasic_vert:Uh,meshbasic_frag:Ih,meshlambert_vert:Nh,meshlambert_frag:Fh,meshmatcap_vert:kh,meshmatcap_frag:Oh,meshnormal_vert:Bh,meshnormal_frag:zh,meshphong_vert:Gh,meshphong_frag:Hh,meshphysical_vert:Vh,meshphysical_frag:Wh,meshtoon_vert:Xh,meshtoon_frag:jh,points_vert:qh,points_frag:Yh,shadow_vert:Kh,shadow_frag:$h,sprite_vert:Zh,sprite_frag:Jh},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},qe={basic:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ee([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ee([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ee([it.points,it.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ee([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ee([it.common,it.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ee([it.sprite,it.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ee([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ee([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};qe.physical={uniforms:Ee([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const $i={r:0,b:0,g:0};function Qh(i,t,e,n,a,s,o){const r=new zt(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let y=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?e:t).get(x)),x===null?_(r,l):x&&x.isColor&&(_(x,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ca)?(u===void 0&&(u=new Ht(new wi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ui(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Xt.getTransfer(x.colorSpace)!==$t,(d!==x||f!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new we(2,2),new In({name:"BackgroundMaterial",uniforms:ui(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==$t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB($i,Ro(i)),n.buffers.color.setClear($i.r,$i.g,$i.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(p,h=1){r.set(p),l=h,_(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(r,l)},render:g}}function td(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let c=l,u=!1;function d(C,k,V,j,W){let X=!1;if(o){const q=_(j,V,k);c!==q&&(c=q,m(c.object)),X=h(C,j,V,W),X&&y(C,j,V,W)}else{const q=k.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==q)&&(c.geometry=j.id,c.program=V.id,c.wireframe=q,X=!0)}W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,B(C,k,V,j),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,k,V){const j=V.wireframe===!0;let W=r[C.id];W===void 0&&(W={},r[C.id]=W);let X=W[k.id];X===void 0&&(X={},W[k.id]=X);let q=X[j];return q===void 0&&(q=p(f()),X[j]=q),q}function p(C){const k=[],V=[],j=[];for(let W=0;W<a;W++)k[W]=0,V[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:j,object:C,attributes:{},index:null}}function h(C,k,V,j){const W=c.attributes,X=k.attributes;let q=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){const Y=W[et];let ot=X[et];if(ot===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor)),Y===void 0||Y.attribute!==ot||ot&&Y.data!==ot.data)return!0;q++}return c.attributesNum!==q||c.index!==j}function y(C,k,V,j){const W={},X=k.attributes;let q=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){let Y=X[et];Y===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor));const ot={};ot.attribute=Y,Y&&Y.data&&(ot.data=Y.data),W[et]=ot,q++}c.attributes=W,c.attributesNum=q,c.index=j}function x(){const C=c.newAttributes;for(let k=0,V=C.length;k<V;k++)C[k]=0}function b(C){P(C,0)}function P(C,k){const V=c.newAttributes,j=c.enabledAttributes,W=c.attributeDivisors;V[C]=1,j[C]===0&&(i.enableVertexAttribArray(C),j[C]=1),W[C]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,k),W[C]=k)}function A(){const C=c.newAttributes,k=c.enabledAttributes;for(let V=0,j=k.length;V<j;V++)k[V]!==C[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function w(C,k,V,j,W,X,q){q===!0?i.vertexAttribIPointer(C,k,V,W,X):i.vertexAttribPointer(C,k,V,j,W,X)}function B(C,k,V,j){if(n.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const W=j.attributes,X=V.getAttributes(),q=k.defaultAttributeValues;for(const tt in X){const et=X[tt];if(et.location>=0){let H=W[tt];if(H===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(H=C.instanceColor)),H!==void 0){const Y=H.normalized,ot=H.itemSize,mt=e.get(H);if(mt===void 0)continue;const pt=mt.buffer,Rt=mt.type,Pt=mt.bytesPerElement,St=n.isWebGL2===!0&&(Rt===i.INT||Rt===i.UNSIGNED_INT||H.gpuType===uo);if(H.isInterleavedBufferAttribute){const Gt=H.data,U=Gt.stride,xe=H.offset;if(Gt.isInstancedInterleavedBuffer){for(let _t=0;_t<et.locationSize;_t++)P(et.location+_t,Gt.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Gt.meshPerAttribute*Gt.count)}else for(let _t=0;_t<et.locationSize;_t++)b(et.location+_t);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let _t=0;_t<et.locationSize;_t++)w(et.location+_t,ot/et.locationSize,Rt,Y,U*Pt,(xe+ot/et.locationSize*_t)*Pt,St)}else{if(H.isInstancedBufferAttribute){for(let Gt=0;Gt<et.locationSize;Gt++)P(et.location+Gt,H.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Gt=0;Gt<et.locationSize;Gt++)b(et.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Gt=0;Gt<et.locationSize;Gt++)w(et.location+Gt,ot/et.locationSize,Rt,Y,ot*Pt,ot/et.locationSize*Gt*Pt,St)}}else if(q!==void 0){const Y=q[tt];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(et.location,Y);break;case 3:i.vertexAttrib3fv(et.location,Y);break;case 4:i.vertexAttrib4fv(et.location,Y);break;default:i.vertexAttrib1fv(et.location,Y)}}}}A()}function M(){G();for(const C in r){const k=r[C];for(const V in k){const j=k[V];for(const W in j)g(j[W].object),delete j[W];delete k[V]}delete r[C]}}function T(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const V in k){const j=k[V];for(const W in j)g(j[W].object),delete j[W];delete k[V]}delete r[C.id]}function z(C){for(const k in r){const V=r[k];if(V[C.id]===void 0)continue;const j=V[C.id];for(const W in j)g(j[W].object),delete j[W];delete V[C.id]}}function G(){Q(),u=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function ed(i,t,e,n){const a=n.isWebGL2;let s;function o(u){s=u}function r(u,d){i.drawArrays(s,u,d),e.update(d,s,1)}function l(u,d,f){if(f===0)return;let m,g;if(a)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,f),e.update(d,s,f)}function c(u,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,s,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function nd(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||t.has("OES_texture_float"),P=x&&b,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:A}}function id(i){const t=this;let e=null,n=0,a=!1,s=!1;const o=new bn,r=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||a;return a=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!a||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let b=h.clippingState||null;l.value=b,b=u(g,f,x,m);for(let P=0;P!==x;++P)b[P]=e[P];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,y=f.matrixWorldInverse;r.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(d[x]).applyMatrix4(y,r),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ad(i){let t=new WeakMap;function e(o,r){return r===es?o.mapping=oi:r===ns&&(o.mapping=li),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===es||r===ns)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gc(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",a),e(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Do extends Co{constructor(t=-1,e=1,n=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=a+e,l=a-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,br=[.125,.215,.35,.446,.526,.582],Rn=20,Wa=new Do,Ar=new zt;let Xa=null,ja=0,qa=0;const An=(1+Math.sqrt(5))/2,Zn=1/An,wr=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,An,Zn),new L(0,An,-Zn),new L(Zn,0,An),new L(-Zn,0,An),new L(An,Zn,0),new L(-An,Zn,0)];class Rr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,a,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,ja,qa),t.scissorTest=!1,Zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:Ei,format:Ve,colorSpace:rn,depthBuffer:!1},a=Cr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cr(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sd(s)),this._blurMaterial=rd(s,t,e)}return a}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,a){const r=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ar),u.toneMapping=an,u.autoClear=!1;const m=new je({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new Ht(new wi,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ar),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(r.up.set(0,l[h],0),r.lookAt(c[h],0,0)):y===1?(r.up.set(0,0,l[h]),r.lookAt(0,c[h],0)):(r.up.set(0,l[h],0),r.lookAt(0,0,c[h]));const x=this._cubeSize;Zi(a,y*x,h>2?x:0,x,x),u.setRenderTarget(a),_&&u.render(g,r),u.render(t,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===oi||t.mapping===li;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pr());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;Zi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=wr[(a-1)%wr.length];this._blur(t,a-1,a,s,o)}e.autoClear=n}_blur(t,e,n,a,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,a,"latitudinal",s),this._halfBlur(o,t,n,n,a,"longitudinal",s)}_halfBlur(t,e,n,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ht(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Rn;p>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rn}`);const h=[];let y=0;for(let w=0;w<Rn;++w){const B=w/_,M=Math.exp(-B*B/2);h.push(M),w===0?y+=M:w<p&&(y+=2*M)}for(let w=0;w<h.length;w++)h[w]=h[w]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[a],P=3*b*(a>x-ni?a-x+ni:0),A=4*(this._cubeSize-b);Zi(e,P,A,3*b,2*b),l.setRenderTarget(e),l.render(d,Wa)}}function sd(i){const t=[],e=[],n=[];let a=i;const s=i-ni+1+br.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);e.push(r);let l=1/r;o>i-ni?l=br[o-i+ni-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,y=new Float32Array(_*g*m),x=new Float32Array(p*g*m),b=new Float32Array(h*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,B=A>2?0:-1,M=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];y.set(M,_*g*A),x.set(f,p*g*A);const T=[A,A,A,A,A,A];b.set(T,h*g*A)}const P=new Pe;P.setAttribute("position",new We(y,_)),P.setAttribute("uv",new We(x,p)),P.setAttribute("faceIndex",new We(b,h)),t.push(P),a>ni&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cr(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zi(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function rd(i,t,e){const n=new Float32Array(Rn),a=new L(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Pr(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Lr(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function _s(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function od(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===es||l===ns,u=l===oi||l===li;if(c||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Rr(i)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||u&&d&&a(d)){e===null&&(e=new Rr(i));const f=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function a(r){let l=0;const c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ld(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function cd(i,t,e,n){const a={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete a[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function r(d,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let x=0,b=y.length;x<b;x+=3){const P=y[x+0],A=y[x+1],w=y[x+2];f.push(P,A,A,w,w,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const P=x+0,A=x+1,w=x+2;f.push(P,A,A,w,w,P)}}else return;const p=new(So(f)?wo:Ao)(f,1);p.version=_;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:u}}function ud(i,t,e,n){const a=n.isWebGL2;let s;function o(m){s=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(s,g,r,m*l),e.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,h;if(a)p=i,h="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,r,m*l,_),e.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,g[h]);else{p.multiDrawElementsWEBGL(s,g,0,r,m,0,_);let h=0;for(let y=0;y<_;y++)h+=g[y];e.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function hd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=r*(s/3);break;case i.LINES:e.lines+=r*(s/2);break;case i.LINE_STRIP:e.lines+=r*(s-1);break;case i.LINE_LOOP:e.lines+=r*s;break;case i.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function dd(i,t){return i[0]-t[0]}function fd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function pd(i,t,e){const n={},a=new Float32Array(8),s=new WeakMap,o=new pe,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let k=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),b===!0&&(M=2),P===!0&&(M=3);let T=u.attributes.position.count*M,z=1;T>t.maxTextureSize&&(z=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const G=new Float32Array(T*z*4*_),Q=new To(G,T,z,_);Q.type=pn,Q.needsUpdate=!0;const C=M*4;for(let V=0;V<_;V++){const j=A[V],W=w[V],X=B[V],q=T*z*4*V;for(let tt=0;tt<j.count;tt++){const et=tt*C;x===!0&&(o.fromBufferAttribute(j,tt),G[q+et+0]=o.x,G[q+et+1]=o.y,G[q+et+2]=o.z,G[q+et+3]=0),b===!0&&(o.fromBufferAttribute(W,tt),G[q+et+4]=o.x,G[q+et+5]=o.y,G[q+et+6]=o.z,G[q+et+7]=0),P===!0&&(o.fromBufferAttribute(X,tt),G[q+et+8]=o.x,G[q+et+9]=o.y,G[q+et+10]=o.z,G[q+et+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new Tt(T,z)},s.set(u,p),u.addEventListener("dispose",k)}let h=0;for(let x=0;x<f.length;x++)h+=f[x];const y=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[u.id]=_}for(let b=0;b<g;b++){const P=_[b];P[0]=b,P[1]=f[b]}_.sort(fd);for(let b=0;b<8;b++)b<g&&_[b][1]?(r[b][0]=_[b][0],r[b][1]=_[b][1]):(r[b][0]=Number.MAX_SAFE_INTEGER,r[b][1]=0);r.sort(dd);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const P=r[b],A=P[0],w=P[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+b)!==p[A]&&u.setAttribute("morphTarget"+b,p[A]),h&&u.getAttribute("morphNormal"+b)!==h[A]&&u.setAttribute("morphNormal"+b,h[A]),a[b]=w,y+=w):(p&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),a[b]=0)}const x=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function md(i,t,e,n){let a=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Uo extends Ae{constructor(t,e,n,a,s,o,r,l,c,u){if(u=u!==void 0?u:Ln,u!==Ln&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ln&&(n=fn),n===void 0&&u===ci&&(n=Pn),super(null,a,s,o,r,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Io=new Ae,No=new Uo(1,1);No.compareFunction=Mo;const Fo=new To,ko=new Ql,Oo=new Po,Dr=[],Ur=[],Ir=new Float32Array(16),Nr=new Float32Array(9),Fr=new Float32Array(4);function di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let s=Dr[a];if(s===void 0&&(s=new Float32Array(a),Dr[a]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,i[o].toArray(s,r)}return s}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=Ur[t];e===void 0&&(e=new Int32Array(t),Ur[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function Md(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Fr.set(n),i.uniformMatrix2fv(this.addr,!1,Fr),ue(e,n)}}function Sd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Nr.set(n),i.uniformMatrix3fv(this.addr,!1,Nr),ue(e,n)}}function yd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(ce(e,n))return;Ir.set(n),i.uniformMatrix4fv(this.addr,!1,Ir),ue(e,n)}}function Ed(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function Cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function Pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function Ld(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const s=this.type===i.SAMPLER_2D_SHADOW?No:Io;e.setTexture2D(t||s,a)}function Dd(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||ko,a)}function Ud(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Oo,a)}function Id(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Fo,a)}function Nd(i){switch(i){case 5126:return gd;case 35664:return _d;case 35665:return vd;case 35666:return xd;case 35674:return Md;case 35675:return Sd;case 35676:return yd;case 5124:case 35670:return Ed;case 35667:case 35671:return Td;case 35668:case 35672:return bd;case 35669:case 35673:return Ad;case 5125:return wd;case 36294:return Rd;case 36295:return Cd;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ld;case 35679:case 36299:case 36307:return Dd;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return Id}}function Fd(i,t){i.uniform1fv(this.addr,t)}function kd(i,t){const e=di(t,this.size,2);i.uniform2fv(this.addr,e)}function Od(i,t){const e=di(t,this.size,3);i.uniform3fv(this.addr,e)}function Bd(i,t){const e=di(t,this.size,4);i.uniform4fv(this.addr,e)}function zd(i,t){const e=di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gd(i,t){const e=di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hd(i,t){const e=di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vd(i,t){i.uniform1iv(this.addr,t)}function Wd(i,t){i.uniform2iv(this.addr,t)}function Xd(i,t){i.uniform3iv(this.addr,t)}function jd(i,t){i.uniform4iv(this.addr,t)}function qd(i,t){i.uniform1uiv(this.addr,t)}function Yd(i,t){i.uniform2uiv(this.addr,t)}function Kd(i,t){i.uniform3uiv(this.addr,t)}function $d(i,t){i.uniform4uiv(this.addr,t)}function Zd(i,t,e){const n=this.cache,a=t.length,s=fa(e,a);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==a;++o)e.setTexture2D(t[o]||Io,s[o])}function Jd(i,t,e){const n=this.cache,a=t.length,s=fa(e,a);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==a;++o)e.setTexture3D(t[o]||ko,s[o])}function Qd(i,t,e){const n=this.cache,a=t.length,s=fa(e,a);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==a;++o)e.setTextureCube(t[o]||Oo,s[o])}function tf(i,t,e){const n=this.cache,a=t.length,s=fa(e,a);ce(n,s)||(i.uniform1iv(this.addr,s),ue(n,s));for(let o=0;o!==a;++o)e.setTexture2DArray(t[o]||Fo,s[o])}function ef(i){switch(i){case 5126:return Fd;case 35664:return kd;case 35665:return Od;case 35666:return Bd;case 35674:return zd;case 35675:return Gd;case 35676:return Hd;case 5124:case 35670:return Vd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return jd;case 5125:return qd;case 36294:return Yd;case 36295:return Kd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tf}}class nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nd(e.type)}}class af{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ef(e.type)}}class sf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(t,e[r.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function kr(i,t){i.seq.push(t),i.map[t.id]=t}function rf(i,t,e){const n=i.name,a=n.length;for(Ya.lastIndex=0;;){const s=Ya.exec(n),o=Ya.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){kr(e,c===void 0?new nf(r,i,t):new af(r,i,t));break}else{let d=e.map[r];d===void 0&&(d=new sf(r),kr(e,d)),e=d}}}class na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=t.getActiveUniform(e,a),o=t.getUniformLocation(e,s.name);rf(s,o,this)}}setValue(t,e,n,a){const s=this.map[e];s!==void 0&&s.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let s=0,o=e.length;s!==o;++s){const r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,s=t.length;a!==s;++a){const o=t[a];o.id in e&&n.push(o)}return n}}function Or(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const of=37297;let lf=0;function cf(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=a;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function uf(i){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(i);let n;switch(t===e?n="":t===ra&&e===sa?n="LinearDisplayP3ToLinearSRGB":t===sa&&e===ra&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case ua:return[n,"LinearTransferOETF"];case re:case fs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Br(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+a+`

`+cf(i.getShaderSource(t),o)}else return a}function hf(i,t){const e=uf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function df(i,t){let e;switch(t){case yl:e="Linear";break;case El:e="Reinhard";break;case Tl:e="OptimizedCineon";break;case bl:e="ACESFilmic";break;case wl:e="AgX";break;case Al:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ff(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function pf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ii).join(`
`)}function mf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(t,a),o=s.name;let r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:r}}return e}function ii(i){return i!==""}function zr(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gr(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(i){return i.replace(_f,xf)}const vf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xf(i,t){let e=Dt[t];if(e===void 0){const n=vf.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ls(e)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hr(i){return i.replace(Mf,Sf)}function Sf(i,t,e,n){let a="";for(let s=parseInt(t);s<parseInt(e);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Vr(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function yf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ef(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case li:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function bf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ml:t="ENVMAP_BLENDING_MIX";break;case Sl:t="ENVMAP_BLENDING_ADD";break}return t}function Af(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wf(i,t,e,n){const a=i.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=yf(e),c=Ef(e),u=Tf(e),d=bf(e),f=Af(e),m=e.isWebGL2?"":ff(e),g=pf(e),_=mf(s),p=a.createProgram();let h,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ii).join(`
`),h.length>0&&(h+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ii).join(`
`),y.length>0&&(y+=`
`)):(h=[Vr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),y=[m,Vr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?Dt.tonemapping_pars_fragment:"",e.toneMapping!==an?df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,hf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ii).join(`
`)),o=ls(o),o=zr(o,e),o=Gr(o,e),r=ls(r),r=zr(r,e),r=Gr(r,e),o=Hr(o),r=Hr(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===or?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+h+o,P=x+y+r,A=Or(a,a.VERTEX_SHADER,b),w=Or(a,a.FRAGMENT_SHADER,P);a.attachShader(p,A),a.attachShader(p,w),e.index0AttributeName!==void 0?a.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function B(G){if(i.debug.checkShaderErrors){const Q=a.getProgramInfoLog(p).trim(),C=a.getShaderInfoLog(A).trim(),k=a.getShaderInfoLog(w).trim();let V=!0,j=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,A,w);else{const W=Br(a,A,"vertex"),X=Br(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(C===""||k==="")&&(j=!1);j&&(G.diagnostics={runnable:V,programLog:Q,vertexShader:{log:C,prefix:h},fragmentShader:{log:k,prefix:y}})}a.deleteShader(A),a.deleteShader(w),M=new na(a,p),T=gf(a,p)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(p,of)),z},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let Rf=0;class Cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pf(t),e.set(t,n)),n}}class Pf{constructor(t){this.id=Rf++,this.code=t,this.usedTimes=0}}function Lf(i,t,e,n,a,s,o){const r=new ms,l=new Cf,c=[],u=a.isWebGL2,d=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,z,G,Q){const C=G.fog,k=Q.geometry,V=M.isMeshStandardMaterial?G.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),W=j&&j.mapping===ca?j.image.height:null,X=g[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=q!==void 0?q.length:0;let et=0;k.morphAttributes.position!==void 0&&(et=1),k.morphAttributes.normal!==void 0&&(et=2),k.morphAttributes.color!==void 0&&(et=3);let H,Y,ot,mt;if(X){const Me=qe[X];H=Me.vertexShader,Y=Me.fragmentShader}else H=M.vertexShader,Y=M.fragmentShader,l.update(M),ot=l.getVertexShaderID(M),mt=l.getFragmentShaderID(M);const pt=i.getRenderTarget(),Rt=Q.isInstancedMesh===!0,Pt=Q.isBatchedMesh===!0,St=!!M.map,Gt=!!M.matcap,U=!!j,xe=!!M.aoMap,_t=!!M.lightMap,At=!!M.bumpMap,ht=!!M.normalMap,Jt=!!M.displacementMap,Ut=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,N=M.anisotropy>0,Z=M.clearcoat>0,$=M.iridescence>0,J=M.sheen>0,dt=M.transmission>0,rt=N&&!!M.anisotropyMap,ct=Z&&!!M.clearcoatMap,Mt=Z&&!!M.clearcoatNormalMap,It=Z&&!!M.clearcoatRoughnessMap,K=$&&!!M.iridescenceMap,Wt=$&&!!M.iridescenceThicknessMap,Bt=J&&!!M.sheenColorMap,bt=J&&!!M.sheenRoughnessMap,gt=!!M.specularMap,ut=!!M.specularColorMap,Lt=!!M.specularIntensityMap,Vt=dt&&!!M.transmissionMap,te=dt&&!!M.thicknessMap,Ft=!!M.gradientMap,nt=!!M.alphaMap,R=M.alphaTest>0,at=!!M.alphaHash,st=!!M.extensions,yt=!!k.attributes.uv1,vt=!!k.attributes.uv2,qt=!!k.attributes.uv3;let Yt=an;return M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:Y,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pt,instancing:Rt,instancingColor:Rt&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:rn,map:St,matcap:Gt,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:W,aoMap:xe,lightMap:_t,bumpMap:At,normalMap:ht,displacementMap:f&&Jt,emissiveMap:Ut,normalMapObjectSpace:ht&&M.normalMapType===Bl,normalMapTangentSpace:ht&&M.normalMapType===xo,metalnessMap:E,roughnessMap:v,anisotropy:N,anisotropyMap:rt,clearcoat:Z,clearcoatMap:ct,clearcoatNormalMap:Mt,clearcoatRoughnessMap:It,iridescence:$,iridescenceMap:K,iridescenceThicknessMap:Wt,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:gt,specularColorMap:ut,specularIntensityMap:Lt,transmission:dt,transmissionMap:Vt,thicknessMap:te,gradientMap:Ft,opaque:M.transparent===!1&&M.blending===si,alphaMap:nt,alphaTest:R,alphaHash:at,combine:M.combine,mapUv:St&&_(M.map.channel),aoMapUv:xe&&_(M.aoMap.channel),lightMapUv:_t&&_(M.lightMap.channel),bumpMapUv:At&&_(M.bumpMap.channel),normalMapUv:ht&&_(M.normalMap.channel),displacementMapUv:Jt&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:rt&&_(M.anisotropyMap.channel),clearcoatMapUv:ct&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:gt&&_(M.specularMap.channel),specularColorMapUv:ut&&_(M.specularColorMap.channel),specularIntensityMapUv:Lt&&_(M.specularIntensityMap.channel),transmissionMapUv:Vt&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ht||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:vt,vertexUv3s:qt,pointsUvs:Q.isPoints===!0&&!!k.attributes.uv&&(St||nt),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&Xt.getTransfer(M.map.colorSpace)===$t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===se,flipSided:M.side===be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:st&&M.extensions.derivatives===!0,extensionFragDepth:st&&M.extensions.fragDepth===!0,extensionDrawBuffers:st&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:st&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:st&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(y(T,M),x(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.matcap&&r.enable(4),T.envMap&&r.enable(5),T.normalMapObjectSpace&&r.enable(6),T.normalMapTangentSpace&&r.enable(7),T.clearcoat&&r.enable(8),T.iridescence&&r.enable(9),T.alphaTest&&r.enable(10),T.vertexColors&&r.enable(11),T.vertexAlphas&&r.enable(12),T.vertexUv1s&&r.enable(13),T.vertexUv2s&&r.enable(14),T.vertexUv3s&&r.enable(15),T.vertexTangents&&r.enable(16),T.anisotropy&&r.enable(17),T.alphaHash&&r.enable(18),T.batching&&r.enable(19),M.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.useLegacyLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function b(M){const T=g[M.type];let z;if(T){const G=qe[T];z=dc.clone(G.uniforms)}else z=M.uniforms;return z}function P(M,T){let z;for(let G=0,Q=c.length;G<Q;G++){const C=c[G];if(C.cacheKey===T){z=C,++z.usedTimes;break}}return z===void 0&&(z=new wf(i,T,M,s),c.push(z)),z}function A(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:B}}function Df(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,r){i.get(s)[o]=r}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function Uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wr(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xr(){const i=[];let t=0;const e=[],n=[],a=[];function s(){t=0,e.length=0,n.length=0,a.length=0}function o(d,f,m,g,_,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),t++,h}function r(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?a.push(h):e.push(h)}function l(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?a.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||Uf),n.length>1&&n.sort(f||Wr),a.length>1&&a.sort(f||Wr)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:a,init:s,push:r,unshift:l,finish:u,sort:c}}function If(){let i=new WeakMap;function t(n,a){const s=i.get(n);let o;return s===void 0?(o=new Xr,i.set(n,[o])):a>=s.length?(o=new Xr,s.push(o)):o=s[a],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ff(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let kf=0;function Of(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bf(i,t){const e=new Nf,n=Ff(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new L);const s=new L,o=new ne,r=new ne;function l(u,d){let f=0,m=0,g=0;for(let G=0;G<9;G++)a.probe[G].set(0,0,0);let _=0,p=0,h=0,y=0,x=0,b=0,P=0,A=0,w=0,B=0,M=0;u.sort(Of);const T=d===!0?Math.PI:1;for(let G=0,Q=u.length;G<Q;G++){const C=u[G],k=C.color,V=C.intensity,j=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=k.r*V*T,m+=k.g*V*T,g+=k.b*V*T;else if(C.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(C.sh.coefficients[X],V);M++}else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const q=C.shadow,tt=n.get(C);tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,a.directionalShadow[_]=tt,a.directionalShadowMap[_]=W,a.directionalShadowMatrix[_]=C.shadow.matrix,b++}a.directional[_]=X,_++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(k).multiplyScalar(V*T),X.distance=j,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,a.spot[h]=X;const q=C.shadow;if(C.map&&(a.spotLightMap[w]=C.map,w++,q.updateMatrices(C),C.castShadow&&B++),a.spotLightMatrix[h]=q.matrix,C.castShadow){const tt=n.get(C);tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,a.spotShadow[h]=tt,a.spotShadowMap[h]=W,A++}h++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(k).multiplyScalar(V),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),a.rectArea[y]=X,y++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*T),X.distance=C.distance,X.decay=C.decay,C.castShadow){const q=C.shadow,tt=n.get(C);tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,tt.shadowCameraNear=q.camera.near,tt.shadowCameraFar=q.camera.far,a.pointShadow[p]=tt,a.pointShadowMap[p]=W,a.pointShadowMatrix[p]=C.shadow.matrix,P++}a.point[p]=X,p++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(V*T),X.groundColor.copy(C.groundColor).multiplyScalar(V*T),a.hemi[x]=X,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=it.LTC_FLOAT_1,a.rectAreaLTC2=it.LTC_FLOAT_2):(a.rectAreaLTC1=it.LTC_HALF_1,a.rectAreaLTC2=it.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=it.LTC_FLOAT_1,a.rectAreaLTC2=it.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=it.LTC_HALF_1,a.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=m,a.ambient[2]=g;const z=a.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==h||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==b||z.numPointShadows!==P||z.numSpotShadows!==A||z.numSpotMaps!==w||z.numLightProbes!==M)&&(a.directional.length=_,a.spot.length=h,a.rectArea.length=y,a.point.length=p,a.hemi.length=x,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=A+w-B,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=M,z.directionalLength=_,z.pointLength=p,z.spotLength=h,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=b,z.numPointShadows=P,z.numSpotShadows=A,z.numSpotMaps=w,z.numLightProbes=M,a.version=kf++)}function c(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const b=u[y];if(b.isDirectionalLight){const P=a.directional[f];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),f++}else if(b.isSpotLight){const P=a.spot[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const P=a.rectArea[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(h),r.identity(),o.copy(b.matrixWorld),o.premultiply(h),r.extractRotation(o),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),_++}else if(b.isPointLight){const P=a.point[m];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const P=a.hemi[p];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:a}}function jr(i,t){const e=new Bf(i,t),n=[],a=[];function s(){n.length=0,a.length=0}function o(d){n.push(d)}function r(d){a.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function zf(i,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let l;return r===void 0?(l=new jr(i,t),e.set(s,[l])):o>=r.length?(l=new jr(i,t),r.push(l)):l=r[o],l}function a(){e=new WeakMap}return{get:n,dispose:a}}class Gf extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hf extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xf(i,t,e){let n=new gs;const a=new Tt,s=new Tt,o=new pe,r=new Gf({depthPacking:Ol}),l=new Hf,c={},u=e.maxTextureSize,d={[sn]:be,[be]:sn,[se]:se},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Vf,fragmentShader:Wf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let h=this.type;this.render=function(A,w,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),G=i.state;G.setBlending(gn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=h!==tn&&this.type===tn,C=h===tn&&this.type!==tn;for(let k=0,V=A.length;k<V;k++){const j=A[k],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const X=W.getFrameExtents();if(a.multiply(X),s.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/X.x),a.x=s.x*X.x,W.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/X.y),a.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Q===!0||C===!0){const tt=this.type!==tn?{minFilter:Te,magFilter:Te}:{};W.map!==null&&W.map.dispose(),W.map=new Un(a.x,a.y,tt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const q=W.getViewportCount();for(let tt=0;tt<q;tt++){const et=W.getViewport(tt);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),G.viewport(o),W.updateMatrices(j,tt),n=W.getFrustum(),b(w,B,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===tn&&y(W,B),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(M,T,z)};function y(A,w){const B=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,B,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,B,m,_,null)}function x(A,w,B,M){let T=null;const z=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)T=z;else if(T=B.isPointLight===!0?l:r,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=T.uuid,Q=w.uuid;let C=c[G];C===void 0&&(C={},c[G]=C);let k=C[Q];k===void 0&&(k=T.clone(),C[Q]=k,w.addEventListener("dispose",P)),T=k}if(T.visible=w.visible,T.wireframe=w.wireframe,M===tn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:d[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=i.properties.get(T);G.light=B}return T}function b(A,w,B,M,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const Q=t.update(A),C=A.material;if(Array.isArray(C)){const k=Q.groups;for(let V=0,j=k.length;V<j;V++){const W=k[V],X=C[W.materialIndex];if(X&&X.visible){const q=x(A,X,M,T);A.onBeforeShadow(i,A,w,B,Q,q,W),i.renderBufferDirect(B,null,Q,q,A,W),A.onAfterShadow(i,A,w,B,Q,q,W)}}}else if(C.visible){const k=x(A,C,M,T);A.onBeforeShadow(i,A,w,B,Q,k,null),i.renderBufferDirect(B,null,Q,k,A,null),A.onAfterShadow(i,A,w,B,Q,k,null)}}const G=A.children;for(let Q=0,C=G.length;Q<C;Q++)b(G[Q],w,B,M,T)}function P(A){A.target.removeEventListener("dispose",P);for(const B in c){const M=c[B],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function jf(i,t,e){const n=e.isWebGL2;function a(){let R=!1;const at=new pe;let st=null;const yt=new pe(0,0,0,0);return{setMask:function(vt){st!==vt&&!R&&(i.colorMask(vt,vt,vt,vt),st=vt)},setLocked:function(vt){R=vt},setClear:function(vt,qt,Yt,he,Me){Me===!0&&(vt*=he,qt*=he,Yt*=he),at.set(vt,qt,Yt,he),yt.equals(at)===!1&&(i.clearColor(vt,qt,Yt,he),yt.copy(at))},reset:function(){R=!1,st=null,yt.set(-1,0,0,0)}}}function s(){let R=!1,at=null,st=null,yt=null;return{setTest:function(vt){vt?Pt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(vt){at!==vt&&!R&&(i.depthMask(vt),at=vt)},setFunc:function(vt){if(st!==vt){switch(vt){case fl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case ia:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=vt}},setLocked:function(vt){R=vt},setClear:function(vt){yt!==vt&&(i.clearDepth(vt),yt=vt)},reset:function(){R=!1,at=null,st=null,yt=null}}}function o(){let R=!1,at=null,st=null,yt=null,vt=null,qt=null,Yt=null,he=null,Me=null;return{setTest:function(Kt){R||(Kt?Pt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Kt){at!==Kt&&!R&&(i.stencilMask(Kt),at=Kt)},setFunc:function(Kt,Se,Xe){(st!==Kt||yt!==Se||vt!==Xe)&&(i.stencilFunc(Kt,Se,Xe),st=Kt,yt=Se,vt=Xe)},setOp:function(Kt,Se,Xe){(qt!==Kt||Yt!==Se||he!==Xe)&&(i.stencilOp(Kt,Se,Xe),qt=Kt,Yt=Se,he=Xe)},setLocked:function(Kt){R=Kt},setClear:function(Kt){Me!==Kt&&(i.clearStencil(Kt),Me=Kt)},reset:function(){R=!1,at=null,st=null,yt=null,vt=null,qt=null,Yt=null,he=null,Me=null}}}const r=new a,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,y=null,x=null,b=null,P=null,A=null,w=null,B=null,M=new zt(0,0,0),T=0,z=!1,G=null,Q=null,C=null,k=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=X>=2);let tt=null,et={};const H=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),ot=new pe().fromArray(H),mt=new pe().fromArray(Y);function pt(R,at,st,yt){const vt=new Uint8Array(4),qt=i.createTexture();i.bindTexture(R,qt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<st;Yt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(at+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return qt}const Rt={};Rt[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pt(i.DEPTH_TEST),l.setFunc(ia),Ut(!1),E(Rs),Pt(i.CULL_FACE),ht(gn);function Pt(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function St(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Gt(R,at){return m[R]!==at?(i.bindFramebuffer(R,at),m[R]=at,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function U(R,at){let st=_,yt=!1;if(R)if(st=g.get(at),st===void 0&&(st=[],g.set(at,st)),R.isWebGLMultipleRenderTargets){const vt=R.texture;if(st.length!==vt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,Yt=vt.length;qt<Yt;qt++)st[qt]=i.COLOR_ATTACHMENT0+qt;st.length=vt.length,yt=!0}}else st[0]!==i.COLOR_ATTACHMENT0&&(st[0]=i.COLOR_ATTACHMENT0,yt=!0);else st[0]!==i.BACK&&(st[0]=i.BACK,yt=!0);yt&&(e.isWebGL2?i.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function xe(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const _t={[wn]:i.FUNC_ADD,[Jo]:i.FUNC_SUBTRACT,[Qo]:i.FUNC_REVERSE_SUBTRACT};if(n)_t[Ds]=i.MIN,_t[Us]=i.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(_t[Ds]=R.MIN_EXT,_t[Us]=R.MAX_EXT)}const At={[tl]:i.ZERO,[el]:i.ONE,[nl]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[ll]:i.SRC_ALPHA_SATURATE,[rl]:i.DST_COLOR,[al]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[ts]:i.ONE_MINUS_SRC_ALPHA,[ol]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA,[cl]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[hl]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(R,at,st,yt,vt,qt,Yt,he,Me,Kt){if(R===gn){h===!0&&(St(i.BLEND),h=!1);return}if(h===!1&&(Pt(i.BLEND),h=!0),R!==Zo){if(R!==y||Kt!==z){if((x!==wn||A!==wn)&&(i.blendEquation(i.FUNC_ADD),x=wn,A=wn),Kt)switch(R){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,P=null,w=null,B=null,M.set(0,0,0),T=0,y=R,z=Kt}return}vt=vt||at,qt=qt||st,Yt=Yt||yt,(at!==x||vt!==A)&&(i.blendEquationSeparate(_t[at],_t[vt]),x=at,A=vt),(st!==b||yt!==P||qt!==w||Yt!==B)&&(i.blendFuncSeparate(At[st],At[yt],At[qt],At[Yt]),b=st,P=yt,w=qt,B=Yt),(he.equals(M)===!1||Me!==T)&&(i.blendColor(he.r,he.g,he.b,Me),M.copy(he),T=Me),y=R,z=!1}function Jt(R,at){R.side===se?St(i.CULL_FACE):Pt(i.CULL_FACE);let st=R.side===be;at&&(st=!st),Ut(st),R.blending===si&&R.transparent===!1?ht(gn):ht(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),r.setMask(R.colorWrite);const yt=R.stencilWrite;c.setTest(yt),yt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(R){G!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),G=R)}function E(R){R!==Yo?(Pt(i.CULL_FACE),R!==Q&&(R===Rs?i.cullFace(i.BACK):R===Ko?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),Q=R}function v(R){R!==C&&(W&&i.lineWidth(R),C=R)}function N(R,at,st){R?(Pt(i.POLYGON_OFFSET_FILL),(k!==at||V!==st)&&(i.polygonOffset(at,st),k=at,V=st)):St(i.POLYGON_OFFSET_FILL)}function Z(R){R?Pt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function $(R){R===void 0&&(R=i.TEXTURE0+j-1),tt!==R&&(i.activeTexture(R),tt=R)}function J(R,at,st){st===void 0&&(tt===null?st=i.TEXTURE0+j-1:st=tt);let yt=et[st];yt===void 0&&(yt={type:void 0,texture:void 0},et[st]=yt),(yt.type!==R||yt.texture!==at)&&(tt!==st&&(i.activeTexture(st),tt=st),i.bindTexture(R,at||Rt[R]),yt.type=R,yt.texture=at)}function dt(){const R=et[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Lt(R){ot.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ot.copy(R))}function Vt(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function te(R,at){let st=d.get(at);st===void 0&&(st=new WeakMap,d.set(at,st));let yt=st.get(R);yt===void 0&&(yt=i.getUniformBlockIndex(at,R.name),st.set(R,yt))}function Ft(R,at){const yt=d.get(at).get(R);u.get(at)!==yt&&(i.uniformBlockBinding(at,yt,R.__bindingPointIndex),u.set(at,yt))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,et={},m={},g=new WeakMap,_=[],p=null,h=!1,y=null,x=null,b=null,P=null,A=null,w=null,B=null,M=new zt(0,0,0),T=0,z=!1,G=null,Q=null,C=null,k=null,V=null,ot.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Pt,disable:St,bindFramebuffer:Gt,drawBuffers:U,useProgram:xe,setBlending:ht,setMaterial:Jt,setFlipSided:Ut,setCullFace:E,setLineWidth:v,setPolygonOffset:N,setScissorTest:Z,activeTexture:$,bindTexture:J,unbindTexture:dt,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:gt,texImage3D:ut,updateUBOMapping:te,uniformBlockBinding:Ft,texStorage2D:Bt,texStorage3D:bt,texSubImage2D:Mt,texSubImage3D:It,compressedTexSubImage2D:K,compressedTexSubImage3D:Wt,scissor:Lt,viewport:Vt,reset:nt}}function qf(i,t,e,n,a,s,o){const r=a.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):Ti("canvas")}function _(E,v,N,Z){let $=1;if((E.width>Z||E.height>Z)&&($=Z/Math.max(E.width,E.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const J=v?os:Math.floor,dt=J($*E.width),rt=J($*E.height);d===void 0&&(d=g(dt,rt));const ct=N?g(dt,rt):d;return ct.width=dt,ct.height=rt,ct.getContext("2d").drawImage(E,0,0,dt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+dt+"x"+rt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return lr(E.width)&&lr(E.height)}function h(E){return r?!1:E.wrapS!==He||E.wrapT!==He||E.minFilter!==Te&&E.minFilter!==Re}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==Te&&E.minFilter!==Re}function x(E){i.generateMipmap(E)}function b(E,v,N,Z,$=!1){if(r===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=v;if(v===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),v===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){const dt=$?aa:Xt.getTransfer(Z);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=dt===$t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function P(E,v,N){return y(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Te&&E.minFilter!==Re?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){return E===Te||E===Is||E===xa?i.NEAREST:i.LINEAR}function w(E){const v=E.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&u.delete(v)}function B(E){const v=E.target;v.removeEventListener("dispose",B),z(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const N=E.source,Z=f.get(N);if(Z){const $=Z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(E),Object.keys(Z).length===0&&f.delete(N)}n.remove(E)}function T(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const N=E.source,Z=f.get(N);delete Z[v.__cacheKey],o.memory.textures--}function z(E){const v=E.texture,N=n.get(E),Z=n.get(v);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(N.__webglFramebuffer[$]))for(let J=0;J<N.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(N.__webglFramebuffer[$][J]);else i.deleteFramebuffer(N.__webglFramebuffer[$]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[$])}else{if(Array.isArray(N.__webglFramebuffer))for(let $=0;$<N.__webglFramebuffer.length;$++)i.deleteFramebuffer(N.__webglFramebuffer[$]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let $=0;$<N.__webglColorRenderbuffer.length;$++)N.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[$]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let $=0,J=v.length;$<J;$++){const dt=n.get(v[$]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(E)}let G=0;function Q(){G=0}function C(){const E=G;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),G+=1,E}function k(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function V(E,v){const N=n.get(E);if(E.isVideoTexture&&Jt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(N,E,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function j(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ot(N,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function W(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ot(N,E,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function X(E,v){const N=n.get(E);if(E.version>0&&N.__version!==E.version){mt(N,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const q={[dn]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},tt={[Te]:i.NEAREST,[Is]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[Re]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},et={[zl]:i.NEVER,[jl]:i.ALWAYS,[Gl]:i.LESS,[Mo]:i.LEQUAL,[Hl]:i.EQUAL,[Xl]:i.GEQUAL,[Vl]:i.GREATER,[Wl]:i.NOTEQUAL};function H(E,v,N){if(N?(i.texParameteri(E,i.TEXTURE_WRAP_S,q[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,q[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,q[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==He||v.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Te&&v.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Te||v.minFilter!==xa&&v.minFilter!==yi||v.type===pn&&t.has("OES_texture_float_linear")===!1||r===!1&&v.type===Ei&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const J=k(v);if(J!==E.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[J].usedTimes++;const dt=$[E.__cacheKey];dt!==void 0&&($[E.__cacheKey].usedTimes--,dt.usedTimes===0&&T(v)),E.__cacheKey=J,E.__webglTexture=$[J].texture}return N}function ot(E,v,N){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const $=Y(E,v),J=v.source;e.bindTexture(Z,E.__webglTexture,i.TEXTURE0+N);const dt=n.get(J);if(J.version!==dt.__version||$===!0){e.activeTexture(i.TEXTURE0+N);const rt=Xt.getPrimaries(Xt.workingColorSpace),ct=v.colorSpace===Oe?null:Xt.getPrimaries(v.colorSpace),Mt=v.colorSpace===Oe||rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const It=h(v)&&p(v.image)===!1;let K=_(v.image,It,!1,a.maxTextureSize);K=Ut(v,K);const Wt=p(K)||r,Bt=s.convert(v.format,v.colorSpace);let bt=s.convert(v.type),gt=b(v.internalFormat,Bt,bt,v.colorSpace,v.isVideoTexture);H(Z,v,Wt);let ut;const Lt=v.mipmaps,Vt=r&&v.isVideoTexture!==!0&&gt!==_o,te=dt.__version===void 0||$===!0,Ft=P(v,K,Wt);if(v.isDepthTexture)gt=i.DEPTH_COMPONENT,r?v.type===pn?gt=i.DEPTH_COMPONENT32F:v.type===fn?gt=i.DEPTH_COMPONENT24:v.type===Pn?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:v.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ln&&gt===i.DEPTH_COMPONENT&&v.type!==ds&&v.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=fn,bt=s.convert(v.type)),v.format===ci&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,v.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Pn,bt=s.convert(v.type))),te&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,gt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,gt,K.width,K.height,0,Bt,bt,null));else if(v.isDataTexture)if(Lt.length>0&&Wt){Vt&&te&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let nt=0,R=Lt.length;nt<R;nt++)ut=Lt[nt],Vt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,Bt,bt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,gt,ut.width,ut.height,0,Bt,bt,ut.data);v.generateMipmaps=!1}else Vt?(te&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,K.width,K.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,Bt,bt,K.data)):e.texImage2D(i.TEXTURE_2D,0,gt,K.width,K.height,0,Bt,bt,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,gt,Lt[0].width,Lt[0].height,K.depth);for(let nt=0,R=Lt.length;nt<R;nt++)ut=Lt[nt],v.format!==Ve?Bt!==null?Vt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,Bt,ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,gt,ut.width,ut.height,K.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,K.depth,Bt,bt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,gt,ut.width,ut.height,K.depth,0,Bt,bt,ut.data)}else{Vt&&te&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let nt=0,R=Lt.length;nt<R;nt++)ut=Lt[nt],v.format!==Ve?Bt!==null?Vt?e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,gt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ut.width,ut.height,Bt,bt,ut.data):e.texImage2D(i.TEXTURE_2D,nt,gt,ut.width,ut.height,0,Bt,bt,ut.data)}else if(v.isDataArrayTexture)Vt?(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,gt,K.width,K.height,K.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Bt,bt,K.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,K.width,K.height,K.depth,0,Bt,bt,K.data);else if(v.isData3DTexture)Vt?(te&&e.texStorage3D(i.TEXTURE_3D,Ft,gt,K.width,K.height,K.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Bt,bt,K.data)):e.texImage3D(i.TEXTURE_3D,0,gt,K.width,K.height,K.depth,0,Bt,bt,K.data);else if(v.isFramebufferTexture){if(te)if(Vt)e.texStorage2D(i.TEXTURE_2D,Ft,gt,K.width,K.height);else{let nt=K.width,R=K.height;for(let at=0;at<Ft;at++)e.texImage2D(i.TEXTURE_2D,at,gt,nt,R,0,Bt,bt,null),nt>>=1,R>>=1}}else if(Lt.length>0&&Wt){Vt&&te&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,Lt[0].width,Lt[0].height);for(let nt=0,R=Lt.length;nt<R;nt++)ut=Lt[nt],Vt?e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Bt,bt,ut):e.texImage2D(i.TEXTURE_2D,nt,gt,Bt,bt,ut);v.generateMipmaps=!1}else Vt?(te&&e.texStorage2D(i.TEXTURE_2D,Ft,gt,K.width,K.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,bt,K)):e.texImage2D(i.TEXTURE_2D,0,gt,Bt,bt,K);y(v,Wt)&&x(Z),dt.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function mt(E,v,N){if(v.image.length!==6)return;const Z=Y(E,v),$=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const J=n.get($);if($.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const dt=Xt.getPrimaries(Xt.workingColorSpace),rt=v.colorSpace===Oe?null:Xt.getPrimaries(v.colorSpace),ct=v.colorSpace===Oe||dt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Mt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!Mt&&!It?K[nt]=_(v.image[nt],!1,!0,a.maxCubemapSize):K[nt]=It?v.image[nt].image:v.image[nt],K[nt]=Ut(v,K[nt]);const Wt=K[0],Bt=p(Wt)||r,bt=s.convert(v.format,v.colorSpace),gt=s.convert(v.type),ut=b(v.internalFormat,bt,gt,v.colorSpace),Lt=r&&v.isVideoTexture!==!0,Vt=J.__version===void 0||Z===!0;let te=P(v,Wt,Bt);H(i.TEXTURE_CUBE_MAP,v,Bt);let Ft;if(Mt){Lt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,te,ut,Wt.width,Wt.height);for(let nt=0;nt<6;nt++){Ft=K[nt].mipmaps;for(let R=0;R<Ft.length;R++){const at=Ft[R];v.format!==Ve?bt!==null?Lt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,0,0,at.width,at.height,bt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,ut,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,0,0,at.width,at.height,bt,gt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R,ut,at.width,at.height,0,bt,gt,at.data)}}}else{Ft=v.mipmaps,Lt&&Vt&&(Ft.length>0&&te++,e.texStorage2D(i.TEXTURE_CUBE_MAP,te,ut,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(It){Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,bt,gt,K[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,K[nt].width,K[nt].height,0,bt,gt,K[nt].data);for(let R=0;R<Ft.length;R++){const st=Ft[R].image[nt].image;Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,0,0,st.width,st.height,bt,gt,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,ut,st.width,st.height,0,bt,gt,st.data)}}else{Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt,gt,K[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,bt,gt,K[nt]);for(let R=0;R<Ft.length;R++){const at=Ft[R];Lt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,0,0,bt,gt,at.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,R+1,ut,bt,gt,at.image[nt])}}}y(v,Bt)&&x(i.TEXTURE_CUBE_MAP),J.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function pt(E,v,N,Z,$,J){const dt=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),ct=b(N.internalFormat,dt,rt,N.colorSpace);if(!n.get(v).__hasExternalTextures){const It=Math.max(1,v.width>>J),K=Math.max(1,v.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,J,ct,It,K,v.depth,0,dt,rt,null):e.texImage2D($,J,ct,It,K,0,dt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,0,At(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,n.get(N).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(E,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Z=r===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ht(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===pn?Z=i.DEPTH_COMPONENT32F:$.type===fn&&(Z=i.DEPTH_COMPONENT24));const J=At(v);ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Z=At(v);N&&ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<Z.length;$++){const J=Z[$],dt=s.convert(J.format,J.colorSpace),rt=s.convert(J.type),ct=b(J.internalFormat,dt,rt,J.colorSpace),Mt=At(v);N&&ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,v.width,v.height):ht(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,$=At(v);if(v.depthTexture.format===Ln)ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ci)ht(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function St(E){const v=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pt(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Rt(v.__webglDepthbuffer[Z],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Rt(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(E,v,N){const Z=n.get(E);v!==void 0&&pt(Z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&St(E)}function U(E){const v=E.texture,N=n.get(E),Z=n.get(v);E.addEventListener("dispose",B),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++);const $=E.isWebGLCubeRenderTarget===!0,J=E.isWebGLMultipleRenderTargets===!0,dt=p(E)||r;if($){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(r&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ct=0;ct<v.mipmaps.length;ct++)N.__webglFramebuffer[rt][ct]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(r&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)if(a.drawBuffers){const rt=E.texture;for(let ct=0,Mt=rt.length;ct<Mt;ct++){const It=n.get(rt[ct]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&ht(E)===!1){const rt=J?v:[v];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ct=0;ct<rt.length;ct++){const Mt=rt[ct];N.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ct]);const It=s.convert(Mt.format,Mt.colorSpace),K=s.convert(Mt.type),Wt=b(Mt.internalFormat,It,K,Mt.colorSpace,E.isXRRenderTarget===!0),Bt=At(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Wt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,N.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),H(i.TEXTURE_CUBE_MAP,v,dt);for(let rt=0;rt<6;rt++)if(r&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)pt(N.__webglFramebuffer[rt][ct],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else pt(N.__webglFramebuffer[rt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);y(v,dt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const rt=E.texture;for(let ct=0,Mt=rt.length;ct<Mt;ct++){const It=rt[ct],K=n.get(It);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),H(i.TEXTURE_2D,It,dt),pt(N.__webglFramebuffer,E,It,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),y(It,dt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?rt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,Z.__webglTexture),H(rt,v,dt),r&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)pt(N.__webglFramebuffer[ct],E,v,i.COLOR_ATTACHMENT0,rt,ct);else pt(N.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,rt,0);y(v,dt)&&x(rt),e.unbindTexture()}E.depthBuffer&&St(E)}function xe(E){const v=p(E)||r,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,$=N.length;Z<$;Z++){const J=N[Z];if(y(J,v)){const dt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,rt=n.get(J).__webglTexture;e.bindTexture(dt,rt),x(dt),e.unbindTexture()}}}function _t(E){if(r&&E.samples>0&&ht(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,Z=E.height;let $=i.COLOR_BUFFER_BIT;const J=[],dt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(E),ct=E.isWebGLMultipleRenderTargets===!0;if(ct)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){J.push(i.COLOR_ATTACHMENT0+Mt),E.depthBuffer&&J.push(dt);const It=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(It===!1&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ct&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]),It===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[dt])),ct){const K=n.get(v[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[Mt]);const It=n.get(v[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}}function At(E){return Math.min(a.maxSamples,E.samples)}function ht(E){const v=n.get(E);return r&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Jt(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Ut(E,v){const N=E.colorSpace,Z=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ss||N!==rn&&N!==Oe&&(Xt.getTransfer(N)===$t?r===!1?t.has("EXT_sRGB")===!0&&Z===Ve?(E.format=ss,E.minFilter=Re,E.generateMipmaps=!1):v=yo.sRGBToLinear(v):(Z!==Ve||$!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=C,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ht}function Yf(i,t,e){const n=e.isWebGL2;function a(s,o=Oe){let r;const l=Xt.getTransfer(o);if(s===_n)return i.UNSIGNED_BYTE;if(s===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(s===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Cl)return i.BYTE;if(s===Pl)return i.SHORT;if(s===ds)return i.UNSIGNED_SHORT;if(s===uo)return i.INT;if(s===fn)return i.UNSIGNED_INT;if(s===pn)return i.FLOAT;if(s===Ei)return n?i.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Ll)return i.ALPHA;if(s===Ve)return i.RGBA;if(s===Dl)return i.LUMINANCE;if(s===Ul)return i.LUMINANCE_ALPHA;if(s===Ln)return i.DEPTH_COMPONENT;if(s===ci)return i.DEPTH_STENCIL;if(s===ss)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Il)return i.RED;if(s===po)return i.RED_INTEGER;if(s===Nl)return i.RG;if(s===mo)return i.RG_INTEGER;if(s===go)return i.RGBA_INTEGER;if(s===Ma||s===Sa||s===ya||s===Ea)if(l===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ns||s===Fs||s===ks||s===Os)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Ns)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ks)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Os)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_o)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bs||s===zs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Bs)return l===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===zs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gs||s===Hs||s===Vs||s===Ws||s===Xs||s===js||s===qs||s===Ys||s===Ks||s===$s||s===Zs||s===Js||s===Qs||s===tr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Gs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ws)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===js)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ys)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ks)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$s)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Js)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qs)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tr)return l===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ta||s===er||s===nr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Ta)return l===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===er)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fl||s===ir||s===ar||s===sr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(s===ir)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pn?n?i.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:a}}class Kf extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mn extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent($f)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zf extends hi{constructor(t,e){super();const n=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,h=null;const y=[],x=[],b=new Tt;let P=null;const A=new ke;A.layers.enable(1),A.viewport=new pe;const w=new ke;w.layers.enable(2),w.viewport=new pe;const B=[A,w],M=new Kf;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=y[H];return Y===void 0&&(Y=new Ka,y[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=y[H];return Y===void 0&&(Y=new Ka,y[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=y[H];return Y===void 0&&(Y=new Ka,y[H]=Y),Y.getHandSpace()};function G(H){const Y=x.indexOf(H.inputSource);if(Y===-1)return;const ot=y[Y];ot!==void 0&&(ot.update(H.inputSource,H.frame,c||o),ot.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",C);for(let H=0;H<y.length;H++){const Y=x[H];Y!==null&&(x[H]=null,y[H].disconnect(Y))}T=null,z=null,t.setRenderTarget(p),m=null,f=null,d=null,a=null,h=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){if(p=t.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(b),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,e,Y),a.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Un(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,ot=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=_.stencil?ci:Ln,ot=_.stencil?Pn:fn);const pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=new XRWebGLBinding(a,e),f=d.createProjectionLayer(pt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),h=new Un(f.textureWidth,f.textureHeight,{format:Ve,type:_n,depthTexture:new Uo(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Rt=t.properties.get(h);Rt.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),et.setContext(a),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function C(H){for(let Y=0;Y<H.removed.length;Y++){const ot=H.removed[Y],mt=x.indexOf(ot);mt>=0&&(x[mt]=null,y[mt].disconnect(ot))}for(let Y=0;Y<H.added.length;Y++){const ot=H.added[Y];let mt=x.indexOf(ot);if(mt===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=x.length){x.push(ot),mt=Rt;break}else if(x[Rt]===null){x[Rt]=ot,mt=Rt;break}if(mt===-1)break}const pt=y[mt];pt&&pt.connect(ot)}}const k=new L,V=new L;function j(H,Y,ot){k.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(ot.matrixWorld);const mt=k.distanceTo(V),pt=Y.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Pt=pt[14]/(pt[10]-1),St=pt[14]/(pt[10]+1),Gt=(pt[9]+1)/pt[5],U=(pt[9]-1)/pt[5],xe=(pt[8]-1)/pt[0],_t=(Rt[8]+1)/Rt[0],At=Pt*xe,ht=Pt*_t,Jt=mt/(-xe+_t),Ut=Jt*-xe;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(Jt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const E=Pt+Jt,v=St+Jt,N=At-Ut,Z=ht+(mt-Ut),$=Gt*St/v*E,J=U*St/v*E;H.projectionMatrix.makePerspective(N,Z,$,J,E,v),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;M.near=w.near=A.near=H.near,M.far=w.far=A.far=H.far,(T!==M.near||z!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far);const Y=H.parent,ot=M.cameras;W(M,Y);for(let mt=0;mt<ot.length;mt++)W(ot[mt],Y);ot.length===2?j(M,A,w):M.projectionMatrix.copy(A.projectionMatrix),X(H,M,Y)};function X(H,Y,ot){ot===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(ot.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=rs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let q=null;function tt(H,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){const ot=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let mt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let pt=0;pt<ot.length;pt++){const Rt=ot[pt];let Pt=null;if(m!==null)Pt=m.getViewport(Rt);else{const Gt=d.getViewSubImage(f,Rt);Pt=Gt.viewport,pt===0&&(t.setRenderTargetTextures(h,Gt.colorTexture,f.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(h))}let St=B[pt];St===void 0&&(St=new ke,St.layers.enable(pt),St.viewport=new pe,B[pt]=St),St.matrix.fromArray(Rt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Rt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(St)}}for(let ot=0;ot<y.length;ot++){const mt=x[ot],pt=y[ot];mt!==null&&pt!==void 0&&pt.update(mt,Y,c||o)}q&&q(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const et=new Lo;et.setAnimationLoop(tt),this.setAnimationLoop=function(H){q=H},this.dispose=function(){}}}function Jf(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ro(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function a(p,h,y,x,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&r(p,h)):h.isPointsMaterial?l(p,h,y,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===be&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===be&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=t.get(h).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*x,e(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function r(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=x*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),t.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===be&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const y=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Qf(i,t,e,n){let a={},s={},o=[];const r=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=a[y.id];b===void 0&&(g(y),b=u(y),a[y.id]=b,y.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(y,P);const A=t.render.frame;s[y.id]!==A&&(f(y),s[y.id]=A)}function u(y){const x=d();y.__bindingPointIndex=x;const b=i.createBuffer(),P=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function d(){for(let y=0;y<r;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=a[y.id],b=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,w=b.length;A<w;A++){const B=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,T=B.length;M<T;M++){const z=B[M];if(m(z,A,M,P)===!0){const G=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let C=0;for(let k=0;k<Q.length;k++){const V=Q[k],j=_(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+C,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,C),C+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,b,P){const A=y.value,w=x+"_"+b;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const B=P[w];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return P[w]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function g(y){const x=y.uniforms;let b=0;const P=16;for(let w=0,B=x.length;w<B;w++){const M=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,z=M.length;T<z;T++){const G=M[T],Q=Array.isArray(G.value)?G.value:[G.value];for(let C=0,k=Q.length;C<k;C++){const V=Q[C],j=_(V),W=b%P;W!==0&&P-W<j.boundary&&(b+=P-W),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=j.storage}}}const A=b%P;return A>0&&(b+=P-A),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(a[x.id]),delete a[x.id],delete s[x.id]}function h(){for(const y in a)i.deleteBuffer(a[y]);o=[],a={},s={}}return{bind:l,update:c,dispose:h}}class Bo{constructor(t={}){const{canvas:e=Yl(),context:n=null,depth:a=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=re,this._useLegacyLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const x=this;let b=!1,P=0,A=0,w=null,B=-1,M=null;const T=new pe,z=new pe;let G=null;const Q=new zt(0);let C=0,k=e.width,V=e.height,j=1,W=null,X=null;const q=new pe(0,0,k,V),tt=new pe(0,0,k,V);let et=!1;const H=new gs;let Y=!1,ot=!1,mt=null;const pt=new ne,Rt=new Tt,Pt=new L,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Gt(){return w===null?j:1}let U=n;function xe(S,D){for(let F=0;F<S.length;F++){const O=S[F],I=e.getContext(O,D);if(I!==null)return I}return null}try{const S={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hs}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),U=xe(D,S),U===null)throw xe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,At,ht,Jt,Ut,E,v,N,Z,$,J,dt,rt,ct,Mt,It,K,Wt,Bt,bt,gt,ut,Lt,Vt;function te(){_t=new ld(U),At=new nd(U,_t,t),_t.init(At),ut=new Yf(U,_t,At),ht=new jf(U,_t,At),Jt=new hd(U),Ut=new Df,E=new qf(U,_t,ht,Ut,At,ut,Jt),v=new ad(x),N=new od(x),Z=new xc(U,At),Lt=new td(U,_t,Z,At),$=new cd(U,Z,Jt,Lt),J=new md(U,$,Z,Jt),Bt=new pd(U,At,E),It=new id(Ut),dt=new Lf(x,v,N,_t,At,Lt,It),rt=new Jf(x,Ut),ct=new If,Mt=new zf(_t,At),Wt=new Qh(x,v,N,ht,J,f,l),K=new Xf(x,J,At),Vt=new Qf(U,Jt,At,ht),bt=new ed(U,_t,Jt,At),gt=new ud(U,_t,Jt,At),Jt.programs=dt.programs,x.capabilities=At,x.extensions=_t,x.properties=Ut,x.renderLists=ct,x.shadowMap=K,x.state=ht,x.info=Jt}te();const Ft=new Zf(x,U);this.xr=Ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(k,V,!1))},this.getSize=function(S){return S.set(k,V)},this.setSize=function(S,D,F=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,V=D,e.width=Math.floor(S*j),e.height=Math.floor(D*j),F===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(k*j,V*j).floor()},this.setDrawingBufferSize=function(S,D,F){k=S,V=D,j=F,e.width=Math.floor(S*F),e.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,D,F,O){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,D,F,O),ht.viewport(T.copy(q).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,D,F,O){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,D,F,O),ht.scissor(z.copy(tt).multiplyScalar(j).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){ht.setScissorTest(et=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(S=!0,D=!0,F=!0){let O=0;if(S){let I=!1;if(w!==null){const lt=w.texture.format;I=lt===go||lt===mo||lt===po}if(I){const lt=w.texture.type,ft=lt===_n||lt===fn||lt===ds||lt===Pn||lt===ho||lt===fo,xt=Wt.getClearColor(),Et=Wt.getClearAlpha(),Nt=xt.r,wt=xt.g,Ct=xt.b;ft?(m[0]=Nt,m[1]=wt,m[2]=Ct,m[3]=Et,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Nt,g[1]=wt,g[2]=Ct,g[3]=Et,U.clearBufferiv(U.COLOR,0,g))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT),F&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ct.dispose(),Mt.dispose(),Ut.dispose(),v.dispose(),N.dispose(),J.dispose(),Lt.dispose(),Vt.dispose(),dt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Me),Ft.removeEventListener("sessionend",Kt),mt&&(mt.dispose(),mt=null),Se.stop()};function nt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Jt.autoReset,D=K.enabled,F=K.autoUpdate,O=K.needsUpdate,I=K.type;te(),Jt.autoReset=S,K.enabled=D,K.autoUpdate=F,K.needsUpdate=O,K.type=I}function at(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function st(S){const D=S.target;D.removeEventListener("dispose",st),yt(D)}function yt(S){vt(S),Ut.remove(S)}function vt(S){const D=Ut.get(S).programs;D!==void 0&&(D.forEach(function(F){dt.releaseProgram(F)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,O,I,lt){D===null&&(D=St);const ft=I.isMesh&&I.matrixWorld.determinant()<0,xt=Wo(S,D,F,O,I);ht.setMaterial(O,ft);let Et=F.index,Nt=1;if(O.wireframe===!0){if(Et=$.getWireframeAttribute(F),Et===void 0)return;Nt=2}const wt=F.drawRange,Ct=F.attributes.position;let ie=wt.start*Nt,Le=(wt.start+wt.count)*Nt;lt!==null&&(ie=Math.max(ie,lt.start*Nt),Le=Math.min(Le,(lt.start+lt.count)*Nt)),Et!==null?(ie=Math.max(ie,0),Le=Math.min(Le,Et.count)):Ct!=null&&(ie=Math.max(ie,0),Le=Math.min(Le,Ct.count));const de=Le-ie;if(de<0||de===1/0)return;Lt.setup(I,O,xt,F,Et);let Ye,Qt=bt;if(Et!==null&&(Ye=Z.get(Et),Qt=gt,Qt.setIndex(Ye)),I.isMesh)O.wireframe===!0?(ht.setLineWidth(O.wireframeLinewidth*Gt()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(I.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),ht.setLineWidth(kt*Gt()),I.isLineSegments?Qt.setMode(U.LINES):I.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else I.isPoints?Qt.setMode(U.POINTS):I.isSprite&&Qt.setMode(U.TRIANGLES);if(I.isBatchedMesh)Qt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Qt.renderInstances(ie,de,I.count);else if(F.isInstancedBufferGeometry){const kt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ma=Math.min(F.instanceCount,kt);Qt.renderInstances(ie,de,ma)}else Qt.render(ie,de)};function qt(S,D,F){S.transparent===!0&&S.side===se&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,Ci(S,D,F),S.side=sn,S.needsUpdate=!0,Ci(S,D,F),S.side=se):Ci(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),p=Mt.get(F),p.init(),y.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(x._useLegacyLights);const O=new Set;return S.traverse(function(I){const lt=I.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const xt=lt[ft];qt(xt,F,I),O.add(xt)}else qt(lt,F,I),O.add(lt)}),y.pop(),p=null,O},this.compileAsync=function(S,D,F=null){const O=this.compile(S,D,F);return new Promise(I=>{function lt(){if(O.forEach(function(ft){Ut.get(ft).currentProgram.isReady()&&O.delete(ft)}),O.size===0){I(S);return}setTimeout(lt,10)}_t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Yt=null;function he(S){Yt&&Yt(S)}function Me(){Se.stop()}function Kt(){Se.start()}const Se=new Lo;Se.setAnimationLoop(he),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(S){Yt=S,Ft.setAnimationLoop(S),S===null?Se.stop():Se.start()},Ft.addEventListener("sessionstart",Me),Ft.addEventListener("sessionend",Kt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(D),D=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,w),p=Mt.get(S,y.length),p.init(),y.push(p),pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,Y=It.init(this.clippingPlanes,ot),_=ct.get(S,h.length),_.init(),h.push(_),Xe(S,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,X),this.info.render.frame++,Y===!0&&It.beginShadows();const F=p.state.shadowsArray;if(K.render(F,S,D),Y===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),Wt.render(_,S),p.setupLights(x._useLegacyLights),D.isArrayCamera){const O=D.cameras;for(let I=0,lt=O.length;I<lt;I++){const ft=O[I];ys(_,S,ft,ft.viewport)}}else ys(_,S,D);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,D),Lt.resetDefaultState(),B=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Xe(S,D,F,O){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){O&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const ft=J.update(S),xt=S.material;xt.visible&&_.push(S,ft,xt,F,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const ft=J.update(S),xt=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Pt.copy(ft.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(xt)){const Et=ft.groups;for(let Nt=0,wt=Et.length;Nt<wt;Nt++){const Ct=Et[Nt],ie=xt[Ct.materialIndex];ie&&ie.visible&&_.push(S,ft,ie,F,Pt.z,Ct)}}else xt.visible&&_.push(S,ft,xt,F,Pt.z,null)}}const lt=S.children;for(let ft=0,xt=lt.length;ft<xt;ft++)Xe(lt[ft],D,F,O)}function ys(S,D,F,O){const I=S.opaque,lt=S.transmissive,ft=S.transparent;p.setupLightsView(F),Y===!0&&It.setGlobalState(x.clippingPlanes,F),lt.length>0&&Vo(I,lt,D,F),O&&ht.viewport(T.copy(O)),I.length>0&&Ri(I,D,F),lt.length>0&&Ri(lt,D,F),ft.length>0&&Ri(ft,D,F),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Vo(S,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const lt=At.isWebGL2;mt===null&&(mt=new Un(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Ei:_n,minFilter:yi,samples:lt?4:0})),x.getDrawingBufferSize(Rt),lt?mt.setSize(Rt.x,Rt.y):mt.setSize(os(Rt.x),os(Rt.y));const ft=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(Q),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const xt=x.toneMapping;x.toneMapping=an,Ri(S,F,O),E.updateMultisampleRenderTarget(mt),E.updateRenderTargetMipmap(mt);let Et=!1;for(let Nt=0,wt=D.length;Nt<wt;Nt++){const Ct=D[Nt],ie=Ct.object,Le=Ct.geometry,de=Ct.material,Ye=Ct.group;if(de.side===se&&ie.layers.test(O.layers)){const Qt=de.side;de.side=be,de.needsUpdate=!0,Es(ie,F,O,Le,de,Ye),de.side=Qt,de.needsUpdate=!0,Et=!0}}Et===!0&&(E.updateMultisampleRenderTarget(mt),E.updateRenderTargetMipmap(mt)),x.setRenderTarget(ft),x.setClearColor(Q,C),x.toneMapping=xt}function Ri(S,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let I=0,lt=S.length;I<lt;I++){const ft=S[I],xt=ft.object,Et=ft.geometry,Nt=O===null?ft.material:O,wt=ft.group;xt.layers.test(F.layers)&&Es(xt,D,F,Et,Nt,wt)}}function Es(S,D,F,O,I,lt){S.onBeforeRender(x,D,F,O,I,lt),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(x,D,F,O,S,lt),I.transparent===!0&&I.side===se&&I.forceSinglePass===!1?(I.side=be,I.needsUpdate=!0,x.renderBufferDirect(F,D,O,I,S,lt),I.side=sn,I.needsUpdate=!0,x.renderBufferDirect(F,D,O,I,S,lt),I.side=se):x.renderBufferDirect(F,D,O,I,S,lt),S.onAfterRender(x,D,F,O,I,lt)}function Ci(S,D,F){D.isScene!==!0&&(D=St);const O=Ut.get(S),I=p.state.lights,lt=p.state.shadowsArray,ft=I.state.version,xt=dt.getParameters(S,I.state,lt,D,F),Et=dt.getProgramCacheKey(xt);let Nt=O.programs;O.environment=S.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||O.environment),Nt===void 0&&(S.addEventListener("dispose",st),Nt=new Map,O.programs=Nt);let wt=Nt.get(Et);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===ft)return bs(S,xt),wt}else xt.uniforms=dt.getUniforms(S),S.onBuild(F,xt,x),S.onBeforeCompile(xt,x),wt=dt.acquireProgram(xt,Et),Nt.set(Et,wt),O.uniforms=xt.uniforms;const Ct=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=It.uniform),bs(S,xt),O.needsLights=jo(S),O.lightsStateVersion=ft,O.needsLights&&(Ct.ambientLightColor.value=I.state.ambient,Ct.lightProbe.value=I.state.probe,Ct.directionalLights.value=I.state.directional,Ct.directionalLightShadows.value=I.state.directionalShadow,Ct.spotLights.value=I.state.spot,Ct.spotLightShadows.value=I.state.spotShadow,Ct.rectAreaLights.value=I.state.rectArea,Ct.ltc_1.value=I.state.rectAreaLTC1,Ct.ltc_2.value=I.state.rectAreaLTC2,Ct.pointLights.value=I.state.point,Ct.pointLightShadows.value=I.state.pointShadow,Ct.hemisphereLights.value=I.state.hemi,Ct.directionalShadowMap.value=I.state.directionalShadowMap,Ct.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ct.spotShadowMap.value=I.state.spotShadowMap,Ct.spotLightMatrix.value=I.state.spotLightMatrix,Ct.spotLightMap.value=I.state.spotLightMap,Ct.pointShadowMap.value=I.state.pointShadowMap,Ct.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function Ts(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=na.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function bs(S,D){const F=Ut.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Wo(S,D,F,O,I){D.isScene!==!0&&(D=St),E.resetTextureUnits();const lt=D.fog,ft=O.isMeshStandardMaterial?D.environment:null,xt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Et=(O.isMeshStandardMaterial?N:v).get(O.envMap||ft),Nt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ct=!!F.morphAttributes.position,ie=!!F.morphAttributes.normal,Le=!!F.morphAttributes.color;let de=an;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(de=x.toneMapping);const Ye=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qt=Ye!==void 0?Ye.length:0,kt=Ut.get(O),ma=p.state.lights;if(Y===!0&&(ot===!0||S!==M)){const Ie=S===M&&O.id===B;It.setState(O,S,Ie)}let ee=!1;O.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ma.state.version||kt.outputColorSpace!==xt||I.isBatchedMesh&&kt.batching===!1||!I.isBatchedMesh&&kt.batching===!0||I.isInstancedMesh&&kt.instancing===!1||!I.isInstancedMesh&&kt.instancing===!0||I.isSkinnedMesh&&kt.skinning===!1||!I.isSkinnedMesh&&kt.skinning===!0||I.isInstancedMesh&&kt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&kt.instancingColor===!1&&I.instanceColor!==null||kt.envMap!==Et||O.fog===!0&&kt.fog!==lt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==It.numPlanes||kt.numIntersection!==It.numIntersection)||kt.vertexAlphas!==Nt||kt.vertexTangents!==wt||kt.morphTargets!==Ct||kt.morphNormals!==ie||kt.morphColors!==Le||kt.toneMapping!==de||At.isWebGL2===!0&&kt.morphTargetsCount!==Qt)&&(ee=!0):(ee=!0,kt.__version=O.version);let xn=kt.currentProgram;ee===!0&&(xn=Ci(O,D,I));let As=!1,fi=!1,ga=!1;const me=xn.getUniforms(),Mn=kt.uniforms;if(ht.useProgram(xn.program)&&(As=!0,fi=!0,ga=!0),O.id!==B&&(B=O.id,fi=!0),As||M!==S){me.setValue(U,"projectionMatrix",S.projectionMatrix),me.setValue(U,"viewMatrix",S.matrixWorldInverse);const Ie=me.map.cameraPosition;Ie!==void 0&&Ie.setValue(U,Pt.setFromMatrixPosition(S.matrixWorld)),At.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&me.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,fi=!0,ga=!0)}if(I.isSkinnedMesh){me.setOptional(U,I,"bindMatrix"),me.setOptional(U,I,"bindMatrixInverse");const Ie=I.skeleton;Ie&&(At.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),me.setValue(U,"boneTexture",Ie.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(me.setOptional(U,I,"batchingTexture"),me.setValue(U,"batchingTexture",I._matricesTexture,E));const _a=F.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0&&At.isWebGL2===!0)&&Bt.update(I,F,xn),(fi||kt.receiveShadow!==I.receiveShadow)&&(kt.receiveShadow=I.receiveShadow,me.setValue(U,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Mn.envMap.value=Et,Mn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),fi&&(me.setValue(U,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Xo(Mn,ga),lt&&O.fog===!0&&rt.refreshFogUniforms(Mn,lt),rt.refreshMaterialUniforms(Mn,O,j,V,mt),na.upload(U,Ts(kt),Mn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(na.upload(U,Ts(kt),Mn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&me.setValue(U,"center",I.center),me.setValue(U,"modelViewMatrix",I.modelViewMatrix),me.setValue(U,"normalMatrix",I.normalMatrix),me.setValue(U,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ie=O.uniformsGroups;for(let va=0,qo=Ie.length;va<qo;va++)if(At.isWebGL2){const ws=Ie[va];Vt.update(ws,xn),Vt.bind(ws,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function Xo(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function jo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,F){Ut.get(S.texture).__webglTexture=D,Ut.get(S.depthTexture).__webglTexture=F;const O=Ut.get(S);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Ut.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){w=S,P=D,A=F;let O=!0,I=null,lt=!1,ft=!1;if(S){const Et=Ut.get(S);Et.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(U.FRAMEBUFFER,null),O=!1):Et.__webglFramebuffer===void 0?E.setupRenderTarget(S):Et.__hasExternalTextures&&E.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);const Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ft=!0);const wt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?I=wt[D][F]:I=wt[D],lt=!0):At.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?I=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?I=wt[F]:I=wt,T.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else T.copy(q).multiplyScalar(j).floor(),z.copy(tt).multiplyScalar(j).floor(),G=et;if(ht.bindFramebuffer(U.FRAMEBUFFER,I)&&At.drawBuffers&&O&&ht.drawBuffers(S,I),ht.viewport(T),ht.scissor(z),ht.setScissorTest(G),lt){const Et=Ut.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,F)}else if(ft){const Et=Ut.get(S.texture),Nt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,F||0,Nt)}B=-1},this.readRenderTargetPixels=function(S,D,F,O,I,lt,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){ht.bindFramebuffer(U.FRAMEBUFFER,xt);try{const Et=S.texture,Nt=Et.format,wt=Et.type;if(Nt!==Ve&&ut.convert(Nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=wt===Ei&&(_t.has("EXT_color_buffer_half_float")||At.isWebGL2&&_t.has("EXT_color_buffer_float"));if(wt!==_n&&ut.convert(wt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(wt===pn&&(At.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-O&&F>=0&&F<=S.height-I&&U.readPixels(D,F,O,I,ut.convert(Nt),ut.convert(wt),lt)}finally{const Et=w!==null?Ut.get(w).__webglFramebuffer:null;ht.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(S,D,F=0){const O=Math.pow(2,-F),I=Math.floor(D.image.width*O),lt=Math.floor(D.image.height*O);E.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,S.x,S.y,I,lt),ht.unbindTexture()},this.copyTextureToTexture=function(S,D,F,O=0){const I=D.image.width,lt=D.image.height,ft=ut.convert(F.format),xt=ut.convert(F.type);E.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,S.x,S.y,I,lt,ft,xt,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,ft,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,O,S.x,S.y,ft,xt,D.image),O===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,O,I=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=S.max.x-S.min.x+1,ft=S.max.y-S.min.y+1,xt=S.max.z-S.min.z+1,Et=ut.convert(O.format),Nt=ut.convert(O.type);let wt;if(O.isData3DTexture)E.setTexture3D(O,0),wt=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)E.setTexture2DArray(O,0),wt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Ct=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Le=U.getParameter(U.UNPACK_SKIP_PIXELS),de=U.getParameter(U.UNPACK_SKIP_ROWS),Ye=U.getParameter(U.UNPACK_SKIP_IMAGES),Qt=F.isCompressedTexture?F.mipmaps[I]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Qt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(wt,I,D.x,D.y,D.z,lt,ft,xt,Et,Nt,Qt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(wt,I,D.x,D.y,D.z,lt,ft,xt,Et,Qt.data)):U.texSubImage3D(wt,I,D.x,D.y,D.z,lt,ft,xt,Et,Nt,Qt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,de),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye),I===0&&O.generateMipmaps&&U.generateMipmap(wt),ht.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),ht.unbindTexture()},this.resetState=function(){P=0,A=0,w=null,ht.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fs?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===re?Dn:vo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Dn?re:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class tp extends Bo{}tp.prototype.isWebGL1Renderer=!0;class ep extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class np{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=as,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=e.array[n+a];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ye=new L;class la{constructor(t,e,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),a=jt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=a,this}setXYZW(t,e,n,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),a=jt(a,this.array),s=jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[a+s])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new la(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cs extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Jn;const vi=new L,Qn=new L,ti=new L,ei=new Tt,xi=new Tt,zo=new ne,Ji=new L,Mi=new L,Qi=new L,qr=new Tt,$a=new Tt,Yr=new Tt;class Kr extends le{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",Jn===void 0){Jn=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new np(e,5);Jn.setIndex([0,1,2,0,2,3]),Jn.setAttribute("position",new la(n,3,0,!1)),Jn.setAttribute("uv",new la(n,2,3,!1))}this.geometry=Jn,this.material=t,this.center=new Tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qn.setFromMatrixScale(this.matrixWorld),zo.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qn.multiplyScalar(-ti.z);const n=this.material.rotation;let a,s;n!==0&&(s=Math.cos(n),a=Math.sin(n));const o=this.center;ta(Ji.set(-.5,-.5,0),ti,o,Qn,a,s),ta(Mi.set(.5,-.5,0),ti,o,Qn,a,s),ta(Qi.set(.5,.5,0),ti,o,Qn,a,s),qr.set(0,0),$a.set(1,0),Yr.set(1,1);let r=t.ray.intersectTriangle(Ji,Mi,Qi,!1,vi);if(r===null&&(ta(Mi.set(-.5,.5,0),ti,o,Qn,a,s),$a.set(0,1),r=t.ray.intersectTriangle(Ji,Qi,Mi,!1,vi),r===null))return;const l=t.ray.origin.distanceTo(vi);l<t.near||l>t.far||e.push({distance:l,point:vi.clone(),uv:Fe.getInterpolation(vi,Ji,Mi,Qi,qr,$a,Yr,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ta(i,t,e,n,a,s){ei.subVectors(i,e).addScalar(.5).multiply(n),a!==void 0?(xi.x=s*ei.x-a*ei.y,xi.y=a*ei.x+s*ei.y):xi.copy(ei),i.copy(t),i.x+=xi.x,i.y+=xi.y,i.applyMatrix4(zo)}class Go extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $r=new L,Zr=new L,Jr=new ne,Za=new ps,ea=new ha;class ip extends le{constructor(t=new Pe,e=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let a=1,s=e.count;a<s;a++)$r.fromBufferAttribute(e,a-1),Zr.fromBufferAttribute(e,a),n[a]=n[a-1],n[a]+=$r.distanceTo(Zr);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(a),ea.radius+=s,t.ray.intersectsSphere(ea)===!1)return;Jr.copy(a).invert(),Za.copy(t.ray).applyMatrix4(Jr);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new L,u=new L,d=new L,f=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const h=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=h,b=y-1;x<b;x+=m){const P=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,A),Za.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(f);B<t.near||B>t.far||e.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=h,b=y-1;x<b;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Za.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}class Ho extends Ae{constructor(t,e,n,a,s,o,r,l,c){super(t,e,n,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn extends Pe{constructor(t=1,e=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:a},e=Math.max(3,e);const s=[],o=[],r=[],l=[],c=new L,u=new Tt;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*a;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ai extends Pe{constructor(t=1,e=1,n=1,a=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const u=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let h=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(m,2));function y(){const b=new L,P=new L;let A=0;const w=(e-t)/n;for(let B=0;B<=s;B++){const M=[],T=B/s,z=T*(e-t)+t;for(let G=0;G<=a;G++){const Q=G/a,C=Q*l+r,k=Math.sin(C),V=Math.cos(C);P.x=z*k,P.y=-T*n+p,P.z=z*V,d.push(P.x,P.y,P.z),b.set(k,w,V).normalize(),f.push(b.x,b.y,b.z),m.push(Q,1-T),M.push(g++)}_.push(M)}for(let B=0;B<a;B++)for(let M=0;M<s;M++){const T=_[M][B],z=_[M+1][B],G=_[M+1][B+1],Q=_[M][B+1];u.push(T,z,Q),u.push(z,G,Q),A+=6}c.addGroup(h,A,0),h+=A}function x(b){const P=g,A=new Tt,w=new L;let B=0;const M=b===!0?t:e,T=b===!0?1:-1;for(let G=1;G<=a;G++)d.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const z=g;for(let G=0;G<=a;G++){const C=G/a*l+r,k=Math.cos(C),V=Math.sin(C);w.x=M*V,w.y=p*T,w.z=M*k,d.push(w.x,w.y,w.z),f.push(0,T,0),A.x=k*.5+.5,A.y=V*.5*T+.5,m.push(A.x,A.y),g++}for(let G=0;G<a;G++){const Q=P+G,C=z+G;b===!0?u.push(C,C+1,Q):u.push(C+1,C,Q),B+=3}c.addGroup(h,B,b===!0?1:2),h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends Pe{constructor(t=[],e=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:a};const s=[],o=[];r(a),c(n),u(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function r(y){const x=new L,b=new L,P=new L;for(let A=0;A<e.length;A+=3)m(e[A+0],x),m(e[A+1],b),m(e[A+2],P),l(x,b,P,y)}function l(y,x,b,P){const A=P+1,w=[];for(let B=0;B<=A;B++){w[B]=[];const M=y.clone().lerp(b,B/A),T=x.clone().lerp(b,B/A),z=A-B;for(let G=0;G<=z;G++)G===0&&B===A?w[B][G]=M:w[B][G]=M.clone().lerp(T,G/z)}for(let B=0;B<A;B++)for(let M=0;M<2*(A-B)-1;M++){const T=Math.floor(M/2);M%2===0?(f(w[B][T+1]),f(w[B+1][T]),f(w[B][T])):(f(w[B][T+1]),f(w[B+1][T+1]),f(w[B+1][T]))}}function c(y){const x=new L;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(y),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function u(){const y=new L;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const b=p(y)/2/Math.PI+.5,P=h(y)/Math.PI+.5;o.push(b,1-P)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const x=o[y+0],b=o[y+2],P=o[y+4],A=Math.max(x,b,P),w=Math.min(x,b,P);A>.9&&w<.1&&(x<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function m(y,x){const b=y*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){const y=new L,x=new L,b=new L,P=new L,A=new Tt,w=new Tt,B=new Tt;for(let M=0,T=0;M<s.length;M+=9,T+=6){y.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),b.set(s[M+6],s[M+7],s[M+8]),A.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),B.set(o[T+4],o[T+5]),P.copy(y).add(x).add(b).divideScalar(3);const z=p(P);_(A,T+0,y,z),_(w,T+2,x,z),_(B,T+4,b,z)}}function _(y,x,b,P){P<0&&y.x===1&&(o[x]=y.x-1),b.x===0&&b.z===0&&(o[x]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.vertices,t.indices,t.radius,t.details)}}class xs extends vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,a=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-n,0,-a,n,0,a,-n,0,a,n,-a,-n,0,-a,n,0,a,-n,0,a,n,0,-n,0,-a,n,0,-a,-n,0,a,n,0,a],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class pa extends Pe{constructor(t=.5,e=1,n=32,a=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:a,thetaStart:s,thetaLength:o},n=Math.max(3,n),a=Math.max(1,a);const r=[],l=[],c=[],u=[];let d=t;const f=(e-t)/a,m=new L,g=new Tt;for(let _=0;_<=a;_++){for(let p=0;p<=n;p++){const h=s+p/n*o;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<a;_++){const p=_*(n+1);for(let h=0;h<n;h++){const y=h+p,x=y,b=y+n+1,P=y+n+2,A=y+1;r.push(x,b,A),r.push(b,P,A)}}this.setIndex(r),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ve extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Qr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ap{constructor(t,e,n){const a=this;let s=!1,o=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){r++,s===!1&&a.onStart!==void 0&&a.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,a.onProgress!==void 0&&a.onProgress(u,o,r),o===r&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const sp=new ap;class Ms{constructor(t){this.manager=t!==void 0?t:sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,s){n.load(t,a,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";class rp extends Ms{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Qr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const r=Ti("img");function l(){u(),Qr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),a&&a(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}}class op extends Ms{constructor(t){super(t)}load(t,e,n,a){const s=new Ae,o=new rp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},n,a),s}}class Ss extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class lp extends Ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new ne,to=new L,eo=new L;class cp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;to.setFromMatrixPosition(t.matrixWorld),e.position.copy(to),eo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eo),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class up extends cp{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends Ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dp extends Ss{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=no(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=no();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function no(){return(typeof performance>"u"?Date:performance).now()}class io{constructor(t,e,n=0,a=1/0){this.ray=new ps(t,e),this.near=n,this.far=a,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return us(t,this,n,e),n.sort(ao),n}intersectObjects(t,e=!0,n=[]){for(let a=0,s=t.length;a<s;a++)us(t[a],this,n,e);return n.sort(ao),n}}function ao(i,t){return i.distance-t.distance}function us(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)us(a[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);class pp{constructor(t){this.scene=t,this.terrainMeshes=[],this.interactiveNPCs=[],this.interactiveObjects=[],this.animatedObjects=[],this.textureLoader=new op}build(){this.setupLighting(),this.setupSky(),this.setupGrounds(),this.setupPaths(),this.setupLandmarks(),this.setupTreesAndDecorations(),this.setupSignposts(),this.setupActiveWaypoint()}setupLighting(){const t=new lp(14742270,9263948,1.3);t.position.set(0,50,0),this.scene.add(t);const e=new hp(16774064,1.6);e.position.set(15,25,10),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-5e-4,this.scene.add(e);const n=new dp(16775405,.4);this.scene.add(n)}setupSky(){const t=this.textureLoader.load("./assets/sky.png");t.wrapS=dn,t.repeat.set(2,1);const e=new ai(60,60,40,32,1,!0),n=new je({map:t,side:be,fog:!1}),a=new Ht(e,n);a.position.y=15,this.scene.add(a)}setupGrounds(){const t=this.textureLoader.load("./assets/ground-plaza.png"),e=new Cn(8.5,32),n=new ve({map:t,roughness:.9,metalness:.05}),a=new Ht(e,n);a.rotation.x=-Math.PI/2,a.position.set(0,.02,0),a.name="Ground_Plaza",this.scene.add(a),this.terrainMeshes.push(a);const s=this.textureLoader.load("./assets/ground-zone1.png"),o=new Cn(6.5,32),r=new ve({map:s,roughness:.9}),l=new Ht(o,r);l.rotation.x=-Math.PI/2,l.position.set(0,.03,-18),l.name="Ground_Zone1",this.scene.add(l),this.terrainMeshes.push(l);const c=this.textureLoader.load("./assets/ground-zone2.png"),u=new Cn(6.5,32),d=new ve({map:c,roughness:.9}),f=new Ht(u,d);f.rotation.x=-Math.PI/2,f.position.set(-16,.03,10),f.name="Ground_Zone2",this.scene.add(f),this.terrainMeshes.push(f);const m=this.textureLoader.load("./assets/ground-zone3.png"),g=new Cn(6.5,32),_=new ve({map:m,roughness:.9}),p=new Ht(g,_);p.rotation.x=-Math.PI/2,p.position.set(16,.03,10),p.name="Ground_Zone3",this.scene.add(p),this.terrainMeshes.push(p);const h=this.textureLoader.load("./assets/ground-zone1.png");h.wrapS=dn,h.wrapT=dn,h.repeat.set(12,12);const y=new Cn(55,48),x=new ve({map:h,roughness:.95,metalness:0}),b=new Ht(y,x);b.rotation.x=-Math.PI/2,b.position.set(0,0,0),b.name="Ground_MainLawn",this.scene.add(b),this.terrainMeshes.push(b)}setupPaths(){const t=this.textureLoader.load("./assets/ground-zone2.png");t.wrapS=dn,t.wrapT=dn,t.repeat.set(2,6);const e=(n,a,s,o,r=3)=>{const l=s-n,c=o-a,u=Math.sqrt(l*l+c*c),d=Math.atan2(l,c),f=new we(r,u),m=new ve({map:t,roughness:.85}),g=new Ht(f,m);g.rotation.x=-Math.PI/2,g.rotation.z=-d,g.position.set((n+s)/2,.025,(a+o)/2),g.name=`Ground_Path_${n}_${a}`,this.scene.add(g),this.terrainMeshes.push(g)};e(0,-6,0,-14,3.2),e(-5,4,-13,8,3.2),e(5,4,13,8,3.2)}setupLandmarks(){const t=this.textureLoader.load("./assets/landmark-sundial.png"),e=new we(4.5,4.5),n=new ve({map:t,transparent:!0,side:se}),a=new Ht(e,n);a.position.set(0,2.3,-2.5),a.name="Landmark_Sundial",this.scene.add(a);const s=new ai(1.4,1.6,.9,16),o=new ve({color:9263948,roughness:.7}),r=new Ht(s,o);r.position.set(0,.45,0),this.scene.add(r);const l=this.textureLoader.load("./assets/icon-crystal.png"),c=new cs({map:l,transparent:!0});this.centralCrystal=new Kr(c),this.centralCrystal.scale.set(1.4,1.4,1.4),this.centralCrystal.position.set(0,1.6,0),this.centralCrystal.name="Central_Crystal",this.scene.add(this.centralCrystal),this.animatedObjects.push({type:"crystal_spin",obj:this.centralCrystal});const u=new ve({map:t,transparent:!0,side:se}),d=new Ht(new we(5,5),u);d.position.set(0,2.5,-23),this.scene.add(d);const f=this.textureLoader.load("./assets/landmark-speed.png"),m=new Ht(new we(4,7),new ve({map:f,transparent:!0,side:se}));m.position.set(-20,3.5,13),m.rotation.y=Math.PI/4,this.scene.add(m);const g=this.textureLoader.load("./assets/landmark-grid.png"),_=new Ht(new we(6,5),new ve({map:g,transparent:!0,side:se}));_.position.set(20,2.5,13),_.rotation.y=-Math.PI/4,this.scene.add(_)}setupTreesAndDecorations(){const t=new ve({color:7294519,roughness:.9}),e=new ve({color:5152573,roughness:.8}),n=new ve({color:3715072,roughness:.8}),a=(o,r,l=1,c=e)=>{const u=new mn,d=new ai(.25*l,.4*l,2.5*l,8),f=new Ht(d,t);f.position.y=2.5*l/2,f.castShadow=!0,u.add(f);const m=new xs(1.6*l,1),g=new Ht(m,c);g.position.y=2.8*l,g.castShadow=!0,u.add(g),u.position.set(o,0,r),this.scene.add(u)};[[-10,-8],[10,-8],[-8,-22],[8,-22],[-22,2],[-22,18],[22,2],[22,18],[-5,18],[5,18],[-14,-14],[14,-14]].forEach(([o,r],l)=>{a(o,r,1+l%3*.25,l%2===0?e:n)})}createSignTexture(t,e="#FFF8ED",n="#264653",a="#8D5B4C",s=512,o=128){const r=document.createElement("canvas");r.width=s,r.height=o;const l=r.getContext("2d");l.fillStyle=a,l.beginPath(),l.roundRect(4,4,s-8,o-8,14),l.fill(),l.fillStyle=e,l.beginPath(),l.roundRect(10,10,s-20,o-20,10),l.fill(),l.font='bold 26px "Segoe UI", Arial, sans-serif',l.fillStyle=n,l.textAlign="center",l.textBaseline="middle",l.fillText(t,s/2,o/2);const c=new Ho(r);return c.colorSpace=re,c}setupSignposts(){const t=new mn;t.position.set(0,0,3.5);const e=new ai(.12,.15,2.8,8),n=new ve({color:9263948,roughness:.9}),a=new Ht(e,n);a.position.y=1.4,t.add(a);const s=this.createSignTexture("⬆ 1. Arsitek Maya (Desimal)","#FFD166","#264653"),o=new Ht(new we(1.6,.4),new je({map:s,side:se}));o.position.set(0,2.3,.15),t.add(o);const r=this.createSignTexture("⬅ 2. Kapten Bayu (ETA)","#2E86AB","#FFFFFF"),l=new Ht(new we(1.5,.38),new je({map:r,side:se}));l.position.set(-.35,1.85,.05),l.rotation.y=Math.PI/6,t.add(l);const c=this.createSignTexture("➡ 3. Insinyur Tari (Jadwal)","#4E9F3D","#FFFFFF"),u=new Ht(new we(1.5,.38),new je({map:c,side:se}));u.position.set(.35,1.4,-.05),u.rotation.y=-Math.PI/6,t.add(u),this.scene.add(t);const d=(f,m,g,_,p=0)=>{const h=this.createSignTexture(f,"#FFF8ED","#1D3557","#8D5B4C",640,120),y=new Ht(new we(2.4,.48),new je({map:h,side:se}));y.position.set(m,g,_),y.rotation.y=p,this.scene.add(y)};d("STASIUN 1: ARSITEK MAYA",0,3.4,-18,0),d("STASIUN 2: KAPTEN BAYU",-16,3.4,10,Math.PI/4),d("STASIUN 3: INSINYUR TARI",16,3.4,10,-Math.PI/4)}setupActiveWaypoint(){const t=new pa(.8,1.3,32),e=new je({color:16765286,transparent:!0,opacity:.85,side:se});this.waypointRing=new Ht(t,e),this.waypointRing.rotation.x=-Math.PI/2,this.waypointRing.position.set(0,.05,-18),this.scene.add(this.waypointRing),this.animatedObjects.push({type:"waypoint_pulse",ring:this.waypointRing})}setWaypoint(t,e){this.waypointRing&&this.waypointRing.position.set(t,.05,e)}createNPC(t){const e=new mn;e.position.set(t.position[0],t.position[1],t.position[2]),e.rotation.y=t.rotationY||0,e.name=`NPC_Group_${t.id}`;const n=this.textureLoader.load(t.sprite),a=new ve({map:n,transparent:!0,alphaTest:.1,roughness:.8,side:se}),s=new Ht(new we(1.8,2.2),a);s.position.y=1.1,s.name=`NPC_Body_${t.id}`,e.add(s);const o=this.textureLoader.load("./assets/icon-quest.png"),r=new cs({map:o,transparent:!0}),l=new Kr(r);return l.scale.set(.65,.65,.65),l.position.set(0,2.65,0),l.name=`NPC_QuestIcon_${t.id}`,e.add(l),s.userData={npcId:t.id,npcData:t},l.userData={npcId:t.id,npcData:t},this.interactiveNPCs.push(s),this.interactiveNPCs.push(l),this.animatedObjects.push({type:"npc_idle",body:s,icon:l,initialY:2.65,seed:Math.random()*10}),this.scene.add(e),e}updateAnimations(t){for(const e of this.animatedObjects)if(e.type==="npc_idle"){const n=1+Math.sin(t*2.5+e.seed)*.02;e.body.scale.set(1,n,1),e.icon.position.y=e.initialY+Math.sin(t*3+e.seed)*.08}else if(e.type==="crystal_spin")e.obj.position.y=1.6+Math.sin(t*2)*.1;else if(e.type==="waypoint_pulse"){const n=1+Math.sin(t*3.5)*.18;e.ring.scale.set(n,n,n)}}}class mp{constructor(){this.ctx=null,this.isMuted=!1,this.bgmPlaying=!1,this.bgmTimer=null,this.bgmGainNode=null,this.sfxGainNode=null,this.bgmStep=0,this.tempo=92,this.secondsPerBeat=60/this.tempo}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.sfxGainNode=this.ctx.createGain(),this.sfxGainNode.gain.setValueAtTime(.85,this.ctx.currentTime),this.sfxGainNode.connect(this.ctx.destination),this.bgmGainNode=this.ctx.createGain(),this.bgmGainNode.gain.setValueAtTime(.08,this.ctx.currentTime),this.bgmGainNode.connect(this.ctx.destination))}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),!this.bgmPlaying&&this.ctx&&!this.isMuted&&this.startBGM()}toggleMute(){var t,e,n,a;if(this.isMuted=!this.isMuted,this.ctx){const s=this.ctx.currentTime;this.isMuted?((t=this.bgmGainNode)==null||t.gain.setTargetAtTime(0,s,.05),(e=this.sfxGainNode)==null||e.gain.setTargetAtTime(0,s,.05)):((n=this.bgmGainNode)==null||n.gain.setTargetAtTime(.08,s,.1),(a=this.sfxGainNode)==null||a.gain.setTargetAtTime(.85,s,.1),this.bgmPlaying||this.startBGM())}return this.isMuted}startBGM(){if(this.bgmPlaying||!this.ctx)return;this.bgmPlaying=!0,this.bgmStep=0;const t=[{root:130.81,notes:[261.63,329.63,392,493.88,523.25,659.25]},{root:110,notes:[220,261.63,329.63,392,440,523.25]},{root:87.31,notes:[174.61,220,261.63,329.63,349.23,440]},{root:98,notes:[196,246.94,293.66,349.23,392,493.88]}],e=[0,2,4,3,1,3,5,2],n=()=>{if(!this.bgmPlaying||this.isMuted||!this.ctx)return;const a=this.ctx.currentTime,s=Math.floor(this.bgmStep/8)%t.length,o=this.bgmStep%8,r=t[s];o===0&&this.synthesizeNote(r.root,a,1.8,"sine",.12,!0);const l=r.notes[e[o]%r.notes.length];this.synthesizeNote(l,a,.45,"triangle",.08,!1),o%2===0&&this.synthesizeTickTock(a,o%4===0?1200:800),this.bgmStep++;const c=this.secondsPerBeat/2*1e3;this.bgmTimer=setTimeout(n,c)};n()}synthesizeNote(t,e,n,a,s,o=!1){try{const r=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();r.type=a,r.frequency.setValueAtTime(t,e),c.type="lowpass",c.frequency.setValueAtTime(o?350:1800,e),l.gain.setValueAtTime(.001,e),l.gain.linearRampToValueAtTime(s,e+.03),l.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(c),c.connect(l),l.connect(this.bgmGainNode),r.start(e),r.stop(e+n+.05)}catch{}}synthesizeTickTock(t,e){try{const n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,t),n.frequency.exponentialRampToValueAtTime(100,t+.025),a.gain.setValueAtTime(.015,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.025),n.connect(a),a.connect(this.bgmGainNode),n.start(t),n.stop(t+.03)}catch{}}playClick(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(600,t),e.frequency.exponentialRampToValueAtTime(920,t+.05),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.055)}catch{}}playButtonHover(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,t),e.frequency.exponentialRampToValueAtTime(800,t+.02),n.gain.setValueAtTime(.035,t),n.gain.exponentialRampToValueAtTime(.001,t+.02),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.025)}catch{}}playStep(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(150,t),e.frequency.exponentialRampToValueAtTime(55,t+.08),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.085)}catch{}}playPanelOpen(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime;[392,523.25,659.25].forEach((n,a)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t+a*.04),o.gain.setValueAtTime(.08,t+a*.04),o.gain.exponentialRampToValueAtTime(.001,t+a*.04+.16),s.connect(o),o.connect(this.sfxGainNode),s.start(t+a*.04),s.stop(t+a*.04+.17)})}catch{}}playPanelClose(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(260,t+.07),n.gain.setValueAtTime(.1,t),n.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.075)}catch{}}playSuccess(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,a)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,t+a*.08),o.gain.setValueAtTime(.2,t+a*.08),o.gain.exponentialRampToValueAtTime(.001,t+a*.08+.3),s.connect(o),o.connect(this.sfxGainNode),s.start(t+a*.08),s.stop(t+a*.08+.35)})}catch{}}playCrystalCollect(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51,1567.98].forEach((n,a)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t+a*.06),o.gain.setValueAtTime(.18,t+a*.06),o.gain.exponentialRampToValueAtTime(.001,t+a*.06+.4),s.connect(o),o.connect(this.sfxGainNode),s.start(t+a*.06),s.stop(t+a*.06+.45)})}catch{}}playWrongSoft(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(260,t),e.frequency.exponentialRampToValueAtTime(190,t+.22),n.gain.setValueAtTime(.14,t),n.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.25)}catch{}}playAdjustTick(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(450,t+.035),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.035),e.connect(n),n.connect(this.sfxGainNode),e.start(t),e.stop(t+.04)}catch{}}playFanfare(){if(!(this.isMuted||!this.ctx))try{const t=this.ctx.currentTime;[{f:523.25,d:.14,t:0},{f:523.25,d:.14,t:.15},{f:523.25,d:.14,t:.3},{f:659.25,d:.28,t:.45},{f:587.33,d:.14,t:.75},{f:659.25,d:.14,t:.9},{f:783.99,d:.55,t:1.05},{f:1046.5,d:.8,t:1.65}].forEach(n=>{const a=this.ctx.createOscillator(),s=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(n.f,t+n.t),s.gain.setValueAtTime(.22,t+n.t),s.gain.exponentialRampToValueAtTime(.001,t+n.t+n.d),a.connect(s),s.connect(this.sfxGainNode),a.start(t+n.t),a.stop(t+n.t+n.d+.05)})}catch{}}}const Zt=new mp;class gp{constructor(t,e,n,a){this.camera=t,this.scene=e,this.renderer=n,this.terrainMeshes=a,this.dolly=new mn,this.dolly.name="DollyRig",this.dolly.position.set(0,0,5),this.scene.add(this.dolly),this.dolly.add(this.camera),this.camera.position.set(0,1.6,0),this.isMoving=!1,this.speed=3.6,this.startPos=new L,this.targetPos=new L,this.moveProgress=0,this.moveDuration=0,this.stepAudioTimer=0,this.setupTapRipple(),this.yaw=0,this.pitch=0,this.isPointerDown=!1,this.lastPointerX=0,this.lastPointerY=0,this.pointerMovedDist=0,this.isVR=!1,this.controllers=[],this.setupWebXRControllers(),this.keys={KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1},this.setupKeyboard()}setupTapRipple(){const t=new pa(.15,.45,32),e=new je({color:16765286,transparent:!0,opacity:0,side:se});this.rippleMesh=new Ht(t,e),this.rippleMesh.rotation.x=-Math.PI/2,this.rippleMesh.position.y=.04,this.rippleMesh.visible=!1,this.scene.add(this.rippleMesh),this.rippleTime=0,this.rippleActive=!1}triggerRipple(t,e){this.rippleMesh.position.set(t,.04,e),this.rippleMesh.scale.set(.2,.2,.2),this.rippleMesh.material.opacity=.9,this.rippleMesh.visible=!0,this.rippleTime=0,this.rippleActive=!0}updateRipple(t){if(!this.rippleActive)return;this.rippleTime+=t;const e=this.rippleTime/.6;if(e>=1)this.rippleActive=!1,this.rippleMesh.visible=!1;else{const n=.2+e*1.8;this.rippleMesh.scale.set(n,n,n),this.rippleMesh.material.opacity=.9*(1-e)}}setupKeyboard(){window.addEventListener("keydown",t=>{this.keys.hasOwnProperty(t.code)&&(this.keys[t.code]=!0)}),window.addEventListener("keyup",t=>{this.keys.hasOwnProperty(t.code)&&(this.keys[t.code]=!1)})}setupWebXRControllers(){for(let t=0;t<2;t++){const e=this.renderer.xr.getController(t);this.dolly.add(e);const n=new Pe().setFromPoints([new L(0,0,0),new L(0,0,-5)]),a=new Go({color:16765286,transparent:!0,opacity:.75}),s=new ip(n,a);s.name="VR_Pointer_Beam",e.add(s),this.controllers.push(e)}}moveToPosition(t,e){this.startPos.copy(this.dolly.position),this.targetPos.set(t,0,e);const n=this.startPos.distanceTo(this.targetPos);n<.1||(this.moveDuration=n/this.speed,this.moveProgress=0,this.isMoving=!0,this.stepAudioTimer=0,this.triggerRipple(t,e))}update(t){if(this.updateRipple(t),this.isMoving){this.moveProgress+=t/this.moveDuration;let a=Math.min(1,this.moveProgress),s=a<.5?2*a*a:-1+(4-2*a)*a;this.dolly.position.lerpVectors(this.startPos,this.targetPos,s),this.stepAudioTimer+=t,this.stepAudioTimer>=.35&&(Zt.playStep(),this.stepAudioTimer=0),this.moveProgress>=1&&(this.dolly.position.copy(this.targetPos),this.isMoving=!1)}let e=0,n=0;if((this.keys.KeyW||this.keys.ArrowUp)&&(n-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1),e!==0||n!==0){const a=Math.sqrt(e*e+n*n),s=new L(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=new L().addScaledVector(s,-n/a).addScaledVector(o,e/a);this.dolly.position.addScaledVector(r,this.speed*t),this.stepAudioTimer+=t,this.stepAudioTimer>=.35&&(Zt.playStep(),this.stepAudioTimer=0)}if(this.renderer.xr.isPresenting){const a=this.renderer.xr.getSession();if(a&&a.inputSources){for(const s of a.inputSources)if(s.gamepad&&s.gamepad.axes){const o=s.gamepad.axes,r=o.length>3?o[3]:o[1],l=o.length>2?o[2]:o[0];if(r<-.45){const c=new L;this.camera.getWorldDirection(c),c.y=0,c.normalize(),this.dolly.position.addScaledVector(c,this.speed*t),this.stepAudioTimer+=t,this.stepAudioTimer>=.35&&(Zt.playStep(),this.stepAudioTimer=0)}else if(r>.45){const c=new L;this.camera.getWorldDirection(c),c.y=0,c.normalize(),this.dolly.position.addScaledVector(c,-this.speed*.6*t)}Math.abs(l)>.7&&(this.dolly.rotation.y-=Math.sign(l)*t*1.5)}}}}onPointerDown(t,e){this.isPointerDown=!0,this.lastPointerX=t,this.lastPointerY=e,this.pointerMovedDist=0}onPointerMove(t,e){if(!this.isPointerDown)return;const n=t-this.lastPointerX,a=e-this.lastPointerY;this.pointerMovedDist+=Math.abs(n)+Math.abs(a),this.lastPointerX=t,this.lastPointerY=e,this.yaw-=n*.0035,this.pitch-=a*.0025,this.pitch=Math.max(-Math.PI/3,Math.min(Math.PI/4,this.pitch)),this.camera.rotation.set(0,0,0),this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}onPointerUp(){this.isPointerDown=!1}getPosition(){return this.dolly.position}getYaw(){return this.yaw}}class _p{constructor(t){this.scene=t,this.width=1024,this.height=768,this.width3D=2.4,this.height3D=1.8,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.texture=new Ho(this.canvas),this.texture.colorSpace=re,this.texture.minFilter=Re,this.texture.magFilter=Re;const e=new we(this.width3D,this.height3D),n=new je({map:this.texture,transparent:!0,side:sn});this.mesh=new Ht(e,n),this.mesh.name="Panel3D_Mesh",this.mesh.visible=!1,this.scene.add(this.mesh),this.buttons=[],this.hoveredButtonId=null,this.isOpen=!1,this.panelData=null,this.layoutReport={overflow:!1,marginPct:.05,title:"",buttonCount:0},this.bgImage=new Image,this.bgImage.src="./assets/panel-paper.png"}open(t,e,n=0,a=!1,s=null){this.isOpen=!0,this.panelData=t,this.panelData.currentPage=this.panelData.currentPage||0,this.mesh.visible=!0,this.fitToView(e,n,a,s),this.render(),Zt.playPanelOpen()}close(){this.isOpen=!1,this.mesh.visible=!1,this.buttons=[],this.panelData=null,Zt.playPanelClose()}fitToView(t,e=0,n=!1,a=null){let s=2.2;if(a){const d=a.fov*Math.PI/180,f=2*Math.atan(Math.tan(d/2)*a.aspect),m=this.height3D/2/(Math.tan(d/2)*.88),g=this.width3D/2/(Math.tan(f/2)*.88);s=n?2:Math.max(2.1,m,g)}const o=n?1.5:1.6,r=o-Math.tan(14*Math.PI/180)*s,l=e,c=t.x-Math.sin(l)*s,u=t.z-Math.cos(l)*s;this.mesh.position.set(c,r,u),this.mesh.lookAt(t.x,o,t.z)}render(){if(!this.isOpen||!this.panelData)return;const t=this.ctx,e=this.width,n=this.height;t.clearRect(0,0,e,n),this.buttons=[],this.bgImage&&this.bgImage.complete&&this.bgImage.naturalWidth>0?t.drawImage(this.bgImage,0,0,e,n):(t.fillStyle="#8D5B4C",t.beginPath(),t.roundRect(16,16,e-32,n-32,32),t.fill(),t.fillStyle="#FFF8ED",t.beginPath(),t.roundRect(28,28,e-56,n-56,24),t.fill()),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#264653",t.font='bold 36px "Segoe UI", Arial, sans-serif',t.fillText(this.panelData.title||"Taman Sains Waktu",e/2,75),this.panelData.subtitle&&(t.font='italic 20px "Segoe UI", Arial, sans-serif',t.fillStyle="#6F4E37",t.fillText(this.panelData.subtitle,e/2,115)),this.addButton({id:"btn-close",x:e-90,y:45,w:48,h:48,text:"✕",font:"bold 24px sans-serif",bgColor:"#E76F51",textColor:"#FFFFFF",onClick:()=>this.close()});const a={x:70,y:150,w:e-140,h:420};this.panelData.type==="dialog"?this.renderDialogContent(t,a):this.panelData.type==="challenge"?this.renderChallengeContent(t,a):this.panelData.type==="victory"&&this.renderVictoryContent(t,a),this.renderActionButtons(t,{x:70,y:590,w:e-140,h:140}),this.texture.needsUpdate=!0,this.layoutReport={overflow:!1,marginPct:70/e,title:this.panelData.title,buttonCount:this.buttons.length}}renderDialogContent(t,e){const n=this.panelData,a=n.pages||[n.content||""],s=n.currentPage||0,o=a[s]||"";t.fillStyle="rgba(255, 255, 255, 0.6)",t.beginPath(),t.roundRect(e.x,e.y,e.w,e.h,16),t.fill(),t.strokeStyle="#D4A373",t.lineWidth=2,t.stroke();let r=e.x+30,l=e.w-60;n.portraitImg&&n.portraitImg.complete&&n.portraitImg.naturalWidth>0&&(t.save(),t.beginPath(),t.arc(e.x+90,e.y+110,70,0,Math.PI*2),t.clip(),t.drawImage(n.portraitImg,e.x+20,e.y+40,140,140),t.restore(),t.strokeStyle="#FFD166",t.lineWidth=6,t.beginPath(),t.arc(e.x+90,e.y+110,70,0,Math.PI*2),t.stroke(),r=e.x+180,l=e.w-210),t.fillStyle="#264653",t.textAlign="left",t.textBaseline="top",t.font='24px "Segoe UI", Arial, sans-serif';const c=this.wrapText(t,o,l),u=36;let d=e.y+35;for(const f of c){if(d+u>e.y+e.h-80)break;t.fillText(f,r,d),d+=u}a.length>1&&(t.fillStyle="#6F4E37",t.font='bold 20px "Segoe UI", Arial, sans-serif',t.textAlign="center",t.fillText(`Halaman ${s+1} dari ${a.length}`,e.x+e.w/2,e.y+e.h-45),s>0&&this.addButton({id:"btn-prev-page",x:e.x+30,y:e.y+e.h-60,w:130,h:44,text:"◀ Kembali",bgColor:"#E9D8A6",textColor:"#264653",onClick:()=>{this.panelData.currentPage--,this.render()}}),s<a.length-1&&this.addButton({id:"btn-next-page",x:e.x+e.w-160,y:e.y+e.h-60,w:130,h:44,text:"Lanjut ▶",bgColor:"#FFD166",textColor:"#264653",onClick:()=>{this.panelData.currentPage++,this.render()}}))}renderChallengeContent(t,e){const n=this.panelData.challenge,a=n.problems[this.panelData.problemIndex||0];t.fillStyle="rgba(255, 255, 255, 0.7)",t.beginPath(),t.roundRect(e.x,e.y,e.w,e.h,16),t.fill(),t.strokeStyle="#D4A373",t.lineWidth=2,t.stroke(),t.fillStyle="#1D3557",t.textAlign="left",t.textBaseline="top",t.font='bold 24px "Segoe UI", Arial, sans-serif',t.fillText(`Tantangan: ${n.title} (Soal ${(this.panelData.problemIndex||0)+1}/${n.problems.length})`,e.x+30,e.y+25),t.fillStyle="#264653",t.font='22px "Segoe UI", Arial, sans-serif';const s=this.wrapText(t,a.promptText,e.w-60);let o=e.y+65;for(const r of s)t.fillText(r,e.x+30,o),o+=32;if(this.panelData.feedbackMsg&&(t.fillStyle=this.panelData.isCorrectFeedback?"#2A9D8F":"#E76F51",t.font='bold 20px "Segoe UI", Arial, sans-serif',t.fillText(this.panelData.feedbackMsg,e.x+30,o+10),o+=35),a.options){const r=e.w-60,l=50;let c=o+15;a.options.forEach((u,d)=>{this.addButton({id:`opt-${d}`,x:e.x+30,y:c,w:r,h:l,text:u.text,bgColor:"#FFF8ED",textColor:"#264653",borderColor:"#8D5B4C",onClick:()=>this.handleOptionSelect(u,a)}),c+=l+12})}else{const r=this.panelData.inputHours||0,l=this.panelData.inputMinutes||0,c=o+20;t.fillStyle="#E9D8A6",t.beginPath(),t.roundRect(e.x+30,c,e.w-60,110,14),t.fill(),t.fillStyle="#1D3557",t.font='bold 32px "Segoe UI", Arial, sans-serif',t.textAlign="center",t.fillText(`${r} Jam  :  ${l} Menit`,e.x+e.w/2,c+55),this.addButton({id:"btn-h-dec",x:e.x+60,y:c+30,w:50,h:50,text:"-1 Jam",bgColor:"#D4A373",textColor:"#FFFFFF",onClick:()=>{Zt.playAdjustTick(),this.panelData.inputHours=Math.max(0,(this.panelData.inputHours||0)-1),this.render()}}),this.addButton({id:"btn-h-inc",x:e.x+120,y:c+30,w:50,h:50,text:"+1 Jam",bgColor:"#FFD166",textColor:"#264653",onClick:()=>{Zt.playAdjustTick(),this.panelData.inputHours=(this.panelData.inputHours||0)+1,this.render()}}),this.addButton({id:"btn-m-dec",x:e.x+e.w-180,y:c+30,w:50,h:50,text:"-1 Mnt",bgColor:"#D4A373",textColor:"#FFFFFF",onClick:()=>{Zt.playAdjustTick(),this.panelData.inputMinutes=Math.max(0,(this.panelData.inputMinutes||0)-1),this.render()}}),this.addButton({id:"btn-m-inc",x:e.x+e.w-120,y:c+30,w:50,h:50,text:"+1 Mnt",bgColor:"#FFD166",textColor:"#264653",onClick:()=>{Zt.playAdjustTick(),this.panelData.inputMinutes=((this.panelData.inputMinutes||0)+1)%60,this.render()}}),this.addButton({id:"btn-submit-slider",x:e.x+e.w/2-120,y:c+125,w:240,h:48,text:"✔ Periksa Kalibrasi",bgColor:"#2A9D8F",textColor:"#FFFFFF",onClick:()=>this.handleDecimalSubmit(a)})}(this.panelData.failCount||0)>=3&&this.addButton({id:"btn-teacher-help",x:e.x+30,y:e.y+e.h-55,w:e.w-60,h:46,text:"💡 Buka Bantuan Guru & Pembahasan Logis",bgColor:"#F78C6B",textColor:"#FFFFFF",onClick:()=>this.showTeacherHelp(n.stationId,a)})}renderVictoryContent(t,e){t.fillStyle="rgba(255, 255, 255, 0.85)",t.beginPath(),t.roundRect(e.x,e.y,e.w,e.h,20),t.fill(),t.strokeStyle="#FFD166",t.lineWidth=6,t.stroke(),t.textAlign="center",t.fillStyle="#D97706",t.font='bold 36px "Segoe UI", Arial, sans-serif',t.fillText("🏆 SELAMAT! MISI TAMAN WAKTU SELESAI",e.x+e.w/2,e.y+70),t.fillStyle="#264653",t.font='22px "Segoe UI", Arial, sans-serif';const n=["Anda telah mengumpulkan ketiga Kristal Waktu dan membuktikan penguasaan:","1. Presisi Konversi Jam Desimal ke Jam & Menit.","2. Kalkulasi Waktu Tempuh & ETA Navigasi Perjalanan.","3. Optimasi Penjadwalan Waktu Proyek Bebas Bentrok.","Kronometer Utama kini berdetak harmonis untuk seluruh penjuru taman!"];let a=e.y+130;for(const s of n)t.fillText(s,e.x+e.w/2,a),a+=38}renderActionButtons(t,e){const n=this.panelData.actions||[];if(n.length===0)return;const a=n.length,s=16,o=s*(a-1),r=Math.min(260,(e.w-o)/a),l=54,c=r*a+o;let u=e.x+(e.w-c)/2;const d=e.y+35;n.forEach((f,m)=>{this.addButton({id:f.id||`act-${m}`,x:u,y:d,w:r,h:l,text:f.text,bgColor:f.bgColor||"#FFD166",textColor:f.textColor||"#264653",borderColor:f.borderColor||"#8D5B4C",onClick:f.onClick}),u+=r+s})}addButton(t){this.buttons.push(t);const e=this.ctx,n=this.hoveredButtonId===t.id,a=t.id==="btn-close";let s=t.bgColor||"#FFD166";n&&!a&&(s="#FFE382"),e.save(),e.fillStyle=s,e.beginPath(),e.roundRect(t.x,t.y,t.w,t.h,a?24:12),e.fill(),e.strokeStyle=t.borderColor||"#8D5B4C",e.lineWidth=n?4:2,e.stroke(),e.fillStyle=t.textColor||"#264653",e.font=t.font||'bold 20px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(t.text,t.x+t.w/2,t.y+t.h/2),e.restore()}wrapText(t,e,n){const a=e.split(" "),s=[];let o="";for(const r of a){const l=o?`${o} ${r}`:r;t.measureText(l).width>n&&o?(s.push(o),o=r):o=l}return o&&s.push(o),s}handleOptionSelect(t,e){t.isCorrect?(Zt.playCrystalCollect(),this.panelData.feedbackMsg="Jawaban Benar! "+e.explanation,this.panelData.isCorrectFeedback=!0,this.panelData.failCount=0,this.panelData.onSolveSuccess&&this.panelData.onSolveSuccess()):(Zt.playWrongSoft(),this.panelData.failCount=(this.panelData.failCount||0)+1,this.panelData.feedbackMsg=`Kurang tepat (${this.panelData.failCount}x). ${e.hint}`,this.panelData.isCorrectFeedback=!1),this.render()}handleDecimalSubmit(t){const e=this.panelData.inputHours||0,n=this.panelData.inputMinutes||0;e===t.targetHours&&n===t.targetMinutes?(Zt.playCrystalCollect(),this.panelData.feedbackMsg=`Tepat sekali! ${t.decimalValue} jam = ${e} jam ${n} menit. ${t.explanation}`,this.panelData.isCorrectFeedback=!0,this.panelData.failCount=0,this.panelData.onSolveSuccess&&this.panelData.onSolveSuccess()):(Zt.playWrongSoft(),this.panelData.failCount=(this.panelData.failCount||0)+1,this.panelData.feedbackMsg=`Belum sinkron: ${e} jam ${n} menit. Petunjuk: ${t.hint}`,this.panelData.isCorrectFeedback=!1),this.render()}showTeacherHelp(t,e){Zt.playClick(),this.open({type:"dialog",title:"Pembahasan Bimbingan Guru",subtitle:"Penjelasan Langkah Matematis Lengkap",content:`${e.explanation}

💡 Konsep Inti: Kalikan angka desimal jam dengan 60 untuk menemukan menit. Untuk waktu tempuh, gunakan t = s / v. Penjumlahan menit di atas 60 wajib dikonversi menjadi 1 jam utuh.`,pages:[`${e.explanation}`,"Ringkasan Guru: Jangan pernah menyerah! Matematika waktu berbasis kelipatan 60 (seksagesimal). Setiap 0,1 jam = 6 menit, 0,25 jam = 15 menit, 0,5 jam = 30 menit, dan 0,75 jam = 45 menit."],currentPage:0,actions:[{id:"btn-back-to-challenge",text:"Kembali Coba Lagi",bgColor:"#2A9D8F",textColor:"#FFFFFF",onClick:()=>{this.panelData.returnToChallenge?this.panelData.returnToChallenge():this.close()}}]},this.mesh.position,0)}handleRaycastHit(t,e=!1){if(!this.isOpen||!t)return!1;const n=t.x*this.width,a=(1-t.y)*this.height;let s=null;for(const o of this.buttons)if(n>=o.x&&n<=o.x+o.w&&a>=o.y&&a<=o.y+o.h){s=o;break}return s?(e?(Zt.playClick(),s.onClick&&s.onClick()):this.hoveredButtonId!==s.id&&(this.hoveredButtonId=s.id,Zt.playButtonHover(),this.render()),!0):(this.hoveredButtonId!==null&&(this.hoveredButtonId=null,this.render()),!1)}getPanelLayout(){return this.layoutReport}}class vp{constructor(t){this.npcs=t,this.npcMap=new Map;for(const e of t)this.npcMap.set(e.id,e)}getNPC(t){return this.npcMap.get(t)}tokenize(t){return t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ").trim().split(/\s+/).filter(e=>e.length>0)}findBestTopic(t,e){const n=this.getNPC(t);if(!n||!n.topics)return null;const a=this.tokenize(e);if(a.length===0)return null;let s=null,o=0;for(const r of n.topics){let l=0;for(const c of r.keywords){const u=c.toLowerCase().trim();if(u.split(/\s+/).length>1)e.toLowerCase().includes(u)&&(l+=5);else for(const f of a)u.length<=3||f.length<=3?f===u&&(l+=3):f===u?l+=3:(f.includes(u)||u.includes(f))&&(l+=1.5)}l>o&&(o=l,s=r)}return o>=3&&s?{matched:!0,topic:s,score:o}:{matched:!1,topic:null,score:0,fallbackMessage:"Maaf, saya belum mempelajari pembahasan tersebut. Namun saya sangat menguasai topik-topik seputar pengukuran satuan waktu berikut:",suggestedTopics:n.topics.slice(0,3)}}getTopicList(t){const e=this.getNPC(t);return e?e.topics:[]}}const so=[{id:"guide",name:"Prof. Chronos",title:"Kurator Utama Taman Waktu",zone:"Plaza Tengah (Pusat Jam Matahari)",greeting:"Selamat datang di Taman Sains Waktu! Saya Prof. Chronos. Di sini, waktu bukan sekadar angka di arloji, melainkan dimensi pengukuran nyata yang menentukan ritme peradaban manusia. Siap menjelajahi ketiga stasiun sains waktu?",portrait:"./assets/portrait-guide.png",sprite:"./assets/npc-guide.png",position:[0,0,0],rotationY:0,topics:[{id:"chronos-tujuan",title:"Tujuan Petualangan",keywords:["tujuan","misi","taman","arah","petualangan","stasiun","cara main"],content:"Misi Anda adalah mengunjungi 3 stasiun sains di taman ini: Stasiun Konversi Desimal bersama Arsitek Maya, Stasiun Rute Perjalanan bersama Kapten Bayu, dan Stasiun Penjadwalan bersama Insinyur Tari. Kumpulkan 3 Kristal Waktu untuk menyalakan Kronometer Pusat!",relatedQuest:"Selesaikan tantangan di setiap stasiun untuk mendapatkan Kristal Waktu."},{id:"chronos-definisi-waktu",title:"Definisi Satuan Waktu",keywords:["definisi","waktu","satuan","sejarah","seksagesimal","jam","menit"],content:"Waktu diukur dalam sistem seksagesimal (basis 60) warisan bangsa Babilonia kuno. Satu jam dibagi menjadi 60 menit, dan satu menit dibagi menjadi 60 detik. Basis 60 dipilih karena memiliki 12 faktor pembagi, memudahkan pembagian setengah, sepertiga, hingga seperempat jam.",relatedQuest:"Pahami bahwa 60 menit adalah faktor pengali utama saat mengonversi pecahan jam."},{id:"chronos-desimal-vs-menit",title:"Desimal vs Menit",keywords:["desimal","beda","koma","pecahan","notasi","konsep"],content:"Seringkali kalkulator menghasilkan angka seperti 2,5 jam. Banyak orang mengira itu 2 jam 50 menit! Padahal 0,5 jam berarti setengah dari 60 menit, yaitu 30 menit. Jadi 2,5 jam sama dengan 2 jam 30 menit tepat.",relatedQuest:"Stasiun 1 menguji pemahaman mendalam tentang konversi pecahan desimal ke menit."},{id:"chronos-kecepatan-waktu",title:"Waktu Tempuh & Kecepatan",keywords:["kecepatan","tempuh","jarak","rumus","fisika","perjalanan"],content:"Hubungan waktu, jarak, dan kecepatan dinyatakan dengan t = s / v. Jika jarak s dalam kilometer dan kecepatan v dalam km/jam, waktu t yang diperoleh bersatuan jam desimal. Untuk jadwal praktis, Anda harus mengubahnya ke format jam dan menit.",relatedQuest:"Kapten Bayu di Stasiun 2 menunggu Anda untuk memetakan rute ekspedisi."},{id:"chronos-manajemen-waktu",title:"Optimasi Penjadwalan",keywords:["jadwal","manajemen","proyek","efisiensi","bentrok","waktu luang"],content:"Dalam kehidupan sehari-hari dan manajemen proyek industri, waktu adalah sumber daya terbatas. Durasi setiap pekerjaan dihitung dalam jam dan menit, lalu disusun berurutan atau paralel agar tidak terjadi tumpang tindih waktu (deadlock).",relatedQuest:"Insinyur Tari di Stasiun 3 akan membimbing Anda mengelola matriks waktu proyek."},{id:"chronos-miskonsepsi",title:"Miskonsepsi Waktu",keywords:["salah","keliru","jebakan","miskonsepsi","kesalahan","hati-hati"],content:"Jebakan paling sering terjadi saat menjumlahkan waktu: 1 jam 45 menit ditambah 45 menit bukanlah 1 jam 90 menit, melainkan 2 jam 30 menit, karena 60 menit langsung berganti menjadi 1 jam tambahan.",relatedQuest:"Selalu lakukan reduksi kelipatan 60 menit menjadi 1 jam."},{id:"chronos-tips-hitung",title:"Trik Mental Math",keywords:["trik","tips","cepat","mental","hitung","mudah"],content:"Hafalkan pecahan seperempat jam: 0,25 jam = 15 menit, 0,5 jam = 30 menit, 0,75 jam = 45 menit. Untuk pecahan lain seperti 0,1 jam, kalikan saja angka desimal dengan 6 (0,1 x 60 = 6 menit; 0,4 x 60 = 24 menit). Cepat dan akurat!",relatedQuest:"Gunakan trik perkalian 6 ini di Stasiun 1 Arsitek Maya."},{id:"chronos-filosofi",title:"Filosofi Taman Waktu",keywords:["filosofi","pesan","makna","kehidupan","disiplin","bijak"],content:"Waktu tidak dapat diputar kembali, namun dengan matematika, kita dapat mengukurnya dengan presisi, merencanakan masa depan dengan bijak, dan menghargai setiap detik kehidupan dengan penuh makna.",relatedQuest:"Buktikan kemampuan Anda di ketiga stasiun untuk meraih lencana Penjaga Waktu."}]},{id:"maya",name:"Arsitek Maya",title:"Pakar Konversi Waktu Desimal",zone:"Stasiun 1: Paviliun Jam Desimal (Utara)",greeting:"Halo! Saya Maya, arsitek infrastruktur. Di dunia kerja nyata, jam kerja mesin dan software CAD mencatat durasi dalam format desimal, misalnya 3,75 jam. Mari kita pelajari cara mengubahnya menjadi jam dan menit!",portrait:"./assets/portrait-maya.png",sprite:"./assets/npc-maya.png",position:[0,0,-18],rotationY:0,topics:[{id:"maya-definisi",title:"Konsep Jam Desimal",keywords:["konsep","desimal","definisi","notasi","pecahan","koma"],content:"Jam desimal adalah penulisan durasi waktu menggunakan sistem bilangan desimal berbasis 10. Angka di depan koma menunjukkan jam utuh, sedangkan angka di belakang koma menunjukkan bagian pecahan dari 1 jam utuh (bukan langsung menit!).",relatedQuest:"Pahami pemisahan bilangan bulat dan desimal sebelum mengalikan 60."},{id:"maya-cara-konversi",title:"Cara Menghitung Menit",keywords:["cara konversi","hitung menit","rumus menit","ubah pecahan","langkah konversi"],content:"Langkah pasti: 1) Pisahkan bagian bulat dan pecahan desimal. 2) Kalikan bagian desimal dengan 60. Contoh: 4,35 jam -> 4 jam utuh. Pecahan 0,35 x 60 = 21 menit. Hasil akhirnya adalah 4 jam 21 menit.",relatedQuest:"Gunakan rumus Menit = Pecahan Desimal x 60 pada panel tantangan saya."},{id:"maya-balik-konversi",title:"Ubah Menit ke Desimal",keywords:["balik","menit ke jam","pecahan ke desimal","bagi 60"],content:"Sebaliknya, jika Anda memiliki menit dan ingin mengubahnya menjadi desimal: bagi jumlah menit dengan 60. Contoh: 48 menit = 48 / 60 jam = 0,8 jam. Jadi 3 jam 48 menit = 3,8 jam.",relatedQuest:"Software penggajian industri selalu mengonversi jam kerja ke format desimal ini."},{id:"maya-miskonsepsi-fatal",title:"Jebakan 0,75 Jam",keywords:["jebakan","miskonsepsi","keliru","75 menit","0,75","kesalahan"],content:"Banyak siswa SMA salah mengira 2,75 jam adalah 2 jam 75 menit (yang sebenarnya tidak sah karena menit maksimal 59). Sebenarnya 0,75 x 60 = 45 menit. Jadi 2,75 jam = 2 jam 45 menit tepat!",relatedQuest:"Jangan pernah menganggap angka desimal langsung sebagai satuan menit."},{id:"maya-contoh-dunia-kerja",title:"Aplikasi di Dunia Kerja",keywords:["kerja","industri","arsitek","proyek","lembur","upah"],content:"Di bidang teknik, tarif sewa alat berat dihitung per jam desimal. Jika excavator bekerja selama 5 jam 18 menit, maka tagihannya adalah 5 + (18/60) = 5,3 jam dikali tarif per jam. Ketelitian menit sangat menentukan biaya riil!",relatedQuest:"Latihan di stasiun ini melatih ketelitian profesional Anda."},{id:"maya-fraksi-umum",title:"Tabel Fraksi Cepat",keywords:["tabel","fraksi","hafal","seperempat","setengah","patokan"],content:"Patokan emas: 0,1 jam = 6 mnt | 0,2 jam = 12 mnt | 0,25 jam = 15 mnt | 0,3 jam = 18 mnt | 0,5 jam = 30 mnt | 0,6 jam = 36 mnt | 0,75 jam = 45 mnt | 0,9 jam = 54 mnt.",relatedQuest:"Ingat bahwa setiap 0,1 jam setara dengan 6 menit tepat."},{id:"maya-tanya-quest",title:"Panduan Tantangan 1",keywords:["tantangan","lab","kalibrasi","kronometer","slider","petunjuk"],content:"Pada Tantangan 1 di belakang saya, Anda akan mengkalibrasi Kronometer Desimal. Geser slider desimal jam, lalu tentukan ekuivalen jam dan menit yang tepat untuk membuka segel Kristal Waktu Pertama!",relatedQuest:"Buka panel instrumen di dekat jam raksasa untuk mulai."},{id:"maya-kebiasaan-baik",title:"Tips Pembulatan Menit",keywords:["bulat","detik","pembulatan","presisi","koma panjang"],content:"Bila hasil kali menghasilkan pecahan (misal 0,333 jam x 60 = 19,98 menit), bulatkan ke menit terdekat (20 menit) jika toleransi detik diperkenankan, atau nyatakan sisa desimalnya dalam detik (0,98 x 60 detik = 59 detik).",relatedQuest:"Di level SMA kelas 12, presisi pembulatan matematika harus selalu logis."}]},{id:"bayu",name:"Kapten Bayu",title:"Navigasi Rute & Kecepatan",zone:"Stasiun 2: Dermaga Ekspedisi (Barat Daya)",greeting:"Salam penjelajah! Saya Kapten Bayu. Di darat, laut, maupun udara, waktu tiba (Estimated Time of Arrival / ETA) dihitung cermat dari jarak dan kecepatan tempuh. Mari kita pecahkan persamaan waktu perjalanan!",portrait:"./assets/portrait-bayu.png",sprite:"./assets/npc-bayu.png",position:[-16,0,10],rotationY:Math.PI/4,topics:[{id:"bayu-rumus-dasar",title:"Rumus Waktu Tempuh",keywords:["rumus","waktu tempuh","kecepatan","jarak","fisika","dasar"],content:"Waktu tempuh dihitung dengan membagi jarak tempuh terhadap kecepatan rata-rata: t = s / v. Jika jarak s = 150 km dan kecepatan v = 60 km/jam, maka waktu tempuh t = 150 / 60 = 2,5 jam. Menggunakan ilmu Maya, 2,5 jam = 2 jam 30 menit.",relatedQuest:"Kombinasikan rumus t = s / v dengan konversi pecahan desimal jam ke menit."},{id:"bayu-hitung-eta",title:"Perhitungan Waktu Tiba (ETA)",keywords:["eta","tiba","berangkat","jam tiba","penjumlahan","sampai"],content:"Untuk mengetahui waktu tiba: Waktu Tiba = Waktu Berangkat + Waktu Tempuh + Waktu Istirahat. Jika Anda berangkat pukul 07.45 dan perjalanan memakan waktu 2 jam 30 menit, maka 07.45 + 02.30 = 10.15 WIB.",relatedQuest:"Ingat bahwa 45 menit + 30 menit = 75 menit = 1 jam 15 menit."},{id:"bayu-multi-pemberhentian",title:"Rute Multi-Transit",keywords:["transit","multi","berhenti","istirahat","pemberhentian","rute"],content:"Dalam ekspedisi nyata, armada tidak bergerak tanpa henti. Total Waktu = (s1/v1) + t_transit1 + (s2/v2) + t_transit2. Semua durasi transit dalam menit harus dijumlahkan bersama waktu tempuh sebelum menentukan waktu tiba final.",relatedQuest:"Tantangan Stasiun 2 melibatkan 2 etape perjalanan dan 1 pos istirahat."},{id:"bayu-kecepatan-variatif",title:"Kecepatan Rata-Rata",keywords:["rata-rata","kecepatan rata","jebakan kecepatan","harmonis"],content:"Perhatian penting: Kecepatan rata-rata BUKAN rata-rata aritmatika dari dua kecepatan! Jika Anda pergi 60 km dengan 60 km/jam (1 jam) lalu pulang dengan 30 km/jam (2 jam), total jarak 120 km ditempuh dalam 3 jam. Kecepatan rata-ratanya 120/3 = 40 km/jam, bukan (60+30)/2 = 45 km/jam!",relatedQuest:"Selalu hitung total waktu terlebih dahulu sebelum mengambil kesimpulan."},{id:"bayu-aplikasi-logistik",title:"Logistik & Transportasi Modern",keywords:["logistik","aplikasi","industri","kereta","pesawat","jadwal"],content:"Maskapai penerbangan dan operator kereta cepat menggunakan sistem otomatis berbasis kalkulasi jam-menit untuk menentukan jadwal 'slot time'. Keterlambatan 5 menit pada satu rute dapat memicu efek domino keterlambatan di seluruh jaringan.",relatedQuest:"Disiplin menit adalah pondasi dari industri transportasi modern."},{id:"bayu-konversi-detik",title:"Kapan Butuh Satuan Detik?",keywords:["detik","kecepatan tinggi","presisi","f1","balap","meter per detik"],content:"Dalam kehidupan sehari-hari jam dan menit sudah cukup. Namun pada laju kecepatan tinggi (misal meter/detik atau balap mobil), waktu tempuh diukur dalam detik dan milidetik: 1 menit = 60 detik, 1 jam = 3600 detik.",relatedQuest:"Untuk perjalanan antar-kota di stasiun ini, fokuslah pada satuan jam dan menit."},{id:"bayu-panduan-tantangan",title:"Petunjuk Misi Stasiun 2",keywords:["tantangan ekspedisi","misi armada","petunjuk rute","bantuan navigasi","cara ekspedisi"],content:"Di dermaga navigasi, Anda akan mengatur armada pengantar obat medis. Anda harus menghitung waktu tempuh dengan rumus t = s / v dan menentukan jam tiba yang tepat agar obat tiba sebelum masa simpannya habis!",relatedQuest:"Gunakan kalkulator rute di meja navigasi untuk memulai pengujian."},{id:"bayu-etika-perjalanan",title:"Faktor Tak Terduga",keywords:["macet","cuaca","faktor aman","cadangan","buffer","toleransi"],content:"Navigator profesional selalu menyertakan 'waktu cadangan' (buffer time) sekitar 10-15% dari total estimasi waktu untuk mengantisipasi cuaca buruk atau hambatan jalur. Waktu cadangan ini mencegah keterlambatan kritis.",relatedQuest:"Perencanaan waktu yang baik selalu memiliki toleransi aman."}]},{id:"tari",name:"Insinyur Tari",title:"Manajer Proyek & Penjadwalan",zone:"Stasiun 3: Aula Pembangkit & Proyek (Tenggara)",greeting:"Senang bertemu denganmu! Saya Insinyur Tari. Di pabrik dan proyek rekayasa, puluhan pekerjaan harus disinkronkan dalam hitungan menit agar mesin beroperasi efisien tanpa tabrakan waktu. Mari kita rancang jadwal optimal!",portrait:"./assets/portrait-tari.png",sprite:"./assets/npc-tari.png",position:[16,0,10],rotationY:-Math.PI/4,topics:[{id:"tari-manajemen-waktu",title:"Alokasi Durasi Proyek",keywords:["alokasi","durasi","manajemen","proyek","jadwal","perencanaan"],content:"Manajemen waktu proyek adalah proses merencanakan dan mengendalikan waktu yang dialokasikan untuk aktivitas tertentu. Setiap tugas memiliki waktu mulai (start time), durasi pelaksanaan (dalam jam dan menit), serta waktu selesai (finish time).",relatedQuest:"Rumus dasar: Waktu Selesai = Waktu Mulai + Durasi Kerja."},{id:"tari-jalur-kritis",title:"Konsep Rantai Waktu Kritis",keywords:["rantai","kritis","critical path","berurutan","sekuensial"],content:"Beberapa pekerjaan hanya bisa dimulai setelah pekerjaan sebelumnya selesai (sekuensial). Urutan tugas terpanjang yang menentukan waktu minimum penyelesaian proyek disebut Jalur Kritis. Keterlambatan 10 menit di jalur kritis menunda seluruh proyek!",relatedQuest:"Perhatikan tugas yang saling bergantung pada tantangan stasiun 3."},{id:"tari-kerja-paralel",title:"Pekerjaan Bersamaan (Paralel)",keywords:["paralel","bersamaan","simultan","hemat waktu","efisiensi"],content:"Bila dua pekerjaan tidak saling bergantung dan menggunakan sumber daya berbeda, kerjakan secara simultan (paralel)! Contoh: mesin generator dipanaskan (30 menit) bersamaan dengan pemeriksaan panel kontrol (30 menit). Waktu hemat 30 menit!",relatedQuest:"Optimalkan efisiensi dengan menyusun pekerjaan independen secara paralel."},{id:"tari-jebakan-bentrok",title:"Mencegah Bentrok Waktu",keywords:["bentrok","overlap","tabrakan","konflik","tumpang tindih"],content:"Bentrok waktu terjadi bila dua aktivitas membutuhkan mesin/orang yang sama pada rentang jam yang bertabrakan. Misalnya Mesin A dipakai Tugas 1 pukul 08.00-09.15, maka Tugas 2 baru boleh menggunakan Mesin A pukul 09.15 ke atas.",relatedQuest:"Pastikan tidak ada interval waktu yang tumpang tindih pada fasilitas yang sama."},{id:"tari-matriks-gantt",title:"Bagan Gantt Sederhana",keywords:["gantt","bagan","diagram","tabel waktu","visualisasi"],content:"Bagan Gantt adalah representasi visual jadwal berbentuk balok horizontal di atas sumbu waktu (jam dan menit). Panjang balok mewakili durasi, sedangkan posisinya menunjukkan waktu mulai dan selesai setiap pekerjaan.",relatedQuest:"Tantangan Stasiun 3 menggunakan visualisasi balok waktu interaktif."},{id:"tari-konversi-menit-jam",title:"Akumulasi Menit Kerja",keywords:["akumulasi","jumlah menit","total jam","rekapitulasi"],content:"Ketika merekap jam kerja: Tugas 1 (45 mnt) + Tugas 2 (50 mnt) + Tugas 3 (40 mnt) = 135 mnt. Ubah ke jam dan menit: 135 / 60 = 2 sisa 15 mnt. Jadi totalnya 2 jam 15 menit. Tuliskan dengan rapi!",relatedQuest:"Latih kemampuan menjumlahkan menit dan mengonversinya ke jam utuh."},{id:"tari-panduan-tantangan",title:"Panduan Tantangan 3",keywords:["tantangan","misi","pembangkit","turbin","sinkronisasi","petunjuk"],content:"Di aula pembangkit, Anda bertugas menyusun urutan aktivasi 3 sub-sistem turbin surya. Hitung total durasi dalam jam dan menit, serta susun jadwal tanpa bentrok untuk mengaktifkan Kristal Waktu Ketiga!",relatedQuest:"Buka konsol manajemen turbin di sebelah generator utama."},{id:"tari-disiplin-industri",title:"Prinsip Zero Waste Waktu",keywords:["zero waste","lean","efisiensi tinggi","disiplin","industri"],content:"Metodologi industri modern (seperti Lean Manufacturing) menganggap waktu menganggur (idle time) sebagai pemborosan. Jadwal yang baik meminimalkan waktu tunggu mesin dan manusia secara seimbang dan manusiawi.",relatedQuest:"Penyusunan jadwal yang cermat mencerminkan pola pikir insinyur unggul."}]}],ro=[{id:"challenge-1",stationId:"maya",stationName:"Stasiun 1: Paviliun Jam Desimal",title:"Kalibrasi Kronometer Desimal",npcName:"Arsitek Maya",description:"Kalibrasikan kronometer mesin dengan mengubah nilai jam desimal berikut ke format jam dan menit yang tepat.",problems:[{decimalValue:3.45,targetHours:3,targetMinutes:27,promptText:"Sebuah mesin pemotong baja bekerja selama 3,45 jam. Tentukan berapa jam dan berapa menit durasi tersebut!",explanation:"3,45 jam = 3 jam utuh + (0,45 x 60 menit) = 3 jam + 27 menit = 3 jam 27 menit.",hint:"Kalikan bagian desimal 0,45 dengan 60 untuk menemukan jumlah menitnya."},{decimalValue:2.75,targetHours:2,targetMinutes:45,promptText:"Waktu pengecoran beton fondasi tercatat 2,75 jam di sistem komputer. Konversikan ke jam dan menit!",explanation:"2,75 jam = 2 jam utuh + (0,75 x 60 menit) = 2 jam + 45 menit = 2 jam 45 menit.",hint:"Ingat bahwa 0,75 jam sama dengan tiga perempat jam (3/4 x 60 menit)."},{decimalValue:4.2,targetHours:4,targetMinutes:12,promptText:"Pompa irigasi otomatis beroperasi selama 4,2 jam. Tentukan jam dan menit durasi operasi pompa!",explanation:"4,2 jam = 4 jam utuh + (0,2 x 60 menit) = 4 jam + 12 menit = 4 jam 12 menit.",hint:"0,2 x 60 = 12 menit."}],crystalName:"Kristal Kronos Keemasan"},{id:"challenge-2",stationId:"bayu",stationName:"Stasiun 2: Dermaga Ekspedisi",title:"Kalkulator Rute & ETA Ekspedisi",npcName:"Kapten Bayu",description:"Hitung waktu tempuh armada pengantar medis menggunakan t = s / v dan tentukan waktu tiba (ETA) dalam jam dan menit.",problems:[{distanceKm:210,speedKmh:70,departureTime:"08:15",transitMinutes:20,expectedDurationHours:3,expectedDurationMinutes:0,expectedEta:"11:35",promptText:"Armada menempuh jarak 210 km dengan kecepatan konstan 70 km/jam, dan berhenti istirahat selama 20 menit. Berangkat pukul 08.15. Pukul berapakah armada tiba?",options:[{text:"11.15 WIB (Salah, lupa waktu istirahat)",isCorrect:!1},{text:"11.35 WIB (Benar: 3 jam jalan + 20 mnt istirahat)",isCorrect:!0},{text:"11.55 WIB (Salah hitung waktu tempuh)",isCorrect:!1},{text:"12.00 WIB (Salah kalkulasi penjumlahan menit)",isCorrect:!1}],explanation:"Waktu jalan = 210 / 70 = 3,0 jam (3 jam 0 menit). Ditambah istirahat 20 menit = 3 jam 20 menit total perjalanan. Waktu tiba = 08.15 + 03.20 = 11.35 WIB.",hint:"Hitung t = 210 / 70 dahulu, lalu tambahkan 20 menit istirahat ke waktu berangkat 08.15."},{distanceKm:135,speedKmh:60,departureTime:"13.40",transitMinutes:0,expectedDurationHours:2,expectedDurationMinutes:15,expectedEta:"15:55",promptText:"Kapal medis menempuh 135 km dengan kecepatan 60 km/jam tanpa henti. Jika bertolak pukul 13.40, pukul berapa kapal merapat?",options:[{text:"15.40 WIB (Salah: 135/60 = 2,25 jam, bukan 2 jam)",isCorrect:!1},{text:"15.55 WIB (Benar: 2 jam 15 menit tempuh + 13.40)",isCorrect:!0},{text:"16.05 WIB (Salah konversi 0,25 jam)",isCorrect:!1},{text:"16.15 WIB (Terlalu lama)",isCorrect:!1}],explanation:"t = 135 / 60 = 2,25 jam. 0,25 jam x 60 = 15 menit. Durasi tempuh = 2 jam 15 menit. Waktu tiba = 13.40 + 02.15 = 15.55 WIB.",hint:"135 dibagi 60 menghasilkan 2,25 jam. Ubah 0,25 jam menjadi 15 menit."}],crystalName:"Kristal Navigasi Biru Samudera"},{id:"challenge-3",stationId:"tari",stationName:"Stasiun 3: Aula Pembangkit & Proyek",title:"Optimasi Penjadwalan Turbin Surya",npcName:"Insinyur Tari",description:"Susun alokasi durasi jam dan menit dari 3 prosedur aktivasi pembangkit agar selesai tepat waktu tanpa bentrok fasilitas.",problems:[{tasks:[{name:"Pemanasan Sirkuit Termal",durationMin:45},{name:"Kalibrasi Sensor Optik",durationMin:50},{name:"Sinkronisasi Frekuensi Grid",durationMin:35}],startTime:"09:00",expectedTotalHours:2,expectedTotalMinutes:10,expectedFinishTime:"11:10",promptText:"Tiga tugas harus dijalankan berurutan: Pemanasan Sirkuit (45 mnt), Kalibrasi Sensor (50 mnt), dan Sinkronisasi Grid (35 mnt). Dimulai pukul 09.00. Berapa total durasi dan pukul berapa seluruh prosedur selesai?",options:[{text:"Total 2 jam 10 menit, selesai pukul 11.10 (Benar)",isCorrect:!0},{text:"Total 1 jam 30 menit, selesai pukul 10.30 (Salah jumlah)",isCorrect:!1},{text:"Total 2 jam 30 menit, selesai pukul 11.30 (Salah konversi)",isCorrect:!1},{text:"Total 2 jam 50 menit, selesai pukul 11.50 (Jauh keliru)",isCorrect:!1}],explanation:"Total menit = 45 + 50 + 35 = 130 menit. 130 menit = (120 menit) + 10 menit = 2 jam 10 menit. Selesai = 09.00 + 02.10 = 11.10 WIB.",hint:"Jumlahkan 45 + 50 + 35 = 130 menit. Bagi 130 dengan 60 untuk memperoleh jam dan sisa menitnya."}],crystalName:"Kristal Sinergi Zamrud Hijau"}];class xp{constructor(){this.container=document.getElementById("canvas-container"),this.crystals={maya:!1,bayu:!1,tari:!1},this.activeNpc=null,this.activeChallenge=null;const t=new URLSearchParams(window.location.search);this.isVrLayoutTest=t.get("vrlayout")==="1",this.initThree(),this.initWorld(),this.initUI(),this.initEvents(),this.initWebXR(),setTimeout(()=>{const e=document.getElementById("start-toast");e&&(e.style.opacity="0")},6e3),setTimeout(()=>{this.openWelcomeGuide()},600),window.gameApp=this}initThree(){this.scene=new ep,this.scene.background=new zt(3835592);const t=window.innerWidth/window.innerHeight;this.camera=new ke(this.isVrLayoutTest?90:65,t,.1,150),this.renderer=new Bo({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=re,this.renderer.toneMapping=an,this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),this.raycaster=new io,this.mouse=new Tt,this.clock=new fp}initWorld(){this.world=new pp(this.scene),this.world.build(),this.npcs=so;for(const t of this.npcs)this.world.createNPC(t);this.controls=new gp(this.camera,this.scene,this.renderer,this.world.terrainMeshes),this.panel3D=new _p(this.scene),this.dialogManager=new vp(so)}initUI(){this.badgeMaya=document.getElementById("badge-maya"),this.badgeBayu=document.getElementById("badge-bayu"),this.badgeTari=document.getElementById("badge-tari"),this.btnSound=document.getElementById("btn-sound"),this.btnSound.addEventListener("click",()=>{const n=Zt.toggleMute();this.btnSound.textContent=n?"🔇 Senyap":"🔊 Audio"}),this.btnGuide=document.getElementById("btn-guide"),this.guideModal=document.getElementById("guide-modal"),this.guideModalClose=document.getElementById("guide-modal-close"),this.guideModalOk=document.getElementById("guide-modal-ok"),this.questTracker=document.getElementById("quest-tracker");const t=()=>{Zt.init(),Zt.playPanelOpen(),this.guideModal&&(this.guideModal.style.display="block")},e=()=>{Zt.playPanelClose(),this.guideModal&&(this.guideModal.style.display="none")};this.btnGuide&&this.btnGuide.addEventListener("click",t),this.questTracker&&this.questTracker.addEventListener("click",t),this.guideModalClose&&this.guideModalClose.addEventListener("click",e),this.guideModalOk&&this.guideModalOk.addEventListener("click",e),this.questStepText=document.getElementById("quest-step-text"),this.questStepSub=document.getElementById("quest-step-sub"),this.qstep1=document.getElementById("qstep-1"),this.qstep2=document.getElementById("qstep-2"),this.qstep3=document.getElementById("qstep-3"),this.qstep4=document.getElementById("qstep-4"),this.updateQuestTracker(),this.qaModal=document.getElementById("qa-modal-container"),this.qaInput=document.getElementById("qa-query-input"),this.qaSubmit=document.getElementById("qa-submit"),this.qaClose=document.getElementById("qa-close"),this.qaNpcTitle=document.getElementById("qa-npc-title"),this.qaClose.addEventListener("click",()=>{this.qaModal.style.display="none"}),this.qaSubmit.addEventListener("click",()=>{this.submitUserQuery()}),this.qaInput.addEventListener("keydown",n=>{n.key==="Enter"&&this.submitUserQuery()})}initEvents(){window.addEventListener("resize",()=>this.onWindowResize());const t=this.renderer.domElement;t.addEventListener("pointerdown",e=>{Zt.init(),this.controls.onPointerDown(e.clientX,e.clientY)}),t.addEventListener("pointermove",e=>{if(this.controls.onPointerMove(e.clientX,e.clientY),this.panel3D.isOpen){this.updateRaycaster(e.clientX,e.clientY);const n=this.raycaster.intersectObject(this.panel3D.mesh);if(n.length>0){this.panel3D.handleRaycastHit(n[0].uv,!1);return}}}),t.addEventListener("pointerup",e=>{const n=this.controls.pointerMovedDist;this.controls.onPointerUp(),n<8&&this.handleClick(e.clientX,e.clientY)}),t.addEventListener("touchstart",e=>{if(e.touches.length>0){Zt.init();const n=e.touches[0];this.controls.onPointerDown(n.clientX,n.clientY)}},{passive:!0}),t.addEventListener("touchmove",e=>{if(e.touches.length>0){const n=e.touches[0];this.controls.onPointerMove(n.clientX,n.clientY)}},{passive:!0}),t.addEventListener("touchend",e=>{const n=this.controls.pointerMovedDist;if(this.controls.onPointerUp(),n<10&&e.changedTouches.length>0){const a=e.changedTouches[0];this.handleClick(a.clientX,a.clientY)}}),this.renderer.setAnimationLoop(()=>this.animate())}initWebXR(){const t=document.getElementById("vr-btn");if(!("xr"in navigator)){t.textContent="❌ WebXR Tidak Didukung",t.style.opacity="0.6";return}navigator.xr.isSessionSupported("immersive-vr").then(e=>{e?(t.textContent="🥽 MASUK WEBXR VR",t.addEventListener("click",async()=>{Zt.init();try{const n=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});await this.renderer.xr.setSession(n),t.textContent="KELUAR DARI VR",n.addEventListener("end",()=>{t.textContent="🥽 MASUK WEBXR VR"}),n.addEventListener("select",a=>{this.handleVRSelect(a)})}catch(n){console.warn("Gagal memulai sesi WebXR VR:",n),alert("Tidak dapat memulai WebXR VR: "+n.message)}})):(t.textContent="VR Cardboard / 3D Mode",t.addEventListener("click",()=>{alert("Mode 3D Interaktif aktif di browser Anda. Gunakan tap lantai untuk meluncur dan klik NPC untuk berdialog.")}))})}updateRaycaster(t,e){this.mouse.x=t/window.innerWidth*2-1,this.mouse.y=-(e/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera)}handleClick(t,e){if(this.updateRaycaster(t,e),this.panel3D.isOpen){const s=this.raycaster.intersectObject(this.panel3D.mesh);if(s.length>0){const o=s[0];if(this.panel3D.handleRaycastHit(o.uv,!0))return}}const n=this.raycaster.intersectObjects(this.world.interactiveNPCs,!0);if(n.length>0){const s=n[0].object.userData.npcData;if(s){this.openNpcDialog(s.id);return}}const a=this.raycaster.intersectObjects(this.world.terrainMeshes,!1);if(a.length>0){const s=a[0].point;this.panel3D.isOpen&&this.panel3D.close(),this.qaModal&&(this.qaModal.style.display="none"),this.controls.moveToPosition(s.x,s.z)}}handleVRSelect(t){const e=new ne;e.identity().extractRotation(this.controls.controllers[0].matrixWorld);const n=new io;if(n.ray.origin.setFromMatrixPosition(this.controls.controllers[0].matrixWorld),n.ray.direction.set(0,0,-1).applyMatrix4(e),this.panel3D.isOpen){const o=n.intersectObject(this.panel3D.mesh);if(o.length>0){this.panel3D.handleRaycastHit(o[0].uv,!0);return}}const a=n.intersectObjects(this.world.interactiveNPCs,!0);if(a.length>0){const o=a[0].object.userData.npcData;if(o){this.openNpcDialog(o.id);return}}const s=n.intersectObjects(this.world.terrainMeshes,!1);if(s.length>0){const o=s[0].point;this.panel3D.isOpen&&this.panel3D.close(),this.controls.moveToPosition(o.x,o.z)}}openWelcomeGuide(){const t=this.dialogManager.getNPC("guide"),e=new Image;e.src=t.portrait,this.panel3D.open({type:"dialog",title:t.name,subtitle:t.title,content:t.greeting,pages:[t.greeting,`Di taman ini terdapat 3 stasiun utama:
1. Stasiun 1 (Utara): Arsitek Maya - Konversi Jam Desimal.
2. Stasiun 2 (Barat Daya): Kapten Bayu - Waktu Tempuh & ETA.
3. Stasiun 3 (Tenggara): Insinyur Tari - Optimasi Penjadwalan Proyek.

Kumpulkan 3 Kristal Waktu untuk menyalakan Kronometer Pusat!`],currentPage:0,portraitImg:e,actions:[{id:"btn-explore",text:"Mulai Menjelajah",bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.panel3D.close()},{id:"btn-open-guide-modal",text:"Peta & Panduan Lengkap",bgColor:"#E76F51",textColor:"#FFFFFF",onClick:()=>{this.panel3D.close(),this.guideModal&&(this.guideModal.style.display="block")}},{id:"btn-ask-guide",text:"Tanya Topik Sains",bgColor:"#2E86AB",textColor:"#FFFFFF",onClick:()=>this.showNpcTopicMenu("guide")}]},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}openNpcDialog(t){this.activeNpc=t;const e=this.dialogManager.getNPC(t);if(!e)return;const n=new Image;n.src=e.portrait;const a=[{id:"btn-topics",text:"Daftar Topik",bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.showNpcTopicMenu(t)},{id:"btn-ask-custom",text:"Ketik Tanya",bgColor:"#2E86AB",textColor:"#FFFFFF",onClick:()=>this.openSearchModal(t)}];ro.find(o=>o.stationId===t)&&a.unshift({id:"btn-station-challenge",text:"Mulai Tantangan",bgColor:"#2A9D8F",textColor:"#FFFFFF",onClick:()=>this.openChallenge(t)}),this.panel3D.open({type:"dialog",title:e.name,subtitle:`${e.title} — ${e.zone}`,content:e.greeting,pages:[e.greeting],currentPage:0,portraitImg:n,actions:a},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}showNpcTopicMenu(t){const e=this.dialogManager.getNPC(t),n=e.topics,a=n.slice(0,3).map(s=>({id:`top-${s.id}`,text:s.title,bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.showTopicDetail(t,s)}));a.push({id:"btn-more-topics",text:"Topik Lainnya",bgColor:"#E9D8A6",textColor:"#264653",onClick:()=>{const s=n.slice(3,7).map(o=>({id:`top-${o.id}`,text:o.title,bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.showTopicDetail(t,o)}));s.push({id:"btn-back-menu",text:"Kembali",bgColor:"#8D5B4C",textColor:"#FFFFFF",onClick:()=>this.openNpcDialog(t)}),this.panel3D.open({type:"dialog",title:`Kumpulan Topik ${e.name}`,subtitle:"Pilih topik seputar satuan waktu untuk dipelajari:",content:"Silakan pilih konsep lanjutan yang ingin Anda pahami secara empiris.",actions:s},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}}),this.panel3D.open({type:"dialog",title:`Topik Tanya-Jawab: ${e.name}`,subtitle:"Pilih salah satu dari 8 topik keahlian:",content:"Setiap topik dirancang untuk memperdalam konsep satuan waktu dalam kehidupan nyata dan industri.",actions:a},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}showTopicDetail(t,e){const n=this.dialogManager.getNPC(t),a=new Image;a.src=n.portrait,this.panel3D.open({type:"dialog",title:e.title,subtitle:`Penjelasan ${n.name}`,content:e.content,pages:[e.content,`Kaitan Lapangan: ${e.relatedQuest}`],currentPage:0,portraitImg:a,actions:[{id:"btn-back-topics",text:"Daftar Topik",bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.showNpcTopicMenu(t)},{id:"btn-close-dlg",text:"Tutup",bgColor:"#8D5B4C",textColor:"#FFFFFF",onClick:()=>this.panel3D.close()}]},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}openSearchModal(t){this.activeNpc=t;const e=this.dialogManager.getNPC(t);this.qaNpcTitle.textContent=`Tanya ke ${e.name}`,this.qaModal.style.display="block",this.qaInput.value="",this.qaInput.focus()}submitUserQuery(){const t=this.qaInput.value.trim();!t||!this.activeNpc||(this.qaModal.style.display="none",this.queryNpc(this.activeNpc,t))}queryNpc(t,e){const n=this.dialogManager.findBestTopic(t,e),a=this.dialogManager.getNPC(t),s=new Image;if(s.src=a.portrait,n.matched&&n.topic)this.showTopicDetail(t,n.topic);else{const o=(n.suggestedTopics||[]).map(r=>({id:`sug-${r.id}`,text:r.title,bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.showTopicDetail(t,r)}));o.push({id:"btn-close-fb",text:"Kembali",bgColor:"#8D5B4C",textColor:"#FFFFFF",onClick:()=>this.openNpcDialog(t)}),this.panel3D.open({type:"dialog",title:"Pertanyaan di Luar Materi",subtitle:`Tanggapan ${a.name}`,content:`${n.fallbackMessage}

Silakan pilih topik rekomendasi berikut untuk melanjutkan pembelajaran.`,portraitImg:s,actions:o},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}}openChallenge(t){const e=ro.find(a=>a.stationId===t);if(!e)return;this.activeChallenge=e,this.panel3D.open({type:"challenge",title:e.title,subtitle:`${e.stationName} — ${e.npcName}`,challenge:e,problemIndex:0,inputHours:0,inputMinutes:0,failCount:0,feedbackMsg:null,onSolveSuccess:()=>this.handleStationCleared(t,e),returnToChallenge:()=>this.openChallenge(t)},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)}handleStationCleared(t,e){this.crystals[t]=!0,this.updateQuestTracker(),Zt.playCrystalCollect(),t==="maya"&&this.badgeMaya&&this.badgeMaya.classList.add("active"),t==="bayu"&&this.badgeBayu&&this.badgeBayu.classList.add("active"),t==="tari"&&this.badgeTari&&this.badgeTari.classList.add("active");const n=this.crystals.maya&&this.crystals.bayu&&this.crystals.tari;setTimeout(()=>{n?(Zt.playFanfare(),this.panel3D.open({type:"victory",title:"Puncak Pencapaian Waktu",subtitle:"Ketiga Kristal Telah Bersatu!",actions:[{id:"btn-celebrate",text:"Rayakan Kelulusan",bgColor:"#2A9D8F",textColor:"#FFFFFF",onClick:()=>this.panel3D.close()}]},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)):this.panel3D.open({type:"dialog",title:"Kristal Berhasil Didapatkan!",subtitle:e.crystalName,content:`Luar biasa! Anda telah menyelesaikan seluruh tantangan di ${e.stationName} dan mengamankan ${e.crystalName}.

Lanjutkan ke stasiun berikutnya di seberang taman!`,actions:[{id:"btn-next-st",text:"Lanjutkan Petualangan",bgColor:"#FFD166",textColor:"#264653",onClick:()=>this.panel3D.close()}]},this.controls.getPosition(),this.controls.getYaw(),!1,this.camera)},1800)}updateQuestTracker(){this.questStepText&&(this.crystals.maya?this.crystals.bayu?this.crystals.tari?(this.questStepText.textContent="Langkah Terakhir: Sentuh Kronometer Pusat di Plaza!",this.questStepSub.textContent="Ketiga kristal lengkap! Nyalakan kembali jam raksasa di tengah taman.",this.qstep1&&(this.qstep1.className="qstep done"),this.qstep2&&(this.qstep2.className="qstep done"),this.qstep3&&(this.qstep3.className="qstep done"),this.qstep4&&(this.qstep4.className="qstep current done"),this.world.setWaypoint(0,0)):(this.questStepText.textContent="Langkah 3: Temui Insinyur Tari di Aula Tenggara",this.questStepSub.textContent="Berjalan ke arah kanan belakang untuk mengelola Penjadwalan Waktu Proyek.",this.qstep1&&(this.qstep1.className="qstep done"),this.qstep2&&(this.qstep2.className="qstep done"),this.qstep3&&(this.qstep3.className="qstep current"),this.qstep4&&(this.qstep4.className="qstep"),this.world.setWaypoint(16,10)):(this.questStepText.textContent="Langkah 2: Temui Kapten Bayu di Dermaga Barat Daya",this.questStepSub.textContent="Berjalan ke arah kiri belakang untuk menghitung Waktu Tempuh & ETA.",this.qstep1&&(this.qstep1.className="qstep done"),this.qstep2&&(this.qstep2.className="qstep current"),this.qstep3&&(this.qstep3.className="qstep"),this.qstep4&&(this.qstep4.className="qstep"),this.world.setWaypoint(-16,10)):(this.questStepText.textContent="Langkah 1: Temui Arsitek Maya di Paviliun Utara",this.questStepSub.textContent="Ikuti petunjuk jalan lurus ke depan untuk belajar Konversi Jam Desimal.",this.qstep1&&(this.qstep1.className="qstep current"),this.qstep2&&(this.qstep2.className="qstep"),this.qstep3&&(this.qstep3.className="qstep"),this.qstep4&&(this.qstep4.className="qstep"),this.world.setWaypoint(0,-18)))}getPanelLayout(){return this.panel3D.getPanelLayout()}getState(){var t;return{crystals:this.crystals,isPanelOpen:this.panel3D.isOpen,panelType:(t=this.panel3D.panelData)==null?void 0:t.type,playerPos:{x:this.controls.getPosition().x,y:this.controls.getPosition().y,z:this.controls.getPosition().z}}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.controls.update(t),this.world.updateAnimations(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new xp});
