require(['config'], function () { //调用config配置模块
    require(['jquery','banner','xuanran'], function ($) { //加载模块 
       (function(){
        console.log($('.banner_home').find('.banner_item li'));
         $('.banner_home').banner({
                    type: 'ppt'
                });
         $('.book_banner_1').banner({
                    type: 'ppt',
                    activename: 'on'
                });
         $('.book_banner_floor_1').banner({
                    type: 'ppt',
                    time: 3000,
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
            })();
    })
})