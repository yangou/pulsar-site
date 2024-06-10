"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31013],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||s;return a?t.createElement(m,o(o({ref:n},c),{},{components:a})):t.createElement(m,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},25251:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=a(58168),r=(a(96540),a(15680));const s={id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"standalone-docker"},o=void 0,l={unversionedId:"standalone-docker",id:"version-2.6.1/standalone-docker",title:"Set up a standalone Pulsar in Docker",description:"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container.",source:"@site/versioned_docs/version-2.6.1/standalone-docker.md",sourceDirName:".",slug:"/standalone-docker",permalink:"/docs/2.6.1/standalone-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/standalone-docker.md",tags:[],version:"2.6.1",frontMatter:{id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"standalone-docker"}},i={},u=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."),(0,r.yg)("p",null,"If you have not installed Docker, download it following ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,r.yg)("h2",{id:"start-pulsar-in-docker"},"Start Pulsar in Docker"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For MacOS, Linux, and Windows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ docker run -it -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.6.1 bin/pulsar standalone\n\n")))),(0,r.yg)("p",null,"A few things to note about this command:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The data, metadata, and configuration are persisted on Docker volumes in order to not start "fresh" every\ntime the container is restarted. For details on the volumes you can use ',(0,r.yg)("inlineCode",{parentName:"li"},"docker volume inspect <sourcename>")),(0,r.yg)("li",{parentName:"ul"},"For Docker on Windows make sure to configure it to use Linux containers")),(0,r.yg)("p",null,"If you start Pulsar successfully, you will see ",(0,r.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"When you start a local standalone cluster, a ",(0,r.yg)("inlineCode",{parentName:"p"},"public/default"))),(0,r.yg)("p",null,"namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces.\nFor more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/concepts-messaging#topics"},"Topics"),"."),(0,r.yg)("h2",{id:"use-pulsar-in-docker"},"Use Pulsar in Docker"),(0,r.yg)("p",null,"Pulsar offers client libraries for ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/client-libraries-java"},"Java"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/client-libraries-go"},"Go"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/client-libraries-python"},"Python"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,r.yg)("p",null,"The following example will guide you get started with Pulsar quickly by using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/client-libraries-python"},"Python client API"),"\nclient API."),(0,r.yg)("p",null,"Install the Pulsar Python client library directly from ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client\n\n")),(0,r.yg)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.yg)("p",null,"Create a consumer and subscribe to the topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,r.yg)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.yg)("p",null,"Now start a producer to send some test messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,r.yg)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,r.yg)("p",null,"In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.1/admin-api-overview"},"Admin API Overview"),"."),(0,r.yg)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n")),(0,r.yg)("p",null,"The output is something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n\n')))}d.isMDXComponent=!0}}]);