!function(e){function t(t){for(var n,s,i=t[0],l=t[1],d=t[2],u=0,p=[];u<i.length;u++)s=i[u],o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,d||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={0:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;a.push([2,1]),r()}([,,function(e,t,r){"use strict";r(3);var n=r(0),o=i(r(13)),a=i(r(14)),s=i(r(17));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var s=t[o](a),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}r(18),((e,t,r)=>{t.editors.gutenberg={attach:i=>l(function*(){n.plugins.registerPlugin("drupal",{icon:"forms",render:s.default}),(0,o.default)(n.data),yield(0,a.default)(n.blocks,n.editor),yield function(o){const a=e(o),s="editor-"+a.data("drupal-selector");e('<div id="'+s+'" class="gutenberg__editor"></div>').insertAfter(a),a.hide(),r.node={content:{raw:e(o).val()},templates:"",title:{raw:document.title},type:"page",status:"auto-draft",id:12345};const i={alignWide:!0,availableTemplates:[],allowedBlockTypes:!0,disableCustomColors:!1,disablePostFormats:!1,titlePlaceholder:t.t("Add title"),bodyPlaceholder:t.t("Add content"),isRTL:!1,autosaveInterval:0,canAutosave:!1,canPublish:!1,canSave:!1};return window.customGutenberg={events:{OPEN_GENERAL_SIDEBAR:t=>{let r=t.name.replace(/edit-post\//g,"");r=r.replace(/drupal\//g,"");let n=e(".edit-post-sidebar .components-panel .tab");e(".gutenberg-sidebar").append(n),setTimeout(()=>{let t=e(".gutenberg-sidebar .tab."+r);e(".edit-post-sidebar .components-panel").append(t)},0),e(document.body).addClass("gutenberg-sidedar-open")},CLOSE_GENERAL_SIDEBAR:()=>{e(document.body).removeClass("gutenberg-sidedar-open"),e(".gutenberg-sidebar").append(e(".edit-post-sidebar .components-panel .tab"))}}},new Promise(e=>{setTimeout(()=>{n.editPost.initializeEditor(s,"page",12345,i,{}),e()},0)})}(i),n.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/document"),setTimeout(function(){e(".edit-post-header__settings").append(e(".gutenberg-header-settings")),e(".gutenberg-full-editor").addClass("ready"),e("#gutenberg-loading").addClass("hide")},0),e(document.forms[0]).on("submit",(()=>{var t=l(function*(t){const r=n.data.select("core/editor"),o=n.data.dispatch("core/editor");e(i).val(r.getEditedPostContent());let a=e('[id^="edit-"]:focus');return a.length||(a=e(t.originalEvent.explicitOriginalTarget)),"edit-submit"===a.attr("id")||"edit-preview"===a.attr("id")||"edit-delete"===a.attr("id")?(o.savePost(),!0):(t.preventDefault(),t.stopPropagation(),!1)});return function(e){return t.apply(this,arguments)}})())})(),detach(t,r,o){const a=e(t),s="editor-"+a.data("drupal-selector"),i=n.data.select("core/editor").getEditedPostContent();a.val(i),"serialize"!==o&&e("#"+s).remove()},onChange(){}}})(jQuery,Drupal,wp,drupalSettings,_)},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),o=r(5);window._wpDateSettings={l10n:{locale:"pt_PT"}},window.wp={apiFetch:n.default,url:{addQueryArgs:o.addQueryArgs}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(e){for(const t in o)if(o.hasOwnProperty(t)){const r=o[t];r.regex.lastIndex=0;let n=r.regex.exec(e.path+"");if(n&&n.length>0&&(e.method||"GET"===r.method))return r.process(n,e.data)}return new Promise((t,r)=>r({code:"api_handler_not_found",message:"API handler not found.",data:{path:e.path,status:404}}))}(e)};const n={page:{labels:{Document:Drupal.t("Node"),document:Drupal.t("Node"),posts:Drupal.t("Nodes"),extras:Drupal.t("Fields")},name:"Page",rest_base:"pages",slug:"page",supports:{author:!1,comments:!1,"custom-fields":!0,document:!0,editor:!0,"media-library":!1,"page-attributes":!1,posts:!1,revisions:!1,"template-settings":!1,thumbnail:!1,title:!1,extras:!0},viewable:!1,saveable:!1,publishable:!1,autosaveable:!1}},o={"save-post":{method:"PUT",regex:/\/wp\/v2\/(\w*)\/(\d*)/g,process:(e,t)=>new Promise(r=>{r({pathType:"save-post",id:e[2],type:e[1],title:{raw:document.title},content:{raw:t}})})},"load-node":{method:"GET",regex:/\/wp\/v2\/pages\/(\d*)/g,process:()=>new Promise(e=>{e(wp.node)})},"load-media":{method:"GET",regex:/\/wp\/v2\/media\/(\d*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/image/load/"+e[1],accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{r({message:"Error"})})})},"save-media":{method:"POST",regex:/\/wp\/v2\/media/g,process:(e,t)=>new Promise((e,r)=>{let n;for(let e of t.entries())"file"===e[0]&&(n=e[1]);const o=new FormData;o.append("files[fid]",n),o.append("fid[fids]",""),o.append("attributes[alt]","Test"),o.append("_drupal_ajax","1"),o.append("form_id",jQuery('[name="form_id"]').val()),o.append("form_build_id",jQuery('[name="form_build_id"]').val()),o.append("form_token",jQuery('[name="form_token"]').val()),jQuery.ajax({method:"POST",url:drupalSettings.path.baseUrl+"editor/image/upload/gutenberg",data:o,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{r("Error")})})},categories:{method:"GET",regex:/\/wp\/v2\/categories\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},users:{method:"GET",regex:/\/wp\/v2\/users\/\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},taxonomies:{method:"GET",regex:/\/wp\/v2\/taxonomies\?(.*)/g,process:()=>new Promise(e=>{e("ok")})},embed:{method:"GET",regex:/\/oembed\/1\.0\/proxy\?(.*)/g,process:e=>new Promise((t,r)=>{jQuery.ajax({method:"GET",url:`http://open.iframe.ly/api/oembed?${e[1]}&origin=drupal`,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{r("Error")})})},root:{method:"GET",regex:/^\/$/g,process:()=>new Promise(e=>e({theme_supports:{formats:["standard","aside","image","video","quote","link","gallery","audio"],"post-thumbnails":!0}}))},"load-type-page":{method:"GET",regex:/\/wp\/v2\/types\/page/g,process:()=>new Promise(e=>e(n.page))},"load-types":{method:"GET",regex:/\/wp\/v2\/types/g,process:()=>new Promise(e=>e(n))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.addQueryArgs=function(e,t){const r=(0,o.parse)(e,!0);n({},r.query,t);return delete r.search,""};var o=r(6);r(1)},,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){const{registerStore:t,dispatch:r}=e,o={blocks:{}};return t("drupal",{reducer(e=o,t){switch(t.type){case"SET_BLOCK":return n({},e,{blocks:n({},e.blocks,{[t.item]:t.block})})}return e},actions:{setBlock:(e,t)=>({type:"SET_BLOCK",item:e,block:t})},selectors:{getBlock(e,t){const{blocks:r}=e,n=r[t];return n}},resolvers:{getBlock:(e,t)=>(function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var s=t[o](a),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}})(function*(){const e=yield fetch(`${drupalSettings.path.baseUrl}editor/blocks/load/${t}`),n=yield e.json();return r("drupal").setBlock(t,n),n})()}})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new Promise(r=>{const{BlockAlignmentToolbar:s,BlockControls:l}=t,d=wp.element.Fragment;jQuery.ajax(drupalSettings.path.baseUrl+"editor/blocks/load").done(t=>{const c={slug:"drupal",title:Drupal.t("Drupal Blocks")},u=[c,...n.data.select("core/blocks").getCategories()];n.data.dispatch("core/blocks").setCategories(u);for(const r in t){const n=t[r];let c=`drupalblock/${r}`;c=(c=c.replace(/_/g,"-")).replace(/:/g,"-"),e.registerBlockType(c,{title:`${n.admin_label} [${n.category}]`,icon:i[n.provider]||a.default,category:"drupal",supports:{html:!1},attributes:{blockId:{type:"string"},align:{type:"string"}},edit({attributes:e,className:t,setAttributes:n}){const{align:a}=e;return n({blockId:r}),wp.element.createElement(d,null,wp.element.createElement(l,null,wp.element.createElement(s,{value:a,onChange:e=>{n({align:e})},controls:["left","right","center","wide","full"]})),wp.element.createElement(o.default,{className:t,id:r,url:`${drupalSettings.path.baseUrl}editor/blocks/load/${r}`}))},save:()=>null})}r()})})};var n=r(0),o=s(r(15)),a=s(r(16));function s(e){return e&&e.__esModule?e:{default:e}}const i={system:a.default,user:"admin-users",views:"media-document",core:a.default}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);const{withSelect:o}=n.data;t.default=o((e,t)=>{const{getBlock:r}=e("drupal"),{id:n}=t;return{blockContent:r(n)}})(class extends wp.element.Component{constructor(e){super(e)}render(){return this.props.blockContent?wp.element.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:this.props.blockContent.html}}):wp.element.createElement("div",{className:"loading-drupal-block"},Drupal.t("Loading"),"...")}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class extends wp.element.Component{constructor(e){super(e)}render(){return wp.element.createElement("svg",{width:"20",height:"20",viewBox:"0 0 222 251",className:"dashicon"},wp.element.createElement("path",{d:"M104.41,155.1c-21.825,0 -39.525,17.7 -39.525,39.525c0,21.825 17.7,39.525 39.525,39.525c21.825,0 39.525,-17.7 39.525,-39.525c0,-21.825 -17.7,-39.525 -39.525,-39.525Z"}),wp.element.createElement("path",{d:"M153.61,147.525c11.7,12.225 18.9,28.8 18.9,47.1c0,23.175 -11.55,43.575 -29.175,55.875c32.625,-10.05 59.625,-34.575 71.7,-64.275c16.725,-41.1 1.125,-72 -24.975,-100.05c0.825,3.6 1.275,7.425 1.275,11.25c-0.075,23.85 -15.975,43.875 -37.725,50.1Z"}),wp.element.createElement("path",{d:"M108.91,97.5c0,16.725 13.575,30.225 30.225,30.225c16.65,0 30.3,-13.575 30.3,-30.225c0,-16.725 -13.575,-30.225 -30.225,-30.225c-16.65,0 -30.3,13.5 -30.3,30.225Z"}),wp.element.createElement("path",{d:"M52.285,238.5c-9.975,-11.85 -15.975,-27.15 -15.975,-43.875c0,-34.875 26.175,-63.6 60,-67.575c-5.775,-8.4 -9.225,-18.6 -9.225,-29.55c0,-28.8 23.325,-52.05 52.125,-52.05c2.4,0 4.725,0.15 6.975,0.45c-17.025,-14.7 -34.05,-29.625 -47.475,-45.9c6.825,71.4 -65.025,45.45 -91.65,111.3c-17.775,44.1 -1.725,98.625 45.225,127.2Z"}))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return wp.element.createElement(a,{name:"additional-fields",title:"Additional fields",icons:"forms",isPinnable:"false"},wp.element.createElement(o,null))};var n=r(0);const{PanelBody:o}=n.components,{PluginSidebar:a}=n.editPost},function(e,t){}]);