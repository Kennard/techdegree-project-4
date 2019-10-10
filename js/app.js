/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
game.startGame();

console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

console.log(game.getRandomPhrase().phrase);

// document.getElementById('btn__reset').addEventListener('click', function(){
// 	game.startGame();


// });

// const keyrow = document.getElementById('qwerty');
// const keys = keyrow.querySelectorAll('.key');


// for (let i = 0; i < keys.length; i++){ 
//   keys[i].addEventListener('click', function(e){
// 	e.target.handleInteraction();
// 	})
// }


// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
