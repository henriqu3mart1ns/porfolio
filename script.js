document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu_lateral ul li a"); 
    const sections = document.querySelectorAll(".sessao"); 

    menuItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); 

            // Remover a classe 'ativo' de todas as seções
            sections.forEach((sessao) => {
                sessao.classList.remove("ativo");
                // Redefinir a opacidade antes de ocultar
                sessao.style.opacity = 0;
            });

            // Atrasar a exibição da nova seção para permitir a transição
            const targetId = item.getAttribute("href").substring(1);  
            const targetSection = document.getElementById(targetId);

            // Exibir a nova seção com transição
            targetSection.classList.add("ativo");
            setTimeout(() => {
                targetSection.style.opacity = 1;
            }, 10);  // Um pequeno atraso para garantir a transição suave
        });
    });

    document.querySelectorAll('.progress-circle').forEach(function (progressCircle) {
        const percent = progressCircle.getAttribute('data-percent');
        progressCircle.style.setProperty('--percent', percent); 
    });
});
