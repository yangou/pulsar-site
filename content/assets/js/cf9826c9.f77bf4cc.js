"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,b=p["".concat(a,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(b,u(u({ref:t},d),{},{components:r})):n.createElement(b,u({ref:t},d))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:i,u[1]=c;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={id:"functions-debug-stderr",title:"Debug with captured stderr",sidebar_label:"Debug with captured stderr",description:"Debug functions with captured stderr in Pulsar."},u=void 0,c={unversionedId:"functions-debug-stderr",id:"version-3.2.x/functions-debug-stderr",title:"Debug with captured stderr",description:"Debug functions with captured stderr in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-debug-stderr.md",sourceDirName:".",slug:"/functions-debug-stderr",permalink:"/docs/3.2.x/functions-debug-stderr",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-debug-stderr.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-debug-stderr",title:"Debug with captured stderr",sidebar_label:"Debug with captured stderr",description:"Debug functions with captured stderr in Pulsar."},sidebar:"docsSidebar",previous:{title:"How to debug",permalink:"/docs/3.2.x/functions-debug"},next:{title:"Debug with unit test",permalink:"/docs/3.2.x/functions-debug-unit-test"}},a={},s=[],d={toc:s},p="wrapper";function l(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To debug why a function fails to start, you can find function startup information and captured stderr output in the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs/functions/<tenant>/<namespace>/<function>/<function>-<instance>.log")," file."))}l.isMDXComponent=!0}}]);