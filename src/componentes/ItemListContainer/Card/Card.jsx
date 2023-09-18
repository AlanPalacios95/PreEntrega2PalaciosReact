import './card.css';
import Counter from'./Counter';

const Card = ({ producto }) => {

    return (

        <div className="card" key={producto.id}>
            <img className="card__img" src={producto.imagen} alt={producto.titulo} />
            <h2 className='card__h2'>{producto.titulo}</h2>
            <Counter />
            <span className='card__price'>${producto.price}</span>
        </div>

    )
}

export default Card;