const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: './vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '小橘猫博客',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Blog for thebs',
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/avatar.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    logo: '/logo.jpg',
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 作者
    author: '陈一发儿',
    authorAvatar: '/avatar.png',
    // 备案号
    record: '鲁ICP备16050377号-5',
    recordLink: 'http://beian.miit.gov.cn/',
    // 项目开始时间
    startYear: '2017',
    repo: 'chenyifaerfans/chenyifaerfans-next',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: require('./nav/zh'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/guide/': getGuideSidebar('指南', '深入'),
          '/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
        },
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: require('./nav/en'),
        sidebar: {
          '/en/api/': getApiSidebar(),
          '/en/guide/': getGuideSidebar('Guide', 'Advanced'),
          '/en/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
        },
      },
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
      },
    ],
    ['@vuepress/medium-zoom', true],
    ['flowchart'],
    'aplayer'
  ],
  extraWatchFiles: ['.vuepress/nav/en.js', '.vuepress/nav/zh.js'],
})

function getApiSidebar() {
  return ['cli', 'node']
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy',
      ],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['frontmatter', 'permalinks', 'markdown-slot', 'global-computed'],
    },
  ]
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../plugin/official'))
  .map(filename => 'official/' + filename.slice(0, -3))
  .sort()

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api',
      ],
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins,
    },
  ]
}
