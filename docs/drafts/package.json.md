# package.json

package.json 必须是一个 JSON 文件，而不是一个 JavaScript 对象。

## name

如果你想要发布你的 npm package，那么 name 和 version 字段是必须的。如果不需要发布的话，这个字段就是可选的。

name 字段有下列规则：

+ 必须小于等于 214 个字符。包括 scoped packages。
+ scoped packages 可以以点或者下划线开头。非 scoped packages 则禁止使用点或者下划线开头。
+ name 字段中不能包含大写字母。
+ name 中不能包含使 url 不安全的字符。

一些建议：
+ 不要使用和 node 核心模块一样的 name
+ 不要包含 js 或者 node 等字样。因为当你开始写 package.json 时，就假定该模块是一个 js 模块了。
+ 包名尽量要简短易懂
+ 最好首先访问下 https://www.npmjs.com/ 看下是否有重名的已经发布的包。

名字可以以作用域开头，类似于 `@myorg/mypackage`。

## version

name 和 version 字段唯一确定了某个模块。对包修改的同时需要修改 version 字段。如果不需要发布的话，这个字段就是可选的。

version 必须是可以被 [node-semver](https://github.com/npm/node-semver) 解析的。

## description

放置描述信息。必须是一个字符串。帮助别人发现你的包，并且会出现在 npm search 的列表中。

## keywords

放置关键字。一个字符串数组。帮助别人发现你的包，并且会出现在 npm search 的列表中。

## homepage

首页的 url

```json
{
  "homepage": "https://github.com/owner/project#readme"
}
```

## bugs

您的项目问题跟踪器的URL和/或应报告问题的电子邮件地址。这些对遇到问题的人有帮助。

它应该如下所示：

```json
{
  "url" : "https://github.com/owner/project/issues",
  "email" : "project@hostname.com"
}
```

您可以指定一个或两个值。如果要仅提供URL，则可以将 bugs 的值指定为简单的字符串而不是对象。

如果提供了URL，则 `npm bugs` 命令将使用它。

## license

您应该为您的包指定许可证，以便人们知道如何使用它们，以及您放置的任何限制。

如果您使用的是 BSD-2-Clause 或 MIT 等公共许可，请为您使用的许可证添加当前 SPDX 许可证标识符，如下所示：

```json
{
  "license" : "BSD-3-Clause"
}
```

您可以查看 [SPDX许可证ID的完整列表](https://spdx.org/licenses/)。理想情况下，您应该选择一个 OSI 批准的。

如果您的包使用多个通用许可证，请使用[SPDX许可证表达式语法版本2.0](https://www.npmjs.com/package/spdx)，如下所示:

```json
{
  "license" : "(ISC OR GPL-3.0)"
}
```

如果您使用尚未分配SPDX标识符的许可证，或者您使用的是使用自定义许可证，请使用像这样的字符串值：

```json
{
  "license" : "SEE LICENSE IN <filename>"
}
```

然后在包的顶层中包含名为`<filename>`的文件。

有些旧软件包使用许可证对象或 licenses 属性，其中包含许可证对象数组：

```json
// Not valid metadata
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}

// Not valid metadata
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
```

上述的格式已经弃用了，需要用 SPDX 表达式，像下面这样：

```json
{
  "license": "ISC"
}
```

```json
{
  "license": "(MIT OR Apache-2.0)"
}
```

最后，如果您不希望授予其他人在任何条款下使用私人或未发布包的权利：

```json
{
  "license": "UNLICENSED"
}
```
还要考虑设置 `"private": true` 以防止意外发布。

## author 和 contributors

author 字段是一个 person 对象。 contributors 是一个 person 数组。一个 person 对象包含一个 name 字段，和可选的 url 和 email 字段，如下所示：

```json
{
  "name" : "Barney Rubble",
  "email" : "b@rubble.com",
  "url" : "http://barnyrubble.tumblr.com/"
}
```

或者你可以简写成一个字符串，npm 会为你解析该字符串。

```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```

两种方式下的 email 和 url 字段都是可选的。

## funding

你可以指定一个包含帮助资助你的包的最新信息 URl 的对象，或者是一个 URL 字符串，或者是一个数组。如下所示：

```json
{
  "funding": {
    "type" : "individual",
    "url" : "http://example.com/donate"
  },

  "funding": {
    "type" : "patreon",
    "url" : "https://www.patreon.com/my-account"
  },

  "funding": "http://example.com/donate",

  "funding": [
    {
      "type" : "individual",
      "url" : "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type" : "patreon",
      "url" : "https://www.patreon.com/my-account"
    }
  ]
}
```

用户可以使用 `npm fund`c子命令列出他们项目的所有依赖项的投资curl，直接的和间接的。

当提供项目名称时，访问每个资助url的快捷方式也是可用的，比如: `npm fund <projectname>` (当有多个url时，将访问第一个)

## files

可选参数 files 字段是一个文件正则数组，该数组描述当你的包作为依赖(dependency)被引入时，包含哪些文件。文件正则(file patterns)使用和 gitignore 一样的语法，但相反：包含文件、目录或 glob 模式（*、**/* 等）将使文件在打包时包含在 tarball 中。省略该字段将使其默认为 `["*"]`，这意味着它将包括所有文件。


一些特殊的文件和目录也被包含或排除，无论它们是否存在于 files 数组中（见下文）。

您还可以在包的根目录或子目录中提供一个 `.npmignore` 文件，这样可以防止文件被包含在内。 在你的包的根目录它不会覆盖“文件”字段，但在子目录中它会。 `.npmignore` 文件就像 `.gitignore` 一样工作。 如果有 .gitignore 文件，而 `.npmignore` 缺失，则将使用 `.gitignore` 的内容。

`package.json#files` 字段中包含的文件不能通过 `.npmignore` 或 `.gitignore` 排除。

无论设置如何，始终包含某些文件：

+ package.json
+ README
+ LICENSE / LICENCE
+ main 字段中指定的文件

README 和 LICENSE 可以有任何大小写和扩展名。

相反，某些文件总是被忽略：

+ .git
+ CVS
+ .svn
+ .hg
+ .lock-wscript
+ .wafpickle-N
+ .*.swp
+ .DS_Store
+ ._*
+ npm-debug.log
+ .npmrc
+ node_modules
+ config.gypi
+ *.orig
+ package-lock.json（如果您希望发布，请使用[npm-shrinkwrap.json](https://docs.npmjs.com/cli/v8/configuring-npm/npm-shrinkwrap-json)）

## main

main 字段是模块 ID，它是程序的主要入口点。 也就是说，如果您的包名为 foo，并且用户安装了它，然后执行了 require("foo")，那么您的主模块的导出对象将被返回。

这应该是相对于包文件夹根目录的模块。

对于大多数模块来说，拥有一个主脚本是最有意义的，而其他的通常不多。

如果 main 未设置，则默认为包根文件夹中的 index.js。

## browser

如果您的模块打算在客户端使用，则应使用 browser 字段而不是 main 字段。 这有助于提示用户它可能依赖于 Node.js 模块中不可用的原语。 （例如 window）

## bin

许多软件包都有一个或多个可执行文件，他们希望将自己安装到 PATH 中。 npm 使这非常容易（事实上，它们使用此功能来安装 "npm" 可执行文件。）

要使用它，请在 package.json 中提供一个 bin 字段，该字段是命令名称到本地文件名的映射。 当全局安装此软件包时，该文件将链接到全局 bin 所在的位置，以便它可以按名称运行。 当此包作为依赖项安装在另一个包中时，该文件将被链接到该包可以直接通过 npm exec 或通过 npm run-script 调用它们时在其他脚本中的名称。

例如， myapp 可能有这个：

```json
{
  "bin": {
    "myapp": "./cli.js"
  }
}
```

当你安装 myapp 后，会在 cli.js 和 /usr/local/bin/myapp 之间创建一个连接。

如果您有一个可执行文件，并且它的名称应该是包的名称，那么您可以将其作为字符串提供。 例如：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
```

这和下面是一样的：

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

请确保 bin 字段引用的文件以 `#!/usr/bin/env node` 开头，否则这些脚本不会被 node 执行。

请注意，您还可以使用 [directories.bin](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#directoriesbin) 设置可执行文件。

有关可执行文件的更多信息，请参阅 [folders](https://docs.npmjs.com/cli/v8/configuring-npm/folders#executables)。

## man

指定单个文件或文件名数组以供 man 程序查找。

如果只提供了一个文件，那么无论它的实际文件名如何，它都会被视为 `man <pkgname>` 的结果。例如：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

将链接 ./man/doc.1 文件，使其成为 man foo 的目标

如果文件名不以包名开头，那么它就是前缀。 所以下面这个：

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": [
    "./man/foo.1",
    "./man/bar.1"
  ]
}
```

将会创建为 `man foo` 和 `man foo-bar`  创建文件。

man 文件必须以一个数字结尾，如果是压缩的，还可以使用 .gz 后缀。这个数字指示文件安装到哪个 man 部分。

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": [
    "./man/foo.1",
    "./man/foo.2"
  ]
}
```

上面的例子将会为 man foo  和 man 2 foo 创建入口。

## directories

CommonJS 包规范详细介绍了几种使用目录对象指示包结构的方法。 如果您查看 npm 的 package.json，您会看到它包含 doc、lib 和 man 的目录。

将来，这些信息可能会以其他创造性的方式使用。

### directories.bin

如果您在directories.bin 中指定一个bin 目录，则该文件夹中的所有文件都将被添加。

由于 bin 指令的工作方式，同时指定 bin 路径和设置 directory.bin 是错误的。 如果要指定单个文件，请使用 bin，对于现有目录中的所有文件，请使用 directories.bin。

### directories.man

一个充满手册页的文件夹。 Sugar 通过遍历文件夹来生成一个 man 数组。

## repository

指定代码所在的位置。 这对想要贡献的人很有帮助。 如果 git repo 在 GitHub 上，那么 npm docs 命令将能够找到您。

像这样做：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git"
  }
}
```

该 URL 应该是一个公开的（可能是只读的）URL，可以直接交给 VCS 程序而无需任何修改。 它不应该是您放在浏览器中的 html 项目页面的 url。 是给电脑用的。

对于 GitHub、GitHub gist、Bitbucket 或 GitLab 存储库，您可以使用与 npm install 相同的快捷方式语法：

```json
{
  "repository": "npm/npm",

  "repository": "github:user/repo",

  "repository": "gist:11081aaa281",

  "repository": "bitbucket:user/repo",

  "repository": "gitlab:user/repo"
}
```

如果你的包的 package.json 不在根目录中（例如，如果它是 monorepo 的一部分），你可以指定它所在的目录：

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

## scripts

scripts 属性是一个字典，其中包含在包生命周期的不同时间运行的脚本命令。 键是生命周期事件，值是要在该点运行的命令。

请参阅 [scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) 以了解有关编写包脚本的更多信息。

## config

config 对象可用于设置在升级后持续存在的包脚本中使用的配置参数。 例如，如果一个包有以下内容：

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

它还可以有一个引用 npm_package_config 端口环境变量的 start 命令。

## dependencies

依赖关系在一个简单的对象中指定，该对象将包名称映射到版本范围。 版本范围是一个字符串，它具有一个或多个空格分隔的描述符。 依赖关系也可以使用 tarball 或 git URL 来标识。

请不要将测试工具或转译器或其他“开发”时间工具放在您的依赖项对象中。 请参阅下面的 devDependencies。

有关指定版本范围的更多详细信息，请参阅 semver。

+ `version`       必须完全匹配版本
+ `>version`      必须大于指定版本
+ `>=version`
+ `<version`
+ `<=version`
+ `~version`      如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
+ `^version`      只会执行不更改最左边非零数字的更新。 如果写入的是 ^0.13.0，则当运行 npm update 时，可以更新到 0.13.1、0.13.2 等，但不能更新到 0.14.0 或更高版本。 如果写入的是 ^1.13.0，则当运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。
+ `v - v`         接受一定范围的版本。例如：2.1.0 - 2.6.2。
+ `v || v`        组合集合。例如 < 2.1 || > 2.6。
+ `1.2.x`         .2.0, 1.2.1, etc., 但不会到 1.3.0
+ `http://...`    请参阅下面的"作为依赖项的 URL"
+ `*`             匹配任何版本
+ `""`            (只是一个空字符串) 同 *
+ `git...`        请参阅下面的"Git URL 作为依赖项"
+ `user/repo`     请参阅下面的"GitHub URL"
+ `tag`           标记并发布为 tag 的特定版本参见 npm dist-tag
+ `path/path`     请参阅下面的本地路径

例如，这些都是有效的：

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

### URLs as Dependencies

您可以指定一个 tarball URL 来代替版本范围。

此 tarball 将在安装时下载并本地安装到您的包中。

### Git URLs as Dependencies

Git url 的格式为：

```
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

`<protocol>`是git, git+ssh, git+http, git+https, 或 git+file

如果 `#<commit-ish>` 提供，它将用于准确克隆该提交。如果 commit-ish 的格式为 `#semver:<semver>`, `<semver>` 可以是任何有效的 semver 范围或确切版本，npm 将在远程存储库中查找与该范围匹配的任何标签或引用，就像它查找注册表依赖项一样。如果既没有指定 `#<commit-ish>`or ，则使用 then 。`#semver:<semver>`master

例子：

```
git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27
```

### GitHub URLs

从 1.1.65 版开始，您可以将 GitHub 网址称为“foo”：“user/foo-project”。 与 git URL 一样，可以包含 commit-ish 后缀。 例如：

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature\/branch"
  }
}
```

### Local Paths

从 2.0.0 版开始，您可以提供包含包的本地目录的路径。 可以使用 npm install -S 或 npm install --save 保存本地路径，使用以下任何一种形式：

```
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

在这种情况下，它们将被规范化为相对路径并添加到您的 package.json 中。 例如：

```
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

此功能有助于本地离线开发和创建需要 npm 安装的测试，您不想访问外部服务器，但不应在将包发布到公共注册表时使用。

注意：在这种情况下运行 npm install 时，通过本地路径链接的包不会安装它们自己的依赖项。 您必须从本地路径本身运行 npm install。

## devDependencies

如果有人计划在他们的程序中下载和使用您的模块，那么他们可能不希望或不需要下载和构建您使用的外部测试或文档框架。

在这种情况下，最好将这些附加项映射到 devDependencies 对象中。

这些东西将在从包的根目录执行 npm link 或 npm install 时安装，并且可以像任何其他 npm 配置参数一样进行管理。 有关该主题的更多信息，请参阅配置。

对于不特定于平台的构建步骤，例如将 CoffeeScript 或其他语言编译为 JavaScript，请使用 prepare script 来执行此操作，并将所需的包设置为 devDependency。

例如：

```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

prepare script 将在发布之前运行，以便用户可以使用该功能而无需他们自己编译。 在开发模式下（即本地运行 npm install），它也会运行此脚本，以便您轻松测试它。

## peerDependencies

这里定义的依赖的含义是：如果你安装了本包，推荐你也安装这些包：

例如：

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

这确保了您的包 tea-latte 只能与主机包 tea 的第二个主要版本一起安装。 npm install tea-latte 可能会产生以下依赖关系图：

```
├── tea-latte@1.3.5
└── tea@2.2.0
```

## peerDependenciesMeta

当用户安装你的包时，如果在 peerDependencies 指定的包还没有安装，npm 将发出警告。peerDependenciesMeta 字段为 npm 提供了更多关于你的对等依赖如何被使用的信息。具体来说，它允许将对等依赖项标记为可选的。

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x",
    "soy-milk": "1.2"
  },
  "peerDependenciesMeta": {
    "soy-milk": {
      "optional": true
    }
  }
}
```

将对等依赖标记为可选可以确保如果没有在主机上安装 soy-milk ，npm 不会发出警告。这允许您集成各种主机软件包并与之交互，而不需要将它们全部安装。

## bundledDependencies

这定义了一系列包名，它们在发布时会被打包。如果你需要在本地保存 npm 包或通过单个文件下载它们，你可以通过在 bundledDependencies 数组中指定包名并执行 npm pack 来将这些包打包到 tarball 文件中。例如，如果我们定义一个 package.json 是这样的：

```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundledDependencies": [
    "renderized",
    "super-streams"
  ]
}
```

我们可以通过运行 NPM Pack 获得 Awesome-Web-Framework-1.0.0.0.tgz 文件。这个文件包含了依赖项 renderized 和 super-streams，并且可以通过执行 npm install awesome-web-framework-1.0.0.tgz 安装到新项目中。注意，包名不包含任何版本信息，因为该信息是在 dependencies 中指定的。

如果使用 bundleDependencies 效果是一样的。

## optionalDependencies

如果你想要 npm 在安装依赖时找不到包时继续安装。你可以将依赖写在 optionalDependencies 中。对象的结构和 dependencies 一致，key 是包名，value 是包版本或者地址。不同是的安装依赖时的错误不会导致安装失败。运行 npm install ——no-optional 将阻止这些依赖被安装。

你的程序中应该处理依赖不存在的情况，像下面这样：

```js
try {
  var foo = require('foo')
  var fooVersion = require('foo/package.json').version
} catch (er) {
  foo = null
}
if ( notGoodFooVersion(fooVersion) ) {
  foo = null
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings()
}
```

optionalDependencies 中的配置会覆盖 dependencies。所以你最好确保依赖只存在于一处。

## engines

你可以指定项目的运行环境

```json
{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}
```

和 dependencies 一样，如果不指定版本，或者使用 “*” 代替则表示所有的版本都可用。

你也可以使用"engines"字段来指定哪个版本的 npm 能够正确安装你的程序。例如

```json
{
  "engines": {
    "npm": "~1.0.20"
  }
}
```

除非用户设置了 engine-strict 配置标志，否则此字段仅为建议字段，只有当包作为依赖项安装时才会产生警告。

## os

您可以指定您的模块将运行在哪些操作系统上

```json
{
  "os": [
    "darwin",
    "linux"
  ]
}
```

你也可以阻止而不是允许操作系统，只是在被阻止的os前面加上一个'!'

```json
{
  "os": [
    "!win32"
  ]
}
```

主机操作系统由 process.platform 决定。它允许同时阻止和允许一个条目，但是最好别这样做。

## cpu

如果你的代码只运行在某些cpu架构上，你可以指定是哪些架构。

```json
{
  "cpu": [
    "x64",
    "ia32"
  ]
}
```

和 os 选项一样，你可以指定不在哪些 cpu 架构上运行

```json
{
  "cpu": [
    "!arm",
    "!mips"
  ]
}
```

主机架构由 process.arch 决定

## private

如果在 package.json 中指定了 private: false ，npm 会阻止你推送该包。

这是一种防止意外发布私有存储库的方法。如果您希望确保给定的包只发布到特定的仓库(例如，内部仓库)，那么使用下面描述的 publishConfig 字典在发布时覆盖注册表配置参数。

## publishConfig

这是将在发布时使用的一组配置值。在设置 tag 、registry 或 access时，它特别方便。这样你可以确保给定的包没有标记为“latest”，没有发布到公告仓库，或者有作用域的模块。

请参见[config](https://docs.npmjs.com/cli/v7/using-npm/config)查看可被重写的配置选项列表。

## workspaces

可选的 workspace 字段是一个 file pattern 数组，描述在本地文件系统中的位置，安装客户端应该查找每个工作去，并将每个工作区的依赖链接至顶层的 node_modules 下。

可以使用相对路径和绝对路径定义工作空间。

## 默认值

+ "scripts": {"start": "node server.js"}

+ "scripts":{"install": "node-gyp rebuild"}

+ "contributors": [...]

  如果在根目录下存在 AUTHORS 文件的话，npm 将把每一行作为 `Name <email> (url)` 格式处理，其中 email 和 url 是可选的。以 # 开头或为空的行将被忽略。