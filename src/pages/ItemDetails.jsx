import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productos from '../componentes/ItemListContainer/Productos';
import Counter from "../componentes/ItemListContainer/Card/Counter";
import Navbar from "../componentes/nav/Navbar";
import "./ItemDetailsStyle.css";

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
            <div className="item-details">
                <img className="item-details__image" src={product.imagen} alt={product.titulo} />
                <div className="item-details__info">
                    <h2 className="item-details__title">{product.titulo}</h2>
                    <p className="item-details__description">{product.description}</p>
                    <Counter />
                    <span className="item-details__price">${product.price}</span>
                </div>
            </div>
        </>
    );
}

export default ItemDetails;




