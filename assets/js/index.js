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

		$('.navi-scroll a').on('click', function (e) {
			var target = $(this).attr('href');
			$("html, body").animate({
				scrollTop: $(target).offset().top - 60
			}, "slow");
			e.preventDefault();
		});  
    };

    return {
        init: function () {
            initNavi();
        }
    };
}();

(function ($) {
    Main.init();
})(jQuery);