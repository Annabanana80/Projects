//Planning phase:
//Should create an onload function
//Should declare a variable for an array for all cards. Will download images of cards.
//Should generate cards by grabbing element by the id when the button is clicked. Should loop over the array to shuffle to cards.
//The cards should fall randomly onto the page.
//Cards should be clickable and should go into a pile *or* can disappear from the table
//When the button is clicked, the timer should start AND the cards will be thrown onto the table.

//TL/DR: When the button is clicked the following should happen:
	//Cards are generated and thrown randomly onto the page
	//The timer starts counting down
//To win, the player must click and pick up all of the cards before the timer hits 00:00:00.
$(document).ready(function(){
	$('button').click(function(){  //this ensures that my button works. It worked!
		console.log("play me");
	});
})

//Just get one card onto the page
var $board=$('#board');
var card = function (){
	for (var i=0; i<52; i++){
		var $card=$('<div>');
		$card.html('img src="2_of_clubs.png"/>');
		$board.append($card);
	}
};

















//code that didn't work/land of rejected code:
//Now I need to write code for my cards and my timer. 
//I will first write code for my cards to come onto the page when the button is clicked.
//var pickUp = function(){
//	var folder = "" //now to have my cards appear from the folder and show on the page
//	var randomCards=Math.random();
//var $board=$('#board');
//$cards.click(function(){
	//for (var i=0; i<52; i++){
		//var $card=$('<div>');
		//$card.html('img src="2_of_clubs.png"/>');
		//$board.append($card);
	//}

//Take 2--it still didn't work by the way: 
//var $board=$('#board');
//var card = function (){
	//for (var i=0; i<52; i++){
		//var $card=$('<div>');
		//$card.html('img src="2_of_clubs.png"/>');
		//$board.append($card);
	//}
///};

//});---------I was trying to put just one card on the board. I referred back to past homework to try to get this to work

//$(document).ready(function(){
//	console.log("Play");
//	})-------------------I kept getting an Uncaught ReferenceError that $ was not defined even though I put the code to enable jQuery into my HTML, saved, and refereshed both pages.
//var $myButton = $('button');
//$($myButton).click(function(event){
//	console.log("play me");
//})----This code was from class and I wrote it down in my notebook. I was just trying to get the darn button to work and it did notthing.