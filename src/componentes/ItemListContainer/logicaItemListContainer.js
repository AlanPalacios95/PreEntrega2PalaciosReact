import data from './Productos';

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}


export default pedirProductos;