(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[164],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),i=n("98BF"),c=n("Zb5r"),o=n("AOjV"),r=s.a.createElement;function l(e){var{plugin:t,name:n}=e,a=i.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(a.length?"\u53ea\u751f\u6210 ".concat(Object(c.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",r("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",r("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",r("code",null,t)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),r("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",a.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(c.a)(s)," \u53d8\u4f53:"),r(o.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),i=(n("Btb4"),n("AI3G")),c=n("iuhU"),o=s.a.createElement;function r(e){var{value:t}=e;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((e,n)=>o(a.Fragment,{key:n},o(r,{value:e}),n===t.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:n="",type:s="inserted"}=e;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,i)=>{return o(a.Fragment,{key:i},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),o("span",{className:"token operator"},":")," ",o(r,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:n,remove:s,before:c,after:r}=e;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>o(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),c&&Object(i.a)(c).map((e,n)=>o(a.Fragment,{key:n},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&o(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&o(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},r&&Object(i.a)(r).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>o(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),i=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,o){let r;(n=n||{}).indent=n.indent||"\t",o=o||"",r=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),o).replace(new RegExp(r.indent,"g"),o+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+r.newLine+t.map((a,s)=>{const i=t.length-1===s?r.newLine:","+r.newLineOrSpace;let c=e(a,n,o+n.indent);return n.transform&&(c=n.transform(t,s,c)),r.indent+c+i}).join("")+r.pad+"]";return c.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(i(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const s="{"+r.newLine+a.map((s,i)=>{const c=a.length-1===i?r.newLine:","+r.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,o+n.indent);return n.transform&&(d=n.transform(t,s,d)),r.indent+String(u)+": "+d+c}).join("")+r.pad+"}";return c.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},aP1M:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/visibility",function(){return n("fUQf")}])},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),s=n.n(a),i=n("8Kt/"),c=n.n(i),o=s.a.createElement;function r(e){var{suffix:t,children:n}=e,a=n+(t?" - ".concat(t):"");return o(c.a,null,o("title",{key:"title"},a),o("meta",{key:"twitter:title",name:"twitter:title",content:a}),o("meta",{key:"og:title",property:"og:title",content:a}))}},cXWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".visible":{visibility:"visible"},".invisible":{visibility:"hidden"}},t("visibility"))}}},fUQf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),s=n("Ff2n"),i=n("q1tI"),c=n.n(i),o=n("7ljp"),r=n("YFqc"),l=n.n(r),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),b=n("cXWA"),m=n.n(b),f=n("8C7G"),v=n("wH44"),O=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u53ef\u89c1\u6027 Visibility",description:"Utilities for controlling the visibility of an element.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u4e0d\u53ef\u89c1",slug:"",children:[]},{title:"\u53ef\u89c1",slug:"-1",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-2",children:[]},{title:"\u5b9a\u5236",slug:"-3",children:[{title:"\u53d8\u4f53",slug:"-4"},{title:"\u7981\u7528",slug:"-5"}]}]}),k=g.ContentsLayout;function j(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(o.a)(k,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"",toc:!0},"\u4e0d\u53ef\u89c1"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," \u9690\u85cf\u4e00\u4e2a\u5143\u7d20\uff0c\u4f46\u4ecd\u7136\u4fdd\u6301\u5b83\u5728 DOM \u4e2d\u7684\u4f4d\u7f6e\uff0c\u5f71\u54cd\u5176\u4ed6\u5143\u7d20\u7684\u5e03\u5c40\uff08\u4e0e ",Object(o.a)(l.a,{href:"/docs/display#hidden",passHref:!0},Object(o.a)("a",null,"display"))," \u6587\u6863\u4e2d\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},".hidden")," \u6bd4\u8f83\uff09\u3002")),Object(o.a)(u.a,{preview:'\n  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>\n  <div class="invisible rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>\n  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex justify-center space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">invisible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-10 space-x-4",color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"-1",toc:!0},"\u53ef\u89c1"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"visible")," \u4f7f\u4e00\u4e2a\u5143\u7d20\u53ef\u89c1\u3002\u8fd9\u5bf9\u4e8e\u5728\u4e0d\u540c\u7684\u5c4f\u5e55\u5c3a\u5bf8\u4e0b\u64a4\u9500 ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," \u5de5\u5177\u975e\u5e38\u6709\u7528\u3002")),Object(o.a)(u.a,{preview:'\n  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>\n  <div class="visible rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>\n  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex justify-center space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">visible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-10 space-x-4",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"-2",toc:!0},"\u54cd\u5e94\u5f0f"),Object(o.a)("p",null,"To apply a visibility utility only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:invisible")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," utility at medium screen sizes and above.\n\u8981\u4ec5\u5728\u4e00\u4e2a\u7279\u5b9a\u65ad\u70b9\u5e94\u7528 visibility \u529f\u80fd\uff0c\u8bf7\u5728\u73b0\u6709\u7684\u7c7b\u540d\u524d \u6dfb\u52a0 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u5c06\u7c7b ",Object(o.a)("inlineCode",{parentName:"p"},"md:invisisible")," \u6dfb\u52a0\u5230\u4e00\u4e2a\u5143\u7d20\u4e0a\uff0c\u5c31\u53ef\u4ee5\u5728\u4e2d\u7b49\u5927\u5c0f\u548c\u66f4\u5927\u7684\u5c4f\u5e55\u4e0a\u5e94\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," \u529f\u80fd\u7c7b\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"visible ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:invisible")," ...",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Tailwind \u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u4fe1\u606f\uff0c\u67e5\u770b ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1"))," \u6587\u6863\u3002"),Object(o.a)(p.a,{level:2,id:"-3",toc:!0},"\u5b9a\u5236"),Object(o.a)(p.a,{level:3,id:"-4",toc:!0},"\u53d8\u4f53")),Object(o.a)(f.a,{plugin:"visibility",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:3,id:"-5",toc:!0},"\u7981\u7528")),Object(o.a)(v.a,{plugin:"visibility",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=O},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),i=n.n(s),c=n("iuhU"),o=n("ZMKu"),r=i.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(s.useRef)(),{0:n,1:i}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){o({height:t.current.contentDocument.body.scrollHeight})}},[n]),r("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>i(!0),style:c}))}function b(e){var{color:t,snippet:n}=e;return r("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},r("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var{preview:t,src:n,snippet:a,previewClassName:s,color:i="gray"}=e;return r("div",{className:"relative overflow-hidden mb-8"},t?r("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):r(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[i])}),r(b,{color:i,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:i,color:l="gray",min:m=!1}=e,f=Object(s.useRef)(),v=Object(o.h)(0),O=Object(s.useRef)(),{0:k,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},r("div",{className:m?"md:w-88":void 0},r(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(v,e=>-e)}},t?r("div",{className:Object(c.a)("rounded-t-xl",a,p[l],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):r(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":k})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(o.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:l,snippet:i}))}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return g}));var a=n("wx14"),s=n("q1tI"),i=n.n(s),c=n("ekQu"),o=n("8Kt/"),r=n.n(o),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=i.a.createElement;function g(e){var t=Object(l.useRouter)();return d(i.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(r.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),i=n.n(s),c=n("AOjV"),o=n("AI3G"),r=n("Zb5r"),l=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(o.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",n," \u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",l("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),l(c.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["aP1M",0,2,6,1,3,4,5,7]]]);