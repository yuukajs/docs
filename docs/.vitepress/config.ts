import { defineConfig } from "vitepress";
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { SearchPlugin } from "vitepress-plugin-search";
import Segment from "segment"
import { qq, bilibili, npm } from "./icons.ts";

const segment = new Segment();
segment.useDefault();

const options = {
  encode: function (str:string) {
    return segment.doSegment(str, {simple: true});
  },
  tokenize: "forward",
};

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Yuuka's Docs",
  titleTemplate: ":title - ヒマワリ🌻",
  description: "Cross-platform Chat Robot Framework Yuuka.",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#006E4A" }],
  ],
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/index" },
      { text: "Intro", link: "/intro" },
      { text: "开发者", items: [{text:"导引", link:"/developer/index"},{text:"开发插件", link:"/developer/plugin"}]},
      {text: "用户", items: [{text:"创建模板项目", link:"/starter/template"}, {text:"自由配置", link:"/starter/custom"}, {text:"插件安装与配置", link:"/starter/plugin"}]},
      { text: "高级", items: [{ text: "流的概念", link: "/advanced/flow" }] },
    ],
    sidebar:[
          { text: "Home", link: "/index" },
	        { text: "Intro", link: "/intro" },
		      { text: "开发者", items: [{text:"导引", link:"/developer/index"},{text:"开发插件", link:"/developer/plugin"}]},
		            {text: "用户", items: [{text:"创建模板项目", link:"/starter/template"}, {text:"自由配置", link:"/starter/custom"}, {text:"插件安装与配置", link:"/starter/plugin"}]},
			          { text: "高级", items: [{ text: "流的概念", link: "/advanced/flow" }] },
				      ],
    socialLinks: [
      { icon: "github", link: "https://github.com/lisk809/yuuka" },
      { icon: npm, link: "https://www.npmjs.com/package/yuuka" },
      { icon: qq, link: "https://qm.qq.com/q/ddE5NFqmJy" }
    ],
    footer: {
      message: 'Docs Released Under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License.',
      copyright: `Copyright © ${(new Date()).getFullYear()} Lisk`,
    },
    editLink: {
      pattern: "https://github.com/lisk809/yuuka-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: 2,
    outlineTitle: "大纲",
  },
  markdown: {
    math: true,
    themes:{
      light: "nord",
      dark: "one-dark-pro"
    },
    lineNumbers: true,
    codeTransformers: [
      transformerTwoslash() 
    ]
  },
  vite: { plugins: [SearchPlugin(options)] },
  sitemap: {
    hostname: 'https://yuuka.js.org'
   }
});
