import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/dev-notes/',
  lastUpdated: true,
  title: "Leo Dev Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdatedText: '最後更新',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '2025', link: '/obs/2025' }
    ],

    sidebar: {
      '/' : [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/obs/2025': [
        {
          text: '2025',
          collapsed: false,
          items: [
            { text: '1. 決定我的開發筆記平台', link: '/obs/2025/1.%20決定我的開發筆記平台' },
            { text: '2. 個人專案發想', link: '/obs/2025/2.%20個人專案發想' }
          ]
        }
      ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ychleo102615' }
    ]
  }
})
