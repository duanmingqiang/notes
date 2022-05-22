module.exports = {
    title: 'Hello notes',
    description: 'Just playing aroung',
    base: '', //
    // base: '/notes/',
    // search: false, // 禁用默认的搜索框
    markdown: {
        // markdown-ite-anchor的选项
        anchor: {
            permalink: false
        },
        // markdown-it-toc
        toc: {
            includeLevel: [1, 2]
        },
        extendMarkdown: md => {
            // 使用更多的markdown-it 插件！
            // md.use(require('mark-ite-xxx'))
        }
    },
    themeConfig: {
        lastUpdated: true,
        // 导航
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '工具使用',
                items: [
                    {
                        text: '开发工具使用记录',
                        link: '/tool/'
                    }
                ]
            },
            {
                text: '随记',
                link: '/random/'
            },
            {
                text: '知识点',
                link: '/interview/'
            },
            {
                text: 'web前端',
                items: [
                    {
                        text: 'html',
                        link: '/webfront/html/'
                    },
                    {
                        text: 'css',
                        link: '/webfront/css/'
                    },
                    {
                        text: 'js',
                        link: '/webfront/js/'
                    },
                ]
            },
            // {
            //     text: '框架学习',
            //     items: [
            //         {
            //             text: 'vue',
            //             link: '/framework/vue/'
            //         }
            //     ]
            // }
        ],
        // 侧边栏
        sidebar: {
            '/random/': [
                {
                    text: 'home',
                    link: '/random/'
                },
                {
                    text: 'reduce使用',
                    link: '/random/reduce'
                },
                {
                    text: '2020年总结',
                    link: '/random/summaryfor2020'
                },
                {
                    text: 'ssh秘钥',
                    link: '/random/ssh-key'
                },
            ],
            '/tool/': [
                {
                    text: 'home',
                    link: '/tool/'
                },
                {
                    text: 'yarn',
                    link: '/tool/yarn'
                },
                {
                    text: '浏览器小技巧',
                    link: '/tool/browser'
                },
                {
                    text: 'axios简单使用',
                    link: '/tool/axios'
                },
            ],
            '/webfront/html/': [
                {
                    text: 'home',
                    link: '/webfront/html/'
                },
            ],
            '/webfront/css/': [
                {
                    text: 'home',
                    link: '/webfront/css/'
                },
                {
                    text: 'less使用',
                    link: '/webfront/css/less'
                },
                {
                    text: 'scss使用',
                    link: '/webfront/css/scss'
                },
                {
                    text: '常见知识点',
                    link: '/webfront/css/knowledgepoint'
                },
            ],
            '/webfront/js/': [
                {
                    text: 'home',
                    link: '/webfront/js/'
                },
                {
                    text: '手写JS',
                    link: '/webfront/js/handwrite'
                },
                {
                    text: '算法',
                    link: '/webfront/js/algorithm'
                },
                {
                    text: '文件下载',
                    link: '/webfront/js/downloadfile'
                },
                {
                    text: '截图',
                    link: '/webfront/js/screenshot'
                },
                {
                    text: 'js解析excel内容',
                    link: '/webfront/js/readexcel'
                },
            ],
            // '/framework/vue/': [
            //     {
            //         text: 'home',
            //         link: '/framework/vue/'
            //     },
            //     // ['vue3', 'vue3知识点']
            // ],
            '/interview/': [
                {
                    text: 'home',
                    link: '/interview/'
                },
                {
                    text: '（转）前端知识点3',
                    link: '/interview/3'
                },
                {
                    text: '（转）前端知识点4',
                    link: '/interview/4'
                },
                {
                    text: '（转）前端知识点5',
                    link: '/interview/5'
                },
                {
                    text: '前端问题汇总(己)',
                    link: '/interview/selfknowledge'
                },
                {
                    text: '面试记录',
                    link: '/interview/record'
                },
            ]
        }
    }
}