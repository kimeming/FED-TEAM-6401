// 공통 JS common.js
$(() => {
    // tab js
    const tabListA = $('.tab-list>li>a');
    const tabView = $('.tab-view>li');

    tabListA.on('click', function(){
        let tabIdx = $(this).parent().index();
        console.log(tabIdx);
    });
});