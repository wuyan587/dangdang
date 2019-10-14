(function($){
    $.fn.tap=function(options){
        let settings = {
            btn: $('.tap_btn').children(),
            items: $('.tap_item').children(),
            
        }
        $.extend(settings, options);
        $(this).each(function(){
            let _this=$(this),index=0;
            $(this).find(settings.btn).on('mouseover',function(){
                index=$(this).index();
                _this.find(settings.btn).eq(index).addClass('active').siblings().removeClass('active');
                _this.find(settings.items).eq(index).show().siblings().hide();
            })

        })
    }
}
)(jQuery)