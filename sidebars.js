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
    {
      type: 'category',
      label: '使い方',
      collapsed: false,
      items: [
        'guide/subscribe',
        'guide/folders',
        'guide/read',
        'guide/offline',
        'guide/theme',
        'guide/list-mode',
      ],
    },
    'g2/index',
    'story/index',
    'changelog',
    'privacy',
    'contact',
  ],
};

export default sidebars;
