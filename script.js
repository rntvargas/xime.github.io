// Variables globales
let musicPlaying = false;
let quoteIndex = 0;
let friendshipLevel = 0;
let tiktokPlayerVisible = false;
const quotes = document.querySelectorAll(".quote");

// Datos personalizados para Ximena y Ren
const personalizedData = {
    names: {
        from: "Ren",
        to: "Ximena"
    },
    memories: {
        1: {
            title: "Nuestros Recuerdos Especiales",
            content: `
                <h3>📸 Momentos Inolvidables</h3>
                <p>Cada momento contigo, Ximena, se convierte en un recuerdo precioso que guardo en mi corazón.</p>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(45deg, #ff6b6b, #feca57); border-radius: 15px; color: white;">
                    <p><strong>💫 Recuerdo favorito:</strong> Todas las veces que hemos reído juntos hasta que nos dolía el estómago.</p>
                </div>
                <p>Tu risa es la melodía más hermosa que conozco, Ximena. 🎵</p>
            `
        },
        2: {
            title: "Nuestras Aventuras Juntos",
            content: `
                <h3>🎈 Aventuras de Ren y Ximena</h3>
                <p>Cada día contigo es una nueva aventura, llena de sorpresas y momentos únicos.</p>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 15px; color: white;">
                    <p><strong>🌟 Próxima aventura:</strong> ¡Crear más recuerdos increíbles juntos!</p>
                </div>
                <p>Contigo, Ximena, hasta lo ordinario se vuelve extraordinario. ✨</p>
            `
        },
        3: {
            title: "Nuestros Sueños y Metas",
            content: `
                <h3>⭐ Sueños Compartidos</h3>
                <p>Aunque no seamos novios, Ximena, compartimos sueños y metas que nos unen como amigos especiales.</p>
                <div style="margin: 20px 0; padding: 20px; background: linear-gradient(45deg, #ff9ff3, #54a0ff); border-radius: 15px; color: white;">
                    <p><strong>🎯 Nuestro sueño:</strong> Seguir siendo amigos incondicionales para siempre.</p>
                </div>
                <p>Tu amistad, Ximena, es el regalo más valioso que tengo. 💝</p>
            `
        }
    },
    surprises: [
        "🎉 ¡Ximena, eres increíble tal como eres!",
        "✨ Tu sonrisa ilumina mi día, Ximena",
        "🌟 Ren y Ximena: la dupla perfecta de amigos",
        "💫 Gracias por ser tan especial, Ximena",
        "🦋 Tu amistad es mi tesoro más preciado",
        "🌈 Contigo, Ximena, cada día es de colores",
        "💖 No necesito que seas mi novia para valorarte infinitamente"
    ]
};

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    console.log(`💖 Página especial cargada para ${personalizedData.names.to} de parte de ${personalizedData.names.from}! 🎉`);
    
    // Inicializar componentes
    initializeComponents();
    
    // Efectos de entrada
    addEntranceEffects();
    
    // Configurar eventos
    setupEventListeners();
    
    // Mostrar mensaje de bienvenida personalizado
    setTimeout(() => {
        showWelcomeMessage();
    }, 2000);
});

