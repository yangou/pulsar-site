"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40336],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return t?i.createElement(d,l(l({ref:n},p),{},{components:t})):i.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(58168),r=(t(96540),t(15680));const a={id:"client-libraries-go-initialize",title:"Initialize Pulsar Go client",sidebar_label:"Initialize",description:"Learn how to initialize Go client in Pulsar."},l=void 0,o={unversionedId:"client-libraries-go-initialize",id:"version-3.3.x/client-libraries-go-initialize",title:"Initialize Pulsar Go client",description:"Learn how to initialize Go client in Pulsar.",source:"@site/versioned_docs/version-3.3.x/client-libraries-go-initialize.md",sourceDirName:".",slug:"/client-libraries-go-initialize",permalink:"/docs/3.3.x/client-libraries-go-initialize",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-go-initialize.md",tags:[],version:"3.3.x",frontMatter:{id:"client-libraries-go-initialize",title:"Initialize Pulsar Go client",sidebar_label:"Initialize",description:"Learn how to initialize Go client in Pulsar."},sidebar:"docsSidebar",previous:{title:"Set up",permalink:"/docs/3.3.x/client-libraries-go-setup"},next:{title:"Use",permalink:"/docs/3.3.x/client-libraries-go-use"}},c={},s=[],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"To interact with Pulsar, you need a ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#Client"},(0,r.yg)("inlineCode",{parentName:"a"},"Client"))," object first."),(0,r.yg)("p",null,"You can create a client object using the ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#NewClient"},(0,r.yg)("inlineCode",{parentName:"a"},"NewClient"))," function, passing in a ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"ClientOptions"))," object."),(0,r.yg)("p",null,"Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "time"\n\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL:               "pulsar://localhost:6650",\n        OperationTimeout:  30 * time.Second,\n        ConnectionTimeout: 30 * time.Second,\n    })\n    if err != nil {\n        log.Fatalf("Could not instantiate Pulsar client: %v", err)\n    }\n\n    defer client.Close()\n}\n')),(0,r.yg)("p",null,"If you have multiple brokers, you can initiate a client object as below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "log"\n    "time"\n    "github.com/apache/pulsar-client-go/pulsar"\n)\n\nfunc main() {\n    client, err := pulsar.NewClient(pulsar.ClientOptions{\n        URL: "pulsar://localhost:6650,localhost:6651,localhost:6652",\n        OperationTimeout:  30 * time.Second,\n        ConnectionTimeout: 30 * time.Second,\n    })\n    if err != nil {\n        log.Fatalf("Could not instantiate Pulsar client: %v", err)\n    }\n\n    defer client.Close()\n}\n')),(0,r.yg)("p",null,"For all configurable parameters, see ",(0,r.yg)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ClientOptions"},(0,r.yg)("inlineCode",{parentName:"a"},"ClientOptions")),"."))}g.isMDXComponent=!0}}]);