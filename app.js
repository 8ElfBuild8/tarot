/* ========================================
   TAROT MYSTIC - JavaScript
   ======================================== */

// ========================================
// TAROT CARDS DATA - All 78 Cards
// ========================================

const tarotCards = {
    // Major Arcana (22 cards)
    major: [
        { number: 0, name: "El Loco", image: "🃏", meaning: "Nuevos comienzo, espontaneidad, libertad, aventura, riesgo, confianza en el universo.", reversed: "Irresponsabilidad, tomar riesgos sin pensar, seguir impulse." },
        { number: 1, name: "El Mago", image: "🧙", meaning: "Poder, habilidad, willpower, creatividad, poderío, comunicación.", reversed: "Manipulación, truco, energía mal utilizada." },
        { number: 2, name: "La Sacerdotisa", image: "👸", meaning: "Intuición, misterio, subconsciente, sabiduría interior, secretos.", reversed: "Superficialidad, secretos revelados, ignorancia." },
        { number: 3, name: "La Emperatriz", image: "👑", meaning: "Fertilidad, abundancia, naturaleza, creatividad, feminidad, материнство.", reversed: "Dependencia, esterilidad, vacío emocional." },
        { number: 4, name: "El Emperador", image: "👨‍💼", meaning: "Autoridad, estructura, control, padre, reglas, estabilidad.", reversed: "Tiranía, rigidismo, falta de disciplina." },
        { number: 5, name: "El Hierofante", image: "⛪", meaning: "Tradición, aprendizaje, enseñanza, guía espiritual, creencia.", reversed: "Rebelión, herejía, nuevos enfoques." },
        { number: 6, name: "Los Enamorados", image: "💕", meaning: "Amor, armonía, relaciones, elección, atracción, complicidad.", reversed: "Desarmonía, conflicto de valores, infidelidad." },
        { number: 7, name: "El Carro", image: "🐎", meaning: "Victoria, voluntad, determinación, éxito, movimiento hacia adelante.", reversed: "Agresión, fuerza sin dirección, fracaso." },
        { number: 8, name: "La Fuerza", image: "🦁", meaning: "Coraje, paciencia, compasión, influencia, persuasión,温柔.", reversed: "Fragilidad, persuasión negativa, debilidad." },
        { number: 9, name: "El Ermitaño", image: "🕯️", meaning: "Introspección, sabiduría, solitude, búsqueda interior, guía.", reversed: "Aislamiento, soledad no deseada, introvertido excesivo." },
        { number: 10, name: "La Rueda de la Fortuna", image: "🎡", meaning: "Suerte, cambio, ciclos, destino, giro de eventos, oportunidades.", reversed: "Mala suerte, resistencia al cambio, inercia." },
        { number: 11, name: "La Justicia", image: "⚖️", meaning: "Verdad, causa y efecto, ley, equilibrio, honestidad, responsabilidad.", reversed: "Injusticia, deshonestidad, evasión de responsabilidad." },
        { number: 12, name: "El Colgado", image: "🙃", meaning: "Pausa, sacrificio, liberación, nuevo perspectiva, rendición.", reversed: "Paralización, resistencia, sacrificio inútil." },
        { number: 13, name: "La Muerte", image: "💀", meaning: "Transformación, окончание, renacimiento, cambio profundo, tránsito.", reversed: "Miedo al cambio, estagnación, resistencia a evolucionar." },
        { number: 14, name: "La Templanza", image: "🏺", meaning: "Equilibrio, paciencia, moderación, sanación, propósito.", reversed: "Desequilibrio, excesos, impaciencia." },
        { number: 15, name: "El Diablo", image: "😈", meaning: "Engaño, tentación, sombras, materialismo, addición, liberarse.", reversed: "Liberación, superar sombras, reconocer patrones." },
        { number: 16, name: "La Torre", image: "🗼", meaning: "Cambio súbito, revelación, caos, liberación forzada, despertar.", reversed: "Miedo al cambio, evitar灾难, lento despertar." },
        { number: 17, name: "La Estrella", image: "⭐", meaning: "Esperanza, fe, renovación, inspiración, paz, guía espiritual.", reversed: "Desesperanza, duda, pérdida de fe." },
        { number: 18, name: "La Luna", image: "🌙", meaning: "Ilusión, intuición, emociones, subconscious, sueños, misterio.", reversed: "Liberación de miedos, superar ilusiones, verdad." },
        { number: 19, name: "El Sol", image: "☀️", meaning: "Alegría, éxito, vitalidad, claridad, verdad, abundancia.", reversed: "Tristeza temporal, claridad temporalmente perdida." },
        { number: 20, name: "El Juicio", image: "🔔", meaning: "Renacimiento, despertar, inner calling, perdón, redención.", reversed: "Auto-duda, juicio interno, evitar el llamado." },
        { number: 21, name: "El Mundo", image: "🌍", meaning: "Completitud, logro, recompensa, integración,新的 comienzo.", reversed: "Incompletitud, closure no alcanzado, esperar." }
    ],

    // Minor Arcana - Wands (Bastos)
    wands: [
        { name: "As de Bastos", image: "🔥", meaning: "Inspiración, nuevos oportunidad, crecimiento, creatividad, pasión.", reversed: "Bloqueo creativo, retrasos, falta de motivación." },
        { name: "Dos de Bastos", image: "💪", meaning: "Planificación, decisiones, apertura a nuevas oportunidades.", reversed: "Miedo a lo desconocido, planificación deficiente." },
        { name: "Tres de Bastos", image: "🚢", meaning: "Esperanza, anticipación, visión de futuro, progreso.", reversed: "Obstáculos, retrasos, expectativas no cumplidas." },
        { name: "Cuatro de Bastos", image: "🎉", meaning: "Celebración, armonía, paz, victoria, reunión familiar.", reversed: "Falta de armonía, celebración prematura." },
        { name: "Cinco de Bastos", image: "⚔️", meaning: "Conflicto, competencia, desafíos, desacuerdo, tensión.", reversed: "Evitar conflicto, encontrar paz." },
        { name: "Seis de Bastos", image: "🏆", meaning: "Victoria, reconocimiento, éxito, superación de desafíos.", reversed: "Arrogancia, victorexia, falta de reconocimiento." },
        { name: "Siete de Bastos", image: "🛡️", meaning: "Defensa, persistencia, determinación, protección de logros.", reversed: "Agotamiento, rendición, abrumado." },
        { name: "Ocho de Bastos", image: "🏹", meaning: "Rapidez, movimiento, progreso rápido, mensajes, viajes.", reversed: "Esperas, frustraciones, retrasos." },
        { name: "Nueve de Bastos", image: "🏰", meaning: "Resistencia, perseverancia, fuerza interior, casi logrando.", reversed: "Agotamiento, rendición, pesimismo." },
        { name: "Diez de Bastos", image: "💼", meaning: "Carga, responsabilidad, presión, trabajo pesado, deber.", reversed: "Liberación de carga, delegar, burnout." }
    ],

    // Minor Arcana - Cups (Copas)
    cups: [
        { name: "As de Copas", image: "💧", meaning: "Amor nuevo, emociones, intuición, conexión espiritual, creatividad.", reversed: "Emociones bloqueadas, vacío emocional." },
        { name: "Dos de Copas", image: "💑", meaning: "Asociación, relación, atracción, amor, compromiso mutuo.", reversed: "Desequilibrio, relación rota, uno dando más." },
        { name: "Tres de Copas", image: "🥂", meaning: "Celebración, amistad, comunidad, alegría, reuniones.", reversed: "Aislamiento, exceso, soledad." },
        { name: "Cuatro de Copas", image: "😔", meaning: "Reflexión, insatisfacción, evaluando opciones, meditación.", reversed: "Nuevas oportunidades, tomar acción." },
        { name: "Cinco de Copas", image: "😢", meaning: "Pérdida, duelo, decepción, mirando lo negativo.", reversed: "Aceptar pérdida, perdonar, seguir adelante." },
        { name: "Seis de Copas", image: "🧒", meaning: "Nostalgia, recuerdos, inocencia, romance, pasado.", reversed: "Vivir en el pasado, recuerdos dolorosos." },
        { name: "Siete de Copas", image: "🎭", meaning: "Ilusión, fantasía, elecciones, sueños, confusión.", reversed: "Claridad, desilusión, tomar decisiones." },
        { name: "Ocho de Copas", image: "🌊", meaning: "Abandono, búsqueda, dejando atrás, búsqueda de propósito.", reversed: "Miedo a التغيير, clingando al pasado." },
        { name: "Nueve de Copas", image: "😌", meaning: "Satisfacción, realización, deseo cumplido,contentamiento.", reversed: "Insatisfacción, ambicioso sin límites." },
        { name: "Diez de Copas", image: "👨‍👩‍👧", meaning: "Armonía familiar, felicidad, romance, comunidad, paz.", reversed: "Familia dissociada, conflictos domésticos." }
    ],

    // Minor Arcana - Swords (Espadas)
    swords: [
        { name: "As de Espadas", image: "🗡️", meaning: "Verdad, claridad, nuevo idea, pensamiento claro, corte.", reversed: "Confusión, brutalidad, pensamiento oscuro." },
        { name: "Dos de Espadas", image: "⚖️", meaning: "Decisión difícil, punto muerto, evitando problema, ceguera.", reversed: "Análisis paralysis, información nueva." },
        { name: "Tres de Espadas", image: "💔", meaning: "Dolor, corazón roto, tristeza, grief, traición, pérdida.", reversed: "Sanación, perdonar, dejar ir dolor." },
        { name: "Cuatro de Espadas", image: "😴", meaning: "Descanso, recuperación, meditación, pausa, serenidad.", reversed: "Inquietud, agotamiento, no poder descansar." },
        { name: "Cinco de Espadas", image: "⚔️", meaning: "Conflicto, victoria a costa de otros, desprecio, disputa.", reversed: "Perdón, hacer las paces, dejar ir." },
        { name: "Seis de Espadas", image: "⛵", meaning: "Transición, viaje, moving on, dejar atrás problemas.", reversed: "Atascado, resistencia al cambio." },
        { name: "Siete de Espadas", image: "🤫", meaning: "Evasión, estrategia, secretos, steal, astucia, planificar.", reversed: "Confesar, revelar secretos, culpa." },
        { name: "Ocho de Espadas", image: "⛓️", meaning: "Atascado, atrapado, victimización, limitaciones autoimpuestas.", reversed: "Liberación, romper cadenas, nueva perspectiva." },
        { name: "Nueve de Espadas", image: "😰", meaning: "Ansiedad, preocupación, miedo, pesadillas, culpa, tortura mental.", reversed: "Superar miedos, esperanza, claridad." },
        { name: "Diez de Espadas", image: "🗡️", meaning: "Final traicionero, dolor, betrayal, fin doloroso, destrucción.", reversed: "Renacimiento, recuperación, empezar de nuevo." }
    ],

    // Minor Arcana - Pentacles (Oros)
    pentacles: [
        { name: "As de Oros", image: "💰", meaning: "Nueva oportunidad, prosperidad, abundancia, nuevo comienzo material.", reversed: "Oportunidad perdida, финансовые problemas." },
        { name: "Dos de Oros", image: "🎭", meaning: "Equilibrio, adaptación, prioridades, múltiples responsabilidades.", reversed: "Desequilibrio, desorganización, abrumado." },
        { name: "Tres de Oros", image: "🏛️", meaning: "Trabajo en equipo, colaboración, maestría, artesanía.", reversed: "Falta de teamwork, trabajando solo, плохой результат." },
        { name: "Cuatro de Oros", image: "🤑", meaning: "Conservación, seguridad, posesividad, control, stinginess.", reversed: "Generosidad, soltar control, compartir." },
        { name: "Cinco de Oros", image: "🏠", meaning: "Dificultades financieras, pobreza, marginación, aislamiento.", reversed: "Recuperación, comunidad, ayuda disponible." },
        { name: "Seis de Oros", image: "🤝", meaning: "Generosidad, caridad, compartir, abundancia, karma.", reversed: "Deudas, dependencia, egoísmo." },
        { name: "Siete de Oros", image: "🌱", meaning: "Paciencia, recompensa diferida, inversión, crecimiento gradual.", reversed: "Impaciencia, falta de recompensa, inversión pobre." },
        { name: "Ocho de Oros", image: "🔨", meaning: "Dedicación, maestría, habilidad, progreso, calidad.", reversed: "Falta de enfoque, habilidad no desarrollada." },
        { name: "Nueve de Oros", image: "🍇", meaning: "Independencia, autosuficiencia, recompensa por esfuerzo, logro.", reversed: "Dependencia, inseparidad, seguridad material." },
        { name: "Diez de Oros", image: "🏰", meaning: "Herencia, riqueza familiar, tradición, éxito a largo plazo.", reversed: "Conflicto familiar, финансовые perdidas." }
    ]
};

