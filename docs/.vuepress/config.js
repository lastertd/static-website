module.exports = {
    base: '/',
    theme: 'reco',
    themeConfig: {
        lastUpdated: '最后更新于',
        logo: "/favicon.ico",
        nav: [
            {text: 'Home', link: '/', icon: 'reco-home'},
            {text: 'Components', link: '/comps/', icon: 'iconfont sss-medal'},
            {text: 'Demos', link: '/demos/', icon: 'iconfont sss-star-fill'},
            {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'},
        ],
        noFoundPageByTencent: false,
        type:'blog',
        authorAvatar: 'https://avatars.githubusercontent.com/u/84920591?v=4',
        blogConfig: {
            category: {
                location: 4,
                text: 'Blogs',
            },
            tag:{
                location: 5,
                text:'Tag',
            },
            socialLinks: [     // 信息栏展示社交信息
                {icon: 'reco-github', link: 'https://github.com/lastertd'},
                {icon: 'reco-npm', link: 'https://www.npmjs.com/~laster'}
            ]
        }
    },
    title: 'LasterCN',
    description: '',
    head: [
        ['meta', {name: "author", content: "laster"}],
        ['meta', {name: "keywords", content: "component blogs demo"}],
    ],
    port: '443',


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
