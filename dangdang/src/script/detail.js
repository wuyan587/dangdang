define(['jquery'], function () {
        return {
                qy :0 ,
                xf :0,
                df : 0,
                xt :0,
                dt :0 ,
                tlist :0 ,
                link :0 ,
                bl :0 ,
                sbx : 0,
                sby : 0,
                pyx : 0,
                pyy : 0,
                gl : 0,
                cookie : [],
                cookienum : [],
            init:function() {
             this.qy = $('.small');
             this.xf = $('.small_f');
             this.df = $('.big');
             this.xt = $('.small_pic');
             this.dt = $('.big img');
             this.tlist = $('.p_img_list_box');
             this.link = $('.list_e');
             this.bl=this.df.height() / this.xf.height();
                this.gl = $(window).scrollTop();
                let _this = this;
                this.tpqh();
                $(window).on('scroll', function () {
                    _this.gl = $(window).scrollTop();
                })
                this.qy.hover(function () {
                    _this.df.show();
                    _this.xf.show();
                }, function () {
                    _this.df.hide();
                    _this.xf.hide();
                })
                this.qy.on('mousemove', function (ev) {
                    _this.sbx = ev.clientX;
                    _this.sby = ev.clientY;
                    _this.yidong(_this.xf);
                    _this.yidong(_this.dt);

                })
                this.choose(this.link);
                this.buy();
                this.cart()

            },
            yidong:function(obj) {
                if (obj == this.xf) {
                    this.pyx = this.sbx - this.xt.offset().left - obj.width() / 2;
                    this.pyy = this.sby - this.xt.offset().top - obj.height() / 2 + this.gl;
                    if (this.pyx <= 0) {
                        this.pyx = 0;
                    } else if (this.pyx >= this.xt.offset().left) {
                        this.pyx = this.xt.offset().left;
                    }
                    if (this.pyy <= 0) {
                        this.pyy = 0;
                    } else if (this.pyy >= this.xt.height() - this.xf.height()) {
                        this.pyy = this.xt.height() - this.xf.height();
                    }
                    obj.css(
                        {
                            "left": this.pyx,
                            "top": this.pyy
                        }
                    )
                } else if (obj == this.dt) {
                    obj.css(
                        {
                            "left": -this.pyx * this.bl,
                            "top": -this.pyy * this.bl

                        }
                    )
                }
            },
            tpqh:function() {
                let _this = this;
                this.tlist.find('li').on('click', function () {
                    _this.dt.attr('src', $(this).find('img').attr('src'));
                    _this.xt.find('img').attr('src', $(this).find('img').attr('src'));
                })
            },
            choose:function(a) {
                a.on('click', 'a', function () {
                    a.find('a').each(function () {
                        $(this).removeClass("chose");
                    })
                    $(this).addClass("chose");
                })
            },
            buy:function() {
                let num = 0;
                $('.p_buybox .add').on('click', function () {
                    num = $('.p_buybox input').val();
                    num++;
                    $('.p_buybox input').val(num);
                })
                $('.p_buybox .del').on('click', function () {
                    num = $('.p_buybox input').val();
                    num--;
                    if (num < 0)
                        num = 0;
                    $('.p_buybox input').val(num);
                })
            },
            cart:function() {
                let _this = this, sid = location.search.substring(1).split('=')[1];
                if ($.cookie('sid') && $.cookie('num')) {
                    this.cookie = this.cookie.concat($.cookie('sid').split(','));
                    this.cookienum = this.cookienum.concat($.cookie('num').split(','));
                } else {

                }
                if ($.cookie('num') == undefined) {
                    this.cookienum = [];
                } else {

                }
                $('.buycart').on('click', function () {
                    alert('加入完成');
                    if (_this.cookie.indexOf(sid) != -1) {
                        _this.cookienum[_this.cookie.indexOf(sid)] = Number(_this.cookienum[_this.cookie.indexOf(sid)]) + Number($('.p_buybox input').val());
                    } else {
                        _this.cookie.push(sid);
                        _this.cookienum.push($('.p_buybox input').val());
                    }
                    $.cookie('sid', _this.cookie);
                    $.cookie('num', _this.cookienum);
                    location.href = 'http://10.31.155.71/dangdang/dangdang/src/cart.html';
                })
            },
        }   
})