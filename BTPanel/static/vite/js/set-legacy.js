System.register(["./index-legacy.js?v=1721298337096","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1721298337096","./site-legacy2.js?v=1721298337096","./useTableColumns-legacy.js?v=1721298337096","./useTableData-legacy.js?v=1721298337096","./vue-legacy.js?v=1721298337096","./DataTable-legacy.js?v=1721298337096","./pinia-legacy.js?v=1721298337096","./Progress-legacy.js?v=1721298337096","./Skeleton-legacy.js?v=1721298337096","./Checkbox-legacy.js?v=1721298337096","./Ellipsis-legacy.js?v=1721298337096","./Select-legacy.js?v=1721298337096","./Tag-legacy.js?v=1721298337096","./Empty-legacy.js?v=1721298337096","./omit-legacy.js?v=1721298337096"],(function(e,a){"use strict";var l,t,i,n,s,d,u,c,o,r,m,p,g,y,_,v,b,x,h,f,w,j,P,S,k,C,H,$,T,q,D;return{setters:[e=>{l=e.g,t=e.h,i=e.k,n=e.n,s=e.ab,d=e.B,u=e.G,c=e.q},e=>{o=e._,r=e.a},e=>{m=e.ba,p=e.g,g=e.bb,y=e.bc},e=>{_=e.b},e=>{v=e.u},e=>{b=e.l,x=e.ad,h=e.r,f=e.f,w=e.S,j=e.Z,P=e.P,S=e.V,k=e._,C=e.W,H=e.b,$=e.q,T=e.a3,q=e.t},e=>{D=e.N},null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"p-20px"},E={class:"flex-1"},U={class:"mt-12px"},N={class:"px-20px pt-24px pb-8px"},A={class:"w-150px"};e("default",b({__name:"set",props:{data:{}},setup(e){const{t:b}=x(),B=e,{setOptions:G}=B.data,O=h(""),R=async()=>{const e=O.value.trim();""!==e?(await g({name:e}),O.value="",await K(),G?.(I.data)):n.error(b("Site.PHP.index_46"))},V=l(),W=h(null),Z=f({id:-1,name:""}),z={name:{required:!0,message:b("Site.PHP.index_46"),trigger:["blur","change"]}},F=async({hide:e})=>{await(W.value?.validate()),await y(q(Z)),await K(),G?.(I.data),e()},{table:I,columns:J}=v([{key:"name",title:"Name"},_({width:80,options:e=>[{label:"Edit",disabled:0===e.id,onClick:()=>{(e=>{Z.id=e.id,Z.name=e.name,V.title=`${b("Site.PHP.index_48")} [${e.name}]`,V.show=!0})(e)}},{label:"Del",disabled:0===e.id,onClick:()=>{t({title:`${b("Site.PHP.index_49")} [${e.name}]`,content:b("Site.PHP.index_50"),onConfirm:async({hide:a})=>{await m({id:e.id}),await K(),G?.(I.data,e.id),a()}})}}]})]),K=async()=>{const{message:e}=await p();I.data=i(e)?e:[]};return K(),(e,l)=>{const t=s,i=d,n=u,m=D,p=o,g=r,y=c;return w(),j("div",a,[P(n,null,{default:S((()=>[k("div",E,[P(t,{value:C(O),"onUpdate:value":l[0]||(l[0]=e=>H(O)?O.value=e:null),placeholder:e.$t("Site.PHP.index_46")},null,8,["value","placeholder"])]),k("div",null,[P(i,{type:"primary",onClick:R},{default:S((()=>[$(T(e.$t("Site.Cert.Add")),1)])),_:1})])])),_:1}),k("div",U,[P(m,{"max-height":300,data:C(I).data,columns:C(J)},null,8,["data","columns"])]),P(y,{show:C(V).show,"onUpdate:show":l[2]||(l[2]=e=>C(V).show=e),title:C(V).title,width:350,footer:!0,onConfirm:F},{default:S((()=>[k("div",N,[P(g,{ref_key:"formRef",ref:W,model:C(Z),rules:z},{default:S((()=>[P(p,{label:e.$t("Site.PHP.index_47"),path:"name"},{default:S((()=>[k("div",A,[P(t,{value:C(Z).name,"onUpdate:value":l[1]||(l[1]=e=>C(Z).name=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])])),_:1},8,["show","title"])])}}}))}}}));