# 浏览器下载文件

## 使用a标签的`download`属性

> 此属性指示浏览器下载 URL 而不是导航到它，因此将提示用户将其保存为本地文件。如果属性有一个值，那么此值将在下载保存过程中作为预填充的文件名（如果用户需要，仍然可以更改文件名）。此属性对允许的值没有限制，但是 `/` 和 `\` 会被转换为下划线。大多数文件系统限制了文件名中的标点符号，故此，浏览器将相应地调整建议的文件名。

```html
<a href="downloadURL" download>click me</a>
```

注意：

+ 此属性仅支持**同源URL**
+ 可以使用`blob:URL`和`data:URL`作为a标签`href`属性的值
+ HTTP头中的`Content-Disposition`属性的优先级大于该属性
+ 如果HTTP头中的`Content-Disposition`的值为`inline`,Firefox优先考虑`Content-Disposition`的值

浏览器兼容：

+ IE 不兼容
+ Edge >=18
+ Chrome >= 14
+ Firefox >=20

## window.location.href 或者 window.open

使用`window.open()`或者`location.href`或者直接使用\<a>标签将页面跳转到文件地址，如果文件时浏览器无法打开的文件类型，浏览器会自动下载该文件。

```
widow.location.href = "http://download.rar"
// 上述写法等同于
<a href="http://下载.rar">下载</a>
```

## 动态生成标签

在点击之后，在页面中通过js代码新建一个`a`表单元素，然后通过创建点击事件对文件进行下载。

```js
function downloadFile(name, href) {
    // 创建a标签
    const a = document.createElement('a')
    // 创建鼠标事件
    const e = document.createEvent('MouseEvents')
    // 初始化鼠标事件
    // 三个参数分别对应 事件类型 是否向上冒泡 该事件的默认行为是否可以被取消
    e.initEvent('click', false, false)
    // 设置下载地址
    a.href = href
	// 设置下载文件名
    a.download = name
    // 给指定的元素，执行事件click事件
    a.dispatchEvent(e)
}
```

## Content-Disposition

在http请求头部添加字段`Content-Disposition: attachment;filename="filename.jpg"`

> 在常规的 HTTP 应答中，`Content-Disposition` 响应头指示回复的内容该以何种形式展示，是以**内联**的形式（即网页或者页面的一部分），还是以**附件**的形式下载并保存到本地。
>
> 在 multipart/form-data 类型的应答消息体中，**`Content-Disposition`** 消息头可以被用在 multipart 消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在[`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) 中定义的**分隔符**分隔。用在消息体自身则无实际意义。

### 语法

#### 作为消息主题中的消息头

在 HTTP 场景中，第一个参数或者是 `inline`（默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示），或者是 `attachment`（意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，将 `filename` 的值预填为下载后的文件名，假如它存在的话）。

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

#### 作为multipart body中的消息头

在 HTTP 场景中。第一个参数总是固定不变的 `form-data`；附加的参数不区分大小写，并且拥有参数值，参数名与参数值用等号(`'='`)连接，参数值用双引号括起来。参数之间用分号(`';'`)分隔。

```http
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```



