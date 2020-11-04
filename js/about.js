$(document).ready(function () {
  // responsivlikdə navdaki hover'ların click'ə çevrilməsi

  $("nav button").click(function () {
    if ($("nav button span").hasClass("fa-bars")) {
      $("nav button span").removeClass("fa-bars").addClass("fa-times");
    } else {
      $("nav button span").removeClass("fa-times").addClass("fa-bars");
    }
  });

  function SetNavbarResponsibility() {
    if ($(window).width() < 992) {
      $(".nav-item").off("click");

      $(".nav-item").click(function () {
        $(".dropdown").removeClass("shadow");

        if ($(this).children(".dropdown").hasClass("d-block")) {
          $(this)
            .children("a")
            .children("i.fa-angle-right")
            .css("transform", "rotate(0deg)");
          $(this)
            .children(".dropdown")
            .removeClass("d-block")
            .addClass("d-none");
        } else {
          $(this)
            .children(".dropdown")
            .removeClass("d-none")
            .addClass("d-block");
          $(this)
            .children("a")
            .children("i.fa-angle-right")
            .css("transform", "rotate(90deg)");
        }
      });
    } else {
      $(".nav-item").off("click");
      $(".nav-item .dropdown").removeClass("d-block");
      $(".nav-item .dropdown").removeClass("d-none");
    }
  }

  SetNavbarResponsibility();

  $(window).resize(function () {
    SetNavbarResponsibility();
  });

  // navbar fixed-top olmasi

  window.addEventListener("scroll", function () {
    // console.log(scrollY);
    if (scrollY > 60) {
      $("nav").addClass("fixed-top");
    } else {
      $("nav").removeClass("fixed-top");
    }
  });

  // preloader

  setTimeout(() => {
    $(".preloader").removeClass("active");
  }, 1000);

  // carousel ucun

  $("#testimonials .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dotsEach: 2,
    nav: false,
    responsive: {
      0: {
        items: 1,
        dotsEach: 1,
      },
      600: {
        items: 1,
        dotsEach: 1,
      },
      1000: {
        items: 2.5,
      },
    },
  });

  $("#services-forAbout .owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  //
});
