const path = require('path');
const AllTags = require('./../scripts/types').AllTags;
const manifest = require('./../.vuepress/public/pwa/manifest.json');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    title: 'Portfolio',
    ga: 'UA-112064718-10',
    description: 'My portfolio',
    serviceWorker: true,
    head: [
        [
            'script', {}, `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1454984,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `
        ],
        [
            'meta', {
                name: 'theme-color',
                content: manifest.theme_color
            }
        ],
        [
            'link', {
                href: '/pwa/manifest.json',
                rel: 'manifest'
            }
        ],
        [
            'link', {
                rel: 'shortcut icon',
                type: 'image/svg',
                href: '/images/icon.png'
            },
        ]
    ],
    markdown: {
        config: md => {
            md.use(require('markdown-it-html5-embed'), {
                html5embed: {
                    useImageSyntax: true,
                    useLinkSyntax: false
                }
            });

            md.use(require('markdown-it-imsize'));
            md.use(require("markdown-it-admonition"));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-multimd-table'));
            console.log(require('markdown-it-mermaid').default, typeof require('markdown-it-mermaid').default);
            md.use(require('markdown-it-mermaid').default);
        }
    },
    themeConfig: {
        logo: '/images/icon-svg.svg',
        editLinks: false,
        repoLabel: 'GitHub',
        repo: 'https://github.com/Nishkalkashyap/portfolio',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'Mechanical',
                link: '/mechanical/'
            },
            {
                text: 'Electronics',
                link: '/electronics/'
            },
            {
                text: 'Software',
                link: '/software/'
            },
            // {
            //     text: 'Tags',
            //     items: Object.keys(AllTags).map((tag) => {
            //         return {
            //             text: tag,
            //             link: `/tags/${tag}.html`
            //         }
            //     })
            // },
            {
                text: 'Links',
                items: [{
                        text: 'GitHub',
                        link: 'https://github.com/Nishkalkashyap'
                    },
                    {
                        text: 'Twitter',
                        link: 'https://twitter.com/nishkalkashyap'
                    },
                    {
                        text: 'Instagram',
                        link: 'https://www.instagram.com/nishkalkashyap/'
                    },
                    {
                        text: 'Quark',
                        link: 'https://quarkjs.io'
                    }
                ]
            }
        ],
        sidebar: {
            "/tags/": [
                "api.md",
                "arduino.md",
                "faq.md",
                "guide.md",
                "javascript.md",
                "nodejs.md",
                "references.md",
                "structures.md",
                "typescript.md"
            ],
            "/mechanical/": [
                "dr16.md",
                "radiator-design.md",
                "dyno.md",
                "vgim.md",
                "dr17.md"
            ],
            "/electronics/": [
                "daq.md",
                "steering-wheel.md"
            ],
            "/software/": []
        }
    },
    configureWebpack: (config) => {
        const inlineLimit = 100000000; //10 kb


        config.resolve.alias['@public'] = path.resolve('./.vuepress/public');
        config.resolve.alias['@vuepress'] = path.resolve('./.vuepress');
        config.resolve.alias['@scripts'] = path.resolve('./scripts');
        config.resolve.alias['@buildAssets'] = path.resolve('./.vuepress/buildAssets');
        config.plugins.push(new CaseSensitivePathsPlugin({
            debug: false
        }));
        // config.plugins.push(new ImageminPlugin({
        //     disable: process.env.NODE_ENV !== 'production', // Disable during development
        //     // optipng: {
        //     //     optimizationLevel: 9
        //     // },
        //     gifsicle: {
        //         optimizationLevel: 9,
        //         interlaced: false
        //     },
        //     // jpegtran: {
        //     //     optimizationLevel: 9
        //     // },
        //     mozjpeg: {
        //         progressive: true,
        //         quality: 15
        //     },
        //     pngquant: {
        //         quality: '25-30',
        //         // speed: 4
        //     }
        // }));
    }
}