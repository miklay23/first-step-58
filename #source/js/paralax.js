//Паралакс эффект
//используемые классы:
//				mouse-parallax-bg
//				mouse-parallax-bg-2
//				mouse-parallax-bg-3

// let bg = document.querySelector('.mouse-parallax-bg');
// window.addEventListener('mousemove', function(e) {
// 	let x = e.clientX / window.innerWidth;
// 	let y = e.clientY / window.innerHeight;
// 	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
// });
//------------------
let bg = document.querySelectorAll('.mouse-parallax-bg');
for (let i = 0; i < bg.length; i++){
	window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		x = 15-x*30;
		y = 15-y*30;
		bg[i].style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	});
}
let bg2 = document.querySelectorAll('.mouse-parallax-bg-2');
for (let i = 0; i < bg2.length; i++){
	window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		x = 20-x*40;
		y = 20-y*40;
		bg2[i].style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	});
}
let bg3 = document.querySelectorAll('.mouse-parallax-bg-3');
for (let i = 0; i < bg3.length; i++){
	window.addEventListener('mousemove', function(e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		x = 60-x*120;
		y = 60-y*120;
		bg3[i].style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	});
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------