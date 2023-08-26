let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");



function showSlides() {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    if (slideIndex == 0) {
        setTimeout(showSlides, 4000);
    }else{
        slideIndex += 0;
        setTimeout(showSlides, 4000);
    }
    
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

window.addEventListener("load", showSlides);
