---
id: privacy
title: Privacy Policy
slug: /privacy
sidebar_position: 80
---

# Privacy Policy

Last updated: 2026-10-30 / Applies to: AURA 1.0.0 (Android) and AURA for G2 0.98.x (plugin for Even G2)

This is an English translation of the Japanese privacy policy. If the two differ, the Japanese version prevails.
AURA ("the app") is an RSS reader provided by **Black Cat Fortune Works (Kuroneko Fukuya)** ("we").
**We do not receive your personal data.** The only server we operate is a single relay server (for the AI scripts of the audio briefing, usage counts, free trial device tokens, and the shared dictionary; see "3." below), and it does not receive your name, email address, list of feeds, or record of the articles you have read.
However, **to show ads in the article list, the Magazine layout, search results, and AURA Brief in the free version (Free), the app includes Google's ad SDK (Google AdMob)**.
The ad SDK sends the information described in "2. Ads (free version only)" below **to Google**.
The app also includes **Google's Firebase** (Analytics and Crashlytics) to improve the app and fix bugs. If you turn this off in Settings, nothing is sent ("Usage and crash reports" under "3.").
**With AURA Plus, ads in the article list and elsewhere are not loaded.** However, only when you make the 4th or later AURA Brief · Audio episode of the day or a long version, a rewarded ad is shown when you tap, and the ad SDK communicates at that time ("2. Ads").
The following describes what the app actually does.

## 1. Information we collect

**We do not collect information that identifies you, such as your name or email address.**

The app has no user registration or login. The only thing we operate is a single relay server (for the AI scripts of the audio briefing, usage counts, free trial device tokens, and the shared dictionary; see "3.").
Your feed list, the articles you have read, read and saved states, and settings are not sent outside the device ("4. What is stored on the device").
However, when "Send usage and crash reports" is on in Settings (on by default), the types and counts of the features you used and records of app crashes are sent to **Google's Firebase**, and we view the aggregates and records on the Firebase console ("Usage and crash reports" under "3.").
We never receive your name, email address, search words, or list of feeds. Article headlines, summaries, and article text pass through the relay server only when AI writes the scripts for the audio briefing ("AI scripts" under "3."). When "Improve the dictionary together" is on, the words and readings you added and similar items are sent to the relay server ("Shared dictionary of readings and translations" under "3.").

## 2. Ads (free version only)

In the free version, one ad slot is shown after every 6 items in the article list and in search results. In the Magazine layout, 1 in every 6 pages is an ad page, and one ad slot is also shown at the "Words" section break of AURA Brief. Ads are labeled "Ad." The interval between ads may change (we change it with a settings file placed on our official website).
Ads are not shown in article text, Read aloud, Photo frame, the screensaver, the report pages of AURA Brief, the Settings screens, the Even G2 (glasses) display, or widgets. There are no full-screen ads at launch or when you open an article.

In the free version, an ad (rewarded ad) is also shown on the AURA Brief report download screen, only to those who choose it. If you watch it to the end, you can download the PDF of that report once (there is a daily limit on the number of times). This ad is shown only when you tap the button.
When you make AURA Brief · Audio, a rewarded ad is also shown only to those who choose it (on the free plan for each episode; with AURA Plus from the 4th episode of the day; 2 ads for a long version; see "Counts and ads" in "AI scripts" under "3."). This ad is also shown only when you tap the button. **With AURA Plus, this is the only time the ad SDK communicates.**
Ads are served by **Google AdMob** (Google LLC).

### Information the ad SDK sends to Google

When showing ads, the Google Mobile Ads SDK collects the following information and sends it to Google.

