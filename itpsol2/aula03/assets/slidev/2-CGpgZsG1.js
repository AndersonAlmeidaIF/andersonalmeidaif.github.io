import{_ as N,a as $}from"../default-CRJf7Oug.js";import{d as C,y as p,r as b,o,b as c,F as D,ad as I,i as h,l as u,k as P,A as f,c as S,g as _,h as g,q as A,s as L,e as B}from"../modules/vue-fBXhW85N.js";import{aa as y,ab as T}from"../index-sWuvkcLg.js";import{_ as F}from"./title-renderer.md_vue_type_script_setup_true_lang-DtntnoHz.js";import{u as k,p as V,f as z}from"./context-C31JCC_h.js";import"../modules/shiki-CppcQy-f.js";const O=["start"],E=C({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(i){const a=i,r=p(()=>[...y(a.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${a.level}`]),n=p(()=>[...y(a.listStyle||[])]);return(l,m)=>{const d=N,t=b("TocList",!0);return l.list&&l.list.length>0?(o(),c("ol",{key:0,class:h(r.value),start:l.level===1?l.start:void 0,style:g(n.value.length>=l.level?`list-style:${n.value[l.level-1]}`:void 0)},[(o(!0),c(D,null,I(l.list,e=>(o(),c("li",{key:e.path,class:h(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[u(d,{to:e.path},{default:P(()=>[u(f(F),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),S(t,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):_("v-if",!0)],2))),128))],14,O)):_("v-if",!0)}}}),q=C({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(i){const a=i,{$slidev:r}=k();function n(t,e=1){if(e>Number(a.maxDepth))return[];if(e<Number(a.minDepth)){const s=t.find(v=>v.active||v.activeParent);return s?n(s.children,e+1):[]}return t.map(s=>({...s,children:n(s.children,e+1)}))}function l(t){return t.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:l(e.children)}))}function m(t){const e=t.some(s=>s.active||s.activeParent||s.hasActiveParent);return t.filter(()=>e).map(s=>({...s,children:m(s.children)}))}const d=p(()=>{const t=r==null?void 0:r.nav.tocTree;if(!t)return[];let e=n(t);return a.mode==="onlyCurrentTree"?e=l(e):a.mode==="onlySiblings"&&(e=m(e)),e});return(t,e)=>{const s=E;return o(),c("div",{class:"slidev-toc",style:g(`column-count:${t.columns}`)},[u(s,{level:1,start:t.start,"list-style":t.listStyle,list:d.value,"list-class":t.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),w=B("h1",null,"Agenda",-1),K={__name:"2",setup(i){return V(T),k(),(a,r)=>{const n=q;return o(),S($,A(L(f(z)(f(T),1))),{default:P(()=>[w,u(n,{columns:"2",minDepth:"1",maxDepth:"2"})]),_:1},16)}}};export{K as default};
