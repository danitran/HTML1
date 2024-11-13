let participantCount = prompt("Enter the number of participants:");
let participants = [];

for (let i = 0; i < Number(participantCount); i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

document.write("<ol>");
for (let name of participants) {
    document.write(`<li>${name}</li>`);
}
document.write("</ol>");
