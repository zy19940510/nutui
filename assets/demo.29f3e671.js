var s=Object.assign;import{c as a}from"./mobile.4aa3e9b2.js";import{a as t,z as c,s as e,x as l,r as n,o,c as h,f as i,j as d,t as r,q as u}from"./vendor.80bf15c7.js";import"./index.42d325ee.js";const{createDemo:w}=a("switch");var b=w({props:{},setup(){const a=t({text:"开"});return s(s({},c(a)),{switchChange:(s,t)=>{a.text=t?"开":"关"},change:(s,a)=>{alert(`触发了change事件,开关状态：${a}`)}})}});const f=u("data-v-7bf1ebc0");e("data-v-7bf1ebc0");const g={class:"demo"},j=i("h2",null,"基础用法",-1),m=i("h2",null,"禁用状态",-1),p=i("h2",null,"change事件",-1),v=d(" chane "),x=i("h2",null,"自定义颜色",-1),_=d(" color "),C=i("h2",null,"支持文字",-1),S=d(" text ");l();const q=f(((s,a,t,c,e,l)=>{const u=n("nut-switch"),w=n("nut-cell");return o(),h("div",g,[j,i(w,{class:"switch-adjust"},{default:f((()=>[d(r(s.text)+" ",1),i(u,{onSwitchChange:s.switchChange,class:"switch-decoration"},null,8,["onSwitchChange"])])),_:1}),m,i(w,{class:"switch-adjust"},{default:f((()=>[d(r(s.text)+" ",1),i(u,{class:"switch-decoration",disable:""})])),_:1}),p,i(w,{class:"switch-adjust"},{default:f((()=>[v,i(u,{onSwitchChange:s.change,class:"switch-decoration"},null,8,["onSwitchChange"])])),_:1}),x,i(w,{class:"switch-adjust"},{default:f((()=>[_,i(u,{"active-color":"blue",class:"switch-decoration"})])),_:1}),C,i(w,{class:"switch-adjust"},{default:f((()=>[S,i(u,{class:"switch-decoration",label:"开    关"})])),_:1})])}));b.render=q,b.__scopeId="data-v-7bf1ebc0";export default b;
