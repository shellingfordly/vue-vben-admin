import{a as e,i as l,o,j as i,k as s,w as t,p as n}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./index.654b393d.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.3c6fc756.js";import"./CheckOutlined.067219d5.js";import{s as a}from"./index.b29cbd78.js";import"./colors.8524fb6a.js";import"./RightOutlined.d099b71b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.21384945.js";import"./index.a172b251.js";import"./index.e933223f.js";import"./index.dc57452d.js";import"./UpOutlined.58b411ed.js";import"./index.22c58738.js";import"./index.c919bcdb.js";import"./index.84aedb45.js";import"./index.30ca2de4.js";import"./index.84128ec6.js";import{a as d}from"./index.9b3871aa.js";import"./CloseOutlined.05cd9c0c.js";import"./FullscreenOutlined.0c714ec6.js";import"./LoadingOutlined.9fecd770.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import"./index.6f3ebae1.js";import"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";import{u as p}from"./useForm.c75537b1.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],r=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:a,CollapseContainer:d},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:s}]=p({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[t]=p({labelWidth:120,schemas:r,actionColOptions:{span:24}});return{register:e,register1:t,schemas:c,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=n("更改字段3label"),j=n("同时更改字段3,4label"),h=n("往字段3后面插入字段10"),g=n("删除字段11");m.render=function(e,n,a,d,p,c){const r=l("a-button"),m=l("BasicForm"),P=l("CollapseContainer");return o(),i("div",f,[s("div",b,[s(r,{onClick:e.changeLabel3,class:"mr-2"},{default:t((()=>[u])),_:1},8,["onClick"]),s(r,{onClick:e.changeLabel34,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),s(r,{onClick:e.appendField,class:"mr-2"},{default:t((()=>[h])),_:1},8,["onClick"]),s(r,{onClick:e.deleteField,class:"mr-2"},{default:t((()=>[g])),_:1},8,["onClick"])]),s(P,{title:"动态表单示例,动态根据表单内其他值改变"},{default:t((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(P,{class:"mt-5",title:"componentProps动态改变"},{default:t((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;