// --- STATE MANAGEMENT ---
let state = {
    edBalance: 4140.0,
    notes: JSON.parse(localStorage.getItem('link_notes')) || [],
    heartRate: 72,
    news: [
        { id: 1, type: 'biotechnica', title: 'BIOTECHNICA_PR: "Sustainability is our core focus"', date: '2026-01-16' },
        { id: 2, type: 'general', title: 'NCPD: South Zone dogfights under investigation', date: '2026-01-16' },
        { id: 3, type: 'biotechnica', title: 'LEAK: Classified research center move to Night City?', date: '2026-01-15' }
    ],
    wiki: [
        // === SLANG & CULTURE ===
        { id: 1, cat: 'slang', title: 'CHOOM / CHOOMBA', content: 'Terme amical pour un ami ou un membre de la famille. Vient du Neo-Afro-American. "Hey choom, t\'as du feu?"' },
        { id: 2, cat: 'slang', title: 'EDDIES (E$)', content: 'Eurodollars - la monnaie standard. Tout le monde en veut, personne n\'en a assez.' },
        { id: 3, cat: 'slang', title: 'PREEM / NOVA', content: 'Argot pour "Premium" ou "Cool". Quelque chose de haute qualité. "Ce chrome est preem!"' },
        { id: 4, cat: 'slang', title: 'GONK', content: 'Idiot, imbécile. Quelqu\'un qui fait des choix stupides. "Quel gonk, il a insulté un Valentino."' },
        { id: 5, cat: 'slang', title: 'FLATLINE', content: 'Tuer ou mourir. Référence au bip plat du moniteur cardiaque. "On l\'a flatliné hier soir."' },
        { id: 34, cat: 'slang', title: 'CHROME', content: 'Cyberware en général. "Il est lourdement chromé" = beaucoup d\'implants.' },
        { id: 35, cat: 'slang', title: 'CHIPPIN\' IN', content: 'Installer du cyberware pour la première fois. Aussi : s\'engager dans quelque chose.' },
        { id: 36, cat: 'slang', title: 'ZERO', content: 'Quelqu\'un sans valeur, sans réputation. Le contraire d\'une légende.' },
        { id: 37, cat: 'slang', title: 'INPUT / OUTPUT', content: 'Petit ami (input) ou petite amie (output). Termes de relation.' },
        { id: 38, cat: 'slang', title: 'DELTA / BOOK IT', content: 'Se barrer rapidement. "Delta d\'ici avant que les Tyger Claws arrivent!"' },
        { id: 39, cat: 'slang', title: 'MEAT', content: 'Corps humain non augmenté. "Il est tout en meat, pas de chrome."' },
        { id: 40, cat: 'slang', title: 'BORGED OUT', content: 'Tellement chromé qu\'il n\'y a presque plus de chair. Risque de cyberpsychose.' },
        { id: 41, cat: 'slang', title: 'KLEP', content: 'Voler. "J\'ai klepé cette bagnole à un corpo."' },
        { id: 42, cat: 'slang', title: 'SCOP', content: 'Nourriture synthétique bon marché. Le régime de base des pauvres de Night City.' },
        { id: 43, cat: 'slang', title: 'RIPPERDOC', content: 'Chirurgien spécialisé dans l\'installation de cyberware. Souvent illégal mais essentiel.' },
        { id: 33, cat: 'slang', title: 'HOT ZONE', content: 'Le centre-ville dévasté par la bombe de 2023. Encore radioactif par endroits.' },

        // === HEYWOOD (TON TERRITOIRE) ===
        { id: 9, cat: 'district', title: 'THE GLEN', content: 'Ton quartier. Au Nord : City Hall, NCPD, quartiers riches. Au Sud : ça dégénère vers Vista del Rey. C\'est là que tu opères.' },
        { id: 44, cat: 'district', title: 'VISTA DEL REY', content: 'Le quartier le plus pauvre de Heywood. Bâtiments délabrés, gangs omniprésents. Territoire Valentino. Opportunités pour un Fixer.' },
        { id: 45, cat: 'district', title: 'WELLSPRINGS', content: 'Partie "sûre" de Heywood. Classe moyenne, touristes. Bon endroit pour des rencontres discrètes.' },
        { id: 46, cat: 'district', title: 'EL COYOTE COJO', content: 'Bar légendaire de Heywood. Quartier général informel des Valentinos. La mère de Jackie Welles le tient.' },
        { id: 47, cat: 'district', title: 'MOTO CIELO', content: 'Garage Valentino. Façade légale pour du chop shop. Bon contact pour des véhicules "récupérés".' },
        { id: 48, cat: 'district', title: 'RECONCILIATION PARK', content: 'Parc au centre de The Glen. Zone neutre, relativement sûre. Bon pour les échanges discrets.' },

        // === GANGS DE NIGHT CITY ===
        { id: 28, cat: 'gang', title: 'VALENTINOS', content: '~6000 membres. Le gang dominant de Heywood. Code d\'honneur : Famille, Justice, Loyauté. Trahison = mort lente. Adorent Santa Muerte. Tatouages dorés, lowriders, flingues plaqués or.' },
        { id: 49, cat: 'gang', title: 'VALENTINOS (BUSINESS)', content: 'Activités : contrebande d\'armes, vol de voitures, drogue, prostitution, hits. Façades : restaurants, garages, boîtes de nuit. Respecte-les et ils te respecteront.' },
        { id: 29, cat: 'gang', title: '6TH STREET', content: 'Vétérans de guerre corrompus. Base : Santo Domingo/Arroyo. Se prennent pour des patriotes mais sont des racketteurs. Structure militaire. En conflit avec les Valentinos.' },
        { id: 50, cat: 'gang', title: 'MAELSTROM', content: 'Fanatiques du chrome. Base : Watson (Northside, Totentanz). Cyberpsychos assumés. Trafic du organes, hits brutaux.Violence gratuite. ÉVITER si possible.' },
        { id: 51, cat: 'gang', title: 'TYGER CLAWS', content: 'Yakuza moderne. Base : Japantown/Watson. Tatouages lumineux, katanas, motos. Contrôlent les bars, clubs, casinos. Business : prostitution, drogue "glitter", racket.' },
        { id: 52, cat: 'gang', title: 'VOODOO BOYS', content: 'Netrunners haïtiens. Base : Pacifica. Exclusifs et méfiants. Cherchent à briser le Blackwall. Dangereux à double-croiser. Bons contacts pour les infos du Net.' },
        { id: 53, cat: 'gang', title: 'ANIMALS', content: 'Brutes augmentées. Base : Pacifica. Utilisent "The Juice" pour booster leur force. Combat de rue, intimidation. Rivaux des Voodoo Boys.' },
        { id: 54, cat: 'gang', title: 'MOX', content: 'Protecteurs des travailleurs du sexe. Base : Lizzie\'s Bar (Kabuki). Fondés après le meurtre de Lizzie Borden. Rivaux des Tyger Claws. Bonne source d\'infos.' },
        { id: 55, cat: 'gang', title: 'SCAVENGERS', content: 'Trafiquants d\'organes. Kidnappent des gens pour leur voler leur chrome. Les pires ordures de Night City. Aucun code d\'honneur.' },
        { id: 56, cat: 'gang', title: 'WRAITHS', content: 'Nomades corrompus des Badlands. Pillards, voleurs, violents. Pas de territoire fixe. Ennemis des vrais clans Nomades.' },

        // === MEGACORPORATIONS ===
        { id: 10, cat: 'corpo', title: 'BIOTECHNICA', content: 'TON ENNEMI. Spécialistes en biotech et génétique. Créateurs du CHOOH2. Façade écolo, mais expériences humaines secrètes. Ta sœur travaillait pour eux.' },
        { id: 11, cat: 'corpo', title: 'PROJECT NIGHTINGALE', content: 'Opération secrète Biotechnica. Enlèvement du clan Nomad Red Ocher pour tests biologiques. 70 morts. Dirigé par Joanne Koch.' },
        { id: 23, cat: 'corpo', title: 'NICOLO LOGGAGIA', content: 'CEO de Biotechnica. Biochimiste italien. Se présente comme sauveur de la planète. En réalité : un monstre corporate.' },
        { id: 24, cat: 'corpo', title: 'JOANNE KOCH', content: 'Directrice régionale Biotechnica. Responsable de Project Nightingale. Cible potentielle pour Link.' },
        { id: 25, cat: 'corpo', title: 'BIOTECHNICA FLATS', content: 'Fermes de protéines au sud de NC. Production alimentaire synthétique. Sécurité corpo. Possible site de recherche caché.' },
        { id: 26, cat: 'corpo', title: 'ALL FOODS', content: 'Filiale Biotechnica. Distribution alimentaire. "Quality you can taste." Usine à Watson contrôlée par Maelstrom.' },
        { id: 27, cat: 'corpo', title: 'SIENNA', content: 'Ta sœur jumelle. Ex-chercheuse Biotechnica haut niveau. A saboté un labo, tué vos parents, et disparu. Tu la cherches.' },
        { id: 57, cat: 'corpo', title: 'ARASAKA', content: 'Méga-corpo japonaise. BANNIS de Night City depuis 2023. Mais ils ont des cellules dormantes et des agents secrets. Sécurité, banque, armement. Dangereux.' },
        { id: 58, cat: 'corpo', title: 'MILITECH', content: 'Le plus gros fabricant d\'armes au monde. Nationalisé par les NUSA. Rivaux mortels d\'Arasaka. Fournissent l\'armée et la police.' },
        { id: 59, cat: 'corpo', title: 'KANG TAO', content: 'Corpo chinoise. Spécialistes des armes "Smart" (balles à tête chercheuse). En expansion depuis la chute d\'Arasaka.' },
        { id: 60, cat: 'corpo', title: 'ZETATECH', content: 'Tech californienne. Cyberware, cyberdecks, drones, véhicules. Leurs "Agents" ont remplacé les smartphones.' },
        { id: 31, cat: 'corpo', title: 'TRAUMA TEAM', content: 'Service médical d\'élite. Silver: 500eb/mois, 7min. Executive: 1000eb/mois, extraction en zone de guerre. Si t\'as pas l\'abo, ils te laissent crever.' },

        // === AUTRES DISTRICTS ===
        { id: 61, cat: 'district', title: 'WATSON', content: 'District asiatique au nord. Kabuki (marché noir), Little China, Northside (territoire Maelstrom). Beaucoup de Ripperdocs.' },
        { id: 62, cat: 'district', title: 'KABUKI', content: 'Sous-district de Watson. Ruelles étroites, marché noir la nuit. Implants, organes, tout se vend. Victor le Ripperdoc y opère.' },
        { id: 63, cat: 'district', title: 'JAPANTOWN', content: 'Westbrook. Territoire des Tyger Claws. Néons, bars, braindance. Wakako Okada y opère comme Fixer.' },
        { id: 64, cat: 'district', title: 'PACIFICA', content: 'Zone de combat. Ancien projet de resort abandonné. Voodoo Boys + Animals. Pas de loi. Mr. Hands y opère.' },
        { id: 65, cat: 'district', title: 'SANTO DOMINGO', content: 'District industriel. Arroyo (usines, 6th Street) et Rancho Coronado (banlieue résidentielle). Dakota Smith couvre les Badlands depuis ici.' },
        { id: 66, cat: 'district', title: 'CITY CENTER', content: 'Corpo Plaza. Tours de verre, sécurité maximale. Arasaka Tower (détruite en 2023) au centre. Pas ta zone.' },
        { id: 67, cat: 'district', title: 'BADLANDS', content: 'Désert toxique autour de Night City. Territoire Nomade. Clans Aldecaldos et Wraiths. Dakota est la Fixer locale.' },

        // === TECHNOLOGIE & CYBERWARE ===
        { id: 68, cat: 'tech', title: 'CYBERWARE', content: 'Implants technologiques. Du basique (optics) au hardcore (Sandevistan). Installés par des Ripperdocs. Trop = cyberpsychose.' },
        { id: 69, cat: 'tech', title: 'KIROSHI OPTICS', content: 'Implants oculaires de base. Zoom, scan, détection. Presque tout le monde en a. ~300-800 eddies selon le modèle.' },
        { id: 70, cat: 'tech', title: 'SANDEVISTAN', content: 'Système nerveux. Ralentit le temps pour toi. Les pros du combat jurent par ça. 28k-120k eddies. Requiert des réflexes élevés.' },
        { id: 71, cat: 'tech', title: 'MANTIS BLADES', content: 'Lames rétractables dans les avant-bras. ~15k eddies. Populaires chez les assassins et les Maelstrom.' },
        { id: 72, cat: 'tech', title: 'GORILLA ARMS', content: 'Bras cybernétiques surpuissants. ~15k eddies. Parfaits pour ouvrir des portes... ou des crânes.' },
        { id: 73, cat: 'tech', title: 'NEURAL PROCESSOR', content: 'Base pour tout cyberware neural. ~500 eddies. Essentiel pour les implants avancés.' },
        { id: 74, cat: 'tech', title: 'CYBERDECK', content: 'Système d\'exploitation pour netrunners. Permet les quickhacks. Pas ton domaine mais utile à connaître.' },
        { id: 75, cat: 'tech', title: 'CYBERPSYCHOSE', content: 'Maladie mentale due à trop de chrome. Perte d\'humanité, violence extrême. MaxTac s\'en occupe... définitivement.' },
        { id: 76, cat: 'tech', title: 'BRAINDANCE (BD)', content: 'Enregistrement neural d\'expériences. Légal : cinéma immersif. Illégal : snuff, torture, sexe. Énorme marché noir.' },
        { id: 77, cat: 'tech', title: 'AGENT', content: 'Smartphone du futur. Intégré au cyberware. Communications, data, tout passe par là.' },

        // === CONTACTS & FIXERS ===
        { id: 78, cat: 'contact', title: 'PADRE (SEBASTIAN IBARRA)', content: 'LE Fixer de Heywood. Ex-prêtre, ex-Valentino. Respecté par tous. Calme mais impitoyable si on le trahit. TON contact principal.' },
        { id: 79, cat: 'contact', title: 'WAKAKO OKADA', content: 'Fixer de Westbrook/Japantown. Vieille dame japonaise, ancienne Tyger Claw. Réseau d\'info impressionnant.' },
        { id: 80, cat: 'contact', title: 'DAKOTA SMITH', content: 'Fixer des Badlands. Ex-Aldecaldo. Bonnes connexions Nomades. Utile pour les jobs hors de Night City.' },
        { id: 81, cat: 'contact', title: 'MR. HANDS', content: 'Fixer de Pacifica/Dogtown. Mystérieux, visage jamais montré. Spécialisé dans les jobs dangereux et bien payés.' },
        { id: 82, cat: 'contact', title: 'ROGUE AMENDIARES', content: 'Reine de l\'Afterlife. Légende vivante. La Fixer la plus puissante de Night City. Difficile d\'accès mais précieuse.' },
        { id: 83, cat: 'contact', title: 'VEZ', content: 'Ton contact pour retrouver Sienna. Ex-Biotechnica. Informateur. Confiance à établir.' },

        // === SERVICES ===
        { id: 32, cat: 'lore', title: 'NCPD', content: 'Flics corrompus et sous-payés. Protègent les corpos, pas les gens. MaxTac est leur seule unité efficace (anti-cyberpsychos).' },
        { id: 84, cat: 'lore', title: 'AFTERLIFE', content: 'Le bar des légendes. Où les meilleurs mercs se retrouvent. Géré par Rogue. Si t\'as pas de réputation, t\'entres pas.' },
        { id: 85, cat: 'lore', title: 'LIZZIE\'S BAR', content: 'QG des Mox à Kabuki. Club de braindance. Bonne source d\'info sur la rue et les Tyger Claws.' },

        // === PHILOSOPHIE DE NIGHT CITY ===
        { id: 86, cat: 'lore', title: 'STYLE OVER SUBSTANCE', content: 'À Night City, l\'apparence compte autant que les actes. Un flingue doré impressionne plus qu\'un flingue efficace.' },
        { id: 87, cat: 'lore', title: 'ATTITUDE IS EVERYTHING', content: 'Projette la confiance et le danger. Montre de la faiblesse et tu es mort.' },
        { id: 88, cat: 'lore', title: 'LIVE ON THE EDGE', content: 'Les risques mènent au pouvoir. Les prudents restent pauvres. C\'est la voie des edgerunners.' },
        { id: 30, cat: 'lore', title: 'THE RED', content: 'Ciel rouge depuis la bombe de 2023. Les aurores sont magnifiques mais le rappel constant que Night City a failli mourir.' },

        // === RÈGLES DE JEU ===
        { id: 6, cat: 'rules', title: 'ACTIONS DE COMBAT', content: '1 Action de Mouvement + 1 Action (Attaque, Recharger, Soins, etc.) par tour.' },
        { id: 7, cat: 'rules', title: 'ARMURE (SP)', content: 'Stopping Power. Dégâts soustraits du SP. Chaque hit = -1 SP (Ablation) jusqu\'à réparation.' },
        { id: 8, cat: 'rules', title: 'OPERATOR (FIXER)', content: 'Ta capacité de rôle. Trouver du matos rare, négocier (Haggle), avoir des contacts partout.' },
        { id: 12, cat: 'rules', title: 'COMBAT (DISTANCE)', content: 'REF + Compétence + 1d10 vs DV de portée. REF 8+ = peut esquiver les balles.' },
        { id: 13, cat: 'rules', title: 'COMBAT (MELEE)', content: 'DEX + Compétence + 1d10 vs DEX + Esquive. Ignore 50% de l\'armure.' },
        { id: 14, cat: 'rules', title: 'BLESSURES', content: '<50% PV = -2 partout. 0 PV = Coups mortels (-4), jets de mort chaque tour.' },
        { id: 16, cat: 'rules', title: 'GUÉRISON', content: 'Stabilisé = récupère BODY PV par jour de repos.' },
        { id: 17, cat: 'rules', title: 'DIFFICULTÉS (DV)', content: 'Simple:9 | Quotidien:13 | Difficile:15 | Pro:17 | Héroïque:21 | Incroyable:24 | Légendaire:29' },
        { id: 18, cat: 'rules', title: 'NETRUNNING', content: 'Interface + 1d10 vs DV. Scanner, Backdoor, Cloak, Zap (1d6 DMG).' },
        { id: 19, cat: 'rules', title: 'FACEDOWN', content: 'COOL + Réputation + 1d10 vs idem. Perdant = -2 malus.' }
    ],
    wikiFilter: 'all',
    wikiSearch: '',
    hp: 40,
    maxHp: 40,
    armor: 11,
    maxArmor: 11,
    reputation: 2,
    roleAbility: { name: 'Operator', level: 4 },
    humanity: 80,
    maxHumanity: 80,
    stats: {
        INT: 8, REF: 6, DEX: 6, TECH: 5, COOL: 7,
        WILL: 5, LUCK: 6, MOVE: 5, BODY: 6, EMP: 8
    },
    bio: {
        origine: "Europe de l'Ouest",
        background: "Ancien sujet d'expérience corporatiste chez Biotechnica.",
        motivation: "Loyauté et Amitié. Cherche à comprendre la trahison de sa sœur.",
        sister: "Sienna, sa jumelle. A tué leurs parents et le traque aujourd'hui.",
        base: "The Glen (Heywood) - Bar 'The Neon Archive'",
        lifestyle: "Appartement miteux, fumeur invétéré, accro au jeu.",
        traits: "Extraverti, amical, mais maladroit."
    },
    skills: [
        { cat: 'Contrôle', name: 'Équitation', niv: 0, carac: 'REF', base: 6 },
        { cat: 'Contrôle', name: 'Pilotage (Terrestre)', niv: 0, carac: 'REF', base: 6 },
        { cat: 'Combat', name: 'Arme de mêlée', niv: 2, carac: 'DEX', base: 8 },
        { cat: 'Combat', name: 'Art martial', niv: 0, carac: 'DEX', base: 6 },
        { cat: 'Combat', name: 'Bagarre', niv: 0, carac: 'DEX', base: 6 },
        { cat: 'Corps', name: 'Athlétisme', niv: 2, carac: 'DEX', base: 8 },
        { cat: 'Corps', name: 'Endurance', niv: 0, carac: 'WILL', base: 5 },
        { cat: 'Éducation', name: 'Bibliothèque', niv: 4, carac: 'INT', base: 12 },
        { cat: 'Éducation', name: 'Gestion d\'affaire', niv: 6, carac: 'INT', base: 14 },
        { cat: 'Éducation', name: 'Jeux de hasard', niv: 6, carac: 'INT', base: 14 },
        { cat: 'Éducation', name: 'Langue (Arabe)', niv: 4, carac: 'INT', base: 12 },
        { cat: 'Sociabilité', name: 'Conversation', niv: 6, carac: 'EMP', base: 14 },
        { cat: 'Sociabilité', name: 'Corruption', niv: 6, carac: 'COOL', base: 13 },
        { cat: 'Sociabilité', name: 'Persuasion', niv: 6, carac: 'COOL', base: 13 },
        { cat: 'Sociabilité', name: 'Négoce', niv: 6, carac: 'COOL', base: 13 },
        { cat: 'Sociabilité', name: 'Psychologie', niv: 5, carac: 'EMP', base: 13 },
        { cat: 'Sociabilité', name: 'Connaissance de la rue', niv: 3, carac: 'INT', base: 11 },
        { cat: 'Vigilance', name: 'Perception', niv: 5, carac: 'INT', base: 13 },
        { cat: 'Vigilance', name: 'Concentration', niv: 2, carac: 'WILL', base: 7 },
        { cat: 'Technique', name: 'Premiers secours', niv: 2, carac: 'TECH', base: 7 }
    ],
    network: [
        { id: 1, name: 'Dr. Manganese', role: 'Ripperdoc (Heywood)', trust: 'Loyal', note: 'Ancien chirurgien militaire. Te soigne pour pas cher.' },
        { id: 2, name: 'Short-Circuit', role: 'Techie (Watson)', trust: 'Professionnel', note: 'As du fer à souder. Vit dans un van blindé.' },
        { id: 3, name: 'Mako', role: 'Solo Freelance', trust: 'Neutre', note: 'Le muscle quand la diplomatie échoue.' },
        { id: 4, name: 'Vez', role: 'Fixer / Ex-Biotechnica', trust: 'En Recherche', note: 'Ton contact principal pour retrouver ta sœur.' }
    ],
    networkSearch: '',
    transactions: JSON.parse(localStorage.getItem('link_transactions')) || [
        { id: 1, type: 'loss', desc: 'STREET_FOOD_SCOP', amount: 10, date: '2026-01-16' },
        { id: 2, type: 'gain', desc: 'FIXER_COMMISSION', amount: 500, date: '2026-01-15' }
    ],
    humanity: 80,
    maxHumanity: 80,
    weapons: [
        { name: 'Pistolet Lourd', dmg: '3d6', rof: 2, ammo: 8, maxAmmo: 8 }
    ],
    cyberware: [
        { name: 'Câblage Neural', effect: 'Base pour implants' },
        { name: 'Agent Interne', effect: 'Modèle expérimental Biotechnica' }
    ],
    deals: JSON.parse(localStorage.getItem('link_deals')) || [],
    body: 6,
    reputation: 2,
    inventory: JSON.parse(localStorage.getItem('link_inventory')) || [
        { id: 1, name: 'Pistolet Lourd', weight: 1.5, icon: '🔫', type: 'weapon', desc: '3d6 DMG, ROF 2' },
        { id: 2, name: 'Veste Blindée Légère', weight: 4, icon: '🛡️', type: 'armor', desc: 'SP 11' },
        { id: 3, name: 'Mallette Blindée', weight: 3, icon: '💼', type: 'gear', desc: 'Transport sécurisé' },
        { id: 4, name: 'Kit de Soins Personnel', weight: 1, icon: '💊', type: 'gear', desc: 'Premiers secours' },
        { id: 5, name: 'Téléphone Jetable x2', weight: 0.2, icon: '📱', type: 'misc', desc: 'Communications anonymes' },
        { id: 6, name: 'Briquet et Cigarettes', weight: 0.1, icon: '🚬', type: 'misc', desc: 'Addiction (Paris)' },
        { id: 7, name: 'Munitions (50)', weight: 1, icon: '📦', type: 'ammo', desc: 'Balles pistolet lourd' }
    ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateBalanceDisplay();
    renderNews();
    renderNotes();
    renderWiki();
    renderNetwork();
    renderTransactions();
    renderDeals();
    renderWeapons();
    renderCyberware();
    renderInventory();
    renderSkills();
    updateStatDisplays();
    startVitalSim();
});

