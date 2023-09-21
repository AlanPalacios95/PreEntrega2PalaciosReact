import HeaderImg from "./componentes/home/Portada";
import Navbar from "./componentes/nav/Navbar";
import './componentes/nav/Navbar.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer/ItemListContainer';
import CardListContainer from './componentes/ItemListContainer/CardListContainer/CardListContainer';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"DementesGamers"} />
      <HeaderImg />
      <CardListContainer  />
    </>
  )
}

export default App
