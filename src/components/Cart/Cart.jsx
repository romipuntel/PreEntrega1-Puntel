import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/CarritoContext";
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {carrito.Lenght === 0
                ?
                <>
                    <h2>Carrito Vacio</h2>
                    <Link className="nav-link" to={'./'}><button className="btn btn-outline-primary">Continuar Comprando</button> </Link>
                </>
                :
                <div className="container cartContainer">
                    {<ItemList products={carrito} plantilla={'itemCart'} />}
                    <div className="divButtons">
                        <p>Resumen de la compra: u$s {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="btn btn-outline-primary" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-outline-primary">Continuar Comprando</button></Link>
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-outline-primary">Finalizar compra</button></Link>
                    </div>
                </div>

            }
        </>
    )
}
