"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8578:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},o="Introduction",s={unversionedId:"site-intro",id:"site-intro",title:"Introduction",description:"The Pulsar site is built with Docusaurus framework. You can find all the technical details on its docs.",source:"@site/contribute/site-intro.md",sourceDirName:".",slug:"/site-intro",permalink:"/contribute/site-intro",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/site-intro.md",tags:[],version:"current",lastUpdatedBy:"Zhang Yuxuan",lastUpdatedAt:1691635873,formattedLastUpdatedAt:"Aug 10, 2023",frontMatter:{},sidebar:"sidebarDevelopment",previous:{title:"Personal CI",permalink:"/contribute/personal-ci"},next:{title:"Previewing content",permalink:"/contribute/document-preview"}},i={},p=[{value:"Source",id:"source",level:2},{value:"Pages",id:"pages",level:2},{value:"Tools",id:"tools",level:2},{value:"preview.sh",id:"previewsh",level:3},{value:"docker-compose.yaml",id:"docker-composeyaml",level:3},{value:"Pytools",id:"pytools",level:3},{value:"How-tos",id:"how-tos",level:2},{value:"How to fix search index mismatches?",id:"how-to-fix-search-index-mismatches",level:3},{value:"How to preview changes locally?",id:"how-to-preview-changes-locally",level:3},{value:"How to update reference pages?",id:"how-to-update-reference-pages",level:3},{value:"How to update data-driven pages?",id:"how-to-update-data-driven-pages",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The Pulsar site is built with ",(0,n.kt)("a",{parentName:"p",href:"http://docusaurus.io/"},"Docusaurus")," framework. You can find all the technical details on ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"its docs"),"."),(0,n.kt)("p",null,"Specifically, this chapter provides a ",(0,n.kt)("a",{parentName:"p",href:"/contribute/document-syntax"},"writing syntax")," guide selecting knowledge for writing content of the site."),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,"Currently, the source of the site is located at the ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/apache/pulsar-site"},"apache/pulsar-site")," repo."),(0,n.kt)("h2",{id:"pages"},"Pages"),(0,n.kt)("p",null,"Docusaurus provides three kinds of pages out-of-the-box: ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"docs"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"blogs"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/creating-pages"},"JSX pages"),"."),(0,n.kt)("p",null,"The Pulsar site pages are of:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Page"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Source"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///docs"},"User docs")),(0,n.kt)("td",{parentName:"tr",align:null},"docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"docs/"),(0,n.kt)("li",null,"versioned_docs/"),(0,n.kt)("li",null,"versioned_sidebars/"),(0,n.kt)("li",null,"sidebars.json")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/contribute/"},"Contribution guides")),(0,n.kt)("td",{parentName:"tr",align:null},"docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"contribute/"),(0,n.kt)("li",null,"sidebarsDevelopment.js")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///release-notes"},"Release notes")),(0,n.kt)("td",{parentName:"tr",align:null},"docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"release-notes/"),(0,n.kt)("li",null,"sidebarsReleaseNotes.js")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///security"},"Security")),(0,n.kt)("td",{parentName:"tr",align:null},"docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"security/")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///blog"},"Blogs")),(0,n.kt)("td",{parentName:"tr",align:null},"blog"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"blog/")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///client-feature-matrix"},"Client feature matrix")),(0,n.kt)("td",{parentName:"tr",align:null},"docs"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"client-feature-matrix/"),(0,n.kt)("li",null,"data/matrix.js")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Other pages"),(0,n.kt)("td",{parentName:"tr",align:null},"JSX pages"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"src/pages/")))))),(0,n.kt)("p",null,"Besides, the site serves multiple static pages generated outside the framework, including API docs, reference docs, and swagger files. You can find them under the ",(0,n.kt)("inlineCode",{parentName:"p"},"static")," folder."),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("h3",{id:"previewsh"},"preview.sh"),(0,n.kt)("p",null,"The most commonly used tool is ",(0,n.kt)("inlineCode",{parentName:"p"},"preview.sh"),". You can preview your local changes by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./preview.sh 2.11.x\n")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/contribute/document-preview"},"previewing content")," guide for more details."),(0,n.kt)("h3",{id:"docker-composeyaml"},"docker-compose.yaml"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"preview.sh")," script uses the Docusaurus dev server for testing, which is different from the real Apache Web Server based env that serves the site online."),(0,n.kt)("p",null,"To emulate the server-side logics, like ",(0,n.kt)("inlineCode",{parentName:"p"},".htaccess")," rewrite rules, you can run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn build\ndocker-compose up\n")),(0,n.kt)("h3",{id:"pytools"},"Pytools"),(0,n.kt)("p",null,"The site repo has a set of Python scripts for generating content and syncing/updating/publishing the site."),(0,n.kt)("p",null,"You can read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/tools/pytools/README.md"},"README")," file of pytools for details."),(0,n.kt)("h2",{id:"how-tos"},"How-tos"),(0,n.kt)("p",null,"This section holds common how-tos about website maintenance and troubleshooting."),(0,n.kt)("h3",{id:"how-to-fix-search-index-mismatches"},"How to fix search index mismatches?"),(0,n.kt)("p",null,"First of all, you should get permission to access ",(0,n.kt)("inlineCode",{parentName:"p"},"apache_pulsar")," crawler on ",(0,n.kt)("a",{parentName:"p",href:"https://crawler.algolia.com/"},"Algolia Crawler console"),". You can email ",(0,n.kt)("a",{parentName:"p",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")," to ask for permission."),(0,n.kt)("p",null,'The most common fix for search index mismatches is to re-index the pages. You can do so by clicking "Restart crawling" button on the ',(0,n.kt)("a",{parentName:"p",href:"https://crawler.algolia.com/admin/crawlers/7a3458ba-2373-47d5-9520-90cc9cc10736/overview"},"crawler page"),". Typically, it takes about 1 or 2 hours to complete."),(0,n.kt)("h3",{id:"how-to-preview-changes-locally"},"How to preview changes locally?"),(0,n.kt)("p",null,"If you make any changes to the site, before submitting a pull request, you're supposed to preview the changes locally. Read the ",(0,n.kt)("a",{parentName:"p",href:"/contribute/document-preview"},"previewing content")," guide about instructions."),(0,n.kt)("h3",{id:"how-to-update-reference-pages"},"How to update reference pages?"),(0,n.kt)("p",null,"If you're gonna to update the content, read the ",(0,n.kt)("a",{parentName:"p",href:"/contribute/document-contribution#update-reference-docs"},"update reference docs")," guide about the sources of reference pages."),(0,n.kt)("p",null,"If you're gonna to debug the reference generation process, read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/tools/pytools#reference-doc-generator"},"reference-doc-generator")," usage section and its source code."),(0,n.kt)("h3",{id:"how-to-update-data-driven-pages"},"How to update data-driven pages?"),(0,n.kt)("p",null,"The following pages contain data-driven tables:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///case-studies"},"Case studies"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/users.js"),(0,n.kt)("li",{parentName:"ul"},"src/pages/case-studies.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///download"},"Downloads"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"releases.json"),(0,n.kt)("li",{parentName:"ul"},"data/connectors.js"),(0,n.kt)("li",{parentName:"ul"},"data/release-cpp.js"),(0,n.kt)("li",{parentName:"ul"},"data/release-pulsar-manager.js"),(0,n.kt)("li",{parentName:"ul"},"data/release-pulsar-adapters.js"),(0,n.kt)("li",{parentName:"ul"},"src/components/download.tsx"),(0,n.kt)("li",{parentName:"ul"},"src/pages/download.mdx"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///ecosystem"},"Ecosystem"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/ecosystem.js"),(0,n.kt)("li",{parentName:"ul"},"src/pages/ecosystem.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///events"},"Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/events.js"),(0,n.kt)("li",{parentName:"ul"},"src/pages/events.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///release-notes"},"Release notes"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/release-*.js"),(0,n.kt)("li",{parentName:"ul"},"release-notes/"),(0,n.kt)("li",{parentName:"ul"},"src/components/ClientReleaseTable.js"),(0,n.kt)("li",{parentName:"ul"},"src/components/PulsarReleaseTable.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///resources"},"Resources"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/resources.js"),(0,n.kt)("li",{parentName:"ul"},"src/pages/resources.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///team"},"Team"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/team.js"),(0,n.kt)("li",{parentName:"ul"},"src/pages/team.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///client-feature-matrix"},"Client feature matrix"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"data/matrix.js"),(0,n.kt)("li",{parentName:"ul"},"client-feature-matrix/index.mdx")))),(0,n.kt)("p",null,"Additionally, PMC members can generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"team.js")," file as @lhotari did in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/pull/387"},"https://github.com/apache/pulsar-site/pull/387"),"."))}d.isMDXComponent=!0}}]);