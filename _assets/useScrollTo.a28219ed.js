import{r as o,cN as t,f as a,Z as r}from"./index.683ee02b.js";import{r as s}from"./animation.ba961409.js";function n({el:n,to:c,duration:e=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;e=t(e)?500:e;const m=function(){if(!a(i))return;p+=20;const o=(t=p,c=u,b=f,(t/=e/2)<1?b/2*t*t+c:-b/2*(--t*(t-2)-1)+c);var t,c,b;((o,t)=>{o.scrollTop=t})(n,o),p<e&&a(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};