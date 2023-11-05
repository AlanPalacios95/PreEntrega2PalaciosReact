import Item from '../Item/Item';
import '../Item/Item.css';

const ItemList = ({ productos }) => {
    return (
        <>
       

            {productos.map((prod) => (
                <Item key={prod.id} producto={prod} />
            ))}
 
        </>
    );
};

export default ItemList;


