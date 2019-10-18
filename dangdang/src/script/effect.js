define(['jquery', 'banner', 'tap'], function ($) {
    return {
        bannereffect: function () {
            $('.banner_home').banner({
                type: 'ppt'
            });
            $('.book_banner_1').banner({
                type: 'ppt',
                activename: 'on'
            });
            $('.book_banner_2').banner({
                type: 'opacity',
                activename: 'on',
                time: 2000
            });
            $('.book_banner_3').banner({
                type: 'normal',
                activename: 'on'
            });
            $('.book_banner_4').banner({
                type: 'ppt',
                activename: 'on',
                time: 2000
            });
            $('.book_banner_5').banner({
                type: 'opacity',
                activename: 'on',
                time: 2000
            });
            $('.book_banner_floor_1').banner({
                type: 'opacity',
                time: 2000,
                activename: 'on'
            });
            $('.book_banner_floor_2').banner({
                type: 'normal',
                time: 2000,
                activename: 'on'
            });
            $('.book_banner_floor_3').banner({
                type: 'opacity',
                time: 2000,
                activename: 'on'
            });
            $('.book_banner_floor_4').banner({
                type: 'ppt',
                time: 2000,
                activename: 'on'
            });
            $('.book_banner_floor_5').banner({
                type: 'ppt',
                time: 2000,
                activename: 'on'
            });
            $('.floor_bottom').banner({
                items: $('.floor_bottom ul'),
                type: 'ppt',
                time: 2000
            });
            $('.banner_top').banner({
                type: 'ppt',
                time: 2000
            });
            $('.banner_bottom').banner({
                items: $('.banner_bottom ul'),
                type: 'opacity',
                time: 2000
            });
        },
        tapeffect: (function () {
            $('.tap_home').tap();
            $('.firm').tap()
            $('.book_right').tap();
            $('.book_left_content').tap({
                type: 'opacity'
            });
            $('.floor_content').tap({
                type: 'opacity'
            });
        })(),
        other: function () {
            $('.book_muen_content ul').on('mouseenter', 'li', function () {
                $(this).addClass('hover').siblings().removeClass('hover');
            })
            $('.book_right_content').on('mouseenter', '.line1', function (ev) {
                $(this).hide().siblings('.book_right_content .line1').show();
                $('.line2').eq($(this).index('.book_right_content .line1')).show().siblings('.line2').hide();
            })
            $('.act_bottom li').hover(function () {
                $(this).find('.sp').hide();
                $(this).find('.zz').show();
            }, function () {
                $(this).find('.zz').hide();
                $(this).find('.sp').show();
            })
            $('#publictop').load('header.html');
            $('#publicfoot').load('footer.html');
            $('.inner aside').on('mousemove', function (ev) {
                if (ev.target.nodeName == "LI") {
                    $(ev.target).addClass('on').siblings().removeClass('on');
                    $('.inner aside .content').show();
                }

            })
            $('.inner aside').on('mouseleave', function () {
                $('.inner aside ul li').removeClass('on');
                $('.inner aside .content').hide();
            })
        },
        louti: (function () {

            let flag = true;
            $(window).on('scroll', function (ev) {
                if ($(window).scrollTop() > 300) {
                    $('.top_search_warp').show().stop(true).animate({
                        opacity: 1
                    })
                    $('.fix_box').stop(true).animate({
                        opacity: 1
                    })
                    if (flag) {
                        $('.louc').each(function (index) {
                            let $loucengtop = $('.louc').eq(index).offset().top + 200;
                            if ($loucengtop > $(window).scrollTop()) {
                                $('.fix_box li').removeClass('on');
                                $('.fix_box li').eq(index).addClass('on');
                                return false;
                            }
                        })
                    }
                }

                if ($(window).scrollTop() < 300) {
                    $('.top_search_warp').stop(true).animate({
                        opacity: 0
                    }, function () {
                        $('.top_search_warp').hide();
                    })
                    $('.fix_box').stop(true).animate({
                        opacity: 0
                    })
                }
            })

            $('.fix_box').hover(function () {
                $(this).children().css('width', 'auto');
                $(this).on('mousemove', 'li', function () {
                    $(this).addClass('on').siblings().removeClass('on');
                })
            }, function () {
                $(this).children().css('width', '38px');
            })

            $('.fix_box li').on('click', function () {
                flag = false;
                let $loucengtop = $('.louc').eq($(this).index()).offset().top - 60;
                $('html,body').animate({
                    scrollTop: $loucengtop
                }, function () {
                    flag = true;
                });
            })
        })()
    }
})