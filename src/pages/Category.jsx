import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from "../componentes/nav/Navbar";
import Productos from '../componentes/ItemListContainer/Productos';
import ProductList from '../componentes/ItemListContainer/ProductList/ProductList';
import Counter from "../componentes/ItemListContainer/Card/Counter";


const CategoryPage = () => {
    const { categoryName } = useParams();
    console.log(categoryName);
    const filteredProducts = categoryName === "Todos" ? Productos : Productos.filter(product => product.category === categoryName);

    return (
        <div>
            <Navbar />
            <ProductList />
            <h2>Categoría: {categoryName}</h2>
            <div className="card-container">
                {filteredProducts.map(product => {
                    const page = `/ItemDetails/${product.id}`;
                    return (
                        <div className="card" key={product.id}>
                            <img className="card__img" src={product.imagen} alt={product.titulo} />
                            <h2 className='card__h2'>{product.titulo}</h2>
                            <Link to={page}>
                                <button>Ver detalles</button>
                            </Link>
                            <Counter />
                            <span className='card__price'>${product.price}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CategoryPage;