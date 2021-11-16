
let numero = prompt('Ingresa un numero del 1 al 100');
let numeroSecreto = Math.floor(Math.random() * 100);
let intentos = 1;

while (numero != numeroSecreto && numero != null) {
  
    if (numero > numeroSecreto)
        numero = prompt('Ingrese un menor que ' + numero);
    if (numero < numeroSecreto)
        numero = prompt('Ingrese un numero mayor ' + numero);

        intentos++;
        
}

if (intentos === 1 && numero != null)
    alert('Eres un Master adivinando numeros.!');
if (intentos > 1 && numero != null)
    alert('Te tomo ' + intentos + ' intentos para poder adivinar el numero secreto.!');

if (numero == null) alert('Gracias por jugar.!');