document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');

    // Clears the display
    const clearDisplay = () => (display.value = '');

    // Deletes the last character
    const deleteChar = () => (display.value = display.value.slice(0, -1));

    // Appends a character to the display
    const appendChar = (char) => (display.value += char);

    // Evaluates the expression and handles errors
    const calculate = () => {
        try {
            display.value = eval(display.value) || '';
        } catch {
            display.value = 'Error';
        }
    };

    // Expose functions globally
    window.clearDisplay = clearDisplay;
    window.deleteChar = deleteChar;
    window.appendChar = appendChar;
    window.calculate = calculate;
});