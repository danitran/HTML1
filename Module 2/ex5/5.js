let numbers = [];
let num;

while (true) {
    num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        console.log("This number has already been entered! Stopping...");
        break;
    }

    numbers.push(num);
}

numbers.sort((a, b) => a - b);

console.log("All entered numbers in ascending order:");
for (let n of numbers) {
    console.log(n);
}
