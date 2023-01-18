//json

/*usado para el intercambio de datos entre sistemas, està basado en la notacion de los 
literales de objeto de JS  

JSON: JavaScript Object Notation
*/

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

console.log(typeof usuario1); //imprimir el tipo de formato 

let objJson = (JSON.stringify(usuario1)) //conversion

console.log(typeof objJson);