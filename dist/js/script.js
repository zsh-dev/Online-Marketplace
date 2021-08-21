const bannerSlider = new Swiper('.banner__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 600,
    // If we need pagination
    pagination: {
      el: '.banner__slider-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.banner__slider-btn_next',
      prevEl: '.banner__slider-btn_prev',
    },
  
  
  });

  const productsSlider = new Swiper('.products__slider', {
    
    
    speed: 600,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
      
    },
    // If we need pagination
    pagination: {
      el: '',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.products__slider-btn_next',
      prevEl: '.products__slider-btn_prev',
    },
  
  
  });

 

const swiperProductNav = new Swiper('.product__slider-nav', {
  slidesPerView: 'auto',
  loopedSlides: 5,
  freeMode: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
      spaceBetween: 15,
    },
    576: {
      direction: 'vertical',
      touchRatio: 0,
      spaceBetween: 20,
    },
    
  },
})

const swiperProductMain = new Swiper('.product__slider-main', {
  
  spaceBetween: 40,
  loopedSlides: 5,
  mousewheel: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      direction: 'horizontal',
    },
    576: {
      direction: 'vertical',
    },
    
  },
 
  thumbs: {
    swiper: swiperProductNav
  }
})

  document.addEventListener('click', ({target}) => {

    if (target.classList.contains('header__btn')) {
      document.querySelector('.header__catalog-list').classList.toggle('active');
    } else {
      document.querySelector('.header__catalog-list').classList.remove('active');
    }
  })

  const filterClose = document.querySelectorAll('[data-close]'),
  overlay = document.querySelector('.overlay'),
  btnFilterOpen = document.querySelector('.filter-btn'),
  filter = document.querySelector('.filter');

  

if (btnFilterOpen) {
  btnFilterOpen.addEventListener('click', () => {
  filter.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('lock');
})
}

if (filterClose) {
  filterClose.forEach((item) => {
    item.addEventListener('click', () => {
  filter.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('lock');

})
  })
  
}



const burger = document.querySelector('.burger'),
      mobileHeader = document.querySelector('.header__mobile-panel');
if (burger) {
  burger.addEventListener('click', () => {
    mobileHeader.classList.toggle('active')
    document.body.classList.toggle('lock')
  })
}

const btnReduce = document.querySelector('.product__btn-reduce'),
      btnIncrease = document.querySelector('.product__btn-increase'),
      inputCount = document.querySelector('.product__input-count');

     if (btnReduce) {
           btnReduce.addEventListener('click', function() {
        if (inputCount.value > 1) {
          inputCount.value--;
        } else if (inputCount.value < 2) {
          inputCount.value--;
          btnReduce.setAttribute("disabled", "disabled")
        }
         else {
          return 1;
        }
      });
     }
  if (btnIncrease) {
    btnIncrease.addEventListener('click', function() {
        if (btnReduce.hasAttribute("disabled")) {
          btnReduce.removeAttribute('disabled')
        } 
        
        inputCount.value++;
        
      });
  }
 