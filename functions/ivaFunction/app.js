function precio() {
    let precio = prompt('Ingrese el precio del producto.');
    let numeroPrecio = parseInt(precio);
    
    return numeroPrecio;
}

const sumarIva = (precio, iva) =>  precio * iva;

const mostrarInfo = precioTotal => {
    alert('El precio total del producto con iva es: ' + precioTotal);
}

// Usando la app

const iva = 1.16;

let precioProducto = precio();
let precioTotal = sumarIva(precioProducto, iva);

mostrarInfo(precioTotal);