// ========================================
// SPREAD POSITIONS
// ========================================

const spreadPositions = {
    three: [
        { position: "Pasado", index: 0 },
        { position: "Presente", index: 1 },
        { position: "Futuro", index: 2 }
    ],
    five: [
        { position: "Situación Actual", index: 0 },
        { position: "Desafío", index: 1 },
        { position: "Pasado", index: 2 },
        { position: "Futuro", index: 3 },
        { position: "Consejo", index: 4 }
    ],
    celtic: [
        { position: "Influencia Actual", index: 0 },
        { position: "Desafío", index: 1 },
        { position: "Subconsciente", index: 2 },
        { position: "Pasado Reciente", index: 3 },
        { position: "Meta", index: 4 },
        { position: "Futuro", index: 5 },
        { position: "Interior", index: 6 },
        { position: "Exterior", index: 7 },
        { position: "Esperanzas y Temores", index: 8 },
        { position: "Resultado Final", index: 9 }
    ]
};

// ========================================
// APP STATE
// ========================================

let state = {
    selectedSpread: null,
    drawnCards: [],
    isShuffled: false
};

// ========================================
// DOM ELEMENTS
// ========================================

const elements = {
    tabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    spreadBtns: document.querySelectorAll('.spread-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    drawBtn: document.getElementById('draw-btn'),
    resetBtn: document.getElementById('reset-btn'),
    spreadContainer: document.getElementById('spread-container'),
    readingResult: document.getElementById('reading-result'),
    cardsGrid: document.getElementById('cards-grid'),
    filterBtns: document.querySelectorAll('.filter-btn')
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function getAllCards() {
    const allCards = [];
    
    // Add Major Arcana
    tarotCards.major.forEach((card, index) => {
        allCards.push({
            ...card,
            type: 'major',
            typeName: 'Arcano Mayor',
            fullName: card.name
        });
    });
    
    // Add Minor Arcana
    const suits = [
        { key: 'wands', name: 'Bastos' },
        { key: 'cups', name: 'Copas' },
        { key: 'swords', name: 'Espadas' },
        { key: 'pentacles', name: 'Oros' }
    ];
    
    suits.forEach(suit => {
        tarotCards[suit.key].forEach((card, index) => {
            allCards.push({
                ...card,
                type: 'minor',
                typeName: suit.name,
                fullName: card.name
            });
        });
    });
    
    return allCards;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ========================================
// CARD DISPLAY FUNCTIONS
// ========================================

function createCardElement(card, isFlipped = false, showMeaning = false) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `tarot-card ${isFlipped ? 'flipped' : ''}`;
    
    cardDiv.innerHTML = `
        <div class="card-inner">
            <div class="card-back"></div>
            <div class="card-front">
                <span class="card-number">${card.number !== undefined ? card.number : ''}</span>
                <span class="card-image">${card.image}</span>
                <span class="card-name">${card.name}</span>
            </div>
        </div>
    `;
    
    if (showMeaning) {
        cardDiv.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }
    
    return cardDiv;
}

function displaySpread(cards) {
    elements.spreadContainer.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = createCardElement(card, false, true);
        elements.spreadContainer.appendChild(cardElement);
        
        // Animate cards appearing
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function displayReading(cards, spreadType) {
    const positions = spreadPositions[spreadType];
    let html = '<h2>📖 Tu Lectura</h2>';
    
    cards.forEach((card, index) => {
        const pos = positions[index];
        html += `
            <div class="card-meaning">
                <span class="meaning-label">${pos.position}</span>
                <h3 class="meaning-card-name">${card.image} ${card.name}</h3>
                <p class="meaning-description">${card.meaning}</p>
            </div>
        `;
    });
    
    elements.readingResult.innerHTML = html;
}

function displayAllCards(filter = 'all') {
    const allCards = getAllCards();
    let filteredCards = allCards;
    
    if (filter === 'major') {
        filteredCards = allCards.filter(card => card.type === 'major');
    } else if (filter === 'minor') {
        filteredCards = allCards.filter(card => card.type === 'minor');
    }
    
    elements.cardsGrid.innerHTML = '';
    
    filteredCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'mini-card';
        cardDiv.innerHTML = `
            <div class="card-image">${card.image}</div>
            <div class="card-name">${card.name}</div>
            <div class="card-type">${card.typeName}</div>
        `;
        elements.cardsGrid.appendChild(cardDiv);
    });
}

// ========================================
// EVENT HANDLERS
// ========================================

// Tab Navigation
elements.tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Update active tab button
        elements.tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding content
        elements.tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
        
        // Load cards if on cards tab
        if (tabId === 'cards') {
            displayAllCards();
        }
    });
});

