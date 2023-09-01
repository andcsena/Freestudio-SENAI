  //slider
  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });