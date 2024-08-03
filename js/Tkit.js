$(document).ready(function(){
    // 클릭했을때 a태그 위치에 창이 안따라가게
    $("a").click(function(e){
        e.preventDefault();
    })
    
    // 서치 버튼 설정
    $(".top_icon2").click(function(){
        $(".top_option").css({"opacity":"0"})
        $(".top_search_modal").fadeIn(500);
        $(".top_search").css({"top":"0"});
    })

    $(".top_search_modal").click(function(){
        $(".top_option").css({"opacity":"1"});
        $(".top_search").css({"top":"-100%"});
        $(this).fadeOut(500);
    })

    // 삼선버튼 설정
    $(".line").click(function(){
        $(".line_move").toggleClass("act");
        $(".h_mainmenu").delay(500).slideToggle();
    })

    // 모바일용 서브메뉴 설정
    $(".h_mainmenu>li").click(function(){
        $(this).find($(".sub")).slideToggle();
    })// .h_mainmenu>li.click

    // pc형 메인메뉴 라인 호버 작업
    $(".mainmenu_pc>li, .sub_pc, .sub_pc_bg").hover(function(){
        $(this).find($(".line_pc")).stop().css({"width":"100%"});
        $(".sub_pc, .sub_pc_bg").stop().slideDown();
    }, function(){
        $(this).find($(".line_pc")).stop().css({"width":"0"})
        $(".sub_pc, .sub_pc_bg").stop().slideUp();
    })

    // 이미지 슬라이드 슬릭 작업
    $('.slider-for').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    // skill 호버
    $(".skill_img").hover(function(){
        $(this).find($(".skill_modal")).css({"opacity":"0"});
    }, function(){
        $(this).find($(".skill_modal")).css({"opacity":"1"});
    })

    // 슬라이드 이미지 모바일
    $(".slide_list_m").slick({
        autoplay: true,
        dots: false,
        arrows: true
    });
})// fin