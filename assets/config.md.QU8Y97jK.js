import{_ as n,o as i,c as d,t as c,n as g,j as t,a as s,I as e,a3 as k,D as E}from"./chunks/framework.DxrbrUn9.js";const _={name:"Badge",props:{text:"",type:""}};function b(o,r,a,h,u,p){return i(),d("span",{class:g(["badge",a.type])},c(a.text),3)}const m=n(_,[["render",b],["__scopeId","data-v-5c8b1cba"]]),y={components:{Badge:m}},Z=JSON.parse('{"title":"Config","description":"","frontmatter":{},"headers":[],"relativePath":"config.md","filePath":"config.md"}'),f=t("h1",{id:"config",tabindex:"-1"},[s("Config "),t("a",{class:"header-anchor",href:"#config","aria-label":'Permalink to "Config"'},"​")],-1),v=t("h2",{id:"available-props",tabindex:"-1"},[s("Available Props "),t("a",{class:"header-anchor",href:"#available-props","aria-label":'Permalink to "Available Props"'},"​")],-1),q={tabindex:"0"},x=t("thead",null,[t("tr",null,[t("th",null,"Prop"),t("th",null,"Default"),t("th",null,"Description")])],-1),A=t("tr",null,[t("td",null,[t("code",null,"itemsToShow")]),t("td",null,"1"),t("td",null,"count of items to showed per view (can be a fraction).")],-1),S=t("tr",null,[t("td",null,[t("code",null,"itemsToScroll")]),t("td",null,"1"),t("td",null,"number of slides to be scrolled")],-1),C=t("td",null,[t("s",null,[t("code",null,"currentSlide")])],-1),D=t("td",null,[t("s",null,"0")],-1),w=t("s",null,"index number of the initial slide.",-1),P=t("tr",null,[t("td",null,[t("code",null,"wrapAround")]),t("td",null,"false"),t("td",null,"enable infinite scrolling mode.")],-1),N=t("tr",null,[t("td",null,[t("code",null,"snapAlign")]),t("td",null,"'center'"),t("td",null,"controls the carousel position alignment, can be 'start', 'end', 'center-[odd|even]'")],-1),T=t("tr",null,[t("td",null,[t("code",null,"transition")]),t("td",null,"300"),t("td",null,"sliding transition time in ms.")],-1),$=t("tr",null,[t("td",null,[t("code",null,"autoplay")]),t("td",null,"0"),t("td",null,"Auto play time in ms.")],-1),B=t("td",null,[t("s",null,[t("code",null,"settings")])],-1),I=t("td",null,[t("s",null,"{ }")],-1),V=t("s",null,"an object to pass all settings.",-1),U=t("tr",null,[t("td",null,[t("code",null,"breakpoints")]),t("td",null,"null"),t("td",null,"an object to pass all the breakpoints settings.")],-1),j=t("td",null,[t("code",null,"modelValue")],-1),G=t("td",null,"0",-1),O=t("td",null,[t("code",null,"mouseDrag")],-1),R=t("td",null,"true",-1),Y=t("td",null,[t("code",null,"touchDrag")],-1),z=t("td",null,"true",-1),H=t("td",null,[t("code",null,"pauseAutoplayOnHover")],-1),J=t("td",null,"false",-1),K=t("td",null,[t("code",null,"dir")],-1),L=t("td",null,"ltr",-1),W=t("td",null,[t("code",null,"i18n")],-1),X=t("td",null,[t("a",{href:"#i18n"},[t("code",null,"{ ariaNextSlide: ...}")])],-1),F=k(`<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="slides-default" tabindex="-1">Slides/Default <a class="header-anchor" href="#slides-default" aria-label="Permalink to &quot;Slides/Default&quot;">​</a></h3><p>Used to render the carousel items. You can use either the default slot or wrap element in <code>slides</code> slot.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #slides&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;Slide v-for=&quot;slide in 10&quot; :key=&quot;slide&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/Slide&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="addons" tabindex="-1">Addons <a class="header-anchor" href="#addons" aria-label="Permalink to &quot;Addons&quot;">​</a></h3><p>Used to add display carousel addons components.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #addons&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;Navigation /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;Pagination /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="slots-attributes" tabindex="-1">Slots Attributes <a class="header-anchor" href="#slots-attributes" aria-label="Permalink to &quot;Slots Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>slideWidth</code></td><td>the width of a single slide element.</td></tr><tr><td><code>currentSlide</code></td><td>index number of the current slide.</td></tr><tr><td><code>slidesCount</code></td><td>the count of all slides</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;Slide v-for=&quot;slide in slides&quot; :key=&quot;slide&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;div class=&quot;carousel__item&quot;&gt;{{ slide }}&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/Slide&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #addons=&quot;{ slidesCount }&quot;&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;Navigation v-if=&quot;slidesCount &gt; 1&quot; /&gt;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h3><p>Avaialbe keys:</p><table tabindex="0"><thead><tr><th>Key</th><th>Defaults</th></tr></thead><tbody><tr><td><code>ariaNextSlide</code></td><td>&quot;Navigate to next slide&quot;</td></tr><tr><td><code>ariaPreviousSlide</code></td><td>&quot;Navigate to previous slide&quot;</td></tr><tr><td><code>ariaNavigateToSlide</code></td><td>&quot;Navigate to slide {slideNumber}&quot;</td></tr><tr><td><code>ariaGallery</code></td><td>&quot;Gallery&quot;</td></tr><tr><td><code>itemXofY</code></td><td>&quot;Item {currentSlide} of {slidesCount}&quot;</td></tr><tr><td><code>iconArrowUp</code></td><td>&quot;Arrow pointing upwards&quot;</td></tr><tr><td><code>iconArrowDown</code></td><td>&quot;Arrow pointing downwards&quot;</td></tr><tr><td><code>iconArrowRight</code></td><td>&quot;Arrow pointing to the right&quot;</td></tr><tr><td><code>iconArrowLeft</code></td><td>&quot;Arrow pointing to the left&quot;</td></tr></tbody></table>`,14);function M(o,r,a,h,u,p){const l=E("Badge");return i(),d("div",null,[f,v,t("table",q,[x,t("tbody",null,[A,S,t("tr",null,[C,D,t("td",null,[w,s(),e(l,{text:"Deprecated 0.1.20",type:"danger"})])]),P,N,T,$,t("tr",null,[B,I,t("td",null,[V,s(),e(l,{text:"Deprecated 0.3.0",type:"danger"})])]),U,t("tr",null,[j,G,t("td",null,[s("index number of the initial slide. "),e(l,{text:"0.1.20"})])]),t("tr",null,[O,R,t("td",null,[s("toggle mouse dragging "),e(l,{text:"0.1.23"})])]),t("tr",null,[Y,z,t("td",null,[s("toggle pointer touch dragging "),e(l,{text:"0.1.23"})])]),t("tr",null,[H,J,t("td",null,[s("toggle if auto play should pause on mouse hover "),e(l,{text:"0.1.25"})])]),t("tr",null,[K,L,t("td",null,[s("controls the carousel direction. Available values 'ltr', 'rtl' "),e(l,{text:"0.1.38"})])]),t("tr",null,[W,X,t("td",null,[s("Used to translate and/or change aria labels and additional texts used in the carousel. "),e(l,{text:"0.3.1"})])])])]),F])}const tt=n(y,[["render",M]]);export{Z as __pageData,tt as default};