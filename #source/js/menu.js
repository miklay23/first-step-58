//Работа с меню

const menuBnt = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const body = document.querySelector(".body");
const divBG = document.querySelector(".menu--close");

menuBnt.addEventListener('click', () => {
	menuList.classList.toggle('menu__list--open');
	body.classList.toggle('body-no-scroll');
	divBG.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
	menuList.classList.remove('menu__list--open');
	body.classList.remove('body-no-scroll');
	divBG.classList.remove('menu--open');
});

//--------Флаги и переменные----------------------------------------------------
let rootLockedFlag = false;
let headerLockedFlag = false;
let navActiveFlag = false;
let headerVisibleFlag = true;
let scrollbarWidth = 16;
let pageWidth = document.documentElement.clientWidth;
let pageBreakPointWidth = 992;								//$break-point-width: 992px;
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//--------Бургер-меню-----------------------------------------------------------
//навешивание действий при загрузке страницы
//(если заблокирована - значит событие ready прописано в slider.js)

// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		if ( navActiveFlag ) {
// 			disactiveNav();
// 			unlockRoot();
// 			unlockHeader();
// 		} else {
// 			lockHeader();
// 			activeNav();
// 			lockRoot();
// 		}

// 	});
// });
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//--------Исчезновение-header'а-------------------------------------------------
let scrollPos = $(document).scrollTop();		//предыдущее положение скролла. Расстояние сверху
let scrollTop = scrollPos;							//scrollTop - текущее положение скролла
let headerHeight = 146;

