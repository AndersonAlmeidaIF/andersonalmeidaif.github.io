const __vite__fileDeps=["assets/slidev/DrawingControls-CYHp3KBn.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-Bt-66cYa.js","assets/modules/unplugin-icons-DBcjIvsS.js","assets/modules/vue-fBXhW85N.js","assets/modules/shiki-CppcQy-f.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CobG9kMK.js","assets/index-sWuvkcLg.js","assets/index-CFTOdeq0.css","assets/DrawingPreview-CGkUngQZ.css","assets/slidev/useWakeLock-iyJhHUl7.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-B8wXvdVU.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-DtntnoHz.js","assets/slidev/context-C31JCC_h.js","assets/useWakeLock-DkCDje7_.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as E,o,c as u,A as e,b as f,e as n,f as N,i as C,g as i,af as A,y as z,k as h,ag as $,a6 as M,M as y,l as p,F as P,x as D,v as R,h as W,t as H}from"../modules/vue-fBXhW85N.js";import{v as k,a as B,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as F}from"../index-sWuvkcLg.js";import{b as G,G as j,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-iyJhHUl7.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CobG9kMK.js";import{o as oe}from"../modules/unplugin-icons-DBcjIvsS.js";import"../modules/shiki-CppcQy-f.js";import"./IconButton.vue_vue_type_script_setup_true_lang-B8wXvdVU.js";import"./title-renderer.md_vue_type_script_setup_true_lang-DtntnoHz.js";import"./context-C31JCC_h.js";const se="/itpsol2/aula03/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const a=m,l=E(a,"modelValue",r);function d(){l.value=!1}return(_,s)=>(o(),u(A,null,[e(l)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),M("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:r}){const l=E(m,"modelValue",r),d=z(()=>typeof k.info=="string");return(_,s)=>(o(),u(le,{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ne,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(m){const{isEmbedded:r}=B(),a=!k.drawings.presenterOnly&&!r.value,t=y();a&&I(()=>import("./DrawingControls-CYHp3KBn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(_=>t.value=_.default);const l=y(),d=y();return(_,s)=>(o(),f(P,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),p(G),p(j),l.value?(o(),u(e(l),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),p(K)],64))}}),ce=v({__name:"PrintStyle",setup(m){function r(a,{slots:t}){if(t.default)return R("style",t.default())}return(a,t)=>(o(),u(r,null,{default:h(()=>[M(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=v({__name:"PresenterMouse",setup(m){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",pe,[p(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=n("div",{id:"twoslash-container"},null,-1),Ve=v({__name:"play",setup(m){const{next:r,prev:a,isPrintMode:t}=B(),{isDrawing:l}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}X(d),Y(),q();const s=z(()=>O.value||S.value),c=y();return(g,x)=>(o(),f(P,null,[e(t)?(o(),u(ce,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:h(()=>[p(J,{"render-context":"slide"}),p(me)]),controls:h(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[p(Q,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(de,{key:1})),_e],64))}});export{Ve as default};
