function saludarVisitante(usuario){
    alert(`Hola ${usuario}. Bienvenido a: Adivina el número`)
}

let nombre = prompt(`Ingresa tu nombre`)
saludarVisitante(nombre)

let numero = parseInt(prompt(`Coloque un número entre 1 y 1000`))
let seguirIntentando = true
let decision

const numeroCorrecto = 473

while (seguirIntentando === true){
    if (numero === numeroCorrecto){
        alert(`Diste con el número correcto ${nombre}, felicidades!`)
        break
    } else if (numero <= 472){
        alert(`Es mayor a este número`)
    } else if (numero >= 474){
        alert(`Es menor a este número`)
    } else {
        numero = parseInt(prompt(`Elige un número entre 1 y 1000`))
        continue
    }

    decision = parseInt(prompt(`¿Quieres seguir intentando? 1. Si 2. No`))
    if (decision === 1){
        numero = parseInt(prompt(`Coloque un número entre 1 y 1000`))
    }else {
        seguirIntentando = false
    }

}