// --- NAVIGATION ---
function switchView(viewId) {
    // UI Feedback
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) targetView.classList.add('active');

    // Nav active state
    document.querySelectorAll('.app-nav button').forEach(btn => {
        btn.classList.remove('active');
        const label = btn.innerText.toLowerCase();
        if ((viewId === 'dataterm' && label === 'wiki') ||
            (viewId === 'dashboard' && label === 'home') ||
            (viewId === 'stats' && label === 'stats') ||
            (viewId === 'network' && label === 'net') ||
            (viewId === 'wallet' && label === 'wallet') ||
            (viewId === 'inventory' && label === 'inv')) {
            btn.classList.add('active');
        }
    });
}

// --- VITALS SIMULATION ---
function startVitalSim() {
    setInterval(() => {
        state.heartRate = 70 + Math.floor(Math.random() * 15);
        const hrEl = document.getElementById('heart-rate');
        if (hrEl) hrEl.innerText = state.heartRate;
    }, 3000);
}

// --- WIKI / DATATERM ---
// Load custom wiki entries from localStorage
const customWiki = JSON.parse(localStorage.getItem('link_wiki_custom')) || [];
state.wiki = [...state.wiki, ...customWiki];

function renderWiki() {
    const container = document.getElementById('wiki-content');
    if (!container) return;

    const filtered = state.wiki.filter(item => {
        const matchesCat = state.wikiFilter === 'all' || item.cat === state.wikiFilter;
        const matchesSearch = item.title.toLowerCase().includes(state.wikiSearch.toLowerCase()) ||
            item.content.toLowerCase().includes(state.wikiSearch.toLowerCase());
        return matchesCat && matchesSearch;
    });

    container.innerHTML = filtered.map(item => `
        <div class="wiki-item" data-id="${item.id}">
            <div class="category-tag">${item.cat.toUpperCase()}</div>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <div class="wiki-actions" style="margin-top: 8px; display: flex; gap: 5px;">
                <button class="small-btn" onclick="editWikiEntry(${item.id})" style="font-size: 0.6rem; padding: 2px 6px;">✏️ EDIT</button>
                <button class="small-btn" onclick="deleteWikiEntry(${item.id})" style="font-size: 0.6rem; padding: 2px 6px; background: var(--cyber-red);">🗑️ DEL</button>
            </div>
        </div>
    `).join('');
}

