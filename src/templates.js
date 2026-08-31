function renderThumbnailImage(photo) {
  return `
    <img
      class="gallery__image"
      src="${photo.thumbSrc}"
      alt="${escapeHtml(photo.alt)}"
      loading="lazy"
      width="500"
      height="500"
    />
  `;
}

function renderThumbnail(photo, index) {
  return `
    <li class="gallery__item">
      <button
        class="gallery__button"
        type="button"
        data-index="${index}"
        aria-label="${escapeHtml(photo.title)} in Großansicht öffnen"
      >
        ${renderThumbnailImage(photo)}
      </button>
    </li>
  `;
}

function renderGalleryList(photos) {
  return photos.map(renderThumbnail).join('');
}
