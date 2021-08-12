﻿var Main = function () {
    var initNavi = function () {
        $(".menu-toggle").on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('menu-active');
        });
        $(document).on('click', function (event) {
            console.log($(event.target).closest('.menu-toggle'))
            if (!$(event.target).closest('.mobile-overlay-menu').length && !$(event.target).closest('.menu-toggle').length) {
                $('body').removeClass('menu-active');
            }
        });

        $('.page-navi a').on('click', function (e) {
            var target = $(this).attr('href');
            $("html, body").animate({
                scrollTop: $(target).offset().top - 30
            }, "slow");
            e.preventDefault();
        });
    };

    var catalogSwiper = new Swiper('.product-swiper', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
            dragSize: 90
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2
            },
            // when window width is >= 980px
            980: {
              slidesPerView: 3
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4
            }
          }
    });

    return {
        init: function () {
            initNavi();
        }
    };
}();

$(document).ready(function ($) {
    Main.init();
    new WOW().init();
});