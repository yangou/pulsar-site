"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88182],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44984:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},s=void 0,i={unversionedId:"sql-overview",id:"version-2.7.5/sql-overview",title:"Pulsar SQL Overview",description:"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Presto.",source:"@site/versioned_docs/version-2.7.5/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/docs/2.7.5/sql-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/sql-overview.md",tags:[],version:"2.7.5",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"CLI",permalink:"/docs/2.7.5/io-cli"},next:{title:"Query data",permalink:"/docs/2.7.5/sql-getting-started"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:r,...o}=e;return(0,a.yg)(p,(0,n.A)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.5/schema-get-started"},"Schema Registry"),", you can store structured data in Pulsar and query the data by using ",(0,a.yg)("a",{parentName:"p",href:"https://prestosql.io/"},"Presto"),"."),(0,a.yg)("p",null,"As the core of Pulsar SQL, Presto Pulsar connector enables Presto workers within a Presto cluster to query data from Pulsar."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(38583).A,width:"1847",height:"854"})),(0,a.yg)("p",null,"The query performance is efficient and highly scalable, because Pulsar adopts ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.5/concepts-architecture-overview#apache-bookkeeper"},"two level segment based architecture"),"."),(0,a.yg)("p",null,"Topics in Pulsar are stored as segments in ",(0,a.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. You can configure the number of BookKeeper nodes, and the default number is ",(0,a.yg)("inlineCode",{parentName:"p"},"3"),". In Presto Pulsar connector, data is read directly from BookKeeper, so Presto workers can read concurrently from horizontally scalable number BookKeeper nodes."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(14652).A,width:"1847",height:"854"})))}d.isMDXComponent=!0},14652:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},38583:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);