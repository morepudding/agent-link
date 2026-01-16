// --- STATE MANAGEMENT ---
let state = {
    edBalance: 1240.0,
    notes: JSON.parse(localStorage.getItem('link_notes')) || [],
    heartRate: 72,
    news: [
        { id: 1, type: 'biotechnica', title: 'BIOTECHNICA_PR: "Sustainability is our core focus"', date: '2026-01-16' },
        { id: 2, type: 'general', title: 'NCPD: South Zone dogfights under investigation', date: '2026-01-16' },
        { id: 3, type: 'biotechnica', title: 'LEAK: Classified research center move to Night City?', date: '2026-01-15' }
    ]
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateBalanceDisplay();
    renderNews();
    renderNotes();
    startVitalSim();
});

// --- NAVIGATION ---
function switchView(viewId) {
    // UI Feedback
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');

    // Nav active state
    document.querySelectorAll('.app-nav button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(viewId.substring(0, 3))) {
            btn.classList.add('active');
        }
    });

    // Special case for dashboard
    if (viewId === 'dashboard') {
        document.querySelector('.app-nav button:nth-child(2)').classList.add('active');
    }
}

// --- VITALS SIMULATION ---
function startVitalSim() {
    setInterval(() => {
        state.heartRate = 70 + Math.floor(Math.random() * 15);
        document.getElementById('heart-rate').innerText = state.heartRate;
    }, 3000);
}

// --- NEWS FEED ---
function renderNews() {
    const feed = document.getElementById('news-feed');
    feed.innerHTML = state.news.map(item => `
        <div class="feed-item ${item.type}">
            <div class="item-meta">[${item.date}]</div>
            <div class="item-title">${item.title}</div>
        </div>
    `).join('');
}

// --- WALLET & BETTING ---
function updateBalanceDisplay() {
    document.getElementById('ed-balance').innerText = state.edBalance.toLocaleString('en-US', { minimumFractionDigits: 2 });
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
