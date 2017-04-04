$(document).ready(function(){
    $("#S-banner").MyFloatingBg({direction:0, speed:40});
//  <!-- 高端网站建设-->
    $(".content1-box .box2 li").mouseover(function(){
        var num =  $(this).index();
        if($(".on")[0] == this){
            return;
        }
        $(this).addClass("on").siblings().removeClass("on");
        $(".rollList").animate({ left : -1200*num},1000);
    }).eq(0).mouseout();
    //显示不同的模块
    function showBrandList(){
        var num = $(".content1-box .box2 li").index($(".on"));
        num = num +1 ;
        if(num ==2){
            num = 0 ;
        }
        $(".content1-box .box2 li").eq(num).addClass("on").siblings().removeClass("on");
        $(".rollList").animate({ left : -1200*num},1000);
    }
    var timer=  setInterval(showBrandList,5000);
    $(".content1-box").hover(function(){
        if(timer !=null){
            clearInterval(timer);
            timer=  null;
        }
    },function(){
            timer =  setInterval(showBrandList,5000);
    });
    //<!-- 移动应用开发-->
    $(".content2-box .tempHd li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(".content2-box .tempHd li").index(this);
        showTab(idx);
        return false;
    }).eq(0).click();
    function showTab(index){
        var $Tabobj = $(".move");
        var rollW = $Tabobj.find("ul").outerWidth();
        $Tabobj.stop(true,false).animate({ left : -rollW*index},1000);
    }
//  <!-- 设计服务-->
    $(".parHd li").click(function(){
        var index=$(".parHd li").index(this);
        $(".content3-box .tempwarp").fadeOut().eq(index).fadeIn();
        $(".content3-leftbox").css("top",104*index);
    }).eq(0).click()
});