
function switchLang(lang) {
    const content = document.getElementById('content');
    if (lang === 'en') {
        content.innerHTML = '<h2>Welcome to Qerroo Bilisummaa</h2><p>This site is in English.</p>';
    } else {
        content.innerHTML = '<h2>Baga nagaan dhuftan!</h2><p>Kun seensa Afaan Oromo ti.</p>';
    }
}
