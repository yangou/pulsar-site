"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49244],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>g});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=t.createContext({}),o=function(e){var a=t.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=o(e.components);return t.createElement(u.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(r),m=n,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?t.createElement(g,s(s({ref:a},p),{},{components:r})):t.createElement(g,s({ref:a},p))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63422:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=r(58168),n=(r(96540),r(15680));const l={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",original_id:"admin-api-clusters"},s=void 0,i={unversionedId:"admin-api-clusters",id:"version-2.6.0/admin-api-clusters",title:"Managing Clusters",description:"Pulsar clusters consist of one or more Pulsar brokers, one or more BookKeeper",source:"@site/versioned_docs/version-2.6.0/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/2.6.0/admin-api-clusters",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/admin-api-clusters.md",tags:[],version:"2.6.0",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",original_id:"admin-api-clusters"},sidebar:"version-2.6.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.6.0/admin-api-overview"},next:{title:"Tenants",permalink:"/docs/2.6.0/admin-api-tenants"}},u={},o=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Update",id:"update",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST",id:"rest",level:4},{value:"Java",id:"java-2",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-3",level:4},{value:"List",id:"list",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-4",level:6},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3},{value:"pulsar-admin",id:"pulsar-admin-5",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-5",level:4}],p={toc:o},c="wrapper";function d(e){let{components:a,...r}=e;return(0,n.yg)(c,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#broker"},"brokers"),", one or more ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#bookie"},"bookies"),"), and a ",(0,n.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,n.yg)("p",null,"Clusters can be managed via:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin#clusters"},(0,n.yg)("inlineCode",{parentName:"a"},"clusters"))," command of the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.6.0/reference-pulsar-admin"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object in the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.6.0/client-libraries-java"},"Java API"))),(0,n.yg)("h2",{id:"clusters-resources"},"Clusters resources"),(0,n.yg)("h3",{id:"provision"},"Provision"),(0,n.yg)("p",null,"New clusters can be provisioned using the admin interface."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Please note that this operation requires superuser privileges.")),(0,n.yg)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,n.yg)("p",null,"You can provision a new cluster using the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-create"},(0,n.yg)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n")),(0,n.yg)("h4",{id:"rest-api"},"REST API"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/createCluster"},"PUT /admin/v2/clusters/:cluster/createCluster")),(0,n.yg)("h4",{id:"java"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n")),(0,n.yg)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,n.yg)("p",null,"When provision a new cluster, you need to initialize that cluster's ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The name of the cluster"),(0,n.yg)("li",{parentName:"ul"},"The local ZooKeeper connection string for the cluster"),(0,n.yg)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,n.yg)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,n.yg)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.6.0/reference-terminology#broker"},"brokers")," in the cluster")),(0,n.yg)("p",null,"You must initialize cluster metadata ",(0,n.yg)("em",{parentName:"p"},"before")," starting up any ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,n.yg)("blockquote",null,(0,n.yg)("h4",{parentName:"blockquote",id:"no-cluster-metadata-initialization-through-the-rest-api-or-the-java-admin-api"},"No cluster metadata initialization through the REST API or the Java admin API"),(0,n.yg)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-cli-tools#pulsar"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,n.yg)("p",null,"Here's an example cluster metadata initialization command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --zookeeper zk1.us-west.example.com:2181 \\\n  --configuration-store zk1.us-west.example.com:2184 \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,n.yg)("p",null,"You'll need to use ",(0,n.yg)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/security-tls-authentication"},"TLS authentication")," in your instance."),(0,n.yg)("h3",{id:"get-configuration"},"Get configuration"),(0,n.yg)("p",null,"You can fetch the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-configuration"},"configuration")," for an existing cluster at any time."),(0,n.yg)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-get"},(0,n.yg)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n')),(0,n.yg)("h4",{id:"rest-api-1"},"REST API"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getCluster"},"GET /admin/v2/clusters/:cluster/getCluster")),(0,n.yg)("h4",{id:"java-1"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getCluster(clusterName);\n\n")),(0,n.yg)("h3",{id:"update"},"Update"),(0,n.yg)("p",null,"You can update the configuration for an existing cluster at any time."),(0,n.yg)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-update"},(0,n.yg)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n")),(0,n.yg)("h4",{id:"rest"},"REST"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/updateCluster"},"POST /admin/v2/clusters/:cluster/updateCluster")),(0,n.yg)("h4",{id:"java-2"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n")),(0,n.yg)("h3",{id:"delete"},"Delete"),(0,n.yg)("p",null,"Clusters can be deleted from a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#instance"},"instance"),"."),(0,n.yg)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-delete"},(0,n.yg)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n$ pulsar-admin clusters delete cluster-1\n\n")),(0,n.yg)("h4",{id:"rest-api-2"},"REST API"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/deleteCluster"},"DELETE /admin/v2/clusters/:cluster/deleteCluster")),(0,n.yg)("h4",{id:"java-3"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().deleteCluster(clusterName);\n\n")),(0,n.yg)("h3",{id:"list"},"List"),(0,n.yg)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#instance"},"instance"),"."),(0,n.yg)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-list"},(0,n.yg)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n")),(0,n.yg)("h4",{id:"rest-api-3"},"REST API"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getClusters"},"GET /admin/v2/clusters/getClusters")),(0,n.yg)("h6",{id:"java-4"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getClusters();\n\n")),(0,n.yg)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,n.yg)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-terminology#instance"},"instance"),"."),(0,n.yg)("h4",{id:"pulsar-admin-5"},"pulsar-admin"),(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.6.0/reference-pulsar-admin#clusters-update-peer-clusters"},(0,n.yg)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n")),(0,n.yg)("h4",{id:"rest-api-4"},"REST API"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setPeerClusterNames"},"POST /admin/v2/clusters/:cluster/peers/setPeerClusterNames")),(0,n.yg)("h4",{id:"java-5"},"Java"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n")))}d.isMDXComponent=!0}}]);