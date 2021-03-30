(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(201)),o={id:"utils.eth.tolittleendian",title:"Function: toLittleEndian",sidebar_label:"toLittleEndian",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/functions/utils.eth.tolittleendian",id:"api/functions/utils.eth.tolittleendian",isDocsHomePage:!1,title:"Function: toLittleEndian",description:"Function: toLittleEndian",source:"@site/docs/api/functions/utils.eth.tolittleendian.md",slug:"/api/functions/utils.eth.tolittleendian",permalink:"/docs/api/functions/utils.eth.tolittleendian",editUrl:null,version:"current",sidebar_label:"toLittleEndian",sidebar:"Balls",previous:{title:"Function: makeHexEthAddress",permalink:"/docs/api/functions/utils.eth.makehexethaddress"},next:{title:"Function: fileArrayBuffer",permalink:"/docs/api/functions/utils.file.filearraybuffer"}},c=[],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-tolittleendian"},"Function: toLittleEndian"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils"},"Utils"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/utils.eth"},"Eth"),".toLittleEndian"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"toLittleEndian"),"(",Object(i.b)("inlineCode",{parentName:"p"},"bigEndian"),": ",Object(i.b)("em",{parentName:"p"},"number")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString")),", ",Object(i.b)("inlineCode",{parentName:"p"},"pad?"),": ",Object(i.b)("em",{parentName:"p"},"number"),"): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(i.b)("em",{parentName:"p"},"never")),Object(i.b)("p",null,"Convert big-endian hex or number to little-endian.\nNote: Before conversion it is automatically padded to even length hexstring"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"bigEndian")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")," ","|"," ",Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("a",{parentName:"td",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))),Object(i.b)("td",{parentName:"tr",align:"left"},"-"),Object(i.b)("td",{parentName:"tr",align:"left"},"Big-endian hex string or number to convert")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"pad")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},"2"),Object(i.b)("td",{parentName:"tr",align:"left"},"Length to which the string should be padded before conversion (defaul: 2)")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/types/utils.hex.hexstring"},Object(i.b)("em",{parentName:"a"},"HexString"))," ","|"," ",Object(i.b)("em",{parentName:"p"},"never")),Object(i.b)("p",null,"little-endian encoded hexstring"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/blob/0ac3a7d/src/utils/eth.ts#L103"},"bee-js/src/utils/eth.ts:103")))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);