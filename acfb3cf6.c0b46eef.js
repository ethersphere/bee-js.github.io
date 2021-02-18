(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return r?a.a.createElement(m,c(c({ref:t},o),{},{components:r})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(114)),l={hide_title:!0,title:"Utils.File"},c={unversionedId:"api-reference/modules/utils.file",id:"api-reference/modules/utils.file",isDocsHomePage:!1,title:"Utils.File",description:"Namespace: Utils.File",source:"@site/docs/api-reference/modules/utils.file.md",slug:"/api-reference/modules/utils.file",permalink:"/docs/api-reference/modules/utils.file",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/api-reference/modules/utils.file.md",version:"current",sidebar:"Balls",previous:{title:"Utils.Data",permalink:"/docs/api-reference/modules/utils.data"},next:{title:"Utils.Hex",permalink:"/docs/api-reference/modules/utils.hex"}},b=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"fileArrayBuffer",id:"filearraybuffer",children:[]},{value:"isFile",id:"isfile",children:[]}]}],o={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"namespace-utilsfile"},"Namespace: Utils.File"),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.file#filearraybuffer"},"fileArrayBuffer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.file#isfile"},"isFile"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"filearraybuffer"},"fileArrayBuffer"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"fileArrayBuffer"),"(",Object(i.b)("inlineCode",{parentName:"p"},"file"),": File): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<ArrayBuffer",">"),Object(i.b)("p",null,"Compatibility helper for browsers where the ",Object(i.b)("inlineCode",{parentName:"p"},"arrayBuffer function is\nmissing from "),"File` objects."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"file")),Object(i.b)("td",{parentName:"tr",align:null},"File"),Object(i.b)("td",{parentName:"tr",align:null},"A File object")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<ArrayBuffer",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/file.ts#L29"},"src/utils/file.ts:29")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isfile"},"isFile"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isFile"),"(",Object(i.b)("inlineCode",{parentName:"p"},"file"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),"): file is File"),Object(i.b)("p",null,"Compatibility functions for working with File API objects"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"https://developer.mozilla.org/en-US/docs/Web/API/File")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"file")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"unknown"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," file is File"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/file.ts#L7"},"src/utils/file.ts:7")))}p.isMDXComponent=!0}}]);