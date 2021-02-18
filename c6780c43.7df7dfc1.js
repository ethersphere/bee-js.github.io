(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),b=(r(0),r(114)),l={hide_title:!0,title:"Utils.Hex"},i={unversionedId:"api-reference/modules/utils.hex",id:"api-reference/modules/utils.hex",isDocsHomePage:!1,title:"Utils.Hex",description:"Namespace: Utils.Hex",source:"@site/docs/api-reference/modules/utils.hex.md",slug:"/api-reference/modules/utils.hex",permalink:"/docs/api-reference/modules/utils.hex",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/api-reference/modules/utils.hex.md",version:"current",sidebar:"Balls",previous:{title:"Utils.File",permalink:"/docs/api-reference/modules/utils.file"},next:{title:"Utils.Tar",permalink:"/docs/api-reference/modules/utils.tar"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"HexString",id:"hexstring",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"bytesToHex",id:"bytestohex",children:[]},{value:"hexToBytes",id:"hextobytes",children:[]},{value:"isHexString",id:"ishexstring",children:[]},{value:"stripHexPrefix",id:"striphexprefix",children:[]},{value:"verifyHex",id:"verifyhex",children:[]}]}],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"namespace-utilshex"},"Namespace: Utils.Hex"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"type-aliases"},"Type aliases"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#hexstring"},"HexString"))),Object(b.b)("h3",{id:"functions"},"Functions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#bytestohex"},"bytesToHex")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#hextobytes"},"hexToBytes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#ishexstring"},"isHexString")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#striphexprefix"},"stripHexPrefix")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api-reference/modules/utils.hex#verifyhex"},"verifyHex"))),Object(b.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(b.b)("h3",{id:"hexstring"},"HexString"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"HexString"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/typealiases/typealiases#brandedstring"},Object(b.b)("em",{parentName:"a"},"BrandedString")),"<",Object(b.b)("em",{parentName:"p"},"HexString"),">"),Object(b.b)("p",null,"Nominal type to represent hex strings"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L6"},"src/utils/hex.ts:6")),Object(b.b)("h2",{id:"functions-1"},"Functions"),Object(b.b)("h3",{id:"bytestohex"},"bytesToHex"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"bytesToHex"),"(",Object(b.b)("inlineCode",{parentName:"p"},"bytes"),": Uint8Array, ",Object(b.b)("inlineCode",{parentName:"p"},"withPrefix?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString"))),Object(b.b)("p",null,"Converts array of number or Uint8Array to hex string."),Object(b.b)("p",null,"Optionally provides a the '0x' prefix."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"bytes")),Object(b.b)("td",{parentName:"tr",align:null},"Uint8Array"),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},"The input array")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"withPrefix")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false"),Object(b.b)("td",{parentName:"tr",align:null},"Provides '0x' prefix when true (default: false)")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L41"},"src/utils/hex.ts:41")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hextobytes"},"hexToBytes"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hexToBytes"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hex"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString")),"): Uint8Array"),Object(b.b)("p",null,"Converts a hex string to Uint8Array"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"hex")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString"))),Object(b.b)("td",{parentName:"tr",align:null},"string input")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Uint8Array"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L22"},"src/utils/hex.ts:22")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ishexstring"},"isHexString"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isHexString"),"(",Object(b.b)("inlineCode",{parentName:"p"},"s"),": ",Object(b.b)("em",{parentName:"p"},"string"),'): s is BrandedType<string, "HexString"',">"),Object(b.b)("p",null,"Type guard for HexStrings"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"s")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"string input")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:"),' s is BrandedType<string, "HexString"',">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L54"},"src/utils/hex.ts:54")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"striphexprefix"},"stripHexPrefix"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"stripHexPrefix"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"hex"),": T): T"),Object(b.b)("p",null,"Strips the '0x' hex prefix from a string"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"hex")),Object(b.b)("td",{parentName:"tr",align:null},"T"),Object(b.b)("td",{parentName:"tr",align:null},"string input")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L13"},"src/utils/hex.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"verifyhex"},"verifyHex"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"verifyHex"),"(",Object(b.b)("inlineCode",{parentName:"p"},"s"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(b.b)("em",{parentName:"p"},"never")),Object(b.b)("p",null,"Verifies if the provided input is a HexString."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"s")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"string input")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api-reference/modules/utils.hex#hexstring"},Object(b.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(b.b)("em",{parentName:"p"},"never")),Object(b.b)("p",null,"HexString or throws error"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/313830a/src/utils/hex.ts#L65"},"src/utils/hex.ts:65")))}s.isMDXComponent=!0},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,O=u["".concat(l,".").concat(m)]||u[m]||o[m]||b;return r?a.a.createElement(O,i(i({ref:t},p),{},{components:r})):a.a.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,l=new Array(b);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<b;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);