"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4331],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33786:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const a={id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose."},s=void 0,i={unversionedId:"getting-started-docker-compose",id:"version-3.3.x/getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose.",source:"@site/versioned_docs/version-3.3.x/getting-started-docker-compose.md",sourceDirName:".",slug:"/getting-started-docker-compose",permalink:"/docs/3.3.x/getting-started-docker-compose",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/getting-started-docker-compose.md",tags:[],version:"3.3.x",frontMatter:{id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose."},sidebar:"docsSidebar",previous:{title:"Run Pulsar in Kubernetes",permalink:"/docs/3.3.x/getting-started-helm"},next:{title:"Overview",permalink:"/docs/3.3.x/concepts-overview"}},l={},c=[{value:"Step 1: Configure the <code>compose.yml</code> template",id:"step-1-configure-the-composeyml-template",level:2},{value:"Step 2: Create a Pulsar cluster",id:"step-2-create-a-pulsar-cluster",level:2},{value:"Step 3: Destroy the Pulsar cluster",id:"step-3-destroy-the-pulsar-cluster",level:2}],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To run Pulsar loccally with Docker Compose, follow the steps below."),(0,o.yg)("h2",{id:"step-1-configure-the-composeyml-template"},"Step 1: Configure the ",(0,o.yg)("inlineCode",{parentName:"h2"},"compose.yml")," template"),(0,o.yg)("p",null,"To get up and run a Pulsar cluster quickly, you can use the following template to create a ",(0,o.yg)("inlineCode",{parentName:"p"},"compose.yml")," file by modifying or adding the configurations in the ",(0,o.yg)("strong",{parentName:"p"},"environment")," section."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nnetworks:\n  pulsar:\n    driver: bridge\nservices:\n  # Start zookeeper\n  zookeeper:\n    image: apachepulsar/pulsar:latest\n    container_name: zookeeper\n    restart: on-failure\n    networks:\n      - pulsar\n    volumes:\n      - ./data/zookeeper:/pulsar/data/zookeeper\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - PULSAR_MEM=-Xms256m -Xmx256m -XX:MaxDirectMemorySize=256m\n    command: >\n      bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && \\\n             bin/generate-zookeeper-config.sh conf/zookeeper.conf && \\\n             exec bin/pulsar zookeeper"\n    healthcheck:\n      test: ["CMD", "bin/pulsar-zookeeper-ruok.sh"]\n      interval: 10s\n      timeout: 5s\n      retries: 30\n\n  # Init cluster metadata\n  pulsar-init:\n    container_name: pulsar-init\n    hostname: pulsar-init\n    image: apachepulsar/pulsar:latest\n    networks:\n      - pulsar\n    command: >\n      bin/pulsar initialize-cluster-metadata \\\n               --cluster cluster-a \\\n               --zookeeper zookeeper:2181 \\\n               --configuration-store zookeeper:2181 \\\n               --web-service-url http://broker:8080 \\\n               --broker-service-url pulsar://broker:6650\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n\n  # Start bookie\n  bookie:\n    image: apachepulsar/pulsar:latest\n    container_name: bookie\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - clusterName=cluster-a\n      - zkServers=zookeeper:2181\n      - metadataServiceUri=metadata-store:zk:zookeeper:2181\n      # otherwise every time we run docker compose uo or down we fail to start due to Cookie\n      # See: https://github.com/apache/bookkeeper/blob/405e72acf42bb1104296447ea8840d805094c787/bookkeeper-server/src/main/java/org/apache/bookkeeper/bookie/Cookie.java#L57-68\n      - advertisedAddress=bookie\n      - BOOKIE_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      pulsar-init:\n        condition: service_completed_successfully\n    # Map the local directory to the container to avoid bookie startup failure due to insufficient container disks.\n    volumes:\n      - ./data/bookkeeper:/pulsar/data/bookkeeper\n    command: bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n\n  # Start broker\n  broker:\n    image: apachepulsar/pulsar:latest\n    container_name: broker\n    hostname: broker\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - zookeeperServers=zookeeper:2181\n      - clusterName=cluster-a\n      - managedLedgerDefaultEnsembleSize=1\n      - managedLedgerDefaultWriteQuorum=1\n      - managedLedgerDefaultAckQuorum=1\n      - advertisedAddress=broker\n      - advertisedListeners=external:pulsar://127.0.0.1:6650\n      - PULSAR_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      bookie:\n        condition: service_started\n    ports:\n      - "6650:6650"\n      - "8080:8080"\n    command: bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n')),(0,o.yg)("h2",{id:"step-2-create-a-pulsar-cluster"},"Step 2: Create a Pulsar cluster"),(0,o.yg)("p",null,"As preparation, create data directories and change the data directory ownership to uid(10000) which is the default user id used in the Pulsar Docker container."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p ./data/zookeeper ./data/bookkeeper\n# this step might not be necessary on other than Linux platforms\nsudo chown -R 10000 data\n")),(0,o.yg)("p",null,"To create a Pulsar cluster by using the ",(0,o.yg)("inlineCode",{parentName:"p"},"compose.yml")," file, run the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.yg)("h2",{id:"step-3-destroy-the-pulsar-cluster"},"Step 3: Destroy the Pulsar cluster"),(0,o.yg)("p",null,"If you want to destroy the Pulsar cluster with all the containers, run the following command. It will also delete the network that the containers are connected to."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")))}d.isMDXComponent=!0}}]);