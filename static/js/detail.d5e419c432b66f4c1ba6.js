(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},211:function(e,t,o){var n=o(217),a="object"==typeof self&&self&&self.Object===Object&&self,r=n||a||Function("return this")();e.exports=r},212:function(e,t,o){var n=o(211).Symbol;e.exports=n},213:function(e,t,o){},214:function(e,t,o){var r=o(215),i=o(210);e.exports=function(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}},215:function(e,t,o){var v=o(210),y=o(216),w=o(218),O=Math.max,j=Math.min;e.exports=function(n,a,e){var r,i,o,c,l,d,s=0,u=!1,p=!1,t=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(e){var t=r,o=i;return r=i=void 0,s=e,c=n.apply(o,t)}function f(e){var t=e-d;return void 0===d||a<=t||t<0||p&&o<=e-s}function b(){var e,t=y();if(f(t))return g(t);l=setTimeout(b,(e=a-(t-d),p?j(e,o-(t-s)):e))}function g(e){return l=void 0,t&&r?m(e):(r=i=void 0,c)}function h(){var e,t=y(),o=f(t);if(r=arguments,i=this,d=t,o){if(void 0===l)return s=e=d,l=setTimeout(b,a),u?m(e):c;if(p)return clearTimeout(l),l=setTimeout(b,a),m(d)}return void 0===l&&(l=setTimeout(b,a)),c}return a=w(a)||0,v(e)&&(u=!!e.leading,o=(p="maxWait"in e)?O(w(e.maxWait)||0,a):o,t="trailing"in e?!!e.trailing:t),h.cancel=function(){void 0!==l&&clearTimeout(l),r=d=i=l=void(s=0)},h.flush=function(){return void 0===l?c:g(y())},h}},216:function(e,t,o){var n=o(211);e.exports=function(){return n.Date.now()}},217:function(o,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;o.exports=t}).call(this,t(67))},218:function(e,t,o){var n=o(210),a=o(219),r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=c.test(e);return o||l.test(e)?d(e.slice(2),o?2:8):i.test(e)?NaN:+e}},219:function(e,t,o){var n=o(220),a=o(223);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},220:function(e,t,o){var n=o(212),a=o(221),r=o(222),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(i&&i in Object(e)?a:r)(e)}},221:function(e,t,o){var n=o(212),a=Object.prototype,r=a.hasOwnProperty,i=a.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),o=e[c];try{var n=!(e[c]=void 0)}catch(e){}var a=i.call(e);return n&&(t?e[c]=o:delete e[c]),a}},222:function(e,t){var o=Object.prototype.toString;e.exports=function(e){return o.call(e)}},223:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},224:function(e,t){e.exports=function(){}},227:function(e,t,o){"use strict";o.r(t),o.d(t,"Detail",function(){return _});function n(n){function a(){var e=document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.firstChild&&e.removeChild(e.firstChild)}function r(){return function(){this.page.identifier=i.identifier,this.page.url=i.url,this.page.title=n.title}}function e(){var e,t;e=document.body,(t=window.document.getElementById("dsq-embed-scr"))&&e.removeChild(t),window.DISQUS&&(window.DISQUS.reset(),window.DISQUS=void 0,a())}var i=Object.assign({},c,n);return Object(L.useEffect)(function(){return setTimeout(function(){var e,t,o;window.DISQUS&&document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:r()}):(a(),n.shortname&&(window.disqus_config=r(),window.disqus_shortname=i.shortname,e="https://"+i.shortname+".disqus.com/embed.js",t=document.body,(o=window.document.createElement("script")).async=!0,o.src=e,o.id="dsq-embed-scr",t.appendChild(o)))},i.defer),e},[n.identifier]),Object(L.createElement)("div",{id:"disqus_thread"})}function a(e){var t=O();return L.createElement(w,{className:t.root,label:e.label,component:l.b,to:e.link,clickable:!0})}function u(e){var t=x();return L.createElement("div",{className:t.root},L.createElement("img",{src:e.cover,alt:e.title,className:t.cover}),L.createElement(j.a,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),L.createElement("div",{className:t.divider}),e.tags&&e.tags.map(function(e){return L.createElement(a,Object(h.a)({key:e.id},e))}),L.createElement(n,Object(h.a)({title:e.title},e.disqus)))}var h=o(7),L=o(0),p=o(51),r=o(151),i=o(155),m=o(35),f=o(15),b=o(52),g=(o(213),o(22)),c={identifier:"",url:"",shortname:"",defer:4e3},l=o(26),R=o(1),D=o(2),H=(o(4),o(3)),d=o(80),z=Object(d.a)(L.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=o(5),v=o(23),M=o(9),P=o(8),B=o(66),y=L.forwardRef(function(e,t){function o(e){e.stopPropagation(),g&&g(e)}var n=e.avatar,a=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,d=e.component,s=e.deleteIcon,u=e.disabled,p=void 0!==u&&u,m=e.icon,f=e.label,b=e.onClick,g=e.onDelete,h=e.onKeyUp,v=e.size,y=void 0===v?"medium":v,w=e.variant,O=void 0===w?"default":w,j=Object(D.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),x=L.useRef(null),k=Object(M.a)(x,t),S=!(!1===i||!b)||i,C="small"===y,E=d||(S?B.a:"div"),T=E===B.a?{component:"div"}:{},I=null;if(g){var N=Object(H.a)("default"!==l&&("default"===O?a["deleteIconColor".concat(Object(P.a)(l))]:a["deleteIconOutlinedColor".concat(Object(P.a)(l))]),C&&a.deleteIconSmall);I=s&&L.isValidElement(s)?L.cloneElement(s,{className:Object(H.a)(s.props.className,a.deleteIcon,N),onClick:o}):L.createElement(z,{className:Object(H.a)(a.deleteIcon,N),onClick:o})}var $=null;n&&L.isValidElement(n)&&($=L.cloneElement(n,{className:Object(H.a)(a.avatar,n.props.className,C&&a.avatarSmall,"default"!==l&&a["avatarColor".concat(Object(P.a)(l))])}));var W=null;return m&&L.isValidElement(m)&&(W=L.cloneElement(m,{className:Object(H.a)(a.icon,m.props.className,C&&a.iconSmall,"default"!==l&&a["iconColor".concat(Object(P.a)(l))])})),L.createElement(E,Object(R.a)({role:S||g?"button":void 0,className:Object(H.a)(a.root,r,"default"!==l&&[a["color".concat(Object(P.a)(l))],S&&a["clickableColor".concat(Object(P.a)(l))],g&&a["deletableColor".concat(Object(P.a)(l))]],"default"!==O&&[a.outlined,{primary:a.outlinedPrimary,secondary:a.outlinedSecondary}[l]],p&&a.disabled,C&&a.sizeSmall,S&&a.clickable,g&&a.deletable),"aria-disabled":!!p||void 0,tabIndex:S||g?0:void 0,onClick:b,onKeyUp:function(e){if(h&&h(e),e.currentTarget===e.target){var t=e.key;!g||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&x.current&&x.current.blur():g(e)}},ref:k},T,j),$||W,L.createElement("span",{className:Object(H.a)(a.label,C&&a.labelSmall)},f),I)}),w=Object(s.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],o=Object(v.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(v.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(v.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(v.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(v.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(v.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(v.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(v.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(v.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(v.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:o,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(v.c)(o,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(v.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(v.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(v.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(v.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(y),O=Object(r.a)(function(e){return Object(i.a)({root:{margin:e.spacing(1,.5)}})}),j=o(48),x=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={margin:e.spacing(0),maxWidth:g.a,width:"100%",padding:e.spacing(0,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})}),k=o(214),S=o.n(k),C=o(224),E=o.n(C);function Q(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function T(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function X(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var o=getComputedStyle(e,null);return T(o.overflowY,t)||T(o.overflowX,t)||(n=e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView.frameElement:null)&&(n.clientHeight<e.scrollHeight||n.clientWidth<e.scrollWidth)}var n}function Y(e,t,o,n,a,r,i,c){return r<e&&t<i||e<r&&i<t?0:r<=e&&c<=o||t<=i&&o<=c?r-e-n:t<i&&c<o||r<e&&o<c?i-t+a:0}function I(e,t){var o=t.scrollMode,n=t.block,a=t.inline,r=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof r?r:function(e){return e!==r};if(!Q(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,d=[],s=e;Q(s)&&c(s);){if((s=s.parentNode)===l){d.push(s);break}s===document.body&&X(s)&&!X(document.documentElement)||X(s,i)&&d.push(s)}for(var u=window.visualViewport?visualViewport.width:innerWidth,p=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),g=b.height,h=b.width,v=b.top,y=b.right,w=b.bottom,O=b.left,j="start"===n||"nearest"===n?v:"end"===n?w:v+g/2,x="center"===a?O+h/2:"end"===a?y:O,k=[],S=0;S<d.length;S++){var C=d[S],E=C.getBoundingClientRect(),T=E.height,I=E.width,N=E.top,$=E.right,W=E.bottom,L=E.left;if("if-needed"===o&&0<=v&&0<=O&&w<=p&&y<=u&&N<=v&&w<=W&&L<=O&&y<=$)return k;var R=getComputedStyle(C),D=parseInt(R.borderLeftWidth,10),H=parseInt(R.borderTopWidth,10),z=parseInt(R.borderRightWidth,10),M=parseInt(R.borderBottomWidth,10),P=0,B=0,q="offsetWidth"in C?C.offsetWidth-C.clientWidth-D-z:0,U="offsetHeight"in C?C.offsetHeight-C.clientHeight-H-M:0;if(l===C)P="start"===n?j:"end"===n?j-p:"nearest"===n?Y(f,f+p,p,H,M,f+j,f+j+g,g):j-p/2,B="start"===a?x:"center"===a?x-u/2:"end"===a?x-u:Y(m,m+u,u,D,z,m+x,m+x+h,h),P=Math.max(0,P+f),B=Math.max(0,B+m);else{P="start"===n?j-N-H:"end"===n?j-W+M+U:"nearest"===n?Y(N,W,T,H,M+U,j,j+g,g):j-(N+T/2)+U/2,B="start"===a?x-L-D:"center"===a?x-(L+I/2)+q/2:"end"===a?x-$+z+q:Y(L,$,I,D,z+q,x,x+h,h);var V=C.scrollLeft,_=C.scrollTop;j+=_-(P=Math.max(0,Math.min(_+P,C.scrollHeight-T+U))),x+=V-(B=Math.max(0,Math.min(V+B,C.scrollWidth-I+q)))}k.push({el:C,top:P,left:B})}return k}function N(e){return e===Object(e)&&0!==Object.keys(e).length}function $(i){function o(t){return function(){u(!0),-1!==m&&clearTimeout(m),c!==t&&l(t),function(e,t){var o,n=!e.ownerDocument.documentElement.contains(e);if(N(t)&&"function"==typeof t.behavior)return t.behavior(n?[]:I(e,t));if(!n){var a=!1===(o=t)?{block:"end",inline:"nearest"}:N(o)?o:{block:"start",inline:"nearest"};(function(e,a){void 0===a&&(a="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(e){var t=e.el,o=e.top,n=e.left;t.scroll&&r?t.scroll({top:o,left:n,behavior:a}):(t.scrollTop=o,t.scrollLeft=n)})})(I(e,a),a.behavior)}}(document.getElementById(t),{behavior:"smooth"}),history.pushState&&history.pushState({anchor:t},document.title,"#"+t);var e=setTimeout(function(){u(!1),f(-1)},4100);f(e)}}var e,t,n=Object(W.a)(),a=q(),r=L.useState(null),c=r[0],l=r[1],d=L.useState(!1),s=d[0],u=d[1],p=L.useState(-1),m=p[0],f=p[1],b=L.useCallback(function(){if(!(i.items.length<=0)){for(var e,o,t,n=(e=i.items[0],(o=function(e){if(e&&e.children){var t=[e.id];return e.children.forEach(function(e){t=t.concat(o(e))}),t}return[e.id]})(e)),a=n.length-1;0<=a&&!(document.documentElement.scrollTop<200);a--){var r=document.getElementById(n[a]);if(r&&r.offsetTop<document.documentElement.scrollTop+document.documentElement.clientHeight/8){t=r;break}}t&&c!==t.id&&l(t.id)}},[i.items]);function g(e){var t=0===e.position;return L.createElement(j.a,{onClick:o(e.id),component:"li",className:Object(H.a)(t?a.title:a.item,c===e.id?a.active:void 0),style:{paddingLeft:n.spacing(e.level)}},t?"Contents":e.label)}return e=s?null:b,t=L.useMemo(function(){return e?S()(e,166):E.a},[e,166]),L.useEffect(function(){if(t!==E.a)return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t),t.cancel()}},[t]),L.createElement("nav",{className:a.root},L.createElement("ol",{className:a.ol},i.items.map(function(e){return L.createElement(g,Object(h.a)({key:e.id},e))})))}var W=o(33),q=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={width:g.b,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"})[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},title:{fontSize:14,padding:e.spacing(1,0,.5,1),boxSizing:"content-box"},ol:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"},"&$active,&:active":{borderLeft:"4px solid "+e.palette.grey[400]}},active:{}})}),U=o(193),V=Object(r.a)(function(e){var t,o,n;return Object(i.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:((o={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.paper})[e.breakpoints.up("md")]={width:g.b},o),content:((n={padding:0,margin:0})[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},n)})}),_=function(o){var e=V(),t=Object(L.useState)(f.EmptyRouteMeta),n=t[0],a=t[1],r=Object(L.useState)([]),i=r[0],c=r[1],l=Object(L.useState)([]),d=l[0],s=l[1];return Object(L.useEffect)(function(){Object(h.b)(void 0,void 0,void 0,function(){var t;return Object(h.c)(this,function(e){switch(e.label){case 0:return[4,Object(m.a)(o.apiPath)];case 1:return t=e.sent(),a(t),c(t.metas),s(t.data.toc),[2]}})})},[o.apiPath]),L.createElement(U.a,{className:e.root},L.createElement(p.Helmet,null,L.createElement("title",null,n.title),L.createElement("script",{type:g.c},JSON.stringify(n.breadcrumbs)),i.map(function(e,t){return L.createElement("meta",Object(h.a)({key:t},e))})),L.createElement("div",{className:e.content},L.createElement(b.a,Object(h.a)({},n.breadcrumbs)),L.createElement(u,Object(h.a)({},n.data))),L.createElement("div",{className:e.toc},L.createElement($,{items:d})))};t.default=_}}]);
//# sourceMappingURL=detail.d5e419c432b66f4c1ba6.js.map