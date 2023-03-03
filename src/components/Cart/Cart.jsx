import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const Cart = () => {
    const carrito = [   
       
    ]

    return (
        <>
            {carrito.Lenght === 0
                ?
                <>
                    <h2> Carrito Vacio </h2>
                    <Link className="nav-link" to={'./'}><button className="btn btn-outline-primary">Continuar Comprando</button> </Link>
                </>
                :
                <div className="container cartContainer">
                    {
                        <ItemList products={carrito} plantilla={'itemCart'} />
                    }

                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-outline-primary">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-outline-primary">Continuar Comprando</button></Link>
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-outline-primary">Finalizar compra</button></Link>
                    </div>
                </div>

            }
        </>
    )
}

export default Cart;
