import{d as N,y as ht,v as G,t as I,ac as ut,D as ft,n as x,ad as bt,aA as St,o as pt,b as wt,l as gt,A as U,c as At,k as vt,m as kt,q as Et,s as Lt,e as R,a6 as Z}from"./modules/vue-CHtwQYR-.js";import{g as _t}from"./modules/file-saver-LUhfcczZ.js";import{v as Ct,a as Bt,af as Mt,C as Ft,ag as Tt,ah as Ut,ai as P}from"./index-BvL623Bj.js";import{u as mt,p as Ot,f as Dt}from"./slidev/context-CIhNwhCX.js";import{a as Ht}from"./default-CsXbgpRA.js";import"./modules/shiki-uehqFT5q.js";const Gt=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function Rt(e){if(e!=null&&e.__resolved)return e;const n={...Gt,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const M=-1,C=1,_=0;function L(e,n){return[e,n]}function O(e,n,r,s=!0,t){const i=Rt(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const h=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[L(_,e)]:[];const p=s;let o=V(e,n);const a=e.substring(0,o);e=e.substring(o),n=n.substring(o),o=q(e,n);const u=e.substring(e.length-o);e=e.substring(0,e.length-o),n=n.substring(0,n.length-o);const l=qt(e,n,i,p,h);return a&&l.unshift(L(_,a)),u&&l.push(L(_,u)),W(l),l}function qt(e,n,r,s,t){let i;if(!e)return[L(C,n)];if(!n)return[L(M,e)];const h=e.length>n.length?e:n,p=e.length>n.length?n:e,o=h.indexOf(p);if(o!==-1)return i=[L(C,h.substring(0,o)),L(_,p),L(C,h.substring(o+p.length))],e.length>n.length&&(i[0][0]=i[2][0]=M),i;if(p.length===1)return[L(M,e),L(C,n)];const a=xt(e,n,r);if(a){const u=a[0],l=a[1],f=a[2],c=a[3],m=a[4],k=O(u,f,r,s,t),E=O(l,c,r,s,t);return k.concat([L(_,m)],E)}return s&&e.length>100&&n.length>100?Kt(e,n,r,t):jt(e,n,r,t)}function Kt(e,n,r,s){const t=zt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,h=O(e,n,r,!1,s);It(h,i),Nt(h),h.push(L(_,""));let p=0,o=0,a=0,u="",l="";for(;p<h.length;){switch(h[p][0]){case C:a++,l+=h[p][1];break;case M:o++,u+=h[p][1];break;case _:if(o>=1&&a>=1){h.splice(p-o-a,o+a),p=p-o-a;const f=O(u,l,r,!1,s);for(let c=f.length-1;c>=0;c--)h.splice(p,0,f[c]);p=p+f.length}a=0,o=0,u="",l="";break}p++}return h.pop(),h}function jt(e,n,r,s){const t=e.length,i=n.length,h=Math.ceil((t+i)/2),p=h,o=2*h,a=new Array(o),u=new Array(o);for(let w=0;w<o;w++)a[w]=-1,u[w]=-1;a[p+1]=0,u[p+1]=0;const l=t-i,f=l%2!==0;let c=0,m=0,k=0,E=0;for(let w=0;w<h&&!(new Date().getTime()>s);w++){for(let A=-w+c;A<=w-m;A+=2){const v=p+A;let y;A===-w||A!==w&&a[v-1]<a[v+1]?y=a[v+1]:y=a[v-1]+1;let b=y-A;for(;y<t&&b<i&&e.charAt(y)===n.charAt(b);)y++,b++;if(a[v]=y,y>t)m+=2;else if(b>i)c+=2;else if(f){const g=p+l-A;if(g>=0&&g<o&&u[g]!==-1){const d=t-u[g];if(y>=d)return J(e,n,r,y,b,s)}}}for(let A=-w+k;A<=w-E;A+=2){const v=p+A;let y;A===-w||A!==w&&u[v-1]<u[v+1]?y=u[v+1]:y=u[v-1]+1;let b=y-A;for(;y<t&&b<i&&e.charAt(t-y-1)===n.charAt(i-b-1);)y++,b++;if(u[v]=y,y>t)E+=2;else if(b>i)k+=2;else if(!f){const g=p+l-A;if(g>=0&&g<o&&a[g]!==-1){const d=a[g],S=p+d-g;if(y=t-y,d>=y)return J(e,n,r,d,S,s)}}}}return[L(M,e),L(C,n)]}function J(e,n,r,s,t,i){const h=e.substring(0,s),p=n.substring(0,t),o=e.substring(s),a=n.substring(t),u=O(h,p,r,!1,i),l=O(o,a,r,!1,i);return u.concat(l)}function zt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(o){let a="",u=0,l=-1,f=r.length;for(;l<o.length-1;){l=o.indexOf(`
`,u),l===-1&&(l=o.length-1);let c=o.substring(u,l+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,c):s[c]!==void 0)?a+=String.fromCharCode(s[c]):(f===t&&(c=o.substring(u),l=o.length),a+=String.fromCharCode(f),s[c]=f,r[f++]=c),u=l+1}return a}const h=i(e);t=65535;const p=i(n);return{chars1:h,chars2:p,lineArray:r}}function It(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function V(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function q(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function Q(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,h=1;for(;;){const p=e.substring(t-h),o=n.indexOf(p);if(o===-1)return i;h+=o,(o===0||e.substring(t-h)===n.substring(0,h))&&(i=h,h++)}}function xt(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(m,k,E){const w=m.substring(E,E+Math.floor(m.length/4));let A=-1,v="",y,b,g,d;for(;(A=k.indexOf(w,A+1))!==-1;){const S=V(m.substring(E),k.substring(A)),H=q(m.substring(0,E),k.substring(0,A));v.length<H+S&&(v=k.substring(A-H,A)+k.substring(A,A+S),y=m.substring(0,E-H),b=m.substring(E+S),g=k.substring(0,A-H),d=k.substring(A+S))}return v.length*2>=m.length?[y,b,g,d,v]:null}const h=i(s,t,Math.ceil(s.length/4)),p=i(s,t,Math.ceil(s.length/2));let o;if(!h&&!p)return null;p?h?o=h[4].length>p[4].length?h:p:o=p:o=h;let a,u,l,f;e.length>n.length?(a=o[0],u=o[1],l=o[2],f=o[3]):(l=o[0],f=o[1],a=o[2],u=o[3]);const c=o[4];return[a,u,l,f,c]}function Nt(e){let n=!1;const r=[];let s=0,t=null,i=0,h=0,p=0,o=0,a=0;for(;i<e.length;)e[i][0]===_?(r[s++]=i,h=o,p=a,o=0,a=0,t=e[i][1]):(e[i][0]===C?o+=e[i][1].length:a+=e[i][1].length,t&&t.length<=Math.max(h,p)&&t.length<=Math.max(o,a)&&(e.splice(r[s-1],0,L(M,t)),e[r[s-1]+1][0]=C,s--,s--,i=s>0?r[s-1]:-1,h=0,p=0,o=0,a=0,t=null,n=!0)),i++;for(n&&W(e),Yt(e),i=1;i<e.length;){if(e[i-1][0]===M&&e[i][0]===C){const u=e[i-1][1],l=e[i][1],f=Q(u,l),c=Q(l,u);f>=c?(f>=u.length/2||f>=l.length/2)&&(e.splice(i,0,L(_,l.substring(0,f))),e[i-1][1]=u.substring(0,u.length-f),e[i+1][1]=l.substring(f),i++):(c>=u.length/2||c>=l.length/2)&&(e.splice(i,0,L(_,u.substring(0,c))),e[i-1][0]=C,e[i-1][1]=l.substring(0,l.length-c),e[i+1][0]=M,e[i+1][1]=u.substring(c),i++),i++}i++}}const X=/[^a-zA-Z0-9]/,$=/\s/,tt=/[\r\n]/,Vt=/\n\r?\n$/,Wt=/^\r?\n\r?\n/;function Yt(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),h=t.charAt(0),p=i.match(X),o=h.match(X),a=p&&i.match($),u=o&&h.match($),l=a&&i.match(tt),f=u&&h.match(tt),c=l&&s.match(Vt),m=f&&t.match(Wt);return c||m?5:l||f?4:p&&!a&&u?3:a||u?2:p||o?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===_&&e[r+1][0]===_){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const h=q(s,t);if(h){const l=t.substring(t.length-h);s=s.substring(0,s.length-h),t=l+t.substring(0,t.length-h),i=l+i}let p=s,o=t,a=i,u=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const l=n(s,t)+n(t,i);l>=u&&(u=l,p=s,o=t,a=i)}e[r-1][1]!==p&&(p?e[r-1][1]=p:(e.splice(r-1,1),r--),e[r][1]=o,a?e[r+1][1]=a:(e.splice(r+1,1),r--))}r++}}function W(e){e.push(L(_,""));let n=0,r=0,s=0,t="",i="",h;for(;n<e.length;)switch(e[n][0]){case C:s++,i+=e[n][1],n++;break;case M:r++,t+=e[n][1],n++;break;case _:r+s>1?(r!==0&&s!==0&&(h=V(i,t),h!==0&&(n-r-s>0&&e[n-r-s-1][0]===_?e[n-r-s-1][1]+=i.substring(0,h):(e.splice(0,0,L(_,i.substring(0,h))),n++),i=i.substring(h),t=t.substring(h)),h=q(i,t),h!==0&&(e[n][1]=i.substring(i.length-h)+e[n][1],i=i.substring(0,i.length-h),t=t.substring(0,t.length-h))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,L(M,t)),n++),i.length&&(e.splice(n,0,L(C,i)),n++),n++):n!==0&&e[n-1][0]===_?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let p=!1;for(n=1;n<e.length-1;)e[n-1][0]===_&&e[n+1][0]===_&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),p=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),p=!0)),n++;p&&W(e)}const et=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Zt(e,n){n?n={...et,...n}:n=et;const r=yt(n);return r.dispatch(e),r.toString()}const Pt=Object.freeze(["prototype","__proto__","constructor"]);function yt(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let h="";const p=i.length;p<10?h="unknown:["+i+"]":h=i.slice(8,p-1),h=h.toLowerCase();let o=null;if((o=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(h!=="object"&&h!=="function"&&h!=="asyncfunction")this[h]?this[h](t):e.ignoreUnknown||this.unkown(t,h);else{let a=Object.keys(t);e.unorderedObjects&&(a=a.sort());let u=[];e.respectType!==!1&&!nt(t)&&(u=Pt),e.excludeKeys&&(a=a.filter(f=>!e.excludeKeys(f)),u=u.filter(f=>!e.excludeKeys(f))),s("object:"+(a.length+u.length)+":");const l=f=>{this.dispatch(f),s(":"),e.excludeValues||this.dispatch(t[f]),s(",")};for(const f of a)l(f);for(const f of u)l(f)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const o of t)this.dispatch(o);return}const h=new Map,p=t.map(o=>{const a=yt(e);a.dispatch(o);for(const[u,l]of a.getContext())h.set(u,l);return a.toString()});return r=h,p.sort(),this.array(p,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),nt(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const dt="[native code] }",Jt=dt.length;function nt(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Jt)===dt}class F{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||Qt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new F([...this.words])}}const Qt={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Xt={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,h=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,p=t<<16|i<<8|h;for(let o=0;o<4&&s*8+o*6<e.sigBytes*8;o++)r.push(n.charAt(p>>>6*(3-o)&63))}return r.join("")}},$t={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new F(r,n)}},te={parse(e){return $t.parse(unescape(encodeURIComponent(e)))}};class ee{constructor(){this._data=new F,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new F,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=te.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let h=0;h<t;h+=this.blockSize)this._doProcessBlock(this._data.words,h);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new F(r,i)}}class ne extends ee{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const st=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],se=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],T=[];class re extends ne{constructor(){super(...arguments),this._hash=new F([...st])}reset(){super.reset(),this._hash=new F([...st])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],h=s[2],p=s[3],o=s[4],a=s[5],u=s[6],l=s[7];for(let f=0;f<64;f++){if(f<16)T[f]=n[r+f]|0;else{const v=T[f-15],y=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,b=T[f-2],g=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;T[f]=y+T[f-7]+g+T[f-16]}const c=o&a^~o&u,m=t&i^t&h^i&h,k=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),E=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),w=l+E+c+se[f]+T[f],A=k+m;l=u,u=a,a=o,o=p+w|0,p=h,h=i,i=t,t=w+A|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+h|0,s[3]=s[3]+p|0,s[4]=s[4]+o|0,s[5]=s[5]+a|0,s[6]=s[6]+u|0,s[7]=s[7]+l|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ie(e){return new re().finalize(e).toString(Xt)}function oe(e,n={}){const r=typeof e=="string"?e:Zt(e,n);return ie(r).slice(0,10)}function ae(e,n,r="",s=!1){const t=oe(e+r);let i=0,h=0;const p=Math.ceil(Math.log10(n.length)),o=le(n).flatMap((a,u)=>{var c;h=((c=a[0])==null?void 0:c.offset)||i;const l=a[a.length-1];l?i=l.offset+l.content.length:i+=1;const f=[...a,{content:`
`,offset:i}];return s&&f.unshift({key:`${t}-ln-${u+1}`,content:`${String(u+1).padStart(p," ")}  `,offset:h,htmlClass:"shiki-magic-move-line-number"}),f}).map((a,u)=>{const l=a;return l.key||(l.key=`${t}-${u}`),l});return{code:e,hash:t,tokens:o,lineNumbers:s}}function le(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,h]=s;if(!t&&!h)return r;const p=[{...r,offset:r.offset+t.length,content:i}];return t&&p.unshift({content:t,offset:r.offset}),h&&p.push({content:h,offset:r.offset+t.length+i.length}),p}))}function ce(e,n){let r=0;const s=e.key;let t=0;const i=[];function h(){return t===0?(t++,s):`${s}-${t++}`}for(const p of n)p>r&&i.push({...e,content:e.content.slice(r,p),offset:e.offset+r,key:h()}),r=p;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:h()}),i}function rt(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,h)=>i-h);return t.length?ce(s,t):s}):e}function he(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=ue(e.code,n.code,r),h=s?rt(e.tokens,i.flatMap(a=>a.from)):e.tokens,p=s?rt(n.tokens,i.flatMap(a=>a.to)):n.tokens,o=new Set;if(i.forEach(a=>{var m,k;const u=h.filter(E=>E.offset>=a.from[0]&&E.offset+E.content.length<=a.from[1]),l=p.filter(E=>E.offset>=a.to[0]&&E.offset+E.content.length<=a.to[1]);let f=0,c=0;for(;f<u.length&&c<l.length&&!(!u[f]||!l[c]);)u[f].content===l[c].content?(l[c].key=u[f].key,o.add(u[f].key),f++,c++):((m=u[f+1])==null?void 0:m.content)===l[c].content?f++:(u[f].content===((k=l[c+1])==null?void 0:k.content)||f++,c++)}),t)for(const a of h){if(o.has(a.key)||a.content.length<3||!a.content.match(/^[\w\d_-]+$/))continue;const u=p.find(l=>l.content===a.content&&!o.has(l.key));u&&(u.key=a.key,o.add(a.key))}return{from:h.length===e.tokens.length?e:{...e,tokens:h},to:p.length===n.tokens.length?n:{...n,tokens:p}}}function ue(e,n,r={}){var p;let s=O(e,n);s=((p=r.diffCleanup)==null?void 0:p.call(r,s))||s;let t="",i="";const h=[];for(const[o,a]of s)o===0?(h.push({from:[t.length,t.length+a.length],to:[i.length,i.length+a.length],content:a}),t+=a,i+=a):o===-1?t+=a:o===1&&(i+=a);if(t!==e||i!==n)throw new Error("Content mismatch");return h}var fe=Object.defineProperty,pe=(e,n,r)=>n in e?fe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,D=(e,n,r)=>(pe(e,typeof n!="symbol"?n+"":n,r),r);const B="shiki-magic-move",K=`${B}-leave-from`,ge=`${B}-leave-to`,it=`${B}-leave-active`,j=`${B}-enter-from`,z=`${B}-enter-to`,ot=`${B}-enter-active`,at=`${B}-move`,lt=`${B}-container-resize`,ct=`${B}-container-restyle`,me={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class ye{constructor(n,r={}){D(this,"mapDom",new Map),D(this,"container"),D(this,"anchor"),D(this,"previousPromises",[]),D(this,"options"),D(this,"isFirstRender",!0),this.options={...me,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${B}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.htmlClass&&(n.className=[`${B}-item`,r.htmlClass].join(" ")),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyNodeStyle(n,r){if(r.bg&&(n.style.backgroundColor=r.bg),r.fg&&(n.style.color=r.fg),r.rootStyle){const s=r.rootStyle.split(";");for(const t of s){const[i,h]=t.split(":");i&&h&&n.style.setProperty(i.trim(),h.trim())}}}applyContainerStyle(n){this.options.containerStyle&&this.applyNodeStyle(this.container,n)}checkContainerStyleChanged(n){if(!this.options.containerStyle)return!1;const r=this.container.cloneNode();this.applyNodeStyle(r,n);const s=r.style.backgroundColor!==this.container.style.backgroundColor,t=r.style.color!==this.container.style.color;let i=!1;if(n.rootStyle){const h=n.rootStyle.split(";");for(const p of h){const[o,a]=p.split(":");if(o&&a&&(i=i||this.container.style.getPropertyValue(o.trim())!==r.style.getPropertyValue(o.trim()),i))break}}return s||t||i}registerTransitionEnd(n,r){let s=!1,t=()=>{};const i=new Promise(h=>{const p=o=>{!o||o.target!==n||t()};t=()=>{s||(s=!0,n.removeEventListener("transitionend",p),r(),h())},n.addEventListener("transitionend",p)});return i.resolve=t,i}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],h=[];this.previousPromises.forEach(c=>c.resolve()),this.previousPromises=[];const p=[],{globalScale:o}=this.options,a=new Map;let u=this.anchor.getBoundingClientRect();const l=this.container.getBoundingClientRect();for(const c of this.mapDom.values()){const m=c.getBoundingClientRect();a.set(c,{x:m.x-u.x,y:m.y-u.y})}const f=n.tokens.map(c=>{if(this.mapDom.has(c.key)){const m=this.mapDom.get(c.key);return this.applyElementContent(m,c),p.push(()=>{this.applyElementStyle(m,c)}),s.push(m),r.set(c.key,m),this.mapDom.delete(c.key),m}else{const m=document.createElement(c.content===`
`?"br":"span");return this.applyElement(m,c),t.push(m),r.set(c.key,m),m}});for(const[c,m]of this.mapDom)m.tagName!=="BR"&&i.push(m);for(const c of i)c.style.position="absolute";if(this.container.replaceChildren(this.anchor,...f,...i),this.mapDom=r,i.forEach((c,m)=>{c.style.position="absolute";const k=a.get(c);c.style.top=`${k.y/o}px`,c.style.left=`${k.x/o}px`,this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),c.classList.add(K),c.classList.add(it),p.unshift(()=>{c.classList.remove(K),c.classList.add(ge)}),h.push(this.registerTransitionEnd(c,()=>{c.classList.remove(K),c.classList.remove(it),c.classList.remove(z),c.remove()}))}),this.isFirstRender||t.forEach((c,m)=>{c.classList.add(j),c.classList.add(ot),this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),p.push(()=>{c.classList.remove(j),c.classList.add(z)}),h.push(this.registerTransitionEnd(c,()=>{c.classList.remove(j),c.classList.remove(ot),c.classList.remove(z)}))}),u=this.anchor.getBoundingClientRect(),s.forEach((c,m)=>{const k=c.getBoundingClientRect(),E={x:k.x-u.x,y:k.y-u.y},w=a.get(c);c.style.transitionDuration=c.style.transitionDelay="0ms";const A=(w.x-E.x)/o,v=(w.y-E.y)/o;c.style.transform=`translate(${A}px, ${v}px)`,this.options.stagger?c.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):c.style.removeProperty("--smm-stagger"),p.unshift(()=>{c.classList.add(at),c.style.transform=c.style.transitionDuration=c.style.transitionDelay=""}),h.push(this.registerTransitionEnd(c,()=>{c.classList.remove(at)}))}),this.options.animateContainer&&!this.isFirstRender){const c=this.container.getBoundingClientRect();(c.width!==l.width||c.height!==l.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${l.height/o}px`,this.container.style.width=`${l.width/o}px`,p.unshift(()=>{this.container.classList.add(lt),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${c.height/o}px`,this.container.style.width=`${c.width/o}px`}),h.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(lt),this.container.style.height=this.container.style.width=""})))}return this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):this.checkContainerStyleChanged(n)&&(p.push(()=>{this.container.classList.add(ct),this.applyContainerStyle(n)}),h.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(ct)})))),de(),p.forEach(c=>c()),this.isFirstRender=!1,this.previousPromises=h,Promise.all(h).then()}}function de(){return document.body.offsetHeight}const be=N({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=I();let s=!1;return ut(()=>{r.value.innerHTML="",s=!0;const t=new ye(r.value);ft(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await x();const h=t.render(i);await x(),n("start"),await h,n("end")}else t.replace(i)},{immediate:!0})}),()=>G("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:bt(e.tokens.tokens,t=>t.content===`
`?G("br",{key:t.key}):G("span",{style:[{color:t.color},t.htmlStyle],class:["shiki-magic-move-item",t.htmlClass],key:t.key},t.content)))}}),Se=N({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=ae("",[]);const t=ht(()=>{const i=he(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>G(be,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}});var Y={exports:{}};Y.exports;(function(e){var n=function(){var r=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function h(o,a){if(!i[o]){i[o]={};for(var u=0;u<o.length;u++)i[o][o.charAt(u)]=u}return i[o][a]}var p={compressToBase64:function(o){if(o==null)return"";var a=p._compress(o,6,function(u){return s.charAt(u)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:p._decompress(o.length,32,function(a){return h(s,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":p._compress(o,15,function(a){return r(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:p._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=p.compress(o),u=new Uint8Array(a.length*2),l=0,f=a.length;l<f;l++){var c=a.charCodeAt(l);u[l*2]=c>>>8,u[l*2+1]=c%256}return u},decompressFromUint8Array:function(o){if(o==null)return p.decompress(o);for(var a=new Array(o.length/2),u=0,l=a.length;u<l;u++)a[u]=o[u*2]*256+o[u*2+1];var f=[];return a.forEach(function(c){f.push(r(c))}),p.decompress(f.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":p._compress(o,6,function(a){return t.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),p._decompress(o.length,32,function(a){return h(t,o.charAt(a))}))},compress:function(o){return p._compress(o,16,function(a){return r(a)})},_compress:function(o,a,u){if(o==null)return"";var l,f,c={},m={},k="",E="",w="",A=2,v=3,y=2,b=[],g=0,d=0,S;for(S=0;S<o.length;S+=1)if(k=o.charAt(S),Object.prototype.hasOwnProperty.call(c,k)||(c[k]=v++,m[k]=!0),E=w+k,Object.prototype.hasOwnProperty.call(c,E))w=E;else{if(Object.prototype.hasOwnProperty.call(m,w)){if(w.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,d==a-1?(d=0,b.push(u(g)),g=0):d++;for(f=w.charCodeAt(0),l=0;l<8;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1}else{for(f=1,l=0;l<y;l++)g=g<<1|f,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=0;for(f=w.charCodeAt(0),l=0;l<16;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1}A--,A==0&&(A=Math.pow(2,y),y++),delete m[w]}else for(f=c[w],l=0;l<y;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1;A--,A==0&&(A=Math.pow(2,y),y++),c[E]=v++,w=String(k)}if(w!==""){if(Object.prototype.hasOwnProperty.call(m,w)){if(w.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,d==a-1?(d=0,b.push(u(g)),g=0):d++;for(f=w.charCodeAt(0),l=0;l<8;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1}else{for(f=1,l=0;l<y;l++)g=g<<1|f,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=0;for(f=w.charCodeAt(0),l=0;l<16;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1}A--,A==0&&(A=Math.pow(2,y),y++),delete m[w]}else for(f=c[w],l=0;l<y;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1;A--,A==0&&(A=Math.pow(2,y),y++)}for(f=2,l=0;l<y;l++)g=g<<1|f&1,d==a-1?(d=0,b.push(u(g)),g=0):d++,f=f>>1;for(;;)if(g=g<<1,d==a-1){b.push(u(g));break}else d++;return b.join("")},decompress:function(o){return o==null?"":o==""?null:p._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,u){var l=[],f=4,c=4,m=3,k="",E=[],w,A,v,y,b,g,d,S={val:u(0),position:a,index:1};for(w=0;w<3;w+=1)l[w]=w;for(v=0,b=Math.pow(2,2),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;switch(v){case 0:for(v=0,b=Math.pow(2,8),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;d=r(v);break;case 1:for(v=0,b=Math.pow(2,16),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;d=r(v);break;case 2:return""}for(l[3]=d,A=d,E.push(d);;){if(S.index>o)return"";for(v=0,b=Math.pow(2,m),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;switch(d=v){case 0:for(v=0,b=Math.pow(2,8),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;l[c++]=r(v),d=c-1,f--;break;case 1:for(v=0,b=Math.pow(2,16),g=1;g!=b;)y=S.val&S.position,S.position>>=1,S.position==0&&(S.position=a,S.val=u(S.index++)),v|=(y>0?1:0)*g,g<<=1;l[c++]=r(v),d=c-1,f--;break;case 2:return E.join("")}if(f==0&&(f=Math.pow(2,m),m++),l[d])k=l[d];else if(d===c)k=A+A.charAt(0);else return null;E.push(k),l[c++]=A+k.charAt(0),f--,A=k,f==0&&(f=Math.pow(2,m),m++)}}};return p}();e!=null?e.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Y);var we=Y.exports;const Ae=_t(we),ve=N({__name:"ShikiMagicMove",props:{at:{type:[String,Number],default:"+1"},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0},lines:{type:Boolean,default:Ct.lineNumbers}},setup(e){const n=e,r=JSON.parse(Ae.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t,$zoom:i}=mt(),{isPrintMode:h}=Bt(),p=Mt(),o=I(0),a=I(),u=ht(()=>n.stepRanges.map(l=>l.length?l:["all"]));return St(()=>{s==null||s.unregister(p)}),ut(()=>{if(!s)return;if(u.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const l=u.value.map(c=>c.length).reduce((c,m)=>c+m,0),f=s.calculateSince(n.at,l-1);s.register(p,f),ft(()=>s.current,()=>{const c=f?s.current-f.start:Ft;let m=r.length-1,k=0,E="all";for(let w=0;w<u.value.length;w++){const A=u.value[w];if(c<k+A.length-1){m=w,E=A[c-k+1];break}k+=A.length||1}x(async()=>{var y;o.value=m,await Tt(0);const w=(y=a.value)==null?void 0:y.querySelector(".shiki");if(!w)return;const v=Array.from(w.children).slice(1).filter(b=>!b.className.includes("shiki-magic-move-leave")).reduce((b,g)=>(g.tagName==="BR"?b.push([]):b[b.length-1].push(g),b),[[]]);Ut(E,v.length,1,b=>v[b])})},{immediate:!0})}),(l,f)=>(pt(),wt("div",{ref_key:"container",ref:a,class:"slidev-code-wrapper slidev-code-magic-move relative"},[gt(U(Se),{class:"slidev-code relative shiki overflow-visible",steps:U(r),step:o.value,animate:!U(h),options:{globalScale:U(t)*U(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}}),ke=R("h1",null,"Trocando o StackPane por um VBox:",-1),Ee=R("hr",null,null,-1),Le=R("p",null,[Z("O StackPane é um elemento de layout que empilha os elementos. Veremos esse e outros "),R("em",null,"Panes"),Z(" futuramente. Por hora, substituiremos o StackPane por um VBox, que é um elemento de LayOut que organiza os elementos verticamente.")],-1),Ue={__name:"6",setup(e){return Ot(P),mt(),(n,r)=>{const s=ve;return pt(),At(Ht,Et(Lt(U(Dt)(U(P),5))),{default:vt(()=>[ke,Ee,Le,gt(s,kt({},{"steps-lz":"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","step-ranges":[[],[]]}),null,16)]),_:1},16)}}};export{Ue as default};
