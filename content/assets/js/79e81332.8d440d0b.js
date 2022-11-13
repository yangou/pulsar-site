"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,b=m["".concat(d,".").concat(s)]||m[s]||p[s]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"label",title:"Documentation Label Guide",sidebar_label:"Label Guide"},i=void 0,l={unversionedId:"documentation/label",id:"documentation/label",title:"Documentation Label Guide",description:"This guide instructs you on how to label your doc PR.",source:"@site/contribute/documentation/label.md",sourceDirName:"documentation",slug:"/documentation/label",permalink:"/contribute/documentation/label",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/documentation/label.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1668319311,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{id:"label",title:"Documentation Label Guide",sidebar_label:"Label Guide"},sidebar:"sidebar",previous:{title:"Contribution Guide",permalink:"/contribute/documentation/contribution"},next:{title:"Naming Convention Guide",permalink:"/contribute/documentation/naming"}},d={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide instructs you on how to label your doc PR."),(0,a.kt)("p",null,"When submitting an issue or PR, you must ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/PULL_REQUEST_TEMPLATE.md#documentation"},"provide doc label information")," by ",(0,a.kt)("strong",{parentName:"p"},"selecting the checkbox"),", so that the Bot can label the PR correctly."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Label"),(0,a.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"doc-required")),(0,a.kt)("td",{parentName:"tr",align:null},"Use this label to indicate this issue or PR impacts documentation.",(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"You have not updated the docs yet"),". The docs will be submitted later.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"doc-not-needed")),(0,a.kt)("td",{parentName:"tr",align:null},"The code changes in this PR do not impact documentation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"doc")),(0,a.kt)("td",{parentName:"tr",align:null},"This PR contains changes that impact documentation, ",(0,a.kt)("strong",{parentName:"td"},"no matter whether the changes are in markdown or code files"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"doc-complete")),(0,a.kt)("td",{parentName:"tr",align:null},"Use this label to indicate the documentation updates are complete.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"doc-label-missing")),(0,a.kt)("td",{parentName:"tr",align:null},"The Bot applies this label when there is no doc label information in the PR if one of the following conditions is met:. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," - You do not provide a doc label. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," - You provide multiple doc labels. ",(0,a.kt)("br",null),(0,a.kt)("br",null)," - You delete backticks (`",(0,a.kt)("inlineCode",{parentName:"td"},") in doc labels. <br/>For example,<br/> [x] "),"doc-required",(0,a.kt)("inlineCode",{parentName:"td"},"\u2705 <br/> [x] doc-required \u274c <br/><br/> - You add blanks in square brackets. <br/>For example, <br/> [x]"),"doc-required",(0,a.kt)("inlineCode",{parentName:"td"},"\u2705 <br/>[ x ]"),"doc-required` \u274c")))))}p.isMDXComponent=!0}}]);