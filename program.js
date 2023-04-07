var img;    //選択画像
var id;     //setTimeoutのid

$(".card").click(function() {
    img = $(this).children("img").clone().prependTo(".popup").css({
        opacity: "0",
        position: "relative",
        width: "var(--popup-width)",
        height: "auto"
    });
    img.stop(false, false);
    $(".button").children("a").stop(false, false);
    $(".button").children("a").css({opacity:"0"});
    $(".attention").css({
        visibility: "visible"
    });
    $(".popup").addClass("fadein");
    id = setTimeout(function() { 
        img.animate({opacity: "1"}, 1000);
        $(".button").children("a").animate({opacity: "1"}, 1000);
    }, 500);
});

$(".attention").click(function() {
    clearTimeout(id);
    img.remove();
    $(".popup").removeClass("fadein");
    $(".attention").css({
        visibility: "hidden"
    });
});