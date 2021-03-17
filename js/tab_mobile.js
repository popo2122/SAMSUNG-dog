$(function () {
    //안내견 학교 설명 스크롤 시 이미지 scale, text fade-up순서대로 적용
    var mainHeight = $("#main").height();
    var enrollHeight = $('#enroll').height();
    var ww = $(window).width();
    var scroll = true;
    $(window).scroll(function () {
        sct = $(window).scrollTop();
        if (sct > mainHeight +enrollHeight && scroll == true) {
            $(".mo-job__img>img").each(function (i) {
                $(this)
                    .delay(i * 1500)
                    .transition({
                            scale: 1.1,
                        },
                        3500
                    );
            });

            $(".mo-job__text-box").each(function (i) {
                $(this)
                    .delay(i * 1500)
                    .animate({
                            opacity: 1,
                        },
                        1500
                    );
            });

            $(".mo-job__desc-box").each(function (i) {
                $(this)
                    .delay(i * 1500)
                    .transition({
                            translate: "0,0",
                            opacity: 1,
                        },
                        1500
                    );
            });
            scroll = false;
        }
    });

    //자원봉사 신청 안내 swiper
    var swiper = new Swiper(".volunteer-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        centeredSlides: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}); //end
