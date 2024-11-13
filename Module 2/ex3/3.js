let dogs = [];

for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(name);
}

dogs.sort().reverse();

document.write("<ul>");
for (let name of dogs) {
    document.write(`<li>${name}</li>`);
}
document.write("</ul>");
