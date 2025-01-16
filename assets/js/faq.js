// FAQ JS - faq.js

$( document ).ready(function() {
    // tab js
    // 1. 대상선정 : tab-list>li
    $('.tab-list>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 아코디언 js
    // 대상선정
    // 클릭대상 question , 이벤트대상 : anwser
    $('.question').click(function(){
        $(this).toggleClass('on');
        $(this).next('.answer').stop().slideToggle();
    });
});