const frm = document.querySelector("form")
const outResp = document.getElementById("outResp")

frm.inNumber.focus()

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumber.value)

    let resp = ""

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resp += "-"
        } else {
            resp += "*"
        }
    }

    outResp.innerText = `${resp}`

    frm.inNumber.value = ""
    frm.inNumber.focus()
})