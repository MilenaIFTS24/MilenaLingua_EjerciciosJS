/*Crear una función que reciba un array con números del 0 al 10, 
y devuelva un nuevo array que contenga solo los números pares.*/
function filtrarPares(array) {
    let pares = array.filter(num => num % 2 == 0);
    return pares;
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPares(numeros)); 

/*Escribir una función que tome un array de números y calcule el promedio.*/
function calcularPromedio(array) {
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    let promedio = suma / array.length;
    return promedio;
}   

let numeros2 = [1, 2, 3];
console.log(calcularPromedio(numeros2));

/*Usar una función flecha y setTimeout para imprimir 
cada elemento de un array con un retraso de 1 segundo por elemento.*/