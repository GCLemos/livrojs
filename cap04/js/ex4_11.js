const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const permittedSpeed = Number(frm.inPermittedSpeed.value)
    const driverSpeed = Number(frm.inDriverSpeed.value)

    if (driverSpeed > permittedSpeed) {
        if (driverSpeed < permittedSpeed * 1.2) {
            resp.innerText = `Situation: Light Fine`
        } else {
            resp.innerText = `Situation: Serious Fine`
        }
    } else {
        resp.innerText = `Situation: No Fine`
    }
})