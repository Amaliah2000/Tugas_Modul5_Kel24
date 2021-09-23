import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'

function ProductItem({product}) {
    // consuming contexts
    const {addToCart} = useContext(StateContext)

    // Cart button display
    function cartButton() {
        return (
            <button onClick={() => addToCart(product)} className="add-cart-btn">Add to Cart</button>
        ) 
    }

    // render JSX
    return (
        <div key={product.id} className="product-card">
            <div className="product-image">
                {/* product image */}
                <img src={product.url} alt="product" />
            </div>
            <div className="product-info">
                {/* product title */}
                <h5>{product.title}</h5>
                
                {/* product price */}
                <h6>$ {product.price}</h6>
                
                {/* cart button */}
                { cartButton() }

                {/* detail button */}
                <Link to={`/product/${product.id}`}>
                    <button className="view-detail-btn">
                        View Details
                    </button>
                </Link> 
            </div>
        </div>
    )
}

export default ProductItem
