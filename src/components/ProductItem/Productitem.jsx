import React, { useContext} from 'react'
import './Productitem.scss'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const Productitem = ({id,name,price,description,image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='item-producto'>
      <div className="item-producto-img-contenedor">
        <img className='imagen-producto' src={image} alt="" />
        {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="producto-counter">
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
                }
      </div>
      <div className="producto-info">
        <div className="producto-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="producto-descripcion">{description}</p>
        <p className="producto-item-precio">${price}</p>
      </div>
    </div>
  )
}

export default Productitem
