(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},212:function(e,t,n){var o=n(218),a="object"==typeof self&&self&&self.Object===Object&&self,r=o||a||Function("return this")();e.exports=r},213:function(e,t,n){var o=n(212).Symbol;e.exports=o},214:function(e,t,n){},215:function(e,t,n){var r=n(216),i=n(211);e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})}},216:function(e,t,n){var v=n(211),y=n(217),w=n(219),O=Math.max,j=Math.min;e.exports=function(o,a,e){var r,i,n,c,l,d,s=0,u=!1,p=!1,t=!0;if("function"!=typeof o)throw new TypeError("Expected a function");function m(e){var t=r,n=i;return r=i=void 0,s=e,c=o.apply(n,t)}function f(e){var t=e-d;return void 0===d||a<=t||t<0||p&&n<=e-s}function b(){var e,t=y();if(f(t))return g(t);l=setTimeout(b,(e=a-(t-d),p?j(e,n-(t-s)):e))}function g(e){return l=void 0,t&&r?m(e):(r=i=void 0,c)}function h(){var e,t=y(),n=f(t);if(r=arguments,i=this,d=t,n){if(void 0===l)return s=e=d,l=setTimeout(b,a),u?m(e):c;if(p)return clearTimeout(l),l=setTimeout(b,a),m(d)}return void 0===l&&(l=setTimeout(b,a)),c}return a=w(a)||0,v(e)&&(u=!!e.leading,n=(p="maxWait"in e)?O(w(e.maxWait)||0,a):n,t="trailing"in e?!!e.trailing:t),h.cancel=function(){void 0!==l&&clearTimeout(l),r=d=i=l=void(s=0)},h.flush=function(){return void 0===l?c:g(y())},h}},217:function(e,t,n){var o=n(212);e.exports=function(){return o.Date.now()}},218:function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(68))},219:function(e,t,n){var o=n(211),a=n(220),r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):i.test(e)?NaN:+e}},220:function(e,t,n){var o=n(221),a=n(224);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==o(e)}},221:function(e,t,n){var o=n(213),a=n(222),r=n(223),i=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(i&&i in Object(e)?a:r)(e)}},222:function(e,t,n){var o=n(213),a=Object.prototype,r=a.hasOwnProperty,i=a.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),n=e[c];try{var o=!(e[c]=void 0)}catch(e){}var a=i.call(e);return o&&(t?e[c]=n:delete e[c]),a}},223:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},224:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},225:function(e,t){e.exports=function(){}},228:function(e,t,n){"use strict";n.r(t);function o(o){function a(){var e=document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.firstChild&&e.removeChild(e.firstChild)}function r(){return function(){this.page.identifier=i.identifier,this.page.url=i.url,this.page.title=o.title}}function e(){var e,t;e=document.body,(t=window.document.getElementById("dsq-embed-scr"))&&e.removeChild(t),window.DISQUS&&(window.DISQUS.reset(),window.DISQUS=void 0,a())}var i=Object.assign({},c,o);return Object(v.useEffect)(function(){return setTimeout(function(){var e,t,n;window.DISQUS&&document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:r()}):(a(),o.shortname&&(window.disqus_config=r(),window.disqus_shortname=i.shortname,e="https://"+i.shortname+".disqus.com/embed.js",t=document.body,(n=window.document.createElement("script")).async=!0,n.src=e,n.id="dsq-embed-scr",t.appendChild(n)))},i.defer),e},[o.identifier]),Object(v.createElement)("div",{id:"disqus_thread"})}function a(e){var t=j();return v.createElement(O,{className:t.root,label:e.label,component:l.b,to:e.link,clickable:!0})}function u(e){var t=x();return v.createElement("div",{className:t.root},v.createElement("img",{src:e.cover,alt:e.title,className:t.cover}),v.createElement(k.a,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),v.createElement("div",{className:t.divider}),e.tags&&e.tags.map(function(e){return v.createElement(a,Object(h.a)({key:e.id},e))}),v.createElement(o,Object(h.a)({title:e.title},e.disqus)))}var h=n(7),v=n(0),L=n.n(v),p=n(52),r=n(152),i=n(156),m=n(35),f=n(15),b=n(53),g=(n(214),n(22)),c={identifier:"",url:"",shortname:"",defer:4e3},l=n(26),R=n(1),D=n(2),H=(n(4),n(3)),d=n(81),M=Object(d.a)(L.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=n(5),y=n(23),P=n(9),z=n(8),B=n(67),w=L.a.forwardRef(function(e,t){function n(e){e.stopPropagation(),g&&g(e)}var o=e.avatar,a=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,d=e.component,s=e.deleteIcon,u=e.disabled,p=void 0!==u&&u,m=e.icon,f=e.label,b=e.onClick,g=e.onDelete,h=e.onKeyUp,v=e.size,y=void 0===v?"medium":v,w=e.variant,O=void 0===w?"default":w,j=Object(D.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),k=L.a.useRef(null),x=Object(P.a)(k,t),S=!(!1===i||!b)||i,E="small"===y,C=d||(S?B.a:"div"),T=C===B.a?{component:"div"}:{},I=null;if(g){var N=Object(H.a)("default"!==l&&("default"===O?a["deleteIconColor".concat(Object(z.a)(l))]:a["deleteIconOutlinedColor".concat(Object(z.a)(l))]),E&&a.deleteIconSmall);I=s&&L.a.isValidElement(s)?L.a.cloneElement(s,{className:Object(H.a)(s.props.className,a.deleteIcon,N),onClick:n}):L.a.createElement(M,{className:Object(H.a)(a.deleteIcon,N),onClick:n})}var $=null;o&&L.a.isValidElement(o)&&($=L.a.cloneElement(o,{className:Object(H.a)(a.avatar,o.props.className,E&&a.avatarSmall,"default"!==l&&a["avatarColor".concat(Object(z.a)(l))])}));var W=null;return m&&L.a.isValidElement(m)&&(W=L.a.cloneElement(m,{className:Object(H.a)(a.icon,m.props.className,E&&a.iconSmall,"default"!==l&&a["iconColor".concat(Object(z.a)(l))])})),L.a.createElement(C,Object(R.a)({role:S||g?"button":void 0,className:Object(H.a)(a.root,r,"default"!==l&&[a["color".concat(Object(z.a)(l))],S&&a["clickableColor".concat(Object(z.a)(l))],g&&a["deletableColor".concat(Object(z.a)(l))]],"default"!==O&&[a.outlined,{primary:a.outlinedPrimary,secondary:a.outlinedSecondary}[l]],p&&a.disabled,E&&a.sizeSmall,S&&a.clickable,g&&a.deletable),"aria-disabled":!!p||void 0,tabIndex:S||g?0:void 0,onClick:b,onKeyUp:function(e){if(h&&h(e),e.currentTarget===e.target){var t=e.key;!g||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&k.current&&k.current.blur():g(e)}},ref:x},T,j),$||W,L.a.createElement("span",{className:Object(H.a)(a.label,E&&a.labelSmall)},f),I)}),O=Object(s.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(y.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(y.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(y.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(y.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(y.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(y.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(y.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(y.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(y.c)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(y.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(y.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(y.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(y.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(w),j=Object(r.a)(function(e){return Object(i.a)({root:{margin:e.spacing(1,.5)}})}),k=n(49),x=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={margin:e.spacing(0),maxWidth:g.a,width:"100%",padding:e.spacing(0,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})}),S=n(215),E=n.n(S),C=n(225),T=n.n(C);function Q(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function I(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function F(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return I(n.overflowY,t)||I(n.overflowX,t)||(o=e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView.frameElement:null)&&(o.clientHeight<e.scrollHeight||o.clientWidth<e.scrollWidth)}var o}function X(e,t,n,o,a,r,i,c){return r<e&&t<i||e<r&&i<t?0:r<=e&&c<=n||t<=i&&n<=c?r-e-o:t<i&&c<n||r<e&&n<c?i-t+a:0}function N(e,t){var n=t.scrollMode,o=t.block,a=t.inline,r=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof r?r:function(e){return e!==r};if(!Q(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,d=[],s=e;Q(s)&&c(s);){if((s=s.parentNode)===l){d.push(s);break}s===document.body&&F(s)&&!F(document.documentElement)||F(s,i)&&d.push(s)}for(var u=window.visualViewport?visualViewport.width:innerWidth,p=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),g=b.height,h=b.width,v=b.top,y=b.right,w=b.bottom,O=b.left,j="start"===o||"nearest"===o?v:"end"===o?w:v+g/2,k="center"===a?O+h/2:"end"===a?y:O,x=[],S=0;S<d.length;S++){var E=d[S],C=E.getBoundingClientRect(),T=C.height,I=C.width,N=C.top,$=C.right,W=C.bottom,L=C.left;if("if-needed"===n&&0<=v&&0<=O&&w<=p&&y<=u&&N<=v&&w<=W&&L<=O&&y<=$)return x;var R=getComputedStyle(E),D=parseInt(R.borderLeftWidth,10),H=parseInt(R.borderTopWidth,10),M=parseInt(R.borderRightWidth,10),P=parseInt(R.borderBottomWidth,10),z=0,B=0,q="offsetWidth"in E?E.offsetWidth-E.clientWidth-D-M:0,U="offsetHeight"in E?E.offsetHeight-E.clientHeight-H-P:0;if(l===E)z="start"===o?j:"end"===o?j-p:"nearest"===o?X(f,f+p,p,H,P,f+j,f+j+g,g):j-p/2,B="start"===a?k:"center"===a?k-u/2:"end"===a?k-u:X(m,m+u,u,D,M,m+k,m+k+h,h),z=Math.max(0,z+f),B=Math.max(0,B+m);else{z="start"===o?j-N-H:"end"===o?j-W+P+U:"nearest"===o?X(N,W,T,H,P+U,j,j+g,g):j-(N+T/2)+U/2,B="start"===a?k-L-D:"center"===a?k-(L+I/2)+q/2:"end"===a?k-$+M+q:X(L,$,I,D,M+q,k,k+h,h);var V=E.scrollLeft,_=E.scrollTop;j+=_-(z=Math.max(0,Math.min(_+z,E.scrollHeight-T+U))),k+=V-(B=Math.max(0,Math.min(V+B,E.scrollWidth-I+q)))}x.push({el:E,top:z,left:B})}return x}function $(e){return e===Object(e)&&0!==Object.keys(e).length}function W(i){function t(t){return function(){u(!0),-1!==m&&clearTimeout(m),c!==t&&l(t),function(e,t){var n,o=!e.ownerDocument.documentElement.contains(e);if($(t)&&"function"==typeof t.behavior)return t.behavior(o?[]:N(e,t));if(!o){var a=!1===(n=t)?{block:"end",inline:"nearest"}:$(n)?n:{block:"start",inline:"nearest"};(function(e,a){void 0===a&&(a="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(e){var t=e.el,n=e.top,o=e.left;t.scroll&&r?t.scroll({top:n,left:o,behavior:a}):(t.scrollTop=n,t.scrollLeft=o)})})(N(e,a),a.behavior)}}(document.getElementById(t),{behavior:"smooth"}),history.pushState&&history.pushState({anchor:t},document.title,"#"+t);var e=setTimeout(function(){u(!1),f(-1)},4100);f(e)}}var e,n,o=Object(q.a)(),a=U(),r=v.useState(null),c=r[0],l=r[1],d=v.useState(!1),s=d[0],u=d[1],p=v.useState(-1),m=p[0],f=p[1],b=v.useCallback(function(){if(!(i.items.length<=0)){for(var e,n,t,o=(e=i.items[0],(n=function(e){if(e&&e.children){var t=[e.id];return e.children.forEach(function(e){t=t.concat(n(e))}),t}return[e.id]})(e)),a=o.length-1;0<=a&&!(document.documentElement.scrollTop<200);a--){var r=document.getElementById(o[a]);if(r&&r.offsetTop<document.documentElement.scrollTop+document.documentElement.clientHeight/8){t=r;break}}t&&c!==t.id&&l(t.id)}},[i.items]);e=s?null:b,n=v.useMemo(function(){return e?E()(e,166):T.a},[e,166]),v.useEffect(function(){if(n!==T.a)return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n),n.cancel()}},[n]);var g=function(e){return v.createElement(v.Fragment,null,v.createElement(k.a,{onClick:t(e.id),component:"li",className:Object(H.a)(a.item,c===e.id?a.active:void 0),style:{paddingLeft:o.spacing(e.level)}},e.label),0<e.children.length&&v.createElement(k.a,{component:"ol",className:a.ul},e.children.map(function(e){return v.createElement(g,Object(h.a)({key:e.id},e))})))};return v.createElement("nav",{className:a.root},i.items.map(function(e){return v.createElement(g,Object(h.a)({key:e.id},e))}))}var q=n(33),U=Object(r.a)(function(e){var t;return Object(i.a)({root:((t={width:g.b,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"})[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},ul:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"},"&$active,&:active":{borderLeft:"4px solid "+e.palette.grey[400]}},active:{}})}),V=n(194);n.d(t,"Detail",function(){return Y});var _=Object(r.a)(function(e){var t,n,o;return Object(i.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:((n={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.default})[e.breakpoints.up("md")]={width:g.b},n),content:((o={padding:0,margin:0})[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},o)})}),Y=function(n){var e=_(),t=Object(v.useState)(f.EmptyRouteMeta),o=t[0],a=t[1],r=Object(v.useState)([]),i=r[0],c=r[1],l=Object(v.useState)([]),d=l[0],s=l[1];return Object(v.useEffect)(function(){Object(h.b)(void 0,void 0,void 0,function(){var t;return Object(h.c)(this,function(e){switch(e.label){case 0:return[4,Object(m.a)(n.apiPath)];case 1:return t=e.sent(),a(t),c(t.metas),s(t.data.toc),[2]}})})},[n.apiPath]),v.createElement(V.a,{className:e.root},v.createElement(p.Helmet,null,v.createElement("title",null,o.title),v.createElement("script",{type:g.c},JSON.stringify(o.breadcrumbs)),i.map(function(e,t){return v.createElement("meta",Object(h.a)({key:t},e))})),v.createElement("div",{className:e.content},v.createElement(b.a,Object(h.a)({},o.breadcrumbs)),v.createElement(u,Object(h.a)({},o.data))),v.createElement("div",{className:e.toc},v.createElement(W,{items:d})))};t.default=Y}}]);
//# sourceMappingURL=detail.01b68410fa1ff84a2589.js.map