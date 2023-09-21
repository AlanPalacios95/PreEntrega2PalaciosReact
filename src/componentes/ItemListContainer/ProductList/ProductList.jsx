import './produclist.css';
import '../CardList/CardList';
import '../CardListContainer/CardListContainer';

const ListProducts = ({ handleFilterClick }) => {
    return (
        <div className='productlist__div'>
            <button onClick={() => handleFilterClick('Todos')} className='btn__list'>Todos</button>
            <button onClick={() => handleFilterClick("Playstation5")} className='btn__list'>Playstation 5</button>
            <button onClick={() => handleFilterClick("Playstation4")} className='btn__list'>Playstation 4</button>
            <button onClick={() => handleFilterClick("Nintendo")} className='btn__list'>Nintendo Switch</button>
        </div>
    );
}

export default ListProducts;





