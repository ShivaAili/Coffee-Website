const swiper = new Swiper('.testimonials', {
    loop: true, // Enables infinite loop
    slidesPerView: 3, // Show 3 slides at a time
    slidesPerGroup: 1, // Slide 1 slide at a time
    spaceBetween: 60, // Adds space between slides (optional)
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Automatically slides every 3 seconds
        disableOnInteraction: false,
    },
});
