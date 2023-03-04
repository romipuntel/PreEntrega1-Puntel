import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item, cantidad)
    }

    return (

        <div className="card" style={{ width: '19rem' }}>
            <img src={item.imagen} className="img-fluid rounder-start card-image" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio:u$s {item.precio}</li>
                <li className="list-group-item">Stock: {item.stock}</li>
            </ul>
            <div className="card-body">
                <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} />
                <Link className="nav-link" to="/cart" ><button type="button" class="btn btn-outline-primary compra">Finalizar Compra</button></Link>
            </div>

        </div >


    );
}

