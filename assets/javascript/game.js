var win = 0;
var guessesLeft = 13;
var guessesSoFar = "";

var tracks = ["boulevard","shoco","twister","summersend","aquatica"];
var getRandomSong = tracks[Math.floor(Math.random() * tracks.length)];
var trackBlanks = ""

if (getRandomSong = tracks[0]){
	trackBlanks = "_ _ _ _ _ _ _ _ _";
}
else if (getRandomSong = tracks[1]){
	trackBlanks = "_ _ _ _ _";
} 

else if (getRandomSong = tracks[2]){
	trackBlanks = "_ _ _ _ _ _ _";
} 

else if (getRandomSong = tracks[3]){
	trackBlanks = "_ _ _ _ _ _ _ _ _ _";
} 

else {
	trackBlanks = "_ _ _ _ _ _ _ _";
}

console.log(getRandomSong);
console.log(trackBlanks);
// // var alphabet = "abcdefghijklmnopqrstuvwxyz";
// // for (i = 0; i < alphabet.length; i++) {
// // 	var r = getRandomSong.replace(charAt[i],'_ ')
// // 	}

// var data = {
// 	getRandomSong
// }

// console.log(getRandomSong);
// console.log(data);

document.onkeyup = function(event){

	var key = event.key;
	
	if (key == "a" || key == "b" || key == "c" || key == "d" || key == "e" || key == "f" || key == "g" || key == "h" || key == "i" || key == "j" || key == "k" || key == "l" || key == "m" || key == "n" || key == "o" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "u" || key == "v" || key == "w" || key == "x" || key == "y" || key == "z" ) {
		if (key !== getRandomSong.charAt(0) && key !== getRandomSong.charAt(1) && key !== getRandomSong.charAt(2) && key !== getRandomSong.charAt(3) && key !== getRandomSong.charAt(4) && key !== getRandomSong.charAt(5) && key !== getRandomSong.charAt(6) && key !== getRandomSong.charAt(7) && key !== getRandomSong.charAt(8) && key !== getRandomSong.charAt(9) && key !== getRandomSong.charAt(10)) {
			if (key !== guessesSoFar.charAt(0) && key !== guessesSoFar.charAt(2) && key !== guessesSoFar.charAt(4) && key !== guessesSoFar.charAt(6) && key !== guessesSoFar.charAt(8) && key !== guessesSoFar.charAt(10) && key !== guessesSoFar.charAt(12) && key !== guessesSoFar.charAt(14) && key !== guessesSoFar.charAt(16) && key !== guessesSoFar.charAt(18) && key !== guessesSoFar.charAt(20) && key !== guessesSoFar.charAt(22) && key !== guessesSoFar.charAt(24) && key !== guessesSoFar.charAt(26)) {
				guessesSoFar += key + " ";
				guessesLeft--;
				document.querySelector('#guesses').innerHTML = "Guesses left: " + guessesLeft;
				document.querySelector('#left').innerHTML = "Your Guesses so far: " + guessesSoFar;
			}
		}
	}
	if (guessesLeft == 0) {
		losses++;
		document.querySelector('#loss').innerHTML = "Losses: " + losses;
		guessesLeft = 13;
		document.querySelector('#guess').innerHTML = "Guesses left: " + guessesLeft;
		guessesSoFar = "";
		document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessesSoFar;
		getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(getRandomLetter);
	}

}