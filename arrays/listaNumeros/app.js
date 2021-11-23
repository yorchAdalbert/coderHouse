function agregarNumeros(entradaInt, arrayNumeros) {
    for (let i = 0; i < entradaInt; i++) {
        let numero = prompt('Ingrese una numero');
        let numeroInt = parseInt(numero);
        arrayNumeros.push(numeroInt);
    }
}

function multiplicarNumero (numero, arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length; i++) {
        arrayNumeros[i] *= numero;
    }
}

const numeros = [];
let opcion = '';


while (opcion != 4 && opcion != null) {
    opcion = prompt('1 - agregar numeros\n' +
                    '2 - Multiplicar tu lista de numeros\n' +
                    '3 - imprimir tu lista de numeros\n' +
                    '4 - Salir');
    
    if (opcion == '1') {
        let entrada = prompt('Vamos a crear una lista de numeros' + 
                  '\n¿Cuantos numeros quieres guardar?');

        let entradaInt = parseInt(entrada);
        agregarNumeros(entradaInt, numeros);
    }

    if (opcion == '2') {
        if (numeros.length === 0) {
            alert('No tienes ningun numero guardado en tu lista.')
        } else {
            let entrada = prompt('Escribir el valor a multiplicar');
            let entradaInt = parseInt(entrada);
            multiplicarNumero(entradaInt, numeros);
        }
    }

    if (opcion == '3') {
        if (numeros.length == 0) {
            alert('No tienes ningun numero guardado en tu lista');
        } else {
            alert(numeros.join(' '));
        }
  
    }

}

alert('Gracias por usar el software!');