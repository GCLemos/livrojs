const frm = document.querySelector("form")

const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const withdrawalAmount = Number(frm.inWithdrawal.value)

    if (Number.isInteger((withdrawalAmount / 10))) {
        const note100 = Math.floor(withdrawalAmount / 100)
        const note50 =  Math.floor((withdrawalAmount - (note100 * 100)) / 50)
        const note10 = (withdrawalAmount - (note100 * 100) - (note50 * 50)) / 10

        resp1.innerText = `notes of 100$: ${note100}`
        resp2.innerText = `notes of 50$: ${note50}`
        resp3.innerText = `notes of 10$: ${note10}`
    } else {
        resp1.innerText = `Sorry, we don't have the notes for this amount.`
        resp2.innerText = ""
        resp3.innerText = ""
    }
})