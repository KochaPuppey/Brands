let popupContainer = document.querySelector('.popup_container');
let brandsOpen = document.querySelector('.popup_button_open');
let arrowRotate = document.querySelector('.popup_button')

brandsOpen.addEventListener('click', function () {
  if (popupContainer.classList.contains('popup-show')) {
    popupContainer.classList.remove('popup-show');
    brandsOpen.textContent = 'Показать все';
    arrowRotate.classList.remove('active');
  } else {
    popupContainer.classList.add('popup-show');
    brandsOpen.textContent = 'Скрыть';
    arrowRotate.classList.add('active');
  }
});

let swiperInstance

function initSwiper() {
  if (window.innerWidth <= 767 && !swiperInstance) {
    swiperInstance = new Swiper ('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth > 767 && swiperInstance) {
    swiperInstance.destroy(true,true);
    swiperInstance = null;
  }
}
initSwiper();
window.addEventListener("resize", initSwiper);
