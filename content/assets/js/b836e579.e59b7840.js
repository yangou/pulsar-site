"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||k[f]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"functions-worker-corun",title:"Run function workers with brokers",sidebar_label:"Run function workers with brokers",description:"Run Pulsar function workers with brokers."},a=void 0,u={unversionedId:"functions-worker-corun",id:"version-3.2.x/functions-worker-corun",title:"Run function workers with brokers",description:"Run Pulsar function workers with brokers.",source:"@site/versioned_docs/version-3.2.x/functions-worker-corun.md",sourceDirName:".",slug:"/functions-worker-corun",permalink:"/docs/3.2.x/functions-worker-corun",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-worker-corun.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-worker-corun",title:"Run function workers with brokers",sidebar_label:"Run function workers with brokers",description:"Run Pulsar function workers with brokers."},sidebar:"docsSidebar",previous:{title:"Set up function workers",permalink:"/docs/3.2.x/functions-worker"},next:{title:"Run function workers separately",permalink:"/docs/3.2.x/functions-worker-run-separately"}},s={},l=[{value:"Step 1: Enable function workers to run with brokers",id:"step-1-enable-function-workers-to-run-with-brokers",level:3},{value:"Step 2: Configure function workers to run with brokers",id:"step-2-configure-function-workers-to-run-with-brokers",level:3},{value:"Step 3: Start function workers to run with brokers",id:"step-3-start-function-workers-to-run-with-brokers",level:3}],c={toc:l},p="wrapper";function k(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following diagram illustrates the deployment of function workers running along with brokers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deployment of function workers in Pulsar",src:n(53157).Z,width:"1040",height:"515"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Service URLs")," in the illustration represent Pulsar service URLs that Pulsar client and Pulsar admin use to connect to a Pulsar cluster.")),(0,o.kt)("p",null,"To set up function workers to run with brokers, complete the following steps:"),(0,o.kt)("h3",{id:"step-1-enable-function-workers-to-run-with-brokers"},"Step 1: Enable function workers to run with brokers"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file (",(0,o.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," for Pulsar standalone), set ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"functionsWorkerEnabled=true\n")),(0,o.kt)("h3",{id:"step-2-configure-function-workers-to-run-with-brokers"},"Step 2: Configure function workers to run with brokers"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"run-with-brokers")," mode, most settings of function workers are inherited from your broker configuration (for example, configuration store settings, authentication settings, and so on). You can customize other worker settings by configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file based on your needs."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To ensure high availability in a production deployment (a cluster with multiple brokers), set ",(0,o.kt)("inlineCode",{parentName:"li"},"numFunctionPackageReplicas")," to equal the number of bookies. The default value ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," is only for one-node cluster deployment."),(0,o.kt)("li",{parentName:"ul"},"To initialize distributed log metadata in runtime (",(0,o.kt)("inlineCode",{parentName:"li"},"initializedDlogMetadata = true"),"), ensure that it has been initialized by the ",(0,o.kt)("inlineCode",{parentName:"li"},"bin/pulsar initialize-cluster-metadata")," command."))),(0,o.kt)("p",null,"When authentication is enabled on the BookKeeper cluster, you need to configure the following authentication settings for your function workers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationPlugin"),": the authentication plugin name of BookKeeper client."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParametersName"),": the authentication plugin parameters of BookKeeper client, including names and values."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParameters"),": the authentication plugin parameters of BookKeeper client.")),(0,o.kt)("h3",{id:"step-3-start-function-workers-to-run-with-brokers"},"Step 3: Start function workers to run with brokers"),(0,o.kt)("p",null,"Once function workers are configured properly, you can start the brokers (function workers are running with the brokers)."),(0,o.kt)("p",null,"To verify whether each worker is running or not, you can use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl <broker-ip>:8080/admin/v2/worker/cluster\n")),(0,o.kt)("p",null,"If a list of active function workers is returned, it means they have been started successfully. The output is similar to the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[{"workerId":"<worker-id>","workerHostname":"<worker-hostname>","port":8080}]\n')))}k.isMDXComponent=!0},53157:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/function-workers-corun-3490654906f448b8c60ed5c52e01c0da.svg"}}]);