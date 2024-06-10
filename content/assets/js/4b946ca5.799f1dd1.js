"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38253],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,y=c["".concat(i,".").concat(g)]||c[g]||d[g]||a;return n?t.createElement(y,l(l({ref:r},u),{},{components:n})):t.createElement(y,l({ref:r},u))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47429:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(58168),o=(n(96540),n(15680));const a={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},l=void 0,s={unversionedId:"sql-deployment-configurations",id:"version-2.6.1/sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",description:"You can configure Presto Pulsar connector and deploy a cluster with the following instruction.",source:"@site/versioned_docs/version-2.6.1/sql-deployment-configurations.md",sourceDirName:".",slug:"/sql-deployment-configurations",permalink:"/docs/2.6.1/sql-deployment-configurations",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/sql-deployment-configurations.md",tags:[],version:"2.6.1",frontMatter:{id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Query data",permalink:"/docs/2.6.1/sql-getting-started"},next:{title:"REST APIs",permalink:"/docs/2.6.1/sql-rest-api"}},i={},p=[{value:"Configure Presto Pulsar Connector",id:"configure-presto-pulsar-connector",level:2},{value:"Query data from existing Presto clusters",id:"query-data-from-existing-presto-clusters",level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",level:2},{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",level:3}],u={toc:p},c="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(c,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can configure Presto Pulsar connector and deploy a cluster with the following instruction."),(0,o.yg)("h2",{id:"configure-presto-pulsar-connector"},"Configure Presto Pulsar Connector"),(0,o.yg)("p",null,"You can configure Presto Pulsar Connector in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," properties file. The configuration for the connector and the default values are as follows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"\n# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the url of Pulsar broker service\npulsar.broker-service-url=http://localhost:8080\n\n# URI of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n")),(0,o.yg)("p",null,"You can connect Presto to a Pulsar cluster with multiple hosts. To configure multiple hosts for brokers, add multiple URLs to ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.broker-service-url"),". To configure multiple hosts for ZooKeeper, add multiple URIs to ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri"),". The following is an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\npulsar.broker-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n\n")),(0,o.yg)("h2",{id:"query-data-from-existing-presto-clusters"},"Query data from existing Presto clusters"),(0,o.yg)("p",null,"If you already have a Presto cluster, you can copy the Presto Pulsar connector plugin to your existing cluster. Download the archived plugin package with the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.6.1/apache-pulsar-2.6.1-bin.tar.gz\n\n")),(0,o.yg)("h2",{id:"deploy-a-new-cluster"},"Deploy a new cluster"),(0,o.yg)("p",null,"Since Pulsar SQL is powered by ",(0,o.yg)("a",{parentName:"p",href:"https://prestodb.io"},"Presto"),", the configuration for deployment is the same for the Pulsar SQL worker."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"For how to set up a standalone single node environment, refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.6.1/sql-getting-started"},"Query data"),".")),(0,o.yg)("p",null,"You can use the same CLI args as the Presto launcher."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker --help\nUsage: launcher [options] command\n\nCommands: run, start, stop, restart, kill, status\n\nOptions:\n  -h, --help            show this help message and exit\n  -v, --verbose         Run verbosely\n  --etc-dir=DIR         Defaults to INSTALL_PATH/etc\n  --launcher-config=FILE\n                        Defaults to INSTALL_PATH/bin/launcher.properties\n  --node-config=FILE    Defaults to ETC_DIR/node.properties\n  --jvm-config=FILE     Defaults to ETC_DIR/jvm.config\n  --config=FILE         Defaults to ETC_DIR/config.properties\n  --log-levels-file=FILE\n                        Defaults to ETC_DIR/log.properties\n  --data-dir=DIR        Defaults to INSTALL_PATH\n  --pid-file=FILE       Defaults to DATA_DIR/var/run/launcher.pid\n  --launcher-log-file=FILE\n                        Defaults to DATA_DIR/var/log/launcher.log (only in\n                        daemon mode)\n  --server-log-file=FILE\n                        Defaults to DATA_DIR/var/log/server.log (only in\n                        daemon mode)\n  -D NAME=VALUE         Set a Java system property\n\n")),(0,o.yg)("p",null,"The default configuration for the cluster is located in ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/conf/presto"),". You can customize your deployment by modifying the default configuration."),(0,o.yg)("p",null,"You can set the worker to read from a different configuration directory, or set a different directory to write data."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker run --etc-dir /tmp/incubator-pulsar/conf/presto --data-dir /tmp/presto-1\n\n")),(0,o.yg)("p",null,"You can start the worker as daemon process."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker start\n\n")),(0,o.yg)("h3",{id:"deploy-a-cluster-on-multiple-nodes"},"Deploy a cluster on multiple nodes"),(0,o.yg)("p",null,"You can deploy a Pulsar SQL cluster or Presto cluster on multiple nodes. The following example shows how to deploy a cluster on three-node cluster."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Copy the Pulsar binary distribution to three nodes.")),(0,o.yg)("p",null,"The first node runs as Presto coordinator. The minimal configuration requirement in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/config.properties")," file is as follows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.yg)("p",null,"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Modify ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.broker-service-url")," and  ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri")," configuration in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," file accordingly for the three nodes.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Start the coordinator node."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Start worker nodes.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.yg)("ol",{start:5},(0,o.yg)("li",{parentName:"ol"},"Start the SQL CLI and check the status of your cluster.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql --server <coordinate_url>\n\n")),(0,o.yg)("ol",{start:6},(0,o.yg)("li",{parentName:"ol"},"Check the status of your nodes.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\npresto> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state\n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active\n 3       | http://192.168.2.2:8081 | testversion  | false       | active\n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n\n")),(0,o.yg)("p",null,"For more information about deployment in Presto, refer to ",(0,o.yg)("a",{parentName:"p",href:"https://prestodb.io/docs/current/installation/deployment.html"},"Presto deployment"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'Note\nThe broker does not advance LAC, so when Pulsar SQL bypass broker to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the broker.conf.')))}d.isMDXComponent=!0}}]);