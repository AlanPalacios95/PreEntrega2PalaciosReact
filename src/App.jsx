import Navigation from './routes/Navigation';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <CartProvider>
        <Navigation />
        <ToastContainer />
      </CartProvider>
    </>
  );
}

export default App;