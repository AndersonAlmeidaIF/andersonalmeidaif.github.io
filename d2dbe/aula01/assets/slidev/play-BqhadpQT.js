const __vite__fileDeps=["assets/slidev/DrawingControls-nOp4Z-p0.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-JkCHh3FF.js","assets/modules/unplugin-icons-D595PnGb.js","assets/modules/vue-Db4Gv5-w.js","assets/modules/shiki-CkJWbXl4.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-aSgaajH8.js","assets/index-OeIe4sqO.js","assets/index-BjhOebFd.css","assets/DrawingPreview-CGkUngQZ.css","assets/slidev/useWakeLock-CxecxJvZ.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CpSjP1z-.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-tnlJEcNy.js","assets/slidev/context-APeMCfkw.js","assets/useWakeLock-DkCDje7_.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as E,o,c as u,A as e,b as f,e as n,f as N,i as C,g as i,af as A,y as z,k as h,ag as $,a6 as M,M as y,l as m,F as P,x as D,v as R,h as W,t as H}from"../modules/vue-Db4Gv5-w.js";import{v as k,a as B,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as F}from"../index-OeIe4sqO.js";import{b as G,G as j,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-CxecxJvZ.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-aSgaajH8.js";import{o as oe}from"../modules/unplugin-icons-D595PnGb.js";import"../modules/shiki-CkJWbXl4.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CpSjP1z-.js";import"./title-renderer.md_vue_type_script_setup_true_lang-tnlJEcNy.js";import"./context-APeMCfkw.js";const se="/d2dbe/aula01/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},le=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:r}){const a=p,l=E(a,"modelValue",r);function d(){l.value=!1}return(_,s)=>(o(),u(A,null,[e(l)?(o(),f("div",ae,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),n("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),ne={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),M("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:r}){const l=E(p,"modelValue",r),d=z(()=>typeof k.info=="string");return(_,s)=>(o(),u(le,{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=c=>$(l)?l.value=c:null),class:"px-6 py-4"},{default:h(()=>[n("div",ne,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(p){const{isEmbedded:r}=B(),a=!k.drawings.presenterOnly&&!r.value,t=y();a&&I(()=>import("./DrawingControls-nOp4Z-p0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(_=>t.value=_.default);const l=y(),d=y();return(_,s)=>(o(),f(P,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),m(G),m(j),l.value?(o(),u(e(l),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),m(K)],64))}}),ce=v({__name:"PrintStyle",setup(p){function r(a,{slots:t}){if(t.default)return R("style",t.default())}return(a,t)=>(o(),u(r,null,{default:h(()=>[M(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),me={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(p){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",me,[m(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=n("div",{id:"twoslash-container"},null,-1),Ve=v({__name:"play",setup(p){const{next:r,prev:a,isPrintMode:t}=B(),{isDrawing:l}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}X(d),Y(),q();const s=z(()=>O.value||S.value),c=y();return(g,x)=>(o(),f(P,null,[e(t)?(o(),u(ce,{key:0})):i("v-if",!0),n("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:h(()=>[m(J,{"render-context":"slide"}),m(pe)]),controls:h(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[m(Q,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(de,{key:1})),_e],64))}});export{Ve as default};
