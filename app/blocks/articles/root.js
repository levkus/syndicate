import Flickity from 'flickity'

export default function () {
  const carousel = document.getElementById('carousel')
  const flkty = new Flickity(carousel, {
    cellAlign: 'center',
    // setGallerySize: false,
    // watchCSS: true,
    adaptiveHeight: true,
    wrapAround: true,
    dragThreshold: 100,
    resize: true,
    friction: 1,
    selectedAttraction: 0.2,
    prevNextButtons: false,
    pageDots: false
  })

  window.flkty = flkty
  window.carousel = carousel
}
