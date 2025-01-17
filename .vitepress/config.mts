import { defineConfig } from 'vitepress'
const description = "前端开发如何在 AI 时代转型为全栈工程师, 本手册将带你从零开始, 逐步掌握全栈开发的技能: HTML CSS JavaScript NodeJs Vue React Next.js Nest.js TypeScript Docker Git CI/CD 等"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "全栈手册",
  description,
  // 启用最后更新时间
  lastUpdated: true,
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // 设置全局的 keywords meta 标签
    ['meta', { name: 'keywords', content: '前端开发, 自学, 简历, 全栈开发, 编程学习路线, 面试, 工作, 好工具, 编程工具' }],
    // 其他全局 meta 标签
    ['meta', { name: 'author', content: 'luckySnail' }],
    ['meta', { name: 'description', content: description }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端', link: '/frontend' },
      { text: '后端', link: '/backend' },
      { text: '方法论', link: '/ways' },
      { text: '项目', link: '/project' },
      { text: '简历', link: '/resume' },
      { text: '面试', link: '/interview' },
      { text: '工作', link: '/work' },
      { text: '工具', link: '/tools' },
    ],

    sidebar: {
      '/frontend': [],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
