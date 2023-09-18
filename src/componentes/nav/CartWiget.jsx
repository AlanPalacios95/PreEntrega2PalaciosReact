import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css';

const Carrito = () => {
    const juegos = 3;
    return (
        <div className='cartwiger__div'> 
        <AiOutlineShoppingCart className='cartwiget__img' />
            <span className='cartwiget__cantcart'>{juegos}</span>
        </div>
    );
};

export default Carrito;
