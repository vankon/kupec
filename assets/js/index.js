var Main = function () {
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
        slidesPerView: 4,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: false,
            dragSize: 42
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false
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