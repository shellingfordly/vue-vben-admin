import{bg as e,cT as n,cR as t}from"./index.4a20657c.js";function i(i,s=150,r){let o=()=>{i()};const[a,c]=e(o,s,r);o=a;const d=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),c()};return n((()=>{d()})),t((()=>{m()})),[d,m]}export{i as u};