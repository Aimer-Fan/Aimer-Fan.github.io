### Shell 子串的用法

```bash
${VAR}                      返回变量的值
${#VAR}                     返回变量的长度

# 截取字符串
${VAR:startIndex}           从 startIndex 开始截取字符串
${VAR:startIndex:length}    从 startIndex 开始截取长度为 length 的字符串

# 删除
# word 支持通配符 a*c
${VAR#word}                 从字符串开始删除最短匹配的 word 子串
${VAR##word}                从字符串开始删除最长匹配的 word 子串
${VAR%word}                 从字符串结尾删除最短匹配的 word 子串
${VAR%%word}                从字符串结尾删除最长匹配的 word 子串

# 替换
${VAR/pattern/string}       用 string 替换第一个匹配的 pattern
${VAR//pattern/string}      用 string 替换所有匹配的 pattern
```

### 统计变量子串的长度方法

```bash
# 统计字符串的行数
echo $name | wc -l
# 统计字符串中最长的一行中的元素个数
echo $name | wc - L

# 利用数值计算 expr 命令
expr length "${name}"

# awk 统计长度，length 函数
echo "${name}" | awk '{print length($0)}'

# 最快的统计方式
echo ${#name}
```

### 特殊 shell 扩展变量

```bash
# 如果 parameter 变量值为空，返回 word 字符串，赋值给 result
result=${parameter:-word}

# 如果 parameter 变量值为空，则 word 替代变量值，且返回其值
result=${parameter:=word}

# 如果 parameter 变量值为空，word 当作 stderr 输出，否则输出变量值
# 用于设置变量为空导致错误时，返回的错误信息
result=${parameter:?word}

# 如果 parameter 变量值为空，什么都不做，否则 word 返回
result=${parameter:+word}
```

### 内置命令、外置命令

内置命令：在系统启动时就加载到内存，常驻内存，执行效率高，但是占用资源

外置命令：系统需要从磁盘上读取的程序文件，再读入内存

> 可以通过 type 命令可以验证时内置、外置命令

外置命令的特点：一定会开启子进程执行。

```bash
# 查看所有的内置命令
compgen -b
```

## Shell 脚本开发

### Shell 数值计算

