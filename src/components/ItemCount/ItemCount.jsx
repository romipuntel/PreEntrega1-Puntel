import {useState } from "react"

export const ItemCount = ({valInicial,stock }) => {

const [contador, setContador] = useState(valInicial)
const sumar = () => (contador < stock) && setContador(contador +1)
const restar = () => (contador > valInicial) && setContador (contador -1)


return (
 <>
    <button type="button" class="btn btn-outline-warning" onClick = {() => sumar()}>+</button>
     {contador}
     <button type="button" class="btn btn-outline-warning" onClick = {() => restar()}>-</button>

 </>
    );
}

export default ItemCount;
