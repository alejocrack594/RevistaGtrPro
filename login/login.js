// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import firebaseConfig from "../config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener referencia al servicio de autenticación
const auth = getAuth();

// Obtener referencia a los elementos del formulario
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerButton = document.getElementById("registerButton");

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener el correo electrónico y contraseña del usuario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Iniciar sesión del usuario
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado
      const user = userCredential.user;
      // Redirigir al usuario a la página cars.html después del inicio de sesión
      window.location.href = "cars.html";
    })
    .catch((error) => {
      // Manejar errores
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Código de error: ${errorCode}`);
      console.error(`Mensaje de error: ${errorMessage}`);
      if (errorCode === "auth/user-not-found") {
        alert("No hay ningún registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.");
      } else {
        alert(`Error: ${errorMessage}`);
      }
    });
});

// Manejar el envío del formulario de registro
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener el correo electrónico y contraseña del usuario
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  // Crear un nuevo usuario
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario registrado
      const user = userCredential.user;
      // Redirigir al usuario a la página cars.html después del registro
      window.location.href = "cars.html";
    })
    .catch((error) => {
      // Manejar errores
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Código de error: ${errorCode}`);
      console.error(`Mensaje de error: ${errorMessage}`);
      if (errorCode === "auth/email-already-in-use") {
        alert("Este correo electrónico ya está en uso.");
      } else if (errorCode === "auth/weak-password") {
        alert("La contraseña es demasiado débil. Debe tener al menos 6 caracteres.");
      } else if (errorCode === "auth/invalid-email") {
        alert("El correo electrónico no es válido.");
      } else {
        alert(`Error: ${errorMessage}`);
      }
    });
});

// Manejar el clic del botón de registro
registerButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Ocultar el formulario de inicio de sesión y mostrar el formulario de registro
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("registerContainer").style.display = "block";
});
