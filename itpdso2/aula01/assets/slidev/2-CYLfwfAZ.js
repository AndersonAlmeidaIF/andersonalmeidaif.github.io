import{_ as D,a as N}from"../default-GewxpMHE.js";import{d as C,y as p,r as $,o,b as c,F as b,ad as A,i as h,l as u,k,A as f,c as P,g as _,h as S,aA as I,aa as L,q as B,s as F,e as V}from"../modules/vue-j4chXpKU.js";import{aa as y,ab as T}from"../index-mO12-JdA.js";import{_ as z}from"./title-renderer.md_vue_type_script_setup_true_lang-DW5rFDd6.js";import{u as g,p as O,f as w}from"./context-ESGx4Y2h.js";import"../modules/shiki-IBIKokT1.js";const E=["start"],q=C({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(i){const a=i,n=p(()=>[...y(a.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${a.level}`]),r=p(()=>[...y(a.listStyle||[])]);return(s,m)=>{const d=D,t=$("TocList",!0);return s.list&&s.list.length>0?(o(),c("ol",{key:0,class:h(n.value),start:s.level===1?s.start:void 0,style:S(r.value.length>=s.level?`list-style:${r.value[s.level-1]}`:void 0)},[(o(!0),c(b,null,A(s.list,e=>(o(),c("li",{key:e.path,class:h(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[u(d,{to:e.path},{default:k(()=>[u(f(z),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),P(t,{key:0,level:s.level+1,"list-style":s.listStyle,list:e.children,"list-class":s.listClass},null,8,["level","list-style","list","list-class"])):_("v-if",!0)],2))),128))],14,E)):_("v-if",!0)}}}),R=C({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(i){const a=i,{$slidev:n}=g();function r(t,e=1){if(e>Number(a.maxDepth))return[];if(e<Number(a.minDepth)){const l=t.find(v=>v.active||v.activeParent);return l?r(l.children,e+1):[]}return t.map(l=>({...l,children:r(l.children,e+1)}))}function s(t){return t.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:s(e.children)}))}function m(t){const e=t.some(l=>l.active||l.activeParent||l.hasActiveParent);return t.filter(()=>e).map(l=>({...l,children:m(l.children)}))}const d=p(()=>{const t=n==null?void 0:n.nav.tocTree;if(!t)return[];let e=r(t);return a.mode==="onlyCurrentTree"?e=s(e):a.mode==="onlySiblings"&&(e=m(e)),e});return(t,e)=>{const l=q;return o(),c("div",{class:"slidev-toc",style:S(`column-count:${t.columns}`)},[u(l,{level:1,start:t.start,"list-style":t.listStyle,list:d.value,"list-class":t.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),Y=V("h1",null,"Agenda",-1),Q={__name:"2",setup(i){return O(T),g(),(a,n)=>{const r=R,s=I("click");return o(),P(N,B(F(f(w)(f(T),1))),{default:k(()=>[Y,L(u(r,{columns:"2",minDepth:"1",maxDepth:"2"},null,512),[[s]])]),_:1},16)}}};export{Q as default};
