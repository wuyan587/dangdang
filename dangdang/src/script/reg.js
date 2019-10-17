;(function(){
let phone=false,pass=false,rpass=false;
$('.new_peopel .phone input').on('blur',function(){
    let _this=$(this);
    let reg=/^1[3|5|7|8]\d{9}$/;
    if($(this).val()!==''){
        if(reg.test($(this).val())){
    $.ajax({
        type:'post',
        url:'http://10.31.155.71/dangdang/dangdang/php/login.php',
        data:{
            phone:$(this).val()
        }

    }).done(function(data){
        if(!data){
           
            _this.parentsUntil('tr').find('.pass').show();
            _this.parentsUntil('tr').find('.warm').html('手机号可以用').css({
                'color':'green'
            })
            phone=true;
        }else{
            _this.parentsUntil('tr').find('.pass').hide();
            _this.parentsUntil('tr').find('.warm').html('手机号不可以用').css({
                'color':'red'
            })
            phone=false
        }
    })
}else{
    $(this).parentsUntil('tr').find('.pass').hide();
    $(this).parentsUntil('tr').find('.warm').html('手机号不对').css({
        'color':'red'
    })
    phone=false;
}
}else{
    $(this).parentsUntil('tr').find('.warm').html('手机号不能为空').css({
        'color':'red'
    })
    phone=false;
}
})
$('.new_peopel .password input').on('input',function(){
    if($(this).val()!==''){
        if($(this).val().length >= 6 && $(this).val().length <= 20){
                let type = 0;
                let num = /\d+/;
                let low = /[a-z]+/;
                let up = /[A-Z]+/;
                let ot = /[\W\_]+/;
                if (num.test($(this).val())) {
                    type++;
                }
                if (low.test($(this).val())) {
                    type++;
                }
                if (up.test($(this).val())) {
                    type++;
                }
                if (ot.test($(this).val())) {
                    type++;
                }
                switch(type){
                    case 1: 
                    $(this).parentsUntil('tr').find('.pass').hide();
                    $(this).parentsUntil('tr').find('.warm').html('弱').css({
                        'color':'red'
                    })
                    pass=false;
                        break;
                    case 2:
                    case 3:
                            $(this).parentsUntil('tr').find('.pass').show();
                            $(this).parentsUntil('tr').find('.warm').html('中').css({
                                'color':'orange'
                            })
                            pass=true;
                        break;
                    case 4:
                            $(this).parentsUntil('tr').find('.pass').show();
                            $(this).parentsUntil('tr').find('.warm').html('强').css({
                                'color':'green'
                            })
                            pass=true;
                        break;
                }
            }else {
                $(this).parentsUntil('tr').find('.warm').html('密码不能少于6位').css({
                    'color':'red'
                })
                pass=false;
                $(this).parentsUntil('tr').find('.pass').hide();
                }
    }else{
        $(this).parentsUntil('tr').find('.warm').html('密码不能为空').css({
            'color':'red'
        })
        pass=false;
    }

})
$('.new_peopel .repassword input').on('blur',function(){
    if($(this).val()!==''){
    if($(this).val()==$('.new_peopel .password input').val()){
        $(this).parentsUntil('tr').find('.pass').show();
        $(this).parentsUntil('tr').find('.warm').html('密码相同').css({
            'color':'green'
        })
        rpass=true;
    }else{
        $(this).parentsUntil('tr').find('.pass').hide();
        $(this).parentsUntil('tr').find('.warm').html('密码不相同').css({
            'color':'red'
        })
        rpass=false;
    }}else{
        $(this).parentsUntil('tr').find('.pass').hide();
        $(this).parentsUntil('tr').find('.warm').html('请输入').css({
            'color':'red'
        })
        rpass=false;
    }
})



$('.btn_login').on('click',function(){
    if(phone&&pass&&rpass){
        $.ajax({
            type:'post',
            url:'http://10.31.155.71/dangdang/dangdang/php/login.php',
            data:{
                phone:$('.phone input').val(),
                password:$('.password input').val(),
                type:'reg'
            }
        })
        alert('ok');
    }else{
        alert('?');
    }
})



})();