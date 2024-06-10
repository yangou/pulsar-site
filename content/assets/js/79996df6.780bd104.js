"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51887],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=g(t),m=l,c=u["".concat(s,".").concat(m)]||u[m]||y[m]||a;return t?r.createElement(c,o(o({ref:n},p),{},{components:t})):r.createElement(c,o({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<a;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var r=t(58168),l=(t(96540),t(15680));const a={id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector",original_id:"io-solr-sink"},o=void 0,i={unversionedId:"io-solr-sink",id:"version-2.5.1/io-solr-sink",title:"Solr sink connector",description:"The Solr sink connector pulls messages from Pulsar topics",source:"@site/versioned_docs/version-2.5.1/io-solr-sink.md",sourceDirName:".",slug:"/io-solr-sink",permalink:"/docs/2.5.1/io-solr-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-solr-sink.md",tags:[],version:"2.5.1",frontMatter:{id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector",original_id:"io-solr-sink"}},s={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],p={toc:g},u="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"The Solr sink connector pulls messages from Pulsar topics\nand persists the messages to Solr collections."),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"The configuration of the Solr sink connector has the following properties."),(0,l.yg)("h3",{id:"property"},"Property"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"solrUrl")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("li",null,"Comma-separated zookeeper hosts with chroot used in the SolrCloud mode. ",(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Example"),(0,l.yg)("br",null),(0,l.yg)("inlineCode",{parentName:"td"},"localhost:2181,localhost:2182/chroot")," ",(0,l.yg)("br",null),(0,l.yg)("br",null)),(0,l.yg)("li",null,"URL to connect to Solr used in standalone mode. ",(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Example"),(0,l.yg)("br",null),(0,l.yg)("inlineCode",{parentName:"td"},"localhost:8983/solr")," "))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"solrMode")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"SolrCloud"),(0,l.yg)("td",{parentName:"tr",align:null},"The client mode when interacting with the Solr cluster. ",(0,l.yg)("br",null),(0,l.yg)("br",null),"Below are the available options:",(0,l.yg)("br",null),(0,l.yg)("li",null,"Standalone",(0,l.yg)("br",null)),(0,l.yg)("li",null," SolrCloud"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"solrCollection")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"Solr collection name to which records need to be written.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"solrCommitWithinMs")),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"10"),(0,l.yg)("td",{parentName:"tr",align:null},"The time within million seconds for Solr updating commits.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"username")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The username for basic authentication.",(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Note: ",(0,l.yg)("inlineCode",{parentName:"strong"},"usename")," is case-sensitive."))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"password")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The password for basic authentication. ",(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Note: ",(0,l.yg)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Before using the Solr sink connector, you need to create a configuration file through one of the following methods."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "solrUrl": "localhost:2181,localhost:2182/chroot",\n    "solrMode": "SolrCloud",\n    "solrCollection": "techproducts",\n    "solrCommitWithinMs": 100,\n    "username": "fakeuser",\n    "password": "fake@123"\n}\n\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'\n{\n    solrUrl: "localhost:2181,localhost:2182/chroot"\n    solrMode: "SolrCloud"\n    solrCollection: "techproducts"\n    solrCommitWithinMs: 100\n    username: "fakeuser"\n    password: "fake@123"\n}\n\n')))))}y.isMDXComponent=!0}}]);