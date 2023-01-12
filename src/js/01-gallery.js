// Add imports above this line

import { galleryItems } from '../js/gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const cardsMarkup = CreateImgCardsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardsMarkup)

function CreateImgCardsMarkup(cards){
return cards.map(({preview, original, description}) => 

  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`
).join('');

}
galleryEl.addEventListener('click', onLinkClick)
function onLinkClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
      return
    }

}
var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionPosition: 'bottom'});
console.log(lightbox)