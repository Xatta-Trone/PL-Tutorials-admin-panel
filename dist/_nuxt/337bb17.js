(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6],{537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(545))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},538:function(e,t,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("73ab947b",content,!0,{sourceMap:!1})},539:function(e,t,r){"use strict";r(538)},540:function(e,t,r){var n=r(36)(!1);n.push([e.i,".page-heading[data-v-562dee3c]{margin:0 0 1rem}",""]),e.exports=n},541:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:""},urlto:{type:String,default:""},urltxt:{type:String,default:"Add"}},mounted:function(){console.log(this.$nuxt.$route)}},o=(r(539),r(11)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-title"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[r("h3",[e._v(e._s(e.title.replace(/(?:^|\s|-)\S/g,(function(e){return e.toUpperCase()}))))])]),e._v(" "),r("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[r("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=e.urlto,expression:"urlto != ''"}],staticClass:"btn btn-primary",attrs:{to:e.urlto}},[e._v(e._s(e.urltxt))])],1)])])])])}),[],!1,null,"562dee3c",null);t.default=component.exports},542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var n=z(r(544)),o=z(r(547)),l=z(r(548)),c=z(r(549)),f=z(r(550)),d=z(r(551)),m=z(r(552)),v=z(r(553)),_=z(r(554)),h=z(r(555)),y=z(r(556)),P=z(r(557)),w=z(r(558)),x=z(r(559)),O=z(r(560)),$=z(r(561)),j=z(r(562)),C=z(r(563)),k=z(r(564)),M=z(r(565)),S=z(r(566)),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(537));function z(e){return e&&e.__esModule?e:{default:e}}t.helpers=A},543:function(e,t,r){"use strict";r.r(t);var n={props:["servererrors","chkkey"]},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.servererrors,(function(t,i){return r("span",{key:i},[t[0]==e.chkkey?r("div",{staticClass:"invalid-feedback"},[e._v("\n      "+e._s(t[1].join(","))+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports},544:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},545:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(546).withParams:r(262).withParams;t.default=n}).call(this,r(164))},546:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(18))},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},548:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("numeric",/^[0-9]*$/);t.default=n},549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},560:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},561:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},562:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},563:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(537);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(537).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},567:function(e,t,r){"use strict";var n=r(2),o=r(568);n({target:"String",proto:!0,forced:r(569)("link")},{link:function(e){return o(this,"a","href",e)}})},568:function(e,t,r){var n=r(26),o=r(9),l=/"/g;e.exports=function(e,t,r,c){var f=o(n(e)),d="<"+t;return""!==r&&(d+=" "+r+'="'+o(c).replace(l,"&quot;")+'"'),d+">"+f+"</"+t+">"}},569:function(e,t,r){var n=r(4);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},625:function(e,t,r){"use strict";r.r(t);r(263),r(22),r(567),r(30),r(51),r(261),r(38);var n=r(542),o=r(165),l=r(543),c={layout:"app",components:{CustomForm:o.default,CustomError:l.default},data:function(){return{loading:!1,form:{name:"",author:"",department_slug:"",level_term_slug:"",course_id:"",post_type:"book",link:"",image:"",status:1,description:""},departments:[],levelterms:[],courses:[],imagepreview:""}},methods:{removeError:function(i){console.log(i),this.serverErrors.splice(i,1)},submit:function(){var e=this;if(this.loading=!0,console.log("submit!"),this.$v.$touch(),this.serverErrors=[],this.$v.$invalid)return this.loading=!1,this.$toast.error("Filup the required fields!!");var t=this,r=new FormData;for(var n in this.form)""!==this.form[n]&&r.append(n,this.form[n]);console.log(r),this.$axios.post("admin/"+this.form.post_type+"s",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){t.loading=!1,console.log(r),r.data.hasOwnProperty("message")&&e.getmessage(r.data.message),e.form.name="",e.form.author="",e.form.department_slug="",e.form.level_term_slug="",e.form.course_id="",e.form.link="",e.form.image="",e.form.description="",e.imagepreview="",e.$v.$reset(),r.data.hasKey("status")&&e.getmessage()})).catch((function(r){t.loading=!1,console.log("Errrr",r),r.response.data.hasOwnProperty("message")&&e.getmessage(r.response.data.message),r.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(r.response.data.errors))}))},getdepartments:function(){var e=this;this.$axios.get("admin/getdepartments").then((function(t){console.log(t),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message),e.departments=t.data.data})).catch((function(t){console.log("Errrr",t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(t.response.data.errors))}))},getlevelterms:function(){var e=this,t=this.departments.filter((function(t){return t.slug==e.form.department_slug}));console.log(t,this.form.department_slug),this.$axios.get("admin/getlevelterms/"+t[0].id).then((function(t){console.log(t),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message),e.levelterms=t.data.data})).catch((function(t){console.log("Errrr",t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(t.response.data.errors))}))},getcourses:function(){var e=this,t=this.departments.filter((function(t){return t.slug==e.form.department_slug})),r=this.levelterms.filter((function(t){return t.slug==e.form.level_term_slug}));this.$axios.get("getcourse/"+t[0].id+"/"+r[0].id).then((function(t){console.log(t),t.data.hasOwnProperty("message")&&e.getmessage(t.data.message),e.courses=t.data.data})).catch((function(t){console.log("Errrr",t),t.response.data.hasOwnProperty("message")&&e.getmessage(t.response.data.message),t.response.data.hasOwnProperty("errors")&&(e.serverErrors=Object.entries(t.response.data.errors))}))},uploadImage:function(e){var t=this,image=e.target.files[0];if(image.size/1024/1024>1)alert("upload a file less than 1Mb");else{this.form.image=e.target.files[0];var r=new FileReader;r.readAsDataURL(image),r.onload=function(e){t.imagepreview=e.target.result}}}},mounted:function(){this.getdepartments()},validations:{form:{name:{required:n.required},author:{required:n.required},status:{required:n.required},link:{required:n.required,url:n.url},post_type:{required:n.required}}}},f=r(11),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("content-placeholders",[r("content-placeholders-heading",{attrs:{img:!0}}),e._v(" "),r("content-placeholders-text",{attrs:{lines:3}})],1):r("div",[r("div",[r("pageheader",{attrs:{title:"Book add",urlto:"/books",urltxt:"Go back"}}),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("form",{staticClass:"form form-vertical"},[r("div",{staticClass:"form-body"},[r("div",{staticClass:"row"},[r("custom-form",{attrs:{validator:e.$v.form.name,attribute:"Title"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group has-icon-left"},[r("label",{attrs:{for:"first-name-icon"}},[e._v("Name")]),e._v(" "),r("div",{staticClass:"position-relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid ":e.$v.form.name.$error},attrs:{name:"name",type:"text",placeholder:"Book title",id:"first-name-icon"},domProps:{value:e.form.name},on:{input:[function(t){t.target.composing||e.$set(e.form,"name",t.target.value)},function(t){return e.$v.form.name.$touch()}]}}),e._v(" "),r("div",{staticClass:"form-control-icon"},[r("i",{staticClass:"bi bi-person"})])]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"name"}})],1)])]),e._v(" "),r("custom-form",{attrs:{validator:e.$v.form.author,attribute:"Author"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group has-icon-left"},[r("label",{attrs:{for:"first-name-icon"}},[e._v("Author")]),e._v(" "),r("div",{staticClass:"position-relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.author,expression:"form.author"}],staticClass:"form-control",class:{"is-invalid ":e.$v.form.author.$error},attrs:{name:"author",type:"text",placeholder:"Book author ",id:"first-name-icon"},domProps:{value:e.form.author},on:{input:[function(t){t.target.composing||e.$set(e.form,"author",t.target.value)},function(t){return e.$v.form.author.$touch()}]}}),e._v(" "),r("div",{staticClass:"form-control-icon"},[r("i",{staticClass:"bi bi-person"})])]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"author"}})],1)])]),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"basicSelect"}},[e._v("Department (optional)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.department_slug,expression:"form.department_slug",modifiers:{trim:!0}}],staticClass:"form-select",attrs:{id:"Department",name:"department_slug"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"department_slug",t.target.multiple?r:r[0])},e.getlevelterms]}},[r("option",{attrs:{value:""}},[e._v("Select department")]),e._v(" "),e._l(e.departments,(function(t,i){return r("option",{key:i,domProps:{value:t.slug}},[e._v("\n                        "+e._s(t.name)+"\n                      ")])}))],2)])]),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"basicSelect"}},[e._v("Level Term (optional)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.level_term_slug,expression:"form.level_term_slug",modifiers:{trim:!0}}],staticClass:"form-select",attrs:{id:"Level Term",name:"level_term_slug"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"level_term_slug",t.target.multiple?r:r[0])},e.getcourses]}},[r("option",{attrs:{value:""}},[e._v("Select Level Term")]),e._v(" "),e._l(e.levelterms,(function(t,i){return r("option",{key:i,domProps:{value:t.slug}},[e._v("\n                        "+e._s(t.name)+"\n                      ")])}))],2)])]),e._v(" "),r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"basicSelect"}},[e._v("Course (optional)")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.course_id,expression:"form.course_id",modifiers:{trim:!0}}],staticClass:"form-select",attrs:{id:"Level Term",name:"course_id"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"course_id",t.target.multiple?r:r[0])},e.getcourses]}},[r("option",{attrs:{value:""}},[e._v("Select Course")]),e._v(" "),e._l(e.courses,(function(t,i){return r("option",{key:i,domProps:{value:t.id}},[e._v("\n                        "+e._s(t.course_name)+" ("+e._s(t.slug.toUpperCase())+")\n                      ")])}))],2)])]),e._v(" "),r("custom-form",{attrs:{validator:e.$v.form.link,attribute:"Link"}},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group has-icon-left"},[r("label",{attrs:{for:"link"}},[e._v("Link")]),e._v(" "),r("div",{staticClass:"position-relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.link,expression:"form.link"}],staticClass:"form-control",class:{"is-invalid ":e.$v.form.link.$error},attrs:{name:"link",type:"url",placeholder:"https://www.google.com/",id:"link"},domProps:{value:e.form.link},on:{input:[function(t){t.target.composing||e.$set(e.form,"link",t.target.value)},function(t){return e.$v.form.link.$touch()}]}}),e._v(" "),r("div",{staticClass:"form-control-icon"},[r("i",{staticClass:"bi bi-person"})])]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"link"}})],1)])]),e._v(" "),r("div",{staticClass:"col-12"},[r("label",{staticClass:"form-label",attrs:{for:"formFile"}},[e._v("Image (optional)")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"file",id:"formFile",accept:"image/*",name:"image"},on:{change:function(t){return e.uploadImage(t)}}}),e._v(" "),e.imagepreview?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"uploading-image",attrs:{"data-src":e.imagepreview,height:"150"}}):e._e()]),e._v(" "),r("custom-form",{attrs:{validator:e.$v.form.post_type,attribute:"Post type"}},[r("div",{staticClass:"col-12"},[r("div",{},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.post_type,expression:"form.post_type"}],class:{"is-invalid ":e.$v.form.post_type.$error},attrs:{name:"post_type",type:"hidden",id:"post_type"},domProps:{value:e.form.post_type},on:{input:[function(t){t.target.composing||e.$set(e.form,"post_type",t.target.value)},function(t){return e.$v.form.post_type.$touch()}]}})]),e._v(" "),r("custom-error",{attrs:{servererrors:e.serverErrors,chkkey:"post_type"}})],1)])]),e._v(" "),r("custom-form",{attrs:{validator:e.$v.form.status,attribute:"Status"}},[r("div",{staticClass:"col-12"},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"basicSelect"}},[e._v("Status")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.status.$model,expression:"$v.form.status.$model",modifiers:{trim:!0}}],staticClass:"form-select",class:{"is-invalid ":e.$v.form.status.$error},attrs:{id:"basicSelect",name:"status"},on:{input:function(t){return e.$v.form.status.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.$v.form.status,"$model",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1",selected:""}},[e._v("Publish")]),e._v(" "),r("option",{attrs:{value:"2"}},[e._v("Pending")]),e._v(" "),r("option",{attrs:{value:"3"}},[e._v("Draft")]),e._v(" "),r("option",{attrs:{value:"4"}},[e._v("Private")]),e._v(" "),r("option",{attrs:{value:"5"}},[e._v("Rejected")])])])])]),e._v(" "),r("div",{staticClass:"col-12"},[r("label",{staticClass:"form-label",attrs:{for:"formFile"}},[e._v("Description (optional)")]),e._v(" "),r("quill-editor",{ref:"myQuillEditor",attrs:{minheight:"300"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),r("div",{staticClass:"col-12 d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary me-1 mb-1",attrs:{type:"submit",disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._v("\n                    Submit\n                  ")])])],1)])])])])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pageheader:r(541).default})}}]);