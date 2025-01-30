import { useEffect, useState } from "react"

import GadgetCard from "../GadgetCard/GadgetCard";

const GadgetCards = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(()=>{
        fetch('./gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
  return (
    <div className="lg:w-[1015px] border-amber-200 mx-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {
            gadgets.map(gadget => <GadgetCard gadget={gadget} key={gadget.product_id}></GadgetCard>)
        }
      </div>
    </div>
  )
}

export default GadgetCards