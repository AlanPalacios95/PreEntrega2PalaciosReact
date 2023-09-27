import { useState } from 'react';
import Card from '../Card/Card';
import ListProducts from '../ProductList/ProductList';
import '../Card/Card.css';


const ItemList = ({ productos }) => {
    const [filterByCategory, setFilterByCategory] = useState('Todos');

    const handleChangeCategory = (category) => {
        setFilterByCategory(category);
    };

    const filteredProducts = productos.filter((producto) => {
        if (filterByCategory === 'Todos' || producto.category === filterByCategory) {
            return true;
        }
        return false;
    });

    return (
        <div>
            <ListProducts handleFilterClick={handleChangeCategory} />
            <div className="itemlist__div">
                {filteredProducts.length > 0 &&
                    filteredProducts.map((producto) => (
                        <Card key={producto.id} producto={producto} />
                    ))
                }
            </div>
        </div>
    );
};

export default ItemList;




