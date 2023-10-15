"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",description:"Get a comprehensive understanding of authentication and authorization in Pulsar."},i=void 0,s={unversionedId:"security-authorization",id:"security-authorization",title:"Authentication and authorization in Pulsar",description:"Get a comprehensive understanding of authentication and authorization in Pulsar.",source:"@site/docs/security-authorization.md",sourceDirName:".",slug:"/security-authorization",permalink:"/docs/next/security-authorization",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/security-authorization.md",tags:[],version:"current",frontMatter:{id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",description:"Get a comprehensive understanding of authentication and authorization in Pulsar."},sidebar:"docsSidebar",previous:{title:"Authentication using HTTP basic",permalink:"/docs/next/security-basic-auth"},next:{title:"Extend Authentication and Authorization",permalink:"/docs/next/security-extending"}},l={},u=[{value:"Broker and Proxy Setup",id:"broker-and-proxy-setup",level:2},{value:"Enable authorization and assign superusers",id:"enable-authorization-and-assign-superusers",level:3},{value:"Proxy Roles",id:"proxy-roles",level:3},{value:"Administer tenants",id:"administer-tenants",level:2},{value:"Create a new tenant",id:"create-a-new-tenant",level:3},{value:"Manage permissions",id:"manage-permissions",level:3},{value:"Pulsar admin authentication",id:"pulsar-admin-authentication",level:3},{value:"Authorize an authenticated client with multiple roles",id:"authorize-an-authenticated-client-with-multiple-roles",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Pulsar, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/security-overview#authentication"},"authentication provider")," is responsible for properly identifying clients and associating the clients with role tokens. If you only enable authentication, an authenticated role token can access all resources in the cluster. ",(0,r.kt)("em",{parentName:"p"},"Authorization")," is the process that determines ",(0,r.kt)("em",{parentName:"p"},"what")," clients can do."),(0,r.kt)("p",null,"The role tokens with the most privileges are the ",(0,r.kt)("em",{parentName:"p"},"superusers"),". The ",(0,r.kt)("em",{parentName:"p"},"superusers")," can create and destroy tenants, along with having full access to all tenant resources."),(0,r.kt)("p",null,"When a superuser creates a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#tenant"},"tenant"),", that tenant is assigned an admin role. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to ",(0,r.kt)("em",{parentName:"p"},"other role tokens")," on those namespaces."),(0,r.kt)("h2",{id:"broker-and-proxy-setup"},"Broker and Proxy Setup"),(0,r.kt)("h3",{id:"enable-authorization-and-assign-superusers"},"Enable authorization and assign superusers"),(0,r.kt)("p",null,"You can enable the authorization and assign the superusers in the broker (",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#broker"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/broker.conf"))," or ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf"),") configuration files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"authorizationEnabled=true\nsuperUserRoles=broker_client,admin,proxy,<custom-super-user-1>,<custom-super-user-2>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A full list of parameters is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file.\nYou can also find the default values for those parameters in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration"},"Broker Configuration"),".")),(0,r.kt)("p",null,"Typically, you use superuser roles for administrators, clients as well as broker-to-broker authorization. When you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/concepts-replication"},"geo-replication"),", every broker needs to be able to publish to all the other topics of clusters."),(0,r.kt)("p",null,"You can also enable the authorization for the proxy in the proxy configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"). Once you enable the authorization on the proxy, the proxy does an additional authorization check before forwarding the request to a broker.\nIf you enable authorization on the broker, the broker checks the authorization of the request when the broker receives the forwarded request."),(0,r.kt)("h3",{id:"proxy-roles"},"Proxy Roles"),(0,r.kt)("p",null,"By default, the broker treats the connection between a proxy and the broker as a normal user connection. The broker authenticates the user as the role configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.conf")," (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/security-tls-authentication#enable-mtls-authentication-on-proxies"},"Enable mTLS authentication on proxies"),"). However, when the user connects to the cluster through a proxy, the user rarely requires authentication. The user expects to be able to interact with the cluster as the role for which they have authenticated with the proxy."),(0,r.kt)("p",null,"Pulsar uses ",(0,r.kt)("em",{parentName:"p"},"Proxy roles")," to enable the authentication. Proxy roles are specified in the broker configuration file, ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/broker.conf")),". If a client that is authenticated with a broker is one of its ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyRoles"),", all requests from that client must also carry information about the role of the client that is authenticated with the proxy. This information is called the ",(0,r.kt)("em",{parentName:"p"},"original principal"),". If the ",(0,r.kt)("em",{parentName:"p"},"original principal")," is absent, the client is not able to access anything."),(0,r.kt)("p",null,"Note that if a Proxy is not correctly configured to use a role that is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxyRoles"),", the connection will get rejected."),(0,r.kt)("p",null,"You must authorize both the ",(0,r.kt)("em",{parentName:"p"},"proxy role")," and the ",(0,r.kt)("em",{parentName:"p"},"original principal")," to access a resource to ensure that the resource is accessible via the proxy. Administrators can take two approaches to authorize the ",(0,r.kt)("em",{parentName:"p"},"proxy role")," and the ",(0,r.kt)("em",{parentName:"p"},"original principal"),"."),(0,r.kt)("p",null,"The more secure approach is to grant access to the proxy roles each time you grant access to a resource. For example, if you have a proxy role named ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy1"),", when the superuser creates a tenant, you should specify ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy1")," as one of the admin roles. When a role is granted permission to produce or consume from a namespace, if that client wants to produce or consume through a proxy, you should also grant ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy1")," the same permissions."),(0,r.kt)("p",null,"Another approach is to make the proxy role a superuser. This allows the proxy to access all resources. The client still needs to authenticate with the proxy, and all requests made through the proxy have their role downgraded to the ",(0,r.kt)("em",{parentName:"p"},"original principal")," of the authenticated client. However, if the proxy is compromised, a bad actor could get full access to your cluster."),(0,r.kt)("p",null,"You can specify the roles as proxy roles in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration#broker"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/broker.conf")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"proxyRoles=proxy,<my-proxy-role>\n")),(0,r.kt)("h2",{id:"administer-tenants"},"Administer tenants"),(0,r.kt)("p",null,"Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance")," administrators or some kind of self-service portal typically provisions a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#tenant"},"tenant"),"."),(0,r.kt)("p",null,"You can manage tenants using the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool."),(0,r.kt)("h3",{id:"create-a-new-tenant"},"Create a new tenant"),(0,r.kt)("p",null,"You can create a new tenant using the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin tenants create my-tenant \\\n    --admin-roles my-admin-role \\\n    --allowed-clusters us-west,us-east\n")),(0,r.kt)("p",null,"This command creates a new tenant ",(0,r.kt)("inlineCode",{parentName:"p"},"my-tenant")," that is allowed to use the clusters ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",null,"A client that successfully identifies itself as having the role ",(0,r.kt)("inlineCode",{parentName:"p"},"my-admin-role")," is allowed to perform all administrative tasks on this tenant."),(0,r.kt)("p",null,"The structure of topic names in Pulsar reflects the hierarchy between tenants, clusters, and namespaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"persistent://tenant/namespace/topic\n")),(0,r.kt)("h3",{id:"manage-permissions"},"Manage permissions"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-permissions"},"Pulsar Admin Tools")," for managing permission in Pulsar."),(0,r.kt)("h3",{id:"pulsar-admin-authentication"},"Pulsar admin authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("http://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .build();\n')),(0,r.kt)("p",null,"To use TLS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("https://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .tlsTrustCertsFilePath("/path/to/trust/cert")\n                    .build();\n')),(0,r.kt)("h2",{id:"authorize-an-authenticated-client-with-multiple-roles"},"Authorize an authenticated client with multiple roles"),(0,r.kt)("p",null,"When a client is identified with multiple roles in a token (the type of role claim in the token is an array) during the authentication process, Pulsar supports checking the permissions of all the roles and further authorizing the client as long as one of its roles has the required permissions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This authorization method is only compatible with ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/security-jwt"},"JWT authentication"),".")),(0,r.kt)("p",null,"To enable this authorization method, configure the authorization provider as ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiRolesTokenAuthorizationProvider")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.MultiRolesTokenAuthorizationProvider\n")))}h.isMDXComponent=!0}}]);