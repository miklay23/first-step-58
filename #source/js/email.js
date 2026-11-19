//Валидация email
//Нужно добавить красный и зелёный цвета шрифта для правильных и неправильных ответов

// let val_btn = ".btn-submit";		//класс кнопки
// let val_err = ".error";				//класс вывод ошибок
// let val_email = ".email";			//класс edit с email'ом
let val_btn = ".email-btn";		//класс кнопки
let val_err = ".email-error";		//класс вывод ошибок
let val_email = ".email";			//класс edit с email'ом

$(function() {
	$(val_btn).on("click", validate);

	// Validate email
	function validateEmail(email) {
		var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return re.test(String(email).toLowerCase());
	}

	// send form
	function sendForm() {
		$(val_err).text("Form sending").fadeIn();
	}

	// validate email and send form after success validation
	function validate() {
		var email = $(val_email);
		var error = $(val_err);
		error.text(" ");

		error.css('opacity', '1');

		if (validateEmail(email.val())) {
			error.fadeOut();
			sendForm();
			error.css('color', 'green');
			email.css('border-color', 'green');
		} else {
			error.fadeIn();
			error.text(email.val() + " is not valid");
			error.css('color', 'red');
			email.css('border-color', 'red');
		}
		return false;
	}
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------