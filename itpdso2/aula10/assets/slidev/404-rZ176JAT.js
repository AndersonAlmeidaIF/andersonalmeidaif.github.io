import{N as f,y as m,b as h,e as t,a6 as c,x as r,A as v,c as p,k as u,g as d,r as x,o as n,p as k,a as g}from"../modules/vue-Cyzpdo4P.js";import{_ as N,a as S}from"../index-BhaI6IR0.js";import"../modules/shiki-D2z3KMYl.js";const y=o=>(k("data-v-68289e16"),o=o(),g(),o),B={class:"grid justify-center pt-15%"},I=y(()=>t("h1",{class:"text-9xl font-bold"}," 404 ",-1)),R={class:"text-2xl"},C={class:"op-70"},V={class:"mt-3 flex flex-col gap-2"},b={__name:"404",setup(o){const{currentRoute:l}=f(),{total:i}=S(),s=m(()=>{const a=l.value.path.match(/\d+/);if(a){const e=+a[0];if(e>0&&e<=i.value)return e}return null});return(_,a)=>{const e=x("RouterLink");return n(),h("div",B,[t("div",null,[I,t("p",R,[c(" Page not found"),t("code",C,":"+r(v(l).path),1)]),t("div",V,[s.value!==1?(n(),p(e,{key:0,to:"/",class:"page-link"},{default:u(()=>[c(" Go Home ")]),_:1})):d("v-if",!0),s.value?(n(),p(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:u(()=>[c(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):d("v-if",!0)])])])}}},j=N(b,[["__scopeId","data-v-68289e16"]]);export{j as default};
