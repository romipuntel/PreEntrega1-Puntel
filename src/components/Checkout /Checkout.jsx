import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';

export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]
        if (cliente.nombre.trim() === '' && cliente.email.trim() === '' && cliente.repEmail.trim() === '' && cliente.direccion.trim() === '' && cliente.celular.trim() === '') {
            toast.warning('Todos los campos son requeridos')
        } else if (cliente.email !== cliente.repEmail) {
            toast.warning('Los mails debes ser iguales')
        } else {
            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(prodBDD => {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
                toast.success(`Su orden de compra ${ordenCompra.id}fue realizada con exito, Muchas gracias`)
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }


    }

    return (

        <>
            {carrito.length === 0
                ?
                <>
                    <h2>No posee productos en el carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                </>
                :
                <div className="container" style={{ marginTop: "20px" }}>
                    <form onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                            <input type="text" className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="repEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" />
                        </div>

                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
            }

        </>

    )
}
