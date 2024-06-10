"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36105],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=n,d=c["".concat(i,".").concat(m)]||c[m]||g[m]||l;return t?a.createElement(d,o(o({ref:r},u),{},{components:t})):a.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11449:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(58168),n=(t(96540),t(15680));const l={id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"},o=void 0,p={unversionedId:"helm-upgrade",id:"version-2.4.2/helm-upgrade",title:"Upgrade a Pulsar Helm release",description:"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade",source:"@site/versioned_docs/version-2.4.2/helm-upgrade.md",sourceDirName:".",slug:"/helm-upgrade",permalink:"/docs/2.4.2/helm-upgrade",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/helm-upgrade.md",tags:[],version:"2.4.2",frontMatter:{id:"helm-upgrade",title:"Upgrade a Pulsar Helm release",sidebar_label:"Upgrade",original_id:"helm-upgrade"}},i={},s=[{value:"Steps",id:"steps",level:2}],u={toc:s},c="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Before upgrading your Pulsar installation, you need to check the changelog corresponding to the specific release you want to upgrade\nto and look for any release notes that might pertain to the new Pulsar chart version."),(0,n.yg)("p",null,"We also recommend that you need to provide all values using ",(0,n.yg)("inlineCode",{parentName:"p"},"helm upgrade --set key=value")," syntax or ",(0,n.yg)("inlineCode",{parentName:"p"},"-f values.yml")," instead of using ",(0,n.yg)("inlineCode",{parentName:"p"},"--reuse-values")," because some of the current values might be deprecated."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),":"),(0,n.yg)("p",{parentName:"blockquote"},"You can retrieve your previous ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments cleanly, with ",(0,n.yg)("inlineCode",{parentName:"p"},"helm get values <release-name>"),". If you direct this into a file (",(0,n.yg)("inlineCode",{parentName:"p"},"helm get values <release-name> > pulsar.yml"),"), you can safely\npass this file via ",(0,n.yg)("inlineCode",{parentName:"p"},"-f"),". Thus ",(0,n.yg)("inlineCode",{parentName:"p"},"helm upgrade <release-name> charts/pulsar -f pulsar.yaml"),". This safely replaces the behavior of ",(0,n.yg)("inlineCode",{parentName:"p"},"--reuse-values"),".")),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("p",null,"The following are the steps to upgrade Apache Pulsar to a newer version:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check the change log for the specific version you would like to upgrade to")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Go through ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.4.2/helm-deploy"},"deployment documentation")," step by step")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Extract your previous ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments with"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm get values <release-name> > pulsar.yaml\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Decide on all the values you need to set")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Perform the upgrade, with all ",(0,n.yg)("inlineCode",{parentName:"p"},"--set")," arguments extracted in step 4"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm upgrade <release-name> charts/pulsar \\\n    --version <new version> \\\n    -f pulsar.yaml \\\n    --set ...\n\n")))))}g.isMDXComponent=!0}}]);