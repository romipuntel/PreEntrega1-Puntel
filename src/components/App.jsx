import './App.css';
import Navbar from './Navbar/Navbar';
import {ItemCount} from './ItemCount/ItemCount';



function App() {
  return (
    <>
      <Navbar/>
      <ItemCount valInicial={1} stock ={23}/>
  
    </>
  );
}

export default App;
