const frm = document.querySelector("form")
const respName = document.querySelector("span")
const respList = document.querySelector("pre")

const patients = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = frm.inPatient.value

    patients.push(name)

    let list = ""

    for (let i = 0; i < patients.length; i++) {
        list += `${i + 1}. ${patients[i]}\n`
    }
    respList.innerText = list
    frm.inPatient.value = ""
    frm.inPatient.focus()
})

frm.btUrgency.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Inform the name of the patient to be attended in character of urgency.")
        frm.inPatient.focus()
        return
    }

    const name = frm.inPatient.value
    patients.unshift(name)
    let list = ""

    patients.forEach((patient, i) => (list += `${i + 1}. ${patient}\n`))

    respList.innerText = list

    frm.inPatient.value = ""
    frm.inPatient.focus()
})

frm.btAttend.addEventListener("click", () => {
    if (patients.length == 0) {
        alert("There are no patients in the waiting list.")
        frm.inPatient.focus()
        return
    }

    const attend = patients.shift()
    respName.innerText = attend

    let list = ""

    patients.forEach((patient, i) => (list += `${i + 1}. ${patient}\n`))
    respList.innerText = list
})

