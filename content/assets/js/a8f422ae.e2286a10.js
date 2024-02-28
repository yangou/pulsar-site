"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"setup-building",title:"Setup and building"},l=void 0,o={unversionedId:"setup-building",id:"setup-building",title:"Setup and building",description:"Prerequisites",source:"@site/contribute/setup-building.md",sourceDirName:".",slug:"/setup-building",permalink:"/contribute/setup-building",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-building.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1709098791,formattedLastUpdatedAt:"Feb 28, 2024",frontMatter:{id:"setup-building",title:"Setup and building"},sidebar:"sidebarDevelopment",previous:{title:"About",permalink:"/contribute/"},next:{title:"Setting up an IDE",permalink:"/contribute/setup-ide"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone",id:"clone",level:2},{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2},{value:"Connect",id:"connect",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Dependency"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Git"),(0,a.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is hosted on GitHub as a git repository. To work with the git repository, please ",(0,a.kt)("a",{parentName:"td",href:"https://git-scm.com/downloads"},"install git"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JDK"),(0,a.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is primarily written in Java. Therefore, you need a working Java Development Kit (JDK) to build it. Pulsar requires ",(0,a.kt)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=17"},"JDK 17")," to build.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maven"),(0,a.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is managed by ",(0,a.kt)("a",{parentName:"td",href:"https://maven.apache.org/"},"Apache Maven")," The required Maven version is 3.6.1+.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zip"),(0,a.kt)("td",{parentName:"tr",align:null},"The build process requires Zip as a utility tool.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"On Windows, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"./mvnw")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"mvnw.cmd")," in the commands below.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Pulsar does not support running server on Windows yet, you have to use Docker to run Pulsar.\nPlease consider checking ",(0,a.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/3.1.x/getting-started-docker/"},"Run Pulsar In Docker"))),(0,a.kt)("h2",{id:"clone"},"Clone"),(0,a.kt)("p",null,"Clone the source code to your development machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar\n")),(0,a.kt)("p",null,"The following commands are assumed to be executed from the project root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar\n")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"Compile and install to local Maven repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw clean install -DskipTests\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,a.kt)("h2",{id:"connect"},"Connect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-shell\n")))}c.isMDXComponent=!0}}]);