// Función para mostrar/ocultar el reproductor de TikTok
function toggleTikTokPlayer() {
    const musicPlayer = document.getElementById("musicPlayer");
    const toggleBtn = document.querySelector(".music-toggle-btn");

    if (!tiktokPlayerVisible) {
        // Mostrar reproductor
        musicPlayer.style.display = "block";
        musicPlayer.classList.add("show");
        tiktokPlayerVisible = true;

        // Actualizar botón
        toggleBtn.innerHTML = 
            '<span class="music-icon">🎵</span><span class="music-text">Ocultar Música</span>';
        toggleBtn.style.background = 
            "linear-gradient(45deg, #ff6b6b, #ff9ff3)";

        showNotification("🎵 ¡Reproductor de música activado para Ximena!");

        // Scroll suave hacia el reproductor
        setTimeout(() => {
            musicPlayer.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 300);
    } else {
        // Ocultar reproductor
        musicPlayer.classList.remove("show");
        setTimeout(() => {
            musicPlayer.style.display = "none";
        }, 300);
        tiktokPlayerVisible = false;

        // Restaurar botón
        toggleBtn.innerHTML = 
            '<span class="music-icon">🎵</span><span class="btn-text">Mostrar Música</span>';
        toggleBtn.style.background = '';

        showNotification("🔇 Reproductor de música oculto");
    }
}

// Función de música mejorada (ahora controla el reproductor de TikTok)
function toggleMusic() {
    const btn = document.querySelector(".music-btn");

    if (!musicPlaying) {
        // Activar música y mostrar reproductor
        btn.innerHTML = 
            '<span class="btn-icon">🔇</span><span class="btn-text">Pausar</span>';
        btn.style.background = "linear-gradient(45deg, #ff6b6b, #ff9ff3)";
        musicPlaying = true;

        // Mostrar reproductor de TikTok si no está visible
        if (!tiktokPlayerVisible) {
            toggleTikTokPlayer();
        }

        startMusicVisualization();
        showNotification(`🎵 ¡Música activada para ${personalizedData.names.to}!`);
        createMusicWaves();
    } else {
        // Pausar música
        btn.innerHTML = 
            '<span class="btn-icon">🎵</span><span class="btn-text">Música</span>';
        btn.style.background = '';
        musicPlaying = false;

        stopMusicVisualization();
        showNotification("🔇 Música pausada");
        removeMusicWaves();
    }
}

// Inicializar todos los componentes
function initializeComponents() {
    startQuoteRotation();
    animateFriendshipMeter();
    createDynamicSparkles();
    setupKeyboardShortcuts();
}

// Función de celebración mejorada
function celebrar() {
    console.log(`🎉 ${personalizedData.names.to} está celebrando!`);
    
    // Efectos múltiples
    createAdvancedConfetti();
    triggerCelebrationAnimation();
    playHapticFeedback();
    showCelebrationMessage();
    
    // Actualizar botón temporalmente
    const btn = document.querySelector('.celebration-btn');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<span class="btn-icon">🎊</span><span class="btn-text">¡Celebrando!</span>';
    btn.style.transform = 'scale(1.1)';
    btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff9ff3)';
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.style.transform = '';
        btn.style.background = '';
    }, 3000);
    
    // Incrementar nivel de amistad
    increaseFriendshipLevel();
}

// Crear confetti avanzado
function createAdvancedConfetti() {
    const colors = ['#ff6b6b', '#667eea', '#feca57', '#ff9ff3', '#54a0ff', '#764ba2'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Forma aleatoria
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'square') {
                confetti.style.borderRadius = '0';
            } else if (shape === 'triangle') {
                confetti.style.borderRadius = '0';
                confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            }
            
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 6000);
        }, i * 30);
    }
}

// Animación de celebración
function triggerCelebrationAnimation() {
    const content = document.querySelector('.content');
    content.style.animation = 'celebration 1.5s ease-in-out';
    
    setTimeout(() => {
        content.style.animation = '';
    }, 1500);
}

// Mostrar mensaje de celebración personalizado
function showCelebrationMessage() {
    const messages = [
        `🎉 ¡${personalizedData.names.to}, eres fantástica!`,
        `✨ ${personalizedData.names.from} celebra tu amistad, ${personalizedData.names.to}!`,
        `🌟 ¡Viva la amistad de ${personalizedData.names.from} y ${personalizedData.names.to}!`,
        `💖 ¡${personalizedData.names.to}, tu amistad es un regalo!`
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showFloatingMessage(randomMessage, 'celebration');
}

// Función de música mejorada
function toggleMusic() {
    const btn = document.querySelector('.music-btn');
    
    if (!musicPlaying) {
        btn.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-text">Pausar</span>';
        btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff9ff3)';
        musicPlaying = true;
        
        startMusicVisualization();
        showNotification(`🎵 ¡Música activada para ${personalizedData.names.to}!`);
        
        // Crear ondas musicales
        createMusicWaves();
    } else {
        btn.innerHTML = '<span class="btn-icon">🎵</span><span class="btn-text">Música</span>';
        btn.style.background = '';
        musicPlaying = false;
        
        stopMusicVisualization();
        showNotification('🔇 Música pausada');
        removeMusicWaves();
    }
}

