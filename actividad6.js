/*1. Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log(). */

function calculo(a,b) {
    let resultado = a + b;
    console.log(`El resultado de la suma es: ${resultado}`);
}
calculo(12,25);

/*2. Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log(). */
function comparacion(a,b) {
    if(a>b){
        console.log(`El numero ${a} es mayor que ${b}`);
    }else if (a<b){
        console.log(`El numero ${a} es menor que ${b}`);
    }else{
        console.log(`El numero ${a} es igual que ${b}`);
    }
}
comparacion(257,177);


/*3.Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log(). */

let calculo2 = (a,b) => a + b ;
console.log (calculo2(5,5));

/******* !!!!! TENGO DUDA EN ESTE EJERCICIO ¿ES CORRECTA LA FUNCION FLECHA?    **********/
let comparacion2 =(a,b) =>{ 
    if(a>b){
        console.log(`El numero ${a} es mayor que ${b}`);
    }else if (a<b){
        console.log(`El numero ${a} es menor que ${b}`);
    }else{
        console.log(`El numero ${a} es igual que ${b}`);
    } 
}
comparacion2(5,5);

/*4. Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas.Imprimir su resultado en la terminal con console.log(). */

 const usuario1 = {
    //clave valor
    nombre: 'Ricardo',
    email: 'ricardo@gmail.com',
    pais: 'mexico',
    acceso: true,
    unaFuncion: (a, b) => a + b,
    salud:{
        edad:35,
        sexo: 'masculino',
        peso: 80
    }
}

const {pais,acceso,email} = usuario1;
console.log(pais,acceso,email);

/*5. Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log(). */

const array = ['Fernanda', 23, 'Puebla', [24, 'Enero']];

const funcionArray = () => {return array}

const [nombre, edad, localidad] = funcionArray();
console.log(nombre,edad, localidad);
