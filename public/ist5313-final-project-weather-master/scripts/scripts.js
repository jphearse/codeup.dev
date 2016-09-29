// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        	// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    		sessionStorage.setItem( "course_started", "1" );
    		sessionStorage.setItem( "topic1", "unvisited" );
    		sessionStorage.setItem( "topic2", "unvisited" );
    		sessionStorage.setItem( "topic3", "unvisited" );
    		sessionStorage.setItem( "topic4", "unvisited" );
    		sessionStorage.setItem( "topic5", "unvisited" );
    		sessionStorage.setItem( "topic6", "unvisited" );
    		sessionStorage.setItem( "topic7", "unvisited" );
    		sessionStorage.setItem( "topic8", "unvisited" );
    		sessionStorage.setItem( "topic9", "unvisited" );
    		sessionStorage.setItem( "topic10", "unvisited" );
    		sessionStorage.setItem( "topic11", "unvisited" );
    		sessionStorage.setItem( "topic12", "unvisited" );
    		sessionStorage.setItem( "topic13", "unvisited" );
    		sessionStorage.setItem( "topic14", "unvisited" );
    		sessionStorage.setItem( "topic15", "unvisited" );
    		sessionStorage.setItem( "topic16", "unvisited" );
    		sessionStorage.setItem( "topic17", "unvisited" );
    		sessionStorage.setItem( "topic18", "unvisited" );
    		sessionStorage.setItem( "topic19", "unvisited" );
    		sessionStorage.setItem( "topic20", "unvisited" );
    		sessionStorage.setItem( "topic21", "unvisited" );
    		sessionStorage.setItem( "topic22", "unvisited" );
    		sessionStorage.setItem( "topic23", "unvisited" );
    		sessionStorage.setItem( "topic24", "unvisited" );
    		sessionStorage.setItem( "topic25", "unvisited" );
			// set the values you want to persist throughout the website here
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
        // always set the status to incomplete
		oScorm.set( "cmi.success_status", "unknown" );
		oScorm.set( "cmi.lesson_status", "incomplete" );
		oScorm.set( "cmi.completion_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
	}
}

function visitCertificate()
{
	var learner_name = oScorm.get( "cmi.learner_name" );
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "user-name" ).innerHTML = learner_name;
}


// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores(score)
{	
	oScorm.set("cmi.score.raw", score );
	oScorm.set("cmi.score.min", 0 );
	oScorm.set("cmi.score.max", 100 );
	oScorm.set("cmi.score.scaled", score / 100 );
	
	if(score>=70)
		{
			document.getElementById( "content-frame" ).contentWindow.document.getElementById( "cert-link" ).style.display = "inline";
			oScorm.set( "cmi.success_status", "passed" );
			oScorm.set( "cmi.completion_status", "completed" );
			oScorm.set( "cmi.lesson_status", "passed" );
		}
	else
		{
			oScorm.set( "cmi.success_status", "failed" );
			oScorm.set( "cmi.completion_status", "incomplete" );
			oScorm.set( "cmi.lesson_status", "incomplete" );
		}
	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}

function visitTopic1()
{
sessionStorage.setItem( "topic1", "visited");	
checkVisits();
}

function visitTopic2()
{
sessionStorage.setItem( "topic2", "visited");
checkVisits();
}

function visitTopic3()
{
sessionStorage.setItem( "topic3", "visited");	
checkVisits();
}

function visitTopic4()
{
sessionStorage.setItem( "topic4", "visited");	
checkVisits();
}

function visitTopic5()
{
sessionStorage.setItem( "topic5", "visited");	
checkVisits();
}

function visitTopic6()
{
sessionStorage.setItem( "topic6", "visited");	
checkVisits();
}

function visitTopic7()
{
sessionStorage.setItem( "topic7", "visited");	
checkVisits();
}

function visitTopic8()
{
sessionStorage.setItem( "topic8", "visited");	
checkVisits();
}

function visitTopic9()
{
sessionStorage.setItem( "topic9", "visited");	
checkVisits();
}

function visitTopic10()
{
sessionStorage.setItem( "topic10", "visited");	
checkVisits();
}

