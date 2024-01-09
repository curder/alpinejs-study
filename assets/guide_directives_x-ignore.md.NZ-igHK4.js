import{_ as i,c as s,o as a,U as t}from"./chunks/framework.ADMblmLL.js";const c=JSON.parse('{"title":"x-ignore","description":"","frontmatter":{},"headers":[],"relativePath":"guide/directives/x-ignore.md","filePath":"guide/directives/x-ignore.md","lastUpdated":1672318886000}'),e={name:"guide/directives/x-ignore.md"},n=t(`<h1 id="x-ignore" tabindex="-1">x-ignore <a class="header-anchor" href="#x-ignore" aria-label="Permalink to &quot;x-ignore&quot;">​</a></h1><p>默认情况下，Alpine 将获取并初始化包含 <a href="./x-init.html"><code>x-init</code></a> 或 <a href="./x-data.html"><code>x-data</code></a> 元素的整个 DOM 树。</p><p>如果出于某种原因，不希望 Alpine 接触 HTML 的特定部分，可以使用 <code>x-ignore</code> 指令。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{ label: &#39;From Alpine&#39; }&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-ignore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Normal Text&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>上面的代码运行完之后会在 HTML 渲染完毕后显示 <code>Normal Text</code>。</p>`,5),l=[n];function h(p,k,d,r,E,o){return a(),s("div",null,l)}const _=i(e,[["render",h]]);export{c as __pageData,_ as default};
