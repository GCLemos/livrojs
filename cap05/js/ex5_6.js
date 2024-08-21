const frm = document.querySelector("form")
const outAnswer = document.getElementById("outAnswer")

let answer = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    let hasDivider = 0

    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            hasDivider = 1
            break
        }
    }

    if (number > 1 && !hasDivider) {
        answer = `${number} is prime.`
    } else {
        answer = `${number} is not prime.`
    }

    outAnswer.innerText = `${answer}`

    frm.inNumber.value = ""
    frm.inNumber.focus()
})
