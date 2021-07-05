import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
	constructor(slides) {
		this.slides = slides;
		this.imgCarouselPath = '/assets/images/carousel/';
		this.btnImgPath = "/assets/images/icons/";
		this.elem = this.createCarousel();
		this.createAddToCardEventAndListener(this.elem);
	}

	createCarousel() {
		let rootElem = document.createElement('div');
		rootElem.className = 'carousel';

		rootElem.innerHTML = `
			<div class="carousel__arrow carousel__arrow_right">
				<img src="${this.btnImgPath}angle-icon.svg" alt="icon">
			</div>
			<div class="carousel__arrow carousel__arrow_left">
				<img src="${this.btnImgPath}angle-left-icon.svg" alt="icon">
			</div>
			<div class="carousel__inner">
			</div>`;

		let carouselInner = rootElem.querySelector('.carousel__inner');

		this.addSlides(carouselInner, this.slides);
		this.initCarousel(rootElem);
		return rootElem;
	}

	addSlides(slidesHolder, slides) {
		for (let slide of slides) {
			slidesHolder.insertAdjacentHTML('beforeend',
				` <div class="carousel__slide" data-id="${slide.id}">
					<img src="${this.imgCarouselPath}${slide.image}" class="carousel__img" alt="slide">
					<div class="carousel__caption">
					<span class="carousel__price">€${slide.price.toFixed(2)}</span>
					<div class="carousel__title">${slide.name}</div>
					<button type="button" class="carousel__button">
						<img src="/assets/images/icons/plus-icon.svg" alt="icon">
					</button>
					</div>
		 		</div>`);
		}
	}

	initCarousel(elem) {
		let carouselInner = elem.querySelector('.carousel__inner');
		let numberOfSlides = carouselInner.querySelectorAll('.carousel__slide');
		let leftArrow = elem.querySelector('.carousel__arrow_left');
		let rightArrow = elem.querySelector('.carousel__arrow_right');

		let stepShift = 500;
		let maxShift = -stepShift * (numberOfSlides.length - 1);
		let shift = 0;

		checkArrows();

		leftArrow.addEventListener('click', () => {
			carouselInner.style.transform = `translateX(${shift += carouselInner.offsetWidth}px)`
		});

		rightArrow.addEventListener('click', () => {
			carouselInner.style.transform = `translateX(${shift -= carouselInner.offsetWidth}px)`
		});

		elem.addEventListener('click', checkArrows);

		function checkArrows() {
			``
			shift === maxShift ? rightArrow.style.display = 'none' : rightArrow.style.display = '';
			if (shift < 0) leftArrow.style.display = '';
			if (shift === 0) leftArrow.style.display = 'none';
		}
	}

	createAddToCardEventAndListener(element) {
		let buttons = element.querySelectorAll('.carousel__button');
		buttons.forEach(button => {
			button.addEventListener('click', (event) => test(event, button));
		});

		let myCustomEvent;

		function test(event, button) {
			let id = button.closest('.carousel__slide').dataset.id;
			myCustomEvent = new CustomEvent('product-add', { detail: id, bubbles: true });
			event.currentTarget.className === 'carousel__button' ? element.dispatchEvent(myCustomEvent) : false;
		}
	}
}
