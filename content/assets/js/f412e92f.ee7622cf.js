"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19910],{15680:(e,o,a)=>{a.d(o,{xA:()=>d,yg:()=>f});var t=a(96540);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var o=t.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},d=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=n,f=g["".concat(s,".").concat(p)]||g[p]||u[p]||r;return a?t.createElement(f,i(i({ref:o},d),{},{components:a})):t.createElement(f,i({ref:o},d))}));function f(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},13480:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(58168),n=(a(96540),a(15680));const r={id:"cookbooks-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage",original_id:"cookbooks-tiered-storage"},i=void 0,l={unversionedId:"cookbooks-tiered-storage",id:"version-2.2.0/cookbooks-tiered-storage",title:"Tiered Storage",description:"Pulsar's Tiered Storage feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster.",source:"@site/versioned_docs/version-2.2.0/cookbooks-tiered-storage.md",sourceDirName:".",slug:"/cookbooks-tiered-storage",permalink:"/docs/2.2.0/cookbooks-tiered-storage",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/cookbooks-tiered-storage.md",tags:[],version:"2.2.0",frontMatter:{id:"cookbooks-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage",original_id:"cookbooks-tiered-storage"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Apache Storm",permalink:"/docs/2.2.0/adaptors-storm"},next:{title:"Topic compaction",permalink:"/docs/2.2.0/cookbooks-compaction"}},s={},c=[{value:"When should I use Tiered Storage?",id:"when-should-i-use-tiered-storage",level:2},{value:"The offloading mechanism",id:"the-offloading-mechanism",level:2},{value:"Configuring the offload driver",id:"configuring-the-offload-driver",level:2},{value:"&quot;aws-s3&quot; Driver configuration",id:"aws-s3-driver-configuration",level:3},{value:"Bucket and Region",id:"bucket-and-region",level:4},{value:"Authentication with AWS",id:"authentication-with-aws",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite",level:4},{value:"&quot;google-cloud-storage&quot; Driver configuration",id:"google-cloud-storage-driver-configuration",level:3},{value:"Authentication with GCS",id:"authentication-with-gcs",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite-1",level:4},{value:"Configuring offload to run automatically",id:"configuring-offload-to-run-automatically",level:2},{value:"Triggering offload manually",id:"triggering-offload-manually",level:2}],d={toc:c},g="wrapper";function u(e){let{components:o,...r}=e;return(0,n.yg)(g,(0,t.A)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar's ",(0,n.yg)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster."),(0,n.yg)("p",null,"Tiered storage currently uses ",(0,n.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache Jclouds")," to supports ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," and ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"),"(GCS for short) for long term storage. With Jclouds, it is easy to add support for more ",(0,n.yg)("a",{parentName:"p",href:"https://jclouds.apache.org/reference/providers/#blobstore-providers"},"cloud storage providers")," in the future."),(0,n.yg)("h2",{id:"when-should-i-use-tiered-storage"},"When should I use Tiered Storage?"),(0,n.yg)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time. For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm you can rerun it against your full user history."),(0,n.yg)("h2",{id:"the-offloading-mechanism"},"The offloading mechanism"),(0,n.yg)("p",null,"A topic in Pulsar is backed by a log, known as a managed ledger. This log is composed of an ordered list of segments. Pulsar only every writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a segment oriented architecture."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tiered storage",src:a(70976).A,title:"Tiered Storage",width:"1110",height:"697"})),(0,n.yg)("p",null,"The Tiered Storage offloading mechanism takes advantage of this segment oriented architecture. When offloading is requested, the segments of the log are copied, one-by-one, to tiered storage. All segments of the log, apart from the segment currently being written to can be offloaded."),(0,n.yg)("p",null,"On the broker, the administrator must configure the bucket and credentials for the cloud storage service.\nThe configured bucket must exist before attempting to offload. If it does not exist, the offload operation will fail."),(0,n.yg)("p",null,"Pulsar uses multi-part objects to upload the segment data. It is possible that a broker could crash while uploading the data.\nWe recommend you add a life cycle rule your bucket to expire incomplete multi-part upload after a day or two to avoid\ngetting charged for incomplete uploads."),(0,n.yg)("h2",{id:"configuring-the-offload-driver"},"Configuring the offload driver"),(0,n.yg)("p",null,"Offloading is configured in ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,n.yg)("p",null,"At a minimum, the administrator must configure the driver, the bucket and the authenticating credentials.\nThere is also some other knobs to configure, like the bucket region, the max block size in backed storage, etc."),(0,n.yg)("p",null,"Currently we support driver of types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"aws-s3"),": ",(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Simple Cloud Storage Service")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"google-cloud-storage"),": ",(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Driver names are case-insensitive for driver's name. There is a third driver type, ",(0,n.yg)("inlineCode",{parentName:"p"},"s3"),", which is identical to ",(0,n.yg)("inlineCode",{parentName:"p"},"aws-s3"),",\nthough it requires that you specify an endpoint url using ",(0,n.yg)("inlineCode",{parentName:"p"},"s3ManagedLedgerOffloadServiceEndpoint"),". This is useful if\nusing a S3 compatible data store, other than AWS.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=aws-s3\n\n")),(0,n.yg)("h3",{id:"aws-s3-driver-configuration"},'"aws-s3" Driver configuration'),(0,n.yg)("h4",{id:"bucket-and-region"},"Bucket and Region"),(0,n.yg)("p",null,"Buckets are the basic containers that hold your data.\nEverything that you store in Cloud Storage must be contained in a bucket.\nYou can use buckets to organize your data and control access to your data,\nbut unlike directories and folders, you cannot nest buckets."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.yg)("p",null,"Bucket Region is the region where bucket located. Bucket Region is not a required\nbut a recommended configuration. If it is not configured, It will use the default region."),(0,n.yg)("p",null,"With AWS S3, the default region is ",(0,n.yg)("inlineCode",{parentName:"p"},"US East (N. Virginia)"),". Page ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"AWS Regions and Endpoints")," contains more information."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadRegion=eu-west-3\n\n")),(0,n.yg)("h4",{id:"authentication-with-aws"},"Authentication with AWS"),(0,n.yg)("p",null,"To be able to access AWS S3, you need to authenticate with AWS S3.\nPulsar does not provide any direct means of configuring authentication for AWS S3,\nbut relies on the mechanisms supported by the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,n.yg)("p",null,"Once you have created a set of credentials in the AWS IAM console, they can be configured in a number of ways."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Set the environment variables ",(0,n.yg)("strong",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,n.yg)("strong",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"conf/pulsar_env.sh"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nexport AWS_ACCESS_KEY_ID=ABC123456789\nexport AWS_SECRET_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},'\\"export\\" is important so that the variables are made available in the environment of spawned processes.')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Add the Java system properties ",(0,n.yg)("em",{parentName:"li"},"aws.accessKeyId")," and ",(0,n.yg)("em",{parentName:"li"},"aws.secretKey")," to ",(0,n.yg)("strong",{parentName:"li"},"PULSAR_EXTRA_OPTS")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"conf/pulsar_env.sh"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'\nPULSAR_EXTRA_OPTS="${PULSAR_EXTRA_OPTS} ${PULSAR_MEM} ${PULSAR_GC} -Daws.accessKeyId=ABC123456789 -Daws.secretKey=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c -Dio.netty.leakDetectionLevel=disabled -Dio.netty.recycler.maxCapacityPerThread=4096"\n\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Set the access credentials in ",(0,n.yg)("inlineCode",{parentName:"li"},"~/.aws/credentials"),".")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\n[default]\naws_access_key_id=ABC123456789\naws_secret_access_key=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,n.yg)("p",null,"If you are running in EC2 you can also use instance profile credentials, provided through the EC2 metadata service, but that is out of scope for this cookbook."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"The broker must be rebooted for credentials specified in pulsar_env to take effect.")),(0,n.yg)("h4",{id:"configuring-the-size-of-block-readwrite"},"Configuring the size of block read/write"),(0,n.yg)("p",null,"Pulsar also provides some knobs to configure the size of requests sent to AWS S3."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3ManagedLedgerOffloadMaxBlockSizeInBytes"),'  configures the maximum size of\na "part" sent during a multipart upload. This cannot be smaller than 5MB. Default is 64MB.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"s3ManagedLedgerOffloadReadBufferSizeInBytes")," configures the block size for\neach individual read when reading back data from AWS S3. Default is 1MB.")),(0,n.yg)("p",null,"In both cases, these should not be touched unless you know what you are doing."),(0,n.yg)("h3",{id:"google-cloud-storage-driver-configuration"},'"google-cloud-storage" Driver configuration'),(0,n.yg)("p",null,"Buckets are the basic containers that hold your data. Everything that you store in\nCloud Storage must be contained in a bucket. You can use buckets to organize your data and\ncontrol access to your data, but unlike directories and folders, you cannot nest buckets."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.yg)("p",null,"Bucket Region is the region where bucket located. Bucket Region is not a required but\na recommended configuration. If it is not configured, It will use the default region."),(0,n.yg)("p",null,"Regarding GCS, buckets are default created in the ",(0,n.yg)("inlineCode",{parentName:"p"},"us multi-regional location"),",\npage ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/bucket-locations"},"Bucket Locations")," contains more information."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadRegion=europe-west3\n\n")),(0,n.yg)("h4",{id:"authentication-with-gcs"},"Authentication with GCS"),(0,n.yg)("p",null,"The administrator needs to configure ",(0,n.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf"),"\nfor the broker to be able to access the GCS service. ",(0,n.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," is\na Json file, containing the GCS credentials of a service account.\n",(0,n.yg)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158849"},"Service Accounts section of this page")," contains\nmore information of how to create this key file for authentication. More information about google cloud IAM\nis available ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),"."),(0,n.yg)("p",null,"Usually these are the steps to create the authentication file:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the API Console Credentials page."),(0,n.yg)("li",{parentName:"ol"},"If it's not already selected, select the project that you're creating credentials for."),(0,n.yg)("li",{parentName:"ol"},"To set up a new service account, click New credentials and then select Service account key."),(0,n.yg)("li",{parentName:"ol"},"Choose the service account to use for the key."),(0,n.yg)("li",{parentName:"ol"},"Download the service account's public/private key as a JSON file that can be loaded by a Google API client library.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},'\ngcsManagedLedgerOffloadServiceAccountKeyFile="/Users/hello/Downloads/project-804d5e6a6f33.json"\n\n')),(0,n.yg)("h4",{id:"configuring-the-size-of-block-readwrite-1"},"Configuring the size of block read/write"),(0,n.yg)("p",null,"Pulsar also provides some knobs to configure the size of requests sent to GCS."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes"),' configures the maximum size of a "part" sent\nduring a multipart upload. This cannot be smaller than 5MB. Default is 64MB.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadReadBufferSizeInBytes")," configures the block size for each individual\nread when reading back data from GCS. Default is 1MB.")),(0,n.yg)("p",null,"In both cases, these should not be touched unless you know what you are doing."),(0,n.yg)("h2",{id:"configuring-offload-to-run-automatically"},"Configuring offload to run automatically"),(0,n.yg)("p",null,"Namespace policies can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that the topic has stored on the pulsar cluster. Once the topic reaches the threshold, an offload operation will be triggered. Setting a negative value to the threshold will disable automatic offloading. Setting the threshold to 0 will cause the broker to offload data as soon as it possiby can."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offload will not until the current segment is full.")),(0,n.yg)("h2",{id:"triggering-offload-manually"},"Triggering offload manually"),(0,n.yg)("p",null,"Offloading can manually triggered through a REST endpoint on the Pulsar broker. We provide a CLI which will call this rest endpoint for you."),(0,n.yg)("p",null,"When triggering offload, you must specify the maximum size, in bytes, of backlog which will be retained locally on the bookkeeper. The offload mechanism will offload segments from the start of the topic backlog until this condition is met."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,n.yg)("p",null,"The command to triggers an offload will not wait until the offload operation has completed. To check the status of the offload, use offload-status."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status my-tenant/my-namespace/topic1\nOffload is currently running\n\n")),(0,n.yg)("p",null,"To wait for offload to complete, add the -w flag."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status -w my-tenant/my-namespace/topic1\nOffload was a success\n\n")),(0,n.yg)("p",null,"If there is an error offloading, the error will be propagated to the offload-status command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin topics offload-status persistent://public/default/topic1\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")))}u.isMDXComponent=!0},70976:(e,o,a)=>{a.d(o,{A:()=>t});const t=a.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);