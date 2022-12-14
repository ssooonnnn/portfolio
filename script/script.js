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
      if(ww >= 1480){
        var swiper = new Swiper(".mySwiper", {
          loop:true,
          effect: 'coverflow',
          centeredSlides: true,
          slidesPerView:'auto',
          slideToClickedSlide:true,
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
        // cursor 
    $(function() {
      var prefix = function() {
        var a = window.getComputedStyle(document.documentElement, ""),
          b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
        return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
      }();
      $(document).mousemove(function(e) {
        mouseX = e.pageX + 15;
        mouseY = e.pageY - $(window).scrollTop() + 15;
        $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
      });
    
    })
});//end
