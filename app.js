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
		console.log("Play");
	var card = $('#card');
//The following puts the cards on the board. 14 is used because there are 13 cards in each suit:
	var cardSort = [1,2,3,4,5,6,7,8,9,10,11,12,13];

	// Source : http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
	function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

	shuffle(cardSort);
	//after shuffling, cardSort will be [5,1,8,3,10,2,13..etc]
	for (var i = 0; i < 13; i++) {
		var newCard = $('<div>');
		newCard.css('background-image', 'url(PlayingCards/PNG/' +  cardSort[i] +'_of_clubs.png)');
		newCard.addClass('card');
		var $discard = $('#discard');
		newCard.click(function(){
			var x = Math.floor(Math.random() * 200) + 100;
		$(this).css('transform', 'translateX('+ x +'px)');
	//		$(this).addClass('card-moved');
	//		$discard.append(this);
		})
		card.append(newCard);
	};
	var card = $('#card');
	shuffle(cardSort);
	for (var i = 0; i < 13; i++) {
		var newCard = $('<div>');
		newCard.css('background-image', 'url(PlayingCards/PNG/' +  cardSort[i] +'_of_diamonds.png)');
		newCard.addClass('card');
		var $discard = $('#discard');
		newCard.click(function(){
			var x = Math.floor(Math.random() * 200) + 100;
	//	$(this).css('transform', 'translateX('+ x +'px)');
		$(this).css('transform', 'rotateZ('+ x +'px)');
	//		$discard.append(this);
		})
		card.append(newCard);
	};
	shuffle(cardSort);
	for (var i = 0; i < 13; i++) {
		
		var newCard = $('<div>');
		newCard.css('background-image', 'url(PlayingCards/PNG/' +  cardSort[i] +'_of_spades.png)');
		newCard.addClass('card');
		var $discard = $('#discard');
		newCard.click(function(){
			var x = Math.floor(Math.random() * 200) + 100;
		$(this).css('transform', 'translateX('+ x +'px)');
	//		$discard.append(this);
		})
		card.append(newCard);
	};
	shuffle(cardSort);
	for (var i = 0; i < 13; i++) {
		
		var newCard = $('<div>');
		newCard.css('background-image', 'url(PlayingCards/PNG/' +  cardSort[i] +'_of_hearts.png)');
		newCard.addClass('card');
		var $discard = $('#discard');
		newCard.click(function(){
			var x = Math.floor(Math.random() * 200) + 100;
		$(this).css('transform', 'translateX('+ x +'px)');
	//	$discard.append(this);
		})
		card.append(newCard);
		};
			//adding a click even to the cards. The cards will append to the discard pile. 
	})
});







	

//create the timer--saving you for later...

///var timer = function (time){
///	var display = $('#timer');
///	display.innerHTML= time;

///}


//code that didn't work/land of rejected code:

//Tried to incorporate code from this site to animate the cards: https://github.com/vineetgarg90/playing-cards/blob/master/js/script.js
//It didn't work. 
///In this instance, I tried to just put in alerts that activated with the clicks because I couldn't get the cards
//to click. This, of course, didn't work. 
//function alert() {
//		alert("pick them up!");
//	};
//	function alert2(){
//		alert("keep trying ha ha");
//	} timer 1000;


//source: http://www.techigniter.in/tutorials/animating-playing-cards-using-jquery-and-css-part-1/
//This is yet another failed attempt at making my cards animate and go into at least one position:
//I copied and pasted the code as is to see if it would work for quality control purposes. Of course it didn't:
//function animate_card(deg){
//	var start = 0;
//	var end = deg;
//	var step = deg/total_cards;
//	var angle = 0;
//	$('.card').each(function(){
//		$(this).css({
//					'transform' : 'rotate('+ angle +'deg)',
//					'-webkit-transform' : 'rotate('+ angle +'deg)',
//					'-moz-transform' : 'rotate('+ angle +'deg)',
//					'-ms-transform' : 'rotate('+ angle +'deg)',
//		});
//		angle += step;
//	});
//} If this did work, the source was of course, going to be cited.
//my failed attempt at making my cards clickable to go into the discard pile:
//var newCard = $('#card');
//		var $discard = $('#discard');
//		$discard.append('<div id=' + $card + '>' + $card + '</div>');


//my attempt at making the cards fall randomly onto the page source: http://stackoverflow.com/questions/20899167/how-to-make-a-random-image-generator-for-website:
//	function random (){
//		for (var i=0; i<53; i++){
//			$('#card')= Math.floor(Math.random() * newCard.length);
//		}
//	};

//	});
//})
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
//Take 3--Why? I thought that by moving this up there, that with the click of the button that the card would show. It didn't work.: 

//$(document).ready(function(){
//	$('button').click(function(){  //this ensures that my button works. It worked!
//	var $board=$('#board');
//	var card = function (){
//	for (var i=0; i<52; i++){
//		var $card=$('<div>');
//		$card.html('img src="2_of_clubs.png"/>');
//		$board.append($card);
//	}
//};	
//	});
//})


//});---------I was trying to put just one card on the board. I referred back to past homework to try to get this to work

//$(document).ready(function(){
//	console.log("Play");
//	})-------------------I kept getting an Uncaught ReferenceError that $ was not defined even though I put the code to enable jQuery into my HTML, saved, and refereshed both pages.
//var $myButton = $('button');
//$($myButton).click(function(event){
//	console.log("play me");
//})----This code was from class and I wrote it down in my notebook. I was just trying to get the darn button to work and it did notthing.