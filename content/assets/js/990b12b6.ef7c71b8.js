"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18126],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(58168),n=(r(96540),r(15680));const i={id:"concepts-overview",title:"Pulsar Overview",sidebar_label:"Overview"},o=void 0,s={unversionedId:"concepts-overview",id:"version-2.4.0/concepts-overview",title:"Pulsar Overview",description:"Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the Apache Software Foundation.",source:"@site/versioned_docs/version-2.4.0/concepts-overview.md",sourceDirName:".",slug:"/concepts-overview",permalink:"/docs/2.4.0/concepts-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/concepts-overview.md",tags:[],version:"2.4.0",frontMatter:{id:"concepts-overview",title:"Pulsar Overview",sidebar_label:"Overview"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.4.0/client-libraries"},next:{title:"Messaging",permalink:"/docs/2.4.0/concepts-messaging"}},c={},l=[{value:"Contents",id:"contents",level:2}],p={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the ",(0,n.yg)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache Software Foundation"),"."),(0,n.yg)("p",null,"Key features of Pulsar are listed below:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Native support for multiple clusters in a Pulsar instance, with seamless ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/administration-geo"},"geo-replication")," of messages across clusters."),(0,n.yg)("li",{parentName:"ul"},"Very low publish and end-to-end latency."),(0,n.yg)("li",{parentName:"ul"},"Seamless scalability to over a million topics."),(0,n.yg)("li",{parentName:"ul"},"A simple ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-clients"},"client API")," with bindings for ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/client-libraries-java"},"Java"),", ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/client-libraries-go"},"Go"),", ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/client-libraries-python"},"Python")," and ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/client-libraries-cpp"},"C++"),"."),(0,n.yg)("li",{parentName:"ul"},"Multiple ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-messaging#subscription-types"},"subscription types")," (",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-messaging#exclusive"},"exclusive"),", ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-messaging#shared"},"shared"),", and ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-messaging#failover"},"failover"),") for topics."),(0,n.yg)("li",{parentName:"ul"},"Guaranteed message delivery with ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-architecture-overview#persistent-storage"},"persistent message storage")," provided by ",(0,n.yg)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper"),"."),(0,n.yg)("li",{parentName:"ul"},"A serverless light-weight computing framework ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/functions-overview"},"Pulsar Functions")," offers the capability for stream-native data processing."),(0,n.yg)("li",{parentName:"ul"},"A serverless connector framework ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/io-overview"},"Pulsar IO"),", which is built on Pulsar Functions, makes it easier to move data in and out of Apache Pulsar."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-tiered-storage"},"Tiered Storage")," offloads data from hot/warm storage to cold/long-term storage (such as S3 and GCS) when the data is aging out.")),(0,n.yg)("h2",{id:"contents"},"Contents"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-messaging"},"Messaging Concepts")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-architecture-overview"},"Architecture Overview")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-clients"},"Pulsar Clients")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-replication"},"Geo Replication")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-multi-tenancy"},"Multi Tenancy")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-authentication"},"Authentication and Authorization")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-topic-compaction"},"Topic Compaction")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-tiered-storage"},"Tiered Storage")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.4.0/concepts-schema-registry"},"Schema Registry"))))}g.isMDXComponent=!0}}]);