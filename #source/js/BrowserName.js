//определение браузера
//хранится в const BrowserName

//функции проверки каждого браузера
function isYaBrowser() {
	if ( navigator.userAgent.indexOf('YaBrowser') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isFirefox() {
	//Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0
	//Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0
	if ( navigator.userAgent.indexOf('Firefox/') > -1 
		&& navigator.userAgent.indexOf('Seamonkey/') === -1 ) {
		return true;
	} else {
		return false;
	}
}
function isMSIE10m() {
	if ( navigator.userAgent.indexOf('MSIE') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isMSIE11() {
	//Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko
	//??????
	if ( navigator.userAgent.indexOf('trident/') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isEdge() {
	//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299
	if ( navigator.userAgent.indexOf('edge') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isEdg() {
	//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54
	if ( navigator.userAgent.indexOf('Edg/') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isOpera12m() {
	if ( navigator.userAgent.indexOf('Opera/') > -1 
		&& !!window.opr ) {
		return true;
	} else {
		return false;
	}
}
function isOpera15p() {
	//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 OPR/91.0.4516.16
	if ( navigator.userAgent.indexOf('OPR/') > -1 
		&& !!window.opr ) {
		return true;
	} else {
		return false;
	}
}
function isChrome() {
	//Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36
	if ( navigator.userAgent.indexOf('Chrome/') > -1 
		&& !!window.chrome 
		&& navigator.userAgent.indexOf('Chromium/') === -1 ) {
		return true;
	} else {
		return false;
	}
}
function isChromium() {
	//Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36
	if ( navigator.userAgent.indexOf('Chromium/') > -1 ) {
		return true;
	} else {
		return false;
	}
}
function isSafari() {
		//Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306
	if ( navigator.userAgent.indexOf('Safari') > -1 
		&& navigator.userAgent.indexOf('Chrome/') === -1 
		&& navigator.userAgent.indexOf('Chromium/') === -1 ) {
		return true;
	} else {
		return false;
	}
}

//Основная функция проверки браузера
function detectBrw() {
	if ( isYaBrowser() ) {	return 'Yandex Browser';							} else
	if ( isFirefox() ) {		return 'Mozilla Firefox';							} else
	if ( isMSIE10m() ) {		return 'Internet Exploder 10-';					} else
	if ( isMSIE11() ) {		return 'Internet Exploder 11';					} else
	if ( isEdge() ) {			return 'Microsoft Edge';							} else
	if ( isEdg() ) {			return 'Microsoft Edge ( chromium based)';	} else
	if ( isOpera12m() ) {	return 'Opera 12-';									} else
	if ( isOpera15p() ) {	return 'Opera 15+';									} else
	if ( isChrome() ) {		return 'Google Chrome';								} else
	if ( isChromium() ) {	return 'Google Chromium';							} else
	if ( isSafari() ) {		return 'Safari';										} else
		return 'Other';
}
//переменная содержащая название браузера
const BrowserName = detectBrw();
// console.log('------your Browser is ' + BrowserName);

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------