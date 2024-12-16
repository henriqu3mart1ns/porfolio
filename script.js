document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu_lateral ul li a"); 
    const sections = document.querySelectorAll(".sessao"); 

    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); 

            sections.forEach((sessao) => {
                sessao.classList.remove("ativo");
                sessao.style.opacity = 0;
            });

            const targetId = item.getAttribute("href").substring(1);  
            const targetSection = document.getElementById(targetId);

            targetSection.classList.add("ativo");
            setTimeout(() => {
                targetSection.style.opacity = 1;
            }, 10);  
        });
    });

    // Carrossel de Projetos
    const slides = document.querySelectorAll("#projetos .carrossel .slide");
    const prevBtn = document.querySelector("#projetos .carrossel .prev");
    const nextBtn = document.querySelector("#projetos .carrossel .next");
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        }
        const offset = -currentSlide * 100;
        document.querySelector("#projetos .carrossel .slides").style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
    });

    // Inicializa o carrossel na primeira slide
    showSlide(currentSlide);

    // Configuração do progresso (se necessário)
    document.querySelectorAll('.progress-circle').forEach(function (progressCircle) {
        const percent = progressCircle.getAttribute('data-percent');
        progressCircle.style.setProperty('--percent', percent); 
    });
});
