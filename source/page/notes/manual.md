---
layout: docs
group: notes
order: 1
title: Volantis 主题用户手册
short_title: Volantis 主题用户手册
description: Volantis 主题用户手册 - 个人速查
sidebar: [navigation, notes, toc]
top_meta: []
comments: false
sitemap: false
---

## 一、Front-matter

{% folding yellow, front-matter %}

| 字段        | 含义          |   值类型    |            值             | 备注                           |
| :---------- | :------------ | :---------: | :-----------------------: | :----------------------------- |
| layout      | 页面布局模版  |   String    |      post,page,docs       | 独立页面,文章页面,文档页面     |
| title       | 页面标题      |   String    |             -             |                                |
| seo_title   | 网页标题      |   String    |        page.title         | **与 title 共同存在时，不显示标题**|
| date        | 创建时间      |    Date     |       文件创建时间        |                                |
| updated     | 更新日期      |    Date     |       文件修改时间        |                                |
| link        | 外部文章网址  |   String    |             -             | 去源站阅读                     |
| music       | 内部音乐控件  |  [Object]   |             -             |                                |
| keywords    | 文章关键词    |   String    |             -             |                                |
| description | 文章摘要      |   String    |             -             |                                |
| top_meta    | 是否显示 meta |    Bool     |           true            | 顶部 meta 信息                 |
| bottom_meta | 是否显示 meta |    Bool     |           true            | 底部 meta 信息                 |
| comments | 是否显示评论 | Bool | true |  |
| archive | 是否归档 | Bool | true | 是否出现在归档页，Post类型 |
| sidebar     | 页面侧边栏    | Bool, Array | sidebar.for_page/for_post | 手动指定侧边栏                 |
| mathjax     | 是否渲染公式  |    Bool     |           false           |                                |
| thumbnail   | 缩略图        |   String    |           -           | 显示在文章页右上角             |
| icons       | 图标          |    Array    |            []             | 显示在归档页                   |
| pin         | 是否置顶      |    Bool     |           false           |                                |
| headimg     | 文章头图      |     url     |             -             | **目前修改为只在列表页显示**   |
| indent      | 是否首行缩进  |    Bool     |           false           | **自定义修改：缩进 2 字符**    |
| references | 参考资料 | Array | - | {title: xxx, url: xxx} |
| copyright | 自定义文章版权 | [Object] | - |  |
| showPostHeadimg | 是否显示文章头图 | Bool | false |  |
| hiddenTitle | 显示文章标题 | Bool | true | **列表页**（例如首页等） |
| http451 | 区域化规则 | Bool | false | 不适宜在**境内**开放的文章 |
| background | 背景图 | String | - | 文章页背景图 |
| hidden | 是否隐藏文章 | Bool | false | 基于插件支持 |

{% endfolding %}

{% folding yellow, 新建文章模板 %}

```yml 新建文章模板
title: 文章名称 
seo_title:           # 与 title 同时设定时隐藏文章页标题
hiddenTitle: true    # 列表页是否显示标题
toc: true            # 是否生成目录 
indent: true         # 是否首行缩进 
comments: true       # 是否允许评论 
archive: true        # 是否显示在归档 
mathjax: false       # 是否渲染公式 
pin: false           # 是否首页置顶 
top_meta: false      # 是否显示顶部信息 
bottom_meta: false   # 是否显示尾部信息 
http451: false       # 是否仅允许境外查阅文章
sidebar: [toc]       # 指定侧边栏
hidden: false        # 是否隐藏文章：列表、归档、RSS 等位置
tag: 
  - 标签一 
  - 标签二 
categories: 分组 
keywords: 文章关键词 
date: 2021-13-13 00:00 
updated: 2021-13-13 00:00 
description: 文章摘要 
icons: [fas fa-fire red, fas fa-star green] 
thumbnail: https://文章右侧缩略图
background: https://文章背景图
headimg: https://文章头图
showPostHeadimg: true  # 是否在文章页显示头图
references: 
  - title: 参考资料名称 
    url: https://参考资料地址
copyright:
  type: type1          # 当前文章版权声明类型
  author: 本文作者
  ref:
    title: 原文出处 - 标题
    url: https://原文出处 - 链接
```

{% endfolding %}

## 二、标签插件

### 1. 行内标签

{% folding blue, text %}

{% tabs text %}
<!-- tab 效果 -->

