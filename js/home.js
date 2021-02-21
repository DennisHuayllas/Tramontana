const cargaFooter = () => {
    fetch("../footer.html")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#footer").innerHTML = codigo;
      });
  };
  cargaFooter();

  const cargarMenu=()=> {
    fetch("../menu.html")
      .then((response) => response.text())
      .then((codigo) => {
        document.querySelector("#menu").innerHTML = codigo;
      })
      .then(()=>{
        if(sessionStorage.getItem('clave')){
          document.querySelector("#btnLogin").style.display = "none";
        document.querySelector("#btnRegister").style.display = "none";
          document.querySelector("#misReservas").style.display = 'inline';
          document.querySelector("#LogOut").style.display = 'inline';
          document.querySelector("#LogOut").addEventListener("click",()=>{sessionStorage.clear()})
      }
  })
 }
cargarMenu(); 

$(function () {
  "use strict";
  
  // All Variable
  var slider          = $('.slider'),
      sliderUl        = slider.find('.slider-ul'),
      sliderUlLi      = sliderUl.find('.slider-ul-li'),
      sliderOl        = slider.find('.slider-ol'),
      sliderOlLi      = sliderOl.find('.slider-ol-li'),
      sliderFaRight   = slider.find('> .fa:first-of-type'),
      sliderFaLeft    = slider.find('> .fa:last-of-type'),
      sliderTime      = 1000,
      sliderWait      = 3000,
      sliderSetInt,
      resumeAndPause;
  
  // Public
  sliderFaLeft.fadeOut();
  
  // Reset Width And Height
  function resetWH() {
      slider.width(slider.parent().width()).height(slider.parent().width() * 0.5);
      sliderUl.width(slider.width() * sliderUlLi.length).height(slider.height());
      sliderUlLi.width(slider.width()).height(slider.height());
  }
  resetWH();
  // Function Run Slider
  function runSlider() {
      if (sliderOlLi.hasClass('slider-active')) {
          sliderUl.animate({
              marginLeft: -slider.width() * ($('.slider-active').data('slider') - 1)
          }, sliderTime);
      }
      if ($('.slider-active').is(':first-of-type')) {
          sliderFaLeft.fadeOut();
      } else {
          sliderFaLeft.fadeIn();
      }
      if ($('.slider-active').next().is(':last-of-type')) {
          sliderFaRight.fadeOut();
      } else {
          sliderFaRight.fadeIn();
      }
  }
  // Function Right
  function runRight() {
      slider.each(function () {
          $('.slider-active').next().addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  }
  // Function Left
  function runLeft() {
      slider.each(function () {
          $('.slider-active').prev().addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  }
  // Function Auto Run ==================================================
  sliderSetInt = function autoRunSlider() {
      if ($('.slider-active').next().is(':last-of-type')) {
          sliderUl.animate({
              marginLeft: -sliderUlLi.width() * $('.slider-active').data('slider')
          }, sliderTime, function () {
              sliderUl.css('margin-left', 0);
              sliderOlLi.first().addClass('slider-active').siblings().removeClass('slider-active');
          });
      } else {
          runRight();
      }
  };
  
  resumeAndPause = setInterval(sliderSetInt, sliderWait);
  
  // Resize Window
  $(window).on('resize', function () {
      resetWH();
  });
  
  // Point Active 
  slider.each(function () {
      sliderOlLi.click(function () {
          $(this).addClass('slider-active').siblings().removeClass('slider-active');
          runSlider();
      });
  });
  
  sliderFaRight.on('click', function () {
      runRight();
  });
  sliderFaLeft.on('click', function () {
      runLeft();
  });
  
  slider.find('.fa').hover(function () {
      clearInterval(resumeAndPause);
  }, function () {
      resumeAndPause = setInterval(sliderSetInt, sliderWait);
  });
});
