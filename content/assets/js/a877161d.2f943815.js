"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62128],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(58168),o=(r(96540),r(15680));const a={id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},i=void 0,c={unversionedId:"io-connectors",id:"version-2.4.1/io-connectors",title:"Builtin Connectors",description:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.",source:"@site/versioned_docs/version-2.4.1/io-connectors.md",sourceDirName:".",slug:"/io-connectors",permalink:"/docs/2.4.1/io-connectors",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/io-connectors.md",tags:[],version:"2.4.1",frontMatter:{id:"io-connectors",title:"Builtin Connectors",sidebar_label:"Builtin Connectors",original_id:"io-connectors"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Debug",permalink:"/docs/2.4.1/io-debug"},next:{title:"Developing Connectors",permalink:"/docs/2.4.1/io-develop"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar.\nThese connectors import and export data from some of the most commonly used data systems. Using any these connectors is\nas easy as writing a simple connector configuration and running the connector locally or submitting the connector to a\nPulsar Functions cluster."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-aerospike"},"Aerospike Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-cassandra"},"Cassandra Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-kafka#sink"},"Kafka Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-kafka#source"},"Kafka Source Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-kinesis#sink"},"Kinesis Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-rabbitmq#source"},"RabbitMQ Source Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-rabbitmq#sink"},"RabbitMQ Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-twitter"},"Twitter Firehose Source Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-cdc"},"CDC Source Connector based on Debezium")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-netty#source"},"Netty Source Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-hbase#sink"},"Hbase Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-elasticsearch#sink"},"ElasticSearch Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-file#source"},"File Source Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-hdfs#sink"},"Hdfs Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-mongo#sink"},"MongoDB Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-redis#sink"},"Redis Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-solr#sink"},"Solr Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-influxdb#sink"},"InfluxDB Sink Connector")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/2.4.1/io-jdbc"},"JDBC Sink Connector"))))}m.isMDXComponent=!0}}]);