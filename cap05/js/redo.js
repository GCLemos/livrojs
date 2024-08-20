const frm = document.querySelector("form")
const outList = document.getElementById("outList")
const outTotal = document.getElementById("outTotal")

let billsCounter = 0
let answList = ""
let answTotal = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const billDescription = frm.inDescription.value
    const billValue = Number(frm.inValue.value)

    billsCounter++
    answTotal += billValue
    answList = answList + billDescription + " - $: " + billValue.toFixed(2) + "\n"

    outList.innerText = `${answList}`
    outTotal.innerText = billsCounter + " Bill(s)" + " - Total $: " + answTotal.toFixed(2)

    frm.inDescription.value = ""
    frm.inValue.value = ""
    frm.inDescription.focus()
})

