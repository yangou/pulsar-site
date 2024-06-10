"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1304],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,h=p["".concat(u,".").concat(g)]||p[g]||y[g]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},89089:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),u=n(57485),s=n(31682),c=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function y(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=y(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:n,groupId:a}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),m=(()=>{const e=u??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),d(e)}),[s,d,o]),tabValues:o}}var m=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),y=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==l&&(p(t),u(a))},g=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:y},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=d(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(k,(0,a.A)({},e,t)))}function N(e){const t=(0,m.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},83286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(89089),i=n(19365);const l={id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},u=void 0,s={unversionedId:"security-jwt",id:"version-2.6.4/security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",description:"Token authentication overview",source:"@site/versioned_docs/version-2.6.4/security-jwt.md",sourceDirName:".",slug:"/security-jwt",permalink:"/docs/2.6.4/security-jwt",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/security-jwt.md",tags:[],version:"2.6.4",frontMatter:{id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},sidebar:"version-2.6.4/docsSidebar",previous:{title:"Using TLS with KeyStore configure",permalink:"/docs/2.6.4/security-tls-keystore"},next:{title:"Authentication using Athenz",permalink:"/docs/2.6.4/security-athenz"}},c={},p=[{value:"Token authentication overview",id:"token-authentication-overview",level:2},{value:"CLI Tools",id:"cli-tools",level:3},{value:"Pulsar client",id:"pulsar-client",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:2},{value:"Create a secret key",id:"create-a-secret-key",level:3},{value:"Create a key pair",id:"create-a-key-pair",level:3},{value:"Generate tokens",id:"generate-tokens",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Enable token authentication on Brokers",id:"enable-token-authentication-on-brokers",level:3},{value:"Enable token authentication on Proxies",id:"enable-token-authentication-on-proxies",level:3}],y={toc:p},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"token-authentication-overview"},"Token authentication overview"),(0,r.yg)("p",null,"Pulsar supports authenticating clients using security tokens that are based on ",(0,r.yg)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Tokens")," (",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"RFC-7519"),")."),(0,r.yg)("p",null,'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (eg: publish to a topic or consume from a topic).'),(0,r.yg)("p",null,"A user typically gets a token string from the administrator (or some automated service)."),(0,r.yg)("p",null,"The compact representation of a signed JWT is a string that looks like as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.yg)("p",null,'Application specifies the token when you create the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"always-use-tls-transport-encryption"},"Always use TLS transport encryption"),(0,r.yg)("p",{parentName:"blockquote"},"Sending a token is equivalent to sending a password over the wire. You had better use TLS encryption all the time when you connect to the Pulsar service. See\n",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/security-tls-transport"},"Transport Encryption using TLS")," for more details.")),(0,r.yg)("h3",{id:"cli-tools"},"CLI Tools"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/reference-cli-tools"},"Command-line tools")," like ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/reference-cli-tools#pulsar-perf"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/reference-cli-tools#pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.yg)("p",null,"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n")),(0,r.yg)("p",null,"The token string can also be read from a file, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\nauthParams=file:///path/to/token/file\n\n")),(0,r.yg)("h3",{id:"pulsar-client"},"Pulsar client"),(0,r.yg)("p",null,"You can use tokens to authenticate the following Pulsar clients."),(0,r.yg)(o.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\uff09\n    .build();\n\n')),(0,r.yg)("p",null,"Similarly, you can also pass a ",(0,r.yg)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        }))\n    .build();\n\n'))),(0,r.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n")),(0,r.yg)("p",null,"Alternatively, you can also pass a ",(0,r.yg)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n\n"))),(0,r.yg)(i.A,{value:"Go",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n')),(0,r.yg)("p",null,"Similarly, you can also pass a ",(0,r.yg)("inlineCode",{parentName:"p"},"Supplier"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'\nclient, err := NewClient(ClientOptions{\n    URL:            "pulsar://localhost:6650",\n    Authentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n        return readToken()\n    }),\n})\n\n'))),(0,r.yg)(i.A,{value:"C++",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'))),(0,r.yg)(i.A,{value:"C#",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c#"},'\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n                         .Build();\n\n')))),(0,r.yg)("h2",{id:"enable-token-authentication"},"Enable token authentication"),(0,r.yg)("p",null,"On how to enable token authentication on a Pulsar cluster, you can refer to the guide below."),(0,r.yg)("p",null,"JWT supports two different kinds of keys in order to generate and validate the tokens:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Symmetric :",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"You can use a single ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Secret"))," key to generate and validate tokens."))),(0,r.yg)("li",{parentName:"ul"},"Asymmetric: A pair of keys consists of the Private key and the Public key.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"You can use ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Private"))," key to generate tokens."),(0,r.yg)("li",{parentName:"ul"},"You can use ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Public"))," key to validate tokens.")))),(0,r.yg)("h3",{id:"create-a-secret-key"},"Create a secret key"),(0,r.yg)("p",null,"When you use a secret key, the administrator creates the key and uses the key to generate the client tokens. You can also configure this key to brokers in order to validate the clients."),(0,r.yg)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output my-secret.key\n\n")),(0,r.yg)("p",null,"Enter this command to generate base64 encoded private key."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n\n")),(0,r.yg)("h3",{id:"create-a-key-pair"},"Create a key pair"),(0,r.yg)("p",null,"With Public and Private keys, you need to create a pair of keys. Pulsar supports all algorithms that the Java JWT library (shown ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/jwtk/jjwt#signature-algorithms-keys"},"here"),") supports."),(0,r.yg)("p",null,"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Store ",(0,r.yg)("inlineCode",{parentName:"li"},"my-private.key")," in a safe location and only administrator can use ",(0,r.yg)("inlineCode",{parentName:"li"},"my-private.key")," to generate new tokens."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"my-public.key")," is distributed to all Pulsar brokers. You can publicly share this file without any security concern.")),(0,r.yg)("h3",{id:"generate-tokens"},"Generate tokens"),(0,r.yg)("p",null,'A token is the credential associated with a user. The association is done through the "principal" or "role". In the case of JWT tokens, this field is typically referred as ',(0,r.yg)("strong",{parentName:"p"},"subject"),", though they are exactly the same concept."),(0,r.yg)("p",null,"Then, you need to use this command to require the generated token to have a ",(0,r.yg)("strong",{parentName:"p"},"subject")," field set."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n\n")),(0,r.yg)("p",null,"This command prints the token string on stdout."),(0,r.yg)("p",null,'Similarly, you can create a token by passing the "private" key using the command below:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n\n")),(0,r.yg)("p",null,"Finally, you can enter the following command to create a token with a pre-defined TTL. And then the token is automatically invalidated."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n\n")),(0,r.yg)("h3",{id:"authorization"},"Authorization"),(0,r.yg)("p",null,"The token itself does not have any permission associated. The authorization engine determines whether the token should have permissions or not. Once you have created the token, you can grant permission for this token to do certain actions. The following is an example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n            --role test-user \\\n            --actions produce,consume\n\n")),(0,r.yg)("h3",{id:"enable-token-authentication-on-brokers"},"Enable token authentication on Brokers"),(0,r.yg)("p",null,"To configure brokers to authenticate clients, add the following parameters to ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# If using secret key\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private\n# tokenPublicKey=file:///path/to/public.key\n\n")),(0,r.yg)("h3",{id:"enable-token-authentication-on-proxies"},"Enable token authentication on Proxies"),(0,r.yg)("p",null,"To configure proxies to authenticate clients, add the following parameters to ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy.conf"),":"),(0,r.yg)("p",null,"The proxy uses its own token when connecting to brokers. You need to configure the role token for this key pair in the ",(0,r.yg)("inlineCode",{parentName:"p"},"proxyRoles")," of the brokers. For more details, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.6.4/security-authorization"},"authorization guide"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\n\n")))}h.isMDXComponent=!0}}]);