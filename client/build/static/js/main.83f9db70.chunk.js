(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){"use strict";var c,r=n(59),a=n(187),o=n(29),u=n(57),i=n(37),s={user:{},authorized:null!==(c=Object(i.a)())&&void 0!==c&&c},j=Object(r.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case u.a.login:return Object(o.a)(Object(o.a)({},e),{},{authorized:!0,user:c.user});case u.a.logout:return Object(o.a)(Object(o.a)({},e),{},{authorized:!1,user:{}});case u.a.updateUser:return Object(o.a)(Object(o.a)({},e),{},{user:Object(o.a)(Object(o.a)({},e.user),c)});default:return e}}}),l=[a.a],b=Object(r.d)(j,r.a.apply(void 0,l));t.a=b},133:function(e,t,n){e.exports={"app-layout":"styles_app-layout__2ZY91","app-layout-content":"styles_app-layout-content__3x8Vs"}},344:function(e,t){},346:function(e,t){},365:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),a=n.n(r),o=n(18),u=n.n(o),i=n(90),s=n(51),j=n(29),l=n(110),b=n(17),d=n(368),f=n(369),O=function(){return Object(c.jsx)(d.a,{align:"center",justify:"center",children:Object(c.jsx)(f.a,{})})},p=function(e){var t=e.forceProtect,n=void 0===t||t,r=e.fallback,a=void 0===r?"/login":r,o=Object(l.a)(e,["forceProtect","fallback"]),u=Object(s.c)((function(e){return e.auth.authorized}));return n?u?Object(c.jsx)(b.b,Object(j.a)({},o)):Object(c.jsx)(b.a,{to:a}):Object(c.jsx)(b.b,Object(j.a)({},o))},h=n(372),x=n(91),m=n(371),v=n(373),y=n(370),g=n(61),_=function(e){var t=e.onSubmit,n=m.a.useForm(),r=Object(x.a)(n,1)[0],a=Object(s.c)((function(e){return function(e){var t,n;return{username:null!==(t=null===e||void 0===e||null===(n=e.username)||void 0===n?void 0:n._text)&&void 0!==t?t:"",password:""}}(e.auth.user)}));return Object(c.jsxs)(m.a,{form:r,initialValues:a,onFinish:function(){t(r)},children:[Object(c.jsx)(m.a.Item,{name:"username",rules:[{min:5}],children:Object(c.jsx)(v.a,{placeholder:"Username"})}),Object(c.jsx)(m.a.Item,{name:"password",children:Object(c.jsx)(v.a.Password,{placeholder:"Password"})}),Object(c.jsx)(d.a,{justify:"center",children:Object(c.jsx)(y.a,{children:Object(c.jsx)(g.a,{type:"primary",htmlType:"submit",children:"Submit"})})})]})},w=function(e){var t=e.visible,n=e.onClose,r=e.onSubmit;return Object(c.jsx)(h.a,{destroyOnClose:!0,visible:t,title:"Edit user",footer:null,onCancel:n,children:Object(c.jsx)(_,{onSubmit:function(e){e.validateFields().then((function(e){r(e)})).then((function(){n()}))}})})},k=n(374),S=n(377),C=n(376),T=n(375),U=n(92),z=n(133),P=n.n(z);function I(e){var t=e.children,n=Object(r.useState)(),a=Object(x.a)(n,2),o=a[0],u=a[1],i=Object(s.b)(),j=Object(s.c)((function(e){return e.auth.authorized})),l=function(){return u((function(e){return!e}))};return Object(c.jsxs)(k.a,{className:P.a["app-layout"],children:[j&&Object(c.jsx)(k.a.Header,{children:Object(c.jsxs)(d.a,{justify:"space-between",align:"center",children:[Object(c.jsx)(y.a,{children:Object(c.jsx)(g.a,{danger:!0,type:"primary",icon:Object(c.jsx)(C.a,{}),onClick:function(){i(Object(U.a)())},children:"Delete account"})}),Object(c.jsx)(y.a,{children:Object(c.jsxs)(S.b,{children:[Object(c.jsx)(g.a,{type:"primary",icon:Object(c.jsx)(T.a,{}),onClick:l,children:"Edit user"}),Object(c.jsx)(g.a,{type:"primary",onClick:function(){i(Object(U.c)())},children:"Logout"})]})})]})}),Object(c.jsxs)(k.a.Content,{className:P.a["app-layout-content"],children:[t,Object(c.jsx)(w,{visible:o,onClose:l,onSubmit:function(e){i(Object(U.f)(e))}})]})]})}n(364);var F=[{path:"/",exact:!0,component:Object(r.lazy)((function(){return n.e(4).then(n.bind(null,380))}))},{path:"/(login|signup)",exact:!0,component:Object(r.lazy)((function(){return n.e(3).then(n.bind(null,381))})),forceProtect:!1}];var E=function(){return Object(c.jsx)(I,{children:Object(c.jsxs)(b.d,{children:[F.map((function(e){var t=e.component,n=Object(l.a)(e,["component"]);return Object(c.jsx)(p,Object(j.a)(Object(j.a)({},n),{},{children:Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(O,{}),children:Object(c.jsx)(t,{})})}),n.path)})),Object(c.jsx)(b.b,{path:"*",children:Object(c.jsx)(b.a,{to:"/"})},"*")]})})},L=n(108),B=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,382)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(s.a,{store:L.a,children:Object(c.jsx)(E,{})})})}),document.getElementById("root")),B()},37:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return l}));var c=n(29),r=n(132),a=n.n(r),o={compact:!0,spaces:2},u=function(e){return a.a.xml2js(e,Object(c.a)({},o))},i=function(e){return a.a.js2xml({root:e},Object(c.a)({},o))},s=function(e){var t=localStorage.getItem("_token");return e?"".concat(e," ").concat(t):t},j=function(e){localStorage.setItem("_token",e)},l=function(){localStorage.removeItem("_token")}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={login:"AUTH_LOGIN",logout:"AUTH_LOGOUT",updateUser:"AUTH_UPDATE_USER"}},92:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return h}));var c=n(57),r=n(186),a=n.n(r),o=n(194),u=n(108),i=n(37),s=a.a.create({baseURL:"/api",headers:{"Content-Type":"text/xml"}});s.interceptors.response.use((function(e){return Object(i.e)(e.data)}),(function(e){if(403===e.response.status)return u.a.dispatch(f()),Promise.reject(e);var t=Object(i.e)(e.response.data).root.message;return o.a.error({message:"Error",description:t._text}),Promise.reject(e)}));var j=s,l=function(e){return{type:c.a.login,payload:e}},b=function(e){var t=e.username,n=e.password;return function(e){j.post("/login",Object(i.b)({password:n,username:t})).then((function(t){Object(i.d)(t.root.accessToken._text),e(l(t.root))}))}},d=function(e){var t=e.username,n=e.password;return function(e){j.post("/signup",Object(i.b)({password:n,username:t})).then((function(t){Object(i.d)(t.root.accessToken._text),e(l(t.root))}))}},f=function(){return function(e){Object(i.c)(),e({type:c.a.logout})}},O=function(){return function(e){j.get("/user",{headers:{authorization:Object(i.a)("Bearer")}}).then((function(t){e(l(t))}))}},p=function(e){var t=e.username,n=e.password;return function(e){j.put("/user",Object(i.b)({password:n,username:t}),{headers:{authorization:Object(i.a)("Bearer")}}).then((function(t){e({type:c.a.updateUser,payload:t.user})}))}},h=function(){return function(e){j.delete("/user",{headers:{authorization:Object(i.a)("Bearer")}}).then((function(t){e(f())}))}}}},[[365,1,2]]]);
//# sourceMappingURL=main.83f9db70.chunk.js.map