"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98372],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const i={id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"Monitoring",description:"Learn to monitor transactions in Pulsar."},a=void 0,c={unversionedId:"txn-monitor",id:"version-3.3.x/txn-monitor",title:"How to monitor transactions?",description:"Learn to monitor transactions in Pulsar.",source:"@site/versioned_docs/version-3.3.x/txn-monitor.md",sourceDirName:".",slug:"/txn-monitor",permalink:"/docs/3.3.x/txn-monitor",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/txn-monitor.md",tags:[],version:"3.3.x",frontMatter:{id:"txn-monitor",title:"How to monitor transactions?",sidebar_label:"Monitoring",description:"Learn to monitor transactions in Pulsar."},sidebar:"docsSidebar",previous:{title:"Advanced features",permalink:"/docs/3.3.x/txn-advanced-features"},next:{title:"Working principles",permalink:"/docs/3.3.x/txn-how"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can monitor the status of the transactions in Prometheus and Grafana using the ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.3.x/reference-metrics#pulsar-transaction"},"transaction metrics"),"."),(0,o.yg)("p",null,"For how to configure Prometheus and Grafana, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.3.x/deploy-monitoring"},"here"),"."))}m.isMDXComponent=!0}}]);