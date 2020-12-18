_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("98BF"),i=t("Zb5r"),r=t("AOjV"),l=o.a.createElement;function p(e){var n=e.plugin,t=e.name,s=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),p="By default, ".concat(s.length?"only ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(i.a)(o)," variants:"),l(r.a,{path:"variants.extend",before:"...",add:Object(a.a)({},n,o)}))}},ABV8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".flex-row":{"flex-direction":"row"},".flex-row-reverse":{"flex-direction":"row-reverse"},".flex-col":{"flex-direction":"column"},".flex-col-reverse":{"flex-direction":"column-reverse"}},n("flexDirection"))}}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),o=(t("Btb4"),t("AI3G")),c=t("iuhU"),i=s.a.createElement;function r(e){var n=e.value;return"string"===typeof n?i("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),n.map((function(e,t){return i(a.Fragment,{key:t},i(r,{value:e}),t===n.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof n?i("span",{className:"token boolean"},n.toString()):n.toString()}function l(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,o=e.type,l=void 0===o?"inserted":o;return i("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(n).map((function(e,t){return i(a.Fragment,{key:t},i("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),i("span",{className:"token operator"},":")," ",i(r,{value:n[e]}),i("span",{className:"token punctuation"},","),"\n");var o})))}function p(e){var n=e.path,t=e.add,s=e.remove,c=e.before,r=e.after;return n="string"===typeof n?n.split("."):n,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",n.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),c&&Object(o.a)(c).map((function(e,t){return i(a.Fragment,{key:t},"  ".repeat(n.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(l,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},r&&Object(o.a)(r).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,i){let r;(t=t||{}).indent=t.indent||"\t",i=i||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+r.newLine+n.map((a,s)=>{const o=n.length-1===s?r.newLine:","+r.newLineOrSpace;let c=e(a,t,i+t.indent);return t.transform&&(c=t.transform(n,s,c)),r.indent+c+o}).join("")+r.pad+"]";return c.pop(),l(a)}if(s(n)){let a=Object.keys(n).concat(o(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+r.newLine+a.map((s,o)=>{const c=a.length-1===o?r.newLine:","+r.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),r.indent+String(u)+": "+d+c}).join("")+r.pad+"}";return c.pop(),l(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},GuPV:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-direction",function(){return t("sdhg")}])},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),o=t("8Kt/"),c=t.n(o),i=s.a.createElement;function r(e){var n=e.suffix,t=e.children+(n?" - ".concat(n):"");return i(c.a,null,i("title",{key:"title"},t),i("meta",{key:"twitter:title",name:"twitter:title",content:t}),i("meta",{key:"og:title",property:"og:title",content:t}))}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var a=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),i=t("ZMKu"),r=o.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var n=Object(s.useRef)(),t=Object(s.useState)(!1),o=t[0],c=t[1],i=Object(s.useState)({}),l=i[0],p=i[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(t);return t(),e.observe(n.current.contentDocument.body),function(){e.disconnect()}}function t(){p({height:n.current.contentDocument.body.scrollHeight})}}),[o]),r("iframe",Object(a.a)({},e,{ref:n,onLoad:function(){return c(!0)},style:l}))}function m(e){var n=e.color,t=e.snippet;return r("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[n],{"bg-gray-800":!l[n]})},r("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[n]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function f(e){var n=e.preview,t=e.src,a=e.snippet,s=e.previewClassName,o=e.color,i=void 0===o?"gray":o;return r("div",{className:"relative overflow-hidden mb-8"},n?r("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[i])}),r(m,{color:i,snippet:a}))}function b(e){var n=e.preview,t=e.src,a=e.previewClassName,o=e.snippet,l=e.color,f=void 0===l?"gray":l,b=e.min,v=void 0!==b&&b,k=Object(s.useRef)(),h=Object(i.h)(0),x=Object(s.useRef)(),O=Object(s.useState)(!1),j=O[0],w=O[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){h.set(0)}));return e.observe(k.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:k,className:"relative rounded-t-xl ".concat(u[f])},r("div",{className:v?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(h,(function(e){return-e}))}},n?r("div",{className:Object(c.a)("rounded-t-xl",a,p[f],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):r(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[f],{"pointer-events-none":j})}))),r("div",{ref:x,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:x,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[f]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(m,{color:f,snippet:o}))}},sdhg:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var a=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),i=t("7ljp"),r=t("YFqc"),l=t.n(r),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("ABV8"),f=t.n(m),b=t("8C7G"),v=t("wH44"),k=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:f.a},meta:{title:"Flex Direction",description:"Utilities for controlling the direction of flex items.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Row",slug:"row",children:[]},{title:"Row reversed",slug:"row-reversed",children:[]},{title:"Column",slug:"column",children:[]},{title:"Column reversed",slug:"column-reversed",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function x(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.a)(h,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"row",toc:!0},"Row"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row")," to position flex items horizontally in the same direction as text:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-row space-x-4">\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"row-reversed",toc:!0},"Row reversed"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row-reverse")," to position flex items horizontally in the opposite direction:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-row-reverse space-x-reverse space-x-4">\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"column",toc:!0},"Column"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-col")," to position flex items vertically:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-col space-y-4">\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"column-reversed",toc:!0},"Column reversed"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-col-reverse")," to position flex items vertically in the opposite direction:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-col-reverse space-y-reverse space-y-4">\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To apply a flex direction utility only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:flex-row")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-col ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-row")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(b.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(v.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=k},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return g}));var a=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("ekQu"),i=t("8Kt/"),r=t.n(i),l=t("nOHt"),p=t("ap0H"),u=t("1Q1k"),d=o.a.createElement;function g(e){var n=Object(l.useRouter)();return d(o.a.Fragment,null,d(p.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(r.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),i=t("AI3G"),r=t("Zb5r"),l=o.a.createElement;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.plugin,t=e.name,s=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["GuPV",0,2,6,1,3,4,5,7]]]);