function filterWiki(cat) {
    state.wikiFilter = state.wikiFilter === cat ? 'all' : cat;

    // Update button styles
    document.querySelectorAll('.wiki-categories button').forEach(btn => {
        const btnCat = btn.getAttribute('onclick')?.match(/filterWiki\('(\w+)'\)/)?.[1];
        btn.style.background = btnCat === state.wikiFilter
            ? 'var(--cyber-blue)'
            : 'rgba(0, 240, 255, 0.1)';
        btn.style.color = btnCat === state.wikiFilter
            ? 'var(--bg-dark)'
            : 'var(--cyber-blue)';
    });

    renderWiki();
}

function searchWiki() {
    state.wikiSearch = document.getElementById('wiki-search-input').value;
    renderWiki();
}

// --- WIKI CRUD OPERATIONS ---
function showAddWikiModal() {
    const modal = document.getElementById('wiki-modal');
    if (modal) {
        document.getElementById('wiki-modal-title').innerText = 'NEW_ENTRY';
        document.getElementById('wiki-entry-id').value = '';
        document.getElementById('wiki-entry-title').value = '';
        document.getElementById('wiki-entry-content').value = '';
        document.getElementById('wiki-entry-cat').value = 'lore';
        modal.style.display = 'flex';
    }
}

function hideWikiModal() {
    const modal = document.getElementById('wiki-modal');
    if (modal) modal.style.display = 'none';
}

