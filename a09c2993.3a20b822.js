(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(114)),i={id:"introduction",slug:"/",title:"bee-js: Ethereum Swarm JavaScript API",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"bee-js: Ethereum Swarm JavaScript API",description:"bee-js is a library that allows you to interact with a local or remote Bee node.",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"Balls",next:{title:"Getting Started",permalink:"/docs/getting-started"}},l=[{value:"Development",id:"development",children:[]},{value:"Community",id:"community",children:[]},{value:"Reporting a bug",id:"reporting-a-bug",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"bee-js")," is a library that allows you to interact with a local or remote ",Object(a.b)("a",{parentName:"p",href:"https://docs.ethswarm.org/docs/"},"Bee node"),"."),Object(a.b)("p",null,"The following documentation will guide you through installing and using ",Object(a.b)("inlineCode",{parentName:"p"},"bee-js")," as well as providing an API reference documentation with examples. Your next step should be the ",Object(a.b)("a",{parentName:"p",href:"./getting-started"},"Getting Started section"),"."),Object(a.b)("h2",{id:"development"},"Development"),Object(a.b)("p",null,"We'd love you to join us! Are you up to the challenge of helping us to create bee-js and the other incredible technologies we're building? Have alook at our Github -  ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ethersphere"},"Ethersphere"),"."),Object(a.b)("h2",{id:"community"},"Community"),Object(a.b)("p",null,"There is a vibrant and buzzing community behind Swarm, get involved in one of our group channels."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://swarm.ethereum.org"},"official Swarm website"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://discord.gg/ykCupZMuww"},"Discord room"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://beehive.ethswarm.org/"},"Beehive Chat on Mattermost"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://twitter.com/ethswarm"},"Twitter @ethswarm"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.reddit.com/r/ethswarm/"},"reddit channel"),".")),Object(a.b)("h2",{id:"reporting-a-bug"},"Reporting a bug"),Object(a.b)("p",null,"If anything isn't working, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-js/issues"},"get in touch and let us know!")," Every Bee is important to us and we'll get right to work on fixing it for you as soon as possible. \ud83d\udc1d"))}p.isMDXComponent=!0}}]);