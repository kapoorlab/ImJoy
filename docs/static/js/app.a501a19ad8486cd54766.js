webpackJsonp([1],{"4+hh":function(t,e){},"4/hK":function(t,e){},"A+BG":function(t,e){},EuGX:function(t,e){},FR2W:function(t,e){},FSv5:function(t,e){},"I0Y/":function(t,e){},M47a:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),i=o("/ocq"),a={name:"home",data:function(){return{showDialog:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.$nextTick(function(){})},methods:{shareOnTwitter:function(){window.open("http://twitter.com/share?url="+encodeURIComponent("https://imjoy.io")+"&text="+encodeURIComponent(" #ShareLoc "),"","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("md-toolbar",{staticClass:"md-transparent md-dense",attrs:{"md-elevation":"0"}},[o("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{attrs:{href:"https://github.com/oeway/ImJoy",target:"_blank"}},[o("md-icon",{staticClass:"md-size-1x svg-icon",attrs:{"md-src":"static/img/github.svg"}}),t._v("source code")],1),t._v(" "),o("md-button",{on:{click:t.shareOnTwitter}},[o("md-icon",{staticClass:"md-size-1x svg-icon",attrs:{"md-src":"static/img/twitter.svg"}}),t._v("share")],1)],1)])]),t._v(" "),o("div",{staticClass:"md-toolbar-row md-layout md-alignment-center-center"},[o("div",{staticClass:"banner-container"},[o("img",{attrs:{src:"static/img/perspective-hr.jpg",alt:"banner"}}),t._v(" "),o("div",{staticClass:"subtitle"},[t._v("Image processing with joy."),o("br"),t._v(" "),o("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.showDialog=!0}}},[t._v("Getting Started")])],1)])]),t._v(" "),o("br"),t._v(" "),o("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[o("md-dialog-title",[t._v("Getting Started with ImJoy")]),t._v(" "),o("md-dialog-content",[o("p",[t._v("With the ImJoy web app, you process your images within the browser, instantly, no installation.")]),t._v(" "),o("md-button",{staticClass:"md-raised md-primary",attrs:{to:"viewer"}},[t._v("Start")]),t._v(" "),o("p",[t._v("You can process your data with the viewer locally and anonymously, by default, no data will be transferred to the internet (also depends on the plugin you installed).")])],1),t._v(" "),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),o("br"),t._v(" "),o("plugin-list",{attrs:{"config-url":"static/plugins/manifest.json"}}),t._v(" "),o("br"),t._v(" "),o("md-divider"),t._v(" "),o("main-footer")],1)},staticRenderFns:[]};var r=o("VU/8")(a,s,!1,function(t){o("Tm5J")},"data-v-988a6748",null).exports,d=o("//Fk"),c=o.n(d),l=o("Xxa5"),u=o.n(l),m=o("exGp"),p=o.n(m),h={name:"viewer",props:["title"],data:function(){return{folder_mode:!1,file_model:null,selected_file:null,selected_files:null,showLoadingDialog:!1,loading:!1,showImportDialog:!1,windows:[],panels:[],activeWindow:null,_workflow_my:null,plugins:[],plugin_api:null,plugin_loaded:!1,menuVisible:!0,db:null,store:this.$root.$data.store,api:this.$root.$data.store.api}},watch:{menuVisible:function(){}},mounted:function(){var t=this;this.plugin_api={alert:alert,createPanel:this.createPanel,createWindow:this.createWindow,createOp:this.createOp,registerIO:this.registerIO},this.plugin_loaded=!1,this.loading=!0,this.db=new PouchDB("imjoy_plugins",{revs_limit:2,auto_compaction:!0});location.protocol,location.host;setTimeout(function(){var e;t.db.allDocs({include_docs:!0,attachments:!0}).then((e=p()(u.a.mark(function e(o){var n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(o),[],t.plugins=[],n=0;case 4:if(!(n<o.total_rows)){e.next=11;break}return i=o.rows[n].doc,e.next=8,t.loadPlugin(i);case 8:n++,e.next=4;break;case 11:t.plugin_loaded=!0,t.loading=!1;case 13:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)})).catch(function(e){console.error(e),t.loading=!1})},200)},beforeDestroy:function(){console.log("terminating plugins");for(var t=0;t<this.plugins.length;t++){this.plugins[t].terminate()}},methods:{windowSelected:function(t){console.log("activate window: ",t),this.activeWindow=t},loadData:function(){var t={name:"Files",type:"files",config:{},data:{files:this.selected_files}};this.windows.push(t)},updateWorkflow:function(t){this._workflow_my=t,console.log("update workflow",t)},runWorkflow:function(t){this._workflow_my&&(console.log("run workflow",t),this._workflow_my[t].execute({}))},selectFileChanged:function(t){console.log(t),this.selected_file=t[0],this.selected_files=t},updateProgress:function(t){console.log(t)},test:function(){},closePanel:function(t){},createOp:function(t){var e=this;console.log("creating Op: ",t);var o,n=(o=p()(u.a.mark(function t(o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,plugin.api.run({op:{name:o.op.name,type:o.op.type},config:o.data,data:o.target,progress:e.updateProgress});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)})),function(t){return o.apply(this,arguments)});return t.onexecute=n,Joy.add(t),!0},createPanel:function(t){return console.log("creating panel: ",t),this.panels.push(t),!0},createWindow:function(t){return console.log("creating window: ",t),this.windows.push(t),!0},registerIO:function(t){return!0},loadPlugin:function(t){var e=this,o=t.js_path,n=t.js_code;new c.a(function(i,a){e.plugin_api.kk=999,e.plugin_api.get_kk=p()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new ArrayBuffer(1200400));case 1:case"end":return t.stop()}},t,e)}));var s=void 0;(s=n?new jailed.DynamicPlugin(n,e.plugin_api,t):new jailed.Plugin(o,e.plugin_api,t)).whenConnected(function(){s.api||console.error("error occured when loading plugins."),console.log(s.api),s.api.setup().then(function(o){console.log("sucessfully setup plugin "+t.name),e.plugins.push(s),i(s)}).catch(function(e){console.error("error occured when loading plugin "+t.name+": ",e),a(e)})}),s.whenFailed(function(e){alert("error occured when loading "+t.name),a(e)})})}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"viewer"},[o("div",{staticClass:"md-title"},[t._v(t._s(t.title))]),t._v(" "),o("md-app",[t.menuVisible?t._e():o("md-app-toolbar",{staticClass:"md-transparent md-dense",attrs:{"md-elevation":"0"}},[o("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[t.menuVisible?t._e():o("md-button",{staticClass:"md-fab md-primary",on:{click:function(e){t.menuVisible=!0}}},[o("md-icon",[t._v("menu")])],1)],1)]),t._v(" "),o("md-app-drawer",{attrs:{"md-active":t.menuVisible,"md-persistent":"full"},on:{"update:mdActive":function(e){t.menuVisible=e}}},[o("div",{staticClass:"md-toolbar-row"},[o("div",{staticClass:"md-toolbar-section-start"},[o("md-button",{staticClass:"md-fab md-primary",on:{click:function(e){t.showImportDialog=!0}}},[o("md-icon",[t._v("add")])],1),t._v(" "),t.loading?o("md-progress-spinner",{attrs:{"md-diameter":30,"md-stroke":3,"md-mode":"indeterminate"}}):t._e()],1),t._v(" "),o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{staticClass:"md-icon-button md-dense md-raised",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[o("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),t._v(" "),o("md-card",[o("md-card-header"),t._v(" "),o("md-card-content",[t.plugin_loaded?o("joy",{attrs:{init:"{id:'analysis_workflow', type:'ops'}"},on:{update:t.updateWorkflow,run:function(e){t.runWorkflow("analysis_workflow")}}}):t._e()],1),t._v(" "),o("md-card-actions")],1),t._v(" "),o("div",{staticClass:"md-layout"},t._l(t.panels,function(e){return o("md-card",{key:e.name,staticClass:"md-layout-item"},[o("md-card-header",[o("div",{staticClass:"md-toolbar-row"},[o("div",{staticClass:"md-toolbar-section-start"},[o("h2",[t._v(t._s(e.name))])]),t._v(" "),o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{staticClass:"md-icon-button",on:{click:function(o){t.closePanel(e)}}},[o("md-icon",[t._v("close")])],1)],1)])]),t._v(" "),o("md-card-content",[t.plugin_loaded?o("joy",{attrs:{init:e.init}}):t._e()],1)],1)}))],1),t._v(" "),o("md-app-content",[o("whiteboard",{attrs:{windows:t.windows},on:{select:t.windowSelected}})],1)],1),t._v(" "),o("md-dialog",{attrs:{"md-active":t.showLoadingDialog},on:{"update:mdActive":function(e){t.showLoadingDialog=e}}},[o("md-dialog-content",[o("md-progress-spinner",{attrs:{"md-diameter":30,"md-stroke":3,"md-mode":"indeterminate"}})],1),t._v(" "),o("md-dialog-actions")],1),t._v(" "),o("md-dialog",{attrs:{"md-active":t.showImportDialog},on:{"update:mdActive":function(e){t.showImportDialog=e}}},[o("md-dialog-content",[o("div",{staticClass:"md-layout-row md-gutter"},[o("div",{staticClass:"md-flex"},[o("md-switch",{model:{value:t.folder_mode,callback:function(e){t.folder_mode=e},expression:"folder_mode"}},[t._v(t._s(t.folder_mode?"Load data from a folder":"Load data from a file"))]),t._v(" "),t.folder_mode?t._e():o("md-field",[o("label",[t._v("load a file")]),t._v(" "),o("md-file",{on:{"md-change":t.selectFileChanged},model:{value:t.file_model,callback:function(e){t.file_model=e},expression:"file_model"}})],1),t._v(" "),t.folder_mode?o("md-field",[o("label",[t._v("load a folder")]),t._v(" "),o("md-file",{attrs:{webkitdirectory:"",mozdirectory:"",msdirectory:"",odirectory:"",directory:"",multiple:""},on:{"md-change":t.selectFileChanged},model:{value:t.file_model,callback:function(e){t.file_model=e},expression:"file_model"}})],1):t._e()],1),t._v(" "),t.plugin_loaded?o("joy",{attrs:{init:"{id:'file_load_workflow', type:'ops'}"}}):t._e()],1)]),t._v(" "),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(e){t.loadData(),t.showImportDialog=!1}}},[t._v("OK")]),t._v(" "),o("md-button",{staticClass:"md-primary",on:{click:function(e){t.showImportDialog=!1}}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]};var f=o("VU/8")(h,v,!1,function(t){o("I0Y/")},"data-v-5164775d",null).exports,_={name:"about",props:{faq:{type:Boolean,default:!0},footer:{type:Boolean,default:!0}},data:function(){return{router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){},methods:{}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("md-subheader",[t._v("About ImJoy.io")]),t._v(" "),o("md-card",[o("md-card-header"),t._v(" "),o("md-card-content",{staticClass:"centered-fixed"},[o("md-icon",{staticClass:"md-size-5x md-small-hide",attrs:{"md-src":"static/img/anna-palm-icon-circle.svg"}}),t._v(" "),o("h2",[t._v("Acknowledgements")]),t._v(" "),o("p",[t._v("ImJoy.io project is mainly supported by\n      ")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.pasteur.fr",target:"_blank"}},[o("img",{attrs:{id:"ip-img",src:"static/img/Institut_Pasteur_logo.svg",alt:"Institut Pasteur"}})])]),t._v(" "),o("br"),t._v(" "),o("md-button",{staticClass:"md-raised",on:{click:t.api.contact}},[t._v("Contact us")])],1)],1),t._v(" "),t.faq?o("faq"):t._e(),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),t.footer?o("md-divider"):t._e(),t._v(" "),t.footer?o("main-footer"):t._e()],1)},staticRenderFns:[]};var w=o("VU/8")(_,g,!1,function(t){o("UpWs")},"data-v-2925121e",null).exports;var b=o("EFqf"),y=o.n(b),C={name:"faq",data:function(){return{source:"\n\nTo be done...\n\n",router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},computed:{compiledMarkdown:function(){return y()(this.source,{sanitize:!0})}},mounted:function(){},methods:{}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq"},[e("md-subheader",[this._v("FREQUENTLY ASKED QUESTIONS")]),this._v(" "),e("md-card",[e("md-card-header"),this._v(" "),e("md-card-content",[e("div",{domProps:{innerHTML:this._s(this.compiledMarkdown)}})])],1)],1)},staticRenderFns:[]};var k=o("VU/8")(C,$,!1,function(t){o("A+BG")},"data-v-62bff1b8",null).exports;n.default.use(i.a);var x=new i.a({base:window.location.pathName,routes:[{path:"/",name:"Home",component:r},{path:"/viewer",name:"Viewer",component:f},{path:"/view",name:"Viewe",component:f},{path:"/about",name:"About",component:w},{path:"/faq",name:"FAQ",component:k}]}),I=o("Lgyv"),j=o.n(I),P=(o("4+hh"),o("giDI"),o("E5Az")),W=o.n(P),D=(o("4/hK"),{name:"navbar",data:function(){return{snackbar_info:"",snackbar_duration:1e3,showSnackbar:!1,screenWidth:window.innerWidth,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){var t=this;this.store.api.show=this.show,this.screenWidth=window.innerWidth;this.store.event_bus.$on("resize",function(e){t.screenWidth=e.width})},methods:{show:function(t,e){this.snackbar_info=t,this.snackbar_duration=e||3e3,this.showSnackbar=!0}}}),E={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"md-toolbar-row"},[o("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[o("md-button",{attrs:{to:"/"}},[o("div",{staticClass:"site-title"},[t._v("ImJoy.io"),o("span",{staticClass:"superscript"},[t._v("alpha")])])]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path!='/'"}],staticClass:"md-layout-item md-medium-hide subheader-title"},[t._v("Image processing with joy.")]),t._v(" "),o("div",{staticClass:"md-toolbar-section-end"},[t.screenWidth<600?o("md-menu",{attrs:{"md-size":"medium"}},[o("md-button",{staticClass:"md-primary md-icon-button",attrs:{"md-menu-trigger":""}},[o("md-icon",[t._v("menu")])],1),t._v(" "),o("md-menu-content",[o("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),o("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/viewer"!=t.$route.path&&"/view"!=t.$route.path,expression:"$route.path != '/viewer' && $route.path != '/view'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/viewer"}},[t._v("Viewer")]),t._v(" "),o("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/about"!=t.$route.path,expression:"$route.path != '/about'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/about"}},[t._v("About")])],1)],1):t._e(),t._v(" "),t.screenWidth>=600?o("md-button",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"md-accent",attrs:{to:"/"}},[o("md-icon",[t._v("home")]),t._v(" Home\n            "),o("md-tooltip",[t._v("Home Page")])],1):t._e(),t._v("\n           \n          "),t.screenWidth>=600?o("md-button",{directives:[{name:"show",rawName:"v-show",value:"/viewer"!=t.$route.path&&"/view"!=t.$route.path,expression:"$route.path != '/viewer' && $route.path != '/view'"}],staticClass:"md-accent",attrs:{to:"/viewer"}},[o("md-icon",[t._v("pageview")]),t._v(" Viewer\n            "),o("md-tooltip",[t._v("SMLM data viewer")])],1):t._e(),t._v("\n           \n          "),t.screenWidth>=600?o("md-button",{directives:[{name:"show",rawName:"v-show",value:"/about"!=t.$route.path,expression:"$route.path != '/about'"}],staticClass:"md-accent",attrs:{to:"/about"}},[o("md-icon",[t._v("info")]),t._v(" About\n            "),o("md-tooltip",[t._v("About ImJoy.io")])],1):t._e()],1)],1),t._v(" "),o("md-snackbar",{staticClass:"md-accent",attrs:{"md-position":"center","md-active":t.showSnackbar,"md-duration":t.snackbar_duration},on:{"update:mdActive":function(e){t.showSnackbar=e}}},[o("span",[t._v(t._s(t.snackbar_info))]),t._v(" "),o("md-button",{staticClass:"md-accent",on:{click:function(e){t.showSnackbar=!1}}},[t._v("close")])],1)],1)},staticRenderFns:[]};var A=o("VU/8")(D,E,!1,function(t){o("EuGX")},"data-v-40be50aa",null).exports,U={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return"/viewer"!=t.$route.path&&"/view"!=t.$route.path?o("div",{staticClass:"footer"},[o("div",{staticClass:"md-layout md-alignment-center-center"},[o("md-button",{staticClass:"md-accent footer-button",attrs:{target:"_blank"},on:{click:function(e){t.contact()}}},[t._v("Ask a question")]),t._v(" "),o("md-button",{staticClass:"md-accent footer-button",attrs:{target:"_blank",href:"https://github.com/oeway/ImJoy/issues"}},[t._v("Create an issue on Github")])],1),t._v(" "),o("div",{staticClass:"md-layout md-alignment-center-center"},[o("md-button",{staticClass:"footer-button",attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[o("md-tooltip",[t._v("Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.")]),t._v(" "),o("img",{attrs:{id:"cc-by-img",src:"static/img/by.svg",alt:"CC BY 4.0"}}),t._v(" Site content licensed under CC BY 4.0\n    ")],1),t._v(" "),o("md-button",{staticClass:"footer-button",on:{click:function(e){t.mode="about",t.showDialog=!0}}},[t._v("About ImJoy.io")])],1),t._v(" "),o("div",{staticClass:"md-layout md-alignment-center-center"},[o("md-button",{staticClass:"footer-button",attrs:{href:"https://github.com/oeway",target:"_blank"}},[t._v("Made by Wei OUYANG with "),o("span",{staticClass:"red"},[t._v("❤")])]),t._v(" "),o("md-button",{staticClass:"footer-button",attrs:{target:"_blank",href:"https://sites.google.com/site/imagingandmodeling/"}},[t._v("Powered by Imaging and Modeling Unit")]),t._v(" "),t._m(0)],1),t._v(" "),o("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[o("md-dialog-content",["about"==t.mode?o("about",{attrs:{footer:!1,faq:!1}}):t._e(),t._v(" "),"tos"==t.mode?o("tos"):t._e()],1),t._v(" "),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),o("md-dialog",{attrs:{"md-active":t.showQuestion,id:"question-dialog"},on:{"update:mdActive":function(e){t.showQuestion=e}}},[o("md-toolbar",{staticClass:"md-primary"},[o("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[o("md-subheader",[t._v("\n          Contact us\n        ")]),t._v(" "),o("div",{staticClass:"md-toolbar-section-end"},[o("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showQuestion=!1}}},[o("md-icon",[t._v("close")])],1)],1)],1)]),t._v(" "),o("md-dialog-content",[o("div",{staticClass:"holds-the-iframe"},[o("iframe",{attrs:{id:"typeform-full",width:"100%",height:"100%",frameborder:"0",src:"https://oeway.typeform.com/to/qyJOIy"}})])]),t._v(" "),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(e){t.showQuestion=!1}}},[t._v("Close")])],1)],1)],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.pasteur.fr",target:"_blank"}},[e("img",{attrs:{id:"ip-img",src:"static/img/Institut_Pasteur_logo.svg",alt:"Institut Pasteur"}})])}]};var R=o("VU/8")({name:"main-footer",data:function(){return{mode:"about",showDialog:!1,showQuestion:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.api.contact=this.contact},methods:{contact:function(){this.showQuestion=!0}}},U,!1,function(t){o("FR2W")},"data-v-04375a48",null).exports,S={name:"whiteboard",props:{windows:{type:Array,default:function(){return null}}},data:function(){return{router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){},methods:{close:function(t){console.log("close",t),this.windows.splice(t,1)},select:function(t,e){if(!e)for(var o=0;o<this.windows.length;o++)this.windows[o].selected=!1;this.windows[t].selected=!0,this.$emit("select",this.windows[t]),this.$forceUpdate()},unselect:function(){console.log("unselect all");for(var t=0;t<this.windows.length;t++)this.windows[t].selected=!1;this.$forceUpdate()}}},J={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"whiteboard",on:{click:function(e){t.unselect()}}},[o("div",{staticClass:"md-layout md-gutter md-alignment-top-left"},[t.windows?t._e():o("md-empty-state",{attrs:{"md-icon":"static/img/anna-palm-icon-circle-animation.svg","md-label":"IMJOY.IO","md-description":""}}),t._v(" "),t._l(t.windows,function(e,n){return o("md-card",{key:n,staticClass:"md-layout-item md-large-size-30 md-medium-size-40 md-small-size-50 md-xsmall-size-100",class:e.selected?"md-primary":""},[o("md-card-header",[o("div",{staticClass:"md-toolbar-row md-primary",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.select(n)}}},[o("div",{staticClass:"md-toolbar-section-start"},[o("h2",[t._v(t._s(e.name))])]),t._v(" "),o("div",{staticClass:"md-toolbar-section-end"},[e.selected?o("md-menu",{attrs:{"md-size":"big","md-direction":"bottom-end"}},[o("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[o("md-icon",[t._v("more_vert")])],1),t._v(" "),o("md-menu-content",[o("md-menu-item",{on:{click:function(e){t.close(n)}}},[o("span",[t._v("Close")]),t._v(" "),o("md-icon",[t._v("close")])],1)],1)],1):t._e()],1)])]),t._v(" "),o("md-card-content",["empty"==e.type?o("md-empty-state",{attrs:{"md-icon":"hourglass_empty","md-label":"IMJOY.IO","md-description":""}}):t._e(),t._v(" "),"files"==e.type?o("div",t._l(e.data.files,function(e){return o("md-chip",{key:e.name},[t._v(t._s(e.name))])})):t._e()],1)],1)})],2)])},staticRenderFns:[]};var F=o("VU/8")(S,J,!1,function(t){o("FSv5")},"data-v-71a029f4",null).exports,O={name:"options",props:{init:{type:String,default:function(){return"joy workflow."}},controlButtons:{type:Boolean,default:function(){return!0}},data:{type:String,default:function(){return Joy.loadFromURL()}},modules:{type:Array,default:function(){return["instructions","math","random"]}}},data:function(){return{isRunning:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.setupJoy()},watch:{init:function(t,e){console.log("Prop changed: ",t," | was: ",e),setupJoy()}},methods:{setupJoy:function(){var t=this;this.$refs.editor.innerHTML="",Joy({container:this.$refs.editor,init:this.init,data:this.data,modules:this.modules,onupdate:function(e){console.log("joy updated: ",e),t.$emit("update",e)}})},runJoy:function(){console.log("emit run joy"),this.$emit("run")},stopJoy:function(){this.$emit("stop")}}},V={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"joy"},[o("div",{staticClass:"joy-container"},[o("div",{ref:"editor",staticClass:"joy-editor"}),t._v(" "),o("md-button",{staticClass:"md-button md-primary",attrs:{disabled:t.isRunning},on:{click:function(e){t.runJoy()}}},[o("md-icon",[t._v("play_arrow")]),t._v("Run\n    ")],1),t._v(" "),o("md-button",{staticClass:"md-button md-primary",attrs:{disabled:!t.isRunning},on:{click:function(e){t.stopJoy()}}},[o("md-icon",[t._v("stop")]),t._v("Stop\n    ")],1)],1)])},staticRenderFns:[]};var z=o("VU/8")(O,V,!1,function(t){o("M47a")},"data-v-07aeb468",null).exports,L=o("mtWM"),M=o.n(L),N=(o("5IAE"),o("jGSh"),{name:"plugin-list",props:{configUrl:{type:String,default:null}},data:function(){return{editorCode:"",editorPlugin:null,editorOptions:{},showEditor:!1,plugins:[],root_url:null,plugin_dir:null,manifest:null,showRemoveConfirmation:!1,_plugin2_remove:null,db:null,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){var t=this;this.db=new PouchDB("imjoy_plugins",{revs_limit:2,auto_compaction:!0}),this.configUrl&&M.a.get(this.configUrl).then(function(e){e&&e.data&&e.data.plugins&&(t.manifest=e.data,t.plugins=t.manifest.plugins,t.plugin_dir=t.manifest.root_path,t.root_url=location.protocol+"//"+location.host,t.plugin_dir.startsWith("http")||(t.plugin_dir=t.root_url+t.plugin_dir,console.log(t.plugin_dir)),t.updatePluginList())})},methods:{updatePluginList:function(){for(var t=this,e=function(e){var o=t.plugins[e];console.log(o),o.js_path.startsWith("http")||(o.js_path.startsWith||(o.js_path="/"+o.js_path),o.js_path=t.plugin_dir+o.js_path),t.db.get(o.name).then(function(e){o.installed=!0,t.$forceUpdate(),console.log(o)}).catch(function(t){console.log(o.name,t)})},o=0;o<this.plugins.length;o++)e(o)},edit:function(t){var e=this;this.db.get(t.name).then(function(o){e.editorCode=o.js_code,e.editorOptions={tabSize:4,mode:"text/javascript",theme:"base16-dark",lineNumbers:!0,line:!0},e.editorPlugin=t,e.showEditor=!0,e.$forceUpdate()}).catch(function(e){console.log("error occured when editing ",t.name,e)})},saveCode:function(){var t=this;this.editorPlugin.js_code=this.editorCode,this.db.get(this.editorPlugin.name).then(function(e){return t.editorPlugin._id=t.editorPlugin.name,t.editorPlugin._rev=e._rev,t.db.put(t.editorPlugin)}).then(function(e){t.api.show("changes has been saved.")}).catch(function(e){console.error(e),t.api.show("something went wrong during saving.")})},remove:function(t){var e=this;this.db.get(t.name).then(function(t){return e.db.remove(t)}).then(function(o){console.log("plugin has been removed"),e.api.show("the plugin has been removed."),t.installed=!1,e.$forceUpdate()}).catch(function(e){console.log("error occured when removing ",t.name,e)})},install:function(t){var e=this;M.a.get(t.js_path).then(function(o){if(o&&o.data&&""!=o.data){t.js_code=o.data,t._id=t.name;var n=function(){e.db.put(t,{force:!0}).then(function(o){console.log("Successfully installed!"),t.installed=!0,e.$forceUpdate(),e.api.show(t.name+" has been sucessfully installed.")}).catch(function(t){e.api.show("failed to install the plugin."),console.error(t)})};e.db.get(t._id).then(function(t){return e.db.remove(t)}).then(function(t){n()}).catch(function(t){n()})}else alert("failed to get plugin code from "+t.js_path)})}}}),T={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"plugin-list"},[o("md-subheader",[t._v("Plugins")]),t._v(" "),o("div",{staticClass:"md-layout md-gutter md-alignment-center"},t._l(t.plugins,function(e){return o("md-card",{key:e.name,staticClass:"md-layout-item md-large-size-30 md-medium-size-40 md-small-size-50 md-xsmall-size-100"},[o("md-card-header",[t._v("\n      "+t._s(e.createdAt)+"\n      "),o("h2",[t._v(t._s(e.name))]),t._v(" "),o("p",[t._v(t._s(e.description))]),t._v(" "),t._l(e.tags,function(e){return o("md-chip",{key:e},[t._v(t._s(e))])})],2),t._v(" "),o("md-card-content",[e.installed?t._e():o("md-button",{staticClass:"md-primary",on:{click:function(o){t.install(e)}}},[t._v("Install")]),t._v(" "),e.installed?o("md-button",{staticClass:"md-primary",on:{click:function(o){t.install(e)}}},[t._v("Update")]):t._e(),t._v(" "),e.installed?o("md-button",{staticClass:"md-accent",on:{click:function(o){t._plugin2_remove=e,t.showRemoveConfirmation=!0}}},[t._v("Remove")]):t._e(),t._v(" "),e.installed?o("md-button",{staticClass:"md-primary",on:{click:function(o){t.edit(e)}}},[t._v("Edit")]):t._e()],1)],1)})),t._v(" "),o("br"),t._v(" "),o("md-dialog-confirm",{attrs:{"md-active":t.showRemoveConfirmation,"md-title":"Removing Plugin","md-content":"Do you really want to <strong>delete</strong> this plugin","md-confirm-text":"Yes","md-cancel-text":"Cancel"},on:{"update:mdActive":function(e){t.showRemoveConfirmation=e},"md-cancel":function(e){t.showRemoveConfirmation=!1},"md-confirm":function(e){t.remove(t._plugin2_remove),t.showRemoveConfirmation=!1}}}),t._v(" "),o("md-dialog",{staticClass:"editor-dialog",attrs:{"md-active":t.showEditor},on:{"update:mdActive":function(e){t.showEditor=e}}},[o("md-dialog-content",[o("div",{staticClass:"md-toolbar-row"},[o("h2",[t._v("Code Editor")])]),t._v(" "),o("codemirror",{staticClass:"codemirror",attrs:{options:t.editorOptions},model:{value:t.editorCode,callback:function(e){t.editorCode=e},expression:"editorCode"}})],1),t._v(" "),o("md-dialog-actions",[o("md-button",{staticClass:"md-primary",on:{click:function(e){t.saveCode(),t.showEditor=!1}}},[t._v("Save")]),t._v(" "),o("md-button",{staticClass:"md-primary",on:{click:function(e){t.showEditor=!1}}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]};var q=o("VU/8")(N,T,!1,function(t){o("cb9y")},"data-v-165b9bd2",null).exports,G={debug:!0,event_bus:new n.default,api:{}},H={name:"app",data:function(){return{show_navbar:!0,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){var t=this;window.location.href.indexOf("navbar=0")>=0&&(this.show_navbar=!1),this.$nextTick(function(){var e=function(e){t.store.windowHeight=window.innerHeight,t.store.windowWidth=window.innerWidth,t.store.event_bus.$emit("resize",{height:t.store.windowHeight,width:t.store.windowWidth})};e(),document.addEventListener("orientationchange",window.onresize=e)})},methods:{},watch:{}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-app",{attrs:{id:"app","md-waterfall":"","md-mode":"fixed"}},[this.show_navbar?e("md-app-toolbar",{staticClass:"md-primary"},[e("navbar")],1):this._e(),this._v(" "),e("md-app-content",[e("router-view")],1)],1)},staticRenderFns:[]};var Y=o("VU/8")(H,B,!1,function(t){o("w7Wp")},null,null).exports,Q=o("GDE4"),K=o.n(Q);n.default.config.productionTip=!1,n.default.use(j.a),n.default.use(W.a),n.default.component("vue-slider",K.a),n.default.component("navbar",A),n.default.component("faq",k),n.default.component("viewer",f),n.default.component("main-footer",R),n.default.component("about",w),n.default.component("whiteboard",F),n.default.component("joy",z),n.default.component("plugin-list",q);n.default.filter("truncate",function(t,e,o){o=o||"...";var n=document.createElement("div");n.innerHTML=t;var i=n.textContent;return i.length>e?i.slice(0,e)+o:i}),new n.default({el:"#app",router:x,data:{store:G,router:x},template:"<App/>",components:{App:Y}})},Tm5J:function(t,e){},UpWs:function(t,e){},cb9y:function(t,e){},giDI:function(t,e){},jGSh:function(t,e){},w7Wp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a501a19ad8486cd54766.js.map