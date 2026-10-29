// AU-118: 初めて来た人を、ブラウザの言語の頁へ移す（日本語なら /aura/…・ほかは /aura/en/…）。
// docusaurus.config.js の headTags で、頁を描く前に読む（文字にして埋め込む・ほかのファイルを読まない）。
// - 自分で言語を選んだ人（localStorage の aura-site-lang）は移さない
// - アプリから開いた頁（?lang=ja|en）は、その言語のまま開く
// - 検索のロボットは移さない・同じ訪問で 2 回移さない（sessionStorage）
// - localStorage・sessionStorage が読めないときは何もしない
module.exports = `(function () {
  try {
    var BASE = '/aura/', EN = '/aura/en/';
    var path = location.pathname;
    var onEn = path === '/aura/en' || path.indexOf(EN) === 0;
    if (/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|vkshare|w3c_validator|lighthouse|headless|preview/i.test(navigator.userAgent || '')) return;
    var q = new URLSearchParams(location.search);
    if (q.get('lang') === 'ja' || q.get('lang') === 'en') return;
    if (localStorage.getItem('aura-site-lang')) return;
    if (sessionStorage.getItem('aura-site-moved')) return;
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var wantJa = String(langs[0] || '').toLowerCase().indexOf('ja') === 0;
    if (wantJa === !onEn) return;
    var rest = onEn ? path.slice(EN.length) : path.slice(BASE.length);
    if (path === '/aura/en') rest = '';
    sessionStorage.setItem('aura-site-moved', '1');
    location.replace((wantJa ? BASE : EN) + rest + location.search + location.hash);
  } catch (e) {}
})();`;
