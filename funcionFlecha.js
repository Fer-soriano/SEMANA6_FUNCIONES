let password = true;

//funcion normal:
const login = function (x){
    return x;
}
login(password) == true ? console.log('Bienvenido') : console('Denegado');

//funcion flecha - arrow function:
//funcion flecha que retorna un solo valor:
const login2 = x => x;
login2(password) == true ? console.log('Bienvenido') : console('Denegado');

//funcion flecha sin parametro, retornando un valor:
const login3 = () => true;
login3(password) == true ? console.log('Bienvenido') : console.log('Denegado');

//Funcion flecha con mas de un parametro
const login4 = (clave, usuario) => console.log(`Usuario ${usuario} su acceso es ${clave}`);
login4(password, "Ricardo");

//funcion flecha con as de una linea de codigo a ejecutar:
let login5 = (password) => {
    console.log('Hola mundo');
    return password;
}
login5(password) == true ? console.log('Bienvenido') : console.log('Denegado');