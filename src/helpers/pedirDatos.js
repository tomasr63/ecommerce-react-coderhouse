import products from '../data/productos.json';

export const pedirDatos = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
}

export const pedirXId = (id) => {
    return new Promise((res, rej) => {
        const producto = products.find(prod => prod.id === Number(id));

        if (producto) {
            setTimeout(() => {
                res(producto);
            }, 3000);
        } else {
            rej({
                Error: "no se encontraron resultados"
            })
        }
    });
}

export const pedirXCategoria = (category) => {
    return new Promise((res, rej) => {
        const productos = products.filter((prod) => prod.category === category);
        if (productos) {
            setTimeout(() => {
                res(productos);
            }, 1000)
        } else {
            rej({
                Error: "no se encontraron resultados"
            })
        }
    })
}