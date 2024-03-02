const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = frm.inName.value
    const masculine = frm.inMasculine.value
    const height = frm.inHeight.value

    let weight
    if (masculine) {
        weight = 22 * Math.pow(height, 2)
    } else {
        weight = 21 * Math.pow(height, 2)
    }

    // I've discovered that you can do the same code as above using a ternary operator, it would be: 
    // const weight = masculine ? 22 * Math.pow(height, 2) : 21 * Math.pow(height, 2)
    
    resp.innerText = `${name}: Your ideal weight is ${weight.toFixed(3)} kg`
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})