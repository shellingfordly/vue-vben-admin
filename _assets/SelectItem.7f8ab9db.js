let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aY as i,I as s,i as a,o as n,j as o,k as r,n as l,J as d,bi as p}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.654b393d.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.3c6fc756.js";import"./CheckOutlined.067219d5.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.671397e5.js";import"./index.abb0d4ce.js";import"./index.9b3871aa.js";import"./index.1a9db19f.js";import"./RightOutlined.689336d5.js";import"./SettingOutlined.8c9a98ac.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import"./useHeaderSetting.a3c9ee5a.js";import{b as c}from"./index.756e0075.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const j=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),o("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(c,d(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=j,u.__scopeId="data-v-6110ac28";export default u;