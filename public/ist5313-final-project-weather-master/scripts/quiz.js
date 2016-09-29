function processQuiz()
{
	var q1 = document.forms.quiz1.question1;
	var score = 0;
	if( q1[ 0 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz1.question2;
	
	if( q2[ 2 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz1.question3;
	
	if( q3[ 0 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz1.question4;
	
	if( q4[ 3 ].checked ){
		score=score+1;
	}
alert ("You got "+ score  + " correct!");
}

function processQuiz2()
{
	var q1 = document.forms.quiz2.question1;
	var score = 0;
	if( q1[ 1 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz2.question2;
	
	if( q2[ 1 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz2.question3;
	
	if( q3[ 2 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz2.question4;
	
	if( q4[ 3 ].checked ){
		score=score+1;
	}
alert ("You got "+ score + " correct!");
}

function processQuiz3()
{
	var q1 = document.forms.quiz3.question1;
	var score = 0;
	if( q1[ 3 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz3.question2;
	
	if( q2[ 0 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz3.question3;
	
	if( q3[ 3 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz3.question4;
	
	if( q4[ 3 ].checked ){
		score=score+1;
	}
alert ("You got "+ score + " correct!");
}

function processQuiz4()
{
	var q1 = document.forms.quiz4.question1;
	var score = 0;
	if( q1[ 0 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz4.question2;
	
	if( q2[ 2 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz4.question3;
	
	if( q3[ 3 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz4.question4;
	
	if( q4[ 0 ].checked ){
		score=score+1;
	}
alert ("You got "+ score + " correct!");
}

function processQuiz5()
{
	var q1 = document.forms.quiz5.question1;
	var score = 0;
	if( q1[ 1 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz5.question2;
	
	if( q2[ 0 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz5.question3;
	
	if( q3[ 3 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz5.question4;
	
	if( q4[ 0 ].checked ){
		score=score+1;
	}
alert ("You got "+ score + " correct!");
}

function processQuiz6()
{
	var q1 = document.forms.quiz6.question1;
	var score = 0;
	if( q1[ 0 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz6.question2;
	
	if( q2[ 1 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz6.question3;
	
	if( q3[ 0 ].checked ){
		score=score+1;
	}
	
    var q4 = document.forms.quiz6.question4;
	
	if( q4[ 0 ].checked ){
		score=score+1;
	}
	
var q5 = document.forms.quiz6.question5;
	
	if( q5[ 3 ].checked ){
		score=score+1;
	}
	
var q6 = document.forms.quiz6.question6;
	
	if( q6[ 3 ].checked ){
		score=score+1;
	}
	
var q7 = document.forms.quiz6.question7;
	
	if( q7[ 3 ].checked ){
		score=score+1;
	}
	
var q8 = document.forms.quiz6.question8;
	
	if( q8[ 0 ].checked ){
		score=score+1;
	}
	
var q9 = document.forms.quiz6.question9;
	
	if( q9[ 0 ].checked ){
		score=score+1;
	}
	
var q10 = document.forms.quiz6.question10;
	
	if( q10[ 3 ].checked ){
		score=score+1;
	}

if(score >=7 )
	{
	alert ("You got "+ score + " correct! Congratulations, you passed!");
	score = score * 10;
	parent.reportScores( score );
	}
else
	{
	alert ("You got "+ score +" correct! You need " + 7 - score +" more correct to pass! Retry it!");
	score = score * 10;
	parent.reportScores( score );
	}
		
}