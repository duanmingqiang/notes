import{_ as n,c as s,o as a,b as t}from"./app.0b243bd4.js";const _='{"title":"reduce\u6709\u4EC0\u4E48\u7528\uFF1F","description":"","frontmatter":{},"headers":[{"level":3,"title":"reduce\u6709\u4EC0\u4E48\u7528\uFF1F","slug":"reduce\u6709\u4EC0\u4E48\u7528\uFF1F"}],"relativePath":"random/reduce.md","lastUpdated":1677071539000}',p={},o=t(`<h3 id="reduce\u6709\u4EC0\u4E48\u7528\uFF1F" tabindex="-1">reduce\u6709\u4EC0\u4E48\u7528\uFF1F <a class="header-anchor" href="#reduce\u6709\u4EC0\u4E48\u7528\uFF1F" aria-hidden="true">#</a></h3><p>reduce\u662F\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u4E86\u7D2F\u52A0\u5668\u529F\u80FD\uFF0C\u53C2\u6570\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u4F1A\u5BF9\u6570\u636E\u7684\u6BCF\u9879\u4E00\u6B21\u4ECE\u5DE6\u5230\u53F3\u6267\u884C\u4F20\u5165\u7684\u56DE\u8C03\u51FD\u6570</p><h4 id="\u4E0B\u9762\u770B\u4E00\u4E0B\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u4E0B\u9762\u770B\u4E00\u4E0B\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u4E0B\u9762\u770B\u4E00\u4E0B\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">/**
 * prev \u521D\u59CB\u503C\uFF08\u6CA1\u6709\u8BBE\u7F6E\u521D\u59CB\u503C\u53C2\u6570\u7684\u8BDD\u5C31\u662F\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u503C\uFF09\u6216\u8005\u4E0A\u6B21\u7D2F\u52A0\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u7684\u503C
 * curr \u5F53\u524D\u7D2F\u52A0\u5904\u7406\u7684\u6570\u7EC4\u9879
 * index \u5F53\u524D\u7D2F\u52A0\u5904\u7406\u9879\u7684\u7D22\u5F15 \u8BBE\u7F6E\u521D\u59CB\u503C\u7684\u5219\u4ECE0\u5F00\u59CB\uFF0C\u6CA1\u6709\u7684\u4ECE1\u5F00\u59CB
 * arr \u8C03\u7528\u8BE5\u56DE\u8C03\u51FD\u6570\u7684\u6570\u7EC4
*/</span>
<span class="token keyword">const</span> total1 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total1<span class="token punctuation">)</span> <span class="token comment">// 6</span>
<span class="token comment">// reduce\u8FD8\u53EF\u4EE5\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u8BBE\u7F6E\u4E3A\u56DE\u8C03\u51FD\u6570\u7B2C\u4E00\u6B21\u7D2F\u52A0\u7684\u521D\u59CB\u503Cprev</span>
<span class="token keyword">const</span> total2 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total2<span class="token punctuation">)</span> <span class="token comment">// 11</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6709\u51E0\u4E2A\u7279\u6B8A\u60C5\u51B5\u9700\u8981\u6CE8\u610F\u4E0B</p><ol><li>\u7A7A\u6570\u7EC4\u8C03\u7528reduce\u65B9\u6CD5\u4F1A\u62A5\u9519</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
test<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught TypeError: Reduce of empty array with no initial value</span>
<span class="token comment">// at Array.reduce (&lt;anonymous&gt;)</span>
<span class="token comment">// at &lt;anonymous&gt;:1:3</span>
</code></pre></div><ol start="2"><li>\u6570\u7EC4\u6267\u884Creduce\u9700\u8981\u81F3\u5C11\u4E00\u4E2A\u521D\u59CB\u503C\uFF0C\u56E0\u6B64\u50CF\u8FD9\u79CD\uFF0C\u7A7A\u6570\u7EC4\u4E14\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u521D\u59CB\u503C\u6216\u8005\u6570\u7EC4\u53EA\u6709\u4E00\u9879\u4E14\u6CA1\u6709\u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u90FD\u662F\u53EF\u4EE5\u6B63\u5E38\u6267\u884Creduce\u65B9\u6CD5\uFF0C\u4F46\u662F\u8FD9\u79CD\u60C5\u51B5\u4E0D\u4F1A\u6267\u884Creduce\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4E14\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u521D\u59CB\u503C</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> test1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> total1 <span class="token operator">=</span> test1<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total1<span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token keyword">const</span> test2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> total2 <span class="token operator">=</span> test2<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> curr
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total2<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre></div></div><h4 id="\u5E38\u89C1\u7528\u6CD5" tabindex="-1">\u5E38\u89C1\u7528\u6CD5 <a class="header-anchor" href="#\u5E38\u89C1\u7528\u6CD5" aria-hidden="true">#</a></h4><p>\u6C42\u548C\uFF0C\u6570\u7EC4\u53BB\u91CD</p>`,7),e=[o];function c(u,r,l,k,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{_ as __pageData,h as default};