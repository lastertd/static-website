module.exports = {
    base:'/static-website/',
    theme: '',
    title: 'LasterCN',
    description: '',
    head: [
        ['meta',{name:"author",content:"laster"}],
        ['meta',{name:"keywords",content:"component blogs demo"}],
    ],
    port: '443',
    themeConfig: {
        lastUpdated: '最后更新于',
        logo: "/favicon.ico",
        nav: [
            {text: 'home', link: '/'},
            {text: 'components', link: '/comps/'},
            {text: 'demos', link: '/demos/'},
            {text: 'blogs', link: '/blogs/'},
            {text: 'github', link: 'https://github.com/lastertd'},
        ],



    },

    plugins: ['demo-container',
        'less-loader',
        ["vuepress-plugin-auto-sidebar", {
            sidebarDepth: 0,
             ignore: [],
        }],
        ['vuepress-plugin-right-anchor', {
            ignore: [
                '/',
                '/blogs/'
            ],
            expand: {
                trigger: 'click',
                clickModeDefaultOpen: true
            },
        }],
        ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('LLLL')
        }
      }]
    ],
    markdown: {},

}
