(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return r?a.a.createElement(d,s(s({ref:t},p),{},{components:r})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(201)),c={id:"utils.eth.makeethereumwalletsigner",title:"Function: makeEthereumWalletSigner",sidebar_label:"makeEthereumWalletSigner",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/functions/utils.eth.makeethereumwalletsigner",id:"api/functions/utils.eth.makeethereumwalletsigner",isDocsHomePage:!1,title:"Function: makeEthereumWalletSigner",description:"Function: makeEthereumWalletSigner",source:"@site/docs/api/functions/utils.eth.makeethereumwalletsigner.md",slug:"/api/functions/utils.eth.makeethereumwalletsigner",permalink:"/docs/api/functions/utils.eth.makeethereumwalletsigner",editUrl:null,version:"current",sidebar_label:"makeEthereumWalletSigner",sidebar:"Balls",previous:{title:"Function: makeEthAddress",permalink:"/docs/api/functions/utils.eth.makeethaddress"},next:{title:"Function: makeHexEthAddress",permalink:"/docs/api/functions/utils.eth.makehexethaddress"}},o=[],p={toc:o};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-makeethereumwalletsigner"},"Function: makeEthereumWalletSigner"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".makeEthereumWalletSigner"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"makeEthereumWalletSigner"),"(",Object(i.b)("inlineCode",{parentName:"p"},"provider"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/utils.eth.jsonrpc"},Object(i.b)("em",{parentName:"a"},"JsonRPC")),", ",Object(i.b)("inlineCode",{parentName:"p"},"ethAddress?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.eth.hexethaddress"},Object(i.b)("em",{parentName:"a"},"HexEthAddress")),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/signer"},Object(i.b)("em",{parentName:"a"},"Signer")),">"),Object(i.b)("p",null,"Function that takes Ethereum EIP-1193 compatible provider and create an Signer instance that\nuses personal_sign method to sign requested data."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"provider")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/interfaces/utils.eth.jsonrpc"},Object(i.b)("em",{parentName:"a"},"JsonRPC"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Injected web3 provider like window.ethereum or other compatible with EIP-1193")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"ethAddress?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/api/types/utils.eth.hexethaddress"},Object(i.b)("em",{parentName:"a"},"HexEthAddress"))),Object(i.b)("td",{parentName:"tr",align:"left"},"Optional address of the account which the data should be signed with. If not specified eth_requestAccounts requests is used to get the account address.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/signer"},Object(i.b)("em",{parentName:"a"},"Signer")),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/utils/eth.ts#L189"},"bee-js/src/utils/eth.ts:189")))}l.isMDXComponent=!0}}]);