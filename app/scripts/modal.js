export default function (content) {
  document.body.classList.add('modal-open')
  const overlay = document.createElement('div')
  const modal = document.createElement('div')
  const close = document.createElement('div')
  const root = document.getElementById('root')
  overlay.classList.add('overlay')
  modal.classList.add('modal')
  close.classList.add('modal__close')
  modal.appendChild(close)
  modal.appendChild(content)
  overlay.appendChild(modal)
  document.body.appendChild(overlay)

  function closeModal () {
    overlay.classList.remove('open')
    document.onkeydown = function (e) {
      e = e || window.event
      if (e.key === 'Escape' || e.key === 'Esc') {
        return false
      }
    }
    setTimeout(function () {
      if (content.id.length !== 0) {
        root.appendChild(content)
      }
      document.body.removeChild(overlay)
      document.body.classList.remove('modal-open')
    }, 200)
  }

  setTimeout(function () {
    overlay.classList.add('open')
    window.flkty.resize()
    // window.carousel.focus()
  }, 30)

  // Events

  close.onclick = function () {
    closeModal()
  }
  overlay.onclick = function () {
    closeModal()
  }
  document.onkeydown = function (e) {
    e = e || window.event
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal()
    }
  }
  modal.onclick = function (e) {
    e.stopPropagation()
  }
}
