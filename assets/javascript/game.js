// var win = 0;
// var guessesLeft = 13;
// var guessesSoFar = "";

// var tracks = ["boulevard","shoco","twister","summersend","aquatica"];
// var randomWord = tracks[Math.floor(Math.random() * tracks.length)];
// var trackBlanks = ""

// if (randomWord = tracks[0]){
// 	trackBlanks = "_ _ _ _ _ _ _ _ _";
// }
// else if (randomWord = tracks[1]){
// 	trackBlanks = "_ _ _ _ _";
// } 

// else if (randomWord = tracks[2]){
// 	trackBlanks = "_ _ _ _ _ _ _";
// } 

// else if (randomWord = tracks[3]){
// 	trackBlanks = "_ _ _ _ _ _ _ _ _ _";
// } 

// else {
// 	trackBlanks = "_ _ _ _ _ _ _ _";
// }

// console.log(randomWord);
// console.log(trackBlanks);
// // // var alphabet = "abcdefghijklmnopqrstuvwxyz";
// // // for (i = 0; i < alphabet.length; i++) {
// // // 	var r = randomWord.replace(charAt[i],'_ ')
// // // 	}

// // var data = {
// // 	randomWord
// // }

// // console.log(randomWord);
// // console.log(data);

// document.onkeyup = function(event){

// 	var key = event.key;
	
// 	if (key == "a" || key == "b" || key == "c" || key == "d" || key == "e" || key == "f" || key == "g" || key == "h" || key == "i" || key == "j" || key == "k" || key == "l" || key == "m" || key == "n" || key == "o" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "u" || key == "v" || key == "w" || key == "x" || key == "y" || key == "z" ) {
// 		if (key !== randomWord.charAt(0) && key !== randomWord.charAt(1) && key !== randomWord.charAt(2) && key !== randomWord.charAt(3) && key !== randomWord.charAt(4) && key !== randomWord.charAt(5) && key !== randomWord.charAt(6) && key !== randomWord.charAt(7) && key !== randomWord.charAt(8) && key !== randomWord.charAt(9) && key !== randomWord.charAt(10)) {
// 			if (key !== guessesSoFar.charAt(0) && key !== guessesSoFar.charAt(2) && key !== guessesSoFar.charAt(4) && key !== guessesSoFar.charAt(6) && key !== guessesSoFar.charAt(8) && key !== guessesSoFar.charAt(10) && key !== guessesSoFar.charAt(12) && key !== guessesSoFar.charAt(14) && key !== guessesSoFar.charAt(16) && key !== guessesSoFar.charAt(18) && key !== guessesSoFar.charAt(20) && key !== guessesSoFar.charAt(22) && key !== guessesSoFar.charAt(24) && key !== guessesSoFar.charAt(26)) {
// 				guessesSoFar += key + " ";
// 				guessesLeft--;
// 				document.querySelector('#guesses').innerHTML = "Guesses left: " + guessesLeft;
// 				document.querySelector('#left').innerHTML = "Your Guesses so far: " + guessesSoFar;
// 			}
// 		}
// 	}
// 	if (guessesLeft == 0) {
// 		losses++;
// 		document.querySelector('#loss').innerHTML = "Losses: " + losses;
// 		guessesLeft = 13;
// 		document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
// 		guessesSoFar = "";
// 		document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessesSoFar;
// 		getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// 		console.log(getRandomLetter);
// 	}

// }

var words = ['ghostsnstuff', 'cafedelmar', 'pulsewidth', 'porcelain', 'foranangel', 'nothingbutyou']
var correctLettersGuessed = [];
var randomWord;
var audio;
var correctletterCounter = 0;
var win = 0;
var guessesLeft = 14;
var guessesSoFar = "";


function setGame(){
        randomWord = words[Math.floor(Math.random()*words.length)];
        correctLetterCounter = 0;
        correctLettersGuessed = [];
        guessesLeft = 14;
        guessesSoFar = "";
        console.log(randomWord);
        var empty = "";
        for (var i=0; i< randomWord.length; i++){
          empty += " _ "
        }
        document.querySelector('#currentWord').innerHTML = empty;
        document.querySelector('#guesses').innerHTML = "Guesses left: 14";
        document.querySelector('#left').innerHTML = "Your guesses so far: ";

      }
