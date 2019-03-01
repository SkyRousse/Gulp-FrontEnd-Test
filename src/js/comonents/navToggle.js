import $ from 'jquery';

const selectors = {
  hamburgerIcon: '.mobile-nav-toggle',
  closeNavIcon: '.pullout-close',
  nav: '#mobile-nav'
}

const open = ($el) => {
  $el.slideDown();
}

const close = ($el) => {
  $el.slideUp();
}

const navToggle = () => {
  const $nav = $(selectors.nav);
  $(selectors.hamburgerIcon).on('click', () => open($nav));
  $(selectors.closeNavIcon).on('click', () => close($nav));
}

export default navToggle;
