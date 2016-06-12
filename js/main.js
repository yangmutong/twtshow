var outerSwiper = new Swiper ('#outer', {
    direction : 'vertical',
    speed:300,
    keyboardControl : true,
	mousewheelControl : true,
	onSlideChangeEnd:function(swiper){
		setMenu(swiper);
	},
});

var mobileSwiper = new Swiper("#mobile-inner-container",{
	direction : 'horizontal',
	speed:800,
	effect : 'coverflow',
	slidesPerView: 3,
	centeredSlides: true,
	coverflow: {
		rotate: 20,
		stretch: 10,
		depth: 150,
		modifier: 2,
		slideShadows : true
	},
	autoplay : 1500,
	autoplayDisableOnInteraction : false,
	lazyLoading : true,
	lazyLoadingInPrevNext : true,
	paginationClickable :true,
	pagination : '.swiper-pagination',
});

var innerSwiper1 = new Swiper ('#first-inner-container', {
    direction : 'horizontal',
    speed:800,
	effect : 'fade',
	fade: {
		crossFade: false,
	},
	autoplay : 1500,
	autoplayDisableOnInteraction : false,
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    paginationClickable :true,
    pagination : '.swiper-pagination',
});
var innerSwiper2 = new Swiper ('#second-inner-container', {
    direction : 'horizontal',
	speed:800,
	effect : 'fade',
	fade: {
		crossFade: false,
	},
	autoplay : 1500,
	autoplayDisableOnInteraction : false,
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    paginationClickable :true,
    pagination : '.swiper-pagination',
});
var innerSwiper3 = new Swiper ('#third-inner-container', {
    direction : 'horizontal',
	speed:800,
	effect : 'fade',
	fade: {
		crossFade: false,
	},
	autoplay : 1500,
	autoplayDisableOnInteraction : false,
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    paginationClickable :true,
    pagination : '.swiper-pagination',
});

var slideIndex = {
	"menu-peiyang":1,
	"menu-wenjin":2,
	"menu-party":3
};
var TranMenuArr = document.getElementsByClassName('menu-transition');
var screenWidth = document.body.clientWidth;
if (screenWidth > 766){
	TranMenuArr[0].style.backgroundPositionX = '-48px';
	setDisplay("block");
	slideIndex = {
		"menu-peiyang":0,
		"menu-wenjin":1,
		"menu-party":2
	}
}
function setDisplay(status){
	var menuArr = document.querySelectorAll('#menu>*');
	if (status == 'none') {
		menuArr[0].style.display = 'block';
		for(var i = 1; i < menuArr.length; i ++){
			menuArr[i].style.display = status;
		}
	}else if(status == 'block'){
		menuArr[0].style.display = 'none';
		for(var i = 1; i < menuArr.length; i ++){
			menuArr[i].style.display = status;
		}
	}else{
		console.log('error');
	}
}

function switchSlide(id){
	outerSwiper.slideTo(slideIndex[id],500,true);
	console.log(slideIndex[id]);
}


function setMenu(swiper){
	Array.prototype.forEach.call(TranMenuArr,function(item){
		item.style.backgroundPositionX = '0px';
	});
	if( screenWidth < 766){
		if (swiper.activeIndex == 0){

		}else{
			TranMenuArr[swiper.activeIndex - 1].style.backgroundPositionX = '-36px';
		}
	}else {
		TranMenuArr[swiper.activeIndex].style.backgroundPositionX = '-48px';
	}

}

window.onload = function(){
	var swiperArr = [innerSwiper1,innerSwiper2,innerSwiper3];
	var menu = document.getElementById('menu');
	menu.addEventListener('click',function(event){
		event.stopPropagation();
		if (event.target.id == 'menu-open') {
			setDisplay('block');
		}else if (event.target.id == 'menu-close') {
			setDisplay('none');
		}else if(event.target.id == 'menu'){
		}else{
			switchSlide(event.target.id);
		}
	},false);

	var left = document.querySelectorAll('.left-arrow');
	for(var i = 0;i < left.length;i ++){
		left[i].num = i;
		left[i].addEventListener('click',function(event){
			event.stopPropagation();
			swiperArr[this.num].slidePrev();
		},false);
	}
	var right = document.querySelectorAll('.right-arrow');
	for(var i = 0;i < right.length;i ++){
		right[i].num = i;
		right[i].addEventListener('click',function(event){
			event.stopPropagation();
			swiperArr[this.num].slideNext();
		},false);
	}
};
