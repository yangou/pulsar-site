"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13420],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>m});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return r?t.createElement(m,s(s({ref:a},p),{},{components:r})):t.createElement(m,s({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48549:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const o={id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology"},s=void 0,i={unversionedId:"reference-terminology",id:"version-2.4.2/reference-terminology",title:"Pulsar Terminology",description:"Here is a glossary of terms related to Apache Pulsar:",source:"@site/versioned_docs/version-2.4.2/reference-terminology.md",sourceDirName:".",slug:"/reference-terminology",permalink:"/docs/2.4.2/reference-terminology",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/reference-terminology.md",tags:[],version:"2.4.2",frontMatter:{id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Building Pulsar C++ client",permalink:"/docs/2.4.2/develop-cpp"},next:{title:"Pulsar CLI tools",permalink:"/docs/2.4.2/reference-cli-tools"}},l={},c=[{value:"Concepts",id:"concepts",level:3},{value:"Pulsar",id:"pulsar",level:4},{value:"Message",id:"message",level:4},{value:"Topic",id:"topic",level:4},{value:"Partitioned Topic",id:"partitioned-topic",level:4},{value:"Namespace",id:"namespace",level:4},{value:"Namespace Bundle",id:"namespace-bundle",level:4},{value:"Tenant",id:"tenant",level:4},{value:"Subscription",id:"subscription",level:4},{value:"Pub-Sub",id:"pub-sub",level:4},{value:"Producer",id:"producer",level:4},{value:"Consumer",id:"consumer",level:4},{value:"Reader",id:"reader",level:4},{value:"Cursor",id:"cursor",level:4},{value:"Acknowledgment (ack)",id:"acknowledgment-ack",level:4},{value:"Negative Acknowledgment (nack)",id:"negative-acknowledgment-nack",level:4},{value:"Unacknowledged",id:"unacknowledged",level:4},{value:"Retention Policy",id:"retention-policy",level:4},{value:"Multi-Tenancy",id:"multi-tenancy",level:4},{value:"Architecture",id:"architecture",level:3},{value:"Standalone",id:"standalone",level:4},{value:"Cluster",id:"cluster",level:4},{value:"Instance",id:"instance",level:4},{value:"Geo-Replication",id:"geo-replication",level:4},{value:"Configuration Store",id:"configuration-store",level:4},{value:"Topic Lookup",id:"topic-lookup",level:4},{value:"Service Discovery",id:"service-discovery",level:4},{value:"Broker",id:"broker",level:4},{value:"Dispatcher",id:"dispatcher",level:4},{value:"Storage",id:"storage",level:3},{value:"BookKeeper",id:"bookkeeper",level:4},{value:"Bookie",id:"bookie",level:4},{value:"Ledger",id:"ledger",level:4},{value:"Functions",id:"functions",level:3}],p={toc:c},u="wrapper";function g(e){let{components:a,...r}=e;return(0,n.yg)(u,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Here is a glossary of terms related to Apache Pulsar:"),(0,n.yg)("h3",{id:"concepts"},"Concepts"),(0,n.yg)("h4",{id:"pulsar"},"Pulsar"),(0,n.yg)("p",null,"Pulsar is a distributed messaging system originally created by Yahoo but now under the stewardship of the Apache Software Foundation."),(0,n.yg)("h4",{id:"message"},"Message"),(0,n.yg)("p",null,"Messages are the basic unit of Pulsar. They're what ",(0,n.yg)("a",{parentName:"p",href:"#producer"},"producers")," publish to ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topics"),"\nand what ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," then consume from topics."),(0,n.yg)("h4",{id:"topic"},"Topic"),(0,n.yg)("p",null,"A named channel used to pass messages published by ",(0,n.yg)("a",{parentName:"p",href:"#producer"},"producers")," to ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," who\nprocess those ",(0,n.yg)("a",{parentName:"p",href:"#message"},"messages"),"."),(0,n.yg)("h4",{id:"partitioned-topic"},"Partitioned Topic"),(0,n.yg)("p",null,"A topic that is served by multiple Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#broker"},"brokers"),", which enables higher throughput."),(0,n.yg)("h4",{id:"namespace"},"Namespace"),(0,n.yg)("p",null,"A grouping mechanism for related ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,n.yg)("h4",{id:"namespace-bundle"},"Namespace Bundle"),(0,n.yg)("p",null,"A virtual group of ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topics")," that belong to the same ",(0,n.yg)("a",{parentName:"p",href:"#namespace"},"namespace"),". A namespace bundle\nis defined as a range between two 32-bit hashes, such as 0x00000000 and 0xffffffff."),(0,n.yg)("h4",{id:"tenant"},"Tenant"),(0,n.yg)("p",null,"An administrative unit for allocating capacity and enforcing an authentication/authorization scheme."),(0,n.yg)("h4",{id:"subscription"},"Subscription"),(0,n.yg)("p",null,"A lease on a ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topic")," established by a group of ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumers"),". Pulsar has four subscription\nmodes (exclusive, shared, failover and key_shared)."),(0,n.yg)("h4",{id:"pub-sub"},"Pub-Sub"),(0,n.yg)("p",null,"A messaging pattern in which ",(0,n.yg)("a",{parentName:"p",href:"#producer"},"producer")," processes publish messages on ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topics")," that\nare then consumed (processed) by ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumer")," processes."),(0,n.yg)("h4",{id:"producer"},"Producer"),(0,n.yg)("p",null,"A process that publishes ",(0,n.yg)("a",{parentName:"p",href:"#message"},"messages")," to a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topic"),"."),(0,n.yg)("h4",{id:"consumer"},"Consumer"),(0,n.yg)("p",null,"A process that establishes a subscription to a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topic")," and processes messages published\nto that topic by ",(0,n.yg)("a",{parentName:"p",href:"#producer"},"producers"),"."),(0,n.yg)("h4",{id:"reader"},"Reader"),(0,n.yg)("p",null,"Pulsar readers are message processors much like Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumers")," but with two crucial differences:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"you can specify ",(0,n.yg)("em",{parentName:"li"},"where")," on a topic readers begin processing messages (consumers always begin with the latest\navailable unacked message);"),(0,n.yg)("li",{parentName:"ul"},"readers don't retain data or acknowledge messages.")),(0,n.yg)("h4",{id:"cursor"},"Cursor"),(0,n.yg)("p",null,"The subscription position for a ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumer"),"."),(0,n.yg)("h4",{id:"acknowledgment-ack"},"Acknowledgment (ack)"),(0,n.yg)("p",null,"A message sent to a Pulsar broker by a ",(0,n.yg)("a",{parentName:"p",href:"#consumer"},"consumer")," that a message has been successfully processed.\nAn acknowledgement (ack) is Pulsar's way of knowing that the message can be deleted from the system;\nif no acknowledgement, then the message will be retained until it's processed."),(0,n.yg)("h4",{id:"negative-acknowledgment-nack"},"Negative Acknowledgment (nack)"),(0,n.yg)("p",null,'When an application fails to process a particular message, it can send a "negative ack" to Pulsar\nto signal that the message should be replayed at a later timer. (By default, failed messages are\nreplayed after a 1 minute delay). Be aware that negative acknowledgment on ordered subscription types,\nsuch as Exclusive, Failover and Key_Shared, can cause failed messages to arrive consumers out of the original order.'),(0,n.yg)("h4",{id:"unacknowledged"},"Unacknowledged"),(0,n.yg)("p",null,"A message that has been delivered to a consumer for processing but not yet confirmed as processed by the consumer."),(0,n.yg)("h4",{id:"retention-policy"},"Retention Policy"),(0,n.yg)("p",null,"Size and time limits that you can set on a ",(0,n.yg)("a",{parentName:"p",href:"#namespace"},"namespace")," to configure retention of ",(0,n.yg)("a",{parentName:"p",href:"#message"},"messages"),"\nthat have already been ",(0,n.yg)("a",{parentName:"p",href:"#acknowledgement-ack"},"acknowledged"),"."),(0,n.yg)("h4",{id:"multi-tenancy"},"Multi-Tenancy"),(0,n.yg)("p",null,"The ability to isolate ",(0,n.yg)("a",{parentName:"p",href:"#namespace"},"namespaces"),", specify quotas, and configure authentication and authorization\non a per-",(0,n.yg)("a",{parentName:"p",href:"#tenant"},"tenant")," basis."),(0,n.yg)("h3",{id:"architecture"},"Architecture"),(0,n.yg)("h4",{id:"standalone"},"Standalone"),(0,n.yg)("p",null,"A lightweight Pulsar broker in which all components run in a single Java Virtual Machine (JVM) process. Standalone\nclusters can be run on a single machine and are useful for development purposes."),(0,n.yg)("h4",{id:"cluster"},"Cluster"),(0,n.yg)("p",null,"A set of Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#broker"},"brokers")," and ",(0,n.yg)("a",{parentName:"p",href:"#bookkeeper"},"BookKeeper")," servers (aka ",(0,n.yg)("a",{parentName:"p",href:"#bookie"},"bookies"),").\nClusters can reside in different geographical regions and replicate messages to one another\nin a process called ",(0,n.yg)("a",{parentName:"p",href:"#geo-replication"},"geo-replication"),"."),(0,n.yg)("h4",{id:"instance"},"Instance"),(0,n.yg)("p",null,"A group of Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"clusters")," that act together as a single unit."),(0,n.yg)("h4",{id:"geo-replication"},"Geo-Replication"),(0,n.yg)("p",null,"Replication of messages across Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"clusters"),", potentially in different datacenters\nor geographical regions."),(0,n.yg)("h4",{id:"configuration-store"},"Configuration Store"),(0,n.yg)("p",null,"Pulsar's configuration store (previously known as configuration store) is a ZooKeeper quorum that\nis used for configuration-specific tasks. A multi-cluster Pulsar installation requires just one\nconfiguration store across all ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"clusters"),"."),(0,n.yg)("h4",{id:"topic-lookup"},"Topic Lookup"),(0,n.yg)("p",null,"A service provided by Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#broker"},"brokers")," that enables connecting clients to automatically determine\nwhich Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"cluster")," is responsible for a ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topic")," (and thus where message traffic for\nthe topic needs to be routed)."),(0,n.yg)("h4",{id:"service-discovery"},"Service Discovery"),(0,n.yg)("p",null,"A mechanism provided by Pulsar that enables connecting clients to use just a single URL to interact\nwith all the ",(0,n.yg)("a",{parentName:"p",href:"#broker"},"brokers")," in a ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"cluster"),"."),(0,n.yg)("h4",{id:"broker"},"Broker"),(0,n.yg)("p",null,"A stateless component of Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#cluster"},"clusters")," that runs two other components: an HTTP server\nexposing a REST interface for administration and topic lookup and a ",(0,n.yg)("a",{parentName:"p",href:"#dispatcher"},"dispatcher")," that\nhandles all message transfers. Pulsar clusters typically consist of multiple brokers."),(0,n.yg)("h4",{id:"dispatcher"},"Dispatcher"),(0,n.yg)("p",null,"An asynchronous TCP server used for all data transfers in-and-out a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#broker"},"broker"),". The Pulsar\ndispatcher uses a custom binary protocol for all communications."),(0,n.yg)("h3",{id:"storage"},"Storage"),(0,n.yg)("h4",{id:"bookkeeper"},"BookKeeper"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper")," is a scalable, low-latency persistent log storage\nservice that Pulsar uses to store data."),(0,n.yg)("h4",{id:"bookie"},"Bookie"),(0,n.yg)("p",null,"Bookie is the name of an individual BookKeeper server. It is effectively the storage server of Pulsar."),(0,n.yg)("h4",{id:"ledger"},"Ledger"),(0,n.yg)("p",null,"An append-only data structure in ",(0,n.yg)("a",{parentName:"p",href:"#bookkeeper"},"BookKeeper")," that is used to persistently store messages in Pulsar ",(0,n.yg)("a",{parentName:"p",href:"#topic"},"topics"),"."),(0,n.yg)("h3",{id:"functions"},"Functions"),(0,n.yg)("p",null,"Pulsar Functions are lightweight functions that can consume messages from Pulsar topics, apply custom processing logic, and, if desired, publish results to topics."))}g.isMDXComponent=!0}}]);