/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
	constructor(phrase){
		this.phrase = phrase.toLowerCase();
	}

	/**
	* Display phrase on game board
	*/
	addPhraseToDisplay(){
		const letters = this.phrase.split('');
		const ul = document.querySelector('ul');
			
		letters.forEach(letter => {
		const li = document.createElement('li');
			li.innerHTML = letter;
			ul.appendChild(li);
				if(letter !== " "){
					li.setAttribute('class', "hide letter "  + letter);
			 	} else{
			 		li.setAttribute('class', "space");
			 	}
		});
			
	}

	/**
	* Checks if passed letter is in phrase
	* @param (string) letter - Letter to check
	*/
	checkLetter(letter){
		const phrase = this.phrase.split('');

		let boolVal = phrase.includes(letter);
			
		return boolVal;	
	}

	/**
	* Displays passed letter on screen after a match is found
	* @param (string) letter - Letter to display
	*/
	showMatchedLetter(letter){
		const phrase = this.phrase.split('');
		const matched = phrase.includes(letter);
		const ul = document.querySelector('ul');
		const li = ul.querySelectorAll('.hide');
			
		li.forEach( key => {
			if(letter == key.innerHTML){
				key.setAttribute('class', "show letter");
			}
		});		 		
	}

}