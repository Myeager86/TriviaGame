// defining global variables 
var count = 60;

var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var timerRunning = false;

$(document).ready(function(){

    // hiding the divs containing the game info 
	$("#game-container").hide();
	$("#end-container").hide();

// on click function for the start button, showing game info 
	$(".start-button").on("click", function(){

		$("#start-container").hide();

        $("#game-container").show();
        
		startCountdown();
		return;

	});

// countdown function 
	function countdown(){

        timerRunning = true;
        count--;
        if (count == 0) {
            $("#timer_number").text("00:00");
        }

        $('#timer_number').html(count + " Seconds");


			// Finish the game after the timer reaches 0
			if(count == 0){
                timerRunning = false 

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
                $("#game-container").hide();
            

			}


	}


    $("#done-button").on("click", function(){
        // Stop the countdown and run the timeUp function
        timerRunning = false;
        count = 0; 
        timeUp();
        $("#game-container").hide();
        $("#timer_number").text("00:00");
        return;

    });

	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// Which radio buttons are checked 
		var Q1 = $('#questionForm input:radio[name="q1"]:checked').val();
		var Q2 = $('#questionForm input:radio[name="q2"]:checked').val();
		var Q3 = $('#questionForm input:radio[name="q3"]:checked').val();
		var Q4 = $('#questionForm input:radio[name="q4"]:checked').val();
		var Q5 = $('#questionForm input:radio[name="q5"]:checked').val();
		var Q6 = $('#questionForm input:radio[name="q6"]:checked').val();

        console.log(
            'Q1', Q1,
            '\nQ2', Q2,
            '\nQ3', Q3,
            '\nQ4', Q4,
            '\nQ5', Q5,
            '\nQ6', Q6
        );
		// right/wrong answers determined here
		if(Q1 == undefined){
            console.log("Q1 == undefined")
            unansweredCount++;
		}
		else if(Q1 == "Greenland"){
            console.log('Q1 == "Greenland"')
			correctCount++;
		}
		else{
            console.log("else")
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "8,000"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Casablanca"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Mona Lisa"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "1989"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "50 inches"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		// show score results
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the end game scores
		$("#end-container").show();


	}

});



