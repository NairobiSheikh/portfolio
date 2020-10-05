// ES6 Class
class TypeWriter {
  constructor(textElement, words, wait = 3000) {
    this.textElement = textElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fulltext = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.text = fulltext.substring(0, this.text.length - 1);
    } else {
      // Add char
      this.text = fulltext.substring(0, this.text.length + 1);
    }

    // Insert text into element
    this.textElement.innerHTML = `<span class="text">${this.text}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.text === fulltext) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.text === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const textElement = document.querySelector('.text-type');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(textElement, words, wait);
}

//contact form section
//seting up the variables
const signUpButton = document.getElementById('signUp');
const PreviousButton = document.getElementById('Previous');
const content = document.getElementById('content');

//creating the signup amnd previous button
signUpButton.addEventListener('click', () => {
  //
	content.classList.add("right-panel-active");
});

PreviousButton.addEventListener('click', () => {
	content.classList.remove("right-panel-active");
});
