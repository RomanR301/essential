var swiper = new Swiper('.clients-carousel', {
  slidesPerView: 4,
  spaceBetween: 120,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.clients-next',
      prevEl: '.clients-prev',
  },
  pagination: {
      el: '.clients-pagination',
  },
});