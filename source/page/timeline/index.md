---
title: 建站史
comments: false
top_meta: []
layout: page
---


{% tabs note %}

<!-- tab 2022 -->
{% timeline %}

{% timenode 2022/06/28 %}

重启了博客的多线部署，现在境内部分交由腾讯对象存储、CDN分发，境外部分交由 Github Page, Jsdelivr 处理。

{% endtimenode %}

{% timenode 2022/06/05 %}

仿照 Next 主题，修改了部分样式，去掉了导航栏什么的。

{% endtimenode %}

{% timenode 2022/04/19 %}

使用了自部署的 Artalk 评论系统，迁移评论系统。

{% endtimenode %}

{% timenode 2022/03/19 %}

本站及主题仓库部署于 Github 公开仓库中。

{% endtimenode %}

{% endtimeline %}
<!-- endtab -->

<!-- tab 2021 -->
{% timeline %}

{% timenode 2021/08/16 %}

为网站添加了部分动画，为友链添加了瀑布流。

{% endtimenode %}

{% timenode 2021/08/01 %}

主题再次于主分支保持一次，本来以为会有很大的冲突，最终还好还好呀 {% emoji feiwen %} 。

{% endtimenode %}

{% timenode 2021/07/24 %}

搭建了代码自托管 Gitea，本博客正式部署在其中。

{% endtimenode %}

{% timenode 2021/07/21 %}

为博客添加了最近更新侧边栏，按照最后修改日期排序。

{% endtimenode %}

{% timenode 2021/07/18 %}

为博客文章添加了自定义背景，现在允许文章拥有独立的背景显示了。

{% endtimenode %}

{% timenode 2021/07/15 %}

网站部署时独立，重写了 Github Action 文件，通过 WebHook 同步内容到服务器中。

![](../../img/page/timeline/action.png)

{% endtimenode %}

{% timenode 2021/07/13 %}

发现没有对恶意反代的处理能力，当处于不在指定范围内的域名下时，自动跳转回源站。

{% endtimenode %}

{% timenode 2021/07/01 %}

为博客文章添加了头图显示，头图通过创客贴制作，丰富了网站整体观感。

{% endtimenode %}

{% timenode 2021/06/18 %}

域名备案完成，网站重新开启。

{% endtimenode %}

{% timenode 2021/03/21 %}

重生设置了下网站字体， {% b 方正FW筑紫A圆 %} 和 {% b 方正苏新诗柳楷简体 %} 。

{% endtimenode %}

{% timenode 2021/03/01 %}

调整了夜间模式的配色，参考了 One Dark Pro。

{% endtimenode %}

{% timenode 2021/02/05 %}

重写了右键实现，丰富自定义右键菜单中的功能。

{% endtimenode %}

{% timenode 2021/01/12 %}

搭建 code-server ，在自己的服务器上部署。

{% endtimenode %}

{% endtimeline %}
<!-- endtab -->

<!-- tab 2020~ -->
{% timelines  %}
{% timenodes fal fa-telescope %}2020/08/17 主题更新至 3.0 版本，总算稳定啦。{% endtimenodes %}
{% timenodes fal fa-gift %}2020/08/02 提供了一个相对比较强大的自定义右键菜单。{% endtimenodes %}
{% timenodes fal fa-hand-point-right %} 2020/06/13 替换全站鼠标手型，样式提取自 Ubuntu 的主题文件。{% endtimenodes %}
{% timenodes fal fa-genderless %}2020/05/01 重写了 Pjax 逻辑，解决大量 Bug，更改规范化。{% endtimenodes %}
{% timenodes fal fa-genderless %}2020/04/09 博客重新部署，同步更新主题，追随主题仓库至主分支。{% endtimenodes %}
{% timenodes fal fa-siren-on %}2019/12/12 在主题上部署 Pjax 服务，无跳转刷新。{% endtimenodes %}
{% timenodes fal fa-splotch %}2019/11/11 购买阿里云服务器，从腾讯云迁移数据，重新部署。{% endtimenodes %}
{% timenodes fal fa-genderless %}2019/10/22 建立 material 分支，切换主题，同时舍弃了大量原有内容。{% endtimenodes %}
{% timenodes fal fa-gingerbread-man %}2019/09/10 调整永久链接格式，丢失所有文章阅读数、部分文章评论。{% endtimenodes %}
{% timenodes fal fa-genderless %}2019/07/17 使用 Could Studio 进行博客文件的分发，编写，一切依托于服务器。{% endtimenodes %}
{% timenodes fal fa-genderless %}2019/04/03 将所有模组依赖上传至 Github 仓库，为了以后可以整体克隆不丢失修改。{% endtimenodes %}
{% timenodes fal fa-socks %}2018/12/15 注册域名，利用腾讯云服务器搭建基于 Typecho 的动态博客。{% endtimenodes %}
{% timenodes fal fa-genderless %}2018/09/20 更换了 Hexo 的 MarkDown 渲染器，重新划分了文章标签和分类。{% endtimenodes %}
{% timenodes fal fa-genderless %}2018/09/14 将 Hexo 所属文件部署到 Github 私有仓库，同期使用主题 Pure。{% endtimenodes %}
{% timenodes fal fa-genderless %}2018/06/04 现存的记录时间最早的一篇文章：《Linux 环境搭建饥荒服务器教程》{% endtimenodes %}
{% timenodes fal fa-narwhal %}2018/03/15 再次注册域名，接触并利用 Hexo & Github Page 搭建博客，早期文章丢失。{% endtimenodes %}
{% timenodes fal fa-skull %}2017/03/31 一年之后，服务器到期未续费，域名到期未续，域名过期被注销，撒花纪念。{% endtimenodes %}
{% timenodes fal fa-genderless %}2016/03/31 基于 WordPress 的第一个网站，域名 {% bb 可惜已经被注销了,sunziy.cn %} 。{% endtimenodes %}
{% timenodes fal fa-fan fa-spin %}很多年以前 那时候一切都没有开始~{% endtimenodes %}

{% endtimelines %}
<!-- endtab -->

{% endtabs %}
