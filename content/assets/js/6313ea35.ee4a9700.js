"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45168],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,m=u["".concat(p,".").concat(g)]||u[g]||y[g]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},79863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={id:"client-libraries-python",title:"The Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},l=void 0,o={unversionedId:"client-libraries-python",id:"version-2.2.1/client-libraries-python",title:"The Pulsar Python client",description:"The Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the python GitHub Repository of the C++ client code.",source:"@site/versioned_docs/version-2.2.1/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.2.1/client-libraries-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/client-libraries-python.md",tags:[],version:"2.2.1",frontMatter:{id:"client-libraries-python",title:"The Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Go",permalink:"/docs/2.2.1/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.2.1/client-libraries-cpp"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Installation using pip",id:"installation-using-pip",level:3},{value:"Installing from source",id:"installing-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3}],c={toc:s},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Pulsar Python client library is a wrapper over the existing ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,a.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.2.1"},"same features"),". You can find the code in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},(0,a.yg)("inlineCode",{parentName:"a"},"python")," GitHub Repository")," of the C++ client code."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"You can install the ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,a.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,a.yg)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from source."),(0,a.yg)("h3",{id:"installation-using-pip"},"Installation using pip"),(0,a.yg)("p",null,"To install the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,a.yg)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'pulsar-client==2.2.1'\n")),(0,a.yg)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Platform"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"MacOS ",(0,a.yg)("br",null)," 10.11 (El Capitan) ","\u2014"," 10.12 (Sierra) ","\u2014"," 10.13 (High Sierra)"),(0,a.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.7")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Linux"),(0,a.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.3, 3.4, 3.5, 3.6, 3.7")))),(0,a.yg)("h3",{id:"installing-from-source"},"Installing from source"),(0,a.yg)("p",null,"To install the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.1/client-libraries-cpp#compilation"},"these instructions")," and compile the Pulsar C++ client library. That will also build the Python binding for the library."),(0,a.yg)("p",null,"To install the built Python bindings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("p",null,"The complete Python API reference is available at ",(0,a.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.2.1"},"api/python"),"."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Below you'll find a variety of Python code examples for the ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,a.yg)("h3",{id:"producer-example"},"Producer example"),(0,a.yg)("p",null,"This creates a Python producer for the ",(0,a.yg)("inlineCode",{parentName:"p"},"my-topic")," topic and send 10 messages on that topic:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,a.yg)("h3",{id:"consumer-example"},"Consumer example"),(0,a.yg)("p",null,"This creates a consumer with the ",(0,a.yg)("inlineCode",{parentName:"p"},"my-subscription")," subscription on the ",(0,a.yg)("inlineCode",{parentName:"p"},"my-topic")," topic, listen for incoming messages, print the content and ID of messages that arrive, and acknowledge each message to the Pulsar broker:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    consumer.acknowledge(msg)\n\nclient.close()\n\n")),(0,a.yg)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,a.yg)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.1/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")))}y.isMDXComponent=!0}}]);