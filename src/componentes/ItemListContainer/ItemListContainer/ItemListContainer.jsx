import './itemListContainer.css';

function ItemListContainer(prop) {
    const { greeting } = prop;


    return (
        <div>
            <div className='greeting'>
                <span className='greeting__title'>{greeting}</span>
                <span className='title__subtitle'>DEMENTESGAMERS</span>
            </div>
        </div>
    )
}

export default ItemListContainer;