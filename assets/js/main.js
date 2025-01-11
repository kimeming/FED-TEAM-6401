$(() => {
    const bestSlide = new Swiper('.best-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
                centeredSlides: false,
            },
        }
    });

    const storeSlide = new Swiper('.store-slide', {
        slidesPerView: 1,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});