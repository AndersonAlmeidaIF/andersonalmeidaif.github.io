import{a2 as n,a8 as r,t as u,y as j,ay as v,aC as $}from"../modules/vue-CHtwQYR-.js";import{W as p,a8 as C,av as x,a6 as S,a4 as R,a5 as T,aw as l,a3 as k,ax as y,ay as E}from"../index-BvL623Bj.js";function F(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(k,void 0),m=n(p,u(1)),f=n(C,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;v(l,t);const{$slidev:a,$page:s}=F(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,a){return{...$(t,a===0?y:E),frontmatter:t}}export{b as f,O as p,F as u};
