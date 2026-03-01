/**
 * Abre el modal especificado y bloquea el scroll del sitio.
 * Usamos 'flex' para asegurar el centrado del contenido.
 */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra el modal y restablece el scroll.
 */
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Redirige a Instagram en una pestaña nueva de forma segura.
 */
function irAInstagram() {
    const instagramURL = "https://www.instagram.com/purodropshipping?igsh=MWFhZzd1czQ5YzBncQ==";
    window.open(instagramURL, '_blank', 'noopener,noreferrer');
}

/**
 * Cierra el modal si el usuario hace clic fuera de la caja de contenido.
 */
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

/**
 * Accesibilidad: Cierra los modales al presionar la tecla Escape.
 */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});
