$(".card").click(function() {
    $(".attention").css({
        visibility: "visible"
    });
    $(this).children("img").clone().prependTo(".popup").css({
        position: "relative",
        width: "var(--popup-width)",
        height: "auto"
    });
});

$(".attention").click(function() {
    $(".attention").css({
        visibility: "hidden"
    });
    $(".popup").children("img").remove()
});