// Crear ondas musicales visuales
function createMusicWaves() {
    const waves = document.createElement('div');
    waves.className = 'music-waves';
    waves.innerHTML = `
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    `;
    document.body.appendChild(waves);
}

function removeMusicWaves() {
    const waves = document.querySelector('.music-waves');
    if (waves) waves.remove();
}

// Nueva función de sorpresa
function sorpresa() {
    console.log(`🎁 Sorpresa especial para ${personalizedData.names.to}!`);
    
    const surprise = personalizedData.surprises[Math.floor(Math.random() * personalizedData.surprises.length)];
    
    // Crear efecto de sorpresa
    createSurpriseEffect();
    showFloatingMessage(surprise, 'surprise');
    
    // Cambiar botón temporalmente
    const btn = document.querySelector('.surprise-btn');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<span class="btn-icon">🎊</span><span class="btn-text">¡Sorpresa!</span>';
    
    setTimeout(() => {
        btn.innerHTML = originalContent;
    }, 2000);
    
    // Incrementar nivel de amistad
    increaseFriendshipLevel();
}

// Crear efecto de sorpresa
function createSurpriseEffect() {
    const surpriseElements = ['🎁', '🎊', '🎉', '✨', '💫', '🌟'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.textContent = surpriseElements[Math.floor(Math.random() * surpriseElements.length)];
            element.style.cssText = `
                position: fixed;
                font-size: 2rem;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: surpriseFloat 3s ease-out forwards;
            `;
            document.body.appendChild(element);
            
            setTimeout(() => element.remove(), 3000);
        }, i * 100);
    }
}

// Mostrar recuerdos en modal
function showMemory(memoryId) {
    const modal = document.getElementById('memoryModal');
    const modalBody = document.getElementById('modalBody');
    const memory = personalizedData.memories[memoryId];
    
    modalBody.innerHTML = memory.content;
    modal.style.display = 'block';
    
    // Efecto de entrada
    setTimeout(() => {
        modal.querySelector('.modal-content').style.animation = 'modalSlideIn 0.3s ease-out';
    }, 10);
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('memoryModal');
    modal.style.display = 'none';
}

// Animar medidor de amistad
function animateFriendshipMeter() {
    const meter = document.getElementById('friendshipMeter');
    if (meter) {
        meter.style.width = '100%';
    }
}

// Incrementar nivel de amistad
function increaseFriendshipLevel() {
    friendshipLevel = Math.min(friendshipLevel + 10, 100);
    
    if (friendshipLevel >= 100) {
        showFloatingMessage('🌟 ¡Nivel de amistad: INFINITO! ∞', 'achievement');
    }
}

// Mostrar mensaje flotante personalizable
function showFloatingMessage(message, type = 'default') {
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    
    let bgGradient = 'linear-gradient(45deg, #667eea, #764ba2)';
    if (type === 'celebration') bgGradient = 'linear-gradient(45deg, #ff6b6b, #feca57)';
    if (type === 'surprise') bgGradient = 'linear-gradient(45deg, #ff9ff3, #54a0ff)';
    if (type === 'achievement') bgGradient = 'linear-gradient(45deg, #feca57, #ff6b6b)';
    
    messageEl.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${bgGradient};
        color: white;
        padding: 25px 45px;
        border-radius: 50px;
        font-size: 1.4rem;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        animation: messagePopIn 0.5s ease-out;
        text-align: center;
        max-width: 80vw;
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.animation = 'messagePopOut 0.5s ease-in forwards';
        setTimeout(() => messageEl.remove(), 500);
    }, 3000);
}

// Mostrar notificación mejorada
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 20px 30px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.5s ease-out;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Rotación de frases mejorada
function startQuoteRotation() {
    if (quotes.length === 0) return;
    
    setInterval(() => {
        quotes[quoteIndex].classList.remove('active');
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quotes[quoteIndex].classList.add('active');
    }, 5000);
}

