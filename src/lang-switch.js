// AU-118: 上の帯の言語の切り替え（スマホの幅でも見える・PC の幅は右の言語の選びのまま）と、選んだ言語を覚えること。
// 帯の html の項目（className aura-lang-switch）の中の a を、いまの頁の相手の言語の頁にする（頁を移るたびに）。
// 言語の選び（この a と、PC の幅の言語の選びの a）を押したら localStorage に覚え、次からは自動で移さない（src/lang-redirect.js）。
const BASE = '/aura/';
const EN = '/aura/en/';

function counterpart() {
  const p = location.pathname;
  const onEn = p === '/aura/en' || p.startsWith(EN);
  const rest = p === '/aura/en' ? '' : onEn ? p.slice(EN.length) : p.slice(BASE.length);
  return {onEn, href: (onEn ? BASE : EN) + rest + location.hash};
}

function update() {
  if (typeof document === 'undefined') return;
  const {onEn, href} = counterpart();
  document.querySelectorAll('.aura-lang-switch a').forEach((a) => {
    a.setAttribute('href', href);
    a.setAttribute('hreflang', onEn ? 'ja' : 'en');
    a.setAttribute('data-aura-lang', onEn ? 'ja' : 'en');
    a.textContent = onEn ? '日本語' : 'English';
  });
}

function remember(lang) {
  try {
    localStorage.setItem('aura-site-lang', lang);
  } catch (e) {}
}

if (typeof document !== 'undefined') {
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      const mine = a.getAttribute('data-aura-lang');
      if (mine) {
        remember(mine);
        return;
      }
      // PC の幅の言語の選び（Docusaurus の localeDropdown の a には lang が付く）
      const lang = a.getAttribute('lang');
      if (a.closest('.dropdown__menu') && (lang === 'ja' || lang === 'en')) remember(lang);
    },
    true,
  );
}

export function onRouteDidUpdate() {
  update();
}
