(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{573:function(t,e,o){var content=o(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("858d8d02",content,!0,{sourceMap:!1})},583:function(t,e,o){"use strict";o(573)},584:function(t,e,o){var n=o(38)(!1);n.push([t.i,".auth-logo[data-v-392a8fc7]{color:#61d2b4!important;font-size:x-large;font-weight:700}",""]),t.exports=n},613:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(51),o(50),o(20),{head:{titleTemplate:"%s - Nuxt.js",meta:[]},data:function(){return{user:null,btntxt:"Log in",login:{email:"monzurul-islam@example.com",password:"password",visitorid:""}}},mounted:function(){},methods:{userLogin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.btntxt="Logging in.....",e.next=4,t.$auth.loginWith("laravelSanctum",{data:t.login}).then((function(e){t.btntxt="Login successful",console.log("asdfsf"),t.$axios.get("/admin/permissions").then((function(e){var o=e.data.data.map((function(t){return t.name}));t.$gates.setPermissions(o)})).catch((function(t){return console.log(t)}))}));case 4:e.sent,e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),t.btntxt="Log in",console.log(e.t0),(e.t0.response.status=401)?t.getmessage(e.t0.response.data.message):t.getmessage("Something went wrong");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},visitorId:function(){null!=fingerprint&&(this.visitorid=fingerprint.visitorId)}}}),l=(o(583),o(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"auth"}},[o("div",{staticClass:"row h-100"},[o("div",{staticClass:"col-lg-5 col-12"},[o("div",{attrs:{id:"auth-left"}},[o("div",{staticClass:"auth-logo"},[o("router-link",{attrs:{to:"/"}},[t._v("PL Tutorials")])],1),t._v(" "),o("h1",{staticClass:"auth-title"},[t._v("Log in.")]),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[o("div",{staticClass:"form-group position-relative has-icon-left mb-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],staticClass:"form-control form-control-xl",attrs:{type:"text",placeholder:"email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"form-group position-relative has-icon-left mb-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"form-control form-control-xl",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),t._m(1)]),t._v(" "),o("button",{staticClass:"btn btn-primary btn-block btn-lg shadow-lg mt-5"},[t._v("\n            "+t._s(t.btntxt)+"\n          ")])]),t._v(" "),o("div",{staticClass:"text-center mt-5 text-lg fs-4"},[o("p",{staticClass:"text-gray-600"},[t._v("\n            Don't remember your password ?\n\n            "),o("router-link",{staticClass:"font-bold",attrs:{to:"/auth/forgot-password"}},[t._v("Reset password")])],1)])])]),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-control-icon"},[e("i",{staticClass:"bi bi-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-control-icon"},[e("i",{staticClass:"bi bi-shield-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-7 d-none d-lg-block"},[e("div",{attrs:{id:"auth-right"}})])}],!1,null,"392a8fc7",null);e.default=component.exports}}]);