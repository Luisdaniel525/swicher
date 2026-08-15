// Funcionalidad para cambiar el tema
const themeSwitcher = document.getElementById('themeSwitcher');

themeSwitcher.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
});
