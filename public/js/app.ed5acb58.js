(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b58a279":"4e623124","chunk-2d217357":"01c5da2a","chunk-2d22d746":"958020dd","chunk-99108944":"c40d8f24"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-1b58a279":1,"chunk-99108944":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1b58a279":"20042e25","chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-99108944":"3d9f15a5"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1ec9":function(e,t,r){"use strict";var n=r("52dd"),a=r.n(n);a.a},"3c9d":function(e,t,r){},"52dd":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("br"),r("br"),r("div",{staticClass:"container"},[e.getError?r("Errors",{attrs:{msg:e.getError}}):e._e(),r("router-view")],1)],1)},o=[],s=r("5530"),u=r("2f62"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Authenticator")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Home"),r("span",{staticClass:"sr-only"},[e._v("(current)")])])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("Register")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{to:"/logout"},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Logout")])]):e._e()])])],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:Object(s["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},f=l,d=r("2877"),p=Object(d["a"])(f,i,c,!1,null,null,null),g=p.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.msg))])},h=[],v={props:["msg"]},b=v,_=(r("1ec9"),Object(d["a"])(b,m,h,!1,null,"cf1e1fc8",null)),k=_.exports,C={components:{Navbar:g,Errors:k},computed:Object(s["a"])({},Object(u["c"])(["getError"]))},y=C,w=Object(d["a"])(y,a,o,!1,null,null,null),j=w.exports,O=(r("45fc"),r("d3b7"),r("8c4f")),E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"jumbotron jumbotron-fluid"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"display-4"},[e._v("Mediendatenbank")])])])])}],S={name:"home",components:{}},A=S,L=(r("fb6c"),Object(d["a"])(A,E,x,!1,null,"17a3ffcd",null)),q=L.exports,I=(r("96cf"),r("1da1")),P=r("7338"),R=r.n(P),T={token:localStorage.getItem("token")||"",user:{},status:"",error:null},$={isLoggedIn:function(e){return!!e.token},getAuthStatus:function(e){return e.status},getUser:function(e){return e.user},getError:function(e){return e.error}},N={login:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("auth_request"),r.prev=2,r.next=5,R.a.post("/api/users/login",t);case 5:return a=r.sent,a.data.success&&(o=a.data.token,s=a.data.user,localStorage.setItem("token",o),R.a.defaults.headers.common["Authorization"]=o,n("auth_success",o,s)),r.abrupt("return",a);case 10:return r.prev=10,r.t0=r["catch"](2),n("auth_error",r.t0),r.abrupt("return",r.t0.response);case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("register_request"),r.prev=2,r.next=5,R.a.post("/api/users/register",t);case 5:return a=r.sent,void 0!==a.data.success&&n("register_success"),r.abrupt("return",a);case 10:return r.prev=10,r.t0=r["catch"](2),n("register_error",r.t0),r.abrupt("return",r.t0.response);case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},getProfile:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,R.a.get("/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete R.a.defaults.headers.common["Authorization"],G.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},M={auth_request:function(e){e.status="loading",e.error=null},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.status="loading",e.error=null},register_success:function(e){e.status="success",e.error=null},register_error:function(e,t){e.error=t.response.data.msg},logout:function(){T.status="",T.token="",T.user="",T.error=null},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t,e.status="success"}},U={state:T,getters:$,actions:N,mutations:M};n["a"].use(u["a"]);var z=new u["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:U}});n["a"].use(O["a"]);var B=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return r.e("chunk-99108944").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:function(){return r.e("chunk-1b58a279").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}}],D=new O["a"]({mode:"history",base:"/",routes:B});D.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?z.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&z.getters.isLoggedIn?r("/profile"):r()}));var G=D;n["a"].config.productionTip=!1,n["a"].prototype.$http=R.a;var H=localStorage.getItem("token");H&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=H),new n["a"]({router:G,store:z,render:function(e){return e(j)}}).$mount("#app")},fb6c:function(e,t,r){"use strict";var n=r("3c9d"),a=r.n(n);a.a}});
//# sourceMappingURL=app.ed5acb58.js.map