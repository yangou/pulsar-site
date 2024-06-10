"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16155],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31664:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(58168),l=(t(96540),t(15680));const a={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},o=void 0,i={unversionedId:"helm-install",id:"version-2.6.2/helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/versioned_docs/version-2.6.2/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/docs/2.6.2/helm-install",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/helm-install.md",tags:[],version:"2.6.2",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Prepare",permalink:"/docs/2.6.2/helm-prepare"},next:{title:"Deployment",permalink:"/docs/2.6.2/helm-deploy"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Pulsar deployment",id:"pulsar-deployment",level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",level:2}],p={toc:u},c="wrapper";function m(e){let{components:r,...t}=e;return(0,l.yg)(c,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,l.yg)("h2",{id:"requirements"},"Requirements"),(0,l.yg)("p",null,"To deploy Apache Pulsar on Kubernetes, the followings are required."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"kubectl 1.14 or higher, compatible with your cluster (",(0,l.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,l.yg)("li",{parentName:"ul"},"Helm v3 (3.0.2 or higher)"),(0,l.yg)("li",{parentName:"ul"},"A Kubernetes cluster, version 1.14 or higher")),(0,l.yg)("h2",{id:"environment-setup"},"Environment setup"),(0,l.yg)("p",null,"Before deploying Pulsar, you need to prepare your environment."),(0,l.yg)("h3",{id:"tools"},"Tools"),(0,l.yg)("p",null,"Install ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.6.2/helm-tools"},(0,l.yg)("inlineCode",{parentName:"a"},"helm"))," and ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.6.2/helm-tools"},(0,l.yg)("inlineCode",{parentName:"a"},"kubectl"))," on your computer."),(0,l.yg)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Kubernetes 1.14 or higher is required.")),(0,l.yg)("p",null,"To create and connect to the Kubernetes cluster, follow the instructions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/2.6.2/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,l.yg)("h2",{id:"pulsar-deployment"},"Pulsar deployment"),(0,l.yg)("p",null,"Once the environment is set up and configuration is generated, you can now proceed to the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.6.2/helm-deploy"},"deployment of Pulsar"),"."),(0,l.yg)("h2",{id:"pulsar-upgrade"},"Pulsar upgrade"),(0,l.yg)("p",null,"To upgrade an existing Kubernetes installation, follow the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.6.2/helm-upgrade"},"upgrade documentation"),"."))}m.isMDXComponent=!0}}]);