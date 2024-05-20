"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40203],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>m});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),o=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},p=function(e){var a=o(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(r),g=n,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return r?t.createElement(m,l(l({ref:a},p),{},{components:r})):t.createElement(m,l({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91039:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var t=r(58168),n=(r(96540),r(15680));const i={id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},l=void 0,s={unversionedId:"client-libraries-java",id:"version-3.0.x/client-libraries-java",title:"Pulsar Java client",description:"You can use a Pulsar Java client to create Pulsar producers, consumers, and readers in Java and perform administrative tasks. All the methods in Java clients are thread-safe. The current Java client version is 3.0.5.",source:"@site/versioned_docs/version-3.0.x/client-libraries-java.md",sourceDirName:".",slug:"/client-libraries-java",permalink:"/docs/3.0.x/client-libraries-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/client-libraries-java.md",tags:[],version:"3.0.x",frontMatter:{id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/3.0.x/client-libraries"},next:{title:"Set up",permalink:"/docs/3.0.x/client-libraries-java-setup"}},c={},o=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"API reference",id:"api-reference",level:4},{value:"More reference",id:"more-reference",level:4}],p={toc:o},d="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can use a Pulsar Java client to create Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/concepts-clients#producer"},"producers"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/concepts-clients#consumer"},"consumers"),", and ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/concepts-clients#reader"},"readers")," in Java and perform ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0.x/admin-api-overview"},"administrative tasks"),". All the methods in Java clients are thread-safe. The current Java client version is ",(0,n.yg)("strong",{parentName:"p"},"3.0.5"),"."),(0,n.yg)("h2",{id:"get-started"},"Get started"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-java-setup"},"Set up Java client library")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-java-initialize"},"Initialize a Java client")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-java-use"},"Use a Java client"))),(0,n.yg)("h2",{id:"whats-next"},"What's next?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-clients"},"Work with clients")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-producers"},"Work with producers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-consumers"},"Work with consumers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-readers"},"Work with readers")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-tableviews"},"Work with TableView")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/3.0.x/client-libraries-cluster-level-failover"},"Configure cluster-level failover"))),(0,n.yg)("h2",{id:"reference-doc"},"Reference doc"),(0,n.yg)("h4",{id:"api-reference"},"API reference"),(0,n.yg)("p",null,"The following table outlines the API packages and reference docs for Pulsar Java clients."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Package"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Maven Artifact"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/3.0.x"},(0,n.yg)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.api"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Java client API. ",(0,n.yg)("br",null)," See ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/pulsar-api-overview#pulsar-client-apis"},"Client API overview")," for more reference."),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.0.5%7Cjar"},"org.apache.pulsar:pulsar-client:3.0.5"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/3.0.x"},(0,n.yg)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.admin"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Java admin API. ",(0,n.yg)("br",null)," See ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.0.x/admin-api-overview"},"Admin API overview")," for more reference."),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C3.0.5%7Cjar"},"org.apache.pulsar:pulsar-client-admin:3.0.5"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"org.apache.pulsar.client.all")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Include both ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client-admin"),".",(0,n.yg)("br",null)," Both ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client-admin")," are independently shaded packages. Consequently, the applications using both ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client-admin")," have redundant shaded classes. It would be troublesome if you introduce new dependencies but forget to update shading rules. ",(0,n.yg)("br",null)," In this case, you can use ",(0,n.yg)("inlineCode",{parentName:"td"},"pulsar-client-all"),", which shades dependencies only one time and reduces the size of dependencies."),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-all%7C3.0.5%7Cjar"},"org.apache.pulsar:pulsar-client-all:3.0.5"))))),(0,n.yg)("h4",{id:"more-reference"},"More reference"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///reference/#/3.0.x/client/"},"Java client configurations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"pathname:///release-notes/client-java"},"Release notes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client feature matrix"))))}u.isMDXComponent=!0}}]);