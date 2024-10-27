import{h as H,i as j,l as A,m as J}from"../modules/unplugin-icons-CSuXUfMI.js";import{d as D,o,c,i as P,A as e,t as z,y as g,D as N,M as K,ac as O,J as Q,ae as U,a1 as X,b as y,e as s,l as t,k as h,g as F,h as I,x as Y,F as Z,p as ee,a as te}from"../modules/vue-DFtvZUzV.js";import{a as se,u as oe,h as ne,c as ae,d as re,j as ie,k as le,l as ce,m as ue,n as de,o as pe,s as _e,_ as me}from"../index-BjH2gkN_.js";import{r as fe,u as xe,a as ve,S as ke,o as he,_ as be,G as ge,b as ye,c as Ce}from"./useWakeLock-Ds3EMgJY.js";import{b as Se,c as we,a as M,S as $e}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DyS2lCgV.js";import{_ as ze,C as Ne}from"./ClicksSlider-TsPfwW13.js";import{_ as Fe}from"./DrawingControls.vue_vue_type_style_index_0_lang-Ckwz8irA.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-mkuuqELo.js";import"../modules/shiki-Byiynd8c.js";import"./context-vvkG9Mdf.js";const Ie=D({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(r){const i=r,{info:a}=Se(i.no);return(u,d)=>{var f,x;return o(),c(ze,{class:P(i.class),note:(f=e(a))==null?void 0:f.note,"note-html":(x=e(a))==null?void 0:x.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),C=r=>(ee("data-v-162fa54b"),r=r(),te(),r),Me={class:"bg-main h-full slidev-presenter"},Be=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),De={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Pe=C(()=>s("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Re={key:0,class:"grid-section note of-auto"},Te={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ee={class:"border-t border-main py-1 px-2 text-sm"},Le={class:"grid-section bottom flex"},Ve=C(()=>s("div",{"flex-auto":""},null,-1)),We={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},qe={class:"progress-bar"},Ge=D({__name:"presenter",setup(r){const i=z();fe(),xe(i),ve();const{clicksContext:a,currentSlideNo:u,currentSlideRoute:d,hasNext:f,nextRoute:x,slides:R,queryClicks:T,getPrimaryClicks:E,total:L}=se(),{isDrawing:V}=we();oe({title:`Presenter - ${_e}`}),z(!1);const{timer:W,resetTimer:S}=ne(),q=g(()=>R.value.map(k=>ae(k))),l=g(()=>a.value.current<a.value.total?[d.value,a.value.current+1]:f.value?[x.value,0]:null),v=g(()=>l.value&&q.value[l.value[0].no-1]);N([d,T],()=>{v.value&&(v.value.current=l.value[1])},{immediate:!0});const w=K();return O(()=>{const k=i.value.querySelector("#slide-content"),p=Q(U()),b=X();N(()=>{if(!b.value||V.value||!ie.value)return;const n=k.getBoundingClientRect(),_=(p.x-n.left)/n.width*100,m=(p.y-n.top)/n.height*100;if(!(_<0||_>100||m<0||m>100))return{x:_,y:m}},n=>{re.cursor=n})}),(k,p)=>{var $;const b=H,n=j,_=A,m=J;return o(),y(Z,null,[s("div",Me,[s("div",{class:P(["grid-container",`layout${e(le)}`])},[s("div",{ref_key:"main",ref:i,class:"relative grid-section main flex flex-col"},[t(M,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(he)},{default:h(()=>[t(ke,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(o(),c(Ne,{key:($=e(d))==null?void 0:$.no,"clicks-context":e(E)(e(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Be],512),s("div",De,[l.value&&v.value?(o(),c(M,{key:"next"},{default:h(()=>[(o(),c($e,{key:l.value[0].no,"clicks-context":v.value,route:l.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):F("v-if",!0),Pe]),w.value&&e(ce)?(o(),y("div",Re,[t(e(w))])):(o(),y("div",Te,[(o(),c(Ie,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:I({fontSize:`${e(ue)}em`}),"clicks-context":e(a)},null,8,["no","style","clicks-context"])),s("div",Ee,[t(B,{title:"Increase font size",onClick:e(de)},{default:h(()=>[t(b)]),_:1},8,["onClick"]),t(B,{title:"Decrease font size",onClick:e(pe)},{default:h(()=>[t(n)]),_:1},8,["onClick"]),F("v-if",!0)])])),s("div",Le,[t(be,{persist:!0}),Ve,s("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:p[2]||(p[2]=(...G)=>e(S)&&e(S)(...G))},[t(_,{class:"absolute"}),t(m,{class:"absolute opacity-0"})]),s("div",We,Y(e(W)),1)]),(o(),c(Fe,{key:2}))],2),s("div",qe,[s("div",{class:"progress h-3px bg-primary transition-all",style:I({width:`${(e(u)-1)/(e(L)-1)*100+1}%`})},null,4)])]),t(ge),t(ye),t(Ce)],64)}}}),Ze=me(Ge,[["__scopeId","data-v-162fa54b"]]);export{Ze as default};
