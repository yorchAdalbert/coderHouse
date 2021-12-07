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

let nombre = document.getElementById('nombre');
let genero = document.getElementById('genero');
let peso = document.getElementById('peso');
let estatura = document.getElementById('estatura');
let tipo = document.getElementById('tipo');

const npc1 = new Personaje('Jorge', 'hombre', '70', '1.7', 'fuego');
const npc2 = new Personaje('Alan', 'hombre', '50', '0.50', 'viento');
const npc3 = new Personaje('Bere', 'mujer', '60', '1.6', 'tierra');

const personajes = [npc1, npc2, npc3];
