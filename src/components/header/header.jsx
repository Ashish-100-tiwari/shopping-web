import React from 'react'
import {Link }from "react-router-dom";
// import {HiShoppingCart} from "react-icons/io5";
import { BsShop } from "react-icons/bs";

const header = () => {
  return (
    <nav>
      <div>
        <BsShop/>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default header