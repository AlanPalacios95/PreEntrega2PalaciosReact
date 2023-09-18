import './ItemListContainer.css';

function ItemListContainer(prop) {
    const { greeting } = prop;


    return (
        <div className='greeting'>
            <span className='greeting__title'>{greeting}</span>
            <span className='title__subtitle'>DEMENTESGAMERS</span>
        </div>
    )
}

export default ItemListContainer;