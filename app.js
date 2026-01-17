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
        { id: 1, cat: 'slang', title: 'CHOOM / CHOOMBA', content: 'Terme amical (ou parfois sarcastique) pour un ami ou un membre de la famille. Vient du Neo-Afro-American.' },
        { id: 2, cat: 'slang', title: 'EDDIES', content: 'Prononciation phonétique de "EDs" (Eurodollars). La monnaie standard de Night City.' },
        { id: 3, cat: 'slang', title: 'PREEM', content: 'Argot pour "Premium". Signifie que quelque chose est de haute qualité ou génial.' },
        { id: 4, cat: 'slang', title: 'GONK', content: 'Idiot, imbécile. Quelqu\'un qui fait des choix stupides ou dangereux.' },
        { id: 5, cat: 'slang', title: 'FLATLINE', content: 'Mort. Faire un plat au moniteur cardiaque. Utilisé aussi pour désigner un hack réussi sur une ICE.' },
        { id: 6, cat: 'rules', title: 'ACTIONS DE COMBAT', content: 'À ton tour, tu as 1 <strong>Action de Mouvement</strong> et 1 <strong>Action</strong> (Attaque, Recharger, Soins, etc.).' },
        { id: 7, cat: 'rules', title: 'ARMURE (SP)', content: 'Les dégâts sont soustraits de ton SP (Stopping Power). Si tu prends des dégâts, ton SP diminue de 1 (Ablation).' },
        { id: 8, cat: 'rules', title: 'OPERATOR (FIXER)', content: 'Ta capacité de rôle. Permet de trouver du matos rare, de négocier les prix (Haggle) et d\'avoir des contacts partout.' },
        { id: 9, cat: 'lore', title: 'THE GLEN (HEYWOOD)', content: 'Ton quartier. Riche et propre au Nord (City Hall), il devient dangereux et pauvre au Sud, vers Vista del Rey.' },
        { id: 10, cat: 'biotechnica', title: 'CHOOH2', content: 'Le carburant mondial créé par Biotechnica à partir de levure génétiquement modifiée. Ils détiennent tous les brevets.' },
        { id: 11, cat: 'biotechnica', title: 'PROJECT NIGHTINGALE', content: 'Rumeurs d\'expériences de clonage humain illégales. Un sujet sensible pour Link.' },
        { id: 12, cat: 'rules', title: 'COMBAT (DISTANCE)', content: 'REF + Compétence + 1d10 vs DV de portée. Si REF 8+, tu peux esquiver les balles avec DEX + Esquive.' },
        { id: 13, cat: 'rules', title: 'COMBAT (MELEE)', content: 'DEX + Compétence + 1d10 vs DEX + Esquive. Ignore la moitié de l\'armure (SP).' },
        { id: 14, cat: 'rules', title: 'BLESSURES GRAVES', content: 'Moins de la moitié des PV = -2 à tout. À 0 PV = Coups mortels (-4 actions) et jets de mort.' },
        { id: 15, cat: 'rules', title: 'ARMURE (ABLATION)', content: 'Chaque dégât reçu réduit ton SP de 1 point définitivement jusqu\'à réparation.' },
        { id: 16, cat: 'rules', title: 'GUÉRISON', content: 'Une fois stabilisé, tu récupères des PV égaux à ton BODY chaque jour de repos.' },
        { id: 17, cat: 'rules', title: 'DIFFICULTÉS (DV)', content: 'Simple: 9, Quotidien: 13, Difficile: 15, Pro: 17, Héroïque: 21, Incroyable: 24, Légendaire: 29.' },
        { id: 18, cat: 'rules', title: 'NETRUNNING', content: 'Interface + 1d10 vs DV. Skills: Scanner (trouver), Backdoor (mot de passe), Zap (attaquer 1d6).' },
        { id: 19, cat: 'rules', title: 'FACEDOWN', content: 'COOL + Réputation + 1d10 vs COOL + Réputation + 1d10. Le perdant a un malus de -2.' },
        { id: 20, cat: 'rules', title: 'VÉHICULES (SDP)', content: 'Points de structure. Si SDP=0, le véhicule est détruit. Réparable via Tech + Véhicule.' },
        { id: 21, cat: 'rules', title: 'ESQUIVE VÉHICULE', content: 'DEX + Esquive + 1d10 contre DV 13 pour un piéton qui esquive un véhicule en mouvement.' }
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
        <div class="wiki-item">
            <div class="category-tag">${item.cat.toUpperCase()}</div>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        </div>
    `).join('');
}

function filterWiki(cat) {
    state.wikiFilter = state.wikiFilter === cat ? 'all' : cat;

    // Update button styles
    document.querySelectorAll('.wiki-categories button').forEach(btn => {
        btn.style.background = btn.innerText.toLowerCase() === state.wikiFilter
            ? 'var(--cyber-blue)'
            : 'rgba(0, 240, 255, 0.1)';
        btn.style.color = btn.innerText.toLowerCase() === state.wikiFilter
            ? 'var(--bg-dark)'
            : 'var(--cyber-blue)';
    });

    renderWiki();
}

function searchWiki() {
    state.wikiSearch = document.getElementById('wiki-search-input').value;
    renderWiki();
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

