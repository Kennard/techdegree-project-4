/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game  = new Game();

document.getElementById('btn__reset').addEventListener('click', function(){
	game.startGame();

});
	
const button = document.getElementById('qwerty').addEventListener('click', function(e){
		let button = e.target;
		if ( button.nodeName == "BUTTON") {
			game.handleInteraction(button);		
		}
});