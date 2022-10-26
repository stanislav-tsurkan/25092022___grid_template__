$(document).ready(function () {
  $(".header-navbar__btn").on("click", function () {
    $(this).toggleClass("header-navbar__btn--active");
    $(".header-navbar__list")
      .toggleClass("active")
      .stop(true, true)
      .slideToggle(500);
  });
});
