import{_ as s,c as a,o as n,a as l}from"./app.0fdeaa7a.js";const h=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用脚本标签","slug":"使用脚本标签","link":"#使用脚本标签","children":[]},{"level":2,"title":"作为模块","slug":"作为模块","link":"#作为模块","children":[]}],"relativePath":"guide/install.md","lastUpdated":1671874465000}'),p={name:"guide/install.md"},e=l(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h1><p><a href="https://alpinejs.dev/" target="_blank" rel="noreferrer">Alpine.js</a> 当前支持使用两种方式添加到项目中：</p><ul><li>从 <code>&lt;script&gt;</code> 脚本标签引用它</li><li>将其作为模块导入</li></ul><p>两种方式都是完全有效的，具体使用哪种方式完全取决于项目的需求。</p><h2 id="使用脚本标签" tabindex="-1">使用脚本标签 <a class="header-anchor" href="#使用脚本标签" aria-hidden="true">#</a></h2><p>在 HTML 页面的头部包含以下 <code>&lt;script&gt;</code> 标记</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight has-focused-lines"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Alpine.js</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!--...--&gt;</span></span>
<span class="line has-focus"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt; </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--...--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>就是这样，Alpine.js 会自行初始化。</p><p>生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。</p><p>例如，锁定版本为 3.10.5 (最新版本):</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="作为模块" tabindex="-1">作为模块 <a class="header-anchor" href="#作为模块" aria-hidden="true">#</a></h2><p>可以通过 NPM 安装 Alpine 并将其导入到一个包中。 运行以下命令来安装它：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-fA7pB" id="tab-eDjGmAa" checked="checked"><label for="tab-eDjGmAa">yarn</label><input type="radio" name="group-fA7pB" id="tab-z2mtIMk"><label for="tab-z2mtIMk">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpinejs</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpinejs</span></span>
<span class="line"></span></code></pre></div></div></div><p>现在将 Alpine 导入到包中并像这样初始化它：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Alpine </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alpinejs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Alpine </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Alpine </span><span style="color:#676E95;font-style:italic;">// 可选，对于灵活性来说是很好的。例如当从开发者工具中修改 Alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Alpine</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div>`,16),t=[e];function o(c,r,i,D,y,F){return n(),a("div",null,t)}const C=s(p,[["render",o]]);export{h as __pageData,C as default};