import React from 'react'
import './menusec.scss'
import { product_list } from '../../assets/assets'
const menusec = ({category,setCategory}) => {

  return (
    <div className='menusec' id='menusec'>
      <h1>Explora nuestras categorías encantadas</h1>
      <p className='menusec-texto'>Cada poción es meticulosamente preparada por gatos alquimistas (como nuestro querido asistente felino), que trabajan bajo la luz de la luna, combinando ingredientes mágicos en el caldero. Y no te preocupes... solo usamos ranas de las que croan de felicidad. 🐸🌙</p>
        <div className="menusec-lista">
            {product_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className='menusec-lista-item'>
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt="" />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default menusec
