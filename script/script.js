$(document).ready(function(){
  AOS.init();
  $('.hamburger').mouseenter(function(){
    $(this).children().addClass('on');
    $('.menu').stop().addClass('on');
  });
  $('.menu-box').mouseleave(function(){
    $('.hamburger').children('span').removeClass('on');
    $('.menu').removeClass('on');
  });

    $(window).width(function(){
      const ww = $(window).width();
      console.log(ww);
      if(ww >= 1500){
        var swiper = new Swiper(".mySwiper", {
          loop:true,
          // initialSlide: 1,
          effect: 'coverflow',
          //커버플로우 효과주기
          centeredSlides: true,
          //슬라이드를 가운데로 지정하는 속성
          slidesPerView:'auto',
          //꼭 보여지는 슬라이드 값을 자동으로 잡아줘야함
          slideToClickedSlide:true,
          //슬라이드를 클릭해도 넘어갈것인지 여부 선택
          coverflowEffect:{
              rotate:50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });
      }else{

      }
    });
    $('.menu li').eq(0).click(function(){
      var m_sct = $('#wrap').offset().top;
      console.log(m_sct);
      $('html, body').animate({scrollTop: m_sct}, 1000);
    });
    $('.menu li').eq(1).click(function(){
      var m_sct = $('#wrap').offset().top;
      console.log(m_sct);
      $('html, body').animate({scrollTop: m_sct + 1000}, 1000);
    });
    $('.menu li').eq(2).click(function(){
      var m_sct = $('#wrap').offset().top;
      console.log(m_sct);
      $('html, body').animate({scrollTop: m_sct + 2200}, 1000);
    });
    $('.menu li').eq(3).click(function(){
      var m_sct = $('#wrap').offset().top;
      console.log(m_sct);
      $('html, body').animate({scrollTop: m_sct + 4000}, 1000);
    });

    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      console.log(sct);
        if(sct >= 455){
          $('.menu-box').addClass('active');

        }else{
          $('.menu-box').removeClass('active');
        }
    });
    $(window).resize(function(){
      wwt = $(window).width();
      wht = $(window).height();
      layout();
    });

});
