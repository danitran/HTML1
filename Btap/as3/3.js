const n1 = parseInt(prompt("Enter the first number:"));
const n2 = parseInt(prompt("Enter the second number:"));
const n3 = parseInt(prompt("Enter the third number:"));
const sum = n1 + n2 + n3;
const product = n1 * n2 * n3;
const average = sum / 3;
document.body.innerHTML = `<p>Sum: ${sum}</p><p>Product: ${product}</p><p>Average: ${average}</p>`;
