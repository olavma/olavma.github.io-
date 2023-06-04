// JS DE PROYECTO.HTML

// Obtener el valor del parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Realizar cambios en la página según el valor del ID
if (id) {
    // Hacer algo con el ID, como cargar contenido relacionado o mostrar información específica
    LoadInfo(id);
} else {
    // No se proporcionó ningún ID en la URL
    console.log('No se proporcionó ningún ID en la URL');
}

function LoadInfo(id) {
    var proyect = {};
    fetch('../proyectos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (element.IdProyecto == id) {
                    proyect = element;
                }
            });
            InfoProyect(proyect);
        })
        .catch(error => {
            console.error('Error al obtener el archivo', error);
        })
}

function InfoProyect(proyect) {
    // Nombre
    var title = document.getElementsByTagName("h4")[0];
    title.textContent = proyect.Nombre;

    // Portada
    var img = document.getElementsByTagName("img")[0];
    img.src = proyect.InfoGeneral.Foto;

    // Sinopsis
    var sinopsisArt = document.querySelector('.sinopsis');
    var sinopsisP = sinopsisArt.querySelector('p');
    sinopsisP.textContent = proyect.InfoGeneral.Descripcion;

    // Idiomas
    var lang = document.getElementById("idioma");
    lang.textContent = proyect.InfoGeneral.Idiomas;

    // Autor
    var author = document.getElementById("author");
    author.textContent = proyect.autor;

    // Boton
    var btn = document.querySelector('.btn3');
    btn.href = proyect.EnlaceProyecto;
}