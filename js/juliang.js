/*
* @Author: yanxiaoli
* @Date:   2019-02-22 17:11:55
* @Last Modified by:   yanxiaoli
* @Last Modified time: 2019-02-22 19:30:46
*/
$(function () {
    $(window).on('scroll', function () {
        var $scroll = $(this).scrollTop();
        if ($scroll >= 500) {
            $('#loutinav').addClass("fixed");
        } else {
            $('#loutinav').removeClass("fixed");
        }

        $('.louti').each(function () {
            var $loutitop = $('.louti').eq($(this).index()).offset().top + 400;
            if ($loutitop > $scroll) {
                $('#loutinav .menu li').eq($(this).index()).addClass('active').siblings().removeClass('active');
                return false; 
            }
            
        });
    });
    var $loutili = $('#loutinav .menu li,.footerMenu ul li');
    $loutili.on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var $loutitop = $('.louti').eq($(this).index()).offset().top - 100;
        $('html,body').animate({
            scrollTop: $loutitop
        })
    });
})