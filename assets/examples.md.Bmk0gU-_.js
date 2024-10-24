import{_ as N,s as $,y as C,o as _,c as g,t as O,P as M,I as p,j as c,a as u,D as U}from"./chunks/framework.DxrbrUn9.js";const B=500,R=20,q=300,V="https://stackblitz.com",I=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],H=["project","search","ports","settings"],K=["light","dark"],W=["editor","preview"],T={clickToLoad:e=>h("ctl",e),devToolsHeight:e=>x("devtoolsheight",e),forceEmbedLayout:e=>h("embed",e),hideDevTools:e=>h("hidedevtools",e),hideExplorer:e=>h("hideExplorer",e),hideNavigation:e=>h("hideNavigation",e),openFile:e=>f("file",e),showSidebar:e=>G("showSidebar",e),sidebarView:e=>w("sidebarView",e,H),startScript:e=>f("startScript",e),terminalHeight:e=>x("terminalHeight",e),theme:e=>w("theme",e,K),view:e=>w("view",e,W),zenMode:e=>h("zenMode",e),organization:e=>`${f("orgName",e==null?void 0:e.name)}&${f("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>h("corp",e)};function D(e={}){const t=Object.entries(e).map(([n,r])=>r!=null&&T.hasOwnProperty(n)?T[n](r):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function h(e,t){return t===!0?`${e}=1`:""}function G(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function x(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function w(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function f(e,t){return(Array.isArray(t)?t:[t]).filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`${e}=${encodeURIComponent(r)}`).join("&")}function k(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function E(e,t){return`${A(t)}${e}${D(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${A(n)}${e}${D(n)}`}function A(e={}){return(typeof e.origin=="string"?e.origin:V).replace(/\/$/,"")}function S(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),z(t,n),J(e,t,n),e.replaceWith(t)}function P(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&e.newWindow===!1?"_self":"_blank"}function z(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${q}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}function J(e,t,n={}){var i,s;const r=((s=(i=e.allow)==null?void 0:i.split(";"))==null?void 0:s.map(o=>o.trim()))??[];n.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated"),r.length>0&&(t.allow=r.join("; "))}class X{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((r,i)=>{const s=k();this.pending[s]={resolve:r,reject:i},this.port.postMessage({type:t,payload:{...n,__reqid:s}})})}messageListener(t){var l;if(typeof((l=t.data.payload)==null?void 0:l.__reqid)!="string")return;const{type:n,payload:r}=t.data,{__reqid:i,__success:s,__error:o}=r;this.pending[i]&&(s?this.pending[i].resolve(this.cleanResult(r)):this.pending[i].reject(o?`${n}: ${o}`:n),delete this.pending[i])}cleanResult(t){const n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class Y{constructor(t,n){this.editor={openFile:r=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}}),setCurrentFile:r=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}}),setTheme:r=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}}),setView:r=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}}),showSidebar:(r=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(r=>(r==null?void 0:r.url)??null),setUrl:(r="/")=>{if(typeof r!="string"||!r.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${r}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new X(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){const n=r=>r!==null&&typeof r=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const y=[];class Q{constructor(t){this.id=k(),this.element=t,this.pending=new Promise((n,r)=>{const i=({data:a,ports:d})=>{(a==null?void 0:a.action)==="SDK_INIT_SUCCESS"&&a.id===this.id&&(this.vm=new Y(d[0],a.payload),n(this.vm),o())},s=()=>{var a;(a=this.element.contentWindow)==null||a.postMessage({action:"SDK_INIT",id:this.id},"*")};function o(){window.clearInterval(m),window.removeEventListener("message",i)}window.addEventListener("message",i),s();let l=0;const m=window.setInterval(()=>{if(this.vm){o();return}if(l>=R){o(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),y.forEach((a,d)=>{a.id===this.id&&y.splice(d,1)});return}l++,s()},B)}),y.push(this)}}const Z=e=>{const t=e instanceof Element?"element":"id";return y.find(n=>n[t]===e)??null};function ee(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function te(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function L({template:e,title:t,description:n,dependencies:r,files:i,settings:s}){if(!I.includes(e)){const a=I.map(d=>`'${d}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${a}`)}const o=[],l=(a,d,F="")=>{o.push(ee(a,typeof d=="string"?d:F))};l("project[title]",t),typeof n=="string"&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),r&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(r))),s&&l("project[settings]",JSON.stringify(s)),Object.entries(i).forEach(([a,d])=>{l(`project[files][${te(a)}]`,d)});const m=document.createElement("form");return m.method="POST",m.setAttribute("style","display:none!important;"),m.append(...o),m}function ne(e,t){const n=L(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function re(e,t){const n=L(e);n.action=E("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function b(e){return e!=null&&e.contentWindow?(Z(e)??new Q(e)).pending:Promise.reject("Provided element is not an iframe.")}function ie(e,t){re(e,t)}function oe(e,t){const n=E(`/edit/${e}`,t),r=j(t);window.open(n,r)}function se(e,t){const n=E(`/github/${e}`,t),r=j(t);window.open(n,r)}function ae(e,t,n){var o;const r=P(e),i=ne(t,n),s=document.createElement("iframe");return S(r,s,n),(o=s.contentDocument)==null||o.write(i),b(s)}function ce(e,t,n){const r=P(e),i=document.createElement("iframe");return i.src=v(`/edit/${t}`,n),S(r,i,n),b(i)}function le(e,t,n){const r=P(e),i=document.createElement("iframe");return i.src=v(`/github/${t}`,n),S(r,i,n),b(i)}const de={connect:b,embedGithubProject:le,embedProject:ae,embedProjectId:ce,openGithubProject:se,openProject:ie,openProjectId:oe},ue={key:0,class:"error-message"},pe={__name:"Example",props:{id:{type:String,required:!0},view:{type:String,default:"preview"},clickToLoad:{type:Boolean,default:!1},hideNavigation:{type:Boolean,default:!0},forceEmbedLayout:{type:Boolean,default:!0},openFile:{type:String,default:"src/App.vue"},width:{type:String,default:"100%"},height:{type:[String,Number],default:350}},setup(e){const t=e,n=$(null),r=$(null);return C(()=>{if(n.value)try{de.embedProjectId(n.value,t.id,{forceEmbedLayout:t.forceEmbedLayout,openFile:t.openFile,hideNavigation:t.hideNavigation,height:t.height,width:t.width,view:t.view,clickToLoad:t.clickToLoad}),r.value=null}catch(s){r.value="Failed to embed project. Please try again.",console.error(s)}}),(s,o)=>(_(),g("div",null,[r.value?(_(),g("div",ue,O(r.value),1)):(_(),g("div",{key:1,style:M({width:t.width,height:`${t.height}px`}),ref_key:"el",ref:n},null,4))]))}},he=N(pe,[["__scopeId","data-v-ebd0b8bb"]]),me={components:{Example:he}},je=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples.md","filePath":"examples.md"}'),fe=c("h1",{id:"examples",tabindex:"-1"},[u("Examples "),c("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1),_e=c("h2",{id:"basic",tabindex:"-1"},[u("Basic "),c("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "Basic"'},"​")],-1),ge=c("h2",{id:"wrap-around",tabindex:"-1"},[u("Wrap Around "),c("a",{class:"header-anchor",href:"#wrap-around","aria-label":'Permalink to "Wrap Around"'},"​")],-1),ye=c("h2",{id:"breakpoints",tabindex:"-1"},[u("Breakpoints "),c("a",{class:"header-anchor",href:"#breakpoints","aria-label":'Permalink to "Breakpoints"'},"​")],-1),be=c("h2",{id:"autoplay",tabindex:"-1"},[u("Autoplay "),c("a",{class:"header-anchor",href:"#autoplay","aria-label":'Permalink to "Autoplay"'},"​")],-1),we=c("h2",{id:"active-classes",tabindex:"-1"},[u("Active Classes "),c("a",{class:"header-anchor",href:"#active-classes","aria-label":'Permalink to "Active Classes"'},"​")],-1),Ee=c("h2",{id:"custom-navigation",tabindex:"-1"},[u("Custom Navigation "),c("a",{class:"header-anchor",href:"#custom-navigation","aria-label":'Permalink to "Custom Navigation"'},"​")],-1),ve=c("h2",{id:"gallery",tabindex:"-1"},[u("Gallery "),c("a",{class:"header-anchor",href:"#gallery","aria-label":'Permalink to "Gallery"'},"​")],-1);function Se(e,t,n,r,i,s){const o=U("Example");return _(),g("div",null,[fe,_e,p(o,{id:"vue3-carousel-example-basic"}),ge,p(o,{id:"vue3-carousel-example-wrap-around"}),ye,p(o,{id:"vue3-carousel-example-breakpoints"}),be,p(o,{id:"vue3-carousel-example-autoplay"}),we,p(o,{id:"vue3-carousel-example-status-classes"}),Ee,p(o,{id:"vue3-carousel-example-custom-navigation"}),ve,p(o,{id:"vue3-carousel-example-gallery",height:500})])}const $e=N(me,[["render",Se]]);export{je as __pageData,$e as default};