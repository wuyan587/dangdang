require(['jquery','detail'],function($,m2){
    $('#publictop').load('header.html');
    $.ajax({
        type:'get',
        url:"http://10.31.155.71/dangdang/dangdang/php/goodslist.php",
        data:{
             sid:location.search.substring(1).split('=')[1]
        },
        dataType:'json'
    }).done(function(datarr){
        $('.fdj_img').attr('src',datarr.url);
        let htmlsrc='',htmltitle='',htmlnprice='',htmloprice='';
        for(let value of datarr.urls.split('，')){
            htmlsrc+=` <li>
                            <a href="javascrpt:;"><img src="${value}" alt=""></a>
                        </li>`
        }
        htmloprice=`
        <span class="yen">
                                        ¥
                                    </span>
                                    ${datarr.oprice}`
        htmlnprice=`
            <span style="font-size: 14px;">￥</span> ${datarr.nprice}`
        htmltitle=`
        <img src="http://product.dangdang.com/images/icon_ddzy.png" alt="">
            ${datarr.title}`
        $('.p_img_list_box ul').html(htmlsrc);
        $('.p_title h1').html(htmltitle);
        $('.p_title h2 span:first').html(datarr.description);
        $('.dd_price').html(htmlnprice);
        $('.price_m:last').html(htmloprice);
        $('.crumb span:last').html(datarr.title);
        $('head title').html(datarr.title);
        console.log(m2);
        m2.init();
    })
})