
const alumnos = [];

let numeroDeAlumnos = prompt('¿Cuantos alumnos quieres ingresar a la lista?');
let alumnosInt = parseInt(numeroDeAlumnos);

for (let i = 0; i < alumnosInt; i++) {
    let alumno = prompt('Nombre de Alumno');
    alumnos.push(alumno);
}

for (let i = 0; i < alumnosInt; i++) {
    let alumno = document.createElement('p');
    alumno.innerHTML = alumnos[i];
    alumno.style.textAlign = 'center';
    alumno.style.textTransform = 'uppercase';
    alumno.style.color = 'purple';
    document.getElementById('lista').appendChild(alumno);
}