function saveWikiEntry() {
    const id = document.getElementById('wiki-entry-id').value;
    const title = document.getElementById('wiki-entry-title').value.trim();
    const content = document.getElementById('wiki-entry-content').value.trim();
    const cat = document.getElementById('wiki-entry-cat').value;

    if (!title || !content) {
        alert('ERREUR: Titre et contenu requis.');
        return;
    }

    if (id) {
        // Update existing
        const idx = state.wiki.findIndex(e => e.id == id);
        if (idx !== -1) {
            state.wiki[idx] = { ...state.wiki[idx], title, content, cat };
        }
    } else {
        // Create new
        const newId = Date.now();
        state.wiki.push({ id: newId, cat, title, content, custom: true });
    }

    saveCustomWiki();
    hideWikiModal();
    renderWiki();
}

function editWikiEntry(id) {
    const entry = state.wiki.find(e => e.id == id);
    if (!entry) return;

    const modal = document.getElementById('wiki-modal');
    if (modal) {
        document.getElementById('wiki-modal-title').innerText = 'EDIT_ENTRY';
        document.getElementById('wiki-entry-id').value = entry.id;
        document.getElementById('wiki-entry-title').value = entry.title;
        document.getElementById('wiki-entry-content').value = entry.content;
        document.getElementById('wiki-entry-cat').value = entry.cat;
        modal.style.display = 'flex';
    }
}

function deleteWikiEntry(id) {
    if (!confirm('CONFIRMER_SUPPRESSION?')) return;
    state.wiki = state.wiki.filter(e => e.id != id);
    saveCustomWiki();
    renderWiki();
}

function saveCustomWiki() {
    // Only save custom entries to localStorage
    const customEntries = state.wiki.filter(e => e.custom === true);
    localStorage.setItem('link_wiki_custom', JSON.stringify(customEntries));
}

// --- NETWORK ---
function renderNetwork() {
    const container = document.getElementById('network-list');
    if (!container) return;

    const filtered = state.network.filter(contact =>
        contact.name.toLowerCase().includes(state.networkSearch.toLowerCase()) ||
        contact.role.toLowerCase().includes(state.networkSearch.toLowerCase()) ||
        contact.note.toLowerCase().includes(state.networkSearch.toLowerCase())
    );

    container.innerHTML = filtered.map(contact => `
        <div class="contact-card">
            <h3>${contact.name}</h3>
            <div class="contact-role">${contact.role.toUpperCase()}</div>
            <div class="item-content">${contact.note}</div>
            <div class="contact-trust">TRUST_LEVEL: ${contact.trust}</div>
        </div>
    `).join('');
}

function searchNetwork() {
    state.networkSearch = document.getElementById('network-search-input').value;
    renderNetwork();
}

// --- NEWS FEED ---
function renderNews() {
    const feed = document.getElementById('news-feed');
    if (!feed) return;
    feed.innerHTML = state.news.map(item => `
        <div class="feed-item ${item.type}">
            <div class="item-meta">[${item.date}]</div>
            <div class="item-title">${item.title}</div>
        </div>
    `).join('');
}

// --- WALLET & ECONOMY ---
function updateBalanceDisplay() {
    const balEl = document.getElementById('ed-balance');
    if (balEl) balEl.innerText = state.edBalance.toLocaleString('en-US', { minimumFractionDigits: 2 });
}

function renderTransactions() {
    const container = document.getElementById('transaction-list');
    if (!container) return;
    container.innerHTML = state.transactions.map(tx => `
        <div class="transaction-item ${tx.type}">
            <span>${tx.date} | ${tx.desc}</span>
            <strong>${tx.type === 'gain' ? '+' : '-'}${tx.amount} EB</strong>
        </div>
    `).join('');
}

function addTransaction(type, desc, amount) {
    state.transactions.unshift({
        id: Date.now(),
        type,
        desc,
        amount,
        date: new Date().toISOString().split('T')[0]
    });
    localStorage.setItem('link_transactions', JSON.stringify(state.transactions));
    renderTransactions();
}

function logDeal() {
    const client = document.getElementById('deal-client').value;
    const item = document.getElementById('deal-item').value;
    const price = parseFloat(document.getElementById('deal-price').value);
    const commPct = parseFloat(document.getElementById('deal-comm').value) / 100;

    if (!client || !item || isNaN(price) || isNaN(commPct)) return;

    const commission = price * commPct;
    const deal = { id: Date.now(), client, item, price, commission, date: new Date().toLocaleDateString() };

    state.deals.unshift(deal);
    state.edBalance += commission;

    addTransaction('gain', `COMMISSION: ${item} (${client})`, commission);
    localStorage.setItem('link_deals', JSON.stringify(state.deals));
    updateBalanceDisplay();
    renderDeals();

    // Clear form
    document.getElementById('deal-client').value = '';
    document.getElementById('deal-item').value = '';
    document.getElementById('deal-price').value = '';
}

function renderDeals() {
    const container = document.getElementById('deals-log-list');
    if (!container) return;
    container.innerHTML = state.deals.map(deal => `
        <div class="wiki-item">
            <div class="category-tag">DEAL</div>
            <h3>${deal.item}</h3>
            <p><strong>Client:</strong> ${deal.client}<br>
            <strong>Prix:</strong> ${deal.price} EB | <strong>Comm:</strong> ${deal.commission} EB</p>
            <div class="item-meta">${deal.date}</div>
        </div>
    `).join('');
}

function placeBet() {
    const amount = parseFloat(document.getElementById('bet-amount').value);
    const status = document.getElementById('bet-status');

    if (isNaN(amount) || amount <= 0) {
        status.innerHTML = '<span style="color:red">INVALID_AMOUNT</span>';
        return;
    }

    if (amount > state.edBalance) {
        status.innerHTML = '<span style="color:red">INSUFFICIENT_FUNDS</span>';
        return;
    }

    state.edBalance -= amount;
    addTransaction('loss', 'DOGFIGHT_BET', amount);
    updateBalanceDisplay();
    status.innerHTML = 'BET_PLACED_WAITING_RES...';

    // Simulated result
    setTimeout(() => {
        const win = Math.random() > 0.7;
        if (win) {
            const odds = [1.5, 2.0, 3.0, 5.0];
            const multiplier = odds[Math.floor(Math.random() * odds.length)];
            const winnings = amount * multiplier;
            state.edBalance += winnings;
            addTransaction('gain', `DOGFIGHT_WIN (x${multiplier})`, winnings);
            status.innerHTML = `<span style="color:#00ff00">WIN! +${winnings} ED</span>`;
        } else {
            status.innerHTML = '<span style="color:red">LOST_BET</span>';
        }
        updateBalanceDisplay();
    }, 2000);
}

function renderWeapons() {
    const list = document.getElementById('weapons-list');
    if (!list) return;
    list.innerHTML = state.weapons.map(w => `
        <div class="skill-item">
            <span>${w.name} (${w.dmg})</span>
            <strong>ROF ${w.rof}</strong>
        </div>
    `).join('');
}

function renderCyberware() {
    const list = document.getElementById('cyberware-list');
    if (!list) return;
    list.innerHTML = state.cyberware.map(c => `
        <div class="skill-item">
            <span>${c.name}</span>
            <small>${c.effect}</small>
        </div>
    `).join('');
}

function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    if (!grid) return;

    grid.innerHTML = state.inventory.map(item => `
        <div class="inventory-item glitch-hover" onclick="showItemDetails(${item.id})">
            <div class="item-icon">${item.icon}</div>
            <div class="item-name-sm">${item.name}</div>
            <div class="item-weight">${item.weight} kg</div>
        </div>
    `).join('');

    updateLoadBar();
}