| Information | Details | Use (by Google) |
| --- | --- | --- |
| Device identifiers | **Advertising ID** (Android's Advertising ID), **App set ID** | Ad delivery, ad measurement, fraud prevention |
| Approximate location | Region estimated from the connection's **IP address**. **Precise location such as GPS is not used** (the app does not have location permission) | Region-appropriate ads, fraud prevention |
| Ad interactions | Ad views and taps, app launches, and similar actions | Ad delivery and measurement, fraud prevention |
| Diagnostic information | Crash logs of the ad SDK and performance information such as loading speed | Fixing bugs in and improving the performance of the ad SDK |
| Device and app information | Device model, OS version, language, screen size, and the app's name and version | Showing ads suited to the device |

- **Article content, your feed list, and the articles you have read are not passed to the ad SDK.** Ads are not chosen to match article content
- Communication is encrypted
- The information is handled under Google's policies.
  See [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites?hl=en) and
  [Google Privacy Policy](https://policies.google.com/privacy?hl=en)

### Ad settings and consent

- You can **reset or delete your Advertising ID** and opt out of personalized ads from your device's
  **Settings > Google > Ads** (on some devices, **Settings > Security and privacy > More privacy settings > Ads**)
- **In the EEA (European Economic Area), the UK, Switzerland, and other regions** where consent is required by law, a consent screen is shown before ads are loaded
  (Google's User Messaging Platform). You can change your consent from the app's **Settings > Info & support > "Change ad consent"**
- With **AURA Plus**, ads are not shown, and the ad SDK does not load ads (except for the rewarded ads shown when you tap, for the 4th or later AURA Brief · Audio episode of the day and for a long version)

## 3. Communication outside the device

The app communicates with **the parties needed for you to read**, with <strong>ad delivery in the free version (Google)</strong>, and with **our relay server** (for the AI scripts of the audio briefing, usage counts, free trial device tokens, and the shared dictionary).

| Destination | When | Purpose |
| --- | --- | --- |
| Sources you have added (RSS / Atom URLs) | When fetching | Getting the article list |
| `news.google.com` | When you have keyword feeds | Getting the search result feeds and resolving articles' actual URLs |
| `note.com`, `zenn.dev`, `qiita.com`, `medium.com`, `dev.to`, `hn.algolia.com` | When you choose that site as a place to search for a keyword feed (off by default) | Querying with the keyword and getting the search results |
| Sites that publish the articles | When the setting to keep full text is on, and when you open an article | Getting the article text |
| Servers hosting images included in articles | When showing or saving images | Getting images |
| Providers of embeds (YouTube, X) | When you tap an embed in the article text | Showing the embed |
| `/favicon.ico` on the source's site | When adding a feed and when refreshing | Getting the icon shown in the list |
| Google (AdMob, User Messaging Platform) | When showing ads **in the free version**. With AURA Plus, only when you watch a rewarded ad for the 4th or later audio briefing episode of the day or a long version ("2. Ads") | Getting and showing ads, checking consent ("2. Ads") |
| Our official website (`kuroneko-fukuya-honpo.github.io`) | While you are using a coupon, and when you open the app in the free version (at most once every 6 hours) | Checking the coupon acceptance status and the ad position settings (both are public files). We send no information |
| Google Play | When purchasing AURA Plus, restoring purchases, and at launch | Purchase processing and checking purchase status ("AURA Plus purchases" below). Checking whether a new version is available (in-app updates) |
| Google (Google Drive) | When sync between devices is on | Sync ("5. Sync between devices") |
| Google (ML Kit) | When identifying an article's language | Diagnostics and usage analytics ("Identifying article language" below) |
| Google (ML Kit translation) | When translating headlines and summaries in "World view" | Getting the translation models (about 30 MB per language). Translation is done on the device ("Translation in World view and on-device AI" below) |
| Google (Firebase Analytics, Firebase Crashlytics) | While you use the app and when the app crashes (when "Send usage and crash reports" is on in Settings; on by default) | Improving the app and fixing bugs. What is sent: the types and counts of the features you used, the device model and OS version, and records of crashes. Article headlines and URLs and your list of feeds are not sent. Turn off Settings > Info & support > "Send usage and crash reports" and nothing is sent ("Usage and crash reports" below) |
| Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) | When you choose a reading font in Settings, and when you open the font selection screen | Getting font files. We send no information |
| Our relay server (Cloudflare Workers, `aura-relay.kuroneko-fukuya.workers.dev`) → Anthropic (Claude API). Google (Gemini API) only when Claude is unavailable | When making the audio briefing of AURA Brief, and when making a new episode for a report you can listen to (can be turned off in Settings) | For AI to choose the topics of the audio briefing and write the script. What is sent is as described in "AI scripts" below |
| Our relay server (shared dictionary) | When "Improve the dictionary together" is on (off by default). When fetching the approved dictionary (once a day regardless of the switch, while charging and on Wi-Fi) | Sharing readings and translations ("Shared dictionary of readings and translations" below). We send no information when fetching the dictionary |
| Official distributor of the VOICEVOX voice data | When importing the voice data for the audio briefing voices (猫使アル and 猫使ビィ) | Only to get the voice data files. We send no information |
| Distributors of the "AI voice" data (`huggingface.co`; `raw.githubusercontent.com` for the English pronunciation dictionary) | When importing the AI voice data (when you choose an AI voice for Read aloud, or import it in Settings > Read & listen > Read aloud > AI voice data) | Only to get the voice data files (about 100 MB). We send no information |
| Provider of the text-to-speech engine (e.g. Google) ※ **Communication made by the device's text-to-speech engine, not by AURA** | When reading aloud, with online voices you allowed in Settings, an article in a language for which the device has no voice installed | To turn the text of the article being read into speech, the engine sends it to the provider's servers. AURA itself does not send it ("Read aloud" below) |

- Favicons are fetched **directly from the source's site**. No external favicon service is used.
- In these communications, information that accompanies ordinary HTTP communication, such as the connecting IP address and User-Agent,
  is passed to the other party's server. This is received not by us but by **each source** (Google, for ads).
  It is handled under each source's policies.
- For older sources, the app can also communicate without encryption (`http://`).
  However, it **tries `https://` first, and uses `http://` only for sources that do not support it**.
- Articles are opened in an external browser or a "read later" service (such as Pocket) only when you do so.
  Subsequent communication takes place between those apps and sites.

### AURA Plus purchases (Google Play)

AURA Plus is purchased as a Google Play subscription. **Payment information is handled by Google, and we do not receive it.**
The app receives the purchase status from Google Play and determines whether you have AURA Plus **on the device** (our servers are not used).

### AURA Plus free trial (preventing improper reuse)

The AURA Plus free trial (14 days) can be used only once per device. To prevent reusing the trial by clearing the app's data or reinstalling the app,
a **device token** is sent to our relay server (the same as in "AI scripts" below) when you start the trial and when you make the audio briefing of AURA Brief during the trial.

- **Device token**: A string made by adding a value unique to the app to the Android device ID (ANDROID_ID, a value determined per app) and converting it into an irreversible form (SHA-256). **The device ID itself is not sent**. The token does not reveal your name, phone number, Advertising ID, or the like
- **What the relay server keeps**: Only the token and the date and time the trial started. It is deleted automatically after **400 days**
- **Purpose**: Only to prevent reuse of the trial. It is not used for ads or analytics
- If the app cannot connect, the trial is not started, and you are asked to try again where you have a connection

### Identifying article language (Google ML Kit)

To identify the language of articles (to decide whether to offer translation), the app uses Google's **ML Kit** (language identification).
Identification is done **on the device**, and **the text of articles is never sent outside.**
However, ML Kit sends the **identified language, device information, app information, performance metrics, and a device ID**
**to Google** for diagnostics and usage analytics. This information is not passed to third parties (according to Google).
For details, see [ML Kit data disclosure](https://developers.google.com/ml-kit/android-data-disclosure).

### Translation in World view and on-device AI (Google ML Kit)

In AURA Plus's "World view," the headlines and summaries of articles from other countries are translated **on the device** with Google's **ML Kit** (translation). The translation models (about 30 MB per language) are downloaded from Google.
AURA does not send the headlines and summaries being translated to our servers or to any other company's servers. For the information ML Kit sends to Google for diagnostics and usage analytics, see [ML Kit data disclosure](https://developers.google.com/ml-kit/android-data-disclosure).

Also, when you turn on Settings > Advanced > "Use on-device AI," AI on the device (ML Kit GenAI, Gemini Nano) is used for things such as polishing the "Today's numbers" text. The text is handled on the device, and AURA does not send it outside.

### Usage and crash reports (Google Firebase)

To improve the app and fix bugs, the app uses Google's **Firebase Analytics** (how the app is used) and **Firebase Crashlytics** (records of crashes).

- **What is sent**: The types and counts of the features you used (e.g. started Read aloud, exported a report, subscribed to AURA Plus; only types such as the language of the article read aloud or the format of the report), your current plan (Free / Plus), the device model and OS version, the app version, and records of crashes (where the crash happened). In addition, Firebase handles the app instance ID (an ID that changes when you reinstall the app) and the approximate region estimated from the connection's IP address
- **What is not sent**: Article headlines, URLs, and article text, search words, your list of feeds, and coupon codes. **We do not let Firebase collect the Advertising ID or the Android ID**
- **How to stop it**: Turn off Settings > Info & support > "Send usage and crash reports," and neither Analytics nor Crashlytics sends anything. Records of crashes that happen while it is off are discarded without being stored on the device
- The information sent is handled by Google and is not sold to third parties. For details, see [Firebase privacy and security](https://firebase.google.com/support/privacy)

### Read aloud (the device's text-to-speech engine)

Read aloud: AURA reads articles aloud using the text-to-speech engine set on the device (e.g. Google's Speech Recognition and Synthesis service or Samsung's text-to-speech engine). When the device does not have a voice for that language installed, the app reads aloud with the engine's online voice, only if you have allowed this in Settings. In that case, the text of the article being read is sent to the servers of the engine's provider (such as Google), and its handling follows the provider's privacy policy. AURA itself does not send the text being read to our servers or to any other company's servers. You can stop this at any time by choosing "Never" in Settings > Read & listen > Read aloud > Voices for other languages > "Use online speech synthesis" (the other choices are "Always" and "Wi-Fi only").

### AI scripts (audio briefing of AURA Brief, Beta)

The audio briefing of AURA Brief (**AURA Brief · Audio**) is a **Beta**. Its content may be changed or it may be discontinued without notice.
In AURA Brief's "report you can listen to" ("Add AURA Brief · Audio" to a report, AURA Plus), when there is not yet an audio briefing episode for that period, a new episode is made in the same way as described here. What is sent is also the same (if an episode already exists, that episode is used without sending anything).
For AI to write the script, the app uses **Anthropic's Claude API** through our relay server (Cloudflare Workers, `aura-relay.kuroneko-fukuya.workers.dev`).
Only when Claude is unavailable (congestion, timeout, outage, etc.) and when the daily limit on Claude usage is exceeded, **Google's Gemini API** is used as a backup. What is sent is the same for both.

- **What is sent to choose topics**: The **headline, outlet name, date, and one-line summary** from the **article list** (up to 120, newest first) of the audio briefing's scope (folder or keyword). Article text, images, and URLs are not sent
- **Fetching the full text of articles for the audio briefing**: For the articles on the topics the AI chose (up to 3 per topic from different outlets; normally up to 9, and up to 15 for a long version), the app fetches the **full text** on the spot from the site that publishes the article if it is not already on the device. That **article text** (up to 1,200 characters per article; at the research stage, 800 characters and the URL) and the headline, outlet name, and date are sent to the relay server. The text of articles that were not chosen is not sent
- **Listener information**: **The names of the outlets you read most (top 3), the number of articles you read this month, and the number of saved articles** (numbers and names only). These are used for the "word for you" in the program. The articles you read themselves, the saved articles themselves, and your list of feeds are not sent
- **Other things sent**: The name of the audio briefing's scope (a folder name or one keyword), the program name and the two hosts' names, the script language (the app's display language: Japanese or English), how simple the script's wording is (simple, simpler), the **handover from the previous broadcast** (a note of about 150 characters that the AI made last time), and **feedback trends** (such as "likes detail," "likes it shorter," "topics that were good"; individual feedback is not sent). A **per-device identifier** for counting usage (a random value the app creates the first time it is used, containing no information that identifies you), your plan (Free / Plus), and the app version number
- **What is not sent**: Your list of feeds itself (source URLs), the record of the articles you have read itself, search words, and personal information such as your name, email address, and Advertising ID. Articles from sources that refuse use by AI (e.g. 情報の灯台, a Japanese outlet) are included in neither the list nor the article text (to research the same event as the topic, only distinctive terms found in such an article, up to 8 per topic, may be sent)
- **Research with web search**: To explain the chosen topics in detail, Claude researches the events with **web search** (the web search feature of the Claude API) (with the backup Gemini, the Gemini API's "Grounding with Google Search"). The words used for searching are made from the content of the articles and do not include your information
- **Keeping research notes on the relay server for only 24 hours**: The **research notes** the AI made from the articles and searches are kept on the relay server (Cloudflare's storage) for **only 24 hours** so that the same combination of articles is not researched again, and are deleted automatically when the time is up. The name of the storage location is a value made from the combination of article URLs; neither the URLs themselves nor your information are kept
- **What the relay server keeps**: The research notes above; the per-device identifier, the number of episodes made that day, and the number per stage (deleted automatically after 2 days); and a number used only while one audio briefing is being made (the "episode ticket," deleted automatically after 1 hour). The article text sent and the text of the script are not kept (the logs keep only the time, result, counts, and amount used)
- **What you send is not used to train AI**: Under the Claude API (Anthropic's commercial terms), what you send is **not used to train Anthropic's AI** (Anthropic may retain it for a certain period to monitor for misuse). For details, see [Anthropic's Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms) and [Privacy Policy](https://www.anthropic.com/legal/privacy). The backup Gemini API is processed under the paid tier, and under Google's terms, what you send is **not used to improve Google's products** ([Gemini API Additional Terms of Service](https://ai.google.dev/gemini-api/terms)). We also do not let what is sent be used to train AI, nor do we use it to improve our products
- **Your own API key**: The current version has no feature for using your own AI API key. If we add one in the future, the key will be kept **only on the device** and will not be sent to the relay server
- **To prevent misuse**, Google's **Firebase App Check** (Play Integrity) is used to confirm that requests come from genuine AURA. At this time, a check of whether the device and app are legitimate is performed through Google
- **Counts and ads**: On the free plan, watching one ad (rewarded ad) gives 1 episode per day. AURA Plus gives up to 3 episodes per day without ads (from the 4th episode, one ad each, up to 8 episodes per day). A long version (5 topics) takes 2 ads (for ads, see "2. Ads"; the ad SDK communicates when you watch these ads, even with AURA Plus). An episode for the same scope is made once per day; from the 2nd time on the same day, the episode kept on the device is played
- **How to stop it**: Turn off Settings > Read & listen > Read aloud > "Write scripts with AI," and the app does not call the relay server and reads with a script made on the device

### Shared dictionary of readings and translations ("Improve the dictionary together")

Our relay server (the same as in "AI scripts" above) handles a shared dictionary that lets users fix mispronunciations in Read aloud and translations in "World view" together.

- **Sent only when you turn it on**: When Settings > Read & listen > Read aloud > Reading dictionary > "Improve the dictionary together" (off by default) is on, the app sends the words and readings you added yourself, the translations you corrected in "World view" headlines, English words whose reading was unknown, and a per-device token (a 16-digit random number). Articles, full headlines, folders, keywords, the device name, and accounts are not sent
- **What the relay server keeps**: The words sent are kept as candidates with no time limit (up to 5,000 words). Words that are reviewed and approved are delivered to every user's device as the shared dictionary. The token is not linked to your name or email address
- **Fetching the approved dictionary**: Regardless of the switch, every device fetches the approved dictionary from the relay server once a day (while charging and on Wi-Fi). Nothing is sent at that time
- When you turn it off, anything not yet sent is deleted from the device, and nothing more is sent

### Radio programs (the app "Radipocket" on the same device) (Japan only)

To check radio programs mentioned in articles, and to play those programs, AURA may pass the **station, program name, and broadcast date and time** to the app "Radipocket" on the same device. This is passed **only within the same device**, and AURA does not send it to external servers for this purpose. How Radipocket handles it after receiving it is governed by [Radipocket's privacy policy](https://radipocket.github.io/docs/privacy-policy.html). If Radipocket is not installed, nothing is passed.

### Videos on this website

The introduction videos on this website load the YouTube (Google) player (`youtube-nocookie.com`) only when you tap the play button. Nothing is sent to YouTube until you do. After you play a video, [Google's Privacy Policy](https://policies.google.com/privacy) applies.

## 4. What is stored on the device

The following data is **all stored in the app's area on the device**. It is never sent to us.

- Feed list, folders, articles (headline, summary, article text), read and saved states (the app's database)
- Cache of article images
- App settings (theme, text size, refresh interval, the passphrase for the Even G2 connection, etc.)
- Automatic backups of the feed list (once a month, up to 6 generations). They are stored in
  the app's dedicated external directory (`Android/data/ca.kuroneko.aura/files/Documents/`)
  and are deleted together with the app when you uninstall it
- The app's activity log. **Only the latest 500 entries are kept in the device's memory**, and they are cleared when the app is closed
- **Log for bug reports** (Settings > "Advanced" > "Log for bug reports").
  It is saved to a file on the device **only when you turn it on** (**it is not created while off**; it is off at first).
  It holds up to 1MB, and anything beyond that is deleted starting from the oldest. **It is never sent to us automatically.**
  It leaves the device only when you tap "Export to a file" or "Share."
  This log contains the URLs of the sources you subscribe to and article headlines (it does not contain article text or purchase information)
- In the free version, the ad SDK and the consent screen store on the device the information needed for the consent status and for showing ads
- **Episodes made for the audio briefing of AURA Brief**: The script, research notes, sources researched, the articles it was based on (headline, outlet name, URL), and this episode's report (PDF) are kept in a storage area inside the app. The audio is kept for the latest 3 episodes per scope (up to 300 MB in total) so it can be played immediately from the 2nd time. They are not sent to us
- **Exporting a program report**: When you tap "Save this episode's report (PDF)" on the script screen, a PDF (script, research notes, list of the articles it was based on) is written to the save location you choose. When you tap "Save audio" with AURA Plus, the audio is also saved to the device's "Downloads" (it is for you to listen to yourself and may not be distributed)
- **VOICEVOX voice data** (猫使アル and 猫使ビィ): Downloaded from the official distributor and placed on the device (about 84 MB). The voice is created on the device, and the text to be read is not sent outside
- **"AI voice" data** (Kokoro): Used for the "AI voice" in Read aloud and for AURA Brief · Audio in English (Jet and Kit). Downloaded from the distributor (`huggingface.co`; `raw.githubusercontent.com` for the English pronunciation dictionary) and placed on the device (about 100 MB). The voice is created on the device, and the text to be read is not sent outside
- **Audio briefing records**: The result of each stage when making an audio briefing (date and time, name of the scope, stage, result, seconds, the relay response number) is kept on the device, only the latest 20 entries (to check why it could not be made). It does not contain article text or headlines. It is not sent to us
- **Audio briefing feedback**: Feedback on the script screen (good, not great, more detail, shorter) is kept on the device, up to 200 entries. Only trends are sent to the relay server ("AI scripts" under "3.")

When you uninstall the app, these are deleted from the device.

:::info About Android's automatic backup
The app has Android's automatic backup enabled. If backup is enabled in the device's settings,
app data such as your feed list and settings may be included in the backup of **your own Google account**.
This is a feature of Android, and we cannot view its contents.
:::

## 5. Sync between devices (AURA Plus)

With **AURA Plus**, you can **keep your feeds, settings, read states, saved articles, and article lists the same across your other devices**.

- The data used for sync is stored in <strong>the "app-specific folder" of your own Google Drive</strong>.
  This folder is a place for AURA alone to read and write, and **it is not visible even to you**.
- **We (Black Cat Fortune Works) do not receive this data.** The data exists only in your own Google Drive.
  Because we have no server, we cannot view the contents of sync.
- **Article text and images are not synced** (each device fetches them itself). What is synced is lists, states, and settings.
- Sync takes place only when you sign in to Google in <strong>Settings > Connections > "Sync between devices"</strong> (off by default).
  Signing out stops it. The feeds and settings on the device remain as they are.
- When you sign in, the app receives **your account's email address** from Google. To show on screen which account you are syncing with, it is stored
  **only on the device** and is not sent to us.
- To determine the "main device," **a random device ID created by the app and the device's model name** are stored together with the sync data
  in the app-specific folder of your own Google Drive (this is not the Advertising ID).

For what matches and what does not, and how the numbers appear, see [How sync between devices works](/sync).

### Deleting data

For how to delete your account (sync) and device data, and how to request deletion from us, see [Deleting your account and data](/delete-account).

## 6. Provision to third parties

Because we do not hold your data (except for what the relay server keeps: the identifier for counting usage (2 days), the free trial device token (400 days), and the words sent with "Improve the dictionary together" ("Shared dictionary of readings and translations" under "3.")), **we do not provide, sell, or share data with third parties**.
The information the ad SDK in the free version sends to Google is as described in "2. Ads (free version only)."
Usage and crash reports (Google's Firebase) are as described in "Usage and crash reports" under "3."
The AI scripts for the audio briefing (Anthropic's Claude API, with Google's Gemini API as a backup) are as described in "AI scripts" under "3."

## 7. Permissions

| Permission | Use |
| --- | --- |
| Internet / access network state | Fetching articles. Determining "Refresh only on Wi-Fi." Getting ads in the free version |
| Show notifications | Notifications of new articles (when turned on in Settings) and the persistent notification while the Even G2 connection is enabled |
| Foreground service (special use / `specialUse`) | As described below |
| Foreground service (media playback) | While Read aloud or the audio briefing is playing |
| Advertising ID (`AD_ID`), Android's ad-related features (`ACCESS_ADSERVICES_*`) | Ads in the free version (declared by the ad SDK) |
| Google Play purchases (`com.android.vending.BILLING`) | Purchasing AURA Plus and checking purchase status |

### Why a foreground service is used (Even G2 connection)

While articles are shown on Even G2, the Even Realities app is in the foreground and AURA goes to the background.
If it stays in the background, the OS may stop its process, and it can no longer respond to reads from the glasses.
So, **only while the connection is enabled**, the app runs a foreground service with a persistent notification.

- It runs only when you yourself turn on **Settings > Connections > Even G2 (glasses)** (off by default)
- This service opens only **a listener closed within the device (`127.0.0.1`)**, which cannot be connected to from outside the device
- So that other apps on the same device cannot read from it, it responds only to requests with the matching **8-character passphrase**
- Article content is never sent outside the device
- Turning it off stops both the service and the notification

### AURA for G2 (plugin for Even G2)

AURA for G2 is a plugin that runs inside the Even Realities app (Even Hub) to show articles on the glasses.
It receives articles from AURA on the same phone.

| Item | Details |
| --- | --- |
| Permissions requested | **Network (network) only**. The destination is limited to `http://127.0.0.1:8777` (AURA's listener on the same phone) |
| Communicates with | **Only AURA on the same phone**. It receives the folder and article lists, article text, and images, and tells AURA when read and saved states are toggled. To check whether you have AURA Plus, it queries AURA every 5 seconds |
| Sending outside the device | None. We do not receive articles or records of actions either |
| What is stored | The passphrase (8 characters) and port, and your view choice (Unread, All, Saved). These are stored in the storage area for this plugin inside the Even Realities app |
| What is not used | The microphone, camera, location, and photos are not used |

- Display on the glasses is done through the Even Realities app. Its handling is governed by Even Realities' policies
- The AURA Plus information link on the settings screen on the phone opens our site (this site) in a browser only when tapped

## 8. Use by children

The app is not designed for children and is not intended for those under 13.
The content of the articles shown depends on the sources you have added.

## 9. Changes to this policy

If we change the content, we will update this page and revise the last updated date.

- 2026-10-30: Added "Videos on this website" at the end of "3." (YouTube is loaded only when you tap play)
- 2026-10-30: In the introduction, "2.", and "3.", added that even with AURA Plus, a rewarded ad is shown for the 4th or later AURA Brief · Audio episode of the day and for a long version (and that the ad SDK communicates at that time). Added "Translation in World view and on-device AI" and "Shared dictionary of readings and translations" to "3.", and added rows for the places to search for keyword feeds, embed providers, ML Kit translation, the shared dictionary, and the distributors of the "AI voice" data, plus in-app updates for Google Play, to the table of destinations. Revised what is sent in "AI scripts" (the length of article text, the program name and the two hosts' names, the script language, and distinctive terms from articles whose sources refuse use by AI) and the path for turning off online speech synthesis. Added the "AI voice" data to "4." and revised how many audio briefing episodes are kept. Revised what our relay server handles in "1." and "6.", and added the foreground service (media playback) to "7." Changed the version of AURA for G2 to 0.98.0
- 2026-10-25: In "AI scripts" under "3." and in the table of destinations, added that the same method is used to send when a new audio briefing episode is made for AURA Brief's "report you can listen to"
- 2026-10-17: In "AI scripts" under "3." and in the table of destinations, changed the AI destination to **Anthropic (Claude API)** (with Google's Gemini API as a backup only when Claude is unavailable). Searches are done with the web search of the Claude API. Revised how the simplicity of the script's wording is described
- 2026-10-14: Revised "AI scripts" under "3." (that it is a Beta; that the headline, outlet name, date, and summary from the article list are sent to choose topics; that the full text of chosen articles is fetched and the article text is sent for the audio briefing; listener information (outlets you read most, number of articles read this month, number of saved articles); that research notes are kept on the relay server for only 24 hours; that what is sent is not used to improve products; that your own API key stays only on the device and is not sent to the relay server; counts and ads). Revised the handling of article headlines in "1.", and added to "4." the episodes made for the audio briefing and scripts, exporting program reports, VOICEVOX voice data, feedback trends, and audio briefing records
- 2026-10-12: Changed what is sent for "AI scripts" to the full text of the 3 articles explored in depth, and added that the events of the articles are researched with Google Search
- 2026-10-12: Added "AI scripts (audio briefing of AURA Brief)" to "3.", and added rows for our relay server (Gemini API) and importing VOICEVOX voice data to the table of destinations. Revised "We do not operate any servers" in the introduction, "1.", "3.", and "6." to reflect the relay server
- 2026-10-09: Added "Radio programs (the app "Radipocket" on the same device)" to "3." (passing the station, program name, and broadcast date and time to Radipocket on the same device to check radio programs mentioned in articles and to play them)
- 2026-10-08: To reflect the inclusion of Google's Firebase (Analytics and Crashlytics) for usage and bug reports, revised the introduction, "1.", and "6.", and added the Firebase row and "Usage and crash reports" to the table of destinations in "3."
- 2026-10-07: Added Read aloud to "3." (that when reading with the online voice of the device's text-to-speech engine, the text being read is sent to the engine's provider), and added that row to the table of destinations
- 2026-10-07: Revised the ad locations in "2." (ad pages in the Magazine layout, search results, AURA Brief), the rewarded ad for the PDF of AURA Brief reports, and the communication with our official website in "3." (ad position settings)
- 2026-10-06: Updated the ad interval in "2." to the current version (every 6 items in the article list), and added the ads in the Magazine layout and where ads are not shown (Read aloud, Photo frame, screensaver)
- 2026-10-03: Added Google Fonts, used when choosing a reading font, to the destinations in "3."
- 2026-09-27: Added AURA Plus purchases (Google Play) and identifying article language (Google ML Kit), and destinations (our official website, Google Play, Google Drive, ML Kit) to "3."; the email address and device ID and model name handled for sync to "5."; and the purchase permission and new-article notifications to "7."
- 2026-09-25: Added the permissions, destinations, and stored data of the Even G2 plugin "AURA for G2" to "7."
- 2026-09-17: Added "5." about sync between devices (AURA Plus, stored in your own Google Drive), and renumbered the following sections
- 2026-09-14: To reflect adding ads (Google AdMob) to the free version, added "2. Ads" and revised 1, 3, 5, and 6

## 10. Contact

See [Contact](/contact).
