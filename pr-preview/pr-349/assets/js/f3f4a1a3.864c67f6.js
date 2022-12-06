"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2228],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_label:"Quick Start"},a="Quick Start Guide",l={unversionedId:"nodes/quick-start",id:"nodes/quick-start",title:"Quick Start Guide",description:"In this section, we show you how to get started",source:"@site/docs/nodes/quick-start.md",sourceDirName:"nodes",slug:"/nodes/quick-start",permalink:"/pr-preview/pr-349/nodes/quick-start",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/quick-start.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick Start"},sidebar:"nodes",previous:{title:"Mamaki Testnet",permalink:"/pr-preview/pr-349/nodes/mamaki-testnet"},next:{title:"Setting Up Environment",permalink:"/pr-preview/pr-349/nodes/environment"}},s={},u=[{value:"Celestia Node",id:"celestia-node",level:2},{value:"Celestia App",id:"celestia-app",level:2},{value:"Getting Started",id:"getting-started",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,i.kt)("p",null,"In this section, we show you how to get started\nwith installing the needed libraries and packages\nin Celestia to help you run a node on Celestia."),(0,i.kt)("h2",{id:"celestia-node"},"Celestia Node"),(0,i.kt)("p",null,"Installing Celestia Node allows you to get started with\nrunning a light node and do Data Availability Sampling."),(0,i.kt)("p",null,"Light Nodes are the best nodes to test out initially if\nyou are new to participating in Celestia."),(0,i.kt)("p",null,"Celestia Node client also allows you to run other types\nof Data-Availability nodes like Bridge and Full Storage\nnodes, which will be covered in later sections."),(0,i.kt)("h2",{id:"celestia-app"},"Celestia App"),(0,i.kt)("p",null,"Celestia App is the software that allows you to run\nValidator nodes and also provide RPC endpoints."),(0,i.kt)("p",null,"Celestia App covers the Consensus layer, while Celestia Node\ncovers the Data Availability layer."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"As covered in the previous section, Celestia offers\ntwo different test networks, ",(0,i.kt)("a",{parentName:"p",href:"./arabica-devnet"},"Arabica"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"./mamaki-testnet"},"Mamaki"),"."),(0,i.kt)("p",null,"If you are planning to run a light node, it is recommended\nto use Arabica, which you will find options to connecting to\nin the later sections."),(0,i.kt)("p",null,"If you plan on running a validator, your only option is to run\nyour node on Mamaki."),(0,i.kt)("p",null,"In this Quick Start guide, we will go over installing both of\nthe software clients: Celestia Node and Celestia App."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: If you just want to run a Light Node, you don't need to\ninstall Celestia App and can skip that part.")),(0,i.kt)("p",null,"Proceed to the next section in order to get started."))}p.isMDXComponent=!0}}]);