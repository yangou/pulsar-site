"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20836],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return r?n.createElement(y,l(l({ref:t},g),{},{components:r})):n.createElement(y,l({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"io-twitter",title:"Twitter Firehose Connector",sidebar_label:"Twitter Firehose Connector",original_id:"io-twitter"},l=void 0,o={unversionedId:"io-twitter",id:"version-2.2.0/io-twitter",title:"Twitter Firehose Connector",description:"The Twitter Firehose connector is used for receiving tweets from Twitter Firehose and writing",source:"@site/versioned_docs/version-2.2.0/io-twitter.md",sourceDirName:".",slug:"/io-twitter",permalink:"/docs/2.2.0/io-twitter",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/io-twitter.md",tags:[],version:"2.2.0",frontMatter:{id:"io-twitter",title:"Twitter Firehose Connector",sidebar_label:"Twitter Firehose Connector",original_id:"io-twitter"}},u={},p=[{value:"Source Configuration Options",id:"source-configuration-options",level:2}],g={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Twitter Firehose connector is used for receiving tweets from Twitter Firehose and writing\nthe tweets to Pulsar topics."),(0,a.yg)("h2",{id:"source-configuration-options"},"Source Configuration Options"),(0,a.yg)("p",null,"You can get the OAuth credentials from ",(0,a.yg)("a",{parentName:"p",href:"https://developer.twitter.com/en.html"},"Twitter Developers Portal"),"."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumerKey"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"Twitter OAuth Consumer Key")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"consumerSecret"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"Twitter OAuth Consumer Secret")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"token"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"Twitter OAuth Token")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"tokenSecret"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"null"),(0,a.yg)("td",{parentName:"tr",align:null},"Twitter OAuth Secret")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clientName"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'openconnector-twitter-source"')),(0,a.yg)("td",{parentName:"tr",align:null},"Client name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clientHosts"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"https://stream.twitter.com")),(0,a.yg)("td",{parentName:"tr",align:null},"Twitter Firehose hosts that client connects to")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clientBufferSize"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"50000")),(0,a.yg)("td",{parentName:"tr",align:null},"The buffer size for buffering tweets fetched from Twitter Firehose")))))}s.isMDXComponent=!0}}]);