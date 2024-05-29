// 5. For
// a. Recorrer un array y mostrar alertas
let palabras = ['manzana', 'banana', 'naranja', 'pera', 'uva'];
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// b. Convertir primera letra a mayúscula y mostrar alertas
for (let i = 0; i < palabras.length; i++) {
    let palabraCapitalizada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraCapitalizada);
}

// c. Crear una oración con las palabras del array
let oracion = '';
for (let i = 0; i < palabras.length; i++) {
    oracion += palabras[i] + ' ';
}
alert(oracion.trim());

// d. Llenar un array con números de 0 a 9
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log('Array de números:', numeros);
