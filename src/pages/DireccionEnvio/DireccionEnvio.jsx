import React, { useContext, useEffect, useState } from 'react'
import './DireccionEnvio.scss'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const DireccionEnvio = () => {

    const [data, setData] = useState({
        Nombre: "",
        Apellido: "",
        Correo: "",
        Direccion: "",
        Ciudad: "",
        Provincia: "",
        Codigo_Postal: "",
        Pais: "",
        Telefono: ""
    })

    const { getTotalCartAmount, placeOrder } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    return (
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Informacion de entrega</p>
                <div className="multi-field">
                    <input type="text" name='Nombre' onChange={onChangeHandler} value={data.Nombre} placeholder='Nombre' />
                    <input type="text" name='Apellido' onChange={onChangeHandler} value={data.Apellido} placeholder='Apellido' />
                </div>
                <input type="email" name='Correo' onChange={onChangeHandler} value={data.Correo} placeholder='Correo' />
                <input type="text" name='Direccion' onChange={onChangeHandler} value={data.Direccion} placeholder='Direccion' />
                <div className="multi-field">
                    <input type="text" name='Ciudad' onChange={onChangeHandler} value={data.Ciudad} placeholder='Ciudad' />
                    <input type="text" name='Provincia' onChange={onChangeHandler} value={data.Provincia} placeholder='Provincia' />
                </div>
                <div className="multi-field">
                    <input type="text" name='Codigo_Postal' onChange={onChangeHandler} value={data.Codigo_Postal} placeholder='Codigo Postal' />
                    <input type="text" name='Pais' onChange={onChangeHandler} value={data.Pais} placeholder='Pais' />
                </div>
                <input type="text" name='Telefono' onChange={onChangeHandler} value={data.Telefono} placeholder='Telefono' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total en el Carrito</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Costo de envio</p><p>${getTotalCartAmount() === 0 ? 0 : 5000}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5000}</b></div>
                    </div>
                </div>
                <div className="payment-options">
                    <h2>Elegi el metodo de pago</h2>
                    <div className="payment-option">
                        <img src={assets.selector_icon} alt="" />
                        <p>Efectivo ( Pago en puerta )</p>
                    </div>
                    <button onClick={() => placeOrder(data)}>Comprar!</button>
                </div>
            </div>
        </div>
    )
}
export default DireccionEnvio
