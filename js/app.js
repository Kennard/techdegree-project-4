/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game  = new Game();

document.getElementById('btn__reset').addEventListener('click', function(){
	game.startGame();

});
	
const buttons = document.getElementById('qwerty');

buttons.addEventListener('click', function(e){
		let button = e.target;
		if ( button.nodeName == "BUTTON") {
			game.handleInteraction(button);		
		}
});

