"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62447],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=g(t),p=r,y=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const l={id:"io-dynamodb-source",title:"AWS DynamoDB source connector",sidebar_label:"AWS DynamoDB source connector",original_id:"io-dynamodb-source"},i=void 0,o={unversionedId:"io-dynamodb-source",id:"version-2.6.4/io-dynamodb-source",title:"AWS DynamoDB source connector",description:"The DynamoDB source connector pulls data from DynamoDB table streams and persists data into Pulsar.",source:"@site/versioned_docs/version-2.6.4/io-dynamodb-source.md",sourceDirName:".",slug:"/io-dynamodb-source",permalink:"/docs/2.6.4/io-dynamodb-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/io-dynamodb-source.md",tags:[],version:"2.6.4",frontMatter:{id:"io-dynamodb-source",title:"AWS DynamoDB source connector",sidebar_label:"AWS DynamoDB source connector",original_id:"io-dynamodb-source"}},s={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],m={toc:g},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The DynamoDB source connector pulls data from DynamoDB table streams and persists data into Pulsar."),(0,r.yg)("p",null,"This connector uses the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/awslabs/dynamodb-streams-kinesis-adapter"},"DynamoDB Streams Kinesis Adapter"),",\nwhich uses the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/awslabs/amazon-kinesis-client"},"Kinesis Consumer Library")," (KCL) to do the actual\nconsuming of messages. The KCL uses DynamoDB to track state for consumers and requires cloudwatch access to log metrics."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the DynamoDB source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"initialPositionInStream")),(0,r.yg)("td",{parentName:"tr",align:null},"InitialPositionInStream"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"LATEST"),(0,r.yg)("td",{parentName:"tr",align:null},"The position where the connector starts from.",(0,r.yg)("br",null),(0,r.yg)("br",null),"Below are the available options:",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"AT_TIMESTAMP"),": start from the record at or after the specified timestamp.",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"LATEST"),": start after the most recent data record.",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"TRIM_HORIZON"),": start from the oldest available data record."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"startAtTime")),(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"If set to ",(0,r.yg)("inlineCode",{parentName:"td"},"AT_TIMESTAMP"),", it specifies the point in time to start consumption.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"applicationName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar IO connector"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the KCL application.  Must be unique, as it is used to define the table name for the dynamo table used for state tracking. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"By default, the application name is included in the user agent string used to make AWS requests. This can assist with troubleshooting, for example, distinguish requests made by separate connector instances.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"checkpointInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"The frequency of the KCL checkpoint in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"backoffTime")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"3000"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of time to delay between requests when the connector encounters a throttling exception from AWS Kinesis in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"numRetries")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of re-attempts when the connector encounters an exception while trying to set a checkpoint.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"receiveQueueSize")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of AWS records that can be buffered inside the connector. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"Once the ",(0,r.yg)("inlineCode",{parentName:"td"},"receiveQueueSize")," is reached, the connector does not consume any messages from Kinesis until some messages in the queue are successfully consumed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dynamoEndpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Dynamo end-point URL, which can be found at ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cloudwatchEndpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Cloudwatch end-point URL, which can be found at ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsEndpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The DynamoDB Streams end-point URL, which can be found at ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The AWS region. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Example"),(0,r.yg)("br",null)," us-west-1, us-west-2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsDynamodbStreamArn")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The DynamoDB stream arn.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The fully-qualified class name of implementation of ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),".",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialProviderPlugin")," has the following built-in plugs:",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"org.apache.pulsar.io.kinesis.AwsDefaultProviderChainPlugin"),":",(0,r.yg)("br",null)," this plugin uses the default AWS provider chain.",(0,r.yg)("br",null),"For more information, see ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"using the default credential provider chain"),".",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"org.apache.pulsar.io.kinesis.STSAssumeRoleProviderPlugin"),": ",(0,r.yg)("br",null),"this plugin takes a configuration via the ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")," that describes a role to assume when running the KCL.",(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"JSON configuration example"),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},'{"roleArn": "arn...", "roleSessionName": "name"}')," ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginName")," is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"If ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginName")," set to empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginParam"),"."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The JSON parameter to initialize ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialsProviderPlugin"),".")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the DynamoDB source connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "awsEndpoint": "https://some.endpoint.aws",\n    "awsRegion": "us-east-1",\n    "awsDynamodbStreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/TestTable/stream/2015-05-11T21:21:33.291",\n    "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n    "applicationName": "My test application",\n    "checkpointInterval": "30000",\n    "backoffTime": "4000",\n    "numRetries": "3",\n    "receiveQueueSize": 2000,\n    "initialPositionInStream": "TRIM_HORIZON",\n    "startAtTime": "2019-03-05T19:28:58.000Z"\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "https://some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsDynamodbStreamArn: "arn:aws:dynamodb:us-west-2:111122223333:table/TestTable/stream/2015-05-11T21:21:33.291"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    applicationName: "My test application"\n    checkpointInterval: 30000\n    backoffTime: 4000\n    numRetries: 3\n    receiveQueueSize: 2000\n    initialPositionInStream: "TRIM_HORIZON"\n    startAtTime: "2019-03-05T19:28:58.000Z"\n\n')))))}u.isMDXComponent=!0}}]);