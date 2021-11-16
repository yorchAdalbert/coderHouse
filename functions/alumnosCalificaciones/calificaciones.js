const alumnos = [];
const alumnosCalificaciones = [];

function registrarAlumnos (numero) {

    for (let i = 0; i < numero; i++) {
        let nombre = prompt('Nombre del alumno');
        alumnos.push(nombre);
    }

    alert('Tu lista de alumnos esta completa');
}

const registrarCalificaciones = numeroParciales => {

    for (let i = 0; i < alumnos.length; i++) {
        let sumaCalificaciones = 0;

        for (let j = 1; j <= numeroParciales; j++) {
            let calificacion = prompt('Alumno: ' + alumnos[i] + '\nCalificacion parcial: ' + j);
            let numCalificacion = parseInt(calificacion);
            sumaCalificaciones += numCalificacion;
            
            if (j === numeroParciales) 
                alumnosCalificaciones.push(sumaCalificaciones / numeroParciales);
        }
    }
    
    alert('Las calificaciones esta listas');
}

function mostrarCalificaciones() {

    for (let i = 0; i < alumnos.length; i++) 
        alert('Alumno: ' + alumnos[i] + '\nCalificacion total de la materia: ' + alumnosCalificaciones[i].toFixed(1));
    
}

// Obteniendo datos de los alumnos...
let numeroAlumnos = prompt('Ingresa el numero de alumnos a registrar');
let numero = parseInt(numeroAlumnos);

registrarAlumnos(numero);

// Obteniendo calificaciones de los alumnos...
let parciales = prompt('Ingrese el numero de parciales');
let numeroParciales = parseInt(parciales);

registrarCalificaciones(numeroParciales);

mostrarCalificaciones();