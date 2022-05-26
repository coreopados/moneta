$(document).ready(function () {

 var mySwiper = new Swiper('.second-section-slider', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        spaceBetween:0,
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      })



  $('.mobile-menu-button').on('click', function(){
    $(this).toggleClass('active')
  })

  
$('.layer, .cancel').on('click', function(){
  $('.layer, .popup').removeClass('active')
})

  $('.register-button').on('click', function(event){
    event.preventDefault();
    $('.layer, .preRegister').addClass('active')
  })
  $('.contact-button').on('click', function(event){
    event.preventDefault();
    $('.layer, .contactForm').addClass('active')
  })
})

let bg = document.querySelector('.monet__1');
let bg1 = document.querySelector('.monet__2');
let bg2 = document.querySelector('.monet__3');
let bg11 = document.querySelector('.monet1');
let bg22 = document.querySelector('.monet2');
let bg33 = document.querySelector('.monet3');
let bg44 = document.querySelector('.monet4');
let bg55 = document.querySelector('.monet5');


if(window.innerWidth >991 ){
  window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  

    bg.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
    bg1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    bg2.style.transform = 'translate(-' + 0 * 180 + 'px, -' + y * 40 + 'px)';

    bg11.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg22.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    bg33.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg44.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    bg55.style.transform = 'translate(-' + 0 * 40 + 'px, -' + y * 40 + 'px)';

});
}



