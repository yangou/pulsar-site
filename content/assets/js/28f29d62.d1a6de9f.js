"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74122],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const o={id:"reference-rest-api-overview",title:"Pulsar REST APIs",sidebar_label:"Pulsar REST APIs"},i=void 0,s={unversionedId:"reference-rest-api-overview",id:"version-2.5.2/reference-rest-api-overview",title:"Pulsar REST APIs",description:"A REST API (also known as RESTful API, REpresentational State Transfer Application Programming Interface) is a set of definitions and protocols for building and integrating application software, using HTTP requests to GET, PUT, POST, and DELETE data following the REST standards. In essence, REST API is a set of remote calls using standard methods to request and return data in a specific format between two systems.",source:"@site/versioned_docs/version-2.5.2/reference-rest-api-overview.md",sourceDirName:".",slug:"/reference-rest-api-overview",permalink:"/docs/2.5.2/reference-rest-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/reference-rest-api-overview.md",tags:[],version:"2.5.2",frontMatter:{id:"reference-rest-api-overview",title:"Pulsar REST APIs",sidebar_label:"Pulsar REST APIs"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Pulsar Metrics",permalink:"/docs/2.5.2/reference-metrics"}},p={},l=[],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A REST API (also known as RESTful API, REpresentational State Transfer Application Programming Interface) is a set of definitions and protocols for building and integrating application software, using HTTP requests to GET, PUT, POST, and DELETE data following the REST standards. In essence, REST API is a set of remote calls using standard methods to request and return data in a specific format between two systems."),(0,a.yg)("p",null,"Pulsar provides a variety of REST APIs that enable you to interact with Pulsar to retrieve information or perform an action."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"REST API category"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api/?version=2.5.2"},"Admin")),(0,a.yg)("td",{parentName:"tr",align:null},"REST APIs for administrative operations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/functions-rest-api/?version=2.5.2"},"Functions")),(0,a.yg)("td",{parentName:"tr",align:null},"REST APIs for function-specific operations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/source-rest-api/?version=2.5.2"},"Sources")),(0,a.yg)("td",{parentName:"tr",align:null},"REST APIs for source-specific operations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/sink-rest-api/?version=2.5.2"},"Sinks")),(0,a.yg)("td",{parentName:"tr",align:null},"REST APIs for sink-specific operations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/packages-rest-api/?version=2.5.2"},"Packages")),(0,a.yg)("td",{parentName:"tr",align:null},"REST APIs for package-specific operations. A package can be a group of functions, sources, and sinks.")))))}f.isMDXComponent=!0}}]);