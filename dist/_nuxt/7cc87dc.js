(window.webpackJsonp=window.webpackJsonp||[]).push([[66,5],{539:function(t,e,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("73ab947b",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";n(539)},541:function(t,e,n){var l=n(38)(!1);l.push([t.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),t.exports=l},542:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(n(540),n(11)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);e.default=component.exports},616:function(t,e,n){"use strict";n.r(e);n(12),n(56);var l={layout:"app",data:function(){return{loading:!1,error:!1,selectData:"all",columns:["id","name","user_letter","dept_batch","status","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}}},mounted:function(){},methods:{edit:function(data){console.log(data),this.$nuxt.$router.push("/testimonials/edit/"+data.id)},handleDelete:function(data,i){var t=this;console.log(data,i);var e="Are you sure ";if(null!=data.deleted_at&&(e+="to completely delete "),e+="?",confirm(e)){var n=this;n.loading=!0,console.log(null!=data.deleted_at);var l=null!=data.deleted_at;this.$axios.delete("/admin/testimonials/"+data.id+"?forcedelete="+l.toString()).then((function(e){n.loading=!1,t.selectData=null!=data.deleted_at?"all":"deleted",e.data.hasOwnProperty("message")&&t.getmessage(e.data.message)})).catch((function(e){n.loading=!1,console.log(e),e.response.data.hasOwnProperty("message")&&t.getmessage(e.response.data.message)}))}}}},o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:"testimonials",urlto:this.$nuxt.$route.fullPath+"/add",urltxt:"Add testimonials"}}),t._v(" "),n("div",{staticClass:"col-12"}),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/testimonials?type="+t.selectData,columns:t.columns,options:t.options},scopedSlots:t._u([{key:"status",fn:function(e){var l=e.row;return n("div",{},[0==l.status?n("span",{staticClass:"badge bg-danger"},[t._v("Inactive")]):t._e(),t._v(" "),1==l.status?n("span",{staticClass:"badge bg-primary"},[t._v("Active")]):t._e()])}},{key:"actions",fn:function(e){var l=e.row;return n("div",{staticClass:"d-flex justify-content-around"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("testimonial_update"),expression:"$can('testimonial_update')"}],attrs:{href:"",title:"Testimonial Edit"},on:{click:function(e){return e.preventDefault(),t.edit(l)}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}})],1),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.$can("testimonial_delete"),expression:"$can('testimonial_delete')"}],attrs:{href:"",title:"Testimonial Delete"},on:{click:function(e){return e.preventDefault(),t.handleDelete(l,t.i)}}},[n("font-awesome-icon",{staticClass:"text-danger",attrs:{icon:["far","trash-alt"]}})],1)])}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:n(542).default})}}]);