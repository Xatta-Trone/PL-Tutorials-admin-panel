(window.webpackJsonp=window.webpackJsonp||[]).push([[29,5,7],{541:function(e,t,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("9ccbdcf4",content,!0,{sourceMap:!1})},542:function(e,t,r){"use strict";r(541)},543:function(e,t,r){var n=r(38)(!1);n.push([e.i,".page-heading[data-v-616abe38]{margin:0 0 1rem}",""]),e.exports=n},544:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(542),r(11)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"616abe38",null);t.default=component.exports},546:function(e,t,r){"use strict";r.r(t);var n={props:["servererrors","chkkey"]},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.servererrors,(function(t,i){return r("span",{key:i},[t[0]==e.chkkey?r("div",{staticClass:"invalid-feedback"},[e._v("\n      "+e._s(t[1].join(","))+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports},582:function(e,t,r){var content=r(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("5c9ddaee",content,!0,{sourceMap:!1})},601:function(e,t,r){e.exports=r.p+"img/1.b3a5b17.jpg"},603:function(e,t,r){"use strict";r(582)},604:function(e,t,r){var n=r(38)(!1);n.push([e.i,".chat[data-v-feeda5fe]{border-radius:5px}.chat.chat-left .chat-message[data-v-feeda5fe]{color:#fff;float:left!important}.chat .chat-message[data-v-feeda5fe]{background-color:#fafbfb!important;border-radius:.267rem!important;box-shadow:0 2px 6px 0 rgba(0,0,0,.3)!important;clear:both!important;color:#525361;float:right!important;margin:.2rem 0 1.8rem .2rem!important;max-width:calc(100% - 5rem)!important;padding:.75rem 1rem!important;position:relative!important;text-align:left!important;word-break:break-word!important}",""]),e.exports=n},658:function(e,t,r){"use strict";r.r(t);r(20),r(264),r(262);var n=r(545),o=r(166),l=r(546),c=r(602),d={layout:"app",components:{CustomForm:o.default,CustomError:l.default,TimeAgo:c.TimeAgo},data:function(){return{loading:!1,chatboxdisabled:!1,user:null,messages:[],currentmessage:{message:"",user_id:this.$nuxt.$route.params.id,replied_by:this.$nuxt.$auth.user.name+"||"+this.$nuxt.$auth.user.student_id}}},mounted:function(){var e=this;this.$echo.channel("chat-admin").listen(".chat-msg",(function(t){console.log(t),null!=t.msg&&e.messages.push(t.msg)})),console.log(this.$nuxt.$route.params.id),this.getData()},methods:{removeError:function(i){console.log(i),this.serverErrors.splice(i,1)},getData:function(){var e=this,t=this,r=t.$nuxt.$route.params.id;t.loading=!0,t.$axios.get("admin/users/"+r).then((function(e){t.loading=!1,console.log(e),t.user=e.data.user})).then((function(){return e.getMessages()})).catch((function(r){t.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")?e.getmessage(r.response.data.message):e.getmessage("")}))},getMessages:function(){var e=this,t=this,r=t.$nuxt.$route.params.id;t.loading=!0,t.$axios.get("admin/users/chat/"+r).then((function(e){t.loading=!1,console.log(e),t.messages=e.data.chat})).catch((function(r){t.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")?e.getmessage(r.response.data.message):e.getmessage("")}))},submit:function(){var e=this;if(console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.$v.$invalid)return this.$toast.error("Filup the required fields!!");var t=this;t.$nuxt.$route.params.id;t.chatboxdisabled=!0,this.$axios.post("admin/chats/create",this.currentmessage).then((function(r){t.messages.push(r.data.chat),t.currentmessage.message="",t.chatboxdisabled=!1,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message),e.$v.$reset()})).catch((function(r){t.chatboxdisabled=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&e.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(r.response.data.errors))}))},dltmsg:function(e,i){var t=this;if(confirm("are you sure ?")){var r=this;r.chatboxdisabled=!0,this.$axios.delete("admin/chats/"+e.id).then((function(n){e.deleted_at=new Date,r.currentmessage.message="",r.chatboxdisabled=!1,console.log(n),n.data.hasOwnProperty("message")&&t.getmessage(n.data.message)})).catch((function(e){r.chatboxdisabled=!1,console.log("Errrr",e),e.response.data.hasOwnProperty("message")&&t.getmessage(e.response.data.message),e.response.data.hasOwnProperty("errors")&&(t.serverErrors=Object.entries(e.response.data.errors))}))}}},validations:{currentmessage:{message:{required:n.required},user_id:{required:n.required},replied_by:{required:n.required}}}},m=(r(603),r(11)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"Chat",urlto:"/users",urltxt:"Go back"}}),e._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"media d-flex align-items-center"},[n("div",{staticClass:"avatar me-3"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":r(601),alt:"","data-srcset":""}}),e._v(" "),n("span",{staticClass:"avatar-status bg-success"})]),e._v(" "),n("div",{staticClass:"name flex-grow-1"},[e.user?n("h6",{staticClass:"mb-0"},[e._v(e._s(e.user.name))]):e._e(),e._v(" "),n("span",{staticClass:"text-xs"},[e._v("Online")])]),e._v(" "),n("button",{staticClass:"btn btn-sm"},[n("i",{attrs:{"data-feather":"x"}})])])]),e._v(" "),n("div",{staticClass:"card-body pt-4 bg-grey"},[n("div",{staticClass:"chat-content"},e._l(e.messages,(function(t,i){return n("div",{key:t.id,staticClass:"chat",class:{"chat-left":null==t.replied_by}},[n("div",{staticClass:"chat-body"},[n("div",{staticClass:"chat-message",class:null==t.deleted_at?"text-dark":"text-muted"},[n("small",[n("time-ago",{attrs:{datetime:t.created_at,tooltip:""}}),e._v("\n                        ago")],1),n("br"),e._v("\n\n                      "+e._s(t.message)+"\n                      "),null==t.deleted_at?n("a",{on:{click:function(r){return r.preventDefault(),e.dltmsg(t,i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1):e._e()])])])})),0)]),e._v(" "),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"\n                  message-form\n                  d-flex\n                  flex-direction-column\n                  align-items-center\n                "},[n("a",{staticClass:"black",attrs:{href:"http://"}},[n("i",{attrs:{"data-feather":"smile"}})]),e._v(" "),n("div",{staticClass:"d-flex flex-grow-1 ml-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentmessage.message,expression:"currentmessage.message"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type your message..",disabled:e.chatboxdisabled},domProps:{value:e.currentmessage.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.currentmessage,"message",t.target.value)}}})])])])])])])])],1)],1)}),[],!1,null,"feeda5fe",null);t.default=component.exports;installComponents(component,{Pageheader:r(544).default})}}]);