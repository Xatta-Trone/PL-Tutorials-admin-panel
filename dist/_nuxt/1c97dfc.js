(window.webpackJsonp=window.webpackJsonp||[]).push([[72,5],{540:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("73ab947b",content,!0,{sourceMap:!1})},541:function(t,e,r){"use strict";r(540)},542:function(t,e,r){var n=r(38)(!1);n.push([t.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),t.exports=n},543:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(541),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);e.default=component.exports},667:function(t,e,r){"use strict";r.r(e);var n={layout:"app",data:function(){return{loading:!1,form:{},activity:{columns:["id","activity","label","created_at","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}}}},mounted:function(){console.log(this.$nuxt.$route.params.id)},methods:{formatDateTime:function(t){var e=new Date(t),r=e.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],o=e.getFullYear(),l=e.getHours()>=12?e.getHours()-12:e.getHours();return(r<=9?"0"+r:r)+"-"+n+"-"+o+" "+l+":"+e.getMinutes()+" "+(l>=12?"PM":"AM")},showUserDetail:function(data){console.log(data),this.$nuxt.$router.push("/users/detail/"+data.causer_id)}}},o=r(11),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("content-placeholders",[r("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),r("content-placeholders-text",{attrs:{lines:3}})],1):r("div",[r("pageheader",{attrs:{title:"Activity detail :"+t.$nuxt.$route.params.id,urlto:t.$nuxt.context.from?t.$nuxt.context.from.fullPath:"/users",urltxt:"Go back"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h5",{staticClass:"mt-3"},[t._v("What user did form this login")]),t._v(" "),r("v-server-table",{attrs:{url:t.serverurl+"admin/users/activity-by-login/"+t.$nuxt.$route.params.id,columns:t.activity.columns,options:t.activity.options},scopedSlots:t._u([{key:"created_at",fn:function(e){var n=e.row;return r("div",{},[t._v("\n            "+t._s(t.formatDateTime(n.created_at))+"\n          ")])}},{key:"actions",fn:function(e){var n=e.row;return r("div",{},[r("button",{staticClass:"btn",attrs:{title:"User detail"},on:{click:function(e){return t.showUserDetail(n)}}},[r("font-awesome-icon",{attrs:{icon:["fas","user"]}})],1)])}}])})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:r(543).default})}}]);