function visitTopic11()
{
sessionStorage.setItem( "topic11", "visited");	
checkVisits();
}

function visitTopic12()
{
sessionStorage.setItem( "topic12", "visited");	
checkVisits();
}

function visitTopic13()
{
sessionStorage.setItem( "topic13", "visited");	
checkVisits();
}

function visitTopic14()
{
sessionStorage.setItem( "topic14", "visited");	
checkVisits();
}

function visitTopic15()
{
sessionStorage.setItem( "topic15", "visited");	
checkVisits();
}

function visitTopic16()
{
sessionStorage.setItem( "topic16", "visited");	
checkVisits();
}

function visitTopic17()
{
sessionStorage.setItem( "topic17", "visited");	
checkVisits();
}

function visitTopic18()
{
sessionStorage.setItem( "topic18", "visited");	
checkVisits();
}

function visitTopic19()
{
sessionStorage.setItem( "topic19", "visited");	
checkVisits();
}

function visitTopic20()
{
sessionStorage.setItem( "topic20", "visited");	
checkVisits();
}

function visitTopic21()
{
sessionStorage.setItem( "topic21", "visited");	
checkVisits();
}

function visitTopic22()
{
sessionStorage.setItem( "topic22", "visited");	
checkVisits();
}

function visitTopic23()
{
sessionStorage.setItem( "topic23", "visited");	
checkVisits();
}

function visitTopic24()
{
sessionStorage.setItem( "topic24", "visited");	
checkVisits();
}

function visitTopic25()
{
sessionStorage.setItem( "topic25", "visited");	
checkVisits();
}



function checkVisits()
{
	var value1 = sessionStorage.getItem( "topic1" );
	var value2 = sessionStorage.getItem( "topic2" );
	var value3 = sessionStorage.getItem( "topic3" );
	var value4 = sessionStorage.getItem( "topic4" );
	var value5 = sessionStorage.getItem( "topic5" );
	var value6 = sessionStorage.getItem( "topic6" );
	var value7 = sessionStorage.getItem( "topic7" );
	var value8 = sessionStorage.getItem( "topic8" );
	var value9 = sessionStorage.getItem( "topic9" );
	var value10 = sessionStorage.getItem( "topic10" );
	var value11 = sessionStorage.getItem( "topic11" );
	var value12 = sessionStorage.getItem( "topic12" );
	var value13 = sessionStorage.getItem( "topic13" );
	var value14 = sessionStorage.getItem( "topic14" );
	var value15 = sessionStorage.getItem( "topic15" );
	var value16 = sessionStorage.getItem( "topic16" );
	var value17 = sessionStorage.getItem( "topic17" );
	var value18 = sessionStorage.getItem( "topic18" );
	var value19 = sessionStorage.getItem( "topic19" );
	var value20 = sessionStorage.getItem( "topic20" );
	var value21 = sessionStorage.getItem( "topic21" );
	var value22 = sessionStorage.getItem( "topic22" );
	var value23 = sessionStorage.getItem( "topic23" );
	var value24 = sessionStorage.getItem( "topic24" );
	var value25 = sessionStorage.getItem( "topic25" );
	
	
	
	
	if( value1 == "visited" && value2 == "visited" && value3 == "visited" && value4 == "visited" && value5 == "visited" && value6 == "visited" && value7 == "visited" && value8 == "visited" && value9 == "visited" && value10 == "visited"
		&& value11 == "visited" && value12 == "visited" && value13 == "visited" && value14 == "visited" && value15 == "visited" && value16 == "visited" && value17 == "visited" && value18 == "visited" && value19 == "visited" && value20 == "visited"
			&& value21 == "visited" && value22 == "visited" && value23 == "visited" && value24 == "visited" && value25 == "visited")
	{
	document.getElementById( "content-frame" ).contentWindow.document.getElementById( "quiz-link" ).style.display = "inline"; 	
	
	if(!localStorage["alertdisplayed"]) {
	    alert("The Final Test is now available!")
	    localStorage["alertdisplayed"] = true
	}
	}
}



