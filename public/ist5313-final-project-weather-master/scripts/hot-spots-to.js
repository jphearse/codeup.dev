
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Winds can reach 300 mph, picking up objects and sending debris flying";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Flying debris is the main source of injury from tornadoes. Winds are strong enough to make small objects deadly.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Get as low as possible. Outside: find a ditch or low ground. Inside: find the lowest, sturdiest, interior room of the building.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Cover yourself with a cushion, blanket or other soft material to protect you from debris.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}