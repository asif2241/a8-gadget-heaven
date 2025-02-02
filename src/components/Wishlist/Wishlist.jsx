import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "../Contexts/WishlistContext";
import { useOutletContext } from "react-router-dom";


const Wishlist = () => {
  const  [wishlist, setWishlist] = useContext(WishlistContext);
  const [wishlistItem, setWishlistItem]= useState([]);
  const data = useOutletContext();
  
   useEffect(()=>{
    const ItemsInWishlist = data.filter((gadget => wishlist.includes(gadget.product_id)));
    setWishlistItem(ItemsInWishlist);
   },[data, wishlist])

   const handleDelete=(id)=>{
    const newWishlist = wishlist.filter(idInWishlist => idInWishlist !== id);
    setWishlist(newWishlist)
    }
  return (
    <div>
      <div>
      {
          wishlistItem.map((item,idx) => (
            <div key={idx} className="flex justify-between max-w-[1280px]  lg:mx-auto p-8 my-4 md:mx-3 rounded-3xl bg-white">
              <div className="flex-1">
                <img className="w-[200px] h-[140px] object-contain" src={item.product_image} alt="" />
              </div>
              <div className="justify-center flex-2">
                <h2 className="font-semibold text-2xl">{item.product_title}</h2>
                <p className="text-lg text-gray-400"><span className="font-semibold">Description: </span>{item.description}</p>
                <p className="font-semibold text-lg">Price:  {item.price}$</p>

              </div>
                 <div className="flex-1 flex justify-end">
                  <div>
                    <button onClick={()=>handleDelete(item.product_id)}>
                    <img className="w-6 cursor-pointer" src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000" alt="" />
                      </button>
                      </div>
                 </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Wishlist