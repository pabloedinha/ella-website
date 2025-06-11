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
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width >= 1340 && height >= 900) {
    document.getElementById('sumir').style.display = 'block';
    document.getElementById('blocked').style.display = 'none';
  } else {
    document.getElementById('sumir').style.display = 'none';
    document.getElementById('blocked').style.display = 'block';
  }
});
