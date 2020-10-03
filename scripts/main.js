var typed = new Typed('.typed-text', {
  strings: ["Software Engineer",  "FullStack Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 200
});


// // Getting the DOM elements
// const typedText = document.querySelector('.typed-text');
// const cursor = document.querySelector(".cursor");

// // Setting up the variable
// const textArray = ['Software Engineer', 'FullStack Developer', 'Freelancer'];
// // Setting up a typing delay to 200ms
// const typingDelay = 200;
// //Setting up the erasing delay to 100ms
// const erasingDelay = 100;
// //Setting-up delay between current and next tex to 2000ms
// const newTextDelay = 2000;
// //To keep track;Setting up the current index
// let textArrayIndex = 0;
// //To keep track;Setting up the first character
// let charIndex = 0;

/* Setting up the typing function to type the index array
for it to wait a second and call itself again to type the 
second index 
*/

// function type() {
//   // Setting up the current index to the length of a right
//   if (charIndex < textArray[textArrayIndex].length) {
//     if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
//     //We're here let's add the next character to the current text content of the class typedText
//     debugger
    
//     typedText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     // typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
//     //Increase in the car and decks by one
//     charIndex++;
//     // Setting up a timer function
//     setTimeout(type, typingDelay);
//   }
//   //Otherwise eraise the current text before displaying the second text 
//   else {
//     cursor.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
// }

// //Setting up the delay Attribute before calling the erase function
// function erase() {
//   // If character index is less than zero remove the character and call the erase function
// 	if (charIndex > 0) {
//     if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
//     //Setting up where the next index is replaced with a cold character index
//     typedText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
//     //Decrease character index by one
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } 
//   else {
//     cursor.classList.remove("typing");
//     //Increasing the textArray index by one allows it to move to the next string
//     textArrayIndex++;

//     if(textArrayIndex>=textArray.length) textArrayIndex=0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// //Setting up the point of execution aka when the type() gets called
// document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//   // Adding some delay
//   if(textArray.length) setTimeout(type, newTextDelay + 250);
// });