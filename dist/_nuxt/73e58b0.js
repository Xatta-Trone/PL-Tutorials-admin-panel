(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,7],{540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(548))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=f;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!f(e)||t.test(e)}))}},541:function(e,t,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("9ccbdcf4",content,!0,{sourceMap:!1})},542:function(e,t,r){"use strict";r(541)},543:function(e,t,r){var n=r(38)(!1);n.push([e.i,".page-heading[data-v-616abe38]{margin:0 0 1rem}",""]),e.exports=n},544:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(542),r(11)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"616abe38",null);t.default=component.exports},545:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=k(r(547)),o=k(r(550)),l=k(r(551)),f=k(r(552)),d=k(r(553)),c=k(r(554)),v=k(r(555)),m=k(r(556)),y=k(r(557)),h=k(r(558)),_=k(r(559)),P=k(r(560)),x=k(r(561)),O=k(r(562)),j=k(r(563)),w=k(r(564)),$=k(r(565)),C=k(r(566)),M=k(r(567)),S=k(r(568)),A=k(r(569)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(540));function k(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},546:function(e,t,r){"use strict";r.r(t);var n={props:["servererrors","chkkey"]},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.servererrors,(function(t,i){return r("span",{key:i},[t[0]==e.chkkey?r("div",{staticClass:"invalid-feedback"},[e._v("\n      "+e._s(t[1].join(","))+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},548:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(549).withParams:r(263).withParams;t.default=n}).call(this,r(165))},549:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(18))},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("numeric",/^[0-9]*$/);t.default=n},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},561:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},562:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(540);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(540).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},634:function(e,t,r){"use strict";r.r(t);r(264),r(262);var n=r(545),o=r(166),l=r(546),f={layout:"app",components:{CustomForm:o.default,CustomError:l.default},data:function(){return{loading:!1,form:{level:"",days:0}}},methods:{removeError:function(i){console.log(i),this.serverErrors.splice(i,1)},submit:function(){var e=this;if(this.loading=!0,console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.$v.$invalid)return this.loading=!1,this.$toast.error("Filup the required fields!!");var t=this;this.$axios.post("admin/bandays",this.form).then((function(r){t.loading=!1,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message),e.form.level="",e.$v.$reset(),e.$router.push("/banhistory"),r.data.hasKey("status")&&e.getmessage()})).catch((function(r){t.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&e.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(r.response.data.errors))}))}},validations:{form:{level:{required:n.required},days:{required:n.required}}}},d=r(11),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("content-placeholders",[r("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),r("content-placeholders-text",{attrs:{lines:3}})],1):r("div",[r("div",[r("pageheader",{attrs:{title:"ban days add",urlto:"/banhistory",urltxt:"Go back"}}),e._v(" "),r("form",{staticClass:"form form-vertical"},[r("div",{staticClass:"form-body"},[r("div",{staticClass:"row"},[r("custom-form",{attrs:{validator:e.$v.form.level,attribute:"level"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group has-icon-left"},[r("label",{attrs:{for:"first-name-icon"}},[e._v("level to ban")]),e._v(" "),r("div",{staticClass:"position-relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.level,expression:"form.level"}],staticClass:"form-control",class:{"is-invalid ":e.$v.form.level.$error},attrs:{name:"level",type:"number",min:"0",placeholder:"level of ban",id:"first-name-icon"},domProps:{value:e.form.level},on:{input:[function(t){t.target.composing||e.$set(e.form,"level",t.target.value)},function(t){return e.$v.form.level.$touch()}]}}),e._v(" "),r("div",{staticClass:"form-control-icon"},[r("i",{staticClass:"bi bi-person"})])]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"level"}})],1)])]),e._v(" "),r("custom-form",{attrs:{validator:e.$v.form.days,attribute:"days"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group has-icon-left"},[r("label",{attrs:{for:"first-name-icon"}},[e._v("days to ban")]),e._v(" "),r("div",{staticClass:"position-relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.days,expression:"form.days"}],staticClass:"form-control",class:{"is-invalid ":e.$v.form.days.$error},attrs:{name:"days",type:"number",min:"0",placeholder:"days of ban",id:"first-name-icon"},domProps:{value:e.form.days},on:{input:[function(t){t.target.composing||e.$set(e.form,"days",t.target.value)},function(t){return e.$v.form.days.$touch()}]}}),e._v(" "),r("div",{staticClass:"form-control-icon"},[r("i",{staticClass:"bi bi-person"})])]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"days"}})],1)])]),e._v(" "),r("div",{staticClass:"col-12 d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary me-1 mb-1",attrs:{type:"submit",disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._v("\n                Submit\n              ")])])],1)])])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pageheader:r(544).default})}}]);