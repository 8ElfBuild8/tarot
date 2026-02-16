/* ========================================
   TAROT MYSTIC - JavaScript
   ======================================== */

// ========================================
// TAROT CARDS DATA - All 78 Cards
// ========================================

const tarotCards = {
    // Major Arcana (22 cards)
    major: [
        { number: 0, name: "El Soñador", image: "🃏", meaning: "Nuevos comienzo, espontaneidad, libertad, aventura, riesgo, confianza en el universo.", reversed: "Irresponsabilidad, tomar riesgos sin pensar, seguir impulse." },
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
        { number: 11, name: "La Templanza", image: "🏺", meaning: "Equilibrio, paciencia, moderación, sanación, propósito, armonía.", reversed: "Desequilibrio, excesos, impaciencia, conflicto interno." },
        { number: 12, name: "El Sol", image: "☀️", meaning: "Alegría, éxito, vitalidad, claridad, verdad, abundancia, energía positiva.", reversed: "Tristeza temporal, claridad temporalmente perdida, preocupaciones pasajeras." },
        { number: 13, name: "La Estrella", image: "⭐", meaning: "Esperanza, fe, renovación, inspiración, paz, guía espiritual, serenidad.", reversed: "Desesperanza, duda, pérdida de fe, momentos difíciles." },
        { number: 14, name: "La Luna", image: "🌙", meaning: "Ilusión, intuición, emociones, subconsciente, sueños, misterio.", reversed: "Liberación de miedos, superar ilusiones, verdad." },
        { number: 15, name: "El Alba", image: "🌅", meaning: "Renacimiento diario: claridad renovada, esperanza y energía para un nuevo comienzo.", reversed: "Pausa antes del nuevo comienzo; toma tiempo para recargar." },
        { number: 16, name: "La Torre", image: "🗼", meaning: "Cambio súbito, revelación, caos, liberación forzada, despertar.", reversed: "Miedo al cambio, evitar disaster, lento despertar." },
        { number: 17, name: "El Despertar", image: "🌟", meaning: "Renacimiento, despertar, llamado interior, perdón, redención y transformación consciente.", reversed: "Auto-duda, juicio interno, evitar el llamado." },
        { number: 18, name: "El Mundo", image: "🌍", meaning: "Completitud, logro, recompensa, integración, nuevo comienzo.", reversed: "Incompletitud, cierre no alcanzado, esperar." },
        { number: 19, name: "El Viajero", image: "🧭", meaning: "Viaje, curiosidad y nuevos comienzos; abrirse a la experiencia con confianza.", reversed: "Actuar sin dirección, falta de reflexión." },
        { number: 11, name: "Equilibrio", image: "☮️", meaning: "Equilibrio justo, claridad y resolución constructiva; resultados que restauran el orden.", reversed: "Aprendizaje de decisiones, restauración del equilibrio, verdades reveladas." },
        { number: 12, name: "Nueva Perspectiva", image: "🔭", meaning: "Nueva perspectiva, pausa consciente y entrega que trae iluminación y crecimiento.", reversed: "Despertar, liberación, ver la situación desde otra óptica positiva." },
        { number: 13, name: "Transformación", image: "🦋", meaning: "Transformación profunda: cierre necesario que permite renacer y comenzar de nuevo con esperanza.", reversed: "Renacimiento, liberación, cambio positivo y oportunidades renovadas." }
    ],

    // Minor Arcana - Wands (Exito)
    wands: [
        { name: "Uno de Exito", image: "🔥", meaning: "Inspiración, nuevos oportunidad, crecimiento, creatividad, pasión.", reversed: "Bloqueo creativo, retrasos, falta de motivación." },
        { name: "Dos de Exito", image: "💪", meaning: "Planificación, decisiones, apertura a nuevas oportunidades.", reversed: "Miedo a lo desconocido, planificación deficiente." },
        { name: "Tres de Exito", image: "🚢", meaning: "Esperanza, anticipación, visión de futuro, progreso.", reversed: "Obstáculos, retrasos, expectativas no cumplidas." },
        { name: "Cuatro de Exito", image: "🎉", meaning: "Celebración, armonía, paz, victoria, reunión familiar.", reversed: "Falta de armonía, celebración prematura." },
        { name: "Cinco de Exito", image: "⚔️", meaning: "Conflicto, competencia, desafíos, desacuerdo, tensión.", reversed: "Evitar conflicto, encontrar paz." },
        { name: "Seis de Exito", image: "🏆", meaning: "Victoria, reconocimiento, éxito, superación de desafíos.", reversed: "Arrogancia, victorexia, falta de reconocimiento." },
        { name: "Siete de Exito", image: "🛡️", meaning: "Defensa, persistencia, determinación, protección de logros.", reversed: "Agotamiento, rendición, abrumado." },
        { name: "Ocho de Exito", image: "🏹", meaning: "Rapidez, movimiento, progreso rápido, mensajes, viajes.", reversed: "Esperas, frustraciones, retrasos." },
        { name: "Nueve de Exito", image: "🏰", meaning: "Resistencia, perseverancia, fuerza interior, casi logrando.", reversed: "Agotamiento, rendición, pesimismo." },
        { name: "Diez de Éxito", image: "🎯", meaning: "Culminación de esfuerzos, logros alcanzados, éxito completo, realización de metas." }
    ],

    // Minor Arcana - Cups (Copas)
    cups: [
        { name: "Uno de Cuarzo", image: "💧", meaning: "Amor nuevo, emociones, intuición, conexión espiritual, creatividad.", reversed: "Emociones bloqueadas, vacío emocional." },
        { name: "Dos de Cuarzo", image: "💑", meaning: "Asociación, relación, atracción, amor, compromiso mutuo.", reversed: "Desequilibrio, relación rota, uno dando más." },
        { name: "Tres de Cuarzo", image: "🥂", meaning: "Celebración, amistad, comunidad, alegría, reuniones.", reversed: "Aislamiento, exceso, soledad." },
        { name: "Cuarto de Cuarzo", image: "🥂", meaning: "Celebración, amistad y alegría compartida; apertura a nuevas conexiones.", reversed: "Gratitud y celebración compartida; oportunidades sociales." },
        { name: "Cinco de Cuarzo", image: "🧘", meaning: "Recuerdos afectuosos, sanación emocional y reconexión con la inocencia.", reversed: "Sanación del pasado; encuentro con apoyo y cariño." },
        { name: "Seis de Cuarzo", image: "🍼", meaning: "Nostalgia transformadora: recuerdos que nutren y enseñan, invitando a sanar.", reversed: "Sanación activa, reconexión y gratitud." },
        { name: "Siete de Cuarzo", image: "✨", meaning: "Ilusión, fantası́a, elecciones, sueños.", reversed: "Claridad, desiliusión, tomar decisiones." },
        { name: "Ocho de Cuarzo", image: "🌊", meaning: "Comienzo, búsqueda, camino, búsqueda de propósito.", reversed: "Miedo a التغيير, clingando al pasado." },
        { name: "Nueve de Cuarzo", image: "🏆", meaning: "Satisfacción, realización, deseo cumplido,contentamiento.", reversed: "Insatisfacción, ambicioso sin límites." },
        { name: "Diez de Cuarzo", image: "👨‍👩‍👧", meaning: "Armonía familiar, felicidad, romance, comunidad, paz.", reversed: "Familia dissociada, conflictos domésticos." }
    ],

    // Minor Arcana - Swords (Espadas)
    swords: [
        { name: "Uno de Serenidad", image: "🔎", meaning: "Verdad, claridad, nuevo idea, pensamiento claro, corte.", reversed: "Confusión, brutalidad, pensamiento oscuro." },
        { name: "Dos de Serenidad", image: "🤝", meaning: "Decisión con claridad y diálogo; encontrar equilibrio mediante comunicación constructiva.", reversed: "Nueva información, aceptación y resolución que permite avanzar." },
        { name: "Tres de Serenidad", image: "🌿", meaning: "Sanación, aprendizaje; crecimiento.", reversed: "Proceso de curación activo, perdón y renovación." },
        { name: "Cuatro de Serenidad", image: "🧘", meaning: "Descanso, recuperación, meditación, pausa, serenidad.", reversed: "Inquietud, agotamiento, no poder descansar." },
        { name: "Cinco de Serenidad", image: "🕊️", meaning: "Amistad, victoria, aprecio, entendimiento.", reversed: "Perdón, hacer las paces, dejar ir." },
        { name: "Seis de Serenidad", image: "⚵", meaning: "Transición, viaje, moving on, dejar atrás problemas.", reversed: "Atascado, resistencia al cambio." },
        { name: "Siete de Serenidad", image: "🔍", meaning: "Union, estrategia, ideas, rapidez, planificar.", reversed: "Confesar, revelar secretos, culpa." },
        { name: "Ocho de Serenidad", image: "🕊️", meaning: "Superación, libertad de pensamiento y nueva perspectiva.", reversed: "Liberación, romper cadenas, nueva perspectiva." },
        { name: "Nueve de Serenidad", image: "🌙", meaning: "Superación: descanso, claridad y paz interior. Procesos de sanación y renovación.", reversed: "Esperanza renovada, recuperación y nueva perspectiva." },
        { name: "Diez de Serenidad", image: "👫", meaning: "Victoria, alegria, colaboracion, comienzo, creacion.", reversed: "Renacimiento, recuperación, empezar de nuevo." }
    ],

    // Minor Arcana - Pentacles (Oros)
    pentacles: [
        { name: "Uno de Oros", image: "💰", meaning: "Nueva oportunidad, prosperidad, abundancia, nuevo comienzo material.", reversed: "Oportunidad perdida, финансовые problemas." },
        { name: "Dos de Oros", image: "🪙", meaning: "Equilibrio, adaptación, prioridades, múltiples responsabilidades.", reversed: "Desequilibrio, desorganización, abrumado." },
        { name: "Tres de Oros", image: "🏛️", meaning: "Trabajo en equipo, colaboración, maestría, artesanía.", reversed: "Falta de teamwork, trabajando solo, плохой результат." },
        { name: "Cuatro de Oros", image: "🤑", meaning: "Conservación, tranquilidad, crecimiento, compartir, amabilidad.", reversed: "Generosidad, soltar control, compartir." },
        { name: "Cinco de Oros", image: "🏠", meaning: "Abundancia, riqueza, trabajo en equipo, inversion.", reversed: "Recuperación, comunidad, ayuda disponible." },
        { name: "Seis de Oros", image: "🤝", meaning: "Generosidad, caridad, compartir, abundancia, karma.", reversed: "Deudas, dependencia, egoísmo." },
        { name: "Siete de Oros", image: "🌱", meaning: "Paciencia, recompensa diferida, inversión, crecimiento gradual.", reversed: "Impaciencia, falta de recompensa, inversión pobre." },
        { name: "Ocho de Oros", image: "🔨", meaning: "Dedicación, maestría, habilidad, progreso, calidad.", reversed: "Falta de enfoque, habilidad no desarrollada." },
        { name: "Nueve de Oros", image: "🍇", meaning: "Independencia, autosuficiencia, recompensa por esfuerzo, logro.", reversed: "Dependencia, inseparidad, seguridad material." },
        { name: "Diez de Oros", image: "🏰", meaning: "Herencia, riqueza familiar, tradición, éxito a largo plazo.", reversed: "Conflicto familiar, финансовые perdidas." }
    ]
};

