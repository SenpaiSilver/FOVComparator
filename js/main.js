// window.location.href.replace(window.location.hash, "")

var setList = 0;
var gameList = 0;
var domSlideElem = 0;
var domSlideSet = 0;

function initSlides()
{
	$("#slides").hide();
}

function retrieveGameList()
{
	$.get("./Games/List", function(data, status){
		gameList = data;
		for (var key in data)
		{
			$("#header-menu").append('<li class="header-menu"><a href="#' + data[key] + '">' + key + '</a></li>');
		}
	}, "json");
}

function retrieveGame(gamename){
	gamename = gamename.replace("#", "").replace(" ", "%20");
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
	//var parseCode = new RegExp('/(`.*`)//gi');
	
	setList = data["SLIDES"];
	
	$("#title").text(data["NAME"]);
	$("#content").html(data["DESC"].replace(/`(.*)`/g, '<div class="code">$1</div>'));
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
			if (setList[index][key].match(/\.(png|jpeg)$/i))
				$(slideElementS).append('<a href="' + gamePic + '"><img class="screenshot"  src="' + gamePic + '" />');
			$(slideElementS).append('<label class="fov">' + key + '</label>');
		}
	}
}

$(document).ready(function() {
	initSlides();
	retrieveGameList();
	
	$(window).on("hashchange", function(){
		$("#slides").html("");
		if (window.location.hash != "")
			retrieveGame(window.location.hash);
		else
			$("#slides").hide();
	});
	
	if (window.location.hash != "")
		retrieveGame(window.location.hash);
});
