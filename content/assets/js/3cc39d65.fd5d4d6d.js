"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3875],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>g});var r=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,g=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return t?r.createElement(g,i(i({ref:a},m),{},{components:t})):r.createElement(g,i({ref:a},m))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76774:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const n={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},i=void 0,s={unversionedId:"develop-schema",id:"version-2.5.2/develop-schema",title:"Custom schema storage",description:"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.",source:"@site/versioned_docs/version-2.5.2/develop-schema.md",sourceDirName:".",slug:"/develop-schema",permalink:"/docs/2.5.2/develop-schema",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/develop-schema.md",tags:[],version:"2.5.2",frontMatter:{id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Binary protocol",permalink:"/docs/2.5.2/developing-binary-protocol"},next:{title:"Modular load manager",permalink:"/docs/2.5.2/develop-load-manager"}},l={},c=[{value:"SchemaStorage interface",id:"schemastorage-interface",level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",level:2},{value:"Deployment",id:"deployment",level:2}],m={toc:c},p="wrapper";function h(e){let{components:a,...t}=e;return(0,o.yg)(p,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"By default, Pulsar stores data type ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.5.2/concepts-schema-registry"},"schemas")," in ",(0,o.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."),(0,o.yg)("p",null,"In order to use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,o.yg)("a",{parentName:"p",href:"#schemastorage-interface"},(0,o.yg)("inlineCode",{parentName:"a"},"SchemaStorage"))," and ",(0,o.yg)("a",{parentName:"p",href:"#schemastoragefactory-interface"},(0,o.yg)("inlineCode",{parentName:"a"},"SchemaStorageFactory")),"."),(0,o.yg)("h2",{id:"schemastorage-interface"},"SchemaStorage interface"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For a full-fledged example schema storage implementation, see the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},(0,o.yg)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorage"))," class.")),(0,o.yg)("h2",{id:"schemastoragefactory-interface"},"SchemaStorageFactory interface"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"For a full-fledged example schema storage factory implementation, see the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},(0,o.yg)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorageFactory"))," class.")),(0,o.yg)("h2",{id:"deployment"},"Deployment"),(0,o.yg)("p",null,"In order to use your custom schema storage implementation, you'll need to:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Package the implementation in a ",(0,o.yg)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"},"JAR")," file."),(0,o.yg)("li",{parentName:"ol"},"Add that jar to the ",(0,o.yg)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.5.2/getting-started-standalone#installing-pulsar"},"binary or source distribution"),"."),(0,o.yg)("li",{parentName:"ol"},"Change the ",(0,o.yg)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.5.2/reference-configuration#broker"},(0,o.yg)("inlineCode",{parentName:"a"},"broker.conf"))," to your custom factory class (i.e. the ",(0,o.yg)("inlineCode",{parentName:"li"},"SchemaStorageFactory")," implementation, not the ",(0,o.yg)("inlineCode",{parentName:"li"},"SchemaStorage")," implementation)."),(0,o.yg)("li",{parentName:"ol"},"Start up Pulsar.")))}h.isMDXComponent=!0}}]);