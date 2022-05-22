import{_ as n,c as a,o as e,b as s}from"./app.b0c91c0f.js";const g='{"title":"yarn\u662F\u4EC0\u4E48\uFF1F","description":"","frontmatter":{},"headers":[{"level":3,"title":"yarn\u662F\u4EC0\u4E48\uFF1F","slug":"yarn\u662F\u4EC0\u4E48\uFF1F"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"yarn\u5E38\u7528\u547D\u4EE4","slug":"yarn\u5E38\u7528\u547D\u4EE4"}],"relativePath":"tool/yarn.md"}',p={},t=s(`<h3 id="yarn\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">yarn\u662F\u4EC0\u4E48\uFF1F</h3><p>\u662Fjavascript\u5305\u7BA1\u7406\u5668\uFF0C\u7C7B\u4F3Cnpm</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5</h3><ol><li>\u4F7F\u7528npm\u5B89\u88C5</li></ol><div class="language-js"><pre><code>npm install yarn <span class="token operator">-</span>g
</code></pre></div><ol start="2"><li>\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u5305\u8FDB\u884C\u5B89\u88C5</li></ol><p>\u5B89\u88C5\u5B8C\u6210\u540E\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u51FA\u73B0\u7248\u672C\u53F7\u5219\u8868\u793A\u5B89\u88C5\u6210\u529F</p><div class="language-js"><pre><code>yarn <span class="token operator">--</span>version <span class="token comment">// 1.22.5</span>
</code></pre></div><h3 id="yarn\u5E38\u7528\u547D\u4EE4" tabindex="-1">yarn\u5E38\u7528\u547D\u4EE4</h3><div class="language-PowerShell"><pre><code><span class="token comment"># \u521D\u59CB\u5316</span>
yarn init
<span class="token comment"># \u6DFB\u52A0\u5168\u90E8\u4F9D\u8D56</span>
yarn install

<span class="token comment"># \u6DFB\u52A0\u4F9D\u8D56\u5305</span>
yarn add <span class="token namespace">[packagename]</span>

<span class="token comment"># \u6DFB\u52A0\u5F00\u53D1\u4F9D\u8D56</span>
yarn add <span class="token namespace">[packagename]</span> <span class="token operator">--</span>dev

<span class="token comment"># \u6DFB\u52A0\u5168\u5C40\u4F9D\u8D56</span>
yarn global add <span class="token namespace">[packagename]</span>

<span class="token comment"># \u66F4\u65B0\u5305</span>
yarn upgrade

<span class="token comment"># \u66F4\u65B0\u5230\u6700\u65B0\u4F9D\u8D56\u5305</span>
yarn upgrade \u2013latest <span class="token namespace">[packagename]</span>

<span class="token comment"># \u66F4\u65B0\u6307\u5B9A\u7248\u672C\u4F9D\u8D56\u5305</span>
yarn upgrade <span class="token namespace">[packagename]</span>@version

<span class="token comment"># \u5220\u9664\u5305</span>
yarn remove <span class="token namespace">[packagename]</span>

<span class="token comment"># \u5220\u9664\u5168\u5C40\u4F9D\u8D56\u5305</span>
yarn global remove <span class="token namespace">[packagename]</span>

<span class="token comment"># \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u7684\u4F9D\u8D56</span>
yarn global list
</code></pre></div>`,10),o=[t];function c(l,r,m,d,i,k){return e(),a("div",null,o)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
