const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const number = Number(frm.inNumber.value)

    const oddOrEven = number % 2 === 0 ? `${number} is even.` :  `${number} is odd.`

    resp.innerText = oddOrEven
})