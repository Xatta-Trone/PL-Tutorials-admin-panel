(window.webpackJsonp=window.webpackJsonp||[]).push([[73,5],{538:function(e,t,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("73ab947b",content,!0,{sourceMap:!1})},539:function(e,t,r){"use strict";r(538)},540:function(e,t,r){var n=r(36)(!1);n.push([e.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),e.exports=n},541:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(539),r(11)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);t.default=component.exports},617:function(e,t,r){"use strict";r.r(t);r(12),r(56);var n={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","name","email","student_id","status","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var e=this;return this.$axios.get(this.url,{params:data}).catch((function(t){console.log("Err in datatble",t),e.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/users/edit/"+data.id)},chat:function(data){console.log(data),this.$nuxt.$router.push("/chats/user/"+data.id)},userdetail:function(data){console.log(data),this.$nuxt.$router.push("/users/detail/"+data.id)},userdelete:function(data,i){var e=this;console.log(data,i);var t="Are you sure ";if(null!=data.deleted_at&&(t+="to completely delete "),t+="?",confirm(t)){var r=this;r.loading=!0,console.log(null!=data.deleted_at);var n=null!=data.deleted_at;this.$axios.delete("/admin/users/"+data.id+"?forcedelete="+n.toString()).then((function(t){r.loading=!1,e.selectData=null!=data.deleted_at?"all":"deleted",t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){r.loading=!1,console.log(t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message)}))}},userrestore:function(data){var e=this;if(console.log(data),confirm("Are you sure ?")){console.log(null!=data.deleted_at);var t=this;t.loading=!0,this.$axios.get("admin/users/restore/"+data.id).then((function(r){t.loading=!1,e.selectData="all",r.data.hasOwnProperty("message")&&e.getmessage(r.data.message)})).catch((function(r){t.loading=!1,console.log(r),r.response.data.hasOwnProperty("message")?e.getmessage(r.response.data.message):e.getmessage("")}))}},userresetpass:function(data){var e=this;if(console.log(data),confirm("Are you sure to change the password ?")){console.log(null!=data.deleted_at);var t=this;t.loading=!0,this.$axios.get("admin/users/resetpass/"+data.id).then((function(r){t.loading=!1,r.data.hasOwnProperty("message")&&e.getmessage(r.data.message)})).catch((function(r){t.loading=!1,console.log(r),r.response.data.hasOwnProperty("message")?e.getmessage(r.response.data.message):e.getmessage("")}))}}}},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("content-placeholders",[r("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),r("content-placeholders-text",{attrs:{lines:3}})],1):r("div",[r("pageheader",{attrs:{title:"Users",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add User"}}),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"basicSelect"}},[e._v("Select data")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectData,expression:"selectData"}],staticClass:"form-select",attrs:{id:"basicSelect",name:"basicSelect"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectData=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"all"}},[e._v("All Users")]),e._v(" "),r("option",{attrs:{value:"deleted"}},[e._v("Deleted Users")])])])]),e._v(" "),r("v-server-table",{attrs:{url:e.serverurl+"admin/users?type="+e.selectData,columns:e.columns,options:e.options},scopedSlots:e._u([{key:"status",fn:function(t){var n=t.row;return r("div",{},[0==n.status?r("span",{directives:[{name:"show",rawName:"v-show",value:null==n.deleted_at,expression:"row.deleted_at == null"}],staticClass:"badge bg-danger"},[e._v("Inactive")]):e._e(),e._v(" "),1==n.status?r("span",{directives:[{name:"show",rawName:"v-show",value:null==n.deleted_at,expression:"row.deleted_at == null"}],staticClass:"badge bg-primary"},[e._v("Active")]):e._e(),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:null!=n.deleted_at,expression:"row.deleted_at != null"}],staticClass:"badge bg-danger"},[e._v("Deleted")])])}},{key:"actions",fn:function(t){var n=t.row;return r("div",{staticClass:"d-flex justify-content-around"},[r("a",{attrs:{href:"",title:"Chat"},on:{click:function(t){return t.preventDefault(),e.chat(n)}}},[r("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}})],1),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("user_update"),expression:"$can('user_update')"}],attrs:{href:"",title:"User Edit"},on:{click:function(t){return t.preventDefault(),e.edit(n)}}},[r("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("user_delete"),expression:"$can('user_delete')"}],attrs:{href:"",title:"User Delete"},on:{click:function(t){return t.preventDefault(),e.userdelete(n,e.i)}}},[r("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("user_view"),expression:"$can('user_view')"}],attrs:{href:"",title:"User Detail"},on:{click:function(t){return t.preventDefault(),e.userdetail(n)}}},[r("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","info-circle"]}})],1),e._v(" "),null==n.deleted_at?r("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("user_password"),expression:"$can('user_password')"}],attrs:{href:"",title:"Reset Password"},on:{click:function(t){return t.preventDefault(),e.userresetpass(n)}}},[r("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","key"]}})],1):e._e(),e._v(" "),null!=n.deleted_at?r("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("user_update"),expression:"$can('user_update')"}],attrs:{href:"",title:"User Delete"},on:{click:function(t){return t.preventDefault(),e.userrestore(n)}}},[r("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","redo-alt"]}})],1):e._e()])}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pageheader:r(541).default})}}]);