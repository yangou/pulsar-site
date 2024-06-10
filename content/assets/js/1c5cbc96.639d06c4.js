"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96475],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?t.createElement(m,s(s({ref:a},c),{},{components:n})):t.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19166:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(58168),r=(n(96540),n(15680));const o={id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance",original_id:"administration-load-balance"},s=void 0,i={unversionedId:"administration-load-balance",id:"version-2.7.5/administration-load-balance",title:"Pulsar load balance",description:"Load balance across Pulsar brokers",source:"@site/versioned_docs/version-2.7.5/administration-load-balance.md",sourceDirName:".",slug:"/administration-load-balance",permalink:"/docs/2.7.5/administration-load-balance",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/administration-load-balance.md",tags:[],version:"2.7.5",frontMatter:{id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance",original_id:"administration-load-balance"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Pulsar statistics",permalink:"/docs/2.7.5/administration-stats"},next:{title:"Pulsar proxy",permalink:"/docs/2.7.5/administration-proxy"}},l={},d=[{value:"Load balance across Pulsar brokers",id:"load-balance-across-pulsar-brokers",level:2},{value:"Pulsar load manager architecture",id:"pulsar-load-manager-architecture",level:2},{value:"Assign topics to brokers dynamically",id:"assign-topics-to-brokers-dynamically",level:3},{value:"Assignment granularity",id:"assignment-granularity",level:4},{value:"Create namespaces and bundles",id:"create-namespaces-and-bundles",level:3},{value:"Unload topics and bundles",id:"unload-topics-and-bundles",level:3},{value:"Split namespace bundles",id:"split-namespace-bundles",level:3},{value:"Shed load automatically",id:"shed-load-automatically",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4}],c={toc:d},u="wrapper";function h(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"load-balance-across-pulsar-brokers"},"Load balance across Pulsar brokers"),(0,r.yg)("p",null,"Pulsar is an horizontally scalable messaging system, so the traffic\nin a logical cluster must be spread across all the available Pulsar brokers as evenly as possible, which is a core requirement."),(0,r.yg)("p",null,"You can use multiple settings and tools to control the traffic distribution which require a bit of context to understand how the traffic is managed in Pulsar. Though, in most cases, the core requirement mentioned above is true out of the box and you should not worry about it."),(0,r.yg)("h2",{id:"pulsar-load-manager-architecture"},"Pulsar load manager architecture"),(0,r.yg)("p",null,"The following part introduces the basic architecture of the Pulsar load manager."),(0,r.yg)("h3",{id:"assign-topics-to-brokers-dynamically"},"Assign topics to brokers dynamically"),(0,r.yg)("p",null,"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the cluster."),(0,r.yg)("p",null,"When a client starts using new topics that are not assigned to any broker, a process is triggered to choose the best suited broker to acquire ownership of these topics according to the load conditions."),(0,r.yg)("p",null,'In case of partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.'),(0,r.yg)("p",null,'The assignment is "dynamic" because the assignment changes quickly. For example, if the broker owning the topic crashes, the topic is reassigned immediately to another broker. Another scenario is that the broker owning the topic becomes overloaded. In this case, the topic is reassigned to a less loaded broker.'),(0,r.yg)("p",null,"The stateless nature of brokers makes the dynamic assignment possible, so you can quickly expand or shrink the cluster based on usage."),(0,r.yg)("h4",{id:"assignment-granularity"},"Assignment granularity"),(0,r.yg)("p",null,"The assignment of topics or partitions to brokers is not done at the topics or partitions level, but done at the Bundle level (a higher level). The reason is to amortize the amount of information that you need to keep track. Based on CPU, memory, traffic load and other indexes, topics are assigned to a particular broker dynamically."),(0,r.yg)("p",null,'Instead of individual topic or partition assignment, each broker takes ownership of a subset of the topics for a namespace. This subset is called a "',(0,r.yg)("em",{parentName:"p"},"bundle"),'" and effectively this subset is a sharding mechanism.'),(0,r.yg)("p",null,'The namespace is the "administrative" unit: many config knobs or operations are done at the namespace level.'),(0,r.yg)("p",null,'For assignment, a namespaces is sharded into a list of "bundles", with each bundle comprising\na portion of overall hash range of the namespace.'),(0,r.yg)("p",null,"Topics are assigned to a particular bundle by taking the hash of the topic name and checking in which\nbundle the hash falls into."),(0,r.yg)("p",null,"Each bundle is independent of the others and thus is independently assigned to different brokers."),(0,r.yg)("h3",{id:"create-namespaces-and-bundles"},"Create namespaces and bundles"),(0,r.yg)("p",null,"When you create a new namespace, the new namespace sets to use the default number of bundles. You can set this in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# When a namespace is created without specifying the number of bundle, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n")),(0,r.yg)("p",null,"You can either change the system default, or override it when you create a new namespace:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n")),(0,r.yg)("p",null,"With this command, you create a namespace with 16 initial bundles. Therefore the topics for this namespaces can immediately be spread across up to 16 brokers."),(0,r.yg)("p",null,"In general, if you know the expected traffic and number of topics in advance, you had better start with a reasonable number of bundles instead of waiting for the system to auto-correct the distribution."),(0,r.yg)("p",null,"On the same note, it is beneficial to start with more bundles than the number of brokers, because of the hashing nature of the distribution of topics into bundles. For example, for a namespace with 1000 topics, using something like 64 bundles achieves a good distribution of traffic across 16 brokers."),(0,r.yg)("h3",{id:"unload-topics-and-bundles"},"Unload topics and bundles"),(0,r.yg)("p",null,'You can "unload" a topic in Pulsar with admin operation. Unloading means to close the topics,\nrelease ownership and reassign the topics to a new broker, based on current load.'),(0,r.yg)("p",null,"When unloading happens, the client experiences a small latency blip, typically in the order of tens of milliseconds, while the topic is reassigned."),(0,r.yg)("p",null,"Unloading is the mechanism that the load-manager uses to perform the load shedding, but you can also trigger the unloading manually, for example to correct the assignments and redistribute traffic even before having any broker overloaded."),(0,r.yg)("p",null,"Unloading a topic has no effect on the assignment, but just closes and reopens the particular topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n")),(0,r.yg)("p",null,"To unload all topics for a namespace and trigger reassignments:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin namespaces unload tenant/namespace\n\n")),(0,r.yg)("h3",{id:"split-namespace-bundles"},"Split namespace bundles"),(0,r.yg)("p",null,"Since the load for the topics in a bundle might change over time, or predicting upfront might just be hard, brokers can split bundles into two. The new smaller bundles can be reassigned to different brokers."),(0,r.yg)("p",null,"The splitting happens based on some tunable thresholds. Any existing bundle that exceeds any of the threshold is a candidate to be split. By default the newly split bundles are also immediately offloaded to other brokers, to facilitate the traffic distribution."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# enable/disable namespace bundle auto split\nloadBalancerAutoBundleSplitEnabled=true\n\n# enable/disable automatic unloading of split bundles\nloadBalancerAutoUnloadSplitBundlesEnabled=true\n\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n")),(0,r.yg)("h3",{id:"shed-load-automatically"},"Shed load automatically"),(0,r.yg)("p",null,"The support for automatic load shedding is available in the load manager of Pulsar. This means that whenever the system recognizes a particular broker is overloaded, the system forces some traffic to be reassigned to less loaded brokers."),(0,r.yg)("p",null,'When a broker is identified as overloaded, the broker forces to "unload" a subset of the bundles, the\nones with higher traffic, that make up for the overload percentage.'),(0,r.yg)("p",null,"For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then the broker unloads the percent difference plus a 5% margin: ",(0,r.yg)("inlineCode",{parentName:"p"},"(95% - 85%) + 5% = 15%"),"."),(0,r.yg)("p",null,"Given the selection of bundles to offload is based on traffic (as a proxy measure for cpu, network\nand memory), broker unloads bundles for at least 15% of traffic."),(0,r.yg)("p",null,"The automatic load shedding is enabled by default and you can disable the automatic load shedding with this setting:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Enable/disable automatic bundle unloading for load-shedding\nloadBalancerSheddingEnabled=true\n\n")),(0,r.yg)("p",null,"Additional settings that apply to shedding:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more that once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n")),(0,r.yg)("h4",{id:"broker-overload-thresholds"},"Broker overload thresholds"),(0,r.yg)("p",null,"The determinations of when a broker is overloaded is based on threshold of CPU, network and memory usage. Whenever either of those metrics reaches the threshold, the system triggers the shedding (if enabled)."),(0,r.yg)("p",null,"By default, overload threshold is set at 85%:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Usage threshold to determine a broker as over-loaded\nloadBalancerBrokerOverloadedThresholdPercentage=85\n\n")),(0,r.yg)("p",null,"Pulsar gathers the usage stats from the system metrics."),(0,r.yg)("p",null,"In case of network utilization, in some cases the network interface speed that Linux reports is\nnot correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps\nNIC speed for which the OS reports 10Gbps speed."),(0,r.yg)("p",null,"Because of the incorrect max speed, the Pulsar load manager might think the broker has not reached the NIC capacity, while in fact the broker already uses all the bandwidth and the traffic is slowed down."),(0,r.yg)("p",null,"You can use the following setting to correct the max NIC speed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Override the auto-detection of the network interfaces max speed.\n# This option is useful in some environments (eg: EC2 VMs) where the max speed\n# reported by Linux is not reflecting the real bandwidth available to the broker.\n# Since the network usage is employed by the load manager to decide when a broker\n# is overloaded, it is important to make sure the info is correct or override it\n# with the right value here. The configured value can be a double (eg: 0.8) and that\n# can be used to trigger load-shedding even before hitting on NIC limits.\nloadBalancerOverrideBrokerNicSpeedGbps=\n\n")),(0,r.yg)("p",null,"When the value is empty, Pulsar uses the value that the OS reports."))}h.isMDXComponent=!0}}]);