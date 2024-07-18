window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('project-list');
    let url = '/projects.json';
    
    fetch(url)
        .then(response => response.json())
        .then(projects => {
            const idProj = document.getElementById('projId');
            
            projects.forEach(proj => {
                if(parseInt(idProj.textContent) === proj.id){
                    setInfo(proj);
                }
            });
        })
});

function setInfo(proj){
    document.title = proj.title;

    // Nombre
    var title = document.getElementsByTagName("h4")[0];
    title.textContent = proj.title;

    // Portada
    var img = document.getElementsByTagName("img")[0];
    img.src = proj.logo;
    img.alt = proj.logoAlt;

    // Sinopsis
    var sinopsisArt = document.querySelector('.sinopsis');
    var sinopsisP = sinopsisArt.querySelector('p');
    sinopsisP.textContent = proj.body;

    // Idiomas
    var lang = document.getElementById("idioma");
    lang.textContent = proj.lang;

    // Boton + info
    var btn = document.getElementById('infoBtn');
    btn.href = proj.github;

    // Boton Jugar
    if(proj.play){
        var gameBtn = document.getElementById("gameBtn");
        gameBtn.href = proj.play;
        gameBtn.classList.remove("hidden");
    }
    // if(proj.Jugar){
    //     btn[1].href = proj.juego + "?id=" + proj.Idprojo;
    //     btn[1].style.display = "block";
    // }
}