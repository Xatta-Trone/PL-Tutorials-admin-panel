(window.webpackJsonp=window.webpackJsonp||[]).push([[83,5],{542:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("9ccbdcf4",content,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";n(542)},544:function(t,e,n){var r=n(38)(!1);r.push([t.i,".page-heading[data-v-616abe38]{margin:0 0 1rem}",""]),t.exports=r},545:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(n(543),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"616abe38",null);e.default=component.exports},632:function(t,e,n){"use strict";n.r(e);var r={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","user_name","user_student_id","access_type","data_type","data","created_at","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/whitelisted/edit/"+data.id)},handleDelete:function(data,i){var t=this;console.log(data,i);if(confirm("Are you sure ?")){var e=this;e.loading=!0,this.$axios.delete("/admin/whitelisted/"+data.id).then((function(n){e.loading=!1,n.data.hasOwnProperty("message")&&t.getmessage(n.data.message)})).catch((function(n){e.loading=!1,console.log(n),n.response.data.hasOwnProperty("message")&&t.getmessage(n.response.data.message)}))}}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"Whitelisted user data",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add new item"}}),t._v(" "),n("div",{staticClass:"col-12"}),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/whitelisted",columns:t.columns,options:t.options},scopedSlots:t._u([{key:"created_at",fn:function(e){var r=e.row;return n("div",{},[t._v("\n        "+t._s(t.formatDateTime(r.created_at))+"\n      ")])}},{key:"actions",fn:function(e){var r=e.row;return n("div",{staticClass:"d-flex justify-content-around"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("user_update"),expression:"$can('user_update')"}],attrs:{href:"",title:"Edit"},on:{click:function(e){return e.preventDefault(),t.edit(r)}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("user_delete"),expression:"$can('user_delete')"}],attrs:{href:"",title:"Delete"},on:{click:function(e){return e.preventDefault(),t.handleDelete(r,t.i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1)])}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:n(545).default})}}]);