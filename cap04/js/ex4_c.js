const frm = document.querySelector("form")

const respTime = document.querySelector("#respTime")
const respChange = document.querySelector("#respChange")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const depositedValue = Number(frm.inValue.value)

    if (depositedValue >= 1) {
        if (depositedValue < 1.75) {
            respTime.innerText = `Time: 30 min`
            let change = depositedValue - 1
            respChange.innerText = `Change $: ${change.toFixed(2)}`
        } else if (depositedValue >= 1.75 && depositedValue < 3) {
            respTime.innerText = `Time: 60 min`
            let change = depositedValue - 1.75
            respChange.innerText = `Change $: ${change.toFixed(2)}`
        } else {
            respTime.innerText = `Time: 120 min`
            let change = depositedValue - 3
            respChange.innerText = `Change $: ${change.toFixed(2)}`
        }
    } else {
        respTime.innerText = `Insuficient Amount`
    }
})