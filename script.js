// =========================================
// ARCHIVO JAVASCRIPT
// =========================================

// Función para comprar producto
function buyProduct(productName) {
    const currentLang = document.getElementById('language').value;
    const msg = currentLang === 'en' ? "You've added " + productName + " to your order!" :
    "¡Has agregado " + productName + " a tu pedido!";
    alert(msg);
}

// Elementos de los filtros
const languageSelect = document.getElementById('language');
const themeSelect = document.getElementById('theme');

// CAMBIO DE TEMA (Oscuro/Claro)
// Hacemos que también afecte a las tarjetas mediante CSS
themeSelect.addEventListener('change', function(event) {
    const selectedTheme = event.target.value;
    if (selectedTheme === 'Oscuro') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// CAMBIO DE IDIOMA AUTOMÁTICO
// No necesitas un nuevo HTML. Usamos "data attributes" en las etiquetas para guardar los textos.
languageSelect.addEventListener('change', function(event) {
    const lang = event.target.value;
    
    // Buscamos todos los elementos que tienen traducciones
    const translateElements = document.querySelectorAll('[data-en]');
    
    translateElements.forEach(el => {
        // Cambiamos el texto según el idioma seleccionado
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-es');
        }
    });
});
