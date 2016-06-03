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
		rotate: 30,
		stretch: 10,
		depth: 60,
		modifier: 2,
		slideShadows : true
	},
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
    lazyLoading : true,
    lazyLoadingInPrevNext : true,
    paginationClickable :true,
    pagination : '.swiper-pagination',
});

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
	if (id == 'menu-peiyang') {
		outerSwiper.slideTo(0,500,true);
	}else if(id == 'menu-wenjin'){
		outerSwiper.slideTo(1,500,true);
	}else if(id == 'menu-party'){
		outerSwiper.slideTo(2,500,true);
	}
}
var menuArr = document.getElementsByClassName('menu-transition');
menuArr[1].style.backgroundPositionX = '-48px';
function setMenu(swiper){
	Array.prototype.forEach.call(menuArr,function(item){
		item.style.backgroundPositionX = '0px';
	});
	menuArr[swiper.activeIndex + 1].style.backgroundPositionX = '-48px';
}

window.onload = function(){
	var swiperArr = [innerSwiper1,innerSwiper2,innerSwiper3];
	var menu = document.getElementById('menu');
	menu.addEventListener('click',function(event){
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
			swiperArr[this.num].slidePrev();
		},false);
	}
	var right = document.querySelectorAll('.right-arrow');
	for(var i = 0;i < right.length;i ++){
		right[i].num = i;
		right[i].addEventListener('click',function(event){
			swiperArr[this.num].slideNext();
		},false);
	}
};
