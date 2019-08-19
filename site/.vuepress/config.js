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
        // logo: '/images/icon-svg.svg',
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
            {
                text: 'Tags',
                items: Object.keys(AllTags).map((tag) => {
                    return {
                        text: tag,
                        link: `/tags/${tag}.html`
                    }
                })
            },
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
                "vgim.md",
                "dr17.md"
            ],
            "/electronics/": [
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
    }
}