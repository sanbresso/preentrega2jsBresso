// Definir un array de objetos
const productos = [
    { nombre: "Producto 1", precio: 20 },
    { nombre: "Producto 2", precio: 30 },
    { nombre: "Producto 3", precio: 40 },
    { nombre: "Producto 4", precio: 50 },
    { nombre: "Producto 5", precio: 60 }
];

// Función para buscar un producto por nombre
function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre === nombre);
}

// Función para filtrar productos por precio
function filtrarPorPrecio(minimo, maximo) {
    return productos.filter(producto => producto.precio >= minimo && producto.precio <= maximo);
}

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
