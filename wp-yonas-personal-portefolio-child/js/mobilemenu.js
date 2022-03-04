jQuery(document).ready(function ($) {
  $('.menu-toggle').click(function (event) {
    var visibleSubmenu = $('.menu-main-menu-container');
    var submenu = $(this).next('ul');

    if (submenu.length >= 1) {
      event.preventDefault();
      visibleSubmenu.slideUp();
      submenu.slideToggle();
    }
  });
});
