"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88962],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=n,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(g,l(l({ref:r},u),{},{components:t})):a.createElement(g,l({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83319:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(58168),n=(t(96540),t(15680));const o={id:"helm-upgrade",title:"Upgrade Pulsar Helm release",sidebar_label:"Upgrade"},l=void 0,i={unversionedId:"helm-upgrade",id:"version-2.5.1/helm-upgrade",title:"Upgrade Pulsar Helm release",description:"Before upgrading your Pulsar installation, you need to check the change log corresponding to the specific release you want to upgrade to and look for any release notes that might pertain to the new Pulsar helm chart version.",source:"@site/versioned_docs/version-2.5.1/helm-upgrade.md",sourceDirName:".",slug:"/helm-upgrade",permalink:"/docs/2.5.1/helm-upgrade",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/helm-upgrade.md",tags:[],version:"2.5.1",frontMatter:{id:"helm-upgrade",title:"Upgrade Pulsar Helm release",sidebar_label:"Upgrade"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Deployment",permalink:"/docs/2.5.1/helm-deploy"},next:{title:"Required Tools",permalink:"/docs/2.5.1/helm-tools"}},p={},s=[{value:"Steps",id:"steps",level:2}],u={toc:s},c="wrapper";function m(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Before upgrading your Pulsar installation, you need to check the change log corresponding to the specific release you want to upgrade to and look for any release notes that might pertain to the new Pulsar helm chart version."),(0,n.yg)("p",null,"We also recommend that you need to provide all values using the ",(0,n.yg)("inlineCode",{parentName:"p"},"helm upgrade --set key=value")," syntax or the ",(0,n.yg)("inlineCode",{parentName:"p"},"-f values.yml")," instead of using ",(0,n.yg)("inlineCode",{parentName:"p"},"--reuse-values"),", because some of the current values might be deprecated."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"You can retrieve your previous ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments cleanly, with ",(0,n.yg)("inlineCode",{parentName:"p"},"helm get values <release-name>"),". If you direct this into a file (",(0,n.yg)("inlineCode",{parentName:"p"},"helm get values <release-name> > pulsar.yml"),"), you can safely pass this file through ",(0,n.yg)("inlineCode",{parentName:"p"},"-f"),", namely ",(0,n.yg)("inlineCode",{parentName:"p"},"helm upgrade <release-name> apache/pulsar -f pulsar.yaml"),". This safely replaces the behavior of ",(0,n.yg)("inlineCode",{parentName:"p"},"--reuse-values"),".")),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("p",null,"To upgrade Apache Pulsar to a newer version, follow these steps:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check the change log for the specific version you would like to upgrade to.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Go through ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.5.1/helm-deploy"},"deployment documentation")," step by step.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Extract your previous ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments with the following command."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm get values <release-name> > pulsar.yaml\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Decide all the values you need to set.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Perform the upgrade, with all ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments extracted in step 4."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm upgrade <release-name> apache/pulsar \\\n    --version <new version> \\\n    -f pulsar.yaml \\\n    --set ...\n\n")))))}m.isMDXComponent=!0}}]);