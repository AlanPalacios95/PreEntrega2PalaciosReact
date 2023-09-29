import { useState, useEffect } from 'react';
import ItemList from '../CardList/CardList';
import pedirProductos from '../logicaItemListContainer';
import '../Productos';
import { Ring } from '@uiball/loaders';
import './CardListContainerStyle.css'

const ItemListContainer = () => {
    const [Loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((data) => {
                setProductos(data);
                setLoading(false);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error al obtener los productos:', error);
            });
    }, []);

    return (
        <div>
            {Loading ? (
                <div className="loading-container">
                    <Ring color="#007bff" size={64} />
                    <span>Cargando . . .</span>
                </div>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;

