// --- STATE MANAGEMENT ---
let state = {
    edBalance: 1240.0,
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
        { id: 11, cat: 'biotechnica', title: 'PROJECT NIGHTINGALE', content: 'Rumeurs d\'expériences de clonage humain illégales. Un sujet sensible pour Link.' }
    ],
    wikiFilter: 'all',
    wikiSearch: '',
    hp: 40,
    maxHp: 40,
    armor: 11,
    maxArmor: 11,
    luck: 6,
    maxLuck: 6,
    network: [
        { id: 1, name: 'Dr. Manganese', role: 'Ripperdoc (Heywood)', trust: 'Loyal', note: 'Ancien chirurgien militaire. Te soigne pour pas cher.' },
        { id: 2, name: 'Short-Circuit', role: 'Techie (Watson)', trust: 'Professionnel', note: 'As du fer à souder. Vit dans un van blindé.' },
        { id: 3, name: 'Mako', role: 'Solo Freelance', trust: 'Neutre', note: 'Le muscle quand la diplomatie échoue.' },
        { id: 4, name: 'Vez', role: 'Fixer / Ex-Biotechnica', trust: 'En Recherche', note: 'Ton contact principal pour retrouver ta sœur.' }
    ],
    networkSearch: ''
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateBalanceDisplay();
    renderNews();
    renderNotes();
    renderWiki();
    renderNetwork();
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
            (viewId === 'carnet' && label === 'car')) {
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

// --- WALLET & BETTING ---
function updateBalanceDisplay() {
    const balEl = document.getElementById('ed-balance');
    if (balEl) balEl.innerText = state.edBalance.toLocaleString('en-US', { minimumFractionDigits: 2 });
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
    updateBalanceDisplay();
    status.innerHTML = 'BET_PLACED_WAITING_RES...';

    // Simulated result
    setTimeout(() => {
        const win = Math.random() > 0.6;
        if (win) {
            const winnings = amount * 2.5;
            state.edBalance += winnings;
            status.innerHTML = `<span style="color:#00ff00">WIN! +${winnings} ED</span>`;
        } else {
            status.innerHTML = '<span style="color:red">LOST_BET</span>';
        }
        updateBalanceDisplay();
    }, 2000);
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

    // Luck
    const luckVal = document.getElementById('luck-val');
    if (luckVal) luckVal.innerText = state.luck;
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
    state.luck = state.maxLuck;
    updateStatDisplays();
}

