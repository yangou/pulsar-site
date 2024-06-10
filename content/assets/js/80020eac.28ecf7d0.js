"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52384],{15680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>h});var r=n(96540);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=p(n),f=i,h=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(h,a(a({ref:e},u),{},{components:n})):r.createElement(h,a({ref:e},u))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[l]="string"==typeof t?t:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7369:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const o={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},a=void 0,c={unversionedId:"concepts-authentication",id:"version-2.6.1/concepts-authentication",title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants.",source:"@site/versioned_docs/version-2.6.1/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/docs/2.6.1/concepts-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/concepts-authentication.md",tags:[],version:"2.6.1",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Multi Tenancy",permalink:"/docs/2.6.1/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/docs/2.6.1/concepts-topic-compaction"}},s={},p=[],u={toc:p},l="wrapper";function d(t){let{components:e,...n}=t;return(0,i.yg)(l,(0,r.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Pulsar supports a pluggable ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.6.1/security-overview"},"authentication")," mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants."))}d.isMDXComponent=!0}}]);