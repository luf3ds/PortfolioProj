document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        //Esconde todas as seções
        sections.forEach(section => {
            section.style.display = 'none';
        });

        //Mostra a seção
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        //Atualiza o menu lateral
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    // Gerencia os cliques no menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                showSection(targetId);
            }
        });
    });

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function checarDispositivo(e) {
        if (e.matches) {
            // Mudou para mobile
            console.log("Tela menor que 768px");
            
        } else {
            // Mudou para desktop
            console.log("Tela maior que 768px");
        }
    }

    // Adiciona o "ouvinte" de mudança de tela
    mediaQuery.addEventListener("change", checarDispositivo);

    showSection('Home'); 
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar-Nav a');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        // Esconde todas as seções
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra a seção desejada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Atualiza o menu lateral
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    // Gerencia os cliques no menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                showSection(targetId);
            }
        });
    });

    // Inicia o site mostrando a Home por padrão
    showSection('Home'); 
});