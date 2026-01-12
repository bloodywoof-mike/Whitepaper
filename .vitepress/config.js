import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fight Whitepaper',
  description: 'The Access Token for Combat Sports',
  base: '/Whitepaper/',
  
  themeConfig: {
    logo: '/favicon.ico',
    
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: '한국어', link: '/kr/' },
      { 
        text: 'GitHub', 
        link: 'https://github.com/Fight-Foundation/Whitepaper',
        target: '_blank'
      }
    ],
    
    // Sidebar navigation
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'The Fight.ID Partnership with UFC',
        link: '/ufc-partnership'
      },
      {
        text: 'Product Stack',
        collapsed: false,
        items: [
          { text: '$FIGHT (Ownership)', link: '/product-stack/fight-token' },
          { text: 'FP Points (Reputation)', link: '/product-stack/fp-points' },
          { text: 'Fight.ID (Identity)', link: '/product-stack/fightid' }
        ]
      },
      {
        text: 'Roadmap',
        link: '/roadmap'
      },
      {
        text: 'Utility',
        link: '/utilities'
      },
      {
        text: 'Governance Charter',
        link: '/governance'
      },
      {
        text: 'Tokenomics',
        link: '/tokenomics'
      },
      {
        text: 'Disclaimer',
        link: '/disclaimer'
      }
    ],
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fight-Foundation/Whitepaper' }
    ],
    
    // Footer
    footer: {
      message: 'Copyright © Fight Foundation. All rights reserved.',
      copyright: '<a href="/disclaimer">Disclaimer</a>'
    },
    
    // Search
    search: {
      provider: 'local'
    },
    
    // Dark mode configuration
    darkModeSwitchLabel: '',
    appearance: 'dark'
  },
  
  // Custom theme
  head: [
    ['meta', { name: 'theme-color', content: '#FF4001' }]
  ],
  
  markdown: {
    lineNumbers: false
  }
})
