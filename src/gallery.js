function renderGallery(container, onSelect) {
  container.innerHTML = renderGalleryList(PHOTOS);
  container.addEventListener('click', (event) => handleGalleryClick(event, onSelect));
}

function handleGalleryClick(event, onSelect) {
  const button = event.target.closest('.gallery__button');
  if (!button) return;
  onSelect(Number(button.dataset.index));
}
