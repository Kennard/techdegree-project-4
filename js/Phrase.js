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
		const letter = this.phrase.split('');
		const ul = document.querySelector('ul');
			
		for (let i = 0; i < letter.length; i += 1 ){
			const letters = letter[i];
			const li = document.createElement('li');
				li.innerHTML = letters;
				ul.appendChild(li);
					if(letters !== " "){
						li.setAttribute('class', "hide letter "  + letters);
				 	} else{
				 		li.setAttribute('class', "space");
				 	}
		}
	}

	/*
	* Checks to see if letter selected by player matches
	* a letter in the phrase	
	*/
	checkLetter(){}

	/*
	*  Reveals letters that matches player letters  	
	*/
	showMatchedLetter(){}

}