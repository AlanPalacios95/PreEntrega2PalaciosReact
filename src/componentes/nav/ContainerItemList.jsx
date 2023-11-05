import { Link } from 'react-router-dom';
import '../nav/NavbarStyle.css';
import { BsPlaystation } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';
import { BsNintendoSwitch } from 'react-icons/bs';

const ListProducts = () => {


    return (
        <div className='productlist__div'>
            <Link to="/" className="btn__link">

            <BsHouse className='btn__logo'/>
                <button className='btn__list'>
                    Home
                </button>
            </Link>
            
            <Link to="/category/Playstation5" className="btn__link">

                <BsPlaystation className='btn__logo' />

                <button className='btn__list'>
                    Playstation 5
                </button>

            </Link>
            <Link to="/category/Playstation4" className="btn__link">

                <BsPlaystation className='btn__logo' />

                <button className='btn__list'>
                    Playstation 4
                </button>
            </Link>
            <Link to="/category/Nintendo" className="btn__link">

                <BsNintendoSwitch className='btn__logo' />

                <button className='btn__list'>
                    Nintendo Switch
                </button>
            </Link>
        </div>
    );
}

export default ListProducts;




