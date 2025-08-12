### 创建doc
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


