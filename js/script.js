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

    // main_visual 영역
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:3000,
        dots:true,
        arrows:false
    })

    $(".main_visual .stop").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause");
        }//if

    })// click

    // main_1 photo영역

    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })//

    // main_1 banner
    
    $(".banner").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false
    })//


    $(".banner_wrap .b_stop").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".banner").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPause");
        }//if
    })//


    // viewer영역

    $(".viewer").slick({
        autoplay:true,
        autoplaySpeed:2500,
        dots:true,
        arrows:false
    })//

    $(".viewer_wrap .v_stop").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".viewer").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPause");
        }//if
    })//

    // store영역
    $(".store").slick({
        autoplay:false,
        slidesToShow:2,
        slidesToScroll:2,
        arrows:false,
        dots:true
    })//


    $(".e_store .e_play").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".store").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".store").slick("slickPlay");
        }//if
    })//
    
    // notice 영역

    $(".notice").slick({
        autoplay:true,
        vertical:true,
        dots:false,
        arrows:true
    })//


    $(".main_4 .n_stop").click(function(){

        if( $(this).hasClass("on") == true ){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause");
        }//if
    })//




})//jquery