"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20720],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const i={id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},a=void 0,s={unversionedId:"functions-runtime",id:"version-2.5.1/functions-runtime",title:"Configure Functions runtime",description:"Pulsar Functions support the following methods to run functions.",source:"@site/versioned_docs/version-2.5.1/functions-runtime.md",sourceDirName:".",slug:"/functions-runtime",permalink:"/docs/2.5.1/functions-runtime",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/functions-runtime.md",tags:[],version:"2.5.1",frontMatter:{id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Setup: Pulsar Functions Worker",permalink:"/docs/2.5.1/functions-worker"},next:{title:"How-to: Develop",permalink:"/docs/2.5.1/functions-develop"}},u={},c=[{value:"Note",id:"note",level:4},{value:"Configure thread runtime",id:"configure-thread-runtime",level:2},{value:"Configure process runtime",id:"configure-process-runtime",level:2},{value:"Configure Kubernetes runtime",id:"configure-kubernetes-runtime",level:2},{value:"Kubernetes CustomRuntimeOptions",id:"kubernetes-customruntimeoptions",level:3}],l={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Pulsar Functions support the following methods to run functions."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Thread"),": Invoke functions in threads in Functions Worker."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Process"),": Invoke functions in processes forked by Functions Worker."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Kubernetes"),": Submit functions as Kubernetes StatefulSets by Functions Worker.")),(0,o.yg)("h4",{id:"note"},"Note"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Pulsar supports adding labels to the Kubernetes StatefulSets and services while launching functions, which facilitates selecting the target Kubernetes objects.")),(0,o.yg)("p",null,"The differences of the thread and process modes are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Thread mode: when a function runs in thread mode, it runs on the same Java virtual machine (JVM) with Functions worker."),(0,o.yg)("li",{parentName:"ul"},"Process mode: when a function runs in process mode, it runs on the same machine that Functions worker runs.")),(0,o.yg)("h2",{id:"configure-thread-runtime"},"Configure thread runtime"),(0,o.yg)("p",null,"It is easy to configure ",(0,o.yg)("em",{parentName:"p"},"Thread")," runtime. In most cases, you do not need to configure anything. You can customize the thread group name with the following settings:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.thread.ThreadRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  threadGroupName: "Your Function Container Group"\n\n')),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Thread")," runtime is only supported in Java function."),(0,o.yg)("h2",{id:"configure-process-runtime"},"Configure process runtime"),(0,o.yg)("p",null,"When you enable ",(0,o.yg)("em",{parentName:"p"},"Process")," runtime, you do not need to configure anything."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n\n")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Process")," runtime is supported in Java, Python, and Go functions."),(0,o.yg)("h2",{id:"configure-kubernetes-runtime"},"Configure Kubernetes runtime"),(0,o.yg)("p",null,"It is easy to configure Kubernetes runtime. You can just uncomment the settings of ",(0,o.yg)("inlineCode",{parentName:"p"},"kubernetesContainerFactory")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"functions_worker.yaml")," file. The following is an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.kubernetes.KubernetesRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # uri to kubernetes cluster, leave it to empty and it will use the kubernetes settings in function worker\n  k8Uri:\n  # the kubernetes namespace to run the function instances. it is `default`, if this setting is left to be empty\n  jobNamespace:\n  # the docker image to run function instance. by default it is `apachepulsar/pulsar`\n  pulsarDockerImageName:\n  # the root directory of pulsar home directory in `pulsarDockerImageName`. by default it is `/pulsar`.\n  # if you are using your own built image in `pulsarDockerImageName`, you need to set this setting accordingly\n  pulsarRootDir:\n  # this setting only takes effects if `k8Uri` is set to null. if your function worker is running as a k8 pod,\n  # setting this to true is let function worker to submit functions to the same k8s cluster as function worker\n  # is running. setting this to false if your function worker is not running as a k8 pod.\n  submittingInsidePod: false\n  # setting the pulsar service url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar service url configured in worker service\n  pulsarServiceUrl:\n  # setting the pulsar admin url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar admin url configured in worker service\n  pulsarAdminUrl:\n  # the custom labels that function worker uses to select the nodes for pods\n  customLabels:\n  # the directory for dropping extra function dependencies\n  # if it is not an absolute path, it is relative to `pulsarRootDir`\n  extraFunctionDependenciesDir:\n  # Additional memory padding added on top of the memory requested by the function per on a per instance basis\n  percentMemoryPadding: 10\n\n")),(0,o.yg)("p",null,"If you have already run a Pulsar cluster on Kubernetes, you can keep the settings unchanged at most of time."),(0,o.yg)("p",null,"However, if you enable RBAC on deploying your Pulsar cluster, make sure the service account you use for\nrunning Functions Workers (or brokers, if Functions Workers run along with brokers) have permissions on the following\nkubernetes APIs."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"services"),(0,o.yg)("li",{parentName:"ul"},"configmaps"),(0,o.yg)("li",{parentName:"ul"},"pods"),(0,o.yg)("li",{parentName:"ul"},"apps.statefulsets")),(0,o.yg)("p",null,"Otherwise, you will not be able to create any functions. The following is an example of error message."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n22:04:27.696 [Timer-0] ERROR org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory - Error while trying to fetch configmap example-pulsar-4qvmb5gur3c6fc9dih0x1xn8b-function-worker-config at namespace pulsar\nio.kubernetes.client.ApiException: Forbidden\n    at io.kubernetes.client.ApiClient.handleResponse(ApiClient.java:882) ~[io.kubernetes-client-java-2.0.0.jar:?]\n    at io.kubernetes.client.ApiClient.execute(ApiClient.java:798) ~[io.kubernetes-client-java-2.0.0.jar:?]\n    at io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMapWithHttpInfo(CoreV1Api.java:23673) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n    at io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMap(CoreV1Api.java:23655) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n    at org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory.fetchConfigMap(KubernetesRuntimeFactory.java:284) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n    at org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory$1.run(KubernetesRuntimeFactory.java:275) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n    at java.util.TimerThread.mainLoop(Timer.java:555) [?:1.8.0_212]\n    at java.util.TimerThread.run(Timer.java:505) [?:1.8.0_212]\n\n")),(0,o.yg)("p",null,"If this happens, you need to grant the required permissions to the service account used for running Functions Workers. An example to grant permissions is shown below: a service account ",(0,o.yg)("inlineCode",{parentName:"p"},"functions-worker")," is granted with permissions to access Kubernetes resources ",(0,o.yg)("inlineCode",{parentName:"p"},"services"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"configmaps"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"pods")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"apps.statefulsets"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRole\nmetadata:\n  name: functions-worker\nrules:\n- apiGroups: [\"\"]\n  resources:\n  - services\n  - configmaps\n  - pods\n  verbs:\n  - '*'\n- apiGroups:\n  - apps\n  resources:\n  - statefulsets\n  verbs:\n  - '*'\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: functions-worker\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: functions-worker\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: functions-worker\nsubjects:\n- kind: ServiceAccount\n  name: functions-worker\n\n")),(0,o.yg)("h3",{id:"kubernetes-customruntimeoptions"},"Kubernetes CustomRuntimeOptions"),(0,o.yg)("p",null,"The functions (and sinks/sources) API provides a flag, ",(0,o.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions")," which can be used to pass options to the runtime to customize how the runtime operates."),(0,o.yg)("p",null,"In the case of case of kubernetes, this is passed to an instance of the ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer"),". This interface can be overridden\nand allows for a high degree of customization over how the K8S manifests are generated. The interface is injected by passing the class name to the ",(0,o.yg)("inlineCode",{parentName:"p"},"runtimeCustomizerClassName")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"functions-worker.yaml")),(0,o.yg)("p",null,"To use the basic implementation, set ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"),"\nfor the ",(0,o.yg)("inlineCode",{parentName:"p"},"runtimeCustomerClassName")," property. This implementation takes the following ",(0,o.yg)("inlineCode",{parentName:"p"},"customRuntimeOptions")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Json"},'\n{\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n\n')))}m.isMDXComponent=!0}}]);