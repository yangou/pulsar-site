"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12422],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,g=u["".concat(c,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(g,l(l({ref:t},o),{},{components:a})):r.createElement(g,l({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const i={id:"client-java-3.3.0",title:"Client Java 3.3.0",sidebar_label:"Client Java 3.3.0"},l=void 0,p={unversionedId:"versioned/client-java-3.3.0",id:"versioned/client-java-3.3.0",title:"Client Java 3.3.0",description:"- feat Introduce Refresh API in the TableView #21417",source:"@site/release-notes/versioned/client-java-3.3.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.3.0",permalink:"/release-notes/versioned/client-java-3.3.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.3.0.md",tags:[],version:"current",frontMatter:{id:"client-java-3.3.0",title:"Client Java 3.3.0",sidebar_label:"Client Java 3.3.0"}},c={},s=[],o={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[feat][client]"," Introduce Refresh API in the TableView ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21417"},"#21417")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Consumer lost message ack due to race condition in acknowledge with batch message ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22353"},"#22353")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Do no retrying for error subscription not found when disabled allowAutoSubscriptionCreation ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22164"},"#22164")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix Consumer should return configured batch receive max messages ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22619"},"#22619")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix ConsumerBuilderImpl#subscribe silent stuck when using pulsar-client:3.0.x with jackson-annotations prior to 2.12.0 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21985"},"#21985")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix DLQ producer name conflicts when multiples consumers send messages to DLQ ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21890"},"#21890")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix client side memory leak when call MessageImpl.create and fix imprecise client-side metrics: pendingMessagesUpDownCounter, pendingBytesUpDownCounter, latencyHistogram ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22393"},"#22393")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix messages in the batch container timed out unexpectedly ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21889"},"#21889")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix multi-topics consumer could receive old messages after seek ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21945"},"#21945")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix wrong results of hasMessageAvailable and readNext after seeking by timestamp ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22363"},"#22363")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," GenericProtobufNativeSchema not implement getNativeSchema method. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22204"},"#22204")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Messages lost due to TopicListWatcher reconnect ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21853"},"#21853")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Unclear error message when creating a consumer with two same topics ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22255"},"#22255")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," fix Reader.hasMessageAvailable might return true after seeking to latest ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22201"},"#22201")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," fix huge permits if acked a half batched message ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22091"},"#22091")),(0,n.yg)("li",{parentName:"ul"},"[fix][client]","Fixed getting an incorrect ",(0,n.yg)("inlineCode",{parentName:"li"},"maxMessageSize")," value when accessing multiple clusters in the same process ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22306"},"#22306")),(0,n.yg)("li",{parentName:"ul"},"[improve][client]"," Mention partitioning in failover priorityLevel javaDoc ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21980"},"#21980")),(0,n.yg)("li",{parentName:"ul"},"[improve][client]"," add physicalAddress as part of connection pool key ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22196"},"#22196"))))}m.isMDXComponent=!0}}]);