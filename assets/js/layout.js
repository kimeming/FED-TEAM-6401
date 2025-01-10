$(() => {
    // 임시 gnb js - 수정예정
    $('.menu-btn').click(function(){
        $('.gnb-wrap').addClass('open');
    });

    $('.gnb-close').click(function(){
        $('.gnb-wrap').removeClass('open');
    });

    $('.gnb-list>li>a').click(function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            $('.gnb-list .dep2').removeClass('on');
            $(this).next('.dep2').addClass('on');
        } else {
            $(this).removeClass('on');
            $(this).next('.dep2').removeClass('on');
        }
       
    });
});