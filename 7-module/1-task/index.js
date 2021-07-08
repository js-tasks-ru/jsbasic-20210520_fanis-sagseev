import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.elem.addEventListener('click', this.onClick.bind(this));
  }
  render() {
    this.links = function() {
      let result = '';
        for(let link of this.categories){
          result += `<a href="#" class="ribbon__item" data-id="${link.id}">${link.name}</a>`
        };
        return result;
      }
    
      this.elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner">
            ${this.links()}
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
      `)
  }

  onClick(event){
    let ribonInner = document.querySelector('.ribbon__inner');
    let scrollWidth = ribonInner.scrollWidth;
    let scrollLeft = ribonInner.scrollLeft;
    let clientWidth = ribonInner.clientWidth;
    let arrowLeft = document.querySelector('.ribbon__arrow_left');
    let arrowRight = document.querySelector('.ribbon__arrow_right');
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    let isTargetArrow = event.target.tagName === 'IMG' || event.target.tagName === 'BUTTON';
    let isTargetLink = event.target.tagName === 'A';
    if(isTargetArrow){
      if(event.target.classList.contains('ribbon__arrow_right') || event.target.closest('button').classList.contains('ribbon__arrow_right')){
        ribonInner.scrollBy(350, 0);
        scrollRight < 200 ? arrowRight.classList.remove('ribbon__arrow_visible') : '';
        arrowLeft.classList.add('ribbon__arrow_visible');
      }
      if(event.target.classList.contains('ribbon__arrow_left') || event.target.closest('button').classList.contains('ribbon__arrow_left')){
        ribonInner.scrollBy(-350, 0);
        scrollLeft < 200 ? arrowLeft.classList.remove('ribbon__arrow_visible') : '';
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    }

    if(isTargetLink){
      this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
        detail: event.target.dataset.id,
        bubbles: true
      }))
    }    
  }
}
