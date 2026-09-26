// @ts-check
// AURA のドキュメントサイト。
// 公開先は https://kuroneko-fukuya-honpo.github.io/aura/ （プロジェクトサイト）。
// 将来 AURA 以外を足すときは、そのアプリ用に別リポジトリ（別 baseUrl）を立てる。

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AURA',
  tagline: '同期サーバーを持たない RSS リーダー',
  favicon: 'img/favicon.ico',

  url: 'https://kuroneko-fukuya-honpo.github.io',
  // ここを間違えると CSS も画像も 404 になる。リポジトリ名ではなく **公開したいパス**
  baseUrl: '/aura/',

  organizationName: 'kuroneko-fukuya-honpo',
  projectName: 'aura-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // リンク切れはビルドで止める（公開前に気づけるように）
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // サイトぜんぶをドキュメントにする。トップページも docs/index.md
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // リンクカード（og:image / twitter:image）の既定。黒猫福家本舗の枠に AURA。頁ごとの差し替えは frontmatter の image
    image: 'img/og-aura.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AURA',
        items: [
          { to: '/guide/subscribe', label: '使い方', position: 'left' },
          { to: '/g2', label: 'Even G2 連携', position: 'left' },
          { to: '/plus', label: 'AURA Plus', position: 'left' },
          { to: '/story', label: '開発の記録', position: 'left' },
          { to: '/changelog', label: '更新履歴', position: 'right' },
          { to: '/privacy', label: 'プライバシー', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AURA',
            items: [
              { label: 'AURA とは', to: '/' },
              { label: '使い方', to: '/guide/subscribe' },
              { label: 'Even G2 連携', to: '/g2' },
              { label: 'AURA Plus', to: '/plus' },
            ],
          },
          {
            title: 'この先も読む',
            items: [
              { label: '更新履歴', to: '/changelog' },
              { label: 'プライバシーポリシー', to: '/privacy' },
              { label: '問い合わせ', to: '/contact' },
            ],
          },
          {
            title: 'SNS',
            items: [
              { label: 'YouTube', href: 'https://www.youtube.com/@kuronekofukuyahonpo' },
              { label: 'X（旧 Twitter）', href: 'https://x.com/kuroneko_fukuya' },
              { label: 'note', href: 'https://note.com/kuroneko_fukuya' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 黒猫福家本舗`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

export default config;
