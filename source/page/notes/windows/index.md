---
layout: page 
title: Windows 软件列表 
sidebar: [wiki-hexo-theme,music, toc] 
top_meta: [] 
bottom_meta: [] 
date: 2020/09/26 
updated: 2020/09/26 
sitemap: false
---
 
> *重装系统前的备份列表* 
 
## 一、基础软件 
 
- 密码：[1Password for Windows](https://1password.com/zh-cn/downloads/windows/) 
- 代理：[Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg/releases) 
- 下载器：[IDM](https://www.internetdownloadmanager.com/) 
- 浏览器：[Chrome](https://www.google.com/intl/zh-CN/chrome/)，[Firefox](https://www.mozilla.org/zh-CN/firefox/new/) 
- 安全管理：[Kaspersky](https://my.kaspersky.com/) 
- 广告拦截：[Adguard](https://adguard.com/zh_cn/welcome.html) 
 
## 二、系统增强 
 
- WSL：[Ubuntu](https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6#activetab=pivot:overviewtab) 
 
  - [宝塔面板](https://www.bt.cn/)，(Nginx,PHP,MySQL) 
    {% folding cyan, 跳过登陆校验 %} 
    ``` 
    rm -f /www/server/panel/data/bind.pl 
    ``` 
    {% endfolding %} 
  - 自启动：[WSL 之宝塔面板的部署](/blog/b2b02edd/) 
   
- DOH：[Adguard Home](https://github.com/AdguardTeam/AdGuardHome/releases) 
  - DOH 域名： 
    {% folding cyan, DOH 域名列表 %} 
    - 阿里：`https://dns.alidns.com/dns-query` 
    - 腾讯：`https://doh.pub/dns-query` 
    {% endfolding %} 
  - 拦截列表： 
    - [anti-AD](https://github.com/privacy-protection-tools/anti-AD) 
 
- Scoop 
 
  - 安装： 
   
  {% folding cyan, PowerShell 下安装 %} 
  ```powershell 
  # 指定安装位置 
  $env:SCOOP='D:\app\Scoop' 
  [Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User') 
   
  # 安装 scoop 
  Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh') 
   
  # 安装基础软件 Git （同时会自动安装 7-zip） 
  scoop install git 
   
  # 添加软件仓库 
  scoop bucket add extras 
  scoop bucket add versions 
  scoop bucket add nonportable 
  scoop bucket add java 
  ``` 
  {% endfolding %} 
 
  - 软件列表： 
  {% folding cyan, Scoop 软件列表 %} 
  ``` 
  7zip 19.00 [main] 
  adb 31.0.3 [main] 
  aria2 1.36.0-1 [main] 
  cpu-z 1.96.1 [extras] 
  dark 3.11.2 [main] 
  geekuninstaller 1.4.8.145 [extras] 
  git 2.33.0.windows.2 [main] 
  lessmsi 1.8.1 [main] 
  nvm 1.1.7 [main] 
  python36 3.6.8 [versions] 
  screentogif 2.33.1 [extras] 
  sudo 0.2020.01.26 [main] 
  which 2.20 [main] 
  ``` 
  {% endfolding %} 
  - NVM -> Node： 
  {% folding cyan, Node 相关 %} 
  - Node 版本：`v5.9.0`, `v8.17.0`, `v10.23.0`, `v12.19.0`, `v14.17.0` 
  {% endfolding %} 
 
## 三、应用软件 
 
### Windows 应用商店 
 
{% folding cyan, 软件列表 %} 
 
- 压缩：[8 Zip Pro](https://www.microsoft.com/zh-cn/p/8-zip-advanced-archiver-for-zip-rar-7zip-7z-zipx-iso-cab-create-unpack-and-encrypt/9wzdncrfhwb8?activetab=pivot:overviewtab) 
- 剪切板：[Ditto](https://www.microsoft.com/zh-cn/p/ditto-clipboard/9nblggh3zbjq?activetab=pivot:overviewtab) 
- 扩展：[HEIF](https://www.microsoft.com/zh-cn/p/heif-%e5%9b%be%e5%83%8f%e6%89%a9%e5%b1%95/9pmmsr1cgpwg?activetab=pivot:overviewtab), [HEVC](https://www.microsoft.com/zh-cn/p/hevc-%e8%a7%86%e9%a2%91%e6%89%a9%e5%b1%95/9nmzlz57r3t7?activetab=pivot:overviewtab) 
- 音频剪辑：[Lexis Audio Editor](https://www.microsoft.com/zh-cn/p/lexis-audio-editor/9wzdncrdsx0c?activetab=pivot:overviewtab) 
- 文本编辑：[Notepads](https://www.microsoft.com/zh-cn/p/notepads-app/9nhl4nsc67wm?activetab=pivot:overviewtab) 
- 泼辣修图：[Photo Editor Pro](https://www.microsoft.com/zh-cn/p/%e6%b3%bc%e8%be%a3%e4%bf%ae%e5%9b%be/9nblggh6bgx8?activetab=pivot:overviewtab) 
- 预览：[QuickLook](https://www.microsoft.com/zh-cn/p/quicklook/9nv4bs3l1h4s?activetab=pivot:overviewtab) 
- 截图：[Snipaste](https://www.microsoft.com/zh-cn/p/snipaste/9p1wxpkb68kx?activetab=pivot:overviewtab) 
- 远程：[TeamViewer](https://www.microsoft.com/zh-cn/p/teamviewer-remote-control/9wzdncrfj0rh?activetab=pivot:overviewtab) 
- 电报：[Telegram Desktop](https://www.microsoft.com/zh-cn/p/telegram-desktop/9nztwsqntd0s?activetab=pivot:overviewtab) 
- 转换：[Transcoder](https://www.microsoft.com/zh-cn/p/transcoder/9nblggh5z1bg?activetab=pivot:overviewtab) 
- 信道：[Wifi Commander](https://www.microsoft.com/zh-cn/p/wifi-commander-3d-analyze-monitor/9nblggh20fr1?activetab=pivot:overviewtab) 
- 终端：[Windows Terminal](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) 
- 视频：[爱奇艺](https://www.microsoft.com/zh-cn/p/%e7%88%b1%e5%a5%87%e8%89%ba-%e6%82%a6%e4%ba%ab%e5%93%81%e8%b4%a8/9nblggh5wxnw)，[哔哩哔哩](https://www.microsoft.com/zh-cn/p/%e5%93%94%e5%93%a9%e5%93%94%e5%93%a9%e5%8a%a8%e7%94%bb/9nblggh5q5fv?activetab=pivot:overviewtab)，[腾讯视频](https://www.microsoft.com/zh-cn/p/%e8%85%be%e8%ae%af%e8%a7%86%e9%a2%91/9wzdncrfj2j5?activetab=pivot:overviewtab)，[优酷视频](https://www.microsoft.com/zh-cn/p/%e4%bc%98%e9%85%b7%e8%a7%86%e9%a2%91win10/9pb4rmvtj0kj?activetab=pivot:overviewtab) 
- 日历：[华夏万年历](https://www.microsoft.com/zh-cn/p/%e5%8d%8e%e5%a4%8f%e4%b8%87%e5%b9%b4%e5%8e%86/9wzdncrdj36c?activetab=pivot:overviewtab) 
- 音乐：[酷狗音乐](https://www.microsoft.com/zh-cn/p/%e9%85%b7%e7%8b%97%e9%9f%b3%e4%b9%90-uwp/9npr44mj40pg?activetab=pivot:overviewtab)，[喜马拉雅](https://www.microsoft.com/zh-cn/p/%E5%96%9C%E9%A9%AC%E6%8B%89%E9%9B%85/9nblggh2rswl?activetab=pivot:overviewtab)，[QQ 音乐](https://www.microsoft.com/zh-cn/p/qq%e9%9f%b3%e4%b9%90/9wzdncrfj1q1?activetab=pivot:overviewtab) 
- 聊天：[微信](https://www.microsoft.com/zh-cn/p/%e5%be%ae%e4%bf%a1-for-windows/9nblggh4slx7?activetab=pivot%3Aregionofsystemrequirementstab)，[QQ](https://www.microsoft.com/zh-cn/p/qq%e6%a1%8c%e9%9d%a2%e7%89%88/9nhlgf0zwc5s?activetab=pivot:overviewtab) 
 
{% endfolding %} 
 
### 编程类软件 
 
{% folding cyan, 软件列表 %} 
 
- [JDK](https://jdk.java.net/) 
- [GitKraken](https://www.gitkraken.com/) 
- [Gpg4win](https://www.gpg4win.org/) 
- [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) 
- [Notepad++](https://notepad-plus-plus.org/downloads/) 
- [Xftp](https://www.netsarang.com/zh/xftp-download/) 
- [Xshell](https://www.netsarang.com/zh/xshell-download/) 
- [Vs Code](https://code.visualstudio.com/download) 
 
{% endfolding %} 
 
### 工具类软件 
 
{% folding cyan, 软件列表 %} 
 
- BitComet 
- COSbrowser 
- Office 365 
- PicGo 
- Typore 
- Utools 
- Adobe 
- VLC 
- Steam 
- CrystalDiskInfo 
- Dism++ 
- RightMenuMgr 
- xiaowan 
- Captura 
 
{% endfolding %} 
 
## 四、布局截图 
 
{% folding cyan, 截图文件 %} 
暂无 
{% endfolding %} 
 
## 五、资料备份 
 
### Git 配置 
 
{% folding cyan, .gitconfig %} 
```.gitconfig 
[credential] 
	helper = manager-core 
[user] 
	email = me@szyink.com 
	name = szyink 
	signingKey = 3B21B65778AD1331E052020D705CF548160B570E 
[core] 
	longpaths = true 
[filter "lfs"] 
	clean = git-lfs clean -- %f 
	smudge = git-lfs smudge -- %f 
	process = git-lfs filter-process 
	required = true 
[credential "helperselector"] 
	selected = manager-core 
[tag] 
	forceSignAnnotated = true 
[http "https://github.com"] 
	proxy = socks5://127.0.0.1:7890 
[init] 
	defaultBranch = "" 
[gpg] 
	program = C:\\Program Files (x86)\\GnuPG\\bin\\gpg.exe 
``` 
{% endfolding %} 
 
### 软链接 
 
{% folding cyan, Windows 文件夹软连接 %} 
 
```txt 
一个公共的缓存目录，缓解 C 盘占用。 
 
mklink /J C:\OneDriveTemp D:\cache\OneDriveTemp 
 
mklink /J C:\Users\szhiy\AppData\Local\Temp D:\cache\AppData\Local\Temp 
 
mklink /J C:\Users\szhiy\AppData\Local\微信开发者工具 D:\cache\AppData\Local\微信开发者工具 
 
mklink /J C:\Users\szhiy\AppData\Local\Steam D:\cache\AppData\Local\Steam 
 
mklink /J C:\Users\szhiy\AppData\Local\Postman D:\cache\AppData\Local\Postman 
 
mklink /J C:\Users\szhiy\AppData\Local\JetBrains D:\cache\AppData\Local\JetBrains 
 
mklink /J C:\Users\szhiy\AppData\Local\gitkraken D:\cache\AppData\Local\gitkraken 
 
mklink /J C:\Users\szhiy\AppData\Roaming\Tencent D:\cache\AppData\Roaming\Tencent 
 
mklink /J C:\Users\szhiy\AppData\Roaming\Nutstore D:\cache\AppData\Roaming\Nutstore 
 
mklink /J C:\Users\szhiy\AppData\Roaming\npm-cache D:\cache\AppData\Roaming\Tencent\npm-cache 
 
mklink /J C:\Users\szhiy\AppData\Roaming\npm-cache D:\cache\AppData\Roaming\npm-cache 
 
mklink /J C:\Users\szhiy\AppData\Roaming\Adobe D:\cache\AppData\Roaming\Adobe 
 
链接 WeChat 文件夹的文档目录 
 
mklink /J E:\sync\onedrive\文档\聊天文档\WeChat "C:\Users\szhiy\AppData\Local\Packages\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\LocalCache\Roaming\Tencent\WeChatAppStore\WeChatAppStore Files\sun-StillBelieve\Files" 
 
mklink /J 待链接到的目录 目标目录 （待链接到的目录的底层文件夹不需要创建） 
``` 
 
{% endfolding %}
