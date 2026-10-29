---
id: sources
title: About listing sources
slug: /sources
sidebar_position: 91
description: For operators of news sites and blogs. How to be listed in AURA's "Source directory," and how AURA handles articles.
---

# About listing sources

For operators of news sites, blogs, and other media.

**AURA** is an Android app for collecting and reading new articles via RSS. It is made by **Black Cat Fortune Works (Kuroneko Fukuya)**.

We want AURA to be an app that connects the operators who write and deliver articles with the people who want to read them. **As fellow providers of information, we would be glad to work together toward the same goal.** Operators who would like to be listed in AURA's "Source directory" are invited to read this page.

## Listing is free

Listing costs nothing. AURA will not ask you for money either.

## Guidelines for listing

We consider outlets such as the following as candidates for listing.

- The operator and their contact information can be identified
- An RSS (or Atom) feed is published and is updated on an ongoing basis
- The articles are written by you, with links to sources and the like
- The content is not illegal, not adult-oriented, and not a wholesale copy of other sites
- You can specify that your articles are not sent to AI (at the operator's request, we list that source with a setting that keeps its articles from being sent to AI. To research the same event as a topic, only distinctive terms found in such an article, up to 8 per topic, may be sent)

Black Cat Fortune Works decides whether to list an outlet, and also decides on removing a listing. Listing is not guaranteed. Also, because the "Source directory" is built into the app, listings are added with app updates. Even after you apply, your outlet may not appear right away.

## How your articles appear in AURA

AURA is an app that runs on the user's own device. **Black Cat Fortune Works has no server that collects articles**, and does not hold articles or distribute them to others. Both fetching and storing articles are done by the user's device, connecting directly to your site (in AURA Brief · Audio, the text of the selected articles passes through our relay only while the script is being written, and is not kept. Only the research notes made by AI are kept for 24 hours).

- **List**: Shows the headline, a short excerpt (up to 300 characters), and a small image. The excerpt and the image are taken from what is in the RSS feed
- **When an article is opened**: The user's device extracts the article text from the original page and shows it in an easy-to-read form. The extracted text is stored **only on the user's device**. Read articles are cleaned up automatically after a certain period (30 days by default). It is never put anywhere other people can see it
- **To the original site**: Below the article there is "Open original article," which opens the original page in a browser when tapped. Links in the article text also open in a browser. In Settings, users can also choose to open articles directly in a browser from the list
- **Images**: The user's device fetches them directly from where the images are served
- **How the article text is tidied**: To make it easier to read, parts outside the article text, such as ads and related articles, may be removed. Users can also choose to hide parts themselves
- **Read aloud**: When the user chooses to, the article is read aloud. Speech synthesis is done on the device by default
- **Ads**: In the free version, ads appear in places such as the article list. They are never shown overlaid on the article text

## We do not let articles be used to train AI

AURA does not let articles be used to train AI (including generative AI). In AURA Brief · Audio (Beta), the headlines and summaries of the articles in the scope the user chose, and the full text of the selected articles, are sent through our relay to AI to write the script. For the AI, Anthropic's Claude API is used first, and Google's Gemini API is used only when Claude is unavailable. With either one, the articles sent are not used to train AI or to improve products (Anthropic's commercial terms; the paid tier of the Gemini API). If the operator of a source asks us to, we list that source with a setting that keeps its articles from being sent to AI (to research the same event as a topic, only distinctive terms found in such an article, up to 8 per topic, may be sent). There is no mechanism for redistributing articles.

## Information to send us

Please send the following by email to the contact address below.

1. Outlet name
2. Site URL
3. RSS URL
4. Language
5. Category (e.g. technology, news, business)
6. Operator name (company name or individual name)
7. Contact information (email address, etc.)

## Contact

- **Email**: [kuroneko.fukuya@gmail.com](mailto:kuroneko.fukuya@gmail.com)
- **Example subject**: `AURA source listing request: Outlet name`

Requests to remove a listing or to correct how content is displayed are also accepted at the same address. When we hear from you, we will check the details and reply.
