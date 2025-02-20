import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "./Contexts/CartContext"
import { WishlistContext } from "./Contexts/WishlistContext";


export const Navbar = () => {

  const [cart] = useContext(CartContext);
  const  [wishlist] = useContext(WishlistContext);

  const links = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="statistics" >Statistics</NavLink></li>
  <li><NavLink to="dashboard">Dashboard</NavLink></li>
  
  </>
  return (
<div className="">
<nav className="navbar  max-w-[1280px] mx-auto">
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow">
      {
        links
      }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-gray-700">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  font-semibold">
     {
      links
     }
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to="/dashboard/cart" className="items-center relative p-2 rounded-full border border-gray-300">
      <span className="absolute -top-2 -right-1 font-medium text-lg text-gray-600">{cart.length}</span>
      <img className="w-5 " src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="" />
    </Link>
    <Link  to="/dashboard/wishlist" className="items-center relative p-2 rounded-full border border-gray-300">
      <span className="absolute -top-2 -right-1 font-medium text-lg text-gray-600">{wishlist.length}</span>
      <img className="w-5 " src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" />
    </Link>
  </div>
    </nav>
</div>
  )
}
