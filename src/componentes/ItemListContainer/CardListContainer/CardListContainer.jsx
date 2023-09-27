import { useState, useEffect } from 'react';
import ItemList from '../CardList/CardList';
import pedirProductos from '../logicaItemListContainer';
import '../Productos';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((data) => {
                setProductos(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;



