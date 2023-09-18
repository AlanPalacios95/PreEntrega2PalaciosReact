import Card from "./Card";
import ListProducts from "./ProductList";
import './card.css';

const ItemList = ({ productos }) => {
    return (
        <div >
            <ListProducts />
            <div className="itemlist__div">
            {productos.length > 0 &&
                productos.map((producto) => (
                    <Card key={producto.id} producto={producto} />
                ))
            }
            </div>
        </div>
    );
};

export default ItemList;