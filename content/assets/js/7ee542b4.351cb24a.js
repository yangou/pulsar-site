"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(58168),a=n(96540),i=n(20053),l=n(23104),o=n(56347),s=n(57485),u=n(31682),c=n(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=d({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),y=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var y=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:h},l,{className:(0,i.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=g(e);return a.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function k(e){const t=(0,y.A)();return a.createElement(T,(0,r.A)({key:String(t)},e))}},39659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),i=n(11470),l=n(19365);const o={id:"security-tls-authentication",title:"Authentication using mTLS",sidebar_label:"Authentication using mTLS",description:"Get a comprehensive understanding of concepts and configuration methods of mTLS authentication in Pulsar."},s=void 0,u={unversionedId:"security-tls-authentication",id:"version-3.3.x/security-tls-authentication",title:"Authentication using mTLS",description:"Get a comprehensive understanding of concepts and configuration methods of mTLS authentication in Pulsar.",source:"@site/versioned_docs/version-3.3.x/security-tls-authentication.md",sourceDirName:".",slug:"/security-tls-authentication",permalink:"/docs/3.3.x/security-tls-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/security-tls-authentication.md",tags:[],version:"3.3.x",frontMatter:{id:"security-tls-authentication",title:"Authentication using mTLS",sidebar_label:"Authentication using mTLS",description:"Get a comprehensive understanding of concepts and configuration methods of mTLS authentication in Pulsar."},sidebar:"docsSidebar",previous:{title:"Bouncy Castle Providers",permalink:"/docs/3.3.x/security-bouncy-castle"},next:{title:"Authentication using JWT",permalink:"/docs/3.3.x/security-jwt"}},c={},p=[{value:"mTLS authentication overview",id:"mtls-authentication-overview",level:2},{value:"Enable mTLS authentication on brokers",id:"enable-mtls-authentication-on-brokers",level:2},{value:"Enable mTLS authentication on proxies",id:"enable-mtls-authentication-on-proxies",level:2},{value:"Configure mTLS authentication in Pulsar clients",id:"configure-mtls-authentication-in-pulsar-clients",level:2},{value:"Configure mTLS authentication in CLI tools",id:"configure-mtls-authentication-in-cli-tools",level:2},{value:"Configure mTLS authentication with KeyStore",id:"configure-mtls-authentication-with-keystore",level:2},{value:"Step 1: Configure brokers",id:"step-1-configure-brokers",level:3},{value:"Step 2: Configure clients",id:"step-2-configure-clients",level:3}],h={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(m,(0,r.A)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"mtls-authentication-overview"},"mTLS authentication overview"),(0,a.yg)("p",null,"Mutual TLS (mTLS) is a mutual authentication mechanism. Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients."),(0,a.yg)("p",null,"The following figure illustrates how Pulsar processes mTLS authentication between clients and servers."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Pulsar mTLS authentication process",src:n(57961).A,width:"1504",height:"327"})),(0,a.yg)("h2",{id:"enable-mtls-authentication-on-brokers"},"Enable mTLS authentication on brokers"),(0,a.yg)("p",null,"To configure brokers to authenticate clients using mTLS, add the following parameters to the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/broker.conf"),". If you use a standalone Pulsar, you need to add these parameters to the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect brokers\nbrokerClientTlsEnabled=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/broker_client.cert.pem","tlsKeyFile":"/path/to/broker_client.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/server.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/server.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n\n# Tls cert refresh duration in seconds (set 0 to check on every new connection)\ntlsCertRefreshCheckDurationSec=300\n')),(0,a.yg)("h2",{id:"enable-mtls-authentication-on-proxies"},"Enable mTLS authentication on proxies"),(0,a.yg)("p",null,"To configure proxies to authenticate clients using mTLS, add the following parameters to the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect proxies\ntlsEnabledWithBroker=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/proxy.cert.pem","tlsKeyFile":"/path/to/proxy.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/server.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/server.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n')),(0,a.yg)("h2",{id:"configure-mtls-authentication-in-pulsar-clients"},"Configure mTLS authentication in Pulsar clients"),(0,a.yg)("p",null,"When using mTLS authentication, clients connect via TLS transport. You need to configure clients to use ",(0,a.yg)("inlineCode",{parentName:"p"},"https://")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"8443")," port for the web service URL, use ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar+ssl://")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"6651")," port for the broker service URL."),(0,a.yg)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/client.cert.pem,tlsKeyFile:/path/to/client.key-pk8.pem")\n    .build();\n'))),(0,a.yg)(l.A,{value:"Python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/client.cert.pem", "/path/to/client.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n'))),(0,a.yg)(l.A,{value:"C++",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/client.cert.pem",\n                                                         "/path/to/client.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n'))),(0,a.yg)(l.A,{value:"Node.js",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/client.cert.pem',\n    privateKeyPath: '/path/to/client.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n"))),(0,a.yg)(l.A,{value:"Go",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(ClientOptions{\n        URL:                   "pulsar+ssl://broker.example.com:6651/",\n        TLSTrustCertsFilePath: "/path/to/ca.cert.pem",\n        Authentication:        pulsar.NewAuthenticationTLS("/path/to/client.cert.pem", "/path/to/client.key-pk8.pem"),\n    })\n'))),(0,a.yg)(l.A,{value:"C#",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'var clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n')))),(0,a.yg)("h2",{id:"configure-mtls-authentication-in-cli-tools"},"Configure mTLS authentication in CLI tools"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/reference-cli-tools"},"Command-line tools")," like ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-perf/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-client/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,a.yg)("p",null,"To use mTLS authentication with the CLI tools of Pulsar, you need to add the following parameters to the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," file, alongside ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/security-tls-transport#configure-mtls-encryption-in-cli-tools"},"the configurations to enable mTLS encryption"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"webServiceUrl=https://localhost:8081/\nbrokerServiceUrl=pulsar+ssl://localhost:6651/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/admin.cert.pem,tlsKeyFile:/path/to/admin.key-pk8.pem\n")),(0,a.yg)("h2",{id:"configure-mtls-authentication-with-keystore"},"Configure mTLS authentication with KeyStore"),(0,a.yg)("p",null,"Apache Pulsar supports ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/security-tls-transport"},"TLS encryption")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/security-tls-authentication"},"mTLS authentication")," between clients and Apache Pulsar service. By default, it uses PEM format file configuration."),(0,a.yg)("p",null,"To configure mTLS authentication with ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_KeyStore"},"KeyStore"),", complete the following steps."),(0,a.yg)("h3",{id:"step-1-configure-brokers"},"Step 1: Configure brokers"),(0,a.yg)("p",null,"Configure the ",(0,a.yg)("inlineCode",{parentName:"p"},"broker.conf")," file as follows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n')),(0,a.yg)("h3",{id:"step-2-configure-clients"},"Step 2: Configure clients"),(0,a.yg)("p",null,"Besides configuring ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/security-tls-transport"},"TLS encryption"),", you need to configure the KeyStore, which contains a valid CN as client role, for clients."),(0,a.yg)("p",null,"For example:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"for ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.3.x/reference-cli-tools"},"Command-line tools")," like ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-perf/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,a.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-client/"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-client")),", set the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," file in a Pulsar installation."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-properties"},'webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"for Java client"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .enableTlsHostnameVerification(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"for Java admin client"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-java"},'    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .enableTlsHostnameVerification(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n')))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Configure ",(0,a.yg)("inlineCode",{parentName:"p"},"tlsTrustStorePath")," when you set ",(0,a.yg)("inlineCode",{parentName:"p"},"useKeyStoreTls")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),".")))}d.isMDXComponent=!0},57961:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mTLS-authentication-09425e733cb0c7886c30d04008cf6d85.svg"}}]);