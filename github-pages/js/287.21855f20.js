"use strict";(globalThis["webpackChunkkao"]=globalThis["webpackChunkkao"]||[]).push([[287],{1569:(e,o,t)=>{t.d(o,{hi:()=>n});var l=t(3340),a=t(8329);const n=a.ZP.create({baseURL:"https://world.openfoodfacts.org/"});(0,l.xr)((({app:e})=>{e.config.globalProperties.$axios=a.ZP,e.config.globalProperties.$api=n}))},8287:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var l=t(9835),a=t(6970);const n=["src"],i=(0,l._)("hr",{style:{"flex-basis":"100%",height:"0",margin:"0",border:"0"}},null,-1),s=(0,l._)("hr",{style:{"flex-basis":"100%",height:"0",margin:"0",border:"0"}},null,-1);function r(e,o,t,r,u,p){const d=(0,l.up)("q-icon"),g=(0,l.up)("q-select"),c=(0,l.up)("q-btn"),h=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(h,{class:"flex flex-center"},{default:(0,l.w5)((()=>[(0,l._)("img",{alt:"KAO logo",src:e.$q.dark.isActive?"logos/tu_logo_kao_dark.svg":"logos/tu_logo_kao.svg",style:{width:"200px",height:"200px","margin-top":"10em"}},null,8,n),i,(0,l.Wm)(g,{rounded:"",outlined:"",modelValue:e.model,"onUpdate:modelValue":[o[0]||(o[0]=o=>e.model=o),o[1]||(o[1]=o=>e.changeURL(o))],options:e.options,label:"Choose language","transition-show":"jump-up","transition-hide":"jump-up",style:{width:"250px"},behavior:"menu","option-value":"id","option-label":"name","emit-value":"","map-options":"",onFilter:e.filterFn,onFilterAbort:e.abortFilterFn},{prepend:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"language"})])),_:1},8,["modelValue","options","onFilter","onFilterAbort"]),s,(0,l.Wm)(c,{rounded:"",color:"primary",size:"lg",to:"product/search"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.$t("GET STARTED")),1)])),_:1})])),_:1})}t(9665);var u=t(499),p=t(1569),d=t(9302);const g=(0,l.aZ)({name:"IndexPage",setup(){const e=(0,d.Z)(),o=[];let t;const l=(0,u.iH)(null);return p.hi.get("data/taxonomies/languages.json").then((e=>{t=Object.values(e.data),t.forEach((e=>{let t={id:e.language_code_2.en,name:e.name.en};o.push(t)})),o.sort(((e,o)=>e.name>o.name?1:-1))})).catch((()=>{e.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})),{model:(0,u.iH)(null),options:l,filterFn(e,t){null===l.value?setTimeout((()=>{t((()=>{l.value=o}))}),2e3):t()},abortFilterFn(){console.log("delayed filter aborted")}}},methods:{changeURL(e){p.hi.defaults.baseURL=`https://${e}.openfoodfacts.org/`,this.$i18n.locale=e,console.log(p.hi.defaults.baseURL),console.log(this.$i18n.locale)}}});var c=t(1639),h=t(9885),m=t(6743),b=t(2857),f=t(4455),v=t(9984),_=t.n(v);const k=(0,c.Z)(g,[["render",r]]),w=k;_()(g,"components",{QPage:h.Z,QSelect:m.Z,QIcon:b.Z,QBtn:f.Z})}}]);