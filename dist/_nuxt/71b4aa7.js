(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{541:function(e,t,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("9ccbdcf4",content,!0,{sourceMap:!1})},542:function(e,t,n){"use strict";n(541)},543:function(e,t,n){var o=n(38)(!1);o.push([e.i,".page-heading[data-v-616abe38]{margin:0 0 1rem}",""]),e.exports=o},544:function(e,t,n){"use strict";n.r(t);var o={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},r=(n(542),n(11)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"616abe38",null);t.default=component.exports},606:function(e,t,n){"use strict";n.r(t);n(12),n(58);var o={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","name","email","student_id","status","roles","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var e=this;return this.$axios.get(this.url,{params:data}).catch((function(t){console.log("Err in datatble",t),e.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/admins/edit/"+data.id)},userdetail:function(data){console.log(data),this.$nuxt.$router.push("/admins/detail/"+data.id)},userdelete:function(data,i){var e=this;console.log(data,i);var t="Are you sure ";if(null!=data.deleted_at&&(t+="to completely delete "),t+="?",confirm(t)){var n=this;n.loading=!0,console.log(null!=data.deleted_at);var o=null!=data.deleted_at;this.$axios.delete("/admin/admins/"+data.id+"?forcedelete="+o.toString()).then((function(t){n.loading=!1,e.selectData=null!=data.deleted_at?"all":"deleted",t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){n.loading=!1,console.log(t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message)}))}},userrestore:function(data){var e=this;if(console.log(data),confirm("Are you sure ?")){console.log(null!=data.deleted_at);var t=this;t.loading=!0,this.$axios.get("admin/admins/restore/"+data.id).then((function(n){t.loading=!1,e.selectData="all",n.data.hasOwnProperty("message")&&e.getmessage(n.data.message)})).catch((function(n){t.loading=!1,console.log(n),n.response.data.hasOwnProperty("message")?e.getmessage(n.response.data.message):e.getmessage("")}))}},userresetpass:function(data){var e=this;if(console.log(data),confirm("Are you sure to change the password ?")){console.log(null!=data.deleted_at);var t=this;t.loading=!0,this.$axios.get("admin/admins/resetpass/"+data.id).then((function(n){t.loading=!1,n.data.hasOwnProperty("message")&&e.getmessage(n.data.message)})).catch((function(n){t.loading=!1,console.log(n),n.response.data.hasOwnProperty("message")?e.getmessage(n.response.data.message):e.getmessage("")}))}}}},r=n(11),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"Admin",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add Admin"}}),e._v(" "),n("v-server-table",{attrs:{url:e.serverurl+"admin/admins?type="+e.selectData,columns:e.columns,options:e.options},scopedSlots:e._u([{key:"status",fn:function(t){var o=t.row;return n("div",{},[0==o.status?n("span",{directives:[{name:"show",rawName:"v-show",value:null==o.deleted_at,expression:"row.deleted_at == null"}],staticClass:"badge bg-danger"},[e._v("Inactive")]):e._e(),e._v(" "),1==o.status?n("span",{directives:[{name:"show",rawName:"v-show",value:null==o.deleted_at,expression:"row.deleted_at == null"}],staticClass:"badge bg-primary"},[e._v("Active")]):e._e(),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:null!=o.deleted_at,expression:"row.deleted_at != null"}],staticClass:"badge bg-danger"},[e._v("Deleted")])])}},{key:"roles",fn:function(t){var o=t.row;return n("div",{},[n("span",{domProps:{textContent:e._s(o.roles.map((function(a){return a.name})).join(","))}})])}},{key:"actions",fn:function(t){var o=t.row;return n("div",{staticClass:"d-flex justify-content-around"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("admin_update"),expression:"$can('admin_update')"}],attrs:{href:"",title:"Admin Edit"},on:{click:function(t){return t.preventDefault(),e.edit(o)}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("admin_delete"),expression:"$can('admin_delete')"}],attrs:{href:"",title:"Admin Delete"},on:{click:function(t){return t.preventDefault(),e.userdelete(o,e.i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("admin_show"),expression:"$can('admin_show')"}],attrs:{href:"",title:"Admin Detail"},on:{click:function(t){return t.preventDefault(),e.userdetail(o)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","info-circle"]}})],1),e._v(" "),null!=o.deleted_at?n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("admin_update"),expression:"$can('admin_update')"}],attrs:{href:"",title:"Admin Delete"},on:{click:function(t){return t.preventDefault(),e.userrestore(o)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["fas","redo-alt"]}})],1):e._e()])}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pageheader:n(544).default})}}]);