var player1_name = localStorage.getItem("Player 1");
var player2_name = localStorage.getItem("Player 2");

	var player1_score = 0;
	var player2_score = 0;

document.getElementById("name1").innerHTML = player1_name + " : ";
document.getElementById("name2").innerHTML = player2_name + " : ";

document.getElementById("name1_score").innerHTML = player1_score ;
document.getElementById("name2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
	number1 = document.getElementById("Num1").value;
	number2 = document.getElementById("Num2").value;
	real_answer = parseInt(number1) * parseInt(number2);
	
	question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' class='form-control' style='width: 200px;' id='input_check'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("Num1").value = "";
	document.getElementById("Num2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
	get_answer = document.getElementById("input_check").value;

	 if(get_answer == real_answer){
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("name1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("name2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
