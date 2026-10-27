var yd=0,Jc=1,vd=2;var ru=1,Ks=2,En=3,Xn=0,Ee=1,on=2,Gn=0,Wn=1,$n=2,jc=3,Qc=4,_d=5,ci=100,Md=101,bd=102,Sd=103,wd=104,Ed=200,Td=201,Ad=202,Rd=203,Do=204,Uo=205,Cd=206,Pd=207,Id=208,Ld=209,Dd=210,Ud=211,Nd=212,kd=213,Od=214,No=0,ko=1,Oo=2,Yi=3,Fo=4,Bo=5,zo=6,Ho=7,au=0,Fd=1,Bd=2,qn=0,zd=1,Hd=2,Vd=3,Gd=4,Wd=5,qd=6,Js=7;var ou=300,Zi=301,Ki=302,Vo=303,Go=304,ga=306,Ns=1e3,di=1001,Wo=1002,Je=1003,Xd=1004;var dr=1005;var ln=1006,ja=1007;var fi=1008;var Rn=1009,lu=1010,cu=1011,ks=1012,rc=1013,pi=1014,Tn=1015,js=1016,ac=1017,oc=1018,Ji=1020,hu=35902,uu=1021,du=1022,cn=1023,fu=1024,pu=1025,qi=1026,ji=1027,mu=1028,lc=1029,gu=1030,cc=1031;var hc=1033,Br=33776,zr=33777,Hr=33778,Vr=33779,qo=35840,Xo=35841,$o=35842,Yo=35843,Zo=36196,Ko=37492,Jo=37496,jo=37808,Qo=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,Gr=36492,dl=36494,fl=36495,xu=36283,pl=36284,ml=36285,gl=36286;var qr=2300,xl=2301,Qa=2302,th=2400,eh=2401,nh=2402;var $d=3200,Yd=3201;var yu=0,Zd=1,Vn="",ve="srgb",Qn="srgb-linear",uc="display-p3",xa="display-p3-linear",Xr="linear",re="srgb",$r="rec709",Yr="p3";var Ri=7680;var ih=519,Kd=512,Jd=513,jd=514,vu=515,Qd=516,tf=517,ef=518,nf=519,sh=35044;var rh="300 es",An=2e3,Zr=2001,Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,Cs=Math.PI/180,Os=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ps(i,t,e){return(1-e)*i+e*t}function af(i,t,e,n){return Ps(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function df(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(ah=i);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(i){return i*Cs}function mf(i){return i*Os}function gf(i){return(i&i-1)===0&&i!==0}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _u={DEG2RAD:Cs,RAD2DEG:Os,generateUUID:Mi,clamp:_e,euclideanModulo:dc,mapLinear:sf,inverseLerp:rf,lerp:Ps,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:xf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:vf,normalize:Fe,denormalize:Vi},it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],b=s[7],P=s[2],E=s[5],A=s[8];return r[0]=a*v+o*_+l*P,r[3]=a*m+o*y+l*E,r[6]=a*p+o*b+l*A,r[1]=c*v+h*_+u*P,r[4]=c*m+h*y+u*E,r[7]=c*p+h*b+u*A,r[2]=d*v+f*_+g*P,r[5]=d*m+f*y+g*E,r[8]=d*p+f*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ot;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _f(){let i=Kr("canvas");return i.style.display="block",i}var oh={};function Wr(i){i in oh||(oh[i]=!0,console.warn(i))}function Mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var lh=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Qn]:{transfer:Xr,primaries:$r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ve]:{transfer:re,primaries:$r,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xa]:{transfer:Xr,primaries:Yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ch),fromReference:i=>i.applyMatrix3(lh)},[uc]:{transfer:re,primaries:Yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ch),fromReference:i=>i.applyMatrix3(lh).convertLinearToSRGB()}},wf=new Set([Qn,xa]),Zt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!wf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=bs[t].toReference,s=bs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return bs[i].primaries},getTransfer:function(i){return i===Vn?Xr:bs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(bs[t].luminanceCoefficients)}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function eo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Kr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ef=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(no(s[a].image)):r.push(no(s[a]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tf=0,Ye=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=ln,a=fi,o=cn,l=Rn,c=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Mi(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ou;Ye.DEFAULT_ANISOTROPY=1;var te=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,b=(f+1)/2,P=(p+1)/2,E=(h+d)/4,A=(u+v)/4,R=(g+m)/4;return y>b&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=R/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends Yn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),E=Math.atan2(P,p*_);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}let b=o*_;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+v*b,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new C,hh=new Zn,mi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),pr.subVectors(this.max,Ss),Pi.subVectors(t.a,Ss),Ii.subVectors(t.b,Ss),Li.subVectors(t.c,Ss),kn.subVectors(Ii,Pi),On.subVectors(Li,Ii),ni.subVectors(Pi,Li);let e=[0,-kn.z,kn.y,0,-On.z,On.y,0,-ni.z,ni.y,kn.z,0,-kn.x,On.z,0,-On.x,ni.z,0,-ni.x,-kn.y,kn.x,0,-On.y,On.x,0,-ni.y,ni.x,0];return!so(e,Pi,Ii,Li,pr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Pi,Ii,Li,pr))?!1:(mr.crossVectors(kn,On),e=[mr.x,mr.y,mr.z],so(e,Pi,Ii,Li,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_n=[new C,new C,new C,new C,new C,new C,new C,new C],nn=new C,fr=new mi,Pi=new C,Ii=new C,Li=new C,kn=new C,On=new C,ni=new C,Ss=new C,pr=new C,mr=new C,ii=new C;function so(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Af=new mi,ws=new C,ro=new C,Qi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(ro)),this.expandByPoint(ws.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new C,ao=new C,gr=new C,Fn=new C,oo=new C,xr=new C,lo=new C,Fs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ao.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(ao);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=Fn.dot(this.direction),l=-Fn.dot(gr),c=Fn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ao).addScaledVector(gr,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){oo.subVectors(e,t),xr.subVectors(n,t),lo.crossVectors(oo,xr);let a=this.direction.dot(lo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);let l=o*this.direction.dot(xr.crossVectors(Fn,xr));if(l<0)return null;let c=o*this.direction.dot(oo.cross(Fn));if(c<0||l+c>a)return null;let h=-o*Fn.dot(lo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Cf)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bn.crossVectors(n,Xe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bn.crossVectors(n,Xe)),Bn.normalize(),yr.crossVectors(Xe,Bn),s[0]=Bn.x,s[4]=yr.x,s[8]=Xe.x,s[1]=Bn.y,s[5]=yr.y,s[9]=Xe.y,s[2]=Bn.z,s[6]=yr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],b=n[11],P=n[15],E=s[0],A=s[4],R=s[8],F=s[12],x=s[1],S=s[5],k=s[9],N=s[13],O=s[2],X=s[6],B=s[10],j=s[14],W=s[3],ht=s[7],ot=s[11],xt=s[15];return r[0]=a*E+o*x+l*O+c*W,r[4]=a*A+o*S+l*X+c*ht,r[8]=a*R+o*k+l*B+c*ot,r[12]=a*F+o*N+l*j+c*xt,r[1]=h*E+u*x+d*O+f*W,r[5]=h*A+u*S+d*X+f*ht,r[9]=h*R+u*k+d*B+f*ot,r[13]=h*F+u*N+d*j+f*xt,r[2]=g*E+v*x+m*O+p*W,r[6]=g*A+v*S+m*X+p*ht,r[10]=g*R+v*k+m*B+p*ot,r[14]=g*F+v*N+m*j+p*xt,r[3]=_*E+y*x+b*O+P*W,r[7]=_*A+y*S+b*X+P*ht,r[11]=_*R+y*k+b*B+P*ot,r[15]=_*F+y*N+b*j+P*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,P=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,E=e*_+n*y+s*b+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=_*A,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=y*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=b*A,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*A,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=P*A,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*v*s-g*n*l+e*v*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,_=l*c,y=l*h,b=l*u,P=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+b)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(m-_)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let c=1/r,h=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===An)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,v;if(o===An)g=(a+r)*u,v=-2*u;else if(o===Zr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new C,sn=new oe,Rf=new C(0,0,0),Cf=new C(1,1,1),Bn=new C,yr=new C,Xe=new C,uh=new oe,dh=new Zn,pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pf=0,fh=new C,Ui=new Zn,bn=new oe,vr=new C,Es=new C,If=new C,Lf=new Zn,ph=new C(1,0,0),mh=new C(0,1,0),gh=new C(0,0,1),xh={type:"added"},Df={type:"removed"},Ni={type:"childadded",child:null},co={type:"childremoved",child:null},De=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new pn,n=new Zn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ot}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Es,vr,this.up):bn.lookAt(vr,Es,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(bn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,If),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new C,Sn=new C,ho=new C,wn=new C,ki=new C,Oi=new C,yh=new C,uo=new C,fo=new C,po=new C,mo=new te,go=new te,xo=new te,hi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Sn.subVectors(n,e),ho.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(Sn),l=rn.dot(ho),c=Sn.dot(Sn),h=Sn.dot(ho),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return mo.setScalar(0),go.setScalar(0),xo.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(mo,r.x),a.addScaledVector(go,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Sn.subVectors(t,e),rn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ki.subVectors(s,n),Oi.subVectors(r,n),uo.subVectors(t,n);let l=ki.dot(uo),c=Oi.dot(uo);if(l<=0&&c<=0)return e.copy(n);fo.subVectors(t,s);let h=ki.dot(fo),u=Oi.dot(fo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ki,a);po.subVectors(t,r);let f=ki.dot(po),g=Oi.dot(po);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Oi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return yh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(yh,o);let p=1/(m+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=dc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=eo(t.r),this.g=eo(t.g),this.b=eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(_e(Le.r*255,0,255))*65536+Math.round(_e(Le.g*255,0,255))*256+Math.round(_e(Le.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ve){Zt.fromWorkingColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(_r);let n=Ps(zn.h,_r.h,e),s=Ps(zn.s,_r.s,e),r=Ps(zn.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Rt;Rt.NAMES=bu;var Uf=0,Kn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Wn,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Uo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new C,Mr=new it,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}};var Qr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ta=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nf=0,Ke=new oe,vo=new De,Fi=new C,$e=new mi,Ts=new mi,Se=new C,Ce=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?ta:Qr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return vo.lookAt(t),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors($e.min,Ts.min),$e.expandByPoint(Se),Se.addVectors($e.max,Ts.max),$e.expandByPoint(Se)):($e.expandByPoint(Ts.min),$e.expandByPoint(Ts.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(t,c),Se.add(Fi)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new C,l[R]=new C;let c=new C,h=new C,u=new C,d=new it,f=new it,g=new it,v=new C,m=new C;function p(R,F,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,F),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[R].add(v),o[F].add(v),o[x].add(v),l[R].add(m),l[F].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,F=_.length;R<F;++R){let x=_[R],S=x.start,k=x.count;for(let N=S,O=S+k;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new C,b=new C,P=new C,E=new C;function A(R){P.fromBufferAttribute(s,R),E.copy(P);let F=o[R];y.copy(F),y.sub(P.multiplyScalar(P.dot(F))).normalize(),b.crossVectors(E,F);let S=b.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,S)}for(let R=0,F=_.length;R<F;++R){let x=_[R],S=x.start,k=x.count;for(let N=S,O=S+k;N<O;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new oe,si=new Fs,br=new Qi,_h=new C,Sr=new C,wr=new C,Er=new C,_o=new C,Tr=new C,Mh=new C,Ar=new C,J=class extends De{constructor(t=new Ce,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_o.fromBufferAttribute(u,t),a?Tr.addScaledVector(_o,h):Tr.addScaledVector(_o.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(br.containsPoint(si.origin)===!1&&(si.intersectSphere(br,_h)===null||si.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(vh.copy(r).invert(),si.copy(t.ray).applyMatrix4(vh),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,P=y;b<P;b+=3){let E=o.getX(b),A=o.getX(b+1),R=o.getX(b+2);s=Rr(this,p,t,n,c,h,u,E,A,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);s=Rr(this,a,t,n,c,h,u,_,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,P=y;b<P;b+=3){let E=b,A=b+1,R=b+2;s=Rr(this,p,t,n,c,h,u,E,A,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,y=m+1,b=m+2;s=Rr(this,a,t,n,c,h,u,_,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kf(i,t,e,n,s,r,a,o){let l;if(t.side===Ee?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,wr),i.getVertexPosition(c,Er);let h=kf(i,t,e,n,Sr,wr,Er,Mh);if(h){let u=new C;hi.getBarycoord(Mh,Sr,wr,Er,u),s&&(h.uv=hi.getInterpolatedAttribute(s,o,l,c,u,new it)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,u,new it)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};hi.getNormal(Sr,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}var Pe=class i extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(v,m,p,_,y,b,P,E,A,R,F){let x=b/A,S=P/R,k=b/2,N=P/2,O=E/2,X=A+1,B=R+1,j=0,W=0,ht=new C;for(let ot=0;ot<B;ot++){let xt=ot*S-N;for(let rt=0;rt<X;rt++){let mt=rt*x-k;ht[v]=mt*_,ht[m]=xt*y,ht[p]=O,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(rt/A),u.push(1-ot/R),j+=1}}for(let ot=0;ot<R;ot++)for(let xt=0;xt<A;xt++){let rt=d+xt+X*ot,mt=d+xt+X*(ot+1),G=d+(xt+1)+X*(ot+1),Z=d+(xt+1)+X*ot;l.push(rt,mt,Z),l.push(mt,G,Z),W+=6}o.addGroup(f,W,F),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function Of(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Su(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Ff={clone:ts,merge:Be},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ea=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hn=new C,bh=new it,Sh=new it,we=class extends ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Sh),e.subVectors(Sh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bi=-90,zi=1,Ml=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Bi,zi,t,e);s.layers=this.layers,this.add(s);let r=new we(Bi,zi,t,e);r.layers=this.layers,this.add(r);let a=new we(Bi,zi,t,e);a.layers=this.layers,this.add(a);let o=new we(Bi,zi,t,e);o.layers=this.layers,this.add(o);let l=new we(Bi,zi,t,e);l.layers=this.layers,this.add(l);let c=new we(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},na=class extends Ye{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new na(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Gn});r.uniforms.tEquirect.value=e;let a=new J(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=ln),new Ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Mo=new C,Hf=new C,Vf=new Ot,an=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Mo.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vf.getNormalMatrix(t),s=this.coplanarPoint(Mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Qi,Cr=new C,zs=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+_).normalize(),n[3].setComponents(l-a,d-h,m-g,b-_).normalize(),n[4].setComponents(l-o,d-u,m-v,b-y).normalize(),e===An)n[5].setComponents(l+o,d+u,m+v,b+y).normalize();else if(e===Zr)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ue=class i extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let y=0;y<c;y++){let b=y*u-r;g.push(b,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let y=_+c*p,b=_+c*(p+1),P=_+1+c*(p+1),E=_+1+c*p;f.push(y,b,E),f.push(b,P,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`
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
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,d0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,p0=`#define STANDARD
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
}`,m0=`#define TOON
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
}`,g0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,_0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Wf,alphahash_pars_fragment:qf,alphamap_fragment:Xf,alphamap_pars_fragment:$f,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:Jf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:xp,emissivemap_fragment:yp,emissivemap_pars_fragment:vp,colorspace_fragment:_p,colorspace_pars_fragment:Mp,envmap_fragment:bp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:wp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:kp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:qp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Kp,map_pars_fragment:Jp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:xm,packing:ym,premultiplied_alpha_fragment:vm,project_vertex:_m,dithering_fragment:Mm,dithering_pars_fragment:bm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:km,transmission_fragment:Om,transmission_pars_fragment:Fm,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:Hm,worldpos_vertex:Vm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:qm,backgroundCube_frag:Xm,cube_vert:$m,cube_frag:Ym,depth_vert:Zm,depth_frag:Km,distanceRGBA_vert:Jm,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:t0,linedashed_vert:e0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:x0,points_frag:y0,shadow_vert:v0,shadow_frag:_0,sprite_vert:M0,sprite_frag:b0},at={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},fn={basic:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Rt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Be([at.points,at.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Be([at.common,at.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Be([at.sprite,at.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Be([at.common,at.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Be([at.lights,at.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};fn.physical={uniforms:Be([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Pr={r:0,b:0,g:0},ai=new pn,S0=new oe;function w0(i,t,e,n,s,r,a){let o=new Rt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1,b=g(_);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let b=g(y);b&&(b.isCubeTexture||b.mapping===ga)?(h===void 0&&(h=new J(new Pe(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:ts(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ai.copy(y.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(ai)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==re,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new J(new Ue(2,2),new je({name:"BackgroundMaterial",uniforms:ts(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Pr,Su(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:m}}function E0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,S,k,N,O){let X=!1,B=u(N,k,S);r!==B&&(r=B,c(r.object)),X=f(x,N,k,O),X&&g(x,N,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(x,S,k,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,S,k){let N=k.wireframe===!0,O=n[x.id];O===void 0&&(O={},n[x.id]=O);let X=O[S.id];X===void 0&&(X={},O[S.id]=X);let B=X[N];return B===void 0&&(B=d(l()),X[N]=B),B}function d(x){let S=[],k=[],N=[];for(let O=0;O<e;O++)S[O]=0,k[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,S,k,N){let O=r.attributes,X=S.attributes,B=0,j=k.getAttributes();for(let W in j)if(j[W].location>=0){let ot=O[W],xt=X[W];if(xt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),ot===void 0||ot.attribute!==xt||xt&&ot.data!==xt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function g(x,S,k,N){let O={},X=S.attributes,B=0,j=k.getAttributes();for(let W in j)if(j[W].location>=0){let ot=X[W];ot===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor));let xt={};xt.attribute=ot,ot&&ot.data&&(xt.data=ot.data),O[W]=xt,B++}r.attributes=O,r.attributesNum=B,r.index=N}function v(){let x=r.newAttributes;for(let S=0,k=x.length;S<k;S++)x[S]=0}function m(x){p(x,0)}function p(x,S){let k=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;k[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),O[x]!==S&&(i.vertexAttribDivisor(x,S),O[x]=S)}function _(){let x=r.newAttributes,S=r.enabledAttributes;for(let k=0,N=S.length;k<N;k++)S[k]!==x[k]&&(i.disableVertexAttribArray(k),S[k]=0)}function y(x,S,k,N,O,X,B){B===!0?i.vertexAttribIPointer(x,S,k,O,X):i.vertexAttribPointer(x,S,k,N,O,X)}function b(x,S,k,N){v();let O=N.attributes,X=k.getAttributes(),B=S.defaultAttributeValues;for(let j in X){let W=X[j];if(W.location>=0){let ht=O[j];if(ht===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){let ot=ht.normalized,xt=ht.itemSize,rt=t.get(ht);if(rt===void 0)continue;let mt=rt.buffer,G=rt.type,Z=rt.bytesPerElement,nt=G===i.INT||G===i.UNSIGNED_INT||ht.gpuType===rc;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Dt=lt.stride,Et=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)p(W.location+Ft,lt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)m(W.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Ft=0;Ft<W.locationSize;Ft++)y(W.location+Ft,xt/W.locationSize,G,ot,Dt*Z,(Et+xt/W.locationSize*Ft)*Z,nt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let lt=0;lt<W.locationSize;lt++)y(W.location+lt,xt/W.locationSize,G,ot,xt*Z,xt/W.locationSize*lt*Z,nt)}}else if(B!==void 0){let ot=B[j];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(W.location,ot);break;case 3:i.vertexAttrib3fv(W.location,ot);break;case 4:i.vertexAttrib4fv(W.location,ot);break;default:i.vertexAttrib1fv(W.location,ot)}}}}_()}function P(){R();for(let x in n){let S=n[x];for(let k in S){let N=S[k];for(let O in N)h(N[O].object),delete N[O];delete S[k]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let S=n[x.id];for(let k in S){let N=S[k];for(let O in N)h(N[O].object),delete N[O];delete S[k]}delete n[x.id]}function A(x){for(let S in n){let k=n[S];if(k[x.id]===void 0)continue;let N=k[x.id];for(let O in N)h(N[O].object),delete N[O];delete k[x.id]}}function R(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function T0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function A0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:P,maxSamples:E}}function R0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,b=p.clippingState||null;l.value=b,b=h(g,d,y,f);for(let P=0;P!==y;++P)b[P]=e[P];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=f;y!==v;++y,b+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function C0(i){let t=new WeakMap;function e(a,o){return o===Vo?a.mapping=Zi:o===Go&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vo||o===Go)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ia=class extends ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,wh=[.125,.215,.35,.446,.526,.582],ui=20,bo=new ia,Eh=new Rt,So=null,wo=0,Eo=0,To=!1,li=(1+Math.sqrt(5))/2,Hi=1/li,Th=[new C(-li,Hi,0),new C(li,Hi,0),new C(-Hi,0,li),new C(Hi,0,li),new C(0,li,-Hi),new C(0,li,Hi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Jn=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,wo,Eo),this._renderer.xr.enabled=To,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:js,format:cn,colorSpace:Qn,depthBuffer:!1},s=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(r)),this._blurMaterial=I0(r,t,e)}return s}_compileMaterial(t){let e=new J(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s){let o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eh),h.toneMapping=qn,h.autoClear=!1;let f=new Re({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new J(new Pe,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Eh),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;Ir(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new J(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Th[(s-r-1)%Th.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new J(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let p=[],_=0;for(let A=0;A<ui;++A){let R=A/v,F=Math.exp(-R*R/2);p.push(F),A===0?_+=F:A<m&&(_+=2*F)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[s],P=3*b*(s>y-Gi?s-y+Gi:0),E=4*(this._cubeSize-b);Ir(e,P,E,3*b,2*b),l.setRenderTarget(e),l.render(u,bo)}};function P0(i){let t=[],e=[],n=[],s=i,r=i-Gi+1+wh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gi?l=wh[a-i+Gi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,R=E>2?0:-1,F=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];_.set(F,v*g*E),y.set(d,m*g*E);let x=[E,E,E,E,E,E];b.set(x,p*g*E)}let P=new Ce;P.setAttribute("position",new Ae(_,v)),P.setAttribute("uv",new Ae(y,m)),P.setAttribute("faceIndex",new Ae(b,p)),t.push(P),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function I0(i,t,e){let n=new Float32Array(ui),s=new C(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ch(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function L0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Vo||l===Go,h=l===Zi||l===Ki;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Jn(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Jn(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function D0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let y=0,b=_.length;y<b;y+=3){let P=_[y+0],E=_[y+1],A=_[y+2];d.push(P,E,E,A,A,P)}}else if(g!==void 0){let _=g.array;v=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let P=y+0,E=y+1,A=y+2;d.push(P,E,E,A,A,P)}}else return;let m=new(Mu(d)?ta:Qr)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function N0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_];for(let _=0;_<v.length;_++)e.update(p,n,v[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,t,e){let n=new WeakMap,s=new te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let F=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let b=o.attributes.position.count*y,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*P*4*u),A=new jr(E,b,P,u);A.type=Tn,A.needsUpdate=!0;let R=y*4;for(let x=0;x<u;x++){let S=m[x],k=p[x],N=_[x],O=b*P*4*x;for(let X=0;X<S.count;X++){let B=X*R;f===!0&&(s.fromBufferAttribute(S,X),E[O+B+0]=s.x,E[O+B+1]=s.y,E[O+B+2]=s.z,E[O+B+3]=0),g===!0&&(s.fromBufferAttribute(k,X),E[O+B+4]=s.x,E[O+B+5]=s.y,E[O+B+6]=s.z,E[O+B+7]=0),v===!0&&(s.fromBufferAttribute(N,X),E[O+B+8]=s.x,E[O+B+9]=s.y,E[O+B+10]=s.z,E[O+B+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new it(b,P)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var sa=class extends Ye{constructor(t,e,n,s,r,a,o,l,c,h=qi){if(h!==qi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=pi),n===void 0&&h===ji&&(n=Ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eu=new Ye,Ph=new sa(1,1),Tu=new jr,Au=new _l,Ru=new na,Ih=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ih[s];if(r===void 0&&(r=new Float32Array(s),Ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),be(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),be(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),be(e,n)}}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ph.compareFunction=vu,r=Ph):r=Eu,e.setTexture2D(t||r,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function sg(i){switch(i){case 5126:return B0;case 35664:return z0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return q0;case 5124:case 35670:return X0;case 35667:case 35671:return $0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return K0;case 36294:return J0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function lg(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function cg(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hg(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dg(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function pg(i,t){i.uniform3iv(this.addr,t)}function mg(i,t){i.uniform4iv(this.addr,t)}function gg(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function yg(i,t){i.uniform3uiv(this.addr,t)}function vg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Eu,r[a])}function Mg(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function bg(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ru,r[a])}function Sg(i,t,e){let n=this.cache,s=t.length,r=ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tu,r[a])}function wg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}var Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}},El=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ao=/(\w+)(\])?(\[|\.)?/g;function kh(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){let n=i.name,s=n.length;for(Ao.lastIndex=0;;){let r=Ao.exec(n),a=Ao.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kh(e,c===void 0?new Sl(o,i,t):new wl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new El(o),kh(e,u)),e=u}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Eg(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tg=37297,Ag=0;function Rg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Cg(i){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i),n;switch(t===e?n="":t===Yr&&e===$r?n="LinearDisplayP3ToLinearSRGB":t===$r&&e===Yr&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case xa:return[n,"LinearTransferOETF"];case ve:case uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(t),a)}else return s}function Pg(i,t){let e=Cg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ig(i,t){let e;switch(t){case zd:e="Linear";break;case Hd:e="Reinhard";break;case Vd:e="Cineon";break;case Gd:e="ACESFilmic";break;case qd:e="AgX";break;case Js:e="Neutral";break;case Wd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new C;function Lg(){Zt.getLuminanceCoefficients(Lr);let i=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Ug(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function Bh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(kg,Fg)}var Og=new Map;function Fg(i,t){let e=kt[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(Bg,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ks?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:t="ENVMAP_BLENDING_MULTIPLY";break;case Fd:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function qg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hg(e),c=Vg(e),h=Gg(e),u=Wg(e),d=qg(e),f=Dg(e),g=Ug(r),v=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?kt.tonemapping_pars_fragment:"",e.toneMapping!==qn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Tl(a),a=Bh(a,e),a=zh(a,e),o=Tl(o),o=Bh(o,e),o=zh(o,e),a=Hh(a),o=Hh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+a,b=_+p+o,P=Oh(s,s.VERTEX_SHADER,y),E=Oh(s,s.FRAGMENT_SHADER,b);s.attachShader(v,P),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(E).trim(),X=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,E);else{let j=Fh(s,P,"vertex"),W=Fh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+j+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||O==="")&&(B=!1);B&&(S.diagnostics={runnable:X,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(E),R=new $i(s,v),F=Ng(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Tg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}var $g=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function Yg(i,t,e,n,s,r,a){let o=new Bs,l=new Al,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,k,N,O){let X=N.fog,B=O.geometry,j=x.isMeshStandardMaterial?N.environment:null,W=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),ht=W&&W.mapping===ga?W.image.height:null,ot=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=xt!==void 0?xt.length:0,mt=0;B.morphAttributes.position!==void 0&&(mt=1),B.morphAttributes.normal!==void 0&&(mt=2),B.morphAttributes.color!==void 0&&(mt=3);let G,Z,nt,lt;if(ot){let He=fn[ot];G=He.vertexShader,Z=He.fragmentShader}else G=x.vertexShader,Z=x.fragmentShader,l.update(x),nt=l.getVertexShaderID(x),lt=l.getFragmentShaderID(x);let Dt=i.getRenderTarget(),Et=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,Qt=!!x.map,Vt=!!x.matcap,I=!!W,Ge=!!x.aoMap,Bt=!!x.lightMap,Wt=!!x.bumpMap,Pt=!!x.normalMap,ie=!!x.displacementMap,Ut=!!x.emissiveMap,T=!!x.metalnessMap,M=!!x.roughnessMap,z=x.anisotropy>0,Y=x.clearcoat>0,Q=x.dispersion>0,$=x.iridescence>0,bt=x.sheen>0,ct=x.transmission>0,gt=z&&!!x.anisotropyMap,qt=Y&&!!x.clearcoatMap,tt=Y&&!!x.clearcoatNormalMap,yt=Y&&!!x.clearcoatRoughnessMap,It=$&&!!x.iridescenceMap,Lt=$&&!!x.iridescenceThicknessMap,vt=bt&&!!x.sheenColorMap,zt=bt&&!!x.sheenRoughnessMap,Nt=!!x.specularMap,ee=!!x.specularColorMap,L=!!x.specularIntensityMap,ft=ct&&!!x.transmissionMap,q=ct&&!!x.thicknessMap,K=!!x.gradientMap,ut=!!x.alphaMap,pt=x.alphaTest>0,Gt=!!x.alphaHash,ge=!!x.extensions,ze=qn;x.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(ze=i.toneMapping);let Xt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:G,fragmentShader:Z,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Et,instancingColor:Et&&O.instanceColor!==null,instancingMorph:Et&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Qn,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:Vt,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:ht,aoMap:Ge,lightMap:Bt,bumpMap:Wt,normalMap:Pt,displacementMap:f&&ie,emissiveMap:Ut,normalMapObjectSpace:Pt&&x.normalMapType===Zd,normalMapTangentSpace:Pt&&x.normalMapType===yu,metalnessMap:T,roughnessMap:M,anisotropy:z,anisotropyMap:gt,clearcoat:Y,clearcoatMap:qt,clearcoatNormalMap:tt,clearcoatRoughnessMap:yt,dispersion:Q,iridescence:$,iridescenceMap:It,iridescenceThicknessMap:Lt,sheen:bt,sheenColorMap:vt,sheenRoughnessMap:zt,specularMap:Nt,specularColorMap:ee,specularIntensityMap:L,transmission:ct,transmissionMap:ft,thicknessMap:q,gradientMap:K,opaque:x.transparent===!1&&x.blending===Wn&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:pt,alphaHash:Gt,combine:x.combine,mapUv:Qt&&m(x.map.channel),aoMapUv:Ge&&m(x.aoMap.channel),lightMapUv:Bt&&m(x.lightMap.channel),bumpMapUv:Wt&&m(x.bumpMap.channel),normalMapUv:Pt&&m(x.normalMap.channel),displacementMapUv:ie&&m(x.displacementMap.channel),emissiveMapUv:Ut&&m(x.emissiveMap.channel),metalnessMapUv:T&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:gt&&m(x.anisotropyMap.channel),clearcoatMapUv:qt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:zt&&m(x.sheenRoughnessMap.channel),specularMapUv:Nt&&m(x.specularMap.channel),specularColorMapUv:ee&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:ft&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:ut&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pt||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Qt||ut),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&Zt.getTransfer(x.map.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===Ee,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){let S=v[x.type],k;if(S){let N=fn[S];k=Ff.clone(N.uniforms)}else k=x.uniforms;return k}function E(x,S){let k;for(let N=0,O=h.length;N<O;N++){let X=h[N];if(X.cacheKey===S){k=X,++k.usedTimes;break}}return k===void 0&&(k=new Xg(i,S,x,r),h.push(k)),k}function A(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:P,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:F}}function Zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){let p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Kg),n.length>1&&n.sort(d||Gh),s.length>1&&s.sort(d||Gh)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Wh,i.set(n,[a])):s>=r.length?(a=new Wh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Rt};break;case"SpotLight":e={position:new C,direction:new C,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){let t=new jg,e=Qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,b=0,P=0,E=0,A=0;c.sort(ex);for(let F=0,x=c.length;F<x;F++){let S=c[F],k=S.color,N=S.intensity,O=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],N);A++}else if(S.isDirectionalLight){let B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let j=S.shadow,W=e.get(S);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=S.shadow.matrix,_++}n.directional[f]=B,f++}else if(S.isSpotLight){let B=t.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(k).multiplyScalar(N),B.distance=O,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[v]=B;let j=S.shadow;if(S.map&&(n.spotLightMap[P]=S.map,P++,j.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[v]=j.matrix,S.castShadow){let W=e.get(S);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=X,b++}v++}else if(S.isRectAreaLight){let B=t.get(S);B.color.copy(k).multiplyScalar(N),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=B,m++}else if(S.isPointLight){let B=t.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){let j=S.shadow,W=e.get(S);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=B,g++}else if(S.isHemisphereLight){let B=t.get(S);B.skyColor.copy(S.color).multiplyScalar(N),B.groundColor.copy(S.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==P||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=P,R.numLightProbes=A,n.version=tx++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let y=c[p];if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function qh(i){let t=new nx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ix(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cl=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ax(i,t,e){let n=new zs,s=new it,r=new it,a=new te,o=new Cl({depthPacking:Yd}),l=new Pl,c={},h=e.maxTextureSize,u={[Xn]:Ee,[Ee]:Xn,[on]:on},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new J(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let F=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==En&&this.type===En,O=p===En&&this.type!==En;for(let X=0,B=E.length;X<B;X++){let j=E[X],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y)),W.map===null||N===!0||O===!0){let xt=this.type!==En?{minFilter:Je,magFilter:Je}:{};W.map!==null&&W.map.dispose(),W.map=new Cn(s.x,s.y,xt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ot=W.getViewportCount();for(let xt=0;xt<ot;xt++){let rt=W.getViewport(xt);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),k.viewport(a),W.updateMatrices(j,xt),n=W.getFrustum(),b(A,R,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===En&&_(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,x,S)};function _(E,A){let R=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,f,v,null)}function y(E,A,R,F){let x=null,S=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=R.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=x.uuid,N=A.uuid,O=c[k];O===void 0&&(O={},c[k]=O);let X=O[N];X===void 0&&(X=x.clone(),O[N]=X,A.addEventListener("dispose",P)),x=X}if(x.visible=A.visible,x.wireframe=A.wireframe,F===En?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let k=i.properties.get(x);k.light=R}return x}function b(E,A,R,F,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===En)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let N=t.update(E),O=E.material;if(Array.isArray(O)){let X=N.groups;for(let B=0,j=X.length;B<j;B++){let W=X[B],ht=O[W.materialIndex];if(ht&&ht.visible){let ot=y(E,ht,F,x);E.onBeforeShadow(i,E,A,R,N,ot,W),i.renderBufferDirect(R,null,N,ot,E,W),E.onAfterShadow(i,E,A,R,N,ot,W)}}}else if(O.visible){let X=y(E,O,F,x);E.onBeforeShadow(i,E,A,R,N,X,null),i.renderBufferDirect(R,null,N,X,E,null),E.onAfterShadow(i,E,A,R,N,X,null)}}let k=E.children;for(let N=0,O=k.length;N<O;N++)b(k[N],A,R,F,x)}function P(E){E.target.removeEventListener("dispose",P);for(let R in c){let F=c[R],x=E.target.uuid;x in F&&(F[x].dispose(),delete F[x])}}}var ox={[No]:ko,[Oo]:zo,[Fo]:Ho,[Yi]:Bo,[ko]:No,[zo]:Oo,[Ho]:Fo,[Bo]:Yi};function lx(i){function t(){let L=!1,ft=new te,q=null,K=new te(0,0,0,0);return{setMask:function(ut){q!==ut&&!L&&(i.colorMask(ut,ut,ut,ut),q=ut)},setLocked:function(ut){L=ut},setClear:function(ut,pt,Gt,ge,ze){ze===!0&&(ut*=ge,pt*=ge,Gt*=ge),ft.set(ut,pt,Gt,ge),K.equals(ft)===!1&&(i.clearColor(ut,pt,Gt,ge),K.copy(ft))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function e(){let L=!1,ft=!1,q=null,K=null,ut=null;return{setReversed:function(pt){ft=pt},setTest:function(pt){pt?nt(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(pt){q!==pt&&!L&&(i.depthMask(pt),q=pt)},setFunc:function(pt){if(ft&&(pt=ox[pt]),K!==pt){switch(pt){case No:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=pt}},setLocked:function(pt){L=pt},setClear:function(pt){ut!==pt&&(i.clearDepth(pt),ut=pt)},reset:function(){L=!1,q=null,K=null,ut=null}}}function n(){let L=!1,ft=null,q=null,K=null,ut=null,pt=null,Gt=null,ge=null,ze=null;return{setTest:function(Xt){L||(Xt?nt(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Xt){ft!==Xt&&!L&&(i.stencilMask(Xt),ft=Xt)},setFunc:function(Xt,He,vn){(q!==Xt||K!==He||ut!==vn)&&(i.stencilFunc(Xt,He,vn),q=Xt,K=He,ut=vn)},setOp:function(Xt,He,vn){(pt!==Xt||Gt!==He||ge!==vn)&&(i.stencilOp(Xt,He,vn),pt=Xt,Gt=He,ge=vn)},setLocked:function(Xt){L=Xt},setClear:function(Xt){ze!==Xt&&(i.clearStencil(Xt),ze=Xt)},reset:function(){L=!1,ft=null,q=null,K=null,ut=null,pt=null,Gt=null,ge=null,ze=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,y=null,b=null,P=null,E=new Rt(0,0,0),A=0,R=!1,F=null,x=null,S=null,k=null,N=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,B=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=B>=2);let W=null,ht={},ot=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),rt=new te().fromArray(ot),mt=new te().fromArray(xt);function G(L,ft,q,K){let ut=new Uint8Array(4),pt=i.createTexture();i.bindTexture(L,pt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<q;Gt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ft+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return pt}let Z={};Z[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),r.setFunc(Yi),Bt(!1),Wt(Jc),nt(i.CULL_FACE),I(Gn);function nt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function lt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Dt(L,ft){return h[L]!==ft?(i.bindFramebuffer(L,ft),h[L]=ft,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Et(L,ft){let q=d,K=!1;if(L){q=u.get(ft),q===void 0&&(q=[],u.set(ft,q));let ut=L.textures;if(q.length!==ut.length||q[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Gt=ut.length;pt<Gt;pt++)q[pt]=i.COLOR_ATTACHMENT0+pt;q.length=ut.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function Ft(L){return f!==L?(i.useProgram(L),f=L,!0):!1}let Qt={[ci]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};Qt[Sd]=i.MIN,Qt[wd]=i.MAX;let Vt={[Ed]:i.ZERO,[Td]:i.ONE,[Ad]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Id]:i.DST_COLOR,[Cd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[Ld]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,ft,q,K,ut,pt,Gt,ge,ze,Xt){if(L===Gn){g===!0&&(lt(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),L!==_d){if(L!==v||Xt!==R){if((m!==ci||y!==ci)&&(i.blendEquation(i.FUNC_ADD),m=ci,y=ci),Xt)switch(L){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,_=null,b=null,P=null,E.set(0,0,0),A=0,v=L,R=Xt}return}ut=ut||ft,pt=pt||q,Gt=Gt||K,(ft!==m||ut!==y)&&(i.blendEquationSeparate(Qt[ft],Qt[ut]),m=ft,y=ut),(q!==p||K!==_||pt!==b||Gt!==P)&&(i.blendFuncSeparate(Vt[q],Vt[K],Vt[pt],Vt[Gt]),p=q,_=K,b=pt,P=Gt),(ge.equals(E)===!1||ze!==A)&&(i.blendColor(ge.r,ge.g,ge.b,ze),E.copy(ge),A=ze),v=L,R=!1}function Ge(L,ft){L.side===on?lt(i.CULL_FACE):nt(i.CULL_FACE);let q=L.side===Ee;ft&&(q=!q),Bt(q),L.blending===Wn&&L.transparent===!1?I(Gn):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function Wt(L){L!==yd?(nt(i.CULL_FACE),L!==x&&(L===Jc?i.cullFace(i.BACK):L===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),x=L}function Pt(L){L!==S&&(X&&i.lineWidth(L),S=L)}function ie(L,ft,q){L?(nt(i.POLYGON_OFFSET_FILL),(k!==ft||N!==q)&&(i.polygonOffset(ft,q),k=ft,N=q)):lt(i.POLYGON_OFFSET_FILL)}function Ut(L){L?nt(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+O-1),W!==L&&(i.activeTexture(L),W=L)}function M(L,ft,q){q===void 0&&(W===null?q=i.TEXTURE0+O-1:q=W);let K=ht[q];K===void 0&&(K={type:void 0,texture:void 0},ht[q]=K),(K.type!==L||K.texture!==ft)&&(W!==q&&(i.activeTexture(q),W=q),i.bindTexture(L,ft||Z[L]),K.type=L,K.texture=ft)}function z(){let L=ht[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){rt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function vt(L){mt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),mt.copy(L))}function zt(L,ft){let q=l.get(ft);q===void 0&&(q=new WeakMap,l.set(ft,q));let K=q.get(L);K===void 0&&(K=i.getUniformBlockIndex(ft,L.name),q.set(L,K))}function Nt(L,ft){let K=l.get(ft).get(L);o.get(ft)!==K&&(i.uniformBlockBinding(ft,K,L.__bindingPointIndex),o.set(ft,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ht={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,y=null,b=null,P=null,E=new Rt(0,0,0),A=0,R=!1,F=null,x=null,S=null,k=null,N=null,rt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:nt,disable:lt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Ft,setBlending:I,setMaterial:Ge,setFlipSided:Bt,setCullFace:Wt,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:Ut,activeTexture:T,bindTexture:M,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:yt,texImage3D:It,updateUBOMapping:zt,uniformBlockBinding:Nt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:ee}}function Xh(i,t,e,n){let s=cx(n);switch(e){case uu:return i*t;case fu:return i*t;case pu:return i*t*2;case mu:return i*t/s.components*s.byteLength;case lc:return i*t/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case cc:return i*t*2/s.components*s.byteLength;case du:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case hc:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case qo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gr:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xu:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cx(i){switch(i){case Rn:case lu:return{byteLength:1,components:1};case ks:case cu:case js:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case pi:case rc:case Tn:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Kr("canvas")}function v(T,M,z){let Y=1,Q=Ut(T);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(Y*Q.width),bt=Math.floor(Y*Q.height);u===void 0&&(u=g($,bt));let ct=M?g($,bt):u;return ct.width=$,ct.height=bt,ct.getContext("2d").drawImage(T,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+bt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Je&&T.minFilter!==ln}function p(T){i.generateMipmap(T)}function _(T,M,z,Y,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){let bt=Q?Xr:Zt.getTransfer(Y);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=bt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(T,M){let z;return T?M===null||M===pi||M===Ji?z=i.DEPTH24_STENCIL8:M===Tn?z=i.DEPTH32F_STENCIL8:M===ks&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===Ji?z=i.DEPTH_COMPONENT24:M===Tn?z=i.DEPTH_COMPONENT32F:M===ks&&(z=i.DEPTH_COMPONENT16),z}function b(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){let M=T.target;M.removeEventListener("dispose",P),A(M),M.isVideoTexture&&h.delete(M)}function E(T){let M=T.target;M.removeEventListener("dispose",E),F(M)}function A(T){let M=n.get(T);if(M.__webglInit===void 0)return;let z=T.source,Y=d.get(z);if(Y){let Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(T),Object.keys(Y).length===0&&d.delete(z)}n.remove(T)}function R(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let z=T.source,Y=d.get(z);delete Y[M.__cacheKey],a.memory.textures--}function F(T){let M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=T.textures;for(let Y=0,Q=z.length;Y<Q;Y++){let $=n.get(z[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[Y])}n.remove(T)}let x=0;function S(){x=0}function k(){let T=x;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),x+=1,T}function N(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function O(T,M){let z=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(z,T,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function X(T,M){let z=n.get(T);if(T.version>0&&z.__version!==T.version){mt(z,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function B(T,M){let z=n.get(T);if(T.version>0&&z.__version!==T.version){mt(z,T,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function j(T,M){let z=n.get(T);if(T.version>0&&z.__version!==T.version){G(z,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let W={[Ns]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Wo]:i.MIRRORED_REPEAT},ht={[Je]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ot={[Kd]:i.NEVER,[nf]:i.ALWAYS,[Jd]:i.LESS,[vu]:i.LEQUAL,[jd]:i.EQUAL,[ef]:i.GEQUAL,[Qd]:i.GREATER,[tf]:i.NOTEQUAL};function xt(T,M){if(M.type===Tn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===ja||M.magFilter===dr||M.magFilter===fi||M.minFilter===ln||M.minFilter===ja||M.minFilter===dr||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,W[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,W[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,W[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==dr&&M.minFilter!==fi||M.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function rt(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",P));let Y=M.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let $=N(M);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;let bt=Q[T.__cacheKey];bt!==void 0&&(Q[T.__cacheKey].usedTimes--,bt.usedTimes===0&&R(M)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return z}function mt(T,M,z){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=rt(T,M),$=M.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+z);let bt=n.get($);if($.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let ct=Zt.getPrimaries(Zt.workingColorSpace),gt=M.colorSpace===Vn?null:Zt.getPrimaries(M.colorSpace),qt=M.colorSpace===Vn||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=v(M.image,!1,s.maxTextureSize);tt=ie(M,tt);let yt=r.convert(M.format,M.colorSpace),It=r.convert(M.type),Lt=_(M.internalFormat,yt,It,M.colorSpace,M.isVideoTexture);xt(Y,M);let vt,zt=M.mipmaps,Nt=M.isVideoTexture!==!0,ee=bt.__version===void 0||Q===!0,L=$.dataReady,ft=b(M,tt);if(M.isDepthTexture)Lt=y(M.format===ji,M.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Lt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,yt,It,null));else if(M.isDataTexture)if(zt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Lt,zt[0].width,zt[0].height);for(let q=0,K=zt.length;q<K;q++)vt=zt[q],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,It,vt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,yt,It,vt.data);M.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,ft,Lt,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,yt,It,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,tt.width,tt.height,0,yt,It,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Lt,zt[0].width,zt[0].height,tt.depth);for(let q=0,K=zt.length;q<K;q++)if(vt=zt[q],M.format!==cn)if(yt!==null)if(Nt){if(L)if(M.layerUpdates.size>0){let ut=Xh(vt.width,vt.height,M.format,M.type);for(let pt of M.layerUpdates){let Gt=vt.data.subarray(pt*ut/vt.data.BYTES_PER_ELEMENT,(pt+1)*ut/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,pt,vt.width,vt.height,1,yt,Gt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,tt.depth,yt,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,tt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,tt.depth,yt,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Lt,vt.width,vt.height,tt.depth,0,yt,It,vt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Lt,zt[0].width,zt[0].height);for(let q=0,K=zt.length;q<K;q++)vt=zt[q],M.format!==cn?yt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,yt,It,vt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,vt.width,vt.height,0,yt,It,vt.data)}else if(M.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Lt,tt.width,tt.height,tt.depth),L)if(M.layerUpdates.size>0){let q=Xh(tt.width,tt.height,M.format,M.type);for(let K of M.layerUpdates){let ut=tt.data.subarray(K*q/tt.data.BYTES_PER_ELEMENT,(K+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,yt,It,ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,yt,It,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,tt.width,tt.height,tt.depth,0,yt,It,tt.data);else if(M.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,ft,Lt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,yt,It,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,tt.width,tt.height,tt.depth,0,yt,It,tt.data);else if(M.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,ft,Lt,tt.width,tt.height);else{let q=tt.width,K=tt.height;for(let ut=0;ut<ft;ut++)e.texImage2D(i.TEXTURE_2D,ut,Lt,q,K,0,yt,It,null),q>>=1,K>>=1}}else if(zt.length>0){if(Nt&&ee){let q=Ut(zt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Lt,q.width,q.height)}for(let q=0,K=zt.length;q<K;q++)vt=zt[q],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,It,vt):e.texImage2D(i.TEXTURE_2D,q,Lt,yt,It,vt);M.generateMipmaps=!1}else if(Nt){if(ee){let q=Ut(tt);e.texStorage2D(i.TEXTURE_2D,ft,Lt,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,It,tt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,yt,It,tt);m(M)&&p(Y),bt.__version=$.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function G(T,M,z){if(M.image.length!==6)return;let Y=rt(T,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let $=n.get(Q);if(Q.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let bt=Zt.getPrimaries(Zt.workingColorSpace),ct=M.colorSpace===Vn?null:Zt.getPrimaries(M.colorSpace),gt=M.colorSpace===Vn||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let qt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let K=0;K<6;K++)!qt&&!tt?yt[K]=v(M.image[K],!0,s.maxCubemapSize):yt[K]=tt?M.image[K].image:M.image[K],yt[K]=ie(M,yt[K]);let It=yt[0],Lt=r.convert(M.format,M.colorSpace),vt=r.convert(M.type),zt=_(M.internalFormat,Lt,vt,M.colorSpace),Nt=M.isVideoTexture!==!0,ee=$.__version===void 0||Y===!0,L=Q.dataReady,ft=b(M,It);xt(i.TEXTURE_CUBE_MAP,M);let q;if(qt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,It.width,It.height);for(let K=0;K<6;K++){q=yt[K].mipmaps;for(let ut=0;ut<q.length;ut++){let pt=q[ut];M.format!==cn?Lt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,pt.width,pt.height,Lt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,pt.width,pt.height,Lt,vt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,zt,pt.width,pt.height,0,Lt,vt,pt.data)}}}else{if(q=M.mipmaps,Nt&&ee){q.length>0&&ft++;let K=Ut(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt[K].width,yt[K].height,Lt,vt,yt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,yt[K].width,yt[K].height,0,Lt,vt,yt[K].data);for(let ut=0;ut<q.length;ut++){let Gt=q[ut].image[K].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Gt.width,Gt.height,Lt,vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,zt,Gt.width,Gt.height,0,Lt,vt,Gt.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Lt,vt,yt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,Lt,vt,yt[K]);for(let ut=0;ut<q.length;ut++){let pt=q[ut];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Lt,vt,pt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,zt,Lt,vt,pt.image[K])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Z(T,M,z,Y,Q,$){let bt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),gt=_(z.internalFormat,bt,ct,z.colorSpace);if(!n.get(M).__hasExternalTextures){let tt=Math.max(1,M.width>>$),yt=Math.max(1,M.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,gt,tt,yt,M.depth,0,bt,ct,null):e.texImage2D(Q,$,gt,tt,yt,0,bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,n.get(z).__webglTexture,0,Bt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,n.get(z).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,$=y(M.stencilBuffer,Q),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Bt(M);Wt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{let Y=M.textures;for(let Q=0;Q<Y.length;Q++){let $=Y[Q],bt=r.convert($.format,$.colorSpace),ct=r.convert($.type),gt=_($.internalFormat,bt,ct,$.colorSpace),qt=Bt(M);z&&Wt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,gt,M.width,M.height):Wt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,gt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);let Y=n.get(M.depthTexture).__webglTexture,Q=Bt(M);if(M.depthTexture.format===qi)Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===ji)Wt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(T){let M=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[Y],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(T,M,z){let Y=n.get(T);M!==void 0&&Z(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Dt(T)}function Ft(T){let M=T.texture,z=n.get(T),Y=n.get(M);T.addEventListener("dispose",E);let Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let gt=0;gt<M.mipmaps.length;gt++)z.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ct=0,gt=Q.length;ct<gt;ct++){let qt=n.get(Q[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Wt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let gt=Q[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);let qt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),yt=_(gt.internalFormat,qt,tt,gt.colorSpace,T.isXRRenderTarget===!0),It=Bt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),xt(i.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Z(z.__webglFramebuffer[ct][gt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else Z(z.__webglFramebuffer[ct],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,gt=Q.length;ct<gt;ct++){let qt=Q[ct],tt=n.get(qt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),xt(i.TEXTURE_2D,qt),Z(z.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Y.__webglTexture),xt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Z(z.__webglFramebuffer[gt],T,M,i.COLOR_ATTACHMENT0,ct,gt);else Z(z.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Qt(T){let M=T.textures;for(let z=0,Y=M.length;z<Y;z++){let Q=M[z];if(m(Q)){let $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(Q).__webglTexture;e.bindTexture($,bt),p($),e.unbindTexture()}}}let Vt=[],I=[];function Ge(T){if(T.samples>0){if(Wt(T)===!1){let M=T.textures,z=T.width,Y=T.height,Q=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),ct=M.length>1;if(ct)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);let qt=n.get(M[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,i.NEAREST),l===!0&&(Vt.length=0,I.length=0,Vt.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);let qt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Bt(T){return Math.min(s.maxSamples,T.samples)}function Wt(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function ie(T,M){let z=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Qn&&z!==Vn&&(Zt.getTransfer(z)===re?(Y!==cn||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=Et,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Wt}function ux(i,t){function e(n,s=Vn){let r,a=Zt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===du)return i.RGB;if(n===cn)return i.RGBA;if(n===fu)return i.LUMINANCE;if(n===pu)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===mu)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Hr||n===Vr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Xo||n===$o||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Ko||n===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Ko)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xu||n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Il=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},dx={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new Ll,m=e.getContextAttributes(),p=null,_=null,y=[],b=[],P=new it,E=null,A=new we;A.layers.enable(1),A.viewport=new te;let R=new we;R.layers.enable(2),R.viewport=new te;let F=[A,R],x=new Il;x.layers.enable(1),x.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=y[G];return Z===void 0&&(Z=new Is,y[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=y[G];return Z===void 0&&(Z=new Is,y[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=y[G];return Z===void 0&&(Z=new Is,y[G]=Z),Z.getHandSpace()};function N(G){let Z=b.indexOf(G.inputSource);if(Z===-1)return;let nt=y[Z];nt!==void 0&&(nt.update(G.inputSource,G.frame,c||a),nt.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",X);for(let G=0;G<y.length;G++){let Z=b[G];Z!==null&&(b[G]=null,y[G].disconnect(Z))}S=null,k=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Cn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,nt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?ji:qi,nt=m.stencil?Ji:pi);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Cn(d.textureWidth,d.textureHeight,{format:cn,type:Rn,depthTexture:new sa(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(G){for(let Z=0;Z<G.removed.length;Z++){let nt=G.removed[Z],lt=b.indexOf(nt);lt>=0&&(b[lt]=null,y[lt].disconnect(nt))}for(let Z=0;Z<G.added.length;Z++){let nt=G.added[Z],lt=b.indexOf(nt);if(lt===-1){for(let Et=0;Et<y.length;Et++)if(Et>=b.length){b.push(nt),lt=Et;break}else if(b[Et]===null){b[Et]=nt,lt=Et;break}if(lt===-1)break}let Dt=y[lt];Dt&&Dt.connect(nt)}}let B=new C,j=new C;function W(G,Z,nt){B.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(nt.matrixWorld);let lt=B.distanceTo(j),Dt=Z.projectionMatrix.elements,Et=nt.projectionMatrix.elements,Ft=Dt[14]/(Dt[10]-1),Qt=Dt[14]/(Dt[10]+1),Vt=(Dt[9]+1)/Dt[5],I=(Dt[9]-1)/Dt[5],Ge=(Dt[8]-1)/Dt[0],Bt=(Et[8]+1)/Et[0],Wt=Ft*Ge,Pt=Ft*Bt,ie=lt/(-Ge+Bt),Ut=ie*-Ge;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Dt[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let T=Ft+ie,M=Qt+ie,z=Wt-Ut,Y=Pt+(lt-Ut),Q=Vt*Qt/M*T,$=I*Qt/M*T;G.projectionMatrix.makePerspective(z,Y,Q,$,T,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ht(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Z=G.near,nt=G.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(nt=v.depthFar)),x.near=R.near=A.near=Z,x.far=R.far=A.far=nt,(S!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,k=x.far);let lt=G.parent,Dt=x.cameras;ht(x,lt);for(let Et=0;Et<Dt.length;Et++)ht(Dt[Et],lt);Dt.length===2?W(x,A,R):x.projectionMatrix.copy(A.projectionMatrix),ot(G,x,lt)};function ot(G,Z,nt){nt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(nt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Os*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let xt=null;function rt(G,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let lt=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Et=0;Et<nt.length;Et++){let Ft=nt[Et],Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{let I=u.getViewSubImage(d,Ft);Qt=I.viewport,Et===0&&(t.setRenderTargetTextures(_,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(_))}let Vt=F[Et];Vt===void 0&&(Vt=new we,Vt.layers.enable(Et),Vt.viewport=new te,F[Et]=Vt),Vt.matrix.fromArray(Ft.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ft.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Et===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Vt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Et=u.getDepthInformation(nt[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let nt=0;nt<y.length;nt++){let lt=b[nt],Dt=y[nt];lt!==null&&Dt!==void 0&&Dt.update(lt,Z,c||a)}xt&&xt(G,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let mt=new wu;mt.setAnimationLoop(rt),this.setAnimationLoop=function(G){xt=G},this.dispose=function(){}}},oi=new pn,mx=new oe;function gx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ee&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ee&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,b=_.envMapRotation;y&&(m.envMap.value=y,oi.copy(b),oi.x*=-1,oi.y*=-1,oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ee&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function c(_,y){let b=s[_.id];b===void 0&&(g(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(_,P);let E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let y=u();_.__bindingPointIndex=y;let b=i.createBuffer(),P=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],b=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let R=Array.isArray(b[E])?b[E]:[b[E]];for(let F=0,x=R.length;F<x;F++){let S=R[F];if(f(S,E,F,P)===!0){let k=S.__offset,N=Array.isArray(S.value)?S.value:[S.value],O=0;for(let X=0;X<N.length;X++){let B=N[X],j=v(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+O,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,b,P){let E=_.value,A=y+"_"+b;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{let R=P[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(_){let y=_.uniforms,b=0,P=16;for(let A=0,R=y.length;A<R;A++){let F=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,S=F.length;x<S;x++){let k=F[x],N=Array.isArray(k.value)?k.value:[k.value];for(let O=0,X=N.length;O<X;O++){let B=N[O],j=v(B),W=b%P,ht=W%j.boundary,ot=W+ht;b+=ht,ot!==0&&P-ot<j.storage&&(b+=P-ot),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=j.storage}}}let E=b%P;return E>0&&(b+=P-E),_.__size=b,_.__cache={},this}function v(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var es=class{constructor(t={}){let{canvas:e=_f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=qn,this.toneMappingExposure=1;let y=this,b=!1,P=0,E=0,A=null,R=-1,F=null,x=new te,S=new te,k=null,N=new Rt(0),O=0,X=e.width,B=e.height,j=1,W=null,ht=null,ot=new te(0,0,X,B),xt=new te(0,0,X,B),rt=!1,mt=new zs,G=!1,Z=!1,nt=new oe,lt=new oe,Dt=new C,Et=new te,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Vt(){return A===null?j:1}let I=n;function Ge(w,D){return e.getContext(w,D)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){let D="webgl2";if(I=Ge(D,w),I===null)throw Ge(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,Wt,Pt,ie,Ut,T,M,z,Y,Q,$,bt,ct,gt,qt,tt,yt,It,Lt,vt,zt,Nt,ee,L;function ft(){Bt=new D0(I),Bt.init(),Nt=new ux(I,Bt),Wt=new A0(I,Bt,t,Nt),Pt=new lx(I),Wt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ie=new k0(I),Ut=new Zg,T=new hx(I,Bt,Pt,Ut,Wt,Nt,ie),M=new C0(y),z=new L0(y),Y=new Gf(I),ee=new E0(I,Y),Q=new U0(I,Y,ie,ee),$=new F0(I,Q,Y,ie),Lt=new O0(I,Wt,T),tt=new R0(Ut),bt=new Yg(y,M,z,Bt,Wt,ee,tt),ct=new gx(y,Ut),gt=new Jg,qt=new ix(Bt),It=new w0(y,M,z,Pt,$,d,l),yt=new ax(y,$,Wt),L=new xx(I,ie,Wt,Pt),vt=new T0(I,Bt,ie),zt=new N0(I,Bt,ie),ie.programs=bt.programs,y.capabilities=Wt,y.extensions=Bt,y.properties=Ut,y.renderLists=gt,y.shadowMap=yt,y.state=Pt,y.info=ie}ft();let q=new Dl(y,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(X,B,!1))},this.getSize=function(w){return w.set(X,B)},this.setSize=function(w,D,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,B=D,e.width=Math.floor(w*j),e.height=Math.floor(D*j),H===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(X*j,B*j).floor()},this.setDrawingBufferSize=function(w,D,H){X=w,B=D,j=H,e.width=Math.floor(w*H),e.height=Math.floor(D*H),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(ot)},this.setViewport=function(w,D,H,V){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,D,H,V),Pt.viewport(x.copy(ot).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,D,H,V){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,D,H,V),Pt.scissor(S.copy(xt).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){Pt.setScissorTest(rt=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,D=!0,H=!0){let V=0;if(w){let U=!1;if(A!==null){let et=A.texture.format;U=et===hc||et===cc||et===lc}if(U){let et=A.texture.type,dt=et===Rn||et===pi||et===ks||et===Ji||et===ac||et===oc,_t=It.getClearColor(),Mt=It.getClearAlpha(),At=_t.r,Ct=_t.g,St=_t.b;dt?(f[0]=At,f[1]=Ct,f[2]=St,f[3]=Mt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=At,g[1]=Ct,g[2]=St,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),gt.dispose(),qt.dispose(),Ut.dispose(),M.dispose(),z.dispose(),$.dispose(),ee.dispose(),L.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Gc),q.removeEventListener("sessionend",Wc),ei.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=ie.autoReset,D=yt.enabled,H=yt.autoUpdate,V=yt.needsUpdate,U=yt.type;ft(),ie.autoReset=w,yt.enabled=D,yt.autoUpdate=H,yt.needsUpdate=V,yt.type=U}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gt(w){let D=w.target;D.removeEventListener("dispose",Gt),ge(D)}function ge(w){ze(w),Ut.remove(w)}function ze(w){let D=Ut.get(w).programs;D!==void 0&&(D.forEach(function(H){bt.releaseProgram(H)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,H,V,U,et){D===null&&(D=Ft);let dt=U.isMesh&&U.matrixWorld.determinant()<0,_t=pd(w,D,H,V,U);Pt.setMaterial(V,dt);let Mt=H.index,At=1;if(V.wireframe===!0){if(Mt=Q.getWireframeAttribute(H),Mt===void 0)return;At=2}let Ct=H.drawRange,St=H.attributes.position,jt=Ct.start*At,se=(Ct.start+Ct.count)*At;et!==null&&(jt=Math.max(jt,et.start*At),se=Math.min(se,(et.start+et.count)*At)),Mt!==null?(jt=Math.max(jt,0),se=Math.min(se,Mt.count)):St!=null&&(jt=Math.max(jt,0),se=Math.min(se,St.count));let ue=se-jt;if(ue<0||ue===1/0)return;ee.setup(U,V,_t,H,Mt);let We,$t=vt;if(Mt!==null&&(We=Y.get(Mt),$t=zt,$t.setIndex(We)),U.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*Vt()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(U.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),Pt.setLineWidth(wt*Vt()),U.isLineSegments?$t.setMode(I.LINES):U.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else U.isPoints?$t.setMode(I.POINTS):U.isSprite&&$t.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let wt=U._multiDrawStarts,Te=U._multiDrawCounts,Yt=U._multiDrawCount,en=Mt?Y.get(Mt).bytesPerElement:1,Ai=Ut.get(V).currentProgram.getUniforms();for(let qe=0;qe<Yt;qe++)Ai.setValue(I,"_gl_DrawID",qe),$t.render(wt[qe]/en,Te[qe])}else if(U.isInstancedMesh)$t.renderInstances(jt,ue,U.count);else if(H.isInstancedBufferGeometry){let wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,wt);$t.renderInstances(jt,ue,Te)}else $t.render(jt,ue)};function Xt(w,D,H){w.transparent===!0&&w.side===on&&w.forceSinglePass===!1?(w.side=Ee,w.needsUpdate=!0,ur(w,D,H),w.side=Xn,w.needsUpdate=!0,ur(w,D,H),w.side=on):ur(w,D,H)}this.compile=function(w,D,H=null){H===null&&(H=w),m=qt.get(H),m.init(D),_.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let et=U.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){let _t=et[dt];Xt(_t,H,U),V.add(_t)}else Xt(et,H,U),V.add(et)}),_.pop(),m=null,V},this.compileAsync=function(w,D,H=null){let V=this.compile(w,D,H);return new Promise(U=>{function et(){if(V.forEach(function(dt){Ut.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){U(w);return}setTimeout(et,10)}Bt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let He=null;function vn(w){He&&He(w)}function Gc(){ei.stop()}function Wc(){ei.start()}let ei=new wu;ei.setAnimationLoop(vn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(w){He=w,q.setAnimationLoop(w),w===null?ei.stop():ei.start()},q.addEventListener("sessionstart",Gc),q.addEventListener("sessionend",Wc),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,D,A),m=qt.get(w,_.length),m.init(D),_.push(m),lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),mt.setFromProjectionMatrix(lt),Z=this.localClippingEnabled,G=tt.init(this.clippingPlanes,Z),v=gt.get(w,p.length),v.init(),p.push(v),q.enabled===!0&&q.isPresenting===!0){let et=y.xr.getDepthSensingMesh();et!==null&&Ya(et,D,-1/0,y.sortObjects)}Ya(w,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(W,ht),Qt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qt&&It.addToRenderList(v,w),this.info.render.frame++,G===!0&&tt.beginShadows();let H=m.state.shadowsArray;yt.render(H,w,D),G===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=v.opaque,U=v.transmissive;if(m.setupLights(),D.isArrayCamera){let et=D.cameras;if(U.length>0)for(let dt=0,_t=et.length;dt<_t;dt++){let Mt=et[dt];Xc(V,U,w,Mt)}Qt&&It.render(w);for(let dt=0,_t=et.length;dt<_t;dt++){let Mt=et[dt];qc(v,w,Mt,Mt.viewport)}}else U.length>0&&Xc(V,U,w,D),Qt&&It.render(w),qc(v,w,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,D),ee.resetDefaultState(),R=-1,F=null,_.pop(),_.length>0?(m=_[_.length-1],G===!0&&tt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ya(w,D,H,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){V&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let dt=$.update(w),_t=w.material;_t.visible&&v.push(w,dt,_t,H,Et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){let dt=$.update(w),_t=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Et.copy(dt.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(_t)){let Mt=dt.groups;for(let At=0,Ct=Mt.length;At<Ct;At++){let St=Mt[At],jt=_t[St.materialIndex];jt&&jt.visible&&v.push(w,dt,jt,H,Et.z,St)}}else _t.visible&&v.push(w,dt,_t,H,Et.z,null)}}let et=w.children;for(let dt=0,_t=et.length;dt<_t;dt++)Ya(et[dt],D,H,V)}function qc(w,D,H,V){let U=w.opaque,et=w.transmissive,dt=w.transparent;m.setupLightsView(H),G===!0&&tt.setGlobalState(y.clippingPlanes,H),V&&Pt.viewport(x.copy(V)),U.length>0&&hr(U,D,H),et.length>0&&hr(et,D,H),dt.length>0&&hr(dt,D,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Xc(w,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?js:Rn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let et=m.state.transmissionRenderTarget[V.id],dt=V.viewport||x;et.setSize(dt.z,dt.w);let _t=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(N),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&It.render(H);let Mt=y.toneMapping;y.toneMapping=qn;let At=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),G===!0&&tt.setGlobalState(y.clippingPlanes,V),hr(w,H,V),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,jt=D.length;St<jt;St++){let se=D[St],ue=se.object,We=se.geometry,$t=se.material,wt=se.group;if($t.side===on&&ue.layers.test(V.layers)){let Te=$t.side;$t.side=Ee,$t.needsUpdate=!0,$c(ue,H,V,We,$t,wt),$t.side=Te,$t.needsUpdate=!0,Ct=!0}}Ct===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}y.setRenderTarget(_t),y.setClearColor(N,O),At!==void 0&&(V.viewport=At),y.toneMapping=Mt}function hr(w,D,H){let V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=w.length;U<et;U++){let dt=w[U],_t=dt.object,Mt=dt.geometry,At=V===null?dt.material:V,Ct=dt.group;_t.layers.test(H.layers)&&$c(_t,D,H,Mt,At,Ct)}}function $c(w,D,H,V,U,et){w.onBeforeRender(y,D,H,V,U,et),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,D,H,V,w,et),U.transparent===!0&&U.side===on&&U.forceSinglePass===!1?(U.side=Ee,U.needsUpdate=!0,y.renderBufferDirect(H,D,V,U,w,et),U.side=Xn,U.needsUpdate=!0,y.renderBufferDirect(H,D,V,U,w,et),U.side=on):y.renderBufferDirect(H,D,V,U,w,et),w.onAfterRender(y,D,H,V,U,et)}function ur(w,D,H){D.isScene!==!0&&(D=Ft);let V=Ut.get(w),U=m.state.lights,et=m.state.shadowsArray,dt=U.state.version,_t=bt.getParameters(w,U.state,et,D,H),Mt=bt.getProgramCacheKey(_t),At=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?z:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",Gt),At=new Map,V.programs=At);let Ct=At.get(Mt);if(Ct!==void 0){if(V.currentProgram===Ct&&V.lightsStateVersion===dt)return Zc(w,_t),Ct}else _t.uniforms=bt.getUniforms(w),w.onBeforeCompile(_t,y),Ct=bt.acquireProgram(_t,Mt),At.set(Mt,Ct),V.uniforms=_t.uniforms;let St=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=tt.uniform),Zc(w,_t),V.needsLights=gd(w),V.lightsStateVersion=dt,V.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ct,V.uniformsList=null,Ct}function Yc(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=$i.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Zc(w,D){let H=Ut.get(w);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function pd(w,D,H,V,U){D.isScene!==!0&&(D=Ft),T.resetTextureUnits();let et=D.fog,dt=V.isMeshStandardMaterial?D.environment:null,_t=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,Mt=(V.isMeshStandardMaterial?z:M).get(V.envMap||dt),At=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ct=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,se=!!H.morphAttributes.color,ue=qn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=y.toneMapping);let We=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$t=We!==void 0?We.length:0,wt=Ut.get(V),Te=m.state.lights;if(G===!0&&(Z===!0||w!==F)){let Ze=w===F&&V.id===R;tt.setState(V,w,Ze)}let Yt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Te.state.version||wt.outputColorSpace!==_t||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==Mt||V.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==At||wt.vertexTangents!==Ct||wt.morphTargets!==St||wt.morphNormals!==jt||wt.morphColors!==se||wt.toneMapping!==ue||wt.morphTargetsCount!==$t)&&(Yt=!0):(Yt=!0,wt.__version=V.version);let en=wt.currentProgram;Yt===!0&&(en=ur(V,D,U));let Ai=!1,qe=!1,Za=!1,fe=en.getUniforms(),Nn=wt.uniforms;if(Pt.useProgram(en.program)&&(Ai=!0,qe=!0,Za=!0),V.id!==R&&(R=V.id,qe=!0),Ai||F!==w){Wt.reverseDepthBuffer?(nt.copy(w.projectionMatrix),bf(nt),Sf(nt),fe.setValue(I,"projectionMatrix",nt)):fe.setValue(I,"projectionMatrix",w.projectionMatrix),fe.setValue(I,"viewMatrix",w.matrixWorldInverse);let Ze=fe.map.cameraPosition;Ze!==void 0&&Ze.setValue(I,Dt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,qe=!0,Za=!0)}if(U.isSkinnedMesh){fe.setOptional(I,U,"bindMatrix"),fe.setOptional(I,U,"bindMatrixInverse");let Ze=U.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),fe.setValue(I,"boneTexture",Ze.boneTexture,T))}U.isBatchedMesh&&(fe.setOptional(I,U,"batchingTexture"),fe.setValue(I,"batchingTexture",U._matricesTexture,T),fe.setOptional(I,U,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",U._indirectTexture,T),fe.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",U._colorsTexture,T));let Ka=H.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0)&&Lt.update(U,H,en),(qe||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,fe.setValue(I,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Nn.envMap.value=Mt,Nn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Nn.envMapIntensity.value=D.environmentIntensity),qe&&(fe.setValue(I,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&md(Nn,Za),et&&V.fog===!0&&ct.refreshFogUniforms(Nn,et),ct.refreshMaterialUniforms(Nn,V,j,B,m.state.transmissionRenderTarget[w.id]),$i.upload(I,Yc(wt),Nn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($i.upload(I,Yc(wt),Nn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(I,"center",U.center),fe.setValue(I,"modelViewMatrix",U.modelViewMatrix),fe.setValue(I,"normalMatrix",U.normalMatrix),fe.setValue(I,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ze=V.uniformsGroups;for(let Ja=0,xd=Ze.length;Ja<xd;Ja++){let Kc=Ze[Ja];L.update(Kc,en),L.bind(Kc,en)}}return en}function md(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function gd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,H){Ut.get(w.texture).__webglTexture=D,Ut.get(w.depthTexture).__webglTexture=H;let V=Ut.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let H=Ut.get(w);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,H=0){A=w,P=D,E=H;let V=!0,U=null,et=!1,dt=!1;if(w){let Mt=Ut.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Mt.__hasExternalTextures)T.rebindTextures(w,Ut.get(w.texture).__webglTexture,Ut.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let St=w.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Ut.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(dt=!0);let Ct=Ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?U=Ct[D][H]:U=Ct[D],et=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=Ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[H]:U=Ct,x.copy(w.viewport),S.copy(w.scissor),k=w.scissorTest}else x.copy(ot).multiplyScalar(j).floor(),S.copy(xt).multiplyScalar(j).floor(),k=rt;if(Pt.bindFramebuffer(I.FRAMEBUFFER,U)&&V&&Pt.drawBuffers(w,U),Pt.viewport(x),Pt.scissor(S),Pt.setScissorTest(k),et){let Mt=Ut.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,H)}else if(dt){let Mt=Ut.get(w.texture),At=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,H||0,At)}R=-1},this.readRenderTargetPixels=function(w,D,H,V,U,et,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Pt.bindFramebuffer(I.FRAMEBUFFER,_t);try{let Mt=w.texture,At=Mt.format,Ct=Mt.type;if(!Wt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&H>=0&&H<=w.height-U&&I.readPixels(D,H,V,U,Nt.convert(At),Nt.convert(Ct),et)}finally{let Mt=A!==null?Ut.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,D,H,V,U,et,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){let Mt=w.texture,At=Mt.format,Ct=Mt.type;if(!Wt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&H>=0&&H<=w.height-U){Pt.bindFramebuffer(I.FRAMEBUFFER,_t);let St=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(D,H,V,U,Nt.convert(At),Nt.convert(Ct),0);let jt=A!==null?Ut.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,jt);let se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Mf(I,se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(St),I.deleteSync(se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,H=0){w.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),U=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),dt=D!==null?D.x:0,_t=D!==null?D.y:0;T.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,dt,_t,U,et),Pt.unbindTexture()},this.copyTextureToTexture=function(w,D,H=null,V=null,U=0){w.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,H=null);let et,dt,_t,Mt,At,Ct;H!==null?(et=H.max.x-H.min.x,dt=H.max.y-H.min.y,_t=H.min.x,Mt=H.min.y):(et=w.image.width,dt=w.image.height,_t=0,Mt=0),V!==null?(At=V.x,Ct=V.y):(At=0,Ct=0);let St=Nt.convert(D.format),jt=Nt.convert(D.type);T.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let se=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),We=I.getParameter(I.UNPACK_SKIP_PIXELS),$t=I.getParameter(I.UNPACK_SKIP_ROWS),wt=I.getParameter(I.UNPACK_SKIP_IMAGES),Te=w.isCompressedTexture?w.mipmaps[U]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,At,Ct,et,dt,St,jt,Te.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,At,Ct,Te.width,Te.height,St,Te.data):I.texSubImage2D(I.TEXTURE_2D,U,At,Ct,et,dt,St,jt,Te),I.pixelStorei(I.UNPACK_ROW_LENGTH,se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt),U===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,H=null,V=null,U=0){w.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0);let et,dt,_t,Mt,At,Ct,St,jt,se,ue=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(et=H.max.x-H.min.x,dt=H.max.y-H.min.y,_t=H.max.z-H.min.z,Mt=H.min.x,At=H.min.y,Ct=H.min.z):(et=ue.width,dt=ue.height,_t=ue.depth,Mt=0,At=0,Ct=0),V!==null?(St=V.x,jt=V.y,se=V.z):(St=0,jt=0,se=0);let We=Nt.convert(D.format),$t=Nt.convert(D.type),wt;if(D.isData3DTexture)T.setTexture3D(D,0),wt=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),wt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Te=I.getParameter(I.UNPACK_ROW_LENGTH),Yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Ai=I.getParameter(I.UNPACK_SKIP_ROWS),qe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(wt,U,St,jt,se,et,dt,_t,We,$t,ue.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,U,St,jt,se,et,dt,_t,We,ue.data):I.texSubImage3D(wt,U,St,jt,se,et,dt,_t,We,$t,ue),I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ai),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qe),U===0&&D.generateMipmaps&&I.generateMipmap(wt),Pt.unbindTexture()},this.initRenderTarget=function(w){Ut.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){P=0,E=0,A=null,Pt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===uc?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===xa?"display-p3":"srgb"}};var jn=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ul=class extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$h=new oe,Nl=new Fs,Dr=new Qi,Ur=new C,ra=class extends De{constructor(t=new Ce,e=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;$h.copy(s).invert(),Nl.copy(t.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);Ur.fromBufferAttribute(u,m),Yh(Ur,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Ur.fromBufferAttribute(u,g),Yh(Ur,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yh(i,t,e,n,s,r,a){let o=Nl.distanceSqToPoint(i);if(o<e){let l=new C;Nl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hn=class extends Ye{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new oe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends Hs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Nr=new C,Ro=new pc,Co=new pc,Po=new pc,Ol=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),c=Nr);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ro.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Co.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Po.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Po.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ro.calc(l),Co.calc(l),Po.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function yx(i,t){let e=1-i;return e*e*t}function vx(i,t){return 2*(1-i)*i*t}function _x(i,t){return i*i*t}function Ls(i,t,e,n){return yx(i,t)+vx(i,e)+_x(i,n)}function Mx(i,t){let e=1-i;return e*e*e*t}function bx(i,t){let e=1-i;return 3*e*e*i*t}function Sx(i,t){return 3*(1-i)*i*i*t}function wx(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return Mx(i,t)+bx(i,e)+Sx(i,n)+wx(i,s)}var aa=class extends Qe{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(t,s.x,r.x,a.x,o.x),Ds(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fl=class extends Qe{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ds(t,s.x,r.x,a.x,o.x),Ds(t,s.y,r.y,a.y,o.y),Ds(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends Qe{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bl=class extends Qe{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Qe{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(t,s.x,r.x,a.x),Ls(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends Qe{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ls(t,s.x,r.x,a.x),Ls(t,s.y,r.y,a.y),Ls(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Zh(o,l.x,c.x,h.x,u.x),Zh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Kh=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Ol,CubicBezierCurve:aa,CubicBezierCurve3:Fl,EllipseCurve:Hs,LineCurve:oa,LineCurve3:Bl,QuadraticBezierCurve:la,QuadraticBezierCurve3:zl,SplineCurve:ca}),Hl=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Kh[s.type]().fromJSON(s))}return this}},Vs=class extends Hl{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oa(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new la(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new aa(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ca(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Hs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vl=class i extends Ce{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new it,f=new C,g=new C,v=new C,m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){let y=n+_*h*s,b=Math.sin(y),P=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*P,a.push(u.x,u.y,u.z),d.x=_/e,d.y=E/(t.length-1),o.push(d.x,d.y);let A=l[3*E+0]*b,R=l[3*E+1],F=l[3*E+0]*P;c.push(A,R,F)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let b=y+_*t.length,P=b,E=b+t.length,A=b+t.length+1,R=b+1;r.push(P,E,R),r.push(A,R,E)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},gi=class i extends Vl{constructor(t=1,e=1,n=4,s=8){let r=new Vs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ns=class i extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class i extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function _(){let b=new C,P=new C,E=0,A=(e-t)/n;for(let R=0;R<=r;R++){let F=[],x=R/r,S=x*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,O=N*l+o,X=Math.sin(O),B=Math.cos(O);P.x=S*X,P.y=-x*n+m,P.z=S*B,u.push(P.x,P.y,P.z),b.set(X,A,B).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-x),F.push(g++)}v.push(F)}for(let R=0;R<s;R++)for(let F=0;F<r;F++){let x=v[F][R],S=v[F+1][R],k=v[F+1][R+1],N=v[F][R+1];t>0&&(h.push(x,S,N),E+=3),e>0&&(h.push(S,k,N),E+=3)}c.addGroup(p,E,0),p+=E}function y(b){let P=g,E=new it,A=new C,R=0,F=b===!0?t:e,x=b===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let S=g;for(let k=0;k<=s;k++){let O=k/s*l+o,X=Math.cos(O),B=Math.sin(O);A.x=F*B,A.y=m*x,A.z=F*X,u.push(A.x,A.y,A.z),d.push(0,x,0),E.x=X*.5+.5,E.y=B*.5*x+.5,f.push(E.x,E.y),g++}for(let k=0;k<s;k++){let N=P+k,O=S+k;b===!0?h.push(O,O+1,N):h.push(O+1,O,N),R+=3}c.addGroup(p,R,b===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gl=class i extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new C,b=new C,P=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],b),f(e[E+2],P),l(y,b,P,_)}function l(_,y,b,P){let E=P+1,A=[];for(let R=0;R<=E;R++){A[R]=[];let F=_.clone().lerp(b,R/E),x=y.clone().lerp(b,R/E),S=E-R;for(let k=0;k<=S;k++)k===0&&R===E?A[R][k]=F:A[R][k]=F.clone().lerp(x,k/S)}for(let R=0;R<E;R++)for(let F=0;F<2*(E-R)-1;F++){let x=Math.floor(F/2);F%2===0?(d(A[R][x+1]),d(A[R+1][x]),d(A[R][x])):(d(A[R][x+1]),d(A[R+1][x+1]),d(A[R+1][x]))}}function c(_){let y=new C;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(_),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let _=new C;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let b=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;a.push(b,1-P)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let y=a[_+0],b=a[_+2],P=a[_+4],E=Math.max(y,b,P),A=Math.min(y,b,P);E>.9&&A<.1&&(y<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){let b=_*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){let _=new C,y=new C,b=new C,P=new C,E=new it,A=new it,R=new it;for(let F=0,x=0;F<r.length;F+=9,x+=6){_.set(r[F+0],r[F+1],r[F+2]),y.set(r[F+3],r[F+4],r[F+5]),b.set(r[F+6],r[F+7],r[F+8]),E.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),P.copy(_).add(y).add(b).divideScalar(3);let S=m(P);v(E,x+0,_,S),v(A,x+2,y,S),v(R,x+4,b,S)}}function v(_,y,b,P){P<0&&_.x===1&&(a[y]=_.x-1),b.x===0&&b.z===0&&(a[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Gs=class extends Vs{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}},Ex={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Px(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ws(r,a,e,o,l,f,0),a}};function Cu(i,t,e,n,s){let r,a;if(s===Hx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Jh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Jh(r,i[r],i[r+1],a);return a&&va(a,a.next)&&(Xs(a),a=a.next),a}function xi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(va(e,e.next)||ce(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Nx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Ax(i,n,s,r):Tx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Xs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rx(xi(i),t,e),Ws(i,t,e,n,s,r,2)):a===2&&Cx(i,t,e,n,s,r):Ws(xi(i),t,e,n,s,r,1);break}}}function Tx(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Wi(s,o,r,l,a,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ax(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ce(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Wl(f,g,t,e,n),_=Wl(v,m,t,e,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=p&&b&&b.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Wi(o,h,l,u,c,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Wi(o,h,l,u,c,d,b.x,b.y)&&ce(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Wi(o,h,l,u,c,d,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Wi(o,h,l,u,c,d,b.x,b.y)&&ce(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Rx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!va(s,r)&&Pu(s,n,n.next,r)&&qs(s,r)&&qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Xs(n),Xs(n.next),n=i=r),n=n.next}while(n!==i);return xi(n)}function Cx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fx(a,o)){let l=Iu(a,o);a=xi(a,a.next),l=xi(l,l.next),Ws(a,t,e,n,s,r,0),Ws(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Px(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ox(c));for(s.sort(Ix),r=0;r<s.length;r++)e=Lx(s[r],e);return e}function Ix(i,t){return i.x-t.x}function Lx(i,t){let e=Dx(i,t);if(!e)return t;let n=Iu(e,i);return xi(n,n.next),xi(e,e.next)}function Dx(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Wi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),qs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Ux(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Ux(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Nx(i,t,e,n){let s=i;do s.z===0&&(s.z=Wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ox(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Fx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bx(i,t)&&(qs(i,t)&&qs(t,i)&&zx(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||va(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function va(i,t){return i.x===t.x&&i.y===t.y}function Pu(i,t,e,n){let s=Or(ce(i,t,e)),r=Or(ce(i,t,n)),a=Or(ce(e,n,i)),o=Or(ce(e,n,t));return!!(s!==r&&a!==o||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||a===0&&kr(e,i,n)||o===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function Bx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function zx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Iu(i,t){let e=new ql(i.i,i.x,i.y),n=new ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jh(i,t,e,n){let s=new ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Us=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jh(t),Qh(n,t);let a=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qh(n,e[l]);let o=Ex.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $s=class i extends Gl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ha=class i extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new it;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let _=p+m,y=_,b=_+n+1,P=_+n+2,E=_+1;o.push(y,b,E),o.push(b,P,E)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ua=class i extends Ce{constructor(t=new Gs([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Us.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];Us.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=Us.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],y=_[0]+u,b=_[1]+u,P=_[2]+u;n.push(y,b,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Vx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Vx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var gn=class i extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+b,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let y=h[p][_+1],b=h[p][_],P=h[p+1][_],E=h[p+1][_+1];(p!==0||a>0)&&f.push(y,b,E),(p!==n-1||l<Math.PI)&&f.push(b,P,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tt=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yu,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ys=class extends Tt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Fr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case eh:r=t,o=2*e-n;break;case nh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:a=t,l=2*n-e;break;case nh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+_*a[c+P]+y*a[l+P]+b*a[u+P];return r}},$l=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Yl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qr:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=xl;var yi=class extends un{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=qr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends un{};Zl.prototype.ValueTypeName="color";var Kl=class extends un{};Kl.prototype.ValueTypeName="number";var Jl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},da=class extends un{InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends un{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=qr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends un{};jl.prototype.ValueTypeName="vector";var Ql=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Wx=new Ql,tc=class{constructor(t){this.manager=t!==void 0?t:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};tc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ss=class extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Io=new oe,tu=new C,eu=new C,fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nu=new oe,As=new C,Lo=new C,ec=class extends fa{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(t.matrixWorld),n.position.copy(As),Lo.copy(n.position),Lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lo),n.updateMatrixWorld(),s.makeTranslation(-As.x,-As.y,-As.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},pa=class extends Zs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},nc=class extends fa{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_i=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var mc="\\[\\]\\.:\\/",qx=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",Xx="[^"+mc.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",gc),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Jx=new RegExp("^"+$x+Yx+Zx+Kx+"$"),jx=["material","materials","bones","map"],ic=class{constructor(t,e,n){let s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(t){let e=Jx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=ic;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var iu=new oe,ma=class{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,n=[]){return sc(t,this,n,e),n.sort(su),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)sc(t[s],this,n,e);return n.sort(su),n}};function su(i,t){return i.distance-t.distance}function sc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)sc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var os=class extends jn{constructor(){super();let t=new Pe;t.deleteAttribute("uv");let e=new Tt({side:Ee}),n=new Tt,s=new pa(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new J(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new J(t,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new J(t,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new J(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new J(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new J(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new J(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new J(t,as(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new J(t,as(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new J(t,as(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new J(t,as(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new J(t,as(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new J(t,as(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function as(i){let t=new Re;return t.color.setScalar(i),t}var Qs=new C;function tn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Qs.copy(t),Qs[n]=0,Qs.normalize();let c=.5*a/(a+o),h=1-Qs.angleTo(i)/l;return Math.sign(Qs[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Ma=class extends Pe{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new C,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=tn(g,l,"z","y",r,n),d[p+1]=1-tn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-tn(g,l,"z","y",r,n),d[p+1]=1-tn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-tn(g,l,"x","z",r,t),d[p+1]=tn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-tn(g,l,"x","z",r,t),d[p+1]=1-tn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-tn(g,l,"x","y",r,t),d[p+1]=1-tn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=tn(g,l,"x","y",r,t),d[p+1]=1-tn(g,l,"y","x",r,e);break}}};var ls=[{id:0,name:"Mavi",hex:3111935},{id:1,name:"K\u0131rm\u0131z\u0131",hex:15874634},{id:2,name:"Sar\u0131",hex:16761876},{id:3,name:"Ye\u015Fil",hex:3133263},{id:4,name:"Mor",hex:10112511},{id:5,name:"Turkuaz",hex:1627366},{id:6,name:"Pembe",hex:16735416}],Pn=99,ba=2,Sa=3,xc=8,Ve=7,Lu=4;var yc="busPuzzleDeluxe.save.v1",Ne={mode:"test",admob:{appIdAndroid:"ca-app-pub-3940256099942544~3347511713",rewardedUnitAndroid:"ca-app-pub-3940256099942544/5224354917"},testDurationMs:3e3},Jt={undo:60,hint:40,recall:80,call:120,moves:70,time:70,extraSlot:150,permSlot:[400,800,1500],convert:100,seat:60},vc=3;var bi={mode:"off",packs:[{id:"c500",productId:"coins_500",coins:500,label:"Avu\xE7 Dolusu"},{id:"c1300",productId:"coins_1300",coins:1300,label:"Kese"},{id:"c3500",productId:"coins_3500",coins:3500,label:"Sand\u0131k"},{id:"c9000",productId:"coins_9000",coins:9e3,label:"Hazine"}]};var us=new Map;function ne(i,t,e,n,s=3){let r=`rb${i}|${t}|${e}|${n}`;return us.has(r)||us.set(r,new Ma(i,t,e,s,n)),us.get(r)}function de(i,t){return us.has(i)||us.set(i,t()),us.get(i)}var _c=new Map;function Ht(i,t){return _c.has(i)||_c.set(i,t()),_c.get(i)}var er={vivid:ls.map(i=>i.hex),pastel:[8368383,16748440,16768890,8381338,12950527,8579314,16753621],neon:[2059263,16719677,16772608,65365,11600127,61695,16723888],retro:[4026292,12863291,14723118,4889180,8215206,4171683,14251933]},Du={steel:{color:13620958,metal:.9,rough:.25},gold:{color:16762938,metal:1,rough:.2},neon:{color:3535103,metal:.4,rough:.3,emissive:696240},chrome:{color:16120063,metal:1,rough:.08}},ir={gold:{body:16103210,trim:16773296,glow:16766042,label:"Alt\u0131n"},platinum:{body:14279148,trim:16777215,glow:12576511,label:"Platin"},royal:{body:6958335,trim:16766554,glow:11897855,label:"Kraliyet"}};function Si(i){return Ht("paint"+i,()=>new Ys({color:i,roughness:.42,metalness:0,clearcoat:.35,clearcoatRoughness:.3}))}function Ea(i){return Ht("paintlux"+i,()=>new Ys({color:i,roughness:.2,metalness:.4,clearcoat:1,clearcoatRoughness:.08}))}var nr=(i,t)=>new Rt(i).lerp(new Rt(16777215),t).getHex(),Mc=(i,t)=>new Rt(i).lerp(new Rt(0),t).getHex(),pe={glassDark:()=>Ht("glassdark",()=>new Tt({color:1318958,roughness:.04,metalness:.5,transparent:!0,opacity:.72,depthWrite:!1})),chrome:()=>Ht("chromeb",()=>new Tt({color:15922683,metalness:1,roughness:.1})),led:()=>Ht("ledbar",()=>new Tt({color:10483967,emissive:3532543,emissiveIntensity:1.4,roughness:.2})),glass:()=>Ht("glass",()=>new Tt({color:3825542,roughness:.05,metalness:.3,transparent:!0,opacity:.42,depthWrite:!1})),interior:()=>Ht("interior",()=>new Tt({color:10466508,roughness:.9,side:Ee})),tire:()=>Ht("tire",()=>new Tt({color:1711138,roughness:.85})),bumper:()=>Ht("bumper",()=>new Tt({color:3883602,roughness:.5,metalness:.2})),head:()=>Ht("headlight",()=>new Tt({color:16774856,emissive:16771488,emissiveIntensity:.9,roughness:.2})),tail:()=>Ht("taillight",()=>new Tt({color:16724032,emissive:16715808,emissiveIntensity:.7,roughness:.3})),white:()=>Ht("white",()=>new Tt({color:16054010,roughness:.5})),dark:()=>Ht("darkpl",()=>new Tt({color:2764602,roughness:.7}))};function Qx(i){let t=Du[i]||Du.steel;return Ht("rim"+i,()=>new Tt({color:t.color,metalness:t.metal,roughness:t.rough,emissive:t.emissive||0,emissiveIntensity:t.emissive?.6:0}))}function tr(){return Ht("gold",()=>new Tt({color:16762938,metalness:1,roughness:.22,emissive:3810304,emissiveIntensity:.4}))}var cs=null;function ty(){if(cs)return cs;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.translate(64,64),t.lineJoin="round";let e=()=>{t.beginPath(),t.moveTo(0,-46),t.lineTo(34,-6),t.lineTo(13,-6),t.lineTo(13,42),t.lineTo(-13,42),t.lineTo(-13,-6),t.lineTo(-34,-6),t.closePath()};return e(),t.lineWidth=14,t.strokeStyle="rgba(20,30,50,.55)",t.stroke(),e(),t.fillStyle="#ffffff",t.fill(),cs=new hn(i),cs.anisotropy=4,cs.colorSpace=ve,cs}function ey(i,t,e){return de("plate"+i+t+e,()=>{let n=document.createElement("canvas");n.width=256,n.height=128;let s=n.getContext("2d");s.fillStyle=e,s.fillRect(0,0,256,128),s.fillStyle=t,s.font="900 78px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,70);let r=new hn(n);return r.colorSpace=ve,r})}function Ta(i){return i*1-.12}var ny=.76,In={1:.85,2:.8,3:.75,4:.72};function Aa(i){let t=i.vip?"coach":i.style||"city",e=Ta(i.len),n=ny,s=ir[i.vipSkin||"gold"],r=i.vip?s.body:i.hex,a=new ae,o=t==="luxury",l=t==="modern",c=o?Ea(r):Si(r),h=i.vip?Si(s.trim):o?Ea(nr(r,.06)):Si(l?Mc(r,.08):nr(r,.12)),u={wheels:[],seatMarks:[],body:[],bodyMat:c,style:t},d=t==="mini"?.44:l?.32:o?.36:.38,f=t==="school"?.38:t==="mini"?.24:l?.35:o?.31:.3,g=.12,v=new J(ne(n,d,e,t==="mini"?.16:l?.15:.11),c);v.position.y=g+d/2,v.castShadow=!0,a.add(v),u.body.push(v);let m=n-.06,p=e-(t==="mini"?.2:.14),_=g+d,y=new J(ne(m-.06,f,p-.06,.03),pe.interior());y.position.y=_+f/2,a.add(y);let b=new J(ne(n-.02,.09,p+.06,.04),h);b.position.y=_+f+.04,b.castShadow=!0,a.add(b),u.body.push(b);let P=_+f+.085,E=t==="coach"||l?1:Math.max(1,Math.round((p-.2)/.42)),A=t==="coach"||l?0:.07,R=p-.22,F=(R-A*(E-1))/E;for(let rt=-1;rt<=1;rt+=2){for(let G=0;G<E;G++){let Z=-R/2+F/2+G*(F+A),nt=new J(ne(.03,f-.06,F,.012,2),o?pe.glassDark():pe.glass());nt.position.set(rt*(m/2-.005),_+f/2,Z),a.add(nt)}let mt=new J(ne(.04,f,p,.015,2),c);mt.position.set(rt*(m/2-.03),_+f/2,0),mt.scale.set(.6,.12,1),mt.position.y=_+.01,a.add(mt)}let x=new J(ne(m-.1,f-.06,.03,.012,2),pe.glass());x.position.set(0,_+f/2,-p/2+.008),a.add(x);let S=x.clone();S.position.z=p/2-.008,S.scale.set(.85,.8,1),a.add(S);let k=new J(ne(n-.04,.08,.07,.03,2),i.vip?tr():pe.bumper());k.position.set(0,g+.07,-e/2+.01),a.add(k);let N=k.clone();N.position.z=e/2-.01,a.add(N);for(let rt=-1;rt<=1;rt+=2){let mt=new J(de("hl",()=>new gn(.058,12,8)),pe.head());mt.scale.set(1,.8,.5),mt.position.set(rt*.24,g+.24,-e/2+.01),a.add(mt);let G=new J(de("tl",()=>new Pe(.1,.045,.03)),pe.tail());G.position.set(rt*.26,g+.26,e/2-.005),a.add(G)}let O=new J(ne(.26,.07,.03,.015,2),pe.dark());if(O.position.set(0,g+.2,-e/2+.008),a.add(O),t==="school"){let rt=new J(ne(n+.012,.05,e-.06,.012,2),pe.dark());rt.position.y=g+.2,a.add(rt);let mt=new J(de("stopsign",()=>new mn(.075,.075,.015,8)),Ht("stop",()=>new Tt({color:14690858,roughness:.4})));mt.rotation.z=Math.PI/2,mt.position.set(-n/2-.03,g+d-.02,-e/2+.3),a.add(mt)}if(t==="coach"){let rt=new J(ne(.26,.05,Math.min(.6,p*.35),.025,2),Ht("acunit",()=>new Tt({color:14673390,roughness:.6})));rt.position.set(0,P+.02,e*.12),a.add(rt);let mt=new J(ne(n+.012,.07,e-.2,.02,2),Ht("skirt",()=>new Tt({color:11187394,metalness:.7,roughness:.3})));mt.position.y=g+.06,a.add(mt)}if(t==="mini"){let rt=new J(ne(.4,.04,p*.5,.015,2),pe.dark());rt.position.set(0,P+.015,e*.08),a.add(rt)}if(l){let rt=new J(ne(n-.14,.022,.03,.01,2),pe.led());rt.position.set(0,g+.3,-e/2+.006),a.add(rt);let mt=new J(ne(n+.012,.035,e-.14,.012,2),pe.white());mt.position.y=g+.17,a.add(mt);let G=new J(ne(.12,.03,Math.min(.45,p*.3),.012,2),pe.dark());G.position.set(0,P+.01,e*.3),a.add(G);let Z=new J(ne(n+.012,.06,e-.18,.02,2),pe.dark());Z.position.y=g+.05,a.add(Z)}if(o){let rt=new J(ne(n+.014,.022,e-.08,.01,2),pe.chrome());rt.position.y=g+d-.02,a.add(rt);let mt=new J(ne(n+.014,.07,e-.16,.02,2),pe.chrome());mt.position.y=g+.055,a.add(mt);let G=new J(ne(.32,.085,.034,.015,2),pe.chrome());G.position.set(0,g+.2,-e/2+.014),a.add(G);for(let nt of[-e*.3,e*.3]){let lt=new J(ne(n+.02,.02,.035,.01,2),pe.chrome());lt.position.set(0,g+d+f*.5,nt),a.add(lt)}let Z=new J(de("emblem",()=>new gn(.035,12,8)),tr());Z.position.set(0,g+.3,-e/2-.01),a.add(Z)}let X=i.vip?tr():Qx(i.rim||"steel"),B=[],j=-e/2+.26,W=e/2-.26;B.push(j,W),i.len>=3&&(B.splice(1,0,(j+W)/2+(i.len>=4?-.35:0)),i.len>=4&&B.push((j+W)/2+.35));for(let rt of B)for(let mt=-1;mt<=1;mt+=2){let G=new J(de("arch",()=>new ns(.2,20)),Ht("archm",()=>new Tt({color:1711656,roughness:.9})));G.rotation.y=mt*Math.PI/2,G.position.set(mt*(n/2+.004),.17,rt),a.add(G);let Z=new ae,nt=new J(de("tire",()=>new mn(.15,.15,.12,20)),pe.tire());nt.rotation.z=Math.PI/2,nt.castShadow=!0;let lt=new J(de("hub",()=>new mn(.085,.085,.125,16)),X);lt.rotation.z=Math.PI/2;let Dt=de("spoke",()=>new Pe(.13,.15,.02)),Et=new J(Dt,pe.dark());Et.position.x=mt*.05,Et.scale.set(1,.7,1);let Ft=Et.clone();Ft.rotation.x=Math.PI/2,Z.add(nt,lt,Et,Ft),Z.position.set(mt*(n/2-.02),.15,rt),a.add(Z),u.wheels.push(Z)}let ht=i.seats,ot=2,xt=Math.ceil(ht/ot);for(let rt=0;rt<ht;rt++){let mt=Math.floor(rt/ot),G=rt%ot,Z=xt===1?0:-R/2+.16+(R-.32)*(mt/(xt-1)),nt=new J(de("seathead",()=>new gn(.075,12,10)),new Tt({color:16777215,roughness:.5}));nt.position.set((G===0?-1:1)*.16,_+f*.55,Z);let lt=new J(de("seatbody",()=>new gi(.07,.05,4,8)),nt.material);lt.position.set(0,-.1,0),nt.add(lt),nt.visible=!1,a.add(nt),u.seatMarks.push(nt)}if(!i.noArrow){let rt=new J(de("arrowplane",()=>new Ue(1,1)),new Re({map:ty(),transparent:!0,depthWrite:!1}));rt.rotation.x=-Math.PI/2;let mt=Math.min(.52,e*.55);rt.scale.set(mt,mt,1),rt.position.set(0,P+(t==="coach"||t==="mini"||l||o?.052:.006),t==="coach"?-e*.22:i.len>=2?-e*.08:0),rt.renderOrder=3,a.add(rt),u.arrow=rt}if(i.vip){let rt=new J(new Ue(.5,.25),new Tt({map:ey("VIP","#3a2400","#ffd45a"),roughness:.3,metalness:.5}));rt.rotation.x=-Math.PI/2,rt.position.set(0,P+.012,e*.3),a.add(rt);for(let Z of[-e*.3,e*.3]){let nt=new J(ne(n+.02,.025,.04,.01,2),tr());nt.position.set(0,g+d-.03,Z),a.add(nt)}let mt=new J(ne(n+.016,.022,e-.1,.01,2),tr());mt.position.y=g+.2,a.add(mt);let G=new J(de("vipglow",()=>new Ue(1,1)),new Re({map:bc(),color:s.glow,transparent:!0,blending:$n,depthWrite:!1,opacity:.85}));G.rotation.x=-Math.PI/2,G.scale.set(n+1.2,e+1.2,1),G.position.y=.02,G.renderOrder=1,a.add(G),u.glow=G}return a.userData.parts=u,a.userData.dims={Lz:e,W:n,roofTop:P},a}var wa=null;function bc(){if(wa)return wa;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),wa=new hn(i),wa}function sr(i,t,e){i.userData.parts.seatMarks.forEach((s,r)=>{r<t.length?(s.visible=!0,s.material.color.setHex(e(t[r]))):s.visible=!1})}function Uu(i,t){let e=i.userData.parts,n=e.style==="luxury"?Ea(t):Si(t);for(let s of e.body)s.material=n;e.style==="luxury"?e.body[1].material=Ea(nr(t,.06)):e.body[1].material=e.style==="modern"?Si(Mc(t,.08)):Si(nr(t,.12)),e.bodyMat=n}var hs=null;function iy(){if(hs)return hs;let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d");t.fillStyle="#1a1d27";for(let e of[40,88])t.beginPath(),t.ellipse(e,52,7,10,0,0,7),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(e-2,47,3,0,7),t.fill(),t.fillStyle="#1a1d27";t.fillStyle="rgba(255,110,140,.5)";for(let e of[24,104])t.beginPath(),t.ellipse(e,78,10,6,0,0,7),t.fill();return t.strokeStyle="#1a1d27",t.lineWidth=5,t.lineCap="round",t.beginPath(),t.arc(64,74,14,.2*Math.PI,.8*Math.PI),t.stroke(),hs=new hn(i),hs.colorSpace=ve,hs.anisotropy=4,hs}function Sc(i,t,e=0){let n=t(i),s=new ae,r=Ht("pbody"+n,()=>new Tt({color:n,roughness:.55})),a=Ht("phead"+n,()=>new Tt({color:nr(n,.22),roughness:.5})),o=Ht("ppants",()=>new Tt({color:2830917,roughness:.7})),l=new ae,c=new ae;c.scale.setScalar(1.22),c.add(l),s.add(c);let h=new J(de("pbodyg",()=>new gi(.15,.16,4,10)),r);h.position.y=.36,h.castShadow=!0,l.add(h);let u=new ae;u.position.y=.66,l.add(u);let d=new J(de("pheadg",()=>new gn(.16,16,12)),a);d.castShadow=!0,u.add(d);let f=new J(de("faceplane",()=>new Ue(.2,.2)),Ht("facemat",()=>new Re({map:iy(),transparent:!0,depthWrite:!1})));f.position.set(0,0,.153),f.renderOrder=2,u.add(f);let g=e%4;if(g===1){let y=new J(de("beanie",()=>new gn(.17,12,8,0,Math.PI*2,0,Math.PI*.5)),Ht("beanie"+n,()=>new Tt({color:Mc(n,.25),roughness:.8})));y.position.y=.04,y.rotation.x=-.15,u.add(y);let b=new J(de("pom",()=>new gn(.04,8,6)),Ht("pomw",()=>new Tt({color:16777215})));b.position.y=.2,u.add(b)}else if(g===2){let y=new J(de("capdome",()=>new gn(.168,12,8,0,Math.PI*2,0,Math.PI*.45)),Ht("cap"+n,()=>new Tt({color:16777215,roughness:.6})));y.position.y=.03,u.add(y);let b=new J(de("brim",()=>new mn(.1,.1,.018,12,1,!1,-Math.PI/2,Math.PI)),y.material);b.position.set(0,.07,.12),b.rotation.y=0,b.scale.set(1,1,1),u.add(b)}else if(g===3){let y=new J(ne(.22,.26,.1,.04,2),Ht("bp",()=>new Tt({color:16777215,roughness:.6})));y.position.set(0,.38,-.17),l.add(y)}let v=de("armg",()=>new gi(.045,.1,3,6)),m=de("legg",()=>new gi(.055,.06,3,6)),p=[],_=[];for(let y=-1;y<=1;y+=2){let b=new ae;b.position.set(y*.19,.46,0);let P=new J(v,r);P.position.y=-.09,P.castShadow=!0,b.add(P),l.add(b),p.push(b);let E=new ae;E.position.set(y*.075,.18,0);let A=new J(m,o);A.position.y=-.07,A.castShadow=!0,E.add(A),l.add(E),_.push(E)}return s.userData={rig:l,head:u,arms:p,legs:_,body:h,colorIndex:i,phase:Math.random()*6.28,state:"idle",yaw:0},s}function Nu(){let i=new ae,t=new J(new mn(.05,.07,1.9,8),Ht("lamppole",()=>new Tt({color:5857903,metalness:.6,roughness:.4})));t.position.y=.95,t.castShadow=!0,i.add(t);let e=new J(new Pe(.6,.05,.05),t.material);e.position.set(.28,1.9,0),i.add(e);let n=new J(ne(.28,.06,.14,.02,2),Ht("lampl",()=>new Tt({color:16773828,emissive:16769946,emissiveIntensity:.8})));return n.position.set(.55,1.87,0),i.add(n),i}function ku(i=3715930){let t=new ae,e=new J(new mn(.07,.09,.5,8),Ht("trunk",()=>new Tt({color:9067066,roughness:.9})));e.position.y=.25,e.castShadow=!0,t.add(e);let n=Ht("fol"+i,()=>new Tt({color:i,roughness:.75,flatShading:!0}));for(let s=0;s<3;s++){let r=new J(new $s(.34-s*.07,1),n);r.position.y=.66+s*.3,r.castShadow=!0,t.add(r)}return t}function Ou(){let i=new ae,t=new J(new mn(.28,.24,.2,14),Ht("pot",()=>new Tt({color:15265268,roughness:.5})));t.position.y=.1,t.castShadow=!0,i.add(t);let e=new J(new $s(.27,1),Ht("bushm",()=>new Tt({color:7328058,roughness:.7,flatShading:!0})));return e.position.y=.36,e.castShadow=!0,i.add(e),i}function Fu(){let i=new ae,t=Ht("wood",()=>new Tt({color:13208410,roughness:.8})),e=new J(ne(.9,.07,.3,.02,2),t);e.position.y=.32,e.castShadow=!0,i.add(e);let n=new J(ne(.9,.22,.05,.02,2),t);n.position.set(0,.5,-.14),i.add(n);for(let s of[-.38,.38]){let r=new J(new Pe(.05,.3,.26),pe.dark());r.position.set(s,.15,0),i.add(r)}return i}var ds=i=>t=>t===Pn?16103210:(er[i]||er.vivid)[t];var ke={U:{x:0,y:-1,horiz:!1},D:{x:0,y:1,horiz:!1},L:{x:-1,y:0,horiz:!0},R:{x:1,y:0,horiz:!0}};function Ra(i,t){return t?xc:i*ba}function rr(i,t={}){let e=i.buses.map((r,a)=>({id:a,color:r.v?Pn:r.c,len:r.l,dir:r.d,x:r.x,y:r.y,x0:r.x,y0:r.y,vip:!!r.v,seats:r.s??Ra(r.l,r.v),boarded:0,st:"board",slot:-1,arrived:!1})),n=t.slotsOpen??Lu,s=[];for(let r=0;r<Ve;r++)s.push(r<n);return{w:i.w,h:i.h,buses:e,queue:i.queue.slice(),qi:0,slotOpen:s,slots:new Array(Ve).fill(null),vipSlot:null,moves:0,moveLimit:t.moveLimit??null,boardedTotal:0}}var xn=i=>JSON.parse(JSON.stringify(i));function fs(i){let t=[],e=ke[i.dir].horiz;for(let n=0;n<i.len;n++)t.push(e?[i.x+n,i.y]:[i.x,i.y+n]);return t}function sy(i){switch(i.dir){case"R":return[i.x+i.len-1,i.y];case"L":return[i.x,i.y];case"D":return[i.x,i.y+i.len-1];default:return[i.x,i.y]}}function wi(i,t){let e=ke[t.dir],[n,s]=sy(t),r=[];for(;n+=e.x,s+=e.y,!(n<0||s<0||n>=i.w||s>=i.h);)r.push([n,s]);return r}function ps(i,t=-1){let e=new Map;for(let n of i.buses)if(!(n.st!=="board"||n.id===t))for(let[s,r]of fs(n))e.set(s+","+r,n.id);return e}function ms(i,t){let e=ps(i,t.id),n=new Set;for(let[s,r]of wi(i,t)){let a=e.get(s+","+r);a!==void 0&&n.add(a)}return[...n]}function Ei(i,t){if(t.vip)return i.vipSlot===null?"V":-1;for(let e=0;e<Ve;e++)if(i.slotOpen[e]&&i.slots[e]===null)return e;return-1}function Ca(i,t){let e=i.buses[t];if(!e||e.st!=="board")return{ok:!1,reason:"invalid"};if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{ok:!1,reason:"limit"};let n=ms(i,e);if(n.length)return i.moveLimit!==null&&i.moves++,{ok:!1,reason:"blocked",blockers:n};let s=Ei(i,e);return s===-1?{ok:!1,reason:e.vip?"vipfull":"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,s==="V"?i.vipSlot=e.id:i.slots[s]=e.id,i.moves++,{ok:!0,slot:s})}function Bu(i,t){let e=i.buses[t];e&&(e.arrived=!0)}function Pa(i){return i.qi<i.queue.length?i.queue[i.qi]:null}function Ia(i){let t=Pa(i);if(t===null)return null;for(let e=0;e<Ve;e++){let n=i.slots[e];if(n===null)continue;let s=i.buses[n];if(s.arrived&&s.color===t&&s.boarded<s.seats)return s}if(i.vipSlot!==null){let e=i.buses[i.vipSlot];if(e.arrived&&e.boarded<e.seats)return e}return null}function wc(i){let t=Ia(i);if(!t)return null;let e=i.queue[i.qi];return i.qi++,t.boarded++,i.boardedTotal++,{bus:t,color:e,full:t.boarded>=t.seats}}function Ec(i,t){let e=i.buses[t];!e||e.st!=="parked"||(e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="gone",e.slot=-1)}function Tc(i){for(let e of i.buses)e.st==="parked"&&(e.arrived=!0);let t=[];for(;;){let e=wc(i);if(!e)break;t.push(e),e.full&&Ec(i,e.bus.id)}return t}function zu(i){let t=[];for(let e of i.buses)e.st==="board"&&ms(i,e).length===0&&Ei(i,e)!==-1&&t.push(e);return t}function La(i){if(i.qi>=i.queue.length)return{status:"won"};let t=zu(i);if(i.moveLimit!==null&&i.moves>=i.moveLimit)return{status:"lost",reason:"moves"};if(t.length===0){let n=i.buses.some(r=>r.st==="board");return{status:"lost",reason:i.buses.some(r=>r.st==="board"&&ms(i,r).length===0)||!n?"noslot":"stuck"}}return{status:"playing"}}function Ac(i){for(let t=0;t<Ve;t++)if(!i.slotOpen[t])return i.slotOpen[t]=!0,t;return-1}function Hu(i,t){let e=i.buses[t];if(!e||e.st!=="parked"||!e.arrived)return{ok:!1,reason:"invalid"};let n={...e,x:e.x0,y:e.y0,st:"board"},s=ps(i,t);for(let[r,a]of fs(n))if(s.has(r+","+a))return{ok:!1,reason:"occupied"};return e.slot==="V"?i.vipSlot=null:i.slots[e.slot]=null,e.st="board",e.slot=-1,e.x=e.x0,e.y=e.y0,e.arrived=!1,{ok:!0}}function Vu(i){let t=Pa(i);if(t===null)return{ok:!1,reason:"empty"};let e=null,n=1e9;for(let r of i.buses){if(r.st!=="board"||r.vip||r.color!==t)continue;let a=ms(i,r).length;a<n&&(n=a,e=r)}if(!e)return{ok:!1,reason:"none"};let s=Ei(i,e);return s===-1?{ok:!1,reason:"noslot"}:(e.st="parked",e.slot=s,e.arrived=!1,i.slots[s]=e.id,i.moves++,{ok:!0,id:e.id,slot:s})}function Gu(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip)return{ok:!1,reason:"invalid"};let n=Ei(i,e);return n===-1?{ok:!1,reason:"noslot"}:(e.st="parked",e.slot=n,e.arrived=!1,i.slots[n]=e.id,i.moves++,{ok:!0,id:e.id,slot:n})}function Wu(i){if(i.vipSlot!==null)return{ok:!1,reason:"vipfull"};let t=i.buses.length;return i.buses.push({id:t,color:Pn,len:Sa,dir:"U",x:0,y:0,x0:0,y0:0,vip:!0,seats:xc,boarded:0,st:"parked",slot:"V",arrived:!1,summoned:!0}),i.vipSlot=t,{ok:!0,id:t}}function Rc(i,t,e){let n=i.buses[t];return!n||n.st!=="board"||n.vip?{ok:!1,reason:"invalid"}:n.color===e?{ok:!1,reason:"same"}:(n.color=e,{ok:!0})}function Cc(i,t){let e=i.buses[t];if(!e||e.st!=="board"||e.vip||e.len>=4)return null;let n=ke[e.dir],s=ps(i,t),r,a,o=e.x,l=e.y;return e.dir==="R"?(r=e.x-1,a=e.y,o=r):e.dir==="L"?(r=e.x+e.len,a=e.y):e.dir==="D"?(r=e.x,a=e.y-1,l=a):(r=e.x,a=e.y+e.len),r<0||a<0||r>=i.w||a>=i.h||s.has(r+","+a)?null:{nx:o,ny:l}}function Pc(i,t){let e=Cc(i,t);if(!e)return{ok:!1,reason:"nospace"};let n=i.buses[t];return n.x=e.nx,n.y=e.ny,n.x0=n.x,n.y0=n.y,n.len++,n.seats+=ba,{ok:!0}}function Ic(i,t){let e=i.buses[t];return!!e&&e.st==="board"&&!e.vip&&e.seats<e.len*ba}function Lc(i,t){return Ic(i,t)?(i.buses[t].seats++,{ok:!0}):{ok:!1,reason:"full"}}function ry(i){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");if(i==="star"){e.translate(32,32),e.fillStyle="#fff",e.beginPath();for(let s=0;s<10;s++){let r=s%2?11:28,a=-Math.PI/2+s*Math.PI/5;e.lineTo(Math.cos(a)*r,Math.sin(a)*r)}e.closePath(),e.fill()}else{let s=e.createRadialGradient(32,32,2,32,32,30);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.6,"rgba(255,255,255,.85)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,64,64)}let n=new hn(t);return n.colorSpace=ve,n}var Da=class{constructor(t,e,n){this.max=n,this.n=0,this.next=0,this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.s0=new Float32Array(n),this.s1=new Float32Array(n),this.grav=new Float32Array(n),this.drag=new Float32Array(n);let s=new Ce;s.setAttribute("position",new Ae(this.pos,3)),s.setAttribute("pcolor",new Ae(this.col,3)),s.setAttribute("psize",new Ae(this.size,1)),s.setAttribute("palpha",new Ae(this.alpha,1)),this.geo=s,this.mat=new je({transparent:!0,depthWrite:!1,blending:Wn,uniforms:{map:{value:ry(e)},scale:{value:600}},vertexShader:`attribute vec3 pcolor; attribute float psize; attribute float palpha; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=psize*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*1.0,t.a*vA); if(gl_FragColor.a<0.01) discard; }`}),this.pts=new ra(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=10,t.add(this.pts);for(let r=0;r<n;r++)this.alpha[r]=0}emit(t,e,n,s,r,a,o,l,c,h,u=0,d=0){let f=this.next;this.next=(this.next+1)%this.max;let g=new Rt(o);this.pos.set([t,e,n],f*3),this.vel.set([s,r,a],f*3),this.col.set([g.r,g.g,g.b],f*3),this.life[f]=l,this.maxLife[f]=l,this.s0[f]=c,this.s1[f]=h,this.grav[f]=u,this.drag[f]=d,this.alpha[f]=1}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.alpha[e]!==0&&(this.alpha[e]=0,this.size[e]=0);continue}this.life[e]-=t;let n=1-Math.max(0,this.life[e])/this.maxLife[e],s=e*3;this.vel[s+1]-=this.grav[e]*t;let r=Math.max(0,1-this.drag[e]*t);this.vel[s]*=r,this.vel[s+1]*=r,this.vel[s+2]*=r,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.size[e]=this.s0[e]+(this.s1[e]-this.s0[e])*n,this.alpha[e]=n<.15?n/.15:1-(n-.15)/.85}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.psize.needsUpdate=!0,this.geo.attributes.palpha.needsUpdate=!0}},Ua=class{constructor(t,e="high"){this.scene=t;let n=e==="low"?.5:1;this.dots=new Da(t,"dot",Math.floor(500*n)),this.stars=new Da(t,"star",Math.floor(300*n)),this.rings=[],this.mult=n}setScale(t){this.dots.mat.uniforms.scale.value=t,this.stars.mat.uniforms.scale.value=t}puff(t,e,n=16777215,s=1,r=.5){for(let a=0;a<s;a++)this.dots.emit(t+(Math.random()-.5)*.2,.12,e+(Math.random()-.5)*.2,(Math.random()-.5)*.5,.4+Math.random()*.3,(Math.random()-.5)*.5,n,.55+Math.random()*.3,.2,r,-.2,2.5)}burst(t,e,n,s,r=14,a=3,o=!0,l=.7){r=Math.ceil(r*this.mult);for(let c=0;c<r;c++){let h=Math.random()*Math.PI*2,u=Math.random()*.9+.2,d=a*(.5+Math.random()*.7);(o?this.stars:this.dots).emit(t,e,n,Math.cos(h)*d*u,d*(.5+Math.random()*.8),Math.sin(h)*d*u,s,l*(.7+Math.random()*.6),.22,.04,6,1.5)}}sparkleAround(t,e,n,s,r=16769674,a=3){for(let o=0;o<a;o++)this.stars.emit(t+(Math.random()-.5)*n,.2+Math.random()*.9,e+(Math.random()-.5)*s,0,.5,0,r,.9,0,.24,-.2,0)}ring(t,e,n=16769674,s=.3,r=2.2,a=.8){let o=new J(new ha(.85,1,48),new Re({color:n,transparent:!0,opacity:.9,blending:$n,depthWrite:!1,side:on}));o.rotation.x=-Math.PI/2,o.position.set(t,.06,e),o.scale.setScalar(s),o.renderOrder=5,this.scene.add(o),this.rings.push({m:o,t:0,dur:a,r0:s,r1:r})}confetti(t,e,n=90){n=Math.ceil(n*this.mult);let s=[16731501,16763196,5099775,8126314,12946431,16777215];for(let r=0;r<n;r++){let a=Math.random()*Math.PI*2,o=2+Math.random()*5;this.stars.emit(t+(Math.random()-.5)*6,3+Math.random()*2,e+(Math.random()-.5)*8,Math.cos(a)*o*.4,1+Math.random()*3,Math.sin(a)*o*.4,s[r%s.length],1.8+Math.random()*1.2,.2,.16,5,.6)}}update(t){this.dots.update(t),this.stars.update(t);for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];n.t+=t;let s=Math.min(1,n.t/n.dur);n.m.scale.setScalar(n.r0+(n.r1-n.r0)*(1-Math.pow(1-s,3))),n.m.material.opacity=.9*(1-s),s>=1&&(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),this.rings.splice(e,1))}}};var Ju=1.05,me=-5.2,ka=3.35,qu=.92,ay=me-ka/2,gs=ay-1,Ln=me+ka/2+.85,xs=Ln+1.2,Na=-9.35,Ti=9,Xu=.66,$u=.64,ju=5,oy=Ti*ju,dn=i=>(i-3.5)*Ju,Uc={U:0,D:Math.PI,L:Math.PI/2,R:-Math.PI/2},ys={out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,back:i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)};function ar(i,t){let e=t-i;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Yu(i,t){let e=[i[0].clone()];for(let n=1;n<i.length-1;n++){let s=i[n-1],r=i[n],a=i[n+1],o=s.clone().sub(r),l=a.clone().sub(r),c=o.length(),h=l.length();if(c<1e-4||h<1e-4){e.push(r.clone());continue}o.normalize(),l.normalize();let u=Math.min(t,c*.5,h*.5),d=r.clone().addScaledVector(o,u),f=r.clone().addScaledVector(l,u);e.push(d);for(let g=1;g<10;g++){let v=g/10,m=1-v;e.push(new it(m*m*d.x+2*m*v*r.x+v*v*f.x,m*m*d.y+2*m*v*r.y+v*v*f.y))}e.push(f)}return e.push(i[i.length-1].clone()),e}function Zu(i){let t=[0];for(let e=1;e<i.length;e++)t.push(t[e-1]+i[e].distanceTo(i[e-1]));return t}function Ku(i,t,e){e=Math.max(0,Math.min(t[t.length-1],e));let n=1;for(;n<t.length-1&&t[n]<e;)n++;let s=Math.max(1e-6,t[n]-t[n-1]),r=(e-t[n-1])/s,a=i[n-1],o=i[n];return{x:a.x+(o.x-a.x)*r,z:a.y+(o.y-a.y)*r,dx:o.x-a.x,dz:o.y-a.y}}function Nc(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new hn(n);return s.colorSpace=ve,s.anisotropy=8,s}function or(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Oa=class{constructor(t,e={}){this.container=t,this.quality=e.quality||"high",this.cos={style:"city",rim:"steel",trail:"dust",palette:"vivid",vipSkin:"gold"},this.hexOf=ds("vivid"),this.state=null,this.tweens=[],this.busVis=new Map,this.passengers=new Map,this.walkers=new Set,this.glows=new Map,this.labels=new Map,this.stripBusy=!1,this.boardCd=0,this.idleFired=!0,this.celebrating=[],this.slotHold=new Array(Ve+1).fill(!1),this.sfx=()=>{},this.onBusTap=null,this.onSlotTap=null,this.onIdle=null,this.onBoarded=null,this.onBusDepart=null,this.onBusArrive=null,this.tapFilter=null,this.time=0,this.slotMeshes=[],this.slotTexKinds=[];let n=this.renderer=new es({antialias:this.quality!=="low",powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});n.outputColorSpace=ve,n.toneMapping=Js,n.toneMappingExposure=1,n.shadowMap.enabled=this.quality!=="low",n.shadowMap.type=Ks,t.appendChild(n.domElement),n.domElement.style.touchAction="none",this.scene=new jn,this.scene.background=new Rt(13227750),this.camera=new we(36,1,.5,200);let s=new Jn(n);this.scene.environment=s.fromScene(new os,.04).texture,this.scene.environmentIntensity=.32,this.setupLights(),this.buildStatic(),this.fx=new Ua(this.scene,this.quality),this.labelLayer=document.createElement("div"),this.labelLayer.className="label-layer",t.appendChild(this.labelLayer),this.raycaster=new ma,this.dragInfo=null,this.bindInput(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize()}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.dirLight.castShadow=t!=="low",this.resize()}setCosmetics(t){Object.assign(this.cos,t),this.hexOf=ds(this.cos.palette)}setupLights(){let t=new ss(15660543,10465484,.55);this.scene.add(t);let e=this.dirLight=new _i(16774108,1.7);e.position.set(-6,14,5),e.target.position.set(0,0,-1.5),e.castShadow=this.quality!=="low",e.shadow.mapSize.set(this.quality==="high"?2048:1024,this.quality==="high"?2048:1024);let n=e.shadow.camera;n.left=-9,n.right=9,n.top=15,n.bottom=-15,n.near=1,n.far=40,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,e.shadow.radius=3.5,this.scene.add(e,e.target);let s=new _i(13623551,.3);s.position.set(6,6,8),this.scene.add(s)}buildStatic(){let t=this.scene,e=Nc(256,256,(p,_,y)=>{p.fillStyle="#c9d6e6",p.fillRect(0,0,_,y),p.fillStyle="#d6e1ee",p.fillRect(5,5,_-10,y-10),p.strokeStyle="#b6c6da",p.lineWidth=4,p.strokeRect(0,0,_,y)});e.wrapS=e.wrapT=Ns,e.repeat.set(30,30);let n=new J(new Ue(60,60),new Tt({map:e,roughness:.85}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Tt({color:7173510,roughness:.92}),r=new J(this.roundedPlate(9.9,7,.7),s);r.position.set(0,.02,(-8.6+-1.6)/2),r.receiveShadow=!0,t.add(r);let a=new J(this.roundedPlate(26,1.55,.3),s);a.position.set(0,.021,gs),a.receiveShadow=!0,t.add(a);let o=new J(new Ue(26,.06),new Re({color:15979626,transparent:!0,opacity:.8}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,gs),t.add(o);let l=new Tt({color:16054267,roughness:.5}),c=new J(new Pe(9.9,.14,.14),l);c.position.set(0,.07,-1.55),c.castShadow=!0,t.add(c);let h=Ti*Xu+.9,u=Na+.55,d=Na-(ju-1)*$u-.55,f=new Tt({color:16777215,roughness:.4}),g=(p,_,y,b)=>{let P=new J(new Pe(p,.3,_),f);P.position.set(y,.15,b),P.castShadow=!0,P.receiveShadow=!0,t.add(P)};g(.18,u-d,-h/2,(u+d)/2),g(.18,u-d,h/2,(u+d)/2),g(h,.18,0,d),g(1.1,.18,-h/2+.55,u),g(1.1,.18,h/2-.55,u);let v=new J(this.roundedPlate(h-.1,u-d,.15),new Tt({color:13622249,roughness:.8}));v.position.set(0,.02,(u+d)/2),v.receiveShadow=!0,t.add(v),this.queueBack=d;for(let[p,_]of[[-6.2,-2.8],[6.2,-2.8]]){let y=Nu();y.position.set(p,0,_),p>0&&(y.scale.x=-1),t.add(y)}for(let[p,_]of[[-5.9,-6],[5.9,-6],[-6.6,-9.5],[6.6,-9.5]]){let y=Ou();y.position.set(p,0,_),t.add(y)}for(let[p,_]of[[-6.5,-11.2],[6.5,-11.2]]){let y=ku(4440682);y.position.set(p,0,_),t.add(y)}let m=Fu();m.position.set(-5.3,0,-12.1),t.add(m),this.buildSlots(),this.boardGroup=new ae,t.add(this.boardGroup),this.busGroup=new ae,t.add(this.busGroup),this.passGroup=new ae,t.add(this.passGroup)}roundedPlate(t,e,n){let s=new Gs,r=-t/2,a=-e/2;s.moveTo(r+n,a),s.lineTo(r+t-n,a),s.quadraticCurveTo(r+t,a,r+t,a+n),s.lineTo(r+t,a+e-n),s.quadraticCurveTo(r+t,a+e,r+t-n,a+e),s.lineTo(r+n,a+e),s.quadraticCurveTo(r,a+e,r,a+e-n),s.lineTo(r,a+n),s.quadraticCurveTo(r,a,r+n,a);let o=new ua(s,6);return o.rotateX(-Math.PI/2),o}slotTexture(t){return Nc(128,340,(e,n,s)=>{if(e.clearRect(0,0,n,s),t==="vip"){let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffe17a"),r.addColorStop(1,"#d99a12"),e.fillStyle=r,or(e,5,5,n-10,s-10,22),e.fill(),e.strokeStyle="#fff3c4",e.lineWidth=4,or(e,5,5,n-10,s-10,22),e.stroke(),e.save(),e.translate(n/2,s/2),e.rotate(-Math.PI/2),e.fillStyle="#7a4d00",e.font="900 64px system-ui,sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("VIP",0,4),e.restore();return}e.fillStyle=t==="locked"?"rgba(20,28,45,.28)":"rgba(15,22,38,.22)",or(e,5,5,n-10,s-10,22),e.fill(),e.lineWidth=5,e.strokeStyle=t==="temp"?"#7dffb0":"rgba(255,255,255,.85)",t==="locked"&&e.setLineDash([16,12]),or(e,5,5,n-10,s-10,22),e.stroke(),e.setLineDash([]),t==="locked"&&(e.fillStyle="#3fdc6a",or(e,n/2-34,s/2-34,68,68,16),e.fill(),e.fillStyle="#fff",e.fillRect(n/2-22,s/2-6,44,12),e.fillRect(n/2-6,s/2-22,12,44))})}buildSlots(){this.slotTex={open:this.slotTexture("open"),locked:this.slotTexture("locked"),vip:this.slotTexture("vip"),temp:this.slotTexture("temp")};for(let t=0;t<Ve+1;t++){let e=new J(new Ue(qu,ka),new Re({map:this.slotTex.open,transparent:!0,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(dn(t),.04,me),e.renderOrder=2,this.scene.add(e),e.userData.slotK=t,this.slotMeshes.push(e)}this.slotMeshes[0].material.map=this.slotTex.vip}refreshSlots(t,e=[]){for(let n=0;n<Ve;n++){let s=this.slotMeshes[n+1];s.material.map=t.slotOpen[n]?e.includes(n)?this.slotTex.temp:this.slotTex.open:this.slotTex.locked,s.material.needsUpdate=!0}}resize(){let t=this.container.clientWidth||360,e=this.container.clientHeight||640,n=Math.min(window.devicePixelRatio||1,this.quality==="high"?2.5:this.quality==="medium"?1.75:1.25);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.camera.aspect=t/e,this.fitCamera(),this.fx?.setScale(e*n*.62)}fitCamera(){let t=this.camera,e=this.state?this.state.h:7,n=this.queueBack-.5,s=xs+e+.9,r=[],a=Math.max(4.75,this.state?this.state.w/2+.9:4.4);for(let d of[-a,a])r.push(new C(d,1,n),new C(d,0,s),new C(d,.4,s));let o=_u.degToRad(this.camera.aspect<.7?57:52),l=(n+s)/2,c=30,h=(d,f)=>{t.position.set(0,Math.sin(o)*d,f+Math.cos(o)*d),t.lookAt(0,0,f),t.updateMatrixWorld(!0),t.updateProjectionMatrix()},u=()=>{let d=0,f=9,g=-9;for(let v of r){let m=v.clone().project(t);d=Math.max(d,Math.abs(m.x)),f=Math.min(f,m.y),g=Math.max(g,m.y)}return{mx:d,mnY:f,mxY:g}};for(let d=0;d<7;d++){let f=6,g=120;for(let m=0;m<22;m++){let p=(f+g)/2;h(p,l);let _=u();_.mx<=.97&&_.mxY<=.97&&_.mnY>=-.97?g=p:f=p}c=g,h(c,l);let v=u();l-=(v.mxY+v.mnY)/2*c*.55}h(c,l)}clearStage(){for(let t of[this.boardGroup,this.busGroup,this.passGroup])for(;t.children.length;)t.remove(t.children[0]);this.busVis.clear(),this.passengers.clear(),this.walkers.clear(),this.tweens.length=0,this.glows.forEach(t=>this.scene.remove(t)),this.glows.clear(),this.labels.forEach(t=>t.remove()),this.labels.clear(),this.celebrating=[],this.stripBusy=!1,this.boardCd=0,this.slotHold.fill(!1),this.forceDepart=!1}loadStage(t,e=[]){this.clearStage(),this.state=t;let n=t.w,s=t.h,r=new J(this.roundedPlate(n+3.6,s+3.4,.9),new Tt({color:11122384,roughness:.85}));r.position.set(0,.015,xs+s/2-.1),r.receiveShadow=!0,this.boardGroup.add(r);let a=Nc(64*n,64*s,(c,h,u)=>{c.fillStyle="#d5dff0",c.fillRect(0,0,h,u);for(let d=0;d<s;d++)for(let f=0;f<n;f++)c.fillStyle=(f+d)%2?"#cdd8ec":"#dbe4f4",c.fillRect(f*64+2,d*64+2,60,60)}),o=new J(new Ue(n,s),new Tt({map:a,roughness:.9}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,xs+s/2),o.receiveShadow=!0,this.boardGroup.add(o);let l=new J(new Ue(n+.16,s+.16),new Re({color:9675718}));l.rotation.x=-Math.PI/2,l.position.set(0,.025,xs+s/2),this.boardGroup.add(l);for(let c of t.buses)this.makeBusVis(c);this.refreshSlots(t,e),this.fitCamera(),this.ensureQueue(!0),this.idleFired=!1}cellToWorld(t,e){return{x:t-this.state.w/2+.5,z:xs+e+.5}}busCenter(t){let e=ke[t.dir].horiz;return this.cellToWorld(t.x+(e?(t.len-1)/2:0),t.y+(e?0:(t.len-1)/2))}makeBusVis(t){let e=t.vip?0:this.hexOf(t.color),n=Aa({len:t.len,hex:e,style:this.cos.style,vip:t.vip,rim:this.cos.rim,vipSkin:this.cos.vipSkin,seats:t.seats}),s={id:t.id,g:n,parts:n.userData.parts,vcount:0,vcolors:[],traveling:!1,departing:!1,trailT:0,dragOff:0,bounce:0,dims:n.userData.dims};if(n.traverse(r=>{r.isMesh&&(r.castShadow=r.castShadow||!1)}),this.busGroup.add(n),this.busVis.set(t.id,s),t.st==="board"){let r=this.busCenter(t);n.position.set(r.x,0,r.z),n.rotation.y=Uc[t.dir],n.userData.baseX=r.x,n.userData.baseZ=r.z}else if(t.st==="parked"){let r=t.slot==="V"?0:t.slot+1;n.position.set(dn(r),0,me),n.rotation.y=0,n.scale.setScalar(In[t.len]||.75),s.parts.arrow&&(s.parts.arrow.visible=!1),s.vcount=t.boarded,s.vcolors=new Array(t.boarded).fill(t.color),sr(n,s.vcolors,a=>a===Pn?16777215:this.hexOf(a)),s.parked=!0}else n.visible=!1;return s}queuePos(t){let e=Math.floor(t/Ti),n=t%Ti;return{x:((e%2===0?n:Ti-1-n)-(Ti-1)/2)*Xu,z:Na-e*$u}}spawnPassenger(t,e){let n=this.state.queue[t],s=Sc(n,this.hexOf,(t*7+(t>>2))%4);s.traverse(o=>{o.isMesh&&(o.castShadow=this.quality!=="low")});let r=t-this.state.qi,a=this.queuePos(r);return s.position.set(a.x,0,a.z),s.rotation.y=0,s.userData.yaw=0,s.scale.setScalar(e?1:.01),s.userData.spawn=e?1:0,s.userData.idx=t,s.userData.moving=!1,this.passGroup.add(s),this.passengers.set(t,s),s}ensureQueue(t=!1){let e=this.state;if(!e)return;let n=this.quality==="low"?Ti*4:oy;for(let s=e.qi;s<Math.min(e.queue.length,e.qi+n);s++)this.passengers.has(s)||this.spawnPassenger(s,t)}startDriveToSlot(t,e,{instantArrive:n=!1}={}){let s=this.state.buses[t],r=this.busVis.get(t),a=e==="V"?0:e+1,o=dn(a),l=r.g;l.visible=!0;let c=this.state.w,h=this.state.h,u={x:l.position.x,z:l.position.z},d=(_,y)=>new it(_,y),f=[d(u.x,u.z)],g=c/2+1.15,v=xs+h+1;switch(s.summoned&&l.position.set(o,6,me+4),s.st==="parked"&&r.fromBoard,s.dir){case"U":f.push(d(u.x,Ln));break;case"D":{let _=u.x<=0?-1:1;f.push(d(u.x,v),d(_*g,v),d(_*g,Ln));break}case"L":f.push(d(-g,u.z),d(-g,Ln));break;case"R":f.push(d(g,u.z),d(g,Ln));break}f.push(d(o,Ln),d(o,me));let m=Yu(f,.95),p=Zu(m);r.traveling=!0,r.travel={poly:m,L:p,s:0,v:0,total:p[p.length-1],slot:a,park:In[s.len]||.75,final:p[p.length-1]-(me-Ln)*-1,yawSm:l.rotation.y},r.travel.finalStart=p[p.length-1]-(me+0-Ln)*-1,r.travel.finalStart=p[p.length-1]-Math.abs(me-Ln),r.fromBoard=!0,r.parts.arrow&&(r.parts.arrow.material.opacity=1),this.sfx("engine")}updateTravel(t,e){let n=t.travel,s=t.g,r=n.total-n.s,a=9.5,o=22,l=a,c=n.s>n.finalStart-.4&&this.slotHold[n.slot];c&&(l=0),l=Math.min(l,Math.sqrt(28*Math.max(0,r))+.8),n.v+=Math.sign(l-n.v)*Math.min(Math.abs(l-n.v),o*e),c&&n.s>=n.finalStart-.4+.02&&(n.v=0);let h=n.v*e;n.s=Math.min(n.total,n.s+h);let u=Ku(n.poly,n.L,n.s);s.position.x=u.x,s.position.z=u.z,s.userData.summonY!==void 0&&(s.position.y=0);let d=Math.atan2(-u.dx,-u.dz);s.rotation.y+=ar(s.rotation.y,d)*Math.min(1,e*14);let f=Math.max(0,Math.min(1,(n.s-(n.finalStart-2.2))/2.2));s.scale.setScalar(1+(n.park-1)*ys.out(f));for(let g of t.parts.wheels)g.rotation.x-=h/.15;t.trailT-=e,t.trailT<=0&&n.v>1.5&&(t.trailT=.07,this.emitTrail(s.position.x,s.position.z,s.rotation.y)),n.s>=n.total-.001&&this.finishArrive(t)}emitTrail(t,e,n){let s=t+Math.sin(n)*.45,r=e+Math.cos(n)*.45,a=this.cos.trail;a==="sparkle"?this.fx.stars.emit(s,.2,r,(Math.random()-.5)*.6,.6,(Math.random()-.5)*.6,16769674,.7,.16,0,1,.5):a==="stars"?this.fx.stars.emit(s,.25,r,(Math.random()-.5)*.8,.7,(Math.random()-.5)*.8,[8246271,16743904,16773757][Math.floor(Math.random()*3)],.8,.2,.02,1.5,.5):a==="bubbles"?this.fx.dots.emit(s,.2,r,(Math.random()-.5)*.4,.8,(Math.random()-.5)*.4,12577535,.9,.1,.32,-.8,.5):this.fx.puff(s,r,16777215,1,.55)}finishArrive(t){t.traveling=!1,t.parked=!0,t.travel=null;let e=t.g,n=this.state.buses[t.id],s=t.id,r=n.slot==="V"?0:n.slot+1;e.position.set(dn(r),0,me),e.rotation.y=0,e.scale.setScalar(In[n.len]||.75),t.parts.arrow&&(t.parts.arrow.visible=!1),t.bounce=1,this.sfx("park"),this.fx.puff(e.position.x,e.position.z+1,16777215,4,.7),n.vip&&(this.fx.burst(e.position.x,.6,e.position.z,16766042,26,3.2,!0,1),this.fx.ring(e.position.x,e.position.z,16766042,.4,2.6,.9),this.sfx("vip")),Bu(this.state,t.id),this.onBusArrive?.(n),this.idleFired=!1}startDeparture(t){let e=this.state.buses[t.id],n=e.slot==="V"?0:e.slot+1,s=t.g,r=s.position.x,a=r<=0?-1:1,o=me-Ta(e.len)*(In[e.len]||.75)/2,l=[new it(r,s.position.z),new it(r,gs),new it(a*11.5,gs)],c=Yu(l,1),h=Zu(c);t.departing=!0,t.depart={poly:c,L:h,s:0,v:0,total:h[h.length-1],slotK:n,slotIdx:e.slot},this.stripBusy=!0,this.slotHold[n]=!0,Ec(this.state,t.id),this.removeLabel(t.id),this.sfx("depart"),this.onBusDepart?.(e)}updateDeparture(t,e){let n=t.depart,s=t.g;n.v=Math.min(8.5,n.v+16*e);let r=n.v*e;n.s=Math.min(n.total,n.s+r);let a=Ku(n.poly,n.L,n.s);s.position.x=a.x,s.position.z=a.z;let o=Math.atan2(-a.dx,-a.dz);s.rotation.y+=ar(s.rotation.y,o)*Math.min(1,e*10);for(let l of t.parts.wheels)l.rotation.x-=r/.15;t.trailT-=e,t.trailT<=0&&(t.trailT=.08,this.fx.puff(s.position.x+Math.sin(s.rotation.y)*.4,s.position.z+Math.cos(s.rotation.y)*.4,16777215,1,.5)),n.s>2.4&&this.slotHold[n.slotK]&&(this.slotHold[n.slotK]=!1),n.s>=n.total-.01&&(t.departing=!1,this.stripBusy=!1,this.busGroup.remove(s),this.busVis.delete(t.id),this.slotHold[n.slotK]=!1,this.idleFired=!1)}startBoardWalk(t){let n=this.state.qi-1,s=this.passengers.get(n);s||(s=this.spawnPassenger(n,!0)),this.passengers.delete(n);let r=this.busVis.get(t.bus.id),a=t.bus,o=r.g.position.x,l=me-Ta(a.len)*(In[a.len]||.75)/2,c=(Math.random()-.5)*.22,h=l-.28;s.userData.walk={pts:[new it(s.position.x,s.position.z),new it(o+c,gs+.1),new it(o+c*.5,h)],seg:0,t:0,bus:r,color:t.color,hop:0},s.userData.state="board",this.walkers.add(s),this.sfx("step")}updatePassengers(t){let e=this.state;if(e){this.time+=t;for(let[n,s]of this.passengers){let r=s.userData;r.spawn<1&&(r.spawn=Math.min(1,r.spawn+t*4),s.scale.setScalar(Math.max(.01,ys.back(r.spawn))));let a=this.queuePos(n-e.qi),o=a.x-s.position.x,l=a.z-s.position.z,c=Math.hypot(o,l);if(c>.02){let h=Math.min(c,3.6*t);s.position.x+=o/c*h,s.position.z+=l/c*h,r.moving=!0,r.targetYaw=Math.atan2(o,l)}else r.moving=!1,r.targetYaw=0;this.animatePassenger(s,t,r.moving?"walk":"idle")}for(let n of[...this.walkers]){let s=n.userData,r=s.walk;if(r.hop>0){r.hop+=t*4.5;let m=Math.min(1,r.hop-1),p=r.bus,_=p.g.position.z-.15;n.position.x+=(p.g.position.x-n.position.x)*Math.min(1,t*12),n.position.z+=(_-n.position.z)*Math.min(1,t*12),n.position.y=Math.sin(m*Math.PI)*.5,n.scale.setScalar(Math.max(.15,1-m*.85)),this.animatePassenger(n,t,"board"),m>=1&&this.finishBoard(n);continue}let a=r.pts[r.seg],o=r.pts[r.seg+1],l=a.distanceTo(o),c=Math.hypot(o.x-n.position.x,o.y-n.position.z),h=r.seg===r.pts.length-2,u=h?Math.max(1.8,Math.min(4.8,c*3.2+1.2)):4.8,d=o.x-n.position.x,f=o.y-n.position.z,g=Math.hypot(d,f),v=Math.min(g,u*t);g>1e-4&&(n.position.x+=d/g*v,n.position.z+=f/g*v,s.targetYaw=Math.atan2(d,f)),this.animatePassenger(n,t,"walk"),g-v<.03&&(h?r.hop=1:r.seg++)}for(let n of this.celebrating)this.animatePassenger(n,t,"celebrate")}}animatePassenger(t,e,n){let s=t.userData;s.phase+=e*(n==="walk"?11:n==="celebrate"?9:2.2);let r=s.phase;s.targetYaw!==void 0&&(t.rotation.y+=ar(t.rotation.y,s.targetYaw)*Math.min(1,e*12));let[a,o]=s.arms,[l,c]=s.legs;if(n==="walk"){let h=Math.sin(r)*.9;l.rotation.x=h,c.rotation.x=-h,a.rotation.x=-h*.8,o.rotation.x=h*.8,s.rig.position.y=Math.abs(Math.sin(r))*.05,s.rig.rotation.z=Math.sin(r)*.05,s.head.rotation.z=Math.sin(r)*.05}else if(n==="celebrate")a.rotation.x=o.rotation.x=-2.6+Math.sin(r)*.3,a.rotation.z=.3,o.rotation.z=-.3,l.rotation.x=c.rotation.x=0,t.position.y=Math.abs(Math.sin(r*.9))*.35,s.rig.rotation.z=0;else if(n==="board")l.rotation.x=Math.sin(r)*.6,c.rotation.x=-Math.sin(r)*.6,a.rotation.x=o.rotation.x=-1.2;else{l.rotation.x=c.rotation.x=0,a.rotation.x=o.rotation.x=0,a.rotation.z=.04,o.rotation.z=-.04;let h=Math.sin(r+t.position.x)*.02;s.rig.position.y=0,s.rig.scale.set(1+h,1-h,1+h),s.rig.rotation.z=Math.sin(r*.5+t.position.z)*.02,s.head.rotation.z=Math.sin(r*.5+t.position.x*2)*.05}}finishBoard(t){let e=t.userData.walk,n=e.bus;this.walkers.delete(t),this.passGroup.remove(t),n.vcount++,n.vcolors.push(e.color),sr(n.g,n.vcolors,s=>s===Pn?16777215:this.hexOf(s)),n.bounce=Math.max(n.bounce,.6),this.fx.burst(n.g.position.x,.8,n.g.position.z-.5,this.hexOf(e.color),7,2.2,!0,.55),this.sfx("board"),this.onBoarded?.(e.color,this.state.buses[n.id]),this.idleFired=!1}director(t){let e=this.state;if(!e)return;this.boardCd-=t;let n=null;for(let s of this.busVis.values()){let r=e.buses[s.id];if(r.st==="parked"&&r.arrived&&!s.departing&&(s.vcount>=r.seats&&r.boarded>=r.seats||this.forceDepart&&s.vcount>=r.boarded)){n=s;break}}if(n&&!this.stripBusy&&this.walkers.size===0){this.startDeparture(n);return}if(!n&&!this.stripBusy&&this.boardCd<=0&&Ia(e)){let r=wc(e);r&&(this.startBoardWalk(r),this.boardCd=.16,this.ensureQueue())}this.idleFired||![...this.busVis.values()].some(r=>r.traveling||r.departing)&&this.walkers.size===0&&!this.stripBusy&&!Ia(e)&&!n&&(this.idleFired=!0,this.onIdle?.())}isBusy(){return this.state?[...this.busVis.values()].some(t=>t.traveling)||this.walkers.size>0||this.stripBusy:!1}isTraveling(){return[...this.busVis.values()].some(t=>t.traveling)}tween(t,e,n){this.tweens.push({t:0,dur:t,fn:e,done:n})}bump(t,e=[]){let n=this.busVis.get(t);if(!n)return;let s=this.state,r=s.buses[t],a=ke[r.dir],o=n.g;if(n.bumping)return;n.bumping=!0;let l=o.userData.baseX,c=o.userData.baseZ,h=ps(s,t),u=0,d=null;for(let[P,E]of wi(s,r)){let A=P+","+E;if(h.has(A)){d=A;break}u++}let f=Math.max(.1,u-.04),g=.14+.06*Math.min(u,5),v=.42,m=g+v,p=!1,_=e[0],y=l+a.x*(f+r.len/2),b=c+a.y*(f+r.len/2);this.sfx("engine"),this.tween(m,P=>{let E=P*m,A;if(E<g){let F=E/g;A=f*F*F}else{p||(p=!0,this.onBumpHit(n,_,a,y,b,u));let F=(E-g)/v;A=f*(1-Math.min(1,F*1.15))+Math.sin(F*Math.PI*2.2)*.1*(1-F)*(F<.5?-1:1)*.5,F>=1&&(A=0)}o.position.x=l+a.x*A,o.position.z=c+a.y*A;let R=E>=g?Math.max(0,1-(E-g)/.25):0;o.rotation.z=Math.sin(E*60)*.05*R,o.scale.set(1+.05*R*(a.horiz?-1:1)*.5,1,1+.05*R*(a.horiz?1:-1)*.5)},()=>{o.position.set(l,0,c),o.rotation.z=0,o.scale.setScalar(1),n.bumping=!1}),n.parts.arrow&&(n.parts.arrow.material.color.set(16734810),setTimeout(()=>n.parts.arrow&&n.parts.arrow.material.color.set(16777215),450))}onBumpHit(t,e,n,s,r,a){if(this.sfx("bump"),this.fx.burst(s,.6,r,16763210,14,3.2,!0,.6),this.fx.burst(s,.5,r,16777215,8,2.2,!1,.45),this.fx.puff(s,r,16777215,4,.7),this.fx.ring(s,r,16757575,.2,1.4,.45),this.shakeCamera(.16+Math.min(a,4)*.025,.32),e!==void 0){let o=this.busVis.get(e);if(!o)return;let l=o.g,c=l.userData.baseX,h=l.userData.baseZ;this.flashBus(e,16731469,.7),this.tween(.4,u=>{let d=Math.sin(u*Math.PI*3)*.14*(1-u);l.position.x=c+n.x*d,l.position.z=h+n.y*d,l.rotation.z=Math.sin(u*40)*.035*(1-u)},()=>{l.position.x=c,l.position.z=h,l.rotation.z=0})}}shakeCamera(t=.15,e=.3){let n=this.camera;if(this._shaking)return;this._shaking=!0;let s=n.position.clone();this.tween(e,r=>{let a=(1-r)*t;n.position.set(s.x+(Math.random()-.5)*a,s.y+(Math.random()-.5)*a*.6,s.z+(Math.random()-.5)*a)},()=>{n.position.copy(s),this._shaking=!1})}flashBus(t,e=16731469,n=.6){let s=this.busVis.get(t);if(!s)return;let r=s.parts.bodyMat,a=r.emissive.getHex(),o=s.g;this.tween(n,l=>{r.emissive.setHex(e),r.emissiveIntensity=Math.sin(l*Math.PI)*.55},()=>{r.emissive.setHex(a),r.emissiveIntensity=0})}shakeBus(t){let e=this.busVis.get(t);if(!e)return;let n=e.g,s=n.position.x;this.tween(.3,r=>{n.position.x=s+Math.sin(r*28)*.07*(1-r)},()=>{n.position.x=s})}setGlow(t,e=16769126){let n=this.glows.get(t);if(e===null){n&&(this.scene.remove(n),this.glows.delete(t));return}let s=this.busVis.get(t);if(!s)return;n||(n=new J(new Ue(1,1),new Re({map:bc(),color:e,transparent:!0,blending:$n,depthWrite:!1})),n.rotation.x=-Math.PI/2,n.renderOrder=4,this.scene.add(n),this.glows.set(t,n)),n.material.color.setHex(e);let r=this.state.buses[t],a=ke[r.dir].horiz;n.userData={w:a?r.len+1:1.9,l:a?1.9:r.len+1},n.position.set(s.g.position.x,.08,s.g.position.z)}clearGlows(){for(let t of[...this.glows.keys()])this.setGlow(t,null)}unlockSlotFx(t,e=!1){let n=this.slotMeshes[t+1];n.material.map=e?this.slotTex.temp:this.slotTex.open,n.material.needsUpdate=!0;let s=dn(t+1);this.fx.ring(s,me,16773280,.3,2.4,.9),this.fx.ring(s,me,9240500,.2,1.6,.7),this.fx.burst(s,.3,me,16769674,28,3,!0,1),this.tween(.5,r=>{n.scale.set(1+Math.sin(r*Math.PI)*.1,1+Math.sin(r*Math.PI)*.04,1)},()=>n.scale.set(1,1,1)),this.sfx("unlock")}animateRecall(t){let e=this.busVis.get(t),n=this.state.buses[t];if(!e)return;let s=e.g,r=this.busCenter(n),a=s.position.clone(),o=s.scale.x;e.parked=!1,this.removeLabel(t),this.tween(.8,l=>{let c=ys.inOut(l);s.position.x=a.x+(r.x-a.x)*c,s.position.z=a.z+(r.z-a.z)*c,s.position.y=Math.sin(l*Math.PI)*1.6,s.scale.setScalar(o+(1-o)*c),s.rotation.y+=ar(s.rotation.y,Uc[n.dir])*Math.min(1,l*1.5)},()=>{s.position.set(r.x,0,r.z),s.rotation.y=Uc[n.dir],s.scale.setScalar(1),s.userData.baseX=r.x,s.userData.baseZ=r.z,e.parts.arrow&&(e.parts.arrow.visible=!0)}),this.fx.ring(a.x,a.z,8246271,.3,1.8,.7)}startCraneToSlot(t,e){let n=this.state.buses[t],s=this.busVis.get(t),r=s.g,a=e==="V"?0:e+1,o=r.position.clone(),l=r.scale.x,c=In[n.len]||.75;s.traveling=!0,s.fromBoard=!0,this.fx.ring(o.x,o.z,11897855,.3,1.8,.7),this.sfx("whoosh");let h={x:dn(a),z:me};this.tween(.95,u=>{let d=ys.inOut(u);r.position.x=o.x+(h.x-o.x)*d,r.position.z=o.z+(h.z-o.z)*d,r.position.y=Math.sin(u*Math.PI)*3.2,r.scale.setScalar(l+(c-l)*d),r.rotation.y+=ar(r.rotation.y,0)*Math.min(1,u*2),Math.random()<.5&&this.fx.stars.emit(r.position.x,r.position.y+.3,r.position.z,0,0,0,13215743,.5,.2,.02,0,0)},()=>{r.position.y=0,s.traveling=!1,this.finishArrive(s)})}dropVip(t){let e=this.makeBusVis(t),n=e.g;n.visible=!0,n.position.set(dn(0),8,me),n.rotation.y=0,n.scale.setScalar(In[t.len]),e.parts.arrow&&(e.parts.arrow.visible=!1),e.traveling=!0,this.fx.ring(dn(0),me,16766042,.3,2.6,.9),this.tween(.8,s=>{n.position.y=8*(1-ys.out(s)),n.rotation.y=(1-s)*Math.PI*2},()=>{n.position.y=0,n.rotation.y=0,e.traveling=!1,this.finishArrive(e)})}convertFx(t,e){let n=this.busVis.get(t);if(!n)return;let s=n.g,r=this.state.buses[t];this.fx.ring(s.position.x,s.position.z,12946431,.3,2,.7),this.fx.burst(s.position.x,.7,s.position.z,12946431,22,3,!0,.9),this.tween(.5,a=>{let o=1+Math.sin(a*Math.PI)*.22;s.scale.setScalar(o)},()=>s.scale.setScalar(1)),e==="color"&&Uu(s,this.hexOf(r.color)),this.sfx("convert")}rebuildBus(t){let e=this.busVis.get(t);e&&this.busGroup.remove(e.g);let n=this.makeBusVis(this.state.buses[t]);return this.convertFx(t,"rebuild"),n}celebrate(){this.fx.confetti(0,-4,110),this.sfx("win");for(let t=0;t<12;t++){let e=Sc(t%7,this.hexOf,t);e.traverse(n=>{n.isMesh&&(n.castShadow=!1)}),e.position.set(-4.4+t*.8,0,gs+t%2*.3),e.userData.targetYaw=0,e.scale.setScalar(.01),e.userData.pop=-t*.05,this.passGroup.add(e),this.celebrating.push(e)}for(let t of this.busVis.values())t.bounce=1}bindInput(){let t=this.renderer.domElement,e=a=>{let o=t.getBoundingClientRect();return new it((a.clientX-o.left)/o.width*2-1,-((a.clientY-o.top)/o.height)*2+1)},n=(a,o)=>{this.raycaster.setFromCamera(e(a),this.camera);let l=new an(new C(0,1,0),-o),c=new C;return this.raycaster.ray.intersectPlane(l,c)?c:null};this._groundHit=n;let s=a=>{let o=n(a,.4);if(!o||!this.state)return-1;let l=this.state,c=-1,h=1e9;for(let u of l.buses){if(u.st!=="board")continue;let d=this.busCenter(u),f=ke[u.dir].horiz,g=(f?u.len:1)/2+.08,v=(f?1:u.len)/2+.08,m=Math.abs(o.x-d.x),p=Math.abs(o.z-d.z);if(m<=g&&p<=v){let _=m/g+p/v;_<h&&(h=_,c=u.id)}}return c};t.addEventListener("pointerdown",a=>{if(this.inputLocked)return;let o=s(a);if(o>=0){this.dragInfo={id:o,start:n(a,.4),moved:0,e0:{x:a.clientX,y:a.clientY},fired:!1},t.setPointerCapture(a.pointerId);return}let l=n(a,.04);if(l&&Math.abs(l.z-me)<ka/2){let c=Math.round(l.x/Ju+3.5);c>=0&&c<=Ve&&Math.abs(l.x-dn(c))<qu/2+.05&&this.onSlotTap?.(c===0?"V":c-1)}}),t.addEventListener("pointermove",a=>{let o=this.dragInfo;if(!o||o.fired)return;let l=n(a,.4);if(!l||!o.start)return;let c=this.state.buses[o.id],h=ke[c.dir],u=(l.x-o.start.x)*h.x+(l.z-o.start.z)*h.y;o.moved=Math.max(o.moved,Math.hypot(a.clientX-o.e0.x,a.clientY-o.e0.y));let d=this.busVis.get(o.id);if(!d)return;let f=this.freeGap(c);d.dragOff=Math.max(0,Math.min(u,Math.min(.55,f))),u>.55&&(o.fired=!0,d.dragOff=0,this.fireTap(o.id))});let r=()=>{let a=this.dragInfo;if(this.dragInfo=null,!a)return;let o=this.busVis.get(a.id);o&&(o.dragOff=0),!a.fired&&a.moved<14&&this.fireTap(a.id)};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",()=>{let a=this.dragInfo;if(this.dragInfo=null,a){let o=this.busVis.get(a.id);o&&(o.dragOff=0)}})}freeGap(t){let e=this.state,n=ke[t.dir],s=ps(e,t.id),[r,a]=t.dir==="R"?[t.x+t.len-1,t.y]:t.dir==="D"?[t.x,t.y+t.len-1]:[t.x,t.y],o=0;for(;;){if(r+=n.x,a+=n.y,r<0||a<0||r>=e.w||a>=e.h)return 99;if(s.has(r+","+a))return o;o++}}fireTap(t){if(this.tapFilter&&!this.tapFilter(t)){this.onTapRejected?.(t);return}this.onBusTap?.(t)}removeLabel(t){let e=this.labels.get(t);e&&(e.remove(),this.labels.delete(t))}updateLabels(){let t=this.state;if(!t)return;let e={w:this.container.clientWidth,h:this.container.clientHeight};for(let n of this.busVis.values()){let s=t.buses[n.id];if(s.st!=="parked"||!n.parked||n.departing){this.removeLabel(n.id);continue}let r=this.labels.get(n.id);r||(r=document.createElement("div"),r.className="seat-badge",this.labelLayer.appendChild(r),this.labels.set(n.id,r));let a=s.seats-n.vcount;r._v!==a&&(r.textContent=a,r._v=a),r.style.background=s.vip?"linear-gradient(#ffe27a,#e0a020)":"#"+this.hexOf(s.color).toString(16).padStart(6,"0"),r.style.color=s.vip?"#5a3a00":"#fff";let o=new C(n.g.position.x,.05,n.g.position.z+1.75).project(this.camera);r.style.transform=`translate(${(o.x*.5+.5)*e.w}px, ${(-o.y*.5+.5)*e.h}px) translate(-50%,-50%)`}}project(t,e,n){let s=new C(t,e,n).project(this.camera);return{x:(s.x*.5+.5)*this.container.clientWidth,y:(-s.y*.5+.5)*this.container.clientHeight}}busScreenPos(t){let e=this.busVis.get(t);return e?this.project(e.g.position.x,.6,e.g.position.z):null}slotScreenPos(t){return this.project(dn(t+1),.1,me)}vipSlotScreenPos(){return this.project(dn(0),.1,me)}queueScreenPos(){return this.project(0,.5,Na-1.5)}update(t){t=Math.min(t,.05);let e=this.state;for(let n=this.tweens.length-1;n>=0;n--){let s=this.tweens[n];s.t+=t;let r=Math.min(1,s.t/s.dur);s.fn(r),r>=1&&(this.tweens.splice(n,1),s.done?.())}if(e){for(let n of this.busVis.values())if(n.traveling&&n.travel)this.updateTravel(n,t);else if(n.departing)this.updateDeparture(n,t);else if(n.parked){if(n.bounce>0){n.bounce=Math.max(0,n.bounce-t*3.2);let s=n.bounce,r=In[e.buses[n.id]?.len||2]||.75;n.g.scale.set(r*(1+Math.sin(s*14)*.03*s),r*(1-Math.sin(s*14)*.04*s),r*(1+Math.sin(s*14)*.03*s))}n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2,Math.random()<.08&&this.fx.sparkleAround(n.g.position.x,n.g.position.z,.8,2,16769674,1))}else if(e.buses[n.id].st==="board"){let s=e.buses[n.id],r=ke[s.dir],a=n.g.userData.baseX,o=n.g.userData.baseZ;a!==void 0&&!this.tweens.length?(n.g.position.x+=(a+r.x*n.dragOff-n.g.position.x)*Math.min(1,t*18),n.g.position.z+=(o+r.y*n.dragOff-n.g.position.z)*Math.min(1,t*18)):a!==void 0&&n.dragOff&&(n.g.position.x=a+r.x*n.dragOff,n.g.position.z=o+r.y*n.dragOff),n.parts.glow&&(n.parts.glow.material.opacity=.6+Math.sin(this.time*3)*.2)}for(let[n,s]of this.glows){let r=this.busVis.get(n);if(!r)continue;let a=1+Math.sin(this.time*5)*.12;s.position.x=r.g.position.x,s.position.z=r.g.position.z,s.scale.set(s.userData.w*a,s.userData.l*a,1),s.material.opacity=.75+Math.sin(this.time*5)*.25}this.updatePassengers(t);for(let n of this.celebrating){let s=n.userData;s.pop!==void 0&&(s.pop+=t*3,s.pop>0&&n.scale.setScalar(Math.min(1,ys.back(Math.min(1,s.pop)))))}this.director(t),this.updateLabels()}this.fx.update(t),this.noRender||this.renderer.render(this.scene,this.camera)}dispose(){this.ro.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove(),this.labelLayer.remove()}};var kc=[{stages:[{w:4,h:4,buses:[{c:1,l:2,d:"L",x:0,y:0},{c:0,l:3,d:"U",x:1,y:1},{c:3,l:2,d:"R",x:2,y:3}],queue:[1,1,1,1,0,0,0,0,0,0,3,3,3,3],par:[0,1,2],wr:1,solution:[0,1,2]}],slotsBase:4,n:1,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:1,l:2,d:"D",x:0,y:0},{v:1,l:3,d:"R",x:2,y:1},{c:0,l:3,d:"U",x:1,y:0},{c:1,l:3,d:"L",x:1,y:4},{c:0,l:2,d:"L",x:3,y:0},{c:2,l:2,d:"L",x:0,y:3},{c:2,l:2,d:"D",x:2,y:2}],queue:[1,1,1,1,1,1,2,2,2,2,2,2,2,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0],par:[3,6,5,0,2,4],wr:.744,solution:[3,5,6,0,2,4],slots:3}],slotsBase:3,n:2,difficulty:"easy"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"R",x:1,y:3},{c:2,l:3,d:"R",x:1,y:4},{c:0,l:2,d:"D",x:4,y:2},{c:0,l:2,d:"D",x:1,y:1},{c:1,l:3,d:"U",x:0,y:2}],queue:[1,2,2,2,1,1,2,1,1,2,2,1,0,0,0,0,2,0,0,0,2,2,2,0,2,2],par:[4,1,2,0,3],wr:.888,solution:[4,1,2,0,3],slots:4}],slotsBase:4,n:3,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:0,y:4},{c:1,l:2,d:"U",x:2,y:2},{c:2,l:3,d:"U",x:0,y:1},{c:0,l:2,d:"L",x:0,y:0},{c:2,l:3,d:"D",x:1,y:1},{c:0,l:2,d:"U",x:2,y:0}],queue:[0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0,0,2,2,2,0,2],par:[5,1,0,4,3,2],wr:.66,solution:[3,0,2,5,1,4],slots:4}],slotsBase:4,n:4,difficulty:"normal"},{stages:[{w:5,h:5,buses:[{c:2,l:3,d:"L",x:1,y:0},{c:0,l:2,d:"D",x:0,y:3},{c:2,l:3,d:"D",x:4,y:0},{c:0,l:2,d:"L",x:3,y:4},{c:0,l:2,d:"L",x:1,y:4},{c:2,l:2,d:"U",x:3,y:1},{c:1,l:2,d:"R",x:3,y:3}],queue:[2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,2,2,2,2,2,2],par:[0,5,1,4,3,6,2],wr:.708,solution:[0,5,1,4,3,6,2],slots:4}],slotsBase:4,n:5,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:2,l:1,d:"D",x:3,y:3},{c:0,l:3,d:"R",x:3,y:0},{c:2,l:3,d:"L",x:2,y:4},{c:1,l:3,d:"L",x:3,y:5},{c:1,l:3,d:"D",x:0,y:3},{c:3,l:2,d:"R",x:1,y:3},{c:3,l:3,d:"U",x:4,y:1},{c:0,l:3,d:"U",x:5,y:1}],queue:[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,2,3,3,3],par:[1,7,6,4,3,2,0,5],wr:.568,solution:[1,7,6,4,3,2,0,5],slots:4}],slotsBase:4,n:6,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:0,l:3,d:"U",x:4,y:1},{c:1,l:2,d:"R",x:0,y:5},{c:3,l:4,d:"R",x:1,y:4},{c:3,l:1,d:"U",x:0,y:0},{c:0,l:2,d:"R",x:2,y:3},{c:3,l:2,d:"D",x:5,y:4,s:3},{c:2,l:3,d:"D",x:1,y:0},{c:1,l:4,d:"U",x:0,y:1}],queue:[0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,2,2,1,1,1,2,2,2,2,3,1,1,1,1,1,1,1,1],par:[0,4,5,2,1,6,3,7],wr:.512,solution:[0,4,5,2,3,7,1,6],slots:4}],slotsBase:4,n:7,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"U",x:1,y:2,s:5},{c:0,l:3,d:"R",x:2,y:4},{c:2,l:2,d:"D",x:0,y:4},{c:3,l:3,d:"L",x:2,y:2},{c:1,l:3,d:"D",x:5,y:3},{c:1,l:3,d:"D",x:0,y:1},{c:0,l:2,d:"L",x:2,y:3},{c:2,l:2,d:"R",x:2,y:5},{c:0,l:2,d:"D",x:3,y:0,s:3}],queue:[1,1,1,1,1,1,0,0,2,2,2,0,0,0,0,2,2,2,1,1,2,1,2,1,1,1,3,3,3,3,0,0,0,3,0,3,3,3,3,3,3,0,0,0],par:[4,1,7,2,5,0,6,3,8],wr:.564,solution:[4,1,2,7,5,0,6,3,8],slots:4}],slotsBase:4,n:8,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:2,l:2,d:"L",x:0,y:2},{c:2,l:2,d:"R",x:2,y:1},{c:2,l:3,d:"U",x:4,y:1},{c:1,l:3,d:"U",x:5,y:1},{c:0,l:2,d:"R",x:0,y:5},{c:0,l:4,d:"L",x:0,y:4,s:7},{c:0,l:2,d:"D",x:0,y:0},{c:3,l:3,d:"L",x:1,y:0},{c:0,l:3,d:"R",x:2,y:5},{c:3,l:2,d:"R",x:4,y:0}],queue:[2,2,2,2,3,3,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,2,2,2,2,2,2,2,3,3,3,3,2,2,2,3,3],par:[0,9,5,8,4,3,6,2,1,7],wr:.596,solution:[0,9,5,8,4,6,3,2,1,7],slots:4}],slotsBase:4,n:9,difficulty:"normal"},{stages:[{w:6,h:6,buses:[{c:3,l:3,d:"D",x:5,y:3},{c:0,l:1,d:"R",x:4,y:1},{c:3,l:3,d:"R",x:0,y:4},{c:0,l:3,d:"L",x:1,y:5},{c:1,l:3,d:"U",x:4,y:2},{c:0,l:3,d:"L",x:3,y:0},{c:1,l:2,d:"L",x:1,y:3},{c:2,l:2,d:"L",x:1,y:0},{c:2,l:2,d:"D",x:3,y:3},{c:2,l:2,d:"U",x:5,y:1},{c:0,l:2,d:"L",x:2,y:1}],queue:[0,1,1,1,0,0,0,1,2,2,2,2,3,3,3,3,3,3,0,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,0,0,2,2,2,1,1,1,2,1,1,1,3,3,3,3,3,3],par:[10,6,7,0,5,9,1,3,8,4,2],wr:.56,solution:[3,6,7,0,5,8,10,9,1,4,2],slots:4}],slotsBase:4,n:10,difficulty:"normal"},{stages:[{w:6,h:7,buses:[{c:4,l:3,d:"R",x:2,y:3},{c:3,l:3,d:"L",x:0,y:1},{c:3,l:2,d:"D",x:3,y:1},{c:3,l:1,d:"R",x:5,y:0},{c:4,l:3,d:"R",x:0,y:0},{c:0,l:3,d:"R",x:0,y:2},{c:0,l:2,d:"L",x:1,y:6,s:3},{c:2,l:1,d:"R",x:5,y:2},{c:3,l:2,d:"D",x:4,y:1},{c:2,l:2,d:"R",x:3,y:0,s:3},{c:0,l:3,d:"R",x:2,y:4},{c:1,l:2,d:"U",x:0,y:5}],queue:[3,0,0,0,0,3,0,0,4,4,4,4,4,4,2,3,3,2,2,2,2,3,3,3,3,3,3,0,3,0,3,3,3,3,3,0,0,0,0,4,4,4,4,4,4,1,1,1,1,0,0,0],par:[3,10,0,7,8,9,2,5,1,4,11,6],wr:.444,solution:[1,10,0,7,2,3,9,4,8,5,11,6],slots:4}],slotsBase:4,n:11,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:1,l:3,d:"U",x:0,y:0},{c:2,l:2,d:"U",x:5,y:1},{c:1,l:3,d:"D",x:1,y:3},{c:0,l:4,d:"D",x:3,y:2},{c:3,l:2,d:"U",x:1,y:0},{c:4,l:2,d:"R",x:1,y:2},{c:4,l:3,d:"D",x:5,y:3},{c:1,l:3,d:"D",x:0,y:3},{c:0,l:2,d:"R",x:2,y:6},{c:3,l:3,d:"U",x:4,y:1},{c:4,l:2,d:"D",x:4,y:5},{c:0,l:2,d:"L",x:4,y:0},{c:3,l:2,d:"U",x:3,y:0}],queue:[1,1,1,1,1,1,1,1,1,3,3,1,1,1,3,3,4,4,4,4,4,1,1,1,4,4,4,4,1,4,1,1,3,3,3,3,0,0,0,0,0,0,0,0,2,2,2,2,3,3,3,3,3,3,0,0,0,0,0,0,0,0,4,4,4,4],par:[2,7,4,6,0,10,12,8,11,1,9,3,5],wr:.428,solution:[0,2,4,6,7,10,12,8,3,11,1,9,5],slots:4}],slotsBase:4,n:12,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:3,l:2,d:"L",x:1,y:0},{c:3,l:2,d:"U",x:5,y:0},{c:4,l:3,d:"R",x:2,y:4},{c:4,l:2,d:"L",x:3,y:5,s:3},{c:1,l:2,d:"R",x:3,y:0},{c:1,l:3,d:"D",x:4,y:1},{c:0,l:4,d:"D",x:0,y:0},{c:2,l:2,d:"D",x:2,y:5,s:3},{c:0,l:3,d:"D",x:5,y:2},{c:3,l:2,d:"D",x:0,y:5},{c:0,l:1,d:"R",x:5,y:5},{c:1,l:3,d:"L",x:3,y:6,s:5},{c:1,l:4,d:"U",x:1,y:3},{c:2,l:3,d:"U",x:3,y:1}],queue:[3,3,3,0,3,0,1,1,1,1,2,2,2,2,2,2,2,2,2,3,0,0,0,3,0,0,0,0,3,0,3,3,3,3,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,0,0,0,0,0,4,4,4,4,4,4,0,4,4,4,1,1,1,1,1],par:[1,10,4,13,7,9,6,0,12,11,8,3,2,5],wr:.432,solution:[1,10,4,13,7,9,6,0,12,11,8,2,3,5],slots:4}],slotsBase:4,n:13,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:3,l:3,d:"R",x:3,y:1},{c:4,l:1,d:"U",x:0,y:1},{c:0,l:3,d:"L",x:3,y:3},{c:3,l:2,d:"L",x:1,y:1,s:3},{c:4,l:2,d:"U",x:5,y:5},{c:1,l:2,d:"R",x:4,y:0},{c:2,l:2,d:"R",x:3,y:5},{c:4,l:1,d:"L",x:0,y:0},{c:1,l:3,d:"U",x:1,y:3,s:5},{c:4,l:1,d:"R",x:2,y:6},{c:0,l:2,d:"R",x:3,y:6},{c:0,l:3,d:"R",x:1,y:0},{c:0,l:3,d:"L",x:3,y:4},{c:3,l:3,d:"U",x:0,y:2},{c:2,l:3,d:"U",x:2,y:2}],queue:[3,3,3,3,3,3,1,1,1,0,4,1,0,0,0,4,0,0,4,3,3,3,4,3,3,1,1,3,1,1,1,3,3,3,2,2,2,2,2,2,0,0,0,0,0,0,0,4,2,2,2,0,0,4,4,4,2,0,0,0,0,0,0,0,4,4],par:[0,5,11,7,1,3,13,8,14,2,12,4,6,10,9],wr:.432,solution:[0,5,11,7,1,13,3,8,14,2,12,4,6,10,9],slots:4}],slotsBase:4,n:14,difficulty:"hard"},{stages:[{w:6,h:7,buses:[{c:4,l:2,d:"R",x:4,y:1},{c:0,l:2,d:"U",x:4,y:3},{c:1,l:1,d:"L",x:0,y:0},{c:1,l:2,d:"U",x:1,y:2},{c:1,l:3,d:"R",x:1,y:6},{c:1,l:2,d:"D",x:1,y:4},{c:2,l:4,d:"R",x:0,y:1},{c:3,l:3,d:"L",x:3,y:2},{c:3,l:2,d:"L",x:4,y:0},{c:2,l:2,d:"D",x:0,y:5},{c:1,l:3,d:"U",x:2,y:2},{c:0,l:3,d:"U",x:0,y:2},{c:4,l:1,d:"D",x:4,y:6},{c:2,l:1,d:"L",x:5,y:3},{c:4,l:3,d:"U",x:5,y:4},{c:2,l:3,d:"L",x:1,y:0}],queue:[1,4,4,1,4,4,2,2,2,2,2,2,3,3,2,2,2,2,3,3,2,2,2,2,2,2,2,2,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,3,3,3,0,2,3,3,3,0,2,0,0,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1],par:[2,0,9,15,8,6,11,10,3,7,1,13,14,12,4,5],wr:.344,solution:[2,0,6,11,15,8,9,10,3,7,1,13,14,12,4,5],slots:4}],slotsBase:4,n:15,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:1,l:1,d:"U",x:5,y:5},{c:1,l:2,d:"L",x:3,y:4,s:3},{c:2,l:3,d:"D",x:1,y:2},{c:4,l:3,d:"R",x:2,y:5},{c:2,l:3,d:"L",x:0,y:6},{v:1,l:3,d:"L",x:0,y:1},{c:2,l:3,d:"R",x:4,y:0},{c:0,l:3,d:"U",x:5,y:2,s:5},{c:1,l:1,d:"U",x:5,y:6},{c:1,l:4,d:"U",x:6,y:3},{c:3,l:2,d:"D",x:2,y:3,s:3},{c:3,l:3,d:"D",x:3,y:0,s:5},{c:4,l:2,d:"R",x:3,y:6,s:3},{c:4,l:2,d:"L",x:3,y:3},{c:4,l:2,d:"D",x:0,y:3}],queue:[2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,1,1,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,1,4,1,4,4,4,4,4,4,4,4,4,3,3,3,3,4,4,1,4,1,1,4,4,4,4,3,3,3,3],par:[6,9,7,4,2,0,8,12,3,10,14,1,13,11],wr:.34,solution:[4,2,6,9,7,0,8,3,12,14,10,1,13,11],slots:4}],slotsBase:4,n:16,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:2,l:4,d:"U",x:6,y:3,s:7},{c:3,l:2,d:"R",x:4,y:6},{c:3,l:2,d:"D",x:0,y:5},{c:2,l:3,d:"U",x:1,y:1,s:5},{c:0,l:2,d:"U",x:0,y:0},{c:4,l:3,d:"L",x:2,y:3},{c:4,l:3,d:"U",x:3,y:4},{c:2,l:4,d:"L",x:3,y:2},{c:0,l:3,d:"D",x:0,y:2},{c:1,l:4,d:"L",x:3,y:0},{v:1,l:3,d:"D",x:1,y:4},{c:2,l:4,d:"R",x:3,y:1},{c:1,l:2,d:"U",x:2,y:0},{c:0,l:2,d:"R",x:4,y:5},{c:3,l:1,d:"R",x:2,y:6},{c:0,l:1,d:"U",x:1,y:0}],queue:[0,3,3,0,0,0,3,0,3,0,1,1,0,0,0,0,0,1,1,0,2,2,2,2,2,1,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,2,4,2,2,2,4,4,4,2,4,2,2,4,2,2,4,4,4,4,4,2,2,2,2,2,0,0,4,2,0,0,3,3,3,3,3,3],par:[15,2,4,12,8,3,9,11,5,7,6,0,13,1,14],wr:.3,solution:[4,2,8,12,15,11,9,3,7,5,0,6,13,1,14],slots:4}],slotsBase:4,n:17,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:4,l:1,d:"L",x:0,y:4},{c:5,l:2,d:"L",x:1,y:0,s:3},{c:0,l:3,d:"L",x:4,y:4},{c:0,l:1,d:"D",x:2,y:6},{c:4,l:1,d:"D",x:3,y:4},{v:1,l:3,d:"R",x:4,y:0},{c:0,l:3,d:"D",x:6,y:1,s:5},{c:3,l:3,d:"U",x:1,y:4,s:5},{c:1,l:2,d:"L",x:1,y:2},{c:2,l:2,d:"R",x:4,y:1},{c:2,l:2,d:"U",x:2,y:4,s:3},{c:2,l:4,d:"L",x:0,y:1},{c:1,l:3,d:"L",x:4,y:6},{c:1,l:1,d:"D",x:0,y:6},{c:1,l:4,d:"R",x:3,y:5},{c:4,l:1,d:"D",x:3,y:6},{c:0,l:4,d:"L",x:0,y:3}],queue:[4,0,4,4,0,4,1,5,5,5,2,2,2,2,2,2,1,2,2,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,4,4,2,2,3,3,3,3,3,2,2,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,2,2,2],par:[0,3,15,13,1,11,16,14,8,4,10,7,12,2,6,9],wr:.068,solution:[0,16,15,14,1,11,3,8,13,4,10,7,2,12,6,9],slots:4}],slotsBase:4,n:18,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:0,l:4,d:"U",x:1,y:0},{c:5,l:1,d:"R",x:5,y:6},{c:5,l:3,d:"L",x:2,y:6},{c:1,l:3,d:"D",x:2,y:0,s:5},{c:2,l:2,d:"U",x:1,y:5},{c:0,l:1,d:"D",x:2,y:5},{c:4,l:2,d:"D",x:6,y:2},{c:3,l:2,d:"U",x:0,y:1},{c:4,l:2,d:"L",x:2,y:4},{c:5,l:2,d:"R",x:5,y:4},{c:2,l:2,d:"R",x:4,y:0},{c:1,l:4,d:"U",x:0,y:3},{c:3,l:3,d:"D",x:5,y:1},{c:3,l:2,d:"R",x:5,y:5},{c:1,l:1,d:"U",x:0,y:0},{v:1,l:3,d:"U",x:3,y:0},{c:0,l:1,d:"L",x:1,y:4},{c:1,l:3,d:"R",x:2,y:3,s:5}],queue:[1,1,2,2,2,3,3,3,2,3,3,5,5,3,3,3,5,5,5,5,4,4,0,0,4,4,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,3,3,3,3,3,2,2,3,2,2,5,5,5,5,5,5,0,0,4,4,1,1,1,4,4,1,1,1,1,1,1,1],par:[14,10,7,13,1,9,6,0,11,16,12,4,2,5,8,17,3],wr:.224,solution:[14,10,7,13,9,1,6,0,11,16,12,4,2,5,8,17,3],slots:4}],slotsBase:4,n:19,difficulty:"hard"},{stages:[{w:7,h:7,buses:[{c:0,l:4,d:"R",x:1,y:0},{c:3,l:4,d:"U",x:0,y:0},{c:3,l:1,d:"R",x:5,y:5},{c:1,l:3,d:"R",x:1,y:1},{c:4,l:2,d:"U",x:5,y:0},{c:2,l:2,d:"U",x:6,y:0,s:3},{c:5,l:1,d:"D",x:2,y:6},{v:1,l:3,d:"R",x:4,y:4},{c:2,l:2,d:"R",x:5,y:2},{c:2,l:2,d:"U",x:2,y:2},{c:5,l:2,d:"D",x:3,y:3,s:3},{c:3,l:1,d:"D",x:6,y:5},{c:1,l:2,d:"U",x:0,y:5},{c:5,l:3,d:"L",x:4,y:3},{c:5,l:4,d:"L",x:3,y:6},{c:5,l:1,d:"L",x:0,y:4},{c:2,l:4,d:"U",x:1,y:3},{c:3,l:3,d:"L",x:2,y:5}],queue:[5,5,4,5,5,4,4,4,2,2,2,1,1,2,2,1,2,2,1,2,1,1,0,0,0,0,2,2,2,0,0,0,2,0,3,3,3,3,3,3,2,2,2,2,2,2,1,3,3,2,1,1,1,5,5,5,5,5,5,5,5,3,3,3,3,3,3,5,5,5,3,3,5,5,5,5,3,5,5,3],par:[6,15,4,8,5,3,0,9,1,16,12,14,11,17,10,13,2],wr:.236,solution:[6,4,15,5,3,8,0,16,1,9,12,14,17,10,11,13,2],slots:4}],slotsBase:4,n:20,difficulty:"hard"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"R",x:4,y:5},{v:1,l:3,d:"R",x:4,y:0},{c:3,l:3,d:"L",x:4,y:2},{c:4,l:2,d:"D",x:0,y:6},{c:5,l:3,d:"D",x:0,y:2},{c:3,l:1,d:"D",x:1,y:6},{c:1,l:4,d:"L",x:3,y:3},{c:2,l:3,d:"L",x:2,y:6},{c:4,l:4,d:"L",x:0,y:5},{c:0,l:2,d:"U",x:1,y:2},{c:5,l:2,d:"L",x:5,y:6},{c:5,l:1,d:"D",x:6,y:1},{c:4,l:2,d:"L",x:1,y:0},{c:0,l:4,d:"D",x:2,y:1,s:7},{c:2,l:1,d:"D",x:6,y:4},{c:5,l:3,d:"R",x:3,y:1},{c:1,l:2,d:"R",x:5,y:7}],queue:[4,4,4,4,4,4,4,3,4,4,4,3,4,4,4,4,4,4,4,4,4,4,1,2,2,2,2,4,4,1,1,1,2,2,5,5,5,5,5,5,2,5,5,2,5,5,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,3,3,3,3,5,1,3,5,3,5,5,5,5,5,5],par:[12,0,5,8,3,16,7,4,10,14,9,13,6,2,11,15],wr:.136,solution:[8,5,0,3,12,16,7,4,13,9,10,14,6,2,11,15],slots:4}],slotsBase:4,n:21,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:2,d:"R",x:4,y:3},{c:2,l:3,d:"R",x:4,y:7},{c:1,l:3,d:"L",x:4,y:5},{c:0,l:2,d:"L",x:5,y:6,s:3},{c:0,l:2,d:"D",x:5,y:1},{c:5,l:3,d:"R",x:2,y:1},{c:3,l:1,d:"R",x:6,y:4},{c:0,l:1,d:"L",x:5,y:4},{c:4,l:2,d:"D",x:6,y:2},{c:3,l:3,d:"R",x:3,y:0},{c:4,l:2,d:"U",x:0,y:4},{c:3,l:3,d:"D",x:3,y:5},{c:5,l:2,d:"D",x:2,y:5},{c:1,l:2,d:"L",x:0,y:3},{c:3,l:4,d:"U",x:1,y:4},{c:2,l:1,d:"L",x:1,y:1},{c:0,l:3,d:"L",x:0,y:0}],queue:[3,3,1,3,3,3,3,3,1,1,3,1,2,0,0,0,0,2,2,2,0,2,0,2,2,2,4,4,4,5,4,5,5,5,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,0,0,0,0,1,1,1,1,1,0,1,4,4,4,4,4,4,4,4,0,0,0,5,5,5,5,5,5],par:[6,9,13,15,16,1,10,12,11,14,7,3,2,8,0,4,5],wr:.144,solution:[9,13,11,1,16,15,10,12,14,3,6,7,2,8,0,4,5],slots:4}],slotsBase:4,moveLimit:20,n:22,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:1,d:"L",x:0,y:5},{c:3,l:2,d:"L",x:3,y:3},{c:5,l:4,d:"D",x:2,y:1},{c:1,l:3,d:"U",x:1,y:3},{c:4,l:2,d:"U",x:3,y:0},{c:4,l:3,d:"L",x:1,y:6},{c:2,l:4,d:"D",x:6,y:4},{c:1,l:2,d:"R",x:2,y:5},{c:2,l:1,d:"R",x:5,y:0},{c:3,l:2,d:"L",x:3,y:4},{c:2,l:4,d:"R",x:0,y:7},{c:1,l:3,d:"U",x:1,y:0,s:5},{c:0,l:2,d:"D",x:0,y:3,s:3},{v:1,l:3,d:"U",x:4,y:0},{c:3,l:1,d:"D",x:3,y:2},{c:4,l:1,d:"L",x:0,y:6},{c:1,l:3,d:"D",x:4,y:5,s:5},{c:0,l:3,d:"U",x:5,y:5},{c:1,l:4,d:"U",x:6,y:0}],queue:[4,4,4,1,1,1,1,1,1,1,1,4,1,1,2,1,1,1,1,1,2,2,2,1,2,2,2,2,2,2,0,0,1,1,1,0,1,0,0,0,1,1,1,4,1,1,4,1,4,4,2,2,2,4,4,4,2,2,2,2,2,4,1,5,5,5,5,5,1,1,1,5,5,5,0,0,0,3,3,3,3,3,3,3,3,3,3],par:[4,18,0,8,16,6,17,7,11,15,5,10,3,2,12,1,9,14],wr:.136,solution:[4,18,11,6,3,8,17,16,15,7,5,10,2,0,12,1,9,14],slots:4}],slotsBase:4,n:23,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"U",x:4,y:3},{c:5,l:2,d:"U",x:6,y:4},{c:1,l:2,d:"L",x:3,y:2},{c:1,l:1,d:"U",x:5,y:1},{c:3,l:4,d:"D",x:2,y:2},{c:3,l:2,d:"R",x:5,y:3},{c:4,l:1,d:"D",x:0,y:7},{c:5,l:4,d:"U",x:0,y:2},{c:1,l:3,d:"U",x:6,y:0},{c:1,l:2,d:"U",x:5,y:6},{c:0,l:3,d:"L",x:1,y:0},{c:4,l:2,d:"U",x:0,y:0},{c:0,l:4,d:"D",x:1,y:1,s:7},{c:2,l:3,d:"R",x:2,y:1},{c:2,l:3,d:"R",x:0,y:6,s:5},{c:5,l:4,d:"R",x:1,y:7,s:7},{c:0,l:2,d:"U",x:6,y:6},{c:3,l:2,d:"R",x:4,y:0}],queue:[4,4,4,4,0,4,4,0,0,0,0,0,3,3,3,3,5,5,5,5,1,5,5,5,1,1,1,1,1,5,5,5,5,5,3,3,1,3,1,3,2,2,0,1,1,1,2,0,1,2,0,0,2,2,5,5,5,5,5,5,5,2,2,2,2,2,0,0,0,0,0,0,3,3,1,1,0,3,3,3,3,3,1,1,3,4,4,4,4,4,4],par:[6,11,10,5,7,8,1,17,3,13,16,9,15,14,12,4,2,0],wr:.248,solution:[11,10,6,5,7,8,1,17,3,13,16,9,15,14,12,4,2,0],slots:4}],slotsBase:4,n:24,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"L",x:2,y:6},{c:3,l:3,d:"D",x:3,y:0},{c:4,l:1,d:"L",x:3,y:4},{c:0,l:3,d:"L",x:1,y:5,s:5},{c:4,l:3,d:"U",x:0,y:4},{c:4,l:1,d:"L",x:0,y:1},{c:3,l:3,d:"L",x:4,y:0},{c:5,l:3,d:"U",x:1,y:2},{c:3,l:2,d:"D",x:6,y:6},{c:2,l:1,d:"L",x:0,y:3},{c:1,l:2,d:"R",x:4,y:4,s:3},{c:4,l:1,d:"L",x:0,y:2},{c:2,l:2,d:"L",x:0,y:7},{c:5,l:4,d:"U",x:6,y:1},{c:5,l:2,d:"D",x:5,y:6},{v:1,l:3,d:"R",x:4,y:5},{c:1,l:2,d:"L",x:0,y:0},{c:1,l:1,d:"D",x:1,y:6},{c:2,l:1,d:"D",x:4,y:7},{c:5,l:4,d:"D",x:2,y:0},{c:2,l:2,d:"L",x:2,y:7}],queue:[4,2,5,4,2,5,5,5,2,4,2,2,2,2,4,2,1,1,1,1,1,3,3,3,5,5,5,5,1,3,5,5,4,4,4,4,4,4,0,0,0,4,4,0,0,2,4,4,2,2,4,4,4,4,2,3,5,5,5,5,5,5,5,3,3,3,5,3,3,3,3,5,5,5,3,3,3,3,5,5,5,5,5,1,1,1],par:[11,18,14,9,5,12,17,16,8,7,4,2,3,20,0,1,19,6,13,10],wr:.028,solution:[5,12,14,11,20,16,17,8,7,9,4,3,0,18,2,1,19,6,13,10],slots:4}],slotsBase:4,moveLimit:23,n:25,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:4,l:2,d:"R",x:0,y:6},{c:1,l:3,d:"R",x:3,y:1,s:5},{c:0,l:2,d:"U",x:3,y:5},{c:3,l:2,d:"D",x:0,y:3},{c:2,l:4,d:"D",x:5,y:3},{c:1,l:3,d:"R",x:3,y:0},{c:1,l:4,d:"U",x:6,y:3},{c:1,l:3,d:"U",x:4,y:4},{c:4,l:3,d:"R",x:4,y:2}],queue:[1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,4,4,4,4,4,4,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,2,2,2,2,2,4,4,4,4,3,3,3,3],par:[5,1,2,8,7,4,6,0,3],wr:.32,solution:[1,4,5,2,8,6,7,0,3],slots:4},{w:7,h:7,buses:[{c:2,l:3,d:"L",x:0,y:3,s:5},{c:0,l:2,d:"R",x:4,y:2},{c:4,l:2,d:"D",x:0,y:0},{c:0,l:3,d:"L",x:2,y:0},{v:1,l:3,d:"D",x:4,y:4},{c:4,l:1,d:"R",x:5,y:1},{c:0,l:3,d:"D",x:0,y:4,s:5},{c:0,l:2,d:"L",x:2,y:2},{c:3,l:2,d:"L",x:5,y:0},{c:1,l:3,d:"U",x:3,y:3},{c:4,l:3,d:"U",x:6,y:1},{c:5,l:1,d:"U",x:5,y:4},{c:1,l:2,d:"L",x:4,y:3}],queue:[0,0,0,0,0,0,2,2,0,0,4,4,2,2,0,4,2,0,4,0,0,0,0,0,0,3,3,4,3,3,4,4,4,4,4,0,0,0,1,1,1,1,1,1,1,1,1,1,4,4,5,5],par:[6,0,7,2,3,8,10,1,9,12,5,11],wr:.224,solution:[6,7,0,2,3,9,8,10,1,12,5,11],slots:4}],slotsBase:4,timeLimit:160,n:26,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:2,l:3,d:"L",x:1,y:4},{c:3,l:4,d:"L",x:3,y:1},{c:3,l:2,d:"D",x:1,y:0},{c:4,l:3,d:"R",x:4,y:3},{c:0,l:1,d:"L",x:1,y:2},{c:0,l:3,d:"U",x:6,y:4},{c:2,l:2,d:"D",x:2,y:1},{c:4,l:4,d:"R",x:3,y:2,s:7},{c:1,l:2,d:"R",x:4,y:4},{c:3,l:3,d:"L",x:0,y:3,s:5}],queue:[2,2,2,2,2,0,3,2,0,3,3,3,3,3,2,2,4,4,3,3,2,4,4,4,4,4,4,3,3,2,3,3,4,4,4,4,4,0,3,3,3,3,3,0,0,0,0,0,1,1,1,1],par:[0,4,9,6,7,2,1,3,5,8],wr:.34,solution:[0,4,9,2,6,7,3,1,5,8],slots:4},{w:7,h:7,buses:[{c:2,l:2,d:"R",x:0,y:2,s:3},{c:1,l:2,d:"L",x:2,y:0},{c:3,l:3,d:"D",x:6,y:0},{c:4,l:2,d:"L",x:1,y:4},{c:5,l:3,d:"D",x:6,y:4},{c:2,l:3,d:"L",x:2,y:6,s:5},{v:1,l:3,d:"L",x:0,y:5},{c:2,l:2,d:"U",x:2,y:2},{c:3,l:2,d:"U",x:0,y:3},{c:0,l:4,d:"D",x:4,y:1},{c:1,l:1,d:"R",x:5,y:2},{c:2,l:3,d:"L",x:1,y:1},{c:1,l:2,d:"U",x:3,y:2},{c:0,l:1,d:"D",x:6,y:3}],queue:[2,2,2,2,2,2,0,0,0,0,0,5,5,0,0,0,5,5,5,5,1,1,1,1,2,0,2,2,2,2,2,2,0,2,2,2,1,1,1,1,3,1,2,3,1,2,3,3,3,3,3,4,4,4,3,3,3,4],par:[5,9,4,1,11,13,7,12,2,10,0,8,3],wr:.256,solution:[5,11,9,4,1,13,7,2,12,10,0,8,3],slots:4}],slotsBase:4,timeLimit:169,n:27,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:0,l:2,d:"U",x:5,y:1},{c:4,l:3,d:"D",x:4,y:3},{c:3,l:2,d:"U",x:5,y:3},{c:2,l:2,d:"U",x:6,y:0},{c:1,l:2,d:"R",x:5,y:6,s:3},{c:2,l:3,d:"D",x:2,y:2},{c:0,l:2,d:"L",x:1,y:6},{c:1,l:3,d:"R",x:3,y:0},{c:2,l:2,d:"D",x:6,y:4},{c:0,l:1,d:"R",x:3,y:3},{c:4,l:2,d:"D",x:6,y:2,s:3}],queue:[0,0,0,0,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,4,4,4,1,1,1,1,0,0,4,1,0,0,3,3,3,3,4,4,4,4,4,0,0],par:[6,5,4,8,3,10,7,0,2,1,9],wr:.34,solution:[6,5,4,1,3,7,8,0,2,10,9],slots:4},{w:7,h:7,buses:[{c:4,l:2,d:"D",x:5,y:5},{c:1,l:4,d:"U",x:6,y:0},{c:0,l:2,d:"L",x:2,y:4,s:3},{c:0,l:3,d:"L",x:0,y:2},{c:2,l:2,d:"R",x:2,y:5},{c:3,l:1,d:"L",x:1,y:3},{c:5,l:2,d:"L",x:1,y:1},{c:4,l:2,d:"D",x:4,y:4},{v:1,l:3,d:"U",x:4,y:0},{c:2,l:4,d:"U",x:5,y:1},{c:2,l:4,d:"R",x:0,y:6},{c:1,l:4,d:"D",x:3,y:0},{c:2,l:3,d:"D",x:6,y:4},{c:5,l:2,d:"U",x:1,y:4},{c:3,l:2,d:"D",x:0,y:3}],queue:[5,5,5,4,4,4,1,1,5,4,1,1,1,1,1,1,2,2,2,2,2,2,2,4,2,2,2,4,2,2,2,4,4,2,2,2,2,2,2,2,2,2,0,3,3,3,0,0,0,3,3,3,0,0,2,5,5,2,5,5,2,2,0,0,0,1,1,1,1,1,1,1,1],par:[6,7,1,9,0,12,10,3,14,5,4,13,2,11],wr:.176,solution:[6,0,1,9,7,12,10,3,14,5,4,13,2,11],slots:4}],slotsBase:4,timeLimit:178,n:28,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:1,l:3,d:"L",x:3,y:4,s:5},{c:0,l:1,d:"R",x:5,y:6},{c:3,l:3,d:"R",x:4,y:5},{c:1,l:4,d:"L",x:3,y:3},{c:2,l:2,d:"U",x:3,y:0},{c:3,l:1,d:"U",x:1,y:1},{c:1,l:3,d:"R",x:0,y:0},{c:1,l:4,d:"D",x:0,y:2},{c:1,l:4,d:"D",x:2,y:2},{c:0,l:2,d:"D",x:5,y:1},{c:4,l:4,d:"L",x:0,y:6,s:7},{c:4,l:4,d:"U",x:1,y:2}],queue:[2,2,0,2,2,0,1,1,1,1,1,3,3,3,1,3,3,3,3,4,4,4,4,4,1,1,1,1,1,1,3,4,1,1,4,4,4,1,1,1,1,1,1,1,1,4,1,1,1,4,4,4,4,1,1,1,1,4,1,1,1,1,1,1,0,0,0,0],par:[4,1,6,2,5,10,7,11,8,3,0,9],wr:.288,solution:[4,1,6,2,5,10,7,11,8,3,0,9],slots:4},{w:7,h:7,buses:[{c:5,l:2,d:"R",x:5,y:4},{v:1,l:3,d:"L",x:0,y:0},{c:5,l:4,d:"L",x:1,y:2},{c:5,l:2,d:"R",x:5,y:2},{c:4,l:4,d:"D",x:0,y:1,s:7},{c:3,l:3,d:"R",x:1,y:6},{c:1,l:4,d:"L",x:1,y:3},{c:4,l:2,d:"D",x:3,y:0},{c:4,l:2,d:"U",x:5,y:5},{c:5,l:2,d:"U",x:6,y:5},{c:5,l:4,d:"R",x:0,y:5},{c:1,l:1,d:"R",x:5,y:3},{c:2,l:3,d:"R",x:4,y:1},{c:4,l:1,d:"U",x:6,y:0},{c:5,l:1,d:"U",x:5,y:0},{c:0,l:3,d:"D",x:4,y:4}],queue:[1,5,5,5,4,1,5,4,5,5,5,5,2,2,2,2,5,5,2,2,4,4,4,0,0,0,0,0,4,0,5,3,5,3,3,3,3,3,5,5,5,4,4,4,4,4,4,1,1,1,1,1,5,4,4,1,1,1,5,5,5,5,5,5,5,5,5,5,4,5,5,5,4,4,5],par:[11,3,13,0,14,12,8,15,9,5,10,4,6,2,7],wr:.212,solution:[11,0,13,3,12,9,15,14,8,5,10,4,6,2,7],slots:4}],slotsBase:4,timeLimit:187,n:29,difficulty:"super"},{stages:[{w:7,h:7,buses:[{c:2,l:1,d:"R",x:6,y:2},{c:0,l:4,d:"R",x:1,y:2},{c:0,l:2,d:"U",x:0,y:3},{c:2,l:3,d:"D",x:5,y:0,s:5},{c:0,l:2,d:"D",x:5,y:3},{c:3,l:3,d:"L",x:0,y:6},{c:4,l:2,d:"L",x:2,y:3},{c:2,l:1,d:"R",x:5,y:6},{c:3,l:4,d:"R",x:1,y:1},{c:4,l:4,d:"D",x:6,y:3},{c:2,l:4,d:"U",x:4,y:3},{c:0,l:4,d:"L",x:0,y:5},{c:1,l:3,d:"L",x:2,y:0}],queue:[3,3,3,3,3,0,0,0,0,3,0,0,0,0,1,1,1,0,1,0,1,0,1,0,4,4,4,4,4,4,4,2,4,4,4,2,4,4,2,0,0,2,2,2,2,2,2,0,0,2,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2],par:[5,11,12,2,6,9,0,7,4,3,8,1,10],wr:.276,solution:[5,11,12,2,9,0,6,7,4,3,1,8,10],slots:4},{w:7,h:7,buses:[{c:0,l:1,d:"L",x:1,y:6},{c:0,l:3,d:"L",x:4,y:3},{c:4,l:4,d:"U",x:2,y:2},{v:1,l:3,d:"R",x:4,y:2},{c:4,l:3,d:"L",x:2,y:6},{c:4,l:2,d:"D",x:5,y:5},{c:5,l:3,d:"D",x:6,y:4},{c:1,l:3,d:"L",x:1,y:1,s:5},{c:1,l:3,d:"R",x:3,y:0},{c:2,l:3,d:"D",x:3,y:2},{c:2,l:2,d:"L",x:0,y:5},{c:3,l:2,d:"R",x:5,y:1},{c:3,l:3,d:"R",x:0,y:0,s:5},{c:4,l:1,d:"U",x:6,y:0},{c:3,l:1,d:"L",x:0,y:6},{c:2,l:4,d:"D",x:0,y:1},{c:0,l:3,d:"U",x:1,y:2}],queue:[3,3,4,4,4,3,3,3,4,3,2,2,2,2,0,0,4,5,4,5,5,5,5,5,1,1,1,4,4,4,2,1,4,4,2,2,2,2,1,4,2,2,2,1,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,2,0,0,0,0,0,2,2,2,0,2,2],par:[14,5,11,10,0,13,6,8,4,15,12,7,16,2,9,1],wr:.132,solution:[11,5,14,10,0,4,6,15,7,13,8,12,16,2,9,1],slots:4}],slotsBase:4,timeLimit:196,n:30,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:1,d:"U",x:1,y:0},{c:1,l:3,d:"R",x:3,y:0},{c:5,l:1,d:"D",x:3,y:7},{c:3,l:1,d:"D",x:0,y:7},{c:3,l:4,d:"R",x:2,y:1},{c:3,l:4,d:"U",x:5,y:4,s:7},{c:0,l:1,d:"U",x:2,y:0},{v:1,l:3,d:"U",x:0,y:0},{c:2,l:4,d:"D",x:6,y:0},{c:0,l:3,d:"R",x:1,y:6,s:5},{c:3,l:3,d:"D",x:6,y:5},{c:5,l:1,d:"D",x:1,y:5},{c:2,l:3,d:"D",x:0,y:3,s:5},{c:4,l:4,d:"D",x:1,y:1},{c:3,l:2,d:"R",x:1,y:7,s:3},{c:4,l:1,d:"L",x:0,y:6},{c:0,l:4,d:"U",x:4,y:4},{c:1,l:1,d:"R",x:6,y:4}],queue:[2,2,0,0,3,3,4,4,5,5,2,2,2,2,3,3,3,3,1,2,3,1,2,3,2,2,2,3,3,3,2,2,2,2,3,3,3,3,3,1,1,1,1,1,1,3,3,3,3,3,3,3,3,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,5,4,4,4,4,4,4,5,4,4],par:[0,6,3,15,2,12,10,17,8,4,1,5,16,14,9,11,13],wr:.248,solution:[0,6,10,15,2,3,12,17,8,4,1,5,16,14,9,11,13],slots:4}],slotsBase:4,n:31,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:3,d:"R",x:2,y:3,s:5},{c:0,l:2,d:"R",x:0,y:6},{c:4,l:1,d:"L",x:6,y:5},{c:0,l:2,d:"L",x:0,y:5},{c:3,l:1,d:"U",x:0,y:7},{c:5,l:2,d:"D",x:2,y:5,s:3},{c:1,l:1,d:"D",x:2,y:7},{c:4,l:2,d:"R",x:0,y:3},{c:2,l:2,d:"L",x:1,y:2},{c:2,l:4,d:"D",x:6,y:1},{c:5,l:4,d:"R",x:3,y:0,s:7},{c:4,l:4,d:"L",x:1,y:4},{c:2,l:1,d:"L",x:0,y:2},{c:5,l:1,d:"U",x:0,y:1},{c:5,l:3,d:"L",x:0,y:0,s:5},{c:1,l:3,d:"R",x:4,y:7},{c:3,l:4,d:"D",x:5,y:1},{c:0,l:2,d:"R",x:5,y:6},{c:5,l:1,d:"D",x:3,y:5}],queue:[1,1,5,2,5,2,5,5,5,5,5,5,5,5,2,5,2,2,2,5,5,5,5,5,0,0,0,5,5,5,4,4,4,4,4,4,0,4,4,0,0,0,0,0,0,0,0,1,1,1,4,2,2,1,1,4,2,1,2,2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,4,4,4,4,3,3],par:[6,18,12,10,8,14,17,5,11,13,1,3,15,2,9,16,0,7,4],wr:.02,solution:[15,10,12,14,8,13,18,3,6,5,11,17,1,2,9,16,0,7,4],slots:4}],slotsBase:4,n:32,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:1,d:"R",x:4,y:2},{c:3,l:1,d:"L",x:0,y:3},{c:5,l:1,d:"U",x:2,y:1},{c:3,l:3,d:"D",x:6,y:5},{c:4,l:3,d:"R",x:3,y:7,s:5},{c:4,l:1,d:"L",x:0,y:4},{c:0,l:2,d:"L",x:2,y:0},{c:2,l:1,d:"R",x:1,y:7},{c:4,l:2,d:"D",x:5,y:1,s:3},{c:4,l:1,d:"R",x:6,y:1},{c:0,l:4,d:"D",x:1,y:3},{c:0,l:2,d:"U",x:2,y:3},{c:2,l:1,d:"U",x:1,y:0},{c:0,l:2,d:"D",x:2,y:6},{c:0,l:3,d:"R",x:0,y:2,s:5},{c:3,l:3,d:"R",x:4,y:0},{c:5,l:3,d:"R",x:4,y:4,s:5},{v:1,l:3,d:"D",x:0,y:5},{c:5,l:2,d:"U",x:0,y:0},{c:5,l:2,d:"U",x:6,y:2,s:3}],queue:[4,4,3,4,4,3,2,2,5,5,5,3,3,3,3,3,5,5,5,3,5,5,5,5,0,0,0,0,0,0,0,0,5,3,3,3,3,4,4,4,4,4,5,3,3,4,2,2,5,5,4,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],par:[5,9,1,12,18,15,16,13,6,2,3,4,7,19,8,0,14,11,10],wr:.024,solution:[5,3,4,12,16,15,18,6,2,13,8,1,9,19,7,0,10,14,11],slots:4}],slotsBase:4,n:33,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:2,d:"D",x:1,y:4},{c:4,l:2,d:"L",x:0,y:3},{c:5,l:2,d:"L",x:5,y:4},{c:2,l:1,d:"R",x:6,y:2},{c:2,l:1,d:"D",x:2,y:7},{c:0,l:2,d:"D",x:1,y:6},{c:2,l:2,d:"L",x:0,y:2},{c:3,l:2,d:"L",x:5,y:7},{c:0,l:1,d:"D",x:4,y:7},{c:0,l:1,d:"D",x:3,y:7},{c:6,l:2,d:"U",x:0,y:0},{c:0,l:3,d:"U",x:0,y:4},{c:0,l:4,d:"D",x:5,y:0},{c:1,l:3,d:"U",x:2,y:1,s:5},{c:2,l:1,d:"L",x:0,y:7},{c:4,l:2,d:"D",x:6,y:0},{c:5,l:1,d:"R",x:6,y:3},{c:3,l:4,d:"R",x:3,y:6},{c:3,l:4,d:"L",x:3,y:5},{c:6,l:4,d:"R",x:1,y:0},{c:0,l:3,d:"D",x:2,y:4}],queue:[0,0,0,0,2,2,4,4,4,2,2,4,2,2,2,2,2,2,5,6,5,6,6,6,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,3,0,0,0,4,4,3,3,3,5,5,4,3,3,3,5,4,3,3,5,3,3,4,4,4,0,0,0,0,3,3,3,3,3,3,4,0,0,0,0,6,6,6,6,6,6,6,6,1,1,1,1,1],par:[9,8,4,14,1,6,3,16,10,11,5,7,20,0,17,2,18,15,12,19,13],wr:.008,solution:[5,6,0,3,4,14,16,10,20,8,9,17,1,11,2,18,7,15,12,19,13],slots:4}],slotsBase:4,n:34,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:2,l:1,d:"L",x:0,y:4},{v:1,l:3,d:"D",x:0,y:5},{c:5,l:2,d:"R",x:2,y:7},{c:0,l:2,d:"U",x:3,y:1},{c:4,l:2,d:"U",x:5,y:4,s:3},{c:1,l:3,d:"L",x:2,y:0},{c:5,l:3,d:"U",x:0,y:1},{c:5,l:2,d:"L",x:5,y:2},{c:2,l:1,d:"R",x:6,y:3},{c:1,l:4,d:"R",x:1,y:6,s:7},{c:0,l:2,d:"D",x:2,y:4},{c:0,l:1,d:"L",x:5,y:0},{c:4,l:1,d:"R",x:4,y:7},{c:3,l:2,d:"U",x:5,y:6},{c:6,l:1,d:"L",x:1,y:0},{c:0,l:1,d:"U",x:6,y:0},{c:3,l:1,d:"L",x:0,y:0},{c:1,l:4,d:"D",x:6,y:4},{c:2,l:3,d:"D",x:1,y:3,s:5},{c:1,l:4,d:"R",x:2,y:3},{c:0,l:1,d:"D",x:1,y:7},{c:1,l:3,d:"L",x:4,y:1}],queue:[2,2,0,2,2,0,0,3,0,3,6,5,5,5,5,1,1,1,1,1,6,5,5,1,0,0,0,1,1,0,1,1,1,1,0,5,5,5,0,5,1,1,1,1,1,1,1,4,4,4,1,1,1,1,1,4,1,1,1,1,3,3,1,1,1,3,1,1,1,1,3,4,5,5,5,0,0,5,0,0,2,2,2,2,2],par:[0,8,20,15,16,14,6,5,3,21,11,7,19,4,17,13,9,12,2,10,18],wr:.068,solution:[0,15,8,20,16,14,6,17,5,3,11,7,19,21,4,13,12,9,2,10,18],slots:4},{w:7,h:8,buses:[{c:2,l:2,d:"L",x:1,y:6,s:3},{c:1,l:4,d:"L",x:3,y:0,s:7},{c:0,l:2,d:"D",x:0,y:5},{c:1,l:3,d:"L",x:3,y:4},{c:6,l:3,d:"D",x:3,y:1},{c:5,l:3,d:"L",x:2,y:5,s:5},{c:6,l:3,d:"U",x:1,y:0},{c:1,l:4,d:"L",x:1,y:7,s:7},{c:0,l:3,d:"R",x:4,y:3,s:5},{c:1,l:3,d:"U",x:6,y:4},{c:0,l:2,d:"U",x:2,y:3},{c:6,l:3,d:"D",x:1,y:3},{c:0,l:2,d:"R",x:3,y:6},{c:3,l:2,d:"D",x:5,y:5,s:3},{c:5,l:2,d:"U",x:2,y:0},{c:2,l:2,d:"U",x:0,y:0},{c:0,l:3,d:"D",x:0,y:2},{c:4,l:3,d:"R",x:4,y:2,s:5}],queue:[4,4,4,4,4,6,6,6,6,6,2,6,2,2,2,5,5,5,5,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,3,3,1,1,1,1,1,0,3,1,0,0,0,2,2,2,0,0,0,0,0,0,1,1,1,1,1,1,1,1,6,6,6,5,0,6,6,6,5,5,0,0,5,5,1,1,1,1,6,6,6,6,6,6],par:[17,6,15,14,10,1,8,13,9,2,0,16,7,11,5,12,3,4],wr:.04,solution:[17,6,15,14,8,1,7,2,16,13,0,10,9,12,11,3,5,4],slots:4}],slotsBase:4,timeLimit:246,n:35,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:6,l:2,d:"D",x:1,y:0,s:3},{c:3,l:1,d:"U",x:4,y:0},{c:3,l:1,d:"D",x:0,y:7},{c:5,l:4,d:"R",x:3,y:7,s:7},{c:0,l:3,d:"L",x:1,y:5},{c:1,l:1,d:"R",x:5,y:0},{c:1,l:2,d:"U",x:6,y:0,s:3},{c:1,l:2,d:"L",x:1,y:7},{c:6,l:4,d:"D",x:0,y:3},{c:1,l:3,d:"D",x:6,y:4,s:5},{c:2,l:3,d:"D",x:3,y:0},{c:3,l:1,d:"L",x:0,y:1},{c:1,l:2,d:"R",x:3,y:3,s:3},{c:0,l:2,d:"L",x:1,y:3},{c:3,l:2,d:"U",x:5,y:2},{c:0,l:2,d:"R",x:4,y:1},{c:1,l:3,d:"R",x:3,y:4},{c:4,l:2,d:"D",x:6,y:2},{c:0,l:2,d:"R",x:0,y:2,s:3},{c:2,l:1,d:"U",x:2,y:0},{c:1,l:1,d:"L",x:0,y:0},{c:4,l:2,d:"U",x:2,y:1}],queue:[2,2,3,3,3,3,1,3,1,1,1,3,1,1,1,1,1,6,6,1,1,1,6,6,6,6,6,6,0,0,0,5,5,5,5,5,5,1,0,5,1,1,1,1,1,0,0,1,1,1,1,1,0,0,3,3,1,0,3,3,0,4,4,1,4,4,2,2,2,2,0,0,2,0,0,2,4,4,4,4,0,0,0,6,6,6],par:[19,11,1,20,2,6,7,5,8,4,3,9,16,15,14,17,12,10,13,21,18,0],wr:0,solution:[19,1,2,6,11,7,5,8,20,3,9,4,16,15,14,17,12,10,13,21,18,0],slots:4}],slotsBase:4,n:36,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:4,l:3,d:"D",x:4,y:5},{c:0,l:1,d:"R",x:6,y:3},{c:1,l:2,d:"R",x:0,y:7},{c:3,l:1,d:"R",x:6,y:2},{c:6,l:2,d:"L",x:0,y:3,s:3},{c:0,l:3,d:"U",x:1,y:0},{v:1,l:3,d:"U",x:5,y:0},{c:5,l:4,d:"D",x:3,y:2,s:7},{c:1,l:1,d:"R",x:6,y:5},{c:0,l:3,d:"D",x:0,y:4,s:5},{c:5,l:2,d:"U",x:6,y:0},{c:2,l:1,d:"R",x:2,y:5},{c:2,l:2,d:"D",x:3,y:6},{c:1,l:1,d:"D",x:5,y:7},{c:1,l:3,d:"L",x:2,y:0,s:5},{c:3,l:2,d:"U",x:6,y:6},{c:1,l:3,d:"U",x:4,y:1},{c:0,l:1,d:"R",x:6,y:4},{c:3,l:3,d:"D",x:0,y:0,s:5},{c:4,l:2,d:"D",x:2,y:6},{c:0,l:4,d:"D",x:5,y:3},{c:2,l:1,d:"L",x:3,y:1},{c:0,l:3,d:"D",x:2,y:1}],queue:[0,1,0,1,1,3,4,4,4,1,3,4,0,2,2,2,4,4,0,2,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,2,2,0,0,0,0,0,0,5,5,5,3,3,3,3,0,6,6,6,1,1,0,0,1,0,1,0,0,0,0,0,3,2,0,3,3,3,3,2,0,1,1,1,1,1,1,1,1,1,1,1],par:[17,8,13,3,19,1,12,0,20,7,11,22,10,15,5,4,2,9,18,21,14,16],wr:.004,solution:[5,8,13,3,0,12,19,20,7,10,11,22,1,17,15,4,2,9,18,21,14,16],slots:4}],slotsBase:4,n:37,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:0,l:1,d:"R",x:2,y:5},{c:1,l:1,d:"D",x:6,y:2},{c:2,l:1,d:"L",x:1,y:3},{c:4,l:1,d:"L",x:0,y:3},{c:6,l:1,d:"R",x:6,y:1},{c:4,l:4,d:"L",x:2,y:4},{c:0,l:2,d:"D",x:0,y:6},{c:6,l:2,d:"D",x:1,y:6},{c:6,l:3,d:"L",x:4,y:0,s:5},{c:1,l:1,d:"U",x:0,y:4},{c:0,l:3,d:"R",x:0,y:2},{c:1,l:4,d:"D",x:6,y:3},{c:4,l:1,d:"D",x:6,y:7},{c:1,l:3,d:"L",x:3,y:7,s:5},{c:5,l:2,d:"U",x:4,y:5},{c:3,l:2,d:"R",x:4,y:1},{c:5,l:3,d:"L",x:0,y:1},{c:6,l:4,d:"U",x:3,y:0},{c:6,l:3,d:"L",x:0,y:0},{c:3,l:2,d:"D",x:3,y:5},{c:2,l:2,d:"U",x:1,y:4,s:3},{c:3,l:2,d:"U",x:4,y:2},{c:1,l:1,d:"D",x:2,y:7}],queue:[6,4,4,6,4,4,6,6,0,0,0,6,6,0,6,6,6,6,6,3,3,5,5,5,6,3,3,5,5,5,1,1,1,1,1,1,6,6,6,6,6,6,6,6,6,1,6,6,6,6,1,1,1,3,3,3,3,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,2,1,2,2,2,4,4,4,4,4,4,4,4,5,5,3,3,5,3,5,3,0,0],par:[4,3,12,7,6,18,15,16,11,17,8,1,21,10,22,9,2,13,20,5,14,19,0],wr:.004,solution:[17,3,12,6,18,16,4,15,11,8,7,1,21,10,9,22,2,13,20,5,14,19,0],slots:4}],slotsBase:4,n:38,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:3,l:1,d:"R",x:6,y:6},{c:3,l:2,d:"L",x:3,y:3},{c:2,l:3,d:"D",x:0,y:1},{c:5,l:3,d:"U",x:1,y:1,s:5},{v:1,l:3,d:"D",x:4,y:5},{c:1,l:4,d:"D",x:2,y:3},{c:0,l:2,d:"L",x:0,y:4},{c:0,l:2,d:"L",x:0,y:5,s:3},{c:0,l:2,d:"R",x:5,y:0,s:3},{c:3,l:4,d:"D",x:3,y:4,s:7},{c:4,l:2,d:"L",x:0,y:7,s:3},{c:4,l:1,d:"U",x:0,y:0},{c:4,l:2,d:"L",x:0,y:6},{c:3,l:1,d:"R",x:6,y:5},{c:6,l:3,d:"R",x:4,y:1,s:5},{c:5,l:4,d:"L",x:2,y:2},{c:5,l:4,d:"L",x:1,y:0},{c:6,l:1,d:"D",x:2,y:7},{c:4,l:4,d:"D",x:5,y:3,s:7},{c:3,l:1,d:"U",x:4,y:4},{c:1,l:1,d:"R",x:6,y:4},{c:1,l:1,d:"R",x:6,y:2},{c:0,l:1,d:"R",x:6,y:3},{c:5,l:2,d:"R",x:5,y:7}],queue:[6,0,6,0,1,1,3,3,3,4,1,3,4,1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,5,5,5,5,4,4,1,1,1,4,4,4,4,1,1,1,1,1,6,6,5,5,5,5,5,5,5,2,2,6,5,2,2,6,6,2,2,5,5,5,5,5,3,3,5,3,3,5,5,3,5,3,5,5,5,5,3,3,3,3,3,3,3],par:[17,22,20,13,0,11,21,8,7,12,10,6,23,18,5,14,16,2,3,1,15,19,9],wr:0,solution:[14,22,20,0,13,10,21,6,7,8,12,11,23,18,17,5,16,2,3,9,15,1,19],slots:4}],slotsBase:4,n:39,difficulty:"super"},{stages:[{w:7,h:8,buses:[{c:1,l:4,d:"D",x:6,y:3},{c:4,l:1,d:"D",x:6,y:7},{c:3,l:4,d:"U",x:4,y:4,s:7},{c:3,l:1,d:"L",x:0,y:4},{c:0,l:2,d:"R",x:5,y:0},{c:5,l:2,d:"L",x:3,y:1,s:3},{c:6,l:1,d:"L",x:0,y:6},{c:2,l:4,d:"D",x:5,y:4,s:7},{c:0,l:3,d:"U",x:2,y:0},{c:0,l:2,d:"R",x:3,y:2},{c:0,l:2,d:"L",x:3,y:0},{c:6,l:1,d:"L",x:0,y:3},{c:1,l:3,d:"D",x:1,y:2,s:5},{c:2,l:2,d:"D",x:6,y:1,s:3},{c:2,l:2,d:"U",x:5,y:1,s:3},{c:5,l:4,d:"L",x:0,y:7,s:7},{c:5,l:3,d:"L",x:1,y:6,s:5},{c:4,l:2,d:"U",x:0,y:0},{c:2,l:3,d:"R",x:3,y:3,s:5},{c:4,l:2,d:"D",x:1,y:0,s:3},{c:6,l:4,d:"L",x:0,y:5},{c:4,l:1,d:"L",x:0,y:2}],queue:[6,4,3,6,4,3,4,4,6,6,2,2,2,2,2,0,0,1,1,1,1,1,2,2,0,0,1,1,2,1,2,2,2,2,2,2,2,2,2,2,6,6,6,6,6,0,0,6,6,0,6,0,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,5,5,5,5,4,4,4,4,4,4,0,5,4,0,0,0,0,0,0,0,3,3,3,3,0,0,3,3,3],par:[11,21,3,1,6,7,4,0,13,18,20,14,9,16,15,12,19,17,8,5,10,2],wr:0,solution:[20,1,3,21,7,8,0,18,13,4,14,6,11,15,16,12,17,19,5,9,10,2],slots:4},{w:7,h:8,buses:[{c:2,l:3,d:"L",x:0,y:1},{c:6,l:2,d:"R",x:0,y:0,s:3},{c:0,l:2,d:"D",x:5,y:1,s:3},{c:4,l:1,d:"R",x:4,y:1},{c:0,l:3,d:"U",x:4,y:2},{c:4,l:2,d:"R",x:3,y:0},{c:1,l:3,d:"U",x:1,y:5},{c:2,l:4,d:"U",x:0,y:4},{c:6,l:2,d:"D",x:6,y:6},{c:1,l:1,d:"L",x:2,y:7},{c:6,l:2,d:"R",x:5,y:0},{c:6,l:4,d:"U",x:6,y:1},{c:1,l:4,d:"R",x:0,y:3},{c:1,l:3,d:"D",x:5,y:3},{c:5,l:4,d:"R",x:0,y:2},{c:5,l:2,d:"R",x:4,y:6},{c:3,l:2,d:"R",x:4,y:7},{c:3,l:1,d:"U",x:2,y:0},{c:5,l:3,d:"D",x:3,y:5}],queue:[3,3,5,5,5,5,5,5,2,6,6,6,2,6,2,2,2,2,5,5,3,3,3,5,3,5,1,1,1,1,1,1,6,4,4,4,6,6,6,6,4,6,6,6,6,6,6,6,0,0,0,0,6,6,4,6,4,0,0,0,0,5,5,5,5,1,1,1,1,1,0,5,1,1,5,1,5,5,2,2,2,2,1,1,2,2,2,1,1,2,1,1,1,1],par:[17,18,0,8,15,16,13,10,5,11,2,1,3,4,14,12,7,6,9],wr:.152,solution:[17,18,0,8,15,16,13,10,5,11,2,1,3,4,14,12,7,6,9],slots:4}],slotsBase:4,timeLimit:255,n:40,difficulty:"super"}];function Fa(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.int=n=>Math.floor(e()*n),e.range=(n,s)=>n+e.int(s-n+1),e.pick=n=>n[e.int(n.length)],e.shuffle=n=>{for(let s=n.length-1;s>0;s--){let r=e.int(s+1);[n[s],n[r]]=[n[r],n[s]]}return n},e.weighted=n=>{let s=Object.keys(n),r=0;for(let o of s)r+=n[o];let a=e()*r;for(let o of s)if(a-=n[o],a<=0)return+o;return+s[s.length-1]},e}function Qu(i){return fs({len:i.l,dir:i.d,x:i.x,y:i.y})}function Oc(i,t,e){return wi({w:t,h:e},{len:i.l,dir:i.d,x:i.x,y:i.y})}function cy(i,t){let{w:e,h:n}=t,s=[],r=new Set,a=new Set,o=(d,f)=>d+","+f,l=(d,f,g)=>{let v=null,m=-1e9;for(let p=0;p<90;p++){let _=i.pick(["U","D","L","R"]),y=ke[_].horiz,b=i.int(e-(y?d-1:0)),P=i.int(n-(y?0:d-1)),E={l:d,d:_,x:b,y:P},A=Qu(E);if(A.some(([N,O])=>r.has(o(N,O))||a.has(o(N,O))))continue;let R=Oc(E,e,n);if(R.some(([N,O])=>r.has(o(N,O)))||g&&R.length>0)continue;let F=0,x=new Set(A.map(([N,O])=>o(N,O)));for(let N of s)if(!N.v){for(let[O,X]of Oc(N,e,n))if(x.has(o(O,X))){F++;break}}let S=0;for(let[N,O]of A)for(let X of Object.values(ke))r.has(o(N+X.x,O+X.y))&&S++;let k=F*3+S*.6+i()*2+(R.length>0?.5:0);k>m&&(m=k,v=E)}if(!v)return!1;v.v=f,s.push(v);for(let[p,_]of Qu(v))r.add(o(p,_));if(f)for(let[p,_]of Oc(v,e,n))a.add(o(p,_));return!0};if(t.vip)for(let d=0;d<t.vip;d++)l(Sa,!0,!0);let c=0;for(;s.filter(d=>!d.v).length<t.count&&c++<400;)l(i.weighted(t.lens),!1,!1);let h=s.filter(d=>d.v);return{normal:s.filter(d=>!d.v).reverse(),vips:h}}function hy(i,t,e){let n=t.length,s=[],r=[];for(let l=0;l<e.colors;l++)r.push(l);i.shuffle(r);for(let l=0;l<n;l++){let c=l<r.length?r[l]:i.pick(r);l>0&&c===s[l-1]&&e.colors>1&&i()<.7&&(c=(c+1+i.int(e.colors-1))%e.colors),s.push(c)}i.shuffle(s),t.forEach((l,c)=>{l.c=s[c]});let a=[],o=0;for(;o<n;){let l=Math.min(n-o,i.range(1,e.window));if(l===1){let c=t[o];for(let h=0;h<Ra(c.l,!1);h++)a.push(c.c)}else{let c=[];for(let u=0;u<l;u++){let d=t[o+u],f=Ra(d.l,!1),g=[];for(;f>0;){let v=Math.min(f,i.range(1,Math.max(1,f-(g.length===0?1:0))));g.push([d.c,v]),f-=v}c.push(g)}let h=!0;for(;h;){h=!1;for(let u of c)if(u.length){let[d,f]=u.shift();for(let g=0;g<f;g++)a.push(d);h=!0}}}o+=l}return a}function td(i,t){let e=Fa(i),{normal:n,vips:s}=cy(e,t),r=hy(e,n,t);if(t.mini){for(let u of n)if(u.l>=2&&e()<t.mini){let d=r.lastIndexOf(u.c);d>=0&&(r.splice(d,1),u.s=u.l*2-1)}}let a=[...n,...s],o=a.map((u,d)=>d);e.shuffle(o);let l=o.map(u=>({...a[u]})),c=n.map((u,d)=>o.indexOf(d)),h=l.map(u=>u.v?{v:1,l:u.l,d:u.d,x:u.x,y:u.y}:{c:u.c,l:u.l,d:u.d,x:u.x,y:u.y,...u.s?{s:u.s}:{}});return{w:t.w,h:t.h,buses:h,queue:r,par:c}}function ed(i){let t=s=>({vip:0,window:2,wr:.5,slots:4,...s}),e,n={};if(i===2)e=[t({w:5,h:5,count:6,lens:{2:3,3:2},colors:3,vip:1,window:2,wr:.7,slots:3})];else if(i<=5)e=[t({w:5,h:5,count:5+(i-3),lens:{2:3,3:2},colors:3,window:2,wr:.7})];else if(i<=10)e=[t({w:6,h:6,count:8+Math.floor((i-6)*.8),lens:{1:1,2:3,3:3,4:1},colors:4,window:2,wr:.55})];else if(i<=15)e=[t({w:6,h:7,count:12+(i-11),lens:{1:1,2:3,3:3,4:1},colors:5,window:3,wr:.4})];else if(i<=20)e=[t({w:7,h:7,count:14+(i-16),lens:{1:1,2:3,3:3,4:2},colors:i<18?5:6,window:3,vip:1,wr:.32})];else if(i<=25)e=[t({w:7,h:8,count:16+(i-21),lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:i%2,wr:.22})],(i===22||i===25)&&(n.moveSpare=3);else if(i<=30){let s=9+(i-26);e=[t({w:7,h:7,count:s,lens:{1:1,2:3,3:3,4:2},colors:5,window:3,vip:0,wr:.3}),t({w:7,h:7,count:s+3,lens:{1:1,2:3,3:3,4:2},colors:6,window:3,vip:1,wr:.22})],n.timeSpare=25}else{let s=Math.min(10,i-30);if(e=[t({w:7,h:8,count:17+Math.min(6,s),lens:{1:1,2:3,3:3,4:2},colors:6+(s>3?1:0),window:3,vip:i%2,wr:.18})],i%5===0){let r={...e[0],count:e[0].count-4,vip:0};e.push(r),n.timeSpare=30}i%7===0&&(n.moveSpare=3)}if(i>=6)for(let s of e)s.mini=Math.min(.3,.12+i*.006);return{stages:e,extra:n}}var nd=i=>i<=2?"easy":i<=10?"normal":i<=20?"hard":"super";function Fc(i,{useVip:t=!1,maxNodes:e=4e5}={}){let n=xn(i),s=n.buses.filter(R=>R.st==="board"&&(t||!R.vip)),r=new Map(s.map((R,F)=>[R.id,F])),a=s.length,o=new Map;for(let R of n.buses)if(R.st==="board")for(let[F,x]of fs(R))o.set(F+","+x,R.id);let l=new Array(a).fill(0),c=new Array(a).fill(!1);for(let R=0;R<a;R++){let F=s[R];for(let[x,S]of wi(n,F)){let k=o.get(x+","+S);k===void 0||k===F.id||(r.has(k)?l[R]|=1<<r.get(k):c[R]=!0)}}let h=n.slotOpen.slice(),u=n.slots.map(R=>R===null?null:{c:n.buses[R].color,b:n.buses[R].boarded,s:n.buses[R].seats}),d=n.vipSlot===null?null:{c:99,b:n.buses[n.vipSlot].boarded,s:n.buses[n.vipSlot].seats},f=n.queue,g=new Set,v=0,m=!1,p=[];function _(R,F,x,S){let k=R+"|"+F+"|";for(let N=0;N<Ve;N++)k+=x[N]?x[N].c*20+x[N].b+",":"-,";return S&&(k+="v"+S.b),k}function y(R,F,x){for(;;){if(R>=f.length)return{qi:R,vip:x};let S=f[R],k=!1;for(let N=0;N<Ve;N++){let O=F[N];if(O&&O.c===S&&O.b<O.s){O.b++,R++,k=!0,O.b>=O.s&&(F[N]=null);break}}if(!k){if(x&&x.b<x.s){x.b++,R++,x.b>=x.s&&(x=null);continue}return{qi:R,vip:x}}}}function b(R,F,x,S){if(F>=f.length)return!0;if(++v>e)return m=!0,!1;let k=_(R,F,x,S);if(g.has(k))return!1;let N=f[F],O=[];for(let X=0;X<a;X++){if(R&1<<X||c[X]||l[X]&~R)continue;if(s[X].vip){if(S)continue}else if(!x.some((j,W)=>h[W]&&j===null))continue;O.push(X)}O.sort((X,B)=>(s[X].color===N?0:1)-(s[B].color===N?0:1)||s[B].len-s[X].len);for(let X of O){let B=s[X],j=x.map(ot=>ot?{...ot}:null),W=S?{...S}:null;if(B.vip)W={c:99,b:0,s:B.seats};else{let ot=j.findIndex((xt,rt)=>h[rt]&&xt===null);j[ot]={c:B.color,b:0,s:B.seats}}let ht=y(F,j,W);if(p.push(B.id),b(R|1<<X,ht.qi,j,ht.vip))return!0;if(p.pop(),m)return!1}return g.add(k),!1}let P=u.map(R=>R?{...R}:null),E=y(n.qi,P,d?{...d}:null),A=b(0,E.qi,P,E.vip);return{solved:A,order:A?p.slice():[],nodes:v,aborted:m}}function id(i,t,e){let n=rr(i,t);Tc(n);for(let s of e){let r=Ca(n,s);if(!r.ok)return{ok:!1,at:s,reason:r.reason};Tc(n)}return{ok:La(n).status==="won",state:n}}function sd(i){let t=kc.find(o=>o.n===i);if(t)return t;let{stages:e,extra:n}=ed(i),s=e.map((o,l)=>{for(let c=0;c<40;c++){let h=td(i*1000003+l*7919+c*104729,o);if(id(h,{slotsOpen:o.slots},h.par).ok)return h.slots=o.slots,h}throw new Error("level gen failed")}),r=s.reduce((o,l)=>o+l.buses.filter(c=>!c.v).length,0),a={n:i,stages:s,slotsBase:e[0].slots,difficulty:nd(i)};return n.moveSpare&&s.length===1&&(a.moveLimit=r+n.moveSpare),(n.timeSpare||s.length>1)&&(a.timeLimit=Math.round(r*4.5+40+(n.timeSpare||0))),a}var Gy=kc.length;var Ba=()=>({v:1,level:1,completed:{},coins:60,owned:{style:["city"],rim:["steel"],palette:["vivid"],trail:["dust"],vipSkin:["gold"]},equipped:{style:"city",rim:"steel",palette:"vivid",trail:"dust",vipSkin:"gold"},perm:{slots:0},powerups:{undo:2,hint:2,recall:1,call:1,extraSlot:1,moves:1,time:1},temp:{level:0,slots:[],conv:0,vipCalls:0},tutorial:{l1:!1,l2:!1,enabled:!0},settings:{sound:!0,vibe:!0,quality:"high"},daily:{lastClaim:"",streak:0},quests:{date:"",list:[],progress:{},claimed:{}},ach:{unlocked:{},claimed:{}},iap:{tx:[]},stats:{passengers:0,levels:0,vip:0,coinsEarned:0,buses:0,slots:0,threeStars:0,ads:0}}),yn=(i,t,e=0,n=1e9)=>Number.isFinite(i)?Math.min(n,Math.max(e,Math.floor(i))):t,Bc=(i,t)=>typeof i=="string"?i:t,ye=i=>i&&typeof i=="object"&&!Array.isArray(i)?i:{};function uy(i){let t=Ba(),e=ye(i),n=Ba();n.level=yn(e.level,1,1,1e5),n.coins=yn(e.coins,t.coins,0,99999999);let s=ye(e.completed);n.completed={};for(let f of Object.keys(s)){let g=+f;Number.isInteger(g)&&g>0&&(n.completed[g]=yn(s[f],1,1,3))}for(let f of Object.keys(t.owned)){let g=Array.isArray(ye(e.owned)[f])?ye(e.owned)[f].filter(v=>typeof v=="string"):[];n.owned[f]=[...new Set([...t.owned[f],...g])]}for(let f of Object.keys(t.equipped)){let g=Bc(ye(e.equipped)[f],t.equipped[f]);n.equipped[f]=n.owned[f].includes(g)?g:t.equipped[f]}n.perm.slots=yn(ye(e.perm).slots,0,0,3);let r=ye(e.powerups);n.powerups={};for(let f of Object.keys(t.powerups))n.powerups[f]=yn(r[f],t.powerups[f],0,999);let a=ye(e.temp);n.temp={level:yn(a.level,0),slots:Array.isArray(a.slots)?a.slots.filter(f=>Number.isInteger(f)&&f>=0&&f<7):[],conv:yn(a.conv,0,0,99),vipCalls:yn(a.vipCalls,0,0,99)};let o=ye(e.tutorial);n.tutorial={l1:!!o.l1,l2:!!o.l2,enabled:o.enabled!==!1};let l=ye(e.settings);n.settings={sound:l.sound!==!1,vibe:l.vibe!==!1,quality:["low","medium","high"].includes(l.quality)?l.quality:"high"};let c=ye(e.daily);n.daily={lastClaim:Bc(c.lastClaim,""),streak:yn(c.streak,0,0,7)};let h=ye(e.quests);n.quests={date:Bc(h.date,""),list:Array.isArray(h.list)?h.list.filter(f=>f&&typeof f.id=="string").slice(0,6):[],progress:ye(h.progress),claimed:ye(h.claimed)};let u=ye(e.ach);n.ach={unlocked:ye(u.unlocked),claimed:ye(u.claimed)},n.iap={tx:Array.isArray(ye(e.iap).tx)?ye(e.iap).tx.filter(f=>typeof f=="string").slice(-300):[]};let d=ye(e.stats);n.stats={};for(let f of Object.keys(t.stats))n.stats[f]=yn(d[f],0);return n}var za=class{constructor(){this.data=this.load(),this._t=null}load(){try{let t=localStorage.getItem(yc);if(t)return uy(JSON.parse(t))}catch{}return Ba()}write(){try{localStorage.setItem(yc,JSON.stringify(this.data))}catch{}}save(t=!1){if(t){clearTimeout(this._t),this.write();return}clearTimeout(this._t),this._t=setTimeout(()=>this.write(),250)}reset(){this.data=Ba(),this.write()}};var Ha=class{constructor(){this.ctx=null,this.sound=!0,this.vibe=!0,this.last={}}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(t)try{this.ctx=new t}catch{}}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setSound(t){this.sound=t}setVibe(t){this.vibe=t}haptic(t=12){if(this.vibe)try{let e=window.Capacitor?.Plugins?.Haptics;if(e?.vibrate){e.vibrate({duration:t});return}navigator.vibrate?.(t)}catch{}}tone(t,e,{type:n="sine",vol:s=.18,slide:r=0,delay:a=0,attack:o=.005,lp:l=0}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,u=c.createOscillator(),d=c.createGain();u.type=n,u.frequency.setValueAtTime(t,h),r&&u.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),h+e),d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+o),d.gain.exponentialRampToValueAtTime(1e-4,h+e);let f=u;if(l){let g=c.createBiquadFilter();g.type="lowpass",g.frequency.value=l,u.connect(g),f=g}f.connect(d),d.connect(c.destination),u.start(h),u.stop(h+e+.05)}noise(t,{vol:e=.12,lp:n=600,delay:s=0,hp:r=0}={}){let a=this.ctx;if(!a)return;let o=Math.floor(a.sampleRate*t),l=a.createBuffer(1,o,a.sampleRate),c=l.getChannelData(0);for(let g=0;g<o;g++)c[g]=(Math.random()*2-1)*(1-g/o);let h=a.createBufferSource();h.buffer=l;let u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=n;let d=a.createGain();d.gain.value=e,h.connect(u);let f=u;if(r){let g=a.createBiquadFilter();g.type="highpass",g.frequency.value=r,u.connect(g),f=g}f.connect(d),d.connect(a.destination),h.start(a.currentTime+s)}throttled(t,e){let n=performance.now();return n-(this.last[t]||0)<e?!1:(this.last[t]=n,!0)}play(t){if(!this.sound){t==="error"&&this.haptic(40);return}if(this.unlock(),!!this.ctx)switch(t){case"click":this.tone(520,.07,{type:"triangle",vol:.12,slide:180});break;case"engine":if(!this.throttled("engine",150))return;this.noise(.45,{vol:.09,lp:380}),this.tone(70,.5,{type:"sawtooth",vol:.05,slide:60,lp:300}),this.haptic(10);break;case"depart":this.noise(.6,{vol:.08,lp:500}),this.tone(90,.7,{type:"sawtooth",vol:.05,slide:90,lp:320}),this.tone(520,.12,{type:"square",vol:.05,delay:.05}),this.tone(520,.12,{type:"square",vol:.05,delay:.2});break;case"park":this.tone(140,.16,{type:"sine",vol:.22,slide:-80}),this.noise(.1,{vol:.1,lp:900}),this.haptic(18);break;case"board":if(!this.throttled("board",55))return;this.tone(640+Math.random()*160,.09,{type:"sine",vol:.12,slide:420});break;case"step":if(!this.throttled("step",90))return;this.noise(.03,{vol:.03,lp:2500});break;case"bump":this.tone(120,.16,{type:"square",vol:.15,slide:-70,lp:600}),this.tone(55,.28,{type:"sine",vol:.22,slide:-15}),this.haptic(70);break;case"error":this.tone(150,.2,{type:"sawtooth",vol:.12,slide:-40,lp:700}),this.haptic(45);break;case"coin":this.tone(990,.08,{type:"square",vol:.07}),this.tone(1480,.18,{type:"square",vol:.07,delay:.07});break;case"vip":[523,659,784,1047,1319].forEach((e,n)=>this.tone(e,.28,{type:"triangle",vol:.11,delay:n*.06})),this.haptic(30);break;case"unlock":this.tone(300,.4,{type:"sine",vol:.14,slide:900}),[1200,1600,2e3].forEach((e,n)=>this.tone(e,.2,{type:"triangle",vol:.06,delay:.2+n*.07})),this.haptic(30);break;case"convert":case"whoosh":this.noise(.4,{vol:.07,lp:1800,hp:300}),this.tone(400,.4,{type:"sine",vol:.09,slide:600});break;case"win":[523,659,784,1047,784,1047,1319].forEach((e,n)=>this.tone(e,.3,{type:"triangle",vol:.13,delay:n*.1})),this.haptic(60);break;case"lose":[392,330,262,196].forEach((e,n)=>this.tone(e,.3,{type:"sine",vol:.13,delay:n*.14})),this.haptic(80);break;default:break}}};var rd=0,Va=class{constructor(t){this.ui=t,this.consumed=new Set,this.inited=!1,this.shown=0}get mode(){return Ne.mode}available(){return Ne.mode==="test"?!0:Ne.mode==="admob"?!!window.Capacitor?.Plugins?.AdMob:!1}async showRewarded(t){if(!this.available())return{ok:!1,reason:"unavailable"};try{if(Ne.mode==="test")return await this.ui.testAd(Ne.testDurationMs,t)?(this.shown++,{ok:!0,token:`t${++rd}-${Date.now()}`}):{ok:!1,reason:"cancelled"};let e=window.Capacitor.Plugins.AdMob;this.inited||(await e.initialize({initializeForTesting:!1}),this.inited=!0);let n=!1,s=await e.addListener("onRewardedVideoAdReward",()=>{n=!0}),r=new Promise(a=>e.addListener("onRewardedVideoAdDismissed",()=>a()).catch(()=>a()));return await e.prepareRewardVideoAd({adId:Ne.admob.rewardedUnitAndroid}),await e.showRewardVideoAd(),await r,s?.remove?.(),n?(this.shown++,{ok:!0,token:`a${++rd}-${Date.now()}`}):{ok:!1,reason:"cancelled"}}catch(e){return{ok:!1,reason:"error",error:String(e?.message||e)}}}consume(t){return!t||this.consumed.has(t)?!1:(this.consumed.add(t),!0)}};var Ga=class{constructor(t){this.G=t}get mode(){return bi.mode}available(){return bi.mode==="play"&&!!window.Capacitor?.Plugins?.NativePurchases}async buy(t){if(!this.available())return{ok:!1,reason:"unavailable"};try{let n=await window.Capacitor.Plugins.NativePurchases.purchaseProduct({productIdentifier:t.productId,productType:"inapp",quantity:1}),s=String(n?.transactionId||n?.orderId||"");if(!s)return{ok:!1,reason:"no-transaction"};let r=this.G.save.data;return r.iap||(r.iap={tx:[]}),r.iap.tx.includes(s)?{ok:!1,reason:"duplicate"}:(r.iap.tx.push(s),r.iap.tx.length>300&&r.iap.tx.shift(),this.G.addCoins(t.coins,!1),this.G.save.save(!0),{ok:!0})}catch(e){return{ok:!1,reason:"cancelled",error:String(e?.message||e)}}}};var dy={coin:'<circle cx="12" cy="12" r="9.5" fill="#ffc83a" stroke="#c98a00" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#e8a500" stroke-width="1.8"/><path d="M12 8.2v7.6M9.8 10.2h3.1a1.4 1.4 0 0 1 0 2.8h-1.8a1.4 1.4 0 0 0 0 2.8h3.1" fill="none" stroke="#b97800" stroke-width="1.5" stroke-linecap="round"/>',pause:'<rect x="6" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.6" fill="currentColor"/>',undo:'<path d="M9 8H15a5 5 0 0 1 0 10H8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4.5 8 8l4 3.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',hint:'<path d="M12 3.5a6 6 0 0 0-3.4 10.9c.6.5.9 1.1.9 1.8V17h5v-.8c0-.7.3-1.3.9-1.8A6 6 0 0 0 12 3.5z" fill="currentColor"/><rect x="9.5" y="18" width="5" height="2.4" rx="1.2" fill="currentColor"/>',recall:'<path d="M5 12h12M9 7.5 4.5 12 9 16.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><rect x="18" y="6" width="2.6" height="12" rx="1.3" fill="currentColor"/>',call:'<circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',convert:'<path d="M6 8h11l-3-3M18 16H7l3 3" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',vip:'<path d="M3 8.5l4.2 3.8L12 5l4.8 7.3L21 8.5 19.2 18.5H4.8z" fill="currentColor"/><rect x="5" y="19.5" width="14" height="2" rx="1" fill="currentColor"/>',plus:'<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>',ad:'<rect x="3" y="5" width="18" height="14" rx="3.5" fill="currentColor"/><path d="M10 9.2v5.6l5-2.8z" fill="#fff"/>',lock:'<rect x="5" y="10.5" width="14" height="10" rx="2.6" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>',star:'<path d="M12 2.8l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z" fill="currentColor" stroke="rgba(0,0,0,.18)" stroke-width="1" stroke-linejoin="round"/>',home:'<path d="M3.5 11.5 12 4l8.5 7.5V20h-5.5v-5h-6v5H3.5z" fill="currentColor"/>',shop:'<path d="M5 8h14l-1.2 11.2a1.6 1.6 0 0 1-1.6 1.4H7.8a1.6 1.6 0 0 1-1.6-1.4z" fill="currentColor"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',bus:'<rect x="3" y="5" width="18" height="12.5" rx="3" fill="currentColor"/><rect x="5" y="7.5" width="14" height="4.5" rx="1.2" fill="rgba(255,255,255,.75)"/><circle cx="7.8" cy="18.2" r="2.1" fill="#222"/><circle cx="16.2" cy="18.2" r="2.1" fill="#222"/>',list:'<rect x="4" y="4" width="16" height="17" rx="3" fill="currentColor"/><path d="M8 9.5h8M8 13h8M8 16.5h5" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/>',gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="2" fill="currentColor"/><rect x="2.5" y="6.5" width="19" height="4.2" rx="1.6" fill="currentColor"/><path d="M12 6.5v14" stroke="rgba(255,255,255,.7)" stroke-width="2.4"/><path d="M12 6.5C10 2.5 6.5 3.5 7.6 6c.5 1 2.6.6 4.4.5zm0 0c2-4 5.5-3 4.4-.5-.5 1-2.6.6-4.4.5z" fill="currentColor"/>',gear:'<path d="M12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm8.2 4.4-1.9-.5a6.7 6.7 0 0 0-.6-1.5l1-1.7-1.7-1.7-1.7 1a6.7 6.7 0 0 0-1.5-.6L12.9 5h-2.4l-.5 1.9a6.7 6.7 0 0 0-1.5.6l-1.7-1-1.7 1.7 1 1.7a6.7 6.7 0 0 0-.6 1.5l-1.9.5v2.4l1.9.5c.1.5.3 1 .6 1.5l-1 1.7 1.7 1.7 1.7-1c.5.3 1 .5 1.5.6l.5 1.9h2.4l.5-1.9c.5-.1 1-.3 1.5-.6l1.7 1 1.7-1.7-1-1.7c.3-.5.5-1 .6-1.5l1.9-.5z" fill="currentColor"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>',x:'<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>',sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',vibe:'<rect x="8" y="3.5" width="8" height="17" rx="2.2" fill="currentColor"/><path d="M4 8v8M20 8v8M1.8 10v4M22.2 10v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',restart:'<path d="M18.5 8A7.5 7.5 0 1 0 19.5 13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><path d="M19 3.5V8.5h-5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',people:'<circle cx="9" cy="8" r="3.4" fill="currentColor"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0z" fill="currentColor"/><circle cx="17" cy="9" r="2.8" fill="currentColor" opacity=".7"/><path d="M16 14.5a5.5 5.5 0 0 1 6 5.5h-5z" fill="currentColor" opacity=".7"/>',clock:'<circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 6.8V12l3.6 2.2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',finger:'<path d="M9.5 3.2c-1.3 0-2.1 1-2.1 2.2v7.3L5.8 11c-.9-.7-2.1-.5-2.6.4-.4.7-.2 1.4.4 2l4.2 4.3c.9 1.2 2.4 2.3 4.3 2.3h2.6c3 0 4.9-2.1 4.9-5.1v-3.9c0-1.1-.8-1.9-1.8-1.9-.4 0-.8.1-1.1.4-.2-.8-.9-1.3-1.7-1.3-.5 0-.9.2-1.2.5-.3-.7-.9-1.1-1.7-1.1-.4 0-.7.1-1 .3V5.4c0-1.2-.8-2.2-2.2-2.2z" fill="#fff" stroke="#233" stroke-width="1.4" stroke-linejoin="round"/>'};function st(i,t=22,e=""){return`<svg class="ico ${e}" width="${t}" height="${t}" viewBox="0 0 24 24" aria-hidden="true">${dy[i]||""}</svg>`}var Dn={style:[{id:"city",name:"\u015Eehir Otob\xFCs\xFC",price:0,desc:"Klasik yuvarlak hatl\u0131 \u015Fehir otob\xFCs\xFC."},{id:"mini",name:"Minib\xFCs",price:250,desc:"K\xFC\xE7\xFCk, tombul ve sevimli."},{id:"school",name:"Okul Servisi",price:450,desc:"Siyah \u015Feritli, dur levhal\u0131 servis."},{id:"coach",name:"Konfor Otob\xFCs\xFC",price:800,desc:"Uzun caml\u0131, g\xFCm\xFC\u015F etekli yolcu otob\xFCs\xFC."},{id:"modern",name:"Modern Otob\xFCs",price:1200,desc:"Al\xE7ak, aerodinamik, panoramik caml\u0131; LED \u0131\u015F\u0131k \u015Feritli."},{id:"luxury",name:"L\xFCks Otob\xFCs",price:2500,desc:"Metalik boya, krom detaylar, koyu caml\u0131 VIP yolcu otob\xFCs\xFC."}],palette:[{id:"vivid",name:"Canl\u0131",price:0,desc:"Varsay\u0131lan doygun renkler."},{id:"pastel",name:"Pastel",price:300,desc:"Yumu\u015Fak \u015Feker tonlar\u0131."},{id:"neon",name:"Neon",price:500,desc:"Parlak neon renkler."},{id:"retro",name:"Retro",price:350,desc:"Mat nostaljik tonlar."}],rim:[{id:"steel",name:"\xC7elik Jant",price:0,desc:"Standart \xE7elik."},{id:"gold",name:"Alt\u0131n Jant",price:200,desc:"Parlak alt\u0131n kaplama."},{id:"neon",name:"Neon Jant",price:300,desc:"Turkuaz parlayan jantlar."},{id:"chrome",name:"Krom Jant",price:450,desc:"Ayna gibi krom."}],trail:[{id:"dust",name:"Toz \u0130zi",price:0,desc:"Hafif toz bulutu."},{id:"sparkle",name:"Par\u0131lt\u0131 \u0130zi",price:250,desc:"Alt\u0131n par\u0131lt\u0131lar."},{id:"stars",name:"Y\u0131ld\u0131z \u0130zi",price:400,desc:"Renkli y\u0131ld\u0131zlar sa\xE7ar."},{id:"bubbles",name:"Baloncuk \u0130zi",price:300,desc:"Sabun k\xF6p\xFC\u011F\xFC baloncuklar\u0131."}],vipSkin:[{id:"gold",name:"Alt\u0131n VIP",price:0,desc:"Alt\u0131n detayl\u0131 klasik VIP."},{id:"platinum",name:"Platin VIP",price:600,desc:"G\xFCm\xFC\u015F-beyaz l\xFCks."},{id:"royal",name:"Kraliyet VIP",price:900,desc:"Mor g\xF6vde, alt\u0131n s\xFCsler."}]},ad=[["coins","Jeton"],["style","Otob\xFCs"],["palette","Renkler"],["rim","Jantlar"],["trail","Efekt"],["vipSkin","VIP"],["power","G\xFC\xE7"],["slot","Premium"]],Un={undo:{name:"Geri Al",desc:"Son hamleyi geri al\u0131r.",price:Jt.undo},hint:{name:"\u0130pucu",desc:"Bir sonraki do\u011Fru otob\xFCs\xFC g\xF6sterir.",price:Jt.hint},recall:{name:"Geri \xC7a\u011F\u0131r",desc:"Park eden otob\xFCs\xFC ba\u015Flang\u0131\xE7 yerine d\xF6nd\xFCr\xFCr.",price:Jt.recall},call:{name:"Otob\xFCs \xC7a\u011F\u0131r",desc:"\u0130stedi\u011Fin bir otob\xFCs\xFC, yolu kapal\u0131 olsa bile park alan\u0131na \xE7a\u011F\u0131r\u0131r.",price:Jt.call},extraSlot:{name:"Ek Park Yeri",desc:"Bu seviye i\xE7in bir park yeri a\xE7ar.",price:Jt.extraSlot},moves:{name:"Ek Hamle",desc:"Hamle s\u0131n\u0131rl\u0131 seviyelerde +4 hamle.",price:Jt.moves},time:{name:"Ek S\xFCre",desc:"S\xFCreli seviyelerde +30 saniye.",price:Jt.time}},Wa=[{coins:20},{coins:25},{coins:30,power:["undo",1]},{coins:35},{coins:40,power:["hint",1]},{coins:50},{coins:80,power:["call",1]}],vs=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`;function od(i,t){let e=new Date(i+"T00:00:00"),n=new Date(t+"T00:00:00");return Math.round((n-e)/864e5)}var zc=[{id:"levels3",text:"3 seviye tamamla",ev:"level",goal:3,reward:30},{id:"pass20",text:"20 yolcuyu otob\xFCse bindir",ev:"passenger",goal:20,reward:25},{id:"vip1",text:"Bir VIP otob\xFCs kullan",ev:"vip",goal:1,reward:35},{id:"puz5",text:"5 bulmacay\u0131 ba\u015Far\u0131yla tamamla",ev:"level",goal:5,reward:60},{id:"star3",text:"Bir seviyeyi 3 y\u0131ld\u0131zla bitir",ev:"threeStar",goal:1,reward:40},{id:"bus12",text:"12 otob\xFCs\xFC yolcu ile doldur",ev:"busFull",goal:12,reward:30},{id:"slot1",text:"Bir ek park yeri a\xE7",ev:"slot",goal:1,reward:25},{id:"pass50",text:"50 yolcuyu otob\xFCse bindir",ev:"passenger",goal:50,reward:50}],lr=[{id:"first",name:"\u0130lk Yolculuk",text:"\u0130lk seviyeyi tamamla",stat:"levels",goal:1,reward:25},{id:"lv10",name:"Yol Arkada\u015F\u0131",text:"10 seviye tamamla",stat:"levels",goal:10,reward:60},{id:"lv30",name:"\u015Eehir Ustas\u0131",text:"30 seviye tamamla",stat:"levels",goal:30,reward:150},{id:"pass100",name:"Kalabal\u0131k Ta\u015F\u0131y\u0131c\u0131",text:"100 yolcu ta\u015F\u0131",stat:"passengers",goal:100,reward:50},{id:"pass1000",name:"Metropol Hatt\u0131",text:"1000 yolcu ta\u015F\u0131",stat:"passengers",goal:1e3,reward:200},{id:"vip1",name:"K\u0131rm\u0131z\u0131 Hal\u0131",text:"Bir VIP otob\xFCs kullan",stat:"vip",goal:1,reward:40},{id:"slot1",name:"Geni\u015Fleme",text:"Bir ek park yeri a\xE7",stat:"slots",goal:1,reward:35},{id:"star10",name:"M\xFCkemmeliyet\xE7i",text:"10 seviyede 3 y\u0131ld\u0131z al",stat:"threeStars",goal:10,reward:120}];function Hc(i){let t=i.data,e=vs();if(t.quests.date===e&&t.quests.list.length)return!1;let n=Fa([...e].reduce((l,c)=>l*31+c.charCodeAt(0)>>>0,7)),s=zc.slice();n.shuffle(s);let a=[...["levels3","pass20","vip1","puz5"].filter(()=>n()<.85)];for(let l of s)a.length<4&&!a.includes(l.id)&&a.push(l.id);let o=a.slice(0,4);return t.quests={date:e,list:o.map(l=>({id:l})),progress:{},claimed:{}},!0}var _s=i=>zc.find(t=>t.id===i);var Ms=class{constructor(t){this.container=t;let e=this.renderer=new es({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=Js,e.shadowMap.enabled=!0,e.shadowMap.type=Ks,t.appendChild(e.domElement);let n=this.scene=new jn;n.environment=new Jn(e).fromScene(new os,.04).texture,n.environmentIntensity=.4,n.add(new ss(15660543,10465484,.65));let s=new _i(16774108,1.8);s.position.set(-3,6,4),s.castShadow=!0,s.shadow.mapSize.set(1024,1024);let r=s.shadow.camera;r.left=-4,r.right=4,r.top=4,r.bottom=-4,n.add(s);let a=new J(new ns(3.2,48),new Tt({color:15265531,roughness:.9}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,n.add(a),this.stand=new ae,n.add(this.stand),this.cam=new we(32,1,.1,50),this.yaw=.6,this.auto=!0,this.t=0,this.model=null,this.running=!0;let o=e.domElement,l=null;o.addEventListener("pointerdown",h=>{l={x:h.clientX,yaw:this.yaw},this.auto=!1,o.setPointerCapture(h.pointerId)}),o.addEventListener("pointermove",h=>{l&&(this.yaw=l.yaw+(h.clientX-l.x)*.012)}),o.addEventListener("pointerup",()=>{l=null,setTimeout(()=>{this.auto=!0},1800)}),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.resize();let c=()=>{this.running&&(this.t+=.016,this.auto&&(this.yaw+=.012),this.model&&(this.stand.rotation.y=this.yaw,this.model.position.y=.02+Math.sin(this.t*2)*.01),this.renderer.render(this.scene,this.cam),this.raf=requestAnimationFrame(c))};c()}resize(){let t=this.container.clientWidth||300,e=this.container.clientHeight||220;this.renderer.setSize(t,e,!1),this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.cam.position.set(0,2.4,4.6),this.cam.lookAt(0,.45,0)}show({style:t="city",vip:e=!1,vipSkin:n="gold",rim:s="steel",palette:r="vivid",colorIndex:a=0,len:o=3}){this.model&&this.stand.remove(this.model);let l=ds(r)(a),c=Aa({len:o,hex:l,style:t,vip:e,rim:s,vipSkin:n,seats:o*2,noArrow:!0});c.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let h=c.userData.dims.Lz;c.scale.setScalar(Math.min(1.5,3.1/h)),sr(c,[0,1,2,3,4,5].slice(0,o*2-1),ds(r)),this.model=c,this.stand.add(c)}dispose(){this.running=!1,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.renderer.dispose(),this.renderer.forceContextLoss?.(),this.renderer.domElement.remove()}};var ti=(i,t=document)=>t.querySelector(i),cr=i=>"#"+i.toString(16).padStart(6,"0"),fy={easy:"KOLAY",normal:"NORMAL",hard:"ZOR",super:"\xC7OK ZOR"},Vc=i=>fy[i]||"",qa=class{constructor(t){this.G=t,this.host=ti("#modalHost"),this.menuEl=ti("#menu"),this.toastEl=ti("#toasts"),this.floatEl=ti("#floaters"),this.modals=[]}toast(t,e=""){let n=document.createElement("div");for(n.className="toast "+e,n.textContent=t,this.toastEl.appendChild(n),setTimeout(()=>n.remove(),2500);this.toastEl.children.length>3;)this.toastEl.firstChild.remove()}floatText(t,e,n,s=""){let r=document.createElement("div");r.className="floater",r.style.left=e+"px",r.style.top=n+"px",r.innerHTML=(s?st(s,24):"")+t,this.floatEl.appendChild(r),setTimeout(()=>r.remove(),1300)}modal({title:t,head:e="",body:n="",foot:s="",closable:r=!0,onClose:a=null,cls:o=""}){let l=document.createElement("div");l.className="modal-bg",l.innerHTML=`<div class="sheet ${o}"><div class="sheet-head ${e}">${t}${r?`<button class="sheet-x" data-x aria-label="Kapat">${st("x",20)}</button>`:""}</div><div class="sheet-body">${n}</div>${s?`<div class="sheet-foot">${s}</div>`:""}</div>`,this.host.appendChild(l);let c={el:l,closed:!1,q:h=>l.querySelector(h),setBody:h=>{l.querySelector(".sheet-body").innerHTML=h},setFoot:h=>{let u=l.querySelector(".sheet-foot");u||(u=document.createElement("div"),u.className="sheet-foot",l.querySelector(".sheet").appendChild(u)),u.innerHTML=h},close:()=>{c.closed||(c.closed=!0,l.remove(),this.modals=this.modals.filter(h=>h!==c),c.preview?.dispose(),a?.())}};return l.addEventListener("click",h=>{h.target.closest("[data-x]")&&(this.G.sound.play("click"),c.close())}),this.modals.push(c),c}closeAll(){[...this.modals].forEach(t=>t.close())}get hasModal(){return this.modals.length>0}onAct(t,e){t.el.addEventListener("click",n=>{let s=n.target.closest("[data-act]");if(!s||s.disabled)return;let r=e[s.dataset.act];r&&(this.G.sound.play("click"),r(s.dataset,s,n))})}confirm({title:t,text:e,yes:n="Evet",no:s="Vazge\xE7",danger:r=!1}){return new Promise(a=>{let o=!1,l=h=>{o||(o=!0,c.close(),a(h))},c=this.modal({title:t,head:r?"red":"",body:`<p>${e}</p>`,foot:`<div class="row"><button class="btn gray" data-act="no">${s}</button><button class="btn ${r?"red":"green"}" data-act="yes">${n}</button></div>`,closable:!1,onClose:()=>l(!1)});this.onAct(c,{yes:()=>l(!0),no:()=>l(!1)})})}setCoins(t,e=!1){let n=t.toLocaleString("tr-TR");for(let s of[ti("#hudCoins"),ti("#menuCoins")])s&&(s.innerHTML=`${st("coin",26)}<span>${n}</span>`,e&&(s.classList.remove("pulse"),s.offsetWidth,s.classList.add("pulse")))}coinPos(){let t=(ti("#hudCoins")||ti("#menuCoins"))?.getBoundingClientRect();return t?{x:t.left+t.width/2,y:t.bottom+6}:{x:200,y:80}}testAd(t,e){return new Promise(n=>{let s=!1,r=!1,a=this.modal({title:"\xD6d\xFCll\xFC Reklam",head:"purple",closable:!0,body:`<div class="adbox"><span class="testtag">TEST REKLAMI</span><div class="bigad">\xD6rnek Reklam<small>Geli\u015Ftirme modu: ger\xE7ek reklam de\u011Fildir. Yay\u0131n s\xFCr\xFCm\xFCnde AdMob kullan\u0131l\u0131r.</small></div><div class="pb"><i></i></div><p class="adt">\xD6d\xFCl i\xE7in bekle: <b class="sec">${Math.ceil(t/1e3)}</b> sn</p></div>`,foot:`<button class="btn green" data-act="claim" disabled>${st("check",22)} \xD6d\xFCl\xFC Al</button>`,onClose:()=>{s||(s=!0,n(r))}}),o=a.q(".pb i"),l=a.q(".sec"),c=performance.now(),h=setInterval(()=>{let d=Math.min(1,(performance.now()-c)/t);o.style.width=d*100+"%",l.textContent=Math.max(0,Math.ceil((t-(performance.now()-c))/1e3)),d>=1&&(clearInterval(h),r=!0,a.q("[data-act=claim]").disabled=!1,a.q(".adt").textContent="Reklam tamamland\u0131!")},80);this.onAct(a,{claim:()=>{r&&(clearInterval(h),s=!0,a.close(),n(!0))}});let u=a.close;a.close=()=>{clearInterval(h),u()}})}renderMenu(){let t=this.G,e=t.save.data,n=t.peekLevel(e.level),s=t.canClaimDaily(),r=t.hasClaimableQuest();this.menuEl.innerHTML=`
      <div class="menu-top">
        <div class="lvl-badge">Seviye ${e.level}</div>
        <button class="coin-chip" id="menuCoins" data-act="shop"></button>
        <button class="small-btn" data-act="settings" aria-label="Ayarlar">${st("gear",26)}</button>
      </div>
      <div class="logo"><b>BUS PUZZLE</b><i>DELUXE</i><br><small>3D</small></div>
      <div class="menu-mid"><button class="play-btn" data-act="play"><b>OYNA</b><small>Seviye ${e.level} \xB7 ${Vc(n.difficulty)}</small></button></div>
      <div class="menu-nav">
        <button class="nav-btn shop" data-act="shop">${st("shop",28)}Ma\u011Faza</button>
        <button class="nav-btn coll" data-act="collection">${st("bus",28)}Koleksiyon</button>
        <button class="nav-btn quest" data-act="quests">${st("list",28)}G\xF6revler${r?'<i class="dot"></i>':""}</button>
        <button class="nav-btn gift" data-act="daily">${st("gift",28)}G\xFCnl\xFCk${s?'<i class="dot"></i>':""}</button>
        <button class="nav-btn vip" data-act="vip">${st("vip",28)}VIP</button>
      </div>`,this.setCoins(e.coins)}bindMenu(){this.menuEl.addEventListener("click",t=>{let e=t.target.closest("[data-act]");e&&(this.G.sound.unlock(),this.G.sound.play("click"),{play:()=>this.G.startLevel(this.G.save.data.level),shop:()=>this.shop(),collection:()=>this.collection(),quests:()=>this.quests(),daily:()=>this.daily(),vip:()=>this.vipPanel(),settings:()=>this.settings(!1)}[e.dataset.act]?.())})}shop(t="style"){let e=this.G,n=this.modal({title:"Ma\u011Faza",head:"gold",cls:"shopsheet",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs">${ad.map(([c,h])=>`<button class="tab ${c===t?"on":""}" data-act="tab" data-id="${c}">${h}</button>`).join("")}</div>`,o="",l=`<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><span class="chip" style="border-color:#c98a00">${st("coin",18)} ${r.coins.toLocaleString("tr-TR")}</span></div>`;if(Dn[t])o=`<div class="grid">${Dn[t].map(c=>{let h=r.owned[t].includes(c.id),u=r.equipped[t]===c.id,d="";t==="palette"?d=`<div class="swatch">${er[c.id].slice(0,6).map(g=>`<i style="background:${cr(g)}"></i>`).join("")}</div>`:t==="style"?d=`<div style="color:#2f6bff">${st("bus",52)}</div>`:t==="rim"?d=`<div class="swatch" style="width:48px;height:48px;border-radius:50%;background:radial-gradient(#222 45%,${c.id==="gold"?"#ffc83a":c.id==="neon"?"#35f0ff":c.id==="chrome"?"#f5f8ff":"#cfd6de"} 48%)"></div>`:t==="trail"?d=`<div style="font-size:34px;line-height:42px">${{dust:"\u{1F4A8}",sparkle:"\u2728",stars:"\u2B50",bubbles:"\u{1FAE7}"}[c.id]}</div>`:d=`<div style="color:${cr(ir[c.id].body)}">${st("vip",48)}</div>`;let f=u?`<button class="btn green" disabled>${st("check",16)} Kullan\u0131mda</button>`:h?`<button class="btn blue" data-act="equip" data-id="${c.id}">Kullan</button>`:`<button class="btn gold" data-act="buy" data-id="${c.id}">${st("coin",18)} ${c.price}</button>`;return`<div class="card ${u?"eq":""}">${h?"":`<span class="tag lock">${st("lock",10)}</span>`}${d}<div class="nm">${c.name}</div><div class="ds">${c.desc}</div>${f}</div>`}).join("")}</div>`;else if(t==="coins"){let c=e.iap.available();o=`<p>${c?"Jeton paketlerini Google Play ile sat\u0131n alabilirsin.":"<b>Ger\xE7ek parayla sat\u0131n alma bu s\xFCr\xFCmde kapal\u0131.</b> Google Play Faturaland\u0131rma kurulumu yap\u0131lmadan jeton sat\u0131lmaz (README)."}</p><div class="list">${bi.packs.map(h=>`<div class="item"><div>${st("coin",34)}</div><div class="grow"><b>${h.coins.toLocaleString("tr-TR")} jeton</b><small style="display:block;color:#58649a">${h.label}</small></div><button class="btn gold" data-act="iap" data-id="${h.id}" ${c?"":"disabled"}>Sat\u0131n al</button></div>`).join("")}</div>`}else if(t==="power")o=`<div class="list">${Object.entries(Un).map(([c,h])=>`<div class="item"><div style="color:#2f6bff">${st({undo:"undo",hint:"hint",recall:"recall",call:"call",extraSlot:"plus",moves:"play",time:"clock"}[c],30)}</div><div class="t"><b>${h.name} <span style="color:#c98a00">\xD7${r.powerups[c]||0}</span></b><small>${h.desc}</small></div><div style="display:flex;flex-direction:column;gap:5px"><button class="btn gold" data-act="buypower" data-id="${c}">${st("coin",16)} ${h.price}</button>${Ne.mode!=="off"?`<button class="btn green" data-act="adpower" data-id="${c}">${st("ad",16)} +1</button>`:""}</div></div>`).join("")}</div>`;else{let c=r.perm.slots;o=`<p>Kal\u0131c\u0131 park alanlar\u0131 t\xFCm seviyelerde a\xE7\u0131k kal\u0131r. Reklamla a\xE7\u0131lan alanlar ise yaln\u0131zca o seviyede ge\xE7erlidir.</p><div class="list">${Jt.permSlot.map((h,u)=>`<div class="item"><div style="color:${u<c?"#2fd06a":"#7a4dff"}">${st(u<c?"check":"plus",34)}</div><div class="t"><b>Kal\u0131c\u0131 Park Yeri ${u+1}/3</b><small>${u<c?"A\xE7\u0131ld\u0131":u===c?"S\u0131radaki a\xE7\u0131l\u0131m":"\xD6nceki alan\u0131 a\xE7"}</small></div>${u<c?"":`<button class="btn gold" data-act="permslot" ${u===c?"":"disabled"}>${st("coin",16)} ${h}</button>`}</div>`).join("")}</div>`}n.setBody(a+'<div style="height:10px"></div>'+l+o)};return s(),this.onAct(n,{tab:r=>{t=r.id,s()},buy:r=>{e.buyItem(t,r.id)&&s()},equip:r=>{e.equip(t,r.id),s()},buypower:r=>{e.buyPower(r.id)&&s()},adpower:async r=>{await e.adPower(r.id)&&s()},permslot:()=>{e.buyPermSlot()&&s()},iap:async r=>{await e.buyCoinPack(r.id)&&s()}}),n}collection(){let t=this.G,e=this.modal({title:"Otob\xFCs Koleksiyonu",head:"green",body:""}),n=()=>{let r=t.save.data;return[...Dn.style.map(a=>({cat:"style",...a,owned:r.owned.style.includes(a.id),eq:r.equipped.style===a.id,color:"#2f6bff",kind:"Otob\xFCs"})),...Dn.vipSkin.map(a=>({cat:"vipSkin",...a,owned:r.owned.vipSkin.includes(a.id),eq:r.equipped.vipSkin===a.id,color:cr(ir[a.id].body),kind:"VIP"}))]},s=()=>{let r=n(),a=r.filter(o=>o.owned).length;e.setBody(`<p style="text-align:center">A\xE7\u0131lan: <b>${a}/${r.length}</b></p><div class="grid">${r.map(o=>`<button class="card ${o.eq?"eq":""}" data-act="open" data-cat="${o.cat}" data-id="${o.id}" style="${o.owned?"":"filter:grayscale(.85)"}"><span class="tag ${o.owned?"":"lock"}">${o.owned?o.kind:st("lock",10)}</span><div style="color:${o.color}">${st(o.cat==="vipSkin"?"vip":"bus",56)}</div><div class="nm">${o.owned?o.name:"???"}</div><div class="ds">${o.owned?o.desc:`${o.price} jetonla a\xE7\u0131l\u0131r`}</div></button>`).join("")}</div>`)};s(),this.onAct(e,{open:r=>this.busDetail(r.cat,r.id,s)})}busDetail(t,e,n){let s=this.G,r=Dn[t].find(u=>u.id===e),a=this.modal({title:r.name,head:t==="vipSkin"?"gold":"blue",body:`<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center">${r.desc}</p>`,foot:""}),o=s.save.data,l=new Ms(a.q(".preview"));a.preview=l,(()=>{let u=o.equipped;l.show(t==="vipSkin"?{vip:!0,vipSkin:e,rim:u.rim,len:3}:{style:e,rim:u.rim,palette:u.palette,colorIndex:0,len:e==="coach"||e==="luxury"?4:e==="mini"?2:3})})();let h=()=>{let u=o.owned[t].includes(e),d=o.equipped[t]===e;a.setFoot(d?`<button class="btn green" disabled>${st("check",20)} Kullan\u0131mda</button>`:u?'<button class="btn blue" data-act="equip">Kullan</button>':`<button class="btn gold" data-act="buy">${st("coin",20)} ${r.price} ile a\xE7</button>`)};h(),this.onAct(a,{equip:()=>{s.equip(t,e),h(),n?.()},buy:()=>{s.buyItem(t,e)&&(h(),n?.())}})}vipPanel(){let t=this.G,e=this.modal({title:"VIP & Premium",head:"gold",body:""}),n=()=>{let s=t.save.data;e.setBody(`
        <div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div>
        <p style="margin-top:10px"><b>VIP otob\xFCs</b> alt\u0131n detayl\u0131 \xF6zel bir ara\xE7t\u0131r: <b>her renkten yolcu al\u0131r</b>, \xF6zel VIP alan\u0131na park eder ve 8 yolcu ta\u015F\u0131r. Baz\u0131 seviyelerde sahnede bulunur; ayr\u0131ca oyun i\xE7inde \u201CVIP \xC7a\u011F\u0131r\u201D ile reklam izleyerek veya jetonla \xE7a\u011F\u0131rabilirsin. Temel seviyeler VIP olmadan da tamamlanabilir.</p>
        <div class="opts">${Object.entries(ir).map(([a,o])=>{let l=s.owned.vipSkin.includes(a);return`<button class="opt ${s.equipped.vipSkin===a?"sel":""}" data-act="skin" data-id="${a}"><div class="dotc" style="background:${cr(o.body)}"></div>${o.label}<small style="color:#58649a">${l?s.equipped.vipSkin===a?"Kullan\u0131mda":"Kullan":Dn.vipSkin.find(c=>c.id===a).price+" \u{1FA99}"}</small></button>`}).join("")}</div>
        <div class="item"><div style="color:#7a4dff">${st("plus",30)}</div><div class="t"><b>Kal\u0131c\u0131 Premium park yerleri</b><small>${s.perm.slots}/3 a\xE7\u0131k \xB7 t\xFCm seviyelerde ge\xE7erli</small></div>${s.perm.slots<3?`<button class="btn gold" data-act="perm">${st("coin",16)} ${Jt.permSlot[s.perm.slots]}</button>`:`<span style="color:#2fd06a">${st("check",28)}</span>`}</div>`);let r=e.preview||(e.preview=new Ms(e.q(".preview")));r.show({vip:!0,vipSkin:s.equipped.vipSkin,rim:s.equipped.rim,len:3})};n(),this.onAct(e,{skin:s=>{if(t.save.data.owned.vipSkin.includes(s.id))t.equip("vipSkin",s.id);else if(!t.buyItem("vipSkin",s.id))return;e.preview?.dispose(),e.preview=null,n()},perm:()=>{t.buyPermSlot()&&(e.preview?.dispose(),e.preview=null,n())}})}vipPreview(t){let n=this.G.save.data,s=this.modal({title:"VIP Otob\xFCs",head:"gold",closable:!1,body:'<div class="preview"><span class="hintxt">D\xF6nd\xFCrmek i\xE7in s\xFCr\xFCkle</span></div><p style="margin-top:10px;text-align:center"><b>VIP otob\xFCs her renkten yolcu al\u0131r</b> ve \xF6zel VIP alan\u0131na park eder. Sahnedeki alt\u0131n otob\xFCs\xFC deneyebilirsin!</p>',foot:'<button class="btn green" data-act="ok">Harika!</button>',onClose:()=>t?.()}),r=new Ms(s.q(".preview"));s.preview=r,r.show({vip:!0,vipSkin:n.equipped.vipSkin,rim:n.equipped.rim,len:3}),this.onAct(s,{ok:()=>s.close()})}quests(t="daily"){let e=this.G,n=this.modal({title:"G\xF6revler",head:"",body:""}),s=()=>{let r=e.save.data,a=`<div class="tabs" style="margin:-14px -14px 10px"><button class="tab ${t==="daily"?"on":""}" data-act="tab" data-id="daily">G\xFCnl\xFCk</button><button class="tab ${t==="ach"?"on":""}" data-act="tab" data-id="ach">Ba\u015Far\u0131lar</button></div>`,o="";t==="daily"?o=`<div class="list">${r.quests.list.map(l=>{let c=_s(l.id),h=Math.min(c.goal,r.quests.progress[l.id]||0),u=h>=c.goal,d=r.quests.claimed[l.id];return`<div class="item"><div style="color:#2f6bff">${st("list",30)}</div><div class="t"><b>${c.text}</b><small>${h}/${c.goal} \xB7 \xD6d\xFCl: ${c.reward} \u{1FA99}</small><div class="bar"><i style="width:${h/c.goal*100}%"></i></div></div>${d?`<span style="color:#2fd06a">${st("check",28)}</span>`:`<button class="btn ${u?"green":"gray"}" data-act="claimq" data-id="${l.id}" ${u?"":"disabled"}>Al</button>`}</div>`}).join("")}</div><p style="text-align:center;margin-top:10px;color:#58649a;font-size:13px">G\xF6revler her g\xFCn yenilenir.</p>`:o=`<div class="list">${lr.map(l=>{let c=Math.min(l.goal,r.stats[l.stat]||0),h=c>=l.goal,u=r.ach.claimed[l.id];return`<div class="item"><div style="color:#ff9a1f">${st("star",30)}</div><div class="t"><b>${l.name}</b><small>${l.text} \xB7 ${c}/${l.goal} \xB7 ${l.reward} \u{1FA99}</small><div class="bar"><i style="width:${c/l.goal*100}%"></i></div></div>${u?`<span style="color:#2fd06a">${st("check",28)}</span>`:`<button class="btn ${h?"green":"gray"}" data-act="claima" data-id="${l.id}" ${h?"":"disabled"}>Al</button>`}</div>`}).join("")}</div>`,n.setBody(a+o)};s(),this.onAct(n,{tab:r=>{t=r.id,s()},claimq:r=>{e.claimQuest(r.id),s()},claima:r=>{e.claimAch(r.id),s()}})}daily(){let t=this.G,e=this.modal({title:"G\xFCnl\xFCk \xD6d\xFCl",head:"orange",body:""});e.el.querySelector(".sheet-head").style.background="linear-gradient(#ffb23f,#ff7a1f)";let n=()=>{let s=t.save.data,r=t.canClaimDaily(),a=t.nextDailyIndex(),o=r?a:s.daily.streak;e.setBody(`<p style="text-align:center">Her g\xFCn gir, \xF6d\xFCl\xFCn\xFC al. Bir g\xFCn\xFC ka\xE7\u0131r\u0131rsan seri s\u0131f\u0131rlan\u0131r.</p><div class="days">${Wa.map((l,c)=>`<div class="day ${c<o?"done":""} ${r&&c===a?"today":""} ${c===6?"big":""}">G\xFCn ${c+1}<b>${l.coins} \u{1FA99}</b>${l.power?`<small>+${l.power[1]} ${Un[l.power[0]].name}</small>`:""}${c<o?`<div style="color:#2fd06a">${st("check",20)}</div>`:""}</div>`).join("")}</div>`),e.setFoot(r?`<button class="btn green" data-act="claim">${st("gift",22)} \xD6d\xFCl\xFC Al</button>`:'<button class="btn gray" disabled>Bug\xFCnk\xFC \xF6d\xFCl al\u0131nd\u0131 \xB7 yar\u0131n gel!</button>')};n(),this.onAct(e,{claim:()=>{t.claimDaily(),n()}})}settings(t){let e=this.G,n=this.modal({title:"Ayarlar",head:"",body:""}),s=()=>{let r=e.save.data.settings;n.setBody(`
        <div class="switch"><span class="lab">${st("sound",24)} Ses efektleri</span><button class="tg ${r.sound?"on":""}" data-act="sound" aria-label="Ses"></button></div>
        <div class="switch"><span class="lab">${st("vibe",24)} Titre\u015Fim</span><button class="tg ${r.vibe?"on":""}" data-act="vibe" aria-label="Titre\u015Fim"></button></div>
        <div class="switch" style="display:block"><div class="lab" style="margin-bottom:8px">Grafik kalitesi</div><div class="seg">${[["low","D\xFC\u015F\xFCk"],["medium","Orta"],["high","Y\xFCksek"]].map(([a,o])=>`<button class="${r.quality===a?"on":""}" data-act="q" data-id="${a}">${o}</button>`).join("")}</div></div>
        <button class="btn blue" data-act="tut" style="margin-bottom:9px">E\u011Fitimi tekrar g\xF6ster</button>
        ${t?"":'<button class="btn red" data-act="reset">\u0130lerlemeyi s\u0131f\u0131rla</button>'}
        <p style="margin-top:12px;font-size:12px;color:#58649a;text-align:center">Reklam modu: <b>${Ne.mode==="test"?"TEST (geli\u015Ftirme)":Ne.mode==="admob"?"AdMob":"Kapal\u0131"}</b><br>T\xFCm 3D modeller ve sesler kodla \xFCretilmi\u015Ftir (\xF6zg\xFCn).</p>`)};return s(),this.onAct(n,{sound:()=>{e.save.data.settings.sound=!e.save.data.settings.sound,e.applySettings(),s()},vibe:()=>{e.save.data.settings.vibe=!e.save.data.settings.vibe,e.applySettings(),s()},q:r=>{e.save.data.settings.quality=r.id,e.applySettings(),s()},tut:()=>{e.resetTutorial(),this.toast("E\u011Fitim bir sonraki 1. ve 2. seviyede tekrar g\xF6sterilecek.","good")},reset:async()=>{await this.confirm({title:"Emin misin?",text:"T\xFCm ilerleme, jetonlar ve a\xE7\u0131lan \xF6\u011Feler silinecek.",yes:"S\u0131f\u0131rla",danger:!0})&&(e.resetProgress(),n.close())}}),n}pause(){let t=this.G,e=this.modal({title:"Duraklat\u0131ld\u0131",closable:!1,body:`<div class="list" style="gap:10px"><button class="btn green" data-act="resume">${st("play",22)} Devam Et</button><button class="btn orange" data-act="restart">${st("restart",22)} Yeniden Ba\u015Fla</button><button class="btn blue" data-act="settings">${st("gear",22)} Ayarlar</button><button class="btn gray" data-act="menu">${st("home",22)} Ana Men\xFC</button></div>`});this.onAct(e,{resume:()=>{e.close(),t.resume()},restart:()=>{e.close(),t.restart()},settings:()=>this.settings(!0),menu:()=>{e.close(),t.goMenu()}})}result({level:t,stars:e,coins:n,canDouble:s,rewardPower:r,final:a}){let o=this.G,l=this.modal({title:"SEV\u0130YE TAMAMLANDI!",head:"green",closable:!1,body:`<div class="stars">${[1,2,3].map(f=>st("star",58,f<=e?"on":"")).join("")}</div><div class="reward">${st("coin",40)}<span id="rcount">+0</span></div>${r?`<p style="text-align:center;color:#2f6bff">Bonus: +1 ${Un[r].name}!</p>`:""}<p style="text-align:center;color:#58649a">Seviye ${t} ba\u015Far\u0131yla ge\xE7ildi.</p>`,foot:`<button class="btn green" data-act="next">${st("play",22)} Sonraki Seviye</button>${s?`<button class="btn gold" data-act="double">${st("ad",22)} \xD6d\xFCl\xFC 2 katla <small>(iste\u011Fe ba\u011Fl\u0131)</small></button>`:""}<button class="btn gray" data-act="menu">${st("home",20)} Ana Men\xFC</button>`});l.el.querySelectorAll(".stars .ico").forEach((f,g)=>{f.style.animationDelay=g*.25+"s"});let c=l.q("#rcount"),h=performance.now(),u=0,d=()=>{let f=Math.min(1,(performance.now()-h)/900);u=Math.round(n*f),c.textContent="+"+u,f<1&&!l.closed?requestAnimationFrame(d):f>=1&&o.sound.play("coin")};requestAnimationFrame(d),this.onAct(l,{next:()=>{l.close(),o.nextLevel()},menu:()=>{l.close(),o.goMenu()},double:async(f,g)=>{await o.doubleReward(n)&&(g.remove(),c.textContent="+"+n*2)}})}fail({reason:t,canSlotAd:e,canUndo:n,undoCount:s,moveLimit:r,timeLimit:a}){let o=this.G,l={noslot:"Park yerlerin doldu ve \xE7\u0131kabilecek otob\xFCs kalmad\u0131!",stuck:"Hi\xE7bir otob\xFCs hareket edemiyor!",moves:"Hamle hakk\u0131n bitti!",time:"S\xFCre doldu!"}[t]||"Seviye ba\u015Far\u0131s\u0131z.",c=[];t==="moves"?c.push(`<button class="btn gold" data-act="moveAd">${st("ad",22)} Reklam izle: +4 hamle</button>`,`<button class="btn orange" data-act="moveCoin">${st("coin",22)} ${Jt.moves} jeton: +4 hamle</button>`):t==="time"?c.push(`<button class="btn gold" data-act="timeAd">${st("ad",22)} Reklam izle: +30 sn</button>`,`<button class="btn orange" data-act="timeCoin">${st("coin",22)} ${Jt.time} jeton: +30 sn</button>`):(e&&c.push(`<button class="btn gold" data-act="slotAd">${st("ad",22)} Reklam izle: ek park yeri a\xE7<small>(bu seviye)</small></button>`),n&&c.push(`<button class="btn blue" data-act="undo">${st("undo",22)} Hamleyi geri al ${s?`(${s})`:`(${Jt.undo} \u{1FA99})`}</button>`));let h=this.modal({title:"Olmad\u0131!",head:"red",closable:!1,body:`<p style="text-align:center;font-size:17px">${l}</p><p style="text-align:center;color:#58649a;font-size:13px">\u0130lerlemen reklam hatalar\u0131ndan etkilenmez. Reklam izlemek iste\u011Fe ba\u011Fl\u0131d\u0131r.</p>`,foot:`${c.join("")}<div class="row"><button class="btn green" data-act="restart">${st("restart",20)} Yeniden</button><button class="btn gray" data-act="menu">${st("home",20)} Men\xFC</button></div>`});this.onAct(h,{restart:()=>{h.close(),o.restart()},menu:()=>{h.close(),o.goMenu()},slotAd:async()=>{await o.unlockSlot("ad")&&(h.close(),o.reviveAfter())},undo:()=>{o.useUndo(!0)&&(h.close(),o.reviveAfter())},moveAd:async()=>{await o.addMoves("ad")&&(h.close(),o.reviveAfter())},moveCoin:async()=>{await o.addMoves("coin")&&(h.close(),o.reviveAfter())},timeAd:async()=>{await o.addTime("ad")&&(h.close(),o.reviveAfter())},timeCoin:async()=>{await o.addTime("coin")&&(h.close(),o.reviveAfter())}})}slotOffer(t){let e=this.G,n=e.save.data,s=n.perm.slots,r=this.modal({title:"Ek Park Yeri",head:"green",onClose:t,body:"<p>Park yerleri dolduk\xE7a otob\xFCs \xE7\u0131karamazs\u0131n. <b>Bu seviye i\xE7in</b> ge\xE7ici bir yer a\xE7abilir ya da <b>kal\u0131c\u0131 Premium</b> yer sat\u0131n alabilirsin.</p>",foot:`<button class="btn gold" data-act="ad">${st("ad",22)} Reklam izle <small>(sadece bu seviye)</small></button>
        <button class="btn orange" data-act="coin">${st("coin",22)} ${Jt.extraSlot} jeton <small>(sadece bu seviye)</small></button>
        ${n.powerups.extraSlot>0?`<button class="btn blue" data-act="item">${st("plus",22)} Envanterden kullan (${n.powerups.extraSlot})</button>`:""}
        ${s<3?`<button class="btn purple" data-act="perm">${st("vip",22)} Kal\u0131c\u0131 Premium alan \xB7 ${Jt.permSlot[s]} \u{1FA99} <small>(${s+1}/3)</small></button>`:""}`});this.onAct(r,{ad:async()=>{await e.unlockSlot("ad")&&r.close()},coin:async()=>{await e.unlockSlot("coin")&&r.close()},item:async()=>{await e.unlockSlot("item")&&r.close()},perm:()=>{e.buyPermSlot(!0)&&r.close()}})}powerBuy(t){let e=this.G,n=Un[t],s=this.modal({title:n.name,head:"blue",body:`<p>${n.desc}</p><p style="color:#c98a00;font-weight:900">Elinde kalmad\u0131.</p>`,foot:`<button class="btn gold" data-act="buy">${st("coin",22)} Sat\u0131n al \xB7 ${n.price} jeton</button>${Ne.mode!=="off"?`<button class="btn green" data-act="ad">${st("ad",22)} Reklam izle: +1 hak</button>`:""}`});this.onAct(s,{buy:()=>{e.buyPower(t)&&s.close()},ad:async()=>{await e.adPower(t)&&s.close()}})}convertDialog(t){let e=this.G,n=null,s=this.modal({title:"Otob\xFCs\xFC De\u011Fi\u015Ftir",head:"purple",body:"",foot:""}),r=()=>{let a=t.colors.map(c=>`<button class="opt ${n?.type==="color"&&n.v===c?"sel":""}" data-act="pickc" data-v="${c}"><div class="dotc" style="background:${cr(er[e.save.data.equipped.palette][c])}"></div>${ls[c].name}</button>`).join(""),o=[];t.canSeat&&o.push(`<button class="opt ${n?.type==="seat"?"sel":""}" data-act="picks"><div style="color:#2fb36a">${st("people",34)}</div>Koltuk ekle<small style="color:#58649a">${t.seats} \u2192 ${t.seats+1} koltuk</small></button>`),t.canGrow&&o.push(`<button class="opt ${n?.type==="grow"?"sel":""}" data-act="pickg"><div style="color:#7a4dff">${st("bus",34)}</div>Uzat<small style="color:#58649a">${t.seats} \u2192 ${t.seats+2} koltuk</small></button>`),s.setBody(`<p>Se\xE7ili otob\xFCs\xFCn rengini de\u011Fi\u015Ftir ya da kapasitesini art\u0131r. Daha \xE7ok koltuk, o renkten daha \xE7ok yolcuyu ta\u015F\u0131r; bulmaca bozulmaz.</p>
        ${t.colors.length?`<b>Renk (kapasite ${t.seats} sabit)</b><div class="opts" style="margin-top:6px">${a}</div>`:'<p style="color:#58649a">Kalan yolcu renkleri i\xE7in ba\u015Fka renk yok.</p>'}
        ${o.length?`<b>Kapasite</b><div class="opts" style="margin-top:6px">${o.join("")}</div>`:""}
        <p style="font-size:12px;color:#58649a">Bu seviyede kalan hak: <b>${t.left}</b></p>`);let l=n?.type==="seat"?Jt.seat:Jt.convert;s.setFoot(n?`<button class="btn gold" data-act="ad">${st("ad",22)} Reklam izle ve uygula</button><button class="btn orange" data-act="coin">${st("coin",22)} ${l} jeton ile uygula</button>`:'<button class="btn gray" disabled>Bir se\xE7enek se\xE7</button>')};r(),this.onAct(s,{pickc:a=>{n={type:"color",v:+a.v},r()},pickg:()=>{n={type:"grow"},r()},picks:()=>{n={type:"seat"},r()},ad:async()=>{await e.applyConvert(t.id,n,"ad")&&s.close()},coin:async()=>{await e.applyConvert(t.id,n,"coin")&&s.close()}})}};var ld=i=>document.querySelector(i),Xa=class{constructor(t){this.G=t,this.el=ld("#tut"),this.active=!1,this.steps=[],this.i=-1,this.cur=null,this.t=0,this.level=0}start(t){let e=this.G;this.stop(),this.level=t;let n=e.state,s=e.lvl.stages[0].solution||[];if(t===1)this.steps=[{kind:"say",pos:"mid",text:"Ho\u015F geldin! Otob\xFCsleri do\u011Fru s\u0131rayla \xE7\u0131kararak renkli yolcular\u0131 ta\u015F\u0131yacaks\u0131n.",ok:"Ba\u015Fla"},{kind:"tap",bus:0,text:"Otob\xFCs\xFC hareket ettirmek i\xE7in parma\u011F\u0131nla s\xFCr\xFCkle. \xD6nce \xE7\u0131k\u0131\u015F yolunu a\xE7!"},{kind:"wait",ms:2600,text:"Yolcular\u0131n rengini kontrol et. K\u0131rm\u0131z\u0131 yolcular k\u0131rm\u0131z\u0131 otob\xFCse biner.",focus:"queue"},{kind:"idle",text:"Harika! Yolcular otob\xFCse biniyor."},{kind:"tap",bus:1,text:"\u015Eimdi mavi otob\xFCs\xFCn yolu a\xE7\u0131k. S\xFCr\xFCkle!"},{kind:"idle",text:"Yolcular y\xFCr\xFCyerek biniyor\u2026"},{kind:"tap",bus:2,text:"Son otob\xFCs! Hepsini ta\u015F\u0131."},{kind:"end"}];else{let r=n.buses.find(a=>a.vip)?.id;this.steps=[{kind:"say",pos:"mid",text:"Bu seviyede daha fazla ara\xE7 ve s\u0131n\u0131rl\u0131 park yeri var. Yolu a\xE7\u0131k otob\xFCslerle ba\u015Fla!",ok:"Tamam"},{kind:"tap",bus:s[0],text:"Parma\u011F\u0131n g\xF6sterdi\u011Fi otob\xFCs\xFC s\xFCr\xFCkle."},{kind:"idle",text:"G\xFCzel! Yolcular biniyor."},{kind:"tap",bus:s[1],text:"S\u0131radaki otob\xFCs de haz\u0131r!"},{kind:"idle",text:""},{kind:"say",pos:"low",text:"Park yerleri s\u0131n\u0131rl\u0131d\u0131r! Hepsi dolarsa otob\xFCs \xE7\u0131karamazs\u0131n.",ok:"Anlad\u0131m",focus:"slots"},{kind:"slot",text:"Yer kalmazsa iste\u011Fe ba\u011Fl\u0131 reklam izleyerek ek park yeri a\xE7abilirsin. Zorunlu de\u011Fildir!"},{kind:"vip",bus:r},{kind:"end"}]}this.active=!0,this.i=-1,this.G.scene.tapFilter=r=>this.allow(r),this.next()}stop(){this.active=!1,this.cur=null,this.el.hidden=!0,this.el.innerHTML="",this.G.scene&&(this.G.scene.tapFilter=null,this.G.scene.clearGlows?.())}allow(t){return this.active?this.cur?.kind==="tap"?t===this.cur.bus:!1:!0}next(){this.i++;let t=this.steps[this.i];if(this.cur=t,this.t=0,this.G.scene.clearGlows(),!t||t.kind==="end"){this.finish();return}this.render(t),t.kind==="tap"&&this.G.scene.setGlow(t.bus,16769126),t.kind==="wait"&&(this.timer=setTimeout(()=>this.next(),t.ms)),t.kind==="vip"&&(t.bus!==void 0&&this.G.scene.setGlow(t.bus,16766042),this.el.hidden=!0,this.G.ui.vipPreview(()=>{this.G.ui.toast("Alt\u0131n VIP otob\xFCse dokunarak deneyebilirsin (iste\u011Fe ba\u011Fl\u0131).","good"),this.next()})),t.kind==="idle"&&this.G.scene.isBusy()===!1&&!this.G.scene.isTraveling()&&this.G.scene.idleFired&&(this.t=-1)}render(t){this.el.hidden=!1;let e=t.text?`<div class="tut-bubble ${t.pos||"top"}">${t.text}${t.kind==="say"?`<button class="btn green" data-t="ok">${t.ok||"Tamam"}</button>`:""}${t.kind==="slot"?`<div class="row"><button class="btn gray" data-t="skip">Atla</button><button class="btn gold" data-t="show">${st("ad",20)} G\xF6ster</button></div>`:""}</div>`:"";this.el.innerHTML=`${e}<div class="tut-ring" hidden><i></i></div><div class="tut-finger" hidden>${st("finger",54)}</div>`,this.ring=this.el.querySelector(".tut-ring"),this.fing=this.el.querySelector(".tut-finger"),this.el.querySelectorAll("[data-t]").forEach(n=>n.addEventListener("click",()=>{this.G.sound.play("click"),n.dataset.t==="show"?(this.G.ui.slotOffer(()=>this.next()),this.el.hidden=!0):this.next()}))}onMove(t){this.active&&this.cur?.kind==="tap"&&t===this.cur.bus&&(this.G.scene.setGlow(t,null),this.next())}onIdle(){this.active&&this.cur?.kind==="idle"&&this.next()}finish(){let t=this.G;this.stop(),t.state&&this.level===2&&t.ui.toast("E\u011Fitim tamamland\u0131! Seviyeyi bitirmek i\xE7in devam et.","good")}update(t){if(!this.active||!this.cur)return;this.t+=t;let e=this.cur,n=this.G.scene;if(e.kind==="idle"&&this.t>.4&&n.idleFired&&!n.isBusy()){this.next();return}let s=null,r=null;if(e.kind==="tap"){let o=n.busScreenPos(e.bus),l=this.G.state.buses[e.bus];if(o&&l&&l.st==="board"){let c=ke[l.dir],h=n.busVis.get(e.bus).g.position,u=n.project(h.x+c.x*2.2,.6,h.z+c.y*2.2),d=this.t%1.5/1.5,f=d<.2?0:(d-.2)/.8;s={x:o.x+(u.x-o.x)*Math.min(1,f)*.45,y:o.y+(u.y-o.y)*Math.min(1,f)*.45,a:d<.12?d/.12:f>.85?(1-f)/.15:1,ring:o}}}else if(e.kind==="slot"){let o=this.G.state.slotOpen.findIndex(l=>!l);if(o>=0){let l=n.slotScreenPos(o),c=Math.sin(this.t*6)*6;s={x:l.x,y:l.y+c,a:1,ring:l}}}else if(e.focus==="slots"){let o=n.slotScreenPos(2);s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}else if(e.focus==="queue"){let o=n.queueScreenPos();s={x:o.x,y:o.y+Math.sin(this.t*6)*6,a:1,ring:o}}let a=ld("#stage").getBoundingClientRect();s&&this.fing?(this.fing.hidden=!1,this.fing.style.opacity=s.a,this.fing.style.transform=`translate(${a.left+s.x}px,${a.top+s.y}px)`,this.ring.hidden=!1,this.ring.style.transform=`translate(${a.left+s.ring.x}px,${a.top+s.ring.y}px)`):this.fing&&(this.fing.hidden=!0,this.ring.hidden=!0)}};var he=i=>document.querySelector(i),py=[["undo","Geri Al","undo"],["hint","\u0130pucu","hint"],["recall","Geri \xC7a\u011F\u0131r","recall"],["call","\xC7a\u011F\u0131r","call"],["convert","De\u011Fi\u015Ftir","convert"],["vipcall","VIP","vip"]],cd=220,$a=class{constructor(t={}){this.save=new za,this.sound=new Ha,this.ui=new qa(this),this.ads=new Va(this.ui),this.iap=new Ga(this);let e=this.save.data;this.sound.setSound(e.settings.sound),this.sound.setVibe(e.settings.vibe),this.scene=new Oa(he("#stage"),{quality:e.settings.quality,preserve:!!t.preserve}),this.tut=new Xa(this),this.phase="menu",this.paused=!1,this.adOpen=!1,this.mode=null,this.levelCache=new Map,this.snapshots=[],this.hintTimer=null,Hc(this.save),this.save.save(),this.bindScene(),this.bindHud(),this.ui.bindMenu(),this.goMenu(!0)}peekLevel(t){return this.levelCache.has(t)||this.levelCache.set(t,sd(t)),this.levelCache.get(t)}bindScene(){let t=this.scene;t.sfx=e=>this.sound.play(e),t.onBusTap=e=>this.handleTap(e),t.onTapRejected=e=>{this.ui.toast("\xD6nce parma\u011F\u0131n g\xF6sterdi\u011Fi otob\xFCs\xFC s\xFCr\xFCkle."),t.shakeBus(e),this.sound.play("error")},t.onSlotTap=e=>this.handleSlotTap(e),t.onIdle=()=>this.onIdle(),t.onBoarded=(e,n)=>{let s=this.save.data.stats;s.passengers++,this.emit("passenger",1,!1),this.refreshProgress()},t.onBusDepart=()=>{this.save.data.stats.buses++,this.emit("busFull",1,!1)},t.onBusArrive=e=>{e.vip&&!this.vipCounted&&(this.vipCounted=!0,this.save.data.stats.vip++,this.emit("vip",1),this.ui.toast("VIP otob\xFCs yolcular\u0131 her renkten al\u0131r!","good"))}}bindHud(){he("#btnPause").innerHTML=st("pause",26),he("#btnPause").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.pause())}),he("#hudCoins").addEventListener("click",()=>{this.phase==="play"&&(this.sound.play("click"),this.ui.shop("power"))}),he("#chipMoves").addEventListener("click",()=>this.offerMoves()),he("#chipTime").addEventListener("click",()=>this.offerTime()),he("#powerBar").addEventListener("click",t=>{let e=t.target.closest("[data-p]");e&&this.onPower(e.dataset.p)}),he("#modeBanner").addEventListener("click",t=>{t.target.closest("[data-cancel]")&&this.setMode(null)})}renderPowerBar(){let t=this.save.data;he("#powerBar").innerHTML=py.map(([e,n,s])=>{let r="";if(["undo","hint","recall","call"].includes(e)){let a=t.powerups[e];r=`<span class="cnt ${a?"":"zero"}">${a||"+"}</span>`}else r=`<span class="cnt ad">${st("ad",12)}</span>`;return`<button class="pw ${e}" data-p="${e}" aria-label="${n}"><span class="btn">${st(s,28)}</span>${r}<span>${n}</span></button>`}).join("")}refreshHud(){let t=this.lvl;t&&(he("#lvlName").textContent="SEV\u0130YE "+this.levelN,he("#lvlDiff").textContent=Vc(t.difficulty)+(t.stages.length>1?` \xB7 A\u015EAMA ${this.stageIdx+1}/${t.stages.length}`:""),this.ui.setCoins(this.save.data.coins),this.renderPowerBar(),this.refreshProgress(),this.refreshChips())}refreshProgress(){if(!this.lvl||!this.state)return;let t=this.lvl.stages.reduce((n,s)=>n+s.queue.length,0),e=this.prevPassengers+this.state.qi;he("#progBar").style.width=(t?e/t*100:0)+"%",he("#progTxt").textContent=`${e}/${t} yolcu`}refreshChips(){let t=he("#chipMoves"),e=he("#chipTime");if(this.state&&this.state.moveLimit!==null){t.hidden=!1;let n=this.state.moveLimit-this.state.moves;t.innerHTML=`${st("play",14)} Hamle ${this.state.moves}/${this.state.moveLimit}`,t.classList.toggle("warn",n<=2)}else t.hidden=!0;if(this.timeLeft!==null){e.hidden=!1;let n=Math.max(0,Math.ceil(this.timeLeft));e.innerHTML=`${st("clock",14)} ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,e.classList.toggle("warn",n<=15)}else e.hidden=!0}setMode(t,e){this.mode=t;let n=he("#modeBanner");if(this.scene.clearGlows(),!t){n.hidden=!0;return}if(n.hidden=!1,n.innerHTML=`<span>${e}</span><button data-cancel>\u0130ptal</button>`,t==="recall")for(let s of this.state.buses)s.st==="parked"&&s.arrived&&this.scene.setGlow(s.id,8257472);if(t==="convert")for(let s of this.state.buses)s.st==="board"&&!s.vip&&this.scene.setGlow(s.id,13215743)}goMenu(t=!1){this.tut.stop(),this.ui.closeAll(),this.setMode(null),this.phase="menu",this.paused=!1,he("#hud").hidden=!0,he("#app").classList.add("menu-mode"),he("#menu").hidden=!1,this.cosApply();let e=this.save.data.level,n=this.peekLevel(e);this.state=rr(n.stages[0],{slotsOpen:Math.min(7,(n.slotsBase||4)+this.save.data.perm.slots)}),this.scene.loadStage(this.state),this.lvl=null,this.ui.renderMenu(),t&&setTimeout(()=>{this.phase==="menu"&&this.canClaimDaily()&&!this.ui.hasModal&&this.ui.daily()},900)}cosApply(){this.scene.setCosmetics(this.save.data.equipped)}startLevel(t){this.ui.closeAll(),this.sound.unlock(),this.setMode(null);let e=this.save.data;this.levelN=t,this.lvl=this.peekLevel(t),this.stageIdx=0,this.assists=0,this.prevPassengers=0,this.vipCounted=!1,this.paused=!1,e.temp.level!==t&&(e.temp={level:t,slots:[],conv:0,vipCalls:0}),this.extraMoves=0,this.timeLeft=this.lvl.timeLimit??null,this.cosApply(),this.beginStage(0,null),this.phase="play",he("#menu").hidden=!0,he("#hud").hidden=!1,he("#app").classList.remove("menu-mode"),this.refreshHud();let n=e.tutorial.enabled;t===1&&n&&!e.tutorial.l1?this.tut.start(1):t===2&&n&&!e.tutorial.l2?this.tut.start(2):this.tut.stop(),this.save.save()}beginStage(t,e){this.finalPending=!1,this.pendingTaps=[];let n=this.lvl,s=n.stages[t],r=this.save.data,a=s.slots??n.slotsBase??4,o=rr(s,{slotsOpen:Math.min(7,a+r.perm.slots),moveLimit:n.moveLimit?n.moveLimit+this.extraMoves:null});e&&e.forEach((l,c)=>{l&&(o.slotOpen[c]=!0)});for(let l of r.temp.slots)o.slotOpen[l]=!0;this.state=o,this.snapshots=[],this.stageIdx=t,this.scene.forceDepart=!1,this.scene.loadStage(o,r.temp.slots),this.refreshHud()}restart(){this.ui.closeAll();let t=this.save.data;t.temp={level:this.levelN,slots:[],conv:0,vipCalls:0},this.startLevel(this.levelN)}nextLevel(){this.startLevel(this.levelN+1)}pause(){this.paused=!0,this.ui.pause()}resume(){this.paused=!1}frame(t){this.scene.inputLocked=this.phase!=="play"||this.ui.hasModal||this.paused,this.scene.update(this.paused?0:t),this.phase==="play"&&!this.paused&&!this.adOpen&&!this.ui.hasModal&&this.timeLeft!==null&&(this.timeLeft-=t,this.refreshChipsThrottled(t),this.timeLeft<=0&&(this.timeLeft=0,this.refreshChips(),this.fail("time"))),this.phase==="play"&&this.tut.update(t),this.pendingTaps?.length&&this.phase==="play"&&!this.paused&&!this.mode&&!this.ui.hasModal&&!this.scene.isBusy()?this.handleTap(this.pendingTaps.shift()):this.pendingTaps?.length&&this.phase!=="play"&&(this.pendingTaps.length=0)}refreshChipsThrottled(t){this._ct=(this._ct||0)+t,this._ct>.25&&(this._ct=0,this.refreshChips())}handleTap(t){if(this.phase!=="play"||this.paused)return;if(this.mode==="convert"){this.openConvert(t);return}if(this.mode==="call"){this.openCall(t);return}if(this.mode==="recall")return;if(this.scene.isTraveling()){this.queueTap(t);return}let e=this.state,n=xn(e),s=Ca(e,t);if(this.scene.clearGlows(),s.ok)this.snapshots.push(n),this.snapshots.length>40&&this.snapshots.shift(),this.scene.startDriveToSlot(t,s.slot),this.tut.onMove(t),this.refreshChips(),e.buses[t].vip&&this.ui.toast("VIP otob\xFCs yola \xE7\u0131kt\u0131!","good");else if(s.reason==="blocked"){this.scene.bump(t,s.blockers);for(let r of s.blockers)this.scene.flashBus(r,16731469,.7);this.refreshChips(),e.moveLimit!==null&&(this.scene.idleFired=!1)}else if(s.reason==="noslot"){if(this.scene.isBusy()){this.queueTap(t);return}this.sound.play("error"),this.ui.toast("Park yerleri dolu! + alanlardan ek yer a\xE7abilirsin.","bad"),this.scene.shakeBus(t)}else s.reason==="vipfull"?(this.sound.play("error"),this.ui.toast("VIP alan\u0131 dolu.","bad")):s.reason==="limit"&&(this.scene.idleFired=!1)}queueTap(t){let e=this.state.buses[t];this.pendingTaps||(this.pendingTaps=[]),!(!e||e.st!=="board"||this.pendingTaps.includes(t)||this.pendingTaps.length>=3)&&(this.pendingTaps.push(t),this.scene.flashBus(t,8118891,.35))}handleSlotTap(t){if(this.phase!=="play"||this.paused)return;let e=this.state;if(this.mode==="recall"){let n=t==="V"?e.vipSlot:e.slots[t];if(n==null){this.ui.toast("Bu alanda otob\xFCs yok.");return}this.doRecall(n);return}if(t==="V"){this.ui.toast("VIP alan\u0131: alt\u0131n VIP otob\xFCsler buraya park eder.");return}if(!e.slotOpen[t]){if(this.tut.active&&this.tut.cur?.kind!=="slot")return;this.sound.play("click"),this.ui.slotOffer()}}onIdle(){if(this.phase==="transition"){this.state.buses.some(e=>e.st==="parked")||(this.finalPending?(this.finalPending=!1,this.levelComplete()):this.nextStage());return}if(this.phase!=="play")return;this.tut.onIdle();let t=La(this.state);t.status==="won"?this.stageDone():t.status==="lost"&&this.fail(t.reason)}stageDone(){this.stageIdx+1<this.lvl.stages.length?(this.phase="transition",this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop(),this.sound.play("coin"),this.ui.toast("A\u015Fama tamamland\u0131!","good"),this.state.buses.some(t=>t.st==="parked")||this.nextStage()):this.state.buses.some(t=>t.st==="parked")?(this.phase="transition",this.finalPending=!0,this.scene.forceDepart=!0,this.scene.idleFired=!1,this.tut.stop()):this.levelComplete()}nextStage(){let t=this.state.slotOpen.slice();this.prevPassengers+=this.state.queue.length;let e=he("#stageBanner");e.hidden=!1,e.textContent=`A\u015EAMA ${this.stageIdx+2}/${this.lvl.stages.length}`,setTimeout(()=>{e.hidden=!0},1800),this.beginStage(this.stageIdx+1,t),this.phase="play",this.scene.idleFired=!0}fail(t){if(this.phase!=="play")return;this.pendingTaps=[],this.phase="ended",this.tut.stop(),this.setMode(null),this.sound.play("lose");let e=this.state,n=this.save.data,s=e.slotOpen.some(r=>!r)&&Ne.mode!=="off";setTimeout(()=>{this.phase==="ended"&&this.ui.fail({reason:t,canSlotAd:s,canUndo:this.snapshots.length>0,undoCount:n.powerups.undo})},600)}reviveAfter(){this.phase="play",this.scene.idleFired=!1,this.refreshHud()}levelComplete(){this.phase="ended",this.tut.stop(),this.setMode(null);let t=this.save.data,e=this.levelN;this.scene.celebrate();let n=this.assists===0?3:this.assists<=2?2:1,s=15+n*5+Math.min(15,Math.floor(e/3));t.completed[e]=Math.max(t.completed[e]||0,n),t.level=Math.max(t.level,e+1),t.stats.levels++,n===3&&t.stats.threeStars++;let r=null;e%5===0&&(r=["undo","hint","recall","call","extraSlot"][e/5%5],t.powerups[r]++),e===1&&(t.tutorial.l1=!0),e===2&&(t.tutorial.l2=!0),this.emit("level",1,!1),n===3&&this.emit("threeStar",1,!1),this.addCoins(s,!1),this.save.save(!0),setTimeout(()=>this.ui.result({level:e,stars:n,coins:s,canDouble:Ne.mode!=="off",rewardPower:r}),1800)}addCoins(t,e=!0){let n=this.save.data;if(n.coins+=t,n.stats.coinsEarned+=t,this.ui.setCoins(n.coins,!0),this.save.save(),e){let s=this.ui.coinPos();this.ui.floatText("+"+t,s.x,s.y+20,"coin"),this.sound.play("coin")}}spendCoins(t){let e=this.save.data;return e.coins<t?(this.ui.toast("Yeterli jetonun yok!","bad"),this.sound.play("error"),!1):(e.coins-=t,this.ui.setCoins(e.coins,!0),this.save.save(),!0)}buyItem(t,e){let n=Dn[t].find(r=>r.id===e),s=this.save.data;return!n||s.owned[t].includes(e)||!this.spendCoins(n.price)?!1:(s.owned[t].push(e),s.equipped[t]=e,this.cosApply(),this.save.save(!0),this.ui.toast(`${n.name} sat\u0131n al\u0131nd\u0131 ve kullan\u0131ma al\u0131nd\u0131!`,"good"),this.sound.play("unlock"),!0)}equip(t,e){let n=this.save.data;n.owned[t].includes(e)&&(n.equipped[t]=e,this.cosApply(),this.save.save(!0),this.phase==="menu"&&this.scene.loadStage(this.state))}buyPower(t){let e=Un[t];return this.spendCoins(e.price)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${e.name}`,"good"),!0):!1}async adPower(t){return await this.requestAd("power-"+t)?(this.save.data.powerups[t]++,this.save.save(),this.renderPowerBar(),this.ui.toast(`+1 ${Un[t].name}`,"good"),!0):!1}buyPermSlot(t=!1){let e=this.save.data,n=e.perm.slots;if(n>=3||!this.spendCoins(Jt.permSlot[n]))return!1;if(e.perm.slots++,e.stats.slots++,this.emit("slot",1,!1),this.phase==="play"&&this.state){let s=Ac(this.state);s>=0&&this.scene.unlockSlotFx(s,!1)}return this.save.save(!0),this.ui.toast("Kal\u0131c\u0131 Premium park yeri a\xE7\u0131ld\u0131!","good"),!0}async requestAd(t){if(!this.ads.available())return this.ui.toast("Reklam servisi haz\u0131r de\u011Fil. \xD6d\xFCl verilmedi.","bad"),!1;this.adOpen=!0;let e=await this.ads.showRewarded(t);return this.adOpen=!1,e.ok?this.ads.consume(e.token)?(this.save.data.stats.ads++,this.save.save(),!0):!1:(this.ui.toast(e.reason==="cancelled"?"Reklam tamamlanmad\u0131, \xF6d\xFCl verilmedi.":"Reklam y\xFCklenemedi. Daha sonra tekrar dene.","bad"),!1)}async buyCoinPack(t){let e=bi.packs.find(s=>s.id===t);if(!e)return!1;let n=await this.iap.buy(e);return n.ok?(this.ui.setCoins(this.save.data.coins,!0),this.sound.play("coin"),this.ui.toast(`+${e.coins} jeton!`,"good"),!0):(this.ui.toast(n.reason==="unavailable"?"Ger\xE7ek parayla sat\u0131n alma bu s\xFCr\xFCmde kapal\u0131.":"Sat\u0131n alma tamamlanmad\u0131, jeton verilmedi.","bad"),!1)}async doubleReward(t){return await this.requestAd("double-reward")?(this.addCoins(t,!1),this.sound.play("coin"),!0):!1}canClaimDaily(){return this.save.data.daily.lastClaim!==vs()}nextDailyIndex(){let t=this.save.data.daily;return t.lastClaim&&od(t.lastClaim,vs())===1?t.streak%7:0}claimDaily(){if(!this.canClaimDaily())return;let t=this.save.data,e=this.nextDailyIndex(),n=Wa[e];t.daily.streak=e+1,t.daily.lastClaim=vs(),this.addCoins(n.coins,!1),n.power&&(t.powerups[n.power[0]]+=n.power[1]),this.save.save(!0),this.sound.play("coin"),this.ui.toast(`+${n.coins} jeton${n.power?` ve +${n.power[1]} ${Un[n.power[0]].name}`:""}!`,"good"),this.ui.renderMenu()}emit(t,e=1,n=!0){let s=this.save.data.quests;Hc(this.save);for(let r of s.list){let a=_s(r.id);a&&a.ev===t&&(s.progress[r.id]=(s.progress[r.id]||0)+e)}n&&this.save.save()}hasClaimableQuest(){let t=this.save.data;return t.quests.list.some(e=>{let n=_s(e.id);return(t.quests.progress[e.id]||0)>=n.goal&&!t.quests.claimed[e.id]})||lr.some(e=>(t.stats[e.stat]||0)>=e.goal&&!t.ach.claimed[e.id])}claimQuest(t){let e=this.save.data,n=_s(t);!n||e.quests.claimed[t]||(e.quests.progress[t]||0)<n.goal||(e.quests.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}claimAch(t){let e=this.save.data,n=lr.find(s=>s.id===t);!n||e.ach.claimed[t]||(e.stats[n.stat]||0)<n.goal||(e.ach.claimed[t]=!0,this.addCoins(n.reward,!1),this.sound.play("coin"),this.save.save(!0),this.ui.renderMenu())}applySettings(){let t=this.save.data.settings;this.sound.setSound(t.sound),this.sound.setVibe(t.vibe),this.scene.setQuality(t.quality),this.save.save(!0)}resetTutorial(){let t=this.save.data.tutorial;t.l1=!1,t.l2=!1,t.enabled=!0,this.save.save(!0)}resetProgress(){this.save.reset(),this.sound.setSound(!0),this.goMenu(),this.ui.toast("\u0130lerleme s\u0131f\u0131rland\u0131.")}onPower(t){if(this.phase!=="play"||this.paused)return;if(this.tut.active){this.ui.toast("\xD6nce e\u011Fitimi tamamla.");return}this.sound.play("click"),this.mode&&this.setMode(null);let e=this.save.data;if(["undo","hint","recall"].includes(t)&&e.powerups[t]<=0){this.ui.powerBuy(t);return}if(this.scene.isBusy()&&t!=="hint"){this.ui.toast("Animasyon bitsin, sonra dene.");return}switch(t){case"undo":this.doUndo()&&this.usePower("undo");break;case"hint":this.doHint()&&this.usePower("hint");break;case"recall":this.setMode("recall","Geri \xE7a\u011F\u0131rmak istedi\u011Fin park eden otob\xFCse dokun");break;case"call":this.setMode("call","\xC7a\u011F\u0131raca\u011F\u0131n otob\xFCse dokun"),this.suggestCall();break;case"convert":this.startConvertMode();break;case"vipcall":this.offerVipCall();break;default:break}}usePower(t){let e=this.save.data;e.powerups[t]>0&&e.powerups[t]--,this.assists++,this.save.save(),this.renderPowerBar()}doUndo(){if(!this.snapshots.length)return this.ui.toast("Geri al\u0131nacak hamle yok."),!1;let t=this.snapshots.pop(),e=this.save.data;for(let n of e.temp.slots)t.slotOpen[n]=!0;return this.state=t,this.scene.loadStage(t,e.temp.slots),this.refreshHud(),this.sound.play("whoosh"),this.scene.fx.ring(0,-5.2,8246271,.5,5,.8),!0}useUndo(t){let e=this.save.data;return this.snapshots.length?e.powerups.undo>0?this.doUndo()?(e.powerups.undo--,this.assists++,this.save.save(),!0):!1:this.spendCoins(Jt.undo)?(this.assists++,this.doUndo()):!1:(this.ui.toast("Geri al\u0131nacak hamle yok."),!1)}doHint(){let t=Fc(this.state,{useVip:!1,maxNodes:25e4});return!t.solved||!t.order.length?(this.ui.toast("Bu durumda \xE7\xF6z\xFCm yok. Geri al ya da yeniden ba\u015Fla!","bad"),!1):(this.scene.clearGlows(),this.scene.setGlow(t.order[0],16769126),this.sound.play("unlock"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.scene.clearGlows(),5e3),this.ui.toast("Parlayan otob\xFCs\xFC \xE7\u0131kar!","good"),!0)}doRecall(t){let e=xn(this.state),n=Hu(this.state,t);if(!n.ok){this.ui.toast(n.reason==="occupied"?"Ba\u015Flang\u0131\xE7 yeri dolu, geri \xE7a\u011Fr\u0131lamaz.":"Bu otob\xFCs geri \xE7a\u011Fr\u0131lamaz.","bad"),this.sound.play("error");return}this.snapshots.push(e),this.scene.animateRecall(t),this.setMode(null),this.usePower("recall"),this.scene.idleFired=!1}suggestCall(){let t=this.state,e=Pa(t);if(e===null)return;let n=null,s=1e9;for(let r of t.buses){if(r.st!=="board"||r.vip||r.color!==e)continue;let a=ms(t,r).length;a<s&&(s=a,n=r)}n&&this.scene.setGlow(n.id,16769126)}openCall(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return;if(n.vip){this.ui.toast("VIP otob\xFCsler \xE7a\u011Fr\u0131lamaz; VIP i\xE7in VIP \xC7a\u011F\u0131r'\u0131 kullan.");return}if(Ei(e,n)===-1){this.ui.toast("Park yeri yok! \xD6nce yer a\xE7.","bad"),this.sound.play("error");return}if(this.scene.isBusy()){this.ui.toast("Animasyon bitsin, sonra dene.");return}let r=ls[n.color]?.name||"",a=this.ui.modal({title:"Otob\xFCs \xC7a\u011F\u0131r",head:"purple",onClose:()=>{this.mode==="call"&&this.setMode(null)},body:`<p>Se\xE7ti\u011Fin <b>${r}</b> otob\xFCs (${n.seats} koltuk), \xF6n\xFCndeki engellere tak\u0131lmadan park alan\u0131na gelir.</p>`,foot:`${s.powerups.call>0?`<button class="btn blue" data-act="item">${st("call",22)} Envanterden kullan (${s.powerups.call})</button>`:""}${Ne.mode!=="off"?`<button class="btn gold" data-act="ad">${st("ad",22)} Reklam izle</button>`:""}<button class="btn orange" data-act="coin">${st("coin",22)} ${Jt.call} jeton</button>`});this.ui.onAct(a,{item:async()=>{await this.callPick(t,"item")&&a.close()},ad:async()=>{await this.callPick(t,"ad")&&a.close()},coin:async()=>{await this.callPick(t,"coin")&&a.close()}})}async callPick(t,e){let n=this.state,s=this.save.data,r=n.buses[t];if(!r||r.st!=="board"||r.vip||Ei(n,r)===-1)return this.ui.toast("Bu otob\xFCs \u015Fu an \xE7a\u011Fr\u0131lamaz.","bad"),!1;if(e==="item"){if(s.powerups.call<=0)return!1}else if(e==="ad"){if(!await this.requestAd("call-pick"))return!1}else if(!this.spendCoins(Jt.call))return!1;let a=xn(n),o=Gu(n,t);return o.ok?(e==="item"&&s.powerups.call--,this.snapshots.push(a),this.setMode(null),this.scene.startCraneToSlot(o.id,o.slot),this.assists++,this.scene.idleFired=!1,this.refreshChips(),this.renderPowerBar(),this.save.save(),!0):(this.ui.toast("\xC7a\u011Fr\u0131lamad\u0131.","bad"),!1)}doCall(){let t=xn(this.state),e=Vu(this.state);return e.ok?(this.snapshots.push(t),this.scene.startCraneToSlot(e.id,e.slot),this.refreshChips(),!0):(this.ui.toast(e.reason==="noslot"?"Park yeri yok!":"S\u0131radaki yolcunun renginde otob\xFCs kalmad\u0131.","bad"),this.sound.play("error"),!1)}startConvertMode(){if(this.save.data.temp.conv>=vc){this.ui.toast("Bu seviyede d\xF6n\xFC\u015Ft\xFCrme hakk\u0131n bitti.","bad");return}this.setMode("convert","D\xF6n\xFC\u015Ft\xFCrmek istedi\u011Fin otob\xFCse dokun")}openConvert(t){let e=this.state,n=e.buses[t],s=this.save.data;if(!n||n.st!=="board")return;if(n.vip){this.ui.toast("VIP otob\xFCsler d\xF6n\xFC\u015Ft\xFCr\xFClemez.");return}let r=[...new Set(e.queue.slice(e.qi))].filter(a=>a!==n.color);this.ui.convertDialog({id:t,colors:r,seats:n.seats,canGrow:!!Cc(e,t),canSeat:Ic(e,t),maxSeats:n.len*2,left:vc-s.temp.conv})}async applyConvert(t,e,n){if(!e)return!1;let s=this.state,r=this.save.data,a=xn(s);e.type==="color"?Rc(a,t,e.v):e.type==="seat"?Lc(a,t):Pc(a,t);let o=Fc(a,{useVip:!1,maxNodes:15e4});if(!o.solved&&!o.aborted)return this.ui.toast("Bu d\xF6n\xFC\u015F\xFCm seviyeyi \xE7\xF6z\xFCms\xFCz yapar, ba\u015Fka se\xE7enek dene.","bad"),!1;if(n==="ad"){if(!await this.requestAd("convert"))return!1}else if(!this.spendCoins(e.type==="seat"?Jt.seat:Jt.convert))return!1;let l=xn(s);return(e.type==="color"?Rc(s,t,e.v):e.type==="seat"?Lc(s,t):Pc(s,t)).ok?(this.snapshots.push(l),e.type==="color"?this.scene.convertFx(t,"color"):this.scene.rebuildBus(t),r.temp.conv++,this.assists++,this.save.save(),this.setMode(null),this.ui.toast(e.type==="seat"?"Koltuk eklendi!":"Otob\xFCs d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC!","good"),!0):(this.ui.toast("D\xF6n\xFC\u015Ft\xFCrme uygulanamad\u0131.","bad"),!1)}offerVipCall(){let t=this.state,e=this.save.data;if(t.vipSlot!==null){this.ui.toast("VIP alan\u0131 zaten dolu.");return}if(e.temp.vipCalls>=2){this.ui.toast("Bu seviyede VIP \xE7a\u011F\u0131rma hakk\u0131n bitti.");return}let n=this.ui.modal({title:"VIP \xC7a\u011F\u0131r",head:"gold",body:"<p>Alt\u0131n VIP otob\xFCs gelip VIP alan\u0131na park eder ve <b>her renkten yolcu</b> al\u0131r (8 koltuk). Bu seviye i\xE7in ge\xE7erlidir.</p>",foot:`<button class="btn gold" data-act="ad">${st("ad",22)} Reklam izle</button><button class="btn orange" data-act="coin">${st("coin",22)} ${cd} jeton</button>`});this.ui.onAct(n,{ad:async()=>{await this.callVip("ad")&&n.close()},coin:async()=>{await this.callVip("coin")&&n.close()}})}async callVip(t){let e=this.state;if(e.vipSlot!==null)return!1;if(t==="ad"){if(!await this.requestAd("vip-call"))return!1}else if(!this.spendCoins(cd))return!1;let n=xn(e),s=Wu(e);return s.ok?(this.snapshots.push(n),this.scene.dropVip(e.buses[s.id]),this.save.data.temp.vipCalls++,this.assists++,this.save.save(),!0):!1}async unlockSlot(t){let e=this.state,n=this.save.data;if(!e.slotOpen.some(r=>!r))return this.ui.toast("T\xFCm park yerleri zaten a\xE7\u0131k."),!1;if(t==="ad"){if(!await this.requestAd("extra-slot"))return!1}else if(t==="coin"){if(!this.spendCoins(Jt.extraSlot))return!1}else if(t==="item"){if(n.powerups.extraSlot<=0)return!1;n.powerups.extraSlot--}let s=Ac(e);return s<0?!1:(n.temp.slots.push(s),n.stats.slots++,this.emit("slot",1,!1),this.assists++,this.scene.unlockSlotFx(s,!0),this.save.save(!0),this.ui.toast("Ek park yeri a\xE7\u0131ld\u0131! (sadece bu seviye)","good"),this.renderPowerBar(),!0)}async addMoves(t){if(t==="ad"){if(!await this.requestAd("extra-moves"))return!1}else if(!this.spendCoins(Jt.moves))return!1;return this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),!0}async addTime(t){if(t==="ad"){if(!await this.requestAd("extra-time"))return!1}else if(!this.spendCoins(Jt.time))return!1;return this.timeLeft=(this.timeLeft||0)+30,this.assists++,this.refreshChips(),!0}offerMoves(){if(this.phase!=="play"||this.state.moveLimit===null)return;let t=this.save.data;t.powerups.moves>0?(t.powerups.moves--,this.extraMoves+=4,this.state.moveLimit+=4,this.assists++,this.refreshChips(),this.ui.toast("+4 hamle","good"),this.save.save()):this.ui.toast(`Hamle bitince reklam veya ${Jt.moves} jetonla +4 hamle alabilirsin.`)}offerTime(){if(this.phase!=="play"||this.timeLeft===null)return;let t=this.save.data;t.powerups.time>0?(t.powerups.time--,this.timeLeft+=30,this.assists++,this.refreshChips(),this.ui.toast("+30 saniye","good"),this.save.save()):this.ui.toast(`S\xFCre bitince reklam veya ${Jt.time} jetonla +30 sn alabilirsin.`)}};var dd=new URLSearchParams(location.search),Oe=new $a({preserve:dd.has("shot")});window.__game=Oe;var hd=performance.now();function fd(i){let t=Math.min(.1,(i-hd)/1e3);hd=i;try{Oe.frame(t)}catch(e){console.error("frame error",e)}requestAnimationFrame(fd)}requestAnimationFrame(fd);setTimeout(()=>document.getElementById("loading")?.classList.add("gone"),400);document.addEventListener("visibilitychange",()=>{document.hidden&&Oe.phase==="play"&&!Oe.paused&&!Oe.ui.hasModal&&Oe.pause()});document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("backbutton",()=>{if(Oe.ui.hasModal){Oe.ui.modals[Oe.ui.modals.length-1].close();return}Oe.phase==="play"?Oe.pause():Oe.phase!=="menu"&&Oe.goMenu()});var ud=dd.get("start");ud&&setTimeout(()=>{let i=Oe.save.data.tutorial;i.l1=i.l2=!0,Oe.ui.closeAll(),Oe.startLevel(+ud)},700);
