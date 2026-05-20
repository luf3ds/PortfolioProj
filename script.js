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

    document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar-Nav a');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        // DETECTA SE É MOBILE: Se a janela for menor ou igual a 768px, ignora a troca de abas
        if (window.innerWidth <= 768) {
            return; 
        }

        // Lógica padrão para Desktop (Esconde todas e mostra a clicada)
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Atualiza a classe ativa no menu
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    // Gerencia os cliques no menu lateral (Desktop)
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

    // Monitora se o usuário redimensionar a tela do navegador no PC
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Se voltou para o PC, garante que pelo menos a Home esteja visível
            const secaoAtiva = document.querySelector('.sidebar-Nav a.active');
            const targetId = secaoAtiva ? secaoAtiva.getAttribute('href').substring(1) : 'Home';
            showSection(targetId);
        } else {
            // Se foi para o mobile, força a exibição de todas tirando o "none" do inline style
            sections.forEach(section => {
                section.style.display = '';
            });
        }
    });

    // Inicialização do site
    if (window.innerWidth > 768) {
        showSection('Home'); 
    } else {
        sections.forEach(section => {
            section.style.display = '';
        });
    }
});

    // Inicia mostrando a Home
    showSection('Home'); 
});