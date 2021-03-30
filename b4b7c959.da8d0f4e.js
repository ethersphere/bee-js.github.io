(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(201)),l=a(206),i=a(207),c={title:"Upload and Download",hide_title:!0,id:"upload-download",slug:"/upload-download",sidebar_label:"Upload and Download"},s={unversionedId:"user-documentation/upload-download",id:"user-documentation/upload-download",isDocsHomePage:!1,title:"Upload and Download",description:"Upload and Download",source:"@site/docs/user-documentation/upload-download.md",slug:"/upload-download",permalink:"/docs/upload-download",editUrl:"https://github.com/ethersphere/bee-js-docs/blob/master/docs/user-documentation/upload-download.md",version:"current",sidebar_label:"Upload and Download",sidebar:"Balls",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Track Upload Status",permalink:"/docs/track-upload"}},d=[{value:"Upload and Download",id:"upload-and-download",children:[{value:"Data",id:"data",children:[]},{value:"Single file",id:"single-file",children:[]},{value:"Files and Directories",id:"files-and-directories",children:[]}]},{value:"Retrieve file from node or gateway",id:"retrieve-file-from-node-or-gateway",children:[]}],b={toc:d};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"upload-and-download"},"Upload and Download"),Object(r.b)("p",null,"Uploading your data to Swarm is easy with ",Object(r.b)("inlineCode",{parentName:"p"},"bee-js"),". Based on your needs you can either upload directly unstructured data, single file or even complex directories. Let's walk through the options one by one."),Object(r.b)("h3",{id:"data"},"Data"),Object(r.b)("p",null,"You can upload and retrieve any ",Object(r.b)("inlineCode",{parentName:"p"},"string")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Uint8Array")," data with ",Object(r.b)("a",{parentName:"p",href:"./api/classes/bee#uploaddata"},Object(r.b)("inlineCode",{parentName:"a"},"uploadData"))," and ",Object(r.b)("a",{parentName:"p",href:"./api/classes/bee#downloaddata"},Object(r.b)("inlineCode",{parentName:"a"},"downloadData"))," functions."),Object(r.b)("p",null,"When you download data the return type is ",Object(r.b)("a",{parentName:"p",href:"./api/types/data"},Object(r.b)("inlineCode",{parentName:"a"},"Data"))," interface which extends ",Object(r.b)("inlineCode",{parentName:"p"},"Uint8Array")," with convenience functions like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"text()")," that converts the bytes into UTF-8 encoded string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hex()")," that converts the bytes into ",Object(r.b)("strong",{parentName:"li"},"non-prefixed")," hex string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"json()")," that converts the bytes into JSON object")),Object(r.b)(l.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const hash = await bee.uploadData(\"Bee is awesome!\")\n\n// prints Swarm hash of the file with which it can be retrieved\n// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780\nconsole.log(hash) \n\nconst retrievedData = await bee.downloadData(hash)\n\nconsole.log(retrievedData.text()) // prints 'Bee is awesome!'\n"))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const hash = await bee.uploadData(\"Bee is awesome!\")\n\n// prints Swarm hash of the file with which it can be retrieved\n// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780\nconsole.log(hash) \n\nconst retrievedData = await bee.downloadData(hash)\n\nconsole.log(retrievedData.text()) // prints 'Bee is awesome!'\n")))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Swarm reference or hash is a 64 characters long hex string which is the address of the uploaded data, file or directory."))),Object(r.b)("h3",{id:"single-file"},"Single file"),Object(r.b)("p",null,"You can also upload files and include a filename. When you download the file, ",Object(r.b)("inlineCode",{parentName:"p"},"bee-js")," will return aditional information like ",Object(r.b)("inlineCode",{parentName:"p"},"contentType")," or ",Object(r.b)("inlineCode",{parentName:"p"},"name")," of the file."),Object(r.b)(l.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const hash = await bee.uploadFile(\"Bee is awesome!\", \"textfile.txt\")\nconst retrievedFile = await bee.downloadFile(hash)\n\nconsole.log(retrievedFile.name) // prints 'textfile.txt'\nconsole.log(retrievedFile.contentType) // prints 'application/octet-stream'\nconsole.log(retrievedFile.data.text()) // prints 'Bee is awesome!'\n"))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const hash = await bee.uploadFile(\"Bee is awesome!\", \"textfile.txt\")\nconst retrievedFile = await bee.downloadFile(hash)\n\nconsole.log(retrievedFile.name) // prints 'textfile.txt'\nconsole.log(retrievedFile.contentType) // prints 'application/octet-stream'\nconsole.log(retrievedFile.data.text()) // prints 'Bee is awesome!'\n")))),Object(r.b)("p",null,"In browsers, you can upload directly ",Object(r.b)("inlineCode",{parentName:"p"},"File")," type. The filename is taken from the file object itself, but can be overwritten through the second argument of the ",Object(r.b)("inlineCode",{parentName:"p"},"uploadFile")," function (see the ",Object(r.b)("a",{parentName:"p",href:"./api/classes/bee#uploadfile"},"API docs"),")"),Object(r.b)(l.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const file = new File([\"foo\"], \"foo.txt\", { type: \"text/plain\" })\n\nconst hash = await bee.uploadFile(file)\nconst retrievedFile = await bee.downloadFile(hash)\n\nconsole.log(retrievedFile.name) // prints 'foo.txt'\nconsole.log(retrievedFile.contentType) // prints 'text/plain'\nconsole.log(retrievedFile.data.text()) // prints 'foo'\n"))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const file = new File([\"foo\"], \"foo.txt\", { type: \"text/plain\" })\n\nconst hash = await bee.uploadFile(file)\nconst retrievedFile = await bee.downloadFile(hash)\n\nconsole.log(retrievedFile.name) // prints 'foo.txt'\nconsole.log(retrievedFile.contentType) // prints 'text/plain'\nconsole.log(retrievedFile.data.text()) // prints 'foo'\n")))),Object(r.b)("h3",{id:"files-and-directories"},"Files and Directories"),Object(r.b)("p",null,"The last supported mode is upload of files and directories. In browsers, you can easily upload an array of ",Object(r.b)("inlineCode",{parentName:"p"},"File")," comming from your form directly as well as ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileList"},Object(r.b)("inlineCode",{parentName:"a"},"FileList")),". If the files uploaded through ",Object(r.b)("inlineCode",{parentName:"p"},"uploadFiles")," have a relative path, they are added relative to this filepath. Otherwise, the whole structure is flattened into single directory."),Object(r.b)(l.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const foo = new File(["foo"], "foo.txt", { type: "text/plain" })\nconst bar = new File(["bar"], "bar.txt", { type: "text/plain" })\n\nconst hash = await bee.uploadFiles([ foo, bar ]) // upload\n\nconst rFoo = await bee.downloadFileFromCollection(hash, \'./foo.txt\') // download foo\nconst rBar = await bee.downloadFileFromCollection(hash, \'./bar.txt\') // download bar\n\nconsole.log(rFoo.data.text()) // prints \'foo\'\nconsole.log(rBar.data.text()) // prints \'bar\'\n'))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const foo = new File(["foo"], "foo.txt", { type: "text/plain" })\nconst bar = new File(["bar"], "bar.txt", { type: "text/plain" })\n\nconst hash = await bee.uploadFiles([ foo, bar ]) // upload\n\nconst rFoo = await bee.downloadFileFromCollection(hash, \'./foo.txt\') // download foo\nconst rBar = await bee.downloadFileFromCollection(hash, \'./bar.txt\') // download bar\n\nconsole.log(rFoo.data.text()) // prints \'foo\'\nconsole.log(rBar.data.text()) // prints \'bar\'\n')))),Object(r.b)("p",null,"In nodejs, you may utilise the ",Object(r.b)("inlineCode",{parentName:"p"},"uploadFilesFromDirectory")," function, which takes directory path as input and upload all files in that directory. Lets assum we have following data structure:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},".\n+-- foo.txt\n+-- dir\n|   +-- bar.txt\n")),Object(r.b)(l.a,{groupId:"lang_preferrence",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"ts",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const hash = await bee.uploadFilesFromDirectory('./', true) // upload recursively current folder\n\nconst rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo\nconst rBar = await bee.downloadFileFromCollection(hash, './dir/bar.txt') // download bar\n\nconsole.log(rFoo.data.text()) // prints 'foo'\nconsole.log(rBar.data.text()) // prints 'bar'\n"))),Object(r.b)(i.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const hash = await bee.uploadFilesFromDirectory('./', true) // upload recursively current folder\n\nconst rFoo = await bee.downloadFileFromCollection(hash, './foo.txt') // download foo\nconst rBar = await bee.downloadFileFromCollection(hash, './dir/bar.txt') // download bar\n\nconsole.log(rFoo.data.text()) // prints 'foo'\nconsole.log(rBar.data.text()) // prints 'bar'\n")))),Object(r.b)("h2",{id:"retrieve-file-from-node-or-gateway"},"Retrieve file from node or gateway"),Object(r.b)("p",null,'You can always retrieve your files and data directly from the bee node through browser as well. For example, if you want to retrieve the "Bee is awesome!" text uploaded to Swarm in section ',Object(r.b)("a",{parentName:"p",href:"#data"},"upload data"),", you can directly access it with: ",Object(r.b)("a",{parentName:"p",href:"http://localhost:1633/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780"},"http://localhost:1633/files/fd79d5...294780")),Object(r.b)("p",null,"To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://gateway.ethswarm.org/files/fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780"},"https://gateway.ethswarm.org/files/fd79d5...294780")))}p.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,f=b["".concat(l,".").concat(u)]||b[u]||p[u]||r;return a?o.a.createElement(f,i(i({ref:t},s),{},{components:a})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},202:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},204:function(e,t,a){"use strict";var n=a(0),o=a(205);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},205:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},206:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(204),l=a(202),i=a(55),c=a.n(i),s=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,p=e.groupId,u=e.className,f=Object(r.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,w=Object(n.useState)(i),v=w[0],j=w[1],O=n.Children.toArray(e.children);if(null!=p){var y=m[p];null!=y&&y!==v&&b.some((function(e){return e.value===y}))&&j(y)}var g=function(e){j(e),null!=p&&h(p,e)},x=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},u)},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},207:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);