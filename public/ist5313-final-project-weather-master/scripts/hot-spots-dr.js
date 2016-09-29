
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Conserve water. Drink plenty. Avoid salt, caffeine & alcohol which can dehydrate you.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Stay inside with air-conditioning when possible.  Your body begins dehydrating immediatley when exposed to high heat.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Find shade and reduce activity. Avoid direct sunlight and wear light-colored breathable clothing when outdoors";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Provide shade and water for small children, elderly and animals and don’t leave any of them in a parked car";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}