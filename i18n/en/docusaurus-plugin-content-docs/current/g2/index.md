---
id: index
title: Connect to Even G2
slug: /g2
sidebar_label: Connect to Even G2
---

# Connect to Even G2

You can show AURA articles on **Even Realities G2** (smart glasses).
Articles are passed **only within the same phone** and never go through an outside server.

Here's how it works.

```
AURA (phone) ── HTTP on 127.0.0.1 ──▶ Plugin in the Even Realities app ──▶ G2
```

AURA runs a small server that exists only inside your phone, and the plugin for the glasses
(**AURA for G2**) reads articles from it.

:::info
Even G2 support is an **[AURA Plus](/plus)** feature.
:::

## What you need

- AURA (installed on this device)
- The Even Realities app and a paired G2
- The glasses plugin **AURA for G2** (available on Even Hub)

Read headlines and articles on your glasses without taking out your phone. The button below opens the AURA for G2 page on Even Hub.

<p><a className="button button--primary button--lg" href="https://evenhub.evenrealities.com/landing?package_id=ca.kuroneko.aura.g2">Install AURA for G2 from Even Hub</a></p>

You can also open it from "Install AURA for G2 from Even Hub" in **Settings > Connections > Even G2 (glasses)** in AURA.

## Steps

### 1. Turn it on in AURA

In **Settings > Connections > Even G2 (glasses)**, turn **on** "Send to glasses".

- An **8-character passphrase** appears (tap it to copy)
- If you're asked for notification permission, allow it (AURA shows a persistent notification while sending)
- The port is **8777** by default

### 2. Enter the passphrase in the plugin

Open **AURA for G2** in the Even Realities app. On the screen that appears on your phone,
enter the passphrase and port, then tap "Save and test".

When "Connected to AURA" appears, you're done. The passphrase is saved, so **you only enter it the first time**.

### 3. Open it from the glasses

Start **AURA for G2** from the G2 menu.

## Glasses controls

| Action | What it does |
| --- | --- |
| Tap | Go forward (folders → article list → article text) |
| Double-tap | Go back. In article text, opens a menu (Back to list / Save or Unsave / Mark as unread / Cancel). On the first screen (folder list), asks you to confirm exiting |
| Swipe (up/down) | Move the selection, scroll the article text |

- To change what's shown, tap the top row of the folder list ("View: Unread (full text) (tap to switch)"). It switches Unread → All → Saved. Only articles whose full text has been fetched appear on the glasses (refresh AURA on your phone to get full text)
- Article list marks: `▶` = selected row / `●` = unread / `★` = saved / `◎` = has full text, readable offline
- Articles you open on the glasses are **marked as read in AURA too**. The same goes for saving

## If it doesn't work

| Shown on the glasses | What to check |
| --- | --- |
| Can't connect to AURA | Open AURA on your phone and check that "Send to glasses" is on |
| Passphrase does not match | Check whether the passphrase was regenerated in AURA, and enter it again |
| AURA Plus required | Switch to AURA Plus (it also works during the free trial). It switches over without reopening it on the glasses |

While sending, AURA's persistent notification stays shown (while you use the glasses, AURA goes to the background,
and without the notification the OS would stop it). On devices where it doesn't keep running, remove AURA from
battery optimization. When you're done, turn off "Send to glasses" and the notification goes away with it.

## Why there's a passphrase

`127.0.0.1` on a device **can also be reached by other apps on the same device**.
So that your articles can't be read without your permission, AURA answers only when the passphrase matches.
