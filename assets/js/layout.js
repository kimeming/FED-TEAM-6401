$(() => {
  // 임시 gnb js - 수정예정
  $(".menu-btn").click(function () {
    if(!$(this).hasClass('on')){
      $(this).addClass('on');
      $(".gnb-wrap").addClass("open");
    } else {
      $(this).removeClass('on')
      $(".gnb-wrap").removeClass("open");
    }
  });



  $(".gnb-list>li>a").click(function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      $(".gnb-list .dep2").removeClass("on");
      $(this).next(".dep2").addClass("on");
    } else {
      $(this).removeClass("on");
      $(this).next(".dep2").removeClass("on");
    }
  });

  $('.search-open-btn').click(function() {
    $(this).addClass('open')
    $('.search-wrap').addClass('open');
  });

  $('.search-close-btn').click(function() {
    $('.search-open-btn').removeClass('open')
    $('.search-wrap').removeClass('open');
  });
});