$(window).scroll(function() {
	scrollTop = $(document).scrollTop();
	// console.log('navActiveFlag = ' + navActiveFlag);
	if ( headerVisibleFlag &&
	!navActiveFlag &&
	scrollTop > scrollPos ) {							//прокрутка вниз
		headerVisibleFlag = false;
		$('.header').removeClass('header-visible');	//ускорение открытия header
	} else
	if ( !headerVisibleFlag &&
	scrollTop < scrollPos ) {							//прокрутка вверх
		headerVisibleFlag = true;
		$('.header').addClass('header-visible');		//удалить ускорение header
	}

	if ( scrollTop > headerHeight ) {
		$('.header').addClass('header-bg');
	} else {
		$('.header').removeClass('header-bg');
	}
	
	scrollPos = scrollTop;
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//--------Ширина полосы прокрутки-----------------------------------------------
function getScrollbarWidth() {
	// let documentWidth = parseInt(document.documentElement.clientWidth);
	// let windowsWidth = parseInt(window.innerWidth);
	let documentWidth = parseInt(document.documentElement.clientWidth);
	let windowsWidth = parseInt(window.innerWidth);
	let scrollbarWidth = windowsWidth - documentWidth;
	// console.log( 'documentWidth = ' + documentWidth );
	// console.log( 'windowsWidth = ' + windowsWidth );
	// console.log( 'scrollbarWidth = ' + scrollbarWidth );
	return scrollbarWidth;
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//--------Нажатие-клавиши-ESC---------------------------------------------------

function openHeader() {
	if ( !$('.header').hasClass('header-visible') ) {
		$('.header').addClass('header-visible');
		headerVisibleFlag = true;
	}
}
function closeHeader() {
	if ( $('.header').hasClass('header-visible') ) {
		$('.header').removeClass('header-visible');
		headerVisibleFlag = false;
	}
}

function activeNav() {
	if ( !$('.header__nav').hasClass('active') ) {
		$('.header__burger').addClass('active');
		$('.header__nav').addClass('active');
		navActiveFlag = true;
	}
}
function disactiveNav() {
	if ( $('.header__nav').hasClass('active') ) {
		$('.header__burger').removeClass('active');
		$('.header__nav').removeClass('active');
		navActiveFlag = false;
	}
}

function lockRoot() {
	if ( !$(':root').hasClass('lock') ) {
		$(':root').addClass('lock');
		//!!!!!!!!! остановить текущую прокрутку
		rootLockedFlag = true;
	}
}
function unlockRoot() {
	if ( $(':root').hasClass('lock') ) {
		$(':root').removeClass('lock');
		rootLockedFlag = false;
	}
}

function lockHeader() {
	// if ( BrowserName !== 'Mozilla Firefox' && !$('.header').hasClass('lock') ) {
	// 	$('.header').addClass('lock');
	// 	headerLockedFlag = true;
	// }
	if ( BrowserName !== 'Mozilla Firefox' ) {
		scrollbarWidth = getScrollbarWidth();		//получение ширины полосы прокрутки
		$('.header').css('paddingRight', scrollbarWidth+'px');
	}
}
function unlockHeader() {
	// if ( BrowserName !== 'Mozilla Firefox' && $('.header').hasClass('lock') ) {
	// 	$('.header').removeClass('lock');
	// 	headerLockedFlag = false;
	// }
	if ( BrowserName !== 'Mozilla Firefox' ) {
		scrollbarWidth = getScrollbarWidth();		//получение ширины полосы прокрутки
		$('.header').css('paddingRight', 0);
	}
}

//открыть меню
function openMenu() {
	//header невидим		=>		сделать его видимым
	if ( !headerVisibleFlag ) {
		openHeader();
	}

	//активация меню
	if ( !navActiveFlag ) {
		lockHeader();
		lockRoot();
		activeNav();
	}
}

//закрыть меню
function closeMenu() {
	//нажимается ESC
	//меню закроется, а header останется видимым
	if ( ( headerVisibleFlag && navActiveFlag ) ) {
		disactiveNav();
		unlockRoot();
		unlockHeader();
		// console.log('----closeMenu ()---');
	}
}



$(document).keydown(function(e) {
	if ( e.keyCode === 27 ) {
		//вычисление ширны страницы
		// pageWidth = window.innerWidth;							//с полосами прокрутки
		pageWidth = document.documentElement.clientWidth;	//без полос прокрутки
		// console.log('pageWidth = ' + pageWidth);

		//header невидим 		 нажимается ESC 		 открывается меню
		if ( !navActiveFlag &&
		( pageWidth <= pageBreakPointWidth ) &&
		!rootLockedFlag ) {
			openMenu();
		} else
		//header видим 		 нажимается ESC 		 закрывается меню
		if ( headerVisibleFlag &&
		( pageWidth <= pageBreakPointWidth ) &&
		navActiveFlag &&
		rootLockedFlag ) {
			closeMenu();
		}
		// console.log('------------ESC------');
		// console.log('.header				==>>	 header-visible			= ' + $('.header').hasClass('header-visible') );
		// console.log('.header__burger		==>>	 active					= ' + $('.header__burger').hasClass('active') );
		// console.log('.header__nav		==>>	 active					= ' + $('.header__nav').hasClass('active') );
		// console.log(':root				==>>	 lock					= ' + $(':root').hasClass('lock') );
		// console.log('.header				==>>	 lock					= ' + $('.header').hasClass('lock') );
		// console.log('headerVisibleFlag = ' + headerVisibleFlag);
		// console.log('scrollPos = ' + scrollPos);
		// console.log('scrollTop = ' + scrollTop);
		// console.log('navActiveFlag = ' + navActiveFlag);
		// console.log('rootLockedFlag = ' + rootLockedFlag);
		// console.log('=============================================');
		// console.log('.');
		// console.log('.');
	}
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
window.addEventListener('resize', function(event) {
	//вычисление ширны страницы
	// pageWidth = window.innerWidth;							//с полосами прокрутки
	pageWidth = document.documentElement.clientWidth;		//без полос прокрутки
	// console.log('pageWidth = ' + pageWidth);

	//header невидим 		 нажимается ESC 		 открывается меню
	if ( ( pageWidth > pageBreakPointWidth ) && navActiveFlag ) {
		disactiveNav();
		unlockRoot();
		unlockHeader();
		openHeader();
	}
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//--------добавление/удаление класса disable для карточки-----------------------
$(".card-advantages").mouseenter(function() {
	$(this).children("a.btn-advantages").removeClass('btn-advantages-disable');
})
$(".card-advantages").mouseleave(function() {
	$(this).children("a.btn-advantages").addClass('btn-advantages-disable');
})
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