带 {% u 下划线 %} 的文本；带 {% emp 着重号 %} 的文本；带 {% wavy 波浪线 %} 的文本；带 {% del 删除线 %} 的文本

键盘样式的文本：{% kbd ⌘ %} + {% kbd D %}

密码样式的文本：{% psw 这里没有验证码 %}

密文样式的文本：{% bb 真的没有啊喵, 这里没有验证码 %}

<!-- endtab -->
<!-- tab 源码 -->
```md
带 {% u 下划线 %} 的文本；带 {% emp 着重号 %} 的文本；带 {% wavy 波浪线 %} 的文本；带 {% del 删除线 %} 的文本 
 
键盘样式的文本：{% kbd ⌘ %} + {% kbd D %} 
 
密码样式的文本：{% psw 这里没有验证码 %} 
 
密文样式的文本：{% bb 真的没有啊喵, 这里没有验证码 %} 
```
<!-- endtab -->
{% endtabs %}

{% endfolding %}

{% folding yellow, span %}

{% tabs span %}
<!-- tab 效果 -->
各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

超大号文字：

{% span center logo large, Volantis %}

{% span center small, A Wonderful Theme for Hexo %}

<!-- endtab -->

<!-- tab 源码 -->
```md
各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。 
 
超大号文字： 
 
{% span center logo large, Volantis %} 
 
{% span center small, A Wonderful Theme for Hexo %} 
 
```
<!-- endtab -->

<!-- tab 参数 -->

|   属性   | 可选值                                                    |
| :------: | --------------------------------------------------------- |
|   字体   | `logo`, `code`                                            |
|   颜色   | `red`, `yellow`, `green`, `cyan`, `blue`, `gray`          |
|   大小   | `small`, `h4`, `h3`, `h2`, `h1`, `large`, `huge`, `ultra` |
| 对齐方向 | `left`, `center`, `right`                                 |

<!-- endtab -->
{% endtabs %}

{% endfolding %}

{% folding red, p %}

{% tabs p %}
<!-- tab 效果 -->
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}
<!-- endtab -->
<!-- tab 源码 -->
```md
{% p center logo large, Volantis %} 
{% p center small, A Wonderful Theme for Hexo %} 
```
<!-- endtab -->
<!-- tab 参数 -->
{% p center code blue large, “与 span 参数相同”  %}
<!-- endtab -->
<!-- tab 额外 -->

<p class="p center logo large"><em>Volantis 主题用户手册 <sup>自用</sup></em></p>

{% codeblock lang:markdown 上文所对应源码 line_number:false  %}
<p class="p center logo large"><em>Volantis 主题用户手册 <sup>自用</sup></em></p>
{% endcodeblock %}
<!-- endtab -->
{% endtabs %}

{% endfolding %}

### 2. 增强功能

#### 时间线 timeline

{% folding red, timeline %}

{% tabs timeline %}
<!-- tab 效果 -->

{% timeline 时间线标题（可选） %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% timenode 时间节点（标题） %}

正文内容

{% endtimenode %}

{% endtimeline %}

<!-- endtab -->
<!-- tab 源码 -->

```md 最后更新于 <u>3.0</u> 版本
{% timeline 时间线标题（可选） %} 
 
{% timenode 时间节点（标题） %} 
 
正文内容 
 
{% endtimenode %} 
 
{% timenode 时间节点（标题） %} 
 
正文内容 
 
{% endtimenode %} 
 
{% endtimeline %} 
```
<!-- endtab -->
<!-- tab 额外 -->

{% timelines '一个自制时间线（标题可选）' %}

{% timenodes fal fa-bat %} 2021/13/32 巴啦啦小魔仙。{% endtimenodes %}
{% timenodes fal fa-glass-cheers %} 2021/13/16 好好学习，天天向上。 {% endtimenodes %}
{% timenodes fal fa-genderless %} 2021/13/15 风声雨声读书声声声入耳，国事家事天下事事事关心。 {% endtimenodes %}
{% timenodes fal fa-narwhal %} 2021/13/10 楼主以屎，有事烧纸。 {% endtimenodes %}
{% timenodes fal fa-genderless %} 2021/13/08 那么就可以有星期八了。 {% endtimenodes %}
{% timenodes fal fa-genderless %} 2021/13/01 是的没错，这里是 13 月。 {% endtimenodes %}
{% timenodes fal fa-fan fa-spin %}这里是时间线的起点~{% endtimenodes %}

