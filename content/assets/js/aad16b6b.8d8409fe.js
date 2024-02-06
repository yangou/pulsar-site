"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63221],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace",description:"Learn how to create and verify a namespace in Pulsar."},o=void 0,l={unversionedId:"tutorials-namespace",id:"version-3.2.x/tutorials-namespace",title:"Create a namespace",description:"Learn how to create and verify a namespace in Pulsar.",source:"@site/versioned_docs/version-3.2.x/tutorials-namespace.md",sourceDirName:".",slug:"/tutorials-namespace",permalink:"/docs/3.2.x/tutorials-namespace",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/tutorials-namespace.md",tags:[],version:"3.2.x",frontMatter:{Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace",description:"Learn how to create and verify a namespace in Pulsar."},sidebar:"docsSidebar",previous:{title:"Set up a tenant",permalink:"/docs/3.2.x/tutorials-tenant"},next:{title:"Create a topic",permalink:"/docs/3.2.x/tutorials-topic"}},c={},i=[{value:"Related Topics",id:"related-topics",level:4}],p={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.x/concepts-multi-tenancy#namespaces"},"Namespaces")," can be managed via:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The namespaces command of the pulsar-admin tool"),(0,r.kt)("li",{parentName:"ul"},"The /admin/v2/namespaces endpoint of the admin ",(0,r.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,r.kt)("li",{parentName:"ul"},"The namespaces method of the PulsarAdmin object in the Java API")),(0,r.kt)("p",null,"In this tutorial, we create a namespace called pulsar in the tenant apache. Then we list namespaces of tenant apache to see if the namespace is created successfully."),(0,r.kt)("p",null,"To create the namespace, use the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces create apache/pulsar\n")),(0,r.kt)("p",null,"To verify the namespace, use the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list apache\n")),(0,r.kt)("p",null,"You should see similar output to show the namespace apache/pulsar has been successfully created."),(0,r.kt)("h4",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.x/tutorials-tenant"},"Set up a tenant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.x/tutorials-topic"},"Create a topic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.x/tutorials-produce-consume"},"Produce and consume messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.x/admin-api-clusters"},"Manage clusters"))))}m.isMDXComponent=!0}}]);