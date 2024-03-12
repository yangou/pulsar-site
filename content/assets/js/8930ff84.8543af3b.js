"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99791],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,y=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60867:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(58168),o=(t(96540),t(15680));const a={},i="CVE-2023-37579: Apache Pulsar Function Worker: Incorrect Authorization for Function Worker Can Leak Sink/Source Credentials",c={unversionedId:"CVE-2023-37579",id:"CVE-2023-37579",title:"CVE-2023-37579: Apache Pulsar Function Worker: Incorrect Authorization for Function Worker Can Leak Sink/Source Credentials",description:"Affected versions:",source:"@site/security/CVE-2023-37579.md",sourceDirName:".",slug:"/CVE-2023-37579",permalink:"/security/CVE-2023-37579",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"Credit:",id:"credit",level:2},{value:"References:",id:"references",level:2}],l={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cve-2023-37579-apache-pulsar-function-worker-incorrect-authorization-for-function-worker-can-leak-sinksource-credentials"},"CVE-2023-37579: Apache Pulsar Function Worker: Incorrect Authorization for Function Worker Can Leak Sink/Source Credentials"),(0,o.yg)("h2",{id:"affected-versions"},"Affected versions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar Function Worker before 2.10.4"),(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar Function Worker 2.11.0")),(0,o.yg)("h2",{id:"description"},"Description:"),(0,o.yg)("p",null,"Incorrect Authorization vulnerability in Apache Software Foundation Apache Pulsar Function Worker."),(0,o.yg)("p",null,"This issue affects Apache Pulsar: before 2.10.4, and 2.11.0."),(0,o.yg)("p",null,"Any authenticated user can retrieve a source's configuration or a sink's configuration without authorization. Many sources and sinks contain credentials in the configuration, which could lead to leaked credentials. This vulnerability is mitigated by the fact that there is not a known way for an authenticated user to enumerate another tenant's sources or sinks, meaning the source or sink name would need to be guessed in order to exploit this vulnerability."),(0,o.yg)("p",null,"The recommended mitigation for impacted users is to upgrade the Pulsar Function Worker to a patched version."),(0,o.yg)("p",null,"2.10 Pulsar Function Worker users should upgrade to at least 2.10.4.\\\n2.11 Pulsar Function Worker users should upgrade to at least 2.11.1.\\\n3.0 Pulsar Function Worker users are unaffected.\\\nAny users running the Pulsar Function Worker for 2.9.* and earlier should upgrade to one of the above patched versions.\\"),(0,o.yg)("h2",{id:"credit"},"Credit:"),(0,o.yg)("p",null,"Michael Marshall of DataStax (finder)"),(0,o.yg)("h2",{id:"references"},"References:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/0dmn3cb5n2p08o3cpj3ycfhzfqs2ppwz"},"https://lists.apache.org/thread/0dmn3cb5n2p08o3cpj3ycfhzfqs2ppwz")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.cve.org/CVERecord?id=CVE-2023-37579"},"https://www.cve.org/CVERecord?id=CVE-2023-37579"))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}f.isMDXComponent=!0}}]);