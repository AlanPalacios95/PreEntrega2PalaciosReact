import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productos from '../componentes/ItemListContainer/Productos';
import Counter from "../componentes/ItemListContainer/Card/Counter";
import Navbar from "../componentes/nav/Navbar";

const ItemDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productId = parseInt(id);
        console.log(productId);

        const filteredProduct = Productos.find(prod => prod.id === productId);

        if (filteredProduct) {
            setProduct(filteredProduct);
            console.log("filteredProduct:", filteredProduct);
        }
    }, [id]);

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="card" key={product.id}>
                <img className="card__img" src={product.imagen} alt={product.titulo} />
                <h2 className='card__h2'>{product.titulo}</h2>
                <p className='card__price'>{product.description}</p>
                <Counter />
                <span className='card__price'>${product.price}</span>
            </div>
        </>
    );
}

export default ItemDetails;




