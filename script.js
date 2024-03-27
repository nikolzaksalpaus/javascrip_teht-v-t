window.addEventListener("load", function(){
    const dateTime = new Date()
    const formattedDateTime = `
        Tänään on: ${dateTime.getFullYear()}.${dateTime.getMonth()}.${dateTime.getDate()}<br />
        Nykyinen aika on: ${dateTime.getHours()}.${dateTime.getMinutes()}.${dateTime.getSeconds()}
    `
    document.getElementById("dateTime").innerHTML = formattedDateTime

    document.getElementById("arvaa").addEventListener("submit", e => {
        e.preventDefault()
        const randomNumero = Math.floor(Math.random() * 10 + 1);
        const numeroSyote = document.getElementById("numeroSyote")
        numeroViesti = document.getElementById("numeroViesti")
        const viesti = numeroSyote.value == randomNumero ? "Hyvä työ" : "Ei täsmää"
        numeroTieto.innerHTML = viesti
    })

    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")

    document.getElementById("multiply").addEventListener("click", e => {
        const result = Number(n1.value) * Number(n2.value)
        document.getElementById("result").innerHTML = result
    })

    document.getElementById("divide").addEventListener("click", e => {
        const result = Number(n1.value) / Number(n2.value)
        document.getElementById("result").innerHTML = result
    })

    const c = document.getElementById("c")
    const f = document.getElementById("f")

    document.getElementById("convertToC").addEventListener("click", e => {
        c.value = ((f.value - 32) / 1.8).toFixed(2)
    })
    document.getElementById("convertToF").addEventListener("click", e => {
        f.value = ((c.value * 1.8) + 32).toFixed(2)
    })

    document.getElementById("tarkistaNumeroForm").addEventListener("submit", e => {
        e.preventDefault()
        const numero = document.getElementById("tarkistaNumero").value
        const array = numero.toString().split('');
        const result = array.every(n => n === array[0])
        document.getElementById("tarkistusResult").innerHTML = result
    })
});