"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69031],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>g});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function u(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),o=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=o(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(r),d=n,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return r?t.createElement(g,s(s({ref:a},p),{},{components:r})):t.createElement(g,s({ref:a},p))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u[c]="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=r[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,a,r)=>{r.d(a,{A:()=>s});var t=r(96540),n=r(20053);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:r,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r},a)}},89089:(e,a,r)=>{r.d(a,{A:()=>T});var t=r(58168),n=r(96540),l=r(20053),s=r(23104),u=r(56347),i=r(57485),o=r(31682),p=r(89466);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}function m(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??c(r);return function(e){const a=(0,o.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function d(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:r}=e;const t=(0,u.W6)(),l=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function y(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,l=m(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[i,o]=g({queryString:r,groupId:t}),[c,y]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,p.Dv)(r);return[t,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),f=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),y(e)}),[o,y,l]),tabValues:l}}var f=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:r,selectedValue:u,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),m=e=>{const a=e.currentTarget,r=p.indexOf(a),t=o[r].value;t!==u&&(c(a),i(t))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;a=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;a=p[r]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},a)},o.map((e=>{let{value:a,label:r,attributes:s}=e;return n.createElement("li",(0,t.A)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":u===a})}),r??a)})))}function b(e){let{lazy:a,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function N(e){const a=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},n.createElement(h,(0,t.A)({},e,a)),n.createElement(b,(0,t.A)({},e,a)))}function T(e){const a=(0,f.A)();return n.createElement(N,(0,t.A)({key:String(a)},e))}},69537:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var t=r(58168),n=(r(96540),r(15680)),l=r(89089),s=r(19365);const u={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",original_id:"admin-api-clusters"},i=void 0,o={unversionedId:"admin-api-clusters",id:"version-2.9.x/admin-api-clusters",title:"Managing Clusters",description:"Important",source:"@site/versioned_docs/version-2.9.x/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/2.9.x/admin-api-clusters",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/admin-api-clusters.md",tags:[],version:"2.9.x",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",original_id:"admin-api-clusters"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.9.x/admin-api-overview"},next:{title:"Tenants",permalink:"/docs/2.9.x/admin-api-tenants"}},p={},c=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"List",id:"list",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3}],m={toc:c},d="wrapper";function g(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Important")),(0,n.yg)("p",{parentName:"blockquote"},"This page only shows ",(0,n.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,n.yg)("ul",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.9.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.9.x/"},"Java admin API doc"),".")))),(0,n.yg)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#broker"},"brokers"),", one or more ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#bookie"},"bookies"),"), and a ",(0,n.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,n.yg)("p",null,"Clusters can be managed via:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"clusters")," command of the ",(0,n.yg)("a",{parentName:"li",href:"pathname:///reference/#/2.9.x/pulsar-admin/"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,n.yg)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.9.x/client-libraries-java"},"Java API"))),(0,n.yg)("h2",{id:"clusters-resources"},"Clusters resources"),(0,n.yg)("h3",{id:"provision"},"Provision"),(0,n.yg)("p",null,"New clusters can be provisioned using the admin interface."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Please note that this operation requires superuser privileges.")),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"You can provision a new cluster using the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-create"},(0,n.yg)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/createCluster"},"PUT /admin/v2/clusters/:cluster/createCluster"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n")))),(0,n.yg)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,n.yg)("p",null,"When provisioning a new cluster, you need to initialize that cluster's ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The name of the cluster"),(0,n.yg)("li",{parentName:"ul"},"The local ZooKeeper connection string for the cluster"),(0,n.yg)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,n.yg)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,n.yg)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,n.yg)("a",{parentName:"li",href:"/docs/2.9.x/reference-terminology#broker"},"brokers")," in the cluster")),(0,n.yg)("p",null,"You must initialize cluster metadata ",(0,n.yg)("em",{parentName:"p"},"before")," starting up any ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"No cluster metadata initialization through the REST API or the Java admin API")),(0,n.yg)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools#pulsar"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,n.yg)("p",null,"Here's an example cluster metadata initialization command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --zookeeper zk1.us-west.example.com:2181 \\\n  --configuration-store zk1.us-west.example.com:2184 \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,n.yg)("p",null,"You'll need to use ",(0,n.yg)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/security-tls-authentication"},"TLS authentication")," in your instance."),(0,n.yg)("h3",{id:"get-configuration"},"Get configuration"),(0,n.yg)("p",null,"You can fetch the ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-configuration"},"configuration")," for an existing cluster at any time."),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-get"},(0,n.yg)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n'))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/getCluster"},"GET /admin/v2/clusters/:cluster/getCluster"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getCluster(clusterName);\n\n")))),(0,n.yg)("h3",{id:"update"},"Update"),(0,n.yg)("p",null,"You can update the configuration for an existing cluster at any time."),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update"},(0,n.yg)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/updateCluster"},"POST /admin/v2/clusters/:cluster/updateCluster"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n")))),(0,n.yg)("h3",{id:"delete"},"Delete"),(0,n.yg)("p",null,"Clusters can be deleted from a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-delete"},(0,n.yg)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n$ pulsar-admin clusters delete cluster-1\n\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/deleteCluster"},"DELETE /admin/v2/clusters/:cluster/deleteCluster"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().deleteCluster(clusterName);\n\n")))),(0,n.yg)("h3",{id:"list"},"List"),(0,n.yg)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-list"},(0,n.yg)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/getClusters"},"GET /admin/v2/clusters/getClusters"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getClusters();\n\n")))),(0,n.yg)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,n.yg)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#instance"},"instance"),"."),(0,n.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.yg)(s.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.yg)("p",null,"Use the ",(0,n.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update-peer-clusters"},(0,n.yg)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n"))),(0,n.yg)(s.A,{value:"REST API",mdxType:"TabItem"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.5&apiversion=v2#operation/setPeerClusterNames"},"POST /admin/v2/clusters/:cluster/peers/setPeerClusterNames"))),(0,n.yg)(s.A,{value:"JAVA",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n")))))}g.isMDXComponent=!0}}]);