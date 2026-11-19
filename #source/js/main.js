//prepend - подключение файла до
//append - подключение файла после

//определение браузера
//@ prepros-prepend BrowserName.js
// console.log('------your Browser is ' + BrowserName);

//Анимация-появления-элементов
//@prepros-prepend appearance.js

//Валидация email
//@prepros-prepend email.js

//Паралакс эффект
//@ prepros-prepend paralax.js

//работа с меню
//@prepros-prepend menu.js



//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//-----Разделитель числа на разряды---------------------------------------------
function addSpaces(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ' ' + '$2' + ' руб.');
	}
	return x1 + x2;
}
// let num = 12330978;
// console.log(num + " = " + addSpaces(num));
// console.log(addSpaces("12578"));
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------



//подключение слайдера / slider
//@ prepros-append slider.js



console.log('script loaded ');