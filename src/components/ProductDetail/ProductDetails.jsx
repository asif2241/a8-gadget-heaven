import { useContext } from "react";
import {  useLoaderData, useParams } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext";
import { WishlistContext } from "../Contexts/WishlistContext";


const ProductDetails = () => {

  const [cart, setCart] = useContext(CartContext);
  const  [wishlist, setWishlist] = useContext(WishlistContext);

  const handleCart = (id)=>{
    if(cart.includes(id)){
      console.log('alredy exist');
      return
    }
     setCart([...cart, id])
  }

  const handleWishlist = (id)=>{
    if(wishlist.includes(id)){
      console.log('already exists in the wishlish');
      return
    }
    setWishlist([...wishlist, id])
  }
    
  const {productId} = useParams()
  const id = parseInt(productId);
  const data = useLoaderData();
   const products = data.filter(product => product.product_id === id);
   const product = products[0];
   const {rating, availability, Specification, description,product_title, product_image, price} = product
   
  return (
<div className="mb-10 max-w-[1540px] mx-auto">
<div className="lg:px-8 px-4 ">
        <div className="hero bg-[#9538E2] rounded-xl lg:pb-15 pb-10  lg:h-[300px]  pt-8">
  <div className="hero-content text-center text-white">
    <div className="">
      <h1 className="lg:text-4xl text-3xl font-bold">Product Details</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>
    </div>

    {/*  */}
   <div className='w-[60%] md:w-[70%] mx-auto lg:h-[550px] lg:-mt-[5%] md:-mt-[4%] -mt-[15%] '>
   <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className="p-4">
    <img className="max-w-[300px] max-h-[250px] object-contain"
      src={product_image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h3 className="card-title font-semibold text-3xl">{product_title}</h3>
    <h5 className="font-semibold text-xl"> Price:  {price}$</h5>
    <button className="btn w-fit text-[#309C08] bg-[#309C081A] rounded-3xl">{availability ? 'In stock': 'Our of Stock'}</button>
  <p className="text-[#09080F99] ">{description}</p>
  
  <h5 className="font-semibold text-xl">Specification:</h5>
    <ol className="list-decimal ml-2.5 text-[#09080F99]">
      {
        Specification.map((spec, idx)=> <li key={idx}>{spec}</li>)
      }
    </ol>
  
  <h3  className="font-semibold text-xl">Rating:</h3>
  <div className="flex items-center">
<span>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
</span>
<span className="bg-gray-200 ml-2 py-1 px-2 rounded-3xl">
  {rating}
</span>
  </div>
    <div className="card-actions">
      <button onClick={()=>handleCart(id)} className="btn btn-primary bg-[#9538E2] text-white">Add To Cart <span><img className="w-4" src="https://img.icons8.com/?size=100&id=9671&format=png&color=FFFFFF" alt="" /></span></button>
      <div onClick={()=>handleWishlist(id)} className="items-center relative p-2 rounded-full border border-gray-300 cursor-pointer">

      <img className="w-5 " src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" />
    </div>
    </div>
  </div>
</div>
   </div>
</div>
  )
}

export default ProductDetails