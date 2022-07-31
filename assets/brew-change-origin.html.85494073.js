import{_ as e,o as s,c as n,e as a}from"./app.cbf35e07.js";const i={},r=a(`<h1 id="brew-\u66F4\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#brew-\u66F4\u6362\u6E90" aria-hidden="true">#</a> brew \u66F4\u6362\u6E90</h1><p>brew.git \u6E90: https://github.com/Homebrew/brew</p><p>homebrew-core.git \u6E90: https://github.com/Homebrew/homebrew-core</p><h2 id="\u6E05\u534E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6E05\u534E\u6E90" aria-hidden="true">#</a> \u6E05\u534E\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66FF\u6362brew.git</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

<span class="token comment"># \u66FF\u6362homebrew-core.git</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

<span class="token comment"># \u5237\u65B0\u6E90</span>
brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u963F\u91CC\u4E91" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91" aria-hidden="true">#</a> \u963F\u91CC\u4E91</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66FF\u6362brew.git</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

<span class="token comment"># \u66FF\u6362homebrew-core.git</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

<span class="token comment"># \u5237\u65B0\u6E90</span>
brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u817E\u8BAF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u817E\u8BAF\u6E90" aria-hidden="true">#</a> \u817E\u8BAF\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u66FF\u6362brew.git:
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.cloud.tencent.com/homebrew/brew.git

\u66FF\u6362homebrew-core.git:
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>brew --repo<span class="token variable">)</span></span>/Library/Taps/homebrew/homebrew-core&quot;</span>
<span class="token function">git</span> remote set-url origin https://mirrors.cloud.tencent.com/homebrew/homebrew-core.git

<span class="token comment"># \u5237\u65B0\u6E90</span>
brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[r];function t(o,c){return s(),n("div",null,l)}var p=e(i,[["render",t],["__file","brew-change-origin.html.vue"]]);export{p as default};
