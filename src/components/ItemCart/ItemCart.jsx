import { useCarritoContext } from "../../context/CarritoContext";
export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()
    
    return (

        <div className="card mb8 cartCard">
            <div divclassName="row g-0">
                <div className="row-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt={`Imagen de producto ${item.nombre}`} />
                </div>
                <div className="row-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-title">Cantidad:{item.cantidad}</p>
                        <p className="card-text">Precio Unitario: u$s {item.precio}.</p>
                        <p className="card-text">Subtotal: u$s{item.precio * item.cantidad}</p>
                        <button className="button button-outline button-delete"><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;
