_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[152],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),r=t("98BF"),o=t("Zb5r"),i=t("AOjV"),p=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=r.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",p("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",p("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",p("code",null,e)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),p("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(o.a)(c)," \u53d8\u4f53:"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},Tapg:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("transformOrigin",[["origin",["transformOrigin"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pO5O:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transform-origin",function(){return t("wtb5")}])},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return O}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),r=t("iuhU"),o=t("ZMKu"),i=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(a){var e=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],r=t[1],o=Object(s.useState)({}),p=o[0],l=o[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function t(){l({height:e.current.contentDocument.body.scrollHeight})}}),[c]),i("iframe",Object(n.a)({},a,{ref:e,onLoad:function(){return r(!0)},style:p}))}function g(a){var e=a.color,t=a.snippet;return i("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},i("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function d(a){var e=a.preview,t=a.src,n=a.snippet,s=a.previewClassName,c=a.color,o=void 0===c?"gray":c;return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[o])}),i(g,{color:o,snippet:n}))}function O(a){var e=a.preview,t=a.src,n=a.previewClassName,c=a.snippet,p=a.color,d=void 0===p?"gray":p,O=a.min,j=void 0!==O&&O,f=Object(s.useRef)(),h=Object(o.h)(0),N=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],w=v[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){h.set(0)}));return a.observe(f.current),function(){a.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[d])},i("div",{className:j?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(a){return-a}))}},e?i("div",{className:Object(r.a)("rounded-t-xl",n,l[d],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[d],{"pointer-events-none":k})}))),i("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[d]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:d,snippet:c}))}},wtb5:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),r=t.n(c),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),g=t("Tapg"),d=t.n(g),O=t("8C7G"),j=t("wH44"),f=(r.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:d.a},meta:{title:"\u53d8\u6362\u539f\u70b9",description:"\u7528\u4e8e\u6307\u5b9a\u5143\u7d20\u8f6c\u6362\u7684\u6e90\u5934\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"\u7528\u9014",slug:"",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-1",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-2",children:[{title:"Origin values",slug:"origin-values"},{title:"\u53d8\u4f53",slug:"-3"},{title:"\u7981\u7528",slug:"-4"}]}]}),h=m.ContentsLayout;function N(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(o.a)(h,Object(n.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"",toc:!0},"\u7528\u9014"),Object(o.a)("p",null,"\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"origin-{keyword}")," \u529f\u80fd\u6307\u5b9a\u5143\u7d20\u7684\u53d8\u6362\u6e90\u3002")),Object(o.a)(u.a,{preview:'\n  <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-center transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-top-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-bottom-right transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-indigo-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 origin-left transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-center</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-top-left</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-bottom-right</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">origin-left</span> transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"-1",toc:!0},"\u54cd\u5e94\u5f0f"),Object(o.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u8f6c\u6362\u539f\u70b9\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u8f6c\u6362\u539f\u70b9\u529f\u80fd\u4e2d\u6dfb\u52a0 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"md:origin-top")," \u6765\u5e94\u7528 ",Object(o.a)("inlineCode",{parentName:"p"},"origin-top")," \u529f\u80fd\u5728\u4e2d\u7b49\u5c3a\u5bf8\u4ee5\u4e0a\u7684\u5c4f\u5e55\u4e0a\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"origin-center ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:origin-top")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1")),"\u6587\u6863\u3002"),Object(o.a)(l.a,{level:2,id:"-2",toc:!0},"\u81ea\u5b9a\u4e49"),Object(o.a)(l.a,{level:3,id:"origin-values",toc:!0},"Origin values"),Object(o.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTailwind \u4e3a\u6240\u6709\u5185\u7f6e\u7684\u6d4f\u89c8\u5668\u5173\u952e\u5b57\u9009\u9879\u63d0\u4f9b\u4e86\u8f6c\u6362\u6765\u6e90\u7684\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9a\u5236\u60a8\u7684 Tailwind \u4e3b\u9898\u914d\u7f6e\u7684 ",Object(o.a)("inlineCode",{parentName:"p"},"transformOrigin")," \u90e8\u5206\u6765\u6539\u53d8\uff0c\u6dfb\u52a0\u6216\u5220\u9664\u8fd9\u4e9b\u3002"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transformOrigin",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'24'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'6rem'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'full'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'100%'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"\u5728",Object(o.a)(p.a,{href:"/docs/theme#-5",passHref:!0},Object(o.a)("a",null,"\u4e3b\u9898\u5b9a\u5236\u6587\u6863")),"\u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5b9a\u5236\u9ed8\u8ba4\u4e3b\u9898\u7684\u4fe1\u606f\u3002"),Object(o.a)(l.a,{level:3,id:"-3",toc:!0},"\u53d8\u4f53")),Object(o.a)(O.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"-4",toc:!0},"\u7981\u7528")),Object(o.a)(j.a,{plugin:"transformOrigin",name:"transform-origin",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=f}},[["pO5O",0,2,6,1,3,4,5,7,8,9]]]);