/* eslint-disable react/prop-types */

const GadgetCard = ({ gadget }) => {
    const {price, product_image, product_title} = gadget
    return (
        <div>
            <div className="card h-[400px] bg-base-100 p-5">
                <figure className="">
                    <img className="max-w-[282px] max-h-[200px] object-contain rounded-3xl"
                        src={product_image}
                        alt={product_image} />
                </figure>
                <div className="card-body p-2">
                    <h2 className="card-title font-semibold text-2xl">{product_title}</h2>
                    <p className="font-medium text-lg text-gray-400">Price:   {price}$</p>
                    <button className="btn max-w-[160px] rounded-4xl border-[#9538E2] text-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default GadgetCard