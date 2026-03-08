// Loaderdan asosiy ekranga o'tish
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').classList.remove('hidden');
        renderCards();
    }, 3000);
});

// Vaqtni yangilab turish
setInterval(() => {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString('uz-UZ');
}, 1000);

let cards = JSON.parse(localStorage.getItem('tkk_data')) || [];
let editingId = null;

function openModal(id = null) {
    const today = new Date().toLocaleDateString();
    const exists = cards.find(c => c.date === today);

    if (exists && id === null) {
        alert("Bugun uchun card yaratib bo'lingan! Mavjudini tahrirlashingiz mumkin.");
        return;
    }

    editingId = id;
    if (id) {
        const card = cards.find(c => c.id === id);
        document.getElementById('input-count').value = card.count;
        document.getElementById('input-coeff').value = card.coeff;
    } else {
        document.getElementById('input-count').value = '';
        document.getElementById('input-coeff').value = '';
    }
    
    document.getElementById('modal').style.display = 'flex';
    calculatePreview();
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function calculatePreview() {
    const count = document.getElementById('input-count').value || 0;
    const coeff = document.getElementById('input-coeff').value || 0;
    document.getElementById('preview-total').innerText = (count * coeff).toFixed(2);
}

function saveCard() {
    const count = parseFloat(document.getElementById('input-count').value);
    const coeff = parseFloat(document.getElementById('input-coeff').value);
    const total = count * coeff;

    if (!count || !coeff) return alert("Hamma maydonni to'ldiring!");

    if (editingId) {
        cards = cards.map(c => c.id === editingId ? {...c, count, coeff, total} : c);
    } else {
        const newCard = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            count,
            coeff,
            total
        };
        cards.push(newCard);
    }

    localStorage.setItem('tkk_data', JSON.stringify(cards));
    renderCards();
    closeModal();
}

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    cards.sort((a, b) => b.id - a.id).forEach(card => {
        let levelClass = '';
        let imgUrl = 'https://cdn-icons-png.flaticon.com/512/628/628283.png'; // Oddiy o'simlik

        if (card.total >= 5000) {
            levelClass = 'level-5000';
            imgUrl = 'https://cdn-icons-png.flaticon.com/512/1047/1047464.png'; // Daraxt
        } else if (card.total >= 4000) {
            levelClass = 'level-4000';
            imgUrl = 'https://cdn-icons-png.flaticon.com/512/892/892926.png'; // Gullagan o'simlik
        } else if (card.total >= 3000) {
            levelClass = 'level-3000';
            imgUrl = 'https://cdn-icons-png.flaticon.com/512/427/427112.png'; // O'sayotgan o'simlik
        }

        container.innerHTML += `
            <div class="card ${levelClass}" onclick="openModal(${card.id})">
                <div class="card-date">${card.date} | ${card.time}</div>
                <div class="card-body">
                    <div>
                        <div class="card-total">${card.total.toLocaleString()} so'm</div>
                        <small>${card.count} x ${card.coeff}</small>
                    </div>
                    <img src="${imgUrl}" class="card-image">
                </div>
            </div>
        `;
    });
}
