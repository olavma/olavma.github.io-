/// Script perteneciente a todo lo relacionado con anime y !anime

// Codigo Konami
const codigoKonami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

// Define una variable para rastrear la posición actual del usuario en la secuencia
let posicion = 0;

// Agrega un controlador de eventos de teclado para detectar la secuencia del código Konami
document.addEventListener("keydown", function(event) {
    // Obtiene la tecla presionada
    const tecla = event.key;

    // Verifica si la tecla presionada coincide con la posición actual en la secuencia
    if (tecla === codigoKonami[posicion]) {
        // Avanza a la siguiente posición en la secuencia
        posicion++;

        // Verifica si el usuario ha completado la secuencia del código Konami
        if (posicion === codigoKonami.length) {
            // Ejecuta la acción del código Konami aquí
            ChangePage();

            // Reinicia la posición del usuario en la secuencia
            posicion = 0;
        }
    } else {
        // Si la tecla presionada no coincide con la posición actual en la secuencia, reinicia la posición del usuario
        posicion = 0;
    }
});

function ChangePage() {
    var nombreArchivo = window.location.pathname;
    console.log(nombreArchivo);

    if(nombreArchivo.endsWith("/")) window.location.href = "otherwebs";
    if(nombreArchivo.endsWith("/curriculum-vitae")) window.location.href = "otherwebs";
    if(nombreArchivo.endsWith("/proyectos")) window.location.href = "otherwebs";
    else{
        nombreArchivo = nombreArchivo.split("/");
        if(nombreArchivo[1] == "projects") window.location.href = "../otherwebs";
    }
}