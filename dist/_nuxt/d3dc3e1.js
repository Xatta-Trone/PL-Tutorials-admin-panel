(window.webpackJsonp=window.webpackJsonp||[]).push([[68,5],{538:function(t,e,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("73ab947b",content,!0,{sourceMap:!1})},539:function(t,e,r){"use strict";r(538)},540:function(t,e,r){var n=r(36)(!1);n.push([t.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),t.exports=n},541:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(539),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[t._v(t._s(t.title.replace(/(?:^|\s|-)\S/g,(function(t){return t.toUpperCase()}))))])]),t._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=t.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:t.urlto}},[t._v(t._s(t.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);e.default=component.exports},574:function(t,e,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("5c3c6dda",content,!0,{sourceMap:!1})},586:function(t,e,r){"use strict";r(574)},587:function(t,e,r){var n=r(36)(!1);n.push([t.i,".VueTables__error{color:red}",""]),t.exports=n},638:function(t,e,r){"use strict";r.r(e);r(261),r(12);var n={layout:"app",data:function(){return{file:"",loading:!1,loadingmerge:!1,mergedatatext:"Merge data"}},methods:{uploadExcel:function(t){this.file=t.target.files[0]},submit:function(){var t=this;this.loading=!0,console.log("submit!");var e=this,r=new FormData;r.append("file",this.file),this.$axios.post("admin/dummyuserdata",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){e.loading=!1,console.log(r),r.data.hasOwnProperty("message")&&t.getmessage(r.data.message),r.data.hasOwnProperty("count")&&t.successmessage(r.data.count+" records inserted successfully"),t.loadingmerge=!0,r.data.hasKey("status")&&t.getmessage()})).catch((function(r){e.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&t.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(t.serverErrors=Object.entries(r.response.data.errors))}))},merge:function(){var t=this;this.loadingmerge=!1,this.mergedatatext="Merging data...",console.log("submit!");var e=this;this.$axios.get("admin/dummyuserdata").then((function(r){e.loadingmerge=!0,console.log(r),r.data.hasOwnProperty("message")&&(t.getmessage(r.data.message),t.successmessage("congratulations on success")),r.data.hasKey("status")&&t.getmessage()})).catch((function(r){e.loadingmerge=!0,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&t.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(t.serverErrors=Object.entries(r.response.data.errors))})).finally((function(){t.mergedatatext="Merge data"}))}},mounted:function(){}},o=(r(586),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("pageheader",{attrs:{title:"Import User Data",urlto:"/userdata",urltxt:"Go back"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item active"},[t._v("Follow the steps")]),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("\n          1. Download a backup first of old data.\n          "),r("a",{staticClass:"btn icon icon-left btn-primary",attrs:{_target:"blank",href:t.$axios.defaults.baseURL+"admin/dummyuserdata/download"}},[t._v("Download backup data")])]),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("2. Now upload the new data")]),t._v(" "),r("li",{staticClass:"list-group-item"},[r("input",{staticClass:"form-control",attrs:{type:"file",id:"formFile",name:"image"},on:{change:function(e){return t.uploadExcel(e)}}})]),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("\n          3. Now upload the data\n          "),r("button",{staticClass:"btn icon icon-left btn-primary",attrs:{disabled:t.loading,href:"#"},on:{click:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._v("\n            "+t._s(t.loading?"Uploading data":"Upload data")+"\n          ")]),t._v(" "),r("small",{staticClass:"text-danger"},[t._v("It may take a minute or two, please wait till notification\n            appears")])]),t._v(" "),t._m(0),t._v(" "),r("li",{staticClass:"list-group-item"},[t._v("\n          5. Merge data if successully uploaded\n          "),r("button",{staticClass:"btn icon icon-left btn-primary",attrs:{disabled:!t.loadingmerge,href:"#"},on:{click:function(e){return e.preventDefault(),t.merge.apply(null,arguments)}}},[t._v("\n            "+t._s(t.mergedatatext)+"\n          ")])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"list-group-item"},[t._v("\n          4. If successfully uploaded then click on the button below.\n\n          "),r("span",{staticClass:"text-danger"},[t._v("\n            If not successful contact\n            "),r("a",{attrs:{target:"_blank",href:"https://www.facebook.com/monzurul.islam1112"}},[t._v("Monzurul ISLAM")]),t._v("\n            immediately.\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Pageheader:r(541).default})}}]);