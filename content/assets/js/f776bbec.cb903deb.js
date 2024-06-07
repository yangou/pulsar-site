"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11369],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),o=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=o(a),y=r,u=m["".concat(g,".").concat(y)]||m[y]||p[y]||l;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},65344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Statistics"},s=void 0,i={unversionedId:"administration-stats",id:"version-3.3.x/administration-stats",title:"Pulsar stats",description:"Topic stats",source:"@site/versioned_docs/version-3.3.x/administration-stats.md",sourceDirName:".",slug:"/administration-stats",permalink:"/docs/3.3.x/administration-stats",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/administration-stats.md",tags:[],version:"3.3.x",frontMatter:{id:"administration-stats",title:"Pulsar stats",sidebar_label:"Statistics"},sidebar:"docsSidebar",previous:{title:"Isolate bookies",permalink:"/docs/3.3.x/administration-isolation-bookie"},next:{title:"Metrics",permalink:"/docs/3.3.x/reference-metrics"}},g={},o=[{value:"Topic stats",id:"topic-stats",level:2},{value:"Producer stats",id:"producer-stats",level:3},{value:"Subscription stats",id:"subscription-stats",level:3},{value:"Consumer stats",id:"consumer-stats",level:3},{value:"Replication stats",id:"replication-stats",level:3},{value:"Topic internal stats",id:"topic-internal-stats",level:2}],d={toc:o},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"topic-stats"},"Topic stats"),(0,r.yg)("p",null,"The following table outlines the stats of a topic. For more details about how to get these stats, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.3.x/admin-api-topics#get-stats"},"Get stats"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"All stats below are ",(0,r.yg)("strong",{parentName:"p"},"reset")," to 0 upon broker restart or topic unloading, ",(0,r.yg)("strong",{parentName:"p"},"except")," the stats marked with asterisks * (the values of them ",(0,r.yg)("strong",{parentName:"p"},"keep unchanged"),").")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers' publish rates (message per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of all local and replication publishers' publish rates (byte per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers' dispatch rates (message per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of all local and replication consumers' dispatch rates (byte per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The average size (bytes) of messages published within the last interval.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"storageSize*"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of the ledgers' storage size ",(0,r.yg)("strong",{parentName:"td"},"in BookKeeper")," and ",(0,r.yg)("strong",{parentName:"td"},"in tiered storage")," for a topic (in bytes).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"offloadedStorageSize*"),(0,r.yg)("td",{parentName:"tr",align:null},"The sum of the storage size ",(0,r.yg)("strong",{parentName:"td"},"in tiered storage")," for a topic (in bytes).",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": the ",(0,r.yg)("inlineCode",{parentName:"td"},"total storage size of a topic")," = ",(0,r.yg)("inlineCode",{parentName:"td"},"storageSize"),", includes ",(0,r.yg)("inlineCode",{parentName:"td"},"offloadedStorageSize"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"earliestMsgPublishTimeInBacklogs*"),(0,r.yg)("td",{parentName:"tr",align:null},"The publish time of the earliest message in the backlog (in milliseconds).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytesInCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total bytes published to the topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgInCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total messages published to the topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total bytes delivered to consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total messages delivered to consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgChunkPublished"),(0,r.yg)("td",{parentName:"tr",align:null},"The topics that have chunked messages published on it.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"backlogSize*"),(0,r.yg)("td",{parentName:"tr",align:null},"The estimated total unconsumed or backlog size (in bytes).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oldestBacklogMessageAgeSeconds"),(0,r.yg)("td",{parentName:"tr",align:null},"The age of the oldest unacknowledged (i.e. backlog) message, measured by the time elapsed from its published time, in seconds. This value is recorded every backlog quota check interval, hence it represents the value seen in the last check.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oldestBacklogMessageSubscriptionName"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the subscription containing the oldest unacknowledged message. This value is recorded every backlog quota check interval, hence it represents the value seen in the last check.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"backlogQuotaLimitSize"),(0,r.yg)("td",{parentName:"tr",align:null},"the size in bytes of the ",(0,r.yg)("a",{parentName:"td",href:"/docs/3.3.x/cookbooks-retention-expiry#backlog-quotas"},"topic backlog quota"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"backlogQuotaLimitTime"),(0,r.yg)("td",{parentName:"tr",align:null},"the ",(0,r.yg)("a",{parentName:"td",href:"/docs/3.3.x/cookbooks-retention-expiry#backlog-quotas"},"topic backlog age (time) quota"),", in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"waitingPublishers"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of publishers waiting in a queue in exclusive access mode.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deduplicationStatus"),(0,r.yg)("td",{parentName:"tr",align:null},"The status of message deduplication for the topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topicEpoch"),(0,r.yg)("td",{parentName:"tr",align:null},"The topic epoch or empty if not set.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filteredEntriesCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The count of skipped entries for the topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRanges"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of non-contiguous deleted messages ranges.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRangesSerializedSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The serialized size of non-contiguous deleted messages ranges.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ownerBroker"),(0,r.yg)("td",{parentName:"tr",align:null},"The broker that owns this topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#producer-stats"},"publishers")),(0,r.yg)("td",{parentName:"tr",align:null},"The list of all local publishers on the topic, ranging from zero to thousands.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#subscription-stats"},"subscriptions")),(0,r.yg)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#replication-stats"},"replication")),(0,r.yg)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic.")))),(0,r.yg)("h3",{id:"producer-stats"},"Producer stats"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producerId"),(0,r.yg)("td",{parentName:"tr",align:null},"The internal identifier for this producer on this topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"producerName"),(0,r.yg)("td",{parentName:"tr",align:null},"The internal identifier for this producer, generated by the client library.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp when this producer is created or reconnected last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"accessMode"),(0,r.yg)("td",{parentName:"tr",align:null},"The type of access to the topic that the producer requires.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) published by this publisher.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The total throughput (byte per second) of the messages published by this publisher.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The average message size in bytes from this publisher within the last interval.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of chunked messages published by this publisher.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clientVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"The client library version of this producer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metadata"),(0,r.yg)("td",{parentName:"tr",align:null},"The metadata (key/value strings) associated with this publisher.")))),(0,r.yg)("h3",{id:"subscription-stats"},"Subscription stats"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"my-subscription"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of this subscription. It is defined by the client.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered on this subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered on this subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgBacklog"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages in the subscription backlog.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"This subscription type.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.yg)("td",{parentName:"tr",align:null},"The rate at which messages are discarded instead of dispatched from this subscription due to TTL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastExpireTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp of the last message expiration.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastConsumedFlowTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp of the last flow command received.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastConsumedTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The latest timestamp of all the consumed timestamps of the consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastAckedTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The latest timestamp of all the acknowledged timestamps of the consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateRedeliver"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages redelivered on this subscription (message per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.yg)("td",{parentName:"tr",align:null},"The chunked message dispatch rate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"earliestMsgPublishTimeInBacklog*"),(0,r.yg)("td",{parentName:"tr",align:null},"The publish time of the earliest message in the backlog for the subscription (in milliseconds).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgBacklogNoDelayed"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages in the subscription backlog that do not contain the delay messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blockedSubscriptionOnUnackedMsgs"),(0,r.yg)("td",{parentName:"tr",align:null},"The flag to verify if a subscription is blocked due to reaching the threshold of unacked messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgDelayed"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of delayed messages that are currently tracked.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"unackedMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of unacknowledged messages for the subscription, where an unacknowledged message is one that has been sent to a consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"activeConsumerName"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the consumer that is active for single active consumer subscriptions (such as failover or exclusive).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalMsgExpired"),(0,r.yg)("td",{parentName:"tr",align:null},"The total messages expired on this subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastMarkDeleteAdvancedTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The last ",(0,r.yg)("inlineCode",{parentName:"td"},"MarkDelete")," position advanced timestamp.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"durable"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the subscription is durable or ephemeral (for example, from a reader).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replicated"),(0,r.yg)("td",{parentName:"tr",align:null},"Mark that the subscription state is kept in sync across different regions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allowOutOfOrderDelivery"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether out-of-order delivery is allowed on the Key_Shared subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"keySharedMode"),(0,r.yg)("td",{parentName:"tr",align:null},"The options of the Key_Shared subscription mode include ",(0,r.yg)("inlineCode",{parentName:"td"},"AUTO_SPLIT")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"STICKY"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumersAfterMarkDeletePosition"),(0,r.yg)("td",{parentName:"tr",align:null},"Get ",(0,r.yg)("inlineCode",{parentName:"td"},"recentJoinedConsumers")," for the Key_Shared subscription.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filterProcessedMsgCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages processed by ",(0,r.yg)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filterAcceptedMsgCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages accepted by ",(0,r.yg)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filterRejectedMsgCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages rejected by ",(0,r.yg)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filterRescheduledMsgCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages rescheduled by ",(0,r.yg)("inlineCode",{parentName:"td"},"EntryFilter"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total bytes delivered to a consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total messages delivered to a consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"backlogSize*"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of backlog for this subscription (in bytes).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRanges"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of non-contiguous deleted messages ranges.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonContiguousDeletedMessagesRangesSerializedSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The serialized size of non-contiguous deleted messages ranges.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#consumer-stats"},"consumers")),(0,r.yg)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription.")))),(0,r.yg)("h3",{id:"consumer-stats"},"Consumer stats"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumerName"),(0,r.yg)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered to the consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered to the consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"availablePermits"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages that the consumer has space for in the client library's listening queue. ",(0,r.yg)("inlineCode",{parentName:"td"},"0")," means the client library's queue is full and ",(0,r.yg)("inlineCode",{parentName:"td"},"receive()")," isn't called. A non-zero value means this consumer is ready for dispatched messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"unackedMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of unacknowledged messages for the consumer, where an unacknowledged message has been sent to the consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"blockedConsumerOnUnackedMsgs"),(0,r.yg)("td",{parentName:"tr",align:null},"The flag used to verify if the consumer is blocked due to reaching the threshold of the unacknowledged messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastConsumedTimestamp (Deprecated)"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp when the consumer reads a message the last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastConsumedTime"),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the consumer reads a message the last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastAckedTimestamp (Deprecated)"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp when the consumer acknowledges a message the last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastAckedTime"),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the consumer acknowledges a message the last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"The IP address and source port for the connection of this consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connectedSince"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp when this consumer is created or reconnected last time.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clientVersion"),(0,r.yg)("td",{parentName:"tr",align:null},"The client library version of this consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bytesOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total bytes delivered to a consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgOutCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The total messages delivered to a consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateRedeliver"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages redelivered by this consumer (message per second).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunkedMessageRate"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of chunked messages delivered to this consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"avgMessagesPerEntry"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of average messages per entry for the consumer consumed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"readPositionWhenJoining"),(0,r.yg)("td",{parentName:"tr",align:null},"The read position of the cursor when the consumer joins.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"keyHashRanges"),(0,r.yg)("td",{parentName:"tr",align:null},"The hash ranges assigned to this consumer if it uses Key_Shared sub mode.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metadata"),(0,r.yg)("td",{parentName:"tr",align:null},"The metadata (key/value strings) associated with this consumer.")))),(0,r.yg)("h3",{id:"replication-stats"},"Replication stats"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate (message per second) of messages received from the remote cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,r.yg)("td",{parentName:"tr",align:null},"The total throughput (byte per second) received from the remote cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) delivered to the replication-subscriber.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,r.yg)("td",{parentName:"tr",align:null},"The total throughput (byte per second) delivered to the replication-subscriber.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,r.yg)("td",{parentName:"tr",align:null},"The total rate of messages (message per second) expired.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages pending to be replicated to remote cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connected"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,r.yg)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection when connected.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inboundConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"The IP and port of the broker in the remote cluster's publisher connection to this broker.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,r.yg)("td",{parentName:"tr",align:null},"The TCP connection used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"outboundConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"The address of the outbound replication connection.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"outboundConnectedSince"),(0,r.yg)("td",{parentName:"tr",align:null},"The timestamp of establishing an outbound connection.")))),(0,r.yg)("h2",{id:"topic-internal-stats"},"Topic internal stats"),(0,r.yg)("p",null,"The following table outlines the internal stats inside a topic. For more details about how to get these stats, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.3.x/admin-api-topics#get-internal-stats"},"Get stats"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Stat"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"entriesAddedCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"Messages published since this broker loads this topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"numberOfEntries"),(0,r.yg)("td",{parentName:"tr",align:null},"The total number of messages tracked.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"totalSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The total storage size in bytes of all messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"currentLedgerEntries"),(0,r.yg)("td",{parentName:"tr",align:null},"The count of messages written to the ledger that is currently open for writing.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"currentLedgerSize"),(0,r.yg)("td",{parentName:"tr",align:null},"The size in bytes of messages written to the ledger that is currently open for writing.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastLedgerCreatedTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the last ledger is created.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastLedgerCreationFailureTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The time when the last ledger is failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"waitingCursorsCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of cursors that are caught up and waiting for a new message to be published.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pendingAddEntriesCount"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages that have write requests (asynchronous) waiting on completion.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastConfirmedEntry"),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"ledgerid:entryid")," of the last message that is written successfully. If the ",(0,r.yg)("inlineCode",{parentName:"td"},"entryid")," is ",(0,r.yg)("inlineCode",{parentName:"td"},"-1"),", then the ledger is opened or is currently opened but has no entries written yet.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"The state of the cursor ledger. The state ",(0,r.yg)("inlineCode",{parentName:"td"},"LedgerOpened")," means that a ledger is open for saving published messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ledgers"),(0,r.yg)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic that holds its messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cursors"),(0,r.yg)("td",{parentName:"tr",align:null},"The list of all cursors on this topic. Each subscription in the topic stats has a cursor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"markDeletePosition"),(0,r.yg)("td",{parentName:"tr",align:null},"The ack position: the last message that the subscriber acknowledges. All messages before this position are acknowledged by the subscriber.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"readPosition"),(0,r.yg)("td",{parentName:"tr",align:null},"The latest position of the subscriber for reading messages.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"waitingReadOp"),(0,r.yg)("td",{parentName:"tr",align:null},"This is true when the subscription reads the latest message that is published to the topic and waits for new messages to be published.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pendingReadOps"),(0,r.yg)("td",{parentName:"tr",align:null},"The count of outstanding read requests to the BookKeepers in progress.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"messagesConsumedCounter"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of messages this cursor has acknowledged since this broker loads this topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cursorLedger"),(0,r.yg)("td",{parentName:"tr",align:null},"The ledger used to persistently store the current ",(0,r.yg)("inlineCode",{parentName:"td"},"markDeletePosition"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cursorLedgerLastEntry"),(0,r.yg)("td",{parentName:"tr",align:null},"The last ",(0,r.yg)("inlineCode",{parentName:"td"},"entryid")," used to persistently store the current ",(0,r.yg)("inlineCode",{parentName:"td"},"markDeletePosition"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"individuallyDeletedMessages"),(0,r.yg)("td",{parentName:"tr",align:null},"The range of messages acknowledged between ",(0,r.yg)("inlineCode",{parentName:"td"},"markDeletePosition")," and the ",(0,r.yg)("inlineCode",{parentName:"td"},"readPosition")," when acknowledges are done out of order.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lastLedgerSwitchTimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"The last time when the cursor ledger is rolled over.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schemaLedgers"),(0,r.yg)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic schema.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compactedLedger"),(0,r.yg)("td",{parentName:"tr",align:null},"The ledgers holding un-acked messages after topic compaction.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ledgerId"),(0,r.yg)("td",{parentName:"tr",align:null},"The ID of this ledger.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"entries"),(0,r.yg)("td",{parentName:"tr",align:null},"The total number of entries that belong to this ledger.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"size"),(0,r.yg)("td",{parentName:"tr",align:null},"The size of messages written to this ledger (in bytes).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"offloaded"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether this ledger is offloaded. The value is ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," for the compacted topic ledger.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"metadata"),(0,r.yg)("td",{parentName:"tr",align:null},"The ledger metadata.")))))}p.isMDXComponent=!0}}]);