(self.webpackChunkjiba_plus=self.webpackChunkjiba_plus||[]).push([[8610],{9439:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>g});var a=n(3603);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1876:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(3603),r=n(3658),o=n(7735),l=n(7286),c=n(6353),s=n(9996);const i={sidebar:"sidebar_eMu0",sidebarItemTitle:"sidebarItemTitle_xQaC",sidebarItemList:"sidebarItemList_XZw4",sidebarItem:"sidebarItem_oz8i",sidebarItemLink:"sidebarItemLink_Pwwn",sidebarItemLinkActive:"sidebarItemLinkActive_DCZ6"};function m(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(i.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:i.sidebarItem},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}var u=n(3371);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function p(e){return a.createElement(u.Zo,{component:d,props:e})}function g(e){let{sidebar:t}=e;const n=(0,l.i)();return t?.items.length?"mobile"===n?a.createElement(p,{sidebar:t}):a.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:n,children:l,...c}=e,s=t&&t.items.length>0;return a.createElement(o.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(g,{sidebar:t}),a.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},l),n&&a.createElement("div",{className:"col col--2"},n))))}},154:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(3603),r=n(9996),o=n(9243);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(o.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&a.createElement(o.Z,{permalink:l,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},20:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var a=n(3603),r=n(3658),o=n(1228),l=n(8580);function c(e){let{children:t,className:n}=e;const{frontMatter:r,assets:c}=(0,o.C)(),{withBaseUrl:s}=(0,l.C)(),i=c.image??r.image;return a.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&a.createElement("meta",{itemProp:"image",content:s(i,{absolute:!0})}),t)}var s=n(6353);const i={title:"title_xKcZ"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,o.C)(),{permalink:c,title:m}=n,u=l?"h1":"h2";return a.createElement(u,{className:(0,r.Z)(i.title,t),itemProp:"headline"},l?m:a.createElement(s.Z,{itemProp:"url",to:c},m))}var u=n(9996),d=n(3826);const p={container:"container_cYKi"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function h(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function f(){return a.createElement(a.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:n}=(0,o.C)(),{date:l,formattedDate:c,readingTime:s}=n;return a.createElement("div",{className:(0,r.Z)(p.container,"margin-vert--md",t)},a.createElement(h,{date:l,formattedDate:c}),void 0!==s&&a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement(g,{readingTime:s})))}function E(e){return e.href?a.createElement(s.Z,e):a.createElement(a.Fragment,null,e.children)}function v(e){let{author:t,className:n}=e;const{name:o,title:l,url:c,imageURL:s,email:i}=t,m=c||i&&`mailto:${i}`||void 0;return a.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",n)},s&&a.createElement(E,{href:m,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:o})),o&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(E,{href:m,itemProp:"url"},a.createElement("span",{itemProp:"name"},o))),l&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const y={authorCol:"authorCol_YeUt",imageOnlyAuthorRow:"imageOnlyAuthorRow_QWLm",imageOnlyAuthorCol:"imageOnlyAuthorCol_QH0A"};function k(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,o.C)();if(0===n.length)return null;const c=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",c?y.imageOnlyAuthorRow:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,r.Z)(!c&&"col col--6",c?y.imageOnlyAuthorCol:y.authorCol),key:t},a.createElement(v,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})))))}function N(){return a.createElement("header",null,a.createElement(m,null),a.createElement(b,null),a.createElement(k,null))}var Z=n(3151),C=n(8061);function w(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,o.C)();return a.createElement("div",{id:l?Z.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),itemProp:"articleBody"},a.createElement(C.Z,null,t))}var T=n(8951),_=n(8999),P=n(4354);function B(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...n}=e;return a.createElement(s.Z,(0,P.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(B,null))}const x={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_C0Pp"};function O(){const{metadata:e,isBlogPostPage:t}=(0,o.C)(),{tags:n,title:l,editUrl:c,hasTruncateMarker:s}=e,i=!t&&s,m=n.length>0;return m||i||c?a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&x.blogPostFooterDetailsFull)},m&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":i})},a.createElement(_.Z,{tags:n})),t&&c&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(T.Z,{editUrl:c})),i&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":m})},a.createElement(L,{blogPostTitle:l,to:e.permalink}))):null}function I(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,o.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(c,{className:(0,r.Z)(l,n)},a.createElement(N,null),a.createElement(w,null,t),a.createElement(O,null))}},9066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(3603),r=n(1228),o=n(20);function l(e){let{items:t,component:n=o.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},7200:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var a=n(3603),r=n(3658),o=n(9996),l=n(3826),c=n(7306),s=n(6733),i=n(6353),m=n(1876),u=n(154),d=n(6981),p=n(9066);function g(e){const t=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const n=g(t);return a.createElement(a.Fragment,null,a.createElement(c.d,{title:n}),a.createElement(d.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:n,sidebar:r,listMetadata:l}=e;const c=g(t);return a.createElement(m.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,c),a.createElement(i.Z,{href:t.allTagsPath},a.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(p.Z,{items:n}),a.createElement(u.Z,{metadata:l}))}function b(e){return a.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(f,e))}},8951:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(3603),r=n(9996),o=n(6733),l=n(4354),c=n(3658);const s={iconEdit:"iconEdit_ZU9k"};function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},a.createElement(i,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7452:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(4354),r=n(3603),o=n(3658),l=n(9996),c=n(5399),s=n(6353);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_jZtr",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R_ok"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:u}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const d=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,o.Z)("anchor",u?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},8061:(e,t,n)=>{"use strict";n.d(t,{Z:()=>fe});var a=n(3603),r=n(9439),o=n(4354),l=n(5546);var c=n(870),s=n(3658),i=n(5138),m=n(5399);function u(){const{prism:e}=(0,m.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var d=n(6733),p=n(222),g=n.n(p);const h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function E(e,t){const n=e.map((e=>{const{start:n,end:a}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:o}=t;if(o&&f.test(o)){const e=o.match(f).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=g()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"],t);case"jsx":case"tsx":return E(["js","jsBlock","jsx"],t);case"html":return E(["js","jsBlock","html"],t);case"python":case"py":case"bash":return E(["bash"],t);case"markdown":case"md":return E(["html","jsx","bash"],t);default:return E(Object.keys(b),t)}}(a,r),c=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:m[t]?s[m[t]].start=p:u[t]&&(s[u[t]].range+=`${s[u[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;g()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const y={codeBlockContainer:"codeBlockContainer_IBfI"};function k(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const o=t[a];o&&"string"==typeof r&&(n[o]=r)})),n}(u());return a.createElement(t,(0,o.Z)({},n,{style:r,className:(0,s.Z)(n.className,y.codeBlockContainer,d.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_Coxx",codeBlockTitle:"codeBlockTitle_Hxom",codeBlock:"codeBlock_pQMr",codeBlockStandalone:"codeBlockStandalone_t9H9",codeBlockLines:"codeBlockLines_Bcg3",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_W2_g",buttonGroup:"buttonGroup__IE5"};function Z(e){let{children:t,className:n}=e;return a.createElement(k,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:N.codeBlockLines},t))}var C=n(2839);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const r=(0,C.zX)(t),o=(0,C.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const _={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var P={Prism:n(7236).Z,theme:_};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}var x=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function j(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=L({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=L({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=L({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?L({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),B(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),B(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=L({},j(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?L({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),B(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,m=t[l],u=n[l][o];if("string"==typeof u?(m=l>0?m:["plain"],i=u):(m=I(m,u.type),u.alias&&(m=I(m,u.alias)),i=u.content),"string"==typeof i){var d=i.split(x),p=d.length;c.push({types:m,content:d[0]});for(var g=1;g<p;g++)O(c),s.push(c=[]),c.push({types:m,content:d[g]})}else l++,t.push(m),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return O(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const S=A,M={codeLine:"codeLine_PRkz",codeLineNumber:"codeLineNumber_i2M9",codeLineContent:"codeLineContent_jG4I"};function z(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,s.Z)(n,r&&M.codeLine)}),m=t.map(((e,t)=>a.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))));return a.createElement("span",i,r?a.createElement(a.Fragment,null,a.createElement("span",{className:M.codeLineNumber}),a.createElement("span",{className:M.codeLineContent},m)):m,a.createElement("br",null))}var R=n(9996);function D(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function F(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const H={copyButtonCopied:"copyButtonCopied_BOLa",copyButtonIcons:"copyButtonIcons_k5uS",copyButtonIcon:"copyButtonIcon_cLpU",copyButtonSuccessIcon:"copyButtonSuccessIcon_HuF8"};function W(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection(),o=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,H.copyButton,r&&H.copyButtonCopied),onClick:c},a.createElement("span",{className:H.copyButtonIcons,"aria-hidden":"true"},a.createElement(D,{className:H.copyButtonIcon}),a.createElement(F,{className:H.copyButtonSuccessIcon})))}function $(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const V={wordWrapButtonIcon:"wordWrapButtonIcon_dEgt",wordWrapButtonEnabled:"wordWrapButtonEnabled_JZLd"};function U(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&V.wordWrapButtonEnabled),"aria-label":o,title:o},a.createElement($,{className:V.wordWrapButtonIcon,"aria-hidden":"true"}))}function q(e){let{children:t,className:n="",metastring:r,title:l,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,m.L)(),g=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,f=u(),b=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return T(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),E=function(e){return e?.match(h)?.groups.title??""}(r)||l,{lineClassNames:y,code:Z}=v(t,{metastring:r,language:g,magicComments:p}),C=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return a.createElement(k,{as:"div",className:(0,s.Z)(n,g&&!n.includes(`language-${g}`)&&`language-${g}`)},E&&a.createElement("div",{className:N.codeBlockTitle},E),a.createElement("div",{className:N.codeBlockContent},a.createElement(S,(0,o.Z)({},P,{theme:f,code:Z,language:g??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(N.codeBlockLines,C&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(z,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:y[t],showLineNumbers:C})))))})),a.createElement("div",{className:N.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&a.createElement(U,{className:N.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),a.createElement(W,{className:N.codeButton,code:Z}))))}function G(e){let{children:t,...n}=e;const r=(0,c.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?q:Z;return a.createElement(s,(0,o.Z)({key:String(r)},n),l)}var Q=n(6353);var Y=n(4842);const J={details:"details_JTGx",isBrowser:"isBrowser_vnMP",collapsibleContent:"collapsibleContent_JcvN"};function K(e){return!!e&&("SUMMARY"===e.tagName||K(e.parentElement))}function X(e,t){return!!e&&(e===t||X(e.parentElement,t))}function ee(e){let{summary:t,children:n,...r}=e;const l=(0,c.Z)(),i=(0,a.useRef)(null),{collapsed:m,setCollapsed:u}=(0,Y.u)({initialState:!r.open}),[d,p]=(0,a.useState)(r.open),g=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,o.Z)({},r,{ref:i,open:d,"data-collapsed":m,className:(0,s.Z)(J.details,l&&J.isBrowser,r.className),onMouseDown:e=>{K(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;K(t)&&X(t,i.current)&&(e.preventDefault(),m?(u(!1),p(!0)):u(!0))}}),g,a.createElement(Y.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),p(!e)}},a.createElement("div",{className:J.collapsibleContent},n)))}const te={details:"details_js0V"},ne="alert alert--info";function ae(e){let{...t}=e;return a.createElement(ee,(0,o.Z)({},t,{className:(0,s.Z)(ne,te.details,t.className)}))}var re=n(7452);function oe(e){return a.createElement(re.Z,e)}const le={containsTaskList:"containsTaskList_qK6E"};const ce={img:"img_bD7V"};const se="admonition_VVkV",ie="admonitionHeading_hkPO",me="admonitionIcon___3H",ue="admonitionContent_ebGP";const de={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(R.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(R.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(R.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(R.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(R.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},pe={secondary:"note",important:"info",success:"tip",warning:"danger"};function ge(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const he={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(G,e)},a:function(e){return a.createElement(Q.Z,e)},pre:function(e){return a.createElement(G,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ae,(0,o.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&le.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,ce.img))}));var t},h1:e=>a.createElement(oe,(0,o.Z)({as:"h1"},e)),h2:e=>a.createElement(oe,(0,o.Z)({as:"h2"},e)),h3:e=>a.createElement(oe,(0,o.Z)({as:"h3"},e)),h4:e=>a.createElement(oe,(0,o.Z)({as:"h4"},e)),h5:e=>a.createElement(oe,(0,o.Z)({as:"h5"},e)),h6:e=>a.createElement(oe,(0,o.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:o}=ge(e),l=function(e){const t=pe[e]??e,n=de[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),de.info)}(n),c=r??l.label,{iconComponent:i}=l,m=o??a.createElement(i,null);return a.createElement("div",{className:(0,s.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,se)},a.createElement("div",{className:ie},a.createElement("span",{className:me},m),c),a.createElement("div",{className:ue},t))},mermaid:n(4240).Z};function fe(e){let{children:t}=e;return a.createElement(r.Zo,{components:he},t)}},9243:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(3603),r=n(3658),o=n(6353);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return a.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},9264:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(3603),r=n(3658),o=n(6353);const l={tag:"tag_UYIU",tagRegular:"tagRegular_ujY9",tagWithCount:"tagWithCount_KLJg"};function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)(l.tag,c?l.tagWithCount:l.tagRegular)},n,c&&a.createElement("span",null,c))}},8999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(3603),r=n(3658),o=n(9996),l=n(9264);const c={tags:"tags_oVC7",tag:"tag_SH9a"};function s(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:c.tag},a.createElement(l.Z,{label:t,permalink:n}))}))))}},1228:(e,t,n)=>{"use strict";n.d(t,{C:()=>c,n:()=>l});var a=n(3603),r=n(2839);const o=a.createContext(null);function l(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const l=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return a.createElement(o.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}},3826:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var a=n(3603),r=n(8748);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return a[Math.min(o,a.length-1)]}(n,t,e)}}},222:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);