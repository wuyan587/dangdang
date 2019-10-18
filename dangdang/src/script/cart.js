define(['jquery','jqcookie'],function(){
    return {
        effect:function(){
            let _this=this,num=0;
            $('.content').on('click', function (ev) {
                let chosebtn = $('.checknow').not('.fn-checkall').not('.fn-shop-checkall');
                let chosebtnon = $('.checkon').not('.fn-checkall').not('.fn-shop-checkall');
                let e = ev.target;
                switch (true) {
                    case $(e).hasClass('add'):
                        num = $(e).parent().find('input').val();
                        num++;
                        _this.zonjia($(e), num)
                        _this.setcookie($(e));
                        _this.jiage();
                        break;
                    case $(e).hasClass('del'):
                        num = $(e).parent().find('input').val();
                        num--;
                        if (num < 0)
                            num = 0;
                            _this.zonjia($(e), num)
                            _this.setcookie($(e));
                        break;
                    case $(e).hasClass('fn-checkall'):
                        if ($(e).hasClass('checkon')) {
                            $('.fn-checkall').removeClass('checkon');
                            chosebtn.removeClass('checkon');
                        } else {
                            $('.fn-checkall').addClass('checkon');
                            chosebtn.addClass('checkon');
                        }
                        _this.numb();
                        _this.jiage();
                        break;
                    case $(e).hasClass('pcheck'):
                        if ($(e).hasClass('checkon')) {
                                $(e).removeClass('checkon')
                            } else {
                                $(e).addClass('checkon');
                            }
                            if (chosebtn.filter('.checkon').length == chosebtn.length) {
                                $('.fn-checkall').addClass('checkon');
                            } else {
                                $('.fn-checkall').removeClass('checkon');
                            }
                            _this.numb();
                            _this.jiage();
                            break;
                    case $(e).hasClass('fn-remove-product'):
                            delcookie($(e));
                                    $(e).parentsUntil('tbody').parent().remove();
                                    _this.jiage()
                                    _this.numb();
                            break;
                    case $(e).hasClass('delete'):
                    chosebtnon.each(function () {
                                delcookie($(this));
                                $(this).parentsUntil('tbody').parent().remove();
                            })
                            _this.numb();
                            _this.jiage();
                            break;
                }
            })
        },
        inputnum:function(){
            let _this=this;
            $('input').on('blur', function () {
                num = $(this).parent().find('input').val();
                _this.zonjia($(this), num);
                _this.jiage();
                _this.setcookie($(this));
 })
        },
        jiage: function() {
            let z = 0;
            $('.shop_list').find('.checkon').parentsUntil('tbody').find('.row4 span').each(function () {
                z += +($(this).html().substring(1) * 100);
            })
            $('.money p:first span:last').html(z / 100);
        },
        setcookie:function(obj) {
            let n = obj.parentsUntil('tbody').find('input').val();
            let a = obj.parentsUntil('tbody').parent().find('tr').attr('sid');
            let b = $.cookie('sid').split(',');
            let c = $.cookie('num').split(',');
            c[b.indexOf(a)] = n;
            $.cookie('sid', b);
            $.cookie('num', c);
        },
        delcookie:function(obj) {
            let a = obj.parentsUntil('tbody').parent().find('tr').attr('sid');
            let b = $.cookie('sid').split(',');
            let c = $.cookie('num').split(',');
            b.splice(b.indexOf(a), 1);
            c.splice(b.indexOf(a), 1);
            $.cookie('sid', b);
            $.cookie('num', c);
        },
        numb:function() {
            $('.clearshop_left span i').html($('.shop_list').find('.checkon').length);
        },
        zonjia:function(obj, num) {
            let _this=this;
            price = num * (obj.parentsUntil('tbody').find('.row3 span').html() * 100);
            obj.parent().find('input').val(num);
            obj.parentsUntil('tbody').find('.row4 span').html('￥' + price / 100);
            _this.jiage();
        },
    }
})