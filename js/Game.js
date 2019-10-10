/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 	constructor(){
 		this.missed = 0;
 		this.phrases = this.createPhrases(); 
 		this.activePhrase = null;
  	}
 	/**
 	* Create 5 phrase for use in game
	* @return {array} An array of phrases that could be used in the game
 	*/
 	createPhrases(){
 		const phrase1 = new Phrase('Show me the money');
		const phrase2 = new Phrase('We rob banks');
		const phrase3 = new Phrase('I see dead people');
		const phrase4 = new Phrase('You talking to me');
		const phrase5 = new Phrase('My precious');
		const phrases = [];
		phrases.push(phrase1,phrase2,phrase3,phrase4,phrase5);
 		return phrases;
 	}

 	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
  	startGame(){
  		const start = document.getElementById('overlay');
  		start.style.display = 'none';
      this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
      this.activePhrase.addPhraseToDisplay();
  	}

	 /**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
  	getRandomPhrase(){
  	  const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
      return phrase;
    }


	/*
 	* game logic
 	*/
  	handleInteraction(){
  		
  		/* Disable the selected letter’s onscreen keyboard button.


  		/*If the phrase does not include the guessed letter, add the wrong CSS class
  		  to the selected letter's keyboard button and call the removeLife() method
  		*/


  		/* If the phrase includes the guessed letter, add the chosen CSS class to the 
  		   selected letter's keyboard button, call the showMatchedLetter() method on the phrase, 
  		   and then call the checkForWin() method. 
  		   If the player has won the game, also call the gameOver() method.
		*/


  	}

  	/*
  	* remove Life from scoreboard
   	*/
  	removeLife(){

  	}

  	/*
  	* Check for Win!
  	*/ 
  	checkForWin(){

  	}

	/*
  	* Game Over!
  	*/ 
  	gameOver(){

  	}




 }