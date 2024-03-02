const neighboorhood = prompt("Delivery neighboorhood: ")
let deliveryFee

switch (neighboorhood) {
    case "Le Marais":
        deliveryFee = 5.00
        break
    case "Oak Ridge":
        deliveryFee = 7.00
        break
    case "Shibuya":
    case "Valley View":
        deliveryFee = 10.00
        break
    default:
        deliveryFee = 8.00
}
alert(`Delivery fee $: ${deliveryFee.toFixed(2)}`)