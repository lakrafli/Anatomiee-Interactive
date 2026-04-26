// ============================================
// DONNÉES DES ORGANES
// ============================================
const ORGANES = {

  esophage: {
    nom: "Œsophage", latin: "Oesophagus", couleur: "#78909c", systeme: "Tube digestif sup.",
    image: "https://www.kenhub.com/thumbor/hPK39C1kz4jrrvvQd54ePD3d5zk=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/292/JRD9tI9pIR1JKIvNZ1sXVQ_esophagus-in-situ_fr.jpg",
    description: "L'œsophage est un tube musculaire de 25 cm reliant le pharynx à l'estomac. Ses parois se contractent en vagues (péristaltisme) pour propulser les aliments.",
    stats: [
      { valeur: "25 cm",     label: "Longueur" },
      { valeur: "2–3 cm",    label: "Diamètre" },
      { valeur: "4–8 s",     label: "Transit d'un bolus" },
      { valeur: "3 couches", label: "Paroi musculaire" }
    ],
    fonctions: ["Propulsion du bol alimentaire par péristaltisme", "Protection antireflux via le sphincter inférieur", "Lubrification par sécrétion de mucus"],
    pathologies: ["Reflux gastro-œsophagien", "Œsophagite", "Hernie hiatale", "Achalasie"]
  },

  estomac: {
    nom: "Estomac", latin: "Gaster / Ventriculus", couleur: "#e53935", systeme: "Tube digestif",
    image: "https://www.kenhub.com/thumbor/rJVmVTFathMZN9eqlriCzHgcTxk=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/462/nJfzpY5RENWYmRszTGhA_stomach-in-situ_fr.jpg",
    description: "L'estomac est une poche musculaire en J. Sa muqueuse produit de l'acide chlorhydrique (HCl, pH 1,5) et la pepsine. Les contractions brassent les aliments en chyme.",
    stats: [
      { valeur: "1.5 L",  label: "Capacité normale" },
      { valeur: "4 L",    label: "Capacité max." },
      { valeur: "pH 1.5", label: "Acidité à jeun" },
      { valeur: "2–4 h",  label: "Vidange gastrique" }
    ],
    fonctions: ["Digestion mécanique par brassage musculaire", "Digestion chimique par l'HCl et la pepsine", "Sécrétion du facteur intrinsèque (vit. B12)", "Régulation du débit vers le duodénum"],
    pathologies: ["Ulcère gastrique", "Gastrite chronique", "Infection H. pylori", "Adénocarcinome gastrique"]
  },

  foie: {
    nom: "Foie", latin: "Hepar", couleur: "#8D4004", systeme: "Glande annexe",
    image: "https://www.kenhub.com/thumbor/_HPDkr6MnDikhFybdtG5ndHUnDk=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/32/3q8JQz6sLX1ZbhKOTMvb2Q_anterior-view-of-the-liver_fr.jpg",
    description: "Le foie est la plus grande glande du corps (1,4 kg). Il traite les nutriments, détoxifie le sang et produit la bile. Ses hépatocytes remplissent plus de 500 fonctions.",
    stats: [
      { valeur: "1.4 kg",    label: "Poids moyen" },
      { valeur: "500+",      label: "Fonctions connues" },
      { valeur: "1.5 L/min", label: "Débit sanguin" },
      { valeur: "70%",       label: "Peut se régénérer" }
    ],
    fonctions: ["Production de bile pour digérer les graisses", "Métabolisme des glucides, lipides et protéines", "Détoxification (alcool, médicaments, toxines)", "Stockage du glycogène, vitamines A, D, K, B12"],
    pathologies: ["Hépatite virale A/B/C", "Cirrhose", "Stéatose hépatique", "Carcinome hépatocellulaire"]
  },

  vesicule: {
    nom: "Vésicule biliaire", latin: "Vesica biliaris", couleur: "#2e7d32", systeme: "Voies biliaires",
    image: "https://www.kenhub.com/thumbor/QlgAjMgFnn3zQw47gpgS_Tks0i0=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/537/rM1Bzq14GQjItK0H8B6dEg_gallbladder_fr.jpg",
    description: "La vésicule biliaire est un petit sac de 8 cm sous le foie. Elle concentre la bile jusqu'à 10 fois et la libère lors des repas gras.",
    stats: [
      { valeur: "8 cm",   label: "Longueur" },
      { valeur: "50 mL",  label: "Contenance" },
      { valeur: "×10",    label: "Concentration bile" },
      { valeur: "30 min", label: "Temps de vidange" }
    ],
    fonctions: ["Stockage et concentration de la bile hépatique", "Libération de bile lors des repas gras (CCK)", "Régulation du flux biliaire (sphincter d'Oddi)"],
    pathologies: ["Calculs biliaires", "Cholécystite aiguë", "Cholangite", "Cancer de la vésicule"]
  },

  pancreas: {
    nom: "Pancréas", latin: "Pancreas", couleur: "#f9a825", systeme: "Glande mixte",
    image: "https://www.kenhub.com/thumbor/9tKDJzyVX5UqPAQJ2lShdh3IfV4=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/444/DXfmpmYJyFz5rOqv7kBGw_pancreas-in-situ_fr.jpg",
    description: "Le pancréas a deux rôles : digestif (enzymes amylase, lipase) et hormonal (insuline et glucagon via les îlots de Langerhans).",
    stats: [
      { valeur: "15 cm",     label: "Longueur" },
      { valeur: "1.5 L/j",   label: "Suc pancréatique" },
      { valeur: "1 million", label: "Îlots de Langerhans" },
      { valeur: "pH 8.5",    label: "Suc pancréatique" }
    ],
    fonctions: ["Sécrétion d'amylase, lipase et protéases", "Production d'insuline (baisse de la glycémie)", "Production de glucagon (hausse de la glycémie)", "Neutralisation de l'acidité gastrique"],
    pathologies: ["Diabète type 1 & 2", "Pancréatite aiguë", "Pancréatite chronique", "Cancer du pancréas"]
  },

  rate: {
    nom: "Rate", latin: "Splen / Lien", couleur: "#6a1b9a", systeme: "Organe lymphoïde",
    image: "https://www.kenhub.com/thumbor/ttZXW1TqkM_JxOlqUKHBL6p6hF4=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/504/OHLWcBalHYKTCzxw3AJnJQ_surface-anatomy-of-the-spleen_fr.jpg",
    description: "La rate (150 g) est le plus grand organe lymphoïde. Sa pulpe rouge détruit les vieux globules rouges, sa pulpe blanche produit des anticorps.",
    stats: [
      { valeur: "150 g",      label: "Poids moyen" },
      { valeur: "12 cm",      label: "Grand axe" },
      { valeur: "300 mL/min", label: "Débit sanguin" },
      { valeur: "120 jours",  label: "Durée vie GR filtrés" }
    ],
    fonctions: ["Destruction des globules rouges vieillissants", "Réservoir de plaquettes (30%) et monocytes", "Production d'anticorps (immunité humorale)", "Phagocytose des bactéries encapsulées"],
    pathologies: ["Splénomégalie", "Rupture traumatique", "Hypersplénisme", "Lymphome splénique"]
  },

  "intestin-grele": {
    nom: "Intestin grêle", latin: "Intestinum tenue", couleur: "#e65100", systeme: "Tube digestif moyen",
    image: "https://www.kenhub.com/thumbor/lXnAyAPMb4PiIzfbG0fWfspxiTE=/fit-in/1400x0/filters:fill(FFFFFF,true):watermark(/images/watermark_5000_10percent.png,0,0,0):watermark(/images/logo_url.png,-10,-10,0):format(jpeg)/images/overview_image/609/UgpY8mp0A9MvNe8HH3Fg_innervation-of-the-small-intestine_fr.jpg",
    description: "L'intestin grêle mesure 6–7 m (duodénum, jéjunum, iléon). Sa muqueuse couverte de villosités porte la surface d'absorption à 200 m².",
    stats: [
      { valeur: "6–7 m",  label: "Longueur totale" },
      { valeur: "200 m²", label: "Surface d'absorption" },
      { valeur: "90%",    label: "Absorption nutriments" },
      { valeur: "3–5 h",  label: "Durée du transit" }
    ],
    fonctions: ["Digestion finale par les enzymes pancréatiques", "Absorption des acides aminés, glucose, acides gras", "Absorption des vitamines liposolubles A, D, E, K", "Réabsorption de 7–8 L d'eau par jour"],
    pathologies: ["Maladie cœliaque", "Maladie de Crohn", "Syndrome de l'intestin court", "Occlusion intestinale"]
  },

  colon: {
    nom: "Côlon", latin: "Intestinum crassum", couleur: "#795548", systeme: "Tube digestif inférieur",
    image: "https://cdn8.futura-sciences.com/sources/images/glossaire/colon_health.allrefer.jpg",
    description: "Le côlon mesure 1,5 m. Il réabsorbe l'eau pour former les selles. Son microbiote (38 000 Mrd de bactéries) fermente les fibres et produit des vitamines.",
    stats: [
      { valeur: "1.5 m",      label: "Longueur" },
      { valeur: "38 000 Mrd", label: "Bactéries microbiote" },
      { valeur: "1.5 L/j",    label: "Eau réabsorbée" },
      { valeur: "24–72 h",    label: "Durée de transit" }
    ],
    fonctions: ["Réabsorption de l'eau et des électrolytes", "Formation et stockage des matières fécales", "Fermentation bactérienne des fibres", "Production de vitamines K et B par le microbiote"],
    pathologies: ["Syndrome du côlon irritable", "Colite ulcéreuse", "Diverticulose", "Cancer colorectal"]
  },

  rectum: {
    nom: "Rectum", latin: "Rectum", couleur: "#4e342e", systeme: "Tube digestif terminal",
    image: "https://www.kenhub.com/thumbor/LfG8_w2JXLbaf8Ufec2T4zwwrbM=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/images/watermark_only.png,0,0,0):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/rectum-7/t0dmW7bPK9cNDA3evklgZQ_Rectum.png",
    description: "Le rectum (12–15 cm) stocke temporairement les selles. Deux sphincters contrôlent la défécation : interne (involontaire) et externe (volontaire).",
    stats: [
      { valeur: "12–15 cm",    label: "Longueur" },
      { valeur: "2 sphincters",label: "Contrôle fécal" },
      { valeur: "300 mL",      label: "Capacité de stockage" },
      { valeur: "3 valvules",  label: "De Houston" }
    ],
    fonctions: ["Stockage temporaire des matières fécales", "Déclenchement du réflexe de défécation", "Contrôle de la continence (sphincters)"],
    pathologies: ["Cancer du rectum", "Rectite", "Prolapsus rectal", "Hémorroïdes"]
  }
};

