import{_ as i,r as l,o as t,c,a as n,b as p,d as a,e as s}from"./app.cbf35e07.js";var o="/assets/image-20210207163522115.ab1f11bd.png",r="/assets/image-20210207163932238.aec2a6cb.png",d="/assets/image-20210208115843545.9bf0cae4.png",u="/assets/image-20210129170819044.a6eb7105.png",v="/assets/image-20210129171109587.3c5f738b.png",m="/assets/image-20210208134223332.4a5d0913.png";const k={},b=n("h1",{id:"gitlab-ci-cd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-ci-cd","aria-hidden":"true"},"#"),a(" GitLab CI/CD")],-1),g=n("p",null,"\u5B9E\u73B0\u901A\u8FC7\u5728 Gitlab \u4E0A\u65B0\u589E tag \u7684\u65B9\u5F0F\uFF0C\u81EA\u52A8\u751F\u6210\u955C\u50CF\uFF0C\u5E76\u63A8\u9001\u81F3\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\u3002",-1),h=n("h2",{id:"\u4E00\u3001-\u73AF\u5883\u51C6\u5907",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E00\u3001-\u73AF\u5883\u51C6\u5907","aria-hidden":"true"},"#"),a(" \u4E00\u3001 \u73AF\u5883\u51C6\u5907")],-1),y=s('<li><p>\u5B89\u88C5 centos 8</p><p>\u4E0B\u8F7D centos 8 \u955C\u50CF\u3002 http://mirrors.aliyun.com/centos/8.3.2011/isos/x86_64/</p><p><img src="'+o+'" alt="image-20210207163522115"></p><p>vmware \u5B89\u88C5 centos 8\u3002\u6CE8\u610F\u9009\u62E9\u6865\u63A5\u6A21\u5F0F\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u5BBF\u4E3B\u673Aping\u4E0D\u901A\u865A\u62DF\u673A\u7684\u60C5\u51B5</p><p><img src="'+r+'" alt="image-20210207163932238"></p><p>CentOS8\u901A\u8FC7\u5F15\u5BFC\u76D8+\u7F51\u7EDC\u955C\u50CF\u955C\u50CF\u6E90\u5B89\u88C5\u7CFB\u7EDF\uFF0C\u8BBE\u7F6E\u7F51\u7EDC\u955C\u50CF\u5B89\u88C5\u6E90\u4E3A\uFF1A</p><p>mirrors.aliyun.com/centos/8/BaseOS/x86_64/os <img src="'+d+`" alt="image-20210208115843545"></p></li><li><p>\u5B89\u88C5 gitlab-ce</p><p>\u5B89\u88C5\u4F9D\u8D56\u5E76\u5F00\u542F\u9632\u706B\u5899</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dnf <span class="token function">install</span> -y <span class="token function">curl</span> policycoreutils openssh-server perl
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> sshd
<span class="token function">sudo</span> systemctl start sshd
<span class="token comment"># Check if opening the firewall is needed with: sudo systemctl status firewalld</span>
<span class="token function">sudo</span> firewall-cmd --permanent --add-service<span class="token operator">=</span>http
<span class="token function">sudo</span> firewall-cmd --permanent --add-service<span class="token operator">=</span>https
<span class="token function">sudo</span> systemctl reload firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542F\u90AE\u4EF6\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dnf <span class="token function">install</span> postfix
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> postfix
<span class="token function">sudo</span> systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8F7D gitlab-ce \u8F6F\u4EF6\u5305</p><p>https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el8/</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y <span class="token function">wget</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el8/gitlab-ce-12.10.0-ce.0.el8.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5gitlab\u7684\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y policycoreutils-python-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5gitlab-ce</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -i gitlab-ce-12.10.0-ce.0.el8.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u8F91ip\u548C\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/gitlab/gitlab.rb

external_url <span class="token string">&#39;http://[ip]:[port]/&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F\u914D\u7F6E\u548C\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-ctl reconfigure
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u7528\u5BBF\u4E3B\u673A\u5728\u7F51\u9875\u4E0A\u8F93\u5165\u521A\u624D\u5B9A\u4E49\u7684\u8DEF\u5F84\u5373\u53EF\u8FDB\u5165\u6253\u5F00 gitlab\u3002</p><p>\u7B2C\u4E00\u6B21\u8FDB\u5165\u9700\u8981\u4FEE\u6539 root \u5BC6\u7801\u3002</p></li>`,2),_=n("p",null,"\u5B89\u88C5 gitlab-runner",-1),f={href:"https://mirrors.tuna.tsinghua.edu.cn/help/gitlab-runner/",target:"_blank",rel:"noopener noreferrer"},x=a("\u6E05\u534E\u56ED GItlab Runner\u5E2E\u52A9\u6587\u6863\u5730\u5740"),w=s(`<p>\u63A8\u8350\u5C06runner\u548Cgitlab\u5206\u522B\u5B89\u88C5\u5728\u4E0D\u540C\u7684\u673A\u5668\u4E0A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/yum.repos.d/gitlab-runner.repo

<span class="token punctuation">[</span>gitlab-runner<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>gitlab-runner
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el<span class="token variable">$releasever</span>-<span class="token variable">$basearch</span>/
<span class="token assign-left variable">repo_gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://packages.gitlab.com/gpg.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum makecache
<span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-runner -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),C=s('<li><p>\u6CE8\u518C runner</p><p>runner \u6709\u4E09\u79CD\u7C7B\u578B\u7684\uFF0C\u6211\u4EEC\u8FD9\u91CC\u6CE8\u518C\u4E00\u4E2A\u5168\u5C40\u7684 runner\u3002</p><p><img src="'+u+`" alt="image-20210129170819044"></p><p>\u627E\u5230\u5BF9\u5E94\u7684 url \u548C token</p><p>\u6CE8\u610F\u7C7B\u578B\u9009\u62E9 shell \u53EF\u4EE5\u4F7F\u7528\u5BBF\u4E3B\u673A\u7684\u6307\u4EE4\u3002\u9009\u62E9 docker \u7C7B\u578B\u9700\u8981\u786E\u4FDD runner \u80FD\u8FDE\u63A5 docker \u670D\u52A1\u3002</p><p>\u5728\u865A\u62DF\u673A\u4E0A\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gitlab-runner register
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt="image-20210129171109587"></p></li><li><p>\u5B89\u88C5 docker</p><p>\u5B89\u88C5\u9700\u8981\u7684\u8F6F\u4EF6\u5305\uFF0C yum-util \u63D0\u4F9Byum-config-manager\u529F\u80FD\uFF0C\u53E6\u5916\u4E24\u4E2A\u662Fdevicemapper\u9A71\u52A8\u4F9D\u8D56\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6Eyum\u6E90\uFF0C\u5B98\u65B9\u592A\u6162\uFF0C\u7528\u963F\u91CC\u4E91\u7684</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5 docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u955C\u50CF\u4ED3\u5E93\u6E90\u4E3A\u963F\u91CC\u955C\u50CF\u4ED3\u5E93</p><p><img src="`+m+`" alt="image-20210208134223332"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /etc/docker
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://c43ai8td.mirror.aliyuncs.com&quot;]
}
EOF</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\u68C0\u67E5 docker \u662F\u5426\u5B89\u88C5\u597D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker version</span>
Client: Docker Engine - Community
 Version:           <span class="token number">20.10</span>.3
 API version:       <span class="token number">1.41</span>
 Go version:        go1.13.15
 Git commit:        48d30b5
 Built:             Fri Jan <span class="token number">29</span> <span class="token number">14</span>:33:08 <span class="token number">2021</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.3
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.13.15
  Git commit:       46229ca
  Built:            Fri Jan <span class="token number">29</span> <span class="token number">14</span>:31:25 <span class="token number">2021</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.4</span>.3
  GitCommit:        269548fa27e0089a8b8278fc4fc781d7f65a939b
 runc:
  Version:          <span class="token number">1.0</span>.0-rc92
  GitCommit:        ff819c7e9184c13b7c2607fe6c30ae19403a7aff
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5 npm</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5 npm \u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># npm -v</span>
<span class="token number">6.14</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),A=s(`<h2 id="\u4E8C\u3001\u7F16\u5199\u76F8\u5173\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7F16\u5199\u76F8\u5173\u6587\u4EF6" aria-hidden="true">#</a> \u4E8C\u3001\u7F16\u5199\u76F8\u5173\u6587\u4EF6</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\u6211\u4EEC\u5B89\u88C5\u4E86 gitlab\uFF0Cgitlab-runner\uFF0Cdocker\uFF0Cnode\u3002\u4E0B\u9762\u6211\u4EEC\u7F16\u5199 .gitlab-ci.yml\u3001nginx.conf\u3001Dockerfile \u811A\u672C\u5B9E\u73B0\u81EA\u52A8\u5316\u6784\u5EFA\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># .gitlab-ci.yml</span>

<span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> node_build
  <span class="token punctuation">-</span> docker_build

<span class="token key atrule">node_build</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> node_build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> tags
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm install <span class="token punctuation">-</span><span class="token punctuation">-</span>registry=https<span class="token punctuation">:</span>//registry.npm.taobao.org
    <span class="token punctuation">-</span> npm run build
    <span class="token punctuation">-</span> ls
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> shell
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dist/

<span class="token key atrule">docker_build</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> docker_build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> tags
  <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node_build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> BUILD_TAG=$CI_COMMIT_TAG
    <span class="token punctuation">-</span> docker version
    <span class="token punctuation">-</span> docker login <span class="token punctuation">-</span>u $DOCKER_USERNAME <span class="token punctuation">-</span>p $DOCKER_PASSWORD registry.cn<span class="token punctuation">-</span>beijing.aliyuncs.com
    <span class="token punctuation">-</span> ls
    <span class="token punctuation">-</span> docker build <span class="token punctuation">-</span>t cms<span class="token punctuation">-</span>template<span class="token punctuation">:</span>$BUILD_TAG .
    <span class="token punctuation">-</span> IMAGE_ID=$(docker images <span class="token punctuation">|</span> grep cms<span class="token punctuation">-</span>template <span class="token punctuation">|</span> grep $BUILD_TAG <span class="token punctuation">|</span> awk &#39;<span class="token punctuation">{</span>print $3<span class="token punctuation">}</span>&#39;)
    <span class="token punctuation">-</span> docker tag $IMAGE_ID registry.cn<span class="token punctuation">-</span>beijing.aliyuncs.com/aimer<span class="token punctuation">-</span>fan/cms<span class="token punctuation">-</span>template<span class="token punctuation">:</span>$BUILD_TAG
    <span class="token punctuation">-</span> docker push registry.cn<span class="token punctuation">-</span>beijing.aliyuncs.com/aimer<span class="token punctuation">-</span>fan/cms<span class="token punctuation">-</span>template<span class="token punctuation">:</span>$BUILD_TAG
    <span class="token punctuation">-</span> docker rmi <span class="token punctuation">-</span>f $IMAGE_ID
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> shell

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># nginx.conf</span>

<span class="token directive"><span class="token keyword">user</span>  nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">20480</span></span><span class="token punctuation">;</span>


<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">20480</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">multi_accept</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
                      <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>
    <span class="token comment">#\u8BF7\u6C42\u91CF\u7EA7\u5927\u5EFA\u8BAE\u5173\u95EDacccess_log</span>
    <span class="token comment">#access_log  /var/log/nginx/access.log  main;</span>

    <span class="token comment">#fastcgi_intercept_errors on;</span>
    <span class="token comment">#proxy_intercept_errors on;</span>
    <span class="token comment">#error_page 404 /data/web/404.html;</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> application/javascript application/json</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Origin *</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods <span class="token string">&#39;GET, POST, OPTIONS&#39;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Headers <span class="token string">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span> /workspace/web</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">75M</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment"># root /usr/share/nginx/html;</span>
            <span class="token directive"><span class="token keyword">index</span> /index.html</span><span class="token punctuation">;</span>                        
            <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>        <span class="token comment">#\u5339\u914D\u4E0D\u5230\u4EFB\u4F55\u9759\u6001\u8D44\u6E90\uFF0C\u8DF3\u5230\u540C\u4E00\u4E2Aindex.html</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine</span>

<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /workspace/web</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /workspace/web</span>

<span class="token instruction"><span class="token keyword">COPY</span> ./dist/ /workspace/web/</span>
<span class="token instruction"><span class="token keyword">COPY</span> nginx.conf /etc/nginx/nginx.conf</span>

<span class="token instruction"><span class="token keyword">CMD</span> nginx -g <span class="token string">&#39;daemon off;&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function $(I,G){const e=l("ExternalLinkIcon");return t(),c("div",null,[b,g,h,n("ol",null,[y,n("li",null,[_,n("p",null,[n("a",f,[x,p(e)])]),w]),C]),A])}var E=i(k,[["render",$],["__file","index.html.vue"]]);export{E as default};
