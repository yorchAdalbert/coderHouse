const listaAlumnos = [];
let opcion = '';

while (opcion != '3') {
    opcion = prompt("1 - Crear lista de alumnos" + 
                  '\n2 - Buscar alumno' +
                  '\n3 - Salir');
    
    if (opcion == '1') {
        let agregarAlumno = '';

        while (agregarAlumno != 'no') {
            let nombreAlumno = prompt('Ingrese el nombre del alumno');
            listaAlumnos.push(nombreAlumno);

            agregarAlumno = prompt('¿Quieres agregar otro alumno? si / no');
        }
    }

    if (opcion == '2') {
        if (listaAlumnos.length === 0)
            alert('Tu lista de alumnos esta vacía');
        else 
            for (let alumno in listaAlumnos) {
                alert('Nombre del alumno: ' + alumno);
            }
    }
}

alert('Gracia por usar el software!');