function precio() {
    let precio = prompt('Ingrese el precio del producto.');
    let numeroPrecio = parseInt(precio);
    
    return numeroPrecio;
}

const sumarIva = (precio, iva) => {
    const sumarIva = precio * iva;

    return precio + sumarIva;
}

const mostrarInfo = precioTotal => {
    alert('El precio total del producto con iva es: ' + precioTotal);
}

// Usando la app

const iva = .16;

let precioProducto = precio();
let precioTotal = sumarIva(precioProducto, iva);

mostrarInfo(precioTotal);