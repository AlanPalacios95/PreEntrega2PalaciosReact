import './produclist.css';
import '../CardList/CardList';
import '../CardListContainer/CardListContainer';
import { Link } from "react-router-dom";

const ListProducts = ({ handleFilterClick }) => {
    return (
        <div className='productlist__div'>
            <Link to="/category/Todos" className="btn__link">
                <button onClick={() => handleFilterClick('Todos')} className='btn__list'>
                    Todos
                </button>
            </Link>
            <Link to="/category/Playstation5" className="btn__link">
                <button onClick={() => handleFilterClick("Playstation5")} className='btn__list'>
                    Playstation 5
                </button>
            </Link>
            <Link to="/category/Playstation4" className="btn__link">
                <button onClick={() => handleFilterClick("Playstation4")} className='btn__list'>
                    Playstation 4
                </button>
            </Link>
            <Link to="/category/Nintendo" className="btn__link">
                <button onClick={() => handleFilterClick("Nintendo")} className='btn__list'>
                    Nintendo Switch
                </button>
            </Link>
        </div>
    );
}

export default ListProducts;


