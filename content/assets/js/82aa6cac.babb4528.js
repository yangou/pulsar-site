"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34730],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>h});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?o.createElement(h,i(i({ref:t},l),{},{components:r})):o.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var m=2;m<a;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=r(58168),n=(r(96540),r(15680));const a={id:"become-core-developer",title:"How to become a core developer"},i=void 0,c={unversionedId:"become-core-developer",id:"become-core-developer",title:"How to become a core developer",description:"The Pulsar community follows the Apache governance model.",source:"@site/contribute/become-core-developer.md",sourceDirName:".",slug:"/become-core-developer",permalink:"/contribute/become-core-developer",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/become-core-developer.md",tags:[],version:"current",lastUpdatedBy:"Alvaro",lastUpdatedAt:1715348661,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{id:"become-core-developer",title:"How to become a core developer"},sidebar:"sidebarDevelopment",previous:{title:"Verifying release candidates",permalink:"/contribute/validate-release-candidate"}},s={},m=[{value:"Committers",id:"committers",level:2},{value:"PMC Members",id:"pmc-members",level:2}],l={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Pulsar community follows ",(0,n.yg)("a",{parentName:"p",href:"https://www.apache.org/foundation/how-it-works.html#roles"},"the Apache governance model"),"."),(0,n.yg)("p",null,"Basically, core developers consist of committers and PMC members."),(0,n.yg)("h2",{id:"committers"},"Committers"),(0,n.yg)("p",null,"Committers are community members that have write access to the project's repositories, i.e. they can modify the code, documentation, and website by themselves and also accept other contributions."),(0,n.yg)("p",null,"There is no strict protocol for becoming a committer. Candidates for new committers are typically people that are active contributors and community members."),(0,n.yg)("p",null,"Being an active community member means participating on mailing list discussions, helping to answer questions, verifying release candidates, being respectful towards others, and following the meritocratic principles of community management. Since ",(0,n.yg)("a",{parentName:"p",href:"https://www.apache.org/theapacheway/index.html"},"the Apache Way")," has a strong focus on the project community, this part is very important."),(0,n.yg)("p",null,"Of course, contributing code and documentation to the project is important as well. A good way to start is contributing improvements, new features, or bug fixes. You need to show that you take responsibility for the code that you contribute, add tests and documentation, and help maintaining it."),(0,n.yg)("p",null,"Every new committer has to be proposed by a current committer and then privately discussed and voted in by the members of the Pulsar PMC. For details about this process and for candidate requirements see the general ",(0,n.yg)("a",{parentName:"p",href:"https://community.apache.org/newcommitter.html"},"Apache guidelines for assessing new candidates for committership"),"."),(0,n.yg)("p",null,"Candidates prepare for their nomination as committer by contributing to the Pulsar project and its community, by acting according to the Apache Way, and by generally following the path from ",(0,n.yg)("a",{parentName:"p",href:"https://community.apache.org/contributors/"},"contributor to committer")," for Apache projects."),(0,n.yg)("p",null,"If you would like to become a committer, you should engage with the community and start contributing to Apache Pulsar in any of the above ways. You might also want to talk to other committers and ask for their advice and guidance."),(0,n.yg)("h2",{id:"pmc-members"},"PMC Members"),(0,n.yg)("p",null,"The project management committee (PMC) is the project governance body. Committers or contributors that have demonstrated continued involvement with the community can be nominated to become members of the PMC."),(0,n.yg)("p",null,"PMC members nominate new contributors to the project as either committers or as new PMC members, and PMC members cast votes on electing new committers or PMC members to the project. PMC members also have binding votes on any project matters. Refer to ",(0,n.yg)("a",{parentName:"p",href:"http://www.apache.org/foundation/governance/pmcs.html"},"ASF PMCs governance")," for a more detailed explanation of the duties and roles of the PMC."))}u.isMDXComponent=!0}}]);