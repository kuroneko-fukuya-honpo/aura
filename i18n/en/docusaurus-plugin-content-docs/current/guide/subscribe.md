---
id: subscribe
title: Add a feed
slug: /guide/subscribe
---

# Add a feed

Everything starts from one screen: **Add a feed**. You can open it in any of these ways:

- In the article list, tap **⋮** at the top right > **Add a feed**
- In **Manage feeds** (list **⋮** > **Manage feeds**), tap **⋮** > **Add a feed**
- When you have no articles yet, tap **Add a feed** on the empty screen

At the top is a search box (**Outlet name, URL, or keyword**). Below it, **Ways to find feeds** shows four options.

| Way | What it does |
| --- | --- |
| Source directory | Choose from the sources built into the app, by country or region and topic |
| Keyword | Collect articles by word from Google News |
| Enter a URL | Subscribe from a site URL or an RSS / Atom URL |
| From a file | Import an OPML file |

## From an RSS or Atom URL

Tap **Enter a URL**, enter the URL, and tap **Find**. A site URL or an RSS URL both work: AURA finds the feed for you.
Older sources that start with `http://` work too (if `https://` connects, AURA tries it first and switches to it).

To hide list thumbnails and the image at the top of articles for a feed, turn off **Show article images** in its settings sheet (see [Folders](/guide/folders)).

## From a keyword

Tap **Keyword** to open **Collect by keyword**. Enter a word and tap **Collect “…”**. AURA subscribes to the Google News search results for that word.
Separate words with a space to get only articles that contain all of them.
In the list and the drawer, keyword feeds have a keyword mark, so you can tell them apart from URL feeds.

Keywords use Google News for your country. You can change the country and language in Settings > Collect > **News edition for keywords**.

### Where to search

Google News is always included. In addition, you can choose these places for English keywords (all are off by default):

- **Medium** — collected by tag: your words become a tag (spaces → hyphens)
- **DEV** — collected by tag, the same way
- **Hacker News** — stories whose title contains your words

Tap **Preview** to see which articles are found before you choose. Places you don't choose aren't fetched.

:::info AURA Plus
Free accounts can have **up to 3 keyword feeds**. The 4th and later are an **[AURA Plus](/plus)** feature.
If you have 4 or more on a free account, AURA refreshes only your 3 oldest. The rest are paused, not deleted.
Searching Google News in other countries (**Other countries** and **World view**) is also an AURA Plus feature.
:::

## Google News topics

In **Source directory**, **To read many at once** has **Google News topics**: the official topic feeds from Google News (top stories, world, business, technology, and more).
Tap one to subscribe. Feeds you already have show **Subscribed**.

## Source directory

If you don't want to look up URLs, tap **Source directory**. Switch between **English** and **Other languages** at the top, choose a country or region, then choose a topic and an outlet.
The directory is built into the app, so choosing doesn't send any requests.
Adding several outlets at once is an **[AURA Plus](/plus)** feature.

Some sources show **Not sent to AI**. By agreement with the publisher, articles from these outlets are never sent to AI or used to train AI. They are also left out of audio briefings and deep dives in reports. You can still read them, have them read aloud, and count them on your device.

If you run a source and want it listed in the directory, see [Listing your source](/sources).

## After you add a feed

Before adding, choose where it goes under **Add to folder** at the bottom of the screen. Tap an existing folder, or tap **+ New folder** and enter a name. Then tap **Add to “…”**.
AURA starts fetching the first articles. You can switch to another screen while this finishes.
When it's done, tap **Open the … list** to read, or **Keep adding** to add more.

## From text you select in an article

Touch and hold a word in the article text to select it. **Add to keywords** appears in the menu.

Tap it to open the folder picker. The keyword box already has the text you selected, so fix it if needed, then tap the folder to add it to.
AURA adds it to that folder as a Google News keyword feed. You can also create a folder on the spot with **+ New folder**.
Tap **Cancel** to add nothing.

- After adding, you see “Added “…” to “Folder”.” Tap **Undo** to take it back
- Spaces and line breaks around the selected text, and quotation marks at both ends, are removed
- If you already have the same keyword feed, AURA shows ““…” is already registered” without opening the picker
- You can't add text that is only spaces or longer than 50 characters

The keyword feed limit (up to 3 on a free account, unlimited with **[AURA Plus](/plus)**) is the same as in “From a keyword” above.
If you already have 3 on a free account, you see AURA Plus information instead of the folder picker.

## From text you select in other apps

When you select text in Chrome and other apps, the menu (inside ⋮) also shows **Add to AURA keywords**.

Tap it, and the same folder picker appears on top of that app (AURA doesn't open).
Choose a folder, and AURA confirms the keyword was added and takes you back to the app. Your selected text isn't changed.

To remove it from the menu, turn off **Show “Add to AURA keywords”** in Settings > Collect (on by default).

## Subscribe with Share from other apps (YouTube and more)

In your browser or the YouTube app, tap **Share > AURA** on the page you're viewing. AURA opens **Enter a URL** and looks for that page's RSS feed.

- **YouTube** — Share a video, a channel (including `@name` URLs), or a playlist page to subscribe to that channel's or playlist's RSS feed
- **Other sites** — AURA looks for an RSS feed in the page. If it finds more than one, choose from the list

When AURA shows **Found a feed.**, choose the folder and tap **Add to “…”**.
If AURA can't find a feed, enter the RSS URL yourself.

## Import and export with OPML

In **Manage feeds**, tap **⋮** > **Import OPML** or **Export OPML**.

- **Import OPML** — Bring in an `.opml` / `.xml` file exported from another reader
  (importing keyword feeds from OPML is an **[AURA Plus](/plus)** feature)
- **Export OPML** — Save your current feed list (you choose where to save it)

AURA also backs up your feed list on your device once a month (up to 6 months).

## Clean up feeds that can't load

If some feeds aren't loading, the top of the list shows “N sources couldn't be refreshed.” (tap **Details** to see which ones and retry).
In **Manage feeds**:

- The **Can't load N** filter at the top shows only the feeds that aren't loading
- **⋮** > **Unsubscribe from N that can't load** unsubscribes from all of them at once, after you confirm