// Sanitize tarotCards: remove `reversed` properties and replace negative words
function sanitizeCards() {
    const map = {
        'dolor': 'sanación',
        'pérdida': 'renovación',
        'miedo': 'valor',
        'ansiedad': 'calma',
        'ansiedades': 'calma',
        'conflicto': 'resolución',
        'conflictos': 'resolución',
        'tristeza': 'esperanza',
        'pobreza': 'oportunidad',
        'dificultad': 'aprendizaje',
        'dificultades': 'aprendizaje',
        'irresponsabilidad': 'responsabilidad',
        'arrogancia': 'humildad',
        'agresión': 'compasión',
        'tiranía': 'justicia',
        'fragilidad': 'fortaleza',
        'aislamiento': 'conexión',
        'mala suerte': 'oportunidad',
        'depresión': 'apoyo',
        'traición': 'aprendizaje',
        'culpa': 'perdón',
        'agotamiento': 'renovación',
        'desesperanza': 'esperanza',
        'soledad': 'compañía',
        'abandono': 'apoyo',
        'rechazo': 'aceptación',
        'victoria a costa': 'victoria justa'
    };

    const keys = Object.keys(map);

    function replaceText(s) {
        if (!s || typeof s !== 'string') return s;
        let out = s;
        keys.forEach(k => {
            out = out.replace(new RegExp('\\b' + k + '\\b', 'gi'), map[k]);
        });
        return out;
    }

    ['major', 'wands', 'cups', 'swords', 'pentacles'].forEach(group => {
        if (!tarotCards[group]) return;
        tarotCards[group].forEach(card => {
            if (card.meaning) card.meaning = replaceText(card.meaning);
            if (card.reversed) delete card.reversed;
        });
    });
}

