//your JS code here. If required.
function getNumbers() {
    // Returns a promise that resolves with an array of numbers after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

getNumbers()
    .then((numbers) => {
        // First chain: Filter out odd numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput(`Filtered even numbers: ${evenNumbers}`);
                resolve(evenNumbers);
            }, 1000); // After 1 second
        });
    })
    .then((evenNumbers) => {
        // Second chain: Multiply the even numbers by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                updateOutput(`Multiplied even numbers: ${multipliedNumbers}`);
                resolve(multipliedNumbers);
            }, 2000); // After 2 seconds
        });
    });