function updateLoadBar() {
    const totalWeight = state.inventory.reduce((sum, item) => sum + item.weight, 0);
    const maxCapacity = state.body * 10;
    const percent = Math.min(100, (totalWeight / maxCapacity) * 100);

    const bar = document.getElementById('load-bar');
    const label = document.getElementById('load-label');

    if (bar) {
        bar.style.width = `${percent}%`;
        bar.style.background = percent > 90 ? 'var(--cyber-red)' : 'var(--cyber-blue)';
    }
    if (label) {
        label.innerText = `${totalWeight.toFixed(1)} / ${maxCapacity} KG`;
    }
}

function showItemDetails(id) {
    const item = state.inventory.find(i => i.id === id);
    if (!item) return;
    alert(`${item.name.toUpperCase()}\n----------------\nType: ${item.type}\nDesc: ${item.desc}\nWeight: ${item.weight}kg`);
}

// --- CARNET ---
function addNote() {
    const input = document.getElementById('note-input');
    const content = input.value.trim();

    if (!content) return;

    const note = {
        id: Date.now(),
        content: content,
        date: new Date().toLocaleString()
    };

    state.notes.unshift(note);
    localStorage.setItem('link_notes', JSON.stringify(state.notes));
    input.value = '';
    renderNotes();
}

function renderNotes() {
    const list = document.getElementById('notes-list');
    if (!list) return;
    list.innerHTML = state.notes.map(note => `
        <div class="note-card">
            <div class="item-meta">${note.date}</div>
            <div class="item-content">${note.content}</div>
            <button onclick="deleteNote(${note.id})" style="background:none; border:none; color:red; font-size:0.7rem; margin-top:5px; cursor:pointer">X REMOVE_ENTRY</button>
        </div>
    `).join('');
}

function deleteNote(id) {
    state.notes = state.notes.filter(n => n.id !== id);
    localStorage.setItem('link_notes', JSON.stringify(state.notes));
    renderNotes();
}

// --- STATS & BIO-MONITOR ---
function updateStatDisplays() {
    // HP
    const hpVal = document.getElementById('hp-val');
    const hpBar = document.getElementById('hp-bar');
    if (hpVal) hpVal.innerText = state.hp;
    if (hpBar) {
        const percent = (state.hp / state.maxHp) * 100;
        hpBar.style.width = `${percent}%`;
        hpBar.style.background = percent <= 50 ? 'var(--cyber-red)' : '#00ff41';
    }

    // Armor
    const spVal = document.getElementById('sp-val');
    const spBar = document.getElementById('sp-bar');
    if (spVal) spVal.innerText = state.armor;
    if (spBar) {
        const percent = (state.armor / state.maxArmor) * 100;
        spBar.style.width = `${percent}%`;
    }

    // Humanity
    const humVal = document.getElementById('hum-val');
    const humBar = document.getElementById('hum-bar');
    if (humVal) humVal.innerText = state.humanity;
    if (humBar) {
        const percent = (state.humanity / state.maxHumanity) * 100;
        humBar.style.width = `${percent}%`;
        humBar.style.background = 'var(--cyber-pink)';
    }

    // Death Save
    const deathSaveVal = document.getElementById('death-save-val');
    if (deathSaveVal) deathSaveVal.innerText = state.stats.BODY;

    // Luck (Legacy keep)
    const luckValLegacy = document.getElementById('luck-val');
    if (luckValLegacy) luckValLegacy.innerText = state.stats.LUCK;

    // Stats Grid Integration
    if (state.stats) {
        Object.keys(state.stats).forEach(key => {
            const el = document.getElementById(`stat-${key}`);
            if (el) el.innerText = state.stats[key];
        });
    }
}

function takeDamage(amt) {
    state.hp = Math.max(0, state.hp - amt);
    updateStatDisplays();
    if (state.hp <= 20 && state.hp > 0) {
        alert("CRITICAL_WOUND_DETECTED: Healing required.");
    }
}

function ablateArmor() {
    state.armor = Math.max(0, state.armor - 1);
    updateStatDisplays();
}

function resetVitals() {
    state.hp = state.maxHp;
    state.armor = state.maxArmor;
    state.humanity = state.maxHumanity;
    updateStatDisplays();
}

// --- SKILLS ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const skills = state.skills;

    container.innerHTML = `
        <div class="skills-header" style="margin-bottom: 10px;">
            <input type="text" placeholder="SEARCH_SKILLS..." oninput="filterSkills(this.value)" 
                   style="width: 100%; padding: 8px; background: rgba(0,240,255,0.1); border: 1px solid var(--cyber-blue); color: var(--cyber-blue); font-family: 'Rajdhani', sans-serif;">
        </div>
        <div class="skills-scroll" style="max-height: 300px; overflow-y: auto; padding-right: 5px;">
            ${skills.map(skill => `
                <div class="skill-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid rgba(0,240,255,0.1); font-size: 0.8rem;">
                    <div class="skill-info">
                        <strong style="color: var(--cyber-yellow); display: block;">${skill.name.toUpperCase()}</strong>
                        <small style="opacity: 0.6;">${skill.carac} | NIV: ${skill.niv}</small>
                    </div>
                    <div class="skill-hit" style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-weight: bold; color: var(--cyber-blue);">+${skill.base}</span>
                        <button class="small-btn" onclick="rollSkill('${skill.name}', ${skill.base})" style="padding: 2px 8px;">ROLL</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function rollSkill(name, base) {
    const roll = Math.floor(Math.random() * 10) + 1;
    const total = roll + base;
    let message = `ROLL: ${name.toUpperCase()}\nRESULT: ${roll} + ${base} = ${total}`;

    if (roll === 10) message += "\n> CRITICAL_SUCCESS! [+1d10]";
    if (roll === 1) message += "\n> CRITICAL_FAILURE! [-1d10]";

    alert(message);
}

function filterSkills(query) {
    const items = document.querySelectorAll('.skill-item');
    items.forEach(item => {
        const name = item.querySelector('strong').innerText.toLowerCase();
        item.style.display = name.includes(query.toLowerCase()) ? 'flex' : 'none';
    });
}

// --- BIO & DOSSIER ---
function toggleStatsBio() {
    const statsContainer = document.querySelector('.stats-container-inner');
    const bioContainer = document.getElementById('bio-container');
    const btn = document.getElementById('toggle-bio-btn');

    if (bioContainer.style.display === 'none') {
        bioContainer.style.display = 'block';
        statsContainer.style.display = 'none';
        btn.innerText = 'SHOW_VITALS_&_STATS';
        renderBio();
    } else {
        bioContainer.style.display = 'none';
        statsContainer.style.display = 'block';
        btn.innerText = 'SHOW_DOSSIER_PERSONNEL';
    }
}

function renderBio() {
    const container = document.getElementById('bio-container');
    if (!container) return;

    const b = state.bio;
    container.innerHTML = `
        <div class="bio-card glitch-border" style="padding: 15px; background: rgba(0,0,0,0.4); border-left: 3px solid var(--cyber-pink);">
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">ORIGINE:</span> ${b.origine}</div>
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">BACKSTORY:</span> ${b.background}</div>
            <div class="bio-row" style="margin-bottom: 8px; color: var(--cyber-pink);"><span style="font-weight: bold;">MENACE:</span> ${b.sister}</div>
            <hr style="border: 0; border-top: 1px dashed var(--cyber-blue); margin: 10px 0;">
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-yellow); font-weight: bold;">ROLE_ABILITY:</span> ${state.roleAbility.name.toUpperCase()} (LVL ${state.roleAbility.level})</div>
            <div class="bio-row" style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                <span><span style="color: var(--cyber-yellow); font-weight: bold;">REPUTATION:</span> ${state.reputation}</span>
                <button class="roll-btn" onclick="rollFacedown()" style="padding: 2px 8px; font-size: 0.6rem;">FACEDOWN_ROLL</button>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--cyber-blue); margin: 10px 0;">
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">MOTIVATION:</span> ${b.motivation}</div>
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">BASE_OP:</span> ${b.base}</div>
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">TRAITS:</span> ${b.traits}</div>
            <div class="bio-row" style="margin-bottom: 8px;"><span style="color: var(--cyber-blue); font-weight: bold;">LIFESTYLE:</span> ${b.lifestyle}</div>
        </div>
        <div class="photo-placeholder glitch-border" style="margin-top: 20px; height: 150px; background: url('https://placehold.co/400x150/000/0ff?text=BIOTECHNICA_SUBJECT_LINK') center/cover;">
            <div class="scanline"></div>
        </div>
    `;
}

function rollFacedown() {
    const roll = Math.floor(Math.random() * 10) + 1;
    const total = roll + state.stats.COOL + state.reputation;
    alert(`FACEDOWN_ROLL\nRESULT: ${roll} + COOL(${state.stats.COOL}) + REP(${state.reputation}) = ${total}`);
}

