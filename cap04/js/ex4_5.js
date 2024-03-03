const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    const sqrRoot = Math.sqrt(number)

    if (Number.isInteger(sqrRoot)) {
        resp.innerText = `Root: ${sqrRoot}`
    } else {
        resp.innerText = `There is no exact root of ${number}`
    }
})

