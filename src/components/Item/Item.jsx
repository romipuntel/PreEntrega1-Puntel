import { Link } from "react-router-dom"

export const Item = ({ item }) => {
  return (
    <div className="card" id="card${producto.id}">
      <div className="card-image"><img src={item.imagen} className="imagen" /></div>
      <div className="card-name">{item.nombre}</div>
      <div className="card-price"> u$s{item.precio}</div>
      <div className="card-button">
        <button type="button" class="btn btn-outline-primary"><Link className="nav-link" to={`/item/${item.id}`}>Ver producto</Link></button>
      </div>
    </div>

  )
}

