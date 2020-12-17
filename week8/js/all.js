/* mobile漢堡選單 */
$(document).ready(function () {

    $('.showmenu').click(function (event) {
        /*取消預設行為，也就是取消點擊連結後連去該網頁的行為*/
        event.preventDefault();
        $('body').toggleClass('menu-show');
    });
})

/* Swiper */
var swiper = new Swiper('.swiper-container', {
    // 設置slider容器能夠同時顯示的slides數量(carousel模式)
    // 可以設置為數字(可為小數，小數不可loop)，或者 'auto'則自動根據slides的寬度來設定數量

    slidesPerView: 'auto',
    // 在slide之間設置距離(單位px)
    spaceBetween: 0,
    // 在carousel mode下定義slides的數量多少為一組
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});