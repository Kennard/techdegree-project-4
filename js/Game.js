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
 		const phrase1 = new Phrase('I am gonna kill Bill');
		const phrase2 = new Phrase('Im king of the world');
		const phrase3 = new Phrase('I am Groot');
		const phrase4 = new Phrase('I want to play a game');
		const phrase5 = new Phrase('I see dead people');
		const phrases = [];
		phrases.push(phrase1,phrase2,phrase3,phrase4,phrase5);
 		return phrases;
 	}

 	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
  	startGame(){
      // reset the game phrase keys
      const ul = document.querySelector('ul');
      const li = ul.querySelectorAll('li');  
      li.forEach(key => {
        ul.removeChild(key);
      })
      // reset button element class
      const buttons = document.querySelectorAll('button')
        buttons.forEach(button => {
          button.disabled = false;
          button.setAttribute('class', 'key')
        });

      // reset the heart image and misses
       this.missed = 0;

       const hearts = document.querySelectorAll('img');

       hearts.forEach( heart => {
        if(heart.getAttribute('src') == 'images/lostHeart.png'){
           heart.setAttribute('src','images/liveHeart.png') 
        }     
       });  

      // start game an add random phrase  
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

	/**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  	handleInteraction(button){
      //button represent the html element so we disabled here if clicked
      button.disabled = true;    
      // We pull the letter out of button element to test wether it matches our phrase
      let letter = button.innerHTML;
      let boolVal = this.activePhrase.checkLetter(letter);
             
        if(boolVal == true){
          button.setAttribute('class', "chosen");
          this.activePhrase.showMatchedLetter(letter);
          game.checkForWin();       
        }else {
          button.setAttribute('class', "wrong");
          game.removeLife();
        }  

        if(game.checkForWin() === true){
            game.gameOver(true);
          }  
          
   	}

  	/**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){   
      const hearts = document.querySelectorAll('img');
      const lives =  this.missed ++;
      
       console.log(lives); 

      hearts.forEach( function(heart, index) {
        if(index == lives){
            heart.setAttribute('src','images/lostHeart.png')
          }
        });

        if(lives === 4){
          this.gameOver(this.checkForWin());
        } 

    }

  	/**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
  	checkForWin(){

    const ul = document.querySelector('ul');
    const hide = ul.querySelectorAll('.hide');
    const show = ul.querySelectorAll('.show');
    
    let phrase = this.activePhrase.phrase.split('');
         
      // remove space from phrase     
      phrase = phrase.filter( space => {
            return /\S/.test(space);
      });

      if(show.length == phrase.length){
         return true;
       }else{
          return false;
      }
  	}

	/**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
      const start = document.getElementById('overlay');
      const message = start.children[1];
      start.style.display = 'block';

       if(gameWon == true){
           start.setAttribute('class', 'win')
           message.innerHTML = 'Great Job!';
        }else if(gameWon == false){
           start.setAttribute('class', 'lose')
           message.innerHTML = 'Sorry, better luck nex time!';
        }
    }


 }