// Crear chispas dinámicas
function createDynamicSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            font-size: 1rem;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: sparkleFloat 4s ease-out forwards;
            opacity: 0.7;
        `;
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 4000);
    }, 2000);
}

// Configurar atajos de teclado
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        switch(e.key.toLowerCase()) {
            case ' ':
            case 'enter':
                e.preventDefault();
                celebrar();
                break;
            case 'm':
                toggleMusic();
                break;
            case 's':
                sorpresa();
                break;
            case 'escape':
                closeModal();
                stopMusicVisualization();
                break;
        }
    });
}

// Efectos de entrada mejorados
function addEntranceEffects() {
    const floatItems = document.querySelectorAll('.float-item');
    floatItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animationPlayState = 'running';
        }, index * 200);
    });
}

// Configurar eventos adicionales
function setupEventListeners() {
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('memoryModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Efectos hover mejorados
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('float-item')) {
            e.target.style.transform = 'scale(1.5) rotate(360deg)';
            e.target.style.transition = 'transform 0.3s ease';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('float-item')) {
            e.target.style.transform = '';
        }
    });
}

// Mostrar mensaje de bienvenida personalizado
function showWelcomeMessage() {
    const welcomeMsg = `¡Hola ${personalizedData.names.to}! 💖 Esta página especial fue creada con mucho cariño por ${personalizedData.names.from}. ¡Disfrútala!`;
    showFloatingMessage(welcomeMsg, 'celebration');
}

// Funciones de visualización musical
function startMusicVisualization() {
    const content = document.querySelector('.content');
    content.style.animation = 'musicPulse 2s ease-in-out infinite';
}

function stopMusicVisualization() {
    const content = document.querySelector('.content');
    content.style.animation = '';
}

// Vibración háptica
function playHapticFeedback() {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
}

// Añadir estilos CSS dinámicos para nuevas animaciones
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes celebration {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.05) rotate(2deg); }
        50% { transform: scale(1.1) rotate(-2deg); }
        75% { transform: scale(1.05) rotate(1deg); }
    }
    
    @keyframes messagePopIn {
        0% { transform: translate(-50%, -50%) scale(0) rotate(180deg); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
    }
    
    @keyframes messagePopOut {
        0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0) rotate(-180deg); opacity: 0; }
    }
    
    @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes musicPulse {
        0%, 100% { transform: scale(1); filter: hue-rotate(0deg); }
        50% { transform: scale(1.02); filter: hue-rotate(90deg); }
    }
    
    @keyframes sparkleFloat {
        0% { opacity: 0; transform: translateY(0) scale(0); }
        50% { opacity: 1; transform: translateY(-20px) scale(1); }
        100% { opacity: 0; transform: translateY(-40px) scale(0); }
    }
    
    @keyframes surpriseFloat {
        0% { opacity: 1; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(2) rotate(360deg); }
    }
    
    .music-waves {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 5px;
        z-index: 1000;
    }
    
    .wave {
        width: 4px;
        height: 20px;
        background: linear-gradient(45deg, #ff6b6b, #feca57);
        border-radius: 2px;
        animation: waveAnimation 1s ease-in-out infinite;
    }
    
    .wave:nth-child(2) { animation-delay: 0.1s; }
    .wave:nth-child(3) { animation-delay: 0.2s; }
    .wave:nth-child(4) { animation-delay: 0.3s; }
    .wave:nth-child(5) { animation-delay: 0.4s; }
    
    @keyframes waveAnimation {
        0%, 100% { height: 20px; }
        50% { height: 40px; }
    }
`;
document.head.appendChild(dynamicStyles);

// Mensaje de consola personalizado
console.log(`
🎉 ¡Página especial cargada para ${personalizedData.names.to}! 🎉
💖 Creada con amor por ${personalizedData.names.from}
✨ Controles disponibles:
   - Espacio/Enter: Celebrar
   - M: Alternar música
   - S: Sorpresa especial
   - Escape: Cerrar modal/resetear
🌟 ¡Disfruta tu día especial, ${personalizedData.names.to}! 🌟
`);

// Exportar funciones para uso global
window.celebrar = celebrar;
window.toggleMusic = toggleMusic;
window.sorpresa = sorpresa;
window.showMemory = showMemory;
window.closeModal = closeModal;
window.toggleYouTubePlayer = toggleYouTubePlayer;

