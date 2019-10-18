require(['jquery','cart'],function($,m2){
// let num = 0, price = 0 , z = 0;
if ($.cookie('sid') && $.cookie('num')) {
    let htmlstr = '', linkurl = 'http://10.31.155.71/dangdang/dangdang/src/detail.html?';
    for (let i of $.cookie('sid').split(',')) {
        $.ajax(
            {
                type: 'get',
                url: "http://10.31.155.71/dangdang/dangdang/php/goodslist.php",
                data: {
                    sid: i
                },
                dataType: 'json'
            }
        ).done(function (data) {
            htmlstr += `  <tbody>
                    <tr id="" sid='${data.sid}' class="bb_none tree_first ">
                        <td class="row1">
                            <a href="javascript:;" class="checknow checkon pcheck">选中</a>
                        </td>
                        <td class="row_img">
                            <a href="${linkurl + 'sid=' + data.sid}" target="_blank">
                                <img src="${data.url}" width="80"
                                    height="80">
                            </a>
                            <div style="display: none;" class="img_big">
                                <a href="${linkurl + 'sid=' + data.sid}" target="_blank">
                                    <img src="${data.url}">
                                </a>
                                <span class="arrow">
                                </span>
                            </div>
                        </td>
                        <td class="row_name">
                            <div class="name">
                                <a href="${linkurl + 'sid=' + data.sid}" title="平行宇宙（新版）"
                                    target="_blank"
                                    style="word-break:break-all;  word-wrap:break-word;">${data.title}</a></div>
                        </td>
                        <td class="row3">
                            <span>${data.nprice}</span></td>
                        <td class="fn-count-tip row3 ">
                            <span class="amount ">
                                <a href="javascript:;" class='del'>-</a><input value="${$.cookie('num').split(',')[$.cookie('sid').split(',').indexOf(i)]}" type="text">
                                <a href="javascript:;" class='add'>+</a></span></td>
                        <td class="row4">
                            <span class="red">￥${(data.nprice * 100) * ($.cookie('num').split(',')[$.cookie('sid').split(',').indexOf(i)] / 100)}</span>
                        </td>
                        <td class="row5 ">
                            <span>
                                <a href="javascript:;" class="fn-add-wish">移入收藏</a>
                            </span>
                            <span>
                                <a href="javascript:;" class="fn-remove-product">删除</a>
                            </span>
                        </td>
                    </tr>
                    <tr class="tree_last">
                        <td class="row1"></td>
                        <td class="row_img">
                            <span class="tree_icon">&nbsp;</span>
                        </td>
                        <td class="event_box" colspan="5">
                            <p class="event">购买此商品,可享促销&nbsp;&nbsp;<a href="javascript:;"
                                    class="ebtn eblue fn-toggle-exchange-gift" itemid="776828382">加价购</a></p>
                            <div class="event_list" style="display:none">
                                <div class="pages fn-pages"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>`
            $('.shop_list table').html(htmlstr);
            m2.inputnum();
            m2.jiage();
            m2.numb();
        })

    }
    
}
m2.effect();
})