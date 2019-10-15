define([],function(){
    (function(){
        console.log(4);
    })();
    
})
 //左右箭头切换图片   
 let count = 0; //统计点击的次数
 let left = 0;
 let Tswitch = true;
 tableft.on('click', function () {
     
     if (count > 4) {
         // console.log(2);
         banner.stop(true,true).animate({ "left": 515 - left },function(){
            
             banner.css( "left","515px" );
             
         })
         left = 0;
         count = 0;
     }
     else {
         // console.log(1);
         count++
         left += 520;
         banner.stop(true,true).animate({ "left": 515 - left });
     }


 })


 // let count1 = 0;
 // tabright.on('click', function () {
 //     count1++;
 //     console.log(count1);
 //     let $width = 520;
 //     banner.css({ "left": $width * count1 + 515 + "px" });
 // })
