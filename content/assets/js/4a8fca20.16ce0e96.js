"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45530],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||s;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},24818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const s={id:"getting-started-docker",title:"Start a standalone cluster with Docker",sidebar_label:"Pulsar in Docker",original_id:"getting-started-docker"},o=void 0,l={unversionedId:"getting-started-docker",id:"version-2.2.1/getting-started-docker",title:"Start a standalone cluster with Docker",description:"For the purposes of local development and testing, you can run Pulsar in standalone",source:"@site/versioned_docs/version-2.2.1/getting-started-docker.md",sourceDirName:".",slug:"/getting-started-docker",permalink:"/docs/2.2.1/getting-started-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/getting-started-docker.md",tags:[],version:"2.2.1",frontMatter:{id:"getting-started-docker",title:"Start a standalone cluster with Docker",sidebar_label:"Pulsar in Docker",original_id:"getting-started-docker"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Run Pulsar locally",permalink:"/docs/2.2.1/getting-started-standalone"},next:{title:"Overview",permalink:"/docs/2.2.1/client-libraries"}},i={},c=[{value:"Starting Pulsar inside Docker",id:"starting-pulsar-inside-docker",level:2},{value:"Start publishing and consuming messages",id:"start-publishing-and-consuming-messages",level:2},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For the purposes of local development and testing, you can run Pulsar in standalone\nmode on your own machine within a Docker container."),(0,r.yg)("p",null,"If you have not installed Docker, download it following ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"the instructions")," for your OS."),(0,r.yg)("h2",{id:"starting-pulsar-inside-docker"},"Starting Pulsar inside Docker"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ docker run -it \\\n  -p 6650:6650 \\\n  -p 8080:8080 \\\n  -v $PWD/data:/pulsar/data \\\n  apachepulsar/pulsar:{{site.current_version}} \\\n  bin/pulsar standalone\n\n")),(0,r.yg)("p",null,"Under Windows, you should use something like the following docker command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ docker run -it \\\n  -p 6650:6650 \\\n  -p 8080:8080 \\\n  -v "$PWD/data:/pulsar/data".ToLower() \\\n  apachepulsar/pulsar:{{site.current_version}} \\\n  bin/pulsar standalone\n\n')),(0,r.yg)("p",null,"A few things to note about this command:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"$PWD/data")," : The docker host directory under the Windows operating system must be lowercase.",(0,r.yg)("inlineCode",{parentName:"li"},"$PWD/data")," can provide you with the specified directory, for example: ",(0,r.yg)("inlineCode",{parentName:"li"},"E:/data"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-v $PWD/data:/pulsar/data"),': This will make the process inside the container to store the\ndata and metadata in the filesystem outside the container, in order to not start "fresh" every\ntime the container is restarted.')),(0,r.yg)("p",null,"If Pulsar has been successfully started, you should see ",(0,r.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n2017-08-09 22:34:04,030 - INFO  - [main:WebService@213] - Web Service started at http://127.0.0.1:8080\n2017-08-09 22:34:04,038 - INFO  - [main:PulsarService@335] - messaging service is ready, bootstrap service on port=8080, broker url=pulsar://127.0.0.1:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@4db60246\n...\n\n")),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"automatically-created-namespace"},"Automatically created namespace"),(0,r.yg)("p",{parentName:"blockquote"},"When you start a local standalone cluster, Pulsar will automatically create a ",(0,r.yg)("inlineCode",{parentName:"p"},"public/default"),"\nnamespace that you can use for development purposes. All Pulsar topics are managed within namespaces.\nFor more info, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/concepts-messaging#topics"},"Topics"),".")),(0,r.yg)("h2",{id:"start-publishing-and-consuming-messages"},"Start publishing and consuming messages"),(0,r.yg)("p",null,"Pulsar currently offers client libraries for ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-java"},"Java"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-go"},"Go"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-python"},"Python"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-cpp"},"C++"),". If you're running a local standalone cluster, you can\nuse one of these root URLs for interacting with your cluster:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pulsar://localhost:6650")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,r.yg)("p",null,"Here's an example that lets you quickly get started with Pulsar by using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-python"},"Python"),"\nclient API."),(0,r.yg)("p",null,"You can install the Pulsar Python client library directly from ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/pulsar-client/"},"PyPI"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client\n\n")),(0,r.yg)("p",null,"First create a consumer and subscribe to the topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,r.yg)("p",null,"Now we can start a producer to send some test messages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,r.yg)("h2",{id:"get-the-topic-statistics"},"Get the topic statistics"),(0,r.yg)("p",null,"In Pulsar you can use REST, Java, or command-line tools to control every aspect of the system.\nYou can find detailed documentation of all the APIs in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.1/admin-api-overview"},"Admin API Overview"),"."),(0,r.yg)("p",null,"In the simplest example, you can use curl to probe the stats for a particular topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n")),(0,r.yg)("p",null,"The output will be something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "averageMsgSize": 0.0,\n  "msgRateIn": 0.0,\n  "msgRateOut": 0.0,\n  "msgThroughputIn": 0.0,\n  "msgThroughputOut": 0.0,\n  "publishers": [\n    {\n      "address": "/172.17.0.1:35048",\n      "averageMsgSize": 0.0,\n      "clientVersion": "1.19.0-incubating",\n      "connectedSince": "2017-08-09 20:59:34.621+0000",\n      "msgRateIn": 0.0,\n      "msgThroughputIn": 0.0,\n      "producerId": 0,\n      "producerName": "standalone-0-1"\n    }\n  ],\n  "replication": {},\n  "storageSize": 16,\n  "subscriptions": {\n    "my-sub": {\n      "blockedSubscriptionOnUnackedMsgs": false,\n      "consumers": [\n        {\n          "address": "/172.17.0.1:35064",\n          "availablePermits": 996,\n          "blockedConsumerOnUnackedMsgs": false,\n          "clientVersion": "1.19.0-incubating",\n          "connectedSince": "2017-08-09 21:05:39.222+0000",\n          "consumerName": "166111",\n          "msgRateOut": 0.0,\n          "msgRateRedeliver": 0.0,\n          "msgThroughputOut": 0.0,\n          "unackedMessages": 0\n        }\n      ],\n      "msgBacklog": 0,\n      "msgRateExpired": 0.0,\n      "msgRateOut": 0.0,\n      "msgRateRedeliver": 0.0,\n      "msgThroughputOut": 0.0,\n      "type": "Exclusive",\n      "unackedMessages": 0\n    }\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);