(window.webpackJsonp=window.webpackJsonp||[]).push([[85,23,24,26],{712:function(t,n,e){var content=e(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("61247cb7",content,!0,{sourceMap:!1})},725:function(t,n,e){var content=e(757);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("3a713de2",content,!0,{sourceMap:!1})},726:function(t,n,e){var content=e(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("2ae6be14",content,!0,{sourceMap:!1})},729:function(t,n,e){"use strict";e(712)},730:function(t,n,e){var o=e(16)((function(i){return i[1]}));o.push([t.i,".nav-link{align-items:center;background-color:var(--white);border:1px solid var(--gray-200);border-radius:var(--border-radius);color:var(--text-color);display:inline-flex;font-size:var(--font-16);font-weight:500;line-height:1.1;padding:1rem;-webkit-text-decoration:none;text-decoration:none;transition:border-color .25s linear,background-color .25s linear}@media(max-width:991px){.nav-link{white-space:nowrap}}.nav-link.nuxt-link-exact-active,.nav-link:focus,.nav-link:hover{background-color:var(--secondary-color);border-color:var(--secondary-color)}.nav-link--icon{padding-bottom:.875rem;padding-top:.875rem}.nav-link svg{flex:none;margin-right:.75rem}",""]),o.locals={},t.exports=o},735:function(t,n,e){"use strict";e.r(n);var o=e(755),l={components:{ScrollPanel:e.n(o).a},props:{navScroll:{type:Boolean,default:!1},contentScroll:{type:Boolean,default:!1}},mounted:function(){this.setContentHeightCssVar()},methods:{setContentHeightCssVar:function(){var t=this.$refs.content.scrollHeight;document.documentElement.style.setProperty("--content-height","".concat(t,"px"))}}},r=(e(758),e(0)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{ref:"content",staticClass:"page-wrapper p-container py-4 lg:py-6"},[n("aside",{staticClass:"sidebar mr-0 lg:mr-5 mb-4 mb:mb-0"},[t.navScroll?n("ScrollPanel",{staticClass:"sidebar__bar"},[t._t("sidebar")],2):t._t("sidebar")],2),t._v(" "),n("div",{staticClass:"content px-3 lg:px-4 py-4"},[t.contentScroll?n("ScrollPanel",{staticClass:"content__bar"},[t._t("content")],2):t._t("content")],2)])}),[],!1,null,null,null);n.default=component.exports},736:function(t,n,e){"use strict";e.r(n);var o={components:{PrimeIcon:e(31).default},props:{to:{type:String,required:!0},caption:{type:String,required:!0},icon:{type:String,default:""}}},l=(e(729),e(0)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("NuxtLink",{staticClass:"nav-link",class:{"nav-link--icon":t.icon},attrs:{to:t.localePath(t.to)}},[t.icon?n("PrimeIcon",{attrs:{name:t.icon,size:"24",color:"primary-color"}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.$t(t.caption)))])],1)}),[],!1,null,null,null);n.default=component.exports},755:function(t,n,e){"use strict";t.exports=e(762)},756:function(t,n,e){"use strict";e(725)},757:function(t,n,e){var o=e(16)((function(i){return i[1]}));o.push([t.i,".p-scrollpanel-wrapper{float:left;height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.p-scrollpanel-content{box-sizing:border-box;height:calc(100% + 18px);overflow:auto;padding:0 18px 18px 0;position:relative;width:calc(100% + 18px)}.p-scrollpanel-bar{background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;position:relative;transition:opacity .25s linear;z-index:2}.p-scrollpanel-bar-y{top:0;width:9px}.p-scrollpanel-bar-x{bottom:0;height:9px}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:active .p-scrollpanel-bar,.p-scrollpanel:hover .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;-moz-user-select:none;user-select:none}",""]),o.locals={},t.exports=o},758:function(t,n,e){"use strict";e(726)},759:function(t,n,e){var o=e(16)((function(i){return i[1]}));o.push([t.i,".page-wrapper{align-items:flex-start;display:flex}@media(max-width:991px){.page-wrapper{flex-direction:column}}.sidebar{flex:none;width:17.5rem}@media(max-width:991px){.sidebar{width:100%}}.sidebar__bar{height:100%;width:100%}@media(max-width:991px){.sidebar__bar{height:3.25rem;width:100%}}.sidebar__bar .p-scrollpanel-content{padding-bottom:0;width:100%}@media(max-width:991px){.sidebar .sidebar-nav-menu{display:flex;margin-left:-.375rem;margin-right:-.375rem}}@media(max-width:575px){.sidebar .sidebar-nav-menu--platform{justify-content:space-between}.sidebar .sidebar-nav-menu--platform .sidebar-nav-menu__item{width:50%}.sidebar .sidebar-nav-menu--platform .sidebar-nav-menu__item .nav-link{justify-content:center}}.sidebar .sidebar-nav-menu__item{margin-bottom:.75rem;width:100%}@media(max-width:991px){.sidebar .sidebar-nav-menu__item{flex:none;margin-bottom:0;padding-left:.375rem;padding-right:.375rem;width:auto}}.sidebar .sidebar-nav-menu__item:last-child{margin-bottom:0}.content,.sidebar .sidebar-nav-menu__item .nav-link{width:100%}.content{background-color:var(--white);border-radius:var(--border-radius-md);box-shadow:var(--shadow-popover);font-size:var(--font-16)}.content__bar{height:100vh;height:calc(var(--content-height) - 9rem);width:100%}@media(max-width:991px){.content__bar{height:calc(100vh - 14rem);height:calc(var(--vh, 1vh)*100 - 14rem)}}.content h1{color:var(--primary-color);font-size:var(--font-22);margin-bottom:1.5rem}.content h3{font-size:var(--font-18);font-weight:700;margin-bottom:1em;margin-top:1.5em}.content h4{font-size:var(--font-16);font-weight:600;margin-bottom:.25em}.content a{color:var(--primary-color);font-weight:600;-webkit-text-decoration:underline;text-decoration:underline}.content ul{margin-bottom:1em;padding-left:40px}",""]),o.locals={},t.exports=o},762:function(t,n,e){"use strict";e.r(n);var o=e(27),l=e.n(o),r={initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeDestroy:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var t=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),e=l.a.getHeight(this.$el)-parseInt(n.height,10);"none"!==t["max-height"]&&0===e&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(t["max-height"],10)?this.$el.style.height=t["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth)+"px")},moveBar:function(){var t=this,n=this.$refs.content.scrollWidth,e=this.$refs.content.clientWidth,o=-1*(this.$el.clientHeight-this.$refs.xBar.clientHeight);this.scrollXRatio=e/n;var r=this.$refs.content.scrollHeight,c=this.$refs.content.clientHeight,d=-1*(this.$el.clientWidth-this.$refs.yBar.clientWidth);this.scrollYRatio=c/r,this.frame=this.requestAnimationFrame((function(){t.scrollXRatio>=1?l.a.addClass(t.$refs.xBar,"p-scrollpanel-hidden"):(l.a.removeClass(t.$refs.xBar,"p-scrollpanel-hidden"),t.$refs.xBar.style.cssText="width:"+Math.max(100*t.scrollXRatio,10)+"%; left:"+t.$refs.content.scrollLeft/n*100+"%;bottom:"+o+"px;"),t.scrollYRatio>=1?l.a.addClass(t.$refs.yBar,"p-scrollpanel-hidden"):(l.a.removeClass(t.$refs.yBar,"p-scrollpanel-hidden"),t.$refs.yBar.style.cssText="height:"+Math.max(100*t.scrollYRatio,10)+"%; top: calc("+t.$refs.content.scrollTop/r*100+"% - "+t.$refs.xBar.clientHeight+"px);right:"+d+"px;")}))},onYBarMouseDown:function(t){this.isYBarClicked=!0,this.lastPageY=t.pageY,l.a.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),l.a.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onXBarMouseDown:function(t){this.isXBarClicked=!0,this.lastPageX=t.pageX,l.a.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),l.a.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onDocumentMouseMove:function(t){this.isXBarClicked?this.onMouseMoveForXBar(t):(this.isYBarClicked||this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))},onMouseMoveForXBar:function(t){var n=this,e=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.frame=this.requestAnimationFrame((function(){n.$refs.content.scrollLeft+=e/n.scrollXRatio}))},onMouseMoveForYBar:function(t){var n=this,e=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.frame=this.requestAnimationFrame((function(){n.$refs.content.scrollTop+=e/n.scrollYRatio}))},onDocumentMouseUp:function(){l.a.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),l.a.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),l.a.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(t){(window.requestAnimationFrame||this.timeoutFrame)(t)},refresh:function(){this.moveBar()},scrollTop:function(t){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;t=t>n?n:t>0?t:0,this.$refs.contentscrollTop=t},bindDocumentMouseListeners:function(){var t=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){t.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){t.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}}},c=(e(756),e(0)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-scrollpanel p-component"},[n("div",{staticClass:"p-scrollpanel-wrapper"},[n("div",{ref:"content",staticClass:"p-scrollpanel-content",on:{scroll:t.moveBar,mouseenter:t.moveBar}},[t._t("default")],2)]),t._v(" "),n("div",{ref:"xBar",staticClass:"p-scrollpanel-bar p-scrollpanel-bar-x",on:{mousedown:t.onXBarMouseDown}}),t._v(" "),n("div",{ref:"yBar",staticClass:"p-scrollpanel-bar p-scrollpanel-bar-y",on:{mousedown:t.onYBarMouseDown}})])}),[],!1,null,null,null);n.default=component.exports},814:function(t,n,e){"use strict";e.r(n);var o={components:{NavLink:e(736).default}},l=e(0),component=Object(l.a)(o,(function(){var t=this._self._c;return t("ul",{staticClass:"sidebar-nav-menu list-unstyled"},[t("li",{staticClass:"sidebar-nav-menu__item"},[t("NavLink",{attrs:{to:"policy",caption:"privacy-policy"}})],1),this._v(" "),t("li",{staticClass:"sidebar-nav-menu__item"},[t("NavLink",{attrs:{to:"terms",caption:"terms-and-conditions"}})],1)])}),[],!1,null,null,null);n.default=component.exports},883:function(t,n,e){var map={"./ar.json":[918,114],"./cs.json":[919,115],"./da.json":[920,116],"./de.json":[921,117],"./en.json":[922,118],"./es.json":[923,119],"./fi.json":[924,120],"./fil.json":[925,121],"./fr.json":[926,122],"./id.json":[927,123],"./it.json":[928,124],"./ja.json":[929,125],"./ko.json":[930,126],"./ms.json":[931,127],"./my.json":[932,128],"./nl.json":[933,129],"./no.json":[934,130],"./pl.json":[935,131],"./pt.json":[936,132],"./ro.json":[937,133],"./sv.json":[938,134],"./th.json":[939,135],"./tr.json":[940,136],"./vi.json":[941,137],"./zh.json":[942,138]};function o(t){if(!e.o(map,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[t],o=n[0];return e.e(n[1]).then((function(){return e.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=883,t.exports=o},986:function(t,n,e){"use strict";e.r(n);e(1),e(39),e(40),e(13);var o=e(735),l=e(814),r=e(43),c={components:{LegalNavMenu:l.default,PageContent:o.default},data:function(){return{htmlContent:"",language:"en"}},head:function(){return Object(r.d)(this,"meta-title_terms","")},beforeMount:function(){var t=this;this.language=this.$i18n.locale.split("-")[0],e(883)("./".concat(this.language,".json")).then((function(n){t.htmlContent="\n\t\t\t\t".concat((null==n?void 0:n.heading)||"","\n\t\t\t\t").concat((null==n?void 0:n.subheading)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_5)||"","\n\t\t\t\t").concat((null==n?void 0:n.applicability_6)||"","\n\t\t\t\t").concat((null==n?void 0:n.eligibility_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.eligibility_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.eligibility_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.panel_registration_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.panel_registration_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.panel_registration_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_coins_definition)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_earning_coins_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_earning_coins_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_earn_coins_as_follows_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_earn_coins_as_follows_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_summary_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.rewards_summary_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_5)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_6)||"","\n\t\t\t\t").concat((null==n?void 0:n.redeeming_coins_7)||"","\n\t\t\t\t").concat((null==n?void 0:n.tax_liability)||"","\n\t\t\t\t").concat((null==n?void 0:n.expiration_of_coins_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.expiration_of_coins_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.expiration_of_coins_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.misconduct_fraud_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.misconduct_fraud_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.misconduct_fraud_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.misconduct_fraud_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_5)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_6)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_7)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_8)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_9)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_10)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_11)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_12)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_13)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_14)||"","\n\t\t\t\t").concat((null==n?void 0:n.prohibited_activities_15)||"","\n\t\t\t\t").concat((null==n?void 0:n.restricted_content_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.restricted_content_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.restricted_content_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.email_communication_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.email_communication_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.canceling_account_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.canceling_account_2_updated)||"","\n\t\t\t\t").concat((null==n?void 0:n.canceling_account_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.disclaimer)||"","\n\t\t\t\t").concat((null==n?void 0:n.limitations_of_liability_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.limitations_of_liability_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.indemnification_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.indemnification_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.notices_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.notices_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_5)||"","\n\t\t\t\t").concat((null==n?void 0:n.arbitration_6)||"","\n\t\t\t\t").concat((null==n?void 0:n.class_action_waiver_1)||"","\n\t\t\t\t").concat((null==n?void 0:n.class_action_waiver_2)||"","\n\t\t\t\t").concat((null==n?void 0:n.class_action_waiver_3)||"","\n\t\t\t\t").concat((null==n?void 0:n.class_action_waiver_4)||"","\n\t\t\t\t").concat((null==n?void 0:n.class_action_waiver_5)||"","\n\t\t\t\t").concat((null==n?void 0:n.severability)||"","\n\t\t\t\t").concat((null==n?void 0:n.jurisdiction)||"","\n\t\t\t\t").concat((null==n?void 0:n.miscellaneous_terms)||"","\n\t\t")}))}},d=c,v=e(0),component=Object(v.a)(d,(function(){var t=this,n=t._self._c;return n("PageContent",{attrs:{"nav-scroll":"","content-scroll":""},scopedSlots:t._u([{key:"sidebar",fn:function(){return[n("LegalNavMenu")]},proxy:!0},{key:"content",fn:function(){return[n("div",{domProps:{innerHTML:t._s(t.htmlContent)}})]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PageContent:e(735).default})}}]);