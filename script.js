// Capturar entradas mediante prompt()
function capturarEntrada(mensaje) {
    return prompt(mensaje);
}

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función para calcular el porcentaje de un número
function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}

// Función para mostrar resultados usando alert()
function mostrarResultado(resultado) {
    alert(resultado);
}

// Función para mostrar resultados usando console.log()
function mostrarResultadoConsola(resultado) {
    console.log(resultado);
}

// Función principal del simulador
function simulador() {
    // Capturar entradas del usuario
    let num1 = parseFloat(capturarEntrada("Ingrese el primer número:"));
    let num2 = parseFloat(capturarEntrada("Ingrese el segundo número:"));

    // Realizar operaciones
    let suma = sumar(num1, num2);
    let resta = restar(num1, num2);
    let multiplicacion = multiplicar(num1, num2);
    let division = dividir(num1, num2);
    let porcentaje = calcularPorcentaje(num1, num2);

    // Mostrar resultados
    mostrarResultado("Suma: " + suma);
    mostrarResultado("Resta: " + resta);
    mostrarResultado("Multiplicación: " + multiplicacion);
    mostrarResultado("División: " + division);
    mostrarResultado("Porcentaje: " + porcentaje);
}

// Llamar a la función principal del simulador
simulador();
