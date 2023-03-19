function sourceCode() {
  prompt("Introduce el usuario admin");
  prompt("Introduce la contraseña");
  alert("No se ha encontrado ninguna coincidencia");
  prompt("Escriba la contraseña maestra");
  console.log("Enviando informacion del PC al creador...");
  console.log("Hackeo terminado con exito");
  // Eliminar todo el contenido del cuerpo
  document.body.innerHTML = "";

  // Crear un nuevo elemento de título y agregarlo al cuerpo
  var title = document.createElement("h1");
  var titleText = document.createTextNode("Has sido hackeado de broma");
  title.appendChild(titleText);
  document.body.appendChild(title);

  // Cambiar el color de fondo del cuerpo a rojo
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    alert("No ha pasado nada. Nada ha sido robado")
  }, 0.7);
}

function seeProyect() {
  const opcion = confirm("¿Desea ver Github o una página web?");

if (opcion) {
  // Si el usuario hizo clic en "Aceptar", abrimos una nueva ventana con la página de Github
  window.open("https://github.com/olavma");
} else {
  // Si el usuario hizo clic en "Cancelar", lo redirigimos a otra página web
  window.open("proyectos.html");
}


}