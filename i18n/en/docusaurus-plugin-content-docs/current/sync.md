---
id: sync
title: How sync between devices works
slug: /sync
sidebar_label: How sync works
sidebar_position: 15
---

# How sync between devices works

With AURA Plus, you can **keep your feeds and settings the same as on another device**.
This page explains, in plain words, what matches and what doesn't, and how the numbers appear.

:::info In short
Feeds, read/unread status, and saved items **match across two devices**. However, **article text and images don't match**
(each device fetches them itself). The number of articles in the list won't match if "Amount to keep on device" differs between devices. Until a sync finishes, the numbers may be briefly off.
:::

## 1. What matches

The following stay the same across devices.

- Settings
- Feeds (the sources you subscribed to)
- Folders
- Filters and hide rules
- Saved articles
- Read/unread status
- The article list (which articles there are)

If you add a feed, mark an article as read, or save an article on one device,
the change reaches the other device after a sync.

## 2. What doesn't match (and why)

**Article text and images don't match.** This is intended.

Article text and images are large, so sending them between devices would use more data.
Instead, **each device fetches them from the source itself**.

Because of this, **the same article may have its full text on one device and only its title on another**.
If you open an article that has only a title, that device hasn't fetched its text yet.
If the source still carries the article, its text comes in at the next refresh.

<strong>"Offline & storage" settings such as "Amount to keep on device" are per device</strong> (because free space and connections differ between devices).

## 3. How the numbers appear

**Feeds, read/unread status, and saved items match across two devices**, because they are synced.
However, **the number of articles shown in the list** won't match if "Amount to keep on device" differs between devices.

Also keep the following in mind.

- **The numbers are briefly off until a sync finishes.** Right after you do something on one device,
  or right after each device fetches new articles, the numbers may look different.
  Sync again and they match.
- If the app shows **"✓ In sync"**, the contents matched your other devices
  as of the last sync.
- When it shows **"● N changes haven't synced"**, there are N actions you haven't sent yet
  (such as marking as read or as unread).
  At the next sync, they reach your other devices too.

:::note Why not show the other device's numbers right away?
AURA has no sync server. It exchanges data through files in your own Google Drive.
So the app doesn't fetch "the other device's current numbers" on the spot.
Instead, it tells you whether things match by <strong>whether there are changes you haven't sent yet</strong>.
:::

## 4. The first sync takes time

**The first sync can take a few minutes if you have many sources.**
This is because the devices first bring together the list of all articles.

- **Sync continues even if you close the screen.** It doesn't stop when you leave Settings.
- **If it stops partway, it continues from where it left off the next time you open the app.** It doesn't start over.

From the second time on, only the changes since the last sync are sent, so it finishes quickly.

## 5. Main device

When the same item differs between two devices, the **main device**'s version wins.
Choose it in <strong>Settings > Connections > Sync across devices > Make this the main device</strong>.
When you switch phones, the new device can take over as main even if the old one is no longer with you.

- **Redo sync** (on the main device) — Makes the feeds, folders, settings, filters, and hide rules on your other devices exactly match the main device (saved articles are kept)
- **Paused** — A device that hasn't synced for 30 days or more is shown as "paused." Its records aren't deleted, and it becomes active again when you sync on that device
- **When AURA Plus ends** — Sync stops. The data in Google Drive isn't deleted. If you return to AURA Plus, sync resumes automatically at the next sync

## 6. Where the data is

The data used for sync is stored in <strong>the "app-specific folder" of your own Google Drive</strong>.

- This folder is a place for AURA alone to read and write, and **it isn't visible even to you**
  (it doesn't appear in your Drive file list).
- **Black Cat Fortune Works (Kuroneko Fukuya), the provider of this app, does not receive this data.**
  The data exists only in your own Google Drive.
- Even if you stop syncing (sign out), the feeds and settings on your device stay as they are.

For details, see the [Privacy Policy](/privacy).

## To use sync

Sync between devices is an **AURA Plus** feature.
To start, sign in with Google from <strong>Settings > Connections > Sync across devices</strong> in the app.

If you only want to move your feeds and settings to a new phone, you can do it without AURA Plus:
put them into a file in <strong>Settings > Connections > Moving to a new phone</strong> and take it with you.