function reDraw(){
	var drawThis = "";
	correctLetterCounter = 0;

	for (var i=0; i< randomWord.length; i++){
		if (correctLettersGuessed.indexOf(randomWord[i]) >= 0){

			drawThis += " " + randomWord[i] + " ";
			correctLetterCounter++;
		}
		else {
			drawThis += " _ ";
	}
}

document.querySelector ('#currentWord').innerHTML = drawThis;
}

setGame();

document.onkeyup = function(e){
	var k = e.key;

	if ((randomWord.indexOf(k) >= 0 && (correctLettersGuessed.indexOf(k) == -1))){
		correctLettersGuessed.push(k);
		reDraw();

		if (correctLetterCounter == randomWord.length){
			if (randomWord == "ghostsnstuff") {
				var audio = new Audio('assets/javascript/music/Deadmau5-GhostsnStuff.mp3');
				audio.play();
				document.querySelector('p').innerHTML = "You correctly guessed Ghosts n Stuff by Deadmau5! Refresh the page to play again!";
			}
			else if (randomWord == "cafedelmar") {
				var audio = new Audio('assets/javascript/music/Energy52-CafeDelMarDeadmau5Remix.mp3');
				audio.play();
				document.querySelector('p').innerHTML = "You correctly guessed Cafe Del Mar by Energy 52! Refresh the page to play again!";
			}
			else if (randomWord == "pulsewidth") {
				var audio = new Audio('assets/javascript/music/AphexTwin-Pulsewidth.mp3');
				audio.play();
				document.querySelector('p').innerHTML = "You correctly guessed Pulsewidth by Aphex Twin! Refresh the page to play again!";
			}
			else if (randomWord == "porcelain") {
				var audio = new Audio('assets/javascript/music/Moby-Porcelain.mp3');
				document.querySelector('p').innerHTML = "You correctly guessed Porcelain by Moby! Refresh the page to play again!";
				audio.play();
			}
			else if (randomWord == "foranangel") {
				var audio = new Audio('assets/javascript/music/PaulVanDyk-ForAnAngel.mp3');
				document.querySelector('p').innerHTML = "You correctly guessed For An Angel by Paul Van Dyk! Refresh the page to play again!";
				audio.play();
			}
			else if (randomWord == "nothingbutyou") {
				var audio = new Audio('assets/javascript/music/PaulVanDyk-NothingButYou.mp3');
				document.querySelector('p').innerHTML = "You correctly guessed Nothing But You by Paul Van Dyk! Refresh the page to play again!";
				audio.play();
			}
			// setGame();
		}
	}
	// } else{
	// 	console.log(false)


 // document.onkeyup = function(e){

	// var key = e.key;

	if (k !== randomWord.charAt(0) && k !== randomWord.charAt(1) && k !== randomWord.charAt(2) && k !== randomWord.charAt(3) && k !== randomWord.charAt(4) && k !== randomWord.charAt(5) && k !== randomWord.charAt(6) && k !== randomWord.charAt(7) && k !== randomWord.charAt(8) && k !== randomWord.charAt(9) && k !== randomWord.charAt(10)) {
			if (k !== guessesSoFar.charAt(0) && k !== guessesSoFar.charAt(2) && k !== guessesSoFar.charAt(4) && k !== guessesSoFar.charAt(6) && k !== guessesSoFar.charAt(8) && k !== guessesSoFar.charAt(10) && k !== guessesSoFar.charAt(12) && k !== guessesSoFar.charAt(14) && k !== guessesSoFar.charAt(16) && k !== guessesSoFar.charAt(18) && k !== guessesSoFar.charAt(20) && k !== guessesSoFar.charAt(22) && k !== guessesSoFar.charAt(24) && k !== guessesSoFar.charAt(26)) {
				guessesSoFar += k + " ";
				guessesLeft--;

document.querySelector('#guesses').innerHTML = "Guesses left: " + guessesLeft;
document.querySelector('#left').innerHTML = "Your guesses so far: " + guessesSoFar;
			}
		}
		if (guessesLeft == 0) {
		setGame();
	}
	}

