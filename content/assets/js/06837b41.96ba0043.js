(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57932],{15680:(e,t,r)=>{"use strict";r.d(t,{xA:()=>u,yg:()=>v});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},618:(e,t,r)=>{"use strict";r.d(t,{A:()=>N});var n=r(58168),o=r(98587),a=r(96540),s=r(54533),l=r(64111),i=r(27256),c=r(3541),u=r(22871),d=r(27553),p=r(34548);function m(e){return(0,p.Ay)("MuiTableHead",e)}(0,d.A)("MuiTableHead",["root"]);var v=r(74848);const g=["className","component"],f=(0,u.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),b={variant:"head"},y="thead",N=a.forwardRef((function(e,t){const r=(0,c.A)({props:e,name:"MuiTableHead"}),{className:a,component:u=y}=r,d=(0,o.A)(r,g),p=(0,n.A)({},r,{component:u}),N=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},m,t)})(p);return(0,v.jsx)(i.A.Provider,{value:b,children:(0,v.jsx)(f,(0,n.A)({as:u,className:(0,s.A)(N.root,a),ref:t,role:u===y?null:"rowgroup",ownerState:p},d))})}))},65669:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(58168),o=(r(96540),r(15680)),a=r(21590),s=r(18461),l=r.n(s);const i={id:"client-go",title:"Go Client Release Notes",sidebar_label:"Go Client"},c=void 0,u={unversionedId:"client-go",id:"client-go",title:"Go Client Release Notes",description:"",source:"@site/release-notes/client-go.mdx",sourceDirName:".",slug:"/client-go",permalink:"/release-notes/client-go",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-go.mdx",tags:[],version:"current",frontMatter:{id:"client-go",title:"Go Client Release Notes",sidebar_label:"Go Client"},sidebar:"releaseNote",previous:{title:"Python Client",permalink:"/release-notes/client-python"},next:{title:"Node.js Client",permalink:"/release-notes/client-node"}},d={},p=[],m={toc:p},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(v,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(a.A,{data:l(),mdxType:"ClientReleaseTable"}))}g.isMDXComponent=!0},18461:e=>{e.exports=[{tagName:"v0.9.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.9.0/",doc:"/docs/client-libraries-go",version:"v0.9.x"},{tagName:"v0.8.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.1/",doc:"/docs/client-libraries-go",version:"v0.8.x"},{tagName:"v0.8.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.0/",doc:"/docs/client-libraries-go",version:""},{tagName:"v0.7.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.7.0/",doc:"/docs/client-libraries-go",version:"v0.7.x"},{tagName:"v0.6.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.6.0/",doc:"/docs/client-libraries-go",version:"v0.6.x"},{tagName:"v0.5.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.5.0/",doc:"/docs/client-libraries-go",version:"v0.5.x"},{tagName:"v0.4.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.4.0/",doc:"/docs/client-libraries-go",version:"v0.4.x"},{tagName:"v0.3.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.3.0/",doc:"/docs/client-libraries-go",version:"v0.3.x"},{tagName:"v0.2.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.2.0/",doc:"/docs/client-libraries-go",version:"v0.2.x"},{tagName:"v0.1.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.1/",doc:"/docs/client-libraries-go",version:"v0.1.x"},{tagName:"v0.1.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.0/",doc:"/docs/client-libraries-go",version:""}]},21590:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(96540),o=r(53881),a=r(88933),s=r(46780),l=r(618),i=r(73231),c=r(21312);function u(e){return n.createElement(o.A,{size:"small"},n.createElement(l.A,null,n.createElement(i.A,null,["Version","Release Note","Documentation"].map((e=>n.createElement(s.A,{className:"font-bold",sx:{color:"inherit"},key:e},n.createElement(c.A,null,e)))))),n.createElement(a.A,null,e.data.map(((e,t)=>n.createElement(i.A,{key:t,sx:{color:"inherit"}},n.createElement(s.A,{sx:{color:"inherit"}},e.version),n.createElement(s.A,{sx:{color:"inherit"}},n.createElement("a",{href:e.releaseNotes},e.tagName)),n.createElement(s.A,{sx:{color:"inherit"}},n.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);