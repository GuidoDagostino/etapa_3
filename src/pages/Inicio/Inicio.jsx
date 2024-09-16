import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Menusec from '../../components/Menusec/menusec'
import ProductoDisplay from '../../components/ProductoDisplay/ProductoDisplay'
import Footer from '../../components/Footer/Footer'


const Inicio = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menusec category ={category} setCategory={setCategory}/>
      <ProductoDisplay category={category}/>
      <Footer/>
    </div>
  )
}

export default Inicio
