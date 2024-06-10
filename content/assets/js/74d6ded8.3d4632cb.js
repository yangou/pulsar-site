"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40141],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return a?t.createElement(m,o(o({ref:n},u),{},{components:a})):t.createElement(m,o({ref:n},u))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34167:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(58168),i=(a(96540),a(15680));const r={id:"administration-load-distribution",title:"Pulsar load distribution",sidebar_label:"Load distribution",original_id:"administration-load-distribution"},o=void 0,s={unversionedId:"administration-load-distribution",id:"version-2.2.1/administration-load-distribution",title:"Pulsar load distribution",description:"Load distribution across Pulsar brokers",source:"@site/versioned_docs/version-2.2.1/administration-load-distribution.md",sourceDirName:".",slug:"/administration-load-distribution",permalink:"/docs/2.2.1/administration-load-distribution",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/administration-load-distribution.md",tags:[],version:"2.2.1",frontMatter:{id:"administration-load-distribution",title:"Pulsar load distribution",sidebar_label:"Load distribution",original_id:"administration-load-distribution"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Pulsar statistics",permalink:"/docs/2.2.1/administration-stats"},next:{title:"Pulsar proxy",permalink:"/docs/2.2.1/administration-proxy"}},l={},d=[{value:"Load distribution across Pulsar brokers",id:"load-distribution-across-pulsar-brokers",level:2},{value:"Pulsar load manager architecture",id:"pulsar-load-manager-architecture",level:2},{value:"Dynamic assignment of topics to brokers",id:"dynamic-assignment-of-topics-to-brokers",level:3},{value:"Assignment granularity",id:"assignment-granularity",level:3},{value:"Creating namespaces and bundles",id:"creating-namespaces-and-bundles",level:3},{value:"Unloading topics and bundles",id:"unloading-topics-and-bundles",level:3},{value:"Namespace bundles splitting",id:"namespace-bundles-splitting",level:3},{value:"Automatic load shedding",id:"automatic-load-shedding",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4}],u={toc:d},c="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"load-distribution-across-pulsar-brokers"},"Load distribution across Pulsar brokers"),(0,i.yg)("p",null,"Pulsar is an horizontally scalable messaging system, so it is a core requirement that the traffic\nin a logical cluster must be spread across all the available Pulsar brokers, as evenly as possible."),(0,i.yg)("p",null,"In most cases, this is true out of the box and one shouldn't worry about it. There are, though,\nmultiple settings and tools to control the traffic distribution and they require a bit of\ncontext to understand how the traffic is managed in Pulsar."),(0,i.yg)("h2",{id:"pulsar-load-manager-architecture"},"Pulsar load manager architecture"),(0,i.yg)("h3",{id:"dynamic-assignment-of-topics-to-brokers"},"Dynamic assignment of topics to brokers"),(0,i.yg)("p",null,"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the\ncluster."),(0,i.yg)("p",null,"When a clients starts using new topics that are not assigned to any broker, it will trigger a\nprocess that, given the load conditions, it will choose the best suited broker to acquire ownership\nof such topic."),(0,i.yg)("p",null,'In case of partitioned topics, different partitions might be assigned to different brokers. We talk\nabout "topic" in this context to mean either a non-partitioned topic or one partition of a topic.'),(0,i.yg)("p",null,'The assignment is "dynamic" because it can change very quickly. For example, if the broker owning\nthe topic crashes, the topic will be reassigned immediately to another broker. Another scenario is\nthat the broker owning the topic becomes overloaded. In this case too, the topic will be\nreassigned to a less loaded broker.'),(0,i.yg)("p",null,"The dynamic assignment is made possible by the stateless nature of brokers. This also ensure that\nwe can quickly expand or shrink the cluster based on usage."),(0,i.yg)("h3",{id:"assignment-granularity"},"Assignment granularity"),(0,i.yg)("p",null,"The assignment of topics/partitions to brokers is not done at the individual level. The reason for\nit is to amortize the amount of information that we need to keep track (eg. which topics are\nassigned to a particular broker, what's the load on topics for a broker and similar)."),(0,i.yg)("p",null,'Instead of individual topic/partition assignment, each broker takes ownership of a subset of the\ntopics for a namespace. This subset is called a "',(0,i.yg)("em",{parentName:"p"},"bundle"),"\" and effectively it's a sharding\nmechanism."),(0,i.yg)("p",null,'The namespace is the "administrative" unit: many config knobs or operations are done at the\nnamespace level.'),(0,i.yg)("p",null,'For assignment, a namespaces is sharded into a list of "bundles", with each bundle comprising\na portion of overall hash range of the namespace.'),(0,i.yg)("p",null,"Topics are assigned to a particular bundle by taking the hash of the topic name and seeing in which\nbundle the hash falls into."),(0,i.yg)("p",null,"Each bundle is independent of the others and thus is independently assigned to different brokers."),(0,i.yg)("h3",{id:"creating-namespaces-and-bundles"},"Creating namespaces and bundles"),(0,i.yg)("p",null,"When creating a new namespace, it will set to use the default number of bundles. This is set in\n",(0,i.yg)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# When a namespace is created without specifying the number of bundle, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n")),(0,i.yg)("p",null,"One can either change the system default, or override it when creating a new namespace:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n")),(0,i.yg)("p",null,"With this command, we're creating a namespace with 16 initial bundles. Therefore the topics for\nthis namespaces can immediately be spread across up to 16 brokers."),(0,i.yg)("p",null,"In general, if the expected traffic and number of topics is known in advance, it's a good idea to\nstart with a reasonable number of bundles instead of waiting for the system to auto-correct the\ndistribution."),(0,i.yg)("p",null,"On a same note, it is normally beneficial to start with more bundles than number of brokers,\nprimarily because of the hashing nature of the distribution of topics into bundles. For example,\nfor a namespace with 1000 topics, using something like 64 bundles will achieve a good distribution\nof traffic across 16 brokers."),(0,i.yg)("h3",{id:"unloading-topics-and-bundles"},"Unloading topics and bundles"),(0,i.yg)("p",null,'In Pulsar there is an admin operation of "unloading" a topic. Unloading means to close the topics,\nrelease ownership and reassign the topics to a new broker, based on current load.'),(0,i.yg)("p",null,"When unload happens, the client will experience a small latency blip, typically in the order of\ntens of milliseconds, while the topic is reassigned."),(0,i.yg)("p",null,"Unloading is the mechanism used by the load-manager to perform the load shedding, but it can\nalso be triggered manually, for example to correct the assignments and redistribute traffic\neven before having any broker overloaded."),(0,i.yg)("p",null,"Unloading a topic has no effect on the assignment, but it will just close and reopen the\nparticular topic:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n")),(0,i.yg)("p",null,"To unload all topics for a namespace and trigger reassignments:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin namespaces unload tenant/namespace\n\n")),(0,i.yg)("h3",{id:"namespace-bundles-splitting"},"Namespace bundles splitting"),(0,i.yg)("p",null,"Since the load for the topics in a bundle might change over time, or could just be hard to predict\nupfront, bundles can be split in 2 by brokers. The new smaller bundles can then be reassigned\nto different brokers."),(0,i.yg)("p",null,"The splitting happens based on some tunable thresholds. Any existing bundle that exceeds any\nof the threshold is a candidate to be split. By default the newly split bundles are also\nimmediately offloaded to other brokers, to facilitate the traffic distribution."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# enable/disable namespace bundle auto split\nloadBalancerAutoBundleSplitEnabled=true\n\n# enable/disable automatic unloading of split bundles\nloadBalancerAutoUnloadSplitBundlesEnabled=true\n\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n")),(0,i.yg)("h3",{id:"automatic-load-shedding"},"Automatic load shedding"),(0,i.yg)("p",null,"In Pulsar's load manager there is support for automatic load shedding. This means that whenever\nthe system recognized a particular broker is overloaded, it will force some traffic to be\nreassigned to less loaded brokers."),(0,i.yg)("p",null,'When a broker is identifies as overloaded, it will force to "unload" a subset of the bundles, the\nones with higher traffic, that make up for the overload percentage.'),(0,i.yg)("p",null,"For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then\nit will unload the percent difference plus a 5% margin: ",(0,i.yg)("inlineCode",{parentName:"p"},"(95% - 85%) + 5% = 15%"),"."),(0,i.yg)("p",null,"Given the selection of bundles to offload is based on traffic (as a proxy measure for cpu, network\nand memory), broker will unload bundles for at least 15% of traffic."),(0,i.yg)("p",null,"The automatic load shedding is enabled by default and can be disabled with this setting:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Enable/disable automatic bundle unloading for load-shedding\nloadBalancerSheddingEnabled=true\n\n")),(0,i.yg)("p",null,"There are additional settings that apply to shedding:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more that once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n")),(0,i.yg)("h4",{id:"broker-overload-thresholds"},"Broker overload thresholds"),(0,i.yg)("p",null,"The determinations of when a broker is overloaded is based on threshold of CPU, network and\nmemory usage. Whenever either of those metrics reaches the threshold, it will trigger the shedding\n(if enabled)."),(0,i.yg)("p",null,"By default, overload threshold is set at 85%:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Usage threshold to determine a broker as over-loaded\nloadBalancerBrokerOverloadedThresholdPercentage=85\n\n")),(0,i.yg)("p",null,"The usage stats are gathered by Pulsar from the system metrics."),(0,i.yg)("p",null,"In case of network utilization, in some cases the network interface speed reported by Linux is\nnot correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps\nNIC speed for which the OS report 10Gbps speed."),(0,i.yg)("p",null,"Because of the incorrect max speed, the Pulsar load manager might think the broker has not\nreached the NIC capacity, while in fact it's already using all the bandwidth and the traffic is\nbeing slowed down."),(0,i.yg)("p",null,"There is a setting to correct the max NIC speed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Override the auto-detection of the network interfaces max speed.\n# This option is useful in some environments (eg: EC2 VMs) where the max speed\n# reported by Linux is not reflecting the real bandwidth available to the broker.\n# Since the network usage is employed by the load manager to decide when a broker\n# is overloaded, it is important to make sure the info is correct or override it\n# with the right value here. The configured value can be a double (eg: 0.8) and that\n# can be used to trigger load-shedding even before hitting on NIC limits.\nloadBalancerOverrideBrokerNicSpeedGbps=\n\n")),(0,i.yg)("p",null,"When the value is empty, Pulsar will use the value reported by the OS."))}p.isMDXComponent=!0}}]);