(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{677:function(t,e,l){"use strict";l.r(e);l(44),l(32),l(31),l(59),l(23),l(65);var c=l(29),o=l(8);l(51),l(50);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var n={middleware:"auth",layout:"app",head:{title:"Dashboard",meta:[]},computed:{getDeptBatchDataForTable:function(){var t=this;return this.deptBatchData.length>0?this.deptBatchData.labels.map(label,(function(e){return{deptBatch:label,count:t.deptBatchData.data[e]}})):[]}},data:function(){return{loading:!1,dashboard:{},chartData:[],deptBatchData:[],deptBatchDataTable:[],activity:{options:{chart:{id:"vuechart-example"},xaxis:{categories:[],type:"category"},noData:{text:"Loading..."}},series:[]},deptbachDataChart:{options:{chart:{id:"vuechart-pie"},labels:[],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],noData:{text:"Loading..."}},series:[]},tabledata:{columns:["label","data"],deptBatchDataTable:[],options:{}}}},mounted:function(){this.getData(),this.getChartData(),this.getDeptBatchData()},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.logout("laravelSanctum");case 3:l=e.sent,console.log(l),t.$gates.setPermissions([]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getData:function(){var t=this,e=this;e.loading=!0,e.$axios.get("admin/dashboard/all").then((function(t){e.loading=!1,console.log(t),e.dashboard=t.data})).catch((function(l){e.loading=!1,console.log("Errrr",l),l.response.data.hasOwnProperty("message")?t.getmessage(l.response.data.message):t.getmessage("")}))},getChartData:function(){var t=this,e=this;e.$axios.get("admin/dashboard/chartdata").then((function(t){console.log(t),e.chartData=t.data,e.activity.options=r(r({},e.activity.options),{},{xaxis:{categories:t.data.date}}),e.$refs.realtimeChart.updateSeries(t.data.data)})).catch((function(e){console.log("Errrr",e),e.response.data.hasOwnProperty("message")?t.getmessage(e.response.data.message):t.getmessage("")}))},getDeptBatchData:function(){var t=this,e=this;e.$axios.get("admin/dashboard/deptbatchdatapie").then((function(l){console.log(l.data),e.deptBatchData=l.data,e.deptbachDataChart.options=r(r({},e.deptbachDataChart.options),{},{labels:l.data.labels,series:l.data.data}),l.data.labels&&(t.$refs.deptData.setLoadingState(!0),e.tabledata.deptBatchDataTable=l.data.labels.map((function(label,t){return{label:label,data:l.data.data[t]}}))),t.$refs.deptData.setLoadingState(!1)})).catch((function(e){console.log("Errrr",e),e.response.data.hasOwnProperty("message")?t.getmessage(e.response.data.message):t.getmessage("")}))}}},v=l(11),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t.dashboard?l("div",{staticClass:"row"},[l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(0),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("New Contact")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v(t._s(t.dashboard.new_contact))])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/contacts"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(1),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("New User (today)")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.new_user_today)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/users"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(2),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("New User (week)")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.new_user_thisweek)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/users"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(3),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Activities")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_activities)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/activities"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(4),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Currently Online")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.online_users)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/users"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(5),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Users (total)")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v(t._s(t.dashboard.users_total))])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/users"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(6),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Downloads")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_downloads)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/activities"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(7),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("User Data")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_userdatas)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/userdata"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(8),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Softwares")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_softwares)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/softwares"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(9),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Books")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_books)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/books"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(10),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Posts")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_posts)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/posts"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(11),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Testimonials")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_testimonial)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/testimonials"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(12),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Faqs")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.total_faq)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/faqs"}},[t._v("Visit page")])],1)])]),t._v(" "),l("div",{staticClass:"col-6 col-lg-3 col-md-6"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-body px-3 py-4-5"},[l("div",{staticClass:"row"},[t._m(13),t._v(" "),l("div",{staticClass:"col-md-8"},[l("h6",{staticClass:"text-muted font-semibold"},[t._v("Bugs")]),t._v(" "),l("h6",{staticClass:"font-extrabold mb-0"},[t._v("\n                "+t._s(t.dashboard.bugs)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"card-text text-center"},[l("nuxt-link",{staticClass:"btn btn-light w-100",attrs:{to:"/bugs"}},[t._v("Visit page")])],1)])])]):t._e(),t._v(" "),l("div",{staticClass:"row"},[l("h4",[t._v("Activities in last 30 days")]),t._v(" "),l("apexchart",{ref:"realtimeChart",attrs:{width:"100%",height:"300",type:"line",options:t.activity.options,series:t.activity.series}})],1),t._v(" "),l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[t._m(14),t._v(" "),l("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[l("div",{staticClass:"tab-pane fade active show",attrs:{id:"chart",role:"tabpanel","aria-labelledby":"chart-tab"}},[l("apexchart",{ref:"piechart",attrs:{width:"100%",height:"300",type:"pie",options:t.deptbachDataChart.options,series:t.deptbachDataChart.series}})],1),t._v(" "),l("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[l("v-client-table",{ref:"deptData",attrs:{data:t.tabledata.deptBatchDataTable,columns:t.tabledata.columns,options:t.tabledata.options}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon green"},[e("i",{staticClass:"iconly-boldDiscount"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldProfile"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldProfile"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon purple"},[e("i",{staticClass:"iconly-boldActivity"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldProfile"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon blue"},[e("i",{staticClass:"iconly-boldUser"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldPaper-Download"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon blue"},[e("i",{staticClass:"iconly-boldWork"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon green"},[e("i",{staticClass:"iconly-boldScan"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon purple"},[e("i",{staticClass:"iconly-boldInfo-Square"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon blue"},[e("i",{staticClass:"iconly-boldBookmark"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon green"},[e("i",{staticClass:"iconly-boldMessage"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldPaper-Fail"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"stats-icon red"},[e("i",{staticClass:"iconly-boldPaper-Fail"})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link active",attrs:{id:"chart-tab","data-bs-toggle":"tab",href:"#chart",role:"tab","aria-controls":"chart","aria-selected":"true"}},[t._v("Chart View")])]),t._v(" "),l("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[l("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-bs-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false",tabindex:"-1"}},[t._v("Table view")])])])}],!1,null,null,null);e.default=component.exports}}]);