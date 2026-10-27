var hd=0,Vc=1,ud=2;var Kh=1,Ws=2,Sn=3,Xn=0,be=1,on=2,Gn=0,Wn=1,$n=2,Gc=3,Wc=4,dd=5,ci=100,fd=101,pd=102,md=103,gd=104,xd=200,yd=201,vd=202,_d=203,To=204,Ao=205,Md=206,bd=207,Sd=208,wd=209,Ed=210,Td=211,Ad=212,Rd=213,Cd=214,Ro=0,Co=1,Po=2,qi=3,Io=4,Lo=5,Do=6,Uo=7,Jh=0,Pd=1,Id=2,qn=0,Ld=1,Dd=2,Ud=3,Nd=4,Od=5,kd=6,qs=7;var jh=300,Xi=301,$i=302,No=303,Oo=304,ua=306,Ps=1e3,di=1001,ko=1002,Ke=1003,Fd=1004;var ar=1005;var ln=1006,qa=1007;var fi=1008;var Tn=1009,Qh=1010,tu=1011,Is=1012,jl=1013,pi=1014,wn=1015,Xs=1016,Ql=1017,tc=1018,Yi=1020,eu=35902,nu=1021,iu=1022,cn=1023,su=1024,ru=1025,Vi=1026,Zi=1027,au=1028,ec=1029,ou=1030,nc=1031;var ic=1033,Dr=33776,Ur=33777,Nr=33778,Or=33779,Fo=35840,Bo=35841,zo=35842,Ho=35843,Vo=36196,Go=37492,Wo=37496,qo=37808,Xo=37809,$o=37810,Yo=37811,Zo=37812,Ko=37813,Jo=37814,jo=37815,Qo=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,kr=36492,rl=36494,al=36495,lu=36283,ol=36284,ll=36285,cl=36286;var Br=2300,hl=2301,Xa=2302,qc=2400,Xc=2401,$c=2402;var Bd=3200,zd=3201;var cu=0,Hd=1,Vn="",ge="srgb",Qn="srgb-linear",sc="display-p3",da="display-p3-linear",zr="linear",se="srgb",Hr="rec709",Vr="p3";var Ei=7680;var Yc=519,Vd=512,Gd=513,Wd=514,hu=515,qd=516,Xd=517,$d=518,Yd=519,Zc=35044;var Kc="300 es",En=2e3,Gr=2001,Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,ws=Math.PI/180,Ls=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function rc(i,t){return(i%t+t)%t}function Zd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kd(i,t,e){return i!==t?(e-i)/(t-i):0}function Es(i,t,e){return(1-e)*i+e*t}function Jd(i,t,e,n){return Es(i,t,1-Math.exp(-e*n))}function jd(i,t=1){return t-Math.abs(rc(i,t*2)-t)}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nf(i,t){return i+Math.random()*(t-i)}function sf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(Jc=i);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(i){return i*ws}function of(i){return i*Ls}function lf(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var uu={DEG2RAD:ws,RAD2DEG:Ls,generateUUID:Mi,clamp:xe,euclideanModulo:rc,mapLinear:Zd,inverseLerp:Kd,lerp:Es,damp:Jd,pingpong:jd,smoothstep:Qd,smootherstep:tf,randInt:ef,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:af,radToDeg:of,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:uf,normalize:Oe,denormalize:Bi},st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],_=s[1],v=s[4],b=s[7],P=s[2],E=s[5],A=s[8];return r[0]=a*y+o*_+l*P,r[3]=a*m+o*v+l*E,r[6]=a*p+o*b+l*A,r[1]=c*y+h*_+u*P,r[4]=c*m+h*v+u*E,r[7]=c*p+h*b+u*A,r[2]=d*y+f*_+g*P,r[5]=d*m+f*v+g*E,r[8]=d*p+f*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$a=new kt;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){let i=Wr("canvas");return i.style.display="block",i}var jc={};function Fr(i){i in jc||(jc[i]=!0,console.warn(i))}function ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),th=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[Qn]:{transfer:zr,primaries:Hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ge]:{transfer:se,primaries:Hr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[da]:{transfer:zr,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(th),fromReference:i=>i.applyMatrix3(Qc)},[sc]:{transfer:se,primaries:Vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(th),fromReference:i=>i.applyMatrix3(Qc).convertLinearToSRGB()}},gf=new Set([Qn,da]),Yt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=xs[t].toReference,s=xs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return xs[i].primaries},getTransfer:function(i){return i===Vn?zr:xs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(xs[t].luminanceCoefficients)}};function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Wr("canvas")),Ti.width=t.width,Ti.height=t.height;let n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xf=0,qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Za(s[a].image)):r.push(Za(s[a]))}else r=Za(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yf=0,$e=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=ln,a=fi,o=cn,l=Tn,c=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Mi(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=jh;$e.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(f+1)/2,P=(p+1)/2,E=(h+d)/4,A=(u+y)/4,R=(g+m)/4;return v>b&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=A/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=R/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends Yn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*y,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),E=Math.atan2(P,p*_);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}let b=o*_;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+y*b,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new C,eh=new Zn,mi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),lr.subVectors(this.max,ys),Ai.subVectors(t.a,ys),Ri.subVectors(t.b,ys),Ci.subVectors(t.c,ys),On.subVectors(Ri,Ai),kn.subVectors(Ci,Ri),ni.subVectors(Ai,Ci);let e=[0,-On.z,On.y,0,-kn.z,kn.y,0,-ni.z,ni.y,On.z,0,-On.x,kn.z,0,-kn.x,ni.z,0,-ni.x,-On.y,On.x,0,-kn.y,kn.x,0,-ni.y,ni.x,0];return!Ja(e,Ai,Ri,Ci,lr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Ai,Ri,Ci,lr))?!1:(cr.crossVectors(On,kn),e=[cr.x,cr.y,cr.z],Ja(e,Ai,Ri,Ci,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yn=[new C,new C,new C,new C,new C,new C,new C,new C],nn=new C,or=new mi,Ai=new C,Ri=new C,Ci=new C,On=new C,kn=new C,ni=new C,ys=new C,lr=new C,cr=new C,ii=new C;function Ja(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vf=new mi,vs=new C,ja=new C,Ki=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(ja)),this.expandByPoint(vs.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new C,Qa=new C,hr=new C,Fn=new C,to=new C,ur=new C,eo=new C,Ds=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qa.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Qa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(hr),o=Fn.dot(this.direction),l=-Fn.dot(hr),c=Fn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(hr,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){to.subVectors(e,t),ur.subVectors(n,t),eo.crossVectors(to,ur);let a=this.direction.dot(eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);let l=o*this.direction.dot(ur.crossVectors(Fn,ur));if(l<0)return null;let c=o*this.direction.dot(to.cross(Fn));if(c<0||l+c>a)return null;let h=-o*Fn.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,Mf)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Bn.crossVectors(n,qe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Bn.crossVectors(n,qe)),Bn.normalize(),dr.crossVectors(qe,Bn),s[0]=Bn.x,s[4]=dr.x,s[8]=qe.x,s[1]=Bn.y,s[5]=dr.y,s[9]=qe.y,s[2]=Bn.z,s[6]=dr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],_=n[3],v=n[7],b=n[11],P=n[15],E=s[0],A=s[4],R=s[8],F=s[12],x=s[1],S=s[5],O=s[9],N=s[13],k=s[2],X=s[6],z=s[10],J=s[14],G=s[3],lt=s[7],Z=s[11],tt=s[15];return r[0]=a*E+o*x+l*k+c*G,r[4]=a*A+o*S+l*X+c*lt,r[8]=a*R+o*O+l*z+c*Z,r[12]=a*F+o*N+l*J+c*tt,r[1]=h*E+u*x+d*k+f*G,r[5]=h*A+u*S+d*X+f*lt,r[9]=h*R+u*O+d*z+f*Z,r[13]=h*F+u*N+d*J+f*tt,r[2]=g*E+y*x+m*k+p*G,r[6]=g*A+y*S+m*X+p*lt,r[10]=g*R+y*O+m*z+p*Z,r[14]=g*F+y*N+m*J+p*tt,r[3]=_*E+v*x+b*k+P*G,r[7]=_*A+v*S+b*X+P*lt,r[11]=_*R+v*O+b*z+P*Z,r[15]=_*F+v*N+b*J+P*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],_=u*m*c-y*d*c+y*l*f-o*m*f-u*l*p+o*d*p,v=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*y*c-g*u*c+g*o*f-a*y*f-h*o*p+a*u*p,P=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,E=e*_+n*v+s*b+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=_*A,t[1]=(y*d*r-u*m*r-y*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=b*A,t[9]=(g*u*r-h*y*r-g*n*f+e*y*f+h*n*p-e*u*p)*A,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=P*A,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,_=l*c,v=l*h,b=l*u,P=n.x,E=n.y,A=n.z;return s[0]=(1-(y+p))*P,s[1]=(f+b)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-_)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Pi.set(s[0],s[1],s[2]).length(),a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let c=1/r,h=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=En){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===En)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,y;if(o===En)g=(a+r)*u,y=-2*u;else if(o===Gr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Pi=new C,sn=new ae,_f=new C(0,0,0),Mf=new C(1,1,1),Bn=new C,dr=new C,qe=new C,nh=new ae,ih=new Zn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bf=0,sh=new C,Ii=new Zn,_n=new ae,fr=new C,_s=new C,Sf=new C,wf=new Zn,rh=new C(1,0,0),ah=new C(0,1,0),oh=new C(0,0,1),lh={type:"added"},Ef={type:"removed"},Li={type:"childadded",child:null},no={type:"childremoved",child:null},Le=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new pn,n=new Zn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(oh,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(_s,fr,this.up):_n.lookAt(fr,_s,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(_n),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new C(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new C,Mn=new C,io=new C,bn=new C,Di=new C,Ui=new C,ch=new C,so=new C,ro=new C,ao=new C,oo=new Qt,lo=new Qt,co=new Qt,hi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Mn.subVectors(n,e),io.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(Mn),l=rn.dot(io),c=Mn.dot(Mn),h=Mn.dot(io),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oo,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Mn.subVectors(t,e),rn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),rn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Ui.subVectors(r,n),so.subVectors(t,n);let l=Di.dot(so),c=Ui.dot(so);if(l<=0&&c<=0)return e.copy(n);ro.subVectors(t,s);let h=Di.dot(ro),u=Ui.dot(ro);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);ao.subVectors(t,r);let f=Di.dot(ao),g=Ui.dot(ao);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ui,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ch.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ch,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=rc(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Yt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(xe(Ie.r*255,0,255))*65536+Math.round(xe(Ie.g*255,0,255))*256+Math.round(xe(Ie.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ge){Yt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(pr);let n=Es(zn.h,pr.h,e),s=Es(zn.s,pr.s,e),r=Es(zn.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Et;Et.NAMES=fu;var Tf=0,Kn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Wn,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new C,mr=new st,Te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zc&&(t.usage=this.usage),t}};var $r=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},Af=0,Ze=new ae,uo=new Le,Ni=new C,Xe=new mi,Ms=new mi,_e=new C,Re=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?Yr:$r)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Xe.min,Ms.min),Xe.expandByPoint(_e),_e.addVectors(Xe.max,Ms.max),Xe.expandByPoint(_e)):(Xe.expandByPoint(Ms.min),Xe.expandByPoint(Ms.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),_e.add(Ni)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new C,l[R]=new C;let c=new C,h=new C,u=new C,d=new st,f=new st,g=new st,y=new C,m=new C;function p(R,F,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[R].add(y),o[F].add(y),o[x].add(y),l[R].add(m),l[F].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,F=_.length;R<F;++R){let x=_[R],S=x.start,O=x.count;for(let N=S,k=S+O;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new C,b=new C,P=new C,E=new C;function A(R){P.fromBufferAttribute(s,R),E.copy(P);let F=o[R];v.copy(F),v.sub(P.multiplyScalar(P.dot(F))).normalize(),b.crossVectors(E,F);let S=b.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,S)}for(let R=0,F=_.length;R<F;++R){let x=_[R],S=x.start,O=x.count;for(let N=S,k=S+O;N<k;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new ae,si=new Ds,gr=new Ki,uh=new C,xr=new C,yr=new C,vr=new C,fo=new C,_r=new C,dh=new C,Mr=new C,et=class extends Le{constructor(t=new Re,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fo.fromBufferAttribute(u,t),a?_r.addScaledVector(fo,h):_r.addScaledVector(fo.sub(e),h))}e.add(_r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(gr.containsPoint(si.origin)===!1&&(si.intersectSphere(gr,uh)===null||si.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),si.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,P=v;b<P;b+=3){let E=o.getX(b),A=o.getX(b+1),R=o.getX(b+2);s=br(this,p,t,n,c,h,u,E,A,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);s=br(this,a,t,n,c,h,u,_,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,P=v;b<P;b+=3){let E=b,A=b+1,R=b+2;s=br(this,p,t,n,c,h,u,E,A,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=m,v=m+1,b=m+2;s=br(this,a,t,n,c,h,u,_,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rf(i,t,e,n,s,r,a,o){let l;if(t.side===be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xr),i.getVertexPosition(l,yr),i.getVertexPosition(c,vr);let h=Rf(i,t,e,n,xr,yr,vr,dh);if(h){let u=new C;hi.getBarycoord(dh,xr,yr,vr,u),s&&(h.uv=hi.getInterpolatedAttribute(s,o,l,c,u,new st)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,u,new st)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};hi.getNormal(xr,yr,vr,d.normal),h.face=d,h.barycoord=u}return h}var Ce=class i extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(y,m,p,_,v,b,P,E,A,R,F){let x=b/A,S=P/R,O=b/2,N=P/2,k=E/2,X=A+1,z=R+1,J=0,G=0,lt=new C;for(let Z=0;Z<z;Z++){let tt=Z*S-N;for(let St=0;St<X;St++){let Nt=St*x-O;lt[y]=Nt*_,lt[m]=tt*v,lt[p]=k,c.push(lt.x,lt.y,lt.z),lt[y]=0,lt[m]=0,lt[p]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(St/A),u.push(1-Z/R),J+=1}}for(let Z=0;Z<R;Z++)for(let tt=0;tt<A;tt++){let St=d+tt+X*Z,Nt=d+tt+X*(Z+1),W=d+(tt+1)+X*(Z+1),Q=d+(tt+1)+X*Z;l.push(St,Nt,Q),l.push(Nt,W,Q),G+=6}o.addGroup(f,G,F),f+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Pf={clone:Ji,merge:ke},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new C,fh=new st,ph=new st,Me=class extends Zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,ki=1,pl=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Oi,ki,t,e);s.layers=this.layers,this.add(s);let r=new Me(Oi,ki,t,e);r.layers=this.layers,this.add(r);let a=new Me(Oi,ki,t,e);a.layers=this.layers,this.add(a);let o=new Me(Oi,ki,t,e);o.layers=this.layers,this.add(o);let l=new Me(Oi,ki,t,e);l.layers=this.layers,this.add(l);let c=new Me(Oi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Kr=class extends $e{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Gn});r.uniforms.tEquirect.value=e;let a=new et(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=ln),new pl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},po=new C,Df=new C,Uf=new kt,an=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=po.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Ki,Sr=new C,Ns=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+_).normalize(),n[3].setComponents(l-a,d-h,m-g,b-_).normalize(),n[4].setComponents(l-o,d-u,m-y,b-v).normalize(),e===En)n[5].setComponents(l+o,d+u,m+y,b+v).normalize();else if(e===Gr)n[5].setComponents(o,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var De=class i extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let v=0;v<c;v++){let b=v*u-r;g.push(b,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let v=_+c*p,b=_+c*(p+1),P=_+1+c*(p+1),E=_+1+c*p;f.push(v,b,E),f.push(b,P,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`
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
}`,pp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Np=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Wm=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Km=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,jm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Qm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,t0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,e0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,n0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,s0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,r0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,a0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,o0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,l0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,c0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,h0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,p0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ot={alphahash_fragment:Of,alphahash_pars_fragment:kf,alphamap_fragment:Ff,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Gf,batching_pars_vertex:Wf,batching_vertex:qf,begin_vertex:Xf,beginnormal_vertex:$f,bsdfs:Yf,iridescence_fragment:Zf,bumpmap_pars_fragment:Kf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Rp,envmap_vertex:yp,fog_vertex:vp,fog_pars_vertex:_p,fog_fragment:Mp,fog_pars_fragment:bp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:Op,lights_fragment_end:kp,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:qp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Yp,morphcolor_vertex:Zp,morphnormal_vertex:Kp,morphtarget_pars_vertex:Jp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:ym,shadowmap_vertex:vm,shadowmask_pars_fragment:_m,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Rm,transmission_fragment:Cm,transmission_pars_fragment:Pm,uv_pars_fragment:Im,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Nm,background_frag:Om,backgroundCube_vert:km,backgroundCube_frag:Fm,cube_vert:Bm,cube_frag:zm,depth_vert:Hm,depth_frag:Vm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:qm,equirect_frag:Xm,linedashed_vert:$m,linedashed_frag:Ym,meshbasic_vert:Zm,meshbasic_frag:Km,meshlambert_vert:Jm,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:s0,meshphysical_vert:r0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:l0,points_vert:c0,points_frag:h0,shadow_vert:u0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},rt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},fn={basic:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ke([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ke([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ke([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ke([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ke([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ke([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ke([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ke([rt.lights,rt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};fn.physical={uniforms:ke([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var wr={r:0,b:0,g:0},ai=new pn,m0=new ae;function g0(i,t,e,n,s,r,a){let o=new Et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function y(_){let v=!1,b=g(_);b===null?p(o,l):b&&b.isColor&&(p(b,1),v=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===ua)?(h===void 0&&(h=new et(new Ce(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(v.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(ai)),h.material.toneMapped=Yt.getTransfer(b.colorSpace)!==se,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new et(new De(2,2),new Je({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(b.colorSpace)!==se,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(wr,pu(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:y,addToRenderList:m}}function x0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,S,O,N,k){let X=!1,z=u(N,O,S);r!==z&&(r=z,c(r.object)),X=f(x,N,O,k),X&&g(x,N,O,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(x,S,O,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,S,O){let N=O.wireframe===!0,k=n[x.id];k===void 0&&(k={},n[x.id]=k);let X=k[S.id];X===void 0&&(X={},k[S.id]=X);let z=X[N];return z===void 0&&(z=d(l()),X[N]=z),z}function d(x){let S=[],O=[],N=[];for(let k=0;k<e;k++)S[k]=0,O[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:O,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,S,O,N){let k=r.attributes,X=S.attributes,z=0,J=O.getAttributes();for(let G in J)if(J[G].location>=0){let Z=k[G],tt=X[G];if(tt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),Z===void 0||Z.attribute!==tt||tt&&Z.data!==tt.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(x,S,O,N){let k={},X=S.attributes,z=0,J=O.getAttributes();for(let G in J)if(J[G].location>=0){let Z=X[G];Z===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));let tt={};tt.attribute=Z,Z&&Z.data&&(tt.data=Z.data),k[G]=tt,z++}r.attributes=k,r.attributesNum=z,r.index=N}function y(){let x=r.newAttributes;for(let S=0,O=x.length;S<O;S++)x[S]=0}function m(x){p(x,0)}function p(x,S){let O=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;O[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),k[x]!==S&&(i.vertexAttribDivisor(x,S),k[x]=S)}function _(){let x=r.newAttributes,S=r.enabledAttributes;for(let O=0,N=S.length;O<N;O++)S[O]!==x[O]&&(i.disableVertexAttribArray(O),S[O]=0)}function v(x,S,O,N,k,X,z){z===!0?i.vertexAttribIPointer(x,S,O,k,X):i.vertexAttribPointer(x,S,O,N,k,X)}function b(x,S,O,N){y();let k=N.attributes,X=O.getAttributes(),z=S.defaultAttributeValues;for(let J in X){let G=X[J];if(G.location>=0){let lt=k[J];if(lt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){let Z=lt.normalized,tt=lt.itemSize,St=t.get(lt);if(St===void 0)continue;let Nt=St.buffer,W=St.type,Q=St.bytesPerElement,xt=W===i.INT||W===i.UNSIGNED_INT||lt.gpuType===jl;if(lt.isInterleavedBufferAttribute){let ct=lt.data,Ct=ct.stride,At=lt.offset;if(ct.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt,ct.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let zt=0;zt<G.locationSize;zt++)m(G.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let zt=0;zt<G.locationSize;zt++)v(G.location+zt,tt/G.locationSize,W,Z,Ct*Q,(At+tt/G.locationSize*zt)*Q,xt)}else{if(lt.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,lt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let ct=0;ct<G.locationSize;ct++)v(G.location+ct,tt/G.locationSize,W,Z,tt*Q,tt/G.locationSize*ct*Q,xt)}}else if(z!==void 0){let Z=z[J];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(G.location,Z);break;case 3:i.vertexAttrib3fv(G.location,Z);break;case 4:i.vertexAttrib4fv(G.location,Z);break;default:i.vertexAttrib1fv(G.location,Z)}}}}_()}function P(){R();for(let x in n){let S=n[x];for(let O in S){let N=S[O];for(let k in N)h(N[k].object),delete N[k];delete S[O]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let S=n[x.id];for(let O in S){let N=S[O];for(let k in N)h(N[k].object),delete N[k];delete S[O]}delete n[x.id]}function A(x){for(let S in n){let O=n[S];if(O[x.id]===void 0)continue;let N=O[x.id];for(let k in N)h(N[k].object),delete N[k];delete O[x.id]}}function R(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function y0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)e.update(g,n,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:P,maxSamples:E}}function _0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,b=p.clippingState||null;l.value=b,b=h(g,d,v,f);for(let P=0;P!==v;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==y;++v,b+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function M0(i){let t=new WeakMap;function e(a,o){return o===No?a.mapping=Xi:o===Oo&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===No||o===Oo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ml(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Jr=class extends Zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zi=4,mh=[.125,.215,.35,.446,.526,.582],ui=20,mo=new Jr,gh=new Et,go=null,xo=0,yo=0,vo=!1,li=(1+Math.sqrt(5))/2,Fi=1/li,xh=[new C(-li,Fi,0),new C(li,Fi,0),new C(-Fi,0,li),new C(Fi,0,li),new C(0,li,-Fi),new C(0,li,Fi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Jn=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,xo,yo),this._renderer.xr.enabled=vo,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Xs,format:cn,colorSpace:Qn,depthBuffer:!1},s=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(r)),this._blurMaterial=S0(r,t,e)}return s}_compileMaterial(t){let e=new et(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,s){let o=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gh),h.toneMapping=qn,h.autoClear=!1;let f=new Ae({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new et(new Ce,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(gh),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Er(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xh[(s-r-1)%xh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new et(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let p=[],_=0;for(let A=0;A<ui;++A){let R=A/y,F=Math.exp(-R*R/2);p.push(F),A===0?_+=F:A<m&&(_+=2*F)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let b=this._sizeLods[s],P=3*b*(s>v-zi?s-v+zi:0),E=4*(this._cubeSize-b);Er(e,P,E,3*b,2*b),l.setRenderTarget(e),l.render(u,mo)}};function b0(i){let t=[],e=[],n=[],s=i,r=i-zi+1+mh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-zi?l=mh[a-i+zi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),v=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,R=E>2?0:-1,F=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(F,y*g*E),v.set(d,m*g*E);let x=[E,E,E,E,E,E];b.set(x,p*g*E)}let P=new Re;P.setAttribute("position",new Te(_,y)),P.setAttribute("uv",new Te(v,m)),P.setAttribute("faceIndex",new Te(b,p)),t.push(P),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(i,t,e){let n=new An(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function S0(i,t,e){let n=new Float32Array(ui),s=new C(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vh(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function _h(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function w0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===No||l===Oo,h=l===Xi||l===$i;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Jn(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Jn(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function E0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let v=0,b=_.length;v<b;v+=3){let P=_[v+0],E=_[v+1],A=_[v+2];d.push(P,E,E,A,A,P)}}else if(g!==void 0){let _=g.array;y=g.version;for(let v=0,b=_.length/3-1;v<b;v+=3){let P=v+0,E=v+1,A=v+2;d.push(P,E,E,A,A,P)}}else return;let m=new(du(d)?Yr:$r)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function A0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_];for(let _=0;_<y.length;_++)e.update(p,n,y[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C0(i,t,e){let n=new WeakMap,s=new Qt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let F=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let b=o.attributes.position.count*v,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*P*4*u),A=new Xr(E,b,P,u);A.type=wn,A.needsUpdate=!0;let R=v*4;for(let x=0;x<u;x++){let S=m[x],O=p[x],N=_[x],k=b*P*4*x;for(let X=0;X<S.count;X++){let z=X*R;f===!0&&(s.fromBufferAttribute(S,X),E[k+z+0]=s.x,E[k+z+1]=s.y,E[k+z+2]=s.z,E[k+z+3]=0),g===!0&&(s.fromBufferAttribute(O,X),E[k+z+4]=s.x,E[k+z+5]=s.y,E[k+z+6]=s.z,E[k+z+7]=0),y===!0&&(s.fromBufferAttribute(N,X),E[k+z+8]=s.x,E[k+z+9]=s.y,E[k+z+10]=s.z,E[k+z+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new st(b,P)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function P0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var jr=class extends $e{constructor(t,e,n,s,r,a,o,l,c,h=Vi){if(h!==Vi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=pi),n===void 0&&h===Zi&&(n=Yi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gu=new $e,Mh=new jr(1,1),xu=new Xr,yu=new fl,vu=new Kr,bh=[],Sh=[],wh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),ve(e,n)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),ve(e,n)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ye(e,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),ve(e,n)}}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function V0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=hu,r=Mh):r=gu,e.setTexture2D(t||r,s)}function $0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yu,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vu,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xu,s)}function K0(i){switch(i){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return O0;case 35676:return k0;case 5124:case 35670:return F0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function J0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Q0(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function tg(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function eg(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ng(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ig(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sg(i,t){i.uniform1iv(this.addr,t)}function rg(i,t){i.uniform2iv(this.addr,t)}function ag(i,t){i.uniform3iv(this.addr,t)}function og(i,t){i.uniform4iv(this.addr,t)}function lg(i,t){i.uniform1uiv(this.addr,t)}function cg(i,t){i.uniform2uiv(this.addr,t)}function hg(i,t){i.uniform3uiv(this.addr,t)}function ug(i,t){i.uniform4uiv(this.addr,t)}function dg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gu,r[a])}function fg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yu,r[a])}function pg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vu,r[a])}function mg(i,t,e){let n=this.cache,s=t.length,r=fa(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function gg(i){switch(i){case 5126:return J0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K0(e.type)}},xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gg(e.type)}},yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},_o=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function xg(i,t,e){let n=i.name,s=n.length;for(_o.lastIndex=0;;){let r=_o.exec(n),a=_o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ah(e,c===void 0?new gl(o,i,t):new xl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new yl(o),Ah(e,u)),e=u}}}var Wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);xg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yg=37297,vg=0;function _g(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mg(i){let t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i),n;switch(t===e?n="":t===Vr&&e===Hr?n="LinearDisplayP3ToLinearSRGB":t===Hr&&e===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case da:return[n,"LinearTransferOETF"];case ge:case sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_g(i.getShaderSource(t),a)}else return s}function bg(i,t){let e=Mg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sg(i,t){let e;switch(t){case Ld:e="Linear";break;case Dd:e="Reinhard";break;case Ud:e="Cineon";break;case Nd:e="ACESFilmic";break;case kd:e="AgX";break;case qs:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tr=new C;function wg(){Yt.getLuminanceCoefficients(Tr);let i=Tr.x.toFixed(4),t=Tr.y.toFixed(4),e=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ss(i){return i!==""}function Ph(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(Rg,Pg)}var Cg=new Map;function Pg(i,t){let e=Ot[t];if(e===void 0){let n=Cg.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}var Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(Ig,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ws?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case $i:t="ENVMAP_TYPE_CUBE";break;case ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function kg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dg(e),c=Ug(e),h=Ng(e),u=Og(e),d=kg(e),f=Eg(e),g=Tg(r),y=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==qn?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=vl(a),a=Ph(a,e),a=Ih(a,e),o=vl(o),o=Ph(o,e),o=Ih(o,e),a=Lh(a),o=Lh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+a,b=_+p+o,P=Rh(s,s.VERTEX_SHADER,v),E=Rh(s,s.FRAGMENT_SHADER,b);s.attachShader(y,P),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(S){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y).trim(),N=s.getShaderInfoLog(P).trim(),k=s.getShaderInfoLog(E).trim(),X=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,E);else{let J=Ch(s,P,"vertex"),G=Ch(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+J+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||k==="")&&(z=!1);z&&(S.diagnostics={runnable:X,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(P),s.deleteShader(E),R=new Wi(s,y),F=Ag(s,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,yg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=E,this}var Bg=0,_l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ml(t),e.set(t,n)),n}},Ml=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function zg(i,t,e,n,s,r,a){let o=new Us,l=new _l,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,O,N,k){let X=N.fog,z=k.geometry,J=x.isMeshStandardMaterial?N.environment:null,G=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),lt=G&&G.mapping===ua?G.image.height:null,Z=y[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,St=tt!==void 0?tt.length:0,Nt=0;z.morphAttributes.position!==void 0&&(Nt=1),z.morphAttributes.normal!==void 0&&(Nt=2),z.morphAttributes.color!==void 0&&(Nt=3);let W,Q,xt,ct;if(Z){let ze=fn[Z];W=ze.vertexShader,Q=ze.fragmentShader}else W=x.vertexShader,Q=x.fragmentShader,l.update(x),xt=l.getVertexShaderID(x),ct=l.getFragmentShaderID(x);let Ct=i.getRenderTarget(),At=k.isInstancedMesh===!0,zt=k.isBatchedMesh===!0,jt=!!x.map,Ht=!!x.matcap,I=!!G,Ve=!!x.aoMap,Ft=!!x.lightMap,Gt=!!x.bumpMap,Pt=!!x.normalMap,ne=!!x.displacementMap,Dt=!!x.emissiveMap,T=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,Y=x.clearcoat>0,j=x.dispersion>0,$=x.iridescence>0,_t=x.sheen>0,ot=x.transmission>0,pt=B&&!!x.anisotropyMap,Wt=Y&&!!x.clearcoatMap,nt=Y&&!!x.clearcoatNormalMap,mt=Y&&!!x.clearcoatRoughnessMap,It=$&&!!x.iridescenceMap,Lt=$&&!!x.iridescenceThicknessMap,gt=_t&&!!x.sheenColorMap,Bt=_t&&!!x.sheenRoughnessMap,Ut=!!x.specularMap,te=!!x.specularColorMap,L=!!x.specularIntensityMap,dt=ot&&!!x.transmissionMap,q=ot&&!!x.thicknessMap,K=!!x.gradientMap,ht=!!x.alphaMap,ft=x.alphaTest>0,Vt=!!x.alphaHash,pe=!!x.extensions,Be=qn;x.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Be=i.toneMapping);let qt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Q,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:zt,batchingColor:zt&&k._colorsTexture!==null,instancing:At,instancingColor:At&&k.instanceColor!==null,instancingMorph:At&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Qn,alphaToCoverage:!!x.alphaToCoverage,map:jt,matcap:Ht,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:lt,aoMap:Ve,lightMap:Ft,bumpMap:Gt,normalMap:Pt,displacementMap:f&&ne,emissiveMap:Dt,normalMapObjectSpace:Pt&&x.normalMapType===Hd,normalMapTangentSpace:Pt&&x.normalMapType===cu,metalnessMap:T,roughnessMap:M,anisotropy:B,anisotropyMap:pt,clearcoat:Y,clearcoatMap:Wt,clearcoatNormalMap:nt,clearcoatRoughnessMap:mt,dispersion:j,iridescence:$,iridescenceMap:It,iridescenceThicknessMap:Lt,sheen:_t,sheenColorMap:gt,sheenRoughnessMap:Bt,specularMap:Ut,specularColorMap:te,specularIntensityMap:L,transmission:ot,transmissionMap:dt,thicknessMap:q,gradientMap:K,opaque:x.transparent===!1&&x.blending===Wn&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Vt,combine:x.combine,mapUv:jt&&m(x.map.channel),aoMapUv:Ve&&m(x.aoMap.channel),lightMapUv:Ft&&m(x.lightMap.channel),bumpMapUv:Gt&&m(x.bumpMap.channel),normalMapUv:Pt&&m(x.normalMap.channel),displacementMapUv:ne&&m(x.displacementMap.channel),emissiveMapUv:Dt&&m(x.emissiveMap.channel),metalnessMapUv:T&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:pt&&m(x.anisotropyMap.channel),clearcoatMapUv:Wt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(x.sheenRoughnessMap.channel),specularMapUv:Ut&&m(x.specularMap.channel),specularColorMapUv:te&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:dt&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:ht&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Pt||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(jt||ht),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:jt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===be,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)S.push(O),S.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(v(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){let S=y[x.type],O;if(S){let N=fn[S];O=Pf.clone(N.uniforms)}else O=x.uniforms;return O}function E(x,S){let O;for(let N=0,k=h.length;N<k;N++){let X=h[N];if(X.cacheKey===S){O=X,++O.usedTimes;break}}return O===void 0&&(O=new Fg(i,S,x,r),h.push(O)),O}function A(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:P,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:F}}function Hg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Vg),n.length>1&&n.sort(d||Uh),s.length>1&&s.sort(d||Uh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Nh,i.set(n,[a])):s>=r.length?(a=new Nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){let t=new Wg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,_=0,v=0,b=0,P=0,E=0,A=0;c.sort($g);for(let F=0,x=c.length;F<x;F++){let S=c[F],O=S.color,N=S.intensity,k=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],N);A++}else if(S.isDirectionalLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let J=S.shadow,G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=S.shadow.matrix,_++}n.directional[f]=z,f++}else if(S.isSpotLight){let z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(O).multiplyScalar(N),z.distance=k,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[y]=z;let J=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,J.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[y]=J.matrix,S.castShadow){let G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=X,b++}y++}else if(S.isRectAreaLight){let z=t.get(S);z.color.copy(O).multiplyScalar(N),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=z,m++}else if(S.isPointLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let J=S.shadow,G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=z,g++}else if(S.isHemisphereLight){let z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(N),z.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=A,n.version=Xg++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Oh(i){let t=new Yg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Zg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Oh(i),t.set(s,[o])):r>=a.length?(o=new Oh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var bl=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sl=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new Ns,s=new st,r=new st,a=new Qt,o=new bl({depthPacking:zd}),l=new Sl,c={},h=e.maxTextureSize,u={[Xn]:be,[be]:Xn,[on]:on},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Kg,fragmentShader:Jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let F=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=p!==Sn&&this.type===Sn,k=p===Sn&&this.type!==Sn;for(let X=0,z=E.length;X<z;X++){let J=E[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let lt=G.getFrameExtents();if(s.multiply(lt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,G.mapSize.y=r.y)),G.map===null||N===!0||k===!0){let tt=this.type!==Sn?{minFilter:Ke,magFilter:Ke}:{};G.map!==null&&G.map.dispose(),G.map=new An(s.x,s.y,tt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let Z=G.getViewportCount();for(let tt=0;tt<Z;tt++){let St=G.getViewport(tt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),O.viewport(a),G.updateMatrices(J,tt),n=G.getFrustum(),b(A,R,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Sn&&_(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,x,S)};function _(E,A){let R=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,f,y,null)}function v(E,A,R,F){let x=null,S=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=x.uuid,N=A.uuid,k=c[O];k===void 0&&(k={},c[O]=k);let X=k[N];X===void 0&&(X=x.clone(),k[N]=X,A.addEventListener("dispose",P)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,F===Sn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let O=i.properties.get(x);O.light=R}return x}function b(E,A,R,F,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Sn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let N=t.update(E),k=E.material;if(Array.isArray(k)){let X=N.groups;for(let z=0,J=X.length;z<J;z++){let G=X[z],lt=k[G.materialIndex];if(lt&&lt.visible){let Z=v(E,lt,F,x);E.onBeforeShadow(i,E,A,R,N,Z,G),i.renderBufferDirect(R,null,N,Z,E,G),E.onAfterShadow(i,E,A,R,N,Z,G)}}}else if(k.visible){let X=v(E,k,F,x);E.onBeforeShadow(i,E,A,R,N,X,null),i.renderBufferDirect(R,null,N,X,E,null),E.onAfterShadow(i,E,A,R,N,X,null)}}let O=E.children;for(let N=0,k=O.length;N<k;N++)b(O[N],A,R,F,x)}function P(E){E.target.removeEventListener("dispose",P);for(let R in c){let F=c[R],x=E.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}var Qg={[Ro]:Co,[Po]:Do,[Io]:Uo,[qi]:Lo,[Co]:Ro,[Do]:Po,[Uo]:Io,[Lo]:qi};function tx(i){function t(){let L=!1,dt=new Qt,q=null,K=new Qt(0,0,0,0);return{setMask:function(ht){q!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),q=ht)},setLocked:function(ht){L=ht},setClear:function(ht,ft,Vt,pe,Be){Be===!0&&(ht*=pe,ft*=pe,Vt*=pe),dt.set(ht,ft,Vt,pe),K.equals(dt)===!1&&(i.clearColor(ht,ft,Vt,pe),K.copy(dt))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function e(){let L=!1,dt=!1,q=null,K=null,ht=null;return{setReversed:function(ft){dt=ft},setTest:function(ft){ft?xt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(ft){q!==ft&&!L&&(i.depthMask(ft),q=ft)},setFunc:function(ft){if(dt&&(ft=Qg[ft]),K!==ft){switch(ft){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ht!==ft&&(i.clearDepth(ft),ht=ft)},reset:function(){L=!1,q=null,K=null,ht=null}}}function n(){let L=!1,dt=null,q=null,K=null,ht=null,ft=null,Vt=null,pe=null,Be=null;return{setTest:function(qt){L||(qt?xt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(qt){dt!==qt&&!L&&(i.stencilMask(qt),dt=qt)},setFunc:function(qt,ze,xn){(q!==qt||K!==ze||ht!==xn)&&(i.stencilFunc(qt,ze,xn),q=qt,K=ze,ht=xn)},setOp:function(qt,ze,xn){(ft!==qt||Vt!==ze||pe!==xn)&&(i.stencilOp(qt,ze,xn),ft=qt,Vt=ze,pe=xn)},setLocked:function(qt){L=qt},setClear:function(qt){Be!==qt&&(i.clearStencil(qt),Be=qt)},reset:function(){L=!1,dt=null,q=null,K=null,ht=null,ft=null,Vt=null,pe=null,Be=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,_=null,v=null,b=null,P=null,E=new Et(0,0,0),A=0,R=!1,F=null,x=null,S=null,O=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,z=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=z>=2);let G=null,lt={},Z=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),St=new Qt().fromArray(Z),Nt=new Qt().fromArray(tt);function W(L,dt,q,K){let ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(L,ft),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<q;Vt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(dt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}let Q={};Q[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),r.setFunc(qi),Ft(!1),Gt(Vc),xt(i.CULL_FACE),I(Gn);function xt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Ct(L,dt){return h[L]!==dt?(i.bindFramebuffer(L,dt),h[L]=dt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=dt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function At(L,dt){let q=d,K=!1;if(L){q=u.get(dt),q===void 0&&(q=[],u.set(dt,q));let ht=L.textures;if(q.length!==ht.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Vt=ht.length;ft<Vt;ft++)q[ft]=i.COLOR_ATTACHMENT0+ft;q.length=ht.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function zt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}let jt={[ci]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[pd]:i.FUNC_REVERSE_SUBTRACT};jt[md]=i.MIN,jt[gd]=i.MAX;let Ht={[xd]:i.ZERO,[yd]:i.ONE,[vd]:i.SRC_COLOR,[To]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[Ad]:i.ONE_MINUS_CONSTANT_COLOR,[Rd]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,dt,q,K,ht,ft,Vt,pe,Be,qt){if(L===Gn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),L!==dd){if(L!==y||qt!==R){if((m!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),m=ci,v=ci),qt)switch(L){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,_=null,b=null,P=null,E.set(0,0,0),A=0,y=L,R=qt}return}ht=ht||dt,ft=ft||q,Vt=Vt||K,(dt!==m||ht!==v)&&(i.blendEquationSeparate(jt[dt],jt[ht]),m=dt,v=ht),(q!==p||K!==_||ft!==b||Vt!==P)&&(i.blendFuncSeparate(Ht[q],Ht[K],Ht[ft],Ht[Vt]),p=q,_=K,b=ft,P=Vt),(pe.equals(E)===!1||Be!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Be),E.copy(pe),A=Be),y=L,R=!1}function Ve(L,dt){L.side===on?ct(i.CULL_FACE):xt(i.CULL_FACE);let q=L.side===be;dt&&(q=!q),Ft(q),L.blending===Wn&&L.transparent===!1?I(Gn):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function Gt(L){L!==hd?(xt(i.CULL_FACE),L!==x&&(L===Vc?i.cullFace(i.BACK):L===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),x=L}function Pt(L){L!==S&&(X&&i.lineWidth(L),S=L)}function ne(L,dt,q){L?(xt(i.POLYGON_OFFSET_FILL),(O!==dt||N!==q)&&(i.polygonOffset(dt,q),O=dt,N=q)):ct(i.POLYGON_OFFSET_FILL)}function Dt(L){L?xt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+k-1),G!==L&&(i.activeTexture(L),G=L)}function M(L,dt,q){q===void 0&&(G===null?q=i.TEXTURE0+k-1:q=G);let K=lt[q];K===void 0&&(K={type:void 0,texture:void 0},lt[q]=K),(K.type!==L||K.texture!==dt)&&(G!==q&&(i.activeTexture(q),G=q),i.bindTexture(L,dt||Q[L]),K.type=L,K.texture=dt)}function B(){let L=lt[G];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){St.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),St.copy(L))}function gt(L){Nt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Nt.copy(L))}function Bt(L,dt){let q=l.get(dt);q===void 0&&(q=new WeakMap,l.set(dt,q));let K=q.get(L);K===void 0&&(K=i.getUniformBlockIndex(dt,L.name),q.set(L,K))}function Ut(L,dt){let K=l.get(dt).get(L);o.get(dt)!==K&&(i.uniformBlockBinding(dt,K,L.__bindingPointIndex),o.set(dt,K))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,lt={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,_=null,v=null,b=null,P=null,E=new Et(0,0,0),A=0,R=!1,F=null,x=null,S=null,O=null,N=null,St.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xt,disable:ct,bindFramebuffer:Ct,drawBuffers:At,useProgram:zt,setBlending:I,setMaterial:Ve,setFlipSided:Ft,setCullFace:Gt,setLineWidth:Pt,setPolygonOffset:ne,setScissorTest:Dt,activeTexture:T,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:mt,texImage3D:It,updateUBOMapping:Bt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:te}}function kh(i,t,e,n){let s=ex(n);switch(e){case nu:return i*t;case su:return i*t;case ru:return i*t*2;case au:return i*t/s.components*s.byteLength;case ec:return i*t/s.components*s.byteLength;case ou:return i*t*2/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case iu:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case ic:return i*t*4/s.components*s.byteLength;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case Fo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kr:case rl:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lu:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(i){switch(i){case Tn:case Qh:return{byteLength:1,components:1};case Is:case tu:case Xs:return{byteLength:2,components:1};case Ql:case tc:return{byteLength:2,components:4};case pi:case jl:case wn:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Wr("canvas")}function y(T,M,B){let Y=1,j=Dt(T);if((j.width>B||j.height>B)&&(Y=B/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(Y*j.width),_t=Math.floor(Y*j.height);u===void 0&&(u=g($,_t));let ot=M?g($,_t):u;return ot.width=$,ot.height=_t,ot.getContext("2d").drawImage(T,0,0,$,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+_t+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Ke&&T.minFilter!==ln}function p(T){i.generateMipmap(T)}function _(T,M,B,Y,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),M===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){let _t=j?zr:Yt.getTransfer(Y);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=_t===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(T,M){let B;return T?M===null||M===pi||M===Yi?B=i.DEPTH24_STENCIL8:M===wn?B=i.DEPTH32F_STENCIL8:M===Is&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===Yi?B=i.DEPTH_COMPONENT24:M===wn?B=i.DEPTH_COMPONENT32F:M===Is&&(B=i.DEPTH_COMPONENT16),B}function b(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){let M=T.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&h.delete(M)}function E(T){let M=T.target;M.removeEventListener("dispose",E),F(M)}function A(T){let M=n.get(T);if(M.__webglInit===void 0)return;let B=T.source,Y=d.get(B);if(Y){let j=Y[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(T),Object.keys(Y).length===0&&d.delete(B)}n.remove(T)}function R(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let B=T.source,Y=d.get(B);delete Y[M.__cacheKey],a.memory.textures--}function F(T){let M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let j=0;j<M.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=T.textures;for(let Y=0,j=B.length;Y<j;Y++){let $=n.get(B[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(T)}let x=0;function S(){x=0}function O(){let T=x;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),x+=1,T}function N(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function k(T,M){let B=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(B,T,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function X(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Nt(B,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function z(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Nt(B,T,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function J(T,M){let B=n.get(T);if(T.version>0&&B.__version!==T.version){W(B,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let G={[Ps]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},lt={[Ke]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Z={[Vd]:i.NEVER,[Yd]:i.ALWAYS,[Gd]:i.LESS,[hu]:i.LEQUAL,[Wd]:i.EQUAL,[$d]:i.GEQUAL,[qd]:i.GREATER,[Xd]:i.NOTEQUAL};function tt(T,M){if(M.type===wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===qa||M.magFilter===ar||M.magFilter===fi||M.minFilter===ln||M.minFilter===qa||M.minFilter===ar||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ke||M.minFilter!==ar&&M.minFilter!==fi||M.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function St(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",P));let Y=M.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let $=N(M);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[$].usedTimes++;let _t=j[T.__cacheKey];_t!==void 0&&(j[T.__cacheKey].usedTimes--,_t.usedTimes===0&&R(M)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return B}function Nt(T,M,B){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let j=St(T,M),$=M.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+B);let _t=n.get($);if($.version!==_t.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let ot=Yt.getPrimaries(Yt.workingColorSpace),pt=M.colorSpace===Vn?null:Yt.getPrimaries(M.colorSpace),Wt=M.colorSpace===Vn||ot===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let nt=y(M.image,!1,s.maxTextureSize);nt=ne(M,nt);let mt=r.convert(M.format,M.colorSpace),It=r.convert(M.type),Lt=_(M.internalFormat,mt,It,M.colorSpace,M.isVideoTexture);tt(Y,M);let gt,Bt=M.mipmaps,Ut=M.isVideoTexture!==!0,te=_t.__version===void 0||j===!0,L=$.dataReady,dt=b(M,nt);if(M.isDepthTexture)Lt=v(M.format===Zi,M.type),te&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,mt,It,null));else if(M.isDataTexture)if(Bt.length>0){Ut&&te&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,Bt[0].width,Bt[0].height);for(let q=0,K=Bt.length;q<K;q++)gt=Bt[q],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,gt.width,gt.height,0,mt,It,gt.data);M.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,nt.width,nt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,It,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,mt,It,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Lt,Bt[0].width,Bt[0].height,nt.depth);for(let q=0,K=Bt.length;q<K;q++)if(gt=Bt[q],M.format!==cn)if(mt!==null)if(Ut){if(L)if(M.layerUpdates.size>0){let ht=kh(gt.width,gt.height,M.format,M.type);for(let ft of M.layerUpdates){let Vt=gt.data.subarray(ft*ht/gt.data.BYTES_PER_ELEMENT,(ft+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ft,gt.width,gt.height,1,mt,Vt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Lt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,mt,It,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Lt,gt.width,gt.height,nt.depth,0,mt,It,gt.data)}else{Ut&&te&&e.texStorage2D(i.TEXTURE_2D,dt,Lt,Bt[0].width,Bt[0].height);for(let q=0,K=Bt.length;q<K;q++)gt=Bt[q],M.format!==cn?mt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt.width,gt.height,mt,It,gt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,gt.width,gt.height,0,mt,It,gt.data)}else if(M.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Lt,nt.width,nt.height,nt.depth),L)if(M.layerUpdates.size>0){let q=kh(nt.width,nt.height,M.format,M.type);for(let K of M.layerUpdates){let ht=nt.data.subarray(K*q/nt.data.BYTES_PER_ELEMENT,(K+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,It,ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,It,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,mt,It,nt.data);else if(M.isData3DTexture)Ut?(te&&e.texStorage3D(i.TEXTURE_3D,dt,Lt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,It,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,mt,It,nt.data);else if(M.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(i.TEXTURE_2D,dt,Lt,nt.width,nt.height);else{let q=nt.width,K=nt.height;for(let ht=0;ht<dt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Lt,q,K,0,mt,It,null),q>>=1,K>>=1}}else if(Bt.length>0){if(Ut&&te){let q=Dt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Lt,q.width,q.height)}for(let q=0,K=Bt.length;q<K;q++)gt=Bt[q],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,mt,It,gt):e.texImage2D(i.TEXTURE_2D,q,Lt,mt,It,gt);M.generateMipmaps=!1}else if(Ut){if(te){let q=Dt(nt);e.texStorage2D(i.TEXTURE_2D,dt,Lt,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,It,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,It,nt);m(M)&&p(Y),_t.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function W(T,M,B){if(M.image.length!==6)return;let Y=St(T,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let $=n.get(j);if(j.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);let _t=Yt.getPrimaries(Yt.workingColorSpace),ot=M.colorSpace===Vn?null:Yt.getPrimaries(M.colorSpace),pt=M.colorSpace===Vn||_t===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Wt&&!nt?mt[K]=y(M.image[K],!0,s.maxCubemapSize):mt[K]=nt?M.image[K].image:M.image[K],mt[K]=ne(M,mt[K]);let It=mt[0],Lt=r.convert(M.format,M.colorSpace),gt=r.convert(M.type),Bt=_(M.internalFormat,Lt,gt,M.colorSpace),Ut=M.isVideoTexture!==!0,te=$.__version===void 0||Y===!0,L=j.dataReady,dt=b(M,It);tt(i.TEXTURE_CUBE_MAP,M);let q;if(Wt){Ut&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,It.width,It.height);for(let K=0;K<6;K++){q=mt[K].mipmaps;for(let ht=0;ht<q.length;ht++){let ft=q[ht];M.format!==cn?Lt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ft.width,ft.height,Lt,gt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Bt,ft.width,ft.height,0,Lt,gt,ft.data)}}}else{if(q=M.mipmaps,Ut&&te){q.length>0&&dt++;let K=Dt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Lt,gt,mt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,mt[K].width,mt[K].height,0,Lt,gt,mt[K].data);for(let ht=0;ht<q.length;ht++){let Vt=q[ht].image[K].image;Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Vt.width,Vt.height,Lt,gt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Bt,Vt.width,Vt.height,0,Lt,gt,Vt.data)}}else{Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,gt,mt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,Lt,gt,mt[K]);for(let ht=0;ht<q.length;ht++){let ft=q[ht];Ut?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Lt,gt,ft.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Bt,Lt,gt,ft.image[K])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Q(T,M,B,Y,j,$){let _t=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),pt=_(B.internalFormat,_t,ot,B.colorSpace);if(!n.get(M).__hasExternalTextures){let nt=Math.max(1,M.width>>$),mt=Math.max(1,M.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,pt,nt,mt,M.depth,0,_t,ot,null):e.texImage2D(j,$,pt,nt,mt,0,_t,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(B).__webglTexture,0,Ft(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(B).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let Y=M.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,$=v(M.stencilBuffer,j),_t=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Ft(M);Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,$,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,T)}else{let Y=M.textures;for(let j=0;j<Y.length;j++){let $=Y[j],_t=r.convert($.format,$.colorSpace),ot=r.convert($.type),pt=_($.internalFormat,_t,ot,$.colorSpace),Wt=Ft(M);B&&Gt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,pt,M.width,M.height):Gt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let Y=n.get(M.depthTexture).__webglTexture,j=Ft(M);if(M.depthTexture.format===Vi)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Zi)Gt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ct(T){let M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ct(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),xt(M.__webglDepthbuffer[Y],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),xt(M.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(T,M,B){let Y=n.get(T);M!==void 0&&Q(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ct(T)}function zt(T){let M=T.texture,B=n.get(T),Y=n.get(M);T.addEventListener("dispose",E);let j=T.textures,$=T.isWebGLCubeRenderTarget===!0,_t=j.length>1;if(_t||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let pt=0;pt<M.mipmaps.length;pt++)B.__webglFramebuffer[ot][pt]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ot=0,pt=j.length;ot<pt;ot++){let Wt=n.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Gt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let pt=j[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);let Wt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=_(pt.internalFormat,Wt,nt,pt.colorSpace,T.isXRRenderTarget===!0),It=Ft(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),tt(i.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Q(B.__webglFramebuffer[ot][pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else Q(B.__webglFramebuffer[ot],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,pt=j.length;ot<pt;ot++){let Wt=j[ot],nt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),tt(i.TEXTURE_2D,Wt),Q(B.__webglFramebuffer,T,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),tt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)Q(B.__webglFramebuffer[pt],T,M,i.COLOR_ATTACHMENT0,ot,pt);else Q(B.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ot,0);m(M)&&p(ot),e.unbindTexture()}T.depthBuffer&&Ct(T)}function jt(T){let M=T.textures;for(let B=0,Y=M.length;B<Y;B++){let j=M[B];if(m(j)){let $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(j).__webglTexture;e.bindTexture($,_t),p($),e.unbindTexture()}}}let Ht=[],I=[];function Ve(T){if(T.samples>0){if(Gt(T)===!1){let M=T.textures,B=T.width,Y=T.height,j=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(T),ot=M.length>1;if(ot)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Wt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,j,i.NEAREST),l===!0&&(Ht.length=0,I.length=0,Ht.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ht.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);let Wt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ft(T){return Math.min(s.maxSamples,T.samples)}function Gt(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ne(T,M){let B=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Qn&&B!==Vn&&(Yt.getTransfer(B)===se?(Y!==cn||j!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=At,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Gt}function ix(i,t){function e(n,s=Vn){let r,a=Yt.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return i.BYTE;if(n===tu)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===cn)return i.RGBA;if(n===su)return i.LUMINANCE;if(n===ru)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ou)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===Dr||n===Ur||n===Nr||n===Or)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Bo||n===zo||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Go)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qo||n===Xo||n===$o||n===Yo||n===Zo||n===Ko||n===Jo||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===rl||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===ol||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wl=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,El=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:rx,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new El,m=e.getContextAttributes(),p=null,_=null,v=[],b=[],P=new st,E=null,A=new Me;A.layers.enable(1),A.viewport=new Qt;let R=new Me;R.layers.enable(2),R.viewport=new Qt;let F=[A,R],x=new wl;x.layers.enable(1),x.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=v[W];return Q===void 0&&(Q=new Ts,v[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=v[W];return Q===void 0&&(Q=new Ts,v[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=v[W];return Q===void 0&&(Q=new Ts,v[W]=Q),Q.getHandSpace()};function N(W){let Q=b.indexOf(W.inputSource);if(Q===-1)return;let xt=v[Q];xt!==void 0&&(xt.update(W.inputSource,W.frame,c||a),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let W=0;W<v.length;W++){let Q=b[W];Q!==null&&(b[W]=null,v[W].disconnect(Q))}S=null,O=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,xt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Zi:Vi,xt=m.stencil?Yi:pi);let Ct={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new An(d.textureWidth,d.textureHeight,{format:cn,type:Tn,depthTexture:new jr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(W){for(let Q=0;Q<W.removed.length;Q++){let xt=W.removed[Q],ct=b.indexOf(xt);ct>=0&&(b[ct]=null,v[ct].disconnect(xt))}for(let Q=0;Q<W.added.length;Q++){let xt=W.added[Q],ct=b.indexOf(xt);if(ct===-1){for(let At=0;At<v.length;At++)if(At>=b.length){b.push(xt),ct=At;break}else if(b[At]===null){b[At]=xt,ct=At;break}if(ct===-1)break}let Ct=v[ct];Ct&&Ct.connect(xt)}}let z=new C,J=new C;function G(W,Q,xt){z.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);let ct=z.distanceTo(J),Ct=Q.projectionMatrix.elements,At=xt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),jt=Ct[14]/(Ct[10]+1),Ht=(Ct[9]+1)/Ct[5],I=(Ct[9]-1)/Ct[5],Ve=(Ct[8]-1)/Ct[0],Ft=(At[8]+1)/At[0],Gt=zt*Ve,Pt=zt*Ft,ne=ct/(-Ve+Ft),Dt=ne*-Ve;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Dt),W.translateZ(ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let T=zt+ne,M=jt+ne,B=Gt-Dt,Y=Pt+(ct-Dt),j=Ht*jt/M*T,$=I*jt/M*T;W.projectionMatrix.makePerspective(B,Y,j,$,T,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function lt(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,xt=W.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),x.near=R.near=A.near=Q,x.far=R.far=A.far=xt,(S!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,O=x.far);let ct=W.parent,Ct=x.cameras;lt(x,ct);for(let At=0;At<Ct.length;At++)lt(Ct[At],ct);Ct.length===2?G(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),Z(W,x,ct)};function Z(W,Q,xt){xt===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ls*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let tt=null;function St(W,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ct=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,ct=!0);for(let At=0;At<xt.length;At++){let zt=xt[At],jt=null;if(f!==null)jt=f.getViewport(zt);else{let I=u.getViewSubImage(d,zt);jt=I.viewport,At===0&&(t.setRenderTargetTextures(_,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(_))}let Ht=F[At];Ht===void 0&&(Ht=new Me,Ht.layers.enable(At),Ht.viewport=new Qt,F[At]=Ht),Ht.matrix.fromArray(zt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(zt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(jt.x,jt.y,jt.width,jt.height),At===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ct===!0&&x.cameras.push(Ht)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let At=u.getDepthInformation(xt[0]);At&&At.isValid&&At.texture&&y.init(t,At,s.renderState)}}for(let xt=0;xt<v.length;xt++){let ct=b[xt],Ct=v[xt];ct!==null&&Ct!==void 0&&Ct.update(ct,Q,c||a)}tt&&tt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Nt=new mu;Nt.setAnimationLoop(St),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}},oi=new pn,ox=new ae;function lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,b=_.envMapRotation;v&&(m.envMap.value=v,oi.copy(b),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(oi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let b=v.program;n.uniformBlockBinding(_,b)}function c(_,v){let b=s[_.id];b===void 0&&(g(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(_,P);let E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let v=u();_.__bindingPointIndex=v;let b=i.createBuffer(),P=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],b=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,A=b.length;E<A;E++){let R=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,x=R.length;F<x;F++){let S=R[F];if(f(S,E,F,P)===!0){let O=S.__offset,N=Array.isArray(S.value)?S.value:[S.value],k=0;for(let X=0;X<N.length;X++){let z=N[X],J=y(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,O+k,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,b,P){let E=_.value,A=v+"_"+b;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{let R=P[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(_){let v=_.uniforms,b=0,P=16;for(let A=0,R=v.length;A<R;A++){let F=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,S=F.length;x<S;x++){let O=F[x],N=Array.isArray(O.value)?O.value:[O.value];for(let k=0,X=N.length;k<X;k++){let z=N[k],J=y(z),G=b%P,lt=G%J.boundary,Z=G+lt;b+=lt,Z!==0&&P-Z<J.storage&&(b+=P-Z),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=J.storage}}}let E=b%P;return E>0&&(b+=P-E),_.__size=b,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ji=class{constructor(t={}){let{canvas:e=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=qn,this.toneMappingExposure=1;let v=this,b=!1,P=0,E=0,A=null,R=-1,F=null,x=new Qt,S=new Qt,O=null,N=new Et(0),k=0,X=e.width,z=e.height,J=1,G=null,lt=null,Z=new Qt(0,0,X,z),tt=new Qt(0,0,X,z),St=!1,Nt=new Ns,W=!1,Q=!1,xt=new ae,ct=new ae,Ct=new C,At=new Qt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Ht(){return A===null?J:1}let I=n;function Ve(w,D){return e.getContext(w,D)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){let D="webgl2";if(I=Ve(D,w),I===null)throw Ve(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,Gt,Pt,ne,Dt,T,M,B,Y,j,$,_t,ot,pt,Wt,nt,mt,It,Lt,gt,Bt,Ut,te,L;function dt(){Ft=new E0(I),Ft.init(),Ut=new ix(I,Ft),Gt=new v0(I,Ft,t,Ut),Pt=new tx(I),Gt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ne=new R0(I),Dt=new Hg,T=new nx(I,Ft,Pt,Dt,Gt,Ut,ne),M=new M0(v),B=new w0(v),Y=new Nf(I),te=new x0(I,Y),j=new T0(I,Y,ne,te),$=new P0(I,j,Y,ne),Lt=new C0(I,Gt,T),nt=new _0(Dt),_t=new zg(v,M,B,Ft,Gt,te,nt),ot=new lx(v,Dt),pt=new Gg,Wt=new Zg(Ft),It=new g0(v,M,B,Pt,$,d,l),mt=new jg(v,$,Gt),L=new cx(I,ne,Gt,Pt),gt=new y0(I,Ft,ne),Bt=new A0(I,Ft,ne),ne.programs=_t.programs,v.capabilities=Gt,v.extensions=Ft,v.properties=Dt,v.renderLists=pt,v.shadowMap=mt,v.state=Pt,v.info=ne}dt();let q=new Tl(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(X,z,!1))},this.getSize=function(w){return w.set(X,z)},this.setSize=function(w,D,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,z=D,e.width=Math.floor(w*J),e.height=Math.floor(D*J),H===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(X*J,z*J).floor()},this.setDrawingBufferSize=function(w,D,H){X=w,z=D,J=H,e.width=Math.floor(w*H),e.height=Math.floor(D*H),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,D,H,V){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,D,H,V),Pt.viewport(x.copy(Z).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,D,H,V){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,D,H,V),Pt.scissor(S.copy(tt).multiplyScalar(J).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){Pt.setScissorTest(St=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,D=!0,H=!0){let V=0;if(w){let U=!1;if(A!==null){let it=A.texture.format;U=it===ic||it===nc||it===ec}if(U){let it=A.texture.type,ut=it===Tn||it===pi||it===Is||it===Yi||it===Ql||it===tc,yt=It.getClearColor(),vt=It.getClearAlpha(),wt=yt.r,Rt=yt.g,Mt=yt.b;ut?(f[0]=wt,f[1]=Rt,f[2]=Mt,f[3]=vt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=wt,g[1]=Rt,g[2]=Mt,g[3]=vt,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Wt.dispose(),Dt.dispose(),M.dispose(),B.dispose(),$.dispose(),te.dispose(),L.dispose(),_t.dispose(),q.dispose(),q.removeEventListener("sessionstart",Uc),q.removeEventListener("sessionend",Nc),ei.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=ne.autoReset,D=mt.enabled,H=mt.autoUpdate,V=mt.needsUpdate,U=mt.type;dt(),ne.autoReset=w,mt.enabled=D,mt.autoUpdate=H,mt.needsUpdate=V,mt.type=U}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let D=w.target;D.removeEventListener("dispose",Vt),pe(D)}function pe(w){Be(w),Dt.remove(w)}function Be(w){let D=Dt.get(w).programs;D!==void 0&&(D.forEach(function(H){_t.releaseProgram(H)}),w.isShaderMaterial&&_t.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,H,V,U,it){D===null&&(D=zt);let ut=U.isMesh&&U.matrixWorld.determinant()<0,yt=ad(w,D,H,V,U);Pt.setMaterial(V,ut);let vt=H.index,wt=1;if(V.wireframe===!0){if(vt=j.getWireframeAttribute(H),vt===void 0)return;wt=2}let Rt=H.drawRange,Mt=H.attributes.position,Jt=Rt.start*wt,ie=(Rt.start+Rt.count)*wt;it!==null&&(Jt=Math.max(Jt,it.start*wt),ie=Math.min(ie,(it.start+it.count)*wt)),vt!==null?(Jt=Math.max(Jt,0),ie=Math.min(ie,vt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ie=Math.min(ie,Mt.count));let he=ie-Jt;if(he<0||he===1/0)return;te.setup(U,V,yt,H,vt);let Ge,Xt=gt;if(vt!==null&&(Ge=Y.get(vt),Xt=Bt,Xt.setIndex(Ge)),U.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*Ht()),Xt.setMode(I.LINES)):Xt.setMode(I.TRIANGLES);else if(U.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Pt.setLineWidth(bt*Ht()),U.isLineSegments?Xt.setMode(I.LINES):U.isLineLoop?Xt.setMode(I.LINE_LOOP):Xt.setMode(I.LINE_STRIP)}else U.isPoints?Xt.setMode(I.POINTS):U.isSprite&&Xt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let bt=U._multiDrawStarts,Ee=U._multiDrawCounts,$t=U._multiDrawCount,en=vt?Y.get(vt).bytesPerElement:1,wi=Dt.get(V).currentProgram.getUniforms();for(let We=0;We<$t;We++)wi.setValue(I,"_gl_DrawID",We),Xt.render(bt[We]/en,Ee[We])}else if(U.isInstancedMesh)Xt.renderInstances(Jt,he,U.count);else if(H.isInstancedBufferGeometry){let bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,bt);Xt.renderInstances(Jt,he,Ee)}else Xt.render(Jt,he)};function qt(w,D,H){w.transparent===!0&&w.side===on&&w.forceSinglePass===!1?(w.side=be,w.needsUpdate=!0,rr(w,D,H),w.side=Xn,w.needsUpdate=!0,rr(w,D,H),w.side=on):rr(w,D,H)}this.compile=function(w,D,H=null){H===null&&(H=w),m=Wt.get(H),m.init(D),_.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let it=U.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let yt=it[ut];qt(yt,H,U),V.add(yt)}else qt(it,H,U),V.add(it)}),_.pop(),m=null,V},this.compileAsync=function(w,D,H=null){let V=this.compile(w,D,H);return new Promise(U=>{function it(){if(V.forEach(function(ut){Dt.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){U(w);return}setTimeout(it,10)}Ft.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let ze=null;function xn(w){ze&&ze(w)}function Uc(){ei.stop()}function Nc(){ei.start()}let ei=new mu;ei.setAnimationLoop(xn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){ze=w,q.setAnimationLoop(w),w===null?ei.stop():ei.start()},q.addEventListener("sessionstart",Uc),q.addEventListener("sessionend",Nc),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,A),m=Wt.get(w,_.length),m.init(D),_.push(m),ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Nt.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,W=nt.init(this.clippingPlanes,Q),y=pt.get(w,p.length),y.init(),p.push(y),q.enabled===!0&&q.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&Ha(it,D,-1/0,v.sortObjects)}Ha(w,D,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(G,lt),jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,jt&&It.addToRenderList(y,w),this.info.render.frame++,W===!0&&nt.beginShadows();let H=m.state.shadowsArray;mt.render(H,w,D),W===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=y.opaque,U=y.transmissive;if(m.setupLights(),D.isArrayCamera){let it=D.cameras;if(U.length>0)for(let ut=0,yt=it.length;ut<yt;ut++){let vt=it[ut];kc(V,U,w,vt)}jt&&It.render(w);for(let ut=0,yt=it.length;ut<yt;ut++){let vt=it[ut];Oc(y,w,vt,vt.viewport)}}else U.length>0&&kc(V,U,w,D),jt&&It.render(w),Oc(y,w,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,D),te.resetDefaultState(),R=-1,F=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&nt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Ha(w,D,H,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Nt.intersectsSprite(w)){V&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);let ut=$.update(w),yt=w.material;yt.visible&&y.push(w,ut,yt,H,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Nt.intersectsObject(w))){let ut=$.update(w),yt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),At.copy(ut.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(yt)){let vt=ut.groups;for(let wt=0,Rt=vt.length;wt<Rt;wt++){let Mt=vt[wt],Jt=yt[Mt.materialIndex];Jt&&Jt.visible&&y.push(w,ut,Jt,H,At.z,Mt)}}else yt.visible&&y.push(w,ut,yt,H,At.z,null)}}let it=w.children;for(let ut=0,yt=it.length;ut<yt;ut++)Ha(it[ut],D,H,V)}function Oc(w,D,H,V){let U=w.opaque,it=w.transmissive,ut=w.transparent;m.setupLightsView(H),W===!0&&nt.setGlobalState(v.clippingPlanes,H),V&&Pt.viewport(x.copy(V)),U.length>0&&sr(U,D,H),it.length>0&&sr(it,D,H),ut.length>0&&sr(ut,D,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function kc(w,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new An(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Xs:Tn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let it=m.state.transmissionRenderTarget[V.id],ut=V.viewport||x;it.setSize(ut.z,ut.w);let yt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(N),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),jt&&It.render(H);let vt=v.toneMapping;v.toneMapping=qn;let wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&nt.setGlobalState(v.clippingPlanes,V),sr(w,H,V),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Jt=D.length;Mt<Jt;Mt++){let ie=D[Mt],he=ie.object,Ge=ie.geometry,Xt=ie.material,bt=ie.group;if(Xt.side===on&&he.layers.test(V.layers)){let Ee=Xt.side;Xt.side=be,Xt.needsUpdate=!0,Fc(he,H,V,Ge,Xt,bt),Xt.side=Ee,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}v.setRenderTarget(yt),v.setClearColor(N,k),wt!==void 0&&(V.viewport=wt),v.toneMapping=vt}function sr(w,D,H){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,it=w.length;U<it;U++){let ut=w[U],yt=ut.object,vt=ut.geometry,wt=V===null?ut.material:V,Rt=ut.group;yt.layers.test(H.layers)&&Fc(yt,D,H,vt,wt,Rt)}}function Fc(w,D,H,V,U,it){w.onBeforeRender(v,D,H,V,U,it),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,D,H,V,w,it),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=be,U.needsUpdate=!0,v.renderBufferDirect(H,D,V,U,w,it),U.side=Xn,U.needsUpdate=!0,v.renderBufferDirect(H,D,V,U,w,it),U.side=on):v.renderBufferDirect(H,D,V,U,w,it),w.onAfterRender(v,D,H,V,U,it)}function rr(w,D,H){D.isScene!==!0&&(D=zt);let V=Dt.get(w),U=m.state.lights,it=m.state.shadowsArray,ut=U.state.version,yt=_t.getParameters(w,U.state,it,D,H),vt=_t.getProgramCacheKey(yt),wt=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,wt===void 0&&(w.addEventListener("dispose",Vt),wt=new Map,V.programs=wt);let Rt=wt.get(vt);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===ut)return zc(w,yt),Rt}else yt.uniforms=_t.getUniforms(w),w.onBeforeCompile(yt,v),Rt=_t.acquireProgram(yt,vt),wt.set(vt,Rt),V.uniforms=yt.uniforms;let Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),zc(w,yt),V.needsLights=ld(w),V.lightsStateVersion=ut,V.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Bc(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Wi.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function zc(w,D){let H=Dt.get(w);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function ad(w,D,H,V,U){D.isScene!==!0&&(D=zt),T.resetTextureUnits();let it=D.fog,ut=V.isMeshStandardMaterial?D.environment:null,yt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,vt=(V.isMeshStandardMaterial?B:M).get(V.envMap||ut),wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Rt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color,he=qn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(he=v.toneMapping);let Ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=Ge!==void 0?Ge.length:0,bt=Dt.get(V),Ee=m.state.lights;if(W===!0&&(Q===!0||w!==F)){let Ye=w===F&&V.id===R;nt.setState(V,w,Ye)}let $t=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==yt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==vt||V.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==wt||bt.vertexTangents!==Rt||bt.morphTargets!==Mt||bt.morphNormals!==Jt||bt.morphColors!==ie||bt.toneMapping!==he||bt.morphTargetsCount!==Xt)&&($t=!0):($t=!0,bt.__version=V.version);let en=bt.currentProgram;$t===!0&&(en=rr(V,D,U));let wi=!1,We=!1,Va=!1,ue=en.getUniforms(),Nn=bt.uniforms;if(Pt.useProgram(en.program)&&(wi=!0,We=!0,Va=!0),V.id!==R&&(R=V.id,We=!0),wi||F!==w){Gt.reverseDepthBuffer?(xt.copy(w.projectionMatrix),pf(xt),mf(xt),ue.setValue(I,"projectionMatrix",xt)):ue.setValue(I,"projectionMatrix",w.projectionMatrix),ue.setValue(I,"viewMatrix",w.matrixWorldInverse);let Ye=ue.map.cameraPosition;Ye!==void 0&&Ye.setValue(I,Ct.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&ue.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ue.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,We=!0,Va=!0)}if(U.isSkinnedMesh){ue.setOptional(I,U,"bindMatrix"),ue.setOptional(I,U,"bindMatrixInverse");let Ye=U.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ue.setValue(I,"boneTexture",Ye.boneTexture,T))}U.isBatchedMesh&&(ue.setOptional(I,U,"batchingTexture"),ue.setValue(I,"batchingTexture",U._matricesTexture,T),ue.setOptional(I,U,"batchingIdTexture"),ue.setValue(I,"batchingIdTexture",U._indirectTexture,T),ue.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&ue.setValue(I,"batchingColorTexture",U._colorsTexture,T));let Ga=H.morphAttributes;if((Ga.position!==void 0||Ga.normal!==void 0||Ga.color!==void 0)&&Lt.update(U,H,en),(We||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,ue.setValue(I,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Nn.envMap.value=vt,Nn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Nn.envMapIntensity.value=D.environmentIntensity),We&&(ue.setValue(I,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&od(Nn,Va),it&&V.fog===!0&&ot.refreshFogUniforms(Nn,it),ot.refreshMaterialUniforms(Nn,V,J,z,m.state.transmissionRenderTarget[w.id]),Wi.upload(I,Bc(bt),Nn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wi.upload(I,Bc(bt),Nn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ue.setValue(I,"center",U.center),ue.setValue(I,"modelViewMatrix",U.modelViewMatrix),ue.setValue(I,"normalMatrix",U.normalMatrix),ue.setValue(I,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ye=V.uniformsGroups;for(let Wa=0,cd=Ye.length;Wa<cd;Wa++){let Hc=Ye[Wa];L.update(Hc,en),L.bind(Hc,en)}}return en}function od(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function ld(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,H){Dt.get(w.texture).__webglTexture=D,Dt.get(w.depthTexture).__webglTexture=H;let V=Dt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let H=Dt.get(w);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,H=0){A=w,P=D,E=H;let V=!0,U=null,it=!1,ut=!1;if(w){let vt=Dt.get(w);if(vt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(vt.__hasExternalTextures)T.rebindTextures(w,Dt.get(w.texture).__webglTexture,Dt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Mt=w.depthTexture;if(vt.__boundDepthTexture!==Mt){if(Mt!==null&&Dt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let wt=w.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ut=!0);let Rt=Dt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?U=Rt[D][H]:U=Rt[D],it=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=Dt.get(w).__webglMultisampledFramebuffer:Array.isArray(Rt)?U=Rt[H]:U=Rt,x.copy(w.viewport),S.copy(w.scissor),O=w.scissorTest}else x.copy(Z).multiplyScalar(J).floor(),S.copy(tt).multiplyScalar(J).floor(),O=St;if(Pt.bindFramebuffer(I.FRAMEBUFFER,U)&&V&&Pt.drawBuffers(w,U),Pt.viewport(x),Pt.scissor(S),Pt.setScissorTest(O),it){let vt=Dt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,H)}else if(ut){let vt=Dt.get(w.texture),wt=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,H||0,wt)}R=-1},this.readRenderTargetPixels=function(w,D,H,V,U,it,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){Pt.bindFramebuffer(I.FRAMEBUFFER,yt);try{let vt=w.texture,wt=vt.format,Rt=vt.type;if(!Gt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&H>=0&&H<=w.height-U&&I.readPixels(D,H,V,U,Ut.convert(wt),Ut.convert(Rt),it)}finally{let vt=A!==null?Dt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(w,D,H,V,U,it,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Dt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let vt=w.texture,wt=vt.format,Rt=vt.type;if(!Gt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&H>=0&&H<=w.height-U){Pt.bindFramebuffer(I.FRAMEBUFFER,yt);let Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),I.readPixels(D,H,V,U,Ut.convert(wt),Ut.convert(Rt),0);let Jt=A!==null?Dt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,Jt);let ie=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ff(I,ie,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(Mt),I.deleteSync(ie),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,H=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),U=Math.floor(w.image.width*V),it=Math.floor(w.image.height*V),ut=D!==null?D.x:0,yt=D!==null?D.y:0;T.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ut,yt,U,it),Pt.unbindTexture()},this.copyTextureToTexture=function(w,D,H=null,V=null,U=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,H=null);let it,ut,yt,vt,wt,Rt;H!==null?(it=H.max.x-H.min.x,ut=H.max.y-H.min.y,yt=H.min.x,vt=H.min.y):(it=w.image.width,ut=w.image.height,yt=0,vt=0),V!==null?(wt=V.x,Rt=V.y):(wt=0,Rt=0);let Mt=Ut.convert(D.format),Jt=Ut.convert(D.type);T.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let ie=I.getParameter(I.UNPACK_ROW_LENGTH),he=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ge=I.getParameter(I.UNPACK_SKIP_PIXELS),Xt=I.getParameter(I.UNPACK_SKIP_ROWS),bt=I.getParameter(I.UNPACK_SKIP_IMAGES),Ee=w.isCompressedTexture?w.mipmaps[U]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,vt),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,wt,Rt,it,ut,Mt,Jt,Ee.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,wt,Rt,Ee.width,Ee.height,Mt,Ee.data):I.texSubImage2D(I.TEXTURE_2D,U,wt,Rt,it,ut,Mt,Jt,Ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bt),U===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,H=null,V=null,U=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0);let it,ut,yt,vt,wt,Rt,Mt,Jt,ie,he=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(it=H.max.x-H.min.x,ut=H.max.y-H.min.y,yt=H.max.z-H.min.z,vt=H.min.x,wt=H.min.y,Rt=H.min.z):(it=he.width,ut=he.height,yt=he.depth,vt=0,wt=0,Rt=0),V!==null?(Mt=V.x,Jt=V.y,ie=V.z):(Mt=0,Jt=0,ie=0);let Ge=Ut.convert(D.format),Xt=Ut.convert(D.type),bt;if(D.isData3DTexture)T.setTexture3D(D,0),bt=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),bt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Ee=I.getParameter(I.UNPACK_ROW_LENGTH),$t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),wi=I.getParameter(I.UNPACK_SKIP_ROWS),We=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(bt,U,Mt,Jt,ie,it,ut,yt,Ge,Xt,he.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,U,Mt,Jt,ie,it,ut,yt,Ge,he.data):I.texSubImage3D(bt,U,Mt,Jt,ie,it,ut,yt,Ge,Xt,he),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,wi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We),U===0&&D.generateMipmaps&&I.generateMipmap(bt),Pt.unbindTexture()},this.initRenderTarget=function(w){Dt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){P=0,E=0,A=null,Pt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===sc?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===da?"display-p3":"srgb"}};var jn=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Al=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fh=new ae,Rl=new Ds,Ar=new Ki,Rr=new C,Qr=class extends Le{constructor(t=new Re,e=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Fh.copy(s).invert(),Rl.copy(t.ray).applyMatrix4(Fh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);Rr.fromBufferAttribute(u,m),Bh(Rr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Rr.fromBufferAttribute(u,g),Bh(Rr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Bh(i,t,e,n,s,r,a){let o=Rl.distanceSqToPoint(i);if(o<e){let l=new C;Rl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hn=class extends $e{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(xe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(xe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends Os{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Cr=new C,Mo=new oc,bo=new oc,So=new oc,Pl=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Mo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),bo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),So.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),bo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),So.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mo.calc(l),bo.calc(l),So.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function hx(i,t){let e=1-i;return e*e*t}function ux(i,t){return 2*(1-i)*i*t}function dx(i,t){return i*i*t}function As(i,t,e,n){return hx(i,t)+ux(i,e)+dx(i,n)}function fx(i,t){let e=1-i;return e*e*e*t}function px(i,t){let e=1-i;return 3*e*e*i*t}function mx(i,t){return 3*(1-i)*i*i*t}function gx(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return fx(i,t)+px(i,e)+mx(i,n)+gx(i,s)}var ta=class extends je{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends je{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(t,s.x,r.x,a.x,o.x),Rs(t,s.y,r.y,a.y,o.y),Rs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends je{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends je{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends je{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends je{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y),As(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(zh(o,l.x,c.x,h.x,u.x),zh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Hh=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:ta,CubicBezierCurve3:Il,EllipseCurve:Os,LineCurve:ea,LineCurve3:Ll,QuadraticBezierCurve:na,QuadraticBezierCurve3:Dl,SplineCurve:ia}),Ul=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Hh[s.type]().fromJSON(s))}return this}},ks=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ea(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new na(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ta(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ia(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Os(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nl=class i extends Re{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new st,f=new C,g=new C,y=new C,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let _=0;_<=e;_++){let v=n+_*h*s,b=Math.sin(v),P=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*P,a.push(u.x,u.y,u.z),d.x=_/e,d.y=E/(t.length-1),o.push(d.x,d.y);let A=l[3*E+0]*b,R=l[3*E+1],F=l[3*E+0]*P;c.push(A,R,F)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let b=v+_*t.length,P=b,E=b+t.length,A=b+t.length+1,R=b+1;r.push(P,E,R),r.push(A,R,E)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(o,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},gi=class i extends Nl{constructor(t=1,e=1,n=4,s=8){let r=new ks;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Qi=class i extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class i extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function _(){let b=new C,P=new C,E=0,A=(e-t)/n;for(let R=0;R<=r;R++){let F=[],x=R/r,S=x*(e-t)+t;for(let O=0;O<=s;O++){let N=O/s,k=N*l+o,X=Math.sin(k),z=Math.cos(k);P.x=S*X,P.y=-x*n+m,P.z=S*z,u.push(P.x,P.y,P.z),b.set(X,A,z).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-x),F.push(g++)}y.push(F)}for(let R=0;R<s;R++)for(let F=0;F<r;F++){let x=y[F][R],S=y[F+1][R],O=y[F+1][R+1],N=y[F][R+1];t>0&&(h.push(x,S,N),E+=3),e>0&&(h.push(S,O,N),E+=3)}c.addGroup(p,E,0),p+=E}function v(b){let P=g,E=new st,A=new C,R=0,F=b===!0?t:e,x=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let S=g;for(let O=0;O<=s;O++){let k=O/s*l+o,X=Math.cos(k),z=Math.sin(k);A.x=F*z,A.y=m*x,A.z=F*X,u.push(A.x,A.y,A.z),d.push(0,x,0),E.x=X*.5+.5,E.y=z*.5*x+.5,f.push(E.x,E.y),g++}for(let O=0;O<s;O++){let N=P+O,k=S+O;b===!0?h.push(k,k+1,N):h.push(k+1,k,N),R+=3}c.addGroup(p,R,b===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ol=class i extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new C,b=new C,P=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],b),f(e[E+2],P),l(v,b,P,_)}function l(_,v,b,P){let E=P+1,A=[];for(let R=0;R<=E;R++){A[R]=[];let F=_.clone().lerp(b,R/E),x=v.clone().lerp(b,R/E),S=E-R;for(let O=0;O<=S;O++)O===0&&R===E?A[R][O]=F:A[R][O]=F.clone().lerp(x,O/S)}for(let R=0;R<E;R++)for(let F=0;F<2*(E-R)-1;F++){let x=Math.floor(F/2);F%2===0?(d(A[R][x+1]),d(A[R+1][x]),d(A[R][x])):(d(A[R][x+1]),d(A[R+1][x+1]),d(A[R+1][x]))}}function c(_){let v=new C;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(_),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let _=new C;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let b=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;a.push(b,1-P)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],b=a[_+2],P=a[_+4],E=Math.max(v,b,P),A=Math.min(v,b,P);E>.9&&A<.1&&(v<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let b=_*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let _=new C,v=new C,b=new C,P=new C,E=new st,A=new st,R=new st;for(let F=0,x=0;F<r.length;F+=9,x+=6){_.set(r[F+0],r[F+1],r[F+2]),v.set(r[F+3],r[F+4],r[F+5]),b.set(r[F+6],r[F+7],r[F+8]),E.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(_).add(v).add(b).divideScalar(3);let S=m(P);y(E,x+0,_,S),y(A,x+2,v,S),y(R,x+4,b,S)}}function y(_,v,b,P){P<0&&_.x===1&&(a[v]=_.x-1),b.x===0&&b.z===0&&(a[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Fs=class extends ks{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ks().fromJSON(s))}return this}},xx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_u(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=bx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Bs(r,a,e,o,l,f,0),a}};function _u(i,t,e,n,s){let r,a;if(s===Dx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Vh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Vh(r,i[r],i[r+1],a);return a&&pa(a,a.next)&&(Hs(a),a=a.next),a}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||le(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ax(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?vx(i,n,s,r):yx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Hs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=_x(xi(i),t,e),Bs(i,t,e,n,s,r,2)):a===2&&Mx(i,t,e,n,s,r):Bs(xi(i),t,e,n,s,r,1);break}}}function yx(i){let t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Hi(s,o,r,l,a,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(le(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=kl(f,g,t,e,n),_=kl(y,m,t,e,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=p&&b&&b.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Hi(o,h,l,u,c,d,v.x,v.y)&&le(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Hi(o,h,l,u,c,d,b.x,b.y)&&le(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Hi(o,h,l,u,c,d,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=_;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Hi(o,h,l,u,c,d,b.x,b.y)&&le(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function _x(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!pa(s,r)&&Mu(s,n,n.next,r)&&zs(s,r)&&zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hs(n),Hs(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function Mx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Px(a,o)){let l=bu(a,o);a=xi(a,a.next),l=xi(l,l.next),Bs(a,t,e,n,s,r,0),Bs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function bx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_u(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Cx(c));for(s.sort(Sx),r=0;r<s.length;r++)e=wx(s[r],e);return e}function Sx(i,t){return i.x-t.x}function wx(i,t){let e=Ex(i,t);if(!e)return t;let n=bu(e,i);return xi(n,n.next),xi(e,e.next)}function Ex(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Hi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),zs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Tx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Tx(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function Ax(i,t,e,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rx(s)}function Rx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Px(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ix(i,t)&&(zs(i,t)&&zs(t,i)&&Lx(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||pa(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pa(i,t){return i.x===t.x&&i.y===t.y}function Mu(i,t,e,n){let s=Ir(le(i,t,e)),r=Ir(le(i,t,n)),a=Ir(le(e,n,i)),o=Ir(le(e,n,t));return!!(s!==r&&a!==o||s===0&&Pr(i,e,t)||r===0&&Pr(i,n,t)||a===0&&Pr(e,i,n)||o===0&&Pr(e,t,n))}function Pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function Ix(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zs(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function Lx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){let e=new Fl(i.i,i.x,i.y),n=new Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vh(i,t,e,n){let s=new Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Cs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gh(t),Wh(n,t);let a=t.length;e.forEach(Gh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Wh(n,e[l]);let o=xx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vs=class i extends Ol{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var sa=class i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new st;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let _=p+m,v=_,b=_+n+1,P=_+n+2,E=_+1;o.push(v,b,E),o.push(b,P,E)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ra=class i extends Re{constructor(t=new Fs([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Cs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];Cs.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=Cs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=y.length;m<p;m++){let _=y[m],v=_[0]+u,b=_[1]+u,P=_[2]+u;n.push(v,b,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ux(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Ux(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Rn=class i extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+b,1-v),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],b=h[p][_],P=h[p+1][_],E=h[p+1][_+1];(p!==0||a>0)&&f.push(v,b,E),(p!==n-1||l<Math.PI)&&f.push(b,P,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tt=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},aa=class extends Tt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Lr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Nx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=t,o=2*e-n;break;case $c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=t,l=2*n-e;break;case $c:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+_*a[c+P]+v*a[l+P]+b*a[u+P];return r}},zl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Hl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lr(e,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Lr(t.times,Array),values:Lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Br:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Nx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=hl;var yi=class extends un{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Br;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends un{};Vl.prototype.ValueTypeName="color";var Gl=class extends un{};Gl.prototype.ValueTypeName="number";var Wl=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},oa=class extends un{InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends un{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Br;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends un{};ql.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ox=new Xl,$l=class{constructor(t){this.manager=t!==void 0?t:Ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},es=class extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wo=new ae,qh=new C,Xh=new C,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $h=new ae,bs=new C,Eo=new C,Yl=class extends la{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(bs),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}},ca=class extends Gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zl=class extends la{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_i=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lc="\\[\\]\\.:\\/",kx=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",Fx="[^"+lc.replace("\\.","")+"]",Bx=/((?:WC+[\/:])*)/.source.replace("WC",cc),zx=/(WCOD+)?/.source.replace("WCOD",Fx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Gx=new RegExp("^"+Bx+zx+Hx+Vx+"$"),Wx=["material","materials","bones","map"],Kl=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(t){let e=Gx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Kl;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ly=new Float32Array(1);var Yh=new ae,ha=class{constructor(t,e,n=0,s=1/0){this.ray=new Ds(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,n,e);return n.sort(Zh),n}};function Zh(i,t){return i.distance-t.distance}function Jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Jl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var ss=class extends jn{constructor(){super();let t=new Ce;t.deleteAttribute("uv");let e=new Tt({side:be}),n=new Tt,s=new ca(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new et(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new et(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new et(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new et(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new et(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new et(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new et(t,is(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new et(t,is(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new et(t,is(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new et(t,is(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new et(t,is(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new et(t,is(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function is(i){let t=new Ae;return t.color.setScalar(i),t}var $s=new C;function Qe(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;$s.copy(t),$s[n]=0,$s.normalize();let c=.5*a/(a+o),h=1-$s.angleTo(i)/l;return Math.sign($s[e])===1?h*c:o/(a+o)+c+c*(1-h)}var ga=class extends Ce{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new C,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Qe(g,l,"z","y",r,n),d[p+1]=1-Qe(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Qe(g,l,"z","y",r,n),d[p+1]=1-Qe(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Qe(g,l,"x","z",r,t),d[p+1]=Qe(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Qe(g,l,"x","z",r,t),d[p+1]=1-Qe(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Qe(g,l,"x","y",r,t),d[p+1]=1-Qe(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Qe(g,l,"x","y",r,t),d[p+1]=1-Qe(g,l,"y","x",r,e);break}}};var Ys=[{id:0,name:"Mavi",hex:3111935},{id:1,name:"K\u0131rm\u0131z\u0131",hex:15874634},{id:2,name:"Sar\u0131",hex:16761876},{id:3,name:"Ye\u015Fil",hex:3133263},{id:4,name:"Mor",hex:10112511},{id:5,name:"Turkuaz",hex:1627366},{id:6,name:"Pembe",hex:16735416}],Cn=99,Su=2,xa=3,hc=8,He=7,wu=4;var uc="busPuzzleDeluxe.save.v1",Fe={mode:"test",admob:{appIdAndroid:"ca-app-pub-3940256099942544~3347511713",rewardedUnitAndroid:"ca-app-pub-3940256099942544/5224354917"},testDurationMs:3e3},ee={undo:60,hint:40,recall:80,call:120,moves:70,time:70,extraSlot:150,permSlot:[400,800,1500],convert:100};var os=new Map;function Se(i,t,e,n,s=3){let r=`rb${i}|${t}|${e}|${n}`;return os.has(r)||os.set(r,new ga(i,t,e,s,n)),os.get(r)}function de(i,t){return os.has(i)||os.set(i,t()),os.get(i)}var dc=new Map;function Kt(i,t){return dc.has(i)||dc.set(i,t()),dc.get(i)}var Zs={vivid:Ys.map(i=>i.hex),pastel:[8368383,16748440,16768890,8381338,12950527,8579314,16753621],neon:[2059263,16719677,16772608,65365,11600127,61695,16723888],retro:[4026292,12863291,14723118,4889180,8215206,4171683,14251933]},Eu={steel:{color:13620958,metal:.9,rough:.25},gold:{color:16762938,metal:1,rough:.2},neon:{color:3535103,metal:.4,rough:.3,emissive:696240},chrome:{color:16120063,metal:1,rough:.08}},Ks={gold:{body:16103210,trim:16773296,glow:16766042,label:"Alt\u0131n"},platinum:{body:14279148,trim:16777215,glow:12576511,label:"Platin"},royal:{body:6958335,trim:16766554,glow:11897855,label:"Kraliyet"}};function _a(i){return Kt("paint"+i,()=>new aa({color:i,roughness:.42,metalness:0,clearcoat:.35,clearcoatRoughness:.3}))}var fc=(i,t)=>new Et(i).lerp(new Et(16777215),t).getHex(),qx=(i,t)=>new Et(i).lerp(new Et(0),t).getHex(),tn={glass:()=>Kt("glass",()=>new Tt({color:3825542,roughness:.05,metalness:.3,transparent:!0,opacity:.42,depthWrite:!1})),interior:()=>Kt("interior",()=>new Tt({color:10466508,roughness:.9,side:be})),tire:()=>Kt("tire",()=>new Tt({color:1711138,roughness:.85})),bumper:()=>Kt("bumper",()=>new Tt({color:3883602,roughness:.5,metalness:.2})),head:()=>Kt("headlight",()=>new Tt({color:16774856,emissive:16771488,emissiveIntensity:.9,roughness:.2})),tail:()=>Kt("taillight",()=>new Tt({color:16724032,emissive:16715808,emissiveIntensity:.7,roughness:.3})),white:()=>Kt("white",()=>new Tt({color:16054010,roughness:.5})),dark:()=>Kt("darkpl",()=>new Tt({color:2764602,roughness:.7}))};function Xx(i){let t=Eu[i]||Eu.steel;return Kt("rim"+i,()=>new Tt({color:t.color,metalness:t.metal,roughness:t.rough,emissive:t.emissive||0,emissiveIntensity:t.emissive?.6:0}))}function ya(){return Kt("gold",()=>new Tt({color:16762938,metalness:1,roughness:.22,emissive:3810304,emissiveIntensity:.4}))}var rs=null;function $x(){if(rs)return rs;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.translate(64,64),t.lineJoin="round";let e=()=>{t.beginPath(),t.moveTo(0,-46),t.lineTo(34,-6),t.lineTo(13,-6),t.lineTo(13,42),t.lineTo(-13,42),t.lineTo(-13,-6),t.lineTo(-34,-6),t.closePath()};return e(),t.lineWidth=14,t.strokeStyle="rgba(20,30,50,.55)",t.stroke(),e(),t.fillStyle="#ffffff",t.fill(),rs=new hn(i),rs.anisotropy=4,rs.colorSpace=ge,rs}function Yx(i,t,e){return de("plate"+i+t+e,()=>{let n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,128),s.fillStyle=t,s.font="900 78px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,70);let r=new hn(n);return r.colorSpace=ge,r})}function Ma(i){return i*1-.12}var Zx=.76,Pn={1:.85,2:.8,3:.75,4:.72};function ba(i){let t=i.vip?"coach":i.style||"city",e=Ma(i.len),n=Zx,s=Ks[i.vipSkin||"gold"],r=i.vip?s.body:i.hex,a=new re,o=_a(r),l=_a(i.vip?s.trim:fc(r,.12)),c={wheels:[],seatMarks:[],body:[],bodyMat:o},h=t==="mini"?.44:.38,u=t==="school"?.38:t==="mini"?.24:.3,d=.12,f=new et(Se(n,h,e,t==="mini"?.16:.11),o);f.position.y=d+h/2,f.castShadow=!0,a.add(f),c.body.push(f);let g=n-.06,y=e-(t==="mini"?.2:.14),m=d+h,p=new et(Se(g-.06,u,y-.06,.03),tn.interior());p.position.y=m+u/2,a.add(p);let _=new et(Se(n-.02,.09,y+.06,.04),l);_.position.y=m+u+.04,_.castShadow=!0,a.add(_),c.body.push(_);let v=m+u+.085,b=t==="coach"?1:Math.max(1,Math.round((y-.2)/.42)),P=t==="coach"?0:.07,E=y-.22,A=(E-P*(b-1))/b;for(let Z=-1;Z<=1;Z+=2){for(let St=0;St<b;St++){let Nt=-E/2+A/2+St*(A+P),W=new et(Se(.03,u-.06,A,.012,2),tn.glass());W.position.set(Z*(g/2-.005),m+u/2,Nt),a.add(W)}let tt=new et(Se(.04,u,y,.015,2),o);tt.position.set(Z*(g/2-.03),m+u/2,0),tt.scale.set(.6,.12,1),tt.position.y=m+.01,a.add(tt)}let R=new et(Se(g-.1,u-.06,.03,.012,2),tn.glass());R.position.set(0,m+u/2,-y/2+.008),a.add(R);let F=R.clone();F.position.z=y/2-.008,F.scale.set(.85,.8,1),a.add(F);let x=new et(Se(n-.04,.08,.07,.03,2),i.vip?ya():tn.bumper());x.position.set(0,d+.07,-e/2+.01),a.add(x);let S=x.clone();S.position.z=e/2-.01,a.add(S);for(let Z=-1;Z<=1;Z+=2){let tt=new et(de("hl",()=>new Rn(.058,12,8)),tn.head());tt.scale.set(1,.8,.5),tt.position.set(Z*.24,d+.24,-e/2+.01),a.add(tt);let St=new et(de("tl",()=>new Ce(.1,.045,.03)),tn.tail());St.position.set(Z*.26,d+.26,e/2-.005),a.add(St)}let O=new et(Se(.26,.07,.03,.015,2),tn.dark());if(O.position.set(0,d+.2,-e/2+.008),a.add(O),t==="school"){let Z=new et(Se(n+.012,.05,e-.06,.012,2),tn.dark());Z.position.y=d+.2,a.add(Z);let tt=new et(de("stopsign",()=>new mn(.075,.075,.015,8)),Kt("stop",()=>new Tt({color:14690858,roughness:.4})));tt.rotation.z=Math.PI/2,tt.position.set(-n/2-.03,d+h-.02,-e/2+.3),a.add(tt)}if(t==="coach"){let Z=new et(Se(.26,.05,Math.min(.6,y*.35),.025,2),Kt("acunit",()=>new Tt({color:14673390,roughness:.6})));Z.position.set(0,v+.02,e*.12),a.add(Z);let tt=new et(Se(n+.012,.07,e-.2,.02,2),Kt("skirt",()=>new Tt({color:11187394,metalness:.7,roughness:.3})));tt.position.y=d+.06,a.add(tt)}if(t==="mini"){let Z=new et(Se(.4,.04,y*.5,.015,2),tn.dark());Z.position.set(0,v+.015,e*.08),a.add(Z)}let N=i.vip?ya():Xx(i.rim||"steel"),k=[],X=-e/2+.26,z=e/2-.26;k.push(X,z),i.len>=3&&(k.splice(1,0,(X+z)/2+(i.len>=4?-.35:0)),i.len>=4&&k.push((X+z)/2+.35));for(let Z of k)for(let tt=-1;tt<=1;tt+=2){let St=new et(de("arch",()=>new Qi(.2,20)),Kt("archm",()=>new Tt({color:1711656,roughness:.9})));St.rotation.y=tt*Math.PI/2,St.position.set(tt*(n/2+.004),.17,Z),a.add(St);let Nt=new re,W=new et(de("tire",()=>new mn(.15,.15,.12,20)),tn.tire());W.rotation.z=Math.PI/2,W.castShadow=!0;let Q=new et(de("hub",()=>new mn(.085,.085,.125,16)),N);Q.rotation.z=Math.PI/2;let xt=de("spoke",()=>new Ce(.13,.15,.02)),ct=new et(xt,tn.dark());ct.position.x=tt*.05,ct.scale.set(1,.7,1);let Ct=ct.clone();Ct.rotation.x=Math.PI/2,Nt.add(W,Q,ct,Ct),Nt.position.set(tt*(n/2-.02),.15,Z),a.add(Nt),c.wheels.push(Nt)}let J=i.seats,G=2,lt=Math.ceil(J/G);for(let Z=0;Z<J;Z++){let tt=Math.floor(Z/G),St=Z%G,Nt=lt===1?0:-E/2+.16+(E-.32)*(tt/(lt-1)),W=new et(de("seathead",()=>new Rn(.075,12,10)),new Tt({color:16777215,roughness:.5}));W.position.set((St===0?-1:1)*.16,m+u*.55,Nt);let Q=new et(de("seatbody",()=>new gi(.07,.05,4,8)),W.material);Q.position.set(0,-.1,0),W.add(Q),W.visible=!1,a.add(W),c.seatMarks.push(W)}if(!i.noArrow){let Z=new et(de("arrowplane",()=>new De(1,1)),new Ae({map:$x(),transparent:!0,depthWrite:!1}));Z.rotation.x=-Math.PI/2;let tt=Math.min(.52,e*.55);Z.scale.set(tt,tt,1),Z.position.set(0,v+(t==="coach"||t==="mini"?.052:.006),t==="coach"?-e*.22:i.len>=2?-e*.08:0),Z.renderOrder=3,a.add(Z),c.arrow=Z}if(i.vip){let Z=new et(new De(.5,.25),new Tt({map:Yx("VIP","#3a2400","#ffd45a"),roughness:.3,metalness:.5}));Z.rotation.x=-Math.PI/2,Z.position.set(0,v+.012,e*.3),a.add(Z);for(let Nt of[-e*.3,e*.3]){let W=new et(Se(n+.02,.025,.04,.01,2),ya());W.position.set(0,d+h-.03,Nt),a.add(W)}let tt=new et(Se(n+.016,.022,e-.1,.01,2),ya());tt.position.y=d+.2,a.add(tt);let St=new et(de("vipglow",()=>new De(1,1)),new Ae({map:pc(),color:s.glow,transparent:!0,blending:$n,depthWrite:!1,opacity:.85}));St.rotation.x=-Math.PI/2,St.scale.set(n+1.2,e+1.2,1),St.position.y=.02,St.renderOrder=1,a.add(St),c.glow=St}return a.userData.parts=c,a.userData.dims={Lz:e,W:n,roofTop:v},a}var va=null;function pc(){if(va)return va;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),va=new hn(i),va}function Js(i,t,e){i.userData.parts.seatMarks.forEach((s,r)=>{r<t.length?(s.visible=!0,s.material.color.setHex(e(t[r]))):s.visible=!1})}function Tu(i,t){let e=i.userData.parts,n=_a(t);for(let s of e.body)s.material=n;e.body[1].material=_a(fc(t,.12)),e.bodyMat=n}var as=null;function Kx(){if(as)return as;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#1a1d27";for(let e of[40,88])t.beginPath(),t.ellipse(e,52,7,10,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(e-2,47,3,0,7),t.fill(),t.fillStyle="#1a1d27";t.fillStyle="rgba(255,110,140,.5)";for(let e of[24,104])t.beginPath(),t.ellipse(e,78,10,6,0,0,7),t.fill();return t.strokeStyle="#1a1d27",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.arc(64,74,14,.2*Math.PI,.8*Math.PI),t.stroke(),as=new hn(i),as.colorSpace=ge,as.anisotropy=4,as}function mc(i,t,e=0){let n=t(i),s=new re,r=Kt("pbody"+n,()=>new Tt({color:n,roughness:.55})),a=Kt("phead"+n,()=>new Tt({color:fc(n,.22),roughness:.5})),o=Kt("ppants",()=>new Tt({color:2830917,roughness:.7})),l=new re,c=new re;c.scale.setScalar(1.22),c.add(l),s.add(c);let h=new et(de("pbodyg",()=>new gi(.15,.16,4,10)),r);h.position.y=.36,h.castShadow=!0,l.add(h);let u=new re;u.position.y=.66,l.add(u);let d=new et(de("pheadg",()=>new Rn(.16,16,12)),a);d.castShadow=!0,u.add(d);let f=new et(de("faceplane",()=>new De(.2,.2)),Kt("facemat",()=>new Ae({map:Kx(),transparent:!0,depthWrite:!1})));f.position.set(0,0,.153),f.renderOrder=2,u.add(f);let g=e%4;if(g===1){let v=new et(de("beanie",()=>new Rn(.17,12,8,0,Math.PI*2,0,Math.PI*.5)),Kt("beanie"+n,()=>new Tt({color:qx(n,.25),roughness:.8})));v.position.y=.04,v.rotation.x=-.15,u.add(v);let b=new et(de("pom",()=>new Rn(.04,8,6)),Kt("pomw",()=>new Tt({color:16777215})));b.position.y=.2,u.add(b)}else if(g===2){let v=new et(de("capdome",()=>new Rn(.168,12,8,0,Math.PI*2,0,Math.PI*.45)),Kt("cap"+n,()=>new Tt({color:16777215,roughness:.6})));v.position.y=.03,u.add(v);let b=new et(de("brim",()=>new mn(.1,.1,.018,12,1,!1,-Math.PI/2,Math.PI)),v.material);b.position.set(0,.07,.12),b.rotation.y=0,b.scale.set(1,1,1),u.add(b)}else if(g===3){let v=new et(Se(.22,.26,.1,.04,2),Kt("bp",()=>new Tt({color:16777215,roughness:.6})));v.position.set(0,.38,-.17),l.add(v)}let y=de("armg",()=>new gi(.045,.1,3,6)),m=de("legg",()=>new gi(.055,.06,3,6)),p=[],_=[];for(let v=-1;v<=1;v+=2){let b=new re;b.position.set(v*.19,.46,0);let P=new et(y,r);P.position.y=-.09,P.castShadow=!0,b.add(P),l.add(b),p.push(b);let E=new re;E.position.set(v*.075,.18,0);let A=new et(m,o);A.position.y=-.07,A.castShadow=!0,E.add(A),l.add(E),_.push(E)}return s.userData={rig:l,head:u,arms:p,legs:_,body:h,colorIndex:i,phase:Math.random()*6.28,state:"idle",yaw:0},s}function Au(){let i=new re,t=new et(new mn(.05,.07,1.9,8),Kt("lamppole",()=>new Tt({color:5857903,metalness:.6,roughness:.4})));t.position.y=.95,t.castShadow=!0,i.add(t);let e=new et(new Ce(.6,.05,.05),t.material);e.position.set(.28,1.9,0),i.add(e);let n=new et(Se(.28,.06,.14,.02,2),Kt("lampl",()=>new Tt({color:16773828,emissive:16769946,emissiveIntensity:.8})));return n.position.set(.55,1.87,0),i.add(n),i}function Ru(i=3715930){let t=new re,e=new et(new mn(.07,.09,.5,8),Kt("trunk",()=>new Tt({color:9067066,roughness:.9})));e.position.y=.25,e.castShadow=!0,t.add(e);let n=Kt("fol"+i,()=>new Tt({color:i,roughness:.75,flatShading:!0}));for(let s=0;s<3;s++){let r=new et(new Vs(.34-s*.07,1),n);r.position.y=.66+s*.3,r.castShadow=!0,t.add(r)}return t}function Cu(){let i=new re,t=new et(new mn(.28,.24,.2,14),Kt("pot",()=>new Tt({color:15265268,roughness:.5})));t.position.y=.1,t.castShadow=!0,i.add(t);let e=new et(new Vs(.27,1),Kt("bushm",()=>new Tt({color:7328058,roughness:.7,flatShading:!0})));return e.position.y=.36,e.castShadow=!0,i.add(e),i}function Pu(){let i=new re,t=Kt("wood",()=>new Tt({color:13208410,roughness:.8})),e=new et(Se(.9,.07,.3,.02,2),t);e.position.y=.32,e.castShadow=!0,i.add(e);let n=new et(Se(.9,.22,.05,.02,2),t);n.position.set(0,.5,-.14),i.add(n);for(let s of[-.38,.38]){let r=new et(new Ce(.05,.3,.26),tn.dark());r.position.set(s,.15,0),i.add(r)}return i}var ls=i=>t=>t===Cn?16103210:(Zs[i]||Zs.vivid)[t];var Ue={U:{x:0,y:-1,horiz:!1},D:{x:0,y:1,horiz:!1},L:{x:-1,y:0,horiz:!0},R:{x:1,y:0,horiz:!0}};function js(i,t){return t?hc:i*Su}function Qs(i,t={}){let e=i.buses.map((r,a)=>({id:a,color:r.v?Cn:r.c,len:r.l,dir:r.d,x:r.x,y:r.y,x0:r.x,y0:r.y,vip:!!r.v,seats:js(r.l,r.v),boarded:0,st:"board",slot:-1,arrived:!1})),n=t.slotsOpen??wu,s=[];for(let r=0;r<He;r++)s.push(r<n);return{w:i.w,h:i.h,buses:e,queue:i.queue.slice(),qi:0,slotOpen:s,slots:new Array(He).fill(null),vipSlot:null,moves:0,moveLimit:t.moveLimit??null,boardedTotal:0}}var In=i=>JSON.parse(JSON.stringify(i));function cs(i){let t=[],e=Ue[i.dir].horiz;for(let n=0;n<i.len;n++)t.push(e?[i.x+n,i.y]:[i.x,i.y+n]);return t}function Jx(i){switch(i.dir){case"R":return[i.x+i.len-1,i.y];case"L":return[i.x,i.y];case"D":return[i.x,i.y+i.len-1];default:return[i.x,i.y]}}function bi(i,t){let e=Ue[t.dir],[n,s]=Jx(t),r=[];for(;n+=e.x,s+=e.y,!(n<0||s<0||n>=i.w||s>=i.h);)r.push([n,s]);return r}function hs(i,t=-1){let e=new Map;for(let n of i.buses)if(!(n.st!=="board"||n.id===t))for(let[s,r]of cs(n))e.set(s+","+r,n.id);return e}function Sa(i,t){let e=hs(i,t.id),n=new Set;for(let[s,r]of bi(i,t)){let a=e.get(s+","+r);a!==void 0&&n.add(a)}return[...n]}function gc(i,t){if(t.vip)return i.vipSlot===null?"V":-1;for(let e=0;e<He;e++)if(i.slotOpen[e]&&i.slots[e]===null)return e;return-1}function wa(i,t){let e=i.buses[t];if(!e||e.st!=="board")return{ok:!1,reason:"invalid"};if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{ok:!1,reason:"limit"};let n=Sa(i,e);if(n.length)return i.moveLimit!==null&&i.moves++,{ok:!1,reason:"blocked",blockers:n};let s=gc(i,e);return s===-1?{ok:!1,reason:e.vip?"vipfull":"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,s==="V"?i.vipSlot=e.id:i.slots[s]=e.id,i.moves++,{ok:!0,slot:s})}function Iu(i,t){let e=i.buses[t];e&&(e.arrived=!0)}function Lu(i){return i.qi<i.queue.length?i.queue[i.qi]:null}function Ea(i){let t=Lu(i);if(t===null)return null;for(let e=0;e<He;e++){let n=i.slots[e];if(n===null)continue;let s=i.buses[n];if(s.arrived&&s.color===t&&s.boarded<s.seats)return s}if(i.vipSlot!==null){let e=i.buses[i.vipSlot];if(e.arrived&&e.boarded<e.seats)return e}return null}function xc(i){let t=Ea(i);if(!t)return null;let e=i.queue[i.qi];return i.qi++,t.boarded++,i.boardedTotal++,{bus:t,color:e,full:t.boarded>=t.seats}}function yc(i,t){let e=i.buses[t];!e||e.st!=="parked"||(e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="gone",e.slot=-1)}function vc(i){for(let e of i.buses)e.st==="parked"&&(e.arrived=!0);let t=[];for(;;){let e=xc(i);if(!e)break;t.push(e),e.full&&yc(i,e.bus.id)}return t}function Du(i){let t=[];for(let e of i.buses)e.st==="board"&&Sa(i,e).length===0&&gc(i,e)!==-1&&t.push(e);return t}function Ta(i){if(i.qi>=i.queue.length)return{status:"won"};let t=Du(i);if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{status:"lost",reason:"moves"};if(t.length===0){let n=i.buses.some(r=>r.st==="board");return{status:"lost",reason:i.buses.some(r=>r.st==="board"&&Sa(i,r).length===0)||!n?"noslot":"stuck"}}return{status:"playing"}}function _c(i){for(let t=0;t<He;t++)if(!i.slotOpen[t])return i.slotOpen[t]=!0,t;return-1}function Uu(i,t){let e=i.buses[t];if(!e||e.st!=="parked"||!e.arrived)return{ok:!1,reason:"invalid"};let n={...e,x:e.x0,y:e.y0,st:"board"},s=hs(i,t);for(let[r,a]of cs(n))if(s.has(r+","+a))return{ok:!1,reason:"occupied"};return e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="board",e.slot=-1,e.x=e.x0,e.y=e.y0,e.arrived=!1,{ok:!0}}function Nu(i){let t=Lu(i);if(t===null)return{ok:!1,reason:"empty"};let e=null,n=1e9;for(let r of i.buses){if(r.st!=="board"||r.vip||r.color!==t)continue;let a=Sa(i,r).length;a<n&&(n=a,e=r)}if(!e)return{ok:!1,reason:"none"};let s=gc(i,e);return s===-1?{ok:!1,reason:"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,i.slots[s]=e.id,i.moves++,{ok:!0,id:e.id,slot:s})}function Ou(i){if(i.vipSlot!==null)return{ok:!1,reason:"vipfull"};let t=i.buses.length;return i.buses.push({id:t,color:Cn,len:xa,dir:"U",x:0,y:0,x0:0,y0:0,vip:!0,seats:hc,boarded:0,st:"parked",slot:"V",arrived:!1,summoned:!0}),i.vipSlot=t,{ok:!0,id:t}}function Mc(i,t,e){let n=i.buses[t];return!n||n.st!=="board"||n.vip?{ok:!1,reason:"invalid"}:n.color===e?{ok:!1,reason:"same"}:(n.color=e,{ok:!0})}function bc(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip||e.len>=4)return null;let n=Ue[e.dir],s=hs(i,t),r,a,o=e.x,l=e.y;return e.dir==="R"?(r=e.x-1,a=e.y,o=r):e.dir==="L"?(r=e.x+e.len,a=e.y):e.dir==="D"?(r=e.x,a=e.y-1,l=a):(r=e.x,a=e.y+e.len),r<0||a<0||r>=i.w||a>=i.h||s.has(r+","+a)?null:{nx:o,ny:l}}function Sc(i,t){let e=bc(i,t);if(!e)return{ok:!1,reason:"nospace"};let n=i.buses[t];return n.x=e.nx,n.y=e.ny,n.x0=n.x,n.y0=n.y,n.len++,n.seats=js(n.len,!1),{ok:!0}}function jx(i){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");if(i==="star"){e.translate(32,32),e.fillStyle="#fff",e.beginPath();for(let s=0;s<10;s++){let r=s%2?11:28,a=-Math.PI/2+s*Math.PI/5;e.lineTo(Math.cos(a)*r,Math.sin(a)*r)}e.closePath(),e.fill()}else{let s=e.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,64,64)}let n=new hn(t);return n.colorSpace=ge,n}var Aa=class{constructor(t,e,n){this.max=n,this.n=0,this.next=0,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.s0=new Float32Array(n),this.s1=new Float32Array(n),this.grav=new Float32Array(n),this.drag=new Float32Array(n);let s=new Re;s.setAttribute("position",new Te(this.pos,3)),s.setAttribute("pcolor",new Te(this.col,3)),s.setAttribute("psize",new Te(this.size,1)),s.setAttribute("palpha",new Te(this.alpha,1)),this.geo=s,this.mat=new Je({transparent:!0,depthWrite:!1,blending:Wn,uniforms:{map:{value:jx(e)},scale:{value:600}},vertexShader:`attribute vec3 pcolor; attribute float psize; attribute float palpha; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*1.0,t.a*vA); if(gl_FragColor.a<0.01) discard; }`}),this.pts=new Qr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=10,t.add(this.pts);for(let r=0;r<n;r++)this.alpha[r]=0}emit(t,e,n,s,r,a,o,l,c,h,u=0,d=0){let f=this.next;this.next=(this.next+1)%this.max;let g=new Et(o);this.pos.set([t,e,n],f*3),this.vel.set([s,r,a],f*3),this.col.set([g.r,g.g,g.b],f*3),this.life[f]=l,this.maxLife[f]=l,this.s0[f]=c,this.s1[f]=h,this.grav[f]=u,this.drag[f]=d,this.alpha[f]=1}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.alpha[e]!==0&&(this.alpha[e]=0,this.size[e]=0);continue}this.life[e]-=t;let n=1-Math.max(0,this.life[e])/this.maxLife[e],s=e*3;this.vel[s+1]-=this.grav[e]*t;let r=Math.max(0,1-this.drag[e]*t);this.vel[s]*=r,this.vel[s+1]*=r,this.vel[s+2]*=r,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.size[e]=this.s0[e]+(this.s1[e]-this.s0[e])*n,this.alpha[e]=n<.15?n/.15:1-(n-.15)/.85}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.psize.needsUpdate=!0,this.geo.attributes.palpha.needsUpdate=!0}},Ra=class{constructor(t,e="high"){this.scene=t;let n=e==="low"?.5:1;this.dots=new Aa(t,"dot",Math.floor(500*n)),this.stars=new Aa(t,"star",Math.floor(300*n)),this.rings=[],this.mult=n}setScale(t){this.dots.mat.uniforms.scale.value=t,this.stars.mat.uniforms.scale.value=t}puff(t,e,n=16777215,s=1,r=.5){for(let a=0;a<s;a++)this.dots.emit(t+(Math.random()-.5)*.2,.12,e+(Math.random()-.5)*.2,(Math.random()-.5)*.5,.4+Math.random()*.3,(Math.random()-.5)*.5,n,.55+Math.random()*.3,.2,r,-.2,2.5)}burst(t,e,n,s,r=14,a=3,o=!0,l=.7){r=Math.ceil(r*this.mult);for(let c=0;c<r;c++){let h=Math.random()*Math.PI*2,u=Math.random()*.9+.2,d=a*(.5+Math.random()*.7);(o?this.stars:this.dots).emit(t,e,n,Math.cos(h)*d*u,d*(.5+Math.random()*.8),Math.sin(h)*d*u,s,l*(.7+Math.random()*.6),.22,.04,6,1.5)}}sparkleAround(t,e,n,s,r=16769674,a=3){for(let o=0;o<a;o++)this.stars.emit(t+(Math.random()-.5)*n,.2+Math.random()*.9,e+(Math.random()-.5)*s,0,.5,0,r,.9,0,.24,-.2,0)}ring(t,e,n=16769674,s=.3,r=2.2,a=.8){let o=new et(new sa(.85,1,48),new Ae({color:n,transparent:!0,opacity:.9,blending:$n,depthWrite:!1,side:on}));o.rotation.x=-Math.PI/2,o.position.set(t,.06,e),o.scale.setScalar(s),o.renderOrder=5,this.scene.add(o),this.rings.push({m:o,t:0,dur:a,r0:s,r1:r})}confetti(t,e,n=90){n=Math.ceil(n*this.mult);let s=[16731501,16763196,5099775,8126314,12946431,16777215];for(let r=0;r<n;r++){let a=Math.random()*Math.PI*2,o=2+Math.random()*5;this.stars.emit(t+(Math.random()-.5)*6,3+Math.random()*2,e+(Math.random()-.5)*8,Math.cos(a)*o*.4,1+Math.random()*3,Math.sin(a)*o*.4,s[r%s.length],1.8+Math.random()*1.2,.2,.16,5,.6)}}update(t){this.dots.update(t),this.stars.update(t);for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];n.t+=t;let s=Math.min(1,n.t/n.dur);n.m.scale.setScalar(n.r0+(n.r1-n.r0)*(1-Math.pow(1-s,3))),n.m.material.opacity=.9*(1-s),s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}};var Gu=1.05,fe=-5.2,Pa=3.35,ku=.92,Qx=fe-Pa/2,us=Qx-1,Ln=fe+Pa/2+.85,ds=Ln+1.2,Ca=-9.35,Si=9,Fu=.66,Bu=.64,Wu=5,ty=Si*Wu,dn=i=>(i-3.5)*Gu,Ec={U:0,D:Math.PI,L:Math.PI/2,R:-Math.PI/2},fs={out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,back:i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function tr(i,t){let e=t-i;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function zu(i,t){let e=[i[0].clone()];for(let n=1;n<i.length-1;n++){let s=i[n-1],r=i[n],a=i[n+1],o=s.clone().sub(r),l=a.clone().sub(r),c=o.length(),h=l.length();if(c<1e-4||h<1e-4){e.push(r.clone());continue}o.normalize(),l.normalize();let u=Math.min(t,c*.5,h*.5),d=r.clone().addScaledVector(o,u),f=r.clone().addScaledVector(l,u);e.push(d);for(let g=1;g<10;g++){let y=g/10,m=1-y;e.push(new st(m*m*d.x+2*m*y*r.x+y*y*f.x,m*m*d.y+2*m*y*r.y+y*y*f.y))}e.push(f)}return e.push(i[i.length-1].clone()),e}function Hu(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return t}function Vu(i,t,e){e=Math.max(0,Math.min(t[t.length-1],e));let n=1;for(;n<t.length-1&&t[n]<e;)n++;let s=Math.max(1e-6,t[n]-t[n-1]),r=(e-t[n-1])/s,a=i[n-1],o=i[n];return{x:a.x+(o.x-a.x)*r,z:a.y+(o.y-a.y)*r,dx:o.x-a.x,dz:o.y-a.y}}function Tc(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new hn(n);return s.colorSpace=ge,s.anisotropy=8,s}function er(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Ia=class{constructor(t,e={}){this.container=t,this.quality=e.quality||"high",this.cos={style:"city",rim:"steel",trail:"dust",palette:"vivid",vipSkin:"gold"},this.hexOf=ls("vivid"),this.state=null,this.tweens=[],this.busVis=new Map,this.passengers=new Map,this.walkers=new Set,this.glows=new Map,this.labels=new Map,this.stripBusy=!1,this.boardCd=0,this.idleFired=!0,this.celebrating=[],this.slotHold=new Array(He+1).fill(!1),this.sfx=()=>{},this.onBusTap=null,this.onSlotTap=null,this.onIdle=null,this.onBoarded=null,this.onBusDepart=null,this.onBusArrive=null,this.tapFilter=null,this.time=0,this.slotMeshes=[],this.slotTexKinds=[];let n=this.renderer=new ji({antialias:this.quality!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});n.outputColorSpace=ge,n.toneMapping=qs,n.toneMappingExposure=1,n.shadowMap.enabled=this.quality!=="low",n.shadowMap.type=Ws,t.appendChild(n.domElement),n.domElement.style.touchAction="none",this.scene=new jn,this.scene.background=new Et(13227750),this.camera=new Me(36,1,.5,200);let s=new Jn(n);this.scene.environment=s.fromScene(new ss,.04).texture,this.scene.environmentIntensity=.32,this.setupLights(),this.buildStatic(),this.fx=new Ra(this.scene,this.quality),this.labelLayer=document.createElement("div"),this.labelLayer.className="label-layer",t.appendChild(this.labelLayer),this.raycaster=new ha,this.dragInfo=null,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize()}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.dirLight.castShadow=t!=="low",this.resize()}setCosmetics(t){Object.assign(this.cos,t),this.hexOf=ls(this.cos.palette)}setupLights(){let t=new es(15660543,10465484,.55);this.scene.add(t);let e=this.dirLight=new _i(16774108,1.7);e.position.set(-6,14,5),e.target.position.set(0,0,-1.5),e.castShadow=this.quality!=="low",e.shadow.mapSize.set(this.quality==="high"?2048:1024,this.quality==="high"?2048:1024);let n=e.shadow.camera;n.left=-9,n.right=9,n.top=15,n.bottom=-15,n.near=1,n.far=40,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,e.shadow.radius=3.5,this.scene.add(e,e.target);let s=new _i(13623551,.3);s.position.set(6,6,8),this.scene.add(s)}buildStatic(){let t=this.scene,e=Tc(256,256,(p,_,v)=>{p.fillStyle="#c9d6e6",p.fillRect(0,0,_,v),p.fillStyle="#d6e1ee",p.fillRect(5,5,_-10,v-10),p.strokeStyle="#b6c6da",p.lineWidth=4,p.strokeRect(0,0,_,v)});e.wrapS=e.wrapT=Ps,e.repeat.set(30,30);let n=new et(new De(60,60),new Tt({map:e,roughness:.85}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Tt({color:7173510,roughness:.92}),r=new et(this.roundedPlate(9.9,7,.7),s);r.position.set(0,.02,(-8.6+-1.6)/2),r.receiveShadow=!0,t.add(r);let a=new et(this.roundedPlate(26,1.55,.3),s);a.position.set(0,.021,us),a.receiveShadow=!0,t.add(a);let o=new et(new De(26,.06),new Ae({color:15979626,transparent:!0,opacity:.8}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,us),t.add(o);let l=new Tt({color:16054267,roughness:.5}),c=new et(new Ce(9.9,.14,.14),l);c.position.set(0,.07,-1.55),c.castShadow=!0,t.add(c);let h=Si*Fu+.9,u=Ca+.55,d=Ca-(Wu-1)*Bu-.55,f=new Tt({color:16777215,roughness:.4}),g=(p,_,v,b)=>{let P=new et(new Ce(p,.3,_),f);P.position.set(v,.15,b),P.castShadow=!0,P.receiveShadow=!0,t.add(P)};g(.18,u-d,-h/2,(u+d)/2),g(.18,u-d,h/2,(u+d)/2),g(h,.18,0,d),g(1.1,.18,-h/2+.55,u),g(1.1,.18,h/2-.55,u);let y=new et(this.roundedPlate(h-.1,u-d,.15),new Tt({color:13622249,roughness:.8}));y.position.set(0,.02,(u+d)/2),y.receiveShadow=!0,t.add(y),this.queueBack=d;for(let[p,_]of[[-6.2,-2.8],[6.2,-2.8]]){let v=Au();v.position.set(p,0,_),p>0&&(v.scale.x=-1),t.add(v)}for(let[p,_]of[[-5.9,-6],[5.9,-6],[-6.6,-9.5],[6.6,-9.5]]){let v=Cu();v.position.set(p,0,_),t.add(v)}for(let[p,_]of[[-6.5,-11.2],[6.5,-11.2]]){let v=Ru(4440682);v.position.set(p,0,_),t.add(v)}let m=Pu();m.position.set(-5.3,0,-12.1),t.add(m),this.buildSlots(),this.boardGroup=new re,t.add(this.boardGroup),this.busGroup=new re,t.add(this.busGroup),this.passGroup=new re,t.add(this.passGroup)}roundedPlate(t,e,n){let s=new Fs,r=-t/2,a=-e/2;s.moveTo(r+n,a),s.lineTo(r+t-n,a),s.quadraticCurveTo(r+t,a,r+t,a+n),s.lineTo(r+t,a+e-n),s.quadraticCurveTo(r+t,a+e,r+t-n,a+e),s.lineTo(r+n,a+e),s.quadraticCurveTo(r,a+e,r,a+e-n),s.lineTo(r,a+n),s.quadraticCurveTo(r,a,r+n,a);let o=new ra(s,6);return o.rotateX(-Math.PI/2),o}slotTexture(t){return Tc(128,340,(e,n,s)=>{if(e.clearRect(0,0,n,s),t==="vip"){let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffe17a"),r.addColorStop(1,"#d99a12"),e.fillStyle=r,er(e,5,5,n-10,s-10,22),e.fill(),e.strokeStyle="#fff3c4",e.lineWidth=4,er(e,5,5,n-10,s-10,22),e.stroke(),e.save(),e.translate(n/2,s/2),e.rotate(-Math.PI/2),e.fillStyle="#7a4d00",e.font="900 64px system-ui,sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("VIP",0,4),e.restore();return}e.fillStyle=t==="locked"?"rgba(20,28,45,.28)":"rgba(15,22,38,.22)",er(e,5,5,n-10,s-10,22),e.fill(),e.lineWidth=5,e.strokeStyle=t==="temp"?"#7dffb0":"rgba(255,255,255,.85)",t==="locked"&&e.setLineDash([16,12]),er(e,5,5,n-10,s-10,22),e.stroke(),e.setLineDash([]),t==="locked"&&(e.fillStyle="#3fdc6a",er(e,n/2-34,s/2-34,68,68,16),e.fill(),e.fillStyle="#fff",e.fillRect(n/2-22,s/2-6,44,12),e.fillRect(n/2-6,s/2-22,12,44))})}buildSlots(){this.slotTex={open:this.slotTexture("open"),locked:this.slotTexture("locked"),vip:this.slotTexture("vip"),temp:this.slotTexture("temp")};for(let t=0;t<He+1;t++){let e=new et(new De(ku,Pa),new Ae({map:this.slotTex.open,transparent:!0,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(dn(t),.04,fe),e.renderOrder=2,this.scene.add(e),e.userData.slotK=t,this.slotMeshes.push(e)}this.slotMeshes[0].material.map=this.slotTex.vip}refreshSlots(t,e=[]){for(let n=0;n<He;n++){let s=this.slotMeshes[n+1];s.material.map=t.slotOpen[n]?e.includes(n)?this.slotTex.temp:this.slotTex.open:this.slotTex.locked,s.material.needsUpdate=!0}}resize(){let t=this.container.clientWidth||360,e=this.container.clientHeight||640,n=Math.min(window.devicePixelRatio||1,this.quality==="high"?2.5:this.quality==="medium"?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.fitCamera(),this.fx?.setScale(e*n*.62)}fitCamera(){let t=this.camera,e=this.state?this.state.h:7,n=this.queueBack-.5,s=ds+e+.9,r=[],a=Math.max(4.75,this.state?this.state.w/2+.9:4.4);for(let d of[-a,a])r.push(new C(d,1,n),new C(d,0,s),new C(d,.4,s));let o=uu.degToRad(this.camera.aspect<.7?57:52),l=(n+s)/2,c=30,h=(d,f)=>{t.position.set(0,Math.sin(o)*d,f+Math.cos(o)*d),t.lookAt(0,0,f),t.updateMatrixWorld(!0),t.updateProjectionMatrix()},u=()=>{let d=0,f=9,g=-9;for(let y of r){let m=y.clone().project(t);d=Math.max(d,Math.abs(m.x)),f=Math.min(f,m.y),g=Math.max(g,m.y)}return{mx:d,mnY:f,mxY:g}};for(let d=0;d<7;d++){let f=6,g=120;for(let m=0;m<22;m++){let p=(f+g)/2;h(p,l);let _=u();_.mx<=.97&&_.mxY<=.97&&_.mnY>=-.97?g=p:f=p}c=g,h(c,l);let y=u();l-=(y.mxY+y.mnY)/2*c*.55}h(c,l)}clearStage(){for(let t of[this.boardGroup,this.busGroup,this.passGroup])for(;t.children.length;)t.remove(t.children[0]);this.busVis.clear(),this.passengers.clear(),this.walkers.clear(),this.tweens.length=0,this.glows.forEach(t=>this.scene.remove(t)),this.glows.clear(),this.labels.forEach(t=>t.remove()),this.labels.clear(),this.celebrating=[],this.stripBusy=!1,this.boardCd=0,this.slotHold.fill(!1),this.forceDepart=!1}loadStage(t,e=[]){this.clearStage(),this.state=t;let n=t.w,s=t.h,r=new et(this.roundedPlate(n+3.6,s+3.4,.9),new Tt({color:11122384,roughness:.85}));r.position.set(0,.015,ds+s/2-.1),r.receiveShadow=!0,this.boardGroup.add(r);let a=Tc(64*n,64*s,(c,h,u)=>{c.fillStyle="#d5dff0",c.fillRect(0,0,h,u);for(let d=0;d<s;d++)for(let f=0;f<n;f++)c.fillStyle=(f+d)%2?"#cdd8ec":"#dbe4f4",c.fillRect(f*64+2,d*64+2,60,60)}),o=new et(new De(n,s),new Tt({map:a,roughness:.9}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,ds+s/2),o.receiveShadow=!0,this.boardGroup.add(o);let l=new et(new De(n+.16,s+.16),new Ae({color:9675718}));l.rotation.x=-Math.PI/2,l.position.set(0,.025,ds+s/2),this.boardGroup.add(l);for(let c of t.buses)this.makeBusVis(c);this.refreshSlots(t,e),this.fitCamera(),this.ensureQueue(!0),this.idleFired=!1}cellToWorld(t,e){return{x:t-this.state.w/2+.5,z:ds+e+.5}}busCenter(t){let e=Ue[t.dir].horiz;return this.cellToWorld(t.x+(e?(t.len-1)/2:0),t.y+(e?0:(t.len-1)/2))}makeBusVis(t){let e=t.vip?0:this.hexOf(t.color),n=ba({len:t.len,hex:e,style:this.cos.style,vip:t.vip,rim:this.cos.rim,vipSkin:this.cos.vipSkin,seats:t.seats}),s={id:t.id,g:n,parts:n.userData.parts,vcount:0,vcolors:[],traveling:!1,departing:!1,trailT:0,dragOff:0,bounce:0,dims:n.userData.dims};if(n.traverse(r=>{r.isMesh&&(r.castShadow=r.castShadow||!1)}),this.busGroup.add(n),this.busVis.set(t.id,s),t.st==="board"){let r=this.busCenter(t);n.position.set(r.x,0,r.z),n.rotation.y=Ec[t.dir],n.userData.baseX=r.x,n.userData.baseZ=r.z}else if(t.st==="parked"){let r=t.slot==="V"?0:t.slot+1;n.position.set(dn(r),0,fe),n.rotation.y=0,n.scale.setScalar(Pn[t.len]||.75),s.parts.arrow&&(s.parts.arrow.visible=!1),s.vcount=t.boarded,s.vcolors=new Array(t.boarded).fill(t.color),Js(n,s.vcolors,a=>a===Cn?16777215:this.hexOf(a)),s.parked=!0}else n.visible=!1;return s}queuePos(t){let e=Math.floor(t/Si),n=t%Si;return{x:((e%2===0?n:Si-1-n)-(Si-1)/2)*Fu,z:Ca-e*Bu}}spawnPassenger(t,e){let n=this.state.queue[t],s=mc(n,this.hexOf,(t*7+(t>>2))%4);s.traverse(o=>{o.isMesh&&(o.castShadow=this.quality!=="low")});let r=t-this.state.qi,a=this.queuePos(r);return s.position.set(a.x,0,a.z),s.rotation.y=0,s.userData.yaw=0,s.scale.setScalar(e?1:.01),s.userData.spawn=e?1:0,s.userData.idx=t,s.userData.moving=!1,this.passGroup.add(s),this.passengers.set(t,s),s}ensureQueue(t=!1){let e=this.state;if(!e)return;let n=this.quality==="low"?Si*4:ty;for(let s=e.qi;s<Math.min(e.queue.length,e.qi+n);s++)this.passengers.has(s)||this.spawnPassenger(s,t)}startDriveToSlot(t,e,{instantArrive:n=!1}={}){let s=this.state.buses[t],r=this.busVis.get(t),a=e==="V"?0:e+1,o=dn(a),l=r.g;l.visible=!0;let c=this.state.w,h=this.state.h,u={x:l.position.x,z:l.position.z},d=(_,v)=>new st(_,v),f=[d(u.x,u.z)],g=c/2+1.15,y=ds+h+1;switch(s.summoned&&l.position.set(o,6,fe+4),s.st==="parked"&&r.fromBoard,s.dir){case"U":f.push(d(u.x,Ln));break;case"D":{let _=u.x<=0?-1:1;f.push(d(u.x,y),d(_*g,y),d(_*g,Ln));break}case"L":f.push(d(-g,u.z),d(-g,Ln));break;case"R":f.push(d(g,u.z),d(g,Ln));break}f.push(d(o,Ln),d(o,fe));let m=zu(f,.95),p=Hu(m);r.traveling=!0,r.travel={poly:m,L:p,s:0,v:0,total:p[p.length-1],slot:a,park:Pn[s.len]||.75,final:p[p.length-1]-(fe-Ln)*-1,yawSm:l.rotation.y},r.travel.finalStart=p[p.length-1]-(fe+0-Ln)*-1,r.travel.finalStart=p[p.length-1]-Math.abs(fe-Ln),r.fromBoard=!0,r.parts.arrow&&(r.parts.arrow.material.opacity=1),this.sfx("engine")}updateTravel(t,e){let n=t.travel,s=t.g,r=n.total-n.s,a=9.5,o=22,l=a,c=n.s>n.finalStart-.4&&this.slotHold[n.slot];c&&(l=0),l=Math.min(l,Math.sqrt(28*Math.max(0,r))+.8),n.v+=Math.sign(l-n.v)*Math.min(Math.abs(l-n.v),o*e),c&&n.s>=n.finalStart-.4+.02&&(n.v=0);let h=n.v*e;n.s=Math.min(n.total,n.s+h);let u=Vu(n.poly,n.L,n.s);s.position.x=u.x,s.position.z=u.z,s.userData.summonY!==void 0&&(s.position.y=0);let d=Math.atan2(-u.dx,-u.dz);s.rotation.y+=tr(s.rotation.y,d)*Math.min(1,e*14);let f=Math.max(0,Math.min(1,(n.s-(n.finalStart-2.2))/2.2));s.scale.setScalar(1+(n.park-1)*fs.out(f));for(let g of t.parts.wheels)g.rotation.x-=h/.15;t.trailT-=e,t.trailT<=0&&n.v>1.5&&(t.trailT=.07,this.emitTrail(s.position.x,s.position.z,s.rotation.y)),n.s>=n.total-.001&&this.finishArrive(t)}emitTrail(t,e,n){let s=t+Math.sin(n)*.45,r=e+Math.cos(n)*.45,a=this.cos.trail;a==="sparkle"?this.fx.stars.emit(s,.2,r,(Math.random()-.5)*.6,.6,(Math.random()-.5)*.6,16769674,.7,.16,0,1,.5):a==="stars"?this.fx.stars.emit(s,.25,r,(Math.random()-.5)*.8,.7,(Math.random()-.5)*.8,[8246271,16743904,16773757][Math.floor(Math.random()*3)],.8,.2,.02,1.5,.5):a==="bubbles"?this.fx.dots.emit(s,.2,r,(Math.random()-.5)*.4,.8,(Math.random()-.5)*.4,12577535,.9,.1,.32,-.8,.5):this.fx.puff(s,r,16777215,1,.55)}finishArrive(t){t.traveling=!1,t.parked=!0,t.travel=null;let e=t.g,n=this.state.buses[t.id],s=t.id,r=n.slot==="V"?0:n.slot+1;e.position.set(dn(r),0,fe),e.rotation.y=0,e.scale.setScalar(Pn[n.len]||.75),t.parts.arrow&&(t.parts.arrow.visible=!1),t.bounce=1,this.sfx("park"),this.fx.puff(e.position.x,e.position.z+1,16777215,4,.7),n.vip&&(this.fx.burst(e.position.x,.6,e.position.z,16766042,26,3.2,!0,1),this.fx.ring(e.position.x,e.position.z,16766042,.4,2.6,.9),this.sfx("vip")),Iu(this.state,t.id),this.onBusArrive?.(n),this.idleFired=!1}startDeparture(t){let e=this.state.buses[t.id],n=e.slot==="V"?0:e.slot+1,s=t.g,r=s.position.x,a=r<=0?-1:1,o=fe-Ma(e.len)*(Pn[e.len]||.75)/2,l=[new st(r,s.position.z),new st(r,us),new st(a*11.5,us)],c=zu(l,1),h=Hu(c);t.departing=!0,t.depart={poly:c,L:h,s:0,v:0,total:h[h.length-1],slotK:n,slotIdx:e.slot},this.stripBusy=!0,this.slotHold[n]=!0,yc(this.state,t.id),this.removeLabel(t.id),this.sfx("depart"),this.onBusDepart?.(e)}updateDeparture(t,e){let n=t.depart,s=t.g;n.v=Math.min(8.5,n.v+16*e);let r=n.v*e;n.s=Math.min(n.total,n.s+r);let a=Vu(n.poly,n.L,n.s);s.position.x=a.x,s.position.z=a.z;let o=Math.atan2(-a.dx,-a.dz);s.rotation.y+=tr(s.rotation.y,o)*Math.min(1,e*10);for(let l of t.parts.wheels)l.rotation.x-=r/.15;t.trailT-=e,t.trailT<=0&&(t.trailT=.08,this.fx.puff(s.position.x+Math.sin(s.rotation.y)*.4,s.position.z+Math.cos(s.rotation.y)*.4,16777215,1,.5)),n.s>2.4&&this.slotHold[n.slotK]&&(this.slotHold[n.slotK]=!1),n.s>=n.total-.01&&(t.departing=!1,this.stripBusy=!1,this.busGroup.remove(s),this.busVis.delete(t.id),this.slotHold[n.slotK]=!1,this.idleFired=!1)}startBoardWalk(t){let n=this.state.qi-1,s=this.passengers.get(n);s||(s=this.spawnPassenger(n,!0)),this.passengers.delete(n);let r=this.busVis.get(t.bus.id),a=t.bus,o=r.g.position.x,l=fe-Ma(a.len)*(Pn[a.len]||.75)/2,c=(Math.random()-.5)*.22,h=l-.28;s.userData.walk={pts:[new st(s.position.x,s.position.z),new st(o+c,us+.1),new st(o+c*.5,h)],seg:0,t:0,bus:r,color:t.color,hop:0},s.userData.state="board",this.walkers.add(s),this.sfx("step")}updatePassengers(t){let e=this.state;if(e){this.time+=t;for(let[n,s]of this.passengers){let r=s.userData;r.spawn<1&&(r.spawn=Math.min(1,r.spawn+t*4),s.scale.setScalar(Math.max(.01,fs.back(r.spawn))));let a=this.queuePos(n-e.qi),o=a.x-s.position.x,l=a.z-s.position.z,c=Math.hypot(o,l);if(c>.02){let h=Math.min(c,3.6*t);s.position.x+=o/c*h,s.position.z+=l/c*h,r.moving=!0,r.targetYaw=Math.atan2(o,l)}else r.moving=!1,r.targetYaw=0;this.animatePassenger(s,t,r.moving?"walk":"idle")}for(let n of[...this.walkers]){let s=n.userData,r=s.walk;if(r.hop>0){r.hop+=t*4.5;let m=Math.min(1,r.hop-1),p=r.bus,_=p.g.position.z-.15;n.position.x+=(p.g.position.x-n.position.x)*Math.min(1,t*12),n.position.z+=(_-n.position.z)*Math.min(1,t*12),n.position.y=Math.sin(m*Math.PI)*.5,n.scale.setScalar(Math.max(.15,1-m*.85)),this.animatePassenger(n,t,"board"),m>=1&&this.finishBoard(n);continue}let a=r.pts[r.seg],o=r.pts[r.seg+1],l=a.distanceTo(o),c=Math.hypot(o.x-n.position.x,o.y-n.position.z),h=r.seg===r.pts.length-2,u=h?Math.max(1.8,Math.min(4.8,c*3.2+1.2)):4.8,d=o.x-n.position.x,f=o.y-n.position.z,g=Math.hypot(d,f),y=Math.min(g,u*t);g>1e-4&&(n.position.x+=d/g*y,n.position.z+=f/g*y,s.targetYaw=Math.atan2(d,f)),this.animatePassenger(n,t,"walk"),g-y<.03&&(h?r.hop=1:r.seg++)}for(let n of this.celebrating)this.animatePassenger(n,t,"celebrate")}}animatePassenger(t,e,n){let s=t.userData;s.phase+=e*(n==="walk"?11:n==="celebrate"?9:2.2);let r=s.phase;s.targetYaw!==void 0&&(t.rotation.y+=tr(t.rotation.y,s.targetYaw)*Math.min(1,e*12));let[a,o]=s.arms,[l,c]=s.legs;if(n==="walk"){let h=Math.sin(r)*.9;l.rotation.x=h,c.rotation.x=-h,a.rotation.x=-h*.8,o.rotation.x=h*.8,s.rig.position.y=Math.abs(Math.sin(r))*.05,s.rig.rotation.z=Math.sin(r)*.05,s.head.rotation.z=Math.sin(r)*.05}else if(n==="celebrate")a.rotation.x=o.rotation.x=-2.6+Math.sin(r)*.3,a.rotation.z=.3,o.rotation.z=-.3,l.rotation.x=c.rotation.x=0,t.position.y=Math.abs(Math.sin(r*.9))*.35,s.rig.rotation.z=0;else if(n==="board")l.rotation.x=Math.sin(r)*.6,c.rotation.x=-Math.sin(r)*.6,a.rotation.x=o.rotation.x=-1.2;else{l.rotation.x=c.rotation.x=0,a.rotation.x=o.rotation.x=0,a.rotation.z=.04,o.rotation.z=-.04;let h=Math.sin(r+t.position.x)*.02;s.rig.position.y=0,s.rig.scale.set(1+h,1-h,1+h),s.rig.rotation.z=Math.sin(r*.5+t.position.z)*.02,s.head.rotation.z=Math.sin(r*.5+t.position.x*2)*.05}}finishBoard(t){let e=t.userData.walk,n=e.bus;this.walkers.delete(t),this.passGroup.remove(t),n.vcount++,n.vcolors.push(e.color),Js(n.g,n.vcolors,s=>s===Cn?16777215:this.hexOf(s)),n.bounce=Math.max(n.bounce,.6),this.fx.burst(n.g.position.x,.8,n.g.position.z-.5,this.hexOf(e.color),7,2.2,!0,.55),this.sfx("board"),this.onBoarded?.(e.color,this.state.buses[n.id]),this.idleFired=!1}director(t){let e=this.state;if(!e)return;this.boardCd-=t;let n=null;for(let s of this.busVis.values()){let r=e.buses[s.id];if(r.st==="parked"&&r.arrived&&!s.departing&&(s.vcount>=r.seats&&r.boarded>=r.seats||this.forceDepart&&s.vcount>=r.boarded)){n=s;break}}if(n&&!this.stripBusy&&this.walkers.size===0){this.startDeparture(n);return}if(!n&&!this.stripBusy&&this.boardCd<=0&&Ea(e)){let r=xc(e);r&&(this.startBoardWalk(r),this.boardCd=.16,this.ensureQueue())}this.idleFired||![...this.busVis.values()].some(r=>r.traveling||r.departing)&&this.walkers.size===0&&!this.stripBusy&&!Ea(e)&&!n&&(this.idleFired=!0,this.onIdle?.())}isBusy(){return this.state?[...this.busVis.values()].some(t=>t.traveling)||this.walkers.size>0||this.stripBusy:!1}isTraveling(){return[...this.busVis.values()].some(t=>t.traveling)}tween(t,e,n){this.tweens.push({t:0,dur:t,fn:e,done:n})}bump(t,e=[]){let n=this.busVis.get(t);if(!n)return;let s=this.state,r=s.buses[t],a=Ue[r.dir],o=n.g;if(n.bumping)return;n.bumping=!0;let l=o.userData.baseX,c=o.userData.baseZ,h=hs(s,t),u=0,d=null;for(let[P,E]of bi(s,r)){let A=P+","+E;if(h.has(A)){d=A;break}u++}let f=Math.max(.1,u-.04),g=.14+.06*Math.min(u,5),y=.42,m=g+y,p=!1,_=e[0],v=l+a.x*(f+r.len/2),b=c+a.y*(f+r.len/2);this.sfx("engine"),this.tween(m,P=>{let E=P*m,A;if(E<g){let F=E/g;A=f*F*F}else{p||(p=!0,this.onBumpHit(n,_,a,v,b,u));let F=(E-g)/y;A=f*(1-Math.min(1,F*1.15))+Math.sin(F*Math.PI*2.2)*.1*(1-F)*(F<.5?-1:1)*.5,F>=1&&(A=0)}o.position.x=l+a.x*A,o.position.z=c+a.y*A;let R=E>=g?Math.max(0,1-(E-g)/.25):0;o.rotation.z=Math.sin(E*60)*.05*R,o.scale.set(1+.05*R*(a.horiz?-1:1)*.5,1,1+.05*R*(a.horiz?1:-1)*.5)},()=>{o.position.set(l,0,c),o.rotation.z=0,o.scale.setScalar(1),n.bumping=!1}),n.parts.arrow&&(n.parts.arrow.material.color.set(16734810),setTimeout(()=>n.parts.arrow&&n.parts.arrow.material.color.set(16777215),450))}onBumpHit(t,e,n,s,r,a){if(this.sfx("bump"),this.fx.burst(s,.6,r,16763210,14,3.2,!0,.6),this.fx.burst(s,.5,r,16777215,8,2.2,!1,.45),this.fx.puff(s,r,16777215,4,.7),this.fx.ring(s,r,16757575,.2,1.4,.45),this.shakeCamera(.16+Math.min(a,4)*.025,.32),e!==void 0){let o=this.busVis.get(e);if(!o)return;let l=o.g,c=l.userData.baseX,h=l.userData.baseZ;this.flashBus(e,16731469,.7),this.tween(.4,u=>{let d=Math.sin(u*Math.PI*3)*.14*(1-u);l.position.x=c+n.x*d,l.position.z=h+n.y*d,l.rotation.z=Math.sin(u*40)*.035*(1-u)},()=>{l.position.x=c,l.position.z=h,l.rotation.z=0})}}shakeCamera(t=.15,e=.3){let n=this.camera;if(this._shaking)return;this._shaking=!0;let s=n.position.clone();this.tween(e,r=>{let a=(1-r)*t;n.position.set(s.x+(Math.random()-.5)*a,s.y+(Math.random()-.5)*a*.6,s.z+(Math.random()-.5)*a)},()=>{n.position.copy(s),this._shaking=!1})}flashBus(t,e=16731469,n=.6){let s=this.busVis.get(t);if(!s)return;let r=s.parts.bodyMat,a=r.emissive.getHex(),o=s.g;this.tween(n,l=>{r.emissive.setHex(e),r.emissiveIntensity=Math.sin(l*Math.PI)*.55},()=>{r.emissive.setHex(a),r.emissiveIntensity=0})}shakeBus(t){let e=this.busVis.get(t);if(!e)return;let n=e.g,s=n.position.x;this.tween(.3,r=>{n.position.x=s+Math.sin(r*28)*.07*(1-r)},()=>{n.position.x=s})}setGlow(t,e=16769126){let n=this.glows.get(t);if(e===null){n&&(this.scene.remove(n),this.glows.delete(t));return}let s=this.busVis.get(t);if(!s)return;n||(n=new et(new De(1,1),new Ae({map:pc(),color:e,transparent:!0,blending:$n,depthWrite:!1})),n.rotation.x=-Math.PI/2,n.renderOrder=4,this.scene.add(n),this.glows.set(t,n)),n.material.color.setHex(e);let r=this.state.buses[t],a=Ue[r.dir].horiz;n.userData={w:a?r.len+1:1.9,l:a?1.9:r.len+1},n.position.set(s.g.position.x,.08,s.g.position.z)}clearGlows(){for(let t of[...this.glows.keys()])this.setGlow(t,null)}unlockSlotFx(t,e=!1){let n=this.slotMeshes[t+1];n.material.map=e?this.slotTex.temp:this.slotTex.open,n.material.needsUpdate=!0;let s=dn(t+1);this.fx.ring(s,fe,16773280,.3,2.4,.9),this.fx.ring(s,fe,9240500,.2,1.6,.7),this.fx.burst(s,.3,fe,16769674,28,3,!0,1),this.tween(.5,r=>{n.scale.set(1+Math.sin(r*Math.PI)*.1,1+Math.sin(r*Math.PI)*.04,1)},()=>n.scale.set(1,1,1)),this.sfx("unlock")}animateRecall(t){let e=this.busVis.get(t),n=this.state.buses[t];if(!e)return;let s=e.g,r=this.busCenter(n),a=s.position.clone(),o=s.scale.x;e.parked=!1,this.removeLabel(t),this.tween(.8,l=>{let c=fs.inOut(l);s.position.x=a.x+(r.x-a.x)*c,s.position.z=a.z+(r.z-a.z)*c,s.position.y=Math.sin(l*Math.PI)*1.6,s.scale.setScalar(o+(1-o)*c),s.rotation.y+=tr(s.rotation.y,Ec[n.dir])*Math.min(1,l*1.5)},()=>{s.position.set(r.x,0,r.z),s.rotation.y=Ec[n.dir],s.scale.setScalar(1),s.userData.baseX=r.x,s.userData.baseZ=r.z,e.parts.arrow&&(e.parts.arrow.visible=!0)}),this.fx.ring(a.x,a.z,8246271,.3,1.8,.7)}startCraneToSlot(t,e){let n=this.state.buses[t],s=this.busVis.get(t),r=s.g,a=e==="V"?0:e+1,o=r.position.clone(),l=r.scale.x,c=Pn[n.len]||.75;s.traveling=!0,s.fromBoard=!0,this.fx.ring(o.x,o.z,11897855,.3,1.8,.7),this.sfx("whoosh");let h={x:dn(a),z:fe};this.tween(.95,u=>{let d=fs.inOut(u);r.position.x=o.x+(h.x-o.x)*d,r.position.z=o.z+(h.z-o.z)*d,r.position.y=Math.sin(u*Math.PI)*3.2,r.scale.setScalar(l+(c-l)*d),r.rotation.y+=tr(r.rotation.y,0)*Math.min(1,u*2),Math.random()<.5&&this.fx.stars.emit(r.position.x,r.position.y+.3,r.position.z,0,0,0,13215743,.5,.2,.02,0,0)},()=>{r.position.y=0,s.traveling=!1,this.finishArrive(s)})}dropVip(t){let e=this.makeBusVis(t),n=e.g;n.visible=!0,n.position.set(dn(0),8,fe),n.rotation.y=0,n.scale.setScalar(Pn[t.len]),e.parts.arrow&&(e.parts.arrow.visible=!1),e.traveling=!0,this.fx.ring(dn(0),fe,16766042,.3,2.6,.9),this.tween(.8,s=>{n.position.y=8*(1-fs.out(s)),n.rotation.y=(1-s)*Math.PI*2},()=>{n.position.y=0,n.rotation.y=0,e.traveling=!1,this.finishArrive(e)})}convertFx(t,e){let n=this.busVis.get(t);if(!n)return;let s=n.g,r=this.state.buses[t];this.fx.ring(s.position.x,s.position.z,12946431,.3,2,.7),this.fx.burst(s.position.x,.7,s.position.z,12946431,22,3,!0,.9),this.tween(.5,a=>{let o=1+Math.sin(a*Math.PI)*.22;s.scale.setScalar(o)},()=>s.scale.setScalar(1)),e==="color"&&Tu(s,this.hexOf(r.color)),this.sfx("convert")}rebuildBus(t){let e=this.busVis.get(t);e&&this.busGroup.remove(e.g);let n=this.makeBusVis(this.state.buses[t]);return this.convertFx(t,"rebuild"),n}celebrate(){this.fx.confetti(0,-4,110),this.sfx("win");for(let t=0;t<12;t++){let e=mc(t%7,this.hexOf,t);e.traverse(n=>{n.isMesh&&(n.castShadow=!1)}),e.position.set(-4.4+t*.8,0,us+t%2*.3),e.userData.targetYaw=0,e.scale.setScalar(.01),e.userData.pop=-t*.05,this.passGroup.add(e),this.celebrating.push(e)}for(let t of this.busVis.values())t.bounce=1}bindInput(){let t=this.renderer.domElement,e=a=>{let o=t.getBoundingClientRect();return new st((a.clientX-o.left)/o.width*2-1,-((a.clientY-o.top)/o.height)*2+1)},n=(a,o)=>{this.raycaster.setFromCamera(e(a),this.camera);let l=new an(new C(0,1,0),-o),c=new C;return this.raycaster.ray.intersectPlane(l,c)?c:null};this._groundHit=n;let s=a=>{let o=n(a,.4);if(!o||!this.state)return-1;let l=this.state,c=-1,h=1e9;for(let u of l.buses){if(u.st!=="board")continue;let d=this.busCenter(u),f=Ue[u.dir].horiz,g=(f?u.len:1)/2+.08,y=(f?1:u.len)/2+.08,m=Math.abs(o.x-d.x),p=Math.abs(o.z-d.z);if(m<=g&&p<=y){let _=m/g+p/y;_<h&&(h=_,c=u.id)}}return c};t.addEventListener("pointerdown",a=>{if(this.inputLocked)return;let o=s(a);if(o>=0){this.dragInfo={id:o,start:n(a,.4),moved:0,e0:{x:a.clientX,y:a.clientY},fired:!1},t.setPointerCapture(a.pointerId);return}let l=n(a,.04);if(l&&Math.abs(l.z-fe)<Pa/2){let c=Math.round(l.x/Gu+3.5);c>=0&&c<=He&&Math.abs(l.x-dn(c))<ku/2+.05&&this.onSlotTap?.(c===0?"V":c-1)}}),t.addEventListener("pointermove",a=>{let o=this.dragInfo;if(!o||o.fired)return;let l=n(a,.4);if(!l||!o.start)return;let c=this.state.buses[o.id],h=Ue[c.dir],u=(l.x-o.start.x)*h.x+(l.z-o.start.z)*h.y;o.moved=Math.max(o.moved,Math.hypot(a.clientX-o.e0.x,a.clientY-o.e0.y));let d=this.busVis.get(o.id);if(!d)return;let f=this.freeGap(c);d.dragOff=Math.max(0,Math.min(u,Math.min(.55,f))),u>.55&&(o.fired=!0,d.dragOff=0,this.fireTap(o.id))});let r=()=>{let a=this.dragInfo;if(this.dragInfo=null,!a)return;let o=this.busVis.get(a.id);o&&(o.dragOff=0),!a.fired&&a.moved<14&&this.fireTap(a.id)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",()=>{let a=this.dragInfo;if(this.dragInfo=null,a){let o=this.busVis.get(a.id);o&&(o.dragOff=0)}})}freeGap(t){let e=this.state,n=Ue[t.dir],s=hs(e,t.id),[r,a]=t.dir==="R"?[t.x+t.len-1,t.y]:t.dir==="D"?[t.x,t.y+t.len-1]:[t.x,t.y],o=0;for(;;){if(r+=n.x,a+=n.y,r<0||a<0||r>=e.w||a>=e.h)return 99;if(s.has(r+","+a))return o;o++}}fireTap(t){if(this.tapFilter&&!this.tapFilter(t)){this.onTapRejected?.(t);return}this.onBusTap?.(t)}removeLabel(t){let e=this.labels.get(t);e&&(e.remove(),this.labels.delete(t))}updateLabels(){let t=this.state;if(!t)return;let e={w:this.container.clientWidth,h:this.container.clientHeight};for(let n of this.busVis.values()){let s=t.buses[n.id];if(s.st!=="parked"||!n.parked||n.departing){this.removeLabel(n.id);continue}let r=this.labels.get(n.id);r||(r=document.createElement("div"),r.className="seat-badge",this.labelLayer.appendChild(r),this.labels.set(n.id,r));let a=s.seats-n.vcount;r._v!==a&&(r.textContent=a,r._v=a),r.style.background=s.vip?"linear-gradient(#ffe27a,#e0a020)":"#"+this.hexOf(s.color).toString(16).padStart(6,"0"),r.style.color=s.vip?"#5a3a00":"#fff";let o=new C(n.g.position.x,.05,n.g.position.z+1.75).project(this.camera);r.style.transform=`translate(${(o.x*.5+.5)*e.w}px, ${(-o.y*.5+.5)*e.h}px) translate(-50%,-50%)`}}project(t,e,n){let s=new C(t,e,n).project(this.camera);return{x:(s.x*.5+.5)*this.container.clientWidth,y:(-s.y*.5+.5)*this.container.clientHeight}}busScreenPos(t){let e=this.busVis.get(t);return e?this.project(e.g.position.x,.6,e.g.position.z):null}slotScreenPos(t){return this.project(dn(t+1),.1,fe)}vipSlotScreenPos(){return this.project(dn(0),.1,fe)}queueScreenPos(){return this.project(0,.5,Ca-1.5)}update(t){t=Math.min(t,.05);let e=this.state;for(let n=this.tweens.length-1;n>=0;n--){let s=this.tweens[n];s.t+=t;let r=Math.min(1,s.t/s.dur);s.fn(r),r>=1&&(this.tweens.splice(n,1),s.done?.())}if(e){for(let n of this.busVis.values())if(n.traveling&&n.travel)this.updateTravel(n,t);else if(n.departing)this.updateDeparture(n,t);else if(n.parked){if(n.bounce>0){n.bounce=Math.max(0,n.bounce-t*3.2);let s=n.bounce,r=Pn[e.buses[n.id]?.len||2]||.75;n.g.scale.set(r*(1+Math.sin(s*14)*.03*s),r*(1-Math.sin(s*14)*.04*s),r*(1+Math.sin(s*14)*.03*s))}n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2,Math.random()<.08&&this.fx.sparkleAround(n.g.position.x,n.g.position.z,.8,2,16769674,1))}else if(e.buses[n.id].st==="board"){let s=e.buses[n.id],r=Ue[s.dir],a=n.g.userData.baseX,o=n.g.userData.baseZ;a!==void 0&&!this.tweens.length?(n.g.position.x+=(a+r.x*n.dragOff-n.g.position.x)*Math.min(1,t*18),n.g.position.z+=(o+r.y*n.dragOff-n.g.position.z)*Math.min(1,t*18)):a!==void 0&&n.dragOff&&(n.g.position.x=a+r.x*n.dragOff,n.g.position.z=o+r.y*n.dragOff),n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2)}for(let[n,s]of this.glows){let r=this.busVis.get(n);if(!r)continue;let a=1+Math.sin(this.time*5)*.12;s.position.x=r.g.position.x,s.position.z=r.g.position.z,s.scale.set(s.userData.w*a,s.userData.l*a,1),s.material.opacity=.75+Math.sin(this.time*5)*.25}this.updatePassengers(t);for(let n of this.celebrating){let s=n.userData;s.pop!==void 0&&(s.pop+=t*3,s.pop>0&&n.scale.setScalar(Math.min(1,fs.back(Math.min(1,s.pop)))))}this.director(t),this.updateLabels()}this.fx.update(t),this.noRender||this.renderer.render(this.scene,this.camera)}dispose(){this.ro.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove(),this.labelLayer.remove()}};var Ac=[{stages:[{w:4,h:4,buses:[{c:1,l:2,d:"L",x:0,y:0},{c:0,l:3,d:"U",x:1,y:1},{c:3,l:2,d:"R",x:2,y:3}],queue:[1,1,1,1,0,0,0,0,0,0,3,3,3,3],par:[0,1,2],wr:1,solution:[0,1,2]}],slotsBase:4,n:1,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:1,l:2,d:"D",x:0,y:0},{v:1,l:3,d:"R",x:2,y:1},{c:0,l:3,d:"U",x:1,y:0},{c:1,l:3,d:"L",x:1,y:4},{c:0,l:2,d:"L",x:3,y:0},{c:2,l:2,d:"L",x:0,y:3},{c:2,l:2,d:"D",x:2,y:2}],queue:[1,1,1,1,1,1,2,2,2,2,2,2,2,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0],par:[3,6,5,0,2,4],wr:.744,solution:[3,5,6,0,2,4],slots:3}],slotsBase:3,n:2,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"R",x:1,y:3},{c:2,l:3,d:"R",x:1,y:4},{c:0,l:2,d:"D",x:4,y:2},{c:0,l:2,d:"D",x:1,y:1},{c:1,l:3,d:"U",x:0,y:2}],queue:[1,2,2,2,1,1,2,1,1,2,2,1,0,0,0,0,2,0,0,0,2,2,2,0,2,2],par:[4,1,2,0,3],wr:.888,solution:[4,1,2,0,3],slots:4}],slotsBase:4,n:3,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:0,y:4},{c:1,l:2,d:"U",x:2,y:2},{c:2,l:3,d:"U",x:0,y:1},{c:0,l:2,d:"L",x:0,y:0},{c:2,l:3,d:"D",x:1,y:1},{c:0,l:2,d:"U",x:2,y:0}],queue:[0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,0,2,2,2,0,2],par:[5,1,0,4,3,2],wr:.66,solution:[3,0,2,5,1,4],slots:4}],slotsBase:4,n:4,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:1,y:0},{c:0,l:2,d:"D",x:0,y:3},{c:2,l:3,d:"D",x:4,y:0},{c:0,l:2,d:"L",x:3,y:4},{c:0,l:2,d:"L",x:1,y:4},{c:2,l:2,d:"U",x:3,y:1},{c:1,l:2,d:"R",x:3,y:3}],queue:[2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,2,2,2,2,2,2],par:[0,5,1,4,3,6,2],wr:.708,solution:[0,5,1,4,3,6,2],slots:4}],slotsBase:4,n:5,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:2,l:2,d:"L",x:2,y:5},{c:3,l:3,d:"D",x:5,y:2},{c:0,l:3,d:"D",x:3,y:0},{c:2,l:3,d:"U",x:0,y:1},{c:1,l:4,d:"R",x:1,y:3},{c:1,l:3,d:"L",x:0,y:0},{c:0,l:2,d:"L",x:0,y:4},{c:3,l:3,d:"L",x:2,y:4}],queue:[1,1,1,2,2,2,2,2,1,1,1,2,3,3,3,3,3,3,2,0,0,0,2,0,2,2,1,3,1,1,1,1,1,3,3,3,3,1,3,1,0,0,0,0,0,0],par:[5,3,1,0,6,4,7,2],wr:.512,solution:[5,3,1,0,6,4,7,2],slots:4}],slotsBase:4,n:6,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"L",x:3,y:0},{c:2,l:3,d:"U",x:3,y:2},{c:2,l:2,d:"U",x:0,y:0},{c:0,l:4,d:"U",x:0,y:2},{c:1,l:4,d:"D",x:2,y:1},{c:1,l:1,d:"L",x:4,y:4},{c:0,l:4,d:"R",x:1,y:5},{c:1,l:2,d:"D",x:1,y:3}],queue:[2,2,2,2,3,3,3,3,3,3,2,2,2,2,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],par:[2,0,1,3,6,4,7,5],wr:.524,solution:[2,0,1,3,6,4,7,5],slots:4}],slotsBase:4,n:7,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:0,l:2,d:"L",x:2,y:3},{c:0,l:2,d:"D",x:3,y:0},{c:0,l:3,d:"R",x:2,y:4},{c:1,l:3,d:"D",x:5,y:3},{c:1,l:3,d:"D",x:0,y:1},{c:2,l:2,d:"R",x:2,y:5},{c:3,l:3,d:"L",x:2,y:2},{c:3,l:3,d:"U",x:1,y:2},{c:2,l:2,d:"D",x:0,y:4}],queue:[1,1,1,1,1,1,0,0,2,2,2,0,0,0,0,2,2,2,1,1,2,1,2,1,1,1,3,3,3,3,0,0,0,3,0,3,3,3,3,3,3,3,0,0,0,0],par:[3,2,5,8,4,7,0,6,1],wr:.576,solution:[3,2,5,8,4,7,0,6,1],slots:4}],slotsBase:4,n:8,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:1,l:3,d:"D",x:1,y:1},{c:0,l:3,d:"R",x:3,y:0},{c:2,l:2,d:"R",x:4,y:5},{c:1,l:2,d:"R",x:2,y:2},{c:3,l:1,d:"D",x:4,y:4},{c:2,l:3,d:"L",x:2,y:1},{c:1,l:2,d:"U",x:5,y:2},{c:3,l:3,d:"U",x:3,y:3},{c:1,l:4,d:"D",x:0,y:0},{c:0,l:2,d:"D",x:4,y:2}],queue:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,2,2,2,2,2,2,2,2,2,2,3,3,0,0,0,0,1,1,1,1,3,3,3,3,3,3],par:[8,0,1,6,2,5,4,9,3,7],wr:.532,solution:[8,0,1,6,5,2,4,9,3,7],slots:4}],slotsBase:4,n:9,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"L",x:2,y:5},{c:0,l:1,d:"R",x:0,y:2},{c:3,l:2,d:"R",x:0,y:0},{c:2,l:2,d:"R",x:3,y:4},{c:0,l:1,d:"U",x:3,y:0},{c:2,l:3,d:"U",x:5,y:0},{c:1,l:2,d:"D",x:1,y:4},{c:2,l:3,d:"U",x:0,y:3},{c:0,l:2,d:"U",x:4,y:0},{c:1,l:2,d:"U",x:3,y:1},{c:2,l:3,d:"R",x:0,y:1}],queue:[2,2,0,2,2,0,1,1,1,1,0,0,0,0,2,2,2,2,0,2,0,2,3,2,3,3,3,2,2,2,2,2,1,1,2,2,1,2,2,2,1,2,3,3,3,3,3,3],par:[3,4,9,8,5,1,2,10,6,7,0],wr:.54,solution:[5,8,6,4,3,2,9,1,10,7,0],slots:4}],slotsBase:4,n:10,difficulty:"normal"},{stages:[{w:6,h:7,buses:[{c:1,l:3,d:"L",x:3,y:6},{c:3,l:1,d:"R",x:2,y:3},{c:3,l:3,d:"D",x:4,y:3},{c:4,l:3,d:"L",x:0,y:6},{c:3,l:4,d:"D",x:5,y:0},{c:1,l:4,d:"L",x:1,y:2},{c:0,l:3,d:"D",x:0,y:0},{c:4,l:2,d:"R",x:1,y:0},{c:2,l:2,d:"L",x:1,y:1},{c:2,l:2,d:"U",x:2,y:4},{c:1,l:2,d:"L",x:0,y:4},{c:4,l:2,d:"D",x:3,y:3}],queue:[1,4,1,1,1,4,4,4,4,4,1,1,1,1,1,1,3,3,3,3,3,4,4,4,3,3,3,3,3,4,3,3,3,3,4,0,4,4,0,4,0,0,0,0,1,1,1,1,1,1,1,3,2,1,3,2,2,2,2,2,2,2],par:[10,3,0,4,2,11,7,6,5,1,8,9],wr:.352,solution:[10,3,0,4,7,2,11,6,5,1,8,9],slots:4}],slotsBase:4,n:11,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:3,l:4,d:"R",x:0,y:4},{c:1,l:2,d:"D",x:0,y:2},{c:2,l:2,d:"D",x:4,y:4},{c:4,l:3,d:"U",x:1,y:1},{c:0,l:2,d:"R",x:4,y:1},{c:2,l:2,d:"U",x:5,y:4},{c:1,l:1,d:"R",x:4,y:6},{c:4,l:3,d:"R",x:3,y:3},{c:4,l:3,d:"R",x:3,y:2},{c:1,l:1,d:"D",x:5,y:6},{c:3,l:3,d:"R",x:3,y:0},{c:1,l:3,d:"R",x:0,y:5},{c:2,l:3,d:"R",x:0,y:6}],queue:[4,1,4,4,4,4,4,4,1,4,4,4,4,4,0,0,0,0,3,3,3,1,3,3,3,1,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,3,1,1,1,3,3,3,3,1,1,1,3,3,3],par:[3,9,8,4,10,6,7,12,2,5,11,0,1],wr:.384,solution:[3,9,7,4,10,6,8,12,2,5,11,0,1],slots:4}],slotsBase:4,n:12,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:0,l:4,d:"D",x:3,y:1},{c:2,l:1,d:"L",x:1,y:2},{c:2,l:2,d:"R",x:0,y:0},{c:4,l:4,d:"L",x:1,y:6},{c:1,l:2,d:"L",x:2,y:5},{c:4,l:2,d:"U",x:2,y:0},{c:1,l:2,d:"U",x:5,y:0},{c:2,l:3,d:"U",x:5,y:4},{c:3,l:1,d:"D",x:2,y:3},{c:1,l:1,d:"U",x:3,y:0},{c:3,l:2,d:"D",x:0,y:5},{c:3,l:2,d:"L",x:4,y:3},{c:1,l:3,d:"U",x:1,y:3},{c:1,l:1,d:"L",x:1,y:1}],queue:[4,4,1,4,4,1,1,1,1,2,1,1,1,2,2,3,1,1,1,1,2,3,3,1,1,2,2,3,4,4,4,4,4,1,4,4,1,1,1,4,0,0,0,3,3,0,0,3,3,0,0,3,0,3,2,2,2,2,2,2],par:[5,13,9,6,1,2,10,12,3,4,0,8,11,7],wr:.456,solution:[5,6,9,2,13,10,1,12,3,4,0,8,11,7],slots:4}],slotsBase:4,n:13,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:4,l:2,d:"R",x:2,y:0},{c:0,l:2,d:"D",x:2,y:3},{c:3,l:3,d:"D",x:0,y:3},{c:3,l:3,d:"D",x:5,y:0},{c:0,l:2,d:"L",x:0,y:0},{c:3,l:4,d:"D",x:1,y:3},{c:4,l:3,d:"L",x:3,y:3},{c:3,l:4,d:"L",x:1,y:2},{c:4,l:2,d:"U",x:0,y:1},{c:0,l:2,d:"U",x:4,y:0},{c:0,l:3,d:"D",x:5,y:4},{c:1,l:3,d:"U",x:3,y:4},{c:4,l:2,d:"D",x:4,y:4},{c:2,l:2,d:"D",x:2,y:5},{c:3,l:2,d:"R",x:2,y:1}],queue:[0,4,0,0,4,4,0,4,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,3,3,3,3,0,0,0,4,3,3,3,3,0,4,4,4,3,3,4,4,4,4,3,3,3,3,3,3,3,3,3,4,4,3,3,3,0,0,3,0,3,0,3,3,4,4,4,4,1,1,1,1,1,1],par:[4,12,10,13,2,5,1,8,7,6,3,9,14,0,11],wr:.448,solution:[10,12,4,13,5,2,1,6,3,8,7,9,14,0,11],slots:4}],slotsBase:4,n:14,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:2,l:3,d:"L",x:3,y:0},{c:1,l:2,d:"U",x:5,y:2},{c:0,l:3,d:"U",x:2,y:4},{c:0,l:3,d:"U",x:0,y:0},{c:4,l:2,d:"L",x:0,y:6},{c:0,l:2,d:"R",x:4,y:4},{c:2,l:3,d:"D",x:1,y:0},{c:3,l:3,d:"R",x:3,y:6},{c:2,l:2,d:"U",x:4,y:2},{c:4,l:1,d:"D",x:3,y:3},{c:1,l:2,d:"D",x:3,y:4},{c:3,l:2,d:"L",x:4,y:1},{c:4,l:3,d:"D",x:1,y:3},{c:1,l:2,d:"R",x:2,y:2},{c:0,l:2,d:"R",x:4,y:5},{c:2,l:1,d:"R",x:2,y:3}],queue:[0,0,0,0,0,0,0,0,3,3,3,1,3,3,1,1,3,1,4,4,4,4,4,0,4,4,4,4,0,0,0,0,4,0,2,2,3,3,2,2,2,2,2,2,2,3,3,2,2,2,2,2,4,2,2,4,1,1,1,1,1,1,2,0,0,0,0,1,2,0,1,0],par:[5,14,7,10,4,12,3,6,11,0,8,9,1,13,15,2],wr:.384,solution:[3,5,7,10,4,12,14,6,11,0,8,9,1,13,15,2],slots:4}],slotsBase:4,n:15,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:4,l:4,d:"U",x:2,y:3},{c:4,l:3,d:"D",x:6,y:1},{v:1,l:3,d:"R",x:4,y:0},{c:1,l:4,d:"U",x:0,y:2},{c:0,l:3,d:"L",x:4,y:4},{c:3,l:1,d:"L",x:0,y:1},{c:0,l:2,d:"U",x:3,y:2},{c:2,l:2,d:"L",x:1,y:1},{c:3,l:2,d:"U",x:3,y:0},{c:2,l:2,d:"L",x:0,y:6},{c:4,l:4,d:"R",x:3,y:6},{c:2,l:1,d:"U",x:2,y:0},{c:0,l:4,d:"L",x:3,y:5},{c:1,l:3,d:"U",x:1,y:3},{c:2,l:2,d:"L",x:0,y:0}],queue:[2,3,2,3,2,2,2,2,4,4,4,4,3,3,0,0,0,4,4,3,3,0,4,4,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,0,0,0,0,0,0,4,4,4,0,0,0,0,0,4,4,0,0,0,4,4,4,4,4,4],par:[11,5,9,10,8,6,14,7,3,13,0,4,12,1],wr:.296,solution:[9,8,14,10,6,5,7,11,3,13,0,12,4,1],slots:4}],slotsBase:4,n:16,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{v:1,l:3,d:"U",x:5,y:0},{c:4,l:4,d:"U",x:0,y:3},{c:3,l:1,d:"U",x:3,y:1},{c:4,l:3,d:"L",x:0,y:1},{c:0,l:3,d:"L",x:3,y:4},{c:4,l:2,d:"R",x:4,y:5},{c:3,l:3,d:"L",x:0,y:0},{c:3,l:2,d:"U",x:2,y:3},{c:0,l:3,d:"L",x:3,y:6},{c:2,l:2,d:"L",x:2,y:2},{c:2,l:3,d:"U",x:1,y:2},{c:1,l:2,d:"U",x:6,y:4},{c:2,l:2,d:"R",x:5,y:3},{c:4,l:2,d:"L",x:1,y:6},{c:4,l:4,d:"D",x:4,y:0},{c:2,l:3,d:"U",x:6,y:0}],queue:[3,3,2,2,2,2,2,2,2,4,4,4,4,2,2,4,2,4,3,2,3,3,3,3,3,2,2,2,2,2,2,2,4,4,4,4,4,2,2,4,4,4,4,3,1,4,4,4,3,3,1,1,3,1,0,0,0,4,4,4,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,4],par:[2,15,12,3,6,10,9,1,13,7,11,8,5,4,14],wr:.336,solution:[6,15,12,3,10,2,9,1,13,7,11,4,5,8,14],slots:4}],slotsBase:4,n:17,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:3,l:4,d:"D",x:3,y:0},{c:0,l:3,d:"R",x:4,y:6},{c:5,l:3,d:"D",x:6,y:3},{c:2,l:4,d:"D",x:5,y:2},{c:4,l:3,d:"L",x:4,y:0},{c:0,l:2,d:"R",x:2,y:5},{c:3,l:3,d:"U",x:2,y:0},{c:0,l:2,d:"U",x:0,y:0},{c:1,l:3,d:"L",x:2,y:4},{c:2,l:2,d:"U",x:1,y:0},{c:2,l:1,d:"R",x:6,y:2},{c:5,l:4,d:"U",x:0,y:3},{c:5,l:3,d:"L",x:1,y:6},{c:2,l:1,d:"L",x:0,y:2},{v:1,l:3,d:"R",x:4,y:1},{c:4,l:4,d:"U",x:1,y:2}],queue:[2,2,2,2,2,0,0,0,2,0,2,2,0,0,0,0,0,0,5,2,4,4,4,4,5,5,5,2,2,4,4,5,5,2,2,4,4,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,1,1,1,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4],par:[13,10,9,1,7,2,3,15,11,12,5,8,6,0,4],wr:.192,solution:[9,10,1,3,7,2,15,13,11,12,5,8,0,6,4],slots:4}],slotsBase:4,n:18,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:2,l:2,d:"D",x:1,y:2},{c:3,l:3,d:"R",x:2,y:0},{c:2,l:3,d:"R",x:0,y:5},{c:1,l:1,d:"D",x:4,y:4},{c:5,l:3,d:"R",x:0,y:4},{c:5,l:3,d:"L",x:0,y:6},{c:1,l:2,d:"U",x:1,y:0},{c:0,l:3,d:"D",x:5,y:4},{c:0,l:2,d:"R",x:3,y:5},{c:4,l:1,d:"D",x:3,y:6},{c:4,l:2,d:"U",x:5,y:0},{c:0,l:1,d:"R",x:6,y:0},{c:0,l:2,d:"L",x:5,y:2},{c:1,l:2,d:"U",x:4,y:1},{c:5,l:4,d:"D",x:0,y:0},{c:3,l:3,d:"D",x:6,y:4},{c:0,l:3,d:"U",x:2,y:1},{v:1,l:3,d:"R",x:4,y:3}],queue:[4,0,1,1,4,0,1,1,4,4,4,4,3,3,0,0,0,0,5,5,5,5,3,3,0,5,3,0,5,3,3,3,3,3,3,3,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,5,5,5,5,5,2,2,2,2,5,2,2,5,5,5,5,2,5,5,5,2,2,5,2,0,0,0,0],par:[9,11,6,10,1,16,5,15,7,13,8,3,4,2,14,0,12],wr:.16,solution:[10,7,6,9,15,5,8,2,11,1,16,13,3,4,14,0,12],slots:4}],slotsBase:4,n:19,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:1,l:2,d:"U",x:0,y:5},{c:0,l:4,d:"R",x:1,y:0},{c:5,l:1,d:"D",x:2,y:6},{c:5,l:3,d:"L",x:4,y:3},{c:5,l:2,d:"D",x:3,y:3},{c:3,l:1,d:"D",x:6,y:5},{c:5,l:1,d:"L",x:0,y:4},{c:2,l:2,d:"U",x:2,y:2},{c:2,l:4,d:"U",x:1,y:3},{c:3,l:1,d:"R",x:5,y:5},{c:2,l:2,d:"U",x:6,y:0},{c:2,l:2,d:"R",x:5,y:2},{c:1,l:3,d:"R",x:1,y:1},{c:5,l:4,d:"L",x:3,y:6},{c:3,l:3,d:"L",x:2,y:5},{c:4,l:2,d:"U",x:5,y:0},{v:1,l:3,d:"R",x:4,y:4},{c:3,l:4,d:"U",x:0,y:0}],queue:[5,5,4,5,5,4,4,4,2,2,2,1,1,2,2,1,2,2,1,2,1,1,0,0,0,0,2,2,2,0,0,0,2,0,3,3,3,3,3,3,2,2,2,2,2,2,1,3,3,2,1,2,1,1,5,5,5,5,5,5,5,5,3,3,3,3,3,3,5,5,5,3,3,5,5,5,5,3,5,5,3,5],par:[2,6,15,11,10,12,1,7,17,8,0,13,5,14,4,3,9],wr:.212,solution:[2,15,6,10,12,11,1,8,17,7,0,13,14,4,5,3,9],slots:4}],slotsBase:4,n:20,difficulty:"hard"},{stages:[{w:7,h:8,buses:[{c:5,l:1,d:"D",x:3,y:2},{c:3,l:2,d:"L",x:3,y:7},{v:1,l:3,d:"R",x:4,y:1},{c:3,l:3,d:"R",x:1,y:5},{c:2,l:2,d:"L",x:0,y:6},{c:5,l:4,d:"D",x:5,y:3},{c:3,l:2,d:"R",x:2,y:3},{c:4,l:3,d:"R",x:1,y:4},{c:0,l:3,d:"U",x:0,y:0},{c:4,l:3,d:"L",x:4,y:0},{c:0,l:3,d:"D",x:6,y:3},{c:5,l:4,d:"D",x:1,y:0},{c:4,l:2,d:"L",x:4,y:2},{c:3,l:2,d:"L",x:2,y:6},{c:1,l:2,d:"D",x:3,y:0},{c:2,l:2,d:"L",x:1,y:7},{c:1,l:2,d:"R",x:5,y:7}],queue:[2,2,1,2,1,1,1,2,0,0,5,5,5,5,5,5,5,3,3,3,0,0,0,0,5,3,2,2,3,3,3,3,2,3,3,3,3,2,3,3,4,4,4,4,3,3,3,3,4,4,5,5,0,0,5,5,5,5,1,1,1,0,0,0,0,5,1,5,5,5,4,4,4,4,4,4,4,4,4,4],par:[15,16,10,5,6,4,13,1,3,7,0,8,11,14,12,9],wr:.256,solution:[4,16,8,5,13,15,1,10,3,7,6,11,0,14,9,12],slots:4}],slotsBase:4,n:21,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"D",x:6,y:0},{c:3,l:2,d:"U",x:4,y:3},{c:2,l:3,d:"R",x:3,y:0},{c:4,l:3,d:"R",x:2,y:1},{c:0,l:4,d:"L",x:2,y:2},{c:5,l:4,d:"R",x:0,y:6},{c:5,l:1,d:"U",x:5,y:1},{c:1,l:2,d:"R",x:3,y:7},{c:4,l:2,d:"L",x:1,y:0},{c:1,l:3,d:"D",x:2,y:3},{c:0,l:3,d:"R",x:0,y:7},{c:2,l:1,d:"L",x:5,y:3},{c:2,l:3,d:"D",x:0,y:1},{c:5,l:3,d:"R",x:4,y:6},{c:1,l:3,d:"U",x:1,y:1},{c:2,l:3,d:"U",x:3,y:3},{c:3,l:2,d:"L",x:0,y:4}],queue:[1,1,1,1,0,0,0,0,0,3,3,0,3,3,5,5,5,4,5,5,5,4,4,4,5,5,5,5,5,5,1,1,1,1,5,1,5,1,4,4,4,4,4,4,1,1,1,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,5,5,4,4,4,4,0,0,0,3,3,3,4,0,0,0,3,4,0,0,2,2,2,2,2,2,2,2],par:[7,10,16,13,8,5,9,0,14,12,2,6,3,4,1,15,11],wr:.192,solution:[7,10,16,13,0,5,9,8,14,2,12,6,3,4,1,15,11],slots:4}],slotsBase:4,moveLimit:20,n:22,difficulty:"super"},{stages:[{w:7,h:8,buses:[{v:1,l:3,d:"D",x:6,y:5},{c:3,l:4,d:"R",x:1,y:1},{c:0,l:3,d:"L",x:0,y:0},{c:1,l:3,d:"U",x:5,y:1},{c:0,l:4,d:"R",x:0,y:2},{c:3,l:1,d:"D",x:5,y:7},{c:2,l:4,d:"L",x:2,y:6},{c:5,l:2,d:"R",x:5,y:4},{c:5,l:3,d:"U",x:6,y:1},{c:3,l:3,d:"R",x:1,y:4},{c:5,l:1,d:"L",x:0,y:1},{c:1,l:4,d:"U",x:0,y:4},{c:4,l:2,d:"L",x:1,y:3},{c:3,l:3,d:"L",x:4,y:0},{c:3,l:1,d:"D",x:1,y:7},{c:5,l:1,d:"D",x:3,y:7},{c:3,l:1,d:"D",x:4,y:7},{c:0,l:2,d:"U",x:1,y:5},{c:2,l:1,d:"L",x:0,y:3}],queue:[3,3,3,3,2,3,2,3,5,5,5,5,5,5,3,3,3,3,3,3,0,0,0,3,3,3,3,4,4,0,0,0,3,4,3,4,1,1,1,1,1,1,5,5,5,5,5,5,3,3,3,3,3,3,3,3,5,0,0,0,0,1,1,1,1,1,1,1,5,0,1,0,0,0,0,0,2,0,0,2,2,2,2,2,2,2],par:[16,14,18,5,15,7,9,2,13,12,3,8,1,10,4,11,17,6],wr:.128,solution:[5,14,18,16,7,10,9,2,13,12,3,8,1,15,4,11,17,6],slots:4}],slotsBase:4,n:23,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"U",x:4,y:3},{c:3,l:4,d:"D",x:2,y:2},{c:3,l:2,d:"R",x:5,y:3},{c:2,l:3,d:"R",x:0,y:6},{c:0,l:3,d:"L",x:1,y:0},{c:5,l:2,d:"U",x:6,y:4},{c:4,l:2,d:"U",x:0,y:0},{c:4,l:1,d:"D",x:0,y:7},{c:1,l:2,d:"U",x:5,y:6},{c:0,l:4,d:"D",x:1,y:1},{c:1,l:1,d:"U",x:5,y:1},{c:2,l:3,d:"R",x:2,y:1},{c:5,l:4,d:"U",x:0,y:2},{c:1,l:2,d:"L",x:3,y:2},{c:3,l:2,d:"R",x:4,y:0},{c:0,l:2,d:"U",x:6,y:6},{c:5,l:4,d:"R",x:1,y:7},{c:1,l:3,d:"U",x:6,y:0}],queue:[4,4,4,4,0,4,4,0,0,0,0,0,3,3,3,3,5,5,5,5,1,5,5,5,1,1,1,1,1,5,5,5,5,5,3,3,1,3,1,3,2,2,0,1,1,1,2,0,1,2,0,0,2,2,5,5,5,5,5,5,5,2,5,2,2,2,2,2,0,0,0,0,0,0,3,3,1,1,0,0,3,3,3,3,3,1,1,3,4,4,4,4,4,4],par:[7,6,4,2,12,17,5,14,10,11,15,8,16,3,9,1,13,0],wr:.252,solution:[6,4,7,2,12,17,5,14,10,11,15,8,16,3,9,1,13,0],slots:4}],slotsBase:4,n:24,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:5,l:2,d:"R",x:0,y:6},{c:0,l:3,d:"R",x:2,y:6},{c:1,l:3,d:"D",x:1,y:1},{c:4,l:1,d:"D",x:5,y:7},{c:1,l:3,d:"U",x:0,y:0},{c:3,l:4,d:"L",x:2,y:1},{c:2,l:3,d:"D",x:5,y:4},{c:3,l:4,d:"D",x:3,y:2},{c:0,l:3,d:"U",x:2,y:3},{c:5,l:1,d:"D",x:4,y:7},{c:4,l:1,d:"U",x:1,y:0},{c:1,l:4,d:"L",x:0,y:7},{c:4,l:3,d:"R",x:4,y:0},{c:3,l:2,d:"D",x:0,y:3},{c:1,l:2,d:"D",x:6,y:5},{c:2,l:3,d:"L",x:4,y:3},{c:3,l:1,d:"R",x:6,y:7},{c:0,l:1,d:"L",x:1,y:5},{c:4,l:1,d:"L",x:0,y:5},{v:1,l:3,d:"R",x:4,y:2},{c:3,l:2,d:"L",x:2,y:0}],queue:[5,4,5,4,4,4,3,4,4,3,2,2,4,4,1,1,1,2,2,4,1,2,4,2,4,4,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,5,0,5,0,0,0,0,5,5,3,3,3,3,3,3,3,3,1,1,3,3,3,3,0,0,0,1,1,1,1,3,3,3,3,0,0,0,3,3,3,3,2,2,2,2,2,3,3,2,3,3],par:[9,3,18,10,16,6,12,14,11,17,4,1,0,13,20,2,5,8,7,15],wr:.044,solution:[9,12,16,11,4,3,6,10,18,17,14,1,0,7,2,5,20,8,13,15],slots:4}],slotsBase:4,moveLimit:23,n:25,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:4,l:3,d:"R",x:1,y:5},{c:4,l:4,d:"D",x:1,y:0},{c:4,l:4,d:"U",x:5,y:1},{c:2,l:1,d:"D",x:1,y:4},{c:0,l:4,d:"U",x:3,y:0},{c:3,l:2,d:"U",x:4,y:0},{c:1,l:3,d:"D",x:2,y:0},{c:1,l:2,d:"L",x:5,y:0},{c:3,l:3,d:"L",x:0,y:6}],queue:[3,3,4,4,4,4,4,3,3,3,4,3,2,4,2,4,4,4,4,4,4,4,1,1,1,1,1,0,0,0,1,0,0,0,0,0,3,3,1,1,1,3,1,3,4,4,4,4,4,4,4,4],par:[8,0,3,1,6,4,5,7,2],wr:.276,solution:[8,0,3,1,6,4,5,7,2],slots:4},{w:7,h:7,buses:[{c:2,l:2,d:"D",x:6,y:5},{c:1,l:2,d:"R",x:3,y:6},{c:4,l:1,d:"R",x:5,y:2},{c:3,l:3,d:"R",x:0,y:6},{c:0,l:2,d:"L",x:0,y:5},{c:1,l:3,d:"R",x:3,y:1},{c:4,l:2,d:"R",x:4,y:3},{c:3,l:2,d:"R",x:5,y:0},{c:5,l:3,d:"U",x:1,y:2},{c:5,l:3,d:"U",x:2,y:3},{v:1,l:3,d:"U",x:0,y:0},{c:1,l:2,d:"D",x:0,y:3},{c:4,l:3,d:"U",x:5,y:4}],queue:[5,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,4,3,3,3,4,4,3,4,4,4,2,2,4,4,4,4,2,4,4,2,1,1,0,0,3,3,3,3,1,0,0,3,1,3,1,1,1,1],par:[9,8,5,2,7,6,0,12,1,4,3,11],wr:.212,solution:[8,9,5,6,7,2,0,12,1,4,3,11],slots:4}],slotsBase:4,timeLimit:160,n:26,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:3,l:4,d:"R",x:3,y:0},{c:3,l:2,d:"U",x:6,y:4},{c:1,l:3,d:"U",x:2,y:1},{c:2,l:1,d:"L",x:5,y:3},{c:1,l:2,d:"D",x:0,y:3},{c:3,l:3,d:"D",x:1,y:3},{c:2,l:4,d:"R",x:3,y:2},{c:0,l:2,d:"R",x:0,y:6},{c:4,l:1,d:"U",x:6,y:3},{c:4,l:2,d:"R",x:5,y:1}],queue:[0,0,3,0,0,3,3,3,3,3,1,1,1,1,1,1,1,2,1,1,2,1,3,3,3,3,3,4,2,2,2,3,4,2,2,2,2,2,3,3,4,4,4,4,3,3,3,3],par:[7,5,4,2,3,0,9,6,8,1],wr:.252,solution:[7,0,2,4,6,5,9,3,8,1],slots:4},{w:7,h:7,buses:[{v:1,l:3,d:"D",x:3,y:4},{c:1,l:2,d:"R",x:3,y:2},{c:0,l:1,d:"R",x:4,y:1},{c:5,l:2,d:"R",x:4,y:4},{c:3,l:3,d:"U",x:6,y:1},{c:3,l:2,d:"L",x:1,y:6},{c:2,l:3,d:"D",x:6,y:4},{c:0,l:3,d:"L",x:0,y:0},{c:5,l:2,d:"D",x:5,y:2},{c:2,l:2,d:"U",x:4,y:5},{c:2,l:3,d:"D",x:2,y:3},{c:2,l:2,d:"L",x:3,y:0},{c:3,l:3,d:"L",x:1,y:1},{c:4,l:2,d:"R",x:3,y:3}],queue:[2,2,2,2,2,2,3,3,3,3,2,2,2,2,2,2,3,3,3,3,3,0,0,0,0,0,3,0,2,2,5,2,5,5,5,2,3,5,5,5,3,3,5,3,3,3,1,4,4,4,0,1,1,4,0,1,2,2,2,2],par:[6,5,10,12,7,11,3,4,8,1,13,2,9],wr:.216,solution:[6,4,7,11,5,10,3,12,8,1,13,2,9],slots:4}],slotsBase:4,timeLimit:169,n:27,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:3,l:1,d:"D",x:0,y:3},{c:2,l:1,d:"D",x:5,y:2},{c:0,l:3,d:"U",x:3,y:4},{c:4,l:3,d:"R",x:4,y:4},{c:1,l:4,d:"L",x:1,y:3},{c:2,l:4,d:"R",x:2,y:1},{c:4,l:2,d:"D",x:0,y:4},{c:0,l:3,d:"U",x:6,y:1},{c:0,l:2,d:"R",x:3,y:0},{c:4,l:2,d:"R",x:3,y:2},{c:1,l:2,d:"R",x:5,y:0}],queue:[4,4,4,4,4,4,1,1,4,0,0,1,1,4,0,4,4,0,3,0,0,0,0,0,2,3,0,2,2,2,2,2,2,2,2,2,4,1,1,1,1,1,1,0,0,0,4,4,1,0,0,0,4,1],par:[3,10,6,8,0,7,1,5,9,4,2],wr:.288,solution:[3,10,6,7,0,8,5,1,9,4,2],slots:4},{w:7,h:7,buses:[{c:1,l:2,d:"U",x:4,y:5},{c:5,l:3,d:"U",x:0,y:1},{c:5,l:1,d:"U",x:0,y:0},{c:4,l:1,d:"D",x:0,y:6},{c:3,l:4,d:"L",x:2,y:1},{c:4,l:3,d:"L",x:1,y:6},{c:3,l:3,d:"U",x:6,y:0},{c:2,l:3,d:"R",x:1,y:5},{c:2,l:1,d:"U",x:5,y:0},{c:2,l:3,d:"U",x:6,y:3},{c:0,l:4,d:"U",x:5,y:3},{c:2,l:4,d:"L",x:2,y:2},{c:3,l:4,d:"L",x:1,y:0},{c:2,l:3,d:"U",x:1,y:1},{v:1,l:3,d:"L",x:0,y:4}],queue:[2,2,4,4,4,4,4,4,3,3,3,3,2,4,3,3,2,4,2,2,2,2,5,3,3,3,3,3,3,5,3,3,5,5,5,5,5,5,2,2,2,2,2,2,3,3,3,3,3,3,3,3,2,0,0,1,1,2,2,2,2,0,0,0,0,0,1,1,2,2,0,2,2,2,2,2,2,2],par:[8,3,5,6,9,2,12,1,13,4,11,10,0,7],wr:.192,solution:[8,3,5,6,9,2,12,1,13,4,11,10,0,7],slots:4}],slotsBase:4,timeLimit:178,n:28,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:3,l:4,d:"R",x:1,y:3},{c:1,l:3,d:"U",x:6,y:2},{c:3,l:1,d:"R",x:0,y:6},{c:3,l:4,d:"D",x:5,y:3},{c:0,l:4,d:"R",x:3,y:0},{c:0,l:3,d:"D",x:4,y:4},{c:4,l:4,d:"L",x:2,y:1},{c:2,l:3,d:"D",x:0,y:1},{c:0,l:2,d:"D",x:1,y:5},{c:1,l:1,d:"L",x:0,y:5},{c:2,l:4,d:"R",x:0,y:4},{c:4,l:3,d:"D",x:1,y:0}],queue:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,1,1,3,3,3,3,3,3,2,2,2,1,1,1,1,3,3,2,2,2,2,2,0,0,1,4,4,4,0,0,1,4,4,4,3,2,4,4,4,4,4,3,2,2,2,2,2,4,4,4],par:[4,5,3,1,0,10,8,9,11,2,7,6],wr:.304,solution:[4,5,3,1,0,10,8,9,11,2,7,6],slots:4},{w:7,h:7,buses:[{c:5,l:4,d:"R",x:0,y:3},{v:1,l:3,d:"U",x:3,y:0},{c:5,l:1,d:"R",x:0,y:5},{c:1,l:3,d:"D",x:0,y:0},{c:5,l:2,d:"D",x:2,y:5},{c:4,l:2,d:"U",x:2,y:0},{c:4,l:3,d:"U",x:6,y:1},{c:3,l:2,d:"L",x:0,y:6},{c:2,l:4,d:"R",x:0,y:4},{c:2,l:3,d:"U",x:6,y:4},{c:2,l:3,d:"L",x:3,y:6},{c:4,l:3,d:"D",x:4,y:3},{c:0,l:3,d:"U",x:5,y:1},{c:4,l:2,d:"L",x:1,y:2},{c:2,l:2,d:"U",x:5,y:4},{c:4,l:3,d:"R",x:4,y:0}],queue:[5,5,5,4,4,5,4,4,4,3,3,0,0,0,0,4,4,3,3,0,0,4,4,4,2,2,4,2,4,4,2,2,2,4,4,4,2,2,4,4,4,4,4,2,2,2,2,4,2,2,2,5,2,5,2,2,2,2,5,5,2,2,5,5,5,2,2,5,5,5,1,4,1,1,1,1,4,1,4,4],par:[4,5,15,7,12,10,6,9,11,14,2,8,0,3,13],wr:.252,solution:[4,15,7,12,6,9,5,10,11,14,0,8,2,3,13],slots:4}],slotsBase:4,timeLimit:187,n:29,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:1,l:3,d:"U",x:6,y:0},{c:2,l:3,d:"D",x:1,y:0},{c:0,l:2,d:"R",x:2,y:0},{c:1,l:3,d:"L",x:1,y:6},{c:3,l:2,d:"L",x:1,y:3},{c:2,l:2,d:"D",x:2,y:1},{c:4,l:3,d:"U",x:0,y:2},{c:4,l:2,d:"D",x:4,y:4},{c:3,l:2,d:"R",x:1,y:4},{c:4,l:3,d:"U",x:3,y:1},{c:1,l:3,d:"R",x:1,y:5},{c:0,l:2,d:"U",x:6,y:4},{c:2,l:2,d:"L",x:4,y:2}],queue:[1,1,1,1,4,4,4,4,1,1,1,1,4,4,1,1,1,1,0,3,3,3,0,0,0,3,4,3,3,3,1,1,1,4,4,3,1,1,4,1,2,2,2,2,2,2,0,0,0,0,2,2,4,4,4,4,2,4,2,4,2,2,2,2],par:[0,6,3,11,4,7,8,10,1,2,5,9,12],wr:.292,solution:[0,6,3,2,4,7,11,8,10,1,5,9,12],slots:4},{w:7,h:7,buses:[{c:3,l:2,d:"D",x:6,y:5},{c:0,l:4,d:"L",x:2,y:1},{v:1,l:3,d:"U",x:6,y:0},{c:2,l:3,d:"L",x:2,y:0},{c:3,l:1,d:"D",x:5,y:0},{c:5,l:3,d:"U",x:4,y:2},{c:2,l:1,d:"L",x:5,y:4},{c:1,l:1,d:"L",x:2,y:4},{c:1,l:3,d:"R",x:0,y:6},{c:4,l:3,d:"U",x:3,y:3},{c:3,l:1,d:"L",x:0,y:0},{c:0,l:1,d:"L",x:0,y:5},{c:1,l:4,d:"U",x:0,y:1},{c:1,l:2,d:"L",x:5,y:3},{c:1,l:2,d:"U",x:1,y:0},{c:2,l:3,d:"D",x:1,y:3},{c:4,l:2,d:"R",x:4,y:6}],queue:[0,3,0,3,3,3,3,3,4,4,4,1,4,1,1,1,1,1,1,1,1,2,2,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,2,2,1,2,0,0,0,0,0,0,4,4,4,0,4,0,4,4,5,5,5,5,5,5,2,1,1,3,2,1,3,1],par:[11,10,0,16,14,8,3,12,15,7,1,9,5,6,13,4],wr:.232,solution:[11,0,10,16,12,8,15,14,3,7,1,9,5,6,13,4],slots:4}],slotsBase:4,timeLimit:196,n:30,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:2,d:"R",x:5,y:5},{c:3,l:2,d:"D",x:1,y:3},{c:5,l:2,d:"L",x:3,y:4},{c:2,l:3,d:"D",x:6,y:2},{c:1,l:2,d:"R",x:0,y:2},{c:0,l:1,d:"R",x:6,y:7},{c:5,l:3,d:"D",x:1,y:5},{c:2,l:3,d:"U",x:5,y:2},{c:0,l:2,d:"U",x:2,y:4},{c:5,l:1,d:"U",x:5,y:0},{c:4,l:4,d:"L",x:1,y:0},{c:0,l:4,d:"L",x:2,y:1},{c:3,l:2,d:"U",x:0,y:0},{c:1,l:1,d:"U",x:4,y:2},{c:2,l:3,d:"L",x:2,y:3},{c:3,l:2,d:"U",x:0,y:3},{v:1,l:3,d:"D",x:4,y:5},{c:2,l:2,d:"R",x:2,y:2},{c:1,l:3,d:"D",x:0,y:5}],queue:[0,1,1,0,1,1,1,1,5,3,3,3,3,5,3,3,3,3,5,5,5,5,5,4,4,4,4,4,4,5,4,4,0,0,2,2,0,0,0,0,2,2,2,0,2,0,2,2,1,2,1,2,2,2,2,2,2,1,3,3,2,1,1,1,3,3,3,3,3,3,2,2,0,0,5,5,5,2,0,5,2,2,2,0],par:[5,18,9,0,12,6,10,11,3,7,13,17,4,15,1,14,8,2],wr:.144,solution:[5,18,6,0,1,9,3,12,10,11,7,13,17,4,15,14,8,2],slots:4}],slotsBase:4,n:31,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"D",x:6,y:5},{c:2,l:4,d:"L",x:1,y:6},{c:5,l:2,d:"L",x:0,y:5},{c:3,l:4,d:"L",x:3,y:1},{c:2,l:2,d:"U",x:6,y:3},{c:1,l:2,d:"R",x:1,y:0},{c:0,l:2,d:"R",x:4,y:4},{c:3,l:1,d:"L",x:2,y:3},{c:2,l:4,d:"R",x:1,y:7},{c:0,l:3,d:"L",x:4,y:2},{c:0,l:1,d:"R",x:0,y:7},{c:1,l:4,d:"D",x:0,y:0},{c:1,l:2,d:"D",x:1,y:3},{c:2,l:3,d:"U",x:3,y:2},{c:1,l:3,d:"R",x:4,y:0},{c:5,l:2,d:"U",x:1,y:1},{c:3,l:2,d:"R",x:2,y:5},{c:2,l:2,d:"D",x:2,y:1},{c:4,l:3,d:"D",x:5,y:5}],queue:[5,4,4,4,4,4,5,5,4,4,4,4,4,5,4,4,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,1,1,1,1,1,1,1,1,3,1,1,3,3,3,1,1,1,1,1,3,1,1,1,1,1,1,3,1,5,5,5,2,5,2,2,2,3,3,2,2,2,3,3,3,3,3,3,2,2,2,0,0,0,0,0,0,2,0,0,0,2,0,2,2],par:[2,0,18,1,8,10,12,14,16,5,11,7,15,17,3,13,9,4,6],wr:.144,solution:[2,0,18,1,8,10,11,16,14,5,12,7,15,17,3,13,9,4,6],slots:4}],slotsBase:4,n:32,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:5,l:3,d:"D",x:5,y:2},{c:2,l:1,d:"R",x:4,y:0},{c:3,l:2,d:"U",x:1,y:4},{c:1,l:1,d:"R",x:5,y:6},{c:5,l:3,d:"U",x:0,y:2},{c:5,l:1,d:"R",x:6,y:4},{c:0,l:3,d:"R",x:4,y:7},{c:0,l:2,d:"U",x:5,y:0},{c:0,l:4,d:"R",x:3,y:5},{c:5,l:2,d:"R",x:1,y:2},{c:2,l:3,d:"D",x:6,y:1},{c:4,l:1,d:"U",x:3,y:7},{v:1,l:3,d:"L",x:0,y:7},{c:2,l:2,d:"R",x:1,y:3},{c:5,l:2,d:"L",x:3,y:6},{c:0,l:2,d:"U",x:4,y:2},{c:1,l:1,d:"U",x:1,y:6},{c:2,l:1,d:"D",x:6,y:0},{c:4,l:1,d:"R",x:1,y:1},{c:4,l:3,d:"R",x:1,y:0},{c:1,l:2,d:"U",x:0,y:5}],queue:[5,5,5,5,5,5,1,1,1,1,1,5,0,0,0,0,0,1,5,0,0,0,0,0,0,0,0,0,5,2,5,2,2,2,2,2,5,5,5,5,2,2,0,0,0,2,0,2,4,4,4,4,4,4,4,4,0,2,2,2,5,0,0,0,2,5,5,5,3,3,3,3,1,5,1,5,5,5,4,4],par:[4,20,3,5,6,8,0,10,17,7,1,19,18,15,13,9,2,16,14,11],wr:.264,solution:[4,20,3,5,8,6,0,10,17,7,1,19,18,15,13,9,2,16,14,11],slots:4}],slotsBase:4,n:33,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:0,l:3,d:"U",x:1,y:4},{c:6,l:4,d:"R",x:0,y:7},{c:0,l:1,d:"R",x:0,y:6},{c:3,l:1,d:"D",x:6,y:7},{c:3,l:3,d:"L",x:4,y:0},{c:5,l:1,d:"U",x:6,y:4},{c:2,l:1,d:"L",x:3,y:0},{c:3,l:2,d:"U",x:3,y:5},{c:0,l:3,d:"R",x:4,y:3},{c:6,l:3,d:"D",x:5,y:5},{c:6,l:1,d:"R",x:0,y:5},{c:2,l:1,d:"U",x:6,y:1},{c:1,l:2,d:"L",x:0,y:0},{c:3,l:1,d:"D",x:0,y:4},{c:4,l:3,d:"U",x:4,y:5},{c:0,l:2,d:"U",x:6,y:5},{c:2,l:4,d:"R",x:2,y:4},{c:2,l:1,d:"U",x:2,y:0},{c:1,l:2,d:"R",x:5,y:2},{c:3,l:4,d:"L",x:0,y:1},{c:4,l:2,d:"D",x:0,y:2}],queue:[3,2,3,2,1,1,1,1,3,3,3,3,3,3,3,1,1,1,2,3,1,2,0,0,0,0,0,0,0,0,0,0,0,0,3,2,3,3,3,3,3,2,5,2,2,2,5,2,2,2,2,2,4,4,4,3,3,6,6,6,6,4,4,3,6,6,4,3,0,0,0,6,0,0,6,0,6,6,6,3,4,6,3,4,4,4,6,6,6,6],par:[3,17,12,19,18,6,8,0,4,11,5,16,14,7,9,15,10,2,1,13,20],wr:.044,solution:[19,17,12,3,18,6,0,8,4,11,5,16,14,7,9,15,1,2,10,13,20],slots:4}],slotsBase:4,n:34,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:0,l:2,d:"D",x:2,y:4},{c:3,l:2,d:"U",x:5,y:6},{c:6,l:1,d:"L",x:1,y:0},{v:1,l:3,d:"D",x:0,y:5},{c:5,l:3,d:"U",x:0,y:1},{c:0,l:1,d:"L",x:5,y:0},{c:3,l:1,d:"L",x:0,y:0},{c:2,l:1,d:"L",x:0,y:4},{c:4,l:2,d:"U",x:5,y:4},{c:2,l:1,d:"R",x:6,y:3},{c:5,l:2,d:"R",x:2,y:7},{c:4,l:1,d:"R",x:4,y:7},{c:0,l:1,d:"U",x:6,y:0},{c:1,l:4,d:"R",x:2,y:3},{c:5,l:2,d:"L",x:5,y:2},{c:0,l:1,d:"D",x:1,y:7},{c:1,l:3,d:"L",x:4,y:1},{c:1,l:3,d:"L",x:2,y:0},{c:1,l:4,d:"D",x:6,y:4},{c:2,l:3,d:"D",x:1,y:3},{c:0,l:2,d:"U",x:3,y:1},{c:1,l:4,d:"R",x:1,y:6}],queue:[2,2,0,2,2,0,0,3,0,3,6,5,5,5,5,1,1,1,1,1,6,5,5,1,0,0,0,1,1,0,1,1,1,1,0,5,5,5,0,5,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,3,3,1,1,1,3,1,1,1,1,3,1,4,5,5,5,0,0,4,5,0,0,2,2,2,2,2,2],par:[7,9,15,12,6,2,4,17,20,16,5,14,13,8,18,1,21,11,10,0,19],wr:.1,solution:[7,12,9,15,6,2,4,13,17,20,5,14,18,16,8,1,21,11,10,0,19],slots:4},{w:7,h:8,buses:[{c:1,l:3,d:"R",x:1,y:4},{c:0,l:2,d:"R",x:3,y:7},{c:4,l:3,d:"R",x:0,y:0},{c:3,l:2,d:"R",x:2,y:6},{c:5,l:1,d:"D",x:3,y:3},{c:6,l:3,d:"R",x:0,y:1},{c:1,l:3,d:"D",x:5,y:4},{c:2,l:1,d:"R",x:5,y:1},{c:3,l:2,d:"L",x:1,y:3},{c:5,l:1,d:"D",x:6,y:1},{c:4,l:1,d:"U",x:4,y:1},{c:3,l:2,d:"D",x:3,y:0},{c:3,l:3,d:"D",x:6,y:5},{c:0,l:2,d:"R",x:4,y:0},{c:1,l:4,d:"D",x:4,y:3},{c:5,l:2,d:"R",x:2,y:5},{c:3,l:4,d:"L",x:3,y:2},{c:5,l:3,d:"U",x:1,y:5}],queue:[3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,3,1,1,1,0,0,0,5,1,0,5,1,1,1,3,1,1,3,3,1,1,1,3,1,1,2,1,1,1,5,2,1,1,1,5,5,5,5,4,5,4,3,4,4,6,3,4,6,6,6,6,3,4,6,3,4,4,5,5,5,5,5,5],par:[8,16,13,12,6,1,9,14,3,7,0,15,4,10,11,2,5,17],wr:.148,solution:[16,12,1,8,14,13,9,6,3,7,0,15,4,10,11,2,5,17],slots:4}],slotsBase:4,timeLimit:246,n:35,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:2,d:"U",x:3,y:0},{c:0,l:1,d:"R",x:6,y:3},{c:3,l:3,d:"R",x:0,y:0},{c:5,l:3,d:"L",x:2,y:3},{c:6,l:1,d:"R",x:5,y:0},{c:2,l:2,d:"L",x:0,y:6},{c:3,l:2,d:"U",x:4,y:0},{c:6,l:3,d:"R",x:0,y:7},{c:4,l:3,d:"U",x:5,y:5},{c:6,l:1,d:"U",x:1,y:3},{c:4,l:2,d:"U",x:6,y:6},{c:1,l:1,d:"R",x:6,y:4},{c:5,l:2,d:"R",x:3,y:7},{c:0,l:1,d:"D",x:0,y:3},{c:1,l:2,d:"R",x:0,y:4},{c:2,l:2,d:"D",x:4,y:4},{c:0,l:3,d:"U",x:5,y:2},{c:4,l:2,d:"L",x:1,y:2},{c:3,l:2,d:"L",x:0,y:5},{c:2,l:1,d:"R",x:6,y:5},{c:5,l:3,d:"U",x:6,y:0},{c:1,l:2,d:"D",x:0,y:1}],queue:[0,2,0,2,1,3,1,3,3,3,2,2,5,5,4,4,4,2,2,5,5,4,5,5,6,0,6,0,0,0,0,0,4,4,4,4,4,4,5,5,5,5,2,2,3,3,2,3,2,3,3,3,6,6,6,1,1,1,6,1,6,6,3,3,3,3,2,2,2,2,0,1,1,4,0,1,1,4,4,4,6,5,5,6,5,5,5,5],par:[1,19,11,6,0,20,10,4,16,8,12,15,2,7,14,18,5,13,21,17,9,3],wr:.036,solution:[1,0,11,6,20,5,19,10,4,16,8,12,2,7,15,14,18,13,21,17,9,3],slots:4}],slotsBase:4,n:36,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:6,l:2,d:"D",x:0,y:6},{c:1,l:3,d:"D",x:2,y:3},{c:4,l:1,d:"D",x:5,y:1},{c:1,l:2,d:"L",x:5,y:3},{c:1,l:4,d:"R",x:3,y:6},{c:5,l:4,d:"D",x:3,y:2},{c:5,l:1,d:"U",x:4,y:0},{c:0,l:2,d:"D",x:1,y:3},{c:6,l:2,d:"D",x:6,y:0},{c:6,l:3,d:"L",x:1,y:7},{c:5,l:2,d:"U",x:0,y:4},{c:6,l:1,d:"U",x:0,y:0},{c:2,l:2,d:"L",x:5,y:4},{c:3,l:1,d:"L",x:0,y:3},{c:0,l:1,d:"D",x:1,y:6},{c:6,l:2,d:"U",x:0,y:1},{c:3,l:3,d:"R",x:4,y:2},{c:0,l:3,d:"R",x:2,y:1},{c:0,l:3,d:"R",x:4,y:7},{c:0,l:1,d:"U",x:3,y:0},{c:4,l:3,d:"L",x:4,y:5},{v:1,l:3,d:"U",x:1,y:0},{c:2,l:1,d:"U",x:5,y:0},{c:5,l:1,d:"D",x:1,y:5}],queue:[3,0,3,0,5,5,2,6,2,6,6,0,6,6,0,0,6,0,0,0,1,1,1,1,1,1,1,1,6,6,6,5,5,5,6,6,6,6,5,5,5,5,5,6,6,6,0,1,1,5,5,0,1,1,1,5,1,5,5,5,0,0,0,0,4,4,4,4,4,4,3,3,3,3,2,2,2,3,3,2,1,1,4,1,1,4,6,6,6,6,0,0,0,0,0,0],par:[13,19,6,22,11,0,18,4,15,9,5,14,1,10,23,7,20,16,12,3,2,8,17],wr:.008,solution:[16,18,6,22,0,9,14,4,5,11,15,19,1,23,13,10,7,20,12,3,2,8,17],slots:4}],slotsBase:4,n:37,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:3,d:"L",x:3,y:0},{c:2,l:2,d:"R",x:4,y:3},{c:4,l:2,d:"D",x:2,y:6},{c:6,l:3,d:"L",x:4,y:1},{c:0,l:4,d:"L",x:1,y:4},{c:5,l:1,d:"R",x:6,y:0},{c:1,l:2,d:"U",x:6,y:2},{c:3,l:2,d:"U",x:2,y:1},{c:1,l:1,d:"L",x:5,y:2},{c:2,l:1,d:"L",x:0,y:2},{c:5,l:4,d:"U",x:0,y:4},{c:6,l:3,d:"D",x:6,y:5},{c:4,l:2,d:"D",x:4,y:6},{c:3,l:3,d:"R",x:0,y:3},{c:0,l:1,d:"L",x:0,y:1},{c:5,l:2,d:"U",x:1,y:1},{c:6,l:1,d:"U",x:2,y:0},{c:1,l:3,d:"R",x:2,y:5},{c:3,l:3,d:"D",x:1,y:5},{c:0,l:2,d:"D",x:3,y:6},{c:2,l:3,d:"U",x:5,y:5},{c:3,l:2,d:"L",x:5,y:4},{c:5,l:2,d:"L",x:0,y:0}],queue:[0,6,0,0,6,0,4,4,4,4,4,4,4,4,2,2,6,6,6,6,3,5,6,6,3,5,3,3,5,5,5,3,3,3,5,3,3,3,2,2,2,2,5,2,2,5,5,5,0,1,0,1,6,6,6,6,1,1,1,2,2,6,1,2,6,2,3,3,3,3,3,3,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1],par:[19,16,12,2,9,11,7,5,22,18,0,15,14,8,3,6,1,13,10,4,21,20,17],wr:.008,solution:[19,11,2,12,9,18,22,16,15,7,0,5,14,8,3,6,1,13,10,4,21,20,17],slots:4}],slotsBase:4,n:38,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:4,d:"U",x:0,y:0},{c:0,l:1,d:"D",x:5,y:7},{c:6,l:2,d:"R",x:3,y:2},{c:1,l:3,d:"L",x:1,y:7},{c:5,l:3,d:"D",x:6,y:3},{c:1,l:4,d:"D",x:2,y:0},{c:4,l:2,d:"U",x:3,y:0},{c:4,l:3,d:"L",x:0,y:6},{c:0,l:2,d:"U",x:5,y:4},{c:3,l:1,d:"R",x:6,y:7},{c:0,l:3,d:"R",x:3,y:3},{c:2,l:2,d:"R",x:5,y:6},{c:4,l:2,d:"U",x:5,y:1},{c:4,l:3,d:"R",x:4,y:0},{c:4,l:3,d:"U",x:4,y:4},{c:3,l:2,d:"D",x:3,y:5},{c:6,l:1,d:"R",x:6,y:2},{c:5,l:3,d:"R",x:0,y:5},{c:6,l:4,d:"R",x:0,y:4},{c:3,l:1,d:"D",x:4,y:7},{c:1,l:1,d:"R",x:6,y:1},{c:4,l:1,d:"L",x:0,y:7},{v:1,l:3,d:"U",x:1,y:0}],queue:[0,0,3,1,3,1,6,4,6,4,4,4,4,4,2,2,4,4,2,4,4,2,4,4,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,3,3,3,3,4,4,4,6,6,6,4,4,4,4,4,6,4,4,5,5,5,5,0,0,0,0,0,0,5,0,0,5,0,0,4,4,4,4,4,4,5,5,6,6,6,6,1,5,5,6,6,1,1,5,5,6,1,1,1,6,1,1],par:[1,19,20,16,6,21,7,11,0,9,3,15,13,12,2,4,10,8,14,17,18,5],wr:.004,solution:[1,9,0,16,7,11,13,20,19,4,21,3,15,6,12,2,10,8,14,17,18,5],slots:4}],slotsBase:4,n:39,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:0,l:1,d:"L",x:4,y:3},{c:2,l:3,d:"U",x:1,y:1},{c:4,l:3,d:"L",x:0,y:4},{c:3,l:2,d:"D",x:3,y:6},{c:0,l:2,d:"L",x:5,y:7},{c:3,l:4,d:"D",x:0,y:0},{c:0,l:2,d:"R",x:3,y:1},{c:3,l:2,d:"D",x:2,y:6},{c:0,l:1,d:"U",x:2,y:2},{c:5,l:3,d:"R",x:1,y:5},{c:3,l:2,d:"U",x:3,y:3},{c:3,l:3,d:"L",x:3,y:2},{c:1,l:3,d:"L",x:3,y:0},{c:4,l:2,d:"D",x:0,y:6},{c:4,l:3,d:"D",x:5,y:4},{c:1,l:3,d:"U",x:4,y:4},{c:1,l:1,d:"R",x:6,y:5},{c:3,l:3,d:"D",x:6,y:0},{c:6,l:2,d:"R",x:5,y:3},{c:2,l:1,d:"R",x:5,y:1},{c:2,l:2,d:"D",x:1,y:6},{c:5,l:2,d:"U",x:2,y:0},{c:6,l:1,d:"U",x:1,y:0}],queue:[1,3,3,3,1,3,3,6,3,3,3,6,5,5,5,6,6,5,6,6,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,4,4,4,4,0,0,0,3,3,3,0,0,3,3,3,3,3,0,3,3,3,3,2,3,2,3,3,3,3,3,1,1,1,3,1,1,1,3,0,0,3,3,3,0,0,0,3,0,4,4,4,4,4,4,1,1,1,1,1,1,5,5,5,5,5,5],par:[16,7,3,22,21,18,2,20,1,13,4,5,8,17,19,11,12,6,10,0,14,15,9],wr:.012,solution:[16,3,7,18,21,22,2,1,20,13,4,5,8,11,12,17,19,6,10,0,14,15,9],slots:4},{w:7,h:8,buses:[{c:5,l:3,d:"D",x:3,y:5},{c:2,l:4,d:"U",x:0,y:4},{c:3,l:1,d:"U",x:2,y:0},{c:4,l:1,d:"R",x:4,y:1},{c:6,l:2,d:"D",x:6,y:6},{c:5,l:4,d:"R",x:0,y:2},{c:1,l:1,d:"L",x:2,y:7},{c:5,l:2,d:"R",x:4,y:6},{c:6,l:4,d:"U",x:6,y:1},{c:2,l:3,d:"L",x:0,y:1},{c:4,l:2,d:"R",x:3,y:0},{c:3,l:2,d:"R",x:4,y:7},{c:6,l:2,d:"R",x:0,y:0},{c:1,l:3,d:"D",x:5,y:3},{c:0,l:3,d:"U",x:4,y:2},{c:6,l:2,d:"R",x:5,y:0},{c:1,l:4,d:"R",x:0,y:3},{c:1,l:3,d:"U",x:1,y:5},{c:0,l:2,d:"D",x:5,y:1}],queue:[3,3,5,5,5,5,5,5,2,6,6,6,2,6,2,2,2,2,5,5,3,3,3,5,3,5,1,1,1,1,1,1,6,4,4,4,6,6,6,6,4,6,6,6,6,6,6,6,0,0,0,0,6,6,4,6,6,4,0,0,0,0,5,5,5,5,1,1,1,1,1,0,5,1,1,0,5,1,5,5,2,2,2,2,1,1,2,2,2,1,1,2,1,1,1,1],par:[2,0,9,4,7,11,13,15,10,8,18,12,3,14,5,16,1,17,6],wr:.148,solution:[2,0,9,4,7,11,13,15,10,8,18,12,3,14,5,16,1,17,6],slots:4}],slotsBase:4,timeLimit:259,n:40,difficulty:"super"}];function La(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e.int(s-n+1),e.pick=n=>n[e.int(n.length)],e.shuffle=n=>{for(let s=n.length-1;s>0;s--){let r=e.int(s+1);[n[s],n[r]]=[n[r],n[s]]}return n},e.weighted=n=>{let s=Object.keys(n),r=0;for(let o of s)r+=n[o];let a=e()*r;for(let o of s)if(a-=n[o],a<=0)return+o;return+s[s.length-1]},e}function qu(i){return cs({len:i.l,dir:i.d,x:i.x,y:i.y})}function Rc(i,t,e){return bi({w:t,h:e},{len:i.l,dir:i.d,x:i.x,y:i.y})}function ny(i,t){let{w:e,h:n}=t,s=[],r=new Set,a=new Set,o=(d,f)=>d+","+f,l=(d,f,g)=>{let y=null,m=-1e9;for(let p=0;p<90;p++){let _=i.pick(["U","D","L","R"]),v=Ue[_].horiz,b=i.int(e-(v?d-1:0)),P=i.int(n-(v?0:d-1)),E={l:d,d:_,x:b,y:P},A=qu(E);if(A.some(([N,k])=>r.has(o(N,k))||a.has(o(N,k))))continue;let R=Rc(E,e,n);if(R.some(([N,k])=>r.has(o(N,k)))||g&&R.length>0)continue;let F=0,x=new Set(A.map(([N,k])=>o(N,k)));for(let N of s)if(!N.v){for(let[k,X]of Rc(N,e,n))if(x.has(o(k,X))){F++;break}}let S=0;for(let[N,k]of A)for(let X of Object.values(Ue))r.has(o(N+X.x,k+X.y))&&S++;let O=F*3+S*.6+i()*2+(R.length>0?.5:0);O>m&&(m=O,y=E)}if(!y)return!1;y.v=f,s.push(y);for(let[p,_]of qu(y))r.add(o(p,_));if(f)for(let[p,_]of Rc(y,e,n))a.add(o(p,_));return!0};if(t.vip)for(let d=0;d<t.vip;d++)l(xa,!0,!0);let c=0;for(;s.filter(d=>!d.v).length<t.count&&c++<400;)l(i.weighted(t.lens),!1,!1);let h=s.filter(d=>d.v);return{normal:s.filter(d=>!d.v).reverse(),vips:h}}function iy(i,t,e){let n=t.length,s=[],r=[];for(let l=0;l<e.colors;l++)r.push(l);i.shuffle(r);for(let l=0;l<n;l++){let c=l<r.length?r[l]:i.pick(r);l>0&&c===s[l-1]&&e.colors>1&&i()<.7&&(c=(c+1+i.int(e.colors-1))%e.colors),s.push(c)}i.shuffle(s),t.forEach((l,c)=>{l.c=s[c]});let a=[],o=0;for(;o<n;){let l=Math.min(n-o,i.range(1,e.window));if(l===1){let c=t[o];for(let h=0;h<js(c.l,!1);h++)a.push(c.c)}else{let c=[];for(let u=0;u<l;u++){let d=t[o+u],f=js(d.l,!1),g=[];for(;f>0;){let y=Math.min(f,i.range(1,Math.max(1,f-(g.length===0?1:0))));g.push([d.c,y]),f-=y}c.push(g)}let h=!0;for(;h;){h=!1;for(let u of c)if(u.length){let[d,f]=u.shift();for(let g=0;g<f;g++)a.push(d);h=!0}}}o+=l}return a}function Xu(i,t){let e=La(i),{normal:n,vips:s}=ny(e,t),r=iy(e,n,t),a=[...n,...s],o=a.map((u,d)=>d);e.shuffle(o);let l=o.map(u=>({...a[u]})),c=n.map((u,d)=>o.indexOf(d)),h=l.map(u=>u.v?{v:1,l:u.l,d:u.d,x:u.x,y:u.y}:{c:u.c,l:u.l,d:u.d,x:u.x,y:u.y});return{w:t.w,h:t.h,buses:h,queue:r,par:c}}function $u(i){let t=s=>({vip:0,window:2,wr:.5,slots:4,...s}),e,n={};if(i===2)e=[t({w:5,h:5,count:6,lens:{2:3,3:2},colors:3,vip:1,window:2,wr:.7,slots:3})];else if(i<=5)e=[t({w:5,h:5,count:5+(i-3),lens:{2:3,3:2},colors:3,window:2,wr:.7})];else if(i<=10)e=[t({w:6,h:6,count:8+Math.floor((i-6)*.8),lens:{1:1,2:3,3:3,4:1},colors:4,window:2,wr:.55})];else if(i<=15)e=[t({w:6,h:7,count:12+(i-11),lens:{1:1,2:3,3:3,4:1},colors:5,window:3,wr:.4})];else if(i<=20)e=[t({w:7,h:7,count:14+(i-16),lens:{1:1,2:3,3:3,4:2},colors:i<18?5:6,window:3,vip:1,wr:.32})];else if(i<=25)e=[t({w:7,h:8,count:16+(i-21),lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:i%2,wr:.22})],(i===22||i===25)&&(n.moveSpare=3);else if(i<=30){let s=9+(i-26);e=[t({w:7,h:7,count:s,lens:{1:1,2:3,3:3,4:2},colors:5,window:3,vip:0,wr:.3}),t({w:7,h:7,count:s+3,lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:1,wr:.22})],n.timeSpare=25}else{let s=Math.min(10,i-30);if(e=[t({w:7,h:8,count:17+Math.min(6,s),lens:{1:1,2:3,3:3,4:2},colors:6+(s>3?1:0),window:3,vip:i%2,wr:.18})],i%5===0){let r={...e[0],count:e[0].count-4,vip:0};e.push(r),n.timeSpare=30}i%7===0&&(n.moveSpare=3)}return{stages:e,extra:n}}var Yu=i=>i<=2?"easy":i<=10?"normal":i<=20?"hard":"super";function Cc(i,{useVip:t=!1,maxNodes:e=4e5}={}){let n=In(i),s=n.buses.filter(R=>R.st==="board"&&(t||!R.vip)),r=new Map(s.map((R,F)=>[R.id,F])),a=s.length,o=new Map;for(let R of n.buses)if(R.st==="board")for(let[F,x]of cs(R))o.set(F+","+x,R.id);let l=new Array(a).fill(0),c=new Array(a).fill(!1);for(let R=0;R<a;R++){let F=s[R];for(let[x,S]of bi(n,F)){let O=o.get(x+","+S);O===void 0||O===F.id||(r.has(O)?l[R]|=1<<r.get(O):c[R]=!0)}}let h=n.slotOpen.slice(),u=n.slots.map(R=>R===null?null:{c:n.buses[R].color,b:n.buses[R].boarded,s:n.buses[R].seats}),d=n.vipSlot===null?null:{c:99,b:n.buses[n.vipSlot].boarded,s:n.buses[n.vipSlot].seats},f=n.queue,g=new Set,y=0,m=!1,p=[];function _(R,F,x,S){let O=R+"|"+F+"|";for(let N=0;N<He;N++)O+=x[N]?x[N].c*20+x[N].b+",":"-,";return S&&(O+="v"+S.b),O}function v(R,F,x){for(;;){if(R>=f.length)return{qi:R,vip:x};let S=f[R],O=!1;for(let N=0;N<He;N++){let k=F[N];if(k&&k.c===S&&k.b<k.s){k.b++,R++,O=!0,k.b>=k.s&&(F[N]=null);break}}if(!O){if(x&&x.b<x.s){x.b++,R++,x.b>=x.s&&(x=null);continue}return{qi:R,vip:x}}}}function b(R,F,x,S){if(F>=f.length)return!0;if(++y>e)return m=!0,!1;let O=_(R,F,x,S);if(g.has(O))return!1;let N=f[F],k=[];for(let X=0;X<a;X++){if(R&1<<X||c[X]||l[X]&~R)continue;if(s[X].vip){if(S)continue}else if(!x.some((J,G)=>h[G]&&J===null))continue;k.push(X)}k.sort((X,z)=>(s[X].color===N?0:1)-(s[z].color===N?0:1)||s[z].len-s[X].len);for(let X of k){let z=s[X],J=x.map(Z=>Z?{...Z}:null),G=S?{...S}:null;if(z.vip)G={c:99,b:0,s:z.seats};else{let Z=J.findIndex((tt,St)=>h[St]&&tt===null);J[Z]={c:z.color,b:0,s:z.seats}}let lt=v(F,J,G);if(p.push(z.id),b(R|1<<X,lt.qi,J,lt.vip))return!0;if(p.pop(),m)return!1}return g.add(O),!1}let P=u.map(R=>R?{...R}:null),E=v(n.qi,P,d?{...d}:null),A=b(0,E.qi,P,E.vip);return{solved:A,order:A?p.slice():[],nodes:y,aborted:m}}function Zu(i,t,e){let n=Qs(i,t);vc(n);for(let s of e){let r=wa(n,s);if(!r.ok)return{ok:!1,at:s,reason:r.reason};vc(n)}return{ok:Ta(n).status==="won",state:n}}function Ku(i){let t=Ac.find(o=>o.n===i);if(t)return t;let{stages:e,extra:n}=$u(i),s=e.map((o,l)=>{for(let c=0;c<40;c++){let h=Xu(i*1000003+l*7919+c*104729,o);if(Zu(h,{slotsOpen:o.slots},h.par).ok)return h.slots=o.slots,h}throw new Error("level gen failed")}),r=s.reduce((o,l)=>o+l.buses.filter(c=>!c.v).length,0),a={n:i,stages:s,slotsBase:e[0].slots,difficulty:Yu(i)};return n.moveSpare&&s.length===1&&(a.moveLimit=r+n.moveSpare),(n.timeSpare||s.length>1)&&(a.timeLimit=Math.round(r*4.5+40+(n.timeSpare||0))),a}var Oy=Ac.length;var Da=()=>({v:1,level:1,completed:{},coins:120,owned:{style:["city"],rim:["steel"],palette:["vivid"],trail:["dust"],vipSkin:["gold"]},equipped:{style:"city",rim:"steel",palette:"vivid",trail:"dust",vipSkin:"gold"},perm:{slots:0},powerups:{undo:2,hint:2,recall:1,call:1,extraSlot:1,moves:1,time:1},temp:{level:0,slots:[],conv:0,vipCalls:0},tutorial:{l1:!1,l2:!1,enabled:!0},settings:{sound:!0,vibe:!0,quality:"high"},daily:{lastClaim:"",streak:0},quests:{date:"",list:[],progress:{},claimed:{}},ach:{unlocked:{},claimed:{}},stats:{passengers:0,levels:0,vip:0,coinsEarned:0,buses:0,slots:0,threeStars:0,ads:0}}),gn=(i,t,e=0,n=1e9)=>Number.isFinite(i)?Math.min(n,Math.max(e,Math.floor(i))):t,Pc=(i,t)=>typeof i=="string"?i:t,we=i=>i&&typeof i=="object"&&!Array.isArray(i)?i:{};function sy(i){let t=Da(),e=we(i),n=Da();n.level=gn(e.level,1,1,1e5),n.coins=gn(e.coins,t.coins,0,99999999);let s=we(e.completed);n.completed={};for(let f of Object.keys(s)){let g=+f;Number.isInteger(g)&&g>0&&(n.completed[g]=gn(s[f],1,1,3))}for(let f of Object.keys(t.owned)){let g=Array.isArray(we(e.owned)[f])?we(e.owned)[f].filter(y=>typeof y=="string"):[];n.owned[f]=[...new Set([...t.owned[f],...g])]}for(let f of Object.keys(t.equipped)){let g=Pc(we(e.equipped)[f],t.equipped[f]);n.equipped[f]=n.owned[f].includes(g)?g:t.equipped[f]}n.perm.slots=gn(we(e.perm).slots,0,0,3);let r=we(e.powerups);n.powerups={};for(let f of Object.keys(t.powerups))n.powerups[f]=gn(r[f],t.powerups[f],0,999);let a=we(e.temp);n.temp={level:gn(a.level,0),slots:Array.isArray(a.slots)?a.slots.filter(f=>Number.isInteger(f)&&f>=0&&f<7):[],conv:gn(a.conv,0,0,99),vipCalls:gn(a.vipCalls,0,0,99)};let o=we(e.tutorial);n.tutorial={l1:!!o.l1,l2:!!o.l2,enabled:o.enabled!==!1};let l=we(e.settings);n.settings={sound:l.sound!==!1,vibe:l.vibe!==!1,quality:["low","medium","high"].includes(l.quality)?l.quality:"high"};let c=we(e.daily);n.daily={lastClaim:Pc(c.lastClaim,""),streak:gn(c.streak,0,0,7)};let h=we(e.quests);n.quests={date:Pc(h.date,""),list:Array.isArray(h.list)?h.list.filter(f=>f&&typeof f.id=="string").slice(0,6):[],progress:we(h.progress),claimed:we(h.claimed)};let u=we(e.ach);n.ach={unlocked:we(u.unlocked),claimed:we(u.claimed)};let d=we(e.stats);n.stats={};for(let f of Object.keys(t.stats))n.stats[f]=gn(d[f],0);return n}var Ua=class{constructor(){this.data=this.load(),this._t=null}load(){try{let t=localStorage.getItem(uc);if(t)return sy(JSON.parse(t))}catch{}return Da()}write(){try{localStorage.setItem(uc,JSON.stringify(this.data))}catch{}}save(t=!1){if(t){clearTimeout(this._t),this.write();return}clearTimeout(this._t),this._t=setTimeout(()=>this.write(),250)}reset(){this.data=Da(),this.write()}};var Na=class{constructor(){this.ctx=null,this.sound=!0,this.vibe=!0,this.last={}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t}catch{}}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setSound(t){this.sound=t}setVibe(t){this.vibe=t}haptic(t=12){if(this.vibe)try{let e=window.Capacitor?.Plugins?.Haptics;if(e?.vibrate){e.vibrate({duration:t});return}navigator.vibrate?.(t)}catch{}}tone(t,e,{type:n="sine",vol:s=.18,slide:r=0,delay:a=0,attack:o=.005,lp:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,u=c.createOscillator(),d=c.createGain();u.type=n,u.frequency.setValueAtTime(t,h),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),h+e),d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+o),d.gain.exponentialRampToValueAtTime(1e-4,h+e);let f=u;if(l){let g=c.createBiquadFilter();g.type="lowpass",g.frequency.value=l,u.connect(g),f=g}f.connect(d),d.connect(c.destination),u.start(h),u.stop(h+e+.05)}noise(t,{vol:e=.12,lp:n=600,delay:s=0,hp:r=0}={}){let a=this.ctx;if(!a)return;let o=Math.floor(a.sampleRate*t),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let g=0;g<o;g++)c[g]=(Math.random()*2-1)*(1-g/o);let h=a.createBufferSource();h.buffer=l;let u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=n;let d=a.createGain();d.gain.value=e,h.connect(u);let f=u;if(r){let g=a.createBiquadFilter();g.type="highpass",g.frequency.value=r,u.connect(g),f=g}f.connect(d),d.connect(a.destination),h.start(a.currentTime+s)}throttled(t,e){let n=performance.now();return n-(this.last[t]||0)<e?!1:(this.last[t]=n,!0)}play(t){if(!this.sound){t==="error"&&this.haptic(40);return}if(this.unlock(),!!this.ctx)switch(t){case"click":this.tone(520,.07,{type:"triangle",vol:.12,slide:180});break;case"engine":if(!this.throttled("engine",150))return;this.noise(.45,{vol:.09,lp:380}),this.tone(70,.5,{type:"sawtooth",vol:.05,slide:60,lp:300}),this.haptic(10);break;case"depart":this.noise(.6,{vol:.08,lp:500}),this.tone(90,.7,{type:"sawtooth",vol:.05,slide:90,lp:320}),this.tone(520,.12,{type:"square",vol:.05,delay:.05}),this.tone(520,.12,{type:"square",vol:.05,delay:.2});break;case"park":this.tone(140,.16,{type:"sine",vol:.22,slide:-80}),this.noise(.1,{vol:.1,lp:900}),this.haptic(18);break;case"board":if(!this.throttled("board",55))return;this.tone(640+Math.random()*160,.09,{type:"sine",vol:.12,slide:420});break;case"step":if(!this.throttled("step",90))return;this.noise(.03,{vol:.03,lp:2500});break;case"bump":this.tone(120,.16,{type:"square",vol:.15,slide:-70,lp:600}),this.tone(55,.28,{type:"sine",vol:.22,slide:-15}),this.haptic(70);break;case"error":this.tone(150,.2,{type:"sawtooth",vol:.12,slide:-40,lp:700}),this.haptic(45);break;case"coin":this.tone(990,.08,{type:"square",vol:.07}),this.tone(1480,.18,{type:"square",vol:.07,delay:.07});break;case"vip":[523,659,784,1047,1319].forEach((e,n)=>this.tone(e,.28,{type:"triangle",vol:.11,delay:n*.06})),this.haptic(30);break;case"unlock":this.tone(300,.4,{type:"sine",vol:.14,slide:900}),[1200,1600,2e3].forEach((e,n)=>this.tone(e,.2,{type:"triangle",vol:.06,delay:.2+n*.07})),this.haptic(30);break;case"convert":case"whoosh":this.noise(.4,{vol:.07,lp:1800,hp:300}),this.tone(400,.4,{type:"sine",vol:.09,slide:600});break;case"win":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,.3,{type:"triangle",vol:.13,delay:n*.1})),this.haptic(60);break;case"lose":[392,330,262,196].forEach((e,n)=>this.tone(e,.3,{type:"sine",vol:.13,delay:n*.14})),this.haptic(80);break;default:break}}};var Ju=0,Oa=class{constructor(t){this.ui=t,this.consumed=new Set,this.inited=!1,this.shown=0}get mode(){return Fe.mode}available(){return Fe.mode==="test"?!0:Fe.mode==="admob"?!!window.Capacitor?.Plugins?.AdMob:!1}async showRewarded(t){if(!this.available())return{ok:!1,reason:"unavailable"};try{if(Fe.mode==="test")return await this.ui.testAd(Fe.testDurationMs,t)?(this.shown++,{ok:!0,token:`t${++Ju}-${Date.now()}`}):{ok:!1,reason:"cancelled"};let e=window.Capacitor.Plugins.AdMob;this.inited||(await e.initialize({initializeForTesting:!1}),this.inited=!0);let n=!1,s=await e.addListener("onRewardedVideoAdReward",()=>{n=!0}),r=new Promise(a=>e.addListener("onRewardedVideoAdDismissed",()=>a()).catch(()=>a()));return await e.prepareRewardVideoAd({adId:Fe.admob.rewardedUnitAndroid}),await e.showRewardVideoAd(),await r,s?.remove?.(),n?(this.shown++,{ok:!0,token:`a${++Ju}-${Date.now()}`}):{ok:!1,reason:"cancelled"}}catch(e){return{ok:!1,reason:"error",error:String(e?.message||e)}}}consume(t){return!t||this.consumed.has(t)?!1:(this.consumed.add(t),!0)}};var ry={coin:'<circle cx="12" cy="12" r="9.5" fill="#ffc83a" stroke="#c98a00" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#e8a500" stroke-width="1.8"/><path d="M12 8.2v7.6M9.8 10.2h3.1a1.4 1.4 0 0 1 0 2.8h-1.8a1.4 1.4 0 0 0 0 2.8h3.1" fill="none" stroke="#b97800" stroke-width="1.5" stroke-linecap="round"/>',pause:'<rect x="6" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/>',undo:'<path d="M9 8H15a5 5 0 0 1 0 10H8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4.5 8 8l4 3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M12 3.5a6 6 0 0 0-3.4 10.9c.6.5.9 1.1.9 1.8V17h5v-.8c0-.7.3-1.3.9-1.8A6 6 0 0 0 12 3.5z" fill="currentColor"/><rect x="9.5" y="18" width="5" height="2.4" rx="1.2" fill="currentColor"/>',recall:'<path d="M5 12h12M9 7.5 4.5 12 9 16.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="18" y="6" width="2.6" height="12" rx="1.3" fill="currentColor"/>',call:'<circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',convert:'<path d="M6 8h11l-3-3M18 16H7l3 3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',vip:'<path d="M3 8.5l4.2 3.8L12 5l4.8 7.3L21 8.5 19.2 18.5H4.8z" fill="currentColor"/><rect x="5" y="19.5" width="14" height="2" rx="1" fill="currentColor"/>',plus:'<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>',ad:'<rect x="3" y="5" width="18" height="14" rx="3.5" fill="currentColor"/><path d="M10 9.2v5.6l5-2.8z" fill="#fff"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.6" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',star:'<path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z" fill="currentColor" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-linejoin="round"/>',home:'<path d="M3.5 11.5 12 4l8.5 7.5V20h-5.5v-5h-6v5H3.5z" fill="currentColor"/>',shop:'<path d="M5 8h14l-1.2 11.2a1.6 1.6 0 0 1-1.6 1.4H7.8a1.6 1.6 0 0 1-1.6-1.4z" fill="currentColor"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',bus:'<rect x="3" y="5" width="18" height="12.5" rx="3" fill="currentColor"/><rect x="5" y="7.5" width="14" height="4.5" rx="1.2" fill="rgba(255,255,255,.75)"/><circle cx="7.8" cy="18.2" r="2.1" fill="#222"/><circle cx="16.2" cy="18.2" r="2.1" fill="#222"/>',list:'<rect x="4" y="4" width="16" height="17" rx="3" fill="currentColor"/><path d="M8 9.5h8M8 13h8M8 16.5h5" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/>',gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="2" fill="currentColor"/><rect x="2.5" y="6.5" width="19" height="4.2" rx="1.6" fill="currentColor"/><path d="M12 6.5v14" stroke="rgba(255,255,255,.7)" stroke-width="2.4"/><path d="M12 6.5C10 2.5 6.5 3.5 7.6 6c.5 1 2.6.6 4.4.5zm0 0c2-4 5.5-3 4.4-.5-.5 1-2.6.6-4.4.5z" fill="currentColor"/>',gear:'<path d="M12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm8.2 4.4-1.9-.5a6.7 6.7 0 0 0-.6-1.5l1-1.7-1.7-1.7-1.7 1a6.7 6.7 0 0 0-1.5-.6L12.9 5h-2.4l-.5 1.9a6.7 6.7 0 0 0-1.5.6l-1.7-1-1.7 1.7 1 1.7a6.7 6.7 0 0 0-.6 1.5l-1.9.5v2.4l1.9.5c.1.5.3 1 .6 1.5l-1 1.7 1.7 1.7 1.7-1c.5.3 1 .5 1.5.6l.5 1.9h2.4l.5-1.9c.5-.1 1-.3 1.5-.6l1.7 1 1.7-1.7-1-1.7c.3-.5.5-1 .6-1.5l1.9-.5z" fill="currentColor"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>',x:'<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',vibe:'<rect x="8" y="3.5" width="8" height="17" rx="2.2" fill="currentColor"/><path d="M4 8v8M20 8v8M1.8 10v4M22.2 10v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',restart:'<path d="M18.5 8A7.5 7.5 0 1 0 19.5 13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><path d="M19 3.5V8.5h-5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',people:'<circle cx="9" cy="8" r="3.4" fill="currentColor"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0z" fill="currentColor"/><circle cx="17" cy="9" r="2.8" fill="currentColor" opacity=".7"/><path d="M16 14.5a5.5 5.5 0 0 1 6 5.5h-5z" fill="currentColor" opacity=".7"/>',clock:'<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 6.8V12l3.6 2.2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',finger:'<path d="M9.5 3.2c-1.3 0-2.1 1-2.1 2.2v7.3L5.8 11c-.9-.7-2.1-.5-2.6.4-.4.7-.2 1.4.4 2l4.2 4.3c.9 1.2 2.4 2.3 4.3 2.3h2.6c3 0 4.9-2.1 4.9-5.1v-3.9c0-1.1-.8-1.9-1.8-1.9-.4 0-.8.1-1.1.4-.2-.8-.9-1.3-1.7-1.3-.5 0-.9.2-1.2.5-.3-.7-.9-1.1-1.7-1.1-.4 0-.7.1-1 .3V5.4c0-1.2-.8-2.2-2.2-2.2z" fill="#fff" stroke="#233" stroke-width="1.4" stroke-linejoin="round"/>'};function at(i,t=22,e=""){return`<svg class="ico ${e}" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${ry[i]||""}</svg>`}var Dn={style:[{id:"city",name:"\u015Eehir Otob\xFCs\xFC",price:0,desc:"Klasik yuvarlak hatl\u0131 \u015Fehir otob\xFCs\xFC."},{id:"mini",name:"Minib\xFCs",price:250,desc:"K\xFC\xE7\xFCk, tombul ve sevimli."},{id:"school",name:"Okul Servisi",price:450,desc:"Siyah \u015Feritli, dur levhal\u0131 servis."},{id:"coach",name:"Konfor Otob\xFCs\xFC",price:800,desc:"Uzun caml\u0131, g\xFCm\xFC\u015F etekli yolcu otob\xFCs\xFC."}],palette:[{id:"vivid",name:"Canl\u0131",price:0,desc:"Varsay\u0131lan doygun renkler."},{id:"pastel",name:"Pastel",price:300,desc:"Yumu\u015Fak \u015Feker tonlar\u0131."},{id:"neon",name:"Neon",price:500,desc:"Parlak neon renkler."},{id:"retro",name:"Retro",price:350,desc:"Mat nostaljik tonlar."}],rim:[{id:"steel",name:"\xC7elik Jant",price:0,desc:"Standart \xE7elik."},{id:"gold",name:"Alt\u0131n Jant",price:200,desc:"Parlak alt\u0131n kaplama."},{id:"neon",name:"Neon Jant",price:300,desc:"Turkuaz parlayan jantlar."},{id:"chrome",name:"Krom Jant",price:450,desc:"Ayna gibi krom."}],trail:[{id:"dust",name:"Toz \u0130zi",price:0,desc:"Hafif toz bulutu."},{id:"sparkle",name:"Par\u0131lt\u0131 \u0130zi",price:250,desc:"Alt\u0131n par\u0131lt\u0131lar."},{id:"stars",name:"Y\u0131ld\u0131z \u0130zi",price:400,desc:"Renkli y\u0131ld\u0131zlar sa\xE7ar."},{id:"bubbles",name:"Baloncuk \u0130zi",price:300,desc:"Sabun k\xF6p\xFC\u011F\xFC baloncuklar\u0131."}],vipSkin:[{id:"gold",name:"Alt\u0131n VIP",price:0,desc:"Alt\u0131n detayl\u0131 klasik VIP."},{id:"platinum",name:"Platin VIP",price:600,desc:"G\xFCm\xFC\u015F-beyaz l\xFCks."},{id:"royal",name:"Kraliyet VIP",price:900,desc:"Mor g\xF6vde, alt\u0131n s\xFCsler."}]},ju=[["style","Otob\xFCs"],["palette","Renkler"],["rim","Jantlar"],["trail","Efekt"],["vipSkin","VIP"],["power","G\xFC\xE7"],["slot","Premium"]],Un={undo:{name:"Geri Al",desc:"Son hamleyi geri al\u0131r.",price:ee.undo},hint:{name:"\u0130pucu",desc:"Bir sonraki do\u011Fru otob\xFCs\xFC g\xF6sterir.",price:ee.hint},recall:{name:"Geri \xC7a\u011F\u0131r",desc:"Park eden otob\xFCs\xFC ba\u015Flang\u0131\xE7 yerine d\xF6nd\xFCr\xFCr.",price:ee.recall},call:{name:"Otob\xFCs \xC7a\u011F\u0131r",desc:"S\u0131radaki yolcunun renginde bir otob\xFCs\xFC park alan\u0131na \xE7a\u011F\u0131r\u0131r.",price:ee.call},extraSlot:{name:"Ek Park Yeri",desc:"Bu seviye i\xE7in bir park yeri a\xE7ar.",price:ee.extraSlot},moves:{name:"Ek Hamle",desc:"Hamle s\u0131n\u0131rl\u0131 seviyelerde +4 hamle.",price:ee.moves},time:{name:"Ek S\xFCre",desc:"S\xFCreli seviyelerde +30 saniye.",price:ee.time}},ka=[{coins:50},{coins:75},{coins:100,power:["undo",1]},{coins:125},{coins:150,power:["hint",2]},{coins:200},{coins:350,power:["call",2]}],ps=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;function Qu(i,t){let e=new Date(i+"T00:00:00"),n=new Date(t+"T00:00:00");return Math.round((n-e)/864e5)}var Ic=[{id:"levels3",text:"3 seviye tamamla",ev:"level",goal:3,reward:80},{id:"pass20",text:"20 yolcuyu otob\xFCse bindir",ev:"passenger",goal:20,reward:60},{id:"vip1",text:"Bir VIP otob\xFCs kullan",ev:"vip",goal:1,reward:90},{id:"puz5",text:"5 bulmacay\u0131 ba\u015Far\u0131yla tamamla",ev:"level",goal:5,reward:150},{id:"star3",text:"Bir seviyeyi 3 y\u0131ld\u0131zla bitir",ev:"threeStar",goal:1,reward:100},{id:"bus12",text:"12 otob\xFCs\xFC yolcu ile doldur",ev:"busFull",goal:12,reward:70},{id:"slot1",text:"Bir ek park yeri a\xE7",ev:"slot",goal:1,reward:60},{id:"pass50",text:"50 yolcuyu otob\xFCse bindir",ev:"passenger",goal:50,reward:120}],nr=[{id:"first",name:"\u0130lk Yolculuk",text:"\u0130lk seviyeyi tamamla",stat:"levels",goal:1,reward:50},{id:"lv10",name:"Yol Arkada\u015F\u0131",text:"10 seviye tamamla",stat:"levels",goal:10,reward:150},{id:"lv30",name:"\u015Eehir Ustas\u0131",text:"30 seviye tamamla",stat:"levels",goal:30,reward:400},{id:"pass100",name:"Kalabal\u0131k Ta\u015F\u0131y\u0131c\u0131",text:"100 yolcu ta\u015F\u0131",stat:"passengers",goal:100,reward:120},{id:"pass1000",name:"Metropol Hatt\u0131",text:"1000 yolcu ta\u015F\u0131",stat:"passengers",goal:1e3,reward:500},{id:"vip1",name:"K\u0131rm\u0131z\u0131 Hal\u0131",text:"Bir VIP otob\xFCs kullan",stat:"vip",goal:1,reward:100},{id:"slot1",name:"Geni\u015Fleme",text:"Bir ek park yeri a\xE7",stat:"slots",goal:1,reward:80},{id:"star10",name:"M\xFCkemmeliyet\xE7i",text:"10 seviyede 3 y\u0131ld\u0131z al",stat:"threeStars",goal:10,reward:300}];function Lc(i){let t=i.data,e=ps();if(t.quests.date===e&&t.quests.list.length)return!1;let n=La([...e].reduce((l,c)=>l*31+c.charCodeAt(0)>>>0,7)),s=Ic.slice();n.shuffle(s);let a=[...["levels3","pass20","vip1","puz5"].filter(()=>n()<.85)];for(let l of s)a.length<4&&!a.includes(l.id)&&a.push(l.id);let o=a.slice(0,4);return t.quests={date:e,list:o.map(l=>({id:l})),progress:{},claimed:{}},!0}var ms=i=>Ic.find(t=>t.id===i);var gs=class{constructor(t){this.container=t;let e=this.renderer=new ji({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=qs,e.shadowMap.enabled=!0,e.shadowMap.type=Ws,t.appendChild(e.domElement);let n=this.scene=new jn;n.environment=new Jn(e).fromScene(new ss,.04).texture,n.environmentIntensity=.4,n.add(new es(15660543,10465484,.65));let s=new _i(16774108,1.8);s.position.set(-3,6,4),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);let r=s.shadow.camera;r.left=-4,r.right=4,r.top=4,r.bottom=-4,n.add(s);let a=new et(new Qi(3.2,48),new Tt({color:15265531,roughness:.9}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a),this.stand=new re,n.add(this.stand),this.cam=new Me(32,1,.1,50),this.yaw=.6,this.auto=!0,this.t=0,this.model=null,this.running=!0;let o=e.domElement,l=null;o.addEventListener("pointerdown",h=>{l={x:h.clientX,yaw:this.yaw},this.auto=!1,o.setPointerCapture(h.pointerId)}),o.addEventListener("pointermove",h=>{l&&(this.yaw=l.yaw+(h.clientX-l.x)*.012)}),o.addEventListener("pointerup",()=>{l=null,setTimeout(()=>{this.auto=!0},1800)}),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let c=()=>{this.running&&(this.t+=.016,this.auto&&(this.yaw+=.012),this.model&&(this.stand.rotation.y=this.yaw,this.model.position.y=.02+Math.sin(this.t*2)*.01),this.renderer.render(this.scene,this.cam),this.raf=requestAnimationFrame(c))};c()}resize(){let t=this.container.clientWidth||300,e=this.container.clientHeight||220;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.cam.position.set(0,2.4,4.6),this.cam.lookAt(0,.45,0)}show({style:t="city",vip:e=!1,vipSkin:n="gold",rim:s="steel",palette:r="vivid",colorIndex:a=0,len:o=3}){this.model&&this.stand.remove(this.model);let l=ls(r)(a),c=ba({len:o,hex:l,style:t,vip:e,rim:s,vipSkin:n,seats:o*2,noArrow:!0});c.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let h=c.userData.dims.Lz;c.scale.setScalar(Math.min(1.5,3.1/h)),Js(c,[0,1,2,3,4,5].slice(0,o*2-1),ls(r)),this.model=c,this.stand.add(c)}dispose(){this.running=!1,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.renderer.forceContextLoss?.(),this.renderer.domElement.remove()}};var ti=(i,t=document)=>t.querySelector(i),ir=i=>"#"+i.toString(16).padStart(6,"0"),ay={easy:"KOLAY",normal:"NORMAL",hard:"ZOR",super:"\xC7OK ZOR"},Dc=i=>ay[i]||"",Fa=class{constructor(t){this.G=t,this.host=ti("#modalHost"),this.menuEl=ti("#menu"),this.toastEl=ti("#toasts"),this.floatEl=ti("#floaters"),this.modals=[]}toast(t,e=""){let n=document.createElement("div");for(n.className="toast "+e,n.textContent=t,this.toastEl.appendChild(n),setTimeout(()=>n.remove(),2500);this.toastEl.children.length>3;)this.toastEl.firstChild.remove()}floatText(t,e,n,s=""){let r=document.createElement("div");r.className="floater",r.style.left=e+"px",r.style.top=n+"px",r.innerHTML=(s?at(s,24):"")+t,this.floatEl.appendChild(r),setTimeout(()=>r.remove(),1300)}modal({title:t,head:e="",body:n="",foot:s="",closable:r=!0,onClose:a=null,cls:o=""}){let l=document.createElement("div");l.className="modal-bg",l.innerHTML=`<div class="sheet ${o}"><div class="sheet-head ${e}">${t}${r?`<button class="sheet-x" data-x aria-label="Kapat">${at("x",20)}</button>`:""}</div><div class="sheet-body">${n}</div>${s?`<div class="sheet-foot">${s}</div>`:""}</div>`,this.host.appendChild(l);let c={el:l,closed:!1,q:h=>l.querySelector(h),setBody:h=>{l.querySelector(".sheet-body").innerHTML=h},setFoot:h=>{let u=l.querySelector(".sheet-foot");u||(u=document.createElement("div"),u.className="sheet-foot",l.querySelector(".sheet").appendChild(u)),u.innerHTML=h},close:()=>{c.closed||(c.closed=!0,l.remove(),this.modals=this.modals.filter(h=>h!==c),c.preview?.dispose(),a?.())}};return l.addEventListener("click",h=>{h.target.closest("[data-x]")&&(this.G.sound.play("click"),c.close())}),this.modals.push(c),c}closeAll(){[...this.modals].forEach(t=>t.close())}get hasModal(){return this.modals.length>0}onAct(t,e){t.el.addEventListener("click",n=>{let s=n.target.closest("[data-act]");if(!s||s.disabled)return;let r=e[s.dataset.act];r&&(this.G.sound.play("click"),r(s.dataset,s,n))})}confirm({title:t,text:e,yes:n="Evet",no:s="Vazge\xE7",danger:r=!1}){return new Promise(a=>{let o=!1,l=h=>{o||(o=!0,c.close(),a(h))},c=this.modal({title:t,head:r?"red":"",body:`<p>${e}</p>`,foot:`<div class="row"><button class="btn gray" data-act="no">${s}</button><button class="btn ${r?"red":"green"}" data-act="yes">${n}</button></div>`,closable:!1,onClose:()=>l(!1)});this.onAct(c,{yes:()=>l(!0),no:()=>l(!1)})})}setCoins(t,e=!1){let n=t.toLocaleString("tr-TR");for(let s of[ti("#hudCoins"),ti("#menuCoins")])s&&(s.innerHTML=`${at("coin",26)}<span>${n}</span>`,e&&(s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse")))}coinPos(){let t=(ti("#hudCoins")||ti("#menuCoins"))?.getBoundingClientRect();return t?{x:t.left+t.width/2,y:t.bottom+6}:{x:200,y:80}}testAd(t,e){return new Promise(n=>{let s=!1,r=!1,a=this.modal({title:"\xD6d\xFCll\xFC Reklam",head:"purple",closable:!0,body:`<div class="adbox"><span class="testtag">TEST REKLAMI</span><div class="bigad">\xD6rnek Reklam<small>Geli\u015Ftirme modu: ger\xE7ek reklam de\u011Fildir. Yay\u0131n s\xFCr\xFCm\xFCnde AdMob kullan\u0131l\u0131r.</small></div><div class="pb"><i></i></div><p class="adt">\xD6d\xFCl i\xE7in bekle: <b class="sec">${Math.ceil(t/1e3)}</b> sn</p></div>`,foot:`<button class="btn green" data-act="claim" disabled>${at("check",22)} \xD6d\xFCl\xFC Al</button>`,onClose:()=>{s||(s=!0,n(r))}}),o=a.q(".pb i"),l=a.q(".sec"),c=performance.now(),h=setInterval(()=>{let d=Math.min(1,(performance.now()-c)/t);o.style.width=d*100+"%",l.textContent=Math.max(0,Math.ceil((t-(performance.now()-c))/1e3)),d>=1&&(clearInterval(h),r=!0,a.q("[data-act=claim]").disabled=!1,a.q(".adt").textContent="Reklam tamamland\u0131!")},80);this.onAct(a,{claim:()=>{r&&(clearInterval(h),s=!0,a.close(),n(!0))}});let u=a.close;a.close=()=>{clearInterval(h),u()}})}renderMenu(){let t=this.G,e=t.save.data,n=t.peekLevel(e.level),s=t.canClaimDaily(),r=t.hasClaimableQuest();this.menuEl.innerHTML=`
      <div class="menu-top">
        <div class="lvl-badge">Seviye ${e.level}</div>
        <button class="coin-chip" id="menuCoins" data-act="shop"></button>
        <button class="small-btn" data-act="settings" aria-label="Ayarlar">${at("gear",26)}</button>
      </div>
      <div class="logo"><b>BUS PUZZLE</b><i>DELUXE</i><br><small>3D</small></div>
      <div class="menu-mid"><button class="play-btn" data-act="play"><b>OYNA</b><small>Seviye ${e.level} \xB7 ${Dc(n.difficulty)}</small></button></div>
      <div class="menu-nav">
        <button class="nav-btn shop" data-act="shop">${at("shop",28)}Ma\u011Faza</button>
        <button class="nav-btn coll" data-act="collection">${at("bus",28)}Koleksiyon</button>
        <button class="nav-btn quest" data-act="quests">${at("list",28)}G\xF6revler${r?'<i class="dot"></i>':""}</button>
        <button class="nav-btn gift" data-act="daily">${at("gift",28)}G\xFCnl\xFCk${s?'<i class="dot"></i>':""}</button>
        <button class="nav-btn vip" data-act="vip">${at("vip",28)}VIP</button>
      </div>`,this.setCoins(e.coins)}bindMenu(){this.menuEl.addEventListener("click",t=>{let e=t.target.closest("[data-act]");e&&(this.G.sound.unlock(),this.G.sound.play("click"),{play:()=>this.G.startLevel(this.G.save.data.level),shop:()=>this.shop(),collection:()=>this.collection(),quests:()=>this.quests(),daily:()=>this.daily(),vip:()=>this.vipPanel(),settings:()=>this.settings(!1)}[e.dataset.act]?.())})}shop(t="style"){let e=this.G,n=this.modal({title:"Ma\u011Faza",head:"gold",cls:"shopsheet",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs">${ju.map(([c,h])=>`<button class="tab ${c===t?"on":""}" data-act="tab" data-id="${c}">${h}</button>`).join("")}</div>`,o="",l=`<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><span class="chip" style="border-color:#c98a00">${at("coin",18)} ${r.coins.toLocaleString("tr-TR")}</span></div>`;if(Dn[t])o=`<div class="grid">${Dn[t].map(c=>{let h=r.owned[t].includes(c.id),u=r.equipped[t]===c.id,d="";t==="palette"?d=`<div class="swatch">${Zs[c.id].slice(0,6).map(g=>`<i style="background:${ir(g)}"></i>`).join("")}</div>`:t==="style"?d=`<div style="color:#2f6bff">${at("bus",52)}</div>`:t==="rim"?d=`<div class="swatch" style="width:48px;height:48px;border-radius:50%;background:radial-gradient(#222 45%,${c.id==="gold"?"#ffc83a":c.id==="neon"?"#35f0ff":c.id==="chrome"?"#f5f8ff":"#cfd6de"} 48%)"></div>`:t==="trail"?d=`<div style="font-size:34px;line-height:42px">${{dust:"\u{1F4A8}",sparkle:"\u2728",stars:"\u2B50",bubbles:"\u{1FAE7}"}[c.id]}</div>`:d=`<div style="color:${ir(Ks[c.id].body)}">${at("vip",48)}</div>`;let f=u?`<button class="btn green" disabled>${at("check",16)} Kullan\u0131mda</button>`:h?`<button class="btn blue" data-act="equip" data-id="${c.id}">Kullan</button>`:`<button class="btn gold" data-act="buy" data-id="${c.id}">${at("coin",18)} ${c.price}</button>`;return`<div class="card ${u?"eq":""}">${h?"":`<span class="tag lock">${at("lock",10)}</span>`}${d}<div class="nm">${c.name}</div><div class="ds">${c.desc}</div>${f}</div>`}).join("")}</div>`;else if(t==="power")o=`<div class="list">${Object.entries(Un).map(([c,h])=>`<div class="item"><div style="color:#2f6bff">${at({undo:"undo",hint:"hint",recall:"recall",call:"call",extraSlot:"plus",moves:"play",time:"clock"}[c],30)}</div><div class="t"><b>${h.name} <span style="color:#c98a00">\xD7${r.powerups[c]||0}</span></b><small>${h.desc}</small></div><div style="display:flex;flex-direction:column;gap:5px"><button class="btn gold" data-act="buypower" data-id="${c}">${at("coin",16)} ${h.price}</button>${Fe.mode!=="off"?`<button class="btn green" data-act="adpower" data-id="${c}">${at("ad",16)} +1</button>`:""}</div></div>`).join("")}</div>`;else{let c=r.perm.slots;o=`<p>Kal\u0131c\u0131 park alanlar\u0131 t\xFCm seviyelerde a\xE7\u0131k kal\u0131r. Reklamla a\xE7\u0131lan alanlar ise yaln\u0131zca o seviyede ge\xE7erlidir.</p><div class="list">${ee.permSlot.map((h,u)=>`<div class="item"><div style="color:${u<c?"#2fd06a":"#7a4dff"}">${at(u<c?"check":"plus",34)}</div><div class="t"><b>Kal\u0131c\u0131 Park Yeri ${u+1}/3</b><small>${u<c?"A\xE7\u0131ld\u0131":u===c?"S\u0131radaki a\xE7\u0131l\u0131m":"\xD6nceki alan\u0131 a\xE7"}</small></div>${u<c?"":`<button class="btn gold" data-act="permslot" ${u===c?"":"disabled"}>${at("coin",16)} ${h}</button>`}</div>`).join("")}</div>`}n.setBody(a+'<div style="height:10px"></div>'+l+o)};return s(),this.onAct(n,{tab:r=>{t=r.id,s()},buy:r=>{e.buyItem(t,r.id)&&s()},equip:r=>{e.equip(t,r.id),s()},buypower:r=>{e.buyPower(r.id)&&s()},adpower:async r=>{await e.adPower(r.id)&&s()},permslot:()=>{e.buyPermSlot()&&s()}}),n}collection(){let t=this.G,e=this.modal({title:"Otob\xFCs Koleksiyonu",head:"green",body:""}),n=()=>{let r=t.save.data;return[...Dn.style.map(a=>({cat:"style",...a,owned:r.owned.style.includes(a.id),eq:r.equipped.style===a.id,color:"#2f6bff",kind:"Otob\xFCs"})),...Dn.vipSkin.map(a=>({cat:"vipSkin",...a,owned:r.owned.vipSkin.includes(a.id),eq:r.equipped.vipSkin===a.id,color:ir(Ks[a.id].body),kind:"VIP"}))]},s=()=>{let r=n(),a=r.filter(o=>o.owned).length;e.setBody(`<p style="text-align:center">A\xE7\u0131lan: <b>${a}/${r.length}</b></p><div class="grid">${r.map(o=>`<button class="card ${o.eq?"eq":""}" data-act="open" data-cat="${o.cat}" data-id="${o.id}" style="${o.owned?"":"filter:grayscale(.85)"}"><span class="tag ${o.owned?"":"lock"}">${o.owned?o.kind:at("lock",10)}</span><div style="color:${o.color}">${at(o.cat==="vipSkin"?"vip":"bus",56)}</div><div class="nm">${o.owned?o.name:"???"}</div><div class="ds">${o.owned?o.desc:`${o.price} jetonla a\xE7\u0131l\u0131r`}</div></button>`).join("")}</div>`)};s(),this.onAct(e,{open:r=>this.busDetail(r.cat,r.id,s)})}busDetail(t,e,n){let s=this.G,r=Dn[t].find(u=>u.id===e),a=this.modal({title:r.name,head:t==="vipSkin"?"gold":"blue",body:`<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center">${r.desc}</p>`,foot:""}),o=s.save.data,l=new gs(a.q(".preview"));a.preview=l,(()=>{let u=o.equipped;l.show(t==="vipSkin"?{vip:!0,vipSkin:e,rim:u.rim,len:3}:{style:e,rim:u.rim,palette:u.palette,colorIndex:0,len:e==="coach"?4:e==="mini"?2:3})})();let h=()=>{let u=o.owned[t].includes(e),d=o.equipped[t]===e;a.setFoot(d?`<button class="btn green" disabled>${at("check",20)} Kullan\u0131mda</button>`:u?'<button class="btn blue" data-act="equip">Kullan</button>':`<button class="btn gold" data-act="buy">${at("coin",20)} ${r.price} ile a\xE7</button>`)};h(),this.onAct(a,{equip:()=>{s.equip(t,e),h(),n?.()},buy:()=>{s.buyItem(t,e)&&(h(),n?.())}})}vipPanel(){let t=this.G,e=this.modal({title:"VIP & Premium",head:"gold",body:""}),n=()=>{let s=t.save.data;e.setBody(`
        <div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div>
        <p style="margin-top:10px"><b>VIP otob\xFCs</b> alt\u0131n detayl\u0131 \xF6zel bir ara\xE7t\u0131r: <b>her renkten yolcu al\u0131r</b>, \xF6zel VIP alan\u0131na park eder ve 8 yolcu ta\u015F\u0131r. Baz\u0131 seviyelerde sahnede bulunur; ayr\u0131ca oyun i\xE7inde \u201CVIP \xC7a\u011F\u0131r\u201D ile reklam izleyerek veya jetonla \xE7a\u011F\u0131rabilirsin. Temel seviyeler VIP olmadan da tamamlanabilir.</p>
        <div class="opts">${Object.entries(Ks).map(([a,o])=>{let l=s.owned.vipSkin.includes(a);return`<button class="opt ${s.equipped.vipSkin===a?"sel":""}" data-act="skin" data-id="${a}"><div class="dotc" style="background:${ir(o.body)}"></div>${o.label}<small style="color:#58649a">${l?s.equipped.vipSkin===a?"Kullan\u0131mda":"Kullan":Dn.vipSkin.find(c=>c.id===a).price+" \u{1FA99}"}</small></button>`}).join("")}</div>
        <div class="item"><div style="color:#7a4dff">${at("plus",30)}</div><div class="t"><b>Kal\u0131c\u0131 Premium park yerleri</b><small>${s.perm.slots}/3 a\xE7\u0131k \xB7 t\xFCm seviyelerde ge\xE7erli</small></div>${s.perm.slots<3?`<button class="btn gold" data-act="perm">${at("coin",16)} ${ee.permSlot[s.perm.slots]}</button>`:`<span style="color:#2fd06a">${at("check",28)}</span>`}</div>`);let r=e.preview||(e.preview=new gs(e.q(".preview")));r.show({vip:!0,vipSkin:s.equipped.vipSkin,rim:s.equipped.rim,len:3})};n(),this.onAct(e,{skin:s=>{if(t.save.data.owned.vipSkin.includes(s.id))t.equip("vipSkin",s.id);else if(!t.buyItem("vipSkin",s.id))return;e.preview?.dispose(),e.preview=null,n()},perm:()=>{t.buyPermSlot()&&(e.preview?.dispose(),e.preview=null,n())}})}vipPreview(t){let n=this.G.save.data,s=this.modal({title:"VIP Otob\xFCs",head:"gold",closable:!1,body:'<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center"><b>VIP otob\xFCs her renkten yolcu al\u0131r</b> ve \xF6zel VIP alan\u0131na park eder. Sahnedeki alt\u0131n otob\xFCs\xFC deneyebilirsin!</p>',foot:'<button class="btn green" data-act="ok">Harika!</button>',onClose:()=>t?.()}),r=new gs(s.q(".preview"));s.preview=r,r.show({vip:!0,vipSkin:n.equipped.vipSkin,rim:n.equipped.rim,len:3}),this.onAct(s,{ok:()=>s.close()})}quests(t="daily"){let e=this.G,n=this.modal({title:"G\xF6revler",head:"",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs" style="margin:-14px -14px 10px"><button class="tab ${t==="daily"?"on":""}" data-act="tab" data-id="daily">G\xFCnl\xFCk</button><button class="tab ${t==="ach"?"on":""}" data-act="tab" data-id="ach">Ba\u015Far\u0131lar</button></div>`,o="";t==="daily"?o=`<div class="list">${r.quests.list.map(l=>{let c=ms(l.id),h=Math.min(c.goal,r.quests.progress[l.id]||0),u=h>=c.goal,d=r.quests.claimed[l.id];return`<div class="item"><div style="color:#2f6bff">${at("list",30)}</div><div class="t"><b>${c.text}</b><small>${h}/${c.goal} \xB7 \xD6d\xFCl: ${c.reward} \u{1FA99}</small><div class="bar"><i style="width:${h/c.goal*100}%"></i></div></div>${d?`<span style="color:#2fd06a">${at("check",28)}</span>`:`<button class="btn ${u?"green":"gray"}" data-act="claimq" data-id="${l.id}" ${u?"":"disabled"}>Al</button>`}</div>`}).join("")}</div><p style="text-align:center;margin-top:10px;color:#58649a;font-size:13px">G\xF6revler her g\xFCn yenilenir.</p>`:o=`<div class="list">${nr.map(l=>{let c=Math.min(l.goal,r.stats[l.stat]||0),h=c>=l.goal,u=r.ach.claimed[l.id];return`<div class="item"><div style="color:#ff9a1f">${at("star",30)}</div><div class="t"><b>${l.name}</b><small>${l.text} \xB7 ${c}/${l.goal} \xB7 ${l.reward} \u{1FA99}</small><div class="bar"><i style="width:${c/l.goal*100}%"></i></div></div>${u?`<span style="color:#2fd06a">${at("check",28)}</span>`:`<button class="btn ${h?"green":"gray"}" data-act="claima" data-id="${l.id}" ${h?"":"disabled"}>Al</button>`}</div>`}).join("")}</div>`,n.setBody(a+o)};s(),this.onAct(n,{tab:r=>{t=r.id,s()},claimq:r=>{e.claimQuest(r.id),s()},claima:r=>{e.claimAch(r.id),s()}})}daily(){let t=this.G,e=this.modal({title:"G\xFCnl\xFCk \xD6d\xFCl",head:"orange",body:""});e.el.querySelector(".sheet-head").style.background="linear-gradient(#ffb23f,#ff7a1f)";let n=()=>{let s=t.save.data,r=t.canClaimDaily(),a=t.nextDailyIndex(),o=r?a:s.daily.streak;e.setBody(`<p style="text-align:center">Her g\xFCn gir, \xF6d\xFCl\xFCn\xFC al. Bir g\xFCn\xFC ka\xE7\u0131r\u0131rsan seri s\u0131f\u0131rlan\u0131r.</p><div class="days">${ka.map((l,c)=>`<div class="day ${c<o?"done":""} ${r&&c===a?"today":""} ${c===6?"big":""}">G\xFCn ${c+1}<b>${l.coins} \u{1FA99}</b>${l.power?`<small>+${l.power[1]} ${Un[l.power[0]].name}</small>`:""}${c<o?`<div style="color:#2fd06a">${at("check",20)}</div>`:""}</div>`).join("")}</div>`),e.setFoot(r?`<button class="btn green" data-act="claim">${at("gift",22)} \xD6d\xFCl\xFC Al</button>`:'<button class="btn gray" disabled>Bug\xFCnk\xFC \xF6d\xFCl al\u0131nd\u0131 \xB7 yar\u0131n gel!</button>')};n(),this.onAct(e,{claim:()=>{t.claimDaily(),n()}})}settings(t){let e=this.G,n=this.modal({title:"Ayarlar",head:"",body:""}),s=()=>{let r=e.save.data.settings;n.setBody(`
        <div class="switch"><span class="lab">${at("sound",24)} Ses efektleri</span><button class="tg ${r.sound?"on":""}" data-act="sound" aria-label="Ses"></button></div>
        <div class="switch"><span class="lab">${at("vibe",24)} Titre\u015Fim</span><button class="tg ${r.vibe?"on":""}" data-act="vibe" aria-label="Titre\u015Fim"></button></div>
        <div class="switch" style="display:block"><div class="lab" style="margin-bottom:8px">Grafik kalitesi</div><div class="seg">${[["low","D\xFC\u015F\xFCk"],["medium","Orta"],["high","Y\xFCksek"]].map(([a,o])=>`<button class="${r.quality===a?"on":""}" data-act="q" data-id="${a}">${o}</button>`).join("")}</div></div>
        <button class="btn blue" data-act="tut" style="margin-bottom:9px">E\u011Fitimi tekrar g\xF6ster</button>
        ${t?"":'<button class="btn red" data-act="reset">\u0130lerlemeyi s\u0131f\u0131rla</button>'}
        <p style="margin-top:12px;font-size:12px;color:#58649a;text-align:center">Reklam modu: <b>${Fe.mode==="test"?"TEST (geli\u015Ftirme)":Fe.mode==="admob"?"AdMob":"Kapal\u0131"}</b><br>T\xFCm 3D modeller ve sesler kodla \xFCretilmi\u015Ftir (\xF6zg\xFCn).</p>`)};return s(),this.onAct(n,{sound:()=>{e.save.data.settings.sound=!e.save.data.settings.sound,e.applySettings(),s()},vibe:()=>{e.save.data.settings.vibe=!e.save.data.settings.vibe,e.applySettings(),s()},q:r=>{e.save.data.settings.quality=r.id,e.applySettings(),s()},tut:()=>{e.resetTutorial(),this.toast("E\u011Fitim bir sonraki 1. ve 2. seviyede tekrar g\xF6sterilecek.","good")},reset:async()=>{await this.confirm({title:"Emin misin?",text:"T\xFCm ilerleme, jetonlar ve a\xE7\u0131lan \xF6\u011Feler silinecek.",yes:"S\u0131f\u0131rla",danger:!0})&&(e.resetProgress(),n.close())}}),n}pause(){let t=this.G,e=this.modal({title:"Duraklat\u0131ld\u0131",closable:!1,body:`<div class="list" style="gap:10px"><button class="btn green" data-act="resume">${at("play",22)} Devam Et</button><button class="btn orange" data-act="restart">${at("restart",22)} Yeniden Ba\u015Fla</button><button class="btn blue" data-act="settings">${at("gear",22)} Ayarlar</button><button class="btn gray" data-act="menu">${at("home",22)} Ana Men\xFC</button></div>`});this.onAct(e,{resume:()=>{e.close(),t.resume()},restart:()=>{e.close(),t.restart()},settings:()=>this.settings(!0),menu:()=>{e.close(),t.goMenu()}})}result({level:t,stars:e,coins:n,canDouble:s,rewardPower:r,final:a}){let o=this.G,l=this.modal({title:"SEV\u0130YE TAMAMLANDI!",head:"green",closable:!1,body:`<div class="stars">${[1,2,3].map(f=>at("star",58,f<=e?"on":"")).join("")}</div><div class="reward">${at("coin",40)}<span id="rcount">+0</span></div>${r?`<p style="text-align:center;color:#2f6bff">Bonus: +1 ${Un[r].name}!</p>`:""}<p style="text-align:center;color:#58649a">Seviye ${t} ba\u015Far\u0131yla ge\xE7ildi.</p>`,foot:`<button class="btn green" data-act="next">${at("play",22)} Sonraki Seviye</button>${s?`<button class="btn gold" data-act="double">${at("ad",22)} \xD6d\xFCl\xFC 2 katla <small>(iste\u011Fe ba\u011Fl\u0131)</small></button>`:""}<button class="btn gray" data-act="menu">${at("home",20)} Ana Men\xFC</button>`});l.el.querySelectorAll(".stars .ico").forEach((f,g)=>{f.style.animationDelay=g*.25+"s"});let c=l.q("#rcount"),h=performance.now(),u=0,d=()=>{let f=Math.min(1,(performance.now()-h)/900);u=Math.round(n*f),c.textContent="+"+u,f<1&&!l.closed?requestAnimationFrame(d):f>=1&&o.sound.play("coin")};requestAnimationFrame(d),this.onAct(l,{next:()=>{l.close(),o.nextLevel()},menu:()=>{l.close(),o.goMenu()},double:async(f,g)=>{await o.doubleReward(n)&&(g.remove(),c.textContent="+"+n*2)}})}fail({reason:t,canSlotAd:e,canUndo:n,undoCount:s,moveLimit:r,timeLimit:a}){let o=this.G,l={noslot:"Park yerlerin doldu ve \xE7\u0131kabilecek otob\xFCs kalmad\u0131!",stuck:"Hi\xE7bir otob\xFCs hareket edemiyor!",moves:"Hamle hakk\u0131n bitti!",time:"S\xFCre doldu!"}[t]||"Seviye ba\u015Far\u0131s\u0131z.",c=[];t==="moves"?c.push(`<button class="btn gold" data-act="moveAd">${at("ad",22)} Reklam izle: +4 hamle</button>`,`<button class="btn orange" data-act="moveCoin">${at("coin",22)} ${ee.moves} jeton: +4 hamle</button>`):t==="time"?c.push(`<button class="btn gold" data-act="timeAd">${at("ad",22)} Reklam izle: +30 sn</button>`,`<button class="btn orange" data-act="timeCoin">${at("coin",22)} ${ee.time} jeton: +30 sn</button>`):(e&&c.push(`<button class="btn gold" data-act="slotAd">${at("ad",22)} Reklam izle: ek park yeri a\xE7<small>(bu seviye)</small></button>`),n&&c.push(`<button class="btn blue" data-act="undo">${at("undo",22)} Hamleyi geri al ${s?`(${s})`:`(${ee.undo} \u{1FA99})`}</button>`));let h=this.modal({title:"Olmad\u0131!",head:"red",closable:!1,body:`<p style="text-align:center;font-size:17px">${l}</p><p style="text-align:center;color:#58649a;font-size:13px">\u0130lerlemen reklam hatalar\u0131ndan etkilenmez. Reklam izlemek iste\u011Fe ba\u011Fl\u0131d\u0131r.</p>`,foot:`${c.join("")}<div class="row"><button class="btn green" data-act="restart">${at("restart",20)} Yeniden</button><button class="btn gray" data-act="menu">${at("home",20)} Men\xFC</button></div>`});this.onAct(h,{restart:()=>{h.close(),o.restart()},menu:()=>{h.close(),o.goMenu()},slotAd:async()=>{await o.unlockSlot("ad")&&(h.close(),o.reviveAfter())},undo:()=>{o.useUndo(!0)&&(h.close(),o.reviveAfter())},moveAd:async()=>{await o.addMoves("ad")&&(h.close(),o.reviveAfter())},moveCoin:async()=>{await o.addMoves("coin")&&(h.close(),o.reviveAfter())},timeAd:async()=>{await o.addTime("ad")&&(h.close(),o.reviveAfter())},timeCoin:async()=>{await o.addTime("coin")&&(h.close(),o.reviveAfter())}})}slotOffer(t){let e=this.G,n=e.save.data,s=n.perm.slots,r=this.modal({title:"Ek Park Yeri",head:"green",onClose:t,body:"<p>Park yerleri dolduk\xE7a otob\xFCs \xE7\u0131karamazs\u0131n. <b>Bu seviye i\xE7in</b> ge\xE7ici bir yer a\xE7abilir ya da <b>kal\u0131c\u0131 Premium</b> yer sat\u0131n alabilirsin.</p>",foot:`<button class="btn gold" data-act="ad">${at("ad",22)} Reklam izle <small>(sadece bu seviye)</small></button>
        <button class="btn orange" data-act="coin">${at("coin",22)} ${ee.extraSlot} jeton <small>(sadece bu seviye)</small></button>
        ${n.powerups.extraSlot>0?`<button class="btn blue" data-act="item">${at("plus",22)} Envanterden kullan (${n.powerups.extraSlot})</button>`:""}
        ${s<3?`<button class="btn purple" data-act="perm">${at("vip",22)} Kal\u0131c\u0131 Premium alan \xB7 ${ee.permSlot[s]} \u{1FA99} <small>(${s+1}/3)</small></button>`:""}`});this.onAct(r,{ad:async()=>{await e.unlockSlot("ad")&&r.close()},coin:async()=>{await e.unlockSlot("coin")&&r.close()},item:async()=>{await e.unlockSlot("item")&&r.close()},perm:()=>{e.buyPermSlot(!0)&&r.close()}})}powerBuy(t){let e=this.G,n=Un[t],s=this.modal({title:n.name,head:"blue",body:`<p>${n.desc}</p><p style="color:#c98a00;font-weight:900">Elinde kalmad\u0131.</p>`,foot:`<button class="btn gold" data-act="buy">${at("coin",22)} Sat\u0131n al \xB7 ${n.price} jeton</button>${Fe.mode!=="off"?`<button class="btn green" data-act="ad">${at("ad",22)} Reklam izle: +1 hak</button>`:""}`});this.onAct(s,{buy:()=>{e.buyPower(t)&&s.close()},ad:async()=>{await e.adPower(t)&&s.close()}})}convertDialog(t){let e=this.G,n=null,s=this.modal({title:"Otob\xFCs\xFC De\u011Fi\u015Ftir",head:"purple",body:"",foot:""}),r=()=>{let a=t.colors.map(o=>`<button class="opt ${n?.type==="color"&&n.v===o?"sel":""}" data-act="pickc" data-v="${o}"><div class="dotc" style="background:${ir(Zs[e.save.data.equipped.palette][o])}"></div>${Ys[o].name}</button>`).join("");s.setBody(`<p>Se\xE7ili otob\xFCs\xFCn rengini veya boyutunu de\u011Fi\u015Ftir. Kapasite, boyut ve hareket kurallar\u0131 otomatik g\xFCncellenir; bulmaca bozulmaz.</p>
        ${t.colors.length?`<b>Renk (kapasite ${t.seats} sabit)</b><div class="opts" style="margin-top:6px">${a}</div>`:'<p style="color:#58649a">Kalan yolcu renkleri i\xE7in ba\u015Fka renk yok.</p>'}
        ${t.canGrow?`<b>T\xFCr</b><div class="opts" style="margin-top:6px"><button class="opt ${n?.type==="grow"?"sel":""}" data-act="pickg"><div style="color:#7a4dff">${at("bus",34)}</div>B\xFCy\xFCt<small style="color:#58649a">${t.seats} \u2192 ${t.seats+2} koltuk</small></button></div>`:""}
        <p style="font-size:12px;color:#58649a">Bu seviyede kalan d\xF6n\xFC\u015Ft\xFCrme hakk\u0131: <b>${t.left}</b></p>`),s.setFoot(n?`<button class="btn gold" data-act="ad">${at("ad",22)} Reklam izle ve uygula</button><button class="btn orange" data-act="coin">${at("coin",22)} ${ee.convert} jeton ile uygula</button>`:'<button class="btn gray" disabled>Bir se\xE7enek se\xE7</button>')};r(),this.onAct(s,{pickc:a=>{n={type:"color",v:+a.v},r()},pickg:()=>{n={type:"grow"},r()},ad:async()=>{await e.applyConvert(t.id,n,"ad")&&s.close()},coin:async()=>{await e.applyConvert(t.id,n,"coin")&&s.close()}})}};var td=i=>document.querySelector(i),Ba=class{constructor(t){this.G=t,this.el=td("#tut"),this.active=!1,this.steps=[],this.i=-1,this.cur=null,this.t=0,this.level=0}start(t){let e=this.G;this.stop(),this.level=t;let n=e.state,s=e.lvl.stages[0].solution||[];if(t===1)this.steps=[{kind:"say",pos:"mid",text:"Ho\u015F geldin! Otob\xFCsleri do\u011Fru s\u0131rayla \xE7\u0131kararak renkli yolcular\u0131 ta\u015F\u0131yacaks\u0131n.",ok:"Ba\u015Fla"},{kind:"tap",bus:0,text:"Otob\xFCs\xFC hareket ettirmek i\xE7in parma\u011F\u0131nla s\xFCr\xFCkle. \xD6nce \xE7\u0131k\u0131\u015F yolunu a\xE7!"},{kind:"wait",ms:2600,text:"Yolcular\u0131n rengini kontrol et. K\u0131rm\u0131z\u0131 yolcular k\u0131rm\u0131z\u0131 otob\xFCse biner.",focus:"queue"},{kind:"idle",text:"Harika! Yolcular otob\xFCse biniyor."},{kind:"tap",bus:1,text:"\u015Eimdi mavi otob\xFCs\xFCn yolu a\xE7\u0131k. S\xFCr\xFCkle!"},{kind:"idle",text:"Yolcular y\xFCr\xFCyerek biniyor\u2026"},{kind:"tap",bus:2,text:"Son otob\xFCs! Hepsini ta\u015F\u0131."},{kind:"end"}];else{let r=n.buses.find(a=>a.vip)?.id;this.steps=[{kind:"say",pos:"mid",text:"Bu seviyede daha fazla ara\xE7 ve s\u0131n\u0131rl\u0131 park yeri var. Yolu a\xE7\u0131k otob\xFCslerle ba\u015Fla!",ok:"Tamam"},{kind:"tap",bus:s[0],text:"Parma\u011F\u0131n g\xF6sterdi\u011Fi otob\xFCs\xFC s\xFCr\xFCkle."},{kind:"idle",text:"G\xFCzel! Yolcular biniyor."},{kind:"tap",bus:s[1],text:"S\u0131radaki otob\xFCs de haz\u0131r!"},{kind:"idle",text:""},{kind:"say",pos:"low",text:"Park yerleri s\u0131n\u0131rl\u0131d\u0131r! Hepsi dolarsa otob\xFCs \xE7\u0131karamazs\u0131n.",ok:"Anlad\u0131m",focus:"slots"},{kind:"slot",text:"Yer kalmazsa iste\u011Fe ba\u011Fl\u0131 reklam izleyerek ek park yeri a\xE7abilirsin. Zorunlu de\u011Fildir!"},{kind:"vip",bus:r},{kind:"end"}]}this.active=!0,this.i=-1,this.G.scene.tapFilter=r=>this.allow(r),this.next()}stop(){this.active=!1,this.cur=null,this.el.hidden=!0,this.el.innerHTML="",this.G.scene&&(this.G.scene.tapFilter=null,this.G.scene.clearGlows?.())}allow(t){return this.active?this.cur?.kind==="tap"?t===this.cur.bus:!1:!0}next(){this.i++;let t=this.steps[this.i];if(this.cur=t,this.t=0,this.G.scene.clearGlows(),!t||t.kind==="end"){this.finish();return}this.render(t),t.kind==="tap"&&this.G.scene.setGlow(t.bus,16769126),t.kind==="wait"&&(this.timer=setTimeout(()=>this.next(),t.ms)),t.kind==="vip"&&(t.bus!==void 0&&this.G.scene.setGlow(t.bus,16766042),this.el.hidden=!0,this.G.ui.vipPreview(()=>{this.G.ui.toast("Alt\u0131n VIP otob\xFCse dokunarak deneyebilirsin (iste\u011Fe ba\u011Fl\u0131).","good"),this.next()})),t.kind==="idle"&&this.G.scene.isBusy()===!1&&!this.G.scene.isTraveling()&&this.G.scene.idleFired&&(this.t=-1)}render(t){this.el.hidden=!1;let e=t.text?`<div class="tut-bubble ${t.pos||"top"}">${t.text}${t.kind==="say"?`<button class="btn green" data-t="ok">${t.ok||"Tamam"}</button>`:""}${t.kind==="slot"?`<div class="row"><button class="btn gray" data-t="skip">Atla</button><button class="btn gold" data-t="show">${at("ad",20)} G\xF6ster</button></div>`:""}</div>`:"";this.el.innerHTML=`${e}<div class="tut-ring" hidden><i></i></div><div class="tut-finger" hidden>${at("finger",54)}</div>`,this.ring=this.el.querySelector(".tut-ring"),this.fing=this.el.querySelector(".tut-finger"),this.el.querySelectorAll("[data-t]").forEach(n=>n.addEventListener("click",()=>{this.G.sound.play("click"),n.dataset.t==="show"?(this.G.ui.slotOffer(()=>this.next()),this.el.hidden=!0):this.next()}))}onMove(t){this.active&&this.cur?.kind==="tap"&&t===this.cur.bus&&(this.G.scene.setGlow(t,null),this.next())}onIdle(){this.active&&this.cur?.kind==="idle"&&this.next()}finish(){let t=this.G;this.stop(),t.state&&this.level===2&&t.ui.toast("E\u011Fitim tamamland\u0131! Seviyeyi bitirmek i\xE7in devam et.","good")}update(t){if(!this.active||!this.cur)return;this.t+=t;let e=this.cur,n=this.G.scene;if(e.kind==="idle"&&this.t>.4&&n.idleFired&&!n.isBusy()){this.next();return}let s=null,r=null;if(e.kind==="tap"){let o=n.busScreenPos(e.bus),l=this.G.state.buses[e.bus];if(o&&l&&l.st==="board"){let c=Ue[l.dir],h=n.busVis.get(e.bus).g.position,u=n.project(h.x+c.x*2.2,.6,h.z+c.y*2.2),d=this.t%1.5/1.5,f=d<.2?0:(d-.2)/.8;s={x:o.x+(u.x-o.x)*Math.min(1,f)*.45,y:o.y+(u.y-o.y)*Math.min(1,f)*.45,a:d<.12?d/.12:f>.85?(1-f)/.15:1,ring:o}}}else if(e.kind==="slot"){let o=this.G.state.slotOpen.findIndex(l=>!l);if(o>=0){let l=n.slotScreenPos(o),c=Math.sin(this.t*6)*6;s={x:l.x,y:l.y+c,a:1,ring:l}}}else if(e.focus==="slots"){let o=n.slotScreenPos(2);s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}else if(e.focus==="queue"){let o=n.queueScreenPos();s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}let a=td("#stage").getBoundingClientRect();s&&this.fing?(this.fing.hidden=!1,this.fing.style.opacity=s.a,this.fing.style.transform=`translate(${a.left+s.x}px,${a.top+s.y}px)`,this.ring.hidden=!1,this.ring.style.transform=`translate(${a.left+s.ring.x}px,${a.top+s.ring.y}px)`):this.fing&&(this.fing.hidden=!0,this.ring.hidden=!0)}};var ce=i=>document.querySelector(i),oy=[["undo","Geri Al","undo"],["hint","\u0130pucu","hint"],["recall","Geri \xC7a\u011F\u0131r","recall"],["call","\xC7a\u011F\u0131r","call"],["convert","De\u011Fi\u015Ftir","convert"],["vipcall","VIP","vip"]],ed=220,za=class{constructor(t={}){this.save=new Ua,this.sound=new Na,this.ui=new Fa(this),this.ads=new Oa(this.ui);let e=this.save.data;this.sound.setSound(e.settings.sound),this.sound.setVibe(e.settings.vibe),this.scene=new Ia(ce("#stage"),{quality:e.settings.quality,preserve:!!t.preserve}),this.tut=new Ba(this),this.phase="menu",this.paused=!1,this.adOpen=!1,this.mode=null,this.levelCache=new Map,this.snapshots=[],this.hintTimer=null,Lc(this.save),this.save.save(),this.bindScene(),this.bindHud(),this.ui.bindMenu(),this.goMenu(!0)}peekLevel(t){return this.levelCache.has(t)||this.levelCache.set(t,Ku(t)),this.levelCache.get(t)}bindScene(){let t=this.scene;t.sfx=e=>this.sound.play(e),t.onBusTap=e=>this.handleTap(e),t.onTapRejected=e=>{this.ui.toast("\xD6nce parma\u011F\u0131n g\xF6sterdi\u011Fi otob\xFCs\xFC s\xFCr\xFCkle."),t.shakeBus(e),this.sound.play("error")},t.onSlotTap=e=>this.handleSlotTap(e),t.onIdle=()=>this.onIdle(),t.onBoarded=(e,n)=>{let s=this.save.data.stats;s.passengers++,this.emit("passenger",1,!1),this.refreshProgress()},t.onBusDepart=()=>{this.save.data.stats.buses++,this.emit("busFull",1,!1)},t.onBusArrive=e=>{e.vip&&!this.vipCounted&&(this.vipCounted=!0,this.save.data.stats.vip++,this.emit("vip",1),this.ui.toast("VIP otob\xFCs yolcular\u0131 her renkten al\u0131r!","good"))}}bindHud(){ce("#btnPause").innerHTML=at("pause",26),ce("#btnPause").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.pause())}),ce("#hudCoins").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.ui.shop("power"))}),ce("#chipMoves").addEventListener("click",()=>this.offerMoves()),ce("#chipTime").addEventListener("click",()=>this.offerTime()),ce("#powerBar").addEventListener("click",t=>{let e=t.target.closest("[data-p]");e&&this.onPower(e.dataset.p)}),ce("#modeBanner").addEventListener("click",t=>{t.target.closest("[data-cancel]")&&this.setMode(null)})}renderPowerBar(){let t=this.save.data;ce("#powerBar").innerHTML=oy.map(([e,n,s])=>{let r="";if(["undo","hint","recall","call"].includes(e)){let a=t.powerups[e];r=`<span class="cnt ${a?"":"zero"}">${a||"+"}</span>`}else r=`<span class="cnt ad">${at("ad",12)}</span>`;return`<button class="pw ${e}" data-p="${e}" aria-label="${n}"><span class="btn">${at(s,28)}</span>${r}<span>${n}</span></button>`}).join("")}refreshHud(){let t=this.lvl;t&&(ce("#lvlName").textContent="SEV\u0130YE "+this.levelN,ce("#lvlDiff").textContent=Dc(t.difficulty)+(t.stages.length>1?` \xB7 A\u015EAMA ${this.stageIdx+1}/${t.stages.length}`:""),this.ui.setCoins(this.save.data.coins),this.renderPowerBar(),this.refreshProgress(),this.refreshChips())}refreshProgress(){if(!this.lvl||!this.state)return;let t=this.lvl.stages.reduce((n,s)=>n+s.queue.length,0),e=this.prevPassengers+this.state.qi;ce("#progBar").style.width=(t?e/t*100:0)+"%",ce("#progTxt").textContent=`${e}/${t} yolcu`}refreshChips(){let t=ce("#chipMoves"),e=ce("#chipTime");if(this.state&&this.state.moveLimit!==null){t.hidden=!1;let n=this.state.moveLimit-this.state.moves;t.innerHTML=`${at("play",14)} Hamle ${this.state.moves}/${this.state.moveLimit}`,t.classList.toggle("warn",n<=2)}else t.hidden=!0;if(this.timeLeft!==null){e.hidden=!1;let n=Math.max(0,Math.ceil(this.timeLeft));e.innerHTML=`${at("clock",14)} ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,e.classList.toggle("warn",n<=15)}else e.hidden=!0}setMode(t,e){this.mode=t;let n=ce("#modeBanner");if(this.scene.clearGlows(),!t){n.hidden=!0;return}if(n.hidden=!1,n.innerHTML=`<span>${e}</span><button data-cancel>\u0130ptal</button>`,t==="recall")for(let s of this.state.buses)s.st==="parked"&&s.arrived&&this.scene.setGlow(s.id,8257472);if(t==="convert")for(let s of this.state.buses)s.st==="board"&&!s.vip&&this.scene.setGlow(s.id,13215743)}goMenu(t=!1){this.tut.stop(),this.ui.closeAll(),this.setMode(null),this.phase="menu",this.paused=!1,ce("#hud").hidden=!0,ce("#app").classList.add("menu-mode"),ce("#menu").hidden=!1,this.cosApply();let e=this.save.data.level,n=this.peekLevel(e);this.state=Qs(n.stages[0],{slotsOpen:Math.min(7,(n.slotsBase||4)+this.save.data.perm.slots)}),this.scene.loadStage(this.state),this.lvl=null,this.ui.renderMenu(),t&&setTimeout(()=>{this.phase==="menu"&&this.canClaimDaily()&&!this.ui.hasModal&&this.ui.daily()},900)}cosApply(){this.scene.setCosmetics(this.save.data.equipped)}startLevel(t){this.ui.closeAll(),this.sound.unlock(),this.setMode(null);let e=this.save.data;this.levelN=t,this.lvl=this.peekLevel(t),this.stageIdx=0,this.assists=0,this.prevPassengers=0,this.vipCounted=!1,this.paused=!1,e.temp.level!==t&&(e.temp={level:t,slots:[],conv:0,vipCalls:0}),this.extraMoves=0,this.timeLeft=this.lvl.timeLimit??null,this.cosApply(),this.beginStage(0,null),this.phase="play",ce("#menu").hidden=!0,ce("#hud").hidden=!1,ce("#app").classList.remove("menu-mode"),this.refreshHud();let n=e.tutorial.enabled;t===1&&n&&!e.tutorial.l1?this.tut.start(1):t===2&&n&&!e.tutorial.l2?this.tut.start(2):this.tut.stop(),this.save.save()}beginStage(t,e){this.finalPending=!1,this.pendingTaps=[];let n=this.lvl,s=n.stages[t],r=this.save.data,a=s.slots??n.slotsBase??4,o=Qs(s,{slotsOpen:Math.min(7,a+r.perm.slots),moveLimit:n.moveLimit?n.moveLimit+this.extraMoves:null});e&&e.forEach((l,c)=>{l&&(o.slotOpen[c]=!0)});for(let l of r.temp.slots)o.slotOpen[l]=!0;this.state=o,this.snapshots=[],this.stageIdx=t,this.scene.forceDepart=!1,this.scene.loadStage(o,r.temp.slots),this.refreshHud()}restart(){this.ui.closeAll();let t=this.save.data;t.temp={level:this.levelN,slots:[],conv:0,vipCalls:0},this.startLevel(this.levelN)}nextLevel(){this.startLevel(this.levelN+1)}pause(){this.paused=!0,this.ui.pause()}resume(){this.paused=!1}frame(t){this.scene.inputLocked=this.phase!=="play"||this.ui.hasModal||this.paused,this.scene.update(this.paused?0:t),this.phase==="play"&&!this.paused&&!this.adOpen&&!this.ui.hasModal&&this.timeLeft!==null&&(this.timeLeft-=t,this.refreshChipsThrottled(t),this.timeLeft<=0&&(this.timeLeft=0,this.refreshChips(),this.fail("time"))),this.phase==="play"&&this.tut.update(t),this.pendingTaps?.length&&this.phase==="play"&&!this.paused&&!this.mode&&!this.ui.hasModal&&!this.scene.isBusy()?this.handleTap(this.pendingTaps.shift()):this.pendingTaps?.length&&this.phase!=="play"&&(this.pendingTaps.length=0)}refreshChipsThrottled(t){this._ct=(this._ct||0)+t,this._ct>.25&&(this._ct=0,this.refreshChips())}handleTap(t){if(this.phase!=="play"||this.paused)return;if(this.mode==="convert"){this.openConvert(t);return}if(this.mode==="recall")return;if(this.scene.isTraveling()){this.queueTap(t);return}let e=this.state,n=In(e),s=wa(e,t);if(this.scene.clearGlows(),s.ok)this.snapshots.push(n),this.snapshots.length>40&&this.snapshots.shift(),this.scene.startDriveToSlot(t,s.slot),this.tut.onMove(t),this.refreshChips(),e.buses[t].vip&&this.ui.toast("VIP otob\xFCs yola \xE7\u0131kt\u0131!","good");else if(s.reason==="blocked"){this.scene.bump(t,s.blockers);for(let r of s.blockers)this.scene.flashBus(r,16731469,.7);this.refreshChips(),e.moveLimit!==null&&(this.scene.idleFired=!1)}else if(s.reason==="noslot"){if(this.scene.isBusy()){this.queueTap(t);return}this.sound.play("error"),this.ui.toast("Park yerleri dolu! + alanlardan ek yer a\xE7abilirsin.","bad"),this.scene.shakeBus(t)}else s.reason==="vipfull"?(this.sound.play("error"),this.ui.toast("VIP alan\u0131 dolu.","bad")):s.reason==="limit"&&(this.scene.idleFired=!1)}queueTap(t){let e=this.state.buses[t];this.pendingTaps||(this.pendingTaps=[]),!(!e||e.st!=="board"||this.pendingTaps.includes(t)||this.pendingTaps.length>=3)&&(this.pendingTaps.push(t),this.scene.flashBus(t,8118891,.35))}handleSlotTap(t){if(this.phase!=="play"||this.paused)return;let e=this.state;if(this.mode==="recall"){let n=t==="V"?e.vipSlot:e.slots[t];if(n==null){this.ui.toast("Bu alanda otob\xFCs yok.");return}this.doRecall(n);return}if(t==="V"){this.ui.toast("VIP alan\u0131: alt\u0131n VIP otob\xFCsler buraya park eder.");return}if(!e.slotOpen[t]){if(this.tut.active&&this.tut.cur?.kind!=="slot")return;this.sound.play("click"),this.ui.slotOffer()}}onIdle(){if(this.phase==="transition"){this.state.buses.some(e=>e.st==="parked")||(this.finalPending?(this.finalPending=!1,this.levelComplete()):this.nextStage());return}if(this.phase!=="play")return;this.tut.onIdle();let t=Ta(this.state);t.status==="won"?this.stageDone():t.status==="lost"&&this.fail(t.reason)}stageDone(){this.stageIdx+1<this.lvl.stages.length?(this.phase="transition",this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop(),this.sound.play("coin"),this.ui.toast("A\u015Fama tamamland\u0131!","good"),this.state.buses.some(t=>t.st==="parked")||this.nextStage()):this.state.buses.some(t=>t.st==="parked")?(this.phase="transition",this.finalPending=!0,this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop()):this.levelComplete()}nextStage(){let t=this.state.slotOpen.slice();this.prevPassengers+=this.state.queue.length;let e=ce("#stageBanner");e.hidden=!1,e.textContent=`A\u015EAMA ${this.stageIdx+2}/${this.lvl.stages.length}`,setTimeout(()=>{e.hidden=!0},1800),this.beginStage(this.stageIdx+1,t),this.phase="play",this.scene.idleFired=!0}fail(t){if(this.phase!=="play")return;this.pendingTaps=[],this.phase="ended",this.tut.stop(),this.setMode(null),this.sound.play("lose");let e=this.state,n=this.save.data,s=e.slotOpen.some(r=>!r)&&Fe.mode!=="off";setTimeout(()=>{this.phase==="ended"&&this.ui.fail({reason:t,canSlotAd:s,canUndo:this.snapshots.length>0,undoCount:n.powerups.undo})},600)}reviveAfter(){this.phase="play",this.scene.idleFired=!1,this.refreshHud()}levelComplete(){this.phase="ended",this.tut.stop(),this.setMode(null);let t=this.save.data,e=this.levelN;this.scene.celebrate();let n=this.assists===0?3:this.assists<=2?2:1,s=40+n*10+Math.min(80,e*2);t.completed[e]=Math.max(t.completed[e]||0,n),t.level=Math.max(t.level,e+1),t.stats.levels++,n===3&&t.stats.threeStars++;let r=null;e%5===0&&(r=["undo","hint","recall","call","extraSlot"][e/5%5],t.powerups[r]++),e===1&&(t.tutorial.l1=!0),e===2&&(t.tutorial.l2=!0),this.emit("level",1,!1),n===3&&this.emit("threeStar",1,!1),this.addCoins(s,!1),this.save.save(!0),setTimeout(()=>this.ui.result({level:e,stars:n,coins:s,canDouble:Fe.mode!=="off",rewardPower:r}),1800)}addCoins(t,e=!0){let n=this.save.data;if(n.coins+=t,n.stats.coinsEarned+=t,this.ui.setCoins(n.coins,!0),this.save.save(),e){let s=this.ui.coinPos();this.ui.floatText("+"+t,s.x,s.y+20,"coin"),this.sound.play("coin")}}spendCoins(t){let e=this.save.data;return e.coins<t?(this.ui.toast("Yeterli jetonun yok!","bad"),this.sound.play("error"),!1):(e.coins-=t,this.ui.setCoins(e.coins,!0),this.save.save(),!0)}buyItem(t,e){let n=Dn[t].find(r=>r.id===e),s=this.save.data;return!n||s.owned[t].includes(e)||!this.spendCoins(n.price)?!1:(s.owned[t].push(e),s.equipped[t]=e,this.cosApply(),this.save.save(!0),this.ui.toast(`${n.name} sat\u0131n al\u0131nd\u0131 ve kullan\u0131ma al\u0131nd\u0131!`,"good"),this.sound.play("unlock"),!0)}equip(t,e){let n=this.save.data;n.owned[t].includes(e)&&(n.equipped[t]=e,this.cosApply(),this.save.save(!0),this.phase==="menu"&&this.scene.loadStage(this.state))}buyPower(t){let e=Un[t];return this.spendCoins(e.price)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${e.name}`,"good"),!0):!1}async adPower(t){return await this.requestAd("power-"+t)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${Un[t].name}`,"good"),!0):!1}buyPermSlot(t=!1){let e=this.save.data,n=e.perm.slots;if(n>=3||!this.spendCoins(ee.permSlot[n]))return!1;if(e.perm.slots++,e.stats.slots++,this.emit("slot",1,!1),this.phase==="play"&&this.state){let s=_c(this.state);s>=0&&this.scene.unlockSlotFx(s,!1)}return this.save.save(!0),this.ui.toast("Kal\u0131c\u0131 Premium park yeri a\xE7\u0131ld\u0131!","good"),!0}async requestAd(t){if(!this.ads.available())return this.ui.toast("Reklam servisi haz\u0131r de\u011Fil. \xD6d\xFCl verilmedi.","bad"),!1;this.adOpen=!0;let e=await this.ads.showRewarded(t);return this.adOpen=!1,e.ok?this.ads.consume(e.token)?(this.save.data.stats.ads++,this.save.save(),!0):!1:(this.ui.toast(e.reason==="cancelled"?"Reklam tamamlanmad\u0131, \xF6d\xFCl verilmedi.":"Reklam y\xFCklenemedi. Daha sonra tekrar dene.","bad"),!1)}async doubleReward(t){return await this.requestAd("double-reward")?(this.addCoins(t,!1),this.sound.play("coin"),!0):!1}canClaimDaily(){return this.save.data.daily.lastClaim!==ps()}nextDailyIndex(){let t=this.save.data.daily;return t.lastClaim&&Qu(t.lastClaim,ps())===1?t.streak%7:0}claimDaily(){if(!this.canClaimDaily())return;let t=this.save.data,e=this.nextDailyIndex(),n=ka[e];t.daily.streak=e+1,t.daily.lastClaim=ps(),this.addCoins(n.coins,!1),n.power&&(t.powerups[n.power[0]]+=n.power[1]),this.save.save(!0),this.sound.play("coin"),this.ui.toast(`+${n.coins} jeton${n.power?` ve +${n.power[1]} ${Un[n.power[0]].name}`:""}!`,"good"),this.ui.renderMenu()}emit(t,e=1,n=!0){let s=this.save.data.quests;Lc(this.save);for(let r of s.list){let a=ms(r.id);a&&a.ev===t&&(s.progress[r.id]=(s.progress[r.id]||0)+e)}n&&this.save.save()}hasClaimableQuest(){let t=this.save.data;return t.quests.list.some(e=>{let n=ms(e.id);return(t.quests.progress[e.id]||0)>=n.goal&&!t.quests.claimed[e.id]})||nr.some(e=>(t.stats[e.stat]||0)>=e.goal&&!t.ach.claimed[e.id])}claimQuest(t){let e=this.save.data,n=ms(t);!n||e.quests.claimed[t]||(e.quests.progress[t]||0)<n.goal||(e.quests.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}claimAch(t){let e=this.save.data,n=nr.find(s=>s.id===t);!n||e.ach.claimed[t]||(e.stats[n.stat]||0)<n.goal||(e.ach.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}applySettings(){let t=this.save.data.settings;this.sound.setSound(t.sound),this.sound.setVibe(t.vibe),this.scene.setQuality(t.quality),this.save.save(!0)}resetTutorial(){let t=this.save.data.tutorial;t.l1=!1,t.l2=!1,t.enabled=!0,this.save.save(!0)}resetProgress(){this.save.reset(),this.sound.setSound(!0),this.goMenu(),this.ui.toast("\u0130lerleme s\u0131f\u0131rland\u0131.")}onPower(t){if(this.phase!=="play"||this.paused)return;if(this.tut.active){this.ui.toast("\xD6nce e\u011Fitimi tamamla.");return}this.sound.play("click"),this.mode&&this.setMode(null);let e=this.save.data;if(["undo","hint","recall","call"].includes(t)&&e.powerups[t]<=0){this.ui.powerBuy(t);return}if(this.scene.isBusy()&&t!=="hint"){this.ui.toast("Animasyon bitsin, sonra dene.");return}switch(t){case"undo":this.doUndo()&&this.usePower("undo");break;case"hint":this.doHint()&&this.usePower("hint");break;case"recall":this.setMode("recall","Geri \xE7a\u011F\u0131rmak istedi\u011Fin park eden otob\xFCse dokun");break;case"call":this.doCall()&&this.usePower("call");break;case"convert":this.startConvertMode();break;case"vipcall":this.offerVipCall();break;default:break}}usePower(t){let e=this.save.data;e.powerups[t]>0&&e.powerups[t]--,this.assists++,this.save.save(),this.renderPowerBar()}doUndo(){if(!this.snapshots.length)return this.ui.toast("Geri al\u0131nacak hamle yok."),!1;let t=this.snapshots.pop(),e=this.save.data;for(let n of e.temp.slots)t.slotOpen[n]=!0;return this.state=t,this.scene.loadStage(t,e.temp.slots),this.refreshHud(),this.sound.play("whoosh"),this.scene.fx.ring(0,-5.2,8246271,.5,5,.8),!0}useUndo(t){let e=this.save.data;return this.snapshots.length?e.powerups.undo>0?this.doUndo()?(e.powerups.undo--,this.assists++,this.save.save(),!0):!1:this.spendCoins(ee.undo)?(this.assists++,this.doUndo()):!1:(this.ui.toast("Geri al\u0131nacak hamle yok."),!1)}doHint(){let t=Cc(this.state,{useVip:!1,maxNodes:25e4});return!t.solved||!t.order.length?(this.ui.toast("Bu durumda \xE7\xF6z\xFCm yok. Geri al ya da yeniden ba\u015Fla!","bad"),!1):(this.scene.clearGlows(),this.scene.setGlow(t.order[0],16769126),this.sound.play("unlock"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.scene.clearGlows(),5e3),this.ui.toast("Parlayan otob\xFCs\xFC \xE7\u0131kar!","good"),!0)}doRecall(t){let e=In(this.state),n=Uu(this.state,t);if(!n.ok){this.ui.toast(n.reason==="occupied"?"Ba\u015Flang\u0131\xE7 yeri dolu, geri \xE7a\u011Fr\u0131lamaz.":"Bu otob\xFCs geri \xE7a\u011Fr\u0131lamaz.","bad"),this.sound.play("error");return}this.snapshots.push(e),this.scene.animateRecall(t),this.setMode(null),this.usePower("recall"),this.scene.idleFired=!1}doCall(){let t=In(this.state),e=Nu(this.state);return e.ok?(this.snapshots.push(t),this.scene.startCraneToSlot(e.id,e.slot),this.refreshChips(),!0):(this.ui.toast(e.reason==="noslot"?"Park yeri yok!":"S\u0131radaki yolcunun renginde otob\xFCs kalmad\u0131.","bad"),this.sound.play("error"),!1)}startConvertMode(){if(this.save.data.temp.conv>=2){this.ui.toast("Bu seviyede d\xF6n\xFC\u015Ft\xFCrme hakk\u0131n bitti.","bad");return}this.setMode("convert","D\xF6n\xFC\u015Ft\xFCrmek istedi\u011Fin otob\xFCse dokun")}openConvert(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return;if(n.vip){this.ui.toast("VIP otob\xFCsler d\xF6n\xFC\u015Ft\xFCr\xFClemez.");return}let r=[...new Set(e.queue.slice(e.qi))].filter(a=>a!==n.color);this.ui.convertDialog({id:t,colors:r,seats:n.seats,canGrow:!!bc(e,t),left:2-s.temp.conv})}async applyConvert(t,e,n){if(!e)return!1;let s=this.state,r=this.save.data,a=In(s);e.type==="color"?Mc(a,t,e.v):Sc(a,t);let o=Cc(a,{useVip:!1,maxNodes:15e4});if(!o.solved&&!o.aborted)return this.ui.toast("Bu d\xF6n\xFC\u015F\xFCm seviyeyi \xE7\xF6z\xFCms\xFCz yapar, ba\u015Fka se\xE7enek dene.","bad"),!1;if(n==="ad"){if(!await this.requestAd("convert"))return!1}else if(!this.spendCoins(ee.convert))return!1;let l=In(s);return(e.type==="color"?Mc(s,t,e.v):Sc(s,t)).ok?(this.snapshots.push(l),e.type==="color"?this.scene.convertFx(t,"color"):this.scene.rebuildBus(t),r.temp.conv++,this.assists++,this.save.save(),this.setMode(null),this.ui.toast("Otob\xFCs d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC!","good"),!0):(this.ui.toast("D\xF6n\xFC\u015Ft\xFCrme uygulanamad\u0131.","bad"),!1)}offerVipCall(){let t=this.state,e=this.save.data;if(t.vipSlot!==null){this.ui.toast("VIP alan\u0131 zaten dolu.");return}if(e.temp.vipCalls>=2){this.ui.toast("Bu seviyede VIP \xE7a\u011F\u0131rma hakk\u0131n bitti.");return}let n=this.ui.modal({title:"VIP \xC7a\u011F\u0131r",head:"gold",body:"<p>Alt\u0131n VIP otob\xFCs gelip VIP alan\u0131na park eder ve <b>her renkten yolcu</b> al\u0131r (8 koltuk). Bu seviye i\xE7in ge\xE7erlidir.</p>",foot:`<button class="btn gold" data-act="ad">${at("ad",22)} Reklam izle</button><button class="btn orange" data-act="coin">${at("coin",22)} ${ed} jeton</button>`});this.ui.onAct(n,{ad:async()=>{await this.callVip("ad")&&n.close()},coin:async()=>{await this.callVip("coin")&&n.close()}})}async callVip(t){let e=this.state;if(e.vipSlot!==null)return!1;if(t==="ad"){if(!await this.requestAd("vip-call"))return!1}else if(!this.spendCoins(ed))return!1;let n=In(e),s=Ou(e);return s.ok?(this.snapshots.push(n),this.scene.dropVip(e.buses[s.id]),this.save.data.temp.vipCalls++,this.assists++,this.save.save(),!0):!1}async unlockSlot(t){let e=this.state,n=this.save.data;if(!e.slotOpen.some(r=>!r))return this.ui.toast("T\xFCm park yerleri zaten a\xE7\u0131k."),!1;if(t==="ad"){if(!await this.requestAd("extra-slot"))return!1}else if(t==="coin"){if(!this.spendCoins(ee.extraSlot))return!1}else if(t==="item"){if(n.powerups.extraSlot<=0)return!1;n.powerups.extraSlot--}let s=_c(e);return s<0?!1:(n.temp.slots.push(s),n.stats.slots++,this.emit("slot",1,!1),this.assists++,this.scene.unlockSlotFx(s,!0),this.save.save(!0),this.ui.toast("Ek park yeri a\xE7\u0131ld\u0131! (sadece bu seviye)","good"),this.renderPowerBar(),!0)}async addMoves(t){if(t==="ad"){if(!await this.requestAd("extra-moves"))return!1}else if(!this.spendCoins(ee.moves))return!1;return this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),!0}async addTime(t){if(t==="ad"){if(!await this.requestAd("extra-time"))return!1}else if(!this.spendCoins(ee.time))return!1;return this.timeLeft=(this.timeLeft||0)+30,this.assists++,this.refreshChips(),!0}offerMoves(){if(this.phase!=="play"||this.state.moveLimit===null)return;let t=this.save.data;t.powerups.moves>0?(t.powerups.moves--,this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),this.ui.toast("+4 hamle","good"),this.save.save()):this.ui.toast(`Hamle bitince reklam veya ${ee.moves} jetonla +4 hamle alabilirsin.`)}offerTime(){if(this.phase!=="play"||this.timeLeft===null)return;let t=this.save.data;t.powerups.time>0?(t.powerups.time--,this.timeLeft+=30,this.assists++,this.refreshChips(),this.ui.toast("+30 saniye","good"),this.save.save()):this.ui.toast(`S\xFCre bitince reklam veya ${ee.time} jetonla +30 sn alabilirsin.`)}};var sd=new URLSearchParams(location.search),Ne=new za({preserve:sd.has("shot")});window.__game=Ne;var nd=performance.now();function rd(i){let t=Math.min(.1,(i-nd)/1e3);nd=i;try{Ne.frame(t)}catch(e){console.error("frame error",e)}requestAnimationFrame(rd)}requestAnimationFrame(rd);setTimeout(()=>document.getElementById("loading")?.classList.add("gone"),400);document.addEventListener("visibilitychange",()=>{document.hidden&&Ne.phase==="play"&&!Ne.paused&&!Ne.ui.hasModal&&Ne.pause()});document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("backbutton",()=>{if(Ne.ui.hasModal){Ne.ui.modals[Ne.ui.modals.length-1].close();return}Ne.phase==="play"?Ne.pause():Ne.phase!=="menu"&&Ne.goMenu()});var id=sd.get("start");id&&setTimeout(()=>{let i=Ne.save.data.tutorial;i.l1=i.l2=!0,Ne.ui.closeAll(),Ne.startLevel(+id)},700);
