---
id: index
title: Development story
slug: /story
sidebar_label: Development story
description: Why AURA was made and how it was built with AI, the bugs we ran into, and what we learned along the way.
---

# Development story

Why AURA was born and how it was built, written so that you can follow it without any technical background.

---

## Chapter 1: Why we made it

### Glasses that show text in front of your eyes

It started with the Even G2 smart glasses. They look like ordinary glasses, but they can show small text on the lens, so you can read information while walking or on a train without taking out your phone.

We wanted to read news on them, so we first built an app called **GNews**: a program on a mini PC at home gathered articles, and the glasses received them from there. It worked well enough for the daily commute.

### But it needed a computer at home

The problem was the setup:

Glasses ← Phone ← Mini PC at home (the part that gathers articles)

Using it away from home meant connecting back to the house over a special network (Tailscale). That is fine for one person, but you cannot hand it to others with "first, set up a server at home."

**We needed an article reader that runs entirely on the phone.**

### And one more reason

An RSS reader gathers updates from news sites and blogs into one list, so you see only new articles instead of visiting dozens of sites every day. We had used such tools for years, but never found one that let us read the way we wanted.

So the reader the glasses needed would also be the reader we wanted to use every day. The two motives came together in one app: AURA.

### "If it doesn't exist, build it"

Building an app used to be a job for professionals. But things had changed: AI tools that write code (Claude Code) had become available.

Design it, give instructions, check the result on a real phone, and have it fixed when it is wrong. You no longer had to write every line yourself, as long as you could **decide what to build and judge whether it was built correctly**. That is how AURA began.

---

## Chapter 2: What kind of app it is

### The basic idea

AURA is an **RSS reader with no sync server**.

Many readers rely on a cloud service. Syncing read status across devices is convenient, but it requires an account and means handing over what you read to a company. AURA does not do that: your feeds and read status all stay on the device. There is no account with us and no sign-in screen.

Not being able to sync is a trade-off, in exchange for the peace of mind that **no one is watching**. That is what we chose at first.

:::note Later: sync between devices
We later added **[sync between devices](/sync)** (AURA Plus, optional). Even so, **we did not build a server of our own**. Data is saved in **an app-only folder in your own Google Drive**, and **we never receive it**. You sign in to Google only when you use it. If you don't, everything stays on the device as described above.
:::

### What you can do

**Gather articles**
- Subscribe by entering an RSS / Atom URL
- Add a keyword and subscribe to Google News search results
- Add sources from a list of 103 sources in Japan, so you don't have to search
- Move from another reader with an OPML file

**Read**
- Three list layouts (list / large cards / magazine)
- Three views: unread / all / saved
- Full text is fetched in advance, so you can read without a connection
- Full-text search on the device

**Organize**
- Group feeds into folders and switch between them with tabs at the top
- Manage read and saved articles
- Old articles are deleted automatically so they don't pile up

**Read on the glasses**
- Send articles to the Even G2 and read them on the lens
- Articles read on the glasses are marked as read on the phone too

---

## Chapter 3: How we built it

### AI wrote all of it

Not a single line of AURA's code was written by hand. All of it was written by AI (Claude Code). But "make me an app" does not produce one. The actual process was:

1. **Decide what to build**: which screens, how they work, what data they hold. A human decides this.
2. **Write instructions**: describe the feature in words. If it is vague, you get something different.
3. **The AI implements it**: writes the code, builds it, and checks it itself on an emulator (a virtual phone on a PC).
4. **Check on a real phone**: install it and use it. Only a human can do this.
5. **Have it fixed if it is wrong**: "this is hard to use," "it should work like this," then back to step 2.

We repeated this loop more times than we can count.

### Working in stages

Trying to build everything at once always falls apart, so we split the work into five stages.

| Stage | What becomes possible |
|---|---|
| M1 | Paste a URL and read articles |
| M2 | New articles arrive on their own, and read status is kept |
| M3 | Folders, OPML import and export |
| M4 | Three themes, three list modes |
| M5 | Search, first-run guide, preparing for release |

**M2 was the first big hurdle.** M1 works, but without read status or automatic updates it is not practical. Only at M2 does it become an everyday tool: leave it alone and new articles collect, and what you have read goes away.

---

## Chapter 4: What was hard

This may be the heart of this story. We hit many walls while building it. Here are some of them.

### 4-1. Articles marked as read before you read them

The worst bug an RSS reader can have, because it makes you miss things. There turned out to be **three separate causes**.

