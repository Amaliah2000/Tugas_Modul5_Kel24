import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
    // consuming context
    const {totalItems} = useContext(StateContext)

    // render JSX
    return (
        <nav>
            <div className="logo">
                <Link to='/'>24'S Store</Link>
            </div>
            <ul className="nav-items">
                <li ><Link to='/'>Store </Link></li>
                <li><Link to='/about'>Make A Purchase</Link></li>
            </ul>
            <ul className="nav-icons">
                <li> 
                    <Link to='/cart'>
                        <i className="ri-shopping-basket-2-line"></i>
                        <span className="item-count">{totalItems}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
