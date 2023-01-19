import CartWidget from '../CartWidget/CartWidget';
import Secciones from './Secciones/Secciones';
import Categoria from './Categorias/Categoria';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a classname="navbar-brand" href="./index.html">
                    <img src="../public/logo.png" alt="logo" /></a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">


                        <Secciones />
                        <Categoria />
                    </ul>
                </div>
                <CartWidget />
            </div></nav>

    );
}

export default Navbar;
