import $ from 'jquery'
import TweenLite from 'gsap'
import showModal from './modal'

export default function () {
  const $section = $('section')
  const $learnMore = $('.lead__learn-more')
  $section.on('click', function () {
    const $this = $(this)

    if (!$this.hasClass('previewed')) {
      const $titleText = $this.find('.title__text')
      const $siblings = $this.siblings()
      const $siblingsTitle = $siblings.find('.title')
      const $siblingsTitleText = $siblings.find('.title__text')
      const $lead = $this.find('.lead')
      const $siblingsLead = $siblings.find('.lead')
      $siblings.removeClass('previewed')
      TweenLite.to($siblingsTitle, 0, { x: 0 })
      TweenLite.to($siblingsTitleText, 0, { autoAlpha: 0 })
      TweenLite.to($siblingsLead, 0, { autoAlpha: 0, maxHeight: 0 })
      $this.addClass('previewed')
      TweenLite.to($titleText, 0.5, { autoAlpha: 1 }).delay(0.3)
      if (!$this.hasClass('syndicate')) {
        TweenLite.to($lead, 0.5, { autoAlpha: 1, maxHeight: $lead[0].scrollHeight }).delay(0.5)
      }
    }
  })

  $learnMore.on('click', function (e) {
    e.stopPropagation()
    const cell = $(this).attr('data-article')
    const test = document.getElementById('root-container')
    console.log()
    window.flkty.select(cell, true, true)
    showModal(test)
  })
}
