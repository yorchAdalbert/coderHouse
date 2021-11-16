const alumnos = [];
const alumnosCalificaciones = [];

function registrarAlumnos (alumnos) {
    let numeroAlumnos = prompt('Ingresa el numero de alumnos a registrar');
    let numero = parseInt(numeroAlumnos);

    for (let i = 0; i < numero; i++) {
        let nombre = prompt('Nombre del alumno');
        alumnos.push(nombre);
    }

    alert('Tu lista de alumnos esta completa');
}

registrarAlumnos(alumnos);