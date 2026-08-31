class Lightbox {
  constructor(root) {
    this.root = root;
    this.dialog = root.querySelector('.lightbox__dialog');
    this.image = root.querySelector('#lightbox-image');
    this.title = root.querySelector('#lightbox-title');
    this.counter = root.querySelector('#lightbox-counter');
    this.currentIndex = 0;
    this.triggerElement = null;
    this.bindEvents();
  }

  bindEvents() {
    this.root.querySelectorAll('[data-close]').forEach((element) => {
      element.addEventListener('click', () => this.close());
    });
    this.root.querySelector('#lightbox-prev').addEventListener('click', () => this.showPrevious());
    this.root.querySelector('#lightbox-next').addEventListener('click', () => this.showNext());
    document.addEventListener('keydown', (event) => this.handleKeydown(event));
  }

  handleKeydown(event) {
    if (this.root.hidden) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowLeft') this.showPrevious();
    if (event.key === 'ArrowRight') this.showNext();
    if (event.key === 'Tab') this.trapFocus(event);
  }

  trapFocus(event) {
    const focusable = this.dialog.querySelectorAll('button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  open(index, triggerElement) {
    this.currentIndex = index;
    this.triggerElement = triggerElement;
    this.render();
    this.root.hidden = false;
    this.dialog.querySelector('.lightbox__close').focus();
  }

  close() {
    this.root.hidden = true;
    this.triggerElement?.focus();
  }

  showPrevious() {
    const total = PHOTOS.length;
    this.currentIndex = (this.currentIndex - 1 + total) % total;
    this.render();
  }

  showNext() {
    const total = PHOTOS.length;
    this.currentIndex = (this.currentIndex + 1) % total;
    this.render();
  }

  render() {
    const photo = PHOTOS[this.currentIndex];
    this.image.src = photo.fullSrc;
    this.image.alt = photo.alt;
    this.title.textContent = photo.title;
    this.counter.textContent = `${this.currentIndex + 1}/${PHOTOS.length}`;
  }
}
