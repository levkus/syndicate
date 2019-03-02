import svg4everybody from 'svg4everybody'
import $ from 'jquery'
import nav from './nav'
import root from '../blocks/articles/root'

$(() => {
  const touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
  if (touchsupport) {
    $('body').addClass('touch')
  }
  svg4everybody()
  nav()
  root()
})
