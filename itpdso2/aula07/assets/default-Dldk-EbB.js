import{d,r as h,A as r,o as s,c as m,k,f as c,b as a,x as S,e as n,l as u,a6 as f,h as g}from"./modules/vue-DFtvZUzV.js";import{a as y}from"./index-BjH2gkN_.js";import{u as p}from"./slidev/context-vvkG9Mdf.js";const b=["href","innerHTML"],v=["href"],C=d({__name:"Link",props:{to:{},title:{}},setup(_){const{isPrintMode:e}=y();return(t,o)=>{const i=h("RouterLink");return!r(e)&&t.title?(s(),m(i,{key:0,to:String(t.to),onClick:o[0]||(o[0]=l=>l.target.blur()),innerHTML:t.title},null,8,["to","innerHTML"])):!r(e)&&!t.title?(s(),m(i,{key:1,to:String(t.to),onClick:o[1]||(o[1]=l=>l.target.blur())},{default:k(()=>[c(t.$slots,"default")]),_:3},8,["to"])):r(e)&&t.title?(s(),a("a",{key:2,href:`#${t.to}`,innerHTML:t.title},null,8,b)):(s(),a("a",{key:3,href:`#${t.to}`},[c(t.$slots,"default")],8,v))}}}),L=d({__name:"SlidesTotal",setup(_){const{$nav:e}=p();return(t,o)=>(s(),a("span",null,S(r(e).total),1))}}),T=d({__name:"SlideCurrentNo",setup(_){const{$page:e}=p();return(t,o)=>(s(),a("span",null,S(r(e)),1))}}),N="/itpdso2/aula07/assets/bg-default-DvKiuAYP.svg",M=n("div",{class:"absolute inset-0 z-1"},[n("img",{src:N,alt:""})],-1),z={class:"my-auto w-full z-2"},B={class:"absolute bottom-1 right-1 z-2 text-sm"},H=n("br",null,null,-1),V=n("br",null,null,-1),P={__name:"default",setup(_){return p(),(e,t)=>{const o=h("Scroll"),i=T,l=L,$=C;return s(),a("div",{class:"slidev-layout default grid",style:g(e.style)},[M,n("div",z,[c(e.$slots,"default")]),u(o),n("footer",B,[H,u($,{to:"2"},{default:k(()=>[u(i),f("/"),u(l)]),_:1}),f(),V])],4)}}};export{P as _};
