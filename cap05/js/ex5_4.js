
alert("Type 0 to leave.")

do {
    const num = prompt("Type a number: ")
    if (num == 0 || isNaN(num)) {
        const sair = confirm("Confirm exit?")
        if (sair) {
            break
        } else {
            continue
        }
    }
    if (num % 2 == 0) {
        alert(`The double of ${num} is ${num * 2}`)
    } else {
        alert(`The triple of ${num} is ${num * 3}`)
    }

} while (true)
alert("Good bye")
