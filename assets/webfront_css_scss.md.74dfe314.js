import{_ as n,c as s,o as a,b as p}from"./app.edcb0ac8.js";const b='{"title":"scss\u5E38\u89C1\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":3,"title":"scss\u5E38\u89C1\u4F7F\u7528","slug":"scss\u5E38\u89C1\u4F7F\u7528"}],"relativePath":"webfront/css/scss.md"}',t={},o=p(`<h3 id="scss\u5E38\u89C1\u4F7F\u7528" tabindex="-1">scss\u5E38\u89C1\u4F7F\u7528</h3><h4 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF</h4><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5D4C\u5957" tabindex="-1">\u5D4C\u5957</h4><div class="language-scss"><pre><code><span class="token selector">nav </span><span class="token punctuation">{</span>
  <span class="token selector">ul </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li </span><span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165</h4><div class="language-scss"><pre><code><span class="token comment">// \u5BFC\u5165\u90E8\u5206\u6587\u4EF6</span>
<span class="token comment">// _reset.scss</span>
<span class="token selector">html, body, ul, ol </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>  0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// base.scss</span>
<span class="token keyword">@import</span> <span class="token string">&#39;reset&#39;</span><span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6DF7\u5408" tabindex="-1">\u6DF7\u5408</h4><div class="language-scss"><pre><code><span class="token keyword">@mixin</span> <span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token variable">$radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
      <span class="token property">-ms-border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
     <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">border-radius</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F</h4><div class="language-scss"><pre><code><span class="token comment">// \u8FD9\u6BB5\u4EE3\u7801\u4E0D\u4F1A\u88AB\u8F93\u51FA\u5230\u6700\u7EC8\u751F\u6210\u7684CSS\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u88AB\u4EFB\u4F55\u4EE3\u7801\u6240\u7EE7\u627F\u3002</span>
<span class="token selector"><span class="token placeholder">%other-styles</span> </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u9762\u4EE3\u7801\u4F1A\u6B63\u5E38\u8F93\u51FA\u5230\u751F\u6210\u7684CSS\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u88AB\u5176\u63A5\u4E0B\u6765\u7684\u4EE3\u7801\u6240\u7EE7\u627F\u3002</span>
<span class="token selector"><span class="token placeholder">%message-common</span> </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%message-common</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6700\u7EC8\u751F\u6210\u7684css\u6837\u5F0F\u662F\u4E0B\u9762\u8FD9\u6837\u7684" tabindex="-1">\u6700\u7EC8\u751F\u6210\u7684CSS\u6837\u5F0F\u662F\u4E0B\u9762\u8FD9\u6837\u7684</h4><div class="language-scss"><pre><code><span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.success </span><span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u64CD\u4F5C\u7B26" tabindex="-1">\u64CD\u4F5C\u7B26</h4><div class="language-scss"><pre><code><span class="token selector">.container </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">article[role=&quot;main&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px <span class="token operator">/</span> 960px <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside[role=&quot;complementary&quot;] </span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px <span class="token operator">/</span> 960px <span class="token operator">*</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6761\u4EF6\u8BED\u53E5" tabindex="-1">\u6761\u4EF6\u8BED\u53E5</h4><div class="language-scss"><pre><code><span class="token selector">Sass\u652F\u6301\u6761\u4EF6\u8BED\u53E5\uFF0C\u53EF\u4EE5\u4F7F\u7528if</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token selector">else</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token selector">,for</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\u5FAA\u73AF\u7B49\u7B49\u3002
</code></pre></div>`,17),c=[o];function e(l,u,i,r,k,d){return a(),s("div",null,c)}var m=n(t,[["render",e]]);export{b as __pageData,m as default};
