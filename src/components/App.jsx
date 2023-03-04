import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Cart/Cart';
import { Contacto } from './Contacto/Contacto';
import { Checkout } from './Checkout /Checkout';
import { CarritoProvider } from '../context/CarritoContext';
import { createOrdenCompra } from '../firebase/firebase';

function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            < Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <ToastContainer />
        </CarritoProvider>
      </BrowserRouter>


    </>
  );
}

export default App;
