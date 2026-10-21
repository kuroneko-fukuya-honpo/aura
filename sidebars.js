// @ts-check
// サイドバーの構成。**ここだけが並び順の出どころ**。
//
// 並んでいるのはページの識別子で、`docs/` からのフォルダ名 + frontmatter の `id`。
//   docs/guide/subscribe.md（id: subscribe）→ 'guide/subscribe'
//
// **公開される URL は各ファイルの `slug` で決まる**ので、ファイルを別のフォルダへ移しても
// URL は変わらない（リンクも切れない）。移したときに直すのは、この配列の 1 行だけ。
// ページを増やすときも、Markdown を置いてここに 1 行足すだけで出る。

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'index',
    'plus',
    // 'test'（クローズドテスターの募集）は 2026-10-11 に締め切った。ページは古い記事や X からのリンクのために残し、並びからは外す（AU-017・2026-10-15）
    'sync',
    // 使い方を 1 ページにまとめたもの（AU-026 ■8・らじぽけの manual と同じ考え）。くわしい説明は下の「使い方」の各ページ
    'manual',
    {
      type: 'category',
      label: '使い方',
      collapsed: false,
      items: [
        'guide/subscribe',
        'guide/folders',
        'guide/read',
        'guide/fulltext',
        'guide/offline',
        'guide/progress',
        'guide/theme',
        'guide/list-mode',
      ],
    },
    'g2/index',
    'story/index',
    'changelog',
    'roadmap',
    'privacy',
    'delete-account',
    'credits',
    'contact',
    'sources',
  ],
};

export default sidebars;
