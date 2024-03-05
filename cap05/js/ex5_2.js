const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    let answer = `Between ${number} and 1: `

    for (let i = number; i > 1; i--) {
        answer = answer + i + ", "
    }
    resp.innerText = answer + "1."
})