{% endtimelines %}

```md 自制标签
{% timelines '一个自制时间线（标题可选）' %} 
 
{% timenodes fal fa-bat %} 2021/13/32 巴啦啦小魔仙。{% endtimenodes %} 
{% timenodes fal fa-glass-cheers %} 2021/13/16 好好学习，天天向上。 {% endtimenodes %} 
{% timenodes fal fa-genderless %} 2021/13/15 风声雨声读书声声声入耳，国事家事天下事事事关心。 {% endtimenodes %} 
{% timenodes fal fa-narwhal %} 2021/13/10 楼主以屎，有事烧纸。 {% endtimenodes %} 
{% timenodes fal fa-genderless %} 2021/13/08 那么就可以有星期八了。 {% endtimenodes %} 
{% timenodes fal fa-genderless %} 2021/13/01 是的没错，这里是 13 月。 {% endtimenodes %} 
{% timenodes fal fa-fan fa-spin %}这里是时间线的起点~{% endtimenodes %} 
 
{% endtimelines %} 
```
<!-- endtab -->
{% endtabs %}

{% endfolding %}

#### 引用块 note/blocknote

{% folding yellow, note/blocknote %}

{% tabs note %}
<!-- tab 效果 -->

{% note info, *blocknote* 比 *note* 多出了显示标题的能力 %}

{% blocknote quote, 《寻隐者不遇》 %}
松下问童子，言师采药去。
只在此山中，云深不知处。
{% endblocknote %}

<!-- endtab -->
{% endtabs %}

{% endfolding %}

## 三、表情包

{% folding, emoji %}

