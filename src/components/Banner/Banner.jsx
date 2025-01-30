import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
  return (
<div className="mb-10 max-w-[1540px] mx-auto">
<div className="lg:px-8 px-4 ">
        <div className="hero bg-[#9538E2] rounded-xl lg:pb-32 pb-16  lg:h-[600px]  pt-8">
  <div className="hero-content text-center text-white">
    <div className="">
      <h1 className="lg:text-5xl text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn text-[#9538E2] bg-white rounded-3xl px-8 border-none  font-bold">Shop Now</button>
    </div>
  </div>
</div>
    </div>

    {/*  */}
   <div className='w-[60%] mx-auto lg:h-[550px] lg:-mt-[10%] md:-mt-[7%] -mt-[15%] '>
    <img className='w-full h-full object-cover rounded-3xl  outline-2 outline-offset-8 outline-white ' src={bannerImg} alt="" />
   </div>
</div>
  )
}

export default Banner