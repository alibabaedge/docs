"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4647],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_label:"CosmWasm Overview"},s="CosmWasm and Rollmint",i={unversionedId:"developers/cosmwasm",id:"developers/cosmwasm",title:"CosmWasm and Rollmint",description:"CosmWasm is a smart contracting platform built for the Cosmos",source:"@site/docs/developers/cosmwasm.md",sourceDirName:"developers",slug:"/developers/cosmwasm",permalink:"/pr-preview/pr-305/developers/cosmwasm",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm Overview"},sidebar:"developers",previous:{title:"CosmWasm",permalink:"/pr-preview/pr-305/category/cosmwasm"},next:{title:"CosmWasm Dependencies",permalink:"/pr-preview/pr-305/developers/cosmwasm-dependency"}},l={},c=[],m={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-and-rollmint"},"CosmWasm and Rollmint"),(0,o.kt)("p",null,"CosmWasm is a smart contracting platform built for the Cosmos\necosystem by making use of WebAssembly (Wasm) to build smart contracts\nfor Cosmos-SDK. In this tutorial, we will be exploring how to integrate\nCosmWasm with Celestia's Data Availability Layer using Rollmint."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'NOTE: This tutorial will explore developing with Rollmint,\nwhich is still in Alpha stage. If you run into bugs, please\nwrite a Github Issue ticket or let us know in our Discord.\nFurthermore, while Rollmint allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollmint currently only supports\na single sequencer.')),(0,o.kt)("p",null,"You can learn more about CosmWasm ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/"},"here"),"."),(0,o.kt)("p",null,"In this tutorial, we will going over the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-305/developers/cosmwasm-dependency"},"Setting up your dependencies for your CosmWasm smart contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-305/developers/cosmwasm-dependency#wasmd-installation"},"Setting up Rollmint on CosmWasm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-305/developers/cosmwasm-environment"},"Instantiate a local network for your CosmWasm chain connected to Celestia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-305/developers/cosmwasm-contract-deployment"},"Deploying a Rust smart contract to CosmWasm chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-305/developers/cosmwasm-contract-interaction"},"Interacting with the smart contract"))),(0,o.kt)("p",null,"The smart contract we will use for this tutorial is one provided by\nthe CosmWasm team for Nameservice purchasing."),(0,o.kt)("p",null,"You can check out the contract ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice"},"here"),"."),(0,o.kt)("p",null,"How to write the Rust smart contract for Nameservice is outside the scope of\nthis tutorial. In the future we will add more tutorials for writing CosmWasm\nsmart contracts for Celestia."))}p.isMDXComponent=!0}}]);