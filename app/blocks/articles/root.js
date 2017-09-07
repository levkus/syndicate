import Flickity from 'flickity'

export default function () {
  console.log(Flickity)
  const carousel = document.getElementById('carousel')
  const flkty = new Flickity(carousel, {
    cellAlign: 'center',
    setGallerySize: false,
    // watchCSS: true,
    wrapAround: true,
    dragThreshold: 100,
    resize: true,
    friction: 1,
    selectedAttraction: 0.2
  })

  window.flkty = flkty
}
