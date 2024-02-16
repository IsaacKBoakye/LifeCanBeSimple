function addNumbers(a, b) {
    return a + b;
}

const resultElement = document.getElementById('result');
resultElement.textContent = `Result: ${addNumbers(2, 3)}`;
