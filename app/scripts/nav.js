import $ from 'jquery'
// import TweenLite from 'gsap'
import showModal from './modal'

export default function () {
  const $section = $('section')
  const $learnMore = $('.lead__learn-more')
  $section.on('click', function () {
    const $this = $(this)

    if (!$this.hasClass('previewed')) {
      // own elements
      const $titleText = $this.find('.title__text')
      const $lead = $this.find('.lead')
      const $learnMore = $this.find('.lead__learn-more')

      // siblings elements
      const $siblings = $this.siblings()
      const $siblingsTitleText = $siblings.find('.title__text')
      const $siblingsLead = $siblings.find('.lead')
      const $sibligsLearnMore = $siblings.find('.lead__learn-more')

      $siblings.removeClass('previewed')
      $this.addClass('previewed')
      $siblingsTitleText.hide()
      $siblingsLead.hide().css({
        maxHeight: 0,
        opacity: 0
      })
      $sibligsLearnMore.css({ opacity: 0 })

      if (!$this.hasClass('syndicate')) {
        setTimeout(function () {
          $titleText.fadeIn(300)
          $lead.show().css({
            maxHeight: $lead[0].scrollHeight,
            opacity: 1
          })
        }, 300)
        setTimeout(function () {
          $learnMore.css({ opacity: 1 })
        }, 700)
      }
    }
  })

  $learnMore.on('click', function (e) {
    e.stopPropagation()
    const cell = $(this).attr('data-article')
    const container = document.getElementById('root-container')
    window.flkty.select(cell, true, true)
    showModal(container)
  })
}
