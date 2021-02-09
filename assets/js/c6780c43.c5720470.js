(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(113)),c={hide_title:!0,title:"Utils.Hex"},i={unversionedId:"api-reference/modules/utils.hex",id:"api-reference/modules/utils.hex",isDocsHomePage:!1,title:"Utils.Hex",description:"Namespace: Utils.Hex",source:"@site/docs/api-reference/modules/utils.hex.md",slug:"/api-reference/modules/utils.hex",permalink:"/docs/api-reference/modules/utils.hex",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/api-reference/modules/utils.hex.md",version:"current",sidebar:"Balls",previous:{title:"Utils.File",permalink:"/docs/api-reference/modules/utils.file"},next:{title:"Utils.Tar",permalink:"/docs/api-reference/modules/utils.tar"}},b=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"HexString",id:"hexstring",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"bytesToHex",id:"bytestohex",children:[]},{value:"hexToBytes",id:"hextobytes",children:[]},{value:"isHexString",id:"ishexstring",children:[]},{value:"stripHexPrefix",id:"striphexprefix",children:[]},{value:"verifyHex",id:"verifyhex",children:[]}]}],p={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",{id:"namespace-utilshex"},"Namespace: Utils.Hex"),Object(l.a)("h2",{id:"table-of-contents"},"Table of contents"),Object(l.a)("h3",{id:"type-aliases"},"Type aliases"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),"HexString"))),Object(l.a)("h3",{id:"functions"},"Functions"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#bytestohex"}),"bytesToHex")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#hextobytes"}),"hexToBytes")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#ishexstring"}),"isHexString")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#striphexprefix"}),"stripHexPrefix")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/modules/utils.hex#verifyhex"}),"verifyHex"))),Object(l.a)("h2",{id:"type-aliases-1"},"Type aliases"),Object(l.a)("h3",{id:"hexstring"},"HexString"),Object(l.a)("p",null,"\u01ac ",Object(l.a)("strong",{parentName:"p"},"HexString"),": ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/typealiases/typealiases#brandedstring"}),Object(l.a)("em",{parentName:"a"},"BrandedString")),"<",Object(l.a)("em",{parentName:"p"},"HexString"),">"),Object(l.a)("p",null,"Nominal type to represent hex strings"),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L6"}),"src/utils/hex.ts:6")),Object(l.a)("h2",{id:"functions-1"},"Functions"),Object(l.a)("h3",{id:"bytestohex"},"bytesToHex"),Object(l.a)("p",null,"\u25b8 ",Object(l.a)("strong",{parentName:"p"},"bytesToHex"),"(",Object(l.a)("inlineCode",{parentName:"p"},"bytes"),": Uint8Array, ",Object(l.a)("inlineCode",{parentName:"p"},"withPrefix?"),": ",Object(l.a)("em",{parentName:"p"},"boolean"),"): ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString"))),Object(l.a)("p",null,"Converts array of number or Uint8Array to hex string."),Object(l.a)("p",null,"Optionally provides a the '0x' prefix."),Object(l.a)("h4",{id:"parameters"},"Parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"bytes")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uint8Array"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"The input array")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"withPrefix")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("em",{parentName:"td"},"boolean")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"false"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides '0x' prefix when true (default: false)")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Returns:")," ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString"))),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L41"}),"src/utils/hex.ts:41")),Object(l.a)("hr",null),Object(l.a)("h3",{id:"hextobytes"},"hexToBytes"),Object(l.a)("p",null,"\u25b8 ",Object(l.a)("strong",{parentName:"p"},"hexToBytes"),"(",Object(l.a)("inlineCode",{parentName:"p"},"hex"),": ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString")),"): Uint8Array"),Object(l.a)("p",null,"Converts a hex string to Uint8Array"),Object(l.a)("h4",{id:"parameters-1"},"Parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"hex")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("a",Object(r.a)({parentName:"td"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString"))),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string input")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Returns:")," Uint8Array"),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L22"}),"src/utils/hex.ts:22")),Object(l.a)("hr",null),Object(l.a)("h3",{id:"ishexstring"},"isHexString"),Object(l.a)("p",null,"\u25b8 ",Object(l.a)("strong",{parentName:"p"},"isHexString"),"(",Object(l.a)("inlineCode",{parentName:"p"},"s"),": ",Object(l.a)("em",{parentName:"p"},"string"),'): s is BrandedType<string, "HexString"',">"),Object(l.a)("p",null,"Type guard for HexStrings"),Object(l.a)("h4",{id:"parameters-2"},"Parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"s")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("em",{parentName:"td"},"string")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string input")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Returns:"),' s is BrandedType<string, "HexString"',">"),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L54"}),"src/utils/hex.ts:54")),Object(l.a)("hr",null),Object(l.a)("h3",{id:"striphexprefix"},"stripHexPrefix"),Object(l.a)("p",null,"\u25b8 ",Object(l.a)("strong",{parentName:"p"},"stripHexPrefix"),"<T",">","(",Object(l.a)("inlineCode",{parentName:"p"},"hex"),": T): T"),Object(l.a)("p",null,"Strips the '0x' hex prefix from a string"),Object(l.a)("h4",{id:"type-parameters"},"Type parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"T")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("em",{parentName:"td"},"string"))))),Object(l.a)("h4",{id:"parameters-3"},"Parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"hex")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"T"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string input")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Returns:")," T"),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L13"}),"src/utils/hex.ts:13")),Object(l.a)("hr",null),Object(l.a)("h3",{id:"verifyhex"},"verifyHex"),Object(l.a)("p",null,"\u25b8 ",Object(l.a)("strong",{parentName:"p"},"verifyHex"),"(",Object(l.a)("inlineCode",{parentName:"p"},"s"),": ",Object(l.a)("em",{parentName:"p"},"string"),"): ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(l.a)("em",{parentName:"p"},"never")),Object(l.a)("p",null,"Verifies if the provided input is a HexString."),Object(l.a)("h4",{id:"parameters-4"},"Parameters:"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("inlineCode",{parentName:"td"},"s")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.a)("em",{parentName:"td"},"string")),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:null}),"string input")))),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Returns:")," ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/modules/utils.hex#hexstring"}),Object(l.a)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(l.a)("em",{parentName:"p"},"never")),Object(l.a)("p",null,"HexString or throws error"),Object(l.a)("p",null,"Defined in: ",Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L65"}),"src/utils/hex.ts:65")))}s.isMDXComponent=!0},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),j=s(a),u=r,o=j["".concat(c,".").concat(u)]||j[u]||O[u]||l;return a?n.a.createElement(o,i(i({ref:t},p),{},{components:a})):n.a.createElement(o,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=j;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);