// Run sanitization at load
sanitizeCards();

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
        // sanitize meaning by removing common negative words/phrases
        const negRegex = /\b(dolor|p[eé]rdida|miedo|ansiedad|ansiedades|conflicto|conflictos|tristeza|pobreza|dificultad|dificultades|irresponsabilidad|arrogancia|agresi[oó]n|tiran[ií]a|fragilidad|aislamiento|mala suerte|depresi[oó]n|traici[oó]n|victoria a costa|desesperanza|culpa|agotamiento|rendici[oó]n|desilusi[oó]n|soledad|abandono|rechazo)\b/gi;
        let meaning = typeof card.meaning === 'string' ? card.meaning : '';
        meaning = meaning.replace(negRegex, '').replace(/\s+,\s+/g, ', ').replace(/\s{2,}/g, ' ').replace(/(^,\s*)|(\s*,\s*$)/g, '').trim();

        const cardClean = { ...card };
        if (cardClean.hasOwnProperty('reversed')) delete cardClean.reversed;
        cardClean.meaning = meaning || card.meaning;

        allCards.push({
            ...cardClean,
            type: 'major',
            typeName: 'Arcano Mayor',
            fullName: card.name
        });
    });
    
    // Add Minor Arcana
    const suits = [
        { key: 'wands', name: 'Exito' },
        { key: 'cups', name: 'Cuarzo' },
        { key: 'swords', name: 'Serenidad' },
        { key: 'pentacles', name: 'Oros' }
    ];
    
    suits.forEach(suit => {
        tarotCards[suit.key].forEach((card, index) => {
            const negRegex = /\b(dolor|p[eé]rdida|miedo|ansiedad|ansiedades|conflicto|conflictos|tristeza|pobreza|dificultad|dificultades|irresponsabilidad|arrogancia|agresi[oó]n|tiran[ií]a|fragilidad|aislamiento|mala suerte|depresi[oó]n|traici[oó]n|victoria a costa|desesperanza|culpa|agotamiento|rendici[oó]n|desilusi[oó]n|soledad|abandono|rechazo)\b/gi;
            let meaning = typeof card.meaning === 'string' ? card.meaning : '';
            meaning = meaning.replace(negRegex, '').replace(/\s+,\s+/g, ', ').replace(/\s{2,}/g, ' ').replace(/(^,\s*)|(\s*,\s*$)/g, '').trim();

            const cardClean = { ...card };
            if (cardClean.hasOwnProperty('reversed')) delete cardClean.reversed;
            cardClean.meaning = meaning || card.meaning;

            allCards.push({
                ...cardClean,
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

// Shuffle Button - Single Click to Shuffle & Draw
elements.shuffleBtn.addEventListener('click', function() {
    if (!state.selectedSpread) {
        alert('Por favor selecciona una tirada primero');
        return;
    }
    
    const allCards = getAllCards();
    state.drawnCards = shuffleArray(allCards);
    state.isShuffled = true;
    
    const numCards = state.selectedSpread === 'three' ? 3 : 
                     state.selectedSpread === 'five' ? 5 : 10;
    
    const drawnCards = state.drawnCards.slice(0, numCards);
    
    elements.readingResult.innerHTML = '';
    displaySpread(drawnCards);
    displayReading(drawnCards, state.selectedSpread);
    
    // Flip cards one by one
    const cardElements = elements.spreadContainer.querySelectorAll('.tarot-card');
    cardElements.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipped');
        }, (index + 1) * 500);
    });
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
    
    // Restaurar el botón de barajar al texto original
    elements.shuffleBtn.textContent = '🃏 Barajar';
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
    sanitizeCards();
    console.log('🔮 Tarot Mystic loaded successfully!');
});
