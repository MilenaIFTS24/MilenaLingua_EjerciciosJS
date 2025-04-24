/*1. Crear una función que reciba un array con números del 0 al 10, 
y devuelva un nuevo array que contenga solo los números pares.*/
function filtrarPares(array) 
{
    let pares = array.filter(num => num % 2 == 0);
    return pares;
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(filtrarPares(numeros));

/*2. Escribir una función que tome un array de números y calcule el promedio.*/
function calcularPromedio(array) 
{
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    let promedio = suma / array.length;
    return promedio;
}

let numeros2 = [1, 2, 3];
//console.log(calcularPromedio(numeros2));

/*3. Usar una función flecha y setTimeout para imprimir 
cada elemento de un array con un retraso de 1 segundo por elemento.*/
// let imprimirConRetraso = (array) => 
// {
//     let itemsImpresos = 0;
//     let itemsTotal = array.length;
//     console.log("Comenzando...");
//     array.forEach( (item, indice) => {
//         setTimeout(()=>
//             {
//                 console.log(item)
//                 itemsImpresos += 1;
//                 if (itemsImpresos == itemsTotal) {
//                 console.log("Función finalizada.");
//                             }
//             }, 
//             1000 * (indice + 1));});    
// }

let array1 = ["Hola", 1, 3, true];
//imprimirConRetraso(array1);

/*4. Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes. */
function imprimirResultadoCallbacks(num1, num2, callback)
{
    console.log("Inicio del callback...");
    let resultado = callback(num1, num2);
    console.log(resultado);
    console.log("Fin del callback...");
}

function suma(n1, n2)
{
    return n1 + n2;
}

function multiplicacion(n1, n2)
{
    return n1 * n2;
}

let n1 = 2, n2 = 4;
// console.log("Llamado a función con callback 'suma'");
// imprimirResultadoCallbacks(n1, n2, suma);
// console.log("Llamado a función con callback 'multiplicacion'");
// imprimirResultadoCallbacks(n1, n2, multiplicacion);

/*5. Crear un botón para incrementar y otro para decrementar un contador mostrado
en un elemento div. Actualizar el texto del div al hacer click.*/
let contadorOriginal = document.getElementById('contador');
let contadorActualizado = parseInt(contadorOriginal.textContent);
function incrementarContador()
{    
    contadorActualizado += 1;
    contadorOriginal.textContent = contadorActualizado;
}
function decrementarContador()
{
    contadorActualizado -= 1;
    contadorOriginal.textContent = contadorActualizado;
}

/*6. Seleccionar todos los elementos p de la página y cambiar su texto al hacer click en un botón.*/
let parrafos = document.getElementsByTagName('p');
let backupParrafosOriginales = [];
for (let i = 0; i < parrafos.length; i++) { //guardo los textos originales
        backupParrafosOriginales.push(parrafos[i].textContent);     
    }

function cambiarParrafos()
{
    for (let i = 0; i < parrafos.length; i++)
    {
        parrafos[i].textContent = 'Hola';      
    }
}
function deshacerCambio()
{
    for (let i = 0; i < parrafos.length; i++)
        {
            parrafos[i].textContent = backupParrafosOriginales[i];      
        }
}

/*7. Crear una lista desordenada vacía y un botón. Al hacer click en el botón, agregar un nuevo elemento a la lista con un número que se incremente automáticamente.*/
let numero = 1;
/* let items = '';
function agregarItem()
{
    let numeroActual = numero;
    items += '<li id="item' + numeroActual + '">' + numeroActual + '</li>' + '<button id="eliminarItem' + numeroActual + '" onclick="console.log(\'Ejecutando ONCLICK\');document.getElementById(\'item' +numeroActual+ '\').remove(); this.remove(); restarNumero(); "> Eliminar item ' + numeroActual + '</button>'; // elimina el li pero de manera incorrecta
    console.log(items);
    document.getElementById('lista').innerHTML = items;
    numero++;
} */
function eliminarItems()
{
    document.getElementById('lista').innerHTML = '';
    numero = 1;
    items = '';
}

/*8. Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista.*/

/*Solución alternativa del punto 7 y 8 */


function agregarItem()
{
    let numeroActual = numero;    
    let lista = document.getElementById('lista');    
    let item = document.createElement('li');
    item.id = 'item' + numeroActual;
    item.textContent = numeroActual;
    lista.appendChild(item);
    let boton = document.createElement('button');
    boton.id = 'eliminarItem' + numeroActual;
    boton.textContent = 'Eliminar item ' + numeroActual;    
    lista.appendChild(boton);
    boton.addEventListener("click", function() {
        eliminarItem(numeroActual);        
    });
    numero++;
}
function eliminarItem(numeroItem)
{
    document.getElementById('item' + numeroItem).remove();
    document.getElementById('eliminarItem' + numeroItem).remove();    
}