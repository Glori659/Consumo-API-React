import { ProductCard } from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';



export const Products = () => {
    const [products, setProducts] = useState([])

  useEffect (() =>{
    axios.get('https://fakestoreapi.com/products').then((result) =>{
    setProducts(result.data)
    //console.log(products)
    })
  }, [])


  return (
    <div className="App">
     <h1>  Lista de Productos </h1>
     {products && products.map((products) => {
      return (
        <ProductCard 
        key={products.id}
        id={products.id}
        tittle={products.title} 
        image={products.image}
        price={products.price}/>
      )
     })}
   
    </div>
  );
}