// POSITIONS DES PINS SUR LA PHOTO
const POSITIONS_PINS = {
  esophage:         { top: "37%", left: "45%" },
  estomac:          { top: "52%", left: "60%" },
  foie:             { top: "50%", left: "29%" },
  vesicule:         { top: "55%", left: "33%" },
  pancreas:         { top: "55%", left: "70%" },
  rate:             { top: "60%", left: "60%" },
  "intestin-grele": { top: "68%", left: "50%" },
  colon:            { top: "70%", left: "15%" },
  rectum:           { top: "81%", left: "50%" }
};

// DÉMARRAGE
document.addEventListener('DOMContentLoaded', function() {
  creerPins();
  creerBoutons();
  activerTooltip();
  setTimeout(function() { selectionnerOrgane('estomac'); }, 700);
});

// CRÉER LES PINS SUR LA PHOTO
function creerPins() {
  const conteneur = document.getElementById('conteneur-corps');

  for (const id in ORGANES) {
    const organe   = ORGANES[id];
    const position = POSITIONS_PINS[id];
    if (!position) continue;

    const pin = document.createElement('div');
    pin.className  = 'pin-organe';
    pin.dataset.id = id;
    pin.style.top  = position.top;
    pin.style.left = position.left;

    pin.innerHTML = `
      <div class="pin-cercle" style="border-color:${organe.couleur}40; box-shadow:0 0 12px ${organe.couleur}20;">
        <div class="pin-point" style="background:${organe.couleur}; box-shadow:0 0 8px ${organe.couleur}80;"></div>
      </div>
      <span class="pin-etiquette">${organe.nom}</span>
    `;

    // Couleur de l'anneau pulsant
    const style = document.createElement('style');
    style.textContent = `[data-id="${id}"]::before { border-color: ${organe.couleur}50; }`;
    document.head.appendChild(style);

    pin.addEventListener('click',      function()  { selectionnerOrgane(id); });
    pin.addEventListener('mouseenter', function(e) { afficherTooltip(e, organe.nom); });
    pin.addEventListener('mouseleave', function()  { masquerTooltip(); });

    conteneur.appendChild(pin);
  }
}

