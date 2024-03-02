const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// adds +5 hours to current time

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const timeBrazil = Number(frm.inTimeBrazil.value) 
    const timeFrance = (timeBrazil + 5) < 24 ? (timeBrazil + 5) : Math.abs((timeBrazil - 19))

    resp.innerText = `Time in France: ${timeFrance.toFixed(2)}`
})
