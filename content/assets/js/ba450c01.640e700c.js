"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55791],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),u=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=t,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return r?a.createElement(g,o(o({ref:n},c),{},{components:r})):a.createElement(g,o({ref:n},c))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47923:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(58168),t=(r(96540),r(15680));const i={id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos",original_id:"security-kerberos"},o=void 0,l={unversionedId:"security-kerberos",id:"version-2.4.1/security-kerberos",title:"Authentication using Kerberos",description:"Kerberos is a network authentication protocol. By using secret-key cryptography, Kerberos is designed to provide strong authentication for client applications and server applications.",source:"@site/versioned_docs/version-2.4.1/security-kerberos.md",sourceDirName:".",slug:"/security-kerberos",permalink:"/docs/2.4.1/security-kerberos",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/security-kerberos.md",tags:[],version:"2.4.1",frontMatter:{id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos",original_id:"security-kerberos"},sidebar:"version-2.4.1/docsSidebar",previous:{title:"Authentication using Athenz",permalink:"/docs/2.4.1/security-athenz"},next:{title:"Authentication using JWT",permalink:"/docs/2.4.1/security-jwt"}},s={},u=[{value:"Configuration for Kerberos between Client and Broker",id:"configuration-for-kerberos-between-client-and-broker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Kerberos principals",id:"kerberos-principals",level:4},{value:"Configure how to connect to KDC",id:"configure-how-to-connect-to-kdc",level:4},{value:"JAAS configuration file",id:"jaas-configuration-file",level:4},{value:"Kerberos configuration for Brokers",id:"kerberos-configuration-for-brokers",level:3},{value:"Configure the <code>broker.conf</code> file",id:"configure-the-brokerconf-file",level:4},{value:"Set Broker JVM parameter",id:"set-broker-jvm-parameter",level:4},{value:"Kerberos configuration for clients",id:"kerberos-configuration-for-clients",level:3},{value:"Java Client and Java Admin Client",id:"java-client-and-java-admin-client",level:4},{value:"Configure CLI tools",id:"configure-cli-tools",level:4},{value:"Kerberos configuration for working with Pulsar Proxy",id:"kerberos-configuration-for-working-with-pulsar-proxy",level:2},{value:"Create principal for Pulsar Proxy in Kerberos",id:"create-principal-for-pulsar-proxy-in-kerberos",level:3},{value:"Add a section in JAAS configuration file for Pulsar Proxy",id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy",level:3},{value:"Proxy client configuration",id:"proxy-client-configuration",level:3},{value:"Kerberos configuration for Pulsar proxy service",id:"kerberos-configuration-for-pulsar-proxy-service",level:3},{value:"Broker side configuration.",id:"broker-side-configuration",level:3},{value:"Regarding authorization and role token",id:"regarding-authorization-and-role-token",level:2},{value:"Regarding authentication between ZooKeeper and Broker",id:"regarding-authentication-between-zookeeper-and-broker",level:2},{value:"Regarding authentication between BookKeeper and Broker",id:"regarding-authentication-between-bookkeeper-and-broker",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/"},"Kerberos")," is a network authentication protocol. By using secret-key cryptography, ",(0,t.yg)("a",{parentName:"p",href:"https://web.mit.edu/kerberos/"},"Kerberos")," is designed to provide strong authentication for client applications and server applications."),(0,t.yg)("p",null,"In Pulsar, you can use Kerberos with ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer"},"SASL")," as a choice for authentication. And Pulsar uses the ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service"},"Java Authentication and Authorization Service (JAAS)")," for SASL configuration. You need to provide JAAS configurations for Kerberos authentication."),(0,t.yg)("p",null,"This document introduces how to configure ",(0,t.yg)("inlineCode",{parentName:"p"},"Kerberos")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"SASL")," between Pulsar clients and brokers and how to configure Kerberos for Pulsar proxy in detail."),(0,t.yg)("h2",{id:"configuration-for-kerberos-between-client-and-broker"},"Configuration for Kerberos between Client and Broker"),(0,t.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,t.yg)("p",null,"To begin, you need to set up (or already have) a ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_distribution_center"},"Key Distribution Center(KDC)"),". Also you need to configure and run the ",(0,t.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key_distribution_center"},"Key Distribution Center(KDC)"),"in advance."),(0,t.yg)("p",null,"If your organization already uses a Kerberos server (for example, by using ",(0,t.yg)("inlineCode",{parentName:"p"},"Active Directory"),"), you do not have to install a new server for Pulsar. If your organization does not use a Kerberos server, you need to install one. Your Linux vendor might have packages for ",(0,t.yg)("inlineCode",{parentName:"p"},"Kerberos"),". On how to install and configure Kerberos, refer to ",(0,t.yg)("a",{parentName:"p",href:"https://help.ubuntu.com/community/Kerberos"},"Ubuntu"),",\n",(0,t.yg)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Managing_Smart_Cards/installing-kerberos.html"},"Redhat"),"."),(0,t.yg)("p",null,"Note that if you use Oracle Java, you need to download JCE policy files for your Java version and copy them to the ",(0,t.yg)("inlineCode",{parentName:"p"},"$JAVA_HOME/jre/lib/security")," directory."),(0,t.yg)("h4",{id:"kerberos-principals"},"Kerberos principals"),(0,t.yg)("p",null,"If you use the existing Kerberos system, ask your Kerberos administrator for a principal for each Brokers in your cluster and for every operating system user that accesses Pulsar with Kerberos authentication(via clients and tools)."),(0,t.yg)("p",null,"If you have installed your own Kerberos system, you can create these principals with the following commands:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n")),(0,t.yg)("p",null,"Note that ",(0,t.yg)("em",{parentName:"p"},"Kerberos")," requires that all your hosts can be resolved with their FQDNs."),(0,t.yg)("p",null,"The first part of Broker principal (for example, ",(0,t.yg)("inlineCode",{parentName:"p"},"broker")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"broker/{hostname}@{REALM}"),") is the ",(0,t.yg)("inlineCode",{parentName:"p"},"serverType")," of each host. The suggested values of ",(0,t.yg)("inlineCode",{parentName:"p"},"serverType")," are ",(0,t.yg)("inlineCode",{parentName:"p"},"broker")," (host machine runs service Pulsar Broker) and ",(0,t.yg)("inlineCode",{parentName:"p"},"proxy")," (host machine runs service Pulsar Proxy)."),(0,t.yg)("h4",{id:"configure-how-to-connect-to-kdc"},"Configure how to connect to KDC"),(0,t.yg)("p",null,"You need to enter the command below to specify the path to the ",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file for the client side and the broker side. The content of ",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file indicates the default Realm and KDC information. See ",(0,t.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html"},"JDK\u2019s Kerberos Requirements")," for more details."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n-Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n")),(0,t.yg)("p",null,"Here is an example of the krb5.conf file:"),(0,t.yg)("p",null,"In the configuration file, ",(0,t.yg)("inlineCode",{parentName:"p"},"EXAMPLE.COM")," is the default realm; ",(0,t.yg)("inlineCode",{parentName:"p"},"kdc = localhost:62037")," is the kdc server url for realm ",(0,t.yg)("inlineCode",{parentName:"p"},"EXAMPLE.COM "),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\n[libdefaults]\n default_realm = EXAMPLE.COM\n\n[realms]\n EXAMPLE.COM  = {\n  kdc = localhost:62037\n }\n\n")),(0,t.yg)("p",null,"Usually machines configured with kerberos already have a system wide configuration and this configuration is optional."),(0,t.yg)("h4",{id:"jaas-configuration-file"},"JAAS configuration file"),(0,t.yg)("p",null,"You need JAAS configuration file for the client side and the broker side. JAAS configuration file provides the section of information that is used to connect KDC. Here is an example named ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n')),(0,t.yg)("p",null,"You need to set the ",(0,t.yg)("inlineCode",{parentName:"p"},"JAAS")," configuration file path as JVM parameter for client and broker. For example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n    -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf\n\n")),(0,t.yg)("p",null,"In the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file above"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"PulsarBroker")," is a section name in the JAAS file that each broker uses. This section tells the broker to use which principal inside Kerberos and the location of the keytab where the principal is stored. ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarBroker")," allows the broker to use the keytab specified in this section."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"PulsarClient")," is a section name in the JASS file that each broker uses. This section tells the client to use which principal inside Kerberos and the location of the keytab where the principal is stored. ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarClient")," allows the client to use the keytab specified in this section.\nThe following example also reuses this ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarClient")," section in both the Pulsar internal admin configuration and in CLI command of ",(0,t.yg)("inlineCode",{parentName:"li"},"bin/pulsar-client"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"bin/pulsar-perf")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"bin/pulsar-admin"),". You can also add different sections for different use cases.")),(0,t.yg)("p",null,"You can have 2 separate JAAS configuration files:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"the file for a broker that has sections of both ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarBroker")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarClient"),";"),(0,t.yg)("li",{parentName:"ul"},"the file for a client that only has a ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarClient")," section.")),(0,t.yg)("h3",{id:"kerberos-configuration-for-brokers"},"Kerberos configuration for Brokers"),(0,t.yg)("h4",{id:"configure-the-brokerconf-file"},"Configure the ",(0,t.yg)("inlineCode",{parentName:"h4"},"broker.conf")," file"),(0,t.yg)("p",null," In the ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf")," file, set Kerberos related configurations."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"authenticationEnabled")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),";")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"authenticationProviders")," to choose ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthenticationProviderSasl"),";")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"saslJaasClientAllowedIds")," regex for principal that is allowed to connect to broker;")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"saslJaasBrokerSectionName")," that corresponds to the section in JAAS configuration file for broker;"),(0,t.yg)("p",{parentName:"li"},"To make Pulsar internal admin client work properly, you need to set the configuration in the ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf")," file as below:")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"brokerClientAuthenticationPlugin")," to client plugin ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthenticationSasl"),";")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"brokerClientAuthenticationParameters")," to value in JSON string ",(0,t.yg)("inlineCode",{parentName:"p"},'{"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}'),", in which ",(0,t.yg)("inlineCode",{parentName:"p"},"PulsarClient")," is the section name in the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file, and ",(0,t.yg)("inlineCode",{parentName:"p"},'"serverType":"broker"')," indicates that the internal admin client connects to a Pulsar Broker;"),(0,t.yg)("p",{parentName:"li"},"Here is an example:"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarBroker\n\n## Authentication settings of the broker itself. Used when the broker connects to other brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n\n')),(0,t.yg)("h4",{id:"set-broker-jvm-parameter"},"Set Broker JVM parameter"),(0,t.yg)("p",null," Set JVM parameters for JAAS configuration file and krb5 configuration file with additional options."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n   -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n")),(0,t.yg)("p",null,"You can add this at the end of ",(0,t.yg)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in the file ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_env.sh"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar_env.sh"))),(0,t.yg)("p",null,"You must ensure that the operating system user who starts broker can reach the keytabs configured in the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and kdc server in the ",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file."),(0,t.yg)("h3",{id:"kerberos-configuration-for-clients"},"Kerberos configuration for clients"),(0,t.yg)("h4",{id:"java-client-and-java-admin-client"},"Java Client and Java Admin Client"),(0,t.yg)("p",null,"In client application, include ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar-client-auth-sasl")," in your project dependency."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-auth-sasl</artifactId>\n      <version>${pulsar.version}</version>\n    </dependency>\n\n")),(0,t.yg)("p",null,"Configure the authentication type to use ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthenticationSasl"),", and also provide the authentication parameters to it."),(0,t.yg)("p",null,"You need 2 parameters:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"saslJaasClientSectionName"),". This parameter corresponds to the section in JAAS configuration file for client;"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"serverType"),". This parameter stands for whether this client connects to broker or proxy. And client uses this parameter to know which server side principal should be used.")),(0,t.yg)("p",null,"When you authenticate between client and broker with the setting in above JAAS configuration file, we need to set ",(0,t.yg)("inlineCode",{parentName:"p"},"saslJaasClientSectionName")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"PulsarClient")," and set ",(0,t.yg)("inlineCode",{parentName:"p"},"serverType")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"broker"),"."),(0,t.yg)("p",null,"The following is an example of creating a Java client:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> authParams = Maps.newHashMap();\nauthParams.put("saslJaasClientSectionName", "PulsarClient");\nauthParams.put("serverType", "broker");\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"The first two lines in the example above are hard coded, alternatively, you can set additional JVM parameters for JAAS and krb5 configuration file when you run the application like below:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\njava -cp -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf $APP-jar-with-dependencies.jar $CLASSNAME\n\n")),(0,t.yg)("p",null,"You must ensure that the operating system user who starts pulsar client can reach the keytabs configured in the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," file and kdc server in the ",(0,t.yg)("inlineCode",{parentName:"p"},"krb5.conf")," file."),(0,t.yg)("h4",{id:"configure-cli-tools"},"Configure CLI tools"),(0,t.yg)("p",null,"If you use a command-line tool (such as ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar-client"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar-perf")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar-admin"),"), you need to perform the following steps:"),(0,t.yg)("p",null,"Step 1. Enter the command below to configure your ",(0,t.yg)("inlineCode",{parentName:"p"},"client.conf"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nauthParams={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n\n')),(0,t.yg)("p",null,"Step 2. Enter the command below to set JVM parameters for JAAS configuration file and krb5 configuration file with additional options."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n   -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n")),(0,t.yg)("p",null,"You can add this at the end of ",(0,t.yg)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in the file ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_tools_env.sh"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar_tools_env.sh")),",\nor add this line ",(0,t.yg)("inlineCode",{parentName:"p"},'OPTS="$OPTS -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf "')," directly to the CLI tool script."),(0,t.yg)("p",null,"The meaning of configurations is the same as the meaning of configurations in Java client section."),(0,t.yg)("h2",{id:"kerberos-configuration-for-working-with-pulsar-proxy"},"Kerberos configuration for working with Pulsar Proxy"),(0,t.yg)("p",null,"With the above configuration, client and broker can do authentication using Kerberos."),(0,t.yg)("p",null,"A client that connects to Pulsar Proxy is a little different. Pulsar Proxy (as a SASL Server in Kerberos) authenticates Client (as a SASL client in Kerberos) first; and then Pulsar broker authenticates Pulsar Proxy."),(0,t.yg)("p",null,"Now in comparison with the above configuration between client and broker, we show you how to configure Pulsar Proxy as follows."),(0,t.yg)("h3",{id:"create-principal-for-pulsar-proxy-in-kerberos"},"Create principal for Pulsar Proxy in Kerberos"),(0,t.yg)("p",null,"You need to add new principals for Pulsar Proxy comparing with the above configuration. If you already have principals for client and broker, you only need to add the proxy principal here."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n### add Principals for Pulsar Proxy\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey proxy/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{proxy-keytabname}.keytab proxy/{hostname}@{REALM}\"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n")),(0,t.yg)("h3",{id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy"},"Add a section in JAAS configuration file for Pulsar Proxy"),(0,t.yg)("p",null,"In comparison with the above configuration, add a new section for Pulsar Proxy in JAAS configuration file."),(0,t.yg)("p",null,"Here is an example named ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarProxy {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarproxy.keytab"\n   principal="proxy/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n')),(0,t.yg)("h3",{id:"proxy-client-configuration"},"Proxy client configuration"),(0,t.yg)("p",null,"Pulsar client configuration is similar with client and broker configuration, except that you need to set ",(0,t.yg)("inlineCode",{parentName:"p"},"serverType")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"proxy")," instead of ",(0,t.yg)("inlineCode",{parentName:"p"},"broker"),", for the reason that you need to do the Kerberos authentication between client and proxy."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> authParams = Maps.newHashMap();\nauthParams.put("saslJaasClientSectionName", "PulsarClient");\nauthParams.put("serverType", "proxy");        // ** here is the different **\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n')),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"The first two lines in the example above are hard coded, alternatively, you can set additional JVM parameters for JAAS and krb5 configuration file when you run the application like below:")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\njava -cp -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf $APP-jar-with-dependencies.jar $CLASSNAME\n\n")),(0,t.yg)("h3",{id:"kerberos-configuration-for-pulsar-proxy-service"},"Kerberos configuration for Pulsar proxy service"),(0,t.yg)("p",null,"In the ",(0,t.yg)("inlineCode",{parentName:"p"},"proxy.conf")," file, set Kerberos related configuration. Here is an example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'\n## related to authenticate client.\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarProxy\n\n## related to be authenticated by broker\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarProxy", "serverType":"broker"}\nforwardAuthorizationCredentials=true\n\n')),(0,t.yg)("p",null,"The first part relates to authenticating between client and Pulsar Proxy. In this phase, client works as SASL client, while Pulsar Proxy works as SASL server."),(0,t.yg)("p",null,"The second part relates to authenticating between Pulsar Proxy and Pulsar Broker. In this phase, Pulsar Proxy works as SASL client, while Pulsar Broker works as SASL server."),(0,t.yg)("h3",{id:"broker-side-configuration"},"Broker side configuration."),(0,t.yg)("p",null,"The broker side configuration file is the same with the above ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf"),", you do not need special configuration for Pulsar Proxy."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasBrokerSectionName=PulsarBroker\n\n")),(0,t.yg)("h2",{id:"regarding-authorization-and-role-token"},"Regarding authorization and role token"),(0,t.yg)("p",null,"For Kerberos authentication, we usually use the authenticated principal as the role token for Pulsar authorization. For more information of authorization in Pulsar, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.4.1/security-authorization"},"security authorization"),"."),(0,t.yg)("p",null,"If you enable 'authorizationEnabled', you need to set ",(0,t.yg)("inlineCode",{parentName:"p"},"superUserRoles")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf")," that corresponds to the name registered in kdc."),(0,t.yg)("p",null,"For example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"\nsuperUserRoles=client/{clientIp}@EXAMPLE.COM\n\n")),(0,t.yg)("h2",{id:"regarding-authentication-between-zookeeper-and-broker"},"Regarding authentication between ZooKeeper and Broker"),(0,t.yg)("p",null,"Pulsar Broker acts as a Kerberos client when you authenticate with Zookeeper. According to ",(0,t.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER/Client-Server+mutual+authentication"},"ZooKeeper document"),", you need these settings in ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/zookeeper.conf"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nauthProvider.1=org.apache.zookeeper.server.auth.SASLAuthenticationProvider\nrequireClientAuthScheme=sasl\n\n")),(0,t.yg)("p",null,"Enter the following commands to add a section of ",(0,t.yg)("inlineCode",{parentName:"p"},"Client")," configurations in the file ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf"),", which Pulsar Broker uses:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\n Client {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n')),(0,t.yg)("p",null,"In this setting, the principal of Pulsar Broker and keyTab file indicates the role of Broker when you authenticate with ZooKeeper."),(0,t.yg)("h2",{id:"regarding-authentication-between-bookkeeper-and-broker"},"Regarding authentication between BookKeeper and Broker"),(0,t.yg)("p",null,"Pulsar Broker acts as a Kerberos client when you authenticate with Bookie. According to ",(0,t.yg)("a",{parentName:"p",href:"http://bookkeeper.apache.org/docs/latest/security/sasl/"},"BookKeeper document"),", you need to add ",(0,t.yg)("inlineCode",{parentName:"p"},"bookkeeperClientAuthenticationPlugin")," parameter in ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nbookkeeperClientAuthenticationPlugin=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n\n")),(0,t.yg)("p",null,"In this setting, ",(0,t.yg)("inlineCode",{parentName:"p"},"SASLClientProviderFactory")," creates a BookKeeper SASL client in a Broker, and the Broker uses the created SASL client to authenticate with a Bookie node."),(0,t.yg)("p",null,"Enter the following commands to add a section of ",(0,t.yg)("inlineCode",{parentName:"p"},"BookKeeper")," configurations in the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar_jaas.conf")," that Pulsar Broker uses:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\n BookKeeper {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n')),(0,t.yg)("p",null,"In this setting, the principal of Pulsar Broker and keyTab file indicates the role of Broker when you authenticate with Bookie."))}d.isMDXComponent=!0}}]);