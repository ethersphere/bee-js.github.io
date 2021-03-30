(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(201)),o={id:"signer",title:"Type alias: Signer",sidebar_label:"Signer",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/types/signer",id:"api/types/signer",isDocsHomePage:!1,title:"Type alias: Signer",description:"Type alias: Signer",source:"@site/docs/api/types/signer.md",slug:"/api/types/signer",permalink:"/docs/api/types/signer",editUrl:null,version:"current",sidebar_label:"Signer",sidebar:"Balls",previous:{title:"Type alias: Signature",permalink:"/docs/api/types/signature"},next:{title:"Type alias: Topic",permalink:"/docs/api/types/topic"}},c=[],s={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"type-alias-signer"},"Type alias: Signer"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"Signer"),": ",Object(i.b)("em",{parentName:"p"},"object")),Object(i.b)("p",null,"Interface for implementing Ethereum compatible signing."),Object(i.b)("p",null,"In order to be compatible with Ethereum and its signing method ",Object(i.b)("inlineCode",{parentName:"p"},"personal_sign"),", the data\nthat are passed to sign() function should be prefixed with: ",Object(i.b)("inlineCode",{parentName:"p"},"\\x19Ethereum Signed Message:\\n${data.length}"),", hashed\nand only then signed.\nIf you are wrapping another signer tool/library (like Metamask or some other Ethereum wallet), you might not have\nto do this prefixing manually if you use the ",Object(i.b)("inlineCode",{parentName:"p"},"personal_sign")," method. Check documentation of the tool!\nIf you are writing your own storage for keys, then you have to prefix the data manually otherwise the Bee node\nwill reject the chunks signed by you!"),Object(i.b)("p",null,"For example see the hashWithEthereumPrefix() function."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"property"))," sign     The sign function that can be sync or async. This function takes non-prefixed data. See above."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"property"))," address  The ethereum address of the signer in bytes."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"see"))," hashWithEthereumPrefix"),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"address")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/types/utils.eth.ethaddress"},Object(i.b)("em",{parentName:"a"},"EthAddress")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"sign")),Object(i.b)("td",{parentName:"tr",align:"left"},"SyncSigner ","|"," AsyncSigner")))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/types/index.ts#L230"},"bee-js/src/types/index.ts:230")))}l.isMDXComponent=!0}}]);