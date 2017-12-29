var index = 1;
function plusIndex(n){
	index = index + n;
	showImage(index);
}
showImage(1);	
function showImage(n) {
	var x = document.getElementsByClassName("slides");
	var y = document.getElementsByClassName("right");
	if (n > x.length) { index = 1}
	if (n > y.length) { index = 1}
	if (n < 1) { index = x.length}
	if (n < 1) { index = y.length}
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[index-1].style.display = "block";
	for (var i = 0; i < y.length; i++) {
		y[i].style.display = "none";
	}
	y[index-1].style.display = "block";
}
autoSlide();
function autoSlide() {
	var x = document.getElementsByClassName("slides");
	var y = document.getElementsByClassName("right");
	if (index > x.length) { index = 1}
	if (index > y.length) { index = 1}
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[index-1].style.display = "block";
	for (var i = 0; i < y.length; i++) {
		y[i].style.display = "none";
	}
	y[index-1].style.display = "block";
	index++;
	setTimeout(autoSlide,3000);
}