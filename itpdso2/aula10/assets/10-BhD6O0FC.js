import{aj as M,ak as T,aa as j,al as x}from"./index-BhaI6IR0.js";import{d as w,ac as F,aA as G,o as B,c as V,F as J,aB as P,v as o,aC as f,aD as E,l as z,aa as L,k as C,q as R,s as q,A as b,e as a,a6 as g}from"./modules/vue-Cyzpdo4P.js";import{u as $,p as O,f as U}from"./slidev/context-DvD8Si57.js";import{a as H}from"./default-azN1BHCS.js";import"./modules/shiki-D2z3KMYl.js";const K=w({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(p){const n=p,{$clicksContext:i}=$(),c=M();let d=+n.size;return Number.isNaN(d)&&(console.warn(`[slidev] Invalid size for VClickGap: ${n.size}`),d=1),F(()=>{const l=i.currentOffset+d-1;i.register(c,{max:l,delta:d})}),G(()=>{i.unregister(c)}),(l,r)=>(B(),V(J))}}),S=["ul","ol"],Q=w({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var A,k;const p=+this.every,n=T(this.at),i=typeof n=="string";if(!n){console.warn("[slidev] Invalid at prop for v-clicks component:",n);return}const c=P("click"),d=(s,e)=>L(s,[[c,e,"",{hide:this.hide,fade:this.fade}]]),l=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?l(e.children):[e]);let r=(k=(A=this.$slots).default)==null?void 0:k.call(A);if(!r)return;r=l(j(r));const I=(s,e=1)=>l(s).map(t=>{if(!f(t))return t;if(S.includes(t.type)&&Array.isArray(t.children)){const u=m(t.children,e+1);return o(t,{},u)}return o(t)});let N=1,h=0;const m=(s,e=1)=>l(s).map(t=>{if(!f(t)||t.type===E)return t;const u=+n+Math.ceil(N++/p)-1;let y;e<+this.depth&&Array.isArray(t.children)?y=o(t,{},I(t.children,e)):y=o(t);const v=u-h;return h=u,d(y,i?v>=0?`+${v}`:`${v}`:u)}),_=()=>z(K,{size:+n+Math.ceil((N-1)/p)-1-h});if(this.handleSpecialElements){if(r.length===1&&S.includes(r[0].type)&&Array.isArray(r[0].children))return o(r[0],{},[...m(r[0].children),_()]);if(r.length===1&&r[0].type==="table"){const s=r[0];if(Array.isArray(s.children))return o(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?o(e,{},[...m(e.children),_()]):o(e):e))}}return[...m(r),_()]}}),W="/itpdso2/aula10/aula07/2024-10-26-20-49-28.png",X="/itpdso2/aula10/aula07/2024-10-26-20-50-56.png",Y="/itpdso2/aula10/aula07/2024-10-26-20-53-46.png",Z=a("h1",null,"Criando um projeto Java com JDBC:",-1),ee=a("hr",null,null,-1),te=a("ul",null,[a("li",null,"No VsCode, criar um projeto Java padrão:")],-1),re=a("p",null,[g("1. "),a("img",{src:W,width:"450"})],-1),se=a("p",null,[g("2. "),a("img",{src:X,width:"450"})],-1),ae=a("p",null,[g("3. "),a("img",{src:Y,width:"450"})],-1),de={__name:"10",setup(p){return O(x),$(),(n,i)=>{const c=Q;return B(),V(H,R(q(b(U)(b(x),9))),{default:C(()=>[Z,ee,te,z(c,null,{default:C(()=>[re,se,ae]),_:1})]),_:1},16)}}};export{de as default};
