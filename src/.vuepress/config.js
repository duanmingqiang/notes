module.exports = {
    title: 'Hello notes',
    description: 'Just playing aroung',
    base: '', //
    // base: '/notes/',
    search: false, // 禁用默认的搜索框
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    },
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
            {
                text: '框架学习',
                items: [
                    {
                        text: 'vue',
                        link: '/framework/vue/'
                    }
                ]
            }
        ],
        // 侧边栏
        sidebar: {
            '/random/': [
                ['', 'home'],
                ['reduce', 'reduce使用'],
                ['summaryfor2020', '2020年总结'],
                ['ssh-key', 'ssh秘钥']
            ],
            '/tool/': [
                ['', 'home'],
                ['yarn', 'yarn'],
                ['browser', '浏览器小技巧'],
                ['axios', 'axios简单使用']
            ],
            '/webfront/html/': [
                ['', 'home']
            ],
            '/webfront/css/': [
                ['', 'home'],
                ['less', 'less使用'],
                ['scss', 'scss使用'],
                ['knowledgepoint', '常见知识点']
            ],
            '/webfront/js/': [
                ['', 'home'],
                ['handwrite', '手写JS'],
                ['algorithm', '算法'],
                ['downloadfile', '文件下载'],
                ['screenshot', '截图']
            ],
            '/framework/vue/': [
                ['', 'home']
                // ['vue3', 'vue3知识点']
            ],
            '/interview/': [
                ['', 'home'],
                ['3', '（转）前端知识点3'],
                ['4', '（转）前端知识点4'],
                ['5', '（转）前端知识点5'],
                // ['vue3', 'vue3知识点']
            ]
        }
    }
}