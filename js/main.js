$(function () {
  // $('.questions__item-title').on('click', function () {
  //   $('.questions__item').removeClass('questions__item--active');
  //   $(this).parent().addClass('questions__item--active');
  // });
});

$(function () {
  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
    $(this).next().toggleClass('menu__list--active');
  });
  $('.menu__list-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });
});
