"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(a),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_label:"Build modular"},o="Build modular",r={unversionedId:"developers/build-modular",id:"developers/build-modular",title:"Build modular",description:"This section will explain the advantages of building on",source:"@site/docs/developers/build-modular.md",sourceDirName:"developers",slug:"/developers/build-modular",permalink:"/pr-preview/pr-570/fr/developers/build-modular",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/build-modular.md",tags:[],version:"current",frontMatter:{sidebar_label:"Build modular"},sidebar:"developers",previous:{title:"Overview",permalink:"/pr-preview/pr-570/fr/developers/overview"},next:{title:"Create a Celestia wallet",permalink:"/pr-preview/pr-570/fr/category/create-a-celestia-wallet"}},s={},c=[{value:"Scalability challenges",id:"scalability-challenges",level:2},{value:"Evolution of blockchains",id:"evolution-of-blockchains",level:2},{value:"Modular blockchains",id:"modular-blockchains",level:2},{value:"Scalability",id:"scalability",level:2},{value:"Block size",id:"block-size",level:3},{value:"Specialization",id:"specialization",level:3},{value:"Resource pricing",id:"resource-pricing",level:3},{value:"Shared execution and monolithic blockchains",id:"shared-execution-and-monolithic-blockchains",level:2},{value:"Building on Celestia",id:"building-on-celestia",level:2},{value:"Smart contracts",id:"smart-contracts",level:3},{value:"Sovereign rollups",id:"sovereign-rollups",level:3},{value:"Execution layers",id:"execution-layers",level:3},{value:"Celestiums (Ethereum)",id:"celestiums-ethereum",level:3}],u={toc:c},h="wrapper";function p(e){let{components:t,...l}=e;return(0,i.kt)(h,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-modular"},"Build modular"),(0,i.kt)("p",null,"This section will explain the advantages of building on\nmodular blockchains like Celestia."),(0,i.kt)("h2",{id:"scalability-challenges"},"Scalability challenges"),(0,i.kt)("p",null,"Blockchain architectures as they exist today are inherently\nnot scalable."),(0,i.kt)("p",null,"To scale, blockchains must increase the number of transactions\nthey can process while still remaining performant and decentralized\n(enabling average users to verify the chain)."),(0,i.kt)("p",null,"High and unstable gas costs are also prohibitive for a large number\nof use cases, preventing many users around the world from participating\nin web3 or interacting with dapps."),(0,i.kt)("p",null,"For blockchains and web3 to reach mass adoption, challenges around both\nscalability and accessibility have to be solved."),(0,i.kt)("h2",{id:"evolution-of-blockchains"},"Evolution of blockchains"),(0,i.kt)("p",null,"Blockchains have evolved over time from application-specific networks\nlike Bitcoin to shared smart contract platforms like Ethereum, which\nallow developers to deploy their own applications with business logic\nand state, without having to bootstrap their own blockchain from scratch."),(0,i.kt)("h2",{id:"modular-blockchains"},"Modular blockchains"),(0,i.kt)("p",null,"What we're seeing happen now is another paradigm shift. We're moving\naway from monolithic designs to modular designs, where execution is\nseparated from data availability and consensus (like Eth2 and Celestia)."),(0,i.kt)("p",null,"Most blockchain architectures today are ",(0,i.kt)("em",{parentName:"p"},"monolithic")," - they are\nresponsible for all four core functions of a blockchain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Execution"))," - executing transactions that update the state correctly.\nThus, execution must ensure that only valid transactions are executed,\ni.e., transactions that result in valid state machine transitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Settlement"))," - an environment for execution layers to verify proofs,\nresolve fraud disputes, and bridge between other execution layers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Consensus"))," - agreeing on the order of the transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"}," ",(0,i.kt)("a",{parentName:"strong",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"Data Availability")),"\n(DA) - making the transaction data available. Note that execution,\nsettlement, and consensus require DA.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Modular blockchains decouple these functions among multiple specialized\nlayers, and only specialize in only a few functions, rather than all of\nthem.")),(0,i.kt)("h2",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"Modular blockchains achieve scalability in a few different ways."),(0,i.kt)("h3",{id:"block-size"},"Block size"),(0,i.kt)("p",null,"At Celestia\u2019s center is a core mathematical primitive:\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/nickwh8te/status/1559977957195751424"},"data availability sampling.")),(0,i.kt)("p",null,"Data Availability Sampling enables Celestia Light Nodes to provide\nalmost the same security guarantees as a full node. As the light\nnode count increases, the block size can be increased linearly to\nits growth."),(0,i.kt)("p",null,"Now the only limit for block size (throughput) is the number of\nlight nodes in the network."),(0,i.kt)("p",null,"This primitive allows Celestia to be ",(0,i.kt)("em",{parentName:"p"},"the first blockchain that\ncan scale its block size with the number of users"),"."),(0,i.kt)("h3",{id:"specialization"},"Specialization"),(0,i.kt)("p",null,"Because of the decoupling of functionality, each layer can specialize\nin one or many of the core functions of a blockchain."),(0,i.kt)("p",null,"This allows each layer to focus on becoming the most optimal at\nits use case without the limitations of the requirement of\ninteroperability with other layers."),(0,i.kt)("p",null,"When the components become modular, those using or building the\nsystem don\u2019t have to know or care about everything. They only have\nto care about a subset of the features. Specialization is the way\nto ensure maximum focus, performance, and capacity."),(0,i.kt)("h3",{id:"resource-pricing"},"Resource pricing"),(0,i.kt)("p",null,"By decoupling consensus from execution, Celestia can have much\nmore efficient resource pricing than monolithic chains. Transactions\npublished to the network can be charged purely based on the size\nof the data being submitted."),(0,i.kt)("p",null,"State growth and historical data are treated separately in Celestia.\nCelestia only stores historical data from rollups (measured and paid\nin bytes), while rollups handle and meter their own state execution."),(0,i.kt)("p",null,"This enables completely separate fee markets for execution and data\navailability, allowing fundamentally orthogonal resources to be\npriced by the market independently, resulting in more accurate and\nflexible pricing."),(0,i.kt)("p",null,"This means that spikes of higher throughput in one environment cannot\naffect another, separate layer."),(0,i.kt)("h2",{id:"shared-execution-and-monolithic-blockchains"},"Shared execution and monolithic blockchains"),(0,i.kt)("p",null,"Most blockchains share execution with countless other applications\nand users of those applications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screen Shot 2022-08-15 at 3.33.06 PM.png",src:a(9975).Z,width:"1068",height:"692"})),(0,i.kt)("p",null,'If you compare this to how scalability is achieved in the traditional\ntech stack, where applications have their own servers or run their\nown "serverless" infrastructure that spins up a dedicated execution\nenvironment / container specifically for that individual application,\nthe bottleneck becomes pretty clear.'),(0,i.kt)("p",null,"Scalability can typically be achieved in ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases#answer-11715598"},"two ways - horizontal and vertical scaling"),"."),(0,i.kt)("p",null,"Applications on traditional tech infrastructure can handle tens of\nmillions of interactions per second by scaling both horizontally as\nwell as vertically, while blockchains have struggled to reach thousands\nof transactions per second while still remaining decentralized."),(0,i.kt)("p",null,"In addition to scaling the protocol itself (vertical), Celestia enables\nhorizontal scalability. Developers can launch their own\napplication-specific chains as rollups, similar to how\n",(0,i.kt)("a",{parentName:"p",href:"https://v1.cosmos.network/resources/faq"},"Cosmos Zones")," enable\ndevelopers to deploy their own application-specific blockchains."),(0,i.kt)("p",null,"Modular blockchains are a paradigm shift in blockchain design that\naim to solve the challenges around both scalability as well as\naccessibility, opening the door to a larger number of use cases,\nand ultimately enabling web3 to reach mass adoption."),(0,i.kt)("h2",{id:"building-on-celestia"},"Building on Celestia"),(0,i.kt)("p",null,"There are a handful of ways developers can build on Celestia."),(0,i.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,i.kt)("p",null,"The easiest way to get started will be to deploy a smart contract\nto a rollup chain already running on Celestia."),(0,i.kt)("p",null,"The barrier to entry is low in that you can use your existing\nskillset without having to learn anything new."),(0,i.kt)("p",null,"You can write any language and use any execution environment\nyou\u2019d like, including Solidity or Vyper and the EVM or Cosmos and Go."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," to deploy a rollup for your\nfavorite execution environment connected to Celestia."),(0,i.kt)("h3",{id:"sovereign-rollups"},"Sovereign rollups"),(0,i.kt)("p",null,"One of the most powerful value propositions of Celestia is the\nidea of ",(0,i.kt)("a",{parentName:"p",href:"https://blog.celestia.org/sovereign-rollup-chains"},"Sovereign Chains"),"."),(0,i.kt)("p",null,'Rollups on Ethereum are effectively "enshrined" to Ethereum because\nEthereum is responsible for validating their transactions. This makes\nthem tightly linked.'),(0,i.kt)("p",null,"Celestia enables a new type of rollup: sovereign rollup chains.\nThese are independent chains that are similar to an independent L1."),(0,i.kt)("h3",{id:"execution-layers"},"Execution layers"),(0,i.kt)("p",null,"Unlike Ethereum, Celestia has no enshrined settlement layer built in.\nInstead, there will be various settlement layers available to enable\ndevelopers to easily deploy their own rollup or application-specific\nchain to Celestia."),(0,i.kt)("h3",{id:"celestiums-ethereum"},"Celestiums (Ethereum)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestiums"},"Celestiums")," allow developers\nto deploy to a rollup using Celestia as DA and Ethereum as settlement."),(0,i.kt)("p",null,"Ethereum rollups batch data from multiple transactions into a single\ntransaction. This rollup transaction data (calldata) is posted to\nEthereum but not executed directly."),(0,i.kt)("p",null,"A Celestium is an L2 chain that uses Ethereum for settlement plus dispute\nresolution, and  Celestia for data availability."),(0,i.kt)("p",null,"This provides high throughput data availability for Ethereum L2s with\na higher level of security than other off-chain data availability\ntechniques."))}p.isMDXComponent=!0},9975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/shared-execution-d00f63a461ec9a2eb50324ae67e5bbcf.png"}}]);