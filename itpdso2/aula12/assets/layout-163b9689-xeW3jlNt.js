import{b as gn,a as P,c as Xn,d as L,e as xn,t as zn,f as s,h as w,G as x,g as En,i as kn,j as Un,k as g,v as y,r as V,l as Hn,m as yn,n as F,o as jn,p as M,q as Jn,s as Kn}from"./graph-fe24fab6-B0ZBDGhi.js";import{D as Nn,ab as A,a2 as Ln,a9 as Qn,ac as Zn,ad as ne,Q as J,G as _n,O as K,a6 as ee,ae as H,af as re,T as B,N as te,_ as Cn,a5 as ie,E as ae}from"./slidev/18-BDtS7nV_.js";var oe=/\s/;function ue(n){for(var e=n.length;e--&&oe.test(n.charAt(e)););return e}var de=/^\s+/;function fe(n){return n&&n.slice(0,ue(n)+1).replace(de,"")}var un=NaN,se=/^[-+]0x[0-9a-f]+$/i,ce=/^0b[01]+$/i,he=/^0o[0-7]+$/i,ve=parseInt;function le(n){if(typeof n=="number")return n;if(F(n))return un;if(B(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=B(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=fe(n);var r=ce.test(n);return r||he.test(n)?ve(n.slice(2),r?2:8):se.test(n)?un:+n}var dn=1/0,pe=17976931348623157e292;function S(n){if(!n)return n===0?n:0;if(n=le(n),n===dn||n===-dn){var e=n<0?-1:1;return e*pe}return n===n?n:0}function we(n){var e=S(n),r=e%1;return e===e?r?e-r:e:0}function _(n){var e=n==null?0:n.length;return e?gn(n):[]}function me(n){return Zn(ne(n,void 0,_),n+"")}var be=1,ge=4;function xe(n){return Hn(n,be|ge)}var In=Object.prototype,Ee=In.hasOwnProperty,ke=Nn(function(n,e){n=Object(n);var r=-1,t=e.length,i=t>2?e[2]:void 0;for(i&&A(e[0],e[1],i)&&(t=1);++r<t;)for(var o=e[r],a=Ln(o),u=-1,d=a.length;++u<d;){var f=a[u],c=n[f];(c===void 0||Qn(c,In[f])&&!Ee.call(n,f))&&(n[f]=o[f])}return n});const ye=ke;function $(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function Ne(n){return function(e,r,t){var i=Object(e);if(!_n(e)){var o=L(r);e=Jn(e),r=function(u){return o(i[u],u,i)}}var a=n(e,r,t);return a>-1?i[o?e[a]:a]:void 0}}var Le=Math.max;function _e(n,e,r){var t=n==null?0:n.length;if(!t)return-1;var i=r==null?0:we(r);return i<0&&(i=Le(t+i,0)),Kn(n,L(e),i)}var Ce=Ne(_e);const Q=Ce;function Rn(n,e){var r=-1,t=_n(n)?Array(n.length):[];return Xn(n,function(i,o,a){t[++r]=e(i,o,a)}),t}function m(n,e){var r=K(n)?P:Rn;return r(n,L(e))}function Ie(n,e){return n==null?n:ie(n,yn(e),Ln)}function Re(n,e){return n&&En(n,yn(e))}function Te(n,e){return n>e}function Tn(n,e){return n<e}function Y(n,e){var r={};return e=L(e),En(n,function(t,i,o){re(r,i,e(t,i,o))}),r}function Z(n,e,r){for(var t=-1,i=n.length;++t<i;){var o=n[t],a=e(o);if(a!=null&&(u===void 0?a===a&&!F(a):r(a,u)))var u=a,d=o}return d}function E(n){return n&&n.length?Z(n,J,Te):void 0}function R(n){return n&&n.length?Z(n,J,Tn):void 0}function nn(n,e){return n&&n.length?Z(n,L(e),Tn):void 0}function Me(n,e,r,t){if(!B(n))return n;e=kn(e,n);for(var i=-1,o=e.length,a=o-1,u=n;u!=null&&++i<o;){var d=jn(e[i]),f=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return n;if(i!=a){var c=u[d];f=void 0,f===void 0&&(f=B(c)?c:te(e[i+1])?[]:{})}Cn(u,d,f),u=u[d]}return n}function Oe(n,e,r){for(var t=-1,i=e.length,o={};++t<i;){var a=e[t],u=xn(n,a);r(u,a)&&Me(o,kn(a,n),u)}return o}function Pe(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n}function Se(n,e){if(n!==e){var r=n!==void 0,t=n===null,i=n===n,o=F(n),a=e!==void 0,u=e===null,d=e===e,f=F(e);if(!u&&!f&&!o&&n>e||o&&a&&d&&!u&&!f||t&&a&&d||!r&&d||!i)return 1;if(!t&&!o&&!f&&n<e||f&&r&&i&&!t&&!o||u&&r&&i||!a&&i||!d)return-1}return 0}function Fe(n,e,r){for(var t=-1,i=n.criteria,o=e.criteria,a=i.length,u=r.length;++t<a;){var d=Se(i[t],o[t]);if(d){if(t>=u)return d;var f=r[t];return d*(f=="desc"?-1:1)}}return n.index-e.index}function Ae(n,e,r){e.length?e=P(e,function(o){return K(o)?function(a){return xn(a,o.length===1?o[0]:o)}:o}):e=[J];var t=-1;e=P(e,ee(L));var i=Rn(n,function(o,a,u){var d=P(e,function(f){return f(o)});return{criteria:d,index:++t,value:o}});return Pe(i,function(o,a){return Fe(o,a,r)})}function Be(n,e){return Oe(n,e,function(r,t){return Un(n,t)})}var $e=me(function(n,e){return n==null?{}:Be(n,e)});const G=$e;var Ge=Math.ceil,Ve=Math.max;function Ye(n,e,r,t){for(var i=-1,o=Ve(Ge((e-n)/(r||1)),0),a=Array(o);o--;)a[++i]=n,n+=r;return a}function De(n){return function(e,r,t){return t&&typeof t!="number"&&A(e,r,t)&&(r=t=void 0),e=S(e),r===void 0?(r=e,e=0):r=S(r),t=t===void 0?e<r?1:-1:S(t),Ye(e,r,t)}}var qe=De();const N=qe;var We=Nn(function(n,e){if(n==null)return[];var r=e.length;return r>1&&A(n,e[0],e[1])?e=[]:r>2&&A(e[0],e[1],e[2])&&(e=[e[0]]),Ae(n,gn(e),[])});const O=We;var Xe=0;function en(n){var e=++Xe;return zn(n)+e}function ze(n,e,r){for(var t=-1,i=n.length,o=e.length,a={};++t<i;){var u=t<o?e[t]:void 0;r(a,n[t],u)}return a}function Ue(n,e){return ze(n||[],e||[],Cn)}class He{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,r=e._prev;if(r!==e)return fn(r),r}enqueue(e){var r=this._sentinel;e._prev&&e._next&&fn(e),e._next=r._next,r._next._prev=e,r._next=e,e._prev=r}toString(){for(var e=[],r=this._sentinel,t=r._prev;t!==r;)e.push(JSON.stringify(t,je)),t=t._prev;return"["+e.join(", ")+"]"}}function fn(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function je(n,e){if(n!=="_next"&&n!=="_prev")return e}var Je=ae(1);function Ke(n,e){if(n.nodeCount()<=1)return[];var r=Ze(n,e||Je),t=Qe(r.graph,r.buckets,r.zeroIdx);return _(m(t,function(i){return n.outEdges(i.v,i.w)}))}function Qe(n,e,r){for(var t=[],i=e[e.length-1],o=e[0],a;n.nodeCount();){for(;a=o.dequeue();)q(n,e,r,a);for(;a=i.dequeue();)q(n,e,r,a);if(n.nodeCount()){for(var u=e.length-2;u>0;--u)if(a=e[u].dequeue(),a){t=t.concat(q(n,e,r,a,!0));break}}}return t}function q(n,e,r,t,i){var o=i?[]:void 0;return s(n.inEdges(t.v),function(a){var u=n.edge(a),d=n.node(a.v);i&&o.push({v:a.v,w:a.w}),d.out-=u,j(e,r,d)}),s(n.outEdges(t.v),function(a){var u=n.edge(a),d=a.w,f=n.node(d);f.in-=u,j(e,r,f)}),n.removeNode(t.v),o}function Ze(n,e){var r=new x,t=0,i=0;s(n.nodes(),function(u){r.setNode(u,{v:u,in:0,out:0})}),s(n.edges(),function(u){var d=r.edge(u.v,u.w)||0,f=e(u),c=d+f;r.setEdge(u.v,u.w,c),i=Math.max(i,r.node(u.v).out+=f),t=Math.max(t,r.node(u.w).in+=f)});var o=N(i+t+3).map(function(){return new He}),a=t+1;return s(r.nodes(),function(u){j(o,a,r.node(u))}),{graph:r,buckets:o,zeroIdx:a}}function j(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}function nr(n){var e=n.graph().acyclicer==="greedy"?Ke(n,r(n)):er(n);s(e,function(t){var i=n.edge(t);n.removeEdge(t),i.forwardName=t.name,i.reversed=!0,n.setEdge(t.w,t.v,i,en("rev"))});function r(t){return function(i){return t.edge(i).weight}}}function er(n){var e=[],r={},t={};function i(o){w(t,o)||(t[o]=!0,r[o]=!0,s(n.outEdges(o),function(a){w(r,a.w)?e.push(a):i(a.w)}),delete r[o])}return s(n.nodes(),i),e}function rr(n){s(n.edges(),function(e){var r=n.edge(e);if(r.reversed){n.removeEdge(e);var t=r.forwardName;delete r.reversed,delete r.forwardName,n.setEdge(e.w,e.v,r,t)}})}function C(n,e,r,t){var i;do i=en(t);while(n.hasNode(i));return r.dummy=e,n.setNode(i,r),i}function tr(n){var e=new x().setGraph(n.graph());return s(n.nodes(),function(r){e.setNode(r,n.node(r))}),s(n.edges(),function(r){var t=e.edge(r.v,r.w)||{weight:0,minlen:1},i=n.edge(r);e.setEdge(r.v,r.w,{weight:t.weight+i.weight,minlen:Math.max(t.minlen,i.minlen)})}),e}function Mn(n){var e=new x({multigraph:n.isMultigraph()}).setGraph(n.graph());return s(n.nodes(),function(r){n.children(r).length||e.setNode(r,n.node(r))}),s(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function sn(n,e){var r=n.x,t=n.y,i=e.x-r,o=e.y-t,a=n.width/2,u=n.height/2;if(!i&&!o)throw new Error("Not possible to find intersection inside of the rectangle");var d,f;return Math.abs(o)*a>Math.abs(i)*u?(o<0&&(u=-u),d=u*i/o,f=u):(i<0&&(a=-a),d=a,f=a*o/i),{x:r+d,y:t+f}}function D(n){var e=m(N(On(n)+1),function(){return[]});return s(n.nodes(),function(r){var t=n.node(r),i=t.rank;g(i)||(e[i][t.order]=r)}),e}function ir(n){var e=R(m(n.nodes(),function(r){return n.node(r).rank}));s(n.nodes(),function(r){var t=n.node(r);w(t,"rank")&&(t.rank-=e)})}function ar(n){var e=R(m(n.nodes(),function(o){return n.node(o).rank})),r=[];s(n.nodes(),function(o){var a=n.node(o).rank-e;r[a]||(r[a]=[]),r[a].push(o)});var t=0,i=n.graph().nodeRankFactor;s(r,function(o,a){g(o)&&a%i!==0?--t:t&&s(o,function(u){n.node(u).rank+=t})})}function cn(n,e,r,t){var i={width:0,height:0};return arguments.length>=4&&(i.rank=r,i.order=t),C(n,"border",i,e)}function On(n){return E(m(n.nodes(),function(e){var r=n.node(e).rank;if(!g(r))return r}))}function or(n,e){var r={lhs:[],rhs:[]};return s(n,function(t){e(t)?r.lhs.push(t):r.rhs.push(t)}),r}function ur(n,e){return e()}function dr(n){function e(r){var t=n.children(r),i=n.node(r);if(t.length&&s(t,e),w(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var o=i.minRank,a=i.maxRank+1;o<a;++o)hn(n,"borderLeft","_bl",r,i,o),hn(n,"borderRight","_br",r,i,o)}}s(n.children(),e)}function hn(n,e,r,t,i,o){var a={width:0,height:0,rank:o,borderType:e},u=i[e][o-1],d=C(n,"border",a,r);i[e][o]=d,n.setParent(d,t),u&&n.setEdge(u,d,{weight:1})}function fr(n){var e=n.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&Pn(n)}function sr(n){var e=n.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&cr(n),(e==="lr"||e==="rl")&&(hr(n),Pn(n))}function Pn(n){s(n.nodes(),function(e){vn(n.node(e))}),s(n.edges(),function(e){vn(n.edge(e))})}function vn(n){var e=n.width;n.width=n.height,n.height=e}function cr(n){s(n.nodes(),function(e){W(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,W),w(r,"y")&&W(r)})}function W(n){n.y=-n.y}function hr(n){s(n.nodes(),function(e){X(n.node(e))}),s(n.edges(),function(e){var r=n.edge(e);s(r.points,X),w(r,"x")&&X(r)})}function X(n){var e=n.x;n.x=n.y,n.y=e}function vr(n){n.graph().dummyChains=[],s(n.edges(),function(e){lr(n,e)})}function lr(n,e){var r=e.v,t=n.node(r).rank,i=e.w,o=n.node(i).rank,a=e.name,u=n.edge(e),d=u.labelRank;if(o!==t+1){n.removeEdge(e);var f,c,h;for(h=0,++t;t<o;++h,++t)u.points=[],c={width:0,height:0,edgeLabel:u,edgeObj:e,rank:t},f=C(n,"edge",c,"_d"),t===d&&(c.width=u.width,c.height=u.height,c.dummy="edge-label",c.labelpos=u.labelpos),n.setEdge(r,f,{weight:u.weight},a),h===0&&n.graph().dummyChains.push(f),r=f;n.setEdge(r,i,{weight:u.weight},a)}}function pr(n){s(n.graph().dummyChains,function(e){var r=n.node(e),t=r.edgeLabel,i;for(n.setEdge(r.edgeObj,t);r.dummy;)i=n.successors(e)[0],n.removeNode(e),t.points.push({x:r.x,y:r.y}),r.dummy==="edge-label"&&(t.x=r.x,t.y=r.y,t.width=r.width,t.height=r.height),e=i,r=n.node(e)})}function rn(n){var e={};function r(t){var i=n.node(t);if(w(e,t))return i.rank;e[t]=!0;var o=R(m(n.outEdges(t),function(a){return r(a.w)-n.edge(a).minlen}));return(o===Number.POSITIVE_INFINITY||o===void 0||o===null)&&(o=0),i.rank=o}s(n.sources(),r)}function T(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function Sn(n){var e=new x({directed:!1}),r=n.nodes()[0],t=n.nodeCount();e.setNode(r,{});for(var i,o;wr(e,n)<t;)i=mr(e,n),o=e.hasNode(i.v)?T(n,i):-T(n,i),br(e,n,o);return e}function wr(n,e){function r(t){s(e.nodeEdges(t),function(i){var o=i.v,a=t===o?i.w:o;!n.hasNode(a)&&!T(e,i)&&(n.setNode(a,{}),n.setEdge(t,a,{}),r(a))})}return s(n.nodes(),r),n.nodeCount()}function mr(n,e){return nn(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return T(e,r)})}function br(n,e,r){s(n.nodes(),function(t){e.node(t).rank+=r})}function Fn(n,e,r){K(e)||(e=[e]);var t=(n.isDirected()?n.successors:n.neighbors).bind(n),i=[],o={};return s(e,function(a){if(!n.hasNode(a))throw new Error("Graph does not have node: "+a);An(n,a,r==="post",o,t,i)}),i}function An(n,e,r,t,i,o){w(t,e)||(t[e]=!0,r||o.push(e),s(i(e),function(a){An(n,a,r,t,i,o)}),r&&o.push(e))}function gr(n,e){return Fn(n,e,"post")}function xr(n,e){return Fn(n,e,"pre")}k.initLowLimValues=an;k.initCutValues=tn;k.calcCutValue=Bn;k.leaveEdge=Gn;k.enterEdge=Vn;k.exchangeEdges=Yn;function k(n){n=tr(n),rn(n);var e=Sn(n);an(e),tn(e,n);for(var r,t;r=Gn(e);)t=Vn(e,n,r),Yn(e,n,r,t)}function tn(n,e){var r=gr(n,n.nodes());r=r.slice(0,r.length-1),s(r,function(t){Er(n,e,t)})}function Er(n,e,r){var t=n.node(r),i=t.parent;n.edge(r,i).cutvalue=Bn(n,e,r)}function Bn(n,e,r){var t=n.node(r),i=t.parent,o=!0,a=e.edge(r,i),u=0;return a||(o=!1,a=e.edge(i,r)),u=a.weight,s(e.nodeEdges(r),function(d){var f=d.v===r,c=f?d.w:d.v;if(c!==i){var h=f===o,v=e.edge(d).weight;if(u+=h?v:-v,yr(n,r,c)){var l=n.edge(r,c).cutvalue;u+=h?-l:l}}}),u}function an(n,e){arguments.length<2&&(e=n.nodes()[0]),$n(n,{},1,e)}function $n(n,e,r,t,i){var o=r,a=n.node(t);return e[t]=!0,s(n.neighbors(t),function(u){w(e,u)||(r=$n(n,e,r,u,t))}),a.low=o,a.lim=r++,i?a.parent=i:delete a.parent,r}function Gn(n){return Q(n.edges(),function(e){return n.edge(e).cutvalue<0})}function Vn(n,e,r){var t=r.v,i=r.w;e.hasEdge(t,i)||(t=r.w,i=r.v);var o=n.node(t),a=n.node(i),u=o,d=!1;o.lim>a.lim&&(u=a,d=!0);var f=M(e.edges(),function(c){return d===ln(n,n.node(c.v),u)&&d!==ln(n,n.node(c.w),u)});return nn(f,function(c){return T(e,c)})}function Yn(n,e,r,t){var i=r.v,o=r.w;n.removeEdge(i,o),n.setEdge(t.v,t.w,{}),an(n),tn(n,e),kr(n,e)}function kr(n,e){var r=Q(n.nodes(),function(i){return!e.node(i).parent}),t=xr(n,r);t=t.slice(1),s(t,function(i){var o=n.node(i).parent,a=e.edge(i,o),u=!1;a||(a=e.edge(o,i),u=!0),e.node(i).rank=e.node(o).rank+(u?a.minlen:-a.minlen)})}function yr(n,e,r){return n.hasEdge(e,r)}function ln(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}function Nr(n){switch(n.graph().ranker){case"network-simplex":pn(n);break;case"tight-tree":_r(n);break;case"longest-path":Lr(n);break;default:pn(n)}}var Lr=rn;function _r(n){rn(n),Sn(n)}function pn(n){k(n)}function Cr(n){var e=C(n,"root",{},"_root"),r=Ir(n),t=E(y(r))-1,i=2*t+1;n.graph().nestingRoot=e,s(n.edges(),function(a){n.edge(a).minlen*=i});var o=Rr(n)+1;s(n.children(),function(a){Dn(n,e,i,o,t,r,a)}),n.graph().nodeRankFactor=i}function Dn(n,e,r,t,i,o,a){var u=n.children(a);if(!u.length){a!==e&&n.setEdge(e,a,{weight:0,minlen:r});return}var d=cn(n,"_bt"),f=cn(n,"_bb"),c=n.node(a);n.setParent(d,a),c.borderTop=d,n.setParent(f,a),c.borderBottom=f,s(u,function(h){Dn(n,e,r,t,i,o,h);var v=n.node(h),l=v.borderTop?v.borderTop:h,p=v.borderBottom?v.borderBottom:h,b=v.borderTop?t:2*t,I=l!==p?1:i-o[a]+1;n.setEdge(d,l,{weight:b,minlen:I,nestingEdge:!0}),n.setEdge(p,f,{weight:b,minlen:I,nestingEdge:!0})}),n.parent(a)||n.setEdge(e,d,{weight:0,minlen:i+o[a]})}function Ir(n){var e={};function r(t,i){var o=n.children(t);o&&o.length&&s(o,function(a){r(a,i+1)}),e[t]=i}return s(n.children(),function(t){r(t,1)}),e}function Rr(n){return V(n.edges(),function(e,r){return e+n.edge(r).weight},0)}function Tr(n){var e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,s(n.edges(),function(r){var t=n.edge(r);t.nestingEdge&&n.removeEdge(r)})}function Mr(n,e,r){var t={},i;s(r,function(o){for(var a=n.parent(o),u,d;a;){if(u=n.parent(a),u?(d=t[u],t[u]=a):(d=i,i=a),d&&d!==a){e.setEdge(d,a);return}a=u}})}function Or(n,e,r){var t=Pr(n),i=new x({compound:!0}).setGraph({root:t}).setDefaultNodeLabel(function(o){return n.node(o)});return s(n.nodes(),function(o){var a=n.node(o),u=n.parent(o);(a.rank===e||a.minRank<=e&&e<=a.maxRank)&&(i.setNode(o),i.setParent(o,u||t),s(n[r](o),function(d){var f=d.v===o?d.w:d.v,c=i.edge(f,o),h=g(c)?0:c.weight;i.setEdge(f,o,{weight:n.edge(d).weight+h})}),w(a,"minRank")&&i.setNode(o,{borderLeft:a.borderLeft[e],borderRight:a.borderRight[e]}))}),i}function Pr(n){for(var e;n.hasNode(e=en("_root")););return e}function Sr(n,e){for(var r=0,t=1;t<e.length;++t)r+=Fr(n,e[t-1],e[t]);return r}function Fr(n,e,r){for(var t=Ue(r,m(r,function(f,c){return c})),i=_(m(e,function(f){return O(m(n.outEdges(f),function(c){return{pos:t[c.w],weight:n.edge(c).weight}}),"pos")})),o=1;o<r.length;)o<<=1;var a=2*o-1;o-=1;var u=m(new Array(a),function(){return 0}),d=0;return s(i.forEach(function(f){var c=f.pos+o;u[c]+=f.weight;for(var h=0;c>0;)c%2&&(h+=u[c+1]),c=c-1>>1,u[c]+=f.weight;d+=f.weight*h})),d}function Ar(n){var e={},r=M(n.nodes(),function(u){return!n.children(u).length}),t=E(m(r,function(u){return n.node(u).rank})),i=m(N(t+1),function(){return[]});function o(u){if(!w(e,u)){e[u]=!0;var d=n.node(u);i[d.rank].push(u),s(n.successors(u),o)}}var a=O(r,function(u){return n.node(u).rank});return s(a,o),i}function Br(n,e){return m(e,function(r){var t=n.inEdges(r);if(t.length){var i=V(t,function(o,a){var u=n.edge(a),d=n.node(a.v);return{sum:o.sum+u.weight*d.order,weight:o.weight+u.weight}},{sum:0,weight:0});return{v:r,barycenter:i.sum/i.weight,weight:i.weight}}else return{v:r}})}function $r(n,e){var r={};s(n,function(i,o){var a=r[i.v]={indegree:0,in:[],out:[],vs:[i.v],i:o};g(i.barycenter)||(a.barycenter=i.barycenter,a.weight=i.weight)}),s(e.edges(),function(i){var o=r[i.v],a=r[i.w];!g(o)&&!g(a)&&(a.indegree++,o.out.push(r[i.w]))});var t=M(r,function(i){return!i.indegree});return Gr(t)}function Gr(n){var e=[];function r(o){return function(a){a.merged||(g(a.barycenter)||g(o.barycenter)||a.barycenter>=o.barycenter)&&Vr(o,a)}}function t(o){return function(a){a.in.push(o),--a.indegree===0&&n.push(a)}}for(;n.length;){var i=n.pop();e.push(i),s(i.in.reverse(),r(i)),s(i.out,t(i))}return m(M(e,function(o){return!o.merged}),function(o){return G(o,["vs","i","barycenter","weight"])})}function Vr(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}function Yr(n,e){var r=or(n,function(c){return w(c,"barycenter")}),t=r.lhs,i=O(r.rhs,function(c){return-c.i}),o=[],a=0,u=0,d=0;t.sort(Dr(!!e)),d=wn(o,i,d),s(t,function(c){d+=c.vs.length,o.push(c.vs),a+=c.barycenter*c.weight,u+=c.weight,d=wn(o,i,d)});var f={vs:_(o)};return u&&(f.barycenter=a/u,f.weight=u),f}function wn(n,e,r){for(var t;e.length&&(t=$(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function Dr(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}function qn(n,e,r,t){var i=n.children(e),o=n.node(e),a=o?o.borderLeft:void 0,u=o?o.borderRight:void 0,d={};a&&(i=M(i,function(p){return p!==a&&p!==u}));var f=Br(n,i);s(f,function(p){if(n.children(p.v).length){var b=qn(n,p.v,r,t);d[p.v]=b,w(b,"barycenter")&&Wr(p,b)}});var c=$r(f,r);qr(c,d);var h=Yr(c,t);if(a&&(h.vs=_([a,h.vs,u]),n.predecessors(a).length)){var v=n.node(n.predecessors(a)[0]),l=n.node(n.predecessors(u)[0]);w(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+v.order+l.order)/(h.weight+2),h.weight+=2}return h}function qr(n,e){s(n,function(r){r.vs=_(r.vs.map(function(t){return e[t]?e[t].vs:t}))})}function Wr(n,e){g(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}function Xr(n){var e=On(n),r=mn(n,N(1,e+1),"inEdges"),t=mn(n,N(e-1,-1,-1),"outEdges"),i=Ar(n);bn(n,i);for(var o=Number.POSITIVE_INFINITY,a,u=0,d=0;d<4;++u,++d){zr(u%2?r:t,u%4>=2),i=D(n);var f=Sr(n,i);f<o&&(d=0,a=xe(i),o=f)}bn(n,a)}function mn(n,e,r){return m(e,function(t){return Or(n,t,r)})}function zr(n,e){var r=new x;s(n,function(t){var i=t.graph().root,o=qn(t,i,r,e);s(o.vs,function(a,u){t.node(a).order=u}),Mr(t,r,o.vs)})}function bn(n,e){s(e,function(r){s(r,function(t,i){n.node(t).order=i})})}function Ur(n){var e=jr(n);s(n.graph().dummyChains,function(r){for(var t=n.node(r),i=t.edgeObj,o=Hr(n,e,i.v,i.w),a=o.path,u=o.lca,d=0,f=a[d],c=!0;r!==i.w;){if(t=n.node(r),c){for(;(f=a[d])!==u&&n.node(f).maxRank<t.rank;)d++;f===u&&(c=!1)}if(!c){for(;d<a.length-1&&n.node(f=a[d+1]).minRank<=t.rank;)d++;f=a[d]}n.setParent(r,f),r=n.successors(r)[0]}})}function Hr(n,e,r,t){var i=[],o=[],a=Math.min(e[r].low,e[t].low),u=Math.max(e[r].lim,e[t].lim),d,f;d=r;do d=n.parent(d),i.push(d);while(d&&(e[d].low>a||u>e[d].lim));for(f=d,d=t;(d=n.parent(d))!==f;)o.push(d);return{path:i.concat(o.reverse()),lca:f}}function jr(n){var e={},r=0;function t(i){var o=r;s(n.children(i),t),e[i]={low:o,lim:r++}}return s(n.children(),t),e}function Jr(n,e){var r={};function t(i,o){var a=0,u=0,d=i.length,f=$(o);return s(o,function(c,h){var v=Qr(n,c),l=v?n.node(v).order:d;(v||c===f)&&(s(o.slice(u,h+1),function(p){s(n.predecessors(p),function(b){var I=n.node(b),on=I.order;(on<a||l<on)&&!(I.dummy&&n.node(p).dummy)&&Wn(r,b,p)})}),u=h+1,a=l)}),o}return V(e,t),r}function Kr(n,e){var r={};function t(o,a,u,d,f){var c;s(N(a,u),function(h){c=o[h],n.node(c).dummy&&s(n.predecessors(c),function(v){var l=n.node(v);l.dummy&&(l.order<d||l.order>f)&&Wn(r,v,c)})})}function i(o,a){var u=-1,d,f=0;return s(a,function(c,h){if(n.node(c).dummy==="border"){var v=n.predecessors(c);v.length&&(d=n.node(v[0]).order,t(a,f,h,u,d),f=h,u=d)}t(a,f,a.length,d,o.length)}),a}return V(e,i),r}function Qr(n,e){if(n.node(e).dummy)return Q(n.predecessors(e),function(r){return n.node(r).dummy})}function Wn(n,e,r){if(e>r){var t=e;e=r,r=t}var i=n[e];i||(n[e]=i={}),i[r]=!0}function Zr(n,e,r){if(e>r){var t=e;e=r,r=t}return w(n[e],r)}function nt(n,e,r,t){var i={},o={},a={};return s(e,function(u){s(u,function(d,f){i[d]=d,o[d]=d,a[d]=f})}),s(e,function(u){var d=-1;s(u,function(f){var c=t(f);if(c.length){c=O(c,function(b){return a[b]});for(var h=(c.length-1)/2,v=Math.floor(h),l=Math.ceil(h);v<=l;++v){var p=c[v];o[f]===f&&d<a[p]&&!Zr(r,f,p)&&(o[p]=f,o[f]=i[f]=i[p],d=a[p])}}})}),{root:i,align:o}}function et(n,e,r,t,i){var o={},a=rt(n,e,r,i),u=i?"borderLeft":"borderRight";function d(h,v){for(var l=a.nodes(),p=l.pop(),b={};p;)b[p]?h(p):(b[p]=!0,l.push(p),l=l.concat(v(p))),p=l.pop()}function f(h){o[h]=a.inEdges(h).reduce(function(v,l){return Math.max(v,o[l.v]+a.edge(l))},0)}function c(h){var v=a.outEdges(h).reduce(function(p,b){return Math.min(p,o[b.w]-a.edge(b))},Number.POSITIVE_INFINITY),l=n.node(h);v!==Number.POSITIVE_INFINITY&&l.borderType!==u&&(o[h]=Math.max(o[h],v))}return d(f,a.predecessors.bind(a)),d(c,a.successors.bind(a)),s(t,function(h){o[h]=o[r[h]]}),o}function rt(n,e,r,t){var i=new x,o=n.graph(),a=ut(o.nodesep,o.edgesep,t);return s(e,function(u){var d;s(u,function(f){var c=r[f];if(i.setNode(c),d){var h=r[d],v=i.edge(h,c);i.setEdge(h,c,Math.max(a(n,f,d),v||0))}d=f})}),i}function tt(n,e){return nn(y(e),function(r){var t=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return Ie(r,function(o,a){var u=dt(n,a)/2;t=Math.max(o+u,t),i=Math.min(o-u,i)}),t-i})}function it(n,e){var r=y(e),t=R(r),i=E(r);s(["u","d"],function(o){s(["l","r"],function(a){var u=o+a,d=n[u],f;if(d!==e){var c=y(d);f=a==="l"?t-R(c):i-E(c),f&&(n[u]=Y(d,function(h){return h+f}))}})})}function at(n,e){return Y(n.ul,function(r,t){if(e)return n[e.toLowerCase()][t];var i=O(m(n,t));return(i[1]+i[2])/2})}function ot(n){var e=D(n),r=H(Jr(n,e),Kr(n,e)),t={},i;s(["u","d"],function(a){i=a==="u"?e:y(e).reverse(),s(["l","r"],function(u){u==="r"&&(i=m(i,function(h){return y(h).reverse()}));var d=(a==="u"?n.predecessors:n.successors).bind(n),f=nt(n,i,r,d),c=et(n,i,f.root,f.align,u==="r");u==="r"&&(c=Y(c,function(h){return-h})),t[a+u]=c})});var o=tt(n,t);return it(t,o),at(t,n.graph().align)}function ut(n,e,r){return function(t,i,o){var a=t.node(i),u=t.node(o),d=0,f;if(d+=a.width/2,w(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":f=-a.width/2;break;case"r":f=a.width/2;break}if(f&&(d+=r?f:-f),f=0,d+=(a.dummy?e:n)/2,d+=(u.dummy?e:n)/2,d+=u.width/2,w(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":f=u.width/2;break;case"r":f=-u.width/2;break}return f&&(d+=r?f:-f),f=0,d}}function dt(n,e){return n.node(e).width}function ft(n){n=Mn(n),st(n),Re(ot(n),function(e,r){n.node(r).x=e})}function st(n){var e=D(n),r=n.graph().ranksep,t=0;s(e,function(i){var o=E(m(i,function(a){return n.node(a).height}));s(i,function(a){n.node(a).y=t+o/2}),t+=o+r})}function At(n,e){var r=ur;r("layout",function(){var t=r("  buildLayoutGraph",function(){return Et(n)});r("  runLayout",function(){ct(t,r)}),r("  updateInputGraph",function(){ht(n,t)})})}function ct(n,e){e("    makeSpaceForEdgeLabels",function(){kt(n)}),e("    removeSelfEdges",function(){Mt(n)}),e("    acyclic",function(){nr(n)}),e("    nestingGraph.run",function(){Cr(n)}),e("    rank",function(){Nr(Mn(n))}),e("    injectEdgeLabelProxies",function(){yt(n)}),e("    removeEmptyRanks",function(){ar(n)}),e("    nestingGraph.cleanup",function(){Tr(n)}),e("    normalizeRanks",function(){ir(n)}),e("    assignRankMinMax",function(){Nt(n)}),e("    removeEdgeLabelProxies",function(){Lt(n)}),e("    normalize.run",function(){vr(n)}),e("    parentDummyChains",function(){Ur(n)}),e("    addBorderSegments",function(){dr(n)}),e("    order",function(){Xr(n)}),e("    insertSelfEdges",function(){Ot(n)}),e("    adjustCoordinateSystem",function(){fr(n)}),e("    position",function(){ft(n)}),e("    positionSelfEdges",function(){Pt(n)}),e("    removeBorderNodes",function(){Tt(n)}),e("    normalize.undo",function(){pr(n)}),e("    fixupEdgeLabelCoords",function(){It(n)}),e("    undoCoordinateSystem",function(){sr(n)}),e("    translateGraph",function(){_t(n)}),e("    assignNodeIntersects",function(){Ct(n)}),e("    reversePoints",function(){Rt(n)}),e("    acyclic.undo",function(){rr(n)})}function ht(n,e){s(n.nodes(),function(r){var t=n.node(r),i=e.node(r);t&&(t.x=i.x,t.y=i.y,e.children(r).length&&(t.width=i.width,t.height=i.height))}),s(n.edges(),function(r){var t=n.edge(r),i=e.edge(r);t.points=i.points,w(i,"x")&&(t.x=i.x,t.y=i.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}var vt=["nodesep","edgesep","ranksep","marginx","marginy"],lt={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},pt=["acyclicer","ranker","rankdir","align"],wt=["width","height"],mt={width:0,height:0},bt=["minlen","weight","width","height","labeloffset"],gt={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},xt=["labelpos"];function Et(n){var e=new x({multigraph:!0,compound:!0}),r=U(n.graph());return e.setGraph(H({},lt,z(r,vt),G(r,pt))),s(n.nodes(),function(t){var i=U(n.node(t));e.setNode(t,ye(z(i,wt),mt)),e.setParent(t,n.parent(t))}),s(n.edges(),function(t){var i=U(n.edge(t));e.setEdge(t,H({},gt,z(i,bt),G(i,xt)))}),e}function kt(n){var e=n.graph();e.ranksep/=2,s(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,t.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?t.width+=t.labeloffset:t.height+=t.labeloffset)})}function yt(n){s(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),i=n.node(e.w),o={rank:(i.rank-t.rank)/2+t.rank,e};C(n,"edge-proxy",o,"_ep")}})}function Nt(n){var e=0;s(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=E(e,t.maxRank))}),n.graph().maxRank=e}function Lt(n){s(n.nodes(),function(e){var r=n.node(e);r.dummy==="edge-proxy"&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})}function _t(n){var e=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,o=n.graph(),a=o.marginx||0,u=o.marginy||0;function d(f){var c=f.x,h=f.y,v=f.width,l=f.height;e=Math.min(e,c-v/2),r=Math.max(r,c+v/2),t=Math.min(t,h-l/2),i=Math.max(i,h+l/2)}s(n.nodes(),function(f){d(n.node(f))}),s(n.edges(),function(f){var c=n.edge(f);w(c,"x")&&d(c)}),e-=a,t-=u,s(n.nodes(),function(f){var c=n.node(f);c.x-=e,c.y-=t}),s(n.edges(),function(f){var c=n.edge(f);s(c.points,function(h){h.x-=e,h.y-=t}),w(c,"x")&&(c.x-=e),w(c,"y")&&(c.y-=t)}),o.width=r-e+a,o.height=i-t+u}function Ct(n){s(n.edges(),function(e){var r=n.edge(e),t=n.node(e.v),i=n.node(e.w),o,a;r.points?(o=r.points[0],a=r.points[r.points.length-1]):(r.points=[],o=i,a=t),r.points.unshift(sn(t,o)),r.points.push(sn(i,a))})}function It(n){s(n.edges(),function(e){var r=n.edge(e);if(w(r,"x"))switch((r.labelpos==="l"||r.labelpos==="r")&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset;break}})}function Rt(n){s(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})}function Tt(n){s(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),i=n.node(r.borderBottom),o=n.node($(r.borderLeft)),a=n.node($(r.borderRight));r.width=Math.abs(a.x-o.x),r.height=Math.abs(i.y-t.y),r.x=o.x+r.width/2,r.y=t.y+r.height/2}}),s(n.nodes(),function(e){n.node(e).dummy==="border"&&n.removeNode(e)})}function Mt(n){s(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);r.selfEdges||(r.selfEdges=[]),r.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}function Ot(n){var e=D(n);s(e,function(r){var t=0;s(r,function(i,o){var a=n.node(i);a.order=o+t,s(a.selfEdges,function(u){C(n,"selfedge",{width:u.label.width,height:u.label.height,rank:a.rank,order:o+ ++t,e:u.e,label:u.label},"_se")}),delete a.selfEdges})})}function Pt(n){s(n.nodes(),function(e){var r=n.node(e);if(r.dummy==="selfedge"){var t=n.node(r.e.v),i=t.x+t.width/2,o=t.y,a=r.x-i,u=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:i+2*a/3,y:o-u},{x:i+5*a/6,y:o-u},{x:i+a,y:o},{x:i+5*a/6,y:o+u},{x:i+2*a/3,y:o+u}],r.label.x=r.x,r.label.y=r.y}})}function z(n,e){return Y(G(n,e),Number)}function U(n){var e={};return s(n,function(r,t){e[t.toLowerCase()]=r}),e}export{ye as d,At as l,m,G as p,N as r,en as u};