// CRÉER LES BOUTONS DE SÉLECTION RAPIDE
function creerBoutons() {
  const grille = document.getElementById('grille-boutons');

  for (const id in ORGANES) {
    const organe = ORGANES[id];
    const bouton = document.createElement('button');
    bouton.className  = 'btn-rapide';
    bouton.dataset.id = id;
    bouton.innerHTML  = `<span class="point-couleur" style="background:${organe.couleur}"></span>${organe.nom}`;
    bouton.addEventListener('click', function() { selectionnerOrgane(id); });
    grille.appendChild(bouton);
  }
}

// ============================================
// SÉLECTIONNER UN ORGANE
// ============================================
function selectionnerOrgane(id) {
  const organe = ORGANES[id];
  if (!organe) return;

  // Activer le bon pin, désactiver les autres
  document.querySelectorAll('.pin-organe').forEach(function(pin) {
    pin.classList.toggle('actif', pin.dataset.id === id);
  });

  // Activer le bon bouton, désactiver les autres
  document.querySelectorAll('.btn-rapide').forEach(function(btn) {
    btn.classList.toggle('actif', btn.dataset.id === id);
  });

  document.getElementById('message-accueil').classList.add('cache');
  afficherCarteOrgane(organe);

  // Sur mobile : défiler jusqu'à la carte
  if (window.innerWidth < 1000) {
    setTimeout(function() {
      document.getElementById('carte-organe').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

// ============================================
// AFFICHER LA CARTE DE L'ORGANE
// ============================================
function afficherCarteOrgane(organe) {
  const carteDiv = document.getElementById('carte-organe');

  // Construire les blocs HTML
  let htmlStats = '';
  organe.stats.forEach(function(stat) {
    htmlStats += `<div class="boite-stat"><div class="stat-valeur" style="color:${organe.couleur}">${stat.valeur}</div><div class="stat-label">${stat.label}</div></div>`;
  });

  let htmlFonctions = '';
  organe.fonctions.forEach(function(f) { htmlFonctions += `<li>${f}</li>`; });

  let htmlPathologies = '';
  organe.pathologies.forEach(function(p) { htmlPathologies += `<span class="pastille-patho">${p}</span>`; });

  carteDiv.innerHTML = `
    <div class="zone-image">
      <img src="${organe.image}" alt="${organe.nom}" onerror="this.src='images/corps.png'"/>
      <span class="badge-gauche">ANATOMIE RÉELLE</span>
      <span class="badge-droite">${organe.systeme}</span>
    </div>
    <div class="corps-carte">
      <h2>${organe.nom}</h2>
      <div class="nom-latin">${organe.latin}</div>
      <div class="titre-section">Description</div>
      <p class="texte-description">${organe.description}</p>
      <div class="titre-section">Données clés</div>
      <div class="grille-stats">${htmlStats}</div>
      <div class="titre-section">Fonctions principales</div>
      <ul class="liste-fonctions">${htmlFonctions}</ul>
      <div class="titre-section">Pathologies associées</div>
      <div class="groupe-patho">${htmlPathologies}</div>
    </div>
  `;

  // Reset l'animation d'apparition
  carteDiv.classList.remove('visible');
  void carteDiv.offsetWidth;
  carteDiv.classList.add('visible');
}

// ============================================
// TOOLTIP
// ============================================
function activerTooltip() {
  document.addEventListener('mousemove', function(e) {
    const tip = document.getElementById('tooltip');
    if (tip.style.display === 'block') {
      tip.style.left = (e.clientX + 16) + 'px';
      tip.style.top  = (e.clientY - 30) + 'px';
    }
  });
}

function afficherTooltip(e, texte) {
  const tip = document.getElementById('tooltip');
  tip.textContent   = texte;
  tip.style.display = 'block';
  tip.style.left    = (e.clientX + 16) + 'px';
  tip.style.top     = (e.clientY - 30) + 'px';
}

function masquerTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}