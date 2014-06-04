<?php
	if (isset($_GET['game']) && file_exists($_GET['game']. "/info.json"))
	{
		$json = file_get_contents($_GET['game']. "/info.json");
		if (isset($_GET['info']))
		{
			echo($json);
			return;
		}
		$info = json_decode($json);
		echo $_GET['game'];
		var_dump($info);
	}
	else
		header("Location: ../");
?>