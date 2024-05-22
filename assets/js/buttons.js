let currentIndex = 0;

    // Cuando se presiona el boton se navega hacia atras
    document.querySelector('.prev-button').addEventListener('click', () => {
        navigate(-1);
    });
    // Cuando se presiona el boton se navega hacia adelante
    document.querySelector('.next-button').addEventListener('click', () => {
        navigate(1);
    });
    
    function navigate(direction) {
        //Constante que define el boton.
        const galleryContainer = document.querySelector('.gallery-container');
        //Constante que define la imagen.
        const totalImages = document.querySelectorAll('.gallery-item').length;
        
        //Calcula en que pagina se encuentra, posicion y total de imagenes.
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        const offset = -currentIndex * 100;
        
        // Cambia de posicion el slider.
        galleryContainer.style.transform = `translateX(${offset}%)`;
    }