// =============================================
// NIGHT CITY INTERACTIVE MAP ENGINE
// =============================================

const nightCityMap = {
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,
    scale: 1,
    minScale: 0.8,
    maxScale: 4,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    dragMoved: false,
    lastX: 0,
    lastY: 0,
    playerPosition: { x: 0.32, y: 0.48 }, // The Glen position on the image
    selectedDistrict: null,
    initialized: false,
    mapImage: null,
    imageLoaded: false,
    debugMode: false, // Set to true to see hitboxes
    globalOffsetY: 0.025, // Global shift down to fix "shifted up" issue
    draggingDistrict: null, // For debug editing
    supabase: null, // DB Client
    dbConnected: false,

    // District hitboxes based on the Night City Atlas image coordinates (relative 0-1)
    // These are invisible zones that match the labels on the actual image
    districts: [
        // NORTH
        { id: 'norcal_military', name: 'NORCAL MILITARY BASE', x: 0.22, y: 0.04, w: 0.12, h: 0.08, status: 'RESTRICTED', danger: 'extreme', desc: 'Base militaire fédérale. Accès INTERDIT aux civils. Patrouilles armées 24/7.' },
        { id: 'watson_dev', name: 'WATSON DEVELOPMENT', x: 0.28, y: 0.12, w: 0.14, h: 0.08, status: 'GANG_ACTIVITY', danger: 'high', desc: 'Zone de développement disputée. Maelstrom et Tyger Claws s\'affrontent pour le contrôle.' },
        { id: 'kabuki', name: 'KABUKI', x: 0.42, y: 0.12, w: 0.10, h: 0.08, status: 'ACTIVE_MARKETS', danger: 'medium', desc: 'Cœur de Watson. Marchés noirs, ripperdocs, et le bar Lizzie\'s. Territoire des Mox.' },
        { id: 'new_westbrook', name: 'NEW WESTBROOK', x: 0.52, y: 0.08, w: 0.14, h: 0.10, status: 'CORPO_ZONE', danger: 'low', desc: 'Extension luxueuse de Westbrook. Résidences corpos et centres commerciaux haut de gamme.' },

        // EAST
        { id: 'charter_hill', name: 'CHARTER HILL', x: 0.68, y: 0.12, w: 0.10, h: 0.10, status: 'SAFE_ZONE', danger: 'low', desc: 'Quartier résidentiel aisé. Sécurité privée. Les corpos moyens y habitent.' },
        { id: 'exec_zone', name: 'EXEC ZONE', x: 0.72, y: 0.22, w: 0.08, h: 0.06, status: 'CORPO_ELITE', danger: 'low', desc: 'Zone executive. Penthouses de luxe surplombant la baie. Accès très contrôlé.' },

        // WEST
        { id: 'morro_rock', name: 'MORRO ROCK', x: 0.04, y: 0.18, w: 0.10, h: 0.08, status: 'ISOLATED', danger: 'unknown', desc: 'Île mystérieuse au large. Rumeurs de base secrète Militech. Accès par pont uniquement.' },
        { id: 'del_coronado', name: 'DEL CORONADO BAY', x: 0.22, y: 0.18, w: 0.10, h: 0.06, status: 'WATERFRONT', danger: 'medium', desc: 'Zone portuaire. Contrebande et trafics. Le pont Coronado relie à Morro Rock.' },
        { id: 'little_europe', name: 'LITTLE EUROPE', x: 0.24, y: 0.24, w: 0.10, h: 0.08, status: 'CULTURAL_ZONE', danger: 'medium', desc: 'Quartier européen. Restaurants, galeries, et une scène artistique underground.' },

        // CENTRAL
        { id: 'upper_marina', name: 'UPPER MARINA', x: 0.38, y: 0.22, w: 0.12, h: 0.08, status: 'WATERFRONT', danger: 'low', desc: 'Marina de luxe. Yachts corpos et clubs privés. Bonne vue sur la baie.' },
        { id: 'hot_zone', name: 'THE HOT ZONE', x: 0.32, y: 0.32, w: 0.12, h: 0.08, status: 'RADIOACTIVE', danger: 'extreme', desc: 'Centre-ville détruit par la bombe de 2023. Encore radioactif. Éviter à tout prix.' },
        { id: 'downtown', name: 'DOWNTOWN', x: 0.22, y: 0.32, w: 0.10, h: 0.08, status: 'BUSINESS_DISTRICT', danger: 'medium', desc: 'Centre financier secondaire. Tours de bureaux, banques, et commerces de jour.' },
        { id: 'little_china', name: 'LITTLE CHINA', x: 0.48, y: 0.30, w: 0.10, h: 0.08, status: 'ACTIVE_MARKETS', danger: 'medium', desc: 'Quartier chinois animé. Street food, cliniques, et le marché de nuit. Victor le ripperdoc opère ici.' },

        // SOUTH-WEST
        { id: 'university', name: 'UNIVERSITY DISTRICT', x: 0.20, y: 0.38, w: 0.10, h: 0.06, status: 'ACADEMIC', danger: 'low', desc: 'Campus universitaire. Étudiants, bars, et dealers de stimulants cognitifs.' },
        { id: 'port_nc', name: 'PORT OF NIGHT CITY', x: 0.16, y: 0.48, w: 0.10, h: 0.06, status: 'INDUSTRIAL', danger: 'high', desc: 'Port commercial majeur. Contrebande massive. Territoire disputé entre gangs.' },
        { id: 'reclamation', name: 'RECLAMATION ZONE', x: 0.18, y: 0.54, w: 0.10, h: 0.06, status: 'HAZARDOUS', danger: 'high', desc: 'Zone de recyclage toxique. Scavengers et squatters. Équipement de protection recommandé.' },

        // HEYWOOD (TON TERRITOIRE)
        { id: 'the_glen', name: 'THE GLEN', x: 0.28, y: 0.44, w: 0.10, h: 0.08, status: 'FIXER_TERRITORY', danger: 'medium', desc: 'TON QUARTIER. Centre administratif de Heywood. Relativement sûr. Le bar The Neon Archive est ta base.' },
        { id: 'old_japantown', name: 'OLD JAPANTOWN', x: 0.40, y: 0.40, w: 0.10, h: 0.06, status: 'TYGER_CLAWS', danger: 'high', desc: 'Ancien quartier japonais. Maintenant territoire Tyger Claws. Bars à braindance et pachinko.' },
        { id: 'old_combat', name: 'OLD COMBAT ZONE', x: 0.34, y: 0.50, w: 0.10, h: 0.08, status: 'COMBAT_ZONE', danger: 'extreme', desc: 'Ancienne zone de guerre. Loi inexistante. Gangs, deals, et violence quotidienne.' },

        // SOUTH-EAST
        { id: 'heywood_docks', name: 'HEYWOOD DOCKS', x: 0.54, y: 0.42, w: 0.10, h: 0.06, status: 'WATERFRONT', danger: 'medium', desc: 'Docks de Heywood. Pêcheurs, contrebandiers, et bons fruits de mer synthétiques.' },
        { id: 'north_heywood', name: 'NORTH HEYWOOD', x: 0.60, y: 0.48, w: 0.12, h: 0.10, status: 'VALENTINO_TERRITORY', danger: 'medium', desc: 'Territoire Valentino. Respecte leurs codes et tu seras en sécurité. El Coyote Cojo est ici.' },
        { id: 'heywood_industrial', name: 'HEYWOOD INDUSTRIAL ZONE', x: 0.48, y: 0.54, w: 0.12, h: 0.08, status: 'INDUSTRIAL', danger: 'high', desc: 'Zone industrielle. Usines, entrepôts, et trafics nocturnes.' },

        // SOUTH
        { id: 'pacifica_playground', name: 'PACIFICA PLAYGROUND', x: 0.12, y: 0.68, w: 0.10, h: 0.06, status: 'ABANDONED', danger: 'extreme', desc: 'Ancien parc d\'attractions. Maintenant repaire de gangs. Cauchemar éveillé.' },
        { id: 'san_morro', name: 'SAN MORRO BAY', x: 0.22, y: 0.66, w: 0.08, h: 0.05, status: 'COASTAL', danger: 'medium', desc: 'Baie au sud de Pacifica. Quelques pêcheurs téméraires et des épaves de corps.' },
        { id: 'pacifica', name: 'PACIFICA', x: 0.28, y: 0.62, w: 0.12, h: 0.08, status: 'COMBAT_ZONE', danger: 'extreme', desc: 'Resort abandonné devenu zone de guerre. Voodoo Boys + Animals. NE PAS Y ALLER SEUL.' },
        { id: 'santo_domingo', name: 'SANTO DOMINGO', x: 0.52, y: 0.64, w: 0.14, h: 0.10, status: '6TH_STREET', danger: 'high', desc: 'District industriel. Territoire 6th Street. Usines, ouvriers, et vétérans aigris.' },
        { id: 'laguna', name: 'LAGUNA RESERVOIR', x: 0.70, y: 0.66, w: 0.10, h: 0.08, status: 'WATER_SUPPLY', danger: 'medium', desc: 'Réservoir d\'eau de la ville. Bien gardé. Accès limité.' }
    ],

    init() {
        this.canvas = document.getElementById('night-city-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.initSupabase();
        this.loadMapConfig(); // Try to load from DB
        this.loadMapImage();
        this.resize();
        this.setupEvents();
        this.initialized = true;
    },

    initSupabase() {
        // Hardcoded credentials for convenience (User Request)
        const sbUrl = 'https://pvjfmczdnlkrefrowrbj.supabase.co';
        const sbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2amZtY3pkbmxrcmVmcm93cmJqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODcwNzgwOCwiZXhwIjoyMDg0MjgzODA4fQ.6jyK3n3SoMufFyjTEWokj189vGnksghYZ1z0TwRRMVk';

        if (sbUrl && sbKey && window.supabase) {
            try {
                this.supabase = window.supabase.createClient(sbUrl, sbKey);
                this.dbConnected = true;
                console.log('SUPABASE_CONNECTED_AUTO');
            } catch (e) {
                console.error('SUPABASE_INIT_ERROR', e);
            }
        }
    },

    async loadMapConfig() {
        if (!this.dbConnected) return;

        const { data, error } = await this.supabase
            .from('map_config')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1);

        if (error) {
            console.error('ERROR_LOADING_MAP', error);
            return;
        }

        if (data && data.length > 0) {
            this.districts = data[0].districts;
            console.log('MAP_CONFIG_LOADED_FROM_DB');
            this.render(); // Re-render with new data
        }
    },

    async saveMapConfig() {
        if (!this.dbConnected) {
            alert("DB_NOT_CONNECTED. Configure keys in settings.");
            return;
        }

        const { error } = await this.supabase
            .from('map_config')
            .insert([{ districts: this.districts }]);

        if (error) {
            alert('ERROR_SAVING_MAP: ' + error.message);
        } else {
            console.log('MAP_CONFIG_SAVED_TO_DB');
            // Visual feedback
            const gear = document.querySelector('button[onclick="nightCityMap.toggleDebug()"]');
            if (gear) {
                const oldColor = gear.style.color;
                gear.style.color = '#00ff00';
                setTimeout(() => gear.style.color = oldColor, 1000);
            }
        }
    },

    loadMapImage() {
        this.mapImage = new Image();
        this.mapImage.onload = () => {
            this.imageLoaded = true;
            this.hideLoading();
            this.render();
        };
        this.mapImage.onerror = () => {
            console.error('Failed to load map image');
            this.hideLoading();
            // Fallback: show error message
            const loading = document.getElementById('map-loading');
            if (loading) {
                loading.innerHTML = '<span class="loading-text" style="color: #ff003c;">[ERROR_LOADING_MAP_IMAGE]</span>';
                loading.style.display = 'block';
            }
        };
        this.mapImage.src = 'night_city_atlas.png';
    },

    resize() {
        const container = document.getElementById('map-canvas-container');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        // Use device pixel ratio for sharp rendering
        const dpr = window.devicePixelRatio || 1;
        this.width = rect.width * dpr;
        this.height = rect.height * dpr;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';

        if (this.imageLoaded) {
            this.render();
        }
    },

    hideLoading() {
        const loading = document.getElementById('map-loading');
        if (loading) loading.style.display = 'none';
    },

    setupEvents() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.startDrag(e.clientX, e.clientY));
        this.canvas.addEventListener('mousemove', (e) => this.drag(e.clientX, e.clientY));
        this.canvas.addEventListener('mouseup', (e) => this.endDrag(e));
        this.canvas.addEventListener('mouseleave', () => this.cancelDrag());
        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom(e.deltaY > 0 ? -0.15 : 0.15, e.clientX, e.clientY);
        }, { passive: false });

        // Touch events
        let lastTouchDist = 0;
        this.canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.startDrag(e.touches[0].clientX, e.touches[0].clientY);
            } else if (e.touches.length === 2) {
                lastTouchDist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
            }
        }, { passive: true });

        this.canvas.addEventListener('touchmove', (e) => {
            if (e.touches.length === 1) {
                e.preventDefault();
                this.drag(e.touches[0].clientX, e.touches[0].clientY);
            } else if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const delta = (dist - lastTouchDist) * 0.01;
                const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
                const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
                this.zoom(delta, centerX, centerY);
                lastTouchDist = dist;
            }
        }, { passive: false });

        this.canvas.addEventListener('touchend', (e) => {
            if (e.touches.length === 0) {
                this.endDrag(e.changedTouches[0]);
            }
        });
    },

    startDrag(x, y) {
        if (this.debugMode) {
            const result = this.getMapCoordinates(x, y);
            if (result) {
                const { mapX, mapY } = result;
                // Find if we clicked a district
                // IMPORTANT: during edit, we use the visual position (y + globalOffset)
                // BUT we want to edit the raw .y value. 
                // Visual Y = raw Y + globalOffset. 
                // So we check against (rawY + globalOffset).
                for (const district of this.districts) {
                    const visualY = district.y + this.globalOffsetY;
                    if (mapX >= district.x && mapX <= district.x + district.w &&
                        mapY >= visualY && mapY <= visualY + district.h) {

                        this.draggingDistrict = district;
                        this.lastX = x;
                        this.lastY = y;
                        this.canvas.style.cursor = 'move';
                        return; // Capture event, don't pan map
                    }
                }
            }
        }

        this.isDragging = true;
        this.dragMoved = false;
        this.lastX = x;
        this.lastY = y;
    },

    drag(x, y) {
        // Handle hover effect
        this.handleHover(x, y);

        if (this.draggingDistrict) {
            const dx = x - this.lastX;
            const dy = y - this.lastY;

            // Convert pixels to map ratio
            const dims = this.getRenderDimensions();
            if (dims) {
                const mapDx = dx / dims.displayWidth;
                const mapDy = dy / dims.displayHeight;

                this.draggingDistrict.x += mapDx;
                this.draggingDistrict.y += mapDy;

                this.lastX = x;
                this.lastY = y;
                this.render();
            }
            return;
        }

        if (!this.isDragging) return;

        const dx = x - this.lastX;
        const dy = y - this.lastY;

        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            this.dragMoved = true;
        }

        this.offsetX += dx;
        this.offsetY += dy;
        this.lastX = x;
        this.lastY = y;
        this.render();
    },

    endDrag(e) {
        if (this.draggingDistrict) {
            // Auto-save on drop if connected
            if (this.dbConnected) {
                this.saveMapConfig();
            } else {
                console.log("--- NEW COORDINATES (Copy to app.js) ---");
                console.log(JSON.stringify(this.districts, null, 2));
                console.log("----------------------------------------");
                alert("NEW_COORDS_LOGGED_TO_CONSOLE (DB not connected)");
            }

            this.draggingDistrict = null;
            this.handleHover(e ? (e.clientX || e.changedTouches[0].clientX) : 0, e ? (e.clientY || e.changedTouches[0].clientY) : 0);
            return;
        }

        if (!this.dragMoved && e) {
            // It was a click, not a drag
            this.handleClick(e);
        }
        this.isDragging = false;
        this.dragMoved = false;
    },

    cancelDrag() {
        this.isDragging = false;
        this.dragMoved = false;
    },

    zoom(delta, centerX, centerY) {
        const oldScale = this.scale;
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.scale + delta));

        // Zoom towards cursor/touch position
        if (centerX !== undefined && centerY !== undefined) {
            const rect = this.canvas.getBoundingClientRect();
            const x = centerX - rect.left - rect.width / 2;
            const y = centerY - rect.top - rect.height / 2;

            this.offsetX -= x * (this.scale - oldScale) / oldScale;
            this.offsetY -= y * (this.scale - oldScale) / oldScale;
        }

        this.render();
    },

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Get click position relative to canvas center
        const clickX = (e.clientX || e.pageX) - rect.left;
        const clickY = (e.clientY || e.pageY) - rect.top;

        // Transform to image coordinates (0-1 range)
        const imgWidth = this.mapImage.width;
        const imgHeight = this.mapImage.height;

        // Calculate current image display dimensions
        const canvasRatio = rect.width / rect.height;
        const imgRatio = imgWidth / imgHeight;

        let displayWidth, displayHeight;
        if (canvasRatio > imgRatio) {
            displayHeight = rect.height * this.scale;
            displayWidth = displayHeight * imgRatio;
        } else {
            displayWidth = rect.width * this.scale;
            displayHeight = displayWidth / imgRatio;
        }

        // Calculate image position
        const imgX = (rect.width - displayWidth) / 2 + this.offsetX;
        const imgY = (rect.height - displayHeight) / 2 + this.offsetY;

        // Convert click to image coordinates (0-1)
        const mapX = (clickX - imgX) / displayWidth;
        const mapY = (clickY - imgY) / displayHeight;

        // Check if click is within map bounds
        if (mapX < 0 || mapX > 1 || mapY < 0 || mapY > 1) {
            closeDistrictPopup();
            return;
        }

        // Find clicked district
        for (const district of this.districts) {
            // Apply global offset
            const dy = district.y + this.globalOffsetY;

            if (mapX >= district.x && mapX <= district.x + district.w &&
                mapY >= dy && mapY <= dy + district.h) {
                this.showDistrictPopup(district);
                return;
            }
        }

        closeDistrictPopup();
    },

    showDistrictPopup(district) {
        this.selectedDistrict = district;

        const popup = document.getElementById('district-popup');
        const nameEl = document.getElementById('popup-district-name');
        const statusEl = document.getElementById('popup-status');
        const descEl = document.getElementById('popup-description');

        if (popup && nameEl && statusEl && descEl) {
            nameEl.textContent = district.name;
            statusEl.textContent = `STATUS: ${district.status}`;
            statusEl.className = 'popup-status';

            if (district.danger === 'extreme') statusEl.classList.add('danger');
            else if (district.danger === 'low') statusEl.classList.add('safe');
            else statusEl.classList.add('warning');

            descEl.textContent = district.desc;
            popup.style.display = 'block';
        }
    },

    render() {
        if (!this.imageLoaded || !this.ctx) return;

        const ctx = this.ctx;
        const w = this.width;
        const h = this.height;
        const dpr = window.devicePixelRatio || 1;

        // Clear with dark background
        ctx.fillStyle = '#050a0e';
        ctx.fillRect(0, 0, w, h);

        // Calculate image dimensions to fit canvas while maintaining aspect ratio
        const imgWidth = this.mapImage.width;
        const imgHeight = this.mapImage.height;
        const canvasRatio = w / h;
        const imgRatio = imgWidth / imgHeight;

        let displayWidth, displayHeight;
        if (canvasRatio > imgRatio) {
            // Canvas is wider - fit to height
            displayHeight = h * this.scale;
            displayWidth = displayHeight * imgRatio;
        } else {
            // Canvas is taller - fit to width
            displayWidth = w * this.scale;
            displayHeight = displayWidth / imgRatio;
        }

        // Center the image with offset
        const x = (w - displayWidth) / 2 + this.offsetX * dpr;
        const y = (h - displayHeight) / 2 + this.offsetY * dpr;

        // Draw the map image
        ctx.drawImage(this.mapImage, x, y, displayWidth, displayHeight);

        // Draw player position marker (The Glen)
        this.drawPlayer(ctx, x, y, displayWidth, displayHeight);

        // Draw subtle vignette
        this.drawVignette(ctx, w, h);

        // Draw Debug Hitboxes
        if (this.debugMode) {
            this.drawDebugHitboxes(ctx, x, y, displayWidth, displayHeight);
        }
    },

    getRenderDimensions() {
        if (!this.mapImage) return null;
        const w = this.width;
        const h = this.height;
        const imgWidth = this.mapImage.width;
        const imgHeight = this.mapImage.height;
        const canvasRatio = w / h;
        const imgRatio = imgWidth / imgHeight;

        let displayWidth, displayHeight;
        if (canvasRatio > imgRatio) {
            displayHeight = h * this.scale;
            displayWidth = displayHeight * imgRatio;
        } else {
            displayWidth = w * this.scale;
            displayHeight = displayWidth / imgRatio;
        }
        return { displayWidth, displayHeight, w, h };
    },

    getMapCoordinates(clientX, clientY) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = (clientX) - rect.left;
        const clickY = (clientY) - rect.top;

        const dims = this.getRenderDimensions();
        if (!dims) return null;
        const { displayWidth, displayHeight, w, h } = dims;

        const offsetXDPR = this.offsetX * (window.devicePixelRatio || 1);
        const offsetYDPR = this.offsetY * (window.devicePixelRatio || 1);

        const imgX = (w - displayWidth) / 2 + offsetXDPR;
        const imgY = (h - displayHeight) / 2 + offsetYDPR;

        const mapX = (clickX * (window.devicePixelRatio || 1) - imgX) / displayWidth;
        const mapY = (clickY * (window.devicePixelRatio || 1) - imgY) / displayHeight;

        return { mapX, mapY };
    },

    handleHover(clientX, clientY) {
        if (this.isDragging) {
            this.canvas.style.cursor = 'grabbing';
            return;
        }
        if (this.draggingDistrict) {
            this.canvas.style.cursor = 'move';
            return;
        }

        const coords = this.getMapCoordinates(clientX, clientY);
        if (!coords) return;
        const { mapX, mapY } = coords;

        let hovering = false;
        for (const district of this.districts) {
            const dy = district.y + this.globalOffsetY;
            if (mapX >= district.x && mapX <= district.x + district.w &&
                mapY >= dy && mapY <= dy + district.h) {
                hovering = true;
                break;
            }
        }

        this.canvas.style.cursor = hovering ? (this.debugMode ? 'move' : 'pointer') : 'grab';
    },

    drawDebugHitboxes(ctx, imgX, imgY, imgW, imgH) {
        ctx.save();
        ctx.lineWidth = 2;

        this.districts.forEach(d => {
            const isDraggingThis = (d === this.draggingDistrict);

            ctx.strokeStyle = isDraggingThis ? '#00ff00' : 'rgba(255, 0, 0, 0.8)';
            ctx.fillStyle = isDraggingThis ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)';

            const dy = d.y + this.globalOffsetY;
            const x = imgX + d.x * imgW;
            const y = imgY + dy * imgH;
            const w = d.w * imgW;
            const h = d.h * imgH;

            ctx.fillRect(x, y, w, h);
            ctx.strokeRect(x, y, w, h);

            // Draw label
            ctx.fillStyle = 'white';
            ctx.font = '12px sans-serif';
            ctx.fillText(d.id, x, y - 5);
        });
        ctx.restore();
    },

    toggleDebug() {
        this.debugMode = !this.debugMode;
        this.render();
        console.log('DEBUG_MODE:', this.debugMode);
    },

    drawPlayer(ctx, imgX, imgY, imgW, imgH) {
        // Player position in The Glen
        const px = imgX + this.playerPosition.x * imgW;
        const py = imgY + this.playerPosition.y * imgH;

        const dpr = window.devicePixelRatio || 1;
        const baseSize = 8 * dpr * this.scale;

        // Animated pulse
        const time = Date.now() / 400;
        const pulseSize = baseSize + Math.sin(time) * (3 * dpr);

        // Outer glow
        ctx.beginPath();
        ctx.arc(px, py, pulseSize + 8 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 0, 0.15)';
        ctx.fill();

        // Middle ring
        ctx.beginPath();
        ctx.arc(px, py, pulseSize + 3 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.fill();

        // Inner dot
        ctx.beginPath();
        ctx.arc(px, py, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = '#00ff00';
        ctx.fill();

        // White center
        ctx.beginPath();
        ctx.arc(px, py, 4 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    },

    drawVignette(ctx, w, h) {
        const gradient = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.3, w / 2, h / 2, Math.max(w, h) * 0.7);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.5)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
    },

    reset() {
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.render();
    }
};

