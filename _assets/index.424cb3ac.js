import{a as e,i as t,o as a,j as s,k as r,w as i}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import{a as l}from"./index.9b3871aa.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import{B as o,t as c}from"./data.8c0e8b3d.js";var n=e({components:{BasicTree:o,CollapseContainer:l},setup:()=>({treeData:c})});const m={class:"flex p-4"};n.render=function(e,l,o,c,n,d){const p=t("BasicTree"),j=t("CollapseContainer");return a(),s("div",m,[r(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(p,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(p,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(p,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default n;