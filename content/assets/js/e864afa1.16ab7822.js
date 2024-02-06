"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),s=n(86010),i=n(12466),l=n(16550),p=n(91980),o=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[p,o]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),k=(()=>{const e=p??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,s]),tabValues:s}}var k=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:p,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==l&&(c(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},27584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(10599),i=n(28802);const l={id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started",description:"Learn how to manage topics in Pulsar using the Pulsar admin CLI or Pulsar admin APIs."},p=void 0,o={unversionedId:"admin-api-get-started",id:"version-3.2.x/admin-api-get-started",title:"Get started",description:"Learn how to manage topics in Pulsar using the Pulsar admin CLI or Pulsar admin APIs.",source:"@site/versioned_docs/version-3.2.x/admin-get-started.md",sourceDirName:".",slug:"/admin-api-get-started",permalink:"/docs/3.2.x/admin-api-get-started",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/admin-get-started.md",tags:[],version:"3.2.x",frontMatter:{id:"admin-api-get-started",title:"Get started",sidebar_label:"Get started",description:"Learn how to manage topics in Pulsar using the Pulsar admin CLI or Pulsar admin APIs."},sidebar:"docsSidebar",previous:{title:"Tools",permalink:"/docs/3.2.x/admin-api-tools"},next:{title:"Tutorial",permalink:"/docs/3.2.x/admin-api-tutorial"}},u={},c=[{value:"Related topics",id:"related-topics",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide walks you through the quickest way to get started with the following methods to manage topics. "),(0,r.kt)(s.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"pulsar-admin CLI")," is a command-line tool and is available in the bin folder of your Pulsar installation.")),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=3.2.0"},"REST API")," belongs to HTTP calls, which are made against the admin APIs provided by brokers. In addition, both the Java admin API and pulsar-admin CLI use the REST API.")),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Java admin API")," is a programmable interface written in Java."))),(0,r.kt)("p",null,"Check the detailed steps below."),(0,r.kt)(s.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"To manage topics using pulsar-admin CLI, complte the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the service URL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and start Pulsar standalone. This tutorial runs Pulsar 2.11 as an example.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Set the service URLs to point to the broker service in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/client.conf"},"client.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\nwebServiceUrl=http://localhost:8080/\nbrokerServiceUrl=pulsar://localhost:6650/\n```\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create a persistent topic named ",(0,r.kt)("em",{parentName:"p"},"test-topic-1")," with 6 partitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```bash\nbin/pulsar-admin topics create-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 6\n```\n\n**Output**\n\nThere is no output. You can check the status of the topic in Step 5.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Update the number of the partition to 8."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```bash\nbin/pulsar-admin topics update-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 8\n```\n\n**Output**\n\nThere is no output. You can check the number of partitions in Step 5.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Produce some messages to the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```bash\nbin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-1\n```\n\n**Output**\n\n```bash\n2023-03-07T15:33:56,832+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-1" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n\n...\n\n2023-03-07T15:35:03,769+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   8.931 ms - med:   3.775 - 95pct:  32.144 - 99pct:  98.432 - 99.9pct: 216.088 - 99.99pct: 304.807 - 99.999pct: 349.391 - Max: 351.235\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Check the internal stats of the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```bash\nbin/pulsar-admin topics partitioned-stats-internal \\\npersistent://public/default/test-topic-1\n```\n\n**Output**\n\nBelow is a part of the output. For detailed explanations of topic stats, see Pulsar statistics.\n\n```bash\n{\n  "metadata" : {\n    "partitions" : 8\n  },\n  "partitions" : {\n    "persistent://public/default/test-topic-1-partition-1" : {\n      "entriesAddedCounter" : 4213,\n      "numberOfEntries" : 4213,\n      "totalSize" : 8817693,\n      "currentLedgerEntries" : 4212,\n      "currentLedgerSize" : 8806289,\n      "lastLedgerCreatedTimestamp" : "2023-03-07T15:33:59.367+08:00",\n      "waitingCursorsCount" : 0,\n      "pendingAddEntriesCount" : 0,\n      "lastConfirmedEntry" : "65:4211",\n      "state" : "LedgerOpened",\n      "ledgers" : [ {\n        "ledgerId" : 49,\n        "entries" : 1,\n        "size" : 11404,\n        "offloaded" : false,\n        "underReplicated" : false\n      }, {\n        "ledgerId" : 65,\n        "entries" : 0,\n        "size" : 0,\n        "offloaded" : false,\n        "underReplicated" : false\n      } ],\n      "cursors" : {\n        "test-subscriptio-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n  "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        },\n        "test-subscription-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n          "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        }\n      },\n      "schemaLedgers" : [ ],\n      "compactedLedger" : {\n        "ledgerId" : -1,\n        "entries" : -1,\n        "size" : -1,\n        "offloaded" : false,\n        "underReplicated" : false\n      }\n    },\n...\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6:")," Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```bash\nbin/pulsar-admin topics delete-partitioned-topic persistent://public/default/test-topic-1\n```\n\n**Output**\n\nThere is no output. You can verify whether the _test-topic-1_ exists or not using the following command.\n\n**Input**\n\nList topics in `public/default` namespace.\n\n```bash\nbin/pulsar-admin topics list public/default\n```\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,"To manage topics using REST API, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install and start Pulsar standalone. This tutorial runs Pulsar 2.11 as an example.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Create a persistent topic named ",(0,r.kt)("em",{parentName:"p"},"test-topic-2")," with 4 partitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```bash\ncurl -X PUT http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions -H 'Content-Type: application/json' -d \"4\"\n```\n\n**Output**\n\nThere is no output. You can check the topic in Step 4.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Update the number of the partition to 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```bash\ncurl -X POST http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions -H 'Content-Type: application/json' -d \"5\"\n```\n\n**Output**\n\nThere is no output. You can check the status of the topic in Step 4.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Produce some messages to the partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```bash\nbin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-2\n```\n\n**Output**\n\n```bash\n2023-03-08T15:47:06,268+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-2" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n  "deprecatedAuthPluginClassName" : null,\n  "maxOutstanding" : 0,\n  "maxPendingMessagesAcrossPartitions" : 0,\n  "partitions" : null,\n  "numMessages" : 0,\n  "compression" : "NONE",\n  "payloadFilename" : null,\n  "payloadDelimiter" : "\\\\n",\n  "batchTimeMillis" : 1.0,\n  "batchMaxMessages" : 1000,\n  "batchMaxBytes" : 4194304,\n  "testTime" : 0,\n  "warmupTimeSeconds" : 1.0,\n  "encKeyName" : null,\n  "encKeyFile" : null,\n  "delay" : 0,\n  "exitOnFailure" : false,\n  "messageKeyGenerationMode" : null,\n  "producerAccessMode" : "Shared",\n  "formatPayload" : false,\n  "formatterClass" : "org.apache.pulsar.testclient.DefaultMessageFormatter",\n  "transactionTimeout" : 10,\n  "numMessagesPerTransaction" : 50,\n  "isEnableTransaction" : false,\n\n  "isAbortTransaction" : false,\n  "histogramFile" : null\n}\n\n...\n\n2023-03-08T15:53:28,178+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   4.481 ms - med:   2.918 - 95pct:  10.710 - 99pct:  38.928 - 99.9pct: 112.689 - 99.99pct: 154.241 - 99.999pct: 193.249 - Max: 241.717\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Check the internal stats of the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```bash\ncurl -X GET http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitioned-internalStats\n```\n\n**Output**\n\nFor detailed explanations of topic stats, see Pulsar statistics.\n\n```bash\n{"metadata":{"partitions":5},"partitions":{"persistent://public/default/test-topic-2-partition-3":{"entriesAddedCounter":47087,"numberOfEntries":47087,"totalSize":80406959,"currentLedgerEntries":47087,"currentLedgerSize":80406959,"lastLedgerCreatedTimestamp":"2023-03-08T15:47:07.273+08:00","waitingCursorsCount":0,"pendingAddEntriesCount":0,"lastConfirmedEntry":"117:47086","state":"LedgerOpened","ledgers":[{"ledgerId":117,"entries":0,"size":0,"offloaded":false,"underReplicated":false}],"cursors":{},"schemaLedgers":[],"compactedLedger":{"ledgerId":-1,"entries":-1,"size":-1,"offloaded":false,"underReplicated":false}},"persistent://public/default/test-topic-2-partition-2":{"entriesAddedCounter":46995,"numberOfEntries":46995,"totalSize":80445417,"currentLedgerEntries":46995,"currentLedgerSize":80445417,"lastLedgerCreatedTimestamp":"2023-03-08T15:47:07.43+08:00","waitingCursorsCount":0,"pendingAddEntriesCount":0,"lastConfirmedEntry":"118:46994","state":"LedgerOpened","ledgers":[{"ledgerId":118,"entries":0,"size":0,"offloaded":false,"underReplicated":false}],...\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Input**\n\n```\ncurl -X DELETE http://localhost:8080/admin/v2/persistent/public/default/test-topic-2/partitions\n```\n\n**Output**\n\nThere is no output. You can verify whether the _test-topic-2_ exists or not using the following command.\n\n**Input**\n\nList topics in `public/default` namespace.\n\n```\ncurl -X GET http://localhost:8080/admin/v2/persistent/public/default\n```\n"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"To manage topics using Java admin API, complete following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate a Pulsar Java client.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a partitioned topic")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the number of a partition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Produce messages to the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the stats of the topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the topic."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Prepare a Java project and add the following dependency to your POM file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-admin</artifactId>\n      <version>2.11.0</version>\n  </dependency>\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Initiate a Pulsar Java client in your Java project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nString url = "http://localhost:8080";\nPulsarAdmin admin = PulsarAdmin.builder()\n    .serviceHttpUrl(url)\n    .build();\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create a partitioned topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1")," with 4 partitions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nadmin.topics().createPartitionedTopic("persistent://public/default/test-topic-1", 4);\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Update the number of the partition to 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nadmin.topics().updatePartitionedTopic("test-topic-1", 5);\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Produce some messages to the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .build();\n\nProducer<String> producer = client.newProducer(Schema.STRING)\n    .topic("test-topic-1")\n    .blockIfQueueFull(true)\n    .create();\n\nfor (int i = 0; i < 100; ++i) {\n    producer.newMessage().value("test").send();\n}\nproducer.close();\nclient.close();\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Check the stats of the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nPartitionedTopicStats stats = admin.topics().getPartitionedStats("persistent://public/default/test-topic-1",false);\nSystem.out.println(stats.getMsgInCounter());\n```\n\n**Output**\n\n```java\n100\n```\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6:")," Delete the topic ",(0,r.kt)("em",{parentName:"p"},"test-topic-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'**Input**\n\n```java\nadmin.topics().deletePartitionedTopic("test-topic-1");\n```\n')))),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To understand basics, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-overview.md"},"Pulsar admin API - Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-use-cases.md"},"Pulsar admin API - Use cases"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn common administrative tasks, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-features.md"},"Pulsar admin API - Features"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To perform administrative operations, see ",(0,r.kt)("a",{parentName:"p",href:"admin-api-tools.md"},"Pulsar admin API - Tools"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To check the detailed usage, see the references below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"pulsar-admin CLI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pulsar admin APIs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"reference-rest-api-overview.md"},"REST API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Java admin API")))))))))}h.isMDXComponent=!0}}]);