| 代码                     |            效果             | 代码                   |           效果            | 代码                      |             效果             |
| ------------------------ | :-------------------------: | ---------------------- | :-----------------------: | ------------------------- | :--------------------------: |
| `{% emoji youling %}`    |  {% emoji youling %} 幽灵   | `{% emoji bizui %}`    |  {% emoji bizui %} 闭嘴   | `{% emoji baiyan %}`      |   {% emoji baiyan %} 白眼    |
| `{% emoji aixin %}`      |   {% emoji aixin %} 爱心    | `{% emoji dajing %}`   |  {% emoji dajing %} 大惊  | `{% emoji ziya %}`        |    {% emoji ziya %} 呲牙     |
| `{% emoji daxiao %}`     |   {% emoji daxiao %} 大笑   | `{% emoji esi %}`      |   {% emoji esi %} 饿死    | `{% emoji fadai %}`       |    {% emoji fadai %} 发呆    |
| `{% emoji fankun %}`     |   {% emoji fankun %} 犯困   | `{% emoji ganga %}`    |  {% emoji ganga %} 尴尬   | `{% emoji fennu %}`       |    {% emoji fennu %} 愤怒    |
| `{% emoji hanyan %}`     |   {% emoji hanyan %} 汗颜   | `{% emoji guaiwu %}`   |  {% emoji guaiwu %} 怪物  | `{% emoji haochi %}`      |   {% emoji haochi %} 好吃    |
| `{% emoji emo %}`        |    {% emoji emo %} 恶魔     | `{% emoji renzhe %}`   |  {% emoji renzhe %} 忍者  | `{% emoji jingya %}`      |   {% emoji jingya %} 惊讶    |
| `{% emoji kaixin %}`     |   {% emoji kaixin %} 开心   | `{% emoji lengku %}`   |  {% emoji lengku %} 冷酷  | `{% emoji danao %}`       |    {% emoji danao %} 大闹    |
| `{% emoji feiwen %}`     |   {% emoji feiwen %} 飞吻   | `{% emoji liulei %}`   |  {% emoji liulei %} 流泪  | `{% emoji mengbi %}`      |   {% emoji mengbi %} 懵逼    |
| `{% emoji bianbian %}`   |  {% emoji bianbian %} 便便  | `{% emoji nanguo %}`   |  {% emoji nanguo %} 难过  | `{% emoji shuizhuo %}`    |  {% emoji shuizhuo %} 睡着   |
| `{% emoji xiaochulei %}` | {% emoji xiaochulei %} 笑哭 | `{% emoji jingkong %}` | {% emoji jingkong %} 惊恐 | `{% emoji santiaoxian %}` | {% emoji santiaoxian %} 尴尬 |
| `{% emoji tiaopi %}`     |   {% emoji tiaopi %} 调皮   | `{% emoji ganmao %}`   |  {% emoji ganmao %} 感冒  | `{% emoji wuliao %}`      |   {% emoji wuliao %} 无聊    |
| `{% emoji fankun1 %}`    |  {% emoji fankun1 %} 犯困   | `{% emoji xieyan %}`   |  {% emoji xieyan %} 斜眼  | `{% emoji xiasi %}`       |    {% emoji xiasi %} 吓死    |
| `{% emoji xiaolian %}`   |  {% emoji xiaolian %} 笑脸  | `{% emoji huaixiao %}` | {% emoji huaixiao %} 坏笑 | `{% emoji shengqi %}`     |   {% emoji shengqi %} 生气   |
| `{% emoji liuhan %}`     |   {% emoji liuhan %} 流汗   | `{% emoji outu %}`     |   {% emoji outu %} 呕吐   | `{% emoji keshui %}`      |   {% emoji keshui %} 瞌睡    |
| `{% emoji tianshi %}`    |  {% emoji tianshi %} 天使   | `{% emoji xianwen %}`  | {% emoji xianwen %} 献吻  | `{% emoji yiwen %}`       |    {% emoji yiwen %} 疑问    |
| `{% emoji shimo %}`      |   {% emoji shimo %} 什么    | `{% emoji dianzan %}`  | {% emoji dianzan %} 点赞  | `{% emoji biti %}`        |    {% emoji biti %} 鼻涕     |
| `{% emoji fendou %}`     |   {% emoji fendou %} 奋斗   | `{% emoji huqi %}`     |   {% emoji huqi %} 呼气   | `{% emoji kulou %}`       |    {% emoji kulou %} 骷髅    |
| `{% emoji tanchi %}`     |   {% emoji tanchi %} 贪吃   | `{% emoji shuixing %}` | {% emoji shuixing %} 睡醒 | `{% emoji aini %}`        |    {% emoji aini %} 爱你     |
| `{% emoji aixin1 %}`     |   {% emoji aixin1 %} 爱心   | `{% emoji zhadan %}`   |  {% emoji zhadan %} 炸弹  | `{% emoji xinsui %}`      |   {% emoji xinsui %} 心碎    |
| `{% emoji maren %}`      |   {% emoji maren %} 骂人    | `{% emoji zhutou %}`   |  {% emoji zhutou %} 猪头  | `{% emoji qie %}`         |     {% emoji qie %} 企鹅     |
| `{% emoji shoushang %}`  | {% emoji shoushang %} 受伤  | `{% emoji jingsong %}` | {% emoji jingsong %} 惊悚 | `{% emoji taoyan %}`      |   {% emoji taoyan %} 讨厌    |

| 代码                         |                效果                 | 代码                    |             效果             | 代码                |         效果         |
| ---------------------------- | :---------------------------------: | ----------------------- | :--------------------------: | ------------------- | :------------------: |
| `{% emoji mianwubiaoqing %}` | {% emoji mianwubiaoqing %} 面无表情 | `{% emoji bushufu %}`   |  {% emoji bushufu %} 不舒服  | `{% emoji ku %}`    |  {% emoji ku %} 酷   |
| `{% emoji xiaodiaodaya %}`   |  {% emoji xiaodiaodaya %} 笑掉大牙  | `{% emoji yousiliao %}` | {% emoji yousiliao %} 又死了 | `{% emoji yun %}`   |  {% emoji yun %} 晕  |
| `{% emoji siliao %}`         |      {% emoji siliao %} 去死了      | `{% emoji liubixie %}`  | {% emoji liubixie %} 流鼻血  | `{% emoji xiong %}` | {% emoji xiong %} 凶 |
| `{% emoji taoyan1 %}`        |     {% emoji taoyan1 %} 讨厌啦      | `{% emoji en %}`        |      {% emoji en %} 恩       | `{% emoji leng %}`  | {% emoji leng %} 冷  |
| `{% emoji xingxingyan %}`    |   {% emoji xingxingyan %} 星星眼    | `{% emoji a %}`         |       {% emoji a %} 啊       |                     |                      |
| `{% emoji liukoushui %}`     |    {% emoji liukoushui %} 流口水    |                         |                              |                     |                      |

{% endfolding %}