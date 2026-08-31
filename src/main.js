const galleryElement = document.getElementById('gallery');
const lightboxElement = document.getElementById('lightbox');

function init() {
  const lightbox = new Lightbox(lightboxElement);
  renderGallery(galleryElement, (index) => openPhoto(lightbox, index));
}

function openPhoto(lightbox, index) {
  const trigger = galleryElement.querySelectorAll('.gallery__button')[index];
  lightbox.open(index, trigger);
}

document.addEventListener('DOMContentLoaded', init);
