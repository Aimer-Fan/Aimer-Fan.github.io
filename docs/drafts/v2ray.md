# 使用 v2Ray 搭建 VPS

## 部署之前

### 时间是否准确

V2Ray 对于时间有比较严格的要求，要求服务器和客户端时间差绝对值不能超过90 秒，所以一定要保证时间足够准确。还好 V2Ray 并不要求时区一致。比如说自个儿电脑上的时间是北京时间（东 8 区）2017-07-31 12:08:31，但是 VPS 上的时区是东 9 区，所以 VPS 上的时间应该是 2017-07-31 13:07:01 到 2017-07-31 13:10:01 之间才能正常使用 V2Ray。当然，也可以自行改成自己想要的时区。

### 时间校验

对于 V2Ray，它的验证方式包含时间，就算是配置没有任何问题，如果时间不正确，也无法连接 V2Ray 服务器的，服务器会认为你这是不合法的请求。所以系统时间一定要正确，只要保证时间误差在90 秒之内就没问题。

对于 VPS(Linux) 可以执行命令 `date -R` 查看时间：

```bash
$ date -R
Sun, 22 Jan 2017 10:10:36 -0500
```
输出结果中的 -0500 代表的是时区为西 5 区，如果转换成东 8 区时间则为 2017-01-22 23:10:36。

如果时间不准确，可以使用 date --set 修改时间：

```bash
$ sudo date --set="2017-01-22 16:16:23"
Sun 22 Jan 16:16:23 GMT 2017
```

如果你的服务器架构是 OpenVZ，那么使用上面的命令有可能修改不了时间，直接发工单联系 VPS 提供商的客服吧，就说你在 VPS 上运行的服务对时间有要求，要他们提供可行的修改系统时间的方法。

对 VPS 的时间校准之后接着是个人电脑，如何修改电脑上的时间我想不必我多说了。

无论是 VPS 还是个人电脑，时区是什么无所谓，因为 V2Ray 会自动转换时区，但是时间一定要准确。

## 安装

### 下载安装脚本

```bash
$ curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
100 21613  100 21613    0     0   8732      0  0:00:02  0:00:02 --:--:--  8736
```

### 执行安装

```bash
$ bash install-release.sh
Downloading V2Ray archive: https://github.com/v2fly/v2ray-core/releases/download/v4.27.0/v2ray-linux-64.zip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100   631  100   631    0     0    331      0  0:00:01  0:00:01 --:--:--   331
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
100 12.2M  100 12.2M    0     0   841k      0  0:00:14  0:00:14 --:--:-- 1899k
Downloading verification file for V2Ray archive: https://github.com/v2fly/v2ray-core/releases/download/v4.27.0/v2ray-linux-64.zip.dgst
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100   636  100   636    0     0    294      0  0:00:02  0:00:02 --:--:--   295
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
100   590  100   590    0     0    133      0  0:00:04  0:00:04 --:--:--   282
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Suggested packages:
  zip
The following NEW packages will be installed:
  unzip
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 172 kB of archives.
After this operation, 580 kB of additional disk space will be used.
Get:1 http://mirrors.163.com/debian buster/main amd64 unzip amd64 6.0-23+deb10u1 [172 kB]
Fetched 172 kB in 1s (173 kB/s)   
Selecting previously unselected package unzip.
(Reading database ... 31383 files and directories currently installed.)
Preparing to unpack .../unzip_6.0-23+deb10u1_amd64.deb ...
Unpacking unzip (6.0-23+deb10u1) ...
Setting up unzip (6.0-23+deb10u1) ...
Processing triggers for mime-support (3.62) ...
Processing triggers for man-db (2.8.5-2) ...
info: unzip is installed.
info: Extract the V2Ray package to /tmp/tmp.vk9AF2EqKA/ and prepare it for installation.
installed: /usr/local/bin/v2ray
installed: /usr/local/bin/v2ctl
installed: /usr/local/share/v2ray/geoip.dat
installed: /usr/local/share/v2ray/geosite.dat
installed: /usr/local/etc/v2ray/00_log.json
installed: /usr/local/etc/v2ray/01_api.json
installed: /usr/local/etc/v2ray/02_dns.json
installed: /usr/local/etc/v2ray/03_routing.json
installed: /usr/local/etc/v2ray/04_policy.json
installed: /usr/local/etc/v2ray/05_inbounds.json
installed: /usr/local/etc/v2ray/06_outbounds.json
installed: /usr/local/etc/v2ray/07_transport.json
installed: /usr/local/etc/v2ray/08_stats.json
installed: /usr/local/etc/v2ray/09_reverse.json
installed: /var/log/v2ray/
installed: /var/log/v2ray/access.log
installed: /var/log/v2ray/error.log
installed: /etc/systemd/system/v2ray.service
installed: /etc/systemd/system/v2ray@.service
removed: /tmp/tmp.vk9AF2EqKA/
info: V2Ray v4.27.0 is installed.
You may need to execute a command to remove dependent software: apt remove curl unzip
Please execute the command: systemctl enable v2ray; systemctl start v2ray
```

