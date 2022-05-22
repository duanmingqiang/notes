import{_ as n,c as s,o as a,b as p}from"./app.edcb0ac8.js";const b='{"title":"\u4EC0\u4E48\u662FCSS\u9884\u5904\u7406\u5668\uFF1F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4EC0\u4E48\u662FCSS\u9884\u5904\u7406\u5668\uFF1F","slug":"\u4EC0\u4E48\u662Fcss\u9884\u5904\u7406\u5668\uFF1F"}],"relativePath":"webfront/css/less.md"}',t={},o=p(`<h3 id="\u4EC0\u4E48\u662Fcss\u9884\u5904\u7406\u5668\uFF1F" tabindex="-1">\u4EC0\u4E48\u662FCSS\u9884\u5904\u7406\u5668\uFF1F</h3><p>CSS\u9884\u5904\u7406\u5668\u662F\u7528\u4E00\u95E8\u4E13\u95E8\u7684\u8BED\u8A00\uFF0C\u8FDB\u884C\u7F51\u9875\u7684\u6837\u5F0F\u8BBE\u8BA1\uFF0C\u4E4B\u540E\u518D\u88AB\u7F16\u8BD1\u4E3A\u6B63\u5E38\u7684CSS\u6587\u4EF6\uFF0C\u4EE5\u4F9B\u9879\u76EE\u4F7F\u7528</p><p>Less\u662F\u4E00\u4E2ACSS\u9884\u5904\u7406\u8BED\u8A00\uFF0C\u6269\u5C55\u4E86CSS\u8BED\u8A00\uFF0C\u589E\u52A0\u4E86\u53D8\u91CF\uFF0Cmixin\uFF0C\u51FD\u6570\u7B49\u7279\u6027\uFF0C\u4F7FCSS\u66F4\u5BB9\u6613\u7EF4\u62A4\u548C\u6269\u5C55</p><h4 id="\u53D8\u91CF\uFF08variables\uFF09" tabindex="-1">\u53D8\u91CF\uFF08Variables\uFF09</h4><div class="language-less"><pre><code><span class="token variable">@width<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> <span class="token variable">@width</span> <span class="token operator">+</span> 10px<span class="token punctuation">;</span>

<span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u6DF7\u5408\uFF08mixins\uFF09" tabindex="-1">\u6DF7\u5408\uFF08Mixins\uFF09</h4><div class="language-less"><pre><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF0C\u5E0C\u671B\u6DF7\u5165\u7684css\u6837\u5F0F\u4E0D\u51FA\u73B0\u5728\u8F93\u51FA\u7684css\u4E2D\uFF0C\u9700\u8981mixin\u5B9A\u4E49\u540E\u9762\u52A0\uFF08\uFF09</p><div class="language-less"><pre><code><span class="token selector">.my-mixin</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.my-other-mixin()</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.my-mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.my-other-mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA\u4E3A</span>
<span class="token selector">.my-mixin</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5D4C\u5957\uFF08nesting\uFF09" tabindex="-1">\u5D4C\u5957\uFF08Nesting\uFF09</h4><div class="language-less"><pre><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1" tabindex="-1">@\u89C4\u5219\u5D4C\u5957\u548C\u5192\u6CE1</h4><p>@ \u89C4\u5219\uFF08\u4F8B\u5982 @media \u6216 @supports\uFF09\u53EF\u4EE5\u4E0E\u9009\u62E9\u5668\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u8FDB\u884C\u5D4C\u5957\u3002@ \u89C4\u5219\u4F1A\u88AB\u653E\u5728\u524D\u9762\uFF0C\u540C\u4E00\u89C4\u5219\u96C6\u4E2D\u7684\u5176\u5B83\u5143\u7D20\u7684\u76F8\u5BF9\u987A\u5E8F\u4FDD\u6301\u4E0D\u53D8\u3002\u8FD9\u53EB\u505A\u5192\u6CE1\uFF08bubbling\uFF09\u3002</p><div class="language-less"><pre><code><span class="token selector">.component</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token atrule">@media  <span class="token punctuation">(</span>min-resolution<span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7F16\u8BD1\u4E3A\uFF1A</span>
<span class="token selector">.component</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> and <span class="token punctuation">(</span>min-resolution<span class="token punctuation">:</span> 192dpi<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/img/retina2x.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule">@media <span class="token punctuation">(</span>min-width<span class="token punctuation">:</span> 1280px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.component</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u8FD0\u7B97\uFF08operations\uFF09" tabindex="-1">\u8FD0\u7B97\uFF08Operations\uFF09</h4><div class="language-less"><pre><code> <span class="token comment">/* numbers are converted into the same units */</span>
<span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// result is 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// result is -1.5cm</span>

<span class="token comment">/* conversion is impossible */</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 2 <span class="token operator">+</span> 5px <span class="token operator">-</span> 3cm<span class="token punctuation">;</span> <span class="token comment">// result is 4px</span>

 <span class="token comment">/* example with variables */</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// result is 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// result is 15%</span>
</code></pre></div><h4 id="calc-\u7279\u4F8B" tabindex="-1">calc() \u7279\u4F8B</h4><p>\u4E3A\u4E86\u4E0E CSS \u4FDD\u6301\u517C\u5BB9\uFF0Ccalc() \u5E76\u4E0D\u5BF9\u6570\u5B66\u8868\u8FBE\u5F0F\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4F46\u662F\u5728\u5D4C\u5957\u51FD\u6570\u4E2D\u4F1A\u8BA1\u7B97\u53D8\u91CF\u548C\u6570\u5B66\u516C\u5F0F\u7684\u503C\u3002</p><div class="language-less"><pre><code><span class="token variable">@var<span class="token punctuation">:</span></span> 50vh<span class="token operator">/</span>2<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">@var</span> <span class="token operator">-</span> 20px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u7ED3\u679C\u662F calc(50% + (25vh - 20px))</span>
</code></pre></div><h4 id="\u51FD\u6570\uFF08functions\uFF09" tabindex="-1">\u51FD\u6570\uFF08Functions\uFF09</h4><div class="language-less"><pre><code><span class="token comment">/* Less \u5185\u7F6E\u4E86\u591A\u79CD\u51FD\u6570\u7528\u4E8E\u8F6C\u6362\u989C\u8272\u3001\u5904\u7406\u5B57\u7B26\u4E32\u3001\u7B97\u672F\u8FD0\u7B97\u7B49\u3002\u8FD9\u4E9B\u51FD\u6570\u5728\u51FD\u6570\u624B\u518C\u4E2D\u6709\u8BE6\u7EC6\u4ECB\u7ECD\u3002
\u51FD\u6570\u7684\u7528\u6CD5\u975E\u5E38\u7B80\u5355\u3002\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u5C06\u4ECB\u7ECD\u5982\u4F55\u5229\u7528 percentage \u51FD\u6570\u5C06 0.5 \u8F6C\u6362\u4E3A 50%\uFF0C\u5C06\u989C\u8272\u9971\u548C\u5EA6\u589E\u52A0 5%\uFF0C\u4EE5\u53CA\u989C\u8272\u4EAE\u5EA6\u964D\u4F4E 25% \u5E76\u4E14\u8272\u76F8\u503C\u589E\u52A0 8 \u7B49\u7528\u6CD5\uFF1A */</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> #f04615<span class="token punctuation">;</span>
<span class="token variable">@width<span class="token punctuation">:</span></span> 0.5<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">@width</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns \`50%\`</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">,</span> 8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u547D\u540D\u7A7A\u95F4\u548C\u8BBF\u95EE\u7B26" tabindex="-1">\u547D\u540D\u7A7A\u95F4\u548C\u8BBF\u95EE\u7B26</h4><p>\u6709\u65F6\uFF0C\u51FA\u4E8E\u7EC4\u7EC7\u7ED3\u6784\u6216\u4EC5\u4EC5\u662F\u4E3A\u4E86\u63D0\u4F9B\u4E00\u4E9B\u5C01\u88C5\u7684\u76EE\u7684\uFF0C\u4F60\u5E0C\u671B\u5BF9\u6DF7\u5408\uFF08mixins\uFF09\u8FDB\u884C\u5206\u7EC4\u3002\u4F60\u53EF\u4EE5\u7528 Less \u66F4\u76F4\u89C2\u5730\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\u3002\u5047\u8BBE\u4F60\u5E0C\u671B\u5C06\u4E00\u4E9B\u6DF7\u5408\uFF08mixins\uFF09\u548C\u53D8\u91CF\u7F6E\u4E8E #bundle \u4E4B\u4E0B\uFF0C\u4E3A\u4E86\u4EE5\u540E\u65B9\u4FBF\u91CD\u7528\u6216\u5206\u53D1\uFF1A</p><div class="language-less"><pre><code><span class="token selector">#bundle()</span> <span class="token punctuation">{</span>
  <span class="token selector">.button</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.tab</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
  <span class="token selector">.citation</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u73B0\u5728\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u628A .button \u7C7B\u6DF7\u5408\u5230 #header a \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</span>
<span class="token selector">#header a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token mixin-usage function">#bundle.button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u8FD8\u53EF\u4EE5\u4E66\u5199\u4E3A #bundle &gt; .button \u5F62\u5F0F</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F\uFF1A\u5982\u679C\u4E0D\u5E0C\u671B\u5B83\u4EEC\u51FA\u73B0\u5728\u8F93\u51FA\u7684 CSS \u4E2D\uFF0C\u4F8B\u5982 #bundle .tab\uFF0C\u8BF7\u5C06 () \u9644\u52A0\u5230\u547D\u540D\u7A7A\u95F4\uFF08\u4F8B\u5982 #bundle()\uFF09\u540E\u9762\u3002</span>
</code></pre></div><h4 id="\u6620\u5C04\uFF08maps\uFF09" tabindex="-1">\u6620\u5C04\uFF08Maps\uFF09</h4><p>\u4ECE Less 3.5 \u7248\u672C\u5F00\u59CB\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5C06\u6DF7\u5408\uFF08mixins\uFF09\u548C\u89C4\u5219\u96C6\uFF08rulesets\uFF09\u4F5C\u4E3A\u4E00\u7EC4\u503C\u7684\u6620\u5C04\uFF08map\uFF09\u4F7F\u7528\u3002</p><div class="language-less"><pre><code><span class="token selector">#colors()</span> <span class="token punctuation">{</span>
  <span class="token property">primary</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">secondary</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #colors[primary]<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #colors[secondary]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F93\u51FA\u7B26\u5408\u9884\u671F\uFF1A</span>
<span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u4F5C\u7528\u57DF\uFF08scope\uFF09" tabindex="-1">\u4F5C\u7528\u57DF\uFF08Scope\uFF09</h4><p>Less \u4E2D\u7684\u4F5C\u7528\u57DF\u4E0E CSS \u4E2D\u7684\u4F5C\u7528\u57DF\u975E\u5E38\u7C7B\u4F3C\u3002\u9996\u5148\u5728\u672C\u5730\u67E5\u627E\u53D8\u91CF\u548C\u6DF7\u5408\uFF08mixins\uFF09\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u4ECE\u201C\u7236\u201D\u7EA7\u4F5C\u7528\u57DF\u7EE7\u627F\u3002</p><div class="language-less"><pre><code><span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token selector">#page</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
  <span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0E CSS \u81EA\u5B9A\u4E49\u5C5E\u6027\u4E00\u6837\uFF0C\u6DF7\u5408\uFF08mixin\uFF09\u548C\u53D8\u91CF\u7684\u5B9A\u4E49\u4E0D\u5FC5\u5728\u5F15\u7528\u4E4B\u524D\u4E8B\u5148\u5B9A\u4E49\u3002\u56E0\u6B64\uFF0C\u4E0B\u9762\u7684 Less \u4EE3\u7801\u793A\u4F8B\u548C\u4E0A\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u662F\u76F8\u540C\u7684\uFF1A</span>
<span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span>

<span class="token selector">#page</span> <span class="token punctuation">{</span>
  <span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span> <span class="token comment">// white</span>
  <span class="token punctuation">}</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5BFC\u5165\uFF08importing\uFF09" tabindex="-1">\u5BFC\u5165\uFF08Importing\uFF09</h4><p>\u201C\u5BFC\u5165\u201D\u7684\u5DE5\u4F5C\u65B9\u5F0F\u548C\u4F60\u9884\u671F\u7684\u4E00\u6837\u3002\u4F60\u53EF\u4EE5\u5BFC\u5165\u4E00\u4E2A .less \u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u53D8\u91CF\u5C31\u53EF\u4EE5\u5168\u90E8\u4F7F\u7528\u4E86\u3002\u5982\u679C\u5BFC\u5165\u7684\u6587\u4EF6\u662F .less \u6269\u5C55\u540D\uFF0C\u5219\u53EF\u4EE5\u5C06\u6269\u5C55\u540D\u7701\u7565\u6389\uFF1A</p><div class="language-less"><pre><code><span class="token variable">@import</span> <span class="token string">&quot;library&quot;</span><span class="token punctuation">;</span> <span class="token comment">// library.less</span>
<span class="token variable">@import</span> <span class="token string">&quot;typo.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,33),c=[o];function e(l,u,i,k,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{b as __pageData,h as default};
