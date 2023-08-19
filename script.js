let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {
		slideIndex = 1;
	}
	
	if (n < 1) {
		slideIndex = slides.length;
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active";
}



let scrollIndex = 1;
showScrolls(scrollIndex);

function plusScroll(n) {
	showScrolls(scrollIndex += n);
}

function showScrolls(n) {
	let i;
	var scrolls = document.getElementsByClassName("carousel");
	
	if (n > scrolls.length) {
		scrollIndex = 1;
	}
	
	if (n < 1) {
		scrollIndex = scrolls.length;
	}
	
	for (i = 0; i < scrolls.length; i++) {
		scrolls[i].style.display = "none";
	}
	
	scrolls[scrollIndex-1].style.display = "flex";
}