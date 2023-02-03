import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
    return (
        <div className="card" style={{ width: '12rem' }}>
            <img src={`../assets/${item.imagen}`} className="img-fluid rounder-start card-image" alt={`imagen de ${item.nombre}`} />
            < div className="card" id="card${producto.id}">
                <div className="card-name">Nombre: {item.nombre}</div>
                <div className="card-price">Precio:{item.precio}</div>
                <div className='card-text'>Stock: {item.stock}</div>
                <ItemCount valInicial={1} stock={item.stock} />
                <button type="button" class="btn btn-outline-primary compra">Comprar</button>
            </div>
        </div>


    );
}

export default ItemDetail;
