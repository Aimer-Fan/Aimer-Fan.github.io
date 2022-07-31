import{_ as e,r as t,o as p,c as o,a as n,b as c,d as s,e as l}from"./app.cbf35e07.js";var i="/assets/\u517C\u5BB9\u6027.cc7f3297.png";const u={},r={id:"generator-\u751F\u6210\u5668",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#generator-\u751F\u6210\u5668","aria-hidden":"true"},"#",-1),k=s(),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator",target:"_blank",rel:"noopener noreferrer"},m=s("Generator"),b=s("\uFF08\u751F\u6210\u5668\uFF09"),g=l(`<h2 id="\u4EC0\u4E48\u662Fgenerator" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fgenerator" aria-hidden="true">#</a> \u4EC0\u4E48\u662FGenerator\uFF1F</h2><blockquote><p>\u751F\u6210\u5668\u5BF9\u8C61\u662F\u7531\u4E00\u4E2A generator function \u8FD4\u56DE\u7684,\u5E76\u4E14\u5B83\u7B26\u5408\u53EF\u8FED\u4EE3\u534F\u8BAE\u548C\u8FED\u4EE3\u5668\u534F\u8BAE\u3002</p></blockquote><p><code>generator</code> \u662FES6\u6807\u51C6\u4E2D\u63D0\u51FA\u7684\u6982\u5FF5\u548C\u8BED\u6CD5\u3002</p><p>Generator \u751F\u6210\u5668\u8FD4\u56DE\u4E00\u4E2A generator \u5B9E\u4F8B\uFF0C\u8BE5\u5B9E\u4F8B\u6709\u4E24\u79CD\u72B6\u6001\uFF1A</p><ul><li>suspended\uFF08\u6682\u505C\uFF09\uFF1A\u5728\u8BE5\u72B6\u6001\u4E0B\uFF0Cgenerator\u5B9E\u4F8B\u80FD\u591F\u8C03\u7528next()\u65B9\u6CD5\u83B7\u53D6\u4E0B\u4E00\u4E2Ayield\u6216\u8005return\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\uFF0C\u5728\u8BE5\u72B6\u6001\u4E0B\u53EF\u4EE5\u8C03\u7528throw\u65B9\u6CD5\u4F20\u9012\u5F02\u5E38\u7ED9Generator\u8FDB\u884C\u7EDF\u4E00\u7684\u5904\u7406\u3002</li><li>closed\uFF08\u5173\u95ED\uFF09\uFF1A\u5728\u8BE5\u72B6\u6001\u4E0B\uFF0C\u8868\u793Agenerator\u5DF2\u7ECF\u8FED\u4EE3\u5B8C\u6210\uFF0C\u4F46\u8FD8\u662F\u53EF\u4EE5\u4F7F\u7528return\u65B9\u6CD5\u83B7\u5F97\u9700\u8981\u7684\u8FD4\u56DE\u503C\u3002</li></ul><p>\u8C03\u7528return\uFF0Cthrow\u65B9\u6CD5\u6216\u8005\u5728generator\u5185\u90E8\u6267\u884C\u4E86return\u65B9\u6CD5\u90FD\u4F1A\u4F7Fgenerator\u5B9E\u4F8B\u7684\u72B6\u6001\u4ECEsuspended\u53D8\u6210closed\u3002</p><h2 id="\u5B9A\u4E49\u4E00\u4E2Agenerator" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2Agenerator" aria-hidden="true">#</a> \u5B9A\u4E49\u4E00\u4E2AGenerator</h2><p>\u5728<code>function</code>\u540E\u6DFB\u52A0<code>*</code>\u6807\u8BB0\u8BE5\u51FD\u6570\u662F\u4E00\u4E2AGenerator\u51FD\u6570\u3002</p><p><strong>\u6CE8\u610F\uFF1A\u8BE5\u51FD\u6570\u4E0D\u80FD\u4E3A\u533F\u540D\u51FD\u6570</strong></p><p>\u8C03\u7528Generator\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2AGenerator\u5B9E\u4F8B\u3002\u4E14\u6BCF\u4E2A\u751F\u6210\u7684Generator\u5B9E\u4F8B\u90FD\u4E92\u4E0D\u5F71\u54CD\u3002</p><p><code>yield</code>\u5173\u952E\u5B57\u8868\u793A\u8BE5Generator\u5B9E\u4F8B\u6267\u884C\u5230\u8FD9\u4E00\u884C\u4F1A\u6682\u505C\u3002</p><p><code>return</code>\u8868\u793A\u8BE5Generator\u5B9E\u4F8B\u6267\u884C\u7ED3\u675F\u5E76\u8FD4\u56DE return \u540E\u8868\u8FBE\u5F0F\u5BF9\u5E94\u7684\u503C\u3002\u5373\u4F7Freturn\u540E\u8FD8\u5B58\u5728yield\uFF0C\u8BE5yield\u4E5F\u4E0D\u4F1A\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> generate <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">typeof</span> generate		<span class="token comment">// =&gt; function</span>
generate<span class="token punctuation">.</span>__prop__	<span class="token comment">// =&gt; Generator {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generator\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#generator\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> Generator\u4E2D\u7684\u65B9\u6CD5</h2><h3 id="_1-next" tabindex="-1"><a class="header-anchor" href="#_1-next" aria-hidden="true">#</a> 1. next()</h3><blockquote><p>Generator.prototype.next() \u8FD4\u56DE\u4E00\u4E2A\u7531 yield \u8868\u8FBE\u5F0F\u751F\u6210\u7684\u503C\u3002</p></blockquote><p>\u8FD4\u56DE\u503C\u7531\u4E24\u90E8\u5206\u7EC4\u6210</p><ul><li>value\uFF1Ayield \u6216\u8005 return \u540E\u8868\u8FBE\u5F0F\u8FD4\u56DE\u7684\u503C\uFF0C\u5F53\u5DF2\u7ECF\u8FED\u4EE3\u5B8C\u6210\u5219\u8FD4\u56DE undefined\u3002</li><li>done\uFF1A\u8868\u793A\u6539\u51FD\u6570\u662F\u5426\u5DF2\u7ECF\u8FED\u4EE3\u5B8C\u6210\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u8BE5\u65B9\u6CD5\u53EA\u80FD\u5728generator\u751F\u6210\u7684\u5B9E\u4F8B\u4E2D\u8C03\u7528\uFF0C\u76F4\u63A5\u8C03\u7528next\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fun<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// =&gt; Uncaught TypeError: fun.next is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> generator <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// =&gt; {value: 2, done: false}</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// =&gt; {value: 3, done: false}</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// =&gt; {value: 4, done: true}</span>
generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>		<span class="token comment">// =&gt; {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-return" tabindex="-1"><a class="header-anchor" href="#_2-return" aria-hidden="true">#</a> 2. return()</h3><blockquote><p>return() \u65B9\u6CD5\u8FD4\u56DE\u7ED9\u5B9A\u7684\u503C\u5E76\u7ED3\u675F\u751F\u6210\u5668\u3002</p></blockquote><p>\u8C03\u7528\u8BE5\u65B9\u6CD5\u4F1A\u5C06\u8BE5generator\u5B9E\u4F8B\u6807\u8BB0\u4E3A\u5B8C\u6210\u72B6\u6001\u3002\u4F7F\u7528return\u65B9\u6CD5\u4E4B\u540E\u518D\u8C03\u7528next()\u65B9\u6CD5\u4F1A\u8FD4\u56DEundefined\u3002</p><p>\u5373\u4F7F\u8BE5generator\u5B9E\u4F8B\u7684\u72B6\u6001\u4E3A\u5B8C\u6210\u72B6\u6001\uFF0C\u8C03\u7528return\u65B9\u6CD5\u4F9D\u7136\u80FD\u8FD4\u56DE\u5BF9\u5E94\u7684\u6570\u636E\u3002</p><ul><li><p>\u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>gen<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570\uFF1A</p><p>value\uFF1A\u9700\u8981\u8FD4\u56DE\u7684\u503C</p></li><li><p>\u8FD4\u56DE\u7684\u503C</p><p>\u8FD4\u56DE\u8BE5\u51FD\u6570\u53C2\u6570\u4E2D\u7ED9\u5B9A\u7684\u503C</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">yield</span> <span class="token number">1</span>
  <span class="token keyword">yield</span> <span class="token number">2</span>
  <span class="token keyword">yield</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// { value: 1, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token comment">// { value: &quot;foo&quot;, done: true }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u5BF9\u5DF2\u7ECF\u5904\u4E8E\u201C\u5B8C\u6210\u201D\u72B6\u6001\u7684\u751F\u6210\u5668\u8C03\u7528<code>return(value)</code>\uFF0C\u5219\u751F\u6210\u5668\u5C06\u4FDD\u6301\u5728\u201C\u5B8C\u6210\u201D\u72B6\u6001\u3002\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u5BF9\u8C61\u7684<code>value</code>\u5C5E\u6027\u4E0E\u793A\u4F8B\u6700\u540E\u7684<code>.next()</code>\u65B9\u6CD5\u76F8\u540C\u3002\u5982\u679C\u63D0\u4F9B\u4E86\u53C2\u6570\uFF0C\u5219\u53C2\u6570\u5C06\u88AB\u8BBE\u7F6E\u4E3A\u8FD4\u56DE\u5BF9\u8C61\u7684<code>value</code>\u5C5E\u6027\u7684\u503C\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 2, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 3, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>
g<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: undefined, done: true }</span>
g<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { value: 1, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-throw" tabindex="-1"><a class="header-anchor" href="#_3-throw" aria-hidden="true">#</a> 3. throw()</h3><blockquote><p>Generator.proptype.throw()\u65B9\u6CD5\u7528\u6765\u5411\u751F\u6210\u5668\u629B\u51FA\u5F02\u5E38\uFF0C\u5E76\u6062\u590D\u751F\u6210\u5668\u7684\u6267\u884C\uFF0C\u8FD4\u56DE\u5E26\u6709 done \u53CA value \u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</p></blockquote><p>throw\u53C2\u6570\u4E2D\u7684\u5F02\u5E38\u4F1A\u4F20\u9012\u81F3Generator\u51FD\u6570\u4E2D\uFF0C\u5728\u51FD\u6570\u4E2D\u4F7F\u7528try/catch\u8BED\u53E5\u80FD\u591F\u6355\u6349\u5230\u8BE5\u5F02\u5E38\u3002</p><p>throw\u65B9\u6CD5\u4F1A\u4F7Fgenerator\u5B9E\u4F8B\u7684\u72B6\u6001\u8F6C\u4E3Aclosed\uFF08\u5173\u95ED\uFF09\u3002</p><p>throw\u65B9\u6CD5\u53EA\u6709\u5728generator\u5B9E\u4F8B\u7684\u72B6\u6001\u4E3Asuspended\uFF08\u6682\u505C\uFF09\u65F6\u8C03\u7528\uFF0C\u624D\u80FD\u628A\u53C2\u6570\u4E2D\u7684\u5F02\u5E38\u4F20\u9012\u5230Generator\u51FD\u6570\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span>exception<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u53C2\u6570\uFF1A</p><p>exception\uFF1A\u7528\u4E8E\u629B\u51FA\u7684\u5F02\u5E38\u3002\u4F7F\u7528Error\u7684\u5B9E\u4F8B\u5BF9\u8C03\u8BD5\u975E\u5E38\u6709\u5E2E\u52A9\u3002</p></li><li><p>\u8FD4\u56DE\u503C\uFF1A\u5E26\u6709\u4E24\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF1A</p><ul><li>done\uFF1A\u5982\u679C\u8FED\u4EE3\u5668\u5DF2\u7ECF\u8FD4\u56DE\u4E86\u8FED\u4EE3\u5E8F\u5217\u7684\u672B\u5C3E\uFF0C\u5219\u503C\u4E3A true\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8FED\u4EE3\u5668 value\u7684\u8FD4\u56DE\u503C\uFF1B\u5982\u679C\u8FED\u4EE3\u80FD\u591F\u7EE7\u7EED\u751F\u4EA7\u5728\u5E8F\u5217\u4E2D\u7684\u4E0B\u4E00\u4E2A\u503C\uFF0C\u5219\u503C\u4E3A false\u3002 \u8FD9\u76F8\u5F53\u4E0E\u4E0D\u6307\u5B9A done \u5C5E\u6027\u7684\u503C\u3002</li><li>value\uFF1A\u8FED\u4EE3\u5668\u8FD4\u56DE\u7684\u4EFB\u4F55 JavaScript \u503C\u3002\u5F53 done \u662F true \u7684\u65F6\u5019\u53EF\u4EE5\u7701\u7565\u3002</li></ul></li></ul><h2 id="\u517C\u5BB9\u6027" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a> \u517C\u5BB9\u6027</h2><p><img src="`+i+`" alt="\u517C\u5BB9\u6027"></p><h2 id="\u904D\u5386generator" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386generator" aria-hidden="true">#</a> \u904D\u5386Generator</h2><ul><li><p>\u4F7F\u7528next()\u65B9\u6CD5\u904D\u5386Generator</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    <span class="token keyword">yield</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u901A\u8FC7result\u7684done\u5C5E\u6027\u6765\u5224\u65AD\u8BE5generator\u662F\u5426\u904D\u5386\u5B8C\u6210</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    result <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
{value: 1, done: false}
{value: 2, done: false}
{value: 3, done: false}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528 for/of \u65B9\u6CD5\u904D\u5386Generator</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    <span class="token keyword">yield</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> result <span class="token keyword">of</span> g<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
1
2
3
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,40);function f(h,y){const a=t("ExternalLinkIcon");return p(),o("div",null,[n("h1",r,[d,k,n("a",v,[m,c(a)]),b]),g])}var w=e(u,[["render",f],["__file","index.html.vue"]]);export{w as default};