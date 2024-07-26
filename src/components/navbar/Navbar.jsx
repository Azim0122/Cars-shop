import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar({cart}) {
  return (
    <nav>
        <div className="navbar_top">
            <div className="container">
                <div className="right">
                    <img src="./public/imgs/Frame.svg" alt="" />
                    <p>Toshkent</p>
                </div>
                <div className="left">
                    <select name="" id="">
                        <option value="">Uz</option>
                        <option value="">Rus</option>
                        <option value="">Us</option>
                    </select>
                    <div className="tel">
                    <img src="./public/imgs/telephon.svg" alt="" />
                    <p>+998999999999</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar_bottom">
           <div className="container">
           <Link to={"/"}>
           <div className="logo">
               <h1>Cars shop</h1>
            </div>
           </Link>
            <div className="input">
                <input placeholder='Nomi va turi bo’yicha qidiruv' type="text" />
                <img src="./public/imgs/search.svg" alt="" />
            </div>
            <div className="cart">
                <Link to={"/about"}>
                <img src="./public/imgs/cart.svg" alt="" />
                <span>{cart.length}</span>
                </Link>
                <img src="./public/imgs/like.svg" alt="" />
                <Link to={"/login"}>
                <img src="./public/imgs/user.svg" alt="" />
                </Link>
            </div>
           </div>
        </div>
    </nav>
  )
}

export default Navbar