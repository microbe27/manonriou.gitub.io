// Contenu des projets (repris du PDF "WEBSITE MISE EN PAGE"). 1re image = vignette de la grille, vidéo en 1re position = film (avec son).
const CHARLOTTE_META = '2026 - 1920px 1080px\nFresco, After Effects, Pro Tools,\nPremiere Pro, 1min58';
const CHARLOTTE_DESC = {
  fr: 'Court métrage illustrant le rêve de Charlotte. Dessins réalisés et animés sur Fresco puis montage et ajout de sons sur Premiere Pro. Création d’un univers onirique qui mêle métaphores, déformations, et animaux imaginaires.',
  en: 'Short film illustrating Charlotte’s dream. Drawings made and animated in Fresco, then edited with sound added in Premiere Pro. Creation of a dreamlike universe blending metaphors, distortions and imaginary animals.'
};
const PROJECTS = [

//PROJET 1
  { dir: '01_If_I_Was_A_Child', title: 'If I was a child', tags: '#3d #Partnership',
    meta: '2026 - Fisheye 4K\nBlender, After Effects, 3D, 1min33\nPartnership with Cité des sciences PARIS',
    desc: {
      fr: 'Création 3D sur Blender d’un univers immersif en 4k au format 360° dans le cadre du festival Sous Dôme du Planétarium de la Cité des Sciences (PARIS) pour un public enfantin.',
      en: '3D creation in Blender of an immersive 4K universe in 360° format for the Sous Dôme festival at the Planetarium of the Cité des Sciences (PARIS), made for a young audience.'
    },
    media: ['01_Video_If_I_Was_A_Child.mp4', '02_If_I_was_a_child.png', '03_If_I_was_a_child.png', '04_If_I_was_a_child.png', '05_If_I_was_a_child.png'] },

//PROJET 2
  { dir: '02_Charlotte_Dream', title: 'Charlotte’s Dream', tags: '#2d #animation',
    meta: CHARLOTTE_META, desc: CHARLOTTE_DESC,
    media: ['01_Video_Charlotte_Dream.mp4', '02_img_Charlotte_Dream.png', '03_video_Charlotte_Dream.mp4', '04_img_Charlotte_Dream.jpg', '05_video_Charlotte_Dream.mp4'] },

//PROJET 3
  { dir: '03_The_Echo_Of_Silence', title: 'The Echo of Silence', tags: '#3d #diploma #scenography',
    meta: '2026 - Scénographie - Gaité Lyrique\nBlender, Fresco, After Effects, Premiere Pro', 
    desc: {
      fr: 'Dispositif scénographique transformant les émotions du public en formes abstraites au cœur d’un paysage 3D inspiré des rizières vietnamiennes. Un décor génératif guidant l’improvisation musicale en temps réel de Minh Lê Boutin.',
      en: 'Interactive scenography translating audience emotions into generative 3D visuals set within a Vietnamese rice terrace landscape, guiding Minh Lê Boutin’s live musical performance.'
    },
    media: ['01_img_Echo_silence.png', '02_Video_Echo_Of_Silence.mp4', '03_img_Echo_silence.png', '04_img_Echo_silence.png', '05_Video_Echo_silence.mp4'] },
 
//PROJET 4    
  { dir: '04_Mapping', title: 'Mapping on Tiles', tags: '#TouchDesigner',
    meta: '2026 - Mapping\nIllustrator, Touch Designer\n1min58', 
    desc: {
      fr: 'Expérimentation de vidéo-mapping, avec TouchDesigner, projetant des motifs géométriques sur un carrelage vierge, transformant une surface neutre en une mosaïque animée.',
      en: 'Video mapping experiment using TouchDesigner, projecting geometric patterns onto blank tiles and transforming a neutral surface into an animated mosaic'
    },
    media: ['01_Video_Mapping.mp4', '02_img_Mapping.jpg', '03_img_Mapping.png', '04_img_Mapping.jpg'] },

//PROJET 5
  { dir: '05_What_is_Indigo', title: 'What is Indigo ?', tags: '#2d #animation',
    meta: '2024 - 1920px 1080px\nBlender, Premiere Pro, 49sec', 
    desc: {
      fr: 'Court-métrage d’une plongée sous marine avec des transitions intrigantes sur le thème de la couleur indigo et ses nuances. «Qu’est ce que la couleur Indigo ?» Conception 3D sur Blender de la partie immergée avec l’église, la végétation et les reflets de l’eau.',
      en: 'A scuba diving short film exploring the nuances of indigo through intriguing transitions. Features a 3D submerged environment modeled in Blender, complete with a sunken church, vegetation, and water reflections.'
    },
    media: ['01_Video_Indigo.mp4', '02_img_Indigo.png', '03_img_Indigo.png', '04_img_Indigo.png', '05_img_Indigo.png'] },

//PROJET 6
  { dir: '06_Rock_En_Seine', title: 'Rock en Seine', tags: '#reel #interview',
    meta: '2025 - 1080px 1920px \nPremiere Pro, Photoshop, Vidéo, Photos\n1min27', 
    desc: {
      fr: 'Interview sous forme de Reel Instagram destinée à mettre en avant le groupe Never Ending Stairs à l’occasion du festival Première Seine (PARIS). Fabrication en binôme d’un décor de studio puis montage et étalonnage sur Premiere Pro.',
      en: 'Instagram Reel interview designed to highlight the band Never Ending Stairs for the Première Seine festival in Paris. Co-created a studio set, followed by video editing and color grading in Premiere Pro.'
  },
  media: ['01_Video_Rock_En_Seine.mp4', '02_img_Rock_En_Seine.png', '03_img_Rock_En_Seine.png', '04_img_Rock_En_Seine.jpg'] },
    
//PROJET 7
  { dir: '07_Soud_Structure', title: 'Sound Structure', tags: '#3d #animation',
    meta: '2025 - 1920px 1080px\nFresco, After Effects, Pro Tools, Premiere Pro, 1min58', 
    desc: {
      fr: 'Comment rendre le son en trois dimensions ? Expérimentation 3D et sonore via une structure mouvante sur Blender. Création des sons en studio avec Pro Tools.',
      en: 'How can sound be rendered in three dimensions? A 3D and audio experiment featuring a moving structure built in Blender, combined with custom sound design created in the studio using Pro Tools.'
    },
    media: ['01_Video_sound_structure.mp4', '02_Video_sound_structure.png', '03_Video_sound_structure.png', '04_Video_Sound_Structure.mp4'] },
  
//PROJET 8
  { dir: '08_Lunar_Year', title: 'Lunar Year', tags: '#Partnership #2d #animation',
    meta: '2024 - 1920px 1080px\nIllustrator, After effects, Premiere Pro, 46 sec', 
    desc: {
      fr: 'Création d’un reel Instagram pour promouvoir les festivités du 13e arrondissement de Paris à l’occasion du Nouvel An lunaire 2024 sur le thème du dragon de bois.',
      en: 'Creation of an Instagram Reel promoting the Lunar New Year 2024 celebrations in the 13th arrondissement of Paris, centered around the theme of the Wood Dragon.'
   },
    media: ['01_Video_lunar_year.mp4', '02_img_lunar_year.png', '03_img_lunar_year.png', '04_img_lunar_year.png'] },

//PROJET 9
  { dir: '09_Thesis', title: 'Thesis', tags: '#scenography #concert',
    meta: '2025 - 10 000 signes\nInDesign, Photoshop', 
    desc: {
      fr: '«Scénographie de concert : une expérience collective» —Travail de recherche autour du concert comme expérience collective, où scénographie, immersion et interaction redéfinissent la relation entre public et artiste.',
      en: '“Concert Scenography: A Collective Experience” — Research project on live music performance as a shared experience, analyzing how immersion and interactive scenography redefine the audience-artist relationship.'
  },
    media: ['09_Projects_img.png','01img.png', '02.png', '03.png'] },
];

