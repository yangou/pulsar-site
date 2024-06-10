"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2589],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>c});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),g=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=g(a),d=n,c=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(c,i(i({ref:t},s),{},{components:a})):r.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const l={id:"performance-pulsar-perf",title:"Pulsar Perf",sidebar_label:"Pulsar Perf",original_id:"performance-pulsar-perf"},i=void 0,o={unversionedId:"performance-pulsar-perf",id:"version-2.6.3/performance-pulsar-perf",title:"Pulsar Perf",description:"This document describes how to use the Pulsar Perf for performance testing. For detailed information about performance tuning, see here.",source:"@site/versioned_docs/version-2.6.3/performance-pulsar-perf.md",sourceDirName:".",slug:"/performance-pulsar-perf",permalink:"/docs/2.6.3/performance-pulsar-perf",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/performance-pulsar-perf.md",tags:[],version:"2.6.3",frontMatter:{id:"performance-pulsar-perf",title:"Pulsar Perf",sidebar_label:"Pulsar Perf",original_id:"performance-pulsar-perf"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Bouncy Castle Providers",permalink:"/docs/2.6.3/security-bouncy-castle"},next:{title:"Java",permalink:"/docs/2.6.3/client-libraries-java"}},p={},g=[{value:"Pulsar Perf",id:"pulsar-perf",level:2},{value:"Produce messages",id:"produce-messages",level:3},{value:"Configuration options for <code>pulsar-perf produce</code>",id:"configuration-options-for-pulsar-perf-produce",level:4},{value:"Consume messages",id:"consume-messages",level:3},{value:"Configuration options for <code>pulsar-perf consume</code>",id:"configuration-options-for-pulsar-perf-consume",level:4},{value:"Configurations",id:"configurations",level:3},{value:"HdrHistogram Plotter",id:"hdrhistogram-plotter",level:2}],s={toc:g},m="wrapper";function u(e){let{components:t,...l}=e;return(0,n.yg)(m,(0,r.A)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This document describes how to use the Pulsar Perf for performance testing. For detailed information about performance tuning, see ",(0,n.yg)("a",{parentName:"p",href:"https://streamnative.io/whitepaper/taking-a-deep-dive-into-apache-pulsar-architecture-for-performance-tuning/"},"here"),"."),(0,n.yg)("h2",{id:"pulsar-perf"},"Pulsar Perf"),(0,n.yg)("p",null,"The Pulsar Perf is a built-in performance test tool for Apache Pulsar. You can use the Pulsar Perf to test message writing or reading performance."),(0,n.yg)("h3",{id:"produce-messages"},"Produce messages"),(0,n.yg)("p",null,"This example shows how the Pulsar Perf produces messages with default options. For all configuration options available for the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-perf produce")," command, see ",(0,n.yg)("a",{parentName:"p",href:"#configuration-options-for-pulsar-perf-produce"},"configuration options"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\nbin/pulsar-perf produce my-topic\n\n")),(0,n.yg)("p",null,"After the command is executed, the test data is continuously output on the Console."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n19:53:31.459 [pulsar-perf-producer-exec-1-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Created 1 producers\n19:53:31.482 [pulsar-timer-5-1] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n19:53:40.861 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:     93.7  msg/s ---      0.7 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.575 ms - med:   3.460 - 95pct:   4.790 - 99pct:   5.308 - 99.9pct:   5.834 - 99.99pct:   6.609 - Max:   6.609\n19:53:50.909 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.437 ms - med:   3.328 - 95pct:   4.656 - 99pct:   5.071 - 99.9pct:   5.519 - 99.99pct:   5.588 - Max:   5.588\n19:54:00.926 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.376 ms - med:   3.276 - 95pct:   4.520 - 99pct:   4.939 - 99.9pct:   5.440 - 99.99pct:   5.490 - Max:   5.490\n19:54:10.940 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.298 ms - med:   3.220 - 95pct:   4.474 - 99pct:   4.926 - 99.9pct:   5.645 - 99.99pct:   5.654 - Max:   5.654\n19:54:20.956 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.1  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.308 ms - med:   3.199 - 95pct:   4.532 - 99pct:   4.871 - 99.9pct:   5.291 - 99.99pct:   5.323 - Max:   5.323\n19:54:30.972 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.249 ms - med:   3.144 - 95pct:   4.437 - 99pct:   4.970 - 99.9pct:   5.329 - 99.99pct:   5.414 - Max:   5.414\n19:54:40.987 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.435 ms - med:   3.361 - 95pct:   4.772 - 99pct:   5.150 - 99.9pct:   5.373 - 99.99pct:   5.837 - Max:   5.837\n^C19:54:44.325 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated throughput stats --- 7286 records sent --- 99.140 msg/s --- 0.775 Mbit/s\n19:54:44.336 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   3.383 ms - med:   3.293 - 95pct:   4.610 - 99pct:   5.059 - 99.9pct:   5.588 - 99.99pct:   5.837 - 99.999pct:   6.609 - Max:   6.609\n\n")),(0,n.yg)("p",null,"From the above test data, you can get the throughput statistics and the write latency statistics. The aggregated statistics is printed when the Pulsar Perf is stopped. You can press ",(0,n.yg)("strong",{parentName:"p"},"Ctrl"),"+",(0,n.yg)("strong",{parentName:"p"},"C")," to stop the Pulsar Perf. After the Pulsar Perf is stopped, the ",(0,n.yg)("a",{parentName:"p",href:"http://hdrhistogram.github.io/HdrHistogram/"},"HdrHistogram")," formatted test result appears under your directory. The document looks like ",(0,n.yg)("inlineCode",{parentName:"p"},"perf-producer-1589370810837.hgrm"),". You can also check the test result through ",(0,n.yg)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),". For details about how to check the test result through ",(0,n.yg)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),", see ",(0,n.yg)("a",{parentName:"p",href:"#hdrhistogram-plotter"},"HdrHistogram Plotter"),"."),(0,n.yg)("h4",{id:"configuration-options-for-pulsar-perf-produce"},"Configuration options for ",(0,n.yg)("inlineCode",{parentName:"h4"},"pulsar-perf produce")),(0,n.yg)("p",null,"You can get all options by executing the ",(0,n.yg)("inlineCode",{parentName:"p"},"bin/pulsar-perf produce -h")," command. Therefore, you can modify these options as required."),(0,n.yg)("p",null,"The following table lists configuration options available for the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-perf produce")," command."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"auth-params"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the authentication parameters, whose format is determined by the implementation of the ",(0,n.yg)("inlineCode",{parentName:"td"},"configure"),' method in the authentication plugin class, such as "key1:val1,key2:val2" or "{"key1":"val1","key2":"val2"}".'),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"auth_plugin"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the authentication plugin class name."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"batch-max-bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of bytes for each batch."),(0,n.yg)("td",{parentName:"tr",align:null},"4194304")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"batch-max-messages"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of messages for each batch."),(0,n.yg)("td",{parentName:"tr",align:null},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"batch-time-window"),(0,n.yg)("td",{parentName:"tr",align:null},"Set a window for a batch of messages."),(0,n.yg)("td",{parentName:"tr",align:null},"1 ms")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"batch-max-bytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of bytes for each batch."),(0,n.yg)("td",{parentName:"tr",align:null},"4194304")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"batch-max-messages"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of messages for each batch."),(0,n.yg)("td",{parentName:"tr",align:null},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"chunking"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure whether to split the message and publish in chunks if message size is larger than allowed max size."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"compression"),(0,n.yg)("td",{parentName:"tr",align:null},"Compress the message payload."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"conf-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the configuration file."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"delay"),(0,n.yg)("td",{parentName:"tr",align:null},"Mark messages with a given delay."),(0,n.yg)("td",{parentName:"tr",align:null},"0s")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"encryption-key-name"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the name of the public key used to encrypt the payload."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"encryption-key-value-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the file which contains the public key used to encrypt the payload."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"exit-on-failure"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure whether to exit from the process on publish failure."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"help"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure the help message."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"max-connections"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of TCP connections to a single broker."),(0,n.yg)("td",{parentName:"tr",align:null},"100")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"max-outstanding"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of outstanding messages."),(0,n.yg)("td",{parentName:"tr",align:null},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"max-outstanding-across-partitions"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of outstanding messages across partitions."),(0,n.yg)("td",{parentName:"tr",align:null},"50000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"message-key-generation-mode"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the generation mode of message key. Valid options are ",(0,n.yg)("inlineCode",{parentName:"td"},"autoIncrement"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"random"),"."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-io-threads"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of threads to be used for handling connections to brokers."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-messages"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of messages to be published in total. If it is set to 0, it keeps publishing messages."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-producers"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of producers for each topic."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-test-threads"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of test threads."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-topic"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of topics."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"payload-delimiter"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the delimiter used to split lines when using payload from a file."),(0,n.yg)("td",{parentName:"tr",align:null},"\\n")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"payload-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Use the payload from an UTF-8 encoded text file and a payload is randomly selected when messages are published."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"rate"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the publish rate of messages across topics."),(0,n.yg)("td",{parentName:"tr",align:null},"100")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"service-url"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the Pulsar service URL."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"size"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the message size."),(0,n.yg)("td",{parentName:"tr",align:null},"1024 bytes")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"stats-interval-seconds"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the statistics interval. If it is set to 0, statistics is disabled."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"test-duration"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the test duration. If it is set to 0, it keeps publishing tests."),(0,n.yg)("td",{parentName:"tr",align:null},"0s")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"trust-cert-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the path for the trusted TLS certificate file."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"warmup-time"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the warm-up time."),(0,n.yg)("td",{parentName:"tr",align:null},"1s")))),(0,n.yg)("h3",{id:"consume-messages"},"Consume messages"),(0,n.yg)("p",null,"This example shows how the Pulsar Perf consumes messages with default options."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\nbin/pulsar-perf consume my-topic\n\n")),(0,n.yg)("p",null,"After the command is executed, the test data is continuously output on the Console."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n20:35:37.071 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Start receiving from 1 consumers on 1 topics\n20:35:41.150 [pulsar-client-io-1-9] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n20:35:47.092 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 59.572  msg/s -- 0.465 Mbit/s --- Latency: mean: 11.298 ms - med: 10 - 95pct: 15 - 99pct: 98 - 99.9pct: 137 - 99.99pct: 152 - Max: 152\n20:35:57.104 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.958  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.176 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 18 - Max: 18\n20:36:07.115 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.006  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.316 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:17.125 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.085  msg/s -- 0.782 Mbit/s --- Latency: mean: 9.327 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:27.136 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.900  msg/s -- 0.780 Mbit/s --- Latency: mean: 9.404 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:37.147 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.985  msg/s -- 0.781 Mbit/s --- Latency: mean: 8.998 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n^C20:36:42.755 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated throughput stats --- 6051 records received --- 92.125 msg/s --- 0.720 Mbit/s\n20:36:42.759 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated latency stats --- Latency: mean: 9.422 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 98 - 99.99pct: 137 - 99.999pct: 152 - Max: 152\n\n")),(0,n.yg)("p",null,"From the output test data, you can get the throughput statistics and the end-to-end latency statistics. The aggregated statistics is printed after the Pulsar Perf is stopped. You can press ",(0,n.yg)("strong",{parentName:"p"},"Ctrl"),"+",(0,n.yg)("strong",{parentName:"p"},"C")," to stop the Pulsar Perf."),(0,n.yg)("h4",{id:"configuration-options-for-pulsar-perf-consume"},"Configuration options for ",(0,n.yg)("inlineCode",{parentName:"h4"},"pulsar-perf consume")),(0,n.yg)("p",null,"You can get all options by executing the ",(0,n.yg)("inlineCode",{parentName:"p"},"bin/pulsar-perf consume -h")," command. Therefore, you can modify these options as required."),(0,n.yg)("p",null,"The following table lists configuration options available for the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-perf consume")," command."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"acks-delay-millis"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the acknowledgment grouping delay in milliseconds."),(0,n.yg)("td",{parentName:"tr",align:null},"100 ms")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"auth-params"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the authentication parameters, whose format is determined by the implementation of the ",(0,n.yg)("inlineCode",{parentName:"td"},"configure"),' method in the authentication plugin class, such as "key1:val1,key2:val2" or "{"key1":"val1","key2":"val2"}".'),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"auth_plugin"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the authentication plugin class name."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"auto_ack_chunk_q_full"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure whether to automatically ack for the oldest message in receiver queue if the queue is full."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"listener-name"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the listener name for the broker."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"conf-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the configuration file."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"encryption-key-name"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the name of the public key used to encrypt the payload."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"encryption-key-value-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the file which contains the public key used to encrypt the payload."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"help"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure the help message."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"expire_time_incomplete_chunked_messages"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the expiration time for incomplete chunk messages (in milliseconds)."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"max-connections"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the maximum number of TCP connections to a single broker."),(0,n.yg)("td",{parentName:"tr",align:null},"100")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"max_chunked_msg"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the max pending chunk messages."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-consumers"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of consumers for each topic."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-io-threads"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of threads to be used for handling connections to brokers."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"num-topic"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the number of topics."),(0,n.yg)("td",{parentName:"tr",align:null},"1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"rate"),(0,n.yg)("td",{parentName:"tr",align:null},"Simulate a slow message consumer (rate in msg/s)."),(0,n.yg)("td",{parentName:"tr",align:null},"0.0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"receiver-queue-size"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the size of the receiver queue."),(0,n.yg)("td",{parentName:"tr",align:null},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"replicated"),(0,n.yg)("td",{parentName:"tr",align:null},"Configure whether the subscription status should be replicated."),(0,n.yg)("td",{parentName:"tr",align:null},"false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"service-url"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the Pulsar service URL."),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"stats-interval-seconds"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the statistics interval. If it is set to 0, statistics is disabled."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"subscriber-name"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the subscriber name prefix."),(0,n.yg)("td",{parentName:"tr",align:null},"sub")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"subscription-position"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the subscription position. Valid values are ",(0,n.yg)("inlineCode",{parentName:"td"},"Latest"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"Earliest"),"."),(0,n.yg)("td",{parentName:"tr",align:null},"Latest")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"subscription-type"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the subscription type. ",(0,n.yg)("li",null," Exclusive "),(0,n.yg)("li",null," Shared "),(0,n.yg)("li",null," Failover "),(0,n.yg)("li",null," Key_Shared ")),(0,n.yg)("td",{parentName:"tr",align:null},"Exclusive")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"test-duration"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the test duration (in seconds). If the value is 0 or smaller than 0, it keeps consuming messages."),(0,n.yg)("td",{parentName:"tr",align:null},"0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"tls-allow-insecure"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the allowed insecure TLS connection."),(0,n.yg)("td",{parentName:"tr",align:null},"N/A")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"trust-cert-file"),(0,n.yg)("td",{parentName:"tr",align:null},"Set the path for the trusted TLS certificate file."),(0,n.yg)("td",{parentName:"tr",align:null})))),(0,n.yg)("h3",{id:"configurations"},"Configurations"),(0,n.yg)("p",null,"By default, the Pulsar Perf uses ",(0,n.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," as the default configuration and uses ",(0,n.yg)("inlineCode",{parentName:"p"},"conf/log4j2.yaml")," as the default Log4j configuration. If you want to connect to other Pulsar clusters, you can update the ",(0,n.yg)("inlineCode",{parentName:"p"},"brokerServiceUrl")," in the client configuration."),(0,n.yg)("p",null,"You can use the following commands to change the configuration file and the Log4j configuration file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\nexport PULSAR_CLIENT_CONF=<your-config-file>\nexport PULSAR_LOG_CONF=<your-log-config-file>\n\n")),(0,n.yg)("p",null,"In addition, you can use the following command to configure the JVM configuration through environment variables:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\nexport PULSAR_EXTRA_OPTS='-Xms4g -Xmx4g -XX:MaxDirectMemorySize=4g'\n\n")),(0,n.yg)("h2",{id:"hdrhistogram-plotter"},"HdrHistogram Plotter"),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter")," is a visualization tool for checking Pulsar Perf test results, which makes it easier to observe the test results."),(0,n.yg)("p",null,"To check test results through the HdrHistogram Plotter, follow these steps:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Clone the HdrHistogram repository from GitHub to the local."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\ngit clone https://github.com/HdrHistogram/HdrHistogram.git\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Switch to the HdrHistogram folder."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\ncd HdrHistogram\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Install the HdrHistogram Plotter."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\nmvn clean install -DskipTests\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Transform the file generated by the Pulsar Perf."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\n./HistogramLogProcessor -i <hgrm file path that pulsar-perf generated> -o <output file>\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You will get two output files. Upload the output file with the filename extension of .hgrm to the ",(0,n.yg)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check the test result through the Graphical User Interface of the HdrHistogram Plotter, as shown below."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{src:a(43385).A,width:"3356",height:"1328"})))))}u.isMDXComponent=!0},43385:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/perf-produce-493b74d7a0a3ecb764cb21cabd8746b5.png"}}]);