// 6. Funciones
// a. Función suma
function suma(a, b) {
    return a + b;
}
let resultado = suma(5, 10);
console.log('Resultado de la suma:', resultado);

// b. Validar si los parámetros son números
function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    return a + b;
}
resultado = sumaValidada(5, '10');
console.log('Resultado de la suma validada:', resultado);

// c. Función para validar si un número es entero
function validarEntero(numero) {
    return Number.isInteger(numero);
}
console.log('Es entero:', validarEntero(5.5));

// d. Validar si los números son enteros en la función suma
function sumaConValidacionEntero(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }
    if (!validarEntero(a)) {
        alert('El primer parámetro no es un entero, redondeando hacia abajo');
        a = Math.floor(a);
    }
    if (!validarEntero(b)) {
        alert('El segundo parámetro no es un entero, redondeando hacia abajo');
        b = Math.floor(b);
    }
    return a + b;
}
resultado = sumaConValidacionEntero(5.7, 10.4);
console.log('Resultado de la suma con validación de enteros:', resultado);