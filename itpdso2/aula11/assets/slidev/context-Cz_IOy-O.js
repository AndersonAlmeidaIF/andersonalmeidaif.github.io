import{a2 as n,a8 as r,t as u,y as j,ay as $,aD as v}from"../modules/vue-BRnwFeGr.js";import{W as p,a8 as C,aG as x,a6 as S,a4 as R,a5 as T,aH as l,a3 as k,aI as E,aJ as F}from"../index-CUMJKYxj.js";function g(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(k,void 0),m=n(p,u(1)),f=n(C,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{O as f,L as p,g as u};