// Spread Selection
elements.spreadBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        elements.spreadBtns.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        
        state.selectedSpread = this.dataset.spread;
        state.drawnCards = [];
        state.isShuffled = false;
        
        elements.spreadContainer.innerHTML = '<p style="color: var(--text-muted);">Baraja las cartas para comenzar tu lectura</p>';
        elements.readingResult.innerHTML = '';
        elements.drawBtn.disabled = true;
    });
});

// Shuffle Button
elements.shuffleBtn.addEventListener('click', function() {
    if (!state.selectedSpread) {
        alert('Por favor selecciona una tirada primero');
        return;
    }
    
    const allCards = getAllCards();
    state.drawnCards = shuffleArray(allCards);
    state.isShuffled = true;
    
    elements.drawBtn.disabled = false;
    elements.readingResult.innerHTML = '';
});

// Draw Button
elements.drawBtn.addEventListener('click', function() {
    if (!state.selectedSpread || !state.isShuffled) return;
    
    const numCards = state.selectedSpread === 'three' ? 3 : 
                     state.selectedSpread === 'five' ? 5 : 10;
    
    const drawnCards = state.drawnCards.slice(0, numCards);
    
    displaySpread(drawnCards);
    displayReading(drawnCards, state.selectedSpread);
    
    // Flip cards one by one
    const cardElements = elements.spreadContainer.querySelectorAll('.tarot-card');
    cardElements.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipped');
        }, (index + 1) * 500);
    });
    
    elements.drawBtn.disabled = true;
});

// Reset Button
elements.resetBtn.addEventListener('click', function() {
    state = {
        selectedSpread: null,
        drawnCards: [],
        isShuffled: false
    };
    
    elements.spreadBtns.forEach(b => b.classList.remove('selected'));
    elements.spreadContainer.innerHTML = '';
    elements.readingResult.innerHTML = '';
    elements.drawBtn.disabled = true;
});

// Filter Buttons
elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        displayAllCards(filter);
    });
});

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔮 Tarot Mystic loaded successfully!');
});
