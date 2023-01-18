//OBJETOS Y DESESTRUCTURACION

//objetos:

let preferenciasUsuario = {
    deporte: 'natacion',
    musica: 'salsa'
}

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
    },
    gustos: preferenciasUsuario
}

console.log(usuario1.salud.edad);

//desestructuracion
const {pais,acceso,email} = usuario1;
console.log(pais,acceso,email);


const retornarUsuario = ({email,pais}) => {
    console.log(email,pais)
}

retornarUsuario(usuario1);