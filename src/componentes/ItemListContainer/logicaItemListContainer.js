import data from './Productos';

const pedirProductos = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};

export default pedirProductos;