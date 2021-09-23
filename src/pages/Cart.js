import React, {useContext} from 'react'
import CartItem from '../components/CartItem/CartItem'
import { StateContext } from '../context/GlobalState'

function Cart() {
    // consuming contexts
    const {cartItems} = useContext(StateContext)
    
    // render JSX
    return (
        <>
        <section className="cart-section" >
            {
                cartItems.map((item) => <CartItem key={item.id} item={item}/>)
            }
            
        </section>
        </>
    )
}

export default Cart
