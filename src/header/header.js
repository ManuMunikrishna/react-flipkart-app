import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
    <div className='logo1'>
        <h1 className='title1'>Flipkart</h1>
        <h5 className='title2'>Explore Plus +</h5>
    </div>
    <input className="search-bar" placeholder='Search for products, brands and more'/>
    <button>Login</button>
    <h3>Become a Seller</h3>
    <h3>More</h3>
    <h3>Cart</h3>

</div>
  )
}

export default Header