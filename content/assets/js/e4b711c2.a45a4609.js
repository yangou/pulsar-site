"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43948],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),c=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(g.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),y=a,m=s["".concat(g,".").concat(y)]||s[y]||u[y]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},98723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={id:"io-mongo-source",title:"MongoDB source connector",sidebar_label:"MongoDB source connector"},l=void 0,i={unversionedId:"io-mongo-source",id:"version-3.3.x/io-mongo-source",title:"MongoDB source connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.3.x/io-mongo-source.md",sourceDirName:".",slug:"/io-mongo-source",permalink:"/docs/3.3.x/io-mongo-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/io-mongo-source.md",tags:[],version:"3.3.x",frontMatter:{id:"io-mongo-source",title:"MongoDB source connector",sidebar_label:"MongoDB source connector"}},g={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],p={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,a.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,a.yg)("p",null,"The MongoDB source connector pulls documents from MongoDB and persists the messages to Pulsar topics."),(0,a.yg)("p",null,"This guide explains how to configure and use the MongoDB source connector."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The configuration of the MongoDB source connector has the following properties."),(0,a.yg)("h3",{id:"property"},"Property"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"mongoUri")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The MongoDB URI to which the connector connects. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"For more information, see ",(0,a.yg)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"connection string URI format"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"database")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The name of the watched database. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"If this field is not set, the source connector will watch the entire MongoDB for all changes.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"collection")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The name of the watched collection. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"If this field is not set, the source connector will watch the database for all changes.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"syncType")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},'"INCR_SYNC"'),(0,a.yg)("td",{parentName:"tr",align:null},"The synchronization type between MongoDB and Pulsar: full synchronization or incremental synchronization. ",(0,a.yg)("br",null),(0,a.yg)("br",null)," Valid values are ",(0,a.yg)("inlineCode",{parentName:"td"},"full_sync"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"FULL_SYNC"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"incr_sync")," and ",(0,a.yg)("inlineCode",{parentName:"td"},"INCR_SYNC"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"100"),(0,a.yg)("td",{parentName:"tr",align:null},"The batch size of pulling documents from collections.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"1000"),(0,a.yg)("td",{parentName:"tr",align:null},"The batch operation interval in milliseconds.")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Before using the Mongo source connector, you need to create a configuration file through one of the following methods."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JSON"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "mongoUri": "mongodb://localhost:27017",\n      "database": "pulsar",\n      "collection": "messages",\n      "syncType": "full_sync",\n      "batchSize": "2",\n      "batchTimeMs": "500"\n   }\n}\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"YAML"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    mongoUri: "mongodb://localhost:27017"\n    database: "pulsar"\n    collection: "messages"\n    syncType: "full_sync",\n    batchSize: 2\n    batchTimeMs: 500\n')))))}u.isMDXComponent=!0}}]);