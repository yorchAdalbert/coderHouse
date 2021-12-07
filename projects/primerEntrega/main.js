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
        return'Nombre: ' + this.nombre +
             '\nGenero: ' + this.genero +
             '\nPeso: ' + this.peso + 'kg' +
             '\nEstatura: ' + this.estatura + 'cms' +
             '\nGuerrero tipo: ' + this.tipo;
    }
}

let button = document.getElementById('button');
let personaje = document.getElementById('personajes');

let nombre = document.getElementById('nombre');
let genero = document.getElementById('genero');
let peso = document.getElementById('peso');
let estatura = document.getElementById('estatura');
let tipo = document.getElementById('tipo');

const npc1 = new Personaje('Jorge', 'hombre', '70', '1.7', 'fuego');
const npc2 = new Personaje('Alan', 'hombre', '50', '0.50', 'viento');
const npc3 = new Personaje('Bere', 'mujer', '60', '1.6', 'tierra');

const NPCs = [npc1, npc2, npc3];

function npc() {
    for (let i = 0; i < NPCs.length; i++) {
        let div = document.createElement('div');
        let nombre = document.createElement('p');
        let genero = document.createElement('p');
        let peso = document.createElement('p');
        let estatura = document.createElement('p');
        let tipo = document.createElement('p');
        nombre.innerHTML = 'Nombre: ' + NPCs[i].nombre;
        genero.innerHTML = 'Genero: ' + NPCs[i].genero;
        peso.innerHTML = 'Peso: ' + NPCs[i].peso;
        estatura.innerHTML = 'Estatura: ' + NPCs[i].estatura;
        tipo.innerHTML = 'Tipo: ' + NPCs[i].tipo;
        div.appendChild(nombre);   
        div.appendChild(genero);   
        div.appendChild(estatura);   
        div.appendChild(peso);   
        div.appendChild(tipo);   
        personaje.appendChild(div);
    }
}

button.onclick = npc;
