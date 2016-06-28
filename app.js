var data = firebase.database();

$(document).ready(function(){

// creating an array for game options, scores and players

var gameOptions = ["rock","paper","scissors"];
var player1Options = ["rock", "paper", "scissors"];
var player2Options = ["rock","paper","scissors"];
var wins = [0];
var loses = [0];
var ties = [0];
var players = ["Player 1", "Player 2"];

// create onclick so user name displays on page

$("#addname").on("click", function(){
	var nameinput = $("#nameinput").val();

	data.ref().set({
		name: nameinput,
	});
});
	return false;

$("#option1").on('click', function(){
		var value = $("#optionInput").val();

		gameOptions.push(value);
	}


	if(player1Options === player2Options);{
		ties++;
	}

	if(player1Options === "rock" && player2Options === "scissors");{
		wins++;
	} else{
		loses++;
	}

	if(player1Options === "paper" && player2Options === "rock");{
		wins++;
	}else{
		loses++;
	}

	if(player1Options === "scissors" && player2Options === "paper");{
		wins++;
	}else{
		loses++;
	}

	document.body.text =
		'<p>win: ' + win+ '</p>' + 
		'<p>lose: ' + lose + '</p>' +
		'<p>tie: ' + tie + '</p>' +
//creating onclick for
// gameOptions so when clicked results appear on page
// 2. create way for player 1/2 to input info into box and register for game
// 3. create on click for options which updates wins/loses and display to page
// 4. when player 1 or 2 leaves the other remains
// 5. create chat