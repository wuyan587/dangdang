/*
    给图片的列表加个banner_item
    给小按钮的列表加个banner_btn
    给向左按钮加个banner_prev
    给向右按钮加个banner_next
    type的类型为'normal'和'opacity','ppt'
    time:轮播间隔
    activename:小按钮，你要激活时候加的类名
*/
(function ($) {
    $.fn.banner = function (options) {
        let settings = {
            btn: $('.banner_btn li'),
            items: $('.banner_item li'),
            prev: $('.banner_prev'),
            next: $('.banner_next'),
            type: 'normal',
            time:1000,
            activename:'active',
            itemswidth:''
        }
        $.extend(settings, options);
        
        let index = 0, timer = null, _this = $(this),$width=0;
        if(settings.itemswidth){
            $width=settings.itemswidth;
        }else{
            $width= $(this).find(settings.items).first().width();
        }
        init(settings.type);
        $(this).each(function () {
            let _this = $(this);
            $(this).find(settings.btn).on('click', function () {
                index = $(this).index();
                changetype(settings.type, index);
            })
            timer = setInterval(function () {
                _this.find(settings.next).trigger('click');
            }, settings.time)
            _this.hover(function () {
                _this.find(settings.prev).stop(true).animate({
                    left: 0
                })
                _this.find(settings.next).stop(true).animate({
                    right: 0
                })
                clearInterval(timer);
            }, function () {
                _this.find(settings.prev).stop(true).animate({
                    left: -48
                })
                _this.find(settings.next).stop(true).animate({
                    right: -48
                })
                timer = setInterval(function () {
                    _this.find(settings.next).trigger('click');
                }, settings.time)
            })
            _this.find(settings.prev).on('click', function () {
                index--;
                if (settings.type == "ppt") {
                    changetype(settings.type, index);
                    if (index < 0) {
                        index = _this.find(settings.items).size() - 1;
                    }
                } else {
                    if (index < 0)
                        index = _this.find(settings.items).size() - 1;           
                    changetype(settings.type, index);
                }
            })
            _this.find(settings.next).on('click', function () {
                index++;
                if (settings.type == "ppt") {
                changetype(settings.type, index);
                if (index >= _this.find(settings.items).size() ) {
                        index = 0;
                    }
                } else {
                    if (index > _this.find(settings.items).size() - 1)
                        index = 0;
                    changetype(settings.type, index);
                }
            })
            function normalchange(a) {
                _this.find(settings.btn).eq(a).addClass(settings.activename).siblings().removeClass(settings.activename);
                _this.find(settings.items).eq(a).show().siblings().hide();
            }
            function opchange(a) {
                _this.find(settings.btn).eq(a).addClass(settings.activename).siblings().removeClass(settings.activename);
                _this.find(settings.items).eq(a).stop(true).animate({
                    opacity: 1
                }, 1000).siblings().not('.banner_prev').not('.banner_next').animate({
                    opacity: 0
                }, 1000)
            }
            function pptchange(a) {
                if (a <= -1) {
                    _this.find(settings.btn).eq(_this.find(settings.btn).length-1).addClass(settings.activename).siblings().removeClass(settings.activename);
                    _this.find('.banner_item').stop(true).animate({
                        left: -$width * (a+1)
                    },function(){
                        $(this).css("left",-$width *  _this.find(settings.btn).length)
                    })
                } else if (a >= _this.find(settings.items).length) {
                    _this.find(settings.btn).eq(0).addClass(settings.activename).siblings().removeClass(settings.activename);
                    _this.find('.banner_item').stop(true).animate({
                        left: -$width * (a+1)
                    },function(){
                        $(this).css("left",-$width)
                    })
                } else {
                    _this.find(settings.btn).eq(a).addClass(settings.activename).siblings().removeClass(settings.activename);
                    _this.find('.banner_item').stop(true).animate({
                        left: -$width * (a+1)
                    })
                }
            }
            function changetype(str, a) {
                switch (str) {
                    case 'normal': normalchange(a); break;
                    case 'opacity': opchange(a); break;
                    case 'ppt': pptchange(a); break;
                }
            }

        })
        function init(str) {
            switch (str) {
                case 'normal':
                    _this.find(settings.items).each(function () {
                        $(this).hide().css({
                            opacity: 1
                        });
                    })
                    _this.find(settings.items).eq(index).show();
                    break;
                case 'opacity':
                    _this.find(settings.items).each(function () {
                        $(this).show().css({
                            opacity: 0
                        });
                    })
                    _this.find(settings.items).eq(index).css({
                        opacity: 1
                    })
                    break;
                case 'ppt':
                    
                    _this.find(settings.items).each(function () {
                        $(this).show().css({
                            opacity: 1,
                            float: 'left',
                            position: 'static'
                        });
                    })
                    let a = _this.find(settings.items).first().clone();
                    let b = _this.find(settings.items).last().clone();
                    a.appendTo(_this.find('.banner_item'));
                    b.prependTo(_this.find('.banner_item'));
                    _this.find('.banner_item').css({
                        position: 'absolute',
                        float: 'left',
                        left: -$width,
                        width: $width * _this.find('.banner_item li').length
                    })
                    break;
            }
        }
    }
})(jQuery)