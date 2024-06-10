"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22959],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,g=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},78447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={},o="Disabled Certificate Validation makes Broker, Proxy Admin Clients vulnerable to MITM attack (CVE-2022-33683)",l={unversionedId:"CVE-2022-33683",id:"CVE-2022-33683",title:"Disabled Certificate Validation makes Broker, Proxy Admin Clients vulnerable to MITM attack (CVE-2022-33683)",description:"PRODUCT AFFECTED:",source:"@site/security/CVE-2022-33683.md",sourceDirName:".",slug:"/CVE-2022-33683",permalink:"/security/CVE-2022-33683",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"PRODUCT AFFECTED:",id:"product-affected",level:2},{value:"PROBLEM:",id:"problem",level:2},{value:"WORKAROUND:",id:"workaround",level:2},{value:"RELATED LINKS:",id:"related-links",level:2},{value:"ACKNOWLEDGEMENTS:",id:"acknowledgements",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"disabled-certificate-validation-makes-broker-proxy-admin-clients-vulnerable-to-mitm-attack-cve-2022-33683"},"Disabled Certificate Validation makes Broker, Proxy Admin Clients vulnerable to MITM attack (CVE-2022-33683)"),(0,a.yg)("h2",{id:"product-affected"},"PRODUCT AFFECTED:"),(0,a.yg)("p",null,"This issue affects Apache Pulsar 2.10, 2.6 and earlier, 2.7, 2.8, 2.9."),(0,a.yg)("h2",{id:"problem"},"PROBLEM:"),(0,a.yg)("p",null,"Severity: high"),(0,a.yg)("p",null,"Apache Pulsar Brokers and Proxies create an internal Pulsar Admin Client that does not verify peer TLS certificates, even when ",(0,a.yg)("inlineCode",{parentName:"p"},"tlsAllowInsecureConnection")," is disabled via configuration. The Pulsar Admin Client's intra-cluster and geo-replication HTTPS connections are vulnerable to man in the middle attacks, which could leak authentication data, configuration data, and any other data sent by these clients."),(0,a.yg)("p",null,"An attacker can only take advantage of this vulnerability by taking control of a machine 'between' the client and the server. The attacker must then actively manipulate traffic to perform the attack."),(0,a.yg)("p",null,"This issue affects Apache Pulsar Broker and Proxy versions 2.7.0 to 2.7.4; 2.8.0 to 2.8.3; 2.9.0 to 2.9.2; 2.10.0; 2.6.4 and earlier."),(0,a.yg)("p",null,"This issue has been assigned ",(0,a.yg)("a",{parentName:"p",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33683"},"CVE-2022-33683"),"."),(0,a.yg)("h2",{id:"workaround"},"WORKAROUND:"),(0,a.yg)("p",null,"Any users running affected versions of the Pulsar Broker or Pulsar Proxy should rotate static authentication data vulnerable to man in the middle attacks used by these applications, including tokens and passwords."),(0,a.yg)("p",null,"2.7 users should upgrade Pulsar Brokers and Proxies to 2.7.5, and rotate vulnerable authentication data, including tokens and passwords."),(0,a.yg)("p",null,"2.8 users should upgrade Pulsar Brokers and Proxies to 2.8.4, and rotate vulnerable authentication data, including tokens and passwords."),(0,a.yg)("p",null,"2.9 users should upgrade Pulsar Brokers and Proxies to 2.9.3, and rotate vulnerable authentication data, including tokens and passwords."),(0,a.yg)("p",null,"2.10 users should upgrade Pulsar Brokers and Proxies to 2.10.1, and rotate vulnerable authentication data, including tokens and passwords."),(0,a.yg)("p",null,"Any users running Pulsar Brokers and Proxies for 2.6 and earlier should upgrade to one of the above patched versions, and rotate vulnerable authentication data, including tokens and passwords."),(0,a.yg)("p",null,"In addition to upgrading, it is also necessary to enable hostname verification to prevent man in the middle attacks. Please see CVE-2022-33682 for more information."),(0,a.yg)("h2",{id:"related-links"},"RELATED LINKS:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-33683"},"CVE-2022-33683 at cve.mitre.org")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://lists.apache.org/thread/42v5rsxj36r3nhfxhmhb2x12r5jmvx3x"},"https://lists.apache.org/thread/42v5rsxj36r3nhfxhmhb2x12r5jmvx3x"))),(0,a.yg)("h2",{id:"acknowledgements"},"ACKNOWLEDGEMENTS:"),(0,a.yg)("p",null,"This issue was discovered by Michael Marshall of DataStax."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/security/"},"Security Advisories")))}p.isMDXComponent=!0}}]);