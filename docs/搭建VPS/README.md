# 一键搭建VPS

```shell
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```

## 开启BBR阻塞控制算法

```shell
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

### 查看BBR是否开启成功

```shell
sysctl net.ipv4.tcp_available_congestion_control

# => net.ipv4.tcp_available_congestion_control = reno cubic bbr
```
