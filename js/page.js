// Langue + mode nuit pour gallery.html et about.html (mêmes clés localStorage que les autres pages)
const T = {
  fr: { home: 'Accueil', gallery: 'Galerie', about: 'À propos' },
  en: { home: 'Home', gallery: 'Gallery', about: 'About' },
};
const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v); } catch { return null; } };

function setLang(lang) {
  store('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T[lang][el.dataset.i18n]);
  document.querySelectorAll('[data-l]').forEach(el => el.hidden = el.dataset.l !== lang);
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
}
document.querySelectorAll('.lang button').forEach(b => b.onclick = () => setLang(b.dataset.lang));
setLang(store('lang') || 'fr');

if (store('theme') === 'dark') document.documentElement.classList.add('dark');
document.getElementById('theme').onclick = () => store('theme', document.documentElement.classList.toggle('dark') ? 'dark' : 'light');
