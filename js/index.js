// Langue (partagée avec project.html via localStorage)
const T = {
  fr: { gallery: 'Galerie', projects: 'Projets', about: 'À propos' },
  en: { gallery: 'Gallery', projects: 'Projects', about: 'About' },
};
function setLang(lang) {
  try { localStorage.setItem('lang', lang); } catch {}
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T[lang][el.dataset.i18n]);
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
}
document.querySelectorAll('.lang button').forEach(b => b.onclick = () => setLang(b.dataset.lang));
let saved = null;
try { saved = localStorage.getItem('lang'); } catch {}
setLang(saved || 'fr');

const layers = document.querySelectorAll('.layer');

const galleryAnchor = document.getElementById('galleryAnchor');
const galleryCloud = galleryAnchor.querySelector('.halo');

const projectAnchor = document.getElementById('projectAnchor');
const projectCloud = projectAnchor.querySelector('.halo');

addEventListener('mousemove', e => {
  const x = e.clientX / innerWidth - 0.5;
  const y = e.clientY / innerHeight - 0.5;
  
  for (const l of layers) {
    const d = l.dataset.depth;
    l.style.transform = `translate(${ -x * d }px, ${ -y * d }px)`;
  }

  // Gestion du nuage "Gallery" (cloud_photo.png)
  const rGal = galleryCloud.getBoundingClientRect();
  const sGal = Math.max(rGal.width / 1440, rGal.height / 900);
  const ixGal = (e.clientX - rGal.left - (rGal.width - 1440 * sGal) / 2) / sGal;
  const iyGal = (e.clientY - rGal.top - (rGal.height - 900 * sGal) / 2) / sGal;
  const [gx1, gy1, gx2, gy2] = galleryCloud.dataset.hit.split(' ').map(Number);
  const isOverGallery = ixGal > gx1 && ixGal < gx2 && iyGal > gy1 && iyGal < gy2;

  galleryCloud.classList.toggle('lit', isOverGallery);
  galleryAnchor.classList.toggle('lit', isOverGallery);
  galleryAnchor.classList.toggle('active-link', isOverGallery);

  // Gestion du nuage "Projects" (cloud_projets.png)
  const rProj = projectCloud.getBoundingClientRect();
  const sProj = Math.max(rProj.width / 1440, rProj.height / 900);
  const ixProj = (e.clientX - rProj.left - (rProj.width - 1440 * sProj) / 2) / sProj;
  const iyProj = (e.clientY - rProj.top - (rProj.height - 900 * sProj) / 2) / sProj;
  const [px1, py1, px2, py2] = projectCloud.dataset.hit.split(' ').map(Number);
  const isOverProject = ixProj > px1 && ixProj < px2 && iyProj > py1 && iyProj < py2;

  projectCloud.classList.toggle('lit', isOverProject);
  projectAnchor.classList.toggle('lit', isOverProject);
  projectAnchor.classList.toggle('active-link', isOverProject);
});

// Garde chaque texte sur son nuage quel que soit le format d'écran (data-label = point dans l'image 1440x900)
function placeLabels() {
  for (const [cloud, label] of [[galleryCloud, '.gallery-text'], [projectCloud, '.project-text']]) {
    const r = cloud.getBoundingClientRect();
    const s = Math.max(r.width / 1440, r.height / 900);
    const [lx, ly] = cloud.dataset.label.split(' ').map(Number);
    const el = document.querySelector(label);
    el.style.left = r.left + (r.width - 1440 * s) / 2 + lx * s + 'px';
    el.style.top = r.top + (r.height - 900 * s) / 2 + ly * s + 'px';
  }
}
addEventListener('resize', placeLabels);
placeLabels();
