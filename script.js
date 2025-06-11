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
  const content = document.getElementById('sumir');
  const blocked = document.getElementById('blocked');

  // Verificação da resolução real da TELA (não da janela)
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  // Também verifica a área visível da JANELA
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const isExactResolution = screenWidth >= 1340 && screenHeight >= 900;
  const isWindowMatching = windowWidth >= 1340 && windowHeight >= 900;

  if (isExactResolution && isWindowMatching) {
    content.style.display = 'block';
    blocked.style.display = 'none';
  } else {
    content.style.display = 'none';
    blocked.style.display = 'flex';
  }

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if (isMobile) {
    content.style.display = 'none';
    blocked.style.display = 'flex';
  }
});
