// 4. If Else
// a. Número aleatorio entre 0 y 1
let randomNum = Math.random();
if (randomNum >= 0.5) {
    alert('Greater than 0.5');
} else {
    alert('Lower than 0.5');
}

// b. Variable Age con mensajes específicos
let age = Math.floor(Math.random() * 101);
if (age < 2) {
    alert('Bebe');
} else if (age < 13) {
    alert('Niño');
} else if (age < 20) {
    alert('Adolescente');
} else if (age < 31) {
    alert('Joven');
} else if (age < 61) {
    alert('Adulto');
} else if (age < 76) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}