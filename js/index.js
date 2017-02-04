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
    });
    $("body").on("click", ".search-box-more-head", function(){
		addOtherMeans("down");
    });
    $("body").on("click", ".search-box-more-foot", function(){
		addOtherMeans("up");
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

function addOtherMeans(type){
    switch(type){
        case "down":
            $(".search-box-more-form-in").stop(true,true).slideDown(400);
            $(".search-box-more-head").css("border-bottom-left-radius","0");
            $(".search-box-more-head").css("border-bottom-right-radius","0");
            break;
        case "up":
            
            $(".search-box-more-form-in").stop(true,true).slideUp(150);
            $(".search-box-more-head").css("border-radius","20px");
            break;
    }
}

$(function(){
    init();
});