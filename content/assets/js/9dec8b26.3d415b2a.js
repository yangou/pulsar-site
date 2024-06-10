"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71398],{15680:(e,a,o)=>{o.d(a,{xA:()=>c,yg:()=>f});var t=o(96540);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),g=function(e){var a=t.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=g(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(o),p=n,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return o?t.createElement(f,i(i({ref:a},c),{},{components:o})):t.createElement(f,i({ref:a},c))}));function f(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var g=2;g<r;g++)i[g]=o[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},57791:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var t=o(58168),n=(o(96540),o(15680));const r={id:"cookbooks-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage"},i=void 0,l={unversionedId:"cookbooks-tiered-storage",id:"version-2.3.2/cookbooks-tiered-storage",title:"Tiered Storage",description:"Pulsar's Tiered Storage feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster.",source:"@site/versioned_docs/version-2.3.2/cookbooks-tiered-storage.md",sourceDirName:".",slug:"/cookbooks-tiered-storage",permalink:"/docs/2.3.2/cookbooks-tiered-storage",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/cookbooks-tiered-storage.md",tags:[],version:"2.3.2",frontMatter:{id:"cookbooks-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Apache Storm",permalink:"/docs/2.3.2/adaptors-storm"},next:{title:"Topic compaction",permalink:"/docs/2.3.2/cookbooks-compaction"}},s={},g=[{value:"When should I use Tiered Storage?",id:"when-should-i-use-tiered-storage",level:2},{value:"The offloading mechanism",id:"the-offloading-mechanism",level:2},{value:"Configuring the offload driver",id:"configuring-the-offload-driver",level:2},{value:"&quot;aws-s3&quot; Driver configuration",id:"aws-s3-driver-configuration",level:3},{value:"Bucket and Region",id:"bucket-and-region",level:4},{value:"Authentication with AWS",id:"authentication-with-aws",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite",level:4},{value:"&quot;google-cloud-storage&quot; Driver configuration",id:"google-cloud-storage-driver-configuration",level:3},{value:"Authentication with GCS",id:"authentication-with-gcs",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite-1",level:4},{value:"&quot;filesystem&quot; Driver configuration",id:"filesystem-driver-configuration",level:3},{value:"Configure connection address",id:"configure-connection-address",level:4},{value:"Configure Hadoop profile path",id:"configure-hadoop-profile-path",level:4},{value:"Configuring offload to run automatically",id:"configuring-offload-to-run-automatically",level:2},{value:"Configuring read priority for offloaded messages",id:"configuring-read-priority-for-offloaded-messages",level:2},{value:"Triggering offload manually",id:"triggering-offload-manually",level:2}],c={toc:g},d="wrapper";function u(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar's ",(0,n.yg)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Tiered storage uses ",(0,n.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," and ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"),"(GCS for short)\nfor long term storage. With Jclouds, it is easy to add support for more ",(0,n.yg)("a",{parentName:"p",href:"https://jclouds.apache.org/reference/providers/#blobstore-providers"},"cloud storage providers")," in the future.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Tiered storage uses ",(0,n.yg)("a",{parentName:"p",href:"http://hadoop.apache.org/"},"Apache Hadoop")," to support filesystem for long term storage.\nWith Hadoop, it is easy to add support for more filesystem in the future."))),(0,n.yg)("h2",{id:"when-should-i-use-tiered-storage"},"When should I use Tiered Storage?"),(0,n.yg)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time. For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm you can rerun it against your full user history."),(0,n.yg)("h2",{id:"the-offloading-mechanism"},"The offloading mechanism"),(0,n.yg)("p",null,"A topic in Pulsar is backed by a log, known as a managed ledger. This log is composed of an ordered list of segments. Pulsar only every writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a segment oriented architecture."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tiered storage",src:o(70976).A,title:"Tiered Storage",width:"1110",height:"697"})),(0,n.yg)("p",null,"The Tiered Storage offloading mechanism takes advantage of this segment oriented architecture. When offloading is requested, the segments of the log are copied, one-by-one, to tiered storage. All segments of the log, apart from the segment currently being written to can be offloaded."),(0,n.yg)("p",null,"On the broker, the administrator must configure the bucket and credentials for the cloud storage service.\nThe configured bucket must exist before attempting to offload. If it does not exist, the offload operation will fail."),(0,n.yg)("p",null,"Pulsar uses multi-part objects to upload the segment data. It is possible that a broker could crash while uploading the data.\nWe recommend you add a life cycle rule your bucket to expire incomplete multi-part upload after a day or two to avoid\ngetting charged for incomplete uploads."),(0,n.yg)("p",null,"When ledgers are offloaded to long term storage, you can still query data in the offloaded ledgers with Pulsar SQL."),(0,n.yg)("h2",{id:"configuring-the-offload-driver"},"Configuring the offload driver"),(0,n.yg)("p",null,"Offloading is configured in ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,n.yg)("p",null,"At a minimum, the administrator must configure the driver, the bucket and the authenticating credentials.\nThere is also some other knobs to configure, like the bucket region, the max block size in backed storage, etc."),(0,n.yg)("p",null,"Currently we support driver of types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"aws-s3"),": ",(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Simple Cloud Storage Service")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"google-cloud-storage"),": ",(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/"},"Google Cloud Storage")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"filesystem"),": ",(0,n.yg)("a",{parentName:"li",href:"http://hadoop.apache.org/"},"Filesystem Storage"))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Driver names are case-insensitive for driver's name. There is a third driver type, ",(0,n.yg)("inlineCode",{parentName:"p"},"s3"),", which is identical to ",(0,n.yg)("inlineCode",{parentName:"p"},"aws-s3"),",\nthough it requires that you specify an endpoint url using ",(0,n.yg)("inlineCode",{parentName:"p"},"s3ManagedLedgerOffloadServiceEndpoint"),". This is useful if\nusing a S3 compatible data store, other than AWS.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=aws-s3\n\n")),(0,n.yg)("h3",{id:"aws-s3-driver-configuration"},'"aws-s3" Driver configuration'),(0,n.yg)("h4",{id:"bucket-and-region"},"Bucket and Region"),(0,n.yg)("p",null,"Buckets are the basic containers that hold your data.\nEverything that you store in Cloud Storage must be contained in a bucket.\nYou can use buckets to organize your data and control access to your data,\nbut unlike directories and folders, you cannot nest buckets."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.yg)("p",null,"Bucket Region is the region where bucket located. Bucket Region is not a required\nbut a recommended configuration. If it is not configured, It will use the default region."),(0,n.yg)("p",null,"With AWS S3, the default region is ",(0,n.yg)("inlineCode",{parentName:"p"},"US East (N. Virginia)"),". Page ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"AWS Regions and Endpoints")," contains more information."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadRegion=eu-west-3\n\n")),(0,n.yg)("h4",{id:"authentication-with-aws"},"Authentication with AWS"),(0,n.yg)("p",null,"To be able to access AWS S3, you need to authenticate with AWS S3.\nPulsar does not provide any direct means of configuring authentication for AWS S3,\nbut relies on the mechanisms supported by the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,n.yg)("p",null,"Once you have created a set of credentials in the AWS IAM console, they can be configured in a number of ways."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Using ec2 instance metadata credentials")),(0,n.yg)("p",null,"If you are on AWS instance with an instance profile that provides credentials, Pulsar will use these credentials\nif no other mechanism is provided"),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Set the environment variables ",(0,n.yg)("strong",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,n.yg)("strong",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"conf/pulsar_env.sh"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nexport AWS_ACCESS_KEY_ID=ABC123456789\nexport AWS_SECRET_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},'\\"export\\" is important so that the variables are made available in the environment of spawned processes.')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Add the Java system properties ",(0,n.yg)("em",{parentName:"li"},"aws.accessKeyId")," and ",(0,n.yg)("em",{parentName:"li"},"aws.secretKey")," to ",(0,n.yg)("strong",{parentName:"li"},"PULSAR_EXTRA_OPTS")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"conf/pulsar_env.sh"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'\nPULSAR_EXTRA_OPTS="${PULSAR_EXTRA_OPTS} ${PULSAR_MEM} ${PULSAR_GC} -Daws.accessKeyId=ABC123456789 -Daws.secretKey=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c -Dio.netty.leakDetectionLevel=disabled -Dio.netty.recycler.maxCapacityPerThread=4096"\n\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Set the access credentials in ",(0,n.yg)("inlineCode",{parentName:"li"},"~/.aws/credentials"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\n[default]\naws_access_key_id=ABC123456789\naws_secret_access_key=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Assuming an IAM role")),(0,n.yg)("p",null,"If you want to assume an IAM role, this can be done via specifying the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadRole=<aws role arn>\ns3ManagedLedgerOffloadRoleSessionName=pulsar-s3-offload\n\n")),(0,n.yg)("p",null,"This will use the ",(0,n.yg)("inlineCode",{parentName:"p"},"DefaultAWSCredentialsProviderChain")," for assuming this role."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"The broker must be rebooted for credentials specified in pulsar_env to take effect.")),(0,n.yg)("h4",{id:"configuring-the-size-of-block-readwrite"},"Configuring the size of block read/write"),(0,n.yg)("p",null,"Pulsar also provides some knobs to configure the size of requests sent to AWS S3."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3ManagedLedgerOffloadMaxBlockSizeInBytes"),'  configures the maximum size of\na "part" sent during a multipart upload. This cannot be smaller than 5MB. Default is 64MB.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3ManagedLedgerOffloadReadBufferSizeInBytes")," configures the block size for\neach individual read when reading back data from AWS S3. Default is 1MB.")),(0,n.yg)("p",null,"In both cases, these should not be touched unless you know what you are doing."),(0,n.yg)("h3",{id:"google-cloud-storage-driver-configuration"},'"google-cloud-storage" Driver configuration'),(0,n.yg)("p",null,"Buckets are the basic containers that hold your data. Everything that you store in\nCloud Storage must be contained in a bucket. You can use buckets to organize your data and\ncontrol access to your data, but unlike directories and folders, you cannot nest buckets."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.yg)("p",null,"Bucket Region is the region where bucket located. Bucket Region is not a required but\na recommended configuration. If it is not configured, It will use the default region."),(0,n.yg)("p",null,"Regarding GCS, buckets are default created in the ",(0,n.yg)("inlineCode",{parentName:"p"},"us multi-regional location"),",\npage ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/bucket-locations"},"Bucket Locations")," contains more information."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadRegion=europe-west3\n\n")),(0,n.yg)("h4",{id:"authentication-with-gcs"},"Authentication with GCS"),(0,n.yg)("p",null,"The administrator needs to configure ",(0,n.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf"),"\nfor the broker to be able to access the GCS service. ",(0,n.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," is\na Json file, containing the GCS credentials of a service account.\n",(0,n.yg)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158849"},"Service Accounts section of this page")," contains\nmore information of how to create this key file for authentication. More information about google cloud IAM\nis available ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),"."),(0,n.yg)("p",null,"To generate service account credentials or view the public credentials that you've already generated, follow the following steps:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the ",(0,n.yg)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service accounts page"),"."),(0,n.yg)("li",{parentName:"ol"},"Select a project or create a new one."),(0,n.yg)("li",{parentName:"ol"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Create service account"),"."),(0,n.yg)("li",{parentName:"ol"},"In the ",(0,n.yg)("strong",{parentName:"li"},"Create service account")," window, type a name for the service account, and select ",(0,n.yg)("strong",{parentName:"li"},"Furnish a new private key"),". If you want to ",(0,n.yg)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority"},"grant G Suite domain-wide authority")," to the service account, also select ",(0,n.yg)("strong",{parentName:"li"},"Enable G Suite Domain-wide Delegation"),"."),(0,n.yg)("li",{parentName:"ol"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Create"),".")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Notes: Make ensure that the service account you create has permission to operate GCS, you need to assign ",(0,n.yg)("strong",{parentName:"p"},"Storage Admin")," permission to your service account in ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},'\ngcsManagedLedgerOffloadServiceAccountKeyFile="/Users/hello/Downloads/project-804d5e6a6f33.json"\n\n')),(0,n.yg)("h4",{id:"configuring-the-size-of-block-readwrite-1"},"Configuring the size of block read/write"),(0,n.yg)("p",null,"Pulsar also provides some knobs to configure the size of requests sent to GCS."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes"),' configures the maximum size of a "part" sent\nduring a multipart upload. This cannot be smaller than 5MB. Default is 64MB.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadReadBufferSizeInBytes")," configures the block size for each individual\nread when reading back data from GCS. Default is 1MB.")),(0,n.yg)("p",null,"In both cases, these should not be touched unless you know what you are doing."),(0,n.yg)("h3",{id:"filesystem-driver-configuration"},'"filesystem" Driver configuration'),(0,n.yg)("h4",{id:"configure-connection-address"},"Configure connection address"),(0,n.yg)("p",null,"You can configure the connection address in the ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},'\nfileSystemURI="hdfs://127.0.0.1:9000"\n\n')),(0,n.yg)("h4",{id:"configure-hadoop-profile-path"},"Configure Hadoop profile path"),(0,n.yg)("p",null,"The configuration file is stored in the Hadoop profile path. It contains various settings, such as base path, authentication, and so on."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},'\nfileSystemProfilePath="../conf/filesystem_offload_core_site.xml"\n\n')),(0,n.yg)("p",null,"The model for storing topic data uses ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.io.MapFile"),". You can use all of the configurations in ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.io.MapFile")," for Hadoop."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\n    <property>\n        <name>fs.defaultFS</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>hadoop.tmp.dir</name>\n        <value>pulsar</value>\n    </property>\n\n    <property>\n        <name>io.file.buffer.size</name>\n        <value>4096</value>\n    </property>\n\n    <property>\n        <name>io.seqfile.compress.blocksize</name>\n        <value>1000000</value>\n    </property>\n    <property>\n\n        <name>io.seqfile.compression.type</name>\n        <value>BLOCK</value>\n    </property>\n\n    <property>\n        <name>io.map.index.interval</name>\n        <value>128</value>\n    </property>\n\n")),(0,n.yg)("p",null,"For more information about the configurations in ",(0,n.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.io.MapFile"),", see ",(0,n.yg)("a",{parentName:"p",href:"http://hadoop.apache.org/"},"Filesystem Storage"),"."),(0,n.yg)("h2",{id:"configuring-offload-to-run-automatically"},"Configuring offload to run automatically"),(0,n.yg)("p",null,"Namespace policies can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that the topic has stored on the pulsar cluster. Once the topic reaches the threshold, an offload operation will be triggered. Setting a negative value to the threshold will disable automatic offloading. Setting the threshold to 0 will cause the broker to offload data as soon as it possiby can."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offload will not until the current segment is full.")),(0,n.yg)("h2",{id:"configuring-read-priority-for-offloaded-messages"},"Configuring read priority for offloaded messages"),(0,n.yg)("p",null,"By default, once messages were offloaded to long term storage, brokers will read them from long term storage, but messages still exists in bookkeeper for a period depends on the administrator's configuration. For\nmessages exists in both bookkeeper and long term storage, if they are preferred to read from bookkeeper, you can use command to change this configuration."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n# default value for -orp is tiered-storage-first\n$ bin/pulsar-admin namespaces set-offload-policies my-tenant/my-namespace -orp bookkeeper-first\n$ bin/pulsar-admin topics set-offload-policies my-tenant/my-namespace/topic1 -orp bookkeeper-first\n\n")),(0,n.yg)("h2",{id:"triggering-offload-manually"},"Triggering offload manually"),(0,n.yg)("p",null,"Offloading can manually triggered through a REST endpoint on the Pulsar broker. We provide a CLI which will call this rest endpoint for you."),(0,n.yg)("p",null,"When triggering offload, you must specify the maximum size, in bytes, of backlog which will be retained locally on the bookkeeper. The offload mechanism will offload segments from the start of the topic backlog until this condition is met."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,n.yg)("p",null,"The command to triggers an offload will not wait until the offload operation has completed. To check the status of the offload, use offload-status."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status my-tenant/my-namespace/topic1\nOffload is currently running\n\n")),(0,n.yg)("p",null,"To wait for offload to complete, add the -w flag."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status -w my-tenant/my-namespace/topic1\nOffload was a success\n\n")),(0,n.yg)("p",null,"If there is an error offloading, the error will be propagated to the offload-status command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status persistent://public/default/topic1\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")))}u.isMDXComponent=!0},70976:(e,a,o)=>{o.d(a,{A:()=>t});const t=o.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);