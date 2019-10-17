require(['config'], function () { //调用config配置模块
    require(['jquery','jqcookie'], function ($) { //加载模块
        require(['jqlazyload','effect'], function (m1,m2) { 
        (function () {

          
  let linkurl = 'http://10.31.155.71/dangdang/dangdang/src/detail.html?';
            //渲染banner图
            $.ajax({
                type: 'post',
                url: "http://10.31.155.71/dangdang/dangdang/php/goodslist.php",
                data: {
                    typeof: 'banner'
                },
                dataType: 'json'
            }).done(function (datarr) {
                let htmlstr = '', htmlbtn = '', num = 0;
                for (let value of datarr) {
                    if (value.title == 'bigbanner') {
                        let arr = value.urls.split('，');
                        for (let value of arr) {
                            if (num == 0) {
                                htmlbtn += `<li class="active">${num + 1}</li>`;
                                htmlstr += ` <li style="position: absolute; z-index: 1;" class='show'> 
                                <a href="" title="" target="_blank">
                                    <img src="${value}" width="772" height="310">
                                </a> </li>`;
                            } else {
                                htmlbtn += `<li class="">${num + 1}</li>`;
                                htmlstr += ` <li style="position: absolute; z-index: 1;"> 
                                <a href="" title="" target="_blank">
                                    <img src="${value}" width="772" height="310">
                                </a> </li>`;
                            }
                            num++;
                        }
                        $('.banner_top .banner_btn').html(htmlbtn);
                        $('.banner_top .banner_item').html(htmlstr);
                    }
                    if (value.title == 'bottombanner') {
                        htmlbtn = '';
                        num = 0;
                        let arr = value.urls.split(',');
                        htmlstr = '<ul>';
                        for (let value of arr) {
                            if (num < 4) {
                                htmlstr += `<li><a href=""
                                    target="_blank" title="">
                                    <img src="${value}" width="192"
                                        height="172" title="" alt="">
                                    <span class="cover">
                                    </span></a></li>`
                            } else if (num == 4) {
                                htmlstr += `</ul><ul><li><a href=""
                                    target="_blank" title="">
                                    <img src="${value}" width="192"
                                        height="172" title="" alt="">
                                    <span class="cover">
                                    </span></a></li>`;
                            } else {
                                htmlstr += `<li><a href=""
                                    target="_blank" title="">
                                    <img src="${value}" width="192"
                                        height="172" title="" alt="">
                                    <span class="cover">
                                    </span></a></li>`
                            }
                            num++;
                        }
                        htmlstr += `</ul> <a href="javascrpit:;" class="banner_prev">
                        </a> <a href="javascrpit:;" class="banner_next">
                        </a>';`
                        $('.banner_bottom').html(htmlstr);
                    }
                    if (value.title == 'smallbanner') {
                        num = 0;
                        htmlstr = '';
                        htmlbtn = '';
                        let arr = value.urls.split(',');
                        for (let value of arr) {
                            if (num == 0) {
                                htmlbtn += `<li class="active"></li>`;
                                htmlstr += ` <li>
                                <a class=" _1  pic" href="" title="10月童书新书速递"
                                    target="_blank">
                                    <img src="${value}" width='202' height='119'
                                        title="10月童书新书速递" alt="10月童书新书速递"></a> </li>`;
                            } else {
                                htmlbtn += `<li class=""></li>`;
                                htmlstr += ` <li>
                                <a class=" _1  pic" href="" title="10月童书新书速递"
                                    target="_blank">
                                    <img src="${value}" width='202' height='119'
                                        title="10月童书新书速递" alt="10月童书新书速递"></a> </li>`;
                            }
                            num++;
                        }
                        $('.banner_home .banner_btn').html(htmlbtn);
                        $('.banner_home .banner_item').html(htmlstr);
                    }
                    if (value.title == 'bbanner') {
                        num = 0;
                        htmlstr = '';
                        htmlbtn = '';
                        let arr = value.urls.split(',');
                        for (let value of arr) {
                            if (num == 0) {
                                htmlbtn += `<li class="on">1</li>`;
                                htmlstr += ` <li class=""><a href="http://shop.dangdang.com/22190" target="_blank" class="pic"
                                title="红蜻蜓"><img src="${value}" width='335' height='220' alt="红蜻蜓"></a>
                        </li>`;
                            } else {
                                htmlbtn += `<li class=""></li>`;
                                htmlstr += `  <li class=""><a href="http://shop.dangdang.com/22190" target="_blank" class="pic"
                                title="红蜻蜓"><img src="${value}" width='335' height='220' alt="红蜻蜓"></a>
                        </li>`;
                            }
                            num++;
                        }
                        $('.book_banner .banner_btn').html(htmlbtn);
                        $('.book_banner .banner_item').html(htmlstr);
                    }
                    if (value.title == 'fzbanner') {
                        num = 0;
                        htmlstr = '';
                        htmlbtn = '';
                        let arr = value.urls.split(',');
                        for (let value of arr) {
                            if (num == 0) {
                                htmlbtn += `<li class="on">1</li>`;
                                htmlstr += `  <li class="_li_5"><a href="http://shop.dangdang.com/22190" target="_blank" class="pic"
                                title="红蜻蜓"><img src="${value}" width='383' height='340'
                                    alt="红蜻蜓"></a></li>`;
                            } else {
                                htmlbtn += `<li class=""></li>`;
                                htmlstr += `<li class="_li_5"><a href="http://shop.dangdang.com/22190" target="_blank" class="pic"
                                title="红蜻蜓"><img src="${value}" width='383' height='340'
                                    alt="红蜻蜓"></a></li>`;
                            }
                            num++;
                        }
                        $('.book_banner_floor .banner_btn').html(htmlbtn);
                        $('.book_banner_floor .banner_item').html(htmlstr);
                    }
                    if (value.title == 'fzbbanner') {
                        htmlstr = '';
                        htmlbtn = '';
                        num = 0;
                        let arr = value.urls.split(',');

                        for (let value of arr) {
                            if (num == 1) {
                                htmlstr += '<ul>';
                            } else if (num < 11 && num > 1) {
                                htmlstr += `<li><a href=""
                                    target="_blank" title="">
                                    <img src="${value}" width='110' height='50' title="" alt="">
                                    </span></a></li>`
                            } else if (num == 11) {
                                htmlstr += `</ul>`;
                                num = 0;
                            }
                            num++;
                        }
                        htmlstr += `</ul>`
                        $('.floor_bottom_warp').html(htmlstr);
                    }
                }
                m2.bannereffect();
                $("img").lazyload({
                    effect : "fadeIn"
                });
            })
            //渲染商品
            $.ajax({
                type: 'post',
                url: "http://10.31.155.71/dangdang/dangdang/php/goodslist.php",
                data: {
                    typeof: 'shangping'
                },
                dataType: 'json'
            }).done(function (datarr) {
                let htmlstr = '', htmlstr2 = '', htmlstr3 = '', htmlstr4 = '', htmlstr5 = '', num = 1, num2 = 0;
                for (let value of datarr) {
                    if (num == 1) {
                        htmlstr2 += `<li class="line1" style='display:none'>
                                <span class="num">${num}</span>
                                <p class="name">
                                    <a title=""
                                        href="${linkurl + 'sid=' + value.sid}"
                                        target="_blank">${value.title}<span></span></a></p>
                            </li>
                            <li class="line2 item" style="display:block">
                        <span
                class="num num2">${num}</span>
                <a class="img" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                    <img src="${value.url}"
                    alt=""></a>
            <p class="name"><a title="" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                ${value.title}<span>${value.description}</span></a></p>
        </li>`;
                    } else if (num <= 10) {
                        htmlstr2 += `<li class="line1">
                                <span class="num">${num}</span>
                                <p class="name">
                                    <a title=""
                                        href="${linkurl + 'sid=' + value.sid}"
                                        target="_blank">${value.title}<span></span></a></p>
                            </li>
                            <li class="line2 item" style="">
                        <span
                class="num num2">${num}</span>
                <a class="img" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                    <img src="${value.url}"
                    alt=""></a>
            <p class="name"><a title="" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                ${value.title}<span>${value.description}</span></a></p>
        </li>`;
                    }
                    if (num <= 10) {
                        htmlstr3 += ` <div class="info">
                            <a href="${linkurl + 'sid=' + value.sid}" class="pic" target="_blank">
                                <img data-original="${value.url}" width='150' height='150' ></a>
                            <div class="line">
                                <span style="width:99%" class="miao_bar"></span>
                                <span class="num_bg"></span></div>
                            <div class="num">已秒杀99%</div>
                            <div class="name">
                                <a href="${linkurl + 'sid=' + value.sid}" target="_blank">${value.title}</a>
                            </div>
                            <div class="price">
                                秒杀价：¥
                                <span>1</span>
                                <span class="del">${value.oprice}</span>
                            </div>
                        </div>`}
                    htmlstr += `<li>
                        <a href="${linkurl + 'sid=' + value.sid}"><img data-original="${value.url}" width='190' height='190' alt=""></a>
                        <p class="name"><a href="${linkurl + 'sid=' + value.sid}">${value.title}</a></p>
                        <p class='price'>
                            <span class="price_n">
                                ￥<span>${value.nprice}</span>
                            </span>
                            <span class="price_o">
                                电子书<span class="sign">¥</span>
                                <span class="num">${parseInt(value.oprice)}</span>
                                <span class="tail">.${value.oprice * 100 % 100}</span>
                            </span>
                        </p>
                    </li>
                 `;
                    if (num2 < 2) {
                        htmlstr4 += `
                    <ul class="book_list ">
                                <li class="line1">
                                    <a class="img" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                                        <img data-original="${value.url}"
                                            alt="我们的自信：大道之行的骨气与底气" width='150' height='150' ></a>
                                    <div class="icon_pop"></div>
                                    <p class="name">
                                        <a href="${linkurl + 'sid=' + value.sid}"
                                            target="_blank">${value.title}</a>
                                    </p>
                                    <p class="price">
                                        <span class="rob">
                                            <span class="sign">¥</span>
                                            <span class="num">${parseInt(value.nprice)}</span>
                                            <span class="tail">.${value.nprice * 100 % 100}</span>
                                        </span>
                                        <span class="price_r">
                                            <span class="sign">¥</span>
                                            <span class="num">${parseInt(value.oprice)}</span>
                                            <span class="tail">.${value.oprice * 100 % 100}</span>
                                        </span>
                                    </p>
                                </li>
                            </ul>`
                    } else if (num2 == 2) {
                        $('.book_left_1').html(htmlstr4);
                        htmlstr4 = '';
                    } else if (num2 > 2 && num2 < 7) {
                        htmlstr4 += `
                    <ul class="book_list ">
                                <li class="line1">
                                    <a class="img" href="${linkurl + 'sid=' + value.sid}" target="_blank">
                                        <img data-original="${value.url}"
                                            alt="我们的自信：大道之行的骨气与底气" width='150' height='150'></a>
                                    <div class="icon_pop"></div>
                                    <p class="name">
                                        <a href="${linkurl + 'sid=' + value.sid}"
                                            target="_blank">${value.title}</a>
                                    </p>
                                    <p class="price">
                                        <span class="rob">
                                            <span class="sign">¥</span>
                                            <span class="num">${parseInt(value.nprice)}</span>
                                            <span class="tail">.${value.nprice * 100 % 100}</span>
                                        </span>
                                        <span class="price_r">
                                            <span class="sign">¥</span>
                                            <span class="num">${parseInt(value.oprice)}</span>
                                            <span class="tail">.${value.oprice * 100 % 100}</span>
                                        </span>
                                    </p>
                                </li>
                            </ul>`
                    }
                    if(num<6){
                        htmlstr5+=`<li><a href=""><img src="http://img60.ddimg.cn/2019/7/30/201907301506413180.png" class="bg">
                        <div class="p_info">
                            <div class="tag_t"><span class="t_l"></span><span class="name">1分抽奖</span><span class="t_l t_r"></span></div>        
                            <div id="pr_img_4" class="sp" style="">
                                    <div class="pic_section"><img src="${value.url}"></div>
                                    <div class="t_name">${value.title}</div>
                                    <div class="label"><span class="b_label">仅剩2天12小时</span></div>
                                    <div class="price"><span class="price_n">¥0.01</span><span class="price_o">¥${value.nprice}</span></div>
                                    <div class="go_icon"></div>
                            </div>
                            <div id="pr_qr_4" class="zz"  style="">
                                <div class="pic_section"><img src="http://img61.ddimg.cn/2019/7/18/2019071818032447136.jpg"></div>
                                <div style="width:150px;margin:16px auto 0;"><img style="width:150px" src="http://img63.ddimg.cn/2019/8/24/2019082415442534569.png"></div>
                            </div>
                        </div>
                    </a></li>`
                                        }
                    num2++;
                    num++;
                }
                $('.book_left_2').html(htmlstr4);
                $('.book_muen_content ul').html(htmlstr);
                $('.book_right_content').html(htmlstr2);
                $('.miao .content').html(htmlstr3);
                $('.act_bottom').html(htmlstr5);
                m2.other();
                $("img").lazyload({
                    effect : "fadeIn"
                });
            })
            //渲染其他模块
            $.ajax({
                type: 'post',
                url: "http://10.31.155.71/dangdang/dangdang/php/goodslist.php",
                data: {
                    typeof: 'detail'
                },
                dataType: 'json'
            }).done(function (data) {
                let hstr1 = '', hstr2 = '', hstr3 = '', hstr4 = '', hstr5 = '';
                for (let bvalue of data) {
                    switch (bvalue.title) {
                        case 'ryong':
                            var num = 0;
                            hstr1 += '<div class="mod_middle_left">';
                            for (let value of bvalue.urls.split('，')) {
                                if (num < 4) {
                                    hstr1 += ` <a href=""><img data-original="${value}" width='199' height='170' alt=""></a>`
                                } else if (num == 4) {
                                    hstr1 += ` </div>
                                <div class="mod_middle_middle">
                                    <a href=""><img data-original="${bvalue.burl}" width='398' height='341' alt=""></a>
                                </div>
                                <div class="mod_middle_left mod_middle_right">`
                                } else if (num < 9 && num > 4) {
                                    hstr1 += ` <a href=""><img data-original="${value}" width='199' height='170' alt=""></a>`
                                }
                                num++;
                            }
                            hstr1 += '</div>';
                            $('.ryong .mod_middle').html(hstr1);
                            hstr1 = '', num = 0;
                            for (let value of bvalue.surl.split('，')) {
                                if (num < 10)
                                    hstr1 += ` <li><a href=""><img data-original="${value}" width='109' height='44' alt=""></a></li>`;
                                num++;
                            }
                            $('.ryong .mod_bottom ul').html(hstr1);
                            break;
                        case 'fuz':
                            num = 0;
                            for (let value of bvalue.burl.split('，')) {
                                if (num < 3)
                                    hstr2 += `<a href=""><img data-original="${value}" width='191' height='340'  alt=""></a>`;
                                num++;
                            }
                            $('.floor_content_1').html(hstr2);
                            hstr2 = '';
                            num = 0;
                            for (let value of bvalue.urls.split('，')) {
                                if (num < 5)
                                    hstr2 += `<a href=""><img data-original="${value}" width='191' height='180'  alt=""></a>`;
                                num++;
                            }
                            $('.floor_content_2').html(hstr2);
                            break;
                        case 'youp':
                            num = 0;
                            hstr3 += '<div class="mod_middle_left">';
                            for (let value of bvalue.urls.split('，')) {
                                if (num < 4) {
                                    hstr3 += ` <a href=""><img data-original="${value}" width='199' height='170' alt=""></a>`
                                } else if (num == 4) {
                                    hstr3 += ` </div>
                                <div class="mod_middle_middle">
                                    <a href=""><img data-original="${bvalue.burl}" width='391' height='348' alt=""></a>
                                </div>
                                <div class="mod_middle_left mod_middle_right">`
                                } else if (num < 9 && num > 4) {
                                    hstr3 += ` <a href=""><img data-original="${value}" width='199' height='170' alt=""></a>`
                                }
                                num++;
                            }
                            hstr3 += '</div>';
                            $('.youping .mod_middle').html(hstr3);
                            break;
                        case 'wju':
                            num = 0;
                            for (let value of bvalue.urls.split('，')) {
                                if (num < 5)
                                    hstr4 += ` <a href=""><img data-original="${value}" width='230' height='140' alt=""></a>`;
                                num++;
                            }
                            $('.wju .mod_middle').html(hstr4);
                            break;
                        case 'yunt':
                            num = 0;
                            hstr5 += '<div class="mod_middle_left mtype_2" style="width: 221px;">';
                            for (let value of bvalue.urls.split('，')) {
                                if (num < 2) {
                                    hstr5 += ` <a href=""><img data-original="${value}" width='200' height='174' alt=""></a>`
                                } else if (num == 2) {
                                    hstr5 += ` </div>
                                    <div class="mod_middle_middle mtype_2_middle" style="left: 221px">
                                        <a href=""><img data-original="${bvalue.burl}" width='314' height='389' alt=""></a>
                                    </div>
                                    <div class="mod_middle_left mod_middle_right mtype_2" style="left: 536px;
                                        width: 663px;">`
                                } else if (num < 9 && num > 2) {
                                    hstr5 += ` <a href=""><img data-original="${value}" width='200' height='174' alt=""></a>`
                                }
                                num++;
                            }
                            hstr5 += '</div>';
                            $('.yyt .mod_middle').html(hstr5);
                            hstr5 = '', num = 0;
                            for (let value of bvalue.surl.split('，')) {
                                if (num < 10)
                                    hstr5 += ` <li><a href=""><img data-original="${value}" width='109' height='44' alt=""></a></li>`;
                                num++;
                            }
                            $('.yyt .mod_bottom ul').html(hstr5);
                            break;

                    }
                }
                $("img").lazyload({
                    effect : "fadeIn"
                });
            })
           
        })()


    })
    })
})