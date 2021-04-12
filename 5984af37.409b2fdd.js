(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(201)),b={id:"utils.hex.asserthexstring",title:"Function: assertHexString",sidebar_label:"assertHexString",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/functions/utils.hex.asserthexstring",id:"api/functions/utils.hex.asserthexstring",isDocsHomePage:!1,title:"Function: assertHexString",description:"Function: assertHexString",source:"@site/docs/api/functions/utils.hex.asserthexstring.md",slug:"/api/functions/utils.hex.asserthexstring",permalink:"/docs/api/functions/utils.hex.asserthexstring",editUrl:null,version:"current",sidebar_label:"assertHexString",sidebar:"Balls",previous:{title:"Function: isFile",permalink:"/docs/api/functions/utils.file.isfile"},next:{title:"Function: assertPrefixedHexString",permalink:"/docs/api/functions/utils.hex.assertprefixedhexstring"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-asserthexstring"},"Function: assertHexString"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils.hex"},"Hex"),".assertHexString"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"assertHexString"),"<Length",">","(",Object(i.b)("inlineCode",{parentName:"p"},"s"),": ",Object(i.b)("em",{parentName:"p"},"unknown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"len?"),": ",Object(i.b)("em",{parentName:"p"},"number"),"): asserts s is HexString<Length",">"),Object(i.b)("p",null,"Verifies if the provided input is a HexString."),Object(i.b)("p",null,"TODO: Make Length mandatory: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/issues/208"},"https://github.com/ethersphere/bee-js/issues/208")),Object(i.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Length")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number"))))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"s")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown")),Object(i.b)("td",{parentName:"tr",align:"left"},"string input")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"len?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},"expected length of the HexString")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," asserts s is HexString<Length",">"),Object(i.b)("p",null,"HexString or throws error"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/ce4d3fa/src/utils/hex.ts#L157"},"bee-js/src/utils/hex.ts:157")))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),o=p(n),m=r,d=o["".concat(b,".").concat(m)]||o[m]||u[m]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,b[1]=s;for(var l=2;l<i;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);