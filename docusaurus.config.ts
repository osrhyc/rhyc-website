import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'yuda',
  tagline: 'Beyond Code',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://blog.liuchengyong.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuda', // Usually your GitHub org/user name.
  projectName: 'yuda', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'daily', // 第一个 daily 实例
        path: path.resolve(__dirname, 'content/docs/daily'),
        routeBasePath: 'daily', // URL: /daily
        sidebarPath: path.resolve(__dirname, 'content/docs/daily/sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'notes',
        path: path.resolve(__dirname, 'content/blogs/notes'),
        routeBasePath: 'notes',
        blogTitle: '随笔',
        blogDescription: '日常技术记录与思考',
        showReadingTime: true,
        postsPerPage: 20,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '全部文章',
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
          title: '随笔 RSS',
        },
        // 可选：authors.yaml/yml
        authorsMapPath: 'authors.yml',
      },
    ],
  ],   

  themeConfig: {
    // Replace with your project's social card
    image: 'img/yuda-social-card.png',
    navbar: {
      title: 'yuda',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/daily/start', label: '每日一题', position: 'left' },
        { to: '/notes', label: '随笔', position: 'left' },
        {
          href: 'https://github.com/osrhyc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
