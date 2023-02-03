import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:nombre' element={<ItemDetailContainer />} />
          < Route path='/category/:idCategoria' element={<ItemListContainer />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
