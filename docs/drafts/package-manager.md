# 包管理工具

## npm

npm 是和 node 绑定的，安装 node 时，默认就会安装对应版本的 npm。

npm v1～v2 时期使用的是嵌套关系的 node_modules 的文件目录结构。

npm v1~v2主要存在下面的问题：

1. 由于在 windows 上存在文件路径长度的限制，当嵌套层级过深时会导致依赖的安装失败。

2. 如果指定的包依赖同一个第三方包，会导致安装依赖时出现不确定性。比如 A 模块和 B 模块都依赖与 C 模块，那么最终 C 模块被安装的版本取决于模块 A 和模块 B 哪个先被解析。

对于第一点，npm3 之后会将所有的依赖拍平，即 flat node_modules，也就是 C 模块会安装在项目根目录下的 node_modules 下，但是这样做也同样引人了一个问题，就是 node_modules 下会存在用户没有声明的依赖文件，这些依赖文件可能是第三方模块的依赖。

对于第二点，npm5 之后引入了 package-lock.json 文件来安装依赖时不确定性的问题。

## yarn classic / yarn v1

yarn v1 的出现主要是为了解决 npm 安装的不确定性问题。yarn 默认使用 yarn-lock 文件来保证依赖安装的一致性。

除此之外 yarn 还有一些新的特性对安装过程进行了优化，提高了安装速度。这些优化后面版本的 npm 也有添加。

+ 离线模式
+ 并发请求下载依赖
+ 和 npm 一样的 flat node_modules
+ 原生 monorepo 支持

## pnpm

pnpm 是新的包管理器。它主要有以下特点：

1. 基于链接的依赖组织方式。

    项目中的依赖将会以链接的方式存储，根目录下的 node_modules 下只会存在用户声明的依赖。通过软链接的形式指向根目录下的 /node_modules/.pnpm 中对应的文件夹，.pnpm 中的文件又会通过硬链接指向 pnpm 仓库中，这样做节约了磁盘的空间。
  
2. 基于内容寻址的文件存储方式。

    和 Git 类似，将内容压缩并通过 hash 值的方式存放在不同的文件夹下。这样做的好处是，如果同一个依赖的不同版本之间只改动了某些文件时，可以只改变这些修改文件的指向，其他没有修改的文件则不需要重新下载一份。节约了磁盘的空间。

pnpm 的不足：

1. pnpm 不支持 package-lock.json 和 yarn.lock 文件。
2. node_modules 下的 .bin 文件夹下的文件都将是 sh 脚本，而不是指向 JS 文件的符号链接。

## yarn v2

使用 PnP 模式来管理 node 依赖。核心是直接告诉 node 对应依赖的存储位置，而不是拷贝到项目的 node_modules 文件夹下。这可能会要求开发者修改自己的包来兼容 yarn v2。