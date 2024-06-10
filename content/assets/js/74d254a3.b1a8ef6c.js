"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13823],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>y});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,y=c["".concat(l,".").concat(d)]||c[d]||g[d]||i;return n?t.createElement(y,s(s({ref:r},p),{},{components:n})):t.createElement(y,s({ref:r},p))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(58168),o=(n(96540),n(15680));const i={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},s=void 0,a={unversionedId:"concepts-proxy-sni-routing",id:"version-2.6.3/concepts-proxy-sni-routing",title:"Proxy support with SNI routing",description:"Pulsar Proxy with SNI routing",source:"@site/versioned_docs/version-2.6.3/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/docs/2.6.3/concepts-proxy-sni-routing",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/concepts-proxy-sni-routing.md",tags:[],version:"2.6.3",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Tiered Storage",permalink:"/docs/2.6.3/concepts-tiered-storage"},next:{title:"Multiple advertised listeners",permalink:"/docs/2.6.3/concepts-multiple-advertised-listeners"}},l={},u=[{value:"Pulsar Proxy with SNI routing",id:"pulsar-proxy-with-sni-routing",level:2},{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:3},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:4},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:4},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:4}],p={toc:u},c="wrapper";function g(e){let{components:r,...i}=e;return(0,o.yg)(c,(0,t.A)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"pulsar-proxy-with-sni-routing"},"Pulsar Proxy with SNI routing"),(0,o.yg)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,o.yg)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.yg)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,o.yg)("p",null,"Pulsar clients support ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,o.yg)("h3",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,o.yg)("p",null,"To support ",(0,o.yg)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,o.yg)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,o.yg)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."),(0,o.yg)("h4",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,o.yg)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Pulsar client SNI",src:n(12527).A,width:"1518",height:"974"})),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,o.yg)("p",null,"To configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Update TLS port (",(0,o.yg)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,o.yg)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling."),(0,o.yg)("li",{parentName:"ol"},"Configure server ports (",(0,o.yg)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.yg)("inlineCode",{parentName:"li"},"4443")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,o.yg)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,o.yg)("p",null,"The following is an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.yg)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."),(0,o.yg)("p",null,"The following example shows mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where request should be redirected. For example, if the client sends the SNI header ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting request to the ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\nserver_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n\n")),(0,o.yg)("p",null,"After you configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,o.yg)("h4",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,o.yg)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'\nString brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n\n')),(0,o.yg)("h4",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,o.yg)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Pulsar client SNI",src:n(63479).A,width:"1494",height:"598"})),(0,o.yg)("p",null,"In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."),(0,o.yg)("p",null,"(a) Configure the cluster metadata for ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n--url http://east-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://east-ats-proxy:443\n\n")),(0,o.yg)("p",null,"(b) Configure the cluster metadata for ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n--url http://west-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://west-ats-proxy:443\n\n")))}g.isMDXComponent=!0},12527:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},63479:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);