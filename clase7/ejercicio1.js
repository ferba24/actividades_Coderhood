/*
Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir un
mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
    function programa() {
    // Tu código acá
}*/

let divide = function divide (num1, num2)  {
    try {
        let result = (num1/num2)
        if (isFinite(result)) {
            console.log(`${num1} divided by ${num2} is ${result}`)
        } else if (isNaN(result)){
            throw new Error(`You can only divide by a number`)
        } else {
            throw new Error(`You can't divide by zero`)
        }
    } catch (err) {
        console.log('An error occurred')
        console.error(err)
    }
}
divide(5,'a')