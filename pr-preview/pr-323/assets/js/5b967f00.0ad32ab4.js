"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3743],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=l,k=u["".concat(s,".").concat(y)]||u[y]||c[y]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var r=n(3117),l=(n(7294),n(3905));const i={sidebar_label:"Wallet with Celestia Node"},a="Create A Wallet with Celestia Node",o={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create A Wallet with Celestia Node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.md",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-323/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.md",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with Celestia Node"},sidebar:"developers",previous:{title:"Wallet With Celestia App",permalink:"/pr-preview/pr-323/developers/celestia-app-wallet"},next:{title:"Data Availability API",permalink:"/pr-preview/pr-323/category/data-availability-api"}},s={},p=[{value:"Using the cel-key utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:2},{value:"Generating Bridge Node Keys",id:"generating-bridge-node-keys",level:2},{value:"Generating Full Storage Node Keys",id:"generating-full-storage-node-keys",level:2},{value:"Generating Light Node Keys",id:"generating-light-node-keys",level:2},{value:"Exporting Your Keys",id:"exporting-your-keys",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create A Wallet with Celestia Node"),(0,l.kt)("p",null,"This tutorial will go over using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on Celestia Node."),(0,l.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../nodes/environment"},"Setting Up Your Environment"))),(0,l.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,l.kt)("h2",{id:"using-the-cel-key-utility"},"Using the cel-key utility"),(0,l.kt)("p",null,"Inside the celestia-node repository is a utility called ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,l.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You need to first pull down the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,l.kt)("p",null,"It can be built using either of the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,l.kt)("p",null,"For the purpose of this guide, we will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,l.kt)("h2",{id:"generating-bridge-node-keys"},"Generating Bridge Node Keys"),(0,l.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type bridge\n")),(0,l.kt)("p",null,"This will load the key <key_name> into the directory of the bridge node."),(0,l.kt)("h2",{id:"generating-full-storage-node-keys"},"Generating Full Storage Node Keys"),(0,l.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type full\n")),(0,l.kt)("p",null,"This will load the key <key_name> into the directory of the full node."),(0,l.kt)("h2",{id:"generating-light-node-keys"},"Generating Light Node Keys"),(0,l.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"This will load the key <key_name> into the directory of the light node."),(0,l.kt)("h2",{id:"exporting-your-keys"},"Exporting Your Keys"),(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and\nASCII-armored format."),(0,l.kt)("p",null,"In this command, we demonstrate how to export your key for a light node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"You can then import your key with ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> <key-file-location>\n")))}c.isMDXComponent=!0}}]);