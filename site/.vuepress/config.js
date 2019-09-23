const path = require('path');
const AllTags = require('./../scripts/types').AllTags;
const manifest = require('./../.vuepress/public/pwa/manifest.json');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var imageminMozjpeg = require('imagemin-mozjpeg');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProductionEnvironment = process.env.NODE_ENV === 'production';

module.exports = {
    title: 'Nishkal kashyap',
    description: 'Mechanical Engineer and a self taught fullstack developer',
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
                text: 'Major Projects',
                link: '/projects/'
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
                text: 'Categories',
                items: [{
                        text: 'Mechanical',
                        link: '/categories/mechanical.html'
                    },
                    {
                        text: 'Electronics',
                        link: '/categories/electronics.html'
                    },
                    {
                        text: 'Software',
                        link: '/categories/software.html'
                    },
                    // {
                    //     text: 'Resume',
                    //     link: (isProductionEnvironment ? null : '/resume/')
                    // }
                ]
            },
            {
                text: 'Links',
                items: [{
                        text: 'GitHub',
                        link: 'https://github.com/Nishkalkashyap'
                    },
                    {
                        text: 'LinkedIn',
                        link: 'https://www.linkedin.com/in/nishkalkashyap/'
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
            },
            {
                text: 'Download CV',
                // link: 'https://github.com/Nishkalkashyap/portfolio/raw/master/site/.vuepress/buildAssets/resume.pdf'
                link: 'https://us-central1-diy-mechatronics.cloudfunctions.net/downloadCount/resume-count'
                // link: '/download/'
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
            "/projects/": [
                "quark.md",
                "quark-appstore.md",
                "fms.md",
                "dr17.md",
                "dr16.md",
                "daq.md",
                "steering-wheel.md",
                "dyno.md",
                "radiator-design.md",
                "vgim.md"
            ],
            "/categories/": [
                "software.md",
                "mechanical.md",
                "electronics.md"
            ],
            "/all/": []
        }
    },
    configureWebpack: (config) => {
        const inlineLimit = 100000000; //10 kb

        config.resolve.alias['moment'] = 'moment/src/moment';

        config.resolve.alias['@public'] = path.resolve('./.vuepress/public');
        config.resolve.alias['@vuepress'] = path.resolve('./.vuepress');
        config.resolve.alias['@scripts'] = path.resolve('./scripts');
        config.resolve.alias['@buildAssets'] = path.resolve('./.vuepress/buildAssets');
        config.plugins.push(new CaseSensitivePathsPlugin({
            debug: false
        }));
        config.plugins.push(new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            disable: !isProductionEnvironment, // Disable during development
            gifsicle: {
                optimizationLevel: 9,
                interlaced: false
            },
            pngquant: {
                quality: '25-30',
                speed: 1 //1-11
            },
            plugins: [
                imageminMozjpeg({
                    quality: 30,
                    progressive: true
                })
            ]
        }));

        if (!isProductionEnvironment) {
            config.plugins.push(new BundleAnalyzerPlugin());
        }
        // imageminMozjpeg
        // 10.8 - 50%
        // 10.2 - 30%
        // 14.6
    }
}