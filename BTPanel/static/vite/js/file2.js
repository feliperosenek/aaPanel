import{at as s,au as e}from"./index.js?v=1721298337096";const{t:i}=s.global,t=s=>e.post("/files?action=GetDir",s),a=s=>e.post("/files?action=GetDir",{...s,disk:!0}),o=s=>e.post("/files?action=DeleteFile",s,{requestOptions:{loading:i("WP.api.tamper_8"),successMessage:!0}}),l=()=>e.post("/files?action=Get_Recycle_bin"),n=s=>e.post("/files?action=GetFileBody",s),p=s=>e.post("/files?action=SaveFileBody",s,{requestOptions:{loading:i("Site.Api.Index_2"),errorMessage:{close:!0}}}),c=s=>e.post("/files?action=upload",s,{requestOptions:{loading:i("Global.Api.Index_4"),successMessage:!0}});export{t as a,l as b,a as c,o as d,n as g,p as s,c as u};