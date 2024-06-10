"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92739],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(l,".").concat(y)]||u[y]||h[y]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"security-tls-transport",title:"Transport Encryption using TLS",sidebar_label:"Transport Encryption using TLS",original_id:"security-tls-transport"},o=void 0,s={unversionedId:"security-tls-transport",id:"version-2.2.0/security-tls-transport",title:"Transport Encryption using TLS",description:"TLS Overview",source:"@site/versioned_docs/version-2.2.0/security-tls-transport.md",sourceDirName:".",slug:"/security-tls-transport",permalink:"/docs/2.2.0/security-tls-transport",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/security-tls-transport.md",tags:[],version:"2.2.0",frontMatter:{id:"security-tls-transport",title:"Transport Encryption using TLS",sidebar_label:"Transport Encryption using TLS",original_id:"security-tls-transport"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.2.0/security-overview"},next:{title:"Authentication using TLS",permalink:"/docs/2.2.0/security-tls-authentication"}},l={},c=[{value:"TLS Overview",id:"tls-overview",level:2},{value:"TLS concepts",id:"tls-concepts",level:2},{value:"Creating TLS Certificates",id:"creating-tls-certificates",level:2},{value:"Certificate authority",id:"certificate-authority",level:3},{value:"Server certificate",id:"server-certificate",level:3},{value:"Broker Configuration",id:"broker-configuration",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Hostname verification",id:"hostname-verification",level:3},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:4},{value:"Python client",id:"python-client",level:4},{value:"C++ client",id:"c-client",level:4}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"tls-overview"},"TLS Overview"),(0,a.yg)("p",null,"By default, Apache Pulsar clients communicate with the Apache Pulsar service in plain text, which means that all data is sent in the clear. TLS can be used to encrypt this traffic so that it cannot be snooped by a man-in-the-middle attacker."),(0,a.yg)("p",null,"TLS can be configured for both encryption and authentication. You may configure just TLS transport encryption, which is covered in this guide. TLS authentication is covered ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/security-tls-authentication"},"elsewhere"),". Alternatively, you can use ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/security-athenz"},"another authentication mechanism")," on top of TLS transport encryption."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note that enabling TLS may have a performance impact due to encryption overhead.")),(0,a.yg)("h2",{id:"tls-concepts"},"TLS concepts"),(0,a.yg)("p",null,"TLS is a form of ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"public key cryptography"),". Encryption is performed using key pairs consisting of a public key and a private key. Messages are encrypted with the public key and can be decrypted with the private key."),(0,a.yg)("p",null,"To use TLS transport encryption, you need two kinds of key pairs, ",(0,a.yg)("strong",{parentName:"p"},"server key pairs")," and a ",(0,a.yg)("strong",{parentName:"p"},"certificate authority"),"."),(0,a.yg)("p",null,"A third kind of key pair, ",(0,a.yg)("strong",{parentName:"p"},"client key pairs"),", are used for ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/security-tls-authentication"},"client authentication"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"certificate authority")," private key should be stored in a very secure location (a fully encrypted, disconnected, air gapped computer). The certificate authority public key, the ",(0,a.yg)("strong",{parentName:"p"},"trust cert"),", can be freely shared."),(0,a.yg)("p",null,"For both client and server key pairs, the administrator first generates a private key and a certificate request. Then the certificate authority private key is used to sign the certificate request, generating a certificate. This certificate is the public key for the server/client key pair."),(0,a.yg)("p",null,"For TLS transport encryption, the clients can use the ",(0,a.yg)("strong",{parentName:"p"},"trust cert")," to verify that the server they are talking to has a key pair that was signed by the certificate authority. A man-in-the-middle attacker would not have access to the certificate authority, so they couldn't create a server with such a key pair."),(0,a.yg)("p",null,"For TLS authentication, the server uses the ",(0,a.yg)("strong",{parentName:"p"},"trust cert")," to verify that the client has a key pair that was signed by the certificate authority. The Common Name of the ",(0,a.yg)("strong",{parentName:"p"},"client cert")," is then used as the client's role token (see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/security-overview"},"Overview"),")."),(0,a.yg)("h2",{id:"creating-tls-certificates"},"Creating TLS Certificates"),(0,a.yg)("p",null,"Creating TLS certificates for Pulsar involves creating a ",(0,a.yg)("a",{parentName:"p",href:"#certificate-authority"},"certificate authority")," (CA), ",(0,a.yg)("a",{parentName:"p",href:"#server-certificate"},"server certificate"),", and ",(0,a.yg)("a",{parentName:"p",href:"#client-certificate"},"client certificate"),"."),(0,a.yg)("p",null,"The following guide is an abridged guide to setting up a certificate authority. For a more detailed guide, there are plenty of resource on the internet. We recommend the ",(0,a.yg)("a",{parentName:"p",href:"https://jamielinux.com/docs/openssl-certificate-authority/index.html"},"this guide"),"."),(0,a.yg)("h3",{id:"certificate-authority"},"Certificate authority"),(0,a.yg)("p",null,"The first step is to create the certificate for the CA. The CA will be used to sign both the broker and client certificates, in order to ensure that each party will trust the others. The CA should be stored in a very secure location (ideally completely disconnected from networks, air gapped, and fully encrypted)."),(0,a.yg)("p",null,"Create a directory for your CA, and place ",(0,a.yg)("a",{parentName:"p",href:"pathname:///examples/openssl.cnf"},"this openssl configuration file")," in the directory. You may want to modify the default answers for company name and department in the configuration file. Export the location of the CA directory to the environment variable, CA_HOME. The configuration file uses this environment variable to find the rest of the files and directories needed for the CA."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nmkdir my-ca\ncd my-ca\nwget https://pulsar.apache.org/examples/openssl.cnf\nexport CA_HOME=$(pwd)\n\n")),(0,a.yg)("p",null,"Create the necessary directories, keys and certs."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nmkdir certs crl newcerts private\nchmod 700 private/\ntouch index.txt\necho 1000 > serial\nopenssl genrsa -aes256 -out private/ca.key.pem 4096\nchmod 400 private/ca.key.pem\nopenssl req -config openssl.cnf -key private/ca.key.pem \\\n    -new -x509 -days 7300 -sha256 -extensions v3_ca \\\n    -out certs/ca.cert.pem\nchmod 444 certs/ca.cert.pem\n\n")),(0,a.yg)("p",null,"After answering the question prompts, this will store CA-related files in the ",(0,a.yg)("inlineCode",{parentName:"p"},"./my-ca")," directory. Within that directory:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"certs/ca.cert.pem")," is the public certificate. It is meant to be distributed to all parties involved."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"private/ca.key.pem")," is the private key. This is only needed when signing a new certificate for either broker or clients and it must be safely guarded.")),(0,a.yg)("h3",{id:"server-certificate"},"Server certificate"),(0,a.yg)("p",null,"Once a CA certificate has been created, you can create certificate requests and sign them with the CA."),(0,a.yg)("p",null,"The following commands will ask you a few questions and then create the certificates. When asked for the common name, you should match the hostname of the broker. You could also use a wildcard to match a group of broker hostnames, for example ",(0,a.yg)("inlineCode",{parentName:"p"},"*.broker.usw.example.com"),". This ensures that the same certificate can be reused on multiple machines."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Sometimes it is not possible or makes no sense to match the hostname,\nsuch as when the brokers are created with random hostnames, or you\nplan to connect to the hosts via their IP. In this case, the client\nshould be configured to disable TLS hostname verification. For more\ndetails, see ",(0,a.yg)("a",{parentName:"p",href:"#hostname-verification"},"the host verification section in client configuration"),".")),(0,a.yg)("p",null,"First generate the key."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nopenssl genrsa -out broker.key.pem 2048\n\n")),(0,a.yg)("p",null,"The broker expects the key to be in ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PKCS_8"},"PKCS 8")," format, so convert it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nopenssl pkcs8 -topk8 -inform PEM -outform PEM \\\n    -in broker.key.pem -out broker.key-pk8.pem -nocrypt\n\n")),(0,a.yg)("p",null,"Generate the certificate request..."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nopenssl req -config openssl.cnf \\\n    -key broker.key.pem -new -sha256 -out broker.csr.pem\n\n")),(0,a.yg)("p",null,"... and sign it with the certificate authority."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\nopenssl ca -config openssl.cnf -extensions server_cert \\\n    -days 1000 -notext -md sha256 \\\n    -in broker.csr.pem -out broker.cert.pem\n\n")),(0,a.yg)("p",null,"At this point, you have a cert, ",(0,a.yg)("inlineCode",{parentName:"p"},"broker.cert.pem"),", and a key, ",(0,a.yg)("inlineCode",{parentName:"p"},"broker.key-pk8.pem"),", which can be used along with ",(0,a.yg)("inlineCode",{parentName:"p"},"ca.cert.pem")," to configure TLS transport encryption for your broker and proxy nodes."),(0,a.yg)("h2",{id:"broker-configuration"},"Broker Configuration"),(0,a.yg)("p",null,"To configure a Pulsar ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-terminology#broker"},"broker")," to use TLS transport encryption, you'll need to make some changes to ",(0,a.yg)("inlineCode",{parentName:"p"},"broker.conf"),", which is located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf")," directory of your ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/getting-started-standalone"},"Pulsar installation"),"."),(0,a.yg)("p",null,"Add these values to the configuration file (substituting the appropriate certificate paths where necessary):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"\ntlsEnabled=true\ntlsCertificateFilePath=/path/to/broker.cert.pem\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"A full list of parameters available in the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/broker.conf")," file,\nas well as the default values for those parameters, can be found in ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-configuration#broker"},"Broker Configuration"))),(0,a.yg)("h2",{id:"proxy-configuration"},"Proxy Configuration"),(0,a.yg)("p",null,"Proxies need to configure TLS in two directions, for clients connecting to the proxy, and for the proxy to be able to connect to brokers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"\n# For clients connecting to the proxy\ntlsEnabledInProxy=true\ntlsCertificateFilePath=/path/to/broker.cert.pem\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n\n# For the proxy to connect to brokers\ntlsEnabledWithBroker=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\n\n")),(0,a.yg)("h2",{id:"client-configuration"},"Client configuration"),(0,a.yg)("p",null,"When TLS transport encryption is enabled, you need to configure the client to use ",(0,a.yg)("inlineCode",{parentName:"p"},"https://")," and port 8443 for the web service URL, and ",(0,a.yg)("inlineCode",{parentName:"p"},"pulsar+ssl://")," and port 6651 for the broker service URL."),(0,a.yg)("p",null,"As the server certificate you generated above doesn't belong to any of the default trust chains, you also need to either specify the path the ",(0,a.yg)("strong",{parentName:"p"},"trust cert")," (recommended), or tell the client to allow untrusted server certs."),(0,a.yg)("h3",{id:"hostname-verification"},"Hostname verification"),(0,a.yg)("p",null,'Hostname verification is a TLS security feature whereby a client can refuse to connect to a server if the "CommonName" does not match the hostname to which it is connecting. By default, Pulsar clients disable hostname verification, as it requires that each broker has a DNS record and a unique cert.'),(0,a.yg)("p",null,'Moreover, as the administrator has full control of the certificate authority, it is unlikely that a bad actor would be able to pull off a man-in-the-middle attack. "allowInsecureConnection" allows the client to connect to servers whose cert has not been signed by an approved CA. The client disables it by default, and should always be disabled in production environments. As long as "allowInsecureConnection" is disabled, a man-in-the-middle attack would require that the attacker has access to the CA.'),(0,a.yg)("p",null,'One scenario where you may want to enable hostname verification is where you have multiple proxy nodes behind a VIP, and the VIP has a DNS record, for example, pulsar.mycompany.com. In this case, you can generate a TLS cert with pulsar.mycompany.com as the "CommonName," and then enable hostname verification on the client.'),(0,a.yg)("p",null,"The examples below show hostname verification being disabled for the Java client, though you can be omit this as the client disables it by default. C++/python clients do now allow this to be configured at the moment."),(0,a.yg)("h3",{id:"cli-tools"},"CLI tools"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools"},"Command-line tools")," like ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools#pulsar-admin"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools#pulsar-perf"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.2.0/reference-cli-tools#pulsar-client"},(0,a.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,a.yg)("p",null,"You'll need to add the following parameters to that file to use TLS transport with Pulsar's CLI tools:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\ntlsEnableHostnameVerification=false\n\n")),(0,a.yg)("h4",{id:"java-client"},"Java client"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .enableTlsHostnameVerification(false) // false by default, in any case\n    .allowTlsInsecureConnection(false) // false by default, in any case\n    .build();\n\n')),(0,a.yg)("h4",{id:"python-client"},"Python client"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Client\n\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_hostname_verification=True,\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False) // defaults to false from v2.2.0 onwards\n\n')),(0,a.yg)("h4",{id:"c-client"},"C++ client"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c++"},"\n#include <pulsar/Client.h>\n\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);  // shouldn't be needed soon\nconfig.setTlsTrustCertsFilePath(caPath);\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(clientPublicKeyPath, clientPrivateKeyPath));\nconfig.setValidateHostName(true);\n\n")))}h.isMDXComponent=!0}}]);