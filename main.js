$(window).scroll(function () {
  if ($(window).scrollTop() > 550) {
    $(".navigation").css({
      "max-height": "60px",
      padding: "15px",
      "box-shadow": "0px 0px 5px 0px",
    });
  } else {
    $(".navigation").css({
      "max-height": "110px",
      padding: "15px",
      "box-shadow": "none",
    });
  }
});
$(document).ready(function () {
  $(".navigation__navbar_link__element__link-button").click(function () {
    $(".navigation__navbar_link__element__link-button").css({
      "border-bottom": "none",
    });
    $(this).css({
      "border-bottom": "2px solid black",
    });
  });
});
$(window).scroll(function () {
  if ($(window).scrollTop() == 0) {
    $(".navigation").css({
      "box-shadow": "none",
    });
  } else {
    $(".navigation").css({
      "box-shadow": "0px 0px 5px 0px",
    });
  }
});
