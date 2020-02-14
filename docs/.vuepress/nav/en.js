module.exports = [
  {
    text: "Home",
    link: "/en/",
  },
  // { text: 'Category', link: '/en/categories/', },
  { text: 'Tag', link: '/en/tags/', },
  { text: 'TimeLine', link: '/en/timeline/', },
  {
    text: 'Guide',
    link: '/en/guide/',
  },
  {
    text: 'Config Reference',
    link: '/en/config/',
  },
  {
    text: 'Plugin',
    link: '/en/plugin/',
  },
  {
    text: 'Learn More',
    ariaLabel: 'Learn More',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/en/api/cli.html',
          },
          {
            text: 'Node',
            link: '/en/api/node.html',
          },
        ],
      },
      {
        text: 'Contributing Guide',
        items: [
          {
            text: 'Local Development',
            link: '/en/miscellaneous/local-development.html',
          },
          {
            text: 'Design Concepts',
            link: '/en/miscellaneous/design-concepts.html',
          },
          {
            text: 'FAQ',
            link: '/en/faq/',
          },
          {
            text: 'Glossary',
            link: '/en/miscellaneous/glossary.html',
          },
        ],
      },
      {
        text: 'Miscellaneous',
        items: [
          {
            text: 'Migrate from 0.x',
            link: '/en/miscellaneous/migration-guide.html',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md',
          },
        ],
      },
    ],
  },
]
