"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[73571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(y,s(s({ref:t},c),{},{components:r})):o.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy"},s=void 0,i={unversionedId:"administration-proxy",id:"administration-proxy",title:"Pulsar proxy",description:"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.",source:"@site/docs/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/docs/next/administration-proxy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-proxy.md",tags:[],version:"current",frontMatter:{id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy"},sidebar:"docsSidebar",previous:{title:"Pulsar Shell",permalink:"/docs/next/administration-pulsar-shell"},next:{title:"Anti-affinity namespaces",permalink:"/docs/next/administration-anti-affinity-namespaces"}},l={},p=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Use broker URLs",id:"use-broker-urls",level:3},{value:"Use service discovery",id:"use-service-discovery",level:3},{value:"Restricting target broker addresses to mitigate CVE-2022-24280",id:"restricting-target-broker-addresses-to-mitigate-cve-2022-24280",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, you can run Pulsar proxy."),(0,n.kt)("p",null,"The Pulsar proxy is not intended to be exposed on the public internet. The security considerations in the current design expect network perimeter security. The requirement of network perimeter security can be achieved with private networks."),(0,n.kt)("p",null,"If a proxy deployment cannot be protected with network perimeter security, the alternative would be to use ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-proxy-sni-routing"},'Pulsar\'s "Proxy SNI routing" feature')," with a properly secured and audited solution. In that case Pulsar proxy component is not used at all."),(0,n.kt)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,n.kt)("p",null,"Before using a proxy, you need to configure it with a broker's address in the cluster. You can configure the broker URL in the proxy configuration, or the proxy to connect directly using service discovery."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In a production environment service discovery is not recommended.")),(0,n.kt)("h3",{id:"use-broker-urls"},"Use broker URLs"),(0,n.kt)("p",null,"It is more secure to specify a URL to connect to the brokers."),(0,n.kt)("p",null,"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."),(0,n.kt)("p",null,"You can configure the broker URLs in ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"brokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n")),(0,n.kt)("p",null,"If you use TLS, configure the broker URLs in the following way:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"brokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n")),(0,n.kt)("p",null,"The hostname in the URLs provided should be a DNS entry that points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."),(0,n.kt)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,n.kt)("p",null,"Note that if you do not use functions, you do not need to configure ",(0,n.kt)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,n.kt)("h3",{id:"use-service-discovery"},"Use service discovery"),(0,n.kt)("p",null,"Pulsar uses ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"metadataStoreUrl=my-zk-0:2181,my-zk-1:2181,my-zk-2:2181\nconfigurationMetadataStoreUrl=my-zk-0:2184,my-zk-remote:2184\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,n.kt)("inlineCode",{parentName:"p"},"2181"),") and the configuration store client port (port ",(0,n.kt)("inlineCode",{parentName:"p"},"2184"),").")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper.")),(0,n.kt)("h3",{id:"restricting-target-broker-addresses-to-mitigate-cve-2022-24280"},"Restricting target broker addresses to mitigate CVE-2022-24280"),(0,n.kt)("p",null,"The Pulsar Proxy trusts clients to provide valid target broker addresses to connect to.\nUnless the Pulsar Proxy is explicitly configured to limit access, the Pulsar Proxy is vulnerable as described in the security advisory ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/CVE-2022-24280"},"Apache Pulsar Proxy target broker address isn't validated (CVE-2022-24280)"),"."),(0,n.kt)("p",null,"It is necessary to limit proxied broker connections to known broker addresses by specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedHostNames")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedIPAddresses")," settings."),(0,n.kt)("p",null,"When specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedHostNames"),", it's possible to use a wildcard.\nPlease notice that ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," is a wildcard that matches any character in the hostname. It also matches dot ",(0,n.kt)("inlineCode",{parentName:"p"},".")," characters."),(0,n.kt)("p",null,"It is recommended to use a pattern that matches only the desired brokers and no other hosts in the local network. Pulsar lookups will use the default host name of the broker by default. This can be overridden with the ",(0,n.kt)("inlineCode",{parentName:"p"},"advertisedAddress")," setting in ",(0,n.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,n.kt)("p",null,"To increase security, it is also possible to restrict access with the ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedIPAddresses")," setting. It is not mandatory to configure ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedIPAddresses")," when ",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedHostNames")," is properly configured so that the pattern matches only the target brokers.\n",(0,n.kt)("inlineCode",{parentName:"p"},"brokerProxyAllowedIPAddresses")," setting supports a comma separate list of IP address, IP address ranges and IP address networks ",(0,n.kt)("a",{parentName:"p",href:"https://seancfoley.github.io/IPAddress/IPAddress/apidocs/inet/ipaddr/IPAddressString.html"},"(supported format reference)"),"."),(0,n.kt)("p",null,"Example: limiting by host name in a Kubernetes deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  # example of limiting to Kubernetes statefulset hostnames that contain \"broker-\"\n  PULSAR_PREFIX_brokerProxyAllowedHostNames: '*broker-*.*.*.svc.cluster.local'\n")),(0,n.kt)("p",null,"Example: limiting by both host name and ip address in a ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy.conf")," file for host deployment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},'# require "broker" in host name\nbrokerProxyAllowedHostNames=*broker*.localdomain\n# limit target ip addresses to a specific network\nbrokerProxyAllowedIPAddresses=10.0.0.0/8\n')),(0,n.kt)("p",null,"Example: limiting by multiple host name patterns and multiple ip address ranges in a ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy.conf")," file for host deployment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},'# require "broker" in host name\nbrokerProxyAllowedHostNames=*broker*.localdomain,*broker*.otherdomain\n# limit target ip addresses to a specific network or range demonstrating multiple supported formats\nbrokerProxyAllowedIPAddresses=10.10.0.0/16,192.168.1.100-120,172.16.2.*,10.1.2.3\n')),(0,n.kt)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,n.kt)("p",null,"To start the proxy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/pulsar/directory\nbin/pulsar proxy \\\n    --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n    --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can run multiple instances of the Pulsar proxy in a cluster.")),(0,n.kt)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,n.kt)("p",null,"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."),(0,n.kt)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,n.kt)("p",null,"You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,n.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,n.kt)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,n.kt)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,n.kt)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, the connection URL for clients is ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,n.kt)("p",null,"For more information on Proxy configuration, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#pulsar-proxy"},"Pulsar proxy"),"."))}d.isMDXComponent=!0}}]);