- **The setting never worked.** "Mark as read on scroll" could supposedly be turned off, but because of how the code was written, **it stayed on even when switched off**. The screen showed it as off, so you could never tell just by using it.
- **Switching tabs marked articles as read.** When you switched folder tabs, the scroll position carried over. "How far you got in the previous list" leaked into the new list, and **the top of the new list was treated as read**.
- **Flipping quickly through articles marked them as read.** You swipe left and right between articles. To show the next one quickly, the app **prepared the neighboring article as soon as your finger touched the screen**, and that preparation marked it as read, even for articles you only passed.

All three were fixed. What helped was the logging described next.

### 4-2. Can't see the cause, so we built a log

When something goes wrong, you cannot see what is happening inside the phone. We guessed at fixes and missed many times. So we put **a recorder inside the app**: a "Debug" tab in Settings that records what the app does and lets you read it.

**Right after adding it, we found a big one.** Keyword subscriptions (Google News search) were failing to fetch full text: **119 of 125** articles had failed, and no one had noticed. The cause was that Google News links **pointed to a relay page** with only 11 characters of body text, while the real article was elsewhere.

After adding a step that works out the real article's location from the relay page: **successes went from 6 to 25, failures from 119 to 4**.

You can't fix what you can't see. Recording was the fastest way forward.

### 4-3. Garbled text: one stray byte ruins everything

Articles from some sites turned into meaningless strings like this, with the Japanese text unreadable:

æ±äº¬ãf»å¤§é˜ªãŠã™ã™ã‚ã€...

Computers handle characters as numbers, and the mapping between them is called a character encoding. Japanese has several (UTF-8, Shift_JIS and others), and guessing the wrong one garbles every character.

AURA chose **the encoding with the fewest characters that failed to convert**. That sounds reasonable, but it had a fatal flaw: **the Western encoding (Latin-1) reports zero failures for any data at all**. It always "converts," whether the result is correct or not, so it always won. As a result, **a single stray byte in a Japanese document made the whole text be read as Latin-1 and ruined it**.

There was a second problem: the part that parses articles **turned the text back into bytes and read it again**, and if the original declaration was still there, the text was converted twice and broke.

Both were fixed, and the garbling stopped. Articles that had already been saved in a garbled state can be **repaired all at once from Settings**.

### 4-4. Deleted articles kept coming back

This waste went unnoticed until someone pointed it out.

AURA deletes old articles automatically, because otherwise they pile up without limit. But **it was importing the deleted articles again on the next update**: the source still listed them, so they looked new, came back in, and were deleted again. When we measured it:

1st update → 597 new
2nd update → 597 new
3rd update → 597 new
Total articles → stayed at 675

It was importing and deleting 597 articles every time. The harm went beyond data usage: **articles you had finished came back as unread**, because re-imported articles were treated as brand new, and full-text prefetching was redone every time.

The fix was **tombstones**: a small record of each deleted article, so the next import knows "this one was deleted before."

After the fix → the 597 deleted articles are not imported → 0 new

The waste stopped.

### 4-5. Text spilling off the glasses' display

The smart glasses' display is very small, only 576 pixels wide. One character too many and it disappears off the edge. Text that fit when checked on a PC **spilled over on the real glasses**, and it kept coming back no matter how often we fixed it.

The cause was **how character widths were counted**. In a PC browser, a kanji character is exactly twice as wide as a Latin letter, but on the glasses it was **1.75 times**. The difference added up and shifted text at the end of each line.

We had also overlooked symbols like these:

▶ ● ★

We counted them as one Latin letter wide, but on the glasses they were shown **as wide as a kanji character**, so only lines with symbols overflowed. After matching the counting to measurements, every screen fit.

### 4-6. Vague instructions produce the wrong thing

This was not a technical problem but a process failure. Once we asked for a screen to be done "nicely" without giving a detailed spec. Without a spec, the AI has to decide for itself. The result was not what we had in mind, and it had to be rebuilt.

**Deciding concretely what to build is the human's job.** Leave it vague and you will always redo work. From then on, we decided the layout, sizes and even font sizes before handing anything over.

---

## Chapter 5: What we did to make it work

### "You can't fix what you can't see"

Guessing at the cause of a bug usually misses. What worked again and again in AURA's development was **measuring first**.

- Adding the Debug log uncovered a big bug the same day
- "Text spills over" was only understood after actually counting widths
- "Articles come back" was obvious once we ran three updates and lined up the numbers

Almost every place we fixed on a "probably this" guess broke again.

### Better to show nothing than something wrong

AURA can extract an article's full text automatically, but it sometimes picked up ads or rankings instead of the article. We actually opened an article on a gaming site and got an Amazon best-seller ranking instead of the text.

