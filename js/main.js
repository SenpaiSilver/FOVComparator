// window.location.href.replace(window.location.hash, "")

var setList = 0;
var gameList = 0;
var domSlideElem = 0;
var domSlideSet = 0;

function initSlides()
{
	$("#slides").hide();
}

function retreiveGameList()
{
	$.get("./Games/List", function(data, status){
		gameList = data;
		for (var key in data)
		{
			$("#header-menu").append('<li class="header-menu"><a href="#' + data[key] + '">' + key + '</a></li>');
		}
	}, "json");
}

function retreiveGame(gamename){
	gamename = gamename.replace("#", "");
	$.get("./Games/", {game: gamename, info: true}, function(data, status){
		processGamePage(data);
		$("#slides").show();
	}, "json");
}

function processGamePage(data)
{
	var mainindex = 0;
	var index = 0;
	var gamePath = window.location.href.replace(window.location.hash, "") + "Games/" + window.location.hash.replace("#", "");
	var gamePic = 0;
	
	setList = data["SLIDES"];
	
	$("#title").text(data["NAME"]);
	$("#content").html(data["DESC"]);
	for (index = 0; index < setList.length; ++index)
	{
		++mainindex;
		var slideListS = "#slide-list-" + mainindex;
		var slideSetS = "#slide-set-" + mainindex;
		var slideList = "slide-list-" + mainindex;
		var slideSet = "slide-set-" + mainindex;
		
		$("#slides").append('<div id="' + slideSet +'"><ul class="screenshot" id="' + slideList +'"></ul></div>');
		for (var key in setList[index])
		{
			var slideElementS = "#slide-element-" + mainindex + "-" + key;
			var slideElement = "slide-element-" + mainindex + "-" + key;
			
			gamePic = gamePath + "/" + setList[index][key];
			$(slideListS).append('<li class="screenshot" id="' + slideElement +'"></li>');
			$(slideElementS).append('<a href="' + gamePic + '"><img class="screenshot"  src="' + gamePic + '" />');
			$(slideElementS).append('<label class="fov">' + key + '</label>');
		}
	}
}

$(document).ready(function() {
	initSlides();
	retreiveGameList();
	
	$(window).on("hashchange", function(){
		$("#slides").html("");
		if (window.location.hash != "")
			retreiveGame(window.location.hash);
		else
			$("#slides").hide();
	});
	
	if (window.location.hash != "")
		retreiveGame(window.location.hash);
});