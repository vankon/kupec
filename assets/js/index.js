var Main = function () {
    var initNavi = function () {
        $(".toggle-dd").on('click', function (e) {
            e.preventDefault();
            var $item = $(this).closest('.navi');
            $item.toggleClass('active').siblings().removeClass('active');
        });
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.navi').length) {
                $('.navi').removeClass('active');
            }
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

(function ($) {
    Main.init();
})(jQuery);