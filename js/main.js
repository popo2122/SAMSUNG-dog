$(function () {
  mainHeight = $("#main").height();
  enrollHeight = $("#enroll").height();

  //header menu slid down
  $("#header__menu-btn").click(function () {
    $(".header__menu").slideDown(500);
    $(this).css({
      display: "none",
    });
    $("#header__close__btn").css({
      display: "block",
    });
  });
  //header menu slide up
  $("#header__close__btn").click(function () {
    $(".header__menu").slideUp(500);
    $(this).css({
      display: "none",
    });
    $("#header__menu-btn").css({
      display: "block",
    });
  });
  //
  //
  //
  //main 반응형 resize값 설정
  var ww = $(window).width();

  function layout() {
    if (ww >= 1440) {
      //pc값
      $("#wrap").css({
        width: ww,
      });
      $("#main").css({
        width: ww,
        height: ww * 0.562,
      });
      $(".main__text-box").css({
        width: ww * 0.26,
        height: ww * 0.312,
      });
      $(".main__img01").css({
        width: ww * 0.26,
        height: ww * 0.26,
      });
      $(".main__img02").css({
        width: ww * 0.208,
        height: ww * 0.156,
      });
      $(".main__img03").css({
        width: ww * 0.156,
        height: ww * 0.156,
      });
      $(".main__img04").css({
        width: ww * 0.156,
        height: ww * 0.13,
      });
      $(".scroll__name").css({
        marginBottom: ww * 0.005,
      });
    } else if (ww < 1440 && ww >= 960) {
      //tab값
      $("#wrap").css({
        width: ww,
      });
      $("#main").css({
        width: ww,
        height: ww * 0.75,
      });
      $(".main__text-box").css({
        width: ww * 0.277,
        height: ww * 0.347,
      });
      $(".main__img01").css({
        width: ww * 0.277,
        height: ww * 0.277,
      });
      $(".main__img02").css({
        width: ww * 0.208,
        height: ww * 0.138,
      });
      $(".main__img03").css({
        width: ww * 0.173,
        height: ww * 0.173,
      });
      $(".main__img04").css({
        width: ww * 0.173,
        height: ww * 0.138,
      });
      $(".scroll__name").css({
        marginBottom: ww * 0.006,
      });
    } else if (ww < 960) {
      //mobile값
      $("#wrap").css({
        width: ww,
      });
      $("#main").css({
        width: ww,
        height: ww * 0.833,
      });
      $(".main__text-box").css({
        width: ww * 0.291,
        height: ww * 0.364,
      });
      $(".main__img01").css({
        width: ww * 0.364,
        height: ww * 0.364,
      });
      $(".main__img02").css({
        width: ww * 0.26,
        height: ww * 0.156,
      });
      $(".main__img03").css({
        width: ww * 0.208,
        height: ww * 0.208,
      });
      $(".main__img04").css({
        width: ww * 0.208,
        height: ww * 0.156,
      });
      $(".scroll__name").css({
        marginBottom: ww * 0.006,
      });
    }
  }
  layout();

  $(window).resize(function () {
    ww = $(window).width();
    layout();
  });

  //main image fade-in
  $(".main__img-box").each(function (i) {
    $(this)
      .delay(i * 1500)
      .fadeIn(700);
  });

  $(".main__text-box").delay(5000).transition(
    {
      rotateY: "0deg",
      opacity: 1,
    },
    1500
  );
  //
  //
  //
  //안내견 신청 btn hover시 btn 색상변경
  $("#enroll__btn").hover(
    function () {
      $(this)
        .css({
          backgroundColor: "#1428a0",
        })
        .stop()
        .animate({
          top: "50%",
        });
      $("#enroll__btn>button").css({
        color: "#f6c453",
      });
      $(".enroll__arrow>img").attr({
        src: "img/enroll_arrow-hover.png",
      });
    },
    function () {
      $("#enroll__btn")
        .css({
          backgroundColor: "#ffffff",
        })
        .stop()
        .animate({
          top: "45%",
        });
      $("#enroll__btn>button").css({
        color: "#1428a0",
      });
      $(".enroll__arrow>img").attr({
        src: "img/pc-right_arrow.png",
      });
    }
  );
  $(window).resize(function () {
    ww = $(window).width();
  });
  //안내견 신청 text 스크롤 시 나타나기
  scroll = true;
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    ww = $(window).width();
    mainHeight = $("#main").height();
    if (scroll == true && sct > mainHeight) {
      $(".enroll__desc").animate(
        {
          top: "80%",
          opacity: 1,
        },
        1000
      );
      scroll = false;
    }
  });
  //
  //
  //
  //안내견 학교 설명 스크롤 시 이미지 scale, text fade-up순서대로 적용
  textscroll = true;
  $(window).scroll(function () {
    if (textscroll == true && sct > mainHeight * 1.8) {
      $(".job__img>img").each(function (i) {
        $(this)
          .delay(i * 1500)
          .transition(
            {
              scale: 1.1,
            },
            3500
          );
      });

      $(".job__title").each(function (i) {
        $(this)
          .delay(i * 1500)
          .transition(
            {
              transform: "translateY(0px)",
              opacity: 1,
            },
            2000
          );
      });

      $(".job__desc").each(function (i) {
        $(this)
          .delay(i * 2000)
          .transition(
            {
              translate: "0, 0",
              opacity: 1,
            },
            2000
          );
      });
      textscroll = false;
    }
  });
  //
  //
  //
  //자원봉사 신청 스크롤 aos initialize
  AOS.init();

  //안내견 추모관 swiper
  var swiper = new Swiper(".memorial-swiper-container", {
    breakpoints: {
      1920: {
        slidesPerView: 4.2,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2.8,
        spaceBetween: 10,
      },
      960: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      560: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      },
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
    grabCursor: true,
    loop: true,
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
      delay: 2000,
    },
  });
  //
  //

  //스크롤 시 show and hide fixed btn
  function showAndHideFixed(position, align, margin, text) {
    $("#fixed__enroll-btn").css({
      opacity: 1,
      right: position,
      alignItems: align,
      visibility: "visible",
    });
    $(".fixed__text").css({
      marginLeft: margin,
    });
    $(".fixed__text>p").text(text);
  }

  function hidePosition() {
    if (ww >= 960) {
      showAndHideFixed("-10%", "flex-start", 50, "CLICK");
    } else if (ww >= 700 && ww < 960) {
      showAndHideFixed("-12%", "flex-start", 25, "CLICK");
    } else if (ww < 700) {
      showAndHideFixed("-20%", "flex-start", 25, "CLICK");
    }
  }

  //윈도우 리사이즈 시 fixed btn position to right side(text change to 'click')
  function fixedLayout() {
    ww = $(window).width();
    if (ww >= 960) {
      showAndHideFixed("-10%", "flex-start", 50, "CLICK");
    } else if (ww >= 700 && ww < 960) {
      showAndHideFixed("-12%", "flex-start", 25, "CLICK");
    } else if (ww < 700) {
      showAndHideFixed("-20%", "flex-start", 25, "CLICK");
    }
  }

  $(window).resize(function () {
    ww = $(window).width();
    sct = $(window).scrollTop();
    if (sct < mainHeight + enrollHeight) {
      $("#fixed__enroll-btn").css({
        opacity: 0,
      });
    } else {
      fixedLayout();
    }
  });

  //스크롤 시 fixed btn 오른쪽으로 숨기기(click으로 바뀜)
  var lastScrollTop = 0;
  $(window).scroll(function () {
    if (sct <= mainHeight) {
      $("#fixed__enroll-btn").css({
        opacity: 0,
        visibility: "hidden",
      });
      return;
    }
    if (sct > lastScrollTop && lastScrollTop > 0) {
      hidePosition();
    } else if (sct + $(window).height() < $(document).height()) {
      //스크롤 시 자동으로 오른쪽으로 숨기기
      hidePosition();
    }
    lastScrollTop = sct;
  });

  //클릭 시 fixed btn 왼쪽으로 나옴
  $("#fixed__enroll-btn").click(function () {
    showAndHideFixed("2%", "center", 0, "안내견신청하기");
  });
}); //end
