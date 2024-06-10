"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26234],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||s;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const s={id:"getting-started-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"getting-started-docker"},o=void 0,l={unversionedId:"getting-started-docker",id:"version-2.7.0/getting-started-docker",title:"Set up a standalone Pulsar in Docker",description:"For local development and testing, you can run Pulsar in standalone",source:"@site/versioned_docs/version-2.7.0/getting-started-docker.md",sourceDirName:".",slug:"/getting-started-docker",permalink:"/docs/2.7.0/getting-started-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/getting-started-docker.md",tags:[],version:"2.7.0",frontMatter:{id:"getting-started-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"getting-started-docker"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/docs/2.7.0/getting-started-standalone"},next:{title:"Run Pulsar in Kubernetes",permalink:"/docs/2.7.0/getting-started-helm"}},i={},c=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"For local development and testing, you can run Pulsar in standalone\nmode on your own machine within a Docker container."),(0,a.yg)("p",null,"If you have not installed Docker, download it following ",(0,a.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,a.yg)("h2",{id:"start-pulsar-in-docker"},"Start Pulsar in Docker"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For MacOS, Linux, and Windows:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:2.7.0 \\\nbin/pulsar standalone\n\n")))),(0,a.yg)("p",null,"A few things to note about this command:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes in order to not start "fresh" every\ntime the container is restarted. For details on the volumes you can use ',(0,a.yg)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>")),(0,a.yg)("li",{parentName:"ul"},"For Docker on Windows make sure to configure it to use Linux containers")),(0,a.yg)("p",null,"If you start Pulsar successfully, you will see ",(0,a.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\n2017-08-09 22:34:04,030 - INFO  - [main:WebService@213] - Web Service started at http://127.0.0.1:8080\n2017-08-09 22:34:04,038 - INFO  - [main:PulsarService@335] - messaging service is ready, bootstrap service on port=8080, broker url=pulsar://127.0.0.1:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@4db60246\n...\n\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When you start a local standalone cluster, a ",(0,a.yg)("inlineCode",{parentName:"p"},"public/default")," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/concepts-messaging#topics"},"Topics"),".")),(0,a.yg)("h2",{id:"use-pulsar-in-docker"},"Use Pulsar in Docker"),(0,a.yg)("p",null,"Pulsar offers client libraries for ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-java"},"Java"),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-go"},"Go"),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-python"},"Python"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,a.yg)("p",null,"The following example will guide you get started with Pulsar quickly by using the ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/client-libraries-python"},"Python"),"\nclient API."),(0,a.yg)("p",null,"Install the Pulsar Python client library directly from ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client\n\n")),(0,a.yg)("h3",{id:"consume-a-message"},"Consume a message"),(0,a.yg)("p",null,"Create a consumer and subscribe to the topic:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,a.yg)("h3",{id:"produce-a-message"},"Produce a message"),(0,a.yg)("p",null,"Now start a producer to send some test messages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,a.yg)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,a.yg)("p",null,"In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.7.0/admin-api-overview"},"Admin API Overview"),"."),(0,a.yg)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n")),(0,a.yg)("p",null,"The output is something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "averageMsgSize": 0.0,\n  "msgRateIn": 0.0,\n  "msgRateOut": 0.0,\n  "msgThroughputIn": 0.0,\n  "msgThroughputOut": 0.0,\n  "publishers": [\n    {\n      "address": "/172.17.0.1:35048",\n      "averageMsgSize": 0.0,\n      "clientVersion": "1.19.0-incubating",\n      "connectedSince": "2017-08-09 20:59:34.621+0000",\n      "msgRateIn": 0.0,\n      "msgThroughputIn": 0.0,\n      "producerId": 0,\n      "producerName": "standalone-0-1"\n    }\n  ],\n  "replication": {},\n  "storageSize": 16,\n  "subscriptions": {\n    "my-sub": {\n      "blockedSubscriptionOnUnackedMsgs": false,\n      "consumers": [\n        {\n          "address": "/172.17.0.1:35064",\n          "availablePermits": 996,\n          "blockedConsumerOnUnackedMsgs": false,\n          "clientVersion": "1.19.0-incubating",\n          "connectedSince": "2017-08-09 21:05:39.222+0000",\n          "consumerName": "166111",\n          "msgRateOut": 0.0,\n          "msgRateRedeliver": 0.0,\n          "msgThroughputOut": 0.0,\n          "unackedMessages": 0\n        }\n      ],\n      "msgBacklog": 0,\n      "msgRateExpired": 0.0,\n      "msgRateOut": 0.0,\n      "msgRateRedeliver": 0.0,\n      "msgThroughputOut": 0.0,\n      "type": "Exclusive",\n      "unackedMessages": 0\n    }\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);