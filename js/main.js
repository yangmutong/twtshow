var mySwiper = new Swiper ('#outer', {
    direction : 'vertical',
    speed:300,
    effect:'fade',
    keyboardControl : true,
    slideToClickedSlide:true,
    loop:true,
});


var mySwiper = new Swiper ('.inner-page', {
    direction : 'horizontal',
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    loop:true,
    effect:'fade',
    paginationClickable :true,
    pagination : '.swiper-pagination',
});