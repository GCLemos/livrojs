const frm = document.querySelector("form")
const outDividers = document.getElementById("outDividers")
const outPerfect = document.getElementById("outPerfect")

frm.inNumber.focus()

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    let respDividers = ""
    let respPerfect = ""

    let dividersList = "Dividers of " + number + ": 1"
    let totalSum = 1


    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            totalSum += i
            dividersList += `, ${i}`
        }
    }

    respDividers = `${dividersList} (Sum: ${totalSum})`

    if (totalSum == number) {
        respPerfect = `${number} is a Perfect Number`
    } else {
        respPerfect = `${number} is not a Perfect Number`
    }

    outDividers.innerText = `${respDividers}`
    outPerfect.innerText = respPerfect

    frm.inNumber.value = ""
    frm.inNumber.focus()
})

