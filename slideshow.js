let  pic= 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}

function prevSlide() {
  pic--;
  if (pic < 0) {
    pic =slides.length -1;
  }
  showSlide(pic);
}

function nextSlide() {
  pic++;
  if (pic >= slides.length) {
    pic = 0;
  }
    showSlide(pic);
}