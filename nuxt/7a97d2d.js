(window.webpackJsonp=window.webpackJsonp||[]).push([[71,5,6,24,25,26],{712:function(e,t,n){var content=n(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("61247cb7",content,!0,{sourceMap:!1})},725:function(e,t,n){var content=n(757);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("3a713de2",content,!0,{sourceMap:!1})},726:function(e,t,n){var content=n(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2ae6be14",content,!0,{sourceMap:!1})},729:function(e,t,n){"use strict";n(712)},730:function(e,t,n){var r=n(16)((function(i){return i[1]}));r.push([e.i,".nav-link{align-items:center;background-color:var(--white);border:1px solid var(--gray-200);border-radius:var(--border-radius);color:var(--text-color);display:inline-flex;font-size:var(--font-16);font-weight:500;line-height:1.1;padding:1rem;-webkit-text-decoration:none;text-decoration:none;transition:border-color .25s linear,background-color .25s linear}@media(max-width:991px){.nav-link{white-space:nowrap}}.nav-link.nuxt-link-exact-active,.nav-link:focus,.nav-link:hover{background-color:var(--secondary-color);border-color:var(--secondary-color)}.nav-link--icon{padding-bottom:.875rem;padding-top:.875rem}.nav-link svg{flex:none;margin-right:.75rem}",""]),r.locals={},e.exports=r},735:function(e,t,n){"use strict";n.r(t);var r=n(755),o={components:{ScrollPanel:n.n(r).a},props:{navScroll:{type:Boolean,default:!1},contentScroll:{type:Boolean,default:!1}},mounted:function(){this.setContentHeightCssVar()},methods:{setContentHeightCssVar:function(){var e=this.$refs.content.scrollHeight;document.documentElement.style.setProperty("--content-height","".concat(e,"px"))}}},l=(n(758),n(0)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{ref:"content",staticClass:"page-wrapper p-container py-4 lg:py-6"},[t("aside",{staticClass:"sidebar mr-0 lg:mr-5 mb-4 mb:mb-0"},[e.navScroll?t("ScrollPanel",{staticClass:"sidebar__bar"},[e._t("sidebar")],2):e._t("sidebar")],2),e._v(" "),t("div",{staticClass:"content px-3 lg:px-4 py-4"},[e.contentScroll?t("ScrollPanel",{staticClass:"content__bar"},[e._t("content")],2):e._t("content")],2)])}),[],!1,null,null,null);t.default=component.exports},736:function(e,t,n){"use strict";n.r(t);var r={components:{PrimeIcon:n(31).default},props:{to:{type:String,required:!0},caption:{type:String,required:!0},icon:{type:String,default:""}}},o=(n(729),n(0)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("NuxtLink",{staticClass:"nav-link",class:{"nav-link--icon":e.icon},attrs:{to:e.localePath(e.to)}},[e.icon?t("PrimeIcon",{attrs:{name:e.icon,size:"24",color:"primary-color"}}):e._e(),e._v(" "),t("span",[e._v(e._s(e.$t(e.caption)))])],1)}),[],!1,null,null,null);t.default=component.exports},755:function(e,t,n){"use strict";e.exports=n(762)},756:function(e,t,n){"use strict";n(725)},757:function(e,t,n){var r=n(16)((function(i){return i[1]}));r.push([e.i,".p-scrollpanel-wrapper{float:left;height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.p-scrollpanel-content{box-sizing:border-box;height:calc(100% + 18px);overflow:auto;padding:0 18px 18px 0;position:relative;width:calc(100% + 18px)}.p-scrollpanel-bar{background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;position:relative;transition:opacity .25s linear;z-index:2}.p-scrollpanel-bar-y{top:0;width:9px}.p-scrollpanel-bar-x{bottom:0;height:9px}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:active .p-scrollpanel-bar,.p-scrollpanel:hover .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),r.locals={},e.exports=r},758:function(e,t,n){"use strict";n(726)},759:function(e,t,n){var r=n(16)((function(i){return i[1]}));r.push([e.i,".page-wrapper{align-items:flex-start;display:flex}@media(max-width:991px){.page-wrapper{flex-direction:column}}.sidebar{flex:none;width:17.5rem}@media(max-width:991px){.sidebar{width:100%}}.sidebar__bar{height:100%;width:100%}@media(max-width:991px){.sidebar__bar{height:3.25rem;width:100%}}.sidebar__bar .p-scrollpanel-content{padding-bottom:0;width:100%}@media(max-width:991px){.sidebar .sidebar-nav-menu{display:flex;margin-left:-.375rem;margin-right:-.375rem}}@media(max-width:575px){.sidebar .sidebar-nav-menu--platform{justify-content:space-between}.sidebar .sidebar-nav-menu--platform .sidebar-nav-menu__item{width:50%}.sidebar .sidebar-nav-menu--platform .sidebar-nav-menu__item .nav-link{justify-content:center}}.sidebar .sidebar-nav-menu__item{margin-bottom:.75rem;width:100%}@media(max-width:991px){.sidebar .sidebar-nav-menu__item{flex:none;margin-bottom:0;padding-left:.375rem;padding-right:.375rem;width:auto}}.sidebar .sidebar-nav-menu__item:last-child{margin-bottom:0}.content,.sidebar .sidebar-nav-menu__item .nav-link{width:100%}.content{background-color:var(--white);border-radius:var(--border-radius-md);box-shadow:var(--shadow-popover);font-size:var(--font-16)}.content__bar{height:100vh;height:calc(var(--content-height) - 9rem);width:100%}@media(max-width:991px){.content__bar{height:calc(100vh - 14rem);height:calc(var(--vh, 1vh)*100 - 14rem)}}.content h1{color:var(--primary-color);font-size:var(--font-22);margin-bottom:1.5rem}.content h3{font-size:var(--font-18);font-weight:700;margin-bottom:1em;margin-top:1.5em}.content h4{font-size:var(--font-16);font-weight:600;margin-bottom:.25em}.content a{color:var(--primary-color);font-weight:600;-webkit-text-decoration:underline;text-decoration:underline}.content ul{margin-bottom:1em;padding-left:40px}",""]),r.locals={},e.exports=r},762:function(e,t,n){"use strict";n.r(t);var r=n(27),o=n.n(r),l={initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeDestroy:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),t=getComputedStyle(this.$refs.xBar),n=o.a.getHeight(this.$el)-parseInt(t.height,10);"none"!==e["max-height"]&&0===n&&(this.$refs.content.offsetHeight+parseInt(t.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this,t=this.$refs.content.scrollWidth,n=this.$refs.content.clientWidth,r=-1*(this.$el.clientHeight-this.$refs.xBar.clientHeight);this.scrollXRatio=n/t;var l=this.$refs.content.scrollHeight,c=this.$refs.content.clientHeight,d=-1*(this.$el.clientWidth-this.$refs.yBar.clientWidth);this.scrollYRatio=c/l,this.frame=this.requestAnimationFrame((function(){e.scrollXRatio>=1?o.a.addClass(e.$refs.xBar,"p-scrollpanel-hidden"):(o.a.removeClass(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(100*e.scrollXRatio,10)+"%; left:"+e.$refs.content.scrollLeft/t*100+"%;bottom:"+r+"px;"),e.scrollYRatio>=1?o.a.addClass(e.$refs.yBar,"p-scrollpanel-hidden"):(o.a.removeClass(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(100*e.scrollYRatio,10)+"%; top: calc("+e.$refs.content.scrollTop/l*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+d+"px;")}))},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.lastPageY=e.pageY,o.a.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),o.a.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.lastPageX=e.pageX,o.a.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),o.a.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):(this.isYBarClicked||this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var t=this,n=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame((function(){t.$refs.content.scrollLeft+=n/t.scrollXRatio}))},onMouseMoveForYBar:function(e){var t=this,n=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame((function(){t.$refs.content.scrollTop+=n/t.scrollYRatio}))},onDocumentMouseUp:function(){o.a.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),o.a.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),o.a.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){(window.requestAnimationFrame||this.timeoutFrame)(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var t=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>t?t:e>0?e:0,this.$refs.contentscrollTop=e},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(t){e.onDocumentMouseMove(t)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(t){e.onDocumentMouseUp(t)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}}},c=(n(756),n(0)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-scrollpanel p-component"},[t("div",{staticClass:"p-scrollpanel-wrapper"},[t("div",{ref:"content",staticClass:"p-scrollpanel-content",on:{scroll:e.moveBar,mouseenter:e.moveBar}},[e._t("default")],2)]),e._v(" "),t("div",{ref:"xBar",staticClass:"p-scrollpanel-bar p-scrollpanel-bar-x",on:{mousedown:e.onXBarMouseDown}}),e._v(" "),t("div",{ref:"yBar",staticClass:"p-scrollpanel-bar p-scrollpanel-bar-y",on:{mousedown:e.onYBarMouseDown}})])}),[],!1,null,null,null);t.default=component.exports},769:function(e,t,n){var content=n(804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("3f0828c6",content,!0,{sourceMap:!1})},803:function(e,t,n){"use strict";n(769)},804:function(e,t,n){var r=n(16)((function(i){return i[1]}));r.push([e.i,".alert{align-items:center;display:flex;flex-direction:column;justify-content:center;min-height:11.25rem;text-align:center}.alert svg{line-height:1}",""]),r.locals={},e.exports=r},805:function(e,t,n){var content=n(836);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("afeef26e",content,!0,{sourceMap:!1})},807:function(e,t,n){"use strict";n.r(t);var r={components:{NavLink:n(736).default}},o=n(0),component=Object(o.a)(r,(function(){var e=this._self._c;return e("ul",{staticClass:"sidebar-nav-menu sidebar-nav-menu--platform list-unstyled"},[e("li",{staticClass:"sidebar-nav-menu__item"},[e("NavLink",{attrs:{to:"about",caption:"about-us",icon:"duo-case"}})],1),this._v(" "),e("li",{staticClass:"sidebar-nav-menu__item"},[e("NavLink",{attrs:{to:"contact",caption:"contact",icon:"duo-envelop"}})],1)])}),[],!1,null,null,null);t.default=component.exports},813:function(e,t,n){"use strict";n.r(t);var r={components:{PrimeIcon:n(31).default},props:{submitStatus:{type:String,default:"sending"}}},o=(n(803),n(0)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"alert p-3"},[t("PrimeIcon",{staticClass:"mb-4",attrs:{name:"duo-send",size:"64",color:"".concat("sending"===e.submitStatus?"primary":e.submitStatus,"-color")}}),e._v(" "),"success"===e.submitStatus?[t("h5",{staticClass:"mb-2"},[e._v(e._s(e.$t("form_title_success")))]),e._v(" "),t("p",[e._v(e._s(e.$t("form_text_success")))])]:"error"===e.submitStatus?[t("h5",{staticClass:"mb-2"},[e._v(e._s(e.$t("form_title_error")))]),e._v(" "),t("p",[e._v(e._s(e.$t("form_text_error")))])]:[t("h5",{staticClass:"mb-2"},[e._v(e._s(e.$t("form_sending")))])]],2)}),[],!1,null,null,null);t.default=component.exports},835:function(e,t,n){"use strict";n(805)},836:function(e,t,n){var r=n(16)((function(i){return i[1]}));r.push([e.i,".contact-form .prime-input input,.contact-form .prime-input textarea{border-radius:var(--border-radius-md);padding:1.125rem 1.25rem}",""]),r.locals={},e.exports=r},844:function(e,t,n){"use strict";n.r(t);n(30),n(7),n(5),n(6),n(11),n(9),n(12);var r=n(3),o=n(10),l=(n(28),n(1),n(26),n(19)),c=n(46),d=n(75),m=n(42),h=n(813);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v={components:{PrimeInput:d.default,PrimeButton:m.default,FormAlert:h.default},data:function(){return{timeout:null,showAlert:!1,submitStatus:"sending",name:"",email:"",message:"",nameValidationError:"",messageValidationError:"",emailValidationError:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(l.d)({loading:function(e){return e.loading}})),watch:{name:function(){this.nameValidationError&&this.clearErrors()},email:function(){this.emailValidationError&&this.clearErrors()},message:function(){this.messageValidationError&&this.clearErrors()}},mounted:function(){this.clearForm(),this.$v.$reset()},methods:{clearForm:function(){this.name="",this.email="",this.message="",this.$v.$reset()},clearErrors:function(){this.nameValidationError="",this.emailValidationError="",this.messageValidationError="",this.$store.commit("setError",null)},handleContant:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.commit("setLoading",!0),e.clearErrors(),e.$v.$reset(),e.$v.$touch(),!e.$v.$invalid){t.next=11;break}return e.$v.name.required||(e.nameValidationError=e.$t("name_required").toString()),e.$v.message.required||(e.messageValidationError=e.$t("message_required").toString()),e.$v.email.required||(e.emailValidationError=e.$t("email_required").toString()),e.$v.email.email||(e.emailValidationError=e.$t("email_not_valid").toString()),e.$store.commit("setLoading",!1),t.abrupt("return");case 11:if(e.showAlert=!0,e.$config.contactApiUrl){t.next=15;break}return e.submitStatus="error",t.abrupt("return");case 15:return t.prev=15,t.next=18,e.$axios.post(e.$config.contactApiUrl,{name:e.name,email:e.email,company:e.name,text_message:e.message,platform:!0});case 18:200===(null==(n=t.sent)?void 0:n.status)&&(e.submitStatus="success"),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(15),e.submitStatus="error",e.$store.commit("setError",null===(r=t.t0.response)||void 0===r?void 0:r.data);case 26:return t.prev=26,e.$store.commit("setLoading",!1),t.finish(26);case 29:case"end":return t.stop()}}),t,null,[[15,22,26,29]])})))()}},validations:{name:{required:c.required},email:{required:c.required,email:c.email},message:{required:c.required}}},_=v,x=(n(835),n(0)),component=Object(x.a)(_,(function(){var e=this,t=e._self._c;return t("div",[e.showAlert?t("transition",{attrs:{name:"fade"}},[t("FormAlert",{attrs:{"submit-status":e.submitStatus,"form-type":"contact"}})],1):t("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.handleContant.apply(null,arguments)}}},[t("PrimeInput",{staticClass:"mb-2",attrs:{placeholder:"".concat(e.$t("form_your-name")),"validation-state":e.nameValidationError?"error":null,"info-text":e.nameValidationError},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t("PrimeInput",{staticClass:"mb-2",attrs:{placeholder:"".concat(e.$t("form_enter-email")),"validation-state":e.emailValidationError?"error":null,"info-text":e.emailValidationError},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),t("PrimeInput",{attrs:{textarea:"",placeholder:"".concat(e.$t("form_your-message")),"validation-state":e.messageValidationError?"error":null,"info-text":e.messageValidationError},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),t("PrimeButton",{staticClass:"mt-2 p-button-primary w-full large",attrs:{type:"submit",disabled:e.loading,icon:"submit"}},[e._v("\n      "+e._s(e.$t("send"))+"\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},976:function(e,t,n){"use strict";n.r(t);var r=n(735),o=n(807),l=n(844),c=n(43),d={components:{ContactForm:l.default,PlatformNavMenu:o.default,PageContent:r.default},head:function(){return Object(c.d)(this,"meta-title_contact","meta-description_contact")}},m=n(0),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("PageContent",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[t("PlatformNavMenu")]},proxy:!0},{key:"content",fn:function(){return[t("h1",[e._v(e._s(e.$t("contact")))]),e._v(" "),t("div",{staticClass:"grid"},[t("div",{staticClass:"col-12 md:col-4 mb-2 md:mb-0"},[t("div",{domProps:{innerHTML:e._s("".concat(e.$t("contact_address_html")))}})]),e._v(" "),t("div",{staticClass:"col-12 md:col-8"},[t("ContactForm")],1)])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContactForm:n(844).default,PageContent:n(735).default})}}]);