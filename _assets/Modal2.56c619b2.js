import{a as e,i as s,o as t,j as o,w as i,k as r,J as a,p as l}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.9b3871aa.js";import"./CloseOutlined.05cd9c0c.js";import"./FullscreenOutlined.0c714ec6.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import{s as c,b as p}from"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";var d=e({components:{BasicModal:c},setup(){const[e,{closeModal:s,setModalProps:t}]=p();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const n=l("从内部关闭弹窗"),m=l("从内部修改title");d.render=function(e,l,c,p,d,j){const u=s("a-button"),M=s("BasicModal");return t(),o(M,a(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[r(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[n])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;