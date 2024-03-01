const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const name = frm.inName.value
    const grade1 = Number(frm.inGrade1.value)
    const grade2 = Number(frm.inGrade2.value)
    const average = (grade1 + grade2) / 2

    resp1.innerText = `Grades Average ${average.toFixed(2)}`

    if (average >= 7) {
        resp2.innerText = `Congratulations ${name}! You've been Aproved!`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Oops ${name}... You've been Reproved`
        resp2.style.color = "red"
    }
})