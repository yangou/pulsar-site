"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52216],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>d});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=l,d=g["".concat(o,".").concat(u)]||g[u]||c[u]||r;return t?n.createElement(d,i(i({ref:a},m),{},{components:t})):n.createElement(d,i({ref:a},m))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[g]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),l=t(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:t},a)}},89089:(e,a,t)=>{t.d(a,{A:()=>T});var n=t(58168),l=t(96540),r=t(20053),i=t(23104),s=t(56347),o=t(57485),p=t(31682),m=t(89466);function g(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function c(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function u(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=c(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[o,p]=d({queryString:t,groupId:n}),[g,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,m.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),h=(()=>{const e=o??g;return u({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var h=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:s,selectValue:o,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),c=e=>{const a=e.currentTarget,t=m.indexOf(a),n=p[t].value;n!==s&&(g(a),o(n))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;a=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;a=m[t]??m[m.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>m.push(e),onKeyDown:u,onClick:c},i,{className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},l.createElement(f,(0,n.A)({},e,a)),l.createElement(v,(0,n.A)({},e,a)))}function T(e){const a=(0,h.A)();return l.createElement(N,(0,n.A)({key:String(a)},e))}},72485:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var n=t(58168),l=(t(96540),t(15680)),r=t(89089),i=t(19365);const s={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},o=void 0,p={unversionedId:"cookbooks-retention-expiry",id:"version-2.4.0/cookbooks-retention-expiry",title:"Message retention and expiry",description:"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs.",source:"@site/versioned_docs/version-2.4.0/cookbooks-retention-expiry.md",sourceDirName:".",slug:"/cookbooks-retention-expiry",permalink:"/docs/2.4.0/cookbooks-retention-expiry",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/cookbooks-retention-expiry.md",tags:[],version:"2.4.0",frontMatter:{id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Partitioned Topics",permalink:"/docs/2.4.0/cookbooks-partitioned"},next:{title:"Encryption ",permalink:"/docs/2.4.0/cookbooks-encryption"}},m={},g=[{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"Example",id:"example",level:5},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Set size/time thresholds and backlog retention policies",id:"set-sizetime-thresholds-and-backlog-retention-policies",level:3},{value:"Example",id:"example-1",level:5},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"Example",id:"example-3",level:5},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-4",level:5},{value:"Remove the TTL configuration for a namespace",id:"remove-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-5",level:5},{value:"Delete messages from namespaces",id:"delete-messages-from-namespaces",level:2}],c={toc:g},u="wrapper";function d(e){let{components:a,...s}=e;return(0,l.yg)(u,(0,n.A)({},c,s,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/concepts-architecture-overview#persistent-storage"},"persistent storage")," of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs."),(0,l.yg)("p",null,"As a consequence, no messages are retained (by default) on a topic that has not had any subscriptions created for it."),(0,l.yg)("p",null,"(Note that messages that are no longer being stored are not necessarily immediately deleted, and may in fact still be accessible until the next ledger rollover. Because clients cannot predict when rollovers may happen, it is not wise to rely on a rollover not happening at an inconvenient point in time.)"),(0,l.yg)("p",null,"In Pulsar, you can modify this behavior, with namespace granularity, in two ways:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You can persistently store messages that are not within a backlog (because they've been acknowledged by on every existing subscription, or because there are no subscriptions) by setting ",(0,l.yg)("a",{parentName:"li",href:"#retention-policies"},"retention policies"),"."),(0,l.yg)("li",{parentName:"ul"},"Messages that are not acknowledged within a specified timeframe can be automatically acknowledged, by specifying the ",(0,l.yg)("a",{parentName:"li",href:"#time-to-live-ttl"},"time to live")," (TTL).")),(0,l.yg)("p",null,"Pulsar's ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/admin-api-overview"},"admin interface")," enables you to manage both retention policies and TTL with namespace granularity (and thus within a specific tenant and either on a specific cluster or in the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/concepts-architecture-overview#global-cluster"},(0,l.yg)("inlineCode",{parentName:"a"},"global"))," cluster)."),(0,l.yg)("blockquote",null,(0,l.yg)("h4",{parentName:"blockquote",id:"retention-and-ttl-solve-two-different-problems"},"Retention and TTL solve two different problems"),(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},"Message retention: Keep the data for at least X hours (even if acknowledged)"),(0,l.yg)("li",{parentName:"ul"},"Time-to-live: Discard data after some time (by automatically acknowledging)")),(0,l.yg)("p",{parentName:"blockquote"},"Most applications will want to use at most one of these.")),(0,l.yg)("h2",{id:"retention-policies"},"Retention policies"),(0,l.yg)("p",null,"By default, when a Pulsar message arrives at a broker, the message is stored until it has been acknowledged on all subscriptions, at which point it is marked for deletion. You can override this behavior and retain messages that have already been acknowledged on all subscriptions by setting a ",(0,l.yg)("em",{parentName:"p"},"retention policy")," for all topics in a given namespace. Retention is based on both a ",(0,l.yg)("em",{parentName:"p"},"size limit")," and a ",(0,l.yg)("em",{parentName:"p"},"time limit"),"."),(0,l.yg)("p",null,"The diagram below illustrates the concept of message retention.\n",(0,l.yg)("img",{src:t(5874).A,width:"920",height:"581"})),(0,l.yg)("p",null,"Retention policies are useful when you use the Reader interface. The Reader interface does not use acknowledgements, and messages do not exist within backlogs. It is required to configure retention for Reader-only use cases."),(0,l.yg)("p",null,"When you set a retention policy on topics in a namespace, you must set ",(0,l.yg)("strong",{parentName:"p"},"both")," a ",(0,l.yg)("em",{parentName:"p"},"size limit")," (via ",(0,l.yg)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),") and a ",(0,l.yg)("em",{parentName:"p"},"time limit")," (via ",(0,l.yg)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes"),") . You can refer to the following table to set retention policies in ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," and Java."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Time limit"),(0,l.yg)("th",{parentName:"tr",align:null},"Size limit"),(0,l.yg)("th",{parentName:"tr",align:null},"Message retention"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"Infinite retention")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},"Based on the size limit")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"Based on the time limit")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"Disable message retention, which means messages are not reserved (by default)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},"Invalid")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"Invalid")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},">0"),(0,l.yg)("td",{parentName:"tr",align:null},"Acknowledged messages or messages with no active subscription will not be retained when either time or size reaches the limit.")))),(0,l.yg)("p",null,"The retention settings apply to all messages on topics that do not have any subscriptions, or to messages that have been acknowledged by all subscriptions. The retention policy settings do not affect unacknowledged messages on topics with subscriptions. The unacknowledged messages are controlled by the backlog quota."),(0,l.yg)("p",null,"When a retention limit on a topic is exceeded, the oldest message is marked for deletion until the set of retained messages falls within the specified limits again."),(0,l.yg)("h3",{id:"defaults"},"Defaults"),(0,l.yg)("p",null,"You can set message retention at instance level with the following two parameters: ",(0,l.yg)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),". Both parameters are set to ",(0,l.yg)("inlineCode",{parentName:"p"},"0")," by default."),(0,l.yg)("p",null,"For more information of the two parameters, refer to the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#broker"},(0,l.yg)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file."),(0,l.yg)("h3",{id:"set-retention-policy"},"Set retention policy"),(0,l.yg)("p",null,"You can set a retention policy for a namespace by specifying the namespace, a size limit and a time limit in ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),", REST API and Java."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"You can use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces-set-retention"},(0,l.yg)("inlineCode",{parentName:"a"},"set-retention"))," subcommand and specify a namespace, a size limit using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-s"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--size")," flag, and a time limit using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-t"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--time")," flag."),(0,l.yg)("p",null,"In the following example, the size limit is set to 10 GB and the time limit is set to 3 hours for each topic within the ",(0,l.yg)("inlineCode",{parentName:"p"},"my-tenant/my-ns")," namespace."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"When the size of messages reaches 10 GB on a topic within 3 hours, the acknowledged messages will not be retained."),(0,l.yg)("li",{parentName:"ul"},"After 3 hours, even if the message size is less than 10 GB, the acknowledged messages will not be retained.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n")),(0,l.yg)("p",null,"In the following example, the time is not limited and the size limit is set to 1 TB. The size limit determines the retention."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n")),(0,l.yg)("p",null,"In the following example, the size is not limited and the time limit is set to 3 hours. The time limit determines the retention."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time 3h\n\n")),(0,l.yg)("p",null,"To achieve infinite retention, set both values to ",(0,l.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n")),(0,l.yg)("p",null,"To disable the retention policy, set both values to ",(0,l.yg)("inlineCode",{parentName:"p"},"0"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 0 \\\n  --time 0\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/setRetention"},"POST /admin/v2/namespaces/:tenant/:namespace/retention/setRetention")),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"To disable the retention policy, you need to set both the size and time limit to ",(0,l.yg)("inlineCode",{parentName:"p"},"0"),". Set either size or time limit to ",(0,l.yg)("inlineCode",{parentName:"p"},"0")," is invalid."))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n")))),(0,l.yg)("h3",{id:"get-retention-policy"},"Get retention policy"),(0,l.yg)("p",null,"You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,l.yg)("inlineCode",{parentName:"p"},"retentionTimeInMinutes")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"retentionSizeInMB"),"."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,l.yg)("inlineCode",{parentName:"a"},"get-retention"))," subcommand and specify the namespace."),(0,l.yg)("h5",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 500\n}\n\n'))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getRetention"},"GET /admin/v2/namespaces/:tenant/:namespace/retention/getRetention"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getRetention(namespace);\n\n")))),(0,l.yg)("h2",{id:"backlog-quotas"},"Backlog quotas"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Backlogs")," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged."),(0,l.yg)("p",null,"You can control the allowable size and/or time of backlogs, at the namespace level, using ",(0,l.yg)("em",{parentName:"p"},"backlog quotas"),". Pulsar uses a quota to enforce a hard limit on the logical size of the backlogs in a topic. Backlog quota triggers an alert policy (for example, producer exception) once the quota limit is reached."),(0,l.yg)("p",null,"The diagram below illustrates the concept of backlog quota.\n",(0,l.yg)("img",{src:t(66970).A,width:"1465",height:"907"})),(0,l.yg)("p",null,"Setting a backlog quota involves setting:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"an allowable ",(0,l.yg)("em",{parentName:"li"},"size and/or time threshold")," for each topic in the namespace"),(0,l.yg)("li",{parentName:"ul"},"a ",(0,l.yg)("em",{parentName:"li"},"retention policy")," that determines which action the ",(0,l.yg)("a",{parentName:"li",href:"/docs/2.4.0/reference-terminology#broker"},"broker")," takes if the threshold is exceeded.")),(0,l.yg)("p",null,"The following retention policies are available:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Policy"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Action"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"producer_request_hold")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The broker will hold and not persist produce request payload")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"producer_exception")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The broker will disconnect from the client by throwing an exception")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"consumer_backlog_eviction")),(0,l.yg)("td",{parentName:"tr",align:"left"},"The broker will begin discarding backlog messages")))),(0,l.yg)("blockquote",null,(0,l.yg)("h4",{parentName:"blockquote",id:"beware-the-distinction-between-retention-policy-types"},"Beware the distinction between retention policy types"),(0,l.yg)("p",{parentName:"blockquote"},'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of messages not in backlogs, and one that applies to messages within backlogs.')),(0,l.yg)("p",null,"Backlog quotas are handled at the namespace level. They can be managed via:"),(0,l.yg)("h3",{id:"set-sizetime-thresholds-and-backlog-retention-policies"},"Set size/time thresholds and backlog retention policies"),(0,l.yg)("p",null,"You can set a size and/or time threshold and backlog retention policy for all of the topics in a ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#namespace"},"namespace")," by specifying the namespace, a size limit and/or a time limit in second, and a policy by name."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,l.yg)("inlineCode",{parentName:"a"},"set-backlog-quota"))," subcommand and specify a namespace, a size limit using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-l"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--limit")," , ",(0,l.yg)("inlineCode",{parentName:"p"},"-lt"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--limitTime")," flag to limit backlog, a retention policy using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-p"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--policy")," flag and a policy type using ",(0,l.yg)("inlineCode",{parentName:"p"},"-t"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--type")," (default is destination_storage)."),(0,l.yg)("h5",{id:"example-1"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns/my-topic \\\n--limitTime 3600 \\\n--policy producer_request_hold \\\n--type message_age\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getBacklogQuotaMap"},"POST /admin/v2/namespaces/:tenant/:namespace/backlogQuota/getBacklogQuotaMap"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setBacklogQuota(namespace, BacklogQuota.builder()\n        .retentionPolicy(RetentionPolicy.producer_request_hold)\n        .limitSize(2147483648L)\n        .limitTime(60 * 60)\n        .build());\n\n")))),(0,l.yg)("h3",{id:"get-backlog-threshold-and-backlog-retention-policy"},"Get backlog threshold and backlog retention policy"),(0,l.yg)("p",null,"You can see which size threshold and backlog retention policy has been applied to a namespace."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-backlog-quotas"},(0,l.yg)("inlineCode",{parentName:"a"},"get-backlog-quotas"))," subcommand and specify a namespace. Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n'))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getBacklogQuotaMap"},"GET /admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap/getBacklogQuotaMap"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n")))),(0,l.yg)("h3",{id:"remove-backlog-quotas"},"Remove backlog quotas"),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-backlog-quota"},(0,l.yg)("inlineCode",{parentName:"a"},"remove-backlog-quota"))," subcommand and specify a namespace, use ",(0,l.yg)("inlineCode",{parentName:"p"},"t"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--type")," to specify backlog type to remove(default is destination_storage). Here's an example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/removeBacklogQuota"},"DELETE /admin/v2/namespaces/:tenant/:namespace/backlogQuota/removeBacklogQuota"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n")))),(0,l.yg)("h3",{id:"clear-backlog"},"Clear backlog"),(0,l.yg)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.4.0/reference-ulsar-admin#pulsar-admin-namespaces-clear-backlog"},(0,l.yg)("inlineCode",{parentName:"a"},"clear-backlog"))," subcommand."),(0,l.yg)("h5",{id:"example-2"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n")),(0,l.yg)("p",null,"By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-f"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--force")," flag."),(0,l.yg)("h2",{id:"time-to-live-ttl"},"Time to live (TTL)"),(0,l.yg)("p",null,"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."),(0,l.yg)("p",null,"The TTL parameter is like a stopwatch attached to each message that defines the amount of time a message is allowed to stay in the unacknowledged state. When the TTL expires, Pulsar automatically moves the message to the acknowledged state (and thus makes it ready for deletion)."),(0,l.yg)("p",null,"The diagram below illustrates the concept of TTL.\n",(0,l.yg)("img",{src:t(98512).A,width:"1100",height:"581"})),(0,l.yg)("h3",{id:"set-the-ttl-for-a-namespace"},"Set the TTL for a namespace"),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-set-message-ttl"},(0,l.yg)("inlineCode",{parentName:"a"},"set-message-ttl"))," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,l.yg)("inlineCode",{parentName:"p"},"-ttl"),"/",(0,l.yg)("inlineCode",{parentName:"p"},"--messageTTL")," flag."),(0,l.yg)("h5",{id:"example-3"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/setNamespaceMessageTTL"},"POST /admin/v2/namespaces/:tenant/:namespace/messageTTL/setNamespaceMessageTTL"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n")))),(0,l.yg)("h3",{id:"get-the-ttl-configuration-for-a-namespace"},"Get the TTL configuration for a namespace"),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-message-ttl"},(0,l.yg)("inlineCode",{parentName:"a"},"get-message-ttl"))," subcommand and specify a namespace."),(0,l.yg)("h5",{id:"example-4"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getNamespaceMessageTTL"},"GET /admin/v2/namespaces/:tenant/:namespace/messageTTL/getNamespaceMessageTTL"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n")))),(0,l.yg)("h3",{id:"remove-the-ttl-configuration-for-a-namespace"},"Remove the TTL configuration for a namespace"),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"Use the ",(0,l.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-message-ttl"},(0,l.yg)("inlineCode",{parentName:"a"},"remove-message-ttl"))," subcommand and specify a namespace."),(0,l.yg)("h5",{id:"example-5"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-message-ttl my-tenant/my-ns\n\n"))),(0,l.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/removeNamespaceMessageTTL"},"DELETE /admin/v2/namespaces/:tenant/:namespace/messageTTL/removeNamespaceMessageTTL"))),(0,l.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeNamespaceMessageTTL(namespace)\n\n")))),(0,l.yg)("h2",{id:"delete-messages-from-namespaces"},"Delete messages from namespaces"),(0,l.yg)("p",null,"When it comes to the physical storage size, message expiry and retention are just like two sides of the same coin."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The backlog quota and TTL parameters prevent disk size from growing indefinitely, as Pulsar\u2019s default behaviour is to persist unacknowledged messages."),(0,l.yg)("li",{parentName:"ul"},"The retention policy allocates storage space to accommodate the messages that are supposed to be deleted by Pulsar by default.")),(0,l.yg)("p",null,"As a conclusion, the size of your physical storage should accommodate the sum of the backlog quota and the retention size."),(0,l.yg)("p",null,"The message deletion rate (releasing rate of disk space) can be determined by multiple factors."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Segment rollover period"),": basically, the segment rollover period is how often a new segment is created. Once a new segment is created, the old segment will be deleted. By default, this happens either when you have written 50,000 entries (messages) or have waited 240 minutes. You can tune this in your broker.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Entry log rollover period"),": multiple ledgers in BookKeeper are interleaved into an ",(0,l.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/getting-started/concepts/#entry-logs"},"entry log"),". In order for a ledger that has been deleted, the entry log must all be rolled over.\nThe entry log rollover period is configurable, but is purely based on the entry log size. For details, see ",(0,l.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-settings"},"here"),". Once the entry log is rolled over, the entry log can be garbage collected.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Garbage collection interval"),": because entry logs have interleaved ledgers, to free up space, the entry logs need to be rewritten. The garbage collection interval is how often BookKeeper performs garbage collection. which is related to minor compaction and major compaction of entry logs. For details, see ",(0,l.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-compaction-settings"},"here"),"."))),(0,l.yg)("p",null,"The diagram below illustrates one of the cases that the consumed storage size is larger than the given limits for backlog and retention. Messages over the retention limit are kept because other messages in the same segment are still within retention period.\n",(0,l.yg)("img",{src:t(65916).A,width:"1159",height:"614"})),(0,l.yg)("p",null,"If you do not have any retention period and that you never have much of a backlog, the upper limit for retained messages, which are acknowledged, equals to the Pulsar segment rollover period + entry log rollover period + (garbage collection interval * garbage collection ratios)."))}d.isMDXComponent=!0},66970:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/backlog-quota-8b858faef29b4f2a73479d396ec5b59f.svg"},65916:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/retention-storage-size-4c7f0e9aa49ebd431dae787dd13b60ba.svg"},5874:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/retention-1dfff1bb477b98049ae06fcd16a51fda.svg"},98512:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ttl-7605af453040d419a432d79d41b23830.svg"}}]);