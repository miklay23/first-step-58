//Анимация-появления-элементов

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
			return 0;
		}
		// change.target.classList.remove('element-show');
	});
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-top');
for (let elm of elements) {
	observer.observe(elm);
}
elements = document.querySelectorAll('.element-animation-bottom');
for (let elm of elements) {
	observer.observe(elm);
}
elements = document.querySelectorAll('.element-animation-left');
for (let elm of elements) {
	observer.observe(elm);
}
elements = document.querySelectorAll('.element-animation-right');
for (let elm of elements) {
	observer.observe(elm);
}
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------