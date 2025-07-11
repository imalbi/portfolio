// src/lib/animateTyping.js
// Function to animate typing effect on a node with given text
//expect a string not an array
export function animateTyping(node, textToType) {
	let charIndex = 0;
	let currentText = '';

	function typeEffect() {
		if (charIndex < textToType.length) {
			currentText += textToType[charIndex];
			node.textContent = currentText;
			charIndex++;
			setTimeout(typeEffect, 100); // Adjust typing speed here
		}
	}

	typeEffect();
}