const T = {
  fr: { home: 'Accueil', projects: 'Projets', credit: 'Design et développement' },
  en: { home: 'Home', projects: 'Projects', credit: 'Design and development' },
};

const $ = id => document.getElementById(id);
const num = i => String(i + 1).padStart(2, '0');
const src = (p, f) => encodeURI(p.dir + '/' + f);
const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v); } catch { return null; } };

let lang = store('lang') || 'fr';

// Mode nuit
if (store('theme') === 'dark') document.documentElement.classList.add('dark');
$('theme').onclick = () => store('theme', document.documentElement.classList.toggle('dark') ? 'dark' : 'light');

// Grille
$('grid').innerHTML = PROJECTS.map((p, i) => `
  <a class="card" href="#${i + 1}">
    <img src="${src(p, p.media.find(f => !f.endsWith('.mp4')))}" alt="${p.title}" loading="lazy">
    <div class="card-info"><span class="card-num">${num(i)}</span>
      <div><div>${p.title}</div><div class="card-tags">${p.tags}</div></div></div>
  </a>`).join('');

// Index de droite (-01 … -09)
$('index').innerHTML = PROJECTS.map((p, i) => `<a href="#${i + 1}" title="${p.title}">-${num(i)}</a>`).join('');

function render() {
  const i = parseInt(location.hash.slice(1)) - 1;
  const p = PROJECTS[i];
  document.body.classList.toggle('detail', !!p);
  $('grid').hidden = !!p;
  $('project').hidden = !p;
  $('back').href = p ? 'project.html' : 'index.html';
  $('back').textContent = p ? T[lang].projects : T[lang].home;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T[lang][el.dataset.i18n]);
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  if (!p) return;

  const n = PROJECTS.length;
  document.querySelector('.banner').style.backgroundImage = `url("${src(p, `Banner_Project_${num(i)}.jpg`)}")`;
  $('bannerTitle').textContent = $('title').textContent = p.title;
  $('prev').href = '#' + ((i - 1 + n) % n + 1);
  $('next').href = '#' + ((i + 1) % n + 1);
  $('meta').textContent = p.meta;
  $('desc').textContent = p.desc[lang];
  $('index').querySelectorAll('a').forEach((a, k) => a.classList.toggle('on', k === i));

  if ($('media').dataset.p !== String(i)) {
    $('media').dataset.p = i;
    $('media').innerHTML = p.media.map((f, k) => !f.endsWith('.mp4')
      ? `<img src="${src(p, f)}" alt="${p.title}" loading="lazy">`
      : k ? `<video src="${src(p, f)}" autoplay muted loop playsinline></video>`
      : `<video src="${src(p, f)}" controls preload="metadata"></video>`).join('');
    scrollTo(0, 0);
    $('media').scrollTop = document.querySelector('.layout').scrollTop = 0;
  }
}

// La molette, où que soit la souris, fait défiler les images
addEventListener('wheel', e => {
  if (!document.body.classList.contains('detail') || e.target.closest('.media')) return;
  $('media').scrollTop += e.deltaY * (e.deltaMode ? 16 : 1);
}, { passive: true });

document.querySelectorAll('.lang button').forEach(b => b.onclick = () => { lang = b.dataset.lang; store('lang', lang); render(); });
addEventListener('hashchange', render);
render();
