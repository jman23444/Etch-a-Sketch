// initializing variables
const userNumber = document.querySelector('input#userInput');
const generateButton = document.querySelector('button#submit');
const gridContainer = document.querySelector('.grid-container');
const randomColorButton = document.querySelector('button#randomColor');
const resetButton = document.querySelector('#clear');

// Generating Grid on 'click' of generate Button Element
generateButton.addEventListener('click', () => {
    const userInputValue = parseInt(userNumber.value, 10); // Get the number from input
    if (!isNaN(userInputValue) && userInputValue > 0 && userInputValue <= 100) {
        generateGrid(userInputValue);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

// Toggling state of Random Color Button
randomColorButton.addEventListener('click', () => {
    randomColorButton.classList.toggle('active');
});

// Resetting Grid Button
resetButton.addEventListener('click', () => {
    const gridDivs = document.querySelectorAll('.gridDiv');
    gridDivs.forEach((div) => {
        div.style.backgroundColor = 'white';
        div.style.opacity = 1;
    });
});


// helper function to generate grid 
function generateGrid(userNumber) {
    // Reset the grid by removing old one 
    gridContainer.replaceChildren();
    // 
    for (let i = 0; i < userNumber; i++) {
        //
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        // inner loop 
        for (let j = 0; j < userNumber; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('gridDiv');
            // Adding hover effect 
            gridDiv.addEventListener('mouseover', () => {
                // Checking if randomColorButton is enabled
                if (randomColorButton.classList.contains('active')) {
                    gridDiv.style.backgroundColor = generateRandomColors();
                } else { // if not default coloring is added to hovered elements
                    gridDiv.style.backgroundColor = 'grey';
                    gridDiv.style.opacity = '50%';
                    gridDiv.style.border = '1px solid black';
                }
            });
            // Appending to gridRow 
            gridRow.appendChild(gridDiv);
        }
        // appending gridRow to grid-container
        gridContainer.appendChild(gridRow);
    }
    // Close modal and overlay
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

// Helper Function To Generate Random Colors
function generateRandomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



