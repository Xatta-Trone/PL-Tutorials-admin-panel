(window.webpackJsonp=window.webpackJsonp||[]).push([[74,5],{540:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("73ab947b",content,!0,{sourceMap:!1})},541:function(t,e,n){"use strict";n(540)},542:function(t,e,n){var r=n(38)(!1);r.push([t.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),t.exports=r},543:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(n(541),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-heading"},[n("div",{staticClass:"page-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[n("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),n("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[n("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);e.default=component.exports},668:function(t,e,n){"use strict";n.r(e);var r={layout:"app",data:function(){return{loading:!1,form:{},activity:{columns:["id","activity","label","created_at","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}},location:{columns:["id","user_ip","location","device","fingerprint","created_at","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},headings:{user_ip:"IP address"},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}},devices:{columns:["id","ip_address","location","device","fingerprint","platform","created_at","actions"],options:{perPage:10,perPageValues:[5,10,15,25,50,100],pagination:{chunk:5},orderBy:{ascending:!1},headings:{ip_address:"IP address"},requestFunction:function(data){var t=this;return this.$axios.get(this.url,{params:data}).catch((function(e){console.log("Err in datatble",e),t.getmessage("Err in datatble")}))}}}}},mounted:function(){console.log(this.$nuxt.$route.params.id),this.getData()},methods:{formatDateTime:function(t){var e=new Date(t),n=e.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],o=e.getFullYear(),l=e.getHours()>=12?e.getHours()-12:e.getHours();return(n<=9?"0"+n:n)+"-"+r+"-"+o+" "+l+":"+e.getMinutes()+" "+(l>=12?"PM":"AM")},getData:function(){var t=this,e=this,n=e.$nuxt.$route.params.id;e.loading=!0,console.log(n),e.$axios.get("admin/users/"+n).then((function(t){e.loading=!1,console.log(t),e.form=t.data.user})).catch((function(n){e.loading=!1,console.log("Errrr",n),n.response.data.hasOwnProperty("message")?t.getmessage(n.response.data.message):t.getmessage("")}))},gotoDevice:function(data){console.log(data),this.$nuxt.$router.push("/users/device/"+data)},showLocationDetails:function(data){console.log(data),this.$nuxt.$router.push("/users/ipaddress/"+data)},showUserDetail:function(data){console.log(data),this.$nuxt.$router.push("/users/detail/"+data.user_id)},showUserDetailByLogin:function(data){console.log(data),this.$nuxt.$router.push("/users/activity-by-login/"+data.pat_id)}}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("content-placeholders",[n("content-placeholders-heading",{attrs:{img:!0}}),t._v(" "),n("content-placeholders-text",{attrs:{lines:3}})],1):n("div",[n("pageheader",{attrs:{title:t.form.name+"'s profile",urlto:t.$nuxt.context.from?t.$nuxt.context.from.fullPath:"/users",urltxt:"Go back"}}),t._v(" "),n("div",{staticClass:"row"},[t.form?n("ul",{staticClass:"list-group"},[n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("Email")]),t._v("\n          "+t._s(t.form.email)+"\n        ")]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("Student ID")]),t._v("\n          "+t._s(t.form.student_id)+"\n        ")]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("User Letter")]),t._v("\n          "+t._s(t.form.user_letter)+"\n        ")]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("Account Active")]),t._v("\n          "+t._s(0==t.form.whitelisted?"No":"Yes")+"\n        ")]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("Whitelisted")]),t._v("\n          "+t._s(0==t.form.whitelisted?"No":"Yes")+"\n        ")]),t._v(" "),n("li",{staticClass:"list-group-item"},[n("span",{staticClass:"badge bg-dark badge-pill ml-1"},[t._v("Joined")]),t._v("\n          "+t._s(t.formatDateTime(t.form.created_at))+"\n        ")])]):t._e(),t._v(" "),n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mt-3"},[t._v("User Logins")]),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/users/locationdata/"+t.$nuxt.$route.params.id,columns:t.location.columns,options:t.location.options},scopedSlots:t._u([{key:"created_at",fn:function(e){var r=e.row;return n("div",{},[t._v("\n            "+t._s(t.formatDateTime(r.created_at))+"\n          ")])}},{key:"actions",fn:function(e){var r=e.row;return n("div",{},[n("a",{attrs:{href:"",title:"Device history"},on:{click:function(e){return e.preventDefault(),t.gotoDevice(r.fingerprint)}}},[n("font-awesome-icon",{attrs:{icon:["fas","laptop"]}})],1),t._v(" "),n("button",{staticClass:"btn",attrs:{title:"IP Address detail"},on:{click:function(e){return t.showLocationDetails(r.user_ip)}}},[n("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}})],1),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:null!=r.pat_id,expression:"row.pat_id != null"}]},[n("button",{staticClass:"btn",attrs:{title:"Activity by login"},on:{click:function(e){return t.showUserDetailByLogin(r)}}},[n("font-awesome-icon",{attrs:{icon:["fas","list"]}})],1)])])}}])})],1),t._v(" "),n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mt-3"},[t._v("Saved devices")]),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/users/saved-devices/"+t.$nuxt.$route.params.id,columns:t.devices.columns,options:t.devices.options},scopedSlots:t._u([{key:"created_at",fn:function(e){var r=e.row;return n("div",{},[t._v("\n            "+t._s(t.formatDateTime(r.created_at))+"\n          ")])}},{key:"actions",fn:function(e){var r=e.row;return n("div",{},[n("a",{attrs:{href:"",title:"Device history"},on:{click:function(e){return e.preventDefault(),t.gotoDevice(r.fingerprint)}}},[n("font-awesome-icon",{attrs:{icon:["fas","laptop"]}})],1),t._v(" "),n("button",{staticClass:"btn",attrs:{title:"IP Address detail"},on:{click:function(e){return t.showLocationDetails(r.ip_address)}}},[n("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}})],1)])}}])})],1),t._v(" "),n("div",{staticClass:"col-12"},[n("h5",{staticClass:"mt-3"},[t._v("Activity")]),t._v(" "),n("v-server-table",{attrs:{url:t.serverurl+"admin/users/activitydata/"+t.$nuxt.$route.params.id,columns:t.activity.columns,options:t.activity.options},scopedSlots:t._u([{key:"created_at",fn:function(e){var r=e.row;return n("div",{},[t._v("\n            "+t._s(t.formatDateTime(r.created_at))+"\n          ")])}},{key:"actions",fn:function(e){var r=e.row;return n("div",{},[n("span",{directives:[{name:"show",rawName:"v-show",value:null!=r.pat_id,expression:"row.pat_id != null"}]},[n("button",{staticClass:"btn",attrs:{title:"Activity by login"},on:{click:function(e){return t.showUserDetailByLogin(r)}}},[n("font-awesome-icon",{attrs:{icon:["fas","list"]}})],1)])])}}])})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:n(543).default})}}]);