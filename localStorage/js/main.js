function guardarNombreYAbrirVentana() {
  // Obtener el valor del nombre ingresado por el usuario
  const nombre = document.getElementById("nombreInput").value;

  // Guardar el nombre en localStorage
  localStorage.setItem("nombre", nombre);

  // Abrir una nueva ventana con un mensaje personalizado
  const mensaje = `Hola ${nombre}! Bienvenido a nuestra página.`;
  const nuevaVentana = window.open("", "_blank", "width=400,height=300");

  // Escribir el mensaje en la nueva ventana
  nuevaVentana.document.write(`<h2>${mensaje}</h2>`);

  // Cerrar la ventana después de 5 segundos
  setTimeout(() => {
    nuevaVentana.close();
  }, 5000);
}

// Agregar un event listener al botón
document.addEventListener("DOMContentLoaded", function () {
  const abrirVentanaBtn = document.getElementById("abrirVentanaBtn");

  abrirVentanaBtn.addEventListener("click", function () {
    guardarNombreYAbrirVentana();
  });
});

guardarNombreYAbrirVentana();
