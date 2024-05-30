let miCadena = 'esto es divertidisimo';

// a. Convertir a mayúsculas
let cadenaMayusculas = miCadena.toUpperCase();
console.log('Cadena en mayúsculas:', cadenaMayusculas);

// b. Obtener los primeros 5 caracteres
let primerosCincoCaracteres = miCadena.substring(0, 5);
console.log('Primeros 5 caracteres:', primerosCincoCaracteres);

// c. Obtener los últimos 3 caracteres
let ultimosTresCaracteres = miCadena.substring(miCadena.length - 3);
console.log('Últimos 3 caracteres:', ultimosTresCaracteres);

// d. Primera letra en mayúscula y el resto en minúscula
let cadenaCapitalizada = miCadena.charAt(0).toUpperCase() + miCadena.slice(1).toLowerCase();
console.log('Cadena capitalizada:', cadenaCapitalizada);

// e. Encontrar el primer espacio en blanco
let indicePrimerEspacio = miCadena.indexOf(' ');
console.log('Índice del primer espacio:', indicePrimerEspacio);

// f. Capitalizar las primeras letras de dos palabras largas
let cadenaLarga = 'javascript programming';
let primeraPalabra = cadenaLarga.substring(0, cadenaLarga.indexOf(' '));
let segundaPalabra = cadenaLarga.substring(cadenaLarga.indexOf(' ') + 1);
let palabrasCapitalizadas = primeraPalabra.charAt(0).toUpperCase() + primeraPalabra.slice(1).toLowerCase() + ' ' +
    segundaPalabra.charAt(0).toUpperCase() + segundaPalabra.slice(1).toLowerCase();
console.log('Palabras capitalizadas:', palabrasCapitalizadas);
