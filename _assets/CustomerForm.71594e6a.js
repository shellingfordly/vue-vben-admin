import{a as e,M as s,aL as i,h as o,i as t,o as r,j as a,k as n,w as l}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./index.e03530a2.js";import"./Trigger.ac5d4b81.js";import"./omit.836c1bd6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./CheckOutlined.1be330dc.js";import{s as d}from"./index.9c067c1c.js";import"./colors.b0a3d4bc.js";import"./RightOutlined.9fa77bad.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.e1c0b789.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.bce375da.js";import"./UpOutlined.09ea3d5a.js";import"./index.9d3583b5.js";import"./index.f91ebcc0.js";import"./index.bfe08aa3.js";import"./index.658fe8df.js";import"./index.e33fc4bc.js";import{a as p}from"./index.92ed2934.js";import"./CloseOutlined.15684c2a.js";import"./FullscreenOutlined.fcdbf0a9.js";import"./LoadingOutlined.110c74b1.js";import"./RightOutlined.204b1f99.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./index.f8e54d62.js";import"./index.1fc7357a.js";import"./useWindowSizeFn.e0ce7d91.js";import{u as m}from"./useForm.ff1be0bc.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:d,CollapseContainer:p},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const j={class:"m-4"};u.render=function(e,s,i,o,d,p){const m=t("a-input"),c=t("BasicForm"),u=t("CollapseContainer");return r(),a("div",j,[n(u,{title:"自定义表单"},{default:l((()=>[n(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:s})=>[n(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;