"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83248],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const i={id:"client-websocket-2.10.1",title:"Client Websocket 2.10.1",sidebar_label:"Client Websocket 2.10.1"},a=void 0,c={unversionedId:"versioned/client-websocket-2.10.1",id:"versioned/client-websocket-2.10.1",title:"Client Websocket 2.10.1",description:"- fix Fix MultiTopicReader#getConsumer ClassCastException 15534",source:"@site/release-notes/versioned/client-websocket-2.10.1.md",sourceDirName:"versioned",slug:"/versioned/client-websocket-2.10.1",permalink:"/release-notes/versioned/client-websocket-2.10.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-websocket-2.10.1.md",tags:[],version:"current",frontMatter:{id:"client-websocket-2.10.1",title:"Client Websocket 2.10.1",sidebar_label:"Client Websocket 2.10.1"}},l={},s=[],p={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"[fix][webSocket]"," Fix MultiTopicReader#getConsumer ClassCastException ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15534"},"15534")),(0,o.yg)("li",{parentName:"ul"},"[improve][webSocket]"," Add KeyStore support in WebSocket, Function Worker HTTPS Servers  ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15084"},"15084")),(0,o.yg)("li",{parentName:"ul"},"[fix][webSocket]"," Fix ",(0,o.yg)("inlineCode",{parentName:"li"},"ClassCastException")," when user create ",(0,o.yg)("inlineCode",{parentName:"li"},"MultiTopicReader")," ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14316"},"14316"))))}b.isMDXComponent=!0}}]);