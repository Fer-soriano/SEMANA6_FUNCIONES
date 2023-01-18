let valor1 = 5
let valor2 = 2

let acceso = true

let unaFuncion = (a,b) => a + b

//array
const nuestroArray = ['Ricardo', 35, acceso, unaFuncion(valor1, valor2), ['Mexico', 2022]];

//posiciones: 0,1,2,3,4,5,6
console.log(nuestroArray[1]);
console.log(nuestroArray[2]);

// Desestructuracion de un array:
//const [nombre,edad] = nuestroArray;
//console.log(nombre,edad);

const functionArray = () => {return nuestroArray }

const [nombre, edad] = functionArray();

console.log(nombre, edad);