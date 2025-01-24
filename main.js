// initializing variables
const userNumber = document.querySelector('input#userInput');
const generateButton = document.querySelector('button#submit');
const gridContainer = document.querySelector('.grid-container');


//
generateButton.addEventListener('click', () => {
    const userInputValue = parseInt(userNumber.value, 10); // Get the number from input
    if (!isNaN(userInputValue) && userInputValue > 0 && userInputValue <= 100) {
        generateGrid(userInputValue);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

// helper function to generate grid 
function generateGrid(userNumber) {
    // Reset the grid by removing old one 
    gridContainer.style.display = 'flex';
    gridContainer.replaceChildren();
    //
    gridContainer.style.display = 'flex';
    gridContainer.style.display = 'wrap';
    gridContainer.style.display = '960px';
    gridContainer.style.display = '960px';
    // 
    for (let i = 0; i < userNumber; i++) {
        //
        for (let j = 0; j <= userNumber; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.setAttribute('class', 'gridDiv');
            // appending to grid container
            gridContainer.appendChild(gridDiv);
        }
    }
    // Close modal and overlay
    overlay.style.display = 'none';
    modal.style.display = 'none';
}