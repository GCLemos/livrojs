const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const cars = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const model = frm.inModel.value
    const price = Number(frm.inPrice.value)

    cars.push({ model, price })

    frm.inModel.value = ""
    frm.inPrice.value = ""
    inModel.focus()

    frm.btnList.dispatchEvent(new Event("click"))
})

frm.btnList.addEventListener("click", () => {
    if (cars.length == 0) {
        alert("There are no cars in the list")
        return
    }
    const list = cars.reduce((accumulator, car) =>
        accumulator + car.model + " - $: " + car.price.toFixed(2) + "\n", "")
    resp.innerText = `List of Registered Cars\n${"-".repeat(40)}\n${list}`
})

frm.btnFilter.addEventListener("click", () => {
    const max = Number(prompt("What is the max price that the client is up to pay?"))

    if (max == 0 || isNaN(max)) {
        return
    }

    const carsFilter = cars.filter(car => car.price <= max)

    if (carsFilter.length == 0) {
        alert("There are no cars with a price lower or equal to the requested")
        return
    }

    let list = ""
    for (const car of carsFilter) {
        list += `${car.model} - $: ${car.price.toFixed(2)}\n`
    }


    resp.innerText = `Cars up to $: ${max.toFixed(2)}\n${"-".repeat(40)}\n${list}`
})

frm.btnSimulate.addEventListener("click", () => {
    const discount = Number(prompt("What's the percentual of discount?"))

    if (discount == 0 || isNaN(discount)) {
        return
    }

    const carsDiscount = cars.map(aux => ({
        model: aux.model,
        price: aux.price - (aux.price * discount / 100)
    }))
    let list = ""
    for (const car of carsDiscount) {
        list += `${car.model} - $: ${car.price.toFixed(2)}\n`
    }
    resp.innerText = `Cars with Discount: ${discount}%\n${"-".repeat(40)}\n${list}`
})