(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[859],{76982:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>u,contentTitle:()=>n,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=a(58168),r=(a(96540),a(15680)),l=a(72351);const o={id:"release-policy",title:"Release policy"},n=void 0,i={unversionedId:"release-policy",id:"release-policy",title:"Release policy",description:"Supported Versions",source:"@site/contribute/release-policy.md",sourceDirName:".",slug:"/release-policy",permalink:"/contribute/release-policy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/release-policy.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720802525,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"release-policy",title:"Release policy"},sidebar:"sidebarDevelopment",previous:{title:"Updating document",permalink:"/contribute/document-contribution"},next:{title:"Release process",permalink:"/contribute/release-process"}},u={},d=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Release semantics",id:"release-semantics",level:2},{value:"Compatibility between releases",id:"compatibility-between-releases",level:2},{value:"Release frequency and support expectation",id:"release-frequency-and-support-expectation",level:2},{value:"Release cycles",id:"release-cycles",level:2},{value:"Related PIPs",id:"related-pips",level:2}],p={toc:d},c="wrapper";function g(e){let{components:s,...a}=e;return(0,r.yg)(c,(0,t.A)({},p,a,{components:s,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"supported-versions"},"Supported Versions"),(0,r.yg)("p",null,"Please plan your Pulsar deployment updates according to the dates provided below. However, note that the Apache Pulsar project may provide ad hoc releases for some older patch versions, depending on resource availability, time constraints, or the severity of an issue, such as a significant CVE. These releases would be provided on a 'best-effort' basis. For supported versions, the Apache Pulsar project follows the ",(0,r.yg)("a",{parentName:"p",href:"/security"},"Security policy"),"."),(0,r.yg)(l.A,{mdxType:"SupportedVersionsTable"}),(0,r.yg)("h2",{id:"release-semantics"},"Release semantics"),(0,r.yg)("p",null,"The Pulsar project follows a variant of Semantic Versioning (semver), which replacing ",(0,r.yg)("inlineCode",{parentName:"p"},"major.minor.patch")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"LTS.feature.patch"),"."),(0,r.yg)("p",null,'Concretely, existing releases can expect patches for bugs and security vulnerabilities. New features will target to feature releases. A "major" version bump will not carry any special meaning in terms of "big features" included in the release or breaking API changes. Instead, it would simply signal a new long-term support (LTS) release.'),(0,r.yg)("p",null,"For example,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"2.10.0 is a feature release;"),(0,r.yg)("li",{parentName:"ul"},"2.10.1 is a patch release;"),(0,r.yg)("li",{parentName:"ul"},"2.11.0 is a feature release;"),(0,r.yg)("li",{parentName:"ul"},"3.0.0 is the first LTS release;"),(0,r.yg)("li",{parentName:"ul"},"3.0.1 is a patch release of the LTS release;"),(0,r.yg)("li",{parentName:"ul"},"3.1.0 is a feature release;"),(0,r.yg)("li",{parentName:"ul"},"3.2.0 is a feature release;"),(0,r.yg)("li",{parentName:"ul"},"3.2.1 is a patch release;"),(0,r.yg)("li",{parentName:"ul"},"4.0.0 is an LTS release.")),(0,r.yg)("h2",{id:"compatibility-between-releases"},"Compatibility between releases"),(0,r.yg)("p",null,"When upgrading an existing cluster, it is important to upgrade components linearly."),(0,r.yg)("p",null,"Before 3.0, upgrade should be done linearly through each feature version. For example, when upgrading from 2.8 to 2.10, it is important to upgrade to 2.9 before going to 2.10."),(0,r.yg)("p",null,"Starting from 3.0, additionally, live upgrade/downgrade between one LTS and the next one is guaranteed. For example,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"3.0 -> 4.0 -> 3.0 is OK;"),(0,r.yg)("li",{parentName:"ul"},"3.2 -> 4.0 -> 3.2 is OK;"),(0,r.yg)("li",{parentName:"ul"},"3.2 -> 4.4 -> 3.2 is OK;"),(0,r.yg)("li",{parentName:"ul"},"3.0 -> 3.1 -> 3.0 is OK;"),(0,r.yg)("li",{parentName:"ul"},"3.0 -> 3.2 -> 3.0 is OK;"),(0,r.yg)("li",{parentName:"ul"},"3.2 -> 5.0 is ",(0,r.yg)("em",{parentName:"li"},"not")," OK.")),(0,r.yg)("h2",{id:"release-frequency-and-support-expectation"},"Release frequency and support expectation"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Release frequency"),(0,r.yg)("th",{parentName:"tr",align:null},"Active Support"),(0,r.yg)("th",{parentName:"tr",align:null},"Security Support"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LTS release"),(0,r.yg)("td",{parentName:"tr",align:null},"Every 18 months"),(0,r.yg)("td",{parentName:"tr",align:null},"24 months"),(0,r.yg)("td",{parentName:"tr",align:null},"36 months")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Feature release"),(0,r.yg)("td",{parentName:"tr",align:null},"Every 3 months"),(0,r.yg)("td",{parentName:"tr",align:null},"6 months"),(0,r.yg)("td",{parentName:"tr",align:null},"6 months")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Patch release"),(0,r.yg)("td",{parentName:"tr",align:null},"When it is ready"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A")))),(0,r.yg)("p",null,"This can be translated into:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The last 2 LTS releases and the last 2 feature releases are supported."),(0,r.yg)("li",{parentName:"ul"},"Security patches are provided for the past 3 LTS releases and 2 feature releases")),(0,r.yg)("p",null,"Therefore, users can choose between stay in an LTS release until they are ready to jump into the next LTS, or try the latest releases which contains required features."),(0,r.yg)("h2",{id:"release-cycles"},"Release cycles"),(0,r.yg)("p",null,"Generally, one committer shall volunteer as the release manager (RM) for a specific release."),(0,r.yg)("p",null,"For feature releases and LTS releases, the last 3 weeks of the release cycle will be marked as a code-freeze period. The RM will branch off from master, and the RM is also responsible for selecting the changes that will be cherry-picked in the release branch."),(0,r.yg)("p",null,"From the code-freeze point, to minimize the risk of delaying the release, only bug fixes involving a regression of behavior compared to a previous release should be allowed. Occasional exceptions will be possible after higher scrutiny of the change."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"At the moment of the code freeze, the RM will start preparing a release candidate (RC) following the ",(0,r.yg)("a",{parentName:"li",href:"/contribute/release-process"},"release process"),". Committers, contributors, and users will ",(0,r.yg)("a",{parentName:"li",href:"/contribute/validate-release-candidate"},"test this RC")," to detect issues as early as possible. (A formal vote by the PMC will not be required at this stage, though any disagreement should be sent out ASAP)."),(0,r.yg)("li",{parentName:"ol"},"After 1 week, if there are any changes, the RM will provide a new RC release that the community will test again."),(0,r.yg)("li",{parentName:"ol"},"After 1 more week, if there are any changes, a third RC will be prepared, and this will be submitted to vote to the PMC. Otherwise, the vote will be held on an earlier RC if no issues are found."),(0,r.yg)("li",{parentName:"ol"},"The last 1 week will be used for the voting process and for updating Pulsar website and the blog post announcing the release, which should (hopefully) happen on the scheduled day.")),(0,r.yg)("p",null,'For patch releases, the process is the same while there is no code-freeze period and strict timeline. Basically, patch release is out "when it is ready".'),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"For example, the next release of Pulsar is 3.0.0, and it has the planned timeline as:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"2023-04-11 - RC-1"),(0,r.yg)("li",{parentName:"ul"},"2023-04-18 - RC-2"),(0,r.yg)("li",{parentName:"ul"},"2023-04-25 - RC-3"),(0,r.yg)("li",{parentName:"ul"},"2023-05-02 - Announce 3.0 Release"))),(0,r.yg)("h2",{id:"related-pips"},"Related PIPs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/wiki/PIP-47%3A-Time-Based-Release-Plan"},"PIP-47: A Time-Based Release Plan")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/issues/15966"},"PIP-175: Extend time based release process"))))}g.isMDXComponent=!0},55282:e=>{e.exports=[{author:"coderzc",tagName:"v3.3.0",publishedAt:"2024-06-05T16:26:09Z",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/pulsar-3.3.0/",doc:"/docs/3.3.x",version:"v3.3.x"},{author:"lhotari",tagName:"v3.2.3",publishedAt:"2024-05-17T13:12:43Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.3/",doc:"/docs/3.2.x",version:"v3.2.x"},{author:"lhotari",tagName:"v3.2.2",publishedAt:"2024-04-02T06:08:51Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.2/",doc:"/docs/3.2.x",version:""},{author:"Technoboy-",tagName:"v3.2.1",publishedAt:"2024-03-08T21:11:40Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.1/",doc:"/docs/3.2.x",version:""},{author:"Technoboy-",tagName:"v3.2.0",publishedAt:"2024-02-05T18:34:40Z",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/pulsar-3.2.0/",doc:"/docs/3.2.x",version:""},{author:"gaoran10",tagName:"v3.1.3",publishedAt:"2024-03-08T19:50:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.3/",doc:"/docs/3.1.x",version:"v3.1.x"},{author:"AnonHxy",tagName:"v3.1.2",publishedAt:"2024-01-02T18:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.2/",doc:"/docs/3.1.x",version:""},{author:"Technoboy-",tagName:"v3.1.1",publishedAt:"2023-10-24T16:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.1/",doc:"/docs/3.1.x",version:""},{author:"Technoboy-",tagName:"v3.1.0",publishedAt:"2023-08-10T16:37:40Z",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/pulsar-3.1.0/",doc:"/docs/3.1.x",version:""},{author:"lhotari",tagName:"v3.0.5",publishedAt:"2024-05-17T13:08:06Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.5/",doc:"/docs/3.0.x",version:"v3.0.x"},{author:"lhotari",tagName:"v3.0.4",publishedAt:"2024-04-02T04:56:15Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.4/",doc:"/docs/3.0.x",version:""},{author:"heesung-sn",tagName:"v3.0.3",publishedAt:"2024-03-09T16:53:02Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.3/",doc:"/docs/3.0.x",version:""},{author:"poorbarcode",tagName:"v3.0.2",publishedAt:"2023-12-03T11:17:00Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.2/",doc:"/docs/3.0.x",version:""},{author:"RobertIndie",tagName:"v3.0.1",publishedAt:"2023-08-07T15:00:00Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.1/",doc:"/docs/3.0.x",version:""},{author:"RobertIndie",tagName:"v3.0.0",publishedAt:"2023-05-02T16:37:40Z",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/pulsar-3.0.0/",releaseBlog:"/blog/2023/05/02/announcing-apache-pulsar-3-0",doc:"/docs/3.0.x",version:""},{author:"lhotari",tagName:"v2.11.4",publishedAt:"2024-03-08T11:47:28Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.4/",doc:"/docs/2.11.x",version:"v2.11.x"},{author:"shibd",tagName:"v2.11.3",publishedAt:"2024-01-03T11:20:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.3/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.2",publishedAt:"2023-07-18T16:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.2/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.1",publishedAt:"2023-04-19T16:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.1/",doc:"/docs/2.11.x",version:""},{author:"Technoboy-",tagName:"v2.11.0",publishedAt:"2023-01-11T01:53:34Z",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/pulsar-2.11.0/",releaseBlog:"/blog/2023/01/20/Apache-Pulsar-2-11-0",doc:"/docs/2.11.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.6",publishedAt:"2024-03-08T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.6/",doc:"/docs/2.10.x",version:"v2.10.x"},{author:"liangyepianzhou",tagName:"v2.10.5",publishedAt:"2023-07-30T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.5/",doc:"/docs/2.10.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.4",publishedAt:"2023-04-18T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.4/",releaseBlog:"/blog/2023-04-19-Apache-Pulsar-2-10-4.md",doc:"/docs/2.10.x",version:""},{author:"liangyepianzhou",tagName:"v2.10.3",publishedAt:"2023-01-04T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.3/",releaseBlog:"/blog/2023/01/09/Apache-Pulsar-2-10-3",doc:"/docs/2.10.x",version:""},{author:"Jason918",tagName:"v2.10.2",publishedAt:"2022-10-28T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.2/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.1",publishedAt:"2022-07-04T14:45:46Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.1/",releaseBlog:"/blog/2022/07/12/Apache-Pulsar-2-10-1",doc:"/docs/2.10.x",version:""},{author:"codelipenghui",tagName:"v2.10.0",publishedAt:"2022-04-18T02:08:43Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.0/",releaseBlog:"",doc:"/docs/2.10.x",version:""},{author:"coderzc",tagName:"v2.9.5",publishedAt:"2023-04-20T02:38:21Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.5/",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"congbobo184",tagName:"v2.9.4",publishedAt:"2022-12-28T01:12:20Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.4/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"mattisonchao",tagName:"v2.9.3",publishedAt:"2022-07-20T02:04:10Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.3/",releaseBlog:"/blog/2022/07/27/Apache-Pulsar-2-9-3",doc:"/docs/2.9.x",version:""},{author:"gaoran10",tagName:"v2.9.2",publishedAt:"2022-04-08T03:22:33Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.2/",releaseBlog:"/blog/2022/04/08/Apache-Pulsar-2-9-2",doc:"/docs/2.9.x",version:""},{author:"eolivelli",tagName:"v2.9.1",publishedAt:"2021-12-20T12:34:56Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.1/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"BewareMyPower",tagName:"v2.8.4",publishedAt:"2022-10-04T13:38:54Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.4/",releaseBlog:"",doc:"/docs/2.8.x",version:"v2.8.x"},{author:"michaeljmarshall",tagName:"v2.8.3",publishedAt:"2022-04-08T03:27:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.3/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"315157973",tagName:"v2.8.2",publishedAt:"2022-01-12T09:39:25Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.2/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"hangc0276",tagName:"v2.8.1",publishedAt:"2021-09-18T01:39:29Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.1/",releaseBlog:"/blog/2021/09/23/Apache-Pulsar-2-8-1",doc:"/docs/2.8.x",version:""},{author:"codelipenghui",tagName:"v2.8.0",publishedAt:"2021-06-15T10:39:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.0/",releaseBlog:"/blog/2021/06/12/Apache-Pulsar-2-8-0",doc:"/docs/2.8.x",version:""},{author:"Jason918",tagName:"v2.7.5",publishedAt:"2022-09-06T10:53:32Z",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/pulsar-2.7.5/",releaseBlog:"/blog/2022/09/09/Apache-Pulsar-2-7-5",doc:"/docs/2.7.5",version:"v2.7.x"},{author:"Technoboy-",tagName:"v2.7.4",publishedAt:"2021-12-27T08:24:54Z",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/pulsar-2.7.4/",releaseBlog:"/blog/2021/12/14/Apache-Pulsar-2-7-4",doc:"/docs/2.7.4",version:""},{author:"congbobo184",tagName:"v2.7.3",publishedAt:"2021-08-11T01:45:27Z",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/pulsar-2.7.3/",releaseBlog:"/blog/2021/08/11/Apache-Pulsar-2-7-3",doc:"/docs/2.7.3",version:""},{author:"eolivelli",tagName:"v2.7.2",publishedAt:"2021-05-25T06:30:19Z",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/pulsar-2.7.2/",releaseBlog:"/blog/2021/05/13/Apache-Pulsar-2-7-2",doc:"/docs/2.7.2",version:""},{author:"zymap",tagName:"v2.7.1",publishedAt:"2021-03-22T00:35:17Z",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/pulsar-2.7.1/",releaseBlog:"",doc:"/docs/2.7.1",version:""},{author:"codelipenghui",tagName:"v2.7.0",publishedAt:"2020-12-03T08:29:15Z",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/pulsar-2.7.0/",releaseBlog:"/blog/2020/12/24/Apache-Pulsar-2-7-0",doc:"/docs/2.7.0",version:""},{author:"lhotari",tagName:"v2.6.4",publishedAt:"2021-06-02T18:10:21Z",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/pulsar-2.6.4/",releaseBlog:"",doc:"/docs/2.6.4",version:"v2.6.x"},{author:"codelipenghui",tagName:"v2.6.3",publishedAt:"2021-01-21T12:34:56Z",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/pulsar-2.6.3/",releaseBlog:"",doc:"/docs/2.6.3",version:""},{author:"wolfstudy",tagName:"v2.6.2",publishedAt:"2020-11-09T05:08:25Z",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/pulsar-2.6.2/",releaseBlog:"/blog/2020/11/09/Apache-Pulsar-2-6-2",doc:"/docs/2.6.2",version:""},{author:"wolfstudy",tagName:"v2.6.1",publishedAt:"2020-08-21T01:35:54Z",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/pulsar-2.6.1/",releaseBlog:"/blog/2020/08/21/Apache-Pulsar-2-6-1",doc:"/docs/2.6.1",version:""},{author:"codelipenghui",tagName:"v2.6.0",publishedAt:"2020-06-17T12:57:15Z",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/pulsar-2.6.0/",releaseBlog:"/blog/2020/06/18/Apache-Pulsar-2-6-0",doc:"/docs/2.6.0",version:""},{author:"jiazhai",tagName:"v2.5.2",publishedAt:"2020-05-19T12:25:05Z",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/pulsar-2.5.2/",releaseBlog:"/blog/2020/05/19/Apache-Pulsar-2-5-2",doc:"/docs/2.5.2",version:"v2.5.x"},{author:"tuteng",tagName:"v2.5.1",publishedAt:"2020-05-11T04:22:55Z",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/pulsar-2.5.1/",releaseBlog:"/blog/2020/04/23/Apache-Pulsar-2-5-1",doc:"/docs/2.5.1",version:""},{author:"sijie",tagName:"v2.5.0",publishedAt:"2020-01-15T12:34:56Z",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/pulsar-2.5.0/",releaseBlog:"",doc:"/docs/2.5.0",version:""}]},72351:(e,s,a)=>{"use strict";a.d(s,{A:()=>w});var t=a(2543),r=a.n(t),l=a(96540),o=a(97716),n=a.n(o),i=a(46780),u=a(35826),d=a(53881),p=a(618),c=a(73231),g=a(88933),h=a(55282),m=a.n(h),v=a(75489),y=a(86025),b=a(95093),N=a.n(b),j=a(79369);function f(e,s){const a=N()(s);return e.compareMain("3.0.0")<0?a.add(12,"months"):e.minor>0?a.add(6,"months"):a.add(24,"months")}function x(e,s){const a=N()(s);return e.compareMain("3.0.0")<0?a.add(12,"months"):e.minor>0?a.add(6,"months"):a.add(36,"months")}const A=(0,j.A)("div")({width:15,height:15,borderRadius:"50%"});function T(e){const s=N()();return l.createElement(i.A,null,l.createElement(l.Fragment,null,l.createElement(u.A,{direction:"row",spacing:2},l.createElement("div",{style:{marginTop:10}},l.createElement(A,{style:{background:e.isBefore(s)?"crimson":"mediumaquamarine"}})),l.createElement("div",{style:{color:e.isBefore(s)?"crimson":"inherit"}},e.isBefore(s)?"Ended":"End"," ",e.fromNow(),l.createElement("br",null),"(",e.format("DD MMM YYYY"),")"))))}const w=e=>{let s=m().map((e=>({version:n().coerce(e.tagName),released:N()(e.publishedAt),releaseNoteLink:e.releaseNotes})));s.sort(((e,s)=>n().rcompare(e.version,s.version)));let a=[];for(const l of s){const e=l.version,s=l.released,n=r().last(a);n&&(t=n.version,o=l.version,t.major==o.major&&t.minor==o.minor)?(n.released=l.released,n.activeSupport=f(n.version,n.released),n.securitySupport=x(n.version,n.released)):a.push({version:e,released:s,activeSupport:f(e,s),securitySupport:x(e,s),latest:e,latestReleased:s,latestReleaseNoteLink:l.releaseNoteLink})}var t,o;e.isHideUnmaintained&&(a=a.filter((e=>e.activeSupport.isAfter(new Date)||e.securitySupport.isAfter(new Date))));const u=(0,j.A)(i.A)({fontWeight:"bold"});return l.createElement(l.Fragment,null,l.createElement(d.A,null,l.createElement(p.A,null,l.createElement(c.A,null,l.createElement(u,null,"Version"),l.createElement(u,null,"Released"),l.createElement(u,null,"Active Support"),l.createElement(u,null,"Security Support"),l.createElement(u,null,"Latest"))),l.createElement(g.A,null,a.map(((e,s)=>{return l.createElement(l.Fragment,null,l.createElement(c.A,{key:s},(t=e.version).compareMain("3.0.0")<0||0!=t.minor?l.createElement(i.A,null,t.major,".",t.minor):l.createElement(i.A,null,t.major,".",t.minor," (LTS)"),(a=e.released,l.createElement(i.A,null,l.createElement(l.Fragment,null,a.fromNow(),l.createElement("br",null),"(",a.format("DD MMM YYYY"),")"))),T(e.activeSupport),T(e.securitySupport),function(e){const s=N()();return e.activeSupport.isBefore(s)&&e.securitySupport.isBefore(s)?l.createElement(i.A,null,l.createElement("del",null,e.latest.version)):l.createElement(i.A,null,l.createElement(l.Fragment,null,l.createElement(v.A,{href:(0,y.A)(e.latestReleaseNoteLink)},e.latest.version),l.createElement("br",null),"(",e.latestReleased.format("DD MMM YYYY"),")"))}(e)));var a,t})))))}},35358:(e,s,a)=>{var t={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":89089,"./br.js":89089,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":32934,"./eo.js":32934,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":31052,"./tlh.js":31052,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function r(e){var s=l(e);return a(s)}function l(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=l,e.exports=r,r.id=35358}}]);