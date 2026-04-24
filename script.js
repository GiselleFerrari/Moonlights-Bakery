const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            // Animación simple de las barritas (opcional)
            menuToggle.classList.toggle('open');
        });

        // Cerrar el menú al hacer click en un enlace (para móviles)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });