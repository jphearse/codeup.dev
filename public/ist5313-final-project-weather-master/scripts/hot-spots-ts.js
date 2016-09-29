
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Avoid standing under or near tall trees because they attract lightning";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Avoid flooding water. Six inches can sweep you off your feet. Two feet can move a car";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "It's a myth that rubber soles alone protect you from lightning! Seek shelter if possible.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Seek any non-metallic building for shelter. If stuck in a car, don't touch the metal frame.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}