import{_ as s,c as a,o as l,a as n}from"./app.9d4276a3.js";const _=JSON.parse('{"title":"$el","description":"","frontmatter":{},"headers":[],"relativePath":"guide/magics/el.md","lastUpdated":1672302692000}'),e={name:"guide/magics/el.md"},o=n(`<h1 id="el" tabindex="-1">$el <a class="header-anchor" href="#el" aria-hidden="true">#</a></h1><p>魔法属性 <code>$el</code> 可用于检索当前的 DOM 节点。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">x-data</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">x-init</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console.log(&#39;Init &#39;, $el)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$el.innerHTML = &#39;Hello World!&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Replace me with &quot;Hello World!&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>当加载组件后执行 <a href="./../directives/x-init.html"><code>x-init</code></a> 指令会打印出 <code>$el</code> 魔术属性。</li><li>当点击按钮则将当前 DOM 节点的 innerHTML 替换为指定字符 <code>Hello World!</code>。</li></ul>`,4),t=[o];function p(c,r,i,D,d,F){return l(),a("div",null,t)}const u=s(e,[["render",p]]);export{_ as __pageData,u as default};