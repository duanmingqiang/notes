module.exports = {
    title: 'Hello notes',
    description: 'Just playing aroung',
    base: '/notes/',
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
                        text: 'Yarn',
                        link: '/tool/'
                    }
                ]
            },
            {
                text: '随记',
                link: '/random/'
            }
        ],
        sidebar: {
            '/random/': [
                ['', 'home'],
                ['reduce', 'reduce使用']
            ],
            '/tool/': [
                ['', 'home'],
                ['yarn', 'yarn使用']
            ]
        }
    }
}