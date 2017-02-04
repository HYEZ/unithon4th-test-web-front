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
    }
  
}

$(function(){
    init();
});