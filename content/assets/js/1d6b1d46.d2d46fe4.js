"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4229],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return a?r.createElement(y,o(o({ref:t},u),{},{components:a})):r.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},61765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"},o=void 0,i={unversionedId:"helm-overview",id:"version-2.5.2/helm-overview",title:"Apache Pulsar Helm Chart",description:"Helm chart supports you to install Apache Pulsar in a cloud-native environment.",source:"@site/versioned_docs/version-2.5.2/helm-overview.md",sourceDirName:".",slug:"/helm-overview",permalink:"/docs/2.5.2/helm-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/helm-overview.md",tags:[],version:"2.5.2",frontMatter:{id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"REST APIs",permalink:"/docs/2.5.2/sql-rest-api"},next:{title:"Prepare",permalink:"/docs/2.5.2/helm-prepare"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstallation",id:"uninstallation",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart"},"Helm chart")," supports you to install Apache Pulsar in a cloud-native environment."),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"The Apache Pulsar Helm chart provides one of the most convenient ways to operate Pulsar on Kubernetes. With all the required components, Helm chart is scalable and thus being suitable for large-scale deployments."),(0,n.yg)("p",null,"The Apache Pulsar Helm chart contains all components to support the features and functions that Pulsar delivers. You can install and configure these components separately."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pulsar core components:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"ZooKeeper"),(0,n.yg)("li",{parentName:"ul"},"Bookies"),(0,n.yg)("li",{parentName:"ul"},"Brokers"),(0,n.yg)("li",{parentName:"ul"},"Function workers"),(0,n.yg)("li",{parentName:"ul"},"Proxies"))),(0,n.yg)("li",{parentName:"ul"},"Control center:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Pulsar Manager"),(0,n.yg)("li",{parentName:"ul"},"Prometheus"),(0,n.yg)("li",{parentName:"ul"},"Grafana")))),(0,n.yg)("p",null,"Moreover, Helm chart supports:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Security",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Automatically provisioned TLS certificates, using ",(0,n.yg)("a",{parentName:"li",href:"https://www.jetstack.io/"},"Jetstack"),"'s ",(0,n.yg)("a",{parentName:"li",href:"https://cert-manager.io/docs/"},"cert-manager"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"self-signed"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt")))),(0,n.yg)("li",{parentName:"ul"},"TLS Encryption",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Proxy"),(0,n.yg)("li",{parentName:"ul"},"Broker"),(0,n.yg)("li",{parentName:"ul"},"Toolset"),(0,n.yg)("li",{parentName:"ul"},"Bookie"),(0,n.yg)("li",{parentName:"ul"},"ZooKeeper"))),(0,n.yg)("li",{parentName:"ul"},"Authentication",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"JWT"))),(0,n.yg)("li",{parentName:"ul"},"Authorization"))),(0,n.yg)("li",{parentName:"ul"},"Storage",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Non-persistence storage"),(0,n.yg)("li",{parentName:"ul"},"Persistent volume"),(0,n.yg)("li",{parentName:"ul"},"Local persistent volumes"))),(0,n.yg)("li",{parentName:"ul"},"Functions",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Kubernetes Runtime"),(0,n.yg)("li",{parentName:"ul"},"Process Runtime"),(0,n.yg)("li",{parentName:"ul"},"Thread Runtime"))),(0,n.yg)("li",{parentName:"ul"},"Operations",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Independent image versions for all components, enabling controlled upgrades")))),(0,n.yg)("h2",{id:"quick-start"},"Quick start"),(0,n.yg)("p",null,"To run with Apache Pulsar Helm chart as fast as possible in a ",(0,n.yg)("strong",{parentName:"p"},"non-production")," use case, we provide a ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.5.2/getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,n.yg)("p",null,"This guide walks you through deploying Apache Pulsar Helm chart with default values and features, but it is ",(0,n.yg)("em",{parentName:"p"},"not")," suitable for deployments in production-ready environments. To deploy the charts in production under sustained load, you can follow the complete ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.5.2/helm-install"},"Installation Guide"),"."),(0,n.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("p",null,"Although we have done our best to make these charts as seamless as possible, troubles do go out of our control occasionally. We have been collecting tips and tricks for troubleshooting common issues. Please check it first before raising an ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/new/choose"},"issue"),", and feel free to add your solutions by creating a ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare"},"Pull Request"),"."),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"The Apache Pulsar Helm chart contains all required dependencies."),(0,n.yg)("p",null,"If you deploy a PoC for testing, we strongly suggest you follow this ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.5.2/getting-started-helm"},"Quick Start Guide")," for your first iteration."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.5.2/helm-prepare"},"Preparation")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.5.2/helm-deploy"},"Deployment"))),(0,n.yg)("h2",{id:"upgrading"},"Upgrading"),(0,n.yg)("p",null,"Once the Apache Pulsar Helm chart is installed, you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"helm upgrade")," command to configure and update it."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> apache/pulsar -f pulsar.yaml\n\n")),(0,n.yg)("p",null,"For more detailed information, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.5.2/helm-upgrade"},"Upgrading"),"."),(0,n.yg)("h2",{id:"uninstallation"},"Uninstallation"),(0,n.yg)("p",null,"To uninstall the Apache Pulsar Helm chart, run the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm delete <pulsar-release-name>\n\n")),(0,n.yg)("p",null,"For the purposes of continuity, some Kubernetes objects in these charts cannot be removed by ",(0,n.yg)("inlineCode",{parentName:"p"},"helm delete")," command. It is recommended to ",(0,n.yg)("em",{parentName:"p"},"consciously")," remove these items, as they affect re-deployment."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"PVCs for stateful data: remove these items.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"ZooKeeper: This is your metadata."),(0,n.yg)("li",{parentName:"ul"},"BookKeeper: This is your data."),(0,n.yg)("li",{parentName:"ul"},"Prometheus: This is your metrics data, which can be safely removed."))),(0,n.yg)("li",{parentName:"ul"},"Secrets: if the secrets are generated by the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare release script"),", they contain secret keys and tokens. You can use the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh"},"cleanup release script")," to remove these secrets and tokens as needed.")))}m.isMDXComponent=!0}}]);