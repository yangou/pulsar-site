"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19234],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return n?t.createElement(d,s(s({ref:a},c),{},{components:n})):t.createElement(d,s({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42190:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const i={id:"client-libraries-java",title:"The Pulsar Java client",sidebar_label:"Java",original_id:"client-libraries-java"},s=void 0,o={unversionedId:"client-libraries-java",id:"version-2.3.1/client-libraries-java",title:"The Pulsar Java client",description:"The Pulsar Java client can be used both to create Java producers, consumers, and readers of messages and to perform administrative tasks. The current version of the Java client is 2.3.1.",source:"@site/versioned_docs/version-2.3.1/client-libraries-java.md",sourceDirName:".",slug:"/client-libraries-java",permalink:"/docs/2.3.1/client-libraries-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/client-libraries-java.md",tags:[],version:"2.3.1",frontMatter:{id:"client-libraries-java",title:"The Pulsar Java client",sidebar_label:"Java",original_id:"client-libraries-java"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"Extend Authentication and Authorization",permalink:"/docs/2.3.1/security-extending"},next:{title:"Go",permalink:"/docs/2.3.1/client-libraries-go"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Producers",id:"producers",level:2},{value:"Configuring producers",id:"configuring-producers",level:3},{value:"Message routing",id:"message-routing",level:3},{value:"Async send",id:"async-send",level:3},{value:"Configuring messages",id:"configuring-messages",level:3},{value:"Consumers",id:"consumers",level:2},{value:"Configuring consumers",id:"configuring-consumers",level:3},{value:"Async receive",id:"async-receive",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Reader interface",id:"reader-interface",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Schema example",id:"schema-example",level:3},{value:"Authentication",id:"authentication",level:2},{value:"TLS Authentication",id:"tls-authentication",level:3},{value:"Athenz",id:"athenz",level:3}],c={toc:p},u="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Pulsar Java client can be used both to create Java producers, consumers, and ",(0,r.yg)("a",{parentName:"p",href:"#reader-interface"},"readers")," of messages and to perform ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/admin-api-overview"},"administrative tasks"),". The current version of the Java client is ",(0,r.yg)("strong",{parentName:"p"},"2.3.1"),"."),(0,r.yg)("p",null,"Javadoc for the Pulsar client is divided up into two domains, by package:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Package"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Maven Artifact"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/2.3.1"},(0,r.yg)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.api"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The producer and consumer API"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C2.3.1%7Cjar"},"org.apache.pulsar:pulsar-client:2.3.1"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/2.3.1"},(0,r.yg)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.admin"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"The Java ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.1/admin-api-overview"},"admin API")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C2.3.1%7Cjar"},"org.apache.pulsar:pulsar-client-admin:2.3.1"))))),(0,r.yg)("p",null,"This document will focus only on the client API for producing and consuming messages on Pulsar topics. For a guide to using the Java admin client, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/admin-api-overview"},"The Pulsar admin interface"),"."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"The latest version of the Pulsar Java client library is available via ",(0,r.yg)("a",{parentName:"p",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C2.3.1%7Cjar"},"Maven Central"),". To use the latest version, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library to your build configuration."),(0,r.yg)("h3",{id:"maven"},"Maven"),(0,r.yg)("p",null,"If you're using Maven, add this to your ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\n\x3c!-- in your <properties> block --\x3e\n<pulsar.version>2.3.1</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,r.yg)("h3",{id:"gradle"},"Gradle"),(0,r.yg)("p",null,"If you're using Gradle, add this to your ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"\ndef pulsarVersion = '2.3.1'\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-client', version: pulsarVersion\n}\n\n")),(0,r.yg)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.yg)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.yg)("p",null,"Pulsar protocol URLs are assigned to specific clusters, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," scheme and have a default port of 6650. Here's an example for ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.yg)("p",null,"A URL for a production Pulsar cluster may look something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.yg)("p",null,"If you're using ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/security-tls-authentication"},"TLS")," authentication, the URL will look like something like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.yg)("h2",{id:"client-configuration"},"Client configuration"),(0,r.yg)("p",null,"You can instantiate a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object using just a URL for the target Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#cluster"},"cluster"),", like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\n')),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"default-broker-urls-for-standalone-clusters"},"Default broker URLs for standalone clusters"),(0,r.yg)("p",{parentName:"blockquote"},"If you're running a cluster in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/getting-started-standalone"},"standalone mode"),", the broker will be available at the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," URL by default.")),(0,r.yg)("p",null,"Check out the Javadoc for the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," class for a full listing of configurable parameters."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In addition to client-level configuration, you can also apply ",(0,r.yg)("a",{parentName:"p",href:"#configuring-producers"},"producer")," and ",(0,r.yg)("a",{parentName:"p",href:"#configuring-consumers"},"consumer")," specific configuration, as you'll see in the sections below.")),(0,r.yg)("h2",{id:"producers"},"Producers"),(0,r.yg)("p",null,"In Pulsar, producers write messages to topics. Once you've instantiated a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object (as in the section ",(0,r.yg)("a",{parentName:"p",href:"#client-configuration"},"above"),"), you can create a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Producer"},"Producer")," for a specific Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#topic"},"topic"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<byte[]> producer = client.newProducer()\n        .topic("my-topic")\n        .create();\n\n// You can then send messages to the broker and topic you specified:\nproducer.send("My message".getBytes());\n\n')),(0,r.yg)("p",null,"By default, producers produce messages that consist of byte arrays. You can produce different types, however, by specifying a message ",(0,r.yg)("a",{parentName:"p",href:"#schemas"},"schema"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<String> stringProducer = client.newProducer(Schema.STRING)\n        .topic("my-topic")\n        .create();\nstringProducer.send("My message");\n\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"You should always make sure to close your producers, consumers, and clients when they are no longer needed:")),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nproducer.close();\nconsumer.close();\nclient.close();\n\n\n"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Close operations can also be asynchronous:")),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nproducer.closeAsync()\n   .thenRun(() -> System.out.println("Producer closed"));\n   .exceptionally((ex) -> {\n       System.err.println("Failed to close producer: " + ex);\n       return ex;\n   });\n\n\n'))),(0,r.yg)("h3",{id:"configuring-producers"},"Configuring producers"),(0,r.yg)("p",null,"If you instantiate a ",(0,r.yg)("inlineCode",{parentName:"p"},"Producer")," object specifying only a topic name, as in the example above, the producer will use the default configuration. To use a non-default configuration, there's a variety of configurable parameters that you can set. For a full listing, see the Javadoc for the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ProducerBuilder"},"ProducerBuilder")," class. Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<byte[]> producer = client.newProducer()\n    .topic("my-topic")\n    .batchingMaxPublishDelay(10, TimeUnit.MILLISECONDS)\n    .sendTimeout(10, TimeUnit.SECONDS)\n    .blockIfQueueFull(true)\n    .create();\n\n')),(0,r.yg)("h3",{id:"message-routing"},"Message routing"),(0,r.yg)("p",null,"When using partitioned topics, you can specify the routing mode whenever you publish messages using a producer. For more on specifying a routing mode using the Java client, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/cookbooks-partitioned"},"Partitioned Topics")," cookbook."),(0,r.yg)("h3",{id:"async-send"},"Async send"),(0,r.yg)("p",null,"You can also publish messages ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#send-modes"},"asynchronously")," using the Java client. With async send, the producer will put the message in a blocking queue and return immediately. The client library will then send the message to the broker in the background. If the queue is full (max size configurable), the producer could be blocked or fail immediately when calling the API, depending on arguments passed to the producer."),(0,r.yg)("p",null,"Here's an example async send operation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nproducer.sendAsync("my-async-message".getBytes()).thenAccept(msgId -> {\n    System.out.printf("Message with ID %s successfully sent", msgId);\n});\n\n')),(0,r.yg)("p",null,"As you can see from the example above, async send operations return a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageId"},"MessageId")," wrapped in a ",(0,r.yg)("a",{parentName:"p",href:"http://www.baeldung.com/java-completablefuture"},(0,r.yg)("inlineCode",{parentName:"a"},"CompletableFuture")),"."),(0,r.yg)("h3",{id:"configuring-messages"},"Configuring messages"),(0,r.yg)("p",null,"In addition to a value, it's possible to set additional items on a given message:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nproducer.newMessage()\n    .key("my-message-key")\n    .value("my-async-message".getBytes())\n    .property("my-key", "my-value")\n    .property("my-other-key", "my-other-value")\n    .send();\n\n')),(0,r.yg)("p",null,"As for the previous case, it's also possible to terminate the builder chain with ",(0,r.yg)("inlineCode",{parentName:"p"},"sendAsync()")," and\nget a future returned."),(0,r.yg)("h2",{id:"consumers"},"Consumers"),(0,r.yg)("p",null,"In Pulsar, consumers subscribe to topics and handle messages that producers publish to those topics. You can instantiate a new ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#consumer"},"consumer")," by first instantiating a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object and passing it a URL for a Pulsar broker (as ",(0,r.yg)("a",{parentName:"p",href:"#client-configuration"},"above"),")."),(0,r.yg)("p",null,"Once you've instantiated a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object, you can create a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Consumer"},"Consumer")," by specifying a ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#topic"},"topic")," and a ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#subscription-modes"},"subscription"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nConsumer consumer = client.newConsumer()\n        .topic("my-topic")\n        .subscriptionName("my-subscription")\n        .subscribe();\n\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribe")," method will automatically subscribe the consumer to the specified topic and subscription. One way to make the consumer listen on the topic is to set up a ",(0,r.yg)("inlineCode",{parentName:"p"},"while")," loop. In this example loop, the consumer listens for messages, prints the contents of any message that's received, and then ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#acknowledgment-ack"},"acknowledges")," that the message has been processed. If the processing logic fails, we use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#acknowledgment-ack"},"negative acknowledgement"),"\nto have the message redelivered at a later point in time."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nwhile (true) {\n  // Wait for a message\n  Message msg = consumer.receive();\n\n  try {\n      // Do something with the message\n      System.out.printf("Message received: %s", new String(msg.getData()));\n\n      // Acknowledge the message\n      consumer.acknowledge(msg);\n  } catch (Exception e) {\n      // Message failed to process, redeliver later\n      consumer.negativeAcknowledge(msg);\n  }\n}\n\n')),(0,r.yg)("h3",{id:"configuring-consumers"},"Configuring consumers"),(0,r.yg)("p",null,"If you instantiate a ",(0,r.yg)("inlineCode",{parentName:"p"},"Consumer")," object specifying only a topic and subscription name, as in the example above, the consumer will use the default configuration. To use a non-default configuration, there's a variety of configurable parameters that you can set. For a full listing, see the Javadoc for the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ConsumerBuilder"},"ConsumerBuilder")," class. Here's an example:"),(0,r.yg)("p",null,"Here's an example configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nConsumer consumer = client.newConsumer()\n        .topic("my-topic")\n        .subscriptionName("my-subscription")\n        .ackTimeout(10, TimeUnit.SECONDS)\n        .subscriptionType(SubscriptionType.Exclusive)\n        .subscribe();\n\n')),(0,r.yg)("h3",{id:"async-receive"},"Async receive"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"receive")," method will receive messages synchronously (the consumer process will be blocked until a message is available). You can also use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#receive-modes"},"async receive"),", which will return immediately with a ",(0,r.yg)("a",{parentName:"p",href:"http://www.baeldung.com/java-completablefuture"},(0,r.yg)("inlineCode",{parentName:"a"},"CompletableFuture"))," object that completes once a new message is available."),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nCompletableFuture<Message> asyncMessage = consumer.receiveAsync();\n\n")),(0,r.yg)("p",null,"Async receive operations return a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," wrapped inside of a ",(0,r.yg)("a",{parentName:"p",href:"http://www.baeldung.com/java-completablefuture"},(0,r.yg)("inlineCode",{parentName:"a"},"CompletableFuture")),"."),(0,r.yg)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,r.yg)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously using ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#multi-topic-subscriptions"},"multi-topic subscriptions"),". To use multi-topic subscriptions you can supply either a regular expression (regex) or a ",(0,r.yg)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,r.yg)("p",null,"Here are some examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.regex.Pattern;\n\nConsumerBuilder consumerBuilder = pulsarClient.newConsumer()\n        .subscriptionName(subscription);\n\n// Subscribe to all topics in a namespace\nPattern allTopicsInNamespace = Pattern.compile("persistent://public/default/.*");\nConsumer allTopicsConsumer = consumerBuilder\n        .topicsPattern(allTopicsInNamespace)\n        .subscribe();\n\n// Subscribe to a subsets of topics in a namespace, based on regex\nPattern someTopicsInNamespace = Pattern.compile("persistent://public/default/foo.*");\nConsumer allTopicsConsumer = consumerBuilder\n        .topicsPattern(someTopicsInNamespace)\n        .subscribe();\n\n')),(0,r.yg)("p",null,"You can also subscribe to an explicit list of topics (across namespaces if you wish):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nList<String> topics = Arrays.asList(\n        "topic-1",\n        "topic-2",\n        "topic-3"\n);\n\nConsumer multiTopicConsumer = consumerBuilder\n        .topics(topics)\n        .subscribe();\n\n// Alternatively:\nConsumer multiTopicConsumer = consumerBuilder\n        .topics(\n            "topic-1",\n            "topic-2",\n            "topic-3"\n        )\n        .subscribe();\n\n')),(0,r.yg)("p",null,"You can also subscribe to multiple topics asynchronously using the ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribeAsync")," method rather than the synchronous ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribe")," method. Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPattern allTopicsInNamespace = Pattern.compile("persistent://public/default.*");\nconsumerBuilder\n        .topics(topics)\n        .subscribeAsync()\n        .thenAccept(consumer -> {\n            do {\n                try {\n                    Message msg = consumer.receive();\n                    // Do something with the received message\n                } catch (PulsarClientException e) {\n                    e.printStackTrace();\n                }\n            } while (true);\n        });\n\n')),(0,r.yg)("h2",{id:"reader-interface"},"Reader interface"),(0,r.yg)("p",null,"With the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-clients#reader-interface"},"reader interface"),', Pulsar clients can "manually position" themselves within a topic, reading all messages from a specified message onward. The Pulsar API for Java enables you to create  ',(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Reader"},"Reader")," objects by specifying a topic, a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageId"},"MessageId"),", and ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ReaderConfiguration"},"ReaderConfiguration"),"."),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nReaderConfiguration conf = new ReaderConfiguration();\nbyte[] msgIdBytes = // Some message ID byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(id)\n        .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n    // Process message\n}\n\n")),(0,r.yg)("p",null,"In the example above, a ",(0,r.yg)("inlineCode",{parentName:"p"},"Reader")," object is instantiated for a specific topic and message (by ID); the reader then iterates over each message in the topic after the message identified by ",(0,r.yg)("inlineCode",{parentName:"p"},"msgIdBytes")," (how that value is obtained depends on the application)."),(0,r.yg)("p",null,"The code sample above shows pointing the ",(0,r.yg)("inlineCode",{parentName:"p"},"Reader")," object to a specific message (by ID), but you can also use ",(0,r.yg)("inlineCode",{parentName:"p"},"MessageId.earliest")," to point to the earliest available message on the topic of ",(0,r.yg)("inlineCode",{parentName:"p"},"MessageId.latest")," to point to the most recent available message."),(0,r.yg)("h2",{id:"schemas"},"Schemas"),(0,r.yg)("p",null,'In Pulsar, all message data consists of byte arrays "under the hood." ',(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-schema-registry"},"Message schemas")," enable you to use other types of data when constructing and handling messages (from simple types like strings to more complex, application-specific types). If you construct, say, a ",(0,r.yg)("a",{parentName:"p",href:"#producers"},"producer")," without specifying a schema, then the producer can only produce messages of type ",(0,r.yg)("inlineCode",{parentName:"p"},"byte[]"),". Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nProducer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\n\n")),(0,r.yg)("p",null,"The producer above is equivalent to a ",(0,r.yg)("inlineCode",{parentName:"p"},"Producer<byte[]>")," (in fact, you should ",(0,r.yg)("em",{parentName:"p"},"always")," explicitly specify the type). If you'd like to use a producer for a different type of data, you'll need to specify a ",(0,r.yg)("strong",{parentName:"p"},"schema")," that informs Pulsar which data type will be transmitted over the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-terminology#topic"},"topic"),"."),(0,r.yg)("h3",{id:"schema-example"},"Schema example"),(0,r.yg)("p",null,"Let's say that you have a ",(0,r.yg)("inlineCode",{parentName:"p"},"SensorReading")," class that you'd like to transmit over a Pulsar topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\npublic class SensorReading {\n    public float temperature;\n\n    public SensorReading(float temperature) {\n        this.temperature = temperature;\n    }\n\n    // A no-arg constructor is required\n    public SensorReading() {\n    }\n\n    public float getTemperature() {\n        return temperature;\n    }\n\n    public void setTemperature(float temperature) {\n        this.temperature = temperature;\n    }\n}\n\n")),(0,r.yg)("p",null,"You could then create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Producer<SensorReading>")," (or ",(0,r.yg)("inlineCode",{parentName:"p"},"Consumer<SensorReading>"),") like so:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-readings")\n        .create();\n\n')),(0,r.yg)("p",null,"The following schema formats are currently available for Java:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"No schema or the byte array schema (which can be applied using ",(0,r.yg)("inlineCode",{parentName:"p"},"Schema.BYTES"),"):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<byte[]> bytesProducer = client.newProducer(Schema.BYTES)\n    .topic("some-raw-bytes-topic")\n    .create();\n\n')),(0,r.yg)("p",{parentName:"li"},"Or, equivalently:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<byte[]> bytesProducer = client.newProducer()\n    .topic("some-raw-bytes-topic")\n    .create();\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"String")," for normal UTF-8-encoded string data. This schema can be applied using ",(0,r.yg)("inlineCode",{parentName:"p"},"Schema.STRING"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nProducer<String> stringProducer = client.newProducer(Schema.STRING)\n    .topic("some-string-topic")\n    .create();\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON schemas can be created for POJOs using the ",(0,r.yg)("inlineCode",{parentName:"p"},"JSONSchema")," class. Here's an example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nSchema<MyPojo> pojoSchema = JSONSchema.of(MyPojo.class);\nProducer<MyPojo> pojoProducer = client.newProducer(pojoSchema)\n    .topic("some-pojo-topic")\n    .create();\n\n')))),(0,r.yg)("h2",{id:"authentication"},"Authentication"),(0,r.yg)("p",null,"Pulsar currently supports two authentication schemes: ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/security-tls-authentication"},"TLS")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/security-athenz"},"Athenz"),". The Pulsar Java client can be used with both."),(0,r.yg)("h3",{id:"tls-authentication"},"TLS Authentication"),(0,r.yg)("p",null,"To use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/security-tls-authentication"},"TLS"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"enableTls"),' method is deprecated and you need to use "pulsar+ssl://" in serviceUrl to enable, point your Pulsar client to a TLS cert path, and provide paths to cert and key files.'),(0,r.yg)("p",null,"Here's an example configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", "/path/to/client-cert.pem");\nauthParams.put("tlsKeyFile", "/path/to/client-key.pem");\n\nAuthentication tlsAuth = AuthenticationFactory\n        .create(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar+ssl://my-broker.com:6651")\n        .tlsTrustCertsFilePath("/path/to/cacert.pem")\n        .authentication(tlsAuth)\n        .build();\n\n')),(0,r.yg)("h3",{id:"athenz"},"Athenz"),(0,r.yg)("p",null,"To use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/security-athenz"},"Athenz")," as an authentication provider, you need to ",(0,r.yg)("a",{parentName:"p",href:"#tls-authentication"},"use TLS")," and provide values for four parameters in a hash:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"tenantDomain")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"tenantService")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"providerDomain")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"privateKey"))),(0,r.yg)("p",null,"You can also set an optional ",(0,r.yg)("inlineCode",{parentName:"p"},"keyId"),". Here's an example configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nMap<String, String> authParams = new HashMap();\nauthParams.put("tenantDomain", "shopping"); // Tenant domain name\nauthParams.put("tenantService", "some_app"); // Tenant service name\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Tenant private key path\nauthParams.put("keyId", "v1"); // Key id for the tenant private key (optional, default: "0")\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar+ssl://my-broker.com:6651")\n        .tlsTrustCertsFilePath("/path/to/cacert.pem")\n        .authentication(athenzAuth)\n        .build();\n\n')),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"supported-pattern-formats"},"Supported pattern formats"),(0,r.yg)("p",{parentName:"blockquote"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"privateKey")," parameter supports the following three pattern formats:"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"file:///path/to/file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"file:/path/to/file")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"data:application/x-pem-file;base64,<base64-encoded value>")))))}g.isMDXComponent=!0}}]);