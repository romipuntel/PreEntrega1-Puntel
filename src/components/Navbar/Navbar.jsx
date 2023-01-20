import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
import Categoria from './Categorias/Categoria';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid">
             <a className="navbar-brand" href="#"></a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
             </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul className="navbar-nav">
                        <Secciones />
                        <Categoria />
                 </ul>  
             </div>
                <CartWidget />
            </div>
        </nav>

    );
}

export default Navbar;
