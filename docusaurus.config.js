// @ts-check
// AURA のドキュメントサイト。
// 公開先は https://kuroneko-fukuya-honpo.github.io/aura/ （プロジェクトサイト）。
// 将来 AURA 以外を足すときは、そのアプリ用に別リポジトリ（別 baseUrl）を立てる。

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AURA',
  tagline: '探さなくても、『気になる』が届く。',
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

  // 英語の頁は /aura/en/…（AU-110 回 5）。訳の無い頁は日本語のまま出る
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: { label: '日本語', htmlLang: 'ja' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  // 英語の組み立てには Instagram の素材（static/posts・85MB）を写さない。読みに来るのは /aura/posts/ だけ（AU-117）
  plugins: [
    () => ({
      name: 'drop-posts-outside-ja',
      async postBuild({outDir, i18n}) {
        if (i18n.currentLocale === i18n.defaultLocale) return;
        const fs = await import('node:fs/promises');
        // 日本語だけの置き場（QR の再生の頁・らじぽけ連携の試験の記事）も英語の組み立てには写さない（AU-118）
        for (const f of ['posts', 'play.html', 'test-feed', 'test-feed.xml']) await fs.rm(`${outDir}/${f}`, {recursive: true, force: true});
      },
    }),
    // x-default は英語の頁に（AU-118・Docusaurus は既定の言語＝日本語にする）。各頁の hreflang="en" の住所に差し替える
    () => ({
      name: 'x-default-en',
      async postBuild({outDir}) {
        const fs = await import('node:fs/promises');
        const path = await import('node:path');
        const walk = async (d) => {
          const out = [];
          for (const e of await fs.readdir(d, {withFileTypes: true})) {
            const f = path.join(d, e.name);
            if (['posts', 'assets', 'test-feed', 'play.html'].includes(e.name)) continue;
            if (e.isDirectory()) out.push(...await walk(f));
            else if (e.name.endsWith('.html')) out.push(f);
          }
          return out;
        };
        for (const f of await walk(outDir)) {
          const html = await fs.readFile(f, 'utf8').catch(() => null);
          if (html == null) continue;
          const en = html.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"[^>]*hreflang="en(?:-[A-Z]+)?"[^>]*>/);
          if (!en) continue;
          const out = html.replace(/(<link[^>]*rel="alternate"[^>]*href=")[^"]+("[^>]*hreflang="x-default"[^>]*>)/, `$1${en[1]}$2`);
          if (out !== html) await fs.writeFile(f, out);
        }
      },
    }),
  ],

  // 初めて来た人をブラウザの言語の頁へ（AU-118・頁を描く前に読む）と、上の帯の言語の切り替え
  headTags: [{tagName: 'script', attributes: {}, innerHTML: require('./src/lang-redirect.js')}],
  clientModules: [require.resolve('./src/lang-switch.js')],

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
          { type: 'localeDropdown', position: 'right' },
          // スマホの幅でも上の帯に見える言語の切り替え（AU-118・中身は src/lang-switch.js が頁ごとに入れる）
          { type: 'html', position: 'right', className: 'aura-lang-switch', value: '<a href="/aura/en/" hreflang="en" data-aura-lang="en">English</a>' },
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
              { label: '配信元の掲載について', to: '/sources' },
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
