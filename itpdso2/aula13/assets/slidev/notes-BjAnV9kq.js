import{h as B,i as D,j as U,k as E}from"../modules/unplugin-icons-B2Tx0k0p.js";import{d as H,t as y,S as L,y as r,D as V,o as u,b as j,e as o,h as C,A as l,l as s,k as _,c as b,x as w,F as A}from"../modules/vue-UikRbGhL.js";import{u as I,a as M,d as t,e as P,s as R,f as q}from"../index-D5HJSmoX.js";import{_ as G,C as J}from"./ClicksSlider-D6bFR1UK.js";import{_ as p}from"./IconButton.vue_vue_type_script_setup_true_lang-C1Lhpbv1.js";import"../modules/shiki-C18VZAhv.js";const K={class:"h-full pt-2 flex flex-col"},O={class:"flex-none border-t border-main",px3:"",py2:""},Q={class:"flex-none border-t border-main"},W={class:"flex gap-1 items-center px-6 py-3"},X=o("div",{class:"flex-auto"},null,-1),Y={class:"p2 text-center"},ae=H({__name:"notes",setup(Z){I({title:`Notes - ${R}`});const{slides:z,total:d}=M(),{isFullscreen:f,toggle:S}=q,m=y(),n=L("slidev-notes-font-size",18),a=r(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),v=r(()=>z.value.find(e=>e.no===a.value));V(a,()=>{var e;(e=m.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function F(){n.value=n.value-1}const x=r(()=>{var c,i;const e=((c=t.lastUpdate)==null?void 0:c.type)==="viewer"?t.viewerClicks:t.clicks,k=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return P(y(e),void 0,k)});return(e,k)=>{var h,g;const c=U,i=E,N=B,T=D;return u(),j(A,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(d)-1)*100+1}%`})},null,4),o("div",K,[o("div",{ref_key:"scroller",ref:m,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(n)}px`})},[s(G,{note:(h=v.value)==null?void 0:h.meta.slide.note,"note-html":(g=v.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",O,[s(J,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),o("div",Q,[o("div",W,[s(p,{title:l(f)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:_(()=>[l(f)?(u(),b(c,{key:0})):(u(),b(i,{key:1}))]),_:1},8,["title","onClick"]),s(p,{title:"Increase font size",onClick:$},{default:_(()=>[s(N)]),_:1}),s(p,{title:"Decrease font size",onClick:F},{default:_(()=>[s(T)]),_:1}),X,o("div",Y,w(a.value)+" / "+w(l(d)),1)])])])],64)}}});export{ae as default};