看到类似于这样的提示就算安装成功了。如果安装不成功脚本会有提示语句，这个时候你应当按照提示除错，除错后再重新执行一遍脚本安装 V2Ray。对于错误提示如果看不懂，使用翻译软件翻译一下就好。

运行
安装完之后，使用以下命令启动 V2Ray:

```bash
$ systemctl start v2ray
```
在首次安装完成之后，V2Ray 不会自动启动，需要手动运行上述启动命令。

设置开机自启动 V2Ray:

```bash
$ systemctl enable v2ray
```

接下来看看 V2ray 是不是真的运行起来了:

```bash
$ systemctl status v2ray
● v2ray.service - V2Ray Service
   Loaded: loaded (/etc/systemd/system/v2ray.service; disabled; vendor preset: enabled)
   Active: active (running) since Sun 2020-08-16 23:17:13 CST; 41min ago
 Main PID: 1984 (v2ray)
    Tasks: 6 (limit: 2359)
   Memory: 6.9M
   CGroup: /system.slice/v2ray.service
           └─1984 /usr/local/bin/v2ray -confdir /usr/local/etc/v2ray/

Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/01_api.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/02_dns.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/03_routing.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/04_policy.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/05_inbounds.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/06_outbounds.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/07_transport.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/08_stats.json
Aug 16 23:17:13 debian v2ray[1984]: v2ctl> Read config:  /usr/local/etc/v2ray/09_reverse.json
Aug 16 23:17:13 debian v2ray[1984]: 2020/08/16 23:17:13 [Warning] v2ray.com/core: V2Ray 4.27.0 start
lines 1-19/19 (END)
```
看到类似于这样的提示就算启动成功了。

但是由于此时你还没有为 V2ray 配置，所以咱们还是把它关掉吧：

```bash
$ systemctl stop v2ray
```
对于安装脚本，还有更多用法，在此不多说了，可以执行 bash install-release.sh -h 看帮助。

### 客户端安装
点[这里](https://github.com/v2fly/v2ray-core/releases)下载 V2Ray 的 Windows 压缩包，如果是 32 位系统，下载 v2ray-windows-32.zip，如果是 64 位系统，下载 v2ray-windows-64.zip（下载速度慢或无法下载请考虑挂已有的翻墙软件来下载）。下载并且解压之后会有下面这些文件：

+ v2ray.exe 运行 V2Ray 的程序文件
+ wv2ray.exe 同 v2ray.exe，区别在于 wv2ray.exe 是后台运行的，不像 v2ray.exe 会有类似于 cmd 控制台的窗口。运行 V2Ray 时从 v2ray.exe 和 wv2ray.exe 中任选一个即可
+ config.json V2Ray 的配置文件，后面我们对 V2Ray 进行配置其实就是修改这个文件
+ v2ctl.exe V2Ray 的工具，有多种功能，除特殊用途外，一般由 v2ray.exe 来调用，用户不用太关心
+ geosite.dat 用于路由的域名文件
+ geoip.dat 用于路由的 IP 文件
+ 其它 除上面的提到文件外，其他的不是运行 V2Ray 的必要文件。更详细的说明可以看 doc 文件夹下的 readme.md 文件，可以通过记事本或其它的文本编辑器打开查看

实际上双击 v2ray.exe （或 wv2ray.exe） 就可以运行 V2Ray 了，V2Ray 会读取 config.json 中的配置与服务器连接。

## VMess

### 客户端配置

```json5
{
  "inbounds": [
    {
      "port": 1080, // 监听端口
      "protocol": "socks", // 入口协议为 SOCKS 5
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      },
      "settings": {
        "auth": "noauth"  //socks的认证设置，noauth 代表不认证，由于 socks 通常在客户端使用，所以这里不认证
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess", // 出口协议
      "settings": {
        "vnext": [
          {
            "address": "serveraddr.com", // 服务器地址，请修改为你自己的服务器 IP 或域名
            "port": 16823,  // 服务器端口
            "users": [
              {
                "id": "b831381d-6324-4d53-ad4f-8cda48b30811",  // 用户 ID，必须与服务器端配置相同
                "alterId": 0 // 此处的值也应当与服务器相同
              }
            ]
          }
        ]
      }
    }
  ]
}
```

### 服务端配置
```json5
{
  "inbounds": [
    {
      "port": 16823, // 服务器监听端口
      "protocol": "vmess",    // 主传入协议
      "settings": {
        "clients": [
          {
            "id": "b831381d-6324-4d53-ad4f-8cda48b30811",  // 用户 ID，客户端与服务器必须相同
            "alterId": 0
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",  // 主传出协议
      "settings": {}
    }
  ]
}
```