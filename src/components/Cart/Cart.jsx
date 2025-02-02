import { useContext,  useEffect,  useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import {  useNavigate, useOutletContext } from "react-router-dom";



const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [cartItem, setCartItem]= useState([]);
    const [price, setPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [finalPrice, setFinalPrice] = useState(0); 
    const navigate = useNavigate();

   const data = useOutletContext();
     
  useEffect(()=>{
    const ItemsInCart = data.filter(gadget => cart.includes(gadget.product_id));
    setCartItem(ItemsInCart);

    const totalPrice = ItemsInCart.reduce((acc, item)=> acc + item.price, 0);
    setPrice(totalPrice);
    
  },[cart, data])
 




    const handleDelete=(id)=>{
    const newCart = cart.filter(idInCart => idInCart !== id);
    setCart(newCart)
    }
     
    // purchase  btn functionalities
    const handlePurchase = () => {
      setFinalPrice(price);
      setShowModal(true);
   
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      navigate("/"); 
      setCart([]);
      setPrice(0);
    };
 const handleSort = ()=>{
     const sortedCartItem = [...cartItem].sort((a, b)=> b.price - a.price);
     setCartItem(sortedCartItem)
 }

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex justify-between items-center my-3">
        <h2 className="font-semibold text-2xl">Cart</h2>
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold text-2xl">Total Cost: {price}$</h2>
          <button onClick={handleSort} className="btn bg-transparent text-[#9538E2] border border-[#9538E2] py-3 px-5 rounded-4xl">Sort by price <span><img className="w-4 " src="https://img.icons8.com/?size=100&id=xMjYU4jtu97u&format=png&color=9538E2" alt="" /></span></button>
          <button
            className="btn bg-[#9538E2] text-white py-2 px-3 rounded-4xl"
            onClick={handlePurchase}
            disabled={cart.length === 0 || price === 0}
          >
            Purchase
          </button>
        </div>
      </div>
        {
          cartItem.map((item,idx) => (
            <div key={idx} className="flex justify-between max-w-[1280px]  lg:mx-auto p-8 my-4 md:mx-3 rounded-3xl bg-white">
              <div className="flex-1">
                <img className="w-[200px] h-[140px] object-contain" src={item.product_image} alt="" />
              </div>
              <div className="justify-center flex-2">
                <h2 className="font-semibold text-2xl">{item.product_title}</h2>
                <p className="text-lg text-gray-400"><span className="font-semibold text-black">Description: </span>{item.description}</p>
                <p className="font-semibold text-lg">Price:  {item.price}$</p>

              </div>
                 <div className="flex-1 flex justify-end">
                  <div ><button onClick={()=>handleDelete(item.product_id)} >
                    <img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000" alt="" />
                    </button>
                    </div>
                 </div>
            </div>
          ))
        }
          {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-600">🎉 Congratulations! 🎉</h2>
            <p className="text-lg mt-2">Your purchase was successful!</p>
            <p className="text-lg mt-2">Total Cost:{price}$</p>
            <button
              onClick={handleCloseModal}
              className="btn mt-4 bg-gray-300 w-full font-semibold text-xl py-2 px-4 rounded-4xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart