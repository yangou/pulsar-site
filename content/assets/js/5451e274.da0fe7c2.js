"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[72750],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(58168),o=(t(96540),t(15680));const a={},i="CVE-2024-27135: Apache Pulsar: Improper Input Validation in Pulsar Function Worker allows Remote Code Execution",l={unversionedId:"CVE-2024-27135",id:"CVE-2024-27135",title:"CVE-2024-27135: Apache Pulsar: Improper Input Validation in Pulsar Function Worker allows Remote Code Execution",description:"Severity: high",source:"@site/security/CVE-2024-27135.md",sourceDirName:".",slug:"/CVE-2024-27135",permalink:"/security/CVE-2024-27135",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"Credit:",id:"credit",level:2},{value:"References:",id:"references",level:2}],c={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cve-2024-27135-apache-pulsar-improper-input-validation-in-pulsar-function-worker-allows-remote-code-execution"},"CVE-2024-27135: Apache Pulsar: Improper Input Validation in Pulsar Function Worker allows Remote Code Execution"),(0,o.yg)("p",null,"Severity: high"),(0,o.yg)("h2",{id:"affected-versions"},"Affected versions:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar 2.4.0 before 2.10.6"),(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar 2.11.0 before 2.11.4"),(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar 3.0.0 before 3.0.3"),(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar 3.1.0 before 3.1.3"),(0,o.yg)("li",{parentName:"ul"},"Apache Pulsar 3.2.0 before 3.2.1")),(0,o.yg)("h2",{id:"description"},"Description:"),(0,o.yg)("p",null,'Improper input validation in the Pulsar Function Worker allows a malicious authenticated user to execute arbitrary Java code on the Pulsar Function worker, outside of the sandboxes designated for running user-provided functions. This vulnerability also applies to the Pulsar Broker when it is configured with "functionsWorkerEnabled=true".'),(0,o.yg)("p",null,"This issue affects Apache Pulsar versions from 2.4.0 to 2.10.5, from 2.11.0 to 2.11.3, from 3.0.0 to 3.0.2, from 3.1.0 to 3.1.2, and 3.2.0. "),(0,o.yg)("p",null,"2.10 Pulsar Function Worker users should upgrade to at least 2.10.6.",(0,o.yg)("br",null),"\n2.11 Pulsar Function Worker users should upgrade to at least 2.11.4.",(0,o.yg)("br",null),"\n3.0 Pulsar Function Worker users should upgrade to at least 3.0.3.",(0,o.yg)("br",null),"\n3.1 Pulsar Function Worker users should upgrade to at least 3.1.3.",(0,o.yg)("br",null),"\n3.2 Pulsar Function Worker users should upgrade to at least 3.2.1.",(0,o.yg)("br",null)),(0,o.yg)("p",null,"Users operating versions prior to those listed above should upgrade to the aforementioned patched versions or newer versions."),(0,o.yg)("h2",{id:"credit"},"Credit:"),(0,o.yg)("p",null,"Lari Hotari of StreamNative (finder)"),(0,o.yg)("h2",{id:"references"},"References:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/dh8nj2vmb2br6thjltq74lk9jxkz62wn"},"https://lists.apache.org/thread/dh8nj2vmb2br6thjltq74lk9jxkz62wn")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.cve.org/CVERecord?id=CVE-2024-27135"},"https://www.cve.org/CVERecord?id=CVE-2024-27135"))),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}d.isMDXComponent=!0}}]);