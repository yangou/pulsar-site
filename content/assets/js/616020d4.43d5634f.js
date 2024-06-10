"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94156],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,y=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?t.createElement(y,l(l({ref:a},u),{},{components:n})):t.createElement(y,l({ref:a},u))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9667:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const o={id:"standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"standalone"},l=void 0,i={unversionedId:"standalone",id:"version-2.6.0/standalone",title:"Set up a standalone Pulsar locally",description:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-2.6.0/standalone.md",sourceDirName:".",slug:"/standalone",permalink:"/docs/2.6.0/standalone",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/standalone.md",tags:[],version:"2.6.0",frontMatter:{id:"standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"standalone"}},s={},p=[{value:"Install Pulsar standalone",id:"install-pulsar-standalone",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Install Pulsar using binary release",id:"install-pulsar-using-binary-release",level:3},{value:"What your package contains",id:"what-your-package-contains",level:4},{value:"Install builtin connectors (optional)",id:"install-builtin-connectors-optional",level:3},{value:"Install tiered storage offloaders (optional)",id:"install-tiered-storage-offloaders-optional",level:3},{value:"Start Pulsar standalone",id:"start-pulsar-standalone",level:2},{value:"Use Pulsar standalone",id:"use-pulsar-standalone",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Stop Pulsar standalone",id:"stop-pulsar-standalone",level:2}],u={toc:p},d="wrapper";function c(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"pulsar-in-production"},"Pulsar in production?"),(0,r.yg)("p",{parentName:"blockquote"},"If you're looking to run a full production Pulsar installation, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,r.yg)("h2",{id:"install-pulsar-standalone"},"Install Pulsar standalone"),(0,r.yg)("p",null,"This tutorial guides you through every step of the installation process."),(0,r.yg)("h3",{id:"system-requirements"},"System requirements"),(0,r.yg)("p",null,"Currently, Pulsar is available for 64-bit ",(0,r.yg)("strong",{parentName:"p"},"macOS"),", ",(0,r.yg)("strong",{parentName:"p"},"Linux"),", and ",(0,r.yg)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"By default, Pulsar allocates 2G JVM heap memory to start. It can be changed in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh")," file under ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_MEM"),". This is extra options passed into JVM.")),(0,r.yg)("h3",{id:"install-pulsar-using-binary-release"},"Install Pulsar using binary release"),(0,r.yg)("p",null,"To get started with Pulsar, download a binary tarball release in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror (",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.0/apache-pulsar-2.6.0-bin.tar.gz",download:!0},"Pulsar 2.6.0 binary release"),")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.0/apache-pulsar-2.6.0-bin.tar.gz\n\n")))),(0,r.yg)("p",null,"After you download the tarball, untar it and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"cd")," command to navigate to the resulting directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.6.0-bin.tar.gz\n$ cd apache-pulsar-2.6.0\n\n")),(0,r.yg)("h4",{id:"what-your-package-contains"},"What your package contains"),(0,r.yg)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"bin")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Pulsar's command-line tools, such as ",(0,r.yg)("inlineCode",{parentName:"td"},"pulsar"),"](/docs/2.6.0/reference-cli-tools#pulsar) and [",(0,r.yg)("inlineCode",{parentName:"td"},"pulsar-admin"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"conf")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.6.0/reference-configuration#broker"},"broker configuration"),", ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.6.0/reference-configuration#zookeeper"},"ZooKeeper configuration"),", and more.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"examples")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A Java JAR file containing ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.6.0/functions-overview"},"Pulsar Functions")," example.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"lib")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The ",(0,r.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files used by Pulsar.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"licenses")),(0,r.yg)("td",{parentName:"tr",align:"left"},"License files, in the",(0,r.yg)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar"},"codebase"),".")))),(0,r.yg)("p",null,"These directories are created once you begin running Pulsar."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"data")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The data storage directory used by ZooKeeper and BookKeeper.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"instances")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.6.0/functions-overview"},"Pulsar Functions"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"logs")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Logs created by the installation.")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you want to use builtin connectors and tiered storage offloaders, you can install them according to the following instructions\uff1a"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#install-builtin-connectors-optional"},"Install builtin connectors (optional)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),"\nOtherwise, skip this step and perform the next step ",(0,r.yg)("a",{parentName:"li",href:"#start-pulsar-standalone"},"Start Pulsar standalone"),". Pulsar can be successfully installed without installing bulitin connectors and tiered storage offloaders."))),(0,r.yg)("h3",{id:"install-builtin-connectors-optional"},"Install builtin connectors (optional)"),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"2.1.0-incubating")," release, Pulsar releases a separate binary distribution, containing all the ",(0,r.yg)("inlineCode",{parentName:"p"},"builtin")," connectors.\nTo enable those ",(0,r.yg)("inlineCode",{parentName:"p"},"builtin")," connectors, you can download the connectors tarball release in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.0/connectors",download:!0},"Pulsar IO Connectors 2.6.0 release"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.0/connectors/{connector}-2.6.0.nar\n\n")))),(0,r.yg)("p",null,"After you download the nar file, copy the file to the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors")," directory in the pulsar directory.\nFor example, if you download the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-io-aerospike-2.6.0.nar")," connector file, enter the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.6.0.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.6.0.nar\n...\n\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure ",(0,r.yg)("inlineCode",{parentName:"li"},"connectors")," tarball is unzipped in every pulsar directory of the broker\n(or in every pulsar directory of function-worker if you are running a separate worker cluster for Pulsar Functions)."),(0,r.yg)("li",{parentName:"ul"},"If you are ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.6.0/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.6.0/deploy-kubernetes"},"K8S")," or ",(0,r.yg)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.6.0/io-overview#working-with-connectors"},"all builtin connectors"),"."))),(0,r.yg)("h3",{id:"install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"2.2.0")," release, Pulsar releases a separate binary distribution, containing the tiered storage offloaders.\nTo enable tiered storage feature, follow the instructions below; otherwise skip this section.")),(0,r.yg)("p",null,"To get started with ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/concepts-tiered-storage"},"tiered storage offloaders"),", you need to download the offloaders tarball release on every broker node in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.0/apache-pulsar-offloaders-2.6.0-bin.tar.gz",download:!0},"Pulsar Tiered Storage Offloaders 2.6.0 release"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.0/apache-pulsar-offloaders-2.6.0-bin.tar.gz\n\n")))),(0,r.yg)("p",null,"After you download the tarball, untar the offloaders package and copy the offloaders as ",(0,r.yg)("inlineCode",{parentName:"p"},"offloaders"),"\nin the pulsar directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-offloaders-2.6.0-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.6.0` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.6.0/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.6.0.nar\n\n")),(0,r.yg)("p",null,"For more information on how to configure tiered storage, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,r.yg)("li",{parentName:"ul"},"If you are ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.6.0/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.6.0/deploy-kubernetes"},"K8S")," or ",(0,r.yg)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),"),\nyou can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))),(0,r.yg)("h2",{id:"start-pulsar-standalone"},"Start Pulsar standalone"),(0,r.yg)("p",null,"Once you have an up-to-date local copy of the release, you can start a local cluster using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-cli-tools#pulsar"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar"))," command, which is stored in the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory, and specifying that you want to start Pulsar in standalone mode."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,r.yg)("p",null,"If you have started Pulsar successfully, you will see ",(0,r.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@95] - Configuration Store cache started\n2017-06-01 14:46:29,192 - INFO  - [main:AuthenticationService@61] - Authentication is disabled\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@108] - Pulsar WebSocket Service started\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The service is running on your terminal, which is under your direct control. If you need to run other commands, open a new terminal window."))),(0,r.yg)("p",null,"You can also run the service as a background process using the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-daemon start standalone")," command. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"By default, there is no encryption, authentication, or authorization configured. Apache Pulsar can be accessed from remote server without any authorization. Please do check ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/security-overview"},"Security Overview")," document to secure your deployment.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When you start a local standalone cluster, a ",(0,r.yg)("inlineCode",{parentName:"p"},"public/default")," ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/concepts-messaging#namespaces"},"namespace")," is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/concepts-messaging#topics"},"Topics"),".")))),(0,r.yg)("h2",{id:"use-pulsar-standalone"},"Use Pulsar standalone"),(0,r.yg)("p",null,"Pulsar provides a CLI tool called ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-cli-tools#pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client")),". The pulsar-client tool enables you to consume and produce messages to a Pulsar topic in a running cluster."),(0,r.yg)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.yg)("p",null,"The following command consumes a message with the subscription name ",(0,r.yg)("inlineCode",{parentName:"p"},"first-subscription")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client consume my-topic -s "first-subscription"\n\n')),(0,r.yg)("p",null,"If the message has been successfully consumed, you will see a confirmation like the following in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n09:56:55.566 [pulsar-client-io-1-1] INFO  org.apache.pulsar.client.impl.MultiTopicsConsumerImpl - [TopicsConsumerFakeTopicNamee2df9] [first-subscription] Success subscribe new topic my-topic in topics consumer, partitions: 4, allTopicPartitionsNumber: 4\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"As you have noticed that we do not explicitly create the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic, from which we consume the message. When you consume a message from a topic that does not yet exist, Pulsar creates that topic for you automatically. Producing a message to a topic that does not exist will automatically create that topic for you as well.")),(0,r.yg)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.yg)("p",null,"The following command produces a message saying ",(0,r.yg)("inlineCode",{parentName:"p"},"hello-pulsar")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n')),(0,r.yg)("p",null,"If the message has been successfully published to the topic, you will see a confirmation like the following in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n13:09:39.356 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n")),(0,r.yg)("h2",{id:"stop-pulsar-standalone"},"Stop Pulsar standalone"),(0,r.yg)("p",null,"Press ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl+C")," to stop a local standalone Pulsar."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If the service runs as a background process using the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-daemon start standalone")," command, then use the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-daemon stop standalone"),"  command to stop the service.\nFor more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),".")))}c.isMDXComponent=!0}}]);