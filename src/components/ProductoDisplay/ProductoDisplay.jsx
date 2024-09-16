import React, { useContext } from 'react'
import './ProductoDisplay.scss'
import { StoreContext } from '../../Context/StoreContext'
import Productitem from '../ProductItem/Productitem'


const ProductoDisplay = ({category}) => {

    const {prod_list} = useContext(StoreContext)
  return (
    <div className='producto-display' id='producto-display'>
        <h2>Todo lo que necesitas!</h2>
      <div className="lista-productos">
        {prod_list.map((item,index)=>{
          if (category ==="All" || category===item.category){
            return <Productitem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div>
  )
}

export default ProductoDisplay
