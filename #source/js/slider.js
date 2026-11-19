// console.log("hi, it's slider.js");

$(document).ready(function() {



	//работа с иконками в карточка товара
	$('.card-catalog__icon-1').each(function() {
		$(this).click(function(event) {
			$(this).toggleClass('card-catalog__icon-1-active');
		});
	});
	$('.card-catalog__icon-2').each(function() {
		$(this).click(function(event) {
			$(this).toggleClass('card-catalog__icon-2-active');
		});
	});



	$('.card-catalog__price').each(function() {
		let str = $(this).html();
		let newstr = addSpaces(str);
		$(this).html(newstr);
	});



	//работа с бургером
	$('.header__burger').click(function(event) {
		if ( navActiveFlag ) {
			disactiveNav();
			unlockRoot();
			unlockHeader();
		} else {
			lockHeader();
			activeNav();
			lockRoot();
		}
	});



	//работа со слайдером
	var $status = $('#slider__digits-all');
	var $slickElement = $('.slider');
	$slickElement.on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		// $status.text(i + '/' + slick.slideCount);
		$status.html("0" + slick.slideCount);
	});

	$('.slider').slick({
		arrows: false,					//стрелки
		dots: false,					//точки / булиты
		slidesToShow: 2,				//Сколько слайдов показывать за раз
		variableWidth: true,			//автоматическая ширина для картинок. Обычно картинки справа обрезаются.
											//При включенном centerMode обрезка картинок будет и слева и справа
		centerMode: false,			//Расположить текущий главный слайд по центру
		// centerMode: true,			//Расположить текущий главный слайд по центру
		InitialSlide: 0,				//Начальный слайд
		infinite: true,				//бесконечное пролистывание
		autoplay: true,				//автопрокрутка
		speed: 750,					//скорость пролистывания в миллисекундах
		autoplaySpeed: 2500,			//время задержки для автопрокрутки в миллисекундах
		draggable: false,				//разрешить свайп мышкой на ПК
		swipe: true,					//разрешить свайп на планшетах / телефонах
		pauseOnFocus: true,			//паузы для слайдера
		pauseOnHover: true,			//паузы для слайдера
	});
	$('.slider__btn-forward').click(function(e) {
		$('.slider').slick('slickNext');
	} );
	$('.slider__btn-back').click(function(e) {
		$('.slider').slick('slickPrev');
	} );



	//получение номеров слайдов ДО переключения
	$('#slider__digits-current').html("01");
	// $('#slider__digits-all').html("05");
	// $('#slider__digits-all').html("05");
	$('.slider').on('beforeChange', function(event, click, currentSlide, nextSlide) {
		// console.log('beforeChange.nextSlide = ', nextSlide);
		// console.log('beforeChange.currentSlide = ', currentSlide);
		nextSlide += 1;
		$('#slider__digits-current').html("0" + nextSlide);
	});
	//получение номеров слайдов ПОСЛЕ переключения
	// $('.slider').on('afterChange', function(event, click, currentSlide) {
	// 	console.log('afterChange.currentSlide = ', currentSlide);
	// 	currentSlide += 1;
	// 	$('#slider__digits-current').html("0" + currentSlide);
	// 	console.log('');
	// });



});