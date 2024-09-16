import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Carrito.scss";
import { useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { cartItems, prod_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Título</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
        <br />
        <hr />
        {prod_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cart-items-remove-icon"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total en carrito</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Costo de Envio</p>
              <p>${getTotalCartAmount()===0?0:5000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+5000}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/DireccionEnvio')}>PROCEDER CON EL PEDIDO</button>
        </div>
        <div className="cart-promocode">
        <div>
            <p>Si conoces un hechizo de descuento, es el momento de usarlo.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Hocus...Pocus...'/>
              <button>Invocar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carrito;
