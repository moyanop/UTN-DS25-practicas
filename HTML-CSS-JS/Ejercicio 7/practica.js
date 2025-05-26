/*console.log("Hola Mundo!");

/*var numero = 10;
var resultado = numero + 5;  1)
console.log(resultado);*/

/*var nombre = "Pedro";
var apellido = "Moyano";
var concatenacion = nombre + " " + apellido;    2)
console.log(concatenacion);*/

/*var numero1 = 10;
var numero2 = 10;
if (numero1 == numero2) {
    console.log("Los números son iguales");
} else if (numero1 > numero2) {
    console.log("El número 1 es mayor que el número 2");    3)
} else {
    console.log("El número 1 es menor que el número 2");
}*/

/*
var numero = 7; 

if (numero >= 1 && numero <= 3) {
    console.log("El numero es: " + numero);
    console.log("Grupo 1: del 1 al 3");
} else if (numero >= 4 && numero <= 6) {
    console.log("El numero es: " + numero);
    console.log("Grupo 2: del 4 al 6");                         4)
} else if (numero >= 7 && numero <= 10) {
    console.log("El numero es: " + numero);
    console.log("Grupo 3: del 7 al 10");
} else {
    console.log("El número ingresado no está entre 1 y 10.");
}*/

/*
let sumatoria = 0;
for (let i = 0; i <= 10; i++) {
    sumatoria = sumatoria + i;
}
console.log("La sumatoria de 0 a 10 es: " + sumatoria);*/

/*
let numeros = [2, 4, 1, 3, 5, 6, 7, 8, 9, 10];
let productoTotal = 1;

for (let i = 0; i < numeros.length; i++) {
    productoTotal = productoTotal * numeros[i];
}

console.log("El producto total de los elementos es: " + productoTotal);*/

/*
function producto(a, b) {
    return a * b;
}
console.log(producto(2, 3));*/

/*
function concatenandoCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}
console.log(concatenandoCadenas("Hola, ", "profesor!"));*/

/*
function mayorOiguales(num1, num2) {
    if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que el número " + num2);
    } else if (num2 > num1) {
        console.log("El número " + num2 + " es mayor que el número " + num1);
    } else {
        console.log("Ambos números son iguales: " + num1);
    }
}

mayorOiguales(5, 3);
mayorOiguales(2, 8);
mayorOiguales(4, 4);*/

/*
function mostrarAsteriscos(cantidad) {
    let resultado = "";
    for (let i = 0; i < cantidad; i++) {
        resultado += "*";
    }
    console.log(resultado);
}

mostrarAsteriscos(5);
mostrarAsteriscos(10);*/

/*
function calcularMontoFinal(monto, medioPago) {
    let descuento = 0;
    let valido = true;

    // Validar medio de pago usando un while
    while (valido) {
        if (medioPago == "C" || medioPago == "E" || medioPago == "D") {
            valido = false;
        } else {
            console.log("Medio de pago no válido. Debe ser 'C', 'E' o 'D'.");

            break;
        }
    }

    if (monto < 200) {
        descuento = 0;
    } else if (monto >= 200 && monto <= 400) {
        if (medioPago == "E") {
            descuento = 0.30;
        } else if (medioPago == "D") {
            descuento = 0.20;
        } else if (medioPago == "C") {
            descuento = 0.10;
        }
    } else if (monto > 400) {
        descuento = 0.40;
    }

    let montoFinal = monto - (monto * descuento);
    return montoFinal;
}

console.log("Monto final a abonar: $" + calcularMontoFinal(150, "E")); // Sin descuento
console.log("Monto final a abonar: $" + calcularMontoFinal(250, "E")); // 30% descuento
console.log("Monto final a abonar: $" + calcularMontoFinal(250, "D")); // 20% descuento
console.log("Monto final a abonar: $" + calcularMontoFinal(250, "C")); // 10% descuento
console.log("Monto final a abonar: $" + calcularMontoFinal(500, "C")); // 40% descuento
*/

/*
function medioArbol(altura) {
    for (let i = 1; i <= altura; i++) {
        let fila ="";
        for (let j = 1; j <= i; j++) {
            fila = fila + "* ";
        }
        console.log(fila.trim());
    }
}

medioArbol(5);
*/

/*
function diaDeLaSemana(numeroDia) {
    switch (numeroDia) {
        case 1:
            return "lunes";
        case 2:
            return "martes";
        case 3:
            return "miercoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
        case 7:
            return "fin de semana";
        default:
            return "Error: numero de dia no valido";
    }
}
*/

/*
function calcularPromedioArray() {
    // Pedir al usuario el tamaño del array
    let tamaño = Number(prompt("Ingrese el tamaño del array:"));
    // Pedir al usuario los valores separados por espacios
    let valores = prompt("Ingrese los " + tamaño + " numeros separados por espacios:");
    // Convertir el string en un array de numeros
    let arrayNumeros = valores.split(" ");
    // Convierto cada elemento a numero
    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i] = Number(arrayNumeros[i]);
    }
    // Saco el total de todos los elementos
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        suma = suma + arrayNumeros[i];
    }
    // Calculo el promedio
    let promedio = suma / arrayNumeros.length;

    console.log("El promedio de los numeros ingresados es: " + promedio);
}
*/


// Creamos la función para mostrar el medio-árbol en la consola
function medioArbol(altura) {
    for (let i = 1; i <= altura; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila = fila + "* ";
        }
        console.log(fila);
    }
}

