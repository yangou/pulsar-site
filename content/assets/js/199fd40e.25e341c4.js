"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90785],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t},n)}},89089:(e,n,t)=>{t.d(n,{A:()=>C});var a=t(58168),r=t(96540),s=t(20053),l=t(23104),o=t(56347),i=t(57485),c=t(31682),u=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,c]=g({queryString:t,groupId:a}),[p,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=i??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var y=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==o&&(p(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=h(e);return r.createElement("div",{className:(0,s.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function C(e){const n=(0,y.A)();return r.createElement(N,(0,a.A)({key:String(n)},e))}},8814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),s=t(89089),l=t(19365);const o={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},i=void 0,c={unversionedId:"client-libraries-cpp",id:"version-2.9.x/client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create producers, consumers, and readers.",source:"@site/versioned_docs/version-2.9.x/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.9.x/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/client-libraries-cpp.md",tags:[],version:"2.9.x",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Python",permalink:"/docs/2.9.x/client-libraries-python"},next:{title:"Node.js",permalink:"/docs/2.9.x/client-libraries-node"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"Source",id:"source",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Blocking example",id:"blocking-example",level:3},{value:"Consumer with a message listener",id:"consumer-with-a-message-listener",level:3},{value:"Create a producer",id:"create-a-producer",level:2},{value:"Simple blocking example",id:"simple-blocking-example",level:3},{value:"Non-blocking example",id:"non-blocking-example",level:3},{value:"Partitioned topics and lazy producers",id:"partitioned-topics-and-lazy-producers",level:3},{value:"Enable authentication in connection URLs",id:"enable-authentication-in-connection-urls",level:2},{value:"Schema",id:"schema",level:2},{value:"Avro schema",id:"avro-schema",level:3},{value:"ProtobufNative schema",id:"protobufnative-schema",level:3}],d={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can use a Pulsar C++ client to create producers, consumers, and readers."),(0,r.yg)("p",null,"All the methods in producer, consumer, and reader of a C++ client are thread-safe. You can read the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.9.x"},"API docs")," for the C++ client."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Use one of the following methods to install a Pulsar C++ client."),(0,r.yg)("h3",{id:"brew"},"Brew"),(0,r.yg)("p",null,"Use ",(0,r.yg)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install the latest tagged version with the library and headers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"brew install libpulsar\n")),(0,r.yg)("h3",{id:"deb"},"Deb"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download any one of the Deb packages:")),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"client",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.9.4/DEB/apache-pulsar-client.deb\n")),(0,r.yg)("p",null,"This package contains shared libraries ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.yg)(l.A,{value:"client-devel",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.9.4/DEB/apache-pulsar-client-dev.deb\n")),(0,r.yg)("p",null,"This package contains static libraries: ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"apt install ./apache-pulsar-client*.deb\n")),(0,r.yg)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.yg)("h3",{id:"rpm"},"RPM"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download any one of the RPM packages:")),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"client",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.9.4/RPMS/apache-pulsar-client-2.9.4-1.x86_64.rpm\n")),(0,r.yg)("p",null,"This package contains shared libraries: ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,r.yg)(l.A,{value:"client-debuginfo",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.9.4/RPMS/apache-pulsar-client-debuginfo-2.9.4-1.x86_64.rpm\n")),(0,r.yg)("p",null,"This package contains debug symbols for ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.so"),".")),(0,r.yg)(l.A,{value:"client-devel",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.9.4/RPMS/apache-pulsar-client-devel-2.9.4-1.x86_64.rpm\n")),(0,r.yg)("p",null,"This package contains static libraries: ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers."))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Install the package using the following command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh apache-pulsar-client*.rpm\n")),(0,r.yg)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},'If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,r.yg)("inlineCode",{parentName:"p"},"ldconfig")," first.")),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("p",null,"For how to build Pulsar C++ client on different platforms from source code, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp#compilation"},"compliation"),"."),(0,r.yg)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.yg)("p",null,"To connect Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,r.yg)("p",null,"Pulsar protocol URLs are assigned to specific clusters, you can use the Pulsar URI scheme. The default port is ",(0,r.yg)("inlineCode",{parentName:"p"},"6650"),". The following is an example for localhost."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.yg)("p",null,"In a Pulsar cluster in production, the URL looks as follows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.yg)("p",null,"If you use TLS authentication, you need to add ",(0,r.yg)("inlineCode",{parentName:"p"},"ssl"),", and the default port is ",(0,r.yg)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.yg)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.yg)("p",null,"To use Pulsar as a consumer, you need to create a consumer on the C++ client. There are two main ways of using the consumer:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#blocking-example"},"Blocking style"),": synchronously calling ",(0,r.yg)("inlineCode",{parentName:"li"},"receive(msg)"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#consumer-with-a-message-listener"},"Non-blocking")," (event based) style: using a message listener.")),(0,r.yg)("h3",{id:"blocking-example"},"Blocking example"),(0,r.yg)("p",null,"The benefit of this approach is that it is the simplest code. Simply keeps calling ",(0,r.yg)("inlineCode",{parentName:"p"},"receive(msg)")," which blocks until a message is received."),(0,r.yg)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    Message msg;\n    int ctr = 0;\n    // consume 100 messages\n    while (ctr < 100) {\n        consumer.receive(msg);\n        std::cout << "Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'" << std::endl;\n\n        consumer.acknowledge(msg);\n        ctr++;\n    }\n\n    std::cout << "Finished consuming synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n\n')),(0,r.yg)("h3",{id:"consumer-with-a-message-listener"},"Consumer with a message listener"),(0,r.yg)("p",null,"You can avoid  running a loop with blocking calls with an event based style by using a message listener which is invoked for each message that is received."),(0,r.yg)("p",null,"This example starts a subscription at the earliest offset and consumes 100 messages."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n#include <atomic>\n#include <thread>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> messagesReceived;\n\nvoid handleAckComplete(Result res) {\n    std::cout << "Ack res: " << res << std::endl;\n}\n\nvoid listener(Consumer consumer, const Message& msg) {\n    std::cout << "Got message " << msg << " with content \'" << msg.getDataAsString() << "\'" << std::endl;\n    messagesReceived++;\n    consumer.acknowledgeAsync(msg.getMessageId(), handleAckComplete);\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Consumer consumer;\n    ConsumerConfiguration config;\n    config.setMessageListener(listener);\n    config.setSubscriptionInitialPosition(InitialPositionEarliest);\n    Result result = client.subscribe("persistent://public/default/my-topic", "consumer-1", config, consumer);\n    if (result != ResultOk) {\n        std::cout << "Failed to subscribe: " << result << std::endl;\n        return -1;\n    }\n\n    // wait for 100 messages to be consumed\n    while (messagesReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished consuming asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n\n')),(0,r.yg)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.yg)("p",null,"To use Pulsar as a producer, you need to create a producer on the C++ client. There are two main ways of using a producer:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#simple-blocking-example"},"Blocking style")," : each call to ",(0,r.yg)("inlineCode",{parentName:"li"},"send")," waits for an ack from the broker."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#non-blocking-example"},"Non-blocking asynchronous style")," : ",(0,r.yg)("inlineCode",{parentName:"li"},"sendAsync")," is called instead of ",(0,r.yg)("inlineCode",{parentName:"li"},"send")," and a callback is supplied for when the ack is received from the broker.")),(0,r.yg)("h3",{id:"simple-blocking-example"},"Simple blocking example"),(0,r.yg)("p",null,"This example sends 100 messages using the blocking style. While simple, it does not produce high throughput as it waits for each ack to come back before sending the next message."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n#include <thread>\n\nusing namespace pulsar;\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    Result result = client.createProducer("persistent://public/default/my-topic", producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages synchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        Result result = producer.send(msg);\n        if (result != ResultOk) {\n            std::cout << "The message " << content << " could not be sent, received code: " << result << std::endl;\n        } else {\n            std::cout << "The message " << content << " sent successfully" << std::endl;\n        }\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    std::cout << "Finished producing synchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n\n')),(0,r.yg)("h3",{id:"non-blocking-example"},"Non-blocking example"),(0,r.yg)("p",null,"This example sends 100 messages using the non-blocking style calling ",(0,r.yg)("inlineCode",{parentName:"p"},"sendAsync")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"send"),". This allows the producer to have multiple messages inflight at a time which increases throughput."),(0,r.yg)("p",null,"The producer configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"blockIfQueueFull")," is useful here to avoid ",(0,r.yg)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," errors when the internal queue for outgoing send requests becomes full. Once the internal queue is full, ",(0,r.yg)("inlineCode",{parentName:"p"},"sendAsync")," becomes blocking which can make your code simpler."),(0,r.yg)("p",null,"Without this configuration, the result code ",(0,r.yg)("inlineCode",{parentName:"p"},"ResultProducerQueueIsFull")," is passed to the callback. You must decide how to deal with that (retry, discard etc)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n#include <thread>\n\nusing namespace pulsar;\n\nstd::atomic<uint32_t> acksReceived;\n\nvoid callback(Result code, const MessageId& msgId, std::string msgContent) {\n    // message processing logic here\n    std::cout << "Received ack for msg: " << msgContent << " with code: "\n        << code << " -- MsgID: " << msgId << std::endl;\n    acksReceived++;\n}\n\nint main() {\n    Client client("pulsar://localhost:6650");\n\n    ProducerConfiguration producerConf;\n    producerConf.setBlockIfQueueFull(true);\n    Producer producer;\n    Result result = client.createProducer("persistent://public/default/my-topic",\n                                          producerConf, producer);\n    if (result != ResultOk) {\n        std::cout << "Error creating producer: " << result << std::endl;\n        return -1;\n    }\n\n    // Send 100 messages asynchronously\n    int ctr = 0;\n    while (ctr < 100) {\n        std::string content = "msg" + std::to_string(ctr);\n        Message msg = MessageBuilder().setContent(content).setProperty("x", "1").build();\n        producer.sendAsync(msg, std::bind(callback,\n                                          std::placeholders::_1, std::placeholders::_2, content));\n\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n        ctr++;\n    }\n\n    // wait for 100 messages to be acked\n    while (acksReceived < 100) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(100));\n    }\n\n    std::cout << "Finished producing asynchronously!" << std::endl;\n\n    client.close();\n    return 0;\n}\n\n')),(0,r.yg)("h3",{id:"partitioned-topics-and-lazy-producers"},"Partitioned topics and lazy producers"),(0,r.yg)("p",null,"When scaling out a Pulsar topic, you may configure a topic to have hundreds of partitions. Likewise, you may have also scaled out your producers so there are hundreds or even thousands of producers. This can put some strain on the Pulsar brokers as when you create a producer on a partitioned topic, internally it creates one internal producer per partition which involves communications to the brokers for each one. So for a topic with 1000 partitions and 1000 producers, it ends up creating 1,000,000 internal producers across the producer applications, each of which has to communicate with a broker to find out which broker it should connect to and then perform the connection handshake."),(0,r.yg)("p",null,"You can reduce the load caused by this combination of a large number of partitions and many producers by doing the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"use SinglePartition partition routing mode (this ensures that all messages are only sent to a single, randomly selected partition)"),(0,r.yg)("li",{parentName:"ul"},"use non-keyed messages (when messages are keyed, routing is based on the hash of the key and so messages will end up being sent to multiple partitions)"),(0,r.yg)("li",{parentName:"ul"},"use lazy producers (this ensures that an internal producer is only created on demand when a message needs to be routed to a partition)")),(0,r.yg)("p",null,"With our example above, that reduces the number of internal producers spread out over the 1000 producer apps from 1,000,000 to just 1000."),(0,r.yg)("p",null,"Note that there can be extra latency for the first message sent. If you set a low send timeout, this timeout could be reached if the initial connection handshake is slow to complete."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"\nProducerConfiguration producerConf;\nproducerConf.setPartitionsRoutingMode(ProducerConfiguration::UseSinglePartition);\nproducerConf.setLazyStartPartitionedProducers(true);\n\n")),(0,r.yg)("h2",{id:"enable-authentication-in-connection-urls"},"Enable authentication in connection URLs"),(0,r.yg)("p",null,"If you use TLS authentication when connecting to Pulsar, you need to add ",(0,r.yg)("inlineCode",{parentName:"p"},"ssl")," in the connection URLs, and the default port is ",(0,r.yg)("inlineCode",{parentName:"p"},"6651"),". The following is an example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')),(0,r.yg)("p",null,"For complete examples, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"C++ client examples"),"."),(0,r.yg)("h2",{id:"schema"},"Schema"),(0,r.yg)("p",null,"This section describes some examples of schema. For more information about\nschema, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.9.x/schema-get-started"},"Pulsar schema"),"."),(0,r.yg)("h3",{id:"avro-schema"},"Avro schema"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The following example shows how to create a producer with an Avro schema."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.createProducer("topic-avro", producerConf, producer);\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The following example shows how to create a consumer with an Avro schema."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\nstatic const std::string exampleSchema =\n    "{\\"type\\":\\"record\\",\\"name\\":\\"Example\\",\\"namespace\\":\\"test\\","\n    "\\"fields\\":[{\\"name\\":\\"a\\",\\"type\\":\\"int\\"},{\\"name\\":\\"b\\",\\"type\\":\\"int\\"}]}";\nConsumerConfiguration consumerConf;\nConsumer consumer;\nconsumerConf.setSchema(SchemaInfo(AVRO, "Avro", exampleSchema));\nclient.subscribe("topic-avro", "sub-2", consumerConf, consumer)\n\n')))),(0,r.yg)("h3",{id:"protobufnative-schema"},"ProtobufNative schema"),(0,r.yg)("p",null,"The following example shows how to create a producer and a consumer with a ProtobufNative schema.\n\u200b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Generate the ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," class using Protobuf3."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You need to use Protobuf3 or later versions.")))),(0,r.yg)("p",null,"\u200b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-protobuf"},'\nsyntax = "proto3";\n\nmessage User {\n    string name = 1;\n    int32 age = 2;\n}\n\n')),(0,r.yg)("p",null,"\u200b\n2. Include the ",(0,r.yg)("inlineCode",{parentName:"p"},"ProtobufNativeSchema.h")," in your source code. Ensure the Protobuf dependency has been added to your project.\n\u200b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"\n#include <pulsar/ProtobufNativeSchema.h>\n\n")),(0,r.yg)("p",null,"\u200b\n3. Create a producer to send a ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," instance.\n\u200b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\nProducerConfiguration producerConf;\nproducerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nProducer producer;\nclient.createProducer("topic-protobuf", producerConf, producer);\nUser user;\nuser.set_name("my-name");\nuser.set_age(10);\nstd::string content;\nuser.SerializeToString(&content);\nproducer.send(MessageBuilder().setContent(content).build());\n\n')),(0,r.yg)("p",null,"\u200b\n4. Create a consumer to receive a ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," instance.\n\u200b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'\nConsumerConfiguration consumerConf;\nconsumerConf.setSchema(createProtobufNativeSchema(User::GetDescriptor()));\nconsumerConf.setSubscriptionInitialPosition(InitialPositionEarliest);\nConsumer consumer;\nclient.subscribe("topic-protobuf", "my-sub", consumerConf, consumer);\nMessage msg;\nconsumer.receive(msg);\nUser user2;\nuser2.ParseFromArray(msg.getData(), msg.getLength());\n\n')))}g.isMDXComponent=!0}}]);