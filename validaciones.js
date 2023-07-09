window.addEventListener('DOMContentLoaded', function() {
  // Obtener el formulario
  var formulario = document.querySelector('form');

  // Agregar el evento submit al formulario
  formulario.addEventListener('submit', function(event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Validar los campos del formulario
    if (validarCampos()) {
      // Si todos los campos son válidos, enviar el formulario
      formulario.submit();
    }
  });

  // Función para validar los campos del formulario
  function validarCampos() {
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');
    var valido = true;

    // Validar campo de nombre
    if (nombre.value.trim() === '') {
      mostrarError(nombre, 'Por favor, ingresa tu nombre');
      valido = false;
    } else {
      ocultarError(nombre);
    }

    // Validar campo de correo electrónico
    if (correo.value.trim() === '') {
      mostrarError(correo, 'Por favor, ingresa tu correo electrónico');
      valido = false;
    } else if (!validarCorreoElectronico(correo.value.trim())) {
      mostrarError(correo, 'Por favor, ingresa un correo electrónico válido');
      valido = false;
    } else {
      ocultarError(correo);
    }

    // Validar campo de mensaje
    if (mensaje.value.trim() === '') {
      mostrarError(mensaje, 'Por favor, ingresa tu mensaje');
      valido = false;
    } else {
      ocultarError(mensaje);
    }

    return valido;
  }

  // Función para validar el formato de correo electrónico
  function validarCorreoElectronico(correo) {
    var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
  }

  // Función para mostrar el mensaje de error
  function mostrarError(elemento, mensaje) {
    var error = elemento.nextElementSibling;
    error.textContent = mensaje;
    error.style.display = 'block';
  }

  // Función para ocultar el mensaje de error
  function ocultarError(elemento) {
    var error = elemento.nextElementSibling;
    error.style.display = 'none';
  }
});

document.getElementById('loginButton').addEventListener('click', function() {
  window.location.href = 'login/login.html';
});

// Obtener la lista de elementos <li> del submenú
const subMenuItems = document.querySelectorAll("nav ul li");

// Recorrer cada elemento y agregar los eventos correspondientes
subMenuItems.forEach((item) => {
  // Obtener la ventana flotante del elemento actual
  const subMenu = item.querySelector("ul");

  // Mostrar la ventana flotante al colocar el cursor sobre el elemento
  item.addEventListener("mouseover", () => {
    subMenu.style.visibility = "visible";
  });

  // Ocultar la ventana flotante al quitar el cursor del elemento
  item.addEventListener("mouseout", () => {
    subMenu.style.visibility = "hidden";
  });
});
