import{a as e,i as t,o as i,j as s,k as o,w as r,p as d,n as a}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./useSortable.5a56f59b.js";import"./index.654b393d.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.3c6fc756.js";import"./CheckOutlined.067219d5.js";import"./index.b29cbd78.js";import"./colors.8524fb6a.js";import"./index.cdfe0513.js";import"./RightOutlined.d099b71b.js";import"./index.57fc23bf.js";import"./types.673b61b5.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./_baseFor.f4e5f03f.js";import"./index.21384945.js";import"./index.a172b251.js";import"./index.e933223f.js";import"./index.dc57452d.js";import"./UpOutlined.58b411ed.js";import"./LeftOutlined.ce78ebb0.js";import"./index.22c58738.js";import{T as m}from"./index.c919bcdb.js";import"./index.671397e5.js";import"./index.84aedb45.js";import"./index.feb3e3f8.js";import"./zh_CN.0242bd16.js";import"./index.30ca2de4.js";import"./index.84128ec6.js";import"./CaretDownFilled.f0eb07fb.js";import"./index.9b3871aa.js";import"./CheckOutlined.524ab7ba.js";import"./CloseOutlined.05cd9c0c.js";import{s as n,T as p}from"./index.e347fb01.js";import"./FullscreenOutlined.0c714ec6.js";import"./LeftOutlined.f21a39f1.js";import"./LoadingOutlined.9fecd770.js";import"./TableAction.77fc78bd.js";import"./RightOutlined.689336d5.js";import"./SettingOutlined.8c9a98ac.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import"./index.6f3ebae1.js";import"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";import"./useForm.c75537b1.js";import"./uuid.40269c00.js";import"./useExpose.86fc274f.js";import{u as c}from"./useTable.c7a86e81.js";import{d as j}from"./table.d48ba3c8.js";const l=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var b=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=c({title:"自定义列内容",api:j,columns:l,bordered:!0});return{registerTable:e}}});const u={class:"p-4"};b.render=function(e,m,n,p,c,j){const l=t("Tag"),b=t("TableImg"),f=t("BasicTable");return i(),s("div",u,[o(f,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+a(e.id),1)])),no:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),img:r((()=>[o(b,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[o(l,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default b;