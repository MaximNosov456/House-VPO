$(function () {
  $(".hamburger, .menu__list-link").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".menu").toggleClass("active");
  });

  $(".menu").on("click", function (e) {
    e.preventDefault();
    const id = $(e.target).attr("href");
    const top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  // new WOW().init();
});