// --- SETTINGS / DB CONFIG ---
function openSettings() {
    document.getElementById('settings-modal').style.display = 'flex';
    document.getElementById('setting-sb-url').value = localStorage.getItem('sb_url') || '';
    document.getElementById('setting-sb-key').value = localStorage.getItem('sb_key') || '';
}

function saveSettings() {
    const url = document.getElementById('setting-sb-url').value.trim();
    const key = document.getElementById('setting-sb-key').value.trim();

    if (url && key) {
        localStorage.setItem('sb_url', url);
        localStorage.setItem('sb_key', key);
        alert('CONFIGURATION_SAVED. REBOOTING_SYSTEM...');
        location.reload();
    }
}

// Map control functions
function mapZoomIn() {
    nightCityMap.zoom(0.2);
}

function mapZoomOut() {
    nightCityMap.zoom(-0.2);
}

function mapReset() {
    nightCityMap.reset();
}

function mapSettings() {
    openSettings();
}

function closeDistrictPopup() {
    const popup = document.getElementById('district-popup');
    if (popup) popup.style.display = 'none';
    nightCityMap.selectedDistrict = null;
    nightCityMap.render();
}

function openDistrictInWiki() {
    if (!nightCityMap.selectedDistrict) return;

    const districtName = nightCityMap.selectedDistrict.name;

    // Search in wiki
    state.wikiSearch = districtName;
    state.wikiFilter = 'district';

    closeDistrictPopup();
    switchView('dataterm');

    const searchInput = document.getElementById('wiki-search-input');
    if (searchInput) {
        searchInput.value = districtName;
        renderWiki();
    }
}

// Initialize map when view becomes active
const originalSwitchView = switchView;
switchView = function (viewId) {
    originalSwitchView(viewId);

    if (viewId === 'map' && !nightCityMap.initialized) {
        setTimeout(() => {
            nightCityMap.init();
        }, 100);
    } else if (viewId === 'map' && nightCityMap.initialized) {
        nightCityMap.resize();
        nightCityMap.render();
    }
};

// Animate player marker
setInterval(() => {
    if (nightCityMap.initialized && document.getElementById('view-map')?.classList.contains('active')) {
        nightCityMap.render();
    }
}, 100);
