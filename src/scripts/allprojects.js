window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('project-list');
    let url = '/projects.json';
    
    fetch(url)
        .then(response => response.json())
        .then(projects => {
            projects.forEach(proj => {
                createCard(proj, container);
            });
        })
});

function createCard(proj, container) {
    const article = document.createElement('article');
    article.className = 'link-card';
    article.setAttribute('data-astro-cid-tkm2rszc', '');
    article.setAttribute('data-astro-source-file', 'D:/GitHub/olavma.github.io/src/components/Project.astro');
    article.setAttribute('data-astro-source-loc', '14:28');

    article.innerHTML = `
        <a href="${proj.href}" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="15:17">
            <h2 data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="16:7">${proj.title}</h2>
            <div class="content" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="17:24">
                <figure data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="18:12">
                    <img src="${proj.logo}" alt="${proj.logoAlt}" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="19:6">
                </figure>
                <div class="text-content" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="21:30">
                    <div data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="22:10">
                        <h5 class="sinopsisTitle" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="23:32">Descripción/Sinopsis</h5>
                        <p class="sinopsis" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="24:26">${proj.body}</p>
                    </div>
                    <div class="language" data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="26:27">
                        <h4 data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="27:10">Idiomas disponibles</h4>
                        <h5 data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="28:11"><span data-astro-cid-tkm2rszc="" data-astro-source-file="D:/GitHub/olavma.github.io/src/components/Project.astro" data-astro-source-loc="28:16">${proj.lang}</span></h5>
                    </div>
                </div>
            </div>
        </a>
    `;

    container.appendChild(article);
}

