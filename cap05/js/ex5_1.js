const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)
    let answer = ''

    for (let i = 1; i <= 10; i++) {
        answer = `${answer}${number} x ${i} = ${number * i}\n`
    }
    resp.innerText = answer
})