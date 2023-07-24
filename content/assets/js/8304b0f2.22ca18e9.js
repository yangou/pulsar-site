"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92545],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>m});var a=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,i=function(e,t){if(null==e)return{};var s,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var s=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(s),d=i,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||n;return s?a.createElement(m,r(r({ref:t},p),{},{components:s})):a.createElement(m,r({ref:t},p))}));function m(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=s.length,r=new Array(n);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<n;u++)r[u]=s[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}d.displayName="MDXCreateElement"},64424:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=s(87462),i=(s(67294),s(3905));const n={id:"develop-triage",title:"Triaging an Issue"},r=void 0,o={unversionedId:"develop-triage",id:"develop-triage",title:"Triaging an Issue",description:"This guide documents the issue tracker for users and developers.",source:"@site/contribute/develop-triage.md",sourceDirName:".",slug:"/develop-triage",permalink:"/contribute/develop-triage",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/develop-triage.md",tags:[],version:"current",lastUpdatedBy:"Kiryl Valkovich",lastUpdatedAt:1690163166,formattedLastUpdatedAt:"Jul 24, 2023",frontMatter:{id:"develop-triage",title:"Triaging an Issue"},sidebar:"sidebarDevelopment",previous:{title:"Coding conventions",permalink:"/contribute/develop-coding-conventions"},next:{title:"Label strategy",permalink:"/contribute/develop-labels"}},l={},u=[{value:"Checklist for Triaging",id:"checklist-for-triaging",level:2},{value:"Assignees",id:"assignees",level:2},{value:"Helping Triage Issues",id:"helping-triage-issues",level:2},{value:"Classifying Reports",id:"classifying-reports",level:3},{value:"Closing Issues",id:"closing-issues",level:3},{value:"Re-Evaluating Closed Issues",id:"re-evaluating-closed-issues",level:3},{value:"Finding an Issue You Can Help With",id:"finding-an-issue-you-can-help-with",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...s}=e;return(0,i.kt)(c,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide documents the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"issue tracker")," for users and developers."),(0,i.kt)("h2",{id:"checklist-for-triaging"},"Checklist for Triaging"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Read the initial message and the comments."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that the title is reasonably concise, while including enough specifics so that those scanning the list of issues can quickly identify its topic."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Leave a brief comment about the proposed next action needed. If there is a long message list, a summary can be very helpful."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","(Committers-only) Set all the relevant ",(0,i.kt)("a",{parentName:"li",href:"develop-labels"},"labels"),"."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","(Committers-only) Where appropriate, set the Assignees, Reviewers, Milestone fields, and possibly @mention relevant people."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","(Committers-only) If the issue is clearly invalid (unrelated to Pulsar, duplicate, spam, etc), you can close it as ",(0,i.kt)("a",{parentName:"li",href:"https://github.blog/changelog/2022-05-19-the-new-github-issues-may-19th-update/"},'"not planned"'),".")),(0,i.kt)("h2",{id:"assignees"},"Assignees"),(0,i.kt)("p",null,"This field indicates who is expected to take the next step in resolving the issue."),(0,i.kt)("p",null,"Since the Pulsar community follows ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/theapacheway/"},"Community of Peers")," pattern, a contributor is assigned to an issue only if they ask for or self-assign. GitHub only allows team members or participants to be assigned, and asking for an assignment simplifies this restriction."),(0,i.kt)("h2",{id:"helping-triage-issues"},"Helping Triage Issues"),(0,i.kt)("p",null,"Once you know your way around how Pulsar's source files are structured and you are comfortable with the workflow, a great way to contribute is to help triage issues. Do realize, though, that experience working on Pulsar is needed in order to effectively help triage."),(0,i.kt)("p",null,"Around the clock, new issues are being opened on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues"},"issue tracker")," and existing issues are being updated. Every issue needs to be triaged to make sure everything runs smoothly."),(0,i.kt)("h3",{id:"classifying-reports"},"Classifying Reports"),(0,i.kt)("p",null,"Pulsar provides five issue templates and they define what is desired in each category. Issue tracker holds only actionable items, including bug reports and enhancements. Questions and suggestions are recommended to be posted at:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"User Mail List")," (",(0,i.kt)("a",{parentName:"li",href:"mailto:users-subscribe@pulsar.apache.org"},"subscribe"),"), or"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/discussions"},"Github Discussion"),".")),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/bug-report.yml"},"bug reports"),", an issue needs to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"provide the OS and Pulsar version in use"),(0,i.kt)("li",{parentName:"ul"},"give reproducing steps to facilitate quick location of the problem"),(0,i.kt)("li",{parentName:"ul"},"clearly explain what is expected and what happens actually")),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/enhancement.yml"},"enhancements"),", an issue needs to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"describe the motivations (why does Pulsar need it)"),(0,i.kt)("li",{parentName:"ul"},"describe the proposed solution and add related materials like links if any"),(0,i.kt)("li",{parentName:"ul"},"describe other alternative solutions or features considered, but rejected")),(0,i.kt)("p",null,"Frequent raised issues have their own templates: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/flaky-test.yml"},"flaky tests")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/doc.yml"},"document issues"),"."),(0,i.kt)("p",null,"Pulsar improvement proposal (PIP) has its own ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/wiki/proposals/PIP.md"},"workflow"),"."),(0,i.kt)("h3",{id:"closing-issues"},"Closing Issues"),(0,i.kt)("p",null,"Stale issues coming from years ago are hardly handled today. Also, a huge issue backlog decreases the passion a contributor spends time on issue triaging."),(0,i.kt)("p",null,"Here are several common reasons to close issues especially stale ones that you can use to judge:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a bug report is associated with ",(0,i.kt)("a",{parentName:"li",href:"/contribute/release-policy#Supported-Versions"},"unmaintained versions"),', and it can hardly or cannot be reproduced on maintained versions, you can close the issue with comment "Closing as stale. If it\'s still relevant to maintained versions, feel free to open a new issue."'),(0,i.kt)("li",{parentName:"ul"},'If an enhancement ticket gets stale for over a year and no one seems working on it, you can close the issue with comment "Closing as stale and no one worked on it. Please open a new issue if you volunteer to do it."'),(0,i.kt)("li",{parentName:"ul"},'If a user question is answered in the thread, you can close the issue with comment "Closing as answered"; otherwise, you can ',(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion"},"convert the issue to a discussion")," under the Q&A category."),(0,i.kt)("li",{parentName:"ul"},"If an open issue is already resolved on master or is duplicate to another issue, you can directly close the issue with those resolutions."),(0,i.kt)("li",{parentName:"ul"},"Due to historical reasons, some issues are about multilingual clients (C++, Go, Python) or other components moved out to their separate repositories. You can ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository"},"transfer the issue"),' to the corresponding repository, or close it with comment "Closing as stale. The development of {the specific module} is permantly moved to {the separate repository}. Please open a new issue there if it\'s still relevent."')),(0,i.kt)("h3",{id:"re-evaluating-closed-issues"},"Re-Evaluating Closed Issues"),(0,i.kt)("p",null,"You can concern that some stale issues are still relevant but get closed eagerly."),(0,i.kt)("p",null,"Do worry! Anyone is expected to search before asking. And once they find a closed issue is relevant, they can pick it up or open a new one and refer to the previous one. This is always viable and here are some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/7837"},"DB2 Connector for Pulsar")," was picked up with a new volunteer working on it;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/19910"},"Support basic-authentication in function url")," refers to a closed issue and supersedes it.")),(0,i.kt)("h3",{id:"finding-an-issue-you-can-help-with"},"Finding an Issue You Can Help With"),(0,i.kt)("p",null,"If you want to help with triaging, you might also want to search for issues in modules for which you have a working knowledge. Search for the name of a module in the issue tracker, filter by ",(0,i.kt)("inlineCode",{parentName:"p"},"component/*")," label, or use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/search/advanced"},"advanced search")," to find these issues."))}h.isMDXComponent=!0}}]);