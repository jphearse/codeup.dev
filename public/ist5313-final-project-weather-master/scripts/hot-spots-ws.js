
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Stay inside during storm with warm clothing and adequate supplies for a power outage.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Don’t drive during storm. If necessary, tell others of your route, arrival and departure times.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Replace wet clothing with dry clothes immediately to avoid frostbite. Wear a hat and mittens instead of gloves.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Check for frost bite and hypothermia frequently, and seek medical help.  If stranded outside, seek shelter and make a signal for rescuers to see by your shelter.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}