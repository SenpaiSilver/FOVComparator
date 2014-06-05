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
	else if (isset($_GET['list']))
	{
		$dir = scandir("./");
		$rray = array();
		
		foreach ($dir as $elem)
		{
			$temp = "";
			if (is_dir($elem) && file_exists($elem. "/info.json"))
			{
				$temp = json_decode(file_get_contents($elem. "/info.json"), true);
				if (array_key_exists("NAME", $temp)
					&& array_key_exists("DESC", $temp)
					&& array_key_exists("SLIDES", $temp))
					$rray[$temp["NAME"]] = $elem;
			}
		}
		echo(json_encode($rray));
	}
	else
		http_response_code(404);
?>