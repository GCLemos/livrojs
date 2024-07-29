let num 

do {
    num = Number(prompt("Number: "))
    if (num == 0 || isNaN(num)) {
        alert("Type a valid number...")
    }
} while (num == 0 || isNaN(num))
let pairs = `Pairs between 1 and ${num}: `
for (let i = 2; i <= num; i = i + 2) {
    pairs = pairs + i + ", "
}
alert(pairs)