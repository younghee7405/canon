$(function(){
    // 마이케논 영역
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    })//hover

    // 서브메뉴영역

    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().slideDown().css({display : "flex"});
    // }, function(){
    //     $(".d_wrap").stop().css({display : "none"}).slideUp();
    // })

    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().slideDown();
    // }, function(){
    //     $(".d_wrap").stop().slideUp();
    // })

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"350px", padding: "15px 15px 30px"}, "fast")
    }, function(){
        $(".d_wrap").stop().animate({height:"0", padding: "0"}, "fast")
    })

    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().addClass("on", "slow")
    // }, function(){
    //     $(".d_wrap").stop().removeClass("on", 1000)
    // })

    // $(".gnb_p").mouseover(function(){
    //     $(".d_wrap").stop().toggleClass("on", 1000)
    // })



})//jquery