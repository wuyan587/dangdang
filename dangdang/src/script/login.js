;(function(){
    const ainput=document.querySelectorAll('input');
    const form=document.querySelector('form');
    
    $('.username input').on('focus',function(){
        $('p.tip:first').html('请输入邮箱/昵称/手机号码').css('color','#787878')
    })
    $('.username input').on('blur',function(){
        $('p.tip:first').html('&nbsp;').css({
        });
    })
    $('.password input').on('focus',function(){
        $('p.tip:last').html('请填写长度为6-20位的密码').css('color','#787878');
    })
    $('.password input').on('blur',function(){
        $('p.tip:last').html('&nbsp;').css({
        });
    })
    $('.Vcode-background').on('click',function(){
        if(this.num==undefined){
            this.num=0;
        }
        console.log(this.num);
        this.num-=76;
        if(this.num<-228)
            this.num=0;
        $(this).css('backgroundPositionY',this.num);
    })
    $('.submit').on('click',function(){
       $.ajax({
           type:'post',
           url:'http://10.31.155.71/dangdang/dangdang/php/login.php',
           data:{
               phone:$('.username input').val(),
               password:$('.password input').val()
           }
       }).done(function(data){
           if(data){
               location.href='http://10.31.155.71/dangdang/dangdang/src/index.html';
           }else{
               if($('.username input').val()==''){
                $('p.tip:first').html('用户名或密码输入错误，请核对后重新输入').css({
                    'color':'red',
              });}else if($('.password input').val()==''){
                $('p.tip:last').html('请输入您的密码').css({
                    'color':'red',
              });
              }else{
                  alert('错了下一个');
              }
              
           }
       })
    })
})()