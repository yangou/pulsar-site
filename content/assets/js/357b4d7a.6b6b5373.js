"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21464],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),g=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(t),s=a,y=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},60800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=t(58168),a=(t(96540),t(15680));const l={id:"io-flume-source",title:"Flume source connector",sidebar_label:"Flume source connector",original_id:"io-flume-source"},o=void 0,i={unversionedId:"io-flume-source",id:"version-2.5.1/io-flume-source",title:"Flume source connector",description:"The Flume source connector pulls messages from logs to Pulsar topics.",source:"@site/versioned_docs/version-2.5.1/io-flume-source.md",sourceDirName:".",slug:"/io-flume-source",permalink:"/docs/2.5.1/io-flume-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-flume-source.md",tags:[],version:"2.5.1",frontMatter:{id:"io-flume-source",title:"Flume source connector",sidebar_label:"Flume source connector",original_id:"io-flume-source"}},u={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],p={toc:g},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Flume source connector pulls messages from logs to Pulsar topics."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The configuration of the Flume source connector has the following properties."),(0,a.yg)("h3",{id:"property"},"Property"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"name")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The name of the agent.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"confFile")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The configuration file.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"noReloadConf")),(0,a.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to reload configuration file if changed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"zkConnString")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The ZooKeeper connection.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"zkBasePath")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The base path in ZooKeeper for agent configuration.")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Before using the Flume source connector, you need to create a configuration file through one of the following methods."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information about the ",(0,a.yg)("inlineCode",{parentName:"p"},"source.conf")," in the example below, see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/resources/flume/source.conf"},"here"),".")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JSON"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "name": "a1",\n    "confFile": "source.conf",\n    "noReloadConf": "false",\n    "zkConnString": "",\n    "zkBasePath": ""\n}\n\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"YAML"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    name: a1\n    confFile: source.conf\n    noReloadConf: false\n    zkConnString: ""\n    zkBasePath: ""\n\n')))))}m.isMDXComponent=!0}}]);