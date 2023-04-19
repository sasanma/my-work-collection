var img; //選択画像
var id; //setTimeoutのid

$(".card").click(function () {
	img = $(this).children("video").clone().prependTo(".popup").css({
		display: "inline",
		opacity: "0",
		position: "relative",
		width: "var(--popup-width)",
		height: "auto",
	});
	img.removeClass("card-image");
	img.stop(false, false);
	$(".button").children("a").stop(false, false);
	$(".button").children("a").css({ opacity: "0" });
	$(".button").children("a").attr("href", img.attr("src"));
	$(".attention, .back").css({
		visibility: "visible",
	});
	$(".popup").addClass("fadein");
	id = setTimeout(function () {
		img.animate({ opacity: "1" }, 1000);
		$(".button").children("a").animate({ opacity: "1" }, 1000);
	}, 500);
});

$(".back").click(function () {
	clearTimeout(id);
	img.remove();
	$(".popup").removeClass("fadein");
	$(".attention, .back").css({
		visibility: "hidden",
	});
});
