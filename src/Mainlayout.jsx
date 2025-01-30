import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer/Footer"

export const Mainlayout = () => {
  return (
    <div className="bg-[#ECECEC]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
