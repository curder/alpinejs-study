import{_ as s,c as i,o as a,U as t}from"./chunks/framework.ADMblmLL.js";const c=JSON.parse('{"title":"Intersect","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugins/intersect.md","filePath":"guide/plugins/intersect.md","lastUpdated":1721101074000}'),e={name:"guide/plugins/intersect.md"},h=t(`<h1 id="intersect" tabindex="-1">Intersect <a class="header-anchor" href="#intersect" aria-label="Permalink to &quot;Intersect&quot;">​</a></h1><p>Alpine.js 的 Intersect 插件是对 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer">Intersection Observer</a> 的封装，它允许在元素进入浏览器视图时做出反应。</p><p>对于延迟加载图像或内容内容、触发动画、无限滚动、记录内容等很有用。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>跟 Alpine.js 的安装一样， Intersect 插件同样支持从 <code>&lt;script&gt;</code> 脚本标签引用它或者将其作为模块导入。</p><h3 id="通过-cdn-脚本" tabindex="-1">通过 CDN 脚本 <a class="header-anchor" href="#通过-cdn-脚本" aria-label="Permalink to &quot;通过 CDN 脚本&quot;">​</a></h3><p>在 HTML 页面的头部包含以下 <code>&lt;script&gt;</code> 标签</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Alpine.js&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--...--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Alpine Intersect Plugins --&gt;</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/@alpinejs/intersect@3.x.x/dist/cdn.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--...--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。</p><p>例如，锁定版本为 3.14.1 (最新版本):</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Alpine Plugins --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/@alpinejs/intersect@3.14.1/dist/cdn.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="作为-npm-模块" tabindex="-1">作为 NPM 模块 <a class="header-anchor" href="#作为-npm-模块" aria-label="Permalink to &quot;作为 NPM 模块&quot;">​</a></h3><p>可以通过 <code>npm</code> / <code>yarn</code> 安装 Intersect 并将其导入到一个包中。 运行以下命令来安装它：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-f9Gss" id="tab-eYGq4CG" checked="checked"><label for="tab-eYGq4CG">yarn</label><input type="radio" name="group-f9Gss" id="tab-Xx3qfWu"><label for="tab-Xx3qfWu">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @alpinejs/intersect</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @alpinejs/intersect</span></span></code></pre></div></div></div><p>现在将 Intersect 导入到包中并像这样初始化它：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Alpine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alpinejs&#39;</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> intersect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@alpinejs/intersect&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Alpine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(intersect) </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Alpine.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="x-intersect" tabindex="-1"><code>x-intersect</code> <a class="header-anchor" href="#x-intersect" aria-label="Permalink to &quot;\`x-intersect\`&quot;">​</a></h2><p>可以添加 <code>x-intersect</code> 到 Alpine.js 任何元素的组件中，当该组件进入浏览器视窗（滚动到视图中）时，将执行提供的表达式。</p><p>在下面的代码片段中，<code>shown</code> 将一直保持为 <code>false</code> 直到元素滚动到视图中为止。届时表达式将执行并 <code>shown</code> 变为 <code>true</code>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     x-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;root&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 60px;overflow-y: scroll;border: solid 1px #eaeaea;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript:void(0);&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @click.prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$refs.root.scrollTo({top: $refs.root.scrollHeight, behavior: &#39;smooth&#39;})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;向下滚动👇&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;height: 50vh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ shown: false }&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       x-intersect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      I&#39;m in the viewport!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;! shown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;nbsp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>点击 <strong>向下滚动👇</strong> 的按钮后下方的内容才陆续渲染到视图窗口。</p><h3 id="进入-enter" tabindex="-1">进入 <code>:enter</code> <a class="header-anchor" href="#进入-enter" aria-label="Permalink to &quot;进入 \`:enter\`&quot;">​</a></h3><p><code>:enter</code> 后缀是 <code>x-intersect</code> 的别名，默认不添加后缀即为进入状态，相同：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect:enter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在使用 <a href="#离开-leave">:leave</a> 后缀时，可以选择使用它来清晰起见。</p><h3 id="离开-leave" tabindex="-1">离开 <code>:leave</code> <a class="header-anchor" href="#离开-leave" aria-label="Permalink to &quot;离开 \`:leave\`&quot;">​</a></h3><p>当元素离开视口时，<code>:leave</code> 附加运行表达式：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect:leave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="修饰符" tabindex="-1">修饰符 <a class="header-anchor" href="#修饰符" aria-label="Permalink to &quot;修饰符&quot;">​</a></h2><p><code>x-intersect</code> 同时支持一些修饰符，比如：<a href="#once">.once</a>、<a href="#half">.half</a>、<a href="#full">.full</a>、<a href="#threshold">.threshold</a>、<a href="#margin">.margin</a>，使用它们能更高级的效果。</p><h3 id="once" tabindex="-1"><code>.once</code> <a class="header-anchor" href="#once" aria-label="Permalink to &quot;\`.once\`&quot;">​</a></h3><p>当仅在元素第一次进入浏览器视图时对表达时计算有效。例如当触发 &quot;enter&quot; 动画时。</p><p>在这些情况下，可以对 <code>x-intersect</code> 添加 <code>.once</code> 修饰符来实现这个目的。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect:level.once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="half" tabindex="-1"><code>.half</code> <a class="header-anchor" href="#half" aria-label="Permalink to &quot;\`.half\`&quot;">​</a></h3><p>当使用 <code>x-intersect</code> 的元素在视图的 1/2 处就执行表达式，这将对于至少显示一部分很重要的元素很有用。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect.half</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="full" tabindex="-1"><code>.full</code> <a class="header-anchor" href="#full" aria-label="Permalink to &quot;\`.full\`&quot;">​</a></h3><p>当使用 <code>x-intersect</code> 的元素全部出现在视图时才执行表达式，对于显示整个元素很重要的元素很有用。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect.full</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="threshold" tabindex="-1"><code>.threshold</code> <a class="header-anchor" href="#threshold" aria-label="Permalink to &quot;\`.threshold\`&quot;">​</a></h3><p>允许单独控制 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#intersection_observer_%E7%9A%84%E6%A6%82%E5%BF%B5%E5%92%8C%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">IntersectionObserver</a> 的 <code>threshold</code> 底层 属性：</p><p>取值在 0 - 100 范围内：</p><ul><li>值 0 表示：如果元素的任何部分进入浏览器视图（默认行为），则触发回调。</li><li>值 100 表示：除非整个元素已进入浏览器视图，否则不要触发回调。</li></ul><p>例如，如果要在一半元素进入页面后触发交集，可以使用 <code>.threshold.50</code>：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect.threshold.50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shown = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; // when 50% of the element is in the viewport</span></span></code></pre></div><p>如果只想在 5% 的元素进入视口时触发，你可以使用：<code>.threshold.05</code>，等等。</p><h3 id="margin" tabindex="-1"><code>.margin</code> <a class="header-anchor" href="#margin" aria-label="Permalink to &quot;\`.margin\`&quot;">​</a></h3><p>允许控制根元素的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#intersection_observer_%E7%9A%84%E6%A6%82%E5%BF%B5%E5%92%8C%E7%94%A8%E6%B3%95" target="_blank" rel="noreferrer">IntersectionObserver</a> 的外边距 rootMargin 属性 。</p><p>可以用于调整了浏览器视图边界的大小。正值将边界扩展到视口之外，而负值将其向内缩小。</p><p>这些值的作用类似于 CSS 边距：所有边一个值，顶部/底部、左/右两个值，或顶部、右侧、底部、左侧四个值。</p><p>可以使用 <code>px</code> 传递具体像素质或 <code>%</code> 百分比值，或使用数字来获取像素值。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect.margin.200px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loaded = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; // Load when the element is within 200px of the viewport</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect:leave.margin.10%.25px.25.25px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loaded = false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; // Unload when the element gets within 10% of the top of the viewport, or within 25px of the other three edges</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-intersect.margin.-100px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visible = true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; // Mark as visible when element is more than 100 pixels into the viewport.</span></span></code></pre></div>`,55),n=[h];function l(p,k,d,r,E,o){return a(),i("div",null,n)}const y=s(e,[["render",l]]);export{c as __pageData,y as default};