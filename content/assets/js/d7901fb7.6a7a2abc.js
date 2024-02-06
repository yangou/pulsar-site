"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),f=r,k=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},27031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"client-libraries-node-configs",title:"Pulsar Node.js client configurations",sidebar_label:"Configs",description:"Get a comprehensive understanding of configurable parameters for Pulsar Node.js clients."},o=void 0,l={unversionedId:"client-libraries-node-configs",id:"version-3.2.x/client-libraries-node-configs",title:"Pulsar Node.js client configurations",description:"Get a comprehensive understanding of configurable parameters for Pulsar Node.js clients.",source:"@site/versioned_docs/version-3.2.x/client-libraries-node-configs.md",sourceDirName:".",slug:"/client-libraries-node-configs",permalink:"/docs/3.2.x/client-libraries-node-configs",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/client-libraries-node-configs.md",tags:[],version:"3.2.x",frontMatter:{id:"client-libraries-node-configs",title:"Pulsar Node.js client configurations",sidebar_label:"Configs",description:"Get a comprehensive understanding of configurable parameters for Pulsar Node.js clients."},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/3.2.x/client-libraries-node-use"},next:{title:"C# client",permalink:"/docs/3.2.x/client-libraries-dotnet"}},s={},d=[{value:"Client configs",id:"client-configs",level:2},{value:"Producer configs",id:"producer-configs",level:2},{value:"Consumer configs",id:"consumer-configs",level:2},{value:"Reader configs",id:"reader-configs",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"client-configs"},"Client configs"),(0,r.kt)("p",null,"The following configurable parameters are available for Pulsar Node.js clients:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceUrl")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The connection URL for the Pulsar cluster. See ",(0,r.kt)("a",{parentName:"td",href:"#connection-urls"},"above")," for more info."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authentication")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure the authentication provider. (default: no authentication). See ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/security-tls-authentication"},"mTLS authentication")," for more info."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationTimeoutSeconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The timeout for Node.js client operations (creating producers, subscribing to and unsubscribing from ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#topic"},"topics"),"). Retries occur until this threshold is reached, at which point the operation fails."),(0,r.kt)("td",{parentName:"tr",align:"left"},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ioThreads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of threads to use for handling connections to Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#broker"},"brokers"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageListenerThreads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of threads used by message listeners (",(0,r.kt)("a",{parentName:"td",href:"#consumers"},"consumers")," and ",(0,r.kt)("a",{parentName:"td",href:"#readers"},"readers"),")."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"concurrentLookupRequest")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of concurrent lookup requests that can be sent on each broker connection. Setting a maximum helps to keep from overloading brokers. You should set values over the default of 50000 only if the client needs to produce and/or subscribe to thousands of Pulsar topics."),(0,r.kt)("td",{parentName:"tr",align:"left"},"50000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tlsTrustCertsFilePath")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The file path for the trusted TLS certificate."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tlsValidateHostname")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The boolean value of setup whether to enable TLS hostname verification."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tlsAllowInsecureConnection")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The boolean value of setup whether the Pulsar client accepts untrusted TLS certificate from broker."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"statsIntervalInSeconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Interval between each stat info. Stats is activated with positive statsInterval. The value should be set to 1 second at least"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"log")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A function that is used for logging."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"console.log"))))),(0,r.kt)("h2",{id:"producer-configs"},"Producer configs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#topic"},"topic")," to which the producer publishes messages. The topic format is ",(0,r.kt)("inlineCode",{parentName:"td"},"<topic-name>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<tenant-name>/<namespace-name>/<topic-name>"),". For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"sample/ns1/my-topic"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"producerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A name for the producer. If you do not explicitly assign a name, Pulsar automatically generates a globally unique name.  If you choose to explicitly assign a name, it needs to be unique across ",(0,r.kt)("em",{parentName:"td"},"all")," Pulsar clusters, otherwise the creation operation throws an error."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sendTimeoutMs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When publishing a message to a topic, the producer waits for an acknowledgment from the responsible Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#broker"},"broker"),". If a message is not acknowledged within the threshold set by this parameter, an error is thrown. If you set ",(0,r.kt)("inlineCode",{parentName:"td"},"sendTimeoutMs")," to -1, the timeout is set to infinity (and thus removed). Removing the send timeout is recommended when using Pulsar's ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/cookbooks-deduplication"},"message de-duplication")," feature."),(0,r.kt)("td",{parentName:"tr",align:"left"},"30000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"initialSequenceId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The initial sequence ID of the message. When producer send message, add sequence ID to message. The ID is increased each time to send."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxPendingMessages")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum size of the queue holding pending messages (i.e. messages waiting to receive an acknowledgment from the ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#broker"},"broker"),"). By default, when the queue is full all calls to the ",(0,r.kt)("inlineCode",{parentName:"td"},"send")," method fails ",(0,r.kt)("em",{parentName:"td"},"unless")," ",(0,r.kt)("inlineCode",{parentName:"td"},"blockIfQueueFull")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxPendingMessagesAcrossPartitions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum size of the sum of partition's  pending queue."),(0,r.kt)("td",{parentName:"tr",align:"left"},"50000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockIfQueueFull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the producer's ",(0,r.kt)("inlineCode",{parentName:"td"},"send")," method waits when the outgoing message queue is full rather than failing and throwing an error (the size of that queue is dictated by the ",(0,r.kt)("inlineCode",{parentName:"td"},"maxPendingMessages")," parameter); if set to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (the default), ",(0,r.kt)("inlineCode",{parentName:"td"},"send")," operations fails and throw a error when the queue is full."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"messageRoutingMode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message routing logic (for producers on ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/concepts-messaging#partitioned-topics"},"partitioned topics"),"). This logic is applied only when no key is set on messages. The available options are: round robin (",(0,r.kt)("inlineCode",{parentName:"td"},"RoundRobinDistribution"),"), or publishing all messages to a single partition (",(0,r.kt)("inlineCode",{parentName:"td"},"UseSinglePartition"),", the default)."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"UseSinglePartition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hashingScheme")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The hashing function that determines the partition on which a particular message is published (partitioned topics only). The available options are: ",(0,r.kt)("inlineCode",{parentName:"td"},"JavaStringHash")," (the equivalent of ",(0,r.kt)("inlineCode",{parentName:"td"},"String.hashCode()")," in Java), ",(0,r.kt)("inlineCode",{parentName:"td"},"Murmur3_32Hash")," (applies the ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MurmurHash"},"Murmur3")," hashing function), or ",(0,r.kt)("inlineCode",{parentName:"td"},"BoostHash")," (applies the hashing function from C++'s ",(0,r.kt)("a",{parentName:"td",href:"https://www.boost.org/doc/libs/1_62_0/doc/html/hash.html"},"Boost")," library)."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BoostHash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compressionType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The message data compression type used by the producer. The available options are ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lz4/lz4"},(0,r.kt)("inlineCode",{parentName:"a"},"LZ4")),", and ",(0,r.kt)("a",{parentName:"td",href:"https://zlib.net/"},(0,r.kt)("inlineCode",{parentName:"a"},"Zlib")),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/facebook/zstd/"},"ZSTD"),", ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/google/snappy/"},"SNAPPY"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compression None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the producer send message as batch."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingMaxPublishDelayMs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum time of delay sending message in batching."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"batchingMaxMessages")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum size of sending message in each time of batching."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The metadata of producer."),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"consumer-configs"},"Consumer configs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Pulsar topic on which the consumer establishes a subscription and listen for messages."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topics")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The array of topics."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topicsPattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The regular expression for topics."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscription")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The subscription name for this consumer."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionType")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available options are ",(0,r.kt)("inlineCode",{parentName:"td"},"Exclusive"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Shared"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Key_Shared"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"Failover"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Exclusive"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionInitialPosition")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial position at which to set cursor when subscribing to a topic at first time."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SubscriptionInitialPosition.Latest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ackTimeoutMs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Acknowledge timeout in milliseconds."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nAckRedeliverTimeoutMs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delay to wait before redelivering messages that failed to be processed."),(0,r.kt)("td",{parentName:"tr",align:"left"},"60000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiverQueueSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the size of the consumer's receiver queue, i.e. the number of messages that can be accumulated by the consumer before the application calls ",(0,r.kt)("inlineCode",{parentName:"td"},"receive"),". A value higher than the default of 1000 could increase consumer throughput, though at the expense of more memory utilization."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiverQueueSizeAcrossPartitions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the max total receiver queue size across partitions. This setting is used to reduce the receiver queue size for individual partitions if the total exceeds this value."),(0,r.kt)("td",{parentName:"tr",align:"left"},"50000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"consumerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of consumer. Currently(v2.4.1), ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/concepts-messaging#failover"},"failover")," mode use consumer name in ordering."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The metadata of consumer."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A listener that is called for a message received."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If enabling ",(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted"),", a consumer reads messages from a compacted topic rather than reading a full message backlog of a topic.",(0,r.kt)("br",null),(0,r.kt)("br",null),"A consumer only sees the latest value for each key in the compacted topic, up until reaching the point in the topic message when compacting backlog. Beyond that point, send messages as normal.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted")," can only be enabled on subscriptions to persistent topics, which have a single active consumer (like failure or exclusive subscriptions).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Attempting to enable it on subscriptions to non-persistent topics or on shared subscriptions leads to a subscription call throwing a ",(0,r.kt)("inlineCode",{parentName:"td"},"PulsarClientException"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,r.kt)("h2",{id:"reader-configs"},"Reader configs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.2.x/reference-terminology#topic"},"topic")," on which the reader establishes a subscription and listen for messages."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"startMessageId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The initial reader position, i.e. the message at which the reader begins processing messages. The options are ",(0,r.kt)("inlineCode",{parentName:"td"},"Pulsar.MessageId.earliest")," (the earliest available message on the topic), ",(0,r.kt)("inlineCode",{parentName:"td"},"Pulsar.MessageId.latest")," (the latest available message on the topic), or a message ID object for a position that is not earliest or latest."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receiverQueueSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the size of the reader's receiver queue, i.e. the number of messages that can be accumulated by the reader before the application calls ",(0,r.kt)("inlineCode",{parentName:"td"},"readNext"),". A value higher than the default of 1000 could increase reader throughput, though at the expense of more memory utilization."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readerName")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the reader."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionRolePrefix")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The subscription role prefix."),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If enabling ",(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted"),", a consumer reads messages from a compacted topic rather than reading a full message backlog of a topic.",(0,r.kt)("br",null),(0,r.kt)("br",null),"A consumer only sees the latest value for each key in the compacted topic, up until reaching the point in the topic message when compacting backlog. Beyond that point, send messages as normal.",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"readCompacted")," can only be enabled on subscriptions to persistent topics, which have a single active consumer (like failure or exclusive subscriptions).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Attempting to enable it on subscriptions to non-persistent topics or on shared subscriptions leads to a subscription call throwing a ",(0,r.kt)("inlineCode",{parentName:"td"},"PulsarClientException"),"."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}c.isMDXComponent=!0}}]);