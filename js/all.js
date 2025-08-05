$(document).ready(function() {

  // 主選單開合 效果
  $('.event ul li').mouseenter(function(event) {
    $(this).addClass('eventmouseover-animate');
  
  });

  
  // lightbox 效果
  lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true,
        'maxWidth': 800,
      });
  $(window).load(function() {
      $('#slider').nivoSlider(); 
  });




});


