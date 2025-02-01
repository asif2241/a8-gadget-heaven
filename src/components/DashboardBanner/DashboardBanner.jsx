import { NavLink } from "react-router-dom"

const DashboardBanner = () => {
    return (
        <div>
            {/*  */}
            <div className="lg:px-4 px-2 ">
                <div className="hero bg-[#9538E2] rounded-xl  lg:h-[300px]  pt-8">
                    <div className="hero-content text-center text-white">
                        <div className="">
                            <h1 className="lg:text-4xl text-3xl font-bold">Dashboard</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className="">
                        <NavLink to="cart"  className={({ isActive }) => (isActive ? 'btn py-3 px-14 rounded-4xl font-semibold text-lg  bg-white text-green-400' : 'btn bg-transparent py-3 px-14 rounded-4xl font-semibold text-lg')}>Cart</NavLink>
                        <NavLink to="wishlist"  className={({ isActive }) => (isActive ? 'btn py-3 px-14 rounded-4xl font-semibold text-lg bg-white text-green-400' : 'btn bg-transparent py-3 px-14 rounded-4xl font-semibold text-lg ')}>Wish</NavLink>
                        </div>
                        </div>
                        {/* btn */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBanner