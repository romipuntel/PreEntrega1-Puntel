import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
import Categoria from './Categorias/Categoria';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/`}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mendoza-wine--puntel.appspot.com/o/logo.png?alt=media&token=85be3ef2-0f30-4624-bcad-0acd2f1a3101" className="logo" alt="logo"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Secciones />
                        <Categoria />
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
