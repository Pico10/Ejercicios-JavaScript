let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a. Mostrar meses 5 y 11
console.log('Mes 5:', meses[4]);
console.log('Mes 11:', meses[10]);

// b. Ordenar el array alfabéticamente
let mesesOrdenados = meses.slice().sort();
console.log('Meses ordenados:', mesesOrdenados);

// c. Agregar un elemento al principio y al final del array
meses.unshift('InicioMes');
meses.push('FinMes');
console.log('Array después de unshift y push:', meses);

// d. Quitar un elemento del principio y del final del array
meses.shift();
meses.pop();
console.log('Array después de shift y pop:', meses);

// e. Invertir el orden del array
let mesesInvertidos = meses.slice().reverse();
console.log('Meses invertidos:', mesesInvertidos);

// f. Unir todos los elementos del array en un string
let mesesUnidos = meses.join(' - ');
console.log('Meses unidos:', mesesUnidos);

// g. Crear una copia del array de Mayo a Noviembre
let mayoANoviembre = meses.slice(4, 11);
console.log('De Mayo a Noviembre:', mayoANoviembre);    