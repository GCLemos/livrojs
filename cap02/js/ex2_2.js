const frm = document.querySelector("form")
const returnTitle = document.querySelector("h3")
const returnDuration = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const title = frm.inTitle.value
    const duration = Number(frm.inDurationMin.value)

    const durationHours = Math.floor(duration / 60) 
    const durationMinutes = duration % 60 
    
    returnTitle.innerText = title
    returnDuration.innerText = `Duration: ${durationHours}hour(s) and ${durationMinutes} minute(s)`

    e.preventDefault()
})
