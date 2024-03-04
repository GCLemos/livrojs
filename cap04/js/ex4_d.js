const frm = document.querySelector("form")

const respCanTriangle = document.querySelector("#outCanTriangle")
const respTypeTriangle = document.querySelector("#outTypeTriangle")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const sideA = Number(frm.inSideA.value)
    const sideB = Number(frm.inSideB.value)
    const sideC = Number(frm.inSideC.value)

    if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
        respCanTriangle.innerText = `It cannot be a Triangle`
    } else {
        respCanTriangle.innerText = `Sides can form a Triangle`
        if (sideA == sideB && sideB == sideC) {
            respTypeTriangle.innerText = `Type: Equilateral`
        } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
            respTypeTriangle.innerText = `Type: Isosceles`
        } else {
            respTypeTriangle.innerText = `Type: Scalene`
        }
    }
})