# FOVComparator

FOVComparator is all about comparing the FOV in different games.

To add more game you must add a Package.

# Packages

Packages are folders located in `/Games/` that require at least a `info.json` file such as:

	{
		"NAME": "This game",
		"DESC": "Some fancy text with HTML !",
		"SLIDES": [
			{
				"60": 	"first.png",
				"90": 	"second.png",
				"110": 	"third.png"
			},
			{
				"60": 	"othermap.png",
				"90": 	"othermapat90fov.png",
				"110": 	"howaboutajpeg.jpeg"
			},
		]
	}

In `SLIDES` the key represented the FOV and the value the screenshot.

# Dependecies

Only [jQuery](http://jquery.com/) is required.