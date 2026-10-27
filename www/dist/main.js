var Df=0,Fh=1,kf=2;var Xd=1,Er=2,Un=3,ri=0,Ie=1,_n=2,ni=0,ii=1,cn=2,Bh=3,zh=4,Uf=5,Ai=100,Nf=101,Of=102,Ff=103,Bf=104,zf=200,Hf=201,Vf=202,Gf=203,ml=204,gl=205,Wf=206,qf=207,$f=208,Xf=209,Yf=210,Kf=211,Zf=212,Jf=213,jf=214,xl=0,yl=1,vl=2,_s=3,_l=4,bl=5,Ml=6,wl=7,Yd=0,Qf=1,tp=2,si=0,ep=1,np=2,ip=3,sp=4,rp=5,ap=6,Tr=7;var Kd=300,bs=301,Ms=302,Sl=303,El=304,Za=306,ai=1e3,Ci=1001,Tl=1002,ln=1003,op=1004;var Vr=1005;var bn=1006,ko=1007;var Pi=1008;var Fn=1009,Zd=1010,Jd=1011,hr=1012,Gc=1013,Ii=1014,Nn=1015,Ar=1016,Wc=1017,qc=1018,ws=1020,jd=35902,Qd=1021,tu=1022,wn=1023,eu=1024,nu=1025,xs=1026,Ss=1027,iu=1028,$c=1029,su=1030,Xc=1031;var Yc=1033,ya=33776,va=33777,_a=33778,ba=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Dl=37496,kl=37808,Ul=37809,Nl=37810,Ol=37811,Fl=37812,Bl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,ql=37819,$l=37820,Xl=37821,Ma=36492,Yl=36494,Kl=36495,ru=36283,Zl=36284,Jl=36285,jl=36286;var Sa=2300,Ql=2301,Uo=2302,Hh=2400,Vh=2401,Gh=2402;var lp=3200,cp=3201;var au=0,hp=1,ti="",Ee="srgb",ui="srgb-linear",Kc="display-p3",Ja="display-p3-linear",Ea="linear",pe="srgb",Ta="rec709",Aa="p3";var Ji=7680;var Wh=519,dp=512,up=513,fp=514,ou=515,pp=516,mp=517,gp=518,xp=519,tc=35044;var qh="300 es",On=2e3,Ra=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,sr=Math.PI/180,dr=180/Math.PI;function An(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Zc(i,t){return(i%t+t)%t}function yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vp(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function _p(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function bp(i,t=1){return t-Math.abs(Zc(i,t*2)-t)}function Mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ep(i,t){return i+Math.random()*(t-i)}function Tp(i){return i*(.5-Math.random())}function Ap(i){i!==void 0&&($h=i);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rp(i){return i*sr}function Cp(i){return i*dr}function Pp(i){return(i&i-1)===0&&i!==0}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lu={DEG2RAD:sr,RAD2DEG:dr,generateUUID:An,clamp:Te,euclideanModulo:Zc,mapLinear:yp,inverseLerp:vp,lerp:rr,damp:_p,pingpong:bp,smoothstep:Mp,smootherstep:wp,randInt:Sp,randFloat:Ep,randFloatSpread:Tp,seededRandom:Ap,degToRad:Rp,radToDeg:Cp,isPowerOfTwo:Pp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Dp,normalize:ee,denormalize:Mn},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],_=s[4],M=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*y+o*v+l*C,r[3]=a*m+o*_+l*T,r[6]=a*p+o*M+l*A,r[1]=c*y+h*v+d*C,r[4]=c*m+h*_+d*T,r[7]=c*p+h*M+d*A,r[2]=u*y+f*v+g*C,r[5]=u*m+f*_+g*T,r[8]=u*p+f*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(No.makeScale(t,e)),this}rotate(t){return this.premultiply(No.makeRotation(-t)),this}translate(t,e){return this.premultiply(No.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},No=new Bt;function cu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kp(){let i=Ca("canvas");return i.style.display="block",i}var Xh={};function wa(i){i in Xh||(Xh[i]=!0,console.warn(i))}function Up(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Np(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Op(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yh=new Bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new Bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[ui]:{transfer:Ea,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ee]:{transfer:pe,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ja]:{transfer:Ea,primaries:Aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Yh)},[Kc]:{transfer:pe,primaries:Aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Yh).convertLinearToSRGB()}},Fp=new Set([ui,Ja]),jt={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ys[t].toReference,s=Ys[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ys[i].primaries},getTransfer:function(i){return i===ti?Ea:Ys[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ys[t].luminanceCoefficients)}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Ca("canvas")),ji.width=t.width,ji.height=t.height;let n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ca("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,Pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zp=0,nn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=bn,a=Pi,o=wn,l=Fn,c=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=An(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Kd;nn.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,M=(f+1)/2,C=(p+1)/2,T=(h+u)/4,A=(d+y)/4,E=(g+m)/4;return _>M&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=E/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=E/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ia=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,p*v);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let M=o*v;if(l=l*m+u*M,c=c*m+f*M,h=h*m+g*M,d=d*m+y*M,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bo=new P,Zh=new li,Li=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Wr.subVectors(this.max,Ks),Qi.subVectors(t.a,Ks),ts.subVectors(t.b,Ks),es.subVectors(t.c,Ks),Yn.subVectors(ts,Qi),Kn.subVectors(es,ts),_i.subVectors(Qi,es);let e=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-_i.z,_i.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,_i.z,0,-_i.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-_i.y,_i.x,0];return!zo(e,Qi,ts,es,Wr)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,Qi,ts,es,Wr))?!1:(qr.crossVectors(Yn,Kn),e=[qr.x,qr.y,qr.z],zo(e,Qi,ts,es,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new P,new P,new P,new P,new P,new P,new P,new P],gn=new P,Gr=new Li,Qi=new P,ts=new P,es=new P,Yn=new P,Kn=new P,_i=new P,Ks=new P,Wr=new P,qr=new P,bi=new P;function zo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);let o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hp=new Li,Zs=new P,Ho=new P,Es=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Ho)),this.expandByPoint(Zs.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new P,Vo=new P,$r=new P,Zn=new P,Go=new P,Xr=new P,Wo=new P,ur=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vo.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=Zn.dot(this.direction),l=-Zn.dot($r),c=Zn.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vo).addScaledVector($r,u),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){Go.subVectors(e,t),Xr.subVectors(n,t),Wo.crossVectors(Go,Xr);let a=this.direction.dot(Wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);let l=o*this.direction.dot(Xr.crossVectors(Zn,Xr));if(l<0)return null;let c=o*this.direction.dot(Go.cross(Zn));if(c<0||l+c>a)return null;let h=-o*Zn.dot(Wo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Gp)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),Yr.crossVectors(tn,Jn),s[0]=Jn.x,s[4]=Yr.x,s[8]=tn.x,s[1]=Jn.y,s[5]=Yr.y,s[9]=tn.y,s[2]=Jn.z,s[6]=Yr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],_=n[7],M=n[11],C=n[15],T=s[0],A=s[4],E=s[8],k=s[12],x=s[1],b=s[5],D=s[9],L=s[13],B=s[2],$=s[6],z=s[10],K=s[14],F=s[3],st=s[7],it=s[11],dt=s[15];return r[0]=a*T+o*x+l*B+c*F,r[4]=a*A+o*b+l*$+c*st,r[8]=a*E+o*D+l*z+c*it,r[12]=a*k+o*L+l*K+c*dt,r[1]=h*T+d*x+u*B+f*F,r[5]=h*A+d*b+u*$+f*st,r[9]=h*E+d*D+u*z+f*it,r[13]=h*k+d*L+u*K+f*dt,r[2]=g*T+y*x+m*B+p*F,r[6]=g*A+y*b+m*$+p*st,r[10]=g*E+y*D+m*z+p*it,r[14]=g*k+y*L+m*K+p*dt,r[3]=v*T+_*x+M*B+C*F,r[7]=v*A+_*b+M*$+C*st,r[11]=v*E+_*D+M*z+C*it,r[15]=v*k+_*L+M*K+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+y*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=d*m*c-y*u*c+y*l*f-o*m*f-d*l*p+o*u*p,_=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,M=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,C=g*d*l-h*y*l-g*o*u+a*y*u+h*o*m-a*d*m,T=e*v+n*_+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=v*A,t[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*p-n*u*p)*A,t[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*A,t[8]=M*A,t[9]=(g*d*r-h*y*r-g*n*f+e*y*f+h*n*p-e*d*p)*A,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*A,t[12]=C*A,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*m+e*d*m)*A,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*m-e*o*m)*A,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,v=l*c,_=l*h,M=l*d,C=n.x,T=n.y,A=n.z;return s[0]=(1-(y+p))*C,s[1]=(f+M)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(m-v)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/a,d=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(o===On)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ra)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h,g,y;if(o===On)g=(a+r)*d,y=-2*d;else if(o===Ra)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new P,xn=new ce,Vp=new P(0,0,0),Gp=new P(1,1,1),Jn=new P,Yr=new P,tn=new P,Jh=new ce,jh=new li,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wp=0,Qh=new P,is=new li,Ln=new ce,Kr=new P,Js=new P,qp=new P,$p=new li,td=new P(1,0,0),ed=new P(0,1,0),nd=new P(0,0,1),id={type:"added"},Xp={type:"removed"},ss={type:"childadded",child:null},qo={type:"childremoved",child:null},Oe=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Rn,n=new li,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Bt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Js,Kr,this.up):Ln.lookAt(Kr,Js,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Ln),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new P(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new P,Dn=new P,$o=new P,kn=new P,rs=new P,as=new P,sd=new P,Xo=new P,Yo=new P,Ko=new P,Zo=new re,Jo=new re,jo=new re,ei=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Dn.subVectors(n,e),$o.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Dn),l=yn.dot($o),c=Dn.dot(Dn),h=Dn.dot($o),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zo.setScalar(0),Jo.setScalar(0),jo.setScalar(0),Zo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zo,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(jo,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Dn.subVectors(t,e),yn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),yn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),Xo.subVectors(t,n);let l=rs.dot(Xo),c=as.dot(Xo);if(l<=0&&c<=0)return e.copy(n);Yo.subVectors(t,s);let h=rs.dot(Yo),d=as.dot(Yo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Ko.subVectors(t,r);let f=rs.dot(Ko),g=as.dot(Ko);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(as,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return sd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(sd,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Zc(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qo(a,r,t+1/3),this.g=Qo(a,r,t),this.b=Qo(a,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(He.copy(this),t),Math.round(Te(He.r*255,0,255))*65536+Math.round(Te(He.g*255,0,255))*256+Math.round(Te(He.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Zr);let n=rr(jn.h,Zr.h,e),s=rr(jn.s,Zr.s,e),r=rr(jn.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new At;At.NAMES=hu;var Yp=0,zn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=An(),this.name="",this.type="Material",this.blending=ii,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},me=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new P,Jr=new rt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}};var La=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Da=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kp=0,on=new ce,tl=new Oe,os=new P,en=new Li,js=new Li,Ce=new P,De=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?Da:La)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(en.min,js.min),en.expandByPoint(Ce),Ce.addVectors(en.max,js.max),en.expandByPoint(Ce)):(en.expandByPoint(js.min),en.expandByPoint(js.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Ce.add(os)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<n.count;E++)o[E]=new P,l[E]=new P;let c=new P,h=new P,d=new P,u=new rt,f=new rt,g=new rt,y=new P,m=new P;function p(E,k,x){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,k),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),o[E].add(y),o[k].add(y),o[x].add(y),l[E].add(m),l[k].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let E=0,k=v.length;E<k;++E){let x=v[E],b=x.start,D=x.count;for(let L=b,B=b+D;L<B;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new P,M=new P,C=new P,T=new P;function A(E){C.fromBufferAttribute(s,E),T.copy(C);let k=o[E];_.copy(k),_.sub(C.multiplyScalar(C.dot(k))).normalize(),M.crossVectors(T,k);let b=M.dot(l[E])<0?-1:1;a.setXYZW(E,_.x,_.y,_.z,b)}for(let E=0,k=v.length;E<k;++E){let x=v[E],b=x.start,D=x.count;for(let L=b,B=b+D;L<B;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Le(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new ce,Mi=new ur,jr=new Es,ad=new P,Qr=new P,ta=new P,ea=new P,el=new P,na=new P,od=new P,ia=new P,W=class extends Oe{constructor(t=new De,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(el.fromBufferAttribute(d,t),a?na.addScaledVector(el,h):na.addScaledVector(el.sub(e),h))}e.add(na)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(jr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(jr,ad)===null||Mi.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(rd.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,C=_;M<C;M+=3){let T=o.getX(M),A=o.getX(M+1),E=o.getX(M+2);s=sa(this,p,t,n,c,h,d,T,A,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);s=sa(this,a,t,n,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,C=_;M<C;M+=3){let T=M,A=M+1,E=M+2;s=sa(this,p,t,n,c,h,d,T,A,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,_=m+1,M=m+2;s=sa(this,a,t,n,c,h,d,v,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zp(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qr),i.getVertexPosition(l,ta),i.getVertexPosition(c,ea);let h=Zp(i,t,e,n,Qr,ta,ea,od);if(h){let d=new P;ei.getBarycoord(od,Qr,ta,ea,d),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,d,new rt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,d,new rt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ei.getNormal(Qr,ta,ea,u.normal),h.face=u,h.barycoord=d}return h}var be=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(y,m,p,v,_,M,C,T,A,E,k){let x=M/A,b=C/E,D=M/2,L=C/2,B=T/2,$=A+1,z=E+1,K=0,F=0,st=new P;for(let it=0;it<z;it++){let dt=it*b-L;for(let et=0;et<$;et++){let lt=et*x-D;st[y]=lt*v,st[m]=dt*_,st[p]=B,c.push(st.x,st.y,st.z),st[y]=0,st[m]=0,st[p]=T>0?1:-1,h.push(st.x,st.y,st.z),d.push(et/A),d.push(1-it/E),K+=1}}for(let it=0;it<E;it++)for(let dt=0;dt<A;dt++){let et=u+dt+$*it,lt=u+dt+$*(it+1),H=u+(dt+1)+$*(it+1),Y=u+(dt+1)+$*it;l.push(et,lt,Y),l.push(lt,H,Y),F+=6}o.addGroup(f,F,k),f+=F,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function du(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var jp={clone:Ts,merge:We},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ka=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new P,ld=new rt,cd=new rt,Pe=class extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,sc=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Pe(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new Pe(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Pe(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new Pe(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Pe(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends nn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rc=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:ni});r.uniforms.tEquirect.value=e;let a=new W(s,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=bn),new sc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},nl=new P,em=new P,nm=new Bt,vn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nl.subVectors(n,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nm.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new Es,ra=new P,pr=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,m-f,M-p).normalize(),n[1].setComponents(l+r,u+c,m+f,M+p).normalize(),n[2].setComponents(l+a,u+h,m+g,M+v).normalize(),n[3].setComponents(l-a,u-h,m-g,M-v).normalize(),n[4].setComponents(l-o,u-d,m-y,M-_).normalize(),e===On)n[5].setComponents(l+o,u+d,m+y,M+_).normalize();else if(e===Ra)n[5].setComponents(o,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function im(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var he=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let _=0;_<c;_++){let M=_*d-r;g.push(M,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let _=v+c*p,M=v+c*(p+1),C=v+1+c*(p+1),T=v+1+c*p;f.push(_,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`
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
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Ig=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:dm,batching_pars_vertex:um,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:xm,bumpmap_pars_fragment:ym,clipping_planes_fragment:vm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Mm,color_fragment:wm,color_pars_fragment:Sm,color_pars_vertex:Em,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Im,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:km,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:zm,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:$m,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Km,lights_toon_fragment:Jm,lights_toon_pars_fragment:jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:d0,map_particle_fragment:u0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:x0,morphnormal_vertex:y0,morphtarget_pars_vertex:v0,morphtarget_vertex:_0,normal_fragment_begin:b0,normal_fragment_maps:M0,normal_pars_fragment:w0,normal_pars_vertex:S0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:k0,dithering_fragment:U0,dithering_pars_fragment:N0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:q0,skinnormal_vertex:$0,specularmap_fragment:X0,specularmap_pars_fragment:Y0,tonemapping_fragment:K0,tonemapping_pars_fragment:Z0,transmission_fragment:J0,transmission_pars_fragment:j0,uv_pars_fragment:Q0,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:dg,distanceRGBA_frag:ug,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:xg,meshbasic_frag:yg,meshlambert_vert:vg,meshlambert_frag:_g,meshmatcap_vert:bg,meshmatcap_frag:Mg,meshnormal_vert:wg,meshnormal_frag:Sg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Ig,points_frag:Lg,shadow_vert:Dg,shadow_frag:kg,sprite_vert:Ug,sprite_frag:Ng},ct={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Tn={basic:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:We([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:We([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:We([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:We([ct.points,ct.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:We([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:We([ct.common,ct.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:We([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:We([ct.sprite,ct.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:We([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:We([ct.lights,ct.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Tn.physical={uniforms:We([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var aa={r:0,b:0,g:0},Si=new Rn,Og=new ce;function Fg(i,t,e,n,s,r,a){let o=new At(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function y(v){let _=!1,M=g(v);M===null?p(o,l):M&&M.isColor&&(p(M,1),_=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===Za)?(h===void 0&&(h=new W(new be(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ts(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(_.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Si)),h.material.toneMapped=jt.getTransfer(M.colorSpace)!==pe,(d!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new W(new he(2,2),new hn({name:"BackgroundMaterial",uniforms:Ts(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(aa,du(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:y,addToRenderList:m}}function Bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(x,b,D,L,B){let $=!1,z=d(L,D,b);r!==z&&(r=z,c(r.object)),$=f(x,L,D,B),$&&g(x,L,D,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(x,b,D,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,b,D){let L=D.wireframe===!0,B=n[x.id];B===void 0&&(B={},n[x.id]=B);let $=B[b.id];$===void 0&&($={},B[b.id]=$);let z=$[L];return z===void 0&&(z=u(l()),$[L]=z),z}function u(x){let b=[],D=[],L=[];for(let B=0;B<e;B++)b[B]=0,D[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:L,object:x,attributes:{},index:null}}function f(x,b,D,L){let B=r.attributes,$=b.attributes,z=0,K=D.getAttributes();for(let F in K)if(K[F].location>=0){let it=B[F],dt=$[F];if(dt===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function g(x,b,D,L){let B={},$=b.attributes,z=0,K=D.getAttributes();for(let F in K)if(K[F].location>=0){let it=$[F];it===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));let dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),B[F]=dt,z++}r.attributes=B,r.attributesNum=z,r.index=L}function y(){let x=r.newAttributes;for(let b=0,D=x.length;b<D;b++)x[b]=0}function m(x){p(x,0)}function p(x,b){let D=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;D[x]=1,L[x]===0&&(i.enableVertexAttribArray(x),L[x]=1),B[x]!==b&&(i.vertexAttribDivisor(x,b),B[x]=b)}function v(){let x=r.newAttributes,b=r.enabledAttributes;for(let D=0,L=b.length;D<L;D++)b[D]!==x[D]&&(i.disableVertexAttribArray(D),b[D]=0)}function _(x,b,D,L,B,$,z){z===!0?i.vertexAttribIPointer(x,b,D,B,$):i.vertexAttribPointer(x,b,D,L,B,$)}function M(x,b,D,L){y();let B=L.attributes,$=D.getAttributes(),z=b.defaultAttributeValues;for(let K in $){let F=$[K];if(F.location>=0){let st=B[K];if(st===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){let it=st.normalized,dt=st.itemSize,et=t.get(st);if(et===void 0)continue;let lt=et.buffer,H=et.type,Y=et.bytesPerElement,Q=H===i.INT||H===i.UNSIGNED_INT||st.gpuType===Gc;if(st.isInterleavedBufferAttribute){let ht=st.data,kt=ht.stride,Tt=st.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<F.locationSize;Ht++)p(F.location+Ht,ht.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<F.locationSize;Ht++)m(F.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Ht=0;Ht<F.locationSize;Ht++)_(F.location+Ht,dt/F.locationSize,H,it,kt*Y,(Tt+dt/F.locationSize*Ht)*Y,Q)}else{if(st.isInstancedBufferAttribute){for(let ht=0;ht<F.locationSize;ht++)p(F.location+ht,st.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ht=0;ht<F.locationSize;ht++)m(F.location+ht);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ht=0;ht<F.locationSize;ht++)_(F.location+ht,dt/F.locationSize,H,it,dt*Y,dt/F.locationSize*ht*Y,Q)}}else if(z!==void 0){let it=z[K];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(F.location,it);break;case 3:i.vertexAttrib3fv(F.location,it);break;case 4:i.vertexAttrib4fv(F.location,it);break;default:i.vertexAttrib1fv(F.location,it)}}}}v()}function C(){E();for(let x in n){let b=n[x];for(let D in b){let L=b[D];for(let B in L)h(L[B].object),delete L[B];delete b[D]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let b=n[x.id];for(let D in b){let L=b[D];for(let B in L)h(L[B].object),delete L[B];delete b[D]}delete n[x.id]}function A(x){for(let b in n){let D=n[b];if(D[x.id]===void 0)continue;let L=D[x.id];for(let B in L)h(L[B].object),delete L[B];delete D[x.id]}}function E(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function zg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)e.update(g,n,u[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let E=A===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!E)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Vg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,M=p.clippingState||null;l.value=M,M=h(g,u,_,f);for(let C=0;C!==_;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==y;++_,M+=4)a.copy(d[_]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Gg(i){let t=new WeakMap;function e(a,o){return o===Sl?a.mapping=bs:o===El&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Sl||o===El)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Na=class extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,hd=[.125,.215,.35,.446,.526,.582],Ri=20,il=new Na,dd=new At,sl=null,rl=0,al=0,ol=!1,Ti=(1+Math.sqrt(5))/2,hs=1/Ti,ud=[new P(-Ti,hs,0),new P(Ti,hs,0),new P(-hs,0,Ti),new P(hs,0,Ti),new P(0,Ti,-hs),new P(0,Ti,hs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ci=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=ol,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ar,format:wn,colorSpace:ui,depthBuffer:!1},s=fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=qg(r,t,e)}return s}_compileMaterial(t){let e=new W(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,n,s){let o=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(dd),h.toneMapping=si,h.autoClear=!1;let f=new me({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new W(new be,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(dd),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;oa(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bs||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;oa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,il)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ud[(s-r-1)%ud.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new W(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],v=0;for(let A=0;A<Ri;++A){let E=A/y,k=Math.exp(-E*E/2);p.push(k),A===0?v+=k:A<m&&(v+=2*k)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let M=this._sizeLods[s],C=3*M*(s>_-ms?s-_+ms:0),T=4*(this._cubeSize-M);oa(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(d,il)}};function Wg(i){let t=[],e=[],n=[],s=i,r=i-ms+1+hd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ms?l=hd[a-i+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),_=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,E=T>2?0:-1,k=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];v.set(k,y*g*T),_.set(u,m*g*T);let x=[T,T,T,T,T,T];M.set(x,p*g*T)}let C=new De;C.setAttribute("position",new Le(v,y)),C.setAttribute("uv",new Le(_,m)),C.setAttribute("faceIndex",new Le(M,p)),t.push(C),s>ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fd(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function qg(i,t,e){let n=new Float32Array(Ri),s=new P(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function pd(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function md(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function $g(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Sl||l===El,h=l===bs||l===Ms;if(c||h){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ci(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ci(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let _=0,M=v.length;_<M;_+=3){let C=v[_+0],T=v[_+1],A=v[_+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){let v=g.array;y=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){let C=_+0,T=_+1,A=_+2;u.push(C,T,T,A,A,C)}}else return;let m=new(cu(u)?Da:La)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Kg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<y.length;v++)e.update(p,n,y[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jg(i,t,e){let n=new WeakMap,s=new re;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let k=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let M=o.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*C*4*d),A=new Ia(T,M,C,d);A.type=Nn,A.needsUpdate=!0;let E=_*4;for(let x=0;x<d;x++){let b=m[x],D=p[x],L=v[x],B=M*C*4*x;for(let $=0;$<b.count;$++){let z=$*E;f===!0&&(s.fromBufferAttribute(b,$),T[B+z+0]=s.x,T[B+z+1]=s.y,T[B+z+2]=s.z,T[B+z+3]=0),g===!0&&(s.fromBufferAttribute(D,$),T[B+z+4]=s.x,T[B+z+5]=s.y,T[B+z+6]=s.z,T[B+z+7]=0),y===!0&&(s.fromBufferAttribute(L,$),T[B+z+8]=s.x,T[B+z+9]=s.y,T[B+z+10]=s.z,T[B+z+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new rt(M,C)},n.set(o,u),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Oa=class extends nn{constructor(t,e,n,s,r,a,o,l,c,h=xs){if(h!==xs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Ii),n===void 0&&h===Ss&&(n=ws),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fu=new nn,gd=new Oa(1,1),pu=new Ia,mu=new ic,gu=new Ua,xd=[],yd=[],vd=new Float32Array(16),_d=new Float32Array(9),bd=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),Re(e,n)}}function sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),Re(e,n)}}function rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Re(e,n)}}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gd.compareFunction=ou,r=gd):r=fu,e.setTexture2D(t||r,s)}function mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gu,s)}function xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function yx(i){switch(i){case 5126:return Qg;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return dx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return xx}}function vx(i,t){i.uniform1fv(this.addr,t)}function _x(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function bx(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function Mx(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function wx(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sx(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ex(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tx(i,t){i.uniform1iv(this.addr,t)}function Ax(i,t){i.uniform2iv(this.addr,t)}function Rx(i,t){i.uniform3iv(this.addr,t)}function Cx(i,t){i.uniform4iv(this.addr,t)}function Px(i,t){i.uniform1uiv(this.addr,t)}function Ix(i,t){i.uniform2uiv(this.addr,t)}function Lx(i,t){i.uniform3uiv(this.addr,t)}function Dx(i,t){i.uniform4uiv(this.addr,t)}function kx(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fu,r[a])}function Ux(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mu,r[a])}function Nx(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gu,r[a])}function Ox(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pu,r[a])}function Fx(i){switch(i){case 5126:return vx;case 35664:return _x;case 35665:return bx;case 35666:return Mx;case 35674:return wx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}var ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yx(e.type)}},oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function Md(i,t){i.seq.push(t),i.map[t.id]=t}function Bx(i,t,e){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),a=ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Md(e,c===void 0?new ac(o,i,t):new oc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new lc(o),Md(e,d)),e=d}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zx=37297,Hx=0;function Vx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Gx(i){let t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i),n;switch(t===e?n="":t===Aa&&e===Ta?n="LinearDisplayP3ToLinearSRGB":t===Ta&&e===Aa&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case Ja:return[n,"LinearTransferOETF"];case Ee:case Kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vx(i.getShaderSource(t),a)}else return s}function Wx(i,t){let e=Gx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qx(i,t){let e;switch(t){case ep:e="Linear";break;case np:e="Reinhard";break;case ip:e="Cineon";break;case sp:e="ACESFilmic";break;case ap:e="AgX";break;case Tr:e="Neutral";break;case rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var la=new P;function $x(){jt.getLuminanceCoefficients(la);let i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function Ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(Zx,jx)}var Jx=new Map;function jx(i,t){let e=Ft[t];if(e===void 0){let n=Jx.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(Qx,ty)}function ty(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ey(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Er?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function ny(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ms:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function sy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yd:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function ry(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ay(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ey(e),c=ny(e),h=iy(e),d=sy(e),u=ry(e),f=Xx(e),g=Yx(r),y=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Ft.tonemapping_pars_fragment:"",e.toneMapping!==si?qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Wx("linearToOutputTexel",e.outputColorSpace),$x(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=cc(a),a=Ed(a,e),a=Td(a,e),o=cc(o),o=Ed(o,e),o=Td(o,e),a=Ad(a),o=Ad(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+a,M=v+p+o,C=wd(s,s.VERTEX_SHADER,_),T=wd(s,s.FRAGMENT_SHADER,M);s.attachShader(y,C),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(b){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y).trim(),L=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(T).trim(),$=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,T);else{let K=Sd(s,C,"vertex"),F=Sd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+K+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||B==="")&&(z=!1);z&&(b.diagnostics={runnable:$,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(C),s.deleteShader(T),E=new vs(s,y),k=Kx(s,y)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let k;this.getAttributes=function(){return k===void 0&&A(this),k};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,zx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var oy=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dc(t),e.set(t,n)),n}},dc=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ly(i,t,e,n,s,r,a){let o=new fr,l=new hc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,b,D,L,B){let $=L.fog,z=B.geometry,K=x.isMeshStandardMaterial?L.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),st=F&&F.mapping===Za?F.image.height:null,it=y[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=dt!==void 0?dt.length:0,lt=0;z.morphAttributes.position!==void 0&&(lt=1),z.morphAttributes.normal!==void 0&&(lt=2),z.morphAttributes.color!==void 0&&(lt=3);let H,Y,Q,ht;if(it){let Ye=Tn[it];H=Ye.vertexShader,Y=Ye.fragmentShader}else H=x.vertexShader,Y=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);let kt=i.getRenderTarget(),Tt=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,se=!!x.map,Wt=!!x.matcap,I=!!F,Je=!!x.aoMap,Vt=!!x.lightMap,Xt=!!x.bumpMap,It=!!x.normalMap,ue=!!x.displacementMap,Ut=!!x.emissiveMap,R=!!x.metalnessMap,w=!!x.roughnessMap,V=x.anisotropy>0,J=x.clearcoat>0,tt=x.dispersion>0,Z=x.iridescence>0,wt=x.sheen>0,ut=x.transmission>0,xt=V&&!!x.anisotropyMap,Yt=J&&!!x.clearcoatMap,at=J&&!!x.clearcoatNormalMap,yt=J&&!!x.clearcoatRoughnessMap,Lt=Z&&!!x.iridescenceMap,Dt=Z&&!!x.iridescenceThicknessMap,vt=wt&&!!x.sheenColorMap,Gt=wt&&!!x.sheenRoughnessMap,Nt=!!x.specularMap,le=!!x.specularColorMap,U=!!x.specularIntensityMap,mt=ut&&!!x.transmissionMap,X=ut&&!!x.thicknessMap,j=!!x.gradientMap,ft=!!x.alphaMap,gt=x.alphaTest>0,qt=!!x.alphaHash,we=!!x.extensions,Xe=si;x.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let Kt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Y,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&B.instanceColor!==null,instancingMorph:Tt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ui,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:Wt,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:st,aoMap:Je,lightMap:Vt,bumpMap:Xt,normalMap:It,displacementMap:f&&ue,emissiveMap:Ut,normalMapObjectSpace:It&&x.normalMapType===hp,normalMapTangentSpace:It&&x.normalMapType===au,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:xt,clearcoat:J,clearcoatMap:Yt,clearcoatNormalMap:at,clearcoatRoughnessMap:yt,dispersion:tt,iridescence:Z,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:wt,sheenColorMap:vt,sheenRoughnessMap:Gt,specularMap:Nt,specularColorMap:le,specularIntensityMap:U,transmission:ut,transmissionMap:mt,thicknessMap:X,gradientMap:j,opaque:x.transparent===!1&&x.blending===ii&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:qt,combine:x.combine,mapUv:se&&m(x.map.channel),aoMapUv:Je&&m(x.aoMap.channel),lightMapUv:Vt&&m(x.lightMap.channel),bumpMapUv:Xt&&m(x.bumpMap.channel),normalMapUv:It&&m(x.normalMap.channel),displacementMapUv:ue&&m(x.displacementMap.channel),emissiveMapUv:Ut&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:xt&&m(x.anisotropyMap.channel),clearcoatMapUv:Yt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&m(x.sheenRoughnessMap.channel),specularMapUv:Nt&&m(x.specularMap.channel),specularColorMapUv:le&&m(x.specularColorMap.channel),specularIntensityMapUv:U&&m(x.specularIntensityMap.channel),transmissionMapUv:mt&&m(x.transmissionMap.channel),thicknessMapUv:X&&m(x.thicknessMap.channel),alphaMapUv:ft&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(It||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(se||ft),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Ie,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),x.push(o.mask)}function C(x){let b=y[x.type],D;if(b){let L=Tn[b];D=jp.clone(L.uniforms)}else D=x.uniforms;return D}function T(x,b){let D;for(let L=0,B=h.length;L<B;L++){let $=h[L];if($.cacheKey===b){D=$,++D.usedTimes;break}}return D===void 0&&(D=new ay(i,b,x,r),h.push(D)),D}function A(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function E(x){l.remove(x)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:k}}function cy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function hy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,y,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),t++,p}function o(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||hy),n.length>1&&n.sort(u||Cd),s.length>1&&s.sort(u||Cd)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function dy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pd,i.set(n,[a])):s>=r.length?(a=new Pd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function uy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new At};break;case"SpotLight":e={position:new P,direction:new P,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function fy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var py=0;function my(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gy(i){let t=new uy,e=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,_=0,M=0,C=0,T=0,A=0;c.sort(my);for(let k=0,x=c.length;k<x;k++){let b=c[k],D=b.color,L=b.intensity,B=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=D.r*L,d+=D.g*L,u+=D.b*L;else if(b.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(b.sh.coefficients[z],L);A++}else if(b.isDirectionalLight){let z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let K=b.shadow,F=e.get(b);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=b.shadow.matrix,v++}n.directional[f]=z,f++}else if(b.isSpotLight){let z=t.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(D).multiplyScalar(L),z.distance=B,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,n.spot[y]=z;let K=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,K.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[y]=K.matrix,b.castShadow){let F=e.get(b);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,n.spotShadow[y]=F,n.spotShadowMap[y]=$,M++}y++}else if(b.isRectAreaLight){let z=t.get(b);z.color.copy(D).multiplyScalar(L),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=z,m++}else if(b.isPointLight){let z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){let K=b.shadow,F=e.get(b);F.shadowIntensity=K.intensity,F.shadowBias=K.bias,F.shadowNormalBias=K.normalBias,F.shadowRadius=K.radius,F.shadowMapSize=K.mapSize,F.shadowCameraNear=K.camera.near,F.shadowCameraFar=K.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=b.shadow.matrix,_++}n.point[g]=z,g++}else if(b.isHemisphereLight){let z=t.get(b);z.skyColor.copy(b.color).multiplyScalar(L),z.groundColor.copy(b.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==y||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==v||E.numPointShadows!==_||E.numSpotShadows!==M||E.numSpotMaps!==C||E.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,E.directionalLength=f,E.pointLength=g,E.spotLength=y,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=v,E.numPointShadows=_,E.numSpotShadows=M,E.numSpotMaps=C,E.numLightProbes=A,n.version=py++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Id(i){let t=new gy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Id(i),t.set(s,[o])):r>=a.length?(o=new Id(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var uc=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`;function _y(i,t,e){let n=new pr,s=new rt,r=new rt,a=new re,o=new uc({depthPacking:cp}),l=new fc,c={},h=e.maxTextureSize,d={[ri]:Ie,[Ie]:ri,[_n]:_n},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:yy,fragmentShader:vy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new W(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let p=this.type;this.render=function(T,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let k=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ni),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=p!==Un&&this.type===Un,B=p===Un&&this.type!==Un;for(let $=0,z=T.length;$<z;$++){let K=T[$],F=K.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let st=F.getFrameExtents();if(s.multiply(st),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,F.mapSize.y=r.y)),F.map===null||L===!0||B===!0){let dt=this.type!==Un?{minFilter:ln,magFilter:ln}:{};F.map!==null&&F.map.dispose(),F.map=new Bn(s.x,s.y,dt),F.map.texture.name=K.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let it=F.getViewportCount();for(let dt=0;dt<it;dt++){let et=F.getViewport(dt);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),D.viewport(a),F.updateMatrices(K,dt),n=F.getFrustum(),M(A,E,F.camera,K,this.type)}F.isPointLightShadow!==!0&&this.type===Un&&v(F,E),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(k,x,b)};function v(T,A){let E=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,E,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,E,f,y,null)}function _(T,A,E,k){let x=null,b=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=E.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let D=x.uuid,L=A.uuid,B=c[D];B===void 0&&(B={},c[D]=B);let $=B[L];$===void 0&&($=x.clone(),B[L]=$,A.addEventListener("dispose",C)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,k===Un?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let D=i.properties.get(x);D.light=E}return x}function M(T,A,E,k,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let L=t.update(T),B=T.material;if(Array.isArray(B)){let $=L.groups;for(let z=0,K=$.length;z<K;z++){let F=$[z],st=B[F.materialIndex];if(st&&st.visible){let it=_(T,st,k,x);T.onBeforeShadow(i,T,A,E,L,it,F),i.renderBufferDirect(E,null,L,it,T,F),T.onAfterShadow(i,T,A,E,L,it,F)}}}else if(B.visible){let $=_(T,B,k,x);T.onBeforeShadow(i,T,A,E,L,$,null),i.renderBufferDirect(E,null,L,$,T,null),T.onAfterShadow(i,T,A,E,L,$,null)}}let D=T.children;for(let L=0,B=D.length;L<B;L++)M(D[L],A,E,k,x)}function C(T){T.target.removeEventListener("dispose",C);for(let E in c){let k=c[E],x=T.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}var by={[xl]:yl,[vl]:Ml,[_l]:wl,[_s]:bl,[yl]:xl,[Ml]:vl,[wl]:_l,[bl]:_s};function My(i){function t(){let U=!1,mt=new re,X=null,j=new re(0,0,0,0);return{setMask:function(ft){X!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){U=ft},setClear:function(ft,gt,qt,we,Xe){Xe===!0&&(ft*=we,gt*=we,qt*=we),mt.set(ft,gt,qt,we),j.equals(mt)===!1&&(i.clearColor(ft,gt,qt,we),j.copy(mt))},reset:function(){U=!1,X=null,j.set(-1,0,0,0)}}}function e(){let U=!1,mt=!1,X=null,j=null,ft=null;return{setReversed:function(gt){mt=gt},setTest:function(gt){gt?Q(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(gt){X!==gt&&!U&&(i.depthMask(gt),X=gt)},setFunc:function(gt){if(mt&&(gt=by[gt]),j!==gt){switch(gt){case xl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=gt}},setLocked:function(gt){U=gt},setClear:function(gt){ft!==gt&&(i.clearDepth(gt),ft=gt)},reset:function(){U=!1,X=null,j=null,ft=null}}}function n(){let U=!1,mt=null,X=null,j=null,ft=null,gt=null,qt=null,we=null,Xe=null;return{setTest:function(Kt){U||(Kt?Q(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Kt){mt!==Kt&&!U&&(i.stencilMask(Kt),mt=Kt)},setFunc:function(Kt,Ye,Cn){(X!==Kt||j!==Ye||ft!==Cn)&&(i.stencilFunc(Kt,Ye,Cn),X=Kt,j=Ye,ft=Cn)},setOp:function(Kt,Ye,Cn){(gt!==Kt||qt!==Ye||we!==Cn)&&(i.stencilOp(Kt,Ye,Cn),gt=Kt,qt=Ye,we=Cn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){Xe!==Kt&&(i.clearStencil(Kt),Xe=Kt)},reset:function(){U=!1,mt=null,X=null,j=null,ft=null,gt=null,qt=null,we=null,Xe=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,m=null,p=null,v=null,_=null,M=null,C=null,T=new At(0,0,0),A=0,E=!1,k=null,x=null,b=null,D=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,z=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=z>=2);let F=null,st={},it=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),et=new re().fromArray(it),lt=new re().fromArray(dt);function H(U,mt,X,j){let ft=new Uint8Array(4),gt=i.createTexture();i.bindTexture(U,gt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<X;qt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(mt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return gt}let Y={};Y[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),r.setFunc(_s),Vt(!1),Xt(Fh),Q(i.CULL_FACE),I(ni);function Q(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function ht(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function kt(U,mt){return h[U]!==mt?(i.bindFramebuffer(U,mt),h[U]=mt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Tt(U,mt){let X=u,j=!1;if(U){X=d.get(mt),X===void 0&&(X=[],d.set(mt,X));let ft=U.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,qt=ft.length;gt<qt;gt++)X[gt]=i.COLOR_ATTACHMENT0+gt;X.length=ft.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function Ht(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let se={[Ai]:i.FUNC_ADD,[Nf]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};se[Ff]=i.MIN,se[Bf]=i.MAX;let Wt={[zf]:i.ZERO,[Hf]:i.ONE,[Vf]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[Jf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,mt,X,j,ft,gt,qt,we,Xe,Kt){if(U===ni){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),U!==Uf){if(U!==y||Kt!==E){if((m!==Ai||_!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,_=Ai),Kt)switch(U){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,v=null,M=null,C=null,T.set(0,0,0),A=0,y=U,E=Kt}return}ft=ft||mt,gt=gt||X,qt=qt||j,(mt!==m||ft!==_)&&(i.blendEquationSeparate(se[mt],se[ft]),m=mt,_=ft),(X!==p||j!==v||gt!==M||qt!==C)&&(i.blendFuncSeparate(Wt[X],Wt[j],Wt[gt],Wt[qt]),p=X,v=j,M=gt,C=qt),(we.equals(T)===!1||Xe!==A)&&(i.blendColor(we.r,we.g,we.b,Xe),T.copy(we),A=Xe),y=U,E=!1}function Je(U,mt){U.side===_n?ht(i.CULL_FACE):Q(i.CULL_FACE);let X=U.side===Ie;mt&&(X=!X),Vt(X),U.blending===ii&&U.transparent===!1?I(ni):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){k!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),k=U)}function Xt(U){U!==Df?(Q(i.CULL_FACE),U!==x&&(U===Fh?i.cullFace(i.BACK):U===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),x=U}function It(U){U!==b&&($&&i.lineWidth(U),b=U)}function ue(U,mt,X){U?(Q(i.POLYGON_OFFSET_FILL),(D!==mt||L!==X)&&(i.polygonOffset(mt,X),D=mt,L=X)):ht(i.POLYGON_OFFSET_FILL)}function Ut(U){U?Q(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+B-1),F!==U&&(i.activeTexture(U),F=U)}function w(U,mt,X){X===void 0&&(F===null?X=i.TEXTURE0+B-1:X=F);let j=st[X];j===void 0&&(j={type:void 0,texture:void 0},st[X]=j),(j.type!==U||j.texture!==mt)&&(F!==X&&(i.activeTexture(X),F=X),i.bindTexture(U,mt||Y[U]),j.type=U,j.texture=mt)}function V(){let U=st[F];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function vt(U){lt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function Gt(U,mt){let X=l.get(mt);X===void 0&&(X=new WeakMap,l.set(mt,X));let j=X.get(U);j===void 0&&(j=i.getUniformBlockIndex(mt,U.name),X.set(U,j))}function Nt(U,mt){let j=l.get(mt).get(U);o.get(mt)!==j&&(i.uniformBlockBinding(mt,j,U.__bindingPointIndex),o.set(mt,j))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},F=null,st={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,m=null,p=null,v=null,_=null,M=null,C=null,T=new At(0,0,0),A=0,E=!1,k=null,x=null,b=null,D=null,L=null,et.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Q,disable:ht,bindFramebuffer:kt,drawBuffers:Tt,useProgram:Ht,setBlending:I,setMaterial:Je,setFlipSided:Vt,setCullFace:Xt,setLineWidth:It,setPolygonOffset:ue,setScissorTest:Ut,activeTexture:R,bindTexture:w,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:yt,texImage3D:Lt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Yt,texStorage3D:at,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:Dt,viewport:vt,reset:le}}function Ld(i,t,e,n){let s=wy(n);switch(e){case Qd:return i*t;case eu:return i*t;case nu:return i*t*2;case iu:return i*t/s.components*s.byteLength;case $c:return i*t/s.components*s.byteLength;case su:return i*t*2/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case tu:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Yc:return i*t*4/s.components*s.byteLength;case ya:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ma:case Yl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ru:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wy(i){switch(i){case Fn:case Zd:return{byteLength:1,components:1};case hr:case Jd:case Ar:return{byteLength:2,components:1};case Wc:case qc:return{byteLength:2,components:4};case Ii:case Gc:case Nn:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):Ca("canvas")}function y(R,w,V){let J=1,tt=Ut(R);if((tt.width>V||tt.height>V)&&(J=V/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(J*tt.width),wt=Math.floor(J*tt.height);d===void 0&&(d=g(Z,wt));let ut=w?g(Z,wt):d;return ut.width=Z,ut.height=wt,ut.getContext("2d").drawImage(R,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+wt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==ln&&R.minFilter!==bn}function p(R){i.generateMipmap(R)}function v(R,w,V,J,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=w;if(w===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),w===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),w===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),w===i.RGBA){let wt=tt?Ea:jt.getTransfer(J);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=wt===pe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,w){let V;return R?w===null||w===Ii||w===ws?V=i.DEPTH24_STENCIL8:w===Nn?V=i.DEPTH32F_STENCIL8:w===hr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ii||w===ws?V=i.DEPTH_COMPONENT24:w===Nn?V=i.DEPTH_COMPONENT32F:w===hr&&(V=i.DEPTH_COMPONENT16),V}function M(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==bn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){let w=R.target;w.removeEventListener("dispose",C),A(w),w.isVideoTexture&&h.delete(w)}function T(R){let w=R.target;w.removeEventListener("dispose",T),k(w)}function A(R){let w=n.get(R);if(w.__webglInit===void 0)return;let V=R.source,J=u.get(V);if(J){let tt=J[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(R),Object.keys(J).length===0&&u.delete(V)}n.remove(R)}function E(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let V=R.source,J=u.get(V);delete J[w.__cacheKey],a.memory.textures--}function k(R){let w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let tt=0;tt<w.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let V=R.textures;for(let J=0,tt=V.length;J<tt;J++){let Z=n.get(V[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(R)}let x=0;function b(){x=0}function D(){let R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function L(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function B(R,w){let V=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,R,w);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function $(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){lt(V,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function z(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){lt(V,R,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function K(R,w){let V=n.get(R);if(R.version>0&&V.__version!==R.version){H(V,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let F={[ai]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},st={[ln]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},it={[dp]:i.NEVER,[xp]:i.ALWAYS,[up]:i.LESS,[ou]:i.LEQUAL,[fp]:i.EQUAL,[gp]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function dt(R,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===bn||w.magFilter===ko||w.magFilter===Vr||w.magFilter===Pi||w.minFilter===bn||w.minFilter===ko||w.minFilter===Vr||w.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,F[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,F[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,F[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==Vr&&w.minFilter!==Pi||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function et(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));let J=w.source,tt=u.get(J);tt===void 0&&(tt={},u.set(J,tt));let Z=L(w);if(Z!==R.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[Z].usedTimes++;let wt=tt[R.__cacheKey];wt!==void 0&&(tt[R.__cacheKey].usedTimes--,wt.usedTimes===0&&E(w)),R.__cacheKey=Z,R.__webglTexture=tt[Z].texture}return V}function lt(R,w,V){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);let tt=et(R,w),Z=w.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+V);let wt=n.get(Z);if(Z.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);let ut=jt.getPrimaries(jt.workingColorSpace),xt=w.colorSpace===ti?null:jt.getPrimaries(w.colorSpace),Yt=w.colorSpace===ti||ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let at=y(w.image,!1,s.maxTextureSize);at=ue(w,at);let yt=r.convert(w.format,w.colorSpace),Lt=r.convert(w.type),Dt=v(w.internalFormat,yt,Lt,w.colorSpace,w.isVideoTexture);dt(J,w);let vt,Gt=w.mipmaps,Nt=w.isVideoTexture!==!0,le=wt.__version===void 0||tt===!0,U=Z.dataReady,mt=M(w,at);if(w.isDepthTexture)Dt=_(w.format===Ss,w.type),le&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,yt,Lt,null));else if(w.isDataTexture)if(Gt.length>0){Nt&&le&&e.texStorage2D(i.TEXTURE_2D,mt,Dt,Gt[0].width,Gt[0].height);for(let X=0,j=Gt.length;X<j;X++)vt=Gt[X],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,yt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,vt.width,vt.height,0,yt,Lt,vt.data);w.generateMipmaps=!1}else Nt?(le&&e.texStorage2D(i.TEXTURE_2D,mt,Dt,at.width,at.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,yt,Lt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,yt,Lt,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Nt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Dt,Gt[0].width,Gt[0].height,at.depth);for(let X=0,j=Gt.length;X<j;X++)if(vt=Gt[X],w.format!==wn)if(yt!==null)if(Nt){if(U)if(w.layerUpdates.size>0){let ft=Ld(vt.width,vt.height,w.format,w.type);for(let gt of w.layerUpdates){let qt=vt.data.subarray(gt*ft/vt.data.BYTES_PER_ELEMENT,(gt+1)*ft/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,gt,vt.width,vt.height,1,yt,qt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,at.depth,yt,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Dt,vt.width,vt.height,at.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,at.depth,yt,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Dt,vt.width,vt.height,at.depth,0,yt,Lt,vt.data)}else{Nt&&le&&e.texStorage2D(i.TEXTURE_2D,mt,Dt,Gt[0].width,Gt[0].height);for(let X=0,j=Gt.length;X<j;X++)vt=Gt[X],w.format!==wn?yt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt.width,vt.height,yt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,vt.width,vt.height,0,yt,Lt,vt.data)}else if(w.isDataArrayTexture)if(Nt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Dt,at.width,at.height,at.depth),U)if(w.layerUpdates.size>0){let X=Ld(at.width,at.height,w.format,w.type);for(let j of w.layerUpdates){let ft=at.data.subarray(j*X/at.data.BYTES_PER_ELEMENT,(j+1)*X/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,at.width,at.height,1,yt,Lt,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Lt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,yt,Lt,at.data);else if(w.isData3DTexture)Nt?(le&&e.texStorage3D(i.TEXTURE_3D,mt,Dt,at.width,at.height,at.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Lt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,yt,Lt,at.data);else if(w.isFramebufferTexture){if(le)if(Nt)e.texStorage2D(i.TEXTURE_2D,mt,Dt,at.width,at.height);else{let X=at.width,j=at.height;for(let ft=0;ft<mt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,X,j,0,yt,Lt,null),X>>=1,j>>=1}}else if(Gt.length>0){if(Nt&&le){let X=Ut(Gt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Dt,X.width,X.height)}for(let X=0,j=Gt.length;X<j;X++)vt=Gt[X],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt,Lt,vt):e.texImage2D(i.TEXTURE_2D,X,Dt,yt,Lt,vt);w.generateMipmaps=!1}else if(Nt){if(le){let X=Ut(at);e.texStorage2D(i.TEXTURE_2D,mt,Dt,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Lt,at)}else e.texImage2D(i.TEXTURE_2D,0,Dt,yt,Lt,at);m(w)&&p(J),wt.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function H(R,w,V){if(w.image.length!==6)return;let J=et(R,w),tt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let Z=n.get(tt);if(tt.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+V);let wt=jt.getPrimaries(jt.workingColorSpace),ut=w.colorSpace===ti?null:jt.getPrimaries(w.colorSpace),xt=w.colorSpace===ti||wt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!Yt&&!at?yt[j]=y(w.image[j],!0,s.maxCubemapSize):yt[j]=at?w.image[j].image:w.image[j],yt[j]=ue(w,yt[j]);let Lt=yt[0],Dt=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),Gt=v(w.internalFormat,Dt,vt,w.colorSpace),Nt=w.isVideoTexture!==!0,le=Z.__version===void 0||J===!0,U=tt.dataReady,mt=M(w,Lt);dt(i.TEXTURE_CUBE_MAP,w);let X;if(Yt){Nt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Gt,Lt.width,Lt.height);for(let j=0;j<6;j++){X=yt[j].mipmaps;for(let ft=0;ft<X.length;ft++){let gt=X[ft];w.format!==wn?Dt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,gt.width,gt.height,Dt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Gt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,gt.width,gt.height,Dt,vt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Gt,gt.width,gt.height,0,Dt,vt,gt.data)}}}else{if(X=w.mipmaps,Nt&&le){X.length>0&&mt++;let j=Ut(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(at){Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Dt,vt,yt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,yt[j].width,yt[j].height,0,Dt,vt,yt[j].data);for(let ft=0;ft<X.length;ft++){let qt=X[ft].image[j].image;Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,qt.width,qt.height,Dt,vt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Gt,qt.width,qt.height,0,Dt,vt,qt.data)}}else{Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,vt,yt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Dt,vt,yt[j]);for(let ft=0;ft<X.length;ft++){let gt=X[ft];Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Dt,vt,gt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Gt,Dt,vt,gt.image[j])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Y(R,w,V,J,tt,Z){let wt=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),xt=v(V.internalFormat,wt,ut,V.colorSpace);if(!n.get(w).__hasExternalTextures){let at=Math.max(1,w.width>>Z),yt=Math.max(1,w.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,xt,at,yt,w.depth,0,wt,ut,null):e.texImage2D(tt,Z,xt,at,yt,0,wt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Xt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,n.get(V).__webglTexture,0,Vt(w)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,n.get(V).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(R,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let J=w.depthTexture,tt=J&&J.isDepthTexture?J.type:null,Z=_(w.stencilBuffer,tt),wt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Vt(w);Xt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{let J=w.textures;for(let tt=0;tt<J.length;tt++){let Z=J[tt],wt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),xt=v(Z.internalFormat,wt,ut,Z.colorSpace),Yt=Vt(w);V&&Xt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,xt,w.width,w.height):Xt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,xt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,xt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);let J=n.get(w.depthTexture).__webglTexture,tt=Vt(w);if(w.depthTexture.format===xs)Xt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===Ss)Xt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function kt(R){let w=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=J}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ht(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Q(w.__webglDepthbuffer[J],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Q(w.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(R,w,V){let J=n.get(R);w!==void 0&&Y(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&kt(R)}function Ht(R){let w=R.texture,V=n.get(R),J=n.get(w);R.addEventListener("dispose",T);let tt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let xt=0;xt<w.mipmaps.length;xt++)V.__webglFramebuffer[ut][xt]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ut=0,xt=tt.length;ut<xt;ut++){let Yt=n.get(tt[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Xt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let xt=tt[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);let Yt=r.convert(xt.format,xt.colorSpace),at=r.convert(xt.type),yt=v(xt.internalFormat,Yt,at,xt.colorSpace,R.isXRRenderTarget===!0),Lt=Vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),dt(i.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Y(V.__webglFramebuffer[ut][xt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else Y(V.__webglFramebuffer[ut],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,xt=tt.length;ut<xt;ut++){let Yt=tt[ut],at=n.get(Yt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),dt(i.TEXTURE_2D,Yt),Y(V.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),dt(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)Y(V.__webglFramebuffer[xt],R,w,i.COLOR_ATTACHMENT0,ut,xt);else Y(V.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,ut,0);m(w)&&p(ut),e.unbindTexture()}R.depthBuffer&&kt(R)}function se(R){let w=R.textures;for(let V=0,J=w.length;V<J;V++){let tt=w[V];if(m(tt)){let Z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(tt).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}let Wt=[],I=[];function Je(R){if(R.samples>0){if(Xt(R)===!1){let w=R.textures,V=R.width,J=R.height,tt=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),ut=w.length>1;if(ut)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let Yt=n.get(w[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,tt,i.NEAREST),l===!0&&(Wt.length=0,I.length=0,Wt.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);let Yt=n.get(w[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Vt(R){return Math.min(s.maxSamples,R.samples)}function Xt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function ue(R,w){let V=R.colorSpace,J=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ui&&V!==ti&&(jt.getTransfer(V)===pe?(J!==wn||tt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Tt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Xt}function Ey(i,t){function e(n,s=ti){let r,a=jt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return i.BYTE;if(n===Jd)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Qd)return i.ALPHA;if(n===tu)return i.RGB;if(n===wn)return i.RGBA;if(n===eu)return i.LUMINANCE;if(n===nu)return i.LUMINANCE_ALPHA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===iu)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===su)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===Yc)return i.RGBA_INTEGER;if(n===ya||n===va||n===_a||n===ba)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Ll)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Ul||n===Nl||n===Ol||n===Fl||n===Bl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===$l||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Yl||n===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ru||n===Zl||n===Jl||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pc=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ty={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ry=`
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

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:Ay,fragmentShader:Ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new he(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new mc,m=e.getContextAttributes(),p=null,v=null,_=[],M=[],C=new rt,T=null,A=new Pe;A.layers.enable(1),A.viewport=new re;let E=new Pe;E.layers.enable(2),E.viewport=new re;let k=[A,E],x=new pc;x.layers.enable(1),x.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=_[H];return Y===void 0&&(Y=new ar,_[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=_[H];return Y===void 0&&(Y=new ar,_[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=_[H];return Y===void 0&&(Y=new ar,_[H]=Y),Y.getHandSpace()};function L(H){let Y=M.indexOf(H.inputSource);if(Y===-1)return;let Q=_[Y];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||a),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",$);for(let H=0;H<_.length;H++){let Y=M[H];Y!==null&&(M[H]=null,_[H].disconnect(Y))}b=null,D=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Bn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,Q=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?Ss:xs,Q=m.stencil?ws:Ii);let kt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Bn(u.textureWidth,u.textureHeight,{format:wn,type:Fn,depthTexture:new Oa(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(H){for(let Y=0;Y<H.removed.length;Y++){let Q=H.removed[Y],ht=M.indexOf(Q);ht>=0&&(M[ht]=null,_[ht].disconnect(Q))}for(let Y=0;Y<H.added.length;Y++){let Q=H.added[Y],ht=M.indexOf(Q);if(ht===-1){for(let Tt=0;Tt<_.length;Tt++)if(Tt>=M.length){M.push(Q),ht=Tt;break}else if(M[Tt]===null){M[Tt]=Q,ht=Tt;break}if(ht===-1)break}let kt=_[ht];kt&&kt.connect(Q)}}let z=new P,K=new P;function F(H,Y,Q){z.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(Q.matrixWorld);let ht=z.distanceTo(K),kt=Y.projectionMatrix.elements,Tt=Q.projectionMatrix.elements,Ht=kt[14]/(kt[10]-1),se=kt[14]/(kt[10]+1),Wt=(kt[9]+1)/kt[5],I=(kt[9]-1)/kt[5],Je=(kt[8]-1)/kt[0],Vt=(Tt[8]+1)/Tt[0],Xt=Ht*Je,It=Ht*Vt,ue=ht/(-Je+Vt),Ut=ue*-Je;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),kt[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let R=Ht+ue,w=se+ue,V=Xt-Ut,J=It+(ht-Ut),tt=Wt*se/w*R,Z=I*se/w*R;H.projectionMatrix.makePerspective(V,J,tt,Z,R,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function st(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Y=H.near,Q=H.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(Q=y.depthFar)),x.near=E.near=A.near=Y,x.far=E.far=A.far=Q,(b!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,D=x.far);let ht=H.parent,kt=x.cameras;st(x,ht);for(let Tt=0;Tt<kt.length;Tt++)st(kt[Tt],ht);kt.length===2?F(x,A,E):x.projectionMatrix.copy(A.projectionMatrix),it(H,x,ht)};function it(H,Y,Q){Q===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=dr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let dt=null;function et(H,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){let Q=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ht=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Tt=0;Tt<Q.length;Tt++){let Ht=Q[Tt],se=null;if(f!==null)se=f.getViewport(Ht);else{let I=d.getViewSubImage(u,Ht);se=I.viewport,Tt===0&&(t.setRenderTargetTextures(v,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(v))}let Wt=k[Tt];Wt===void 0&&(Wt=new Pe,Wt.layers.enable(Tt),Wt.viewport=new re,k[Tt]=Wt),Wt.matrix.fromArray(Ht.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ht.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(se.x,se.y,se.width,se.height),Tt===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Wt)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Tt=d.getDepthInformation(Q[0]);Tt&&Tt.isValid&&Tt.texture&&y.init(t,Tt,s.renderState)}}for(let Q=0;Q<_.length;Q++){let ht=M[Q],kt=_[Q];ht!==null&&kt!==void 0&&kt.update(ht,Y,c||a)}dt&&dt(H,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let lt=new uu;lt.setAnimationLoop(et),this.setAnimationLoop=function(H){dt=H},this.dispose=function(){}}},Ei=new Rn,Cy=new ce;function Py(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,du(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,Ei.copy(M),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(Ei)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let M=_.program;n.uniformBlockBinding(v,M)}function c(v,_){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));let C=_.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){let _=d();v.__bindingPointIndex=_;let M=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],M=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let k=0,x=E.length;k<x;k++){let b=E[k];if(f(b,T,k,C)===!0){let D=b.__offset,L=Array.isArray(b.value)?b.value:[b.value],B=0;for(let $=0;$<L.length;$++){let z=L[$],K=y(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,D+B,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,M,C){let T=v.value,A=_+"_"+M;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let E=C[A];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return C[A]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(v){let _=v.uniforms,M=0,C=16;for(let A=0,E=_.length;A<E;A++){let k=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,b=k.length;x<b;x++){let D=k[x],L=Array.isArray(D.value)?D.value:[D.value];for(let B=0,$=L.length;B<$;B++){let z=L[B],K=y(z),F=M%C,st=F%K.boundary,it=F+st;M+=st,it!==0&&C-it<K.storage&&(M+=C-it),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=K.storage}}}let T=M%C;return T>0&&(M+=C-T),v.__size=M,v.__cache={},this}function y(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var As=class{constructor(t={}){let{canvas:e=kp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=si,this.toneMappingExposure=1;let _=this,M=!1,C=0,T=0,A=null,E=-1,k=null,x=new re,b=new re,D=null,L=new At(0),B=0,$=e.width,z=e.height,K=1,F=null,st=null,it=new re(0,0,$,z),dt=new re(0,0,$,z),et=!1,lt=new pr,H=!1,Y=!1,Q=new ce,ht=new ce,kt=new P,Tt=new re,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function Wt(){return A===null?K:1}let I=n;function Je(S,N){return e.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",gt,!1),I===null){let N="webgl2";if(I=Je(N,S),I===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Vt,Xt,It,ue,Ut,R,w,V,J,tt,Z,wt,ut,xt,Yt,at,yt,Lt,Dt,vt,Gt,Nt,le,U;function mt(){Vt=new Xg(I),Vt.init(),Nt=new Ey(I,Vt),Xt=new Hg(I,Vt,t,Nt),It=new My(I),Xt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),ue=new Zg(I),Ut=new cy,R=new Sy(I,Vt,It,Ut,Xt,Nt,ue),w=new Gg(_),V=new $g(_),J=new im(I),le=new Bg(I,J),tt=new Yg(I,J,ue,le),Z=new jg(I,tt,J,ue),Dt=new Jg(I,Xt,R),at=new Vg(Ut),wt=new ly(_,w,V,Vt,Xt,le,at),ut=new Py(_,Ut),xt=new dy,Yt=new xy(Vt),Lt=new Fg(_,w,V,It,Z,u,l),yt=new _y(_,Z,Xt),U=new Iy(I,ue,Xt,It),vt=new zg(I,Vt,ue),Gt=new Kg(I,Vt,ue),ue.programs=wt.programs,_.capabilities=Xt,_.extensions=Vt,_.properties=Ut,_.renderLists=xt,_.shadowMap=yt,_.state=It,_.info=ue}mt();let X=new gc(_,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize($,z,!1))},this.getSize=function(S){return S.set($,z)},this.setSize=function(S,N,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,z=N,e.width=Math.floor(S*K),e.height=Math.floor(N*K),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($*K,z*K).floor()},this.setDrawingBufferSize=function(S,N,G){$=S,z=N,K=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(it)},this.setViewport=function(S,N,G,q){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,N,G,q),It.viewport(x.copy(it).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(dt)},this.setScissor=function(S,N,G,q){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,N,G,q),It.scissor(b.copy(dt).multiplyScalar(K).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){It.setScissorTest(et=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,N=!0,G=!0){let q=0;if(S){let O=!1;if(A!==null){let ot=A.texture.format;O=ot===Yc||ot===Xc||ot===$c}if(O){let ot=A.texture.type,pt=ot===Fn||ot===Ii||ot===hr||ot===ws||ot===Wc||ot===qc,_t=Lt.getClearColor(),Mt=Lt.getClearAlpha(),Rt=_t.r,Pt=_t.g,St=_t.b;pt?(f[0]=Rt,f[1]=Pt,f[2]=St,f[3]=Mt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Rt,g[1]=Pt,g[2]=St,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}N&&(q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),xt.dispose(),Yt.dispose(),Ut.dispose(),w.dispose(),V.dispose(),Z.dispose(),le.dispose(),U.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ph),X.removeEventListener("sessionend",Ih),vi.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=ue.autoReset,N=yt.enabled,G=yt.autoUpdate,q=yt.needsUpdate,O=yt.type;mt(),ue.autoReset=S,yt.enabled=N,yt.autoUpdate=G,yt.needsUpdate=q,yt.type=O}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qt(S){let N=S.target;N.removeEventListener("dispose",qt),we(N)}function we(S){Xe(S),Ut.remove(S)}function Xe(S){let N=Ut.get(S).programs;N!==void 0&&(N.forEach(function(G){wt.releaseProgram(G)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,q,O,ot){N===null&&(N=Ht);let pt=O.isMesh&&O.matrixWorld.determinant()<0,_t=Cf(S,N,G,q,O);It.setMaterial(q,pt);let Mt=G.index,Rt=1;if(q.wireframe===!0){if(Mt=tt.getWireframeAttribute(G),Mt===void 0)return;Rt=2}let Pt=G.drawRange,St=G.attributes.position,te=Pt.start*Rt,fe=(Pt.start+Pt.count)*Rt;ot!==null&&(te=Math.max(te,ot.start*Rt),fe=Math.min(fe,(ot.start+ot.count)*Rt)),Mt!==null?(te=Math.max(te,0),fe=Math.min(fe,Mt.count)):St!=null&&(te=Math.max(te,0),fe=Math.min(fe,St.count));let ve=fe-te;if(ve<0||ve===1/0)return;le.setup(O,q,_t,G,Mt);let je,Zt=vt;if(Mt!==null&&(je=J.get(Mt),Zt=Gt,Zt.setIndex(je)),O.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Wt()),Zt.setMode(I.LINES)):Zt.setMode(I.TRIANGLES);else if(O.isLine){let Et=q.linewidth;Et===void 0&&(Et=1),It.setLineWidth(Et*Wt()),O.isLineSegments?Zt.setMode(I.LINES):O.isLineLoop?Zt.setMode(I.LINE_LOOP):Zt.setMode(I.LINE_STRIP)}else O.isPoints?Zt.setMode(I.POINTS):O.isSprite&&Zt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Et=O._multiDrawStarts,Ne=O._multiDrawCounts,Jt=O._multiDrawCount,mn=Mt?J.get(Mt).bytesPerElement:1,Zi=Ut.get(q).currentProgram.getUniforms();for(let Qe=0;Qe<Jt;Qe++)Zi.setValue(I,"_gl_DrawID",Qe),Zt.render(Et[Qe]/mn,Ne[Qe])}else if(O.isInstancedMesh)Zt.renderInstances(te,ve,O.count);else if(G.isInstancedBufferGeometry){let Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ne=Math.min(G.instanceCount,Et);Zt.renderInstances(te,ve,Ne)}else Zt.render(te,ve)};function Kt(S,N,G){S.transparent===!0&&S.side===_n&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Hr(S,N,G),S.side=ri,S.needsUpdate=!0,Hr(S,N,G),S.side=_n):Hr(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),m=Yt.get(G),m.init(N),v.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let q=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ot=O.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){let _t=ot[pt];Kt(_t,G,O),q.add(_t)}else Kt(ot,G,O),q.add(ot)}),v.pop(),m=null,q},this.compileAsync=function(S,N,G=null){let q=this.compile(S,N,G);return new Promise(O=>{function ot(){if(q.forEach(function(pt){Ut.get(pt).currentProgram.isReady()&&q.delete(pt)}),q.size===0){O(S);return}setTimeout(ot,10)}Vt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ye=null;function Cn(S){Ye&&Ye(S)}function Ph(){vi.stop()}function Ih(){vi.start()}let vi=new uu;vi.setAnimationLoop(Cn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(S){Ye=S,X.setAnimationLoop(S),S===null?vi.stop():vi.start()},X.addEventListener("sessionstart",Ph),X.addEventListener("sessionend",Ih),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,N,A),m=Yt.get(S,v.length),m.init(N),v.push(m),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),lt.setFromProjectionMatrix(ht),Y=this.localClippingEnabled,H=at.init(this.clippingPlanes,Y),y=xt.get(S,p.length),y.init(),p.push(y),X.enabled===!0&&X.isPresenting===!0){let ot=_.xr.getDepthSensingMesh();ot!==null&&Po(ot,N,-1/0,_.sortObjects)}Po(S,N,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(F,st),se=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,se&&Lt.addToRenderList(y,S),this.info.render.frame++,H===!0&&at.beginShadows();let G=m.state.shadowsArray;yt.render(G,S,N),H===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=y.opaque,O=y.transmissive;if(m.setupLights(),N.isArrayCamera){let ot=N.cameras;if(O.length>0)for(let pt=0,_t=ot.length;pt<_t;pt++){let Mt=ot[pt];Dh(q,O,S,Mt)}se&&Lt.render(S);for(let pt=0,_t=ot.length;pt<_t;pt++){let Mt=ot[pt];Lh(y,S,Mt,Mt.viewport)}}else O.length>0&&Dh(q,O,S,N),se&&Lt.render(S),Lh(y,S,N);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(_,S,N),le.resetDefaultState(),E=-1,k=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&at.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Po(S,N,G,q){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||lt.intersectsSprite(S)){q&&Tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);let pt=Z.update(S),_t=S.material;_t.visible&&y.push(S,pt,_t,G,Tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||lt.intersectsObject(S))){let pt=Z.update(S),_t=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Tt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Tt.copy(pt.boundingSphere.center)),Tt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(_t)){let Mt=pt.groups;for(let Rt=0,Pt=Mt.length;Rt<Pt;Rt++){let St=Mt[Rt],te=_t[St.materialIndex];te&&te.visible&&y.push(S,pt,te,G,Tt.z,St)}}else _t.visible&&y.push(S,pt,_t,G,Tt.z,null)}}let ot=S.children;for(let pt=0,_t=ot.length;pt<_t;pt++)Po(ot[pt],N,G,q)}function Lh(S,N,G,q){let O=S.opaque,ot=S.transmissive,pt=S.transparent;m.setupLightsView(G),H===!0&&at.setGlobalState(_.clippingPlanes,G),q&&It.viewport(x.copy(q)),O.length>0&&zr(O,N,G),ot.length>0&&zr(ot,N,G),pt.length>0&&zr(pt,N,G),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Dh(S,N,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Bn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Ar:Fn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let ot=m.state.transmissionRenderTarget[q.id],pt=q.viewport||x;ot.setSize(pt.z,pt.w);let _t=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(L),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),se&&Lt.render(G);let Mt=_.toneMapping;_.toneMapping=si;let Rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),H===!0&&at.setGlobalState(_.clippingPlanes,q),zr(S,G,q),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let St=0,te=N.length;St<te;St++){let fe=N[St],ve=fe.object,je=fe.geometry,Zt=fe.material,Et=fe.group;if(Zt.side===_n&&ve.layers.test(q.layers)){let Ne=Zt.side;Zt.side=Ie,Zt.needsUpdate=!0,kh(ve,G,q,je,Zt,Et),Zt.side=Ne,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}_.setRenderTarget(_t),_.setClearColor(L,B),Rt!==void 0&&(q.viewport=Rt),_.toneMapping=Mt}function zr(S,N,G){let q=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ot=S.length;O<ot;O++){let pt=S[O],_t=pt.object,Mt=pt.geometry,Rt=q===null?pt.material:q,Pt=pt.group;_t.layers.test(G.layers)&&kh(_t,N,G,Mt,Rt,Pt)}}function kh(S,N,G,q,O,ot){S.onBeforeRender(_,N,G,q,O,ot),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(_,N,G,q,S,ot),O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,_.renderBufferDirect(G,N,q,O,S,ot),O.side=ri,O.needsUpdate=!0,_.renderBufferDirect(G,N,q,O,S,ot),O.side=_n):_.renderBufferDirect(G,N,q,O,S,ot),S.onAfterRender(_,N,G,q,O,ot)}function Hr(S,N,G){N.isScene!==!0&&(N=Ht);let q=Ut.get(S),O=m.state.lights,ot=m.state.shadowsArray,pt=O.state.version,_t=wt.getParameters(S,O.state,ot,N,G),Mt=wt.getProgramCacheKey(_t),Rt=q.programs;q.environment=S.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(S.isMeshStandardMaterial?V:w).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",qt),Rt=new Map,q.programs=Rt);let Pt=Rt.get(Mt);if(Pt!==void 0){if(q.currentProgram===Pt&&q.lightsStateVersion===pt)return Nh(S,_t),Pt}else _t.uniforms=wt.getUniforms(S),S.onBeforeCompile(_t,_),Pt=wt.acquireProgram(_t,Mt),Rt.set(Mt,Pt),q.uniforms=_t.uniforms;let St=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=at.uniform),Nh(S,_t),q.needsLights=If(S),q.lightsStateVersion=pt,q.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Pt,q.uniformsList=null,Pt}function Uh(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=vs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Nh(S,N){let G=Ut.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Cf(S,N,G,q,O){N.isScene!==!0&&(N=Ht),R.resetTextureUnits();let ot=N.fog,pt=q.isMeshStandardMaterial?N.environment:null,_t=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ui,Mt=(q.isMeshStandardMaterial?V:w).get(q.envMap||pt),Rt=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),St=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,ve=si;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=_.toneMapping);let je=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=je!==void 0?je.length:0,Et=Ut.get(q),Ne=m.state.lights;if(H===!0&&(Y===!0||S!==k)){let an=S===k&&q.id===E;at.setState(q,S,an)}let Jt=!1;q.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ne.state.version||Et.outputColorSpace!==_t||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==Mt||q.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==at.numPlanes||Et.numIntersection!==at.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Pt||Et.morphTargets!==St||Et.morphNormals!==te||Et.morphColors!==fe||Et.toneMapping!==ve||Et.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Et.__version=q.version);let mn=Et.currentProgram;Jt===!0&&(mn=Hr(q,N,O));let Zi=!1,Qe=!1,Io=!1,_e=mn.getUniforms(),Xn=Et.uniforms;if(It.useProgram(mn.program)&&(Zi=!0,Qe=!0,Io=!0),q.id!==E&&(E=q.id,Qe=!0),Zi||k!==S){Xt.reverseDepthBuffer?(Q.copy(S.projectionMatrix),Np(Q),Op(Q),_e.setValue(I,"projectionMatrix",Q)):_e.setValue(I,"projectionMatrix",S.projectionMatrix),_e.setValue(I,"viewMatrix",S.matrixWorldInverse);let an=_e.map.cameraPosition;an!==void 0&&an.setValue(I,kt.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,Qe=!0,Io=!0)}if(O.isSkinnedMesh){_e.setOptional(I,O,"bindMatrix"),_e.setOptional(I,O,"bindMatrixInverse");let an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),_e.setValue(I,"boneTexture",an.boneTexture,R))}O.isBatchedMesh&&(_e.setOptional(I,O,"batchingTexture"),_e.setValue(I,"batchingTexture",O._matricesTexture,R),_e.setOptional(I,O,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",O._indirectTexture,R),_e.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",O._colorsTexture,R));let Lo=G.morphAttributes;if((Lo.position!==void 0||Lo.normal!==void 0||Lo.color!==void 0)&&Dt.update(O,G,mn),(Qe||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,_e.setValue(I,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Xn.envMap.value=Mt,Xn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),Qe&&(_e.setValue(I,"toneMappingExposure",_.toneMappingExposure),Et.needsLights&&Pf(Xn,Io),ot&&q.fog===!0&&ut.refreshFogUniforms(Xn,ot),ut.refreshMaterialUniforms(Xn,q,K,z,m.state.transmissionRenderTarget[S.id]),vs.upload(I,Uh(Et),Xn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vs.upload(I,Uh(Et),Xn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(I,"center",O.center),_e.setValue(I,"modelViewMatrix",O.modelViewMatrix),_e.setValue(I,"normalMatrix",O.normalMatrix),_e.setValue(I,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let an=q.uniformsGroups;for(let Do=0,Lf=an.length;Do<Lf;Do++){let Oh=an[Do];U.update(Oh,mn),U.bind(Oh,mn)}}return mn}function Pf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function If(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,G){Ut.get(S.texture).__webglTexture=N,Ut.get(S.depthTexture).__webglTexture=G;let q=Ut.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let G=Ut.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){A=S,C=N,T=G;let q=!0,O=null,ot=!1,pt=!1;if(S){let Mt=Ut.get(S);if(Mt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Mt.__hasExternalTextures)R.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let St=S.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Ut.has(St)&&(S.width!==St.image.width||S.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(pt=!0);let Pt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?O=Pt[N][G]:O=Pt[N],ot=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?O=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?O=Pt[G]:O=Pt,x.copy(S.viewport),b.copy(S.scissor),D=S.scissorTest}else x.copy(it).multiplyScalar(K).floor(),b.copy(dt).multiplyScalar(K).floor(),D=et;if(It.bindFramebuffer(I.FRAMEBUFFER,O)&&q&&It.drawBuffers(S,O),It.viewport(x),It.scissor(b),It.setScissorTest(D),ot){let Mt=Ut.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,G)}else if(pt){let Mt=Ut.get(S.texture),Rt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Rt)}E=-1},this.readRenderTargetPixels=function(S,N,G,q,O,ot,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){It.bindFramebuffer(I.FRAMEBUFFER,_t);try{let Mt=S.texture,Rt=Mt.format,Pt=Mt.type;if(!Xt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-q&&G>=0&&G<=S.height-O&&I.readPixels(N,G,q,O,Nt.convert(Rt),Nt.convert(Pt),ot)}finally{let Mt=A!==null?Ut.get(A).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,q,O,ot,pt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){let Mt=S.texture,Rt=Mt.format,Pt=Mt.type;if(!Xt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-q&&G>=0&&G<=S.height-O){It.bindFramebuffer(I.FRAMEBUFFER,_t);let St=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),I.readPixels(N,G,q,O,Nt.convert(Rt),Nt.convert(Pt),0);let te=A!==null?Ut.get(A).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,te);let fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Up(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(St),I.deleteSync(fe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,G=0){S.isTexture!==!0&&(wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);let q=Math.pow(2,-G),O=Math.floor(S.image.width*q),ot=Math.floor(S.image.height*q),pt=N!==null?N.x:0,_t=N!==null?N.y:0;R.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pt,_t,O,ot),It.unbindTexture()},this.copyTextureToTexture=function(S,N,G=null,q=null,O=0){S.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let ot,pt,_t,Mt,Rt,Pt;G!==null?(ot=G.max.x-G.min.x,pt=G.max.y-G.min.y,_t=G.min.x,Mt=G.min.y):(ot=S.image.width,pt=S.image.height,_t=0,Mt=0),q!==null?(Rt=q.x,Pt=q.y):(Rt=0,Pt=0);let St=Nt.convert(N.format),te=Nt.convert(N.type);R.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let fe=I.getParameter(I.UNPACK_ROW_LENGTH),ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),Zt=I.getParameter(I.UNPACK_SKIP_ROWS),Et=I.getParameter(I.UNPACK_SKIP_IMAGES),Ne=S.isCompressedTexture?S.mipmaps[O]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Rt,Pt,ot,pt,St,te,Ne.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Rt,Pt,Ne.width,Ne.height,St,Ne.data):I.texSubImage2D(I.TEXTURE_2D,O,Rt,Pt,ot,pt,St,te,Ne),I.pixelStorei(I.UNPACK_ROW_LENGTH,fe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et),O===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G=null,q=null,O=0){S.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,S=arguments[2],N=arguments[3],O=arguments[4]||0);let ot,pt,_t,Mt,Rt,Pt,St,te,fe,ve=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(ot=G.max.x-G.min.x,pt=G.max.y-G.min.y,_t=G.max.z-G.min.z,Mt=G.min.x,Rt=G.min.y,Pt=G.min.z):(ot=ve.width,pt=ve.height,_t=ve.depth,Mt=0,Rt=0,Pt=0),q!==null?(St=q.x,te=q.y,fe=q.z):(St=0,te=0,fe=0);let je=Nt.convert(N.format),Zt=Nt.convert(N.type),Et;if(N.isData3DTexture)R.setTexture3D(N,0),Et=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),Et=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Ne=I.getParameter(I.UNPACK_ROW_LENGTH),Jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Zi=I.getParameter(I.UNPACK_SKIP_ROWS),Qe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Et,O,St,te,fe,ot,pt,_t,je,Zt,ve.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,O,St,te,fe,ot,pt,_t,je,ve.data):I.texSubImage3D(Et,O,St,te,fe,ot,pt,_t,je,Zt,ve),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe),O===0&&N.generateMipmaps&&I.generateMipmap(Et),It.unbindTexture()},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,It.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Kc?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===Ja?"display-p3":"srgb"}};var hi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ge=new P,Fa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rs=class extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,Qs=new P,us=new P,fs=new P,ps=new rt,tr=new rt,xu=new ce,ca=new P,er=new P,ha=new P,Dd=new rt,cl=new rt,kd=new rt,mr=class extends Oe{constructor(t=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Fa(n,3,0,!1)),ds.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;da(ca.set(-.5,-.5,0),fs,a,us,s,r),da(er.set(.5,-.5,0),fs,a,us,s,r),da(ha.set(.5,.5,0),fs,a,us,s,r),Dd.set(0,0),cl.set(1,0),kd.set(1,1);let o=t.ray.intersectTriangle(ca,er,ha,!1,Qs);if(o===null&&(da(er.set(-.5,.5,0),fs,a,us,s,r),cl.set(0,1),o=t.ray.intersectTriangle(ca,ha,er,!1,Qs),o===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:ei.getInterpolation(Qs,ca,er,ha,Dd,cl,kd,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ps.x-s*ps.y,tr.y=s*ps.x+r*ps.y):tr.copy(ps),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(xu)}var yc=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ud=new ce,vc=new ur,ua=new Es,fa=new P,Ba=class extends Oe{constructor(t=new De,e=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Ud.copy(s).invert(),vc.copy(t.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);fa.fromBufferAttribute(d,m),Nd(fa,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)fa.fromBufferAttribute(d,g),Nd(fa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nd(i,t,e,n,s,r,a){let o=vc.distanceSqToPoint(i);if(o<e){let l=new P;vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var dn=class extends nn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],a=[],o=new P,l=new ce;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_c=class extends gr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var pa=new P,hl=new jc,dl=new jc,ul=new jc,bc=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),c=pa);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),hl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),dl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),dl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(hl.calc(l),dl.calc(l),ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Od(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ly(i,t){let e=1-i;return e*e*t}function Dy(i,t){return 2*(1-i)*i*t}function ky(i,t){return i*i*t}function or(i,t,e,n){return Ly(i,t)+Dy(i,e)+ky(i,n)}function Uy(i,t){let e=1-i;return e*e*e*t}function Ny(i,t){let e=1-i;return 3*e*e*i*t}function Oy(i,t){return 3*(1-i)*i*i*t}function Fy(i,t){return i*i*i*t}function lr(i,t,e,n,s){return Uy(i,t)+Ny(i,e)+Oy(i,n)+Fy(i,s)}var za=class extends un{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mc=class extends un{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends un{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wc=class extends un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends un{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sc=class extends un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Od(o,l.x,c.x,h.x,d.x),Od(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Fd=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:bc,CubicBezierCurve:za,CubicBezierCurve3:Mc,EllipseCurve:gr,LineCurve:Ha,LineCurve3:wc,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Sc,SplineCurve:Ga}),Ec=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fd[s.type]().fromJSON(s))}return this}},xr=class extends Ec{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ha(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Va(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new za(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new gr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tc=class i extends De{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new rt,f=new P,g=new P,y=new P,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*s,M=Math.sin(_),C=Math.cos(_);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*C,a.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),o.push(u.x,u.y);let A=l[3*T+0]*M,E=l[3*T+1],k=l[3*T+0]*C;c.push(A,E,k)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let M=_+v*t.length,C=M,T=M+t.length,A=M+t.length+1,E=M+1;r.push(C,T,E),r.push(A,E,T)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},di=class i extends Tc{constructor(t=1,e=1,n=4,s=8){let r=new xr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Di=class i extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function v(){let M=new P,C=new P,T=0,A=(e-t)/n;for(let E=0;E<=r;E++){let k=[],x=E/r,b=x*(e-t)+t;for(let D=0;D<=s;D++){let L=D/s,B=L*l+o,$=Math.sin(B),z=Math.cos(B);C.x=b*$,C.y=-x*n+m,C.z=b*z,d.push(C.x,C.y,C.z),M.set($,A,z).normalize(),u.push(M.x,M.y,M.z),f.push(L,1-x),k.push(g++)}y.push(k)}for(let E=0;E<s;E++)for(let k=0;k<r;k++){let x=y[k][E],b=y[k+1][E],D=y[k+1][E+1],L=y[k][E+1];t>0&&(h.push(x,b,L),T+=3),e>0&&(h.push(b,D,L),T+=3)}c.addGroup(p,T,0),p+=T}function _(M){let C=g,T=new rt,A=new P,E=0,k=M===!0?t:e,x=M===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),g++;let b=g;for(let D=0;D<=s;D++){let B=D/s*l+o,$=Math.cos(B),z=Math.sin(B);A.x=k*z,A.y=m*x,A.z=k*$,d.push(A.x,A.y,A.z),u.push(0,x,0),T.x=$*.5+.5,T.y=z*.5*x+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){let L=C+D,B=b+D;M===!0?h.push(B,B+1,L):h.push(B+1,B,L),E+=3}c.addGroup(p,E,M===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ac=class i extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new P,M=new P,C=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],M),f(e[T+2],C),l(_,M,C,v)}function l(v,_,M,C){let T=C+1,A=[];for(let E=0;E<=T;E++){A[E]=[];let k=v.clone().lerp(M,E/T),x=_.clone().lerp(M,E/T),b=T-E;for(let D=0;D<=b;D++)D===0&&E===T?A[E][D]=k:A[E][D]=k.clone().lerp(x,D/b)}for(let E=0;E<T;E++)for(let k=0;k<2*(T-E)-1;k++){let x=Math.floor(k/2);k%2===0?(u(A[E][x+1]),u(A[E+1][x]),u(A[E][x])):(u(A[E][x+1]),u(A[E+1][x+1]),u(A[E+1][x]))}}function c(v){let _=new P;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let M=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let _=a[v+0],M=a[v+2],C=a[v+4],T=Math.max(_,M,C),A=Math.min(_,M,C);T>.9&&A<.1&&(_<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){let v=new P,_=new P,M=new P,C=new P,T=new rt,A=new rt,E=new rt;for(let k=0,x=0;k<r.length;k+=9,x+=6){v.set(r[k+0],r[k+1],r[k+2]),_.set(r[k+3],r[k+4],r[k+5]),M.set(r[k+6],r[k+7],r[k+8]),T.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),C.copy(v).add(_).add(M).divideScalar(3);let b=m(C);y(T,x+0,v,b),y(A,x+2,_,b),y(E,x+4,M,b)}}function y(v,_,M,C){C<0&&v.x===1&&(a[_]=v.x-1),M.x===0&&M.z===0&&(a[_]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var yr=class extends xr{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}},By={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(n&&(r=Wy(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return vr(r,a,e,o,l,f,0),a}};function yu(i,t,e,n,s){let r,a;if(s===ev(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Bd(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Bd(r,i[r],i[r+1],a);return a&&Qa(a,a.next)&&(br(a),a=a.next),a}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qa(e,e.next)||ye(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ky(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Hy(i,n,s,r):zy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),br(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vy(ki(i),t,e),vr(i,t,e,n,s,r,2)):a===2&&Gy(i,t,e,n,s,r):vr(ki(i),t,e,n,s,r,1);break}}}function zy(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&gs(s,o,r,l,a,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hy(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ye(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Rc(f,g,t,e,n),v=Rc(y,m,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=p&&M&&M.z<=v;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,d,c,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&gs(o,h,l,d,c,u,M.x,M.y)&&ye(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,d,c,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&gs(o,h,l,d,c,u,M.x,M.y)&&ye(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vy(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Qa(s,r)&&vu(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return ki(n)}function Gy(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jy(a,o)){let l=_u(a,o);a=ki(a,a.next),l=ki(l,l.next),vr(a,t,e,n,s,r,0),vr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wy(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=yu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jy(c));for(s.sort(qy),r=0;r<s.length;r++)e=$y(s[r],e);return e}function qy(i,t){return i.x-t.x}function $y(i,t){let e=Xy(i,t);if(!e)return t;let n=_u(e,i);return ki(n,n.next),ki(e,e.next)}function Xy(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),_r(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Yy(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function Yy(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function Ky(i,t,e,n){let s=i;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function jy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qy(i,t)&&(_r(i,t)&&_r(t,i)&&tv(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Qa(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qa(i,t){return i.x===t.x&&i.y===t.y}function vu(i,t,e,n){let s=ga(ye(i,t,e)),r=ga(ye(i,t,n)),a=ga(ye(e,n,i)),o=ga(ye(e,n,t));return!!(s!==r&&a!==o||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||a===0&&ma(e,i,n)||o===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Qy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function tv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _u(i,t){let e=new Cc(i.i,i.x,i.y),n=new Cc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bd(i,t,e,n){let s=new Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ev(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];zd(t),Hd(n,t);let a=t.length;e.forEach(zd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hd(n,e[l]);let o=By.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mr=class i extends Ac{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wa=class i extends De{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,g=new rt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,_=v,M=v+n+1,C=v+n+2,T=v+1;o.push(_,M,T),o.push(M,C,T)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},qa=class i extends De{constructor(t=new yr([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;cr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];cr.isClockWise(v)===!0&&(g[m]=v.reverse())}let y=cr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=y.length;m<p;m++){let v=y[m],_=v[0]+d,M=v[1]+d,C=v[2]+d;n.push(_,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nv(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function nv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var $e=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+M,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let _=h[p][v+1],M=h[p][v],C=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(_,M,T),(p!==n-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bt=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wr=class extends bt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function xa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function iv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,o=2*e-n;break;case Gh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:a=t,l=2*n-e;break;case Gh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[c+C]+_*a[l+C]+M*a[d+C];return r}},Ic=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Lc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sa:e=this.InterpolantFactoryMethodDiscrete;break;case Ql:e=this.InterpolantFactoryMethodLinear;break;case Uo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&iv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ql;var Ui=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Sa;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Sn{};Dc.prototype.ValueTypeName="color";var kc=class extends Sn{};kc.prototype.ValueTypeName="number";var Uc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)li.slerpFlat(r,0,a,c-o,a,c,l);return r}},$a=class extends Sn{InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Sa;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Sn{};Nc.prototype.ValueTypeName="vector";var Oc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},sv=new Oc,Fc=class{constructor(t){this.manager=t!==void 0?t:sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ps=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fl=new ce,Vd=new P,Gd=new P,Xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wd=new ce,nr=new P,pl=new P,Bc=class extends Xa{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd)}},Ya=class extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},zc=class extends Xa{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qc="\\[\\]\\.:\\/",rv=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",av="[^"+Qc.replace("\\.","")+"]",ov=/((?:WC+[\/:])*)/.source.replace("WC",th),lv=/(WCOD+)?/.source.replace("WCOD",av),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),dv=new RegExp("^"+ov+lv+cv+hv+"$"),uv=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rv,"")}static parseTrackName(t){let e=dv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);uv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Hc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lv=new Float32Array(1);var qd=new ce,Ka=class{constructor(t,e,n=0,s=1/0){this.ray=new ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qd),this}intersectObject(t,e=!0,n=[]){return Vc(t,this,n,e),n.sort($d),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vc(t[s],this,n,e);return n.sort($d),n}};function $d(i,t){return i.distance-t.distance}function Vc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Vc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ds=class extends hi{constructor(){super();let t=new be;t.deleteAttribute("uv");let e=new bt({side:Ie}),n=new bt,s=new Ya(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new W(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new W(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new W(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new W(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new W(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new W(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new W(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new W(t,Ls(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new W(t,Ls(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new W(t,Ls(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new W(t,Ls(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new W(t,Ls(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new W(t,Ls(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ls(i){let t=new me;return t.color.setScalar(i),t}var Rr=new P;function fn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Rr.copy(t),Rr[n]=0,Rr.normalize();let c=.5*a/(a+o),h=1-Rr.angleTo(i)/l;return Math.sign(Rr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var eo=class extends be{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new P,l=new P,c=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new P,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=fn(g,l,"z","y",r,n),u[p+1]=1-fn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),u[p+0]=1-fn(g,l,"z","y",r,n),u[p+1]=1-fn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),u[p+0]=1-fn(g,l,"x","z",r,t),u[p+1]=fn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),u[p+0]=1-fn(g,l,"x","z",r,t),u[p+1]=1-fn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),u[p+0]=1-fn(g,l,"x","y",r,t),u[p+1]=1-fn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),u[p+0]=fn(g,l,"x","y",r,t),u[p+1]=1-fn(g,l,"y","x",r,e);break}}};var ks=[{id:0,name:"Mavi",hex:3111935},{id:1,name:"K\u0131rm\u0131z\u0131",hex:15874634},{id:2,name:"Sar\u0131",hex:16761876},{id:3,name:"Ye\u015Fil",hex:3133263},{id:4,name:"Mor",hex:10112511},{id:5,name:"Turkuaz",hex:1627366},{id:6,name:"Pembe",hex:16735416}],fi=99,eh=2,bu=4,Mu=3,wu=8,Fe=7,Su=4;var nh="busPuzzleDeluxe.save.v1",Me={mode:"test",admob:{appIdAndroid:"ca-app-pub-3940256099942544~3347511713",rewardedUnitAndroid:"ca-app-pub-3940256099942544/5224354917",interstitialUnitAndroid:"ca-app-pub-3940256099942544/1033173712"},testDurationMs:3e3},Us={startAfterLevel:3,every:[4,5],minGapMs:12e4},Ns={productId:"remove_ads",everyLevels:10,firstAfterLevel:8,maxOffers:5},Hn={dailyHour:19,dailyMinute:30,comebackDays:[3,7,14],comebackHour:12,smallIcon:"ic_stat_bus"},ie={undo:60,hint:40,recall:80,call:120,moves:70,time:70,extraSlot:150,vip:100,shuffle:90,permSlot:[400,800,1500],convert:100,seat:60},ih=3;var no=[{id:"starter",name:"Ba\u015Flang\u0131\xE7 Paketi",price:420,items:{undo:3,hint:3,shuffle:2,vip:2},tag:"Pop\xFCler"},{id:"vip5",name:"VIP Paketi",price:400,items:{vip:5},tag:"%20 indirim"},{id:"shuffle5",name:"Kar\u0131\u015Ft\u0131r Paketi",price:360,items:{shuffle:5},tag:"%20 indirim"},{id:"master",name:"Usta Paketi",price:1100,items:{undo:5,hint:5,recall:3,call:3,shuffle:4,vip:5},tag:"En avantajl\u0131"}],Fi={mode:"off",packs:[{id:"c500",productId:"coins_500",coins:500,label:"Avu\xE7 Dolusu"},{id:"c1300",productId:"coins_1300",coins:1300,label:"Kese"},{id:"c3500",productId:"coins_3500",coins:3500,label:"Sand\u0131k"},{id:"c9000",productId:"coins_9000",coins:9e3,label:"Hazine"}]},pi=3,Eu=100,Vn=3,Ke={mode:"local",baseUrl:"https://SUNUCU-ADRESINIZ",dayOffsetMin:180,weeklyRewards:[500,300,150],timeoutMs:7e3},sn={need:5,coins:150,power:["hint",2]};var Bs=new Map;function Ct(i,t,e,n,s=3){let r=`rb${i}|${t}|${e}|${n}`;return Bs.has(r)||Bs.set(r,new eo(i,t,e,s,n)),Bs.get(r)}function $t(i,t){return Bs.has(i)||Bs.set(i,t()),Bs.get(i)}var sh=new Map;function zt(i,t){return sh.has(i)||sh.set(i,t()),sh.get(i)}var Pr={vivid:ks.map(i=>i.hex),pastel:[8368383,16748440,16768890,8381338,12950527,8579314,16753621],neon:[2059263,16719677,16772608,65365,11600127,61695,16723888],retro:[4026292,12863291,14723118,4889180,8215206,4171683,14251933]},Tu={steel:{color:13620958,metal:.9,rough:.25},gold:{color:16762938,metal:1,rough:.2},neon:{color:3535103,metal:.4,rough:.3,emissive:696240},chrome:{color:16120063,metal:1,rough:.08}},Ir={gold:{body:16103210,trim:16773296,glow:16766042,label:"Alt\u0131n"},platinum:{body:14279148,trim:16777215,glow:12576511,label:"Platin"},royal:{body:6958335,trim:16766554,glow:11897855,label:"Kraliyet"}};function Ve(i){return zt("paint"+i,()=>new wr({color:i,roughness:.42,metalness:0,clearcoat:.35,clearcoatRoughness:.3}))}function so(i){return zt("paintlux"+i,()=>new wr({color:i,roughness:.2,metalness:.4,clearcoat:1,clearcoatRoughness:.08}))}var Bi=(i,t)=>new At(i).lerp(new At(16777215),t).getHex(),ro=(i,t)=>new At(i).lerp(new At(0),t).getHex(),Ot={glassDark:()=>zt("glassdark",()=>new bt({color:1318958,roughness:.04,metalness:.5,transparent:!0,opacity:.72,depthWrite:!1})),chrome:()=>zt("chromeb",()=>new bt({color:15922683,metalness:1,roughness:.1})),led:()=>zt("ledbar",()=>new bt({color:10483967,emissive:3532543,emissiveIntensity:1.4,roughness:.2})),glass:()=>zt("glass",()=>new bt({color:3825542,roughness:.05,metalness:.3,transparent:!0,opacity:.42,depthWrite:!1})),interior:()=>zt("interior",()=>new bt({color:10466508,roughness:.9,side:Ie})),tire:()=>zt("tire",()=>new bt({color:1711138,roughness:.85})),bumper:()=>zt("bumper",()=>new bt({color:3883602,roughness:.5,metalness:.2})),head:()=>zt("headlight",()=>new bt({color:16774856,emissive:16771488,emissiveIntensity:.9,roughness:.2})),tail:()=>zt("taillight",()=>new bt({color:16724032,emissive:16715808,emissiveIntensity:.7,roughness:.3})),white:()=>zt("white",()=>new bt({color:16054010,roughness:.5})),dark:()=>zt("darkpl",()=>new bt({color:2764602,roughness:.7}))};function Au(i){let t=Tu[i]||Tu.steel;return zt("rim"+i,()=>new bt({color:t.color,metalness:t.metal,roughness:t.rough,emissive:t.emissive||0,emissiveIntensity:t.emissive?.6:0}))}function Cr(){return zt("gold",()=>new bt({color:16762938,metalness:1,roughness:.22,emissive:3810304,emissiveIntensity:.4}))}var Os=null;function Ru(){if(Os)return Os;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.translate(64,64),t.lineJoin="round";let e=()=>{t.beginPath(),t.moveTo(0,-46),t.lineTo(34,-6),t.lineTo(13,-6),t.lineTo(13,42),t.lineTo(-13,42),t.lineTo(-13,-6),t.lineTo(-34,-6),t.closePath()};return e(),t.lineWidth=14,t.strokeStyle="rgba(20,30,50,.55)",t.stroke(),e(),t.fillStyle="#ffffff",t.fill(),Os=new dn(i),Os.anisotropy=4,Os.colorSpace=Ee,Os}function Cu(i,t,e){return $t("plate"+i+t+e,()=>{let n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,128),s.fillStyle=t,s.font="900 78px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,70);let r=new dn(n);return r.colorSpace=Ee,r})}function Pu(i,t,e=0){return i!=="city"?i:t===2?e%2?"van":"mini":t>=4?"coach":"city"}function Lr(i){return i*1-.12}var Iu=.76,Gn={1:.85,2:.8,3:.75,4:.72};function fv(){return $t("checker",()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<2;s++)t.fillStyle=(n+s)%2?"#14171f":"#ffffff",t.fillRect(n*16,s*16,16,16);let e=new dn(i);return e.colorSpace=Ee,e})}function pv(i){let t=Lr(1),e=Iu,n=new ne,s=Ve(i.hex),r=Ve(Bi(i.hex,.12)),a={wheels:[],seatMarks:[],body:[],bodyMat:s,style:"taxi"},o=.1,l=new W(Ct(e-.02,.27,t,.12),s);l.position.y=o+.135,l.castShadow=!0,n.add(l),a.body.push(l);let c=t*.62,h=.25,d=o+.27,u=t*.08,f=new W(Ct(e-.16,h,c-.04,.03),Ot.interior());f.position.set(0,d+h/2,u),n.add(f);let g=new W(Ct(e-.1,.07,c+.04,.04),r);g.position.set(0,d+h+.03,u),g.castShadow=!0,n.add(g),a.body.push(g);let y=d+h+.065;for(let x=-1;x<=1;x+=2){let b=new W(Ct(.03,h-.04,c-.1,.012,2),Ot.glass());b.position.set(x*(e/2-.09),d+h/2,u),n.add(b)}let m=new W(Ct(e-.2,h-.04,.03,.012,2),Ot.glass());m.position.set(0,d+h/2,u-c/2+.01),m.rotation.x=-.25,n.add(m);let p=m.clone();p.position.z=u+c/2-.01,p.rotation.x=.25,n.add(p);for(let x=-1;x<=1;x+=2){let b=new W(new he(t-.14,.07),new me({map:fv()}));b.rotation.y=x*Math.PI/2,b.position.set(x*(e/2-.009),o+.15,0),n.add(b)}let v=Cu("TAXI","#2a1a00","#ffd23f"),_=[zt("taxiside",()=>new bt({color:16765503,emissive:16758784,emissiveIntensity:.7})),new bt({map:v,emissive:16761856,emissiveMap:v,emissiveIntensity:.6})],M=new W(Ct(.3,.09,.14,.02,2),_[0]);M.position.set(0,y+.045,u),n.add(M);for(let x of[-1,1]){let b=new W(new he(.26,.075),_[1]);b.position.set(0,y+.045,u+x*.0715),b.rotation.y=x>0?0:Math.PI,n.add(b)}let C=new W(Ct(e-.06,.07,.07,.03,2),Ot.bumper());C.position.set(0,o+.06,-t/2+.01),n.add(C);let T=C.clone();T.position.z=t/2-.01,n.add(T);for(let x=-1;x<=1;x+=2){let b=new W($t("hl",()=>new $e(.058,12,8)),Ot.head());b.scale.set(1,.8,.5),b.position.set(x*.22,o+.2,-t/2+.01),n.add(b);let D=new W($t("tl",()=>new be(.1,.045,.03)),Ot.tail());D.position.set(x*.24,o+.22,t/2-.005),n.add(D)}let A=new W(Ct(.22,.06,.03,.015,2),Ot.dark());A.position.set(0,o+.17,-t/2+.008),n.add(A);let E=Au(i.rim||"steel");for(let x of[-t/2+.22,t/2-.22])for(let b=-1;b<=1;b+=2){let D=new W($t("arch",()=>new Di(.2,20)),zt("archm",()=>new bt({color:1711656,roughness:.9})));D.rotation.y=b*Math.PI/2,D.position.set(b*(e/2-.004),.17,x),n.add(D);let L=new ne,B=new W($t("tire",()=>new qe(.15,.15,.12,20)),Ot.tire());B.rotation.z=Math.PI/2,B.castShadow=!0;let $=new W($t("hub",()=>new qe(.085,.085,.125,16)),E);$.rotation.z=Math.PI/2;let z=new W($t("spoke",()=>new be(.13,.15,.02)),Ot.dark());z.position.x=b*.05,z.scale.set(1,.7,1);let K=z.clone();K.rotation.x=Math.PI/2,L.add(B,$,z,K),L.position.set(b*(e/2-.04),.15,x),n.add(L),a.wheels.push(L)}let k=i.seats||4;for(let x=0;x<k;x++){let b=Math.floor(x/2),D=x%2,L=new W($t("seathead",()=>new $e(.075,12,10)),new bt({color:16777215,roughness:.5}));L.position.set((D===0?-1:1)*.15,d+h*.55,u+(b===0?-.1:.1)),L.scale.setScalar(.92);let B=new W($t("seatbody",()=>new di(.07,.05,4,8)),L.material);B.position.set(0,-.1,0),L.add(B),L.visible=!1,n.add(L),a.seatMarks.push(L)}if(!i.noArrow){let x=new W($t("arrowplane",()=>new he(1,1)),new me({map:Ru(),transparent:!0,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.scale.set(.42,.42,1),x.position.set(0,y+.105,-t*.2+u*.5),x.renderOrder=3,n.add(x),a.arrow=x}return n.userData.parts=a,n.userData.dims={Lz:t,W:e,roofTop:y+.09},n}function ao(i){if(i.len===1&&!i.vip)return pv(i);let t=i.vip?"coach":i.style||"city",e=Lr(i.len),n=Iu,s=Ir[i.vipSkin||"gold"],r=i.vip?s.body:i.hex,a=new ne,o=t==="luxury",l=t==="modern",c=o?so(r):Ve(r),h=i.vip?Ve(s.trim):t==="express"?Ve(16054267):t==="sport"?Ve(2106156):t==="tourist"?Ve(ro(r,.05)):o?so(Bi(r,.06)):Ve(l?ro(r,.08):Bi(r,.12)),d={wheels:[],seatMarks:[],body:[],bodyMat:c,style:t},u=t==="mini"?.44:t==="van"?.42:l?.32:o?.36:.38,f=t==="school"?.38:t==="mini"?.24:t==="van"?.27:l?.35:o?.31:.3,g=.12,y=new W(Ct(n,u,e,t==="mini"?.16:l?.15:.11),c);y.position.y=g+u/2,y.castShadow=!0,a.add(y),d.body.push(y);let m=n-.06,p=e-(t==="mini"?.2:.14),v=g+u,_=new W(Ct(m-.06,f,p-.06,.03),Ot.interior());_.position.y=v+f/2,a.add(_);let M=new W(Ct(n-.02,.09,p+.06,.04),h);M.position.y=v+f+.04,M.castShadow=!0,a.add(M),d.body.push(M);let C=v+f+.085,T=t==="coach"||l?1:Math.max(1,Math.round((p-.2)/.42)),A=t==="coach"||l?0:.07,E=p-.22,k=(E-A*(T-1))/T;for(let et=-1;et<=1;et+=2){for(let H=0;H<T;H++){let Y=-E/2+k/2+H*(k+A),Q=new W(Ct(.03,f-.06,k,.012,2),o?Ot.glassDark():Ot.glass());Q.position.set(et*(m/2-.005),v+f/2,Y),a.add(Q)}let lt=new W(Ct(.04,f,p,.015,2),c);lt.position.set(et*(m/2-.03),v+f/2,0),lt.scale.set(.6,.12,1),lt.position.y=v+.01,a.add(lt)}let x=new W(Ct(m-.1,f-.06,.03,.012,2),Ot.glass());x.position.set(0,v+f/2,-p/2+.008),a.add(x);let b=x.clone();b.position.z=p/2-.008,b.scale.set(.85,.8,1),a.add(b);let D=new W(Ct(n-.04,.08,.07,.03,2),i.vip?Cr():Ot.bumper());D.position.set(0,g+.07,-e/2+.01),a.add(D);let L=D.clone();L.position.z=e/2-.01,a.add(L);for(let et=-1;et<=1;et+=2){let lt=new W($t("hl",()=>new $e(.058,12,8)),Ot.head());lt.scale.set(1,.8,.5),lt.position.set(et*.24,g+.24,-e/2+.01),a.add(lt);let H=new W($t("tl",()=>new be(.1,.045,.03)),Ot.tail());H.position.set(et*.26,g+.26,e/2-.005),a.add(H)}let B=new W(Ct(.26,.07,.03,.015,2),Ot.dark());if(B.position.set(0,g+.2,-e/2+.008),a.add(B),t==="school"){let et=new W(Ct(n+.012,.05,e-.06,.012,2),Ot.dark());et.position.y=g+.2,a.add(et);let lt=new W($t("stopsign",()=>new qe(.075,.075,.015,8)),zt("stop",()=>new bt({color:14690858,roughness:.4})));lt.rotation.z=Math.PI/2,lt.position.set(-n/2-.03,g+u-.02,-e/2+.3),a.add(lt)}if(t==="coach"){let et=new W(Ct(.26,.05,Math.min(.6,p*.35),.025,2),zt("acunit",()=>new bt({color:14673390,roughness:.6})));et.position.set(0,C+.02,e*.12),a.add(et);let lt=new W(Ct(n+.012,.07,e-.2,.02,2),zt("skirt",()=>new bt({color:11187394,metalness:.7,roughness:.3})));lt.position.y=g+.06,a.add(lt)}if(t==="van"){let et=new W(Ct(n+.012,.05,e-.1,.012,2),Ot.white());et.position.y=g+.2,a.add(et);for(let Y of[-1,1]){let Q=new W(Ct(.02,.24,.03,.008,2),Ot.dark());Q.position.set(Y*(n/2+.004),g+.28,-e*.08),a.add(Q)}let lt=new W(Ct(.46,.035,p*.55,.012,2),Ot.dark());lt.position.set(0,C+.012,e*.1),a.add(lt);let H=new W($t("beacon",()=>new $e(.05,10,8)),zt("beaconm",()=>new bt({color:16756992,emissive:16747008,emissiveIntensity:1.2})));H.position.set(0,C+.06,-e*.3),a.add(H)}if(t==="mini"){let et=new W(Ct(.4,.04,p*.5,.015,2),Ot.dark());et.position.set(0,C+.015,e*.08),a.add(et)}if(l){let et=new W(Ct(n-.14,.022,.03,.01,2),Ot.led());et.position.set(0,g+.3,-e/2+.006),a.add(et);let lt=new W(Ct(n+.012,.035,e-.14,.012,2),Ot.white());lt.position.y=g+.17,a.add(lt);let H=new W(Ct(.12,.03,Math.min(.45,p*.3),.012,2),Ot.dark());H.position.set(0,C+.01,e*.3),a.add(H);let Y=new W(Ct(n+.012,.06,e-.18,.02,2),Ot.dark());Y.position.y=g+.05,a.add(Y)}if(o){let et=new W(Ct(n+.014,.022,e-.08,.01,2),Ot.chrome());et.position.y=g+u-.02,a.add(et);let lt=new W(Ct(n+.014,.07,e-.16,.02,2),Ot.chrome());lt.position.y=g+.055,a.add(lt);let H=new W(Ct(.32,.085,.034,.015,2),Ot.chrome());H.position.set(0,g+.2,-e/2+.014),a.add(H);for(let Q of[-e*.3,e*.3]){let ht=new W(Ct(n+.02,.02,.035,.01,2),Ot.chrome());ht.position.set(0,g+u+f*.5,Q),a.add(ht)}let Y=new W($t("emblem",()=>new $e(.035,12,8)),Cr());Y.position.set(0,g+.3,-e/2-.01),a.add(Y)}if(t==="express"){for(let Y of[-.17,.17]){let Q=new W(new he(.1,p-.1),Ve(r));Q.rotation.x=-Math.PI/2,Q.position.set(Y,C+.004,0),a.add(Q)}let et=new W(Ct(n-.18,.04,.03,.01,2),Ot.led());et.position.set(0,g+u+f-.03,-e/2+.006),a.add(et);let lt=new W(Ct(n+.012,.045,e-.1,.012,2),Ot.white());lt.position.y=g+.19,a.add(lt);let H=new W(Ct(.3,.05,Math.min(.55,p*.3),.025,2),Ot.white());H.position.set(0,C+.02,e*.28),a.add(H)}if(t==="tourist"){let et=new W(Ct(n-.22,.03,p-.3,.02,2),Ot.glass());et.position.set(0,C+.005,0),a.add(et);let lt=zt("tlights",()=>new bt({color:16769658,emissive:16761876,emissiveIntensity:1.1}));for(let Y of[-1,1]){let Q=new W(Ct(.035,.03,p-.2,.012,2),lt);Q.position.set(Y*(n/2-.04),C+.01,0),a.add(Q)}let H=new W(Ct(n+.012,.05,e-.1,.012,2),zt("tstripe",()=>new bt({color:16761876,roughness:.4})));H.position.y=g+.19,a.add(H)}if(t==="sport"){for(let Y of[-.1,.1]){let Q=new W(new he(.09,p-.05),Ot.white());Q.rotation.x=-Math.PI/2,Q.position.set(Y,C+.004,0),a.add(Q)}let et=new W(Ct(n-.1,.04,.1,.012,2),Ot.dark());et.position.set(0,C+.07,e/2-.12),a.add(et);for(let Y of[-1,1]){let Q=new W(Ct(.03,.08,.04,.01,2),Ot.dark());Q.position.set(Y*.28,C+.03,e/2-.12),a.add(Q)}let lt=new W(Ct(n+.012,.04,e-.1,.012,2),Ot.white());lt.position.y=g+.2,a.add(lt);let H=new W(Ct(n+.012,.06,e-.18,.02,2),Ot.dark());H.position.y=g+.05,a.add(H)}let $=i.vip?Cr():Au(i.rim||"steel"),z=[],K=-e/2+.26,F=e/2-.26;z.push(K,F),i.len>=3&&(z.splice(1,0,(K+F)/2+(i.len>=4?-.35:0)),i.len>=4&&z.push((K+F)/2+.35));for(let et of z)for(let lt=-1;lt<=1;lt+=2){let H=new W($t("arch",()=>new Di(.2,20)),zt("archm",()=>new bt({color:1711656,roughness:.9})));H.rotation.y=lt*Math.PI/2,H.position.set(lt*(n/2+.004),.17,et),a.add(H);let Y=new ne,Q=new W($t("tire",()=>new qe(.15,.15,.12,20)),Ot.tire());Q.rotation.z=Math.PI/2,Q.castShadow=!0;let ht=new W($t("hub",()=>new qe(.085,.085,.125,16)),$);ht.rotation.z=Math.PI/2;let kt=$t("spoke",()=>new be(.13,.15,.02)),Tt=new W(kt,Ot.dark());Tt.position.x=lt*.05,Tt.scale.set(1,.7,1);let Ht=Tt.clone();Ht.rotation.x=Math.PI/2,Y.add(Q,ht,Tt,Ht),Y.position.set(lt*(n/2-.02),.15,et),a.add(Y),d.wheels.push(Y)}let st=i.seats,it=2,dt=Math.ceil(st/it);for(let et=0;et<st;et++){let lt=Math.floor(et/it),H=et%it,Y=dt===1?0:-E/2+.16+(E-.32)*(lt/(dt-1)),Q=new W($t("seathead",()=>new $e(.075,12,10)),new bt({color:16777215,roughness:.5}));Q.position.set((H===0?-1:1)*.16,v+f*.55,Y);let ht=new W($t("seatbody",()=>new di(.07,.05,4,8)),Q.material);ht.position.set(0,-.1,0),Q.add(ht),Q.visible=!1,a.add(Q),d.seatMarks.push(Q)}if(!i.noArrow){let et=new W($t("arrowplane",()=>new he(1,1)),new me({map:Ru(),transparent:!0,depthWrite:!1}));et.rotation.x=-Math.PI/2;let lt=Math.min(.52,e*.55);et.scale.set(lt,lt,1),et.position.set(0,C+(t==="coach"||t==="mini"||l||o||t==="express"||t==="tourist"||t==="sport"||t==="van"?.056:.006),t==="coach"?-e*.22:i.len>=2?-e*.08:0),et.renderOrder=3,a.add(et),d.arrow=et}if(i.vip){let et=new W(new he(.5,.25),new bt({map:Cu("VIP","#3a2400","#ffd45a"),roughness:.3,metalness:.5}));et.rotation.x=-Math.PI/2,et.position.set(0,C+.012,e*.3),a.add(et);for(let Y of[-e*.3,e*.3]){let Q=new W(Ct(n+.02,.025,.04,.01,2),Cr());Q.position.set(0,g+u-.03,Y),a.add(Q)}let lt=new W(Ct(n+.016,.022,e-.1,.01,2),Cr());lt.position.y=g+.2,a.add(lt);let H=new W($t("vipglow",()=>new he(1,1)),new me({map:zi(),color:s.glow,transparent:!0,blending:cn,depthWrite:!1,opacity:.85}));H.rotation.x=-Math.PI/2,H.scale.set(n+1.2,e+1.2,1),H.position.y=.02,H.renderOrder=1,a.add(H),d.glow=H}return a.userData.parts=d,a.userData.dims={Lz:e,W:n,roofTop:C},a}var io=null;function zi(){if(io)return io;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),io=new dn(i),io}function Dr(i,t,e){i.userData.parts.seatMarks.forEach((s,r)=>{r<t.length?(s.visible=!0,s.material.color.setHex(e(t[r]))):s.visible=!1})}function Lu(i,t){let e=i.userData.parts,n=e.style==="luxury"?so(t):Ve(t);for(let s of e.body)s.material=n;e.style==="taxi"?e.body[1].material=Ve(Bi(t,.12)):e.style==="luxury"?e.body[1].material=so(Bi(t,.06)):e.style==="express"?e.body[1].material=Ve(16054267):e.style==="sport"?e.body[1].material=Ve(2106156):e.body[1].material=e.style==="modern"?Ve(ro(t,.08)):Ve(Bi(t,.12)),e.bodyMat=n}var Fs=null;function mv(){if(Fs)return Fs;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#1a1d27";for(let e of[40,88])t.beginPath(),t.ellipse(e,52,7,10,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(e-2,47,3,0,7),t.fill(),t.fillStyle="#1a1d27";t.fillStyle="rgba(255,110,140,.5)";for(let e of[24,104])t.beginPath(),t.ellipse(e,78,10,6,0,0,7),t.fill();return t.strokeStyle="#1a1d27",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.arc(64,74,14,.2*Math.PI,.8*Math.PI),t.stroke(),Fs=new dn(i),Fs.colorSpace=Ee,Fs.anisotropy=4,Fs}function rh(i,t,e=0){let n=t(i),s=new ne,r=zt("pbody"+n,()=>new bt({color:n,roughness:.55})),a=zt("phead"+n,()=>new bt({color:Bi(n,.22),roughness:.5})),o=zt("ppants",()=>new bt({color:2830917,roughness:.7})),l=new ne,c=new ne;c.scale.setScalar(1.22),c.add(l),s.add(c);let h=new W($t("pbodyg",()=>new di(.15,.16,4,10)),r);h.position.y=.36,h.castShadow=!0,l.add(h);let d=new ne;d.position.y=.66,l.add(d);let u=new W($t("pheadg",()=>new $e(.16,16,12)),a);u.castShadow=!0,d.add(u);let f=new W($t("faceplane",()=>new he(.2,.2)),zt("facemat",()=>new me({map:mv(),transparent:!0,depthWrite:!1})));f.position.set(0,0,.153),f.renderOrder=2,d.add(f);let g=e%4;if(g===1){let _=new W($t("beanie",()=>new $e(.17,12,8,0,Math.PI*2,0,Math.PI*.5)),zt("beanie"+n,()=>new bt({color:ro(n,.25),roughness:.8})));_.position.y=.04,_.rotation.x=-.15,d.add(_);let M=new W($t("pom",()=>new $e(.04,8,6)),zt("pomw",()=>new bt({color:16777215})));M.position.y=.2,d.add(M)}else if(g===2){let _=new W($t("capdome",()=>new $e(.168,12,8,0,Math.PI*2,0,Math.PI*.45)),zt("cap"+n,()=>new bt({color:16777215,roughness:.6})));_.position.y=.03,d.add(_);let M=new W($t("brim",()=>new qe(.1,.1,.018,12,1,!1,-Math.PI/2,Math.PI)),_.material);M.position.set(0,.07,.12),M.rotation.y=0,M.scale.set(1,1,1),d.add(M)}else if(g===3){let _=new W(Ct(.22,.26,.1,.04,2),zt("bp",()=>new bt({color:16777215,roughness:.6})));_.position.set(0,.38,-.17),l.add(_)}let y=$t("armg",()=>new di(.045,.1,3,6)),m=$t("legg",()=>new di(.055,.06,3,6)),p=[],v=[];for(let _=-1;_<=1;_+=2){let M=new ne;M.position.set(_*.19,.46,0);let C=new W(y,r);C.position.y=-.09,C.castShadow=!0,M.add(C),l.add(M),p.push(M);let T=new ne;T.position.set(_*.075,.18,0);let A=new W(m,o);A.position.y=-.07,A.castShadow=!0,T.add(A),l.add(T),v.push(T)}return s.userData={rig:l,head:d,arms:p,legs:v,body:h,colorIndex:i,phase:Math.random()*6.28,state:"idle",yaw:0},s}function Du(){let i=new ne,t=new W(new qe(.05,.07,1.9,8),zt("lamppole",()=>new bt({color:5857903,metalness:.6,roughness:.4})));t.position.y=.95,t.castShadow=!0,i.add(t);let e=new W(new be(.6,.05,.05),t.material);e.position.set(.28,1.9,0),i.add(e);let n=new W(Ct(.28,.06,.14,.02,2),zt("lampl",()=>new bt({color:16773828,emissive:16769946,emissiveIntensity:.8})));return n.position.set(.55,1.87,0),i.add(n),i}function ku(i=3715930){let t=new ne,e=new W(new qe(.07,.09,.5,8),zt("trunk",()=>new bt({color:9067066,roughness:.9})));e.position.y=.25,e.castShadow=!0,t.add(e);let n=zt("fol"+i,()=>new bt({color:i,roughness:.75,flatShading:!0}));for(let s=0;s<3;s++){let r=new W(new Mr(.34-s*.07,1),n);r.position.y=.66+s*.3,r.castShadow=!0,t.add(r)}return t}function Uu(){let i=new ne,t=new W(new qe(.28,.24,.2,14),zt("pot",()=>new bt({color:15265268,roughness:.5})));t.position.y=.1,t.castShadow=!0,i.add(t);let e=new W(new Mr(.27,1),zt("bushm",()=>new bt({color:7328058,roughness:.7,flatShading:!0})));return e.position.y=.36,e.castShadow=!0,i.add(e),i}function Nu(){let i=new ne,t=zt("wood",()=>new bt({color:13208410,roughness:.8})),e=new W(Ct(.9,.07,.3,.02,2),t);e.position.y=.32,e.castShadow=!0,i.add(e);let n=new W(Ct(.9,.22,.05,.02,2),t);n.position.set(0,.5,-.14),i.add(n);for(let s of[-.38,.38]){let r=new W(new be(.05,.3,.26),Ot.dark());r.position.set(s,.15,0),i.add(r)}return i}var zs=i=>t=>t===fi?16103210:(Pr[i]||Pr.vivid)[t];var ke={U:{x:0,y:-1,horiz:!1},D:{x:0,y:1,horiz:!1},L:{x:-1,y:0,horiz:!0},R:{x:1,y:0,horiz:!0}};function Hs(i){return i===1?bu:i*eh}function oo(i,t){return t?wu:Hs(i)}function kr(i,t={}){let e=i.buses.map((r,a)=>({id:a,color:r.v?fi:r.c,len:r.l,dir:r.d,x:r.x,y:r.y,x0:r.x,y0:r.y,vip:!!r.v,seats:r.s??oo(r.l,r.v),boarded:0,st:"board",slot:-1,arrived:!1})),n=t.slotsOpen??Su,s=[];for(let r=0;r<Fe;r++)s.push(r<n);return{w:i.w,h:i.h,buses:e,queue:i.queue.slice(),qi:0,slotOpen:s,slots:new Array(Fe).fill(null),vipSlot:null,moves:0,moveLimit:t.moveLimit??null,boardedTotal:0,win:t.window??pi}}var pn=i=>JSON.parse(JSON.stringify(i));function Vs(i){let t=[],e=ke[i.dir].horiz;for(let n=0;n<i.len;n++)t.push(e?[i.x+n,i.y]:[i.x,i.y+n]);return t}function gv(i){switch(i.dir){case"R":return[i.x+i.len-1,i.y];case"L":return[i.x,i.y];case"D":return[i.x,i.y+i.len-1];default:return[i.x,i.y]}}function Hi(i,t){let e=ke[t.dir],[n,s]=gv(t),r=[];for(;n+=e.x,s+=e.y,!(n<0||s<0||n>=i.w||s>=i.h);)r.push([n,s]);return r}function Gs(i,t=-1){let e=new Map;for(let n of i.buses)if(!(n.st!=="board"||n.id===t))for(let[s,r]of Vs(n))e.set(s+","+r,n.id);return e}function Vi(i,t){let e=Gs(i,t.id),n=new Set;for(let[s,r]of Hi(i,t)){let a=e.get(s+","+r);a!==void 0&&n.add(a)}return[...n]}function Gi(i,t){if(t.vip)return i.vipSlot===null?"V":-1;for(let e=0;e<Fe;e++)if(i.slotOpen[e]&&i.slots[e]===null)return e;return-1}function lo(i,t){let e=i.buses[t];if(!e||e.st!=="board")return{ok:!1,reason:"invalid"};if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{ok:!1,reason:"limit"};let n=Vi(i,e);if(n.length)return i.moveLimit!==null&&i.moves++,{ok:!1,reason:"blocked",blockers:n};let s=Gi(i,e);return s===-1?{ok:!1,reason:e.vip?"vipfull":"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,s==="V"?i.vipSlot=e.id:i.slots[s]=e.id,i.moves++,{ok:!0,slot:s})}function Ou(i,t){let e=i.buses[t];e&&(e.arrived=!0)}function ah(i){return i.qi<i.queue.length?i.queue[i.qi]:null}function Fu(i){let t=Math.min(i.win??pi,i.queue.length-i.qi);for(let e=0;e<t;e++){let n=i.queue[i.qi+e];for(let s=0;s<Fe;s++){let r=i.slots[s];if(r===null)continue;let a=i.buses[r];if(a.arrived&&a.color===n&&a.boarded<a.seats)return{bus:a,k:e}}}if(i.vipSlot!==null){let e=i.buses[i.vipSlot];if(e.arrived&&e.boarded<e.seats){for(let n=0;i.qi+n<i.queue.length;n++)if(i.queue[i.qi+n]===e.color)return{bus:e,k:n}}}return null}function oh(i){let t=Fu(i);return t?t.bus:null}function lh(i){let t=Fu(i);if(!t)return null;let{bus:e,k:n}=t;if(n>0){let[r]=i.queue.splice(i.qi+n,1);i.queue.splice(i.qi,0,r)}let s=i.queue[i.qi];return i.qi++,e.boarded++,i.boardedTotal++,{bus:e,color:s,full:e.boarded>=e.seats,from:n}}function ch(i,t){let e=i.buses[t];!e||e.st!=="parked"||(e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="gone",e.slot=-1)}function hh(i){for(let e of i.buses)e.st==="parked"&&(e.arrived=!0);let t=[];for(;;){let e=lh(i);if(!e)break;t.push(e),e.full&&ch(i,e.bus.id)}return t}function Bu(i){let t=[];for(let e of i.buses)e.st==="board"&&Vi(i,e).length===0&&Gi(i,e)!==-1&&t.push(e);return t}function co(i){if(i.qi>=i.queue.length)return{status:"won"};let t=Bu(i);if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{status:"lost",reason:"moves"};if(t.length===0){let n=i.buses.some(r=>r.st==="board");return{status:"lost",reason:i.buses.some(r=>r.st==="board"&&Vi(i,r).length===0)||!n?"noslot":"stuck"}}return{status:"playing"}}function dh(i){for(let t=0;t<Fe;t++)if(!i.slotOpen[t])return i.slotOpen[t]=!0,t;return-1}function zu(i,t){let e=i.buses[t];if(!e||e.st!=="parked"||!e.arrived)return{ok:!1,reason:"invalid"};let n={...e,x:e.x0,y:e.y0,st:"board"},s=Gs(i,t);for(let[r,a]of Vs(n))if(s.has(r+","+a))return{ok:!1,reason:"occupied"};return e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="board",e.slot=-1,e.x=e.x0,e.y=e.y0,e.arrived=!1,{ok:!0}}function Hu(i){let t=ah(i);if(t===null)return{ok:!1,reason:"empty"};let e=null,n=1e9;for(let r of i.buses){if(r.st!=="board"||r.vip||r.color!==t)continue;let a=Vi(i,r).length;a<n&&(n=a,e=r)}if(!e)return{ok:!1,reason:"none"};let s=Gi(i,e);return s===-1?{ok:!1,reason:"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,i.slots[s]=e.id,i.moves++,{ok:!0,id:e.id,slot:s})}function Vu(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip)return{ok:!1,reason:"invalid"};let n=Gi(i,e);return n===-1?{ok:!1,reason:"noslot"}:(e.st="parked",e.slot=n,e.arrived=!1,i.slots[n]=e.id,i.moves++,{ok:!0,id:e.id,slot:n})}function Gu(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip)return{ok:!1,reason:"invalid"};if(i.vipSlot!==null)return{ok:!1,reason:"vipfull"};let n=Vi(i,e).length>0;return e.st="parked",e.slot="V",e.arrived=!1,i.vipSlot=e.id,i.moves++,{ok:!0,id:e.id,blocked:n}}function uh(i,t,e){let n=i.buses[t];return!n||n.st!=="board"||n.vip?{ok:!1,reason:"invalid"}:n.color===e?{ok:!1,reason:"same"}:(n.color=e,{ok:!0})}function fh(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip||e.len<2||e.len>=4)return null;let n=ke[e.dir],s=Gs(i,t),r,a,o=e.x,l=e.y;return e.dir==="R"?(r=e.x-1,a=e.y,o=r):e.dir==="L"?(r=e.x+e.len,a=e.y):e.dir==="D"?(r=e.x,a=e.y-1,l=a):(r=e.x,a=e.y+e.len),r<0||a<0||r>=i.w||a>=i.h||s.has(r+","+a)?null:{nx:o,ny:l}}function ph(i,t){let e=fh(i,t);if(!e)return{ok:!1,reason:"nospace"};let n=i.buses[t];return n.x=e.nx,n.y=e.ny,n.x0=n.x,n.y0=n.y,n.len++,n.seats+=eh,{ok:!0}}function mh(i,t){let e=i.buses[t];return!!e&&e.st==="board"&&!e.vip&&e.seats<Hs(e.len)}function gh(i,t){return mh(i,t)?(i.buses[t].seats++,{ok:!0}):{ok:!1,reason:"full"}}function xv(i){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");if(i==="star"){e.translate(32,32),e.fillStyle="#fff",e.beginPath();for(let s=0;s<10;s++){let r=s%2?11:28,a=-Math.PI/2+s*Math.PI/5;e.lineTo(Math.cos(a)*r,Math.sin(a)*r)}e.closePath(),e.fill()}else{let s=e.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,64,64)}let n=new dn(t);return n.colorSpace=Ee,n}var ho=class{constructor(t,e,n){this.max=n,this.n=0,this.next=0,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.s0=new Float32Array(n),this.s1=new Float32Array(n),this.grav=new Float32Array(n),this.drag=new Float32Array(n);let s=new De;s.setAttribute("position",new Le(this.pos,3)),s.setAttribute("pcolor",new Le(this.col,3)),s.setAttribute("psize",new Le(this.size,1)),s.setAttribute("palpha",new Le(this.alpha,1)),this.geo=s,this.mat=new hn({transparent:!0,depthWrite:!1,blending:ii,uniforms:{map:{value:xv(e)},scale:{value:600}},vertexShader:`attribute vec3 pcolor; attribute float psize; attribute float palpha; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*1.0,t.a*vA); if(gl_FragColor.a<0.01) discard; }`}),this.pts=new Ba(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=10,t.add(this.pts);for(let r=0;r<n;r++)this.alpha[r]=0}emit(t,e,n,s,r,a,o,l,c,h,d=0,u=0){let f=this.next;this.next=(this.next+1)%this.max;let g=new At(o);this.pos.set([t,e,n],f*3),this.vel.set([s,r,a],f*3),this.col.set([g.r,g.g,g.b],f*3),this.life[f]=l,this.maxLife[f]=l,this.s0[f]=c,this.s1[f]=h,this.grav[f]=d,this.drag[f]=u,this.alpha[f]=1}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.alpha[e]!==0&&(this.alpha[e]=0,this.size[e]=0);continue}this.life[e]-=t;let n=1-Math.max(0,this.life[e])/this.maxLife[e],s=e*3;this.vel[s+1]-=this.grav[e]*t;let r=Math.max(0,1-this.drag[e]*t);this.vel[s]*=r,this.vel[s+1]*=r,this.vel[s+2]*=r,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.size[e]=this.s0[e]+(this.s1[e]-this.s0[e])*n,this.alpha[e]=n<.15?n/.15:1-(n-.15)/.85}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.psize.needsUpdate=!0,this.geo.attributes.palpha.needsUpdate=!0}},uo=class{constructor(t,e="high"){this.scene=t;let n=e==="low"?.5:1;this.dots=new ho(t,"dot",Math.floor(500*n)),this.stars=new ho(t,"star",Math.floor(300*n)),this.rings=[],this.mult=n}setScale(t){this.dots.mat.uniforms.scale.value=t,this.stars.mat.uniforms.scale.value=t}puff(t,e,n=16777215,s=1,r=.5){for(let a=0;a<s;a++)this.dots.emit(t+(Math.random()-.5)*.2,.12,e+(Math.random()-.5)*.2,(Math.random()-.5)*.5,.4+Math.random()*.3,(Math.random()-.5)*.5,n,.55+Math.random()*.3,.2,r,-.2,2.5)}burst(t,e,n,s,r=14,a=3,o=!0,l=.7){r=Math.ceil(r*this.mult);for(let c=0;c<r;c++){let h=Math.random()*Math.PI*2,d=Math.random()*.9+.2,u=a*(.5+Math.random()*.7);(o?this.stars:this.dots).emit(t,e,n,Math.cos(h)*u*d,u*(.5+Math.random()*.8),Math.sin(h)*u*d,s,l*(.7+Math.random()*.6),.22,.04,6,1.5)}}sparkleAround(t,e,n,s,r=16769674,a=3){for(let o=0;o<a;o++)this.stars.emit(t+(Math.random()-.5)*n,.2+Math.random()*.9,e+(Math.random()-.5)*s,0,.5,0,r,.9,0,.24,-.2,0)}ring(t,e,n=16769674,s=.3,r=2.2,a=.8){let o=new W(new Wa(.85,1,48),new me({color:n,transparent:!0,opacity:.9,blending:cn,depthWrite:!1,side:_n}));o.rotation.x=-Math.PI/2,o.position.set(t,.06,e),o.scale.setScalar(s),o.renderOrder=5,this.scene.add(o),this.rings.push({m:o,t:0,dur:a,r0:s,r1:r})}confetti(t,e,n=90){n=Math.ceil(n*this.mult);let s=[16731501,16763196,5099775,8126314,12946431,16777215];for(let r=0;r<n;r++){let a=Math.random()*Math.PI*2,o=2+Math.random()*5;this.stars.emit(t+(Math.random()-.5)*6,3+Math.random()*2,e+(Math.random()-.5)*8,Math.cos(a)*o*.4,1+Math.random()*3,Math.sin(a)*o*.4,s[r%s.length],1.8+Math.random()*1.2,.2,.16,5,.6)}}update(t){this.dots.update(t),this.stars.update(t);for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];n.t+=t;let s=Math.min(1,n.t/n.dur);n.m.scale.setScalar(n.r0+(n.r1-n.r0)*(1-Math.pow(1-s,3))),n.m.material.opacity=.9*(1-s),s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}};var Yu=1.05,xe=-5.2,Xi=3.35,fo=.92,yv=xe-Xi/2,Ws=yv-1,Wn=xe+Xi/2+.85,Wi=Wn+1.2,qs=-9.35,qn=9,Ur=.66,Wu=.64,Ku=5,vv=qn*Ku,Ze=i=>(i-3.5)*Yu,yh={U:0,D:Math.PI,L:Math.PI/2,R:-Math.PI/2},qi={out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,back:i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function Nr(i,t){let e=t-i;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function qu(i,t){let e=[i[0].clone()];for(let n=1;n<i.length-1;n++){let s=i[n-1],r=i[n],a=i[n+1],o=s.clone().sub(r),l=a.clone().sub(r),c=o.length(),h=l.length();if(c<1e-4||h<1e-4){e.push(r.clone());continue}o.normalize(),l.normalize();let d=Math.min(t,c*.5,h*.5),u=r.clone().addScaledVector(o,d),f=r.clone().addScaledVector(l,d);e.push(u);for(let g=1;g<10;g++){let y=g/10,m=1-y;e.push(new rt(m*m*u.x+2*m*y*r.x+y*y*f.x,m*m*u.y+2*m*y*r.y+y*y*f.y))}e.push(f)}return e.push(i[i.length-1].clone()),e}function $u(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return t}function Xu(i,t,e){e=Math.max(0,Math.min(t[t.length-1],e));let n=1;for(;n<t.length-1&&t[n]<e;)n++;let s=Math.max(1e-6,t[n]-t[n-1]),r=(e-t[n-1])/s,a=i[n-1],o=i[n];return{x:a.x+(o.x-a.x)*r,z:a.y+(o.y-a.y)*r,dx:o.x-a.x,dz:o.y-a.y}}function $i(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new dn(n);return s.colorSpace=Ee,s.anisotropy=8,s}function Or(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var po=class{constructor(t,e={}){this.container=t,this.quality=e.quality||"high",this.cos={style:"city",rim:"steel",trail:"dust",palette:"vivid",vipSkin:"gold"},this.hexOf=zs("vivid"),this.state=null,this.tweens=[],this.busVis=new Map,this.passengers=new Map,this.walkers=new Set,this.glows=new Map,this.labels=new Map,this.nDep=0,this.depCd=0,this.boardCd=0,this.idleFired=!0,this.celebrating=[],this.alertEnabled=!1,this.alertSlot=-1,this.slotHold=new Array(Fe+1).fill(!1),this.sfx=()=>{},this.onBusTap=null,this.onSlotTap=null,this.onIdle=null,this.onBoarded=null,this.onBusDepart=null,this.onBusArrive=null,this.tapFilter=null,this.time=0,this.slotMeshes=[],this.slotTexKinds=[];let n=this.renderer=new As({antialias:this.quality!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});n.outputColorSpace=Ee,n.toneMapping=Tr,n.toneMappingExposure=1,n.shadowMap.enabled=this.quality!=="low",n.shadowMap.type=Er,t.appendChild(n.domElement),n.domElement.style.touchAction="none",this.scene=new hi,this.scene.background=new At(13227750),this.camera=new Pe(36,1,.5,200);let s=new ci(n);this.scene.environment=s.fromScene(new Ds,.04).texture,this.scene.environmentIntensity=.32,this.setupLights(),this.buildStatic(),this.fx=new uo(this.scene,this.quality),this.labelLayer=document.createElement("div"),this.labelLayer.className="label-layer",t.appendChild(this.labelLayer),this.raycaster=new Ka,this.dragInfo=null,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize()}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.dirLight.castShadow=t!=="low",this.resize()}setCosmetics(t){Object.assign(this.cos,t),this.hexOf=zs(this.cos.palette)}setupLights(){let t=new Ps(15660543,10465484,.55);this.scene.add(t);let e=this.dirLight=new Oi(16774108,1.7);e.position.set(-6,14,5),e.target.position.set(0,0,-1.5),e.castShadow=this.quality!=="low",e.shadow.mapSize.set(this.quality==="high"?2048:1024,this.quality==="high"?2048:1024);let n=e.shadow.camera;n.left=-9,n.right=9,n.top=15,n.bottom=-15,n.near=1,n.far=40,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,e.shadow.radius=3.5,this.scene.add(e,e.target);let s=new Oi(13623551,.3);s.position.set(6,6,8),this.scene.add(s)}buildStatic(){let t=this.scene,e=$i(256,256,(E,k,x)=>{E.fillStyle="#c9d6e6",E.fillRect(0,0,k,x),E.fillStyle="#d6e1ee",E.fillRect(5,5,k-10,x-10),E.strokeStyle="#b6c6da",E.lineWidth=4,E.strokeRect(0,0,k,x)});e.wrapS=e.wrapT=ai,e.repeat.set(30,30);let n=new W(new he(60,60),new bt({map:e,roughness:.85}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new bt({color:7173510,roughness:.92}),r=new W(this.roundedPlate(9.9,7,.7),s);r.position.set(0,.02,(-8.6+-1.6)/2),r.receiveShadow=!0,t.add(r);let a=new W(this.roundedPlate(26,1.55,.3),s);a.position.set(0,.021,Ws),a.receiveShadow=!0,t.add(a);let o=new W(new he(26,.06),new me({color:15979626,transparent:!0,opacity:.8}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,Ws),t.add(o);let l=new bt({color:16054267,roughness:.5}),c=new W(new be(9.9,.14,.14),l);c.position.set(0,.07,-1.55),c.castShadow=!0,t.add(c);let h=qn*Ur+.9,d=qs+.55,u=qs-(Ku-1)*Wu-.55,f=d-u,g=(d+u)/2,y=new W(this.roundedPlate(h+.55,f+.5,.4),new bt({color:4938380,roughness:.6}));y.position.set(0,.018,g-.05),y.receiveShadow=!0,t.add(y);let m=$i(512,512,(E,k,x)=>{E.fillStyle="#dde6f4",E.fillRect(0,0,k,x);let b=8;for(let D=0;D<b;D++)for(let L=0;L<b;L++)E.fillStyle=(L+D)%2?"#d3deef":"#e6edf8",E.fillRect(L*64+2,D*64+2,60,60)});m.wrapS=m.wrapT=ai,m.repeat.set(h/3.4,f/3.4);let p=new W(this.roundedPlate(h-.05,f-.05,.25),new bt({map:m,roughness:.75}));p.position.set(0,.034,g),p.receiveShadow=!0,t.add(p),this.queueBack=u;let v=new me({color:11132159,transparent:!0,opacity:.3,depthWrite:!1}),_=new bt({color:15922683,metalness:.9,roughness:.18}),M=(E,k,x,b)=>{let D=new W(new be(E,.34,k),v);D.position.set(x,.2,b),D.renderOrder=4,t.add(D);let L=new W(new be(E+(k<E?.05:0),.05,k+(E<k?.05:0)),_);L.position.set(x,.395,b),L.castShadow=!0,t.add(L)};M(.05,f,-h/2,g),M(.05,f,h/2,g),M(h,.05,0,u),M(.9,.05,-h/2+.45,d),M(.9,.05,h/2-.45,d);for(let[E,k]of[[-h/2,u],[h/2,u],[-h/2,d],[h/2,d]]){let x=new W(new qe(.06,.07,.46,10),_);x.position.set(E,.23,k),x.castShadow=!0,t.add(x)}let C=$i(512,32,(E,k,x)=>{E.fillStyle="#ffd23f",E.fillRect(0,0,k,x),E.fillStyle="#20232e";for(let b=-x;b<k+x;b+=44)E.beginPath(),E.moveTo(b,x),E.lineTo(b+22,x),E.lineTo(b+22+x,0),E.lineTo(b+x,0),E.closePath(),E.fill()});C.wrapS=ai,C.repeat.set(h/4.2,1);let T=new W(new he(h-.1,.13),new me({map:C}));T.rotation.x=-Math.PI/2,T.position.set(0,.043,d-.02),t.add(T);{let E=pi*Ur+.22,k=d+.5,x=qs-.36,b=k-x,D=((pi-1)/2-(qn-1)/2)*Ur,L=(k+x)/2;this.gateInfo={x:D,zFront:k,zBack:x,w:E};let B=$i(256,256,(F,st,it)=>{let dt=F.createLinearGradient(0,0,0,it);dt.addColorStop(0,"#34d77b"),dt.addColorStop(1,"#16a853"),F.fillStyle=dt,F.fillRect(0,0,st,it),F.strokeStyle="rgba(255,255,255,.92)",F.lineWidth=22,F.lineCap="round",F.lineJoin="round",F.beginPath(),F.moveTo(48,84),F.lineTo(st/2,150),F.lineTo(st-48,84),F.stroke()});B.wrapS=B.wrapT=ai,B.repeat.set(1,Math.max(1,Math.round(b/.55)));let $=new W(new he(E,b),new me({map:B,transparent:!0,depthWrite:!1}));$.rotation.x=-Math.PI/2,$.position.set(D,.044,L),$.renderOrder=2,t.add($),this.gateFlow=B,this.gate=$;let z=$i(256,192,(F,st,it)=>{F.clearRect(0,0,st,it),F.lineWidth=12,F.strokeStyle="#ffffff",F.beginPath(),F.roundRect(8,8,st-16,it-16,26),F.stroke(),F.lineWidth=5,F.strokeStyle="#0d7a38",F.beginPath(),F.roundRect(15,15,st-30,it-30,20),F.stroke(),F.fillStyle="rgba(8,70,32,.88)",F.beginPath(),F.roundRect(st/2-74,it-62,148,40,14),F.fill(),F.fillStyle="#ffffff",F.font="900 32px system-ui, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText("\xC7IKI\u015E",st/2,it-41)}),K=new W(new he(E,b),new me({map:z,transparent:!0,depthWrite:!1}));K.rotation.x=-Math.PI/2,K.position.set(D,.046,L),K.renderOrder=3,t.add(K),this.gateFrame=K,this.gateLights=[];for(let F of[-1,1]){let st=new W(new qe(.05,.06,.62,10),_);st.position.set(D+F*(E/2+.02),.31,k-.06),st.castShadow=!0,t.add(st);let it=new W(new $e(.1,14,10),new bt({color:8257454,emissive:2089066,emissiveIntensity:1.2}));it.position.set(st.position.x,.66,st.position.z),t.add(it);let dt=new mr(new Rs({map:zi(),color:5111695,transparent:!0,blending:cn,depthWrite:!1,opacity:.8}));dt.scale.set(.9,.9,1),dt.position.copy(it.position),t.add(dt),this.gateLights.push({cap:it,halo:dt})}}for(let[E,k]of[[-6.2,-2.8],[6.2,-2.8]]){let x=Du();x.position.set(E,0,k),E>0&&(x.scale.x=-1),t.add(x)}for(let[E,k]of[[-5.9,-6],[5.9,-6],[-6.6,-9.5],[6.6,-9.5]]){let x=Uu();x.position.set(E,0,k),t.add(x)}for(let[E,k]of[[-6.5,-11.2],[6.5,-11.2]]){let x=ku(4440682);x.position.set(E,0,k),t.add(x)}let A=Nu();A.position.set(-5.3,0,-12.1),t.add(A),this.buildSlots(),this.boardGroup=new ne,t.add(this.boardGroup),this.busGroup=new ne,t.add(this.busGroup),this.passGroup=new ne,t.add(this.passGroup)}roundedPlate(t,e,n){let s=new yr,r=-t/2,a=-e/2;s.moveTo(r+n,a),s.lineTo(r+t-n,a),s.quadraticCurveTo(r+t,a,r+t,a+n),s.lineTo(r+t,a+e-n),s.quadraticCurveTo(r+t,a+e,r+t-n,a+e),s.lineTo(r+n,a+e),s.quadraticCurveTo(r,a+e,r,a+e-n),s.lineTo(r,a+n),s.quadraticCurveTo(r,a,r+n,a);let o=new qa(s,6);return o.rotateX(-Math.PI/2),o}slotTexture(t){return $i(128,340,(e,n,s)=>{if(e.clearRect(0,0,n,s),t==="vip"){let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffe17a"),r.addColorStop(1,"#d99a12"),e.fillStyle=r,Or(e,5,5,n-10,s-10,22),e.fill(),e.strokeStyle="#fff3c4",e.lineWidth=4,Or(e,5,5,n-10,s-10,22),e.stroke(),e.save(),e.translate(n/2,s/2),e.rotate(-Math.PI/2),e.fillStyle="#7a4d00",e.font="900 64px system-ui,sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("VIP",0,4),e.restore();return}e.fillStyle=t==="locked"?"rgba(20,28,45,.28)":"rgba(15,22,38,.22)",Or(e,5,5,n-10,s-10,22),e.fill(),e.lineWidth=5,e.strokeStyle=t==="temp"?"#7dffb0":"rgba(255,255,255,.85)",t==="locked"&&e.setLineDash([16,12]),Or(e,5,5,n-10,s-10,22),e.stroke(),e.setLineDash([]),t==="locked"&&(e.fillStyle="#3fdc6a",Or(e,n/2-34,s/2-34,68,68,16),e.fill(),e.fillStyle="#fff",e.fillRect(n/2-22,s/2-6,44,12),e.fillRect(n/2-6,s/2-22,12,44))})}buildSlots(){this.slotTex={open:this.slotTexture("open"),locked:this.slotTexture("locked"),vip:this.slotTexture("vip"),temp:this.slotTexture("temp")};for(let t=0;t<Fe+1;t++){let e=new W(new he(fo,Xi),new me({map:this.slotTex.open,transparent:!0,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(Ze(t),.04,xe),e.renderOrder=2,this.scene.add(e),e.userData.slotK=t,this.slotMeshes.push(e)}this.slotMeshes[0].material.map=this.slotTex.vip,this.slotGlow=[],this.slotFxT=new Array(Fe+1).fill(null);for(let t=0;t<Fe+1;t++){let e=new W(new he(fo+.9,Xi+.9),new me({map:zi(),color:16777215,transparent:!0,opacity:0,blending:cn,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(Ze(t),.055,xe),e.renderOrder=3,this.scene.add(e),this.slotGlow.push(e)}this.alertGlow=new W(new he(fo+1.2,Xi+1.2),new me({map:zi(),color:16719663,transparent:!0,opacity:0,blending:cn,depthWrite:!1})),this.alertGlow.rotation.x=-Math.PI/2,this.alertGlow.position.y=.06,this.alertGlow.renderOrder=4,this.scene.add(this.alertGlow),this.siren=new mr(new Rs({map:zi(),color:16719920,transparent:!0,blending:cn,depthWrite:!1,opacity:0})),this.siren.scale.set(1.5,1.5,1),this.scene.add(this.siren),this.alertSlot=-1}pulseSlot(t,e=16777215,n=.8,s=.5){this.slotFxT[t]={t:0,dur:s,power:n,color:e},this.slotGlow[t].material.color.setHex(e)}updateAlert(t){let e=this.state,n=-1;if(e&&this.alertEnabled){let o=[];for(let l=0;l<Fe;l++)e.slotOpen[l]&&e.slots[l]===null&&o.push(l);o.length===1&&e.buses.some(l=>l.st==="board"&&!l.vip)&&(n=o[0])}if(n!==this.alertSlot){this.alertSlot>=0&&this.slotMeshes[this.alertSlot+1].material.color.setRGB(1,1,1),this.alertSlot=n,this.container.parentElement?.classList.toggle("alert-last",n>=0);let o=document.getElementById("lastSlot");o&&(o.hidden=n<0),n>=0&&this.sfx("alarm")}let s=n>=0,r=s?n+1:0,a=.5+.5*Math.sin(this.time*7.5);s?(this.slotMeshes[r].material.color.setRGB(1,.25+.5*(1-a),.25+.5*(1-a)),this.alertGlow.position.x=Ze(r),this.alertGlow.position.z=xe,this.alertGlow.material.opacity=.25+.65*a,this.siren.position.set(Ze(r),.95,xe-Xi/2-.05),this.siren.material.opacity=.35+.65*a,this.siren.scale.setScalar(1.1+a*.7)):(this.alertGlow.material.opacity=0,this.siren.material.opacity=0),this.alertGlow.visible=this.siren.visible=s;for(let o=0;o<this.slotFxT.length;o++){let l=this.slotFxT[o],c=this.slotGlow[o];if(!l){c.material.opacity=0,c.visible=!1;continue}c.visible=!0,l.t+=t;let h=l.t/l.dur;c.material.opacity=Math.max(0,1-h)*l.power,h>=1&&(this.slotFxT[o]=null,c.material.opacity=0,c.visible=!1)}}refreshSlots(t,e=[]){for(let n=0;n<Fe;n++){let s=this.slotMeshes[n+1];s.material.map=t.slotOpen[n]?e.includes(n)?this.slotTex.temp:this.slotTex.open:this.slotTex.locked,s.material.needsUpdate=!0}}resize(){let t=this.container.clientWidth||360,e=this.container.clientHeight||640,n=Math.min(window.devicePixelRatio||1,this.quality==="high"?2.5:this.quality==="medium"?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.fitCamera(),this.fx?.setScale(e*n*.62)}fitCamera(){let t=this.camera,e=this.state?this.state.h:7,n=this.queueBack-.5,s=Wi+e+.9,r=[],a=Math.max(4.75,this.state?this.state.w/2+.9:4.4);for(let u of[-a,a])r.push(new P(u,1,n),new P(u,0,s),new P(u,.4,s));let o=lu.degToRad(this.camera.aspect<.7?57:52),l=(n+s)/2,c=30,h=(u,f)=>{t.position.set(0,Math.sin(o)*u,f+Math.cos(o)*u),t.lookAt(0,0,f),t.updateMatrixWorld(!0),t.updateProjectionMatrix()},d=()=>{let u=0,f=9,g=-9;for(let y of r){let m=y.clone().project(t);u=Math.max(u,Math.abs(m.x)),f=Math.min(f,m.y),g=Math.max(g,m.y)}return{mx:u,mnY:f,mxY:g}};for(let u=0;u<7;u++){let f=6,g=120;for(let m=0;m<22;m++){let p=(f+g)/2;h(p,l);let v=d();v.mx<=.97&&v.mxY<=.97&&v.mnY>=-.97?g=p:f=p}c=g,h(c,l);let y=d();l-=(y.mxY+y.mnY)/2*c*.55}h(c,l)}clearStage(){for(let t of[this.boardGroup,this.busGroup,this.passGroup])for(;t.children.length;)t.remove(t.children[0]);this.busVis.clear(),this.passengers.clear(),this.walkers.clear(),this.tweens.length=0,this.glows.forEach(t=>this.scene.remove(t)),this.glows.clear(),this.labels.forEach(t=>t.remove()),this.labels.clear(),this.celebrating=[],this.nDep=0,this.depCd=0,this.boardCd=0,this.slotHold.fill(!1),this.forceDepart=!1}loadStage(t,e=[]){this.clearStage(),this.state=t;let n=t.w,s=t.h,r=new W(this.roundedPlate(n+3.6,s+3.4,.9),new bt({color:11122384,roughness:.85}));r.position.set(0,.015,Wi+s/2-.1),r.receiveShadow=!0,this.boardGroup.add(r);let a=$i(64*n,64*s,(c,h,d)=>{c.fillStyle="#d5dff0",c.fillRect(0,0,h,d);for(let u=0;u<s;u++)for(let f=0;f<n;f++)c.fillStyle=(f+u)%2?"#cdd8ec":"#dbe4f4",c.fillRect(f*64+2,u*64+2,60,60)}),o=new W(new he(n,s),new bt({map:a,roughness:.9}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,Wi+s/2),o.receiveShadow=!0,this.boardGroup.add(o);let l=new W(new he(n+.16,s+.16),new me({color:9675718}));l.rotation.x=-Math.PI/2,l.position.set(0,.025,Wi+s/2),this.boardGroup.add(l);for(let c of t.buses)this.makeBusVis(c);this.refreshSlots(t,e),this.fitCamera(),this.ensureQueue(!0),this.idleFired=!1}cellToWorld(t,e){return{x:t-this.state.w/2+.5,z:Wi+e+.5}}busCenter(t){let e=ke[t.dir].horiz;return this.cellToWorld(t.x+(e?(t.len-1)/2:0),t.y+(e?0:(t.len-1)/2))}makeBusVis(t){let e=t.vip?0:this.hexOf(t.color),n=ao({len:t.len,hex:e,style:Pu(this.cos.style,t.len,t.id),vip:t.vip,rim:this.cos.rim,vipSkin:this.cos.vipSkin,seats:t.seats}),s={id:t.id,g:n,parts:n.userData.parts,vcount:0,vcolors:[],traveling:!1,departing:!1,trailT:0,dragOff:0,bounce:0,dims:n.userData.dims};if(n.traverse(r=>{r.isMesh&&(r.castShadow=r.castShadow||!1)}),this.busGroup.add(n),this.busVis.set(t.id,s),t.st==="board"){let r=this.busCenter(t);n.position.set(r.x,0,r.z),n.rotation.y=yh[t.dir],n.userData.baseX=r.x,n.userData.baseZ=r.z}else if(t.st==="parked"){let r=t.slot==="V"?0:t.slot+1;n.position.set(Ze(r),0,xe),n.rotation.y=0,n.scale.setScalar(Gn[t.len]||.75),s.parts.arrow&&(s.parts.arrow.visible=!1),t.arrived=!0,s.vcount=t.boarded,s.vcolors=new Array(t.boarded).fill(t.color),Dr(n,s.vcolors,a=>a===fi?16777215:this.hexOf(a)),s.parked=!0}else n.visible=!1;return s}queuePos(t){let e=Math.floor(t/qn),n=t%qn;return{x:((e%2===0?n:qn-1-n)-(qn-1)/2)*Ur,z:qs-e*Wu}}spawnPassenger(t,e,n){let s=n??this.state.queue[t],r=rh(s,this.hexOf,(t*7+(t>>2))%4);r.traverse(l=>{l.isMesh&&(l.castShadow=this.quality!=="low")});let a=t-this.state.qi,o=this.queuePos(a);return r.position.set(o.x,0,o.z),r.rotation.y=0,r.userData.yaw=0,r.scale.setScalar(e?1:.01),r.userData.spawn=e?1:0,r.userData.idx=t,r.userData.moving=!1,this.passGroup.add(r),this.passengers.set(t,r),r}ensureQueue(t=!1){let e=this.state;if(!e)return;let n=this.quality==="low"?qn*4:vv;for(let s=e.qi;s<Math.min(e.queue.length,e.qi+n);s++)this.passengers.has(s)||this.spawnPassenger(s,t)}startDriveToSlot(t,e,{instantArrive:n=!1}={}){let s=this.state.buses[t],r=this.busVis.get(t),a=e==="V"?0:e+1,o=Ze(a),l=r.g;l.visible=!0;let c=this.state.w,h=this.state.h,d={x:l.position.x,z:l.position.z},u=(v,_)=>new rt(v,_),f=[u(d.x,d.z)],g=c/2+1.15,y=Wi+h+1;switch(s.summoned&&l.position.set(o,6,xe+4),s.st==="parked"&&r.fromBoard,s.dir){case"U":f.push(u(d.x,Wn));break;case"D":{let v=d.x<=0?-1:1;f.push(u(d.x,y),u(v*g,y),u(v*g,Wn));break}case"L":f.push(u(-g,d.z),u(-g,Wn));break;case"R":f.push(u(g,d.z),u(g,Wn));break}f.push(u(o,Wn),u(o,xe));let m=qu(f,.95),p=$u(m);r.traveling=!0,r.travel={poly:m,L:p,s:0,v:0,total:p[p.length-1],slot:a,park:Gn[s.len]||.75,final:p[p.length-1]-(xe-Wn)*-1,yawSm:l.rotation.y},r.travel.finalStart=p[p.length-1]-(xe+0-Wn)*-1,r.travel.finalStart=p[p.length-1]-Math.abs(xe-Wn),r.fromBoard=!0,r.parts.arrow&&(r.parts.arrow.material.opacity=1),this.sfx("engine")}updateTravel(t,e){let n=t.travel,s=t.g,r=n.total-n.s,a=9.5,o=22,l=a,c=n.s>n.finalStart-.4&&this.slotHold[n.slot];c&&(l=0);let h=1/0;if(n.dir)for(let y of this.busVis.values()){if(y===t||!y.traveling||!y.travel)continue;let m=y.g.position.x-s.position.x,p=y.g.position.z-s.position.z,v=Math.hypot(m,p);if(v>3.4||v<1e-4)continue;let _=(m*n.dir.x+p*n.dir.z)/v,M=y.travel.dir?y.travel.dir.x*n.dir.x+y.travel.dir.z*n.dir.z:1;_>.55&&M>.3&&(h=Math.min(h,v))}if(n.stall=n.stall||0,h<3&&n.stall<1.2){let y=h<1.9?0:(h-1.9)/1.1;l=Math.min(l,a*y),l<.3?n.stall+=e:n.stall=Math.max(0,n.stall-e)}else n.stall=Math.max(0,n.stall-e*.5);l=Math.min(l,Math.sqrt(28*Math.max(0,r))+.8),n.v+=Math.sign(l-n.v)*Math.min(Math.abs(l-n.v),o*e),c&&n.s>=n.finalStart-.4+.02&&(n.v=0);let d=n.v*e;n.s=Math.min(n.total,n.s+d);let u=Xu(n.poly,n.L,n.s);{let y=Math.hypot(u.dx,u.dz)||1;n.dir={x:u.dx/y,z:u.dz/y}}s.position.x=u.x,s.position.z=u.z,s.userData.summonY!==void 0&&(s.position.y=0);let f=Math.atan2(-u.dx,-u.dz);s.rotation.y+=Nr(s.rotation.y,f)*Math.min(1,e*14);let g=Math.max(0,Math.min(1,(n.s-(n.finalStart-2.2))/2.2));s.scale.setScalar(1+(n.park-1)*qi.out(g));for(let y of t.parts.wheels)y.rotation.x-=d/.15;t.trailT-=e,t.trailT<=0&&n.v>1.5&&(t.trailT=.07,this.emitTrail(s.position.x,s.position.z,s.rotation.y)),n.s>=n.total-.001&&this.finishArrive(t)}emitTrail(t,e,n){let s=t+Math.sin(n)*.45,r=e+Math.cos(n)*.45,a=this.cos.trail;a==="sparkle"?this.fx.stars.emit(s,.2,r,(Math.random()-.5)*.6,.6,(Math.random()-.5)*.6,16769674,.7,.16,0,1,.5):a==="stars"?this.fx.stars.emit(s,.25,r,(Math.random()-.5)*.8,.7,(Math.random()-.5)*.8,[8246271,16743904,16773757][Math.floor(Math.random()*3)],.8,.2,.02,1.5,.5):a==="bubbles"?this.fx.dots.emit(s,.2,r,(Math.random()-.5)*.4,.8,(Math.random()-.5)*.4,12577535,.9,.1,.32,-.8,.5):this.fx.puff(s,r,16777215,1,.55)}finishArrive(t){t.traveling=!1,t.parked=!0,t.travel=null;let e=t.g,n=this.state.buses[t.id],s=t.id,r=n.slot==="V"?0:n.slot+1;e.position.set(Ze(r),0,xe),e.rotation.y=0,e.scale.setScalar(Gn[n.len]||.75),t.parts.arrow&&(t.parts.arrow.visible=!1),t.bounce=1,this.sfx("park"),this.fx.puff(e.position.x,e.position.z+1,16777215,4,.7),(n.vip||n.slot==="V")&&(this.fx.burst(e.position.x,.6,e.position.z,16766042,26,3.2,!0,1),this.fx.ring(e.position.x,e.position.z,16766042,.4,2.6,.9),this.sfx("vip")),Ou(this.state,t.id),this.onBusArrive?.(n),this.idleFired=!1}startDeparture(t){let e=this.state.buses[t.id],n=e.slot==="V"?0:e.slot+1,s=t.g,r=s.position.x,a=r<=0?-1:1,o=xe-Lr(e.len)*(Gn[e.len]||.75)/2,l=[new rt(r,s.position.z),new rt(r,Ws),new rt(a*11.5,Ws)],c=qu(l,1),h=$u(c);t.departing=!0,t.depart={poly:c,L:h,s:0,v:0,total:h[h.length-1],slotK:n,slotIdx:e.slot},this.nDep++,this.depCd=.3,this.slotHold[n]=!0;{let d=s.position.x,u=s.position.z;this.fx.burst(d,.9,u,16769674,26,3.4,!0,.9),this.fx.ring(d,u,16769674,.4,2.4,.7),this.fx.ring(d,u,9240500,.2,1.7,.55),this.pulseSlot(n,16769674,1,.7),this.sfx("full")}ch(this.state,t.id),this.removeLabel(t.id),this.sfx("depart"),this.onBusDepart?.(e)}updateDeparture(t,e){let n=t.depart,s=t.g;n.v=Math.min(8.5,n.v+16*e);let r=n.v*e;n.s=Math.min(n.total,n.s+r);let a=Xu(n.poly,n.L,n.s);s.position.x=a.x,s.position.z=a.z;let o=Math.atan2(-a.dx,-a.dz);s.rotation.y+=Nr(s.rotation.y,o)*Math.min(1,e*10);for(let l of t.parts.wheels)l.rotation.x-=r/.15;t.trailT-=e,t.trailT<=0&&(t.trailT=.08,this.fx.puff(s.position.x+Math.sin(s.rotation.y)*.4,s.position.z+Math.cos(s.rotation.y)*.4,16777215,1,.5)),n.s>2.4&&this.slotHold[n.slotK]&&(this.slotHold[n.slotK]=!1),n.s>=n.total-.01&&(t.departing=!1,this.nDep=Math.max(0,this.nDep-1),this.busGroup.remove(s),this.busVis.delete(t.id),this.slotHold[n.slotK]=!1,this.idleFired=!1)}startBoardWalk(t){let n=this.state.qi-1,s=t.from||0,r=this.passengers.get(n+s);r||(r=this.spawnPassenger(n+s,!0,t.color)),this.passengers.delete(n+s);for(let u=s-1;u>=0;u--){let f=this.passengers.get(n+u);this.passengers.delete(n+u),f&&(this.passengers.set(n+u+1,f),f.userData.idx=n+u+1)}let a=this.busVis.get(t.bus.id),o=t.bus,l=a.g.position.x,c=xe-Lr(o.len)*(Gn[o.len]||.75)/2,h=(Math.random()-.5)*.22,d=c-.28;r.userData.walk={pts:[new rt(r.position.x,r.position.z),new rt(l+h,Ws+.1),new rt(l+h*.5,d)],seg:0,t:0,bus:a,color:t.color,hop:0},r.userData.state="board",this.walkers.add(r),this.sfx("step")}updatePassengers(t){let e=this.state;if(e){this.time+=t;for(let[n,s]of this.passengers){let r=s.userData;r.spawn<1&&(r.spawn=Math.min(1,r.spawn+t*4),s.scale.setScalar(Math.max(.01,qi.back(r.spawn))));let a=this.queuePos(n-e.qi),o=a.x-s.position.x,l=a.z-s.position.z,c=Math.hypot(o,l);if(c>.02){let h=Math.min(c,3.6*t);s.position.x+=o/c*h,s.position.z+=l/c*h,r.moving=!0,r.targetYaw=Math.atan2(o,l)}else r.moving=!1,r.targetYaw=0;this.animatePassenger(s,t,r.moving?"walk":"idle")}for(let n of[...this.walkers]){let s=n.userData,r=s.walk;if(r.hop>0){r.hop+=t*4.5;let m=Math.min(1,r.hop-1),p=r.bus,v=p.g.position.z-.15;n.position.x+=(p.g.position.x-n.position.x)*Math.min(1,t*12),n.position.z+=(v-n.position.z)*Math.min(1,t*12),n.position.y=Math.sin(m*Math.PI)*.5,n.scale.setScalar(Math.max(.15,1-m*.85)),this.animatePassenger(n,t,"board"),m>=1&&this.finishBoard(n);continue}let a=r.pts[r.seg],o=r.pts[r.seg+1],l=a.distanceTo(o),c=Math.hypot(o.x-n.position.x,o.y-n.position.z),h=r.seg===r.pts.length-2,d=h?Math.max(1.8,Math.min(4.8,c*3.2+1.2)):4.8,u=o.x-n.position.x,f=o.y-n.position.z,g=Math.hypot(u,f),y=Math.min(g,d*t);g>1e-4&&(n.position.x+=u/g*y,n.position.z+=f/g*y,s.targetYaw=Math.atan2(u,f)),this.animatePassenger(n,t,"walk"),g-y<.03&&(h?r.hop=1:r.seg++)}for(let n of this.celebrating)this.animatePassenger(n,t,"celebrate")}}animatePassenger(t,e,n){let s=t.userData;s.phase+=e*(n==="walk"?11:n==="celebrate"?9:2.2);let r=s.phase;s.targetYaw!==void 0&&(t.rotation.y+=Nr(t.rotation.y,s.targetYaw)*Math.min(1,e*12));let[a,o]=s.arms,[l,c]=s.legs;if(n==="walk"){let h=Math.sin(r)*.9;l.rotation.x=h,c.rotation.x=-h,a.rotation.x=-h*.8,o.rotation.x=h*.8,s.rig.position.y=Math.abs(Math.sin(r))*.05,s.rig.rotation.z=Math.sin(r)*.05,s.head.rotation.z=Math.sin(r)*.05}else if(n==="celebrate")a.rotation.x=o.rotation.x=-2.6+Math.sin(r)*.3,a.rotation.z=.3,o.rotation.z=-.3,l.rotation.x=c.rotation.x=0,t.position.y=Math.abs(Math.sin(r*.9))*.35,s.rig.rotation.z=0;else if(n==="board")l.rotation.x=Math.sin(r)*.6,c.rotation.x=-Math.sin(r)*.6,a.rotation.x=o.rotation.x=-1.2;else{l.rotation.x=c.rotation.x=0,a.rotation.x=o.rotation.x=0,a.rotation.z=.04,o.rotation.z=-.04;let h=Math.sin(r+t.position.x)*.02;s.rig.position.y=0,s.rig.scale.set(1+h,1-h,1+h),s.rig.rotation.z=Math.sin(r*.5+t.position.z)*.02,s.head.rotation.z=Math.sin(r*.5+t.position.x*2)*.05}}finishBoard(t){let e=t.userData.walk,n=e.bus;this.walkers.delete(t),this.passGroup.remove(t),n.vcount++,n.vcolors.push(e.color),Dr(n.g,n.vcolors,o=>o===fi?16777215:this.hexOf(o)),n.bounce=Math.max(n.bounce,.85);let s=this.hexOf(e.color),r=this.state.buses[n.id],a=r.slot==="V"?0:r.slot+1;this.fx.burst(n.g.position.x,.8,n.g.position.z-.5,s,9,2.4,!0,.6),this.fx.ring(n.g.position.x,n.g.position.z,s,.25,1.25,.42),this.pulseSlot(a,s,.75,.45);for(let o=0;o<3;o++)this.fx.stars.emit(n.g.position.x+(Math.random()-.5)*.4,.9,n.g.position.z+(Math.random()-.5)*1.2,0,1.4,0,16777215,.6,.18,0,2,.8);this.sfx("board"),this.onBoarded?.(e.color,this.state.buses[n.id]),this.idleFired=!1}get stripBusy(){return this.nDep>0}director(t){let e=this.state;if(!e)return;this.boardCd-=t;let n=null;for(let s of this.busVis.values()){let r=e.buses[s.id];if(r.st==="parked"&&r.arrived&&!s.departing&&(s.vcount>=r.seats&&r.boarded>=r.seats||this.forceDepart&&s.vcount>=r.boarded)){n=s;break}}if(this.depCd-=t,n&&this.depCd<=0&&this.startDeparture(n),this.boardCd<=0&&oh(e)){let r=lh(e);r&&(this.startBoardWalk(r),this.boardCd=.16,this.ensureQueue())}this.idleFired||![...this.busVis.values()].some(r=>r.traveling||r.departing)&&this.walkers.size===0&&!this.stripBusy&&!oh(e)&&!n&&(this.idleFired=!0,this.onIdle?.())}isBusy(){return this.state?[...this.busVis.values()].some(t=>t.traveling)||this.walkers.size>0||this.stripBusy:!1}isTraveling(){return[...this.busVis.values()].some(t=>t.traveling)}tween(t,e,n){this.tweens.push({t:0,dur:t,fn:e,done:n})}bump(t,e=[]){let n=this.busVis.get(t);if(!n)return;let s=this.state,r=s.buses[t],a=ke[r.dir],o=n.g;if(n.bumping)return;n.bumping=!0;let l=o.userData.baseX,c=o.userData.baseZ,h=Gs(s,t),d=0,u=null;for(let[C,T]of Hi(s,r)){let A=C+","+T;if(h.has(A)){u=A;break}d++}let f=Math.max(.1,d-.04),g=.14+.06*Math.min(d,5),y=.42,m=g+y,p=!1,v=e[0],_=l+a.x*(f+r.len/2),M=c+a.y*(f+r.len/2);this.sfx("engine"),this.tween(m,C=>{let T=C*m,A;if(T<g){let k=T/g;A=f*k*k}else{p||(p=!0,this.onBumpHit(n,v,a,_,M,d));let k=(T-g)/y;A=f*(1-Math.min(1,k*1.15))+Math.sin(k*Math.PI*2.2)*.1*(1-k)*(k<.5?-1:1)*.5,k>=1&&(A=0)}o.position.x=l+a.x*A,o.position.z=c+a.y*A;let E=T>=g?Math.max(0,1-(T-g)/.25):0;o.rotation.z=Math.sin(T*60)*.05*E,o.scale.set(1+.05*E*(a.horiz?-1:1)*.5,1,1+.05*E*(a.horiz?1:-1)*.5)},()=>{o.position.set(l,0,c),o.rotation.z=0,o.scale.setScalar(1),n.bumping=!1}),n.parts.arrow&&(n.parts.arrow.material.color.set(16734810),setTimeout(()=>n.parts.arrow&&n.parts.arrow.material.color.set(16777215),450))}onBumpHit(t,e,n,s,r,a){if(this.sfx("bump"),this.fx.burst(s,.6,r,16763210,14,3.2,!0,.6),this.fx.burst(s,.5,r,16777215,8,2.2,!1,.45),this.fx.puff(s,r,16777215,4,.7),this.fx.ring(s,r,16757575,.2,1.4,.45),this.shakeCamera(.16+Math.min(a,4)*.025,.32),e!==void 0){let o=this.busVis.get(e);if(!o)return;let l=o.g,c=l.userData.baseX,h=l.userData.baseZ;this.flashBus(e,16731469,.7),this.tween(.4,d=>{let u=Math.sin(d*Math.PI*3)*.14*(1-d);l.position.x=c+n.x*u,l.position.z=h+n.y*u,l.rotation.z=Math.sin(d*40)*.035*(1-d)},()=>{l.position.x=c,l.position.z=h,l.rotation.z=0})}}shakeCamera(t=.15,e=.3){let n=this.camera;if(this._shaking)return;this._shaking=!0;let s=n.position.clone();this.tween(e,r=>{let a=(1-r)*t;n.position.set(s.x+(Math.random()-.5)*a,s.y+(Math.random()-.5)*a*.6,s.z+(Math.random()-.5)*a)},()=>{n.position.copy(s),this._shaking=!1})}flashBus(t,e=16731469,n=.6){let s=this.busVis.get(t);if(!s)return;let r=s.parts.bodyMat,a=r.emissive.getHex(),o=s.g;this.tween(n,l=>{r.emissive.setHex(e),r.emissiveIntensity=Math.sin(l*Math.PI)*.55},()=>{r.emissive.setHex(a),r.emissiveIntensity=0})}shakeBus(t){let e=this.busVis.get(t);if(!e)return;let n=e.g,s=n.position.x;this.tween(.3,r=>{n.position.x=s+Math.sin(r*28)*.07*(1-r)},()=>{n.position.x=s})}setGlow(t,e=16769126){let n=this.glows.get(t);if(e===null){n&&(this.scene.remove(n),this.glows.delete(t));return}let s=this.busVis.get(t);if(!s)return;n||(n=new W(new he(1,1),new me({map:zi(),color:e,transparent:!0,blending:cn,depthWrite:!1})),n.rotation.x=-Math.PI/2,n.renderOrder=4,this.scene.add(n),this.glows.set(t,n)),n.material.color.setHex(e);let r=this.state.buses[t],a=ke[r.dir].horiz;n.userData={w:a?r.len+1:1.9,l:a?1.9:r.len+1},n.position.set(s.g.position.x,.08,s.g.position.z)}clearGlows(){for(let t of[...this.glows.keys()])this.setGlow(t,null)}unlockSlotFx(t,e=!1){let n=this.slotMeshes[t+1];n.material.map=e?this.slotTex.temp:this.slotTex.open,n.material.needsUpdate=!0;let s=Ze(t+1);this.fx.ring(s,xe,16773280,.3,2.4,.9),this.fx.ring(s,xe,9240500,.2,1.6,.7),this.fx.burst(s,.3,xe,16769674,28,3,!0,1),this.tween(.5,r=>{n.scale.set(1+Math.sin(r*Math.PI)*.1,1+Math.sin(r*Math.PI)*.04,1)},()=>n.scale.set(1,1,1)),this.sfx("unlock")}animateRecall(t){let e=this.busVis.get(t),n=this.state.buses[t];if(!e)return;let s=e.g,r=this.busCenter(n),a=s.position.clone(),o=s.scale.x;e.parked=!1,this.removeLabel(t),this.tween(.8,l=>{let c=qi.inOut(l);s.position.x=a.x+(r.x-a.x)*c,s.position.z=a.z+(r.z-a.z)*c,s.position.y=Math.sin(l*Math.PI)*1.6,s.scale.setScalar(o+(1-o)*c),s.rotation.y+=Nr(s.rotation.y,yh[n.dir])*Math.min(1,l*1.5)},()=>{s.position.set(r.x,0,r.z),s.rotation.y=yh[n.dir],s.scale.setScalar(1),s.userData.baseX=r.x,s.userData.baseZ=r.z,e.parts.arrow&&(e.parts.arrow.visible=!0)}),this.fx.ring(a.x,a.z,8246271,.3,1.8,.7)}makeWings(){let t=new bt({color:16777215,emissive:12576511,emissiveIntensity:.55,roughness:.4}),e=new ne,n=[];for(let s of[-1,1]){let r=new ne;r.position.set(s*.38,.62,.1);for(let a=0;a<4;a++){let o=new W(new be(.62-a*.07,.035,.2),t);o.position.set(s*(.34-a*.03),.02*a,-.2+a*.2),o.rotation.y=s*.18*a,r.add(o)}e.add(r),n.push({pivot:r,side:s})}return e.userData.wings=n,e}startCraneToSlot(t,e,{wings:n=!1}={}){let s=this.state.buses[t],r=this.busVis.get(t),a=r.g,o=n?this.makeWings():null;o&&a.add(o);let l=e==="V"?0:e+1,c=a.position.clone(),h=a.scale.x,d=Gn[s.len]||.75;r.traveling=!0,r.fromBoard=!0,this.fx.ring(c.x,c.z,11897855,.3,1.8,.7),this.sfx("whoosh");let u={x:Ze(l),z:xe};this.tween(n?1.25:.95,f=>{let g=qi.inOut(f);if(a.position.x=c.x+(u.x-c.x)*g,a.position.z=c.z+(u.z-c.z)*g,a.position.y=Math.sin(f*Math.PI)*(n?3.8:3.2),a.scale.setScalar(h+(d-h)*g),a.rotation.y+=Nr(a.rotation.y,0)*Math.min(1,f*2),Math.random()<.5&&this.fx.stars.emit(a.position.x,a.position.y+.3,a.position.z,0,0,0,n?16769658:13215743,.5,.2,.02,0,0),o)for(let y of o.userData.wings)y.pivot.rotation.z=y.side*(.25+Math.sin(f*38)*.55)},()=>{o&&a.remove(o),a.position.y=0,r.traveling=!1,this.finishArrive(r)})}shuffleFx(){let t=this.state,e=0;for(let n of t.buses){if(n.st!=="board")continue;let s=this.busVis.get(n.id);if(!s)continue;let r=s.g,a=e++*.035;r.scale.setScalar(.01),this.tween(.45+a,o=>{let l=Math.max(0,(o*(.45+a)-a)/.45);r.scale.setScalar(Math.max(.01,qi.back(Math.min(1,l))))},()=>r.scale.setScalar(1))}this.fx.ring(0,Wi+t.h/2,13215743,.4,5.5,.8)}dropVip(t){let e=this.makeBusVis(t),n=e.g;n.visible=!0,n.position.set(Ze(0),8,xe),n.rotation.y=0,n.scale.setScalar(Gn[t.len]),e.parts.arrow&&(e.parts.arrow.visible=!1),e.traveling=!0,this.fx.ring(Ze(0),xe,16766042,.3,2.6,.9),this.tween(.8,s=>{n.position.y=8*(1-qi.out(s)),n.rotation.y=(1-s)*Math.PI*2},()=>{n.position.y=0,n.rotation.y=0,e.traveling=!1,this.finishArrive(e)})}convertFx(t,e){let n=this.busVis.get(t);if(!n)return;let s=n.g,r=this.state.buses[t];this.fx.ring(s.position.x,s.position.z,12946431,.3,2,.7),this.fx.burst(s.position.x,.7,s.position.z,12946431,22,3,!0,.9),this.tween(.5,a=>{let o=1+Math.sin(a*Math.PI)*.22;s.scale.setScalar(o)},()=>s.scale.setScalar(1)),e==="color"&&Lu(s,this.hexOf(r.color)),this.sfx("convert")}rebuildBus(t){let e=this.busVis.get(t);e&&this.busGroup.remove(e.g);let n=this.makeBusVis(this.state.buses[t]);return this.convertFx(t,"rebuild"),n}celebrate(){this.fx.confetti(0,-4,110),this.sfx("win");for(let t=0;t<12;t++){let e=rh(t%7,this.hexOf,t);e.traverse(n=>{n.isMesh&&(n.castShadow=!1)}),e.position.set(-4.4+t*.8,0,Ws+t%2*.3),e.userData.targetYaw=0,e.scale.setScalar(.01),e.userData.pop=-t*.05,this.passGroup.add(e),this.celebrating.push(e)}for(let t of this.busVis.values())t.bounce=1}bindInput(){let t=this.renderer.domElement,e=a=>{let o=t.getBoundingClientRect();return new rt((a.clientX-o.left)/o.width*2-1,-((a.clientY-o.top)/o.height)*2+1)},n=(a,o)=>{this.raycaster.setFromCamera(e(a),this.camera);let l=new vn(new P(0,1,0),-o),c=new P;return this.raycaster.ray.intersectPlane(l,c)?c:null};this._groundHit=n;let s=a=>{let o=n(a,.4);if(!o||!this.state)return-1;let l=this.state,c=-1,h=1e9;for(let d of l.buses){if(d.st!=="board")continue;let u=this.busCenter(d),f=ke[d.dir].horiz,g=(f?d.len:1)/2+.08,y=(f?1:d.len)/2+.08,m=Math.abs(o.x-u.x),p=Math.abs(o.z-u.z);if(m<=g&&p<=y){let v=m/g+p/y;v<h&&(h=v,c=d.id)}}return c};t.addEventListener("pointerdown",a=>{if(this.inputLocked)return;let o=s(a);if(o>=0){this.dragInfo={id:o,start:n(a,.4),moved:0,e0:{x:a.clientX,y:a.clientY},fired:!1},t.setPointerCapture(a.pointerId);return}let l=n(a,.04);if(l&&Math.abs(l.z-xe)<Xi/2){let c=Math.round(l.x/Yu+3.5);c>=0&&c<=Fe&&Math.abs(l.x-Ze(c))<fo/2+.05&&this.onSlotTap?.(c===0?"V":c-1)}}),t.addEventListener("pointermove",a=>{let o=this.dragInfo;if(!o||o.fired)return;let l=n(a,.4);if(!l||!o.start)return;let c=this.state.buses[o.id],h=ke[c.dir],d=(l.x-o.start.x)*h.x+(l.z-o.start.z)*h.y;o.moved=Math.max(o.moved,Math.hypot(a.clientX-o.e0.x,a.clientY-o.e0.y));let u=this.busVis.get(o.id);if(!u)return;let f=this.freeGap(c);u.dragOff=Math.max(0,Math.min(d,Math.min(.55,f))),d>.55&&(o.fired=!0,u.dragOff=0,this.fireTap(o.id))});let r=()=>{let a=this.dragInfo;if(this.dragInfo=null,!a)return;let o=this.busVis.get(a.id);o&&(o.dragOff=0),!a.fired&&a.moved<14&&this.fireTap(a.id)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",()=>{let a=this.dragInfo;if(this.dragInfo=null,a){let o=this.busVis.get(a.id);o&&(o.dragOff=0)}})}freeGap(t){let e=this.state,n=ke[t.dir],s=Gs(e,t.id),[r,a]=t.dir==="R"?[t.x+t.len-1,t.y]:t.dir==="D"?[t.x,t.y+t.len-1]:[t.x,t.y],o=0;for(;;){if(r+=n.x,a+=n.y,r<0||a<0||r>=e.w||a>=e.h)return 99;if(s.has(r+","+a))return o;o++}}fireTap(t){if(this.tapFilter&&!this.tapFilter(t)){this.onTapRejected?.(t);return}this.onBusTap?.(t)}removeLabel(t){let e=this.labels.get(t);e&&(e.remove(),this.labels.delete(t))}updateLabels(){let t=this.state;if(!t)return;let e={w:this.container.clientWidth,h:this.container.clientHeight};this.gateFlow&&(this.gateFlow.offset.y+=.012),this.gateLights&&this.gateLights.forEach((s,r)=>{let a=.5+.5*Math.sin(this.time*4+r*Math.PI);s.halo.material.opacity=.45+.5*a,s.halo.scale.setScalar(.7+.5*a),s.cap.material.emissiveIntensity=.7+.9*a}),this.gateFrame&&(this.gateFrame.material.opacity=.85+Math.sin(this.time*3)*.15),this.qsign||(this.qsign=document.createElement("div"),this.qsign.className="qsign",this.qsign.innerHTML="<b></b><span>Kalan</span>",this.labelLayer.appendChild(this.qsign));let n=t.queue.length-t.qi;this.qsign._v!==n&&(this.qsign.firstChild.textContent=n,this.qsign._v=n);{let s=this.project(-qn*Ur/2-.95,.4,qs-.1);this.qsign.style.transform=`translate(${s.x}px, ${s.y}px) translate(-50%,-50%)`}for(let s of this.busVis.values()){let r=t.buses[s.id];if(r.st!=="parked"||!s.parked||s.departing){this.removeLabel(s.id);continue}let a=this.labels.get(s.id);a||(a=document.createElement("div"),a.className="seat-badge",this.labelLayer.appendChild(a),this.labels.set(s.id,a));let o=r.seats-s.vcount;a._v!==o&&(a.textContent=o,a._v=o),a.style.background=r.vip?"linear-gradient(#ffe27a,#e0a020)":"#"+this.hexOf(r.color).toString(16).padStart(6,"0"),a.style.color=r.vip?"#5a3a00":"#fff";let l=new P(s.g.position.x,.05,s.g.position.z+1.75).project(this.camera);a.style.transform=`translate(${(l.x*.5+.5)*e.w}px, ${(-l.y*.5+.5)*e.h}px) translate(-50%,-50%)`}}project(t,e,n){let s=new P(t,e,n).project(this.camera);return{x:(s.x*.5+.5)*this.container.clientWidth,y:(-s.y*.5+.5)*this.container.clientHeight}}busScreenPos(t){let e=this.busVis.get(t);return e?this.project(e.g.position.x,.6,e.g.position.z):null}slotScreenPos(t){return this.project(Ze(t+1),.1,xe)}vipSlotScreenPos(){return this.project(Ze(0),.1,xe)}queueScreenPos(){return this.project(0,.5,qs-1.5)}update(t){t=Math.min(t,.05);let e=this.state;for(let n=this.tweens.length-1;n>=0;n--){let s=this.tweens[n];s.t+=t;let r=Math.min(1,s.t/s.dur);s.fn(r),r>=1&&(this.tweens.splice(n,1),s.done?.())}if(e){for(let n of this.busVis.values())if(n.traveling&&n.travel)this.updateTravel(n,t);else if(n.departing)this.updateDeparture(n,t);else if(n.parked){if(n.bounce>0){n.bounce=Math.max(0,n.bounce-t*3.2);let s=n.bounce,r=Gn[e.buses[n.id]?.len||2]||.75;n.g.scale.set(r*(1+Math.sin(s*14)*.03*s),r*(1-Math.sin(s*14)*.04*s),r*(1+Math.sin(s*14)*.03*s))}n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2,Math.random()<.08&&this.fx.sparkleAround(n.g.position.x,n.g.position.z,.8,2,16769674,1))}else if(e.buses[n.id].st==="board"){let s=e.buses[n.id],r=ke[s.dir],a=n.g.userData.baseX,o=n.g.userData.baseZ;a!==void 0&&!this.tweens.length?(n.g.position.x+=(a+r.x*n.dragOff-n.g.position.x)*Math.min(1,t*18),n.g.position.z+=(o+r.y*n.dragOff-n.g.position.z)*Math.min(1,t*18)):a!==void 0&&n.dragOff&&(n.g.position.x=a+r.x*n.dragOff,n.g.position.z=o+r.y*n.dragOff),n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2)}for(let[n,s]of this.glows){let r=this.busVis.get(n);if(!r)continue;let a=1+Math.sin(this.time*5)*.12;s.position.x=r.g.position.x,s.position.z=r.g.position.z,s.scale.set(s.userData.w*a,s.userData.l*a,1),s.material.opacity=.75+Math.sin(this.time*5)*.25}this.updatePassengers(t);for(let n of this.celebrating){let s=n.userData;s.pop!==void 0&&(s.pop+=t*3,s.pop>0&&n.scale.setScalar(Math.min(1,qi.back(Math.min(1,s.pop)))))}this.director(t),this.updateLabels(),this.updateAlert(t)}this.fx.update(t),this.noRender||this.renderer.render(this.scene,this.camera)}dispose(){this.ro.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove(),this.labelLayer.remove()}};var vh=[{stages:[{w:4,h:4,buses:[{c:1,l:2,d:"L",x:0,y:0},{c:0,l:3,d:"U",x:1,y:1},{c:3,l:2,d:"R",x:2,y:3}],queue:[1,1,1,1,0,0,0,0,0,0,3,3,3,3],par:[0,1,2],wr:1,solution:[0,1,2]}],slotsBase:4,n:1,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:2,l:2,d:"U",x:3,y:2},{c:2,l:3,d:"D",x:4,y:2},{c:2,l:2,d:"L",x:2,y:0},{c:1,l:3,d:"R",x:1,y:1},{c:1,l:2,d:"U",x:4,y:0},{c:0,l:2,d:"R",x:2,y:4}],queue:[1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,0,0,0,0],par:[4,2,3,0,1,5],wr:.688,solution:[4,1,3,2,0,5],slots:3}],slotsBase:3,n:2,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"R",x:1,y:3},{c:2,l:3,d:"R",x:1,y:4},{c:0,l:2,d:"D",x:4,y:2},{c:0,l:2,d:"D",x:1,y:1},{c:1,l:3,d:"U",x:0,y:2}],queue:[1,2,2,2,1,1,2,1,1,2,2,1,0,0,0,0,2,0,0,0,2,2,2,0,2,2],par:[4,1,2,0,3],wr:.888,solution:[4,1,2,0,3],slots:4}],slotsBase:4,n:3,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:0,y:4},{c:1,l:2,d:"U",x:2,y:2},{c:2,l:3,d:"U",x:0,y:1},{c:0,l:2,d:"L",x:0,y:0},{c:2,l:3,d:"D",x:1,y:1},{c:0,l:2,d:"U",x:2,y:0}],queue:[0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,0,2,2,2,0,2],par:[5,1,0,4,3,2],wr:.66,solution:[3,0,2,5,1,4],slots:4}],slotsBase:4,n:4,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:1,y:0},{c:0,l:2,d:"D",x:0,y:3},{c:2,l:3,d:"D",x:4,y:0},{c:0,l:2,d:"L",x:3,y:4},{c:0,l:2,d:"L",x:1,y:4},{c:2,l:2,d:"U",x:3,y:1},{c:1,l:2,d:"R",x:3,y:3}],queue:[2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,2,2,2,2,2,2],par:[0,5,1,4,3,6,2],wr:.708,solution:[0,5,1,4,3,6,2],slots:4}],slotsBase:4,n:5,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"U",x:4,y:1},{c:2,l:3,d:"L",x:2,y:4},{c:0,l:3,d:"R",x:3,y:0},{c:2,l:1,d:"D",x:3,y:3},{c:1,l:3,d:"L",x:3,y:5},{c:3,l:2,d:"R",x:1,y:3,s:3},{c:0,l:3,d:"U",x:5,y:1},{c:1,l:3,d:"D",x:0,y:3}],queue:[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,2,3,3],par:[2,6,0,7,4,1,3,5],wr:.576,solution:[2,6,0,7,4,1,3,5],slots:4}],slotsBase:4,n:6,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:0,l:3,d:"U",x:4,y:1},{c:1,l:2,d:"R",x:0,y:5},{c:2,l:3,d:"D",x:1,y:0},{c:3,l:4,d:"R",x:1,y:4},{c:1,l:4,d:"U",x:0,y:1},{c:0,l:2,d:"R",x:2,y:3},{c:3,l:2,d:"D",x:5,y:4,s:3},{c:3,l:1,d:"U",x:0,y:0}],queue:[0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,1,1,1,2,2,2,2,3,3,3,1,1,1,1,1,1,1,1],par:[0,5,6,3,1,2,7,4],wr:.504,solution:[0,5,6,3,7,4,1,2],slots:4}],slotsBase:4,n:7,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"U",x:1,y:2,s:5},{c:0,l:3,d:"R",x:2,y:4},{c:2,l:2,d:"D",x:0,y:4},{c:3,l:3,d:"L",x:2,y:2},{c:1,l:3,d:"D",x:5,y:3},{c:1,l:3,d:"D",x:0,y:1},{c:0,l:2,d:"L",x:2,y:3},{c:2,l:2,d:"R",x:2,y:5},{c:0,l:2,d:"D",x:3,y:0,s:3}],queue:[1,1,1,1,1,1,0,0,2,2,2,0,0,0,0,2,2,2,1,1,2,1,2,1,1,1,3,3,3,3,0,0,0,3,0,3,3,3,3,3,3,0,0,0],par:[4,1,7,2,5,0,6,3,8],wr:.588,solution:[4,1,2,7,5,0,6,3,8],slots:4}],slotsBase:4,n:8,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:2,l:2,d:"R",x:4,y:5},{c:3,l:3,d:"U",x:3,y:3},{c:1,l:3,d:"D",x:1,y:1,s:5},{c:1,l:4,d:"D",x:0,y:0},{c:1,l:2,d:"R",x:2,y:2},{c:2,l:3,d:"L",x:2,y:1},{c:1,l:2,d:"U",x:5,y:2},{c:0,l:2,d:"D",x:4,y:2,s:3},{c:3,l:1,d:"D",x:4,y:4,s:3},{c:0,l:3,d:"R",x:3,y:0}],queue:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,0,0,0,1,1,1,3,3,3,3,3],par:[3,2,9,6,0,5,8,7,4,1],wr:.54,solution:[3,2,5,9,6,0,8,7,4,1],slots:4}],slotsBase:4,n:9,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:1,l:4,d:"L",x:1,y:5},{c:2,l:2,d:"D",x:2,y:0},{c:1,l:1,d:"L",x:1,y:0},{c:1,l:1,d:"U",x:4,y:2,s:3},{c:0,l:3,d:"R",x:1,y:2},{c:3,l:2,d:"D",x:1,y:3},{c:2,l:2,d:"D",x:0,y:4},{c:3,l:4,d:"U",x:5,y:2},{c:1,l:3,d:"U",x:0,y:0},{c:0,l:3,d:"R",x:2,y:3},{c:1,l:1,d:"L",x:2,y:4}],queue:[1,1,2,2,2,1,2,1,1,1,1,1,1,3,3,1,3,1,1,3,3,1,1,1,3,3,3,3,1,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,1,2,2,1,1,1,1,1,1,1],par:[3,6,0,5,7,10,9,4,1,8,2],wr:.544,solution:[8,6,0,7,2,5,9,3,4,10,1],slots:4}],slotsBase:4,n:10,difficulty:"normal"},{stages:[{w:6,h:7,buses:[{c:3,l:2,d:"U",x:4,y:1},{c:4,l:2,d:"R",x:4,y:6},{c:1,l:1,d:"L",x:0,y:5},{c:4,l:1,d:"D",x:5,y:5},{c:1,l:3,d:"D",x:0,y:0},{c:2,l:3,d:"D",x:2,y:0},{c:0,l:1,d:"L",x:2,y:3},{c:4,l:3,d:"U",x:1,y:0},{c:0,l:3,d:"U",x:4,y:3},{c:2,l:2,d:"L",x:3,y:0},{c:4,l:3,d:"L",x:0,y:6},{c:3,l:3,d:"L",x:1,y:5}],queue:[0,0,0,4,4,0,4,4,4,4,1,1,1,1,1,4,4,4,4,4,3,3,3,1,1,1,1,4,3,3,3,1,2,2,2,2,2,2,2,2,2,2,3,3,0,0,0,0,0,3,0,3,4,4,4,4,4,4,4,4],par:[6,10,2,4,7,11,5,9,0,8,1,3],wr:.44,solution:[6,7,2,10,4,11,5,9,0,8,1,3],slots:4}],slotsBase:4,n:11,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:1,l:2,d:"D",x:5,y:1},{c:0,l:2,d:"D",x:0,y:4},{c:2,l:4,d:"L",x:2,y:5},{c:2,l:3,d:"L",x:0,y:0,s:5},{c:2,l:3,d:"R",x:3,y:3},{c:1,l:2,d:"U",x:2,y:3},{c:2,l:1,d:"L",x:2,y:2},{c:2,l:2,d:"U",x:3,y:1},{c:1,l:3,d:"U",x:1,y:3},{c:3,l:2,d:"L",x:4,y:4},{c:4,l:3,d:"L",x:1,y:6,s:5},{c:3,l:2,d:"L",x:4,y:6},{c:0,l:3,d:"L",x:0,y:1}],queue:[2,4,4,4,4,4,2,2,2,2,2,2,2,2,2,3,3,0,0,2,2,3,3,0,2,2,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,2,2,2,2,2,2,3,2,2,2,2,2,2,2,3,3,3,1,1,1,1],par:[7,10,3,11,12,6,5,1,8,2,4,9,0],wr:.368,solution:[3,10,4,11,12,7,8,1,2,6,5,9,0],slots:4}],slotsBase:4,n:12,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:0,l:3,d:"R",x:0,y:3,s:5},{c:1,l:2,d:"D",x:5,y:5,s:3},{c:2,l:1,d:"L",x:1,y:6},{c:0,l:2,d:"U",x:5,y:1},{c:0,l:1,d:"U",x:4,y:3},{c:3,l:1,d:"D",x:1,y:4},{c:4,l:3,d:"L",x:3,y:0},{c:3,l:3,d:"R",x:2,y:5,s:5},{c:2,l:4,d:"L",x:2,y:4},{c:0,l:1,d:"D",x:2,y:2},{c:3,l:3,d:"D",x:0,y:4},{c:3,l:2,d:"D",x:3,y:2},{c:2,l:2,d:"R",x:2,y:6},{c:2,l:4,d:"R",x:1,y:1}],queue:[3,3,3,2,3,3,3,2,2,2,3,4,4,4,4,4,0,0,3,3,3,4,0,0,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,0,0,3,3,0,3,3,3,3,0,2,2,2,2,2,2,2,3,3,0,0,0,0,2,3,0,0,0,0,0],par:[10,2,5,6,3,1,13,12,4,7,8,11,0,9],wr:.404,solution:[10,2,5,6,3,1,8,13,4,7,12,11,0,9],slots:4}],slotsBase:4,n:13,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:3,l:1,d:"L",x:0,y:6},{c:3,l:4,d:"L",x:1,y:6},{c:2,l:3,d:"U",x:2,y:1,s:5},{c:1,l:2,d:"L",x:0,y:0},{c:3,l:1,d:"R",x:5,y:6},{c:0,l:3,d:"D",x:4,y:2,s:5},{c:1,l:3,d:"L",x:2,y:5},{c:4,l:2,d:"D",x:1,y:4},{c:4,l:1,d:"U",x:4,y:1},{c:2,l:2,d:"D",x:5,y:4},{c:1,l:2,d:"D",x:5,y:1},{c:3,l:3,d:"L",x:3,y:0},{c:0,l:2,d:"R",x:0,y:1},{c:2,l:4,d:"U",x:0,y:2},{c:1,l:1,d:"U",x:2,y:0,s:3}],queue:[3,3,3,3,3,3,3,3,1,2,2,1,1,2,2,2,1,1,1,1,2,1,3,3,2,4,4,4,3,2,4,3,3,2,3,2,1,1,1,1,0,0,0,0,2,2,2,3,3,3,4,4,2,3,4,2,3,4,2,2,3,3,3,1,1,1,1,0,0,0,0,0,1],par:[0,4,14,2,3,11,9,8,10,12,13,1,7,6,5],wr:.356,solution:[0,1,3,4,9,7,14,2,10,11,8,12,13,6,5],slots:4}],slotsBase:4,n:14,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:2,l:3,d:"L",x:2,y:6},{c:3,l:2,d:"L",x:2,y:5,s:3},{c:3,l:1,d:"R",x:5,y:0},{c:1,l:1,d:"R",x:3,y:2},{c:2,l:2,d:"R",x:4,y:5},{c:4,l:2,d:"R",x:3,y:0},{c:3,l:2,d:"D",x:0,y:5},{c:1,l:2,d:"L",x:1,y:0},{c:0,l:2,d:"D",x:5,y:2},{c:3,l:3,d:"R",x:3,y:4,s:5},{c:3,l:2,d:"R",x:0,y:2},{c:1,l:3,d:"D",x:2,y:1},{c:0,l:1,d:"D",x:4,y:2},{c:1,l:1,d:"D",x:0,y:0,s:3},{c:2,l:2,d:"R",x:0,y:1,s:3},{c:3,l:1,d:"D",x:3,y:1}],queue:[3,2,2,2,2,3,3,3,3,3,2,3,3,2,2,2,3,3,0,0,2,3,3,0,2,3,3,0,0,1,1,0,0,0,1,1,3,3,3,3,1,1,3,3,3,2,2,1,1,3,2,1,1,1,1,1,1,1,1,1,3,3,4,4,4,4],par:[6,0,1,4,9,8,12,3,15,11,10,14,13,7,2,5],wr:.372,solution:[9,4,6,0,1,8,2,12,11,5,3,10,15,14,13,7],slots:4}],slotsBase:4,n:15,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:4,l:2,d:"U",x:6,y:0,s:3},{c:4,l:3,d:"L",x:0,y:5},{c:2,l:1,d:"L",x:0,y:6,s:3},{c:4,l:3,d:"D",x:1,y:0},{c:3,l:4,d:"D",x:6,y:3},{c:2,l:2,d:"L",x:0,y:4,s:3},{c:2,l:3,d:"L",x:3,y:0},{c:1,l:3,d:"R",x:3,y:6},{c:3,l:4,d:"U",x:5,y:2},{c:3,l:1,d:"R",x:6,y:2},{c:1,l:2,d:"D",x:2,y:0},{c:0,l:2,d:"L",x:4,y:1},{c:4,l:2,d:"R",x:1,y:6},{c:0,l:4,d:"D",x:0,y:0}],queue:[3,3,3,2,2,4,4,3,2,2,4,4,3,3,3,3,3,1,1,1,1,1,3,3,3,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,0,0,4,4,4,0,0,0,0,0,4,4,0,1,1,1,2,1,2,2,2,0,0,0,0,3,3,3,3,3,3,3,3],par:[9,2,0,4,7,12,1,5,13,3,10,6,11,8],wr:.36,solution:[4,5,1,2,9,7,0,12,3,13,10,6,11,8],slots:4}],slotsBase:4,n:16,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:2,l:2,d:"L",x:5,y:5,s:3},{c:2,l:3,d:"D",x:5,y:0},{c:1,l:4,d:"D",x:1,y:3},{c:4,l:3,d:"D",x:0,y:3},{c:1,l:4,d:"D",x:3,y:3,s:7},{c:2,l:1,d:"L",x:2,y:6},{c:0,l:2,d:"U",x:4,y:0},{c:1,l:3,d:"L",x:4,y:4},{c:2,l:2,d:"U",x:3,y:0,s:3},{c:3,l:3,d:"R",x:4,y:6},{c:3,l:3,d:"D",x:6,y:0},{c:0,l:4,d:"L",x:0,y:2},{c:3,l:2,d:"R",x:0,y:0},{c:0,l:1,d:"D",x:6,y:3},{c:4,l:3,d:"D",x:2,y:3}],queue:[0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,0,0,0,2,2,2,1,0,0,2,2,2,2,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,2,2,2,1,2,1,1,1,1,1,1,1,1,3,3,3,0,0,3,3,0,0,3,2,3,3,2,2,2,3,3,3,3,3,3,3,3],par:[6,11,8,2,5,3,14,4,0,7,9,13,1,10,12],wr:.344,solution:[11,8,2,6,5,4,3,9,14,0,7,1,13,10,12],slots:4}],slotsBase:4,n:17,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:3,l:4,d:"R",x:0,y:4,s:7},{c:3,l:3,d:"L",x:2,y:0},{c:2,l:4,d:"R",x:0,y:5},{c:5,l:4,d:"U",x:1,y:0,s:7},{c:5,l:1,d:"L",x:0,y:3},{c:2,l:3,d:"U",x:6,y:0},{c:1,l:3,d:"D",x:6,y:3},{c:4,l:1,d:"U",x:3,y:6},{c:1,l:3,d:"D",x:0,y:0},{c:4,l:3,d:"L",x:0,y:6},{c:5,l:2,d:"R",x:5,y:6,s:3},{c:4,l:1,d:"D",x:2,y:1},{c:0,l:3,d:"L",x:3,y:1},{c:4,l:4,d:"D",x:4,y:2,s:7},{c:1,l:2,d:"R",x:2,y:3},{c:4,l:3,d:"D",x:5,y:3}],queue:[5,4,4,4,4,4,2,5,5,5,4,2,2,2,2,2,5,4,5,4,4,5,5,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,2,3,3,3,3,3,3,3,1,1,1,2,2,2,2,3,1,2,2,2,4,4,4,4,5,5,5,5,5,5,1,1,1,1,1,1,0,0,0,0,0,0,3,3,3,4,4,4,3,3],par:[4,9,5,10,15,13,6,2,0,14,11,3,8,12,1,7],wr:.3,solution:[3,13,5,9,10,15,6,0,2,14,11,4,8,1,12,7],slots:4}],slotsBase:4,n:18,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:1,l:4,d:"L",x:3,y:6},{c:3,l:4,d:"D",x:6,y:0,s:7},{c:3,l:1,d:"D",x:0,y:6,s:3},{c:1,l:4,d:"R",x:3,y:5},{c:2,l:2,d:"L",x:0,y:1},{c:4,l:2,d:"R",x:0,y:0,s:3},{c:3,l:4,d:"L",x:0,y:2},{c:2,l:2,d:"L",x:2,y:1},{c:5,l:3,d:"L",x:2,y:3},{c:5,l:3,d:"D",x:4,y:0},{c:5,l:1,d:"L",x:2,y:6},{c:4,l:4,d:"L",x:3,y:4,s:7},{c:0,l:4,d:"D",x:5,y:0},{c:4,l:1,d:"D",x:1,y:6},{c:4,l:3,d:"D",x:0,y:3},{c:5,l:2,d:"R",x:2,y:0}],queue:[2,2,2,2,3,3,3,2,3,2,2,2,3,3,3,3,3,3,4,4,4,3,3,4,4,4,5,5,5,5,4,4,4,5,4,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,5,5,1,1,1,1,4,4,4,4,4,4,4,4,3,3,3,3,3,3,0,0,0,0,0,5,5,5,0,0,5,5,5,0,5,5,5,5,4,4],par:[4,2,7,6,14,8,13,10,0,3,11,1,12,9,15,5],wr:.324,solution:[4,6,7,2,14,3,11,8,13,10,0,1,12,9,15,5],slots:4}],slotsBase:4,n:19,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:1,l:1,d:"D",x:5,y:6},{c:3,l:1,d:"D",x:0,y:3,s:3},{c:2,l:3,d:"L",x:0,y:6,s:5},{c:1,l:1,d:"R",x:6,y:3,s:3},{c:0,l:3,d:"U",x:2,y:0},{c:4,l:1,d:"D",x:3,y:6,s:3},{c:5,l:4,d:"U",x:4,y:3},{c:0,l:1,d:"R",x:0,y:5},{c:2,l:3,d:"U",x:5,y:3},{c:2,l:4,d:"L",x:3,y:0},{c:2,l:4,d:"L",x:0,y:4,s:7},{c:0,l:3,d:"U",x:0,y:0,s:5},{c:3,l:3,d:"R",x:1,y:5,s:5},{c:2,l:2,d:"L",x:5,y:1},{c:1,l:3,d:"R",x:4,y:2},{c:5,l:3,d:"U",x:6,y:4},{c:1,l:2,d:"U",x:1,y:0,s:3}],queue:[1,1,1,1,1,1,4,4,1,1,4,2,0,0,2,2,2,0,0,0,0,2,2,0,0,1,1,0,1,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,5,5,5,5,5,1,5,5,5,5,5,2,5,5,2,2,2,2,2,5,5,3,3,3,3,3,0,2,2,2,2,2,2,3,0,0,3,3],par:[3,0,5,2,4,11,16,9,13,14,15,6,8,12,7,10,1],wr:.284,solution:[14,5,16,10,4,11,0,9,6,2,13,3,8,15,12,7,1],slots:4}],slotsBase:4,n:20,difficulty:"hard"},{stages:[{w:7,h:8,buses:[{c:3,l:3,d:"D",x:5,y:5},{c:4,l:3,d:"L",x:1,y:2},{c:2,l:2,d:"R",x:3,y:3},{c:0,l:4,d:"R",x:0,y:6},{c:0,l:2,d:"D",x:4,y:6},{c:2,l:3,d:"R",x:4,y:2},{c:0,l:2,d:"D",x:6,y:6,s:3},{c:1,l:2,d:"R",x:2,y:7},{c:2,l:2,d:"R",x:0,y:7,s:3},{c:4,l:1,d:"U",x:6,y:3,s:3},{c:5,l:2,d:"D",x:0,y:1},{c:3,l:3,d:"D",x:2,y:3},{c:2,l:2,d:"R",x:0,y:3},{c:3,l:2,d:"U",x:5,y:3},{c:2,l:2,d:"R",x:5,y:0,s:3},{c:3,l:1,d:"D",x:0,y:4}],queue:[2,0,0,3,3,2,2,2,0,3,3,3,2,2,0,3,2,2,0,1,1,1,2,2,0,0,1,0,2,2,2,2,0,0,0,3,3,3,0,0,0,3,0,4,4,4,3,2,2,2,4,3,2,3,3,3,3,2,2,5,5,5,3,3,3,3,5,4,4,4,4,4],par:[5,4,0,14,6,7,8,3,15,9,13,2,11,12,10,1],wr:.268,solution:[5,4,0,14,6,7,8,3,11,13,9,2,12,15,10,1],slots:4}],slotsBase:4,n:21,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:5,l:3,d:"R",x:4,y:6,s:5},{c:5,l:1,d:"U",x:5,y:1},{c:3,l:2,d:"L",x:0,y:4},{c:5,l:4,d:"R",x:0,y:6,s:7},{c:4,l:2,d:"L",x:1,y:0},{c:2,l:3,d:"R",x:3,y:0},{c:0,l:4,d:"L",x:2,y:2},{c:2,l:1,d:"L",x:5,y:3},{c:4,l:3,d:"D",x:6,y:0},{c:0,l:3,d:"R",x:0,y:7},{c:1,l:3,d:"D",x:2,y:3,s:5},{c:4,l:3,d:"R",x:2,y:1},{c:3,l:2,d:"U",x:4,y:3},{c:2,l:3,d:"D",x:0,y:1,s:5},{c:1,l:3,d:"U",x:1,y:1},{c:1,l:2,d:"R",x:3,y:7,s:3},{c:2,l:3,d:"U",x:3,y:3}],queue:[1,1,1,1,0,0,0,0,0,3,3,0,3,3,5,5,5,4,5,5,5,4,4,4,5,5,5,5,5,5,1,1,1,1,5,1,5,1,4,4,4,4,4,4,1,1,1,2,2,2,2,2,1,2,2,2,2,2,2,2,5,5,4,4,4,4,0,0,0,3,3,3,4,0,0,0,3,4,0,0,2,2,2,2,2,2,2,2,2],par:[15,9,2,0,4,3,10,8,14,13,5,1,11,6,12,16,7],wr:.192,solution:[15,0,3,9,10,2,8,5,1,13,4,14,6,11,16,12,7],slots:4}],slotsBase:4,moveLimit:20,n:22,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:4,d:"D",x:0,y:1},{c:3,l:2,d:"U",x:5,y:4},{c:2,l:2,d:"R",x:0,y:5},{c:1,l:3,d:"R",x:3,y:2},{c:1,l:2,d:"D",x:1,y:6},{c:4,l:3,d:"D",x:4,y:4},{c:5,l:2,d:"D",x:2,y:6},{c:5,l:1,d:"R",x:5,y:1},{c:1,l:3,d:"D",x:6,y:3},{c:4,l:4,d:"U",x:1,y:0},{c:0,l:2,d:"U",x:6,y:0},{c:1,l:4,d:"L",x:2,y:0},{c:4,l:1,d:"R",x:2,y:5},{c:0,l:1,d:"R",x:0,y:7,s:3},{c:5,l:2,d:"D",x:6,y:6,s:3},{c:0,l:1,d:"U",x:5,y:3,s:3},{c:0,l:2,d:"D",x:5,y:6,s:3},{c:0,l:3,d:"U",x:3,y:4,s:5}],queue:[0,0,0,0,5,5,5,0,4,4,4,4,4,4,4,5,0,0,4,0,5,5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,5,5,5,0,0,0,0,0,4,4,0,4,4,4,4,3,3,3,1,1,3,1,1,1,1,4,4,4,4,2,2,3,3,3,2,2,3,3,3,3,3],par:[16,6,10,9,7,4,3,11,15,14,13,17,5,1,8,12,2,0],wr:.176,solution:[10,6,16,9,11,3,17,14,7,8,15,5,4,13,1,12,2,0],slots:4}],slotsBase:4,n:23,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:4,d:"D",x:2,y:2},{c:1,l:1,d:"U",x:5,y:1},{c:3,l:2,d:"R",x:4,y:0},{c:5,l:2,d:"U",x:6,y:4},{c:5,l:4,d:"U",x:0,y:2},{c:5,l:4,d:"R",x:1,y:7,s:7},{c:3,l:2,d:"R",x:5,y:3},{c:4,l:1,d:"D",x:0,y:7},{c:1,l:2,d:"L",x:3,y:2},{c:1,l:3,d:"U",x:6,y:0},{c:1,l:2,d:"U",x:5,y:6,s:3},{c:0,l:3,d:"L",x:1,y:0},{c:4,l:2,d:"U",x:0,y:0},{c:2,l:3,d:"R",x:2,y:1},{c:4,l:3,d:"U",x:4,y:3},{c:0,l:4,d:"D",x:1,y:1},{c:2,l:3,d:"R",x:0,y:6,s:5},{c:0,l:2,d:"U",x:6,y:6}],queue:[4,4,4,0,0,0,0,4,4,0,0,4,4,4,3,3,3,3,5,5,5,5,1,5,5,5,1,1,1,1,1,5,5,5,5,5,3,3,1,1,3,1,3,1,2,2,2,2,2,2,0,0,0,0,1,1,1,1,5,2,0,0,0,5,5,2,2,2,0,5,5,5,2,0,5,0,0,0,3,3,3,3,3,3,1,4,3,3,1,1,4,4,4,4,4],par:[7,12,11,6,4,9,3,2,1,13,17,10,5,16,15,0,8,14],wr:.24,solution:[12,11,7,6,4,9,3,2,1,13,17,10,5,16,0,15,8,14],slots:4}],slotsBase:4,n:24,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:2,d:"U",x:6,y:0},{c:4,l:4,d:"D",x:1,y:1},{c:3,l:4,d:"D",x:2,y:0},{c:2,l:1,d:"U",x:0,y:0},{c:4,l:1,d:"R",x:5,y:5},{c:0,l:3,d:"R",x:3,y:7,s:5},{c:2,l:1,d:"D",x:6,y:7},{c:2,l:3,d:"U",x:6,y:3},{c:0,l:2,d:"R",x:5,y:6},{c:1,l:1,d:"U",x:6,y:2,s:3},{c:3,l:3,d:"L",x:2,y:4},{c:0,l:2,d:"L",x:1,y:7},{c:1,l:4,d:"L",x:1,y:6},{c:0,l:4,d:"U",x:0,y:4,s:7},{c:4,l:3,d:"L",x:3,y:0},{c:2,l:1,d:"L",x:0,y:1},{c:1,l:1,d:"L",x:0,y:2,s:3},{c:3,l:1,d:"U",x:1,y:0,s:3},{c:5,l:3,d:"R",x:2,y:5},{c:5,l:3,d:"U",x:5,y:1,s:5}],queue:[2,2,2,1,2,2,2,2,1,1,2,1,3,3,3,3,0,0,0,0,0,0,0,0,0,0,2,2,2,1,1,0,0,2,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,1,4,4,2,2,4,2,2,2,4,4,4,2,5,3,3,3,3,3,3,3,5,3,3,3,3,5,5,5,3,3,5,4,4,4,4,5,5,4,4,5,5,5],par:[15,16,6,17,8,5,3,0,13,11,9,12,1,7,4,18,10,2,14,19],wr:.164,solution:[3,0,6,17,5,8,9,15,16,13,12,7,11,1,10,4,18,2,14,19],slots:4}],slotsBase:4,moveLimit:23,n:25,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:4,l:2,d:"R",x:0,y:6},{c:1,l:3,d:"R",x:3,y:1,s:5},{c:0,l:2,d:"U",x:3,y:5},{c:3,l:2,d:"D",x:0,y:3},{c:2,l:4,d:"D",x:5,y:3},{c:1,l:3,d:"R",x:3,y:0},{c:1,l:4,d:"U",x:6,y:3},{c:1,l:3,d:"U",x:4,y:4},{c:4,l:3,d:"R",x:4,y:2}],queue:[1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,4,4,4,4,4,4,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,2,2,2,2,2,4,4,4,4,3,3,3,3],par:[5,1,2,8,7,4,6,0,3],wr:.32,solution:[1,4,5,2,8,6,7,0,3],slots:4},{w:7,h:7,buses:[{c:5,l:3,d:"D",x:1,y:3},{c:4,l:3,d:"U",x:6,y:0},{c:3,l:3,d:"R",x:0,y:0,s:5},{c:2,l:3,d:"R",x:3,y:4,s:5},{c:1,l:4,d:"R",x:2,y:6,s:7},{c:4,l:2,d:"D",x:4,y:1},{c:1,l:1,d:"L",x:1,y:2},{c:3,l:3,d:"L",x:3,y:5},{c:5,l:2,d:"U",x:0,y:1},{c:2,l:2,d:"R",x:3,y:0},{c:0,l:2,d:"L",x:3,y:3},{c:0,l:4,d:"U",x:5,y:0}],queue:[5,5,5,5,5,5,0,0,0,1,1,1,1,1,0,1,1,1,2,2,2,2,3,3,3,3,3,4,2,3,4,4,2,4,4,4,0,2,2,2,4,4,4,4,0,0,0,0,0,0,0,3,3,3,5,3,3,5,5,5,1,1,1],par:[0,10,4,3,7,5,1,11,9,2,8,6],wr:.236,solution:[0,11,4,1,3,7,9,2,10,5,8,6],slots:4}],slotsBase:4,timeLimit:160,n:26,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:4,l:4,d:"D",x:0,y:1},{c:3,l:4,d:"L",x:2,y:2,s:7},{c:4,l:1,d:"U",x:4,y:5},{c:4,l:4,d:"U",x:1,y:2},{c:0,l:4,d:"R",x:2,y:3},{c:1,l:3,d:"R",x:3,y:0},{c:3,l:3,d:"L",x:3,y:4,s:5},{c:2,l:2,d:"D",x:2,y:4,s:3},{c:2,l:1,d:"U",x:4,y:1,s:3},{c:0,l:2,d:"D",x:6,y:3,s:3}],queue:[0,0,0,0,2,2,4,4,4,4,4,4,1,1,1,1,2,4,4,1,1,2,2,2,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,3,3,3,3,4,4,4,4],par:[9,7,0,5,8,3,1,4,6,2],wr:.34,solution:[9,4,7,0,5,8,3,1,6,2],slots:4},{w:7,h:7,buses:[{c:1,l:2,d:"L",x:0,y:1},{c:0,l:4,d:"D",x:0,y:3},{c:0,l:4,d:"U",x:3,y:2,s:7},{c:4,l:4,d:"U",x:1,y:2,s:7},{c:4,l:4,d:"R",x:3,y:6,s:7},{c:1,l:4,d:"R",x:2,y:1},{c:3,l:2,d:"L",x:5,y:5},{c:0,l:1,d:"R",x:5,y:0},{c:5,l:2,d:"U",x:4,y:4},{c:0,l:3,d:"U",x:2,y:4},{c:5,l:2,d:"R",x:3,y:0,s:3},{c:2,l:3,d:"D",x:6,y:2},{c:2,l:3,d:"R",x:0,y:0}],queue:[0,0,0,0,0,0,0,0,1,1,1,1,0,0,5,1,0,5,5,1,0,5,1,1,0,0,0,5,5,5,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,1,1,1,4,4,4,4,1,4,4,4,4,4,4,3,3,3,2,2,2,2,2,4,3,2,4,4,4],par:[1,5,7,10,2,8,12,9,0,3,4,6,11],wr:.236,solution:[1,5,7,10,8,2,4,12,9,0,3,6,11],slots:4}],slotsBase:4,timeLimit:169,n:27,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:2,l:2,d:"L",x:3,y:2},{c:2,l:4,d:"L",x:0,y:1,s:7},{c:0,l:2,d:"L",x:1,y:6},{c:3,l:4,d:"R",x:2,y:0},{c:4,l:4,d:"L",x:3,y:6},{c:1,l:2,d:"R",x:5,y:5,s:3},{c:3,l:3,d:"D",x:6,y:2},{c:1,l:1,d:"D",x:6,y:0},{c:1,l:3,d:"L",x:2,y:5},{c:4,l:3,d:"R",x:4,y:1,s:5},{c:3,l:3,d:"D",x:0,y:3}],queue:[2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,1,1,1,1,1,0,1,1,1,1,0,0,1,0,4,4,4,4,4,4,3,3,4,4,4,4,3,3,3,3,4,4,4,1,1,1,3,3,3,3,3,3,3,3],par:[0,1,10,8,2,5,9,4,6,7,3],wr:.32,solution:[1,0,10,8,2,5,4,6,9,7,3],slots:4},{w:7,h:7,buses:[{c:0,l:3,d:"L",x:4,y:6},{c:1,l:2,d:"L",x:0,y:3},{c:4,l:4,d:"L",x:1,y:1},{c:3,l:4,d:"R",x:1,y:0},{c:5,l:3,d:"U",x:0,y:0},{c:4,l:4,d:"D",x:6,y:0,s:7},{c:1,l:4,d:"L",x:3,y:4,s:7},{c:3,l:4,d:"D",x:2,y:3,s:7},{c:5,l:1,d:"L",x:2,y:2},{c:2,l:3,d:"D",x:5,y:0,s:5},{c:3,l:3,d:"D",x:0,y:4,s:5},{c:5,l:1,d:"D",x:1,y:6},{c:1,l:2,d:"D",x:1,y:4},{c:0,l:4,d:"R",x:3,y:5}],queue:[1,1,1,5,5,5,5,5,5,1,5,5,5,5,5,5,5,5,4,3,1,4,4,3,3,3,3,3,3,1,1,1,4,3,4,4,4,4,0,3,3,3,3,0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,1,1,1,1,1,1,1,2,2,2,2,2,4,4,4,4,4,4,4,3,3,3,3,3,3],par:[1,4,8,11,2,7,12,13,10,0,6,9,5,3],wr:.188,solution:[1,4,8,11,2,7,12,10,13,0,6,5,9,3],slots:4}],slotsBase:4,timeLimit:178,n:28,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:0,l:2,d:"D",x:4,y:0},{c:1,l:2,d:"D",x:0,y:4,s:3},{c:3,l:2,d:"R",x:1,y:0},{c:2,l:2,d:"U",x:6,y:0},{c:0,l:2,d:"L",x:0,y:1},{c:0,l:2,d:"U",x:1,y:2},{c:0,l:3,d:"L",x:1,y:4},{c:4,l:3,d:"R",x:2,y:6},{c:1,l:2,d:"U",x:6,y:5},{c:1,l:2,d:"L",x:2,y:5},{c:4,l:2,d:"D",x:4,y:4},{c:3,l:2,d:"U",x:1,y:5}],queue:[2,1,1,1,4,4,4,4,4,2,2,1,4,2,4,0,0,4,0,4,4,0,1,0,0,0,3,1,0,0,3,1,1,0,3,3,0,0,0,0,3,0,0,3,3,3,0,0,1,1,1],par:[3,8,7,10,0,1,6,2,4,5,11,9],wr:.32,solution:[3,1,6,8,7,10,0,2,4,5,11,9],slots:4},{w:7,h:7,buses:[{c:2,l:4,d:"R",x:2,y:3},{c:5,l:2,d:"L",x:4,y:2,s:3},{c:2,l:4,d:"L",x:1,y:5},{c:5,l:3,d:"R",x:4,y:6},{c:3,l:2,d:"D",x:6,y:3},{c:3,l:1,d:"D",x:5,y:1},{c:3,l:3,d:"D",x:1,y:2},{c:0,l:2,d:"U",x:0,y:4},{c:4,l:3,d:"U",x:3,y:0,s:5},{c:2,l:3,d:"L",x:0,y:1,s:5},{c:1,l:2,d:"U",x:0,y:2},{c:1,l:2,d:"L",x:2,y:6},{c:4,l:4,d:"L",x:2,y:4},{c:0,l:1,d:"L",x:5,y:5},{c:5,l:3,d:"U",x:6,y:0}],queue:[5,5,5,5,4,4,4,4,4,1,1,5,4,1,5,1,2,2,2,1,1,2,1,2,2,1,5,5,5,3,3,3,5,5,5,3,0,0,0,2,3,0,2,2,2,2,2,3,3,2,3,3,3,2,0,0,0,5,5,0,5,2,2,2,2,2,2,2,4,4,4,4,4,4,4,3,3,3,3],par:[14,8,11,9,10,3,4,7,2,6,13,1,0,12,5],wr:.252,solution:[3,8,11,9,14,4,10,0,7,2,6,12,13,1,5],slots:4}],slotsBase:4,timeLimit:187,n:29,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:3,l:3,d:"D",x:5,y:4,s:5},{c:2,l:1,d:"L",x:0,y:5,s:3},{c:0,l:2,d:"D",x:2,y:5,s:3},{c:1,l:2,d:"L",x:0,y:4,s:3},{c:3,l:4,d:"D",x:0,y:0},{c:4,l:3,d:"U",x:1,y:1,s:5},{c:2,l:2,d:"R",x:3,y:6,s:3},{c:0,l:4,d:"R",x:3,y:2,s:7},{c:3,l:3,d:"R",x:4,y:3,s:5},{c:1,l:2,d:"R",x:0,y:6},{c:1,l:2,d:"U",x:6,y:5},{c:4,l:2,d:"D",x:4,y:0},{c:2,l:3,d:"R",x:1,y:0,s:5}],queue:[0,0,0,0,0,0,3,0,0,0,0,3,3,3,3,3,1,1,1,1,3,2,2,2,4,4,3,3,2,4,4,3,3,3,2,2,2,1,1,2,1,2,1,2,4,4,4,4,2,1,1,1,4,3,3,3,3,3,3],par:[7,8,2,10,0,6,11,12,9,5,1,3,4],wr:.324,solution:[7,0,2,8,3,10,6,11,12,5,9,1,4],slots:4},{w:7,h:7,buses:[{c:2,l:2,d:"L",x:3,y:5},{c:3,l:3,d:"D",x:5,y:4},{c:4,l:2,d:"D",x:6,y:4},{c:2,l:4,d:"U",x:2,y:2,s:7},{c:0,l:2,d:"L",x:0,y:2},{c:5,l:2,d:"D",x:6,y:0},{c:3,l:3,d:"U",x:4,y:0},{c:1,l:4,d:"D",x:0,y:3,s:7},{c:0,l:2,d:"U",x:3,y:0},{c:4,l:3,d:"D",x:3,y:2},{c:4,l:4,d:"U",x:1,y:3,s:7},{c:0,l:3,d:"U",x:5,y:0},{c:0,l:2,d:"L",x:3,y:6,s:3},{c:4,l:1,d:"R",x:2,y:1},{c:1,l:3,d:"R",x:0,y:0,s:5},{c:5,l:1,d:"R",x:6,y:2}],queue:[0,4,4,5,0,0,0,4,4,5,5,5,3,3,3,0,0,0,0,0,3,3,3,3,3,3,0,3,3,3,0,5,5,5,0,0,0,5,4,1,1,1,1,1,1,1,4,1,4,4,1,1,4,4,4,4,4,4,0,0,1,1,4,4,0,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4],par:[4,2,15,1,11,6,8,5,13,7,14,10,12,3,0,9],wr:.248,solution:[11,2,15,1,4,6,8,5,13,7,14,10,12,3,0,9],slots:4}],slotsBase:4,timeLimit:196,n:30,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:3,d:"R",x:3,y:3},{c:5,l:3,d:"L",x:1,y:6},{c:1,l:2,d:"L",x:3,y:5},{c:0,l:2,d:"R",x:0,y:1},{c:1,l:4,d:"R",x:2,y:0},{c:3,l:2,d:"D",x:6,y:5,s:3},{c:4,l:2,d:"D",x:2,y:4},{c:2,l:2,d:"R",x:2,y:7},{c:2,l:3,d:"U",x:2,y:1,s:5},{c:4,l:3,d:"U",x:5,y:5},{c:3,l:2,d:"R",x:5,y:1,s:3},{c:3,l:3,d:"R",x:3,y:4},{c:5,l:3,d:"U",x:0,y:5,s:5},{c:1,l:1,d:"D",x:6,y:3,s:3},{c:4,l:4,d:"D",x:1,y:2},{c:1,l:3,d:"R",x:4,y:2},{c:0,l:1,d:"D",x:6,y:7,s:3},{c:2,l:2,d:"L",x:0,y:0}],queue:[0,2,2,0,0,0,2,2,1,1,1,1,1,3,3,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,3,3,3,3,1,1,1,3,3,4,4,4,4,4,2,4,2,2,2,2,2,0,5,5,5,5,2,2,0,0,5,5,2,5,4,4,4,5,5,5,4,4,4,4,5,4,4,4,4,4,1,1,1],par:[16,17,15,5,13,0,11,4,10,9,8,3,12,7,1,14,6,2],wr:.196,solution:[16,17,4,8,11,15,5,10,3,13,0,9,12,1,7,14,6,2],slots:4}],slotsBase:4,n:31,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:5,l:2,d:"L",x:0,y:5},{c:2,l:3,d:"U",x:3,y:2},{c:1,l:3,d:"R",x:4,y:0},{c:0,l:1,d:"R",x:0,y:7},{c:2,l:2,d:"U",x:6,y:3},{c:0,l:3,d:"L",x:4,y:2},{c:0,l:2,d:"R",x:4,y:4},{c:1,l:2,d:"D",x:1,y:3},{c:1,l:4,d:"D",x:0,y:0,s:7},{c:3,l:4,d:"L",x:3,y:1},{c:4,l:3,d:"D",x:5,y:5},{c:2,l:4,d:"L",x:1,y:6},{c:1,l:2,d:"R",x:1,y:0},{c:3,l:1,d:"L",x:2,y:3},{c:2,l:2,d:"D",x:2,y:1},{c:4,l:3,d:"D",x:6,y:5},{c:2,l:4,d:"R",x:1,y:7},{c:3,l:2,d:"R",x:2,y:5},{c:5,l:2,d:"U",x:1,y:1}],queue:[5,4,4,4,4,4,5,5,4,4,4,4,4,5,4,4,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,0,2,2,0,0,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,3,3,3,5,5,3,3,3,5,5,2,2,3,3,2,2,3,3,3,3,3,3,2,2,2,2,2,2,0,0,2,2,0,0,0,2,2,0,0,0,0,0],par:[0,15,10,11,16,3,7,2,17,12,8,13,18,14,9,1,5,4,6],wr:.2,solution:[0,10,15,11,16,3,8,2,17,7,12,13,18,14,9,1,5,4,6],slots:4}],slotsBase:4,n:32,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:1,d:"U",x:3,y:0},{c:5,l:2,d:"U",x:1,y:0,s:3},{c:5,l:2,d:"L",x:0,y:7,s:3},{c:3,l:4,d:"L",x:3,y:7},{c:2,l:2,d:"D",x:0,y:5},{c:4,l:1,d:"L",x:2,y:1},{c:3,l:4,d:"L",x:0,y:3},{c:1,l:3,d:"L",x:4,y:0},{c:2,l:3,d:"D",x:0,y:0},{c:1,l:3,d:"D",x:4,y:2},{c:5,l:3,d:"L",x:3,y:6,s:5},{c:3,l:2,d:"L",x:3,y:5},{c:5,l:4,d:"L",x:3,y:1},{c:1,l:2,d:"D",x:2,y:5},{c:4,l:2,d:"U",x:6,y:2,s:3},{c:0,l:3,d:"U",x:6,y:4,s:5},{c:1,l:2,d:"R",x:2,y:4},{c:0,l:1,d:"U",x:2,y:0,s:3},{c:2,l:2,d:"D",x:5,y:4},{c:3,l:2,d:"L",x:0,y:4,s:3}],queue:[0,0,3,3,3,0,0,3,3,3,3,3,1,1,3,5,1,1,3,3,3,3,3,3,5,5,5,3,2,2,3,3,3,2,2,3,3,3,3,3,3,3,3,5,5,5,5,5,5,1,1,1,1,2,1,2,2,1,2,2,2,2,2,2,2,5,5,5,4,4,5,4,4,1,1,1,1,5,5,5,5,5,4,4,4,1,1,0,0,0,0,1,1,1,1],par:[17,0,19,13,6,2,4,3,11,10,9,18,8,1,5,7,12,14,15,16],wr:.124,solution:[17,6,1,2,3,13,4,10,11,9,19,0,8,7,18,5,12,14,15,16],slots:4}],slotsBase:4,n:33,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"U",x:0,y:1},{c:5,l:2,d:"R",x:5,y:2},{c:1,l:1,d:"L",x:4,y:3},{c:6,l:2,d:"U",x:1,y:0},{c:5,l:1,d:"U",x:5,y:0,s:3},{c:0,l:1,d:"D",x:4,y:7},{c:4,l:3,d:"R",x:3,y:1,s:5},{c:2,l:2,d:"U",x:1,y:2},{c:3,l:4,d:"L",x:0,y:7},{c:4,l:4,d:"D",x:2,y:1},{c:2,l:2,d:"R",x:3,y:0,s:3},{c:6,l:2,d:"L",x:2,y:5},{c:1,l:2,d:"L",x:5,y:7},{c:1,l:2,d:"L",x:3,y:2},{c:0,l:1,d:"L",x:0,y:0},{c:6,l:2,d:"D",x:6,y:0},{c:6,l:1,d:"L",x:2,y:6},{c:2,l:2,d:"D",x:3,y:3},{c:2,l:3,d:"D",x:6,y:4},{c:3,l:3,d:"U",x:4,y:4,s:5},{c:5,l:2,d:"L",x:0,y:6,s:3}],queue:[6,6,6,6,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,0,3,3,3,0,3,3,0,0,3,3,3,4,4,4,4,4,2,2,2,4,2,4,4,4,4,4,4,4,4,0,0,1,1,1,1,0,1,1,0,1,1,2,2,5,2,2,2,5,2,2,2,2,2,6,6,6,6,4,4,4,4,4,1,2,1,2,2,1,1,3,3,3,3,3],par:[11,20,4,16,3,14,8,0,7,9,5,13,12,17,18,1,15,6,2,10,19],wr:.072,solution:[3,1,20,4,11,16,5,8,9,7,12,14,0,13,18,17,15,6,2,10,19],slots:4}],slotsBase:4,n:34,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:6,l:2,d:"L",x:1,y:5,s:3},{c:5,l:4,d:"L",x:3,y:2,s:7},{c:4,l:2,d:"R",x:5,y:1},{c:2,l:2,d:"U",x:0,y:1},{c:2,l:2,d:"L",x:0,y:4},{c:0,l:2,d:"U",x:4,y:0},{c:4,l:4,d:"D",x:5,y:3,s:7},{c:6,l:1,d:"R",x:3,y:0},{c:2,l:2,d:"D",x:2,y:1},{c:5,l:2,d:"D",x:6,y:3},{c:5,l:2,d:"L",x:1,y:7},{c:6,l:1,d:"R",x:5,y:0},{c:1,l:2,d:"L",x:0,y:3},{c:0,l:1,d:"R",x:6,y:6},{c:1,l:2,d:"U",x:0,y:6,s:3},{c:5,l:1,d:"D",x:3,y:7},{c:0,l:3,d:"R",x:0,y:0,s:5},{c:3,l:3,d:"R",x:2,y:3,s:5},{c:1,l:3,d:"D",x:3,y:4},{c:0,l:1,d:"R",x:2,y:4},{c:3,l:1,d:"R",x:6,y:0,s:3},{c:6,l:3,d:"L",x:4,y:7}],queue:[0,2,2,0,0,2,0,2,4,4,4,4,3,3,1,1,3,3,1,1,6,6,5,5,5,6,5,6,1,6,6,6,1,1,6,1,1,1,0,6,6,0,0,0,0,0,0,0,6,6,0,0,2,2,2,2,1,1,5,1,5,5,5,6,6,6,6,6,4,5,5,5,4,4,4,4,5,4,4,0,0,0,3,3,3,3,2,2,5,5,5,2,5,5,5,5,2],par:[13,4,2,20,12,11,15,18,0,5,7,16,3,14,10,21,6,9,19,17,8,1],wr:.12,solution:[5,4,2,20,12,0,11,7,15,16,18,3,14,13,10,21,6,9,17,19,8,1],slots:4},{w:7,h:8,buses:[{c:1,l:4,d:"D",x:4,y:3,s:7},{c:4,l:3,d:"R",x:0,y:0},{c:0,l:2,d:"R",x:3,y:7},{c:0,l:2,d:"R",x:4,y:0},{c:3,l:4,d:"L",x:3,y:2,s:7},{c:3,l:3,d:"D",x:6,y:5},{c:4,l:1,d:"U",x:4,y:1},{c:3,l:2,d:"L",x:1,y:3},{c:3,l:2,d:"R",x:2,y:6},{c:3,l:2,d:"D",x:3,y:0,s:3},{c:5,l:2,d:"R",x:2,y:5},{c:5,l:3,d:"U",x:1,y:5},{c:2,l:1,d:"R",x:5,y:1,s:3},{c:1,l:3,d:"D",x:5,y:4,s:5},{c:1,l:3,d:"R",x:1,y:4},{c:5,l:1,d:"D",x:3,y:3,s:3},{c:6,l:3,d:"R",x:0,y:1},{c:5,l:1,d:"D",x:6,y:1}],queue:[3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,3,1,1,1,0,0,0,5,1,0,5,5,5,1,1,1,3,1,1,3,3,1,1,1,3,1,1,2,2,1,1,1,5,2,1,5,5,5,5,5,5,4,4,5,4,4,3,4,4,6,3,4,6,6,6,6,4,6,4,4,5,5,5,5,5],par:[7,4,3,5,13,2,17,0,8,12,14,10,15,6,9,1,16,11],wr:.236,solution:[4,5,2,7,0,13,8,3,10,14,6,17,12,15,9,1,16,11],slots:4}],slotsBase:4,timeLimit:250,n:35,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:3,d:"L",x:1,y:2,s:5},{c:2,l:3,d:"U",x:2,y:5},{c:3,l:1,d:"D",x:6,y:7},{c:0,l:2,d:"R",x:4,y:3},{c:6,l:3,d:"R",x:4,y:6,s:5},{c:2,l:1,d:"L",x:0,y:1},{c:6,l:2,d:"R",x:5,y:4,s:3},{c:0,l:2,d:"U",x:4,y:1},{c:4,l:2,d:"D",x:3,y:5,s:3},{c:3,l:3,d:"L",x:3,y:7},{c:2,l:1,d:"L",x:0,y:2},{c:5,l:3,d:"R",x:0,y:0,s:5},{c:1,l:2,d:"L",x:0,y:3,s:3},{c:0,l:2,d:"R",x:5,y:5},{c:1,l:1,d:"R",x:2,y:3},{c:0,l:4,d:"D",x:6,y:0},{c:3,l:4,d:"U",x:0,y:4},{c:2,l:2,d:"L",x:1,y:1},{c:0,l:3,d:"U",x:1,y:5,s:5},{c:6,l:3,d:"U",x:5,y:0},{c:3,l:3,d:"R",x:1,y:4},{c:6,l:2,d:"U",x:3,y:0,s:3},{c:5,l:1,d:"R",x:3,y:3,s:3}],queue:[2,2,2,2,2,2,2,2,0,0,0,0,6,6,6,6,0,0,6,6,0,6,0,6,3,3,3,6,6,3,3,3,6,6,6,6,1,1,3,3,6,1,1,3,6,6,3,1,1,1,1,2,2,0,0,0,0,1,2,0,0,0,1,2,0,0,0,0,0,5,5,5,5,5,0,5,5,5,0,0,0,0,1,1,2,2,2,2,2,2,3,3,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3],par:[5,10,7,21,13,6,20,19,12,2,4,0,17,15,3,22,11,18,14,1,16,9,8],wr:.016,solution:[5,17,7,4,13,19,2,6,20,12,21,15,11,10,0,16,18,3,22,14,1,9,8],slots:4}],slotsBase:4,n:36,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:2,d:"U",x:0,y:1},{c:6,l:2,d:"U",x:3,y:2,s:3},{c:4,l:2,d:"U",x:4,y:2},{c:5,l:3,d:"D",x:5,y:1},{c:5,l:3,d:"L",x:2,y:4},{c:0,l:2,d:"R",x:0,y:6},{c:3,l:2,d:"L",x:3,y:1},{c:4,l:2,d:"D",x:0,y:4},{c:2,l:2,d:"R",x:1,y:2},{c:3,l:2,d:"U",x:1,y:4,s:3},{c:3,l:2,d:"D",x:5,y:6},{c:3,l:1,d:"U",x:6,y:0},{c:4,l:3,d:"L",x:0,y:0},{c:1,l:2,d:"D",x:6,y:6},{c:6,l:3,d:"R",x:0,y:3},{c:0,l:4,d:"U",x:6,y:1,s:7},{c:6,l:4,d:"R",x:3,y:5,s:7},{c:1,l:2,d:"L",x:1,y:1,s:3},{c:4,l:2,d:"R",x:3,y:0,s:3},{c:5,l:4,d:"L",x:0,y:7},{c:2,l:1,d:"U",x:5,y:0,s:3},{c:0,l:2,d:"D",x:4,y:6}],queue:[2,0,0,4,2,2,2,0,0,4,4,4,4,4,2,2,2,2,5,1,5,5,5,5,5,5,5,1,1,1,3,3,3,1,3,1,1,6,6,6,6,6,6,6,6,3,3,0,0,0,3,3,0,0,0,0,0,0,0,0,4,4,4,5,5,5,5,5,3,4,5,3,3,3,6,6,4,4,4,2,2,6,6,4,2,4,4,4,6,6,6,6,3,3,3,5,5,5,5,5,5],par:[20,21,12,0,19,17,10,13,16,11,5,15,18,3,6,1,2,8,7,14,9,4],wr:.02,solution:[20,21,12,0,16,19,10,3,13,5,17,6,7,11,15,18,1,2,8,14,9,4],slots:4}],slotsBase:4,n:37,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:1,d:"L",x:0,y:5},{c:1,l:2,d:"D",x:0,y:0,s:3},{c:5,l:1,d:"D",x:4,y:7},{c:5,l:2,d:"L",x:5,y:0,s:3},{c:0,l:2,d:"R",x:0,y:7},{c:1,l:3,d:"L",x:0,y:6},{c:1,l:2,d:"R",x:4,y:6,s:3},{c:5,l:1,d:"U",x:4,y:0,s:3},{c:6,l:1,d:"D",x:5,y:7,s:3},{c:3,l:3,d:"R",x:1,y:5,s:5},{c:0,l:1,d:"D",x:0,y:3},{c:2,l:3,d:"D",x:5,y:3},{c:5,l:1,d:"L",x:0,y:2,s:3},{c:5,l:3,d:"L",x:4,y:1},{c:0,l:3,d:"U",x:2,y:0},{c:1,l:3,d:"U",x:6,y:3,s:5},{c:5,l:4,d:"U",x:3,y:0},{c:4,l:2,d:"U",x:1,y:0},{c:6,l:2,d:"D",x:3,y:6},{c:3,l:1,d:"U",x:6,y:2,s:3},{c:6,l:2,d:"D",x:6,y:6,s:3},{c:2,l:1,d:"R",x:2,y:7},{c:4,l:3,d:"D",x:1,y:2}],queue:[5,5,5,5,6,6,5,5,6,6,5,5,5,5,3,5,5,3,3,3,4,6,6,6,5,5,4,6,5,5,5,5,4,4,5,5,6,6,2,0,2,2,2,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,5,5,5,5,5,5,5,3,2,3,2,3,3,2,2,2,2,1,3,3,1,1,3,3,4,4,4,4,4,4],par:[7,2,8,12,0,17,18,16,20,21,4,6,5,10,1,14,3,13,19,11,15,9,22],wr:.044,solution:[16,18,2,0,17,20,7,8,12,5,14,6,21,11,4,10,1,13,3,19,15,9,22],slots:4}],slotsBase:4,n:38,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:2,d:"D",x:4,y:0},{c:6,l:2,d:"U",x:5,y:2},{c:5,l:2,d:"R",x:4,y:7},{c:1,l:1,d:"L",x:0,y:2,s:3},{c:3,l:1,d:"U",x:0,y:0},{c:5,l:2,d:"D",x:0,y:6},{c:0,l:2,d:"D",x:2,y:0},{c:6,l:4,d:"L",x:1,y:3},{c:3,l:4,d:"R",x:1,y:6},{c:0,l:2,d:"L",x:5,y:0},{c:4,l:1,d:"R",x:6,y:3},{c:5,l:3,d:"R",x:1,y:7},{c:6,l:3,d:"D",x:0,y:3},{c:3,l:1,d:"D",x:0,y:1},{c:4,l:3,d:"D",x:1,y:0},{c:0,l:3,d:"D",x:6,y:5},{c:2,l:4,d:"R",x:1,y:4},{c:1,l:1,d:"R",x:6,y:2,s:3},{c:0,l:2,d:"L",x:3,y:5},{c:1,l:2,d:"L",x:5,y:1},{c:2,l:2,d:"R",x:5,y:4},{c:6,l:2,d:"D",x:3,y:0}],queue:[4,1,1,4,1,1,1,1,1,4,1,4,3,3,3,3,2,2,2,5,2,5,5,5,0,0,0,0,0,0,5,5,5,5,6,6,5,6,6,6,6,5,5,5,5,5,3,3,3,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,2,2,3,3,3,6,6,6,6,3,6,6,6,6,1,1,1,1,6,6,6,6,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,6,6,1,6,6],par:[10,3,17,4,20,5,15,2,12,11,8,18,16,13,7,0,21,14,6,9,19,1],wr:.04,solution:[10,3,17,15,8,2,20,16,5,11,12,7,14,4,6,18,13,0,21,19,9,1],slots:4}],slotsBase:4,n:39,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:2,d:"D",x:2,y:6},{c:0,l:2,d:"L",x:5,y:7},{c:6,l:1,d:"U",x:1,y:0},{c:3,l:4,d:"D",x:0,y:0,s:7},{c:4,l:3,d:"L",x:0,y:4},{c:4,l:2,d:"D",x:0,y:6,s:3},{c:0,l:1,d:"L",x:4,y:3},{c:1,l:1,d:"R",x:6,y:5},{c:5,l:3,d:"R",x:1,y:5},{c:1,l:3,d:"U",x:4,y:4},{c:3,l:3,d:"D",x:6,y:0},{c:2,l:1,d:"R",x:5,y:1},{c:4,l:3,d:"D",x:5,y:4,s:5},{c:5,l:2,d:"U",x:2,y:0,s:3},{c:3,l:2,d:"D",x:3,y:6,s:3},{c:6,l:2,d:"R",x:5,y:3,s:3},{c:3,l:3,d:"L",x:3,y:2},{c:0,l:2,d:"R",x:3,y:1},{c:1,l:3,d:"L",x:3,y:0},{c:0,l:1,d:"U",x:2,y:2},{c:2,l:3,d:"U",x:1,y:1},{c:2,l:2,d:"D",x:1,y:6},{c:3,l:2,d:"U",x:3,y:3}],queue:[1,1,3,3,3,1,1,3,3,6,3,3,3,6,6,6,5,5,5,6,6,4,5,6,4,4,4,4,4,2,2,2,2,4,4,2,2,2,2,4,2,2,4,0,0,0,3,3,3,3,3,3,0,3,3,0,0,0,3,3,3,3,0,3,3,2,2,3,3,3,3,3,1,1,2,2,3,1,1,1,1,0,3,0,0,0,0,0,0,3,0,4,4,4,1,4,1,1,1,1,1,5,5,5,5,5],par:[7,0,14,2,13,15,4,21,20,5,1,3,19,10,11,16,18,17,22,6,12,9,8],wr:.036,solution:[7,0,14,15,4,5,3,13,2,18,20,21,1,10,12,19,16,11,17,22,6,9,8],slots:4},{w:7,h:8,buses:[{c:4,l:2,d:"R",x:3,y:0},{c:6,l:2,d:"D",x:6,y:6},{c:5,l:4,d:"R",x:0,y:2},{c:0,l:2,d:"D",x:5,y:1,s:3},{c:6,l:2,d:"R",x:0,y:0},{c:1,l:3,d:"D",x:5,y:3},{c:5,l:3,d:"D",x:3,y:5},{c:0,l:3,d:"U",x:4,y:2},{c:1,l:4,d:"R",x:0,y:3},{c:3,l:1,d:"U",x:2,y:0},{c:2,l:4,d:"U",x:0,y:4,s:7},{c:1,l:1,d:"L",x:2,y:7,s:3},{c:2,l:3,d:"L",x:0,y:1},{c:6,l:4,d:"U",x:6,y:1,s:7},{c:4,l:1,d:"R",x:4,y:1},{c:3,l:2,d:"R",x:4,y:7},{c:6,l:2,d:"R",x:5,y:0},{c:1,l:3,d:"U",x:1,y:5,s:5},{c:5,l:2,d:"R",x:4,y:6}],queue:[3,3,3,3,5,5,5,5,5,5,2,6,6,6,2,6,2,2,2,2,5,5,3,3,3,5,3,5,1,1,1,1,1,1,6,4,4,4,6,6,6,6,4,6,6,6,6,6,6,6,0,0,0,0,6,6,4,6,4,4,4,0,0,0,0,5,5,5,5,1,1,1,1,1,0,5,1,1,5,1,5,5,2,2,2,2,1,1,2,2,2,1,1,1,1,1,1],par:[9,6,12,1,18,15,5,16,0,13,3,4,14,7,2,8,10,17,11],wr:.208,solution:[9,6,12,1,18,15,5,16,0,13,4,3,14,7,2,8,10,17,11],slots:4}],slotsBase:4,timeLimit:259,n:40,difficulty:"super"}];function mi(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e.int(s-n+1),e.pick=n=>n[e.int(n.length)],e.shuffle=n=>{for(let s=n.length-1;s>0;s--){let r=e.int(s+1);[n[s],n[r]]=[n[r],n[s]]}return n},e.weighted=n=>{let s=Object.keys(n),r=0;for(let o of s)r+=n[o];let a=e()*r;for(let o of s)if(a-=n[o],a<=0)return+o;return+s[s.length-1]},e}function mo(i){return Vs({len:i.l,dir:i.d,x:i.x,y:i.y})}function Fr(i,t,e){return Hi({w:t,h:e},{len:i.l,dir:i.d,x:i.x,y:i.y})}function bv(i,t){let{w:e,h:n}=t,s=[],r=new Set,a=new Set,o=(u,f)=>u+","+f,l=(u,f,g)=>{let y=null,m=-1e9;for(let p=0;p<90;p++){let v=i.pick(["U","D","L","R"]),_=ke[v].horiz,M=i.int(e-(_?u-1:0)),C=i.int(n-(_?0:u-1)),T={l:u,d:v,x:M,y:C},A=mo(T);if(A.some(([L,B])=>r.has(o(L,B))||a.has(o(L,B))))continue;let E=Fr(T,e,n);if(E.some(([L,B])=>r.has(o(L,B)))||g&&E.length>0)continue;let k=0,x=new Set(A.map(([L,B])=>o(L,B)));for(let L of s)if(!L.v){for(let[B,$]of Fr(L,e,n))if(x.has(o(B,$))){k++;break}}let b=0;for(let[L,B]of A)for(let $ of Object.values(ke))r.has(o(L+$.x,B+$.y))&&b++;let D=k*3+b*.6+i()*2+(E.length>0?.5:0);D>m&&(m=D,y=T)}if(!y)return!1;y.v=f,s.push(y);for(let[p,v]of mo(y))r.add(o(p,v));if(f)for(let[p,v]of Fr(y,e,n))a.add(o(p,v));return!0};if(t.vip)for(let u=0;u<t.vip;u++)l(Mu,!0,!0);let c=0;for(;s.filter(u=>!u.v).length<t.count&&c++<400;)l(i.weighted(t.lens),!1,!1);let h=s.filter(u=>u.v);return{normal:s.filter(u=>!u.v).reverse(),vips:h}}function Zu(i,t,e,n){let s=new Set,r=[],a=(c,h)=>c+","+h,o=n.shuffle(i.slice()),l=[];for(let c of o){let h=null,d=-1e9;for(let u=0;u<140;u++){let f=n.pick(["U","D","L","R"]),g=ke[f].horiz,y=n.int(t-(g?c.len-1:0)),m=n.int(e-(g?0:c.len-1)),p={l:c.len,d:f,x:y,y:m},v=mo(p);if(v.some(([A,E])=>s.has(a(A,E)))||Fr(p,t,e).some(([A,E])=>s.has(a(A,E))))continue;let _=0,M=new Set(v.map(([A,E])=>a(A,E)));for(let A of l)for(let[E,k]of Fr(A,t,e))if(M.has(a(E,k))){_++;break}let C=0;for(let[A,E]of v)for(let k of Object.values(ke))s.has(a(A+k.x,E+k.y))&&C++;let T=_*3+C*.6+n()*2;T>d&&(d=T,h=p)}if(!h)return null;l.push(h);for(let[u,f]of mo(h))s.add(a(u,f));r.push({id:c.id,x:h.x,y:h.y,d:h.d})}return r}function Mv(i,t,e){let n=t.length,s=[],r=[];for(let l=0;l<e.colors;l++)r.push(l);i.shuffle(r);for(let l=0;l<n;l++){let c=l<r.length?r[l]:i.pick(r);l>0&&c===s[l-1]&&e.colors>1&&i()<.7&&(c=(c+1+i.int(e.colors-1))%e.colors),s.push(c)}i.shuffle(s),t.forEach((l,c)=>{l.c=s[c]});let a=[],o=0;for(;o<n;){let l=Math.min(n-o,i.range(1,e.window));if(l===1){let c=t[o];for(let h=0;h<oo(c.l,!1);h++)a.push(c.c)}else{let c=[];for(let d=0;d<l;d++){let u=t[o+d],f=oo(u.l,!1),g=[];for(;f>0;){let y=Math.min(f,i.range(1,Math.max(1,f-(g.length===0?1:0))));g.push([u.c,y]),f-=y}c.push(g)}let h=!0;for(;h;){h=!1;for(let d of c)if(d.length){let[u,f]=d.shift();for(let g=0;g<f;g++)a.push(u);h=!0}}}o+=l}return a}function Ju(i,t){let e=mi(i),{normal:n,vips:s}=bv(e,t),r=Mv(e,n,t);if(t.mini){for(let d of n)if(e()<t.mini){let u=r.lastIndexOf(d.c);u>=0&&(r.splice(u,1),d.s=Hs(d.l)-1)}}let a=[...n,...s],o=a.map((d,u)=>u);e.shuffle(o);let l=o.map(d=>({...a[d]})),c=n.map((d,u)=>o.indexOf(u)),h=l.map(d=>d.v?{v:1,l:d.l,d:d.d,x:d.x,y:d.y}:{c:d.c,l:d.l,d:d.d,x:d.x,y:d.y,...d.s?{s:d.s}:{}});return{w:t.w,h:t.h,buses:h,queue:r,par:c}}function ju(i){let t=s=>({vip:0,window:2,wr:.5,slots:4,...s}),e,n={};if(i===2)e=[t({w:5,h:5,count:6,lens:{2:3,3:2},colors:3,vip:1,window:2,wr:.7,slots:3})];else if(i<=5)e=[t({w:5,h:5,count:5+(i-3),lens:{2:3,3:2},colors:3,window:2,wr:.7})];else if(i<=10)e=[t({w:6,h:6,count:8+Math.floor((i-6)*.8),lens:{1:1,2:3,3:3,4:1},colors:4,window:2,wr:.55})];else if(i<=15)e=[t({w:6,h:7,count:12+(i-11),lens:{1:1,2:3,3:3,4:1},colors:5,window:3,wr:.4})];else if(i<=20)e=[t({w:7,h:7,count:14+(i-16),lens:{1:1,2:3,3:3,4:2},colors:i<18?5:6,window:3,vip:1,wr:.32})];else if(i<=25)e=[t({w:7,h:8,count:16+(i-21),lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:i%2,wr:.22})],(i===22||i===25)&&(n.moveSpare=3);else if(i<=30){let s=9+(i-26);e=[t({w:7,h:7,count:s,lens:{1:1,2:3,3:3,4:2},colors:5,window:3,vip:0,wr:.3}),t({w:7,h:7,count:s+3,lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:1,wr:.22})],n.timeSpare=25}else{let s=Math.min(10,i-30);if(e=[t({w:7,h:8,count:17+Math.min(6,s),lens:{1:1,2:3,3:3,4:2},colors:6+(s>3?1:0),window:3,vip:i%2,wr:.18})],i%5===0){let r={...e[0],count:e[0].count-4,vip:0};e.push(r),n.timeSpare=30}i%7===0&&(n.moveSpare=3)}for(let s of e)s.vip=0;if(i>=6)for(let s of e)s.mini=Math.min(.3,.12+i*.006);return{stages:e,extra:n}}var Qu=i=>i<=2?"easy":i<=10?"normal":i<=20?"hard":"super";function $s(i,{useVip:t=!1,maxNodes:e=4e5}={}){let n=pn(i),s=n.buses.filter(E=>E.st==="board"&&(t||!E.vip)),r=new Map(s.map((E,k)=>[E.id,k])),a=s.length,o=new Map;for(let E of n.buses)if(E.st==="board")for(let[k,x]of Vs(E))o.set(k+","+x,E.id);let l=new Array(a).fill(0),c=new Array(a).fill(!1);for(let E=0;E<a;E++){let k=s[E];for(let[x,b]of Hi(n,k)){let D=o.get(x+","+b);D===void 0||D===k.id||(r.has(D)?l[E]|=1<<r.get(D):c[E]=!0)}}let h=n.slotOpen.slice(),d=n.slots.map(E=>E===null?null:{c:n.buses[E].color,b:n.buses[E].boarded,s:n.buses[E].seats}),u=n.vipSlot===null?null:{c:n.buses[n.vipSlot].color,b:n.buses[n.vipSlot].boarded,s:n.buses[n.vipSlot].seats},f=n.win??pi,g=new Set,y=0,m=!1,p=[];function v(E,k,x,b){let D=E+"|"+k.join("")+"|";for(let L=0;L<Fe;L++)D+=x[L]?x[L].c*20+x[L].b+",":"-,";return b&&(D+="v"+b.c+":"+b.b),D}function _(E,k,x){let b=E.slice();for(;;){let D=Math.min(f,b.length);if(D===0)return{q:b,vip:x};let L=!1;for(let B=0;B<D&&!L;B++){let $=b[B];for(let z=0;z<Fe;z++){let K=k[z];if(K&&K.c===$&&K.b<K.s){K.b++,b.splice(B,1),L=!0,K.b>=K.s&&(k[z]=null);break}}}if(!L){if(x&&x.b<x.s){let B=b.indexOf(x.c);if(B>=0){x.b++,b.splice(B,1),x.b>=x.s&&(x=null);continue}}return{q:b,vip:x}}}}function M(E,k,x,b){if(k.length===0)return!0;if(++y>e)return m=!0,!1;let D=v(E,k,x,b);if(g.has(D))return!1;let L=k[0],B=[];for(let $=0;$<a;$++){if(E&1<<$||c[$]||l[$]&~E)continue;if(s[$].vip){if(b)continue}else if(!x.some((K,F)=>h[F]&&K===null))continue;B.push($)}B.sort(($,z)=>(s[$].color===L?0:1)-(s[z].color===L?0:1)||s[z].len-s[$].len);for(let $ of B){let z=s[$],K=x.map(it=>it?{...it}:null),F=b?{...b}:null;if(z.vip)F={c:99,b:0,s:z.seats};else{let it=K.findIndex((dt,et)=>h[et]&&dt===null);K[it]={c:z.color,b:0,s:z.seats}}let st=_(k,K,F);if(p.push(z.id),M(E|1<<$,st.q,K,st.vip))return!0;if(p.pop(),m)return!1}return g.add(D),!1}let C=d.map(E=>E?{...E}:null),T=_(n.queue.slice(n.qi),C,u?{...u}:null),A=M(0,T.q,C,T.vip);return{solved:A,order:A?p.slice():[],nodes:y,aborted:m}}function tf(i,t,e){let n=kr(i,t);hh(n);for(let s of e){let r=lo(n,s);if(!r.ok)return{ok:!1,at:s,reason:r.reason};hh(n)}return{ok:co(n).status==="won",state:n}}function ef(i){let t=vh.find(o=>o.n===i);if(t)return t;let{stages:e,extra:n}=ju(i),s=e.map((o,l)=>{for(let c=0;c<40;c++){let h=Ju(i*1000003+l*7919+c*104729,o);if(tf(h,{slotsOpen:o.slots},h.par).ok)return h.slots=o.slots,h}throw new Error("level gen failed")}),r=s.reduce((o,l)=>o+l.buses.filter(c=>!c.v).length,0),a={n:i,stages:s,slotsBase:e[0].slots,difficulty:Qu(i)};return n.moveSpare&&s.length===1&&(a.moveLimit=r+n.moveSpare),(n.timeSpare||s.length>1)&&(a.timeLimit=Math.round(r*4.5+40+(n.timeSpare||0))),a}var a1=vh.length;var go=()=>({v:1,level:1,completed:{},coins:60,owned:{style:["city"],rim:["steel"],palette:["vivid"],trail:["dust"],vipSkin:["gold"]},equipped:{style:"city",rim:"steel",palette:"vivid",trail:"dust",vipSkin:"gold"},perm:{slots:0},powerups:{undo:2,hint:2,recall:1,call:1,convert:1,extraSlot:1,moves:1,time:1,vip:1,shuffle:1},temp:{level:0,slots:[],conv:0,vipCalls:0},tutorial:{l1:!1,l2:!1,enabled:!0},settings:{sound:!0,vibe:!0,quality:"high"},daily:{lastClaim:"",streak:0},quests:{date:"",list:[],progress:{},claimed:{}},ach:{unlocked:{},claimed:{}},iap:{tx:[]},time:{lastSeen:0},weekly:{week:"",days:[],claimed:!1},account:{uid:"",token:"",name:""},best:{},lb:{week:"",levels:{}},inboxDone:[],ads:{since:0,nextAt:4,last:0,removed:!1,offers:0,offerDay:"",offerLevel:0},notif:{enabled:!1,asked:!1},stats:{passengers:0,levels:0,vip:0,coinsEarned:0,buses:0,slots:0,threeStars:0,ads:0}}),Ue=(i,t,e=0,n=1e9)=>Number.isFinite(i)?Math.min(n,Math.max(e,Math.floor(i))):t,$n=(i,t)=>typeof i=="string"?i:t,ae=i=>i&&typeof i=="object"&&!Array.isArray(i)?i:{};function wv(i){let t=go(),e=ae(i),n=go();n.level=Ue(e.level,1,1,1e5),n.coins=Ue(e.coins,t.coins,0,99999999);let s=ae(e.completed);n.completed={};for(let v of Object.keys(s)){let _=+v;Number.isInteger(_)&&_>0&&(n.completed[_]=Ue(s[v],1,1,3))}for(let v of Object.keys(t.owned)){let _=Array.isArray(ae(e.owned)[v])?ae(e.owned)[v].filter(M=>typeof M=="string"):[];n.owned[v]=[...new Set([...t.owned[v],..._])]}for(let v of Object.keys(t.equipped)){let _=$n(ae(e.equipped)[v],t.equipped[v]);n.equipped[v]=n.owned[v].includes(_)?_:t.equipped[v]}n.perm.slots=Ue(ae(e.perm).slots,0,0,3);let r=ae(e.powerups);n.powerups={};for(let v of Object.keys(t.powerups))n.powerups[v]=Ue(r[v],t.powerups[v],0,999);let a=ae(e.temp);n.temp={level:Ue(a.level,0),slots:Array.isArray(a.slots)?a.slots.filter(v=>Number.isInteger(v)&&v>=0&&v<7):[],conv:Ue(a.conv,0,0,99),vipCalls:Ue(a.vipCalls,0,0,99)};let o=ae(e.tutorial);n.tutorial={l1:!!o.l1,l2:!!o.l2,vip:!!o.vip,enabled:o.enabled!==!1};let l=ae(e.settings);n.settings={sound:l.sound!==!1,vibe:l.vibe!==!1,quality:["low","medium","high"].includes(l.quality)?l.quality:"high"};let c=ae(e.daily);n.daily={lastClaim:$n(c.lastClaim,""),streak:Ue(c.streak,0,0,7)};let h=ae(e.quests);n.quests={date:$n(h.date,""),list:Array.isArray(h.list)?h.list.filter(v=>v&&typeof v.id=="string").slice(0,6):[],progress:ae(h.progress),claimed:ae(h.claimed)};let d=ae(e.ach);n.ach={unlocked:ae(d.unlocked),claimed:ae(d.claimed)},n.iap={tx:Array.isArray(ae(e.iap).tx)?ae(e.iap).tx.filter(v=>typeof v=="string").slice(-300):[]},n.time={lastSeen:Ue(ae(e.time).lastSeen,0,0,4e12)};let u=ae(e.weekly);n.weekly={week:$n(u.week,""),days:Array.isArray(u.days)?u.days.filter(v=>Number.isInteger(v)&&v>=0&&v<7):[],claimed:!!u.claimed};let f=ae(e.account);n.account={uid:$n(f.uid,""),token:$n(f.token,""),name:$n(f.name,"").slice(0,20)},n.best={};for(let v of Object.keys(ae(e.best))){let _=+v;Number.isInteger(_)&&_>0&&(n.best[_]=Ue(e.best[v],0,0,99999))}let g=ae(e.lb);n.lb={week:$n(g.week,""),levels:{}};for(let v of Object.keys(ae(g.levels)))n.lb.levels[v]=Ue(g.levels[v],0,0,99999);n.inboxDone=Array.isArray(e.inboxDone)?e.inboxDone.filter(v=>typeof v=="string").slice(-200):[];let y=ae(e.ads);n.ads={since:Ue(y.since,0,0,999),nextAt:Ue(y.nextAt,4,3,9),last:Ue(y.last,0,0,4e12),removed:y.removed===!0,offers:Ue(y.offers,0,0,99),offerDay:$n(y.offerDay,""),offerLevel:Ue(y.offerLevel,0,0,1e6)};let m=ae(e.notif);n.notif={enabled:m.enabled===!0,asked:m.asked===!0};let p=ae(e.stats);n.stats={};for(let v of Object.keys(t.stats))n.stats[v]=Ue(p[v],0);return n}var xo=class{constructor(){this.data=this.load(),this._t=null}load(){try{let t=localStorage.getItem(nh);if(t)return wv(JSON.parse(t))}catch{}return go()}write(){try{localStorage.setItem(nh,JSON.stringify(this.data))}catch{}}save(t=!1){if(t){clearTimeout(this._t),this.write();return}clearTimeout(this._t),this._t=setTimeout(()=>this.write(),250)}reset(){this.data=go(),this.write()}};var yo=class{constructor(){this.ctx=null,this.sound=!0,this.vibe=!0,this.last={}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t}catch{}}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setSound(t){this.sound=t}setVibe(t){this.vibe=t}haptic(t=12){if(this.vibe)try{let e=window.Capacitor?.Plugins?.Haptics;if(e?.vibrate){e.vibrate({duration:t});return}navigator.vibrate?.(t)}catch{}}tone(t,e,{type:n="sine",vol:s=.18,slide:r=0,delay:a=0,attack:o=.005,lp:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,d=c.createOscillator(),u=c.createGain();d.type=n,d.frequency.setValueAtTime(t,h),r&&d.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),h+e),u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(s,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+e);let f=d;if(l){let g=c.createBiquadFilter();g.type="lowpass",g.frequency.value=l,d.connect(g),f=g}f.connect(u),u.connect(c.destination),d.start(h),d.stop(h+e+.05)}noise(t,{vol:e=.12,lp:n=600,delay:s=0,hp:r=0}={}){let a=this.ctx;if(!a)return;let o=Math.floor(a.sampleRate*t),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let g=0;g<o;g++)c[g]=(Math.random()*2-1)*(1-g/o);let h=a.createBufferSource();h.buffer=l;let d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=n;let u=a.createGain();u.gain.value=e,h.connect(d);let f=d;if(r){let g=a.createBiquadFilter();g.type="highpass",g.frequency.value=r,d.connect(g),f=g}f.connect(u),u.connect(a.destination),h.start(a.currentTime+s)}throttled(t,e){let n=performance.now();return n-(this.last[t]||0)<e?!1:(this.last[t]=n,!0)}play(t){if(!this.sound){t==="error"&&this.haptic(40);return}if(this.unlock(),!!this.ctx)switch(t){case"click":this.tone(520,.07,{type:"triangle",vol:.12,slide:180});break;case"engine":if(!this.throttled("engine",150))return;this.noise(.45,{vol:.09,lp:380}),this.tone(70,.5,{type:"sawtooth",vol:.05,slide:60,lp:300}),this.haptic(10);break;case"depart":this.noise(.6,{vol:.08,lp:500}),this.tone(90,.7,{type:"sawtooth",vol:.05,slide:90,lp:320}),this.tone(520,.12,{type:"square",vol:.05,delay:.05}),this.tone(520,.12,{type:"square",vol:.05,delay:.2});break;case"park":this.tone(140,.16,{type:"sine",vol:.22,slide:-80}),this.noise(.1,{vol:.1,lp:900}),this.haptic(18);break;case"board":if(!this.throttled("board",55))return;this.tone(640+Math.random()*160,.09,{type:"sine",vol:.12,slide:420});break;case"step":if(!this.throttled("step",90))return;this.noise(.03,{vol:.03,lp:2500});break;case"bump":this.tone(120,.16,{type:"square",vol:.15,slide:-70,lp:600}),this.tone(55,.28,{type:"sine",vol:.22,slide:-15}),this.haptic(70);break;case"error":this.tone(150,.2,{type:"sawtooth",vol:.12,slide:-40,lp:700}),this.haptic(45);break;case"coin":this.tone(990,.08,{type:"square",vol:.07}),this.tone(1480,.18,{type:"square",vol:.07,delay:.07});break;case"vip":[523,659,784,1047,1319].forEach((e,n)=>this.tone(e,.28,{type:"triangle",vol:.11,delay:n*.06})),this.haptic(30);break;case"unlock":this.tone(300,.4,{type:"sine",vol:.14,slide:900}),[1200,1600,2e3].forEach((e,n)=>this.tone(e,.2,{type:"triangle",vol:.06,delay:.2+n*.07})),this.haptic(30);break;case"convert":case"whoosh":this.noise(.4,{vol:.07,lp:1800,hp:300}),this.tone(400,.4,{type:"sine",vol:.09,slide:600});break;case"win":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,.3,{type:"triangle",vol:.13,delay:n*.1})),this.haptic(60);break;case"alarm":if(!this.throttled("alarm",2500))return;[0,.18,.36].forEach(e=>{this.tone(880,.12,{type:"square",vol:.08,delay:e,lp:2400}),this.tone(660,.12,{type:"square",vol:.06,delay:e+.09,lp:2400})}),this.haptic(60);break;case"full":if(!this.throttled("full",120))return;[784,988,1319].forEach((e,n)=>this.tone(e,.16,{type:"triangle",vol:.1,delay:n*.05})),this.haptic(20);break;case"lose":[392,330,262,196].forEach((e,n)=>this.tone(e,.3,{type:"sine",vol:.13,delay:n*.14})),this.haptic(80);break;default:break}}};var nf=0,vo=class{constructor(t){this.ui=t,this.consumed=new Set,this.inited=!1,this.shown=0}get mode(){return Me.mode}available(){return Me.mode==="test"?!0:Me.mode==="admob"?!!window.Capacitor?.Plugins?.AdMob:!1}async showRewarded(t){if(!this.available())return{ok:!1,reason:"unavailable"};try{if(Me.mode==="test")return await this.ui.testAd(Me.testDurationMs,t)?(this.shown++,{ok:!0,token:`t${++nf}-${Date.now()}`}):{ok:!1,reason:"cancelled"};let e=window.Capacitor.Plugins.AdMob;this.inited||(await e.initialize({initializeForTesting:!1}),this.inited=!0);let n=!1,s=await e.addListener("onRewardedVideoAdReward",()=>{n=!0}),r=new Promise(a=>e.addListener("onRewardedVideoAdDismissed",()=>a()).catch(()=>a()));return await e.prepareRewardVideoAd({adId:Me.admob.rewardedUnitAndroid}),await e.showRewardVideoAd(),await r,s?.remove?.(),n?(this.shown++,{ok:!0,token:`a${++nf}-${Date.now()}`}):{ok:!1,reason:"cancelled"}}catch(e){return{ok:!1,reason:"error",error:String(e?.message||e)}}}async showInterstitial(t){if(!this.available())return!1;try{if(Me.mode==="test")return await this.ui.testAd(Me.testDurationMs,t,{interstitial:!0}),this.shown++,!0;let e=window.Capacitor.Plugins.AdMob;this.inited||(await e.initialize({initializeForTesting:!1}),this.inited=!0);let n=new Promise(s=>e.addListener("onInterstitialAdDismissed",()=>s()).catch(()=>s()));return await e.prepareInterstitial({adId:Me.admob.interstitialUnitAndroid}),await e.showInterstitial(),await n,this.shown++,!0}catch{return!1}}consume(t){return!t||this.consumed.has(t)?!1:(this.consumed.add(t),!0)}};var _o=class{constructor(t){this.G=t}get mode(){return Fi.mode}available(){return Fi.mode==="play"&&!!window.Capacitor?.Plugins?.NativePurchases}async buy(t){if(!this.available())return{ok:!1,reason:"unavailable"};try{let n=await window.Capacitor.Plugins.NativePurchases.purchaseProduct({productIdentifier:t.productId,productType:"inapp",quantity:1}),s=String(n?.transactionId||n?.orderId||"");if(!s)return{ok:!1,reason:"no-transaction"};let r=this.G.save.data;return r.iap||(r.iap={tx:[]}),r.iap.tx.includes(s)?{ok:!1,reason:"duplicate"}:(r.iap.tx.push(s),r.iap.tx.length>300&&r.iap.tx.shift(),this.G.addCoins(t.coins,!1),this.G.save.save(!0),{ok:!0})}catch(e){return{ok:!1,reason:"cancelled",error:String(e?.message||e)}}}async buyRemoveAds(){if(!this.available())return{ok:!1,reason:"unavailable"};try{let e=await window.Capacitor.Plugins.NativePurchases.purchaseProduct({productIdentifier:Ns.productId,productType:"inapp",quantity:1}),n=String(e?.transactionId||e?.orderId||"");if(!n)return{ok:!1,reason:"no-transaction"};let s=this.G.save.data;return s.iap||(s.iap={tx:[]}),s.iap.tx.includes(n)||s.iap.tx.push(n),s.ads.removed=!0,this.G.save.save(!0),{ok:!0}}catch(t){return{ok:!1,reason:"cancelled",error:String(t?.message||t)}}}};var Sv={coin:'<circle cx="12" cy="12" r="9.5" fill="#ffc83a" stroke="#c98a00" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#e8a500" stroke-width="1.8"/><path d="M12 8.2v7.6M9.8 10.2h3.1a1.4 1.4 0 0 1 0 2.8h-1.8a1.4 1.4 0 0 0 0 2.8h3.1" fill="none" stroke="#b97800" stroke-width="1.5" stroke-linecap="round"/>',pause:'<rect x="6" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/>',undo:'<path d="M9 8H15a5 5 0 0 1 0 10H8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4.5 8 8l4 3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M12 3.5a6 6 0 0 0-3.4 10.9c.6.5.9 1.1.9 1.8V17h5v-.8c0-.7.3-1.3.9-1.8A6 6 0 0 0 12 3.5z" fill="currentColor"/><rect x="9.5" y="18" width="5" height="2.4" rx="1.2" fill="currentColor"/>',recall:'<path d="M5 12h12M9 7.5 4.5 12 9 16.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="18" y="6" width="2.6" height="12" rx="1.3" fill="currentColor"/>',call:'<circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',convert:'<path d="M6 8h11l-3-3M18 16H7l3 3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',bell:'<path d="M12 3.5a5.5 5.5 0 0 0-5.5 5.5v3.2L5 15.5v1h14v-1l-1.5-3.3V9A5.5 5.5 0 0 0 12 3.5Zm-2 15h4a2 2 0 0 1-4 0Z" fill="currentColor"/>',shuffle:'<path d="M3.5 7h3.2c3.6 0 4.6 10 8.3 10h3.5M3.5 17h3.2c1.6 0 2.7-1.9 3.6-4M13.6 9.2C14.4 8 15.4 7 17 7h2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.8 4.2 20 7l-3.2 2.8M16.8 14.2 20 17l-3.2 2.8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',vip:'<path d="M3 8.5l4.2 3.8L12 5l4.8 7.3L21 8.5 19.2 18.5H4.8z" fill="currentColor"/><rect x="5" y="19.5" width="14" height="2" rx="1" fill="currentColor"/>',plus:'<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>',ad:'<rect x="3" y="5" width="18" height="14" rx="3.5" fill="currentColor"/><path d="M10 9.2v5.6l5-2.8z" fill="#fff"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.6" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',star:'<path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z" fill="currentColor" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-linejoin="round"/>',home:'<path d="M3.5 11.5 12 4l8.5 7.5V20h-5.5v-5h-6v5H3.5z" fill="currentColor"/>',shop:'<path d="M5 8h14l-1.2 11.2a1.6 1.6 0 0 1-1.6 1.4H7.8a1.6 1.6 0 0 1-1.6-1.4z" fill="currentColor"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',bus:'<rect x="3" y="5" width="18" height="12.5" rx="3" fill="currentColor"/><rect x="5" y="7.5" width="14" height="4.5" rx="1.2" fill="rgba(255,255,255,.75)"/><circle cx="7.8" cy="18.2" r="2.1" fill="#222"/><circle cx="16.2" cy="18.2" r="2.1" fill="#222"/>',list:'<rect x="4" y="4" width="16" height="17" rx="3" fill="currentColor"/><path d="M8 9.5h8M8 13h8M8 16.5h5" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/>',gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="2" fill="currentColor"/><rect x="2.5" y="6.5" width="19" height="4.2" rx="1.6" fill="currentColor"/><path d="M12 6.5v14" stroke="rgba(255,255,255,.7)" stroke-width="2.4"/><path d="M12 6.5C10 2.5 6.5 3.5 7.6 6c.5 1 2.6.6 4.4.5zm0 0c2-4 5.5-3 4.4-.5-.5 1-2.6.6-4.4.5z" fill="currentColor"/>',gear:'<path d="M12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm8.2 4.4-1.9-.5a6.7 6.7 0 0 0-.6-1.5l1-1.7-1.7-1.7-1.7 1a6.7 6.7 0 0 0-1.5-.6L12.9 5h-2.4l-.5 1.9a6.7 6.7 0 0 0-1.5.6l-1.7-1-1.7 1.7 1 1.7a6.7 6.7 0 0 0-.6 1.5l-1.9.5v2.4l1.9.5c.1.5.3 1 .6 1.5l-1 1.7 1.7 1.7 1.7-1c.5.3 1 .5 1.5.6l.5 1.9h2.4l.5-1.9c.5-.1 1-.3 1.5-.6l1.7 1 1.7-1.7-1-1.7c.3-.5.5-1 .6-1.5l1.9-.5z" fill="currentColor"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>',x:'<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',vibe:'<rect x="8" y="3.5" width="8" height="17" rx="2.2" fill="currentColor"/><path d="M4 8v8M20 8v8M1.8 10v4M22.2 10v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',restart:'<path d="M18.5 8A7.5 7.5 0 1 0 19.5 13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><path d="M19 3.5V8.5h-5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',people:'<circle cx="9" cy="8" r="3.4" fill="currentColor"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0z" fill="currentColor"/><circle cx="17" cy="9" r="2.8" fill="currentColor" opacity=".7"/><path d="M16 14.5a5.5 5.5 0 0 1 6 5.5h-5z" fill="currentColor" opacity=".7"/>',clock:'<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 6.8V12l3.6 2.2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 6H4.2c0 3 1.4 4.6 3.4 4.8M17 6h2.8c0 3-1.4 4.6-3.4 4.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="10.6" y="13.5" width="2.8" height="4" fill="currentColor"/><rect x="7.5" y="17.5" width="9" height="3" rx="1.2" fill="currentColor"/>',finger:'<path d="M9.5 3.2c-1.3 0-2.1 1-2.1 2.2v7.3L5.8 11c-.9-.7-2.1-.5-2.6.4-.4.7-.2 1.4.4 2l4.2 4.3c.9 1.2 2.4 2.3 4.3 2.3h2.6c3 0 4.9-2.1 4.9-5.1v-3.9c0-1.1-.8-1.9-1.8-1.9-.4 0-.8.1-1.1.4-.2-.8-.9-1.3-1.7-1.3-.5 0-.9.2-1.2.5-.3-.7-.9-1.1-1.7-1.1-.4 0-.7.1-1 .3V5.4c0-1.2-.8-2.2-2.2-2.2z" fill="#fff" stroke="#233" stroke-width="1.4" stroke-linejoin="round"/>'};function nt(i,t=22,e=""){return`<svg class="ico ${e}" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${Sv[i]||""}</svg>`}var bo=(i,t=180)=>Math.floor((i+t*6e4)/864e5),sf=i=>String(i).padStart(2,"0");function af(i){let t=new Date(i*864e5);return`${t.getUTCFullYear()}-${sf(t.getUTCMonth()+1)}-${sf(t.getUTCDate())}`}var of=(i,t=180)=>af(bo(i,t));function rf(i){let[t,e,n]=i.split("-").map(Number);return Math.floor(Date.UTC(t,e-1,n)/864e5)}function lf(i,t=180){let e=bo(i,t),n=e-(e+3)%7;return af(n)}var cf=(i,t=180)=>(bo(i,t)+3)%7;function hf(i,t=180){let e=bo(i,t);return(e-(e+3)%7+7)*864e5-t*6e4}var df=(i,t)=>rf(t)-rf(i);function Mo({stars:i,extra:t}){return 100+60*i+Math.max(0,40-8*t)}function uf(i,t){return _h(Math.max(0,i-t),t)}function _h(i,t){i=Math.max(0,i);let e=Math.max(1,Math.floor(t*.12)),n=Math.max(3,Math.ceil(t*.4));return{extra:i,stars:i<=e?3:i<=n?2:1,t3:e,t2:n}}var Ev=2*6e4,oe={offset:null,save:null,tampered:!1,init(i){this.save=i,this.tick()},setServerTime(i){this.offset=i-performance.now(),this.tick()},get synced(){return this.offset!==null},now(){return this.offset!==null?performance.now()+this.offset:Date.now()},tick(){let i=this.save?.data;if(!i)return;let t=this.now();if(this.offset!==null){this.tampered=!1,i.time.lastSeen=Math.max(i.time.lastSeen,t);return}t<i.time.lastSeen-Ev?this.tampered=!0:(this.tampered=!1,t>i.time.lastSeen&&(i.time.lastSeen=t))},dayKey(i=this.now()){return of(i,Ke.dayOffsetMin)},weekKey(i=this.now()){return lf(i,Ke.dayOffsetMin)},weekday(i=this.now()){return cf(i,Ke.dayOffsetMin)},trusted(){return this.tick(),Ke.mode==="http"?this.offset!==null:!this.tampered},why(){return Ke.mode==="http"&&this.offset===null?"G\xFCnl\xFCk \xF6d\xFCl i\xE7in internet ba\u011Flant\u0131s\u0131 gerekli.":this.tampered?"Cihaz saati geriye al\u0131nm\u0131\u015F g\xF6r\xFCn\xFCyor. Saat d\xFCzelene kadar g\xFCnl\xFCk \xF6d\xFCl kapal\u0131.":""}};var En={style:[{id:"city",name:"\u015Eehir Otob\xFCs\xFC",price:0,desc:"Klasik yuvarlak hatl\u0131 \u015Fehir otob\xFCs\xFC."},{id:"mini",name:"Minib\xFCs",price:250,desc:"K\xFC\xE7\xFCk, tombul ve sevimli."},{id:"school",name:"Okul Servisi",price:450,desc:"Siyah \u015Feritli, dur levhal\u0131 servis."},{id:"coach",name:"Konfor Otob\xFCs\xFC",price:800,desc:"Uzun caml\u0131, g\xFCm\xFC\u015F etekli yolcu otob\xFCs\xFC."},{id:"modern",name:"Modern Otob\xFCs",price:1200,desc:"Al\xE7ak, aerodinamik, panoramik caml\u0131; LED \u0131\u015F\u0131k \u015Feritli."},{id:"express",name:"Ekspres",price:1500,desc:"Beyaz tavan, \xE7ift \u015Ferit, LED \xF6n tabela."},{id:"tourist",name:"Panoramik Turist",price:1800,desc:"Cam tavan, sar\u0131 \u015Ferit, tavan \u0131\u015F\u0131klar\u0131."},{id:"sport",name:"Yar\u0131\u015F Otob\xFCs\xFC",price:2e3,desc:"Yar\u0131\u015F \u015Feritleri ve spoyler."},{id:"luxury",name:"L\xFCks Otob\xFCs",price:2500,desc:"Metalik boya, krom detaylar, koyu caml\u0131 VIP yolcu otob\xFCs\xFC."}],palette:[{id:"vivid",name:"Canl\u0131",price:0,desc:"Varsay\u0131lan doygun renkler."},{id:"pastel",name:"Pastel",price:300,desc:"Yumu\u015Fak \u015Feker tonlar\u0131."},{id:"neon",name:"Neon",price:500,desc:"Parlak neon renkler."},{id:"retro",name:"Retro",price:350,desc:"Mat nostaljik tonlar."}],rim:[{id:"steel",name:"\xC7elik Jant",price:0,desc:"Standart \xE7elik."},{id:"gold",name:"Alt\u0131n Jant",price:200,desc:"Parlak alt\u0131n kaplama."},{id:"neon",name:"Neon Jant",price:300,desc:"Turkuaz parlayan jantlar."},{id:"chrome",name:"Krom Jant",price:450,desc:"Ayna gibi krom."}],trail:[{id:"dust",name:"Toz \u0130zi",price:0,desc:"Hafif toz bulutu."},{id:"sparkle",name:"Par\u0131lt\u0131 \u0130zi",price:250,desc:"Alt\u0131n par\u0131lt\u0131lar."},{id:"stars",name:"Y\u0131ld\u0131z \u0130zi",price:400,desc:"Renkli y\u0131ld\u0131zlar sa\xE7ar."},{id:"bubbles",name:"Baloncuk \u0130zi",price:300,desc:"Sabun k\xF6p\xFC\u011F\xFC baloncuklar\u0131."}],vipSkin:[{id:"gold",name:"Alt\u0131n VIP",price:0,desc:"Alt\u0131n detayl\u0131 klasik VIP."},{id:"platinum",name:"Platin VIP",price:600,desc:"G\xFCm\xFC\u015F-beyaz l\xFCks."},{id:"royal",name:"Kraliyet VIP",price:900,desc:"Mor g\xF6vde, alt\u0131n s\xFCsler."}]},ff=[["coins","Jeton"],["packs","Paketler"],["style","Otob\xFCs"],["palette","Renkler"],["rim","Jantlar"],["trail","Efekt"],["vipSkin","VIP"],["power","G\xFC\xE7"],["slot","Premium"]],rn={undo:{name:"Geri Al",desc:"Son hamleyi geri al\u0131r.",price:ie.undo},hint:{name:"\u0130pucu",desc:"Bir sonraki do\u011Fru otob\xFCs\xFC g\xF6sterir.",price:ie.hint},recall:{name:"Geri \xC7a\u011F\u0131r",desc:"Park eden otob\xFCs\xFC ba\u015Flang\u0131\xE7 yerine d\xF6nd\xFCr\xFCr.",price:ie.recall},convert:{name:"De\u011Fi\u015Ftir",desc:"Otob\xFCse koltuk ekler ya da otob\xFCs\xFC uzat\u0131r (seviye ba\u015F\u0131na s\u0131n\u0131rl\u0131). Renkler de\u011Fi\u015Fmez.",price:ie.convert},call:{name:"Otob\xFCs \xC7a\u011F\u0131r",desc:"\u0130stedi\u011Fin bir otob\xFCs\xFC, yolu kapal\u0131 olsa bile park alan\u0131na \xE7a\u011F\u0131r\u0131r.",price:ie.call},extraSlot:{name:"Ek Park Yeri",desc:"Bu seviye i\xE7in bir park yeri a\xE7ar.",price:ie.extraSlot},moves:{name:"Ek Hamle",desc:"Hamle s\u0131n\u0131rl\u0131 seviyelerde +4 hamle.",price:ie.moves},time:{name:"Ek S\xFCre",desc:"S\xFCreli seviyelerde +30 saniye.",price:ie.time},vip:{name:"VIP Hakk\u0131",desc:"Se\xE7ti\u011Fin otob\xFCs\xFC VIP alan\u0131na g\xF6nderir; kendi rengindeki yolcular\u0131 kuyru\u011Fun her yerinden al\u0131r.",price:ie.vip},shuffle:{name:"Kar\u0131\u015Ft\u0131r",desc:"Tahtadaki otob\xFCslerin yerini kar\u0131\u015Ft\u0131r\u0131r (seviye \xE7\xF6z\xFClebilir kal\u0131r).",price:ie.shuffle}},wo=[{coins:20},{coins:25},{coins:30,power:["undo",1]},{coins:35},{coins:40,power:["hint",1]},{coins:50},{coins:80,power:["call",1]}],gi=()=>oe.dayKey(),pf=(i,t)=>df(i,t),bh=[{id:"levels3",text:"3 seviye tamamla",ev:"level",goal:3,reward:30},{id:"pass20",text:"20 yolcuyu otob\xFCse bindir",ev:"passenger",goal:20,reward:25},{id:"vip1",text:"VIP hakk\u0131n\u0131 kullan",ev:"vip",goal:1,reward:35},{id:"puz5",text:"5 bulmacay\u0131 ba\u015Far\u0131yla tamamla",ev:"level",goal:5,reward:60},{id:"star3",text:"Bir seviyeyi 3 y\u0131ld\u0131zla bitir",ev:"threeStar",goal:1,reward:40},{id:"bus12",text:"12 otob\xFCs\xFC yolcu ile doldur",ev:"busFull",goal:12,reward:30},{id:"slot1",text:"Bir ek park yeri a\xE7",ev:"slot",goal:1,reward:25},{id:"pass50",text:"50 yolcuyu otob\xFCse bindir",ev:"passenger",goal:50,reward:50}],Yi=[{id:"first",name:"\u0130lk Yolculuk",text:"\u0130lk seviyeyi tamamla",stat:"levels",goal:1,reward:25},{id:"lv10",name:"Yol Arkada\u015F\u0131",text:"10 seviye tamamla",stat:"levels",goal:10,reward:60},{id:"lv30",name:"\u015Eehir Ustas\u0131",text:"30 seviye tamamla",stat:"levels",goal:30,reward:150},{id:"pass100",name:"Kalabal\u0131k Ta\u015F\u0131y\u0131c\u0131",text:"100 yolcu ta\u015F\u0131",stat:"passengers",goal:100,reward:50},{id:"pass1000",name:"Metropol Hatt\u0131",text:"1000 yolcu ta\u015F\u0131",stat:"passengers",goal:1e3,reward:200},{id:"vip1",name:"K\u0131rm\u0131z\u0131 Hal\u0131",text:"VIP hakk\u0131n\u0131 kullan",stat:"vip",goal:1,reward:40},{id:"slot1",name:"Geni\u015Fleme",text:"Bir ek park yeri a\xE7",stat:"slots",goal:1,reward:35},{id:"star10",name:"M\xFCkemmeliyet\xE7i",text:"10 seviyede 3 y\u0131ld\u0131z al",stat:"threeStars",goal:10,reward:120}];function Mh(i){let t=i.data,e=gi();if(t.quests.list.length&&e<=t.quests.date)return!1;let n=mi([...e].reduce((l,c)=>l*31+c.charCodeAt(0)>>>0,7)),s=bh.slice();n.shuffle(s);let a=[...["levels3","pass20","vip1","puz5"].filter(()=>n()<.85)];for(let l of s)a.length<4&&!a.includes(l.id)&&a.push(l.id);let o=a.slice(0,4);return t.quests={date:e,list:o.map(l=>({id:l})),progress:{},claimed:{}},!0}var xi=i=>bh.find(t=>t.id===i);var Xs=class{constructor(t){this.container=t;let e=this.renderer=new As({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=Tr,e.shadowMap.enabled=!0,e.shadowMap.type=Er,t.appendChild(e.domElement);let n=this.scene=new hi;n.environment=new ci(e).fromScene(new Ds,.04).texture,n.environmentIntensity=.4,n.add(new Ps(15660543,10465484,.65));let s=new Oi(16774108,1.8);s.position.set(-3,6,4),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);let r=s.shadow.camera;r.left=-4,r.right=4,r.top=4,r.bottom=-4,n.add(s);let a=new W(new Di(3.2,48),new bt({color:15265531,roughness:.9}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a),this.stand=new ne,n.add(this.stand),this.cam=new Pe(32,1,.1,50),this.yaw=.6,this.auto=!0,this.t=0,this.model=null,this.running=!0;let o=e.domElement,l=null;o.addEventListener("pointerdown",h=>{l={x:h.clientX,yaw:this.yaw},this.auto=!1,o.setPointerCapture(h.pointerId)}),o.addEventListener("pointermove",h=>{l&&(this.yaw=l.yaw+(h.clientX-l.x)*.012)}),o.addEventListener("pointerup",()=>{l=null,setTimeout(()=>{this.auto=!0},1800)}),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let c=()=>{this.running&&(this.t+=.016,this.auto&&(this.yaw+=.012),this.model&&(this.stand.rotation.y=this.yaw,this.model.position.y=.02+Math.sin(this.t*2)*.01),this.renderer.render(this.scene,this.cam),this.raf=requestAnimationFrame(c))};c()}resize(){let t=this.container.clientWidth||300,e=this.container.clientHeight||220;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.cam.position.set(0,2.4,4.6),this.cam.lookAt(0,.45,0)}show({style:t="city",vip:e=!1,vipSkin:n="gold",rim:s="steel",palette:r="vivid",colorIndex:a=0,len:o=3}){this.model&&this.stand.remove(this.model);let l=zs(r)(a),c=ao({len:o,hex:l,style:t,vip:e,rim:s,vipSkin:n,seats:o*2,noArrow:!0});c.traverse(d=>{d.isMesh&&(d.castShadow=!0)});let h=c.userData.dims.Lz;c.scale.setScalar(Math.min(1.5,3.1/h)),Dr(c,[0,1,2,3,4,5].slice(0,o*2-1),zs(r)),this.model=c,this.stand.add(c)}dispose(){this.running=!1,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.renderer.forceContextLoss?.(),this.renderer.domElement.remove()}};var So={express:"img/bus_express.jpg",tourist:"img/bus_tourist.jpg",sport:"img/bus_sport.jpg"},yi=(i,t=document)=>t.querySelector(i),Br=i=>"#"+i.toString(16).padStart(6,"0"),Tv={easy:"KOLAY",normal:"NORMAL",hard:"ZOR",super:"\xC7OK ZOR"},wh=i=>Tv[i]||"",Eo=class{constructor(t){this.G=t,this.host=yi("#modalHost"),this.menuEl=yi("#menu"),this.toastEl=yi("#toasts"),this.floatEl=yi("#floaters"),this.modals=[]}toast(t,e=""){let n=document.createElement("div");for(n.className="toast "+e,n.textContent=t,this.toastEl.appendChild(n),setTimeout(()=>n.remove(),2500);this.toastEl.children.length>3;)this.toastEl.firstChild.remove()}floatText(t,e,n,s=""){let r=document.createElement("div");r.className="floater",r.style.left=e+"px",r.style.top=n+"px",r.innerHTML=(s?nt(s,24):"")+t,this.floatEl.appendChild(r),setTimeout(()=>r.remove(),1300)}modal({title:t,head:e="",body:n="",foot:s="",closable:r=!0,onClose:a=null,cls:o=""}){let l=document.createElement("div");l.className="modal-bg",l.innerHTML=`<div class="sheet ${o}"><div class="sheet-head ${e}">${t}${r?`<button class="sheet-x" data-x aria-label="Kapat">${nt("x",20)}</button>`:""}</div><div class="sheet-body">${n}</div>${s?`<div class="sheet-foot">${s}</div>`:""}</div>`,this.host.appendChild(l);let c={el:l,closed:!1,q:h=>l.querySelector(h),setBody:h=>{l.querySelector(".sheet-body").innerHTML=h},setFoot:h=>{let d=l.querySelector(".sheet-foot");d||(d=document.createElement("div"),d.className="sheet-foot",l.querySelector(".sheet").appendChild(d)),d.innerHTML=h},close:()=>{c.closed||(c.closed=!0,l.remove(),this.modals=this.modals.filter(h=>h!==c),c.preview?.dispose(),a?.())}};return l.addEventListener("click",h=>{h.target.closest("[data-x]")&&(this.G.sound.play("click"),c.close())}),this.modals.push(c),c}closeAll(){[...this.modals].forEach(t=>t.close())}get hasModal(){return this.modals.length>0}onAct(t,e){t.el.addEventListener("click",n=>{let s=n.target.closest("[data-act]");if(!s||s.disabled)return;let r=e[s.dataset.act];r&&(this.G.sound.play("click"),r(s.dataset,s,n))})}confirm({title:t,text:e,yes:n="Evet",no:s="Vazge\xE7",danger:r=!1}){return new Promise(a=>{let o=!1,l=h=>{o||(o=!0,c.close(),a(h))},c=this.modal({title:t,head:r?"red":"",body:`<p>${e}</p>`,foot:`<div class="row"><button class="btn gray" data-act="no">${s}</button><button class="btn ${r?"red":"green"}" data-act="yes">${n}</button></div>`,closable:!1,onClose:()=>l(!1)});this.onAct(c,{yes:()=>l(!0),no:()=>l(!1)})})}setCoins(t,e=!1){let n=t.toLocaleString("tr-TR");for(let s of[yi("#hudCoins"),yi("#menuCoins")])s&&(s.innerHTML=`${nt("coin",26)}<span>${n}</span>`,e&&(s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse")))}coinPos(){let t=(yi("#hudCoins")||yi("#menuCoins"))?.getBoundingClientRect();return t?{x:t.left+t.width/2,y:t.bottom+6}:{x:200,y:80}}testAd(t,e,n={}){return new Promise(s=>{let r=!1,a=!1,o=this.modal({title:n.interstitial?"Reklam":"\xD6d\xFCll\xFC Reklam",head:"purple",closable:!n.interstitial,body:`<div class="adbox"><span class="testtag">TEST REKLAMI</span><div class="bigad">\xD6rnek Reklam<small>Geli\u015Ftirme modu: ger\xE7ek reklam de\u011Fildir. Yay\u0131n s\xFCr\xFCm\xFCnde AdMob kullan\u0131l\u0131r.</small></div><div class="pb"><i></i></div><p class="adt">${n.interstitial?"Reklam bitince devam edebilirsin":"\xD6d\xFCl i\xE7in bekle"}: <b class="sec">${Math.ceil(t/1e3)}</b> sn</p></div>`,foot:`<button class="btn green" data-act="claim" disabled>${nt("check",22)} ${n.interstitial?"Devam Et":"\xD6d\xFCl\xFC Al"}</button>`,onClose:()=>{r||(r=!0,s(a))}}),l=o.q(".pb i"),c=o.q(".sec"),h=performance.now(),d=setInterval(()=>{let f=Math.min(1,(performance.now()-h)/t);l.style.width=f*100+"%",c.textContent=Math.max(0,Math.ceil((t-(performance.now()-h))/1e3)),f>=1&&(clearInterval(d),a=!0,o.q("[data-act=claim]").disabled=!1,o.q(".adt").textContent="Reklam tamamland\u0131!")},80);this.onAct(o,{claim:()=>{a&&(clearInterval(d),r=!0,o.close(),s(!0))}});let u=o.close;o.close=()=>{clearInterval(d),u()}})}removeAdsOffer(){return new Promise(t=>{let e=this.modal({title:"Reklams\u0131z Oyna",head:"blue",closable:!0,onClose:()=>t(),body:'<p style="text-align:center">Seviye aralar\u0131ndaki zorunlu reklamlar\u0131 tek seferlik sat\u0131n almayla kald\u0131r. \u0130ste\u011Fe ba\u011Fl\u0131 \xF6d\xFCll\xFC videolar yine a\xE7\u0131k kal\u0131r.</p>',foot:'<button class="btn green" data-act="buy">Reklamlar\u0131 Kald\u0131r</button><button class="btn gray" data-act="later">\u015Eimdi de\u011Fil</button>'});this.onAct(e,{buy:async()=>{await this.G.buyRemoveAds()&&e.close()},later:()=>e.close()})})}renderMenu(){let t=this.G,e=t.save.data,n=t.peekLevel(e.level),s=t.canClaimDaily()||t.canClaimWeekly(),r=t.hasClaimableQuest();this.menuEl.innerHTML=`
      <div class="menu-top">
        <div class="lvl-badge">Seviye ${e.level}</div>
        <button class="coin-chip" id="menuCoins" data-act="shop"></button>
        <button class="small-btn" data-act="settings" aria-label="Ayarlar">${nt("gear",26)}</button>
      </div>
      <div class="logo"><b>BUS PUZZLE</b><i>DELUXE</i><br><small>3D</small></div>
      <div class="menu-mid"><button class="play-btn" data-act="play"><b>OYNA</b><small>Seviye ${e.level} \xB7 ${wh(n.difficulty)}</small></button></div>
      <div class="menu-nav">
        <button class="nav-btn shop" data-act="shop">${nt("shop",28)}Ma\u011Faza</button>
        <button class="nav-btn coll" data-act="collection">${nt("bus",28)}Koleksiyon</button>
        <button class="nav-btn rank" data-act="rank">${nt("trophy",28)}S\u0131ralama</button>
        <button class="nav-btn quest" data-act="quests">${nt("list",28)}G\xF6revler${r?'<i class="dot"></i>':""}</button>
        <button class="nav-btn gift" data-act="daily">${nt("gift",28)}G\xFCnl\xFCk${s?'<i class="dot"></i>':""}</button>
        <button class="nav-btn vip" data-act="vip">${nt("vip",28)}VIP</button>
      </div>`,this.setCoins(e.coins)}bindMenu(){this.menuEl.addEventListener("click",t=>{let e=t.target.closest("[data-act]");e&&(this.G.sound.unlock(),this.G.sound.play("click"),{play:()=>this.G.startLevel(this.G.save.data.level),shop:()=>this.shop(),collection:()=>this.collection(),quests:()=>this.quests(),daily:()=>this.daily(),rank:()=>this.leaderboard(),vip:()=>this.vipPanel(),settings:()=>this.settings(!1)}[e.dataset.act]?.())})}shop(t="style"){let e=this.G,n=this.modal({title:"Ma\u011Faza",head:"gold",cls:"shopsheet",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs">${ff.map(([c,h])=>`<button class="tab ${c===t?"on":""}" data-act="tab" data-id="${c}">${h}</button>`).join("")}</div>`,o="",l=`<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><span class="chip" style="border-color:#c98a00">${nt("coin",18)} ${r.coins.toLocaleString("tr-TR")}</span></div>`;if(En[t])o=`<div class="grid">${En[t].map(c=>{let h=r.owned[t].includes(c.id),d=r.equipped[t]===c.id,u="";t==="palette"?u=`<div class="swatch">${Pr[c.id].slice(0,6).map(g=>`<i style="background:${Br(g)}"></i>`).join("")}</div>`:t==="style"?u=So[c.id]?`<img class="bimg" src="${So[c.id]}" alt="">`:`<div style="color:#2f6bff">${nt("bus",52)}</div>`:t==="rim"?u=`<div class="swatch" style="width:48px;height:48px;border-radius:50%;background:radial-gradient(#222 45%,${c.id==="gold"?"#ffc83a":c.id==="neon"?"#35f0ff":c.id==="chrome"?"#f5f8ff":"#cfd6de"} 48%)"></div>`:t==="trail"?u=`<div style="font-size:34px;line-height:42px">${{dust:"\u{1F4A8}",sparkle:"\u2728",stars:"\u2B50",bubbles:"\u{1FAE7}"}[c.id]}</div>`:u=`<div style="color:${Br(Ir[c.id].body)}">${nt("vip",48)}</div>`;let f=d?`<button class="btn green" disabled>${nt("check",16)} Kullan\u0131mda</button>`:h?`<button class="btn blue" data-act="equip" data-id="${c.id}">Kullan</button>`:`<button class="btn gold" data-act="buy" data-id="${c.id}">${nt("coin",18)} ${c.price}</button>`;return`<div class="card ${d?"eq":""}">${h?"":`<span class="tag lock">${nt("lock",10)}</span>`}${u}<div class="nm">${c.name}</div><div class="ds">${c.desc}</div>${f}</div>`}).join("")}</div>`;else if(t==="coins"){let c=e.iap.available();o=`<p>${c?"Jeton paketlerini Google Play ile sat\u0131n alabilirsin.":"<b>Ger\xE7ek parayla sat\u0131n alma bu s\xFCr\xFCmde kapal\u0131.</b> Google Play Faturaland\u0131rma kurulumu yap\u0131lmadan jeton sat\u0131lmaz (README)."}</p><div class="list">${Fi.packs.map(h=>`<div class="item"><div>${nt("coin",34)}</div><div class="grow"><b>${h.coins.toLocaleString("tr-TR")} jeton</b><small style="display:block;color:#58649a">${h.label}</small></div><button class="btn gold" data-act="iap" data-id="${h.id}" ${c?"":"disabled"}>Sat\u0131n al</button></div>`).join("")}</div>`}else if(t==="packs")o=`<p>Jetonla al\u0131nan paketler: tek tek almaktan daha ucuz. (Ger\xE7ek para \xF6demesi yok.)</p><div class="list">${no.map(c=>`<div class="item"><div style="color:#7a4dff">${nt("gift",34)}</div><div class="t"><b>${c.name} <span style="color:#2fa84f;font-size:12px">${c.tag}</span></b><small>${Object.entries(c.items).map(([h,d])=>`${d}\xD7 ${rn[h].name}`).join(" \xB7 ")}</small></div><button class="btn gold" data-act="buypack" data-id="${c.id}">${nt("coin",16)} ${c.price}</button></div>`).join("")}</div>`;else if(t==="power")o=`<div class="list">${Object.entries(rn).map(([c,h])=>`<div class="item"><div style="color:#2f6bff">${nt({undo:"undo",hint:"hint",recall:"recall",call:"call",convert:"convert",extraSlot:"plus",moves:"play",time:"clock",vip:"vip",shuffle:"shuffle"}[c],30)}</div><div class="t"><b>${h.name} <span style="color:#c98a00">\xD7${r.powerups[c]||0}</span></b><small>${h.desc}</small></div><div style="display:flex;flex-direction:column;gap:5px"><button class="btn gold" data-act="buypower" data-id="${c}">${nt("coin",16)} ${h.price}</button>${Me.mode!=="off"?`<button class="btn green" data-act="adpower" data-id="${c}">${nt("ad",16)} +1</button>`:""}</div></div>`).join("")}</div>`;else{let c=r.perm.slots;o=`<p>Kal\u0131c\u0131 park alanlar\u0131 t\xFCm seviyelerde a\xE7\u0131k kal\u0131r. Reklamla a\xE7\u0131lan alanlar ise yaln\u0131zca o seviyede ge\xE7erlidir.</p><div class="list">${ie.permSlot.map((h,d)=>`<div class="item"><div style="color:${d<c?"#2fd06a":"#7a4dff"}">${nt(d<c?"check":"plus",34)}</div><div class="t"><b>Kal\u0131c\u0131 Park Yeri ${d+1}/3</b><small>${d<c?"A\xE7\u0131ld\u0131":d===c?"S\u0131radaki a\xE7\u0131l\u0131m":"\xD6nceki alan\u0131 a\xE7"}</small></div>${d<c?"":`<button class="btn gold" data-act="permslot" ${d===c?"":"disabled"}>${nt("coin",16)} ${h}</button>`}</div>`).join("")}</div>`}n.setBody(a+'<div style="height:10px"></div>'+l+o)};return s(),this.onAct(n,{tab:r=>{t=r.id,s()},buy:r=>{e.buyItem(t,r.id)&&s()},equip:r=>{e.equip(t,r.id),s()},buypower:r=>{e.buyPower(r.id)&&s()},buypack:r=>{e.buyPack(r.id)&&s()},adpower:async r=>{await e.adPower(r.id)&&s()},permslot:()=>{e.buyPermSlot()&&s()},iap:async r=>{await e.buyCoinPack(r.id)&&s()}}),n}collection(){let t=this.G,e=this.modal({title:"Otob\xFCs Koleksiyonu",head:"green",body:""}),n=()=>{let r=t.save.data;return[...En.style.map(a=>({cat:"style",...a,owned:r.owned.style.includes(a.id),eq:r.equipped.style===a.id,color:"#2f6bff",kind:"Otob\xFCs"})),...En.vipSkin.map(a=>({cat:"vipSkin",...a,owned:r.owned.vipSkin.includes(a.id),eq:r.equipped.vipSkin===a.id,color:Br(Ir[a.id].body),kind:"VIP"}))]},s=()=>{let r=n(),a=r.filter(o=>o.owned).length;e.setBody(`<p style="text-align:center">A\xE7\u0131lan: <b>${a}/${r.length}</b></p><div class="grid">${r.map(o=>`<button class="card ${o.eq?"eq":""}" data-act="open" data-cat="${o.cat}" data-id="${o.id}" style="${o.owned?"":"filter:grayscale(.85)"}"><span class="tag ${o.owned?"":"lock"}">${o.owned?o.kind:nt("lock",10)}</span>${o.cat==="style"&&So[o.id]?`<img class="bimg" src="${So[o.id]}" alt="">`:`<div style="color:${o.color}">${nt(o.cat==="vipSkin"?"vip":"bus",56)}</div>`}<div class="nm">${o.owned?o.name:"???"}</div><div class="ds">${o.owned?o.desc:`${o.price} jetonla a\xE7\u0131l\u0131r`}</div></button>`).join("")}</div>`)};s(),this.onAct(e,{open:r=>this.busDetail(r.cat,r.id,s)})}busDetail(t,e,n){let s=this.G,r=En[t].find(d=>d.id===e),a=this.modal({title:r.name,head:t==="vipSkin"?"gold":"blue",body:`<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center">${r.desc}</p>`,foot:""}),o=s.save.data,l=new Xs(a.q(".preview"));a.preview=l,(()=>{let d=o.equipped;l.show(t==="vipSkin"?{vip:!0,vipSkin:e,rim:d.rim,len:3}:{style:e,rim:d.rim,palette:d.palette,colorIndex:0,len:e==="coach"||e==="luxury"?4:e==="mini"?2:3})})();let h=()=>{let d=o.owned[t].includes(e),u=o.equipped[t]===e;a.setFoot(u?`<button class="btn green" disabled>${nt("check",20)} Kullan\u0131mda</button>`:d?'<button class="btn blue" data-act="equip">Kullan</button>':`<button class="btn gold" data-act="buy">${nt("coin",20)} ${r.price} ile a\xE7</button>`)};h(),this.onAct(a,{equip:()=>{s.equip(t,e),h(),n?.()},buy:()=>{s.buyItem(t,e)&&(h(),n?.())}})}vipPanel(){let t=this.G,e=this.modal({title:"VIP & Premium",head:"gold",body:""}),n=()=>{let s=t.save.data;e.setBody(`
        <div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div>
        <p style="margin-top:10px"><b>VIP hakk\u0131:</b> tahtadaki istedi\u011Fin otob\xFCse dokun; yolu kapal\u0131 olsa bile (kanatlan\u0131p u\xE7arak) <b>VIP alan\u0131na</b> gelir ve <b>kendi rengindeki yolcular\u0131 kuyru\u011Fun her yerinden</b> al\u0131r: \xF6nce \xF6ndekileri, dolmazsa arkadakileri. \u0130lk hak hediye; sonras\u0131 reklamla ya da <b>${Eu} jetonla</b>. \u015Eu an <b>${s.powerups.vip}</b> hakk\u0131n var. <button class="btn gold" data-act="buyvip" style="margin-top:8px">${nt("vip",18)} VIP hakk\u0131 al</button></p>
        <div class="opts">${Object.entries(Ir).map(([a,o])=>{let l=s.owned.vipSkin.includes(a);return`<button class="opt ${s.equipped.vipSkin===a?"sel":""}" data-act="skin" data-id="${a}"><div class="dotc" style="background:${Br(o.body)}"></div>${o.label}<small style="color:#58649a">${l?s.equipped.vipSkin===a?"Kullan\u0131mda":"Kullan":En.vipSkin.find(c=>c.id===a).price+" \u{1FA99}"}</small></button>`}).join("")}</div>
        <div class="item"><div style="color:#7a4dff">${nt("plus",30)}</div><div class="t"><b>Kal\u0131c\u0131 Premium park yerleri</b><small>${s.perm.slots}/3 a\xE7\u0131k \xB7 t\xFCm seviyelerde ge\xE7erli</small></div>${s.perm.slots<3?`<button class="btn gold" data-act="perm">${nt("coin",16)} ${ie.permSlot[s.perm.slots]}</button>`:`<span style="color:#2fd06a">${nt("check",28)}</span>`}</div>`);let r=e.preview||(e.preview=new Xs(e.q(".preview")));r.show({vip:!0,vipSkin:s.equipped.vipSkin,rim:s.equipped.rim,len:3})};n(),this.onAct(e,{skin:s=>{if(t.save.data.owned.vipSkin.includes(s.id))t.equip("vipSkin",s.id);else if(!t.buyItem("vipSkin",s.id))return;e.preview?.dispose(),e.preview=null,n()},perm:()=>{t.buyPermSlot()&&(e.preview?.dispose(),e.preview=null,n())},buyvip:()=>{e.close(),this.powerBuy("vip")}})}vipPreview(t){let n=this.G.save.data,s=this.modal({title:"VIP Hakk\u0131",head:"gold",closable:!1,body:'<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center"><b>VIP hakk\u0131</b>: istedi\u011Fin otob\xFCs\xFC se\xE7, VIP alan\u0131na gelsin. Kendi rengindeki yolcular\u0131 <b>kuyru\u011Fun her yerinden</b> al\u0131r (\xF6nce \xF6ndekiler). Sana <b>1 VIP hakk\u0131</b> hediye!</p>',foot:'<button class="btn green" data-act="ok">Harika!</button>',onClose:()=>t?.()}),r=new Xs(s.q(".preview"));s.preview=r,r.show({vip:!0,vipSkin:n.equipped.vipSkin,rim:n.equipped.rim,len:3}),this.onAct(s,{ok:()=>s.close()})}quests(t="daily"){let e=this.G,n=this.modal({title:"G\xF6revler",head:"",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs" style="margin:-14px -14px 10px"><button class="tab ${t==="daily"?"on":""}" data-act="tab" data-id="daily">G\xFCnl\xFCk</button><button class="tab ${t==="ach"?"on":""}" data-act="tab" data-id="ach">Ba\u015Far\u0131lar</button></div>`,o="";if(t==="daily"){let l=e.claimableCount("q");o=`${l?`<button class="btn gold" data-act="claimall" style="margin-bottom:10px">${nt("gift",22)} T\xFCm\xFCn\xFC al (${l})</button>`:""}<div class="list">${r.quests.list.map(c=>{let h=xi(c.id),d=Math.min(h.goal,r.quests.progress[c.id]||0),u=d>=h.goal,f=r.quests.claimed[c.id];return`<div class="item"><div style="color:#2f6bff">${nt("list",30)}</div><div class="t"><b>${h.text}</b><small>${d}/${h.goal} \xB7 \xD6d\xFCl: ${h.reward} \u{1FA99}</small><div class="bar"><i style="width:${d/h.goal*100}%"></i></div></div>${f?`<span style="color:#2fd06a">${nt("check",28)}</span>`:`<button class="btn ${u?"green":"gray"}" data-act="claimq" data-id="${c.id}" ${u?"":"disabled"}>Al</button>`}</div>`}).join("")}</div><p style="text-align:center;margin-top:10px;color:#58649a;font-size:13px">G\xF6revler her g\xFCn yenilenir.</p>`}else{let l=e.claimableCount("a");o=`${l?`<button class="btn gold" data-act="claimall" style="margin-bottom:10px">${nt("gift",22)} T\xFCm\xFCn\xFC al (${l})</button>`:""}<div class="list">${Yi.map(c=>{let h=Math.min(c.goal,r.stats[c.stat]||0),d=h>=c.goal,u=r.ach.claimed[c.id];return`<div class="item"><div style="color:#ff9a1f">${nt("star",30)}</div><div class="t"><b>${c.name}</b><small>${c.text} \xB7 ${h}/${c.goal} \xB7 ${c.reward} \u{1FA99}</small><div class="bar"><i style="width:${h/c.goal*100}%"></i></div></div>${u?`<span style="color:#2fd06a">${nt("check",28)}</span>`:`<button class="btn ${d?"green":"gray"}" data-act="claima" data-id="${c.id}" ${d?"":"disabled"}>Al</button>`}</div>`}).join("")}</div>`}n.setBody(a+o)};s(),this.onAct(n,{tab:r=>{t=r.id,s()},claimq:r=>{e.claimQuest(r.id),s()},claima:r=>{e.claimAch(r.id),s()},claimall:()=>{e.claimAll(t==="daily"?"q":"a"),s()}})}daily(){let t=this.G,e=this.modal({title:"G\xFCnl\xFCk \xD6d\xFCl",head:"orange",body:""});e.el.querySelector(".sheet-head").style.background="linear-gradient(#ffb23f,#ff7a1f)";let n=["Pzt","Sal","\xC7ar","Per","Cum","Cmt","Paz"],s=()=>{let r=t.save.data,a=oe.trusted(),o=t.canClaimDaily(),l=t.nextDailyIndex(),c=o?l:r.daily.streak,h=r.weekly,d=h.week===oe.weekKey()?h:{days:[],claimed:!1},u=oe.weekday(),f=`<div class="weekly"><div class="wk-h"><b>${nt("gift",20)} Haftal\u0131k giri\u015F sand\u0131\u011F\u0131</b><small>${d.days.length}/${sn.need} g\xFCn \xB7 ${sn.coins} \u{1FA99} + ${sn.power[1]} ${rn[sn.power[0]].name}</small></div><div class="wk-d">${n.map((g,y)=>`<i class="${d.days.includes(y)?"on":""} ${y===u?"now":""}">${g}</i>`).join("")}</div>${d.claimed?'<button class="btn gray" disabled>Bu haftaki sand\u0131k al\u0131nd\u0131</button>':`<button class="btn ${t.canClaimWeekly()?"gold":"gray"}" data-act="weekly" ${t.canClaimWeekly()?"":"disabled"}>${nt("gift",20)} Sand\u0131\u011F\u0131 a\xE7</button>`}</div>`;e.setBody(`<p style="text-align:center">Her g\xFCn gir, \xF6d\xFCl\xFCn\xFC al. Bir g\xFCn\xFC ka\xE7\u0131r\u0131rsan seri s\u0131f\u0131rlan\u0131r. G\xFCn, sabit saate (T\xFCrkiye 00:00) g\xF6re de\u011Fi\u015Fir; cihaz saatini de\u011Fi\u015Ftirmek i\u015Fe yaramaz.</p>${a?"":`<p style="text-align:center;color:#c0182b">${oe.why()}</p>`}<div class="days">${wo.map((g,y)=>`<div class="day ${y<c?"done":""} ${o&&y===l?"today":""} ${y===6?"big":""}">G\xFCn ${y+1}<b>${g.coins} \u{1FA99}</b>${g.power?`<small>+${g.power[1]} ${rn[g.power[0]].name}</small>`:""}${y<c?`<div style="color:#2fd06a">${nt("check",20)}</div>`:""}</div>`).join("")}</div>${f}`),e.setFoot(o?`<button class="btn green" data-act="claim">${nt("gift",22)} \xD6d\xFCl\xFC Al</button>`:`<button class="btn gray" disabled>${a?"Bug\xFCnk\xFC \xF6d\xFCl al\u0131nd\u0131 \xB7 yar\u0131n gel!":"\u015Eu an al\u0131namaz"}</button>`)};s(),this.onAct(e,{claim:async()=>{await t.claimDaily(),s()},weekly:()=>{t.claimWeekly(),s()}})}leaderboard(){let t=this.G,e=this.modal({title:"Haftal\u0131k S\u0131ralama",head:"gold",body:'<p style="text-align:center">Y\xFCkleniyor\u2026</p>'}),n=["\u{1F947}","\u{1F948}","\u{1F949}"],s=r=>{let a=Math.max(0,Math.floor((r-oe.now())/6e4)),o=Math.floor(a/1440),l=Math.floor(a%1440/60);return o?`${o} g\xFCn ${l} sa`:`${l} sa ${a%60} dk`};(async()=>{let r=await t.backend.leaderboard();if(e.closed)return;if(!r.ok){e.setBody('<p style="text-align:center">S\u0131ralama \u015Fu an y\xFCklenemedi. \u0130nternet ba\u011Flant\u0131n\u0131 kontrol et.</p>');return}let a=t.save.data.account.name,o=r.local?"":(r.rewards||Ke.weeklyRewards).map((c,h)=>`<div class="rw"><span>${n[h]||h+1+"."}</span><b>${c} \u{1FA99}</b></div>`).join(""),l=r.entries.length?r.entries.map(c=>`<div class="lbrow ${c.you?"you":""}"><span class="rk">${n[c.rank-1]||c.rank}</span><span class="nm">${c.name.replace(/[<>&]/g,"")}${c.you?" (sen)":""}</span><b>${c.score}</b></div>`).join(""):'<p style="text-align:center;color:#58649a">Bu hafta hen\xFCz puan yok. Bir seviye bitir!</p>';e.setBody(`<div class="lb-top"><div>${r.local?"":`<small>Bu haftan\u0131n \xF6d\xFClleri</small><div class="rws">${o}</div>`}</div><div style="text-align:right"><small>Hafta bitimine</small><b>${s(r.endsAt)}</b></div></div>
        ${r.local?'<p class="lb-note">Sunucu ba\u011Fl\u0131 de\u011Fil: s\u0131ralama \u015Fimdilik sim\xFCle oyuncularla g\xF6sterilir; bu liste i\xE7in \xF6d\xFCl verilmez. Ger\xE7ek online s\u0131ralama i\xE7in sunucu ba\u011Flanmal\u0131.</p>':""}
        <div class="lb">${l}</div>
        <p style="text-align:center;margin-top:8px;font-size:13px">Senin puan\u0131n: <b>${r.me?.score||0}</b>${r.me?.rank?` \xB7 S\u0131ran: <b>${r.me.rank}</b>`:""}</p>
        <p style="font-size:12px;color:#58649a;text-align:center">Puan = seviye ba\u015F\u0131na en iyi sonucun (az hamle = y\xFCksek puan). Ayn\u0131 seviyeyi tekrar oynayarak puan \u015Fi\u015Firilemez.</p>
        <div class="row" style="margin-top:6px"><input id="nick" maxlength="20" placeholder="Takma ad" value="${(a||"").replace(/"/g,"")}" class="nick"><button class="btn blue" style="flex:none;width:auto" data-act="setname">Kaydet</button></div>`)})(),this.onAct(e,{setname:async()=>{let r=e.q("#nick")?.value.trim();if(!r||r.length<2){this.toast("Takma ad en az 2 karakter olmal\u0131.","bad");return}let a=await t.backend.setName(r);this.toast(a.ok?"Takma ad kaydedildi.":"Kaydedilemedi.",a.ok?"good":"bad")}})}settings(t){let e=this.G,n=this.modal({title:"Ayarlar",head:"",body:""}),s=()=>{let r=e.save.data.settings;n.setBody(`
        <div class="switch"><span class="lab">${nt("sound",24)} Ses efektleri</span><button class="tg ${r.sound?"on":""}" data-act="sound" aria-label="Ses"></button></div>
        <div class="switch"><span class="lab">${nt("vibe",24)} Titre\u015Fim</span><button class="tg ${r.vibe?"on":""}" data-act="vibe" aria-label="Titre\u015Fim"></button></div>
        <div class="switch" style="display:block"><div class="lab" style="margin-bottom:8px">Grafik kalitesi</div><div class="seg">${[["low","D\xFC\u015F\xFCk"],["medium","Orta"],["high","Y\xFCksek"]].map(([a,o])=>`<button class="${r.quality===a?"on":""}" data-act="q" data-id="${a}">${o}</button>`).join("")}</div></div>
        <div class="switch"><span class="lab">${nt("bell",24)} Bildirimler (g\xFCnl\xFCk \xF6d\xFCl hat\u0131rlatmas\u0131)</span><button class="tg ${e.save.data.notif.enabled?"on":""}" data-act="notif" aria-label="Bildirimler"></button></div>
        <button class="btn blue" data-act="tut" style="margin-bottom:9px">E\u011Fitimi tekrar g\xF6ster</button>
        ${t?"":'<button class="btn red" data-act="reset">\u0130lerlemeyi s\u0131f\u0131rla</button>'}
        <p style="margin-top:12px;font-size:12px;color:#58649a;text-align:center">Reklam modu: <b>${Me.mode==="test"?"TEST (geli\u015Ftirme)":Me.mode==="admob"?"AdMob":"Kapal\u0131"}</b><br>T\xFCm 3D modeller ve sesler kodla \xFCretilmi\u015Ftir (\xF6zg\xFCn).</p>`)};return s(),this.onAct(n,{sound:()=>{e.save.data.settings.sound=!e.save.data.settings.sound,e.applySettings(),s()},vibe:()=>{e.save.data.settings.vibe=!e.save.data.settings.vibe,e.applySettings(),s()},q:r=>{e.save.data.settings.quality=r.id,e.applySettings(),s()},notif:async()=>{e.save.data.notif.enabled?await e.notifier.disable():e.notifier.available()?await e.notifier.enable()||this.toast("Bildirim izni verilmedi.","bad"):this.toast("Bildirimler yaln\u0131zca Android uygulamas\u0131nda \xE7al\u0131\u015F\u0131r.","bad"),s()},tut:()=>{e.resetTutorial(),this.toast("E\u011Fitim bir sonraki 1. ve 2. seviyede tekrar g\xF6sterilecek.","good")},reset:async()=>{await this.confirm({title:"Emin misin?",text:"T\xFCm ilerleme, jetonlar ve a\xE7\u0131lan \xF6\u011Feler silinecek.",yes:"S\u0131f\u0131rla",danger:!0})&&(e.resetProgress(),n.close())}}),n}pause(){let t=this.G,e=this.modal({title:"Duraklat\u0131ld\u0131",closable:!1,body:`<div class="list" style="gap:10px"><button class="btn green" data-act="resume">${nt("play",22)} Devam Et</button><button class="btn orange" data-act="restart">${nt("restart",22)} Yeniden Ba\u015Fla</button><button class="btn blue" data-act="settings">${nt("gear",22)} Ayarlar</button><button class="btn gray" data-act="menu">${nt("home",22)} Ana Men\xFC</button></div>`});this.onAct(e,{resume:()=>{e.close(),t.resume()},restart:()=>{e.close(),t.restart()},settings:()=>this.settings(!0),menu:()=>{e.close(),t.goMenu()}})}result({level:t,stars:e,coins:n,canDouble:s,rewardPower:r,final:a,moves:o,needed:l,extra:c,t3:h,t2:d,best:u,score:f}){let g=this.G,y=this.modal({title:"SEV\u0130YE TAMAMLANDI!",head:"green",closable:!1,body:`<div class="stars">${[1,2,3].map(M=>nt("star",58,M<=e?"on":"")).join("")}</div><div class="reward">${nt("coin",40)}<span id="rcount">+0</span></div>${r?`<p style="text-align:center;color:#2f6bff">Bonus: +1 ${rn[r].name}!</p>`:""}<p style="text-align:center;color:#58649a;margin-bottom:4px">Seviye ${t} ge\xE7ildi \xB7 <b>${o}</b> hamle (en az ${l} gerekir${u&&u<o?`, rekorun ${u}`:""})</p><p style="text-align:center;font-size:12.5px;color:#58649a">${e===3?"M\xFCkemmel! Neredeyse hatas\u0131z.":e===2?`3 y\u0131ld\u0131z i\xE7in en fazla ${h} fazla hamle yapmal\u0131yd\u0131n (sen ${c}).`:`2 y\u0131ld\u0131z i\xE7in en fazla ${d} fazla hamle gerekir (sen ${c}).`} Haftal\u0131k puan: +${f}</p>`,foot:`${s?`<button class="btn gold dbl" data-act="double">${nt("ad",22)} Video izle: 2x kazan <small>(+${n} \u2192 +${n*2})</small></button>`:""}<button class="btn ${s?"blue":"green"}" data-act="next">${nt("play",22)} Sonraki Seviye</button><button class="btn gray" data-act="menu">${nt("home",20)} Ana Men\xFC</button>`});y.el.querySelectorAll(".stars .ico").forEach((M,C)=>{M.style.animationDelay=C*.25+"s"});let m=y.q("#rcount"),p=performance.now(),v=0,_=()=>{let M=Math.min(1,(performance.now()-p)/900);v=Math.round(n*M),m.textContent="+"+v,M<1&&!y.closed?requestAnimationFrame(_):M>=1&&g.sound.play("coin")};requestAnimationFrame(_),this.onAct(y,{next:()=>{y.close(),g.nextLevel()},menu:()=>{y.close(),g.goMenu()},double:async(M,C)=>{await g.doubleReward(n)&&(C.remove(),m.textContent="+"+n*2,this.toast(`2x \xF6d\xFCl al\u0131nd\u0131: +${n} jeton daha`,"good"))}})}fail({reason:t,canSlotAd:e,canUndo:n,revivesLeft:s,adOk:r,canVip:a}){let o=this.G,l={noslot:"Park yerlerin doldu ve \xE7\u0131kabilecek otob\xFCs kalmad\u0131!",stuck:"Hi\xE7bir otob\xFCs hareket edemiyor!",moves:"Hamle hakk\u0131n bitti!",time:"S\xFCre doldu!"}[t]||"Seviye ba\u015Far\u0131s\u0131z.",c=[];s>0&&r&&(t==="moves"?c.push(`<button class="btn gold" data-act="moveAd">${nt("ad",22)} Reklam izle: +4 hamle</button>`,`<button class="btn orange" data-act="moveCoin">${nt("coin",22)} ${ie.moves} jeton: +4 hamle</button>`):t==="time"?c.push(`<button class="btn gold" data-act="timeAd">${nt("ad",22)} Reklam izle: +30 sn</button>`,`<button class="btn orange" data-act="timeCoin">${nt("coin",22)} ${ie.time} jeton: +30 sn</button>`):(n&&c.push(`<button class="btn blue" data-act="undo">${nt("undo",22)} Reklam izle: hamleyi geri al</button>`),e&&c.push(`<button class="btn gold" data-act="slotAd">${nt("ad",22)} Reklam izle: ek park yeri a\xE7<small>(bu seviye)</small></button>`))),a&&t!=="moves"&&t!=="time"&&c.unshift(`<button class="btn purple" data-act="vip">${nt("vip",22)} VIP ile kurtar <small>(${o.save.data.powerups.vip} hak${o.save.data.powerups.vip?"":" \xB7 reklam/jeton"})</small></button>`);let d=Array.from({length:Vn},(g,y)=>`<i class="${y<Vn-s?"used":""}"></i>`).join(""),u=s>0?`<div class="revive-pips">${d}</div><p style="text-align:center;color:#58649a;font-size:13px">Bu seviyede kalan geri alma/devam hakk\u0131: <b>${s}/${Vn}</b>. Reklam izlemek iste\u011Fe ba\u011Fl\u0131d\u0131r.</p>`:`<div class="revive-pips">${d}</div><p style="text-align:center;color:#b0182b;font-weight:900">Geri alma haklar\u0131n bitti (${Vn}/${Vn}). Seviyeyi yeniden ba\u015Flatmal\u0131s\u0131n.</p>`,f=this.modal({title:"Olmad\u0131!",head:"red",closable:!1,body:`<p style="text-align:center;font-size:17px">${l}</p>${u}`,foot:`${c.join("")}<div class="row"><button class="btn green" data-act="restart">${nt("restart",20)} Yeniden</button><button class="btn gray" data-act="menu">${nt("home",20)} Men\xFC</button></div>`});this.onAct(f,{restart:()=>{f.close(),o.restart()},menu:()=>{f.close(),o.goMenu()},vip:()=>{f.close(),o.vipRescue()},slotAd:async()=>{await o.unlockSlot("ad")&&(f.close(),o.reviveAfter())},undo:async()=>{await o.reviveUndo()&&(f.close(),o.reviveAfter())},moveAd:async()=>{await o.addMoves("ad")&&(f.close(),o.reviveAfter())},moveCoin:async()=>{await o.addMoves("coin")&&(f.close(),o.reviveAfter())},timeAd:async()=>{await o.addTime("ad")&&(f.close(),o.reviveAfter())},timeCoin:async()=>{await o.addTime("coin")&&(f.close(),o.reviveAfter())}})}slotOffer(t){let e=this.G,n=e.save.data,s=n.perm.slots,r=Me.mode!=="off",a=this.modal({title:"Ekstra Park Yeri",head:"blue",onClose:t,body:'<div style="display:flex;justify-content:center;align-items:center;gap:14px;margin:4px 0 10px"><div style="width:44px;height:44px;border-radius:12px;background:#2f6bff;color:#fff;font:900 28px/44px inherit;text-align:center;box-shadow:0 3px 0 rgba(0,0,0,.25)">P</div><div style="width:46px;height:84px;border-radius:12px;border:4px dashed #8b97b8;background:#aab4cc"></div><b style="font-size:38px;color:#ffb800;text-shadow:0 2px 0 rgba(0,0,0,.2)">+1</b></div><p style="text-align:center;font-weight:900;margin:0">Oynamaya devam etmek i\xE7in +1 park yeri al!<br><small style="color:#58649a">Sadece bu seviye i\xE7in ge\xE7erli</small></p>',foot:`<div style="display:flex;gap:10px;width:100%"><button class="btn orange" style="flex:1" data-act="coin">${nt("coin",24)} ${ie.extraSlot}</button>${r?`<button class="btn green" style="flex:1" data-act="ad">${nt("ad",24)} \xDCCRETS\u0130Z</button>`:""}</div>
        ${n.powerups.extraSlot>0?`<button class="btn blue" data-act="item">${nt("plus",20)} Envanterden kullan (${n.powerups.extraSlot})</button>`:""}
        ${s<3?`<button class="btn purple" data-act="perm">${nt("vip",20)} Kal\u0131c\u0131 Premium alan \xB7 ${ie.permSlot[s]} <small>(${s+1}/3)</small></button>`:""}`});this.onAct(a,{ad:async()=>{await e.unlockSlot("ad")&&a.close()},coin:async()=>{await e.unlockSlot("coin")&&a.close()},item:async()=>{await e.unlockSlot("item")&&a.close()},perm:()=>{e.buyPermSlot(!0)&&a.close()}})}powerBuy(t){let e=this.G,n=rn[t],s=this.modal({title:n.name,head:"blue",body:`<p>${n.desc}</p><p style="color:#c98a00;font-weight:900">Elinde kalmad\u0131.</p>${t==="vip"?'<p style="font-size:13px;color:#58649a">Sat\u0131n al\u0131nca VIP hakk\u0131 envanterine eklenir; sonra VIP d\xFC\u011Fmesine dokunup otob\xFCs\xFC se\xE7ersin.</p>':""}`,foot:`${e.save.data.coins>=n.price?`<button class="btn gold" data-act="buy">${nt("coin",22)} Sat\u0131n al \xB7 ${n.price} jeton</button>`:`<button class="btn orange" data-act="needcoins">${nt("coin",22)} Jeton yetmiyor \xB7 Jeton al</button>`}${Me.mode!=="off"?`<button class="btn green" data-act="ad">${nt("ad",22)} Reklam izle: +1 hak</button>`:""}`});this.onAct(s,{buy:()=>{e.buyPower(t)&&s.close()},needcoins:()=>{s.close(),this.shop("coins")},ad:async()=>{await e.adPower(t)&&s.close()}})}convertDialog(t){let e=this.G,n=null,s=this.modal({title:"Otob\xFCs\xFC De\u011Fi\u015Ftir",head:"purple",body:"",foot:""}),r=()=>{let a=t.colors.map(l=>`<button class="opt ${n?.type==="color"&&n.v===l?"sel":""}" data-act="pickc" data-v="${l}"><div class="dotc" style="background:${Br(Pr[e.save.data.equipped.palette][l])}"></div>${ks[l].name}</button>`).join(""),o=[];t.canSeat&&o.push(`<button class="opt ${n?.type==="seat"?"sel":""}" data-act="picks"><div style="color:#2fb36a">${nt("people",34)}</div>Koltuk ekle<small style="color:#58649a">${t.seats} \u2192 ${t.seats+1} koltuk</small></button>`),t.canGrow&&o.push(`<button class="opt ${n?.type==="grow"?"sel":""}" data-act="pickg"><div style="color:#7a4dff">${nt("bus",34)}</div>Uzat<small style="color:#58649a">${t.seats} \u2192 ${t.seats+2} koltuk</small></button>`),s.setBody(`<p>Se\xE7ili otob\xFCs\xFCn kapasitesini art\u0131r (koltuk ekle ya da uzat). Daha \xE7ok koltuk, o renkten daha \xE7ok yolcuyu ta\u015F\u0131r; bulmaca bozulmaz.</p>
        
        ${o.length?`<b>Kapasite</b><div class="opts" style="margin-top:6px">${o.join("")}</div>`:""}
        <p style="font-size:12px;color:#58649a">Bu seviyede kalan hak: <b>${t.left}</b></p>`),s.setFoot(n?`<button class="btn green" data-act="item">${nt("convert",22)} Uygula (1 De\u011Fi\u015Ftir hakk\u0131)</button>`:'<button class="btn gray" disabled>Bir se\xE7enek se\xE7</button>')};r(),this.onAct(s,{pickc:a=>{n={type:"color",v:+a.v},r()},pickg:()=>{n={type:"grow"},r()},picks:()=>{n={type:"seat"},r()},item:async()=>{await e.applyConvert(t.id,n,"item")&&s.close()}})}};var mf=i=>document.querySelector(i),To=class{constructor(t){this.G=t,this.el=mf("#tut"),this.active=!1,this.steps=[],this.i=-1,this.cur=null,this.t=0,this.level=0}start(t){let e=this.G;this.stop(),this.level=t;let n=e.state,s=e.lvl.stages[0].solution||[];t===1&&(this.steps=[{kind:"say",pos:"mid",text:"Ho\u015F geldin! Otob\xFCsleri do\u011Fru s\u0131rayla \xE7\u0131kararak renkli yolcular\u0131 ta\u015F\u0131yacaks\u0131n.",ok:"Ba\u015Fla"},{kind:"tap",bus:0,text:"Otob\xFCs\xFC hareket ettirmek i\xE7in parma\u011F\u0131nla s\xFCr\xFCkle. \xD6nce \xE7\u0131k\u0131\u015F yolunu a\xE7!"},{kind:"wait",ms:2600,text:"Yolcular\u0131n rengini kontrol et. K\u0131rm\u0131z\u0131 yolcular k\u0131rm\u0131z\u0131 otob\xFCse biner.",focus:"queue"},{kind:"idle",text:"Harika! Yolcular otob\xFCse biniyor."},{kind:"tap",bus:1,text:"\u015Eimdi mavi otob\xFCs\xFCn yolu a\xE7\u0131k. S\xFCr\xFCkle!"},{kind:"idle",text:"Yolcular y\xFCr\xFCyerek biniyor\u2026"},{kind:"tap",bus:2,text:"Son otob\xFCs! Hepsini ta\u015F\u0131."},{kind:"end"}]),this.active=!0,this.i=-1,this.G.scene.tapFilter=r=>this.allow(r),this.next()}stop(){this.active=!1,this.cur=null,this.el.hidden=!0,this.el.innerHTML="",this.G.scene&&(this.G.scene.tapFilter=null,this.G.scene.clearGlows?.())}allow(t){return this.active?this.cur?.kind==="tap"?t===this.cur.bus:!1:!0}next(){this.i++;let t=this.steps[this.i];if(this.cur=t,this.t=0,this.G.scene.clearGlows(),!t||t.kind==="end"){this.finish();return}this.render(t),t.kind==="tap"&&this.G.scene.setGlow(t.bus,16769126),t.kind==="wait"&&(this.timer=setTimeout(()=>this.next(),t.ms)),t.kind==="vip"&&(t.bus!==void 0&&this.G.scene.setGlow(t.bus,16766042),this.el.hidden=!0,this.G.ui.vipPreview(()=>{this.G.ui.toast("Alt\u0131n VIP otob\xFCse dokunarak deneyebilirsin (iste\u011Fe ba\u011Fl\u0131).","good"),this.next()})),t.kind==="idle"&&this.G.scene.isBusy()===!1&&!this.G.scene.isTraveling()&&this.G.scene.idleFired&&(this.t=-1)}render(t){this.el.hidden=!1;let e=t.text?`<div class="tut-bubble ${t.pos||"top"}">${t.text}${t.kind==="say"?`<button class="btn green" data-t="ok">${t.ok||"Tamam"}</button>`:""}${t.kind==="slot"?`<div class="row"><button class="btn gray" data-t="skip">Atla</button><button class="btn gold" data-t="show">${nt("ad",20)} G\xF6ster</button></div>`:""}</div>`:"";this.el.innerHTML=`${e}<div class="tut-ring" hidden><i></i></div><div class="tut-finger" hidden>${nt("finger",54)}</div>`,this.ring=this.el.querySelector(".tut-ring"),this.fing=this.el.querySelector(".tut-finger"),this.el.querySelectorAll("[data-t]").forEach(n=>n.addEventListener("click",()=>{this.G.sound.play("click"),n.dataset.t==="show"?(this.G.ui.slotOffer(()=>this.next()),this.el.hidden=!0):this.next()}))}onMove(t){this.active&&this.cur?.kind==="tap"&&t===this.cur.bus&&(this.G.scene.setGlow(t,null),this.next())}onIdle(){this.active&&this.cur?.kind==="idle"&&this.next()}finish(){let t=this.G;this.stop(),t.state&&this.level===2&&t.ui.toast("E\u011Fitim tamamland\u0131! Seviyeyi bitirmek i\xE7in devam et.","good")}update(t){if(!this.active||!this.cur)return;this.t+=t;let e=this.cur,n=this.G.scene;if(e.kind==="idle"&&this.t>.4&&n.idleFired&&!n.isBusy()){this.next();return}let s=null,r=null;if(e.kind==="tap"){let o=n.busScreenPos(e.bus),l=this.G.state.buses[e.bus];if(o&&l&&l.st==="board"){let c=ke[l.dir],h=n.busVis.get(e.bus).g.position,d=n.project(h.x+c.x*2.2,.6,h.z+c.y*2.2),u=this.t%1.5/1.5,f=u<.2?0:(u-.2)/.8;s={x:o.x+(d.x-o.x)*Math.min(1,f)*.45,y:o.y+(d.y-o.y)*Math.min(1,f)*.45,a:u<.12?u/.12:f>.85?(1-f)/.15:1,ring:o}}}else if(e.kind==="slot"){let o=this.G.state.slotOpen.findIndex(l=>!l);if(o>=0){let l=n.slotScreenPos(o),c=Math.sin(this.t*6)*6;s={x:l.x,y:l.y+c,a:1,ring:l}}}else if(e.focus==="slots"){let o=n.slotScreenPos(2);s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}else if(e.focus==="queue"){let o=n.queueScreenPos();s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}let a=mf("#stage").getBoundingClientRect();s&&this.fing?(this.fing.hidden=!1,this.fing.style.opacity=s.a,this.fing.style.transform=`translate(${a.left+s.x}px,${a.top+s.y}px)`,this.ring.hidden=!1,this.ring.style.transform=`translate(${a.left+s.ring.x}px,${a.top+s.ring.y}px)`):this.fing&&(this.fing.hidden=!0,this.ring.hidden=!0)}};var Av=[["G\xFCnl\xFCk \xF6d\xFCl\xFCn haz\u0131r! \u{1F381}","Bug\xFCnk\xFC jetonunu al, serini bozma."],["Otob\xFCsler seni bekliyor \u{1F68C}","G\xFCnl\xFCk giri\u015F \xF6d\xFCl\xFCn\xFC almay\u0131 unutma!"],["Yolcular durakta bekliyor","Gir, g\xFCnl\xFCk \xF6d\xFCl\xFCn\xFC topla ve bir seviye ge\xE7."]],Rv=[["Otob\xFCsler seni \xF6zledi \u{1F68C}","Yolcular bekliyor, yeni seviyeler haz\u0131r!"],["Durak kalabal\u0131k!","Birka\xE7 dakikan\u0131 ay\u0131r, bir bulmaca \xE7\xF6z."],["Uzun zamand\u0131r yoksun","G\xFCnl\xFCk \xF6d\xFCllerin ve yeni seviyeler seni bekliyor."]],Sh=(i,t,e,n)=>new Date(i.getFullYear(),i.getMonth(),i.getDate()+t,e,n,0,0);function gf({now:i,claimedToday:t,seed:e=0}){let n=[],s=(c,h)=>c[(e+h)%c.length],r=Sh(i,0,Hn.dailyHour,Hn.dailyMinute),a=!t&&r.getTime()>i.getTime()+6e4?r:Sh(i,1,Hn.dailyHour,Hn.dailyMinute),[o,l]=s(Av,0);return n.push({id:1001,at:a,title:o,body:l}),Hn.comebackDays.forEach((c,h)=>{let[d,u]=s(Rv,h);n.push({id:1002+h,at:Sh(i,c,Hn.comebackHour,0),title:d,body:u})}),n.filter(c=>c.at.getTime()>i.getTime())}var xf=[1001,1002,1003,1004];var Ao=class{constructor(t){this.G=t}get plugin(){return window.Capacitor?.Plugins?.LocalNotifications}available(){return!!this.plugin}async granted(){try{return(await this.plugin.checkPermissions()).display==="granted"}catch{return!1}}async request(){try{return(await this.plugin.requestPermissions()).display==="granted"}catch{return!1}}async reschedule(){if(!this.available())return!1;let t=this.G.save.data;try{if(await this.plugin.cancel({notifications:xf.map(n=>({id:n}))}),!t.notif.enabled||!await this.granted())return!1;let e=gf({now:new Date,claimedToday:!this.G.canClaimDaily(),seed:Math.floor(Date.now()/864e5)});return await this.plugin.schedule({notifications:e.map(n=>({id:n.id,title:n.title,body:n.body,smallIcon:Hn.smallIcon,schedule:{at:n.at,allowWhileIdle:!0}}))}),e.length}catch{return!1}}async enable(){let t=this.G.save.data;if(t.notif.asked=!0,!this.available())return this.G.save.save(!0),!1;let e=await this.request();return t.notif.enabled=e,this.G.save.save(!0),e&&await this.reschedule(),e}async disable(){let t=this.G.save.data;t.notif.enabled=!1,this.G.save.save(!0),await this.reschedule()}};var Eh={tr:{first:["Mehmet","Ahmet","Mustafa","Ali","Hasan","Emre","Burak","Can","Cem","Kaan","Efe","Arda","Yusuf","\xD6mer","Eren","Berk","Ay\u015Fe","Fatma","Zeynep","Elif","Merve","Esra","Selin","B\xFC\u015Fra","Derya","Ece","Deniz","Gizem","\u0130rem","Sena"],last:["Y\u0131lmaz","Kaya","Demir","\u015Eahin","\xC7elik","Ayd\u0131n","\xD6zt\xFCrk","Arslan","Do\u011Fan","K\u0131l\u0131\xE7","Aslan","\xC7etin","Ko\xE7","Kurt","\xD6zdemir","Polat","Y\u0131ld\u0131z","Tekin"]},en:{first:["James","Liam","Noah","Oliver","Jack","Ethan","Mason","Lucas","Henry","Leo","Emma","Olivia","Ava","Mia","Sophie","Grace","Chloe","Ella","Lily","Zoe"],last:["Smith","Brown","Taylor","Wilson","Davies","Evans","Walker","Hall","Wright","Green","Baker","Clark","Turner","Hill"]},de:{first:["Lukas","Jonas","Leon","Finn","Paul","Felix","Max","Tim","Anna","Lena","Marie","Laura","Julia","Lea","Sophie","Emma"],last:["M\xFCller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Hoffmann","Koch"]},es:{first:["Santiago","Mateo","Diego","Javier","Carlos","Pablo","Sergio","Alejandro","Mar\xEDa","Luc\xEDa","Carmen","Paula","Sof\xEDa","Elena","Marta"],last:["Garc\xEDa","Rodr\xEDguez","L\xF3pez","Mart\xEDnez","S\xE1nchez","P\xE9rez","G\xF3mez","Fern\xE1ndez","Ruiz","D\xEDaz"]},fr:{first:["Lucas","Hugo","Louis","Jules","Gabriel","Th\xE9o","Nathan","Emma","L\xE9a","Chlo\xE9","Camille","Manon","In\xE8s","Louise"],last:["Martin","Bernard","Dubois","Thomas","Robert","Richard","Petit","Durand","Leroy","Moreau"]},pt:{first:["Jo\xE3o","Pedro","Lucas","Gabriel","Rafael","Tiago","Maria","Ana","Beatriz","Julia","Larissa","Mariana"],last:["Silva","Santos","Oliveira","Souza","Costa","Pereira","Almeida","Ferreira"]},ru:{first:["Aleksandr","Dmitri","Ivan","Maksim","Nikita","Artem","Sergey","Anna","Maria","Olga","Elena","Natasha","Katya","Irina"],last:["Ivanov","Smirnov","Kuznetsov","Popov","Sokolov","Lebedev","Kozlov","Novikov"]},ar:{first:["Omar","Ahmed","Khaled","Youssef","Hassan","Ali","Karim","Sara","Laila","Nour","Mariam","Hana","Yasmin"],last:["Haddad","Nasser","Farouk","Mansour","Saleh","Khoury"]}},yf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ı/g,"i").replace(/İ/g,"I").replace(/ş/g,"s").replace(/Ş/g,"S").replace(/ğ/g,"g").replace(/Ğ/g,"G"),vf=["","xx","pro","oyun","gamer","king","star","cool"];function _f(i){let t=String(i||"en").toLowerCase().slice(0,2);return Eh[t]?t:"en"}function Cv(i,t){let e=i()<(t==="tr"?.8:.85),n=Object.keys(Eh),s=e?t:n[i.int(n.length)],r=Eh[s],a=r.first[i.int(r.first.length)],o=r.last[i.int(r.last.length)],l=yf(a),c=yf(o),h=String(i.range(70,99)),d=String(i.range(1,99)),u=[()=>`${a} ${o[0]}.`,()=>`${a}`,()=>`${l}${c}`,()=>`${l}_${c[0]}`,()=>`${l.toLowerCase()}${h}`,()=>`${l.toLowerCase()}.${c.toLowerCase()}`,()=>`${l}${d}`,()=>`${l[0]}${c}`.toLowerCase()+d,()=>`${a} ${o}`,()=>`${l}_${vf[1+i.int(vf.length-1)]}`];return u[i.int(u.length)]().slice(0,20)}function bf({weekKey:i,now:t,weekStart:e,weekEnd:n,lang:s="en",count:r=30}){let a=7;for(let d of String(i))a=Math.imul(a,31)+d.charCodeAt(0)>>>0;let o=mi(a),l=Math.min(1,Math.max(.08,(t-e)/(n-e))),c=new Set,h=[];for(;h.length<r;){let d=Cv(o,s);if(c.has(d))continue;c.add(d);let u=h.length/r,f=Math.round(3600*Math.pow(1-u,1.7)+150+o.int(160));h.push({name:d,score:Math.round(f*l)})}return h.sort((d,u)=>u.score-d.score)}var Th=class{constructor(t){this.save=t,this.mode="local"}get online(){return!1}async init(){return{ok:!0}}async claimDaily(){return{ok:!0,local:!0}}async submitScore({level:t,stars:e,extra:n}){let s=this.save.data,r=oe.weekKey();s.lb.week!==r&&(s.lb={week:r,levels:{}});let a=Mo({stars:e,extra:n});return a>(s.lb.levels[t]||0)&&(s.lb.levels[t]=a),this.save.save(),{ok:!0}}weeklyTotal(){let t=this.save.data;return t.lb.week===oe.weekKey()?Object.values(t.lb.levels).reduce((e,n)=>e+n,0):0}async leaderboard(){let t=this.weeklyTotal(),e=this.save.data.account.name||"Sen",n=oe.now(),s=hf(n,Ke.dayOffsetMin),a=bf({weekKey:oe.weekKey(),now:n,weekStart:s-7*864e5,weekEnd:s,lang:_f(globalThis.navigator?.language)}).map(h=>({name:h.name,score:h.score}));t&&a.push({name:e,score:t,you:!0}),a.sort((h,d)=>d.score-h.score||(h.you?-1:1));let o=a.map((h,d)=>({...h,rank:d+1})),l=o.find(h=>h.you),c=o.slice(0,20);return l&&l.rank>20&&c.push(l),{ok:!0,local:!0,simulated:!0,week:oe.weekKey(),endsAt:s,rewards:Ke.weeklyRewards,entries:c,me:{rank:l?l.rank:null,score:t}}}async sync(){return{ok:!0,local:!0}}async inbox(){return{ok:!0,items:[]}}async claimInbox(){return{ok:!0}}async setName(t){return this.save.data.account.name=String(t||"").slice(0,20),this.save.save(),{ok:!0,name:this.save.data.account.name}}},Ah=class{constructor(t,e={}){this.save=t,this.mode="http",this.base=(e.baseUrl||Ke.baseUrl).replace(/\/$/,""),this.fetch=e.fetch||((...n)=>globalThis.fetch(...n)),this._online=!1}get online(){return this._online}async req(t,e,n,s=!0){let r=typeof AbortController<"u"?new AbortController:null,a=setTimeout(()=>r?.abort(),Ke.timeoutMs);try{let o={"content-type":"application/json"};s&&this.save.data.account.token&&(o.authorization="Bearer "+this.save.data.account.token);let l=performance.now(),c=await this.fetch(this.base+e,{method:t,headers:o,body:n?JSON.stringify(n):void 0,signal:r?.signal}),h=await c.json().catch(()=>({}));return typeof h.serverNow=="number"&&oe.setServerTime(h.serverNow+(performance.now()-l)/2),this._online=!0,{status:c.status,...h,ok:c.ok&&h.ok!==!1}}catch(o){return this._online=!1,{ok:!1,reason:"network",error:String(o?.message||o)}}finally{clearTimeout(a)}}async init(){let t=this.save.data.account;if(!t.uid||!t.token){let e=await this.req("POST","/v1/auth/guest",{name:t.name||void 0},!1);if(!e.ok)return e;t.uid=e.uid,t.token=e.token,t.name=e.name||t.name,this.save.save(!0)}else{let e=await this.req("GET","/v1/time",null,!1);if(!e.ok)return e}return{ok:!0}}async claimDaily(){return this.req("POST","/v1/daily/claim")}async submitScore(t){return this.req("POST","/v1/scores",t)}async leaderboard(){return this.req("GET","/v1/leaderboard/weekly")}async sync(t){return this.req("PUT","/v1/me",t)}async inbox(){return this.req("GET","/v1/inbox")}async claimInbox(t){return this.req("POST","/v1/inbox/"+encodeURIComponent(t)+"/claim")}async setName(t){let e=await this.req("POST","/v1/me/name",{name:t});return e.ok&&(this.save.data.account.name=e.name,this.save.save()),e}};function Mf(i,t){return Ke.mode==="http"?new Ah(i,t):new Th(i)}var de=i=>document.querySelector(i),Pv=[["undo","Geri Al","undo"],["hint","\u0130pucu","hint"],["recall","Geri \xC7a\u011F\u0131r","recall"],["call","\xC7a\u011F\u0131r","call"],["convert","De\u011Fi\u015Ftir","convert"],["shuffle","Kar\u0131\u015Ft\u0131r","shuffle"],["vipcall","VIP","vip"]],Ro=class{constructor(t={}){this.save=new xo,oe.init(this.save),this.backend=Mf(this.save),this.sound=new yo,this.ui=new Eo(this),this.ads=new vo(this.ui),this.iap=new _o(this),this.notifier=new Ao(this),this.skipInterstitial=!1;let e=this.save.data;this.sound.setSound(e.settings.sound),this.sound.setVibe(e.settings.vibe),this.scene=new po(de("#stage"),{quality:e.settings.quality,preserve:!!t.preserve}),this.tut=new To(this),this.phase="menu",this.paused=!1,this.adOpen=!1,this.mode=null,this.levelCache=new Map,this.snapshots=[],this.hintTimer=null,Mh(this.save),this.save.save(),this.bindScene(),this.bindHud(),this.ui.bindMenu(),this.goMenu(!0),this.goOnline(),document.addEventListener("visibilitychange",()=>{document.hidden||(oe.tick(),this.recordLogin(),this.syncInbox(),this.phase==="menu"&&this.ui.renderMenu())})}async goOnline(){try{await this.backend.init()}catch{}this.recordLogin(),this.syncInbox(),this.pushProfile(),this.phase==="menu"&&this.ui.renderMenu()}profileSnapshot(){let t=this.save.data;return{coins:t.coins,level:t.level,perm:t.perm.slots,powerups:t.powerups,owned:t.owned,stats:t.stats,stars:Object.values(t.completed).reduce((e,n)=>e+n,0)}}pushProfile(){this.backend.online&&this.backend.sync(this.profileSnapshot()).catch(()=>{})}async syncInbox(){if(!this.backend.online)return;let t=await this.backend.inbox();if(!t.ok)return;let e=this.save.data;for(let n of t.items||[]){if(e.inboxDone.includes(n.id)){await this.backend.claimInbox(n.id);continue}if(!(await this.backend.claimInbox(n.id)).ok)continue;e.inboxDone.push(n.id);let r=[];n.coins&&(e.coins+=n.coins,e.stats.coinsEarned+=n.coins,r.push(`+${n.coins} jeton`));for(let[a,o]of Object.entries(n.powerups||{}))a in e.powerups&&(e.powerups[a]+=o,r.push(`+${o} ${rn[a]?.name||a}`));for(let[a,o]of Object.entries(n.items||{}))for(let l of o)e.owned[a]&&En[a]?.some(c=>c.id===l)&&!e.owned[a].includes(l)&&(e.owned[a].push(l),r.push(En[a].find(c=>c.id===l).name));this.save.save(!0),this.ui.setCoins(e.coins,!0),this.ui.toast(`${n.note||"Hediye"}: ${r.join(", ")||"al\u0131nd\u0131"}`,"good"),this.sound.play("coin")}this.renderPowerBar()}recordLogin(){if(!oe.trusted())return;let t=this.save.data.weekly,e=oe.weekKey(),n=oe.weekday();t.week!==e&&(t.week=e,t.days=[],t.claimed=!1),t.days.includes(n)||(t.days.push(n),this.save.save())}canClaimWeekly(){let t=this.save.data.weekly;return oe.trusted()&&t.week===oe.weekKey()&&!t.claimed&&t.days.length>=sn.need}claimWeekly(){if(!this.canClaimWeekly())return!1;let t=this.save.data;return t.weekly.claimed=!0,this.addCoins(sn.coins,!1),t.powerups[sn.power[0]]+=sn.power[1],this.save.save(!0),this.sound.play("coin"),this.ui.toast(`Haftal\u0131k sand\u0131k: +${sn.coins} jeton, +${sn.power[1]} ${rn[sn.power[0]].name}!`,"good"),this.ui.renderMenu(),!0}peekLevel(t){return this.levelCache.has(t)||this.levelCache.set(t,ef(t)),this.levelCache.get(t)}bindScene(){let t=this.scene;t.sfx=e=>this.sound.play(e),t.onBusTap=e=>this.handleTap(e),t.onTapRejected=e=>{this.ui.toast("\xD6nce parma\u011F\u0131n g\xF6sterdi\u011Fi otob\xFCs\xFC s\xFCr\xFCkle."),t.shakeBus(e),this.sound.play("error")},t.onSlotTap=e=>this.handleSlotTap(e),t.onIdle=()=>this.onIdle(),t.onBoarded=(e,n)=>{let s=this.save.data.stats;s.passengers++,this.emit("passenger",1,!1),this.refreshProgress()},t.onBusDepart=()=>{this.save.data.stats.buses++,this.emit("busFull",1,!1)},t.onBusArrive=e=>{e.slot==="V"&&!this.vipCounted&&(this.vipCounted=!0,this.save.data.stats.vip++,this.emit("vip",1),this.ui.toast("VIP otob\xFCs kendi rengindeki yolcular\u0131 kuyru\u011Fun her yerinden al\u0131r!","good"))}}bindHud(){de("#btnPause").innerHTML=nt("pause",26),de("#btnShop").innerHTML=nt("shop",26),de("#btnShop").addEventListener("click",()=>{this.phase==="play"&&!this.paused&&(this.sound.play("click"),this.ui.shop("power"))}),de("#btnPause").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.pause())}),de("#hudCoins").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.ui.shop("power"))}),de("#chipMoves").addEventListener("click",()=>this.offerMoves()),de("#chipTime").addEventListener("click",()=>this.offerTime()),de("#powerBar").addEventListener("click",t=>{let e=t.target.closest("[data-p]");e&&this.onPower(e.dataset.p)}),de("#modeBanner").addEventListener("click",t=>{t.target.closest("[data-cancel]")&&(this.setMode(null),this.scene.idleFired=!1)})}renderPowerBar(){let t=this.save.data;de("#powerBar").innerHTML=Pv.map(([e,n,s])=>{let r="";if(["undo","hint","recall","call","convert","vipcall","shuffle"].includes(e)){let a=t.powerups[e==="vipcall"?"vip":e];r=`<span class="cnt ${a?"":"zero"}">${a||"+"}</span>`}else r=`<span class="cnt ad">${nt("ad",12)}</span>`;return`<button class="pw ${e}" data-p="${e}" aria-label="${n}"><span class="btn">${nt(s,28)}</span>${r}<span>${n}</span></button>`}).join("")}refreshHud(){let t=this.lvl;t&&(de("#lvlName").textContent="SEV\u0130YE "+this.levelN,de("#lvlDiff").textContent=wh(t.difficulty)+(t.stages.length>1?` \xB7 A\u015EAMA ${this.stageIdx+1}/${t.stages.length}`:""),this.ui.setCoins(this.save.data.coins),this.renderPowerBar(),this.refreshProgress(),this.refreshChips())}refreshProgress(){if(!this.lvl||!this.state)return;let t=this.lvl.stages.reduce((n,s)=>n+s.queue.length,0),e=this.prevPassengers+this.state.qi;de("#progBar").style.width=(t?e/t*100:0)+"%",de("#progTxt").textContent=`${e}/${t} yolcu`}refreshChips(){let t=de("#chipMoves"),e=de("#chipTime");if(this.state&&this.state.moveLimit!==null){t.hidden=!1;let n=this.state.moveLimit-this.state.moves;t.innerHTML=`${nt("play",14)} Hamle ${this.state.moves}/${this.state.moveLimit}`,t.classList.toggle("warn",n<=2)}else t.hidden=!0;if(this.refreshStars(),this.timeLeft!==null){e.hidden=!1;let n=Math.max(0,Math.ceil(this.timeLeft));e.innerHTML=`${nt("clock",14)} ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,e.classList.toggle("warn",n<=15)}else e.hidden=!0}refreshStars(){let t=de("#chipStars");if(!t)return;if(!this.lvl||this.neededMoves===void 0){t.hidden=!0;return}let e=_h(this.extraSoFar(),this.neededMoves);t.hidden=!1,t.dataset.stars=e.stars,t.innerHTML=`<span class="st">${[1,2,3].map(n=>nt("star",15,n<=e.stars?"on":"")).join("")}</span><b>${this.moveCount||0}</b>`,t.title=`3 y\u0131ld\u0131z i\xE7in en fazla ${e.t3} fazla hamle, 2 y\u0131ld\u0131z i\xE7in ${e.t2}`}extraSoFar(){let t=(this.prevNormal||0)+(this.state?this.state.buses.filter(e=>!e.vip&&e.st!=="board").length:0);return Math.max(0,(this.moveCount||0)-t)}countMove(t){this.moveCount++,t!==void 0&&this.moveLog.length<400&&this.moveLog.push(t),this.refreshStars()}setMode(t,e){this.mode=t;let n=de("#modeBanner");if(this.scene.clearGlows(),!t){n.hidden=!0;return}if(n.hidden=!1,n.innerHTML=`<span>${e}</span><button data-cancel>\u0130ptal</button>`,t==="recall")for(let s of this.state.buses)s.st==="parked"&&s.arrived&&this.scene.setGlow(s.id,8257472);if(t==="convert")for(let s of this.state.buses)s.st==="board"&&!s.vip&&this.scene.setGlow(s.id,13215743);if(t==="vip")for(let s of this.state.buses)s.st==="board"&&this.scene.setGlow(s.id,16766042)}goMenu(t=!1){this.tut.stop(),this.ui.closeAll(),this.setMode(null),this.phase="menu",this.paused=!1,de("#hud").hidden=!0,de("#app").classList.add("menu-mode"),de("#menu").hidden=!1,this.cosApply();let e=this.save.data.level,n=this.peekLevel(e);this.state=kr(n.stages[0],{slotsOpen:Math.min(7,(n.slotsBase||4)+this.save.data.perm.slots)}),this.scene.loadStage(this.state),this.lvl=null,this.ui.renderMenu(),t&&setTimeout(()=>{this.phase==="menu"&&this.canClaimDaily()&&!this.ui.hasModal&&this.ui.daily()},900)}cosApply(){this.scene.setCosmetics(this.save.data.equipped)}startLevel(t){this.ui.closeAll(),this.sound.unlock(),this.setMode(null);let e=this.save.data;this.levelN=t,this.lvl=this.peekLevel(t),this.stageIdx=0,this.assists=0,this.prevPassengers=0,this.vipCounted=!1,this.paused=!1,this.moveCount=0,this.prevNormal=0,this.moveLog=[],this.revives=0,this.neededMoves=this.lvl.stages.reduce((s,r)=>s+r.buses.filter(a=>!a.v).length,0),e.temp.level!==t&&(e.temp={level:t,slots:[],conv:0,vipCalls:0}),this.extraMoves=0,this.timeLeft=this.lvl.timeLimit??null,this.cosApply(),this.beginStage(0,null),this.recordLogin(),this.phase="play",de("#menu").hidden=!0,de("#hud").hidden=!1,de("#app").classList.remove("menu-mode"),this.refreshHud();let n=e.tutorial.enabled;t===1&&n&&!e.tutorial.l1?this.tut.start(1):this.tut.stop(),this.maybeVipIntro(),this.save.save()}beginStage(t,e){this.finalPending=!1,this.pendingTaps=[];let n=this.lvl,s=n.stages[t],r=this.save.data,a=s.slots??n.slotsBase??4,o=kr(s,{slotsOpen:Math.min(7,a+r.perm.slots),moveLimit:n.moveLimit?n.moveLimit+this.extraMoves:null});e&&e.forEach((l,c)=>{l&&(o.slotOpen[c]=!0)});for(let l of r.temp.slots)o.slotOpen[l]=!0;this.state=o,this.snapshots=[],this.stageIdx=t,this.scene.forceDepart=!1,this.scene.loadStage(o,r.temp.slots),this.refreshHud()}maybeVipIntro(){let t=this.save.data;t.tutorial.vip||!t.tutorial.enabled||this.tut.active||this.levelN<2||setTimeout(()=>{t.tutorial.vip||this.phase!=="play"||this.ui.hasModal||this.paused||this.tut.active||(t.tutorial.vip=!0,this.save.save(!0),this.ui.vipPreview())},1200)}restart(){this.ui.closeAll();let t=this.save.data;t.temp={level:this.levelN,slots:[],conv:0,vipCalls:0},this.startLevel(this.levelN)}async nextLevel(){try{await this.levelBreak()}catch{}this.startLevel(this.levelN+1)}adDue(t=Date.now()){let e=this.save.data.ads;return!e.removed&&Me.mode!=="off"&&this.levelN>=Us.startAfterLevel&&e.since>=e.nextAt&&t-e.last>=Us.minGapMs&&!this.skipInterstitial}removeAdsOfferDue(){let t=this.save.data.ads,e=this.levelN;return!t.removed&&this.iap.available()&&e>=Ns.firstAfterLevel&&t.offers<Ns.maxOffers&&e-t.offerLevel>=Ns.everyLevels&&t.offerDay!==gi()}async levelBreak(){let t=this.save.data.ads,e=this.save.data.notif;if(!e.asked&&this.levelN>=2&&this.notifier.available())return e.asked=!0,this.save.save(!0),await this.ui.confirm({title:"G\xFCnl\xFCk \xF6d\xFCl hat\u0131rlatmas\u0131",text:"G\xFCnl\xFCk \xF6d\xFCl\xFCn\xFC alman\u0131 ve uzun s\xFCre ara verirsen oyuna d\xF6nmeni hat\u0131rlatan nadir bildirimler g\xF6nderelim mi? Ayarlardan istedi\u011Fin zaman kapatabilirsin.",yes:"Evet, hat\u0131rlat",no:"Hay\u0131r"})&&await this.notifier.enable(),"notif";if(this.adDue()){this.adOpen=!0;let n=await this.ads.showInterstitial("level-break");return this.adOpen=!1,t.since=0,t.nextAt=Us.every[0]+Math.floor(Math.random()*(Us.every[1]-Us.every[0]+1)),n&&(t.last=Date.now()),this.save.save(!0),"ad"}return this.removeAdsOfferDue()?(t.offers++,t.offerDay=gi(),t.offerLevel=this.levelN,this.save.save(!0),await this.ui.removeAdsOffer(),"offer"):null}async buyRemoveAds(){let t=await this.iap.buyRemoveAds();return this.ui.toast(t.ok?"Reklamlar kald\u0131r\u0131ld\u0131. Te\u015Fekk\xFCrler!":t.reason==="unavailable"?"Ger\xE7ek parayla sat\u0131n alma bu s\xFCr\xFCmde kapal\u0131.":"Sat\u0131n alma tamamlanmad\u0131.",t.ok?"good":"bad"),t.ok}pause(){this.paused=!0,this.ui.pause()}resume(){this.paused=!1}frame(t){this.scene.inputLocked=this.phase!=="play"||this.ui.hasModal||this.paused,this.scene.alertEnabled=this.phase==="play"&&!this.paused&&!this.ui.hasModal,this.scene.update(this.paused?0:t),this.phase==="play"&&!this.paused&&!this.adOpen&&!this.ui.hasModal&&this.timeLeft!==null&&(this.timeLeft-=t,this.refreshChipsThrottled(t),this.timeLeft<=0&&(this.timeLeft=0,this.refreshChips(),this.fail("time"))),this.phase==="play"&&this.tut.update(t),this.pendingTaps?.length&&this.phase==="play"&&!this.paused&&!this.mode&&!this.ui.hasModal&&!this.scene.isBusy()?this.handleTap(this.pendingTaps.shift()):this.pendingTaps?.length&&this.phase!=="play"&&(this.pendingTaps.length=0)}refreshChipsThrottled(t){this._ct=(this._ct||0)+t,this._ct>.25&&(this._ct=0,this.refreshChips())}handleTap(t){if(this.phase!=="play"||this.paused)return;if(this.mode==="convert"){this.openConvert(t);return}if(this.mode==="call"){this.openCall(t);return}if(this.mode==="vip"){this.doVipSend(t);return}if(this.mode==="recall")return;let e=this.state,n=pn(e),s=lo(e,t);if(this.scene.clearGlows(),s.ok)this.countMove(t),this.snapshots.push(n),this.snapshots.length>40&&this.snapshots.shift(),this.scene.startDriveToSlot(t,s.slot),this.tut.onMove(t),this.refreshChips(),e.buses[t].vip&&this.ui.toast("VIP otob\xFCs yola \xE7\u0131kt\u0131!","good");else if(s.reason==="blocked"){this.countMove(t),this.scene.bump(t,s.blockers);for(let r of s.blockers)this.scene.flashBus(r,16731469,.7);this.refreshChips(),e.moveLimit!==null&&(this.scene.idleFired=!1)}else if(s.reason==="noslot"){if(this.scene.isBusy()){this.queueTap(t);return}this.sound.play("error"),this.ui.toast("Park yerleri dolu! + alanlardan ek yer a\xE7abilirsin.","bad"),this.scene.shakeBus(t)}else s.reason==="vipfull"?(this.sound.play("error"),this.ui.toast("VIP alan\u0131 dolu.","bad")):s.reason==="limit"&&(this.scene.idleFired=!1)}queueTap(t){let e=this.state.buses[t];this.pendingTaps||(this.pendingTaps=[]),!(!e||e.st!=="board"||this.pendingTaps.includes(t)||this.pendingTaps.length>=3)&&(this.pendingTaps.push(t),this.scene.flashBus(t,8118891,.35))}handleSlotTap(t){if(this.phase!=="play"||this.paused)return;let e=this.state;if(this.mode==="recall"){let n=t==="V"?e.vipSlot:e.slots[t];if(n==null){this.ui.toast("Bu alanda otob\xFCs yok.");return}this.doRecall(n);return}if(t==="V"){if(this.mode==="vip"){this.setMode(null);return}if(e.vipSlot!==null){this.ui.toast("VIP alan\u0131 dolu. Otob\xFCs dolup kalk\u0131nca tekrar kullanabilirsin.");return}this.sound.play("click"),this.onPower("vipcall");return}if(!e.slotOpen[t]){if(this.tut.active&&this.tut.cur?.kind!=="slot")return;this.sound.play("click"),this.ui.slotOffer()}}onIdle(){if(this.phase==="transition"){this.state.buses.some(e=>e.st==="parked")||(this.finalPending?(this.finalPending=!1,this.levelComplete()):this.nextStage());return}if(this.phase!=="play")return;this.tut.onIdle();let t=co(this.state);t.status==="won"?this.stageDone():t.status==="lost"&&this.fail(t.reason)}stageDone(){this.stageIdx+1<this.lvl.stages.length?(this.phase="transition",this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop(),this.sound.play("coin"),this.ui.toast("A\u015Fama tamamland\u0131!","good"),this.state.buses.some(t=>t.st==="parked")||this.nextStage()):this.state.buses.some(t=>t.st==="parked")?(this.phase="transition",this.finalPending=!0,this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop()):this.levelComplete()}nextStage(){let t=this.state.slotOpen.slice();this.prevPassengers+=this.state.queue.length,this.prevNormal+=this.state.buses.filter(n=>!n.vip).length;let e=de("#stageBanner");e.hidden=!1,e.textContent=`A\u015EAMA ${this.stageIdx+2}/${this.lvl.stages.length}`,setTimeout(()=>{e.hidden=!0},1800),this.beginStage(this.stageIdx+1,t),this.phase="play",this.scene.idleFired=!0}fail(t){if(this.phase!=="play")return;this.pendingTaps=[],this.phase="ended",this.tut.stop(),this.setMode(null),this.sound.play("lose");let e=this.state,n=Vn-this.revives,s=Me.mode!=="off",r=e.slotOpen.some(a=>!a)&&s&&n>0;setTimeout(()=>{this.phase==="ended"&&this.ui.fail({reason:t,canSlotAd:r,canUndo:this.snapshots.length>0&&s&&n>0,revivesLeft:n,adOk:s,canVip:e.vipSlot===null&&e.buses.some(a=>a.st==="board")})},600)}reviveAfter(){this.revives++,this.phase="play",this.scene.idleFired=!1,this.refreshHud()}async reviveUndo(){if(this.revives>=Vn)return this.ui.toast("Geri alma hakk\u0131n bitti. Seviyeyi yeniden ba\u015Flatmal\u0131s\u0131n.","bad"),!1;if(!this.snapshots.length)return this.ui.toast("Geri al\u0131nacak hamle yok."),!1;if(!await this.requestAd("revive-undo"))return!1;let t=this.save.data,e=null;for(;this.snapshots.length;){let n=this.snapshots.pop();e=n;let s=$s(n,{useVip:!1,maxNodes:2e5});if(s.solved||s.aborted||$s(n,{useVip:!0,maxNodes:2e5}).solved)break}for(let n of t.temp.slots)e.slotOpen[n]=!0;return this.state=e,this.scene.loadStage(e,t.temp.slots),this.refreshHud(),this.sound.play("whoosh"),this.scene.fx.ring(0,-5.2,8246271,.5,5,.8),!0}levelComplete(){this.phase="ended",this.tut.stop(),this.setMode(null);let t=this.save.data,e=this.levelN;this.scene.celebrate();let{stars:n,extra:s,t3:r,t2:a}=uf(this.moveCount,this.neededMoves),o=15+n*5+Math.min(15,Math.floor(e/3));t.completed[e]=Math.max(t.completed[e]||0,n),t.best[e]=t.best[e]?Math.min(t.best[e],this.moveCount):this.moveCount,t.level=Math.max(t.level,e+1),t.stats.levels++,n===3&&t.stats.threeStars++,t.ads.since++,this.skipInterstitial=!1;let l=null;e%5===0&&(l=["undo","hint","recall","call","extraSlot"][e/5%5],t.powerups[l]++),e===1&&(t.tutorial.l1=!0),e===2&&(t.tutorial.l2=!0),this.emit("level",1,!1),n===3&&this.emit("threeStar",1,!1),this.addCoins(o,!1),this.save.save(!0);let c={level:e,moves:this.moveCount,needed:this.neededMoves,stars:n,extra:s,log:this.moveLog};Promise.resolve(this.backend.submitScore(c)).then(()=>this.pushProfile()).catch(()=>{}),setTimeout(()=>this.ui.result({level:e,stars:n,coins:o,canDouble:Me.mode!=="off",rewardPower:l,moves:this.moveCount,needed:this.neededMoves,extra:s,t3:r,t2:a,best:t.best[e],score:Mo({stars:n,extra:s})}),1800)}addCoins(t,e=!0){let n=this.save.data;if(n.coins+=t,n.stats.coinsEarned+=t,this.ui.setCoins(n.coins,!0),this.save.save(),e){let s=this.ui.coinPos();this.ui.floatText("+"+t,s.x,s.y+20,"coin"),this.sound.play("coin")}}spendCoins(t){let e=this.save.data;return e.coins<t?(this.ui.toast("Yeterli jetonun yok!","bad"),this.sound.play("error"),!1):(e.coins-=t,this.ui.setCoins(e.coins,!0),this.save.save(),!0)}buyItem(t,e){let n=En[t].find(r=>r.id===e),s=this.save.data;return!n||s.owned[t].includes(e)||!this.spendCoins(n.price)?!1:(s.owned[t].push(e),s.equipped[t]=e,this.cosApply(),this.save.save(!0),this.ui.toast(`${n.name} sat\u0131n al\u0131nd\u0131 ve kullan\u0131ma al\u0131nd\u0131!`,"good"),this.sound.play("unlock"),!0)}equip(t,e){let n=this.save.data;n.owned[t].includes(e)&&(n.equipped[t]=e,this.cosApply(),this.save.save(!0),this.phase==="menu"&&this.scene.loadStage(this.state))}buyPower(t){let e=rn[t];return this.spendCoins(e.price)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${e.name}`,"good"),!0):!1}async adPower(t){return await this.requestAd("power-"+t)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${rn[t].name}`,"good"),!0):!1}buyPermSlot(t=!1){let e=this.save.data,n=e.perm.slots;if(n>=3||!this.spendCoins(ie.permSlot[n]))return!1;if(e.perm.slots++,e.stats.slots++,this.emit("slot",1,!1),this.phase==="play"&&this.state){let s=dh(this.state);s>=0&&this.scene.unlockSlotFx(s,!1)}return this.save.save(!0),this.ui.toast("Kal\u0131c\u0131 Premium park yeri a\xE7\u0131ld\u0131!","good"),!0}async requestAd(t){if(!this.ads.available())return this.ui.toast("Reklam servisi haz\u0131r de\u011Fil. \xD6d\xFCl verilmedi.","bad"),!1;this.adOpen=!0;let e=await this.ads.showRewarded(t);return this.adOpen=!1,e.ok?this.ads.consume(e.token)?(this.save.data.stats.ads++,this.save.save(),!0):!1:(this.ui.toast(e.reason==="cancelled"?"Reklam tamamlanmad\u0131, \xF6d\xFCl verilmedi.":"Reklam y\xFCklenemedi. Daha sonra tekrar dene.","bad"),!1)}async buyCoinPack(t){let e=Fi.packs.find(s=>s.id===t);if(!e)return!1;let n=await this.iap.buy(e);return n.ok?(this.ui.setCoins(this.save.data.coins,!0),this.sound.play("coin"),this.ui.toast(`+${e.coins} jeton!`,"good"),!0):(this.ui.toast(n.reason==="unavailable"?"Ger\xE7ek parayla sat\u0131n alma bu s\xFCr\xFCmde kapal\u0131.":"Sat\u0131n alma tamamlanmad\u0131, jeton verilmedi.","bad"),!1)}async doubleReward(t){return await this.requestAd("double-reward")?(this.skipInterstitial=!0,this.addCoins(t,!1),this.sound.play("coin"),!0):!1}canClaimDaily(){return oe.tick(),oe.trusted()&&gi()>this.save.data.daily.lastClaim}nextDailyIndex(){let t=this.save.data.daily;return t.lastClaim&&pf(t.lastClaim,gi())===1?t.streak%7:0}async claimDaily(){if(!oe.trusted())return this.ui.toast(oe.why(),"bad"),!1;if(!this.canClaimDaily())return!1;let t=this.save.data,e=this.nextDailyIndex(),n=gi(),s=e+1;if(this.backend.mode==="http"){let a=await this.backend.claimDaily();if(!a.ok)return this.ui.toast(a.reason==="already"?"Bug\xFCnk\xFC \xF6d\xFCl zaten al\u0131nd\u0131.":"Sunucuya ula\u015F\u0131lamad\u0131, g\xFCnl\xFCk \xF6d\xFCl verilmedi.","bad"),!1;e=a.index,n=a.day,s=a.streak}let r=wo[e];return t.daily.streak=s,t.daily.lastClaim=n,this.addCoins(r.coins,!1),r.power&&(t.powerups[r.power[0]]+=r.power[1]),this.recordLogin(),this.save.save(!0),this.sound.play("coin"),this.ui.toast(`+${r.coins} jeton${r.power?` ve +${r.power[1]} ${rn[r.power[0]].name}`:""}!`,"good"),this.ui.renderMenu(),!0}emit(t,e=1,n=!0){let s=this.save.data.quests;Mh(this.save);for(let r of s.list){let a=xi(r.id);a&&a.ev===t&&(s.progress[r.id]=(s.progress[r.id]||0)+e)}n&&this.save.save()}hasClaimableQuest(){let t=this.save.data;return t.quests.list.some(e=>{let n=xi(e.id);return(t.quests.progress[e.id]||0)>=n.goal&&!t.quests.claimed[e.id]})||Yi.some(e=>(t.stats[e.stat]||0)>=e.goal&&!t.ach.claimed[e.id])}claimQuest(t){let e=this.save.data,n=xi(t);!n||e.quests.claimed[t]||(e.quests.progress[t]||0)<n.goal||(e.quests.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}claimableCount(t){let e=this.save.data;return t==="q"?e.quests.list.filter(n=>{let s=xi(n.id);return s&&!e.quests.claimed[n.id]&&(e.quests.progress[n.id]||0)>=s.goal}).length:Yi.filter(n=>!e.ach.claimed[n.id]&&(e.stats[n.stat]||0)>=n.goal).length}claimAll(t){let e=this.save.data,n=0,s=0;if(t==="q")for(let r of e.quests.list){let a=xi(r.id);a&&!e.quests.claimed[r.id]&&(e.quests.progress[r.id]||0)>=a.goal&&(e.quests.claimed[r.id]=!0,n+=a.reward,s++)}else for(let r of Yi)!e.ach.claimed[r.id]&&(e.stats[r.stat]||0)>=r.goal&&(e.ach.claimed[r.id]=!0,n+=r.reward,s++);return s?(this.addCoins(n,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu(),this.ui.toast(`${s} \xF6d\xFCl al\u0131nd\u0131: +${n} jeton`,"good"),n):0}claimAch(t){let e=this.save.data,n=Yi.find(s=>s.id===t);!n||e.ach.claimed[t]||(e.stats[n.stat]||0)<n.goal||(e.ach.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}applySettings(){let t=this.save.data.settings;this.sound.setSound(t.sound),this.sound.setVibe(t.vibe),this.scene.setQuality(t.quality),this.save.save(!0)}resetTutorial(){let t=this.save.data.tutorial;t.l1=!1,t.l2=!1,t.vip=!1,t.enabled=!0,this.save.save(!0)}resetProgress(){this.save.reset(),this.sound.setSound(!0),this.goMenu(),this.ui.toast("\u0130lerleme s\u0131f\u0131rland\u0131.")}onPower(t){if(this.phase!=="play"||this.paused)return;if(this.tut.active){this.ui.toast("\xD6nce e\u011Fitimi tamamla.");return}this.sound.play("click"),this.mode&&this.setMode(null);let e=this.save.data,n=t==="vipcall"?"vip":t;if(["undo","hint","recall","call","convert","vip","shuffle"].includes(n)&&e.powerups[n]<=0){this.ui.powerBuy(n);return}if(this.scene.isBusy()&&t!=="hint"){this.ui.toast("Animasyon bitsin, sonra dene.");return}switch(t){case"undo":this.doUndo()&&this.usePower("undo");break;case"hint":this.doHint()&&this.usePower("hint");break;case"recall":this.setMode("recall","Geri \xE7a\u011F\u0131rmak istedi\u011Fin park eden otob\xFCse dokun");break;case"call":this.setMode("call","\xC7a\u011F\u0131raca\u011F\u0131n otob\xFCse dokun"),this.suggestCall();break;case"convert":this.startConvertMode();break;case"vipcall":this.startVipMode();break;case"shuffle":this.doShuffle();break;default:break}}usePower(t){let e=this.save.data;e.powerups[t]>0&&e.powerups[t]--,this.assists++,this.save.save(),this.renderPowerBar()}doUndo(){if(!this.snapshots.length)return this.ui.toast("Geri al\u0131nacak hamle yok."),!1;let t=this.snapshots.pop(),e=this.save.data;for(let n of e.temp.slots)t.slotOpen[n]=!0;return this.state=t,this.scene.loadStage(t,e.temp.slots),this.refreshHud(),this.sound.play("whoosh"),this.scene.fx.ring(0,-5.2,8246271,.5,5,.8),!0}doHint(){let t=$s(this.state,{useVip:!1,maxNodes:25e4});return!t.solved||!t.order.length?(this.ui.toast("Bu durumda \xE7\xF6z\xFCm yok. Geri al ya da yeniden ba\u015Fla!","bad"),!1):(this.scene.clearGlows(),this.scene.setGlow(t.order[0],16769126),this.sound.play("unlock"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.scene.clearGlows(),5e3),this.ui.toast("Parlayan otob\xFCs\xFC \xE7\u0131kar!","good"),!0)}doRecall(t){let e=pn(this.state),n=zu(this.state,t);if(!n.ok){this.ui.toast(n.reason==="occupied"?"Ba\u015Flang\u0131\xE7 yeri dolu, geri \xE7a\u011Fr\u0131lamaz.":"Bu otob\xFCs geri \xE7a\u011Fr\u0131lamaz.","bad"),this.sound.play("error");return}this.countMove(t),this.snapshots.push(e),this.scene.animateRecall(t),this.setMode(null),this.usePower("recall"),this.scene.idleFired=!1}suggestCall(){let t=this.state,e=ah(t);if(e===null)return;let n=null,s=1e9;for(let r of t.buses){if(r.st!=="board"||r.vip||r.color!==e)continue;let a=Vi(t,r).length;a<s&&(s=a,n=r)}n&&this.scene.setGlow(n.id,16769126)}openCall(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return;if(n.vip){this.ui.toast("VIP otob\xFCsler \xE7a\u011Fr\u0131lamaz; VIP i\xE7in VIP \xC7a\u011F\u0131r'\u0131 kullan.");return}if(Gi(e,n)===-1){this.ui.toast("Park yeri yok! \xD6nce yer a\xE7.","bad"),this.sound.play("error");return}if(this.scene.isBusy()){this.ui.toast("Animasyon bitsin, sonra dene.");return}if(s.powerups.call>0){this.callPick(t,"item");return}let r=ks[n.color]?.name||"",a=this.ui.modal({title:"Otob\xFCs \xC7a\u011F\u0131r",head:"purple",onClose:()=>{this.mode==="call"&&this.setMode(null)},body:`<p>Se\xE7ti\u011Fin <b>${r}</b> otob\xFCs (${n.seats} koltuk), \xF6n\xFCndeki engellere tak\u0131lmadan park alan\u0131na gelir.</p>`,foot:`${s.powerups.call>0?`<button class="btn blue" data-act="item">${nt("call",22)} Envanterden kullan (${s.powerups.call})</button>`:""}${Me.mode!=="off"?`<button class="btn gold" data-act="ad">${nt("ad",22)} Reklam izle</button>`:""}<button class="btn orange" data-act="coin">${nt("coin",22)} ${ie.call} jeton</button>`});this.ui.onAct(a,{item:async()=>{await this.callPick(t,"item")&&a.close()},ad:async()=>{await this.callPick(t,"ad")&&a.close()},coin:async()=>{await this.callPick(t,"coin")&&a.close()}})}async callPick(t,e){let n=this.state,s=this.save.data,r=n.buses[t];if(!r||r.st!=="board"||r.vip||Gi(n,r)===-1)return this.ui.toast("Bu otob\xFCs \u015Fu an \xE7a\u011Fr\u0131lamaz.","bad"),!1;if(e==="item"){if(s.powerups.call<=0)return!1}else if(e==="ad"){if(!await this.requestAd("call-pick"))return!1}else if(!this.spendCoins(ie.call))return!1;let a=pn(n),o=Vu(n,t);return o.ok?(e==="item"&&s.powerups.call--,this.countMove(t),this.snapshots.push(a),this.setMode(null),this.scene.startCraneToSlot(o.id,o.slot),this.assists++,this.scene.idleFired=!1,this.refreshChips(),this.renderPowerBar(),this.save.save(),!0):(this.ui.toast("\xC7a\u011Fr\u0131lamad\u0131.","bad"),!1)}doCall(){let t=pn(this.state),e=Hu(this.state);return e.ok?(this.countMove(e.id),this.snapshots.push(t),this.scene.startCraneToSlot(e.id,e.slot),this.refreshChips(),!0):(this.ui.toast(e.reason==="noslot"?"Park yeri yok!":"S\u0131radaki yolcunun renginde otob\xFCs kalmad\u0131.","bad"),this.sound.play("error"),!1)}startConvertMode(){if(this.save.data.temp.conv>=ih){this.ui.toast("Bu seviyede d\xF6n\xFC\u015Ft\xFCrme hakk\u0131n bitti.","bad");return}this.setMode("convert","D\xF6n\xFC\u015Ft\xFCrmek istedi\u011Fin otob\xFCse dokun")}openConvert(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return;if(n.vip){this.ui.toast("VIP otob\xFCsler d\xF6n\xFC\u015Ft\xFCr\xFClemez.");return}let r=[...new Set(e.queue.slice(e.qi))].filter(a=>a!==n.color);this.ui.convertDialog({id:t,colors:r,seats:n.seats,canGrow:!!fh(e,t),canSeat:mh(e,t),maxSeats:Hs(n.len),left:ih-s.temp.conv})}async applyConvert(t,e,n){if(!e)return!1;let s=this.state,r=this.save.data,a=pn(s);e.type==="color"?uh(a,t,e.v):e.type==="seat"?gh(a,t):ph(a,t);let o=$s(a,{useVip:!1,maxNodes:15e4});if(!o.solved&&!o.aborted)return this.ui.toast("Bu d\xF6n\xFC\u015F\xFCm seviyeyi \xE7\xF6z\xFCms\xFCz yapar, ba\u015Fka se\xE7enek dene.","bad"),!1;if(n==="item"){if(r.powerups.convert<=0)return!1}else if(n==="ad"){if(!await this.requestAd("convert"))return!1}else if(!this.spendCoins(e.type==="seat"?ie.seat:ie.convert))return!1;let l=pn(s);return(e.type==="color"?uh(s,t,e.v):e.type==="seat"?gh(s,t):ph(s,t)).ok?(this.countMove(t),this.snapshots.push(l),e.type==="color"?this.scene.convertFx(t,"color"):this.scene.rebuildBus(t),n==="item"&&r.powerups.convert--,r.temp.conv++,this.assists++,this.renderPowerBar(),this.save.save(),this.setMode(null),this.ui.toast(e.type==="seat"?"Koltuk eklendi!":"Otob\xFCs d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC!","good"),!0):(this.ui.toast("D\xF6n\xFC\u015Ft\xFCrme uygulanamad\u0131.","bad"),!1)}startVipMode(){let t=this.state;return t.vipSlot!==null?(this.ui.toast("VIP alan\u0131 dolu. Otob\xFCs dolup kalk\u0131nca tekrar kullanabilirsin."),!1):t.buses.some(e=>e.st==="board")?(this.setMode("vip","VIP alan\u0131na g\xF6ndermek istedi\u011Fin otob\xFCse dokun"),!0):(this.ui.toast("Tahtada otob\xFCs kalmad\u0131."),!1)}doVipSend(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return!1;if(s.powerups.vip<=0)return this.setMode(null),this.ui.powerBuy("vip"),!1;if(this.scene.isBusy())return this.ui.toast("Animasyon bitsin, sonra dene."),!1;let r=pn(e),a=Gu(e,t);return a.ok?(s.powerups.vip--,this.assists++,this.countMove(t),this.snapshots.push(r),this.setMode(null),a.blocked?this.scene.startCraneToSlot(t,"V",{wings:!0}):this.scene.startDriveToSlot(t,"V"),this.sound.play("vip"),this.scene.idleFired=!1,this.renderPowerBar(),this.refreshChips(),this.save.save(),!0):(this.ui.toast(a.reason==="vipfull"?"VIP alan\u0131 dolu.":"Bu otob\xFCs se\xE7ilemez.","bad"),!1)}vipRescue(){this.phase="play",this.scene.idleFired=!1,this.save.data.powerups.vip>0?this.startVipMode():this.ui.powerBuy("vip")}doShuffle(){let t=this.state,e=t.buses.filter(a=>a.st==="board");if(e.length<2)return this.ui.toast("Kar\u0131\u015Ft\u0131r\u0131lacak yeterli otob\xFCs yok."),!1;let n=mi(this.levelN*7919+this.moveCount*104729+e.length>>>0),s=null;for(let a=0;a<14&&!s;a++){let o=Zu(e.map(h=>({id:h.id,len:h.len})),t.w,t.h,n);if(!o)continue;let l=pn(t);for(let h of o){let d=l.buses[h.id];d.x=d.x0=h.x,d.y=d.y0=h.y,d.dir=h.d}$s(l,{useVip:!1,maxNodes:6e4}).solved&&(s=o)}if(!s)return this.ui.toast("\u015Eu an kar\u0131\u015Ft\u0131r\u0131lamad\u0131, birazdan tekrar dene.","bad"),!1;let r=pn(t);for(let a of s){let o=t.buses[a.id];o.x=o.x0=a.x,o.y=o.y0=a.y,o.dir=a.d}return t.moves++,this.usePower("shuffle"),this.countMove(),this.snapshots.push(r),this.scene.loadStage(t,this.save.data.temp.slots),this.scene.shuffleFx(),this.sound.play("whoosh"),this.ui.toast("Otob\xFCsler yeniden dizildi!","good"),this.refreshChips(),!0}buyPack(t){let e=no.find(s=>s.id===t);if(!e||!this.spendCoins(e.price))return!1;let n=this.save.data;for(let[s,r]of Object.entries(e.items))n.powerups[s]=Math.min(999,(n.powerups[s]||0)+r);return this.save.save(!0),this.renderPowerBar(),this.sound.play("unlock"),this.ui.toast(`${e.name} sat\u0131n al\u0131nd\u0131!`,"good"),!0}async unlockSlot(t){let e=this.state,n=this.save.data;if(!e.slotOpen.some(r=>!r))return this.ui.toast("T\xFCm park yerleri zaten a\xE7\u0131k."),!1;if(t==="ad"){if(!await this.requestAd("extra-slot"))return!1}else if(t==="coin"){if(!this.spendCoins(ie.extraSlot))return!1}else if(t==="item"){if(n.powerups.extraSlot<=0)return!1;n.powerups.extraSlot--}let s=dh(e);return s<0?!1:(n.temp.slots.push(s),n.stats.slots++,this.emit("slot",1,!1),this.assists++,this.scene.unlockSlotFx(s,!0),this.save.save(!0),this.ui.toast("Ek park yeri a\xE7\u0131ld\u0131! (sadece bu seviye)","good"),this.renderPowerBar(),!0)}async addMoves(t){if(t==="ad"){if(!await this.requestAd("extra-moves"))return!1}else if(!this.spendCoins(ie.moves))return!1;return this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),!0}async addTime(t){if(t==="ad"){if(!await this.requestAd("extra-time"))return!1}else if(!this.spendCoins(ie.time))return!1;return this.timeLeft=(this.timeLeft||0)+30,this.assists++,this.refreshChips(),!0}offerMoves(){if(this.phase!=="play"||this.state.moveLimit===null)return;let t=this.save.data;t.powerups.moves>0?(t.powerups.moves--,this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),this.ui.toast("+4 hamle","good"),this.save.save()):this.ui.toast(`Hamle bitince reklam veya ${ie.moves} jetonla +4 hamle alabilirsin.`)}offerTime(){if(this.phase!=="play"||this.timeLeft===null)return;let t=this.save.data;t.powerups.time>0?(t.powerups.time--,this.timeLeft+=30,this.assists++,this.refreshChips(),this.ui.toast("+30 saniye","good"),this.save.save()):this.ui.toast(`S\xFCre bitince reklam veya ${ie.time} jetonla +30 sn alabilirsin.`)}};var Ki=new URLSearchParams(location.search),Be=new Ro({preserve:Ki.has("shot")});window.__game=Be;var wf=performance.now();function Af(i){let t=Math.min(.1,(i-wf)/1e3);wf=i;try{Be.frame(t)}catch(e){console.error("frame error",e)}requestAnimationFrame(Af)}requestAnimationFrame(Af);var Ch=Ki.has("splash")?+Ki.get("splash"):Ki.has("start")||Ki.has("fast")||Ki.has("shot")?0:3e3,Iv=0,Rh=["Otob\xFCsler haz\u0131rlan\u0131yor\u2026","Yolcular toplan\u0131yor\u2026","Park yerleri a\xE7\u0131l\u0131yor\u2026","Yollar s\xFCp\xFCr\xFCl\xFCyor\u2026","Haz\u0131r!"],Co=document.getElementById("spBar"),Sf=document.getElementById("spTxt"),Ef=document.getElementById("spPct");function Rf(){let i=Math.min(1,(performance.now()-Iv)/Math.max(1,Ch)),t=1-Math.pow(1-i,2);Co&&(Co.style.width=(t*100).toFixed(0)+"%"),Ef&&(Ef.textContent=Math.round(t*100)+"%"),Sf&&(Sf.textContent=Rh[Math.min(Rh.length-1,Math.floor(t*(Rh.length-.01)))]),i<1?requestAnimationFrame(Rf):setTimeout(()=>document.getElementById("loading")?.classList.add("gone"),Ch?250:0)}Ch?Rf():(Co&&(Co.style.width="100%"),setTimeout(()=>document.getElementById("loading")?.classList.add("gone"),400));document.addEventListener("visibilitychange",()=>{document.hidden&&Be.notifier.reschedule()});document.addEventListener("visibilitychange",()=>{document.hidden&&Be.phase==="play"&&!Be.paused&&!Be.ui.hasModal&&Be.pause()});document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("backbutton",()=>{if(Be.ui.hasModal){Be.ui.modals[Be.ui.modals.length-1].close();return}Be.phase==="play"?Be.pause():Be.phase!=="menu"&&Be.goMenu()});var Tf=Ki.get("start");Tf&&setTimeout(()=>{let i=Be.save.data.tutorial;i.l1=i.l2=i.vip=!0,Be.ui.closeAll(),Be.startLevel(+Tf)},700);
