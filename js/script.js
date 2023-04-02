// get all character buttons
const characterButtons = document.querySelectorAll('.character-option');

// add click event listener to each button
characterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove highlight from all buttons
    characterButtons.forEach(button => {
      button.classList.remove('selected');
    });
    
    // highlight the selected button
    button.classList.add('selected');

    const selectedCharacter = button.getAttribute('data-character');
    console.log(`Selected character: ${selectedCharacter}`);
  });
});