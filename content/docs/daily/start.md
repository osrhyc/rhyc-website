---
id: daily-start          # 文档唯一 ID（不写时会用文件名自动生成）
title: 每日一题｜开篇说明   # 页面标题
slug: start   # 页面路径（默认根据文件名生成，可自定义）
sidebar_label: 每日一题｜开篇说明     # 侧边栏显示的名字
sidebar_position: 1        # 在侧边栏中的排序（数字越小越靠前）
description: 每日一题,  # SEO 描述
tags: [前端,面试]    # 标签
keywords: [每日一题, 面试宝典, 教程]     # SEO 关键词
hide_title: false          # 隐藏页面标题（默认 false）
hide_table_of_contents: false  # 隐藏目录（默认 false）
image: /img/new-feature.png # SEO 分享图（Open Graph / Twitter Card）
toc_min_heading_level: 2   # TOC 最小标题层级
toc_max_heading_level: 4   # TOC 最大标题层级
draft: false               # 是否为草稿（在 prod 中不显示）
---


在前端的学习和工作中，我们常常会遇到这样的问题

- 学过的知识点，过一阵子就忘了。
- 做题时以为会，真正写起来却卡住。
- 面试时被问到“很基础”的题，却答得磕磕绊绊。

为了让自己真正掌握，而不是“看过就忘”，我决定开启 「每日一题」 系列。

### 目标

- 每天一道题 —— 可能是基础、可能是进阶，也可能是综合场景题。
- 题目 + 解析 —— 不是背答案，而是搞懂为什么。
- 循序渐进 —— 从核心概念到实战场景，逐步形成体系。

### 为什么要做这个系列

- 巩固知识：通过短时间高频率的练习，把知识变成肌肉记忆。
- 查漏补缺：及时发现知识盲区，避免面试时“掉链子”。
- 提升表达：学会用清晰的语言解释技术问题。

从今天开始，不是简单地“看一眼”，而是每天用 10 分钟，让自己离高手更近一点。

第 1 题，马上开始。

### 问题池子

#### 已完成

1. 深拷贝与浅拷贝

#### 进行中

1. 闭包与作用域

#### 未开始

- 原型与继承
- 异步与事件循环
- 防抖与节流
- 浏览器渲染流程
- 回流和重绘
- 浏览器缓存机制
- 跨域与安全
- 性能优化实践
- React Fiber 是什么？解决了什么问题？
- Hooks 为什么不能放在条件语句里？
- Diff 算法的核心逻辑？
- Vue2 和 Vue3 的响应式原理对比。
- Vue3 的 Composition API 和 Options API 区别？
- 虚拟 DOM 的作用和实现原理？
- MVVM 和 MVC 的区别？
- SSR 和 CSR 的优缺点？
- Webpack 与 Vite 的区别？为什么 Vite 更快？
- Tree-shaking 原理？
- TS 的常用类型工具有哪些？
- any、unknown、never 的区别？
- 如何设计前端项目的自动化构建和部署？
- 常见的微前端方案有哪些？优缺点对比？
- qiankun 的实现原理？
- React Native、Flutter、Uni-app 的优缺点？
- 小程序和 WebView 的区别？
- HTTP/1.1、HTTP/2、HTTP/3 的区别？
- TCP 三次握手与四次挥手？
- 设计一个埋点 SDK，需要考虑哪些方面？
- 如何设计一个大规模前端监控系统？
- 你在项目中做过哪些性能优化？
- 你遇到的最棘手的 Bug 是什么？如何解决的？
- 如何保证多人协作的大型前端项目质量和效率？
- 如何向非前端同学解释前端的价值？
- V8 是如何进行垃圾回收的？新生代和老生代的 GC 策略？
- 隐藏类（Hidden Class）和内联缓存（Inline Cache）对性能的影响？
- 什么是内存泄漏？如何检测和避免？
- 大量数据渲染时如何保证不卡顿？（虚拟列表、分片渲染、Web Worker）
- 事件循环在浏览器与 Node.js 中的区别？
- 如何实现一个可取消的 Promise？
- 浏览器多进程架构：主进程、渲染进程、GPU 进程如何协作？
- requestIdleCallback 和 requestAnimationFrame 的使用场景？
- 如何在首屏内实现秒开？（资源预加载、骨架屏、SSR/SSG）
- 大规模前端应用的性能监控体系如何设计？
- CSP（Content Security Policy）如何落地？
- 如何防御供应链攻击（npm 包投毒）？
- React Fiber 架构解决了什么问题？具体调度机制？
- Concurrent Mode 如何提升用户体验？
- Vue3 响应式原理的底层实现（Proxy + Reflect）？
- Vue 的 Diff 算法和 React 的区别？
- 为什么虚拟 DOM 不一定比直接操作真实 DOM 快？
- 前端框架演进趋势：从 jQuery → MVVM → Hooks → Signals → Server Components？
- 前端构建工具演进（Webpack → Rollup → Vite → Turbopack），核心区别？
- 如何实现一个 Tree-shaking？
- 微前端（qiankun、Module Federation、Web Components）优缺点对比？
- 如何解决多个子应用共享依赖、避免重复打包？
- 如何设计一个支持 百万 DAU 的前端架构？
- 如何落地 前端领域驱动设计（DDD）？
- 小程序、RN、Flutter、WebAssembly 的应用场景？
- WebAssembly 相比 JS 有哪些优势和限制？
- 前端如何结合 Serverless？常见的应用场景？
- 边缘渲染（Edge Rendering）在前端架构中的价值？
- 你如何在大规模表单系统中保证性能和可维护性？
- 前端在金融/电商场景中如何设计防作弊、防刷单方案？
- 你如何推动一项工程化改造？（如从 JS → TS，Webpack → Vite）
- 如何平衡业务迭代与技术债务治理？
- 你怎么看待前端的发展趋势？（Server Components、AI 辅助开发、WebAssembly）
- 如果让你从零设计一个跨平台前端框架，你会怎么做？
