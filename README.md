# aura-docs

AURA のドキュメントサイト。Docusaurus で作り、GitHub Pages に置いています。

- 公開 URL: <https://kuroneko-fukuya-honpo.github.io/aura/>
- 中身はすべて `docs/` の Markdown。触るのはそこだけで済むようにしてあります

## 手元で見る

```bash
npm install          # 最初の 1 回だけ
npm start            # http://localhost:3000/aura/ が開く（保存すると即反映）
npm run build        # 公開されるものと同じ形で書き出す（リンク切れもここで分かる）
npm run serve        # build したものを確認する
```

## 公開のしかた

`main` に push すると GitHub Actions（`.github/workflows/deploy.yml`）が
ビルドして Pages へ配ります。手で操作するものはありません。

## ファイルの置き場所と役割

| ファイル | 出る場所 | 中身 |
| --- | --- | --- |
| `docs/index.md` | `/aura/` | トップ。AURA とは / スクリーンショット / ダウンロード |
| `docs/guide/subscribe.md` | `/aura/guide/subscribe` | 購読の追加・OPML・取得エラーの片付け |
| `docs/guide/folders.md` | `/aura/guide/folders` | フォルダ |
| `docs/guide/read.md` | `/aura/guide/read` | 既読と保存・保持ポリシー |
| `docs/guide/offline.md` | `/aura/guide/offline` | オフラインで読む（全文キャッシュ） |
| `docs/guide/theme.md` | `/aura/guide/theme` | テーマと文字 |
| `docs/guide/list-mode.md` | `/aura/guide/list-mode` | 一覧の見せ方 |
| `docs/g2/index.md` | `/aura/g2` | Even G2 と繋ぐ手順 |
| `docs/story/index.md` | `/aura/story` | 開発の記録（**原稿待ちの枠**） |
| `docs/changelog.md` | `/aura/changelog` | 更新履歴 |
| `docs/privacy.md` | `/aura/privacy` | プライバシーポリシー（Play 提出に使う） |
| `docs/contact.md` | `/aura/contact` | 問い合わせ（**連絡先を入れる**） |

その他:

| ファイル | 役割 |
| --- | --- |
| `sidebars.js` | サイドバーの並び。**ここが唯一の並び順の出どころ** |
| `docusaurus.config.js` | サイト全体の設定（URL・`baseUrl: '/aura/'`・上部メニュー・フッタ） |
| `src/css/custom.css` | 配色（墨 `#22272B` / 朱 `#C0392B`）とダークモード |
| `static/img/` | 画像の置き場。本文からは `/img/ファイル名` で参照する |
| `.github/workflows/deploy.yml` | push したときの自動ビルドと公開 |

## フォルダ構成を変えたいとき

各 Markdown の先頭（frontmatter）に **`id`** と **`slug`** を書いてあります。

```markdown
---
id: guide-folders      # サイドバーから参照される名前。ファイルを移しても変えない
title: フォルダ         # ページの見出し
slug: /guide/folders   # 公開される URL。ファイルを移しても変えない
---
```

Docusaurus はファイルの置き場所ではなく **この `id` と `slug`** を見ます。つまり:

- **ファイルを別のフォルダへ移動しても**、`id` と `slug` を変えなければ
  URL もサイドバーもそのままです（リンク切れも起きません）
- 並び順を変えたいときは `sidebars.js` の配列の順番を入れ替えます
- ページを増やすときは、`docs/` の好きな場所に Markdown を置き、
  `id` / `title` / `slug` を書いて、`sidebars.js` に `id` を足します
- ページを消すときは、ファイルを消して `sidebars.js` から `id` を外します

`npm run build` はリンク切れがあると失敗するので、**push する前に一度流す**と安全です。

## 書くときの決まり

- 推測で書かない。アプリの実装で確かめられることだけを書く
  （とくに `docs/privacy.md` は Play の審査に使うため）
- 開発者名の表記は **黒猫福家本舗**
- 注意書きは `:::note` `:::info` `:::caution` が使えます
