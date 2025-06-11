new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { 
      slidesPerView: 1,
    },
    640: { 
      slidesPerView: 2,
    },
    768: { 
      slidesPerView: 3,
    },
    1024: { 
      slidesPerView: 4,
    }
  }
});


window.addEventListener('load', () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  // Verifica se a tela é Full HD (mínimo de 1340x900)
  const isFullHD = (screenWidth >= 1340 && screenHeight >= 900);

  const content = document.getElementById('sumir');
  const blocked = document.getElementById('blocked');

  if (isFullHD) {
    content.style.display = 'block';
    blocked.style.display = 'none';
  } else {
    content.style.display = 'none';
    blocked.style.display = 'flex'; // melhor para centralizar conteúdo
  }
});

