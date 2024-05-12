
document.addEventListener('DOMContentLoaded', (event) => {
  let swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
   
    direction: 'vertical',
    mousewheel: true,
    slidePreView: true,

  });

  let swiper2 = new Swiper('.swiper2', {
    spaceBetween: 50,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    direction: 'horizontal',
    mousewheel: true,
    slidePreView: 1,
  })
});




// menubar

let menu = document.querySelector('.menubar');
let bodytoblur = document.querySelector('.swiper');
let menubtn = document.querySelector('.ri-menu-line');
let popUp = document.querySelector('#popUpBar');

menubtn.addEventListener('click', ()=>{
  menubtn.classList.toggle('ri-close-large-line');
    menu.style.transform = menu.style.transform == 'translateX(0px)' ? 'translateX(-100vh)' : 'translateX(0px)';
    bodytoblur.style.filter = bodytoblur.style.filter=='blur(2px)'?'blur(0px)':'blur(2px)';
})

