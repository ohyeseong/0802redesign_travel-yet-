$(document).ready(function(){
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
    })

    // 모바일용 서브메뉴 설정
    $(".h_mainmenu>li").click(function(){
        $(this).find($(".sub")).stop().slideToggle();
    })// .h_mainmenu>li.click
})// fin