import{_ as n,c as s,o as a,b as t}from"./app.40d2e1a4.js";const h='{"title":"axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684HTTP\u5E93","description":"","frontmatter":{},"headers":[{"level":3,"title":"axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684HTTP\u5E93","slug":"axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684http\u5E93"}],"relativePath":"tool/axios.md","lastUpdated":1653188599000}',p={},o=t(`<h3 id="axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684http\u5E93" tabindex="-1">axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684HTTP\u5E93 <a class="header-anchor" href="#axios\u4E00\u4E2A\u57FA\u4E8Epromise\u7684http\u5E93" aria-hidden="true">#</a></h3><h4 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h4><div class="language-sh"><pre><code>yarn add axios
</code></pre></div><p>\u521B\u5EFA\u5B9E\u4F8B</p><div class="language-js"><pre><code><span class="token comment">// axios.create([config])</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Custom-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9E\u4F8B\u65B9\u6CD5</span>
<span class="token comment">// \u4EE5\u4E0B\u662F\u53EF\u7528\u7684\u5B9E\u4F8B\u65B9\u6CD5\u3002\u6307\u5B9A\u7684\u914D\u7F6E\u5C06\u4E0E\u5B9E\u4F8B\u7684\u914D\u7F6E\u5408\u5E76\u3002</span>

axios<span class="token function">#request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
axios<span class="token function">#get</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios#<span class="token keyword">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token function">#head</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token function">#options</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token function">#post</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token function">#put</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
axios<span class="token function">#patch</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="\u8BF7\u6C42\u914D\u7F6E" tabindex="-1">\u8BF7\u6C42\u914D\u7F6E <a class="header-anchor" href="#\u8BF7\u6C42\u914D\u7F6E" aria-hidden="true">#</a></h4><p>\u8FD9\u4E9B\u662F\u521B\u5EFA\u8BF7\u6C42\u65F6\u53EF\u4EE5\u7528\u7684\u914D\u7F6E\u9009\u9879\u3002\u53EA\u6709 url \u662F\u5FC5\u9700\u7684\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A method\uFF0C\u8BF7\u6C42\u5C06\u9ED8\u8BA4\u4F7F\u7528 get \u65B9\u6CD5\u3002</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
   <span class="token comment">// \`url\` \u662F\u7528\u4E8E\u8BF7\u6C42\u7684\u670D\u52A1\u5668 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`method\` \u662F\u521B\u5EFA\u8BF7\u6C42\u65F6\u4F7F\u7528\u7684\u65B9\u6CD5</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`baseURL\` \u5C06\u81EA\u52A8\u52A0\u5728 \`url\` \u524D\u9762\uFF0C\u9664\u975E \`url\` \u662F\u4E00\u4E2A\u7EDD\u5BF9 URL\u3002</span>
  <span class="token comment">// \u5B83\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E00\u4E2A \`baseURL\` \u4FBF\u4E8E\u4E3A axios \u5B9E\u4F8B\u7684\u65B9\u6CD5\u4F20\u9012\u76F8\u5BF9 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformRequest\` \u5141\u8BB8\u5728\u5411\u670D\u52A1\u5668\u53D1\u9001\u524D\uFF0C\u4FEE\u6539\u8BF7\u6C42\u6570\u636E</span>
  <span class="token comment">// \u53EA\u80FD\u7528\u5728 &#39;PUT&#39;, &#39;POST&#39; \u548C &#39;PATCH&#39; \u8FD9\u51E0\u4E2A\u8BF7\u6C42\u65B9\u6CD5</span>
  <span class="token comment">// \u540E\u9762\u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6216 ArrayBuffer\uFF0C\u6216 Stream</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9 data \u8FDB\u884C\u4EFB\u610F\u8F6C\u6362\u5904\u7406</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformResponse\` \u5728\u4F20\u9012\u7ED9 then/catch \u524D\uFF0C\u5141\u8BB8\u4FEE\u6539\u54CD\u5E94\u6570\u636E</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9 data \u8FDB\u884C\u4EFB\u610F\u8F6C\u6362\u5904\u7406</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` \u662F\u5373\u5C06\u88AB\u53D1\u9001\u7684\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`params\` \u662F\u5373\u5C06\u4E0E\u8BF7\u6C42\u4E00\u8D77\u53D1\u9001\u7684 URL \u53C2\u6570</span>
  <span class="token comment">// \u5FC5\u987B\u662F\u4E00\u4E2A\u65E0\u683C\u5F0F\u5BF9\u8C61(plain object)\u6216 URLSearchParams \u5BF9\u8C61</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// \`paramsSerializer\` \u662F\u4E00\u4E2A\u8D1F\u8D23 \`params\` \u5E8F\u5217\u5316\u7684\u51FD\u6570</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`data\` \u662F\u4F5C\u4E3A\u8BF7\u6C42\u4E3B\u4F53\u88AB\u53D1\u9001\u7684\u6570\u636E</span>
  <span class="token comment">// \u53EA\u9002\u7528\u4E8E\u8FD9\u4E9B\u8BF7\u6C42\u65B9\u6CD5 &#39;PUT&#39;, &#39;POST&#39;, \u548C &#39;PATCH&#39;</span>
  <span class="token comment">// \u5728\u6CA1\u6709\u8BBE\u7F6E \`transformRequest\` \u65F6\uFF0C\u5FC5\u987B\u662F\u4EE5\u4E0B\u7C7B\u578B\u4E4B\u4E00\uFF1A</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - \u6D4F\u89C8\u5668\u4E13\u5C5E\uFF1AFormData, File, Blob</span>
  <span class="token comment">// - Node \u4E13\u5C5E\uFF1A Stream</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`timeout\` \u6307\u5B9A\u8BF7\u6C42\u8D85\u65F6\u7684\u6BEB\u79D2\u6570(0 \u8868\u793A\u65E0\u8D85\u65F6\u65F6\u95F4)</span>
  <span class="token comment">// \u5982\u679C\u8BF7\u6C42\u8BDD\u8D39\u4E86\u8D85\u8FC7 \`timeout\` \u7684\u65F6\u95F4\uFF0C\u8BF7\u6C42\u5C06\u88AB\u4E2D\u65AD</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>

   <span class="token comment">// \`withCredentials\` \u8868\u793A\u8DE8\u57DF\u8BF7\u6C42\u65F6\u662F\u5426\u9700\u8981\u4F7F\u7528\u51ED\u8BC1</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`adapter\` \u5141\u8BB8\u81EA\u5B9A\u4E49\u5904\u7406\u8BF7\u6C42\uFF0C\u4EE5\u4F7F\u6D4B\u8BD5\u66F4\u8F7B\u677E</span>
  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A promise \u5E76\u5E94\u7528\u4E00\u4E2A\u6709\u6548\u7684\u54CD\u5E94 (\u67E5\u9605 [response docs](#response-api)).</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

 <span class="token comment">// \`auth\` \u8868\u793A\u5E94\u8BE5\u4F7F\u7528 HTTP \u57FA\u7840\u9A8C\u8BC1\uFF0C\u5E76\u63D0\u4F9B\u51ED\u636E</span>
  <span class="token comment">// \u8FD9\u5C06\u8BBE\u7F6E\u4E00\u4E2A \`Authorization\` \u5934\uFF0C\u8986\u5199\u6389\u73B0\u6709\u7684\u4EFB\u610F\u4F7F\u7528 \`headers\` \u8BBE\u7F6E\u7684\u81EA\u5B9A\u4E49 \`Authorization\`\u5934</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// \`responseType\` \u8868\u793A\u670D\u52A1\u5668\u54CD\u5E94\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F &#39;arraybuffer&#39;, &#39;blob&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`responseEncoding\` indicates encoding to use for decoding responses</span>
  <span class="token comment">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

   <span class="token comment">// \`xsrfCookieName\` \u662F\u7528\u4F5C xsrf token \u7684\u503C\u7684cookie\u7684\u540D\u79F0</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`xsrfHeaderName\` is the name of the http header that carries the xsrf token value</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

   <span class="token comment">// \`onUploadProgress\` \u5141\u8BB8\u4E3A\u4E0A\u4F20\u5904\u7406\u8FDB\u5EA6\u4E8B\u4EF6</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do whatever you want with the native progress event</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`onDownloadProgress\` \u5141\u8BB8\u4E3A\u4E0B\u8F7D\u5904\u7406\u8FDB\u5EA6\u4E8B\u4EF6</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BF9\u539F\u751F\u8FDB\u5EA6\u4E8B\u4EF6\u7684\u5904\u7406</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// \`maxContentLength\` \u5B9A\u4E49\u5141\u8BB8\u7684\u54CD\u5E94\u5185\u5BB9\u7684\u6700\u5927\u5C3A\u5BF8</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`validateStatus\` \u5B9A\u4E49\u5BF9\u4E8E\u7ED9\u5B9A\u7684HTTP \u54CD\u5E94\u72B6\u6001\u7801\u662F resolve \u6216 reject  promise \u3002\u5982\u679C \`validateStatus\` \u8FD4\u56DE \`true\` (\u6216\u8005\u8BBE\u7F6E\u4E3A \`null\` \u6216 \`undefined\`)\uFF0Cpromise \u5C06\u88AB resolve; \u5426\u5219\uFF0Cpromise \u5C06\u88AB rejecte</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// default</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxRedirects\` \u5B9A\u4E49\u5728 node.js \u4E2D follow \u7684\u6700\u5927\u91CD\u5B9A\u5411\u6570\u76EE</span>
  <span class="token comment">// \u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5C06\u4E0D\u4F1A follow \u4EFB\u4F55\u91CD\u5B9A\u5411</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`socketPath\` defines a UNIX Socket to be used in node.js.</span>
  <span class="token comment">// e.g. &#39;/var/run/docker.sock&#39; to send requests to the docker daemon.</span>
  <span class="token comment">// Only either \`socketPath\` or \`proxy\` can be specified.</span>
  <span class="token comment">// If both are specified, \`socketPath\` is used.</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`httpAgent\` \u548C \`httpsAgent\` \u5206\u522B\u5728 node.js \u4E2D\u7528\u4E8E\u5B9A\u4E49\u5728\u6267\u884C http \u548C https \u65F6\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u4EE3\u7406\u3002\u5141\u8BB8\u50CF\u8FD9\u6837\u914D\u7F6E\u9009\u9879\uFF1A</span>
  <span class="token comment">// \`keepAlive\` \u9ED8\u8BA4\u6CA1\u6709\u542F\u7528</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// &#39;proxy&#39; \u5B9A\u4E49\u4EE3\u7406\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D\u79F0\u548C\u7AEF\u53E3</span>
  <span class="token comment">// \`auth\` \u8868\u793A HTTP \u57FA\u7840\u9A8C\u8BC1\u5E94\u5F53\u7528\u4E8E\u8FDE\u63A5\u4EE3\u7406\uFF0C\u5E76\u63D0\u4F9B\u51ED\u636E</span>
  <span class="token comment">// \u8FD9\u5C06\u4F1A\u8BBE\u7F6E\u4E00\u4E2A \`Proxy-Authorization\` \u5934\uFF0C\u8986\u5199\u6389\u5DF2\u6709\u7684\u901A\u8FC7\u4F7F\u7528 \`header\` \u8BBE\u7F6E\u7684\u81EA\u5B9A\u4E49 \`Proxy-Authorization\` \u5934\u3002</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`cancelToken\` \u6307\u5B9A\u7528\u4E8E\u53D6\u6D88\u8BF7\u6C42\u7684 cancel token</span>
  <span class="token comment">// \uFF08\u67E5\u770B\u540E\u9762\u7684 Cancellation \u8FD9\u8282\u4E86\u89E3\u66F4\u591A\uFF09</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u54CD\u5E94\u7ED3\u6784" tabindex="-1">\u54CD\u5E94\u7ED3\u6784 <a class="header-anchor" href="#\u54CD\u5E94\u7ED3\u6784" aria-hidden="true">#</a></h4><p>\u67D0\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\u5305\u542B\u4EE5\u4E0B\u4FE1\u606F</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \`data\` \u7531\u670D\u52A1\u5668\u63D0\u4F9B\u7684\u54CD\u5E94</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`status\` \u6765\u81EA\u670D\u52A1\u5668\u54CD\u5E94\u7684 HTTP \u72B6\u6001\u7801</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// \`statusText\` \u6765\u81EA\u670D\u52A1\u5668\u54CD\u5E94\u7684 HTTP \u72B6\u6001\u4FE1\u606F</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` \u670D\u52A1\u5668\u54CD\u5E94\u7684\u5934</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token comment">// \`config\` \u662F\u4E3A\u8BF7\u6C42\u63D0\u4F9B\u7684\u914D\u7F6E\u4FE1\u606F</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token comment">// &#39;request&#39;</span>
  <span class="token comment">// \`request\` is the request that generated this response</span>
  <span class="token comment">// It is the last ClientRequest instance in node.js (in redirects)</span>
  <span class="token comment">// and an XMLHttpRequest instance the browser</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u4F7F\u7528-then-\u65F6\uFF0C\u4F60\u5C06\u63A5\u6536\u4E0B\u9762\u8FD9\u6837\u7684\u54CD\u5E94" tabindex="-1">\u4F7F\u7528 then \u65F6\uFF0C\u4F60\u5C06\u63A5\u6536\u4E0B\u9762\u8FD9\u6837\u7684\u54CD\u5E94 : <a class="header-anchor" href="#\u4F7F\u7528-then-\u65F6\uFF0C\u4F60\u5C06\u63A5\u6536\u4E0B\u9762\u8FD9\u6837\u7684\u54CD\u5E94" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u914D\u7F6E\u9ED8\u8BA4\u503C" tabindex="-1">\u914D\u7F6E\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u914D\u7F6E\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u81EA\u5B9A\u4E49\u5B9E\u4F8B\u9ED8\u8BA4\u503C" tabindex="-1">\u81EA\u5B9A\u4E49\u5B9E\u4F8B\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5B9E\u4F8B\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token comment">// Set config defaults when creating the instance</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://api.example.com&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Alter defaults after instance has been created</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="\u914D\u7F6E\u7684\u4F18\u5148\u987A\u5E8F" tabindex="-1">\u914D\u7F6E\u7684\u4F18\u5148\u987A\u5E8F <a class="header-anchor" href="#\u914D\u7F6E\u7684\u4F18\u5148\u987A\u5E8F" aria-hidden="true">#</a></h4><p>\u914D\u7F6E\u4F1A\u4EE5\u4E00\u4E2A\u4F18\u5148\u987A\u5E8F\u8FDB\u884C\u5408\u5E76\u3002\u8FD9\u4E2A\u987A\u5E8F\u662F\uFF1A\u5728 lib/defaults.js \u627E\u5230\u7684\u5E93\u7684\u9ED8\u8BA4\u503C\uFF0C\u7136\u540E\u662F\u5B9E\u4F8B\u7684 defaults \u5C5E\u6027\uFF0C\u6700\u540E\u662F\u8BF7\u6C42\u7684 config \u53C2\u6570\u3002\u540E\u8005\u5C06\u4F18\u5148\u4E8E\u524D\u8005\u3002\u8FD9\u91CC\u662F\u4E00\u4E2A\u4F8B\u5B50</p><div class="language-js"><pre><code><span class="token comment">// \u4F7F\u7528\u7531\u5E93\u63D0\u4F9B\u7684\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C\u6765\u521B\u5EFA\u5B9E\u4F8B</span>
<span class="token comment">// \u6B64\u65F6\u8D85\u65F6\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C\u662F \`0\`</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8986\u5199\u5E93\u7684\u8D85\u65F6\u9ED8\u8BA4\u503C</span>
<span class="token comment">// \u73B0\u5728\uFF0C\u5728\u8D85\u65F6\u524D\uFF0C\u6240\u6709\u8BF7\u6C42\u90FD\u4F1A\u7B49\u5F85 2.5 \u79D2</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2500</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A\u5DF2\u77E5\u9700\u8981\u82B1\u8D39\u5F88\u957F\u65F6\u95F4\u7684\u8BF7\u6C42\u8986\u5199\u8D85\u65F6\u8BBE\u7F6E</span>
instance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/longRequest&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u62E6\u622A\u5668" tabindex="-1">\u62E6\u622A\u5668 <a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a></h4><p>\u5728\u8BF7\u6C42\u6216\u54CD\u5E94\u88AB then \u6216 catch \u5904\u7406\u524D\u62E6\u622A\u5B83\u4EEC\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u8BF7\u6C42\u9519\u8BEF\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u6570\u636E\u505A\u70B9\u4EC0\u4E48</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u9519\u8BEF\u505A\u70B9\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u5982\u679C\u4F60\u60F3\u5728\u7A0D\u540E\u79FB\u9664\u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u8FD9\u6837" tabindex="-1">\u5982\u679C\u4F60\u60F3\u5728\u7A0D\u540E\u79FB\u9664\u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u8FD9\u6837 <a class="header-anchor" href="#\u5982\u679C\u4F60\u60F3\u5728\u7A0D\u540E\u79FB\u9664\u62E6\u622A\u5668\uFF0C\u53EF\u4EE5\u8FD9\u6837" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u53EF\u4EE5\u4E3A\u81EA\u5B9A\u4E49-axios-\u5B9E\u4F8B\u6DFB\u52A0\u62E6\u622A\u5668" tabindex="-1">\u53EF\u4EE5\u4E3A\u81EA\u5B9A\u4E49 axios \u5B9E\u4F8B\u6DFB\u52A0\u62E6\u622A\u5668 <a class="header-anchor" href="#\u53EF\u4EE5\u4E3A\u81EA\u5B9A\u4E49-axios-\u5B9E\u4F8B\u6DFB\u52A0\u62E6\u622A\u5668" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u9519\u8BEF\u5904\u7406" tabindex="-1">\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The request was made and the server responded with a status code</span>
      <span class="token comment">// that falls out of the range of 2xx</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The request was made but no response was received</span>
      <span class="token comment">// \`error.request\` is an instance of XMLHttpRequest in the browser and an instance of</span>
      <span class="token comment">// http.ClientRequest in node.js</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Something happened in setting up the request that triggered an Error</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u53D6\u6D88" tabindex="-1">\u53D6\u6D88 <a class="header-anchor" href="#\u53D6\u6D88" aria-hidden="true">#</a></h4><p>\u4F7F\u7528 cancel token \u53D6\u6D88\u8BF7\u6C42 Axios \u7684 cancel token API \u57FA\u4E8Ecancelable promises proposal\uFF0C\u5B83\u8FD8\u5904\u4E8E\u7B2C\u4E00\u9636\u6BB5\u3002</p><h4 id="\u53EF\u4EE5\u4F7F\u7528-canceltoken-source-\u5DE5\u5382\u65B9\u6CD5\u521B\u5EFA-cancel-token\uFF0C\u50CF\u8FD9\u6837" tabindex="-1">\u53EF\u4EE5\u4F7F\u7528 CancelToken.source \u5DE5\u5382\u65B9\u6CD5\u521B\u5EFA cancel token\uFF0C\u50CF\u8FD9\u6837 <a class="header-anchor" href="#\u53EF\u4EE5\u4F7F\u7528-canceltoken-source-\u5DE5\u5382\u65B9\u6CD5\u521B\u5EFA-cancel-token\uFF0C\u50CF\u8FD9\u6837" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">const</span> source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thrown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>thrown<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request canceled&#39;</span><span class="token punctuation">,</span> thrown<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;new name&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53D6\u6D88\u8BF7\u6C42\uFF08message \u53C2\u6570\u662F\u53EF\u9009\u7684\uFF09</span>
source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">&#39;Operation canceled by the user.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A-executor-\u51FD\u6570\u5230-canceltoken-\u7684\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA-cancel-token\uFF1A" tabindex="-1">\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A executor \u51FD\u6570\u5230 CancelToken \u7684\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA cancel token\uFF1A <a class="header-anchor" href="#\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012\u4E00\u4E2A-executor-\u51FD\u6570\u5230-canceltoken-\u7684\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA-cancel-token\uFF1A" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">let</span> cancel<span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// executor \u51FD\u6570\u63A5\u6536\u4E00\u4E2A cancel \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// cancel the request</span>
<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6CE8\u610F: \u53EF\u4EE5\u4F7F\u7528\u540C\u4E00\u4E2A cancel token \u53D6\u6D88\u591A\u4E2A\u8BF7\u6C42</span>
</code></pre></div>`,35),e=[o];function c(u,l,r,k,i,m){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
