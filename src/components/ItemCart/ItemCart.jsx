import { useCarritoContext } from "../../context/CarritoContext";
export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()

    return (

        <div className="card mb8 cartCard">
            <div divclassName="row g-0">
                <div className="row">
                    <img src={item.imagen} className="card-img-top" alt={`Imagen de producto ${item.nombre}`} />
                </div>
                <div className="row-md-04">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Cantidad:{item.cant}</p>
                        <p className="card-text">Precio Unitario: u$s {item.precio}.</p>
                        <p className="card-text">Subtotal: u$s{item.precio * item.cant}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;
