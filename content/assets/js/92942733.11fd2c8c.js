"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55322],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(58168),a=(r(96540),r(15680));const n={id:"deploy-monitoring",title:"Monitoring",sidebar_label:"Monitoring",original_id:"deploy-monitoring"},i=void 0,s={unversionedId:"deploy-monitoring",id:"version-2.6.3/deploy-monitoring",title:"Monitoring",description:"You can use different ways to monitor a Pulsar cluster, exposing both metrics that relate to the usage of topics and the overall health of the individual components of the cluster.",source:"@site/versioned_docs/version-2.6.3/deploy-monitoring.md",sourceDirName:".",slug:"/deploy-monitoring",permalink:"/docs/2.6.3/deploy-monitoring",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/deploy-monitoring.md",tags:[],version:"2.6.3",frontMatter:{id:"deploy-monitoring",title:"Monitoring",sidebar_label:"Monitoring",original_id:"deploy-monitoring"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Bare metal multi-cluster",permalink:"/docs/2.6.3/deploy-bare-metal-multi-cluster"},next:{title:"ZooKeeper and BookKeeper",permalink:"/docs/2.6.3/administration-zk-bk"}},l={},p=[{value:"Collect metrics",id:"collect-metrics",level:2},{value:"Broker stats",id:"broker-stats",level:3},{value:"ZooKeeper stats",id:"zookeeper-stats",level:3},{value:"BookKeeper stats",id:"bookkeeper-stats",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:2},{value:"Dashboards",id:"dashboards",level:2},{value:"Pulsar per-topic dashboard",id:"pulsar-per-topic-dashboard",level:3},{value:"Grafana",id:"grafana",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can use different ways to monitor a Pulsar cluster, exposing both metrics that relate to the usage of topics and the overall health of the individual components of the cluster."),(0,a.yg)("h2",{id:"collect-metrics"},"Collect metrics"),(0,a.yg)("p",null,"You can collect broker stats, ZooKeeper stats, and BookKeeper stats."),(0,a.yg)("h3",{id:"broker-stats"},"Broker stats"),(0,a.yg)("p",null,"You can collect Pulsar broker metrics from brokers and export the metrics in JSON format. The Pulsar broker metrics mainly have two types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("em",{parentName:"p"},"Destination dumps"),", which contain stats for each individual topic. You can fetch the destination dumps using the command below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin broker-stats destinations\n\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Broker metrics, which contain the broker information and topics stats aggregated at namespace level. You can fetch the broker metrics using the command below:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin broker-stats monitoring-metrics\n\n")))),(0,a.yg)("p",null,"All the message rates are updated every 1min."),(0,a.yg)("p",null,"The aggregated broker metrics are also exposed in the ",(0,a.yg)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus")," format at:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nhttp://$BROKER_ADDRESS:8080/metrics/\n\n")),(0,a.yg)("h3",{id:"zookeeper-stats"},"ZooKeeper stats"),(0,a.yg)("p",null,"The local Zookeeper and configuration store server and clients that are shipped with Pulsar have been instrumented to expose detailed stats through Prometheus as well."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nhttp://$LOCAL_ZK_SERVER:8000/metrics\nhttp://$GLOBAL_ZK_SERVER:8001/metrics\n\n")),(0,a.yg)("p",null,"The default port of local ZooKeeper is ",(0,a.yg)("inlineCode",{parentName:"p"},"8000")," and the default port of configuration store is ",(0,a.yg)("inlineCode",{parentName:"p"},"8001"),". You can change the default port of local Zookeeper and configuration store by specifying system property ",(0,a.yg)("inlineCode",{parentName:"p"},"stats_server_port"),"."),(0,a.yg)("h3",{id:"bookkeeper-stats"},"BookKeeper stats"),(0,a.yg)("p",null,"For BookKeeper you can configure the stats frameworks by changing the ",(0,a.yg)("inlineCode",{parentName:"p"},"statsProviderClass")," in\n",(0,a.yg)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf"),"."),(0,a.yg)("p",null,"The default BookKeeper configuration, which is included with Pulsar distribution, enables the Prometheus exporter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nhttp://$BOOKIE_ADDRESS:8000/metrics\n\n")),(0,a.yg)("p",null,"The default port for bookie is ",(0,a.yg)("inlineCode",{parentName:"p"},"8000")," (instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"8080"),"). You can change the port by configuring ",(0,a.yg)("inlineCode",{parentName:"p"},"prometheusStatsHttpPort")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf"),"."),(0,a.yg)("h2",{id:"configure-prometheus"},"Configure Prometheus"),(0,a.yg)("p",null,"You can use Prometheus to collect and store the metrics data. For details, refer to ",(0,a.yg)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/getting_started/"},"Prometheus guide"),"."),(0,a.yg)("p",null,"When you run Pulsar on bare metal, you can provide the list of nodes that needs to be probed. When you deploy Pulsar in a Kubernetes cluster, the monitoring is automatically setup with the ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.3/deploy-kubernetes"},"provided")," instructions."),(0,a.yg)("h2",{id:"dashboards"},"Dashboards"),(0,a.yg)("p",null,"When you collect time series statistics, the major problem is to make sure the number of dimensions attached to the data does not explode."),(0,a.yg)("p",null,"For that reason you only need to collect time series of metrics aggregated at the namespace level."),(0,a.yg)("h3",{id:"pulsar-per-topic-dashboard"},"Pulsar per-topic dashboard"),(0,a.yg)("p",null,"The per-topic dashboard instructions are available at ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.6.3/administration-dashboard"},"Dashboard"),"."),(0,a.yg)("h3",{id:"grafana"},"Grafana"),(0,a.yg)("p",null,"You can use grafana to easily create dashboard driven by the data that is stored in Prometheus."),(0,a.yg)("p",null,"When you deploy Pulsar on Kubernetes, a ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-grafana")," Docker image is enabled by default. You can use the docker image with the principal dashboards."),(0,a.yg)("p",null,"Enter the command below to use the dashboard manually:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\ndocker run -p3000:3000 \\\n        -e PROMETHEUS_URL=http://$PROMETHEUS_HOST:9090/ \\\n        apachepulsar/pulsar-grafana:latest\n\n")))}d.isMDXComponent=!0}}]);