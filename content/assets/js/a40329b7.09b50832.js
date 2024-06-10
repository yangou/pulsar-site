"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[46553],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,g=c["".concat(s,".").concat(y)]||c[y]||u[y]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},20652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={id:"pulsar-2.0",title:"Pulsar 2.0",sidebar_label:"Pulsar 2.0"},l=void 0,i={unversionedId:"pulsar-2.0",id:"version-2.3.1/pulsar-2.0",title:"Pulsar 2.0",description:"Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including simplified topic names, the addition of the Pulsar Functions feature, some terminology changes, and more.",source:"@site/versioned_docs/version-2.3.1/pulsar-2.0.md",sourceDirName:".",slug:"/pulsar-2.0",permalink:"/docs/2.3.1/pulsar-2.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/pulsar-2.0.md",tags:[],version:"2.3.1",frontMatter:{id:"pulsar-2.0",title:"Pulsar 2.0",sidebar_label:"Pulsar 2.0"},sidebar:"version-2.3.1/docsSidebar",previous:{title:"About",permalink:"/docs/2.3.1/"},next:{title:"Run Pulsar locally",permalink:"/docs/2.3.1/getting-started-standalone"}},s={},p=[{value:"New features in Pulsar 2.0",id:"new-features-in-pulsar-20",level:2},{value:"Major changes",id:"major-changes",level:2},{value:"Properties versus tenants",id:"properties-versus-tenants",level:3},{value:"Topic names",id:"topic-names",level:3},{value:"No cluster component",id:"no-cluster-component",level:4},{value:"Flexible topic naming",id:"flexible-topic-naming",level:4}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including ",(0,r.yg)("a",{parentName:"p",href:"#topic-names"},"simplified topic names"),", the addition of the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/functions-overview"},"Pulsar Functions")," feature, some terminology changes, and more."),(0,r.yg)("h2",{id:"new-features-in-pulsar-20"},"New features in Pulsar 2.0"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.1/functions-overview"},"Pulsar Functions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A lightweight compute option for Pulsar")))),(0,r.yg)("h2",{id:"major-changes"},"Major changes"),(0,r.yg)("p",null,"There are a few major changes that you should be aware of, as they may significantly impact your day-to-day usage."),(0,r.yg)("h3",{id:"properties-versus-tenants"},"Properties versus tenants"),(0,r.yg)("p",null,'Previously, Pulsar had a concept of properties. A property is essentially the exact same thing as a tenant, so the "property" terminology has been removed in version 2.0. The ',(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-pulsar-admin#pulsar-admin"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin properties"))," command-line interface, for example, has been replaced with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/reference-pulsar-admin#pulsar-admin-tenants"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin tenants"))," interface. In some cases the properties terminology is still used but is now considered deprecated and will be removed entirely in a future release."),(0,r.yg)("h3",{id:"topic-names"},"Topic names"),(0,r.yg)("p",null,"Prior to version 2.0, ",(0,r.yg)("em",{parentName:"p"},"all")," Pulsar topics had the following form:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\n{persistent|non-persistent}://property/cluster/namespace/topic\n\n")),(0,r.yg)("p",null,"Two important changes have been made in Pulsar 2.0:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There is no longer a ",(0,r.yg)("a",{parentName:"li",href:"#no-cluster"},"cluster component")),(0,r.yg)("li",{parentName:"ul"},"Properties have been ",(0,r.yg)("a",{parentName:"li",href:"#tenants"},"renamed to tenants")),(0,r.yg)("li",{parentName:"ul"},"You can use a ",(0,r.yg)("a",{parentName:"li",href:"#flexible-topic-naming"},"flexible")," naming system to shorten many topic names"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"/")," is not allowed in topic name")),(0,r.yg)("h4",{id:"no-cluster-component"},"No cluster component"),(0,r.yg)("p",null,"The cluster component has been removed from topic names. Thus, all topic names now have the following form:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"\n{persistent|non-persistent}://tenant/namespace/topic\n\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Existing topics that use the legacy name format will continue to work without any change, and there are no plans to change that.")),(0,r.yg)("h4",{id:"flexible-topic-naming"},"Flexible topic naming"),(0,r.yg)("p",null,"All topic names in Pulsar 2.0 internally have the form shown ",(0,r.yg)("a",{parentName:"p",href:"#no-cluster-component"},"above")," but you can now use shorthand names in many cases (for the sake of simplicity). The flexible naming system stems from the fact that there is now a default topic type, tenant, and namespace:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Topic aspect"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"topic type"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"persistent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"tenant"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"public"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"namespace"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"default"))))),(0,r.yg)("p",null,"The table below shows some example topic name translations that use implicit defaults:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Input topic name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Translated topic name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"my-topic")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"persistent://public/default/my-topic"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"my-tenant/my-namespace/my-topic")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"persistent://my-tenant/my-namespace/my-topic"))))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.1/concepts-messaging#non-persistent-topics"},"non-persistent topics")," you'll need to continue to specify the entire topic name, as the default-based rules for persistent topic names don't apply. Thus you cannot use a shorthand name like ",(0,r.yg)("inlineCode",{parentName:"p"},"non-persistent://my-topic")," and would need to use ",(0,r.yg)("inlineCode",{parentName:"p"},"non-persistent://public/default/my-topic")," instead")))}u.isMDXComponent=!0}}]);