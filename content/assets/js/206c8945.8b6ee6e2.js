"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52184],{15680:(e,a,r)=>{r.d(a,{xA:()=>o,yg:()=>g});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),c=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},o=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?t.createElement(g,i(i({ref:a},o),{},{components:r})):t.createElement(g,i({ref:a},o))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24709:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const l={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++ client"},i=void 0,s={unversionedId:"client-libraries-cpp",id:"version-3.3.x/client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create Pulsar producers, consumers, and readers in C++. All the methods in Pulsar C++ clients are thread-safe.",source:"@site/versioned_docs/version-3.3.x/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/3.3.x/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-cpp.md",tags:[],version:"3.3.x",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++ client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/3.3.x/client-libraries-java-use"},next:{title:"Set up",permalink:"/docs/3.3.x/client-libraries-cpp-setup"}},p={},c=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"Changes for 3.0.0 and later versions",id:"changes-for-300-and-later-versions",level:2}],o={toc:c},u="wrapper";function d(e){let{components:a,...r}=e;return(0,n.yg)(u,(0,t.A)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can use a Pulsar C++ client to create Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.3.x/concepts-clients#producer"},"producers"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.3.x/concepts-clients#consumer"},"consumers"),", and ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.3.x/concepts-clients#reader"},"readers")," in C++. All the methods in Pulsar C++ clients are thread-safe."),(0,n.yg)("h2",{id:"get-started"},"Get started"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-cpp-setup"},"Set up C++ client library")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-cpp-initialize"},"Initialize a C++ client")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-cpp-use"},"Use a C++ client"))),(0,n.yg)("h2",{id:"whats-next"},"What's next?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-clients"},"Work with clients")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-producers"},"Work with producers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-consumers"},"Work with consumers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.3.x/client-libraries-readers"},"Work with readers"))),(0,n.yg)("h2",{id:"reference-doc"},"Reference doc"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.5.x"},"C++ client API docs"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.5.x/classpulsar_1_1_client_configuration.html"},"Client configurations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.5.x/classpulsar_1_1_producer_configuration.html"},"Producer configurations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.5.x/classpulsar_1_1_consumer_configuration.html"},"Consumer configurations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.5.x/classpulsar_1_1_reader_configuration.html"},"Reader configurations")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/release-notes/client-cpp"},"Release notes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"Code examples")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/blob/main/include/pulsar/Schema.h"},"Supported schema types")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/client-feature-matrix/"},"Client feature matrix"))),(0,n.yg)("h2",{id:"changes-for-300-and-later-versions"},"Changes for 3.0.0 and later versions"),(0,n.yg)("p",null,"The new version of the Pulsar C++ client starts from 3.0.0 and has been no longer consistent with Pulsar since 2.10.x. For the latest releases, see the ",(0,n.yg)("a",{parentName:"p",href:"/download/"},"Download")," page."),(0,n.yg)("p",null,"Take the ",(0,n.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.0.0/"},"3.0.0 release")," for example, there are following subdirectories:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"apk-arm64: the Alpine Linux packages for ARM64 architectures"),(0,n.yg)("li",{parentName:"ul"},"apk-x86_64: the Alpine Linux packages for x64 architectures"),(0,n.yg)("li",{parentName:"ul"},"deb-arm64: the Debian-based Linux packages for ARM64 architectures"),(0,n.yg)("li",{parentName:"ul"},"deb-x86_64: the Debian-based Linux packages for x64 architectures"),(0,n.yg)("li",{parentName:"ul"},"rpm-arm64: the RedHat-based Linux packages for ARM64 architectures"),(0,n.yg)("li",{parentName:"ul"},"rpm-x86_64: the RedHat-based Linux packages for x64 architectures")),(0,n.yg)("p",null,"These Linux packages above all contain the C++ headers installed under ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/include")," and the following libraries installed under ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/lib"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"libpulsar.so: the shared library that links 3rd party dependencies statically"),(0,n.yg)("li",{parentName:"ul"},"libpulsar.a: the static library"),(0,n.yg)("li",{parentName:"ul"},"libpulsarwithdeps.a: the fat static library that includes all 3rd party dependencies")),(0,n.yg)("p",null,"Here is an example to link these libraries for a C++ source file named ",(0,n.yg)("inlineCode",{parentName:"p"},"main.cc"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# Link to libpulsar.so\ng++ -std=c++11 main.cc -lpulsar\n# Link to libpulsarwithdeps.a\ng++ -std=c++11 main.cc /usr/lib/libpulsarwithdeps.a -lpthread -ldl\n# Link to libpulsar.a\ng++ -std=c++11 main.cc /usr/lib/libpulsar.a \\\n  -lprotobuf -lcurl -lssl -lcrypto -lz -lzstd -lsnappy -lpthread -ldl\n")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Linking to ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.a")," can be difficult for beginners because the 3rd party dependencies must be compatible. For example, the protobuf version must be 3.20.0 or higher for Pulsar C++ client 3.0.0. It's better to link to ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," instead.")),(0,n.yg)("admonition",{type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"Before 3.0.0, there was a ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),", which is removed now.")))}d.isMDXComponent=!0}}]);