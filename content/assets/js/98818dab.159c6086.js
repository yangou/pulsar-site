"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54116],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),d=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(g.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),y=r,s=m["".concat(g,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const l={id:"io-hbase",title:"hbase Connector",sidebar_label:"hbase Connector",original_id:"io-hbase"},i=void 0,o={unversionedId:"io-hbase",id:"version-2.3.1/io-hbase",title:"hbase Connector",description:"Sink",source:"@site/versioned_docs/version-2.3.1/io-hbase.md",sourceDirName:".",slug:"/io-hbase",permalink:"/docs/2.3.1/io-hbase",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-hbase.md",tags:[],version:"2.3.1",frontMatter:{id:"io-hbase",title:"hbase Connector",sidebar_label:"hbase Connector",original_id:"io-hbase"}},g={},d=[{value:"Sink",id:"sink",level:2},{value:"Sink Configuration Options",id:"sink-configuration-options",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"sink"},"Sink"),(0,r.yg)("p",null,"The hbase Sink Connector is used to pull messages from Pulsar topics and persist the messages\nto a hbase table."),(0,r.yg)("h2",{id:"sink-configuration-options"},"Sink Configuration Options"),(0,r.yg)("p",null,"All the Hbase sink settings are listed as below. All the settings are required to run a Hbase sink."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hbaseConfigResources")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase system configuration 'hbase-site.xml' file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"zookeeperQuorum")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase system configuration about hbase.zookeeper.quorum value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"zookeeperClientPort")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"2181")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase system configuration about hbase.zookeeper.property.clientPort value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"zookeeperZnodeParent")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/hbase")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase system configuration about zookeeper.znode.parent value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tableName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase table, value is namespace:tableName, namespace default value is default.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rowKeyName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase table rowkey name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"familyName")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase table column family name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"qualifierNames")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase table column qualifier names.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timeoutMs")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"1000l")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"hbase table operation timeout in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"200")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"The batch size of updates made to the hbase table.")))))}u.isMDXComponent=!0}}]);