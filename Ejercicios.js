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
        lista.removeChild(item);
        boton.remove();
        //eliminarItem(numeroActual);        
    });
    numero++;
}
// function eliminarItem(numeroItem)
// {
//     document.getElementById('item' + numeroItem).remove();
//     document.getElementById('eliminarItem' + numeroItem).remove();    
// }

/*Front End */
/*Botón que muestra un mensaje
Crear una página con un botón. Al hacer click, debe aparecer un mensaje debajo (como un saludo o bienvenida). El mensaje debe estar oculto inicialmente.*/

let botonMensaje = document.getElementById('botonMensaje');
let mensaje5 = document.getElementById('mensaje5');
botonMensaje.addEventListener('click', () => 
{
    mensaje5.textContent = "Bienvenid@";
});

/*Cambiar color de fondo
Hacer una página con un botón que, al hacer click, cambie el color de fondo del body. Debe rotar entre varios colores (mínimo 3). */

let colorBody = document.getElementById('colorBody');
let body = document.querySelector('body');
colorBody.addEventListener('click', () => 
{
    switch (body.style.backgroundColor) {
        case '':
            body.style.backgroundColor = 'yellow';
            break;
        case 'yellow':
            body.style.backgroundColor = 'red'
            break;
        case 'red':
            body.style.backgroundColor = 'orange'
            break;
        case 'orange':
            body.style.backgroundColor = ''
            break;
        default:
            break;
    }
});

/*Mostrar/Ocultar texto
Incluir un párrafo visible y un botón que permita ocultarlo o mostrarlo según su estado actual. El texto del botón debe cambiar entre “Mostrar” y “Ocultar”. */

let textoOcultar = document.getElementById('textoOcultar');
let ocultarMostrar = document.getElementById('ocultarMostrar');
textoOcultar.style.visibility = 'visible';
ocultarMostrar.addEventListener('click', () => 
{
    switch (textoOcultar.style.visibility) {
        case 'visible':
            textoOcultar.style.visibility = 'hidden';
            ocultarMostrar.textContent = 'Mostrar'
            break;
        case 'hidden':
            textoOcultar.style.visibility = 'visible';
            ocultarMostrar.textContent = 'Ocultar'
            break;     
        default:
            break;
    }
});

/*Actualizar título en tiempo real
Crear un campo de texto y un título (<h2>). A medida que el usuario escribe, el texto del título debe actualizarse en tiempo real. */

let inputTitulo = document.getElementById('inputTitulo');
let tituloActualizar = document.getElementById('tituloActualizar');

inputTitulo.addEventListener('input', () => 
{
    let titulo = inputTitulo.value;
    tituloActualizar.textContent = titulo;
});

/*Aplicar estilos a varios elementos
Agregar varios párrafos con una clase compartida. Al presionar un botón, debe cambiar el fondo de esos elementos (resaltarlos visualmente). */

let resaltados = document.getElementsByClassName('resaltado');
let cambiarResaltado = document.getElementById('cambiarResaltado');
cambiarResaltado.addEventListener('click', () =>
{
    Array.from(resaltados).forEach((x) => {
        x.style.backgroundColor = 'yellow';
    });
});

/*Validación de formulario simple
Crear un pequeño formulario con nombre y correo. Al hacer click en enviar, debe validar que ambos campos estén completos. Muestra un mensaje de error o éxito según el caso. */

let botonEnviar = document.getElementById('enviar');
let nombre = document.getElementsByName('nombre');
let email = document.getElementsByName('email');

/*Generador de lista de tareas
Crear una lista de tareas con un input y botón. Cada tarea debe incluir un botón para marcarla como completada (tachada). */

let inputTarea = document.getElementById('tarea');
let agregarTarea = document.getElementById('agregarTarea');
let lista = document.getElementById('listaTareas');

agregarTarea.addEventListener('click', () => 
{
    let item = document.createElement('li');
    item.textContent = inputTarea.value;
    lista.appendChild(item);
    let check = document.createElement('input');
    check.type = 'checkbox';
    item.append(check);
    inputTarea.value = '';
    check.addEventListener('change', () => 
    {
        switch(check.checked)
        {
            case true: 
                item.style.textDecoration = 'line-through';
                break;
            case false:
                item.style.textDecoration = 'none';
        }
    })
});

/*Mostrar longitud de texto ingresado
Incluir un input de texto y, mientras el usuario escribe, muestra la cantidad de caracteres ingresados. */

let texto = document.getElementById('textoLongitud');
let mostrarLongitud = document.getElementById('longitud');

texto.addEventListener('input', () =>
{
    let largo = texto.value.length;
    mostrarLongitud.textContent = largo;
});

/*Cambiar imagen con botón
Mostrar una imagen en pantalla. Al hacer click en un botón, debe cambiar por otra imagen (usa 2 o más imágenes disponibles). */

let imagen = document.getElementById('imagen');
let cambiarImagen = document.getElementById('cambiarImagen');
let estadoActual = 'html';
cambiarImagen.addEventListener('click', () => 
{    
    
    switch(estadoActual)
    {
        case 'html':
            imagen.src = './img/css_640.png';
            estadoActual = 'css';
            break;
        case 'css':
            imagen.src = './img/js_640.png';
            estadoActual = 'js';
            break;
        case 'js':
            imagen.src = './img/html_640.png';
            estadoActual = 'html';
            break;
        default:
            break;
    }
});

/*Contador automático
Hacer que un número aumente automáticamente cada segundo al iniciar. Incluir un botón para iniciar/detener. */

let numeroAumento = document.getElementById('numeroAumento');
let iniciarDetener = document.getElementById('iniciarDetener');
let contador = 1;

iniciarDetener.addEventListener