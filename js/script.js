/*function ShowHide() {
    var container = document.getElementsByClassName("parr")[0];

    if (container.style.visibility == "hidden"){
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden";
    }
}*/


function ShowHide(id) {
    var elemento = document.getElementById(id); // Obtiene el elemento por su id

    var elemento1 = document.getElementById('parr1');
    var elemento2 = document.getElementById('parr2');
    var elemento3 = document.getElementById('parr3');
    
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block"; // Muestra el elemento
    } else {
        elemento.style.display = "none"; // Oculta el elemento
    }

};

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



document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos que actúan como triggers de modales
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    
    // Para cada trigger, añade los event listeners necesarios
    modalTriggers.forEach(trigger => {
        const modalId = trigger.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        
        if (!modal) return; // Si no existe el modal, salta este trigger
        
        // Elemento para cerrar dentro del modal (puede tener una clase común)
        const closeModal = modal.querySelector('.close-btn');
        
        // Abrir modal al hacer click en el trigger
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(modal);
        });
        
        // Cerrar el modal con el botón de cerrar
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                closeModalFn(modal);
            });
        }
        
        // Cerrar el modal al hacer click fuera del contenido
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFn(modal);
            }
        });
    });
    
    // Cerrar cualquier modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModalFn(modal);
            });
        }
    });
});

// Función para abrir un modal
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar un modal
function closeModalFn(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


//---------------------------------------------------------------------//

document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('transition-fade');
    
    window.addEventListener('beforeunload', function() {
      document.documentElement.classList.add('is-animating');
    });
});