define(['jquery'], function(jQuery){
return {
    tap:(function($){
        $.fn.tap=function(options){
            let settings = {
                btn: $('.tap_btn').children(),
                items: $('.tap_item').children(),
                type:'normal'
            }
            $.extend(settings, options);
            $(this).each(function(){
                let _this=$(this),index=0;
                
                if(settings.type=='opacity'){
                    $(this).find(settings.btn).on('mouseover',function(){
                        index=$(this).index();
                        _this.find(settings.btn).eq(index).addClass('active').siblings().removeClass('active');
                        _this.find(settings.items).eq(index).css('opacity',1).siblings().css('opacity',0);
                    })
                }else{
                    $(this).find(settings.btn).on('mouseover',function(){
                        index=$(this).index();
                        _this.find(settings.btn).eq(index).addClass('active').siblings().removeClass('active');
                        _this.find(settings.items).eq(index).show().siblings().hide();
                    })
                }
            })
        }
    }
    )(jQuery)
}  
});
