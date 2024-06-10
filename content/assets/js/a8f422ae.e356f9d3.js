"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69788],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},75848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={id:"setup-building",title:"Setup and building"},o=void 0,l={unversionedId:"setup-building",id:"setup-building",title:"Setup and building",description:"Prerequisites",source:"@site/contribute/setup-building.md",sourceDirName:".",slug:"/setup-building",permalink:"/contribute/setup-building",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-building.md",tags:[],version:"current",lastUpdatedBy:"Lari Hotari",lastUpdatedAt:1718045553,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"setup-building",title:"Setup and building"},sidebar:"sidebarDevelopment",previous:{title:"About",permalink:"/contribute/"},next:{title:"Setting up an IDE",permalink:"/contribute/setup-ide"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone",id:"clone",level:2},{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2},{value:"Connect",id:"connect",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Dependency"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Git"),(0,a.yg)("td",{parentName:"tr",align:null},"The source code of Pulsar is hosted on GitHub as a git repository. To work with the git repository, please ",(0,a.yg)("a",{parentName:"td",href:"https://git-scm.com/downloads"},"install git"),". We highly recommend that you also ",(0,a.yg)("a",{parentName:"td",href:"/contribute/setup-git#mergetool"},"set up a Git mergetool")," for resolving merge conflicts.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"JDK"),(0,a.yg)("td",{parentName:"tr",align:null},"The source code of Pulsar is primarily written in Java. Therefore, you need a working Java Development Kit (JDK) to build it. Pulsar requires ",(0,a.yg)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=17"},"JDK 17")," to build.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Maven"),(0,a.yg)("td",{parentName:"tr",align:null},"The source code of Pulsar is managed by ",(0,a.yg)("a",{parentName:"td",href:"https://maven.apache.org/"},"Apache Maven")," The required Maven version is 3.6.1+.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Zip"),(0,a.yg)("td",{parentName:"tr",align:null},"The build process requires Zip as a utility tool.")))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"On Windows, replace ",(0,a.yg)("inlineCode",{parentName:"p"},"./mvnw")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"mvnw.cmd")," in the commands below.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Pulsar does not support running server on Windows yet, you have to use Docker to run Pulsar.\nPlease consider checking ",(0,a.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/3.1.x/getting-started-docker/"},"Run Pulsar In Docker"))),(0,a.yg)("h2",{id:"clone"},"Clone"),(0,a.yg)("p",null,"Clone the source code to your development machine:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar\n")),(0,a.yg)("p",null,"The following commands are assumed to be executed from the project root directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd pulsar\n")),(0,a.yg)("h2",{id:"build"},"Build"),(0,a.yg)("p",null,"Compile and install to local Maven repository:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"./mvnw clean install -DskipTests\n")),(0,a.yg)("h2",{id:"run"},"Run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,a.yg)("h2",{id:"connect"},"Connect"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-shell\n")))}d.isMDXComponent=!0}}]);