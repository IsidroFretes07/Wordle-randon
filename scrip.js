

let diccionario = ["APPLE", "ANGEL", "HOUSE", "PLATE", "PLACE", "MOUSE"]
let random = Math.random() * diccionario.length//numero aleatorio entre 0 y 5
random = Math.floor(random)
let palabraSecreta = diccionario[random]
console.log(palabraSecreta)
let oportunidades = 6;

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click", enter)
// mostrarBoton()

function enter() {
    let intento = input.value.toUpperCase()
    console.log(intento)
    if (intento == palabraSecreta) {
        gameOver
            ("Ganaste")
    }

    let row = document.createElement("div")
    row.className = "row"
    for (let i in palabraSecreta) {
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        if (palabraSecreta[i] == intento[i]) {
            letra.style.backgroundColor = "green"
        } else if (palabraSecreta.includes(intento[i])) {
            letra.style.backgroundColor = "yellow"
        } else {
            letra.style.backgroundColor = "gray"
        }
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if (oportunidades == 0) {
        mensaje("Perdiste, puedes volver a intentarlos en 2 segundos")
    }
}

function mensaje(mensaje) {
    button.disabled = true
    const guesses = document.getElementById('guesses');
    guesses.innerHTML = mensaje
    setTimeout(function() {
        window.location.reload();
    }, 2000); // 10000 milisegundos = 10 segundos
    // button.disabled = true
    
};

