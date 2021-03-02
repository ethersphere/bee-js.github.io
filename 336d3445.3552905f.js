(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(167)),o={id:"utils.hex.inttohex",title:"Function: intToHex",sidebar_label:"intToHex",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/functions/utils.hex.inttohex",id:"api/functions/utils.hex.inttohex",isDocsHomePage:!1,title:"Function: intToHex",description:"Function: intToHex",source:"@site/docs/api/functions/utils.hex.inttohex.md",slug:"/api/functions/utils.hex.inttohex",permalink:"/docs/api/functions/utils.hex.inttohex",editUrl:null,version:"current",sidebar_label:"intToHex",sidebar:"Balls",previous:{title:"Function: hexToBytes",permalink:"/docs/api/functions/utils.hex.hextobytes"},next:{title:"Function: isHexString",permalink:"/docs/api/functions/utils.hex.ishexstring"}},b=[],l={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-inttohex"},"Function: intToHex"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".intToHex"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"intToHex"),"(",Object(i.b)("inlineCode",{parentName:"p"},"int"),": ",Object(i.b)("em",{parentName:"p"},"number"),", ",Object(i.b)("inlineCode",{parentName:"p"},"withPrefix?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))),Object(i.b)("p",null,"Converst integer number to hex string."),Object(i.b)("p",null,"Optionally provides '0x' prefix or padding"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"int")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},"-"),Object(i.b)("td",{parentName:"tr",align:"left"},"The positive integer to be converted")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"withPrefix")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"boolean")),Object(i.b)("td",{parentName:"tr",align:"left"},"false"),Object(i.b)("td",{parentName:"tr",align:"left"},"Provides '0x' prefix when true (default: false)")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/7dfd556/src/utils/hex.ts#L57"},"bee-js/src/utils/hex.ts:57")))}p.isMDXComponent=!0}}]);