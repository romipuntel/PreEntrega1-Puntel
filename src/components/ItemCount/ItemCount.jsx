import { useState } from "react"
import { toast } from "react-toastify"
export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)
    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast(` Agregado al  carrito!`)
    }

    return (
        <>
            <button type="button" class="btn btn-outline-primary agregar " onClick={() => restar()}>-</button>
            {contador}
            <button type="button" class="btn btn-outline-primary agregar" onClick={() => sumar()}>+</button>
            <button type="button" class="btn btn-outline-primary comprar" onClick={() => agregarCarrito()}>Agregar al Carrito</button>
        </>
    );
}

