"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90805],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var l=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return t?l.createElement(m,a(a({ref:n},c),{},{components:t})):l.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=t(58168),r=(t(96540),t(15680));const o={id:"develop-cpp",title:"Building Pulsar C++ client",sidebar_label:"Building Pulsar C++ client",original_id:"develop-cpp"},a=void 0,i={unversionedId:"develop-cpp",id:"version-2.6.1/develop-cpp",title:"Building Pulsar C++ client",description:"Supported platforms",source:"@site/versioned_docs/version-2.6.1/develop-cpp.md",sourceDirName:".",slug:"/develop-cpp",permalink:"/docs/2.6.1/develop-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/develop-cpp.md",tags:[],version:"2.6.1",frontMatter:{id:"develop-cpp",title:"Building Pulsar C++ client",sidebar_label:"Building Pulsar C++ client",original_id:"develop-cpp"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Modular load manager",permalink:"/docs/2.6.1/develop-load-manager"},next:{title:"Terminology",permalink:"/docs/2.6.1/reference-terminology"}},p={},s=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Compilation",id:"compilation",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3}],c={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,l.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.yg)("p",null,"The Pulsar C++ client has been successfully tested on ",(0,r.yg)("strong",{parentName:"p"},"MacOS")," and ",(0,r.yg)("strong",{parentName:"p"},"Linux"),"."),(0,r.yg)("h2",{id:"system-requirements"},"System requirements"),(0,r.yg)("p",null,"You need to have the following installed to use the C++ client:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cmake.org/"},"CMake")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"http://www.boost.org/"},"Boost")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Protocol Buffers")," 2.6"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://logging.apache.org/log4cxx"},"Log4CXX")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/"},"libcurl")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/google/googletest"},"Google Test")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/open-source-parsers/jsoncpp"},"JsonCpp"))),(0,r.yg)("h2",{id:"compilation"},"Compilation"),(0,r.yg)("p",null,"There are separate compilation instructions for ",(0,r.yg)("a",{parentName:"p",href:"#macos"},"MacOS")," and ",(0,r.yg)("a",{parentName:"p",href:"#linux"},"Linux"),". For both systems, start by cloning the Pulsar repository:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n\n")),(0,r.yg)("h3",{id:"linux"},"Linux"),(0,r.yg)("p",null,"First, install all of the necessary dependencies:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ apt-get install cmake libssl-dev libcurl4-openssl-dev liblog4cxx-dev \\\n  libprotobuf-dev protobuf-compiler libboost-all-dev google-mock libgtest-dev libjsoncpp-dev\n\n")),(0,r.yg)("p",null,"Then compile and install ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/googletest"},"Google Test"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n# libgtest-dev version is 1.18.0 or above\n$ cd /usr/src/googletest\n$ sudo cmake .\n$ sudo make\n$ sudo cp ./googlemock/libgmock.a ./googlemock/gtest/libgtest.a /usr/lib/\n\n# less than 1.18.0\n$ cd /usr/src/gtest\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgtest.a /usr/lib\n\n$ cd /usr/src/gmock\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgmock.a /usr/lib\n\n")),(0,r.yg)("p",null,"Finally, compile the Pulsar client library for C++ inside the Pulsar repo:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")),(0,r.yg)("p",null,"The resulting files, ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"libpulsar.a"),", will be placed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," folder of the repo while two tools, ",(0,r.yg)("inlineCode",{parentName:"p"},"perfProducer")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"perfConsumer"),", will be placed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"perf")," directory."),(0,r.yg)("h3",{id:"macos"},"MacOS"),(0,r.yg)("p",null,"First, install all of the necessary dependencies:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n# OpenSSL installation\n$ brew install openssl\n$ export OPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include/\n$ export OPENSSL_ROOT_DIR=/usr/local/opt/openssl/\n\n# Protocol Buffers installation\n$ brew tap homebrew/versions\n$ brew install protobuf260\n$ brew install boost\n$ brew install log4cxx\n\n# Google Test installation\n$ git clone https://github.com/google/googletest.git\n$ cd googletest\n$ git checkout release-1.12.1\n$ cmake .\n$ make install\n\n")),(0,r.yg)("p",null,"Then compile the Pulsar client library in the repo that you cloned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")))}g.isMDXComponent=!0}}]);