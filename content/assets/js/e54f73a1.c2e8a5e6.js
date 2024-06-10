"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60019],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=o,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const a={id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes",original_id:"deploy-kubernetes"},i=void 0,s={unversionedId:"deploy-kubernetes",id:"version-2.7.5/deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",description:"To get up and running with these charts as fast as possible, in a non-production use case, we provide",source:"@site/versioned_docs/version-2.7.5/deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/docs/2.7.5/deploy-kubernetes",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/deploy-kubernetes.md",tags:[],version:"2.7.5",frontMatter:{id:"deploy-kubernetes",title:"Deploy Pulsar on Kubernetes",sidebar_label:"Kubernetes",original_id:"deploy-kubernetes"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Amazon Web Services",permalink:"/docs/2.7.5/deploy-aws"},next:{title:"Bare metal",permalink:"/docs/2.7.5/deploy-bare-metal"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To get up and running with these charts as fast as possible, in a ",(0,o.yg)("strong",{parentName:"p"},"non-production")," use case, we provide\na ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.7.5/getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,o.yg)("p",null,"To configure and install a Pulsar cluster on Kubernetes for production usage, follow the complete ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.7.5/helm-install"},"Installation Guide"),"."))}d.isMDXComponent=!0}}]);