import { Link } from 'react-router-dom'
import './ProductCardStyles.css'


export const ProductCard = ({ id, tittle, price, image, description }) => {
    return(
        <div>

        <h2 className="productInfo">
            <Link to={`/product/${id}`} >
                {tittle}
            
            </Link>
        </h2>
      <img className="productImage" src={image} alt="imagen de Producto" />
      {description&&<p>{description}</p>}
      <p>Price: {price}</p>
       </div>
    )

}
