(window.webpackJsonp=window.webpackJsonp||[]).push([[59,5],{540:function(e,t,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("73ab947b",content,!0,{sourceMap:!1})},541:function(e,t,n){"use strict";n(540)},542:function(e,t,n){var r=n(38)(!1);r.push([e.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),e.exports=r},543:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},l=(n(541),n(11)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);t.default=component.exports},619:function(e,t,n){"use strict";n.r(t);n(12),n(57);var r={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","name","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var e=this;return this.$axios.get(this.url,{params:data}).catch((function(t){console.log("Err in datatble",t),e.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/roles/edit/"+data.id)},handleDelete:function(data,i){var e=this;console.log(data,i);var t="Are you sure ";if(null!=data.deleted_at&&(t+="to completely delete "),t+="?",confirm(t)){var n=this;n.loading=!0,console.log(null!=data.deleted_at);var r=null!=data.deleted_at;this.$axios.delete("/admin/roles/"+data.id+"?forcedelete="+r.toString()).then((function(t){n.loading=!1,e.selectData=null!=data.deleted_at?"all":"deleted",t.data.hasOwnProperty("message")&&e.getmessage(t.data.message)})).catch((function(t){n.loading=!1,console.log(t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message)}))}}}},l=n(11),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"roles",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add role"}}),e._v(" "),n("div",{staticClass:"col-12"}),e._v(" "),n("v-server-table",{attrs:{url:e.serverurl+"admin/roles?type="+e.selectData,columns:e.columns,options:e.options},scopedSlots:e._u([{key:"status",fn:function(t){var r=t.row;return n("div",{},[0==r.status?n("span",{staticClass:"badge bg-danger"},[e._v("Inactive")]):e._e(),e._v(" "),1==r.status?n("span",{staticClass:"badge bg-primary"},[e._v("Active")]):e._e()])}},{key:"actions",fn:function(t){var r=t.row;return n("div",{staticClass:"d-flex justify-content-around"},[n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("role_update"),expression:"$can('role_update')"}],attrs:{href:"",title:"Roles Edit"},on:{click:function(t){return t.preventDefault(),e.edit(r)}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.$can("role_delete"),expression:"$can('role_delete')"}],attrs:{href:"",title:"Roles Delete"},on:{click:function(t){return t.preventDefault(),e.handleDelete(r,e.i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1)])}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pageheader:n(543).default})}}]);