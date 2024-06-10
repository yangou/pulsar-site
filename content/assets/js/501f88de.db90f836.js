"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22892],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(o,".").concat(m)]||d[m]||g[m]||l;return a?t.createElement(y,i(i({ref:n},c),{},{components:a})):t.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19928:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const l={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},i=void 0,p={unversionedId:"client-libraries-python",id:"version-2.6.4/client-libraries-python",title:"Pulsar Python client",description:"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the python GitHub Repository of the C++ client code.",source:"@site/versioned_docs/version-2.6.4/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.6.4/client-libraries-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/client-libraries-python.md",tags:[],version:"2.6.4",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},sidebar:"version-2.6.4/docsSidebar",previous:{title:"Go",permalink:"/docs/2.6.4/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.6.4/client-libraries-cpp"}},o={},s=[{value:"Install",id:"install",level:2},{value:"Install using pip",id:"install-using-pip",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Schema",id:"schema",level:2},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5}],c={toc:s},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar Python client library is a wrapper over the existing ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.6.4"},"same features"),". You can find the code in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},(0,r.yg)("inlineCode",{parentName:"a"},"python")," GitHub Repository")," of the C++ client code."),(0,r.yg)("p",null,"All the methods in producer, consumer, and reader of a Python client are thread-safe."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/BurntSushi/pdoc"},"pdoc"),"-generated API docs for the Python client are available ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.6.3"},"here"),"."),(0,r.yg)("h2",{id:"install"},"Install"),(0,r.yg)("p",null,"You can install the ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,r.yg)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from source."),(0,r.yg)("h3",{id:"install-using-pip"},"Install using pip"),(0,r.yg)("p",null,"To install the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,r.yg)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client==2.6.3\n")),(0,r.yg)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MacOS ",(0,r.yg)("br",null),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Linux"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.4, 3.5, 3.6, 3.7")))),(0,r.yg)("h3",{id:"install-from-source"},"Install from source"),(0,r.yg)("p",null,"To install the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/client-libraries-cpp#compilation"},"instructions")," and compile the Pulsar C++ client library. That builds the Python binding for the library."),(0,r.yg)("p",null,"To install the built Python bindings:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("p",null,"The complete Python API reference is available at ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.6.3"},"api/python"),"."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"You can find a variety of Python code examples for the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,r.yg)("h3",{id:"producer-example"},"Producer example"),(0,r.yg)("p",null,"The following example creates a Python producer for the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,r.yg)("h3",{id:"consumer-example"},"Consumer example"),(0,r.yg)("p",null,"The following example creates a consumer with the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n")),(0,r.yg)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,r.yg)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")),(0,r.yg)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,r.yg)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,r.yg)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,r.yg)("p",null,"The following is an example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n")),(0,r.yg)("h2",{id:"schema"},"Schema"),(0,r.yg)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,r.yg)("p",null,"You can declare a schema by passing a class that inherits\nfrom ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as\nclass variables. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\n")),(0,r.yg)("p",null,"With this simple schema definition, you can create producers, consumers and readers instances that refer to that."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n")),(0,r.yg)("p",null,'After creating the producer, the Pulsar broker validates that the existing topic schema is indeed of "Avro" type and that the format is compatible with the schema definition of the ',(0,r.yg)("inlineCode",{parentName:"p"},"Example")," class."),(0,r.yg)("p",null,"If there is a mismatch, an exception occurs in the producer creation."),(0,r.yg)("p",null,"Once a producer is created with a certain schema definition,\nit will only accept objects that are instances of the declared\nschema class."),(0,r.yg)("p",null,"Similarly, for a consumer/reader, the consumer will return an\nobject, instance of the schema record class, rather than the raw\nbytes:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n")),(0,r.yg)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,r.yg)("p",null,"You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Schema"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BytesSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,r.yg)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StringSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,r.yg)("inlineCode",{parentName:"td"},"str")," objects")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"JsonSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AvroSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,r.yg)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,r.yg)("p",null,"The schema definition is done through a class that inherits from ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,r.yg)("p",null,"This class has a number of fields which can be of either\n",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,r.yg)("inlineCode",{parentName:"p"},"Record"),". All the\nfields are specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields\nare matching the AVRO fields types."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Python Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"int")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Long")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"int")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"float")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Double")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"float")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Bytes")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bytes")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"str")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Array")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"list")),(0,r.yg)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Map")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dict")),(0,r.yg)("td",{parentName:"tr",align:null},"Key is always ",(0,r.yg)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,r.yg)("p",null,"Additionally, any Python ",(0,r.yg)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,r.yg)("h4",{id:"fields-parameters"},"Fields parameters"),(0,r.yg)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Argument"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"default")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None")),(0,r.yg)("td",{parentName:"tr",align:null},"Set a default value for the field. Eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"a = Integer(default=5)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"required")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"False")),(0,r.yg)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,r.yg)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,r.yg)("h5",{id:"simple-definition"},"Simple definition"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n")),(0,r.yg)("h5",{id:"using-enums"},"Using enums"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n")),(0,r.yg)("h5",{id:"complex-types"},"Complex types"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n")))}g.isMDXComponent=!0}}]);