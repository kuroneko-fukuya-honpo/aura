// AU-119: YouTube の動画を、押すまで読み込まない形で出す（画像は公式サイトに置いたもの・押したら youtube-nocookie.com の再生を開く）。
// 英語の頁（lang="en"）は英語の字幕を最初から出すよう頼む（字幕が YouTube に上がっていれば出る）。
import React, {useState} from 'react';

export default function Video({id, title, lang = 'ja'}) {
  const [on, setOn] = useState(false);
  const cc = lang === 'en' ? '&cc_load_policy=1&cc_lang_pref=en&hl=en' : '';
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${cc}`;
  return (
    <figure className="aura-video">
      <div className="aura-video__frame">
        {on ? (
          <iframe
            src={src}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="aura-video__poster" onClick={() => setOn(true)} aria-label={lang === 'en' ? `Play: ${title}` : `再生: ${title}`}>
            <img src={`/aura/img/video/${id}.webp`} alt="" loading="lazy" width="480" height="270" />
            <span className="aura-video__play" aria-hidden="true" />
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

/** 動画を 2〜3 本並べる箱。 */
export function Videos({children}) {
  return <div className="aura-videos">{children}</div>;
}
