---
id: manual
title: How to use
slug: /manual
sidebar_label: How to use (summary)
sidebar_position: 3
description: How to use AURA, all on one page. The basics, keeping articles for offline reading, and tips for smooth use.
---

# How to use AURA

This page sums up how to use AURA. Read it from the top, or jump to a section from the table of contents.
For details, follow the links at the end of each section.

## Find what you want to do

<details>
<summary>Subscribe to a news site</summary>

1. In the article list, tap **⋮** at the top right > **Add a feed**
2. Tap **Enter a URL**, enter the site's URL (a site URL or an RSS / Atom URL), and tap **Find**
3. Under **Add to folder**, choose a folder (if you don't, it goes to **Uncategorized**), then tap **Add to …**

If you don't know the URL, choose from **Source directory** on the same screen. → [Add a feed](/guide/subscribe)

</details>

<details>
<summary>Collect news about words you care about</summary>

In **Add a feed**, tap **Keyword**, enter a word, and tap **Collect “…”**.
Search results for that word arrive in your list, just like a source.
Besides Google News for your country, you can also choose **Medium** (by tag), **DEV** (by tag), and **Hacker News** (stories whose title contains your words). They are off by default. Tap **Preview** to see what's found before you choose. → [Add a feed](/guide/subscribe#where-to-search)

</details>

<details>
<summary>Keep articles to read later</summary>

**Touch & hold** an article in the list, or tap the bookmark at the top of the article screen.
Saved articles aren't removed when AURA cleans up old articles, and AURA keeps their text and images so you can read them without a signal. → [Read and save](/guide/read)

</details>

<details>
<summary>Read on the train or on a plane</summary>

Set **Settings > Offline & storage > Keep articles for offline reading** to **On Wi-Fi (recommended)**.
The text and images of new articles and saved articles are kept on your device. → [Keep articles for offline reading](#offline)

</details>

<details>
<summary>Make text bigger or change colors</summary>

Tap **aA** at the top right of the article screen to change the text size. In **Settings > Appearance**, choose the theme and accent color. → [Theme and text](/guide/theme)

</details>

## The basics

### Subscribe

Subscribe to a news site's RSS / Atom feed, to a keyword, or to a source from the directory built into the app.
Feeds are grouped into folders, and the tabs above the list are your folders.
→ [Add a feed](/guide/subscribe) · [Folders](/guide/folders)

### Read

Tap an article in the list to open the article screen. AURA **extracts just the article text** from the article's page and shows it without ads or menus.
Swipe left or right to move to the next article.
If AURA can't extract the text, you see the summary from the RSS feed. To read the rest, tap **Open original article**.
→ [Full-text fetch](/guide/fulltext)

### Read and save

Opening an article marks it as read (scrolling the list doesn't).
Tap **⋮** at the top right of the list > **Mark all as read** to choose a range and mark many as read at once. Save the articles you want to read later.
→ [Read and save](/guide/read)

### Change how the list looks

At the top left of the list, tap **All articles ▾** to switch to unread articles only, saved articles, reading history, and more.
In **Settings > Appearance**, choose the **List look** (2 columns, Large cards, or List) and the **Magazine look** (swipe left and right).
→ [List layout](/guide/list-mode)

### See what's running now

While AURA is refreshing or fetching full text in the background, **↻ and a count** appear at the top right of the list.

- **Tap** — Shows the list of **Running tasks** for 4 seconds (it stays while you touch or scroll it)
- **Touch & hold** — Keeps the list open (the mark changes to a pin). Touch & hold again, or tap ✕, to go back

When everything finishes, you see **✓ All done** and the mark goes away.

## Keep articles for offline reading {#offline}

This setting **keeps article text and images on your device** so you can read without a signal.
In **Settings > Offline & storage > Keep articles for offline reading**, choose one of these.

| Option | What it keeps | Connection |
| --- | --- | --- |
| **On Wi-Fi (recommended)** | The text and images of new articles (for 48 hours after they arrive) and saved articles | Wi-Fi only |
| **Don't keep** | Nothing | Fetches only the article you open, when you open it |

- For articles older than 48 hours, AURA fetches only the one you open, when you open it
- Saved articles are fetched first
- To see how much is kept, check **Space in use** on the same screen (**Articles available offline** shows the count).
  How much is removed in cleanup depends on **Amount to keep on device** (saved articles aren't removed)

:::note
AURA keeps articles **while AURA is closed**. While AURA is open, it pauses to show the list and articles first,
and picks up where it left off a while after you close it. It also rests while your device is hot, until it cools down.
:::

## When you have many feeds {#many-feeds}

With **more than 150 feeds**, each refresh takes longer and uses more battery and data (a notice appears at the top of **Manage feeds**).
Keeping only the sources you read often makes it lighter.

| Feeds | Time for one refresh (typical) |
| --- | --- |
| 50 | 27.7 seconds |
| 100 | 46.7 seconds |
| 150 | 83.3 seconds |
| 200 | 106.7 seconds |

These are estimates and vary by device (measured on a Galaxy Z Fold2 on Wi-Fi).

## Photo frame motion {#frame}

In **Photo frame settings > Motion**, choose one of 8 ways to show photos. A small sample moves in each row.

| Motion | What it does |
| --- | --- |
| **Ken Burns (the default)** | Slowly zooms and pans between photos. Direction and zoom change each time |
| **Classic** | Layers one photo over another |
| **Origami** | The screen folds up like origami to reveal the next photo |
| **Mobile** | Hanging frames sway gently into view |
| **Photo wall** | Fills the screen with photos, swapping a few at a time |
| **Slide panels** | Panels slide in. Turn on **Vintage** to give them an old-photo border and tint |
| **Floating** | Photos float up or flip upright |
| **Auto** | Cycles through the styles above |

- **Photo fit** — **Fit screen width** (the default) or **Fit screen height**. Whatever doesn't fit is shown as the photo moves
- Small photos aren't stretched. They sit on a blurred copy of themselves
- When your device's “Remove animations” is on, the photo frame switches slowly in the Classic style

## About content made by AI {#ai}

AURA Brief reports (PowerPoint, PDF, Word, and Excel) and parts of the audio briefing scripts are made automatically by AURA from the titles and summaries of the articles you follow,
and from information that AI (Anthropic's Claude and others) looked up.

The audio briefing is **AURA Brief · Audio** (Beta). Two cats talk you through the news: Jet (the host) and Kit (the commentator).
To change how they sound, choose **Standard** or **Young** in **Settings > Read & listen > Read aloud > Write scripts with AI > AURA Brief voice**.

- **AI writing can contain errors or out-of-date information.** Always check facts, dates, and numbers in the original articles (the QR codes in reports, and **Source articles** in the audio briefing)
- Reports and audio briefings aren't advice for investment, medical, legal, or other decisions
- Reports and audio are for your own use. They include article titles, summaries, and audio, so don't repost or share them
- If you spot an error, tap **Send feedback to AURA** at the top right of the report viewer or the audio briefing script

## Tips for smooth use

- **Keep your device charging and on Wi-Fi** — Heavy work, such as fetching full text and translating headlines in other languages, runs at these times. Let it finish overnight, and your articles are ready to read in the morning
- **Close AURA when you're done reading** — While AURA is open, it pauses heavy background work to keep the screen responsive. Closing it lets that work continue
- **Save the articles you read often** — AURA fetches the text and images of saved articles first, and cleanup never removes them
- **Unsubscribe from feeds you no longer use** — Fewer feeds means faster refreshes and less data and battery. Unsubscribe in **Manage feeds**
- **Hide or pin words** — Hide articles with words you don't want to see, or pin them to the top (**Filters**, [AURA Plus](/plus))
- **Need help?** — Get in touch through [Contact](/contact)
