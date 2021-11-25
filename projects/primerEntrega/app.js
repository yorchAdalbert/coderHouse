class Personaje {
    constructor(nombre, genero, peso, estatura, tipo) {
        this. nombre = nombre;
        this.genero = genero;
        this.peso = peso;
        this.estatura = estatura;
        this.tipo = tipo;
    }

    saludar() {
        alert(`Hola mi nombre es ${this.nombre} \nSoy un gerero de tipo ${this.tipo}`);
    }

    mostrarInfo() {
        alert('Nombre: ' + this.nombre +
             '\nGenero: ' + this.genero +
             '\nPeso: ' + this.peso + 'kg' +
             '\nEstatura: ' + this.estatura + 'cms' +
             '\nGuerrero tipo: ' + this.tipo);
    }
}

function menu() {
    let opcion = prompt('1 - Crear NPC' +
                      '\n2 - Ver informacion' +
                      '\n3 - Salir');

    return opcion;
}

const personajes = [];
let opcion = '';

alert('Creador de NPC');

while(opcion != '3' && opcion != null) {
    opcion = menu();

    switch(opcion) {
        case '1' :
            let nombre = prompt('Nombre del personaje');
            let genero = prompt('Genero del personaje');
            let peso = prompt('Peso del personaje');
            let estatura = prompt('Estatura del personaje');
            let tipo = prompt('Eligue un elemento natural para el tipo de tu guerrero');

            let personaje = new Personaje(nombre, genero, peso, estatura, tipo);
            personaje.saludar();
            personajes.push(personaje);
            alert('Personaje guardado!');
            break;
        case '2' :
            if (personajes.length === 0) {
                alert('No tienes ningun personaje guardado...')
            } else {
                for (let i = 0; i < personajes.length; i++) 
                    personajes[i].mostrarInfo();
            }
            break;
        default :
            alert('Opcion no reconocida...');
    }
}

alert('Gracias por usar el software!');