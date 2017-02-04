function init(){
    initTrigger();
}

function initTrigger(){
    $("body").on("click", ".main-search-form-btn", function(){
		searchBoxSlide("down");
    });
    $("body").on("click", ".search-box-close img", function(){
		searchBoxSlide("up");
    });
    $("body").on("click", ".page-scroll > a", function(){
		searchBoxSlide("down");
        searchBoxSlide("first-scroll");
    });
}

function searchBoxSlide(type){
    switch(type){
        case "up":
            $("#search-box").stop(true,true).slideUp("slow");
            $(".search-box-line").css("display","none");
            break;
        case "down":
            $("#search-box").stop(true,true).slideDown("slow");
            $(".search-box-line").css("display","block");
            break;
        case "first-scroll":
            var offset = $("#search-box").offset();
            $('html, body').animate({scrollTop : offset.top}, 300);
            break;
    }
  
}

$(function(){
    init();
});