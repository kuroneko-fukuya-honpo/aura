---
id: offline
title: Read offline
slug: /guide/offline
---

# Read offline

After a refresh brings in new articles, AURA **prefetches** the full text of articles that don't have it yet and keeps it on your device.
The next time you open them, you can read without a connection. In the list, articles you can read offline have a cloud mark.

## How prefetch works

Prefetch **has no count limit: it fetches every article that's missing full text**. When it would use a lot of data, AURA asks first.

| Connection | Auto-refresh (scheduled) | When you refresh yourself |
| --- | --- | --- |
| Wi-Fi | Fetches everything without asking | **Asks first if there are 200 or more**, then fetches everything |
| Mobile data | Doesn't fetch (waits for Wi-Fi or for you to refresh) | **Always asks first**, then fetches everything |

The prompt shows the count and the estimated data use (about 0.1 MB per article).
Tap **Fetch** to start. If you choose **Cancel**, AURA won't ask again while the app is open.

:::note
By default, full text is fetched on **Wi-Fi only** (see “Data use” below).
If you refresh on mobile data with this setting, AURA doesn't fetch full text and shows “Full text wasn't fetched (…).”
To fetch on mobile data too, set **Fetch full text** to **Use mobile data too**.
:::

When you add a new feed, AURA fetches that feed's articles **first** (it doesn't wait for a prefetch that's already running).

## Settings

Go to **Settings > Offline & storage**.

- **What to fetch for when there's no signal**
  - **Include images** — Fetches the text and the images in it (the default)
  - **Text only** — Doesn't fetch images. Useful for saving mobile data
  - **None** — Doesn't prefetch. AURA fetches an article when you open it
- **Amount to keep on device** — The storage limit. A quarter goes to text and three quarters to images. Anything over the limit is removed, oldest first (saved articles stay).
  Free accounts can use up to 512 MB. 1024 MB and Unlimited are **[AURA Plus](/plus)** features
- **Data use** — For each of **Fetching article lists**, **Fetch full text**, and **Fetch images**, choose **Use mobile data too** or **Wi-Fi only**
- **Fetch all missing full text** — Fetches full text for every article that doesn't have it yet
- **Delete fetched full text and images** (Settings > Offline & storage > **Free up space**) — For read articles only, or all (full text of saved articles stays)

## Progress

While prefetching, the bar above the list shows the **Full text** chip and the headline of the article being fetched (see [Refresh progress](/guide/progress)).
When it finishes, the bottom of the list shows **Full-text fetch done** with a breakdown (fetched, failed, images, and data used) for 12 seconds.
The top of the drawer also shows **Articles you can read offline** with the number on your device, such as “2187 / 11753.”

## When many articles pile up

If syncing, importing OPML, or subscribing to many feeds at once suddenly adds a lot of articles without full text,
AURA asks what to do.

- **Fetch all now**
- **A little at a time**
- **Don't fetch** — AURA stops fetching missing full text automatically (you can turn it back on later with Settings > Offline & storage > **Resume automatic fetching of missing full text**)

To learn what happens when full text can't be fetched, see [Full-text fetch](/guide/fulltext).
