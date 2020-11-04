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

  $("#services-forAbout.bg-color .owl-carousel").owlCarousel({
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


    // form ucun

    function fillInput(selectedId, valueSelect) {
      $(`${selectedId}`).click(function () {
        var oldactive = $(".actived");
        var oldrotate = $(".rotate");
        $(`${selectedId} ul`).addClass("actived");
        $(`${selectedId} i`).addClass("rotate");
        $(`${selectedId} ul`).fadeIn();
        if (oldactive != null) {
          oldactive.removeClass("actived");
          $(oldactive).fadeOut();
          oldrotate.removeClass("rotate").css("transition", "all 0.5s");
        }
      });
  
      var lis = [...$(`${selectedId} ul li`)];
      lis.forEach((s) => {
        $(s).click(function () {
          $(`${selectedId} .selected`).removeClass("selected");
          $(s).addClass("selected");
          $(`${valueSelect}`).text(s.innerText);
        });
      });
    }
  
    fillInput("#gender", "#gendercurrent");
    fillInput("#category", "#categorycurrent");
});
