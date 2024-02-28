const frm = document.querySelector("form")

const showPromotionVehicleName = document.getElementById('outPromotionVehicleName')
const showDownPayment = document.getElementById('outDownPayment')
const showInstallments = document.getElementById('outInstallments')

frm.addEventListener("submit", (e) => {
    const vehicle = frm.inVehicleName.value
    const price = Number(frm.inPrice.value)

    const downPayment = price * 0.50
    const installments = (price * 0.50) / 12

    showPromotionVehicleName.innerText = `Promotion: ${vehicle}`
    showDownPayment.innerText = `Downpayment of $: ${downPayment.toFixed(2)}`
    showInstallments.innerHTML = `+12x of $ ${installments.toFixed(2)}`

    e.preventDefault()
})