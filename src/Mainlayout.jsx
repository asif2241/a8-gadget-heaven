import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer/Footer"
import {  useState } from "react"
import { CartContext } from "./components/Contexts/CartContext"
import { WishlistContext } from "./components/Contexts/WishlistContext"
 


export const Mainlayout = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([])
   


  return (
 <WishlistContext.Provider value={[wishlist, setWishlist]}>
  <CartContext.Provider value={[cart, setCart]}>
<div className="bg-[#ECECEC]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
</CartContext.Provider>
 </WishlistContext.Provider>
  )
}
