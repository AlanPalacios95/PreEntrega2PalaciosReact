import Navbar from "../nav/Navbar";
import "../ItemDetailContainer/ItemDetailsStyle.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ItemDetails.css";

const ItemDetails = ({ item }) => {
    const { cart, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(item, cantidad);
        mostrarNotificacion(); 
    }

    const mostrarNotificacion = () => {
        toast.success("Producto añadido al carrito", {
            position: "top-right",
            autoClose: 3000, 
            className: "custom__toast",
        });
    }

    return (
        <>
            <Navbar />
            <div className="item-details">
                <img className="item-details__image" src={item.imagen} alt={item.titulo} />
                <div className="item-details__info">
                    <h2 className="item-details__title">{item.titulo}</h2>
                    <p className="item-details__description">{item.description}</p>
                    <span className="item-details__price">${item.price}</span>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { handleAgregarAlCarrito(); }}
                    />
                </div>
            </div>
        </>
    );
}

export default ItemDetails;