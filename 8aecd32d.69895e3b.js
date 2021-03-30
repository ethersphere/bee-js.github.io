(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(201)),b={id:"utils.hex.ishexstring",title:"Function: isHexString",sidebar_label:"isHexString",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/functions/utils.hex.ishexstring",id:"api/functions/utils.hex.ishexstring",isDocsHomePage:!1,title:"Function: isHexString",description:"Function: isHexString",source:"@site/docs/api/functions/utils.hex.ishexstring.md",slug:"/api/functions/utils.hex.ishexstring",permalink:"/docs/api/functions/utils.hex.ishexstring",editUrl:null,version:"current",sidebar_label:"isHexString",sidebar:"Balls",previous:{title:"Function: intToHex",permalink:"/docs/api/functions/utils.hex.inttohex"},next:{title:"Function: isPrefixedHexString",permalink:"/docs/api/functions/utils.hex.isprefixedhexstring"}},o=[],p={toc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-ishexstring"},"Function: isHexString"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".isHexString"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isHexString"),"<Length",">","(",Object(i.b)("inlineCode",{parentName:"p"},"s"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"len?"),": ",Object(i.b)("em",{parentName:"p"},"number"),'): s is FlavoredType<string & object, "HexString"',">"),Object(i.b)("p",null,"Type guard for HexStrings.\nRequires no 0x prefix!"),Object(i.b)("p",null,"TODO: Make Length mandatory: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/issues/208"},"https://github.com/ethersphere/bee-js/issues/208")),Object(i.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Length")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number"))))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"s")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},"string input")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"len?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},"expected length of the HexString")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:"),' s is FlavoredType<string & object, "HexString"',">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/utils/hex.ts#L134"},"bee-js/src/utils/hex.ts:134")))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(b,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);