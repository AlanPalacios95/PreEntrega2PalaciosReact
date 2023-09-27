import CardListContainer from '../componentes/ItemListContainer/CardListContainer/CardListContainer';
import Navbar from '../componentes/nav/Navbar';
import Portada from '../componentes/home/Portada';


const Home = () => {
    return (
        <>
            <Navbar />
            <Portada />
            <CardListContainer />
        </>
    );
};

export default Home;