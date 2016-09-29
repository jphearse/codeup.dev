
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "When officials recommend evacuation, immediately evacuate to a safe area.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Before storm hits, fill plastic bags with water and put in the refrigerator and freezer to keep food cold while power is off. Don’t open the refrigerator or freezer door until power is returned. Remember to include chlorine bleach and an eyedropper in the emergency kit to treat tap water if necessary.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Along with at least one gallon of water per person per day, stock up on batteries and flashlights before the store shelves are empty. Gas up vehicles and consider buying a generator.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "During the storm, stay away from windows that are not boarded up and turn off electricity and gas if indoor flooding is imminent.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}