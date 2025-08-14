# 创建doc

``` YAML
---
id: new-feature            # 文档唯一 ID（不写时会用文件名自动生成）
title: 新功能介绍           # 页面标题
slug: /guide/new-feature   # 页面路径（默认根据文件名生成，可自定义）
sidebar_label: 新功能      # 侧边栏显示的名字
sidebar_position: 2        # 在侧边栏中的排序（数字越小越靠前）
description: 本文介绍了新功能的使用方法  # SEO 描述
tags: [feature, update]    # 标签
keywords: [新功能, 教程]     # SEO 关键词
hide_title: false          # 隐藏页面标题（默认 false）
hide_table_of_contents: false  # 隐藏目录（默认 false）
pagination_prev: null      # 上一篇链接（null 表示隐藏）
pagination_next: null      # 下一篇链接（null 表示隐藏）
image: /img/new-feature.png # SEO 分享图（Open Graph / Twitter Card）
toc_min_heading_level: 2   # TOC 最小标题层级
toc_max_heading_level: 4   # TOC 最大标题层级
draft: false               # 是否为草稿（在 prod 中不显示）
---
```

| 字段                                      | 作用                          |
| --------------------------------------- | --------------------------- |
| **id**                                  | 文档唯一标识，侧边栏引用时用，不写时自动用文件名    |
| **title**                               | 页面主标题                       |
| **slug**                                | 自定义 URL 路径（默认 `/docs/文件路径`） |
| **sidebar\_label**                      | 侧边栏显示的名字                    |
| **sidebar\_position**                   | 控制同级文档在侧边栏的顺序               |
| **description**                         | 页面描述，用于 SEO                 |
| **tags** / **keywords**                 | 标签与关键词（SEO）                 |
| **image**                               | 用于分享的封面图（OG/Twitter Card）   |
| **draft**                               | 设为 `true` 会在构建时忽略该文档        |
| **pagination\_prev / pagination\_next** | 控制上下篇导航                     |


# 创建blog

``` YAML
---
title: 深入理解 JS 的深拷贝与浅拷贝       # 文章标题（必填）
date: 2025-08-14                          # 发布时间（YYYY-MM-DD 或 ISO 格式）
slug: deep-copy-vs-shallow                # 自定义文章路径（默认用文件名生成）
authors: liucheng                         # 作者 ID（需在 authors.yml 定义）
tags: [JavaScript, 面试题, 深拷贝]        # 文章标签，用于标签页聚合和 SEO
description: 本文深入解析深拷贝与浅拷贝实现原理  # SEO 描述
image: /img/blog/deep-copy.png             # 封面图（用于文章顶部和社交分享）
keywords: [JavaScript, 深拷贝, 浅拷贝]     # SEO 关键词
draft: false                               # 草稿模式，true 时不会出现在生产构建
hide_table_of_contents: false              # 隐藏右侧目录
unlisted: false                            # 是否不在博客列表中显示，但可直接访问
last_update:                               # 覆盖最后更新时间
  author: liucheng
  date: 2025-08-14
readingTime: 5                             # 覆盖自动计算的阅读时间（分钟）
---
```

| 字段 | 作用 |
|------|------|
| **title** | 文章标题（必填） |
| **date** | 发布时间（`YYYY-MM-DD` 或 `YYYY-MM-DDTHH:mm:ss`） |
| **slug** | 自定义 URL 路径（默认 `/blog/文件名`） |
| **authors** | 作者 ID（需在 `blog/authors.yml` 定义）或直接写作者对象 |
| **tags** | 文章标签，用于聚合和 SEO |
| **description** | SEO 描述，摘要 |
| **image** | 封面图（顶部展示 & 社交分享图） |
| **keywords** | SEO 关键词 |
| **draft** | 草稿模式，`true` 时不会被构建到生产环境 |
| **hide_table_of_contents** | 隐藏右侧目录 |
| **unlisted** | 文章不在列表显示，但可直接访问 |
| **last_update** | 手动覆盖最后更新时间（`author` + `date`） |
| **readingTime** | 覆盖自动计算的阅读时间（分钟） |
