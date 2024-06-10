"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5865],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>c});var r=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),s=function(e){var a=r.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=t,c=g["".concat(p,".").concat(d)]||g[d]||m[d]||o;return n?r.createElement(c,i(i({ref:a},u),{},{components:n})):r.createElement(c,i({ref:a},u))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[g]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91071:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),t=(n(96540),n(15680));const o={id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager",original_id:"administration-pulsar-manager"},i=void 0,l={unversionedId:"administration-pulsar-manager",id:"version-2.7.0/administration-pulsar-manager",title:"Pulsar Manager",description:"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments.",source:"@site/versioned_docs/version-2.7.0/administration-pulsar-manager.md",sourceDirName:".",slug:"/administration-pulsar-manager",permalink:"/docs/2.7.0/administration-pulsar-manager",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/administration-pulsar-manager.md",tags:[],version:"2.7.0",frontMatter:{id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager",original_id:"administration-pulsar-manager"},sidebar:"version-2.7.0/docsSidebar",previous:{title:"Geo-replication",permalink:"/docs/2.7.0/administration-geo"},next:{title:"Pulsar statistics",permalink:"/docs/2.7.0/administration-stats"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Set administrator account and password",id:"set-administrator-account-and-password",level:3},{value:"Use custom databases",id:"use-custom-databases",level:3},{value:"Enable JWT authentication",id:"enable-jwt-authentication",level:3},{value:"Log in",id:"log-in",level:2}],u={toc:s},g="wrapper";function m(e){let{components:a,...n}=e;return(0,t.yg)(g,(0,r.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"If you monitor your current stats with Pulsar dashboard, you can try to use Pulsar Manager instead. Pulsar dashboard is deprecated.")),(0,t.yg)("h2",{id:"install"},"Install"),(0,t.yg)("p",null,"The easiest way to use the Pulsar Manager is to run it inside a Docker container."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SPRING_CONFIGURATION_FILE"),": Default configuration file for spring.")),(0,t.yg)("h3",{id:"set-administrator-account-and-password"},"Set administrator account and password"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'\nCSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)\ncurl \\\n    -H \'X-XSRF-TOKEN: $CSRF_TOKEN\' \\\n    -H \'Cookie: XSRF-TOKEN=$CSRF_TOKEN;\' \\\n    -H "Content-Type: application/json" \\\n    -X PUT http://localhost:7750/pulsar-manager/users/superuser \\\n    -d \'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\'\n\n')),(0,t.yg)("p",null,"You can find the docker image in the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/tree/master/docker"},"Docker Hub")," directory and build an image from the source code as well:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\ngit clone https://github.com/apache/pulsar-manager\ncd pulsar-manager/front-end\nnpm install --save\nnpm run build:prod\ncd ..\n./gradlew build -x test\ncd ..\ndocker build -f docker/Dockerfile --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` --build-arg VCS_REF=`latest` --build-arg VERSION=`latest` -t apachepulsar/pulsar-manager .\n\n')),(0,t.yg)("h3",{id:"use-custom-databases"},"Use custom databases"),(0,t.yg)("p",null,"If you have a large amount of data, you can use a custom database. The following is an example of PostgreSQL."),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Initialize database and table structures using the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/tree/master/src/main/resources/META-INF/sql/postgresql-schema.sql"},"file"),".")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Modify the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/application.properties"},"configuration file")," and add PostgreSQL configuration."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nspring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pulsar_manager\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"Compile to generate a new executable jar package.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\n./gradlew build -x test\n\n")),(0,t.yg)("h3",{id:"enable-jwt-authentication"},"Enable JWT authentication"),(0,t.yg)("p",null,"If you want to turn on JWT authentication, configure the following parameters:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"backend.jwt.token"),": token for the superuser. You need to configure this parameter during cluster initialization."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"jwt.broker.token.mode"),": multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"jwt.broker.public.key"),": configure this option if you use the PUBLIC mode."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"jwt.broker.private.key"),": configure this option if you use the PRIVATE mode."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"jwt.broker.secret.key"),": configure this option if you use the SECRET mode.")),(0,t.yg)("p",null,"For more information, see ",(0,t.yg)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/security-token-admin/"},"Token Authentication Admin of Pulsar"),"."),(0,t.yg)("p",null,"If you want to enable JWT authentication, use one of the following methods."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Method 1: use command-line tool")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nwget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.2.0/apache-pulsar-manager-0.2.0-bin.tar.gz\ntar -zxvf apache-pulsar-manager-0.2.0-bin.tar.gz\ncd pulsar-manager\ntar -zxvf pulsar-manager.tar\ncd pulsar-manager\ncp -r ../dist ui\n./bin/pulsar-manager --redirect.host=http://localhost --redirect.port=9527 insert.stats.interval=600000 --backend.jwt.token=token --jwt.broker.token.mode=PRIVATE --jwt.broker.private.key=file:///path/broker-private.key --jwt.broker.public.key=file:///path/broker-public.key\n\n")),(0,t.yg)("p",null,"Firstly, ",(0,t.yg)("a",{parentName:"p",href:"#set-administrator-account-and-password"},"set the administrator account and password")),(0,t.yg)("p",null,"Secondly, log in to Pulsar manager through http://localhost:7750/ui/index.html."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Method 2: configure the application.properties file")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nbackend.jwt.token=token\n\njwt.broker.token.mode=PRIVATE\njwt.broker.public.key=file:///path/broker-public.key\njwt.broker.private.key=file:///path/broker-private.key\n\nor\njwt.broker.token.mode=SECRET\njwt.broker.secret.key=file:///path/broker-secret.key\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Method 3: use Docker and enable token authentication.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nexport JWT_TOKEN=\"your-token\"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL='jdbc:postgresql://127.0.0.1:5432/pulsar_manager' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -v $PWD:/data apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"JWT_TOKEN"),": the token of superuser configured for the broker. It is generated by the  ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create --secret-key")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create --private-key")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_HOST"),": the IP address of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_PORT"),": the port of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"DRIVER_CLASS_NAME"),": the driver class name of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"URL"),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"USERNAME"),": the username of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PASSWORD"),": the password of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"LOG_LEVEL"),": the level of log.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Method 4: use Docker and turn on ",(0,t.yg)("strong",{parentName:"p"},"token authentication")," and ",(0,t.yg)("strong",{parentName:"p"},"token management")," by private key and public key."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\nexport JWT_TOKEN="your-token"\nexport PRIVATE_KEY="file:///pulsar-manager/secret/my-private.key"\nexport PUBLIC_KEY="file:///pulsar-manager/secret/my-public.key"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL=\'jdbc:postgresql://127.0.0.1:5432/pulsar_manager\' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -e PRIVATE_KEY=$PRIVATE_KEY -e PUBLIC_KEY=$PUBLIC_KEY -v $PWD:/data -v $PWD/secret:/pulsar-manager/secret apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"JWT_TOKEN"),": the token of superuser configured for the broker. It is generated by the ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create --private-key")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),": private key path mounted in container, generated by ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create-key-pair")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PUBLIC_KEY"),": public key path mounted in container, generated by ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create-key-pair")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"$PWD/secret"),": the folder where the private key and public key generated by the ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create-key-pair")," command are placed locally")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_HOST"),": the IP address of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_PORT"),": the port of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"DRIVER_CLASS_NAME"),": the driver class name of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"URL"),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"USERNAME"),": the username of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PASSWORD"),": the password of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"LOG_LEVEL"),": the level of log.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Method 5: use Docker and turn on ",(0,t.yg)("strong",{parentName:"p"},"token authentication")," and ",(0,t.yg)("strong",{parentName:"p"},"token management")," by secret key."))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'\nexport JWT_TOKEN="your-token"\nexport SECRET_KEY="file:///pulsar-manager/secret/my-secret.key"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL=\'jdbc:postgresql://127.0.0.1:5432/pulsar_manager\' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -e SECRET_KEY=$SECRET_KEY -v $PWD:/data -v $PWD/secret:/pulsar-manager/secret apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"JWT_TOKEN"),": the token of superuser configured for the broker. It is generated by the ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create --secret-key")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"SECRET_KEY"),": secret key path mounted in container, generated by ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create-secret-key")," command.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"$PWD/secret"),": the folder where the secret key generated by the ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/pulsar tokens create-secret-key")," command are placed locally")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_HOST"),": the IP address of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"REDIRECT_PORT"),": the port of the front-end server.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"DRIVER_CLASS_NAME"),": the driver class name of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"URL"),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"USERNAME"),": the username of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"PASSWORD"),": the password of PostgreSQL.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"LOG_LEVEL"),": the level of log.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For more information about backend configurations, see ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/blob/master/src/README"},"here"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For more information about frontend configurations, see ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/tree/master/front-end"},"here"),"."))),(0,t.yg)("h2",{id:"log-in"},"Log in"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"#set-administrator-account-and-password"},"Set the administrator account and password"),"."),(0,t.yg)("p",null,"Visit http://localhost:9527 to log in."))}m.isMDXComponent=!0}}]);