const frm = document.querySelector("form")
const answ1 = document.getElementById("outAnsw1")
const answ2 = document.getElementById("outAnsw2")

let answer = ""
let numBills = 0
let totalValue = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const description = frm.inDescription.value
    const value = Number(frm.inValue.value)

    numBills++
    totalValue += value
    answer = answer + description + " - $: " + value.toFixed(2) + "\n"
    answ1.innerText = `${answer}`
    answ2.innerText = `${numBills} Bill(s) - Total $: ${totalValue.toFixed(2)}`

    frm.inDescription.value = ""
    frm.inValue.value = ""
    frm.inDescription.focus()
})