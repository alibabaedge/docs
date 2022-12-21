"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2777],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var s=n(3117),r=(n(7294),n(3905));const i={sidebar_label:"Blockchains Monolithique vs Modulaires"},o="Blockchains monolithiques vs modulaires",a={unversionedId:"concepts/how-celestia-works/monolithic-vs-modular",id:"concepts/how-celestia-works/monolithic-vs-modular",title:"Blockchains monolithiques vs modulaires",description:"Les Blockchains instancient les machines d'\xe9tat r\xe9pliqu\xe9es",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/concepts/how-celestia-works/monolithic-vs-modular.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/monolithic-vs-modular",permalink:"/fr/concepts/how-celestia-works/monolithic-vs-modular",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/monolithic-vs-modular.md",tags:[],version:"current",frontMatter:{sidebar_label:"Blockchains Monolithique vs Modulaires"},sidebar:"concepts",previous:{title:"Introduction",permalink:"/fr/concepts/how-celestia-works/introduction"},next:{title:"Celestia's Data Availability Layer",permalink:"/fr/concepts/how-celestia-works/data-availability-layer"}},c={},l=[],u={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blockchains-monolithiques-vs-modulaires"},"Blockchains monolithiques vs modulaires"),(0,r.kt)("p",null,"Les Blockchains instancient ",(0,r.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/abs/10.1145/98163.98167"},"les machines d'\xe9tat r\xe9pliqu\xe9es"),": les nodes dans un r\xe9seau distribu\xe9 permissionless appliquent une s\xe9quence ordonn\xe9e de transactions d\xe9terministes \xe0 un \xe9tat initial donnant lieu \xe0 un \xe9tat final commun. Cela signifie que les blockchains n\xe9cessitent les quatre fonctions suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L'ex\xe9cution")," implique l'ex\xe9cution de transactions qui mettent \xe0 jour l'\xe9tat correctement. Ainsi, l'ex\xe9cution doit s'assurer que seules les transactions valides sont ex\xe9cut\xe9es, c'est-\xe0-dire, des transactions qui entra\xeenent des transitions de state machine valides."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le r\xe8glement")," implique un environnement pour les couches d'ex\xe9cution pour v\xe9rifier les preuves, r\xe9soudre les litiges de fraude et faire le lien entre les autres couches d'ex\xe9cution."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le consensus")," consiste \xe0 se mettre d'accord sur l'ordre des transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"La disponibilit\xe9 des donn\xe9es")," (DA : Data Availability) implique de rendre les donn\xe9es de transaction disponibles. Notez que l'ex\xe9cution, le r\xe8glement et le consensus requi\xe8rent une DA.")),(0,r.kt)("p",null,"Les blockchains traditionnels, c'est-\xe0-dire ",(0,r.kt)("em",{parentName:"p"},"les blockchains monolithiques"),", impl\xe9mentent les quatre fonctions ensemble dans une seule couche de consensus de base (consensus layer). Le probl\xe8me avec les blockchains monolithiques est que la couche de consensus doit effectuer beaucoup de t\xe2ches diff\xe9rentes et ne peut pas \xeatre optimis\xe9e pour une seule de ces fonctions. En cons\xe9quence, le paradigme monolithique limite le d\xe9bit du syst\xe8me."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modulaire VS Monolithique",src:n(3446).Z,width:"3000",height:"1291"})),(0,r.kt)("p",null,"En guise de solution, les blockchains modulaires d\xe9couplent ces fonctions parmi plusieurs couches sp\xe9cialis\xe9es dans le cadre d'une pile modulaire. Gr\xe2ce \xe0 la flexibilit\xe9 qu'offre la sp\xe9cialisation, il y a de nombreuses possibilit\xe9s dans lesquelles cette pile peut \xeatre organis\xe9e. Par exemple, l'une de ces modalit\xe9s est la s\xe9paration des quatre fonctions en trois couches sp\xe9cialis\xe9es."),(0,r.kt)("p",null,"La couche de base (base layer) se compose de la DA et du consensus et est donc appel\xe9e la couche de Consensus et de DA (ou, par souci de concision, la couche de DA), tandis que le r\xe8glement et l'ex\xe9cution sont plac\xe9s au-dessus dans leurs propres couches. Par cons\xe9quent, chaque couche peut \xeatre sp\xe9cialis\xe9e pour n'ex\xe9cuter que sa fonction de mani\xe8re optimale et ainsi, augmenter le d\xe9bit du syst\xe8me. En outre, ce paradigme modulaire permet plusieurs couches d'ex\xe9cution, c'est-\xe0-dire ",(0,r.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/01/05/rollup.html"},"rollups"),", d'utiliser les m\xeames couches de r\xe8glement et de DA."))}d.isMDXComponent=!0},3446:function(e,t,n){t.Z=n.p+"assets/images/monolithic-modular-c078dd91fd68b8e6a168ca8bbccfd3d8.png"}}]);