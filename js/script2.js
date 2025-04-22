let lastOpenedParagraph = null;

function toggleParagraph(id) {
    const paragraph = document.getElementById(`paragraph${id}`);

    if (lastOpenedParagraph && lastOpenedParagraph !== paragraph) {
        // Oculta el párrafo anterior y restaura su tamaño original
        lastOpenedParagraph.classList.remove('visible');
        lastOpenedParagraph.style.width = '0'; // Restaura el ancho
        lastOpenedParagraph.style.height = '0'; // Restaura el alto
    }

    // Muestra u oculta el párrafo actual
    if (paragraph.classList.contains('visible')) {
        paragraph.classList.remove('visible');
        paragraph.style.width = '0'; // Restaura el ancho
        paragraph.style.height = '0'; // Restaura el alto
    } else {
        paragraph.style.width = '900px'; // Cambia el ancho (ajusta según necesites)
        paragraph.style.height = 'auto'; // Cambia el alto (ajusta según necesites)
        paragraph.classList.add('visible');
    }

    lastOpenedParagraph = paragraph;
}