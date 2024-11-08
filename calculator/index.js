let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let currentInput = ''; // Store the current input on the display

// Adding event listeners to all the buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');
        
        // Clear Button
        if (value === 'C') {
            currentInput = ''; // Reset current input
            display.value = ''; // Clear the display
        } 
        // Equals Button
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString(); // Perform calculation
                display.value = currentInput; // Update display
            } catch (error) {
                display.value = 'Error'; // Show error if invalid input
            }
        } 
        // Handle Numbers and Operators
        else {
            currentInput += value; // Append the clicked value to current input
            display.value = currentInput; // Update the display with the current input
        }
    });
});
