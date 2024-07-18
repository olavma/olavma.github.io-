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
    const cont = document.getElementById("container");
    cont.textContent = proj.title;
    document.title = proj.title;
}