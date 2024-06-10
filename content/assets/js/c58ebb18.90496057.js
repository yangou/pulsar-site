"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29361],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44746:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const o={},i="CVE-2023-30428: Apache Pulsar Broker: Incorrect Authorization Validation for Rest Producer",l={unversionedId:"CVE-2023-30428",id:"CVE-2023-30428",title:"CVE-2023-30428: Apache Pulsar Broker: Incorrect Authorization Validation for Rest Producer",description:"Affected versions:",source:"@site/security/CVE-2023-30428.md",sourceDirName:".",slug:"/CVE-2023-30428",permalink:"/security/CVE-2023-30428",draft:!1,tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"Credit:",id:"credit",level:2},{value:"References:",id:"references",level:2}],u={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cve-2023-30428-apache-pulsar-broker-incorrect-authorization-validation-for-rest-producer"},"CVE-2023-30428: Apache Pulsar Broker: Incorrect Authorization Validation for Rest Producer"),(0,a.yg)("h2",{id:"affected-versions"},"Affected versions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar Broker 2.9.0 through 2.9.5"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar Broker 2.10.0 before 2.10.4"),(0,a.yg)("li",{parentName:"ul"},"Apache Pulsar Broker 2.11.0")),(0,a.yg)("h2",{id:"description"},"Description:"),(0,a.yg)("p",null,"Incorrect Authorization vulnerability in Apache Software Foundation Apache Pulsar Broker's Rest Producer allows authenticated user with a custom HTTP header to produce a message to any topic using the broker's admin role.\nThis issue affects Apache Pulsar Brokers: from 2.9.0 through 2.9.5, from 2.10.0 before 2.10.4, 2.11.0."),(0,a.yg)("p",null,"The vulnerability is exploitable when an attacker can connect directly to the Pulsar Broker. If an attacker is connecting through the Pulsar Proxy, there is no known way to exploit this authorization vulnerability."),(0,a.yg)("p",null,"There are two known risks for affected users. First, an attacker could produce garbage messages to any topic in the cluster. Second, an attacker could produce messages to the topic level policies topic for other tenants and influence topic settings that could lead to exfiltration and/or deletion of messages for other tenants."),(0,a.yg)("p",null,"2.8 Pulsar Broker users and earlier are unaffected.",(0,a.yg)("br",null),"\n2.9 Pulsar Broker users should upgrade to one of the patched versions.",(0,a.yg)("br",null),"\n2.10 Pulsar Broker users should upgrade to at least 2.10.4.",(0,a.yg)("br",null),"\n2.11 Pulsar Broker users should upgrade to at least 2.11.1.",(0,a.yg)("br",null),"\n3.0 Pulsar Broker users are unaffected.",(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"credit"},"Credit:"),(0,a.yg)("p",null,"Michael Marshall of DataStax (finder)"),(0,a.yg)("h2",{id:"references"},"References:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/v39hqtgrmyxr85rmofwvgrktnflbq3q5"},"https://lists.apache.org/thread/v39hqtgrmyxr85rmofwvgrktnflbq3q5")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cve.org/CVERecord?id=CVE-2023-30428"},"https://www.cve.org/CVERecord?id=CVE-2023-30428"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}f.isMDXComponent=!0}}]);