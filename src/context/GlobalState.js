import React, {useState, useEffect} from "react"
import Swal from 'sweetalert2'

// creating `context`
const StateContext = React.createContext()

function StateProvider({children}){
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [favoriteItems, setFavoriteItems] = useState([])

    // fetching product data
    const url = "https://raw.githubusercontent.com/mahmud-sajib/ecommerce-store-product-data/master/data.json"
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json()) // get json data from api
        .then(data => setProducts(data)) // save data to `state` 
    }, [])

    function calcQuantity() {
        const totalQty = cartItems.reduce((total, product) => total + product.quantity, 0)
        setTotalItems(totalQty)
    }

    function addToCart(product){
        const index = cartItems.findIndex(item => item.id === product.id);
        if(index === -1){
            cartItems.push({...product, quantity:1})   
        } else {
            cartItems[index].quantity += 1 
        }
        calcQuantity()  
    }

    function removeFromCart(product){
        cartItems.pop(product)
        calcQuantity()
    }

    function increaseCount(id) {
        const index = cartItems.findIndex(item => item.id === id);
        cartItems[index].quantity += 1
        calcQuantity()
    }

    function decreaseCount(id) {
        const index = cartItems.findIndex(item => item.id === id);
        cartItems[index].quantity -= 1
        calcQuantity()
    }

    function addToFavorite(newItem){
        setFavoriteItems(prevItems => [...prevItems, newItem])
    }

    function removeFromFavorite(id){
        setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function resetCart() {
        setCartItems([])
        setTotalItems(0)
    }

    function checkOutCart() {
        resetCart()
        Swal.fire(
            'Congrats!',
            'You successfully placed an order!',
            'success'
        )
    }

    
    useEffect(() => {
        const totalPrices = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            setTotal(totalPrices);

    }, [totalItems, cartItems])
    
    return(
        <StateContext.Provider value={{products, total, totalItems, cartItems, addToCart, removeFromCart, favoriteItems, addToFavorite, removeFromFavorite, increaseCount, decreaseCount, resetCart, checkOutCart}}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider}