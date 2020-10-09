module.exports = {
  themeConfig: {
    logo: '/favicon-32x32.cca5dc2d.png',
    // 导航
    nav: [
      { text: 'home', link: '/' },
      { text: '专题分类', link: '/sort/' },
      { text: '每日一题', link: '/dailyQuestion/' },
      { text: '周赛题解', link: '/weeklyContest/' },
      { text: '顺序题解', link: '/orderBy/'},
      { text: '学习资源', link: '/resource/' },
      { text: 'Github', link: 'https://github.com/wsWangjinxu/LeetCode' },
    ],
    sidebar: [
      ['/dailyQuestion/202010/', "2020年10月"]
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.cca5dc2d.png' }]
  ],
  title: 'LeetCode 题解',
  description: 'Just playing around'
}