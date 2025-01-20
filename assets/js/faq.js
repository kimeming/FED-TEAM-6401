// FAQ JS - faq.js

$( document ).ready(function() {
    // 아코디언 js
    // 대상선정
    // 클릭대상 question , 이벤트대상 : anwser
    $('.question').click(function(){
        if(!$(this).hasClass('on')){
            $('.question').removeClass('on');
            $('.answer').stop().slideUp();
            $(this).addClass('on');
            $(this).next('.answer').stop().slideDown();
        }
    });
});