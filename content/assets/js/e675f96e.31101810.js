"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54842],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const l={id:"client-libraries-dotnet-use",title:"Use C# client",sidebar_label:"Use",description:"Learn how to use C# client in Pulsar."},o=void 0,i={unversionedId:"client-libraries-dotnet-use",id:"version-3.3.x/client-libraries-dotnet-use",title:"Use C# client",description:"Learn how to use C# client in Pulsar.",source:"@site/versioned_docs/version-3.3.x/client-libraries-dotnet-use.md",sourceDirName:".",slug:"/client-libraries-dotnet-use",permalink:"/docs/3.3.x/client-libraries-dotnet-use",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-dotnet-use.md",tags:[],version:"3.3.x",frontMatter:{id:"client-libraries-dotnet-use",title:"Use C# client",sidebar_label:"Use",description:"Learn how to use C# client in Pulsar."},sidebar:"docsSidebar",previous:{title:"Initialize",permalink:"/docs/3.3.x/client-libraries-dotnet-initialize"},next:{title:"WebSocket",permalink:"/docs/3.3.x/client-libraries-websocket"}},s={},c=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Monitor",id:"monitor",level:3},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Monitor",id:"monitor-1",level:3},{value:"Create a reader",id:"create-a-reader",level:2},{value:"Monitor",id:"monitor-2",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This section introduces some hands-on examples to get started with using the Pulsar C# client."),(0,r.yg)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.yg)("p",null,"This section describes how to create a producer."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a producer by using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar producer = client.NewProducer()\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a producer without using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\n\nvar options = new ProducerOptions<byte[]>("persistent://public/default/mytopic", Schema.ByteArray);\nvar producer = client.CreateProducer(options);\n')))),(0,r.yg)("h3",{id:"monitor"},"Monitor"),(0,r.yg)("p",null,"This example shows how to monitor the producer's state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'private static async ValueTask Monitor(IProducer producer, CancellationToken cancellationToken)\n{\n    var state = ProducerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await producer.StateChangedFrom(state, cancellationToken)).ProducerState;\n\n        var stateMessage = state switch\n        {\n            ProducerState.Connected => $"The producer is connected",\n            ProducerState.Disconnected => $"The producer is disconnected",\n            ProducerState.Closed => $"The producer has closed",\n            ProducerState.Faulted => $"The producer has faulted",\n            ProducerState.PartiallyConnected => $"The producer is partially connected.",\n            _ => $"The producer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (producer.IsFinalState(state))\n            return;\n    }\n}\n')),(0,r.yg)("p",null,"The following table lists states available for the producer."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Closed"),(0,r.yg)("td",{parentName:"tr",align:null},"The producer or the Pulsar client has been disposed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connected"),(0,r.yg)("td",{parentName:"tr",align:null},"All is well.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.yg)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Faulted"),(0,r.yg)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PartiallyConnected"),(0,r.yg)("td",{parentName:"tr",align:null},"Some of the sub-producers are disconnected.")))),(0,r.yg)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.yg)("p",null,"This section describes how to create a consumer."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a consumer by using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar consumer = client.NewConsumer()\n                     .SubscriptionName("MySubscription")\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a consumer without using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\n\nvar options = new ConsumerOptions<byte[]>("MySubscription", "persistent://public/default/mytopic", Schema.ByteArray);\nvar consumer = client.CreateConsumer(options);\n')))),(0,r.yg)("h3",{id:"monitor-1"},"Monitor"),(0,r.yg)("p",null,"This example shows how to monitor the consumer's state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'private static async ValueTask Monitor(IConsumer consumer, CancellationToken cancellationToken)\n{\n    var state = ConsumerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await consumer.StateChangedFrom(state, cancellationToken)).ConsumerState;\n\n        var stateMessage = state switch\n        {\n            ConsumerState.Active => "The consumer is active",\n            ConsumerState.Inactive => "The consumer is inactive",\n            ConsumerState.Disconnected => "The consumer is disconnected",\n            ConsumerState.Closed => "The consumer has closed",\n            ConsumerState.ReachedEndOfTopic => "The consumer has reached end of topic",\n            ConsumerState.Faulted => "The consumer has faulted",\n            ConsumerState.Unsubscribed => "The consumer is unsubscribed.",\n            _ => $"The consumer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (consumer.IsFinalState(state))\n            return;\n    }\n}\n')),(0,r.yg)("p",null,"The following table lists states available for the consumer."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Active"),(0,r.yg)("td",{parentName:"tr",align:null},"All is well.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inactive"),(0,r.yg)("td",{parentName:"tr",align:null},"All is well. The subscription type is ",(0,r.yg)("inlineCode",{parentName:"td"},"Failover")," and you are not the active consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Closed"),(0,r.yg)("td",{parentName:"tr",align:null},"The consumer or the Pulsar client has been disposed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.yg)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Faulted"),(0,r.yg)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ReachedEndOfTopic"),(0,r.yg)("td",{parentName:"tr",align:null},"No more messages are delivered.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Unsubscribed"),(0,r.yg)("td",{parentName:"tr",align:null},"The consumer has unsubscribed.")))),(0,r.yg)("h2",{id:"create-a-reader"},"Create a reader"),(0,r.yg)("p",null,"This section describes how to create a reader."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a reader by using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar reader = client.NewReader()\n                   .StartMessageId(MessageId.Earliest)\n                   .Topic("persistent://public/default/mytopic")\n                   .Create();\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a reader without using the builder."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using DotPulsar;\n\nvar options = new ReaderOptions<byte[]>(MessageId.Earliest, "persistent://public/default/mytopic", Schema.ByteArray);\nvar reader = client.CreateReader(options);\n')))),(0,r.yg)("h3",{id:"monitor-2"},"Monitor"),(0,r.yg)("p",null,"This example shows how to monitor the reader's state."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'private static async ValueTask Monitor(IReader reader, CancellationToken cancellationToken)\n{\n    var state = ReaderState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await reader.StateChangedFrom(state, cancellationToken)).ReaderState;\n\n        var stateMessage = state switch\n        {\n            ReaderState.Connected => "The reader is connected",\n            ReaderState.Disconnected => "The reader is disconnected",\n            ReaderState.Closed => "The reader has closed",\n            ReaderState.ReachedEndOfTopic => "The reader has reached end of topic",\n            ReaderState.Faulted => "The reader has faulted",\n            _ => $"The reader has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (reader.IsFinalState(state))\n            return;\n    }\n}\n')),(0,r.yg)("p",null,"The following table lists states available for the reader."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"State"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Closed"),(0,r.yg)("td",{parentName:"tr",align:null},"The reader or the Pulsar client has been disposed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Connected"),(0,r.yg)("td",{parentName:"tr",align:null},"All is well.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disconnected"),(0,r.yg)("td",{parentName:"tr",align:null},"The connection is lost and attempts are being made to reconnect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Faulted"),(0,r.yg)("td",{parentName:"tr",align:null},"An unrecoverable error has occurred.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ReachedEndOfTopic"),(0,r.yg)("td",{parentName:"tr",align:null},"No more messages are delivered.")))))}p.isMDXComponent=!0}}]);