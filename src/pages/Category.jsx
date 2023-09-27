import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Navbar from "../componentes/nav/Navbar";
import Productos from '../componentes/ItemListContainer/Productos';
import ProductList from '../componentes/ItemListContainer/ProductList/ProductList';
import Counter from "../componentes/ItemListContainer/Card/Counter";
import './CategoryStyle.css';


const CategoryPage = () => {
    const { categoryName } = useParams();
    console.log(categoryName);
    const filteredProducts = categoryName === "Todos" ? Productos : Productos.filter(product => product.category === categoryName);

    return (
        <div>
            <Navbar />
            <ProductList />
            <div className="category">
            <h2 className="category__title"> {categoryName}</h2>
            <span className="category__span"> {categoryName}</span>
            </div>
            <div className="category__grid">
                {filteredProducts.map(product => {
                    const page = `/ItemDetails/${product.id}`;
                    return (
                        <div className="category__item" key={product.id}>
                            <img className="category__item-img" src={product.imagen} alt={product.titulo} />
                            <h2 className='category__item-title'>{product.titulo}</h2>
                            <Link to={page} className='category__item-link'>
                                <button className='category__item-button'>Ver detalles</button>
                            </Link>
                            <Counter className='category__item-counter' />
                            <span className='category__item-price'>${product.price}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CategoryPage;