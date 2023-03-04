import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { Await } from "react-router-dom";

const firebaseConfig = {
    apiKey: process.env.APY_KEY,
    authDomain: "mendoza-wine--puntel.firebaseapp.com",
    projectId: "mendoza-wine--puntel",
    storageBucket: "mendoza-wine--puntel.appspot.com",
    messagingSenderId: "390655761791",
    appId: "1:390655761791:web:0ddf67fccb813c73838e4a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            imagen: prod.imagen

        })
    })
}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}


export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}


export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = { ...ordenCompra.data(), id: ordenCompra.id }
    return oCompra
}