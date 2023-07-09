// cars.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import firebaseConfig from "../config.js";

// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtener referencia al servicio de autenticación
const auth = getAuth();

// Obtener referencia a los elementos del DOM
const userEmailElement = document.getElementById("userEmail");
const signOutButton = document.getElementById("signOutButton");

// Función para mostrar el correo electrónico del usuario
function displayUserEmail(user) {
  if (user) {
    userEmailElement.textContent = user.email;
    userEmailElement.style.display = "inline";
    signOutButton.style.display = "inline";
  } else {
    userEmailElement.textContent = "";
    userEmailElement.style.display = "none";
    signOutButton.style.display = "none";
  }
}

// Manejar el cambio de estado de autenticación
onAuthStateChanged(auth, (user) => {
  displayUserEmail(user);
});

// Manejar el clic del botón de cerrar sesión
signOutButton.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        // Redirigir al usuario a la página de inicio después de cerrar sesión
        window.location.href = "../index.html";
      })
      .catch((error) => {
        console.error(`Error al cerrar sesión: ${error.message}`);
      });
  });
  history.replaceState(null, "", "/index.html");
  