---
id: delete-account
title: Delete your account and data
slug: /delete-account
sidebar_label: Delete your account and data
sidebar_position: 85
---

# AURA — Delete your account and data

Last updated: 2026-10-30 / App: **AURA** (Android) / Provider: **Black Cat Fortune Works (Kuroneko Fukuya)**

:::info What to know first
**AURA has no account managed by us (Black Cat Fortune Works).** There is no registration or login.
The only server we run is a single relay (for the audio briefing's AI scripts, usage counts, free trial device tokens, and the shared dictionary), and your name and email address never reach it either. The relay keeps only these 3 things, and none of them is linked to your name or email address:

- Per-device identifiers and counts for counting usage: deleted automatically after 2 days
- The device token of a device that started the AURA Plus free trial, and the date and time it started: kept for 400 days to prevent reuse of the trial, then deleted automatically
- Words, readings, and translations sent with "Improve the dictionary together," and a per-device token (a 16-digit random number): received only when you turn it on. They remain as candidates for the shared dictionary and are not deleted automatically

So we hold no user data that we can link to you and delete.

The "account" in AURA means **the Google account you use yourself for sync between devices (AURA Plus)**.
Sync data is saved only in **an app-only folder in your own Google Drive**.
:::

## 1. How to delete (you can delete everything yourself)

### Step A — Delete sync data (in your own Google Drive)

1. Open [Google Drive](https://drive.google.com/) in a browser on a computer
2. Open the **gear icon > Settings** in the top right
3. Open **Manage apps** on the left
4. Find **AURA** in the list, then choose **Options > Disconnect from Drive** on the right

Disconnecting revokes AURA's permission to access your Drive data, and
**the data in AURA's app-only folder is deleted by Google** (this is how Google Drive works).

> If you don't use sync (you don't use AURA Plus, or you have never signed in),
> there is no data in your Drive. You don't need this step.

### Step B — Delete data on your device

**Uninstall AURA.** Your feed list, articles, read and saved status, settings, image cache,
and automatic backup files are deleted from your device when you uninstall.

To stop syncing without deleting anything, go to **Settings > Connections > Sync between devices > Sign out** in the app.
Sync stops (feeds and settings on the device stay as they are).

### Step C — Ask us to delete your data

If you can't do the steps above yourself, or you'd like confirmation of deletion, email us.

- **To**: [kuroneko.fukuya@gmail.com](mailto:kuroneko.fukuya@gmail.com)
- **Subject**: `AURA account deletion request`
- **What to include**: **The email address of the Google account you use for sync** (nothing else is needed)

We will reply **within 7 days of receiving your request**.
Note that **the data on our relay server is not linked to email addresses, so we cannot identify it from a request. For this reason, there is no data we can delete on our side.**
In our reply, we'll explain Steps A and B above and confirm that we hold no data related to you.

## 2. What is deleted / what remains

| Data | Where it is | How to delete | When it's deleted |
| --- | --- | --- | --- |
| Feed list, folders, articles, read and saved status, settings, image cache, automatic backup of the feed list | **On your device** only | Step B (uninstall) | **Immediately** (when you uninstall) |
| Sync data (feeds, folders, filters, hide rules, saved articles, read / unread status, article list, settings, the device ID and model name used to decide the main device) | **An app-only folder in your own Google Drive** | Step A (disconnect from Drive) | **Deleted by Google's processing** |
| User data held by us that is linked to your name or email address | **None** (we don't hold user accounts) | — | — |
| Audio briefing AI script counts (a per-device identifier and the number of uses that day) | Our relay server | Nothing to do | **Deleted automatically after 2 days** |
| AURA Plus free trial device token and the date and time the trial started (used only to prevent reuse of the trial) | Our relay server | Nothing to do | **Deleted automatically after 400 days** |
| Words, readings, and translations sent with "Improve the dictionary together," and a per-device token (a 16-digit random number; only when you turn it on) | Our relay server (candidates for the shared dictionary) | Turning the switch off deletes anything not yet sent from your device. What has been sent is not linked to email addresses, so we cannot identify it from a request | **Not deleted automatically** |

### What remains

- **The email you sent to request deletion** (if you used Step C).
  As a record of handling inquiries, we keep it in our mailbox **for 1 year after receipt**, then delete it.
  The email contains only the email address you sent and your message
- **Ad-related information on Free.** On Free, Google AdMob sends your advertising ID and other information to Google
  (see "2. Ads" in the [Privacy Policy](/privacy)). This is **received by Google, not by us**.
  Reset or delete your advertising ID in your device's **Settings > Google > Ads**
- **Usage and crash reports** (Google's Firebase). What was sent while "Send usage and crash reports" was on (on by default)
  remains in Google's Firebase (see "Usage and crash reports" under "3." in the [Privacy Policy](/privacy)).
  To stop it, turn off **Settings > Info & support > "Send usage and crash reports"** in the app
- **Android automatic backup.** If backup is on in your device settings, app data may be included
  in the backup of **your own Google account**.
  Delete it in your device's **Settings > Google > Backup** (we can't access it)

## 3. Time from request to deletion

| | Time |
| --- | --- |
| Steps A and B (done yourself) | **Done on the spot** |
| Step C (request by email) | We reply **within 7 days of receipt** |

---

If you have questions, reach us through [Contact](/contact).
For how we handle data overall, see the [Privacy Policy](/privacy).
