!function(l){function e(e){for(var t,a,n=e[0],r=e[1],i=e[2],c=0,o=[];c<n.length;c++)a=n[c],Object.prototype.hasOwnProperty.call(m,a)&&m[a]&&o.push(m[a][0]),m[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(A&&A(e);o.length;)o.shift()();return s.push.apply(s,i||[]),u()}function u(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==m[i]&&(n=!1)}n&&(s.splice(t--,1),e=p(p.s=a[0]))}return e}var a={},d={1:0},m={1:0},s=[];function p(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(s){var e=[];d[s]?e.push(d[s]):0!==d[s]&&{0:1}[s]&&e.push(d[s]=new Promise(function(e,n){for(var t="static/css/"+({0:"detail"}[s]||s)+"."+{0:"cd9e0f6915d320c57c47"}[s]+".css",r=p.p+t,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=(l=a[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===t||c===r))return e()}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){var l;if((c=(l=o[i]).getAttribute("data-href"))===t||c===r)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var t=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete d[s],u.parentNode.removeChild(u),n(a)},u.href=r,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){d[s]=0}));var a=m[s];if(0!==a)if(a)e.push(a[2]);else{var t=new Promise(function(e,t){a=m[s]=[e,t]});e.push(a[2]=t);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,p.nc&&r.setAttribute("nonce",p.nc),r.src=p.p+"static/js/"+({0:"detail"}[s]||s)+"."+{0:"cd9e0f6915d320c57c47"}[s]+".js";var i=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(c);var t=m[s];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;i.message="Loading chunk "+s+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,t[1](i)}m[s]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:r})},12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},p.m=l,p.c=a,p.d=function(e,t,a){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(p.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)p.d(a,n,function(e){return t[e]}.bind(null,n));return a},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var A=n;s.push([147,2]),u()}({100:function(e,t,a){},101:function(e,t,a){"use strict";"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.error("SW register failed:",e)})});var n=document.getElementById("google-analytics");n&&(window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date,window.ga("create",n.getAttribute("content"),"auto"),window.ga("send","pageview"))},13:function(e,t,a){"use strict";var n,r,i;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.RoutePathPrefix||(t.RoutePathPrefix={})).HOME="",i.HOME_ALIAS="home",i.TAGS="tags",i.CATEGORIES="categories",i.POSTS="posts",i.PAGES="pages",i.NAVIGATION="navigation",i.PROFILE="profile",t.EmptyRouteMeta={breadcrumbs:{},key:"",path:"",title:"",type:"",url:""},(r=t.MetaName||(t.MetaName={})).DESCRIPTION="description",r.AUTHOR="author",r.OPEN_GRAPH_TITLE="og:title",r.OPEN_GRAPH_DESCRIPTION="og:description",r.OPEN_GRAPH_IMAGE="og:image",r.OPEN_GRAPH_URL="og:url",r.OPEN_GRAPH_TYPE="og:type",r.OPEN_GRAPH_SITE_NAME="og:site_name",r.GOOGLE_SITE_VERIFICATION="google-site-verification",r.GOOGLE_SITE_TRACKING="google-analytics",(n=t.MetaValue||(t.MetaValue={})).WEBSITE="website",n.ARTICLE="article"},147:function(e,t,a){"use strict";a.r(t),a(100),a(101);function A(e){var t=N();return f.createElement(S.a,{className:t.card},f.createElement(x.a,{component:m.b,to:String(e.link)},f.createElement(w.a,{className:t.media,image:e.cover,alt:e.title}),f.createElement(k.a,null,f.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),f.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},e.summary))))}function n(a){var e=I(),t=Object(f.useState)(E.EmptyRouteMeta),n=t[0],r=t[1],i=Object(f.useState)([]),c=i[0],o=i[1],l=Object(f.useState)([]),u=l[0],s=l[1],d=Object(f.useState)(!0),m=d[0],p=d[1];return Object(f.useEffect)(function(){Object(b.b)(void 0,void 0,void 0,function(){var t;return Object(b.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(a.apiPath)];case 1:return t=e.sent(),r(t),s(t.data),o(t.metas),[2]}})}),p(!(a.apiPath===Object(h.buildURLPath)(E.RoutePathPrefix.HOME_ALIAS)))},[a.apiPath]),f.createElement(_.a,{className:e.root},f.createElement(O.Helmet,null,f.createElement("title",null,n.title),f.createElement("script",{type:y.c},JSON.stringify(n.breadcrumbs)),c.map(function(e,t){return f.createElement("meta",Object(b.a)({key:t},e))})),m&&f.createElement(T.a,Object(b.a)({},n.breadcrumbs)),u.map(function(e){return f.createElement(A,Object(b.a)({key:e.id},e))}))}function d(e){var t=G();return f.createElement(S.a,{className:t.root},f.createElement(x.a,{component:m.b,to:e.link},f.createElement(k.a,null,f.createElement("div",{className:t.head},f.createElement(L.a,{container:!0,alignItems:"center"},f.createElement(L.a,{item:!0,xs:!0},f.createElement(R.a,{gutterBottom:!0,variant:"h4"},e.label)))),f.createElement(C.a,null),f.createElement("div",{className:t.desc},f.createElement(R.a,{color:"textSecondary",variant:"body2"},e.total," resources")))))}function r(a){var e=M(),t=Object(f.useState)(E.EmptyRouteMeta),n=t[0],r=t[1],i=Object(f.useState)([]),c=i[0],o=i[1],l=Object(f.useState)([]),u=l[0],s=l[1];return Object(f.useEffect)(function(){Object(b.b)(void 0,void 0,void 0,function(){var t;return Object(b.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(a.apiPath)];case 1:return t=e.sent(),r(t),o(t.metas),s(t.data),[2]}})})},[a.apiPath]),f.createElement(_.a,{className:e.root},f.createElement(O.Helmet,null,f.createElement("title",null,n.title),f.createElement("script",{type:y.c},JSON.stringify(n.breadcrumbs)),c.map(function(e,t){return f.createElement("meta",Object(b.a)({key:t},e))})),f.createElement(T.a,Object(b.a)({},n.breadcrumbs)),u.map(function(e,t){return f.createElement(d,Object(b.a)({key:t},e))}))}function o(){return f.createElement(g.c,null,B.map(function(t,e){return f.createElement(g.a,{key:e,path:t.path,exact:t.exact,render:function(e){return f.createElement(t.component,Object(b.a)({},e,{apiPath:t.apiPath(e.match)}))}})}))}function l(e){var t={menu:f.createElement(W.a,null),shape:f.createElement(D.a,null),bookmark:f.createElement(Q.a,null),info:f.createElement(z.a,null),link:f.createElement(X.a,null),home:f.createElement(Z.a,null),up:f.createElement(ee.a,null),navigate_next:f.createElement(ae.a,null)},a=f.createElement(W.a,null);return Object.keys(t).includes(e.type)?t[e.type]:a}function u(e){var t=e.children,a=be(),n=Object(U.a)({disableHysteresis:!0,threshold:100});return f.createElement(me.a,{in:n},f.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.scrollToTop},t))}function s(e){var t,a,n=be(),r=f.useState(!1),i=r[0],c=r[1];return f.createElement("div",{className:n.root},f.createElement(ne.a,null),f.createElement(re.a,{position:"fixed",className:Object(F.a)(n.appBar,((t={})[n.appBarShift]=i,t))},f.createElement(ie.a,null,f.createElement(ce.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){c(!0)},className:Object(F.a)(n.menuButton,i&&n.hide)},f.createElement(W.a,null)),f.createElement(R.a,{variant:"h6",noWrap:!0},e.title))),f.createElement(oe.a,{className:n.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:n.drawerPaper}},f.createElement("div",{className:n.drawerHeader},f.createElement(ce.a,{onClick:function(){c(!1)}},f.createElement(fe.a,null))),f.createElement(C.a,null),f.createElement(le.a,null,e.menus.map(function(e){return f.createElement(ue.a,{button:!0,key:e.id,component:m.b,to:e.link},f.createElement(de.a,null,f.createElement(l,{type:e.icon||"menu"})),f.createElement(se.a,{primary:e.label}))}))),f.createElement("main",{className:Object(F.a)(n.content,((a={})[n.contentShift]=i,a))},f.createElement(ie.a,{id:"back-to-top-anchor",className:n.drawerHeader}),e.children),f.createElement(u,Object(b.a)({},e),f.createElement(pe.a,{color:"primary",size:"small","aria-label":"scroll back to top"},f.createElement(l,{type:"up"}))))}var f=a(0),i=a(10),b=a(6),m=a(24),p=a(200),c=a(60),g=a(32),h=a(17),E=a(13),O=a(48),v=a(61),P=a(151),j=a(33),y=a(20),w=a(81),S=a(183),x=a(185),k=a(186),R=a(46),N=Object(v.a)(function(e){var t;return Object(P.a)({card:((t={margin:e.spacing(1),maxWidth:y.a})[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),media:{width:"100%",maxWidth:"100%"}})}),T=a(49),_=a(187),I=Object(v.a)(function(e){var t;return Object(P.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})}),L=a(188),C=a(189),G=Object(v.a)(function(e){var t;return Object(P.a)({root:((t={margin:e.spacing(1),maxWidth:y.a,width:"100%"})[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),head:{margin:e.spacing(1,1)},link:{"&:hover":{cursor:"pointer"},textDecoration:"none"},desc:{margin:e.spacing(1)},button:{padding:e.spacing(0),margin:e.spacing(0)}})}),M=Object(v.a)(function(e){var t;return Object(P.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),content:{padding:0,margin:0,display:"flex",flexWrap:"wrap",overflow:"hidden"}})}),B=[{path:"/",exact:!0,component:n,apiPath:function(){return Object(h.buildURLPath)(E.RoutePathPrefix.HOME_ALIAS)}},{path:"/posts/:year/:month/:date/:id",exact:!0,component:Object(c.a)(function(){return a.e(0).then(a.bind(null,220))}),apiPath:function(e){return Object(h.buildURLPath)(E.RoutePathPrefix.POSTS,e.params.year,e.params.month,e.params.date,e.params.id)}},{path:"/pages/:id",exact:!0,component:Object(c.a)(function(){return a.e(0).then(a.bind(null,220))}),apiPath:function(e){return Object(h.buildURLPath)(E.RoutePathPrefix.PAGES,e.params.id)}},{path:"/posts",exact:!0,component:n,apiPath:function(){return Object(h.buildURLPath)(E.RoutePathPrefix.POSTS)}},{path:"/categories/:category",exact:!0,component:n,apiPath:function(e){return Object(h.buildURLPath)(E.RoutePathPrefix.CATEGORIES,e.params.category)}},{path:"/tags/:tag",exact:!0,component:n,apiPath:function(e){return Object(h.buildURLPath)(E.RoutePathPrefix.TAGS,e.params.tag)}},{path:"/categories/",exact:!0,component:r,apiPath:function(){return Object(h.buildURLPath)(E.RoutePathPrefix.CATEGORIES)}},{path:"/tags",exact:!0,component:r,apiPath:function(){return Object(h.buildURLPath)(E.RoutePathPrefix.TAGS)}}],F=a(3),U=a(190),H=a(45),W=a.n(H),V=a(86),D=a.n(V),J=a(87),Q=a.n(J),q=a(88),z=a.n(q),K=a(89),X=a.n(K),Y=a(90),Z=a.n(Y),$=a(91),ee=a.n($),te=a(55),ae=a.n(te),ne=a(192),re=a(193),ie=a(194),ce=a(195),oe=a(201),le=a(196),ue=a(202),se=a(198),de=a(197),me=a(191),pe=a(199),Ae=a(92),fe=a.n(Ae),be=Object(v.a)(function(e){return Object(P.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(b.a)(Object(b.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),maxWidth:"100%",backgroundColor:e.palette.background.default,marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),maxWidth:"100%",backgroundColor:e.palette.background.default,marginLeft:0},scrollToTop:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}})}),ge=a(93);i.hydrate(f.createElement(function(){var e=Object(f.useState)([]),t=e[0],a=e[1],n=Object(f.useState)(ge.EmptyProfile),r=n[0],i=n[1],c=f.useState("TL; DR")[0];return Object(f.useEffect)(function(){Object(b.b)(void 0,void 0,void 0,function(){var t;return Object(b.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(Object(h.buildURLPath)(E.RoutePathPrefix.NAVIGATION))];case 1:return t=e.sent(),a(t.data),[2]}})}),Object(b.b)(void 0,void 0,void 0,function(){var t;return Object(b.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(Object(h.buildURLPath)(E.RoutePathPrefix.PROFILE))];case 1:return t=e.sent(),i(t.data),[2]}})})},[]),f.createElement(p.a,{theme:y.d},f.createElement(m.a,null,f.createElement(s,{title:c,profile:r,menus:t},f.createElement(o,null))))},null),document.getElementById("app"))},17:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildURLPath=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"/"+e.join("/")},t.buildFullURL=function(e,t){return e+t}},20:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return o});var n=a(83),r=a.n(n)()({palette:{primary:{light:"#FFFFFF",main:"#F5F5F5",dark:"#C2C2C2",contrastText:"#000000"},background:{paper:"#F8F9FA",default:"#F5F5F5"}}}),i=240,c=800,o="application/ld+json"},33:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(6),r=a(82),i=a.n(r),c=function(t){return Object(n.b)(void 0,void 0,void 0,function(){return Object(n.c)(this,function(e){switch(e.label){case 0:return[4,i.a.get("/api"+t+".json")];case 1:return[2,e.sent().data]}})})}},49:function(e,t,a){"use strict";a.d(t,"a",function(){return A});var n=a(0),r=a(24),i=a(61),c=a(151),o=a(20),l=a(55),u=a.n(l),s=a(64),d=a(148),m=a(150),p=Object(i.a)(function(e){var t;return Object(c.a)({root:{justifyContent:"center",flexWrap:"wrap",width:"100%",maxWidth:o.a},paper:((t={backgroundColor:e.palette.background.default,padding:e.spacing(1,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})}),A=function(e){var t=p(),a=e.itemListElement||[];return n.createElement("div",{className:t.root},n.createElement(s.a,{elevation:0,className:t.paper},n.createElement(m.a,{separator:n.createElement(u.a,{fontSize:"small"}),"aria-label":"breadcrumb"},a.map(function(e,t){return n.createElement(d.a,{key:t,color:"inherit",component:r.b,to:new URL(e.item).pathname},e.name)}))))}},81:function(e,t,a){"use strict";var n=a(0),r=a(3),i=a(84),c=a.n(i);a.d(t,"a",function(){return o});var o=function(e){new c.a({elements_selector:".lazy"}).update();var t=e.image?e.image.replace(".png",".webp"):"";return n.createElement("picture",null,n.createElement("source",{"data-srcset":t,type:"image/webp"}),n.createElement("img",{alt:e.alt,className:Object(r.a)(e.className,"lazy"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAJWAQMAAAA6AtlxAAAAA1BMVEX///+nxBvIAAAAi0lEQVR42u3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wbVlQABttAC+QAAAABJRU5ErkJggg==","data-src":e.image}))}},93:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyProfile={"@context":"https://schema.org","@type":"Person",email:"",logo:{"@type":"ImageObject",url:""},name:"",url:new Map}}});
//# sourceMappingURL=main.61ec576868593a810c42.js.map