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
        sidebar: {
            '/random/': [
                ['', 'home'],
                ['reduce', 'reduce使用']
            ],
            '/tool/': [
                ['', 'home'],
                ['yarn', 'yarn']
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
                ['', 'home']
            ],
            '/framework/vue/': [
                ['', 'home'],
                ['vue3', 'vue3知识点']
            ]
        }
    }
}