const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const pricePerKg = Number(frm.inBuffet.value)
    const consumedAmountGrams = Number(frm.inConsume.value)

    const clientTotal = (pricePerKg / 1000) * consumedAmountGrams

    resp.innerText = `Price to be paid $: ${clientTotal.toFixed(2)}` 

    e.preventDefault()
})

