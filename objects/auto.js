class Auto {
    constructor(submarca, color, version) {
        this.model = '2021';
        this.marca = 'Peouget';
        this.submarca = submarca;
        this.color = color;
        this.puertas = 0;
        this.version = version;
        this.precio = 0;
    }

    obteniendoSubmarca(submarca) {
        if (submarca == 1)
            this.submarca = '208';
        if (submarca == 2)
            this.submarca = '2008';
        if (submarca == 3)
            this.submarca = '3008';
    }

    obteniendoColor(color) {
        if (color == 1)
            this.color = 'negro';
        if (color == 2)
            this.color = 'blanco';
        if (color == 3)
            this.color = 'rojo';
        if (color == 4)
            this.color = 'plata';
    }

    obteniendoVersion(version) {
        if (version == 1) 
            this.version = 'standard';
        if (version == 2)
            this.version = 'equipado';
        if (version == 3)
            this.version = 'sport';
    }

    numeroPuertas(version) {
        if (version != '3')
            this.puertas = 5;
        else
            this.puertas = 3;
    }

    obteniendoPrecio(submarca, version) {
        // Precio del auto.
        if (submarca == 1)
            this.precio = 200_000;
        if (submarca == 2)
            this.precio = 350_000;
        if (submarca == 3)
            this.precio = 450_000;

        // Precio por la version del auto.
        if (version == 2) 
            this.precio += 50_000;
        if (version == 3)
            this.precio += 100_000;
            
    }

    mostrarInformacion() {
        alert('Marca del auto: ' + this.marca +
             '\nModelo: ' + this.model +
             '\nSubmarca: ' + this.submarca +
             '\nColor del auto: ' + this.color + 
             '\nNumero de puertas: ' + this.puertas +
             '\nVersion del Auto: ' + this.version +
             '\nPrecio total: ' + this.precio);
    }
};

// App

alert('Bienvenido a la agencia Peugeot');

// El usuario debe ingresar un numero con la opcion de la submarca.
let submarca = prompt('Elige el auto de tu preferencia \n 1 - 208 \n 2 - 2008 \n 3 - 3008');

let version = prompt('Eliga la version de su auto. \n 1 - standar \n 2 - equipado \n 3 - sport');

let color = prompt('Eliga el color de su auto. \n 1 - negro \n 2 - blaco \n 3 - rojo \n 4 - plata');

let auto1 = new Auto(submarca, color, version);

auto1.obteniendoSubmarca(submarca);
auto1.obteniendoVersion(version);
auto1.obteniendoColor(color);
auto1.numeroPuertas(version);
auto1.obteniendoPrecio(submarca, version);
auto1.mostrarInformacion();