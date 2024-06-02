//form. de contacto web ciisa
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const tipoSolicitud = document.getElementById("tipo_solicitud");
    const mensaje = document.getElementById("mensaje");

    function validarFormulario(event) {
        event.preventDefault();
        if (!nombre.value.trim() || !email.value.trim() || !tipoSolicitud.value.trim() || !mensaje.value.trim()) {
            mostrarMensaje("Error: Todos los campos son obligatorios.", "error");
            return;
        }
        mostrarMensaje("Éxito: El formulario ha sido enviado correctamente.", "success");
    }

    function validarTexto() {
        const texto = mensaje.value.toLowerCase();
        if (texto.includes("compra")) {
            tipoSolicitud.value = "Compra";
        } else if (texto.includes("venta")) {
            tipoSolicitud.value = "Venta";
        }
    }

    function mostrarMensaje(texto, tipo) {
        const mensajeDiv = document.createElement("div");
        mensajeDiv.textContent = texto;
        mensajeDiv.className = tipo === "error" ? "alert alert-danger" : "alert alert-success";
        form.prepend(mensajeDiv);
        setTimeout(() => mensajeDiv.remove(), 5000);
    }

    function agregarEventos() {
        form.addEventListener("submit", validarFormulario);
        mensaje.addEventListener("input", validarTexto);
    }

    function inicializar() {
        agregarEventos();
    }

    inicializar();
});


const detalleModal = document.getElementById('detalleModal');
const modalBody = detalleModal.querySelector('.modal-body');
const cerrarModalBtnTop = detalleModal.querySelector('.modal-header .btn-close'); // Select the top close button
const cerrarModalBtnBottom = detalleModal.querySelector('.modal-footer .btn-close'); // Select the bottom close button
const imagenes = document.querySelectorAll('.photo-container img');

function abrirModalDetalle(imagen) {
    const idImagen = imagen.dataset.id;
    const srcImagen = imagen.src;
    const altImagen = imagen.alt;

    const contenidoModal = `
    <img src="${srcImagen}" alt="${altImagen}" class="img-fluid">
    <p style="color: black;">Descripción de la obra de arte: ${altImagen}</p>
  `;

    modalBody.innerHTML = contenidoModal;
    detalleModal.show();
}

// Add event listener to both close buttons
cerrarModalBtnTop.addEventListener('click', () => {
    detalleModal.parentNode.removeChild(detalleModal); // Remove modal from DOM
});

cerrarModalBtnBottom.addEventListener('click', () => {
    detalleModal.parentNode.removeChild(detalleModal); // Remove modal from DOM
});

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        abrirModalDetalle(imagen);
    });
});

function eliminarImagen(imagen) {
    const contenedorImagen = imagen.parentNode;
    contenedorImagen.parentNode.removeChild(contenedorImagen);
}

const botonesEliminar = document.querySelectorAll('.btn-danger');

botonesEliminar.forEach(boton => {
    boton.addEventListener('click', () => {
        const imagen = boton.parentNode.querySelector('img');
        eliminarImagen(imagen);
    });
});



