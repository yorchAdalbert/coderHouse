
function ordernar(array) {
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-1; j++) {
            if(array[j] > array[j+1]) {
                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
}

const precios = [100, 500, 250, 50, 75, 200, 10, 5, 15, 125, 300];

alert('Lista de precios desordenada\n' + precios.join(' '));

ordernar(precios);

alert('Lista de precios ordenada de menor a mayor\n' + precios.join(' '));