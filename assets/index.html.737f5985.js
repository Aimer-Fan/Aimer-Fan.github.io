import{_ as i,o as l,c as e,e as t}from"./app.cbf35e07.js";var a="/assets/http\u4EA4\u4E92\u7684\u57FA\u672C\u8FC7\u7A0B.0a5fa837.png",o="/assets/\u6D41\u7A0B\u56FE.0b8d8d80.png",r="/assets/axios\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u62E6\u622A\u5668\u5DE5\u4F5C\u6D41\u7A0B.656e17b8.png";const s={},d=t('<h1 id="axios\u4ECE\u5165\u95E8\u5230\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#axios\u4ECE\u5165\u95E8\u5230\u6E90\u7801" aria-hidden="true">#</a> axios\u4ECE\u5165\u95E8\u5230\u6E90\u7801</h1><h2 id="_1-http\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_1-http\u76F8\u5173" aria-hidden="true">#</a> 1. HTTP\u76F8\u5173</h2><h3 id="_1-1-http\u8BF7\u6C42\u4EA4\u4E92\u7684\u57FA\u672C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-http\u8BF7\u6C42\u4EA4\u4E92\u7684\u57FA\u672C\u8FC7\u7A0B" aria-hidden="true">#</a> 1.1 HTTP\u8BF7\u6C42\u4EA4\u4E92\u7684\u57FA\u672C\u8FC7\u7A0B</h3><p><img src="'+a+'" alt="1576595580798"></p><ol><li>\u524D\u540E\u5E94\u7528\u4ECE\u6D4F\u89C8\u5668\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001HTTP\u8BF7\u6C42\uFF08\u8BF7\u6C42\u62A5\u6587\uFF09</li><li>\u540E\u53F0\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u8C03\u5EA6\u670D\u52A1\u5668\u5E94\u7528\u5904\u7406\u8BF7\u6C42\uFF0C\u5411\u6D4F\u89C8\u5668\u7AEF\u8FD4\u56DEHTTP\u54CD\u5E94\uFF08\u54CD\u5E94\u62A5\u6587\uFF09</li><li>\u6D4F\u89C8\u5668\u7AEF\u63A5\u6536\u5230\u54CD\u5E94\uFF0C\u89E3\u6790\u663E\u793A\u54CD\u5E94\u4F53/\u8C03\u7528\u76D1\u89C6\u56DE\u8C03</li></ol><h3 id="_1-2-http\u8BF7\u6C42\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#_1-2-http\u8BF7\u6C42\u62A5\u6587" aria-hidden="true">#</a> 1.2 HTTP\u8BF7\u6C42\u62A5\u6587</h3><ol><li>\u8BF7\u6C42\u884C</li><li>\u591A\u4E2A\u8BF7\u6C42\u5934</li><li>\u8BF7\u6C42\u4F53</li></ol><h3 id="_1-3-http\u54CD\u5E94\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#_1-3-http\u54CD\u5E94\u62A5\u6587" aria-hidden="true">#</a> 1.3 HTTP\u54CD\u5E94\u62A5\u6587</h3><ol><li>\u54CD\u5E94\u72B6\u6001\u884C</li><li>\u591A\u4E2A\u54CD\u5E94\u5934</li><li>\u54CD\u5E94\u4F53</li></ol><h3 id="_1-4-post\u8BF7\u6C42\u4F53\u53C2\u6570\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-4-post\u8BF7\u6C42\u4F53\u53C2\u6570\u683C\u5F0F" aria-hidden="true">#</a> 1.4 post\u8BF7\u6C42\u4F53\u53C2\u6570\u683C\u5F0F</h3><ol><li><p>ContentType: application/x-www-form-urlencoded;charset=utf-8</p><p>\u7528\u4E8E\u952E\u503C\u5BF9\u53C2\u6570\uFF0C\u53C2\u6570\u7684\u952E\u503C\u5BF9\u7528=\u94FE\u63A5\uFF0C\u53C2\u6570\u4E4B\u95F4\u7528&amp;\u94FE\u63A5</p></li><li><p>Content-Type: application/json;charset=utf-8</p><p>\u7528\u4E8Ejson\u5B57\u7B26\u4E32\u53C2\u6570</p><p>\u4F8B\u5982\uFF1A{&quot;name&quot;: &quot;123456&quot;, &quot;age&quot;: 18}</p></li><li><p>Content-Type: multipart/form-data</p><p>\u7528\u4E8E\u6587\u4EF6\u4E0A\u4F20</p></li></ol><h3 id="_1-5-\u5E38\u89C1\u7684\u54CD\u5E94\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#_1-5-\u5E38\u89C1\u7684\u54CD\u5E94\u72B6\u6001\u7801" aria-hidden="true">#</a> 1.5 \u5E38\u89C1\u7684\u54CD\u5E94\u72B6\u6001\u7801</h3><table><thead><tr><th>\u72B6\u6001\u7801</th><th>\u542B\u4E49</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>200</td><td>OK</td><td>\u8BF7\u6C42\u6210\u529F\u3002\u4E00\u822C\u7528\u4E8EGET\u548CPOST\u8BF7\u6C42</td></tr><tr><td>201</td><td>Created</td><td>\u5DF2\u521B\u5EFA\u3002\u6210\u529F\u8BF7\u6C42\u521B\u5EFA\u4E86\u65B0\u7684\u8D44\u6E90</td></tr><tr><td>401</td><td>Unauthorized</td><td>\u672A\u6388\u6743/\u8BF7\u6C42\u8981\u6C42\u7528\u6237\u7684\u8EAB\u4EFD\u8BA4\u8BC1</td></tr><tr><td>404</td><td>Not Found</td><td>\u670D\u52A1\u5668\u65E0\u6CD5\u6839\u636E\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u627E\u5230\u8D44\u6E90</td></tr><tr><td>500</td><td>Internal Server Error</td><td>\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF\uFF0C\u65E0\u6CD5\u5B8C\u6210\u8BF7\u6C42</td></tr></tbody></table><h3 id="_1-6-\u4E0D\u540C\u7C7B\u578B\u7684\u8BF7\u6C42\u53CA\u5176\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-6-\u4E0D\u540C\u7C7B\u578B\u7684\u8BF7\u6C42\u53CA\u5176\u4F5C\u7528" aria-hidden="true">#</a> 1.6 \u4E0D\u540C\u7C7B\u578B\u7684\u8BF7\u6C42\u53CA\u5176\u4F5C\u7528</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>GET</td><td>\u4ECE\u670D\u52A1\u5668\u7AEF\u8BFB\u53D6\u6570\u636E</td></tr><tr><td>POST</td><td>\u5411\u670D\u52A1\u5668\u7AEF\u6DFB\u52A0\u6570\u636E</td></tr><tr><td>PUT</td><td>\u66F4\u65B0\u670D\u52A1\u5668\u7AEF\u7684\u6570\u636E</td></tr><tr><td>DELETE</td><td>\u5220\u9664\u670D\u52A1\u5668\u7AEF\u7684\u6570\u636E</td></tr></tbody></table><h3 id="_1-7-api\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-7-api\u7684\u5206\u7C7B" aria-hidden="true">#</a> 1.7 API\u7684\u5206\u7C7B</h3><ol><li>REST API\uFF1Arestful <ol><li>\u53D1\u9001\u8BF7\u6C42\u8FDB\u884CCRUD\u54EA\u4E2A\u64CD\u4F5C\u7531\u8BF7\u6C42\u65B9\u5F0F\u6765\u51B3\u5B9A</li><li>\u540C\u4E00\u4E2A\u8BF7\u6C42\u8DEF\u5F84\u53EF\u4EE5\u8FDB\u884C\u591A\u4E2A\u64CD\u4F5C</li><li>\u8BF7\u6C42\u65B9\u5F0F\u4F1A\u7528\u5230GET/POST/PUT/DETLETE</li></ol></li><li>\u975EREST API\uFF1Arestless <ol><li>\u8BF7\u6C42\u65B9\u5F0F\u4E0D\u51B3\u5B9A\u8BF7\u6C42\u7684CRUD</li><li>\u4E00\u4E2A\u8BF7\u6C42\u8DEF\u5F84\u503C\u5BF9\u5E94\u4E00\u4E2A\u64CD\u4F5C</li><li>\u4E00\u822C\u53EA\u6709GET/POST</li></ol></li></ol><h3 id="_1-8-\u4F7F\u7528-json-server-\u642D\u5EFArest-api" tabindex="-1"><a class="header-anchor" href="#_1-8-\u4F7F\u7528-json-server-\u642D\u5EFArest-api" aria-hidden="true">#</a> 1.8 \u4F7F\u7528 json-server \u642D\u5EFAREST API</h3><p>https://github.com/typicode/json-server</p><h2 id="_2-xhr\u7684\u7406\u89E3\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-xhr\u7684\u7406\u89E3\u548C\u4F7F\u7528" aria-hidden="true">#</a> 2. XHR\u7684\u7406\u89E3\u548C\u4F7F\u7528</h2><p>https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest</p><ol><li><p>\u533A\u522B\u4E00\u822Chttp\u8BF7\u6C42\u4E0Eajax\u8BF7\u6C42</p><ol><li>ajax\u8BF7\u6C42\u662F\u4E00\u79CD\u7279\u522B\u7684http\u8BF7\u6C42</li><li>\u5BF9\u670D\u52A1\u5668\u7AEF\u6765\u8BF4\uFF0C\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\uFF0C\u533A\u522B\u5728\u4E8E\u6D4F\u89C8\u5668\u7AEF</li><li>\u6D4F\u89C8\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\uFF1A\u53EA\u6709XHR\u6216fetch\u53D1\u51FA\u7684\u624D\u662Fajax\u8BF7\u6C42\uFF0C\u5176\u5B83\u6240\u6709\u7684\u90FD\u662F\u975Eajax\u8BF7\u6C42</li><li>\u6D4F\u89C8\u5668\u7AEF\u63A5\u6536\u5230\u54CD\u5E94 <ol><li>\u4E00\u822C\u8BF7\u6C42\uFF1A\u6D4F\u89C8\u5668\u4E00\u822C\u4F1A\u76F4\u63A5\u663E\u793A\u54CD\u5E94\u4F53\u6570\u636E\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u5237\u65B0/\u8DF3\u8F6C\u9875\u9762</li><li>ajax\u8BF7\u6C42\uFF1A\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5BF9\u754C\u9762\u8FDB\u884C\u4EFB\u4F55\u66F4\u65B0\u64CD\u4F5C\uFF0C\u53EA\u662F\u8C03\u7528\u76D1\u89C6\u7684\u56DE\u8C03\u51FD\u6570\u5E76\u4F20\u5165\u54CD\u5E94\u76F8\u5173\u6570\u636E</li></ol></li></ol></li><li><p>API</p><ol><li><p>XMLHttpRequest()\uFF1A\u521B\u5EFAXHR\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570</p></li><li><p>status\uFF1A\u54CD\u5E94\u72B6\u6001\u7801\u503C\uFF0C\u6BD4\u5982200\uFF0C404</p></li><li><p>statusText\uFF1A\u54CD\u5E94\u72B6\u6001\u6587\u672C</p></li><li><p>readyState\uFF1A\u6807\u8BB0\u8BF7\u6C42\u72B6\u6001\u7684\u5236\u5EA6\u5C5E\u6027</p><p>0\uFF1A\u521D\u59CB</p><p>1\uFF1Aopen()\u4E4B\u540E</p><p>2\uFF1Asend()\u4E4B\u540E</p><p>3\uFF1A\u8BF7\u6C42\u4E2D</p></li><li><p>onreadystatechange\uFF1A\u7ED1\u5B9AreadyState\u6539\u53D8\u7684\u76D1\u542C</p></li><li><p>responseType\uFF1A\u6307\u5B9A\u54CD\u5E94\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u662F json\uFF0C\u5F97\u5230\u54CD\u5E94\u540E\u81EA\u52A8\u89E3\u6790\u54CD\u5E94\u4F53\u6570\u636E</p></li><li><p>response\uFF1A\u54CD\u5E94\u4F53\u6570\u636E\uFF0C\u7C7B\u578B\u53D6\u51B3\u4E8EresponseType\u7684\u6307\u5B9A</p></li><li><p>timeout\uFF1A\u6307\u5B9A\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A0\u4EE3\u8868\u6CA1\u6709\u9650\u5236</p></li><li><p>ontimeout\uFF1A\u7ED1\u5B9A\u8D85\u65F6\u7684\u76D1\u542C\\</p></li><li><p>onerror\uFF1A\u7ED1\u5B9A\u8BF7\u6C42\u7F51\u7EDC\u9519\u8BEF\u7684\u76D1\u542C</p></li><li><p>open()\uFF1A\u521D\u59CB\u5316\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u53C2\u6570\u4E3A:(method. url[, async])</p></li><li><p>send(data)\uFF1A\u53D1\u9001\u8BF7\u6C42</p></li><li><p>abort()\uFF1A\u7EC8\u7AEF\u8BF7\u6C42</p></li><li><p>getResponseHeader(name)\uFF1A\u83B7\u53D6\u6307\u5B9A\u540D\u79F0\u7684\u54CD\u5E94\u5934\u503C</p></li><li><p>getAllResponseHeaders()\uFF1A\u83B7\u53D6\u6240\u6709\u54CD\u5E94\u5934\u7EC4\u6210\u7684\u5B57\u7B26\u4E32</p></li><li><p>setRequestHeader(name, value)\uFF1A\u8BBE\u7F6E\u8BF7\u6C42\u5934</p></li></ol></li></ol><h2 id="_3-axios\u7684\u7406\u89E3\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-axios\u7684\u7406\u89E3\u548C\u4F7F\u7528" aria-hidden="true">#</a> 3. axios\u7684\u7406\u89E3\u548C\u4F7F\u7528</h2><ol><li><p>axios\u662F\u4EC0\u4E48\uFF1F</p><ol><li>\u524D\u7AEF\u6700\u6D41\u884C\u7684ajax\u8BF7\u6C42\u5E93</li><li>react/vue\u5B98\u65B9\u90FD\u63A8\u8350\u4F7F\u7528axios</li></ol></li><li><p>axios\u7279\u70B9</p><ol><li>\u57FA\u4E8Epromise\u7684\u5F02\u6B65\u7F16\u7A0Bajax\u8BF7\u6C42\u5E93</li><li>\u6D4F\u89C8\u5668\u7AEF/node\u7AEF\u90FD\u53EF\u4EE5\u4F7F\u7528</li><li>\u652F\u6301\u8BF7\u6C42/\u54CD\u5E94\u62E6\u622A\u5668</li><li>\u652F\u6301/\u54CD\u5E94\u6570\u636E\u8F6C\u6362</li><li>\u6279\u91CF\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42</li></ol></li><li><p>axios\u5E38\u7528\u8BED\u6CD5</p><ol><li>axios(config)\uFF1A\u901A\u7528/\u6700\u672C\u8D28\u7684\u53D1\u4EFB\u610F\u7C7B\u578B\u8BF7\u6C42\u7684\u53D1\u9001</li><li>axios(url[, config])\uFF1A\u53EF\u4EE5\u53EA\u6307\u5B9Aurl\u53D1get\u8BF7\u6C42</li><li>axios.request(config)\uFF1A\u7B49\u540C\u4E8Eaxios(config)</li><li>axios.get(url[, config])\uFF1A\u53D1get\u8BF7\u6C42</li><li>axios.delete(url[, config])\uFF1A\u53D1delete\u8BF7\u6C42</li><li>axios.post(url[, data, config])\uFF1A\u53D1post\u8BF7\u6C42</li><li>axios.put(url[, data, config])\uFF1A\u53D1put\u8BF7\u6C42</li><li>axios.defaults.xxx\uFF1A\u8BF7\u6C42\u7684\u9ED8\u8BA4\u5168\u5C40\u914D\u7F6E</li><li>axios.interceptor.request.use()\uFF1A\u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668</li><li>axios.interceptor.response.use()\uFF1A\u6DFB\u52A0\u76F8\u5E94\u62E6\u622A\u5668</li><li>axois.create([config])\uFF1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684axios\uFF08\u5B83\u6CA1\u6709\u4E0B\u9762\u7684\u529F\u80FD\uFF09</li><li>axios.Cancel()\uFF1A\u7528\u4E8E\u521B\u5EFA\u53D6\u6D88\u8BF7\u6C42\u7684\u9519\u8BEF\u5BF9\u8C61</li><li>axios.CancelToken()\uFF1A\u7528\u4E8E\u521B\u5EFA\u53D6\u6D88\u8BF7\u6C42\u7684token\u5BF9\u8C61</li><li>axios.isCancel()\uFF1A\u662F\u5426\u662F\u4E00\u4E2A\u53D6\u6D88\u8BF7\u6C42\u7684\u9519\u8BEF</li><li>axios.all(promises)\uFF1A\u7528\u4E8E\u6279\u91CF\u6267\u884C\u591A\u4E2A\u5F02\u6B65\u8BF7\u6C42</li></ol></li></ol><h3 id="_4-axois-\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_4-axois-\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 4. axois \u6E90\u7801\u5206\u6790</h3><ol><li><p>axios\u548CAxios\u7684\u5173\u7CFB\uFF1F</p><ol><li>\u4ECE\u8BED\u6CD5\u4E0A\u6765\u8BF4\uFF1Aaxios\u4E0D\u662FAxios\u7684\u5B9E\u4F8B</li><li>\u4ECE\u529F\u80FD\u4E0A\u6765\u8BF4\uFF1Aaxios\u65F6Axios\u7684\u5B9E\u4F8B</li><li>axios\u65F6Axios.prototype.request\u51FD\u6570\u7684bind\u8FD4\u56DE\u7684\u51FD\u6570</li><li>axios\u4F5C\u4E3A\u5BF9\u8C61\u6709Axios\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u6709Axios\u5BF9\u8C61\u4E0A\u6240\u6709\u7684\u5C5E\u6027</li></ol></li><li><p>instance\u4E0Eaxios\u7684\u533A\u522B\uFF1F</p><ol><li>\u76F8\u540C\uFF1A <ol><li>\u90FD\u662F\u4E00\u4E2A\u80FD\u53D1\u4EFB\u610F\u8BF7\u6C42\u7684\u51FD\u6570\uFF1Arequest(config)</li><li>\u90FD\u6709\u53D1\u7279\u5B9A\u8BF7\u6C42\u7684\u5404\u79CD\u65B9\u6CD5\uFF1Aget()/post()/pull()/delete()</li><li>\u90FD\u6709\u9ED8\u8BA4\u914D\u7F6E\u548C\u62E6\u622A\u5668\u7684\u5C5E\u6027\uFF1Adefault/interceptor</li></ol></li><li>\u4E0D\u540C\uFF1A <ol><li>\u9ED8\u8BA4\u5339\u914D\u7684\u503C\u5F88\u53EF\u80FD\u4E0D\u4E00\u6837</li><li>instance\u6CA1\u6709axios\u540E\u9762\u6DFB\u52A0\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF1Acreate()/CancelToken()/all()</li></ol></li></ol></li><li><p>\u6D41\u7A0B\u56FE</p><p><img src="'+o+'" alt="\u6D41\u7A0B\u56FE"></p></li><li><p>\u6574\u4F53\u6D41\u7A0B</p><ol><li><p>request(config) ==&gt; dispatchRequest(config) ==&gt; xhrAdapter(config)</p></li><li><p>request(config)\uFF1A</p><p>\u5C06\u8BF7\u6C42\u62E6\u622A\u5668/dispatchRequest()/\u54CD\u5E94\u62E6\u622A\u5668 \u901A\u8FC7promise\u94FE\u4E32\u8054\u8D77\u6765\uFF0C\u8FD4\u56DEpromise</p></li><li><p>dispatchRequest(config)</p><p>\u8F6C\u6362\u8BF7\u6C42\u6570\u636E ==&gt; \u8C03\u7528xhrAdapter()\u53D1\u9001\u8BF7\u6C42 ==&gt; \u8BF7\u6C42\u8FD4\u56DE\u540E\u8F6C\u6362\u54CD\u5E94\u6570\u636E\uFF0C\u8FD4\u56DEpromis4</p></li><li><p>xhrAdapter(config)\uFF1A</p><p>\u521B\u5EFAXHR\u5BF9\u8C61\uFF0C\u6839\u636Econfig\u8FDB\u884C\u76F8\u5173\u8BBE\u7F6E\uFF0C\u53D1\u9001\u7279\u5B9A\u8BF7\u6C42\uFF0C\u5E76\u63A5\u6536\u54CD\u5E94\u6570\u636E\uFF0C\u8FD4\u56DEpromise</p></li></ol></li><li><p>axios\u7684\u8BF7\u6C42/\u54CD\u5E94\u62E6\u622A\u5668\u5DE5\u4F5C\u6D41\u7A0B</p><p><img src="'+r+'" alt="axios\u7684\u8BF7\u6C42/\u54CD\u5E94\u62E6\u622A\u5668\u5DE5\u4F5C\u6D41\u7A0B"></p><p>axios\u5229\u7528promise\u94FE\u7684\u7279\u70B9\uFF0C\u51C6\u5907\u4E00\u4E2A chain\u6570\u7EC4 \u9884\u5148\u5B58\u5165 dispathRequest, undefined\uFF0C\u5728\u8BF7\u6C42\u62E6\u622A\u5668\u4E2D\u6BCF\u6B21\u53D6\u51FA\u4E00\u4E2A fulfilled\u548Crejected \u51FD\u6570 \u653E\u5230 chain \u9996\u90E8\uFF0C\u5728\u54CD\u5E94\u62E6\u622A\u5668\u4E2D\u6BCF\u6B21\u53D6\u51FA\u4E00\u4E2A fulfilled\u548Crejected \u51FD\u6570\u653E\u5230chain \u5C3E\u90E8\uFF0C\u6240\u4EE5\u5BFC\u81F4\u8BF7\u6C42\u62E6\u622A\u5668\u540E\u7533\u660E\u7684\u5148\u88AB\u8C03\u7528\u3002</p><p>chain: [dispatchRequest, undefined] interceptors.request\uFF1A[{fulfilled1, rejected1}, {fulfilled2, rejected2}] interceptors.response\uFF1A[{fulfilledA, rejectedA}, {fulfilledB, rejectedB}] ===========&gt; chain\uFF1A[ fulfilled2, rejected2, fulfilled1, rejected1, dispatchRequest, undefined, fulfilledA, rejectedA, fulfilledB, rejectedB ]</p></li><li><p>\u5982\u4F55\u53D6\u6D88\u672A\u5B8C\u6210\u7684\u8BF7\u6C42\uFF1F</p><ol><li>\u5F53\u914D\u7F6E\u4E86cancelToken \u5BF9\u8C61\u65F6\uFF0C\u4FDD\u5B58cancel\u51FD\u6570 <ol><li>\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u5C06\u6765\u4E2D\u65AD\u8BF7\u6C42\u7684cancelPromise</li><li>\u5E76\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7528\u4E8E\u4E2D\u65AD\u8BF7\u6C42\u7684cancel\u51FD\u6570</li><li>\u5C06cancel\u51FD\u6570\u4F20\u9012\u51FA\u6765</li></ol></li><li>\u8C03\u7528cancel()\u53D6\u6D88\u8BF7\u6C42 <ol><li>\u6267\u884Ccancel\u51FD\u6570\uFF0C\u4F20\u5165\u9519\u8BEF\u4FE1\u606Fmessage</li><li>\u5185\u90E8\u4F1A\u8BA9cancelPromise\u53D8\u4E3A\u6210\u529F\uFF0C\u4E14\u6210\u529F\u7684\u503C\u4E3A\u4E00\u4E2ACancel\u5BF9\u8C61</li><li>\u5728cancelPromise\u7684\u6210\u529F\u56DE\u8C03\u4E2D\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u5E76\u8BA9\u53D1\u8BF7\u6C42\u7684promise\u5931\u8D25\uFF0C\u5931\u8D25\u7684reason\u4E3ACancel\u5BF9\u8C61</li></ol></li></ol></li></ol>',26),p=[d];function n(h,c){return l(),e("div",null,p)}var u=i(s,[["render",n],["__file","index.html.vue"]]);export{u as default};