So we added a check that the extracted result really is the article:

- How many words from the headline appear in the text
- Whether it is mostly links (ads and rankings have many links)

If the check fails, AURA **does not force it onto the screen and chooses not to fetch it**. Showing only the summary is far better than showing the wrong text. In our measurements, real articles matched the headline 75–90% of the time, while rankings matched 21–37%, a clear difference.

### Colors are managed by role

AURA's screens never contain colors written in directly. Each part is given a role, such as "background," "body text" or "accent," and each theme holds the actual color for each role. That way, switching between the light, dark and pure black themes only means swapping the color table.

We also made **the build fail if a color is written directly in the code**, so a slip is caught on the spot.

### Readability decided by numbers

There is an international standard for the difference in brightness between text and background (contrast ratio). A ratio of 4.5 or higher is recommended for readability. When choosing AURA's brand color, we measured this instead of relying on taste alone.

The bright gold we first considered scored only 2.25 on a white background and failed. A darker color gave us 5.81.

The final choice was **Sumi and Shu (ink black and vermilion)**: most of the screen is neutral, with vermilion only for the one thing that should stand out. An RSS reader is a tool for reading text for a long time. Saturated colors keep calling for attention at the edge of your vision while you read; neutral colors keep your eyes on the article itself.

---

## Chapter 6: Working with the smart glasses

This is AURA's headline feature, but making it possible took some research.

### There was only one way to put text on the glasses

We found that the only way to show anything on the Even G2 is **through the maker's official app (Even Hub)**. There is no way for your own app to control the glasses directly. So it had to work like this:

AURA (holds the articles)
↓ passes the data somehow
A small program in Even Hub
↓
Glasses

The question was "somehow." AURA and Even Hub are **separate apps**, so they cannot exchange data directly.

### A small server inside the phone

The answer we reached: **AURA runs a small server inside itself.** Servers are usually somewhere on the internet, but one can also run inside the same device, as closed communication that never leaves it. The Even Hub program comes to that server to get articles.

We did not know whether this would actually work, because security restrictions might block it. So **we checked first**: we set up a small test server and only tried whether the glasses' side could connect. It worked, and the log shows:

HIT GET /rss/summary Origin= http://127.0.0.1:45453 → 200

Only after confirming the connection did we start the real implementation. Had we started on "it will probably work," the effort might have been wasted.

### How it looks on the glasses

The glasses' display is green only, with just four shades, and fits only about 10 lines of text. It cannot look like the phone, so the roles are split:

- **Glasses**: see what has arrived and mark what interests you
- **Phone**: read it properly

The main flow we have in mind is to "save" articles on the glasses and read them later on the phone.

### Photos too

With only four shades of green, we thought photos were impossible. But there is a classic technique called **dithering**, which creates the illusion of in-between shades through the density of tiny dots, the same principle as the halftone dots in newspaper photos.

We compared three methods by actually converting images. **Floyd-Steinberg** (error diffusion) was by far the best: landscapes and people were recognizable, and we could even read the characters written on a paper lantern.

The conversion was heavy, though, taking close to 0.6 seconds per image. After reworking the calculation, it became **5 times faster**, and we confirmed that **the output did not change by a single pixel**. Faster, without giving up any quality.

---

## Chapter 7: What's next

### Near term

**Released on Google Play (2026-10)**
We started distributing the production version on Google Play on October 27, 2026.

**Fix things while using it**
Daily use reveals inconveniences we did not expect. This is the stage of clearing them up one by one.

### Further ahead

**A better experience on the glasses.** Right now it goes as far as reading articles. Quietly notifying the glasses when new articles arrive is one possible direction.

**Other devices.** The same idea could apply to devices with small screens, such as smartwatches.

### What won't change

**We will not run a sync server.** Convenience would come at the cost of handing over what you read to someone else, and this design was chosen to avoid that. If you need to move, you can take your feeds with you in an OPML file. We think that is enough.

---

## Closing

AURA started from a simple idea: reading articles on smart glasses.

We had no experience writing code. But we knew what kind of tool we wanted, and we could tell when something was wrong. The AI wrote the code and a person set the direction, and that combination made it real.

We made many mistakes along the way: rebuilding after vague instructions, missing with guessed fixes, and even things reported as "done" that did not actually exist. Each time, we went back, measured and fixed it. Nothing special, just **checking before moving on**.

We hope this app is useful to someone.

---

*Developed by Black Cat Fortune Works (Kuroneko Fukuya)*
