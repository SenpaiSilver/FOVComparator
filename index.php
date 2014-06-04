<!DOCTYPE HTML>
<html>
	<head>

		<title>FOVComparator</title>

		<link rel="stylesheet"  href="./media/fonts.css" />
		<link rel="stylesheet"  href="./media/style.css" />
		<meta name="keywords" content="Silver, SenpaiSilver, Senpai Silver" />
		<meta name="author" content="Silver" />
		<meta charset="UTF-8" />

		<!--<script src="./media/analytics.js"></script>-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<!--
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
		-->
	</head>
	<body>
		<div id="menu">
			<ul class="header-menu">
				<li class="header-menu"><a href="./">What is FOV ?<a></li>
				<li class="header-menu"><a id="half-life">Half-Life<a></li>
				<li class="header-menu"><a href="./">Links<a></li>
				<li class="header-menu"><a href="./">About<a></li>
			</ul>
		</div>
		<h2 id="title">What is FOV ?</h2>
		<div id="content">
			<p>What's so serious ?</p>
		</div>
		<script>
			$("#half-life").click(function() {
				$.get("./Games/", {game: "half-life", info: true}, function(data){
					$("#title").text(data["NAME"]);
					$(' <a href="' + data["STORE"] + '">Steam</a>').appendTo("#title");
					console.log(data);
				}, "json");
			});
		</script>
	</body>
</html>
