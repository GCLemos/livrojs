const frm = document.querySelector("form")
const outAnswer = document.getElementById("outAnswer")

let answer = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    let divisorNumber = 0

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            divisorNumber++
        }
    }
    if (divisorNumber == 2) {
        answer = `${number} is prime.`
    } else {
        answer = `${number} is not prime.`
    }

    outAnswer.innerText = `${answer}`

    frm.inNumber.value = ""
    frm.inNumber.focus()
})
