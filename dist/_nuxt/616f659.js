(window.webpackJsonp=window.webpackJsonp||[]).push([[39,5],{540:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("73ab947b",content,!0,{sourceMap:!1})},541:function(t,e,n){"use strict";n(540)},542:function(t,e,n){var r=n(38)(!1);r.push([t.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),t.exports=r},543:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},l=(n(541),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);e.default=component.exports},611:function(t,e,n){"use strict";n.r(e);n(12),n(57);var r={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","title","status","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/faqs/edit/"+data.id)},handleDelete:function(data,i){var t=this;console.log(data,i);var e="Are you sure ";if(null!=data.deleted_at&&(e+="to completely delete "),e+="?",confirm(e)){var n=this;n.loading=!0,console.log(null!=data.deleted_at);var r=null!=data.deleted_at;this.$axios.delete("/admin/faqs/"+data.id+"?forcedelete="+r.toString()).then((function(e){n.loading=!1,t.selectData=null!=data.deleted_at?"all":"deleted",e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){n.loading=!1,console.log(e),e.response.data.hasOwnProperty("message")&&t.getmessage(e.response.data.message)}))}}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"Faqs",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add Faqs"}}),t._v(" "),n("div",{staticClass:"col-12"}),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/faqs?type="+t.selectData,columns:t.columns,options:t.options},scopedSlots:t._u([{key:"status",fn:function(e){var r=e.row;return n("div",{},[0==r.status?n("span",{staticClass:"badge bg-danger"},[t._v("Inactive")]):t._e(),t._v(" "),1==r.status?n("span",{staticClass:"badge bg-primary"},[t._v("Active")]):t._e()])}},{key:"actions",fn:function(e){var r=e.row;return n("div",{staticClass:"d-flex justify-content-around"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("faq_update"),expression:"$can('faq_update')"}],attrs:{href:"",title:"faq Edit"},on:{click:function(e){return e.preventDefault(),t.edit(r)}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("faq_delete"),expression:"$can('faq_delete')"}],attrs:{href:"",title:"faq Delete"},on:{click:function(e){return e.preventDefault(),t.handleDelete(r,t.i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1)])}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:n(543).default})}}]);