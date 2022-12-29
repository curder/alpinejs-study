import{_ as s,c as a,o as e,a as o}from"./app.397dfb4d.js";const f=JSON.parse('{"title":"x-effect","description":"","frontmatter":{},"headers":[],"relativePath":"guide/directives/x-effect.md","lastUpdated":1672302138000}'),l={name:"guide/directives/x-effect.md"},t=o(`<h1 id="x-effect" tabindex="-1">x-effect <a class="header-anchor" href="#x-effect" aria-hidden="true">#</a></h1><p><code>x-effect</code> 用于在表达式的依赖项之一发生变化时重新计算表达式。</p><p>可以把它想象成一个观察者，在使用时不必指定要观察的属性，它会观察其中使用的所有属性。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">x-data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ label: &#39;Hello&#39; }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">x-effect</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console.log(label)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label += &#39; World!&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Change Message</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>加载此组件时，将运行 <code>x-effect</code> 表达式并将 &quot;Hello&quot; 记录到控制台中。</p><p>因为 Alpine 知道 <code>x-effect</code> 中包含的任何属性引用，所以当单击按钮时 <code>label</code> 更改，效果将重新触发并将 &quot;Hello World!&quot; 记录到控制台。</p>`,6),n=[t];function p(c,r,D,F,d,i){return e(),a("div",null,n)}const _=s(l,[["render",p]]);export{f as __pageData,_ as default};
