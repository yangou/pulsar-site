"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[73967],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(a),c=l,u=g["".concat(s,".").concat(c)]||g[c]||m[c]||r;return a?t.createElement(u,i(i({ref:n},d),{},{components:a})):t.createElement(u,i({ref:n},d))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86406:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(58168),l=(a(96540),a(15680));const r={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector"},i=void 0,o={unversionedId:"io-jdbc-sink",id:"version-3.3.x/io-jdbc-sink",title:"JDBC sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.3.x/io-jdbc-sink.md",sourceDirName:".",slug:"/io-jdbc-sink",permalink:"/docs/3.3.x/io-jdbc-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/io-jdbc-sink.md",tags:[],version:"3.3.x",frontMatter:{id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example of ClickHouse",id:"example-of-clickhouse",level:3},{value:"Example of MariaDB",id:"example-of-mariadb",level:3},{value:"Example of OpenMLDB",id:"example-of-openmldb",level:3},{value:"Example of PostgreSQL",id:"example-of-postgresql",level:3},{value:"Example of SQLite",id:"example-of-sqlite",level:3}],d={toc:p},g="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,l.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,l.yg)("p",null,"The JDBC sink connectors allow pulling messages from Pulsar topics and persist the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Currently, INSERT, DELETE and UPDATE operations are supported.\nSQLite, MariaDB and PostgreSQL also support UPSERT operations and idempotent writes.")),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"The configuration of all JDBC sink connectors has the following properties."),(0,l.yg)("h3",{id:"property"},"Property"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"userName")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The username used to connect to the database specified by ",(0,l.yg)("inlineCode",{parentName:"td"},"jdbcUrl"),".",(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Note: ",(0,l.yg)("inlineCode",{parentName:"strong"},"userName")," is case-sensitive."))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"password")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The password used to connect to the database specified by ",(0,l.yg)("inlineCode",{parentName:"td"},"jdbcUrl"),". ",(0,l.yg)("br",null),(0,l.yg)("br",null),(0,l.yg)("strong",{parentName:"td"},"Note: ",(0,l.yg)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"jdbcUrl")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The JDBC URL of the database that the connector connects to.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"tableName")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The name of the table that the connector writes to.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"nonKey")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"A comma-separated list containing the fields used in updating events.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"key")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"A comma-separated list containing the fields used in ",(0,l.yg)("inlineCode",{parentName:"td"},"where")," condition of updating and deleting events.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"timeoutMs")),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"The JDBC operation timeout in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"The batch size of updates made to the database.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"insertMode")),(0,l.yg)("td",{parentName:"tr",align:null},"enum( INSERT,UPSERT,UPDATE)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"INSERT"),(0,l.yg)("td",{parentName:"tr",align:null},"If it is configured as UPSERT, the sink uses upsert semantics rather than plain INSERT/UPDATE statements. Upsert semantics refer to atomically adding a new row or updating the existing row if there is a primary key constraint violation, which provides idempotence.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"nullValueAction")),(0,l.yg)("td",{parentName:"tr",align:null},"enum(FAIL, DELETE)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"FAIL"),(0,l.yg)("td",{parentName:"tr",align:null},"How to handle records with NULL values. Possible options are ",(0,l.yg)("inlineCode",{parentName:"td"},"DELETE")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"FAIL"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"useTransactions")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable transactions of the database.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"excludeNonDeclaredFields")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"All the table fields are discovered automatically. ",(0,l.yg)("inlineCode",{parentName:"td"},"excludeNonDeclaredFields")," indicates if the table fields not explicitly listed in ",(0,l.yg)("inlineCode",{parentName:"td"},"nonKey")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"key")," must be included in the query. By default all the table fields are included. To leverage of table fields defaults during insertion, it is suggested to set this value to ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"useJdbcBatch")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Use the JDBC batch API. This option is suggested to improve write performance.")))),(0,l.yg)("h3",{id:"example-of-clickhouse"},"Example of ClickHouse"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "clickhouse",\n      "password": "password",\n      "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n      "tableName": "pulsar_clickhouse_jdbc_sink"\n      "useTransactions": "false"\n   }\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ninputs: [ "persistent://public/default/jdbc-clickhouse-topic" ]\nsinkType: "jdbc-clickhouse"\nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n    useTransactions: "false"\n')))),(0,l.yg)("h3",{id:"example-of-mariadb"},"Example of MariaDB"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "mariadb",\n      "password": "password",\n      "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n      "tableName": "pulsar_mariadb_jdbc_sink"\n   }\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ninputs: [ "persistent://public/default/jdbc-mariadb-topic" ]\nsinkType: "jdbc-mariadb"\nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n')))),(0,l.yg)("h3",{id:"example-of-openmldb"},"Example of OpenMLDB"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"OpenMLDB does not support DELETE and UPDATE operations"),(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},"JSON"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "jdbcUrl": "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb",\n      "tableName": "pulsar_openmldb_jdbc_sink"\n   }\n}\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-openmldb-sink"\ninputs: [ "persistent://public/default/jdbc-openmldb-topic" ]\nsinkType: "jdbc-openmldb"\nconfigs:\n    jdbcUrl: "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb"\n    tableName: "pulsar_openmldb_jdbc_sink"\n')))),(0,l.yg)("h3",{id:"example-of-postgresql"},"Example of PostgreSQL"),(0,l.yg)("p",null,"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "userName": "postgres",\n      "password": "password",\n      "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n      "tableName": "pulsar_postgres_jdbc_sink"\n   }\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ninputs: [ "persistent://public/default/jdbc-postgres-topic" ]\nsinkType: "jdbc-postgres"\nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n')))),(0,l.yg)("p",null,"For more information on ",(0,l.yg)("strong",{parentName:"p"},"how to use this JDBC sink connector"),", see ",(0,l.yg)("a",{parentName:"p",href:"/docs/3.3.x/io-quickstart#connect-pulsar-to-postgresql"},"connect Pulsar to PostgreSQL"),"."),(0,l.yg)("h3",{id:"example-of-sqlite"},"Example of SQLite"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "jdbcUrl": "jdbc:sqlite:db.sqlite",\n      "tableName": "pulsar_sqlite_jdbc_sink"\n   }\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ninputs: [ "persistent://public/default/jdbc-sqlite-topic" ]\nsinkType: "jdbc-sqlite"\nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n')))))}m.isMDXComponent=!0}}]);