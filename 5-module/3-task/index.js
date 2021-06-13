function initCarousel() {
  let innerCarousel = document.querySelector ('.carousel__inner');
  let slides = document.querySelectorAll ('.carousel__slide');
  let slideWidth = innerCarousel.offsetWidth;
  let slideNumber = 1;
  let rightNavArrow = document.querySelector ('.carousel__arrow_right');
  let leftNavArrow = document.querySelector ('.carousel__arrow_left');

leftNavArrow.style.display ='none';
rightNavArrow.addEventListener ('click', () => {
  innerCarousel.style.transform = `translateX(-${slideWidth * slideNumber++ + 'px'})`;
    if (slideNumber > slides.length -1) {
      rightNavArrow.style.display = 'none';
    } else {
      rightNavArrow.style.display = '';
    }
    if (slideNumber > 1) {
      leftNavArrow.style.display = '';
    }
});

leftNavArrow.addEventListener ('click', () => {
  innerCarousel.style.transform = `translateX(-${slideWidth * (--slideNumber -1) + 'px'})`;
  if (slideNumber > slides.length -1) {
    rightNavArrow.style.display = 'none';
  } else {
    rightNavArrow.style.display = '';
  }
  if (slideNumber == 1) {
    leftNavArrow.style.display = 'none';
  }
});
}
