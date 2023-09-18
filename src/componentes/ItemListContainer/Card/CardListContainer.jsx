import ItemList from './CardList';
import pedirProductos from '../logicaItemListContainer';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

    return (
        <div>
            <ItemList key={productos.id} productos={productos} />
        </div>
    );
}

export default ItemListContainer;




