const frm = document.querySelector("form")
const respMistakes = document.querySelector("#outMistakes")
const respChances = document.querySelector("#outChances")
const respTip = document.querySelector("#outTip")

const mistakes = []
const drawn = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    if (number == drawn) {
        respTip.innerText = `Congratulations!! Drawn Number: ${drawn}`
        frm.btnSubmit.disabled = true
        frm.btnNew.className = "display"
    } else {
        if (mistakes.includes(number)) {
            alert(`You've already gambled the number ${number}. Try another one...`)
        } else {
            mistakes.push(number)
            const numMistakes = mistakes.length
            const numChances = CHANCES - numMistakes

            respMistakes.innerText = `${numMistakes} (${mistakes.join(", ")})`
            respChances.innerText = numChances

            if (numChances == 0) {
                alert("Your chances are over...")
                frm.btnSubmit.disabled = true
                frm.btnNew.className = "display"
                respTip.innerText = `Game Over!! Drawn Number: ${drawn}`
            } else {
                const tip = number < drawn ? "greater" : "less"
                respTip.innerText = `Tip: Try a number that is ${tip} than ${number}`
            }
        }
    }
    frm.inNumber.value = ""
    frm.inNumber.focus()

    frm.btnNew.addEventListener("click", () => {
        location.reload()
    })
})