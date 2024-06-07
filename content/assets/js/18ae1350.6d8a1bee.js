"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66653],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>g});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?t.createElement(g,s(s({ref:r},u),{},{components:n})):t.createElement(g,s({ref:r},u))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88503:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(58168),o=(n(96540),n(15680));const i={id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",sidebar_label:"Configure function workers for geo-replicated clusters",description:"Configure function workers for geo-replicated clusters in Pulsar."},s=void 0,a={unversionedId:"functions-worker-for-geo-replication",id:"version-3.3.x/functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",description:"Configure function workers for geo-replicated clusters in Pulsar.",source:"@site/versioned_docs/version-3.3.x/functions-worker-for-geo-replication.md",sourceDirName:".",slug:"/functions-worker-for-geo-replication",permalink:"/docs/3.3.x/functions-worker-for-geo-replication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/functions-worker-for-geo-replication.md",tags:[],version:"3.3.x",frontMatter:{id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",sidebar_label:"Configure function workers for geo-replicated clusters",description:"Configure function workers for geo-replicated clusters in Pulsar."},sidebar:"docsSidebar",previous:{title:"Enable stateful functions",permalink:"/docs/3.3.x/functions-worker-stateful"},next:{title:"Troubleshooting",permalink:"/docs/3.3.x/functions-worker-troubleshooting"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When running multiple clusters tied together with ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.3.x/concepts-replication"},"geo replication"),", you need to use a different function namespace for each cluster. Otherwise, all functions share one namespace and potentially schedule assignments across clusters."),(0,o.yg)("p",null,"For example, if you have two clusters: ",(0,o.yg)("inlineCode",{parentName:"p"},"east-1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"west-1"),", you can configure the function workers for ",(0,o.yg)("inlineCode",{parentName:"p"},"east-1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"west-1")," respectively in the ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. This ensures the two different function workers use distinct sets of topics for their internal coordination."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"pulsarFunctionsCluster: east-1\npulsarFunctionsNamespace: public/functions-east-1\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"pulsarFunctionsCluster: west-1\npulsarFunctionsNamespace: public/functions-west-1\n")))}f.isMDXComponent=!0}}]);