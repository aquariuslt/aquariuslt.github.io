(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},202:function(e,t,n){var a=n(208),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();e.exports=r},203:function(e,t,n){var a=n(202).Symbol;e.exports=a},204:function(e,t,n){},205:function(e,t,n){var r=n(206),i=n(201);e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),r(e,t,{leading:a,maxWait:t,trailing:o})}},206:function(e,t,n){var h=n(201),y=n(207),w=n(209),O=Math.max,j=Math.min;e.exports=function(a,o,e){var r,i,n,c,l,d,s=0,u=!1,p=!1,t=!0;if("function"!=typeof a)throw new TypeError("Expected a function");function m(e){var t=r,n=i;return r=i=void 0,s=e,c=a.apply(n,t)}function f(e){var t=e-d;return void 0===d||o<=t||t<0||p&&n<=e-s}function b(){var e,t=y();if(f(t))return g(t);l=setTimeout(b,(e=o-(t-d),p?j(e,n-(t-s)):e))}function g(e){return l=void 0,t&&r?m(e):(r=i=void 0,c)}function v(){var e,t=y(),n=f(t);if(r=arguments,i=this,d=t,n){if(void 0===l)return s=e=d,l=setTimeout(b,o),u?m(e):c;if(p)return clearTimeout(l),l=setTimeout(b,o),m(d)}return void 0===l&&(l=setTimeout(b,o)),c}return o=w(o)||0,h(e)&&(u=!!e.leading,n=(p="maxWait"in e)?O(w(e.maxWait)||0,o):n,t="trailing"in e?!!e.trailing:t),v.cancel=function(){void 0!==l&&clearTimeout(l),r=d=i=l=void(s=0)},v.flush=function(){return void 0===l?c:g(y())},v}},207:function(e,t,n){var a=n(202);e.exports=function(){return a.Date.now()}},208:function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(65))},209:function(e,t,n){var a=n(201),o=n(210),r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):i.test(e)?NaN:+e}},210:function(e,t,n){var a=n(211),o=n(214);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==a(e)}},211:function(e,t,n){var a=n(203),o=n(212),r=n(213),i=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):r(e)}},212:function(e,t,n){var a=n(203),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),n=e[c];try{var a=!(e[c]=void 0)}catch(e){}var o=i.call(e);return a&&(t?e[c]=n:delete e[c]),o}},213:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},214:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},215:function(e,t){e.exports=function(){}},218:function(e,t,n){"use strict";n.r(t);function a(a){function o(){var e=document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.firstChild&&e.removeChild(e.firstChild)}function r(){return function(){this.page.identifier=i.identifier,this.page.url=i.url,this.page.title=a.title}}function e(){var e,t;e=document.body,(t=window.document.getElementById("dsq-embed-scr"))&&e.removeChild(t),window.DISQUS&&(window.DISQUS.reset(),window.DISQUS=void 0,o())}var i=Object.assign({},c,a);return Object(f.useEffect)(function(){return setTimeout(function(){var e,t,n;window.DISQUS&&document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:r()}):(o(),a.shortname&&(window.disqus_config=r(),window.disqus_shortname=i.shortname,e="https://"+i.shortname+".disqus.com/embed.js",t=document.body,(n=window.document.createElement("script")).async=!0,n.src=e,n.id="dsq-embed-scr",t.appendChild(n)))},i.defer),e},[a.identifier]),Object(f.createElement)("div",{id:"disqus_thread"})}function o(e){var t=j();return f.createElement(O,{className:t.root,label:e.label,component:l.b,to:e.link,clickable:!0})}function u(e){var t=C();return f.createElement("div",{className:t.root},f.createElement(k.a,{image:e.cover,alt:e.title,className:t.cover}),f.createElement(x.a,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),f.createElement("div",{className:t.divider}),e.tags&&e.tags.map(function(e){return f.createElement(o,Object(m.a)({key:e.id},e))}),f.createElement(a,Object(m.a)({title:e.title},e.disqus)))}var m=n(6),f=n(0),W=n.n(f),p=n(47),r=n(60),i=n(149),b=n(32),g=n(13),v=n(48),h=(n(204),n(19)),c={identifier:"",url:"",shortname:"",defer:4e3},l=n(23),R=n(1),P=n(2),H=(n(4),n(3)),d=n(78),M=Object(d.a)(W.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=n(5),y=n(20),z=n(8),D=n(7),B=n(64),w=W.a.forwardRef(function(e,t){function n(e){e.stopPropagation(),g&&g(e)}var a=e.avatar,o=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,d=e.component,s=e.deleteIcon,u=e.disabled,p=void 0!==u&&u,m=e.icon,f=e.label,b=e.onClick,g=e.onDelete,v=e.onKeyUp,h=e.size,y=void 0===h?"medium":h,w=e.variant,O=void 0===w?"default":w,j=Object(P.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),k=W.a.useRef(null),x=Object(z.a)(k,t),C=!(!1===i||!b)||i,S="small"===y,E=d||(C?B.a:"div"),T=E===B.a?{component:"div"}:{},I=null;if(g){var N=Object(H.a)("default"!==l&&("default"===O?o["deleteIconColor".concat(Object(D.a)(l))]:o["deleteIconOutlinedColor".concat(Object(D.a)(l))]),S&&o.deleteIconSmall);I=s&&W.a.isValidElement(s)?W.a.cloneElement(s,{className:Object(H.a)(s.props.className,o.deleteIcon,N),onClick:n}):W.a.createElement(M,{className:Object(H.a)(o.deleteIcon,N),onClick:n})}var $=null;a&&W.a.isValidElement(a)&&($=W.a.cloneElement(a,{className:Object(H.a)(o.avatar,a.props.className,S&&o.avatarSmall,"default"!==l&&o["avatarColor".concat(Object(D.a)(l))])}));var L=null;return m&&W.a.isValidElement(m)&&(L=W.a.cloneElement(m,{className:Object(H.a)(o.icon,m.props.className,S&&o.iconSmall,"default"!==l&&o["iconColor".concat(Object(D.a)(l))])})),W.a.createElement(E,Object(R.a)({role:C||g?"button":void 0,className:Object(H.a)(o.root,r,"default"!==l&&[o["color".concat(Object(D.a)(l))],C&&o["clickableColor".concat(Object(D.a)(l))],g&&o["deletableColor".concat(Object(D.a)(l))]],"default"!==O&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[l]],p&&o.disabled,S&&o.sizeSmall,C&&o.clickable,g&&o.deletable),"aria-disabled":!!p||void 0,tabIndex:C||g?0:void 0,onClick:b,onKeyUp:function(e){if(v&&v(e),e.currentTarget===e.target){var t=e.key;!g||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&k.current&&k.current.blur():g(e)}},ref:x},T,j),$||L,W.a.createElement("span",{className:Object(H.a)(o.label,S&&o.labelSmall)},f),I)}),O=Object(s.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(y.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(y.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(y.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(y.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(y.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(y.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(y.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(y.c)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(y.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(y.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(y.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(y.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(w),j=Object(r.a)(function(e){return Object(i.a)({root:{margin:e.spacing(1,.5)}})}),k=n(80),x=n(45),C=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={margin:e.spacing(0),maxWidth:h.a,width:"100%",padding:e.spacing(0,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})}),S=n(205),E=n.n(S),T=n(215),I=n.n(T);function Q(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function N(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function F(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return N(n.overflowY,t)||N(n.overflowX,t)}return!1}function X(e,t,n,a,o,r,i,c){return r<e&&t<i||e<r&&i<t?0:r<=e&&c<=n||t<=i&&n<=c?r-e-a:t<i&&c<n||r<e&&n<c?i-t+o:0}function $(e,t){var n=t.scrollMode,a=t.block,o=t.inline,r=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof r?r:function(e){return e!==r};if(!Q(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,d=[],s=e;Q(s)&&c(s);){if((s=s.parentNode)===l){d.push(s);break}s===document.body&&F(s)&&!F(document.documentElement)||F(s,i)&&d.push(s)}for(var u=window.visualViewport?visualViewport.width:innerWidth,p=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),g=b.height,v=b.width,h=b.top,y=b.right,w=b.bottom,O=b.left,j="start"===a||"nearest"===a?h:"end"===a?w:h+g/2,k="center"===o?O+v/2:"end"===o?y:O,x=[],C=0;C<d.length;C++){var S=d[C],E=S.getBoundingClientRect(),T=E.height,I=E.width,N=E.top,$=E.right,L=E.bottom,W=E.left;if("if-needed"===n&&0<=h&&0<=O&&w<=p&&y<=u&&N<=h&&w<=L&&W<=O&&y<=$)return x;var R=getComputedStyle(S),P=parseInt(R.borderLeftWidth,10),H=parseInt(R.borderTopWidth,10),M=parseInt(R.borderRightWidth,10),z=parseInt(R.borderBottomWidth,10),D=0,B=0,q="offsetWidth"in S?S.offsetWidth-S.clientWidth-P-M:0,U="offsetHeight"in S?S.offsetHeight-S.clientHeight-H-z:0;if(l===S)D="start"===a?j:"end"===a?j-p:"nearest"===a?X(f,f+p,p,H,z,f+j,f+j+g,g):j-p/2,B="start"===o?k:"center"===o?k-u/2:"end"===o?k-u:X(m,m+u,u,P,M,m+k,m+k+v,v),D=Math.max(0,D+f),B=Math.max(0,B+m);else{D="start"===a?j-N-H:"end"===a?j-L+z+U:"nearest"===a?X(N,L,T,H,z+U,j,j+g,g):j-(N+T/2)+U/2,B="start"===o?k-W-P:"center"===o?k-(W+I/2)+q/2:"end"===o?k-$+M+q:X(W,$,I,P,M+q,k,k+v,v);var V=S.scrollLeft,_=S.scrollTop;j+=_-(D=Math.max(0,Math.min(_+D,S.scrollHeight-T+U))),k+=V-(B=Math.max(0,Math.min(V+B,S.scrollWidth-I+q)))}x.push({el:S,top:D,left:B})}return x}function L(e){return e===Object(e)&&0!==Object.keys(e).length}function q(i){var e,t,n=Object(U.a)(),a=V(),o=f.useState(null),c=o[0],l=o[1],r=f.useState(!1),d=r[0],s=r[1],u=f.useCallback(function(){for(var e,n,t,a=(e=i.items&&i.items[0],(n=function(e){if(e.children){var t=[e.id];return e.children.forEach(function(e){t=t.concat(n(e))}),t}return[e.id]})(e)),o=a.length-1;0<=o&&!(document.documentElement.scrollTop<200);o--){var r=document.getElementById(a[o]);if(r&&r.offsetTop<document.documentElement.scrollTop+document.documentElement.clientHeight/8){t=r;break}}t&&c!==t.id?l(t.id):0<a.length&&l(a[0])},[i]);e=d?null:u,t=f.useMemo(function(){return e?E()(e,166):I.a},[e,166]),f.useEffect(function(){if(t!==I.a)return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t),t.cancel()}},[t]);var p=function(e){return f.createElement(f.Fragment,null,f.createElement(x.a,{onClick:(t=e.id,function(){s(!0),c!==t&&l(t),function(e,t){var n,a=!e.ownerDocument.documentElement.contains(e);if(L(t)&&"function"==typeof t.behavior)return t.behavior(a?[]:$(e,t));if(!a){var o=!1===(n=t)?{block:"end",inline:"nearest"}:L(n)?n:{block:"start",inline:"nearest"};(function(e,o){void 0===o&&(o="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(e){var t=e.el,n=e.top,a=e.left;t.scroll&&r?t.scroll({top:n,left:a,behavior:o}):(t.scrollTop=n,t.scrollLeft=a)})})($(e,o),o.behavior)}}(document.getElementById(t),{behavior:"smooth"}),setTimeout(function(){s(!1)},4100)}),component:"li",className:Object(H.a)(a.item,c===e.id?a.active:void 0),style:{paddingLeft:n.spacing(e.level)}},e.label),0<e.children.length&&f.createElement(x.a,{component:"ol",className:a.ul},e.children.map(function(e){return f.createElement(p,Object(m.a)({key:e.id},e))})));var t};return f.createElement("nav",{className:a.root},i.items.map(function(e){return f.createElement(p,Object(m.a)({key:e.id},e))}))}var U=n(30),V=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={width:h.b,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"})[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},ul:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"},"&$active,&:active":{borderLeft:"4px solid "+e.palette.grey[400]}},active:{}})}),_=n(185);n.d(t,"Detail",function(){return J});var Y=Object(r.a)(function(e){var t,n,a;return Object(i.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:((n={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.default})[e.breakpoints.up("md")]={width:h.b},n),content:((a={padding:0,margin:0})[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},a)})}),J=function(n){var e=Y(),t=Object(f.useState)(g.a),a=t[0],o=t[1],r=Object(f.useState)([]),i=r[0],c=r[1],l=Object(f.useState)([]),d=l[0],s=l[1];return Object(f.useEffect)(function(){Object(m.b)(void 0,void 0,void 0,function(){var t;return Object(m.c)(this,function(e){switch(e.label){case 0:return[4,Object(b.a)(n.apiPath)];case 1:return t=e.sent(),o(t),c(t.metas),s(t.data.toc),[2]}})})},[n.apiPath]),f.createElement(_.a,{className:e.root},f.createElement(p.Helmet,null,f.createElement("title",null,a.title),f.createElement("script",{type:h.c},JSON.stringify(a.breadcrumbs)),i.map(function(e,t){return f.createElement("meta",Object(m.a)({key:t},e))})),f.createElement("div",{className:e.content},f.createElement(v.a,Object(m.a)({},a.breadcrumbs)),f.createElement(u,Object(m.a)({},a.data))),f.createElement("div",{className:e.toc},f.createElement(q,{items:d})))};t.default=J}}]);
//# sourceMappingURL=detail.a50578b8208d05c686a3.js.map