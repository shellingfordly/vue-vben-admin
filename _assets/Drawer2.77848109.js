import{a as r,i as e,o as s,j as t,w as a,k as i,J as o,p as n}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.abb0d4ce.js";import"./index.9b3871aa.js";import{s as c,a as m}from"./index.1a9db19f.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";var p=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=m();return{register:r,closeDrawer:e}}});const d=n(" Drawer Info. "),l=n("内部关闭drawer");p.render=function(r,n,c,m,p,j){const u=e("a-button"),b=e("BasicDrawer");return s(),t(b,o(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[d,i(u,{type:"primary",onClick:r.closeDrawer},{default:a((()=>[l])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;