module.exports = {
  title: '天翔 博客',   // 标题
  description: 'Just playing around',   // 网站描述
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端知识', link: '/before/' },
      { text: '后端知识', link: '/after/' },
      // { text: '简历', link: 'https://github.com/successColin' },
      { text: 'github', link: 'https://github.com/successColin' }
    ],
    sidebar: {
      '/before/': [
        {
          title: 'css(如来神掌)',
          collapsable: true,
          children: [
            'css'
          ]
        },
        {
          title: 'js(易筋经)',
          collapsable: true,
          children: [
            'js'
          ]
        },
        {
          title: 'js 高级(九阴真经)',
          collapsable: true,
          children: [
            'jsBig'
          ]
        },
        {
          title: 'BOM(葵花宝典)',
          collapsable: true,
          children: [
            'BOM'
          ]
        },
        {
          title: 'DOM(六脉神剑)',
          collapsable: true,
          children: [
            'DOM'
          ]
        },
        {
          title: 'H5(玉女素心经)',
          collapsable: true,
          children: [
            'H5'
          ]
        },
        {
          title: 'HTTP(乾坤大挪移)',
          collapsable: true,
          children: [
            'HTTP'
          ]
        }
      ],
      '/after/': [
        {
          title: 'node(侠客行)',
          collapsable: true,
          children: [
            'node'
          ]
        },
        {
          title: 'mysql(六脉神剑)',
          collapsable: true,
          children: [
            'mysql'
          ]
        },
        {
          title: 'sql2008(北冥秘籍)',
          collapsable: true,
          children: [
            'sql2008'
          ]
        }
      ]
    }
  }
}
