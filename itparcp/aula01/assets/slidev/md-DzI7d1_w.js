import{d as $,z as v,r as S,o,b as d,F as N,ai as D,i as h,l as m,k as T,B as p,c as P,g as _,h as g,e as y,q as I,s as b}from"../modules/vue-DRX4njMG.js";import{u as k,f as A}from"./context-CojKsDQl.js";import{_ as B,a as L}from"../default-C8NagOJ7.js";import{_ as z}from"./title-renderer.md_vue_type_script_setup_true_lang-1Av6FWoz.js";import{a as V,ai as C}from"../index-DXC1LSyM.js";import"../modules/shiki-1EDlywvT.js";const F=["start"],O=$({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(c){const a=c,{isPresenter:r}=V(),n=v(()=>[...C(a.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${a.level}`]),i=v(()=>[...C(a.listStyle||[])]);return(l,f)=>{const s=B,t=S("TocList",!0);return l.list&&l.list.length>0?(o(),d("ol",{key:0,class:h(n.value),start:l.level===1?l.start:void 0,style:g(i.value.length>=l.level?`list-style:${i.value[l.level-1]}`:void 0)},[(o(!0),d(N,null,D(l.list,e=>(o(),d("li",{key:e.path,class:h(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[m(s,{to:p(r)?`/presenter${e.path}`:e.path},{default:T(()=>[m(p(z),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),P(t,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):_("v-if",!0)],2))),128))],14,F)):_("v-if",!0)}}}),E=$({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(c){const a=c,{$slidev:r}=k();function n(s,t=1){if(t>Number(a.maxDepth))return[];if(t<Number(a.minDepth)){const e=s.find(u=>u.active||u.activeParent);return e?n(e.children,t+1):[]}return s.map(e=>({...e,children:n(e.children,t+1)}))}function i(s){return s.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:i(t.children)}))}function l(s){const t=s.some(e=>e.active||e.activeParent||e.hasActiveParent);return s.filter(()=>t).map(e=>({...e,children:l(e.children)}))}const f=v(()=>{const s=r==null?void 0:r.nav.tocTree;if(!s)return[];let t=n(s);return a.mode==="onlyCurrentTree"?t=i(t):a.mode==="onlySiblings"&&(t=l(t)),t});return(s,t)=>(o(),d("div",{class:"slidev-toc",style:g(`column-count:${s.columns}`)},[m(O,{level:1,start:s.start,"list-style":s.listStyle,list:f.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4))}}),H={__name:"aula01.md__slidev_2",setup(c){const{$slidev:a,$nav:r,$clicksContext:n,$clicks:i,$page:l,$renderContext:f,$frontmatter:s}=k();return n.setup(),(t,e)=>{const u=E;return o(),P(L,I(b(p(A)(p(s),1))),{default:T(()=>[e[0]||(e[0]=y("h1",null,"Agenda",-1)),y("small",null,[m(u,{columns:"2",minDepth:"1",maxDepth:"2"})])]),_:1},16)}}};export{H as default};
