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

const registrarCalificaciones = alumnosCalificaciones => {
    let parciales = prompt('Ingrese el numero de parciales');
    let numeroParciales = parseInt(parciales);

    for (let i = 0; i < alumnos.length; i++) {
        let sumaCalificaciones = 0;

        for (let j = 0; j < numeroParciales; j++) {
            let calificacion = prompt('Calificacion parcial: ' + j+1);
            let numCalificacion = parseInt(calificacion);
            sumaCalificaciones += numCalificacion;
            
            if (j === numeroParciales-1) 
                alumnosCalificaciones.push(sumaCalificaciones / numeroParciales);

        }
    }
    
    alert('Las calificaciones estan listas');
}

registrarAlumnos(alumnos);
registrarCalificaciones(alumnosCalificaciones);