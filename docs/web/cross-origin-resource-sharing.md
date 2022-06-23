# 跨源资源共享

> **跨源资源共享** (CORS) （或通俗地译为跨域资源共享）是一种基于`HTTP`头的机制，该机制通过允许服务器标示除了它自己以外的其它`origin`（域，协议和端口），这样浏览器可以访问加载这些资源。

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，XMLHttpRequest 和Fetch API遵循同源策略。 这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。

CORS请求失败会产生错误，但是为了安全，在JavaScript代码层面是无法获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。

## 什么情况下需要跨域CORS

+ XMLHttpRequest 或者 Fetch 发起的跨源HTTP请求。
+ CSS中通过 `@font-face`使用跨源字体资源。
+ WebGL贴图
+ 使用 `drawImage`将images/video 画面绘制到 canvas。

## 不同场景下的CORS

跨源资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。

下面介绍三种情况下的跨源资源共享的工作机制。

### 简单请求

简单请求不会触发 CORS 预检请求。

简单请求满足所有下列条件：

+ 使用下列方法之一：
  + `GET`
  + `POST`
  + `HEAD`
+ 请求首部字段中除了用户代理自动设置的（例如`Connection`，`User-Agent`），首部仅包含下列字段：
  + `Accept`
  + `Accept-Language`
  + `Content-Type`
  + `DPR`
  + `Downlink`
  + `Save-Data`
  + `Viewport-Width`
  + `Width`
+ `Content-Type`的值仅限于下列三者之一：
  + `text.plain`
  + `multipart/form-data`
  + `application/x-www-form-urlencoded`
+ 请求中的任意`XMLHttpRequestUpload`对象均没有任何时间监听器；`XMLHttpRequestUpload`对象可以使用`XMLHttpRequest.upload`属性访问。
+ 请求中没有使用`ReadabelStream`对象。

如果站点 <http://foo.example> 的网页应用想要访问 <http://bar.other> 的资源。<http://foo.example> 的网页中会包含类似下面的代码：

```javascript
const xhr = new XMLHttpRequest()
const url = 'http://bar.other/resources/public-data'

xhr.open('GET', url, true)
xhr.onreadystatechange = hander
xhr.send()
```

对于这种简单请求，根据请求中的`Origin`和响应中的`Access-Control-Allow-Origin`就能完成最简单的访问控制。

服务端返回 `Access-Control-Allow-Origin: *` 表明，该资源可以被**任意**外域访问。

如果服务端仅允许来自 <http://foo.example> 的访问，应设置首部字段为`Access-Control-Allow-Origin: http://foo.example`。现在，除了 <http://foo.example> 其它外域均不能访问该资源。

### 预检请求

对于需要预检的请求（不是简单请求），客户端首先会发送使用`OPTIONS`方法方法一个预检请求到服务器。

预检请求的首部同时携带两个首部字段：

+ `Access-Control-Request-Method` 告知服务器，实际请求将使用 Method 方法。
+ `Access-Control-Request-Headers` 告知服务器，实际请求将携带什么请求首部字段。

服务器据此决定，该实际请求是否被允许。返回预检请求的响应，并在响应头中添加以下首部字段：

+ `Access-Control-Allow-Origin`指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。
+ `Access-Control-Allow-Methods`首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。
+ `Access-Control-Allow-Headers`首部字段用于预检请求的响应。其指明了实际请求中允许携带的首部字段。
+ `Access-Control-Max-Age`：指定了preflight请求的结果能够被缓存多久

#### 预检请求的重定向

大多数浏览器不支持预检请求的重定向。如果一个预检请求发生了重定向，浏览器将报告错误：

> The request was redirected to 'https://example.com/foo', which is disallowed for cross-origin requests that require preflight

#### 附带身份凭证的请求

一般而言，对于跨源的 `XMLHttpRequest` 或者 Fetch 请求，浏览器不会发送身份凭证信息。如果需要发送凭证信息，需要设置 `XMLHttpRequest` 的某个特殊标志位。

```javascript
var xhr = new XMLHttpRequest()
var url = 'http://bar.other/resources/credentialed-content/'

xhr.open('GET', url, true)
xhr.withCredentials = true
xhr.onreadystatechange = handler
xhr.send()
```

将 `withCredentials`标志设置为`true`，从而向服务器发送 Cookies。但是，如果服务器相应中未携带 `Access-Control-Allow-Credentials: true`，浏览器将不会把响应内容返回给请求的发送者。

**对于附带身份凭证的请求，服务器不得设置 `Access-Control-Allow-Origin` 的值为 `*` 。**

#### Cookies

CORS 响应中设置 Cookies 使用一般性第三方 cookie 策略。

如果客户端允许第三方 cookie，从 A 域发送请求到 B 域，响应中的 cookie 会被写入对应的 B 域中。

发送的跨域请求中携带的 cookie 也是 B 域中的 cookie，不会读取到 A 域中的 cookie 添加到请求头中。
