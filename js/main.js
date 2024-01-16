$(document).ready(function(){
    var portfolioSwiper = new Swiper(".portfolioSwiper" , {
        direction:"horizontal",
        loop:true,
        slidesPerView:4,
        spaceBetween:30,
        // navigation
        navigation: {
            nextEl: ".portfolioSwiper .next",
            prevEl: ".portfolioSwiper .prev",
          },
        breakpoints:{
            // 320이상일때
            320:{
                slidesPerView:1,
            },
            // 480이상일때
            480:{
                slidesPerView:2,
                spaceBetween:30,
            },
            // 768이상일때
            768:{
                slidesPerView:4,
                spaceBetween:30,
            }
        }  
        
    })
    })