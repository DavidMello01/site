document.addEventListener('DOMContentLoaded', function() {
    // Carrossel de Projetos
    const prevProjetos = document.getElementById('prev-projetos');
    const nextProjetos = document.getElementById('next-projetos');
    const carouselProjetos = document.querySelector('.carousel-projetos');
    
    let projetoIndex = 0;

    function showProjeto(index) {
        const items = document.querySelectorAll('.projeto-item');
        if (index < 0) {
            projetoIndex = items.length - 1;
        } else if (index >= items.length) {
            projetoIndex = 0;
        }
        const offset = -projetoIndex * (items[0].offsetWidth + 10); // 10px é o margin-right
        carouselProjetos.style.transform = `translateX(${offset}px)`;
    }

    prevProjetos.addEventListener('click', function() {
        projetoIndex--;
        showProjeto(projetoIndex);
    });

    nextProjetos.addEventListener('click', function() {
        projetoIndex++;
        showProjeto(projetoIndex);
    });

    // Carrossel de Notícias
    const prevNoticias = document.getElementById('prev-noticias');
    const nextNoticias = document.getElementById('next-noticias');
    const carouselNoticias = document.querySelector('.carousel-noticias');
    
    let noticiaIndex = 0;

    function showNoticia(index) {
        const items = document.querySelectorAll('.noticia-card');
        if (index < 0) {
            noticiaIndex = items.length - 1;
        } else if (index >= items.length) {
            noticiaIndex = 0;
        }
        const offset = -noticiaIndex * (items[0].offsetWidth + 10); // 10px é o margin-right
        carouselNoticias.style.transform = `translateX(${offset}px)`;
    }

    prevNoticias.addEventListener('click', function() {
        noticiaIndex--;
        showNoticia(noticiaIndex);
    });

    nextNoticias.addEventListener('click', function() {
        noticiaIndex++;
        showNoticia(noticiaIndex);
    });
});
